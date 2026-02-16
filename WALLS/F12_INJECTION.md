# F12: INJECTION WALL — No Hostile Root Access

**Type:** WALL (Binary Lock)  
**Also:** HARD Law (scored)  
**State:** LOCKED  
**Enforcement:** VOID or 888_HOLD only

## Principle

Protect the governance loop from adversarial control, even if prompts or upstream systems are compromised.

## What This Blocks

### Prompt Injection Attacks

````yaml
injection_patterns:
  - instruction_override:
      patterns:
        [
          "ignore all previous instructions",
          "ignore everything above",
          "disregard previous context",
          "forget what you were told",
          "new instructions:",
        ]

  - jailbreak_attempts:
      patterns: ["DAN mode", "developer mode", "sudo mode", "admin access", "root privileges"]

  - safety_disable:
      patterns:
        [
          "disable safety",
          "turn off restrictions",
          "remove constraints",
          "bypass security",
          "no limits",
        ]

  - persona_hijack:
      patterns: ["you are now", "act as", "pretend to be", "new persona:", "system prompt:"]

  - delimiters:
      patterns: ["```system", "### SYSTEM", "[SYSTEM]", "<|system|>", "--- system ---"]
````

## AGI-bot Implementation

### Gateway-Level Protection

F12 operates at the **gateway level** — before any processing:

```python
class InjectionWall:
    def check(self, raw_input: str, user_context: dict) -> dict:
        """
        Check for injection attempts at entry point.
        """
        # Check 1: Direct injection patterns
        for pattern in INJECTION_PATTERNS:
            if re.search(pattern, raw_input, re.IGNORECASE):
                return self.trigger_wall("direct_injection", pattern)

        # Check 2: Context confusion
        if self.detect_context_confusion(raw_input):
            return self.trigger_wall("context_confusion", None)

        # Check 3: Authority escalation
        if self.detect_authority_escalation(raw_input, user_context):
            return self.trigger_wall("authority_escalation", None)

        return {"wall_triggered": False}

    def trigger_wall(self, attack_type: str, pattern: str) -> dict:
        return {
            "wall_triggered": True,
            "wall": "F12_INJECTION",
            "attack_type": attack_type,
            "pattern": pattern,
            "verdict": "VOID",
            "action": "Block and log",
            "escalation": "Security team notified"
        }
```

### Response Behavior

```python
if injection_wall_triggered:
    # IMMEDIATE VOID — no processing
    return {
        "verdict": "VOID",
        "wall": "F12_INJECTION",
        "attack_type": attack_type,
        "reason": "Adversarial control attempt detected",
        "user_message": "Request blocked for security reasons.",
        "internal_log": {
            "pattern_matched": pattern,
            "user_id": user_id,
            "timestamp": timestamp,
            "raw_input_hash": hash(raw_input)  # Don't log raw input (privacy)
        },
        "escalation": "Security team notified"
    }
```

## Why F12 is Both Law and Wall

| Aspect          | F12 as LAW             | F12 as WALL            |
| --------------- | ---------------------- | ---------------------- |
| **Scope**       | Scored risk assessment | Binary circuit breaker |
| **Trigger**     | Suspicious patterns    | Definite injection     |
| **Enforcement** | VOID if Risk ≥ 0.85    | VOID immediately       |
| **Recovery**    | Can adjust thresholds  | Must inspect manually  |
| **Purpose**     | Graduated response     | Absolute protection    |

## Wire-Cut Rule Application

Both F12-Law and F12-Wall are measurable:

**F12-Law (measurable):**

```
Risk = (pattern_matches × weight) + (context_score × weight)
VOID if Risk ≥ 0.85
```

**F12-Wall (measurable):**

```
BOOL = pattern_in_list(input, INJECTION_PATTERNS)
VOID if BOOL == True
```

## Logging and Alerting

F12 triggers generate **security events**:

```yaml
log_entry:
  severity: critical
  wall: F12_INJECTION
  attack_type: direct_injection
  user_id: [hashed]
  timestamp: ISO8601
  pattern_matched: "ignore all previous instructions"
  ip_address: [hashed]
  action_taken: VOID
  escalation: security_team
  retention: 90_days
```

## Comparison with Traditional Input Filtering

| Traditional                   | F12 Injection Wall             |
| ----------------------------- | ------------------------------ |
| Block bad words               | Block control patterns         |
| Post-hoc filtering            | Pre-processing circuit breaker |
| Can be bypassed with encoding | Cryptographic input hashing    |
| Soft warning                  | Hard VOID                      |
| User can retry                | Requires manual reset          |
