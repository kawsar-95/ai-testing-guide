# Message Queue and Async Processing (Architecture module, topic 15) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl` on 2026-10-20 and converted to plain text in the scratch folder of the session. No fetched text is committed. Each quote below is copied from that text.

Base text: the owner's notes, section "Message Queue and Async Processing" (`architecture-owner-notes.md`). The certificate example and the tester tips are the tutorial's own words.

## Sources

S1. What is a Message Queue? — AWS — https://aws.amazon.com/message-queue/ — accessed 2026-10-20
S2. Queue-Based Load Leveling pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling — accessed 2026-10-20
S3. Asynchronous Request-Reply pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply — accessed 2026-10-20
S4. Amazon SQS visibility timeout — AWS docs (Amazon SQS Developer Guide) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html — accessed 2026-10-20
S5. Amazon SQS at-least-once delivery — AWS docs (Amazon SQS Developer Guide) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues-at-least-once-delivery.html — accessed 2026-10-20
S6. Using dead-letter queues in Amazon SQS — AWS docs (Amazon SQS Developer Guide) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html — accessed 2026-10-20
S7. Available CloudWatch metrics for Amazon SQS — AWS docs (Amazon SQS Developer Guide) — https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A message queue is asynchronous communication; messages stay until processed and deleted | S1 | "A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures. Messages are stored on the queue until they are processed and deleted." |
| 2 | Producer adds a message; consumer retrieves it and does something with it | S1 | "To send a message, a component called a producer adds a message to the queue. The message is stored on the queue until another component called a consumer retrieves the message and does something with it." |
| 3 | Each message is processed once, by a single consumer (point-to-point) | S1 | "Each message is processed only once, by a single consumer." |
| 4 | Queues decouple heavy work, buffer or batch work, and smooth spiky workloads | S1 | "Message queues can be used to decouple heavyweight processing, to buffer or batch work, and to smooth spiky workloads." |
| 5 | The queue is a buffer; the service works at its own pace | S2 | "The queue decouples the tasks from the service so that the service can handle the messages at its own pace even when concurrent tasks generate a high volume of requests." |
| 6 | Tasks can keep posting messages when the service is down | S2 | "The application can continue to post messages to the queue even when the service isn't available or isn't currently processing messages." |
| 7 | The API returns HTTP 202 Accepted at once for long work | S3 | "It returns an HTTP 202 (Accepted) status code to acknowledge that it received the request for processing." |
| 8 | The response points to a status endpoint that the client can poll | S3 | "The response includes a location reference that points to an endpoint that the client can poll to check the result of the long-running operation." |
| 9 | The status endpoint shows the current state of the work | S3 | "While the work is in progress, the status endpoint returns a resource that indicates that state." |
| 10 | A received message is hidden from other consumers for the visibility timeout | S4 | "When you receive a message from an Amazon SQS queue, it remains in the queue but becomes temporarily invisible to other consumers." |
| 11 | If the worker crashes before it deletes the message, the message becomes visible again | S4 | "If you don't process and delete a message before the visibility timeout expires—due to application errors, crashes, or connectivity problems—the message becomes visible again in the queue." |
| 11b | Set the timeout to fit the processing time: long enough to stop duplicate work, not so long that retries come late | S4 | "Set an appropriate visibility timeout for messages that require extended processing time. This ensures that other consumers don't pick up the same message while it's being processed, preventing duplicate work" / "setting the visibility timeout too high can delay the reappearance of unprocessed messages, potentially slowing down retries." |
| 12 | SQS standard queues: on rare occasions a consumer can get the same message again; design to be idempotent | S5 | "On rare occasions, one of the servers that stores a copy of a message might be unavailable when you receive or delete a message." / "you might get that message copy again when you receive messages. Design your applications to be idempotent (they should not be affected adversely when processing the same message more than once)." |
| 13 | A dead-letter queue holds messages that fail; useful for debugging | S6 | "Amazon SQS supports dead-letter queues (DLQs), which source queues can target for messages that are not processed successfully. DLQs are useful for debugging your application because you can isolate unconsumed messages to determine why processing did not succeed." |
| 14 | maxReceiveCount: receives before the move to the DLQ | S6 | "The maxReceiveCount is the number of times a consumer can receive a message from a source queue before it is moved to a dead-letter queue." |
| 15 | Queue metrics: messages waiting, age of the oldest message | S7 | "ApproximateNumberOfMessagesVisible" / "The number of messages currently available for retrieval and processing." / "ApproximateAgeOfOldestMessage" / "The age of the oldest unprocessed message in the queue." |

## Owner claims without an outside source

- The list of use cases (email, SMS, PDF generation, image resize, payment post-processing, analytics, notification) is the owner's list. It is not a claim about a product, so it has no cite.
- The certificate times (20–30 s) are the owner's example. No cite.
- None of the owner's claims was left out.
