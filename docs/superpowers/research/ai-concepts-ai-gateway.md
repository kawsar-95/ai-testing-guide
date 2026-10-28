# Research notes: AI Gateways (`/ai-concepts/ai-gateway/`)

Accessed 2026-10-28. The topic comes from a third-party infographic. No text of it is copied. Its claims are a seed only, and each one was checked against the sources below.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Other LLM gateways | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/llm-gateway | 2026-10-28 |
| S2 | Connect Claude Code to an LLM gateway | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/llm-gateway-connect | 2026-10-28 |
| S3 | Cloudflare AI Gateway (overview) | Cloudflare | https://developers.cloudflare.com/ai-gateway/ | 2026-10-28 |
| S4 | Fallbacks | Cloudflare (AI Gateway docs) | https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/ | 2026-10-28 |
| S5 | LiteLLM AI Gateway | LiteLLM | https://docs.litellm.ai/docs/simple_proxy | 2026-10-28 |
| S6 | Fallbacks (Provider Failover) | LiteLLM | https://docs.litellm.ai/docs/proxy/reliability | 2026-10-28 |
| S7 | AI gateway capabilities in Azure API Management | Microsoft Learn | https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities | 2026-10-28 |
| S8 | Kong AI Gateway | Kong | https://developer.konghq.com/ai-gateway/ | 2026-10-28 |

Page cite numbers are the same as the S numbers (S1 = `<Cite n={1} />`).

## Claims

| # | Claim | Source | Exact short quote |
|---|---|---|---|
| C1 | A gateway gives one place to manage credentials, usage tracking, cost controls, audit logging, provider switching. | S1 | "A gateway gives your organization one place to manage" |
| C2 | The provider key stays on the server; developers hold gateway credentials. | S1 | "the provider key stays server-side; developers hold gateway credentials instead" |
| C3 | Cost controls: budgets and rate limits in one place. | S1 | "enforce budgets and rate limits in one place" |
| C4 | Audit logging of every model request. | S1 | "log every model request for compliance" |
| C5 | Provider switching in gateway configuration, without a change on developer machines. | S1 | "change the provider in gateway configuration, without touching developer machines" |
| C6 | Trade-off: the gateway is infrastructure the organization operates and must keep updated; a gateway that does not forward new capabilities breaks features. | S1 | "the gateway becomes infrastructure your organization operates" / "a gateway that doesn't forward them breaks the corresponding features" |
| C7 | Anthropic does not support routing Claude Code to non-Claude models through any gateway. | S1 | "doesn't support routing Claude Code to non-Claude models through any gateway" |
| C8 | Each developer gets their own gateway credential, so usage is attributed and offboarding revokes one credential. | S1 | "so usage is attributed to the developer and offboarding revokes one credential" |
| C9 | `allowedProviders: ["customEndpoint"]` in managed settings makes Claude Code refuse a session pointed anywhere else. | S1 | "Claude Code then refuses a session pointed anywhere else" |
| C10 | `ANTHROPIC_BASE_URL` points Claude Code at the gateway. | S1, S2 | S1: "`ANTHROPIC_BASE_URL` is the variable that points Claude Code at the gateway." |
| C11 | `ANTHROPIC_AUTH_TOKEN` is sent as `Authorization: Bearer`, `ANTHROPIC_API_KEY` as `x-api-key`. | S2 | "`ANTHROPIC_AUTH_TOKEN` in `Authorization: Bearer`, `ANTHROPIC_API_KEY` in `x-api-key`" |
| C12 | Do not put the credential in a project's committed `.claude/settings.json`. | S2 | "Don't put the credential in a project's `.claude/settings.json`." |
| C13 | `/status` shows the `Anthropic base URL` line when a gateway is set. | S2 | "`Anthropic base URL`: this line only appears when a gateway address is set." |
| C14 | A `401` means the credential was rejected. | S2 | "A `401` means the credential was rejected" |
| C15 | Cloudflare AI Gateway: visibility and control over AI apps. | S3 | "gain visibility and control over your AI apps" |
| C16 | Cloudflare analytics show requests, tokens, cost. | S3 | "View metrics such as the number of requests, tokens, and the cost it takes to run your application" |
| C17 | Cloudflare caching serves requests from cache instead of the provider. | S3 | "Serve requests directly from Cloudflare's cache instead of the original model provider" |
| C18 | Cloudflare rate limiting limits the number of requests. | S3 | "limiting the number of requests your application receives" |
| C19 | Cloudflare supports retry and model fallbacks on error. | S3 | "defining request retry and model fallbacks in case of an error" |
| C20 | Cloudflare provider list includes Workers AI, Anthropic, Google Gemini, OpenAI. | S3 | "Workers AI, Anthropic, Google Gemini, OpenAI, Replicate, and more work with AI Gateway" |
| C21 | Cloudflare fallback fires on an error by default, also on configured timeouts. | S4 | "triggers your fallback if a model request returns an error" / "in response to request errors or predetermined request timeouts" |
| C22 | Header `cf-aig-step` shows which step served the request (0 = primary). | S4 | "cf-aig-step indicates which step successfully processed the request" |
| C23 | LiteLLM is a self-hosted server. | S5 | "The LiteLLM AI Gateway is a self-hosted server" |
| C24 | LiteLLM: one endpoint for 100+ providers, MCP tools, A2A agents. | S5 | "100+ LLM providers, MCP tools, and A2A agents" |
| C25 | LiteLLM virtual keys with models, budgets, rate limits per key. | S5 | "Give each user, team, and project a virtual key." / "Each key has its models, budgets, and rate limits" |
| C26 | LiteLLM records the cost of each request. | S5 | "records the cost of each request" |
| C27 | LiteLLM sends logs and metrics to OpenTelemetry, Prometheus and other tools. | S5 | "Send logs and metrics to Langfuse, Datadog, OpenTelemetry, Prometheus, and other tools" |
| C28 | LiteLLM fallbacks are in order; also context-window and content-policy fallbacks; retries and cooldowns. | S6 | "Fallbacks are done in-order" |
| C29 | LiteLLM: mock fallback flags are deprecated for proxy requests; to test, cause a real provider error in a non-production environment. | S6 | "Check if your fallbacks are working as expected by triggering the relevant provider error in a non-production environment." / "The mock-testing flags are deprecated for Proxy requests." (checked 2026-10-28) |
| C30 | Azure APIM AI gateway governs models, agents, and tools; covers remote MCP servers and self-hosted models. | S7 | "secure, scale, monitor, and govern AI models, agents, and tools" / "Remote **MCP servers**" / "**Self-hosted** models and endpoints" |
| C31 | Azure token limit policy: TPM limit or token quota per consumer. | S7 | "you can set a TPM limit or a token quota over a specified period" |
| C32 | Azure: managed identities so no API keys are needed to authenticate to AI services. | S7 | "Use managed identities to authenticate to AI services in Azure, so you don't need API keys" |
| C33 | Azure: circuit breaker stops forwarding requests to a backend that does not respond. | S7 | "define circuit breaker rules to stop forwarding requests to AI service backends if they're not responsive" |
| C34 | Azure: log prompts and completions to Azure Monitor. | S7 | "Log prompts and completions to Azure Monitor." |
| C35 | Kong: one consistent API for any major provider. | S8 | "Connect to any major LLM provider through one consistent API" |
| C36 | Kong: automatic failover when a provider is slow or unavailable. | S8 | "Automatically fail over to a different provider or model when one is slow or unavailable" |
| C37 | Kong: redact PII before it reaches the provider. | S8 | "Redact PII before it reaches the upstream LLM provider" |
| C38 | Kong: token budgets by team; MCP tools from existing APIs. | S8 | "token budgets by team or department" / "Turn existing APIs into tools an AI agent can discover and call over Model Context Protocol" |

