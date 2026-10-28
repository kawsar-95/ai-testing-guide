# Fact-check: content/ai-engineering/ci-cd-for-ai.mdx

Checked 2026-10-28 by an agent that did not write the page. All sources were fetched fresh as text (S1 to S5 of the page, and the two sources added below). The quotes of the research notes were not trusted. Each quote below is from the fetched text.

Copy check: `python3 scripts/linux_overlap.py content/ai-engineering/ci-cd-for-ai.mdx <raw-dir>` with all 7 source texts finds no run of 8 or more words. PASS.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | An eval tests an AI system: an input, then grading logic on the output | 2 | PASS | "An evaluation (“eval”) is a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." |
| 2 | CI/CD for AI runs evals before each deployment; the prompt, workflow, and model change | none | PASS | Framing of the topic, not a sourced fact. The list is the tutorial's own breakdown. |
| 3 | Define success criteria first, then design evals that measure against them | 1 | PASS | "starts with clearly defining your success criteria and then designing evaluations to measure performance against them." |
| 4 | With evals you can track latency, token use, cost per task, error rate on a fixed task set | 2 | PASS | "latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks." |
| 5 | Anthropic ranks 3 grading methods (table order: code, LLM, human) | 1 | FAIL | S1 lists "1. **Code-based grading** ... 2. **Human grading** ... 3. **LLM-based grading**" after "choose the fastest, most reliable, most scalable method". The page says "ranks" but swaps 2 and 3. |
| 6 | Code-based: fastest, most reliable, very scalable, no nuance; exact and string match | 1 | PASS | "Fastest and most reliable, extremely scalable, but also lacks nuance for more complex judgments" / "Exact match: `output == golden_answer`" / "String match: `key_phrase in output`" |
| 7 | LLM-based: fast, flexible, complex judgments; test reliability first | 1 | PASS | "Fast and flexible, scalable and suitable for complex judgment. Test to ensure reliability first, then scale." |
| 8 | Human: most flexible, high quality, slow and expensive | 1 | PASS | "Most flexible and high quality, but slow and expensive." |
| 9 | 3 design rules: task-specific with edge cases, automate, more automated questions over fewer hand-graded | 1 | PASS | "Be task-specific" / "Don’t forget to factor in edge cases!" / "Automate when possible" / "More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| 10 | Code: the API call has the same shape as the docs example (`messages.create`, `model`, `max_tokens`, `messages`, `next(... if b.type == "text")`) | 1 | PASS | S1 code: `message = client.messages.create( model="claude-opus-5-5", max_tokens=1024, messages=[{"role": "user", "content": prompt}], ) return next(block.text for block in message.content if block.type == "text")` |
| 11 | Code: model ID `claude-opus-5-5` | 1, 3 | PASS | In the S1 example (quote above), and S3: "Claude API ID | `claude-fable-5-1` | `claude-opus-5-5` |". |
| 12 | Code comment: the client reads the key from the environment; YAML env name `ANTHROPIC_API_KEY`; `pip install anthropic` | none | FAIL | Not in S1 to S5. S1 calls `anthropic.Anthropic()` with no word about the key. |
| 13 | Code: the 0.90 threshold | none | PASS | Marked in the code: "the threshold is the team's choice". |
| 14 | A path filter runs the workflow only when matching files change | 5 | PASS | "you can configure a workflow to run based on what file paths are changed" / "If at least one path matches a pattern in the paths filter, the workflow runs." |
| 15 | The key comes from a repository secret through the `secrets` context; YAML `${{ secrets.X }}` in `env` | 4 | PASS | "you can use the secrets context to access secrets you've created in your repository" / "env: # Or as an environment variable super_secret: ${{ secrets.SuperSecret }}" |
| 16 | YAML: `actions/checkout@v4` | none | FAIL | No source. Out of date: the actions/checkout README shows "# Checkout v7" and "uses: actions/checkout@v7"; the GitHub API gives the latest release `v7.0.1` (2026-07-20). GitHub Docs S4 and S5 examples use `@v6`. |
| 17 | A fork-triggered run gets no secrets, except `GITHUB_TOKEN` | 4 | PASS | "With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository." |
| 18 | Each Claude model ID names one fixed snapshot | 3 | PASS | "Every Claude model ID is a pinned snapshot, including the dateless IDs used from the 4.6 generation on." |
| 19 | Before the 4.6 generation, an alias points to a dated ID | 3 | PASS | "For models before the 4.6 generation, the alias is a convenience pointer that resolves to the dated ID." |
| 20 | Put the exact ID in the config | none | PASS | Marked "Tutorial's own view". |
| 21 | Agent behavior varies between runs | 2 | PASS | "agent behavior varies between runs, which makes evaluation results harder to interpret" |
| 22 | pass@k: chance of at least 1 success in k tries | 2 | PASS | "pass@k measures the likelihood that an agent gets at least one correct solution in k attempts." |
| 23 | pass^k: chance that all k tries succeed | 2 | PASS | "pass^k measures the probability that all k trials succeed." |
| 24 | 75% per try, 3 tries all pass about 42% | 2 | PASS | "If your agent has a 75% per-trial success rate and you run 3 trials, the probability of passing all three is (0.75)³ ≈ 42%." |
| 25 | Example: the eval job runs because the change is under `prompts/` | 5 | PASS | Follows from claim 14 and the YAML `paths`. The 200 stories and 96% to 71% are an invented scenario in the example section, not a sourced fact. |
| 26 | High-pass capability evals can become a regression suite that runs all the time | 2 | PASS | "capability evals with high pass rates can “graduate” to become a regression suite that is run continuously to catch any drift." |
| 27 | Only mocked tests: keep unit tests, add evals on the real model | none | PASS | Marked "Tutorial's own view". |
| 28 | Results vary between runs, so one pass or fail can be noise | 2 | PASS | "Because model outputs vary between runs, we run multiple trials to produce more consistent results." |
| 29 | Test the reliability of LLM grading before you scale it | 1 | PASS | "Test to ensure reliability first, then scale." |
| 30 | Edge cases: missing input, very long input, harmful user input | 1 | PASS | "Irrelevant or nonexistent input data" / "Overly long input data or user input" / "Poor, harmful, or irrelevant user input" |
| 31 | A value that is not a registered secret is not redacted; use `::add-mask::` | 4 | PASS | "Mask all sensitive information that is not a GitHub secret by using ::add-mask::VALUE. This causes the value to be treated as a secret and redacted from logs." |
| 32 | A skipped workflow leaves its checks "Pending", and a PR that needs them cannot merge | 5 | PASS | "checks associated with that workflow will remain in a "Pending" state. A pull request that requires those checks to be successful will be blocked from merging." |
| 33 | "What a tester can check" tip | none | PASS | Marked "These test ideas are the tutorial's own advice." |
| 34 | Key words: eval, code-based, LLM-based, pass^k, pinned snapshot, path filter | 2, 1, 3, 5 | PASS | Same quotes as claims 1, 6, 7, 23, 18, 14. |
| 35 | Key words: a secret is a value GitHub stores for a workflow and hides in logs | 4 | PASS | "you can use the secrets context to access secrets you've created in your repository" / "treated as a secret and redacted from logs". |

