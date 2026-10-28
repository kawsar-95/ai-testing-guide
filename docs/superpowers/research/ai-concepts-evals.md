# Research notes: AI Concepts, Evals (`/ai-concepts/evals/`)

Accessed 2026-10-28. The topic comes from a third-party infographic. No text of the infographic is used. Its claims are a seed only.

## Sources

| Id | Title | Publisher | URL |
|---|---|---|---|
| S1 | Demystifying evals for AI agents (9 Jan 2026) | Anthropic Engineering | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| S2 | Define success criteria and build evaluations | Claude Developer Platform docs (Anthropic) | https://platform.claude.com/docs/en/test-and-evaluate/develop-tests |
| S3 | Evaluate agent workflows | OpenAI API docs | https://developers.openai.com/api/docs/guides/agent-evals |
| S4 | AI RMF Core (AI RMF 1.0, section 5) | NIST | https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ |

Note: the old URL `platform.claude.com/docs/en/test-and-evaluate/define-success` now shows the same page as S2 (title "Define success criteria and build evaluations"), so the page cites S2 once.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | An eval is a test for an AI system: an input, then grading logic on the output. | S1 | "a test for an AI system: give an AI an input, then apply grading logic to its output to measure success." |
| C2 | A task is one test with inputs and success criteria. | S1 | "is a single test with defined inputs and success criteria." |
| C3 | Each attempt is a trial. | S1 | "Each attempt at a task is a trial." |
| C4 | A grader scores some aspect of performance. | S1 | "logic that scores some aspect of the agent's performance." |
| C5 | A transcript (trace) is the complete record of a trial. | S1 | "the complete record of a trial." |
| C6 | The outcome is the final state of the environment. | S1 | "the final state in the environment at the end of the trial." |
| C7 | The harness runs evals end to end. | S1 | "the infrastructure that runs evals end-to-end." |
| C8 | Code-based graders: fast, cheap, objective, reproducible; brittle to valid variations. | S1 | "Fast," "Cheap," "Objective," "Reproducible" / "Brittle to valid variations that don't match expected patterns exactly." |
| C9 | Model-based graders: flexible, scalable, capture nuance; non-deterministic, need calibration with humans. | S1 | "Non-deterministic" / "Requires calibration with human graders for accuracy." |
| C10 | Human graders: gold standard; expensive, slow. | S1 | "Gold standard quality." / "Expensive" / "Slow." |
| C11 | Claude docs: choose the fastest, most reliable, most scalable method; human grading "Avoid if possible"; LLM grading: test reliability first, then scale. | S2 | "Most flexible and high quality, but slow and expensive. Avoid if possible." / "Test to ensure reliability first, then scale." |
| C12 | LLM grader tips: detailed rubrics, specific output (correct/incorrect or 1-5), reasoning before score. | S2 | "Have detailed, clear rubrics" / "instruct the LLM to output only 'correct' or 'incorrect', or to judge from a scale of 1–5" / "Encourage reasoning" |
| C13 | Best practice: grade with a different model from the one that made the output. | S2 | "Generally best practice to evaluate with a different model from the one used to generate the evaluated output." |
| C14 | pass@k: at least one success in k tries. pass^k: all k trials succeed. | S1 | "measures the likelihood that an agent gets at least one correct solution in k attempts." / "measures the probability that all k trials succeed." |
| C15 | 75 % per trial, 3 trials: all three pass about 42 %. | S1 | "the probability of passing all three is (0.75)³ ≈ 42%." |
| C16 | Model outputs vary between runs, so run several trials. | S1 | "model outputs vary between runs" |
| C17 | Often grade what the agent produced, not the path. | S1 | "it's often better to grade what the agent produced, not the path it took." |
| C18 | Read transcripts to know graders work. | S1 | "You won't know if your graders are working well unless you read the transcripts and grades from many trials." |
| C19 | Start with 20-50 simple tasks from real failures. | S1 | "20-50 simple tasks drawn from real failures is a great start." |
| C20 | Each trial starts from a clean environment. | S1 | "Each trial should be "isolated" by starting from a clean environment." |
| C21 | 0 % across many trials usually means a broken task; ambiguity becomes noise. | S1 | "a 0% pass rate across many trials (i.e. 0% pass@100) is most often a signal of a broken task." / "Ambiguity in task specifications becomes noise in metrics." |
| C22 | Capability evals start low; regression evals near 100 %, run continuously; useful in CI/CD. | S1 | "have a nearly 100% pass rate." / "is run continuously to catch any drift." / "especially useful pre-launch and in CI/CD." |
| C23 | Latency, tokens, cost per task, error rates can be tracked. | S1 | "latency, token usage, cost per task, and error rates can be tracked on a static bank of tasks." |
| C24 | Balanced sets: one-sided evals give one-sided optimization. | S1 | "One-sided evals create one-sided optimization." |
| C25 | No single layer catches every issue. | S1 | "no single evaluation layer catches every issue." |
| C26 | Success criteria: specific, measurable, achievable, relevant. Most cases need several criteria (e.g. task fidelity, consistency, privacy, latency, price). | S2 | "Most use cases need multidimensional evaluation along several success criteria." |
| C27 | Eval design: task-specific with edge cases; automate when possible; volume over quality. | S2 | "Design evals that mirror your real-world task distribution. Don't forget to factor in edge cases!" / "More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| C28 | Edge cases: irrelevant input, overly long input, harmful input, ambiguous cases. | S2 | "Irrelevant or nonexistent input data" / "Overly long input data or user input" / "Poor, harmful, or irrelevant user input" |
| C29 | OpenAI: a trace records model calls, tool calls, guardrails, handoffs for one run. | S3 | "the end-to-end record of model calls, tool calls, guardrails, and handoffs for one run." |
| C30 | Trace grading checks right tool, handoff, instruction or safety policy. | S3 | page text (paraphrase confirmed): right tool, handoff when it should, broke an instruction or safety policy |
| C31 | Then move to repeatable datasets and eval runs. | S3 | "move from individual traces to repeatable datasets and eval runs." |
| C32 | NIST: test before deployment and regularly in operation. | S4 | "AI systems should be tested before their deployment and regularly while in operation." |
| C33 | NIST: document test sets, metrics, tools. | S4 | "Test sets, metrics, and details about the tools used during TEVV are documented." |
| C34 | NIST: show the system is valid and reliable, and safe. | S4 | "demonstrated to be valid and reliable." / "demonstrated to be safe" |

## Infographic seed: checks and corrections

| Seed point | Verdict |
|---|---|
| real tasks → agent run + trace → graders → pass/fail | Supported (C2, C5, C7, C19). |
| "Grade the whole agent run, not just the final answer" | Partly corrected. S1 says it is often better to grade the outcome, not the exact path (C17), because agents find valid paths that a fixed script does not expect. The page says: read the trace to find why a run failed and to check rules such as tool choice or safety (C29, C30), but do not fail a run only because it took a different valid path. |
| Code checks, LLM judge, human spot-check | Supported (C8-C10). Nuance added: S2 says to avoid human grading when possible because it is slow (C11); S1 calls it the gold standard and says model graders need calibration with humans (C9). So the page uses humans to calibrate and spot-check, not to grade every run. |
| pass/fail → "right every time?" | Supported as pass^k (C14, C15). Pass/fail is not the only score: S1 also recommends partial credit for multi-part tasks (not on the page). |
| Measure accuracy, safety, cost, task success | Supported with different words: success criteria and multidimensional evaluation (C26), safety policy in trace grading (C30), cost and latency (C23), NIST safe/valid/reliable (C34). |
