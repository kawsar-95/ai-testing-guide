# Research notes: AI/ML Testing, Capstone Test Pipeline

Page: `content/ai-ml-testing/capstone-test-pipeline.mdx` (data: `scripts/ai_ml_testing_pages_p1h.py`). Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `promptfoo-config` | Configuration reference | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/reference/ |
| S2 | `promptfoo-http` (new this pass) | HTTP/HTTPS API provider | Promptfoo (docs) | https://www.promptfoo.dev/docs/providers/http/ |
| S3 | `deepeval-intro` | Getting started | DeepEval docs | https://deepeval.com/docs/getting-started |
| S4 | `promptfoo-redteam` | Red teaming | Promptfoo (docs) | https://www.promptfoo.dev/docs/red-team/ |
| S5 | `giskard-scan` | Scan a model | Giskard (docs) | https://docs.giskard.ai/oss/scan |
| S6 | `playwright-intro` | Playwright intro | Playwright (docs) | https://playwright.dev/docs/intro |
| S7 | `langfuse-intro` | Introduction | Langfuse (docs) | https://langfuse.com/docs |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | A Promptfoo HTTP provider is declared with `id: <url>` plus `config:` (`method`, `headers`, `body` with `{{prompt}}`, `transformResponse`). | S2 | "Setting the provider ID to a URL sends an HTTP request to the endpoint"; example `providers: - id: https config: url: ... method: POST headers: ... body: myPrompt: {{prompt}} transformResponse: json.output`. The old page used a bare `providers: ["http://localhost:8000/ask"]`, which the page does not document. |
| C2 | `FaithfulnessMetric` takes `input`, `actual_output`, `retrieval_context` on an `LLMTestCase`. | DeepEval Faithfulness page (`deepeval.com/docs/metrics-faithfulness`, linked from S3) | "you'll have to provide the following arguments when creating an LLMTestCase: input, actual_output, retrieval_context"; `FaithfulnessMetric(threshold=0.7, ...)`. |
| C3 | `assert_test(test_case, [metrics])` is the Pytest entry point. | S3 | Getting-started page: `from deepeval import assert_test` ... `def test_correctness():`. |
| C4 | `npx promptfoo redteam run -c/--config` takes a config file (default `promptfooconfig.yaml`); `-o` is the generated-tests output (default `redteam.yaml`). | `promptfoo-cli` (new) / Promptfoo command-line page | "`-c, --config [path]` Path to configuration file, default promptfooconfig.yaml; `-o, --output [path]` ... default redteam.yaml". |
| C5 | Playwright Python locator API: `page.locator(sel).fill()`, `.click()`, `expect(locator).to_contain_text(text, timeout=)`. | Playwright Python API reference (`playwright.dev/python/docs/api/class-page`, `class-locatorassertions`) | `page.fill`, `page.click`, `page.inner_text`, `page.wait_for_selector` are all marked "Discouraged. Use locator-based ... instead"; `to_contain_text` exists on LocatorAssertions. |
| C6 | Giskard scan as a second attack library (script is the tutorial's own). | S5 | See `ai-ml-testing-red-teaming.md`. |
| C7 | LangFuse logs traces for debugging. | S7 | "Observability: Log traces ... Understand cost and latency". |
| C8 | Run order and the per-suite time estimates ("seconds", "a minute", "several minutes"). | none | Tutorial's own estimates, not measurements or source claims. |
