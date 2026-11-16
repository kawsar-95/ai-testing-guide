# Playwright Automation with Claude — research notes (2026-11-15)

## Sources
S1. Installation — Microsoft (playwright.dev) — https://playwright.dev/docs/intro — accessed 2026-11-15 — cache: pw-intro.txt
S2. Release notes — Microsoft (playwright.dev) — https://playwright.dev/docs/release-notes — accessed 2026-11-15 — cache: pw-release-notes.txt
S3. Configuration — Microsoft (playwright.dev) — https://playwright.dev/docs/test-configuration — accessed 2026-11-15 — cache: pw-configuration.txt
S4. Writing tests — Microsoft (playwright.dev) — https://playwright.dev/docs/writing-tests — accessed 2026-11-15 — cache: pw-writing-tests.txt
S5. Running and debugging tests — Microsoft (playwright.dev) — https://playwright.dev/docs/running-tests — accessed 2026-11-15 — cache: pw-running-tests.txt
S6. Projects — Microsoft (playwright.dev) — https://playwright.dev/docs/test-projects — accessed 2026-11-15 — cache: pw-projects.txt
S7. Isolation — Microsoft (playwright.dev) — https://playwright.dev/docs/browser-contexts — accessed 2026-11-15 — cache: pw-browser-contexts.txt
S8. Fixtures — Microsoft (playwright.dev) — https://playwright.dev/docs/test-fixtures — accessed 2026-11-15 — cache: pw-fixtures.txt
S9. Locators — Microsoft (playwright.dev) — https://playwright.dev/docs/locators — accessed 2026-11-15 — cache: pw-locators.txt
S10. Best Practices — Microsoft (playwright.dev) — https://playwright.dev/docs/best-practices — accessed 2026-11-15 — cache: pw-best-practices.txt
S11. Auto-waiting — Microsoft (playwright.dev) — https://playwright.dev/docs/actionability — accessed 2026-11-15 — cache: pw-actionability.txt
S12. Assertions — Microsoft (playwright.dev) — https://playwright.dev/docs/test-assertions — accessed 2026-11-15 — cache: pw-assertions.txt
S13. Timeouts — Microsoft (playwright.dev) — https://playwright.dev/docs/test-timeouts — accessed 2026-11-15 — cache: pw-timeouts.txt
S14. UI Mode — Microsoft (playwright.dev) — https://playwright.dev/docs/test-ui-mode — accessed 2026-11-15 — cache: pw-ui-mode.txt
S15. Trace viewer — Microsoft (playwright.dev) — https://playwright.dev/docs/trace-viewer — accessed 2026-11-15 — cache: pw-trace-viewer.txt
S16. Debugging Tests — Microsoft (playwright.dev) — https://playwright.dev/docs/debug — accessed 2026-11-15 — cache: pw-debug.txt
S17. Test generator — Microsoft (playwright.dev) — https://playwright.dev/docs/codegen — accessed 2026-11-15 — cache: pw-codegen.txt
S18. Best practices for Claude Code — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/best-practices — accessed 2026-11-15 — cache: cc-best-practices.txt
S19. Playwright MCP — Microsoft (playwright.dev) — https://playwright.dev/docs/getting-started-mcp — accessed 2026-11-15 — cache: pw-mcp.txt
S20. playwright-cli README — Microsoft (GitHub) — https://github.com/microsoft/playwright-cli — accessed 2026-11-15 — cache: pw-cli-readme.txt
S21. Agents — Microsoft (playwright.dev) — https://playwright.dev/docs/test-agents — accessed 2026-11-15 — cache: pw-test-agents.txt
S22. Authentication — Microsoft (playwright.dev) — https://playwright.dev/docs/auth — accessed 2026-11-15 — cache: pw-auth.txt (added in round 2)

Page cite numbers differ from the S numbers above. Page `<Cite n>` → note S: 1–10 = S1–S10, 11 = S17, 12 = S11, 13 = S12, 14 = S13, 15 = S14, 16 = S15, 17 = S16, 18 = S19, 19 = S20, 20 = S18, 21 = S21.

