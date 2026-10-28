/**
 * The one ordered list of the AI Skills module. Every entry is a topic, served
 * at /ai-skills/<slug>/ with its text in content/ai-skills/<slug>.mdx. The
 * parts are the 4 tiers of the skill list, from the fastest payoff to the
 * specialist skills.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AI_SKILLS_UI } from "./ui.ts";

export type AiSkillsSlug =
  | "prompting"
  | "context-engineering"
  | "ai-research"
  | "workflow-automation"
  | "ai-agents"
  | "rag"
  | "data-enrichment"
  | "vibe-coding"
  | "mcp-connectors"
  | "ai-evals"
  | "meeting-intelligence"
  | "ai-data-analysis"
  | "ai-video"
  | "voice-and-avatars"
  | "decks-and-design"
  | "ai-governance"
  | "fine-tuning"
  | "open-models"
  | "voice-agents"
  | "image-generation";

const parts = [
  { num: 1, title: "Learn first" },
  { num: 2, title: "This quarter" },
  { num: 3, title: "Role-specific" },
  { num: 4, title: "Specialist" },
] as const;

const entries: readonly FlatEntry<AiSkillsSlug>[] = [
  { slug: "prompting", title: "Prompting", description: "Write clear briefs so that the model gives better output.", kind: "topic", part: 1 },
  { slug: "context-engineering", title: "Context Engineering", description: "Give the model the right background once, so that every answer uses it.", kind: "topic", part: 1 },
  { slug: "ai-research", title: "AI Research", description: "Use AI search and deep research tools, and check what they cite.", kind: "topic", part: 1 },
  { slug: "workflow-automation", title: "Workflow Automation", description: "Connect apps and AI steps into a workflow that runs without you.", kind: "topic", part: 1 },
  { slug: "ai-agents", title: "AI Agents", description: "Let a model use tools in a loop to finish one task.", kind: "topic", part: 2 },
  { slug: "rag", title: "Your Own Data (RAG)", description: "Make the model answer from your own documents with retrieval.", kind: "topic", part: 2 },
  { slug: "data-enrichment", title: "Data Enrichment at Scale", description: "Add data to many records at a time with AI and data providers.", kind: "topic", part: 2 },
  { slug: "vibe-coding", title: "Vibe Coding", description: "Build small tools by describing them to an AI coding tool.", kind: "topic", part: 2 },
  { slug: "mcp-connectors", title: "MCP Connectors", description: "Connect an AI app to your tools and data with the Model Context Protocol.", kind: "topic", part: 2 },
  { slug: "ai-evals", title: "Checking AI Quality (Evals)", description: "Test AI output with a fixed set of real cases before you ship it.", kind: "topic", part: 2 },
  { slug: "meeting-intelligence", title: "Meeting Intelligence", description: "Record, transcribe, and summarize meetings, and find patterns in them.", kind: "topic", part: 3 },
  { slug: "ai-data-analysis", title: "AI Data Analysis", description: "Ask questions of a data file in plain words, and check one number by hand.", kind: "topic", part: 3 },
  { slug: "ai-video", title: "AI Video", description: "Edit and make video with AI tools.", kind: "topic", part: 3 },
  { slug: "voice-and-avatars", title: "Voice and Avatars", description: "Make AI voices and video avatars, and always tell people that they are AI.", kind: "topic", part: 3 },
  { slug: "decks-and-design", title: "Decks and Design", description: "Let AI make a first draft of slides and designs, and keep the story yours.", kind: "topic", part: 3 },
  { slug: "ai-governance", title: "AI Governance", description: "Set the rules for AI use: data, access, and records.", kind: "topic", part: 3 },
  { slug: "fine-tuning", title: "Fine-Tuning", description: "Train a model further on your own labeled examples, and know when not to.", kind: "topic", part: 4 },
  { slug: "open-models", title: "Open Models", description: "Run an open-weight model on your own machines when data rules require it.", kind: "topic", part: 4 },
  { slug: "voice-agents", title: "Voice Agents", description: "AI agents that talk with people on the phone or in an app.", kind: "topic", part: 4 },
  { slug: "image-generation", title: "Image Generation", description: "Make images from text, and know the limits.", kind: "topic", part: 4 },
];

export const AI_SKILLS = defineFlatModule({
  id: "ai-skills",
  label: "AI Skills",
  searchGroup: "ai skills",
  parts,
  entries,
  progress: { storageKey: "ai-skills-progress" },
  ui: AI_SKILLS_UI,
});
