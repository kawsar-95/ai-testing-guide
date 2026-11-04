/**
 * The reels of the AI Concepts module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AiConceptsSlug } from "../ai-concepts/topics.ts";
import type { Reel } from "./reels.ts";

export const AI_CONCEPTS_REELS: Readonly<Record<AiConceptsSlug, readonly Reel[]>> = {
  "agentic-loops": [
    { id: "Uimmj3EiXMI", title: "What is ReAct prompting?", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 60 },
    { id: "kRl_8wG_utU", title: "Agentic Loop Engineering কী এবং কীভাবে কাজ করে?", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 32 },
    { id: "tjd5IwgIvIg", title: "Agentic Workflow কীভাবে কাজ করে? | AI কীভাবে নিজেই সিদ্ধান্ত নেয়", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 38 },
  ],
  "mcp": [
    { id: "r2P6-gqs1xg", title: "Model Context Protocol (MCP) Explained in 60 Seconds", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 56 },
    { id: "rTW1eM0T_90", title: "What is Model Context Protocol (MCP)?", channel: "Microsoft Developer", kind: "explainer", lang: "en", seconds: 55 },
    { id: "hCDfrgvsC1M", title: "MCP কী? (AI-এর USB-C পোর্ট)", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "subagents": [
    { id: "badT4FXj7Mc", title: "Multi-agent systems are the future of AI applications", channel: "Mastra", kind: "explainer", lang: "en", seconds: 177 },
    { id: "SNhmFJzieR4", title: "Why Sierra uses one agent per brand instead of multi-agent systems", channel: "LangChain", kind: "real-system", lang: "en", seconds: 79 },
    { id: "U0wOgXXfdjU", title: "AI Agent vs Multi-Agent System — এক Agent-এর বদলে অনেক Agent কেন?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
    { id: "bcj5zYcv1QQ", title: "AI Agents-এর Boss কে? | Orchestrator Explained", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 37 },
  ],
  "ai-gateway": [
    { id: "CqesSUnsw9Y", title: "6 jobs of an AI gateway: failover, caching, guardrails, etc.", channel: "AI Quality Nerd", kind: "explainer", lang: "en", seconds: 51 },
    { id: "_miSLMmLc0U", title: "Which AI gateway should you use? Bifrost, Cloudflare, Kong, Vercel", channel: "AI Quality Nerd", kind: "explainer", lang: "en", seconds: 49 },
    { id: "HGTlGUt2s8M", title: "AI Gateway Explained in 60 Secs: How to Control Your AI Spend", channel: "Databricks", kind: "explainer", lang: "en", seconds: 57 },
    { id: "iBi4QliiSOk", title: "AI Gateway কী? Production AI System-এ কেন দরকার? | AI Architecture", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "inference-economics": [
    { id: "0E8kDTW10HQ", title: "What is Prompt Caching?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 106 },
    { id: "GXh1KwzNIIM", title: "What is Prompt Caching in LLMs?", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 84 },
    { id: "vHOO_heIsf4", title: "AI Agent-এর Cost কমাবেন কীভাবে? | Token Optimization Explained", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "evals": [
    { id: "KY5hfe_Td14", title: "Evals are the hottest topic in 2026.", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 82 },
    { id: "FRETejqa7D8", title: "How to build AI agent evals in 4 steps", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 55 },
    { id: "yPe1I1ogd3A", title: "MakeMyTrip CTO on AI Evals", channel: "codebasics", kind: "real-system", lang: "en", seconds: 72 },
    { id: "VOwtHndNK8c", title: "AI Agent-এর উত্তর ঠিক আছে কিনা বুঝবেন কীভাবে?”", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 27 },
  ],
  "guardrails": [
    { id: "W5rB9HGSdMg", title: "AI Agent-কে সব কাজ করতে দেওয়া উচিত? | Guardrails Explained", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 18 },
  ],
  "observability": [
    { id: "PxV1swOlcvI", title: "The one indispensable tool to any AI app developer - Observability", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 81 },
    { id: "LYsr7yVLXn8", title: "n8n Natively supports open telemetry and tracing", channel: "n8n", kind: "explainer", lang: "en", seconds: 42 },
    { id: "ODh1DRil-PA", title: "The LangSmith Feature Built for Multi-Step Agents", channel: "LangChain", kind: "explainer", lang: "en", seconds: 30 },
  ],
  "agent-harness": [
    { id: "_6qHmJ9Trmg", title: "What exactly is an Agent Harness?", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 82 },
    { id: "IVdJj_aNwhE", title: "Agent Harness Explained in 2 minutes", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 148 },
    { id: "7dFvU9zuv0k", title: "What is an agent harness? Explained fast", channel: "LangChain", kind: "explainer", lang: "en", seconds: 79 },
    { id: "Rnjad4p62bE", title: "What is an agent harness?", channel: "LangChain", kind: "explainer", lang: "en", seconds: 33 },
  ],
};
