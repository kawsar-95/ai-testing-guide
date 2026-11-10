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

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

- T1: "**The trace.** And the **trace** is what makes the architecture visible. A run trace shows the nodes in order with the state at each one {{cite:langsmith-trace}}. This is how you tell an agent that took a wrong path from an agent that took the right path and then failed {{cite:langsmith-trace}}." — The ORIGINAL has one cite at the end of the sentence, after the whole claim. The EDITED text splits it and puts a cite after "the state at each one". When a cite sentence is split, a cite may follow each part that states a fact of that sentence, so the second cite is allowed. The first part, "A run trace shows the nodes in order with the state at each one", is a fact from that sentence, so this is acceptable. No FAIL on the cite itself. (No failure here; see the Table.)

Correction: I list no FAIL for this quote. The T1 edit does not add, drop, or change any fact, claim, cite, or code.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Labels match their paragraphs, splits keep meaning, the cite stays with the split parts, code blocks are unchanged. |

Open FAILs at the end of the rounds above: 0

## Re-check after the fixes (2026-11-10)

The FAILs of the round above were fixed. Most fixes put a cite back on a part of a split sentence that the split had left without one. A fresh `claude -p` session (Claude Sonnet, no tools) checked these sections again, old text against new: T1 = `## How it works`.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Only splits, run-in labels and linking words were added. Every fact, code block and cite is intact. The cite on the split trace sentence follows both parts, which is allowed. |

Open FAILs: 0
