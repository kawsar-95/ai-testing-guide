# Voices fact check: sdet / playwright-api

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / playwright-api (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts and cites match the Technical panel. Left out: Node.js, "isolated", what `APIRequestContext` can do (trigger endpoints, configure microservices, prepare the environment), "built-in", "HTTP methods and status codes". |
| What it is | Bangla | PASS | Facts and cites match the Technical panel. Left out: "isolated" is kept, but nothing is added. The panel keeps the three uses and the `APIRequestContext` abilities. Nothing is dropped except the "docs name" wording detail. |
| How it works | Layman | FAIL | Adds the example "A 404 does not throw." The Technical panel never mentions 404; it says "An error status is not an exception." "You get a response back for any status" also drops "By default". Left out: the `content-type` rule, "respects", the "unless you set it" limit, the 2xx-3xx wording for `ok()` and `toBeOK()` beyond the range. |
| How it works | Bangla | PASS | Facts, limits and cites match the Technical panel. "ডিফল্টভাবে" and the `content-type` rule are kept. Nothing important is left out. |
| Try it | Layman | PASS | "needs no login" is a plainer form of "needs no authentication". Left out: "Postman Echo service" (it says "Postman Echo"), "JSON response with the details", the `test.use()` wording "in the test file". |
| Try it | Bangla | FAIL | "তার সব তথ্য" says "all the details". The Technical panel says only "the details of the request that you sent", so the claim is stronger. Left out: nothing else of note. |
| How a tester uses it | Layman | PASS | Facts and cites match. Left out: `APIRequestContext` for the login request, the setup project, storage state in both contexts, `extraHTTPHeaders`, and the loop example. |
| How a tester uses it | Bangla | PASS | Facts and cites match. Left out: storage state in both contexts. The panel keeps the other details. |
| Common mistakes | Layman | PASS | Facts and cites match. "You get a response back for any status" drops "By default", but the next sentence offers `failOnStatusCode`, so it is still true. Left out: "By default", "first" before `text()`, "The documented usage", "isolated", "saved state file". |
| Common mistakes | Bangla | PASS | Facts, limits and cites match the Technical panel. Nothing important is left out. |
| What a tester can check | Layman | PASS | A callout with no cites; it says it is advice. The Secrets item adds "the code", which is implied by "read from the environment". Left out: "empty system", "expired" (it says "old token"), "HTML". |
| What a tester can check | Bangla | PASS | The Bangla matches the Technical callout item by item. It reads well enough to judge. Nothing is left out. |

Open FAILs: 2

Not checked: I did not read the full source files, only the matching passages. Rows 7, 8 and 21 need a citation fix before the page is safe.

FAILs in round 1: 2.

## Round 2 (2026-11-16)

### Voices fact check: sdet / playwright-api (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All facts are in the Technical panel. Left out: Node.js; that APIRequestContext can trigger endpoints, configure microservices, and prepare the environment. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. |
| How it works | Layman | PASS | Facts and limits match. Left out: the default `content-type` of `application/json`; that `json()` "throws"; "respects". |
| How it works | Bangla | PASS | Facts and limits match. Left out: nothing of substance. |
| Try it | Layman | FAIL | Step 3 ("No browser opens, because `request` is not a page") has a cite that S1 does not support (see claim 24). |
| Try it | Bangla | FAIL | Step 3 ("কোনো browser window খোলে না, কারণ `request` fixture কোনো পেজ নয়") has a cite that S1 does not support (see claim 24). |
| How a tester uses it | Layman | FAIL | "A test can run once for each item in a list of cases" is stronger than the Technical sentence, which says "parameterize a test at the test level, for example with a loop over cases". Left out: that storage state works in both contexts; the setup project; `extraHTTPHeaders`; "test level". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: that storage state works in both contexts. |
| Common mistakes | Layman | PASS | Facts match. Left out: "first" in "read `text()` first"; that the docs say "documented usage". |
| Common mistakes | Bangla | PASS | Facts match. Left out: nothing of substance. |
| What a tester can check | Layman | FAIL | "Are tokens kept out of the code, the logs, the report, and Git?" adds "the code". The Technical list says "read from the environment, and kept out of the logs, the HTML report, and Git". Left out: "empty system", "HTML", "id of". |
| What a tester can check | Bangla | PASS | Meaning matches the Technical list. Left out: nothing of substance. |

Open FAILs: 4

Not checked: I did not verify the Bangla beyond meaning, and I did not read the full text of the sources. I searched them with Grep. The `extraHTTPHeaders` part of claim 31 rests on S1's config snippet, which Grep showed only partly.

FAILs in round 2: 4.

## Round 3 (2026-11-16)

### Voices fact check: sdet / playwright-api (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact and cite matches the Technical panel. Left out: Node.js, "can trigger endpoints / configure microservices / prepare the environment", "ready to send requests", and the HTTP methods and status codes in the Postman pointer. |
| What it is | Bangla | PASS | Same facts and cites as the Technical panel. Left out: the same details as Layman (the Bangla also drops "ready to send" detail only in part). |
| How it works | Layman | PASS | Meaning matches. Left out: the `content-type` becomes `application/json` unless you set it; the throw on invalid JSON is kept, but the "returns the body as JSON" detail is shortened; the diagram. |
| How it works | Bangla | PASS | Meaning matches, including "by default" and the 2xx/3xx limit. Left out: the diagram, and the same detail as Layman. |
| Try it | Layman | PASS | "what your request contained" restates "details of the request"; "no login" restates "no authentication". Both are close enough. Left out: "Node" detail, the Technical wording "Playwright project" step detail, and the "simplify" nuance. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Meaning matches. Left out: the setup project, `APIRequestContext` for login, storage state in `BrowserContext` and `APIRequestContext`, the loop code, and the `extraHTTPHeaders` use of the token. |
| How a tester uses it | Bangla | PASS | Meaning matches. It assigns creation to `beforeAll` and deletion to `afterAll`. The Technical panel says "with the hooks", so this is a mild narrowing. Left out: storage state in `BrowserContext`, and the loop code. |
| Common mistakes | Layman | PASS | Meaning matches and the cites are on the right facts. Left out: "first" in "read `text()` first", and the Promise detail is kept. |
| Common mistakes | Bangla | PASS | Meaning matches. Left out: nothing of substance. |
| What a tester can check | Layman | FAIL | "an old token" changes "an expired token". Old is not the same as expired. It also drops "the id of" another user's record and "on an empty system". |
| What a tester can check | Bangla | PASS | "মেয়াদ শেষ token" matches "expired token". Meaning matches the Technical panel. |

Open FAILs: 1

Not checked: I did not find the literal `({ request })` argument form in S1. Claim 10 is PASS on the built-in `request` fixture quote alone. The Bangla notes are based on my reading of the Bangla, which I judged to be clear in each case.

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Voices fact check: sdet / playwright-api (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: Node.js; the three things `APIRequestContext` can do (trigger endpoints, configure microservices, prepare the environment); "HTTP methods and status codes" is shortened to "HTTP". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: the three things `APIRequestContext` can do is kept, but "server-side" is shortened in the list. Nothing is added. |
| How it works | Layman | PASS | No added facts. Left out: that the `content-type` header becomes `application/json` unless you set it; that `ok()` and `status()` are described only briefly. "Respects" becomes "uses" with no change of meaning. "Throws" becomes "fails". |
| How it works | Bangla | PASS | No added facts. All limits are kept ("ডিফল্টভাবে", "আপনি না দিলে", "2xx আর 3xx ছাড়া"). The ASCII diagram is left out. |
| Try it | Layman | PASS | No added facts. "Needs no login" restates "needs no authentication" (a little looser in wording). "Postman Echo service" is shortened to "Postman Echo". Left out: "directly" and "Node.js"-level detail. |
| Try it | Bangla | PASS | No added facts. All steps and cites match the Technical panel. Nothing is stronger or weaker. |
| How a tester uses it | Layman | PASS | No added facts. Left out: the name `APIRequestContext` in the login item; the "setup project"; that storage state works in both a `BrowserContext` and an `APIRequestContext`; that the token goes in `extraHTTPHeaders`. |
| How a tester uses it | Bangla | PASS | No added facts. The Bangla names `beforeAll` for creating and `afterAll` for deleting; the Technical panel only says "with the `beforeAll` and `afterAll` hooks", but the order in the sentence implies this. The Bangla leaves out the storage state fact. |
| Common mistakes | Layman | PASS | No added facts. Left out: the "in the test or in a hook" cite problem is carried over unchanged (see FAIL 40 above); that the file is the "saved state file"; "strongly" is kept. |
| Common mistakes | Bangla | PASS | No added facts. All limits are kept ("Body parse না হলে", "থাকতে পারে", "জোরালোভাবে"). |
| What a tester can check | Layman | PASS | No added facts; the callout says it is advice and has no cites. Left out: "on an empty system"; "id of" another user's record; "HTML" in the report; "reuse the state"; the response "body". |
| What a tester can check | Bangla | PASS | No added facts and the meaning is the same as the Technical callout. Nothing is left out that changes the meaning. |

Open FAILs: 0

Not checked: the Bangla was read for meaning only; I did not check every spelling. S1's `{ request }` was confirmed by a count (3 hits), not by reading the lines.

FAILs in round 4: 0.

## Round 5 (2026-11-16)

### Voices fact check: sdet / playwright-api (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: Node.js; the class can trigger endpoints, configure microservices and prepare the environment; "HTTP methods and status codes" is shortened to "HTTP". |
| What it is | Bangla | PASS | Same facts as the Technical panel, with no additions. Left out: nothing of substance. |
| How it works | Layman | PASS | The limit "By default" is kept. Left out: the `content-type` header becomes `application/json` unless you set it; "valid" JSON; the diagram. "respects" becomes "uses" and "throws" becomes "fails", with the same meaning. |
| How it works | Bangla | PASS | Meaning matches the Technical panel, including the `content-type` limit and "By default". Left out: the diagram. |
| Try it | Layman | PASS | Left out: "service"; "details of the request" is shortened to "what your request contained"; "authentication" becomes "login". The meaning is the same. |
| Try it | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Left out: the setup project; the login request is sent with `APIRequestContext`; storage state works in both `BrowserContext` and `APIRequestContext`; `extraHTTPHeaders`; the example loop code. "Keep the token out of the code" is a heading of the Technical panel. |
| How a tester uses it | Bangla | PASS | Create in `beforeAll` and delete in `afterAll` is given in the same order as the Technical panel. Nothing is added. Left out: storage state in both contexts. |
| Common mistakes | Layman | PASS | Left out: "returns a response" becomes "you get a response back"; "documented usage" is dropped; "strongly advises" is kept. No fact is added. |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel, including "ডিফল্টভাবে" and "জোরালোভাবে নিষেধ". I could read all sentences. |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice. Left out: "on an empty system"; "the id of" another user's record; "HTML" report; "response body" becomes "response". |
| What a tester can check | Bangla | PASS | The callout is marked as advice. Matches the Technical callout. Left out: nothing of substance. |

Open FAILs: 0

I did not check the code blocks, per the task. I did not check the S1 code that sends the token in `extraHTTPHeaders`: I only saw the `Authorization` line inside the config, so row 34 rests on that.

FAILs in round 5: 0.

Open FAILs: 0
