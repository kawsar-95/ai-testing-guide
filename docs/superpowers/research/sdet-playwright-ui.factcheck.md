# Fact check: sdet / playwright-ui

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / playwright-ui (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits for it, walks through a first test, and shows how to keep a suite readable | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | What it is: runs on Chromium, WebKit, Firefox, on Windows, Linux, macOS; locally or in CI, headless or headed | S1 | PASS | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | What it is: a test performs actions and checks the state against expectations | S2 | PASS | "they perform actions and assert the state against expectations." |
| 6 | What it is: Playwright waits for the actionability checks before each action, so you add no manual waits | S2 | PASS | "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | What it is: each test runs in its own browser context, a clean, incognito-like profile | S10 | PASS | "Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles... Playwright creates a context for each test" |
| 8 | What it is: it has its own local storage, session storage, and cookies | S10 | PASS | "each test has its own local storage, session storage, cookies etc." |
| 9 | What it is: the pages of two tests are isolated from each other | S2 | PASS | "Pages are isolated between tests due to the Browser Context" |
| 10 | What it is: "Browser Testing with Playwright" shows how Claude Code drives Playwright through MCP and the test agents | none | FAIL | A fact about Claude Code, MCP, and test agents with no cite, and no source in `pages/` covers it. Fix: cut the claim, or keep only a plain link such as "See Browser Testing with Playwright." |
| 11 | How it works: a locator is a way to find elements on the page at any moment | S3 | PASS | "locators represent a way to find element(s) on the page at any moment." |
| 12 | How it works: the recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | "These are the recommended built-in locators." The source lists `page.getByRole()`, `page.getByText()`, `page.getByLabel()`, `page.getByPlaceholder()`, and `page.getByTestId()`. |
| 13 | How it works: getByTestId finds an element by its data-testid attribute | S3 | PASS | "page.getByTestId() to locate an element based on its data-testid attribute" |
| 14 | How it works: Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 15 | How it works: an action on a locator throws an error if more than one element matches | S3 | PASS | "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 16 | How it works: before an action, Playwright runs actionability checks | S4 | PASS | "Playwright performs a range of actionability checks on the elements before making actions" |
| 17 | How it works: for click(), the locator resolves to exactly one element; the element is visible, stable (not animating), not covered, enabled | S4 | PASS | "for locator.click(), Playwright will ensure that: locator resolves to exactly one element ... element is Visible ... element is Stable, as in not animating or completed animation ... element Receives Events, as in not obscured by other elements ... element is Enabled" |
| 18 | How it works: if the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 19 | How it works: a web-first assertion such as `await expect(locator).toBeVisible()` retries until it passes or its timeout is reached | S5 | PASS | "It will re-fetch the element and check it over and over, until the condition is met or until the timeout is reached." |
| 20 | How it works: the default assertion timeout is 5 seconds | S5 | PASS | "By default, the timeout for assertions is set to 5 seconds." |
| 21 | Try it: you need Node.js, the latest 22.x, 24.x, or 26.x | S1 | PASS | "Node.js: latest 22.x, 24.x or 26.x." |
| 22 | Try it: run `npm init playwright@latest` in an empty folder | S1 | FAIL | S1 does not say "empty folder". The source says the command "either initializes a new project or adds Playwright to an existing one." Fix: cut "in an empty folder". |
| 23 | Try it: it creates a new project, or adds Playwright to an existing one | S1 | PASS | "The command below either initializes a new project or adds Playwright to an existing one." |
| 24 | Try it: it asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 25 | Try it: it creates playwright.config.ts and tests/example.spec.ts | S1 | PASS | "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" |
| 26 | Try it: the config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | "target browsers, timeouts, retries, projects, reporters and more." |
| 27 | Try it: `npx playwright test` runs the tests headless, in parallel, on Chromium, Firefox, WebKit | S1 | PASS | "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 28 | Try it: `--headed` shows the browser; `--ui` opens UI Mode | S1 | PASS | "See the browser window: add --headed." "Open testing UI: --ui." |
| 29 | Try it: `npx playwright show-report` opens the HTML report; it opens by itself only when a test fails | S1 | PASS | "It auto-opens only when failures occur; open manually with the command below." |
| 30 | Try it: `npx playwright codegen demo.playwright.dev/todomvc` opens a browser and the Playwright Inspector | S7 | PASS | "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 31 | Try it: click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | "Run codegen and perform actions in the browser. Playwright generates code for your interactions automatically." |
| 32 | Try it: the test uses built-in locators and web-first assertions | S3, S5 | N/A | Only describes what the page's own example code uses. |
| 33 | Try it: `npx playwright test --debug` opens a browser and the Playwright Inspector | S11 | PASS | "This command opens a browser window as well as the Playwright Inspector." |
| 34 | Try it: the step over button steps through the test | S11 | PASS | "You can use the step over button at the top of the inspector to step through your test." |
| 35 | Try it: UI Mode adds time travel and a watch mode | S12 | PASS | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 36 | How a tester uses it: a test should check that the app works for its end users, and not rely on implementation details | S9 | PASS | "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 37 | How a tester uses it: prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | "Prefer user-facing attributes to XPath or CSS selectors" |
| 38 | How a tester uses it: the DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 39 | How a tester uses it: a page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | "creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" |
| 40 | How a tester uses it: the test then reads like the steps of a user | none | N/A | Describes the page's own example code. |
| 41 | How a tester uses it: `test.describe` declares a group of tests; `test.beforeEach` and `test.afterEach` run before and after each test | S2 | PASS | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 42 | How a tester uses it: the default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 43 | How a tester uses it: retries are 2 on CI and 0 locally | S8 | PASS | "retries are set to 2 when running on CI and 0 locally." |
| 44 | How a tester uses it: you open a trace from the trace icon in the HTML report | S8 | PASS | "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 45 | How a tester uses it: locally, `--trace on` forces tracing | S8 | PASS | "you can force tracing to be on with --trace on." |
| 46 | How a tester uses it: do not test links to external sites or third-party servers that you do not control | S9 | PASS | "Don't try to test links to external sites or third party servers that you do not control." |
| 47 | Common mistakes: `expect(await ...isVisible()).toBe(true)` does not wait; it checks once and returns at once | S9 | PASS | "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 48 | Common mistakes: `await expect(...).toBeVisible()` waits until the condition is met | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 49 | Common mistakes: retrying assertions are async, so you must await them | S5 | PASS | "Note that retrying assertions are async, so you must await them." |
| 50 | Common mistakes: Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | "You don't need to add manual waits" |
| 51 | Common mistakes: CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 52 | Common mistakes: use the user-facing locators instead | S3 | PASS | "try to come up with a locator that is close to how the user perceives the page such as role locators" |
| 53 | Common mistakes: a locator that matches many elements makes the action throw, because locators are strict | S3 | PASS | "Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 54 | Common mistakes: narrow the locator with `locator.filter()`, or take one match with `locator.first()` | S3 | PASS | "you can use the locator.filter() method to select the right one." "locator.first(), locator.last(), and locator.nth()" are the ways to opt out of strictness. |
| 55 | Common mistakes: each test should be completely isolated and run on its own | S9 | PASS | "Each test should be completely isolated from another test and should run independently" |
| 56 | What a tester can check: the callout list | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | Playwright Test: end-to-end test framework for web apps, with its own test runner and assertions | none | PASS | What it is: "an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools" |
| K2 | Locator: a way to find elements on the page at any moment, such as `page.getByRole()` | none | PASS | How it works: "A locator is a way to find elements on the page at any moment" |
| K3 | Strict locator: an action throws an error if more than one element matches | none | PASS | How it works: "An action on a locator throws an error if more than one element matches." |
| K4 | Actionability checks: one element, visible, stable, not covered, and enabled | none | PASS | How it works: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an `await expect(...)` check that retries until it passes or times out (5 seconds by default) | none | PASS | How it works: "retries until it passes or its timeout is reached. The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile that each test gets, with its own storage and cookies | none | PASS | What it is: "a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | none | PASS | How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place". The panel's example code shows a class. |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | none | PASS | Try it: "opens a browser and the Playwright Inspector ... Playwright writes the code for your actions" |
| K9 | Trace: a recording of a test run that you open from the HTML report | none | PASS | How a tester uses it: "records a trace on the first retry of a failed test ... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a window to explore, run, and debug tests, with time travel and a watch mode | none | FAIL | The Technical panels only say "UI Mode adds time travel and a watch mode." No Technical panel says that UI Mode lets you explore, run, and debug tests, or that it is a window. Fix: write "UI Mode adds time travel and a watch mode." |

Open FAILs: 3

FAILs in round 1: 3.

## Round 2 (2026-11-16)

### Fact check: sdet / playwright-ui (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | It describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits, walks through a first test, and shows how to keep a suite readable | none | N/A | It describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | S1: "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs on Chromium, WebKit, Firefox, on Windows, Linux, macOS; locally or in CI, headless or headed | S1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test performs actions and checks the state against expectations | S2 | PASS | S2: "they perform actions and assert the state against expectations." |
| 6 | Playwright waits for actionability checks to pass before each action, so you add no manual waits | S2 | PASS | S2: "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | S10: "Tests written with Playwright execute in isolated clean-slate environments called browser contexts." and "BrowserContexts which are equivalent to incognito-like profiles" |
| 8 | It has its own local storage, session storage, and cookies | S10 | PASS | S10: "each test has its own local storage, session storage, cookies etc." |
| 9 | So the pages of two tests are isolated from each other | S2 | PASS | S2: "Pages are isolated between tests due to the Browser Context" |
| 10 | "This page covers the test runner itself. For Playwright with Claude Code, see..." | none | N/A | It describes the page itself. |
| 11 | How it works: a locator is a way to find elements on the page at any moment | S3 | PASS | S3: "locators represent a way to find element(s) on the page at any moment." |
| 12 | Recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | S3: "These are the recommended built-in locators." The list has "page.getByRole()", "page.getByText()", "page.getByLabel()", "page.getByPlaceholder()", "page.getByTestId()". |
| 13 | getByTestId() finds an element by its data-testid attribute | S3 | PASS | S3: "page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)." |
| 14 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | S3: "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 15 | An action on a locator throws an error if more than one element matches | S3 | PASS | S3: "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 16 | Before an action, Playwright runs actionability checks | S4 | PASS | S4: "Playwright performs a range of actionability checks on the elements before making actions" |
| 17 | For locator.click(): exactly one element; visible, stable (not animating), not covered, enabled | S4 | PASS | S4: "for locator.click(), Playwright will ensure that: locator resolves to exactly one element; element is Visible; element is Stable, as in not animating or completed animation; element Receives Events, as in not obscured by other elements; element is Enabled" (The source also lists "Not Inert". The page leaves it out.) |
| 18 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | S4: "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 19 | A web-first assertion such as await expect(locator).toBeVisible() retries until it passes or its timeout is reached | S5 | PASS | S5: "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list has "await expect(locator).toBeVisible()". (The term "web-first" is in S9, not S5. The retry fact is in S5.) |
| 20 | The default assertion timeout is 5 seconds | S5 | PASS | S5: "By default, the timeout for assertions is set to 5 seconds." |
| 21 | Try it: you need Node.js, the latest 22.x, 24.x, or 26.x | S1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 22 | npm init playwright@latest creates a new project or adds Playwright to an existing one | S1 | PASS | S1: "The command below either initializes a new project or adds Playwright to an existing one." |
| 23 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)" |
| 24 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | S1: "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" |
| 25 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | S1: "centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| 26 | npx playwright test runs the tests headless, in parallel, on Chromium, Firefox, WebKit | S1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 27 | Add --headed to see the browser, or --ui to open UI Mode | S1 | PASS | S1: "See the browser window: add --headed." and "Open testing UI: --ui." |
| 28 | show-report opens the HTML report; it opens by itself only when a test fails | S1 | PASS | S1: "It auto-opens only when failures occur; open manually with the command below." |
| 29 | codegen demo.playwright.dev/todomvc opens a browser and the Playwright Inspector | S7 | PASS | S7: "Codegen opens a browser window for interaction and the Playwright Inspector for recording" and "npx playwright codegen demo.playwright.dev/todomvc" |
| 30 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | S7: "Run codegen and perform actions in the browser. Playwright generates code for your interactions automatically." |
| 31 | Step 4: "Save this as tests/todo.spec.ts... It uses built-in locators and web-first assertions" | S3, S5 | N/A | It is an instruction, and it describes the page's own example code. |
| 32 | npx playwright test --debug opens a browser and the Playwright Inspector | S11 | PASS | S11: "This command opens a browser window as well as the Playwright Inspector." |
| 33 | Its step over button steps through the test | S11 | PASS | S11: "You can use the step over button at the top of the inspector to step through your test." |
| 34 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | S12: "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 35 | How a tester uses it: a test should check the app works for end users, not rely on implementation details | S9 | PASS | S9: "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 36 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | S9: "Prefer user-facing attributes to XPath or CSS selectors" |
| 37 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 38 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | S6: "Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" |
| 39 | Playwright's own example builds it as a helper class | S6 | PASS | S6: "We will create a PlaywrightDevPage helper class to encapsulate common operations on the playwright.dev page." |
| 40 | "The test then reads like the steps of a user:" | none | N/A | It describes the page's own example code. |
| 41 | test.describe declares a group of tests. test.beforeEach and test.afterEach run before and after each test | S2 | PASS | S2: "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 42 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | S8: "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 43 | Retries are 2 on CI and 0 locally | S8 | PASS | S8: "retries are set to 2 when running on CI and 0 locally." |
| 44 | You open a trace from the trace icon in the HTML report | S8 | PASS | S8: "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 45 | Locally, --trace on forces tracing | S8 | PASS | S8: "you can force tracing to be on with --trace on." |
| 46 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | S9: "Don't try to test links to external sites or third party servers that you do not control." |
| 47 | Common mistakes: expect(await ...isVisible()).toBe(true) does not wait; it checks once and returns at once | S9 | PASS | S9: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 48 | Write await expect(...).toBeVisible() instead, which waits until the condition is met | S9 | PASS | S9: "By using web first assertions Playwright will wait until the expected condition is met." |
| 49 | Retrying assertions are async, so you must await them | S5 | PASS | S5: "retrying assertions are async, so you must await them." |
| 50 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | S2: "You don't need to add manual waits" |
| 51 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 52 | Use the user-facing locators instead | S3 | PASS | S3: "CSS and XPath are not recommended as the DOM can often change... try to come up with a locator that is close to how the user perceives the page such as role locators" |
| 53 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | S3: "Locators are strict... will throw an exception if more than one element matches." |
| 54 | Narrow the locator with locator.filter(), or take one match with locator.first() | S3 | PASS | S3: "you can use the locator.filter() method to select the right one" and "locator.first(), locator.last(), and locator.nth()" |
| 55 | Each test should be completely isolated and run on its own | S9 | PASS | S9: "Each test should be completely isolated from another test and should run independently" |
| 56 | What a tester can check: the callout says it is the tutorial's own advice | none | N/A | It is advice, and it says it is advice. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | n/a | PASS | The What it is Technical panel says: "an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation..." |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | n/a | PASS | How it works Technical panel: "A locator is a way to find elements on the page at any moment" |
| K3 | Strict locator: an action throws an error if more than one element matches | n/a | PASS | How it works Technical panel: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, enabled | n/a | PASS | How it works Technical panel: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an await expect(...) check that retries until it passes or times out (5 seconds by default) | n/a | PASS | How it works Technical panel: "retries until it passes or its timeout is reached. The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | n/a | PASS | What it is Technical panel: "a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | n/a | PASS | How a tester uses it Technical panel: "A page object gives one page a higher-level API and keeps its selectors in one place... builds it as a helper class" |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | n/a | PASS | Try it Technical panel: "codegen ... opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" (The Technical panel does not use the name "test generator". The fact is the same.) |
| K9 | Trace: a recording of a test run that you open from the HTML report | n/a | PASS | How a tester uses it Technical panel: "records a trace on the first retry of a failed test... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a mode to explore, run, and debug tests, with time travel and a watch mode | n/a | PASS | Try it Technical panel: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode" |

