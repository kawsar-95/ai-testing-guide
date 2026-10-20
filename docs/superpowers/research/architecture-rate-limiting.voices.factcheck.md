# Voice fact-check: Rate Limiting (round 1, 2026-10-20)

Page: `content/architecture/rate-limiting.mdx`. I did not write this page.

Method: I read the 5 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the same section's Technical panel cites the same `n`, and that the same source supports the same claim there and in `architecture-rate-limiting.factcheck.md` (`Open FAILs: 0`). I read the Bangla text for meaning and for natural use, and I checked that common technical terms stay in English and that the text uses "আপনি" forms. The "Key words" section has no voices. The numbers in the example (3, 5, 10, 180) and the code block text match in both voice panels.

Checks on items that could look new:

- Layman, In plain words: "such as Redis" for the shared counter. The Technical text names Redis as the example of a shared counter. PASS.
- Layman, In plain words: the cite [1] sits on "The HTTP standard does not fix this choice". In the Technical panel, [1] follows the next sentence, and RFC 6585 says that the specification does not define how the origin server identifies the user. PASS.
- Layman, Common mistakes: "Attackers often try to guess codes" for "frequent brute-force targets". The Key words table defines brute force as trying many guesses. The meaning does not change. PASS.
- Bangla, When you need it: "যেকোনো একটি অবস্থা ... মিলে গেলে" (if any one case matches) restates the heading and the list of independent cases. PASS.
- Bangla, A real-life example: "ধরুন" (suppose) opens the example. It adds no fact. PASS.

Language notes:

