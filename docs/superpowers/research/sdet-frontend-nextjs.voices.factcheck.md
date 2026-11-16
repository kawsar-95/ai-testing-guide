# Voices fact check: sdet / frontend-nextjs

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / frontend-nextjs (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | (1) Props "are the values that you hand to a component, like settings": the Technical panel says "the information that you pass to a JSX tag". "like settings" is an added analogy, and "component" replaces "JSX tag". (2) The layout "stays in place when you move between them": the Technical panel says the layout "keeps its state on navigation". The plain text drops the state claim and gives a different meaning. (3) "must" is dropped from the capital-letter rule. Left out: "JavaScript function", the CSS and JavaScript combination, that `--yes` also gives the App Router. |
| What it is | Bangla | PASS | Each sentence matches the Technical panel. Left out: nothing of note. |
| How it works | Layman | FAIL | (1) Client Components: "make the component run in the browser" is not in the Technical panel. (2) "clicks, typing, state, and browser features": "typing" is not in the Technical panel, and "effects" is left out. (3) Hydration: "only then do the buttons work" is stronger than the Technical panel and adds "buttons". (4) Events: "types" is added, and "focus" is left out. (5) Lists: "Each list item needs a `key`" adds a requirement. The Technical panel says only that keys tell React which array item is which. (6) Routes: "matches many URLs, such as `/products/1` and `/products/2`" is an added claim and example. Left out: layouts as Server Components, "streams", Client Component imports going into the bundle, the setter detail, the Hooks "only at top level" scope. |
| How it works | Bangla | PASS | Each sentence matches the Technical panel. Left out: nothing of note. |
| Try it | Layman | FAIL | "Next.js says to test the production build" is stronger than the Technical panel's "recommends". Left out: "Client Component" and "Server Component" labels, that an unknown id calls `notFound()`, that `baseURL` is the address of `npm run start`. The code blocks are the same as in the Technical panel. |
| Try it | Bangla | FAIL | "Next.js production build-এর ওপর টেস্ট চালাতে বলে" means "Next.js says to run tests on the production build". That is stronger than "recommends". The other sentences match. Left out: nothing else of note. |
| How a tester uses it | Layman | FAIL | (1) "Next.js says to test the production build, because it acts like the live app": "says to" is stronger than "recommends", and "acts like" drops "more ... like" (the source says "more closely resemble"). Left out: the early-click detail, the exact `Each child in a list...` message, "development build", the JavaScript that the browser loads, the `404` expectation of the third test. The other bullets match the Technical panel. |
| How a tester uses it | Bangla | FAIL | (1) "চালাতে বলে" is "says to", stronger than "recommends". (2) "আসল app-এর মতো আচরণ করে" drops "more", so the claim is stronger. The other bullets match. I could read all the Bangla well enough to judge it. |
| Common mistakes | Layman | PASS | Each bullet matches the Technical panel. Left out: the "or of another Hook" scope; "bundle"; "when items are inserted or deleted"; the "should run" wording; "too" in the last bullet is a small softening and still true. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | A callout of advice with no facts. Left out: "field", "visible", "warnings", "right after the page appears", "unknown paths", "in the right place". |
| What a tester can check | Bangla | PASS | A callout of advice with no facts. It matches the Technical panel. Left out: nothing of note. |

Open FAILs: 6

FAILs in round 1: 6.

## Round 2 (2026-11-16)

### Voices fact check: sdet / frontend-nextjs (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Left out: "JavaScript" and "markup, CSS" detail; "must" on the capital letter; "file-system based routing"; the `[project-name] [options]` syntax; the App Router among the defaults. "Routes" became "URLs". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| How it works | Layman | FAIL | The Routes bullet says "A folder like `[id]` matches many URLs, such as `/products/1` and `/products/2`". The Technical panel does not give this claim or these example URLs in this section. It only says `[id]` is a dynamic segment. Left out: "layouts", streaming, "imports go into the client bundle", "event handlers such as onClick" (now only "click handlers"), the "dynamic segment" term, the term "prefetch". Added: "memory" for state. |
| How it works | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | Left out: the build error text; that Cache Components is on by default for the App Router; "Server Component" for `page.tsx`; that `baseURL` is the address of `npm run start`; the "unknown id calls `notFound()`" wording ("shows not found" instead). |
| Try it | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Left out: "development build" in the console advice; the "fast, non-interactive preview" wording; the third test expecting `404`; the exact log text (it says "a warning"); "client bundle"; searching "the page source". "Click handlers" stands for "event handlers". |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | FAIL | "Call Hooks only at the top of a component" drops "or of another Hook". It now says more than the Technical panel, because it rules out calling a Hook inside a custom Hook. Left out: "client bundle"; "subtle and confusing"; that items are also "inserted or deleted"; "the browser downloads more JavaScript than it needs". "Test the production build too" is a slight shift from "should run against the production build". |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel, including "component বা অন্য Hook". Left out: nothing of substance. |
| What a tester can check | Layman | PASS | This is advice only. Left out: "visible name" (now "text"); "warnings" in the console; "unknown paths"; "right after the page appears"; "in the right place". |
| What a tester can check | Bangla | PASS | Same meaning as the Technical panel, and the callout note says the list is advice. Left out: nothing of substance. |

Open FAILs: 2

I skipped the Ponytail "end with what I skipped" note, because the format you gave says nothing may come after the report. I also did not invoke the writing-style skill, for the same reason. I judged the Bangla by meaning, and it follows the English sentence for sentence. A "never reach the browser" phrase in the How it works Layman panel is a little stronger than "without exposing". I passed it, but it is the closest call.

FAILs in round 2: 2.

## Round 3 (2026-11-16)

### Voices fact check: sdet / frontend-nextjs (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "small, reusable pieces of UI" adds "small", which the Technical panel does not say. "decide the URLs of the app" and "what one URL shows" replace "routes" with "URLs". Left out: markup, CSS and JavaScript are combined; "JavaScript" function; "must"; `[project-name] [options]`; the App Router default. |
| What it is | Bangla | PASS | Every sentence matches the Technical panel. Left out: nothing of substance. |
| How it works | Layman | FAIL | "the secrets never reach the browser" and "use secret keys safely" are stronger than "without exposing them to the client". "click handlers" is narrower than "event handlers such as `onClick`". "talk to things outside React" is looser than "sync the component with a system outside React". Left out: layouts are Server Components too; the result streams; the client bundle rule; the "static" wording. |
| How it works | Bangla | PASS | Every sentence matches the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | Left out: Cache Components is on by default for the App Router; the exact build error text; that `app/page.tsx` is a Server Component; "dynamic route"; that `notFound()` is called. "shows "not found"" restates what the example code does. |
| Try it | Bangla | PASS | Matches the Technical panel. Nothing is left out. |
| How a tester uses it | Layman | FAIL | "Let your tests collect console errors" drops the "tests of the development build" limit, so it says more than the Technical panel. Left out: the exact warning text; static HTML is a fast non-interactive preview; searching the page source and loaded JavaScript; the third test expects `404`. The "Only Client Components have state and click handlers" sentence copies the Technical claim that fails the fact check (row 38). |
| How a tester uses it | Bangla | PASS | Matches the Technical panel, including the development-build limit. Nothing is left out. |
| Common mistakes | Layman | PASS | Left out: "event handlers" (shortened to "clicks"); "so the browser downloads more JavaScript than it needs"; "subtle and confusing" (shortened to "strange"); the inserted and deleted cases for the index key. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Nothing is left out. |
| What a tester can check | Layman | PASS | Left out: warnings in the console; unknown paths; the "right after the page appears" detail; field roles and names. It adds no fact. |
| What a tester can check | Bangla | PASS | Matches the Technical panel. Nothing is left out. |

Open FAILs: 3

FAILs in round 3: 3.

## Round 4 (2026-11-16)

### Voices fact check: sdet / frontend-nextjs (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "JavaScript" and "must" in the capital-letter rule; markup, CSS and JavaScript are not named; `[project-name] [options]`; App Router as a default; Playwright link detail. |
| What it is | Bangla | PASS | Same meaning as the Technical panel, sentence by sentence. Nothing material left out. |
| How it works | Layman | FAIL | Hydration: "attaches the click handlers" narrows "event handlers" to click handlers. Events: "focuses a field" adds "a field" to "focus". Left out: layouts (only "Pages"), streaming, the client bundle rule, "can only", "Hydration" first-HTML detail. |
| How it works | Bangla | PASS | Same meaning as the Technical panel. Nothing material left out. |
| Try it | Layman | FAIL | "An unknown id shows "not found"" adds a claim about what the user sees. The Technical panel only says the code calls `notFound()`. Left out: the exact build error text; "Server Component" for `page.tsx`; `npm run start` address for `baseURL`; "Dynamic route" name; `--no-*` general meaning. |
| Try it | Bangla | PASS | Same meaning as the Technical panel. Nothing material left out. |
| How a tester uses it | Layman | FAIL | "makes React print a warning" adds "warning". The Technical panel says React logs the message and gives no severity. Left out: the exact message text, "fast preview" of the HTML, "The third test expects 404", and the "page source" search. |
| How a tester uses it | Bangla | PASS | Same meaning as the Technical panel. Nothing material left out. |
| Common mistakes | Layman | FAIL | "State and clicks need "use client"" narrows "event handlers" to clicks. "Test the production build too" adds "too"; the Technical panel says tests should run against the production build. Left out: bundle-size consequence, "when items are inserted or deleted", `"use client"` marking detail. |
| Common mistakes | Bangla | PASS | Same meaning as the Technical panel. Nothing material left out. |
| What a tester can check | Layman | PASS | Callout is advice with no cites. Left out: "field", "visible" name, "right after the page appears", "warnings", "unknown paths", "on each page". |
| What a tester can check | Bangla | PASS | Matches the Technical callout sentence by sentence. Nothing left out. |

Open FAILs: 4

I did not read S3, S9 and S12 end to end. I used targeted greps, so a quote could hide a nearby caveat. K2 is my strictest call: "JSX tag" and "component" overlap, but the panel and the row use different words.

FAILs in round 4: 4.

## Round 5 (2026-11-16)

### Voices fact check: sdet / frontend-nextjs (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Must" is dropped from the capital-letter rule, but the sentence is still true and says no more. Left out: that components combine markup, CSS and JavaScript, "JavaScript function", `[options]`, App Router among the defaults. |
| What it is | Bangla | PASS | Same facts and the same strength. Left out: nothing beyond the Technical panel's details. |
| How it works | Layman | PASS | "Pages ... sent to the browser" omits layouts and the word "streams". Left out: layouts as Server Components, streaming, imports going into the client bundle, "static" HTML, the exact Hook scope "or of another Hook" (not stated in Technical either), the `use` naming wording differs only in form. |
| How it works | Bangla | PASS | Matches the Technical bullets. Left out: nothing material. |
| Try it | Layman | PASS | "Fails on the product page" restates "stops at the product page". Left out: the exact error text, that Cache Components is on by default for the App Router, that the page is a Server Component, that `baseURL` is the address of `npm run start`, `npx playwright test` wording. |
| Try it | Bangla | PASS | Matches the Technical panel, including the error text. Left out: nothing material. |
| How a tester uses it | Layman | PASS | Left out: the exact warning text, "fast non-interactive preview", the "API keys and tokens" wording (shortened to "keys"), that the third test expects `404`. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Left out: nothing material. |
| Common mistakes | Layman | PASS | "Strange bugs when items move" says less than "subtle and confusing bugs ... move, inserted, deleted". "Skip the Effect" matches "you do not need an Effect". Left out: "so the browser downloads more JavaScript than it needs", inserted and deleted items, "Client Component" in the first bullet. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Left out: nothing material. |
| What a tester can check | Layman | PASS | Advice only, with no cites. Left out: "field", "right after the page appears", "warnings", "unknown paths", "visible". |
| What a tester can check | Bangla | PASS | Matches the Technical callout. I read the Bangla and found no added claims. |

Open FAILs: 0

I did not read the full text of each source. I checked with targeted searches, and some long lines in S3, S8 and S9 were only partly visible. Row 25 rests on S4's prefetch sentence, because S4 does not say "links pages" in those words.

FAILs in round 5: 0.

Open FAILs: 0
