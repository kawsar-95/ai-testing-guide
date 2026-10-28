# Fact check: AI Skills, AI Governance

Sources fetched fresh on 2026-10-28 by an agent that did not write the page. S1 = NIST AI RMF page, S2 = NIST AIRC AI RMF Core, S3 = ISO/IEC 42001 (iso.org/standard/42001 returned HTTP 403; checked with iso.org search snippets of the same page and of "ISO/IEC 42001 explained"), S4 = European Commission AI Act page, S5 = OWASP Top 10 for LLM Applications 2025 list, S6 = OWASP LLM02:2025, S7 = Claude Code docs Data usage, S8 = Claude Code docs Settings, S9 = Claude Code docs Monitoring.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | AI RMF helps organizations manage AI risks to people, organizations, and society | S1 | PASS | "manage risks to individuals, organizations, and society associated with artificial intelligence" |
| 2 | AI RMF is voluntary | S1 | PASS | "is intended for voluntary use" |
| 3 | ISO/IEC 42001 gives requirements for an AI management system in an organization | S3 | PASS (403, search snippet) | iso.org snippet: standard covers "the AI management system (AIMS) within an organization" |
| 4 | EU AI Act is law in the EU | S4 | PASS | Regulation (EU) 2024/1689, "the first-ever comprehensive legal framework on AI worldwide" |
| 5 | OWASP Top 10 for LLM Applications lists main security risks of LLM apps | S5 | PASS | List of 10 "risks, vulnerabilities and mitigations for developing and securing generative AI". Note: OWASP also posted a 2026 edition (page dated 3 August 2026); the page names the 2025 list, so the claims stay correct |
| 6 | AI RMF 1.0 released 26 January 2023 | S1 | PASS | "Released on January 26, 2023" |
| 7 | Four functions: govern, map, measure, manage | S2 | PASS | "govern, map, measure, and manage" |
| 8 | NIST published a Generative AI Profile, NIST-AI-600-1 | S1 | PASS | "NIST-AI-600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile" |
| 9 | ISO/IEC 42001:2023: requirements to set up, run, and keep improving an AI management system | S3 | PASS (403, search snippet) | iso.org snippet: "establishing, implementing, maintaining and continually improving" |
| 10 | EU AI Act in force since 1 August 2024 | S4 | PASS | "entered into force on 1 August 2024" |
| 11 | Applicable from 2 August 2026 with some exceptions | S4 | PASS | "applicable on 2 August 2026, with some exceptions" |
| 12 | AI literacy duties apply from 2 February 2025 | S4 | PASS | "AI literacy obligations entered into application from 2 February 2025" |
| 13 | Four levels of risk | S4 | PASS | "defines 4 levels of risk for AI systems" |
| 14 | OWASP 2025: LLM01 Prompt Injection, LLM02 Sensitive Information Disclosure, LLM06 Excessive Agency | S5 | PASS | "LLM01:2025 Prompt Injection", "LLM02:2025 Sensitive Information Disclosure", "LLM06:2025 Excessive Agency" |
| 15 | Govern builds a risk culture and runs through the other functions | S2 | PASS | "cultivates and implements a culture of risk management"; "cross-cutting function that is infused throughout" |
| 16 | Map sets the context of the risks of one AI system | S2 | PASS | "establishes the context to frame risks related to an AI system" |
| 17 | Measure uses quantitative, qualitative, or mixed methods | S2 | PASS | "employs quantitative, qualitative, or mixed-method tools" |
| 18 | Manage puts resources on mapped and measured risks | S2 | PASS | "allocating risk resources to mapped and measured risks" |
| 19 | Text diagram (data policy, access roles, audit log mapped to tool settings) | S7-S9 | PASS | Summary of rows 20-25; no new fact |
| 20 | Commercial terms: no training on code or prompts sent to Claude Code unless the customer opts in | S7 | PASS | "does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data" |
| 21 | Transcripts kept locally under `~/.claude/projects/` for 30 days by default | S7 | PASS | "store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default" |
| 22 | A `deny` rule `Read(./.env)` stops the tool reading a secrets file | S8 | PASS | Example with `"deny": ["Read(./.env)", ...]` to "stop it reading `.env` files" |
| 23 | Nothing in a user's own settings overrides a managed key | S8 | PASS | "Nothing in your own settings files or `--settings` overrides a managed key" |
| 24 | `CLAUDE_CODE_ENABLE_TELEMETRY=1` exports metrics and events through OpenTelemetry | S9 | PASS | "exporting telemetry data through OpenTelemetry"; "Enables telemetry collection (required)" |
| 25 | Prompt text redacted by default; `OTEL_LOG_USER_PROMPTS=1` includes it | S9 | PASS | "Redacted by default. Set `OTEL_LOG_USER_PROMPTS=1` to include it" |
| 26 | OWASP lists personal data, financial details, health records as sensitive information an LLM app can leak | S6 | PASS | "personal identifiable information (PII), financial details, health records" |
| 27 | Back the list with `deny` rules for `.env` | S8 | PASS | Same as row 22 |
| 28 | OpenTelemetry events can show which tools ran | S9 | PASS | `claude_code.tool_result`: "Logged when a tool completes execution", with `tool_name` |
| 29 | Keep prompt text out of the log unless needed | S9 | PASS | Advice; S9 supports that prompt logging is opt-in |
| 30 | OWASP list as test charter: prompt injection, private data, actions it should not take | S5 | PASS | Matches LLM01, LLM02, LLM06 |
| 31 | Tutorial advice tip | none | PASS | Marked as the tutorial's own advice; no `<Cite>` |
| 32 | Tools table: AI RMF voluntary, four functions | S2 | PASS | Rows 2, 7 |
| 33 | Tools table: ISO 42001 requirements to set up, run, improve | S3 | PASS | Row 9 |
| 34 | Tools table: AI literacy from 2 February 2025 | S4 | PASS | Row 12 |
| 35 | Tools table: LLM02 is Sensitive Information Disclosure | S5 | PASS | Row 14 |
| 36 | Tools table: `deny` rules can block `.env` reads | S8 | PASS | Row 22 |
| 37 | OWASP recommends data sanitization | S6 | PASS | "Implement data sanitization ..."; also "Apply strict input validation methods to detect and filter out potentially harmful or sensitive data inputs" |
| 38 | Back the policy with `deny` rules and managed settings | S8 | PASS | Rows 22, 23 |
| 39 | Log tool events; prompt text redacted is the default | S9 | PASS | Row 25 |
| 40 | "The AI RMF is voluntary and asks you to map the context of each system first" | S2 | FAIL | Voluntary: PASS ("Like the AI RMF, the Playbook is voluntary"). "Asks you to map ... first" overstates S2: "most users of the AI RMF would start with the map function", and "functions may be performed in any order across the AI lifecycle". See FAIL 1 |
| 41 | Prompts and outputs can stay on the laptop in local transcripts | S7 | PASS | Row 21 |
| 42 | How to start: `deny` rules (S8), OWASP list (S5), four functions (S2) | S8, S5, S2 | PASS | Rows 22, 14, 7 |
| 43 | Key words: AI RMF voluntary | S1 | PASS | Row 2 |
| 44 | Key words: AI management system = policies and processes for AI in an organization | S3 | PASS (403, search snippet) | iso.org "ISO/IEC 42001 explained" snippet: elements of an organization "to establish policies and objectives, as well as processes to achieve those objectives" |
| 45 | Key words: AI literacy from 2 February 2025 | S4 | PASS | Row 12 |
| 46 | Key words: Prompt injection is LLM01 of the 2025 list | S5 | PASS | Row 14 |
| 47 | Key words: sensitive information disclosure, personal or health records | S6 | PASS | Row 26 |
| 48 | Key words: managed settings, deployed by an organization, users cannot override | S8 | PASS | Row 23 |
| 49 | Key words: audit log, for example OpenTelemetry events | S9 | PASS | Row 24 |

