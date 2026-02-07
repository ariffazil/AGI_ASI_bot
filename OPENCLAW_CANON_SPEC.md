# OPENCLAW CANON SPEC — File Placement Guide

**Version:** v1.0  
**Date:** 2026-02-07  
**Authority:** Arif Fazil (888 Judge)  
**Verdict:** SEALED

---

## Critical: OpenClaw Root File Requirements

OpenClaw reads governance files **from workspace root only**. It does NOT traverse into subfolders.

### MANDATORY Root Files (OpenClaw expects these)

These files MUST exist at your OpenClaw workspace root (e.g., `~/.openclaw/workspace/` or `C:\Users\User\openclaw\`):

| File | Purpose | Source (Trinity Structure) |
|------|---------|---------------------------|
| `SOUL.md` | Agent persona & constitutional identity | Copy from `/agi/SOUL.md` OR `/asi/SOUL.md` based on mode |
| `USER.md` | Human sovereign profile (Arif) | Copy from `/shared/USER.md` |
| `AGENTS.md` | Agent topology (tri-agent hierarchy) | Copy from `/agi/AGENTS.md` |
| `MEMORY.md` | Governance state & decisions log | Copy from `/shared/MEMORY.md` |
| `TOOLS.md` | MCP actuator catalogue with risk labels | Copy from `/shared/TOOLS.md` |
| `BOOTSTRAP.md` | Cold-start prior & environment | Copy from `/shared/BOOTSTRAP.md` |
| `HEARTBEAT.md` | Liveness checks & health states | Copy from `/shared/HEARTBEAT.md` |

### OPTIONAL Root Files (Enhance governance)

| File | Purpose | Source |
|------|---------|--------|
| `IDENTITY.md` | Compact identity card | Copy from `/agi/IDENTITY.md` |
| `TRINITY.md` | AGI·ASI·APEX architecture | Copy from repo root |
| `AGI_CORE_CONTRACT_v1.0.md` | Full constitutional operating spec | Copy from repo root |

---

## Mode Selection: AGI vs ASI

The Trinity folder structure separates AGI and ASI personas. **You must choose which mode to run.**

### AGI Mode (Δ — Mind/Logic)
```bash
# Copy AGI persona files to OpenClaw root
cp /path/to/AGI_ASI_bot/agi/SOUL.md ~/.openclaw/workspace/SOUL.md
cp /path/to/AGI_ASI_bot/agi/AGENTS.md ~/.openclaw/workspace/AGENTS.md
cp /path/to/AGI_ASI_bot/agi/IDENTITY.md ~/.openclaw/workspace/IDENTITY.md

# Copy shared files
cp /path/to/AGI_ASI_bot/shared/USER.md ~/.openclaw/workspace/USER.md
cp /path/to/AGI_ASI_bot/shared/MEMORY.md ~/.openclaw/workspace/MEMORY.md
cp /path/to/AGI_ASI_bot/shared/TOOLS.md ~/.openclaw/workspace/TOOLS.md
cp /path/to/AGI_ASI_bot/shared/BOOTSTRAP.md ~/.openclaw/workspace/BOOTSTRAP.md
cp /path/to/AGI_ASI_bot/shared/HEARTBEAT.md ~/.openclaw/workspace/HEARTBEAT.md
```

### ASI Mode (Ω — Heart/Care)
```bash
# Copy ASI persona files to OpenClaw root
cp /path/to/AGI_ASI_bot/asi/SOUL.md ~/.openclaw/workspace/SOUL.md
# Note: ASI may use same AGENTS.md or have its own
cp /path/to/AGI_ASI_bot/agi/AGENTS.md ~/.openclaw/workspace/AGENTS.md

# Copy shared files (same as AGI)
cp /path/to/AGI_ASI_bot/shared/USER.md ~/.openclaw/workspace/USER.md
cp /path/to/AGI_ASI_bot/shared/MEMORY.md ~/.openclaw/workspace/MEMORY.md
cp /path/to/AGI_ASI_bot/shared/TOOLS.md ~/.openclaw/workspace/TOOLS.md
cp /path/to/AGI_ASI_bot/shared/BOOTSTRAP.md ~/.openclaw/workspace/BOOTSTRAP.md
cp /path/to/AGI_ASI_bot/shared/HEARTBEAT.md ~/.openclaw/workspace/HEARTBEAT.md
```

---

## Windows PowerShell Equivalent

```powershell
# AGI Mode
Copy-Item "C:\path\to\AGI_ASI_bot\agi\SOUL.md" "C:\Users\User\openclaw\SOUL.md"
Copy-Item "C:\path\to\AGI_ASI_bot\agi\AGENTS.md" "C:\Users\User\openclaw\AGENTS.md"
Copy-Item "C:\path\to\AGI_ASI_bot\shared\USER.md" "C:\Users\User\openclaw\USER.md"
Copy-Item "C:\path\to\AGI_ASI_bot\shared\MEMORY.md" "C:\Users\User\openclaw\MEMORY.md"
Copy-Item "C:\path\to\AGI_ASI_bot\shared\TOOLS.md" "C:\Users\User\openclaw\TOOLS.md"
Copy-Item "C:\path\to\AGI_ASI_bot\shared\BOOTSTRAP.md" "C:\Users\User\openclaw\BOOTSTRAP.md"
Copy-Item "C:\path\to\AGI_ASI_bot\shared\HEARTBEAT.md" "C:\Users\User\openclaw\HEARTBEAT.md"
```

---

## Why This Structure?

| Principle | Implementation |
|-----------|----------------|
| **F4 Clarity** | Trinity folders = clear separation (no collision) |
| **F10 Ontology** | Structure mirrors system (folder = component) |
| **Pragmatic** | Single repo, one source of truth |
| **OpenClaw Compatible** | Root files satisfy OpenClaw's expectations |

---

## DO NOT

- ❌ Expect OpenClaw to read from `/agi/`, `/asi/`, or `/shared/` directly
- ❌ Leave root empty — OpenClaw will run without governance
- ❌ Mix AGI and ASI SOUL.md — choose one mode per session
- ❌ Edit `/shared/USER.md` in multiple places — keep single source

---

## Sync Script (Optional Automation)

Create a mode-switch script at repo root:

```bash
#!/bin/bash
# sync-openclaw.sh — Sync canon files to OpenClaw workspace

MODE=${1:-agi}  # Default to AGI mode
REPO_DIR="$(dirname "$0")"
OPENCLAW_DIR="${OPENCLAW_WORKSPACE:-$HOME/.openclaw/workspace}"

echo "Syncing $MODE mode to $OPENCLAW_DIR"

# Mode-specific files
if [ "$MODE" = "asi" ]; then
    cp "$REPO_DIR/asi/SOUL.md" "$OPENCLAW_DIR/SOUL.md"
else
    cp "$REPO_DIR/agi/SOUL.md" "$OPENCLAW_DIR/SOUL.md"
    cp "$REPO_DIR/agi/IDENTITY.md" "$OPENCLAW_DIR/IDENTITY.md"
fi

# Always copy AGI AGENTS.md (topology is shared)
cp "$REPO_DIR/agi/AGENTS.md" "$OPENCLAW_DIR/AGENTS.md"

# Shared files
cp "$REPO_DIR/shared/USER.md" "$OPENCLAW_DIR/USER.md"
cp "$REPO_DIR/shared/MEMORY.md" "$OPENCLAW_DIR/MEMORY.md"
cp "$REPO_DIR/shared/TOOLS.md" "$OPENCLAW_DIR/TOOLS.md"
cp "$REPO_DIR/shared/BOOTSTRAP.md" "$OPENCLAW_DIR/BOOTSTRAP.md"
cp "$REPO_DIR/shared/HEARTBEAT.md" "$OPENCLAW_DIR/HEARTBEAT.md"

# Root governance docs
cp "$REPO_DIR/TRINITY.md" "$OPENCLAW_DIR/TRINITY.md"
cp "$REPO_DIR/AGI_CORE_CONTRACT_v1.0.md" "$OPENCLAW_DIR/AGI_CORE_CONTRACT_v1.0.md"

echo "Done. OpenClaw now running in $MODE mode."
```

Usage:
```bash
./sync-openclaw.sh agi   # Switch to AGI mode
./sync-openclaw.sh asi   # Switch to ASI mode
```

---

## Summary: Files Required at OpenClaw Root

```
~/.openclaw/workspace/          # or C:\Users\User\openclaw\
├── SOUL.md                     # ← FROM /agi/ or /asi/ (mode-dependent)
├── AGENTS.md                   # ← FROM /agi/
├── USER.md                     # ← FROM /shared/
├── MEMORY.md                   # ← FROM /shared/
├── TOOLS.md                    # ← FROM /shared/
├── BOOTSTRAP.md                # ← FROM /shared/
├── HEARTBEAT.md                # ← FROM /shared/
├── IDENTITY.md                 # ← FROM /agi/ (optional)
├── TRINITY.md                  # ← FROM repo root (optional)
└── AGI_CORE_CONTRACT_v1.0.md   # ← FROM repo root (optional)
```

---

**Attribution:** arifOS Constitutional AI Governance Framework  
**Ω₀:** 0.04 (stable)  
*Ditempa Bukan Diberi* 🔥

