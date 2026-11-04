/**
 * The reels of the AI Harnesses module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { HarnessSlug } from "../harness/topics.ts";
import type { Reel } from "./reels.ts";

export const HARNESS_REELS: Readonly<Record<HarnessSlug, readonly Reel[]>> = {
  "agent-loop": [
    { id: "854E1jORFI0", title: "The AI Agent Loop Explained", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 40 },
    { id: "-HtvTk5mv4Q", title: "5 things every AI agent harness needs", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 80 },
    { id: "cW5Vgp00wRE", title: "সহজ ভাষায় বুঝুন Loop Engineering কি? Loop Engineering vs Prompt Engineering", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 136 },
  ],
  "tool-calling": [
    { id: "Fb_FJCfVI54", title: "Tool Calling in LLMs!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 112 },
    { id: "Fanndh77I7w", title: "Tool Calling in RAG", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 99 },
    { id: "Hm59uXECwEU", title: "Most developers overcomplicate AI tool calling", channel: "Mastra", kind: "explainer", lang: "en", seconds: 132 },
    { id: "C2Jl1inw_7M", title: "Tool Calling কীভাবে কাজ করে? | AI কীভাবে নিজেই Tools ব্যবহার করে", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 30 },
  ],
  "context-management": [
    { id: "9P36wMntNSI", title: "Stop stuffing your context window (here's why)", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 129 },
    { id: "zkf1BMXvqF0", title: "What Is a Context Window?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 76 },
    { id: "U1S4FvRFRiY", title: "The Context Window Problem Nobody Talks About", channel: "Aish Reganti", kind: "explainer", lang: "en", seconds: 134 },
  ],
  "checkpointing": [
    { id: "BrNDjc3FNTA", title: "Crash-Proof AI Agents: Durable Execution in LangGraph Explained", channel: "Ali Hamza", kind: "explainer", lang: "en", seconds: 37 },
    { id: "heC_iX8GBH4", title: "Claude Code's Hidden Time Machine — Rewind Any Mistake", channel: "@AIEnthusiast26", kind: "real-system", lang: "en", seconds: 50 },
    { id: "3-sSbJKb-fQ", title: "Pi Durable: AI agents that survive crashes", channel: "Hugging Face", kind: "explainer", lang: "en", seconds: 75 },
  ],
  "permissions-and-sandboxing": [
    { id: "N0GPmj0ipQQ", title: "Why Every AI Agent Needs a Sandbox", channel: "Mastra", kind: "explainer", lang: "en", seconds: 50 },
    { id: "g_OqeRku5Pc", title: "Should You Use a Sandbox for Your Agent? | Max Agency", channel: "LangChain", kind: "explainer", lang: "en", seconds: 63 },
    { id: "hj7Andj7nQE", title: "OpenAI agents use internet without permission.", channel: "Gaurav Sen", kind: "real-system", lang: "en", seconds: 63 },
    { id: "3PwysYGHBnw", title: "AI Agent-কে সব Tool-এর Access দেওয়া কি নিরাপদ?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 21 },
  ],
  "guardrails": [
    { id: "Q9I8sMfq-FM", title: "Building LLM apps that don't suck - Guardrails", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 62 },
    { id: "ig2JpD_sAHE", title: "What Are AI Guardrails and How Do They Work!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 170 },
    { id: "bapHyVIJ0Ec", title: "Make Claude Code Run Your Tests Every Time: Hooks", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 68 },
  ],
};
