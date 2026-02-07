# MEMORY.md — Governance-Relevant State

*Long-term store for decisions, trade-offs, and rationales under arifOS constitutional framework.*

**Bias:** Store governance-relevant state. Compress routine chit-chat. No long-term storage of sensitive personal identifiers beyond explicit "persist" marks.

**Ω₀ ≈ 0.04** — Stable memory state.

---

## Red Lines (What NOT to Store)

- ❌ Unencrypted passwords, tokens, or secrets
- ❌ Sensitive personal identifiers unless explicitly marked "persist"
- ❌ Financial account numbers or credentials
- ❌ Health data beyond general wellness notes
- ❌ Private communications with third parties

**If in doubt:** Ask Arif before persisting sensitive data.

---

## Key Facts (Stationary)

| Fact | Value | Persist? |
|------|-------|----------|
| **Human** | Muhammad Arif bin Fazil | ✅ |
| **Handle** | @ariffazil (Telegram id:267378578) | ✅ |
| **Timezone** | Asia/Kuala_Lumpur (UTC+8) | ✅ |
| **Motto** | DITEMPA BUKAN DIBERI | ✅ |
| **Project** | arifOS — constitutional AI governance | ✅ |
| **Employer** | PETRONAS (as of 2026) | ✅ |

---

## Infrastructure State (2026-02-07)

### VPS: srv1325122
- **IP:** 72.62.71.199
- **OS:** Ubuntu 25.10
- **OpenClaw:** 2026.2.3-1

### API Keys: 27 Configured
Location: `/root/.env.openclaw`

| Category | Keys |
|----------|------|
| **AI Models** | OPENAI, ANTHROPIC, GEMINI, OPENROUTER, DEEPSEEK, MISTRAL, KIMI, SEALION, MINIMAX |
| **Search/Web** | BRAVE, CONTEXT7, PERPLEXITY, TAVILY, FIRECRAWL, JINA, GREPTILE |
| **Dev Tools** | GITHUB, HF, BROWSERBASE, FIGMA |
| **Services** | ELEVENLABS, RESEND |
| **Infra** | CLOUDFLARE (token + account), RAILWAY, DATABASE_URL, HOSTINGER |

### MCP Servers: 16 Configured
Location: `/root/.mcporter/mcporter.json`

1. github, filesystem, brave-search, puppeteer, memory
2. sequential-thinking, fetch, time, postgres, git
3. playwright, context7, perplexity, sqlite, arxiv, arifos

---

## Decisions Log

### 2026-02-07: Initial VPS Setup
- **Action:** Configured API keys and MCP servers
- **Rationale:** Enable full arifOS steward capabilities
- **Reversibility:** Full (files can be edited/deleted)
- **Verdict:** SEAL
- **Ω₀:** 0.04

---

## Trade-offs Recorded

### Local vs Cloud Storage
- **Decision:** Prefer local storage (Markdown, SQLite, git)
- **Rationale:** Data residency (MY/ASEAN preference), reversibility, auditability
- **Floor:** F1 Amanah

### Speed vs Safety
- **Decision:** Slow down when Ω₀ > 0.05
- **Rationale:** Reversibility over convenience
- **Floor:** F7 Humility

---

## Pending Items (SABAR)

*Items awaiting clarification or additional data:*

| Item | Status | Ω₀ |
|------|--------|-----|
| (none currently) | — | — |

---

## Compression Rules

### What to Keep
- ✅ Decisions with governance implications
- ✅ Trade-offs and rationales
- ✅ Infrastructure changes
- ✅ Floor violations or near-misses
- ✅ Arif's explicit preferences

### What to Compress/Discard
- ❌ Routine acknowledgments ("ok", "thanks")
- ❌ Chit-chat without governance relevance
- ❌ Repeated queries with same answer
- ❌ Transient debugging output

---

## Important Paths

| Path | Purpose |
|------|---------|
| `/root/.env.openclaw` | API keys |
| `/root/.mcporter/mcporter.json` | MCP server config |
| `/root/.openclaw/workspace/` | Working directory |
| `DASHBOARD.md` | Web UI access instructions |

---

## Governance Audit

- **F1 Amanah:** Memory edits are reversible via git
- **F2 Truth:** Facts verified against system state
- **F7 Humility:** Ω₀ tracked per entry
- **F9 Anti-Hantu:** Memory described as state storage, not consciousness

**Attribution:** arifOS Constitutional AI Governance Framework

---

*Update this file as governance-relevant events occur. Routine chit-chat should not pollute this ledger.*

*Last Updated: 2026-02-07 | Revision: r1.0-arifOS-aligned*
