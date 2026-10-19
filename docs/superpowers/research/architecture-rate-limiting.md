# Rate Limiting (Architecture module, topic 14) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl` on 2026-10-20 and converted to plain text in the scratch folder of the session. No fetched text is committed. Each quote below is copied from that text. The Cloudflare Learning Center page (`cloudflare.com/learning/bots/what-is-rate-limiting/`) refused the automated fetch, so the page uses the Cloudflare WAF docs (S5, S6, S7) instead.

Base text: the owner's notes, section "Rate Limiting" (`architecture-owner-notes.md`). The OTP example and the tester tips are the tutorial's own words.

## Sources

S1. RFC 6585: Additional HTTP Status Codes (section 4, 429 Too Many Requests) — IETF — https://www.rfc-editor.org/rfc/rfc6585.html — accessed 2026-10-20
S2. RFC 9110: HTTP Semantics (section 10.2.3, Retry-After) — IETF — https://www.rfc-editor.org/rfc/rfc9110.html#name-retry-after — accessed 2026-10-20
S3. Throttling pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/throttling — accessed 2026-10-20
S4. INCR (Pattern: rate limiter) — Redis docs — https://redis.io/docs/latest/commands/incr/ — accessed 2026-10-20
S5. Rate limiting rules — Cloudflare WAF docs — https://developers.cloudflare.com/waf/rate-limiting-rules/ — accessed 2026-10-20
S6. Rate limiting best practices — Cloudflare WAF docs — https://developers.cloudflare.com/waf/rate-limiting-rules/best-practices/ — accessed 2026-10-20
S7. Rate limiting parameters — Cloudflare WAF docs — https://developers.cloudflare.com/waf/rate-limiting-rules/parameters/ — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A rate limit has a period and a number of requests per period | S5 | "Period: The period of time to consider (in seconds) when evaluating the rate." / "Requests per period: The number of requests over the period of time that will trigger the rate limiting rule." |
| 2 | Rate limits prevent abuse, protect login from brute force, and cap API calls per client | S5 | "Use rate limiting rules to prevent abuse of your websites and APIs — for example, to protect a login endpoint from brute-force attacks or to cap how many API calls a single client can make in a given time window." |
| 3 | The server chooses how to identify the user (credentials, cookie) | S1 | "Note that this specification does not define how the origin server identifies the user, nor how it counts requests." / "it might identify the user by its authentication credentials, or a stateful cookie." |
| 4 | Limits stop one client from taking all the resources | S3 | "To prevent a single tenant from monopolizing application resources." |
| 5 | 429 means too many requests in a given amount of time | S1 | "The 429 status code indicates that the user has sent too many requests in a given amount of time ("rate limiting")." |
| 6 | A 429 MAY include Retry-After | S1 | "MAY include a Retry-After header indicating how long to wait before making a new request." |
| 7 | A 429 must not be stored by a cache | S1 | "Responses with the 429 status code MUST NOT be stored by a cache." |
| 8 | Retry-After is a number of seconds or an HTTP date; 120 means 2 minutes | S2 | "The Retry-After field value can be either an HTTP-date or a number of seconds to delay after receiving the response." / "In the latter example, the delay is 2 minutes." |
| 9 | Send Retry-After and enough context (name the limit, the scope) | S3 | "Include a Retry-After HTTP header so that the client can pick a retry strategy. Return enough context for the caller to retry deliberately instead of guessing. For example, name the limit that the caller exceeds, clarify the affected scope, or suggest a rate that would succeed." |
| 10 | Four common algorithms and their trade-offs | S3 | "Token bucket" / "Supports bursts up to a configured size and enforces a steady refill rate." / "Leaky bucket" / "Emits at a constant rate." / "Fixed window" / "admits back-to-back bursts at window boundaries." / "Sliding window" / "Smooths the window-boundary problem of fixed windows at the cost of more state." |
| 11 | Local counters undercount across replicas; a shared Redis counter sees all requests but adds latency | S3 | "Local counters are fast but undercount when the same caller reaches multiple replicas. A centralized counter in a shared store like Redis sees every request but adds latency to each decision." |
| 12 | Redis INCR with EXPIRE is a classic rate limiter | S4 | "The rate limiter pattern is a special counter that is used to limit the rate at which an operation can be performed." / "these counters are always incremented setting an expire of 10 seconds so that they'll be removed by Redis automatically" |
| 13 | Many users behind NAT can share one IP address | S7 | "Use IP with NAT support to handle situations such as requests under NAT sharing the same IP address." |
| 14 | OTP endpoints are frequent brute-force targets | S6 | "One-time password (OTP) and verification endpoints (such as /api/otp/validate or /account/verify) are frequent targets for brute force attacks." |
| 15 | For OTP checks, count only failed attempts | S6 | "Use response-based counting: Count only requests that return error responses (such as 401 or 403) to avoid rate limiting legitimate users who submit valid codes." |
| 16 | A server answers 429 when a caller goes over a set rate | S3 | "HTTP 429 (Too Many Requests): The caller exceeds a configured request rate over a defined window." |
| 17 | Cloudflare: 429 is the default code when a rate limiting rule blocks | S7 | "Only available when you set the rule action to Block." / "The default value is 429 (Too many requests)." |

## Owner claims without an outside source

- The owner writes "retryAfterSeconds" (in the notes and in the image). The HTTP standard way is the `Retry-After` header (S1, S2). The page teaches the header and says that a body field such as `retryAfterSeconds` is an app choice. S3 supports giving extra context in the response, so that sentence cites S3. The image keeps the owner's label; the page text explains it.
- "Ignoring admin or internal endpoints": kept as the tutorial's own advice, no cite.
- The OTP numbers (3 per phone in 5 min, 10 per IP in 10 min) are the owner's example rule, not a standard. No cite.
