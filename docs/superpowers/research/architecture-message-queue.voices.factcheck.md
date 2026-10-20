# Voice fact-check: Message Queue and Async Processing (round 1, 2026-10-20)

Page: `content/architecture/message-queue.mdx`. I did not write this page.

Method: I read the 5 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a version, a command, a path, a product name, a scope, or a condition, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same n, and that the cited source supports the claim that the Technical panel makes with it. I read the Bangla text for meaning and natural use: polite form (আপনি), technical terms in English, a hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Notes:

- Layman, "In plain words", SQS paragraph: "Your app must be idempotent [5]" drops the Technical condition "For SQS standard queues ... on rare occasions, you can get the same message copy again". The sentence stays inside the "In Amazon SQS" paragraph, and cite 5 is the same. The scope is still SQS. PASS, row 12. The Bangla panel keeps the condition (row 29).
- Layman and Bangla do not give the Technical gloss "safe when it processes the same message twice" for "idempotent". An omission, not a FAIL. See the language notes.
- Bangla, "In plain words": the 202 Accepted sentence has no cite, and the cite [3] stands after the next sentence. The Technical panel cites [3] on both sentences. PASS, rows 22 and 23.
- "What a tester can check": the Layman and Bangla panels start with "the tutorial's own advice" and repeat the 6 ideas with no cites. PASS.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | Two parts of a system talk and do not wait for each other; this is async communication [1] | "lets two parts of a system talk without waiting for each other. This is called asynchronous (async) communication [1]" | PASS | - |
| 2 | In plain words | Layman | A message stays in the queue until a worker processes and deletes it [1] | "A message stays in the queue until a worker processes it and deletes it [1]" | PASS | - |
| 3 | In plain words | Layman | The producer adds a message | "The **producer** adds a message to the queue." | PASS | - |
| 4 | In plain words | Layman | The consumer (the worker) takes it and does the job [1] | "The **consumer**, often called a worker, takes the message and does the job [1]" | PASS | - |
| 5 | In plain words | Layman | A queue gives three benefits | "A queue gives three benefits:" | PASS | - |
| 6 | In plain words | Layman | Fast answers: the API does not wait for slow work | "The API does not wait for the slow job." | PASS | - |
| 7 | In plain words | Layman | For long work, the API can answer `202 Accepted` at once and point to a status endpoint for the client [3] | "For long work, the API can answer `202 Accepted` at once [3]. The answer points to a status endpoint that the client can check again later [3]." | PASS ("check again later" omitted) | - |
| 8 | In plain words | Layman | Smooth peaks: workers handle messages at their own pace, even in a burst of requests [2] | "Workers handle messages at their own pace, even when many requests arrive at once [2]." | PASS | - |
| 9 | In plain words | Layman | Safe from a slow service: the API can add jobs when the worker or the service behind it is down [2] | "The API can keep adding jobs even when the worker or the service behind it is down [2]." | PASS | - |
| 10 | In plain words | Layman | In Amazon SQS, if a worker does not delete a message before the visibility timeout ends, another worker can try again [4] | "If the worker does not delete the message before the visibility timeout ends ... the message becomes visible again, and another worker can try [4]." | PASS | - |
| 11 | In plain words | Layman | So a job can run more than once | "So a job can run more than once." | PASS | - |
| 12 | In plain words | Layman | Your app must be idempotent [5] | "For SQS standard queues, AWS also says that, on rare occasions, you can get the same message copy again. So your app must be idempotent ... [5]" | PASS (the "standard queues" condition is dropped, see notes) | Note: "idempotent" has no gloss |
| 13 | In plain words | Layman | A dead-letter queue (DLQ) keeps apart the messages that a worker cannot process [6] | "A **dead-letter queue** (DLQ) is a side queue for messages that the worker cannot process [6]. It keeps them apart ... [6]" | PASS | - |
| 14 | In plain words | Bangla | Message queue lets two parts of a system talk without waiting for each other; this is called async communication [1] | "lets two parts of a system talk without waiting for each other. This is called asynchronous (async) communication [1]" | PASS | OK |
| 15 | In plain words | Bangla | A message stays in the queue until a worker processes it and deletes it [1] | "A message stays in the queue until a worker processes it and deletes it [1]" | PASS | OK |
| 16 | In plain words | Bangla | The producer adds a message to the queue | "The **producer** adds a message to the queue." | PASS | OK |
| 17 | In plain words | Bangla | The consumer, often called a worker, takes the message and does the job [1] | "The **consumer**, often called a worker, takes the message and does the job [1]" | PASS | OK |
| 18 | In plain words | Bangla | In a simple queue, each message goes to one consumer [1] | "In a simple queue, each message goes to one consumer [1]." | PASS | OK |
| 19 | In plain words | Bangla | Common jobs: email, SMS, PDF generation, image resize, payment post-processing, analytics update, notification | "Common jobs are email, SMS, PDF generation, image resize, payment post-processing, analytics updates, and notifications." | PASS (same 7 items, no cite on either side) | OK |
| 20 | In plain words | Bangla | A queue has three benefits | "A queue gives three benefits:" | PASS | OK |
| 21 | In plain words | Bangla | Fast answers: the API does not wait for slow work | "The API does not wait for the slow job." | PASS | OK |
| 22 | In plain words | Bangla | For long work, the API can answer `202 Accepted` at once | "For long work, the API can answer `202 Accepted` at once [3]." | PASS (see notes: cite on the next sentence) | OK |
| 23 | In plain words | Bangla | The answer shows a status endpoint that the client can check again later [3] | "The answer points to a status endpoint that the client can check again later [3]." | PASS | OK |
| 24 | In plain words | Bangla | Smooth peaks: the queue is a buffer; workers process messages at their own pace even when many requests arrive at once [2] | "The queue is a buffer. Workers handle messages at their own pace, even when many requests arrive at once [2]." | PASS | OK |
| 25 | In plain words | Bangla | Safe from a slow service: the API can add jobs even when the worker or the service behind it is down [2] | "The API can keep adding jobs even when the worker or the service behind it is down [2]." | PASS | OK |
| 26 | In plain words | Bangla | In Amazon SQS, a worker that receives a message makes it invisible to other workers for a time, named the visibility timeout | "In Amazon SQS, a worker that receives a message makes it invisible to other workers for a time, the visibility timeout [4]." | PASS (the Bangla sentence has no cite; the next sentence cites [4]) | OK |
| 27 | In plain words | Bangla | If the worker does not delete the message in this time (for example, it crashes), the message becomes visible again, and another worker can try [4] | "If the worker does not delete the message before the visibility timeout ends, for example because it crashed, the message becomes visible again, and another worker can try [4]." | PASS | OK |
| 28 | In plain words | Bangla | So a job can run more than once | "So a job can run more than once" | PASS | OK |
| 29 | In plain words | Bangla | In SQS standard queues, on rare occasions the same message copy can come again, so your app must be idempotent [5] | "For SQS standard queues, AWS also says that, on rare occasions, you can get the same message copy again. So your app must be idempotent ... [5]" | PASS | Note: "idempotent" has no gloss |
| 30 | In plain words | Bangla | A message that fails again and again stays apart in a dead-letter queue (DLQ) [6] | "Some messages fail every time ... A **dead-letter queue** (DLQ) is a side queue for messages that the worker cannot process [6]. It keeps them apart ... [6]" | PASS | OK |
| 31 | In plain words | Bangla | In SQS, `maxReceiveCount` sets how many times a message can be received before it goes to the DLQ [6] | "In SQS, `maxReceiveCount` sets how many times a worker can receive a message before it moves to the DLQ [6]." | PASS | OK |
| 32 | When you need it | Layman | A task is slow or takes a long time | "A task is slow or long-running." | PASS | - |
| 33 | When you need it | Layman | An external service is slow or not reliable | "An external service is slow or unreliable." | PASS | - |
| 34 | When you need it | Layman | The user should get a fast answer from the API | "The user should get a fast API response." | PASS | - |
| 35 | When you need it | Layman | The task needs retries | "The task needs retries." | PASS | - |
| 36 | When you need it | Layman | Heavy tasks should run in the background | "Heavy tasks should run in the background." | PASS | - |
| 37 | When you need it | Layman | You want to smooth out the peaks of traffic | "You want to smooth out peak traffic." | PASS | - |
| 38 | When you need it | Bangla | A task is slow, or runs for a long time | "A task is slow or long-running." | PASS | OK |
| 39 | When you need it | Bangla | An external service is slow or unreliable | "An external service is slow or unreliable." | PASS | OK |
| 40 | When you need it | Bangla | The user should get a fast API response | "The user should get a fast API response." | PASS | OK |
| 41 | When you need it | Bangla | The task needs a retry | "The task needs retries." | PASS | OK |
| 42 | When you need it | Bangla | Heavy tasks should run in the background | "Heavy tasks should run in the background." | PASS | OK |
| 43 | When you need it | Bangla | You want to smooth out peak traffic | "You want to smooth out peak traffic." | PASS | OK |
| 44 | When you need it | Bangla | A message queue is useful in any of these situations | the 6 bullets of the Technical panel | PASS ("যেকোনো" = any of the 6; the list is a list of separate cases) | OK |
| 45 | A real-life example | Layman | A student clicks Generate Certificate | "A student clicks **Generate Certificate**." | PASS | - |
| 46 | A real-life example | Layman | Bad design: the request waits 20 to 30 seconds; the server makes the PDF, uploads it, sends the email | "The request waits 20 to 30 seconds. In that time the server makes the PDF, uploads it, and sends the email." | PASS (same numbers) | - |
| 47 | A real-life example | Layman | If the browser times out, the student clicks again and gets two certificates | "If the browser times out, the student clicks again and gets two certificates." | PASS | - |
| 48 | A real-life example | Layman | Better design: the API puts a job in the queue and answers at once | "The API puts a job in the queue and answers at once" | PASS | - |
| 49 | A real-life example | Layman | `POST /certificates` answers `202 Accepted`, job ID `c-981`, status `processing` | "POST /certificates -> 202 Accepted, { \"jobId\": \"c-981\", \"status\": \"processing\" }" | PASS | - |
| 50 | A real-life example | Layman | `GET /certificates/c-981` answers `200 OK` with `processing`, later `done` and a URL | "GET /certificates/c-981 -> 200 OK, { \"status\": \"processing\" }" and "-> 200 OK, { \"status\": \"done\", \"url\": \"...\" }" | PASS | - |
| 51 | A real-life example | Layman | A worker makes the PDF, uploads it to object storage, sends the email, and sets the status to `done`; until then the page shows "Processing" | "A worker makes the PDF, uploads it to object storage, sends the email, and sets the status to `done`. The page shows \"Processing\" until then." | PASS | - |
| 52 | A real-life example | Bangla | A student clicks Generate Certificate | "A student clicks **Generate Certificate**." | PASS | OK |
| 53 | A real-life example | Bangla | Bad design: the request waits 20 to 30 seconds; the server makes the PDF, uploads, sends the email | "The request waits 20 to 30 seconds. In that time the server makes the PDF, uploads it, and sends the email." | PASS (same numbers) | OK |
| 54 | A real-life example | Bangla | If the browser times out, the student clicks again and gets two certificates | "If the browser times out, the student clicks again and gets two certificates." | PASS | OK |
| 55 | A real-life example | Bangla | Better design: the API puts a job in the queue and answers at once | "The API puts a job in the queue and answers at once" | PASS | OK |
| 56 | A real-life example | Bangla | The answer to `POST /certificates` is `202 Accepted`, job ID `c-981`, status `processing` | "POST /certificates -> 202 Accepted, { \"jobId\": \"c-981\", \"status\": \"processing\" }" | PASS | OK |
| 57 | A real-life example | Bangla | The client asks `GET /certificates/c-981`; the answer is `200 OK` with `processing`, later `done` and a URL | "GET /certificates/c-981 -> 200 OK ..." (two lines) | PASS | OK |
| 58 | A real-life example | Bangla | A worker makes the PDF, uploads to object storage, sends the email, sets the status to `done`; until then the page shows "Processing" | "A worker makes the PDF, uploads it to object storage, sends the email, and sets the status to `done`. The page shows \"Processing\" until then." | PASS | OK |
| 59 | Common mistakes | Layman | No job status for the user: the user clicks, sees nothing, clicks again; give each job a status the client can check [3] | "The user clicks, sees nothing, and clicks again. Give each job a status that the client can check [3]." | PASS | - |
| 60 | Common mistakes | Layman | Retries on a job that is not safe to repeat; a message can arrive more than once [5] | "A message can arrive more than once [5]." | PASS | - |
| 61 | Common mistakes | Layman | If the job is not idempotent, the student gets two emails or two certificates | "Without idempotency, the student gets two emails or two certificates." | PASS | - |
| 62 | Common mistakes | Layman | No DLQ: a bad message fails, comes back, fails again; wastes worker time, hides the real error; a DLQ keeps it apart [6] | "A bad message fails, comes back, and fails again. It wastes worker time and hides the real error. A DLQ isolates it [6]." | PASS | - |
| 63 | Common mistakes | Layman | Visibility timeout too short: a second worker starts the same job while the first is busy; too long: retries come late [4] | "If the visibility timeout is too short, a second worker starts the same job while the first one is still busy. If it is too long, retries come late [4]." | PASS | - |
| 64 | Common mistakes | Layman | No queue monitoring: watch the number of waiting messages and the age of the oldest message [7]; if the queue grows, the workers cannot keep up | "Watch the number of waiting messages and the age of the oldest message [7]. A growing queue means the workers cannot keep up." | PASS | - |
| 65 | Common mistakes | Bangla | No job status for the user: the user clicks, sees nothing, clicks again; give each job a status the client can check [3] | "The user clicks, sees nothing, and clicks again. Give each job a status that the client can check [3]." | PASS | OK |
| 66 | Common mistakes | Bangla | Retries on a job that is not safe to repeat; a message can arrive more than once [5] | "A message can arrive more than once [5]." | PASS | OK |
| 67 | Common mistakes | Bangla | Without idempotency, the student gets two emails or two certificates | "Without idempotency, the student gets two emails or two certificates." | PASS | OK |
| 68 | Common mistakes | Bangla | No DLQ: a bad message fails, returns, fails again; wastes worker time, hides the real error; a DLQ keeps it apart [6] | "A bad message fails, comes back, and fails again. It wastes worker time and hides the real error. A DLQ isolates it [6]." | PASS | OK |
| 69 | Common mistakes | Bangla | Visibility timeout too short: a second worker starts the same job while the first is busy; too long: retries come late [4] | "If the visibility timeout is too short, a second worker starts the same job while the first one is still busy. If it is too long, retries come late [4]." | PASS | OK |
| 70 | Common mistakes | Bangla | No queue monitoring: watch the number of waiting messages and the age of the oldest message [7]; a growing queue means the workers cannot keep up | "Watch the number of waiting messages and the age of the oldest message [7]. A growing queue means the workers cannot keep up." | PASS | OK |
| 71 | What a tester can check | Layman | These test ideas are the tutorial's own advice | `<Callout type="tip" title="Tutorial advice">` | PASS | - |
| 72 | What a tester can check | Layman | Fast answer: the API answers at once with a job ID and the status "processing", not after the slow work | "Check that the API returns at once with a job ID and a \"processing\" status, not after the slow work." | PASS | - |
| 73 | What a tester can check | Layman | Status flow: ask the status endpoint again and again; check processing, done, failed | "Poll the status endpoint. Check each state: processing, done, and failed." | PASS | - |
| 74 | What a tester can check | Layman | Duplicate message: send the same job two times; one certificate and one email | "Send the same job twice. Check that the student gets one certificate and one email." | PASS | - |
| 75 | What a tester can check | Layman | Worker crash: stop a worker suddenly in the middle of a job; another worker finishes it; no half-made result stays | "Kill a worker in the middle of a job. Check that another worker finishes it and that no half-made result stays." | PASS | - |
| 76 | What a tester can check | Layman | Poison message: a job with bad data goes to the DLQ after the set number of tries; an alert fires | "Send a job with bad data. Check that it lands in the DLQ after the set number of tries and that an alert fires." | PASS | - |
| 77 | What a tester can check | Layman | Backlog: send many jobs at one time; check queue length and age of the oldest message; the queue drains | "Send a burst of jobs. Check the queue length and the age of the oldest message, and check that the queue drains." | PASS | - |
| 78 | What a tester can check | Bangla | These test ideas are the tutorial's own advice | `<Callout type="tip" title="Tutorial advice">` | PASS | OK |
| 79 | What a tester can check | Bangla | Fast answer: the API answers at once with a job ID and the status "processing", not after the slow work | "Check that the API returns at once with a job ID and a \"processing\" status, not after the slow work." | PASS | OK |
| 80 | What a tester can check | Bangla | Status flow: poll the status endpoint; check processing, done, failed | "Poll the status endpoint. Check each state: processing, done, and failed." | PASS | OK |
| 81 | What a tester can check | Bangla | Duplicate message: send the same job twice; one certificate and one email | "Send the same job twice. Check that the student gets one certificate and one email." | PASS | OK |
| 82 | What a tester can check | Bangla | Worker crash: kill a worker in the middle of a job; another worker finishes it; no half-made result stays | "Kill a worker in the middle of a job. Check that another worker finishes it and that no half-made result stays." | PASS | OK |
| 83 | What a tester can check | Bangla | Poison message: a job with bad data goes to the DLQ after the set number of tries; an alert comes | "Send a job with bad data. Check that it lands in the DLQ after the set number of tries and that an alert fires." | PASS | OK |
| 84 | What a tester can check | Bangla | Backlog: send many jobs at once; check queue length and age of the oldest message; the queue drains | "Send a burst of jobs. Check the queue length and the age of the oldest message, and check that the queue drains." | PASS | OK |

Language notes:

- Rows 12 and 29: Layman and Bangla use "idempotent" with no gloss. The Technical panel says "safe when it processes the same message twice". A reader of the plain-English or Bangla text may not know the word. This is an omission, not a FAIL. Optional fix: add "(safe when it processes the same message twice)" and "(একই message দুবার process হলেও নিরাপদ)".
- Row 12: Layman drops "SQS standard queues" before "Your app must be idempotent". Optional fix: write "For SQS standard queues, the same message copy can also come twice, so your app must be idempotent."
- Bangla uses "User" and "শিক্ষার্থী" together in the same section. The meaning is clear. No change needed.

Open FAILs: 0
