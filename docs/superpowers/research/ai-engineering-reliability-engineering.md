# AI Engineering page: Reliability Engineering (research notes)

Writer notes for `content/ai-engineering/reliability-engineering.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-rel/` (Claude docs as their `.md` versions, the SRE book chapters as HTML turned into text). Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Claude API errors (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/errors | 2026-10-28 |
| S2 | Rate limits (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/rate-limits | 2026-10-28 |
| S3 | Python SDK (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/sdks/python | 2026-10-28 |
| S4 | Site Reliability Engineering, ch. 22, Addressing Cascading Failures (Google) | https://sre.google/sre-book/addressing-cascading-failures/ | 2026-10-28 |
| S5 | Site Reliability Engineering, ch. 21, Handling Overload (Google) | https://sre.google/sre-book/handling-overload/ | 2026-10-28 |
| S6 | Refusals and fallback (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Errors come back as JSON with an error `type` and `message`. | S1 | "The API always returns errors as JSON, with a top-level `error` object that always includes a `type` and `message` value." |
| C2 | Codes: 400 invalid request, 401 authentication, 429 rate limit, 500 internal, 529 overloaded. | S1 | "400 - `invalid_request_error`" / "401 - `authentication_error`" / "429 - `rate_limit_error`" / "500 - `api_error`" / "529 - `overloaded_error`: The API is temporarily overloaded." |
| C3 | Careless retries can make a small problem into a large outage; retries add load to an overloaded server. | S4 | "retries can destabilize a system" / "the retries themselves may be keeping the backend in an overloaded mode" / "can cause retry ripples to schedule at the same time, which can then amplify themselves" |
| C4 | The Python SDK retries 2 times by default with short exponential backoff: connection errors, 408, 409, 429, >=500; `max_retries` changes it. | S3 | "Certain errors are automatically retried 2 times by default, with a short exponential backoff. Connection errors ..., 408 Request Timeout, 409 Conflict, 429 Rate Limit, and >=500 Internal errors are all retried by default." / "You can use the `max_retries` option to configure or disable this" |
| C5 | The SDK honors `retry-after` when present. | S1 | "honoring the `retry-after` header when present" |
| C6 | SRE: randomized exponential backoff; limit retries per request; a server-wide retry budget, e.g. 60 per minute, then fail. | S4 | "Always use randomized exponential backoff when scheduling retries." / "Limit retries per request. Don't retry a given request indefinitely." / "only allow 60 retries per minute in a process, and if the retry budget is exceeded, don't retry; just fail the request." |
| C7 | A spend-cap 429 has no `retry-after`, and retries fail until access resumes. | S2 | "the response has no `retry-after` header. Retrying, including the SDK's automatic retries, fails until access resumes." |
| C8 | Default timeout 10 minutes; `timeout` option; `APITimeoutError`; timed-out requests are retried twice. | S3 | "By default requests time out after 10 minutes. You can configure this with a `timeout` option" / "On timeout, the SDK throws an `APITimeoutError`." / "requests that time out are retried twice by default" |
| C9 | Always set a deadline; none or a very long one lets old problems keep using resources. | S4 | "It's usually wise to set a deadline. Setting either no deadline or an extremely high deadline may cause short-term problems that have long since passed to continue to consume server resources" |
| C10 | Degraded responses under overload: less accurate or less data, easier to compute. | S5 | "One option for handling overload is to serve degraded responses: responses that are not as accurate as or that contain less data than normal responses, but that are easier to compute." |
| C11 | A refusal is a normal response with `stop_reason: "refusal"`, not an error; it can be retried on a fallback model. | S6 | "you receive a normal response, not an error, with `stop_reason: \"refusal\"`." / description: "how to retry refused requests on a fallback model." |
| C12 | SDK error classes: subclass of `APIError` for connection failure or 4xx/5xx; `RateLimitError` for 429; `APIStatusError`, `APIConnectionError`. | S3 | "a subclass of `APIError` is raised" / "429 | `RateLimitError`" / `except anthropic.APIConnectionError` / `except anthropic.APIStatusError` |
| C13 | Code uses model id `claude-opus-5-5`, `max_retries`, `timeout`. | S3 | Examples use `model="claude-opus-5-5"`, `max_retries=0,  # default is 2`, `timeout=20.0`. |
| C14 | A sharp rise in usage can hit acceleration limits; grow traffic gradually. | S1 | "if your organization has a sharp increase in usage, you might see 429 errors because of acceleration limits on the API. To avoid hitting acceleration limits, increase your traffic gradually" |
| C15 | With streaming, an error can come after a 200 response. | S1 | "an error can occur after the API returns a 200 response." |
| C16 | `retry-after` is the number of seconds to wait before a retry. | S2 | "`retry-after` | The number of seconds to wait until you can retry the request." |

## Not on the page

The chatbot numbers (3 own retries x SDK retries = 9 calls, 30 s timeout) and the tester checks are the tutorial's own. "9 calls" is the tutorial's arithmetic: 3 loop tries in total, each up to 3 SDK attempts (1 call and the default 2 retries, S3: "retried 2 times by default"). The checker (2026-10-28) confirmed the default and made the page wording say "up to 3 times" and "3 × 3 = 9". The `log_error` and `FALLBACK_TEXT` names in the code are placeholders for the app's own code.
