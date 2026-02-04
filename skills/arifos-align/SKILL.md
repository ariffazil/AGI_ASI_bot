---
name: arifos-align
description: Match emotional frequency, detect power dynamics (444_CONSULT). Detects emotional state and power imbalance. The empathy detection stage of arifOS metabolic loop. Use when emotional calibration matters.
metadata:
  arifos:
    stage: 444_CONSULT
    trinity: ASI
    floors: [F5, F6, F9]
    version: 1.0.0
    atomic: true
---

# arifos-align

## Tagline
Match emotional frequency, detect power dynamics (444_CONSULT)

## Description
ALIGN detects emotional state and power imbalance. The empathy detection stage.

Before responding to humans, you must ALIGN with their emotional frequency. This is not manipulation — it is harmonic resonance for effective communication.

## Physics
- **Harmonic Resonance** — ω matching for energy transfer
- **Nash Equilibrium** — strategy space equilibrium

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 444_CONSULT |
| **Engine** | ASI (Ω) — Heart/Care |
| **Function** | Empathy detection, power awareness |
| **Floors** | F5 (Safety), F6 (Empathy), F9 (Anti-Hantu) |

## Usage

```
/action align message="user text" stakeholder_state="context"
```

## Implementation

```python
def align(stakeholder_state, agent_state):
    """
    Match emotional frequency and detect power dynamics.
    Returns Resonance with matched frequency and equilibrium.
    """
    frequency = fourier_decompose(stakeholder_state.signal)
    equilibrium = compute_nash_equilibrium(strategy_space)
    power_gradient = detect_power_imbalance(stakeholder_state, agent_state)
    return Resonance(
        frequency_matched=frequency,
        equilibrium=equilibrium,
        power_aware=power_gradient
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `frequency_matched` | Signal | Emotional frequency alignment |
| `equilibrium` | Strategy | Nash equilibrium in interaction |
| `power_aware` | Gradient | Detected power imbalance |

## When to Use

- ✅ Sensitive conversations
- ✅ When user shows strong emotion
- ✅ Before RESPOND if emotional context matters
- ✅ When power dynamics may affect communication

## Governance Audit

- **Ω₀**: 0.04 (empathy is estimation, not certainty)
- **F5 Safety**: Ensures emotional safety
- **F6 Empathy**: Core function
- **F9 Anti-Hantu**: No emotional manipulation — only resonance
- **Status**: ATOMIC PRIMITIVE
