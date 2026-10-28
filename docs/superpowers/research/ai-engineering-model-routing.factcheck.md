# Fact-check: content/ai-engineering/model-routing.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 5 sources again: the 3 Claude docs pages as `.md`, the 2 arXiv abstract pages, and the RouteLLM full text (arxiv.org/html/2406.18665v4) for the benchmark scope. I did not trust the quotes of the research notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A stronger model costs more; a cheaper model is less capable | 4 | PASS | "More powerful models, though effective, come with higher expenses, while less capable models are more cost-effective." |
| 2 | Prices of different models can differ by two orders of magnitude | 5 | FAIL | The source says this about its own 2023 review of some commercial APIs: "We review the cost associated with querying popular LLM APIs, e.g. GPT-4, ChatGPT, J1-Jumbo, and find ... fees that can differ by two orders of magnitude." The page gave it as a general fact with no scope and no date. |
| 3 | The Claude docs name capability, speed, and cost as factors | 1 | PASS | "**Capabilities:** ...", "**Speed:** ...", "**Cost:** ..." |
| 4 | A router sends easy requests to a cheap model and hard ones to a strong model | 4 | PASS | "router models that dynamically select between a stronger and a weaker LLM during inference"; full text: "routing simpler queries to a weak model and reserving more complex queries for the strong model". |
| 5 | RouteLLM: cost cut of more than 2 times in some cases, no loss in quality | 4 | FAIL | The numbers match ("reduces costs-by over 2 times in certain cases-without compromising the quality of responses"), but the page did not say that this is a benchmark result of one 2024 paper (GPT-4 and Mixtral-8x7B on MT Bench, MMLU, GSM8K). Read alone, it is a general fact. |
| 6 | Model table: ids, comparative latency, prices of Opus 5.5, Sonnet 5.5, Haiku 5.5 | 2 | PASS | Overview table: "Moderate | Fast | Fastest"; "$4 / input MTok, $20 / output MTok | $2 / input MTok, $10 / output MTok | From $0.10 / input MTok, From $0.50 / output MTok"; "`claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5`". |
| 7 | Haiku 5.5 for lowest latency and price: real-time apps, high-volume work | 1 | PASS | "The lowest latency and price | Claude Haiku 5.5 | Real-time applications, high-volume intelligent processing". |
| 8 | Rule routers are cheap and easy to test | none | PASS | Tutorial's own description of its own approach (item 1 has no cite and is general design advice; the "Tutorial's own view" line follows). |
| 9 | RouteLLM trains routers on human preference data | 4 | PASS | "a training framework for these routers leveraging human preference data". |
| 10 | FrugalGPT is a cascade that learns which models to use for which queries | 5 | PASS | "FrugalGPT, a simple yet flexible instantiation of LLM cascade which learns which combinations of LLMs to use for different queries". |
| 11 | Anthropic: first try at a low setting, re-run only failures at a higher one | 3 | PASS | "run every task at a low setting and re-run only the failures at a higher one." |
| 12 | Needs a reliable failure signal; each failure costs extra time | 3 | PASS | "you need a failure signal"; "every first-pass failure takes two runs' worth of wall-clock time". |
| 13 | "Start with rules" | none | PASS | Marked "Tutorial's own view". |
| 14 | Code: model ids in `pick_model` | 2 | PASS | The 3 ids match the "Claude API ID" row. The rules are the tutorial's own example. |
| 15 | Compare on cost per completed task, not per token | 3 | PASS | "Compare models on cost per completed task, not per token, because you pay for completed tasks." |
| 16 | A failed task still costs its tokens, then the retry | 3 | PASS | "a failed task still bills its tokens, then the retry". |
| 17 | Example: Haiku for high-volume simple tasks | 1 | PASS | "High-volume, straightforward tasks" (list for the Haiku-first approach). |
| 18 | Example: retry on Opus after a failed check is a cascade | 5 | PASS | Matches the LLM cascade of claim 10. The numbers (50,000 a day, 500 questions) are a made-up example. |
| 19 | Example: look at cost per solved question | 3 | PASS | Same quote as claim 15. |
| 20 | Price models on the hardest 10 % of tasks | 3 | PASS | "compare models on the hardest tenth of your tasks, not the typical one." |
| 21 | A checker that passes bad work lets failures through | 3 | PASS | "a checker that passes bad work lets those failures through." |
| 22 | Check a model pairing again at every model release | 3 | PASS | "Recheck at every model release, because releases move both the capability gap and the price ratio." (Context: the advisor pairing of a cheap and a strong model in "Combine models". The page says "model pairing", so the scope matches.) |
| 23 | A good evaluation set with real prompts and data is the most important step | 1 | PASS | "Having a good evaluation set is the most important step in the process." / "Test with your actual prompts and data." |
| 24 | Tester tips | none | PASS | In a "Tutorial advice" callout that says they are the tutorial's own advice. |
| 25 | Key words rows (routing, router, cascade, cost per task, comparative latency, evaluation set) | 4, 4, 5, 3, 2, 1 | PASS | Same quotes as claims 4, 4, 10, 15-16, 6 ("Comparative latency: Relative to the current lineup"), 23. |

Source types: all 5 are official or primary (Anthropic docs, arXiv papers by their authors). Copy check: no run of 8 or more words copied from a source. The longest shared run is "re-run only the failures at a higher" (6 words, in a quote-like paraphrase) and "differed by up to two orders of magnitude" (shares 4 words).

## Re-check

| # | New text (Technical) | Verdict | Quote |
|---|---|---|---|
| 2 | "In its 2023 review of commercial LLM APIs such as GPT-4 and ChatGPT, the FrugalGPT paper found fees that differed by up to two orders of magnitude" | PASS | Abstract (v1, 9 May 2023): "We review the cost associated with querying popular LLM APIs, e.g. GPT-4, ChatGPT, J1-Jumbo, and find ... fees that can differ by two orders of magnitude." |
| 5 | "In the 2024 RouteLLM paper, routers that chose between GPT-4 and Mixtral-8x7B cut cost by more than 2 times in some cases on public benchmarks such as MT Bench and MMLU, with no loss in answer quality" | PASS | Abstract: "reduces costs-by over 2 times in certain cases-without compromising the quality of responses"; full text section 1: "strong models ... (e.g., GPT-4) ... weak models ... (e.g., Mixtral-8x7B)" and "evaluate them on widely recognized benchmarks such as MMLU ... and MT Bench ... reduce costs—by over 2x". v1 date: 26 Jun 2024. |

After the edits, `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts` reports no error for `model-routing`.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
