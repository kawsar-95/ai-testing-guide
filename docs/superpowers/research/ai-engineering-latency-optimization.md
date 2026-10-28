# AI Engineering page: Latency Optimization (research notes)

Writer notes for `content/ai-engineering/latency-optimization.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-mine/` (Claude docs as their `.md` versions, the OpenAI guide as HTML turned into text). Fetched text is treated as data and is not committed.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Reducing latency (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency | 2026-10-28 |
| S2 | Prompt caching (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | 2026-10-28 |
| S3 | Streaming messages (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/streaming | 2026-10-28 |
| S4 | Batch processing (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/batch-processing | 2026-10-28 |
| S5 | Latency optimization (OpenAI API docs) | https://developers.openai.com/api/docs/guides/latency-optimization | 2026-10-28 |
| S6 | Python SDK (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/sdks/python | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Latency is the time to process a prompt and generate output; model size, prompt complexity, and infrastructure affect it. | S1 | "Latency refers to the time it takes for the model to process a prompt and generate an output. Latency can be influenced by various factors, such as the size of the model, the complexity of the prompt, and the underlying infrastructure" |
| C2 | Baseline latency and TTFT definitions; TTFT matters most with streaming. | S1 | "**Baseline latency:** This is the time taken by the model to process the prompt and generate the response" / "**Time to first token (TTFT):** ... from when the prompt was sent. It's particularly relevant when you're using streaming" |
| C3 | Make the prompt work first, then reduce latency; early reduction can hide top performance. | S1 | "It's always better to first engineer a prompt that works well without model or prompt constraints, and then try latency reduction strategies afterward." / "might prevent you from discovering what top performance looks like." |
| C4 | For speed-critical apps, Claude Haiku 5.5. | S1 | "For speed-critical applications, **Claude Haiku 5.5** offers the fastest response times" |
| C5 | Cutting 50% of output tokens may cut ~50% of latency; cutting 50% of the prompt may give 1–5%. | S5 | "cutting 50% of your output tokens may cut ~50% of your latency" / "cutting 50% of your prompt may only result in a 1–5% latency improvement" |
| C6 | Ask for concise answers; `max_tokens` is a hard limit. | S1 | "Ask Claude directly to be concise." / "Use the `max_tokens` parameter to set a hard limit on the maximum length of the generated response." |
| C7 | `"stream": true` streams the response with server-sent events. | S3 | "you can set `\"stream\": true` to incrementally stream the response using server-sent events (SSE)." |
| C8 | Streaming improves perceived responsiveness; users see output in real time. | S1 | "This can significantly improve the perceived responsiveness of your application, as users can see the model's output in real time." |
| C9 | Code: `client.messages.stream(...)` and `stream.text_stream`; model id `claude-haiku-5-5`. | S3, S1 | S3 Python example: `with client.messages.stream(` / `for text in stream.text_stream:`. S1's code example uses `claude-haiku-5-5`. |
| C10 | Prompt caching reuses a prefix; reduces processing time and cost. | S2 | "allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs" |
| C11 | The prefix covers `tools`, `system`, `messages` in that order, up to the `cache_control` block. | S2 | "Prompt caching references the entire prompt: `tools`, `system`, and `messages` (in that order), up to and including the block designated with `cache_control`." |
| C12 | Default cache lifetime 5 minutes, refreshed on each use. | S2 | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| C13 | Minimum cacheable length 512 tokens for Claude Haiku 5.5; shorter prompts are not cached and no error is returned. | S2 | "512 tokens for ... Claude Haiku 5.5" / "Shorter prompts cannot be cached, even if marked with `cache_control`. ... no error is returned." |
| C14 | If `cache_creation_input_tokens` and `cache_read_input_tokens` are both 0, the prompt was not cached. | S2 | "if both `cache_creation_input_tokens` and `cache_read_input_tokens` are 0, the prompt was not cached" |
| C15 | A changing value (timestamp) in the prefix gives no cache hit; a hit needs the same prefix. | S2 | "The timestamp differs, so the prefix hash at block 6 differs. ... No cache hit." / "On subsequent requests with the same prefix, cached content is reused automatically." |
| C16 | Run independent steps in parallel; sequential steps can be combined to make fewer requests, since each request adds round-trip latency. | S5 | "If the steps are not strictly sequential, you can split them out into parallel calls." / "Each time you make a request, you incur some round-trip latency" |
| C17 | Speculative execution: start steps 1 and 2 together, cancel step 2 if step 1 fails. | S5 | "Start step 1 and step 2 simultaneously (for example, input moderation and story generation)" / "If result was not the expected, cancel step 2" |
| C18 | Streaming cuts the waiting time to a second or less. | S5 | "Streaming: The single most effective approach, as it cuts the waiting time to a second or less." |
| C19 | The Python SDK has `AsyncAnthropic`. | S6 | `from anthropic import AsyncAnthropic` |
| C20 | Batches: 50% lower cost, most finish within 1 hour, up to 24 hours; for work without immediate need. | S4 | "most batches finishing in less than 1 hour while reducing costs by 50 percent" / "Batches expire if processing does not complete within 24 hours." / "well-suited to tasks that do not require immediate responses" |
| C21 | At `max_tokens` the answer is cut mid-sentence or mid-word. | S1 | "the response will be cut off, perhaps mid-sentence or mid-word" |

## Not on the page

The HR assistant numbers (6,000 tokens, 9 s) and the tester checks are the tutorial's own. The fact-check removed the sentence "It does not lower latency" (S4 does not say it). The page now states only the S4 fact: the Batches API "is well-suited to tasks that do not require immediate responses".
