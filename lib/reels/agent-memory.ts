/**
 * The reels of the Agent Memory module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AgentMemorySlug } from "../agent-memory/topics.ts";
import type { Reel } from "./reels.ts";

export const AGENT_MEMORY_REELS: Readonly<Record<AgentMemorySlug, readonly Reel[]>> = {
  "working-memory": [
    { id: "FHufF_3QU2A", title: "Stateful Agents self-optimize their Context Window", channel: "Weaviate vector database", kind: "explainer", lang: "en", seconds: 43 },
    { id: "827IX97_NG4", title: "Context Rot: Why Giving AI More Context Makes It More Confidently Wrong", channel: "SkipCI", kind: "explainer", lang: "en", seconds: 33 },
    { id: "sVxen1j24Fc", title: "Don't Trust a Big Context Window Yet", channel: "Aish Reganti", kind: "explainer", lang: "en", seconds: 93 },
    { id: "TXuYu-RkSkI", title: "Why More Context is KILLING Your LLM Responses (RAG vs Prompt Stuffing)", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 104 },
  ],
  "semantic-memory": [
    { id: "tarq5cgw7PE", title: "AI agent memory", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 42 },
    { id: "7EvMKPMGDAU", title: "Building an AI tutor that ACTUALLY remembers you", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 43 },
  ],
  "episodic-memory": [
    { id: "9xdteWeaHvk", title: "Episodic Memory & Hybrid Search for AI Agents", channel: "Oracle Developers", kind: "explainer", lang: "en", seconds: 45 },
    { id: "fj9dF_HXL-U", title: "You're doing AGENTIC \"chat history\" wrong", channel: "James Briggs", kind: "explainer", lang: "en", seconds: 59 },
    { id: "51aV0_Mpxz4", title: "AI Agent কি আপনার আগের কথা মনে রাখতে পারে? | Agent Memory Explained", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 21 },
  ],
  "procedural-memory": [
    { id: "adsrbuYB-WM", title: "Stop Repeating Yourself to Claude Code: Use CLAUDE.md", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 69 },
    { id: "WLngvmntWJI", title: "How to use skills in n8n agents", channel: "n8n", kind: "explainer", lang: "en", seconds: 60 },
    { id: "2MX49Tot0p4", title: "Claude Code-এ Plugin vs Skill: কোনটি কীভাবে কাজ করে?", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 125 },
  ],
  "retrieval-memory": [
    { id: "qSvlGGDJ2WM", title: "RAG Explained: How Retrieval Augmented Generation Actually Works", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 99 },
    { id: "Qx14PG_i6Ko", title: "RAG: Retrieval Augmented Generation", channel: "ByteMonk", kind: "explainer", lang: "en", seconds: 47 },
    { id: "DjJ6ngX2Dv8", title: "Advanced RAG techniques for better retrieval performance", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 38 },
    { id: "zGQ4hAabezs", title: "RAG Retrieval কী? | AI কীভাবে সঠিক Information খুঁজে বের করে?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 30 },
  ],
  "parametric-memory": [
    { id: "ietNakjXOtk", title: "Training Cutoff in LLMs", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 88 },
    { id: "C80IRQ_PHD4", title: "Why an AI model has a knowledge cutoff", channel: "AI Made Clear", kind: "explainer", lang: "en", seconds: 45 },
    { id: "zO5Pi1qJc60", title: "Why the Pros Don't Fine-Tune Everything (Catastrophic Forgetting)", channel: "Orion Stack", kind: "explainer", lang: "en", seconds: 59 },
    { id: "h2mTTdoMvzo", title: "How LLMs Actually Learn?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 170 },
  ],
  "prospective-memory": [
    { id: "KZnrLBBYr6E", title: "Claude Code Routine | ঘুমিয়েও AI দিয়ে কাজ করান! | Workflow Automation Explained", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 44 },
    { id: "bsHFD4ivC4U", title: "ম্যানুয়াল কাজকে বিদায়! Claude AI Scheduled Tasks দিয়ে সব অটোমেট করুন", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 45 },
  ],
};
