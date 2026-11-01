# AI & ML Testing Professional Course — Full Syllabus (Phase 1 and Phase 2)

Source: <https://www.journeytoautomation.org/courseAIMLTesting-phase1-and-phase2> (scraped 2026-11-01). The page is a client-side React app, so the syllabus text was read from the JavaScript bundle the page loads (`/assets/index-*.js`).

> Third-party text. Quoted here as the source syllabus, not as site content.

## Phase 1 — Foundations

**Badge:** Phase 1 / Phase 2 — Foundations

**AI & ML Testing Professional Course**

Built specifically for QA Engineers, SDETs & Test Leads. No Machine Learning background required. Master 10+ industry tools and build a portfolio of 6 AI testing projects you can show in interviews.

**At a glance:** Weeks: 10 · Sessions: 26 · Projects: 6 · Modules: 8 · Tools: 10+

### What you'll learn

- AI/ML Fundamentals: Understand how AI works from a tester's perspective — tokens, embeddings, temperature, and non-determinism.
- Prompt Engineering & Testing: Write effective prompts and systematically test where they break with edge cases and adversarial inputs.
- LLM Evaluation Tools: Master PromptFoo, DeepEval, and Giskard to write assertion-based eval suites and run model comparisons.
- Hallucination Detection: Build automated hallucination test suites using factual grounding checks and cross-reference validation.
- Security & Red Teaming: Test for OWASP Top 10 LLM risks — prompt injection, jailbreaks, data leakage, and bias.
- LangChain & LangGraph Testing: Test AI chains and multi-step agents with LangSmith and LangFuse tracing.
- LLM API Automation: Test OpenAI, Anthropic, and Gemini APIs using Postman and Python, plus chatbot UIs with Playwright.
- AI Observability: Set up Arize Phoenix and LangFuse for production monitoring, cost tracking, and drift detection.
- CI/CD for AI: Integrate eval suites into GitHub Actions pipelines with quality gates on every PR.
- Capstone Project: Build and test a complete RAG chatbot — PromptFoo + DeepEval + red teaming + Playwright + CI/CD.

### Tools you'll master

| Category | Tools | What you'll do |
| --- | --- | --- |
| LLM Evaluation & Testing | PromptFoo, DeepEval, Ragas | Compare models, write assertions, automate eval suites |
| Security & Red Teaming | PromptFoo Red Teaming, Giskard | Prompt injection, jailbreak, data leakage testing |
| Observability & Tracing | LangFuse, LangSmith, Arize Phoenix | Trace LLM calls, monitor quality, detect drift |
| LLM Frameworks | LangChain, LangGraph | Build and test AI chains and agents |
| Vector Databases | ChromaDB, Qdrant | Store and query embeddings for RAG testing |
| API & Automation | Postman, Playwright, Python requests | Test LLM APIs and chatbot UIs end-to-end |
| Guardrails | Guardrails AI, NeMo Guardrails | Output validation, safety filters, structured output enforcement |
| CI/CD | GitHub Actions, PromptFoo CI | Automated eval on every PR/deployment |

### Course content

#### 01. Module 1: AI/ML Fundamentals for Testers

*Week 1 · 3 Sessions*

**Session 1: What is AI/ML — The Tester's Perspective**

- Explore ChatGPT, Claude, Gemini — observe how the same prompt gives different outputs.
- Discuss: where does testing fit in AI? Non-determinism as the fundamental challenge.
- Supervised vs Unsupervised vs Reinforcement Learning (high-level, tester-relevant).

**Session 2: How LLMs Actually Work — Tokens, Probabilities & Temperature**

- Experiment with temperature settings (0 to 1) in OpenAI Playground.
- See how the same prompt at different temperatures produces different outputs.
- LLMs, tokens, embeddings, context windows — explained simply. Understand tokens and costs.

**Session 3: AI Application Architectures — What You'll Be Testing**

- Map a real AI product (e.g., customer support chatbot) into components: prompt → model → output → guardrails → user.
- Identify test points at each layer.
- Fine-tuning vs RAG vs Prompt Engineering — when companies use what.

#### 02. Module 2: LLM Behavior & Prompt Engineering

*Week 2 · 3 Sessions*

**Session 4: Prompt Engineering Fundamentals — Writing Effective Prompts**

- Write 10 different prompts for the same task and compare outputs.
- System prompts, user prompts, few-shot examples, chain-of-thought prompting.
- Multi-language prompt behavior — why LLMs hallucinate more in non-English.

**Session 5: Prompt Testing — Finding Where Prompts Break**

