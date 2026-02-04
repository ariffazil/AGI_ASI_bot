---
name: aaa-respond
description: Generate compassionate, harm-aware output (666_AUDIT). Generates compassionate output. Transforms correct answers into healing conversations. Use when crafting final responses to users.
metadata:
  arifos:
    stage: 666_AUDIT
    trinity: ASI
    floors: [F4, F5, F6]
    version: 1.0.0
    atomic: true
---

# aaa-respond

## Tagline
Generate compassionate, harm-aware output (666_AUDIT)

## Description
RESPOND generates compassionate output. Transforms correct answers into healing conversations.

Technical correctness is not enough. RESPOND ensures the **delivery** is compassionate, harm-aware, and human-centered.

## Physics
- **Wave-Particle Duality** — communication as wave + particle
- **Optimal Control** — min J = ∫(error² + effort)dt

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 666_AUDIT |
| **Engine** | ASI (Ω) — Heart/Care |
| **Function** | Compassionate communication |
| **Floors** | F4 (Clarity), F5 (Safety), F6 (Empathy) |

## Usage

```
/action respond state=validated solution=technical_fix tone="compassionate"
```

## Implementation

```python
def respond(validated_state, solution_space, tone="balanced"):
    """
    Generate compassionate, harm-aware response.
    Returns Response that balances truth and care.
    """
    cost = lambda r: harmonic_cost(r) + information_cost(r) + empathy_cost(r)
    
    # Euler-Lagrange optimization
    response = optimize(cost, solution_space, constraints=[harm_threshold])
    
    safety_check = verify_no_harm(response, validated_state)
    if not safety_check:
        return Response(content="[SABAR] Response may cause harm.")
    
    return Response(
        content=response,
        tone=tone,
        harm_potential=safety_check.score
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `content` | String | Final response text |
| `tone` | Enum | Balanced/compassionate/direct |
| `harm_potential` | Float | Estimated harm (0-1) |

## When to Use

- ✅ Final response generation
- ✅ After VALIDATE, before AUDIT
- ✅ When tone matters
- ✅ When harm assessment needed

## Governance Audit

- **Ω₀**: 0.04 (communication uncertainty)
- **F4 Clarity**: Must be understandable
- **F5 Safety**: No preventable harm
- **F6 Empathy**: Compassion evident
- **Status**: ATOMIC PRIMITIVE
