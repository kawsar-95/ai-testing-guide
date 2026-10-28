/**
 * The one ordered list of the AI Concepts module. Every entry is a topic,
 * served at /ai-concepts/<slug>/ with its text in content/ai-concepts/<slug>.mdx.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AI_CONCEPTS_UI } from "./ui.ts";

export type AiConceptsSlug =
  | "agentic-loops"
  | "mcp"
  | "subagents"
  | "ai-gateway"
  | "inference-economics"
  | "evals"
  | "guardrails"
  | "observability"
  | "agent-harness";

const entries: readonly FlatEntry<AiConceptsSlug>[] = [
  { slug: "agentic-loops", title: "Agentic Loops", description: "An agent gathers context, acts, checks its work, and repeats until a stop rule ends the loop.", kind: "topic" },
  { slug: "mcp", title: "Model Context Protocol (MCP)", description: "One open protocol that connects an agent to many tools and data sources.", kind: "topic" },
  { slug: "subagents", title: "Subagents and Multi-Agent Systems", description: "One job per agent, each with its own clean context, and an orchestrator that merges the results.", kind: "topic" },
  { slug: "ai-gateway", title: "AI Gateways", description: "One control point between your apps and the model providers: auth, routing, fallbacks, budgets, and logs.", kind: "topic" },
  { slug: "inference-economics", title: "Inference Economics", description: "Price the finished task, not the single call: tokens, caching, batching, and effort.", kind: "topic" },
  { slug: "evals", title: "Evals", description: "Grade the whole agent run, not just the final answer, with code checks, model judges, and human review.", kind: "topic" },
  { slug: "guardrails", title: "Guardrails", description: "The model asks; your rules decide. Least privilege, sandboxes, and human approval for risky actions.", kind: "topic" },
  { slug: "observability", title: "Observability for AI Agents", description: "Trace every step of an agent run, and fix problems with evidence.", kind: "topic" },
  { slug: "agent-harness", title: "The Agent Harness", description: "Same model, better harness, better agent: context, tools, permissions, sandbox, checks, and recovery.", kind: "topic" },
];

export const AI_CONCEPTS = defineFlatModule({
  id: "ai-concepts",
  label: "AI Concepts",
  searchGroup: "ai concepts",
  entries,
  progress: { storageKey: "ai-concepts-progress" },
  ui: AI_CONCEPTS_UI,
});
