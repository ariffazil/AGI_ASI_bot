---
name: AAA-anchor
description: Establish position, intake context, ground reality (000_INTAKE). The intake stage of arifOS metabolic loop. Reduces sensory entropy by fixing a reference frame. Use at the beginning of any interaction to establish grounding. Canonical implementation: AAA-anchor in arifOS/333_APPS/L2_ACTIONS/atomic
metadata:
  arifos:
    stage: 000_INTAKE
    trinity: AGI
    floors: [F4, F7, F8]
    version: 1.0.0
    atomic: true
    canonical_ref: "https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/anchor"
    model_agnostic: true
    modular: true
    godel_lock: true
---

# AAA-anchor

## Tagline
Establish position, intake context, ground reality (000_INTAKE)

## Description
ANCHOR is the intake stage of the arifOS metabolic loop. It reduces sensory entropy by fixing a reference frame.

## Physics
Signal Detection Theory — d-prime metric for signal/noise discrimination

## Math
Information Theory: I(x) = -log₂P(x)

## Code
```python
def anchor(input_space, noise_floor):
    signal = extract_signal(input_space, noise_floor)
    return GroundedContext(position=signal.position)
```

## Floors
- F4 (Clarity)
- F8 (Contextual Sense)
- F7 (Humility)

## Usage
/action anchor input="user query"

## Canonical Reference
- **Source**: arifOS/333_APPS/L2_ACTIONS/atomic/anchor
- **Link**: https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/anchor

## Version
1.0.0

## Gödel Lock Verification
- Self-referential integrity: ✓
- Meta-contextual grounding: ✓
- Recursive validity check: ✓
