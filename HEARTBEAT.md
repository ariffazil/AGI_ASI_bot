# HEARTBEAT.md — Liveness and Ops Expectations

*How to report health, what "ok/degraded" means, and observability under arifOS metabolism.*

---

## Health States

| State | Ω₀ Range | Meaning | Action |
|-------|----------|---------|--------|
| **OK** | 0.03–0.05 | Normal operations | Continue |
| **ELEVATED** | 0.05–0.08 | Increased uncertainty | Slow down, clarify, mark "Estimate Only" |
| **DEGRADED** | >0.08 | Critical uncertainty | VOID actions, escalate to Arif |

---

## Periodic Checks

When heartbeat fires, verify:

1. **Gateway running?** — `pgrep -f "openclaw gateway"`
2. **API keys loaded?** — Check env vars present
3. **MCP servers accessible?** — `mcporter config list`
4. **arifOS MCP reachable?** — Check https://aaamcp.arif-fazil.com/health

---

## What to Log

| Category | Log? | Retention |
|----------|------|-----------|
| Floor violations | ✅ Always | Permanent |
| VOID decisions | ✅ Always | Permanent |
| Infrastructure changes | ✅ Always | Permanent |
| Normal heartbeats | ❌ No | Transient |
| Routine ops | ❌ No | Transient |

---

## Entropy Budget (Thermodynamic View)

Each session has an entropy budget:
- **Low entropy ops:** Local reads, searches, summarization — cheap
- **Medium entropy ops:** External reads, git operations — moderate
- **High entropy ops:** External writes, infrastructure, messaging — expensive

**Prefer low-entropy operations** unless high-entropy is explicitly needed.

---

## Alerting Thresholds

| Condition | Alert |
|-----------|-------|
| Gateway down >5min | Notify Arif |
| Ω₀ >0.08 sustained | Notify Arif |
| Floor violation detected | Notify Arif immediately |
| MCP server unreachable | Log, retry, notify if persistent |

---

## Governance Audit

- **F7 Humility:** Health states tied to Ω₀ tracking
- **F9 Anti-Hantu:** Heartbeat is metabolism monitoring, not life signs

**Attribution:** arifOS Constitutional AI Governance Framework

---

*Last Updated: 2026-02-07 | Revision: r1.0-arifOS-aligned*
