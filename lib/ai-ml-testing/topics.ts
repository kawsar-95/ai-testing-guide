/**
 * The one ordered list of the AI/ML Testing module. Every entry is a topic,
 * served at /ai-ml-testing/<slug>/ with its text in content/ai-ml-testing/<slug>.mdx.
 * The order and the topics follow the syllabus of the "AI & ML Testing
 * Professional Course" (QodeBench - Journey to Automation): 17 course modules
 * and 47 sessions, Phase 1 Foundations first, then Phase 2 Mastery.
 *
 * A page is in this list only when its text exists, so the module never links
 * to a missing file. The remaining sessions are added as they are written.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { AI_ML_TESTING_UI } from "./ui.ts";

export type AiMlTestingSlug =
  // Phase 1 - Foundations.
  | "ai-ml-for-testers"
  | "llm-tokens-temperature"
  | "ai-application-architecture"
  | "prompt-engineering-basics"
  | "prompt-testing"
  | "structured-outputs"
  | "promptfoo-first-eval"
  | "promptfoo-assertions"
  | "deepeval-pytest"
  | "hallucination-detection"
  | "model-comparison-regression"
  | "rag-testing-basics"
  | "llm-api-testing"
  | "chatbot-ui-testing"
  | "langchain-testing"
  | "langgraph-agent-testing"
  | "owasp-llm-risks"
  | "red-teaming"
  | "guardrails-bias"
  | "ai-test-strategy"
  | "ai-quality-metrics"
  | "ai-observability"
  | "capstone-project-setup"
  | "capstone-test-pipeline"
  | "capstone-cicd-presentation"
  | "ai-testing-career-kit"
  // Phase 2 - Mastery.
  | "advanced-rag-failures"
  | "chunking-embedding-testing"
  | "rag-synthetic-regression"
  | "vector-db-basics"
  | "vector-db-quality-performance"
  | "multi-turn-testing"
  | "virtual-assistant-testing"
  | "agent-architecture"
  | "agent-decision-testing"
  | "multi-agent-testing"
  | "multimodal-testing"
  | "finetuned-model-testing"
  | "synthetic-data-dspy"
  | "production-observability"
  | "model-drift-ab-testing"
  | "ai-load-testing"
  | "cicd-eval-pipelines"
  | "advanced-capstone-setup"
  | "advanced-capstone-test-suite"
  | "advanced-capstone-pipeline"
  | "advanced-capstone-presentation";

const parts = [
  { num: 1, title: "Phase 1 — Foundations" },
  { num: 2, title: "Phase 2 — Mastery" },
] as const;

const entries: readonly FlatEntry<AiMlTestingSlug>[] = [
  {
    slug: "ai-ml-for-testers",
    title: "AI and ML for Testers",
    description: "What changes when the thing under test is a model: the three kinds of learning, where a model fits in a product, and why testing it needs different checks.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "llm-tokens-temperature",
    title: "Tokens, Probabilities, and Temperature",
    description: "How an LLM turns text into tokens, what temperature actually changes, and how the two decide what a tester sees.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "ai-application-architecture",
    title: "AI Application Architectures",
    description: "Map an AI feature into its layers, find the test point at each one, and know when to reach for fine-tuning, RAG, or a better prompt.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "prompt-engineering-basics",
    title: "Prompt Engineering Fundamentals",
    description: "How to write a prompt that works: the parts, the few-shot examples, chain of thought, and why a non-English prompt breaks more often.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "prompt-testing",
    title: "Prompt Testing",
    description: "Break a working prompt on purpose: edge cases, ambiguity, adversarial inputs, and how to document what you found.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "structured-outputs",
    title: "Structured Outputs and Validation",
    description: "Test JSON mode, function calling, and tool use: the schema check, the field that hallucinates, and the schema the model keeps breaking.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "promptfoo-first-eval",
    title: "Your First Eval with Promptfoo",
    description: "Set up Promptfoo, write a YAML config, define test cases, run the eval, and read the result.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "promptfoo-assertions",
    title: "Advanced Assertions and LLM-as-Judge",
    description: "The assertion types that carry a quality suite: regex, semantic similarity, llm-rubric, and how to keep a judge from drifting.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "deepeval-pytest",
    title: "DeepEval: Pytest for LLMs",
    description: "Write LLM tests as Pytest functions with DeepEval metrics, run them, and read the Confident AI dashboard.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "hallucination-detection",
    title: "Hallucination Detection",
    description: "Build a hallucination test suite: factual accuracy, grounding checks, cross-reference validation, and the temperature effect.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "model-comparison-regression",
    title: "Model Comparison and Regression Testing",
    description: "Build a golden dataset, run it across several models, track scores over time, and catch what a model upgrade silently broke.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "rag-testing-basics",
    title: "RAG Testing Fundamentals",
    description: "Test a RAG pipeline end to end: retrieval quality, precision and recall, end-to-end faithfulness, and the four failure modes.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "llm-api-testing",
    title: "Testing LLM APIs",
    description: "Test OpenAI, Anthropic, and Gemini endpoints: the request shape, the errors, the rate limits, the streaming, and the response times.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "chatbot-ui-testing",
    title: "Chatbot UI Testing with Playwright",
    description: "Test the chat interface: sending, streaming, history, the empty state, and the long input that breaks the layout.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "langchain-testing",
    title: "Testing LangChain Chains",
    description: "Test a LangChain chain component by component and end to end, and use LangSmith traces to see which step failed.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "langgraph-agent-testing",
    title: "Testing LangGraph Agents",
    description: "Test a multi-step agent: the decision at each node, the tool it picks, the arguments it passes, loop detection, and error recovery.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "owasp-llm-risks",
    title: "OWASP Top 10 for LLMs",
    description: "Walk through the ten risks, what each one looks like, and how to test for it: prompt injection, data leakage, and the rest.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "red-teaming",
    title: "Red Teaming with Promptfoo and Giskard",
    description: "Run automated attack probes against a chatbot, map the findings to OWASP, and compare what two different tools catch.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "guardrails-bias",
    title: "Guardrails, Output Validation, and Bias Testing",
    description: "Implement output validation with Guardrails AI, safety filtering with NeMo, and test for bias, toxicity, and data leakage.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "ai-test-strategy",
    title: "AI Test Strategy and Planning",
    description: "Write a test plan for an AI feature: the scope, the test types, the tools, the metrics, and the risk assessment, before anything breaks.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "ai-quality-metrics",
    title: "AI Quality Metrics and Reporting",
    description: "Build a quality dashboard from eval results: hallucination rate, faithfulness, latency P95, and cost per session, in a report a non-tester can read.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "ai-observability",
    title: "AI Observability and Production Monitoring",
    description: "Set up tracing with Arize Phoenix and LangFuse, and know why a clean eval run does not mean a clean production system.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "capstone-project-setup",
    title: "Capstone Project Setup: Build the AI App to Test",
    description: "Build a customer support RAG chatbot with LangChain and ChromaDB, loaded with FAQ documents and deployed as an API, as the target for the rest of the capstone.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "capstone-test-pipeline",
    title: "Capstone Test Pipeline: Eval, Red Team, and UI, Together",
    description: "Write the full test suite for the capstone app: a Promptfoo eval, DeepEval hallucination tests, red teaming, a Giskard scan, and Playwright UI tests, traced with LangFuse.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "capstone-cicd-presentation",
    title: "CI/CD Integration and Capstone Presentation",
    description: "Put the capstone's test pipeline into GitHub Actions on every pull request, build a quality dashboard, and present the results.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "ai-testing-career-kit",
    title: "AI Testing Career Kit: Resume, Portfolio, and Interviews",
    description: "Turn the capstone into a resume line, a portfolio, and interview practice: what to highlight, and where to go deeper on general interview prep.",
    kind: "topic",
    part: 1,
  },
  {
    slug: "advanced-rag-failures",
    title: "Advanced RAG Failure Modes",
    description: "Break a RAG system on purpose: contradictory documents, duplicates, multi-hop questions, stale content, and cross-language retrieval.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "chunking-embedding-testing",
    title: "Chunking and Embedding Strategy Testing",
    description: "Test the choices that decide retrieval quality before it starts: chunk size, overlap, and which embedding model you use.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "rag-synthetic-regression",
    title: "RAG Test Automation at Scale: Synthetic Data and Regression",
    description: "Auto-generate hundreds of RAG test questions with Giskard RAGET, build a regression suite that runs on every knowledge base update, and gate the deploy on it.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "vector-db-basics",
    title: "Vector Database Fundamentals",
    description: "Set up ChromaDB and Qdrant, ingest documents, query with different similarity metrics, and know what the database actually does.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "vector-db-quality-performance",
    title: "Vector Database Quality and Performance",
    description: "Test retrieval accuracy at scale and the performance envelope: duplicates, load, index rebuilds, and drift.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "multi-turn-testing",
    title: "Multi-Turn Conversation Testing",
    description: "Test a chatbot that remembers: context retention across turns, topic switching, contradictions, and conversation reset.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "virtual-assistant-testing",
    title: "Virtual Assistant Testing",
    description: "Test intent classification, the fallback path, and the human handoff: the three places a virtual assistant breaks.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "agent-architecture",
    title: "Agent Architecture: What You Are Testing",
    description: "Map an agent's decision tree before you test it: the nodes, the tools, the state, and where the test points are.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "agent-decision-testing",
    title: "Agent Decision Testing",
    description: "Test the two decisions an agent makes: which tool to call, and what to pass to it. The second one breaks more often.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "multi-agent-testing",
    title: "Multi-Agent Systems Testing",
    description: "Test a team of agents: the handoff between them, the collaboration, the failure cascade, and the cost of the whole chain.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "multimodal-testing",
    title: "Multi-Modal Model Testing",
    description: "Test a model that reads images and documents: OCR accuracy, field extraction, chart reading, and the hallucinations that come with pixels.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "finetuned-model-testing",
    title: "Fine-Tuned Model Testing",
    description: "Test a fine-tuned model: did the task improve, what did it forget, and how do you compare it with the base model?",
    kind: "topic",
    part: 2,
  },
  {
    slug: "synthetic-data-dspy",
    title: "Synthetic Data Generation with DSPy",
    description: "Generate test questions from your own knowledge base, verify the answers, and turn the result into a golden dataset.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "production-observability",
    title: "Production Observability",
    description: "Instrument a live RAG app, build the alerts that matter, and catch model drift, hallucination spikes, and silent model updates.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "model-drift-ab-testing",
    title: "Model Drift and A/B Testing",
    description: "Detect drift, compare two models in production safely, and know when a difference is real rather than noise.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "ai-load-testing",
    title: "Load Testing AI Systems",
    description: "Load test an LLM endpoint: throughput, time to first token, tokens per second, rate limits, and the quality cost of load.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "cicd-eval-pipelines",
    title: "CI/CD Eval Pipelines",
    description: "Put the evals in the pipeline: a quality gate that blocks the merge, a cost gate, and the PR report that shows the numbers.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "advanced-capstone-setup",
    title: "Advanced Capstone Setup: A Production RAG Application with an Agent Layer",
    description: "Build a multi-source RAG application with an agent that can search docs, check order status, and escalate to a human, deployed with conversation history.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "advanced-capstone-test-suite",
    title: "Advanced Capstone: A Comprehensive Test Suite",
    description: "Build RAG eval with Ragas (50+ cases across four metrics), agent decision tests, multi-turn conversation tests, a DSPy-generated dataset, and a Giskard red team run.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "advanced-capstone-pipeline",
    title: "Advanced Capstone: Production Pipeline and Monitoring",
    description: "Wire the test suite into a CI/CD quality gate, deploy LangFuse tracing and Arize Phoenix continuous evaluation, and build cost monitoring and an A/B framework.",
    kind: "topic",
    part: 2,
  },
  {
    slug: "advanced-capstone-presentation",
    title: "Advanced Capstone Presentation: Demo Day",
    description: "Present the complete project to the cohort and guest reviewers: architecture, test strategy, results, vulnerabilities, metrics, and the CI/CD pipeline, then a peer review.",
    kind: "topic",
    part: 2,
  },
];

export const AI_ML_TESTING = defineFlatModule({
  id: "ai-ml-testing",
  label: "AI/ML Testing",
  searchGroup: "ai ml testing",
  parts,
  entries,
  progress: { storageKey: "ai-ml-testing-progress" },
  ui: AI_ML_TESTING_UI,
});
