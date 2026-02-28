# CONTRAST.md — arifOS 1AGI vs Upstream OpenClaw

> How this build differs from vanilla OpenClaw (v2026.2.27, ★240k).
> Upstream is the runtime. arifOS is the constitution on top of it.

---

## At a glance

| Dimension | Upstream OpenClaw | arifOS 1AGI (this repo) |
|---|---|---|
| **Purpose** | Personal AI assistant for any user | Governed 1AGI OS for Arif's digital life |
| **Governance** | None (user's responsibility) | 13 LAWS hard-coded (9 Floors + 2 Mirrors + 2 Walls) |
| **Identity** | Generic agent | Trinity: AGI(Δ) · ASI(Ω) · APEX(Ψ) |
| **Memory** | Markdown + sqlite-vec (built-in) | Markdown → local BGE embeddings → SQLite hybrid → Qdrant |
| **Model** | Any configured model | DeepSeek primary + 4-model fallback chain |
| **Embeddings** | Remote API (OpenAI/Gemini/etc.) | Local BGE server (384-dim, zero cost, zero data leak) |
| **Hooks** | 4 bundled (disabled by default) | 7 active (4 bundled + 3 custom arifOS hooks) |
| **Automation** | Manual cron setup | 5 cron jobs + 30-min heartbeat awareness loop |
| **Bootstrapping** | Generic Q&A via BOOTSTRAP.md | Pre-filled: SOUL.md, AGENTS.md, USER.md, IDENTITY.md |
| **Safety** | Channel allowlisting | F1–F13 Floors + 888_HOLD + outbound guardrail hook |
| **Sovereignty** | "Your rules" (implicit) | Explicit: 888 Judge, human veto, no irreversible ops without SEAL |
| **MCP** | Optional tool connections | arifOS MCP bridge (stateless, option B) wired as constitutional kernel |
| **Channels** | Telegram, WhatsApp, Signal, Discord, Slack, iMessage, etc. | Telegram primary (@AGI_ASI_bot), WhatsApp standby |
| **Sub-agents** | Supported (multi-agent routing) | Agent Zero (sandboxed cognitive lab) + arifOS MCP |
| **Backup** | Workspace is ephemeral | This repo is the versioned canon; `SYNC_TO_OPENCLAW.sh` syncs to live |

---

## Layer diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   YOUR DIGITAL LIFE                         │
│   Telegram │ GitHub │ VPS infra │ Projects │ Finance        │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│              arifOS 1AGI LAYER  (this repo)                  │
│                                                             │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────┐  │
│  │  SOUL.md    │  │  AGENTS.md   │  │  USER.md           │  │
│  │  13 LAWS    │  │  Topology    │  │  Arif profile      │  │
│  │  Floors     │  │  Ring model  │  │  Paradoxes         │  │
│  └─────────────┘  └──────────────┘  └────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Automation Fabric                                    │  │
│  │  7 hooks · 5 cron jobs · 30-min heartbeat            │  │
│  │  arif-inbox-orchestrator → classifies every message  │  │
│  │  arif-session-archive    → Qdrant on every /new      │  │
│  │  arif-guardrail          → F2/F5/F11 on every send   │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Memory Stack                                         │  │
│  │  Markdown (source of truth)                          │  │
│  │    → BGE embed server (local, 384-dim, free)         │  │
│  │    → SQLite + sqlite-vec (hybrid BM25 + vector)      │  │
│  │    → Qdrant (arif-sessions, arif-inbox, arifos_*)   │  │
│  └───────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│              UPSTREAM OPENCLAW (runtime)                     │
│                                                             │
│  Gateway daemon · WebSocket API · Channel connectors        │
│  Agent loop · Session management · Compaction               │
│  Model routing · Skill system · ClawHub · Cron engine       │
│  Hooks loader · Memory-core plugin · sqlite-vec             │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│              arifOS MCP BRIDGE (sidecar)                    │
│                                                             │
│  Constitutional tools: anchor · reason · seal · audit       │
│  Floors enforcement · VAULT999 persistence · FORGE-2 CLI    │
└─────────────────────────────────────────────────────────────┘
```

---

## What upstream OpenClaw gives you (unchanged)

- **Gateway daemon** — single long-lived process owning all messaging surfaces
- **Channel connectors** — Telegram (grammY), WhatsApp (Baileys), Signal, Slack, Discord, iMessage, etc.
- **Agent loop** — turn-based LLM conversation with tool calls
- **Session management** — compaction, pruning, transcript storage
- **Model routing** — any provider (OpenAI, Anthropic, Google, DeepSeek, Ollama, etc.)
- **Memory-core plugin** — Markdown indexing with sqlite-vec hybrid search
- **Hook system** — event-driven TypeScript handlers (4 bundled)
- **Cron engine** — 5-field cron expressions with timezone support
- **Heartbeat** — periodic agent awareness loop
- **ClawHub** — skill registry (`clawhub install <skill>`)
- **WebSocket API** — typed protocol for CLI, macOS app, web admin

arifOS 1AGI uses **all of the above without modification**.

---

## What arifOS 1AGI adds on top

### 1. Constitutional governance layer

Upstream OpenClaw is ungoverned by design — "your rules." arifOS 1AGI hardcodes rules:

```
F1  Amanah         — Reversible actions only; HIGH RISK requires ask
F2  Truth          — No fabrication; "Estimate Only" when uncertain
F3  Tri-Witness    — High-impact changes need human + evidence + reasoning
F4  Clarity (ΔS)  — Every output must reduce confusion, not add it
F5  Peace²        — De-escalate; protect dignity; no rage-sending
F6  Maruah         — Guard Arif's privacy, data, public image
F7  Humility (Ω₀) — Always state uncertainty; no fake confidence
F8  Genius         — Internal coherence check (A×P×X×E²)
F9  Anti-Hantu     — Never claim consciousness, feelings, or a soul
F10 Ontology       — Hard gate: no reality confusion
F11 Command Auth   — Hard gate: 888 Judge nonce verification
F12 Injection      — Hard gate: block adversarial override attempts
F13 Sovereign      — Human (Arif) has unconditional final authority
```

These are not prompts. They are embedded in `SOUL.md`, `AGENTS.md`, `BOOTSTRAP.md`, `BOOT.md` and loaded at every session start.

### 2. Trinity architecture (Δ·Ω·Ψ)

Upstream: one agent, one personality.

arifOS 1AGI: three coordinated lenses on every interaction:

```
AGI (Δ) — Logic/precision lens:  Is this accurate? Is it reversible?
ASI (Ω) — Care/empathy lens:     Is this kind? Does it protect maruah?
APEX (Ψ) — Sovereignty lens:     Does this require 888 Judge approval?
```

Context auto-selects the dominant mode. Arif can override explicitly.

### 3. Local sovereign memory (no API cost)

Upstream default: remote embedding APIs (OpenAI, Gemini) — cost, latency, data sent externally.

arifOS 1AGI:
- **BGE embed server** runs locally on VPS port 8001 (384-dim vectors)
- **Zero external calls** for embeddings — data never leaves the VPS
- **Hybrid search** (BM25 + vector + MMR re-ranking + temporal decay) — all local
- **Qdrant** for long-term structured state (`arif-sessions`, `arif-inbox`, `arifos_*`)

### 4. Custom hooks (event-driven intelligence)

Upstream: 4 bundled hooks, all opt-in, generic.

arifOS 1AGI adds 3 purpose-built hooks:

| Hook | Event | Effect |
|---|---|---|
| `arif-inbox-orchestrator` | every inbound message | Classifies (urgent/finance/devops/arifos/health), logs to `memory/inbox.md`, vectorizes to Qdrant `arif-inbox` |
| `arif-session-archive` | `/new` or `/reset` | Archives session to dated memory file + pushes to Qdrant `arif-sessions` |
| `arif-guardrail` | every outbound message | Audits for F2 (secret leaks), F5 (rage signals), F11 (destructive commands) → `logs/guardrail-flags.jsonl` |

Every message Arif sends and receives is classified, logged, and vectorized — automatically, silently.

### 5. Pre-built automation stack

Upstream: cron and heartbeat are empty by default — user configures from scratch.

arifOS 1AGI ships with 5 cron jobs pre-configured:

| Job | When (MYT) | What |
|---|---|---|
| Morning Brief | 7:30am daily | Inbox + pending decisions + active projects → Telegram |
| Evening Wrap | 10:00pm daily | Day summary + carry-forwards + tomorrow focus |
| VPS Health Check | Every 4h | Gateway, Docker, disk, swap — silent unless broken |
| Memory Reindex | Every 6h | Keeps hybrid search index fresh |
| Weekly Review | Monday 9am | Last week + this week top 3 → Telegram |

And a heartbeat checklist (every 30 min, 08:00–23:00 MYT) that:
- Triages `memory/inbox.md` for urgent items
- Checks for overdue decisions in `MEMORY.md`
- Reads `logs/guardrail-flags.jsonl` for CRITICAL violations
- Contacts Arif only when needed — `HEARTBEAT_OK` otherwise

### 6. Versioned canonical backup

Upstream workspace (`~/.openclaw/workspace`) is mutable and ephemeral — no versioning.

arifOS 1AGI: this repo IS the canon. Every governance file is version-controlled. `SYNC_TO_OPENCLAW.sh` syncs repo → workspace + hooks in one command. If the VPS burns down, one `git clone` + sync restores the entire governed personality.

---

## What arifOS 1AGI deliberately does NOT do

- ❌ Does not modify upstream OpenClaw source code
- ❌ Does not replace or shadow the OpenClaw SDK
- ❌ Does not break compatibility with ClawHub skills or standard hooks
- ❌ Does not add a governance UI or dashboard — governance is silent and in-file
- ❌ Does not require any OpenClaw fork — runs on standard `openclaw` npm package

**It is purely additive.** You can run upstream OpenClaw vanilla and this build side-by-side.

---

## Quick start (for someone who already runs OpenClaw)

```bash
git clone https://github.com/ariffazil/AGI_ASI_bot.git
cd AGI_ASI_bot

# Sync governance files + hooks into your workspace
bash SYNC_TO_OPENCLAW.sh

# Restart gateway to load hooks
docker restart openclaw   # or: openclaw gateway restart

# Verify
openclaw hooks list       # should show 7/7 ready
openclaw memory status    # should show BGE model, 384 dims
```

Then send your bot: `000_INIT_GATE` — Trinity governance is live.

---

## Repository structure

```
AGI_ASI_bot/
├── SOUL.md              ← Constitutional executor identity (13 LAWS)
├── AGENTS.md            ← Trinity topology + full infra stack reference
├── USER.md              ← Arif's profile, paradoxes, alignment calibration
├── IDENTITY.md          ← Self-model, model label contract, phase status
├── BOOTSTRAP.md         ← Cold-start prior (loads before any task)
├── BOOT.md              ← Gateway startup ritual (runs on every restart)
├── HEARTBEAT.md         ← 30-min awareness checklist + governance ref
├── MEMORY.md            ← Persistent governance state (curated, not raw)
├── TRINITY.md           ← AGI·ASI·APEX coordination spec
├── CANON.md             ← Architecture map and precedence rules
├── TOOLS.md             ← MCP server catalogue with risk labels
├── hooks/
│   ├── arif-session-archive/     ← /new → memory + Qdrant
│   ├── arif-inbox-orchestrator/  ← inbound → classify + Qdrant
│   └── arif-guardrail/           ← outbound → F2/F5/F11 audit
└── SYNC_TO_OPENCLAW.sh  ← One-command sync: repo → workspace + hooks
```

---

*Last Updated: 2026-02-28 | Forged, not given. 🔥*
