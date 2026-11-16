# Voices fact check: Playwright Framework & the Agentic QA Workflow

Page: `content/agentic-qa/playwright-framework.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-playwright-framework.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / playwright-framework (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Framework structure | Layman | FAIL | "A selector is the rule that finds a button or a field." The Technical panel does not define a selector or give this example. Fix: delete the sentence, or say only "selectors". |
| 2 | Framework structure | Layman | FAIL | "When the screen changes, you fix one file." Technical says "one class, not twenty specs". The noun changed. Fix: "you fix one class". |
| 3 | Framework structure | Layman | FAIL | "A locator finds an element. Playwright suggests what the user sees, such as a role and a name." The definition and the word "name" are not in Technical. Technical says "user-facing attributes and explicit contracts, such as `page.getByRole()`". Fix: "Playwright recommends user-facing attributes, such as `page.getByRole()`." |
| 4 | Framework structure | Bangla | PASS | Left out: "explicit contracts", `test.extend()` cite order, and the layout descriptions. The "Playwright recommends" attribution is dropped, so the locator sentence reads as plain advice. That is acceptable. |
| 5 | Configuration, environments, and sign-in | Layman | FAIL | "`playwright.config.ts` is the settings file of the suite." Technical does not say this. Fix: delete it, or start with "Runner settings sit at the top." |
| 6 | Configuration, environments, and sign-in | Layman | FAIL | "A project is a named group of settings." This definition is not in Technical. Fix: delete it. Keep "A `staging` project can have its own `baseURL` and retries." |
| 7 | Configuration, environments, and sign-in | Layman | FAIL | "Signing in for every test is slow." Technical only says tests load a saved state "so they do not sign in each time". It does not say sign-in is slow. Fix: "Tests can load a saved sign-in, so they do not sign in each time." |
| 8 | Configuration, environments, and sign-in | Layman | FAIL | "they can hold cookies that act as your login." Technical says the file "may hold sensitive cookies and headers". The "act as your login" explanation is added. Fix: "they may hold sensitive cookies and headers." |
| 9 | Configuration, environments, and sign-in | Bangla | FAIL | "`playwright.config.ts` হলো suite-এর settings file।" Technical does not say this. Fix: delete it. |
| 10 | Configuration, environments, and sign-in | Bangla | FAIL | "`forbidOnly` CI-তে `test.only` থাকলে error দেয়।" Technical says `forbidOnly` exits with an error if a test is marked `test.only`, and that it is "useful on CI". The Bangla limits the error to CI. Fix: "`test.only` থাকলে `forbidOnly` error দিয়ে বেরিয়ে যায়; CI-তে এটি কাজের।" |
| 11 | Configuration, environments, and sign-in | Bangla | FAIL | "প্রতিটি test-এ login করা ধীর।" Technical does not say that sign-in is slow. Fix: "Test গুলো আগে থেকে save করা login state নিতে পারে, তাই প্রতিবার login করতে হয় না।" |
| 12 | Playwright MCP in the workflow | Layman | FAIL | "Playwright MCP lets Claude use a web page". Technical says "an LLM", not Claude. The noun changed. Fix: "lets an LLM use a web page". |
| 13 | Playwright MCP in the workflow | Layman | FAIL | "Claude Code asks you before it uses a server from that file." Technical limits this to interactive sessions and to a project-scoped server from `.mcp.json`. The limit was dropped, so the claim says more. Fix: "In interactive sessions, Claude Code asks you before it uses a project-scoped server from that file." |
| 14 | Playwright MCP in the workflow | Layman | FAIL | "That is hidden text that tries to give Claude orders." Technical does not define prompt injection. Fix: delete the sentence. |
| 15 | Playwright MCP in the workflow | Layman | FAIL | "Use it to explore a flow, to find locator names in the snapshot, and to check a flow by hand. <Cite 9>" In Technical, cite 9 supports only the snapshot sentence (elements, roles, text). The explore and check-by-hand bullets have no cite. Fix: put cite 9 on the snapshot part only. |
| 16 | Playwright MCP in the workflow | Bangla | FAIL | The same cite 9 sits on all three uses: explore, find locators, and check by hand. In Technical, cite 9 supports only the snapshot sentence. Fix: put cite 9 on the locator part only. |
| 17 | From approved test cases to a regression suite | Layman | FAIL | "ISTQB calls the links between related work items traceability." Technical gives "the ability to establish explicit relationships between related work products". Both the definition and the noun ("work items") changed. Fix: "ISTQB defines traceability as the ability to set up clear links between related work products." |
| 18 | From approved test cases to a regression suite | Layman | FAIL | "Regression testing checks if a change broke something that did not change." Technical gives no "change" as the cause, and it says "introduced or uncovered". Fix: "Regression testing checks whether defects were introduced or uncovered in unchanged areas." |
| 19 | From approved test cases to a regression suite | Layman | FAIL | "Its GitHub Actions example saves the HTML report as an artifact." Technical says it uploads `playwright-report/` as an artifact. It does not say "HTML" in this section. Fix: "saves `playwright-report/` as an artifact". |
| 20 | From approved test cases to a regression suite | Bangla | PASS | Left out: the "Limit workers" wording, sharding, and the traceability example code. The "worker process" explanation is a light gloss. |
| 21 | Failure analysis | Layman | FAIL | "A **trace** is a full record of the run." Technical does not define a trace. Fix: delete it, or start with "Open a trace with `npx playwright show-trace`." |
| 22 | Failure analysis | Bangla | PASS | Left out: "a retry hides nothing", the JSON/JUnit sentence for triage, and the `dot` description. |
| 23 | Application defect or automation defect | Layman | FAIL | "If the server returned an error, or the page shows a wrong value, draft a bug." In Technical, the wrong-value row applies only when "the request was correct". The condition was dropped, so the claim says more. Fix: "…or the page shows a wrong value although the request was correct, draft a bug." |
| 24 | Application defect or automation defect | Bangla | FAIL | "page ভুল value দেখালে bug-এর draft লিখুন". This drops the Technical condition "the request was correct". Fix: "request ঠিক থাকা সত্ত্বেও page ভুল value দেখালে". |
| 25 | Evidence and bug filing | Layman | FAIL | "Put `Bash(gh issue create *)` and the Jira tools under `ask`." This section's Technical panel names `mcp__atlassian__*` and the Atlassian server, not "Jira tools". The noun changed. Fix: "the Atlassian MCP tools". |
| 26 | Evidence and bug filing | Bangla | PASS | Left out: the example `settings.json`, the "atlassian name assumes…" caveat, and the `--transport http` command. |
| 27 | The end-to-end agentic workflow | Layman | PASS | Left out: the "through MCP" detail, the group page names, "Run the test with the bug's tag", and the "not a documented standard" wording. |
| 28 | The end-to-end agentic workflow | Bangla | PASS | Left out: the same details as the Layman panel. |
| 29 | Practice | Layman | PASS | Left out: the prompts, "as the customer", and the `trace` value name. |
| 30 | Practice | Bangla | PASS | Left out: the exact prompts and the "Check the result" paragraph. |
| 31 | Common mistakes | Layman | FAIL | Item 1: "It can hold cookies that act as your login." Technical says "may hold sensitive cookies and headers". The "act as your login" explanation is added. Fix: "It may hold sensitive cookies and headers." |
| 32 | Common mistakes | Bangla | PASS | None left out except the Technical item 3 "specs hold the checks against the approved case" wording. |

Bangla notes:
- Section 1: the locator sentence ("Locator খোঁজার সময় … ব্যবহার করুন") is a little abrupt. It drops the "Playwright recommends" attribution. It reads acceptably.
- All Bangla panels address the reader as আপনি or with the polite imperative. Commands, flags, paths, and product names stay in English. I found no missing hyphens.
- I read all Bangla sentences well enough to judge them. The Bangla FAILs above are in section 2 (rows 9–11), section 3 (row 16), and section 6 (row 24).

Open FAILs after round 1: 23

Script check of round 1: 32 rows, 23 FAIL rows.

## Voices fact check: agentic-qa / playwright-framework (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Framework structure: page objects and fixtures | Layman | PASS | Left out: "explicit contracts", the setup and teardown point, and the code example. "It holds the selectors in one place" has no cite of its own; the cite sits on the sentence before it. |
| 2 | Framework structure: page objects and fixtures | Bangla | PASS | Left out: "explicit contracts" and the code example. "সহজ, উঁচু স্তরের API" adds "সহজ" (simple), while the Technical panel says only "higher-level API". The difference is small. |
| 3 | Configuration, environments, and sign-in | Layman | PASS | Left out: `forbidOnly`, `--project`, "must not go in `use`", the `.auth` folder name, and the "dependency fails" rule. |
| 4 | Configuration, environments, and sign-in | Bangla | PASS | Left out: the "headers" detail and the dMoney `baseURL` fallback. |
| 5 | Playwright MCP in the workflow | Layman | FAIL | "Its origin lists do not protect you." The Technical panel says only that `--allowed-origins` and `--blocked-origins` "do not serve as a security boundary and do not affect redirects". "Do not protect you" is stronger. The sentence also has no cite. Fix: "Its origin lists are not a security boundary either. <Cite n={10} />" |
| 6 | Playwright MCP in the workflow | Bangla | FAIL | "`--storage-state <path>` দিয়ে MCP browser আপনার test-এর একই session file নিয়ে signed in অবস্থায় শুরু হতে পারে। <Cite n={10} />" The Technical panel cites S10 only for loading a storage state file into an isolated session. "The same role files as the tests" is the tutorial's own use, and the Technical panel leaves it uncited. Here the S10 cite covers a tutorial claim. Fix: say "`--storage-state <path>` দিয়ে একটি saved storage state file load করা যায়" with the cite, and give the "same files as your tests" use as a separate sentence with no cite. |
| 7 | From approved test cases to a regression suite | Layman | PASS | Left out: the `fullyParallel` setting, the `_` annotation rule, the sharding advice, and the "Approved… with its id… as oracle" advice. |
| 8 | From approved test cases to a regression suite | Bangla | PASS | Left out: sharding. |
| 9 | Failure analysis: retries, traces, and reports | Layman | PASS | Left out: `on-first-retry`, the `test-results` folder, the `dot` reporter, and the tab names. "A fresh browser for the next test" adds "for the next test". It is a fair reading of the new worker, but the Technical panel does not say it. "Turn on recordings for failures" is mild advice that the Technical panel does not give. |
| 10 | Failure analysis: retries, traces, and reports | Bangla | PASS | Left out: the tutorial's JSON/JUnit triage remark. "recording চালু করুন" is mild advice that the Technical panel does not give. |
| 11 | Application defect or automation defect | Layman | PASS | Left out: the "bad test data" example for false positives, the "healed test" example for false negatives, the table rows on a wrong value with a correct request and on a possible false negative, the "wait adjustment" and "data fix" patch types, and the re-run loop. |
| 12 | Application defect or automation defect | Bangla | PASS | Left out: the last table row and the patch types. |
| 13 | Evidence and bug filing through an approval step | Layman | PASS | Left out: the Atlassian README facts, the `--state all` flag, the JSON example, and "unique identifier". |
| 14 | Evidence and bug filing through an approval step | Bangla | PASS | Left out: the example `.claude/settings.json`, the Atlassian add command, and the warning callout. |
| 15 | The end-to-end agentic workflow | Layman | FAIL | "4. **Exploration.** Claude explores with Playwright MCP. A human reads the notes." The Technical table says "Human approves: Yes: the session notes". "Reads" is weaker than "approves". Fix: "A human approves the session notes." Steps 6 and 10 ("reviews the pull request", "closes the bug") are close to "approves", but use "approves" there too. |
| 16 | The end-to-end agentic workflow | Bangla | FAIL | "4. … মানুষ session note পড়েন।" The Technical panel says the human approves the session notes. "পড়েন" (reads) is weaker. Fix: "মানুষ session note approve করেন।" |
| 17 | Practice | Layman | PASS | Left out: the exact prompts, the `/customer/send-money` path, the `SendMoneyPage` name, the `TC-` ids, and the "Check the result" paragraph. |
| 18 | Practice | Bangla | PASS | Left out: the same details as the Layman panel. |
| 19 | Common mistakes | Layman | PASS | Left out: the CSS/XPath wording and the "ticket" advice. |
| 20 | Common mistakes | Bangla | PASS | Left out: the "headers" detail and the "ticket" advice. |

Bangla notes:
- Section 4 (regression): "Regression testing দেখে, যে অংশ বদলায়নি সেখানে নতুন defect এসেছে কি না" reads a little stiff. It is acceptable.
- No commands, flags, paths, or product names are translated. Hyphens between English words and Bangla suffixes are present in the places I checked.
- The Bangla panels mostly use imperatives (the implied reader is আপনি). Some sentences name the reader with আপনি and others have no pronoun. This is acceptable.
- Row 6 (MCP) and row 16 (workflow) are the only Bangla FAILs. I could read all the sentences well enough to judge them.

Open FAILs after round 2: 4

Script check of round 2: 20 rows, 4 FAIL rows.

## Voices fact check: agentic-qa / playwright-framework (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Framework structure: page objects and fixtures | Layman | FAIL | Sentence: "When the screen changes, you fix one class." The Technical panel says "you fix the selector in one place". It never says "class". The noun is changed. The sentences "It holds the selectors in one place" and "When the screen changes…" also have no cite of their own, because the Cite n=2 comes before them. Fix: "When the screen changes, you fix the selector in one place." Then put Cite n=2 at the end of the group. Left out: the higher-level API, the on-demand wording of fixtures, setup and teardown in one place, and explicit contracts. |
| 2 | Framework structure: page objects and fixtures | Bangla | FAIL | Sentence: "UI বদলালে আপনি বিশটি spec নয়, একটি class ঠিক করেন।" This adds a number ("বিশটি spec") and a comparison that the Technical panel does not give. It also changes "selector" to "class". Fix: "UI বদলালে আপনি এক জায়গায় selector ঠিক করেন।" Also, "সহজ" in "সহজ, উঁচু স্তরের API" is an added word; the Technical panel says only "higher-level API". Left out: explicit contracts, and "on demand". |
| 3 | Configuration, environments, and sign-in | Layman | PASS | Left out: `forbidOnly`, `--project`, the rule that a failed dependency stops the tests that rely on it, and the `.auth` directory name. The dMoney sentence "save one session for each role" is a fair reading of the callout. |
| 4 | Configuration, environments, and sign-in | Bangla | PASS | Left out: that the setup project always runs first, the `testMatch` pattern, `test.use` per file or group, and the dMoney `baseURL` fallback. |
| 5 | Playwright MCP in the workflow | Layman | FAIL | Sentence: "through a text map of the page, called an accessibility snapshot". The Technical panel says "structured accessibility snapshots". It does not say the snapshot is text. "Text" is an added fact about the format. Fix: "through a structured map of the page, called an accessibility snapshot." Left out: `--scope`'s default of local scope, redirects, and "test environment". |
| 6 | Playwright MCP in the workflow | Bangla | PASS | Left out: that `--allowed-origins` and `--blocked-origins` do not affect redirects, that the README links to the authentication guide, and the "isolated session" wording. |
| 7 | From approved test cases to a regression suite | Layman | PASS | Left out: `fullyParallel`, `--workers 4`, sharding, and the "must" in "a tag must start with @". The definition of "worker" as "test processes that run at the same time" is a plain-words gloss of "workers". |
| 8 | From approved test cases to a regression suite | Bangla | PASS | Left out: the sharding advice, the GitHub Actions command, and that the tag can go in the title. "Introduced or uncovered" is narrowed to "নতুন defect এসেছে কি না". This is only a small narrowing, not a stronger claim. |
| 9 | Failure analysis: retries, traces, and reports | Layman | PASS | Left out: the `on-first-retry` mode, the `test-results` directory, the tab-by-tab detail, and the `show-report` and `show-trace` paths. "Turn on recordings for failures" reads as advice; the Technical panel's "Useful values" table supports it only weakly. |
| 10 | Failure analysis: retries, traces, and reports | Bangla | PASS | Left out: the `dot` reporter detail and the `outputFile` examples. "Failure-এর প্রমাণ রাখতে recording চালু করুন" is the same mild advice wording as in the Layman panel. |
| 11 | Application defect or automation defect | Layman | PASS | Left out: the "bad test data" and "healed test checks less" examples, the "precondition or environment" row, the healer's re-run loop, and the guardrails. "Same element" is a fair plain version of "equivalent elements". |
| 12 | Application defect or automation defect | Bangla | PASS | Left out: the healer's patch types, and the rows "page shows a wrong value", "passes but approved case expects a different result", and the possible false negative. |
| 13 | Evidence and bug filing through an approval step | Layman | PASS | Left out: the test object, the references, the ISTQB quote, the `--state all` flag, and the point that the Atlassian server reaches only data the user may view. |
| 14 | Evidence and bug filing through an approval step | Bangla | PASS | Left out: the Atlassian `claude mcp add` command and the example `settings.json`. |
| 15 | The end-to-end agentic workflow | Layman | PASS | Left out: the "Group page" column, the link text, the "through MCP" detail, the "or Jira" detail, and the subagent and headless pointers. |
| 16 | The end-to-end agentic workflow | Bangla | PASS | Left out: the ISTQB quote of confirmation testing, and "run the test with the bug's tag first". |
| 17 | Practice | Layman | PASS | Left out: the exact prompts, "as the customer", the `/customer/send-money` path, and the `SendMoneyPage` name. |
| 18 | Practice | Bangla | PASS | Left out: the exact prompts, the `customer-setup` project name, and the check-the-result paragraph. |
| 19 | Common mistakes | Layman | PASS | Left out: CSS and XPath are not named in item 4. "Like a role and a name" is a small gloss on "user-facing attributes, such as `getByRole`". |
| 20 | Common mistakes | Bangla | PASS | Left out: "headers" in item 1, and "not fixed" in item 2. |

Bangla notes:
- None. The Bangla addresses the reader as আপনি (imperatives with -ুন). It leaves commands, flags, paths and product names in English. The hyphens between English words and Bangla suffixes are correct (for example `ISTQB-এর`, `test-কে`, `API-র`, `` `.gitignore`-এ ``). The Bangla reads naturally.

Open FAILs after round 3: 3

Script check of round 3: 20 rows, 3 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / playwright-framework (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F128 | facts | RESOLVED | The page now says "CSS or XPath selectors that can break when the DOM changes" (Technical, Common mistakes item 4), with `<Cite n={4} />`. S4 says: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests… the class might change, thus breaking your test." "Can break" matches the source and does not overstate it. The Bangla panel says "যা DOM বদলালে ভাঙতে পারে", which keeps the limit and has the same cite. |
| V1 | voices | RESOLVED | The Layman panel now says "It holds the selectors in one place. When the screen changes, you fix the selector in one place. <Cite n={2} />". "class" is gone, and the Technical panel has the same noun: "you fix the selector in one place". The cite is at the end of the group, and the Technical panel puts Cite 2 on the same facts. The Layman panel leaves out some Technical facts, but it adds none. |
| V2 | voices | RESOLVED | The Bangla panel now says "এটি সব element selector এক জায়গায় রাখে, আর test-কে একটি উঁচু স্তরের API দেয়। UI বদলালে আপনি এক জায়গায় selector ঠিক করেন। <Cite n={2} />". The "বিশটি spec" number and comparison are gone. "সহজ" is gone. "class" is replaced by "selector". The cite is Cite 2, the same as in the Technical panel. |
| V5 | voices | RESOLVED | The Layman panel now says "through a structured map of the page, called an accessibility snapshot", and "text" is gone. This matches the Technical panel ("structured accessibility snapshots") and S9 ("using structured accessibility snapshots… no vision models required"). The cite is Cite 9. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
