# Voices fact check: AI Skills, MCP Connectors

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks with voices, 12 panels). `## Key words` has no voices.

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: definition, data sources, tools, workflows, USB-C, 4 apps, connector = MCP server, host/client/server. Cite 1 only. Layman says "open standard" (S1 also calls MCP an "open protocol"); Bangla keeps "open-source". The link to `/extend/mcp/` is only in Technical; a link is not a fact |
| How it works | PASS | PASS | Same 3 roles, JSON-RPC 2.0, 2 transports, auth methods and OAuth, tools/resources/prompts, `tools/list`, `tools/call`, `inputSchema`, elicitation, `claude mcp add` forms, 3 scopes, `.mcp.json`, `/mcp`, SSE deprecated, API MCP connector. Cites 2, 4, 6, as in Technical. The text diagram is prose in Layman and Bangla; transport names are given in the next paragraph, so no fact is lost |
| How a tester uses it | PASS | PASS | Same 5 uses, cites 5, 4, 2, 4, 2, 2. The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite. The `/automate/playwright/` link is only in Technical (a link, not a fact). The example question stays in English in Bangla, as in Technical |
| Tools to try | PASS | PASS | Same 5 tools and facts as the Technical table, as a list. Cites 5, 2, 2, 4, 6 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes. Cites 4, 3, 3, 4, 4, 4, 2, 3, as in Technical |
| How to start | PASS | PASS | Same 5 steps, cites 5, 4, 4. The "read MCP and Hooks" links of step 5 are only in Technical (links, not facts) |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- No fact of Technical lost or changed in Layman or Bangla.
- Every `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites.
- Bangla keeps MCP, Claude Code, Playwright, JSON-RPC 2.0, stdio, Streamable HTTP, OAuth, SSE, `tools/list`, `tools/call`, `inputSchema`, `claude mcp add`, `--transport http`, `--env`, `/mcp`, `.mcp.json`, MCP Inspector, and Messages API in English.
- Bangla uses আপনি; no তুমি, তোমার, তুই, or তোর (grep: 0 hits). "সে" refers to the assistant, not the reader.
- The copied-text FAIL of the Technical definition (see the main report) is not in Layman ("is an open standard. It connects AI apps to outside systems") or in Bangla.

## Round 2 (2026-10-28)

Changed lines: Technical "In plain words" (line 25), Technical "How it works" (line 70), Layman "How it works" (line 87). Bangla did not change. Each changed sentence was compared with the other 2 panels of its block.

| Changed text | Verdict | Reason |
|---|---|---|
| Technical line 25: "is an open-source standard that links AI apps to outside systems" | PASS | Same fact as Layman ("an open standard. It connects AI apps to outside systems") and Bangla ("AI অ্যাপকে বাইরের সিস্টেমের সাথে যুক্ত করার একটা open-source স্ট্যান্ডার্ড"). Cite 1 in all 3 panels |
| Technical line 70 and Layman line 87: Streamable HTTP "accepts bearer tokens, API keys, or custom headers for auth. For the tokens, MCP recommends OAuth" | PASS | Same 3 auth methods and the OAuth advice in all 3 panels; Bangla "bearer token, API key আর custom header সাপোর্ট করে। টোকেনের জন্য MCP OAuth সুপারিশ করে" says the same. Cite 2 in all 3 panels. Terms stay in English in Bangla |

No Round 1 FAIL was open in this report. No new FAIL.

Open FAILs: 0
