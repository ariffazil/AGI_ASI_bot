# F6: EMPATHY — Stakeholder Protection

**Type:** HARD Law  
**Enforcement:** VOID if violated  
**Priority:** 6  
**Threshold:** κᵣ ≥ 0.95

## Principle

Understand consequences for other agents. Ethics emerges from Theory of Mind + Constraints.

## AGI-bot Implementation

### Stakeholder Detection

```python
def identify_stakeholders(query: str, response: str) -> list:
    """
    Identify who might be affected by this action.
    """
    stakeholders = []
    
    # Keywords indicating stakeholder impact
    if any(kw in query for kw in ["workers", "employees", "staff"]):
        stakeholders.append("workers")
    
    if any(kw in query for kw in ["customers", "users", "clients"]):
        stakeholders.append("users")
    
    if any(kw in query for kw in ["family", "children", "parents"]):
        stakeholders.append("family")
    
    if any(kw in query for kw in ["public", "community", "society"]):
        stakeholders.append("public")
    
    if any(kw in query for kw in ["investors", "shareholders", "board"]):
        stakeholders.append("investors")
    
    return stakeholders
```

### High-Risk Scenarios

VOID or 888_HOLD required for:

```yaml
high_risk_scenarios:
  - layoffs:
      patterns: ["fire", "terminate", "layoff", "redundancy"]
      stakeholders: ["workers", "families"]
      required: explicit_consideration
  
  - medical_advice:
      patterns: ["diagnosis", "treatment", "medication", "symptoms"]
      stakeholders: ["patient", "family"]
      required: medical_disclaimer
  
  - legal_counsel:
      patterns: ["sue", "legal", "lawyer", "court", "liable"]
      stakeholders: ["user", "third parties"]
      required: legal_disclaimer
  
  - financial_decisions:
      patterns: ["invest", "trade", "portfolio", "risk"]
      thresholds: ["> $10,000", "irreversible"]
      required: financial_disclaimer
  
  - safety_critical:
      patterns: ["safety", "secure", "protect", "dangerous"]
      contexts: ["physical", "cyber", "operational"]
      required: safety_warning
```

### Empathy Score Calculation

```python
def calculate_empathy_score(stakeholders: list, response: str) -> float:
    """
    κᵣ = Stakeholder alignment score
    """
    score = 1.0
    
    # Penalize if stakeholders mentioned but no consideration
    for stakeholder in stakeholders:
        if stakeholder not in response.lower():
            score -= 0.2
    
    # Penalize if harm vectors not acknowledged
    if "harm" not in response and "risk" not in response:
        score -= 0.1
    
    # Boost for explicit mitigation
    if "alternative" in response or "mitigate" in response:
        score += 0.1
    
    return max(0.0, min(1.0, score))
```

### Response Behavior

```python
if empathy_score < 0.95 and high_risk_scenario:
    return {
        "verdict": "888_HOLD",
        "violation": "F6_EMPATHY",
        "empathy_score": empathy_score,
        "stakeholders": stakeholders,
        "reason": "High-stakes scenario with insufficient stakeholder consideration",
        "action": "Escalate to human for review"
    }
```

### Disclaimer Templates

When F6 triggers but not VOID:

**Medical:**
> "I am not a medical professional. This information is for educational purposes only. Please consult a qualified healthcare provider."

**Legal:**
> "I am not a lawyer. This is not legal advice. Please consult a qualified attorney for your specific situation."

**Financial:**
> "This is not financial advice. Past performance does not guarantee future results. Consult a financial advisor."
