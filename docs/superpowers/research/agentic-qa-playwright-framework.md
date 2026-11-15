# Playwright Framework & the Agentic QA Workflow — research notes (2026-11-15)

## Sources
S1. ISTQB Glossary: test automation framework — ISTQB — https://glossary.istqb.org/en_US/term/test-automation-framework — accessed 2026-11-15 — cache: istqb-term-test-automation-framework.txt
S2. Page object models — Microsoft (playwright.dev) — https://playwright.dev/docs/pom — accessed 2026-11-15 — cache: pw-pom.txt
S3. Fixtures — Microsoft (playwright.dev) — https://playwright.dev/docs/test-fixtures — accessed 2026-11-15 — cache: pw-fixtures.txt
S4. Best Practices — Microsoft (playwright.dev) — https://playwright.dev/docs/best-practices — accessed 2026-11-15 — cache: pw-best-practices.txt
S5. Configuration — Microsoft (playwright.dev) — https://playwright.dev/docs/test-configuration — accessed 2026-11-15 — cache: pw-configuration.txt
S6. Configuration (use) — Microsoft (playwright.dev) — https://playwright.dev/docs/test-use-options — accessed 2026-11-15 — cache: pw-use-options.txt
S7. Projects — Microsoft (playwright.dev) — https://playwright.dev/docs/test-projects — accessed 2026-11-15 — cache: pw-projects.txt
S8. Authentication — Microsoft (playwright.dev) — https://playwright.dev/docs/auth — accessed 2026-11-15 — cache: pw-auth.txt
S9. Playwright MCP — Microsoft (playwright.dev) — https://playwright.dev/docs/getting-started-mcp — accessed 2026-11-15 — cache: pw-mcp.txt
S10. Playwright MCP README — Microsoft (GitHub) — https://github.com/microsoft/playwright-mcp — accessed 2026-11-15 — cache: pw-mcp-readme.txt
S11. Connect Claude Code to tools via MCP — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/mcp — accessed 2026-11-15 — cache: cc-mcp.txt
S12. ISTQB Glossary: traceability — ISTQB — https://glossary.istqb.org/en_US/term/traceability — accessed 2026-11-15 — cache: istqb-term-traceability.txt
S13. Annotations — Microsoft (playwright.dev) — https://playwright.dev/docs/test-annotations — accessed 2026-11-15 — cache: pw-annotations.txt
S14. ISTQB Glossary: regression testing — ISTQB — https://glossary.istqb.org/en_US/term/regression-testing — accessed 2026-11-15 — cache: istqb-term-regression-testing.txt
S15. Parallelism — Microsoft (playwright.dev) — https://playwright.dev/docs/test-parallel — accessed 2026-11-15 — cache: pw-parallel.txt
S16. Continuous Integration — Microsoft (playwright.dev) — https://playwright.dev/docs/ci — accessed 2026-11-15 — cache: pw-ci.txt
S17. Retries — Microsoft (playwright.dev) — https://playwright.dev/docs/test-retries — accessed 2026-11-15 — cache: pw-retries.txt
S18. Trace viewer — Microsoft (playwright.dev) — https://playwright.dev/docs/trace-viewer — accessed 2026-11-15 — cache: pw-trace-viewer.txt
S19. Reporters — Microsoft (playwright.dev) — https://playwright.dev/docs/test-reporters — accessed 2026-11-15 — cache: pw-reporters.txt
S20. ISTQB Glossary: false-positive result — ISTQB — https://glossary.istqb.org/en_US/term/false-positive-result — accessed 2026-11-15 — cache: istqb-term-false-positive-result.txt
S21. ISTQB Glossary: false-negative result — ISTQB — https://glossary.istqb.org/en_US/term/false-negative-result — accessed 2026-11-15 — cache: istqb-term-false-negative-result.txt
S22. Playwright Test Agents — Microsoft (playwright.dev) — https://playwright.dev/docs/test-agents — accessed 2026-11-15 — cache: pw-test-agents.txt
S23. ISTQB CTFL Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-11-15 — cache: istqb-ctfl.txt
S24. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S25. Atlassian Rovo MCP Server README — Atlassian (GitHub) — https://github.com/atlassian/atlassian-mcp-server — accessed 2026-11-15 — cache: tool-atlassian-mcp.txt
S26. gh issue list — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_list — accessed 2026-11-15 — cache: gh-issue-list.txt
S27. gh issue create — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_create — accessed 2026-11-15 — cache: gh-issue-create.txt
S28. ISTQB Glossary: confirmation testing — ISTQB — https://glossary.istqb.org/en_US/term/confirmation-testing — accessed 2026-11-15 — cache: istqb-term-confirmation-testing.txt

