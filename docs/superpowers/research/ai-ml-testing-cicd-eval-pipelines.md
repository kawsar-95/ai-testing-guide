# Research notes: AI/ML Testing, CI/CD Pipelines for Evals

Page: `content/ai-ml-testing/cicd-eval-pipelines.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `promptfoo-cicd` | CI/CD integration (GitHub Action) | Promptfoo (docs) | https://www.promptfoo.dev/docs/integrations/github-action/ |
| S2 | `github-actions` | GitHub Actions documentation | GitHub (docs) | https://docs.github.com/en/actions |
| S3 | `promptfoo-cli` | Command line (new on this page) | Promptfoo (docs) | https://www.promptfoo.dev/docs/usage/command-line/ |
| S4 | `promptfoo-deterministic` | Deterministic assertions (new) | Promptfoo (docs) | https://www.promptfoo.dev/docs/configuration/expected-outputs/deterministic/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | `npx promptfoo eval --output results.json --assertions` is the gate (run twice in the workflow). | 1 | The CLI page lists no `--assertions` flag. Documented behavior: "The eval command will return exit code 100 when there is at least 1 test case failure or when the pass rate is below the threshold set by PROMPTFOO_PASS_RATE_THRESHOLD." The workflow now has a single `eval` step, and the exit code is the gate (three panels, two places). |
| C2 | Cost gate: `type: javascript` using `context.vars.promptTokens`; a Python script reading `tokensUsed` from a guessed results shape. | none | Those fields are not documented. The deterministic-assertions page lists `cost` ("Inference cost limit") and `latency` ("below a threshold (milliseconds)"). Both replaced with `type: cost` / `type: latency` with thresholds. |
| C3 | A hand-written `actions/github-script` step reading `results.results.tests` to post a comment. | 1 | Invented results fields. The documented route is `promptfoo/promptfoo-action@v1` with `github-token`, `prompts`, `config`, and `pull-requests: write`; it posts a comment with a link to the results and runs a comparison when prompt files change. Code replaced in all panels. |
| C4 | "The Action writes the results back onto the pull request" / "failing cases and their outputs". | 1 | The docs say it posts a link to the results, not the failing cases. Reworded in plain words, how it works and in practice. |
| C5 | Threshold derived from the quality bar, not the current score (cite: Anthropic essay). | 3 | The essay says nothing about thresholds. Cites removed (own advice); source dropped from this page. |
| C6 | A job that exits non-zero fails and blocks the merge. | 2 | GitHub Actions: a step failing with a non-zero exit fails the job; required status checks block merging. |
| C7 | `paths` filter, 22 Node, flakiness controls. | none | Workflow syntax and the tutorial's own advice. |
