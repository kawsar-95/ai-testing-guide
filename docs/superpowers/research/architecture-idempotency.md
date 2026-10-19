# Idempotency (Architecture module, topic 16) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl` on 2026-10-20 and converted to plain text in the scratch folder of the session. No fetched text is committed. Each quote below is copied from that text. The AWS Builders' Library URL (`aws.amazon.com/builders-library/making-retries-safe-with-idempotent-apis/`) now redirects (HTTP 301) to the AWS Builder Center URL in S5.

Base text: the owner's notes, section "Idempotency" (`architecture-owner-notes.md`). The payment callback example and the tester tips are the tutorial's own words.

## Sources

S1. RFC 9110: HTTP Semantics (section 9.2.2, Idempotent Methods) — IETF — https://www.rfc-editor.org/rfc/rfc9110.html#name-idempotent-methods — accessed 2026-10-20
S2. Idempotent (Glossary) — MDN Web Docs — https://developer.mozilla.org/en-US/docs/Glossary/Idempotent — accessed 2026-10-20
S3. Idempotent requests — Stripe API Reference — https://docs.stripe.com/api/idempotent_requests — accessed 2026-10-20
S4. Receive Stripe events in your webhook endpoint — Stripe docs — https://docs.stripe.com/webhooks — accessed 2026-10-20
S5. Making retries safe with idempotent APIs — Amazon Builders' Library (AWS Builder Center) — https://builder.aws.com/content/3Ev0BENTyBr0XxzRk5FDZzgNYos/making-retries-safe-with-idempotent-apis — accessed 2026-10-20
S6. Constraints (5.5) — PostgreSQL 18 documentation — https://www.postgresql.org/docs/current/ddl-constraints.html — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Idempotent: many identical requests have the same intended effect as one | S1 | "A request method is considered "idempotent" if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request." |
| 2 | An idempotent operation can be retried with no extra side effects | S5 | "An idempotent operation is one where a request can be retransmitted or retried with no additional side effects, a property that is very beneficial in distributed systems." |
| 3 | PUT, DELETE, and safe methods (GET is safe) are idempotent | S1 | "Of the request methods defined by this specification, PUT, DELETE, and safe request methods are idempotent." / (section 9.2.1) "Of the request methods defined by this specification, the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe." |
| 4 | POST and PATCH are not guaranteed to be idempotent | S2 | "The POST and PATCH methods are not guaranteed to be idempotent." |
| 5 | A client should not auto-retry a non-idempotent request unless it knows it is safe | S1 | "A client SHOULD NOT automatically retry a request with a non-idempotent method unless it has some means to know that the request semantics are actually idempotent" |
| 6 | Webhook endpoints can receive the same event more than once | S4 | "Webhook endpoints might occasionally receive the same event more than once." |
| 7 | Guard against duplicates: log processed event IDs, skip logged ones | S4 | "You can guard against duplicated event receipts by logging the event IDs you've processed, and then not processing already-logged events." |
| 8 | Idempotency key: a unique key from the client so the server knows retries | S3 | "A client generates an idempotency key, which is a unique key that the server uses to recognize subsequent retries of the same request." |
| 9 | Stripe suggests V4 UUIDs for keys | S3 | "we suggest using V4 UUIDs, or another random string with enough entropy to avoid collisions." |
| 10 | Stripe saves the first result and returns it for retries with the same key (API v1) | S3 | "For API v1, Stripe saves the status code and body of the first request made with a given idempotency key after endpoint execution begins. Retries with the same key return the saved response, including 500 errors." |
| 11 | Stripe errors if the same key comes with different parameters | S3 | "The idempotency layer compares incoming parameters to those of the original request and errors if they're not the same to prevent accidental misuse." |
| 12 | AWS: a unique caller-provided client request identifier | S5 | "At Amazon, our preferred approach is to incorporate a unique caller-provided client request identifier into our API contract." |
| 13 | Record the token and do the changes in one atomic (ACID) step | S5 | "the process that combines recording the idempotent token and all mutating operations related to servicing the request must meet the properties for an atomic, consistent, isolated, and durable (ACID) operation." |
| 14 | A unique constraint keeps a column unique among all rows | S6 | "Unique constraints ensure that the data contained in a column, or a group of columns, is unique among all the rows in the table." |
| 15 | Stripe retries a delivery when the endpoint replied with a non-2xx code | S4 | "If Stripe retries an event (for example, your endpoint previously replied with a non-2xx status code), then we generate a new signature and timestamp for the new delivery attempt." |
| 16 | Stripe retries for up to three days in live mode | S4 | "Stripe attempts to deliver events to your destination for up to three days with an exponential back off in live mode." |

## Owner claims without an outside source

- "Only disabling the frontend button" is the tutorial's own advice. No cite.
- The list of places that need idempotency (orders, wallet, enrollment, commission, certificate, notification retry) is the owner's list. No cite.
- "Returning error for duplicate webhook, causing the gateway to retry again": the general rule is supported by S4 (claims 15, 16) for Stripe. The page says that this is how Stripe behaves and that other gateways have their own rules.
