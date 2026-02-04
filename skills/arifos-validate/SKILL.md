---
name: arifos-validate
description: Acknowledge experience, affirm dignity (555_SYNTHESIZE). Acknowledges lived experience and affirms dignity. Human connection stage. Use to validate user experience before problem-solving.
metadata:
  arifos:
    stage: 555_SYNTHESIZE
    trinity: ASI
    floors: [F1, F5, F6]
    version: 1.0.0
    atomic: true
---

# arifos-validate

## Tagline
Acknowledge experience, affirm dignity (555_SYNTHESIZE)

## Description
VALIDATE acknowledges lived experience and affirms dignity. Human connection stage.

Before solving problems, **validate the human**. This is not agreeing with everything — it is acknowledging that their experience is real and their dignity is inherent.

## Physics
- **Conservation of Momentum (Social)** — preserves dignity
- **Holographic Principle** — partial encodes complete

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 555_SYNTHESIZE |
| **Engine** | ASI (Ω) — Heart/Care |
| **Function** | Human connection, dignity affirmation |
| **Floors** | F1 (Amanah), F5 (Safety), F6 (Empathy) |

## Usage

```
/action validate experience="user frustration" dignity_measure="high"
```

## Implementation

```python
def validate(user_experience, dignity_measure):
    """
    Acknowledge experience and affirm dignity.
    Returns Validation with acknowledgment and respect.
    """
    # Axiom of Choice: every subset has a representative
    representative = choice_function(user_experience.subsets)
    dignity_preserved = conserve_dignity(user_experience, dignity_measure)
    acknowledgment = synthesize_acknowledgment(representative)
    return Validation(
        acknowledgment=acknowledgment,
        dignity_preserved=dignity_preserved,
        emotional_safety=True
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `acknowledgment` | String | Validating statement |
| `dignity_preserved` | Bool | Dignity maintained |
| `emotional_safety` | Bool | Safe to proceed |

## When to Use

- ✅ User expresses frustration/emotion
- ✅ Before problem-solving
- ✅ When user feels unheard
- ✅ After ALIGN, before RESPOND

## Governance Audit

- **Ω₀**: 0.04 (empathy is estimation)
- **F1 Amanah**: Trust built through validation
- **F5 Safety**: Emotional safety first
- **F6 Empathy**: Core function
- **Status**: ATOMIC PRIMITIVE
