# Fact-check: Stateless Service (round 1, 2026-10-20)

I did not write this page. I downloaded each of the 5 sources with `curl -sL` on 2026-10-20 and converted them to plain text in the scratchpad (not committed). I matched each cited sentence of the page against that text. All sources are official (AWS, Microsoft Learn, IETF). Each source has a cite, and each cite has a source. The LMS example, the uncited "Common mistakes" advice, and the tester tips are the tutorial's own words. I found 3 FAILs and fixed them.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | A session is a user's data that stays between requests | 1 | PASS | "A session is unique data for users that persists between requests while they use the application." |
| 2 | In plain words | A stateless app needs no knowledge of earlier requests and keeps no session data | 1 | PASS | "A stateless application is an application that does not need knowledge of previous interactions and does not store session information." |
| 3 | In plain words | No dependence on local disk or memory; replace a server at any time, users do not notice | 1 | PASS | "there is no dependence on locally stored data on disk and in memory. This allows servers to be replaced at will without causing an availability impact." |
| 4 | In plain words | Any server can answer any request, so you can scale horizontally | 1 | PASS | "they can scale horizontally because any of the available compute resources (such as EC2 instances and AWS Lambda functions) can service any request." |
| 5 | Table: Login session | A shared cache or a database | 1 | PASS | "Offload session data to a database, cache, or external files." |
| 6 | Table: Login session | Redis can work as a session store | 3 | PASS | "Azure Cache for Redis can be used as a distributed data or content cache, a session store, a message broker, and more." |
| 7 | Table: Token data | A JWT that the client sends with each request | 4 | FAIL→fixed | RFC 7519 does not say that the client sends the JWT with each request. Now "A JWT, a token that carries claims between two parties". Quote: "JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties." |
| 8 | Table: Uploaded files | Object storage such as Amazon S3 | 1 | PASS | "Consider using Amazon S3 to store large, unstructured data, such as images and documents." |
| 9 | Table: Slow or heavy work | Background jobs | 2 | PASS | "Tasks that require high CPU or I/O resources should be moved to background jobs when possible" |
| 10 | In plain words | The browser keeps only a cookie; the app uses it as a key | 3 | FAIL→fixed | "only" is not in the source. Now "the browser keeps a cookie. The app uses the cookie as a key ...". Quote: "A typical solution uses the cookie as a key to query the data in a database." |
| 11 | In plain words | A JWT is a short, URL-safe string that carries claims | 4 | PASS | "JSON Web Token (JWT) is a compact, URL-safe means of representing claims" / "A JWT is represented as a sequence of URL-safe parts" |
| 12 | In plain words | The claims can be digitally signed | 4 | PASS | "enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted." |
| 13 | In plain words | A server with the key can check the signature and trust the token without a session | 4 | FAIL→fixed | Had no cite. Now "A server that has the key can check the signature. If a check step fails, the server must reject the token [4]. So the server can trust a valid token without a session in its own memory." Quote: "If any of the listed steps fail, then the JWT MUST be rejected" / "If the JWT is a JWS, follow the steps specified in [JWS] for validating a JWS." |
| 14 | In plain words | After `exp`, the server must not accept the token | 4 | PASS | "The \"exp\" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing." |
| 15 | When you need it | Once stateless, run on AWS Lambda or AWS Fargate | 1 | PASS | "Once designed to be stateless, you can then use serverless compute services, such as AWS Lambda or AWS Fargate." |
| 16 | Common mistakes | Session state in memory causes stickiness | 2 | PASS | "Causes of stickiness include storing session state in memory" |
| 17 | Common mistakes | Move high-CPU or high-I/O tasks to background jobs | 2 | PASS | "Tasks that require high CPU or I/O resources should be moved to background jobs when possible, to minimize the load on the front end that handles user requests." |
| 18 | Common mistakes | Sticky session sends all requests of one user to the same server | 5 | PASS | "bind a user's session to a specific target. This ensures that all requests from the user during the session are sent to the same target." |
| 19 | Common mistakes | AWS: useful for servers that keep state | 5 | PASS | "This feature is useful for servers that maintain state information in order to provide a continuous experience to clients." |
| 20 | Common mistakes | Stickiness limits scale-out | 2 | PASS | "Stickiness limits the application's ability to scale out." |
| 21 | What a tester can check | Callout says it is tutorial advice | – | PASS | "These test ideas are the tutorial's own advice." |

## Fixes

- Row 7: the Token data row no longer says that the client sends the JWT with each request. It now uses the RFC definition.
- Row 10: removed "only" from the cookie sentence.
- Row 13: the signature check now has cite 4 (RFC 7519 section 7.2).
- Notes: added claim 13a (JWT validation).

Open FAILs: 0