## Other checks

| Check | Verdict | Note |
|---|---|---|
| Sources official | PASS | NIST, NIST AIRC, ISO, European Commission, OWASP GenAI Security Project, Claude Code docs. No blog, news, or forum |
| No prices | PASS | None on the page |
| Cites point to the supporting source | PASS | Each row above |
| No copied text | PASS | Manual compare against the fetched text: the longest shared run is "code or prompts sent to Claude Code" (6 words) |
| Tutorial advice tip has no cite | PASS | No `<Cite>` in the Callout |
| Internal links | PASS | `/configure/settings/` and `/ai-skills/ai-evals/` are in the route maps; `content/ai-skills/ai-evals.mdx` exists |

## FAILs

1. Row 40, Common mistakes, Technical: "The AI RMF is voluntary and asks you to map the context of each system first <Cite n={2} />."
   Fix: "The AI RMF is voluntary, and its actions are not a checklist. Most users start with the map function, which sets the context of each system <Cite n={2} />." (S2: "Actions do not constitute a checklist"; "most users of the AI RMF would start with the map function".)

## Round 2 (2026-10-28)

I read the current MDX again. I fetched the NIST AIRC AI RMF Core page (S2) again on 2026-10-28.

| # | Changed sentence (Technical) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| R2-1 | "The AI RMF is voluntary, and its actions are not a checklist. Most users start with the map function, which sets the context of each system" (fixes FAIL 1) | S2 | PASS | (a) "most users of the AI RMF would start with the map function and continue to measure or manage"; (b) "Actions do not constitute a checklist, nor are they necessarily an ordered set of steps."; (c) "Like the AI RMF, the Playbook is voluntary": S2 states that the AI RMF is voluntary, so cite 2 supports it. Map sets the context: "establishes the context to frame risks related to an AI system". S1 also says "intended for voluntary use", so `<Cite n={1} />` is an optional addition, not a fix |
| R2-2 | "By default, Claude Code also keeps session transcripts on your machine for 30 days, in `~/.claude/projects/`" | S7 | PASS | "store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default" |
| R2-3 | "By default, the events hide the prompt text. To include it, set `OTEL_LOG_USER_PROMPTS=1`" | S9 | PASS | "Prompt content. Redacted by default. Set `OTEL_LOG_USER_PROMPTS=1` to include it" |
| R2-4 | Copy check of R2-1 to R2-3 | - | PASS | Longest shared run with S2, S7, S9 is under 8 words ("most users ... start with the map function" is 7 words with a gap) |

FAIL 1 is closed.

Open FAILs: 0
