# Research notes: AI/ML Testing, Chatbot UI Testing with Playwright

Page: `content/ai-ml-testing/chatbot-ui-testing.mdx` (data in `scripts/ai_ml_testing_pages_p1d.py`). Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Playwright intro | Playwright (docs) | https://playwright.dev/docs/intro | 2026-11-02 |
| S2 | Auto-waiting | Playwright (docs) | https://playwright.dev/docs/actionability | 2026-11-02 |
| S3 | Assertions | Playwright (docs) | https://playwright.dev/docs/test-assertions | 2026-11-02 |

The page code is Python. The Python names (`expect`, `to_be_visible`, `to_have_count`, `to_be_disabled`, `to_be_enabled`, `to_contain_text`, `to_be_focused`, `get_by_test_id`, `get_by_role`, `wait_for_timeout`) are the Python twins of the methods on these pages.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Playwright Test is an end-to-end test framework. | S1 | "an end-to-end test framework for modern web apps" |
| C2 | It runs on Chromium, WebKit, and Firefox. | S1 | "Playwright supports Chromium, WebKit and Firefox." |
| C3 | Actionability checks run before actions. | S2 | "performs a range of actionability checks on the elements before making actions" |
| C4 | For a click: Visible, Stable, Receives Events, Enabled. | S2 | "element is Stable, as in not animating or completed animation" |
| C5 | Auto-retrying assertions retry until they pass or time out. | S3 | "will retry until the assertion passes" |
| C6 | Default assertion timeout is 5 seconds (the page's code sets 30 s). | S3 | "the timeout for assertions is set to 5 seconds" |
| C7 | Assertions exist for roles and accessible names. | S3 | `toHaveRole`, `toHaveAccessibleName` in the assertion table |
