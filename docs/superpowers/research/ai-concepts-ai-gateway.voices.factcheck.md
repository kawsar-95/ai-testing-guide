# Voice fact-check: AI Gateways

Page: `content/ai-concepts/ai-gateway.mdx`. Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 6 `<Voices>` blocks (`## Key words` has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a dropped hedge; a wrong statement; wrong or unnatural Bangla; Bangla that uses তুমি or translates a product name, code, or common technical term. An omission is not a FAIL.

## Sections

| Section | Layman | Bangla | Note |
|---|---|---|---|
| In plain words | PASS | PASS | Same 4 products, "100+" / "১০০-র বেশি", same cites 1, 3, 5, 7, 8. Bangla uses আপনার. |
| How it works | PASS | PASS | The text diagram is not repeated; the five steps match it. "pauses a failing model for a time" = cooldown; "prompt too long" = context-window error. `cf-aig-step`, `0`, TPM, env var names, headers, `/status` are the same. Layman drops "by default" for the Cloudflare error trigger: an omission, not a new fact. |
| Trade-offs | FAIL, fixed | FAIL, fixed | Followed the Technical fixes: "Claude Code ... with each release" in place of "clients", and the hop / shared-failure sentence is now marked as the tutorial's own reasoning in each voice ("পরের কথাটা টিউটোরিয়ালের নিজের যুক্তি, কোনো সোর্সের উদ্ধৃতি নয়।"). |
| A real-life example | PASS | PASS | "This is an invented example" / "এটা একটা বানানো উদাহরণ" in both. Three tools, same facts, same cites. |
| Common mistakes | FAIL, fixed | FAIL, fixed | Last bullet followed the Technical fix: "new Claude Code features". The fallback-test bullet matches Technical and S6 ("real provider error", "outside production" / "production-এর বাইরে"). |
| What a tester can check | PASS | FAIL, fixed | No cites in any panel. Bangla "Log redaction" bullet said "দেখুন ... দেখা যায় না" (a statement, not a check like the other bullets). Fixed: "দেখা যায় কি না". |

## Language checks

- Bangla addresses the reader with আপনি (দিন, রাখুন, চালান, দেখুন, করুন). No তুমি. PASS.
- Product names, code, and terms stay in English: Cloudflare, LiteLLM, Kong, Azure API Management, `ANTHROPIC_BASE_URL`, `cf-aig-step`, `allowedProviders`, TPM, PII, MCP, A2A, fallback, rate limit, proxy, endpoint. PASS.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block. PASS (also checked by `tests/voice-source.test.ts`).

FAILs found: 4 (3 follow the Technical fixes, 1 Bangla wording). Fixed: 4.

Open FAILs: 0
