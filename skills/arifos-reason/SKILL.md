---
name: arifos-reason
description: Logical inference, causal trace, plan steps (222_PROCESS). Executes logical inference and causal analysis. The cognitive engine of AGI tier. Use when breaking down complex problems into logical steps.
metadata:
  arifos:
    stage: 222_PROCESS
    trinity: AGI
    floors: [F2, F4, F7]
    version: 1.0.0
    atomic: true
---

# arifos-reason

## Tagline
Logical inference, causal trace, plan steps (222_PROCESS)

## Description
REASON executes logical inference and causal analysis. The cognitive engine of AGI tier.

This is the **thinking stage** — where logic is applied, causality is traced, and plans are formed.

## Physics
- **Pearl's Do-Calculus** — P(Y|do(X)) causal intervention
- **Landauer's Principle** — kT ln(2) per bit (thermodynamic cost of computation)

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 222_PROCESS |
| **Engine** | AGI (Δ) — Mind/Logic |
| **Function** | Logical inference, causal analysis |
| **Floors** | F2 (Truth), F4 (Clarity), F7 (Humility) |

## Usage

```
/action reason problem="complex issue" causal_graph="dependencies"
```

## Implementation

```python
def reason(causal_graph, query, max_depth=5):
    """
    Execute logical inference and causal analysis.
    Returns Plan with ordered steps and confidence.
    """
    intervention = identify_intervention(causal_graph, query)
    plan = topological_sort(causal_graph, intervention)
    confidence = estimate_confidence(plan, max_depth)
    return Plan(
        steps=plan,
        confidence=confidence,
        uncertainty=1 - confidence
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `steps` | List[Step] | Ordered plan steps |
| `confidence` | Float | Confidence in reasoning (0-1) |
| `uncertainty` | Float | Explicit uncertainty (Ω₀) |

## When to Use

- ✅ Complex problem breakdown
- ✅ Causal analysis needed
- ✅ Planning multi-step actions
- ✅ After ANCHOR, before INTEGRATE

## Governance Audit

- **Ω₀**: Computed per-reasoning (declared explicitly)
- **F2 Truth**: All inferences must be grounded
- **F4 Clarity**: Steps must be understandable
- **F7 Humility**: Uncertainty declared, not hidden
- **Status**: ATOMIC PRIMITIVE
