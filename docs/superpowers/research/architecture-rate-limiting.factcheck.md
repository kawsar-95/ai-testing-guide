# Fact-check: Rate Limiting (round 1, 2026-10-20)

An independent agent checked the page. It fetched each source with `curl` on 2026-10-20 (RFCs as `.txt` from rfc-editor.org) and searched the plain text. No fetched text is committed. All 7 sources are IETF RFCs or official vendor docs (Microsoft Learn, Redis docs, Cloudflare docs). Each source has at least 1 cite, and each cite number has a source. The page had 4 FAILs. All 4 are fixed.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | A rate limit has a period and a number of requests | 5 | PASS | "Period: The period of time to consider (in seconds) when evaluating the rate." / "Requests per period: The number of requests over the period of time that will trigger the rate limiting rule." |
| 2 | In plain words | The standard does not fix how to identify the user; credentials or cookie | 1 | PASS | "this specification does not define how the origin server identifies the user, nor how it counts requests." / "it might identify the user by its authentication credentials, or a stateful cookie." |
| 3 | In plain words | Rate limits "stop" brute-force attacks on a login page and cap API calls | 5 | FAIL→fixed | The source says "protect", not "stop". Now "They protect a login page from brute-force attacks and cap how many API calls one client can make." Quote: "to protect a login endpoint from brute-force attacks or to cap how many API calls a single client can make in a given time window." |
| 4 | In plain words | Limits stop one user from taking all the resources | 3 | PASS | "To prevent a single tenant from monopolizing application resources." |
| 5 | In plain words | Each OTP SMS or AI call costs the company | – | PASS | The owner's view, plain cost logic. No product claim. |
| 6 | In plain words | Over the limit, the server usually answers 429 | – | FAIL→fixed | Had no cite. Now cites S3 and adds the Cloudflare default from S7. Quotes: "HTTP 429 (Too Many Requests): The caller exceeds a configured request rate over a defined window." (S3) / "Only available when you set the rule action to Block." … "The default value is 429 (Too many requests)." (S7) |
| 7 | In plain words | 429 = "too many requests in a given amount of time" | 1 | PASS | "The 429 status code indicates that the user has sent too many requests in a given amount of time ("rate limiting")." |
| 8 | In plain words | A 429 may include `Retry-After` | 1 | PASS | "MAY include a Retry-After header indicating how long to wait before making a new request." |
| 9 | In plain words | `Retry-After` is seconds or a date; `120` = 2 minutes | 2 | PASS | "The Retry-After field value can be either an HTTP-date or a number of seconds to delay after receiving the response." / "Retry-After: 120 In the latter example, the delay is 2 minutes." |
| 10 | In plain words | A cache must not store a 429 | 1 | PASS | "Responses with the 429 status code MUST NOT be stored by a cache." |
| 11 | Callout (note) | `retryAfterSeconds` is an app choice; Azure advises naming the limit and scope | 3 | PASS | "Return enough context for the caller to retry deliberately instead of guessing. For example, name the limit that the caller exceeds, clarify the affected scope" |
| 12 | In plain words | Four common algorithms | 3 | PASS | The Azure table lists "Token bucket", "Leaky bucket", "Fixed window", "Sliding window". |
| 13 | Table: Fixed window | Simple; bursts at window edges | 3 | PASS | "Simple to implement, but admits back-to-back bursts at window boundaries." |
| 14 | Table: Sliding window | "Fixes" the edge burst, keeps more data | 3 | FAIL→fixed | The source says "Smooths", not "Fixes". Now "Smooths the burst at the window edge, but keeps more data." Quote: "Smooths the window-boundary problem of fixed windows at the cost of more state." |
| 15 | Table: Token bucket | Short bursts, then steady refill | 3 | PASS | "Supports bursts up to a configured size and enforces a steady refill rate." |
| 16 | Table: Leaky bucket | Constant rate | 3 | PASS | "Emits at a constant rate." |
| 17 | In plain words | Local counters undercount; Redis counter sees all, adds latency | 3 | PASS | "Local counters are fast but undercount when the same caller reaches multiple replicas. A centralized counter in a shared store like Redis sees every request but adds latency to each decision." |
| 18 | In plain words | Redis rate limiter: increment a counter with an expiry | 4 | PASS | "these counters are always incremented setting an expire of 10 seconds so that they'll be removed by Redis automatically" |
| 19 | A real-life example | OTP rules and the 429 response | – | PASS | Tutorial example. The header format matches RFC 9110 (delay-seconds). |
| 20 | Common mistakes | Many devices behind NAT share one IP | 7 | PASS | "Use IP with NAT support to handle situations such as requests under NAT sharing the same IP address." |
| 21 | Common mistakes | OTP and verify endpoints are frequent brute-force targets | 6 | PASS | "One-time password (OTP) and verification endpoints … are frequent targets for brute force attacks." |
| 22 | Common mistakes | Count only failed attempts | 6 | PASS | "Count only requests that return error responses (such as 401 or 403) to avoid rate limiting legitimate users who submit valid codes." |
| 23 | Common mistakes | Without `Retry-After`, the client must guess | 3 | PASS | "Include a Retry-After HTTP header so that the client can pick a retry strategy. Return enough context for the caller to retry deliberately instead of guessing." |
| 24 | Common mistakes | Local counters: "the real limit grows with the number of servers" | 3 | FAIL→fixed | Stronger than the source. Now "so the servers undercount, and a client that reaches many servers can go over the limit." Quote: "Local counters are fast but undercount when the same caller reaches multiple replicas." |
| 25 | Common mistakes | Admin and internal endpoints | – | PASS | Tutorial advice. No cite needed. |
| 26 | What a tester can check | Test tips | – | PASS | Tutorial advice callout. No cite needed. |
| 27 | Key words | Definitions | – | PASS | Each definition agrees with the cited text above. |

## Fixes

1. "stop" → "protect" for brute-force protection (row 3).
2. Added cites S3 and S7 to the "usually answers with 429" sentence, and added the Cloudflare default (row 6).
3. "Fixes" → "Smooths" for the sliding window (row 14).
4. Reworded the local-counter mistake to match S3 (row 24).
5. Notes: new claims 16 (S3) and 17 (S7).

Open FAILs: 0
