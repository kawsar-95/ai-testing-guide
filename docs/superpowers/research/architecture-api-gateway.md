# API Gateway (Architecture module, part 17) — research notes (2026-10-20)

Base text: the owner's notes, section "API Gateway Concepts" (`architecture-owner-notes.md`). The owner's notes get no cite. The LMS dashboard example, the "Common mistakes" advice, and the tester tips are the tutorial's own words.

Fetch note: each source was downloaded with `curl` and converted to plain text in the scratch folder. Each quote below is copied from that text. The text is not committed.

## Sources

S1. Use API gateways in microservices — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/microservices/design/gateway — accessed 2026-10-20

S2. Gateway Aggregation pattern — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-aggregation — accessed 2026-10-20

S3. Gateway Offloading pattern — Microsoft Azure Architecture Center — https://learn.microsoft.com/en-us/azure/architecture/patterns/gateway-offloading — accessed 2026-10-20

S4. What is Amazon API Gateway? — Amazon API Gateway Developer Guide (AWS) — https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html — accessed 2026-10-20

S5. What is Elastic Load Balancing? — Elastic Load Balancing User Guide (AWS) — https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html — accessed 2026-10-20

S6. Throttle requests to your REST APIs for better throughput in API Gateway — Amazon API Gateway Developer Guide (AWS) — https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html — accessed 2026-10-20

## Claims

| # | Claim (page wording, short) | Source | Quote |
|---|---|---|---|
| 1 | An API gateway is one central entry point between clients and services; it acts as a reverse proxy and routes requests | S1 | "An API gateway provides a centralized entry point for managing interactions between clients and application services. It acts as a reverse proxy and routes clients requests to the appropriate services." |
| 2 | It can also do cross-cutting tasks: authentication, SSL termination, rate limiting | S1 | "It can also perform various cross-cutting tasks such as authentication, SSL termination, mutual TLS, and rate limiting." |
| 3 | AWS calls its gateway a "front door" to backend services | S4 | "API Gateway acts as a \"front door\" for applications to access data, business logic, or functionality from your backend services" |
| 4 | AWS API Gateway handles traffic management, authorization and access control, monitoring, and API version management | S4 | "These tasks include traffic management, authorization and access control, monitoring, and API version management." |
| 5 | Without a gateway: complex client code; clients track many endpoints | S1 | "Complex client code: It can result in complex client code. Clients must track multiple endpoints and handle failures resiliently." |
| 6 | Without a gateway: tight coupling; clients must know how the backend is split | S1 | "Tight coupling: It creates coupling between the client and the backend. Clients need to understand decomposition of individual services" |
| 7 | Without a gateway: each public service must handle auth, SSL, rate limiting itself | S1 | "Redundant handling of concerns: Each public-facing service must handle concerns such as authentication, SSL, and client rate limiting." |
| 8 | Without a gateway: more public endpoints, bigger attack surface | S1 | "Expanded attack surface: Public endpoints increase the potential attack surface and require hardening." |
| 9 | Gateway routing: one endpoint, layer-7 routing to many services | S1 | "The API gateway uses layer-7 routing and provides a single endpoint for clients to use." |
| 10 | Gateway aggregation: client sends one request, gateway calls services and combines results | S1 | "In API aggregation, the client sends one request to the API gateway. Then, the API gateway routes requests to the various services required for the operations. Finally, the API gateway aggregates the results and sends them back to the client." |
| 11 | Offloading list includes auth, rate limiting, logging and monitoring, response caching | S1 | "Here are examples of functionality that you could offload to an API gateway: SSL termination Mutual TLS Authentication ... Client rate limiting (throttling) ... Logging and monitoring Response caching" |
| 12 | Many small requests from a mobile app over a slow network can fail or come back incomplete | S2 | "Sending individual requests in this way over a cellular network that has high latency is inefficient and can cause connectivity loss or incomplete responses." |
| 13 | A load balancer distributes incoming traffic across many targets and sends traffic only to healthy targets | S5 | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 14 | Some API gateways do no load balancing and need a load balancer next to them (Azure API Management) | S1 | "API Management doesn't perform any load balancing, so you should use it with a load balancer, such as Azure Application Gateway, or a reverse proxy." |
| 15 | When requests pass the limit, clients can get 429 Too Many Requests | S6 | "When request submissions exceed the steady-state request rate and burst limits, API Gateway begins to throttle requests. Clients may receive 429 Too Many Requests error responses at this point." |
| 16 | AWS API Gateway throttles with the token bucket algorithm | S6 | "API Gateway throttles requests to your API using the token bucket algorithm, where a token counts for a request." |
| 17 | Never put business logic in the gateway | S3 | "Business logic separation. Never offload business logic to the gateway." |
| 18 | The gateway can be a single point of failure | S2 | "The gateway service might introduce a single point of failure (SPoF)." |
| 19 | Run multiple gateway instances to avoid a single point of failure | S3 | "Avoid single points of failure by running multiple instances of your gateway." |
| 20 | The gateway can become a bottleneck; load test it | S2 | "The gateway might introduce a bottleneck." / "Perform load testing against the gateway to ensure that you don't introduce cascading failures for services." |
| 21 | Use timeouts; a partial response can be acceptable when one call is slow | S2 | "If one or more service calls take too long, it might be acceptable to time out and return a partial set of data." |
| 22 | Use correlation IDs to trace each call | S2 | "Implement distributed tracing by using correlation IDs to track each individual call." |
| 23 | The gateway adds a network hop and processing time to every request | S3 | "Latency overhead. The gateway adds a network hop to every request." |
| 24 | Even if a service is not instrumented, the gateway gives a baseline of logs and monitoring | S3 | "Even if a service isn't correctly instrumented, the gateway can provide a baseline level of monitoring and logging." |
