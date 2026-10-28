/**
 * The one ordered list of the Agent Memory module. Every entry is a topic,
 * served at /agent-memory/<slug>/ with its text in content/agent-memory/<slug>.mdx.
 * The 7 types follow the infographic "7 Types of Agent Memory" by Neo Kim and Telnyx.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AGENT_MEMORY_UI } from "./ui.ts";

export type AgentMemorySlug =
  | "working-memory"
  | "semantic-memory"
  | "episodic-memory"
  | "procedural-memory"
  | "retrieval-memory"
  | "parametric-memory"
  | "prospective-memory";

const entries: readonly FlatEntry<AgentMemorySlug>[] = [
  { slug: "working-memory", title: "Working Memory", description: "What the agent holds right now: the context window of the current task.", kind: "topic" },
  { slug: "semantic-memory", title: "Semantic Memory", description: "Facts the agent keeps about the world, the user, and the project.", kind: "topic" },
  { slug: "episodic-memory", title: "Episodic Memory", description: "Records of past runs that the agent can look back on.", kind: "topic" },
  { slug: "procedural-memory", title: "Procedural Memory", description: "How the agent does things: its instructions, skills, and code.", kind: "topic" },
  { slug: "retrieval-memory", title: "Retrieval Memory", description: "An external store that the agent searches and reads into its context.", kind: "topic" },
  { slug: "parametric-memory", title: "Parametric Memory", description: "The knowledge that training put into the weights of the model.", kind: "topic" },
  { slug: "prospective-memory", title: "Prospective Memory", description: "Remember to do a task later: reminders, schedules, and open tasks.", kind: "topic" },
];

export const AGENT_MEMORY = defineFlatModule({
  id: "agent-memory",
  label: "Agent Memory",
  searchGroup: "agent memory",
  entries,
  progress: { storageKey: "agent-memory-progress" },
  ui: AGENT_MEMORY_UI,
});
