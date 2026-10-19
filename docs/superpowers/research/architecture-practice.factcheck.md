# Fact-check: Practice Questions (round 1, 2026-10-20)

An agent that did not write the page checked `content/architecture/practice.mdx`. I compared each cited sentence with the downloaded text of its source (S1–S19 of `architecture-practice.md`). Each quote below is copied from that text. The page has 19 sources (S19 is new, see Fixes). Each source has 1 or more cites, and each cite points to a source. All sources are official vendor docs, IETF, MDN, OpenTelemetry, the Google SRE book, and the W3C.

I also checked three more things. Each model answer agrees with its topic page in `content/architecture/`. Each `topic` attribute fits its question. The page has 30 `PracticeQuestion` blocks, each `</PracticeQuestion>` is at column 0, and no `question` attribute has a straight double quote.

## Cited claims

| # | Q | Claim (short) | Cite | Verdict | Quote |
|---|---|---|---|---|---|
| 1 | 4 | A load balancer spreads incoming requests across many servers | 1 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets" |
| 2 | 4 | It can take over encryption and decryption from the servers | 1 | PASS | "You can also offload the work of encryption and decryption to your load balancer" |
| 3 | 4 | Health checks let the load balancer send requests only to healthy servers | 1 | PASS | "You can configure health checks, which monitor the health of the compute resources, so that the load balancer sends requests only to the healthy ones." |
| 4 | 5, 6, 7 | Redis deletes a key by itself when its timeout ends | 2 | PASS | "Set a timeout on key. After the timeout has expired, the key will automatically be deleted." |
| 5 | 8 | CloudFront supports signed URLs and signed cookies for private content | 4 | PASS | "Require that your users access your private content by using special CloudFront signed URLs or signed cookies." |
| 6 | 8 | AWS recommends access through the CDN, not the origin, so users cannot bypass signed URL rules | 4 | PASS | "Requiring CloudFront URLs isn't necessary, but we recommend it to prevent users from bypassing the restrictions that you specify in signed URLs or signed cookies." |
| 7 | 9 | A read replica is a read-only copy; send reads to it to reduce load on the primary | 5 | PASS | "A read replica is a read-only copy of a DB instance. You can reduce the load on your primary DB instance by routing queries from your applications to the read replica." |
| 8 | 10, 27 | Amazon RDS copies updates to read replicas asynchronously | 5 | PASS | "When you make updates to the primary DB instance, Amazon RDS copies them asynchronously to the read replica." |
| 9 | 11 | A webhook endpoint can get the same event more than once | 6 | PASS | "Webhook endpoints might occasionally receive the same event more than once." |
| 10 | 11 | Record processed event IDs and skip processed events | 6 | PASS | "You can guard against duplicated event receipts by logging the event IDs you've processed, and then not processing already-logged events." |
| 11 | 11 | Return the 2xx quickly, before slow work | 6 | PASS | "Quickly returns a successful status code (2xx) before any complex logic that might cause a timeout." |
| 12 | 11 | If you return an error, the gateway retries | 6 | FAIL→fixed | Had no cite and named no gateway. Now "If you return an error (a non-`2xx` code), Stripe sends the event again" with cite 6. Quote: "If Stripe retries an event (for example, your endpoint previously replied with a non-2xx status code), then we generate a new signature and timestamp for the new delivery attempt." |
| 13 | 11 | Stripe retries for up to three days in live mode | 6 | PASS | "Stripe attempts to deliver events to your destination for up to three days with an exponential back off in live mode." |
| 14 | 13 | SQS: if the worker does not delete the message before the visibility timeout ends, another worker can take it | 7 | PASS | "During this period, you're expected to process and delete the message. If you don't delete it before the timeout expires, the message becomes visible again in the queue and can be retrieved by another consumer." |
| 15 | 13 | SQS can deliver a message more than once | 7 | PASS | "because of the at-least-once delivery model, Amazon SQS doesn't guarantee that a message won't be delivered more than once within the visibility timeout period." |
| 16 | 14 | A DLQ holds messages that were not processed successfully, to find out why | 8 | PASS | "source queues can target for messages that are not processed successfully. DLQs are useful for debugging your application because you can isolate unconsumed messages to determine why processing did not succeed." |
| 17 | 14 | `maxReceiveCount` sets how many receives before the move to the DLQ | 8 | PASS | "The maxReceiveCount is the number of times a consumer can receive a message from a source queue before it is moved to a dead-letter queue." |
| 18 | 16 | Over the limit: return 429 Too Many Requests | 9 | PASS | "The 429 status code indicates that the user has sent too many requests in a given amount of time (\"rate limiting\")." |
| 19 | 16 | The response can include a Retry-After header that says how long to wait | 9 | PASS | "MAY include a Retry-After header indicating how long to wait before making a new request." |
| 20 | 17 | S3 objects are private by default | 10 | PASS | "By default, all Amazon S3 objects are private, only the object owner has permission to access them." |
| 21 | 17 | A presigned URL gives time-limited permission to download one object | 10 | PASS | "A presigned URL uses security credentials to grant time-limited permission to download objects." |
| 22 | 17 | Through CloudFront, signed URLs or signed cookies protect private content | 4 | PASS | "Require that your users access your private content by using special CloudFront signed URLs or signed cookies." |
| 23 | 18 | Web servers in a public subnet, database in a private subnet; only the web servers reach it | 11 | FAIL→fixed | The source supports it, but "web servers in a public subnet" disagrees with the topic page `cloud-architecture.mdx` ("Put the database and app servers in private subnets, and expose only the load balancer."). Now "A safer setup puts the database in a private subnet, so only the web servers can reach it." Quote: "The DB instances are deployed in the private subnet. In such a deployment, only the web servers have access to the DB instances." |
| 24 | 18 | A security group controls who can connect | 11 | PASS | "Access to the DB instance is ultimately controlled by the security group it uses." |
| 25 | 19 | A gateway is a central entry point; it can do authentication, SSL termination, rate limiting | 12 | PASS | "An API gateway provides a centralized entry point" / "It can also perform various cross-cutting tasks such as authentication, SSL termination, mutual TLS, and rate limiting." |
| 26 | 19 | Without it, each public service must do these jobs itself | 12 | PASS | "Each public-facing service must handle concerns such as authentication, SSL, and client rate limiting." |
| 27 | 19 | AWS API Gateway uses a token bucket; clients can get 429 | 13 | PASS | "API Gateway throttles requests to your API using the token bucket algorithm" / "Clients may receive 429 Too Many Requests error responses at this point." |
| 28 | 20 | A shared cache reuses one response for many users; do not store personal content there | 3 | PASS | "It stores a single response and reuses it with multiple users — so developers should avoid storing personalized contents to be cached in the shared cache." |
| 29 | 20 | `Cache-Control: private` lets only the browser store the response | 3 | PASS | "the response can be stored only in a private cache (e.g., local caches in browsers)." |
| 30 | 20 | `no-store` tells every cache not to store it | 3 | PASS | "any caches of any kind (private or shared) should not store this response." |
| 31 | 21 | Logs are timestamped messages | 14 | PASS | "A log is a timestamped message emitted by services or other components." |
| 32 | 21 | Metrics are numbers over time (error rate, CPU, request rate) | 14 | PASS | "Metrics are aggregations over a period of time of numeric data ... system error rate, CPU utilization, and request rate" |
| 33 | 21 | Traces record the path of one request through many services | 14 | PASS | "records the path taken by a single request ... as it propagates through multiple services" |
| 34 | 22 | Stripe advises tracking event IDs to find duplicate deliveries | 6 | PASS | "Track event IDs to identify duplicate deliveries instead." |
| 35 | 23 | Average 100 ms, 1 % of requests take 5 s | 15 | PASS | "If you run a web service with an average latency of 100 ms at 1,000 requests per second, 1% of requests might easily take 5 seconds." |
| 36 | 23 | The slow tail of one backend can become the normal speed of the page | 15 | PASS | "the 99th percentile of one backend can easily become the median response of your frontend." |
| 37 | 24 | Saturation is one of the four golden signals | 15 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation." / "Saturation How \"full\" your service is." |
| 38 | 25 | Logs are more useful when linked to a trace | 14 | PASS | "They become far more useful when they are included as part of a span, or when they are correlated with a trace and a span." |
| 39 | 25 | W3C Trace Context defines HTTP headers that carry the ID from service to service | 16 | PASS | "This specification defines standard HTTP headers and a value format to propagate context information" / "Context information uniquely identifies individual requests in a distributed system" |
| 40 | 26 | A monolith is easier to start, with little planning up front | 17 | PASS | "Monolithic applications are easier to start with, as not much up-front planning is required." |
| 41 | 26, 29 | AWS: a monolith suits simple applications and prototypes | 17 | PASS | "The monolithic approach is more suitable when designing a simple application or prototype." |
| 42 | 26 | AWS Well-Architected: avoid a monolith whenever possible; a monolith you start with must be modular | 19 | FAIL→fixed | Was missing. The answer gave only the AWS statements that favor a monolith, and "Start with a monolith" was not labeled as the tutorial's view. Now "In this tutorial's view, start with a monolith ..." and a new sentence with cite 19. Quote: "Monolithic architecture should be avoided whenever possible." / "Even if you choose to start with a monolith architecture, you must ensure that it's modular" |
| 43 | 26 | Each microservice can be deployed on its own | 18 | PASS | "Because services can be deployed independently, teams can update existing services without rebuilding or redeploying the entire application." |
| 44 | 27 | The copy to a replica can be asynchronous | 5 | PASS | "Amazon RDS copies them asynchronously to the read replica." |
| 45 | 28 | A load balancer increases availability and fault tolerance | 1 | PASS | "Using a load balancer increases the availability and fault tolerance of your applications." |
| 46 | 29 | Microservices need skills in cloud, APIs, and containers | 17 | PASS | "microservices development needs an understanding of cloud architecture, APIs, containerization, and other expertise" |
| 47 | 29 | Microservices need a mature DevOps culture | 18 | PASS | "A successful microservice architecture requires a mature DevOps culture." |
| 48 | 29 | Each service is simpler, but the whole system has more moving parts | 18 | PASS | "A microservices application has more moving parts than the equivalent monolithic application. Each service is simpler, but the entire system as a whole is more complex." |

