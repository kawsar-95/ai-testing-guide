# Research notes: Tool Calling

Page: `content/harness/tool-calling.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Tool use with Claude | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview |
| S2 | Define tools | https://platform.claude.com/docs/en/agents-and-tools/tool-use/implement-tool-use |
| S3 | Handle tool calls | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls |
| S4 | Parallel tool use | https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use |

## Claims

| Claim | Source | Quote |
|---|---|---|
| name field and regex | S2 | "name: The name of the tool. Must match the regex ^[a-zA-Z0-9_-]{1,128}$." |
| description field | S2 | "A detailed plain text description of what the tool does, when it should be used, and how it behaves." |
| input_schema field | S2 | "input_schema: A JSON Schema object defining the expected parameters for the tool." |
| strict: true | S1 | "Add strict: true to your custom tool definitions to ensure Claude's tool calls always match your schema exactly." |
| stop_reason tool_use and tool_result | S1 | "Claude responds with stop_reason: "tool_use" and one or more tool_use blocks. Your code runs the operation and sends back a tool_result." |
| tool_use block fields | S3 | "id: A unique identifier for this particular tool use block. / name: The name of the tool being used. / input: An object containing the input" |
| Your code runs the tool | S3 | "Run the actual tool in your code base corresponding to that tool name, passing in the tool input." |
| tool_result in a user message | S3 | "sending a new message with the role of user, and a content block containing the tool_result type" |
| tool_use_id | S3 | "tool_use_id: The id of the tool use request this is a result for." |
| is_error | S3 | "is_error (optional): Set to true if the tool execution resulted in an error." |
| Client and server tools | S1 | "Client tools (including user-defined tools...) run in your application. / Server tools (such as web_search, web_fetch, code_execution, and tool_search) run on Anthropic's infrastructure." |
| No is_error for server tools | S3 | "Unlike client tools, you do not need to handle is_error results for server tools." |
| Several tool_use blocks | S4 | "can contain several tool_use blocks in a single assistant turn." |
| Results together | S4 | "return one tool_result for each tool_use block, all together in the next user message." |
| Skipped call | S4 | "still return a tool_result for it with is_error: true and a brief explanation." |
