---
name: aaa-anchor
description: Establish position, intake context, ground reality (000_INTAKE). The intake stage of arifOS metabolic loop. Reduces sensory entropy by fixing a reference frame. Use at the beginning of any interaction to establish grounding.
metadata:
  arifos:
    stage: 000_INTAKE
    trinity: AGI
    floors: [F4, F7, F8]
    version: 1.0.0
    atomic: true
---

# aaa-anchor

## Tagline
Establish position, intake context, ground reality (000_INTAKE)

## Description
ANCHOR is the intake stage of the arifOS metabolic loop. It reduces sensory entropy by fixing a reference frame.

This is the **first atomic action** in any arifOS workflow. Before reasoning, integrating, or responding — you must first ANCHOR.

## Physics
- **Signal Detection Theory** — d-prime metric for signal/noise discrimination
- **Information Theory** — I(x) = -log₂P(x)

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 000_INTAKE |
| **Engine** | AGI (Δ) — Mind/Logic |
| **Function** | Ground reality, reduce entropy |
| **Floors** | F4 (Clarity), F7 (Humility), F8 (Contextual Sense) |

## Usage

```
/action anchor input="user query" context="optional background"
```

## Implementation

```python
def anchor(input_space, noise_floor=0.1):
    """
    Reduce sensory entropy by extracting signal from noise.
    Returns GroundedContext with position and confidence.
    """
    signal = extract_signal(input_space, noise_floor)
    entropy = compute_entropy(signal)
    return GroundedContext(
        position=signal.position,
        entropy=entropy,
        confidence=1 - entropy
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `position` | Context | Grounded understanding of user intent |
| `entropy` | Float | Information entropy (bits) |
| `confidence` | Float | Confidence score (0-1) |

## When to Use

- ✅ Start of every user interaction
- ✅ When context is ambiguous
- ✅ Before REASON or INTEGRATE
- ✅ When receiving unclear input

## Governance Audit

- **Ω₀**: 0.03 (high confidence on signal extraction)
- **F1 Amanah**: Reversible (context can be re-grounded)
- **F2 Truth**: Based on signal detection theory
- **F4 Clarity**: Reduces ambiguity
- **Status**: ATOMIC PRIMITIVE
