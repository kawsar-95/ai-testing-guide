# Fact check: AI/ML Testing, AI Quality Metrics and Reporting

Page: `content/ai-ml-testing/ai-quality-metrics.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://deepeval.com/docs/metrics-introduction | yes | DeepEval's own docs. |
| 2 | https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ | yes | Ragas's own docs. |
| 3 | https://platform.claude.com/docs/en/build-with-claude/token-counting | yes | Anthropic's own docs. |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Hallucination rate, faithfulness, and answer relevancy are already 0-1 scores from DeepEval. | 1 | PASS | DeepEval's metrics page lists "Answer Relevancy" and "Faithfulness" under its RAG generator metrics. |
| 2 | Faithfulness is shared with Ragas's metrics; Ragas currently calls the relevancy metric "Response Relevancy" rather than "Answer Relevancy". | 1, 2 | FAIL, fixed | The original sentence cited both DeepEval and Ragas for all three metric names as if the terminology were identical across tools. Ragas's own metrics list has "Faithfulness" (matches) but "Response Relevancy" (does not match "Answer Relevancy"). Rewritten to attribute the name correctly per tool. |
| 3 | Cost per session needs real input/output token counts, not a guess. | 3 | PASS | Anthropic's Token counting page documents the `count_tokens` endpoint and the input/output token split used for billing. |
| 4 | Latency P95 needs the full distribution, not an average. | none | PASS: standard practice, not misattributed to a source. |
| 5 | Dashboard pipeline (eval run -> aggregate -> store -> chart) and the `summarise_run`/`call_cost`/`executive_summary` code. | 3 (for the cost formula only) | PASS: illustrative aggregation logic built on the confirmed input/output token split; pricing figures explicitly marked illustrative. |
| 6 | Common mistakes 1-5, tutorial-advice bullets. | 1, 2, 3 | PASS. |

## Notes

One real naming-drift issue found and fixed: "Answer Relevancy" is DeepEval's term; Ragas's current documentation uses "Response Relevancy" for the equivalent concept. The page previously implied both tools used the same name. Not changed: "hallucination rate" is kept as DeepEval's named metric, consistent with how `ai-ml-testing-hallucination-detection.md` (verified earlier) already treats Ragas's hallucination-adjacent contribution as its Faithfulness metric rather than a separately named "Hallucination" metric.

Open FAILs: 0
