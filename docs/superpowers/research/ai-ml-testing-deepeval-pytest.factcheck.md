# Fact check: AI/ML Testing, DeepEval: Pytest for LLMs

Page: `content/ai-ml-testing/deepeval-pytest.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.confident-ai.com/ | yes, 301 to https://deepeval.com/ | DeepEval docs (vendor) |
| 2 | https://docs.confident-ai.com/docs/metrics/introduction | redirects to the deepeval.com home page, not to the metrics page | DeepEval docs (vendor). Claims checked on https://deepeval.com/docs/metrics-introduction and the metric pages. Library URL fix wanted. |
| 3 | https://www.anthropic.com/engineering/evaluating-ai-systems | yes | Anthropic engineering (library title is wrong) |

Each source 1–3 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | DeepEval turns an LLM test into a Pytest test. | 1 | PASS (reworded to the docs) | "`deepeval` plugs into Pytest" |
| 2 | "Reference-free: AnswerRelevancy, Hallucination; reference-based: Faithfulness, GEval, AnswerRelevancy with a reference" | 2 | FAIL, fixed: Faithfulness is referenceless, Hallucination is reference-based, AnswerRelevancy takes no reference. Now: referenceless = AnswerRelevancy, Faithfulness; reference-based = Hallucination (`context`), GEval (`expected_output`). | "It's referenceless — only input and actual_output are required." |
| 3 | First example calls `evaluate(...)` in a Pytest test, and `answer` is undefined. | 1 | FAIL, fixed: `evaluate()` does not fail a test. Now `assert_test(test_case, [metrics])`, `answer_question(question)`, and only `context` (what HallucinationMetric reads). | example uses `assert_test(test_case, [correctness_metric])` |
| 4 | New: run with `deepeval test run test_support.py`. | 1 | PASS | `deepeval test run test_example.py` |
| 5 | "the whole toolchain works: fixtures, marks, parametrisation, parallelism, and the same CI" | none | FAIL, fixed: not all confirmed for `deepeval test run`. Now "fixtures and parametrisation work in it". | "the same way `pytest` would" |
| 6 | Test case fields `input`, `actual_output`, `expected_output`, `context`, `retrieval_context`. | 2 | PASS | metric pages list these params |
| 7 | "several metrics compare `context` and `retrieval_context`" | none | FAIL, fixed: no metric compares the two. Now "HallucinationMetric reads `context`, FaithfulnessMetric reads `retrieval_context`". | Faithfulness FAQ: checks "against the retrieved `retrieval_context`" |
| 8 | Score 0 to 1, threshold, reason. | 2 | PASS | "score between 0-1"; "give a `reason`" |
| 9 | Most metrics use a model as the judge. | 2 | PASS ("almost all") | LLM-as-a-judge for almost all predefined metrics |
| 10 | "The evaluate call … fails the test if any score is below its threshold" | 1 | FAIL, fixed: `evaluate()` "collects results without failing anything". Now `assert_test`. | — |
| 11 | "results also go to the Confident AI dashboard" | 1 | FAIL, fixed: only when logged in. | "If you're logged in, they also appear on Confident AI" |
| 12 | Parametrise example ("a opened item") | none | PASS after grammar fix ("an opened") | — |
| 13 | `@pytest.mark.slow` and `pytest -m` to split runs | none | FAIL, fixed: plain `pytest` is "highly not recommended" and `-m` is not documented for `deepeval test run`. Now two files run with `deepeval test run`. | "The plain `pytest` command works but is highly not recommended" |
| 14 | "A DeepEval metric is also one model call per metric per case" | none | FAIL, fixed: Faithfulness extracts claims, then classifies them. Now "can make more than one model call … at least a hundred judge calls". | "An LLM extracts all claims"; then classifies each claim |
| 15 | `AnswerRelevancyMetric(threshold=0.7)`, `FaithfulnessMetric(threshold=0.8)` | 2 | PASS | threshold parameter |
| 16 | Unused `import os`, unused `expected_output` | none | FAIL, fixed: removed from the example. | — |
| 17 | "The default for most metrics is 0.5" | 2 | FAIL, fixed: "for all metrics". | "defaulted to `0.5` for all metrics" |
| 18 | "The threshold is the quality bar …" | 3 | FAIL, fixed: not in source 3. Now the Anthropic warning about overinterpreting scores. | "overinterpret the quantitative score" |
| 19 | Mistake 1: "0.5 passes almost anything" | 2 | FAIL, fixed: overstated. Now "The default of 0.5 is not a bar you chose". | "defaulted to `0.5`" |
| 20 | Mistake 2: "Each metric is a model call" | none | FAIL, fixed: "one or more judge calls". | — |
| 21 | Mistake 3: "some metrics compare them" | 2 | FAIL, fixed: as row 7. | — |
| 22 | Mistakes 4–6 | none | PASS (tutorial reasoning) | — |
| 23 | Tester advice: `slow` mark, "dashboard" | none | FAIL, fixed: now "own file" and "Confident AI, if you use it" to match the page. | — |
| 24 | Description: "read the Confident AI dashboard" | none | FAIL, fixed: "run them with `deepeval test run`, and read the scores". | — |
| 25 | Key words: Reference-free, retrieval_context, Confident AI dashboard, Pytest mark | 2 | FAIL, fixed: Referenceless and Reference-based now match the docs; `retrieval_context` = what the retriever fetched; "Confident AI" (when logged in); "Pytest mark" replaced by `assert_test`. | — |

## Wanted library fixes

- `deepeval-intro` URL: https://deepeval.com/docs/getting-started
- `deepeval-metrics` URL: https://deepeval.com/docs/metrics-introduction
- New source `deepeval-ci`: "Unit testing in CI/CD", DeepEval docs, https://deepeval.com/docs/evaluation-unit-testing-in-ci-cd (for `assert_test` vs `evaluate()` and plain `pytest`)

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Facts, hedges, code and cites are preserved. Split cites follow the parts they supported, and the new bold labels match the text under them. |

Open FAILs: 0
