# AI Concepts page: Guardrails (research notes)

Writer notes for `content/ai-concepts/guardrails.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data. No text of the third-party infographic is copied.

## Sources

| Id | Source | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | LLM01:2025 Prompt Injection | OWASP Gen AI Security Project | https://genai.owasp.org/llmrisk/llm01-prompt-injection/ | 2026-10-28 |
| S2 | LLM06:2025 Excessive Agency | OWASP Gen AI Security Project | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |
| S3 | Mitigate jailbreaks and prompt injections | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks | 2026-10-28 |
| S4 | Configure permissions | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/permissions | 2026-10-28 |
| S5 | Sandboxing | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/sandboxing | 2026-10-28 |
| S6 | Beyond permission prompts: making Claude Code more secure and autonomous | Anthropic Engineering | https://www.anthropic.com/engineering/claude-code-sandboxing | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Prompt injection: input changes the model's behavior or output in ways nobody intended. | S1 | "A Prompt Injection Vulnerability occurs when user prompts alter the LLM's behavior or output in unintended ways." |
| C2 | Direct injection comes from the user's prompt. Indirect injection comes from external content such as web pages or files. | S1 | "Direct prompt injections occur when a user's prompt input directly alters the behavior of the model" / "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files." |
| C3 | It is not clear that a fool-proof prevention exists. RAG and fine-tuning do not fully stop it. | S1 | "it is unclear if there are fool-proof methods of prevention for prompt injection." / "research shows that they do not fully mitigate prompt injection vulnerabilities." |
| C4 | OWASP mitigations: least privilege, human-in-the-loop for privileged operations, separate untrusted content, adversarial tests that treat the model as an untrusted user. | S1 | "Restrict the model's access privileges to the minimum necessary for its intended operations." / "Implement human-in-the-loop controls for privileged operations to prevent unauthorized actions." / "Separate and clearly denote untrusted content to limit its influence on user prompts." / "Perform regular penetration testing and breach simulations, treating the model as an untrusted user" |
| C5 | Excessive agency: the weakness that lets an LLM system do damaging actions after a bad model output. Three root causes: too much functionality, permissions, autonomy. | S2 | "Excessive Agency is the vulnerability that enables damaging actions to be performed" / "excessive functionality;" "excessive permissions;" "excessive autonomy." |
| C6 | Give tools only the minimum permissions; run actions in the user's own security scope. | S2 | "Limit the permissions that LLM extensions are granted to other systems to the minimum necessary" / "Track user authorization and security scope to ensure actions taken on behalf of a user are executed" |
| C7 | A human approves high-impact actions before they run. | S2 | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| C8 | Complete mediation: authorization lives in the downstream system, not in the LLM's decision. | S2 | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| C9 | Two threat models: jailbreak/direct injection (the user is the adversary) and indirect injection (third-party content such as web pages, emails, documents, tool results). | S3 | "Jailbreaks and direct prompt injection, where the user of your application is the adversary" / "Indirect prompt injection, where the user is trusted but Claude processes third-party content (webpages, emails, documents, tool results) that contains adversarial instructions." |
| C10 | Input screens: a lightweight model can pre-screen input; input validation filters known injection patterns. | S3 | "Use a lightweight model such as Claude Haiku 5.5 to pre-screen user input" / "Filter user input for known injection patterns before it reaches Claude." |
| C11 | Least privilege so a successful injection does little damage: no unneeded secrets, sandboxed tools, narrow permissions. | S3 | "Apply the principle of least privilege so that a successful injection can do minimal damage: don't give Claude access to secrets it doesn't need, run tools in sandboxed environments, and scope permissions as narrowly as possible." |
| C12 | Put untrusted content only in tool results; say in the system prompt that it is untrusted data. | S3 | "Deliver third-party content to Claude inside tool_result blocks" / "Tell Claude explicitly that content returned from tools, documents, or searches is untrusted data" |
| C13 | Red-team your own agent with documents, emails, and tool outputs that contain injection attempts. | S3 | "test your workflow with documents, emails, and tool outputs that deliberately contain injection attempts, and confirm that Claude ignores them and that your screening and confirmation steps catch the rest." |
| C14 | Monitor outputs for signs of successful injection; layer the strategies. | S3 | "Regularly analyze outputs for signs of successful injection." / "By layering these strategies" |
| C15 | Claude Code rules: allow (no manual approval), ask (prompt), deny (block). | S4 | "Allow rules let Claude Code use the specified tool without manual approval." / "Ask rules prompt for confirmation" / "Deny rules prevent Claude Code from using the specified tool." |
| C16 | Order: deny, then ask, then allow. An allow rule cannot carve an exception out of a deny rule. | S4 | "Rules are evaluated in order: deny, then ask, then allow." / "An allow rule can't carve an exception out of a deny rule." |
| C17 | Manual mode: file edits and most shell commands need approval; read-only actions do not. | S4 | table: "Read-only ... No" / "Bash commands ... Yes, except a built-in set of read-only commands" / "File modification ... Yes" |
| C18 | If a tool is denied at any level, no other level can allow it. Managed settings cannot be overridden. | S4 | "If a tool is denied at any level, no other level can allow it." / "no other level, including command line arguments, can override a managed permission rule." |
| C19 | A Bash rule matches the command text and is not a security boundary around the program. | S4 | "a deny or ask rule covers the invocation Claude usually produces and isn't a security boundary around the program." |
| C20 | bypassPermissions skips prompts; use it only in isolated environments such as containers or VMs. | S4 | "Only use this mode in isolated environments like containers or VMs where Claude Code can't cause damage." |
| C21 | The Bash sandbox is an OS-enforced boundary around shell commands. It covers shell commands only. | S5 | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." / "covers shell commands only. Claude's file tools, MCP servers, and hooks run outside it." |
| C22 | Default writes: working directory and subdirectories (plus added dirs and temp dir). Default reads still allow credential files. | S5 | "read and write access to the current working directory and its subdirectories" / "This default still allows reading credential files, so protect credentials you don't want commands to read." |
| C23 | Network: no direct route; a proxy checks each host against allowed domains, which start empty. | S5 | "A sandboxed command has no direct route to the network." / "checks each host against your allowed domains, which start empty." |
| C24 | Seatbelt on macOS, bubblewrap on Linux. | S5 | "uses Seatbelt for sandbox enforcement" / "uses bubblewrap for isolation" |
| C25 | A connection to a host outside the allowed list waits for a decision; in Manual mode you get a prompt. | S5 | "the command stays in the sandbox and waits for a decision." / Manual mode: "You get a prompt." |
| C26 | Both isolation layers are needed: no network isolation lets a compromised agent exfiltrate files; no filesystem isolation lets it escape the sandbox. | S6 | "Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys;" / "without filesystem isolation, a compromised agent could easily escape the sandbox and gain network access." |
| C27 | Sandboxing reduced permission prompts by 84% (Anthropic's own measurement). | S6 | "sandboxing safely reduces permission prompts by 84%." |
| C28 | Approval fatigue: many prompts make people stop reading what they approve. | S6 | "Constantly clicking "approve" slows down development cycles and can lead to 'approval fatigue'," |

## Infographic seed: check

| Seed point | Verdict |
|---|---|
| user input -> model -> action check (least privilege + sandbox) -> human OK for risky actions -> safe output | Matches S1, S2, S3, S5. Kept as the page diagram, in the tutorial's own words. |
| "human OK? risky actions only" | Matches S2 ("high-impact actions") and S1 ("privileged operations"). S6 adds the reason to keep prompts few: approval fatigue. |
| "filters alone can't stop prompt injection" | Correct in substance. S1 says no fool-proof method is known; S3 lists filters as one layer and adds least privilege, sandboxes, and confirmation steps. The page says "filters reduce the risk but do not remove it". |
| "The model asks; your rules decide" (page description) | Matches S2 "complete mediation" and S4 deny-first rule order. |

No seed point needed a correction of a number or a version. The OWASP edition is 2025 (the current one on genai.owasp.org on 2026-10-28).

## Not on the page

No claim about NIST AI 600-1, auto mode's classifier details, or specific jailbreak strings. Attack examples on the page are generic and harmless.
