# Fact check: AI/ML Testing, Agent Architecture and Test Points

Page: `content/ai-ml-testing/agent-architecture.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.langchain.com/oss/python/langgraph/overview | yes | LangChain (docs) |
| 2 | https://docs.langchain.com/langsmith/observability-concepts | yes | LangSmith (docs) |
| 3 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | yes | Anthropic (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | LangGraph models an agent as a graph of nodes and edges. | 1 | PASS | Overview page code: `StateGraph`, `add_node`, `add_edge`; describes stateful agents. |
| 2 | A trace shows the steps and state, so you can tell wrong path from right path then failure. | 2 | PASS | LangSmith: a run is a step (like a span); a trace is a collection of runs with full inputs and outputs. |
| 3 | Tool descriptions are part of the prompt; rewriting one changes behavior (cite: Anthropic prompt engineering overview). | 3 | FAIL, fixed | The cited overview page (3.7k characters) never mentions tools or descriptions. The Define tools page does: "Provide extremely detailed descriptions. This is by far the most important factor in tool performance." Cite repointed to a new source in all six places. |
| 4 | Test `test_rewriting_a_tool_description_changes_the_behaviour`. | none | FAIL, fixed | It asserts both runs pick the same tool, the opposite of its name. Renamed `test_a_vague_tool_description_still_picks_the_right_tool`. |
| 5 | Four tools, approval gate, stopping condition, trace node assertions. | none | PASS | The tutorial's own design on a fake agent; `agent.with_tools`, `trace.nodes` are the tutorial's helpers, not LangGraph APIs. |

Open FAILs: 0
