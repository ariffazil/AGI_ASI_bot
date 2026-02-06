import fs from "node:fs";
import path from "node:path";
import { loadProject } from "../projects/index.js";

export type ProjectMemorySummary = {
  projectName: string;
  memoryPath: string;
  lineCount: number;
  charCount: number;
  preview: string;
};

/**
 * Basic instrument: summarize the active project's MEMORY.md file.
 *
 * This is intentionally model-agnostic: it does not call an LLM directly.
 * Higher layers can take the raw summary + project metadata and route it
 * through arifOS for SEAL/SABAR/VOID decisions.
 */
export function summarizeActiveProjectMemory(): ProjectMemorySummary {
  const project = loadProject();

  const memoryPath = path.join(project.rootDir, "MEMORY.md");
  let raw = "";
  try {
    raw = fs.readFileSync(memoryPath, "utf8");
  } catch {
    raw = "";
  }

  const lines = raw.split(/\r?\n/);
  const preview = lines.slice(0, 40).join("\n");

  return {
    projectName: project.name,
    memoryPath,
    lineCount: raw === "" ? 0 : lines.length,
    charCount: raw.length,
    preview,
  };
}
