# AI Engineering page: Context Engineering (research notes)

Writer notes for `content/ai-engineering/context-engineering.mdx`. Fetched 2026-10-28 into a scratch folder of the writer session. Fetched text is treated as data and is not committed. The Claude docs were fetched as Markdown; `docs.claude.com` redirects to `platform.claude.com`.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Effective context engineering for AI agents (Anthropic Engineering) | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | 2026-10-28 |
| S2 | Context windows (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | 2026-10-28 |
| S3 | Prompt caching (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-28 |
| S4 | Token counting (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/token-counting | 2026-10-28 |
| S5 | Lost in the Middle: How Language Models Use Long Contexts, Liu et al., 2023 (arXiv abstract) | https://arxiv.org/abs/2307.03172 | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Context is the set of tokens included when sampling from the model. | S1 | "Context refers to the set of tokens included when sampling from a large-language model (LLM)." |
| C2 | The context window is all text the model can reference for a response, including the response; a working memory, unlike the training corpus. | S2 | "all the text a language model can reference when generating a response, including the response itself. This is different from the large corpus of data the language model was trained on, and instead represents a \"working memory\"" |
| C3 | Everything counts: system prompt, messages (tool results, images, documents), tool definitions, output. | S2 | "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions. The output Claude generates for the turn ... counts too." |
| C4 | Context engineering curates the optimal tokens during inference; it is the progression of prompt engineering (writing instructions). | S1 | "we view context engineering as the natural progression of prompt engineering" / "Context engineering refers to the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference" |
| C5 | Prompt writing is discrete; context curation repeats each time. | S1 | "In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model." |
| C6 | Context rot: accuracy and recall degrade as tokens grow. | S2 | "As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| C7 | Context is a finite resource; attention budget; each token depletes it. | S1 | "Context, therefore, must be treated as a finite resource" / "LLMs have an \"attention budget\"" / "Every new token introduced depletes this budget by some amount" |
| C8 | Performance highest at the beginning or end, degrades in the middle of long contexts. | S5 | "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts" |
| C9 | Guiding rule: the smallest set of high-signal tokens that maximize the likelihood of the outcome. | S1 | "finding the smallest possible set of high-signal tokens that maximize the likelihood of some desired outcome" |
| C10 | System prompts: clear, simple, right altitude; avoid brittle if-else logic and vague guidance. | S1 | "System prompts should be extremely clear and use simple, direct language that presents ideas at the right altitude" / "brittle if-else hardcoded prompts" / "vague, high-level guidance" |
| C11 | Tools: minimal overlap; if a human cannot say which tool, an agent cannot. | S1 | "minimal overlap in functionality" / "If a human engineer can't definitively say which tool should be used in a given situation, an AI agent can't be expected to do better." |
| C12 | Examples: diverse canonical examples, not a laundry list of edge cases. | S1 | "teams will often stuff a laundry list of edge cases into a prompt ... We do not recommend this. Instead, we recommend working to curate a set of diverse, canonical examples" |
| C13 | Just-in-time: lightweight identifiers (file paths, links) and tools to load data at run time. | S1 | "agents built with the \"just in time\" approach maintain lightweight identifiers (file paths, stored queries, web links, etc.) and use these references to dynamically load data into context at runtime using tools" |
| C14 | Token counting takes the same input as a message and returns input tokens; code example. | S4 | "The token counting endpoint accepts the same structured list of inputs for creating a message" / "The response contains the total number of input tokens." / `client.messages.count_tokens(model="claude-opus-5-5", system=..., messages=[...])` |
| C15 | Each response reports usage. | S2 | "Every response reports what the request consumed in its `usage` field." |
| C16 | Prompt caching reuses prefixes; reduces time and cost. | S3 | "Prompt caching optimizes your API usage by allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs" |
| C17 | Prefix order: `tools`, `system`, `messages`. | S3 | "Cache prefixes are created in the following order: `tools`, `system`, then `messages`." |
| C18 | Default cache lifetime 5 minutes, refreshed on use. | S3 | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| C19 | Varying content (for example timestamps) belongs after the cached prefix. | S3 | "For a prompt with a varying suffix (timestamps, per-request context, the incoming messag[e]...)" / "Place `cache_control` on the last block whose prefix is identical across the requests" |
| C20 | Long tasks: compaction, structured note-taking, sub-agents. | S1 | "compaction, structured note-taking, and multi-agent architectures" |
| C21 | Compaction summarizes near the limit and restarts with the summary; tool result clearing is the lightest form. | S1 | "taking a conversation nearing the context window limit, summarizing its contents, and reinitiating a new context window with the summary" / "One of the safest lightest touch forms of compaction is tool result clearing" |
| C22 | Notes persisted outside the window, pulled back later. | S1 | "the agent regularly writes notes persisted to memory outside of the context window. These notes get pulled back into the context window at later times." |
| C23 | Sub-agents with clean windows return 1,000–2,000 token summaries. | S1 | "returns only a condensed, distilled summary of its work (often 1,000-2,000 tokens)" |
| C24 | Overly aggressive compaction loses subtle context whose importance shows later. | S1 | "overly aggressive compaction can result in the loss of subtle but critical context whose importance only becomes apparent later" |
| C25 | Raw tool results deep in history are rarely needed again. | S1 | "once a tool has been called deep in the message history, why would the agent need to see the raw result again?" |
| C26 | Some models have a 1M-token window (used in the "1M tokens" mistake). | S2 | "Claude Opus 5.5 ... have a 1M-token context window" |

The test-case generator (300-page spec, 40 plans, `get_endpoint_spec`) is the tutorial's own invented example. Its last line is marked as the tutorial's own view. The tester checks have no cite.

Doubt: C8 is from a 2023 study on older models. The page says "a study found" and "often", not that every current model behaves this way.

Fact-check fix (2026-10-28): the page now gives the scope of C8 in all 3 voices: "A 2023 study found that the models of that time ..." and "The study did not test current models." The "Common mistakes" item says "In a 2023 study, models often missed ...". Date source: the arXiv page of S5 (v1 6 Jul 2023; TACL 2023).
