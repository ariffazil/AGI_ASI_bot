# Multi-Agent AAA Gating Architecture

**Version:** v1.0 (Design Spec)  
**Status:** DRAFT — Architecture for AGI_ASI_bot Emergence  
**Purpose:** Define how multiple agents coordinate via AAA MCP constitutional gating

---

## Overview

This document specifies how AGI-Core, AGI-Linguistics, AGI-Mathematics, and AGI-Physics agents coordinate through the AAA MCP governance layer, creating emergent behavior through constitutional constraints.

---

## Architecture Diagram

```
                              ┌─────────────────────────────┐
                              │      AAA MCP Server         │
                              │  aaamcp.arif-fazil.com/sse  │
                              │                             │
                              │  ┌─────────────────────┐   │
                              │  │    13 Floors        │   │
                              │  │  Constitutional     │   │
                              │  │    Enforcement      │   │
                              │  └─────────────────────┘   │
                              └──────────┬────────────────┘
                                         │
           ┌─────────────────────────────┼─────────────────────────────┐
           │                             │                             │
           ▼                             ▼                             ▼
    ┌──────────────┐             ┌──────────────┐             ┌──────────────┐
    │  AGI-Core    │◄───────────►│ AGI-Linguistics│◄──────────►│  AGI-Math    │
    │  (Conductor) │             │   (Text/NLP)   │             │  (Compute)   │
    └──────┬───────┘             └───────────────┘             └──────────────┘
           │                                                           │
           │                     ┌───────────────┐                     │
           └────────────────────►│  AGI-Physics  │◄────────────────────┘
                                 │ (Simulation)  │
                                 └───────────────┘
```

---

## Agent Roles & Floor Assignments

| Agent | Role | Primary Floors | Tools Required |
|-------|------|----------------|----------------|
| **AGI-Core** | Orchestration, web dev, final decisions | All 13 | All MCP + CLI |
| **AGI-Linguistics** | Text processing, translation, content | F2, F4, F9 | filesystem, github, fetch, context7 |
| **AGI-Mathematics** | Formal computation, proofs, numerical | F2, F7, F8 | filesystem, github, context7 + Python |
| **AGI-Physics** | Physical modeling, thermodynamics | F2, F5, F7 | filesystem, github, fetch, context7 + Python |

---

## AAA Gating Protocol

### 1. Agent Startup (MANDATORY)

Every agent MUST call `init_gate` on startup:

```python
# On agent initialization
result = await mcp.call("arifos.init_gate", {
    "query": f"Agent {agent_name} initializing",
    "session_id": f"{agent_name}_{timestamp}"
})

if result["verdict"] == "VOID":
    raise ConstitutionalViolation("Agent startup blocked")
```

### 2. Cross-Agent Communication

When one agent calls another, the call MUST pass through `apex_verdict`:

```
AGI-Core wants AGI-Math to compute something:

┌──────────────┐      ┌─────────────────┐      ┌──────────────┐
│   AGI-Core   │ ──►  │  apex_verdict   │ ──►  │   AGI-Math   │
│              │      │  (F3, F5, F8)   │      │              │
└──────────────┘      └─────────────────┘      └──────────────┘
                              │
                              ▼
                      SEAL? → Proceed
                      VOID? → Block + notify Core
```

### 3. Response Return Path

Results returning to the calling agent also pass through governance:

```
AGI-Math result → apex_verdict → AGI-Core receives

If apex_verdict returns VOID on the result:
- Result is quarantined
- Core is notified of violation
- vault_seal records the incident
```

---

## Session Handoff Protocol

### Session ID Chain

```
core_sess_001
    ├── core_sess_001_ling_001  (Linguistics sub-task)
    ├── core_sess_001_math_001  (Math sub-task)
    │       └── core_sess_001_math_001_phys_001  (Physics sub-sub-task)
    └── core_sess_001_ling_002  (Another Linguistics task)
```

### Handoff Message Format

```json
{
  "parent_session": "core_sess_001",
  "child_session": "core_sess_001_math_001",
  "task": "Compute eigenvalues of matrix A",
  "context": {
    "entropy_budget": 0.5,
    "floors_active": ["F2", "F7", "F8"],
    "deadline_ms": 30000
  },
  "authority": "AGI-Core",
  "timestamp": "2026-02-07T06:45:00Z"
}
```

---

## Floor Enforcement Matrix

