# Fact check: AI Skills, Data Enrichment at Scale

Page: `content/ai-skills/data-enrichment.mdx`. Sources S1 to S7 are the 7 entries of `page.sources`, in the same order (cite n = Sn). The checker fetched all 7 sources fresh on 2026-10-28 with WebFetch (S4 and S6 also with curl). No source blocked the fetch. The quotes below come from these fetches, not from the research notes.

| # | Source | URL | Official? |
|---|---|---|---|
| S1 | Clay docs, Waterfalls | https://university.clay.com/docs/building-a-data-waterfall | Yes (vendor docs) |
| S2 | Apify docs, Actors | https://docs.apify.com/platform/actors | Yes (vendor docs) |
| S3 | Firecrawl docs, Introduction | https://docs.firecrawl.dev/introduction | Yes (vendor docs) |
| S4 | Anthropic, Batch processing | https://platform.claude.com/docs/en/build-with-claude/batch-processing | Yes (vendor docs) |
| S5 | Anthropic, Structured outputs | https://platform.claude.com/docs/en/build-with-claude/structured-outputs | Yes (vendor docs) |
| S6 | Faker docs, Getting Started | https://fakerjs.dev/guide/ | Yes (project docs) |
| S7 | Faker docs, Usage | https://fakerjs.dev/guide/usage | Yes (project docs) |

## Claims

