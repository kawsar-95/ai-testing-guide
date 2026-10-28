# Fact-check: content/ai-concepts/ai-gateway.mdx

Checked 2026-10-28 by an agent that did not write the page. All 8 sources were fetched fresh with WebFetch. The quotes of the research notes were not trusted. I also fetched https://code.claude.com/docs/en/gateways (the Claude Code gateway overview) to look for a source for the "one hop / shared point of failure" sentence.

## Claims (Technical text)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A gateway gives one place to manage credentials, usage tracking, cost controls, audit logging, provider switching | 1 | PASS | "A gateway gives your organization one place to manage:" followed by the five items. |
| 2 | Provider key stays on the server; developers hold gateway credentials | 1 | PASS | "the provider key stays server-side; developers hold gateway credentials instead" |
| 3 | Budgets and rate limits in one place | 1 | PASS | "enforce budgets and rate limits in one place" |
| 4 | The gateway logs every model request | 1 | PASS | "log every model request for compliance" |
| 5 | Provider change in gateway config, not on each machine | 1 | PASS | "change the provider in gateway configuration, without touching developer machines" |
| 6 | Cloudflare AI Gateway gives visibility and control over AI apps | 3 | PASS | "Cloudflare's AI Gateway allows you to gain visibility and control over your AI apps." |
| 7 | LiteLLM: self-hosted server, one endpoint for 100+ providers, MCP tools, A2A agents | 5 | PASS | "The LiteLLM AI Gateway is a self-hosted server." / "one OpenAI-compatible endpoint for 100+ LLM providers, MCP tools, and A2A agents" |
| 8 | Kong connects to major providers through one consistent API | 8 | PASS | "Connect to any major LLM provider through one consistent API" |
| 9 | Azure APIM has AI gateway features to govern models, agents, tools | 7 | PASS | "secure, scale, monitor, and govern AI models, agents, and tools" |
| 10 | Upstream can be a hosted model API, a self-hosted model, or a remote MCP server | 7 | PASS | "Language model APIs" / "Remote **MCP servers**" / "**Self-hosted** models and endpoints" |
| 11 | LiteLLM gives each user, team, project a virtual key | 5 | PASS | "Give each user, team, and project a virtual key." |
| 12 | Azure managed identities, no API key to reach Azure AI services | 7 | PASS | "Use managed identities to authenticate to AI services in Azure, so you don't need API keys for authentication." |
| 13 | Each LiteLLM key has models, budgets, rate limits | 5 | PASS | "Each key has its models, budgets, and rate limits." |
| 14 | Azure: TPM limit or token quota per consumer | 7 | PASS | "enforce limits per API consumer ... you can set a TPM limit or a token quota over a specified period" |
| 15 | Cloudflare can limit the number of requests | 3 | PASS | "limiting the number of requests your application receives" |
| 16 | Some gateways answer from a cache instead of the provider | 3 | PASS | "Serve requests directly from Cloudflare's cache instead of the original model provider." ("The gateway picks the upstream model" is the definition of routing, supported by S1 provider switching.) |
| 17 | Cloudflare: an error triggers the fallback by default; a configured timeout can too | 4 | PASS | "By default, Cloudflare triggers your fallback if a model request returns an error." / "in response to request errors or predetermined request timeouts" |
| 18 | `cf-aig-step` tells which step served; `0` is the first model | 4 | PASS | "indicates which model successfully processed the request by returning the step number" / 0: "The first (primary) model was used successfully." |
| 19 | LiteLLM: fallbacks in order, retries, cooldowns, context-window and content-policy fallbacks | 6 | PASS | "Fallbacks are done in-order"; "If a call fails after num_retries, LiteLLM falls back"; "cooldown model if it fails > 1 call in a minute"; "litellm.ContextWindowExceededErrors"; "litellm.ContentPolicyViolationError" |
| 20 | Azure circuit breaker stops requests to a backend that does not respond | 7 | PASS | "define circuit breaker rules to stop forwarding requests to AI service backends if they're not responsive" |
| 21 | Cloudflare shows requests, tokens, cost | 3 | PASS | "View metrics such as the number of requests, tokens, and the cost it takes to run your application." |
| 22 | LiteLLM records cost per request; logs and metrics to OpenTelemetry, Prometheus, others | 5 | PASS | "The gateway records the cost of each request." / "Send logs and metrics to Langfuse, Datadog, OpenTelemetry, Prometheus, and other tools." |
| 23 | Azure can log prompts and completions | 7 | PASS | "Log prompts and completions to Azure Monitor." |
| 24 | Kong can redact PII before it reaches the provider | 8 | PASS | "Redact PII before it reaches the upstream LLM provider." |
| 25 | `ANTHROPIC_BASE_URL` = gateway address; `ANTHROPIC_AUTH_TOKEN` as `Authorization: Bearer`, `ANTHROPIC_API_KEY` as `x-api-key`; the code block | 2 | PASS | "`ANTHROPIC_AUTH_TOKEN` in `Authorization: Bearer`, `ANTHROPIC_API_KEY` in `x-api-key`"; the code block is the same as the source example. |
| 26 | `/status`: `Anthropic base URL` line only when a gateway address is set | 2 | PASS | "`Anthropic base URL`: this line only appears when a gateway address is set." |
| 27 | Trade-off: the gateway becomes infrastructure your organization operates | 1 | PASS | "The tradeoff is that the gateway becomes infrastructure your organization operates." |
| 28 | New features + a gateway that does not forward them breaks them; keep it updated | 1 | FAIL, fixed | Source: "Claude Code adds capabilities with each release, and a gateway that doesn't forward them breaks the corresponding features". The page said "Clients add new features", a generalization beyond the source. Fixed: "Claude Code adds features with each release, ..." (3 voices). |
| 29 | Gateway adds one hop and is a shared point of failure | none | FAIL, fixed | No source says it (S1, S2, S3–S8 and the Claude Code gateway overview checked). Fixed: the sentence is now introduced with "The next point is the tutorial's own reasoning, not a quote from a source." (3 voices). It stays uncited. |
| 30 | Anthropic does not support routing Claude Code to non-Claude models through any gateway | 1 | PASS | "doesn't support routing Claude Code to non-Claude models through any gateway" |
| 31 | Example: each tool its own gateway key; usage attributed; revoke affects one | 1 | PASS | Principle from S1: "Issue each developer a gateway credential, so usage is attributed to the developer and offboarding revokes one credential." The example says it is invented. |
| 32 | Example: provider keys stay only in the gateway | 1 | PASS | as #2 |
| 33 | Example: CI agent gets a budget and rate limit | 5 | PASS | as #13 |
| 34 | Example: fallback model on provider errors | 4 | PASS | as #17 |
| 35 | Example: CI sets `ANTHROPIC_BASE_URL` and takes the key from a CI secret | 2 | PASS | S2 GitHub Actions: `ANTHROPIC_BASE_URL` in `env` and `anthropic_api_key: ${{ secrets.GATEWAY_API_KEY }}` |
| 36 | Example: one dashboard shows requests, tokens, cost | 3 | PASS | as #21 |
| 37 | Mistake: provider key stays on server; clients hold gateway credentials | 1 | PASS | as #2 |
| 38 | Mistake: `allowedProviders: ["customEndpoint"]` in managed settings refuses a session pointed elsewhere | 1 | PASS | "set `allowedProviders` to `["customEndpoint"]` in the same managed settings file ... Claude Code then refuses a session pointed anywhere else" |
| 39 | Mistake: do not put the credential in a project's `.claude/settings.json`; committed and shared | 2 | PASS | "Don't put the credential in a project's `.claude/settings.json`. That file is committed and shared with everyone who clones the repository." |
| 40 | Mistake: credential per developer, attribution, offboarding revokes one | 1 | PASS | as #31 |
| 41 | Mistake: LiteLLM says to test fallbacks with a real provider error in a non-production environment | 6 | PASS (writer's open point, now verified) | "Check if your fallbacks are working as expected by triggering the relevant provider error in a non-production environment." Also: "trigger an actual provider error in a non-production environment and send a normal request without a `mock_testing_*` flag"; "The mock-testing flags are deprecated for Proxy requests." |
| 42 | Mistake: a gateway can log prompts and completions | 7 | PASS | as #23 |
| 43 | Mistake: unless the gateway redacts it first | 8 | PASS | as #24 |
| 44 | Mistake: a gateway that does not forward new features breaks them | 1 | FAIL, fixed | Same generalization as #28. Fixed: "new Claude Code features" (3 voices). |

## Page checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | Cites 1–8 all used. |
| Every cite number has a source | PASS | 8 sources, highest cite 8. |
| Source URLs work and are official | PASS | All 8 fetched on 2026-10-28. All are vendor docs (Anthropic, Cloudflare, LiteLLM, Microsoft Learn, Kong). No blogs. |
| "Tutorial advice" tip has no cites | PASS | No `<Cite>` in the 3 tip panels. |
| Invented example says so | PASS | "This is an invented example." in all 3 voices. |
| Uncited reasoning is marked | PASS after fix | #29 |

FAILs found: 3. Fixed: 3. The research notes were updated (C29 quote, C39, note on C6).

`node --test tests/voice-source.test.ts tests/ai-concepts.test.ts`: pass 27, fail 0.

Open FAILs: 0
