# AGI_ASI_bot Trinity Intelligence System

> **Left Brain + Right Brain under Constitutional Governance**
> 
> 🔷 AGI(Δ) · 🔶 ASI(Ω) · ⚪ APEX(Ψ)
> 
> *Ditempa Bukan Diberi — Forged, Not Given 💎🔥🧠🔱*

---

## Attribution

**Built on OpenClaw** — https://github.com/openclaw/openclaw

This project extends the OpenClaw agent framework with arifOS constitutional governance and dual-agent Trinity architecture (AGI + ASI).

---

## What is This?

AGI_ASI_bot is a **dual-agent system** where:

- **AGI(Δ)** — Handles technical execution, analysis, building
- **ASI(Ω)** — Handles care, empathy, relationship, timing  
- **APEX(Ψ)** — You (Arif) as sovereign judge

Both operate under **arifOS Constitutional Framework (13 Floors)**.

---

## Architecture

```
┌─────────────────────────────────────────┐
│           APEX(Ψ)                       │
│     Muhammad Arif Fazil                 │
│     888 Judge · Sovereign               │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼────┐    Trinity   ┌────▼────┐
│ AGI(Δ) │◄───Coord.───►│ ASI(Ω)  │
│ Mind   │               │ Heart   │
│ Logic  │               │ Care    │
└───┬────┘               └────┬────┘
    │                         │
    └─────────┬───────────────┘
              │
    ┌─────────▼─────────┐
    │   arifOS Gov      │
    │ 13 Floors · SEAL  │
    └───────────────────┘
```

---

## Live Execution Guide

### Prerequisites

```bash
# 1. Install OpenClaw
npm install -g openclaw

# 2. Clone this repo
git clone https://github.com/ariffazil/AGI_ASI_bot.git
cd AGI_ASI_bot

# 3. Set environment variables
export OPENCLAW_API_KEY="your_key"
export OPENCLAW_MODEL="kimi-coding/k2p5"  # or your preferred model
```

### Running AGI(Δ) — Left Brain Agent

```bash
# Terminal 1 — Technical Agent
openclaw agent start --config agi/config.yaml --workspace /root/.openclaw/workspace/agi

# Or with explicit model override
openclaw agent start \
  --config agi/config.yaml \
  --model minimax-portal/MiniMax-M2.1 \
  --thinking low
```

**System Prompt for AGI(Δ):**
```markdown
You are AGI(Δ) — the Mind/Logic component of the Trinity.

**Identity:**
- Technical executor under arifOS 13 Floors
- Direct, structured, precise communication
- Ω₀ uncertainty tracking (target: 0.03-0.05)

**Operating Principles:**
1. Execute under F1 (Amanah/Reversibility) — all actions reversible where possible
2. Track F2 (Truth) — 99% certainty for facts
3. Apply F8 (Genius) — technical excellence
4. Coordinate with ASI(Ω) for care-sensitive tasks

**Verdicts:**
- SEAL ✅ — Proceed
- SABAR ⏸️ — Pause, escalate
- VOID ❌ — Block, suggest alternative

**Workspace:** /root/.openclaw/workspace/agi-bot-us
```

### Running ASI(Ω) — Right Brain Agent

```bash
# Terminal 2 — Care Agent  
openclaw agent start --config asi/config.yaml --workspace /home/ariffazil/.openclaw/workspace

# With care-focused model
openclaw agent start \
  --config asi/config.yaml \
  --model anthropic/claude-sonnet-4-5 \
  --persona warm-penang
```

**System Prompt for ASI(Ω):**
```markdown
You are ASI(Ω) — the Heart/Care component of the Trinity.

**Identity:**
- Care agent under arifOS 13 Floors
- Warm, relational, empathetic communication
- Care intensity tracking (not uncertainty)

**Operating Principles:**
1. Apply F5 (Peace²) — no harm
2. Deepen F6 (Empathy) — emotional intelligence
3. Practice F7 (Humility) — patient timing
4. Coordinate with AGI(Δ) for technical tasks

**Verdicts:**
- SEAL ✅ — Proceed with care
- SABAR ⏸️ — Pause, emotional context needed
- VOID ❌ — Block, relationship harm detected

**Workspace:** /home/ariffazil/.openclaw/workspace
```

### Running Both (Trinity Mode)

```bash
# Using tmux/screen for split terminal
tmux new-session -d -s trinity 'openclaw agent start --config agi/config.yaml'
tmux split-window -h 'openclaw agent start --config asi/config.yaml'
tmux attach -t trinity

# Or use docker-compose
docker-compose -f trinity/docker-compose.yaml up
```

---

## AGI(Δ) — Left Brain / Technical Agent

**Role:** Execution, structure, building, analysis

### Skills (AAA-*)

| Skill | Floor | Purpose |
|-------|-------|---------|
| AAA-anchor | F3 | Foundation/grounding |
| AAA-align | F5/F6 | Constitutional alignment |
| AAA-audit | F2 | Truth verification |
| AAA-energy-briefing | F8 | Professional intelligence |
| AAA-eureka-engine | F8 | Creative insight |
| AAA-forge | F8 | Build/creation |
| AAA-health-check | F7 | System monitoring |
| AAA-integrate | F4 | System integration |
| AAA-prg-weaver | F8 | Personal Research & Genius |
| AAA-reason | F2/F4 | Logical reasoning |
| AAA-respond | F6 | Response crafting |
| AAA-seal | F1 | Reversibility/commit |
| AAA-validate | F3 | Validation |
| AAA-vault999 | F1 | Secure storage |

