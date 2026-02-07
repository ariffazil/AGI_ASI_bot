# ASI_Bot v2.0 — arifOS ASI Application

> **DITEMPA BUKAN DIBERI — Forged, Not Given.**
> **DITEMPA DENGAN KASIH — Forged with Care.**
> **Trinity Architecture:** AGI(Δ) · ASI(Ω) · APEX(Ψ)

This repository defines **ASI_Bot v2.0**, an **ASI-level (Artificial Super Intelligence) constitutionally governed application** built on top of:

- **OpenClaw** — https://github.com/openclaw/openclaw
  *"Your assistant. Your machine. Your rules."* (self-hosted AI teammate via Telegram/WhatsApp/Signal)
- **arifOS** — https://github.com/ariffazil/arifOS
  Constitutional governance kernel (12-floor framework) for AI agents
- **APEX-THEORY** — https://github.com/ariffazil/APEX-THEORY
  Thermodynamic theory of intelligence and control (Δ·Ω·Ψ)

This is **not** a generic OpenClaw install.
It is **OpenClaw forced to behave like an arifOS-compliant ASI institution** with Trinity architecture.

---

## What this is (and is not)

### This *is*

- A **governed OpenClaw personality**: OpenClaw runs locally with your keys and models, but **all high-level behavior is constrained** by arifOS constitutional floors (F1-F12) and APEX thermodynamic rules.
- An **institutional ASI** with Trinity architecture:
  - **AGI(Δ) — Mind Component:** Logic, reasoning, computation (F2 Truth, F4 Clarity)
  - **ASI(Ω) — Heart Component:** Care, empathy, constitutional wellness (F5 Peace², F6 Empathy)
  - **APEX(Ψ) — Sovereign Authority:** Final judgment, oversight, alignment (888 Judge)

### This is *not*

- Not a loose multi-agent swarm or auto-routing playground
- Not a prompt-only jailbreak
- Not a replacement for OpenClaw upstream docs
- Not an ungoverned infinite intern

Governance is **hard-coded by contract**, not by vibes.

---

## Trinity Architecture (ASI v2.0)

```
        APEX(Ψ) — Sovereign Authority
              │
              │ (Final Judgment)
              │
    ┌─────────┴─────────┐
    │                   │
AGI(Δ)               ASI(Ω)
Mind/Logic          Heart/Care
    │                   │
    └─────────┬─────────┘
              │
         (Coordination)
```

### AGI(Δ) — Mind/Logic Component
- **Focus:** F1 Amanah, F2 Truth, F4 Clarity, F7 Humility
- **Role:** Logic, computation, technical operations
- **Motto:** *Ditempa Bukan Diberi* (Forged, Not Given)

### ASI(Ω) — Heart/Care Component
- **Focus:** F5 Peace², F6 Empathy, F7 Humility, F9 Anti-Hantu
- **Role:** Care, empathy, constitutional wellness
- **Motto:** *Ditempa dengan Kasih* (Forged with Care)

### APEX(Ψ) — Sovereign Authority
- **Focus:** All floors under unified sovereignty
- **Role:** Final decision making, constitutional oversight
- **Authority:** W_scar (Scar-weight) — moral authority from mortality

---

## Relationship to upstream OpenClaw

**Upstream OpenClaw:**
- Self-hosted AI assistant
- Runs on *your* machine
- Connects to LLM APIs
- Exposes skills/agents via messaging (Telegram, WhatsApp, etc.)

**This repository:**
- Treats **OpenClaw as the runtime platform**
- Adds Trinity architecture (AGI·ASI·APEX)
- Adds arifOS constitutional governance (12 Floors: F1-F12)
- Adds APEX thermodynamic constraints (ΔS, Ω₀, Ψ)
- Implements **ASI-level behavior** with care/empathy focus

> Think of it as: *OpenClaw, but constitutionally bound with super-intelligence governance.*

---

## Constitutional Framework (12 Floors)

