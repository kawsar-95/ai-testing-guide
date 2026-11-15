# Voices fact check: Playwright Automation with Claude

Page: `content/agentic-qa/playwright-with-claude.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-playwright-with-claude.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / playwright-with-claude (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Install and configure Playwright Test | Layman | FAIL | "Headless means that you see no browser window." Technical does not define headless. This is an added explanation. Fix: delete the sentence. |
| 2 | Install and configure Playwright Test | Layman | FAIL | "A retry runs a failed test again." Technical only lists `retries` as a key. It does not explain retries. Fix: delete the sentence. |
| 3 | Install and configure Playwright Test | Layman | FAIL | "The `baseURL` setting is the address of the app that you test." Technical gives only the example value `'http://localhost:3000'`. It does not say what `baseURL` means. Fix: delete the sentence. |
| 4 | Install and configure Playwright Test | Layman | FAIL | "The config file is the one place for browsers, timeouts, retries, and reports." Technical says the file "holds" these. "The one place" claims exclusivity, which is stronger. Fix: "The config file holds the browsers, timeouts, retries, projects, and reporters." |
| 5 | Install and configure Playwright Test | Bangla | PASS | Leaves out `--with-deps`, the update command, the table values, and "latest of each". |
| 6 | Write and run a test | Layman | FAIL | "A worker is one process that runs tests." Technical does not define a worker. Fix: delete the sentence. |
| 7 | Write and run a test | Layman | FAIL | "`--ui` opens UI mode, a window to run and watch tests." Technical for this section says only "Opens UI mode". The explanation is added. Fix: "`--ui` opens UI mode." |
| 8 | Write and run a test | Layman | FAIL | "`--project webkit` runs one browser only." Technical says "Runs one project only". A project is not always a browser, so the noun is changed. Fix: "runs one project only." |
| 9 | Write and run a test | Bangla | PASS | Leaves out `-g` and `show-report` details. It adds nothing. |
| 10 | Browser, context, page, and fixtures | Layman | FAIL | "The browser is the program… A page is one tab in that window." Technical says a browser runs contexts and a context holds pages. It gives no program, window, or tab analogy. Fix: "A browser runs contexts. A context is like a private profile. A context holds pages." |
| 11 | Browser, context, page, and fixtures | Bangla | PASS | Leaves out the `request` description and the "only used fixtures" detail. The closing sentence about `loginPage` refers to the Technical panel (see the notes). |
| 12 | Locators that survive change | Layman | FAIL | "Playwright has built-in locators. Use them in this order:" Technical says the docs *list* them in that order. It says to use role locators first and to use text locators for non-interactive elements. It does not say to use all of them in that order, so this is stronger. Fix: "The docs list these built-in locators. They recommend `getByRole()` first." |
| 13 | Locators that survive change | Bangla | PASS | Leaves out the "turn off" detail of `first()` and `nth()`. It also leaves out `testIdAttribute` and the code examples. |
| 14 | Assertions and auto-waiting | Layman | FAIL | "Flaky means it passes sometimes and fails sometimes." Technical does not define flaky. Fix: delete the sentence. |
| 15 | Assertions and auto-waiting | Layman | FAIL | "A whole test can take 30 seconds by default." Technical gives 30 seconds as the default test timeout, which is a limit. "Can take" says something different about duration. Fix: "A test times out after 30 seconds by default." |
| 16 | Assertions and auto-waiting | Bangla | PASS | Leaves out `force`, `expect.poll`, `expect.soft`, and the table examples. |
| 17 | Debug a failing test | Layman | FAIL | "You step through the test one action at a time." (Inspector). Technical says only that `--debug` opens the Inspector and a headed browser with timeout 0. Stepping one action at a time is an added fact. Fix: delete it, or say "It opens a headed browser." |
| 18 | Debug a failing test | Layman | FAIL | "In CI, record traces only for retries or failures." Technical ties CI only to `on-first-retry`. `retain-on-failure` is described without CI. Fix: "In CI, record a trace only on the first retry." |
| 19 | Debug a failing test | Bangla | FAIL | "CI-তে `trace: 'on-first-retry'` বা `trace: 'retain-on-failure'` ব্যবহার করুন" gives `retain-on-failure` as a CI setting. Technical gives only `on-first-retry` for CI. Fix: say that `on-first-retry` is for CI, and that `retain-on-failure` keeps only the traces of failed tests. |
| 20 | Use Claude to create, explain, and refactor tests | Layman | FAIL | "A reviewer always finds something, so tell it to skip style." Technical limits this to "a reviewer that you ask to find problems". Fix: "A reviewer that you ask to find problems will always find some, so tell it to skip style." |
| 21 | Use Claude to create, explain, and refactor tests | Bangla | PASS | Leaves out the "keep going until they pass" prompt and the `playwright-cli snapshot` command. |
| 22 | Review a generated test | Layman | FAIL | "It skips safety checks." (`force: true`). Technical says `force` turns off only the non-essential actionability checks. "Safety checks" changes the meaning. Fix: "It turns off some of the checks that Playwright makes before an action." |
| 23 | Review a generated test | Bangla | FAIL | "এটি actionability check বন্ধ করে" drops "non-essential". It now says that all the checks are off. Fix: "এটি অপ্রয়োজনীয় (non-essential) actionability check বন্ধ করে।" |
| 24 | Practice | Layman | PASS | Leaves out the config details, the `webServer`, the `^1.63.0` version, the exact prompts, and the "Only the new spec" note. |
| 25 | Practice | Bangla | PASS | Same details left out as in the Layman panel. |
| 26 | Common mistakes | Layman | FAIL | "`expect(await locator.isVisible()).toBe(true)` checks only one time." The Technical panel of this section gives the example but does not say it checks once. Fix: delete "checks only one time", or say "This cannot fail in the way you want." |
| 27 | Common mistakes | Bangla | PASS | Leaves out the "value that the test set itself" example. |

Bangla notes:
- Row 11: the last sentence of the Bangla panel, "Technical panel-এর `loginPage` fixture-টি tutorial-এর নিজের উদাহরণ", points to another panel. A reader sees only one panel at a time, so this reads oddly. Suggested fix: "`loginPage` fixture-টি tutorial-এর নিজের উদাহরণ।"
- Section "Assertions and auto-waiting": "element-কে ঠিক একটি হতে হবে" reads unnaturally. Suggested fix: "element-টি ঠিক একটি element-এ resolve হতে হবে"
- All Bangla panels address the reader as আপনি, or with the polite imperative. None translates a command, flag, path, or product name. The hyphen between an English word and a Bangla suffix is present throughout. I saw no other unnatural phrasing.
- Layman (not Bangla) borderline PASS items, noted without a FAIL:
  - "such as a button or a text box" in the Locators panel is an added example.
  - "test id that the developers add" in the Locators panel is an added detail.
  - "tell it … a good reason" for `nth()` in the Review panel. Technical says "a reason in a comment" and also lists `first()` and `last()`.
  - "for example to open the login page" in the Write panel is covered only by the Technical code example.

Open FAILs after round 1: 18

Script check of round 1: 27 rows, 18 FAIL rows.

## Voices fact check: agentic-qa / playwright-with-claude (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Install and configure Playwright Test | Layman | PASS | Left out: the defaults for language, folder and browsers, the `package.json` and lock file, the parallel default, the update commands, and the key table. |
| 2 | Install and configure Playwright Test | Bangla | PASS | Left out: the `npm install -D` update commands and the example values of the keys. "across Chromium, Firefox, WebKit" is not repeated after the default. |
| 3 | Write and run a test | Layman | FAIL | "`test.beforeEach` runs before each test, for example to open the login page." (Cite 4.) The Technical bullet does not say this. The "open the login page" example is added under a docs cite. Fix: "`test.beforeEach` runs before each test." |
| 4 | Write and run a test | Bangla | PASS | Left out: the `page.goto()` detail is kept, but the command table rows `login.spec.ts` and the headless note are not repeated. |
| 5 | Browser, context, page, and fixtures | Layman | PASS | Left out: the fixture table details, the `APIRequestContext` detail, and the example code. "Cascading failures" is restated as "does not leave a mess". |
| 6 | Browser, context, page, and fixtures | Bangla | PASS | Left out: the "prevents cascading failures" sentence and the "only fixtures used are set up" detail is kept. The last sentence only points at the Technical example. |
| 7 | Locators that survive change | Layman | FAIL | "`getByTestId()` finds an element by a test id that the developers add." The Technical panel gives no "developers add" claim. It says the `data-testid` attribute. Fix: "finds an element by its test id." |
| 8 | Locators that survive change | Layman | FAIL | "Do not fix this with `nth()`." (Cite 9.) The Technical panel says only that the docs do not recommend `first()`, `last()` and `nth()`. The Layman voice is a stronger rule and loses the "docs do not recommend" limit. Fix: "The docs do not recommend `nth()` for this. The page can change, and then Playwright clicks the wrong element." |
| 9 | Locators that survive change | Bangla | PASS | Left out: the "docs do not recommend CSS or XPath" sentence and the `testIdAttribute` setting. |
| 10 | Assertions and auto-waiting | Layman | FAIL | "Before Playwright clicks or types, it waits. It checks that the element is there, visible, still, not covered, and enabled." (Cite 12.) The Technical panel gives this list for `click()` only. "Types" widens the scope. Fix: "Before Playwright clicks, it waits. It checks that…". |
| 11 | Assertions and auto-waiting | Bangla | PASS | Left out: the list of auto-retrying assertions, `expect.poll`, `expect.toPass`, `expect.soft`, the `force` option, and the cost of sleep. "web page-এ" is a small added scope that the Technical panel does not state. |
| 12 | Debug a failing test | Layman | PASS | Left out: `retain-on-failure`, `show-trace` path, the Actions tab, the `--save-storage` detail, and the timeout 0. "clicks and typing" is a narrower word than "actions". |
| 13 | Debug a failing test | Bangla | PASS | Left out: the "sends no data out" detail and `--save-storage`. |
| 14 | Use Claude to create, explain, and refactor tests | Layman | PASS | Left out: Node.js 20, the install commands, `playwright-cli snapshot`, the "keep going until they pass" prompt, and the init-agents command. "connects Claude to a browser" is a loose restatement of "read the running app". |
| 15 | Use Claude to create, explain, and refactor tests | Bangla | PASS | Left out: `playwright-cli snapshot` and the "keep going until they pass" prompt. |
| 16 | Review a generated test | Layman | PASS | Left out: `first()` and `last()`, the lint rule name, "reason in a comment", and the sentence about weaker expected values. "the second button" is an illustration only. |
| 17 | Review a generated test | Bangla | PASS | Left out: the "weaker expected value" sentence and the "use environment variables and test accounts" advice. |
| 18 | Practice | Layman | FAIL | Step 2: "Ask it to run the test and show the output. <Cite n={5} />". Step 2 of the Technical panel has no cite 5. The cite is not supported there. Fix: remove the cite from step 2. |
| 19 | Practice | Bangla | FAIL | Step 2: "Test চালিয়ে output দেখাতে বলুন। <Cite n={5} />". Step 2 of the Technical panel has no cite 5. Fix: remove the cite from step 2. |
| 20 | Common mistakes | Layman | FAIL | "Record traces only for retries or failures." (Cite 16.) The Technical panel says `retain-on-failure` records each test and keeps only the traces of failed tests. So "record only for failures" is a different fact. Fix: "Use `on-first-retry` or `retain-on-failure`." |
| 21 | Common mistakes | Bangla | PASS | Left out: the "give Claude the live page with the Playwright CLI" option and the details of `on` in CI. |

Bangla notes:
- Section "Browser, context, page, and fixtures": the last sentence ("Technical panel-এর `loginPage` fixture-টি …") refers to a panel by name. This reads oddly for a reader of the Bangla panel alone. Not a FAIL.
- Section "Practice": "Tutorial-এর নিজের prompt-এ Claude-কে প্রতিটি line ব্যাখ্যা করতে বলুন" (in the Claude section) reads a little stiff. Not a FAIL.
- The Bangla panels address the reader as আপনি and keep commands, flags and paths in English. The hyphens between English words and Bangla suffixes are present in all the sentences I read. No translated command or product name found.

Open FAILs after round 2: 7

Script check of round 2: 21 rows, 7 FAIL rows.

## Voices fact check: agentic-qa / playwright-with-claude (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Install and configure Playwright Test | Layman | PASS | Left out: the default values, the config key table, the update command, and "parallel". |
| 2 | Install and configure Playwright Test | Bangla | PASS | Left out: "latest of each" for the Node.js versions, and the update command. |
| 3 | Write and run a test | Layman | PASS | Left out: `afterEach`, `afterAll`, `page.goto()`, the `login.spec.ts` command, the example code, and the use of projects for logged-in versus logged-out runs. |
| 4 | Write and run a test | Bangla | PASS | Left out: the example code and the `npx playwright test login.spec.ts` command. |
| 5 | Browser, context, page, and fixtures | Layman | PASS | Left out: the fixture table details, the isolation of fixtures between tests, and the `loginPage` example. "A test that fails does not leave a mess for the next test" restates "prevents cascading test failures". |
| 6 | Browser, context, page, and fixtures | Bangla | PASS | Left out: `APIRequestContext` and the "fast to create" detail. |
| 7 | Locators that survive change | Layman | FAIL | "`getByText()` finds text that you do not click, like a message." The Technical panel does not give "like a message". It says only "its text content" and "non-interactive elements such as `div` and `span`". Fix: "finds an element by its text. Use it for text that you do not click." |
| 8 | Locators that survive change | Layman | FAIL | "The page can change, and then Playwright clicks the wrong element." The word "can" was dropped, so the claim is stronger. The Technical panel says Playwright "can click an element that you did not intend". Fix: "Then Playwright can click the wrong element." |
| 9 | Locators that survive change | Bangla | PASS | Left out: `getByPlaceholder`, `getByAltText`, `getByTitle` details, the `testIdAttribute` setting, and the code examples. |
| 10 | Assertions and auto-waiting | Layman | FAIL | "On a web page, this can make a test flaky." The Technical panel says only "They can make a test flaky". It does not limit the claim to web pages. Fix: remove "On a web page,". |
| 11 | Assertions and auto-waiting | Bangla | FAIL | "web page-এ test flaky হতে পারে" has the same added scope, "web page-এ". The Technical panel gives no such scope. Fix: remove "web page-এ". |
| 12 | Debug a failing test | Layman | PASS | Left out: the `retain-on-failure` setting, the Actions tab, the `--save-storage` option, and `example.spec.ts:10`. "Clicks and typing" restates "your actions". |
| 13 | Debug a failing test | Bangla | PASS | Left out: the `--save-storage` option, the sends-no-data-out detail, and the command with a file and line. |
| 14 | Use Claude to create, explain, and refactor tests | Layman | FAIL | "**Playwright MCP** connects Claude to a browser." The Technical panel does not say this. It says only that the tool lets Claude read the running app through accessibility snapshots. Fix: "Playwright MCP lets Claude read the running app." |
| 15 | Use Claude to create, explain, and refactor tests | Bangla | PASS | Left out: `playwright-cli snapshot`, the sentence about the CLI install command (it is present), the full prompt texts, and the `git diff` request. |
| 16 | Review a generated test | Layman | FAIL | "The test does not pick 'the second button' with `nth()` without a good reason." The example "the second button" is not in the Technical panel. It also drops `first()` and `last()`. Fix: "The test does not use `nth()`, `first()`, or `last()` without a good reason." |
| 17 | Review a generated test | Bangla | PASS | Left out: the "weaker expected value" advice at the end. |
| 18 | Practice | Layman | PASS | Left out: `testDir`, the setup projects, `webServer`, the `getByLabel` and `getByRole` detail in `LoginPage`, the `^1.63.0` version, the `storageState` explanation, and the "unless the call sets its own timeout" limit. |
| 19 | Practice | Bangla | PASS | Same details left out as the Layman panel. |
| 20 | Common mistakes | Layman | PASS | Left out: the `nth()` or `first()` strict mode detail, and the Playwright CLI option. |
| 21 | Common mistakes | Bangla | PASS | Left out: the Playwright CLI option. |

Bangla notes:
- None. I found no translated commands or products, no missing hyphens, and no address other than আপনি. The Bangla reads naturally, with mixed English technical terms.

Open FAILs after round 3: 6

Script check of round 3: 21 rows, 6 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / playwright-with-claude (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| V7 | voices | RESOLVED | Layman now says "`getByText()` finds an element by its text. Use it for text that you do not click." The Technical panel says "`getByText()` \| Its text content" and "Use text locators for non-interactive elements such as `div` and `span`." The invented "like a message" is gone. |
| V8 | voices | RESOLVED | Layman now says "The page can change, and then Playwright can click the wrong element." The Technical panel says "when the page changes, Playwright can click an element that you did not intend." The word "can" is kept, and both use the cite S9. |
| V10 | voices | RESOLVED | Layman now says "They check one time only. This can make a test flaky." The Technical panel says "No. They can make a test flaky." The scope "On a web page" is gone. |
| V11 | voices | RESOLVED | Bangla now says "non-retrying assertion অপেক্ষা করে না, তাই test flaky হতে পারে।" The added "web page-এ" is gone. "হতে পারে" matches "can". |
| V14 | voices | RESOLVED | Layman now says "**Playwright MCP** lets Claude read the running app." The Technical panel says "Two tools let it read the running app" and lists Playwright MCP first. The "connects Claude to a browser" claim is gone. |
| V16 | voices | RESOLVED | Layman now says "The test does not use `nth()`, `first()`, or `last()` without a good reason." This matches the Technical row "No `nth()`, `first()`, or `last()` without a reason in a comment." The example "the second button" is gone, and all three methods are named. The cite S9 is the same as in the Technical panel. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
