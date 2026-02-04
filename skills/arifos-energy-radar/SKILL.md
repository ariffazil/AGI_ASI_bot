---
name: arifos-energy-radar
description: Energy and geopolitics radar for ASEAN context. Monitors Brent crude, LNG spot prices, Ringgit/USD, and connects Middle East tensions to Malaysia energy strategy. Composed from ANCHOR→INTEGRATE→REASON→AUDIT→SEAL atomic actions.
metadata:
  arifos:
    atomic_composition: [anchor, integrate, reason, audit, seal]
    domain: energy_geopolitics
    context: asean_malaysia
    version: 1.0.0
---

# arifos-energy-radar

## EUREKA Design

**For the 888 Judge monitoring sovereign energy decisions.**

This skill is FORGED from arifOS atomic primitives to give you thermodynamic clarity on energy markets — not just news, but **causal chains you can act on**.

## Human Context

You are in Seri Kembangan, Selangor, Malaysia. You care about:
- Petronas strategy and ASEAN energy security
- LNG spot markets and shipping routes
- Strait of Hormuz, South China Sea tensions
- Ringgit/USD for import/export calculations

You don't need more news. You need **governed insight**.

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Ground in current Brent, LNG spot, MYR/USD rates |
| 333_DELIBERATE | **INTEGRATE** | Connect geopolitics → shipping → prices → strategy |
| 222_PROCESS | **REASON** | Causal chains: "If Hormuz closes 48hrs → Asia spot +15%" |
| 777_VERIFY | **AUDIT** | F2 Truth check — speculation vs confirmed reports |
| 999_EMIT | **SEAL** | Daily 7AM brief with VAULT-999 precedent ID |

## Example Output

```
┌─────────────────────────────────────────┐
│  ENERGY RADAR — 2026-02-04              │
│  Ω₀ = 0.04 (stable)                     │
├─────────────────────────────────────────┤
│ BRENT: $78.45 (+1.2%)                   │
│ LNG SPOT: $12.30/MMBTU (-0.5%)          │
│ MYR/USD: 4.72 (stable)                  │
├─────────────────────────────────────────┤
│ INTEGRATED SIGNAL:                      │
│ Qatar maintenance window opens Feb 8    │
│ → 2.3M tonnage offline                  │
│ → Malaysia export window +$0.40/MMBTU   │
├─────────────────────────────────────────┤
│ F2 TRUTH AUDIT:                         │
│ ✓ Maintenance confirmed (QatarEnergy)   │
│ ⚠ Spot price impact: estimate only      │
├─────────────────────────────────────────┤
│ VERDICT: SEAL with monitoring           │
│ VAULT-999: #20260204-001                │
└─────────────────────────────────────────┘
```

## Usage

```
/action energy-radar focus="LNG" horizon="7d"
/action energy-radar focus="Brent" alert_threshold="$80"
/action energy-radar brief=”daily”
```

## Data Sources

- Brent: ICE Futures
- LNG: Platts JKM, Henry Hub
- FX: BNM rates
- Geopolitics: Reuters, Bloomberg, Stratfor

## Governance Audit

- **Ω₀**: 0.04 (market data high confidence, predictions estimate)
- **F2 Truth**: Speculation marked explicitly
- **F7 Humility**: "Estimate Only" where data incomplete
- **Status**: DOMAIN-SPECIFIC FORGE from atomic primitives