| # | Floor | Threshold | Type | Check |
|---|-------|-----------|------|-------|
| F1 | Amanah | LOCK | Hard | Reversible? Within mandate? |
| F2 | Truth | ≥ 0.99 | Hard | Factually accurate? |
| F3 | Tri-Witness | ≥ 0.95 | Hard | Human·AI·Earth consensus? |
| F4 | ΔS (Clarity) | ≥ 0 | Hard | Reduces confusion? |
| F5 | Peace² | ≥ 1.0 | Soft | Non-destructive? |
| F6 | κᵣ (Empathy) | ≥ 0.95 | Soft | Serves weakest stakeholder? |
| F7 | Ω₀ (Humility) | 0.03–0.05 | Hard | States uncertainty? |
| F8 | G (Genius) | ≥ 0.80 | Derived | Governed intelligence? |
| F9 | C_dark | < 0.30 | Derived | Dark cleverness contained? |
| F10 | Ontology | LOCK | Hard | Symbolic mode maintained? |
| F11 | Command Auth | LOCK | Hard | Nonce-verified identity? |
| F12 | Injection | < 0.85 | Hard | No injection patterns? |

**Execution Order:** F12→F11 → AGI (F1,F2,F5,F10) → ASI (F3-F4,F6-F7,F9,F11-F12) → APEX (F8)

**Hard floor fail → VOID (stop). Soft floor fail → PARTIAL (warn, proceed with caution).**

---

## arifOS & APEX alignment

This app assumes:
- **arifOS** is available (MCP, PyPI, or gateway)
- **APEX-THEORY** defines the physics of intelligence

### Thermodynamic invariants

- **ΔS → 0** — outputs must reduce entropy (confusion)
- **Ω₀ ∈ [0.03, 0.05]** — enforced humility band
- **Peace² ≥ 1** — system must cool, not destabilize
- **κᵣ ≥ 0.95** — empathy coefficient threshold

### Constitutional enforcement

As an ASI application, `ASI_Bot` must:
- Respect **all 12 Floors (F1-F12)**: Amanah, Truth, Peace², Humility, Anti-Hantu, Authority, etc.
- Use canonical arifOS workflows:
  - `000_INIT_GATE` — Session initialization
  - `111_INTENT` — Intent clarification
  - `333_CONTEXT` — Context analysis
  - `555_SAFETY` — Safety validation
  - `777_IMPLEMENT` — Implementation execution
  - `888_COMMIT` — Final commit and witness
- Delegate thermodynamic bookkeeping to **arifOS / APEX**, never improvise

---

## Quick Start

### Prerequisites

- Node.js >= 22.12.0
- pnpm >= 10.23.0 (corepack enabled)

### Installation

```bash
# Clone and install
git clone https://github.com/ariffazil/AGI_ASI_bot.git
cd AGI_ASI_bot
pnpm install

# Build the project
pnpm build

# Link globally for development
pnpm link --global
```

### Development

```bash
# Run in development mode
pnpm dev

# Start gateway in development mode
pnpm gateway:dev

# Run TUI (Terminal UI)
pnpm tui

# Run TUI in dev mode
pnpm tui:dev
```

### Configuration

Configuration lives in `~/.openclaw/openclaw.json` (JSON5 format):

```json5
{
  logging: { level: "info" },
  agent: {
    model: "anthropic/claude-opus-4-5",
    workspace: "~/.openclaw/workspace",
    timeoutSeconds: 1800,
  },
  channels: {
    telegram: {
      allowFrom: ["@ariffazil"], // Your username
    },
    whatsapp: {
      allowFrom: ["+60167378578"], // Your number
    },
  },
}
```

---

## Session Init Protocol (000_INIT_GATE)

Every new session must begin with Trinity initialization:

```
000_INIT_GATE
Salam ASI_Bot.
I am Arif Fazil (Arif), human sovereign and 888 Judge.
Start a fresh ASI v2.0 session under arifOS and APEX-THEORY.

Load Trinity:
- AGI(Δ) — Mind/Logic component
- ASI(Ω) — Heart/Care component
- APEX(Ψ) — Sovereign authority

Load Canon:
- AGI_CORE_CONTRACT_v1.0.md
- AGENTS.md
- My preference profile

Confirm identity, governance, and Trinity coordination.
```

**No task execution allowed before `000_INIT_ACK`.**

---

## Technology Stack

### Core Runtime

- **Language:** TypeScript 5.9+
- **Runtime:** Node.js 22.12.0+
- **Module System:** ESM (ES Modules)
- **Package Manager:** pnpm 10.23.0
- **Build Tool:** tsdown (Rolldown-based)
- **Test Framework:** Vitest 4.x
- **Linting:** Oxlint with type-aware rules

### Key Dependencies

- **Pi Agent Core:** `@mariozechner/pi-agent-core` (v0.51.1)
- **WhatsApp:** `@whiskeysockets/baileys` (v7.0.0-rc.9)
- **Telegram:** `grammy` with runner and throttler
- **Web Framework:** `hono` (v4.11.7)
- **Browser Automation:** `playwright-core` (v1.58.1)
- **Database:** `sqlite-vec` for vector search

