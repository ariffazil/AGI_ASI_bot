# Canon 9 LLM Roster — Health Status

**Generated:** 2026-02-15 (updated)  
**Environment:** OpenClaw runtime on Hostinger VPS  
**Primary Provider:** Venice AI (key valid)  
**Health Check:** `scripts/canon9_healthcheck.ts` (Venice provider)

## Slot Mapping & Status

| Slot             | Provider | Model ID                        | Role | Cost Tier | Health  | Notes                                                    |
| ---------------- | -------- | ------------------------------- | ---- | --------- | ------- | -------------------------------------------------------- |
| `apex_claude`    | Venice   | `claude-opus-45`                | APEX | high      | ❌ FAIL | Thinking parameter unrecognized; API validation mismatch |
| `apex_kimi`      | Venice   | `kimi-k2-thinking`              | APEX | high      | ❌ FAIL | No reply (empty output)                                  |
| `apex_gemini`    | Venice   | `gemini-3-pro-preview`          | APEX | high      | ❌ FAIL | No reply (empty output)                                  |
| `agi_deepseek`   | Venice   | `deepseek-v3.2`                 | AGI  | medium    | ❌ FAIL | No reply (empty output)                                  |
| `agi_qwen`       | Venice   | `qwen3-235b-a22b-thinking-2507` | AGI  | medium    | ❌ FAIL | No reply (empty output)                                  |
| `agi_gpt`        | Venice   | `openai-gpt-52`                 | AGI  | high      | ❌ FAIL | No reply (empty output)                                  |
| `asi_minimax`    | Venice   | `minimax-m21`                   | ASI  | medium    | ✅ OK   | Responds correctly                                       |
| `asi_llama_free` | Venice   | `llama-3.3-70b`                 | ASI  | free      | ✅ OK   | Responds correctly                                       |
| `asi_glm_free`   | Venice   | `zai-org-glm-4.7`               | ASI  | free      | ❌ FAIL | No reply (empty output)                                  |

**Health Summary:** 2/9 models pass (Llama 3.3‑70B, MiniMax M2.1). Venice API key works but many models return empty replies or require specific parameters.

## Configuration Files Updated

1. **`routing.json`** – Updated Canon‑9 routes to use Venice provider:
   - `canon9_apex` → `venice/claude-opus-45` (witness: `venice/gemini-3-pro-preview`)
   - `canon9_agi` → `venice/deepseek-v3.2` (fallback: `venice/qwen3-235b-a22b-thinking-2507`)
   - `canon9_asi` → `venice/minimax-m21` (fallback: `venice/llama-3.3-70b`)

2. **`canon9-models.json`** – Updated provider to `venice` and model IDs to Venice catalog IDs.

3. **`projects/ARIFOS/config.yaml`** – Added Canon 9 integration note.

4. **`scripts/canon9_healthcheck.ts`** – Extended to support Venice provider with configurable payload.

5. **Telegram extension enabled** – Moved `extensions/telegram.disabled` → `extensions/telegram`.

## Environment Keys Checked

| Key                  | Present | Masked                                 | Source                        |
| -------------------- | ------- | -------------------------------------- | ----------------------------- |
| `VENICE_API_KEY`     | ✅      | `VENI***‑xOvnasGJJazP`                 | `/root/.env.master`           |
| `OPENROUTER_API_KEY` | ✅      | `sk‑o***4743`                          | `/root/.env.master` (invalid) |
| `TELEGRAM_BOT_TOKEN` | ✅      | `8149***ACKBto`                        | `/root/.env.master`           |
| `ANTHROPIC_API_KEY`  | ✅      | `sk‑ant‑***VAAA`                       | `/root/.env.master`           |
| `GEMINI_API_KEY`     | ✅      | `AIza***kvI`                           | `/root/.env.master`           |
| `OPENAI_API_KEY`     | ✅      | `sk‑proj***_kQA`                       | `/root/.env.master`           |
| `DEEPSEEK_API_KEY`   | ✅      | `sk‑657***1014`                        | `/root/.env.openclaw`         |
| `MINIMAX_API_KEY`    | ✅      | `sk‑api‑***3drpldIIaXI6KJV5Yjbqp8FQQ0` | `/root/.env.openclaw`         |

## Issues Identified

1. **Venice model quirks** – Claude Opus requires `thinking` parameter with `budget_tokens`, but Venice API rejects the field. GPT‑5.2 expects `max_output_tokens` but also rejects. Likely Venice uses different parameter names per model (private vs anonymized). Need to consult Venice documentation.

2. **Empty replies from many models** – Models like DeepSeek V3.2, Qwen3 Thinking, Gemini 3 Pro return empty content for the simple “Reply with FORGED” prompt. Might be due to moderation filters or prompt formatting. Could test with more natural prompts.

3. **Telegram chat ID still missing** – `TELEGRAM_CHAT_ID` not set; cannot send test message. Need to pair bot with a Telegram user/group.

4. **OpenRouter key invalid** – Key returns 401; can be ignored as Venice is primary.

## Recommended Actions

1. **Venice parameter tuning** – Experiment with payloads (remove `thinking`, adjust `max_tokens`, use different prompt) for failing models. Use Venice catalog’s `reasoning` flag to decide parameters.

2. **Test with actual OpenClaw tasks** – Run a simple Canon‑9 routed task (e.g., `canon9_apex` audit) to verify routing works end‑to‑end.

3. **Configure Telegram chat ID** – Obtain chat ID from Telegram (e.g., via `@userinfobot`) and set `TELEGRAM_CHAT_ID` in environment.

4. **Run full integration test** – Use OpenClaw CLI to send a Telegram message through the enabled extension, using a Canon‑9 model.

## Integration Status

- ✅ Slot mapping defined (`canon9‑models.json`) – updated to Venice
- ✅ Routing updated (`routing.json`) – Venice provider routes
- ✅ Environment loading script ready – supports Venice & OpenRouter
- ⚠️ Model health (2/9) – Llama 3.3‑70B and MiniMax M2.1 operational
- ⚠️ Telegram extension enabled – bot token present, chat ID missing

**Next Step:** Fine‑tune Venice API parameters and test with real tasks. Obtain Telegram chat ID and send test message.

---

_Report generated by OpenClaw agent on `2026‑02‑15`_
