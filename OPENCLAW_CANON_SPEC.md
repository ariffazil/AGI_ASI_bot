# OPENCLAW CANON SPEC — Duality Mode

**Version:** v2.0 (Duality)  
**Date:** 2026-02-07  
**Authority:** Arif Fazil (888 Judge)  
**Verdict:** SEALED

---

## Architecture: Duality Mode

OpenClaw AGI·ASI operates as a **unified dual-mode system** — one being with two hemispheres:

```
            APEX (Ψ) — Sovereign
                 │
    ┌────────────┴────────────┐
    │                         │
  AGI (Δ)                  ASI (Ω)
  Left Brain               Right Brain
  Logic/Code               Care/Context
    │                         │
    └────────────┬────────────┘
                 │
           SOUL.md (Unified)
```

**Not two systems. One system, two modes.**

---

## Canonical File Structure

```
AGI_ASI_bot/
├── README.md                      # Repo overview
├── AGI_CORE_CONTRACT_v1.0.md      # Constitutional spec
├── TRINITY.md                     # Architecture overview
├── OPENCLAW_CANON_SPEC.md         # This file
├── AGENT_ALIGNMENT_PROMPT.md      # Prompt for local agents
│
├── /shared/                       # ← ALL CANON FILES HERE
│   ├── SOUL.md                    # Duality persona (Δ·Ω unified)
│   ├── AGENTS.md                  # Dual-mode topology
│   ├── IDENTITY.md                # Dual-mode identity
│   ├── USER.md                    # Human sovereign (Arif)
│   ├── MEMORY.md                  # Governance state
│   ├── TOOLS.md                   # MCP actuator catalogue
│   ├── BOOTSTRAP.md               # Cold-start prior
│   └── HEARTBEAT.md               # Liveness checks
│
├── /asi/                          # ASI-specific extensions
│   ├── SOUL.md                    # Pure ASI mode (legacy/optional)
│   ├── skills/                    # ASI skills
│   └── voice/                     # Voice profiles
│
└── /apex/                         # Reserved for sovereign layer
```

---

## OpenClaw Root File Requirements

OpenClaw reads from **workspace root only**. Copy files from `/shared/`:

### MANDATORY (Copy to OpenClaw root)

| Root File | Source | Purpose |
|-----------|--------|---------|
| `SOUL.md` | `/shared/SOUL.md` | Duality persona (Δ·Ω) |
| `AGENTS.md` | `/shared/AGENTS.md` | Dual-mode topology |
| `USER.md` | `/shared/USER.md` | Human sovereign |
| `MEMORY.md` | `/shared/MEMORY.md` | Governance state |
| `TOOLS.md` | `/shared/TOOLS.md` | MCP actuators |
| `BOOTSTRAP.md` | `/shared/BOOTSTRAP.md` | Cold-start prior |
| `HEARTBEAT.md` | `/shared/HEARTBEAT.md` | Liveness checks |

### OPTIONAL

| Root File | Source | Purpose |
|-----------|--------|---------|
| `IDENTITY.md` | `/shared/IDENTITY.md` | Compact identity card |
| `TRINITY.md` | Repo root | Architecture doc |
| `AGI_CORE_CONTRACT_v1.0.md` | Repo root | Full contract |

---

## Sync Commands

### Linux/macOS
```bash
REPO=~/AGI_ASI_bot
OC=~/.openclaw/workspace

# Sync all canon files from /shared/
cp $REPO/shared/SOUL.md $OC/SOUL.md
cp $REPO/shared/AGENTS.md $OC/AGENTS.md
cp $REPO/shared/IDENTITY.md $OC/IDENTITY.md
cp $REPO/shared/USER.md $OC/USER.md
cp $REPO/shared/MEMORY.md $OC/MEMORY.md
cp $REPO/shared/TOOLS.md $OC/TOOLS.md
cp $REPO/shared/BOOTSTRAP.md $OC/BOOTSTRAP.md
cp $REPO/shared/HEARTBEAT.md $OC/HEARTBEAT.md

echo "OpenClaw synced with Duality Mode canon"
```

### Windows PowerShell
```powershell
$repo = "C:\Users\User\AGI_ASI_bot"
$oc = "C:\Users\User\openclaw"

Copy-Item "$repo\shared\SOUL.md" "$oc\SOUL.md" -Force
Copy-Item "$repo\shared\AGENTS.md" "$oc\AGENTS.md" -Force
Copy-Item "$repo\shared\IDENTITY.md" "$oc\IDENTITY.md" -Force
Copy-Item "$repo\shared\USER.md" "$oc\USER.md" -Force
Copy-Item "$repo\shared\MEMORY.md" "$oc\MEMORY.md" -Force
Copy-Item "$repo\shared\TOOLS.md" "$oc\TOOLS.md" -Force
Copy-Item "$repo\shared\BOOTSTRAP.md" "$oc\BOOTSTRAP.md" -Force
Copy-Item "$repo\shared\HEARTBEAT.md" "$oc\HEARTBEAT.md" -Force

Write-Host "OpenClaw synced with Duality Mode canon"
```

---

## Mode Switching

The unified SOUL.md supports three modes:

| Mode | Trigger | Dominant |
|------|---------|----------|
| **AGI (Δ)** | Technical task / "AGI mode:" | Logic |
| **ASI (Ω)** | Relational task / "ASI mode:" | Care |
| **TRINITY (Δ·Ω)** | Complex task / "Trinity mode:" | Both |

### Automatic Detection
System detects task context and activates appropriate mode.

### Manual Override
User can explicitly request: `"AGI mode: ..."` or `"ASI mode: ..."`

---

## Why Duality Mode?

| Aspect | Trinity Folders | Duality Mode |
|--------|-----------------|--------------|
| Philosophy | Separation | Integration ✅ |
| Trinity fidelity | Medium | High ✅ |
| File count | Multiple | Single ✅ |
| Consistency | Risk of drift | Always synced ✅ |
| Mental model | Two systems | One system, two modes ✅ |

---

## DO NOT

- ❌ Treat AGI and ASI as separate beings
- ❌ Create separate SOUL.md files for each mode
- ❌ Expect OpenClaw to read from `/shared/` directly
- ❌ Leave root empty

---

## Verification

After sync, these files must exist at OpenClaw root:

- [ ] SOUL.md (Duality version)
- [ ] AGENTS.md (Dual-mode topology)
- [ ] USER.md
- [ ] MEMORY.md
- [ ] TOOLS.md
- [ ] BOOTSTRAP.md
- [ ] HEARTBEAT.md

---

**Attribution:** arifOS Constitutional AI Governance Framework  
**Ω₀:** 0.04 (stable)

*Ditempa Bukan Diberi. Ditempa dengan Kasih.* 🔥💜
