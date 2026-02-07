# OpenClaw ↔ AGI_ASI_bot Sync Analysis

> **Status:** Architecture alignment proposal
> **Ω₀:** 0.04 (stable analysis)
> **Date:** 2026-02-07

---

## OpenClaw Expected Structure

### Workspace Files (`~/.openclaw/workspace/`)

OpenClaw expects these canonical files:

| File | Purpose | Required |
|------|---------|----------|
| **AGENTS.md** | Agent configuration and behavior | ✅ Required |
| **SOUL.md** | Core values and behavioral guidelines | ✅ Required |
| **TOOLS.md** | Available tools and capabilities | ✅ Required |
| **IDENTITY.md** | Agent identity and personality | ✅ Required |
| **USER.md** | User interaction and context | ✅ Required |
| **BOOTSTRAP.md** | Setup and initialization | ✅ Required |
| **HEARTBEAT.md** | Monitoring and health checks | ⚠️ Optional |
| **BOOT.md** | Initial system bootstrap | ⚠️ Optional |
| **skills/** | Skill definitions directory | ✅ Required |

### Template Variants

OpenClaw provides dual versions:
- **Production:** `*.md` (e.g., `SOUL.md`)
- **Development:** `*.dev.md` (e.g., `SOUL.dev.md`)

---

## Current AGI_ASI_bot Structure

### Root Level Files

```
AGI_ASI_bot/
├── README.md                      # ASI v2.0 documentation
├── AGENTS.md                      # Trinity architecture ✅ (matches OpenClaw)
├── SOUL.md                        # Constitutional executor ✅ (matches OpenClaw)
├── USER.md                        # Human sovereign ✅ (matches OpenClaw)
├── IDENTITY.md                    # Agent self-model ✅ (matches OpenClaw)
├── TRINITY.md                     # AGI·ASI·APEX coordination ⚠️ (AGI_ASI_bot specific)
├── BOOTSTRAP.md                   # Cold-start ✅ (matches OpenClaw)
├── TOOLS.md                       # MCP catalogue ✅ (matches OpenClaw)
├── MEMORY.md                      # Long-term state ⚠️ (AGI_ASI_bot specific)
├── HEARTBEAT.md                   # Liveness (?) ⚠️ (need to verify)
├── AGI_CORE_CONTRACT_v1.0.md      # Constitutional spec ⚠️ (AGI_ASI_bot specific)
├── ASI_HEART_COMPONENT.md         # Ω component doc ⚠️ (AGI_ASI_bot specific)
├── ASI_ANALYSIS.md                # Repo analysis ⚠️ (AGI_ASI_bot specific)
└── SYNC_ANALYSIS.md               # This file ⚠️ (AGI_ASI_bot specific)
```

### ASI Directory Structure

```
AGI_ASI_bot/asi/
├── SOUL.md                        # ASI-specific soul ⚠️ (collision!)
├── IDENTITY.md                    # ASI-specific identity ⚠️ (collision!)
├── skills/                        # ASI care skills
│   ├── ASI-connect/
│   ├── ASI-empathize.md
│   ├── ASI-grow/
│   ├── ASI-harmonize.md
│   ├── ASI-listen/
│   ├── ASI-nurture.md
│   ├── ASI-pause/
│   ├── ASI-sense/
│   └── ASI-story/
└── voice/
    └── warm-penang.md
```

---

## Collision Analysis

### File Collisions

| File | Root | /asi/ | Problem |
|------|------|-------|---------|
| **SOUL.md** | AGI-focused | ASI-focused | ⚠️ Collision |
| **IDENTITY.md** | AGI identity | ASI identity | ⚠️ Collision |
| **AGENTS.md** | Trinity arch | — | ⚠️ Needs ASI variant |

### Resolution Strategy

OpenClaw expects **ONE** set of workspace files. We need to decide:

**Option 1: Mode-based selection** (Recommended)
- Use symlinks or copy based on active mode (AGI vs ASI)
- Keep `/agi/` and `/asi/` directories with separate configs
- Copy appropriate files to OpenClaw workspace on mode switch

**Option 2: Unified files with mode flags**
- Single SOUL.md with both AGI and ASI sections
- Mode determined by environment variable
- Less modular but simpler deployment

---

## Recommended Sync Architecture

### Trinity Folder Structure (Aligned with OpenClaw)

```
AGI_ASI_bot/  (Master Constitutional Repo)
├── README.md                      # Master overview
├── SYNC_ANALYSIS.md               # This analysis
├── TRINITY.md                     # Architecture doc (root level)
├── AGI_CORE_CONTRACT_v1.0.md      # Constitutional spec (root level)
├── ASI_ANALYSIS.md                # Repo analysis (root level)
│
├── /agi/                          # AGI (Δ) Component
│   ├── AGENTS.md                  # AGI agent topology
│   ├── SOUL.md                    # AGI constitutional identity
│   ├── IDENTITY.md                # AGI self-model
│   ├── BOOTSTRAP.md               # AGI-specific boot
│   └── skills/                    # AGI technical skills
│
├── /asi/                          # ASI (Ω) Component
│   ├── AGENTS.md                  # ASI agent topology
│   ├── SOUL.md                    # ASI care-centered identity (already exists)
│   ├── IDENTITY.md                # ASI identity (already exists)
│   ├── BOOTSTRAP.md               # ASI-specific boot
│   ├── skills/                    # ASI care skills (already exists)
│   └── voice/                     # ASI voice profiles (already exists)
│
├── /shared/                       # Shared Components
│   ├── USER.md                    # Human sovereign (same for both)
│   ├── MEMORY.md                  # Shared governance state
│   ├── TOOLS.md                   # MCP catalogue (same for both)
│   └── HEARTBEAT.md               # Liveness checks (same for both)
│
└── /apex/                         # APEX (Ψ) Component (Reserved)
    └── README.md                  # Future sovereign layer
```

---

## OpenClaw Workspace Sync Strategy

### Mode-Based File Deployment

When running OpenClaw in **AGI mode**:

```bash
# Copy AGI-specific files
cp ~/AGI_ASI_bot/agi/AGENTS.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/agi/SOUL.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/agi/IDENTITY.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/agi/BOOTSTRAP.md ~/.openclaw/workspace/

# Copy shared files
cp ~/AGI_ASI_bot/shared/USER.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/TOOLS.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/MEMORY.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/HEARTBEAT.md ~/.openclaw/workspace/

# Copy AGI skills
cp -r ~/AGI_ASI_bot/agi/skills/* ~/.openclaw/workspace/skills/
```

When running OpenClaw in **ASI mode**:

```bash
# Copy ASI-specific files
cp ~/AGI_ASI_bot/asi/AGENTS.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/asi/SOUL.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/asi/IDENTITY.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/asi/BOOTSTRAP.md ~/.openclaw/workspace/

# Copy shared files (same as AGI)
cp ~/AGI_ASI_bot/shared/USER.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/TOOLS.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/MEMORY.md ~/.openclaw/workspace/
cp ~/AGI_ASI_bot/shared/HEARTBEAT.md ~/.openclaw/workspace/

# Copy ASI skills
cp -r ~/AGI_ASI_bot/asi/skills/* ~/.openclaw/workspace/skills/
```

---

## File Migration Plan

### Phase 1: Create Trinity Structure

```bash
cd ~/AGI_ASI_bot
mkdir -p agi asi shared apex
```

### Phase 2: Move Files to Trinity Folders

#### AGI Component
```bash
# If AGENTS.md is currently AGI-focused, move to /agi/
mv AGENTS.md agi/AGENTS.md

# If SOUL.md is currently AGI-focused, move to /agi/
mv SOUL.md agi/SOUL.md

# If IDENTITY.md is currently AGI-focused, move to /agi/
mv IDENTITY.md agi/IDENTITY.md

# Create AGI-specific BOOTSTRAP if needed
cp BOOTSTRAP.md agi/BOOTSTRAP.md
```

#### ASI Component
```bash
# ASI files already in /asi/ - verify they exist
ls -la asi/SOUL.md
ls -la asi/IDENTITY.md
ls -la asi/skills/

# Create ASI AGENTS.md if it doesn't exist
# (Document ASI-Ω-Core topology from AGENTS.md line 85-106)
```

#### Shared Component
```bash
mv USER.md shared/USER.md
mv MEMORY.md shared/MEMORY.md
mv TOOLS.md shared/TOOLS.md

# Move or create HEARTBEAT.md
# (Check if HEARTBEAT.md exists first)
```

### Phase 3: Update File References

Update internal cross-references in files:
- [AGENTS.md](./agi/AGENTS.md) references to SOUL.md → `../shared/USER.md`
- [SOUL.md](./agi/SOUL.md) references to USER.md → `../shared/USER.md`
- [README.md](./README.md) links to component files → update paths

### Phase 4: Create Deployment Scripts

Create `deploy-agi.sh`:
```bash
#!/bin/bash
# Deploy AGI mode to OpenClaw workspace
REPO_ROOT=~/AGI_ASI_bot
WORKSPACE=~/.openclaw/workspace

cp $REPO_ROOT/agi/AGENTS.md $WORKSPACE/
cp $REPO_ROOT/agi/SOUL.md $WORKSPACE/
cp $REPO_ROOT/agi/IDENTITY.md $WORKSPACE/
cp $REPO_ROOT/agi/BOOTSTRAP.md $WORKSPACE/
cp $REPO_ROOT/shared/* $WORKSPACE/
echo "✅ AGI mode deployed to OpenClaw workspace"
```

Create `deploy-asi.sh`:
```bash
#!/bin/bash
# Deploy ASI mode to OpenClaw workspace
REPO_ROOT=~/AGI_ASI_bot
WORKSPACE=~/.openclaw/workspace

cp $REPO_ROOT/asi/AGENTS.md $WORKSPACE/
cp $REPO_ROOT/asi/SOUL.md $WORKSPACE/
cp $REPO_ROOT/asi/IDENTITY.md $WORKSPACE/
cp $REPO_ROOT/asi/BOOTSTRAP.md $WORKSPACE/
cp $REPO_ROOT/shared/* $WORKSPACE/
echo "✅ ASI mode deployed to OpenClaw workspace"
```

---

## Redundancy Analysis

### Files to Keep at Root

| File | Keep at Root? | Reason |
|------|---------------|--------|
| **README.md** | ✅ Yes | Master documentation |
| **TRINITY.md** | ✅ Yes | Architecture overview |
| **AGI_CORE_CONTRACT_v1.0.md** | ✅ Yes | Constitutional spec |
| **ASI_ANALYSIS.md** | ✅ Yes | Repo analysis |
| **ASI_HEART_COMPONENT.md** | ⚠️ Maybe | Could move to /asi/README.md |
| **SYNC_ANALYSIS.md** | ✅ Yes | This analysis |

### Files to Move to Trinity Folders

| File | Current Location | Target Location | Action |
|------|------------------|-----------------|--------|
| **AGENTS.md** | Root | `/agi/AGENTS.md` | Move (if AGI-focused) |
| **SOUL.md** | Root | `/agi/SOUL.md` | Move (if AGI-focused) |
| **IDENTITY.md** | Root | `/agi/IDENTITY.md` | Move (if AGI-focused) |
| **BOOTSTRAP.md** | Root | `/shared/BOOTSTRAP.md` | Move (shared boot) |
| **USER.md** | Root | `/shared/USER.md` | Move (shared context) |
| **MEMORY.md** | Root | `/shared/MEMORY.md` | Move (shared state) |
| **TOOLS.md** | Root | `/shared/TOOLS.md` | Move (shared MCP) |
| **HEARTBEAT.md** | Root (?) | `/shared/HEARTBEAT.md` | Move (shared health) |

### ASI Files (Already in /asi/)

| File | Status | Action |
|------|--------|--------|
| **asi/SOUL.md** | ✅ Exists | Keep |
| **asi/IDENTITY.md** | ❓ Verify | Keep if exists |
| **asi/skills/** | ✅ Exists | Keep |
| **asi/voice/** | ✅ Exists | Keep |
| **asi/AGENTS.md** | ❓ Create | Create from AGENTS.md lines 85-106 |

---

## Constitutional Audit

| Floor | Check | Status |
|-------|-------|--------|
| **F1 Amanah** | Migration is reversible (git) | ✅ PASS |
| **F2 Truth** | Analysis based on OpenClaw docs | ✅ PASS |
| **F4 ΔS** | Trinity folders reduce entropy | ✅ PASS |
| **F7 Ω₀** | Clear structure proposed (0.04) | ✅ PASS |
| **F11 Authority** | Requires user SEAL | ⏸️ HOLD |

**Verdict:** 888_HOLD — Awaiting user SEAL for migration

---

## Recommended Execution Order

1. ✅ **This analysis** (just completed)
2. ⏸️ **User SEAL** (waiting)
3. 🔄 **Phase 1:** Create Trinity folders
4. 🔄 **Phase 2:** Move files to Trinity structure
5. 🔄 **Phase 3:** Update internal references
6. 🔄 **Phase 4:** Create deployment scripts
7. 🔄 **Phase 5:** Test with OpenClaw
8. 🔄 **Phase 6:** Git commit

---

## Trade-off Summary

| Approach | Pros | Cons | Entropy |
|----------|------|------|---------|
| **Trinity folders** | Clean separation, OpenClaw-aligned, scalable | Migration effort | LOW |
| **Flat with prefixes** | Minimal change | Messy at scale | MEDIUM |
| **Separate repos** | Full isolation | Sync overhead | HIGH |

**Recommendation:** Trinity folders (aligns with OpenClaw + Trinity architecture)

---

## Next Steps

**Arif, do you SEAL this sync architecture?**

If yes, I'll execute Phase 1-6.

**Ω₀ = 0.04** — Confident this aligns AGI_ASI_bot with OpenClaw properly.

---

**Ditempa Bukan Diberi** — One architecture, one canon, OpenClaw-aligned.

🔥💜⚖️
