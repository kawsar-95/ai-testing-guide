# Fact-check: Circuit Breaker (`content/course/circuit-breaker.mdx`)

Reviewer: an agent that did not write the page. Sources fetched 2026-10-22 with curl into `/tmp/claude-1000/fc4-circuit-breaker/` (S1 = Azure Architecture Center, n=1; S2 = AWS Prescriptive Guidance, n=2). Fetched text was treated as data. The research-note quotes were not trusted; each quote below comes from the fetched page.

Topic checks: the three states and all four transitions match S1 (see rows 17 to 23). S2 has no word "half" (checked with grep, 0 hits), so the page is right to say that S2 does not name Half-Open. Every AWS-attributed claim is on the S2 page. No fixed threshold or time-out number is given; "a few seconds" and "a few minutes" are S1's own examples.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a circuit breaker "stops this chain before it grows" (cascade of slow pages) | none | FAIL | Uncited and unhedged, and the lede is not marked as the tutorial's own. S1 says the pattern "helps prevent" and "might lead to cascading failures". Write "helps stop" and mark it as an example. |
| 2 | Blocks access to a remote service for a while after failures reach a threshold | 1 | PASS | "Temporarily block access to a remote service or resource after failures reach a threshold" |
| 3 | This avoids repeated retries of an operation likely to fail | 1 | PASS | "instead of repeatedly retrying an operation that's likely to fail" |
| 4 | It gives the failing service room to recover | 1 | PASS | "lets the failing service recover" |
| 5 | AWS: the pattern also detects when the called service works again | 2 | PASS | "The pattern is also used to detect when the callee service is functional again." |
| 6 | "The name comes from the electrical breaker" | 2 | FAIL | S2 says only "Circuit breaker objects work like electrical circuit breakers". It gives no origin of the name. Write "works like an electrical breaker". |
| 7 | The breaker object sits between caller and called service and trips if the called service is unavailable | 2 | PASS | "the circuit breaker object is situated between the caller and the callee service, and trips if the callee is unavailable." |
| 8 | Transient faults (for example a slow network) typically fix themselves in a short time; a retry can handle them | 1 | PASS | "These faults typically correct themselves after a short period of time. ... use a strategy, such as the Retry pattern." |
| 9 | Other faults last longer, up to a full outage; then the app should not keep retrying | 1 | PASS | "an application shouldn't continually retry an operation that's unlikely to succeed." |
| 10 | A time-out alone: waiting requests can hold memory, threads, DB connections, and can exhaust resources of unrelated parts | 1 | PASS | "These blocked requests might hold critical system resources, such as memory, threads, and database connections. This problem can exhaust resources, which might fail other unrelated parts of the system" |
| 11 | Repeated retries can add network load and use up database threads | 2 | PASS | "these retries might result in network contention and database thread pool consumption." |
| 12 | Azure case: stop cascading failures by not sending calls likely to fail | 1 | PASS | "prevent cascading failures by stopping excessive remote service calls ... if these operations are likely to fail" |
| 13 | Azure case: protect service-level objectives from slow dependencies | 1 | PASS | "protect against slow dependencies so that you can maintain your service-level objectives" |
| 14 | Azure case: "You must manage intermittent connection problems" | 1 | FAIL | S1 says "You want to manage intermittent connectivity problems". "must" is stronger than "want to". |
| 15 | AWS signs: a call is most likely to fail, or a synchronous call goes to a callee that is unavailable or slow | 2 | PASS | "The caller service makes a call that is most likely going to fail." / "makes a synchronous call, but the callee service isn't available or exhibits high latency." |
| 16 | The breaker works as a proxy, watches recent failures, decides to pass a call or fail at once; can be a state machine with three states | 1 | PASS | "A circuit breaker acts as a proxy for operations that might fail. The proxy should monitor the number of recent failures ..." / "You can implement the proxy as a state machine" |
| 17 | Closed to Open when failures pass the threshold in the time period; Open starts a time-out timer | 1 | PASS | "If the number of recent failures exceeds a specified threshold within a given time period, the proxy is placed into the Open state and starts a time-out timer." |
| 18 | Open to Half-Open when the timer ends | 1 | PASS | "When the timer expires, the proxy is placed into the Half-Open state." |
| 19 | Half-Open to Closed when enough trial calls succeed | 1 | PASS | "If these requests are successful, the circuit breaker assumes that the fault that caused the failure is fixed, and the circuit breaker switches to the Closed state." |
| 20 | Half-Open to Open when a trial call fails, timer restarts | 1 | PASS | "If any request fails ... it reverts to the Open state. It restarts the time-out timer" |
| 21 | Closed: calls go to the operation; the proxy counts recent failures | 1 | PASS | "The request from the application is routed to the operation. The proxy maintains a count of the number of recent failures." |
| 22 | Open: each call fails at once with an exception | 1 | PASS | "The request from the application fails immediately and an exception is returned to the application." |
| 23 | Half-Open: a limited number of calls pass | 1 | PASS | "A limited number of requests from the application are allowed to pass through" |
| 24 | Half-Open helps avoid a flood of requests to a recovering service | 1 | PASS | "The Half-Open state helps prevent a recovering service from suddenly being flooded with requests." |
| 25 | S2 does not name Half-Open | 2 | PASS | grep for "half" in S2: 0 hits. |
| 26 | S2 idea: after the circuit opens, the breaker tries calls from time to time and closes the circuit when they succeed | 2 | PASS | "The circuit breaker object periodically tries to see if the calls to the payment service are successful. When the call to payment service succeeds, the circuit is closed" |
| 27 | Closed counter is time based and resets at intervals | 1 | PASS | "The failure counter for the Closed state is time based. It automatically resets at periodic intervals." |
| 28 | "So a few random failures do not open the breaker" | 1 | FAIL | S1 hedges: "This design helps prevent the circuit breaker from entering the Open state if it experiences occasional failures." The page states a guarantee. Write "helps keep a few occasional failures from opening the breaker". |
| 29 | Half-Open: returns to Closed after a set number of successful calls in a row; one failure opens it at once | 1 | PASS | "reverts to the Closed state after a specified number of successful, consecutive operation invocations. If any invocation fails, the circuit breaker enters the Open state immediately" |
| 30 | Time-out can grow: first Open period can be a few seconds, a later one a few minutes (an example, not a fixed value) | 1 | PASS | "You can place the circuit breaker in the Open state for a few seconds initially. If the failure isn't resolved, increase the time-out to a few minutes and adjust accordingly." |
| 31 | The source gives no default numbers; says to match settings to the likely recovery of the protected operation | 1 | PASS | "You should configure the circuit breaker to match the likely recovery pattern of the operation that it protects." No default number on the page. |
| 32 | Open period too long: errors after the fault is fixed | 1 | PASS | "if the circuit breaker remains in the Open state for a long period, it can raise exceptions even if the reason for the failure is resolved." |
| 33 | Moving to Half-Open too fast: can fluctuate and slow responses | 1 | PASS | "a circuit breaker can fluctuate and reduce the response times of applications if it switches from the Open state to the Half-Open state too quickly." |
| 34 | In Open, the breaker can return a default value meaningful to the application, not an exception | 1 | PASS | "the Open state can return a default value that's meaningful to the application." |
| 35 | An administrator should be able to open or close a circuit by hand | 1, 2 | PASS | S2: "System administrators should have the ability to open or close a circuit." S1: "provide a manual reset option that enables an administrator to close a circuit breaker" and "an administrator can force a circuit breaker into the Open state". |
| 36 | AWS: with many threads the first failed call sets the expiration time; later calls should not keep moving it | 2 | PASS | "the first call that failed defines the expiration timeout value. Your implementation should ensure that subsequent calls do not move the expiration timeout endlessly." |
| 37 | Retry expects the operation to succeed in the end; the breaker stops an operation likely to fail | 1 | PASS | "The Retry pattern enables an application to retry an operation with the expectation that it eventually succeeds. The Circuit Breaker pattern prevents an application from performing an operation that's likely to fail." |
| 38 | A retry with backoff handles transient errors | 2 | PASS | "(The transient errors can be handled by using the retry with backoff pattern.)" Weak hedge loss ("can be handled"); accepted. |
| 39 | Retry through a breaker; retry logic should stop when the breaker shows the fault is not transient | 1 | PASS | "stop retry attempts if the circuit breaker indicates that a fault isn't transient." |
| 40 | AWS sample: retries with exponential backoff a set number of times; if all fail it records an expiry time; later calls fail at once until that time passes | 2 | PASS | "the application retries with exponential backoff for a defined number of times." / "inserts a record in the CircuitStatus table ... with the an ExpiryTimeStamp" / "If CircuitStatus contains an unexpired record for the callee, the circuit is open." |
| 41 | Might not suit: local private resources such as in-memory data | 1 | PASS | "local private resources in an application, such as in-memory data structures" |
| 42 | "The breaker only adds overhead" (local resources) | 1 | FAIL | S1: "a circuit breaker adds overhead to your system". The word "only" is not in S1. Write "adds overhead". |
| 43 | Might not suit: as a replacement for exception handling in business logic | 1 | PASS | "a substitute for handling exceptions in the business logic of your applications." |
| 44 | Might not suit: well-known retry is enough and dependencies handle retries; breaker may add needless complexity | 1 | PASS | "Well-known retry algorithms are sufficient and your dependencies are designed to handle retry mechanisms ... might add unnecessary complexity" |
| 45 | Might not suit: a wait for the reset would cause unacceptable delay | 1 | PASS | "Waiting for a circuit breaker to reset might introduce unacceptable delays." The lead-in "might not suit" keeps the hedge. |
| 46 | Might not suit: message-driven or event-driven systems; failed messages often go to a dead letter queue | 1 | PASS | "they often route failed messages to a dead letter queue for manual or deferred processing." |
| 47 | Might not suit: platform already handles recovery, e.g. health checks in a load balancer or service mesh | 1 | PASS | "health checks in global load balancers or service meshes". The page drops "global"; accepted as minor. |
| 48 | Common mistake: retrying for a long fault with no breaker; blocked requests can use up threads and connections | 1 | PASS | Same quote as row 10. S1 ties it to time-out blocking, and S2 (row 11) ties it to retries. Optional: add Cite 2. |
| 49 | Common mistake: no plan for the exception; degrade, call an alternative, or ask the user to try later | 1 | PASS | "temporarily degrade its functionality, invoke an alternative operation ... or report the exception to the user and ask them to try again later." |
| 50 | Common mistake: too long a time-out; a thread can stay blocked long before the breaker sees the failure | 1 | PASS | "If the time-out is too long, a thread that runs a circuit breaker might be blocked for an extended period before the circuit breaker indicates that the operation failed." |
| 51 | Common mistake: one breaker for unrelated providers; a problem in one shard can block calls to a healthy shard | 1 | PASS | "access to other shards might be blocked even though it's likely to succeed." |
| 52 | Key words: Circuit breaker = a proxy between caller and called service that stops calls likely to fail | 1, 2 | PASS | S1 "acts as a proxy"; S2 "situated between the caller and the callee service". |
| 53 | Key words: Threshold = number of failures in a time period that opens the breaker | 1 | PASS | "The failure threshold triggers the Open state only when a specified number of failures occur during a specified interval." |
| 54 | Key words: Time-out timer = the wait in Open before the breaker tries again | 1 | PASS | "starts a time-out timer. When the timer expires, the proxy is placed into the Half-Open state." |
| 55 | Key words: Expiration timeout (AWS) = how long the circuit stays tripped before calls are routed again | 2 | PASS | "the period of time the circuit remains tripped before calls are routed again to check for service availability." |
| 56 | Key words: Cascading failure = a failure in one part that spreads to other parts | 1 | PASS | S1 uses the term without a formal definition: "failure in one part of the system might lead to cascading failures". Meaning is consistent. |
| 57 | Key words: Transient fault = a short fault that typically corrects itself | 1 | PASS | "These faults typically correct themselves after a short period of time." |
| 58 | Key words: Retry = trying a failed operation again hoping it succeeds | 1 | PASS | "retry an operation with the expectation that it eventually succeeds" |

