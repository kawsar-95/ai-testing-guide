# Research notes: AI/ML Testing, Agent Architecture and Test Points

Page: `content/ai-ml-testing/agent-architecture.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `langgraph-intro` | LangGraph overview | LangChain (docs) | https://docs.langchain.com/oss/python/langgraph/overview |
| S2 | `langsmith-trace` | Observability concepts | LangSmith (docs) | https://docs.langchain.com/langsmith/observability-concepts |
| S3 | `anthropic-tool-define` | Define tools (new; replaces anthropic-prompt) | Anthropic (docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | LangGraph models an agent as a graph of nodes and edges. | 1 | Overview page code: `StateGraph`, `add_node`, `add_edge`; describes stateful agents. |
| C2 | A trace shows the steps and state, so you can tell wrong path from right path then failure. | 2 | LangSmith: a run is a step (like a span); a trace is a collection of runs with full inputs and outputs. |
| C3 | Tool descriptions are part of the prompt; rewriting one changes behavior (cite: Anthropic prompt engineering overview). | 3 | The cited overview page (3.7k characters) never mentions tools or descriptions. The Define tools page does: "Provide extremely detailed descriptions. This is by far the most important factor in tool performance." Cite repointed to a new source in all six places. |
| C4 | Test `test_rewriting_a_tool_description_changes_the_behaviour`. | none | It asserts both runs pick the same tool, the opposite of its name. Renamed `test_a_vague_tool_description_still_picks_the_right_tool`. |
| C5 | Four tools, approval gate, stopping condition, trace node assertions. | none | The tutorial's own design on a fake agent; `agent.with_tools`, `trace.nodes` are the tutorial's helpers, not LangGraph APIs. |
