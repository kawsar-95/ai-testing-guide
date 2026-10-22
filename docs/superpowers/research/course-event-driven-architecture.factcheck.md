# Fact-check: Event-Driven Architecture

Page: `content/course/event-driven-architecture.mdx`. Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc3-event-driven-architecture/` (Azure page last updated 2026-03-07; AWS page at the cited URL). Cite 1 = Azure, cite 2 = AWS.

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | An event is a change in state, such as an item put in a cart | 2 | PASS | "An event is a change in state, or an update, like an item being placed in a shopping cart" |
| 2 | An event can carry the data, or be only an identifier such as an order-shipped notice | 2 | PASS | "Events can either carry the state (the item purchased, its price, and a delivery address) or events can be identifiers (a notification that an order was shipped)." |
| 3 | Three parts: producer, router/broker/channel, consumer | 1, 2 | PASS | "event producers ... event consumers ... event channels (often implemented as event brokers or ingestion services)"; AWS: "event producers, event routers, and event consumers" |
| 4 | AWS says the router filters events and pushes them to consumers | 2 | PASS | "A producer publishes an event to the router, which filters and pushes the events to consumers." |
| 5 | Events arrive in near real time, consumers react at once | 1 | PASS | "Events are delivered in near real time, so consumers can respond immediately" |
| 6 | Producer does not know which consumers listen; consumers decoupled from each other | 1 | PASS | "a producer doesn't know which consumers are listening. Consumers are also decoupled from each other" |
| 7 | Services know only the router; one can fail while others run | 2 | PASS | "they are only aware of the event router, not each other ... if one service has a failure, the rest will keep running" |
| 8 | Producers and consumers can be scaled, updated, deployed on their own | 2 | PASS | "which allows them to be scaled, updated, and deployed independently" |
| 9 | Azure's use cases (same events by several subsystems; real time; patterns over a window; high volume as IoT; decoupling) | 1 | PASS | "Multiple subsystems must process the same events." / "Complex event processing, such as pattern matching or aggregation over time windows" / "High volume and high velocity of data ... such as with IoT" / "decouple producers and consumers for independent scalability and reliability goals" |
| 10 | AWS uses: replication across accounts and regions, state monitoring and alerts, fanout, integration of different stacks | 2 | PASS | "Cross-account, cross-region data replication" / "Resource state monitoring and alerting" / "Fanout and parallel processing" / "If you have systems running on different stacks" |
| 11 | May not fit: simple synchronous calls suffice | 1 | PASS | "simple request-response workflows where synchronous calls meet your latency and throughput requirements" |
| 12 | May not fit: transaction needs strong consistency across services | 1 | PASS | "Business transactions require strong consistency across services." |
| 13 | May not fit: team has no experience with distributed async systems | 1 | PASS | "Your team doesn't have experience operating distributed asynchronous systems." |
| 14 | An EDA can use pub/sub or event streaming | 1 | PASS | "can use a publish-subscribe model or an event stream model" |
| 15 | Pub/sub: infrastructure tracks subscriptions, sends event to every subscriber; no durable log; new subscribers see no past events | 1 | PASS | "tracks subscriptions. When an event is published, it sends the event to each subscriber. ... it isn't stored in a durable log, so new subscribers don't see past events." |
| 16 | Streaming: log, strictly ordered within a partition, durable; no subscribe; client reads any part, moves own position, can join late and replay | 1 | PASS | "Events are strictly ordered within a partition and are durable. Clients don't subscribe ... a client can join at any time and can replay events." (ordering is correctly limited to a partition) |
| 17 | Replay helps recovery, late consumers, reprocessing after a bug fix | 1 | PASS | "supports recovery scenarios, late-arriving consumers, and reprocessing after a bug fix" |
| 18 | Competing Consumers: consumers pull from a queue; each message processed one time if no errors | 1 | PASS | "consumers pull messages from a queue. Each message is processed only one time, assuming that there are no errors." |
| 19 | AWS: two main router kinds, event buses and event topics | 2 | PASS | "two main types of routers ...: event buses and event topics" |
| 20 | Router is a central place to audit and set policies on who may publish and subscribe; events can be encrypted in transit and at rest | 2 | PASS | "centralized location to audit your application and define policies ... restrict who can publish and subscribe ... encrypt your events both in transit and at rest" |
| 21 | Broker topology: components broadcast; others act or ignore; simple flows; no central control | 1 | PASS | "Components broadcast events to the entire system. Other components either act on the event or ignore the event. ... useful when the event processing flow is relatively simple. There's no central coordination" |
| 22 | Broker topology: no component owns the state of a multistep transaction; no built-in restart or replay | 1 | PASS | "No component owns or is aware of the state of any multistep business transaction ... no built-in mechanism for restarting or replaying them" |
| 23 | Mediator manages flow, keeps state, handles errors and restarts; more control; more coupling; can be a bottleneck | 1 | PASS | "event mediator maintains the state and manages error handling and restart capabilities ... more control ... increased coupling ... can become a bottleneck or a reliability concern" |
| 24 | Guaranteed delivery matters in some systems, especially IoT | 1 | PASS | "In some systems, especially in IoT scenarios, it's crucial to guarantee that events are delivered." |
| 25 | AWS: event source should guarantee delivery if every event must be processed | 2 | PASS | "Your event source should be reliable and guarantee delivery if you need to process every single event." |
| 26 | Consumers usually run as many instances; trouble if order is needed or logic is not idempotent | 1 | PASS | "each consumer type typically runs in multiple instances. Running multiple instances can create a challenge if the events must be processed in order ... or if idempotent message processing logic isn't implemented." |
| 27 (re-checked) | "Several instances and threads also make exactly-once semantics hard" | 1 | PASS after fix (was FAIL) | Source: "A single consumer can process events on multiple threads. This setup can create challenges if events must be processed in order or require exactly-once semantics." The source says "can create challenges", and the threads sentence is about one consumer. The page drops the hedge ("make ... hard"). Fix: "can make". |
| 28 | AWS: to rebuild state, event source should be deduplicated and ordered | 2 | PASS | "If you need to rebuild state, your event source should be deduplicated and ordered." |
| 29 | Data loss: crash before handing on drops the event | 1 | PASS | "If any of the components crashes before successfully processing and handing over the event ... the event is dropped and never reaches the final destination." |
| 30 | Azure advises persisting in-transit events and removing them only after the next component confirms | 1 | PASS | "persist in-transit events and remove or dequeue the events only when the next component acknowledges the receipt of the event" |
| 31 | Eventual consistency: not at once the same everywhere; parts see different state; consumers must tolerate stale data | 1 | PASS | "data across services isn't immediately consistent ... different parts of the system have a different view ... design consumers and downstream reads to tolerate stale or partially updated data" |
| 32 | Error-handler processor tries to fix and resend, or forwards to a DLQ for an administrator | 1 | PASS | "attempts to resolve the problem. If it's successful, ... resubmits the event ... If it fails, the processor can forward the event to a dead-letter queue (DLQ) for administrator inspection." |
| 33 | Resent events are processed out of sequence | 1 | PASS | "resubmitted events are processed out of sequence" |
| 34 | No shared call context; correlation ID in every event | 1 | PASS | "there's no shared call context ... include a correlation ID in every event" |
| 35 | End-to-end testing needs more deliberate strategies | 1 | PASS | "requires more deliberate test strategies than synchronous call chains do" |
| 36 | AWS: track flow by monitoring, not static code analysis | 2 | PASS | "dynamic tracking via monitoring services, but not static tracking via code analysis" |
| 37 | Mistake: several consumer instances may process events in a different order | 1 | PASS | "Running multiple instances can create a challenge if the events must be processed in order" |
| 38 | Mistake: a crash between receive and hand-over can drop an event | 1 | PASS | Same quote as row 29. |
| 39 | Mistake: simple request-response flows may not justify extra operating work | 1 | PASS | "The operational overhead of event brokers, asynchronous error handling, and eventual consistency isn't justified for straightforward interactions." |
| 40 | Mistake: many components can see an event, even those that should not use it | 1 | PASS | "events are often visible to multiple components in a workload, even if those components ... aren't meant to consume them" |
| 41 | Key words: Event, Producer, Consumer, Router, Event streaming, DLQ, Correlation ID | 1, 2 | PASS | All match the quotes in rows 1, 3, 16, 32, 34. |
| 42 (re-checked) | Key words: Idempotent: "The sources use it for message processing logic" | 1 | PASS after fix (was FAIL) | Only Azure uses "idempotent" ("idempotent message processing logic"). AWS does not use the word. "The sources" (plural) is wrong. The meaning "safe to run more than once with the same result" is in no source and sits under cite 1. Fix: "The Azure page uses it for message processing logic" and mark the meaning as the tutorial's own. |
| 43 | Real-life example is marked "the tutorial's own" and states no source fact | none | PASS | Marked at the start of the paragraph. |
| 44 | Tip callout is marked as the tutorial's own advice and has no Cite | none | PASS | "These test ideas are the tutorial's own advice, not a claim of the sources." |

## Structure check

| Check | Result |
|---|---|
| Sources are https, each cited | PASS (both cited many times) |
| Every `<Cite n>` has a source | PASS (n=1, n=2 only) |
| No source is a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (Microsoft Learn, AWS product page) |
| Sections in order, Key words last, no `<Voices>`, tip has no Cite | PASS (two extra sections, "How it works" and "Challenges", sit between "When you need it" and "A real-life example"; the required order holds) |
| `#` title is "Event-Driven Architecture" | PASS |
| Prose 700 to 1100 words | PASS, about 1090 (lede, lists, and tip included; export block, tables, Cite tags excluded). Close to the limit: a fix must not add words. |
| Copy: "An event-driven architecture can use a publish-subscribe model or an event" (11 words, Azure) | PASS after fix (was FAIL) |
| Copy: "In event streaming, events are written to a log" (8 words, Azure "Event streaming: Events are written to a log") | PASS after fix (was FAIL) |
| Copy: "if events must be processed in order, or" (8 words, Azure) | PASS after fix (was FAIL) |
| Copy: "the event to a dead-letter queue (DLQ) for" (8 words, Azure) | PASS after fix (was FAIL) |
| Copy against AWS | PASS (no run of 8) |

