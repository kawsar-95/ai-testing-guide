# Stateless Service (Architecture 07) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratchpad. The text was not committed. Each quote below is copied from that text. Curly apostrophes in the source are written as straight apostrophes here.

Base text: the owner's notes, section "Stateless Service" (`architecture-owner-notes.md`). The LMS login example, the "Common mistakes" advice, and the tester tips are the tutorial's own words. Two mistakes (sessions in memory, heavy work in the app process) also have a cite.

## Sources

S1. REL05-BP06 Make systems stateless where possible — AWS Well-Architected Framework, Reliability Pillar (AWS) — https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_mitigate_interaction_failure_stateless.html — accessed 2026-10-20. Page cite `[1]`.
S2. Design to scale out — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/scale-out — accessed 2026-10-20. Page cite `[2]`.
S3. What is Azure Cache for Redis? — Microsoft Learn — https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview — accessed 2026-10-20. Page cite `[3]`.
S4. RFC 7519: JSON Web Token (JWT) — IETF — https://www.rfc-editor.org/rfc/rfc7519.html — accessed 2026-10-20. Page cite `[4]`.
S5. Edit target group attributes for your Application Load Balancer (section "Sticky sessions") — AWS Documentation — https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html — accessed 2026-10-20. Page cite `[5]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A session is unique user data that persists between requests | S1 | "A session is unique data for users that persists between requests while they use the application." |
| 2 | A stateless application needs no knowledge of previous interactions and stores no session information | S1 | "A stateless application is an application that does not need knowledge of previous interactions and does not store session information." |
| 3 | Offload state so there is no dependence on local disk or memory; servers can then be replaced at will | S1 | "should offload state such that between different client requests, there is no dependence on locally stored data on disk and in memory. This allows servers to be replaced at will without causing an availability impact." |
| 4 | Stateless apps scale horizontally because any compute resource can serve any request | S1 | "they can scale horizontally because any of the available compute resources (such as EC2 instances and AWS Lambda functions) can service any request." |
| 5 | Stateless apps tolerate the failure of one node | S1 | "Stateless applications allow horizontal scaling and are tolerant to the failure of an individual node." |
| 6 | Offload session data to a database, cache, or external files | S1 | "Offload session data to a database, cache, or external files." |
| 7 | Use S3 for large unstructured data such as images and documents | S1 | "Consider using Amazon S3 to store large, unstructured data, such as images and documents." |
| 8 | Once stateless, you can use serverless compute such as AWS Lambda or AWS Fargate | S1 | "Once designed to be stateless, you can then use serverless compute services, such as AWS Lambda or AWS Fargate." |
| 9 | Redis (Azure Cache for Redis) can be a session store | S3 | "Azure Cache for Redis can be used as a distributed data or content cache, a session store, a message broker, and more." |
| 10 | Session store pattern: the cookie is the key to look up the data | S3 | "A typical solution uses the cookie as a key to query the data in a database." |
| 11 | JWT: a compact, URL-safe way to carry claims between two parties | S4 | "JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties." |
| 12 | JWT claims can be digitally signed or protected with a MAC | S4 | "enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted." |
| 13 | After the "exp" time, a JWT must not be accepted | S4 | "The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing." |
| 13a | When a JWT is validated, a failed step means the JWT must be rejected; a JWS is validated with the JWS steps | S4 | "If any of the listed steps fail, then the JWT MUST be rejected" / "If the JWT is a JWS, follow the steps specified in [JWS] for validating a JWS." |
| 14 | Stickiness (session affinity): requests from one client always go to the same server | S2 | "Stickiness, or session affinity , is when requests from the same client are always routed to the same server." |
| 15 | Stickiness limits scale-out; a cause is session state in memory | S2 | "Stickiness limits the application's ability to scale out." / "Causes of stickiness include storing session state in memory" |
| 16 | Any instance must be able to handle any request | S2 | "Make sure that any instance can handle any request." |
| 17 | Move heavy CPU or I/O tasks to background jobs | S2 | "Tasks that require high CPU or I/O resources should be moved to background jobs when possible, to minimize the load on the front end that handles user requests." |
| 18 | On scale-in, listen for shutdown events and shut down cleanly | S2 | "Listen for shutdown events (when available) and shut down cleanly." |
| 19 | ALB sticky sessions bind a user's session to one target | S5 | "you can use the sticky session feature (also known as session affinity) to enable the load balancer to bind a user's session to a specific target." |
| 20 | Sticky sessions are useful for servers that keep state | S5 | "This feature is useful for servers that maintain state information in order to provide a continuous experience to clients." |

## Owner claims with no public source

- "Running the same cron job on multiple servers and creating duplicate work." Kept as the tutorial's own advice, with no cite.
- "Using sticky sessions to hide weak architecture." This is the owner's opinion. The page keeps it as advice. The facts around it (what stickiness is, that it limits scale-out) have cites S2 and S5.
