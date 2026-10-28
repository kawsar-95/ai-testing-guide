# Fact-check: content/ai-engineering/security.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 7 sources again, plus the API versions page (https://platform.claude.com/docs/en/api/versioning) to check the version header. Every quote below is from that fetched text. The quotes of the research notes were not trusted.

## Claims (Technical panels and code)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Security for an AI system has 4 parts | none | FAIL | The 4-part split (authentication, secrets, permissions, isolation) is the tutorial's framing. No source gives it, and the page did not mark it. |
| 2 | A Claude API request carries an API key or a short-lived access token in a header | 4 | PASS | "`Authorization` \| `Bearer <token>`, where `<token>` is your API key or a short-lived access token obtained from `POST /v1/oauth/token`" |
| 3 | The system prompt must not be treated as a secret or a security control | 2 | PASS | "the system prompt should not be considered a secret, nor should it be used as a security control." |
| 4 | It must not hold credentials or connection strings | 2 | PASS | "Accordingly, sensitive data such as credentials, connection strings, etc." (the sentence goes on: should not be contained within the system prompt language) |
| 5 | 3 root causes of excessive agency: functionality, permissions, autonomy | 1 | PASS | "The root cause of Excessive Agency is typically one or more of: excessive functionality; excessive permissions; excessive autonomy." |
| 6 | The Claude Code Bash sandbox is an OS boundary that limits files and network domains | 7 | PASS | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine. You set which files and network domains those commands can reach" |
| 7 | Authorization belongs in downstream systems, not in an LLM decision | 1 | PASS | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| 8 | The API accepts `Authorization: Bearer`, or the older `x-api-key`, still supported | 4 | PASS | "`x-api-key` \| Your API key from Console. Legacy fallback for `Authorization`, still supported" |
| 9 | You create keys in the Console | 4 | PASS | "In the Console, you can use playground ... and then generate API keys on the API keys page" |
| 10 | Workspaces separate environments | 4 | PASS | "Use workspaces in the Console to separate environments and control spend" |
| 11 | The key comes from the environment at run time, never from the source code | none | FAIL | Advice with no source and no "tutorial's own" mark. |
| 12 | curl example: `https://api.anthropic.com/v1/messages`, `x-api-key`, `anthropic-version: 2023-06-01`, `content-type` | none | FAIL | No cite on the example. S4 gives the base URL ("a RESTful API at `https://api.anthropic.com`") and `POST /v1/messages`. But S4 calls `x-api-key` a "Legacy fallback", and its version example is "`2026-10-21`". The versions page lists `2026-10-21` first and says "Anthropic recommends using the latest API version whenever possible." `2023-06-01` still exists, but it is not current. (Writer doubt 1.) |
| 13 | Kubernetes stores Secrets unencrypted in etcd by default | 5 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |
| 14 | Anyone with API access or etcd access can read them | 5 | PASS | "Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." |
| 15 | The docs say to turn on encryption at rest and set RBAC rules | 5 | PASS | "Enable Encryption at Rest for Secrets." / "Enable or configure RBAC rules with least-privilege access to Secrets." |
| 16 | Few tools, few functions; a mail-summary tool needs read, not send or delete | 1 | PASS | "an extension that accesses a user's mailbox to summarise emails may only require the ability to read emails, so the extension should not contain other functionality such as deleting or sending messages." |
| 17 | Avoid open-ended tools (shell command, fetch URL); build a narrow tool such as "write this file" | 1 | PASS | "Avoid the use of open-ended extensions where possible (e.g., run a shell command, fetch a URL, etc.)" / "build a specific file-writing extension" |
| 18 | Connect with the user's identity and the smallest scope, not a shared admin account | 1 | PASS | "executed on downstream systems in the context of that specific user, and with the minimum privileges necessary." |
| 19 | A human approves high-impact actions | 1 | PASS | "require a human to approve high-impact actions before they are taken." |
| 20 | The downstream system checks every request against its own policy | 1 | PASS | "all requests made to downstream systems via extensions are validated against security policies." |
| 21 | Logs, monitoring, rate limits do not stop the problem but limit damage | 1 | PASS | "The following options will not prevent Excessive Agency, but can limit the level of damage caused" |
| 22 | An MCP server must not pass on a token not issued to it; the spec calls it "token passthrough" and forbids it | 6 | PASS | "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." / "Token passthrough is explicitly forbidden in the authorization specification" |
| 23 | The sandbox uses Seatbelt on macOS and `bubblewrap` on Linux | 7 | PASS | "macOS: uses Seatbelt for sandbox enforcement Linux: uses bubblewrap for isolation" |
| 24 | If the sandbox cannot start, commands run without it by default; `sandbox.failIfUnavailable` makes it exit | 7 | PASS | "By default, if the sandbox can't start because a dependency is missing or the platform is unsupported, Claude Code runs commands without sandboxing." / "To make Claude Code exit at startup instead, set sandbox.failIfUnavailable to true." |
| 25 | Email assistant: the plugin can also send mail | 1 | PASS | "the plugin that the system developer has chosen to use also contains functions for sending messages." |
| 26 | A hidden instruction makes the model forward private mail; this is indirect prompt injection | 1 | PASS | "the app is vulnerable to an indirect prompt injection attack, whereby a maliciously-crafted incoming email tricks the LLM into commanding the agent to scan the user's inbox for senitive information and forward it to the attacker's email address." |
| 27 | 3 fixes (read-only plugin, OAuth read-only scope, user presses Send); any one breaks the attack | 1 | PASS | "This could be avoided by: eliminating excessive functionality by using an extension that only implements mail-reading capabilities, eliminating excessive permissions by authenticating to the user's email service via an OAuth session with a read-only scope, and/or eliminating excessive autonomy by requiring the user to manually review and hit 'send'" ("and/or": any one is enough). |
| 28 | A rate limit on the send function reduces the damage | 1 | PASS | "the damage caused could be reduced by implementing rate limiting on the mail-sending interface." |
| 29 | Keep keys, database names, roles out of the prompt, in systems the model cannot reach | 2 | PASS | "API keys, auth keys, database names, user roles, permission structure of the application) directly in the system prompts. Instead, externalize such information to the systems that the model does not directly access." |
| 30 | Training or instructions may not always be followed; an independent check is better | 2 | PASS | "it is not a guarantee that the model will always adhere to this. An independent system that can inspect the output to determine if the model is in compliance with expectations is preferable to system prompt instructions." |
| 31 | The real risk is the design that skips session and authorization checks, not the leak | 2 | PASS | "the fundamental security risk is not that these have been disclosed, it is that the application allows bypassing strong session management and authorization checks by delegating these to the LLM" |
| 32 | A tool for one user's documents connects with an account that sees all users' files | 1 | PASS | "an extension to read the current user's document store connects to the document repository with a privileged account that has access to files belonging to all users." |
| 33 | A system-prompt rule about returned data can be bypassed through prompt injection | 3 | PASS | "such restrictions may not always be honored and could be bypassed via prompt injection or other methods." |
| 34 | Default Kubernetes Secrets are not encrypted at rest until you turn it on | 5 | PASS | Same quotes as rows 13 and 15. |
| 35 | Tester tips | none | PASS | The callout says "These test ideas are the tutorial's own advice." |
| 36 | Key word: excessive agency | 1 | PASS | "Excessive Agency is the vulnerability that enables damaging actions to be performed in response to unexpected, ambiguous or manipulated outputs from an LLM" plus row 5. |
| 37 | Key word: system prompt leakage | 2 | PASS | "the risk that the system prompts or instructions used to steer the behavior of the model can also contain sensitive information that was not intended to be discovered." |
| 38 | Key word: sensitive information | 3 | PASS | "This includes personal identifiable information (PII), financial details, health records, confidential business data, security credentials, and legal documents." |
| 39 | Key word: least privilege | 3 | PASS | "Only grant access to data that is necessary for the specific user or process." |
| 40 | Key word: token passthrough | 6 | PASS | Row 22. |
| 41 | Key word: sandbox | 7 | PASS | "Sandboxing provides OS-level enforcement that restricts what shell commands can access at the filesystem and network level." |

