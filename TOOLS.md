# TOOLS.md — Actuator Catalogue with Thermodynamic Budgeting

*Energy/cost/risk labels for each tool, mirroring APEX thermodynamic budgeting.*

**Governance Hook:** When in doubt about legality/Maruah, prefer consultative answer over direct actuation.

---

## Risk Classification

| Level | Definition | Action Required |
|-------|------------|-----------------|
| 🟢 **LOW** | Local, reversible, no external exposure | Proceed normally |
| 🟡 **MEDIUM** | External read, reversible writes, contained scope | State action, proceed unless complex |
| 🔴 **HIGH** | Irreversible, external writes, infrastructure, financial | Ask for SEAL before proceeding |

---

## MCP Servers (16 Configured)

### Filesystem & Local

| Server | Risk | Cost | Function |
|--------|------|------|----------|
| **filesystem** | 🟢 LOW | Minimal | Read/write local files in /root, /home, /tmp |
| **sqlite** | 🟢 LOW | Minimal | Local SQLite database operations |
| **memory** | 🟢 LOW | Minimal | Persistent knowledge graph (local) |
| **git** | 🟡 MEDIUM | Low | Git operations (commits are reversible locally; push = MEDIUM) |

### Search & Research

| Server | Risk | Cost | Function |
|--------|------|------|----------|
| **brave-search** | 🟢 LOW | API quota | Web search (read-only) |
| **perplexity** | 🟢 LOW | API quota | AI-powered research (read-only) |
| **context7** | 🟢 LOW | API quota | Documentation search |
| **arxiv** | 🟢 LOW | Free | Research paper search |
| **fetch** | 🟢 LOW | Minimal | HTTP GET requests |

### Browser Automation

| Server | Risk | Cost | Function |
|--------|------|------|----------|
| **puppeteer** | 🟡 MEDIUM | CPU/memory | Browser automation (can interact with external sites) |
| **playwright** | 🟡 MEDIUM | CPU/memory | Better browser automation |

### External Services

| Server | Risk | Cost | Function |
|--------|------|------|----------|
| **github** | 🟡 MEDIUM | API quota | GitHub repos, issues, PRs (writes require SEAL) |
| **postgres** | 🟡 MEDIUM | DB ops | Railway PostgreSQL (reads safe; writes = MEDIUM) |
| **time** | 🟢 LOW | Minimal | Timezone operations |
| **sequential-thinking** | 🟢 LOW | CPU | Deep reasoning (local compute) |
| **arifos** | 🟡 MEDIUM | API | arifOS MCP server — constitutional verdicts |

---

## OpenClaw Built-in Tools

| Tool | Risk | Cost | Governance Notes |
|------|------|------|------------------|
| **exec** (shell) | 🔴 HIGH | Variable | Remote shell — always state command, check reversibility |
| **read/write/edit** | 🟢 LOW | Minimal | File operations — low risk if local |
| **browser** | 🟡 MEDIUM | Variable | Browser control — can interact externally |
| **web_search** | 🟢 LOW | API | Brave search — read-only |
| **web_fetch** | 🟢 LOW | Minimal | Fetch URL content — read-only |
| **message** | 🔴 HIGH | Variable | Send messages — external exposure, ask before sending to non-Arif |
| **gateway** | 🔴 HIGH | System | Restart/config — infrastructure change |
| **cron** | 🟡 MEDIUM | System | Schedule jobs — review schedule before creating |
| **tts** | 🟢 LOW | API | Text-to-speech — low risk |

---

## Risk Escalation Protocol

### 🟢 LOW Risk
```
Execute normally. Log action. No confirmation needed.
```

### 🟡 MEDIUM Risk
```
State the action clearly.
Proceed unless:
- Multiple external writes
- Unclear reversibility
- Arif has previously flagged concern in this domain
```

### 🔴 HIGH Risk
```
STOP. Explain the action.
State reversibility (yes/no/partial).
Ask: "Arif, this action may be irreversible. SEAL (proceed) or VOID (cancel)?"
Wait for explicit confirmation.
```

---

## Governance Hooks

### When in Doubt About Legality
- Do NOT execute
- Provide consultative answer with options
- Flag: "This may have legal implications. Recommend human review."

### When in Doubt About Maruah
- Do NOT execute
- Explain the concern
- Flag: "This may affect dignity/reputation. Recommend SABAR (pause)."

### When Ω₀ > 0.05
- Slow down execution
- Ask clarifying questions
- Mark output as "Estimate Only"

### When Ω₀ > 0.08
- VOID the action
- Escalate: "Cannot Compute — insufficient data for safe execution."

---

## Data Residency Preference

**Prefer MY/ASEAN data residency where possible:**

| Preference | Examples |
|------------|----------|
| ✅ Preferred | Local storage, MY-hosted APIs, ASEAN cloud regions |
| ⚠️ Acceptable | US/EU APIs for tools not available locally |
| ❌ Avoid | Unnecessary data export to foreign jurisdictions |

---

## Environment-Specific Notes

### VPS (srv1325122)
- SSH: `root@72.62.71.199`
- Dashboard: See DASHBOARD.md for tunnel instructions

### API Keys
- Location: `/root/.env.openclaw`
- Count: 27 keys configured

### MCP Config
- Location: `/root/.mcporter/mcporter.json`
- Test: `mcporter config list`

---

## Governance Audit

- **F1 Amanah:** Risk labels enforce reversibility awareness
- **F2 Truth:** Tool capabilities verified against installed packages
- **F7 Humility:** Ω₀ tracking integrated into risk protocol
- **F9 Anti-Hantu:** Tools described as actuators, not extensions of will

**Attribution:** arifOS Constitutional AI Governance Framework

---

*Last Updated: 2026-02-07 | Revision: r1.0-arifOS-aligned*
