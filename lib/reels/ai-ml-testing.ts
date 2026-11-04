/**
 * The reels of the AI/ML Testing module, by topic slug, in the order that the reader sees them.
 * Add a reel: put its entry in the list of its topic, then run `npm test` and `node scripts/check-reels.ts`.
 * A topic with no good reel has an empty list.
 */
import type { AiMlTestingSlug } from "../ai-ml-testing/topics.ts";
import type { Reel } from "./reels.ts";

export const AI_ML_TESTING_REELS: Readonly<Record<AiMlTestingSlug, readonly Reel[]>> = {
  "ai-ml-for-testers": [
    { id: "EO6K3ohH5D4", title: "Machine Learning Paradigms: Supervised and Unsupervised Learning", channel: "CodeEmporium", kind: "explainer", lang: "en", seconds: 44 },
    { id: "aR7WVptzFnw", title: "AI কীভাবে শেখে? | Supervised vs Unsupervised Explained (পার্ট-৩) Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
    { id: "3JxKMQLiHrA", title: "AI যখন নিজের ভুল থেকে শেখে! | Reinforcement Learning Explained (পার্ট-৮) Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 59 },
  ],
  "llm-tokens-temperature": [
    { id: "XsLK3tPy9SI", title: "Temperature in LLMs", channel: "3Blue1Brown", kind: "explainer", lang: "en", seconds: 60 },
    { id: "IVZ2OL8mU8c", title: "Most devs don't know how LLM tokens work", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 49 },
    { id: "uh5wFLOyG_4", title: "Why Should You Care About AI Tokens in 2026?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 111 },
    { id: "yeU1mH0YSo8", title: "bpe tokenizer", channel: "DataMListic", kind: "explainer", lang: "en", seconds: 103 },
  ],
  "ai-application-architecture": [
    { id: "qYLEnmNMXiA", title: "RAG vs Fine-Tuning: Which Actually Wins", channel: "Pavan Belagatti", kind: "compare", lang: "en", seconds: 178 },
    { id: "qxr7ovnDBHg", title: "The simplest RAG explanation ever", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 66 },
    { id: "8wyZ8deR9wM", title: "Production AI Architecture | LLM, RAG, Agent, MCP—সব একসাথে কীভাবে কাজ করে?", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 29 },
  ],
  "prompt-engineering-basics": [
    { id: "_WwfE5feS8w", title: "Prompt Engineering Skills Real AI Engineers Need", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 46 },
    { id: "LTZFHycjk9o", title: "Zero-Shot Prompting কী? সহজভাবে শিখুন AI Tricks!", channel: "Nur Azad | Engineer", kind: "explainer", lang: "bn", seconds: 41 },
  ],
  "prompt-testing": [
    { id: "b1SPKtN05y8", title: "What is Prompt Injection?", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 53 },
    { id: "PCnP3nWsF8M", title: "Emoji smuggling is used as a prompt injection attack vector", channel: "Jas Wong", kind: "explainer", lang: "en", seconds: 31 },
    { id: "BASVwoqCPPc", title: "Why You Need Users to Break Your AI Project", channel: "DeepLearningAI", kind: "explainer", lang: "en", seconds: 55 },
    { id: "IB70k_Ak2-A", title: "Fixing Edge Cases & Rapid Iteration in AI Agents", channel: "AssemblyAI", kind: "explainer", lang: "en", seconds: 28 },
  ],
  "structured-outputs": [
    { id: "jqOykPd-QXs", title: "OpenAI Function Calling with Structured Outputs", channel: "Atef Ataya", kind: "explainer", lang: "en", seconds: 40 },
    { id: "u8PCEwP6AoQ", title: "Most developers haven't tried Structured output with JSON schema: stop LLM hallucinations yet.", channel: "Content in Tech", kind: "explainer", lang: "en", seconds: 60 },
    { id: "Dfv-OsRkZAI", title: "Unlocking Potential: OpenAI's New Structured Outputs Explained", channel: "Stefan Kløvning", kind: "explainer", lang: "en", seconds: 42 },
  ],
  "promptfoo-first-eval": [
    { id: "4_GdhE1m-Vs", title: "One AI Question - why should you learn about evals, with Elizabeth Hutton", channel: "Arize AI", kind: "explainer", lang: "en", seconds: 41 },
    { id: "DzmcklKXbik", title: "AI Eval Mistakes - AI Hot Takes 2", channel: "Mastra", kind: "mistake", lang: "en", seconds: 62 },
  ],
  "promptfoo-assertions": [
    { id: "XqN4YJOJYik", title: "Do you really know what “LLM as a judge” means?", channel: "Product Founder with Amir Rezaei", kind: "explainer", lang: "en", seconds: 41 },
    { id: "fEV78pw6EkQ", title: "LLM as a judge: the biases to test for", channel: "Old Man Tech", kind: "explainer", lang: "en", seconds: 42 },
    { id: "ZxnD7TUUpy4", title: "Your LLM judge is not deterministic", channel: "Valohai", kind: "explainer", lang: "en", seconds: 36 },
  ],
  "deepeval-pytest": [
    { id: "E_kgCgNcyNc", title: "How to Test API Response via the Deepeval?", channel: "The Testing Academy", kind: "explainer", lang: "en", seconds: 107 },
  ],
  "hallucination-detection": [
    { id: "H-JHumbpORI", title: "My agent hallucinated - what do I do?", channel: "Matt Pocock", kind: "explainer", lang: "en", seconds: 92 },
    { id: "FuxVyAk6Z7w", title: "This is how Lyft reduced agent hallucinations by 20%.", channel: "Gaurav Sen", kind: "real-system", lang: "en", seconds: 103 },
    { id: "DtS3wiIWMG8", title: "Hallucination কী? এর সহজ সমাধান", channel: "Rayhan AI Architecture", kind: "explainer", lang: "bn", seconds: 31 },
    { id: "dxicKH0tADc", title: "AI Hallucination কী?", channel: "ArthaMatrix", kind: "explainer", lang: "bn", seconds: 38 },
  ],
  "model-comparison-regression": [
    { id: "GAd5J257vA0", title: "Compare LLMs like a pro – Now with Vertex AI!", channel: "Google Cloud Tech", kind: "compare", lang: "en", seconds: 58 },
    { id: "pTbDqo1_auw", title: "Why does AI give you a different answer every time? (Autoregression Explained)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 167 },
  ],
  "rag-testing-basics": [
    { id: "1M24UHWL41A", title: "RAG Retrieval Metrics Explained: Recall, Precision, MRR & NDCG", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 96 },
    { id: "myJb77fd1fs", title: "How to evaluate RAG answers: faithfulness, relevance, LLM judges, RAGAS, TruLens, DeepEval", channel: "The AI Foundry", kind: "explainer", lang: "en", seconds: 59 },
  ],
  "llm-api-testing": [
    { id: "uWzX8Jc9tO8", title: "Why Claude Uses 3 Different Rate Limits?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 144 },
    { id: "93cqqRmSZVM", title: "OpenAI API Python Code Walkthrough (Line by Line Explained)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 98 },
  ],
  "chatbot-ui-testing": [
    { id: "NIxQBIv9o8M", title: "5 Built-in Playwright Fixtures You Must Know!", channel: "RoboticQA Academy", kind: "explainer", lang: "en", seconds: 43 },
  ],
  "langchain-testing": [
    { id: "xpg9JSGSHYk", title: "Automate Calendar Events with Langchain!", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 83 },
    { id: "TIMdcJN4JeY", title: "What Is LangChain, Actually?", channel: "LangChain", kind: "explainer", lang: "en", seconds: 90 },
  ],
  "langgraph-agent-testing": [
    { id: "oY1htTx_h9U", title: "The Hardest Part of Testing Agents: Write Access", channel: "LangChain", kind: "explainer", lang: "en", seconds: 64 },
    { id: "An160wrTtt4", title: "What is LangGraph!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 139 },
    { id: "ZWgFAtNzGqg", title: "How LangGraph Makes LLM Apps Simple & Powerful", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 76 },
    { id: "-7GgFPFY4WI", title: "How Antigravity Evaluates a LangGraph Agent", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 29 },
  ],
  "owasp-llm-risks": [
    { id: "mZYVmMRSSQc", title: "AI security is no longer optional OWASP Top 10 LLM risks", channel: "Cyber Adam", kind: "explainer", lang: "en", seconds: 27 },
    { id: "PYbcbuNTPBI", title: "Prompt Injection: The Importance of Secure LLM Design", channel: "Prashant Dey", kind: "explainer", lang: "en", seconds: 47 },
    { id: "dwnVgpa7p9g", title: "MCP Security in 30s: 3 Checks Before You Ship", channel: "Appsecco", kind: "explainer", lang: "en", seconds: 32 },
  ],
  "red-teaming": [
    { id: "iquALVDdDWc", title: "What is AI Red Teaming? (Quick Definition & Why It's Crucial for AI Safety)", channel: "Giskard", kind: "explainer", lang: "en", seconds: 47 },
    { id: "CON4WoIQ8vc", title: "LLM Jailbreaking Explained by Lead AI researcher at Giskard AI", channel: "Giskard", kind: "explainer", lang: "en", seconds: 52 },
    { id: "A3TcAcppaqw", title: "Protect against vulnerabilities in your app with Red teaming", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 38 },
  ],
  "guardrails-bias": [
    { id: "htcPiuxMXCM", title: "What is Algorithmic Bias in AI?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 53 },
    { id: "rATveXR050k", title: "AI কি পহেলা বৈশাখ চেনে? | Machine Learning Bias Explained", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 164 },
    { id: "3Tk0sFoFYvM", title: "Human Bias is Harder to Fix than AI Bias", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 18 },
  ],
  "ai-test-strategy": [
    { id: "FJMOTghjhMg", title: "Brief introduction to Test Planning!", channel: "Software Testing Mentor", kind: "explainer", lang: "en", seconds: 59 },
    { id: "SJlwDM6KoGg", title: "Test Planning in Software Testing!", channel: "TestMu AI (Formerly LambdaTest)", kind: "explainer", lang: "en", seconds: 59 },
    { id: "6NLlARqb2AE", title: "How to Create a Test Plan", channel: "The Testing Academy", kind: "explainer", lang: "en", seconds: 53 },
  ],
  "ai-quality-metrics": [
    { id: "Zg0do894s9w", title: "RAG retrieval metrics explained: recall@k, precision@k, MRR, nDCG", channel: "The AI Foundry", kind: "explainer", lang: "en", seconds: 54 },
  ],
  "ai-observability": [
    { id: "kC1Em8VuIbQ", title: "Agent Observability: LangSmith vs Arize vs Phoenix", channel: "Thomas Prommer", kind: "explainer", lang: "en", seconds: 38 },
    { id: "jAqnzq4e5GA", title: "Monitoring AI in Production: Model Drift, Observability & Agentic AI | Jeff Tyler | AIMC ST 2026", channel: "AI Masterclass", kind: "explainer", lang: "en", seconds: 57 },
    { id: "1ge0joWkFIY", title: "Toy Augmented Generation Project to a Production-Ready AI System", channel: "codebasics", kind: "explainer", lang: "en", seconds: 67 },
  ],
  "capstone-project-setup": [
    { id: "E53DusBh3jk", title: "How Vector Databases Store and Use Data", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 51 },
  ],
  "capstone-test-pipeline": [],
  "capstone-cicd-presentation": [
    { id: "noLED7kKBF4", title: "Multi-stage deployments in GitHub Actions", channel: "GitHub", kind: "explainer", lang: "en", seconds: 28 },
  ],
  "ai-testing-career-kit": [
    { id: "N3FDISelpOE", title: "The AI Portfolio That Gives You an Edge in Interviews", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 31 },
    { id: "vOVolqtZVLk", title: "Is Software Testing a Good Career Option?See how much Software Testers earn?", channel: "Software Testing Mentor", kind: "explainer", lang: "en", seconds: 61 },
  ],
  "advanced-rag-failures": [
    { id: "Wyju19LletQ", title: "What is Multi-hop retrieval?", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 61 },
    { id: "MLFzgNwze5c", title: "Enterprise RAG Strategy - Why Your AI Fails in Production Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "en", seconds: 177 },
  ],
  "chunking-embedding-testing": [
    { id: "vvp97qJB6CU", title: "RAG Chunking Strategies Explained (Fixed Size vs Semantic Chunking)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 132 },
    { id: "qvbMMButyAg", title: "The Best Chunking Strategy for RAG?", channel: "Pinecone", kind: "explainer", lang: "en", seconds: 36 },
    { id: "KTc0qvJEqhY", title: "What is an Embedding Model?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 99 },
    { id: "DUQGBH4Dw_E", title: "Problem: Too much data for embedding? Solution: Chunk your data!", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 60 },
  ],
  "rag-synthetic-regression": [
    { id: "MPRyqO4LEgs", title: "Why Synthetic Data Can't Replace Real Users for LLM Products", channel: "Hamel Husain", kind: "explainer", lang: "en", seconds: 45 },
    { id: "4iehiGYajfo", title: "AI for QA | How to Generate Test Data Using AI | Valid, Invalid & Boundary Data", channel: "Automate With SDET", kind: "explainer", lang: "en", seconds: 49 },
  ],
  "vector-db-basics": [
    { id: "aExSNbSC1f8", title: "How Vector Databases Power AI", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 76 },
    { id: "0d6tBMxFCt4", title: "Vector Database: A Must-Know Guide", channel: "ByteMonk", kind: "explainer", lang: "en", seconds: 56 },
    { id: "LtpKwnFFgNU", title: "Notion scaled its vector database by 10x.", channel: "Gaurav Sen", kind: "real-system", lang: "en", seconds: 109 },
  ],
  "vector-db-quality-performance": [
    { id: "_PiW515vOnY", title: "Speed Up Vector Search 10x: How Vector Quantization Cuts Costs & Boosts AI Performance", channel: "MongoDB", kind: "explainer", lang: "en", seconds: 53 },
    { id: "X5bybYqc5zk", title: "Why Your Vector Database Is Crashing in Production Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "en", seconds: 174 },
    { id: "GDfncxI6bCE", title: "Why Indexing is Critical in Database Systems", channel: "Hussein Nasser", kind: "explainer", lang: "en", seconds: 53 },
  ],
  "multi-turn-testing": [
    { id: "iEXxrzexUmw", title: "Why do AI agents forget everything?", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 47 },
    { id: "cNxpB5Bj7rg", title: "Why Claude Code \"Forgets\" (and How to Manage Context)", channel: "Amigoscode", kind: "explainer", lang: "en", seconds: 92 },
    { id: "VcVUr6phazk", title: "Why Your LLM Starts Forgetting Instructions", channel: "Arize AI", kind: "explainer", lang: "en", seconds: 49 },
    { id: "EftSu4UgmiQ", title: "Multi-Turn Attacks Break AI That Looked Safe", channel: "DevHacks 360", kind: "explainer", lang: "en", seconds: 22 },
  ],
  "virtual-assistant-testing": [],
  "agent-architecture": [
    { id: "zTKm0d0lgU4", title: "AI Agent Architecture Explained for Beginners!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 123 },
    { id: "Y2eD_I7eC5U", title: "ReAct pattern: Reason and act agent architecture", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 47 },
  ],
  "agent-decision-testing": [
    { id: "6WFqfXZ44Gg", title: "Test AI Agents Before Release | LangChain Tutorial", channel: "Soba Labs", kind: "mistake", lang: "en", seconds: 31 },
  ],
  "multi-agent-testing": [
    { id: "eAfb8coAD0A", title: "Multi Agent Systems: Why your AI orchestration fails Shorts", channel: "Nabid In Motion", kind: "explainer", lang: "en", seconds: 180 },
    { id: "7EhiJL_6ats", title: "Multi-agent vs. single-agent: Which should you use?", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 119 },
    { id: "saMAb2MuKTs", title: "Understanding Multi-Agent RAG Systems!", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 71 },
  ],
  "multimodal-testing": [
    { id: "9B3yvPJVlVw", title: "Document AI: How Agents add the brain to OCR's eyes", channel: "DeepLearningAI", kind: "explainer", lang: "en", seconds: 77 },
    { id: "Ppy4oAzYreI", title: "This AI Agent Handles Your Invoices End to End", channel: "codebasics", kind: "explainer", lang: "en", seconds: 47 },
  ],
  "finetuned-model-testing": [
    { id: "dBFLv7q7RYo", title: "What is Fine-Tuning LLMs?", channel: "Pavan Belagatti", kind: "explainer", lang: "en", seconds: 131 },
    { id: "TQynIWJ3DHs", title: "Why Prompt Engineering is DEAD (Do This to Your LLM Instead)", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 166 },
    { id: "2tq3qQTUGWE", title: "Generic AI? No thank you! It's the fine-tuned models for me", channel: "Google Cloud Tech", kind: "explainer", lang: "en", seconds: 58 },
    { id: "QMnlS39vZdA", title: "Base LLM vs. Instruction-tuned LLM ChatGPT", channel: "Elvis Saravia", kind: "compare", lang: "en", seconds: 45 },
  ],
  "synthetic-data-dspy": [
    { id: "rr6O2HQFRkg", title: "What is Ground Truth in AI?", channel: "IBM Technology", kind: "explainer", lang: "en", seconds: 87 },
    { id: "CFQ2gJmucoQ", title: "ইন্টারনেটের সব ডেটা কি শেষ? এআই এখন নিজেই নিজের ডেটা বানাচ্ছে! Synthetic Data Explained", channel: "Nabid In Motion", kind: "explainer", lang: "bn", seconds: 176 },
  ],
  "production-observability": [
    { id: "CT7d38_jEnY", title: "LangSmith vs Langfuse vs Arize (in 60 seconds)", channel: "AIEdTalks", kind: "compare", lang: "en", seconds: 59 },
    { id: "_eeAKOaKusY", title: "See exactly what your AI is doing (Phoenix by Arize)", channel: "PeterTamAI", kind: "explainer", lang: "en", seconds: 38 },
  ],
  "model-drift-ab-testing": [
    { id: "WrUi-JjJHD8", title: "how a/b testing drives better decisions in web systems", channel: "ByteMonk", kind: "explainer", lang: "en", seconds: 53 },
    { id: "HTe2_uIWSuY", title: "Canary Deployment in Kubernetes Explained", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 176 },
  ],
  "ai-load-testing": [
    { id: "rQWR_D3aoG8", title: "Rate Limit : Token Bucket Algorithm", channel: "ByteMonk", kind: "explainer", lang: "en", seconds: 53 },
    { id: "UfmG0PeMS-k", title: "Why Your LLM is Slow Despite High GPU Usage?", channel: "KodeKloud", kind: "explainer", lang: "en", seconds: 120 },
  ],
  "cicd-eval-pipelines": [],
  "advanced-capstone-setup": [
    { id: "r-7AnDBoBFE", title: "What is an AI Agent? Agentic RAG and RAG-enabled Chatbots", channel: "MongoDB", kind: "explainer", lang: "en", seconds: 60 },
    { id: "do8Rx6CpQX8", title: "4 Ways to Build an AI Agent", channel: "Tech With Tim", kind: "explainer", lang: "en", seconds: 39 },
  ],
  "advanced-capstone-test-suite": [],
  "advanced-capstone-pipeline": [
    { id: "VhqsXifzdvQ", title: "How Benchling's Team Actually Looks at AI Traces | Max Agency", channel: "LangChain", kind: "real-system", lang: "en", seconds: 48 },
    { id: "4sWCCasRzPQ", title: "This Is Why Your Main Agent Shouldn't Read Every Trace", channel: "LangChain", kind: "real-system", lang: "en", seconds: 85 },
  ],
  "advanced-capstone-presentation": [
    { id: "MfYL4RnkJFk", title: "The AI Portfolio Mistake That Kills Your Job Chances 2026", channel: "Tech With Tim", kind: "mistake", lang: "en", seconds: 42 },
  ],
};
