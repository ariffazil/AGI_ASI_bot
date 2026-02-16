#!/usr/bin/env tsx
/**
 * Canon 9 LLM roster health check using OpenClaw's internal probe.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseModelRef } from "../src/agents/model-selection.js";
import { runAuthProbes, type AuthProbeResult } from "../src/commands/models/list.probe.js";
import { loadConfig } from "../src/config/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

interface Canon9Slot {
  slot: string;
  provider: string;
  modelId: string;
  role: string;
  costTier: string;
  enabled: boolean;
  description: string;
}

interface HealthResult {
  slot: string;
  modelId: string;
  status: "OK" | "FAIL" | "MISSING_KEY";
  error?: string;
  responseTimeMs?: number;
  provider?: string;
  timestamp: string;
}

function mapCanon9ProviderToOpenClaw(provider: string): string {
  // Canon9 uses 'venice' or 'openrouter' directly, matches OpenClaw provider keys
  return provider;
}

async function main() {
  console.log("🔍 Canon 9 health check (OpenClaw probe) starting...");
  const cfg = loadConfig();
  const canon9Path = path.join(ROOT, "canon9-models.json");
  const raw = await fs.readFile(canon9Path, "utf8");
  const data = JSON.parse(raw);
  const slots: Canon9Slot[] = data.slots;

  const enabledSlots = slots.filter((s) => s.enabled);
  const modelCandidates = enabledSlots.map((s) => `${s.provider}/${s.modelId}`);
  const providers = Array.from(new Set(enabledSlots.map((s) => s.provider)));

  console.log(`   Testing ${enabledSlots.length} slots across providers: ${providers.join(", ")}`);

  const probeResults = await runAuthProbes({
    cfg,
    providers,
    modelCandidates,
    options: {
      timeoutMs: 15000,
      concurrency: 2,
      maxTokens: 8,
    },
  });

  // Map probe results to Canon9 slots
  const results: HealthResult[] = [];
  // Group probes by provider
  const providerProbes = new Map<string, AuthProbeResult[]>();
  for (const probe of probeResults.results) {
    const list = providerProbes.get(probe.provider) || [];
    list.push(probe);
    providerProbes.set(probe.provider, list);
  }
  for (const slot of enabledSlots) {
    const fullId = `${slot.provider}/${slot.modelId}`;
    const probe = probeResults.results.find((r) => r.model === fullId);
    if (probe) {
      // Direct probe result
      const status = probe.status === "ok" ? "OK" : "FAIL";
      results.push({
        slot: slot.slot,
        modelId: slot.modelId,
        status,
        error: probe.error,
        responseTimeMs: probe.latencyMs,
        provider: slot.provider,
        timestamp: new Date().toISOString(),
      });
      continue;
    }
    // No direct probe; check if provider has any OK probe
    const providerProbesList = providerProbes.get(slot.provider) || [];
    const anyOk = providerProbesList.some((p) => p.status === "ok");
    if (anyOk) {
      // Provider auth works, assume model accessible
      results.push({
        slot: slot.slot,
        modelId: slot.modelId,
        status: "OK",
        error: "Provider auth OK (model not probed individually)",
        provider: slot.provider,
        timestamp: new Date().toISOString(),
      });
    } else {
      // No auth for provider
      results.push({
        slot: slot.slot,
        modelId: slot.modelId,
        status: "MISSING_KEY",
        error: "No auth profile or API key found",
        provider: slot.provider,
        timestamp: new Date().toISOString(),
      });
    }
  }

  const logsDir = path.join(ROOT, "logs");
  await fs.mkdir(logsDir, { recursive: true });
  const outputPath = path.join(logsDir, "canon9_health.json");
  await fs.writeFile(outputPath, JSON.stringify(results, null, 2));
  console.log(`📊 Results written to ${outputPath}`);

  // Summary
  const ok = results.filter((r) => r.status === "OK").length;
  const fail = results.filter((r) => r.status === "FAIL").length;
  const missing = results.filter((r) => r.status === "MISSING_KEY").length;
  console.log(`\n📈 Summary: ${ok} OK, ${fail} FAIL, ${missing} MISSING_KEY`);
  process.exit(fail + missing > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
