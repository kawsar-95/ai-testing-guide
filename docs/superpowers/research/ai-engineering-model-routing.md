# AI Engineering page: Model Routing (research notes)

Writer notes for `content/ai-engineering/model-routing.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-mine/` (Claude docs as their `.md` versions, arXiv abstract pages as HTML). Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Choosing the right model (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/models/choosing-a-model | 2026-10-28 |
| S2 | Models overview (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/models/overview | 2026-10-28 |
| S3 | Optimizing for cost and intelligence (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence | 2026-10-28 |
| S4 | RouteLLM: Learning to Route LLMs with Preference Data, Ong et al. 2024 (arXiv 2406.18665) | https://arxiv.org/abs/2406.18665 | 2026-10-28 |
| S5 | FrugalGPT, Chen, Zaharia, Zou 2023 (arXiv 2305.05176) | https://arxiv.org/abs/2305.05176 | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Stronger models cost more; cheaper models are less capable. | S4 | "More powerful models, though effective, come with higher expenses, while less capable models are more cost-effective." |
| C2 | In its 2023 review of commercial LLM APIs (GPT-4, ChatGPT, ...), FrugalGPT found fees that differ by up to two orders of magnitude. Scope and date are stated on the page. | S5 | "We review the cost associated with querying popular LLM APIs, e.g. GPT-4, ChatGPT, J1-Jumbo, and find that these models have heterogeneous pricing structures, with fees that can differ by two orders of magnitude." (v1, 9 May 2023) |
| C3 | Criteria for choosing a model: capabilities, speed, cost. | S1 | "**Capabilities:** ..." / "**Speed:** ..." / "**Cost:** ..." |
| C4 | A router selects between a stronger and a weaker model per request. | S4 | "router models that dynamically select between a stronger and a weaker LLM during inference" |
| C5 | RouteLLM (2024): routers between GPT-4 and Mixtral-8x7B cut cost by over 2 times in some cases on public benchmarks such as MT Bench and MMLU, without loss of quality. Scope is stated on the page. | S4 | Abstract: "Our evaluation on widely-recognized benchmarks shows that our approach significantly reduces costs-by over 2 times in certain cases-without compromising the quality of responses." Full text (arxiv.org/html/2406.18665v4), section 1: "strong models ... (e.g., GPT-4), and ... weak models ... (e.g., Mixtral-8x7B)" and "evaluate them on widely recognized benchmarks such as MMLU ... and MT Bench ... reduce costs—by over 2x" |
| C6 | RouteLLM trains routers on human preference data. | S4 | "a training framework for these routers leveraging human preference data" |
| C7 | Model table: ids `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`; latency Moderate / Fast / Fastest; prices $4/$20, $2/$10, from $0.10/from $0.50 per MTok. | S2 | Comparison table rows "Comparative latency: ... Moderate | Fast | Fastest", "Pricing: $4 / input MTok, $20 / output MTok | $2 / input MTok, $10 / output MTok | From $0.10 / input MTok, From $0.50 / output MTok", "Claude API ID" row. |
| C8 | Haiku 5.5 is for the lowest latency and price: real-time apps, high-volume processing. | S1 | "The lowest latency and price | Claude Haiku 5.5 | Real-time applications, high-volume intelligent processing" / "High-volume, straightforward tasks" |
| C9 | FrugalGPT is a cascade that learns which LLM combinations to use for different queries. | S5 | "FrugalGPT, a simple yet flexible instantiation of LLM cascade which learns which combinations of LLMs to use for different queries" |
| C10 | Policy: run every task at a low setting, re-run only failures at a higher one. | S3 | "run every task at a low setting and re-run only the failures at a higher one." |
| C11 | It needs a failure signal, and failures cost extra wall-clock time. | S3 | "you need a failure signal" / "every first-pass failure takes two runs' worth of wall-clock time, so the saving is paid for in latency on the failures." |
| C12 | Compare models on cost per completed task, not per token. | S3 | "Compare models on cost per completed task, not per token, because you pay for completed tasks." |
| C13 | A failed task still bills its tokens, then the retry. | S3 | "a failed task still bills its tokens, then the retry" |
| C14 | Compare on the hardest tenth of tasks, not the typical one. | S3 | "compare models on the hardest tenth of your tasks, not the typical one." |
| C15 | A checker that passes bad work lets failures through. | S3 | "a checker that passes bad work lets those failures through." |
| C16 | Recheck model pairings at every model release. | S3 | "Recheck at every model release, because releases move both the capability gap and the price ratio." |
| C17 | A good evaluation set with real prompts and data is the most important step. | S1 | "Having a good evaluation set is the most important step in the process." / "Test with your actual prompts and data." |

## Not on the page

The rule-based router code, the support chatbot numbers (50,000 a day, 500 questions), and the "start with rules" advice are the tutorial's own. FrugalGPT's "up to 98% cost reduction" is not used, because it is one benchmark result from 2023.
