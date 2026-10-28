# Research notes: AI Skills, AI Governance

Page: `content/ai-skills/ai-governance.mdx`. All sources accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL |
|---|---|---|---|
| S1 | AI Risk Management Framework | NIST | https://www.nist.gov/itl/ai-risk-management-framework |
| S2 | AI RMF Core | NIST AI Resource Center | https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ |
| S3 | ISO/IEC 42001:2023 AI management systems | ISO | https://www.iso.org/standard/42001 |
| S4 | AI Act | European Commission | https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai |
| S5 | OWASP Top 10 for LLM Applications 2025 | OWASP GenAI Security Project | https://genai.owasp.org/llm-top-10/ |
| S6 | LLM02:2025 Sensitive Information Disclosure | OWASP GenAI Security Project | https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/ |
| S7 | Data usage | Claude Code docs | https://code.claude.com/docs/en/data-usage |
| S8 | Settings files and precedence | Claude Code docs | https://code.claude.com/docs/en/settings |
| S9 | Monitoring | Claude Code docs | https://code.claude.com/docs/en/monitoring-usage |

S3 note: iso.org returned HTTP 403 (bot check) to a direct fetch. The quote below is the standard's abstract as the search index shows it for that URL. The EUR-Lex text of Regulation (EU) 2024/1689 also refused a direct fetch, so the page cites the European Commission page (S4).

## Claims

| Claim | Source | Quote |
|---|---|---|
| AI RMF manages AI risks to people, organizations, society | S1 | "to better manage risks to individuals, organizations, and society associated with artificial intelligence (AI)" |
| AI RMF is voluntary | S1 | "is intended for voluntary use" |
| AI RMF 1.0 released 26 January 2023 | S1 | "Released on January 26, 2023" |
| Generative AI Profile NIST-AI-600-1, 26 July 2024 | S1 | "NIST-AI-600-1, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile" (released July 26, 2024) |
| Four functions: govern, map, measure, manage | S2 | "the Core is composed of four functions: govern, map, measure, and manage" |
| Govern builds a risk culture and runs through all | S2 | "govern is a cross-cutting function that is infused throughout AI risk management" |
| Map sets the context | S2 | "The map function establishes the context to frame risks related to an AI system." |
| Measure uses quantitative/qualitative tools | S2 | "The measure function employs quantitative, qualitative, or mixed-method tools" |
| Manage allocates resources to risks | S2 | "The manage function entails allocating risk resources to mapped and measured risks." |
| The functions are not a checklist; most users start with Map, which sets the context of each system (fix of the first fact check) | S2 | The Core page: after the Govern function is in place, most users start with the Map function; the functions can be done in any order. Re-check the exact wording on the page. |
| ISO/IEC 42001 sets requirements for an AI management system | S3 | (abstract) requirements "for establishing, implementing, maintaining and continually improving an Artificial Intelligence Management System (AIMS) within organizations" |
| AI Act entered into force 1 August 2024 | S4 | "The AI Act entered into force on 1 August 2024." |
| Applicable 2 August 2026 with exceptions | S4 | "became applicable on 2 August 2026, with some exceptions" |
| AI literacy obligations from 2 February 2025 | S4 | "AI literacy obligations entered into application from 2 February 2025." |
| 4 levels of risk | S4 | "The AI Act defines 4 levels of risk for AI systems." |
| OWASP list names (LLM01 Prompt Injection, LLM02 Sensitive Information Disclosure, LLM06 Excessive Agency, LLM07 System Prompt Leakage) | S5 | list of LLM01:2025 to LLM10:2025 |
| Sensitive info includes PII, financial, health records | S6 | lists PII, financial details, health records |
| Data sanitization | S6 | "Implement data sanitization to prevent user data from entering the training model." |
| Commercial terms: no training on Claude Code data unless opted in | S7 | "Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us" |
| Local transcripts under ~/.claude/projects/ for 30 days by default | S7 | "store session transcripts locally in plaintext under `~/.claude/projects/` for 30 days by default" |
| Deny rule example Read(./.env) | S8 | `"deny": ["Read(./.env)", "Read(./.env.*)"]` |
| Managed settings cannot be overridden | S8 | "Nothing in your own settings files or `--settings` overrides a managed key" |
| Claude Code exports OpenTelemetry metrics and events | S9 | "exports metrics as time series data via the standard metrics protocol, events via the logs/events protocol" |
| Enable with CLAUDE_CODE_ENABLE_TELEMETRY=1 | S9 | "Enables telemetry collection (required)." |
| Prompt text redacted by default; OTEL_LOG_USER_PROMPTS=1 | S9 | "Redacted by default. Set `OTEL_LOG_USER_PROMPTS=1` to include it." |

## Removed

- Fines and penalties of the AI Act (could not read the regulation text directly).
- The exact Article numbers of the AI Act (same reason).
