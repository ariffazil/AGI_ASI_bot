import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

export type ProjectName = "ARIF_FAZIL" | "ARIFOS" | "APEX_THEORY" | (string & {});

export type ProjectConfig = {
  name: ProjectName;
  source_repo?: string;
  priority_floors?: string[];
  allow_tools?: string[];
  notes?: string;
  prompt: string;
  memory: string;
  rootDir: string;
};

function readTextIfExists(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

export function getProjectRoot(projectName: ProjectName): string {
  const repoRoot = path.resolve(new URL("../../..", import.meta.url).pathname);
  return path.join(repoRoot, "projects", projectName);
}

export function loadProject(projectName?: ProjectName): ProjectConfig {
  const effectiveName =
    projectName ?? (process.env.AGI_PROJECT as ProjectName | undefined) ?? "ARIF_FAZIL";

  const rootDir = getProjectRoot(effectiveName);
  const configPath = path.join(rootDir, "config.yaml");
  const promptPath = path.join(rootDir, "PROMPT.md");
  const memoryPath = path.join(rootDir, "MEMORY.md");

  const rawConfig = readTextIfExists(configPath);
  const configObj = rawConfig ? (yaml.parse(rawConfig) as Record<string, unknown>) : {};

  const prompt = readTextIfExists(promptPath);
  const memory = readTextIfExists(memoryPath);

  return {
    name: (configObj.name as ProjectName) ?? effectiveName,
    source_repo: configObj.source_repo as string | undefined,
    priority_floors: (configObj.priority_floors as string[] | undefined) ?? [],
    allow_tools: (configObj.allow_tools as string[] | undefined) ?? [],
    notes: configObj.notes as string | undefined,
    prompt,
    memory,
    rootDir,
  };
}
