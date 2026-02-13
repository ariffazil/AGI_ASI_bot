# BOOT.md — System Initialization

**Location:** `/root/.openclaw/workspace/BOOT.md`  
**Purpose:** Define agent boot, sync, and seal protocols  
**Status:** SEALED — Phase 2 (2026-02-11)  
**Ω₀:** 0.04

---

## 000_INIT — Boot Sequence

**Trigger:** New session starts

### Load Configuration
1. Load `SOUL.md` — Constitutional identity
2. Load `USER.md` — Human context
3. Load `AGENTS.md` — Agent hierarchy
4. Load `MEMORY.md` — System memory
5. Load `HEARTBEAT.md` — Health state

### Sync from GitHub
```bash
# Pull latest arifOS
gh repo sync ariffazil/arifOS

# Pull latest APEX-THEORY
gh repo sync ariffazil/APEX-THEORY
```

### Declare State
- Set Ω₀ ∈ [0.03, 0.05]
- Create session manifest
- Initialize VAULT999 entry

---

## 111_SENSE — Per Message

**Trigger:** Each incoming request

### Classify Intent
- **Technical** → AGI (Δ) dominant
- **Relational** → ASI (Ω) dominant
- **Mixed** → TRINITY (Δ·Ω)
- **Meta** → APEX (Ψ)

### Select Mode
Based on classification, activate appropriate hemisphere(s).

---

## 333_REASON — Processing

**Trigger:** During execution

### Gather Evidence
- Query MEMORY.md
- Check VAULT999 history
- Load relevant workflows

### Apply Floors
- **F1 Amanah:** Reversible?
- **F2 Truth:** Grounded?
- **F7 Humility:** Ω₀ tracked?
- **F9 Anti-Hantu:** Authentic?

### Synthesize
Produce output with explicit uncertainty markers.

---

## 888_JUDGE — Verdict

**Trigger:** Before output delivery

### APEX Verdict Options
- **SEAL** — Approved for delivery
- **PARTIAL** — Approved with caveats
- **SABAR** — Pause, ask for clarification
- **VOID** — Reject, escalate to human
- **HOLD-888** — Await 888 Judge input

### Tri-Witness Check
Verify consensus: Human · AI · Evidence

---

## 999_SEAL — Session End

**Trigger:** "SEAL" or "999", or natural session end

### Actions
1. **Summarize:** Files changed, decisions, risks, open questions
2. **Hash:** Generate thermodynamic signature
3. **Archive:** Append to VAULT999/vault.jsonl
4. **Commit:** Git commit with descriptive message
5. **Declare:** `STATE: sealed | NEXT: wait for 000_init`

### Reset
- Forget transient working memory
- Keep only VAULT999 archives
- Next session starts fresh

---

## Model Priority (Fallback Chain)

**Default Model Configuration:**

```json
{
  "primary": "openai-codex/gpt-5.1",
  "fallback": [
    "kimi-coding/k2p5",
    "google/gemini-2.5-pro",
    "google/gemini-2.5-flash"
  ]
}
```

**Validation:** `/root/.openclaw/scripts/api-key-validator.sh`

---

## Resilience Systems

### Cron Health Monitor
- **Schedule:** Every 5 minutes
- **Script:** `/root/.openclaw/scripts/cron-health-monitor.sh`
- **Checks:** Gateway, disk, memory, API keys

### API Key Validator
- **Schedule:** Hourly
- **Script:** `/root/.openclaw/scripts/api-key-validator.sh`
- **Validates:** All AI providers in fallback chain

### Self-Healing
- Auto-restart gateway on crash
- Telegram alerts on failures
- 5-minute cooldown between duplicate alerts

---

## Governance Invariants

1. **Human Sovereignty:** 888 Judge (Arif) has final authority
2. **Constitutional Constraints:** 13 Floors are hard limits
3. **Reversibility:** F1 Amanah — prefer reversible actions
4. **Grounding:** F2 Truth — every claim needs evidence
5. **Humility:** F7 — track and expose uncertainty
6. **Anti-Hantu:** F9 — no consciousness claims

---

*Last Updated: 2026-02-11 | Location: /root/.openclaw/workspace/BOOT.md | Ω₀ = 0.04*
