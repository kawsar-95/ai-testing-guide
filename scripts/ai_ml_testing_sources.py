"""The shared source library of the AI/ML Testing module.

Every page cites from this list. A source is one official document: the tool's
own docs, a standards body, or the original paper. No blogs, no forums, no
news, no AI summaries. The URL was checked on the access date.

The `id` of a source is its number in the page's source list. `key` is the
short name the generator uses to pick the source for a page.

Usage: from ai_ml_testing_sources import SOURCES, source
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class Source:
    key: str
    title: str
    publisher: str
    url: str
    accessed: str = "2026-11-01"


SOURCES: dict[str, Source] = {
    s.key: s
    for s in [
        # --- The course syllabus itself -------------------------------------
        Source(
            "syllabus",
            "AI & ML Testing Professional Course (Phase 1 and Phase 2)",
            "QodeBench, Journey to Automation",
            "https://www.journeytoautomation.org/courseAIMLTesting-phase1-and-phase2",
        ),
        # --- Anthropic ------------------------------------------------------
        Source(
            "anthropic-prompt",
            "Prompt engineering overview",
            "Anthropic (Claude API docs)",
            "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview",
        ),
        Source(
            "anthropic-tokens",
            "Token counting",
            "Anthropic (Claude API docs)",
            "https://platform.claude.com/docs/en/build-with-claude/token-counting",
        ),
        Source(
            "anthropic-temp",
            "Messages API reference",
            "Anthropic (Claude API docs)",
            "https://platform.claude.com/docs/en/api/messages",
        ),
        Source(
            "anthropic-vision",
            "Vision",
            "Anthropic (Claude API docs)",
            "https://platform.claude.com/docs/en/build-with-claude/vision",
        ),
        Source(
            "anthropic-evals",
            "Challenges in evaluating AI systems",
            "Anthropic (Research)",
            "https://www.anthropic.com/research/evaluating-ai-systems",
        ),
        Source(
            "anthropic-safety",
            "Safety and responsible scaling",
            "Anthropic (Claude API docs)",
            "https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails",
        ),
        # --- OpenAI ---------------------------------------------------------
        Source(
            "openai-chat",
            "Chat API reference",
            "OpenAI (API docs)",
            "https://platform.openai.com/docs/api-reference/chat",
        ),
        Source(
            "openai-structured",
            "Structured outputs",
            "OpenAI (API docs)",
            "https://developers.openai.com/api/docs/guides/structured-outputs",
        ),
        Source(
            "openai-evals",
            "Evals design guide",
            "OpenAI (Documentation)",
            "https://developers.openai.com/api/docs/guides/evals",
        ),
        # --- Google ---------------------------------------------------------
        Source(
            "gemini",
            "Gemini API documentation",
            "Google (AI for Developers)",
            "https://ai.google.dev/gemini-api/docs",
        ),
        Source(
            "gemini-safety",
            "Safety settings",
            "Google (AI for Developers)",
            "https://ai.google.dev/gemini-api/docs/safety-settings",
        ),
        # --- Promptfoo ------------------------------------------------------
        Source(
            "promptfoo-intro",
            "Introduction",
            "Promptfoo (docs)",
            "https://www.promptfoo.dev/docs/intro/",
        ),
        Source(
            "promptfoo-config",
            "Configuration reference",
            "Promptfoo (docs)",
            "https://www.promptfoo.dev/docs/configuration/reference/",
        ),
        Source(
            "promptfoo-assertions",
            "Assertions",
            "Promptfoo (docs)",
            "https://www.promptfoo.dev/docs/configuration/expected-outputs/",
        ),
        Source(
            "promptfoo-redteam",
            "Red teaming",
            "Promptfoo (docs)",
            "https://www.promptfoo.dev/docs/red-team/",
        ),
        Source(
            "promptfoo-cicd",
            "CI/CD integration",
            "Promptfoo (docs)",
            "https://www.promptfoo.dev/docs/integrations/github-action/",
        ),
        # --- DeepEval --------------------------------------------------------
        Source(
            "deepeval-intro",
            "Getting started",
            "DeepEval docs",
            "https://deepeval.com/docs/getting-started",
        ),
        Source(
            "deepeval-metrics",
            "Metrics",
            "DeepEval docs",
            "https://deepeval.com/docs/metrics-introduction",
        ),
        Source(
            "deepeval-llm-test",
            "LLM testing",
            "DeepEval docs",
            "https://docs.confident-ai.com/docs/interview-llm-testing",
        ),
        # --- Ragas -----------------------------------------------------------
        Source(
            "ragas-metrics",
            "Available metrics",
            "Ragas (docs)",
            "https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/",
        ),
        Source(
            "ragas-intro",
            "What is Ragas?",
            "Ragas (docs)",
            "https://docs.ragas.io/en/stable/",
        ),
        # --- Giskard ---------------------------------------------------------
        Source(
            "giskard-intro",
            "What is Giskard?",
            "Giskard (docs)",
            "https://docs.giskard.ai/",
        ),
        Source(
            "giskard-scan",
            "Scan a model",
            "Giskard (docs)",
            "https://docs.giskard.ai/oss/scan",
        ),
        Source(
            "giskard-raget",
            "RAG evaluation with Giskard",
            "Giskard (docs)",
            "https://docs.giskard.ai/oss/checks/use-cases/rag-evaluation",
        ),
        Source(
            "giskard-taxonomy",
            "Threat taxonomy",
            "Giskard (docs)",
            "https://docs.giskard.ai/oss/scan/explanation/threat-taxonomy",
        ),
        # --- LangChain and LangSmith ------------------------------------------
        Source(
            "langchain-intro",
            "Introduction",
            "LangChain (Python docs)",
            "https://docs.langchain.com/oss/python/langchain/overview",
        ),
        Source(
            "langchain-testing",
            "Testing",
            "LangChain (Python docs)",
            "https://docs.langchain.com/oss/python/langchain/test",
        ),
        Source(
            "langsmith-trace",
            "Trace concepts",
            "LangSmith (docs)",
            "https://docs.langchain.com/langsmith/observability-concepts",
        ),
        Source(
            "langsmith-eval",
            "Evaluate a dataset",
            "LangSmith (docs)",
            "https://docs.langchain.com/langsmith/evaluation-concepts",
        ),
        # --- LangGraph -------------------------------------------------------
        Source(
            "langgraph-intro",
            "LangGraph overview",
            "LangChain (LangGraph docs)",
            "https://docs.langchain.com/oss/python/langgraph/overview",
        ),
        # --- Langfuse ---------------------------------------------------------
        Source(
            "langfuse-intro",
            "Introduction",
            "Langfuse (docs)",
            "https://langfuse.com/docs",
        ),
        Source(
            "langfuse-eval",
            "Evaluation and datasets",
            "Langfuse (docs)",
            "https://langfuse.com/docs/evaluation/evaluation-methods",
        ),
        # --- Arize Phoenix ----------------------------------------------------
        Source(
            "phoenix-intro",
            "Introduction",
            "Arize (Phoenix docs)",
            "https://arize.com/docs/phoenix",
        ),
        Source(
            "phoenix-eval",
            "Evaluations",
            "Arize (Phoenix docs)",
            "https://arize.com/docs/phoenix/evaluation/llm-evals",
        ),
        # --- Vector databases -------------------------------------------------
        Source(
            "chroma-intro",
            "Introduction",
            "Chroma (docs)",
            "https://docs.trychroma.com/",
        ),
        Source(
            "chroma-query",
            "Querying collections",
            "Chroma (docs)",
            "https://docs.trychroma.com/docs/querying-collections",
        ),
        Source(
            "qdrant-intro",
            "What is Qdrant?",
            "Qdrant (docs)",
            "https://qdrant.tech/documentation/",
        ),
        Source(
            "qdrant-search",
            "Search",
            "Qdrant (docs)",
            "https://qdrant.tech/documentation/concepts/search/",
        ),
        # --- DSPy -------------------------------------------------------------
        Source(
            "dspy-intro",
            "DSPy",
            "Stanford NLP (DSPy docs)",
            "https://dspy.ai/",
        ),
        Source(
            "dspy-optimizer",
            "Optimizers",
            "Stanford NLP (DSPy docs)",
            "https://dspy.ai/api/optimizers/",
        ),
        # --- Guardrails --------------------------------------------------------
        Source(
            "guardrails-intro",
            "Guardrails AI",
            "Guardrails (docs)",
            "https://www.guardrailsai.com/docs",
        ),
        Source(
            "nemo-intro",
            "NeMo Guardrails",
            "NVIDIA (docs)",
            "https://docs.nvidia.com/nemo/guardrails/latest/index.html",
        ),
        # --- OWASP and NIST -----------------------------------------------------
        Source(
            "owasp-llm",
            "OWASP Top 10 for Large Language Model Applications",
            "OWASP",
            "https://owasp.org/projects/top-10-for-large-language-model-applications",
        ),
        Source(
            "owasp-llm-prompt",
            "LLM01 Prompt Injection",
            "OWASP",
            "https://owasp.org/projects/top-10-for-large-language-model-applications",
        ),
        Source(
            "nist-ai-rmf",
            "AI Risk Management Framework",
            "NIST",
            "https://www.nist.gov/itl/ai-risk-management-framework",
        ),
        Source(
            "mitre-atlas",
            "MITRE ATLAS",
            "MITRE",
            "https://atlas.mitre.org/",
        ),
        # --- Playwright and CI --------------------------------------------------
        Source(
            "playwright-intro",
            "Playwright intro",
            "Playwright (docs)",
            "https://playwright.dev/docs/intro",
        ),
        Source(
            "playwright-auto",
            "Auto-waiting",
            "Playwright (docs)",
            "https://playwright.dev/docs/actionability",
        ),
        Source(
            "playwright-assert",
            "Assertions",
            "Playwright (docs)",
            "https://playwright.dev/docs/test-assertions",
        ),
        Source(
            "github-actions",
            "GitHub Actions documentation",
            "GitHub",
            "https://docs.github.com/en/actions",
        ),
        Source(
            "locust",
            "Locust documentation",
            "Locust",
            "https://docs.locust.io/en/stable/",
        ),
        # --- Papers ------------------------------------------------------------
        Source(
            "selfcheck",
            "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Large Language Models",
            "arXiv",
            "https://arxiv.org/abs/2303.08896",
        ),
        Source(
            "selfconsistency",
            "Self-Consistency Improves Chain of Thought Reasoning in Language Models",
            "arXiv",
            "https://arxiv.org/abs/2203.11171",
        ),
        Source(
            "rag",
            "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
            "arXiv",
            "https://arxiv.org/abs/2005.11401",
        ),
        Source(
            "lostmiddle",
            "Lost in the Middle: How Language Models Use Long Contexts",
            "arXiv",
            "https://arxiv.org/abs/2307.03172",
        ),
        Source(
            "chainofthought",
            "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
            "arXiv",
            "https://arxiv.org/abs/2201.11903",
        ),
        Source(
            "clip",
            "Learning Transferable Visual Models From Natural Language Supervision",
            "arXiv",
            "https://arxiv.org/abs/2103.00020",
        ),
        Source(
            "catastrophic",
            "On the Catastrophic Forgetting of Large Language Models",
            "arXiv",
            "https://arxiv.org/abs/2302.12817",
        ),
        Source(
            "mteb",
            "MTEB Massive Text Embedding Benchmark",
            "arXiv",
            "https://arxiv.org/abs/2210.07316",
        ),
        Source(
            "ndcg",
            "Discounted cumulative gain",
            "Wikipedia",
            "https://en.wikipedia.org/wiki/Discounted_cumulative_gain",
        ),
    ]
}


def source(key: str) -> Source:
    """The one source with this key. Raises on a typo, so a page cannot cite a source that does not exist."""
    if key not in SOURCES:
        raise KeyError(f"unknown source key: {key!r}")
    return SOURCES[key]
