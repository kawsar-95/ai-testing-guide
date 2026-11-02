# Fact check: AI/ML Testing, Agent Decision Testing

Page: `content/ai-ml-testing/agent-decision-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | yes | Anthropic (docs) |
| 2 | https://docs.langchain.com/langsmith/observability-concepts | yes | LangSmith (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Tool selection failures are usually fixed in the tool descriptions, which are prompt text (cite: LangGraph overview). | 1 | FAIL, fixed | The LangGraph overview says nothing about tool descriptions. Anthropic's Define tools page does ("Provide extremely detailed descriptions ... the most important factor in tool performance"). Cite repointed. |
| 2 | Decision accuracy is measured per situation, not overall (cite: Giskard scan). | 2 | FAIL, fixed | The Giskard scan page says nothing about it; it is the tutorial's own advice. Three cites removed (plain words, mistake 6); the `giskard-scan` source was dropped from this page. |
| 3 | "Tool error hides the recovery bug" cited to LangGraph. | 1 | FAIL, fixed | Unsupported; cite removed. |
| 4 | A trace shows the tool sequence with arguments. | 3 | PASS | LangSmith: runs record every step with full inputs and outputs. |
| 5 | `test_the_agent_does_not_invent_an_order_id` used `next(...)` over cancel_order calls. | none | FAIL, fixed | If the agent correctly asked and made no call, `next()` raises StopIteration and the test errors on the good behavior. Rewritten to assert there is no cancel_order call without an order id (three panels, two code blocks each). |
| 6 | Selection/argument cases, loop cap of 3, recovery test. | none | PASS | The tutorial's own fixtures; `trace.called_same_tool_repeatedly_more_than` is a helper, not a library API. |

Open FAILs: 0
