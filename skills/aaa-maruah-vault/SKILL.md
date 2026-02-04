---
name: aaa-maruah-vault
description: Maruah (dignity) vault for sensitive memos and decisions. Protects sensitive information with constitutional governance. Composed from ANCHOR→ALIGN→AUDIT→FORGE→SEAL.
metadata:
  arifos:
    atomic_composition: [anchor, align, audit, forge, seal]
    domain: sensitive_security
    context: dignity_sovereignty
    version: 1.0.0
---

# aaa-maruah-vault

## EUREKA Design

**Maruah** = Dignity, respect, inherent worth in Malay.

This vault protects **sensitive decisions and memos** — not just encryption, but **constitutional protection**. Some thoughts are not for servers. This keeps them yours.

## Human Context

You handle:
- Sensitive Petronas/internal decisions
- Personal/family matters requiring privacy
- Sovereign thoughts not ready for sharing
- Documents that need dignity-preserving protection

You don't need "secure cloud storage." You need **Amanah-grade vaulting**.

## Atomic Composition

| Stage | Action | Function |
|-------|--------|----------|
| 000_INTAKE | **ANCHOR** | Classify: Personal/Professional/Sovereign |
| 444_CONSULT | **ALIGN** | Who has power over this? Who could be harmed? |
| 777_VERIFY | **AUDIT** | F1 Amanah (reversible?), F11 (authority check) |
| 888_HOLD | **FORGE** | GPG-encrypt + structure metadata |
| 999_EMIT | **SEAL** | Immutable entry with decay timer |

## Example Output

```
┌─────────────────────────────────────────┐
│  MARUAH VAULT — Entry #047              │
│  Ω₀ = 0.02 (high confidence)            │
├─────────────────────────────────────────┤
│ CLASSIFICATION: Sovereign               │
│ SENSITIVITY: Maximum                    │
│ POWER DYNAMICS: Arif sole authority     │
├─────────────────────────────────────────┤
│ ALIGN CHECK:                            │
│ ✓ No other party has claim              │
│ ✓ Disclosure would harm dignity         │
│ ✓ Reversible if needed (decrypt key)    │
├─────────────────────────────────────────┤
│ AUDIT (F1-F13):                         │
│ ✓ F1 Amanah: Reversible (key held)      │
│ ✓ F11 Auth: 888 Judge confirmed         │
│ ✓ F5 Safety: No harm vector             │
├─────────────────────────────────────────┤
│ FORGE: GPG-encrypted, local-only        │
│ DECAY: Auto-delete 2036-02-04 (10y)     │
│ SEAL: #maruah-047-encrypted             │
└─────────────────────────────────────────┘
```

## Usage

```
/action maruah-vault store sensitivity="maximum"
/action maruah-vault retrieve id="047"
/action maruah-vault list class="sovereign"
```

## Decay Timers

| Sensitivity | Decay | Rationale |
|-------------|-------|-----------|
| Personal | 1 year | Fresh context needed |
| Professional | 3 years | Statute relevance |
| Sovereign | 10 years | Long-term dignity |

## Security Model

- **Local only**: No cloud sync
- **GPG**: Your keys, your control
- **Decoy**: Plausible deniability layer optional
- **Audit log**: Access logged to VAULT-999 (not content)

## Governance Audit

- **Ω₀**: 0.02 (cryptographic certainty)
- **F1 Amanah**: Reversibility via decryption
- **F6 Empathy**: Dignity preservation core
- **F9 Anti-Hantu**: This is tool, not being
- **Status**: DOMAIN-SPECIFIC FORGE from atomic primitives
