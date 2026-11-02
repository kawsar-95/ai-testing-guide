# Fact check: AI/ML Testing, Load and Performance Testing for AI Systems

Page: `content/ai-ml-testing/ai-load-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.locust.io/en/stable/ | yes | Locust |
| 2 | https://platform.claude.com/docs/en/api/messages | yes | Anthropic (docs) |
| 3 | https://platform.claude.com/docs/en/api/rate-limits | yes | Anthropic (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Provider limits are often tokens per minute, not requests per minute (cite: Messages API reference). | 2 | FAIL, fixed | The reference page does not discuss rate limits. The Rate limits page says the Messages API limits are "measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM)". Cite repointed in three panels. |
| 2 | "The long question is 2% of traffic" with `@task(10)` short and `@task(2)` long. | 1 | FAIL, fixed | Locust task weights 10:2 mean the long task is one request in six (about 17%), not 2%. Corrected in prose and mistake 1 in all panels. |
| 3 | Locust `HttpUser`, `wait_time = between(1, 3)`, `@task(n)`, `self.client.post`. | 1 | PASS | Standard Locust API per its documentation. |
| 4 | Measurement code counted each `data: ` line as a token. | none | FAIL, fixed | SSE events are not tokens; the line is now commented as a proxy. |
| 5 | `max_tokens` fixed on both arms for comparability (cite: Messages API reference). | 2 | PASS | The Messages API reference defines `max_tokens` as the cap on generated tokens. |
| 6 | Mistake 6 (do not load-test production) cited to Locust. | 1 | NOTE | Locust docs do not state this; it is advice. Left as is; it is the one remaining weak cite on this page. |
| 7 | Budgets (p95 TTFT < 800 ms, total < 6 s, TPS > 20), 1% truncation threshold. | none | PASS | Illustrative thresholds. |

Open FAILs: 0
