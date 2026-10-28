# Fact check: AI Skills, AI Research

Sources fetched fresh on 2026-10-28 (curl and WebFetch). S1 = Claude Platform docs "Web search tool", S2 = Claude Help Center "Use research on Claude", S3 = OpenAI API docs "Deep research", S4 = Perplexity API docs "Search API quickstart", S5 = Exa API docs "Exa Search API", S6 = Claude Platform docs "Reduce hallucinations". All 6 are vendor docs or vendor help centers. No source blocked the fetch.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: AI search tools read pages and answer with links; a link is not proof | none | PASS | Framing of the page; the facts have cites below |
| 2 | A model alone knows only its training data | none | PASS | Lead-in to row 3; S1 says the tool gives information "beyond its knowledge cutoff" |
| 3 | Claude web search gives real-time content past the knowledge cutoff; the answer cites sources | S1 | PASS | "gives Claude direct access to real-time web content, allowing it to answer questions with up-to-date information beyond its knowledge cutoff. The response includes citations for sources drawn from search results." |
| 4 | Deep research runs many searches; each builds on the last | S2 | PASS | "It runs multiple searches that build on each other and decides what to look into next based on what it finds." |
| 5 | OpenAI deep research models find, analyze, combine hundreds of sources into one report | S3 | PASS | "can find, analyze, and synthesize hundreds of sources to create a comprehensive report" |
| 6 | Tester example questions; "fast first map" | none | PASS | The tutorial's own examples |
| 7 | Cited quotes reduce made-up claims but do not remove them; critical facts need a human check | S6 | PASS | "although these techniques significantly reduce hallucinations, they don't eliminate them entirely. Always validate critical information" |
| 8 | Loop picture | none | PASS | Marked as the tutorial's own summary |
| 9 | Claude decides when to search, the API runs it, several times per request, final answer with cited sources | S1 | PASS | "Claude determines when to search based on the prompt. The API runs the searches ... This process can repeat multiple times throughout a single request. At the end of its turn, Claude provides a final response with cited sources." |
| 10 | Citations always on; each carries up to 150 characters of cited text | S1 | PASS | "Citations are always enabled for web search" / "`cited_text`: Up to 150 characters of the cited content" |
| 11 | Each search result has `page_age`: when the site was last updated | S1 | PASS | "`page_age`: When the site was last updated" |
| 12 | `allowed_domains` or `blocked_domains`, not both | S1 | PASS | "Provide `allowed_domains` or `blocked_domains`, not both. If a request includes both, the API returns a 400 error." |
| 13 | `max_uses` caps the number of searches | S1 | PASS | "use `max_uses` to cap the number of searches for each request" |
| 14 | Perplexity `search_domain_filter` limits results to chosen domains | S4 | PASS | "The search_domain_filter parameter allows you to limit search results to specific domains (allowlist) or exclude certain domains (denylist)" |
| 15 | Exa `includeDomains` restricts results to sources you trust | S5 | PASS | "includeDomains restricts results to sources you trust." (5 words, under the 8-word limit) |
| 16 | OpenAI deep research answer has inline citations; a task can take tens of minutes | S3 | PASS | "message: The model's final answer with inline citations." / "they can take tens of minutes to complete tasks" |
| 17 | Search results can carry prompt-injection payloads; no automatic filter catches every case | S3 | PASS | "Even 'read-only' MCPs can embed prompt-injection payloads in search results" / "Prompt-injection is when an attacker smuggles additional instructions into the model's input (for example, inside the body of a web page ...)" / "no automated filter can catch every case" |
| 18 | Restrict the API search with `allowed_domains` or a domain filter | S1, S4 | PASS | Same quotes as rows 12 and 14 |
| 19 | Ask for a quote per claim and drop a claim with no quote | S6 | PASS | "have Claude verify each claim by finding a supporting quote ... If it can't find a quote, it must retract the claim." |
| 20 | Check the date with `page_age` | S1 | PASS | Same quote as row 11 |
| 21 | "Tutorial advice" tip (rank sources) | none | PASS | Marked as the tutorial's own advice; no `<Cite>` |
| 22 | Tools: Research runs searches that build on each other | S2 | PASS | Same quote as row 4 |
| 23 | Tools: OpenAI deep research task can take tens of minutes | S3 | PASS | Same quote as row 16 |
| 24 | Tools: Perplexity returns titles, URLs, extracted text, no generated answer | S4 | PASS | "returns real-time, ranked web results as structured data, with controls for domains, languages, regions, and extracted content. Use the Search API when you need raw results for your own processing. For an LLM-generated answer with citations, u[se ...]" |
| 25 | Tools: Exa is web search in natural language | S5 | PASS | "Exa Search takes a natural language query and returns ranked web results with clean page content." "for apps and agents" is a description of use; the docs site has Agent and MCP sections |
| 26 | Mistakes: remove a claim with no quote; `page_age`; domain filter; prompt injection; "I don't know" | S6, S1, S4, S3 | PASS | Same quotes as rows 19, 11, 12, 14, 17; S6: "Explicitly give Claude permission to admit uncertainty." |
| 27 | Link `/ai-skills/ai-agents/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 28 | How to start: limit sources; quote per claim and "not found" | S1, S6 | PASS | Same quotes as rows 12 and 19 |
| 29 | Link `/ai-skills/workflow-automation/` | none | PASS | Slug is in `lib/ai-skills/topics.ts` |
| 30 | Key words (5 rows) | S1, S3, S4 | PASS | Same quotes as rows 3, 5, 10, 14, 17 |

Other checks:
- Sources: all official. No prices (grep: 0 hits).
- Copy check: a script compared every 8-word run of the Technical and Layman text with the fetched text of S1 to S6. Only URL strings match. No copied run of 8 or more words.
- Each cite points to the source that has the fact.
- The "Tutorial advice" tip has no cite.

Open FAILs: 0
