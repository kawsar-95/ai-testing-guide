# Research notes: AI/ML Testing, Advanced Capstone: Pipeline, Monitoring and A/B

Page: `content/ai-ml-testing/advanced-capstone-pipeline.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `promptfoo-cicd` | GitHub Action integration | Promptfoo (docs) | https://www.promptfoo.dev/docs/integrations/github-action/ |
| S2 | `promptfoo-cli` | Command line (new on this page) | Promptfoo (docs) | https://www.promptfoo.dev/docs/usage/command-line/ |
| S3 | `langfuse-intro` | Introduction | Langfuse (docs) | https://langfuse.com/docs |
| S4 | `phoenix-intro` | Introduction | Arize Phoenix (docs) | https://arize.com/docs/phoenix |
| S5 | `phoenix-otel` | The phoenix.otel helpers (new) | Arize Phoenix (docs) | https://arize.com/docs/phoenix/tracing/concepts-tracing/otel-openinference/phoenix-otel-helpers |
| S6 | `github-actions` | GitHub Actions documentation | GitHub (docs) | https://docs.github.com/en/actions |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | `promptfoo/promptfoo-action@v1` with `fail-on-threshold: true`. | 1 | `fail-on-threshold` is not an input in Promptfoo's Action documentation (documented inputs include `github-token`, `prompts`, `config`, `cache-path`). The CLI exits 100 on a failed case or a pass rate below the threshold, so the gate is now `npx promptfoo eval -c promptfooconfig.yaml`. |
| C2 | `from langfuse.decorators import observe`. | 2 | Langfuse's current SDK docs use `from langfuse import observe` and `@observe()`; `langfuse.decorators` does not appear. Corrected. |
| C3 | `import phoenix as px; px.launch_app(); OpenAIInstrumentor().instrument()`. | 3 | Phoenix's current docs use `from phoenix.otel import register` with `register(project_name=..., auto_instrument=True)`, which replaces manual `OpenAIInstrumentor().instrument()`. Replaced; new source `phoenix-otel`. |
| C4 | Source cites placed inside a ```text diagram rendered as literal `<Cite n={..} />` text inside the code block. | none | Removed from the three diagram lines in all panels; the claims are cited in the surrounding prose. |
| C5 | A/B at 50% does twenty-five times the damage of 2%; start at 5-10%. | none | Arithmetic checks (50/2); the thresholds are the tutorial's own advice. |
