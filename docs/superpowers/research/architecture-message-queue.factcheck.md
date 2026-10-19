# Fact-check: Message Queue and Async Processing (round 1, 2026-10-20)

An independent agent checked the page. It fetched each source with `curl` on 2026-10-20 and searched the plain text. No fetched text is committed. All 7 sources are official vendor docs (AWS, Microsoft Learn). Each source has at least 1 cite, and each cite number has a source. The page had 3 FAILs. All 3 are fixed.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | A queue lets parts talk without waiting: asynchronous | – | FAIL→fixed | A definition with no cite. Now "This is called asynchronous (async) communication [1]." Quote: "A message queue is a form of asynchronous service-to-service communication" |
| 2 | In plain words | A message stays until processed and deleted | 1 | PASS | "Messages are stored on the queue until they are processed and deleted." |
| 3 | In plain words | Producer adds; consumer takes and does the job | 1 | PASS | "a component called a producer adds a message to the queue. The message is stored on the queue until another component called a consumer retrieves the message and does something with it." |
| 4 | In plain words | Each message goes to one consumer | 1 | PASS | "each message is processed only once, by a single consumer." |
| 5 | In plain words | Common jobs (email, SMS, PDF, …) | – | PASS | The owner's list. No product claim. |
| 6 | Benefits | API can answer `202 Accepted` at once | 3 | PASS | "It returns an HTTP 202 (Accepted) status code to acknowledge that it received the request for processing." |
| 7 | Benefits | The answer points to a status endpoint to poll | 3 | PASS | "The response includes a location reference that points to an endpoint that the client can poll to check the result of the long-running operation." |
| 8 | Benefits | Workers handle messages at their own pace | 2 | PASS | "the service can handle the messages at its own pace even when concurrent tasks generate a high volume of requests." |
| 9 | Benefits | Queues smooth spiky workloads | 1 | PASS | "to smooth spiky workloads." |
| 10 | Benefits | API keeps adding jobs when the service is down | 2 | PASS | "The application can continue to post messages to the queue even when the service isn't available" |
| 11 | In plain words | A received SQS message is hidden for the visibility timeout | 4 | PASS | "When you receive a message from an Amazon SQS queue, it remains in the queue but becomes temporarily invisible to other consumers. This invisibility is controlled by the visibility timeout" |
| 12 | In plain words | "If the worker crashes before it deletes the message, the message becomes visible again" | 4 | FAIL→fixed | Left out that this happens when the timeout ends. Now "If the worker does not delete the message before the visibility timeout ends, for example because it crashed, the message becomes visible again". Quote: "If you don't process and delete a message before the visibility timeout expires—due to application errors, crashes, or connectivity problems—the message becomes visible again in the queue." |
| 13 | In plain words | SQS: you can get the same message copy again; be idempotent | 5 | FAIL→fixed | The page left out that this is the standard-queue, rare-case behavior. Now "For SQS standard queues, AWS also says that, on rare occasions, you can get the same message copy again." Quote: "On rare occasions, one of the servers that stores a copy of a message might be unavailable … you might get that message copy again" / "Design your applications to be idempotent" |
| 14 | In plain words | A DLQ holds failed messages, to find out why | 6 | PASS | "DLQs are useful for debugging your application because you can isolate unconsumed messages to determine why processing did not succeed." |
| 15 | In plain words | `maxReceiveCount` sets receives before the move to the DLQ | 6 | PASS | "The maxReceiveCount is the number of times a consumer can receive a message from a source queue before it is moved to a dead-letter queue." |
| 16 | A real-life example | 202 then status polls | – | PASS | Tutorial example. Agrees with S3 ("For every successful call to the status endpoint, the endpoint returns HTTP 200 (OK).") |
| 17 | Common mistakes | Give each job a status the client can check | 3 | PASS | "While the work is in progress, the status endpoint returns a resource that indicates that state." |
| 18 | Common mistakes | A message can arrive more than once | 5 | PASS | "you might get that message copy again when you receive messages." |
| 19 | Common mistakes | A DLQ isolates a bad message | 6 | PASS | "you can isolate unconsumed messages" |
| 20 | Common mistakes | Too short a timeout: duplicate work; too long: late retries | 4 | PASS | "This ensures that other consumers don't pick up the same message while it's being processed, preventing duplicate work" / "setting the visibility timeout too high can delay the reappearance of unprocessed messages, potentially slowing down retries." |
| 21 | Common mistakes | Watch waiting messages and age of oldest message | 7 | PASS | "ApproximateNumberOfMessagesVisible The number of messages currently available for retrieval and processing." / "ApproximateAgeOfOldestMessage The age of the oldest unprocessed message in the queue." |
| 22 | What a tester can check | Test tips | – | PASS | Tutorial advice callout. No cite needed. |
| 23 | Key words | Definitions (202, visibility timeout, DLQ) | – | PASS | Agree with the cited text. 202 also agrees with RFC 9110: "the request has been accepted for processing, but the processing has not been completed." |

## Fixes

1. Added cite S1 to the async definition (row 1).
2. Added "before the visibility timeout ends" to the crash sentence (row 12).
3. Scoped the duplicate-message sentence to SQS standard queues and "rare occasions" (row 13).
4. Notes: claim 12 now has the "rare occasions" quote.

Open FAILs: 0
