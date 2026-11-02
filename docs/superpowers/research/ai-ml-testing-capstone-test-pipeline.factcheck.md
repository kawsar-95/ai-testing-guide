# Fact check: AI/ML Testing, Capstone Test Pipeline

Page: `content/ai-ml-testing/capstone-test-pipeline.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/configuration/reference/ | yes | Promptfoo docs |
| 2 | https://www.promptfoo.dev/docs/providers/http/ | yes (added this pass) | Promptfoo docs |
| 3 | https://deepeval.com/docs/getting-started | yes | DeepEval docs |
| 4 | https://www.promptfoo.dev/docs/red-team/ | yes | Promptfoo docs |
| 5 | https://docs.giskard.ai/oss/scan | yes | Giskard docs |
| 6 | https://playwright.dev/docs/intro | yes | Playwright docs |
| 7 | https://langfuse.com/docs | yes | Langfuse docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | Six suites, each testing a different layer. | 1-6 | PASS | Tutorial's own framing over six real tools. |
| 2 | Promptfoo eval config with `providers: ["http://localhost:8000/ask"]`. | 1 | FAIL, fixed | The documented HTTP provider form is `id: <url>` with a `config:` block; the bare string is not documented, and the page's endpoint expects a JSON `{"question": ...}` body and returns `{"answer": ...}`, which needs `body` and `transformResponse`. Rewritten with `prompts: ["{{question}}"]`, `method`, `headers`, `body: question: "{{prompt}}"`, `transformResponse: json.answer`. New source `promptfoo-http` cited. |
| 3 | DeepEval `FaithfulnessMetric(threshold=0.9)` with `LLMTestCase(input, actual_output, retrieval_context)` and `assert_test`. | 3 | PASS | Required arguments confirmed on the Faithfulness page; `assert_test` confirmed on the getting-started page. `retrieval_context=response["context"]` needs a list of strings; the setup page's endpoint now returns `context` as a list (fixed there). |
| 4 | `npx promptfoo redteam run --config redteam.yaml`. | 4 | FAIL, fixed | `-c` is the configuration file (default `promptfooconfig.yaml`); `redteam.yaml` is the default output of generated tests, not a config. Renamed to `redteam-config.yaml`. |
| 5 | Playwright test using `page.fill`, `page.click`, `page.wait_for_selector`, `page.inner_text`. | 6 | FAIL, fixed | All four are marked "Discouraged ... use locator-based" in the Playwright Python API reference. Rewritten with `page.locator(...).fill/click` and `expect(locator).to_contain_text("30 day", timeout=10_000)` (auto-retrying), plus the `Page, expect` import. Test renamed from "...renders_a_streamed_answer" since it does not check streaming. |
| 6 | LangFuse traces everything so failures are diagnosable. | 7 | PASS | Overview: "Log traces". |
| 7 | Suite run order and time estimates. | none | PASS | Labeled tutorial advice; estimates are approximate, not source claims. |
| 8 | Common mistakes 1-5, tutorial-advice bullets. | 6, 7 | PASS | Tutorial's own advice. |

Open FAILs: 0
