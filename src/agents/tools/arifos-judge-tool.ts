import { Type } from "@sinclair/typebox";
import type { OpenClawConfig } from "../../config/config.js";
import type { AnyAgentTool } from "./common.js";
import { fetchWithSsrFGuard } from "../../infra/net/fetch-guard.js";
import { jsonResult, readStringParam } from "./common.js";

const ArifOSJudgeSchema = Type.Object({
  query: Type.String({ description: "The query to evaluate constitutionally" }),
  actor_id: Type.Optional(Type.String({ description: "Actor ID (default: 'user')" })),
  auth_token: Type.Optional(Type.String({ description: "Authentication token (optional)" })),
  mode: Type.Optional(
    Type.String({ description: "Mode: 'conscience' or 'ghost' (default: 'conscience')" }),
  ),
  stakeholders: Type.Optional(
    Type.Array(Type.String(), { description: "List of stakeholder identifiers" }),
  ),
  grounding: Type.Optional(Type.Array(Type.String(), { description: "Grounding context array" })),
  auto_seal: Type.Optional(
    Type.Boolean({ description: "Automatically seal verdict (default: false)" }),
  ),
  debug: Type.Optional(Type.Boolean({ description: "Enable debug output (default: false)" })),
});

function readBooleanParam(params: Record<string, unknown>, key: string): boolean | undefined {
  const raw = params[key];
  if (typeof raw === "boolean") {
    return raw;
  }
  if (typeof raw === "string") {
    const trimmed = raw.trim().toLowerCase();
    if (trimmed === "true") {
      return true;
    }
    if (trimmed === "false") {
      return false;
    }
  }
  return undefined;
}

export function createArifOSJudgeTool(options?: {
  config?: OpenClawConfig;
  baseUrl?: string;
}): AnyAgentTool | null {
  const baseUrl = options?.baseUrl ?? "http://localhost:8888";

  return {
    label: "ArifOS Judge",
    name: "arifos_judge",
    description:
      "Constitutional evaluation using arifOS 9-tool pipeline (ANCHOR→REASON→INTEGRATE→RESPOND→VALIDATE→ALIGN→FORGE→AUDIT→SEAL). Enforces 13 constitutional floors (F1-F13). Returns verdict with floor compliance analysis.",
    parameters: ArifOSJudgeSchema,
    execute: async (_toolCallId, args) => {
      const params = args as Record<string, unknown>;
      const query = readStringParam(params, "query", { required: true });
      const actorId = readStringParam(params, "actor_id") || "user";
      const authToken = readStringParam(params, "auth_token");
      const mode = readStringParam(params, "mode") || "conscience";
      const autoSeal = readBooleanParam(params, "auto_seal") || false;
      const debug = readBooleanParam(params, "debug") || false;

      // Build request payload for apex_judge endpoint
      const payload: Record<string, unknown> = {
        query,
        actor_id: actorId,
        mode,
        auto_seal: autoSeal,
        debug,
      };

      if (authToken) {
        payload.auth_token = authToken;
      }

      // Optional arrays
      const stakeholders = params.stakeholders;
      if (Array.isArray(stakeholders)) {
        payload.stakeholders = stakeholders;
      }

      const grounding = params.grounding;
      if (Array.isArray(grounding)) {
        payload.grounding = grounding;
      }

      const url = `${baseUrl}/tools/apex_judge`;

      try {
        const result = await fetchWithSsrFGuard({
          url,
          init: {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          },
          timeoutMs: 30000, // 30 seconds timeout
        });

        const responseText = await result.response.text();

        if (!result.response.ok) {
          return jsonResult({
            verdict: "VOID",
            error: `HTTP ${result.response.status}: ${responseText}`,
            tool_call_failed: true,
          });
        }

        let responseData: unknown;
        try {
          responseData = JSON.parse(responseText);
        } catch {
          return jsonResult({
            verdict: "VOID",
            error: `Invalid JSON response: ${responseText}`,
            tool_call_failed: true,
          });
        }

        return jsonResult(responseData);
      } catch (error) {
        return jsonResult({
          verdict: "VOID",
          error: `Request failed: ${error instanceof Error ? error.message : String(error)}`,
          tool_call_failed: true,
        });
      }
    },
  };
}