- The Bangla text mixes "গোনার" (In plain words, the algorithms sentence) with "গুনলে" (the next sentence) and "গোনে" (Common mistakes). Use one spelling. The meaning is clear, so this is not a FAIL.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | A rate limit has two numbers: a time window and the number of requests a client can send in it [5] | "A rate limit has two numbers: a time window (the period) and the number of requests that the client can send in that period [5]" | PASS | – |
| 2 | In plain words | Layman | "3 requests in 5 minutes" is one rate limit | ""3 requests in 5 minutes" is one rate limit." | PASS | – |
| 3 | In plain words | Layman | The system must decide who the client is: user, IP address, API key, or phone number | "The system must decide who "the client" is. It can count by user, IP address, API key, or phone number." | PASS | – |
| 4 | In plain words | Layman | The HTTP standard does not fix this choice [1] | "The HTTP standard does not fix this choice. A server can identify the user by login details or a cookie, for example [1]." | PASS (the [1] moves to the sentence it supports; RFC 6585 says the specification does not define how the origin server identifies the user. The login and cookie example is omitted, which is not a FAIL) | – |
| 5 | In plain words | Layman | Rate limits protect a login page from brute-force attacks and cap the API calls of one client [5] | "They protect a login page from brute-force attacks and cap how many API calls one client can make [5]" | PASS | – |
| 6 | In plain words | Layman | They stop one user from taking all the resources [3] | "They also stop one user from taking all the resources [3]" | PASS | – |
| 7 | In plain words | Layman | They save money too: each OTP SMS or AI call costs the company | "And they protect money: each OTP SMS or each AI call costs the company." | PASS | – |
| 8 | In plain words | Layman | A client over the limit usually gets HTTP 429 Too Many Requests [3] | "the server usually answers with HTTP 429 Too Many Requests [3]" | PASS | – |
| 9 | In plain words | Layman | A Retry-After header can tell the client how long to wait [1] | "The response may include a Retry-After header that says how long to wait [1]" | PASS | – |
| 10 | In plain words | Layman | Retry-After: 120 means wait 2 minutes [2] | "Retry-After: 120 means "wait 2 minutes" [2]" | PASS | – |
| 11 | In plain words | Layman | A cache must not store a 429 response [1] | "A cache must not store a 429 response [1]." | PASS | – |
| 12 | In plain words | Layman | There are four common ways to count [3] | "There are four common ways to count [3]" | PASS (the four names and the table are omitted, which is not a FAIL) | – |
| 13 | In plain words | Layman | Keep the counter in one shared place, such as Redis | "The counter must live in one shared place. ... A shared counter in Redis sees every request" | PASS (Redis is the only example in the Technical text) | – |
| 14 | In plain words | Layman | If each server counts alone, a client that reaches many servers gets more than the limit [3] | "If each server counts in its own memory, a client that reaches many servers gets more requests than the limit." | PASS (no cite on the Technical sentence; the [3] on the next sentence is the same source, and architecture-rate-limiting.factcheck.md row 17 passes it: "Local counters ... undercount when the same caller reaches multiple replicas") | – |
| 15 | In plain words | Bangla | A rate limit has two numbers: a time window, and how many requests a client can send in that time [5] | "A rate limit has two numbers: a time window (the period) and the number of requests that the client can send in that period [5]" | PASS | OK |
| 16 | In plain words | Bangla | "3 requests in 5 minutes" is one rate limit | ""3 requests in 5 minutes" is one rate limit." | PASS | OK |
| 17 | In plain words | Bangla | The system must decide who the client is: user, IP address, API key, or phone number | "The system must decide who "the client" is. It can count by user, IP address, API key, or phone number." | PASS | OK |
| 18 | In plain words | Bangla | The HTTP standard does not fix this choice | "The HTTP standard does not fix this choice." | PASS | OK |
| 19 | In plain words | Bangla | For example, a server can identify the user by login details or a cookie [1] | "A server can identify the user by login details or a cookie, for example [1]." | PASS | OK |
| 20 | In plain words | Bangla | Rate limits protect a login page from brute-force attacks and set a cap on one client's API calls [5] | "They protect a login page from brute-force attacks and cap how many API calls one client can make [5]" | PASS | OK |
| 21 | In plain words | Bangla | It also stops one user from taking all the resources [3] | "They also stop one user from taking all the resources [3]" | PASS | OK |
| 22 | In plain words | Bangla | It saves money too, because each OTP SMS or AI call costs the company | "And they protect money: each OTP SMS or each AI call costs the company." | PASS | OK |
| 23 | In plain words | Bangla | A client over the limit usually gets HTTP 429 Too Many Requests [3] | "the server usually answers with HTTP 429 Too Many Requests [3]" | PASS | OK |
| 24 | In plain words | Bangla | When a Cloudflare rate limiting rule blocks a request, the default response code is 429 [7] | "When a Cloudflare rate limiting rule blocks a request, the default response code is 429 [7]." | PASS | OK |
| 25 | In plain words | Bangla | The response can have a Retry-After header that says how long to wait [1] | "The response may include a Retry-After header that says how long to wait [1]." | PASS | OK |
| 26 | In plain words | Bangla | Its value is a number of seconds or a date | "Its value is a number of seconds or a date." | PASS | OK |
| 27 | In plain words | Bangla | Retry-After: 120 means wait 2 minutes [2] | "Retry-After: 120 means "wait 2 minutes" [2]." | PASS | OK ("অপেক্ষা করুন" is polite) |
| 28 | In plain words | Bangla | A cache cannot store a 429 response [1] | "A cache must not store a 429 response [1]." | PASS ("পারবে না" keeps the rule) | OK |
| 29 | In plain words | Bangla | Four common ways to count: fixed window, sliding window, token bucket, leaky bucket [3] | "There are four common ways to count [3]: table rows Fixed window, Sliding window, Token bucket, Leaky bucket" | PASS (same four names as the table) | OK (spelling "গোনার" here, "গুনলে" and "গোনে" elsewhere; see the notes) |
| 30 | In plain words | Bangla | The counter must be in one shared place | "The counter must live in one shared place." | PASS | OK |
| 31 | In plain words | Bangla | If each server counts in its own memory, a client that reaches many servers can send more requests than the limit | "If each server counts in its own memory, a client that reaches many servers gets more requests than the limit." | PASS | OK |
| 32 | In plain words | Bangla | A shared counter in Redis sees every request, but each check takes a little time [3] | "A shared counter in Redis sees every request, but each check takes a little time [3]." | PASS | OK |
| 33 | In plain words | Bangla | The Redis docs show a classic rate limiter: increase a counter for each request and give it an expiry, so Redis removes it after the window [4] | "The Redis docs show a classic rate limiter: increase a counter for each request, and give the counter an expiry so that Redis removes it after the window [4]." | PASS | OK |
| 34 | When you need it | Layman | You need rate limiting in these cases (intro line) | Heading "When you need it" and the list | PASS (restates the heading) | – |
| 35 | When you need it | Layman | You have login, OTP, or password reset endpoints | "You have login, OTP, or password reset endpoints." | PASS | – |
| 36 | When you need it | Layman | You have endpoints that start a payment or receive a payment callback | "You have payment start or payment callback endpoints." | PASS | – |
| 37 | When you need it | Layman | Search, file upload, AI calls, or report generation cost a lot | "Search, file upload, AI calls, or report generation costs a lot." | PASS | – |
| 38 | When you need it | Layman | You give the public access to an API | "You expose a public API." | PASS | – |
| 39 | When you need it | Layman | You pay for each SMS or email | "You pay for each SMS or email." | PASS | – |
| 40 | When you need it | Bangla | If any one of the cases below matches your system, you need rate limiting | Heading "When you need it" and the list | PASS (restates the heading) | OK |
| 41 | When you need it | Bangla | You have login, OTP, or password reset endpoints | "You have login, OTP, or password reset endpoints." | PASS | OK |
| 42 | When you need it | Bangla | You have an endpoint that starts a payment or a payment callback endpoint | "You have payment start or payment callback endpoints." | PASS | OK |
| 43 | When you need it | Bangla | Search, file upload, AI call, or report generation costs a lot | "Search, file upload, AI calls, or report generation costs a lot." | PASS | OK |
| 44 | When you need it | Bangla | You offer a public API | "You expose a public API." | PASS | OK |
| 45 | When you need it | Bangla | You pay for each SMS or email | "You pay for each SMS or email." | PASS | OK |
| 46 | A real-life example | Layman | An LMS has OTP login; the team sets two rules | "An LMS has OTP login. The team sets two rules:" | PASS | – |
| 47 | A real-life example | Layman | At most 3 OTP requests from the same phone number in 5 minutes | "At most 3 OTP requests from the same phone number in 5 minutes." | PASS | – |
| 48 | A real-life example | Layman | At most 10 OTP requests from the same IP address in 10 minutes | "At most 10 OTP requests from the same IP address in 10 minutes." | PASS | – |
| 49 | A real-life example | Layman | The fourth request from one phone gets HTTP/1.1 429 Too Many Requests | "The fourth request from one phone gets this answer: HTTP/1.1 429 Too Many Requests" | PASS | – |
| 50 | A real-life example | Layman | The response has the header Retry-After: 180 | "Retry-After: 180" | PASS | – |
| 51 | A real-life example | Layman | The JSON body has the error too_many_otp_requests and "retryAfterSeconds": 180 | "{ "error": "too_many_otp_requests", "retryAfterSeconds": 180 }" | PASS | – |
| 52 | A real-life example | Layman | The two rules cut SMS cost, spam, and brute-force attempts | "The two rules cut SMS cost, spam, and brute-force attempts." | PASS | – |
| 53 | A real-life example | Bangla | Suppose an LMS has OTP login; the team sets two rules | "An LMS has OTP login. The team sets two rules:" | PASS ("ধরুন" opens the example; no new fact) | OK |
| 54 | A real-life example | Bangla | At most 3 OTP requests from the same phone number in 5 minutes | "At most 3 OTP requests from the same phone number in 5 minutes." | PASS | OK |
| 55 | A real-life example | Bangla | At most 10 OTP requests from the same IP address in 10 minutes | "At most 10 OTP requests from the same IP address in 10 minutes." | PASS | OK |
| 56 | A real-life example | Bangla | The fourth request from one phone gets HTTP/1.1 429 Too Many Requests | "The fourth request from one phone gets this answer: HTTP/1.1 429 Too Many Requests" | PASS | OK |
| 57 | A real-life example | Bangla | The response has the header Retry-After: 180 | "Retry-After: 180" | PASS | OK |
| 58 | A real-life example | Bangla | The JSON body has the error too_many_otp_requests and "retryAfterSeconds": 180 | "{ "error": "too_many_otp_requests", "retryAfterSeconds": 180 }" | PASS | OK |
| 59 | A real-life example | Bangla | The two rules reduce SMS cost, spam, and brute-force attempts | "The two rules cut SMS cost, spam, and brute-force attempts." | PASS | OK |
| 60 | Common mistakes | Layman | Only IP-based limits: many devices behind NAT can share one IP address [7] | "Many devices behind NAT can share one IP address [7]." | PASS | – |
| 61 | Common mistakes | Layman | A school or office network often works this way, so one strict IP limit can block a whole class | "A school or an office network often works this way, so one strict IP limit can block a whole class." | PASS | – |
| 62 | Common mistakes | Layman | Use IP limits together with user or phone limits | "Combine IP limits with user or phone limits." | PASS | – |
| 63 | Common mistakes | Layman | Same limit for every endpoint: attackers often try to guess codes on OTP and verify endpoints [6] | "OTP and verify endpoints are frequent brute-force targets [6]." | PASS ("attackers guess codes" is the Key words meaning of brute force: "Trying many guesses, such as every OTP code"; not a new fact) | note: "Attackers" is a rewording, not a new claim |
| 64 | Common mistakes | Layman | Give these endpoints stricter limits | "Give them stricter limits." | PASS | – |
| 65 | Common mistakes | Layman | You can count only failed attempts, so real users with valid codes are not blocked [6] | "One option is to count only failed attempts, so real users with valid codes are not blocked [6]." | PASS | – |
| 66 | Common mistakes | Layman | No wait time in the 429: without Retry-After the client must guess when to try again [3] | "Without Retry-After, the client cannot pick a retry plan and must guess [3]." | PASS | – |
| 67 | Common mistakes | Layman | Counters in local memory: each server counts on its own, so the total count is too low, and a client that reaches many servers can go over the limit [3] | "Each server counts on its own, so the servers undercount, and a client that reaches many servers can go over the limit [3]." | PASS | – |
| 68 | Common mistakes | Layman | Admin and internal endpoints: people can abuse an admin login or an internal report API too | "An admin login or an internal report API can be abused too." | PASS | – |
| 69 | Common mistakes | Bangla | Only IP-based limits: many devices behind NAT can share one IP address [7] | "Many devices behind NAT can share one IP address [7]." | PASS | OK |
| 70 | Common mistakes | Bangla | A school or office network often works this way, so one strict IP limit can block a whole class | "A school or an office network often works this way, so one strict IP limit can block a whole class." | PASS | OK |
| 71 | Common mistakes | Bangla | Use IP limits together with user or phone limits | "Combine IP limits with user or phone limits." | PASS | OK |
| 72 | Common mistakes | Bangla | OTP and verify endpoints are frequent brute-force targets [6] | "OTP and verify endpoints are frequent brute-force targets [6]." | PASS | OK |
| 73 | Common mistakes | Bangla | Give them stricter limits | "Give them stricter limits." | PASS | OK |
| 74 | Common mistakes | Bangla | One option is to count only failed attempts, so real users with valid codes are not blocked [6] | "One option is to count only failed attempts, so real users with valid codes are not blocked [6]." | PASS | OK |
| 75 | Common mistakes | Bangla | Without Retry-After, the client cannot plan a retry and must guess [3] | "Without Retry-After, the client cannot pick a retry plan and must guess [3]." | PASS | OK |
| 76 | Common mistakes | Bangla | Each server counts on its own, so the servers count too low, and a client that reaches many servers can go over the limit [3] | "Each server counts on its own, so the servers undercount, and a client that reaches many servers can go over the limit [3]." | PASS | OK ("কম গোনে" = undercount; see the spelling note) |
| 77 | Common mistakes | Bangla | An admin login or an internal report API can be abused too | "An admin login or an internal report API can be abused too." | PASS | OK |
| 78 | What a tester can check | Layman | These test ideas are the tutorial's own advice | Callout titled "Tutorial advice" | PASS (restates the callout title; no cites) | – |
| 79 | What a tester can check | Layman | Edge of the limit: send exactly the limit, then one more request; only the extra request gets 429 | "Send exactly the limit, then one more. Check that only the extra request gets 429." | PASS | – |
| 80 | What a tester can check | Layman | Wait time: look at Retry-After and any body field, wait that long, then the next request passes | "Check the Retry-After header (and any body field). Wait that long, then check that the next request passes." | PASS | – |
| 81 | What a tester can check | Layman | Many servers: send requests through the load balancer so they reach different servers; the total limit still holds | "Send requests through the load balancer so that they reach different servers. Check that the limit still holds in total." | PASS | – |
| 82 | What a tester can check | Layman | Different keys: one phone from many IPs, many phones from one IP; each rule works on its own | "Use one phone from many IPs, and many phones from one IP. Check that each rule fires on its own." | PASS | – |
| 83 | What a tester can check | Layman | Window edges: for a fixed window, send a burst just before and just after the window resets | "For a fixed window, send a burst just before and just after the window resets." | PASS | – |
| 84 | What a tester can check | Layman | Sensitive endpoints: OTP, password reset, and payment endpoints have stricter limits than read-only pages | "Check that OTP, password reset, and payment endpoints have stricter limits than read-only pages." | PASS | – |
| 85 | What a tester can check | Bangla | These test ideas are the tutorial's own advice | Callout titled "Tutorial advice" | PASS | OK |
| 86 | What a tester can check | Bangla | Edge of the limit: send exactly the limit, then one more; only the extra request gets 429 | "Send exactly the limit, then one more. Check that only the extra request gets 429." | PASS | OK |
| 87 | What a tester can check | Bangla | Wait time: check Retry-After (and any body field), wait that long, check the next request passes | "Check the Retry-After header (and any body field). Wait that long, then check that the next request passes." | PASS | OK |
| 88 | What a tester can check | Bangla | Many servers: send requests through the load balancer to reach different servers; the limit still holds in total | "Send requests through the load balancer so that they reach different servers. Check that the limit still holds in total." | PASS | OK |
| 89 | What a tester can check | Bangla | Different keys: one phone from many IPs, many phones from one IP; each rule works on its own | "Use one phone from many IPs, and many phones from one IP. Check that each rule fires on its own." | PASS | OK |
| 90 | What a tester can check | Bangla | Window edges: for a fixed window, send a burst just before and just after the reset | "For a fixed window, send a burst just before and just after the window resets." | PASS | OK ("একঝাঁক request" is natural for a burst) |
| 91 | What a tester can check | Bangla | Sensitive endpoints: OTP, password reset, payment endpoints have stricter limits than read-only pages | "Check that OTP, password reset, and payment endpoints have stricter limits than read-only pages." | PASS | OK |

Open FAILs: 0
