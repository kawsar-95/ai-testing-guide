# Fact check: AI/ML Testing, Advanced Capstone: Pipeline, Monitoring and A/B

Page: `content/ai-ml-testing/advanced-capstone-pipeline.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/integrations/github-action/ | yes | Promptfoo (docs) |
| 2 | https://www.promptfoo.dev/docs/usage/command-line/ | yes | Promptfoo (docs) |
| 3 | https://langfuse.com/docs | yes | Langfuse (docs) |
| 4 | https://arize.com/docs/phoenix | yes | Arize Phoenix (docs) |
| 5 | https://arize.com/docs/phoenix/tracing/concepts-tracing/otel-openinference/phoenix-otel-helpers | yes | Arize Phoenix (docs) |
| 6 | https://docs.github.com/en/actions | yes | GitHub (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | `promptfoo/promptfoo-action@v1` with `fail-on-threshold: true`. | 1 | FAIL, fixed | `fail-on-threshold` is not an input in Promptfoo's Action documentation (documented inputs include `github-token`, `prompts`, `config`, `cache-path`). The CLI exits 100 on a failed case or a pass rate below the threshold, so the gate is now `npx promptfoo eval -c promptfooconfig.yaml`. |
| 2 | `from langfuse.decorators import observe`. | 2 | FAIL, fixed | Langfuse's current SDK docs use `from langfuse import observe` and `@observe()`; `langfuse.decorators` does not appear. Corrected. |
| 3 | `import phoenix as px; px.launch_app(); OpenAIInstrumentor().instrument()`. | 3 | FAIL, fixed | Phoenix's current docs use `from phoenix.otel import register` with `register(project_name=..., auto_instrument=True)`, which replaces manual `OpenAIInstrumentor().instrument()`. Replaced; new source `phoenix-otel`. |
| 4 | Source cites placed inside a ```text diagram rendered as literal `<Cite n={..} />` text inside the code block. | none | FAIL, fixed | Removed from the three diagram lines in all panels; the claims are cited in the surrounding prose. |
| 5 | A/B at 50% does twenty-five times the damage of 2%; start at 5-10%. | none | PASS | Arithmetic checks (50/2); the thresholds are the tutorial's own advice. |

Open FAILs: 0
