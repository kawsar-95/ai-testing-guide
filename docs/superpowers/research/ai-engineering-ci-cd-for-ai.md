# AI Engineering page: CI/CD for AI (research notes)

Writer notes for `content/ai-engineering/ci-cd-for-ai.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-ci-cd-for-ai/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Define success criteria and build evaluations (Claude Platform Docs) | https://platform.claude.com/docs/en/test-and-evaluate/develop-tests | 2026-10-28 |
| S2 | Demystifying evals for AI agents (Anthropic Engineering) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents | 2026-10-28 |
| S3 | Models overview (Claude Platform Docs) | https://platform.claude.com/docs/en/about-claude/models/overview | 2026-10-28 |
| S4 | Using secrets in GitHub Actions (GitHub Docs) | https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets | 2026-10-28 |
| S5 | Workflow syntax for GitHub Actions (GitHub Docs) | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax | 2026-10-28 |
| S6 | Get started with Claude (Claude Platform Docs), added in the fact check | https://platform.claude.com/docs/en/get-started | 2026-10-28 |
| S7 | actions/checkout README (GitHub), added in the fact check | https://github.com/actions/checkout | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An eval is a test for an AI system: input plus grading logic. | S2 | "An evaluation ("eval") is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." |
| C2 | Define success criteria, then design evals against them. | S1 | "Building a successful LLM-based application starts with clearly defining your success criteria and then designing evaluations to measure performance against them." |
| C3 | With evals you can track latency, token use, cost per task, error rate on a fixed task bank. | S2 | "latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks." |
| C4 | Code-based grading: fastest, most reliable, scalable, lacks nuance; exact and string match. | S1 | "Code-based grading: Fastest and most reliable, extremely scalable, but also lacks nuance for more complex judgments" / "Exact match" / "String match" |
| C5 | Human grading: most flexible, high quality, slow and expensive. | S1 | "Human grading: Most flexible and high quality, but slow and expensive." |
| C6 | LLM grading: fast, flexible, complex judgment; test reliability first. | S1 | "LLM-based grading: Fast and flexible, scalable and suitable for complex judgment. Test to ensure reliability first, then scale." |
| C7 | 3 design rules: task-specific with edge cases, automate, volume over quality. | S1 | "Be task-specific ... Don't forget to factor in edge cases!" / "Automate when possible" / "Prioritize volume over quality: More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| C8 | Edge cases: missing input, overly long input, harmful input. | S1 | "Irrelevant or nonexistent input data" / "Overly long input data or user input" / "Poor, harmful, or irrelevant user input" |
| C9 | The example call has the same shape as the docs (`model`, `max_tokens`, `messages`, `claude-opus-5-5`). | S1 | `model="claude-opus-5-5", max_tokens=1024, messages=[{"role": "user", "content": prompt}]` |
| C10 | Path filter runs a workflow only when matching files change. | S5 | "When using the push and pull_request events, you can configure a workflow to run based on what file paths are changed." |
| C11 | Skipped workflow: checks stay Pending; required checks block merge. | S5 | "checks associated with that workflow will remain in a "Pending" state. A pull request that requires those checks to be successful will be blocked from merging." |
| C12 | Secrets via the `secrets` context. | S4 | "you can use the secrets context to access secrets you've created in your repository." |
| C13 | Fork-triggered workflows get no secrets except `GITHUB_TOKEN`. | S4 | "With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository." |
| C14 | Non-secret sensitive values: `::add-mask::`; secrets are redacted from logs. | S4 | "Mask all sensitive information that is not a GitHub secret by using ::add-mask::VALUE. This causes the value to be treated as a secret and redacted from logs." |
| C15 | Every Claude model ID is a pinned snapshot. | S3 | "Every Claude model ID is a pinned snapshot, including the dateless IDs used from the 4.6 generation on." |
| C16 | Before 4.6, the alias points to a dated ID. | S3 | "For models before the 4.6 generation, the alias is a convenience pointer that resolves to the dated ID." |
| C17 | Agent behavior varies between runs. | S2 | "agent behavior varies between runs, which makes evaluation results harder to interpret" |
| C18 | pass@k and pass^k definitions; 75% per try, 3 tries all pass about 42%. | S2 | "pass@k measures the likelihood that an agent gets at least one correct solution in k attempts" / "pass^k measures the probability that all k trials succeed" / "(0.75)³ ≈ 42%" |
| C20 | The Python SDK reads the key from `ANTHROPIC_API_KEY`. | S6 | "Export your API key as an environment variable. The SDK reads `ANTHROPIC_API_KEY` automatically." |
| C21 | `actions/checkout` puts the repository on the runner; `v7` is the current major version. | S7 | "# Checkout v7" / "- uses: actions/checkout@v7" / "This action checks-out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it." The latest release is `v7.0.1` (GitHub API, 2026-10-28). |
| C19 | High-pass capability evals can become a continuous regression suite. | S2 | "capability evals with high pass rates can "graduate" to become a regression suite that is run continuously to catch any drift." |

## Not on the page / doubts

- The 0.90 threshold, the 200-story eval set, and the 96% to 71% drop are a made-up example. Pinning the model ID in config is the tutorial's own view.
- The fact check found `actions/checkout@v4` out of date and without a source. The YAML now uses `@v7`, with S7.
- The grader order follows S1: code-based, human, LLM-based.