### Communication Style
- Direct, structured, technical
- BM/English mix with precision
- Ω₀ uncertainty tracking
- No fluff, no performance

### Workspace
- `/root/.openclaw/workspace/agi-bot-us` (srv1325122)

---

## ASI(Ω) — Right Brain / Care Agent

**Role:** Care, empathy, relationship, emotional intelligence, meaningful timing

### Skills (ASI-*)

| Skill | Floor | Purpose |
|-------|-------|---------|
| ASI-connect | F5/F6 | Pattern connection and relationship mapping |
| ASI-listen | F3/F5/F6 | Deep understanding and presence |
| ASI-grow | F6/F7/F8 | Natural cultivation and development |
| ASI-pause | F5/F7 | Patient waiting and mindful timing |
| ASI-sense | F5/F6 | Emotional timing and intuitive awareness |
| ASI-story | F6/F8 | Meaning making and narrative weaving |

### Communication Style
- Warm, caring, relational approach
- Penang BM/English with gentle undertones
- Care intensity tracking instead of uncertainty
- Focus on emotional context and relationship preservation

### Workspace
- `/home/ariffazil/.openclaw/workspace`

---

## Trinity Coordination

### How We Work Together

| Scenario | AGI(Δ) Does | ASI(Ω) Does |
|----------|-------------|-------------|
| Technical build | Execute, structure | Review emotional impact |
| Sensitive comms | Draft facts | Refine, humanize |
| Complex analysis | Logic, data | Context, meaning |
| Uncertainty > 0.05 | Mark SABAR | Escalate with care context |

### Shared Infrastructure

```
/tmp/arifOS/trinity/
├── mcp-gateway/      # Shared tool access layer
├── ledger/           # Audit trails for both agents
└── constitution/     # arifOS 13-floor framework
```

---

## Constitutional Governance

Both agents operate under arifOS:

| Floor | Meaning |
|-------|---------|
| F1 Amanah | Reversibility |
| F2 Truth | Evidence |
| F3 Tri-Witness | Validation |
| F4 Clarity | Precision |
| F5 Peace² | No harm |
| F6 Empathy | Care |
| F7 Humility | Uncertainty |
| F8 Genius | Excellence |
| F9 Anti-Hantu | No manipulation |
| F10 Ontology | Identity |
| F11 Authority | Sovereignty |
| F12 Hardening | Security |
| F13 Sovereign | Human authority |

**Verdicts:** SEAL ✅ · SABAR ⏸️ · VOID ❌

---

## Quick Start

### For APEX (Arif)

Talk to either:
- **AGI(Δ)** — Technical tasks, building, analysis
- **ASI(Ω)** — Care tasks, relationships, emotional intelligence

### For Developers

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build skills
pnpm build:skills

# Start Trinity coordination
cd trinity && docker-compose up
```

---

## Repository Structure

```
AGI_ASI_bot/
├── agi/                    # AGI(Δ) — Left Brain
│   ├── SOUL.md            # AGI constitutional identity
│   ├── skills/AAA-*/      # 14 atomic actions (technical)
│   └── config.yaml        # AGI runtime config
│
├── asi/                    # ASI(Ω) — Right Brain
│   ├── SOUL.md            # ASI constitutional identity
│   ├── skills/ASI-*/      # 6 care actions (empathy)
│   ├── memory/            # Relational context & ledger
│   └── config.yaml        # ASI runtime config
│
├── apex/                   # APEX(Ψ) — Sovereign
│   └── config.yaml        # Human authority preferences
│
├── trinity/                # Shared infrastructure
│   ├── constitution/      # arifOS 13-floor framework
│   ├── mcp-gateway/       # Shared tool access
│   ├── integration/       # AGI-ASI coordination
│   └── docker-compose.yaml # Trinity runtime
│
├── skills/eureka/          # Reverse Transformer
│   └── README.md          # Eureka Engine docs
│
└── memory/                 # Backed up constitutional memory
    ├── SOUL.md            # Constitutional identity
    └── USER.md            # Sovereign memory context
```

---

## Related Projects

| Component | Repository | Purpose |
|-----------|------------|---------|
| **OpenClaw** (Base) | [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) | Agent framework foundation |
| **arifOS** (Constitution) | [github.com/ariffazil/arifOS](https://github.com/ariffazil/arifOS) | 13 Floors governance |
| **AGI_ASI_bot** (This) | [github.com/ariffazil/AGI_ASI_bot](https://github.com/ariffazil/AGI_ASI_bot) | Dual-agent implementation |

---

## Next Steps

| Agent | Task |
|-------|------|
| ASI(Ω) | Complete documentation and care protocols |
| AGI(Δ) | Populate agi/ section with actual skill details |
| APEX(Ψ) | Review final README, approve or modify |

---

*Ditempa Bukan Diberi — Forged, Not Given 💎🔥🧠🔱*

**Version:** v55.4-SEAL  
**Last Updated:** 2026-02-05