- Take a working prompt and systematically break it: edge cases, ambiguous inputs, adversarial inputs.
- Document failure modes — prompt testing as a skill.
- Boundary values for prompts: what happens at extremes.

**Session 6: Structured Outputs & Output Validation**

- Test JSON mode, function calling, tool use across GPT-4 and Claude.
- Build validation checks: is the JSON valid? Does it match the schema?
- What happens when the model hallucinates a field?

#### 03. Module 3: LLM Evaluation & Testing Tools

*Weeks 3–4 · 5 Sessions*

**Session 7: PromptFoo Deep Dive — Setup, Config & First Eval**

- Install PromptFoo. Write YAML config. Define test cases for a customer support chatbot.
- Run eval. View results in browser UI.
- YAML-based eval configs vs code-based testing approaches.

**Session 8: PromptFoo Advanced — Assertions, LLM-as-Judge & Model Comparison**

- Write advanced assertions: contains, regex, llm-rubric, semantic similarity.
- Compare GPT-4o vs GPT-4o-mini vs Gemini. Analyze cost vs quality trade-offs.

**Session 9: DeepEval — Pytest for LLMs**

- Install DeepEval. Write test cases using Pytest syntax.
- Use HallucinationMetric, AnswerRelevancyMetric, FaithfulnessMetric.
- Run test suite. View Confident AI dashboard. 50+ available metrics.

**Session 10: Hallucination Detection — Techniques & Automation**

- Build a hallucination test suite: factual accuracy tests, grounding checks, cross-reference validation.
- Compare SelfCheckGPT approach vs tool-based detection.
- Test at different temperatures. Golden datasets for regression testing.

**Session 11: Model Comparison & Regression Testing**

- Build a golden dataset of 50 Q&A pairs. Run the same dataset across 3 models.
- Track scores over time. Simulate a model upgrade and check what broke.
- Snapshot testing for LLMs. Cost & latency testing — token usage tracking.

#### 04. Module 4: RAG Basics, API & Automation Testing

*Week 5 · 3 Sessions*

**Session 12: RAG Testing Fundamentals**

- Understand Retrieval-Augmented Generation (RAG) architecture: retriever, context, generator.
- Test retrieval quality — precision, recall, and relevance of retrieved chunks.
- Test end-to-end RAG pipelines: does the answer match the retrieved context?
- Common RAG failure modes: hallucination, context mismatch, retrieval gaps.

**Session 13: LLM API Testing — OpenAI, Anthropic, Gemini Endpoints**

- Test LLM APIs using Postman and Python requests: send prompts, validate responses.
- Test error handling, rate limits, timeout behavior.
- Streaming responses — testing server-sent events (SSE) and chunked responses.
- Compare API structures across providers. Performance benchmarking — response times.

**Session 14: Chatbot UI Testing with Playwright**

- Build end-to-end tests for a chatbot interface using Playwright.
- Test: message sending, response rendering, streaming output, conversation history.
- Edge cases: empty input, very long input, special characters.
- Playwright for chatbot testing — waiting for AI responses, asserting on dynamic content.

#### 05. Module 5: LangChain & LangGraph Testing

*Week 6 · 2 Sessions*

**Session 15: LangChain Fundamentals & Testing Chains**

- Build a simple LangChain app (prompt → LLM → output parser).
- Test each component independently. Test the chain end-to-end.
- Use LangSmith to trace every step — node-by-node state diffs, execution graphs.

**Session 16: LangGraph Agent Testing & Tracing**

- Build a multi-step LangGraph agent (tool-using agent that searches web + does calculations).
- Test agent decisions at each node. Use LangFuse for tracing.
- Identify where agents fail and why. Agent testing challenges: multi-step decisions, loop detection, error recovery.

#### 06. Module 6: Security, Safety & Red Teaming

*Week 7 · 3 Sessions*

**Session 17: OWASP Top 10 for LLMs — Understanding AI Vulnerabilities**

- Walk through all 10 OWASP LLM risks with real-world examples.
- For each risk, identify: what it looks like, who's affected, and how to test for it.
- Prompt injection attacks — direct injection, indirect injection, multi-turn attacks.

**Session 18: Red Teaming with PromptFoo & Giskard**

- Run PromptFoo red teaming (npx promptfoo redteam run) on a chatbot.
- Run Giskard's 40+ automated attack probes. Compare results.
- Map findings to OWASP Top 10. Jailbreaking techniques — DAN, role-playing exploits, encoding attacks.

**Session 19: Guardrails, Output Validation & Bias Testing**