FAILs found: 3 (claims 5, 12, 16).

## Fixes

| # | Fix |
|---|---|
| 5 | The table rows, the Layman list, and the Bangla list now follow the S1 order: code-based, human, LLM-based. |
| 12 | Added source 6, "Get started with Claude" (platform.claude.com/docs/en/get-started), and the sentence "The SDK reads the key from the `ANTHROPIC_API_KEY` environment variable <Cite n={6} />". |
| 16 | The YAML now uses `actions/checkout@v7`. Added source 7, the actions/checkout README (github.com/actions/checkout), and the sentence "The `actions/checkout` step puts the repository on the runner, and `v7` is its current major version <Cite n={7} />". |

The research notes have S6, S7, and claims C20 and C21.

## Re-check

| # | Claim | Cite | Verdict | Quote |
|---|---|---|---|---|
| 5 | Ranked order code, human, LLM-based | 1 | PASS | "1. **Code-based grading:** ... 2. **Human grading:** ... 3. **LLM-based grading:**" |
| 12 | The SDK reads the key from `ANTHROPIC_API_KEY`; `pip install anthropic` | 6 | PASS | "Export your API key as an environment variable. The SDK reads `ANTHROPIC_API_KEY` automatically." / "pip install anthropic" / "client = anthropic.Anthropic()" |
| 16 | `actions/checkout` puts the repo on the runner; `v7` is the current major version | 7 | PASS | "# Checkout v7" / "- uses: actions/checkout@v7" / "This action checks-out your repository under `$GITHUB_WORKSPACE`, so your workflow can access it." |
| - | Source count and cites | - | PASS | 7 sources, each cited, no `<Cite n>` without a source. |
| - | Copy check with 7 source texts | - | PASS | No run of 8 or more words. |

Open FAILs: 0
