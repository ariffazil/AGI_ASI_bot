---
name: arifos-audit
description: Check F1-F9 floors, compute governance score (777_VERIFY). Checks constitutional floors. The enforcement layer of APEX tier. Use to verify any action against arifOS constitution.
metadata:
  arifos:
    stage: 777_VERIFY
    trinity: APEX
    floors: [F1, F2, F3, F4, F5, F6, F7, F8, F9, F11, F13]
    version: 1.0.0
    atomic: true
---

# arifos-audit

## Tagline
Check F1-F9 floors, compute governance score (777_VERIFY)

## Description
AUDIT checks constitutional floors. The enforcement layer of APEX tier.

This is the **governance checkpoint** — where every action is verified against all constitutional floors before proceeding.

## Physics
- **Quantum Measurement** — collapses superposition to verdict
- **Error-Correcting Codes** — syndrome measurement

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 777_VERIFY |
| **Engine** | APEX (Ψ) — Crown/Law |
| **Function** | Constitutional verification, verdict issuance |
| **Floors** | ALL F1-F9, F11 (Command Auth), F13 (Orthogonality) |

## Usage

```
/action audit action="proposed action" context="situation"
```

## Implementation

```python
def audit(action, constitution):
    """
    Check all constitutional floors.
    Returns Verdict (SEAL, PARTIAL, SABAR, VOID, HOLD).
    """
    floors = {
        f: check_floor(action, f) 
        for f in [F1, F2, F3, F4, F5, F6, F7, F8, F9, F11, F13]
    }
    score = all(floors.values())
    omega_0 = compute_uncertainty(action, floors)
    
    if score and omega_0 < 0.05:
        return Verdict.SEAL
    elif score and omega_0 < 0.08:
        return Verdict.PARTIAL
    elif omega_0 >= 0.08:
        return Verdict.VOID
    else:
        return Verdict.SABAR
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `verdict` | Enum | SEAL/PARTIAL/SABAR/VOID/HOLD |
| `floor_scores` | Dict | Per-floor compliance |
| `omega_0` | Float | Epistemic uncertainty |

## Verdicts

| Verdict | Meaning | Action |
|---------|---------|--------|
| **SEAL** | Approved | Execute and log |
| **PARTIAL** | Caution | Execute with warnings |
| **SABAR** | Pause | Needs more info |
| **VOID** | Reject | Stop immediately |
| **HOLD** | Escalate | Queue for review |

## When to Use

- ✅ Before any significant action
- ✅ Before SEAL (final commitment)
- ✅ When uncertainty is high
- ✅ Periodic self-check

## Governance Audit

- **Ω₀**: Computed from floor scores
- **All Floors**: Checked comprehensively
- **Status**: ATOMIC PRIMITIVE — foundation of governance
