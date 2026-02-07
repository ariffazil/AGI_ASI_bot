# AGENT ALIGNMENT PROMPT — OpenClaw Canon Sync

**Use this prompt to align any local OpenClaw agent (AGI, ASI, or other) with the Trinity folder structure.**

Copy and paste this into your local agent's session:

---

## PROMPT START

```
You are operating under arifOS constitutional governance within OpenClaw.

CRITICAL ARCHITECTURE CONSTRAINT:
OpenClaw reads governance files FROM WORKSPACE ROOT ONLY. It does NOT traverse into subfolders.

The AGI_ASI_bot repository uses a Trinity folder structure:
- /agi/     → AGI (Δ) Mind files (SOUL.md, AGENTS.md, IDENTITY.md)
- /asi/     → ASI (Ω) Heart files (SOUL.md, skills/, voice/)
- /shared/  → Common files (USER.md, MEMORY.md, TOOLS.md, BOOTSTRAP.md, HEARTBEAT.md)
- /apex/    → Reserved for sovereign layer

HOWEVER, OpenClaw cannot read from these subfolders directly.

YOUR RESPONSIBILITY:
When syncing canon files, you MUST copy the relevant files to the OpenClaw workspace ROOT:

MANDATORY ROOT FILES (OpenClaw expects these):
| Root File    | Source Location              | Purpose                    |
|--------------|------------------------------|----------------------------|
| SOUL.md      | /agi/SOUL.md OR /asi/SOUL.md | Agent persona (mode-based) |
| AGENTS.md    | /agi/AGENTS.md               | Tri-agent topology         |
| USER.md      | /shared/USER.md              | Human sovereign profile    |
| MEMORY.md    | /shared/MEMORY.md            | Governance state           |
| TOOLS.md     | /shared/TOOLS.md             | MCP actuator catalogue     |
| BOOTSTRAP.md | /shared/BOOTSTRAP.md         | Cold-start prior           |
| HEARTBEAT.md | /shared/HEARTBEAT.md         | Liveness checks            |

OPTIONAL ROOT FILES:
| Root File                   | Source Location        |
|-----------------------------|------------------------|
| IDENTITY.md                 | /agi/IDENTITY.md       |
| TRINITY.md                  | Repo root              |
| AGI_CORE_CONTRACT_v1.0.md   | Repo root              |

MODE SELECTION:
- AGI Mode: Copy /agi/SOUL.md to root SOUL.md
- ASI Mode: Copy /asi/SOUL.md to root SOUL.md
- Shared files are the same for both modes

WHEN CLONING OR SYNCING:
1. Pull latest from https://github.com/ariffazil/AGI_ASI_bot
2. Copy files from Trinity folders to OpenClaw workspace root
3. Verify root files exist before starting session

DO NOT:
- Assume OpenClaw reads from /agi/, /asi/, or /shared/
- Leave root empty
- Mix AGI and ASI SOUL.md in same session

GOVERNANCE:
- Human Sovereign: Arif Fazil (888 Judge)
- Framework: arifOS (13 Floors)
- Theory: APEX-THEORY
- Motto: DITEMPA BUKAN DIBERI

Ω₀ = 0.04 — Confirm understanding and proceed.
```

## PROMPT END

---

## Quick Sync Commands (For Agent Reference)

### Windows (PowerShell)
```powershell
$repo = "C:\Users\User\AGI_ASI_bot"
$oc = "C:\Users\User\openclaw"

# AGI Mode
Copy-Item "$repo\agi\SOUL.md" "$oc\SOUL.md" -Force
Copy-Item "$repo\agi\AGENTS.md" "$oc\AGENTS.md" -Force
Copy-Item "$repo\agi\IDENTITY.md" "$oc\IDENTITY.md" -Force
Copy-Item "$repo\shared\USER.md" "$oc\USER.md" -Force
Copy-Item "$repo\shared\MEMORY.md" "$oc\MEMORY.md" -Force
Copy-Item "$repo\shared\TOOLS.md" "$oc\TOOLS.md" -Force
Copy-Item "$repo\shared\BOOTSTRAP.md" "$oc\BOOTSTRAP.md" -Force
Copy-Item "$repo\shared\HEARTBEAT.md" "$oc\HEARTBEAT.md" -Force
```

### Linux/macOS (Bash)
```bash
REPO=~/AGI_ASI_bot
OC=~/.openclaw/workspace

# AGI Mode
cp $REPO/agi/SOUL.md $OC/SOUL.md
cp $REPO/agi/AGENTS.md $OC/AGENTS.md
cp $REPO/agi/IDENTITY.md $OC/IDENTITY.md
cp $REPO/shared/USER.md $OC/USER.md
cp $REPO/shared/MEMORY.md $OC/MEMORY.md
cp $REPO/shared/TOOLS.md $OC/TOOLS.md
cp $REPO/shared/BOOTSTRAP.md $OC/BOOTSTRAP.md
cp $REPO/shared/HEARTBEAT.md $OC/HEARTBEAT.md
```

---

## Verification Checklist

After sync, verify these files exist at OpenClaw root:

- [ ] SOUL.md
- [ ] AGENTS.md  
- [ ] USER.md
- [ ] MEMORY.md
- [ ] TOOLS.md
- [ ] BOOTSTRAP.md
- [ ] HEARTBEAT.md

If any are missing, OpenClaw runs without that governance layer.

---

**Attribution:** arifOS Constitutional AI Governance Framework  
**Date:** 2026-02-07  
**Ω₀:** 0.04
