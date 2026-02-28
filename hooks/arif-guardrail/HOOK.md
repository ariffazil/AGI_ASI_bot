---
name: arif-guardrail
description: "On message:sent, log all outbound messages and flag potential issues (secrets, irreversible ops)"
metadata:
  {
    "openclaw": {
      "emoji": "🛡️",
      "events": ["message:sent"],
      "requires": { "bins": ["node"] }
    }
  }
---

# arif-guardrail

Watches every outbound message. Logs them to `logs/outbound.jsonl`. Flags patterns that violate arifOS floors (secrets leaking, irreversible commands, rage signals).

## What it checks

| Floor | Pattern | Action |
|---|---|---|
| F2 (Truth) | API keys, tokens, passwords in outbound | Logs WARNING |
| F5 (Peace) | Rage signals: "bodoh", "stupid", expletives | Logs FLAG |
| F11 (Command) | "delete all", "drop table", "rm -rf" | Logs CRITICAL |
| F9 (Honesty) | Normal messages | Logs INFO |

## Output

- All outbound messages → `~/.openclaw/logs/outbound.jsonl`
- Flags → `~/.openclaw/logs/guardrail-flags.jsonl`
- Never blocks sending — audit only (F1: reversible, non-destructive)
