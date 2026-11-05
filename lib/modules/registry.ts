/**
 * The registry of the flat modules, in the order of the site: System Design,
 * Architecture, the Course, k6, AI Engineering, AI Harnesses, AI Skills, AI Concepts, Agent Memory, How AI Agents Work, AI/ML Testing, then DevOps & Cloud. The module files must not import this file.
 */
import { AGENT_MEMORY } from "../agent-memory/topics.ts";
import { AI_AGENTS } from "../ai-agents/topics.ts";
import { AI_CONCEPTS } from "../ai-concepts/topics.ts";
import { AI_ENGINEERING } from "../ai-engineering/topics.ts";
import { AI_ML_TESTING } from "../ai-ml-testing/topics.ts";
import { AI_SKILLS } from "../ai-skills/topics.ts";
import { ARCHITECTURE } from "../architecture/topics.ts";
import { COURSE } from "../course/topics.ts";
import { DEVOPS } from "../devops/topics.ts";
import { HARNESS } from "../harness/topics.ts";
import { K6 } from "../k6/topics.ts";
import { SYSTEM_DESIGN } from "../system-design/cases.ts";

export { AGENT_MEMORY, AI_AGENTS, AI_CONCEPTS, AI_ENGINEERING, AI_ML_TESTING, AI_SKILLS, ARCHITECTURE, COURSE, DEVOPS, HARNESS, K6, SYSTEM_DESIGN };

export const FLAT_MODULES = [SYSTEM_DESIGN, ARCHITECTURE, COURSE, K6, AI_ENGINEERING, HARNESS, AI_SKILLS, AI_CONCEPTS, AGENT_MEMORY, AI_AGENTS, AI_ML_TESTING, DEVOPS] as const;

export type FlatModuleId = (typeof FLAT_MODULES)[number]["id"];

/** The flat modules with a progress store, in registry order. */
export const PROGRESS_MODULES = FLAT_MODULES.filter((m) => m.progress);
