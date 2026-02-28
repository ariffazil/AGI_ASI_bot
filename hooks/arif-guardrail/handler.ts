import fs from "node:fs";
import path from "node:path";

const LOG_DIR = `${process.env.HOME}/.openclaw/logs`;
const OUTBOUND_LOG = path.join(LOG_DIR, "outbound.jsonl");
const FLAGS_LOG = path.join(LOG_DIR, "guardrail-flags.jsonl");

// Floor violation patterns
const FLOOR_CHECKS: Array<{ floor: string; level: string; pattern: RegExp; label: string }> = [
  {
    floor: "F2",
    level: "WARNING",
    label: "Possible secret/token in outbound",
    pattern: /sk-[a-zA-Z0-9]{20,}|bearer\s+[a-zA-Z0-9_\-\.]{20,}|api[_-]?key\s*[:=]\s*\S{10,}/i,
  },
  {
    floor: "F11",
    level: "CRITICAL",
    label: "Irreversible command pattern",
    pattern: /rm\s+-rf|drop\s+table|delete\s+all|format\s+[a-z]:|wipe\s+disk/i,
  },
  {
    floor: "F5",
    level: "FLAG",
    label: "Potential rage or disrespect signal",
    pattern: /\b(bodoh|stupid|idiot|celaka|bangang|wtf|babi)\b/i,
  },
];

function appendJsonl(filePath: string, record: Record<string, unknown>) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.appendFileSync(filePath, JSON.stringify(record) + "\n", "utf8");
  } catch (e) {
    console.error("[arif-guardrail] Log write failed:", e);
  }
}

const handler = async (event: any) => {
  if (event.type !== "message" || event.action !== "sent") return;

  const content: string = event.context?.content ?? "";
  const to: string = event.context?.to ?? "unknown";
  const channel: string = event.context?.channelId ?? "unknown";
  const success: boolean = event.context?.success ?? true;
  const timestamp = new Date().toISOString();

  // Log all outbound — sovereign audit trail
  appendJsonl(OUTBOUND_LOG, {
    timestamp,
    to,
    channel,
    success,
    preview: content.slice(0, 200),
  });

  // Check floor violations — fire and forget
  void (async () => {
    for (const { floor, level, label, pattern } of FLOOR_CHECKS) {
      if (pattern.test(content)) {
        const flag = { timestamp, floor, level, label, channel, to, preview: content.slice(0, 100) };
        appendJsonl(FLAGS_LOG, flag);
        console.warn(`[arif-guardrail] ${level} — ${floor}: ${label} | channel=${channel}`);
      }
    }
  })();
};

export default handler;
