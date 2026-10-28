# AI Engineering page: Using LangChain (research notes)

Writer notes for `content/ai-engineering/using-langchain.mdx`. Fetched 2026-10-28 with curl (the `.md` form of each LangChain docs page) into `/tmp/claude-1000/ai-eng-src/` (text in `/tmp/claude-1000/ai-eng-txt/`). Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` found no copied word run after one fix.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | LangChain overview (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/overview | 2026-10-28 |
| S2 | Install LangChain (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/install | 2026-10-28 |
| S3 | Models (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/models | 2026-10-28 |
| S4 | Tools (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/tools | 2026-10-28 |
| S5 | Agents (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/agents | 2026-10-28 |
| S6 | Test (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/test | 2026-10-28 |
| S7 | Unit testing (LangChain Docs) | https://docs.langchain.com/oss/python/langchain/test/unit-testing | 2026-10-28 |

Page cite numbers: n=1 is S1 … n=7 is S7 (same order).

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | One standard interface to many providers; easy to try and switch models. | S3 | "LangChain's standard model interfaces give you access to many different provider integrations, which makes it easy to experiment with and switch between models" |
| C2 | Supports OpenAI, Anthropic, Google, and more. | S1 | "Supports OpenAI, Anthropic, Google, and more." |
| C3 | Agent = model + harness; harness = prompt, tools, middleware; `create_agent`. | S1 | "**Agent = Model + Harness.** LangChain provides `create_agent`" / "The harness is everything around the model loop: the prompt, the tools, and any middleware that shapes behavior." |
| C4 | A model can be used standalone for generation, classification, extraction. | S3 | "**Standalone** - Models can be called directly (outside of the agent loop) for tasks like text generation, classification, or extraction" |
| C5 | LangGraph is low-level orchestration for deterministic plus agentic flows; LangSmith traces, debugs, evaluates. | S1 | "Use LangGraph, our low-level orchestration framework, for advanced needs combining deterministic and agentic workflows." / "Use LangSmith to trace, debug, and evaluate agents" |
| C6 | Install `langchain` plus provider packages; Python 3.10+. | S2 | "pip install -U langchain # Requires Python 3.10+" / "These live in independent provider packages." / "pip install -U langchain-anthropic" |
| C7 | `init_chat_model`; `provider:model` form, e.g. `openai:o1`. | S3 | "use `init_chat_model` to initialize one" / "using the '{model_provider}:{model}' format, for example, 'openai:o1'." |
| C8 | The API key is often set in an environment variable. | S3 | "**api_key** ... Often accessed by setting an environment variable" |
| C9 | Key methods invoke, stream, batch. | S3 | "Invoke: The model takes messages as input and outputs messages after generating a complete response." / "Stream ... stream the output as it is generated" / "Batch: Send multiple requests to a model in a batch" |
| C10 | Retries up to 6 times with exponential backoff for network, 429, 5xx; not 401/404. | S3 | "By default, models retry up to **6 times** for network errors, rate limits (429), and server errors (5xx). Client errors like 401 (unauthorized) or 404 are not retried." |
| C11 | Code: `init_chat_model("claude-sonnet-4-6", temperature=..., timeout=..., max_retries=6)`. | S3 | sample: `init_chat_model("claude-sonnet-4-6", temperature=0.7, timeout=30, max_tokens=1000, max_retries=6)` |
| C12 | `@tool`: docstring becomes the description; type hints required, define the input schema. | S4 | "By default, the function's docstring becomes the tool's description that helps the model understand when to use it" / "Type hints are **required** as they define the tool's input schema." |
| C13 | An agent is a model calling tools in a loop until the task is complete. | S5 | "An agent is a model calling tools in a loop until a given task is complete." |
| C14 | `create_agent(model=..., tools=[...], system_prompt=...)`; `agent.invoke({"messages": [...]})`; `result["messages"][-1].content_blocks`. | S1 | Anthropic sample: `create_agent(model="claude-sonnet-4-6", tools=[get_weather], system_prompt="You are a helpful assistant")` |
| C15 | Models drive which tools to call and when to answer. | S5, S3 | S3: "They drive the agent's decision-making process, determining which tools to call, how to interpret results, and when to provide a final answer." (page cites S5 for the loop) |
| C16 | `GenericFakeChatModel` returns scripted responses (including tool calls), one per invocation. | S7 | "It accepts an iterator of responses (AIMessage objects or strings) and returns one per invocation." |
| C17 | Fakes make tests fast, free, repeatable, with no API key. | S7 | "so tests are fast, free, and repeatable without API keys." |
| C18 | Integration tests check credentials, schemas, latency. | S6 | "Integration tests test the agent using real network calls to confirm that components work together, credentials and schemas line up, and latency is acceptable." |
| C19 | LLM output is nondeterministic, so tests can be flaky. | S6 | "must deal with flakiness due to the nondeterministic nature of LLMs." |
| C20 | `FakeListChatModel` cycles back to the first response. | S7 | "When invoked more times than the list has entries, it starts again from the first response." |

## Tutorial's own text (no cite)

- "LangChain changes fast; check the version of an example" is the tutorial's own advice. The cite on that line supports only "the current docs use `create_agent`".
- "6 retries can hide a real outage" is the tutorial's reasoning from C10.
- `find_ticket` and `lookup_ticket_status` are invented example names.

## Doubts

- The page does not call LangChain "open source", because the fetched pages do not say so.
- The `GenericFakeChatModel` code on the page follows S7. S7 also says that `GenericFakeChatModel` does not implement `bind_tools`, so a real `create_agent` test needs a small subclass. The page does not show this step.

## Fact-check changes (2026-10-28)

- The fake-model code now follows S7 "Test a tool-calling loop": a `FakeToolCallingModel(GenericFakeChatModel)` subclass whose `bind_tools` returns `self`, used with `create_agent`. Quote: "`GenericFakeChatModel` does not implement `bind_tools`, which `create_agent` calls when you pass tools. Subclass it so that `bind_tools` returns the model unchanged".
- "The model decides which tool to call and when to stop" now cites S3 (C15), not S5.