- Implement Guardrails AI for output validation. Test NeMo Guardrails for safety filtering.
- Run bias and toxicity tests using DeepEval metrics.
- Test for fairness across demographics. Data leakage testing — PII exposure, system prompt extraction.

#### 07. Module 7: AI Test Planning, Metrics & Observability

*Week 8 · 3 Sessions*

**Session 20: AI Test Strategy & Planning**

- Create a complete AI test plan for a real-world scenario (AI-powered customer support).
- Define: test scope, test types, tools, metrics, and risk assessment.
- AI test strategy — what to test, when to test, how much to test.

**Session 21: AI Quality Metrics & Reporting**

- Build a quality dashboard: hallucination rate, faithfulness score, latency P95, cost per session.
- Create executive-level reports from eval results.
- Quality metrics — hallucination rate, faithfulness, answer relevancy, toxicity rate, cost per query.

**Session 22: AI Observability & Production Monitoring**

- Set up Arize Phoenix for production monitoring.
- Build alerts for: hallucination spikes, cost anomalies, latency degradation, model drift.
- Integrate with LangFuse for real-time tracing. Silent model updates detection.

#### 08. Module 8: Capstone Project & Career Kit

*Weeks 9–10 · 4 Sessions*

**Session 23: Project Setup — Build the AI App to Test**

- Build a customer support RAG chatbot using LangChain + ChromaDB.
- Load company FAQ documents. Deploy as an API.
- This is the application you'll test throughout the capstone.

**Session 24: Project Execution — Full Test Pipeline**

- Write complete test suite: PromptFoo eval (20 test cases) + DeepEval hallucination tests.
- PromptFoo red teaming + Giskard vulnerability scan + Playwright UI tests.
- Trace everything with LangFuse.

**Session 25: CI/CD Integration & Project Presentation**

- Integrate eval suite into GitHub Actions (run on every PR).
- Build a quality dashboard. Present your project: test results, vulnerabilities found, quality metrics.
- Peer review session.

**Session 26: AI Testing Career Kit — Resume, Portfolio & Interviews**

- Build your AI testing resume: highlight capstone project, tools mastery, and metrics.
- Optimize LinkedIn profile for AI testing roles.
- Practice 20 common AI testing interview questions. Portfolio presentation tips. Job search strategy.

### Career outcomes

After completing Phase 1, you'll be qualified for these roles:

- AI Test Engineer
- LLM Evaluation Specialist
- AI Quality Engineer
- SDET — AI/ML Applications
- QA Lead — AI Products
- Red Team Analyst — AI Security

## Phase 2 — Mastery

**Badge:** Phase 2 — Mastery

**AI & ML Testing Professional Course**

Advanced AI testing for production systems. Master RAG testing, agent testing, multi-modal AI, production observability, and CI/CD eval pipelines. Prerequisite: Phase 1 completion.

**At a glance:** Weeks: 8 · Sessions: 21 · Projects: 12 · Modules: 9 · Tools: 15+

### Tools you'll master

| Category | Tools | What you'll do |
| --- | --- | --- |
| Advanced RAG Evaluation | Ragas (advanced), DeepEval RAG metrics, Giskard RAGET | Advanced retrieval testing, chunking analysis, multi-doc reasoning |
| Vector Databases | ChromaDB, Qdrant, Pinecone | Store embeddings, test retrieval quality, benchmark search |
| Synthetic Data | DSPy, Giskard RAGET | Auto-generate test datasets from knowledge bases |
| Multi-Modal | GPT-4V, Claude Vision, Gemini Vision | Test image understanding, document parsing, OCR accuracy |
| Agent Frameworks | LangGraph, CrewAI, AutoGen | Test multi-agent systems, tool-calling agents |
| Observability | Arize Phoenix, LangFuse, Weights & Biases Weave | Production monitoring, drift detection, A/B testing |
| Performance | Locust, custom benchmarks | Load testing LLM endpoints, throughput analysis |
| CI/CD | GitHub Actions, GitLab CI, PromptFoo CI | Automated eval gates, quality thresholds, deployment checks |

### Course content

#### 01. Module 1: Advanced RAG System Testing

*Weeks 1–2 · 3 Sessions*

**Session 1: Advanced RAG Failure Modes — Breaking RAG Systems Systematically**

- Test advanced failure scenarios: contradictory documents in the knowledge base, near-duplicate docs confusing retrieval.
- Multi-hop questions requiring info from 3+ documents, time-sensitive queries with outdated docs, cross-language retrieval.
- Build targeted test cases for each failure mode.
- Key concepts: contradictions, duplicates, multi-hop reasoning, staleness.