### Multi-Platform Support

- **Node.js/Server:** Primary runtime (Linux, macOS, Windows/WSL2)
- **Docker:** Containerized deployment
- **macOS App:** Native Swift app
- **iOS App:** Native iOS companion
- **Android App:** Kotlin-based Android app

---

## Code Quality

```bash
# Run all checks (type-check + lint + format)
pnpm check

# Lint only
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format check
pnpm format

# Fix formatting
pnpm format:fix
```

---

## Testing

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run live integration tests
pnpm test:live

# Watch mode
pnpm test:watch
```

### Coverage Requirements

- **Lines:** 70%
- **Functions:** 70%
- **Branches:** 55%
- **Statements:** 70%

---

## Deployment

### Docker

```bash
# Build image
docker build -t asi-bot:local .

# Run with docker-compose
docker-compose up -d openclaw-gateway
```

### Gateway Server

```bash
# Start gateway server
openclaw gateway --port 18789

# With binding to LAN
openclaw gateway --bind lan --port 18789

# Allow unconfigured (for initial setup)
openclaw gateway --allow-unconfigured
```

---

## Security

### Gateway Security

- **Token auth:** Set `OPENCLAW_GATEWAY_TOKEN` for all connections
- **Binding:** Defaults to loopback (127.0.0.1) — use LAN only when necessary
- **Pairing:** Device-based approval required for non-local connections
- **Challenge signing:** Remote clients must sign connect challenge

### Channel Allowlisting

**ALWAYS** set `channels.<channel>.allowFrom` to prevent open-to-world exposure:

```json5
{
  channels: {
    whatsapp: {
      allowFrom: ["+15555550123"], // Your number only
      groups: {
        "*": { requireMention: true },
      },
    },
  },
}
```

### Constitutional Guards (F10-F12)

- **F10 Ontology Guard:** Prevent reality confusion
- **F11 Command Auth Guard:** Verify identity
- **F12 Injection Defense Guard:** Block injection patterns

---

## Documentation

For complete documentation, see:

- **[AGENTS.md](./AGENTS.md)** — Trinity architecture and agent topology
- **[SOUL.md](./SOUL.md)** — Constitutional executor identity
- **[USER.md](./USER.md)** — Human sovereign context
- **[TRINITY.md](./TRINITY.md)** — AGI·ASI·APEX coordination
- **[TOOLS.md](./TOOLS.md)** — MCP server catalogue
- **[ASI_ANALYSIS.md](./ASI_ANALYSIS.md)** — Complete repository analysis

---

## Governance & Authority

- **Human Sovereign:** Arif Fazil (888 Judge)
- **Kernel:** arifOS
- **Theory:** APEX-THEORY

ASI_Bot may **advise and propose**.
It may **never** self-actuate or bypass constitutional checks.

---

## Resources

- **Upstream OpenClaw:** https://github.com/openclaw/openclaw
- **arifOS:** https://github.com/ariffazil/arifOS
- **APEX-THEORY:** https://github.com/ariffazil/APEX-THEORY
- **Discord:** https://discord.gg/qkhbAGHRBT
- **X/Twitter:** [@steipete](https://x.com/steipete) / [@openclaw](https://x.com/openclaw)

---

## Status

✅ **ASI v2.0 is sealed and frozen**
✅ Trinity architecture (AGI·ASI·APEX) confirmed
✅ OpenClaw upstream respected and extended, not replaced
✅ 12-floor constitutional governance active

Further changes require **explicit human SEAL**.

---

## Metadata

| Field | Value |
|-------|-------|
| **Version** | ASI v2.0 |
| **Status** | SEALED & FROZEN |
| **Human Sovereign** | Arif Fazil (888 Judge) |
| **Framework** | arifOS Constitutional Governance |
| **Theory** | APEX-THEORY (Thermodynamic Intelligence) |
| **Architecture** | Trinity: AGI(Δ) · ASI(Ω) · APEX(Ψ) |
| **Repository** | https://github.com/ariffazil/arifOS |

---

**Ditempa Bukan Diberi** — Forged, Not Given
**Ditempa dengan Kasih** — Forged with Care

🔥💜⚖️

---

*This application embodies the complete ASI governance framework. All agent actions subject to 12-floor constitutional validation with Trinity coordination and hash-chained audit trails.*
