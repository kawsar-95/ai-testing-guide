# Fact check: Playwright Automation with Claude

Page: `content/agentic-qa/playwright-with-claude.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-playwright-with-claude.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. After each full round, a script recounted the FAIL rows and looked each quoted phrase of a PASS up in the sources; its result is the line under the round.

## Fact check: agentic-qa / playwright-with-claude (round 1, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | Claude can write a Playwright test in seconds | none | FAIL | Fact about a product with no cite. Fix: remove it, or reword it as the tutorial's own opinion. |
| 2 | Install | `npm init playwright@latest` starts a new project or adds Playwright to an existing one | 1 | PASS | S1: "npm init playwright@latest"; "In existing projects dependencies are added to your current package.json." |
| 3 | Install | The command asks four questions: TypeScript or JavaScript (default TypeScript), tests folder (default `tests`, or `e2e` if `tests` exists), GitHub Actions workflow, install browsers (default yes) | 1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)"; "Tests folder name (default: tests, or e2e if tests already exists)"; "Add a GitHub Actions workflow"; "Install Playwright browsers (default: yes)" |
| 4 | Install | You can run it again later. It does not overwrite existing tests. | 1 | PASS | S1: "You can re-run the command later; it does not overwrite existing tests." |
| 5 | Install | Playwright downloads browser binaries and writes `playwright.config.ts`, `package.json`, a lock file, and `tests/example.spec.ts` | 1 | PASS | S1: "Playwright downloads required browser binaries and creates the scaffold below."; "playwright.config.ts"; "package.json"; "package-lock.json # Or yarn.lock / pnpm-lock.yaml"; "tests/ example.spec.ts" |
| 6 | Install | Playwright supports Chromium, WebKit, and Firefox on Windows, Linux, and macOS | 1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS" |
| 7 | Install | It needs Node.js 22.x, 24.x, or 26.x (the latest of each) | 1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 8 | Install | By default, tests run headless and in parallel across Chromium, Firefox, and WebKit | 1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 9 | Install | The newest entry in the release notes, read on 2026-11-15, is version 1.65 | 2 | PASS | S2 line 7: "Version 1.65", above "Version 1.64" |
| 10 | Install | Check your version with `npx playwright --version` | 1 | PASS | S1: "npx playwright --version" |
| 11 | Install | Update with `npm install -D @playwright/test@latest`, then `npx playwright install --with-deps` | 1 | PASS | S1: "npm install -D @playwright/test@latest"; "npx playwright install --with-deps" |
| 12 | Install | `playwright.config.ts` holds the target browsers, timeouts, retries, projects, and reporters | 1 | PASS | S1: "The playwright.config centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| 13 | Install | Config keys table: `testDir: 'tests'`, `fullyParallel: true`, `forbidOnly: !!process.env.CI`, `retries: process.env.CI ? 2 : 0`, `use.baseURL: 'http://localhost:3000'` | 3 | PASS | S3: "testDir: 'tests'," "fullyParallel: true," "forbidOnly: !!process.env.CI," "retries: process.env.CI ? 2 : 0," "baseURL: 'http://localhost:3000'," |
| 14 | Write and run | A test file imports `test` and `expect` from `@playwright/test` | 4 | PASS | S4: "import { test, expect } from '@playwright/test';" |
| 15 | Write and run | A test performs actions and asserts the state | none | FAIL | No cite. S4 says "they perform actions and assert the state against expectations." Fix: add Cite 4. |
| 16 | Write and run | `test.describe` groups tests | 4 | PASS | S4: "test.describe to declare a group of tests" |
| 17 | Write and run | `test.beforeEach` and `test.afterEach` run before and after each test | 4 | PASS | S4: "test.beforeEach and test.afterEach which are executed before/after each test" |
| 18 | Write and run | `test.beforeAll` and `test.afterAll` run once per worker | 4 | PASS | S4: "test.beforeAll and test.afterAll which are executed once per worker before/after all tests" |
| 19 | Write and run | The `page` fixture gives each test a fresh page | 4 | PASS | S4: "built in page fixture... Every test gets a fresh environment" |
| 20 | Write and run | `page.goto()` waits for the page to reach the load state | 4 | PASS | S4: "Playwright waits for the page to reach the load state before continuing." |
| 21 | Write and run | Example code block (describe, beforeEach, getByLabel, getByRole, getByText, `fill`, `click`, `toBeVisible`) | none | ADVICE | The page labels it "the tutorial's own". Every API in it appears in S4 and S9. |
| 22 | Write and run | Run table commands: `npx playwright test` (headless), `--headed`, `--ui`, `--project webkit`, `login.spec.ts`, `-g "..."`, `--last-failed`, `npx playwright show-report` | 5 | PASS | S5: "npx playwright test --headed"; "npx playwright test --ui"; "npx playwright test --project webkit"; "npx playwright test landing-page.spec.ts"; "use the -g flag followed by the title of the test"; "npx playwright test --last-failed"; "npx playwright show-report" |
| 23 | Write and run | The HTML report opens by itself if some tests failed | 5 | PASS | S5: "By default, the HTML report opens automatically if some tests failed" |
| 24 | Write and run | A project is a group of tests with the same configuration | 6 | PASS | S6: "A project is logical group of tests running with the same configuration." |
| 25 | Write and run | Use one project for each browser, or run the same tests logged in and logged out | 6 | PASS | S6: "run tests on different browsers and devices"; "run the same tests in a logged-in and logged-out state" |
| 26 | Browser, context, page | A browser runs one or more browser contexts. A context holds pages. | none | FAIL | No cite. S7 line 14 gives only "provides a default Page in that context" and says contexts can be "multiple" in one scenario. Fix: add Cite 7 and keep to those words. |
| 27 | Browser, context, page | A browser context is like an incognito profile. Contexts are fast to create and fully isolated, even in one browser. | 7 | PASS | S7: "BrowserContexts which are equivalent to incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser." |
| 28 | Browser, context, page | Playwright creates a context for each test and gives a default page in it | 7 | PASS | S7: "Playwright creates a context for each test, and provides a default Page in that context." |
| 29 | Browser, context, page | Each test has its own local storage, session storage, and cookies | 7 | PASS | S7: "each test has its own local storage, session storage, cookies etc." |
| 30 | Browser, context, page | One failed test does not leave state for the next test | none | FAIL | No cite. It is an inference from S7: "Every test runs independently from any other test." Fix: add Cite 7 and use the S7 wording. |
| 31 | Browser, context, page | One test can create several contexts, for example an admin and a user in a chat flow | 7 | PASS | S7: "Playwright can create multiple browser contexts within a single scenario... like a chat." and `test('admin and user'...` |
| 32 | Browser, context, page | A fixture sets up the environment for a test: everything it needs and nothing else. Fixtures are isolated between tests. | 8 | PASS | S8: "giving the test everything it needs and nothing else. Test fixtures are isolated between tests." |
| 33 | Browser, context, page | Built-in fixtures: `page` (isolated page), `context` (isolated context that the page belongs to), `browser` (shared across tests to save resources), `browserName` (`chromium`, `firefox`, or `webkit`), `request` (isolated `APIRequestContext`) | 8 | PASS | S8: "Isolated page for this test run."; "The page fixture belongs to this context as well."; "Browsers are shared across tests to optimize resources."; "Either chromium, firefox or webkit."; "Isolated APIRequestContext instance for this test run." |
| 34 | Browser, context, page | `test.extend()` creates a new `test` object with your own fixture | 8 | PASS | S8: "use test.extend() to create a new test object that will include it." |
| 35 | Browser, context, page | Code before `await use()` is setup. Code after it is teardown. | 8 | PASS | S8: "Each fixture has a setup and teardown phase before and after the await use() call" |
| 36 | Browser, context, page | Playwright sets up only the fixtures that a test uses | 8 | PASS | S8: "Playwright Test will setup only the ones needed by your test and nothing else." |
| 37 | Browser, context, page | `loginPage` fixture code block using `base.extend` and `await use(loginPage)` | none | ADVICE | The page labels it "the tutorial's own". The APIs are in S8. |
| 38 | Locators | A locator is a way to find an element on the page at any moment. Each action finds an up-to-date element. | 9 | PASS | S9: "locators represent a way to find element(s) on the page at any moment"; "Every time a locator is used for an action, an up-to-date DOM element is located" |
| 39 | Locators | The recommended built-in locators, in docs order: `getByRole`, `getByText`, `getByLabel`, `getByPlaceholder`, `getByAltText`, `getByTitle`, `getByTestId` | 9 | PASS | S9 lines 14-28: "These are the recommended built-in locators." then the seven methods in this order. |
| 40 | Locators | Table: `getByTestId` finds by `data-testid` (you can configure another one) | 9 | PASS | S9: "based on its data-testid attribute (other attributes can be configured)" |
| 41 | Locators | Role locators come first, because they are closest to how users and assistive technology see the page | 9 | PASS | S9: "We recommend prioritizing role locators... closest way to how users and assistive technology perceive the page." |
| 42 | Locators | Use text locators for non-interactive elements such as `div` and `span` | 9 | PASS | S9: "We recommend using text locators to find non interactive elements like div, span, p, etc." |
| 43 | Locators | Test ids are the most resilient, but they are not user facing | 9 | PASS | S9: "most resilient way of testing"; "testing by test ids is not user facing" |
| 44 | Locators | To use another attribute, set `testIdAttribute` in `use` of the config | 9 | PASS | S9: "use: { testIdAttribute: 'data-pw'" |
| 45 | Locators | Chain locators to narrow the search to one part of the page (with `filter({ hasText })`) | 10 | PASS | S10: "Locators can be chained to narrow down the search to a particular part of the page."; ".filter({ hasText: 'Product 2' })" |
| 46 | Locators | Locators are strict. An action throws an error if more than one element matches. | 9 | PASS | S9: "Locators are strict... will throw an exception if more than one element matches." |
| 47 | Locators | `first()`, `last()`, and `nth()` turn strictness off, but the docs do not recommend them: Playwright can click an element that you did not intend | 9 | PASS | S9: "opt-out from strictness check... locator.first(), locator.last(), and locator.nth(). These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." |
| 48 | Locators | Selectors tied to the DOM structure break when the DOM changes | 9 | PASS | S9: "These selectors can break when the DOM structure changes." |
| 49 | Locators | A selector on CSS classes breaks when a designer changes a class | 10 | PASS | S10: "Should the designer change something then the class might change, thus breaking your test." |
| 50 | Locators | The docs do not recommend CSS or XPath | 9 | PASS | S9: "CSS and XPath are not recommended" |
| 51 | Locators | Brittle and resilient code block (`#tsf > div:nth-child(2) > div.A8SBwf > input` and `getByRole('button', { name: 'submit' })`) | none | PASS | The code mirrors S9: "'#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'". The label "Brittle" is stated in S9. |
| 52 | Locators | Codegen picks locators in this order: role, text, then test id | 11 | PASS | S11: "prioritizing role, text and test id locators" |
| 53 | Assertions | Before an action, Playwright runs actionability checks and waits. If they do not pass within the timeout, the action fails with a `TimeoutError`. | 12 | PASS | S12: "It auto-waits for all the relevant checks to pass... action fails with the TimeoutError." |
| 54 | Assertions | For `click()`: one element, visible, stable (not animating), receives events (no overlay), enabled, not inert | 12 | PASS | S12: "locator resolves to exactly one element"; "element is Visible"; "Stable, as in not animating"; "Receives Events, as in not obscured by other elements"; "element is Enabled"; "element is Not Inert" |
| 55 | Assertions | The `force` option turns off the non-essential checks | 12 | PASS | S12: "force option that disables non-essential actionability checks" |
| 56 | Assertions | So you do not need manual waits | 4 | PASS | S4: "You don't need to add manual waits or deal with race conditions." |
| 57 | Assertions | An auto-retrying assertion checks again and again until true or the assertion timeout ends. These assertions are async, so you must `await` them. | 13 | PASS | S13: "will retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them." |
| 58 | Assertions | Auto-retrying examples: `toBeVisible()`, `toHaveText()`, `toHaveURL()`, `toHaveCount()`, `toHaveValue()` | 13 | PASS | S13 list: "toHaveCount()", "toHaveText()", "toHaveValue()", "toHaveURL()"; "toBeVisible" appears in the S13 examples. |
| 59 | Assertions | Non-retrying: `toBe()`, `toEqual()`, `toBeTruthy()`, `toContain()`. They can make a test flaky. | 13 | PASS | S13: "do not auto-retry... using non-retrying assertions can lead to a flaky test." and `expect(value).toBe()`, `toBeTruthy()`, `toContain()`, `toEqual()` |
| 60 | Assertions | For a complex check that must retry, use `expect.poll` or `expect.toPass` | 13 | PASS | S13: "For more complex assertions that need to be retried, use expect.poll or expect.toPass." |
| 61 | Assertions | A soft assertion (`expect.soft`) does not stop the test, but marks it as failed | 13 | PASS | S13: "failed soft assertions do not terminate test execution, but mark the test as failed." |
| 62 | Assertions | Wrong way and right way code block (`isVisible()` inside `expect`, vs `await expect(...).toBeVisible()`) | 10 | PASS | S10: "expect(await page.getByText('welcome').isVisible()).toBe(true);" and "await expect(page.getByText('welcome')).toBeVisible();" |
| 63 | Assertions | Default timeout is 5 seconds for each assertion | 13 | PASS | S13: "By default, the timeout for assertions is set to 5 seconds." |
| 64 | Assertions | Default timeout is 30 seconds for each test | 14 | PASS | S14: "a timeout for each test, 30 seconds by default." |
| 65 | Assertions | Callout: a fixed sleep is a smell, wait with a web-first assertion, find out why before you raise a timeout. Names `page.waitForTimeout(3000)`. | none | ADVICE | The page labels it "The tutorial's advice". `waitForTimeout` is a real API name but the callout states no tool behavior. |
| 66 | Debug | Playwright has four debug tools | none | FAIL | No source says "four". Fix: reword to "This section covers UI mode, the trace viewer, the Inspector, and codegen". |
| 67 | Debug | UI mode (`npx playwright test --ui`) lets you explore, run, and debug tests with time travel and a watch mode | 15 | PASS | S15 line 10 contains "time travel"; line 76: "activate watch mode which will re-run the test when you make changes". S5 gives `npx playwright test --ui`. |
| 68 | Debug | The pick locator button shows the locator for each element of the DOM snapshot | 15 | PASS | S15: "Click on the pick locator button and hover over the DOM snapshot to see the locator for each element highlighted" |
| 69 | Debug | A trace records each action of a test | 16 | PASS | S16: "In the Actions tab you can see what locator was used for every action and how long each one took to run." |
| 70 | Debug | `npx playwright test --trace on` records a trace for each test, during development | 16 | PASS | S16: "To record a trace during development mode set the --trace flag to on"; "npx playwright test --trace on" |
| 71 | Debug | `trace: 'on-first-retry'` records a trace only on the first retry, for CI | 16 | PASS | S16: "Traces should be run on continuous integration on the first retry"; "'on-first-retry' - Record a trace only when retrying a test for the first time." |
| 72 | Debug | `trace: 'retain-on-failure'` records each test, but keeps only the traces of failed tests | 16 | PASS | S16: "'retain-on-failure' - Record a trace for each test, but remove it from successful test runs." |
| 73 | Debug | `npx playwright show-trace path/to/trace.zip` opens a saved trace | 16 | PASS | S16: "npx playwright show-trace path/to/trace.zip" |
| 74 | Debug | `trace: 'on'` for every test is not recommended because it is performance heavy | 16 | PASS | S16: "'on' - Record a trace for each test. (not recommended as it's performance heavy)" |
| 75 | Debug | In the Actions tab you see the locator and duration of each action, with Before and After snapshots | 16 | PASS | S16: "In the Actions tab you can see what locator was used for every action and how long each one took to run... Use the Before and After tabs" |
| 76 | Debug | The trace viewer loads the trace in your browser and sends no data out | 16 | PASS | S16: "Trace Viewer loads the trace entirely in your browser and does not transmit any data externally." |
| 77 | Debug | Inspector (`--debug`) opens the Playwright Inspector and a headed browser, with default timeout 0 | 17 | PASS | S17: "Run your tests with the --debug flag to open the inspector."; "Browsers launch in headed mode"; "Default timeout is set to 0 (= no timeout)" |
| 78 | Debug | `npx playwright test example.spec.ts:10 --debug` debugs one test by file and line | 5 | PASS | S5: "npx playwright test example.spec.ts:10 --debug" |
| 79 | Debug | Add `page.pause()` to stop at one point | 17 | PASS | S17: "you can add a page.pause() method to your test... only stop on the page.pause()." |
| 80 | Debug | Codegen (`npx playwright codegen <url>`) records your actions as test code | 11 | PASS | S11: "Use the codegen command to run the test generator followed by the URL"; "Playwright will record your actions and generate the test code" |
| 81 | Debug | From the toolbar you can add three assertions: visibility, text, and value | 11 | PASS | S11: "'assert visibility'"; "'assert text'"; "'assert value'" |
| 82 | Debug | `--save-storage` saves cookies, localStorage, and IndexedDB data at the end of the session | 11 | PASS | S11: "Run codegen with --save-storage to save cookies, localStorage and IndexedDB data at the end of the session." |
| 83 | Debug | Callout: codegen code is a first draft, it adds only the assertions that you choose | none | ADVICE | The page labels it "The tutorial's advice". |
| 84 | Use Claude | Claude can draft a test fast | none | FAIL | Fact about a product with no cite. Fix: remove it, or label it as the tutorial's own view. |
| 85 | Use Claude | Claude guesses locators when it sees only source code | none | FAIL | Claim about Claude's behavior with no cite. Not in S18, S19, or S20. Fix: reword as advice ("A live page gives Claude real roles and names to use") or remove it. |
| 86 | Use Claude | Playwright MCP: add with `claude mcp add playwright npx @playwright/mcp@latest`; needs Node.js 20 or newer | 18 | PASS | S18: "claude mcp add playwright npx @playwright/mcp@latest"; "Node.js 20 or newer" |
| 87 | Use Claude | It works through structured accessibility snapshots: page elements with roles and text | 18 | PASS | S18: "returns a structured snapshot showing the page elements, their roles, and text content." |
| 88 | Use Claude | Playwright CLI: `npm install -g @playwright/cli@latest`, then `playwright-cli install --skills` | 19 | PASS | S19: "npm install -g @playwright/cli@latest"; "playwright-cli install --skills" |
| 89 | Use Claude | `playwright-cli snapshot` captures the page; `playwright-cli generate-locator <ref>` gives a Playwright locator for one element | 19 | PASS | S19: "playwright-cli snapshot # capture page snapshot to obtain element ref"; "playwright-cli generate-locator <ref> # generate a playwright locator for an element" |
| 90 | Use Claude | The README says that CLI calls use fewer tokens than MCP | 19 | PASS | S19: "CLI invocations are more token-efficient" |
| 91 | Use Claude | Ask Claude for the command that it ran and its output. A claim that "all tests pass" alone tells you very little. | 20 | PASS | S20: "ask Claude for *evidence*: the command it ran and its output... "All tests pass" on its own tells you very little" |
| 92 | Use Claude | Put the check in the prompt, e.g. "run the tests after, and keep going until they pass" | 20 | PASS | S20: "`run the auth tests after, and keep going until they pass`" |
| 93 | Use Claude | `/code-review` reviews the diff in a fresh subagent that never saw your conversation | 20 | PASS | S20: "/code-review reviews the diff in a fresh subagent that never saw your conversation." |
| 94 | Use Claude | A reviewer that you ask to find problems will always find some, so ask it to skip style | 20 | PASS | S20: "A reviewer that's asked to find problems will always find *something*." and "skip style" |
| 95 | Use Claude | Example prompts (explain spec; refactor `tests/login.spec.ts` into a page object and fixture; show outputs and `git diff`) | none | ADVICE | The page labels them "the tutorial's own". They contain no tool facts. |
| 96 | Use Claude | Playwright ships three agents (planner, generator, healer), set up with `npx playwright init-agents --loop=claude` | 21 | PASS | S21: "three Playwright Test Agents out of the box: planner, generator and healer"; "npx playwright init-agents --loop=claude" |
| 97 | Review | Checklist rows (assertion on what the user sees, `await`, no `isVisible()` in `expect`, no sleep, locator choice, no `nth()`, no `force: true`, independence, no secrets, assertion can fail, show output) | none | ADVICE | The page labels it "The tutorial's checklist". |
| 98 | Review | Retrying assertions are async and must be awaited | 13 | PASS | S13: "retrying assertions are async, so you must await them." |
| 99 | Review | The lint rule `@typescript-eslint/no-floating-promises` finds a missing `await` | 10 | PASS | S10: "Use @typescript-eslint/no-floating-promises ESLint rule to make sure there are no missing awaits" |
| 100 | Review | `isVisible()` inside a plain `expect` checks once and does not wait | 10 | PASS | S10: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 101 | Review | Playwright already waits before actions and in web-first assertions (reason for no sleep) | 4 | PASS | S4: "Playwright automatically waits for actionability checks to pass before performing each action." Web-first waiting is in S13. |
| 102 | Review | DOM-tied selectors break when the DOM changes | 9 | PASS | See row 48. |
| 103 | Review | `nth()`, `first()`, `last()` can click an element that you did not intend | 9 | PASS | See row 47. |
| 104 | Review | `force: true` turns off non-essential actionability checks | 12 | PASS | See row 55. |
| 105 | Review | Each test gets its own context (independence) | 7 | PASS | See row 28. |
| 106 | Review | A claim of success alone tells you very little | 20 | PASS | See row 91. |
| 107 | Practice | dMoney Playwright project is in `dmoney-web-react/` | none | PASS-REPO | `repo/dmoney-web-react/playwright.config.ts` exists. |
| 108 | Practice | Config uses `testDir: './e2e'` | none | PASS-REPO | `playwright.config.ts`: "testDir: './e2e',". |
| 109 | Practice | Config keeps traces with `trace: 'retain-on-failure'` | none | PASS-REPO | `playwright.config.ts`: "trace: 'retain-on-failure',". |
| 110 | Practice | One project for each role (`admin` depends on `admin-setup`) | none | PASS-REPO | `playwright.config.ts`: "name: 'admin', ... dependencies: ['admin-setup']," (and an `agent` project). |
| 111 | Practice | `webServer` starts the web app and the API, or reuses running servers | none | PASS-REPO | `playwright.config.ts`: "// Reuses servers that are already running; otherwise starts them." and "reuseExistingServer: true," for ports 5000 and 3000. |
| 112 | Practice | `e2e/pages/LoginPage.ts` finds fields with `getByLabel` and the button with `getByRole` | none | PASS-REPO | `LoginPage.ts`: "page.getByLabel('Email or Phone Number')"; "page.getByRole('button', { name: /^Login/ })" |
| 113 | Practice | An admin login has no OTP step and lands on `/profile` | none | PASS-REPO | `LoginPage.ts`: "Admin login: no OTP step, lands on /profile once the session is stored." |
| 114 | Practice | Admin credentials come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` | none | PASS-REPO | `e2e/test-data/users.ts`: "email: process.env.ADMIN_EMAIL \|\| 'admin@dmoney.com'"; "password: process.env.ADMIN_PASSWORD \|\| '1234'" |
| 115 | Practice | The repo asks for `@playwright/test` `^1.63.0` | none | PASS-REPO | `dmoney-web-react/package.json` line 25: "\"@playwright/test\": \"^1.63.0\"," |
| 116 | Practice | Step 1: start Claude Code in `dmoney-web-react/` with Playwright MCP added | 18 | PASS | See row 86. The prompt text is ADVICE. |
| 117 | Practice | Step 2 prompt uses `test.use({ storageState: { cookies: [], origins: [] } })` | none | PASS | S8: "test.use({ baseURL: ... })" and "override the testOptions.storageState fixture". Both are in S8, which this step does not cite. The prompt is ADVICE. |
| 118 | Practice | Step 2 command `npx playwright test e2e/tests/admin/admin-login.spec.ts --project=admin` | none | PASS | S17: "npx playwright test --project=chromium --debug" shows the `--project=` form. S5 shows a file argument. `admin` is in the repo config (row 110). |
| 119 | Practice | Step 2: "Expect one passing test in the output" | 5 | FAIL | S5 never gives a pass count or any run output ("passed" appears only in the HTML Reporter sentence). Fix: drop the cite and mark it as the tutorial's expectation. |
| 120 | Practice | Step 5: the test fails after the assertion timeout of 5 seconds, unless the call sets its own timeout | 13 | PASS | S13: "timeout for assertions is set to 5 seconds"; "You can either pass this timeout or configure it once via the testConfig.expect value" |
| 121 | Practice | Step 6: open the HTML report with `npx playwright show-report`, then the trace | 5 | PASS | S5: "npx playwright show-report". S16: "You can then open the HTML report and click on the trace icon to open the trace." |
| 122 | Practice | Step 6: in the Actions tab, find the failed assertion and see Before and After snapshots | 16 | PASS | See row 75. |
| 123 | Practice | Step 7: "Only the new spec should be in git diff" | none | ADVICE | It is the tutorial's own exercise step. |
| 124 | Common mistakes | Ask for the command and output (claim of success tells you little) | 20 | PASS | See row 91. |
| 125 | Common mistakes | Playwright waits before each action | 4 | PASS | See row 101. |
| 126 | Common mistakes | Use an auto-retrying assertion with `await` instead of `expect(await locator.isVisible()).toBe(true)` | 10 | PASS | See row 62. |
| 127 | Common mistakes | Give Claude the live page with Playwright MCP or the Playwright CLI | 18 | PASS | S18 and S19 support both tools. The cite names only S18, but the claim is advice. |
| 128 | Common mistakes | Prefer role locators | 9 | PASS | See row 41. |
| 129 | Common mistakes | Strict mode error "fixed" with `nth()` or `first()`: make the locator unique with a filter or a chain | 9 | PASS | S9: "try to come up with a unique locator that will pass the strictness criteria." S9 also covers filtering and chaining. |
| 130 | Common mistakes | Use `on-first-retry` or `retain-on-failure`. `on` is performance heavy. | 16 | PASS | See rows 71, 72, 74. |
| 131 | Common mistakes | Ask Claude not to change assertions and read the diff (the tutorial's advice) | none | ADVICE | The page labels it "the tutorial's advice". |
| 132 | Key words | Playwright Test: "The test runner of Playwright, with `test`, `expect`, fixtures, and the CLI" | none | FAIL | The row adds "the CLI" as part of Playwright Test, which the page never says. S1 says "It bundles test runner, assertions, isolation, parallelization and rich tooling." Fix: "The test runner of Playwright, with `test`, `expect`, and fixtures." |
| 133 | Key words | Browser context: isolated, incognito-like profile, one for each test | 7 | PASS | Restates rows 27-28. |
| 134 | Key words | Fixture: the environment a test needs, such as `page`; add your own with `test.extend()` | 8 | PASS | Restates rows 32-34. |
| 135 | Key words | Locator: a way to find an element at the moment of each action | 9 | PASS | Restates row 38. |
| 136 | Key words | Role locator: `getByRole()` by accessibility role and name; docs recommend it first | 9 | PASS | Restates rows 39-41. |
| 137 | Key words | Strictness: an action throws an error if more than one element matches | 9 | PASS | Restates row 46. |
| 138 | Key words | Actionability checks: visible, stable, enabled | 12 | PASS | Restates rows 53-54. |
| 139 | Key words | Web-first assertion: `await expect(...)` that retries until true or timeout | 13 | PASS | Restates row 57. |
| 140 | Key words | Trace viewer: shows each recorded action with its locator and snapshots | 16 | PASS | Restates rows 69 and 75. |
| 141 | Key words | UI mode: `--ui`, run, watch, and debug with time travel | 15 | PASS | Restates row 67. |
| 142 | Key words | Codegen: `npx playwright codegen`, records your actions as test code | 11 | PASS | Restates row 80. |
| 143 | Key words | Playwright MCP: "An MCP server that lets Claude use a browser through accessibility snapshots" | none | FAIL | The page never calls Playwright MCP an "MCP server" or says it "lets Claude use a browser". It says only that it is added with `claude mcp add` and works through accessibility snapshots. S18 does call it "The Playwright MCP server". Fix: "A tool that you add to Claude Code. It reads the page through accessibility snapshots." |

Open FAILs after round 1: 10

Script check of round 1: 143 rows, 10 FAIL rows, 1 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / playwright-with-claude (round 2, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Install | `npm init playwright@latest` starts a new project or adds Playwright to an existing one | 1 | PASS | S1: "The command below either initializes a new project or adds Playwright to an existing one." / "npm init playwright@latest" |
| 2 | Install | The command asks four questions: TypeScript or JavaScript (default TypeScript); tests folder (default `tests`, or `e2e` if `tests` exists); GitHub Actions workflow; install browsers (default yes) | 1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)"; "Tests folder name (default: tests, or e2e if tests already exists)"; "Add a GitHub Actions workflow"; "Install Playwright browsers (default: yes)" |
| 3 | Install | You can run it again later; it does not overwrite existing tests | 1 | PASS | S1: "You can re-run the command later; it does not overwrite existing tests." |
| 4 | Install | It downloads browser binaries and writes `playwright.config.ts`, `package.json`, a lock file, and `tests/example.spec.ts` | 1 | PASS | S1: "Playwright downloads required browser binaries and creates the scaffold below. playwright.config.ts ... package.json ... package-lock.json # Or yarn.lock / pnpm-lock.yaml ... example.spec.ts" |
| 5 | Install | Playwright supports Chromium, WebKit, and Firefox on Windows, Linux, and macOS | 1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS" |
| 6 | Install | It needs Node.js 22.x, 24.x, or 26.x (the latest of each) | 1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 7 | Install | By default tests run headless and in parallel across Chromium, Firefox, and WebKit | 1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 8 | Install | The newest entry in the release notes on 2026-11-15 is version 1.65 | 2 | PASS | S2 line 7: "Version 1.65" (the first entry, above 1.64) |
| 9 | Install | Check your version with `npx playwright --version` | 1 | PASS | S1: "npx playwright --version" |
| 10 | Install | Update with `npm install -D @playwright/test@latest`, then `npx playwright install --with-deps` | 1 | PASS | S1: "npm install -D @playwright/test@latest" / "npx playwright install --with-deps" |
| 11 | Install | `playwright.config.ts` holds target browsers, timeouts, retries, projects, reporters | 1 | PASS | S1: "target browsers, timeouts, retries, projects, reporters and more" |
| 12 | Install | Config keys table: `testDir 'tests'`, `fullyParallel true`, `forbidOnly !!process.env.CI`, `retries process.env.CI ? 2 : 0`, `use.baseURL 'http://localhost:3000'` | 3 | PASS | S3: "testDir: 'tests',"; "fullyParallel: true,"; "forbidOnly: !!process.env.CI,"; "retries: process.env.CI ? 2 : 0,"; "baseURL: 'http://localhost:3000',". `baseURL` is under `use` in the S3 config. |
| 13 | Write and run | A test file imports `test` and `expect` from `@playwright/test` | 4 | PASS | S4: "import { test, expect } from '@playwright/test';" |
| 14 | Write and run | A test performs actions and asserts the state against expectations | 4 | PASS | S4: "they perform actions and assert the state against expectations" |
| 15 | Write and run | `test.describe` groups tests | 4 | PASS | S4: "test.describe to declare a group of tests" |
| 16 | Write and run | `test.beforeEach` and `test.afterEach` run before and after each test | 4 | PASS | S4: "test.beforeEach and test.afterEach which are executed before/after each test" |
| 17 | Write and run | `test.beforeAll` and `test.afterAll` run once per worker | 4 | PASS | S4: "test.beforeAll and test.afterAll which are executed once per worker before/after all tests" |
| 18 | Write and run | The `page` fixture gives each test a fresh page | 4 | PASS | S4: "the built in page fixture ... Pages are isolated between tests ... Every test gets a fresh environment" |
| 19 | Write and run | `page.goto()` waits for the page to reach the load state | 4 | PASS | S4: "Playwright waits for the page to reach the load state before continuing." |
| 20 | Write and run | Example spec code (`getByLabel`, `getByRole`, `toBeVisible`, `test.describe`, `beforeEach`, `goto`) | none | ADVICE | The page labels it "the tutorial's own". Every API it uses appears in S4, S9 or S10. |
| 21 | Write and run | Run table: `npx playwright test` runs all tests, headless | 5 | PASS | S5: "Tests run in parallel by default and in headless mode" |
| 22 | Write and run | `--headed` shows the browser window | 5 | PASS | S5: "run your tests in headed mode using the --headed CLI argument" |
| 23 | Write and run | `--ui` opens UI mode | 5 | PASS | S5: "run your tests in UI mode using the --ui flag" |
| 24 | Write and run | `--project webkit` runs one project only | 5 | PASS | S5: "use the --project flag followed by the browser name. npx playwright test --project webkit" |
| 25 | Write and run | `npx playwright test login.spec.ts` runs one file | 5 | PASS | S5: "To run a single test file, pass in the test file name ... npx playwright test landing-page.spec.ts". `login.spec.ts` is the reader's own file name. |
| 26 | Write and run | `-g "wrong password"` runs the tests with that title | 5 | PASS | S5: "To run a test with a specific title, use the -g flag" |
| 27 | Write and run | `--last-failed` runs only the tests that failed last time | 5 | PASS | S5: "To run only the tests that failed in the last test run ... --last-failed flag" |
| 28 | Write and run | `npx playwright show-report` opens the HTML report | 5 | PASS | S5: "otherwise you can open it with the following command. npx playwright show-report" |
| 29 | Write and run | The HTML report opens by itself if some tests failed | 5 | PASS | S5: "By default, the HTML report opens automatically if some tests failed" |
| 30 | Write and run | A project is a group of tests with the same configuration | 6 | PASS | S6: "A project is logical group of tests running with the same configuration." |
| 31 | Write and run | Use one project for each browser, or run the same tests logged in and logged out | 6 | PASS | S6: "run your tests in multiple browsers such as chromium, webkit and firefox"; "run the same tests in a logged-in and logged-out state" |
| 32 | Browser, context, fixtures | Playwright can create multiple browser contexts in one scenario; a page belongs to a context | 7 | PASS | S7: "Playwright can create multiple browser contexts within a single scenario."; code comment: "\"page\" belongs to this context." |
| 33 | Browser, context, fixtures | A context is like an incognito profile; fast to create and fully isolated, even in one browser | 7 | PASS | S7: "incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser." |
| 34 | Browser, context, fixtures | Playwright creates a context for each test and gives a default page | 7 | PASS | S7: "Playwright creates a context for each test, and provides a default Page in that context." |
| 35 | Browser, context, fixtures | Each test has its own local storage, session storage, cookies; isolation prevents cascading test failures | 7 | PASS | S7: "each test has its own local storage, session storage, cookies etc."; "prevents cascading test failures" |
| 36 | Browser, context, fixtures | One test can create several contexts, for example an admin and a user in a chat flow | 7 | PASS | S7: "multi-user functionality, like a chat."; "test('admin and user'" |
| 37 | Browser, context, fixtures | A fixture sets up the environment for a test: everything it needs and nothing else; fixtures are isolated between tests | 8 | PASS | S8: "giving the test everything it needs and nothing else. Test fixtures are isolated between tests." |
| 38 | Browser, context, fixtures | `page`: an isolated page for this test | 8 | PASS | S8 fixture table; line 40: "The page fixture belongs to this context as well." The same table lists an isolated page for `page`. |
| 39 | Browser, context, fixtures | `context`: the isolated context that the page belongs to | 8 | PASS | S8: "Isolated context for this test run. The page fixture belongs to this context as well." |
| 40 | Browser, context, fixtures | `browser`: shared across tests to save resources | 8 | PASS | S8: "Browsers are shared across tests to optimize resources." |
| 41 | Browser, context, fixtures | `browserName`: `chromium`, `firefox`, or `webkit` | 8 | PASS | S8: "Either chromium, firefox or webkit." |
| 42 | Browser, context, fixtures | `request`: an isolated `APIRequestContext` for API calls | 8 | PASS | S8: "Isolated APIRequestContext instance for this test run." |
| 43 | Browser, context, fixtures | `test.extend()` creates a new `test` object with your own fixture | 8 | PASS | S8: "use test.extend() to create a new test object that will include it." |
| 44 | Browser, context, fixtures | Code before `await use()` is setup; code after is teardown | 8 | PASS | S8: "setup and teardown phase before and after the await use() call" |
| 45 | Browser, context, fixtures | Playwright sets up only the fixtures that a test uses | 8 | PASS | S8: "Playwright Test will setup only the ones needed by your test and nothing else." |
| 46 | Browser, context, fixtures | Custom fixture code (`base.extend`, `use`, `LoginPage`) | none | ADVICE | The page labels it "the tutorial's own". `test as base`, `extend` and `use` are all in S8. |
| 47 | Locators | A locator is a way to find an element at any moment; each action finds an up-to-date element | 9 | PASS | S9: "locators represent a way to find element(s) on the page at any moment."; "Every time a locator is used for an action, an up-to-date DOM element is located" |
| 48 | Locators | Recommended built-in locators table: `getByRole`, `getByText`, `getByLabel`, `getByPlaceholder`, `getByAltText`, `getByTitle`, `getByTestId` (`data-testid`, configurable), in docs order | 9 | PASS | S9 "Quick Guide" lists the seven in that order: "title attribute"; "data-testid attribute (other attributes can be configured)" |
| 49 | Locators | Docs recommend role locators first, closest to how users and assistive technology see the page | 9 | PASS | S9: "We recommend prioritizing role locators ... closest way to how users and assistive technology perceive the page." |
| 50 | Locators | Use text locators for non-interactive elements such as `div` and `span` | 9 | PASS | S9: "text locators to find non interactive elements like div, span, p" |
| 51 | Locators | Test ids are the most resilient but not user facing | 9 | PASS | S9: "the most resilient way of testing"; "not user facing" |
| 52 | Locators | To use another attribute, set `testIdAttribute` in `use` of the config | 9 | PASS | S9: "use: { ... testIdAttribute: 'data-pw'" |
| 53 | Locators | Chain locators to narrow the search to one part of the page | 10 | PASS | S10: "Locators can be chained to narrow down the search to a particular part of the page." |
| 54 | Locators | Chaining code block (`getByRole('listitem').filter({ hasText })`) | 10 | PASS | S10: ".filter({ hasText: 'Product 2' })" |
| 55 | Locators | Locators are strict; an action throws if more than one element matches | 9 | PASS | S9: "Locators are strict. ... will throw an exception if more than one element matches." |
| 56 | Locators | `first()`, `last()`, `nth()` turn strictness off but are not recommended: Playwright may click an unintended element | 9 | PASS | S9: "opt-out from strictness check ... locator.first(), locator.last(), and locator.nth(). These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." |
| 57 | Locators | Selectors tied to the DOM structure break when the DOM changes | 9 | PASS | S9: "XPath and CSS selectors can be tied to the DOM structure ... can break when the DOM structure changes." |
| 58 | Locators | A selector on CSS classes breaks when a designer changes a class | 10 | PASS | S10: "Should the designer change something then the class might change, thus breaking your test." |
| 59 | Locators | The docs do not recommend CSS or XPath | 9 | PASS | S9: "CSS and XPath are not recommended" |
| 60 | Locators | Brittle/resilient code block (`#tsf > div:nth-child(2) > div.A8SBwf > input` vs `getByRole`) | none | ADVICE | The code is a contrast example. Its APIs (`locator`, `getByRole`) are in S9. |
| 61 | Locators | Codegen picks locators in this order: role, text, then test id | 11 | PASS | S11: "prioritizing role, text and test id locators" |
| 62 | Assertions | Before an action Playwright runs actionability checks and waits; if not passed within the timeout, the action fails with `TimeoutError` | 12 | PASS | S12: "auto-waits for all the relevant checks to pass ... action fails with the TimeoutError." |
| 63 | Assertions | For `click()` the element must resolve to one element, be visible and stable, receive events, be enabled and not inert | 12 | PASS | S12: "locator resolves to exactly one element"; "Visible"; "Stable"; "Receives Events"; "Enabled"; "Not Inert" |
| 64 | Assertions | The `force` option turns off the non-essential checks | 12 | PASS | S12: "force option that disables non-essential actionability checks" |
| 65 | Assertions | So you do not need manual waits | 4 | PASS | S4: "You don't need to add manual waits" |
| 66 | Assertions | An auto-retrying assertion rechecks until the condition is true or the assertion timeout ends; they are async, so `await` them | 13 | PASS | S13: "retry until the assertion passes, or the assertion timeout is reached. Note that retrying assertions are async, so you must await them." |
| 67 | Assertions | Auto-retrying examples `toBeVisible()`, `toHaveText()`, `toHaveURL()`, `toHaveCount()`, `toHaveValue()` | 13 | PASS | S13 lists all five as `await expect(locator/page).…` retrying assertions. |
| 68 | Assertions | Non-retrying `toBe()`, `toEqual()`, `toBeTruthy()`, `toContain()` do not wait and can make a test flaky | 13 | PASS | S13: "do not auto-retry. ... using non-retrying assertions can lead to a flaky test." |
| 69 | Assertions | For a complex check that must retry, use `expect.poll` or `expect.toPass` | 13 | PASS | S13: "use expect.poll or expect.toPass." |
| 70 | Assertions | A soft assertion (`expect.soft`) does not stop the test but marks it failed | 13 | PASS | S13: "failed soft assertions do not terminate test execution, but mark the test as failed." |
| 71 | Assertions | Wrong/right code: `expect(await ….isVisible()).toBe(true)` does not wait; `await expect(…).toBeVisible()` waits | 10 | PASS | S10: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 72 | Assertions | Default timeouts: 5 seconds for each assertion | 13 | PASS | S13: "By default, the timeout for assertions is set to 5 seconds." |
| 73 | Assertions | Default timeouts: 30 seconds for each test | 14 | PASS | S14: "a timeout for each test, 30 seconds by default" |
| 74 | Assertions | Callout: fixed sleep, `page.waitForTimeout(3000)`, is a smell | none | ADVICE | The page labels it "The tutorial's advice". |
| 75 | Debug | UI mode (`npx playwright test --ui`): explore, run and debug with time travel and a watch mode | 15 | PASS | S15 line 10 contains "time travel"; S15: "activate watch mode which will re-run the test". Combined with S5: "--ui". |
| 76 | Debug | The pick locator button shows the locator for each element of the DOM snapshot | 15 | PASS | S15: "Click on the pick locator button and hover over the DOM snapshot to see the locator for each element" |
| 77 | Debug | A trace records each action of a test | 16 | PASS | S16: "explore recorded Playwright traces"; "what locator was used for every action" |
| 78 | Debug | `npx playwright test --trace on` records a trace for each test, during development | 16 | PASS | S16: "npx playwright test --trace on"; "'on' - Record a trace for each test." |
| 79 | Debug | `trace: 'on-first-retry'` records a trace only on the first retry, for CI | 16 | PASS | S16: "Traces should be run on continuous integration on the first retry ... trace: 'on-first-retry'" |
| 80 | Debug | `trace: 'retain-on-failure'` records each test but keeps only the traces of failed tests | 16 | PASS | S16: "Record a trace for each test, but remove it from successful test runs." |
| 81 | Debug | `npx playwright show-trace path/to/trace.zip` opens a saved trace | 16 | PASS | S16: "npx playwright show-trace path/to/trace.zip" |
| 82 | Debug | `trace: 'on'` for every test is not recommended, because it is performance heavy | 16 | PASS | S16: "(not recommended as it's performance heavy)" |
| 83 | Debug | The Actions tab shows the locator and duration of each action, with Before and After snapshots | 16 | PASS | S16: "In the Actions tab you can see what locator was used for every action and how long each one took ... Before and After tabs" |
| 84 | Debug | The trace viewer loads the trace in your browser and sends no data out | 16 | PASS | S16: "loads the trace entirely in your browser and does not transmit any data externally." |
| 85 | Debug | Inspector (`--debug`) opens the Inspector and a headed browser, with default timeout 0 | 17 | PASS | S17: "Run your tests with the --debug flag to open the inspector ... Browsers launch in headed mode ... Default timeout is set to 0" |
| 86 | Debug | `npx playwright test example.spec.ts:10 --debug` debugs one test by file and line | 5 | PASS | S5: "npx playwright test example.spec.ts:10 --debug" |
| 87 | Debug | Add `page.pause()` to stop at one point | 17 | PASS | S17: "add a page.pause() method ... only stop on the page.pause()" |
| 88 | Debug | Codegen (`npx playwright codegen <url>`) records your actions as test code | 11 | PASS | S11: "npx playwright codegen demo.playwright.dev/todomvc"; "generate the code for the user interactions" |
| 89 | Debug | From the toolbar you can add three assertions: visibility, text, value | 11 | PASS | S11: "'assert visibility' ... 'assert text' ... 'assert value'" |
| 90 | Debug | `--save-storage` saves cookies, localStorage, and IndexedDB data at the end of the session | 11 | PASS | S11: "--save-storage to save cookies, localStorage and IndexedDB data at the end of the session" |
| 91 | Debug | Callout: codegen code is a first draft, add the checks that matter | none | ADVICE | The page labels it "The tutorial's advice". |
| 92 | Use Claude | Playwright MCP: add it with `claude mcp add playwright npx @playwright/mcp@latest` | 18 | PASS | S18: "claude mcp add playwright npx @playwright/mcp@latest" |
| 93 | Use Claude | Playwright MCP needs Node.js 20 or newer | 18 | PASS | S18: "Node.js 20 or newer" |
| 94 | Use Claude | MCP works through structured accessibility snapshots: page elements with roles and text | 18 | PASS | S18: "it returns a structured snapshot showing the page elements, their roles, and text content." |
| 95 | Use Claude | Playwright CLI: `npm install -g @playwright/cli@latest`, then `playwright-cli install --skills` | 19 | PASS | S19: "npm install -g @playwright/cli@latest"; "playwright-cli install --skills" |
| 96 | Use Claude | `playwright-cli snapshot` captures the page; `playwright-cli generate-locator <ref>` gives a locator for one element | 19 | PASS | S19: "playwright-cli snapshot  # capture page snapshot to obtain element ref"; "playwright-cli generate-locator <ref>   # generate a playwright locator for an element" |
| 97 | Use Claude | The README says CLI calls use fewer tokens than MCP | 19 | PASS | S19: "CLI invocations are more token-efficient" |
| 98 | Use Claude | Ask Claude for the command that it ran and its output; "all tests pass" alone tells you very little | 20 | PASS | S20: "ask Claude for *evidence*: the command it ran and its output ... \"All tests pass\" on its own tells you very little" |
| 99 | Use Claude | Put the check in the prompt, e.g. "run the tests after, and keep going until they pass" | 20 | PASS | S20: "run the auth tests after, and keep going until they pass" |
| 100 | Use Claude | `/code-review` reviews the diff in a fresh subagent that never saw your conversation | 20 | PASS | S20: "`/code-review` reviews the diff in a fresh subagent that never saw your conversation." |
| 101 | Use Claude | A reviewer asked to find problems will always find some, so ask it to skip style | 20 | PASS | S20: "A reviewer that's asked to find problems will always find *something*." and "skip style" |
| 102 | Use Claude | Two example prompts (`LoginPage`, `loginPage` fixture, `git diff`) | none | ADVICE | The page labels them "the tutorial's own". They name no tool fact beyond the `git diff` command. |
| 103 | Use Claude | Playwright ships three agents (planner, generator, healer), set up with `npx playwright init-agents --loop=claude` | 21 | PASS | S21: "three Playwright Test Agents out of the box: planner, generator and healer"; "npx playwright init-agents --loop=claude" |
| 104 | Review | Retrying assertions are async and must be awaited | 13 | PASS | S13: "retrying assertions are async, so you must await them" |
| 105 | Review | `@typescript-eslint/no-floating-promises` finds a missing `await` | 10 | PASS | S10: "Use @typescript-eslint/no-floating-promises ESLint rule to make sure there are no missing awaits" |
| 106 | Review | `isVisible()` inside a plain `expect` checks once and does not wait | 10 | PASS | S10: "the test won't wait a single second" |
| 107 | Review | Playwright already waits before actions and in web-first assertions | 4 | PASS | S4: "automatically waits for actionability checks"; "async matchers that wait until the expected condition is met" |
| 108 | Review | DOM-tied selectors break when the DOM changes | 9 | PASS | S9 line 296. |
| 109 | Review | `nth()`, `first()`, `last()` can click an element that you did not intend | 9 | PASS | S9 line 858. |
| 110 | Review | `force: true` turns off non-essential actionability checks | 12 | PASS | S12 line 198. |
| 111 | Review | Each test gets its own context | 7 | PASS | S7: "Playwright creates a context for each test" |
| 112 | Review | A claim of success alone tells you very little | 20 | PASS | S20 line 252. |
| 113 | Review | Checklist rows with no cite (assertion on what the user sees, no secrets, assertion can fail) | none | ADVICE | The page labels them "The tutorial's checklist"; they state no tool fact. |
| 114 | Practice | The Playwright project is in `dmoney-web-react/` | none | PASS-REPO | The files are `repo/dmoney-web-react/playwright.config.ts` and `repo/dmoney-web-react/e2e/`. |
| 115 | Practice | Config uses `testDir: './e2e'` | none | PASS-REPO | `repo/dmoney-web-react/playwright.config.ts`: "testDir: './e2e',". |
| 116 | Practice | Config keeps traces with `trace: 'retain-on-failure'` | none | PASS-REPO | `playwright.config.ts`: "trace: 'retain-on-failure',". |
| 117 | Practice | Config has one project for each role (`admin` depends on `admin-setup`) | none | FAIL | `playwright.config.ts` defines only `admin-setup`, `agent-setup`, `admin` and `agent`. `admin` does have "dependencies: ['admin-setup']". Customer and Merchant have no project, so "each role" is too broad. Fix: "has a project for admin and a project for agent". |
| 118 | Practice | `webServer` starts the web app and the API, or reuses running servers | none | PASS-REPO | `playwright.config.ts`: "// Reuses servers that are already running; otherwise starts them."; "reuseExistingServer: true". Commands: "npm start" in `../dmoney-transaction-api` and "npm run dev". |
| 119 | Practice | `e2e/pages/LoginPage.ts` finds fields with `getByLabel` and the button with `getByRole` | none | PASS-REPO | `e2e/pages/LoginPage.ts`: "page.getByLabel('Password')"; "page.getByRole('button', { name: /^Login/ })". |
| 120 | Practice | An admin login has no OTP step and lands on `/profile` | none | PASS-REPO | `LoginPage.ts`: "Admin login: no OTP step, lands on /profile once the session is stored." |
| 121 | Practice | Admin credentials come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` | none | PASS-REPO | `e2e/test-data/users.ts`: "process.env.ADMIN_EMAIL"; "process.env.ADMIN_PASSWORD". |
| 122 | Practice | The repo asks for `@playwright/test` `^1.63.0` | none | PASS-REPO | `package.json`: "\"@playwright/test\": \"^1.63.0\"". |
| 123 | Practice | Step 1: Claude Code with Playwright MCP added | 18 | PASS | S18: "claude mcp add playwright npx @playwright/mcp@latest" |
| 124 | Practice | Step 2 prompt uses `test.use({ storageState: { cookies: [], origins: [] } })` | none | FAIL | No file in `pages/` contains `test.use` with `storageState` or an empty `cookies`/`origins` object. A Playwright API in the page has no source. Fix: cite a Playwright page that shows it, or remove it from the prompt. |
| 125 | Practice | Step 2 prompt: `npx playwright test e2e/tests/admin/admin-login.spec.ts --project=admin` | none | PASS-REPO | The `admin` project exists in `playwright.config.ts` (`testMatch: /tests\/admin\/.*\.spec\.ts/`). `--project` is in S5. The spec file is the reader's to write. |
| 126 | Practice | Step 5: the failing test fails after the assertion timeout of 5 seconds, unless the call sets its own timeout | 13 | PASS | S13: "By default, the timeout for assertions is set to 5 seconds."; "You can either pass this timeout or configure it once" |
| 127 | Practice | Step 6: open the report with `npx playwright show-report`, then the trace | 5 | PASS | S5: "npx playwright show-report" |
| 128 | Practice | Step 6: in the Actions tab find the failed assertion and the Before and After snapshots | 16 | PASS | S16 line 107. |
| 129 | Practice | Steps 3, 4, 7 (explain, review, restore, `git diff`) | none | ADVICE | The page labels them "The tutorial's exercise". |
| 130 | Common mistakes | Ask for the command and output; "a claim of success alone tells you very little" | 20 | PASS | S20 line 252. |
| 131 | Common mistakes | Playwright waits before each action | 4 | PASS | S4: "Playwright waits for the element to be actionable before performing the action" |
| 132 | Common mistakes | `expect(await locator.isVisible()).toBe(true)` checks once and does not wait; use an auto-retrying assertion with `await` | 10 | PASS | S10 lines 156-166. |
| 133 | Common mistakes | Give Claude the live page with Playwright MCP or the Playwright CLI | 18 | PASS | S18: "enabling LLMs to interact with web pages using structured accessibility snapshots" (MCP). The CLI is supported by S19, but the cite points only to S18. |
| 134 | Common mistakes | Prefer role locators | 9 | PASS | S9: "We recommend prioritizing role locators" |
| 135 | Common mistakes | Make the locator unique with a filter or a chain instead of `nth()`/`first()` | 9 | PASS | S9: "try to come up with a unique locator that will pass the strictness criteria." |
| 136 | Common mistakes | `on` is performance heavy; use `on-first-retry` or `retain-on-failure` | 16 | PASS | S16 lines 87-95. |
| 137 | Common mistakes | Check on a value the test set itself cannot fail; refactor changes an expected value | none | ADVICE | The page labels these as the tutorial's advice. They state no tool fact. |
| 138 | Key words | Playwright Test: the test runner of Playwright, with `test`, `expect`, and fixtures | none | FAIL | The page never defines Playwright Test as "the test runner of Playwright". The page only says "This page teaches Playwright Test itself". Fix: use wording the page gives, e.g. "The test framework that this page teaches: it gives you `test`, `expect`, and fixtures." |
| 139 | Key words | Browser context: isolated, incognito-like profile; one per test | none | PASS | Restates the Browser, context, fixtures section (rows 33-34). |
| 140 | Key words | Fixture: the environment a test needs, such as `page`; add your own with `test.extend()` | none | PASS | Restates rows 37, 38, 43. |
| 141 | Key words | Locator: a way to find an element at the moment of each action | none | PASS | Restates row 47. |
| 142 | Key words | Role locator: `getByRole()` finds by accessibility role and name; docs recommend it first | none | PASS | Restates the locator table and row 49. |
| 143 | Key words | Strictness: an action throws an error if more than one element matches | none | PASS | Restates row 55. |
| 144 | Key words | Actionability checks: the checks Playwright waits for before an action, such as visible, stable, enabled | none | PASS | Restates row 62-63. |
| 145 | Key words | Web-first assertion: an `await expect(...)` that retries until the condition is true or the timeout ends | none | PASS | Restates row 66. |
| 146 | Key words | Trace viewer: shows each recorded action with its locator and snapshots | none | PASS | Restates rows 77 and 83. |
| 147 | Key words | UI mode: `--ui`, run, watch, and debug tests with time travel | none | PASS | Restates row 75. |
| 148 | Key words | Codegen: `npx playwright codegen` records your actions as test code | none | PASS | Restates row 88. |
| 149 | Key words | Playwright MCP: added to Claude Code with `claude mcp add`; reads the page through accessibility snapshots | none | PASS | Restates rows 92 and 94. |
| 150 | Lede | The page covers setup, test structure, contexts, locators, assertions, fixtures, debug tools, and using Claude | none | N/A | A sentence about the page itself. |

Open FAILs after round 2: 3

Script check of round 2: 150 rows, 3 FAIL rows, 2 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / playwright-with-claude (round 3, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Install | `npm init playwright@latest` starts a new project or adds Playwright to an existing one | S1 | PASS | S1: "npm init playwright@latest"; "In existing projects dependencies are added to your current package.json." |
| 2 | Install | Four questions: TypeScript or JavaScript (default TypeScript) | S1 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 3 | Install | Tests folder: default `tests`, or `e2e` if `tests` exists | S1 | PASS | "Tests folder name (default: tests, or e2e if tests already exists)" |
| 4 | Install | Asks whether to add a GitHub Actions workflow | S1 | PASS | "Add a GitHub Actions workflow (recommended for CI)" |
| 5 | Install | Asks whether to install the browsers (default yes) | S1 | PASS | "Install Playwright browsers (default: yes)" |
| 6 | Install | You can run it again later; it does not overwrite existing tests | S1 | PASS | "You can re-run the command later; it does not overwrite existing tests." |
| 7 | Install | It downloads browser binaries and writes `playwright.config.ts`, `package.json`, a lock file, `tests/example.spec.ts` | S1 | PASS | "downloads required browser binaries"; "playwright.config.ts"; "package.json"; "package-lock.json # Or yarn.lock / pnpm-lock.yaml"; "example.spec.ts" |
| 8 | Install | Supports Chromium, WebKit, Firefox on Windows, Linux, macOS | S1 | PASS | "supports Chromium, WebKit and Firefox on Windows, Linux and macOS" |
| 9 | Install | Needs Node.js 22.x, 24.x, or 26.x (latest of each) | S1 | PASS | "Node.js: latest 22.x, 24.x or 26.x." |
| 10 | Install | By default tests run headless and in parallel across Chromium, Firefox, WebKit | S1 | PASS | "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 11 | Install | Newest release-notes entry is version 1.65 | S2 | PASS | S2 line 7: "Version 1.65" (the next entry is "Version 1.64") |
| 12 | Install | `npx playwright --version` shows your version | S1 | PASS | "npx playwright --version" |
| 13 | Install | Update with `npm install -D @playwright/test@latest`, then `npx playwright install --with-deps` | S1 | PASS | "npm install -D @playwright/test@latest"; "npx playwright install --with-deps" |
| 14 | Install | The config holds browsers, timeouts, retries, projects, reporters | S1 | PASS | "target browsers, timeouts, retries, projects, reporters and more" |
| 15 | Install | Config keys `testDir: 'tests'`, `fullyParallel: true`, `forbidOnly: !!process.env.CI`, `retries: process.env.CI ? 2 : 0`, `use.baseURL: 'http://localhost:3000'` | S3 | PASS | "testDir: 'tests'"; "fullyParallel: true"; "forbidOnly: !!process.env.CI"; "retries: process.env.CI ? 2 : 0"; "baseURL: 'http://localhost:3000'" |
| 16 | Install (Layman and Bangla) | Same facts as rows 1–15 | S1, S2, S3 | PASS | Same quotes as rows 1–15. |
| 17 | Write and run | A test file imports `test` and `expect` from `@playwright/test` | S4 | PASS | "import { test, expect } from '@playwright/test';" |
| 18 | Write and run | A test performs actions and asserts the state against expectations | S4 | PASS | "they perform actions and assert the state against expectations." |
| 19 | Write and run | `test.describe` groups tests; `beforeEach`/`afterEach` run before/after each test | S4 | PASS | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test" |
| 20 | Write and run | `beforeAll`/`afterAll` run once per worker | S4 | PASS | "test.beforeAll and test.afterAll which are executed once per worker before/after all tests" |
| 21 | Write and run | The `page` fixture gives each test a fresh page | S4 | PASS | "the built in page fixture… Pages are isolated between tests… Every test gets a fresh environment" |
| 22 | Write and run | `page.goto()` waits for the page to reach the load state | S4 | PASS | "Playwright waits for the page to reach the load state before continuing." |
| 23 | Write and run | Example spec, labelled the tutorial's own (`getByLabel`, `getByRole`, `toBeVisible`) | none | ADVICE | The page labels it as its own example. The APIs are in S9 and S13. |
| 24 | Write and run | Run table: `npx playwright test` (headless); `--headed`; `--ui`; `--project webkit`; `login.spec.ts`; `-g "…"`; `--last-failed`; `show-report` | S5 | PASS | "Tests run in headless mode by default"; "--headed flag"; "--ui flag"; "npx playwright test --project webkit"; "run a single test file, pass in the test file name" (the example there is `landing-page.spec.ts`); "-g flag followed by the title"; "--last-failed flag"; "npx playwright show-report" |
| 25 | Write and run | The HTML report opens by itself if some tests failed | S5 | PASS | "By default, the HTML report opens automatically if some tests failed" |
| 26 | Write and run | A project is a group of tests with the same configuration; one project per browser, or logged in/out | S6 | PASS | "logical group of tests running with the same configuration… run the same tests in a logged-in and logged-out state." |
| 27 | Write and run (Layman and Bangla) | Same as rows 17–26 | S4, S5, S6 | PASS | Same quotes as rows 17–26. |
| 28 | Browser, context, page | Multiple contexts in one scenario; a page belongs to a context | S7 | PASS | "Playwright can create multiple browser contexts within a single scenario"; "provides a default Page in that context" |
| 29 | Browser, context, page | A context is like an incognito profile, fast to create, fully isolated even in one browser | S7 | PASS | "incognito-like profiles. They are fast and cheap to create and are completely isolated, even when running in a single browser" |
| 30 | Browser, context, page | Playwright creates a context per test with a default page | S7 | PASS | "Playwright creates a context for each test, and provides a default Page in that context." |
| 31 | Browser, context, page | Each test has its own local storage, session storage, cookies; isolation prevents cascading failures | S7 | PASS | "each test has its own local storage, session storage, cookies"; "prevents cascading test failures" |
| 32 | Browser, context, page | One test can create several contexts (admin and user in a chat flow) | S7 | PASS | "multi-user functionality, like a chat"; "test('admin and user'" |
| 33 | Browser, context, page | A fixture sets up the environment: everything it needs and nothing else; fixtures are isolated between tests | S8 | PASS | "giving the test everything it needs and nothing else. Test fixtures are isolated between tests." |
| 34 | Browser, context, page | Built-in fixtures: `page`, `context`, `browser` (shared), `browserName`, `request` | S8 | PASS | "Isolated page for this test run."; "Isolated context for this test run."; "Browsers are shared across tests to optimize resources."; "Either chromium, firefox or webkit."; "Isolated APIRequestContext instance for this test run." |
| 35 | Browser, context, page | `test.extend()` creates a new `test` object with your fixture | S8 | PASS | "use test.extend() to create a new test object that will include it." |
| 36 | Browser, context, page | Code before `await use()` is setup; code after it is teardown | S8 | PASS | "setup and teardown phase before and after the await use() call" |
| 37 | Browser, context, page | Playwright sets up only the fixtures that a test uses | S8 | PASS | "Playwright Test will setup only the ones needed by your test and nothing else." |
| 38 | Browser, context, page | `loginPage` fixture example, labelled the tutorial's own | none | ADVICE | It uses only `test.extend` and `use` (S8). |
| 39 | Browser, context, page (Layman and Bangla) | Same as rows 28–37 | S7, S8 | PASS | Same quotes as rows 28–37. |
| 40 | Locators | A locator finds an element at any moment; each action finds an up-to-date element | S9 | PASS | "a way to find element(s) on the page at any moment"; "an up-to-date DOM element is located in the page" |
| 41 | Locators | Recommended built-in locators `getByRole`, `getByText`, `getByLabel`, `getByPlaceholder`, `getByAltText`, `getByTitle`, `getByTestId`, in the order the docs list them | S9 | PASS | "These are the recommended built-in locators." The list is in that order (lines 16–28). |
| 42 | Locators | Locator table descriptions (role and name, text content, label, placeholder, alt, `title`, `data-testid`) | S9 | PASS | "locate by text content"; "associated label's text"; "by placeholder"; "text alternative"; "title attribute"; "data-testid attribute (other attributes can be configured)" |
| 43 | Locators | Role locators first, closest to how users and assistive technology see the page | S9 | PASS | "We recommend prioritizing role locators… the closest way to how users and assistive technology perceive the page." |
| 44 | Locators | Text locators for non-interactive elements such as `div`, `span` | S9 | PASS | "use text locators to find non interactive elements like div, span, p" |
| 45 | Locators | Test ids are the most resilient but not user facing | S9 | PASS | "most resilient way of testing… not user facing" |
| 46 | Locators | Set `testIdAttribute` in `use` of the config | S9 | PASS | "use: {… testIdAttribute: 'data-pw'" |
| 47 | Locators | Chain locators to narrow the search; code block with `filter({ hasText })` | S10 | PASS | "Locators can be chained to narrow down the search to a particular part of the page."; ".filter({ hasText: 'Product 2' })" |
| 48 | Locators | Locators are strict; an action throws if more than one element matches | S9 | PASS | "Locators are strict… will throw an exception if more than one element matches." |
| 49 | Locators | `first()`, `last()`, `nth()` turn this off; the docs do not recommend them; Playwright may click an unintended element | S9 | PASS | "opt-out from strictness check… locator.first(), locator.last(), and locator.nth(). These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." |
| 50 | Locators | Selectors tied to the DOM structure break when it changes | S9 | PASS | "These selectors can break when the DOM structure changes." |
| 51 | Locators | A selector on CSS classes breaks when a designer changes a class | S10 | PASS | "selecting this button by its CSS classes. Should the designer change something then the class might change" |
| 52 | Locators | The docs do not recommend CSS or XPath | S9 | PASS | "CSS and XPath are not recommended" |
| 53 | Locators | The brittle/resilient code block (`#tsf > div:nth-child(2) > div.A8SBwf > input` and `getByRole('button', { name: 'submit' })`) | S9, S10 | PASS | S9 line 300: "'#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input'". `getByRole(..., { name: /submit/i })` is at S9 line 108. |
| 54 | Locators | Codegen picks locators in the order role, text, test id | S11 | PASS | "prioritizing role, text and test id locators" |
| 55 | Locators (Layman and Bangla) | Same as rows 40–54 | S9, S10, S11 | PASS | Same quotes as rows 40–54. |
| 56 | Assertions | Before an action Playwright runs actionability checks, waits, and fails with `TimeoutError` if they do not pass within the timeout | S12 | PASS | "auto-waits for all the relevant checks… action fails with the TimeoutError" |
| 57 | Assertions | For `click()`: one element, visible, stable, receives events, enabled, not inert | S12 | PASS | "locator resolves to exactly one element… Visible… Stable… Receives Events… Enabled… Not Inert" |
| 58 | Assertions | The `force` option turns off the non-essential checks | S12 | PASS | "force option that disables non-essential actionability checks" |
| 59 | Assertions | So you do not need manual waits | S4 | PASS | "You don't need to add manual waits" |
| 60 | Assertions | An auto-retrying assertion checks again and again until the condition is true or the assertion timeout ends; they are async, so `await` them | S13 | PASS | "check it over and over, until the condition is met or until the timeout is reached"; "retrying assertions are async, so you must await them." |
| 61 | Assertions | Auto-retrying examples `toBeVisible`, `toHaveText`, `toHaveURL`, `toHaveCount`, `toHaveValue` | S13 | PASS | All five are in the "Auto-retrying assertions" list. |
| 62 | Assertions | Non-retrying `toBe`, `toEqual`, `toBeTruthy`, `toContain` do not wait and can make a test flaky | S13 | PASS | "do not auto-retry… using non-retrying assertions can lead to a flaky test"; each matcher is in the table. |
| 63 | Assertions | Use `expect.poll` or `expect.toPass` for a complex retry | S13 | PASS | "use expect.poll or expect.toPass" |
| 64 | Assertions | A soft assertion does not stop the test but marks it as failed | S13 | PASS | "failed soft assertions do not terminate test execution, but mark the test as failed." |
| 65 | Assertions | Wrong/right code block: `isVisible()` inside `expect` does not wait | S10 | PASS | "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 66 | Assertions | Default timeouts: 5 s per assertion, 30 s per test | S13, S14 | PASS | S13: "By default, the timeout for assertions is set to 5 seconds". S14: "a timeout for each test, 30 seconds by default." |
| 67 | Assertions | Callout on `waitForTimeout(3000)` as a smell | none | ADVICE | The callout is titled "The tutorial's advice". |
| 68 | Assertions (Layman and Bangla) | Same as rows 56–66 | S4, S10, S12, S13, S14 | PASS | Same quotes as rows 56–66. |
| 69 | Debug | UI mode (`npx playwright test --ui`): explore, run, debug with time travel and a watch mode | S15 | PASS | "explore, run, and debug tests with a time travel experience complete with a watch mode" |
| 70 | Debug | The pick locator button shows the locator for each DOM snapshot element | S15 | PASS | S15 has a "Pick locator" section. S16 line 40: "hover over the DOM snapshot to see the locator for each element". |
| 71 | Debug | A trace records each action of a test | S16 | PASS | "explore recorded Playwright traces"; "what locator was used for every action" |
| 72 | Debug | `npx playwright test --trace on` records a trace for each test in development | S16 | PASS | "To record a trace during development mode set the --trace flag to on" |
| 73 | Debug | `trace: 'on-first-retry'` records only on the first retry, for CI | S16 | PASS | "Record a trace only when retrying a test for the first time."; "Traces should be run on continuous integration on the first retry" |
| 74 | Debug | `trace: 'retain-on-failure'` records each test but keeps only failed traces | S16 | PASS | "Record a trace for each test, but remove it from successful test runs." |
| 75 | Debug | `npx playwright show-trace path/to/trace.zip` opens a trace | S16 | PASS | "npx playwright show-trace path/to/trace.zip" |
| 76 | Debug | `trace: 'on'` is not recommended because it is performance heavy | S16 | PASS | "(not recommended as it's performance heavy)" |
| 77 | Debug | The Actions tab shows locator and duration, with Before and After snapshots | S16 | PASS | "what locator was used for every action and how long each one took… Before and After tabs" |
| 78 | Debug | The trace viewer loads the trace in your browser and sends no data out | S16 | PASS | "loads the trace entirely in your browser and does not transmit any data externally." |
| 79 | Debug | Inspector (`--debug`) opens the Inspector and a headed browser, default timeout 0 | S17 | PASS | "Browsers launch in headed mode"; "Default timeout is set to 0 (= no timeout)" |
| 80 | Debug | `npx playwright test example.spec.ts:10 --debug` debugs one test | S5 | PASS | "npx playwright test example.spec.ts:10 --debug" |
| 81 | Debug | `page.pause()` stops at one point | S17 | PASS | "add a page.pause() method… only stop on the page.pause()." |
| 82 | Debug | Codegen (`npx playwright codegen <url>`) records your actions as test code | S11 | PASS | "generate tests for you as you perform actions in the browser"; "run the codegen command" |
| 83 | Debug | Toolbar adds three assertions: visibility, text, value | S11 | PASS | "'assert visibility'… 'assert text'… 'assert value'" |
| 84 | Debug | `--save-storage` saves cookies, localStorage, IndexedDB at the end of the session | S11 | PASS | "--save-storage to save cookies, localStorage and IndexedDB data at the end of the session" |
| 85 | Debug | Callout: codegen code is a first draft, adds only the assertions you choose | none | ADVICE | The callout is labelled "The tutorial's advice". S11: "generate assertions by choosing one of the icons". |
| 86 | Debug (Layman and Bangla) | Same as rows 69–84 | S11, S15, S16, S17 | PASS | Same quotes as rows 69–84. |
| 87 | Use Claude | Playwright MCP is added with `claude mcp add playwright npx @playwright/mcp@latest` | S18 | PASS | "claude mcp add playwright npx @playwright/mcp@latest" |
| 88 | Use Claude | Playwright MCP needs Node.js 20 or newer | S18 | PASS | "Node.js 20 or newer" |
| 89 | Use Claude | MCP works through structured accessibility snapshots: elements with roles and text | S18 | PASS | "returns a structured snapshot showing the page elements, their roles, and text content" |
| 90 | Use Claude | Playwright CLI: `npm install -g @playwright/cli@latest`, then `playwright-cli install --skills` | S19 | PASS | "npm install -g @playwright/cli@latest"; "playwright-cli install --skills" |
| 91 | Use Claude | `playwright-cli snapshot` captures the page; `generate-locator <ref>` gives a locator | S19 | PASS | "playwright-cli snapshot # capture page snapshot"; "playwright-cli generate-locator <ref> # generate a playwright locator for an element" |
| 92 | Use Claude | The README says CLI calls use fewer tokens than MCP | S19 | PASS | "CLI invocations are more token-efficient" |
| 93 | Use Claude | Ask for the command and its output; "all tests pass" alone says little | S20 | PASS | "ask Claude for evidence: the command it ran and its output… 'All tests pass' on its own tells you very little" |
| 94 | Use Claude | Put the check in the prompt, e.g. "run the tests after, and keep going until they pass" | S20 | PASS | "In the prompt: `run the auth tests after, and keep going until they pass`" |
| 95 | Use Claude | `/code-review` reviews the diff in a fresh subagent that never saw your conversation | S20 | PASS | "`/code-review` reviews the diff in a fresh subagent that never saw your conversation." |
| 96 | Use Claude | A reviewer asked to find problems will always find some; ask it to skip style | S20 | PASS | "A reviewer that's asked to find problems will always find *something*."; "skip style" |
| 97 | Use Claude | Two example prompts and "a live page gives real roles and names" | none | ADVICE | The page labels them as the tutorial's own. |
| 98 | Use Claude | Three agents (planner, generator, healer), set up with `npx playwright init-agents --loop=claude` | S21 | PASS | "three Playwright Test Agents… planner… generator and… healer"; "npx playwright init-agents --loop=claude" |
| 99 | Use Claude (Layman and Bangla) | Same as rows 87–98 | S18–S21 | PASS | Same quotes as rows 87–98. |
| 100 | Review | Retrying assertions are async and must be awaited | S13 | PASS | "retrying assertions are async, so you must await them." |
| 101 | Review | `@typescript-eslint/no-floating-promises` finds a missing `await` | S10 | PASS | "Use @typescript-eslint/no-floating-promises ESLint rule to make sure there are no missing awaits" |
| 102 | Review | `isVisible()` in a plain `expect` checks once and does not wait | S10 | PASS | "won't wait a single second, it will just check the locator is there" |
| 103 | Review | Playwright already waits before actions (so no fixed sleep) | S4 | PASS | "automatically waits for actionability checks to pass before performing each action" |
| 104 | Review | DOM-tied selectors break when the DOM changes | S9 | PASS | "These selectors can break when the DOM structure changes." |
| 105 | Review | `nth()`/`first()`/`last()` can click an unintended element | S9 | PASS | "Playwright may click on an element you did not intend" |
| 106 | Review | `force: true` turns off non-essential actionability checks | S12 | PASS | "disables non-essential actionability checks" |
| 107 | Review | Each test gets its own context | S7 | PASS | "Playwright creates a context for each test" |
| 108 | Review | Claude showed the command and output | S20 | PASS | "ask Claude for evidence: the command it ran and its output" |
| 109 | Review | Checklist rows with no cite (assertion on what the user sees, no passwords, assertion can fail) and the closing advice | none | ADVICE | The callout is labelled "The tutorial's checklist". No tool fact. |
| 110 | Practice | The Playwright project is in `dmoney-web-react/` | none | PASS-REPO | `repo/dmoney-web-react/playwright.config.ts` |
| 111 | Practice | Config uses `testDir: './e2e'` | none | PASS-REPO | playwright.config.ts:11 "testDir: './e2e'," |
| 112 | Practice | Keeps traces with `trace: 'retain-on-failure'` | none | PASS-REPO | playwright.config.ts:18 "trace: 'retain-on-failure'," |
| 113 | Practice | Setup project and test project for admin and agent; `admin` depends on `admin-setup` | none | PASS-REPO | playwright.config.ts:24 "{ name: 'admin-setup'"; :25 "agent-setup"; :27–29 "name: 'admin'… dependencies: ['admin-setup']"; :33–35 agent |
| 114 | Practice | `webServer` starts the web app and the API, or reuses running servers | none | PASS-REPO | playwright.config.ts:39–54 "Reuses servers that are already running; otherwise starts them."; "npm start" (API), "npm run dev"; "reuseExistingServer: true" |
| 115 | Practice | `e2e/pages/LoginPage.ts` finds fields with `getByLabel` and the button with `getByRole` | none | PASS-REPO | LoginPage.ts:13–15 "page.getByLabel('Email or Phone Number')… getByLabel('Password')… getByRole('button', { name: /^Login/ })" |
| 116 | Practice | Admin login has no OTP step and lands on `/profile` | none | PASS-REPO | LoginPage.ts:36 "Admin login: no OTP step, lands on /profile once the session is stored." |
| 117 | Practice | Admin credentials come from `ADMIN_EMAIL` and `ADMIN_PASSWORD` | none | PASS-REPO | e2e/test-data/users.ts:3–4 "process.env.ADMIN_EMAIL || 'admin@dmoney.com'… process.env.ADMIN_PASSWORD || '1234'" |
| 118 | Practice | The repo asks for `@playwright/test` `^1.63.0` | none | PASS-REPO | dmoney-web-react/package.json:25 "@playwright/test": "^1.63.0" |
| 119 | Practice | Step 1: Claude Code with Playwright MCP added | S18 | PASS | "claude mcp add playwright npx @playwright/mcp@latest" |
| 120 | Practice | Step 2: `test.use({ storageState: { cookies: [], origins: [] } })` resets the storage state so the test is not signed in | S22 | PASS | "You can reset storage state in a test file to avoid authentication… test.use({ storageState: { cookies: [], origins: [] } });" |
| 121 | Practice | Step 2: `npx playwright test <file> --project=admin` | S17 | PASS | S17: "npx playwright test --project=chromium --debug" shows the `--project=` form (also S5 `--project`). The `admin` project is in the repo (row 113). |
| 122 | Practice | Step 5: a failing assertion fails after the 5 s assertion timeout unless the call sets its own | S13 | PASS | "By default, the timeout for assertions is set to 5 seconds."; "You can either pass this timeout" |
| 123 | Practice | Step 6: `npx playwright show-report`, then the trace; Actions tab with Before and After | S5, S16 | PASS | S5 "npx playwright show-report"; S16 "Before and After tabs" |
| 124 | Practice | Exercise steps 3, 4, 7 and "the tutorial expects one passing test" | none | ADVICE | The callout is labelled "The tutorial's exercise". |
| 125 | Practice (Layman and Bangla) | Same as rows 110–124 | S5, S13, S16, S18 | PASS | Same quotes as rows 110–124. |
| 126 | Common mistakes | Ask for the command and output; "all tests pass" alone says little | S20 | PASS | Same as row 93. |
| 127 | Common mistakes | A fixed sleep is the wrong fix; Playwright waits before each action | S4 | PASS | Same as row 103. |
| 128 | Common mistakes | `expect(await locator.isVisible()).toBe(true)` checks once and does not wait; use an auto-retrying assertion with `await` | S10 | PASS | Same as row 65. |
| 129 | Common mistakes | A check on a value the test set itself cannot fail; break the value on purpose | none | ADVICE | Marked "(the tutorial's advice)". |
| 130 | Common mistakes | Give Claude the live page with MCP or CLI; prefer role locators | S18, S9 | PASS | Same as rows 43 and 87. |
| 131 | Common mistakes | Fix a strict mode error with a filter or chain, not `nth()` or `first()` | S9 | PASS | "come up with a unique locator that will pass the strictness criteria." Chaining and filtering are in S9 (line 66 "chain them and iteratively narrow down your locator"; filter section). |
| 132 | Common mistakes | Traces `on` for every test in CI is heavy; use `on-first-retry` or `retain-on-failure` | S16 | PASS | Same as rows 73, 74, 76. |
| 133 | Common mistakes | A refactor quietly changes an expected value: ask Claude not to change assertions, read the diff | none | ADVICE | Marked "(the tutorial's advice)". |
| 134 | Key words | Playwright Test: `test`, `expect`, fixtures | none | N/A | It restates sections 2 and 3 (rows 17, 33). |
| 135 | Key words | Browser context: isolated, incognito-like; one per test | none | N/A | It restates rows 29 and 30. |
| 136 | Key words | Fixture: `page` example; `test.extend()` | none | N/A | It restates rows 34 and 35. |
| 137 | Key words | Locator; Role locator (`getByRole()`, recommended first); Strictness | none | N/A | It restates rows 40, 43, 48. |
| 138 | Key words | Actionability checks: visible, stable, enabled | none | N/A | It restates row 57. |
| 139 | Key words | Web-first assertion: `await expect(...)` retries until true or timeout | none | N/A | It restates row 60. |
| 140 | Key words | Trace viewer: each recorded action, with locator and snapshots | none | N/A | It restates rows 71 and 77. |
| 141 | Key words | UI mode: `--ui`, time travel | none | N/A | It restates row 69. |
| 142 | Key words | Codegen: `npx playwright codegen`, records actions as test code | none | N/A | It restates row 82. |
| 143 | Key words | Playwright MCP: added with `claude mcp add`; reads the page through accessibility snapshots | none | N/A | It restates rows 87 and 89. |
| 144 | Lede and `<PageMeta />`, link sentences, the callout "Where these facts come from" | none | N/A | Statements about the page itself. |

Open FAILs after round 3: 0

Script check of round 3: 144 rows, 0 FAIL rows, 4 quoted PASS phrases not found word for word in the sources.

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
