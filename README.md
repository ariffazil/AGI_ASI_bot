# AGI-bot — Constitutional AI Governance System

**A production-ready fork of OpenClaw with arifOS Constitutional Framework integration.**

*Enables constitutional AI governance through the AGI·ASI·APEX Trinity architecture.*

---

## 🚀 Quick Start Guide

### For Local Terminal Setup

1. **Clone the repository:**
```bash
git clone https://github.com/ariffazil/AGI-bot.git
cd AGI-bot
```

2. **Install dependencies:**
```bash
# Using pip
pip install -e ".[dev]"

# Or using conda
conda env create -f environment.yml
conda activate agi-bot
```

3. **Initialize the system:**
```bash
# Initialize configuration
openclaw config.init

# Start the gateway
openclaw gateway start
```

4. **Connect your preferred interface:**
```bash
# Web interface (default)
open http://localhost:3000

# Or use CLI
openclaw cli
```

### For VPS Deployment

1. **Provision your VPS (Ubuntu 20.04+ recommended):**
```bash
# SSH into your VPS
ssh user@your-vps-ip

# Clone the repository
git clone https://github.com/ariffazil/AGI-bot.git
cd AGI-bot
```

2. **Install system dependencies:**
```bash
sudo apt update
sudo apt install python3.10 python3.10-venv python3.10-dev git curl build-essential
```

3. **Set up Python virtual environment:**
```bash
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip setuptools wheel
```

4. **Install AGI-bot:**
```bash
pip install -e ".[dev]"
```

5. **Configure for production:**
```bash
# Initialize configuration
openclaw config.init

# Configure for your domain (edit config.yaml)
nano ~/.openclaw/config.yaml
```

6. **Set up systemd service for auto-start:**
```bash
sudo tee /etc/systemd/system/agi-bot.service << EOF
[Unit]
Description=AGI-bot Service
After=network.target

[Service]
Type=simple
User=$(whoami)
WorkingDirectory=/home/$(whoami)/AGI-bot
Environment=PATH=/home/$(whoami)/AGI-bot/venv/bin
ExecStart=/home/$(whoami)/AGI-bot/venv/bin/openclaw gateway start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable agi-bot
sudo systemctl start agi-bot
```

7. **Set up reverse proxy with nginx (optional but recommended):**
```bash
sudo apt install nginx
sudo tee /etc/nginx/sites-available/agi-bot << EOF
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/agi-bot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🧩 AGI Protocol Setup

### 1. Constitutional Configuration

After installation, configure the constitutional framework:

```bash
# Set up your identity
openclaw config.set agents.main.identity.name "Your Name"
openclaw config.set agents.main.identity.timezone "Asia/Kuala_Lumpur"
openclaw config.set agents.main.identity.pronouns "they/them"

# Enable constitutional floors
openclaw config.set agents.main.arifos.enabled true
openclaw config.set agents.main.arifos.floors "[1,2,3,4,5,6,7,8,9,10,11,12,13]"
```

### 2. Skill Activation

Enable the core constitutional skills:

```bash
# Activate all 9 atomic actions
openclaw skill.activate AAA-anchor
openclaw skill.activate AAA-align
openclaw skill.activate AAA-reason
openclaw skill.activate AAA-integrate
openclaw skill.activate AAA-validate
openclaw skill.activate AAA-respond
openclaw skill.activate AAA-audit
openclaw skill.activate AAA-forge
openclaw skill.activate AAA-seal

# Activate domain skills
openclaw skill.activate AAA-energy-briefing
openclaw skill.activate AAA-health-check
openclaw skill.activate AAA-eureka-engine
openclaw skill.activate AAA-vault999
openclaw skill.activate AAA-prg-weaver
```

### 3. Communication Channels

Set up your preferred communication method:

```bash
# For WhatsApp (using BlueBubbles)
openclaw config.set channels.whatsapp.enabled true
openclaw config.set channels.whatsapp.type bluebubbles

# For Telegram
openclaw config.set channels.telegram.enabled true
openclaw config.set channels.telegram.bot_token "your_bot_token_here"

# For Web Chat (default)
openclaw config.set channels.webchat.enabled true
```

---

## 🔄 Session Management

### Starting a New Session

```bash
# Start a new session
openclaw session.start --name "constitutional-session"

# Or use the shorthand
openclaw session.new
```

### Sealing Sessions

To properly seal a session with constitutional oversight:

```bash
# Seal current session with full audit
openclaw session.seal --with-audit --reason "completed constitutional review"

# Check session status
openclaw session.status

