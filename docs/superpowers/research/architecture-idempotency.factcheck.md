# Fact-check: Idempotency (round 1, 2026-10-20)

An independent agent checked the page. It fetched each source with `curl` on 2026-10-20 (RFC 9110 as `.txt` from rfc-editor.org) and searched the plain text. No fetched text is committed. The sources are an IETF RFC, MDN, Stripe docs, the PostgreSQL docs, and the Amazon Builders' Library. The Builders' Library is written by Amazon and published by AWS, so it counts as vendor docs, not a blog. Each source has at least 1 cite, and each cite number has a source. The page had 2 FAILs. Both are fixed.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Many identical requests have the same intended effect as one | 1 | PASS | "A request method is considered "idempotent" if the intended effect on the server of multiple identical requests with that method is the same as the effect for a single such request." |
| 2 | In plain words | Retry with no extra side effects | 5 | PASS | "An idempotent operation is one where a request can be retransmitted or retried with no additional side effects" |
| 3 | In plain words | `GET`, `PUT`, `DELETE` are idempotent by definition | 1 | PASS | "PUT, DELETE, and safe request methods are idempotent." / "the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe." |
| 4 | In plain words | `POST` and `PATCH` are not guaranteed to be idempotent | 2 | PASS | "The POST and PATCH methods are not guaranteed to be idempotent." |
| 5 | In plain words | A client should not auto-retry a non-idempotent request unless it knows it is safe | 1 | PASS | "A client SHOULD NOT automatically retry a request with a non-idempotent method unless it has some means to know that the request semantics are actually idempotent" |
| 6 | In plain words | "duplicate requests are normal, not rare" | – | FAIL→fixed | No source. S4 says "occasionally", which conflicts with "not rare". Now "In a distributed system, you must expect duplicate requests. They can come from many places:" |
| 7 | In plain words (list) | A Stripe webhook endpoint can get the same event more than once | 4 | PASS | "Webhook endpoints might occasionally receive the same event more than once." |
| 8 | Tools table | Client makes a unique key; server uses it to spot retries | 3 | PASS | "A client generates an idempotency key, which is a unique key that the server uses to recognize subsequent retries of the same request." |
| 9 | Tools table | Stripe suggests a random V4 UUID | 3 | PASS | "we suggest using V4 UUIDs, or another random string with enough entropy to avoid collisions." |
| 10 | Tools table | AWS: client request identifier | 5 | PASS | "our preferred approach is to incorporate a unique caller-provided client request identifier into our API contract." |
| 11 | Tools table | Stripe: log processed event IDs and skip logged ones | 4 | PASS | "You can guard against duplicated event receipts by logging the event IDs you've processed, and then not processing already-logged events." |
| 12 | Tools table | Unique constraint keeps a column unique among all rows | 6 | PASS | "Unique constraints ensure that the data contained in a column, or a group of columns, is unique among all the rows in the table." |
| 13 | Tools table | Status check | – | PASS | Tutorial advice. No cite needed. |
| 14 | In plain words | Stripe saves the first status code and body and returns it for retries | 3 | FAIL→fixed | The source limits this to API v1 (API v2 behaves differently). Now "In its API v1, Stripe saves …". Quote: "For API v1, Stripe saves the status code and body of the first request made with a given idempotency key after endpoint execution begins. Retries with the same key return the saved response, including 500 errors." |
| 15 | In plain words | Same key with different data → Stripe error | 3 | PASS | "The idempotency layer compares incoming parameters to those of the original request and errors if they're not the same" |
| 16 | A real-life example | `TX123` callback flow | – | PASS | Tutorial example. No cite needed. |
| 17 | A real-life example | Recording the token and the changes must be atomic | 5 | PASS | "the process that combines recording the idempotent token and all mutating operations related to servicing the request must meet the properties for an atomic, consistent, isolated, and durable (ACID) operation." / "An ACID server-side operation needs to be an "all or nothing" or atomic process." |
| 18 | Common mistakes | The unique constraint stops the second insert | 6 | PASS | Same quote as row 12. |
| 19 | Common mistakes | Stripe retries a delivery after a non-2xx answer | 4 | PASS | "If Stripe retries an event (for example, your endpoint previously replied with a non-2xx status code), then we generate a new signature and timestamp for the new delivery attempt." |
| 20 | Common mistakes | Stripe retries for up to three days in live mode | 4 | PASS | Current docs (fetched 2026-10-20): "Stripe attempts to deliver events to your destination for up to three days with an exponential back off in live mode." The page says "for up to three days in live mode". It does not mention the sandbox rule ("three times over the course of a few hours"), so it makes no wrong claim about it. |
| 21 | Common mistakes | Disabling the button; retries without idempotency; no ID | – | PASS | Tutorial advice. No cite needed. |
| 22 | What a tester can check | Test tips | – | PASS | Tutorial advice callout. No cite needed. |
| 23 | Key words | Definitions | – | PASS | Each definition agrees with the cited text above. |

## Fixes

1. Replaced "duplicate requests are normal, not rare" with "you must expect duplicate requests" (row 6).
2. Scoped the saved-response rule to Stripe API v1 (row 14). The notes already had the API v1 quote, so the notes did not change.

Open FAILs: 0
