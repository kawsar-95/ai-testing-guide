# Fact check: AI/ML Testing, CI/CD Integration and Capstone Presentation

Page: `content/ai-ml-testing/capstone-cicd-presentation.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.github.com/en/actions | yes | GitHub docs |
| 2 | https://www.promptfoo.dev/docs/integrations/github-action/ | yes | Promptfoo docs |
| 3 | https://www.promptfoo.dev/docs/usage/command-line/ | yes (added this pass) | Promptfoo docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | GitHub Actions runs a job on a repository event such as a pull request. | 1 | PASS | Standard Actions behavior. |
| 2 | Promptfoo's GitHub Action "wraps the CLI call and posts the results as a PR comment", making the gate visible. | 2 | FAIL, fixed | The action runs a before-and-after comparison of changed prompt files and posts results to the PR; it does not itself enforce a threshold. Rewritten to say exactly that, with its required inputs and `pull-requests: write`. |
| 3 | Workflow step `promptfoo/promptfoo-action@v1` with `config:` and `fail-on-threshold: true`. | 2 | FAIL, fixed | `fail-on-threshold` is not a supported input (the docs list `github-token`, `prompts`, `config`, `openai-api-key`, `cache-path`), and `github-token` and `prompts` are required. Replaced with `npx promptfoo eval -c promptfooconfig.yaml`, which exits 100 on a failing test and so fails the job. New source `promptfoo-cli` cited for the exit code. |
| 4 | Nightly job `npx promptfoo redteam run --config redteam.yaml`. | none | FAIL, fixed | `redteam.yaml` is the default output file, not a config; now `redteam-config.yaml`. |
| 5 | Nightly job `npx playwright test`. | none | FAIL, fixed | The capstone's UI tests are Python (`pytest`, `playwright.sync_api`), so the JS runner would find no tests. Now `python -m pytest tests/ui/`. |
| 6 | Only checks marked required in branch protection block a merge (Mistake 1). | 1 | PASS | GitHub: "all required status checks must pass before collaborators can merge". |
| 7 | Mistake 3: a reviewer who must open logs stops checking. | 2 | PASS | Tutorial's judgment; the cite supports only that Promptfoo's action posts to the PR. |
| 8 | Presentation outline, other mistakes and advice. | none | PASS | Tutorial's own. |

Not verified: the exact YAML for `actions/checkout@v4` pinning and Python/Node setup steps, which the example omits for brevity.

Open FAILs: 0
