#!/bin/bash
# SYNC_TO_OPENCLAW.sh — Constitutional Canon Sync Script
# Syncs AGI_ASI_bot canonical files to OpenClaw workspace + managed hooks
# Authority: 888 Judge (Muhammad Arif bin Fazil)
# Version: r5.0-InfraUnified (2026-02-28)

set -e

echo "═══════════════════════════════════════════════════"
echo "  arifOS 1AGI: Sync Canon to OpenClaw"
echo "  Version: r5.0-InfraUnified"
echo "═══════════════════════════════════════════════════"
echo ""

# Check if we're in the AGI_ASI_bot directory
if [ ! -f "README.md" ] || [ ! -f "AGENTS.md" ]; then
    echo "❌ Error: Must run from AGI_ASI_bot root directory"
    exit 1
fi

# Paths
WORKSPACE="${OPENCLAW_WORKSPACE:-$HOME/.openclaw/workspace}"
HOOKS_DIR="${OPENCLAW_HOOKS:-$HOME/.openclaw/hooks}"

echo "📂 Workspace: $WORKSPACE"
echo "🪝 Hooks dir: $HOOKS_DIR"
echo ""

# Create directories
mkdir -p "$WORKSPACE"
mkdir -p "$WORKSPACE/memory"
mkdir -p "$HOOKS_DIR"

# ── Core Trinity / Governance ─────────────────────────────────
echo "🔄 Syncing governance files..."
cp -v AGENTS.md         "$WORKSPACE/"
cp -v SOUL.md           "$WORKSPACE/"
cp -v TRINITY.md        "$WORKSPACE/"
cp -v IDENTITY.md       "$WORKSPACE/"
cp -v USER.md           "$WORKSPACE/"
cp -v CANON.md          "$WORKSPACE/"
cp -v CONSTITUTION.md   "$WORKSPACE/"

# ── Operational / Boot ───────────────────────────────────────
echo ""
echo "🔄 Syncing operational files..."
cp -v BOOTSTRAP.md      "$WORKSPACE/"
cp -v BOOT.md           "$WORKSPACE/"
cp -v HEARTBEAT.md      "$WORKSPACE/"
cp -v TOOLS.md          "$WORKSPACE/"
cp -v DIRECTIVE.md      "$WORKSPACE/"
cp -v TELEGRAM_FORMAT.md "$WORKSPACE/"

# ── Optional files (copy if present) ─────────────────────────
for f in ENV_POLICY.md FAQ.md ORIGIN.md THESIS.md MEMORY.md; do
    [ -f "$f" ] && cp -v "$f" "$WORKSPACE/" || true
done

# ── Hooks (3 custom arifOS hooks) ────────────────────────────
echo ""
echo "🪝 Syncing custom hooks..."
for hook in arif-session-archive arif-inbox-orchestrator arif-guardrail; do
    if [ -d "hooks/$hook" ]; then
        mkdir -p "$HOOKS_DIR/$hook"
        cp -v "hooks/$hook/HOOK.md"    "$HOOKS_DIR/$hook/"
        cp -v "hooks/$hook/handler.ts" "$HOOKS_DIR/$hook/"
    fi
done

# ── Post-sync: reindex memory ─────────────────────────────────
echo ""
echo "🔍 Triggering memory reindex..."
if command -v openclaw &>/dev/null; then
    openclaw memory index --force 2>&1 | tail -2 || echo "⚠️  Memory reindex failed (non-fatal)"
else
    echo "⚠️  openclaw CLI not found — skipping reindex"
fi

echo ""
echo "═══════════════════════════════════════════════════"
echo "  ✅ Sync complete"
echo "  Restart gateway to reload hooks:"
echo "    docker restart openclaw"
echo ""
echo "  Verify hooks loaded:"
echo "    openclaw hooks list"
echo ""
echo "  Ω₀ = 0.04 | ΔS < 0 | Peace² ≥ 1"
echo "  Authority: 888 Judge (Muhammad Arif bin Fazil)"
echo "═══════════════════════════════════════════════════"
