# Voices fact check: AI Skills, AI Research

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: web search past the cutoff with cites, research builds on searches, hundreds of sources, human check. Cites 1, 2, 3, 6. Layman "new web content from after its training" restates "real-time content past its knowledge cutoff"; no fact changed |
| How it works | PASS | PASS | Same loop (code block becomes a sentence), same facts about search steps, 150 characters, `page_age`, domain filters, `max_uses`, tens of minutes, prompt injection. Cites 1, 3, 4, 5 |
| How a tester uses it | PASS | PASS | Same 4 uses, cites 1, 4, 6. Layman "login flow" = "auth flow"; Bangla keeps "auth flow". The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 4 tools and facts as a list, cites 2 to 5 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 6, 1, 4, 3. The AI Agents link is left out (navigation) |
| How to start | PASS | PASS | Same 5 steps, cites 1, 6. Step 5 names the workflow automation page without a link |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites (script check: 0 misses).
- Bangla keeps Claude, OpenAI, Perplexity, Exa, API, `allowed_domains`, `blocked_domains`, `max_uses`, `page_age`, `search_domain_filter`, `includeDomains`, knowledge cutoff, prompt injection, RFC, WCAG, MUST, assertion in English.
- Bangla uses আপনি / আপনার; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

Open FAILs: 0
