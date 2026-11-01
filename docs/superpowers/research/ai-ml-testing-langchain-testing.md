# Research notes: AI/ML Testing, LangChain Testing

Page: `content/ai-ml-testing/langchain-testing.mdx` (data in `scripts/ai_ml_testing_pages_p1d.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Introduction | LangChain (Python docs) | https://python.langchain.com/docs/introduction/ | 2026-11-02 |
| S2 | Trace concepts | LangSmith (docs) | https://docs.smith.langchain.com/observability/concepts | 2026-11-02 |
| (dropped) | Testing | LangChain (Python docs) | https://python.langchain.com/docs/how_to/testing/ | 2026-11-02 |

Redirects: S1 and the dropped "Testing" URL both redirect (308) to https://docs.langchain.com/oss/python/langchain/overview. The overview says nothing about testing, so the "Testing" source cannot support any claim and was removed from the page. S2 redirects (308) to https://docs.langchain.com/langsmith/observability-concepts.

Also read to check the code (not cited, not in the source library): https://docs.langchain.com/oss/python/langchain/test and https://docs.langchain.com/oss/python/langchain/test/unit-testing (`GenericFakeChatModel`).

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | LangChain agents are built on LangGraph. | S1 | "LangChain's agents are built on top of LangGraph." |
| C2 | LangSmith run: a single unit of work. | S2 | "represents a single unit of work executed by an agent" |
| C3 | LangSmith trace: the runs of one operation. | S2 | "is a collection of runs for a single operation" |
| C4 | A trace holds every run with inputs and outputs. | S2 | "Every run, with full inputs and outputs." |
| C5 | Unit tests replace the model with an in-memory fake. (not cited) | test page | "replacing the real LLM with an in-memory fake" |
| C6 | `GenericFakeChatModel` import path and `messages=iter([...])`. (not cited) | unit-testing page | `from langchain_core.language_models.fake_chat_models import GenericFakeChatModel` |
