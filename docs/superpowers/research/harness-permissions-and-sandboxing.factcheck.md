# Fact check: harness / permissions-and-sandboxing (round 1)

Sources fetched fresh with curl on 2026-10-28 as Markdown (`<url>.md`): S1 https://code.claude.com/docs/en/permissions, S2 https://code.claude.com/docs/en/sandboxing, S3 https://code.claude.com/docs/en/agent-sdk/permissions. The checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a support agent can read the order but cannot issue a refund | none | N/A | An illustration, not a product fact. |
| 2 | A rule has the format `Tool` or `Tool(specifier)` | S1 | PASS | "Permission rules follow the format `Tool` or `Tool(specifier)`." |
| 3 | A rule is in one of three lists: `allow`, `ask`, `deny` | S1 | PASS | "Allow rules ... Ask rules ... Deny rules prevent Claude Code from using the specified tool." |
| 4 | Order deny, ask, allow; first match wins; specificity does not change the order | S1 | PASS | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome, and rule specificity doesn't change the order." |
| 5 | JSON block: `permissions` with `allow` and `deny` arrays, `Bash(npm run *)`, `Read(./.env)`, `Bash(aws *)` | S1 | PASS | Same shape as the S1 example (`"permissions": { "allow": [ "Bash(npm run *)", ...], "deny": [...] }`). All 3 rules use forms that S1 shows. |
| 6 | In a Bash rule, `*` matches any text, also spaces | S1 | PASS | "A `*` in a Bash rule matches any text, including spaces, so one rule covers a family of commands." |
| 7 | `Read(./.env)` matches a read of `.env` in the current directory | S1 | PASS | "`Read(./.env)` | Matches reading the `.env` file in the current directory" |
| 8 | A broad deny `Bash(aws *)` blocks a call that a narrower allow rule matches | S1 | PASS | "A broad deny rule like `Bash(aws *)` blocks every matching call, including calls that also match a narrower allow rule" |
| 9 | Claude Code enforces the rules, not the model; a prompt cannot talk the agent past a deny rule | S1 | PASS | "Permission rules are enforced by Claude Code, not by the model. Instructions in your prompt ... don't change what Claude Code allows." |
| 10 | A permission mode sets the default behavior for the calls that no rule decides | S1 | FAIL | S1 says only "permission modes that control how it approves tool calls". The "no rule decides" part is not in S1. Fix: keep `<Cite n={1} />` and add `<Cite n={3} />`. S3: "Other unlisted tools are not matched by any allow rule and fall through to the permission mode". |
| 11 | `default`: asks on the first use of each tool | S1 | PASS | "Prompts for permission on first use of each tool." |
| 12 | `acceptEdits`: accepts file edits and common filesystem commands such as `mkdir`, `mv`, for paths in the working directory | S1 | PASS | "Automatically accepts file edits and common filesystem commands such as `mkdir`, `touch`, `mv`, and `cp` for paths in the working directory or `additionalDirectories`" |
| 13 | `plan`: reads files and runs read-only shell commands, does not edit source files | S1 | PASS | "Claude reads files and runs read-only shell commands to explore but doesn't edit your source files" |
| 14 | `bypassPermissions`: skips prompts except actions no mode approves automatically | S1 | PASS | "Skips permission prompts, except for the actions no mode auto-approves" |
| 15 | Danger callout: use `bypassPermissions` only in containers or VMs | S1 | PASS | "Only use this mode in isolated environments like containers or VMs where Claude Code can't cause damage." |
| 16 | SDK order: hooks, deny, ask, permission mode, allow, `canUseTool` | S3 | PASS | Steps "1. Hooks", "2. Deny rules", "3. Ask rules", "4. Permission mode", "5. Allow rules", "6. canUseTool callback". |
| 17 | A denied call never reaches `canUseTool`, also in `bypassPermissions` | S3 | PASS | "the call is denied and `canUseTool` isn't called, even in `bypassPermissions` mode" |
| 18 | A rule does not control every process a command starts; for OS-level enforcement, enable the sandbox | S1 | PASS | "They don't apply to ... arbitrary subprocesses that read or write files indirectly ... For OS-level enforcement that blocks all processes from accessing a path, enable the sandbox." |
| 19 | The Bash sandbox is an OS-enforced boundary around the shell commands Claude runs | S2 | PASS | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." |
| 20 | Two independent layers: filesystem (paths read and write) and network (domains) | S2 | PASS | "The sandbox has two independent layers: filesystem isolation controls which paths sandboxed commands can read and write, and network isolation controls which domains they can reach." |
| 21 | Table: off by default | S2 | PASS | "The sandbox is off by default." |
| 22 | Table: writes to the working directory and the per-user temp directory by default | S2 | PASS | "By default, sandboxed commands can write to the current working directory, the per-user temp directory, and any directories you've added". Note: the row omits added directories. Not false, as the row does not say "only". |
| 23 | Table: no direct route out; proxy checks hosts against allowed domains, which start empty | S2 | PASS | "No direct route out. Connections go through a proxy on your machine that checks each host against your allowed domains, which start empty." |
| 24 | Table: macOS uses Seatbelt | S2 | PASS | "macOS: sandboxing uses the built-in Seatbelt framework" |
| 25 | Table: Linux and WSL2 use `bubblewrap` and `socat` | S2 | PASS | "Linux and WSL2: the sandbox relies on `bubblewrap` and `socat`" |
| 26 | Table: native Windows runs commands unsandboxed | S2 | PASS | "On native Windows, Claude Code runs commands unsandboxed." |
| 27 | The sandbox covers shell commands only; file tools, MCP servers, hooks run outside | S2 | PASS | "The sandbox covers shell commands only. Claude's file tools, MCP servers, and hooks run outside it." |
| 28 | "What a tester can check" callout | none | N/A | Tutorial advice. |
| 29 | Key words: rule, rule order, mode, sandbox, isolation rows | S1, S2 | PASS | Same as rows 2-4, 10, 19-20. The mode row follows the FAIL of row 10 (no cite in a table; fixed by the cite in the text). |
| 30 | Key words: `canUseTool` decides the calls that nothing else decided | S3 | PASS | "If not resolved by any of the above, call your `canUseTool` callback for a decision." |

## Round 2 (2026-10-28)

| # | Change | Verdict | Note |
|---|---|---|---|
| 10 | "A permission mode sets the default behavior for the calls that no rule decides <Cite n={1} /> <Cite n={3} />:" | PASS | Cite 3 added. S3: "Other unlisted tools are not matched by any allow rule and fall through to the permission mode". S1 supports the mode list: "permission modes that control how it approves tool calls". |

No other Technical claim changed.

Open FAILs: 0
