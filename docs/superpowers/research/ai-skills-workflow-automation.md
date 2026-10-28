# AI Skills page: Workflow Automation (research notes)

Writer notes for `content/ai-skills/workflow-automation.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Understand workflows (n8n docs) | https://docs.n8n.io/workflows/ | 2026-10-28 |
| S2 | Webhook (n8n docs) | https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook | 2026-10-28 |
| S3 | Handle errors gracefully (n8n docs) | https://docs.n8n.io/flow-logic/error-handling/ | 2026-10-28 |
| S4 | Host n8n (n8n docs) | https://docs.n8n.io/hosting/ | 2026-10-28 |
| S5 | Integrate AI (n8n docs) | https://docs.n8n.io/build/integrate-ai.md | 2026-10-28 |
| S6 | Learn key concepts in Zap workflows (Zapier Help Center) | https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier | 2026-10-28 |
| S7 | Scenario settings (Make Help Center) | https://help.make.com/scenario-settings | 2026-10-28 |
| S8 | About webhooks (GitHub Docs) | https://docs.github.com/en/webhooks/about-webhooks | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | An n8n workflow is a set of connected nodes that automates a process. | S1 | "a collection of nodes connected together to automate a process" |
| C2 | A workflow starts when a trigger condition occurs. | S1 | "a trigger condition occurs" |
| C3 | Zapier: a Zap is an automated workflow that connects apps and services. | S6 | "A Zap is an automated workflow that connects your apps and services together." |
| C4 | A trigger is an event that starts a Zap; an action is an event the Zap performs after the trigger. | S6 | "A trigger is an event that starts a Zap." / "An action is an event a Zap performs after it is triggered." |
| C5 | Filters restrict a Zap to run only when conditions are met; paths perform different actions on different conditions. | S6 | "Filters can be added to any Zap to restrict it to run only when certain conditions are met." / "Paths let you build advanced workflows to perform different actions based on different conditions." |
| C6 | Zap history is a log of all runs. | S6 | "Your Zap History displays a log of all Zap workflows runs" |
| C7 | A task is an action that the Zap completes successfully. | S6 | "A task is an action your Zap successfully completes." |
| C8 | Webhooks let you subscribe to events; GitHub sends an HTTP request with event data to your URL. | S8 | "Webhooks let you subscribe to events happening in a software system." / "an HTTP request with data about the event" |
| C9 | Webhooks receive data as it happens, as opposed to polling an API. | S8 | "Webhooks are used to receive data as it happens, as opposed to polling an API." |
| C10 | The n8n Webhook node receives data from apps and services when an event occurs. | S2 | "Use the Webhook node to create webhooks, which can receive data from apps and services when an event occurs." |
| C11 | The Webhook node has a test URL (data shows in the editor) and a production URL (registered when you publish; runs in the Executions tab). | S2 | WebFetch summary: test URL "Incoming data appears in the workflow editor"; production URL "Registered when you publish the workflow ... you can review those runs in the workflow's Executions tab." |
| C12 | n8n error workflow: must start with the Error Trigger; set it per workflow in Workflow Settings; one error workflow can serve many workflows. | S3 | "The error workflow must start with the Error Trigger." / "For each workflow, you can set an error workflow in Workflow Settings." / "You can use the same error workflow for multiple workflows." |
| C13 | Make saves a failed run as an incomplete execution so the data is not lost. | S7 | "When a scenario run fails, Make saves it as an incomplete execution so the data isn't lost." |
| C14 | n8n can be self-hosted on your own infrastructure, on-premises, or in a private cloud. | S4 | "You can self-host n8n on your own infrastructure, on-premises, or in a private cloud." |
| C15 | n8n AI workflows can connect LLM providers such as OpenAI, Anthropic, and Google. | S5 | "n8n lets you build AI workflows that connect different LLM providers such as OpenAI, Anthropic, and Google." |
| C16 | Zapier: a sample record from the trigger app is used as test data to set up the action steps. | S6 | "The sample row can then be used as a test record to set up your action steps." |

## Tutorial's own text (no cite)

- "Sketch the flow on paper first", the flow diagram of the bug triage example, the tester uses (bug-report triage, test-run notifications, flaky-test digest), and the "Tutorial advice" tip.
- The advice to keep a human approval before an AI step writes to a tracker.
- The "How to start" steps, except the facts that carry a cite.

## Removed

- Plan limits, task quotas, and prices of Zapier, Make, and n8n (the spec says no prices; quotas change).
- The n8n webhook payload limit (16 MB): it came from a search summary, not a fetched page, and the page does not need it.
- "n8n recommends Docker": the fetched hosting page does not say it.
