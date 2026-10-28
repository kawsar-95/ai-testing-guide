# Fact check: ai-concepts/evals (Technical text)

Checked 2026-10-28 by an agent that did not write the page. Each source was opened live (WebFetch). The quotes come from the live pages, not from the research notes.

## Sources

| n | Source | Status | Official / primary |
|---|---|---|---|
| 1 | anthropic.com/engineering/demystifying-evals-for-ai-agents | 200 | Yes (Anthropic Engineering) |
| 2 | platform.claude.com/docs/en/test-and-evaluate/develop-tests | 200 | Yes (Anthropic docs) |
| 3 | developers.openai.com/api/docs/guides/agent-evals | 200 | Yes (OpenAI docs) |
| 4 | airc.nist.gov/airmf-resources/airmf/5-sec-core/ | 200 | Yes (NIST) |

Every source has a cite on the page, and every cite number (1-4) has a source.

## Claims

| # | Section | Claim | Cite | Verdict | Quote |
|---|---|---|---|---|---|
| 1 | In plain words | An eval is a test: an input, then grading logic on the output to measure success | 1 | PASS | "a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." |
| 2 | In plain words | Task = one test with defined inputs and success criteria | 1 | PASS | "is a single test with defined inputs and success criteria." |
| 3 | In plain words | Trial = one attempt at a task | 1 | PASS | "Each attempt at a task is a trial." |
| 4 | In plain words | Grader = logic that scores one aspect of the run | 1 | PASS | "is logic that scores some aspect of the agent's performance." |
| 5 | In plain words | Transcript (trace) = complete record of a trial | 1 | PASS | "is the complete record of a trial, including outputs, tool calls, reasoning, intermediate results" |
| 6 | In plain words | Outcome = final state of the environment at the end | 1 | PASS | "The outcome is the final state in the environment at the end of the trial." |
| 7 | In plain words | Harness = the system that runs evals end to end | 1 | PASS | "is the infrastructure that runs evals end-to-end." |
| 8 | In plain words | Model outputs vary between runs, so run each task more than once | 1 | PASS | "Because model outputs vary between runs, we run multiple trials to produce more consistent results." |
| 9 | In plain words | Success criteria: specific, measurable, achievable, relevant | 2 | PASS | Headings with "Clearly define what you want to achieve.", "Use quantitative metrics or well-defined qualitative scales.", "Align your criteria with your application's purpose and user needs." |
| 10 | In plain words | Most uses need several criteria: task fidelity, consistency, privacy, latency, price | 2 | PASS | "Most use cases need multidimensional evaluation along several success criteria." The list has task fidelity, consistency, privacy preservation, latency, price. |
| 11 | In plain words | NIST: test before deployment and regularly while in operation | 4 | PASS | "AI systems should be tested before their deployment and regularly while in operation." (5.3 Measure) |
| 12 | How it works | 20 to 50 simple tasks from real failures is a good start | 1 | PASS | "20-50 simple tasks drawn from real failures is a great start." |
| 13 | How it works | Mirror the real task mix; edge cases: missing or irrelevant, very long, harmful input, cases where people disagree | 2 | PASS | "Design evals that mirror your real-world task distribution. Don't forget to factor in edge cases!" / "Irrelevant or nonexistent input data" / "Overly long input data or user input" / "Poor, harmful, or irrelevant user input" / "Ambiguous test cases where even humans would find it hard to reach an assessment consensus" |
| 14 | How it works | Each trial starts from a clean environment | 1 | PASS | "Each trial should be "isolated" by starting from a clean environment." |
| 15 | How it works | Code-based grader: fast, cheap, objective, reproducible; brittle to valid variations | 1 | PASS | Table: "Fast", "Cheap", "Objective", "Reproducible"; "Brittle to valid variations that don't match expected patterns exactly" |
| 16 | How it works | Model-based grader: flexible, nuance; non-deterministic; needs calibration with humans | 1 | PASS | "Flexible", "Captures nuance", "Non-deterministic", "Requires calibration with human graders for accuracy" |
| 17 | How it works | Human grader: gold standard, slow, expensive | 1 | PASS | "Gold standard quality"; "Slow"; "Expensive" |
| 18 | How it works | LLM judge: detailed rubric, specific output ("correct"/"incorrect" or 1-5), reason before scoring | 2 | PASS | "Have detailed, clear rubrics" / "instruct the LLM to output only 'correct' or 'incorrect', or to judge from a scale of 1–5" / "so that it reasons before it produces an evaluation score" |
| 19 | How it works | Best practice: grade with a different model | 2 | PASS | "Generally best practice to evaluate with a different model from the one used to generate the evaluated output." |
| 20 | How it works | A trace records model calls, tool calls, guardrails, handoffs | 3 | PASS | "A trace captures the end-to-end record of model calls, tool calls, guardrails, and handoffs for one run." |
| 21 | How it works | Trace grading checks the right tool and instruction or safety policy breaks | 3 | PASS | "Did the agent pick the right tool?" / "Did the workflow violate an instruction or safety policy?" |
| 22 | How it works | Often better to grade what the agent produced, not the path | 1 | PASS | "it's often better to grade what the agent produced, not the path it took." |
| 23 | How it works | Move from single traces to repeatable datasets and eval runs | 3 | PASS | "move from individual traces to repeatable datasets and eval runs." |
| 24 | How it works | Capability eval starts low; regression eval nearly 100 %, runs continuously, e.g. CI/CD | 1 | PASS | "should start at a low pass rate" / "should have a nearly 100% pass rate." / "run continuously to catch any drift" / "especially useful pre-launch and in CI/CD" |
| 25 | How it works | Task bank tracks latency, token usage, cost per task, error rates | 1 | PASS | "latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks." |
| 26 | Trade-offs | pass@k = at least one correct in k attempts | 1 | PASS | "measures the likelihood that an agent gets at least one correct solution in" k attempts |
| 27 | Trade-offs | pass^k = all k trials succeed | 1 | PASS | "measures the probability that all k trials succeed." |
| 28 | Trade-offs | 75 % per trial gives about 42 % for 3 of 3 ((0.75)³) | 1 | PASS | "the probability of passing all three is (0.75)³ ≈ 42%." (0.421875) |
| 29 | Trade-offs | pass^k for customer-facing agents; pass@k where one success is enough | 1 | PASS | "This metric especially matters for customer-facing agents" / "pass@k for tools where one success matters" |
| 30 | Trade-offs | More questions with weaker automated grading beat fewer hand-graded | 2 | PASS | "More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| 31 | Trade-offs | Pick fastest, most reliable, most scalable method; human grading slow and expensive, avoid | 2 | PASS | "choose the fastest, most reliable, most scalable method" / "Most flexible and high quality, but slow and expensive. Avoid if possible." |
| 32 | Trade-offs | Test an LLM grader for reliability before scaling | 2 | PASS | "Test to ensure reliability first, then scale." |
| 33 | Trade-offs | Strict code check reproducible but can fail a valid answer; model judge accepts variations but varies | 1 | PASS | Same quotes as rows 15-16 |
| 34 | Trade-offs | Many teams combine them; no single layer catches every issue | 1 | PASS | "The most effective teams combine these methods" / "no single evaluation layer catches every issue." |
| 35 | Example | Labeled "This is an invented example." | - | PASS | Invented numbers (30 tasks, 10 traps, 5 runs, 90 %) are inside the example. |
| 36 | Example | 30 tasks is inside the 20-50 start range | 1 | PASS | See row 12 |
| 37 | Example | Fresh checkout per trial | 1 | PASS | See row 14 |
| 38 | Example | Judge with rubric answers only "correct"/"incorrect" | 2 | PASS | See row 18 |
| 39 | Example | A person grades a sample to check the judge | 1 | PASS | See row 16 (calibration with human graders) |
| 40 | Example | pass^5 for traps (must be right every time) | 1 | PASS | See row 29 |
| 41 | Example | Safety-rule break is a trace-grading case | 3 | PASS | See row 21 |
| 42 | Example | Tasks become a regression suite in CI | 1 | PASS | See row 24 |
| 43 | Common mistakes | 0 % pass across many trials is most often a broken task; unclear spec is noise | 1 | PASS | "is most often a signal of a broken task, not an incapable agent" / "Ambiguity in task specifications becomes noise in metrics." |
| 44 | Common mistakes | Fixed-path grader fails valid solutions; grade the product | 1 | PASS | See row 22 |
| 45 | Common mistakes | Judge needs calibration; read transcripts and grades of many trials | 1 | PASS | "You won't know if your graders are working well unless you read the transcripts and grades from many trials." |
| 46 | Common mistakes | One-sided evals create one-sided optimization | 1 | PASS | "One-sided evals create one-sided optimization." |
| 47 | Common mistakes | Add harmful or ambiguous input | 2 | PASS | See row 13 |
| 48 | Common mistakes | Clean environment per trial | 1 | PASS | See row 14 |
| 49 | Common mistakes | Test before deployment and regularly; document test sets, metrics, tools | 4 | PASS | See row 11; MEASURE 2.1: "Test sets, metrics, and details about the tools used during TEVV are documented." |

## Other checks

| Check | Verdict |
|---|---|
| "What a tester can check" is a "Tutorial advice" tip, says it is the tutorial's own advice, and has no cites (all 3 voices) | PASS |
| The example says it is invented (all 3 voices) | PASS |
| Key words: "Golden set" is marked as the tutorial's own name | PASS |
| Key words "Transcript (trace) ... with model calls and tool calls" matches sources 1 and 3 | PASS |

Open FAILs: 0
