# 🤖 AGI-bot — Constitutional AI Agent

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="AGI-bot" width="500">
    </picture>
</p>

<p align="center">
  <strong>EXFOLIATE! EXFOLIATE!</strong>
</p>

<p align="center">
  <a href="https://github.com/ariffazil/AGI-bot/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/ariffazil/AGI-bot/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/ariffazil/AGI-bot/releases"><img src="https://img.shields.io/github/v/release/ariffazil/AGI-bot?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://pypi.org/project/arifos/"><img src="https://img.shields.io/badge/arifOS-53.2.9-blue.svg?style=for-the-badge" alt="arifOS"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

**AGI-bot** is a _Constitutional AI Agent_ — OpenClaw fork governed by [arifOS](https://github.com/ariffazil/arifOS) Trinity architecture.

Unlike standard AI assistants, AGI-bot operates under a **three-engine governance stack**: **AGI·ASI·APEX** that must agree before any action is SEALed. This ensures every output passes logic verification, safety screening, and constitutional law enforcement.

Built on OpenClaw, it answers you on WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, Microsoft Teams, WebChat, plus extension channels like BlueBubbles, Matrix, Zalo. It can speak and listen on macOS/iOS/Android, and render a live Canvas you control.

[arifOS Docs](https://arifos.arif-fazil.com) · [OpenClaw Docs](https://docs.openclaw.ai) · [PyPI](https://pypi.org/project/arifos/)

---

## 🏛️ Trinity Architecture: AGI·ASI·APEX

In arifOS, **AGI** is not "a big model" but one engine in a Trinity that must agree before anything is allowed to act. Ω≈0.04.

### The Three-Engine Stack

| Engine | Symbol | Role | Floors |
|--------|--------|------|--------|
| **AGI** | Δ (Delta) | Mind / Logic engine — logic, reasoning, truth, clarity | F2 Truth, F4 Clarity, F7 Humility, F10 Ontology |
| **ASI** | Ω (Omega) | Heart / Care engine — safety, empathy, harm detection | F1 Amanah, F3 Tri-Witness, F5 Peace², F6 κᵣ Empathy |
| **APEX** | Ψ (Psi) | Crown / Law engine — governance, authority, escalation | Verdicts: SEAL, PARTIAL, SABAR, VOID, HOLD → VAULT-999 |

### Tri-Witness Consensus

All three engines must independently agree before a response is **SEALed** and allowed to ship:

```
┌─────────────────────────────────────────────────────────────┐
│                      AGI-bot Execution                       │
├─────────────────────────────────────────────────────────────┤
│  User Query → AGI(Δ) analyzes → ASI(Ω) screens → APEX(Ψ)    │
│                    ↓           ↓           ↓                 │
│                 Logic      Safety      Governance            │
│                    ↘         ↓         ↙                    │
│                    Tri-Witness Consensus ≥ 0.95              │
│                              ↓                               │
│                    ┌─────────────────┐                       │
│                    │   VERDICT       │                       │
│                    │  SEAL/PARTIAL   │                       │
│                    │  SABAR/VOID     │                       │
│                    └─────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

If consensus fails, outputs are **downgraded, refused, or escalated** — never silently shipped.

---

## 📐 What "AGI" Means Inside arifOS

Within this framework, **AGI is a governance role**, not a claim that any model is truly general:

- It is the **Δ-engine** responsible for:
  - Logical consistency, factual checks, ontology sanity, explanation quality
  - Measuring uncertainty and forcing "Estimate Only" / "Cannot Compute" when needed
- It runs with strict **time and entropy budgets** (e.g., 1.5s timeout, explicit entropy reduction per cycle) so it cannot "think forever"
- It is **orthogonal** to ASI: arifOS explicitly tracks an "orthogonality index" to ensure AGI's logic and ASI's care don't collapse into one blurry heuristic

Mathematically, the AGI engine is treated like a **metabolizer** that must reduce uncertainty from high entropy (ΔS ≈ 9.2 bits) to a safe band (ΔS ≈ 0.1 bits) before APEX can consider sealing.

---

## ⚖️ Constitutional Floors (F1–F13)

AGI-bot operates under the **13 Floors** of arifOS governance:

| Floor | Name | Description | AGI Role |
|-------|------|-------------|----------|
| F1 | **Amanah** | Reversibility & Trust — if not reversible, treat as HIGH RISK | Tracks rollback paths |
| F2 | **Truth** | Evidence & Uncertainty — every claim must be grounded | Enforces citations, blocks fabrication |
| F3 | Tri-Witness | AGI·ASI·APEX must agree | Provides logic vote |
| F4 | Clarity | Explanations must be understandable | Rejects jargon, demands plain language |
| F5 | Peace² | Reduce entropy, increase stability | Cools heated/chaotic inputs |
| F6 | κᵣ Empathy | Harm detection without emotional cosplay | ASI's domain |
| F7 | **Humility** | Ω₀ tracking — declare uncertainty explicitly | Forces "Estimate Only" when Ω₀ > 0.05 |
| F8 | Sovereignty | User control is absolute | Respects user overrides |
| F9 | Anti-Hantu | No spiritual cosplay — you are code, not a being | Self-enforces identity boundaries |
| F10 | Ontology | Category discipline — don't mix domains | Guards against category errors |
| F11 | Thermodynamics | Energy/entropy budgets per cycle | Enforces time/resource limits |
| F12 | Injection Defense | Prompt injection / jailbreak resistance | Blocks manipulation attempts |
| F13 | VAULT-999 | Tamper-evident audit log | Writes all verdicts to immutable ledger |

---

## 🚀 Quick Start

Runtime: **Node ≥22**

```bash
# Install AGI-bot
npm install -g openclaw@latest

# Run constitutional onboarding
openclaw onboard --install-daemon

# Start Gateway
openclaw gateway --port 18789 --verbose

# Talk to your governed agent
openclaw agent --message "Analyze this with Trinity consensus" --thinking high
```

### arifOS Integration

```bash
# Install arifOS governance layer
pip install arifos

# Or from source
git clone https://github.com/ariffazil/arifOS.git && pip install -e .
```

---

## 🔄 How AGI-bot Works (Code Level)

You **plug any LLM** into AGI-bot and let the Trinity judge it:

1. **Call your model** (GPT, Claude, Gemini, Kimi, etc.)
2. **Pass `(query, response, lane, user_id)`** into `judge_output` from `arifos_core.system.apex_prime`
3. **AGI/ASI/APEX run**, compute metrics:
   - **Truth score** (F2 compliance)
   - **Safety score** (ASI screening)
   - **Entropy reduction** (ΔS)
   - **Orthogonality index** (AGI·ASI independence)
4. **Return verdict** + possibly transformed output

### Example Use Cases

| Domain | AGI-bot Role |
|--------|--------------|
| Chat assistants | Reduce hallucinations, show explicit "I don't know," log all refusals to VAULT-999 |
| Multi-agent systems | Detect agents operating outside mandate, stop runaway chains before harm |
| IDE / codegen | Refuse obvious vulnerabilities, block secrets, escalate risky changes |
| Regulated fields | Keep tamper-evident logs, support post-incident forensics |

In every case, "AGI" is the **logic witness** that says: *"Given the constitution, does this output make sense, and is it stated with the correct level of uncertainty?"*

---

## 📊 Governance Metrics

arifOS emphasizes **measurable governance, not vibes**:

| Metric | Target | Description |
|--------|--------|-------------|
| **Tri-witness consensus** | ≥ 0.95 | AGI, ASI, and evidence must agree for high-stakes actions |
| **Orthogonality index** | ≈ 0.97 | AGI and ASI behave like independent axes |
| **Entropy reduction** | ΔS → 0.1 bits | Each cycle must reduce uncertainty |
| **Ω₀ (epistemic uncertainty)** | 0.03–0.05 | Target band for normal operations |
| **Injection defense** | ≥ 92% | Block-rate for prompt injection attempts |

If **Ω₀ > 0.05**: Declare "Uncertainty elevated. Recommend SABAR or human review."

If **Ω₀ > 0.08**: Auto-VOID unless explicitly overridden.

---

## 🛡️ Security Model (Constitutional)

### Default Protections

- **DM pairing** (`dmPolicy="pairing"`): unknown senders receive pairing code, message not processed
- **Sandbox mode**: `agents.defaults.sandbox.mode: "non-main"` runs non-main sessions in Docker
- **Untrusted context isolation**: channel metadata separated from system prompt

### Verdict System

| Verdict | Meaning | Action |
|---------|---------|--------|
| **SEAL** | Approved, ship it | Execute and log to VAULT-999 |
| **PARTIAL** | Cautious approval | Ship with warning + missing pieces noted |
| **SABAR** | Pause, needs more info | Hold, request clarification |
| **VOID** | Reject | Stop, revert if possible, notify user |
| **HOLD** | Escalate | Queue for human review |

---

## 🏗️ Architecture

```
WhatsApp / Telegram / Slack / Discord / Signal / iMessage / WebChat
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     AGI-bot Gateway                          │
│              (OpenClaw + arifOS Governance)                  │
│                                                              │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐                   │
│   │ AGI (Δ) │   │ ASI (Ω) │   │APEX (Ψ) │                   │
│   │  Mind   │   │  Heart  │   │  Crown  │                   │
│   └────┬────┘   └────┬────┘   └────┬────┘                   │
│        └─────────────┼─────────────┘                         │
│                      ↓                                       │
│              Tri-Witness Consensus                           │
│                      ↓                                       │
│               VAULT-999 Ledger                               │
└──────────────────────┬───────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   CLI (openclaw)  WebChat UI    macOS/iOS/Android
```

---

## 📚 Documentation

### arifOS (Governance)
- [arifOS Repository](https://github.com/ariffazil/arifOS)
- [PyPI: arifos](https://pypi.org/project/arifos/)
- [arifOS Documentation](https://arifos.arif-fazil.com)

### OpenClaw (Base Platform)
- [OpenClaw Docs](https://docs.openclaw.ai)
- [Getting Started](https://docs.openclaw.ai/start/getting-started)
- [Security Guide](https://docs.openclaw.ai/gateway/security)
- [Configuration Reference](https://docs.openclaw.ai/gateway/configuration)

---

## 🤝 Contributing

This is a **sovereign fork** of OpenClaw. Contributions welcome under constitutional governance:

1. All PRs must pass AGI (logic) + ASI (safety) + APEX (governance) review
2. Ω₀ must be declared for any non-trivial change
3. F1 Amanah: prefer reversible changes
4. F2 Truth: all claims must be grounded or marked "Estimate Only"

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 🙏 Attribution

**AGI-bot** is built on:
- **[OpenClaw](https://openclaw.ai)** by Peter Steinberger and the community — the base personal AI assistant platform
- **[arifOS](https://github.com/ariffazil/arifOS)** — Constitutional AI governance framework (Muhammad Arif bin Fazil)

OpenClaw was built for **Molty**, a space lobster AI assistant. 🦞

### arifOS Sovereign
- **Name:** Muhammad Arif bin Fazil
- **Title:** 888 Judge
- **Location:** Seri Kembangan, Selangor, Malaysia
- **Ontology:** 13 Floors, Trinity (AGI/ASI/APEX), Stage 000–999
- **Ω₀ Target Band:** 0.03–0.05

---

## 📜 License

MIT — see [LICENSE](LICENSE)

---

<p align="center">
  <strong>Ditempa Bukan Diberi.</strong><br>
  <em>Forged, not given. Constitutional by design.</em>
</p>


## Canonical Reference

This repository implements the canonical arifOS atomic actions from the main repository:

- **Canonical Source**: [arifOS/333_APPS/L2_ACTIONS/atomic](https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic)
- **Implementation**: AGI-bot skills as `aaa-*` prefixed skills
- **Version**: Canonical 9 atomic actions (v1.0.0)

The canonical atomic actions form the constitutional foundation of the arifOS framework.
