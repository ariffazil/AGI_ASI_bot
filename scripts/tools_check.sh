#!/bin/bash
# tools_check.sh — AGI Tool Stack Verification
# Run at 000_INIT_GATE to verify tools are online
# Usage: ./scripts/tools_check.sh [--strict]

STRICT="${1:-}"
FAILED=0
WARNED=0

echo "========================================"
echo "  AGI Tool Stack Check (000_INIT_GATE)"
echo "========================================"
echo ""

check_required() {
    if eval "$1" > /dev/null 2>&1; then
        echo "✓ $2"
        return 0
    else
        echo "✗ $2 — MISSING"
        FAILED=$((FAILED + 1))
        return 1
    fi
}

check_optional() {
    if eval "$1" > /dev/null 2>&1; then
        echo "✓ $2"
        return 0
    else
        echo "⚪ $2 (optional)"
        WARNED=$((WARNED + 1))
        return 0
    fi
}

echo "[MCP Configuration]"
check_required "which mcporter" "mcporter CLI" || true
if which mcporter > /dev/null 2>&1; then
    SERVER_COUNT=$(mcporter config list 2>/dev/null | grep -c "Transport:" || echo "0")
    echo "  └─ $SERVER_COUNT MCP servers configured"
fi
echo ""

echo "[Core CLI Tools]"
check_required "which git" "git" || true
check_required "which node" "node" || true
check_required "which npm" "npm" || true
check_optional "which pnpm" "pnpm"
echo ""

echo "[Web Dev Tools]"
check_required "which lighthouse" "lighthouse" || true
check_required "which sharp" "sharp-cli" || true
check_optional "which html-minifier-terser" "html-minifier-terser"
if which chromium-browser > /dev/null 2>&1 || which chromium > /dev/null 2>&1; then
    echo "✓ chromium-browser"
else
    echo "⚪ chromium-browser (optional)"
    WARNED=$((WARNED + 1))
fi
echo ""

echo "[Security Tools]"
check_optional "which snyk" "snyk"
echo ""

echo "[Python Stack]"
check_optional "python3 -c 'import numpy'" "numpy"
check_optional "python3 -c 'import sympy'" "sympy"
check_optional "python3 -c 'import scipy'" "scipy"
check_optional "python3 -c 'import CoolProp'" "CoolProp"
echo ""

echo "[Environment Variables]"
if [ -n "$GITHUB_TOKEN" ]; then
    echo "✓ GITHUB_TOKEN set"
else
    echo "⚪ GITHUB_TOKEN not set (GitHub MCP may fail)"
    WARNED=$((WARNED + 1))
fi

if [ -n "$CHROME_PATH" ]; then
    echo "✓ CHROME_PATH set ($CHROME_PATH)"
else
    echo "⚪ CHROME_PATH not set (lighthouse may fail)"
    WARNED=$((WARNED + 1))
fi
echo ""

echo "========================================"
echo "  SUMMARY"
echo "========================================"
REQUIRED_TOTAL=6
REQUIRED_PASSED=$((REQUIRED_TOTAL - FAILED))
echo "  Required: $REQUIRED_PASSED/$REQUIRED_TOTAL passed"
echo "  Optional: $WARNED warnings"
echo ""

if [ $FAILED -gt 0 ]; then
    echo "VERDICT: VOID — Missing required tools"
    exit 1
elif [ $WARNED -gt 0 ] && [ "$STRICT" == "--strict" ]; then
    echo "VERDICT: SABAR — Warnings present (strict mode)"
    exit 1
elif [ $WARNED -gt 0 ]; then
    echo "VERDICT: PARTIAL — Ready with warnings"
    exit 0
else
    echo "VERDICT: SEAL — All tools online"
    exit 0
fi
