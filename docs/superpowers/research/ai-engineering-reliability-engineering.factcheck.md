# Fact-check: content/ai-engineering/reliability-engineering.mdx

Checked 2026-10-28 by an agent that did not write the page. All 6 sources were fetched fresh (Claude docs as `.md`, the SRE book chapters as HTML turned into text). The quotes of the research notes were not trusted. The anthropic-sdk-python README on GitHub was also fetched for the retry-default doubt. `scripts/linux_overlap.py` found no copied word run of the page in the 7 fetched texts.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The API returns an HTTP error code and a JSON body with an error `type` and `message` | 1 | PASS | S1: "The API always returns errors as JSON, with a top-level `error` object that always includes a `type` and `message` value." |
| 2 | `429` rate limit, `500` internal error, `529` overloaded are short errors | 1 | PASS | S1: "429 - `rate_limit_error`", "500 - `api_error`: An unexpected error has occurred internal to Anthropic's systems. Retry the request with exponential backoff", "529 - `overloaded_error`: The API is temporarily overloaded."; "The official SDK automatically retries transient failures (such as connection errors, rate limits, and 5xx server errors)". The spend-cap 429 exception is stated later on the page (row 10). |
| 3 | `400` bad request and `401` bad API key fail again on every try | 1 | PASS | S1: "400 - `invalid_request_error`: There was an issue with the format or content of your request." / "401 - `authentication_error`: There's an issue with your API key". The cause is in the request itself, so the same request fails again; S3's retry list does not include 400 or 401. |
| 4 | Careless retries can turn a small problem into a large outage | 4 | PASS | S4: "retries can destabilize a system"; a retry budget "can be the difference between a capacity planning failure that leads to some dropped queries and a global cascading failure." |
| 5 | The Python SDK makes 2 retries by default with growing waits, for connection errors, 408, 409, 429, >=500 | 3 | PASS | S3: "Certain errors are automatically retried 2 times by default, with a short exponential backoff. Connection errors ..., 408 Request Timeout, 409 Conflict, 429 Rate Limit, and >=500 Internal errors are all retried by default." |
| 6 | The SDK honors `retry-after` when present | 1 | PASS | S1: "with exponential backoff, twice by default, honoring the `retry-after` header when present." |
| 7 | `max_retries` changes the count | 3 | PASS | S3: "You can use the `max_retries` option to configure or disable this" |
| 8 | SRE rule: randomized exponential backoff (jitter) so clients do not retry at the same moment | 4 | PASS | S4: "Always use randomized exponential backoff when scheduling retries. ... can cause retry ripples to schedule at the same time" |
| 9 | SRE rules: limit retries per request; a server-wide retry budget, e.g. 60 per minute, then fail | 4 | PASS | S4: "Limit retries per request. Don't retry a given request indefinitely." / "Consider having a server-wide retry budget. For example, only allow 60 retries per minute in a process, and if the retry budget is exceeded, don't retry; just fail the request." |
| 10 | A spend-cap `429` has no `retry-after` and retries fail until access resumes | 2 | PASS | S2: "the response has no `retry-after` header. Retrying, including the SDK's automatic retries, fails until access resumes." |
| 11 | Default SDK timeout is 10 minutes; `timeout` option | 3 | PASS | S3: "By default requests time out after 10 minutes. You can configure this with a `timeout` option" |
| 12 | On timeout the SDK raises `APITimeoutError` and retries a timed-out request 2 times by default | 3 | PASS | S3: "On timeout, the SDK throws an `APITimeoutError`." / "requests that time out are retried twice by default" |
| 13 | Always set a deadline; none or a very long one lets old problems keep using resources | 4 | PASS | S4: "It's usually wise to set a deadline. Setting either no deadline or an extremely high deadline may cause short-term problems that have long since passed to continue to consume server resources" |
| 14 | Degraded response: less detail, cheaper to compute, under overload | 5 | PASS | S5: "serve degraded responses: responses that are not as accurate as or that contain less data than normal responses, but that are easier to compute." |
| 15 | Cached answer or simpler model as an AI fallback | none | PASS | The tutorial's own application of row 14 ("For an AI feature, this can be ..."); no new fact. |
| 16 | A refusal is a normal response with `stop_reason: "refusal"`, not an error, and can be retried on a fallback model | 6 | PASS | S6: "you receive a normal response, not an error, with `stop_reason: \"refusal\"`." / "how to retry refused requests on a fallback model." |
| 17 | Code: `anthropic.Anthropic(api_key=..., max_retries=2, timeout=30.0)`; comment "the SDK default" | 3 | PASS | S3: `max_retries=0,  # default is 2`, `timeout=20.0,  # 20 seconds (default is 10 minutes)` (float seconds). |
| 18 | Code: `client.messages.create(model="claude-opus-5-5", max_tokens=..., messages=[...])` | 3 | PASS | S3 examples use the same call and `model="claude-opus-5-5"`. |
| 19 | Code: catches `RateLimitError`, `APIStatusError` (`e.status_code`, `e.response`), `APITimeoutError`, `APIConnectionError`; `request-id` header | 3 | PASS | S3: `except anthropic.RateLimitError`, `except anthropic.APIStatusError as e: ... e.status_code ... e.response`, `except anthropic.APIConnectionError`; `response.headers.get("request-id")`. `APITimeoutError` comes before `APIConnectionError`, so the order is right. `log_error` and `FALLBACK_TEXT` are app placeholders. |
| 20 | A subclass of `APIError` for a connection failure or 4xx/5xx; `RateLimitError` is the 429 class | 3 | PASS | S3: "a subclass of `APIError` is raised"; table "429 \| `RateLimitError`". |
| 21 | Example: the API returns `529` and `429` errors in a busy hour | 1 | PASS | S1 defines both codes (row 2). The busy hour is the tutorial's scenario. |
| 22 | Example: own loop of 3 tries around an SDK that retries 2 times gives 9 API calls | 3 | PASS (wording clarified) | S3: "retried 2 times by default" = 3 attempts per try; 3 x 3 = 9. Same product rule as S4: "a number of attempts as large as the product of the number of attempts at each layer". The old wording "tries each call 3 times" could be read as 3 retries (4 tries, 12 calls); now "up to 3 times" and "each try is up to 3 attempts". |
| 23 | Retries like these add load to an overloaded server | 4 | PASS | S4: "the retries themselves may be keeping the backend in an overloaded mode"; "Retries can amplify the effects seen in Server Overload." |
| 24 | Fix: one retry layer, the SDK with exponential backoff | 3 | PASS | S3 (row 5). |
| 25 | Fix: 30-second timeout instead of the 10-minute default | 3 | PASS | S3 (row 11); 30 s is the tutorial's choice. |
| 26 | Fix: a short message and human link is a degraded response | 5 | PASS | S5 (row 14). |
| 27 | A sharp rise in usage can hit acceleration limits; grow traffic slowly | 1 | PASS | S1: "if your organization has a sharp increase in usage, you might see 429 errors because of acceleration limits on the API. To avoid hitting acceleration limits, increase your traffic gradually" |
| 28 | Retries at every layer multiply and worsen overload | 4 | PASS | S4: "avoid amplifying retries by issuing retries at multiple levels: a single request at the highest layer may produce a number of attempts as large as the product of the number of attempts at each layer" |
| 29 | Retries with no jitter send waves of load | 4 | PASS | S4: "retry ripples to schedule at the same time, which can then amplify themselves" |
| 30 | `400`/`401` fail again; spend-cap `429` fails until access resumes | 1, 2 | PASS | S1: "A tier spend-cap 429 has no `retry-after` header and keeps failing until access resumes"; S2 (row 10); row 3. |
| 31 | Refusal comes back with status 200 and `stop_reason: "refusal"` | 6 | PASS | S6: "A refusal is a successful HTTP 200 response with `stop_reason: \"refusal\"`" |
| 32 | With streaming, an error can come after a `200` | 1 | PASS | S1: "an error can occur after the API returns a 200 response." |
| 33 | Tester tips | none | PASS | Callout says "the tutorial's own advice". |
| 34 | Key words: exponential backoff, waiting longer before each retry | 3 | PASS | S3: "with a short exponential backoff" (general meaning of the term). |
| 35 | Key words: jitter, retry budget (per request or per server), timeout/deadline | 4, 3 | PASS | S4 rows 8, 9, 13; S3 row 11. |
| 36 | Key words: degraded response, `529 overloaded_error`, fallback model | 5, 1, 6 | PASS | Rows 14, 2, 16. |
| 37 | Key words: `retry-after` is the seconds to wait before a retry | 2 | PASS | S2: "`retry-after` \| The number of seconds to wait until you can retry the request." |

## Doubt from the writer: the "9 API calls" example

The Python SDK default is 2 retries (S3: "retried 2 times by default"; S3 code: `max_retries=0,  # default is 2`; S1: "twice by default"). The anthropic-sdk-python README on GitHub was also fetched; it points to the Claude docs (S3) for the details. 2 retries = 3 attempts. An own loop of 3 tries in total x 3 SDK attempts = 9 calls. The number is correct, and the cite n=3 is the doc that states the default. Only the wording was ambiguous (row 22).

## Re-check

| # | Change | Verdict |
|---|---|---|
| 22 | All 3 voices of "A real-life example" now say "up to 3 times", "the SDK retries 2 times by default, so each try is up to 3 attempts" with `<Cite n={3} />`, and "3 × 3 = 9 API calls". | PASS |

FAILs found: 0. Clarifications: 1 (row 22).

Open FAILs: 0
