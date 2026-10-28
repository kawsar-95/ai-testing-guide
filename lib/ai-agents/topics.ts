/**
 * The one ordered list of the How AI Agents Work module. Every entry is a topic,
 * served at /ai-agents/<slug>/ with its text in content/ai-agents/<slug>.mdx.
 * The topics follow the infographic "How AI Agents Work" by Basia Kubicka.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AI_AGENTS_UI } from "./ui.ts";

export type AiAgentsSlug =
  | "agent-basics"
  | "trigger"
  | "build-context"
  | "llm-decides"
  | "act-with-tools"
  | "stop-check"
  | "memory"
  | "guardrails"
  | "observability-and-evals"
  | "final-output";

const entries: readonly FlatEntry<AiAgentsSlug>[] = [
  { slug: "agent-basics", title: "What an AI Agent Is", description: "An agent is a model plus a harness that runs a loop.", kind: "topic" },
  { slug: "trigger", title: "Trigger", description: "What starts a run: a user, an event, a schedule, or another agent.", kind: "topic" },
  { slug: "build-context", title: "Build Context", description: "What the harness puts in front of the model on each turn.", kind: "topic" },
  { slug: "llm-decides", title: "The LLM Decides", description: "The model reasons and picks the next action: an answer or a tool call.", kind: "topic" },
  { slug: "act-with-tools", title: "Act with Tools", description: "The harness runs the tool that the model asked for and returns the result.", kind: "topic" },
  { slug: "stop-check", title: "The Stop Check", description: "Answer now or go again: how and when the loop ends.", kind: "topic" },
  { slug: "memory", title: "Memory", description: "Short-term memory is the context window. Long-term memory is a store.", kind: "topic" },
  { slug: "guardrails", title: "Guardrails", description: "Permissions, approval, limits, and retries that wrap every action.", kind: "topic" },
  { slug: "observability-and-evals", title: "Observability and Evals", description: "Traces, logs, cost, and latency, and evals that ask if the output is good.", kind: "topic" },
  { slug: "final-output", title: "Final Output", description: "How a run ends: an answer, an action taken, or a handoff.", kind: "topic" },
];

export const AI_AGENTS = defineFlatModule({
  id: "ai-agents",
  label: "How AI Agents Work",
  searchGroup: "ai agents",
  entries,
  progress: { storageKey: "ai-agents-progress" },
  ui: AI_AGENTS_UI,
});
