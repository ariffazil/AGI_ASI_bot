import fs from "node:fs";
import path from "node:path";

const QDRANT_URL = "http://10.0.0.5:6333";
const QDRANT_KEY = "arifos_qdrant_2026";
const EMBED_URL = "http://10.0.0.1:8001/v1/embeddings";
const EMBED_KEY = "SK-ARIFOS-FORGE";
const COLLECTION = "arif-sessions";

const QHEADERS = { "Content-Type": "application/json", "api-key": QDRANT_KEY };

async function ensureCollection() {
  try {
    const check = await fetch(`${QDRANT_URL}/collections/${COLLECTION}`, { headers: QHEADERS });
    if (check.status === 404) {
      await fetch(`${QDRANT_URL}/collections/${COLLECTION}`, {
        method: "PUT",
        headers: QHEADERS,
        body: JSON.stringify({ vectors: { size: 384, distance: "Cosine" } }),
      });
    }
  } catch (e) {
    console.error("[arif-session-archive] Qdrant collection check failed:", e);
  }
}

async function embed(text: string): Promise<number[]> {
  const res = await fetch(EMBED_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${EMBED_KEY}` },
    body: JSON.stringify({ model: "bge", input: text }),
  });
  const data = await res.json();
  return data.data[0].embedding;
}

async function pushToQdrant(summary: string, payload: Record<string, unknown>) {
  try {
    await ensureCollection();
    const vector = await embed(summary);
    const id = Date.now();
      await fetch(`${QDRANT_URL}/collections/${COLLECTION}/points`, {
        method: "PUT",
        headers: QHEADERS,
        body: JSON.stringify({
          points: [{ id, vector, payload: { ...payload, summary, indexed_at: new Date().toISOString() } }],
        }),
      });
    console.log(`[arif-session-archive] Pushed to Qdrant id=${id}`);
  } catch (e) {
    console.error("[arif-session-archive] Qdrant push failed:", e);
  }
}

function writeMemoryFile(workspaceDir: string, summary: string, sessionKey: string) {
  try {
    const memDir = path.join(workspaceDir, "memory");
    fs.mkdirSync(memDir, { recursive: true });
    const date = new Date().toISOString().split("T")[0];
    const slug = sessionKey.replace(/[^a-z0-9]/gi, "-").slice(0, 30).toLowerCase();
    const filePath = path.join(memDir, `${date}-archive-${slug}.md`);
    const content = `# Session Archive: ${date}\n\n**Session:** ${sessionKey}\n**Archived:** ${new Date().toISOString()}\n\n${summary}\n`;
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`[arif-session-archive] Wrote ${filePath}`);
  } catch (e) {
    console.error("[arif-session-archive] Memory write failed:", e);
  }
}

const handler = async (event: any) => {
  if (event.type !== "command" || !["new", "reset"].includes(event.action)) return;

  const sessionKey = event.sessionKey ?? "unknown";
  const workspaceDir = event.context?.workspaceDir ?? `${process.env.HOME}/.openclaw/workspace`;
  const channel = event.context?.commandSource ?? "unknown";
  const date = new Date().toISOString().split("T")[0];

  const summary = `Session archived on ${date}. Session: ${sessionKey}. Channel: ${channel}. Action: /${event.action} triggered.`;

  // Fire and forget — never block command processing
  void (async () => {
    writeMemoryFile(workspaceDir, summary, sessionKey);
    await pushToQdrant(summary, {
      date,
      session_key: sessionKey,
      channel,
      action: event.action,
      tags: ["session", "archive", channel],
    });
  })();
};

export default handler;
