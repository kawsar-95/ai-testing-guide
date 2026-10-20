# Voice fact-check: Idempotency (round 1, recheck 1, and recheck 2, 2026-10-20)

Page: `content/architecture/idempotency.mdx`. I did not write this page.

Method: I read the 5 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a version, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n` for the same claim. I read the Bangla text for meaning and for natural use (polite আপনি, hyphen between an English word and a Bangla suffix), and I checked that common technical terms, commands, paths, and product names stay in English. The "Key words" section has no voices.

Recheck 1 (2026-10-20): I read the whole page again and compared every voice row with the current Technical text of the same `##` section. `git diff HEAD` shows all voice text as new (the voices are not committed), so I could not isolate the edited lines and I checked every line. Result:

- Row 13 (the dropped "In its API v1" scope) is fixed. PASS.
- The language fixes of rows 14, 20, and 72 are in the text. All three now read well.
- New FAIL, row 7 (Layman, In plain words): "Expect duplicate requests: ..." drops "In a distributed system" from the Technical sentence "In a distributed system, you must expect duplicate requests." Round 1 missed it. Fix: start the Layman paragraph with "In a distributed system, expect duplicate requests: a double-click on **Pay**, an app that sends again after a network loss, or a queue that gives a job again."
- The cites of every voice panel still match the cites of the Technical panel of the same section (1, 2, 3, 4, 5, 6 in "In plain words"; 6 and 4 in "Common mistakes"; 5 in "A real-life example").
- Rows 87 to 90 are new: one Bangla sentence and three lead-in lines.
- Language note, row 85: see the table.

Recheck 2 (2026-10-20): I read the whole page again. `git diff HEAD` still shows all voice text as new, so I compared every voice row with the current Technical text of the same `##` section, line by line. Result:

- Row 7 (the dropped scope "In a distributed system") is fixed. The Layman paragraph now starts "In a distributed system, expect duplicate requests: ...". PASS. Rows 91 to 93 check its three examples one by one.
- Row 85 (Bangla language note) is fixed. The text now reads "Payment mark করার পরে কিন্তু course unlock করার আগে service-টি থামিয়ে দিন"; there is no repeated "service".
- All other rows are unchanged in the page and still PASS. The `<Cite n>` of every voice panel is a number that the Technical panel of the same section cites: 1, 2, 3, 4, 5, 6 in "In plain words" (Layman: 1, 5, 1, 2, 4, 3, 6, 3; Bangla: 1, 5, 1, 2, 1, 4, 3, 6, 3, 3); 5 in "A real-life example"; 6, 4, 4 in "Common mistakes". "When you need it" and "What a tester can check" have no cites. Each cite follows the claim that its Technical sentence supports.
- No new fact, number, version, command, status code, or product name was found in any Layman or Bangla panel. Names, commands, and status codes (`GET`, `PUT`, `DELETE`, `POST`, `PATCH`, `TX123`, `transaction_id`, `200 OK`, `2xx`, and API v1) are the same as in the Technical text.
- Language: the Bangla text uses আপনি forms, keeps technical terms in English, and joins each English word to its Bangla suffix with a hyphen. No language problem hides or changes the meaning.
- Rows 91 to 93 are new.

Flagged items:

