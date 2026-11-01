# Research notes: AI/ML Testing, LangGraph Agent Testing

Page: `content/ai-ml-testing/langgraph-agent-testing.mdx` (data in `scripts/ai_ml_testing_pages_p1d.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | LangGraph overview | LangChain (LangGraph docs) | https://langchain-ai.github.io/langgraph/ | 2026-11-02 |
| S2 | Trace concepts | LangSmith (docs) | https://docs.smith.langchain.com/observability/concepts | 2026-11-02 |
| (dropped) | Testing | LangChain (Python docs) | https://python.langchain.com/docs/how_to/testing/ | 2026-11-02 |

Redirects: S1 says the docs moved and redirects to https://docs.langchain.com/oss/python/langgraph/overview. S2 redirects to https://docs.langchain.com/langsmith/observability-concepts. The dropped "Testing" URL redirects to the LangChain overview, which has no testing content.

Also read to check the code (not cited, not in the source library): https://docs.langchain.com/oss/python/langgraph/graph-api (routing functions, `recursion_limit`, `GraphRecursionError`, what `invoke` returns).

The course example (an agent that searches the web and does calculations) is from the syllabus, Session 16 (`docs/superpowers/research/ai-ml-testing-syllabus.md`).

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | LangGraph: low-level framework and runtime for long-running, stateful agents. | S1 | "low-level orchestration framework and runtime" |
| C2 | Graph API: `StateGraph`, `add_node`, `add_edge`. | S1 | `graph = StateGraph(MessagesState)` (hello-world sample) |
| C3 | Tool calls and model calls are runs; a trace holds inputs and outputs. | S2 | "Every run, with full inputs and outputs." |
| C4 | Conditional edges take a routing function. (not cited) | graph-api | "a "routing function" to call after that node is executed" |
| C5 | `recursion_limit` is a config key; at the limit LangGraph raises `GraphRecursionError`. (not cited) | graph-api | "LangGraph will raise `GraphRecursionError`" |
| C6 | With no output schema, `invoke` returns the state. (not cited) | graph-api | "the same input and output schemas" |
