# AI Engineering page: Security for AI Systems (research notes)

Writer notes for `content/ai-engineering/security.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-security/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | LLM06:2025 Excessive Agency (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |
| S2 | LLM07:2025 System Prompt Leakage (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/ | 2026-10-28 |
| S3 | LLM02:2025 Sensitive Information Disclosure (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/ | 2026-10-28 |
| S4 | API overview (Claude Platform Docs) | https://platform.claude.com/docs/en/api/overview | 2026-10-28 |
| S5 | Secrets (Kubernetes Documentation) | https://kubernetes.io/docs/concepts/configuration/secret/ | 2026-10-28 |
| S6 | Security Best Practices (MCP specification 2025-06-18) | https://modelcontextprotocol.io/specification/2025-06-18/basic/security_best_practices | 2026-10-28 |
| S7 | Sandboxing (Claude Code Docs) | https://code.claude.com/docs/en/sandboxing | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A Claude API request carries an API key or a short-lived access token in a header. | S4 | "`Authorization` | `Bearer <token>`, where `<token>` is your API key or a short-lived access token" |
| C2 | The key can also go in the older `x-api-key` header, which is still supported. | S4 | "`x-api-key` | Your API key from Console. Legacy fallback for `Authorization`, still supported" |
| C3 | Keys are created in the Console; workspaces separate environments. | S4 | "generate API keys on the API keys page" / "Use workspaces in the Console to separate environments" |
| C4 | The system prompt is not a secret and not a security control; it must not hold credentials or connection strings. | S2 | "the system prompt should not be considered a secret, nor should it be used as a security control. Accordingly, sensitive data such as credentials, connection strings, etc. should not be contained within the system prompt language." |
| C5 | Keep keys, database names, and roles out of the prompt, in systems the model cannot reach. | S2 | "Avoid embedding any sensitive information (e.g. API keys, auth keys, database names, user roles, permission structure of the application) directly in the system prompts. Instead, externalize such information to the systems that the model does not directly access." |
| C6 | Training or instructions may not always be followed; an independent output check is better. | S2 | "it is not a guarantee that the model will always adhere to this. An independent system that can inspect the output to determine if the model is in compliance with expectations is preferable" |
| C7 | The real risk is delegating session and authorization checks to the LLM, not the leak. | S2 | "the fundamental security risk is not that these have been disclosed, it is that the application allows bypassing strong session management and authorization checks by delegating these to the LLM" |
| C8 | 3 root causes of excessive agency: functionality, permissions, autonomy. | S1 | "The root cause of Excessive Agency is typically one or more of: excessive functionality; excessive permissions; excessive autonomy." |
| C9 | Authorization belongs in downstream systems, not in an LLM decision. | S1 | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| C10 | Minimize tools and functions; a summarising mail tool needs read, not send or delete. | S1 | "an extension that accesses a user's mailbox to summarise emails may only require the ability to read emails, so the extension should not contain other functionality such as deleting or sending messages." |
| C11 | Avoid open-ended tools (shell, fetch URL); build a narrow file-writing tool. | S1 | "Avoid the use of open-ended extensions where possible (e.g., run a shell command, fetch a URL, etc.)" / "build a specific file-writing extension" |
| C12 | Act in the user's context with minimum scope, not a generic privileged identity. | S1 | "actions taken on behalf of a user are executed on downstream systems in the context of that specific user, and with the minimum privileges necessary" |
| C13 | A human approves high-impact actions. | S1 | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| C14 | Downstream systems validate every request against policy. | S1 | "all requests made to downstream systems via extensions are validated against security policies." |
| C15 | Logging, monitoring, and rate limits do not prevent but limit damage. | S1 | "The following options will not prevent Excessive Agency, but can limit the level of damage caused" |
| C16 | The email assistant example: plugin can send, indirect prompt injection forwards mail; 3 fixes; rate limit reduces damage. | S1 | "the plugin that the system developer has chosen to use also contains functions for sending messages" / "eliminating excessive permissions by authenticating to the user's email service via an OAuth session with a read-only scope" / "requiring the user to manually review and hit 'send'" / "implementing rate limiting on the mail-sending interface" |
| C17 | A tool that reads one user's documents connects with an account that sees all users' files. | S1 | "connects to the document repository with a privileged account that has access to files belonging to all users." |
| C18 | A system-prompt restriction on returned data can be bypassed via prompt injection. | S3 | "such restrictions may not always be honored and could be bypassed via prompt injection or other methods." |
| C19 | Kubernetes Secrets are unencrypted in etcd by default; API or etcd access can read them; enable encryption at rest and RBAC. | S5 | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd). Anyone with API access can retrieve or modify a Secret, and so can anyone with access to etcd." / "Enable Encryption at Rest for Secrets. Enable or configure RBAC rules" |
| C20 | Token passthrough: an MCP server forwards a token not issued to it; forbidden. | S6 | "an MCP server accepts tokens from an MCP client without validating that the tokens were properly issued to the MCP server and passes them through" / "Token passthrough is explicitly forbidden" |
| C21 | The Claude Code Bash sandbox is an OS-enforced boundary limiting files and network domains. | S7 | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs" / "You set which files and network domains those commands can reach" |
| C22 | Seatbelt on macOS, bubblewrap on Linux. | S7 | "macOS: sandboxing uses the built-in Seatbelt framework" / "Linux and WSL2: the sandbox relies on `bubblewrap` and `socat`" |
| C23 | If the sandbox cannot start, commands run unsandboxed by default; `sandbox.failIfUnavailable` makes it exit. | S7 | "if the sandbox can't start because a dependency is missing or the platform is unsupported, Claude Code runs commands without sandboxing. To make Claude Code exit at startup instead, set `sandbox.failIfUnavailable` to `true`." |
| C24 | Sensitive information list (Key words). | S3 | "personal identifiable information (PII), financial details, health records, confidential business data, security credentials, and legal documents." |
| C25 | Least privilege (Key words). | S3 | "Limit access to sensitive data based on the principle of least privilege. Only grant access to data that is necessary for the specific user or process." |
| C26 | Request headers of the curl example: `Authorization: Bearer`, `anthropic-version`, `content-type`. | S4 | "`Authorization` | `Bearer <token>`" / "`anthropic-version` | API version (for example, `2026-10-21`)" / "`content-type` | `application/json`" |

## Not on the page / doubts

- Fixed in the fact-check (2026-10-28): the curl example used `x-api-key` and `anthropic-version: 2023-06-01`. `2023-06-01` is still listed on the API versions page, but S4 gives `2026-10-21` as its example and calls `x-api-key` a legacy fallback. The example now uses `Authorization: Bearer` and `anthropic-version: 2026-10-21`, both from the S4 header table (see C26).
- The tester tips and the "key from an environment variable" rule are the tutorial's own advice.
