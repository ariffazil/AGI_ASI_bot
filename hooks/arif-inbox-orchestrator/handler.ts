import fs from "node:fs";
import path from "node:path";

const QDRANT_URL = "http://10.0.0.5:6333";
const QDRANT_KEY = "arifos_qdrant_2026";
const EMBED_URL = "http://10.0.0.1:8001/v1/embeddings";
const EMBED_KEY = "SK-ARIFOS-FORGE";
const COLLECTION = "arif-inbox";
const QHEADERS = { "Content-Type": "application/json", "api-key": QDRANT_KEY };
const WORKSPACE = `${process.env.HOME}/.openclaw/workspace`;

// Classification rules — extend as your life evolves
const CLASSIFIERS: Array<{ tag: string; patterns: RegExp }> = [
  { tag: "urgent",  patterns: /urgent|asap|tolong|help|down|crash|error|failed|alert/i },
  { tag: "finance", patterns: /payment|invoice|ringgit|\bRM\b|wallet|crypto|bank|transaction|duit/i },
  { tag: "devops",  patterns: /docker|server|vps|deploy|build|git|pipeline|pod|kubectl|nginx/i },
  { tag: "arifos",  patterns: /arifos|governance|seal|floor|anchor|forge|trinity|apex/i },
  { tag: "health",  patterns: /gym|workout|sleep|food|makan|health|vitamin|supplement/i },
];

function classify(content: string): string[] {
  const tags: string[] = ["inbox"];
  for (const { tag, patterns } of CLASSIFIERS) {
    if (patterns.test(content)) tags.push(tag);
  }
  if (tags.length === 1) tags.push("social"); // unclassified = social
  return tags;
}

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
    console.error("[arif-inbox] Qdrant init failed:", e);
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

function appendToInbox(entry: Record<string, unknown>) {
  try {
    const inboxPath = path.join(WORKSPACE, "memory", "inbox.md");
    fs.mkdirSync(path.dirname(inboxPath), { recursive: true });
    const line = `\n## ${entry.timestamp}\n**From:** ${entry.from} (${entry.channel})\n**Tags:** ${(entry.tags as string[]).join(", ")}\n**Message:** ${entry.content_preview}\n`;
    fs.appendFileSync(inboxPath, line, "utf8");
  } catch (e) {
    console.error("[arif-inbox] inbox.md write failed:", e);
  }
}

const handler = async (event: any) => {
  if (event.type !== "message" || event.action !== "received") return;

  const content: string = event.context?.content ?? "";
  const from: string = event.context?.from ?? "unknown";
  const channel: string = event.context?.channelId ?? "unknown";

  // Skip empty or system messages
  if (!content || content.trim().length < 2) return;

  const tags = classify(content);
  const timestamp = new Date().toISOString();
  const content_preview = content.slice(0, 300);

  const entry = { from, channel, content_preview, tags, timestamp };

  // Fire and forget
  void (async () => {
    try {
      appendToInbox(entry);
      await ensureCollection();
      const vector = await embed(content_preview);
      await fetch(`${QDRANT_URL}/collections/${COLLECTION}/points`, {
        method: "PUT",
        headers: QHEADERS,
        body: JSON.stringify({
          points: [{ id: Date.now(), vector, payload: entry }],
        }),
      });
      console.log(`[arif-inbox] logged: tags=${tags.join(",")} from=${from}`);
    } catch (e) {
      console.error("[arif-inbox] background error:", e);
    }
  })();
};

export default handler;
