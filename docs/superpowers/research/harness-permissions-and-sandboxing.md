# Research notes: Permissions and Sandboxing

Page: `content/harness/permissions-and-sandboxing.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Configure permissions | https://code.claude.com/docs/en/permissions |
| S2 | Configure the sandboxed Bash tool | https://code.claude.com/docs/en/sandboxing |
| S3 | Configure permissions (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/permissions |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Rule format | S1 | "Permission rules follow the format Tool or Tool(specifier)." |
| Order deny, ask, allow | S1 | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" |
| * in Bash rules | S1 | "A * in a Bash rule matches any text, including spaces, so one rule covers a family of commands." |
| Read(./.env) | S1 | "Read(./.env) / Matches reading the .env file in the current directory" |
| Broad deny wins | S1 | "A broad deny rule like Bash(aws *) blocks every matching call, including calls that also match a narrower allow rule" |
| Enforced by Claude Code | S1 | "Permission rules are enforced by Claude Code, not by the model." |
| Modes | S1 | "default: Prompts for permission on first use of each tool. / acceptEdits / plan / bypassPermissions" |
| bypassPermissions warning | S1 | "Only use this mode in isolated environments like containers or VMs where Claude Code can't cause damage." |
| SDK order | S3 | "Hooks, Deny rules, Ask rules, Permission mode, Allow rules, canUseTool callback" |
| Deny skips canUseTool | S3 | "the call is denied and canUseTool isn't called, even in bypassPermissions mode" |
| Sandbox for OS-level enforcement | S1 | "For OS-level enforcement that blocks all processes from accessing a path, enable the sandbox." |
| Sandbox boundary | S2 | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs" |
| Two layers | S2 | "filesystem isolation controls which paths sandboxed commands can read and write, and network isolation controls which domains they can reach." |
| Off by default | S2 | "The sandbox is off by default." |
| Default writes | S2 | "sandboxed commands can write to the current working directory, the per-user temp directory" |
| Network proxy | S2 | "Connections go through a proxy on your machine that checks each host against your allowed domains, which start empty." |
| Platforms | S2 | "macOS: built-in Seatbelt framework / bubblewrap and socat / On native Windows, Claude Code runs commands unsandboxed." |
| Shell only | S2 | "The sandbox covers shell commands only. Claude's file tools, MCP servers, and hooks run outside it." |
