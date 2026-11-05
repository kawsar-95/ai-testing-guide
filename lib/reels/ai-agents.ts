/**
 * The reels of the How AI Agents Work module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AiAgentsSlug } from "../ai-agents/topics.ts";
import type { Reel } from "./reels.ts";

export const AI_AGENTS_REELS: Readonly<Record<AiAgentsSlug, readonly Reel[]>> = {
  "agent-basics": [
    { id: "nrqmgvc9TJ8", title: "What Is an AI Agent, Actually?", channel: "LangChain", kind: "explainer", lang: "en", seconds: 34 },
    { id: "wXnm4PtBkAA", title: "Learn How AI Agents Work [Practical Scenario]", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 125 },
    { id: "Tgsdkn_wO70", title: "AI Agent কী এবং এটি কিভাবে কাজ করে? | AI Chatbot vs AI Agent", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 154 },
    { id: "7UYd3c6Npj4", title: "চ্যাটজিপিটি কি পুরনো হয়ে যাচ্ছে? AI Agent বনাম Chatbot-এর আসল পার্থক্য Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 60 },
  ],
  "trigger": [
    { id: "khfFtyGPdLg", title: "n8n webhook explanation", channel: "Rohit Krishna", kind: "explainer", lang: "en", seconds: 35 },
  ],
  "build-context": [
    { id: "j-yjW7diFE4", title: "RAG vs Long Context - On The Walk Over Ep 11", channel: "Mastra", kind: "explainer", lang: "en", seconds: 159 },
    { id: "Y_p_Y4EF8AA", title: "Why Million Token Context Windows Fail", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 143 },
  ],
  "llm-decides": [
    { id: "U7PXtRazU94", title: "What is Tool Calling?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 41 },
    { id: "9F-WHimhscs", title: "How Reasoning Models Actually Work", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 154 },
  ],
  "act-with-tools": [
    { id: "mcJfvsyuOSA", title: "Function Calling - how AI uses tools and APIs", channel: "xyzxyz", kind: "explainer", lang: "en", seconds: 32 },
    { id: "g87DYmwbzuo", title: "Too many MCP tools? Anthropic found a solution.", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 122 },
    { id: "A2VbV8Rowxs", title: "AI Agent ভুল Tool Call করলে কী হয়? | Production AI Engineering", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
    { id: "yahZy5tBoeo", title: "How Claude Does Web Search?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 98 },
  ],
  "stop-check": [
    { id: "4AY1E3B3OqA", title: "AI Agent ভুল করলে নিজেই কীভাবে বুঝবে?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 21 },
    { id: "3I_sXTNYcQ0", title: "Why AI Agents Get Stuck in Loops — Stop Conditions Explained", channel: "Agentic Engineering", kind: "explainer", lang: "en", seconds: 48 },
    { id: "qVTmzY4w2T4", title: "Claude Code ralph loop - why your loop never stops", channel: "Ship It With AI", kind: "explainer", lang: "en", seconds: 39 },
  ],
  "memory": [
    { id: "5yb1PfL8HS8", title: "How AI agents can remember you forever", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 40 },
    { id: "g6zr04MSsLg", title: "AI Agent Memory: The Real Race Isn't Bigger Context Windows", channel: "Oracle Developers", kind: "explainer", lang: "en", seconds: 13 },
    { id: "Z_ogJIzz4zI", title: "AI Agent Memory কীভাবে কাজ করে? | AI কীভাবে আগের কথা মনে রাখে", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "guardrails": [
    { id: "XG2A-St5iao", title: "What is an AI Sandbox?", channel: "TestMu AI (Formerly LambdaTest)", kind: "explainer", lang: "en", seconds: 93 },
    { id: "dJmNs8h3Zeo", title: "What Is a Sandbox? (And Why Every Agent Needs One) | Spill The Tea", channel: "LangChain", kind: "explainer", lang: "en", seconds: 75 },
    { id: "HT4OImmCLsk", title: "My AI Agent Faked My Approval to Get Past Its Own Guardrails", channel: "G Talks Tech", kind: "mistake", lang: "en", seconds: 28 },
    { id: "fbn5EJagBmQ", title: "How Cogent Security sandboxes AI agents that touch customer data | Max Agency", channel: "LangChain", kind: "real-system", lang: "en", seconds: 50 },
  ],
  "observability-and-evals": [
    { id: "tWstu9cXntg", title: "How Podium Traces Every AI Agent Decision", channel: "LangChain", kind: "real-system", lang: "en", seconds: 66 },
    { id: "Bx22XGBbs70", title: "The Self-Driving Eval Trick No AI Benchmark Beats", channel: "LangChain", kind: "explainer", lang: "en", seconds: 47 },
    { id: "OdSoP5TMP0o", title: "One AI Question - when should I start doing evals, with Aparna Dhinakaran", channel: "Arize AI", kind: "explainer", lang: "en", seconds: 43 },
    { id: "dzIuuuICBVY", title: "Are off-the-shelf evals overrated? - AI Hot Takes", channel: "Mastra", kind: "explainer", lang: "en", seconds: 142 },
  ],
  "final-output": [
    { id: "CK6t1goWxw8", title: "Building AI Apps That Don't Suck - Handoffs", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 80 },
    { id: "faIZl69Qk4U", title: "Using Pydantic and Structured Outputs for Type-Safe LLM Responses", channel: "learnwithparam - AI Engineering Society", kind: "explainer", lang: "en", seconds: 54 },
    { id: "w_FK4QyNtb8", title: "Extract Structured Data with OpenAI & Pydantic", channel: "Pradip Nichite", kind: "explainer", lang: "en", seconds: 35 },
  ],
};
