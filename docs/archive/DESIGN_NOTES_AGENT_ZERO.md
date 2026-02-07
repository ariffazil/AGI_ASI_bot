# Design Notes: Lessons from Agent Zero

Source: https://github.com/agent0ai/agent-zero (read-only reference)

This document captures **what AGI_ASI_bot will borrow** from Agent Zero, and how it fits into the APEX / arifOS stack.

---

## 1. Projects → Per-Mandate Workspaces

### Insight
Agent Zero introduces **Projects**: isolated workspaces with their own prompts, files, memory, and secrets.

### Plan for AGI_ASI_bot

Implement **Projects** as first-class objects, aligned with arifOS constitutional mandates:

- Example projects:
  - `PETRONAS_AUDIT`
  - `ARIFOS_DEV`
  - `PERSONAL_FINANCE`
  - `APEX_THEORY_EDITING`

- Each Project has:
  - `projects/<NAME>/PROMPT.md` — base system/behavior prompt for that mandate
  - `projects/<NAME>/MEMORY.md` — scoped memory (facts, decisions, context)
  - `projects/<NAME>/config.yaml` — tool/skill allowlist + arifOS floor settings

### Constraints
- No cross-project memory bleed by default.
- arifOS Floors can be tuned per-project (e.g., stricter for PETRONAS-related work).

---

## 2. Multi-Agent Hierarchy → Explicit AGI → ASI → APEX Graph

### Insight
Agent Zero bakes in a simple rule: every agent has a **superior** and may spawn **sub-agents**.

### Plan for AGI_ASI_bot

Codify an explicit hierarchy that matches the Trinity:

- **Front Agent:** `AGI_ASI_bot` (handles user interaction, routing)
- **Worker Agents:** task-focused agents (e.g., `CoderAgent`, `ResearchAgent`, `RefactorAgent`), possibly per-project
- **Judge Agent:** arifOS/APEX-driven verifier that:
  - reviews critical outputs
  - issues `SEAL` / `SABAR` / `VOID` verdicts

Rules:
- Every worker has a superior (either AGI_ASI_bot or another worker).
- The Judge (APEX/arifOS) sits **above** workers for governance decisions.
- Human sovereign (Arif) remains above the Judge (F13 Sovereign).

Deliverable:
- Add `AGENTS_GRAPH.md` describing this hierarchy and routing rules.

---

## 3. Instruments → Governed Skills Layer

### Insight
Agent Zero's **Instruments** are reusable custom functions/procedures the agent can call.

### Plan for AGI_ASI_bot

Define an explicit **Instrumentation / Skills** layer:

- Location: `instruments/` or `skills/` within AGI_ASI_bot.
- Examples:
  - `run_petronas_dividend_audit`
  - `issue_constitutional_verdict`
  - `summarize_project_memory`
  - `generate_readme_from_theory`

Properties of an instrument:
- Implemented as code (Python/TypeScript) with clear inputs/outputs.
- Routed through arifOS:
  - pre-check (is this allowed under Floors?)
  - post-check (does output pass SEAL/SABAR/VOID?)
- Documented:
  - purpose
  - risk level
  - reversibility (F1 Amanah)

---

## 4. What We Intentionally Do NOT Copy

From Agent Zero we **do not** copy:

- Single giant system prompt as the only governance mechanism.
  - Instead, governance lives in **APEX-THEORY + arifOS** (physics + Floors), and prompts are application-level behavior.

- "No hard-coded rails" philosophy.
  - AGI_ASI_bot **does** impose rails: Floors, Ω₀ band, SEAL/SABAR/VOID, and project-level tool limits.

This keeps AGI_ASI_bot compatible with Agent Zero's best ideas while staying faithful to APEX's thermodynamic governance.

---

## 5. Next Steps (Implementation Checklist)

- [ ] Define `projects/` layout and create 1–2 pilot projects
- [ ] Add `AGENTS_GRAPH.md` describing the AGI → ASI → APEX hierarchy
- [ ] Design `instruments/` module with 1–2 concrete instruments
- [ ] Wire instruments through arifOS for pre/post verdict checks
- [ ] Update `ARCHITECTURE.md` to reference Projects, Hierarchy, and Instruments
