# Fact-check: API Gateway (round 1, 2026-10-20)

An agent that did not write the page checked `content/architecture/api-gateway.mdx`. I compared each cited sentence with the downloaded text of its source (S1–S6 of `architecture-api-gateway.md`). Each quote below is copied from that text. The page has 6 sources. Each source has 1 or more cites, and each cite points to a source. All sources are official vendor docs (Microsoft Azure Architecture Center, AWS). The LMS dashboard example, the uncited "Common mistakes" text, and the tester tips are the tutorial's own words. Notes rows 12 and 23 are not used on the page and are not checked.

| # | Location | Claim (short) | Cite | Verdict | Quote |
|---|---|---|---|---|---|
| 1 | In plain words | A gateway is one central entry point between clients and backend services | 1 | PASS | "An API gateway provides a centralized entry point for managing interactions between clients and application services." |
| 2 | In plain words | It works as a reverse proxy and sends each request to the correct service | 1 | PASS | "It acts as a reverse proxy and routes clients requests to the appropriate services." |
| 3 | In plain words | AWS calls its gateway a "front door" to backend services | 4 | PASS | "API Gateway acts as a \"front door\" for applications to access data, business logic, or functionality from your backend services" |
| 4 | In plain words | Cross-cutting tasks: authentication, SSL termination, rate limiting | 1 | PASS | "It can also perform various cross-cutting tasks such as authentication, SSL termination, mutual TLS, and rate limiting." |
| 5 | In plain words | Other jobs: logging, monitoring, response caching | 1 | PASS | "Client rate limiting (throttling) ... Logging and monitoring Response caching" |
| 6 | In plain words | Too many requests: AWS API Gateway can answer 429 Too Many Requests | 6 | PASS | "When request submissions exceed the steady-state request rate and burst limits, API Gateway begins to throttle requests. Clients may receive 429 Too Many Requests error responses at this point." |
| 7 | In plain words | Aggregation: one client request, the gateway calls services, joins results, returns one response | 1 | PASS | "In API aggregation, the client sends one request to the API gateway. Then, the API gateway routes requests to the various services required for the operations. Finally, the API gateway aggregates the results and sends them back to the client." |
| 8 | Gateway or load balancer? | A load balancer spreads traffic over many copies and sends traffic only to healthy ones | 5 | PASS | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets ... It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 9 | Gateway or load balancer? | A gateway decides which service gets a request and applies rules such as authentication and rate limits | 1 | FAIL→fixed | Had no cite. Added cite 1. Quote: "routes clients requests to the appropriate services. It can also perform various cross-cutting tasks such as authentication, SSL termination, mutual TLS, and rate limiting." |
| 10 | Gateway or load balancer? | Azure API Management does no load balancing; use a load balancer or reverse proxy with it | 1 | PASS | "API Management doesn't perform any load balancing, so you should use it with a load balancer, such as Azure Application Gateway, or a reverse proxy." |
| 11 | When you need it | Without a gateway: complex client code | 1 | PASS | "Complex client code: It can result in complex client code. Clients must track multiple endpoints" |
| 12 | When you need it | Without a gateway: the client must know how the backend is split | 1 | PASS | "Clients need to understand decomposition of individual services" |
| 13 | When you need it | Without a gateway: each public service repeats authentication and rate limiting | 1 | PASS | "Each public-facing service must handle concerns such as authentication, SSL, and client rate limiting." |
| 14 | When you need it | Without a gateway: each public endpoint is one more door for an attacker | 1 | PASS | "Public endpoints increase the potential attack surface and require hardening." |
| 15 | Common mistakes | Never move business logic into the gateway | 3 | PASS | "Business logic separation. Never offload business logic to the gateway." |
| 16 | Common mistakes | The gateway can become a single point of failure | 2 | PASS | "The gateway service might introduce a single point of failure (SPoF)." |
| 17 | Common mistakes | Run more than one gateway instance | 3 | PASS | "Avoid single points of failure by running multiple instances of your gateway." |
| 18 | Common mistakes | The gateway can become a bottleneck; load test it | 2 | PASS | "The gateway might introduce a bottleneck." / "Perform load testing against the gateway to ensure that you don't introduce cascading failures for services." |
| 19 | Common mistakes | A partial response can be acceptable when one call takes too long | 2 | PASS | "If one or more service calls take too long, it might be acceptable to time out and return a partial set of data." |
| 20 | Common mistakes | Microsoft advises correlation IDs to track each call | 2 | PASS | "Implement distributed tracing by using correlation IDs to track each individual call." |
| 21 | What a tester can check | Callout says the tips are the tutorial's own advice | – | PASS | Callout title "Tutorial advice" and "These test ideas are the tutorial's own advice." |

## Fixes

1. Row 9: added `<Cite n={1} />` to the sentence that says what a gateway does at the API level.
2. Added a blank line between the last "Common mistakes" item and the `## What a tester can check` heading (format only, no change to the text).

Open FAILs: 0
