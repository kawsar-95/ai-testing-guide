# Fact-check: content/ai-engineering/latency-optimization.mdx

Checked 2026-10-28 by an agent that did not write the page. All 6 sources fetched fresh (Claude docs as Markdown, the OpenAI guide as text). The quotes of the research notes were not trusted. Fetched text is not committed.

Cite map: 1 = Reducing latency (Anthropic), 2 = Prompt caching (Anthropic), 3 = Streaming messages (Anthropic), 4 = Batch processing (Anthropic), 5 = Latency optimization (OpenAI), 6 = Python SDK (Anthropic). All are official vendor docs.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Latency is the time the model takes to process a prompt and produce output | 1 | PASS | "Latency refers to the time it takes for the model to process a prompt and generate an output." |
| 2 | Model size, prompt complexity, and infrastructure affect latency | 1 | PASS | "such as the size of the model, the complexity of the prompt, and the underlying infrastructure supporting the model" |
| 3 | Baseline latency: time to process the prompt and produce the full response | 1 | PASS | "This is the time taken by the model to process the prompt and generate the response" |
| 4 | TTFT: time from sending the prompt to the first token; matters most with streaming | 1 | PASS | "the time it takes for the model to generate the first token of the response, from when the prompt was sent. It's particularly relevant when you're using streaming" |
| 5 | Make the prompt work first, then reduce latency; early cuts may hide top quality | 1 | PASS | "first engineer a prompt that works well ... and then try latency reduction strategies afterward. Trying to reduce latency prematurely might prevent you from discovering what top performance looks like." |
| 6 | For speed-critical apps, the docs point to Claude Haiku 5.5 | 1 | PASS | "For speed-critical applications, **Claude Haiku 5.5** offers the fastest response times" |
| 7 | Rule of thumb: half the output tokens may give about half the latency | 5 | PASS | "as a general heuristic, cutting 50% of your output tokens may cut ~50% of your latency" |
| 8 | Half the prompt may give only 1–5 % | 5 | PASS | "cutting 50% of your prompt may only result in a 1–5% latency improvement" |
| 9 | Ask for a short answer; `max_tokens` is a hard limit | 1 | PASS | "Ask Claude directly to be concise." / "Use the `max_tokens` parameter to set a hard limit on the maximum length" |
| 10 | `"stream": true` sends the answer in pieces as server-sent events | 3 | PASS | "you can set `\"stream\": true` to incrementally stream the response using server-sent events (SSE)." |
| 11 | Users see output in real time, so the app feels more responsive | 1 | PASS | "significantly improve the perceived responsiveness of your application, as users can see the model's output in real time." |
| 12 | Code: `anthropic.Anthropic()` reads `ANTHROPIC_API_KEY` | 6 | PASS | SDK example: `api_key=os.environ.get("ANTHROPIC_API_KEY")` with "This is the default and can be omitted" |
| 13 | Code: `client.messages.stream(...)`, `stream.text_stream`, `print(text, end="", flush=True)` | 3 | PASS | S3 Python example uses the same calls. |
| 14 | Code: model id `claude-haiku-5-5` | 1 | PASS | S1 example: `model="claude-haiku-5-5"` |
| 15 | Prompt caching reuses a processed prefix; cuts processing time and cost | 2 | PASS | "allowing resuming from specific prefixes in your prompts. This significantly reduces processing time and costs" |
| 16 | Prefix covers `tools`, `system`, `messages` up to the `cache_control` block | 2 | PASS | "`tools`, `system`, and `messages` (in that order), up to and including the block designated with `cache_control`." |
| 17 | Default lifetime 5 minutes; each use refreshes it | 2 | PASS | "By default, the cache has a 5-minute lifetime. The cache is refreshed for no additional cost each time the cached content is used." |
| 18 | Minimum 512 tokens for Claude Haiku 5.5; shorter prompts not cached, no error | 2 | PASS | "512 tokens for ... Claude Haiku 5.5" / "processed without caching, and no error is returned." |
| 19 | Run independent steps at the same time | 5 | PASS | "If the steps are not strictly sequential, you can split them out into parallel calls." |
| 20 | The Python SDK has `AsyncAnthropic` | 6 | PASS | `from anthropic import AsyncAnthropic` |
| 21 | Sequential steps: fewer, combined requests, because each request adds a round trip | 5 | PASS | "Each time you make a request, you incur some round-trip latency" / "putting them in a single prompt and getting them all in a single response" |
| 22 | Batches API: background, 50 % lower cost | 4 | PASS | "asynchronously process large volumes ... reducing costs by 50 percent" |
| 23 | Most batches finish within 1 hour; up to 24 hours | 4 | PASS | "most batches completing within 1 hour" / "Batches might take up to 24 hours for processing" |
| 24 | "It does not lower latency." | 4 | FAIL | S4 does not say this. It says batches suit "tasks that do not require immediate responses" and that fast mode "tunes synchronous latency, which doesn't apply to asynchronous batch processing". The sentence is the writer's reading, with no cite and no "tutorial's view" mark. |
| 25 | Use batches only for work that can wait, such as a nightly evaluation run | 4 | PASS | "bulk operations that don't require immediate results, such as: Large-scale evaluations" ("nightly" is the example's own framing) |
| 26 | Example: streaming shows the first text within about a second | 3, 5 | PASS | S5: "Streaming: ... it cuts the waiting time to a second or less." |
| 27 | Example: the static handbook becomes a cached prefix; the question stays after it, because a hit needs the same prefix | 2 | PASS | "On subsequent requests with the same prefix, cached content is reused automatically." / "place the breakpoint at the end of the static prefix, not on the varying block." |
| 28 | Example: run screen and answer together, cancel if flagged; OpenAI calls this speculative execution | 5 | PASS | "leverage speculative execution" / "Start step 1 and step 2 simultaneously (for example, input moderation and story generation)" / "cancel step 2" |
| 29 | Example: the weekly report moves to batches because nobody waits | 4 | PASS | "well-suited to tasks that do not require immediate responses" |
| 30 | Mistake: output tokens drive most of the latency | 5 | PASS | "Generating tokens is almost always the highest latency step" |
| 31 | Mistake: changing text at the start changes the prefix, so no cache hit | 2 | PASS | "changing any block at or before the breakpoint produces a different hash on the next request." |
| 32 | Mistake: both cache token fields 0 means not cached | 2 | PASS | "if both `cache_creation_input_tokens` and `cache_read_input_tokens` are 0, the prompt was not cached" |
| 33 | Mistake: at `max_tokens` the answer stops mid-sentence or mid-word | 1 | PASS | "the response will be cut off, perhaps mid-sentence or mid-word" |
| 34 | Mistake: a batch can take up to 24 hours | 4 | PASS | as row 23 |
| 35 | Key words rows (latency, TTFT, streaming, caching, Batches API, speculative execution, `AsyncAnthropic`) | 1–6 | PASS | Same quotes as rows 1, 4, 10, 15, 22, 28, 20. |
| 36 | "What a tester can check" | none | PASS | Marked "Tutorial advice" and "the tutorial's own advice"; no cites. |
| 37 | HR example numbers (6,000 tokens, 9 s) | none | PASS | A made-up scenario, not a factual claim about a product. |

## Copy check

`scripts/linux_overlap.py` against the 6 fetched texts: no run of 8 or more words is copied.

## Fixes

| Row | Fix |
|---|---|
| 24 | Replaced "It does not lower latency." with "It suits tasks that do not need an immediate response <Cite n={4} />." in Technical, Layman, and Bangla. Notes updated. |

## Re-check

| # | New text | Cite | Verdict | Quote |
|---|---|---|---|---|
| 24 | It suits tasks that do not need an immediate response | 4 | PASS | "This approach is well-suited to tasks that do not require immediate responses" |

Open FAILs: 0
