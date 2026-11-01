# Fact check: AI/ML Testing, Chatbot UI Testing with Playwright

Page: `content/ai-ml-testing/chatbot-ui-testing.mdx`. Data: `scripts/ai_ml_testing_pages_p1d.py`. Checker: an agent that did not write the page. Date: 2026-11-02. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://playwright.dev/docs/intro | yes | Playwright docs |
| 2 | https://playwright.dev/docs/actionability | yes | Playwright docs |
| 3 | https://playwright.dev/docs/test-assertions | yes | Playwright docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Four moving parts; double send. | none | PASS | Tutorial's own analysis. |
| 2 | Auto-waiting waits for actionability instead of a fixed time. | 2 | PASS | "actionability checks on the elements before making actions" |
| 3 | A fixed sleep is "the single most common cause" of flaky AI tests. | none | FAIL, fixed: superlative with no source; now "a common cause". Same fix in the How-it-works table and the key word. |
| 4 | Playwright "drives a real browser and it is built for exactly this kind of test". | 1 | FAIL, fixed: vague. Now "an end-to-end test framework that runs the tests in Chromium, WebKit, and Firefox". | "Playwright supports Chromium, WebKit and Firefox." |
| 5 | Assertions check "what the user sees rather than what the DOM happens to contain". | 3 | FAIL, fixed: the page does not say this. Now: assertions retry until the condition is met or the timeout runs out. | "will retry until the assertion passes" |
| 6 | A locator "waits until the element is present and stable before interacting". | 2 | FAIL, fixed: incomplete. Now: before an action such as a click, Playwright checks visible, stable, receives events, enabled. | "element Receives Events, as in not obscured by other elements" |
| 7 | Send-disable, streaming assertion pattern, scroll, live region `role="log"`, visual layer. | none | PASS | Tutorial's own test design. |
| 8 | Code: `expect(answer).to_contain("30")` on a Python string. | none | FAIL, fixed: Playwright `expect` takes a locator or page, not a string, and has no `to_contain`. Now `assert "30" in answer`. |
| 9 | Code: `expect(page.get_by_test_id("assistant-message")).to_be_visible(...)`. | none | FAIL, fixed: with more than one message this locator is ambiguous (strict mode). Now `.last`. |
| 10 | Code: `viewport_width(page)` was never defined. | none | FAIL, fixed: now `page.evaluate("window.innerWidth")`. |
| 11 | Code: `expect(transcript).to_have_attribute("aria-live", "polite")`. | none | FAIL, fixed: `role="log"` is already a polite live region, so a correct page can have no `aria-live` attribute and fail the test. Now `expect(page.get_by_role("log")).to_be_visible()`, with a comment. |
| 12 | Code: `to_have_count(0, timeout=30_000)`, `to_be_disabled`, `to_be_enabled`, `to_contain_text`, `to_be_focused`, `page.reload()`. | none | PASS | Python twins of the methods on page 3. |
| 13 | Mistake 1: `page.wait_for_timeout(5000)` is a guess; wait for a condition. | 2 | PASS | Auto-waiting page. |
| 14 | Mistake 6: no accessibility check. | 3 | FAIL, fixed: the cite did not support the sentence. Added: "Playwright has assertions for this, such as role and accessible-name checks". | `toHaveRole`, `toHaveAccessibleName` |
| 15 | Key word "Viewport overflow": "the most common chat layout bug". | none | FAIL, fixed: now "a common". |

## Checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| No prices | PASS |
| Tester tip has no cites and says it is the tutorial's advice | PASS |

Open FAILs: 0
