# AGI_TOOLSTACK.md — Complete Agent Tool Matrix

**Minimal but complete tool stack for AGI agents**
**Check "tools online?" at 000_INIT_GATE**

---

## ✅ Shared MCP Servers (All Agents)

| Server | Package | Purpose | Required |
|--------|---------|---------|----------|
| **Filesystem** | `@modelcontextprotocol/server-filesystem` | Read/write project files | ✅ |
| **GitHub** | `@modelcontextprotocol/server-github` | Repo automation, PRs, commits | ✅ |
| **Fetch** | `@anthropics/mcp-server-fetch` | HTTP requests, APIs, web scraping | ✅ |
| **Puppeteer** | `@modelcontextprotocol/server-puppeteer` | Browser automation, screenshots | ✅ |
| **Context7** | `@upstash/context7-mcp` | Up-to-date library docs (anti-hallucination) | ✅ |
| **Memory** | `@modelcontextprotocol/server-memory` | Persistent key-value state | ⚪ |
| **Sequential-Thinking** | `@modelcontextprotocol/server-sequential-thinking` | Step-by-step reasoning | ⚪ |
| **Brave-Search** | `@modelcontextprotocol/server-brave-search` | Web search (needs BRAVE_API_KEY) | ⚪ |

### Installation (mcporter)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/workspace"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "${GITHUB_TOKEN}" }
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@anthropics/mcp-server-fetch"]
    },
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    },
    "brave-search": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-brave-search"],
      "env": { "BRAVE_API_KEY": "${BRAVE_API_KEY}" }
    }
  }
}
```

---

## 🛠️ Local CLIs / Tools

| Tool | Install | Purpose | Required |
|------|---------|---------|----------|
| **git** | System | Version control | ✅ |
| **npm/pnpm/yarn** | System | Package management, builds | ✅ |
| **lighthouse** | `npm i -g lighthouse` | Performance/SEO/A11y audits | ✅ |
| **sharp-cli** | `npm i -g sharp-cli` | Image optimization (WebP, resize) | ✅ |
| **html-minifier-terser** | `npm i -g html-minifier-terser` | HTML compression | ⚪ |
| **snyk** | `npm i -g snyk` | Vulnerability scanning | ⚪ |
| **chromium-browser** | `apt install chromium` | Headless browser for Lighthouse | ✅ |
| **mcporter** | `npm i -g mcporter` | MCP server orchestration | ✅ |

### Quick Install (All)

```bash
npm i -g lighthouse sharp-cli html-minifier-terser snyk mcporter
apt install -y chromium
```

---

## 🐍 Python Libraries (Host-side)

### Mathematics

```bash
pip install sympy numpy scipy matplotlib
```

| Library | Purpose |
|---------|---------|
| `sympy` | Symbolic mathematics |
| `numpy` | Numerical arrays |
| `scipy` | Scientific computing |
| `matplotlib` | Visualization |

### Physics / Thermodynamics

```bash
pip install CoolProp numpy scipy
```

| Library | Purpose |
|---------|---------|
| `CoolProp` | Thermodynamic properties |
| `numpy/scipy` | Numerical methods |

---

## 🤖 Agent Tool Mapping

### AGI-Core (Coordinator / Web Dev)

**Full stack for orchestration + web development**

```
MCP: filesystem, github, fetch, puppeteer, context7, memory
CLI: git, npm, lighthouse, sharp-cli, chromium
```

### AGI-Linguistics

**Text processing, content, documentation**

```
MCP: filesystem, github, fetch, context7
CLI: git
Python: (none required)
```

### AGI-Mathematics

**Formal computation, proofs, numerical analysis**

```
MCP: filesystem, github, context7
CLI: git
Python: sympy, numpy, scipy, matplotlib
```

### AGI-Physics

**Physical modeling, thermodynamics, simulation**

```
MCP: filesystem, github, fetch (for APIs), context7
CLI: git
Python: CoolProp, numpy, scipy
```

---

## 🔑 Required Tokens/Secrets

| Token | Purpose | Where to Get |
|-------|---------|--------------|
| `GITHUB_TOKEN` | GitHub MCP auth | https://github.com/settings/tokens |
| `CONTEXT7_API_KEY` | Higher rate limits (optional) | https://context7.com/dashboard |
| `SNYK_TOKEN` | Security scanning | https://app.snyk.io/account |
| `BRAVE_API_KEY` | Brave Search MCP | https://brave.com/search/api/ |

---

## 📋 000_INIT_GATE Checklist

Run at agent startup to verify tools are online:

```bash
#!/bin/bash
# tools_check.sh

echo "=== AGI Tool Stack Check ==="

# MCP Servers
mcporter config list > /dev/null && echo "✓ mcporter configured" || echo "✗ mcporter missing"

# CLI Tools
which git > /dev/null && echo "✓ git" || echo "✗ git"
which npm > /dev/null && echo "✓ npm" || echo "✗ npm"
which lighthouse > /dev/null && echo "✓ lighthouse" || echo "✗ lighthouse"
which sharp > /dev/null && echo "✓ sharp-cli" || echo "✗ sharp-cli"
which chromium-browser > /dev/null && echo "✓ chromium" || echo "✗ chromium"

# Python (optional)
python3 -c "import numpy" 2>/dev/null && echo "✓ numpy" || echo "⚪ numpy (optional)"
python3 -c "import sympy" 2>/dev/null && echo "✓ sympy" || echo "⚪ sympy (optional)"

echo "=== Check Complete ==="
```

---

## 🚀 Quick Commands

```bash
# List MCP servers
mcporter config list

# Call Context7 for library docs
mcporter call context7.resolve_library_id libraryName=react

# Lighthouse audit
CHROME_PATH=/usr/bin/chromium-browser lighthouse https://example.com --output html

# Image optimization
sharp -i input.png -o output.webp --webp --quality 80

# Security scan
snyk test

# HTML minification
html-minifier-terser input.html -o output.min.html --collapse-whitespace
```

---

## 📚 References

- [Context7 MCP](https://github.com/upstash/context7) — Up-to-date library docs
- [MCP Best Practices](https://steipete.me/posts/2025/mcp-best-practices)
- [Chrome DevTools MCP](https://developer.chrome.com/blog/chrome-devtools-mcp)
- [Railway FastMCP Deploy](https://railway.com/deploy/fastmcp)

---

*Last updated: 2026-02-07*
*For AGI_ASI_bot — not arifOS specific*
