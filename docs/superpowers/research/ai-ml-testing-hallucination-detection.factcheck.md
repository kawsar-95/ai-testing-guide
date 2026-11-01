# Fact check: AI/ML Testing, Hallucination Detection

Page: `content/ai-ml-testing/hallucination-detection.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arxiv.org/abs/2303.08896 | yes | arXiv paper by its authors |
| 2 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas docs. The definition is on the linked Faithfulness page. Added in this check. |
| 3 | https://www.anthropic.com/engineering/evaluating-ai-systems | yes | Anthropic engineering (library title is wrong) |
| 4 | https://docs.confident-ai.com/docs/metrics/introduction | redirects to deepeval.com home | DeepEval docs (vendor). Checked on https://deepeval.com/docs/metrics-faithfulness. |

Source `faithfulness` (https://arxiv.org/abs/2210.07229) was removed from the page: it is the MEMIT paper "Mass-Editing Memory in a Transformer", which says nothing about faithfulness. Each source 1–4 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Working definition: a claim the supplied context does not support. | none | PASS (tutorial definition; matches Ragas faithfulness) | "factually consistent … with the retrieved context" |
| 2 | Techniques ordered "from the most reliable to the least" | none | FAIL, fixed: no source ranks them. Now "in the tutorial's view". | — |
| 3 | Cross-reference "is the most reliable method" | none | FAIL, fixed: removed; now "It needs a source of truth for your domain." | — |
| 4 | Grounding check: "The Faithfulness paper's evaluation … works this way, the standard reference-free method" | old faithfulness source | FAIL, fixed: wrong paper at that URL. Now "The faithfulness metrics of Ragas and DeepEval work this way" (cites 2, 4). | "Check each claim to see if it can be inferred from the retrieved context." |
| 5 | SelfCheckGPT: sampling and consistency, no external resource. | 1 | PASS (reworded: "detect non-factual sentences, without an external database") | "without an external database" |
| 6 | Self-consistency "detects confident falsehoods poorly" | none | FAIL, fixed: not a result of the paper. Now labeled the tutorial's reasoning from how the method works. | — |
| 7 | Temperature changes the base rate. | none | FAIL, fixed: no cite. Now labeled the tutorial's own reasoning, and "can change". | — |
| 8 | Claim extraction into atomic claims. | none | PASS (tutorial example) | — |
| 9 | "The Faithfulness work defines this as decomposing the response into claims and verifying each" | old faithfulness source | FAIL, fixed: now the Ragas definition (claims, inferred from context, supported / total). | "Total number of claims in the response" |
| 10 | DeepEval metrics follow the same shape. | 4 | PASS (now names `FaithfulnessMetric`) | "An LLM extracts all claims from `actual_output`" |
| 11 | "This is where most production hallucinations are caught" | none | FAIL, fixed: unsupported. Now "the only one of the three that can catch an answer that is wrong in the same way every time". | — |
| 12 | "SelfCheckGPT reports that consistent sampling identifies many hallucinations" | 1 | FAIL, fixed: now "uses this signal to find non-factual sentences without an external database". | abstract |
| 13 | "Measuring success needs a definition of the bar …" | 3 | FAIL, fixed: not in source 3. Now the warning about overinterpreting a score, tied to the blended number. | "overinterpret the quantitative score" |
| 14 | Mapping of failure types to fixes. | none | PASS (now labeled the tutorial's view) | — |
| 15 | Grounding code: `evaluate(...)` in a test; `context` plus `retrieval_context` | 4 | FAIL, fixed: `evaluate()` does not fail a test. Now `assert_test`, and only `retrieval_context` (what FaithfulnessMetric reads). | Faithfulness needs `input`, `actual_output`, `retrieval_context` |
| 16 | Self-consistency code: `set()` of lists | none | FAIL, fixed: lists are not hashable. Now `frozenset(extract_facts(a))`. | — |
| 17 | Temperature code uses `pytest` without import. | none | FAIL, fixed: `import pytest` added. | — |
| 18 | Planted hallucination test. | none | PASS (illustration) | — |
| 19 | Mistake 1 cite to the old faithfulness source | old | FAIL, fixed: advice, cite removed. | — |
| 20 | Mistake 2: "misses the failure where the model is confidently wrong every time" with cite 1 | 1 | FAIL, fixed: cite now only on "needs no external database"; the blind spot is "by its design". | "without an external database" |
| 21 | Mistakes 3–6 | none | PASS (tutorial reasoning) | — |
| 22 | "What a tester can check" | none | PASS (Tutorial advice) | — |
| 23 | Key words "Faithfulness", "SelfCheckGPT" | — | FAIL, fixed: now match the sources (supported share of claims; non-factual sentences without an external database). | — |

## Wanted library fixes

- Fix or drop `faithfulness`: the URL https://arxiv.org/abs/2210.07229 is the MEMIT paper. The named paper is at https://arxiv.org/abs/2307.16877.
- New source `ragas-faithfulness`: "Faithfulness", Ragas docs, https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/
- `deepeval-metrics` URL: https://deepeval.com/docs/metrics-introduction (or the metric pages).

Open FAILs: 0