Open FAILs: 0

FAILs in round 2: 0.

## Round 3 (2026-11-16)

### Fact check: sdet / playwright-ui (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test cover locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | It describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits, walks through a first test on a demo app, and shows how to keep a suite readable and easy to debug | none | N/A | It describes the page itself. |
| 3 | Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | S1: "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs tests on Chromium, WebKit, and Firefox, on Windows, Linux, and macOS. It runs locally or in CI, headless or headed | S1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test does two things: it performs actions, and it checks the state against expectations | S2 | PASS | S2: "they perform actions and assert the state against expectations." |
| 6 | Playwright waits for the actionability checks to pass before each action, so you do not add manual waits | S2 | PASS | S2: "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | S10: "BrowserContexts which are equivalent to incognito-like profiles." and "Playwright creates a context for each test". "isolated clean-slate environments called browser contexts." |
| 8 | It has its own local storage, session storage, and cookies | S10 | PASS | S10: "each test has its own local storage, session storage, cookies etc." |
| 9 | So the pages of two tests are isolated from each other | S2 | PASS | S2: "Pages are isolated between tests due to the Browser Context" |
| 10 | This page covers the test runner itself. For Playwright with Claude Code, see Browser Testing with Playwright | none | N/A | It describes the page and links to another page. |
| 11 | A locator is a way to find elements on the page at any moment | S3 | PASS | S3: "locators represent a way to find element(s) on the page at any moment." |
| 12 | The recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | S3: "These are the recommended built-in locators." followed by "page.getByRole()", "page.getByText()", "page.getByLabel()", "page.getByPlaceholder()", "page.getByTestId()" (the source lists more as well). |
| 13 | getByTestId() finds an element by its data-testid attribute | S3 | PASS | S3: "page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured)." Note: the page leaves out that other attributes can be configured. |
| 14 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | S3: "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 15 | An action on a locator throws an error if more than one element matches | S3 | PASS | S3: "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 16 | Before an action, Playwright runs actionability checks | S4 | PASS | S4: "Playwright performs a range of actionability checks on the elements before making actions" |
| 17 | For locator.click(), the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled | S4 | PASS | S4: "for locator.click(), Playwright will ensure that: locator resolves to exactly one element; element is Visible; element is Stable, as in not animating...; element Receives Events, as in not obscured by other elements; element is Enabled". Note: S4 also lists "Not Inert", which the page leaves out. |
| 18 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | S4: "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 19 | A web-first assertion such as `await expect(locator).toBeVisible()` retries until it passes or its timeout is reached | S5 | FAIL | S5 says "The following assertions will retry until the assertion passes, or the assertion timeout is reached." and its list includes toBeVisible. But S5 never uses the term "web-first". Only S9 does ("web first assertions"). Fix: say "An auto-retrying assertion such as..." or add a Cite to S9. |
| 20 | The default assertion timeout is 5 seconds | S5 | PASS | S5: "By default, the timeout for assertions is set to 5 seconds." |
| 21 | You need Node.js: the latest 22.x, 24.x, or 26.x | S1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 22 | `npm init playwright@latest` creates a new project, or adds Playwright to an existing one | S1 | PASS | S1: "The command below either initializes a new project or adds Playwright to an existing one." |
| 23 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)" |
| 24 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | S1: "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" and "creates the scaffold below." |
| 25 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | S1: "centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| 26 | `npx playwright test` runs the tests headless, in parallel, on Chromium, Firefox, and WebKit | S1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit (configurable in playwright.config)." Note: the page leaves out "by default". |
| 27 | Add --headed to see the browser, or --ui to open UI Mode | S1 | PASS | S1: "See the browser window: add --headed." and "Open testing UI: --ui." |
| 28 | `npx playwright show-report` opens the HTML report; it opens by itself only when a test fails | S1 | PASS | S1: "It auto-opens only when failures occur; open manually with the command below." followed by "npx playwright show-report" |
| 29 | `npx playwright codegen demo.playwright.dev/todomvc` opens a browser and the Playwright Inspector | S7 | PASS | S7: "npx playwright codegen demo.playwright.dev/todomvc" and "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 30 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | S7: "Run codegen and perform actions in the browser. Playwright generates code for your interactions automatically." |
| 31 | Step 4: the example test uses built-in locators and web-first assertions | S3, S5 | FAIL | S3 supports the built-in locators. S5 does not use the term "web-first". Only S9 does ("By using web first assertions Playwright will wait until..."). Fix: cite S9 for "web-first", or say "auto-retrying assertions" with S5. |
| 32 | `npx playwright test --debug` opens a browser and the Playwright Inspector | S11 | PASS | S11: "This command opens a browser window as well as the Playwright Inspector." |
| 33 | Its step over button steps through the test | S11 | PASS | S11: "You can use the step over button at the top of the inspector to step through your test." |
| 34 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | S12: "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 35 | A test should check that the app works for its end users, and not rely on implementation details | S9 | PASS | S9: "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 36 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | S9: "Prefer user-facing attributes to XPath or CSS selectors" |
| 37 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 38 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | S6: "Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place". Note: S6 says a page object represents "a part of your web application" (e.g. a home page, a listings page). The page's "one page" fits that. |
| 39 | Playwright's own example builds it as a helper class | S6 | PASS | S6: "We will create a PlaywrightDevPage helper class to encapsulate common operations on the playwright.dev page." |
| 40 | The test then reads like the steps of a user | none | N/A | It describes the page's own example code. It is not a fact about a tool. |
| 41 | test.describe declares a group of tests. test.beforeEach and test.afterEach run before and after each test | S2 | PASS | S2: "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 42 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | S8: "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 43 | Retries are 2 on CI and 0 locally | S8 | PASS | S8: "retries are set to 2 when running on CI and 0 locally." |
| 44 | You open a trace from the trace icon in the HTML report | S8 | PASS | S8: "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 45 | Locally, `--trace on` forces tracing | S8 | PASS | S8: "you can force tracing to be on with --trace on." |
| 46 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | S9: "Don't try to test links to external sites or third party servers that you do not control." |
| 47 | `expect(await page.getByText('welcome').isVisible()).toBe(true)` does not wait: it checks once and returns at once | S9 | PASS | S9: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 48 | Write `await expect(page.getByText('welcome')).toBeVisible()` instead, which waits until the condition is met | S9 | PASS | S9: "By using web first assertions Playwright will wait until the expected condition is met." and "Use web first assertions such as toBeVisible() instead." |
| 49 | Retrying assertions are async, so you must await them | S5 | PASS | S5: "Note that retrying assertions are async, so you must await them." |
| 50 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | S2: "You don't need to add manual waits or deal with race conditions." |
| 51 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 52 | Use the user-facing locators instead | S3 | PASS | S3: "CSS and XPath are not recommended as the DOM can often change... Instead, try to come up with a locator that is close to how the user perceives the page such as role locators" |
| 53 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | S3: "Locators are strict. This means that all operations on locators ... will throw an exception if more than one element matches." |
| 54 | Narrow the locator with locator.filter(), or take one match with locator.first() | S3 | PASS | S3: "Locators can be filtered by text with the locator.filter() method." and "you can use locator.first() to only match one of them." |
| 55 | Each test should be completely isolated and run on its own | S9 | PASS | S9: "Each test should be completely isolated from another test and should run independently" |
| 56 | "What a tester can check": the list is the tutorial's own advice | none | N/A | The callout says it is advice. It has no cites. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | Technical | PASS | What it is: "Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation..." |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | Technical | PASS | How it works: "A locator is a way to find elements on the page at any moment... page.getByRole()" |
| K3 | Strict locator: an action on a locator throws an error if more than one element matches | Technical | PASS | How it works: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, and enabled | Technical | PASS | How it works: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an `await expect(...)` check that retries until it passes or times out (5 seconds by default) | Technical | PASS | How it works: "retries until it passes or its timeout is reached. The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile that each test gets, with its own storage and cookies | Technical | PASS | What it is: "Each test runs in its own browser context: a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | Technical | PASS | How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place. Playwright's own example builds it as a helper class" |
| K8 | Codegen: the test generator that records your actions in a browser as test code | Technical | PASS | Try it: "`npx playwright codegen ...` opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" |
| K9 | Trace: a recording of a test run that you open from the HTML report | Technical | PASS | How a tester uses it: "The default config records a trace on the first retry of a failed test... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a mode to explore, run, and debug tests, with time travel and a watch mode | Technical | PASS | Try it: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode" |

