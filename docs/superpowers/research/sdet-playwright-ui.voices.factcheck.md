# Voices fact check: sdet / playwright-ui

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / playwright-ui (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: actionability checks (it says "waits for each element"), local and session storage by name, "incognito-like", MCP and test agents. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: actionability checks, the three storage types by name, MCP and test agents. |
| How it works | Layman | FAIL | Technical says "The recommended built-in locators include ...". Layman says "Built-in ones are ...", which drops "recommended" and "include", so the list now reads as complete. The list sentence has no cite of its own. Left out: "at any moment", "stable (not animating)" as a term, the diagram. |
| How it works | Bangla | PASS | It keeps the limit ("Built-in locator-এর মধ্যে আছে" means "among them are"). The list sentence has no cite of its own, but the cite follows in the next sentence. Left out: "recommended", the diagram. |
| Try it | Layman | FAIL | "Pick TypeScript, the default" is added advice. Technical only says it "asks for TypeScript or JavaScript; the default is TypeScript". Step 5 says UI Mode lets you "rerun on each change", which is an added explanation of watch mode. Left out: new or existing project, the config contents, "auto-opens only on failure", the test explanation, Inspector detail. |
| Try it | Bangla | FAIL | "TypeScript বেছে নিন, এটাই ডিফল্ট" ("Choose TypeScript, it is the default") is added advice, and it drops the JavaScript option. Left out: new or existing project, the config contents, "auto-opens only on failure", step over by name. |
| How a tester uses it | Layman | FAIL | "A page object is a class" and the example "add a todo" are not in the Technical panel. The heading "Test only your app" changes the scope from "only what you control". Left out: "Prefer" (the wording is firmer), the `on-first-retry` name, the trace icon, "links to". |
| How a tester uses it | Bangla | FAIL | "Page object হলো একটা পেজের জন্য একটা class" and the "একটা todo যোগ করো" example are not in the Technical panel. "`--trace on` দিলে trace সবসময় চালু থাকে" ("always on") is stronger than "forces tracing". Left out: the trace icon, "links to". |
| Common mistakes | Layman | FAIL | "They break when the page structure changes" is stronger than Technical ("tie the test to the DOM structure, which can easily change"). "Find elements by role, label, or text" names which locators are user-facing, and Technical does not. Left out: "easily", "strict" as a reason, "completely isolated". |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of weight except the "strict" wording and "completely" (it says "পুরো আলাদা", which is faithful). |
| What a tester can check | Layman | PASS | Same advice as Technical. Left out: "selectors", "HTML" report, "artifacts", "locators and steps" of a page object. |
| What a tester can check | Bangla | PASS | Same advice as Technical, in readable Bangla. Left out: nothing of weight. |

Open FAILs: 5

Not checked: I did not read whole source files, only the passages that Grep returned. I could not fully check how well the Bangla reads, only its meaning against the Technical panels.

FAILs in round 1: 6.

## Round 2 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Left out: local storage and session storage are not named separately. The "actionability checks" are called "waits for each element". The word "manual" is dropped from "manual waits". The "incognito-like" wording is replaced by "like a private window". |
| What it is | Bangla | PASS | Left out: the "actionability checks" name, and local storage versus session storage. The sentence "এই পেজে শুধু test runner-এর কথা" says "only" for "covers the test runner itself". This is a statement about the page, not a tool fact. |
| How it works | Layman | PASS | Left out: "at any moment", the "recommended" list is shortened to "include", the stable/not animating detail, and the "web-first" name. |
| How it works | Bangla | FAIL | The sentence "Built-in locator-এর মধ্যে আছে `page.getByRole()` ..." has no cite. The Technical panel cites S3 for it. The word "recommended" is dropped. The rest matches the Technical panel. Left out: the "web-first" name. |
| Try it | Layman | PASS | Left out: that the command adds Playwright to an existing project, the config contents, that the report opens by itself only on failure, and the "parallel" detail ("three browsers at once" is used). |
| Try it | Bangla | PASS | Left out: the same details as the Layman panel. I could read all the Bangla sentences well enough to judge them. |
| How a tester uses it | Layman | FAIL | "A page object is a helper class for one page" turns "Playwright's own example builds it as a helper class" into a general definition. "Find elements by what a user sees, not by XPath or CSS" drops the "Prefer ... to" limit and is stronger. Left out: "higher-level API", the trace icon, and that tracing is forced only locally. |
| How a tester uses it | Bangla | FAIL | "Page object হলো একটা পেজের জন্য একটা helper class" has the same scope change: an example becomes a definition. The other bullets match. Left out: the "higher-level API" wording and the trace icon. |
| Common mistakes | Layman | PASS | Left out: "async", "throws" (it says "fails"), "completely isolated", and the "returns at once" wording. |
| Common mistakes | Bangla | PASS | Left out: "throws" (it says "error দেয়"). Otherwise it matches the Technical panel. |
| What a tester can check | Layman | PASS | This is the tutorial's own advice and has no cites. Left out: "as artifacts", "of the page", and "Search the suite". It adds no fact. |
| What a tester can check | Bangla | PASS | This is the tutorial's own advice. It matches the Technical callout, item by item. Left out: the same small details as the Layman panel. |

Open FAILs: 3

FAILs in round 2: 3.

## Round 3 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "never share a page" restates "isolated from each other". Left out: the names "actionability checks" and "browser context"; "incognito-like" (now "like a private window"); local storage and session storage as separate items (now "storage"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: the "actionability checks" name, and the "incognito" wording is kept. |
| How it works | Layman | PASS | The meaning matches. Left out: "at any moment"; the "web-first" label; the general "before an action" (the panel says "Before a click"); that the checks listed are for `locator.click()`; "stable" is reworded as "not moving"; the "TimeoutError" wording is kept. |
| How it works | Bangla | PASS | The meaning matches. Left out: "web-first", "actionability checks", and that the check list is for `locator.click()`. |
| Try it | Layman | PASS | No added facts. Left out: that the init command can add Playwright to an existing project; what the config holds; that `npx playwright test` is parallel (now "at once"); that the report opens by itself only on failure; that the example uses built-in locators and web-first assertions; the step over button (now "one step at a time"); the watch mode is kept. |
| Try it | Bangla | PASS | No added facts. It leaves out the same details as the Layman panel. |
| How a tester uses it | Layman | PASS | Meaning is kept. "Do not test other websites or servers that you do not control" leaves out "links to". It matches the Technical bold "Test only what you control", so it is not stronger. Left out: "XPath or CSS" is kept; "higher-level API" (now "simple steps"); "selectors" (now "locators"); the trace icon; the `on-first-retry` name. |
| How a tester uses it | Bangla | PASS | Meaning is kept. It has the same "links to" omission as the Layman panel. Left out: the trace icon; "higher-level API". |
| Common mistakes | Layman | PASS | The meaning matches. "The action fails" restates "throws". Left out: "retries are async" reasoning; "actionability checks"; "completely" in "completely isolated". |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: "completely"; "actionability checks". |
| What a tester can check | Layman | PASS | Same checklist as the Technical callout, and it says it is advice. Left out: "HTML" and "artifacts" in the CI item; "of the page" in the assertions item; "web-first assertion" (now "waiting check"). |
| What a tester can check | Bangla | PASS | Same checklist as the Technical callout, and it says it is advice. No detail is left out beyond word choice. |

Open FAILs: 0

FAILs in round 3: 0.

## Round 4 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "actionability checks" (it says "waits for each element"), "isolation" as a word, local vs session storage, "incognito-like", "headless/headed" as terms, and the cite-8-free detail that the browser context is named. |
| What it is | Bangla | PASS | Same facts as the Technical panel. Left out: nothing beyond small wording; "actionability checks" is shortened to "Playwright নিজেই অপেক্ষা করে". |
| How it works | Layman | PASS | Same facts and the same cites. Left out: "at any moment", the `getByTestId` wording "finds an element by", "stable" is shown as "not moving", the "web-first assertions" name and its S9 cite, and "For locator.click()" (it says "Before a click"). |
| How it works | Bangla | PASS | Same facts and cites. Left out: the "web-first assertions" name and its S9 cite. "Before a click" stands for "For locator.click()". |
| Try it | Layman | FAIL | Step 4 puts the S3 and S5 cites on "Save this as `tests/todo.spec.ts` and run `npx playwright test`". Neither source supports that sentence. In the Technical panel the cites sit on "It uses built-in locators and auto-retrying assertions", which the Layman panel dropped. Left out: adds Playwright to an existing project, what the config holds, the "opens by itself only when a test fails" claim, the Inspector in step 5 detail ("step over" button), and "retries and parallel". |
| Try it | Bangla | FAIL | Step 4 has the same problem: the S3 and S5 cites are on "নিচের কোডটা `tests/todo.spec.ts` নামে সেভ করে `npx playwright test` চালান", and neither source supports it. Left out: same details as the Layman panel. The rest of the panel matches the Technical panel. |
| How a tester uses it | Layman | FAIL | Scope change in "Do not test other websites or servers that you do not control". The Technical panel (S9) says "links to external sites or third-party servers", so the Layman sentence is broader. Left out: the example page-object code, "higher-level API" (it says "simple steps"), the `on-first-retry` name, and "default config" in the retries sentence. |
| How a tester uses it | Bangla | FAIL | Same scope change in the last bullet: "যে বাইরের site বা third-party server … টেস্ট করবেন না" drops "links to". Left out: `on-first-retry` is kept, but "higher-level API" is shown as "সহজ ধাপ", and the example code is not mentioned. |
| Common mistakes | Layman | PASS | Same facts and cites. Left out: "async" as the reason for `await`, "actionability checks", "throws" (it says "fails"), "completely isolated" (it says "work alone"). |
| Common mistakes | Bangla | PASS | Same facts and cites. Left out: "actionability checks" and "returns at once" is shortened to "সাথে সাথে ফিরে আসে". The meaning is kept. |
| What a tester can check | Layman | PASS | The callout is advice with no cites and adds no source fact. Left out: "web-first assertion" (it says "waiting check"), "artifacts", "state" (it says "something"). |
| What a tester can check | Bangla | PASS | The callout is advice with no cites and adds no source fact. Left out: nothing beyond wording. I judged the Bangla by its meaning and read each bullet. |

Open FAILs: 4

Not checked: the sources' long lines that grep marked "Omitted long matching line" (S2 line 44, S4 lines 14 and 19, S5 line 11). The S5 `toBeVisible` match on line 11 was shown by `-o`. I judged the S2 "perform actions"/"expectations" and the S4 `click` check list from the fragments I could see.

FAILs in round 4: 4.

## Round 5 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: the session storage detail, the term "actionability checks", and the "incognito-like" wording. "Never share a page" is a plain-word restatement of "isolated". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: parallel runs written as "many tests at once", and the "actionability checks" term. |
| How it works | Layman | PASS | Every fact matches. Left out: that the locator is "at any moment", the "web-first assertions" name, the cite to S9, and "For locator.click()". "Not moving" is a plain-word restatement of "stable (not animating)". |
| How it works | Bangla | PASS | The meaning matches. Left out: the "web-first" name and the "exactly one element for locator.click()" scope. |
| Try it | Layman | PASS | Every fact matches. Left out: that the command can add Playwright to an existing project, what the config holds, that the run is in parallel, and the `--headed` and `--ui` cite on its own sentence. |
| Try it | Bangla | PASS | The meaning matches. Left out: the same details as the Layman panel, plus the config contents. |
| How a tester uses it | Layman | FAIL | "keeps the locators in one place" changes the noun. Technical and S6 say "selectors". Other left-out details: the "higher-level API" wording, the "on-first-retry" name, and the trace icon. |
| How a tester uses it | Bangla | FAIL | "locator-গুলো এক জায়গায় রাখে" has the same changed noun: Technical and S6 say "selectors". Other left-out details: the "higher-level API" wording and the trace icon. |
| Common mistakes | Layman | PASS | Every fact matches. "so do not add waits" is an imperative form of "a test needs no manual waits", and it drops "manual". Left out: "retries until the condition is met" is shortened to "waits", and "throws" is shortened to "fails". |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: the S5 explanation that retrying assertions are async is kept, but the "throws" wording is plain. |
| What a tester can check | Layman | PASS | This is tutorial advice with no cites, and it adds no new fact. Left out: "HTML report" and "artifacts", and "the whole suite" is shortened to "all of them". |
| What a tester can check | Bangla | PASS | The Bangla matches the Technical advice. Left out: nothing of substance. |

Open FAILs: 2

I skipped the writing-style skill, because the reply shape was fixed. I could not read the sources' long omitted lines, so some quotes come from the visible text only.

FAILs in round 5: 2.

## Round 6 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "bundles", the word "incognito" (it says "private window"), "local" and "session" storage (it says "storage"), and "actionability checks" (it says "waits for each element"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: "actionability checks" and that the pages are isolated "from each other" is kept. The "manual" limit is kept ("হাতে wait"). |
| How it works | Layman | PASS | The meaning matches. Left out: "at any moment", "web-first assertions" (the S9 name), "stable (not animating)" (it says "not moving"), and "auto-retrying". |
| How it works | Bangla | PASS | The meaning matches. Left out: "web-first assertions" and the name "auto-retrying". |
| Try it | Layman | PASS | The meaning matches. Left out: that the command can add Playwright to an existing project, what the config holds, "in parallel" (it says "at once"), "headless" (it says "no window"), and the name "time travel" (it says "go back in time"). |
| Try it | Bangla | PASS | The meaning matches. Same omissions as the Layman panel: existing project, config contents, and the Inspector's step over button (it says "step by step"). |
| How a tester uses it | Layman | PASS | The meaning matches. Left out: "higher-level API" (it says "simple steps"), the name `on-first-retry`, the trace icon, and "declares" for `test.describe`. |
| How a tester uses it | Bangla | PASS | The meaning matches. Left out: the trace icon and "higher-level API". The `on-first-retry` name is kept. |
| Common mistakes | Layman | PASS | The meaning matches. Left out: "manual" in "manual waits" (the sentence is about a sleep, so the meaning holds), "throws" (it says "fails"), "DOM", and "async". |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: the word "manual" is kept as "হাতে". Nothing is added. |
| What a tester can check | Layman | PASS | The seven checks match the Technical panel. Left out: "selectors" after XPath, "HTML" before report, "artifacts", and "web-first". |
| What a tester can check | Bangla | PASS | The seven checks match the Technical panel and the callout says it is the tutorial's own advice. Nothing is added or left out. |

Open FAILs: 0

Not checked: I did not read the long omitted lines of S5 and S9 in full. The quotes above come from the lines the greps showed. I read the S1, S4, S10 and S12 lines in full where a claim depended on them. K9 is a strict call, because the panel implies what a trace is without saying it.

FAILs in round 6: 0.

## Round 7 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: the "actionability checks" name, "incognito-like", "local storage / session storage" by name, and the term "browser context". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing beyond the Layman list. The terms stay in English. |
| How it works | Layman | PASS | Left out: "at any moment", the "stable (not animating)" wording, and the "web-first assertion" term. |
| How it works | Bangla | PASS | The meaning matches the Technical panel. The `data-testid`, strictness, and 5-second default are all kept. Left out: the "web-first assertion" term. |
| Try it | Layman | PASS | Left out: that the command can add Playwright to an existing project, what the config holds, "in parallel", and the name "HTML". It also drops "by default" on the run command, as the Technical panel does (see fact 29). |
| Try it | Bangla | PASS | The meaning matches the Technical panel. Left out: adding to an existing project, the config contents, and "HTML". It also drops "by default", as the Technical panel does. |
| How a tester uses it | Layman | PASS | Left out: "higher-level API", "readable", "reads like the steps of a user", and the trace icon. "Simple steps" is a loose paraphrase of "higher-level API". |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Left out: "higher-level API" and the trace icon. |
| Common mistakes | Layman | PASS | Left out: "throws" (it says "fails"), "checks once", and "strict" as a word. |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing important. |
| What a tester can check | Layman | PASS | The callout is advice, and the items match the Technical callout. Left out: "HTML" report, "as artifacts", and "selectors". |
| What a tester can check | Bangla | PASS | The callout is advice, and the items match the Technical callout. The meaning is the same. |

Open FAILs: 0

FAILs in round 7: 0.

## Round 8 (2026-11-16)

### Voices fact check: sdet / playwright-ui (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "actionability checks" (said as "waits for each element"), the local storage / session storage split, "parallel runs" (said as "many tests at once"), and the word "isolated" (said as "never share a page"). |
| What it is | Bangla | PASS | The Bangla meaning matches the Technical panel. Left out: the actionability-check detail, and the local storage / session storage split (said as "storage"). It keeps the headed/headless terms. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "at any moment", the term "web-first assertions" and its S9 cite, "auto-retrying", the "(not animating)" detail, and that the assertion timeout is the default assertion timeout. |
| How it works | Bangla | PASS | The Bangla meaning matches the Technical panel. Left out: the web-first assertions sentence and the "TimeoutError" for the "assertion" case. The "must" in "হতে হবে" matches the Technical "must". |
| Try it | Layman | PASS | Every fact is in the Technical panel. Left out: that the command can add Playwright to an existing project, what the config holds, "HTML" before report, "headless" as a term, the Inspector's name in step 3, and the step over button. "Three browsers at once" restates "parallel on Chromium, Firefox, and WebKit". |
| Try it | Bangla | PASS | The Bangla meaning matches the Technical panel. Left out: the same details as the Layman panel (existing project, config contents, step over button, "HTML"). Cites are on the matching facts. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: the page-object code example and "the test then reads like the steps of a user", the `on-first-retry` name, the trace icon, and "higher-level API" (said as "simple steps"). "CI tries a failed test 2 more times; your computer does not retry" restates "2 on CI and 0 locally". |
| How a tester uses it | Bangla | PASS | The Bangla meaning matches the Technical panel. Left out: the code example, the trace icon, "higher-level API" (said as "সহজ ধাপ"), and the "implementation details" examples. The `on-first-retry` name is kept. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "throws" (said as "fails"), "completely isolated", "actionability checks", and "because locators are strict". The "do not recommend locator.first()" and "skips the check" claims match. |
| Common mistakes | Bangla | PASS | The Bangla meaning matches the Technical panel. Left out: "completely" in "completely isolated" is kept as "পুরো আলাদা". It also leaves out "actionability checks" (said as "action-এর আগে অপেক্ষা করে"). No added fact found. |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice, with no cites. It matches the Technical advice item for item. Left out: "as artifacts", "HTML" before report, "web-first", "Search the suite", "state", and "of the page". |
| What a tester can check | Bangla | PASS | The Bangla meaning matches the Technical callout item for item. Left out: "artifact" is kept, and the Technical word "state" is kept as "state". No added fact or advice. |

Open FAILs: 0

FAILs in round 8: 0.

Open FAILs: 0
