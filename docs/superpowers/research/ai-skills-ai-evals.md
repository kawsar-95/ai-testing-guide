# AI Skills page: Checking AI Quality (Evals) (research notes)

Writer notes for `content/ai-skills/ai-evals.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Create strong empirical evaluations (Claude Platform docs) | https://platform.claude.com/docs/en/test-and-evaluate/develop-tests | 2026-10-28 |
| S2 | Glossary (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/glossary | 2026-10-28 |
| S3 | Intro (promptfoo docs) | https://www.promptfoo.dev/docs/intro/ | 2026-10-28 |
| S4 | Configuration guide (promptfoo docs) | https://www.promptfoo.dev/docs/configuration/guide/ | 2026-10-28 |
| S5 | Command line (promptfoo docs) | https://www.promptfoo.dev/docs/usage/command-line/ | 2026-10-28 |
| S6 | Evaluate and monitor GenAI apps (MLflow docs) | https://mlflow.org/docs/latest/genai/eval-monitor/ | 2026-10-28 |
| S7 | Evaluate (Hugging Face docs) | https://huggingface.co/docs/evaluate/index | 2026-10-28 |
| S8 | A quick tour (Hugging Face Evaluate docs) | https://huggingface.co/docs/evaluate/a_quick_tour | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Design evals that mirror the real task distribution, with edge cases. | S1 | "Design evals that mirror your real-world task distribution. Don't forget to factor in edge cases!" |
| C2 | Automate grading when possible (multiple choice, string match, code-graded, LLM-graded). | S1 | "Structure questions to allow for automated grading (for example, multiple-choice, string match, code-graded, LLM-graded)." |
| C3 | Volume over quality: more automated questions beat fewer hand-graded ones. | S1 | "More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| C4 | Edge cases: irrelevant or nonexistent input, overly long input, poor/harmful/irrelevant user input, ambiguous cases. | S1 | "Irrelevant or nonexistent input data" / "Overly long input data or user input" / "Poor, harmful, or irrelevant user input" / "Ambiguous test cases where even humans would find it hard to reach an assessment consensus" |
| C5 | Grading methods: code-based fastest and most reliable, lacks nuance; human flexible but slow and expensive, avoid if possible; LLM-based fast, flexible, test reliability first. | S1 | "Code-based grading: Fastest and most reliable, extremely scalable, but also lacks nuance" / "Human grading: Most flexible and high quality, but slow and expensive. Avoid if possible." / "LLM-based grading: Fast and flexible, scalable and suitable for complex judgment. Test to ensure reliability first, then scale." |
| C6 | LLM grading tips: detailed clear rubrics; be empirical (correct/incorrect or 1 to 5); encourage reasoning. | S1 | "Have detailed, clear rubrics" / "instruct the LLM to output only 'correct' or 'incorrect', or to judge from a scale of 1–5" / "Encourage reasoning" |
| C7 | Grade with a different model from the one that made the output. | S1 | "Generally best practice to evaluate with a different model from the one used to generate the evaluated output." |
| C8 | Even at temperature 0, outputs are not fully deterministic. | S2 | "Even with temperature set to 0, the results will not be fully deterministic, and identical inputs might produce different outputs across API calls." |
| C9 | promptfoo: CLI and library for evaluating and red-teaming LLM apps; test-driven LLM development; can run in CI/CD. | S3 | "CLI and library for evaluating and red-teaming LLM apps" / "test-driven LLM development" (CI/CD with a GitHub Action integration, as stated on the page) |
| C10 | Config file promptfooconfig.yaml with prompts, providers, tests (vars), assert; assertion types contains, equals, llm-rubric; variables in {{ }}; run with promptfoo eval. | S4 | "promptfooconfig.yaml" / "type: contains" / "type: llm-rubric" / "Write a {{item}}" / "promptfoo eval" |
| C11 | promptfoo eval returns exit code 100 when at least one test fails. | S5 | "will return exit code `100` when there is at least 1 test case failure" |
| C12 | PROMPTFOO_PASS_RATE_THRESHOLD sets a minimum pass rate percentage; default 100%. | S5 | "Set a minimum pass rate threshold (as a percentage). If not set, defaults to 100% (no failures allowed)" |
| C13 | --repeat runs each test a number of times. | S5 | "Number of times to run each test" |
| C14 | MLflow GenAI evaluation: evaluation datasets, scorers, built-in LLM-as-a-judge scorers; run with mlflow.genai.evaluate. | S6 | "Evaluation Datasets provide a centralized repository for managing test cases" / "built-in LLM-as-a-Judge scorers" / mlflow.genai.evaluate |
| C15 | Hugging Face Evaluate: a library for evaluating ML models and datasets. | S7 | "A library for easily evaluating machine learning models and datasets." |
| C16 | evaluate.load("accuracy"); a metric uses predictions and ground truth labels. | S8 | `accuracy = evaluate.load("accuracy")` / "A metric is used to evaluate a model's performance and usually involves the model's predictions as well as some ground truth labels." |

## Not on the page

No prices. No claim about which grader model is best. The 90 percent gate in the example and the 20 to 50 case starting size are the tutorial's own choices, not vendor rules. The page marks the case count as "the tutorial's own starting size".
