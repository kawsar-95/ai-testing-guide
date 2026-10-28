# Fact-check: content/ai-engineering/model-evaluation.mdx

Checked 2026-10-28 by an agent that did not write the page. All 4 sources were fetched fresh (HTML of S1–S3, PDF of S4 from arxiv.org/pdf/2306.05685). The quotes of the research notes were not trusted.

Sources: [1] Claude Platform docs, "Define success criteria and build evaluations". [2] OpenAI API docs, "Evaluation best practices". [3] Anthropic Engineering, "Demystifying evals for AI agents". [4] Zheng et al. 2023, "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (arXiv). All 4 are official or primary.

## Claims (Technical panels and code)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | An eval is a structured test that measures model or app performance | 2 | PASS | "Evals are structured tests for measuring a model's performance." |
| 2 | Generative AI is variable; same input, different outputs; classic tests not enough | 2 | PASS | "Generative AI is variable. Models sometimes produce different output from the same input, which makes traditional software testing methods insufficient" |
| 3 | "Eval" can mean 3 things: benchmarks (MMLU), standard scores (ROUGE), your own tests | 2 | PASS | "Industry benchmarks for comparing models in isolation, like MMLU ... Standard numerical scores—like ROUGE ... Specific tests you implement to measure your LLM application's performance" |
| 4 | Work starts with success criteria, then evals that measure against them | 1 | PASS | "Building a successful LLM-based application starts with clearly defining your success criteria and then designing evaluations to measure performance against them." |
| 5 | Good criteria: specific, measurable, achievable, relevant | 1 | PASS | Headings "Specific:", "Measurable:", "Achievable:", "Relevant:" |
| 6 | "Good performance" is not a criterion; "accurate sentiment classification" is | 1 | PASS | "Instead of "good performance," specify "accurate sentiment classification."" |
| 7 | Most apps need several criteria, for example accuracy, tone, latency | 1 | PASS | "Most use cases need multidimensional evaluation along several success criteria." The common criteria list has "Tone and style" and "Latency". |
| 8 | Mirror real use; edge cases: missing/irrelevant, long, harmful, humans disagree | 1 | PASS | "Design evals that mirror your real-world task distribution" / "Irrelevant or nonexistent input data / Overly long input data ... / Poor, harmful, or irrelevant user input / Ambiguous test cases where even humans would find it hard to reach an assessment consensus" |
| 9 | Many auto-graded questions beat a few hand-graded ones | 1 | PASS | "More questions with slightly lower signal automated grading is better than fewer questions with high-quality human hand-graded evals." |
| 10 | Log everything during development to mine eval cases | 2 | PASS | "Log as you develop so you can mine your logs for good eval cases." |
| 11 | Code grader: fastest, most reliable, very scalable; no nuance | 1 | PASS | "Code-based grading: Fastest and most reliable, extremely scalable, but also lacks nuance for more complex judgments" |
| 12 | Human grader: most flexible, high quality; slow, expensive | 1 | PASS | "Human grading: Most flexible and high quality, but slow and expensive." |
| 13 | LLM grader: fast, flexible, complex judgments; test reliability first | 1 | PASS | "LLM-based grading: Fast and flexible, scalable and suitable for complex judgment. Test to ensure reliability first, then scale." |
| 14 | Detailed rubric; fixed output correct/incorrect or 1 to 5 | 1 | PASS | "Have detailed, clear rubrics" / "instruct the LLM to output only 'correct' or 'incorrect', or to judge from a scale of 1–5" |
| 15 | Study found position, verbosity, self-enhancement biases | 4 | PASS | Abstract: "including position, verbosity, and self-enhancement biases" |
| 16 | Strong judges agree with humans over 80%, about as often as humans agree | 4 | PASS | "achieving over 80% agreement, the same level of agreement between humans" |
| 17 | Calibrate automated scores against human judgment | 2 | PASS | "Maintain agreement: Use human feedback to calibrate automated scoring." |
| 18 | Code: `anthropic.Anthropic()`, `client.messages.create(model="claude-opus-5-5", max_tokens=..., messages=[...])`, `next(b.text for b in msg.content if b.type == "text")` | 1 | PASS | S1 code: `client = anthropic.Anthropic()` ... `client.messages.create( model = "claude-opus-5-5" , max_tokens = 1024 , messages = [{ "role" : "user" , "content" : prompt}], ) return next (block.text ...` Same call shape and model ID. The comment "reads ANTHROPIC_API_KEY" is not in S1; it is the SDK default and a code comment, not a page claim. The cases and the 3-trial loop are the tutorial's own example. |
| 19 | Anthropic runs several trials because outputs vary | 3 | PASS | "Because model outputs vary between runs, we run multiple trials to produce more consistent results." |
| 20 | pass@k: at least 1 of k succeeds; rises with k | 3 | PASS | "pass@k measures the likelihood that an agent gets at least one correct solution in k attempts. As k increases, pass@k score rises" |
| 21 | pass^k: all k succeed; falls with k; 75% per trial gives about 42% for 3 of 3 | 3 | PASS | "pass^k measures the probability that all k trials succeed. As k increases, pass^k falls" / "75% per-trial success rate and you run 3 trials ... (0.75)³ ≈ 42%" |
| 22 | Capability evals start low; regression evals near 100% | 3 | PASS | "They should start at a low pass rate" / "Regression evals ask, "Does the agent still handle all the tasks it used to?" and should have a nearly 100% pass rate." |
| 23 | Continuous evaluation on every change | 2 | PASS | "Set up continuous evaluation (CE) to run evals on every change" |
| 24 | Support-agent example: state check, under 10 turns, tone rubric | 3 | PASS | "is the ticket resolved (state check), did it finish in <10 turns (transcript constraint), and was the tone appropriate (LLM rubric)?" The targets (95%, 90%, 4), 150 tasks and 50 human ratings are the tutorial's own invented example (the notes say so); the page frames them as the team's choices, not facts. |
| 25 | The outcome is the final state, not what the agent says | 3 | PASS | "The outcome is the final state in the environment at the end of the trial. A flight-booking agent might say "Your flight has been booked" ... but the outcome is whether a reservation exists". The refund wording is an analogy of this example. |
| 26 | Each prompt change must keep the regression set near 100% | 3 | PASS | See 22; "run regression evals to make sure changes don't cause issues elsewhere" |
| 27 | Vibe-based evals; waiting until launch | 2 | PASS | "Vibe-based evals: Using "it seems like it's working" as an evaluation strategy, or waiting until you ship before implementing any evals." |
| 28 | Only academic metrics (perplexity, BLEU) are not enough | 2 | PASS | "Overly generic metrics: Relying solely on academic metrics like perplexity or BLEU score." |
| 29 | Dataset that does not match production gives a false picture | 2 | PASS | "Biased design: Creating eval datasets that don't faithfully reproduce production traffic patterns." |
| 30 | Unchecked judge: position and verbosity biases; test against humans first | 4, 1 | PASS | S4 abstract (claim 15); S1 "Test to ensure reliability first, then scale." |
| 31 | One run per task hides flaky behavior | 3 | PASS | Claim 19; "pass^k ... especially matters for customer-facing agents where users expect reliable behavior every time." |
| 32 | Grade the outcome, not the words | 3 | PASS | Claim 25 |
| 33 | Judge with free text is hard to grade at scale | 1 | PASS | "Purely qualitative evaluations are hard to assess quickly and at scale." |
| 34 | Tester checks | none | PASS | Marked "These checks are the tutorial's own advice." |
| 35 | Key words table (eval, success criteria, grader, LLM-as-a-judge, trial, pass@k/pass^k, regression eval) | 2, 1, 3, 4, 3, 3, 3 | PASS | Same quotes as 1, 5, 19–22; S3 "A grader is logic that scores some aspect of the agent's performance"; S4 title and abstract "using strong LLMs as judges". |

## Other checks

- Out-of-date check: S2 says "OpenAI is deprecating the Evals platform ... Evals will become read-only for existing users on October 31, 2026, and the platform is scheduled to shut down on November 30, 2026." The page cites S2 only for general eval practice. It does not mention the Evals platform or the Evals API, and it does not tell readers to use them. PASS.
- Copy check (script, 8-word runs, page text vs S1–S4): the only runs are the code line `client.messages.create(model="claude-opus-5-5", max_tokens` (code, must match the docs) and the S4 paper title in `page.sources`. No prose run of 8 or more words. PASS.
- Every fact has a cite or is marked as the tutorial's own (example numbers, tester tips). PASS.

FAILs in round 1: 0. The voices report has 2 FAILs (self-enhancement explained in Layman and Bangla only). The fix added one sentence to Technical; it is checked below.

## Re-check (after the voices fix)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 15a | "Self-enhancement means that a judge may prefer answers that it wrote itself." | 4 | PASS | Paper body, section 3.3: "We adopt the term "self-enhancement bias" ... to describe the effect that LLM judges may favor the answers generated by themselves." The page keeps the hedge "may". Not a copy (longest shared run under 8 words). |

Open FAILs: 0
