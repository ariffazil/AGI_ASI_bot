---
name: AAA-prg-weaver
description: Personal Research & Governance (PRG) automation and entropy management. Reduces cognitive load by connecting information, identifying contradictions, and maintaining knowledge graph integrity. Use for managing personal knowledge systems like Obsidian, Roam, or similar.
metadata:
  arifos:
    stage: 333_DELIBERATE
    trinity: AGI
    floors: [F2, F7, F8]
    version: 1.0.0
    atomic_composition: [anchor, integrate, reason, forge, audit]
    model_agnostic: true
    modular: true
    godel_lock: true
---

# AAA-prg-weaver

## Tagline
Personal Research & Governance (PRG) automation and entropy management

## Description
PRG-Weaver manages your personal research and governance systems by connecting information, identifying contradictions, and reducing cognitive entropy. Treats knowledge as a thermodynamic system where connections reduce entropy.

## Constitutional Alignment

| Aspect | Value |
|--------|-------|
| **Stage** | 333_DELIBERATE (Synthesis and connection) |
| **Engine** | AGI (Δ) — Mind/Logic |
| **Function** | Research connection, governance automation |
| **Floors** | F2 (Truth), F7 (Humility), F8 (Genius) |

## Physics
- **Graph Theory** — nodes and edges connectivity
- **Information Entropy** — reducing cognitive load
- **Network Science** — knowledge graph optimization

## Usage

```
/action pkb-weaver connect=new_info existing=related_nodes
/action pkb-weaver audit=entropy current_knowledge
/action pkb-weaver resolve=contradiction claim_a_vs_claim_b
/action pkb-weaver weave=knowledge_graph daily
```

## Implementation

```python
def prg_weaver(new_information, existing_knowledge):
    """
    Weave new information into existing knowledge graph.
    Returns refined knowledge structure with reduced entropy.
    """
    # ANCHOR: Ground new information
    grounded_new = anchor(new_information)
    
    # INTEGRATE: Connect to existing knowledge
    connections = find_connections(grounded_new, existing_knowledge)
    
    # REASON: Check for contradictions
    contradictions = detect_contradictions(grounded_new, existing_knowledge)
    
    # FORGE: Refine and reduce entropy
    refined_knowledge = forge(existing_knowledge, grounded_new, contradictions)
    
    # AUDIT: Check constitutional floors
    audit_result = audit(refined_knowledge, floors=[F2, F7, F8])
    
    if audit_result.verdict == Verdict.SEAL:
        return KnowledgeUpdate(
            additions=connections,
            contradictions=contradictions,
            entropy_reduction=compute_entropy_delta(existing_knowledge, refined_knowledge)
        )
    else:
        return Verdict.SABAR
```

## Returns

| Field | Type | Description |
|-------|------|-------------|
| `additions` | List | New connections made |
| `contradictions` | List | Detected contradictions |
| `entropy_reduction` | Float | Information entropy decrease |

## Knowledge Entropy Metrics

| Metric | Target | Action if Exceeded |
|--------|--------|-------------------|
| Orphan nodes | < 5% of total | Link or consolidate |
| Contradictions | 0 | Resolve immediately |
| Avg connections per node | > 2 | Improve connectivity |
| Daily entropy Δ | < 0 | Must reduce daily |

## PRG Automation Workflow

1. **Daily Weave**: Process new inputs (readings, thoughts, conversations)
2. **Connection Phase**: Link to existing nodes
3. **Contradiction Check**: Identify inconsistencies
4. **Refinement**: Reduce entropy through better organization
5. **Audit**: Verify against constitutional floors

## When to Use

- ✅ Adding new information to PRG system
- ✅ Detecting contradictions in research
- ✅ Connecting governance knowledge areas
- ✅ Reducing cognitive load through organization

## Governance Audit

- **Ω₀**: Computed from contradiction detection rate
- **F2 Truth**: Verify information accuracy
- **F7 Humility**: Acknowledge knowledge gaps
- **F8 Genius**: Optimize knowledge structure
- **Status**: PRG AUTOMATION TOOL
