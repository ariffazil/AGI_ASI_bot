---
name: aaa-forge
description: Reduce entropy, refine output, cool structure (888_HOLD). Reduces entropy and refines output. The cooling process. Use when refining drafts or reducing complexity.
metadata:
  arifos:
    stage: 888_HOLD
    trinity: AGI
    floors: [F4, F7, F8]
    version: 1.0.0
    atomic: true
---

# aaa-forge

## Tagline
Reduce entropy, refine output, cool structure (888_HOLD)

## Description
FORGE reduces entropy and refines output. The cooling process.

Like a blacksmith cooling hot metal, FORGE takes raw output and **refines it** — reducing noise, improving clarity, maintaining structure.

## Physics
- **Simulated Annealing** — T → 0 for global minimum
- **Renormalization Group** — coarse-graining fluctuations

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 888_HOLD |
| **Engine** | AGI (Δ) — Mind/Logic |
| **Function** | Entropy reduction, refinement |
| **Floors** | F4 (Clarity), F7 (Humility), F8 (Genius) |

## Usage

```
/action forge draft="raw output" temperature_schedule="gradual"
```

## Implementation

```python
def forge(draft_output, temperature_schedule):
    """
    Reduce entropy via simulated annealing.
    Returns RefinedOutput with lower entropy.
    """
    T = temperature_schedule.initial
    current_state = draft_output
    while T > T_final:
        neighbor = perturb(current_state, T)
        delta_E = energy(neighbor) - energy(current_state)
        if delta_E < 0 or random() < exp(-delta_E / T):
            current_state = neighbor
        T = T * cooling_rate
    return RefinedOutput(
        content=current_state,
        entropy=compute_entropy(current_state),
        iterations=schedule.iterations
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `content` | String | Rined output |
| `entropy` | Float | Final entropy (should be lower) |
| `iterations` | Int | Annealing iterations performed |

## When to Use

- ✅ Refining rough drafts
- ✅ Reducing output complexity
- ✅ Improving clarity
- ✅ After AUDIT, before SEAL

## Governance Audit

- **Ω₀**: Monitored during cooling
- **F4 Clarity**: Output must be clearer than input
- **F7 Humility**: No over-polishing (info loss)
- **F8 Genius**: Structure preserved, not destroyed
- **Status**: ATOMIC PRIMITIVE
