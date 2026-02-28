---
name: arif-inbox-orchestrator
description: "On every inbound message, classify it and log to inbox.md + push to Qdrant with tags"
metadata:
  {
    "openclaw": {
      "emoji": "📨",
      "events": ["message:received"],
      "requires": { "bins": ["node"] }
    }
  }
---

# arif-inbox-orchestrator

Every message coming into OpenClaw (via Telegram or any channel) is classified and indexed. This gives Arif a sovereign digital inbox — searchable, persistent, and wired to Qdrant.

## Classification tiers

| Tag | Trigger words / signals |
|---|---|
| `urgent` | "urgent", "asap", "help", "down", "error", "crash" |
| `finance` | "payment", "invoice", "ringgit", "RM", "wallet", "crypto" |
| `devops` | "docker", "server", "VPS", "deploy", "build", "git" |
| `arifos` | "arifOS", "governance", "seal", "floor", "anchor" |
| `social` | everything else from known contacts |

## What it does

1. Receives every `message:received` event
2. Classifies by content keywords
3. Appends to `memory/inbox.md` in workspace
4. Pushes to Qdrant collection `arif-inbox` (384-dim BGE)
5. Never replies — silent background logging only

## Qdrant collection: `arif-inbox`
- Vector: 384-dim BGE
- Payload: `{ from, channel, content_preview, tags, timestamp }`
