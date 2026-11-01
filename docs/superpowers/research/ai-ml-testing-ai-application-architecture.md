# Research notes: AI/ML Testing, AI Application Architectures

Page: `content/ai-ml-testing/ai-application-architecture.mdx` (data: `scripts/ai_ml_testing_pages_p1a.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | `rag` | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al.) | arXiv | https://arxiv.org/abs/2005.11401 | 2026-11-02 |
| S2 | `anthropic-prompt` | Prompt engineering overview | Anthropic (Claude API docs) | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview (301 to platform.claude.com) | 2026-11-02 |
| S3 | `lostmiddle` | Lost in the Middle: How Language Models Use Long Contexts (Liu et al.) | arXiv | https://arxiv.org/abs/2307.03172 | 2026-11-02 |
| S4 | `owasp-llm` | OWASP Top 10 for Large Language Model Applications (Version 2025) | OWASP | https://owasp.org/www-project-top-10-for-large-language-model-applications/ | 2026-11-02 |

Removed: `anthropic-evals` (its page, "Challenges in evaluating AI systems", does not say to draw the architecture before the tests).

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Pre-trained models store factual knowledge in their parameters. | S1 | "store factual knowledge in their parameters" |
| C2 | RAG: parametric memory is a seq2seq model; non-parametric memory a dense vector index, accessed by a neural retriever. | S1 | "a dense vector index of Wikipedia, accessed with a pre-trained neural retriever" |
| C3 | Provenance and updating world knowledge are open problems for parametric-only models. | S1 | "providing provenance for their decisions and updating their world knowledge remain open research problems" |
| C4 | Not every failing eval is best solved by prompt engineering; latency and cost can be easier with a different model. | S2 | "Not every success criterion or failing eval is best solved by prompt engineering." |
| C5 | Examples are a prompting technique. | S2 | "from clarity and examples to XML structuring" |
| C6 | Performance best with relevant info at start or end, worse in the middle. | S3 | "significantly degrades when models must access relevant information in the middle" |
| C7 | OWASP 2025 list: LLM01 is Prompt Injection. No over-blocking item. | S4 | "LLM01:2025 Prompt Injection" |
| C8 | Five-part shape, six-layer chain, choice between prompt, RAG, fine-tune. | none | Labeled tutorial's own view. |
