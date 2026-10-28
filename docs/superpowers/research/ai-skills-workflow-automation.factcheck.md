# Fact check: AI Skills, Workflow Automation

Sources fetched fresh on 2026-10-28 (curl and WebFetch). S1 = n8n docs "Understand workflows", S2 = n8n docs "Webhook" node, S3 = n8n docs "Handle errors gracefully", S4 = n8n docs "Host n8n", S5 = n8n docs "Integrate AI", S6 = Zapier Help Center "Learn key concepts in Zap workflows", S7 = Make Help Center "Scenario settings", S8 = GitHub Docs "About webhooks". All 8 are vendor docs or vendor help centers. No source blocked the fetch.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: repeated test work; a workflow tool runs it | none | PASS | Framing of the page |
| 2 | n8n workflow = connected nodes that automate a process | S1 | PASS | "A workflow is a collection of nodes connected together to automate a process." |
| 3 | Zapier: a Zap is an automation that connects your apps and services | S6 | PASS | "A Zap is an automated workflow that connects your apps and services together." |
| 4 | Make calls its workflow a scenario | S7 | PASS | S7 uses "scenario" as the unit of work: "When a scenario run fails, Make saves it as an incomplete execution". S7 has no one-line definition, but the term is Make's own |
| 5 | A trigger is an event that starts the run | S6 | PASS | "A trigger is an event that starts a Zap." |
| 6 | Actions are the steps the workflow performs after the trigger | S6 | PASS | "An action is an event a Zap performs after it is triggered." |
| 7 | n8n AI steps can use models from OpenAI, Anthropic, or Google | S5 | PASS | "n8n lets you build AI workflows that connect different LLM providers such as OpenAI, Anthropic, and Google" |
| 8 | Glue work between tools; differs from test automation | none | PASS | The tutorial's own view |
| 9 | A webhook lets you subscribe to events; the system sends an HTTP request with the event data to your URL | S8 | PASS | "Webhooks let you subscribe to events happening in a software system" / "GitHub will send an HTTP request with data about the event to the URL that you specified." |
| 10 | Data as it happens, no polling | S8 | PASS | "Webhooks are used to receive data as it happens, as opposed to polling an API" |
| 11 | n8n Webhook node receives data from apps and services | S2 | PASS | "create webhooks, which can receive data from apps and services when an event occurs" |
| 12 | Test URL shows incoming data in the editor; production URL works after publish | S2 | PASS | "The test URL works when you select Listen for Test Event, and it shows the incoming data in the editor. The production URL registers when you publish the workflow" |
| 13 | Zapier filter: run only when conditions are true; Paths: different actions for different conditions | S6 | PASS | "Filters can be added to any Zap to restrict it to run only when certain conditions are met." / "Paths let you build advanced workflows to perform different actions based on different conditions." |
| 14 | Bug triage sketch | none | PASS | Marked as the tutorial's own example |
| 15 | n8n error workflow per workflow in settings; must start with Error Trigger; one can serve many | S3 | PASS | "For each workflow, you can set an error workflow in Workflow Settings." / "The error workflow must start with the Error Trigger. You can use the same error workflow for multiple workflows." |
| 16 | Make: a failed run is saved as an incomplete execution so data is not lost | S7 | PASS | "When a scenario run fails, Make saves it as an incomplete execution so the data isn't lost." (the page splits this run; longest shared run is 6 words) |
| 17 | Zap history is a log of every run | S6 | PASS | "Your Zap History displays a log of all Zap workflows runs" |
| 18 | Triage: AI suggests, person decides; JSON with fixed fields | none | PASS | The tutorial's own advice |
| 19 | Link `/ai-skills/prompting/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 20 | CI calls a webhook when a run ends; filter to failed main-branch runs | S8, S6 | PASS | Same quotes as rows 9 and 13; the use case is the tutorial's own |
| 21 | Link `/automate/github-actions/` | none | PASS | Route is in `lib/nav.ts` |
| 22 | Flaky-test digest; sketch on paper | none | PASS | The tutorial's own advice, no source fact |
| 23 | "Tutorial advice" tip (test the workflow like a product) | none | PASS | Marked as the tutorial's own advice; no `<Cite>` |
| 24 | Tools: n8n can be self-hosted on your own servers, on-premises, or in a private cloud | S4 | PASS | "You can self-host n8n on your own infrastructure, on-premises, or in a private cloud" |
| 25 | Tools: Make incomplete execution | S7 | PASS | Same quote as row 16 |
| 26 | Tools: Zapier sample record serves as test data for the actions | S6 | PASS | "The sample row can then be used as a test record to set up your action steps." |
| 27 | Link `/ai-skills/ai-governance/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 28 | Mistakes: test and production URL behave differently; production runs do not show in the editor | S2 | PASS | "When using the production URL, n8n doesn't display the data in the workflow." |
| 29 | Mistakes: error workflow with Error Trigger; keep failed runs in Make; add a filter | S3, S7, S6 | PASS | Same quotes as rows 15, 16, 13 |
| 30 | How to start: webhook trigger; read the run log; add the error workflow | S8, S6, S3 | PASS | Same quotes as rows 9, 17, 15 |
| 31 | Link `/ai-skills/ai-agents/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 32 | Key words (6 rows) | S1, S6, S8, S3, S7 | PASS | Same quotes as rows 2, 5, 6, 9, 15, 16 |

Other checks:
- Sources: all official. No prices (grep: 0 hits). Note: S6 says "Multi-step Zap workflows are only available on paid plans". The page does not name a plan or a price, so this is not a FAIL.
- Copy check: a script compared every 8-word run of the Technical and Layman text with the fetched text of S1 to S8. Only one URL string matches. No copied run of 8 or more words.
- Each cite points to the source that has the fact.
- The "Tutorial advice" tip has no cite.

Open FAILs: 0
