/**
 * The one ordered list of the AI Engineering module. Every entry is a topic,
 * served at /ai-engineering/<slug>/ with its text in content/ai-engineering/<slug>.mdx.
 * The topic list follows "The AI Engineering Iceberg" by Jean Lee.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AI_ENGINEERING_UI } from "./ui.ts";

export type AiEngineeringSlug =
  | "prompt-engineering"
  | "calling-llm-apis"
  | "building-chatbots"
  | "using-langchain"
  | "rag-basics"
  | "ai-agents"
  | "vector-databases"
  | "fine-tuning"
  | "data-pipelines"
  | "retrieval-engineering"
  | "context-engineering"
  | "model-evaluation"
  | "agent-orchestration"
  | "tool-calling"
  | "structured-outputs"
  | "guardrails-and-safety"
  | "model-routing"
  | "observability"
  | "latency-optimization"
  | "cost-optimization"
  | "reliability-engineering"
  | "security"
  | "ai-infrastructure"
  | "ci-cd-for-ai"
  | "production-monitoring"
  | "human-in-the-loop"
  | "data-governance"
  | "system-design";

const parts = [
  { num: 1, title: "Above the waterline: what newcomers see" },
  { num: 2, title: "Below the waterline: what the work involves" },
] as const;

const entries: readonly FlatEntry<AiEngineeringSlug>[] = [
  { slug: "prompt-engineering", title: "Prompt Engineering", description: "Write clear prompts that give the model the task, the context, and the output format.", kind: "topic", part: 1 },
  { slug: "calling-llm-apis", title: "Calling LLM APIs", description: "Send a request to a model API such as Claude, GPT, or Gemini, and read the response.", kind: "topic", part: 1 },
  { slug: "building-chatbots", title: "Building Chatbots", description: "Keep the conversation history and send it with each turn.", kind: "topic", part: 1 },
  { slug: "using-langchain", title: "Using LangChain", description: "A framework that connects models, prompts, tools, and data sources.", kind: "topic", part: 1 },
  { slug: "rag-basics", title: "RAG Basics", description: "Retrieve the right documents and give them to the model, so it answers from your data.", kind: "topic", part: 1 },
  { slug: "ai-agents", title: "AI Agents", description: "A model that uses tools in a loop until the task is done.", kind: "topic", part: 1 },
  { slug: "vector-databases", title: "Vector Databases", description: "Store embeddings and find the nearest ones to a query.", kind: "topic", part: 1 },
  { slug: "fine-tuning", title: "Fine-Tuning Models", description: "Train a model more on your own examples to change its behavior.", kind: "topic", part: 1 },
  { slug: "data-pipelines", title: "Data Pipelines", description: "Ingest, clean, chunk, and enrich the data before the model sees it.", kind: "topic", part: 2 },
  { slug: "retrieval-engineering", title: "Retrieval Engineering", description: "Hybrid search, reranking, and metadata filters that find the right chunks.", kind: "topic", part: 2 },
  { slug: "context-engineering", title: "Context Engineering", description: "Select the right information for the context window at run time.", kind: "topic", part: 2 },
  { slug: "model-evaluation", title: "Model Evaluation", description: "Measure quality, accuracy, relevance, and task success with evals.", kind: "topic", part: 2 },
  { slug: "agent-orchestration", title: "Agent Orchestration", description: "Tools, workflows, memory, and many agents that work together.", kind: "topic", part: 2 },
  { slug: "tool-calling", title: "Tool Calling", description: "Tool schemas, permissions, retries, and validation of the tool input.", kind: "topic", part: 2 },
  { slug: "structured-outputs", title: "Structured Outputs", description: "Get reliable JSON that matches a schema, and parse it safely.", kind: "topic", part: 2 },
  { slug: "guardrails-and-safety", title: "Guardrails and Safety", description: "Prompt injection, abuse, and the policy controls that stop them.", kind: "topic", part: 2 },
  { slug: "model-routing", title: "Model Routing", description: "Choose a model for each request by cost, latency, and capability.", kind: "topic", part: 2 },
  { slug: "observability", title: "Observability", description: "Trace prompts, tool calls, tokens, and failures.", kind: "topic", part: 2 },
  { slug: "latency-optimization", title: "Latency Optimization", description: "Caching, batching, streaming, and parallel calls.", kind: "topic", part: 2 },
  { slug: "cost-optimization", title: "Cost Optimization", description: "Token budgets, smaller models, and smart routing.", kind: "topic", part: 2 },
  { slug: "reliability-engineering", title: "Reliability Engineering", description: "Fallbacks, retries, timeouts, and error handling.", kind: "topic", part: 2 },
  { slug: "security", title: "Security for AI Systems", description: "Authentication, secrets, permissions, and isolation.", kind: "topic", part: 2 },
  { slug: "ai-infrastructure", title: "AI Infrastructure", description: "APIs, containers, Kubernetes, and cloud deployment.", kind: "topic", part: 2 },
  { slug: "ci-cd-for-ai", title: "CI/CD for AI", description: "Test prompts, workflows, and models before each deployment.", kind: "topic", part: 2 },
  { slug: "production-monitoring", title: "Production Monitoring", description: "Drift, quality loss, usage, and incidents in production.", kind: "topic", part: 2 },
  { slug: "human-in-the-loop", title: "Human-in-the-Loop", description: "Approvals, escalation, and review workflows.", kind: "topic", part: 2 },
  { slug: "data-governance", title: "Data Governance", description: "Privacy, retention, access, and audit trails.", kind: "topic", part: 2 },
  { slug: "system-design", title: "System Design for AI", description: "Put the parts together into an AI system that scales.", kind: "topic", part: 2 },
];

export const AI_ENGINEERING = defineFlatModule({
  id: "ai-engineering",
  label: "AI Engineering",
  searchGroup: "ai engineering",
  parts,
  entries,
  progress: { storageKey: "ai-engineering-progress" },
  ui: AI_ENGINEERING_UI,
});
