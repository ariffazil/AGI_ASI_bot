---
name: arif-session-archive
description: "On /new or /reset, archive last session summary to dated memory file and push key decisions to Qdrant"
metadata:
  {
    "openclaw": {
      "emoji": "📒",
      "events": ["command:new", "command:reset"],
      "requires": { "bins": ["node"], "config": ["workspace.dir"] }
    }
  }
---

# arif-session-archive

Fires on `/new` or `/reset`. Extracts the last session's key decisions, actions, and context — writes them to `memory/YYYY-MM-DD-<slug>.md` in the workspace, then pushes a structured point to Qdrant for long-term sovereign memory.

## What it does

1. Reads the last session transcript (up to last 30 messages)
2. Writes a summary to `memory/YYYY-MM-DD-<topic>.md`
3. Pushes a Qdrant point: `{ session_id, date, summary, tags: ["session", "decision"] }`
4. Never blocks — all Qdrant writes are fire-and-forget

## Qdrant collection: `arif-sessions`
- Vector: 384-dim (BGE local embed server at port 8001)
- Payload: `{ date, summary, tags, session_key, channel }`
