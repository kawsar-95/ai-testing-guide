# AI Engineering page: Building Chatbots (research notes)

Writer notes for `content/ai-engineering/building-chatbots.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` found no copied word run.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Using the Messages API (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/working-with-messages | 2026-10-28 |
| S2 | Messages, API reference (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/api/messages | 2026-10-28 |
| S3 | Context windows (Anthropic, Claude Docs) | https://platform.claude.com/docs/en/build-with-claude/context-windows | 2026-10-28 |
| S4 | Conversation state (OpenAI API docs) | https://developers.openai.com/api/docs/guides/conversation-state | 2026-10-28 |
| S5 | Short-term memory (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/short-term-memory | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The Messages API is stateless; send the full history each time. | S1 | "The Messages API is stateless, which means that you always send the full conversational history to the API." |
| C2 | OpenAI: each request is independent and stateless; send earlier messages. | S4 | "While each text generation request is independent and stateless, you can still implement multi-turn conversations by providing additional messages as parameters" |
| C3 | Short-term memory = conversation history; a thread is like an email thread. | S5 | "A thread organizes multiple interactions in a session, similar to the way email groups messages in a single conversation." / "Conversation history is the most common form of short-term memory." |
| C4 | Messages alternate user/assistant; each has role and content. | S2 | "Our models are trained to operate on alternating `user` and `assistant` conversational turns." / "Each input message must be an object with a `role` and `content`." |
| C5 | Rules go in the top-level `system` parameter. | S2 | "if you want to include a system prompt, you can use the top-level `system` parameter." / "A system prompt is a way of providing context and instructions to Claude, such as specifying a particular goal or role." |
| C6 | Earlier assistant turns can be synthetic. | S1 | "Earlier conversational turns don't necessarily need to actually originate from Claude. You can use synthetic `assistant` messages." |
| C7 | Context window = all text the model can reference, including the response; working memory. | S3 | "The 'context window' refers to all the text a language model can reference when generating a response, including the response itself." / "represents a 'working memory' for the model." |
| C8 | Each turn accumulates in the window; system prompt, messages, output all count. | S3 | "each user message and assistant response accumulates within the context window" / "Everything in the request counts toward the context window: the system prompt, every message in `messages` ... The output Claude generates for the turn ... counts too." |
| C9 | Input too large: 400 invalid_request_error "prompt is too long". | S3 | "If the input alone already exceeds the model's context window, the API returns a 400 `invalid_request_error` ("prompt is too long") on every model." |
| C10 | Claude 4.5+: generation reaching the limit stops with `model_context_window_exceeded`. | S3 | "On Claude 4.5 models and newer ... If generation then reaches the context window limit, it stops with `stop_reason: "model_context_window_exceeded"`." |
| C11 | Context rot: accuracy and recall drop as tokens grow. | S3 | "more context isn't automatically better. As token count grows, accuracy and recall degrade, a phenomenon known as *context rot*." |
| C12 | Trim, delete, summarize patterns. | S5 | "Trim messages: Remove first or last N messages (before calling LLM)" / "Delete messages from LangGraph state permanently" / "Summarize earlier messages in the history and replace them with a summary" |
| C13 | Trimming can lose information; summarizing is an alternative. | S5 | "The problem with trimming or removing messages ... is that you may lose information from culling of the message queue." |
| C14 | Compaction summarizes earlier parts on the server. | S3 | "Compaction automatically summarizes earlier parts of the conversation on the server, so the conversation can continue past the context window limit." |
| C15 | OpenAI `previous_response_id` chains responses; Conversations API has a durable ID. | S4 | "share context across generated responses with the previous_response_id parameter. This parameter lets you chain responses" / "persist conversation state as a long-running object with its own durable identifier." |
| C16 | Earlier input tokens in a chain are billed. | S4 | "Even when using previous_response_id, all previous input tokens for responses in the chain are billed as input tokens in the API." |
| C17 | Long histories distract the model, are slower, and cost more. | S5 | "most LLMs still perform poorly over long contexts. They get "distracted" by stale or off-topic content, all while suffering from slower response times and higher costs." |
| C18 | Each conversation is stored under its own thread ID. | S5 | `thread_config = {"configurable": {"thread_id": "1"}}` / "State is persisted to a database (or memory) using a checkpointer so the thread can be resumed at any time." |

## Tutorial's own text (no cite)

- "This keeps the histories of two users apart" is marked as the tutorial's own view.
- "Rules in a user message can be removed by a trim" is the tutorial's own reasoning from C5 and C12.
- The shop scenario (order 4471, 40 turns, keep 20 messages) is invented.

## Doubts

- The Python helper on the page is the tutorial's own code. It uses only the parameters of S2 and the model id of S1 (`claude-opus-5-5`).

## Fact-check changes (2026-10-28)

New source S6 (page cite n=6): Persistence, LangChain (LangGraph Docs), https://docs.langchain.com/oss/python/langgraph/persistence, accessed 2026-10-28.

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C19 | In LangGraph, the short-term memory is scoped to a single thread. | S6 | "Use them for short-term, thread-scoped memory" / table row "Scope: A single thread" |

"This keeps the histories of two users apart" stays marked as the tutorial's own view. No source says it about users.
