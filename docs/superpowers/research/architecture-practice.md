# Practice Questions (Architecture module, part 20) — research notes (2026-10-20)

Base text: the owner's 30 "System Design Practice Questions" (`architecture-owner-notes.md`), in the owner's order. The questions keep the owner's wording. Question 30 is reworded so that the MDX attribute has no straight double quotes: Why is it important to explain the “why” of an architecture decision?

The model answers are the tutorial's own answers. They use the owner's notes for each topic. Only the facts in the answers (a status code, a header, a product behavior, a definition from a standard) have a cite. Advice and design reasoning have no cite.

Fetch note: each source was downloaded with `curl` and converted to plain text in the scratch folder. Each quote below is copied from that text. The text is not committed.

## Topic for each question

| Q | Topic slug | Q | Topic slug | Q | Topic slug |
|---|---|---|---|---|---|
| 1 | single-server | 11 | idempotency | 21 | observability |
| 2 | single-server | 12 | message-queue | 22 | observability |
| 3 | vertical-scaling | 13 | message-queue | 23 | observability |
| 4 | load-balancer | 14 | message-queue | 24 | observability |
| 5 | stateless-service | 15 | message-queue | 25 | observability |
| 6 | caching | 16 | rate-limiting | 26 | monolith-microservices |
| 7 | caching | 17 | object-storage | 27 | why-system-design |
| 8 | cdn | 18 | cloud-architecture | 28 | why-system-design |
| 9 | database-replication | 19 | api-gateway | 29 | monolith-microservices |
| 10 | database-replication | 20 | caching | 30 | why-system-design |

## Sources

S1. What is Elastic Load Balancing? — AWS — https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html — accessed 2026-10-20

S2. EXPIRE — Redis documentation — https://redis.io/docs/latest/commands/expire/ — accessed 2026-10-20

S3. Cache-Control header — MDN Web Docs — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control — accessed 2026-10-20

S4. Serve private content with signed URLs and signed cookies — Amazon CloudFront Developer Guide (AWS) — https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html — accessed 2026-10-20

S5. Working with DB instance read replicas — Amazon RDS User Guide (AWS) — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html — accessed 2026-10-20

S6. Receive Stripe events in your webhook endpoint — Stripe Docs — https://docs.stripe.com/webhooks — accessed 2026-10-20

S7. Amazon SQS visibility timeout — Amazon SQS Developer Guide (AWS) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html — accessed 2026-10-20

S8. Using dead-letter queues in Amazon SQS — Amazon SQS Developer Guide (AWS) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html — accessed 2026-10-20

S9. RFC 6585: Additional HTTP Status Codes — IETF — https://www.rfc-editor.org/rfc/rfc6585.html — accessed 2026-10-20

S10. Sharing objects with presigned URLs — Amazon S3 User Guide (AWS) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html — accessed 2026-10-20

S11. Working with a DB instance in a VPC — Amazon RDS User Guide (AWS) — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html — accessed 2026-10-20

S12. Use API gateways in microservices — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway — accessed 2026-10-20

S13. Throttle requests to your REST APIs for better throughput in API Gateway — Amazon API Gateway Developer Guide (AWS) — https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html — accessed 2026-10-20

S14. Observability primer — OpenTelemetry — https://opentelemetry.io/docs/concepts/observability-primer/ — accessed 2026-10-20

S15. Monitoring Distributed Systems (Site Reliability Engineering, chapter 6) — Google (sre.google) — https://sre.google/sre-book/monitoring-distributed-systems/ — accessed 2026-10-20

S16. Trace Context (W3C Recommendation) — W3C — https://www.w3.org/TR/trace-context/ — accessed 2026-10-20

S17. What's the Difference Between Monolithic and Microservices Architecture? — AWS — https://aws.amazon.com/compare/the-difference-between-monolithic-and-microservices-architecture/ — accessed 2026-10-20

S18. Microservices architecture style — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices — accessed 2026-10-20

S19. REL03-BP01 Choose how to segment your workload — AWS Well-Architected Framework — https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_service_architecture_monolith_soa_microservice.html — accessed 2026-10-20

## Claims

