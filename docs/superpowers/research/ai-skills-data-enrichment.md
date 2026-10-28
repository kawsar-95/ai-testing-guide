# AI Skills page: Data Enrichment at Scale (research notes)

Writer notes for `content/ai-skills/data-enrichment.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Waterfalls (Clay docs) | https://university.clay.com/docs/building-a-data-waterfall | 2026-10-28 |
| S2 | Actors (Apify docs) | https://docs.apify.com/platform/actors | 2026-10-28 |
| S3 | Introduction (Firecrawl docs) | https://docs.firecrawl.dev/introduction | 2026-10-28 |
| S4 | Batch processing (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/batch-processing | 2026-10-28 |
| S5 | Structured outputs (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/structured-outputs | 2026-10-28 |
| S6 | Getting Started (Faker docs) | https://fakerjs.dev/guide/ | 2026-10-28 |
| S7 | Usage (Faker docs) | https://fakerjs.dev/guide/usage | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Clay waterfalls use several data providers in a set order. | S1 | "Waterfalls allow you to utilize multiple data providers in a predetermined sequence." |
| C2 | In Clay you add an enrichment from the table with "Add enrichment". | S1 | "Click `Add enrichment` on the top right corner of your table" |
| C3 | An Apify Actor is a serverless cloud program: JSON input, a task such as scraping or browser automation, optional structured output. | S2 | "serverless cloud program" (input JSON, task such as web scraping or browser automation, structured output, as summarized from the page) |
| C4 | Public Actors are in Apify Store. | S2 | "available to everyone in Apify Store" |
| C5 | Firecrawl gets clean Markdown or structured data from the live web; capabilities include Search, Scrape, Map, Crawl. | S3 | "Search, scrape, and interact with the live web to get clean Markdown or structured data." |
| C6 | Firecrawl can be self-hosted. | S3 | "Self-host Firecrawl or contribute to the project" |
| C7 | Message Batches API processes large volumes of requests asynchronously. | S4 | "asynchronously process large volumes of Messages requests" |
| C8 | A batch has up to 100,000 requests or 256 MB. | S4 | "A Message Batch is limited to either 100,000 Message requests or 256 MB in size, whichever is reached first." |
| C9 | Results are available when all requests finish or after 24 hours; batches expire if not done in 24 hours. | S4 | "You can access batch results when all messages have completed or after 24 hours, whichever comes first. Batches expire if processing does not complete within 24 hours." |
| C10 | Results can come in any order; match them with custom_id. | S4 | "Batch results can be returned in any order" / "always use the `custom_id` field." |
| C11 | Structured outputs make responses follow a schema, so output is valid and parseable; the schema goes in output_config.format. | S5 | "Structured outputs constrain Claude's responses to follow a specific schema, ensuring valid, parseable output for downstream processing." / "The request carries the schema in `output_config.format`" |
| C12 | Faker generates fake but reasonable data, for unit tests, performance tests, demos. | S6 | "generates fake (but reasonable) data" (uses listed: unit testing, performance testing, demos) |
| C13 | You can set a seed for consistent results. | S7 | "If you want consistent results, you can set your own seed" |

## Not on the page

No prices, no credit numbers, no claims about which providers Clay uses. Advice on site terms and on personal data is marked as the tutorial's advice.
