---
name: arifos-dewan-metabolizer
description: Dewan (council) meeting metabolizer. Extracts decisions, risks, actions from meetings with constitutional mapping. Composed from ANCHOR→ALIGN→VALIDATE→REASON→AUDIT→SEAL.
metadata:
  arifos:
    atomic_composition: [anchor, align, validate, reason, audit, seal]
    domain: meeting_governance
    context: deliberative_sovereignty
    version: 1.0.0
---

# arifos-dewan-metabolizer

## EUREKA Design

**Dewan** = Council, chamber, deliberative space in Malay.

This metabolizes meetings into **structured governance output** — not just notes, but **decisions mapped to constitutional floors**. Meetings without metabolization are just noise.

## Human Context

You chair/participate in:
- Governance decisions (888 Judge role)
- Professional meetings with power dynamics
- Deliberations requiring documentation
- Council meetings needing VAULT-999 precedent

You don't need "meeting minutes." You need **decision metabolism**.

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Meeting context, participants, agenda |
| 444_CONSULT | **ALIGN** | Emotional temp, power dynamics (who can VOID?) |
| 555_SYNTHESIZE | **VALIDATE** | Acknowledge minority voices before dissent |
| 222_PROCESS | **REASON** | Extract: Decisions → Risks → Actions |
| 777_VERIFY | **AUDIT** | Map each decision to F1-F9 (F7 Humility present?) |
| 999_EMIT | **SEAL** | Structured log → Obsidian → Git commit |

## Example Output

```
┌─────────────────────────────────────────┐
│  DEWAN METABOLIZER — Board Meeting      │
│  Ω₀ = 0.05 (elevated, emotion detected) │
├─────────────────────────────────────────┤
│ PARTICIPANTS: 8 (Arif chair)            │
│ DURATION: 2h 15m                        │
│ ALIGN: Tension on Item 3 (power claim)  │
├─────────────────────────────────────────┤
│ DECISIONS EXTRACTED:                    │
│ D1: Expand LNG trading desk             │
│   → Risk: Capital exposure $5M          │
│   → Action: CFO feasibility by Feb 15   │
│   → F7 check: ✓ Uncertainty declared    │
│                                         │
│ D2: Delay Q3 project                    │
│   → Risk: Contractor penalties          │
│   → Action: Legal review                │
│   → F1 check: ✓ Reversible (2wk window) │
├─────────────────────────────────────────┤
│ VALIDATE:                               │
│ ✓ Minority voice (Ops) acknowledged     │
│ ✓ Dissent noted without dismissal       │
├─────────────────────────────────────────┤
│ VERDICT: SEAL with monitoring           │
│ VAULT-999: #dewan-2026-02-04-001        │
└─────────────────────────────────────────┘
```

## Usage

```
/action dewan-metabolizer transcribe=audio_file
/action dewan-metabolizer extract=decisions_only
/action dewan-metabolizer audit=floor_check
```

## Constitutional Mapping

Every decision checked against:
- **F1 Amanah**: Reversible? How?
- **F2 Truth**: Evidence grounded?
- **F7 Humility**: Uncertainty declared?
- **F9 Anti-Hantu**: No spiritual cosplay in reasoning?

## Governance Audit

- **Ω₀**: 0.04-0.07 (meeting dynamics uncertain)
- **F5 Safety**: Emotional safety in room
- **F6 Empathy**: Minority voices validated
- **F7 Humility**: Limits acknowledged
- **Status**: DOMAIN-SPECIFIC FORGE from atomic primitives
