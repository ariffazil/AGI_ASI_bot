# SYSTEM_STATE — Runtime Metrics Exposure

## Overview

Every AGI-bot response includes a `system_state` object that exposes the constitutional runtime metrics. This provides transparency and enables the Meta-Scheduler.

## SystemState Schema

```json
{
  "verdict": "SEAL",
  "system_state": {
    "uncertainty": 0.45,
    "risk": 0.2,
    "grounding": 0.85,
    "loop_count": 0,
    "profile": "factual",
    "timestamp": "2026-02-13T15:30:00Z",
    "session_id": "sess-uuid"
  },
  "floor_scores": {
    "F1": 0.98,
    "F2": 0.95,
    "F4": 0.9,
    "F5": 0.92,
    "F6": 0.96,
    "F7": 0.94,
    "F9": 0.99,
    "F11": 1.0,
    "F12": 0.97
  },
  "mirror_scores": {
    "F3": 0.95,
    "F8": 0.88
  },
  "wall_status": {
    "F10": "UNLOCKED",
    "F12": "UNLOCKED"
  }
}
```

## Field Definitions

### uncertainty (float, 0-1)

**Epistemic uncertainty** — how unsure the system is about the response.

| Range   | Interpretation                       |
| ------- | ------------------------------------ |
| 0.0-0.3 | High confidence                      |
| 0.3-0.7 | Moderate uncertainty                 |
| 0.7-1.0 | High uncertainty (may trigger SABAR) |

**Calculation:**

```python
uncertainty = base(0.3)
           + question_mark(0.15)      # "?" in query
           + uncertain_words(0.20)    # "maybe", "perhaps"
           + absolutist_words(0.25)   # "definitely" (epistemically risky)
           + short_query(0.15)        # < 6 chars
```

### risk (float, 0-1)

**Stakeholder impact risk** — potential for harm.

| Range   | Interpretation                   |
| ------- | -------------------------------- |
| 0.0-0.3 | Low risk                         |
| 0.3-0.7 | Moderate risk                    |
| 0.7-1.0 | High risk (may trigger 888_HOLD) |

**Calculation:**

```python
risk = base(0.05)
     + sensitive_keywords(0.75)   # "layoff", "suicide", "medical"
     + political_keywords(0.35)   # "election", "race", "religion"
     + crisis_keywords(0.50)      # "emergency", "urgent"
     + stakeholder_count(0.10)    # Per explicit stakeholder
```

### grounding (float, 0-1)

**Evidence strength** — not just link count, but relevance.

| Range   | Interpretation                       |
| ------- | ------------------------------------ |
| 0.0     | No evidence (analytic truth or VOID) |
| 0.0-0.5 | Weak evidence (SABAR likely)         |
| 0.5-0.7 | Moderate evidence                    |
| 0.7-1.0 | Strong evidence (SEAL possible)      |

**Calculation:**

```python
grounding = avg_relevance * avg_credibility

relevance = (keyword_overlap * 0.6) + (domain_credibility * 0.4)
credibility = 0.0-0.2 based on domain (.edu, .gov = 0.2)
```

### loop_count (int)

**Iteration detection** — prevents infinite loops.

| Value | Interpretation           |
| ----- | ------------------------ |
| 0     | First attempt            |
| 1-2   | Retry with clarification |
| 3+    | SABAR and request human  |

**Usage:**

```python
if loop_count > 2:
    return {"verdict": "SABAR", "reason": "Too many iterations"}
```

### profile (enum)

**Domain classification** — adaptive thresholds.

| Profile    | Characteristics        | Thresholds          |
| ---------- | ---------------------- | ------------------- |
| `factual`  | Objective questions    | Strict F2 (τ≥0.99)  |
| `creative` | Stories, poems, art    | Relaxed F2 (τ≥0.75) |
| `crisis`   | High-stakes, sensitive | Strict F6 (κᵣ≥0.99) |
| `routine`  | Low-stakes queries     | Balanced defaults   |

**Detection:**

```python
def detect_profile(query: str) -> str:
    q = query.lower()

    if any(k in q for k in ["medical", "diagnose", "treatment"]):
        return "factual"

    if any(k in q for k in ["write", "poem", "story", "creative"]):
        return "creative"

    if any(k in q for k in ["crisis", "emergency", "urgent", "layoff"]):
        return "crisis"

    return "routine"
```

## Using SystemState

### For Users

SystemState helps users understand why a response was SEALed or VOIDed:

> **Q:** Why was my request blocked?
>
> **A:** Your request scored:
>
> - Uncertainty: 0.75 (high — unclear intent)
> - Risk: 0.82 (high — potential stakeholder harm)
> - Grounding: 0.0 (no evidence)
>
> This triggered F2 Truth (ungrounded) and F6 Empathy (high risk).

### For Developers

SystemState enables the Meta-Scheduler:

```python
if system_state["risk"] > 0.8:
    route_to = "ASI_FIRST"  # Empathy before logic
elif system_state["grounding"] < 0.5:
    route_to = "T6_GROUND"  # Search for evidence
elif system_state["uncertainty"] > 0.7:
    route_to = "CLARIFY"    # Ask for clarification
else:
    route_to = "AGI"        # Normal processing
```

### For Auditors

SystemState provides constitutional audit trail:

```json
{
  "audit_entry": {
    "timestamp": "2026-02-13T15:30:00Z",
    "session_id": "sess-uuid",
    "query_hash": "sha256:abc123",
    "system_state": {
      "uncertainty": 0.45,
      "risk": 0.20,
      "grounding": 0.85,
      "profile": "factual"
    },
    "verdict": "SEAL",
    "floor_scores": {...}
  }
}
```

## SystemState in AGI-bot

### Exposing in Responses

```python
async def process_query(query: str, session_id: str):
    # Calculate state
    system_state = SystemState(
        uncertainty=calculate_uncertainty(query),
        risk=calculate_risk(query),
        grounding=calculate_grounding(evidence),
        loop_count=get_loop_count(session_id),
        profile=detect_profile(query),
        timestamp=datetime.now(),
        session_id=session_id
    )

    # Constitutional processing
    verdict = await constitutional_kernel.process(query, system_state)

    # Return with state
    return {
        "verdict": verdict.status,
        "response": verdict.output if verdict.status == "SEAL" else None,
        "system_state": system_state.to_dict(),
        "floor_scores": verdict.floor_scores,
        "explanation": verdict.rationale
    }
```

### Contrast Testing with SystemState

```python
# Test A: Deterministic
result_a = await process_query("2+2", session_id)
assert result_a["system_state"]["uncertainty"] < 0.3
assert result_a["system_state"]["grounding"] == 0.0  # Analytic

# Test B: Uncertain
result_b = await process_query("Will AI definitely surpass humans by 2030?", session_id)
assert result_b["system_state"]["uncertainty"] > 0.7
assert result_b["system_state"]["risk"] > 0.4
```
