# Fact check: AI/ML Testing, LangChain Testing

Page: `content/ai-ml-testing/langchain-testing.mdx`. Data: `scripts/ai_ml_testing_pages_p1d.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://python.langchain.com/docs/introduction/ | redirects to docs.langchain.com/oss/python/langchain/overview | LangChain docs |
| 2 | https://docs.smith.langchain.com/observability/concepts | redirects to docs.langchain.com/langsmith/observability-concepts | LangSmith docs |
| removed | https://python.langchain.com/docs/how_to/testing/ | redirects to the LangChain overview (no testing content) | LangChain docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | "LangChain composes a chain out of named steps: a prompt, a model, a parser, a retriever." | 1 | FAIL, fixed: the cited page (now the overview) is about agents, not chains. Now the chain is described as the tutorial's term, and cite 1 supports only "the current LangChain docs centre on agents, which LangChain builds on top of LangGraph". | "LangChain's agents are built on top of LangGraph." |
| 2 | LangChain's testing docs recommend testing chains in isolation before end to end. | removed source | FAIL, fixed: the URL lands on the overview, which has no testing advice. Now "The tutorial's rule is to test the parts before the whole." Source removed from the page. |
| 3 | LangSmith records each run as a trace, one span per step. | 2 | FAIL, fixed: LangSmith calls the unit a run, and a trace is a collection of runs. Text now uses those terms. | "a collection of runs for a single operation" |
| 4 | How it works: "LangChain's testing guide is explicit that you test the parts before the whole". | removed source | FAIL, fixed: sentence removed. |
| 5 | Trace debugging list: walk spans "from the last to the first", "the first ... wrong is the culprit". | none | FAIL, fixed: the order contradicted the conclusion. Now walk the runs from the first to the last. |
| 6 | "LangChain offers a `set_debug` mode and a way to seed the model for reproducibility." | none | FAIL, fixed: no source in the page, and seeding is a provider feature, not a LangChain one. Now "Debug logs and traces help you see the variation, but they do not make a real model call deterministic". Key word `set_debug` removed. |
| 7 | Mock boundary: fake the model in fast tests; separate slow real-model test. | none | PASS | Matches the LangChain test page (not cited): "replacing the real LLM with an in-memory fake". |
| 8 | Code: `ChatPromptTemplate.from_template`, `.format`, `StrOutputParser().invoke`. | none | PASS | Current `langchain_core` API. |
| 9 | Code: a `MagicMock` as the model, with `fake_model.invoke.return_value`. | none | FAIL, fixed: a `MagicMock` in a chain is wrapped as a plain callable, so `.invoke` is never called and the test does not test what it says. Now `GenericFakeChatModel(messages=iter([...]))` behind a `RunnableLambda` spy that records the rendered prompt. |
| 10 | Code: `from langsmith import traceable` in the slow test. | none | FAIL, fixed: unused import removed. |
| 11 | Code: `executed_run.spans` with `span.name`. | none | FAIL, fixed: a LangSmith run has `child_runs`, not `spans`. Now `[run.name for run in executed_run.child_runs]`, with a comment that `executed_run` is the tutorial's fixture. |
| 12 | Mistake 1: "Test the steps" cited the testing source. | removed source | FAIL, fixed: cite removed. |
| 13 | Mistake 4: no trace means change-and-rerun debugging. | 2 | PASS | Trace holds "Every run, with full inputs and outputs." |
| 14 | Tip: span names instead of `Chain.run`. | none | FAIL, fixed: `Chain.run` is the old API. Now "runs ... instead of a default class name such as `RunnableSequence`". |
| 15 | Key words Span and Trace. | none | FAIL, fixed: now "Run" and "Trace" with the LangSmith definitions. |

## Checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| No prices | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |

## Wanted source (not added; the claims were softened instead)

- `langchain-test`: "Test", LangChain (Python docs), https://docs.langchain.com/oss/python/langchain/test. It would support the unit-vs-integration advice and the fake model.
- The library URLs `langchain-intro` and `langchain-testing` both redirect to the LangChain overview. `langchain-testing` should point to the URL above.

Open FAILs: 0
