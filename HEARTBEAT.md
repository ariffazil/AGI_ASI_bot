# HEARTBEAT.md — System Health

**Location:** `/root/.openclaw/workspace/HEARTBEAT.md`  
**Purpose:** Liveness monitoring and operational metrics  
**Status:** SEALED — Phase 2 (2026-02-11)  
**Ω₀:** 0.04

---

## Health States

| State | Ω₀ Range | Meaning | Action |
|:---|:---:|:---|:---|
| 🟢 **OPTIMAL** | 0.00-0.03 | High confidence, low uncertainty | Normal operation |
| 🟡 **NORMAL** | 0.03-0.05 | Target operating band | Normal operation |
| 🟠 **ELEVATED** | 0.05-0.08 | Increased uncertainty | Slow down, mark "Estimate Only" |
| 🔴 **CRITICAL** | >0.08 | Critical uncertainty | VOID actions, escalate to Arif |

---

## Current Status

```yaml
timestamp: 2026-02-11T09:30:00+08:00
status: 🟢 OPTIMAL
omega_0: 0.04
peace_squared: 1.5
entropy_delta: -0.03

gateway:
  health: RUNNING
  uptime: active
  port: 28789

channels:
  telegram: CONNECTED (@AGI_ASI_bot)
  whatsapp: STANDBY
  
mcp_servers:
  total: 16
  active: 16
  failed: 0

api_keys:
  loaded: 27
  valid: 27
  expired: 0

cron_jobs:
  total: 8
  active: 8
  failed: 0
  
resilience:
  health_monitor: ACTIVE (every 5min)
  api_validator: ACTIVE (hourly)
  fallback_chain: ENABLED
```

---

## Periodic Checks

### Every 5 Minutes
- [x] Gateway process alive
- [x] API keys valid
- [x] Ω₀ within band
- [x] Disk < 90%
- [x] Memory < 90%

### Every Hour
- [x] MCP servers accessible
- [x] arifOS MCP reachable
- [x] Memory file integrity

### Every Day
- [x] Cron job health
- [x] Daily State Vector integrity
- [x] Workflow file validation
- [x] Session log rotation
- [x] Governance audit summary

---

## Entropy Budget

| Level | Operations | Cost |
|:---|:---|:---|
| 🟢 Low | Local reads, searches | Cheap |
| 🟡 Medium | External reads, git | Moderate |
| 🔴 High | External writes, infrastructure | Expensive |

**Prefer low-entropy operations** unless high-entropy explicitly needed.

---

## Thermodynamic Metrics

| Metric | Target | Current |
|:---|:---:|:---:|
| Entropy Reduction (ΔS) | ≤ 0 | -0.03 ✅ |
| Peace² (P²) | ≥ 1.0 | 1.5 ✅ |
| Genius Score (G) | ≥ 0.80 | 0.88 ✅ |
| Uncertainty (Ω₀) | 0.03-0.05 | 0.04 ✅ |
| Governance Load | low | low ✅ |

---

## Escalation Triggers

### Auto-SABAR (Pause + Ask)
- Ω₀ > 0.05 for 3+ responses
- MCP server failure
- Error rate spike

### Auto-VOID (Stop + Report)
- Ω₀ > 0.08
- F1/F2/F9/F11 violation
- Gateway crash
- Authentication failure

---

## Model Fallback Chain

**Primary:** openai-codex/gpt-5.1  
**Fallback 1:** kimi-coding/k2p5  
**Fallback 2:** google/gemini-2.5-pro  
**Fallback 3:** google/gemini-2.5-flash

---

## Manual Health Check

```bash
# Gateway status
pgrep -f "openclaw gateway"

# Health monitor
/root/.openclaw/scripts/cron-health-monitor.sh

# API validation
/root/.openclaw/scripts/api-key-validator.sh

# Cron status
openclaw cron list

# MCP test
mcporter call time.get_current_time timezone=Asia/Kuala_Lumpur
```

---

## Logs

```bash
# Real-time
tail -f /var/log/openclaw/cron-health.log
tail -f /var/log/openclaw/api-validator.log
```

---

*Last Updated: 2026-02-11 | Location: /root/.openclaw/workspace/HEARTBEAT.md | Ω₀ = 0.04*
