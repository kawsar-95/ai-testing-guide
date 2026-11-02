# Research notes: AI/ML Testing, CI/CD Integration and Capstone Presentation

Page: `content/ai-ml-testing/capstone-cicd-presentation.mdx`. Accessed 2026-11-02.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `github-actions` | GitHub Actions documentation | GitHub | https://docs.github.com/en/actions |
| S2 | `promptfoo-cicd` | CI/CD integration | Promptfoo (docs) | https://www.promptfoo.dev/docs/integrations/github-action/ |
| S3 | `promptfoo-cli` (new this pass) | Command line | Promptfoo (docs) | https://www.promptfoo.dev/docs/usage/command-line/ |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | GitHub Actions runs a defined job on a repository event such as a pull request; `on: pull_request` / `on: schedule` cron. | S1 | Docs index; standard workflow syntax. |
| C2 | Only checks marked required block a merge. | `docs.github.com/.../about-protected-branches` (one click from S1) | "After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch." |
| C3 | Promptfoo ships `promptfoo/promptfoo-action@v1`: runs a before-and-after comparison when prompt files change in a PR and posts results to the PR. Supported inputs: `github-token` (required), `prompts` (required), `config` (required), `openai-api-key`, `cache-path`. Needs `pull-requests: write`. | S2 | "On every pull request that modifies a prompt, the action will automatically run a full comparison"; parameter table lists exactly those five inputs. There is no `fail-on-threshold` input. |
| C4 | `npx promptfoo eval` returns exit code 100 on at least one failing test or a pass rate below `PROMPTFOO_PASS_RATE_THRESHOLD`; 1 on other errors. | S3 | "The eval command will return exit code 100 when there is at least 1 test case failure or when the pass rate is below the threshold set by PROMPTFOO_PASS_RATE_THRESHOLD." |
| C5 | Slow suites on a nightly schedule, fast suites per PR. | none | Tutorial's own design. |
| C6 | Presentation outline and tutorial advice. | none | Tutorial's own. |
