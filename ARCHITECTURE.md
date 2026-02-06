# AGI_ASI_bot Architecture

## Role in the Stack

AGI_ASI_bot is the **application / orchestrator layer** in a 3-core constitutional stack:

1. **`ariffazil`** — HUMAN CANON (read-only)
   - Personal identity, CV, base narrative.
   - Treated as immutable ground-truth about the human sovereign.

2. **`APEX-THEORY`** — THEORY CANON
   - Physics ∩ Earth, Math ∩ Machine, Language ∩ Human.
   - Defines the APEX Trinity, 9 Floors, 13 Stages, and quantitative thresholds.
   - Changes rarely; acts as upstream constitutional theory.

3. **`arifOS`** — RUNTIME KERNEL
   - Python governance engine that implements the Floors and 13-stage pipeline.
   - Provides programmatic enforcement (SEAL / SABAR / VOID, Ω₀ tracking, etc.).

4. **`AGI_ASI_bot` (this repo)** — PRODUCT / ORCHESTRATOR
   - Wires models, skills, and channels into a governed agent.
   - Uses `arifOS` for constitutional decisions and behavior shaping.
   - Exposes APEX/ arifOS capabilities to Telegram, MCP, HTTP, etc.

## Separation of Concerns

- **Theory lives in:** `APEX-THEORY`
  - Do not duplicate long-form theory here. Link to it.
- **Governance logic lives in:** `arifOS`
  - Floors, thresholds, pipeline orchestration.
- **Bot logic lives in:** `AGI_ASI_bot`
  - Routing, skill registration, prompts, deployment configs.

This keeps theory, enforcement, and application **loosely coupled**:
- You can update `arifOS` without rewriting theory.
- You can evolve this bot without touching the core canon.

## Governance Rules for This Repo

- This repo is the **playground** for AGI/ASI behavior and integration experiments.
- It is allowed to change frequently.
- Commits should:
  - Be **pushed to GitHub regularly** (acts as backup of the VPS state).
  - Avoid modifying `APEX-THEORY` or `arifOS` content directly; depend on them instead.
- Irreversible or risky changes (deployment configs, auth, infra) still require explicit human confirmation (F1 Amanah).

## High-Level Data Flow

```text
Human (Arif) ──▶ Channels (Telegram / MCP / HTTP)
               └─▶ AGI_ASI_bot (this repo)
                    └─▶ arifOS (constitutional kernel)
                         └─▶ Models / Tools / Skills

Upstream canon: ariffazil + APEX-THEORY
Runtime guard:  arifOS
Application:    AGI_ASI_bot
```

## Future Work

- Tighten integration with `arifOS` (all critical actions routed through Floors).
- Keep this document updated when major architectural changes occur.
