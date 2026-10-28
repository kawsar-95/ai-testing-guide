# Fact-check: content/ai-engineering/using-langchain.mdx

Checked 2026-10-28 by an agent that did not write the page. All 7 sources were fetched again (as `.md` from docs.langchain.com). The quotes of the research notes were not trusted. `scripts/linux_overlap.py` on the fetched text found no run of 8 or more copied words.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | One standard interface to many providers; easy to try and switch models | 3 | PASS | "LangChain's standard model interfaces give you access to many different provider integrations, which makes it easy to experiment with and switch between models" |
| 2 | Supports OpenAI, Anthropic, Google, and more | 1 | PASS | "Supports OpenAI, Anthropic, Google, and more." |
| 3 | `create_agent`; agent = model + harness (prompt, tools, middleware) | 1 | PASS | "**Agent = Model + Harness.** LangChain provides `create_agent`" / "The harness is everything around the model loop: the prompt, the tools, and any middleware that shapes behavior." |
| 4 | A model also works alone for generation, classification, extraction | 3 | PASS | "Models can be called directly (outside of the agent loop) for tasks like text generation, classification, or extraction" |
| 5 | LangGraph: lower-level framework for fixed plus agent steps; LangSmith: trace, debug, evaluate | 1 | PASS | "LangGraph, our low-level orchestration framework, for advanced needs combining deterministic and agentic workflows" / "LangSmith to trace, debug, and evaluate agents" |
| 6 | Install `langchain` plus a provider package; Python 3.10+ | 2 | PASS | "pip install -U langchain # Requires Python 3.10+" / "pip install -U langchain-anthropic" / "the independent provider packages" |
| 7 | `init_chat_model`; `provider:model` form such as `openai:o1` | 3 | PASS | "using the '{model_provider}:{model}' format, for example, 'openai:o1'." |
| 8 | The API key usually comes from an environment variable | 3 | PASS | "Often accessed by setting an environment variable" |
| 9 | `invoke`, `stream`, `batch` | 3 | PASS | S3 lists Invoke, Stream ("stream the output as it is generated in real-time"), Batch ("Send multiple requests to a model in a batch"). |
| 10 | Code `init_chat_model("claude-sonnet-4-6", temperature=0, timeout=30, max_retries=6)` | 3 | PASS | S3 sample: `init_chat_model("claude-sonnet-4-6", temperature=0.7, timeout=30, max_tokens=1000, max_retries=6)`. The model id `claude-sonnet-4-6` is the id that S3 uses. `temperature=0` is a valid value of the same kwarg. |
| 11 | Retries up to 6 times with exponential backoff for network, 429, 5xx; not 401/404 | 3 | PASS | "retry failed API requests with exponential backoff. By default, models retry up to **6 times** for network errors, rate limits (429), and server errors (5xx). Client errors like 401 (unauthorized) or 404 are not retried." |
| 12 | `@tool`: docstring = description; type hints required, define the input schema | 4 | PASS | "the function's docstring becomes the tool's description that helps the model understand when to use it" / "Type hints are **required** as they define the tool's input schema." Import `from langchain.tools import tool` matches S4. |
| 13 | An agent is a model calling tools in a loop until the task is done | 5 | PASS | "An agent is a model calling tools in a loop until a given task is complete." |
| 14 | Code `create_agent(model="claude-sonnet-4-6", tools=[...], system_prompt=...)`; `result["messages"][-1].content_blocks` | 1 | PASS | S1 Anthropic sample: `create_agent(model="claude-sonnet-4-6", tools=[get_weather], system_prompt="You are a helpful assistant")` and `print(result["messages"][-1].content_blocks)`. |
| 15 | (First check) The model decides which tool to call and when to stop | 5 | FAIL, fixed (see Re-check) | Wrong cite. S5 (Agents) says only "calling tools in a loop until a given task is complete". The fact is in S3: "determining which tools to call, how to interpret results, and when to provide a final answer." |
| 16 | Switching providers = change the model name and install the provider package | 3, 2 | PASS | Rows 1 and 6. |
| 17 | `GenericFakeChatModel` returns scripted answers, including tool calls, one per call | 7 | PASS | "It accepts an iterator of responses (AIMessage objects or strings) and returns one per invocation." |
| 18 | (First check) Fake-model code for the agent test | 7 | FAIL, fixed (see Re-check) | The code built a `GenericFakeChatModel` for the agent test, but S7 says "`GenericFakeChatModel` does not implement `bind_tools`, which `create_agent` calls when you pass tools. Subclass it so that `bind_tools` returns the model unchanged". Used with `create_agent`, the code as shown fails. |
| 19 | Fakes: fast, free, repeatable, no API key | 7 | PASS | "so tests are fast, free, and repeatable without API keys." |
| 20 | Integration tests find problems with keys, schemas, latency | 6 | PASS | "confirm that components work together, credentials and schemas line up, and latency is acceptable." |
| 21 | The current docs build agents with `create_agent` | 1 | PASS | Row 3. "Changes fast" is the tutorial's own advice. |
| 22 | Weak docstring: the model chooses a tool from its description | 4 | PASS | Row 12. |
| 23 | Type hints required | 4 | PASS | Row 12. |
| 24 | LLM output is not deterministic, so real-model tests can be flaky | 6 | PASS | "must deal with flakiness due to the nondeterministic nature of LLMs." |
| 25 | `FakeListChatModel` starts again at the first answer | 7 | PASS | "When invoked more times than the list has entries, it starts again from the first response." |
| 26 | 6 retries by default can hide an outage and slow a request | 3 | PASS | Row 11 for the 6 retries; the effect is the tutorial's reasoning. |
| 27 | Key words rows | 1, 3, 4, 5, 7 | PASS | Restate rows 1, 3, 5, 9, 12, 13, 17. |

Uncited text that states no source fact: the lede, the release-helper scenario, the invented names `find_ticket` and `lookup_ticket_status`, and the tip callout, which says "These test ideas are the tutorial's own advice." PASS.

## Re-check

| # | Change | Verdict | Quote |
|---|---|---|---|
| 15 | The cite is now `<Cite n={3} />` (Technical and Layman), and the Bangla panel too. | PASS | S3: "They drive the agent's decision-making process, determining which tools to call, how to interpret results, and when to provide a final answer." |
| 18 | The code now defines `FakeToolCallingModel(GenericFakeChatModel)` with `bind_tools` that returns `self`, gives it 2 `AIMessage` answers (a tool call, then the final text), runs `create_agent(model, tools=[find_ticket])`, and checks `result["messages"][-1].text`. A new sentence after the code explains the subclass, with `<Cite n={7} />`. Imports match S7: `from langchain.agents import create_agent`, `from langchain.messages import AIMessage, HumanMessage, ToolCall`, `from langchain_core.language_models.fake_chat_models import GenericFakeChatModel`. | PASS | S7: "Subclass it so that `bind_tools` returns the model unchanged" and the `test_agent_calls_tool_then_answers` sample. |

FAILs found: 2. Fixed: 2.

Open FAILs: 0
