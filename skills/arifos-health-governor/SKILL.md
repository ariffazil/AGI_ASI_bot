---
name: arifos-health-governor
description: Personal health governance system. Tracks HRV, sleep, steps as governance data. Treats body as first system to govern. Composed from ANCHOR→REASON→INTEGRATE→AUDIT→SEAL.
metadata:
  arifos:
    atomic_composition: [anchor, reason, integrate, audit, seal]
    domain: personal_health
    context: biometrics_sovereignty
    version: 1.0.0
---

# arifos-health-governor

## EUREKA Design

**Your body is the first system you govern.**

This skill treats health data as **constitutional metrics** — not fitness tracking, but **thermodynamic governance**. When Ω₀ > 0.05, you force rest (SABAR mode).

## Human Context

You track (or should track):
- HRV (Oura Ring) — autonomic nervous system
- Sleep score — recovery quality  
- Steps — metabolic baseline
- Optional: glucose, body temp

You don't need "workout harder." You need **entropy reduction**.

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Current biometrics snapshot |
| 222_PROCESS | **REASON** | Pattern: "HRV drops precede fatigue by 2d" |
| 333_DELIBERATE | **INTEGRATE** | Sleep + meeting load + Ω₀ correlation |
| 777_VERIFY | **AUDIT** | Check if Ω₀ > 0.05 → force rest protocol |
| 999_EMIT | **SEAL** | Weekly health ledger with entropy trends |

## Example Output

```
┌─────────────────────────────────────────┐
│  THERMO-HEALTH — Week 5, 2026           │
│  Ω₀ = 0.06 ⚠️ ELEVATED                  │
├─────────────────────────────────────────┤
│ HRV AVG: 52ms (-8ms from last week)     │
│ SLEEP: 6.8h avg (62% deep)              │
│ STEPS: 7,200 avg                        │
├─────────────────────────────────────────┤
│ INTEGRATED SIGNAL:                      │
│ High meeting load (4.2h/day)            │
│ + HRV decline                           │
│ = Decision fatigue risk in 48hrs        │
├─────────────────────────────────────────┤
│ APEX VERDICT: SABAR                     │
│ → Mandatory rest: 24h no decisions      │
│ → Force sleep: 8h tonight               │
│ → Skip non-critical meetings            │
├─────────────────────────────────────────┤
│ VAULT-999: #health-2026-w5              │
└─────────────────────────────────────────┘
```

## Usage

```
/action health-governor check=daily
/action health-governor trend=weekly
/action health-governor force_rest=true
```

## Governance Rules

| Ω₀ Level | Status | Action |
|----------|--------|--------|
| < 0.03 | 🟢 Optimal | Normal operations |
| 0.03-0.05 | 🟡 Monitor | Lighten load |
| 0.05-0.08 | 🟠 SABAR | Mandatory rest |
| > 0.08 | 🔴 VOID | Stop all decisions |

## Governance Audit

- **Ω₀**: Computed from HRV variance + sleep debt + load
- **F1 Amanah**: Rest is reversible, burnout is not
- **F7 Humility**: Body limits acknowledged
- **Status**: DOMAIN-SPECIFIC FORGE from atomic primitives