- Section "In plain words", Layman, last paragraph (row 13): in round 1 the Layman sentence dropped "In its API v1". It is fixed now. PASS.
- Section "In plain words", Bangla (row 20): "retry করবে না" in round 1; fixed to "retry করা উচিত নয়".
- Layman and Bangla omit these Technical facts: the V4 UUID, the AWS "client request identifier", the webhook definition, the link to Message Queue, the "even if the code has a bug" remark, and the image. Omissions are not FAILs.
- Section "In plain words", Bangla: "টাকা এক জায়গা থেকে আরেক জায়গায় যাওয়া" explains "money that moves". It adds no new fact.
- Bangla uses "দুবার" for "two times" and "দ্বিগুণ প্রভাব" for "double effect". The meaning is the same.
- Bangla: a hyphen joins each English word to its Bangla suffix everywhere (for example "request-এর", "User-রা", "Non-2xx", "live mode-এ"). Commands, status codes, product names, and technical terms stay in English. The Bangla text uses আপনি forms ("ধরে নিন", "খেয়াল রাখুন", "দিন", "পাঠান").

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | An operation is idempotent when many identical requests have the same intended effect as one [1] | "An operation is idempotent when many identical requests have the same intended effect as one request [1]." | PASS | – |
| 2 | In plain words | Layman | You can retry it, and it causes no extra side effects [5] | "You can retry it with no extra side effects [5]." | PASS | – |
| 3 | In plain words | Layman | A side effect is a change the request causes: a new row, a sent email, money that moves | "A side effect is a change that the request causes, such as a new row, a sent email, or money that moves." | PASS | – |
| 4 | In plain words | Layman | GET, PUT, DELETE are idempotent by definition in HTTP [1] | "In HTTP, GET, PUT, and DELETE are idempotent by definition [1]." | PASS | – |
| 5 | In plain words | Layman | POST and PATCH are not guaranteed to be idempotent [2] | "POST and PATCH are not guaranteed to be idempotent [2]." | PASS | – |
| 6 | In plain words | Layman | "Create a payment" is usually a POST, so the server must make it safe | ""Create a payment" is usually a POST, so the server must make it safe." | PASS | – |
| 7 | In plain words | Layman | "In a distributed system, expect duplicate requests: a double-click on Pay, an app that sends again after a network loss, or a queue that gives a job again." | "In a distributed system, you must expect duplicate requests. ... A user double-clicks the Pay button. A mobile app loses the network and sends the request again. A queue gives the same job to a worker again." | PASS (recheck 1 FAIL, fixed: the scope "In a distributed system" is back at the start of the sentence; "expect" restates "must expect") | OK |
| 8 | In plain words | Layman | Stripe says a webhook endpoint can get the same event more than once [4] | "Stripe, for example, says a webhook endpoint can get the same event more than once [4]." | PASS | – |
| 9 | In plain words | Layman | Tool 1: an idempotency key from the client [3] | "The client makes a unique key and sends it with the request. The server uses it to spot retries [3]." | PASS | – |
| 10 | In plain words | Layman | Tool 2: the gateway's transaction ID | "Transaction ID: The gateway's own ID for one payment, such as TX123." | PASS | – |
| 11 | In plain words | Layman | Tool 3: a unique constraint in the database [6] | "Unique constraint: A database rule that keeps a column unique among all rows [6]." | PASS | – |
| 12 | In plain words | Layman | Tool 4: a status check before the work | "Status check: Before the work, read the current status. If it is already paid, do nothing more." | PASS | – |
| 13 | In plain words | Layman | "In its API v1, Stripe also returns the saved first answer for each retry with the same key [3]." | "In its API v1, Stripe saves the status code and body of the first request and returns the saved answer for each retry with the same key [3]." | PASS (round 1 FAIL, fixed: the scope "In its API v1" is back; the cite [3] is the same) | – |
| 14 | In plain words | Bangla | An operation is called idempotent when the intended result of many identical requests equals the result of one request [1] | "An operation is idempotent when many identical requests have the same intended effect as one request [1]." | PASS | OK (fixed: "উদ্দিষ্ট ফল" replaces the stiff wording) |
| 15 | In plain words | Bangla | If you retry it, there is no extra side effect [5] | "You can retry it with no extra side effects [5]." | PASS | OK |
| 16 | In plain words | Bangla | A side effect is a change caused by the request: a new row, a sent email, or money that goes from one place to another | "A side effect is a change that the request causes, such as a new row, a sent email, or money that moves." | PASS | OK ("এক জায়গা থেকে আরেক জায়গায়" explains "moves"; no new fact) |
| 17 | In plain words | Bangla | In HTTP, GET, PUT, DELETE are idempotent by definition [1] | "In HTTP, GET, PUT, and DELETE are idempotent by definition [1]." | PASS | OK |
| 18 | In plain words | Bangla | POST and PATCH have no guarantee of being idempotent [2] | "POST and PATCH are not guaranteed to be idempotent [2]." | PASS | OK |
| 19 | In plain words | Bangla | "Create a payment" is usually a POST, so the server must make it safe | ""Create a payment" is usually a POST, so the server must make it safe." | PASS | OK |
| 20 | In plain words | Bangla | If it does not know that a retry is safe, a client should not retry a non-idempotent request by itself [1] | "A client should not retry a non-idempotent request by itself unless it knows the retry is safe [1]." | PASS ("Retry নিরাপদ কি না তা না জানলে ... retry করা উচিত নয়" = "unless it knows the retry is safe"; same cite) | OK (fixed: "উচিত নয়" is advice, as in "should not") |
| 21 | In plain words | Bangla | Expect duplicate requests in a distributed system; a user can double-click Pay | "In a distributed system, you must expect duplicate requests. ... A user double-clicks the Pay button." | PASS | OK |
| 22 | In plain words | Bangla | A mobile app can lose the network and send the request again | "A mobile app loses the network and sends the request again." | PASS | OK |
| 23 | In plain words | Bangla | A payment gateway can send the same callback twice; Stripe says a webhook endpoint can get the same event more than once [4] | "A payment gateway sends the same callback twice. Stripe, for example, says a webhook endpoint can get the same event more than once [4]." | PASS | OK |
| 24 | In plain words | Bangla | A queue can give the same job to a worker again | "A queue gives the same job to a worker again." | PASS | OK |
| 25 | In plain words | Bangla | Tool 1: a unique idempotency key made by the client, with which the server can spot a retry [3] | "The client makes a unique key and sends it with the request. The server uses it to spot retries [3]." | PASS | OK |
| 26 | In plain words | Bangla | Tool 2: the gateway's own transaction ID, for example TX123 | "The gateway's own ID for one payment, such as TX123." | PASS | OK |
| 27 | In plain words | Bangla | Tool 3: a database unique constraint that keeps a column unique among all rows [6] | "A database rule that keeps a column unique among all rows [6]." | PASS | OK |
| 28 | In plain words | Bangla | Tool 4: a status check before the work, so nothing more is done if the status is already paid | "Before the work, read the current status. If it is already paid, do nothing more." | PASS | OK |
| 29 | In plain words | Bangla | In its API v1, Stripe saves the status code and body of the first request and returns the saved answer for each retry with the same key [3] | "In its API v1, Stripe saves the status code and body of the first request and returns the saved answer for each retry with the same key [3]." | PASS | OK |
| 30 | In plain words | Bangla | If the same key comes with different data, Stripe returns an error [3] | "If the same key comes with different data, Stripe returns an error [3]." | PASS | OK |
| 31 | When you need it | Layman | You get payment callbacks or webhooks | "You receive payment callbacks or webhooks." | PASS | – |
| 32 | When you need it | Layman | Users place orders | "Users place orders." | PASS | – |
| 33 | When you need it | Layman | You have wallet transactions | "You have wallet transactions." | PASS | – |
| 34 | When you need it | Layman | A course enrollment depends on a payment | "Course enrollment depends on a payment." | PASS | – |
| 35 | When you need it | Layman | You calculate commissions | "You calculate commissions." | PASS | – |
| 36 | When you need it | Layman | You retry the generation of certificates, or you retry notifications | "You retry certificate generation or notifications." | PASS | – |
| 37 | When you need it | Bangla | You get payment callbacks or webhooks (the list is introduced as "in any one of these cases you need idempotency") | "You receive payment callbacks or webhooks." | PASS | OK |
| 38 | When you need it | Bangla | Users place orders | "Users place orders." | PASS | OK |
| 39 | When you need it | Bangla | Your system has wallet transactions | "You have wallet transactions." | PASS | OK |
| 40 | When you need it | Bangla | Course enrollment depends on a payment | "Course enrollment depends on a payment." | PASS | OK |
| 41 | When you need it | Bangla | You calculate commissions | "You calculate commissions." | PASS | OK |
| 42 | When you need it | Bangla | You retry certificate creation or sending notifications | "You retry certificate generation or notifications." | PASS | OK |
| 43 | A real-life example | Layman | A student pays for a course. The gateway sends the success callback for TX123 two times | "A student pays for a course. The payment gateway sends the success callback for TX123 two times." | PASS | – |
| 44 | A real-life example | Layman | Without idempotency: unlock the course two times, give the trainer's commission two times, send the receipt email many times, make duplicate rows | "Without idempotency, the system can unlock the course twice, credit the trainer's commission twice, send the receipt email many times, and create duplicate rows." | PASS | – |
| 45 | A real-life example | Layman | With idempotency, the transaction_id column has a unique constraint | "1. The transaction_id column has a unique constraint." | PASS | – |
| 46 | A real-life example | Layman | The first callback finds TX123 not processed; the system marks it paid, unlocks the course, returns 200 OK | "2. The first callback finds TX123 not processed. The system marks it paid, unlocks the course, and returns 200 OK." | PASS | – |
| 47 | A real-life example | Layman | The second callback finds TX123 already paid; the system returns 200 OK and does nothing more | "3. The second callback finds TX123 already paid. The system returns 200 OK and does nothing else." | PASS | – |
| 48 | A real-life example | Layman | The system must save the "processed" mark and the changes in one step | "The system must save the "processed" mark and the changes in one step." | PASS | – |
| 49 | A real-life example | Layman | AWS says this step must be atomic: all or nothing [5] | "AWS says that recording the token and all the changes must be atomic: all or nothing [5]." | PASS | – |
| 50 | A real-life example | Layman | If it is not, a crash between the two steps can leave a paid order with no course access | "If not, a crash between the two steps can leave a paid order with no course access." | PASS | – |
| 51 | A real-life example | Bangla | A student pays for a course. The gateway sends the TX123 success callback twice | "A student pays for a course. The payment gateway sends the success callback for TX123 two times." | PASS | OK |
| 52 | A real-life example | Bangla | Without idempotency: unlock twice, give the commission twice, send the receipt email many times, create duplicate rows | "Without idempotency, the system can unlock the course twice, credit the trainer's commission twice, send the receipt email many times, and create duplicate rows." | PASS | OK |
| 53 | A real-life example | Bangla | With idempotency: the transaction_id column has a unique constraint | "The transaction_id column has a unique constraint." | PASS | OK |
| 54 | A real-life example | Bangla | The first callback sees TX123 is not processed yet; the system marks it paid, unlocks the course, returns 200 OK | "The first callback finds TX123 not processed. The system marks it paid, unlocks the course, and returns 200 OK." | PASS | OK |
| 55 | A real-life example | Bangla | The second callback sees TX123 is already paid; the system returns 200 OK and does nothing else | "The second callback finds TX123 already paid. The system returns 200 OK and does nothing else." | PASS | OK |
| 56 | A real-life example | Bangla | The system must save the "processed" mark and the changes in one step | "The system must save the "processed" mark and the changes in one step." | PASS | OK |
| 57 | A real-life example | Bangla | AWS says recording the token and all changes must be atomic, that is, all happen or nothing happens [5] | "AWS says that recording the token and all the changes must be atomic: all or nothing [5]." | PASS | OK |
| 58 | A real-life example | Bangla | Otherwise a crash between the two steps can leave a paid order with no course access | "If not, a crash between the two steps can leave a paid order with no course access." | PASS | OK |
| 59 | Common mistakes | Layman | Only disabling the button on the frontend stops some double-clicks, not network retries, gateway callbacks, or queue retries | "Only disabling the button on the frontend. It stops some double-clicks. It does not stop network retries, gateway callbacks, or queue retries." | PASS | – |
| 60 | Common mistakes | Layman | Each retry without idempotency does the side effect again | "Retries without idempotency. Each retry runs the side effect again." | PASS | – |
| 61 | Common mistakes | Layman | With no unique transaction ID the system cannot tell a retry from a new payment | "No unique transaction ID. Without an ID, the system cannot tell a retry from a new payment." | PASS | – |
| 62 | Common mistakes | Layman | Without a unique constraint, two copies of one callback can arrive at the same moment, both pass the status check, both add a row; the constraint stops the second insert [6] | "No database unique constraint. Two copies of the same callback can arrive at the same moment. Both pass the status check, and both insert a row. The constraint stops the second insert [6]." | PASS | – |
| 63 | Common mistakes | Layman | If you answer a duplicate webhook with an error, the gateway thinks the delivery failed and tries again | "If your endpoint answers a duplicate with an error, the gateway thinks the delivery failed and tries again." | PASS | – |
| 64 | Common mistakes | Layman | Stripe retries a delivery after a non-2xx answer [4], for up to three days in live mode [4] | "Stripe retries a delivery after a non-2xx answer [4], for up to three days in live mode [4]." | PASS | – |
| 65 | Common mistakes | Layman | Other gateways have their own rules. Answer a known duplicate with success | "Other gateways have their own rules. Answer a known duplicate with success." | PASS | – |
| 66 | Common mistakes | Bangla | Only disabling the button on the frontend stops some double-clicks, not network retry, gateway callback, or queue retry | "Only disabling the button on the frontend. It stops some double-clicks. It does not stop network retries, gateway callbacks, or queue retries." | PASS | OK |
| 67 | Common mistakes | Bangla | Retry without idempotency: each retry causes the side effect again | "Retries without idempotency. Each retry runs the side effect again." | PASS | OK |
| 68 | Common mistakes | Bangla | No unique transaction ID: without an ID the system cannot tell a retry from a new payment | "No unique transaction ID. Without an ID, the system cannot tell a retry from a new payment." | PASS | OK |
| 69 | Common mistakes | Bangla | No database unique constraint: two copies of one callback can arrive at the same moment, both pass the status check and both insert a row; the constraint stops the second insert [6] | "No database unique constraint. Two copies of the same callback can arrive at the same moment. Both pass the status check, and both insert a row. The constraint stops the second insert [6]." | PASS | OK |
| 70 | Common mistakes | Bangla | If your endpoint answers a duplicate with an error, the gateway thinks the delivery failed and tries again | "If your endpoint answers a duplicate with an error, the gateway thinks the delivery failed and tries again." | PASS | OK |
| 71 | Common mistakes | Bangla | Stripe retries a delivery after a non-2xx answer [4], for up to three days in live mode [4] | "Stripe retries a delivery after a non-2xx answer [4], for up to three days in live mode [4]." | PASS | OK |
| 72 | Common mistakes | Bangla | Other gateways have their own rules; answer a known duplicate with success | "Other gateways have their own rules. Answer a known duplicate with success." | PASS | OK (fixed: "যে duplicate আগেই process হয়েছে" is a natural paraphrase of "known duplicate"; a stricter gloss would be "যে duplicate আপনি চিনতে পারেন", but the meaning holds, so this is not a FAIL) |
| 73 | What a tester can check | Layman | These test ideas are the tutorial's own advice | "Callout title: "Tutorial advice"" | PASS | – |
| 74 | What a tester can check | Layman | Replay the callback: send the same callback two or more times; check one enrollment, one commission, one receipt email | "Send the same payment callback two or more times. Check one enrollment, one commission, and one receipt email." | PASS | – |
| 75 | What a tester can check | Layman | Parallel duplicates: send two copies at the same moment; check the database has one row | "Send two copies of the callback at the same moment. Check that the database has one row." | PASS | – |
| 76 | What a tester can check | Layman | Duplicate answer: check that a duplicate callback gets a 2xx answer, not an error | "Check that a duplicate callback gets a 2xx answer, not an error." | PASS | – |
| 77 | What a tester can check | Layman | Same key, other data: reuse an idempotency key with a different amount; check that the API rejects it | "Reuse an idempotency key with a different amount. Check that the API rejects it." | PASS | – |
| 78 | What a tester can check | Layman | Crash in the middle: stop the service after it marks the payment but before it unlocks the course; check that a retry finishes the job with no double effect | "Stop the service after it marks the payment but before it unlocks the course. Check that a retry finishes the job without a double effect." | PASS | – |
| 79 | What a tester can check | Layman | Double-click: click Pay fast many times, also with a slow network; check one charge | "Click Pay fast many times, also with the network slowed down. Check one charge." | PASS | – |
| 80 | What a tester can check | Bangla | These test ideas are the tutorial's own advice | "Callout title: "Tutorial advice"" | PASS | OK |
| 81 | What a tester can check | Bangla | Replay the callback: send the same callback two or more times; check one enrollment, one commission, one receipt email | "Send the same payment callback two or more times. Check one enrollment, one commission, and one receipt email." | PASS | OK |
| 82 | What a tester can check | Bangla | Parallel duplicates: send two copies at the same moment; check the database has one row | "Send two copies of the callback at the same moment. Check that the database has one row." | PASS | OK |
| 83 | What a tester can check | Bangla | Duplicate answer: check that a duplicate callback gets a 2xx answer, not an error | "Check that a duplicate callback gets a 2xx answer, not an error." | PASS | OK |
| 84 | What a tester can check | Bangla | Same key, other data: reuse an idempotency key with a different amount; check that the API rejects it | "Reuse an idempotency key with a different amount. Check that the API rejects it." | PASS | OK |
| 85 | What a tester can check | Bangla | Crash in the middle: stop the service after it marks the payment but before it unlocks the course; check that a retry finishes the job with no double effect | "Stop the service after it marks the payment but before it unlocks the course. Check that a retry finishes the job without a double effect." | PASS | OK (fixed in recheck 2: the text now reads "Payment mark করার পরে কিন্তু course unlock করার আগে service-টি থামিয়ে দিন", no repeated "service") |
| 86 | What a tester can check | Bangla | Double-click: click Pay fast many times, also with a slow network; check one charge | "Click Pay fast many times, also with the network slowed down. Check one charge." | PASS | OK |
| 87 | In plain words | Bangla | A good server also returns the same answer for a retry | "A good server also returns the same answer for a retry." | PASS (new row; the sentence was not in the table of round 1) | OK |
| 88 | When you need it | Layman | Lead-in: "You need idempotency in these cases:" | Section heading "When you need it" and its list | PASS (a lead-in that restates the heading; no new fact) | – |
| 89 | When you need it | Bangla | Lead-in: "In any one of the cases below you need idempotency" | Section heading "When you need it" and its list | PASS (the list items are alternatives; no new fact) | OK |
| 90 | Common mistakes | Layman and Bangla | Lead-in: "Look out for these common mistakes" | Section heading "Common mistakes" and its list | PASS (no new fact) | OK |
| 91 | In plain words | Layman | An app that sends again after a network loss | "A mobile app loses the network and sends the request again." | PASS (new row) | – |
| 92 | In plain words | Layman | A double-click on Pay | "A user double-clicks the **Pay** button." | PASS (new row) | – |
| 93 | In plain words | Layman | A queue that gives a job again | "A queue gives the same job to a worker again." | PASS (new row) | – |

Open FAILs: 0
