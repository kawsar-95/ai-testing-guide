# Research notes: SDET Roadmap, UI Automation with Playwright

Page: `content/sdet/playwright-ui.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Installation | Playwright (Microsoft) | https://playwright.dev/docs/intro | 2026-11-15 |
| S2 | Writing tests | Playwright (Microsoft) | https://playwright.dev/docs/writing-tests | 2026-11-15 |
| S3 | Locators | Playwright (Microsoft) | https://playwright.dev/docs/locators | 2026-11-15 |
| S4 | Auto-waiting | Playwright (Microsoft) | https://playwright.dev/docs/actionability | 2026-11-15 |
| S5 | Assertions | Playwright (Microsoft) | https://playwright.dev/docs/test-assertions | 2026-11-15 |
| S6 | Page object models | Playwright (Microsoft) | https://playwright.dev/docs/pom | 2026-11-15 |
| S7 | Generating tests | Playwright (Microsoft) | https://playwright.dev/docs/codegen-intro | 2026-11-15 |
| S8 | Trace viewer | Playwright (Microsoft) | https://playwright.dev/docs/trace-viewer-intro | 2026-11-15 |
| S9 | Best Practices | Playwright (Microsoft) | https://playwright.dev/docs/best-practices | 2026-11-15 |
| S10 | Isolation | Playwright (Microsoft) | https://playwright.dev/docs/browser-contexts | 2026-11-15 |
| S11 | Running and debugging tests | Playwright (Microsoft) | https://playwright.dev/docs/running-tests | 2026-11-15 |
| S12 | UI Mode | Playwright (Microsoft) | https://playwright.dev/docs/test-ui-mode | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Playwright Test is an end-to-end test framework for web apps. | S1 | "Playwright Test is an end-to-end test framework for modern web apps." |
| C2 | It bundles a test runner, assertions, isolation, parallel runs, and tooling. | S1 | "It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| C3 | Chromium, WebKit, Firefox; Windows, Linux, macOS; local or CI; headless or headed. | S1 | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| C4 | A test performs actions and asserts the state. | S2 | "Playwright tests are simple: they perform actions and assert the state against expectations." |
| C5 | No manual waits are needed. | S2 | "You don't need to add manual waits or deal with race conditions." |
| C6 | Each test runs in an isolated browser context. | S10 | "Tests written with Playwright execute in isolated clean-slate environments called browser contexts." |
| C7 | Each test has its own storage and cookies. | S10 | "This means that each test has its own local storage, session storage, cookies etc." |
| C8 | A context is like an incognito profile. | S10 | "which are equivalent to incognito-like profiles" |
| C9 | A locator finds elements at any moment. | S3 | "locators represent a way to find element(s) on the page at any moment" |
| C10 | The recommended built-in locators. | S3 | "These are the recommended built-in locators." |
| C11 | `getByTestId` uses the `data-testid` attribute. | S3 | "page.getByTestId() to locate an element based on its data-testid attribute" |
| C12 | Prioritize user-facing attributes such as the role. | S3 | "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()" |
| C13 | Locators are strict: an action throws if more than one element matches. | S3 | "will throw an exception if more than one element matches" |
| C14 | `locator.first()` matches only one element. | S3 | "you can use locator.first() to only match one of them" |
| C15 | `locator.filter()` filters by text. | S3 | "Locators can be filtered by text with the locator.filter() method." |
| C16 | Playwright runs actionability checks before actions. | S4 | "Playwright performs a range of actionability checks on the elements before making actions" |
| C17 | For a click: one element, visible, stable, receives events, enabled. | S4 | "element Receives Events, as in not obscured by other elements element is Enabled" |
| C18 | If the checks do not pass in the timeout, the action fails with `TimeoutError`. | S4 | "action fails with the TimeoutError" |
| C19 | Web-first assertions retry until they pass or time out. | S5 | "The following assertions will retry until the assertion passes, or the assertion timeout is reached." |
| C20 | The default assertion timeout is 5 seconds. | S5 | "By default, the timeout for assertions is set to 5 seconds." |
| C21 | Retrying assertions are async and must be awaited. | S5 | "retrying assertions are async, so you must await them" |
| C22 | Node.js versions. | S1 | "Node.js: latest 22.x, 24.x or 26.x." |
| C23 | `npm init playwright@latest` creates a project or adds Playwright. | S1 | "The command below either initializes a new project or adds Playwright to an existing one." |
| C24 | It asks TypeScript or JavaScript, default TypeScript. | S1 | "TypeScript or JavaScript (default: TypeScript)" |
| C25 | It creates `playwright.config.ts` and `tests/example.spec.ts`. | S1 | "example.spec.ts # Minimal example test" |
| C26 | The config holds browsers, timeouts, retries, projects, and reporters. | S1 | "The playwright.config centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| C27 | `npx playwright test` runs headless, in parallel, on three browsers. | S1 | "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| C28 | `--headed` shows the browser. | S1 | "See the browser window: add --headed ." |
| C29 | `--ui` opens the testing UI. | S1 | "Open testing UI: --ui ." |
| C30 | The HTML report opens by itself only when a test fails. | S1 | "It auto-opens only when failures occur" |
| C31 | Codegen opens a browser and the Inspector. | S7 | "Codegen opens a browser window for interaction and the Playwright Inspector for recording, copying, and managing your generated tests." |
| C32 | Codegen writes code for the actions. | S7 | "Playwright generates code for your interactions automatically." |
| C33 | `--debug` opens a browser and the Inspector. | S11 | "This command opens a browser window as well as the Playwright Inspector." |
| C34 | UI Mode: time travel and watch mode. | S12 | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| C35 | Test what the end user sees, not implementation details. | S9 | "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| C36 | A test that depends on the DOM structure breaks when the DOM changes. | S9 | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| C37 | Page objects: a higher-level API, selectors in one place. | S6 | "Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" |
| C38 | Test hooks. | S2 | "You can use various test hooks such as test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| C39 | Traces run on the first retry of a failed test. | S8 | "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| C40 | Retries: 2 on CI, 0 locally. | S8 | "Also retries are set to 2 when running on CI and 0 locally." |
| C41 | `--trace on` forces tracing. | S8 | "you can force tracing to be on with --trace on" |
| C42 | Open a trace from the HTML report. | S8 | "In the HTML report, click on the trace icon next to the test file name to directly open the trace for the required test." |
| C43 | Only test what you control. | S9 | "Don't try to test links to external sites or third party servers that you do not control." |
| C44 | Do not use manual assertions. | S9 | "Don't use manual assertions that are not awaiting the expect." |
| C45 | Web-first assertions wait for the condition. | S9 | "By using web first assertions Playwright will wait until the expected condition is met." |
| C46 | Each test is isolated and runs on its own. | S9 | "Each test should be completely isolated from another test and should run independently" |
| C47 | Codegen example URL. | S7 | "npx playwright codegen demo.playwright.dev/todomvc" |
| C48 | Playwright waits for actionability before each action. | S2 | "Playwright automatically waits for actionability checks to pass before performing each action." |
| C49 | Pages are isolated between tests. | S2 | "Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile." |
| C50 | Prefer user-facing attributes to XPath or CSS selectors. | S9 | "Prefer user-facing attributes to XPath or CSS selectors" |
| C51 | A manual `isVisible()` check does not wait. | S9 | "the test won't wait a single second, it will just check the locator is there and return immediately" |
| C52 | The Inspector steps through a test. | S11 | "You can use the step over button at the top of the inspector to step through your test." |
| C53 | `toHaveText` re-tests until the text matches. | S5 | "Playwright will be re-testing the element with the test id of status until the fetched element has the" |
| C54 | Stable means not animating. | S4 | "element is Stable, as in not animating or completed animation" |
| C55 | UI Mode: explore, run, and debug tests, with time travel and a watch mode. | S12 | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| C56 | Playwright's page object example is a helper class. | S6 | "We will create a PlaywrightDevPage helper class to encapsulate common operations on the playwright.dev page." |
| C57 | `locator.first()` opts out of strictness and is not recommended. | S3 | "These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." |

## Run check

The two code examples of the page (the test in "Try it" and the page object in "How a tester uses it") ran on 2026-11-15 with `@playwright/test` 1.65.0 and Chromium against https://demo.playwright.dev/todomvc: 2 passed. The placeholder text `What needs to be done?`, the test id `todo-title`, and the text `1 item left` come from that run, not from a source.

## Not on the page

Playwright's MCP server and test agents: the tutorial page [Browser Testing with Playwright](/automate/playwright/) covers them, and the page links there.
