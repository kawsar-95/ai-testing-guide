# Fact check: harness / tool-calling (round 1)

Sources fetched fresh with curl on 2026-10-28 (Markdown form of each page) into /tmp/claude-1000/harness-check/: S1 Tool use with Claude (overview), S2 Define tools (implement-tool-use), S3 Handle tool calls, S4 Parallel tool use, all under `platform.claude.com/docs/en/agents-and-tools/tool-use/`. Checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the model asks for an action with a tool name and arguments; the harness runs it and gives the result back | S1, S3 (body) | PASS | S1: "It then returns a structured call that your application runs". "Checks the request": see 17. |
| 2 | A tool definition has three main fields | S2 | PASS | S2 table: `name`, `description`, `input_schema`, and `input_examples` "(Optional)". "Main" covers this. |
| 3 | `name` must match `^[a-zA-Z0-9_-]{1,128}$` | S2 | PASS | "Must match the regex `^[a-zA-Z0-9_-]{1,128}$`." |
| 4 | `description`: plain text, what the tool does, when to use it, how it behaves | S2 | PASS | "A detailed plain text description of what the tool does, when it should be used, and how it behaves." |
| 5 | `input_schema`: a JSON Schema object for the parameters | S2 | PASS | "A JSON Schema object defining the expected parameters for the tool." |
| 6 | JSON block: tool definition `get_order` | S2 | PASS | Field names and shape match the S2 `get_weather` example (`name`, `description`, `input_schema` with `type: object`, `properties`, `required`). Name matches the regex. Valid JSON. |
| 7 | `strict: true` on a custom tool definition makes tool calls always match the schema exactly | S1 | PASS | "Add `strict: true` to your custom tool definitions to ensure Claude's tool calls always match your schema exactly." |
| 8 | Response has `stop_reason: "tool_use"` and one or more `tool_use` blocks; your code runs the operation and sends back a `tool_result` | S1 | PASS | "Claude responds with `stop_reason: \"tool_use\"` and one or more `tool_use` blocks. Your code runs the operation and sends back a `tool_result`." |
| 9 | `tool_use` has `id`, `name`, and `input` that follows `input_schema` | S3 | PASS | "`input`: An object containing the input being passed to the tool, conforming to the tool's `input_schema`." |
| 10 | JSON block: `tool_use` | S3 | PASS | Keys `type`, `id`, `name`, `input` match the S3 example. |
| 11 | Your code runs the tool with that name and input | S3 | PASS | "Run the actual tool in your code base corresponding to that tool name, passing in the tool `input`." |
| 12 | Send a new `user` message with a `tool_result`; `tool_use_id` is the `id` of the request | S3 | PASS | "sending a new message with the `role` of `user`, and a `content` block containing the `tool_result` type"; "`tool_use_id`: The `id` of the tool use request this is a result for." |
| 13 | JSON block: `tool_result` with string `content` | S3 | PASS | "`content` (optional): The result of the tool, as a string (for example, `\"content\": \"15 degrees\"`)". |
| 14 | The model uses the result in its reply | - | PASS | Example narrative. S1: "sends the result back in a `tool_result` block so Claude can reply with the answer." |
| 15 | On failure set `is_error` to `true` and put the error message in `content` | S3 | PASS | "you can return the error message in the `content` along with `\"is_error\": true`" |
| 16 | Tools differ mainly by where the code runs; client tools in your application; server tools (`web_search`, `web_fetch`, `code_execution`) on Anthropic's infrastructure | S1 | PASS | "Tools differ primarily by where the code runs. Client tools ... run in your application." "Server tools (such as `web_search`, `web_fetch`, `code_execution`, and `tool_search`)"; "Server tools run on Anthropic's infrastructure" |
| 17 | For a client tool, the harness is your code, so the check before the run is your job | none | FAIL | No cite. S1 supports the first half: "For tools you define, you write the schema and your application runs each call." Fix: "For a client tool, your application runs each call <Cite n={1} />, so the check before the run is your job." The second half is then the tutorial's conclusion from the cited fact. |
| 18 | For server tools you do not need to handle `is_error` results | S3 | PASS | "Unlike client tools, you do not need to handle `is_error` results for server tools." |
| 19 | The model can ask for several tools in one turn; several `tool_use` blocks | S4 | PASS | "can contain several `tool_use` blocks in a single assistant turn" |
| 20 | Return one `tool_result` per `tool_use`, all together in the next user message | S4 | PASS | "return one `tool_result` for each `tool_use` block, all together in the next user message." |
| 21 | A call you do not run still gets a `tool_result` with `is_error: true` and a short explanation | S4 | PASS | "If you choose not to run a particular call ... still return a `tool_result` for it with `is_error: true` and a brief explanation." |
| 22 | What a tester can check (callout) | - | N/A | "Tutorial advice" callout, no cites. |
| 23 | Key words: all 8 rows | S1-S4 | PASS | Each row restates claims 2-21. |

## Round 2 (2026-10-28)

- FAIL 17: now "For a client tool, your application runs each call <Cite n={1} />, so the check before the run is your job." S1: "For tools you define, you write the schema and your application runs each call." The second half is the tutorial's conclusion from the cited fact. PASS.
- New claim 24 ("Define a tool"): "The model does not run the tool. It decides when to call it from the request and the description, and your application runs the call <Cite n={1} />." S1: "Claude determines when to call a tool based on the user's request and the tool's description. It then returns a structured call that your application runs (client tools)". PASS. (For server tools Anthropic runs the call; the section is about a custom `get_order` tool, so the sentence is correct here.)
- New claim 25 ("The request and the result"): "Claude then uses the error in its reply to the user <Cite n={3} />." S3: "Claude will then incorporate this error into its response to the user." PASS.

Open FAILs: 0