| # | Claim (page text, short) | Cite | Verdict | Quote from the source (fetched 2026-10-28) |
|---|---|---|---|---|
| 1 | Lede: sales teams use AI to fill in missing facts about many companies; testers have the same problem | none | PASS | Framing of the tutorial, no specific fact (version, limit, behavior). The Clay facts are cited in the body. |
| 2 | Definition of data enrichment ("In this tutorial, … means") | none | PASS | The tutorial's own definition, marked as such (also in Key words). |
| 3 | "Sales tools made the idea popular" | none | PASS | Tutorial's own framing; no specific fact. |
| 4 | In Clay you add an enrichment to a table | 1 | PASS | S1: click "Add enrichment" in the top right corner of the table. |
| 5 | A waterfall asks several data providers in a set order | 1 | PASS | S1: "utilize multiple data providers in a predetermined sequence" |
| 6 | Firecrawl gets clean Markdown or structured data from live websites | 3 | PASS | S3: "interact with the live web to get clean Markdown or structured data" |
| 7 | An Apify Actor is a cloud program that takes JSON input | 2 | PASS | S2: "Actors are serverless cloud programs that take a structured JSON input" |
| 8 | Actor runs a task such as web scraping or browser automation | 2 | PASS | S2: "web scraping, browser automation, data processing, and more" |
| 9 | Faker makes fake but realistic rows for unit tests and performance tests | 6 | PASS | S6: "generates fake (but reasonable) data"; list items "Unit Testing", "Performance Testing" |
| 10 | Enrichment adds fields a simple generator cannot make well | none | PASS | Tutorial's own view. |
| 11 | Pipeline diagram (base rows, enrich, validate, test data set) | none | PASS | Tutorial's own design; the facts in it are cited in the prose under it. |
| 12 | Faker: set your own seed and you get the same data on every run | 7 | PASS | S7: "If you want consistent results, you can set your own seed". S7 notes values can change across Faker versions; the page also says to save the file in the repo, so the claim holds for one Faker version. |
| 13 | Message Batches API processes a large number of requests asynchronously | 4 | PASS | S4: "asynchronously process large volumes of Messages requests" |
| 14 | One batch holds up to 100,000 requests or 256 MB | 4 | PASS | S4: "limited to either 100,000 Message requests or 256 MB in size" |
| 15 | Results readable when all requests are done or after 24 hours | 4 | PASS | S4: "when all messages have completed or after 24 hours, whichever comes first" |
| 16 | A batch that does not finish in 24 hours expires | 4 | PASS | S4: "Batches expire if processing does not complete within 24 hours." |
| 17 | Results can come back in any order; match by `custom_id` | 4 | PASS | S4: "Batch results can be returned in any order"; "always use the `custom_id` field" |
| 18 | With structured outputs the response follows the schema, so the script can always parse it | 5 | PASS | S5: "ensuring valid, parseable output"; "Always valid: No more JSON.parse() errors". S5 lists exceptions (refusal, `max_tokens`); the page's "Common mistakes" also says to validate every row. |
| 19 | The schema goes in `output_config.format` | 5 | PASS | S5: "The `output_format` parameter has moved to `output_config.format`" (correct current key, not the deprecated one) |
| 20 | Firecrawl can search, scrape, map, and crawl sites | 3 | PASS | S3 feature list: Search, Scrape, Map ("Discover all URLs"), Crawl |
| 21 | Firecrawl can be self-hosted | 3 | PASS | S3: "Self-host Firecrawl or contribute to the project" |
| 22 | Apify has ready-made public Actors in Apify Store | 2 | PASS | S2: "Public Actors are available to everyone in Apify Store." |
| 23 | Load test: base rows with Faker, then batch job with fixed schema | 6, 4, 5 | PASS | Each cite supports its part (S6 Faker, S4 batches, S5 schema). Rest is tutorial advice. |
| 24 | A schema field such as `variant_reason` keeps the reason next to the data | 5 | PASS | Example field name of the tutorial; S5 shows custom `properties` in a `json_schema`. |
| 25 | Corpus of real pages as clean Markdown with Firecrawl or an Apify Actor | 3, 2 | PASS | S3 (clean Markdown), S2 (web scraping Actors) |
| 26 | Test the order of providers and what happens when one returns nothing | 1 | PASS | Tutorial advice; the cite supports the waterfall order (S1 "predetermined sequence"). The page makes no claim about Clay's behavior on an empty result. |
| 27 | "Tutorial advice" tip | none | PASS | Marked as the tutorial's own advice; no `<Cite>` inside. |
| 28 | Tools table: Clay waterfall | 1 | PASS | Same as row 5 |
| 29 | Tools table: Apify public Actors in Apify Store | 2 | PASS | Same as row 22 |
| 30 | Tools table: Firecrawl Markdown/structured data; self-hosted | 3 | PASS | Same as rows 6 and 21 |
| 31 | Tools table: Faker fixed seed gives the same data | 7 | PASS | Same as row 12 |
| 32 | Tools table: up to 100,000 requests in one batch | 4 | PASS | Same as row 14 |
| 33 | Common mistakes: synthetic rows with Faker | 6 | PASS | Same as row 9 |
| 34 | Common mistakes: set a seed | 7 | PASS | Same as row 12 |
| 35 | Common mistakes: structured outputs follow the JSON schema | 5 | PASS | Same as row 18 |
| 36 | Common mistakes: batch results in any order; join on `custom_id` | 4 | PASS | Same as row 17 |
| 37 | A model can add a plausible but wrong value; validate and sample by hand | none | PASS | Tutorial's own advice. |
| 38 | How to start, steps 2 to 4 (seed, JSON schema, row ID as `custom_id`) | 7, 5, 4 | PASS | Rows 12, 18, 17. S4: `custom_id` must match `^[a-zA-Z0-9_-]{1,64}$`, so a plain row ID is valid. |
| 39 | Key words: Waterfall, Actor, Message batch, Structured output, Seed | 1, 2, 4, 5, 7 | PASS | Rows 5, 7, 13, 18, 12 |

## Other checks

| Check | Result |
|---|---|
| Every source is official (vendor or project docs); no blog, news, or forum | PASS (S1 to S7) |
| No prices on the page (S4 mentions a 50 % cost cut; the page does not repeat it) | PASS |
| Each cite points to the source that supports the claim | PASS |
| No copied text (no identical run of about 8 or more words). Longest shared run: "get clean Markdown or structured data" (6 words, S3) | PASS |
| "Tutorial advice" tip has no `<Cite>` | PASS |
| Internal link `/k6/` exists (`scripts/k6-route-map.json`) | PASS |
| Code and config keys: `output_config.format`, `custom_id` are the current keys of the Claude API (S4, S5) | PASS |
| Each source is cited at least one time; each cite n has a source (1 to 7) | PASS |


## Round 2 (2026-10-28)

The writer changed only Layman and Bangla panels (the 2 voices FAILs). The Technical text did not change: "Apify has ready-made public Actors in Apify Store <Cite n={2} />" and "The [k6 module](/k6/) shows how to use a data file in a test." are as in Round 1 (rows 22 and the `/k6/` link check). No new claim, cite, or source. Round 1 had no FAIL in this report.

Open FAILs: 0
