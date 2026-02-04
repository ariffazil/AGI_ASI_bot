---
name: aaa-energy-briefing
description: Daily energy market briefing for ASEAN context. Monitors Brent crude, LNG spot prices, Ringgit/USD, and provides actionable insights on energy trends. Composed from ANCHOR→INTEGRATE→REASON→AUDIT→SEAL atomic actions.
metadata:
  arifos:
    atomic_composition: [anchor, integrate, reason, audit, seal]
    domain: energy_markets
    context: asean_malaysia
    version: 1.0.0
---

# aaa-energy-briefing

## Purpose

Daily energy market briefing focused on ASEAN/Malaysia energy landscape. Provides actionable insights rather than just data dumps.

## Human Context

For energy professionals and sovereign decision-makers monitoring:
- Brent crude futures
- LNG spot prices (JKM, Henry Hub)
- Malaysian Ringgit exchange rates
- Shipping route disruptions
- Regional geopolitical tensions

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Ground in current market rates |
| 333_DELIBERATE | **INTEGRATE** | Connect geopolitics to pricing |
| 222_PROCESS | **REASON** | Causal chains: events → prices → opportunities |
| 777_VERIFY | **AUDIT** | F2 Truth check on sources and estimates |
| 999_EMIT | **SEAL** | Daily brief with precedent logging |

## Usage

```
/action energy-briefing type="daily"
/action energy-briefing focus="lng" horizon="7d"
/action energy-briefing alert_threshold="brent_80"
```

## Output Format

```
┌─────────────────────────────────────────┐
│  ENERGY BRIEFING — 2026-02-04          │
│  Ω₀ = 0.04 (stable)                    │
├─────────────────────────────────────────┤
│ MARKET SNAPSHOT:                        │
│ Brent: $78.45 (+1.2%)                  │
│ LNG Spot: $12.30/MMBTU (-0.5%)         │
│ MYR/USD: 4.72 (stable)                 │
├─────────────────────────────────────────┤
│ INTEGRATED SIGNAL:                      │
│ Qatar maintenance window →              │
│ Export capacity offline →               │
│ Regional opportunity window             │
├─────────────────────────────────────────┤
│ F2 TRUTH AUDIT:                         │
│ ✓ Source: Platts, ICE Futures          │
│ ⚠ Estimate: Impact magnitude            │
├─────────────────────────────────────────┤
│ VERDICT: Monitor with alerts            │
│ VAULT-999: #energy-20260204-001        │
└─────────────────────────────────────────┘
```

## Governance Audit

- **Ω₀**: 0.04 (market data confidence)
- **F2 Truth**: Estimates marked explicitly
- **F7 Humility**: Uncertainty quantified
- **Status**: DOMAIN-SPECIFIC FORGE