**Session 2: Chunking & Embedding Strategy Testing**

- Test how chunking strategy affects quality: small chunks (100 tokens) vs large (500 tokens) vs overlap strategies.
- Compare embedding models (OpenAI, Cohere, open-source). Measure which combination gives best retrieval precision.
- Build a benchmark framework for systematic comparison.
- Key concepts: cross-encoder re-ranking, embedding model benchmarking.

**Session 3: RAG Test Automation at Scale — Synthetic Data & Regression**

- Use Giskard RAGET to auto-generate 200+ test questions from knowledge base with difficulty categories.
- Build regression suite that runs on every knowledge base update.
- Set up alerting: if faithfulness drops below threshold after a doc update, block the deployment.
- Key concepts: synthetic test generation at scale, regression testing for knowledge base updates.

#### 02. Module 2: Vector Database Testing

*Week 3 · 2 Sessions*

**Session 4: Vector DB Fundamentals — ChromaDB & Qdrant**

- Set up ChromaDB locally. Ingest 500+ documents. Query with different similarity metrics (cosine, euclidean, dot product).
- Compare retrieval quality across metrics. Set up Qdrant and compare with ChromaDB.
- Key concepts: embeddings, similarity metrics — cosine similarity, euclidean distance, dot product.

**Session 5: Vector DB Testing — Quality, Performance & Edge Cases**

- Test retrieval accuracy at scale: near-duplicate documents, contradictory documents, multi-language documents, empty collections.
- Load test: how many queries/second before quality degrades. Test index rebuild impact.
- Key concepts: precision@k, recall@k, NDCG, MRR, data drift detection.

#### 03. Module 3: Chatbot & Virtual Assistant Testing

*Week 4 · 2 Sessions*

**Session 6: Multi-Turn Conversation Testing**

- Build a customer support chatbot with conversation memory. Test: context retention across 10+ turns, topic switching, contradiction handling, conversation reset.
- Use DeepEval ConversationCompletenessMetric and ConversationRelevancyMetric.
- Key concepts: multi-turn conversation testing, context retention, memory management.

**Session 7: Virtual Assistant Testing — Intent, Fallback & Handoff**

- Test intent classification accuracy: does the chatbot understand what the user wants?
- Test fallback behavior: what happens when the chatbot doesn't understand? Test handoff to human agent.
- Test multi-modal input (text + image). Key concepts: graceful degradation, conversation completeness, emotional intelligence testing.

#### 04. Module 4: AI Agent Testing

*Week 5 · 3 Sessions*

**Session 8: Agent Architecture — Understanding What You're Testing**

- Build a LangGraph agent that can: search the web, query a database, perform calculations, and send emails.
- Map the decision tree. Identify test points: tool selection, parameter passing, output handling, error recovery.
- Key concepts: agent vs chatbot — fundamental testing differences.

**Session 9: Agent Decision Testing — Did It Choose the Right Action?**

- Test agent tool selection: given 5 available tools, does the agent pick the right one for each query?
- Test parameter accuracy, loop detection (does the agent get stuck?), and error recovery when a tool fails.
- Key concepts: parameter extraction testing, multi-step workflow testing, loop detection, excessive agency.

**Session 10: Multi-Agent Systems & End-to-End Agent Testing**

- Build a multi-agent system using CrewAI (researcher + writer + reviewer). Test agent collaboration.
- Test end-to-end: does the final output meet quality standards? Test failure cascading.
- Key concepts: multi-agent collaboration testing, communication, handoff, conflict resolution, cost and latency management.

#### 05. Module 5: Multi-Modal & Fine-Tuned Model Testing

*Week 6 · 2 Sessions*

**Session 11: Multi-Modal Testing — Vision, Document & Image AI**

- Test GPT-4V and Claude Vision on: image understanding accuracy, OCR quality, chart reading, document parsing, handwriting recognition.
- Build eval suite for a document processing pipeline. Test field extraction from invoices and medical reports.
- Key concepts: vision model testing, document AI testing, OCR quality metrics, multi-modal hallucination.

**Session 12: Fine-Tuned Model Testing — Validation & Regression**

- Take a fine-tuned model and test: did fine-tuning improve performance on the target task?
- Test for catastrophic forgetting — did it lose general capabilities? Build a validation suite: target domain tests + general capability tests.
- Key concepts: fine-tuning validation, catastrophic forgetting, comparing fine-tuned vs base model.

#### 06. Module 6: DSPy & Synthetic Data Generation

