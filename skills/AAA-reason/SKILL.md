---
name: AAA-reason
description: Logical inference, causal trace, plan steps (222_PROCESS). Executes logical inference and causal analysis. The cognitive engine of AGI tier. Use when breaking down complex problems into logical steps. Canonical implementation: AAA-reason in arifOS/333_APPS/L2_ACTIONS/atomic
metadata:
  arifos:
    stage: 222_PROCESS
    trinity: AGI
    floors: [F2, F4, F7]
    version: 1.0.0
    atomic: true
    canonical_ref: "https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/reason"
    model_agnostic: true
    modular: true
    godel_lock: true
---

# AAA-reason

## Tagline
Logical inference, causal trace, plan steps (222_PROCESS)

## Description
REASON executes logical inference and causal analysis. The cognitive engine of AGI tier.

## Physics
Pearl's Do-Calculus — P(Y|do(X)) causal intervention
Landauer's Principle — kT ln(2) per bit

## Math
Propositional Logic: (P → Q) ∧ P ⊢ Q

## Code
```python
def reason(causal_graph, query):
    intervention = identify_intervention(causal_graph, query)
    plan = topological_sort(causal_graph, intervention)
    return Plan(steps=plan)
```

## Floors
- F2 (Truth)
- F7 (Humility)
- F4 (Clarity)

## Usage
/action reason problem="complex issue"

## Canonical Reference
- **Source**: arifOS/333_APPS/L2_ACTIONS/atomic/reason
- **Link**: https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/reason

## Version
1.0.0

## Gödel Lock Verification
- Self-referential integrity: ✓
- Meta-logical consistency: ✓
- Recursive validity check: ✓
