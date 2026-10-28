# Fact-check: content/ai-engineering/building-chatbots.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources were fetched again, and one new source (LangGraph Persistence, now source 6) was added. The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | The Messages API is stateless; each request carries the full history | 1 | PASS | "The Messages API is stateless, which means that you always send the full conversational history to the API." |
| 2 | OpenAI: each request is independent; the app sends earlier messages again | 4 | PASS | "While each text generation request is independent and stateless, you can still implement multi-turn conversations by providing additional messages as parameters" |
| 3 | The list is short-term memory; LangChain calls one conversation a thread, like an email thread | 5 | PASS | "A thread organizes multiple interactions in a session, similar to the way email groups messages in a single conversation. Conversation history is the most common form of short-term memory." |
| 4 | Messages alternate `user`/`assistant`; each has `role` and `content` | 2 | PASS | "Our models are trained to operate on alternating `user` and `assistant` conversational turns." / "Each input message must be an object with a `role` and `content`." |
| 5 | The rules go in the top-level `system` parameter | 2 | PASS | "you can use the top-level `system` parameter." |
| 6 | Python helper: `messages.create` with `model`, `max_tokens`, `system`, `messages`; text blocks joined | 1, 2 | PASS | Tutorial's own code. It uses only S2 parameters and the S1 model id `claude-opus-5-5`. |
| 7 | Earlier assistant turns can be synthetic | 1 | PASS | "Earlier conversational turns don't necessarily need to actually originate from Claude. You can use synthetic `assistant` messages." |
| 8 | Context window = all text for one answer, including the answer; working memory | 3 | PASS | "all the text a language model can reference when generating a response, including the response itself" / "represents a "working memory" for the model." |
| 9 | Each message and reply stays in the window; input grows each turn | 3 | PASS | "each user message and assistant response accumulates within the context window, and previous turns are preserved completely." |
| 10 | System prompt, every message, and the output all count | 3 | PASS | "Everything in the request counts toward the context window: the system prompt, every message in `messages` ..." and the output "counts too". |
| 11 | Input larger than the window: 400 `invalid_request_error` "prompt is too long" | 3 | PASS | "the API returns a 400 `invalid_request_error` ("prompt is too long") on every model." |
| 12 | Claude 4.5+: answer at the limit stops with `model_context_window_exceeded` | 3 | PASS | "On Claude 4.5 models and newer ... If generation then reaches the context window limit, it stops with `stop_reason: "model_context_window_exceeded"`." |
| 13 | Context rot: accuracy and recall drop as tokens grow | 3 | PASS | "As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| 14 | Trim, delete, summarize | 5 | PASS | "Remove first or last N messages (before calling LLM)" / "Delete messages from LangGraph state permanently" / "Summarize earlier messages in the history and replace them with a summary" |
| 15 | Trimming can lose information, so some apps summarize | 5 | PASS | "you may lose information from culling of the message queue. Because of this, some applications benefit from a more sophisticated approach of summarizing" |
| 16 | Compaction summarizes older parts on the server | 3 | PASS | "Compaction automatically summarizes earlier parts of the conversation on the server" |
| 17 | OpenAI `previous_response_id` chains responses; Conversations API has a lasting ID | 4 | PASS | "This parameter lets you chain responses" / "persist conversation state as a long-running object with its own durable identifier." |
| 18 | Earlier input tokens in a chain are billed as input | 4 | PASS | "all previous input tokens for responses in the chain are billed as input tokens in the API." |
| 19 | Example: stateless API, so both turns are sent | 1 | PASS | Row 1. |
| 20 | Long histories distract the model, cost more time and money | 5 | PASS | "They get "distracted" by stale or off-topic content, all while suffering from slower response times and higher costs." |
| 21 | Rule: keep the last 20, summarize older ones | 5 | PASS | Applies the trim and summarize patterns of row 14. The numbers are the scenario's own. |
| 22 | Each conversation is stored under its own thread ID | 5 | PASS | `thread_config = {"configurable": {"thread_id": "1"}}` / "State is persisted to a database (or memory) using a checkpointer so the thread can be resumed at any time." |
| 23 | (First check) "this is also what keeps the histories of two users apart" (tutorial's own view, no cite) | none | PASS, improved (see Re-check) | Correctly marked as the tutorial's own view. The writer asked if the docs support it. The LangGraph Persistence page scopes checkpointer memory to one thread, so a cite was added for that part. |
| 24 | Mistake: the history grows; a long chat ends with a 400 or a cut answer, gets slower and costs more | 3, 5 | PASS | Rows 9, 11, 12, 20. |
| 25 | Mistake: blind trimming can drop an early fact | 5 | PASS | Row 15. |
| 26 | Mistake: rules in `system`, not in a user message that a trim can remove | 2 | PASS | Row 5. "A trim can remove" follows from row 14 (tutorial's reasoning). |
| 27 | Mistake: with `previous_response_id`, earlier input tokens are billed again | 4 | PASS | Row 18. |
| 28 | Key words rows | 1, 2, 3, 5 | PASS | Restate rows 1, 4, 5, 8, 13, 16, 22. |

Uncited text that states no source fact: the lede, the shop scenario numbers (order 4471, 40 turns), and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 23 | Added source 6 "Persistence" (LangChain, LangGraph Docs, `https://docs.langchain.com/oss/python/langgraph/persistence`) and the sentence "In LangGraph, this short-term memory is scoped to a single thread <Cite n={6} />." The "two users apart" sentence stays marked as the tutorial's own view. Layman and Bangla got the same sentence. | PASS | S6: "Use them for short-term, thread-scoped memory" / table row "Scope: A single thread". |

FAILs found: 0. One uncited claim got a cite.

Open FAILs: 0