Open FAILs: 2

FAILs in round 3: 2.

## Round 4 (2026-11-16)

### Fact check: sdet / playwright-ui (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds and waits for an element, walks through a first test, and shows how to keep a suite readable | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | S1: "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs tests on Chromium, WebKit, Firefox, on Windows, Linux, macOS; locally or in CI, headless or headed | S1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test performs actions and checks the state against expectations | S2 | PASS | S2 line 3 gives "perform actions" and "expectations". |
| 6 | Playwright waits for the actionability checks to pass before each action, so you add no manual waits | S2 | PASS | S2: "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | S10: "Tests written with Playwright execute in isolated clean-slate environments called browser contexts." and "BrowserContexts which are equivalent to incognito-like profiles." |
| 8 | It has its own local storage, session storage, and cookies | S10 | PASS | S10: "each test has its own local storage, session storage, cookies etc." |
| 9 | So the pages of two tests are isolated from each other | S2 | PASS | S2: "Pages are isolated between tests due to the Browser Context" |
| 10 | This page covers the test runner itself. For Playwright with Claude Code, see … | none | N/A | Describes the page and links to another page. |
| 11 | How it works: A locator is a way to find elements on the page at any moment | S3 | PASS | S3: "locators represent a way to find element(s) on the page at any moment." |
| 12 | The recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | S3: "recommended built" (line 5, followed by the list). The list gives "page.getByRole()", "page.getByText()", "page.getByLabel()", "page.getByPlaceholder()" and "page.getByTestId()". |
| 13 | getByTestId() finds an element by its data-testid attribute | S3 | PASS | S3: "page.getByTestId() to locate an element based on its data-testid attribute" |
| 14 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | S3: "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 15 | An action on a locator throws an error if more than one element matches | S3 | PASS | S3: "Locators are strict. This means that all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 16 | Before an action, Playwright runs actionability checks | S4 | PASS | S4: "Playwright performs a range of actionability checks on the elements before making actions" |
| 17 | For locator.click(): exactly one element; visible, stable (not animating), not covered, enabled | S4 | PASS | S4: "locator resolves to exactly one element", "element is Visible", "element is Stable, as in not animating or completed animation", "element Receives Events, as in not obscured by other elements", "element is Enabled" |
| 18 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | S4: "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 19 | An auto-retrying assertion such as await expect(locator).toBeVisible() retries until it passes or its timeout is reached | S5 | PASS | S5: "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list on line 11 includes toBeVisible. |
| 20 | The best practices call them web-first assertions | S9 | PASS | S9: "Use web first assertions ... By using web first assertions Playwright will wait until the expected condition is met." |
| 21 | The default assertion timeout is 5 seconds | S5 | PASS | S5: "By default, the timeout for assertions is set to 5 seconds." |
| 22 | Try it: You need Node.js: the latest 22.x, 24.x, or 26.x | S1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 23 | npm init playwright@latest creates a new project or adds Playwright to an existing one | S1 | PASS | S1: "init playwright" (line 15, the command). S1: "The command below either initializes a new project or adds Playwright to an existing one." |
| 24 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)" |
| 25 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | S1 line 28: "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" |
| 26 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | S1: "target browsers, timeouts, retries, projects, reporters and more." |
| 27 | npx playwright test runs the tests headless, in parallel, on Chromium, Firefox, and WebKit | S1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 28 | Add --headed to see the browser, or --ui to open UI Mode | S1 | PASS | S1: "See the browser window: add --headed." and "Open testing UI: --ui." |
| 29 | npx playwright show-report opens the HTML report; it opens by itself only when a test fails | S1 | FAIL | S1 only shows the `show-report` command (line 45) and an item "How to open the HTML test report". It says nothing about the report opening by itself, or only on failure. Fix: drop "it opens by itself only when a test fails", or cite a source that says it. |
| 30 | npx playwright codegen demo.playwright.dev/todomvc opens a browser and the Playwright Inspector | S7 | PASS | S7: "npx playwright codegen demo.playwright.dev/todomvc" and "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 31 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | S7: "perform actions in the browser. Playwright generates code for your interactions automatically." |
| 32 | The todo test uses built-in locators and auto-retrying assertions | S3, S5 | N/A | Reports what the page's own example code uses. |
| 33 | npx playwright test --debug opens a browser and the Playwright Inspector | S11 | PASS | S11: "This command opens a browser window as well as the Playwright Inspector." |
| 34 | Its step over button steps through the test | S11 | PASS | S11: "You can use the step over button at the top of the inspector to step through your test." |
| 35 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | S12: "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 36 | How a tester uses it: A test should check that the app works for its end users, and not rely on implementation details | S9 | PASS | S9: "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 37 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | S9: "Prefer user-facing attributes to XPath or CSS selectors" |
| 38 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 39 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | S6: "creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" |
| 40 | Playwright's own example builds it as a helper class | S6 | PASS | S6: "We will create a PlaywrightDevPage helper class to encapsulate common operations on the playwright.dev page." |
| 41 | The test then reads like the steps of a user | none | N/A | Describes the page's own example code. |
| 42 | test.describe declares a group of tests. test.beforeEach and test.afterEach run before and after each test | S2 | PASS | S2: "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 43 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | S8: "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 44 | Retries are 2 on CI and 0 locally | S8 | PASS | S8: "retries are set to 2 when running on CI and 0 locally." |
| 45 | You open a trace from the trace icon in the HTML report | S8 | PASS | S8: "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 46 | Locally, --trace on forces tracing | S8 | PASS | S8: "you can force tracing to be on with --trace on." |
| 47 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | S9: "Don't try to test links to external sites or third party servers that you do not control." |
| 48 | Common mistakes: expect(await …isVisible()).toBe(true) does not wait: it checks once and returns at once | S9 | PASS | S9: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 49 | Write await expect(…).toBeVisible() instead, which waits until the condition is met | S9 | PASS | S9: "Use web first assertions such as toBeVisible() instead." and "Playwright will wait until the expected condition is met." |
| 50 | Retrying assertions are async, so you must await them | S5 | PASS | S5: "Note that retrying assertions are async, so you must await them." |
| 51 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | S2: "You don't need to add manual waits or deal with race conditions." |
| 52 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 53 | Use the user-facing locators instead | S3 | PASS | S3: "we recommend prioritizing user-facing attributes" |
| 54 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | S3: "Locators are strict. ... will throw an exception if more than one element matches." |
| 55 | Narrow the locator with locator.filter(), or take one match with locator.first() | S3 | PASS | S3: "Locators can be filtered by text with the locator.filter() method." and "you can choose a specific element from a list with locator.first()" |
| 56 | Each test should be completely isolated and run on its own | S9 | PASS | S9: "Each test should be completely isolated from another test and should run independently" |
| 57 | What a tester can check (callout, tutorial's own advice) | none | N/A | Advice, labelled as the tutorial's own. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | none | PASS | Technical, What it is: "Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools" |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | none | PASS | Technical, How it works: "A locator is a way to find elements on the page at any moment" and "page.getByRole()" |
| K3 | Strict locator: an action throws an error if more than one element matches | none | PASS | Technical, How it works: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, enabled | none | PASS | Technical, How it works: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an await expect(...) check that retries until it passes or times out (5 seconds by default) | none | PASS | Technical, How it works: "retries until it passes or its timeout is reached ... The default assertion timeout is 5 seconds" and "The best practices call them web-first assertions" |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | none | PASS | Technical, What it is: "Each test runs in its own browser context: a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | none | PASS | Technical, How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place. Playwright's own example builds it as a helper class" |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | none | PASS | Technical, Try it: "`npx playwright codegen demo.playwright.dev/todomvc` opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" |
| K9 | Trace: a recording of a test run that you open from the HTML report | none | PASS | Technical, How a tester uses it: "records a trace on the first retry of a failed test ... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: explore, run, and debug tests, with time travel and a watch mode | none | PASS | Technical, Try it: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode" |

Open FAILs: 1

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Fact check: sdet / playwright-ui (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits, walks through a first test, and shows how to keep a suite readable | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps; it bundles a test runner, assertions, isolation, parallel runs and tools | S1 | PASS | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs on Chromium, WebKit, Firefox; on Windows, Linux, macOS; locally or in CI; headless or headed | S1 | PASS | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test performs actions and checks the state against expectations | S2 | PASS | "they perform actions and assert the state against expectations." |
| 6 | Playwright waits for actionability checks before each action, so you add no manual waits | S2 | PASS | "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | "isolated clean-slate environments called browser contexts" and "BrowserContexts which are equivalent to incognito-like profiles" |
| 8 | It has its own local storage, session storage and cookies | S10 | PASS | "each test has its own local storage, session storage, cookies etc." |
| 9 | So the pages of two tests are isolated from each other | S2 | PASS | "Pages are isolated between tests due to the Browser Context" |
| 10 | Pointer to the Claude Code page | none | N/A | Navigation text, not a fact about a tool. |
| 11 | How it works: a locator is a way to find elements on the page at any moment | S3 | PASS | "locators represent a way to find element(s) on the page at any moment." |
| 12 | Recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | "These are the recommended built-in locators." The list that follows includes all five. |
| 13 | getByTestId() finds an element by its data-testid attribute | S3 | PASS | "locate an element based on its data-testid attribute (other attributes can be configured)." |
| 14 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 15 | An action on a locator throws an error if more than one element matches | S3 | PASS | "This will find both buttons and throw a strictness violation error" |
| 16 | Before an action, Playwright runs actionability checks | S4 | PASS | "Playwright performs a range of actionability checks on the elements before making actions" |
| 17 | For click: exactly one element; visible, stable (not animating), not covered, enabled | S4 | PASS | "locator resolves to exactly one element"; "element is Visible"; "Stable, as in not animating or completed animation"; "Receives Events, as in not obscured by other elements"; "element is Enabled" |
| 18 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 19 | An auto-retrying assertion such as await expect(locator).toBeVisible() retries until it passes or the timeout is reached | S5 | PASS | "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list has "await expect(locator).toBeVisible() Element is visible". |
| 20 | The best practices call them web-first assertions | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 21 | The default assertion timeout is 5 seconds | S5 | PASS | "By default, the timeout for assertions is set to 5 seconds." |
| 22 | Try it: Node.js latest 22.x, 24.x or 26.x | S1 | PASS | "Node.js: latest 22.x, 24.x or 26.x." |
| 23 | `npm init playwright@latest` creates a new project or adds Playwright to an existing one | S1 | PASS | "The command below either initializes a new project or adds Playwright to an existing one." |
| 24 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 25 | It creates playwright.config.ts and tests/example.spec.ts | S1 | PASS | "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" |
| 26 | The config holds browsers, timeouts, retries, projects, reporters | S1 | PASS | "target browsers, timeouts, retries, projects, reporters and more." |
| 27 | `npx playwright test` runs headless, in parallel, on Chromium, Firefox, WebKit | S1 | PASS | "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 28 | `--headed` shows the browser; `--ui` opens UI Mode | S1 | PASS | "See the browser window: add --headed." and "Open testing UI: --ui." |
| 29 | `npx playwright show-report` opens the HTML report | S1 | PASS | "open manually with the command below." The command is "npx playwright show-report". The section is titled "HTML Test Reports". |
| 30 | `npx playwright codegen demo.playwright.dev/todomvc` opens a browser and the Playwright Inspector | S7 | PASS | "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 31 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | "perform actions in the browser. Playwright generates code for your interactions automatically." |
| 32 | The example test uses built-in locators | S3 | PASS | "Playwright comes with multiple built-in locators." The example uses getByPlaceholder, getByTestId and getByText, which are in the S3 list. |
| 33 | The example test uses auto-retrying assertions | S5 | PASS | "Prefer auto-retrying assertions whenever possible." The example's toHaveText and toBeVisible are retrying assertions. |
| 34 | `npx playwright test --debug` opens a browser and the Playwright Inspector | S11 | PASS | "This command opens a browser window as well as the Playwright Inspector." |
| 35 | Its step over button steps through the test | S11 | PASS | "You can use the step over button at the top of the inspector to step through your test." |
| 36 | UI Mode lets you explore, run and debug tests, with time travel and a watch mode | S12 | PASS | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 37 | How a tester uses it: a test should check the app works for end users and not rely on implementation details | S9 | PASS | "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 38 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | "Prefer user-facing attributes to XPath or CSS selectors" |
| 39 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 40 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | "creating a higher-level API which suits your application ... capturing element selectors in one place" |
| 41 | Playwright's own example builds it as a helper class | S6 | PASS | "We will create a PlaywrightDevPage helper class" |
| 42 | The test then reads like the steps of a user | none | N/A | Describes the page's own example code. |
| 43 | test.describe declares a group of tests; beforeEach and afterEach run before and after each test | S2 | PASS | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 44 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 45 | Retries are 2 on CI and 0 locally | S8 | PASS | "retries are set to 2 when running on CI and 0 locally." |
| 46 | You open a trace from the trace icon in the HTML report | S8 | PASS | "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 47 | Locally, `--trace on` forces tracing | S8 | PASS | "you can force tracing to be on with --trace on." |
| 48 | Do not test links to external sites or third-party servers you do not control | S9 | PASS | "Don't try to test links to external sites or third party servers that you do not control." |
| 49 | Common mistakes: `expect(await ...isVisible()).toBe(true)` does not wait; it checks once and returns at once | S9 | PASS | "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 50 | `await expect(...).toBeVisible()` waits until the condition is met | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 51 | Retrying assertions are async, so you must await them | S5 | PASS | "retrying assertions are async, so you must await them." |
| 52 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | "You don't need to add manual waits" |
| 53 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 54 | Use the user-facing locators instead | S3 | PASS | "we recommend prioritizing user-facing attributes" |
| 55 | A locator matching many elements makes the action throw, because locators are strict | S3 | PASS | "This will find both buttons and throw a strictness violation error" |
| 56 | Narrow the locator with locator.filter(), or take one match with locator.first() | S3 | PASS | "Locators can be filtered by text with the locator.filter() method." and "you can use locator.first() to only match one of them." |
| 57 | Each test should be completely isolated and run on its own | S9 | PASS | "Each test should be completely isolated from another test and should run independently" |
| 58 | What a tester can check (callout) | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | none | PASS | What it is: "an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools" |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | none | PASS | How it works: "A locator is a way to find elements on the page at any moment" and the `page.getByRole()` list |
| K3 | Strict locator: an action throws an error if more than one element matches | none | PASS | How it works: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, enabled | none | PASS | How it works: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an `await expect(...)` check that retries until it passes or times out (5 seconds by default) | none | PASS | How it works: "retries until it passes or its timeout is reached. The best practices call them web-first assertions. The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | none | PASS | What it is: "a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | none | PASS | How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place. Playwright's own example builds it as a helper class" |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | none | PASS | Try it: "`npx playwright codegen ...` opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" |
| K9 | Trace: a recording of a test run that you open from the HTML report | none | PASS | How a tester uses it: "records a trace on the first retry of a failed test" and "You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a mode to explore, run and debug tests, with time travel and a watch mode | none | PASS | Try it: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode" |

Open FAILs: 0

FAILs in round 5: 0.

## Round 6 (2026-11-16)

### Fact check: sdet / playwright-ui (round 6)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits, walks through a first test, and shows how a tester keeps a suite readable | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | What it is: it runs on Chromium, WebKit, and Firefox, on Windows, Linux, and macOS, locally or in CI, headless or headed | S1 | PASS | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | What it is: a test performs actions and checks the state against expectations | S2 | PASS | "they perform actions and assert the state against expectations." |
| 6 | What it is: Playwright waits for the actionability checks to pass before each action, so you do not add manual waits | S2 | PASS | "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | What it is: each test runs in its own browser context, a clean, incognito-like profile | S10 | PASS | "Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles." "Playwright creates a context for each test" |
| 8 | What it is: it has its own local storage, session storage, and cookies | S10 | PASS | "each test has its own local storage, session storage, cookies etc." |
| 9 | What it is: so the pages of two tests are isolated from each other | S2 | PASS | "Pages are isolated between tests due to the Browser Context" |
| 10 | What it is: "This page covers the test runner itself. For Playwright with Claude Code, see..." | none | N/A | Describes the page itself. |
| 11 | How it works: "Four ideas carry most tests." | none | N/A | Describes the page itself. |
| 12 | A locator is a way to find elements on the page at any moment | S3 | PASS | "locators represent a way to find element(s) on the page at any moment." |
| 13 | The recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | "These are the recommended built-in locators." The list that follows has all five. |
| 14 | getByTestId() finds an element by its data-testid attribute | S3 | PASS | "page.getByTestId() to locate an element based on its data-testid attribute" |
| 15 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 16 | An action on a locator throws an error if more than one element matches | S3 | PASS | "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 17 | Before an action, Playwright runs actionability checks | S4 | PASS | "Playwright performs a range of actionability checks on the elements before making actions" |
| 18 | For click(): one element; visible, stable (not animating), not covered, enabled | S4 | PASS | "locator resolves to exactly one element", "element is Visible", "element is Stable, as in not animating", "not obscured by other elements", "element is Enabled". Note: the source also lists "Not Inert", which the page leaves out. |
| 19 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 20 | An auto-retrying assertion such as await expect(locator).toBeVisible() retries until it passes or its timeout is reached | S5 | PASS | "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list includes toBeVisible. |
| 21 | The best practices call them web-first assertions | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 22 | The default assertion timeout is 5 seconds | S5 | PASS | "By default, the timeout for assertions is set to 5 seconds." |
| 23 | Try it: you need Node.js, the latest 22.x, 24.x, or 26.x | S1 | PASS | "Node.js: latest 22.x, 24.x or 26.x." |
| 24 | npm init playwright@latest creates a new project or adds Playwright to an existing one | S1 | PASS | "The command below either initializes a new project or adds Playwright to an existing one." |
| 25 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 26 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | "creates the scaffold below" followed by the listing "playwright.config.ts" and "tests/ example.spec.ts # Minimal example test" |
| 27 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | "target browsers, timeouts, retries, projects, reporters and more." |
| 28 | npx playwright test runs headless, in parallel, on Chromium, Firefox, and WebKit | S1 | PASS | "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 29 | --headed shows the browser; --ui opens UI Mode | S1 | PASS | "See the browser window: add --headed." "Open testing UI: --ui." |
| 30 | npx playwright show-report opens the HTML report | S1 | PASS | "open manually with the command below." The command shown is "npx playwright show-report". The section is titled "HTML Test Reports". |
| 31 | npx playwright codegen demo.playwright.dev/todomvc opens a browser and the Playwright Inspector | S7 | PASS | "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 32 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | "perform actions in the browser. Playwright generates code for your interactions automatically." |
| 33 | The example test uses built-in locators | S3 | PASS | "page.getByPlaceholder() ... page.getByTestId() ..." and "page.getByText()" are listed as "the recommended built-in locators". |
| 34 | The example test uses auto-retrying assertions | S5 | PASS | "The following assertions will retry until the assertion passes" (the list has toHaveText and toBeVisible). |
| 35 | npx playwright test --debug opens a browser and the Playwright Inspector | S11 | PASS | "This command opens a browser window as well as the Playwright Inspector." |
| 36 | Its step over button steps through the test | S11 | PASS | "You can use the step over button at the top of the inspector to step through your test." |
| 37 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 38 | How a tester uses it: a test should check that the app works for its end users and not rely on implementation details | S9 | PASS | "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 39 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | "Prefer user-facing attributes to XPath or CSS selectors" |
| 40 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 41 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | "Page objects simplify authoring by creating a higher-level API ... simplify maintenance by capturing element selectors in one place" |
| 42 | Playwright's own example builds it as a helper class | S6 | PASS | "We will create a PlaywrightDevPage helper class to encapsulate common operations" |
| 43 | "The test then reads like the steps of a user:" | none | N/A | Describes the page's own example code. |
| 44 | test.describe declares a group of tests; test.beforeEach and test.afterEach run before and after each test | S2 | PASS | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 45 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 46 | Retries are 2 on CI and 0 locally | S8 | PASS | "retries are set to 2 when running on CI and 0 locally." |
| 47 | You open a trace from the trace icon in the HTML report | S8 | PASS | "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 48 | Locally, --trace on forces tracing | S8 | PASS | "you can force tracing to be on with --trace on." |
| 49 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | "Don't try to test links to external sites or third party servers that you do not control." |
| 50 | Common mistakes: expect(await ...isVisible()).toBe(true) does not wait; it checks once and returns at once | S9 | PASS | "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 51 | await expect(...).toBeVisible() waits until the condition is met | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 52 | Retrying assertions are async, so you must await them | S5 | PASS | "retrying assertions are async, so you must await them." |
| 53 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | "You don't need to add manual waits or deal with race conditions." |
| 54 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 55 | Use the user-facing locators instead | S3 | PASS | "we recommend prioritizing user-facing attributes and explicit contracts" |
| 56 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | "Locators are strict. ... will throw an exception if more than one element matches." |
| 57 | Narrow the locator with locator.filter(), or take one match with locator.first() | S3 | FAIL | The source supports filter(): "you can use the locator.filter() method to select the right one." For first(), it says the opposite of a fix: "You can explicitly opt-out from strictness check ... through locator.first() ... These methods are not recommended because when your page changes, Playwright may click on an element you did not intend." Fix: keep filter() as the fix. Say that first() opts out of strictness and is not recommended, or drop it. |
| 58 | Each test should be completely isolated and run on its own | S9 | PASS | "Each test should be completely isolated from another test and should run independently" |
| 59 | What a tester can check: the callout is the tutorial's own advice | none | N/A | The callout says it is advice, not a fact from a source. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | Technical panel | PASS | "Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation..." |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | Technical panel | PASS | "A locator is a way to find elements on the page at any moment" |
| K3 | Strict locator: an action throws an error if more than one element matches | Technical panel | PASS | "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, and enabled | Technical panel | PASS | "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: await expect(...) retries until it passes or times out (5 seconds by default) | Technical panel | PASS | "retries until it passes or its timeout is reached ... The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | Technical panel | PASS | "a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | Technical panel | PASS | "A page object gives one page a higher-level API and keeps its selectors in one place ... builds it as a helper class" |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | Technical panel | PASS | "opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" (the step is titled "Record your steps") |
| K9 | Trace: a recording of a test run that you open from the HTML report | Technical panel | FAIL | The panel says only that a trace is recorded and opened: "records a trace on the first retry" and "You open a trace from the trace icon in the HTML report". No Technical panel says what a trace is (a recording of a test run). Fix: add a cited Technical sentence, or reword the row to what the panel says. |

Open FAILs: 2

FAILs in round 6: 2.

## Round 7 (2026-11-16)

### Fact check: sdet / playwright-ui (round 7)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds and waits for an element, walks through a first test, and shows how to keep a suite readable | none | N/A | Describes the page itself. |
| 3 | What it is: Playwright Test is an end-to-end test framework for web apps; it bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs tests on Chromium, WebKit, and Firefox, on Windows, Linux, and macOS; locally or in CI, headless or headed | S1 | PASS | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test performs actions and checks the state against expectations | S2 | PASS | "they perform actions and assert the state against expectations." |
| 6 | Playwright waits for the actionability checks to pass before each action, so you do not add manual waits | S2 | PASS | "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | "Tests written with Playwright execute in isolated clean-slate environments called browser contexts." and "BrowserContexts which are equivalent to incognito-like profiles" |
| 8 | It has its own local storage, session storage, and cookies | S10 | PASS | "each test has its own local storage, session storage, cookies etc." |
| 9 | The pages of two tests are isolated from each other | S2 | PASS | "Pages are isolated between tests due to the Browser Context" |
| 10 | "This page covers the test runner itself. For Playwright with Claude Code, see…" | none | N/A | Describes the page and gives a link. |
| 11 | How it works: "Four ideas carry most tests." | none | N/A | Describes the page itself. |
| 12 | A locator is a way to find elements on the page at any moment | S3 | PASS | "locators represent a way to find element(s) on the page at any moment." |
| 13 | The recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | "These are the recommended built-in locators." with "page.getByRole()", "page.getByText()", "page.getByLabel()", "page.getByPlaceholder()", "page.getByTestId()" |
| 14 | getByTestId() finds an element by its data-testid attribute | S3 | FAIL | The source limits this: "By default, page.getByTestId() will locate elements based on the data-testid attribute, but you can configure it". Fix: add "by default". |
| 15 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 16 | An action on a locator throws an error if more than one element matches | S3 | PASS | "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 17 | Before an action, Playwright runs actionability checks | S4 | PASS | "Playwright performs a range of actionability checks on the elements before making actions" |
| 18 | For locator.click(): one element; visible, stable (not animating), not covered, enabled | S4 | PASS | "locator resolves to exactly one element", "element is Visible", "element is Stable, as in not animating or completed animation", "element Receives Events, as in not obscured by other elements", "element is Enabled" |
| 19 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 20 | An auto-retrying assertion such as await expect(locator).toBeVisible() retries until it passes or its timeout is reached | S5 | PASS | "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list has "await expect(locator).toBeVisible()  Element is visible". |
| 21 | The best practices call them web-first assertions | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 22 | The default assertion timeout is 5 seconds | S5 | PASS | "By default, the timeout for assertions is set to 5 seconds." |
| 23 | The text diagram (locator, click waits, expect retries or fails after 5 s) | none | N/A | Example diagram. It repeats the claims above. |
| 24 | Try it: you need Node.js, the latest 22.x, 24.x, or 26.x | S1 | PASS | "Node.js: latest 22.x, 24.x or 26.x." |
| 25 | npm init playwright@latest creates a new project or adds Playwright to an existing one | S1 | PASS | "The command below either initializes a new project or adds Playwright to an existing one." |
| 26 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 27 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | "playwright.config.ts   # Test configuration" and "tests/ example.spec.ts   # Minimal example test" |
| 28 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | "centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| 29 | npx playwright test runs the tests headless, in parallel, on Chromium, Firefox, and WebKit | S1 | FAIL | The source says this is a default: "By default tests run headless in parallel across Chromium, Firefox and WebKit (configurable in playwright.config)". Fix: add "by default". |
| 30 | Add --headed to see the browser, or --ui to open UI Mode | S1 | PASS | "See the browser window: add --headed." and "Open testing UI: --ui." |
| 31 | npx playwright show-report opens the HTML report | S1 | PASS | "HTML Test Reports ... After a test run, the HTML Reporter provides a dashboard", with the command "npx playwright show-report". |
| 32 | npx playwright codegen demo.playwright.dev/todomvc opens a browser and the Playwright Inspector | S7 | PASS | "Codegen opens a browser window for interaction and the Playwright Inspector" |
| 33 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | "perform actions in the browser. Playwright generates code for your interactions automatically." |
| 34 | Write a test: it uses built-in locators and auto-retrying assertions | S3, S5 | N/A | Reports what the page's own example code uses. |
| 35 | npx playwright test --debug opens a browser and the Playwright Inspector | S11 | PASS | "This command opens a browser window as well as the Playwright Inspector." |
| 36 | Its step over button steps through the test | S11 | PASS | "You can use the step over button at the top of the inspector to step through your test." |
| 37 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 38 | How a tester uses it: a test should check that the app works for end users and not rely on implementation details | S9 | PASS | "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 39 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | "Prefer user-facing attributes to XPath or CSS selectors" |
| 40 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 41 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | "creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" |
| 42 | Playwright's own example builds it as a helper class | S6 | PASS | "We will create a PlaywrightDevPage helper class to encapsulate common operations" |
| 43 | "The test then reads like the steps of a user" (with code) | none | N/A | Describes the page's own example code. |
| 44 | test.describe declares a group of tests; test.beforeEach and test.afterEach run before and after each test | S2 | PASS | "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 45 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | "By default the playwright.config file contains the configuration needed to create a trace.zip file for each test. Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 46 | Retries are 2 on CI and 0 locally | S8 | PASS | "retries are set to 2 when running on CI and 0 locally." |
| 47 | You open a trace from the trace icon in the HTML report | S8 | PASS | "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 48 | Locally, --trace on forces tracing | S8 | PASS | "you can force tracing to be on with --trace on." |
| 49 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | "Don't try to test links to external sites or third party servers that you do not control." |
| 50 | Common mistakes: expect(await …isVisible()).toBe(true) does not wait; it checks once and returns at once | S9 | PASS | "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 51 | await expect(...).toBeVisible() waits until the condition is met | S9 | PASS | "By using web first assertions Playwright will wait until the expected condition is met." |
| 52 | Retrying assertions are async, so you must await them | S5 | PASS | "Note that retrying assertions are async, so you must await them." |
| 53 | Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | "You don't need to add manual waits" |
| 54 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 55 | Use the user-facing locators instead | S3 | PASS | "CSS and XPath are not recommended ... try to come up with a locator that is close to how the user perceives the page such as role locators" |
| 56 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | "Locators are strict. ... will throw an exception if more than one element matches." |
| 57 | Narrow the locator, for example with locator.filter() | S3 | PASS | "you can use the locator.filter() method to select the right one. You can also chain multiple filters to narrow down the selection." |
| 58 | locator.first() skips the strictness check, and the docs do not recommend it | S3 | PASS | "You can explicitly opt-out from strictness check ... through locator.first() ... These methods are not recommended" |
| 59 | Each test should be completely isolated and run on its own | S9 | PASS | "Each test should be completely isolated from another test and should run independently" |
| 60 | What a tester can check: callout, "the tutorial's own advice, not a fact from a source" | none | N/A | Advice callout. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | Key words | PASS | Technical panel, What it is: "an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools" |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | Key words | PASS | Technical panel, How it works: "A locator is a way to find elements on the page at any moment" and the `page.getByRole()` list. |
| K3 | Strict locator: an action throws an error if more than one element matches | Key words | PASS | Technical panel, How it works: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, enabled | Key words | PASS | Technical panel, How it works: "the locator must resolve to exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an await expect(...) check that retries until it passes or times out (5 seconds by default) | Key words | PASS | Technical panel, How it works: "retries until it passes or its timeout is reached. ... The default assertion timeout is 5 seconds." |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | Key words | PASS | Technical panel, What it is: "a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | Key words | PASS | Technical panel, How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place ... a helper class" |
| K8 | Codegen: the test generator that records your actions in a browser as test code | Key words | PASS | Technical panel, Try it: "`npx playwright codegen` opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions" |
| K9 | Trace: recorded on the first retry of a failed test by the default config; open it from the trace icon in the HTML report | Key words | PASS | Technical panel, How a tester uses it: "The default config records a trace on the first retry of a failed test ... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a mode to explore, run, and debug tests, with time travel and a watch mode | Key words | PASS | Technical panel, Try it: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode" |

Open FAILs: 2

FAILs in round 7: 2.

## Round 8 (2026-11-16)

### Fact check: sdet / playwright-ui (round 8)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: UI tests in Playwright Test: locators, auto-waiting, web-first assertions, page objects, traces, and a first test on a demo app | none | N/A | Describes the page itself. |
| 2 | Intro: the page explains how a test finds an element and waits, walks through a first test, and shows how to keep a suite readable | none | N/A | Describes the page itself. |
| 3 | Playwright Test is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools | S1 | PASS | S1: "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 4 | It runs tests on Chromium, WebKit, and Firefox, on Windows, Linux, and macOS. It runs locally or in CI, headless or headed | S1 | PASS | S1: "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed" |
| 5 | A test does two things: it performs actions, and it checks the state against expectations | S2 | PASS | S2: "they perform actions and assert the state against expectations." |
| 6 | Playwright waits for the actionability checks to pass before each action, so you do not add manual waits | S2 | PASS | S2: "Playwright automatically waits for actionability checks to pass before performing each action. You don't need to add manual waits" |
| 7 | Each test runs in its own browser context: a clean, incognito-like profile | S10 | PASS | S10: "Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles... Playwright creates a context for each test" and "isolated clean-slate environments called browser contexts" |
| 8 | It has its own local storage, session storage, and cookies | S10 | PASS | S10: "each test has its own local storage, session storage, cookies etc." |
| 9 | So the pages of two tests are isolated from each other | S2 | PASS | S2: "Pages are isolated between tests due to the Browser Context" |
| 10 | This page covers the test runner itself. For Playwright with Claude Code, see ... | none | N/A | Describes the page and gives a link. |
| 11 | "Four ideas carry most tests." | none | N/A | Describes the page itself. |
| 12 | A locator is a way to find elements on the page at any moment | S3 | PASS | S3: "locators represent a way to find element(s) on the page at any moment." |
| 13 | The recommended built-in locators include getByRole, getByText, getByLabel, getByPlaceholder, getByTestId | S3 | PASS | S3: "These are the recommended built-in locators." followed by the list of page.getByRole(), getByText(), getByLabel(), getByPlaceholder(), getByTestId() |
| 14 | By default, getByTestId() finds an element by its data-testid attribute | S3 | PASS | S3: "By default, page.getByTestId() will locate elements based on the data-testid attribute" |
| 15 | Playwright recommends user-facing attributes, such as the role, first | S3 | PASS | S3: "we recommend prioritizing user-facing attributes and explicit contracts such as page.getByRole()." |
| 16 | An action on a locator throws an error if more than one element matches | S3 | PASS | S3: "all operations on locators that imply some target DOM element will throw an exception if more than one element matches." |
| 17 | Before an action, Playwright runs actionability checks | S4 | PASS | S4: "Playwright performs a range of actionability checks on the elements before making actions" |
| 18 | For locator.click(): exactly one element; visible, stable (not animating), not covered, enabled | S4 | PASS | S4: "locator resolves to exactly one element", "element is Visible", "element is Stable, as in not animating or completed animation", "Receives Events, as in not obscured by other elements", "element is Enabled". The table row is "locator.click() Yes Yes Yes Yes". |
| 19 | If the checks do not pass in time, the action fails with a TimeoutError | S4 | PASS | S4: "If the required checks do not pass within the given timeout, action fails with the TimeoutError." |
| 20 | An auto-retrying assertion such as await expect(locator).toBeVisible() retries until it passes or its timeout is reached | S5 | PASS | S5: "The following assertions will retry until the assertion passes, or the assertion timeout is reached." The list includes "await expect(locator).toBeVisible()". |
| 21 | The best practices call them web-first assertions | S9 | PASS | S9: "Use web first assertions... By using web first assertions Playwright will wait until the expected condition is met." |
| 22 | The default assertion timeout is 5 seconds | S5 | PASS | S5: "By default, the timeout for assertions is set to 5 seconds." |
| 23 | You need Node.js: the latest 22.x, 24.x, or 26.x | S1 | PASS | S1: "Node.js: latest 22.x, 24.x or 26.x." |
| 24 | `npm init playwright@latest` creates a new project, or adds Playwright to an existing one | S1 | PASS | S1: "The command below either initializes a new project or adds Playwright to an existing one." |
| 25 | It asks for TypeScript or JavaScript; the default is TypeScript | S1 | PASS | S1: "TypeScript or JavaScript (default: TypeScript)" |
| 26 | It creates playwright.config.ts and a first test, tests/example.spec.ts | S1 | PASS | S1: "playwright.config.ts # Test configuration ... tests/ example.spec.ts # Minimal example test" |
| 27 | The config holds the browsers, timeouts, retries, projects, and reporters | S1 | PASS | S1: "centralizes configuration: target browsers, timeouts, retries, projects, reporters and more." |
| 28 | By default, `npx playwright test` runs the tests headless, in parallel, on Chromium, Firefox, and WebKit | S1 | PASS | S1: "By default tests run headless in parallel across Chromium, Firefox and WebKit" |
| 29 | Add --headed to see the browser, or --ui to open UI Mode | S1 | PASS | S1: "See the browser window: add --headed." and "Open testing UI: --ui." |
| 30 | `npx playwright show-report` opens the HTML report | S1 | PASS | S1 line 45 gives "npx playwright show-report". The HTML report is named in the same section of S1 (lines 43-44). |
| 31 | `npx playwright codegen demo.playwright.dev/todomvc` opens a browser and the Playwright Inspector | S7 | PASS | S7: "Codegen opens a browser window for interaction and the Playwright Inspector" and "npx playwright codegen demo.playwright.dev/todomvc" |
| 32 | Click and type in the demo app, and Playwright writes the code for your actions | S7 | PASS | S7: "Run codegen and perform actions in the browser. Playwright generates code for your interactions automatically." |
| 33 | Step 4: the example uses built-in locators and auto-retrying assertions | S3, S5 | PASS | S3: "These are the recommended built-in locators" (getByPlaceholder, getByTestId, getByText). S5: "The following assertions will retry until the assertion passes" (toHaveText, toBeVisible). |
| 34 | `npx playwright test --debug` opens a browser and the Playwright Inspector | S11 | PASS | S11: "This command opens a browser window as well as the Playwright Inspector." |
| 35 | Its step over button steps through the test | S11 | PASS | S11: "You can use the step over button at the top of the inspector to step through your test." |
| 36 | UI Mode lets you explore, run, and debug tests, with time travel and a watch mode | S12 | PASS | S12: "UI Mode lets you explore, run, and debug tests with a time travel experience complete with a watch mode." |
| 37 | A test should check that the app works for end users, and not rely on implementation details | S9 | PASS | S9: "Automated tests should verify that the application code works for the end users, and avoid relying on implementation details" |
| 38 | Prefer user-facing attributes to XPath or CSS selectors | S9 | PASS | S9: "Prefer user-facing attributes to XPath or CSS selectors" |
| 39 | The DOM can easily change, and a test that depends on its structure then fails | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." |
| 40 | A page object gives one page a higher-level API and keeps its selectors in one place | S6 | PASS | S6: "Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place". It also says "Each of them can be represented by page object models" (home page, listings page, checkout page). |
| 41 | Playwright's own example builds it as a helper class | S6 | PASS | S6: "We will create a PlaywrightDevPage helper class to encapsulate common operations on the playwright.dev page." |
| 42 | "The test then reads like the steps of a user:" (leads into the code) | none | N/A | Describes the page's own example code. |
| 43 | test.describe declares a group of tests; test.beforeEach and test.afterEach run before and after each test | S2 | PASS | S2: "test.describe to declare a group of tests and test.beforeEach and test.afterEach which are executed before/after each test." |
| 44 | The default config records a trace on the first retry of a failed test (on-first-retry) | S8 | PASS | S8: "Traces are setup to run on-first-retry, meaning they run on the first retry of a failed test." |
| 45 | Retries are 2 on CI and 0 locally | S8 | PASS | S8: "retries are set to 2 when running on CI and 0 locally." |
| 46 | You open a trace from the trace icon in the HTML report | S8 | PASS | S8: "In the HTML report, click on the trace icon next to the test file name to directly open the trace" |
| 47 | Locally, `--trace on` forces tracing | S8 | PASS | S8: "you can force tracing to be on with --trace on." |
| 48 | Do not test links to external sites or third-party servers that you do not control | S9 | PASS | S9: "Don't try to test links to external sites or third party servers that you do not control." |
| 49 | `expect(await page.getByText('welcome').isVisible()).toBe(true)` does not wait: it checks once and returns at once | S9 | PASS | S9: "the test won't wait a single second, it will just check the locator is there and return immediately." |
| 50 | `await expect(page.getByText('welcome')).toBeVisible()` waits until the condition is met | S9 | PASS | S9: "By using web first assertions Playwright will wait until the expected condition is met... assertions such as toBeVisible() will wait and retry if needed." |
| 51 | Retrying assertions are async, so you must await them | S5 | PASS | S5: "Note that retrying assertions are async, so you must await them." |
| 52 | A sleep: Playwright already waits for the actionability checks, so a test needs no manual waits | S2 | PASS | S2: "You don't need to add manual waits or deal with race conditions." |
| 53 | CSS classes or XPath tie the test to the DOM structure, which can easily change | S9 | PASS | S9: "Your DOM can easily change so having your tests depend on your DOM structure can lead to failing tests." The CSS-class example follows. |
| 54 | Use the user-facing locators instead | S3 | PASS | S3: "CSS and XPath are not recommended as the DOM can often change leading to non resilient tests. Instead, try to come up with a locator that is close to how the user perceives the page such as role locators" |
| 55 | A locator that matches many elements: the action throws, because locators are strict | S3 | PASS | S3: "Locators are strict. This means that all operations on locators ... will throw an exception if more than one element matches." |
| 56 | Narrow the locator, for example with locator.filter() | S3 | PASS | S3: "We have a few options in order to filter the locators to get the right one." and "you can use the locator.filter() method to select the right one." |
| 57 | locator.first() skips the strictness check, and the docs do not recommend it | S3 | PASS | S3: "You can explicitly opt-out from strictness check ... through locator.first(), locator.last(), and locator.nth(). These methods are not recommended" |
| 58 | Each test should be completely isolated and run on its own | S9 | PASS | S9: "Each test should be completely isolated from another test and should run independently" |
| 59 | "What a tester can check" callout (tutorial's own advice, no cites) | none | N/A | The callout states that it is advice and not a source fact. |
| K1 | Playwright Test: an end-to-end test framework for web apps, with its own test runner and assertions | Key words | PASS | Technical, What it is: "**Playwright Test** is an end-to-end test framework for web apps. It bundles a test runner, assertions, isolation, parallel runs, and tools" |
| K2 | Locator: a way to find elements on the page at any moment, such as page.getByRole() | Key words | PASS | Technical, How it works: "A locator is a way to find elements on the page at any moment... `page.getByRole()`" |
| K3 | Strict locator: an action on a locator throws an error if more than one element matches | Key words | PASS | Technical, How it works: "An action on a locator throws an error if more than one element matches" |
| K4 | Actionability checks: one element, visible, stable, not covered, and enabled | Key words | PASS | Technical, How it works: "Before an action, Playwright runs actionability checks... exactly one element. The element must be visible, stable (not animating), not covered by other elements, and enabled" |
| K5 | Web-first assertion: an await expect(...) check that retries until it passes or times out (5 seconds by default) | Key words | PASS | Technical, How it works: "retries until it passes or its timeout is reached. The best practices call them web-first assertions. The default assertion timeout is 5 seconds" |
| K6 | Browser context: the clean, incognito-like profile each test gets, with its own storage and cookies | Key words | PASS | Technical, What it is: "Each test runs in its own **browser context**: a clean, incognito-like profile. It has its own local storage, session storage, and cookies" |
| K7 | Page object: a class that gives one page a higher-level API and keeps its selectors in one place | Key words | PASS | Technical, How a tester uses it: "A page object gives one page a higher-level API and keeps its selectors in one place. Playwright's own example builds it as a helper class" |
| K8 | Codegen: the test generator; it records your actions in a browser as test code | Key words | PASS | Technical, Try it: "`npx playwright codegen ...` opens a browser and the Playwright Inspector. Click and type in the demo app, and Playwright writes the code for your actions". The name "test generator" appears only in the S7 title, not in a Technical panel. This is a minor note. |
| K9 | Trace: recorded on the first retry of a failed test by the default config; opened from the trace icon in the HTML report | Key words | PASS | Technical, How a tester uses it: "The default config records a trace on the first retry of a failed test (`on-first-retry`)... You open a trace from the trace icon in the HTML report" |
| K10 | UI Mode: a mode to explore, run, and debug tests, with time travel and a watch mode | Key words | PASS | Technical, Try it: "UI Mode lets you explore, run, and debug tests, with time travel and a watch mode." |

Open FAILs: 0

FAILs in round 8: 0.

Open FAILs: 0
