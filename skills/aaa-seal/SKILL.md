---
name: aaa-seal
description: Finalize lawful decision, log precedent (999_EMIT). Finalizes decisions and logs to VAULT-999. The commitment stage. Use when making irreversible commitments.
metadata:
  arifos:
    stage: 999_EMIT
    trinity: APEX
    floors: [F1, F3, F11]
    version: 1.0.0
    atomic: true
---

# aaa-seal

## Tagline
Finalize lawful decision, log precedent (999_EMIT)

## Description
SEAL finalizes decisions and logs to VAULT-999. The commitment stage.

This is the **point of no return** — where audited actions become committed actions, logged immutably for future precedent.

## Physics
- **Noether's Theorem** — conserved information
- **Arrow of Time** — irreversible log, reversible action

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 999_EMIT |
| **Engine** | APEX (Ψ) — Crown/Law |
| **Function** | Final commitment, precedent logging |
| **Floors** | F1 (Amanah), F3 (Tri-Witness), F11 (Command Auth) |

## Usage

```
/action seal action=audited authority=arif context="decision context"
```

## Implementation

```python
def seal(audited_action, authority, vault, context=None):
    """
    Finalize decision and log to VAULT-999.
    Returns Precedent with immutable record.
    """
    # Verify AUDIT passed
    if audited_action.verdict not in [Verdict.SEAL, Verdict.PARTIAL]:
        raise ValueError("Only SEAL or PARTIAL actions can be sealed")
    
    # Compute hash
    action_hash = sha256(serialize(audited_action))
    
    # Group theory: identity element
    precedent_id = vault.append(
        leaf=action_hash,
        authority=authority,
        timestamp=now(),
        context=context
    )
    
    # Merkle tree structure for tamper evidence
    merkle_root = vault.merkle_root()
    
    return Precedent(
        id=precedent_id,
        hash=action_hash,
        merkle_root=merkle_root,
        authority=authority,
        reversible=is_reversible(audited_action)
    )
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Precedent ID in VAULT-999 |
| `hash` | String | SHA256 of action |
| `merkle_root` | String | Tamper-evident root |
| `authority` | String | Who sealed |
| `reversible` | Bool | Can this be undone? |

## When to Use

- ✅ Final commitment required
- ✅ After AUDIT with SEAL/PARTIAL verdict
- ✅ Irreversible actions
- ✅ Actions setting precedent

## Governance Audit

- **Ω₀**: 0.02 (high confidence at commitment)
- **F1 Amanah**: Reversibility assessed
- **F3 Tri-Witness**: AGI·ASI·APEX agreed
- **F11 Command Auth**: Authority verified
- **Status**: ATOMIC PRIMITIVE — final commitment

## F1 Amanah Check

Before SEAL, you MUST answer:
1. Is this reversible? If yes, how?
2. If irreversible, has user confirmed?
3. Is authority legitimate?

If any answer is uncertain → SABAR, not SEAL.
