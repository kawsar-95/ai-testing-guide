# Voices fact check: AI Skills, Workflow Automation

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts: n8n workflow, Zap, scenario, trigger, actions, AI providers, glue work, difference from test automation. Cites 1, 5, 6, 7 |
| How it works | PASS | PASS | Same facts: webhooks, no polling, n8n test and production URLs, filters and Paths, triage sketch (code block becomes sentences), error workflow, incomplete execution, Zap history. Cites 2, 3, 6, 7, 8. Layman leaves "as JSON" out of the sketch; the next block gives the JSON fact, so nothing is lost on the page |
| How a tester uses it | PASS | PASS | Same 4 uses, cites 6, 8. The Prompting and GitHub Actions links are left out (navigation). The tip is a plain paragraph, still marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 3 tools and facts as a list, cites 4, 6, 7. The AI Governance link is left out (navigation) |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 2, 3, 7, 6 |
| How to start | PASS | PASS | Same 5 steps, cites 8, 6, 3. Step 5 names the AI agents page without a link |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each `<Cite n>` in Layman and Bangla uses an `n` that Technical of the same block cites (script check: 0 misses).
- Bangla keeps n8n, Zapier, Zap, Make, scenario, trigger, action, webhook, HTTP request, API, poll, Webhook node, test URL, production URL, Paths, Error Trigger, incomplete execution, Zap history, CI, Playwright, JSON, self-host, on-premises, private cloud, OpenAI, Anthropic, Google in English.
- Bangla uses আপনি / আপনার; no তুমি, তোমার, তুই, or তোর (grep: 0 hits).

Open FAILs: 0