| C39 | (Trade-offs) A gateway adds one hop to every call and is a shared point of failure. | none | No source found (S1, S2, and the Claude Code gateway overview do not say it). The page marks it as the tutorial's own reasoning. |

Note on C6: S1 says "Claude Code adds capabilities with each release". The page says "Claude Code", not "clients" in general.

## Infographic claims: check and corrections

| Infographic seed | Verdict | Note |
|---|---|---|
| Apps A, B, C go through one gateway | PASS | S1 (one place to manage), S5 (one endpoint), S8 (one consistent API). |
| Gateway does auth, routing, fallbacks, budgets, logs | PASS | S1, S3, S4, S5, S6, S7, S8. |
| Upstreams: OpenAI, Anthropic, Gemini | PASS | S3 lists all three. |
| Upstreams: "open-weight models" | CORRECTED (wording) | No source here uses the term "open-weight". The page says "self-hosted models", which S7 states. |
| Upstreams: MCP tools | PASS | S5, S7, S8. |
| "One control plane for models and tools" | PASS with a limit | S7 says the gateway governs "models, agents, and tools". The page adds that a gateway controls only the traffic that goes through it: a client can call a provider directly unless the client is locked to the gateway (S1, `allowedProviders`). |
| (Implied) any client can use any model through a gateway | CORRECTED | For Claude Code, S1 says Anthropic does not support routing it to non-Claude models through any gateway. The page says so. |

## Not on the page

No product is ranked or named as the best one. Envoy AI Gateway was a candidate source, but its docs URL redirected to another domain on 2026-10-28, so it is not used. No prices or plan limits are given.
