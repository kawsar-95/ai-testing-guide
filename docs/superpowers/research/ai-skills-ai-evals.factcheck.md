# Fact check: AI Skills, AI Evals

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = Anthropic "Create strong empirical evaluations" (platform.claude.com), S2 = Anthropic Glossary, S3 = promptfoo "Intro", S4 = promptfoo "Configuration guide", S5 = promptfoo "Command line", S6 = MLflow "Evaluate and monitor GenAI apps", S7 = Hugging Face "Evaluate" index, S8 = Hugging Face Evaluate "A quick tour". All 8 are the vendor's or project's own docs. No blog, news, or forum. The page gives no price. No source blocked the fetch.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: AI output varies; a prompt fix can break other cases; an eval = cases, graders, pass rate | none | PASS | The tutorial's own framing; the fact about varied output is cited later (row 4) |
| 2 | Eval = test cases, a grader, a pass rate compared with a target | none | PASS | Definition in the tutorial's own words; supported in substance by S1 |
| 3 | Design evals that mirror the real task distribution; do not forget edge cases | S1 | PASS | "Design evals that mirror your real-world task distribution." |
| 4 | Even at temperature 0, the same input can give a different output on another call | S2 | PASS | "Even with temperature set to 0, the results will not be fully deterministic" |
| 5 | More cases with automated grading beat fewer hand-graded cases | S1 | PASS | "More questions with slightly lower signal automated grading is better" |
| 6 | Regression testing with a grader in place of `assertEqual` | none | PASS | The tutorial's own analogy |
| 7 | Text diagram (46/50 = 92%, gate 90%) | none | PASS | A worked example; the arithmetic is right |
| 8 | Code-based grader: fastest, most reliable, scales well, lacks nuance for complex judgment | S1 | PASS | "Fastest and most reliable, extremely scalable, but also lacks nuance" |
| 9 | Human grader: most flexible, high quality, slow and expensive, avoid if you can | S1 | PASS | "Most flexible and high quality, but slow and expensive. Avoid if possible." |
| 10 | LLM grader: fast, flexible, complex judgment; test reliability first, then scale | S1 | PASS | "Test to ensure reliability first, then scale." |
| 11 | LLM grader tips: detailed clear rubric; fixed result (correct/incorrect or 1 to 5); reason before score | S1 | PASS | "Have detailed, clear rubrics"; "output only 'correct' or 'incorrect', or ... 1–5"; "Encourage reasoning" |
| 12 | Example code: best practice to grade with a different model | S1 | PASS | "best practice to evaluate with a different model from the one used" |
| 13 | `promptfoo eval` returns exit code 100 when at least one test fails | S5 | PASS | "return exit code `100` when there is at least 1 test case failure" |
| 14 | `PROMPTFOO_PASS_RATE_THRESHOLD` sets the lowest pass rate in percent; unset allows no failures | S5 | PASS | "If not set, defaults to 100% (no failures allowed)" |
| 15 | `--repeat` runs each test more than one time | S5 | PASS | "Number of times to run each test" |
| 16 | Edge cases: irrelevant/missing input, very long input, poor/harmful input, ambiguous cases | S1 | PASS | "Ambiguous test cases where even humans would find it hard" |
| 17 | promptfoo is a CLI and library for evaluating and red-teaming LLM apps | S3 | FAIL (copied text) | Fact is right: "an open-source CLI and library for evaluating and red-teaming LLM apps." But the page repeats a 9-word run of the source ("CLI and library for evaluating and red-teaming LLM apps"), in Technical and Layman |
| 18 | Config file `promptfooconfig.yaml` lists prompts, providers, tests; tests have `vars` and `assert` with `contains`, `equals`, `llm-rubric` | S4 | PASS | S4 examples use `prompts`, `providers`, `tests`, `vars`, `assert:`, "- type: contains", "- type: equals", `llm-rubric`; S4 labels a sample "promptfooconfig.yaml:" |
| 19 | YAML example syntax | S4 | PASS | `{{report}}` is Nunjucks ("Use Nunjucks templates"); `type`/`value` per assertion as in S4. `<your provider id>` is a placeholder, and the page says so ("take the provider id from the promptfoo docs") |
| 20 | Run it with `promptfoo eval` | S4 | PASS | "Running `promptfoo eval` over this config" |
| 21 | promptfoo can run in CI/CD | S3 | PASS | "Use as a CLI, library, or in CI/CD" |
| 22 | Exit code and pass-rate variable decide the build | S5 | PASS | Rows 13 and 14 |
| 23 | MLflow keeps evaluation datasets, runs scorers, has built-in LLM-as-a-judge scorers, `mlflow.genai.evaluate` | S6 | PASS | "MLflow offers various built-in LLM-as-a-Judge scorers"; example calls `mlflow.genai.evaluate(` |
| 24 | Hugging Face Evaluate: `evaluate.load("accuracy")`; a metric compares predictions with ground-truth labels | S8 | PASS | "involves the model's predictions as well as some ground truth labels" |
| 25 | Tutorial advice tip (bugs become cases; agree the gate first) | none | PASS | Marked as the tutorial's own advice, no cite |
| 26 | Tools table: promptfoo exit 100 (S5), `mlflow.genai.evaluate` (S6) | S5, S6 | PASS | Rows 13 and 23 |
| 27 | Tools table: Hugging Face Evaluate is a library to evaluate models and datasets | S7 | PASS | "A library for easily evaluating machine learning models and datasets." |
| 28 | Tools table: Anthropic guide recommends automated grading where possible | S1 | PASS | "Automate when possible: Structure questions to allow for automated grading" |
| 29 | Common mistakes: volume (S1), edge cases (S1), varied words (S2), check judge + rubric + other model (S1), `--repeat` (S5) | S1, S2, S5 | PASS | Rows 5, 16, 4, 10 to 12, 15. "Structure checks plus a rubric for meaning" is the tutorial's own fix |
| 30 | How to start step 1: "write 20 to 50 cases from real inputs, plus a few edge cases" | S1 | FAIL (mis-cite) | S1 gives no 20 to 50 count (its examples use 500 queries). The cite makes the number look like Anthropic's |
| 31 | Steps 2 and 5 (what a pass means; a case per new bug) | none | PASS | The tutorial's own advice |
| 32 | Step 3: cases in `promptfooconfig.yaml`, run `promptfoo eval` | S4 | PASS | S5 also: "By default the `eval` command will read the `promptfooconfig.yaml`" |
| 33 | Step 4: set `PROMPTFOO_PASS_RATE_THRESHOLD`, run in CI | S5 | PASS | Row 14; CI also in S3 |
| 34 | Key words: Eval, Grader, Rubric (S1); Pass rate (S5); Metric (S8); Non-determinism (S2) | S1, S2, S5, S8 | PASS | Rows 2, 8 to 11, 14, 24, 4 |
| 35 | Key words: "LLM as a judge: A model that grades another model's output with a rubric" | S6 | FAIL (mis-cite) | S6 supports LLM judges, but does not use "rubric" (it uses `Guidelines` criteria). The rubric fact is in S1, which the row does not cite |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | platform.claude.com, promptfoo.dev, mlflow.org, huggingface.co docs |
| No prices | PASS | None on the page ("expensive" is a quote of S1, not a price) |
| No copied text | FAIL | Row 17: a 9-word run from S3. All other sentences compared with the quotes above; the longest other shared run is 6 words ("with a different model from the one") |
| "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` |
| Internal links | PASS | `/automate/github-actions/` and `/foundations/prompting/` are in `lib/nav.ts`; `prompting` is in `lib/ai-skills/topics.ts` |
| Each source is cited | PASS | S1 to S8 all cited |
| promptfoo keys, assertion types, CLI | PASS | `prompts`, `providers`, `tests`, `vars`, `assert`, `type`, `value`, `contains`, `equals`, `llm-rubric`, `promptfoo eval`, `--repeat`, `PROMPTFOO_PASS_RATE_THRESHOLD`, exit code 100 all match S4 and S5 |