Not checked as claims (marked as the tutorial's own): the drawing ("This drawing is the tutorial's own picture of the Azure description"; its arrows match rows 17 to 20), the real-life example ("This example is the tutorial's own"; its flow is consistent with S1), and the tip callout (marked, no `<Cite>`). The lede (row 1) is the one tutorial text that is not marked.

## Structure check

| Check | Result |
|---|---|
| `page.sources` entries are https and each is cited | PASS: 2 sources, both https, both cited many times |
| Every `<Cite n>` has a source | PASS: only n=1 and n=2 |
| No run of 8 or more words copied from a source | PASS: a script over the page text (no Cite tags) against both fetched pages found 0 runs of 8 words. The longest shared runs are 6 words, all in allowed names or technical terms ("memory threads and database connections", "tripped before calls are routed again" in the AWS definition). |
| Required sections in order, Key words last | PASS: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words. The extra `##` sections (How it works, Thresholds and time-outs, Circuit breaker and retry, When not to use it) sit between the first two and the example. `tests/course.test.ts` filters the required headings, so they pass. Only "How it works" is in the optional list of CLAUDE.md. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Circuit Breaker" | PASS |
| No blog, forum, Wikipedia, AI summary, systemdesignbangla.com | PASS: Microsoft Learn and AWS Prescriptive Guidance |
| Prose 700 to 1100 words | PASS: about 1030 words by a count of all text outside the export block, code, tables, and Cite tags (headings and the tip callout included). Without the tip callout and headings it is about 930. |
| Security page | Not applicable |

## Summary

58 claims, 5 FAILs: rows 1, 6, 14, 28, 42. All are small wording fixes (a dropped hedge, "must" for "want to", "only", an unsupported name origin, and an unmarked uncited lede claim).

## Re-check (after the writer fixed the 5 FAILs)

| Row | New text | Cite | Verdict | Reason |
|---|---|---|---|---|
| 1 | "A circuit breaker helps prevent this kind of cascading failure" | 1 | PASS | Hedged ("helps prevent") and cited. S1: "a failure in one part of the system might lead to cascading failures" and "helps prevent an application from repeatedly trying to run an operation that's likely to fail". The checkout scenario is an illustration, not a source claim. |
| 6 | "The AWS guidance says breaker objects work like electrical circuit breakers" and "sits between the caller and the called service, and it trips if the called service is unavailable" | 2 | PASS | S2: "Circuit breaker objects work like electrical circuit breakers" and "the circuit breaker object is situated between the caller and the callee service, and trips if the callee is unavailable." No name-origin claim now. |
| 14 | "You want to manage intermittent connection problems." | 1 (list lead-in) | PASS | S1: "You want to manage intermittent connectivity problems". |
| 28 | "This design helps prevent a few random failures from opening the breaker." | 1 | PASS | S1: "This design helps prevent the circuit breaker from entering the Open state if it experiences occasional failures." The hedge is back. |
| 42 | "The breaker adds overhead there." | 1 | PASS | S1: "a circuit breaker adds overhead to your system". "only" is gone. |

Copy check on the changed text and the whole page: 0 runs of 8 words. The new 6-word runs ("breaker objects work like electrical circuit") come from the AWS sentence about electrical breakers, which is a short factual phrase and below the limit. Word count after the fixes: about 1047 by the full count (headings and tip callout included), still within 700 to 1100; without headings and tip, about 950. No other text changed in the diff areas checked; the cites n=1 and n=2 still have sources and both sources are still cited.

Open FAILs: 0
