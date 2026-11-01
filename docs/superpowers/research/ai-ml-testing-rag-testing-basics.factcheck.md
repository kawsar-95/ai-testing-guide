# Fact check: AI/ML Testing, RAG Testing Fundamentals

Page: `content/ai-ml-testing/rag-testing-basics.mdx`. Data: `scripts/ai_ml_testing_pages_p1d.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://arxiv.org/abs/2005.11401 | yes | Paper on arXiv by its authors |
| 2 | https://docs.ragas.io/en/stable/ | yes | Ragas docs |
| 3 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas docs |

Each source is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | RAG gives the model material at answer time instead of only training memory. | 1 | PASS | Abstract: parametric memory plus a retrieved "non-parametric memory" |
| 2 | Precision@k, Recall@k definitions. | none | PASS | Standard definitions; the test code matches them. |
| 3 | Low recall: the model "will hallucinate" to fill the gap. | none | FAIL, fixed: now "can make something up". A certainty with no source. |
| 4 | Context precision = "how much of the retrieved text was actually used". | none | FAIL, fixed: Ragas defines it as ranking. Now "are the relevant chunks ranked above the irrelevant ones", cite 3. | "rank relevant chunks higher than irrelevant ones" |
| 5 | Ragas separates "context relevance, answer faithfulness, and answer relevance". | 3 | FAIL, fixed: the RAG list has Context Precision, Context Recall, Faithfulness, Response Relevancy ("Context Relevance" is an Nvidia metric). Text now names those. | Category list on the page |
| 6 | Ragas "describes the measurement as a set of independent dimensions rather than one score". | 2 | FAIL, fixed: the page does not say this. Now: Ragas aims to move from "vibe checks" to systematic evaluation loops. | "move from "vibe checks" to systematic evaluation loops" |
| 7 | Four failure modes and where each is fixed. | none | PASS | Tutorial's own triage; matches the syllabus list (hallucination, context mismatch, retrieval gaps). |
| 8 | Failure 4 "most often" misfiled as a model bug. | none | FAIL, fixed: superlative with no source; now "often". |
| 9 | Thresholds are a decision, not a fact. | none | PASS | Labeled as a decision. |
| 10 | Faithfulness (and Response Relevancy) split the end-to-end measurement. | 3 | FAIL, fixed: was "context relevance, faithfulness, and answer relevance". Now Faithfulness vs context, Response Relevancy vs question. | Names on the page |
| 11 | Faithfulness catches hallucination and uses an LLM judge. | 3 | PASS (after fix) | Linked page: `Faithfulness(llm=llm)`; "factually consistent ... with the retrieved context" |
| 12 | Answering from memory is "exactly the failure RAG was supposed to prevent". | 1 | FAIL, fixed: the paper claims more factual output, not prevention. Now "the failure RAG is meant to reduce: the RAG paper reports more factual answers". | "more specific, diverse and factual language" |
| 13 | Cost check: more retrieved text means more tokens on each call. | none | PASS | Arithmetic; no number claimed. |
| 14 | Code: `from ragas.metrics import faithfulness, context_precision, answer_relevancy`, `evaluate(dataset=[result], ...)`, `scores.faithfulness`. | none | FAIL, fixed: legacy names, `evaluate` not imported, a list is not a Ragas dataset, and the result has no `.faithfulness`. Now `ragas.metrics.collections.Faithfulness`, `llm_factory`, `.score(user_input=, response=, retrieved_contexts=)`, `score.value`, as in the Ragas Faithfulness page. | "use `.score()` instead of `.ascore()`" |
| 15 | Retrieval-gap test, token-cost test (800 tokens). | none | PASS | Tutorial's own examples; `count_tokens` is a project helper. |
| 16 | Mistake 1: test retrieval separately. | 3 | PASS | Ragas has separate retriever metrics (Context Precision, Context Recall). |
| 17 | Mistake 4: "the failure RAG was meant to prevent". | 1 | FAIL, fixed: now "RAG is meant to make answers more factual, and this test checks that it does". | "more specific, diverse and factual language" |
| 18 | Mistake 6: chunking can split an answer; fix with overlap or another split. | none | PASS | Tutorial's own advice. |
| 19 | Key word "Context precision": "How much of the retrieved text was actually used". | none | FAIL, fixed: now the Ragas ranking definition. |

## Checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| No prices | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |
| Code matches the current docs | PASS after fix 14 |

Open FAILs: 0
