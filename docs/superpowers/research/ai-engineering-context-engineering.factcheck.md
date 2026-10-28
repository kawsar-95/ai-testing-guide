# Fact-check: content/ai-engineering/context-engineering.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched fresh (WebFetch, and a raw copy for the quote search and the copy check). The quotes of the research notes were not trusted. The raw text is not committed.

Cite map: [1] Anthropic Engineering, "Effective context engineering for AI agents"; [2] Claude docs, Context windows; [3] Claude docs, Prompt caching; [4] Claude docs, Token counting; [5] Liu et al., "Lost in the Middle", arXiv 2307.03172 (v1 6 Jul 2023, v3 20 Nov 2023, TACL 2023).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Context is the set of tokens the model sees when it generates | 1 | PASS | "Context refers to the set of tokens included when sampling from a large-language model (LLM)." |
| 2 | The context window is all text the model can use for a response, including the response | 2 | PASS | "all the text a language model can reference when generating a response, including the response itself" |
| 3 | It is a working memory, separate from the training data | 2 | PASS | "This is different from the large corpus of data the language model was trained on, and instead represents a “working memory” for the model." |
| 4 | Everything counts: system prompt, messages (tool results, images, documents), tool definitions, output | 2 | PASS | "Everything in the request counts toward the context window: the system prompt, every message in `messages` (including tool results, images, and documents), and your tool definitions. The output Claude generates for the turn ... counts too." |
| 5 | Context engineering: strategies to choose and keep the best tokens during inference | 1 | PASS | "the set of strategies for curating and maintaining the optimal set of tokens (information) during LLM inference" |
| 6 | Anthropic calls it the next step after prompt engineering | 1 | PASS | "we view context engineering as the natural progression of prompt engineering" |
| 7 | Prompt writing is one task; context engineering repeats each time the app decides what to send | 1 | PASS | "In contrast to the discrete task of writing a prompt, context engineering is iterative and the curation phase happens each time we decide what to pass to the model." |
| 8 | Accuracy and recall go down as tokens grow; Anthropic calls it context rot | 2 | PASS | "As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| 9 | Context is a finite resource with an "attention budget"; each new token uses some of it | 1 | PASS | "must be treated as a finite resource" / "LLMs have an “attention budget”" / "Every new token introduced depletes this budget by some amount" |
| 10 | A study found models often do best at the start or end, worse in the middle | 5 | FAIL, fixed | Abstract: "performance is often highest when relevant information occurs at the beginning or end of the input context, and significantly degrades when models must access relevant information in the middle of long contexts". The quote matches, but the page gave no scope. The study is from 2023 and tested the models of that time; the page said it in present tense as if it holds for all models. See Re-check. |
| 11 | Guiding rule: fewest tokens with the most useful signal, so the wanted result is most likely | 1 | PASS | "find the smallest set of high-signal tokens that maximize the likelihood of your desired outcome" |
| 12 | System prompt: clear, simple language at the right level; not brittle if-else, not vague guidance | 1 | PASS | "System prompts should be extremely clear and use simple, direct language that presents ideas at the right altitude for the agent." / "brittle if-else hardcoded prompts" / "vague, high-level guidance" |
| 13 | Tools: a minimal set with little overlap; if a human cannot say which tool, the model cannot | 1 | PASS | "minimal overlap in functionality" / "If a human engineer can’t definitively say which tool should be used in a given situation, an AI agent can’t be expected to do better." |
| 14 | Examples: a few diverse, typical examples, not a long list of edge cases | 1 | PASS | "stuff a laundry list of edge cases into a prompt" / "curate a set of diverse, canonical examples" |
| 15 | Retrieved data: load "just in time" with tools from light references (file paths, links) | 1 | PASS | "maintain lightweight identifiers (file paths, stored queries, web links, etc.) and use these references to dynamically load data into context at runtime using tools" |
| 16 | Token counting takes the same input as a message request and returns the input tokens | 4 | PASS | "accepts the same structured list of inputs for creating a message" / "The response contains the total number of input tokens." |
| 17 | Code: `import anthropic`, `anthropic.Anthropic()`, `client.messages.count_tokens(model="claude-opus-5-5", system=..., messages=[...])`, `count.input_tokens` | 4 | PASS | The Python example of the doc: `client = anthropic.Anthropic()` / `client.messages.count_tokens(model="claude-opus-5-5", system="You are a scientist", messages=[{"role": "user", "content": "Hello, Claude"}])`; output `{ "input_tokens": 14 }`. Same method, model id, and parameters. `SYSTEM_PROMPT` and `story_and_spec` are placeholders of the example. |
| 18 | Each response reports what it used in its `usage` field | 2 | PASS | "Every response reports what the request consumed in its `usage` field." |
| 19 | Prompt caching reuses a prefix and cuts processing time and cost | 3 | PASS | "allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs" |
| 20 | Prefix order `tools`, `system`, `messages` | 3 | PASS | "Cache prefixes are created in the following order: `tools`, `system`, then `messages`." |
| 21 | Default cache life 5 minutes, each use refreshes it | 3 | PASS | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| 22 | Put the stable parts first, the changing parts last | 3 | PASS | "Place static content (tool definitions, system instructions, context, examples) at the beginning of your prompt." |
| 23 | Long tasks: three techniques (compaction, note-taking, sub-agents) | 1 | PASS | "compaction, structured note-taking, and multi-agent architectures" |
| 24 | Compaction: summarize near the limit, start a new window with the summary; tool result clearing is the lightest form | 1 | PASS | "taking a conversation nearing the context window limit, summarizing its contents, and reinitiating a new context window with the summary" / "One of the safest lightest touch forms of compaction is tool result clearing" |
| 25 | Note-taking: notes outside the window, read back later | 1 | PASS | "the agent regularly writes notes persisted to memory outside of the context window. These notes get pulled back into the context window at later times." |
| 26 | Sub-agents: clean window, short summary, often 1,000 to 2,000 tokens | 1 | PASS | "specialized sub-agents can handle focused tasks with clean context windows" / "a condensed, distilled summary of its work (often 1,000-2,000 tokens)" |
| 27 | Example steps 1 and 2: stable prefix first so caching can reuse it; changing story last | 3 | PASS | Same quotes as 20 and 22. The test-case generator is the tutorial's own invented example. |
| 28 | Example step 3: just-in-time tool | 1 | PASS | Same quote as 15. |
| 29 | Example step 4: count tokens before each call | 4 | PASS | Same quote as 16. |
| 30 | Example step 5: key text at the end, not in the middle | 5 | PASS | Advice based on claim 10. The step does not claim a new result. |
| 31 | Example last line marked "Tutorial's own view" | none | PASS | Marked as the tutorial's own view. |
| 32 | Mistake: a bigger (1M) window does not mean better answers; accuracy and recall fall | 2 | PASS | "up to 1M tokens, depending on the model" / "more context isn’t automatically better. As token count grows, accuracy and recall degrade" |
| 33 | Mistake: models often miss information in the middle of a long context | 5 | FAIL, fixed | Same source as 10. The present-tense general claim had no 2023 scope. See Re-check. |
| 34 | Mistake: laundry list of edge cases; advise a few typical examples | 1 | PASS | Same quote as 14. |
| 35 | Mistake: too many overlapping tools; the model cannot pick | 1 | PASS | "bloated tool sets that cover too much functionality or lead to ambiguous decision points about which tool to use" |
| 36 | Mistake: a timestamp at the top changes the prefix, so the cache cannot be reused | 3 | PASS | The doc's example: "The timestamp differs, so the prefix hash at block 6 differs. ... No cache hit." and "For a prompt with a varying suffix (timestamps, per-request context, the incoming message), place the breakpoint at the end of the static prefix". |
| 37 | Mistake: too aggressive a summary can lose context whose value shows later | 1 | PASS | "overly aggressive compaction can result in the loss of subtle but critical context whose importance only becomes apparent later" |
| 38 | Mistake: a raw result deep in the history rarely helps again | 1 | PASS | "once a tool has been called deep in the message history, why would the agent need to see the raw result again?" |
| 39 | Tester checks | none | PASS | In a "Tutorial advice" callout that says "These checks are the tutorial's own advice." No cites. |
| 40 | Key words table (7 rows) | 1-4 | PASS | Each row repeats a claim above with the same cite (1, 2, 8, 15, 24, 19, 16). |

Source quality: [1] is Anthropic's own engineering article (vendor primary). [2]-[4] are official Claude docs. [5] is the paper on arXiv by its authors. No blog, forum, wiki, or AI summary. PASS.

Copy check (`scripts/linux_overlap.py`, 8-word runs, page vs all 5 sources): 2 runs found, both in the `page.sources` title of [5] ("Lost in the Middle: How Language Models Use Long Contexts"). A source title is a reference, not page prose. PASS.

## Re-check (after the fixes)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 10 | "A 2023 study found that the models of that time often did best when the relevant text was at the start or the end of the input, and worse when it was in the middle of a long context. The study did not test current models." | 5 | PASS | arXiv page: v1 "6 Jul 2023", "Accepted for publication in Transactions of the Association for Computational Linguistics (TACL), 2023". The abstract quote of row 10 supports the result. The scope (2023, the models of that time) is now on the page. |
| 33 | "In a 2023 study, models often missed information in the middle of a long context." | 5 | PASS | Same quotes as row 10. Past tense and the year scope the claim. |

Copy check again after the fixes: the same 2 title runs only. PASS.

Open FAILs: 0
