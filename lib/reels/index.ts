/**
 * The registry of the reels. A module has reels if it is a key here. The value maps the slug of a
 * page to its reels, in the order that the reader sees them. A flat module gets reels by adding one
 * data file and one line here: `FlatTopicPage` shows them with no change to the MDX. The Linux
 * stages and the Fundamentals chapters have their own page templates, which show the same block.
 */
import type { FlatModuleId } from "../modules/registry.ts";
import { AGENT_MEMORY_REELS } from "./agent-memory.ts";
import { AI_AGENTS_REELS } from "./ai-agents.ts";
import { AI_CONCEPTS_REELS } from "./ai-concepts.ts";
import { AI_ENGINEERING_REELS } from "./ai-engineering.ts";
import { AI_ML_TESTING_REELS } from "./ai-ml-testing.ts";
import { AI_SKILLS_REELS } from "./ai-skills.ts";
import { ARCHITECTURE_REELS } from "./architecture.ts";
import { FUNDAMENTALS_REELS } from "./fundamentals.ts";
import { HARNESS_REELS } from "./harness.ts";
import { LINUX_REELS } from "./linux.ts";
import type { Reel } from "./reels.ts";
import { SYSTEM_DESIGN_REELS } from "./system-design.ts";

type PageReels = Readonly<Record<string, readonly Reel[]>>;

/** The key of a module in `REELS`: a flat module, the Linux module, or the Fundamentals module. */
export type ReelModuleId = FlatModuleId | "linux" | "fundamentals";

export const REELS: Partial<Record<ReelModuleId, PageReels>> = {
  "system-design": SYSTEM_DESIGN_REELS,
  architecture: ARCHITECTURE_REELS,
  "ai-engineering": AI_ENGINEERING_REELS,
  harness: HARNESS_REELS,
  "ai-skills": AI_SKILLS_REELS,
  "ai-concepts": AI_CONCEPTS_REELS,
  "agent-memory": AGENT_MEMORY_REELS,
  "ai-agents": AI_AGENTS_REELS,
  "ai-ml-testing": AI_ML_TESTING_REELS,
  linux: LINUX_REELS,
  fundamentals: FUNDAMENTALS_REELS,
};

/** The reels of one page. A page or a module with none gives an empty list. */
export function reelsFor(moduleId: string, slug: string): readonly Reel[] {
  return (REELS as Record<string, PageReels | undefined>)[moduleId]?.[slug] ?? [];
}