| # | Q | Claim (page wording, short) | Source | Quote |
|---|---|---|---|---|
| 1 | 4 | A load balancer spreads traffic across many targets and sends traffic only to healthy ones | S1 | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets ... It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 2 | 4 | Health checks let the load balancer send requests only to healthy resources | S1 | "You can configure health checks, which monitor the health of the compute resources, so that the load balancer sends requests only to the healthy ones." |
| 3 | 28 | A load balancer increases availability and fault tolerance | S1 | "Using a load balancer increases the availability and fault tolerance of your applications." |
| 4 | 5, 6, 7 | In Redis, a key with a timeout is deleted automatically when the timeout expires | S2 | "Set a timeout on key. After the timeout has expired, the key will automatically be deleted." |
| 5 | 20 | A shared cache (proxy, CDN) reuses one stored response for many users, so do not cache personal content there | S3 | "It stores a single response and reuses it with multiple users — so developers should avoid storing personalized contents to be cached in the shared cache." |
| 6 | 20 | `private`: store only in a private (browser) cache | S3 | "The private response directive indicates that the response can be stored only in a private cache (e.g., local caches in browsers)." |
| 7 | 20 | `no-store`: no cache of any kind should store the response | S3 | "The no-store response directive indicates that any caches of any kind (private or shared) should not store this response." |
| 8 | 8, 17 | CloudFront serves private content with signed URLs or signed cookies | S4 | "Require that your users access your private content by using special CloudFront signed URLs or signed cookies." |
| 9 | 8 | AWS recommends that users reach the content only through CloudFront, not the origin, so they cannot bypass the restriction | S4 | "Requiring CloudFront URLs isn't necessary, but we recommend it to prevent users from bypassing the restrictions that you specify in signed URLs or signed cookies." |
| 10 | 9 | A read replica is a read-only copy; send read queries to it to reduce load on the primary | S5 | "A read replica is a read-only copy of a DB instance. You can reduce the load on your primary DB instance by routing queries from your applications to the read replica." |
| 11 | 10, 27 | RDS copies primary updates to the replica asynchronously | S5 | "When you make updates to the primary DB instance, Amazon RDS copies them asynchronously to the read replica." |
| 12 | 4 | A load balancer can take over encryption and decryption from the servers | S1 | "You can also offload the work of encryption and decryption to your load balancer so that your compute resources can focus on their main work." |
| 13 | 11 | A webhook endpoint can get the same event more than once; log processed event IDs and skip them | S6 | "Webhook endpoints might occasionally receive the same event more than once. You can guard against duplicated event receipts by logging the event IDs you've processed, and then not processing already-logged events." |
| 14 | 11 | Return 2xx quickly, before complex logic | S6 | "Quickly returns a successful status code (2xx) before any complex logic that might cause a timeout." |
| 15 | 11 | Stripe retries delivery for up to three days in live mode | S6 | "Stripe attempts to deliver events to your destination for up to three days with an exponential back off in live mode." |
| 16 | 22 | Track event IDs to find duplicate deliveries | S6 | "Track event IDs to identify duplicate deliveries instead." |
| 17 | 13 | If a consumer does not delete a message before the visibility timeout ends, the message becomes visible again for another consumer | S7 | "If you don't delete it before the timeout expires, the message becomes visible again in the queue and can be retrieved by another consumer." |
| 18 | 13 | SQS is at-least-once; a message can be delivered more than once | S7 | "because of the at-least-once delivery model, Amazon SQS doesn't guarantee that a message won't be delivered more than once" |
| 19 | 14 | A DLQ holds messages that were not processed successfully, to find out why | S8 | "Amazon SQS supports dead-letter queues (DLQs), which source queues can target for messages that are not processed successfully. DLQs are useful for debugging your application because you can isolate unconsumed messages to determine why processing did not succeed." |
| 20 | 14 | maxReceiveCount: receives before the message moves to the DLQ | S8 | "The maxReceiveCount is the number of times a consumer can receive a message from a source queue before it is moved to a dead-letter queue." |
| 21 | 16 | 429 means too many requests in a given time; can include Retry-After | S9 | "The 429 status code indicates that the user has sent too many requests in a given amount of time (\"rate limiting\")." / "MAY include a Retry-After header indicating how long to wait before making a new request." |
| 22 | 17 | S3 objects are private by default | S10 | "By default, all Amazon S3 objects are private, only the object owner has permission to access them." |
| 23 | 17 | A presigned URL gives time-limited permission to download | S10 | "A presigned URL uses security credentials to grant time-limited permission to download objects." |
| 24 | 18 | DB in a private subnet; only the web servers reach the DB | S11 | "The DB instances are deployed in the private subnet. In such a deployment, only the web servers have access to the DB instances." |
| 25 | 18 | Access is controlled by the security group | S11 | "Access to the DB instance is ultimately controlled by the security group it uses." |
| 26 | 19 | A gateway is a central entry point and can do authentication, SSL termination, rate limiting | S12 | "An API gateway provides a centralized entry point for managing interactions between clients and application services." / "It can also perform various cross-cutting tasks such as authentication, SSL termination, mutual TLS, and rate limiting." |
| 27 | 19 | Without a gateway, each public service must handle auth, SSL, rate limiting | S12 | "Redundant handling of concerns: Each public-facing service must handle concerns such as authentication, SSL, and client rate limiting." |
| 28 | 19 | AWS API Gateway throttles with a token bucket and can return 429 | S13 | "API Gateway throttles requests to your API using the token bucket algorithm" / "Clients may receive 429 Too Many Requests error responses at this point." |
| 29 | 21 | A log is a timestamped message | S14 | "A log is a timestamped message emitted by services or other components." |
| 30 | 21 | Metrics are numbers aggregated over time (error rate, CPU, request rate) | S14 | "Metrics are aggregations over a period of time of numeric data about your infrastructure or application. Examples include: system error rate, CPU utilization, and request rate for a given service." |
| 31 | 21 | A trace records the path of one request through many services | S14 | "A distributed trace, more commonly known as a trace, records the path taken by a single request (made by an application or end user) as it propagates through multiple services" |
| 32 | 25 | Logs are more useful when correlated with a trace | S14 | "They become far more useful when they are included as part of a span, or when they are correlated with a trace and a span." |
| 33 | 23 | Average 100 ms, 1 % can take 5 s | S15 | "If you run a web service with an average latency of 100 ms at 1,000 requests per second, 1% of requests might easily take 5 seconds." |
| 34 | 23 | The 99th percentile of one backend can become the median of the frontend | S15 | "If your users depend on several such web services to render their page, the 99th percentile of one backend can easily become the median response of your frontend." |
| 35 | 24 | Saturation = how full the service is; the four golden signals | S15 | "Saturation How \"full\" your service is." / "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 36 | 25 | Trace Context: standard HTTP headers that carry an ID for each request across services | S16 | "This specification defines standard HTTP headers and a value format to propagate context information that enables distributed tracing scenarios." / "Context information uniquely identifies individual requests in a distributed system" |
| 37 | 26 | A monolith is easier to start; little planning up front | S17 | "Monolithic applications are easier to start with, as not much up-front planning is required." |
| 38 | 26, 29 | A monolith suits a simple application or prototype | S17 | "The monolithic approach is more suitable when designing a simple application or prototype." |
| 39 | 29 | Microservices need cloud, API, and container skills | S17 | "microservices development needs an understanding of cloud architecture, APIs, containerization, and other expertise specific to modern cloud applications." |
| 40 | 29 | Microservices have more moving parts; whole system more complex | S18 | "A microservices application has more moving parts than the equivalent monolithic application. Each service is simpler, but the entire system as a whole is more complex." |
| 41 | 29 | Microservices need a mature DevOps culture | S18 | "Management: A successful microservice architecture requires a mature DevOps culture." |
| 42 | 26 | Microservices can be deployed independently | S18 | "Because services can be deployed independently, teams can update existing services without rebuilding or redeploying the entire application." |
| 43 | 11 | Stripe retries an event after a non-2xx answer | S6 | "If Stripe retries an event (for example, your endpoint previously replied with a non-2xx status code), then we generate a new signature and timestamp for the new delivery attempt." |
| 44 | 26 | AWS Well-Architected: avoid a monolith whenever possible; a monolith you start with must be modular | S19 | "Monolithic architecture should be avoided whenever possible." / "Even if you choose to start with a monolith architecture, you must ensure that it's modular" |