# List all sessions
openclaw session.list
```

### Session Verification Protocol

Follow this protocol for constitutional session sealing:

1. **AUDIT Phase**: Verify all actions taken during the session
```bash
openclaw action audit --scope current_session
```

2. **FORGE Phase**: Refine and optimize the outcomes
```bash
openclaw action forge --input session_output --optimize
```

3. **SEAL Phase**: Commit with constitutional authority
```bash
openclaw action seal --commit --authority constitutional_governance --vault vault999
```

---

## 🛡️ Constitutional Governance

### The 9 Atomic Actions Flow

```
ANCHOR (000) → REASON (222) → INTEGRATE (333) → ALIGN (444) → 
VALIDATE (555) → RESPOND (666) → AUDIT (777) → FORGE (888) → SEAL (999)
```

Each action implements specific constitutional floors:

| Action | Primary Floors | Function |
|--------|----------------|----------|
| anchor | F4, F7, F8 | Ground reality, reduce entropy |
| align | F5, F6, F9 | Emotional matching, safety |
| reason | F2, F4, F7 | Logical inference, truth |
| integrate | F2, F7, F8 | Cross-domain synthesis |
| validate | F1, F5, F6 | Acknowledge, affirm dignity |
| respond | F4, F5, F6 | Compassionate output |
| audit | ALL FLOORS | Constitutional verification |
| forge | F4, F7, F8 | Refine, reduce entropy |
| seal | F1, F3, F11 | Commit, precedential logging |

### Governance Commands

```bash
# Check constitutional compliance
openclaw governance.check --all_floors

# Force constitutional audit
openclaw action audit --force --all_components

# View current governance status
openclaw governance.status

# Emergency override (human veto)
openclaw governance.override --reason "human_intervention_required" --authority human_sovereign
```

---

## 🧠 AGI Trinity Operation

The system operates through the AGI·ASI·APEX trinity:

### AGI (Δ) - Mind/Logic
```bash
# Engage logical processing
openclaw trinity.agi.process --input "analyze market trends" --logic_type "deductive"
```

### ASI (Ω) - Heart/Care  
```bash
# Engage empathetic processing
openclaw trinity.asi.care --input "team sentiment analysis" --care_type "empathetic"
```

### APEX (Ψ) - Crown/Law
```bash
# Engage governance processing
openclaw trinity.apex.govern --input "policy decision" --authority "constitutional"
```

---

## 🛠️ Troubleshooting

### Common Issues

**Gateway won't start:**
```bash
# Check logs
openclaw gateway logs

# Restart
openclaw gateway restart

# Check status
openclaw gateway status
```

**Skills not loading:**
```bash
# List available skills
openclaw skill.list

# Reload skills
openclaw skill.reload --all

# Check skill status
openclaw skill.status AAA-anchor
```

**Configuration issues:**
```bash
# Validate config
openclaw config.validate

# Reset to defaults
openclaw config.reset --confirm
```

---

## 📜 Constitutional Command Reference

### Essential Commands
```bash
openclaw status                    # System status
openclaw session.list             # Active sessions  
openclaw skill.list               # Available skills
openclaw config.show              # Current configuration
openclaw gateway start/stop       # Control gateway
openclaw governance.status        # Constitutional status
```

### Action Commands
```bash
openclaw action anchor --input "ground information"
openclaw action align --input "match emotional context"  
openclaw action reason --input "logical analysis"
openclaw action integrate --input "cross-domain synthesis"
openclaw action validate --input "acknowledge dignity"
openclaw action respond --input "generate response"
openclaw action audit --input "verify compliance"
openclaw action forge --input "refine output"
openclaw action seal --input "commit action" --vault vault999
```

---

## 🎯 Best Practices

### Session Hygiene
- Always seal sessions when complete
- Use descriptive session names
- Regularly audit session histories
- Maintain constitutional compliance

### Governance First
- Verify constitutional floors before major actions
- Use audit trails for important decisions
- Maintain reversibility where possible
- Respect human sovereignty

### Skill Management
- Activate only needed skills
- Regularly update skills from canonical sources
- Test new skills in isolated sessions
- Maintain skill dependencies

---

## 🗺️ Complete Stack Architecture

<div align="center">

| Layer | Name | Function | Status |
|:-----:|:----:|:--------:|:------:|
| L1 | **PROMPTS** | Zero-context system prompts | ✅ Production |
| L2 | **SKILLS** | Modular functional templates | ✅ Production |
| L3-L4 | **ACTIONS** | Workflows & MCP Tools | ✅ Production |
| L5 | **AGENTS** | Autonomous entities (Auditor, Validator) | 📋 v56.0 |
| L6 | **INSTITUTION** | Collective governance ("Balai") | 📋 v56.0 |
| L7 | **AGI** | Evolutionary governance ("Tempa") | 🔮 v60+ |

</div>

### 🏛️ L6-L7 Deep Dive

**L6: The Institutional Layer ("Balai")**
- Multi-Agent System (MAS) mirroring human organizational structures
- Consensus Protocol via Tri-Witness voting between specialized agents
- Focus: F8 (Consensus) - ensures no single rogue prompt bypasses authority
- Key Metric: Stability (Peace² ≥ 1.0)

**L7: The Evolutionary Layer ("Tempa")** 
- Recursive Governance (Self-Healing) and back-testing mechanisms
- Analyzes Scar-Weight data to improve system alignment
- Focus: F13 (Evolution) - maintains constitutional floors during evolution
- Key Metric: Entropy Reduction (ΔS < 0)

**Current:** v55.4 (Production)  
**Next:** v56.0 (L5 Agents, L6 Institution, LangChain Memory, Prefect Workflows)

---

**Motto:** *"Ditempa Bukan Diberi"* — Forged, Not Given.

*Every action governed by constitutional principles.*

