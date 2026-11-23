/**
 * The AI roadmaps: for each AI module, the stages from the first page to the last, and one master path that reads
 * every stage once. A roadmap only points at pages. It does not move, rename, or renumber a page, so the order of a
 * module and its URLs stay as they are. `tests/ai-roadmap.test.ts` checks that each page is in exactly one stage and
 * that the master path uses each stage exactly once.
 */

export const AI_ROADMAP_HOME = "/ai-roadmap/";

export type RoadmapId =
  | "ai-skills"
  | "ai-agents"
  | "ai-concepts"
  | "harness"
  | "agent-memory"
  | "ai-engineering"
  | "ai-ml-testing"
  | "agentic-qa";

export type Stage = {
  title: string;
  /** What the reader can do after the stage. */
  outcome: string;
  /** What to know before the stage. */
  needs: string;
  /** Page slugs in reading order. */
  pages: readonly string[];
};

export type Roadmap = {
  id: RoadmapId;
  title: string;
  summary: string;
  stages: readonly Stage[];
};

export const ROADMAPS: readonly Roadmap[] = [
  {
    id: "ai-skills",
    title: "AI Skills",
    summary: "From everyday AI use to specialist work, in six stages.",
    stages: [
      {
        title: "Everyday AI",
        outcome: "Brief a model well, give it background once, check what a research tool cites, and connect apps into a workflow.",
        needs: "Nothing.",
        pages: ["prompting", "context-engineering", "ai-research", "workflow-automation"],
      },
      {
        title: "Build with AI",
        outcome: "Let a model use tools, answer from your own documents, build a small tool by describing it, and connect it to your apps.",
        needs: "Stage 1.",
        pages: ["ai-agents", "rag", "mcp-connectors", "vibe-coding", "data-enrichment"],
      },
      {
        title: "Trust the output",
        outcome: "Test AI output on a fixed set of real cases, and set the rules for data, access, and records.",
        needs: "Stage 2.",
        pages: ["ai-evals", "ai-governance"],
      },
      {
        title: "Apply it to your job",
        outcome: "Turn meetings, data files, and slides into first drafts that you check and own.",
        needs: "Stage 1.",
        pages: ["meeting-intelligence", "ai-data-analysis", "decks-and-design"],
      },
      {
        title: "Media and voice",
        outcome: "Make video, voices, avatars, and images with AI tools, and know their limits.",
        needs: "Stage 1.",
        pages: ["ai-video", "voice-and-avatars", "image-generation", "voice-agents"],
      },
      {
        title: "Own the model",
        outcome: "Decide when to train a model further or run an open-weight model on your own machines.",
        needs: "Stages 2 and 3.",
        pages: ["fine-tuning", "open-models"],
      },
    ],
  },
  {
    id: "ai-agents",
    title: "How AI Agents Work",
    summary: "The loop of an agent, one step at a time.",
    stages: [
      {
        title: "The idea",
        outcome: "Say what an agent is and what starts a run.",
        needs: "Nothing.",
        pages: ["agent-basics", "trigger"],
      },
      {
        title: "The loop",
        outcome: "Follow one turn: what the model sees, what it decides, how a tool runs, and when the loop stops.",
        needs: "Stage 1.",
        pages: ["build-context", "llm-decides", "act-with-tools", "stop-check"],
      },
      {
        title: "Around the loop",
        outcome: "Name the memory, the limits, the traces, and the endings that surround every run.",
        needs: "Stage 2.",
        pages: ["memory", "guardrails", "observability-and-evals", "final-output"],
      },
    ],
  },
  {
    id: "ai-concepts",
    title: "AI Concepts",
    summary: "Nine ideas behind agent systems, from the loop to the cost.",
    stages: [
      {
        title: "Loops and tools",
        outcome: "Explain an agentic loop, the Model Context Protocol, and why one agent is split into subagents.",
        needs: "Nothing. The How AI Agents Work roadmap helps.",
        pages: ["agentic-loops", "mcp", "subagents"],
      },
      {
        title: "Run it",
        outcome: "Describe the harness around a model, the gateway between apps and providers, and what a finished task costs.",
        needs: "Stage 1.",
        pages: ["agent-harness", "ai-gateway", "inference-economics"],
      },
      {
        title: "Trust it",
        outcome: "Grade a whole run, limit what an agent may do, and trace every step.",
        needs: "Stage 2.",
        pages: ["guardrails", "evals", "observability"],
      },
    ],
  },
  {
    id: "harness",
    title: "AI Harnesses",
    summary: "What surrounds the model: the loop, the tools, the context, and the safety.",
    stages: [
      {
        title: "The core",
        outcome: "Read how a harness runs the loop, runs a tool, and manages a full context window.",
        needs: "What an agent is.",
        pages: ["agent-loop", "tool-calling", "context-management"],
      },
      {
        title: "Safe and recoverable",
        outcome: "Save and restore state, set permissions and a sandbox, and add checks and approval.",
        needs: "Stage 1.",
        pages: ["checkpointing", "permissions-and-sandboxing", "guardrails"],
      },
    ],
  },
  {
    id: "agent-memory",
    title: "Agent Memory",
    summary: "The seven kinds of memory of an agent, from the current step to a future task.",
    stages: [
      {
        title: "Short-term",
        outcome: "Say what the agent holds in the current step.",
        needs: "What a context window is.",
        pages: ["working-memory"],
      },
      {
        title: "Long-term stores",
        outcome: "Tell facts, past runs, and ways of working apart, and say where each one lives.",
        needs: "Stage 1.",
        pages: ["semantic-memory", "episodic-memory", "procedural-memory"],
      },
      {
        title: "Access and future",
        outcome: "Explain search into an external store, knowledge in the weights, and a task to do later.",
        needs: "Stage 2.",
        pages: ["retrieval-memory", "parametric-memory", "prospective-memory"],
      },
    ],
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    summary: "From the first model call to a system that runs in production, in five stages.",
    stages: [
      {
        title: "Call a model",
        outcome: "Write a prompt, call a model API, get structured output, let the model call a tool, and keep a conversation.",
        needs: "Basic programming.",
        pages: ["prompt-engineering", "calling-llm-apis", "structured-outputs", "tool-calling", "building-chatbots", "using-langchain"],
      },
      {
        title: "Your data",
        outcome: "Prepare data, store embeddings, retrieve the right chunks, and choose what enters the context window.",
        needs: "Stage 1.",
        pages: ["rag-basics", "vector-databases", "data-pipelines", "retrieval-engineering", "context-engineering"],
      },
      {
        title: "Agents",
        outcome: "Build an agent, coordinate several, add human review, route requests between models, and decide about fine-tuning.",
        needs: "Stages 1 and 2.",
        pages: ["ai-agents", "agent-orchestration", "human-in-the-loop", "model-routing", "fine-tuning"],
      },
      {
        title: "Quality and safety",
        outcome: "Measure quality, block abuse and prompt injection, protect secrets and data, and handle failures.",
        needs: "Stage 3.",
        pages: ["model-evaluation", "guardrails-and-safety", "security", "reliability-engineering", "data-governance"],
      },
      {
        title: "Run in production",
        outcome: "Trace and monitor a live system, cut latency and cost, deploy it, test it before each release, and design the whole.",
        needs: "Stage 4.",
        pages: ["observability", "production-monitoring", "latency-optimization", "cost-optimization", "ai-infrastructure", "ci-cd-for-ai", "system-design"],
      },
    ],
  },
  {
    id: "ai-ml-testing",
    title: "AI/ML Testing",
    summary: "From what a tester checks in a model to two capstone projects, in ten stages.",
    stages: [
      {
        title: "What you test",
        outcome: "Say how a model differs from other code, what tokens and temperature change, and where each layer of an AI feature can be tested.",
        needs: "Testing basics.",
        pages: ["ai-ml-for-testers", "llm-tokens-temperature", "ai-application-architecture"],
      },
      {
        title: "Prompts and structured output",
        outcome: "Write a prompt, break it on purpose, and test JSON and function calls.",
        needs: "Stage 1.",
        pages: ["prompt-engineering-basics", "prompt-testing", "structured-outputs"],
      },
      {
        title: "Eval tools",
        outcome: "Run an eval in Promptfoo and DeepEval, judge answers, find hallucinations, and catch a regression across models.",
        needs: "Stage 2.",
        pages: ["promptfoo-first-eval", "promptfoo-assertions", "deepeval-pytest", "hallucination-detection", "model-comparison-regression"],
      },
      {
        title: "The layers around the model",
        outcome: "Test the API, the chat UI, a chain, a long conversation, and an assistant's fallback and handoff.",
        needs: "Stage 3.",
        pages: ["llm-api-testing", "chatbot-ui-testing", "langchain-testing", "multi-turn-testing", "virtual-assistant-testing"],
      },
      {
        title: "RAG and vector databases",
        outcome: "Test retrieval and answers, break a RAG system on purpose, test chunking and embeddings, and automate the suite at scale.",
        needs: "Stage 3.",
        pages: ["rag-testing-basics", "vector-db-basics", "chunking-embedding-testing", "advanced-rag-failures", "vector-db-quality-performance", "synthetic-data-dspy", "rag-synthetic-regression"],
      },
      {
        title: "Agents and other models",
        outcome: "Map an agent, test its decisions and a team of agents, and test image and fine-tuned models.",
        needs: "Stage 4.",
        pages: ["agent-architecture", "langgraph-agent-testing", "agent-decision-testing", "multi-agent-testing", "multimodal-testing", "finetuned-model-testing"],
      },
      {
        title: "Safety",
        outcome: "Test for the ten OWASP risks, run attack probes, and check output validation and bias.",
        needs: "Stage 3.",
        pages: ["owasp-llm-risks", "red-teaming", "guardrails-bias"],
      },
      {
        title: "Plan, measure, and run",
        outcome: "Write the test strategy, report quality, watch production, detect drift, load test, and gate every merge.",
        needs: "Stages 3 to 7.",
        pages: ["ai-test-strategy", "ai-quality-metrics", "ai-observability", "production-observability", "model-drift-ab-testing", "ai-load-testing", "cicd-eval-pipelines"],
      },
      {
        title: "Capstone 1 and career",
        outcome: "Build a RAG chatbot, test it with evals, red teaming, and UI tests, put it in CI, and turn it into a portfolio.",
        needs: "Stages 1 to 8.",
        pages: ["capstone-project-setup", "capstone-test-pipeline", "capstone-cicd-presentation", "ai-testing-career-kit"],
      },
      {
        title: "Capstone 2",
        outcome: "Test a production RAG application with an agent, wire a quality gate and tracing, and present the result.",
        needs: "Stage 9.",
        pages: ["advanced-capstone-setup", "advanced-capstone-test-suite", "advanced-capstone-pipeline", "advanced-capstone-presentation"],
      },
    ],
  },
  {
    id: "agentic-qa",
    title: "Agentic QA",
    summary: "How a tester works with Claude Code, from the setup to a team of agents.",
    stages: [
      {
        title: "Set up",
        outcome: "Explain how Claude Code works, set up the workspace, and connect it to Jira, GitHub, and a test database.",
        needs: "Basic testing and the command line.",
        pages: ["claude-for-qa", "qa-workspace", "project-setup"],
      },
      {
        title: "Plan and design",
        outcome: "Analyze a story, write acceptance criteria, trace what a change can break, and explore a feature that has no spec.",
        needs: "Stage 1.",
        pages: ["requirements", "blast-radius", "test-charters"],
      },
      {
        title: "Automate and run",
        outcome: "Run test cases with an agent, write Playwright tests with Claude, and build a framework.",
        needs: "Stage 2.",
        pages: ["test-execution", "playwright-with-claude", "playwright-framework"],
      },
      {
        title: "Scale with agents",
        outcome: "Design specialized QA agents that pass work as files, with permissions and approval points.",
        needs: "Stage 3.",
        pages: ["multi-agent-qa"],
      },
    ],
  },
];

