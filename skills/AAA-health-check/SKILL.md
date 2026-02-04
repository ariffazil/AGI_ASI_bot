---
name: AAA-health-check
description: Personal health metrics monitoring and governance. Tracks biometrics (HRV, sleep, steps) to maintain optimal decision-making capacity. Composed from ANCHOR→REASON→INTEGRATE→AUDIT→SEAL atomic actions.
metadata:
  arifos:
    atomic_composition: [anchor, reason, integrate, audit, seal]
    domain: personal_health
    context: biometric_monitoring
    version: 1.0.0
---

# AAA-health-check

## Purpose

Personal health metrics monitoring to maintain optimal governance capacity. Treats body as first system to govern.

## Human Context

Monitors key biometrics to prevent decision fatigue and maintain constitutional performance:
- HRV (autonomic nervous system recovery)
- Sleep quality and duration
- Physical activity levels
- Overall readiness for governance tasks

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Current biometric snapshot |
| 222_PROCESS | **REASON** | Pattern detection: HRV → decision fatigue correlation |
| 333_DELIBERATE | **INTEGRATE** | Sleep + activity + stress metrics |
| 777_VERIFY | **AUDIT** | Check Ω₀ threshold: force rest if > 0.05 |
| 999_EMIT | **SEAL** | Health log with governance implications |

## Usage

```
/action health-check frequency="daily"
/action health-check trend="weekly"
/action health-check trigger_rest=true
```

## Output Format

```
┌─────────────────────────────────────────┐
│  HEALTH CHECK — Week 5, 2026           │
│  Ω₀ = 0.06 ⚠️ ELEVATED                 │
├─────────────────────────────────────────┤
│ BIOMETRICS SNAPSHOT:                    │
│ HRV AVG: 52ms (-8ms from last week)     │
│ SLEEP: 6.8h avg (62% deep)             │
│ STEPS: 7,200 avg                       │
├─────────────────────────────────────────┤
│ INTEGRATED ANALYSIS:                    │
│ High meeting load (4.2h/day)            │
│ + HRV decline                           │
│ = Decision fatigue risk in 48hrs        │
├─────────────────────────────────────────┤
│ APEX VERDICT: SABAR                     │
│ → Rest protocol activated               │
│ → Schedule buffer time                  │
│ → Monitor for 48h                       │
├─────────────────────────────────────────┤
│ VAULT-999: #health-2026-w5-001         │
└─────────────────────────────────────────┘
```

## Governance Thresholds

| Ω₀ Level | Action |
|----------|--------|
| < 0.03 | Normal operations |
| 0.03-0.05 | Lighten load |
| 0.05-0.08 | Mandatory rest (SABAR) |
| > 0.08 | VOID all decisions |

## Governance Audit

- **Ω₀**: Computed from biometric variance
- **F1 Amanah**: Rest protocols reversible
- **F7 Humility**: Body limits acknowledged
- **Status**: DOMAIN-SPECIFIC FORGE
