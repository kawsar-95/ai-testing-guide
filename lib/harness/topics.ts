/**
 * The one ordered list of the AI Harnesses topics. Each topic is served at
 * /harness/<slug>/ and has its text in content/harness/<slug>.mdx.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { HARNESS_UI } from "./ui.ts";

export type HarnessSlug =
  | "agent-loop"
  | "tool-calling"
  | "context-management"
  | "checkpointing"
  | "permissions-and-sandboxing"
  | "guardrails";

type TopicEntry = { slug: HarnessSlug; title: string; description: string };

const SOURCE: readonly TopicEntry[] = [
  {
    slug: "agent-loop",
    title: "Agent Loop",
    description: "The harness calls the model, runs the tools it asks for, and returns the results until the task is done.",
  },
  {
    slug: "tool-calling",
    title: "Tool Calling",
    description: "The model asks for an action by tool name and arguments. The harness checks it, runs it, and returns the result.",
  },
  {
    slug: "context-management",
    title: "Context Management",
    description: "What the model sees in each step, and what the harness does when the context window fills up.",
  },
  {
    slug: "checkpointing",
    title: "Checkpointing",
    description: "Save the state of the work outside the model, so the agent can rewind or resume after an interruption.",
  },
  {
    slug: "permissions-and-sandboxing",
    title: "Permissions and Sandboxing",
    description: "Which tools, files, and actions the agent can use, and where its commands run.",
  },
  {
    slug: "guardrails",
    title: "Guardrails",
    description: "Checks on inputs, outputs, and tool calls, and a pause for human approval before a risky action.",
  },
];

const entries: readonly FlatEntry<HarnessSlug>[] = SOURCE.map((entry) => ({ ...entry, kind: "topic" }));

export const HARNESS = defineFlatModule({
  id: "harness",
  label: "AI Harnesses",
  searchGroup: "harness",
  entries,
  ui: HARNESS_UI,
});
