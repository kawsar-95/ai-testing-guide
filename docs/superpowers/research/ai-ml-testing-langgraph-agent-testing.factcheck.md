# Fact check: AI/ML Testing, LangGraph Agent Testing

Page: `content/ai-ml-testing/langgraph-agent-testing.mdx`. Data: `scripts/ai_ml_testing_pages_p1d.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://langchain-ai.github.io/langgraph/ | redirects to docs.langchain.com/oss/python/langgraph/overview | LangChain docs |
| 2 | https://docs.smith.langchain.com/observability/concepts | redirects to docs.langchain.com/langsmith/observability-concepts | LangSmith docs |
| removed | https://python.langchain.com/docs/how_to/testing/ | redirects to the LangChain overview (no testing content) | LangChain docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | "A LangGraph agent is a graph of nodes. Each node ... decides where to go next, and the graph may loop." | 1 | FAIL, fixed: the overview does not mention routing or loops. Now: LangGraph is a low-level framework for stateful agents, built from nodes and edges (`StateGraph`, `add_node`, `add_edge`), cite 1; the loop is described as this page's example agent. | "low-level orchestration framework and runtime" |
| 2 | Course example: searches the web, calculates, answers. | none | PASS | Syllabus Session 16: "searches web + does calculations". |
| 3 | Decisions, arguments, structural failures. | none | PASS | Tutorial's own analysis. |
| 4 | LangSmith records "node transitions, tool calls, and arguments". | 2 | FAIL, fixed: the page does not cover node transitions. Now: each model call and tool call is a run, with inputs and outputs. | "Every run, with full inputs and outputs." |
| 5 | Test-the-parts rule cited to the LangChain testing source. | removed source | FAIL, fixed: the URL has no testing content. Now labeled the tutorial's rule; source removed. |
| 6 | "A conditional edge is a function that picks the next node", cite 1. | 1 | FAIL, fixed: not on the overview page. Now cite 1 supports only "nodes and edges"; the routing function is this page's example (`route_after_tools`). |
| 7 | The routing function is "pure and deterministic". | none | PASS (after fix) | Now "a plain function of the state ... deterministic", the tutorial's design. |
| 8 | Code: `run = agent.invoke(...)`, then `run.tool_calls`, `call.name`, `run.status`, `run.messages`. | none | FAIL, fixed: `invoke` returns the state (a dict), with no `tool_calls` or `status`. Now a `tool_calls(state)` helper reads `state["messages"]`, and tool calls are dicts (`call["name"]`). |
| 9 | Code: `assert run.status != "limit"` / `== "completed"`. | none | FAIL, fixed: LangGraph has no such status. A loop now fails the test by `config={"recursion_limit": 20}`, which raises `GraphRecursionError`; an unhandled tool error makes `invoke` raise. | graph-api page: "LangGraph will raise `GraphRecursionError`" |
| 10 | Cost: "a loop can happen entirely inside the model's reasoning". | none | FAIL, fixed: a loop inside one model call does not add model calls. Now "a loop can pass through model nodes that call no tool". Same fix in the tip. |
| 11 | Routing tests, fake tools that record calls, cost guard (≤ 5 model calls). | none | PASS | Tutorial's own examples. |
| 12 | Mistake 5 cited the overview for "testing it alone is free". | 1 | FAIL, fixed: cite removed (tutorial's own advice). |
| 13 | Tip: set the graph's recursion limit in the test. | none | PASS | graph-api: "`recursion_limit` is a standalone `config` key". |
| 14 | Key words: Conditional edge, Recursion limit, Excessive agency. | none | PASS | Match the graph-api page and the OWASP term. "Routing test" updated to the plain-function wording. |

## Checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| No prices | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |

## Wanted source (not added; the claims were softened instead)

- `langgraph-graph-api`: "Graph API overview", LangChain (LangGraph docs), https://docs.langchain.com/oss/python/langgraph/graph-api. It would support conditional edges, the routing function, `recursion_limit`, and `GraphRecursionError`.
- `langgraph-intro` should point to https://docs.langchain.com/oss/python/langgraph/overview (the old URL is a redirect page).

Open FAILs: 0
