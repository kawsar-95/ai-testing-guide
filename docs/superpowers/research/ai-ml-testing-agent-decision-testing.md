# Research notes: AI/ML Testing, Agent Decision Testing

Page: `content/ai-ml-testing/agent-decision-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `anthropic-tool-define` | Define tools (replaces langgraph-intro here) | Anthropic (docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools |
| S2 | `langsmith-trace` | Observability concepts | LangSmith (docs) | https://docs.langchain.com/langsmith/observability-concepts |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Tool selection failures are usually fixed in the tool descriptions, which are prompt text (cite: LangGraph overview). | 1 | The LangGraph overview says nothing about tool descriptions. Anthropic's Define tools page does ("Provide extremely detailed descriptions ... the most important factor in tool performance"). Cite repointed. |
| C2 | Decision accuracy is measured per situation, not overall (cite: Giskard scan). | 2 | The Giskard scan page says nothing about it; it is the tutorial's own advice. Three cites removed (plain words, mistake 6); the `giskard-scan` source was dropped from this page. |
| C3 | "Tool error hides the recovery bug" cited to LangGraph. | 1 | Unsupported; cite removed. |
| C4 | A trace shows the tool sequence with arguments. | 3 | LangSmith: runs record every step with full inputs and outputs. |
| C5 | `test_the_agent_does_not_invent_an_order_id` used `next(...)` over cancel_order calls. | none | If the agent correctly asked and made no call, `next()` raises StopIteration and the test errors on the good behavior. Rewritten to assert there is no cancel_order call without an order id (three panels, two code blocks each). |
| C6 | Selection/argument cases, loop cap of 3, recovery test. | none | The tutorial's own fixtures; `trace.called_same_tool_repeatedly_more_than` is a helper, not a library API. |
