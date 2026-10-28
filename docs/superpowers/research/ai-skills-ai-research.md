# AI Skills page: AI Research (research notes)

Writer notes for `content/ai-skills/ai-research.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Web search tool (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool | 2026-10-28 |
| S2 | Use research on Claude (Claude Help Center) | https://support.claude.com/en/articles/11088861-using-research-on-claude-ai | 2026-10-28 |
| S3 | Deep research (OpenAI API docs) | https://developers.openai.com/api/docs/guides/deep-research | 2026-10-28 |
| S4 | Perplexity Search API quickstart (Perplexity docs) | https://docs.perplexity.ai/docs/search/quickstart | 2026-10-28 |
| S5 | Exa Search API (Exa docs) | https://exa.ai/docs/reference/getting-started | 2026-10-28 |
| S6 | Reduce hallucinations (Claude Platform docs) | https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations | 2026-10-28 |

Page cite numbers: n=k is Sk. `docs.exa.ai/reference/getting-started` redirects (308) to S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | The Claude web search tool gives Claude real-time web content beyond its knowledge cutoff, and the response cites sources. | S1 | "The web search tool gives Claude direct access to real-time web content, allowing it to answer questions with up-to-date information beyond its knowledge cutoff. The response includes citations for sources drawn from search results." |
| C2 | Claude decides when to search; the API runs searches; this can repeat in one request; final answer with cited sources. | S1 | "Claude determines when to search based on the prompt." / "This process can repeat multiple times throughout a single request." / "Claude provides a final response with cited sources." |
| C3 | Citations are always on for web search; `cited_text` holds up to 150 characters. | S1 | "Citations are always enabled for web search" / "`cited_text`: Up to 150 characters of the cited content" |
| C4 | `allowed_domains` or `blocked_domains`, not both. | S1 | "Provide `allowed_domains` or `blocked_domains`, not both." |
| C5 | `max_uses` caps the number of searches. | S1 | "The `max_uses` parameter limits the number of searches performed." |
| C6 | Each result has `page_age`: when the site was last updated. | S1 | "`page_age`: When the site was last updated" |
| C7 | Claude Research runs several searches that build on each other and picks what to look into next. | S2 | "It runs multiple searches that build on each other and decides what to look into next based on what it finds." |
| C8 | Deep research models find, analyze, and synthesize hundreds of sources into a report. | S3 | "can find, analyze, and synthesize hundreds of sources to create a comprehensive report at the level of a research analyst" |
| C9 | The final answer has inline citations. | S3 | "The model's final answer with inline citations." |
| C10 | Deep research tasks can take tens of minutes. | S3 | "they can take tens of minutes to complete tasks" |
| C11 | Search results can carry prompt-injection payloads; no automated filter catches every case. | S3 | "Even "read-only" MCPs can embed prompt-injection payloads in search results." / "no automated filter can catch every case" |
| C12 | Perplexity Search API returns ranked web results as structured data: titles, URLs, extracted text, no generated answer. | S4 | "Perplexity's Search API returns real-time, ranked web results as structured data." / "The response is ranked results with titles, URLs, and extracted text; there is no generated answer." |
| C13 | `search_domain_filter` limits results to domains (allowlist, or denylist with `-`). | S4 | "The `search_domain_filter` parameter allows you to limit search results to specific domains." |
| C14 | Exa: natural-language web search that returns clean page content. | S5 | "Search the web in natural language and get clean, relevant page content in one request." |
| C15 | Exa `includeDomains` restricts results to sources you trust. | S5 | "includeDomains restricts results to sources you trust." |
| C16 | Ask the model to cite a quote for each claim; retract a claim with no quote. | S6 | "Make Claude's response auditable by having it cite quotes and sources for each of its claims." / "If it can't find a quote, it must retract the claim." |
| C17 | These techniques reduce but do not eliminate hallucinations; validate critical information. | S6 | "although these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information" |
| C18 | Allow the model to say it does not know. | S6 | "Explicitly give Claude permission to admit uncertainty." |

## Tutorial's own text (no cite)

- The research loop diagram, the tester uses (product, API, standard), the source ladder (official first), and the "Tutorial advice" tip.
- "Check every cite" steps (open the link, find the sentence, check the date) are the tutorial's method.
- The "How to start" steps, except the facts that carry a cite.

## Removed

- Prices of the web search tool and of the search APIs (the spec says no prices).
- Gemini Deep Research: the official overview page was served in Bangla for this locale and did not say that the report cites its sources, so the page does not name it as a tool. "Deep research modes" are covered by S2 and S3.
