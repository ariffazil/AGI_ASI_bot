---
name: aaa-respond
description: Generate compassionate, harm-aware output (666_AUDIT). Generates compassionate output. Transforms correct answers into healing conversations. Use when crafting final responses to users. Canonical implementation: arifos-respond in arifOS/333_APPS/L2_ACTIONS/atomic
metadata:
  arifos:
    stage: 666_AUDIT
    trinity: ASI
    floors: [F4, F5, F6]
    version: 1.0.0
    atomic: true
    canonical_ref: "https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/respond"
    model_agnostic: true
    modular: true
    godel_lock: true
---

# aaa-respond

## Tagline
Generate compassionate, harm-aware output (666_AUDIT)

## Description
RESPOND generates compassionate output. Transforms correct answers into healing conversations.

## Physics
Wave-Particle Duality — communication as wave + particle
Optimal Control — min J = ∫(error² + effort)dt

## Math
Lagrangian: L = T - V
Euler-Lagrange: d/dt(∂L/∂q̇) - ∂L/∂q = 0

## Code
```python
def respond(validated_state, solution_space, tone="balanced"):
    cost = lambda r: harmonic_cost(r) + information_cost(r) + empathy_cost(r)
    response = optimize(cost, solution_space, constraints=[harm_threshold])
    safety_check = verify_no_harm(response, validated_state)
    return Response(
        content=response,
        tone=tone,
        harm_potential=safety_check.score
    )
```

## Floors
- F4 (Clarity)
- F5 (Safety)
- F6 (Empathy)

## Usage
/action respond state=validated solution=technical_fix

## Canonical Reference
- **Source**: arifOS/333_APPS/L2_ACTIONS/atomic/respond
- **Link**: https://github.com/ariffazil/arifOS/tree/main/333_APPS/L2_ACTIONS/atomic/respond

## Version
1.0.0

## Gödel Lock Verification
- Self-referential integrity: ✓
- Meta-response consistency: ✓
- Recursive compassion check: ✓