## Re-check

The writer fixed the 6 FAILs. Changed text re-read against the sources, and the copy check re-run on the whole page.

| Row | New text | Verdict | Reason |
|---|---|---|---|
| 27 | "Azure adds that exactly-once semantics can be a challenge too" | PASS | Azure: "This setup can create challenges if events must be processed in order or require exactly-once semantics." The hedge is kept. |
| 26 | "This can cause trouble if events need processing in order, or the processing logic is not idempotent" | PASS | Azure: "can create a challenge if the events must be processed in order ... or if idempotent message processing logic isn't implemented." |
| 42 | "(the tutorial's own definition; Azure uses the word without defining it)" | PASS | The meaning is marked as the tutorial's own. Only Azure uses the word, and it does not define it. |
| 14 | "Azure describes two models for this style: publish-subscribe and event streaming" | PASS | "An event-driven architecture can use a publish-subscribe model or an event stream model." |
| 16 | "events go into a log" | PASS | Same facts as before. |
| 32 | "sends the event on to a dead-letter queue (DLQ), where an administrator can inspect it" | PASS | "forward the event to a dead-letter queue (DLQ) for administrator inspection" |
| Copy | Whole page vs Azure and AWS | PASS | Longest run is 7 words ("consumers and reprocessing after a bug fix"). No run of 8. |
| Length | Prose count | PASS | 1091 words by the same method (limit 1100). |

Open FAILs: 0
