# Fact check: AI/ML Testing, Testing LLM APIs

Page: `content/ai-ml-testing/llm-api-testing.mdx`. Data: `scripts/ai_ml_testing_pages_p1d.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.openai.com/docs/api-reference/chat | 403 to scripts; read at the official mirror developers.openai.com | OpenAI docs |
| 2 | https://docs.anthropic.com/en/api/messages | yes (301 to platform.claude.com) | Anthropic docs |
| 3 | https://docs.anthropic.com/en/docs/build-with-claude/token-counting | yes (301 to platform.claude.com) | Anthropic docs |
| 4 | https://ai.google.dev/gemini-api/docs | yes | Google docs |

Note: source 2 has the library title "Temperature", but the URL is the whole Messages API reference. The claims cited to it are in that reference.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Request contract: model, messages, max tokens, temperature, optional parameters. | 1 | PASS | "A list of messages comprising the conversation so far." |
| 2 | Status table with a `529 overloaded` row. | none | FAIL, fixed: 529 is an Anthropic-only code and had no source in the page. Row removed. The retry rules are now labeled the tutorial's own advice. |
| 3 | 400/401/429/500 meanings. | none | PASS | Standard HTTP meanings. |
| 4 | Time to first token matters more than total time. | 2 | FAIL, fixed: the Messages reference does not say this. Cite removed; labeled "the tutorial's own view". |
| 5 | `stream: true` gives a series of server-sent events. | none | FAIL, fixed: no cite. Cite 2 added. | "incrementally stream the response using server-sent events" |
| 6 | Provider timeout vs client timeout; yours should be shorter. | none | PASS | Tutorial's own advice. |
| 7 | A naive retry loop turns one 429 into many requests. | none | PASS | Illustration ("fifty"), not a measured fact. |
| 8 | Response reports tokens in and out; "That number is how you bill". | 3 | FAIL, fixed: token counting is about counting before you send. Now cite 2 for `usage` ("billing and rate-limit usage") and cite 3 for counting before sending. | "Billing and rate-limit usage." / "before you send it to Claude" |
| 9 | Providers differ: model id format, message shape, system prompt placement, streaming event names, safety settings. | 4 | FAIL, fixed: the Gemini overview does not compare providers. Now one checked example: Claude `system` parameter (cite 2), OpenAI `developer` message (cite 1), Gemini has its own SDKs and request format (cite 4). | "`developer` messages replace the previous `system` messages" |
| 10 | Report median and 95th percentile; TTFT apart from total. | none | PASS | Tutorial's own advice. |
| 11 | Code: unknown model must give `status == 404`; empty messages `== 400`. | none | FAIL, fixed: the exact code differs by provider. Both now assert a 4xx (`400 <= status < 500`). |
| 12 | Code: `CLIENT_TIMEOUT_SECONDS < 60` implied a 60 s provider timeout. | none | FAIL, fixed: now `< app_config.PROVIDER_TIMEOUT_SECONDS`. |
| 13 | Code: 429 retried with backoff, 400 not retried, truncated stream raises, cost guard. | none | PASS | Fake-server tests; no price given (`INPUT_PRICE` is a project constant). |
| 14 | Mistake 4: client timeout longer than provider's means "the provider's error is never seen". | 2 | FAIL, fixed: the logic was reversed and the cite did not support it. Now: the user waits until the provider gives up. No cite. |
| 15 | Mistake 5: token usage in the response is free information. | 3 | FAIL, fixed: cite moved to 2 (the `usage` field is in the Messages reference). |
| 16 | Mistake 6: model id, message shape, streaming events, safety settings all differ. | 4 | FAIL, fixed: now "where the system prompt goes and the shape of the request differ", cites 2 and 1. |
| 17 | Key words: "429: the one status code that should be retried"; "400: the one ... never retried". | none | FAIL, fixed: contradicted the table (500 is retried, 401 is not). Now "Retry it after a wait" and "Fix it; never retry it". |

## Checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| No prices | PASS (the cost test uses constants and a budget, no vendor price) |
| Tester tip has no cites and says it is the tutorial's advice | PASS |

Open FAILs: 0
