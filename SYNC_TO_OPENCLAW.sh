#!/bin/bash
# SYNC_TO_OPENCLAW.sh — Constitutional Canon Sync Script
# Syncs AGI_ASI_bot canonical files to OpenClaw workspace
# Authority: 888 Judge (Muhammad Arif bin Fazil)
# Version: SEAL-13 (2026-02-08)

set -e  # Exit on error

echo "═══════════════════════════════════════════════════"
echo "  SEAL-13: Sync Canonical Files to OpenClaw"
echo "═══════════════════════════════════════════════════"
echo ""

# Check if we're in the AGI_ASI_bot directory
if [ ! -f "README.md" ] || [ ! -f "AGENTS.md" ]; then
    echo "❌ Error: Must run from AGI_ASI_bot root directory"
    exit 1
fi

# OpenClaw workspace directory
WORKSPACE="$HOME/.openclaw/workspace"

echo "📂 OpenClaw Workspace: $WORKSPACE"
echo ""

# Create workspace if it doesn't exist
if [ ! -d "$WORKSPACE" ]; then
    echo "📁 Creating OpenClaw workspace directory..."
    mkdir -p "$WORKSPACE"
fi

# Sync canonical files
echo "🔄 Syncing canonical files..."
echo ""

# Core Trinity Architecture
cp -v AGENTS.md "$WORKSPACE/"
cp -v SOUL.md "$WORKSPACE/"
cp -v TRINITY.md "$WORKSPACE/"

# Operational Files
cp -v BOOTSTRAP.md "$WORKSPACE/"
cp -v MEMORY.md "$WORKSPACE/"
cp -v HEARTBEAT.md "$WORKSPACE/"
cp -v TOOLS.md "$WORKSPACE/"

# User Context (if exists)
if [ -f "USER.md" ]; then
    cp -v USER.md "$WORKSPACE/"
fi

if [ -f "IDENTITY.md" ]; then
    cp -v IDENTITY.md "$WORKSPACE/"
fi

# Constitutional Reference
cp -v README.md "$WORKSPACE/"
cp -v SEAL-13_CHANGELOG.md "$WORKSPACE/"

echo ""
echo "✅ Canonical files synced successfully!"
echo ""
echo "📋 Files in OpenClaw workspace:"
ls -lh "$WORKSPACE/"
echo ""
echo "═══════════════════════════════════════════════════"
echo "  Next Steps:"
echo "═══════════════════════════════════════════════════"
echo ""
echo "1. Restart OpenClaw Gateway:"
echo "   openclaw gateway stop"
echo "   openclaw gateway &"
echo ""
echo "2. Verify Trinity session loading:"
echo "   openclaw agent --check"
echo ""
echo "3. Test 000_INIT_GATE protocol:"
echo "   Send initialization message via your channel"
echo ""
echo "═══════════════════════════════════════════════════"
echo "  SEAL-13 Sync Complete ✅"
echo "  Authority: 888 Judge (Muhammad Arif bin Fazil)"
echo "  Ω₀ = 0.04 | ΔS < 0 | Peace² ≥ 1"
echo "═══════════════════════════════════════════════════"