dMoney facts come from the public practice repo at commit 51db34a (cache: dmoney-repo/). They have no cite on the page. No password, key, or env value from the repo is on the page.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | ISTQB definition of a test automation framework. | "A set of test harnesses and test libraries for test automation." | S1 | |
| C2 | A page object represents a part of the web application. | "A page object represents a part of your web application." | S2 | |
| C3 | Page objects give a higher-level API and keep selectors in one place. | "simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place" | S2 | |
| C4 | A fixture is created with `test.extend()`. | "To create your own fixture, use test.extend() to create a new test object that will include it." | S3 | |
| C5 | A fixture can build a page object. | "Below we create two fixtures todoPage and settingsPage that follow the Page Object Model pattern." | S3 | |
| C6 | Fixtures keep setup and teardown together. | "Fixtures encapsulate setup and teardown in the same place so it is easier to write." | S3 | |
| C7 | Fixtures are on demand. | "Fixtures are on-demand - you can define as many fixtures as you'd like, and Playwright Test will setup only the ones needed by your test and nothing else." | S3 | |
| C8 | Prefer user-facing attributes, e.g. `getByRole`; prefer them to XPath or CSS. | "we recommend prioritizing user-facing attributes and explicit contracts" ... "Prefer user-facing attributes to XPath or CSS selectors" | S4 | |
| C9 | Each test should be isolated with its own storage, data, and cookies. | "Each test should be completely isolated from another test and should run independently with its own local storage, session storage, data, cookies etc." | S4 | |
| C10 | Test runner options are top-level, not in `use`. | "Note that test runner options are top-level, do not put them into the use section." | S5 | |
| C11 | `retries`, `reporter`, `forbidOnly` meanings. | "The maximum number of retry attempts per test." ... "Reporter to use." ... "Whether to exit with an error if any tests are marked as test.only. Useful on CI." | S5 | |
| C12 | The config example reads `process.env.CI` for retries. | "retries: process.env.CI ? 2 : 0," | S5 | |
| C13 | `baseURL` lets a test navigate by path. | "Base URL used for all pages in the context. Allows navigating by using just the path, for example page.goto('/settings')." | S6 | |
| C14 | Screenshot, video, trace are off by default. | "By default these are turned off but you can enable them by setting the screenshot, video and trace options" | S6 | |
| C15 | Trace modes `on-first-retry` and `retain-on-failure`. | "'retain-on-failure' \| every run \| that run failed" | S6 | Table rows in the cache; `on-first-retry` records "first retry only". |
| C16 | `on-first-retry` records on the first retry only. | "Record trace only when retrying a test for the first time." | S6 | |
| C17 | Screenshot option `only-on-failure`. | "Options include 'off', 'on' and 'only-on-failure'" | S6 | |
| C18 | Video has the same modes as trace. | "The video option supports the same set of modes as trace" | S6 | |
| C19 | Artifacts go to the test output directory, typically `test-results`. | "Trace files, screenshots and videos will appear in the test output directory, typically test-results." | S6 | |
| C20 | A project can target an environment with its own baseURL and retries. | "we can run our tests against a staging environment with 2 retries as well as against a production environment with 0 retries" | S7 | |
| C21 | Run one project with `--project`. | "Use the --project command line option to run a single project." | S7 | |
| C22 | If a dependency fails, dependent tests do not run. | "If the tests from a dependency fails then the tests that rely on this project will not be run." | S7 | |
| C23 | Tests can load existing authenticated state. | "Tests can load existing authenticated state. This eliminates the need to authenticate in every test" | S8 | |
| C24 | Recommended `playwright/.auth` directory in `.gitignore`. | "We recommend to create playwright/.auth directory and add it to your .gitignore." | S8 | |
| C25 | The state file may hold sensitive cookies and headers; do not commit. | "The browser state file may contain sensitive cookies and headers that could be used to impersonate you or your test account." | S8 | |
| C26 | A setup project with `testMatch` signs in and saves state; testing projects depend on it and it always runs first. | "{ name: 'setup', testMatch: /.*\.setup\.ts/ }" ... "This project will always run and authenticate before all the tests." | S8 | |
| C27 | Setup saves state with `storageState({ path })`. | "await page.context().storageState({ path: authFile });" | S8 | |
| C28 | Multiple roles: authenticate multiple times in setup, then `test.use({ storageState })` per file or group. | "We will authenticate multiple times in the setup project." ... "specify storageState for each test file or test group, instead of setting it in the config" | S8 | |
| C29 | Playwright MCP uses structured accessibility snapshots; no vision model. | "enabling LLMs to interact with web pages using structured accessibility snapshots" ... "no vision models required" | S9 | |
| C30 | A snapshot shows page elements, roles, and text. | "it returns a structured snapshot showing the page elements, their roles, and text content" | S9 | |
| C31 | README command to add Playwright MCP to Claude Code. | "claude mcp add playwright npx @playwright/mcp@latest" | S10 | |
| C32 | `--storage-state` loads a state file for isolated sessions. | "path to the storage state file for isolated sessions" | S10 | |
| C33 | Playwright MCP is not a security boundary; origin lists are not either and do not affect redirects. | "Playwright MCP is **not** a security boundary." ... "does not* serve as a security boundary and *does not* affect redirects" | S10 | |
| C34 | `claude mcp add` writes to local scope unless `--scope project`; project scope uses `.mcp.json`. | "Each command writes to [local scope](#local-scope) unless you add `--scope project` or `--scope user`." ... "storing configurations in a `.mcp.json` file at your project's root directory" | S11 | |
| C35 | Approval before using project-scoped servers. | "Claude Code prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files" | S11 | |
| C36 | Servers that fetch external content can expose you to prompt injection. | "Servers that fetch external content can expose you to [prompt injection risk]" | S11 | |
| C37 | ISTQB definition of traceability. | "The ability to establish explicit relationships between related work products" | S12 | |
| C38 | Tags and annotations are shown in the report. | "Playwright supports tags and annotations that are displayed in the test report." | S13 | |
| C39 | Tags start with `@`; given in the details object or the title. | "To tag a test, either provide an additional details object when declaring a test, or add @-token to the test title. Note that tags must start with @ symbol." | S13 | |
| C40 | Annotations have type and description; HTML reporter hides types starting with `_`. | "Annotations have a type and a description" ... "Playwright's built-in HTML reporter shows all annotations, except those where type starts with _ symbol." | S13 | |
| C41 | `--grep` and `--grep-invert` with tags. | "npx playwright test --grep @fast" ... "npx playwright test --grep-invert @fast" | S13 | Page uses `@smoke` and `@slow` as example tag names. |
| C42 | ISTQB definition of regression testing. | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." | S14 | |
| C43 | `--workers 4` limits workers; `fullyParallel`. | "npx playwright test --workers 4" ... "testConfig.fullyParallel" | S15 | |
| C44 | By default files run in parallel; tests in one file in order. | "By default, test files are run in parallel. Tests in a single file are run in order, in the same worker process." | S15 | |
| C45 | CI guide recommends one worker on CI; sharding for wider runs. | "in CI environments to prioritize stability and reproducibility" ... "consider sharding" | S16 | |
| C46 | GitHub Actions example runs tests and uploads `playwright-report/`. | "run: npx playwright test" ... "path: playwright-report/" | S16 | |
| C47 | Failing tests are not retried by default. | "By default failing tests are not retried." | S17 | |
| C48 | passed, flaky, failed categories. | "tests that failed on the first run, but passed when retried" ... "tests that failed on the first run and failed all retries" | S17 | |
| C49 | On failure Playwright discards the worker process and browser and starts a new one. | "Playwright Test will discard the entire worker process along with the browser and will start a new one." | S17 | |
| C50 | Open a trace with `show-trace`. | "npx playwright show-trace path/to/trace.zip" | S18 | |
| C51 | Actions tab: locator, time, before and after. | "In the Actions tab you can see what locator was used for every action and how long each one took to run." ... "Use the Before and After tabs" | S18 | |
| C52 | Errors tab with a red line on the timeline. | "The timeline will also show a red line highlighting where the error occurred." | S18 | |
| C53 | Console and Network tabs; request status, headers, body. | "See console logs from the browser as well as from your test." ... "status code, method, request, content type, duration and size" ... "response headers, request body and response body" | S18 | |
| C54 | HTML report folder and `show-report`. | "By default, the report is written into the playwright-report folder" ... "npx playwright show-report" | S19 | |
| C55 | JUnit and JSON reporters with `outputFile`. | "reporter: [['junit', { outputFile: 'results.xml' }]]," ... "reporter: [['json', { outputFile: 'results.json' }]]," | S19 | |
| C56 | Dot reporter: one character per successful test; default on CI. | "it only produces a single character per successful test run. It is the default on CI" | S19 | |
| C57 | Multiple reporters at once. | "You can use multiple reporters at the same time." | S19 | |
| C58 | ISTQB false-positive result. | "A test result in which a defect is reported although no such defect actually exists in the test object." | S20 | |
| C59 | ISTQB false-negative result. | "A test result which fails to identify a defect that is actually present in a test object." | S21 | |
| C60 | Healer steps. | "Replays the failing steps" ... "Inspects the current UI to locate equivalent elements or flows" ... "Re-runs the test until it passes or until guardrails stop the loop" | S22 | |
| C61 | Healer patch kinds. | "Suggests a patch (e.g., locator update, wait adjustment, data fix)" | S22 | |
| C62 | Healer output: passing or skipped test. | "A passing test, or a skipped test if the healer believes that functionality is broken." | S22 | |
| C63 | Defect report contents. | "A defect report logged during dynamic testing typically includes" ... "relevant test logs, database dumps, screenshots, or recordings" ... "Expected results and actual results" ... "References (e.g., to the test case)" | S23 | |
| C64 | Defect report: identifier, title, test object and environment, context. | "Unique identifier" ... "Identification of the test object and test environment" ... "test case being run" | S23 | |
| C65 | Allow, ask, deny rules; ask prompts for confirmation. | "**Ask** rules prompt for confirmation when Claude tries to use the specified tool." | S24 | |
| C66 | Order deny, ask, allow; ask beats a more specific allow. | "Rules are evaluated in order: deny, then ask, then allow." ... "a matching ask rule prompts even when a more specific allow rule also matches the same call" | S24 | |
| C67 | `mcp__<server>__*` matches every tool of a server. | "To match every tool from an MCP server, write `mcp__<server>__*`." | S24 | |
| C68 | Permission JSON shape with `allow` and Bash patterns. | "Bash(npm run *)" | S24 | The `ask` array follows the same shape (C65). |
| C69 | Atlassian README command for Claude Code. | "claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp" | S25 | |
| C70 | Atlassian access limited to data the user can view. | "Access is granted only to data that the user already has permission to view in Atlassian Cloud." | S25 | |
| C71 | `gh issue list --search` and `--state all`. | "Search issues with query" ... "Filter by state: {open\|closed\|all}" | S26 | |
| C72 | `gh issue create` `--body-file`, `--label`, `--title`. | "Read body text from file" ... "Add labels by name" ... "Supply a title." | S27 | |
| C73 | ISTQB definition of confirmation testing. | "performed after fixing a defect to confirm that a failure caused by that defect does not reoccur" | S28 | |
| C74 | dMoney: setup projects and role projects with dependencies and saved sessions. | "{ name: 'admin-setup', testMatch: /admin\.setup\.ts/ }" ... "dependencies: ['agent-setup']," | dmoney-repo/dmoney-web-react/playwright.config.ts | No cite on the page. |
| C75 | dMoney: `baseURL` from `BASE_URL` with localhost fallback. | "baseURL: process.env.BASE_URL \|\| 'http://localhost:3000'," | dmoney-repo/dmoney-web-react/playwright.config.ts | |
| C76 | dMoney: `.gitignore` lists the auth files. | "/e2e/*_auth.json" | dmoney-repo/dmoney-web-react/.gitignore | |
| C77 | dMoney: a customer Send Money page at `/customer/send-money`. | "{ name: 'Send Money',      path: '/customer/send-money'," | dmoney-repo/dmoney-web-react/src/components/LeftMenu.tsx | Used in the Practice section. |

