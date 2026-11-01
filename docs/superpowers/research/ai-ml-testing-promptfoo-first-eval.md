# Research notes: AI/ML Testing, Your First Eval with Promptfoo

Page: `content/ai-ml-testing/promptfoo-first-eval.mdx`. Data: `scripts/ai_ml_testing_pages_p1c.py`. Accessed 2026-11-02.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Introduction | Promptfoo (docs) | https://www.promptfoo.dev/docs/intro/ | 2026-11-02 |
| S2 | Configuration reference | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/reference/ | 2026-11-02 |
| S3 | Assertions | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/expected-outputs/ | 2026-11-02 |
| S4 | Challenges in evaluating AI systems (the library title "Define success criteria and build evaluations" is wrong) | Anthropic (Engineering) | https://www.anthropic.com/engineering/evaluating-ai-systems | 2026-11-02 |

Checked but not cited (no library entry): Promptfoo command line docs, https://www.promptfoo.dev/docs/usage/command-line/ (no `compare` command; `--verbose` means "Show debug logs"; `--filter-providers` and `-o, --output` exist). Promptfoo Anthropic provider docs, https://www.promptfoo.dev/docs/providers/anthropic/ (`anthropic:messages:<model>`; `claude-sonnet-4-6` is listed).

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Promptfoo is an open-source CLI and library for evaluating LLM apps. | S1 | "an open-source CLI and library for evaluating and red-teaming LLM apps" |
| C2 | Its goal is test-driven LLM development. | S1 | "test-driven LLM development, not trial-and-error" |
| C3 | Results show side by side in a matrix view. | S1 | "matrix views that let you quickly evaluate outputs across many prompts" |
| C4 | Top-level keys: `description`, `prompts`, `providers`, `tests`, `defaultTest`. | S2 | Config table rows |
| C5 | Test case keys: `vars`, `assert`, `description`, `options`. | S2 | Test Case table |
| C6 | `options.rubricPrompt` is the custom prompt for model-graded assertions. | S2 | "Custom prompt for model-graded assertions" |
| C7 | `promptfooconfig.*` loads automatically; `-c` picks another file. | S2 | "It automatically loads `promptfooconfig.*`" |
| C8 | `npx promptfoo eval` runs the eval. | S2 | "running `npx promptfoo eval` will use these defaults" |
| C9 | `filterProviders` matches provider `id` or `label`. | S2 | "matches against provider `id` or `label`" |
| C10 | A test fails if the combined assertion score is below `threshold`. | S2 | "Test will fail if the combined score of assertions is less than this number" |
| C11 | Assertions split into deterministic and model-assisted groups. | S3 | "Deterministic eval metrics" / "Model-assisted eval metrics" |
| C12 | Any type can be negated with `not-`. | S3 | "Every test type can be negated by prepending `not-`" |
| C13 | `contains`, `regex`, `javascript`, `equals`, `is-json`, `starts-with` are deterministic. | S3 | Deterministic table |
| C14 | `llm-rubric`, `similar` are model-assisted. | S3 | Model-assisted table |
| C15 | A JavaScript assertion gets `output`; a single-line one returns its expression. | S3 | "Multiline JavaScript assertions require an explicit `return`" |
| C16 | Anthropic warns against overinterpreting eval scores. | S4 | "overinterpret the quantitative score" |
