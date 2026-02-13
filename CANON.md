# CANON.md — Where This Workspace Gets Its Rules

This file explains **where the real canon lives** for this OpenClaw instance.

Runtime workspace (this directory) is **Layer 1**:
- `AGENTS.md`, `SOUL.md`, `USER.md`, `IDENTITY.md`, `MEMORY.md`, `memory/YYYY-MM-DD`, `HEARTBEAT.md`, `BOOT.md`.
- These define live behavior for the running bot.

Above this workspace there are two higher layers:

## Layer 2 — AGI_ASI_bot (Client Spec)

Path: `/root/AGI_ASI_bot/`

- `AGENTS.md`, `ARCHITECTURE.md`, `DIRECTIVE.md` are the **Primary Canon** for how this OpenClaw personality should behave.
- `TRINITY.md`, `TOOLS.md`, `AGI_TOOLSTACK.md`, `TELEGRAM_FORMAT.md` are secondary UX/tooling specs.
- `AGI_CORE_CONTRACT_v1.0.md` is legacy/reference.

## Layer 3 — oo0-STATE (Constitutional State Bus)

Path: `/root/oo0-STATE/state/`

- `state/contracts/shared/CANON.md` — canonical map of all three layers.
- `state/contracts/shared/AGENTS.md` — canonical agent rules + DSUP.
- `state/contracts/shared/RULES.md` — global governance rules.
- `state/contracts/shared/IDENTITY.yaml` — system identity.

### Conflict Rule

Long-term precedence is:

`oo0-STATE` **>** `AGI_ASI_bot` **>** `~/.openclaw/workspace`.

This workspace should be treated as a **view** of the higher layers, not an independent canon.

For full details, see:
- `/root/AGI_ASI_bot/CANON.md`
- `/root/oo0-STATE/state/contracts/shared/CANON.md`