## Uncited claims

| # | Q | Claim (short) | Verdict | Note |
|---|---|---|---|---|
| 49 | 18 | "Bots scan the internet for open database ports all the time." | FAIL→fixed | A factual claim about attacker behavior with no source. Now "Anyone on the internet can try to connect to it. Attackers can try default passwords, stolen passwords, and known bugs." This is the tutorial's own reasoning. |
| 50 | all | Advice, examples, and design reasoning (for example Q1, Q2, Q3, Q12, Q15, Q30) | PASS | The notes say these are the tutorial's own answers. They state no number, status code, or product behavior that needs a source. |

## Agreement with the topic pages

| Q | Topic page | Verdict | Note |
|---|---|---|---|
| 1, 2 | single-server | PASS | Same parts (Nginx, app, database, files, logs) and the same limits (SPOF, shared resources, upper limit, backups). |
| 3 | vertical-scaling | PASS | Both say vertical scaling is a common first step, needs no code change, has a ceiling, and keeps one SPOF. Horizontal scaling needs a load balancer and a stateless app, as in horizontal-scaling. |
| 4 | load-balancer | PASS | The health check advice (test the database connection, not only "alive") is the same. |
| 5 | stateless-service | PASS | Redis session store, JWT, object storage for files. |
| 6, 7, 20 | caching | PASS | 10 min TTL, delete keys on a price change, read the price from the database at checkout, user ID in the key, `private` and `no-store` (also in cdn). |
| 8 | cdn | PASS | Signed URLs or cookies, no direct origin access. |
| 9, 10 | database-replication | PASS | Read replicas, asynchronous copy, read your own writes from the primary, "Processing" state, monitor lag. |
| 11 | idempotency | PASS | Unique constraint, status check, answer duplicates with success; after the fix, the Stripe retry rule is the same as on the topic page. |
| 12–15 | message-queue | PASS | Async job with status, visibility timeout, at-least-once delivery, DLQ with `maxReceiveCount`. |
| 16 | rate-limiting | PASS | Same example limits (3 in 5 min per phone, 10 in 10 min per IP), 429, `Retry-After`, shared counters in Redis. |
| 17 | object-storage | PASS | Private by default, presigned URLs. |
| 18 | cloud-architecture | FAIL→fixed | See row 23. |
| 19 | api-gateway | PASS | Auth at the gateway, business permission checks stay in the services. |
| 21–25 | observability | PASS | Same definitions of logs, metrics, traces, p95, saturation, and request ID. |
| 26, 29 | monolith-microservices | PASS (after fix) | After the fix, both pages label "start with a monolith" as the tutorial's view and give the stricter AWS Well-Architected position. |
| 27, 28, 30 | why-system-design | PASS | The trade-offs (performance vs consistency, cost vs availability) are in the topic page table. |

## Topic attributes

All 30 `topic` values fit their questions and match the table in the notes. Q3 (vertical and horizontal) uses `vertical-scaling`, which links to horizontal-scaling. Q15 (slow SMS in login) uses `message-queue`, because the answer moves the SMS to a queue. Q18 uses `cloud-architecture`, the page with private subnets.

## Fixes

1. Row 12 (Q11): named Stripe and added cite 6 to the retry-after-error sentence.
2. Row 23 (Q18): removed "web servers in a public subnet" so the answer agrees with `cloud-architecture.mdx`.
3. Row 42 (Q26): labeled "start with a monolith" as the tutorial's view. Added the AWS Well-Architected position with a new source 19 (REL03-BP01).
4. Row 49 (Q18): replaced the uncited claim about bots with the tutorial's own reasoning.
5. Notes: added S19, rows 43–44, and changed row 24 in `architecture-practice.md`.

Open FAILs: 0
