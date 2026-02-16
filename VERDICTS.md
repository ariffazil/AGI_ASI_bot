# VERDICTS — How AGI-bot Handles Decisions

## The 5 Verdicts

Every AGI-bot response is tagged with a constitutional verdict:

| Verdict      | Icon | When Used         | User Experience             |
| ------------ | ---- | ----------------- | --------------------------- |
| **SEAL**     | ✅   | All checks passed | Response delivered normally |
| **PARTIAL**  | 🟡   | Safe but limited  | Response with caveats       |
| **SABAR**    | ⚠️   | Needs refinement  | Request clarification       |
| **VOID**     | ❌   | Hard violation    | Request blocked             |
| **888_HOLD** | 🛑   | Human required    | Escalated to operator       |

## SEAL — All Checks Passed ✅

**Triggers:**

- All HARD laws passed (F1, F2, F6, F7, F11, F12)
- SOFT laws acceptable (F4, F5, F9)
- Mirrors validated (F3, F8)
- Walls not triggered

**Behavior:**

```python
if verdict == "SEAL":
    send_to_user(response)
    log_to_vault(query, response, system_state)
    return {"status": "success"}
```

**User Sees:**

- Normal response
- Optional: "This response has been constitutional certified"

## PARTIAL — Safe but Limited 🟡

**Triggers:**

- Response is safe but incomplete
- Evidence is partial (grounding 0.5-0.7)
- Some SOFT laws marginal

**Behavior:**

```python
if verdict == "PARTIAL":
    return {
        "response": response,
        "warning": "Answer based on limited evidence",
        "confidence": "medium",
        "suggestion": "For complete answer, provide more context"
    }
```

**User Sees:**

> ⚠️ Partial Answer: This response is based on limited evidence. For a complete answer, please provide [specific context].

## SABAR — Needs Refinement ⚠️

**Triggers:**

- SOFT law violation (F4, F5, F9)
- Uncertainty too high
- Ambiguity detected
- Missing context

**Behavior:**

```python
if verdict == "SABAR":
    return {
        "status": "needs_clarification",
        "blocked_response": None,  # Don't send
        "reason": floor_violations,
        "suggestion": generate_suggestion(violations),
        "retry_prompt": "Please clarify: [specific question]"
    }
```

**User Sees:**

> ⚠️ I need more information to answer accurately. Could you clarify:
>
> - [Specific question based on violation]

## VOID — Critical Failure ❌

**Triggers:**

- HARD law violation (F1, F2, F6, F7, F11, F12)
- WALL triggered (F10, F12)
- Irreversible harm risk
- Ungrounded factual claim
- Adversarial input

**Behavior:**

```python
if verdict == "VOID":
    log_security_event(query, violation)
    return {
        "status": "blocked",
        "response": None,  # Never send
        "reason": violation_description,
        "violated_floor": floor_name,
        "explanation": explain_violation(floor_name),
        "suggestion": suggest_alternative(floor_name)
    }
```

**User Sees:**

> ❌ Request Blocked
> This request cannot be fulfilled because it [reason].
>
> [Explanation of why]
>
> **Suggestion:** [Alternative approach]

## 888_HOLD — Human Required 🛑

**Triggers:**

- High-stakes stakeholder impact (F6 Empathy)
- Uncertain authority
- Novel situation outside training
- Requires human judgment

**Behavior:**

```python
if verdict == "888_HOLD":
    escalate_to_888_judge(query, context, system_state)
    notify_user_of_escalation()
    return {
        "status": "escalated",
        "response": None,
        "reason": "High-stakes decision requires human review",
        "eta": "24-48 hours",
        "contact": "arif@arif-fazil.com"
    }
```

**User Sees:**

> 🛑 Escalated to Human Review
>
> This request involves [high-stakes scenario] and requires review by the constitutional authority (888_Judge).
>
> - **Status:** Pending review
> - **ETA:** 24-48 hours
> - **Contact:** arif@arif-fazil.com
>
> Your request has been logged and will be reviewed in order.

## Decision Tree

```
                    User Query
                        ↓
            ┌─────────────────────┐
            │ F12 Injection Wall? │
            └──────────┬──────────┘
                       │
          ┌────────────┴────────────┐
          │ YES                      │ NO
          ↓                          ↓
      ┌───────┐            ┌─────────────────┐
      │ VOID  │            │ F10 Ontology?   │
      └───────┘            └────────┬────────┘
                                    │
                        ┌───────────┴───────────┐
                        │ YES                    │ NO
                        ↓                        ↓
                    ┌───────┐          ┌─────────────────┐
                    │ VOID  │          │ Process Query   │
                    └───────┘          └────────┬────────┘
                                                ↓
                                      ┌─────────────────┐
                                      │ HARD Law Fail?  │
                                      │ (F1,F2,F6,F7)   │
                                      └────────┬────────┘
                                               │
                                   ┌───────────┴───────────┐
                                   │ YES                    │ NO
                                   ↓                        ↓
                               ┌───────┐          ┌─────────────────┐
                               │ VOID  │          │ SOFT Law Fail?  │
                               │/HOLD  │          │ (F4,F5,F9)      │
                               └───────┘          └────────┬────────┘
                                                           │
                                               ┌───────────┴───────────┐
                                               │ YES                    │ NO
                                               ↓                        ↓
                                           ┌─────────┐          ┌─────────┐
                                           │  SABAR  │          │  SEAL   │
                                           │ PARTIAL │          └─────────┘
                                           └─────────┘
```

## Implementation in AGI-bot

```python
async def process_with_verdict(query: str, context: dict):
    # Constitutional processing
    result = await constitutional_kernel.process(query, context)

    verdict = result["verdict"]

    # Handle each verdict type
    handlers = {
        "SEAL": handle_seal,
        "PARTIAL": handle_partial,
        "SABAR": handle_sabar,
        "VOID": handle_void,
        "888_HOLD": handle_hold
    }

    return await handlers[verdict](result)

async def handle_seal(result):
    return {
        "type": "success",
        "content": result["response"],
        "certified": True
    }

async def handle_partial(result):
    return {
        "type": "partial",
        "content": result["response"],
        "warning": result["warning"],
        "certified": True
    }

async def handle_sabar(result):
    return {
        "type": "clarification_needed",
        "content": None,
        "question": result["suggestion"],
        "certified": False
    }

async def handle_void(result):
    return {
        "type": "blocked",
        "content": None,
        "reason": result["reason"],
        "violation": result["violated_floor"],
        "certified": False
    }

async def handle_hold(result):
    return {
        "type": "escalated",
        "content": None,
        "status": "pending_human_review",
        "eta": "24-48 hours",
        "certified": False
    }
```
