/**
 * The reels of the AI Engineering module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AiEngineeringSlug } from "../ai-engineering/topics.ts";
import type { Reel } from "./reels.ts";

export const AI_ENGINEERING_REELS: Readonly<Record<AiEngineeringSlug, readonly Reel[]>> = {
  "prompt-engineering": [
    { id: "3dm6nfOxO1c", title: "What is prompt engineering?", channel: "codebasics", kind: "explainer", lang: "en", seconds: 25 },
    { id: "FbAxP2-Jfps", title: "AI Prompt Engineering 101: Explained", channel: "Anthropic", kind: "explainer", lang: "en", seconds: 60 },
  ],
  "calling-llm-apis": [
    { id: "kQMQGormS4I", title: "How LLM API Calls Actually Work (OpenAI SDK vs Raw HTTP)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 74 },
    { id: "PrXJgsC_ysY", title: "Getting started with OpenAI API on Python", channel: "AssemblyAI", kind: "explainer", lang: "en", seconds: 56 },
  ],
  "building-chatbots": [
    { id: "fK_T-AiwvWw", title: "চ্যাটবট বানানো সহজ! কিন্তু Production-এ টিকবে তো? | AI Engineering", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 26 },
    { id: "7p-Ys3RIbIg", title: "LLM Chat Memory: Re-Send Conversation History", channel: "The Seams", kind: "explainer", lang: "en", seconds: 40 },
    { id: "bpqm_Jhjh-o", title: "LLM Chat Memory: Trim Long Conversation History", channel: "The Seams", kind: "explainer", lang: "en", seconds: 52 },
    { id: "SEI6BVU9tuA", title: "Why Does ChatGPT Forget What You Just Said? (Context Window Explained)", channel: "Kuro Explains", kind: "animation", lang: "en", seconds: 44 },
  ],
  "using-langchain": [
    { id: "HDjeZYduNcs", title: "What is LangChain?", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 142 },
    { id: "Chbv9X3SRJE", title: "CHAIN REACTION: Unlocking the Power of LangChain", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 53 },
    { id: "iYH8E8J2RVs", title: "LangChain vs LangGraph!", channel: "Pavan Belagatti", kind: "compare", lang: "en", seconds: 180 },
    { id: "I77wm5WKdJQ", title: "When LangChain Isn't Enough → Try LangGraph!", channel: "KodeKloud", kind: "compare", lang: "en", seconds: 178 },
  ],
  "rag-basics": [
    { id: "1468HyDi5Yw", title: "How AI Agents Remember Long Term Vector Databases + RAG", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 38 },
    { id: "FN1tz26155o", title: "RAG কীভাবে কাজ করে? | AI কীভাবে নিজের Knowledge থেকে উত্তর দেয়", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 41 },
    { id: "XCwMlBkUJdo", title: "RAG মানেই Vector DB? ৯০% মানুষ এখানেই ভুল করে", channel: "Rayhan AI Architecture", kind: "mistake", lang: "bn", seconds: 29 },
  ],
  "ai-agents": [
    { id: "BF2k_fKuCVM", title: "AI Agents explained in 3 steps", channel: "Jeff Su", kind: "explainer", lang: "en", seconds: 52 },
    { id: "FRrp0Px0peY", title: "Understanding AI Types: Generative AI vs AI Agents vs Agentic AI!", channel: "Pavan Belagatti", kind: "compare", lang: "en", seconds: 72 },
    { id: "YeD7ZcOwDqk", title: "AI Agents: The Future of Work | কেন AI Agent দরকার?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "vector-databases": [
    { id: "-P6Muecu_wI", title: "What is Vector Search and How Do Vector Databases Work?", channel: "MongoDB", kind: "explainer", lang: "en", seconds: 60 },
    { id: "n7JyJcP5vJ4", title: "Vector databases like Pinecone are powerful because they allow application developers to build", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 50 },
    { id: "_yFL2qgi23I", title: "Vector Database আসলে কী? | RAG কীভাবে Relevant Data খুঁজে পায়?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 21 },
    { id: "SGCARmUSHbk", title: "Embeddings আসলে কী? | AI কীভাবে Text-এর Meaning বোঝে?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 29 },
  ],
  "fine-tuning": [
    { id: "0iFEtnHyzE0", title: "Fine-tuning EXPLAINED in 40 sec", channel: "Shaw Talebi", kind: "explainer", lang: "en", seconds: 39 },
    { id: "K3wZYRAaCuc", title: "Prompt engineering is a lie. Here's what actually works", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 168 },
    { id: "aOZOH-9GH-E", title: "What is fine-tuning in LLMs?", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 165 },
    { id: "Hy9DmHo64Bc", title: "AI Model কে সব মুখস্থ করাবেন না! RAG vs Fine-tuning এর আসল পার্থক্য Shorts", channel: "Nabid In Motion", kind: "compare", lang: "bn", seconds: 56 },
  ],
  "data-pipelines": [
    { id: "krVJh7KLKn0", title: "What is Chunking in AI? A Solution to Passing Large Documents", channel: "MongoDB", kind: "explainer", lang: "en", seconds: 61 },
    { id: "u7VQzUTXAtQ", title: "Using Metadata in RAG Systems", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 48 },
    { id: "QPQg4DtX_mo", title: "নোংরা ডাটা দিয়ে কি AI সম্ভব? Data Cleaning Explained (পার্ট-৬) Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 58 },
  ],
  "retrieval-engineering": [
    { id: "jZeEFKdjSP4", title: "Cascading Retrieval vs Hybrid Search", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 47 },
    { id: "fvgr2OmLhTg", title: "Vector Search + Text Search = Results! | MongoDB Hybrid Search", channel: "MongoDB", kind: "explainer", lang: "en", seconds: 86 },
    { id: "luafD8DqB1o", title: "Reranking কী? | RAG কীভাব ে সবচেয়ে Relevant Result বেছ ে নেয়?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "context-engineering": [
    { id: "AfHU2BL-Bjs", title: "Why Context Engineering Is the Future of AI?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 174 },
    { id: "-PAavWCzhF4", title: "4 pillars of context engineering for AI agents", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 51 },
    { id: "6QJJ7yv9GRk", title: "AI Engineering: 1M context windows", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 105 },
    { id: "P6uoMAVnkf0", title: "AI-কে বেশি Data দিলেই কি Result ভালো হবে? | Context Engineering", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
  ],
  "model-evaluation": [
    { id: "Sfw-6xR3Jo8", title: "How AI agents cheat on coding benchmarks", channel: "Aish Reganti", kind: "explainer", lang: "en", seconds: 100 },
    { id: "aFjWvkKhBTI", title: "What Are AI Evals", channel: "Jessica Wang", kind: "explainer", lang: "en", seconds: 45 },
  ],
  "agent-orchestration": [
    { id: "AwrLcTW0lNM", title: "What Is an AI Orchestrator? AI Agent Orchestration Explained", channel: "TestMu AI (Formerly LambdaTest)", kind: "explainer", lang: "en", seconds: 64 },
    { id: "7liBQxFSIuE", title: "Multi-Agent Orchestration by OpenAI - Swarm", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 53 },
    { id: "k4e-e82ApkE", title: "একটি AI এজেন্ট দিয়ে সব কাজ করচ্ছেন? বড় ভুল! | Multi-Agent Systems", channel: "Rayhan AI Architecture", kind: "mistake", lang: "bn", seconds: 31 },
  ],
  "tool-calling": [
    { id: "4vfDgLvuNQk", title: "Function calling for LLMs, what is it?", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 54 },
    { id: "TJGmO5ZFJYQ", title: "Function Calling: How AI Uses Your APIs", channel: "Postman", kind: "explainer", lang: "en", seconds: 167 },
    { id: "dY9521SoRkI", title: "Tool Use / Function Calling: How Claude Runs Code", channel: "AI in Hindi | Cloud Edventures", kind: "explainer", lang: "en", seconds: 36 },
  ],
  "structured-outputs": [
    { id: "6jUk_m5r3vM", title: "Structured Outputs in ChatGPT | Explained in 30 seconds", channel: "Vellumy", kind: "explainer", lang: "en", seconds: 33 },
    { id: "DuC2EcLqTWY", title: "What is OpenAI Structured Outputs?", channel: "Atef Ataya", kind: "explainer", lang: "en", seconds: 35 },
  ],
  "guardrails-and-safety": [
    { id: "2U8z7y3uTYE", title: "The hidden security risk in your system prompts", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 122 },
    { id: "NQhsLVmuItA", title: "n8n's NEW Guardrail Node is a Gamechanger for AI Agents", channel: "Nate Herk | AI Automation", kind: "explainer", lang: "en", seconds: 84 },
  ],
  "model-routing": [
    { id: "f-rFWcSmWkY", title: "1. AI Model Routing: How Smart Routing Picks the Right LLM", channel: "Databricks", kind: "explainer", lang: "en", seconds: 94 },
    { id: "PU--u4q_xwg", title: "LiteLLM vs OpenRouter! Which one should YOU use with OpenAI Agents SDK?", channel: "Tech world since 2025", kind: "compare", lang: "en", seconds: 49 },
  ],
  "observability": [
    { id: "hLxrj2uiQt8", title: "LLMOps The AI Engineering Skill Employers Care About Most", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 47 },
    { id: "hwkefavUd3Q", title: "Why Clay's Finance Team Loves LangSmith", channel: "LangChain", kind: "explainer", lang: "en", seconds: 43 },
  ],
  "latency-optimization": [
    { id: "5Y_JM6C9xOA", title: "How the vLLM inference engine works?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 174 },
    { id: "0wC9Igb3STA", title: "From 7-Second Lag to Sub-1.6s — The Voice AI Latency Journey", channel: "AssemblyAI", kind: "real-system", lang: "en", seconds: 106 },
  ],
  "cost-optimization": [
    { id: "GUSfx3Z4r4A", title: "AI Token দ্রুত শেষ হয়ে যাচ্ছে? Token খরচ কমানোর ৫টি সেরা কৌশল!", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 173 },
    { id: "7caDFcTAssA", title: "Why Are LLMs Expensive to Deploy?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 48 },
  ],
  "reliability-engineering": [
    { id: "pFX7spnBGGc", title: "Why some apps survived the OpenAI outage: AI gateway failover", channel: "AI Quality Nerd", kind: "explainer", lang: "en", seconds: 36 },
  ],
  "security": [
    { id: "3sM_XmXZnDI", title: "AI Security: Preventing Data Leaks in RAG", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 165 },
    { id: "jQId5VCOqfs", title: "API Key আসলে কী? | AI Project-এ কেন এত গুরুত্বপূর্ণ?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 41 },
    { id: "uTmidRg-XV8", title: "AI System Security | Production AI Secure রাখার Basic Foundation", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 41 },
  ],
  "ai-infrastructure": [
    { id: "oM5-knpFPw4", title: "Kubernetes Liveness vs Readiness Probes, Done Right!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 168 },
    { id: "tmQKLYW_M0c", title: "Docker কী? AI Developer-রা Docker কেন ব্যবহার করে", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 41 },
    { id: "gWouZYfYRM4", title: "Production Server-এ AI System Deploy করার সিক্রেট! | Part 3", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 30 },
  ],
  "ci-cd-for-ai": [
    { id: "ejRNIIZ0rCk", title: "CI CD with GitHub Actions Explained in 60 Seconds.", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 56 },
    { id: "VMKGSGCZZdE", title: "কোডিং হবে রোবটের মাধ্যমে! | GitHub Actions & CI/CD Bangla Tutorial | (Bangla) - Part 8 Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
  ],
  "production-monitoring": [
    { id: "nO84ztgzPV0", title: "Model Drift vs Concept Drift: Tips for Data Scientists!!!", channel: "Rajeev Kanth | BEPEC", kind: "explainer", lang: "en", seconds: 58 },
  ],
  "human-in-the-loop": [
    { id: "DTnL32C1UMw", title: "OpenAI Agent Builder: Human-in-the-Loop Optimization", channel: "Leon van Zyl", kind: "explainer", lang: "en", seconds: 39 },
    { id: "BxuHokLhCOQ", title: "AI Agent কি সব সিদ্ধান্ত নিজেই নেবে? | Human-in-the-Loop Explained", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 21 },
    { id: "UCxw_q8yqwg", title: "New one click human review node for n8n tools", channel: "n8n", kind: "explainer", lang: "en", seconds: 41 },
  ],
  "data-governance": [
    { id: "n3l518qym3o", title: "সাবধান! AI Rules না মানলে আপনার প্রজেক্ট ব্যান হতে পারে | GDPR & EU AI Act Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
    { id: "U5W1MqH3aZs", title: "Myth: You Need to Host Your Own Model for Security or Privacy", channel: "Stanford Online", kind: "explainer", lang: "en", seconds: 59 },
  ],
  "system-design": [
    { id: "FTMFprsV-wI", title: "AI System Design in 2026", channel: "Gaurav Sen", kind: "explainer", lang: "en", seconds: 63 },
    { id: "oGNSz3HTP9w", title: "Why bother learning ML System Design?", channel: "Marina Wyss - AI & Machine Learning", kind: "explainer", lang: "en", seconds: 26 },
  ],
};