Source check: all 7 sources are official or primary (OWASP GenAI, Claude Platform Docs, Kubernetes docs, MCP specification, Claude Code Docs). PASS.

Copy check: `python3 scripts/linux_overlap.py content/ai-engineering/security.mdx <dir with the 8 fetched texts>` reports no run of 8 or more words. PASS.

FAILs found: 3 (rows 1, 11, 12).

## Re-check (after the fixes)

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | "This tutorial splits security for an AI system into 4 parts:" (all 3 voices) | none | PASS | Now marked as the tutorial's framing. |
| 11 | "This tutorial's advice: read the key from the environment at run time, never from the source code." (all 3 voices) | none | PASS | Now marked as the tutorial's advice. |
| 12 | "The example sends the key in the `Authorization: Bearer` header, with the `anthropic-version` and `content-type` headers"; curl now uses `-H "Authorization: Bearer $ANTHROPIC_API_KEY"` and `-H "anthropic-version: 2026-10-21"` | 4 | PASS | S4 header table: "`Authorization` \| `Bearer <token>`", "`anthropic-version` \| API version (for example, `2026-10-21`)", "`content-type` \| `application/json`"; endpoint: "`https://api.anthropic.com`" and "(`POST /v1/messages`)". The variable name `ANTHROPIC_API_KEY` is the reader's own shell variable. |

Copy check again after the edits: no run of 8 or more words. PASS.

Open FAILs: 0