dMoney practice repo facts come from the public repo at commit 51db34a (`dmoney-repo/<path>`). They have no `<Cite>` on the page. No password, email value, or token from the repo is on the page: only the names of the environment variables.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | `npm init playwright@latest` starts a new project or adds Playwright to an existing one. | "The command below either initializes a new project or adds Playwright to an existing one." ... "npm init playwright@latest" | S1 | |
| C2 | The init command asks for TypeScript or JavaScript (default TypeScript), the tests folder (default tests, or e2e), a GitHub Actions workflow, and whether to install browsers (default yes). | "TypeScript or JavaScript (default: TypeScript)" ... "Tests folder name (default: tests, or e2e if tests already exists)" ... "Add a GitHub Actions workflow (recommended for CI)" ... "Install Playwright browsers (default: yes)" | S1 | |
| C3 | You can run the init command again; it does not overwrite existing tests. | "You can re-run the command later; it does not overwrite existing tests." | S1 | |
| C4 | It creates playwright.config.ts, package.json, a lock file, and tests/example.spec.ts, and downloads browser binaries. | "Playwright downloads required browser binaries and creates the scaffold below." ... "playwright.config.ts # Test configuration" ... "example.spec.ts # Minimal example test" | S1 | |
| C5 | The config holds browsers, timeouts, retries, projects, and reporters. | "The playwright.config centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." | S1 | |
| C6 | Node.js requirement: latest 22.x, 24.x, or 26.x. | "Node.js: latest 22.x, 24.x or 26.x." | S1 | |
| C7 | Playwright supports Chromium, WebKit, and Firefox on Windows, Linux, and macOS. | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS" | S1 | |
| C8 | By default, tests run headless and in parallel across Chromium, Firefox, and WebKit. | "By default tests run headless in parallel across Chromium, Firefox and WebKit" | S1 | |
| C9 | Update with `npm install -D @playwright/test@latest` and `npx playwright install --with-deps`; check the version with `npx playwright --version`. | "npm install -D @playwright/test@latest" ... "npx playwright install --with-deps" ... "npx playwright --version" | S1 | |
| C10 | The newest release notes entry (read 2026-11-15) is version 1.65. | "Version 1.65" | S2 | First entry of the page. |
| C11 | Common config keys: testDir, fullyParallel, forbidOnly, retries, workers, and use.baseURL. | "testDir: 'tests'," ... "fullyParallel: true," ... "forbidOnly: !!process.env.CI," ... "retries: process.env.CI ? 2 : 0," ... "baseURL: 'http://localhost:3000'," | S3 | |
| C12 | A test file imports `test` and `expect` from `@playwright/test`. | "import { test, expect } from '@playwright/test';" | S4 | |
| C13 | `test.describe` groups tests; `beforeEach`/`afterEach` run before and after each test; `beforeAll`/`afterAll` run once per worker. | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test" ... "test.beforeAll and test.afterAll which are executed once per worker before/after all tests" | S4 | |
| C14 | `page.goto` waits for the load state. | "Playwright waits for the page to reach the load state before continuing." | S4 | |
| C15 | Each test gets a fresh page; the browser context is like a new browser profile. | "Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile." | S4 | |
| C16 | Generic matchers like toEqual do not use await; they check values at once. | "These assertions do not use the await keyword as they perform immediate synchronous checks on already available values." | S4 | |
| C17 | You do not need manual waits; Playwright waits for actionability before each action. | "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits or deal with race conditions." | S4 | |
| C18 | CLI: `--headed`, `--ui`, `--project`, a file name, `-g` with a title, `--last-failed`. | "npx playwright test --headed" ... "npx playwright test --project webkit" ... "use the -g flag followed by the title of the test" ... "npx playwright test --last-failed" ... "npx playwright test --ui" | S5 | |
| C19 | The HTML report opens automatically if some tests failed; else `npx playwright show-report`. | "By default, the HTML report opens automatically if some tests failed, otherwise you can open it with the following command." ... "npx playwright show-report" | S5 | |
| C20 | Debug one test at a line: `npx playwright test example.spec.ts:10 --debug`. | "npx playwright test example.spec.ts:10 --debug" | S5 | |
| C21 | A project is a group of tests with the same configuration, for example one browser or a logged-in state. | "A project is logical group of tests running with the same configuration." ... "you can run the same tests in a logged-in and logged-out state" | S6 | |
| C22 | Playwright creates a context for each test and a default page in it; contexts are like incognito profiles. | "BrowserContexts which are equivalent to incognito-like profiles" ... "Playwright creates a context for each test, and provides a default Page in that context." | S7 | |
| C23 | Each test has its own local storage, session storage, and cookies. | "each test has its own local storage, session storage, cookies etc." | S7 | |
| C24 | One test can create several contexts, for multi-user flows. | "Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like a chat." | S7 | |
| C25 | Fixtures set up the environment for each test and are isolated between tests. | "Test fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests." | S8 | |
| C26 | Built-in fixtures: page, context, browser (shared), browserName, request. | "Isolated page for this test run." ... "Browsers are shared across tests to optimize resources." ... "Isolated APIRequestContext instance for this test run." | S8 | |
| C27 | `test.extend()` creates a new test object with your own fixture. | "To create your own fixture, use test.extend() to create a new test object that will include it." | S8 | |
| C28 | Setup runs before `await use()`, teardown after it. | "Each fixture has a setup and teardown phase before and after the await use() call in the fixture." | S8 | |
| C29 | Fixtures are on-demand: only those a test needs are set up. | "Playwright Test will setup only the ones needed by your test and nothing else." | S8 | |
| C30 | The recommended built-in locators: getByRole, getByText, getByLabel, getByPlaceholder, getByAltText, getByTitle, getByTestId. | "page.getByRole() to locate by explicit and implicit accessibility attributes." ... "page.getByLabel() to locate a form control by associated label's text." ... "page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)." | S9 | |
| C31 | Playwright recommends role locators first. | "We recommend prioritizing role locators to locate elements, as it is the closest way to how users and assistive technology perceive the page." | S9 | |
| C32 | Use text locators for non-interactive elements, role locators for interactive ones. | "We recommend using text locators to find non interactive elements like div, span, p, etc. For interactive elements like button, a, input, etc. use role locators." | S9 | |
| C33 | Test ids are the most resilient but not user facing; the attribute can be changed with testIdAttribute. | "Testing by test ids is the most resilient way of testing" ... "However testing by test ids is not user facing." ... "testIdAttribute: 'data-pw'" | S9 | |
| C34 | CSS and XPath tied to the DOM break when the DOM changes and are not recommended. | "These selectors can break when the DOM structure changes." ... "CSS and XPath are not recommended as the DOM can often change leading to non resilient tests." | S9 | |
| C35 | Each action locates an up-to-date element. | "Every time a locator is used for an action, an up-to-date DOM element is located in the page." | S9 | |
| C36 | Locators are strict: an action throws if more than one element matches. | "Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches." | S9 | |
| C37 | first(), last(), nth() are not recommended. | "These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." | S9 | |
| C38 | Locators can be chained and filtered (hasText, has). | "Locators can be chained to narrow down the search to a particular part of the page." ... "filter({ hasText: 'Product 2' })" | S10 | |
| C39 | A CSS class selector can break when the designer changes the class. | "Should the designer change something then the class might change, thus breaking your test." | S10 | |
| C40 | Codegen prioritizes role, text, and test id locators. | "figure out the best locator, prioritizing role, text and test id locators" | S17 | |
| C41 | Before an action, Playwright auto-waits for checks; if they do not pass in time, a TimeoutError. | "It auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError." | S11 | |
| C42 | click() checks: one element, visible, stable, receives events, enabled, not inert. | "locator resolves to exactly one element" ... "element is Visible" ... "element is Stable" ... "element Receives Events" ... "element is Enabled" ... "element is Not Inert" | S11 | |
| C43 | `force` disables non-essential actionability checks. | "support force option that disables non-essential actionability checks" | S11 | |
| C44 | Assertion timeout is 5 seconds by default. | "By default, the timeout for assertions is set to 5 seconds." | S12 | |
| C45 | Auto-retrying assertions are async and must be awaited. | "Note that retrying assertions are async, so you must await them." | S12 | |
| C46 | Non-retrying assertions can make a test flaky; use expect.poll or expect.toPass for complex retries. | "using non-retrying assertions can lead to a flaky test." ... "For more complex assertions that need to be retried, use expect.poll or expect.toPass." | S12 | |
| C47 | Soft assertions do not stop the test but mark it failed. | "failed soft assertions do not terminate test execution, but mark the test as failed." | S12 | |
| C48 | Test timeout is 30 seconds by default. | "Playwright Test enforces a timeout for each test, 30 seconds by default." | S13 | |
| C49 | `expect(await ...isVisible()).toBe(true)` does not wait. | "expect(await page.getByText('welcome').isVisible()).toBe(true);" ... "the test won't wait a single second" | S10 | |
| C50 | Lint with @typescript-eslint/no-floating-promises to catch missing awaits. | "Use @typescript-eslint/no-floating-promises ESLint rule to make sure there are no missing awaits" | S10 | |
| C51 | UI mode: explore, run, debug with time travel and watch mode. | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." | S14 | |
| C52 | UI mode has a pick locator button. | "Click on the pick locator button and hover over the DOM snapshot to see the locator for each element highlighted" | S14 | |
| C53 | Record a trace with `--trace on`; open it with `npx playwright show-trace`. | "npx playwright test --trace on" ... "npx playwright show-trace path/to/trace.zip" | S15 | |
| C54 | Trace modes: on-first-retry, retain-on-failure; on is performance heavy. | "'on-first-retry' - Record a trace only when retrying a test for the first time." ... "'retain-on-failure' - Record a trace for each test, but remove it from successful test runs." ... "(not recommended as it's performance heavy)" | S15 | |
| C55 | The Actions tab shows the locator and time of each action; Before and After snapshots. | "In the Actions tab you can see what locator was used for every action and how long each one took to run." ... "Use the Before and After tabs to visually see what happened before and after the action." | S15 | |
| C56 | The trace viewer loads the trace in your browser and sends no data out. | "Trace Viewer loads the trace entirely in your browser and does not transmit any data externally." | S15 | |
| C57 | `--debug` opens the Inspector, headed, with timeout 0. | "Run your tests with the --debug flag to open the inspector." ... "Browsers launch in headed mode" ... "Default timeout is set to 0 (= no timeout)" | S16 | |
| C58 | `page.pause()` stops the test at that point in debug mode. | "add a page.pause() method to your test" | S16 | |
| C59 | `npx playwright codegen <url>` records actions and can add assertions (visibility, text, value). | "npx playwright codegen demo.playwright.dev/todomvc" ... "'assert visibility' to assert that an element is visible" ... "'assert text' to assert that an element contains specific text" | S17 | |
| C60 | `--save-storage` saves cookies, localStorage, and IndexedDB data. | "Run codegen with --save-storage to save cookies, localStorage and IndexedDB data at the end of the session." | S17 | |
| C61 | Ask Claude for evidence: the command and its output; "all tests pass" alone says little. | "the command it ran and its output, or the screenshot" ... "on its own tells you very little" | S18 | |
| C62 | A prompt can say to run the tests and keep going until they pass. | "run the auth tests after, and keep going until they pass" | S18 | |
| C63 | /code-review reviews the diff in a fresh subagent. | "reviews the diff in a fresh subagent that never saw your conversation" | S18 | |
| C64 | A reviewer asked to find problems will always find something. | "A reviewer that's asked to find problems will always find" | S18 | |
| C65 | Add Playwright MCP to Claude Code; it uses accessibility snapshots; Node.js 20 or newer. | "claude mcp add playwright npx @playwright/mcp@latest" ... "enabling LLMs to interact with web pages using structured accessibility snapshots" ... "Node.js 20 or newer" | S19 | |
| C66 | Snapshots show roles and text; the LLM uses element refs. | "it returns a structured snapshot showing the page elements, their roles, and text content" | S19 | |
| C67 | Install the Playwright CLI and its skills; snapshot and generate-locator commands. | "npm install -g @playwright/cli@latest" ... "playwright-cli install --skills" ... "playwright-cli snapshot" ... "playwright-cli generate-locator <ref>" | S20 | |
| C68 | CLI calls use fewer tokens than MCP. | "CLI invocations are more token-efficient" | S20 | |
| C69 | Test Agents: planner, generator, healer; set up with `init-agents --loop=claude`. | "planner explores the app and produces a Markdown test plan" ... "healer executes the test suite and automatically repairs failing tests" ... "npx playwright init-agents --loop=claude" | S21 | |
| C70 | dMoney: tests are in e2e, traces kept on failure, screenshots on failure, HTML report does not open. | "testDir: './e2e'," ... "trace: 'retain-on-failure'," ... "screenshot: 'only-on-failure'," | dmoney-repo/dmoney-web-react/playwright.config.ts | |
| C71 | dMoney: the config starts the web app and the API, or reuses running servers. | "reuseExistingServer: true," ... "url: 'http://localhost:3000/login'," | dmoney-repo/dmoney-web-react/playwright.config.ts | |
| C72 | dMoney: one project per role, admin depends on admin-setup. | "name: 'admin-setup'" ... "dependencies: ['admin-setup']," | dmoney-repo/dmoney-web-react/playwright.config.ts | |
| C73 | dMoney: LoginPage locates by label and role. | "page.getByLabel('Email or Phone Number')" ... "page.getByRole('button', { name: /^Login/ })" | dmoney-repo/dmoney-web-react/e2e/pages/LoginPage.ts | |
| C74 | dMoney: admin login has no OTP and lands on /profile. | "Admin login: no OTP step, lands on /profile once the session is stored." | dmoney-repo/dmoney-web-react/e2e/pages/LoginPage.ts | |
| C75 | dMoney: LoginPage waits for React hydration on a cold dev server. | "On a cold `next dev` server the form renders before React hydrates, and a click" | dmoney-repo/dmoney-web-react/e2e/pages/LoginPage.ts | |
| C76 | dMoney: login tests start logged out. | "test.use({ storageState: { cookies: [], origins: [] } });" | dmoney-repo/dmoney-web-react/e2e/tests/agent/agent-login.spec.ts | |
| C77 | dMoney: admin credentials come from environment variables. | "process.env.ADMIN_EMAIL" ... "process.env.ADMIN_PASSWORD" | dmoney-repo/dmoney-web-react/e2e/test-data/users.ts | Values not repeated. |
| C78 | dMoney: the /playwright command says to prove the assertion by breaking it, and not to use waitForTimeout. | "Change one expected value to a wrong value and run. The test must fail with a clear message." ... "Do not use `waitForTimeout`." | dmoney-repo/.claude/commands/playwright.md | |
| C79 | dMoney: Playwright version range in package.json. | "^1.63.0" | dmoney-repo/dmoney-web-react/package.json | |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F1 | Fixed: the lede no longer makes a speed claim. |
| facts | F15 | Fixed: S4 wording, "performs actions and asserts the state against expectations", with `<Cite n={4} />`. |
| facts | F26 | Fixed: S7 wording, "Playwright can create multiple browser contexts in one scenario, and a page belongs to a context", with `<Cite n={7} />`. The Layman follows. |
| facts | F30 | Fixed: S7, "This isolation prevents cascading test failures." |
| facts | F66 | Fixed: "This section covers four debug tools: UI mode, the trace viewer, the Inspector, and codegen." |
| facts | F84 | Fixed: labelled "The tutorial's view". Same in all three panels. |
| facts | F85 | Fixed: labelled "The tutorial's advice", and the claim is now about what a live page gives. Same in all three panels. |
| facts | F119 | Fixed: "The tutorial expects one passing test in the output", with no cite. |
| facts | F132 | Fixed: removed "the CLI". |
| facts | F143 | Fixed: "A tool that you add to Claude Code with `claude mcp add`. It reads the page through accessibility snapshots." |
| voices | V1 | Fixed: deleted the definition of headless. |
| voices | V2 | Fixed: deleted the definition of a retry. |
| voices | V3 | Fixed: deleted the definition of `baseURL`. |
| voices | V4 | Fixed: "The config file holds the browsers, timeouts, retries, projects, and reporters." |
| voices | V6 | Fixed: deleted the definition of a worker. |
| voices | V7 | Fixed: "`--ui` opens UI mode." |
| voices | V8 | Fixed: "runs one project only". |
| voices | V10 | Fixed: the program, window, and tab analogy is gone; the Layman now follows the Technical layers. |
| voices | V12 | Fixed: "The docs list these built-in locators, and they recommend `getByRole()` first". |
| voices | V14 | Fixed: deleted the definition of flaky. |
| voices | V15 | Fixed: "A test times out after 30 seconds by default." |
| voices | V17 | Fixed: "opens with `--debug`, together with a headed browser". |
| voices | V18 | Fixed: "In CI, record a trace only on the first retry". |
| voices | V19 | Fixed: the Bangla gives `on-first-retry` for CI, and says what `retain-on-failure` keeps. |
| voices | V20 | Fixed: "A reviewer that you ask to find problems will always find some". |
| voices | V22 | Fixed: "It turns off some of the checks that Playwright makes before an action." |
| voices | V23 | Fixed: "non-essential actionability check". |
| voices | V26 | Fixed in the Technical panel too: the Common mistakes row now says that `expect(await locator.isVisible()).toBe(true)` "checks once and does not wait" (with `<Cite n={10} />`, as in the review checklist), and that a check on a value the test set itself cannot fail. The old row said that the `isVisible()` check cannot fail, which was wrong: it can fail, but it does not wait. |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | Playwright tests perform actions and assert the state against expectations. | "Playwright tests are simple: they perform actions and assert the state against expectations." | S4 | |
| R2 | Playwright can create multiple browser contexts in one scenario; a page belongs to a context. | "Playwright can create multiple browser contexts within a single scenario." … "\"page\" belongs to this context." | S7 | |
| R3 | Browser-context isolation prevents cascading test failures. | "This isolation model improves reproducibility and prevents cascading test failures." | S7 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F117 | Fixed: "a setup project and a test project for each of the admin and agent roles". |
| facts | F124 | Fixed: added S22, which shows `test.use({ storageState: { cookies: [], origins: [] } })` to reset the storage state. |
| facts | F138 | Fixed: "The Playwright test framework that this page teaches". |
| voices | V3 | Fixed: deleted the example. |
| voices | V7 | Fixed: "by its test id". |
| voices | V8 | Fixed: "The docs do not recommend `nth()` for this." |
| voices | V10 | Fixed: "Before Playwright clicks". |
| voices | V18 | Fixed: removed the cite. |
| voices | V19 | Fixed: removed the cite. |
| voices | V20 | Fixed: "Use `on-first-retry` or `retain-on-failure`." |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | `test.use({ storageState: { cookies: [], origins: [] } })` resets the storage state, so the test is not signed in. | "// Reset storage state for this file to avoid being authenticated" … "test.use({ storageState: { cookies: [], origins: [] } });" | S22 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | V7 | Fixed: "finds an element by its text. Use it for text that you do not click." |
| voices | V8 | Fixed: "can click the wrong element". |
| voices | V10 | Fixed: deleted "On a web page". |
| voices | V11 | Fixed: deleted "web page-এ". |
| voices | V14 | Fixed: "lets Claude read the running app". |
| voices | V16 | Fixed: "does not use `nth()`, `first()`, or `last()` without a good reason". |
