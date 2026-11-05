/**
 * The reels of the AI Skills module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AiSkillsSlug } from "../ai-skills/topics.ts";
import type { Reel } from "./reels.ts";

export const AI_SKILLS_REELS: Readonly<Record<AiSkillsSlug, readonly Reel[]>> = {
  "prompting": [
    { id: "2kvCNlpDFK0", title: "Chain of thought (CoT) prompting", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 55 },
    { id: "EiqrctWLnKQ", title: "Prompt Engineering কী? AI-এর সাথে কথা বলার শিল্প!", channel: "Unity My Academy", kind: "explainer", lang: "bn", seconds: 25 },
    { id: "2-ljCXbmlzo", title: "সাধারণ Prompt বনাম System Prompt-এর পার্থক্য!", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 128 },
  ],
  "context-engineering": [
    { id: "ssxIXBBY9xM", title: "RAG vs Context Engineering!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 61 },
    { id: "9txtxqyGOL4", title: "Context Engineering for AI Agents (Learn This NOW)", channel: "Nate Herk | AI Automation", kind: "explainer", lang: "en", seconds: 125 },
    { id: "hQqhVs3-ijk", title: "বারবার AI-কে একই Prompt দিচ্ছেন? Claude AI-এর Projects & Context Engine বদলে দেবে আপনার Workflow!", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 37 },
  ],
  "ai-research": [
    { id: "PZ5Q-OKOMX4", title: "AI Research Agents in Action", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 36 },
    { id: "MCS7ikRGmaw", title: "2 AI দিয়ে Advanced Research-এর দারুণ কৌশল! | Perplexity Pro + Claude | ArthaMatrix", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 56 },
    { id: "c71V2fAaIeE", title: "সম্পূর্ণ বিনামূল্যে আপনার নিজস্ব AI রিসার্চ টিম! | Google NotebookLM Bangla", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 163 },
  ],
  "workflow-automation": [
    { id: "DwGtVdllKRo", title: "New to Zapier? Build Your First Lead Automation (No Code!)", channel: "Zapier", kind: "explainer", lang: "en", seconds: 22 },
    { id: "aXf51HXzqLw", title: "Create an AI Chatbot in Minutes Using n8n! (No Coding Required)", channel: "Leon van Zyl", kind: "explainer", lang: "en", seconds: 34 },
    { id: "0X3cQo4euEo", title: "Why AI Agents Are Killing Workflows in 2026", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 157 },
  ],
  "ai-agents": [
    { id: "VxDNUKw83PY", title: "AI Agents are SO simple to build", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 155 },
    { id: "3lQXYNUyv5o", title: "Why AI Agents Matter Now with Stanford's Azalia Mirhoseini and Aakanksha Chowdhery", channel: "Stanford Online", kind: "explainer", lang: "en", seconds: 57 },
    { id: "NvKowH8PnaA", title: "Build AI Agents in 60 Seconds | Google ADK Tutorial", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 49 },
    { id: "kIlgDm5gcMY", title: "Why do we need AI Agents when we have AI models?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 118 },
  ],
  "rag": [
    { id: "jG-gbB0ULac", title: "What is RAG? How AI Chatbots Access Your Custom Data (Explained Simply)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 175 },
    { id: "uDfUvC1oi3M", title: "Poor Chunking Strategy Undermine RAG System", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 94 },
    { id: "Tb8FBY3rI0E", title: "AI Agent + RAG কীভাবে একসাথে কাজ করে? | AI That Knows & Acts", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 41 },
  ],
  "data-enrichment": [
    { id: "eBA2AgLTs0U", title: "Why One Email Finder Isn't Enough (Data Enrichment Waterfalls)", channel: "Nishkarsh Agarwal", kind: "explainer", lang: "en", seconds: 42 },
    { id: "eV65DGmphIU", title: "Synthetic Data", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 58 },
  ],
  "vibe-coding": [
    { id: "dVDATeeCWcM", title: "Claude Code Skills to Stop You from Vibe Coding Junk", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 35 },
    { id: "zQCSPGtQPrM", title: "ভাইব কোডিং (Vibe Coding) কী? কোডিং না জেনেই এআই দিয়ে অ্যাপ বানান!", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 62 },
  ],
  "mcp-connectors": [
    { id: "kO21vdEQS5g", title: "WTH is Model Context Protocol (MCP)!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 56 },
    { id: "iGJTw_PWogs", title: "Why We Need MCP When APIs Already Exist", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 179 },
    { id: "4q5FEKWwfh0", title: "MCP Server Explained! একটা Tool Call-এর পেছনে কী ঘটে?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 34 },
    { id: "7QUj_vXkivg", title: "How Anthropic Fixed MCP Context Bloat Issue", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 151 },
  ],
  "ai-evals": [
    { id: "4lxw0DVTHvc", title: "What are AI and LLM Evals ?", channel: "New Machina", kind: "explainer", lang: "en", seconds: 57 },
    { id: "Zxrqu5H0qb8", title: "The real reason AI evals feel impossible (and how to fix it)", channel: "Mastra", kind: "explainer", lang: "en", seconds: 40 },
    { id: "T1h9IBmGH3A", title: "AI Evals - On the walk over ep2", channel: "Mastra", kind: "explainer", lang: "en", seconds: 179 },
  ],
  "meeting-intelligence": [
    { id: "eTK4Z7SeUI4", title: "How Fireflies AI Scaled: Better Speech-to-Text Accuracy and Cheaper LLMs", channel: "AssemblyAI", kind: "real-system", lang: "en", seconds: 43 },
  ],
  "ai-data-analysis": [
    { id: "8AGyh2Tc1hQ", title: "Your AI Data Science Is Lying to You", channel: "Tech With Tim", kind: "mistake", lang: "en", seconds: 103 },
    { id: "Kf3xIq988RY", title: "Building Data Analyst Agent", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 175 },
  ],
  "ai-video": [],
  "voice-and-avatars": [],
  "decks-and-design": [
    { id: "NzcRprKWbD8", title: "Make presentations with Claude Slides", channel: "Claude", kind: "explainer", lang: "en", seconds: 105 },
    { id: "qdomkfNtK6Q", title: "Gamma AI দিয়ে Professional Presentation ১ মিনিটে", channel: "Hablu Programmer", kind: "explainer", lang: "bn", seconds: 96 },
  ],
  "ai-governance": [
    { id: "sA6UA2fMNHg", title: "Why is AI Governance Important?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 46 },
    { id: "ORcaA7pD9WY", title: "Responsible AI in 60 Seconds", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 57 },
    { id: "ITmbZFFGQuI", title: "Why AI agents need their own identity & audit trails", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 45 },
  ],
  "fine-tuning": [
    { id: "bRtnM07Vw5w", title: "RAG vs Fine Tuning EXPLAINED!", channel: "TestMu AI (Formerly LambdaTest)", kind: "compare", lang: "en", seconds: 133 },
    { id: "Zq_aquaEpC0", title: "Is fine-tuning a model like DeepSeek worth it?", channel: "Microsoft Developer", kind: "explainer", lang: "en", seconds: 71 },
    { id: "Lmwv7P--2zE", title: "Fine-tuning use cases", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 130 },
    { id: "OIk0DLPLLiQ", title: "How LLMs Actually Learn?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 160 },
  ],
  "open-models": [
    { id: "dsW2tAO38-Y", title: "Will Open Source AI Models Pass Proprietary Models?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 58 },
    { id: "4ucnsFBQmDA", title: "What are the differences between DeepSeek models?", channel: "IBM Technology", kind: "compare", lang: "en", seconds: 142 },
    { id: "5J6OXXe4SeM", title: "Why Your Local AI Is Slow", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 51 },
    { id: "l9xZDkhRhyw", title: "LLaMA vs Ollama explained in 15 seconds!", channel: "Divya Rajpurohit | AI Automation", kind: "compare", lang: "en", seconds: 16 },
  ],
  "voice-agents": [
    { id: "RsmKGpJ1we4", title: "What \"real-time voice AI\" actually means", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 52 },
    { id: "BW0r6_u7Dv4", title: "How to Handle Interruptions in Voice AI Calls", channel: "AssemblyAI", kind: "explainer", lang: "en", seconds: 78 },
  ],
  "image-generation": [
    { id: "XOfuq-EtZ3A", title: "Midjourney vs. Google's Nano Banana", channel: "Jeff Su", kind: "compare", lang: "en", seconds: 35 },
    { id: "j5h9dBtWZXM", title: "How AI connects text and images", channel: "3Blue1Brown", kind: "animation", lang: "en", seconds: 103 },
  ],
};
