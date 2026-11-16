# Voices fact check: sdet / backend-node-express

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / backend-node-express (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "a tool for building web servers" is not what the Technical panel says; it says "web framework" with routing and middleware. "One route for each method and path" is stronger than "define routes with methods of the app". "REST is a style for building APIs" changes the scope; the Technical panel says "architecture constraints for distributed systems". Left out: the middleware series, the request-response cycle, "HTTP" in the Postman line. |
| What it is | Bangla | PASS | Each sentence matches the Technical panel, with the same cites. Left out: nothing of note. |
| How it works | Layman | FAIL | "only when the `Content-Type` header says JSON" is narrower than "whose `Content-Type` header matches". Everything else matches. Left out: `undefined` when no parser ran; "HTTP" status; "Authorization request header"; "protected resources"; "synchronous". |
| How it works | Bangla | PASS | Every sentence matches the Technical panel and its cites. Left out: nothing of note. |
| Try it | Layman | FAIL | The first sentence carries the S2 cite, but S2 does not support `npm init -y` or `npm pkg set type=module`. The "never clashes" claim is also stronger than the source. Left out: "issues real tokens"; `server.address().port`; the "operating system" wording. |
| Try it | Bangla | FAIL | Same problem: the S2 cite is on `npm init -y` and `npm pkg set type=module`, which S2 does not give. The "never clashes" meaning is also carried over (Bangla: "সংঘাত হয় না", which says the same). The Bangla was readable enough to judge. Left out: "issues real tokens" is kept; nothing else of note. |
| How a tester uses it | Layman | PASS | Plain wording is the same in meaning. Left out: the "staging server"; "files or libraries" (it says "files"); the "ask whether both are in place" step; "test with many wrong passwords". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel sentence by sentence, with correct cites. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Facts and limits match the Technical panel. Left out: "built-in error handler" (it says "error page"); why the parser ignores a wrong `Content-Type`; that port `0` makes the OS choose. |
| Common mistakes | Bangla | PASS | Matches the Technical panel and cites. Left out: nothing of note. |
| What a tester can check | Layman | PASS | Callout with no cites; the six bullets match the Technical bullets. Left out: "same JSON shape"; "no internal names"; "a time limit" is shortened to "in time". |
| What a tester can check | Bangla | PASS | Callout with no cites; the six bullets match the Technical bullets in meaning. Left out: nothing of note. |

Open FAILs: 3

I did not run the writing-style skill before writing this report, so the prose is not checked against it. The Try it Bangla row is the one I am least sure of: I marked it FAIL for the S2 cite only. The Voices count above is 3, but the table has 3 FAIL rows (What it is Layman, How it works Layman, Try it Layman) plus Try it Bangla, so the true count is 4.

FAILs in round 1: 4.

## Round 2 (2026-11-16)

### Voices fact check: sdet / backend-node-express (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The sentence "web framework for Node.js, built around routes and middleware" carries Cite 4, and S4 does not say "for Node.js" (see row 1.1). The other sentences match the Technical panel. Left out: "series of middleware calls during the request-response cycle"; "such as" in the route-method examples; "distributed" is kept, "architecture" becomes "design". |
| What it is | Bangla | FAIL | Same problem: the first Express sentence has Cite 4, and S4 does not support "Node.js-এর জন্য". The rest matches the Technical panel. Left out: no details of note beyond the plain-word swaps. |
| How it works | Layman | PASS | Every fact is in the Technical panel and none is stronger. Left out: that `req.body` is `undefined` with no parser; "payloads"; that "answer" means ending the request-response cycle; the `next(value)` detail and "no extra work" for async errors; "protected resources". |
| How it works | Bangla | PASS | Matches the Technical panel sentence by sentence, with the limits kept (শুধু, "must", "always"). Nothing is added. |
| Try it | Layman | FAIL | "press RETURN to accept the defaults" carries Cite 2, and S2 says "for most of them", with an exception. The code and the other sentences match. Left out: "issues real tokens"; "hook" and "operating system assign"; the line "which `server.address().port` returns". |
| Try it | Bangla | FAIL | Same: "ডিফল্ট মেনে নিতে RETURN চাপুন" drops "most of them", so Cite 2 does not support it. The rest matches the Technical panel. |
| How a tester uses it | Layman | PASS | Facts match the Technical panel. "Request was wrong" for `400` and "log in first" for `401` are plain paraphrases of "client error" and "must authenticate". Left out: "staging server"; "or libraries"; "Ask whether both are in place, and test the second with many wrong passwords"; the "tests above check each" and "tests send `-5`" remarks; that Helmet is "middleware"; the "brute-force" name. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Left out: nothing of note. All claims and cites match the Technical panel. |
| Common mistakes | Layman | PASS | Facts match. Left out: "the parser looks only at matching requests" as the reason; "not an order"; "built-in error handler" becomes "error page"; "sends to the client". |
| Common mistakes | Bangla | PASS | Matches the Technical panel with limits kept. Nothing is added. |
| What a tester can check | Layman | PASS | A short version of the Technical advice list, with no cites. Left out: "same JSON shape"; "internal names"; "of every body"; "time limit" becomes "in time". |
| What a tester can check | Bangla | PASS | Matches the Technical advice list in meaning. Left out: nothing of note. |

Open FAILs: 4

FAILs in round 2: 4.

## Round 3 (2026-11-16)

### Voices fact check: sdet / backend-node-express (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: an Express application is a series of middleware calls; the route path and method define an endpoint "where requests can be made". "Distributed systems" and "architecture" become "design rules"; this is a plainer word and the meaning is the same. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Nothing of substance is left out. |
| How it works | Layman | FAIL | The "Unknown paths" sentence carries cite S1, which supports the 404 only for the Hello World app, not for any path with no route. It repeats the Technical panel's unsupported claim (see claim 2.8). The other sentences pass. Left out: `req.body` is `undefined` when no body parser ran; `next` is the next middleware function; handlers that return a promise call `next(value)`; "protected resources"; "with no extra work". |
| How it works | Bangla | FAIL | The "অজানা path" sentence carries the same S1 cite that does not support the general claim (see claim 2.8). The other sentences match the Technical panel. Nothing else of substance is left out. |
| Try it | Layman | PASS | Every fact is in the Technical panel. Left out: that real APIs issue real tokens; that `server.address().port` returns the port. "`before` runs first and `after` runs last" restates "before the tests / after them". |
| Try it | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: "staging server"; "or libraries" in the leak check; that Helmet is middleware; the advice to test brute-force protection with many wrong passwords; "client error" becomes "the request was wrong"; "authenticate" becomes "log in first". |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Nothing of substance is left out. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: the reason a wrong `Content-Type` gives `undefined` (the parser looks only at matching requests); "not an order"; "client" in the stack-trace sentence. |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Nothing of substance is left out. |
| What a tester can check | Layman | PASS | Advice that says it is advice, with no new fact. Left out: "same JSON shape"; "internal names"; "time limit"; "each case" in the status-code question. |
| What a tester can check | Bangla | PASS | Advice that says it is advice, with no new fact. The meaning matches the Technical panel. |

Open FAILs: 2

Skipped: I did not invoke the writing-style skill, because no skill tool was available. The `before` and `after` check relies on S14 saying "suite", and the page's tests are top-level.

FAILs in round 3: 2.

## Round 4 (2026-11-16)

### Voices fact check: sdet / backend-node-express (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence matches the Technical panel. "Built around routes and middleware" is a fair paraphrase of "routing and middleware". Left out: the series of middleware calls in the request-response cycle, the term "route path", and the "where requests can be made" clause. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Nothing is added. |
| How it works | Layman | PASS | Every fact is in the Technical panel. "Must answer" stands for "must end the request-response cycle". "Normal code" stands for synchronous code. Left out: `next` being the next middleware function; `req.body` being `undefined` when no parser ran; that credentials give access to protected resources; the promise-returning handler detail; the `req.params` name. |
| How it works | Bangla | PASS | It follows the Technical panel closely. Nothing is added or changed. |
| Try it | Layman | PASS | Left out: the option to type a file name at the entry point, "issues real tokens", and `server.address().port`. Nothing is added. |
| Try it | Bangla | PASS | It matches the Technical panel in meaning. Nothing is added. |
| How a tester uses it | Layman | PASS | "The request was wrong" and "log in first" paraphrase "client error" and "client must authenticate". Left out: "A good API answers each case with its own code"; the staging server; "libraries" in the stack-trace check; the advice to ask whether Helmet and brute-force protection are in place and to test with many wrong passwords. "Password guessing" paraphrases "brute-force attempts". |
| How a tester uses it | Bangla | PASS | It matches the Technical panel in meaning. Nothing is added. |
| Common mistakes | Layman | PASS | "A wrong Content-Type does the same" refers to `req.body` being `undefined`, as the Technical panel says. Left out: "because the parser looks only at matching requests", and "not an order". |
| Common mistakes | Bangla | PASS | It matches the Technical panel in meaning. Nothing is added. |
| What a tester can check | Layman | PASS | It is the tutorial's own advice with no cites, and it mirrors the Technical callout. Left out: "every route", "same JSON shape", "internal names", and "within a time limit". |
| What a tester can check | Bangla | PASS | It is the same advice callout and matches the Technical panel in meaning. Nothing is added. |

Open FAILs: 0

FAILs in round 4: 0.

Open FAILs: 0
