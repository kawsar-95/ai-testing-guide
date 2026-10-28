# Voice fact-check: content/ai-concepts/mcp.mdx

Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 6 `<Voices>` blocks (`## Key words` has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a dropped hedge; a wrong or misleading statement; wrong or unnatural Bangla; Bangla that does not use আপনি or that translates a product name, code, command, or common technical term.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (`tests/voice-source.test.ts`).
- No heading in Layman or Bangla: PASS.
- No তুমি / তোমার: PASS (0 hits).
- Product names, code, and terms stay in English in Bangla (MCP, Claude Code, JSON-RPC 2.0, stdio, Streamable HTTP, OAuth, `tools/list`, `tools/call`, `server/discover`, `isError: true`, `.mcp.json`, `npx @modelcontextprotocol/inspector`, Node 22.19.0, AAIF, goose, AGENTS.md): PASS.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Dates (25 Nov 2024, 9 Dec 2025), the 6 launch servers, the 5 products, "more than 10,000", the 3 co-founders, and the 3 first projects match. "Puppeteer is a tool that drives a browser" restates the Technical gloss. Governance sentence was changed with the Technical fix (FAIL row 10 of the main report) to "Anthropic said ... would stay the same" in all 3 voices. |
| How it works | PASS | PASS | The diagram is restated in words with the same 3 clients, 3 servers, and local/remote split. Three primitives with the same examples. "Sampling ... deprecated from `2026-07-28`" matches. Layman leaves out "model-controlled" (omission, not a FAIL). "each request stands alone" restates "stateless". |
| Trade-offs | PASS | PASS | Same 4 risks, same cites. The `.mcp.json` sentence got "in an interactive session" / "interactive session-এ" with the Technical fix (row 30). "Anthropic ... check the security ... or run them" restates "security-audit or manage". |
| A real-life example | PASS | PASS | Labelled as an invented example in all 3 voices. Same 3 servers, `create_issue`, the quoted injected text (kept in English in Bangla, as a literal string), `close_issue` 40 times (৪০ in Bangla), and the 2 test cases. |
| Common mistakes | PASS | PASS | Same 8 items in the same order, same cites. Layman says "protocol error" for "JSON-RPC protocol error" (less detail, not a new fact). |
| What a tester can check | PASS | PASS | Same Inspector facts (3 clients, command, Node 22.19.0). Layman and Bangla leave out the CLI code block (omission). The tip is labelled as tutorial advice and has no cites in all 3 voices. |

Bangla quality: natural, uses আপনি (for example "পড়ুন", "আপনার সম্মতি", "বিশ্বাস করবেন না"), and keeps technical terms in English. No change needed beyond the two sentences that followed the Technical fixes.

Open FAILs: 0