Round 1 result: 3 open FAILs (rows 17, 30, 35). See Round 2.

## Round 2 (2026-10-28)

The writer changed the page after Round 1. I read the current MDX and fetched S1, S3 and S5 again on 2026-10-28.

| Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|
| "promptfoo is a command-line tool and library that tests and red-teams LLM apps" (Technical, Layman; Bangla the same) | S3 | PASS, Round 1 row 17 fixed | "an open-source CLI and library for evaluating and red-teaming LLM apps." The longest shared run is 2 words |
| "write 20 to 50 cases (the tutorial's own starting size) from real inputs, plus a few edge cases" | S1 | PASS, Round 1 row 30 fixed | The count is now marked as the tutorial's own. The cite supports real inputs and edge cases: "Don't forget to factor in edge cases!" |
| Key words: "LLM as a judge \| A model that grades another model's output with a rubric" with cites 1 and 6 | S1, S6 | PASS, Round 1 row 35 fixed | S1: "Have detailed, clear rubrics"; S6: "built-in LLM-as-a-Judge scorers" |
| "it is best practice to use another model as the grader, not the one that wrote the output" | S1 | PASS | "best practice to evaluate with a different model from the one used to generate" |
| Common mistakes: "Use a grader model that is not the model under test" | S1 | PASS | Same quote as the row above |
| "`promptfoo eval` ends with exit code 100 if one or more tests fail" | S5 | PASS | "will return exit code `100` when there is at least 1 test case failure" |
| Grader table and three LLM-grader tips (not changed in wording) | S1 | PASS | Checked against S1 again: "Fastest and most reliable, extremely scalable"; "Avoid if possible."; "Test to ensure reliability first, then scale." |

Copied text: I compared each changed sentence with its source quote. The longest shared run is 3 words ("exit code 100"). No run is 8 words or longer.

Round 1 FAILs closed: rows 17, 30 and 35. No new FAIL.

Open FAILs: 0
