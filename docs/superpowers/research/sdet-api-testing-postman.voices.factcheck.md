# Voices fact check: sdet / api-testing-postman

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / api-testing-postman (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "two requests have no link to each other" drops the Technical limit "on the same connection", so it now claims more. Left out: the same-connection limit, "five classes", the naming of `pm.test` as the test with a name, `pm.expect` as the assertion. |
| What it is | Bangla | PASS | Keeps "একই connection-এ". Left out: nothing of substance; the Bangla keeps "পাঁচটা শ্রেণি", the `pm.test` and `pm.expect` roles, and all other details. |
| How it works | Layman | FAIL | "same effect as many of the same request" drops "intended" from the Technical text, so it says more than the source. Also the GET line carries the S2 cite, which the Technical panel has as an unsupported "no request content". Left out: the GET "no request content" detail, "in meaning, unauthenticated" for 401, the five class names and the 100s and 300s ranges, key-value pairs joined by `&`. |
| How it works | Bangla | FAIL | The GET line "এতে request content থাকে না" repeats the Technical "has no request content". S2 says only "should not contain", so the cite does not support it. Otherwise the meaning matches, and "উদ্দেশ্যমূলক" keeps "intended". Left out: nothing else of substance. |
| Try it | Layman | FAIL | (1) "sends all its requests" adds "all"; the Technical text says "the requests of a collection". (2) "so Postman says to move to the Postman CLI" adds a cause ("so") and drops "plan the move". Left out: tests can go on a collection or folder, the data file and iteration data, the Newman "command-line collection runner" wording, "Export ... as a JSON file". |
| Try it | Bangla | FAIL | (1) "request-এর সব তথ্য" adds "all" to the Technical "the details of the request". (2) "তাই Postman বলে ... পরিকল্পনা করতে" adds a cause ("তাই") that the Technical text does not give. Left out: nothing else of substance. |
| How a tester uses it | Layman | FAIL | "A data file lets the Collection Runner run one request with many inputs" repeats the Technical claim that S10 does not support (S10 says the collection runs several times with different data sets). Left out: the response time snippet, "by default" for the Newman exit code (the sentence is still true without it), "The same requests then run against each stage", "Test both" detail, "one request runs with many inputs" wording. |
| How a tester uses it | Bangla | FAIL | The data file line "ফলে একটা request অনেক input নিয়ে চলে" has the same S10 cite problem as the Technical panel. Left out: nothing else of substance. |
| Common mistakes | Layman | FAIL | "Start with the Postman CLI" carries the S12 cite, which does not support it (same fault as the Technical panel). Left out: "the client is not authenticated" wording, "Check the exact code" sentence is kept. Nothing else of substance. |
| Common mistakes | Bangla | FAIL | "Postman CLI দিয়ে শুরু করুন" carries the S12 cite, which does not support it (same fault as the Technical panel). Left out: nothing else of substance. |
| What a tester can check | Layman | PASS | Callout says it is the tutorial's own advice; no source facts, no cites. Left out: "not only that it is a success", "the types of the JSON body" wording simplified, "environments" in the Variables item. |
| What a tester can check | Bangla | PASS | Callout says it is the tutorial's own advice; no source facts, no cites. The Bangla reads clearly and matches the Technical list. Left out: nothing of substance. |

Open FAILs: 9

I did not read S5's long line 1, so "API client" in S5 rests on the surrounding lines. I also did not check the page's example code, as you instructed.

FAILs in round 1: 9.

## Round 2 (2026-11-16)

### Voices fact check: sdet / api-testing-postman (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: that `pm.test` defines a test with a name and `pm.expect` makes an assertion; the five status-code classes; "When the checks work by hand". "HTTP does not remember" is a plainer way to say "stateless". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Nothing was added or changed. |
| How it works | Layman | FAIL | Two groups have no cite. (1) "Safe methods, `PUT`, and `DELETE` are idempotent. `POST` and `PATCH` may not be." The Technical panel cites S4 on this fact; the Layman panel does not. (2) "Query parameters go after `?`, like `?id=1&type=new`." The Technical panel cites S6 on this fact; the Layman panel does not. The facts themselves match the Technical panel. Left out: "should not contain request content"; the 100–199 and 300–399 classes; the table form. |
| How it works | Bangla | PASS | The meaning matches the Technical panel, and the cites are in place. |
| Try it | Layman | PASS | Facts match. Left out: that tests can go on a collection or folder; the iteration data file; the `{{base_url}}` explanation of the change; the Newman cite on "command line"; "Select the `GET` method" wording. |
| Try it | Bangla | PASS | The meaning matches the Technical panel and nothing was added. |
| How a tester uses it | Layman | FAIL | "Newman ends with code 0 when the run has no errors" drops "By default" from the Technical panel. The sentence now reads as unconditional, which is stronger than the source. Left out: the response time example code; the scope wording on environment variables. "live server" stands for "production server". |
| How a tester uses it | Bangla | PASS | "ডিফল্টভাবে" is kept and the other facts match the Technical panel. |
| Common mistakes | Layman | PASS | Facts match. Left out: "the typical response"; the two-condition wording on 401 and 403. |
| Common mistakes | Bangla | PASS | Facts match the Technical panel. |
| What a tester can check | Layman | PASS | The callout is tutorial advice and matches the Technical callout. Left out: "not only that it is a success". |
| What a tester can check | Bangla | PASS | The callout matches the Technical callout. The Bangla reads clearly and gives no added fact. |

Open FAILs: 2

Skipped: I did not check the Bangla beyond its meaning against the Technical panel, and I did not invoke the writing-style skill, because the output shape was fixed. The Layman "How it works" FAIL is for missing cites only; the facts are correct.

FAILs in round 2: 2.

## Round 3 (2026-11-16)

### Voices fact check: sdet / api-testing-postman (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "The client asks and the server answers" restates the client-server line and the Technical "The server answers with a status code". "Login details" stands for "authorization", which is a looser word. Left out: the five status-code classes; that `pm.test` defines a test with a name and `pm.expect` makes an assertion. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. Nothing is added. Left out: nothing of note. |
| How it works | Layman | PASS | Meaning matches. Left out: that GET should not contain request content; that PUT replaces "all current representations"; the informational (100–199) and redirection (300–399) classes; that 401 is "unauthenticated" in meaning. "May not be" for "not guaranteed" is fine. |
| How it works | Bangla | PASS | Meaning matches, including the limits ("উচিত নয়", "নিশ্চয়তা নেই"). Nothing is added. Left out: nothing of note. |
| Try it | Layman | PASS | Meaning matches. Left out: that tests can go on a request, collection, or folder; that the Collection Runner can read iteration data from a data file; the `pm.response.to.have.status(200)` and `pm.response.json()` names in the prose; the exact function names. |
| Try it | Bangla | PASS | Meaning matches the Technical panel, including the data-file sentence. Nothing is added. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Meaning matches. Left out: the `pm.expect(...responseTime...)` example line; that environment variables scope work to local development, testing, or production; that a data file gives iteration data. "Live server" stands for "production server". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel, including the environment-scope sentence and the `--bail` default. Nothing is added. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Meaning matches, and the limits ("often", "usually", "may not be") are kept. Left out: that 401 and 403 mean "not authenticated" and "no access rights" in exact terms; the "so that a change is made once" reason is kept in short form. |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Nothing is added. Left out: nothing of note. |
| What a tester can check | Layman | PASS | The callout is tutorial advice with no cites. It adds no source fact. Left out: "not only that it is a success" and "environments" in the Variables line. |
| What a tester can check | Bangla | PASS | The callout is tutorial advice with no cites. It adds no source fact. Left out: nothing of note. |

Open FAILs: 0

FAILs in round 3: 0.

Open FAILs: 0
