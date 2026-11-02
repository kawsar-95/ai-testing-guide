# Research notes: AI/ML Testing, Load and Performance Testing for AI Systems

Page: `content/ai-ml-testing/ai-load-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `locust` | Locust documentation | Locust | https://docs.locust.io/en/stable/ |
| S2 | `anthropic-temp` | Messages API reference | Anthropic (docs) | https://platform.claude.com/docs/en/api/messages |
| S3 | `anthropic-rate-limits` | Rate limits (new) | Anthropic (docs) | https://platform.claude.com/docs/en/api/rate-limits |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | Provider limits are often tokens per minute, not requests per minute (cite: Messages API reference). | 2 | The reference page does not discuss rate limits. The Rate limits page says the Messages API limits are "measured in requests per minute (RPM), input tokens per minute (ITPM), and output tokens per minute (OTPM)". Cite repointed in three panels. |
| C2 | "The long question is 2% of traffic" with `@task(10)` short and `@task(2)` long. | 1 | Locust task weights 10:2 mean the long task is one request in six (about 17%), not 2%. Corrected in prose and mistake 1 in all panels. |
| C3 | Locust `HttpUser`, `wait_time = between(1, 3)`, `@task(n)`, `self.client.post`. | 1 | Standard Locust API per its documentation. |
| C4 | Measurement code counted each `data: ` line as a token. | none | SSE events are not tokens; the line is now commented as a proxy. |
| C5 | `max_tokens` fixed on both arms for comparability (cite: Messages API reference). | 2 | The Messages API reference defines `max_tokens` as the cap on generated tokens. |
| C6 | Mistake 6 (do not load-test production) cited to Locust. | 1 | Locust docs do not state this; it is advice. Left as is; it is the one remaining weak cite on this page. |
| C7 | Budgets (p95 TTFT < 800 ms, total < 6 s, TPS > 20), 1% truncation threshold. | none | Illustrative thresholds. |