Left out (no source in the cache): the exact Jira create tool name of the Atlassian server (its tool list is on a page not cached), so the page uses the server-wide `mcp__atlassian__*` rule. The page also does not state a Playwright version.

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F15 | Fixed: S5 now supports only "runner options are top-level and must not go in `use`"; the `use` sentence cites S6 ("These options are passed to the use: {} object"). Same in all three panels. |
| facts | F41 | Fixed: S10 links the storage state to the Playwright authentication guide; reusing the role files is labelled as the tutorial's practice. |
| facts | F44 | Fixed: labelled as the tutorial's practice. |
| facts | F67 | Fixed: S17, "\"flaky\" - tests that failed on the first run, but passed when retried". |
| facts | F82 | Fixed: labelled as the tutorial's practice. |
| facts | F84 | Fixed: labelled as the tutorial's examples. Same in all three panels. |
| facts | F86 | Fixed: labelled as the tutorial's examples. Same in all three panels. |
| facts | F126 | Fixed: "A saved file of the authenticated browser state, with cookies and headers". |
| voices | V1 | Fixed: deleted the definition of a selector. |
| voices | V2 | Fixed: "you fix one class". |
| voices | V3 | Fixed: "Playwright recommends user-facing attributes, such as `page.getByRole()`." |
| voices | V5 | Fixed: deleted the added sentence. |
| voices | V6 | Fixed: deleted the definition of a project. |
| voices | V7 | Fixed: "Tests can load a saved sign-in, so they do not sign in each time." |
| voices | V8 | Fixed: "they may hold sensitive cookies and headers". |
| voices | V9 | Fixed: deleted the added sentence. |
| voices | V10 | Fixed: the error is not limited to CI; "CI-তে এটি কাজের". |
| voices | V11 | Fixed: as V7. |
| voices | V12 | Fixed: "lets an LLM use a web page". |
| voices | V13 | Fixed: "In interactive sessions … a project-scoped server". |
| voices | V14 | Fixed: deleted the definition of prompt injection. |
| voices | V15 | Fixed: cite 9 now sits on the snapshot sentence only. |
| voices | V16 | Fixed: as V15. |
| voices | V17 | Fixed: the ISTQB definition of traceability. |
| voices | V18 | Fixed: "whether defects were introduced or uncovered in unchanged areas". |
| voices | V19 | Fixed: "saves `playwright-report/` as an artifact". |
| voices | V21 | Fixed: deleted the definition of a trace. |
| voices | V23 | Fixed: "although the request was correct". |
| voices | V24 | Fixed: "request ঠিক থাকা সত্ত্বেও". |
| voices | V25 | Fixed: "the Atlassian MCP tools". |
| voices | V31 | Fixed: "It may hold sensitive cookies and headers." |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | Browser and browser-context options are passed to `use`. | "In addition to configuring the test runner you can also configure Emulation, Network and Recording for the Browser or BrowserContext. These options are passed to the use: {} object in the Playwright config." | S6 | |
| R2 | The Playwright MCP README links the storage state to the Playwright authentication guide. | "You can provide initial storage state to the browser via the config's `contextOptions` or via the `--storage-state` argument. Learn more about the storage state [here](https://playwright.dev/docs/auth)." | S10 | |
| R3 | A test that failed on the first run but passed when retried is reported as flaky. | "\"flaky\" - tests that failed on the first run, but passed when retried;" | S17 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F4 | Fixed: "you fix the selector in one place", with S2. |
| facts | F124 | Fixed: "it may hold sensitive cookies and headers". |
| voices | V5 | Fixed: "its origin lists are not one either", with S10. |
| voices | V6 | Fixed: the S10 cite covers only loading a storage state file; the reuse of the role files is the tutorial's own, with no cite. |
| voices | V15 | Fixed: "A human approves" in steps 4, 6, and 10. |
| voices | V16 | Fixed: "approve করেন" in steps 4, 6, and 10. |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F128 | Fixed: "selectors that can break when the DOM changes". Same in the Bangla panel. |
| voices | V1 | Fixed: "you fix the selector in one place", and the cite moved to the end of the group. |
| voices | V2 | Fixed: deleted the number and "সহজ"; "এক জায়গায় selector ঠিক করেন". |
| voices | V5 | Fixed: "a structured map of the page". |
