# Fact check: AI/ML Testing, CI/CD Pipelines for Evals

Page: `content/ai-ml-testing/cicd-eval-pipelines.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.promptfoo.dev/docs/integrations/github-action/ | yes | Promptfoo (docs) |
| 2 | https://docs.github.com/en/actions | yes | GitHub (docs) |
| 3 | https://www.promptfoo.dev/docs/usage/command-line/ | yes | Promptfoo (docs) |
| 4 | https://www.promptfoo.dev/docs/configuration/expected-outputs/deterministic/ | yes | Promptfoo (docs) |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | `npx promptfoo eval --output results.json --assertions` is the gate (run twice in the workflow). | 1 | FAIL, fixed | The CLI page lists no `--assertions` flag. Documented behavior: "The eval command will return exit code 100 when there is at least 1 test case failure or when the pass rate is below the threshold set by PROMPTFOO_PASS_RATE_THRESHOLD." The workflow now has a single `eval` step, and the exit code is the gate (three panels, two places). |
| 2 | Cost gate: `type: javascript` using `context.vars.promptTokens`; a Python script reading `tokensUsed` from a guessed results shape. | none | FAIL, fixed | Those fields are not documented. The deterministic-assertions page lists `cost` ("Inference cost limit") and `latency` ("below a threshold (milliseconds)"). Both replaced with `type: cost` / `type: latency` with thresholds. |
| 3 | A hand-written `actions/github-script` step reading `results.results.tests` to post a comment. | 1 | FAIL, fixed | Invented results fields. The documented route is `promptfoo/promptfoo-action@v1` with `github-token`, `prompts`, `config`, and `pull-requests: write`; it posts a comment with a link to the results and runs a comparison when prompt files change. Code replaced in all panels. |
| 4 | "The Action writes the results back onto the pull request" / "failing cases and their outputs". | 1 | FAIL, fixed | The docs say it posts a link to the results, not the failing cases. Reworded in plain words, how it works and in practice. |
| 5 | Threshold derived from the quality bar, not the current score (cite: Anthropic essay). | 3 | FAIL, fixed | The essay says nothing about thresholds. Cites removed (own advice); source dropped from this page. |
| 6 | A job that exits non-zero fails and blocks the merge. | 2 | PASS | GitHub Actions: a step failing with a non-zero exit fails the job; required status checks block merging. |
| 7 | `paths` filter, 22 Node, flakiness controls. | none | PASS | Workflow syntax and the tutorial's own advice. |

Open FAILs at the end of the rounds above: 0

## Readability edit (2026-11-10)

The Technical text of 1 section was edited to lower the reading load: T1 = `## How it works`. The cognitive-load audit of 2026-11-10 had marked it HUGE: heavy on three or more of length, terms, sentence length, unbroken prose, and dense tables or code. The edit split long sentences, turned lists inside sentences into lists, put the main point first, and added bold run-in labels (and, in a few long sections, `###` headings). It was not meant to change any claim.

A script checked that every cite, number, code span, link, code block, table row, JSX tag, and content word of the old text is still in the new text. The edit was made by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not make the edit, comparing the old and the new text of each section. Because no claim changed, the claims above were not checked against the sources again. The Layman and Bangla panels did not change.

### FAILs

None.

### Table

| Target | Verdict | Notes |
|---|---|---|
| T1 | PASS | Text, code blocks and cites are preserved. Sentence splits, "So" and the bulleted list keep the original meaning, and the split cost/latency cite is on each part. |

Open FAILs: 0