*Week 6 (continued) · 1 Session*

**Session 13: Synthetic Test Data Generation — DSPy & Giskard RAGET**

- Use DSPy to programmatically optimize prompts and generate synthetic Q&A pairs from documents.
- Use Giskard RAGET to auto-generate test questions from knowledge bases.
- Build a pipeline: source documents → synthetic questions → verified answers → golden dataset. Quality-check generated data.
- Key concepts: DSPy, synthetic data generation, golden dataset management, test data diversity.

#### 07. Module 7: Advanced Observability & Monitoring

*Week 7 · 2 Sessions*

**Session 14: Production Observability — Arize Phoenix & LangFuse Deep Dive**

- Set up full production monitoring: instrument a RAG app with LangFuse traces. Set up Arize Phoenix for eval-in-production.
- Build alerts for: hallucination rate spike, faithfulness drop below threshold, cost anomaly, latency P95 exceeding SLA.
- Create executive dashboard. Key concepts: model drift detection, silent model updates detection.

**Session 15: Model Drift, A/B Testing & Continuous Evaluation**

- Simulate model drift: gradually degrade model quality, see if monitoring catches it.
- Set up A/B testing: route 50% traffic to GPT-4o and 50% to GPT-4o-mini, compare quality metrics.
- Build continuous eval: sample 5% of production traffic, run eval metrics automatically. Key concepts: statistical significance, rollback triggers.

#### 08. Module 8: Benchmarking, Performance & CI/CD

*Week 7 (continued) · 2 Sessions*

**Session 16: Performance & Load Testing for AI Systems**

- Load test an LLM endpoint using Locust: measure throughput, latency under load, error rates at scale.
- Test rate limit handling. Benchmark: max QPS before quality degrades. Test concurrent users on a chatbot.
- Key concepts: TTFT (time to first token), TPS (tokens per second), load testing AI endpoints, rate limit testing.

**Session 17: CI/CD Eval Pipelines — Quality Gates for AI**

- Set up GitHub Actions pipeline: on every PR, automatically run PromptFoo eval suite, DeepEval hallucination checks, and cost threshold validation.
- If hallucination rate > 5%, block the merge. Build quality gates: minimum faithfulness score, maximum cost per query, maximum latency.
- Key concepts: eval-on-PR, PromptFoo CI integration, canary releases, blue-green for AI models.

#### 09. Module 9: Advanced End-to-End Capstone Project

*Week 8 · 4 Sessions*

**Session 18: Project Setup — Build a Production RAG Application**

- Build a multi-source RAG application: company knowledge base + product documentation + FAQ database.
- Add an AI agent layer: the chatbot can search docs, check order status (mock API), and escalate to human.
- Deploy as a web app with conversation history.

**Session 19: Project Phase 1 — Comprehensive Test Suite**

- Build complete test infrastructure: RAG eval suite with Ragas (50+ test cases covering all 4 metrics).
- Agent decision testing (tool selection accuracy), multi-turn conversation tests.
- Synthetic test data generation with DSPy, red teaming with Giskard (40+ attack probes).

**Session 20: Project Phase 2 — Production Pipeline & Monitoring**

- Set up CI/CD pipeline: PromptFoo eval runs on every PR with quality gates.
- Deploy LangFuse for production tracing. Set up Arize Phoenix for continuous evaluation.
- Build cost monitoring. Create A/B test framework. Build executive quality dashboard.

**Session 21: Project Presentation — Demo Day**

- Present your complete project to the cohort and guest reviewers.
- Cover: system architecture, test strategy, test results, vulnerabilities found, quality metrics, CI/CD pipeline demo, monitoring dashboard.
- Peer review and feedback session.

### Career outcomes

Complete both phases (18 weeks, 47 sessions) and qualify for senior AI testing positions:

- Senior AI Test Engineer
- AI Quality Architect
- LLM Evaluation Lead
- AI Testing & Red Teaming Consultant
- Principal SDET — AI/ML Products
- Head of AI Quality Engineering
- MLOps / AI DevOps Engineer (testing-focused)

## What you'll get

- Certificate of Completion from QodeBench — Journey to Automation upon completing the course.
- Portfolio of 6 AI testing projects for interviews.
- Hands-on experience with 10+ industry tools.
- Complete end-to-end AI test pipeline (eval + red teaming + observability + CI/CD).
- Professional certification to showcase your skills.
- AI Testing resume, LinkedIn optimization & interview prep kit.

Register: https://zoom.us/meeting/register/oaxXeZmNR6K6_PNND2tT6w