/** A stage of a roadmap, by the id of the roadmap and the 1-based number of the stage. */
export type StageRef = { id: RoadmapId; stage: number };

export type MasterStage = {
  title: string;
  outcome: string;
  steps: readonly StageRef[];
};

const s = (id: RoadmapId, ...stages: number[]): StageRef[] => stages.map((stage) => ({ id, stage }));

/** The full path: every stage of every roadmap, once, in a reading order across the modules. */
export const MASTER_PATH: readonly MasterStage[] = [
  {
    title: "Use AI well",
    outcome: "Use a model in your daily work, with clear briefs and checked answers.",
    steps: s("ai-skills", 1),
  },
  {
    title: "How agents work",
    outcome: "Follow what an agent does in one turn and across a run.",
    steps: [...s("ai-agents", 1, 2, 3), ...s("ai-concepts", 1)],
  },
  {
    title: "Build with AI",
    outcome: "Build a first tool without code, then call a model, bring your data in, and build an agent.",
    steps: [...s("ai-skills", 2), ...s("ai-engineering", 1, 2, 3)],
  },
  {
    title: "Inside the agent",
    outcome: "Read how a harness and the seven kinds of memory work.",
    steps: [...s("harness", 1, 2), ...s("agent-memory", 1, 2, 3), ...s("ai-concepts", 2)],
  },
  {
    title: "Production AI",
    outcome: "Make an AI system safe, measured, cheap enough, and observable, and decide the rules for its use.",
    steps: [...s("ai-engineering", 4, 5), ...s("ai-concepts", 3), ...s("ai-skills", 3)],
  },
  {
    title: "Test AI",
    outcome: "Test models, RAG, agents, and safety, run the tests in CI, and finish two capstone projects.",
    steps: s("ai-ml-testing", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  },
  {
    title: "Claude for QA",
    outcome: "Use Claude Code on a real QA project, from requirements to a team of agents.",
    steps: s("agentic-qa", 1, 2, 3, 4),
  },
  {
    title: "Specialize",
    outcome: "Pick a branch: AI at work, media and voice, or your own model.",
    steps: s("ai-skills", 4, 5, 6),
  },
];

export const ROADMAP_ROUTES: readonly string[] = [AI_ROADMAP_HOME, ...ROADMAPS.map((r) => `${AI_ROADMAP_HOME}${r.id}/`)];

export function getRoadmap(id: string): Roadmap | undefined {
  return ROADMAPS.find((r) => r.id === id);
}

export const roadmapPageCount = (r: Roadmap): number => r.stages.reduce((n, stage) => n + stage.pages.length, 0);