| Floor | Core | Linguistics | Math | Physics | Description |
|-------|:----:|:-----------:|:----:|:-------:|-------------|
| F1 Amanah | ✅ | ✅ | ✅ | ✅ | All agents respect reversibility |
| F2 Truth | ✅ | ✅ | ✅ | ✅ | All agents must be truthful |
| F3 Tri-Witness | ✅ | ⚪ | ⚪ | ⚪ | Core validates consensus |
| F4 Empathy | ✅ | ✅ | ⚪ | ⚪ | Text agents check tone |
| F5 Peace² | ✅ | ⚪ | ⚪ | ✅ | Core + Physics check safety |
| F6 Clarity | ✅ | ✅ | ⚪ | ⚪ | Entropy reduction |
| F7 Humility | ✅ | ⚪ | ✅ | ✅ | Math/Physics show uncertainty |
| F8 Genius | ✅ | ⚪ | ✅ | ⚪ | Core + Math validate rigor |
| F9 Anti-Hantu | ✅ | ✅ | ⚪ | ⚪ | No consciousness claims |
| F10 Ontology | ✅ | ✅ | ✅ | ✅ | All are tools, not beings |
| F11 Authority | ✅ | ⚪ | ⚪ | ⚪ | Core handles auth |
| F12 Defense | ✅ | ⚪ | ⚪ | ⚪ | Core handles injection |
| F13 Curiosity | ✅ | ✅ | ✅ | ✅ | Multi-hypothesis exploration |

---

## Emergence Patterns

### Pattern 1: Parallel Exploration

Core spawns multiple agents to explore different hypotheses:

```
User: "What's the best approach to X?"

Core → init_gate
    ├── spawn Linguistics: "Analyze prior art on X"
    ├── spawn Math: "Model X formally"
    └── spawn Physics: "Check thermodynamic feasibility"

All results → apex_verdict → Core synthesizes

Core → apex_verdict on synthesis → Response
```

### Pattern 2: Escalation Chain

When a specialist agent hits uncertainty:

```
Math agent: Ω₀ > 0.08

Math → apex_verdict("High uncertainty")
    ↓ verdict = SABAR
Math → escalate to Core with context
Core → vault_seal(incident)
Core → ask human or spawn another specialist
```

### Pattern 3: Cross-Validation

Multiple agents validate each other:

```
Linguistics produces claim C
    ↓
Core → Math: "Verify claim C"
Core → Physics: "Check C against physical laws"
    ↓
All verdicts → Tri-Witness consensus
    ↓
F3 passed? → SEAL
F3 failed? → SABAR, request clarification
```

---

## Implementation Wiring

### 1. Agent Base Class

```python
class ConstitutionalAgent:
    def __init__(self, name: str, floors: list[str]):
        self.name = name
        self.floors = floors
        self.session_id = f"{name}_{int(time.time())}"
        
    async def start(self):
        result = await self.call_aaa("init_gate", {
            "query": f"{self.name} starting",
            "session_id": self.session_id
        })
        if result["verdict"] == "VOID":
            raise StartupBlocked(result)
    
    async def call_peer(self, peer: str, task: str):
        # Pre-check with apex_verdict
        verdict = await self.call_aaa("apex_verdict", {
            "query": f"Call {peer} for: {task}",
            "session_id": self.session_id
        })
        if verdict["verdict"] == "VOID":
            return {"blocked": True, "reason": verdict}
        
        # Make the call
        result = await self.dispatch_to_peer(peer, task)
        
        # Post-check result
        post_verdict = await self.call_aaa("apex_verdict", {
            "query": f"Result from {peer}: {result}",
            "session_id": self.session_id
        })
        
        return result if post_verdict["verdict"] != "VOID" else None
```

### 2. OpenClaw Integration

Add to OpenClaw config:

```json
{
  "agents": {
    "agi-core": {
      "floors": ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13"],
      "mcp": ["arifos", "filesystem", "github", "puppeteer", "fetch", "context7"]
    },
    "agi-linguistics": {
      "floors": ["F1", "F2", "F4", "F6", "F9", "F10", "F13"],
      "mcp": ["arifos", "filesystem", "github", "fetch", "context7"]
    },
    "agi-math": {
      "floors": ["F1", "F2", "F7", "F8", "F10", "F13"],
      "mcp": ["arifos", "filesystem", "github", "context7"],
      "python": ["sympy", "numpy", "scipy"]
    },
    "agi-physics": {
      "floors": ["F1", "F2", "F5", "F7", "F10", "F13"],
      "mcp": ["arifos", "filesystem", "github", "fetch", "context7"],
      "python": ["CoolProp", "numpy", "scipy"]
    }
  }
}
```

---

## Metrics & Observability

### Emergence Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **Cross-agent calls/hr** | Inter-agent communication rate | > 10 |
| **Tri-Witness pass rate** | F3 consensus success | > 95% |
| **VOID escalation rate** | How often agents hit blocks | < 5% |
| **Mean resolution depth** | Avg agent chain length | 2-3 |
| **Entropy reduction** | ΔS across pipeline | < 0 |

### Logging

All cross-agent calls logged to vault_seal:

```json
{
  "event": "cross_agent_call",
  "from": "agi-core",
  "to": "agi-math",
  "task": "compute eigenvalues",
  "verdict": "SEAL",
  "latency_ms": 450,
  "floors_checked": ["F2", "F7", "F8"]
}
```

---

## Next Steps

1. **Implement ConstitutionalAgent base class**
2. **Add cross-agent gating to AGI_ASI_bot**
3. **Create emergence metrics dashboard**
4. **Test with real multi-agent scenarios**

---

*DITEMPA BUKAN DIBERI* 🔥
