# How Google Search Works (System Design module) — research notes (2026-10-20)

Fetch note: the article was fetched as JSON from the Substack post API (`/api/v1/posts/web-crawler-system-design`) and converted to plain text in `<scratch dir>/sd-raw/google-search/article.txt`. The post is for paid subscribers (audience `only_paid`). The free part covers the requirements, the scale estimates, and the full web crawler design (URL frontier, deduplication, robots.txt, storage, coordination, components). The search engine part (indexing and queries) is behind the paywall. The page uses Google's official documents (S2, S3, S4) for the index and the query stage. The extra pages were fetched with `curl` and converted to text in the same folder. No fetched text is committed.

The article is an interview-style design by a guest author, Mandeep Singh. Its URL frontier is based on the Mercator crawler. The page says that it is not the exact system that Google runs.

Copy check: `python3 scripts/linux_overlap.py content/system-design/google-search.mdx <scratch dir>/sd-raw/google-search` found no runs (exit 0). The folder also holds the Colossus blog post of Google Cloud (`google-colossus.txt`), which the article links. The page does not cite it; the Colossus claim cites the article.

## Sources

S1. System Design Interview: Design Web Crawler and Search Engine — The System Design Newsletter (Neo Kim), guest author Mandeep Singh — https://newsletter.systemdesign.one/p/web-crawler-system-design — accessed 2026-10-20 (`article.txt`, free part only)
S2. In-depth guide to how Google Search works — Google Search Central — https://developers.google.com/search/docs/fundamentals/how-search-works — accessed 2026-10-20 (`google-how-search-works.txt`; page last updated 2025-12-18)
S3. How Google Search organizes information — Google (How Search Works) — https://www.google.com/search/howsearchworks/how-search-works/organizing-information/ — accessed 2026-10-20 (`google-organizing-information.txt`)
S4. Introduction to robots.txt — Google Search Central — https://developers.google.com/search/docs/crawling-indexing/robots/intro — accessed 2026-10-20 (`google-robots-intro.txt`)

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article designs a web crawler (lede) | S1 | "A web crawler crawls webpages and stores them in a datastore." |
| 2 | Google's guides explain the stages of Search (lede) | S2 | "This document explains the stages of how Search works in the context of your website." |
| 3 | Two parts: crawler and search engine | S1 | "At a high level, a search system has two components: a web crawler and a search engine." |
| 4 | Search engine looks in the stored data to answer queries | S1 | "A search engine looks through the data in the datastore to answer user search queries." |
| 5 | Results show URL, title, subtitle; not outdated | S1 | "Including the web page URL, title, and subtitle in each result." / "Avoiding outdated results." |
| 6 | Available, reliable, scalable, low latency | S1 | "Low Latency: Search results should be returned in milliseconds." |
| 7 | 200 million active websites | S1 | "Active websites: 200 million" |
| 8 | 50 pages per site; 10 billion pages | S1 | "Total pages = 200 million × 50 = 10 billion pages" |
| 9 | 2 MB per page; 20 PB | S1 | "Total storage = 10 billion × 2 MB = 20 PB" |
| 10 | 8.5 billion searches per day; about 100,000 per second | S1 | "Searches per day: 8.5 billion" / "Searches per second: ~100,000" |
| 11 | Google index: hundreds of billions of pages, over 100,000,000 GB | S3 | "The Google Search index covers hundreds of billions of webpages and is well over 100,000,000 gigabytes in size." |
| 12 | Google evolved; a post cannot show all details | S1 | "Keep in mind that Google has evolved significantly to support this scale, and it is not possible to capture all details in this post." |
| 13 | No single source of all websites | S1 | "There is no single source that contains all websites." |
| 14 | Seed URLs from well-known domains; discover as you crawl | S1 | "So we start with well-known domains and discover new URLs as we crawl." |
| 15 | Three discovery ways: submit, links, user query | S1 | "Create a platform for new website owners to submit their site details." / "New website URL queried by the user." |
| 16 | Google also uses sitemaps | S2 | "Still other pages are discovered when you submit a list of pages (a sitemap) for Google to crawl." |
| 17 | "URL discovery"; Googlebot | S2 | "This process is called "URL discovery"." / "The program that does the fetching is called Googlebot" |
| 18 | JavaScript pages may need a headless browser | S1 | "For this, fetcher may need a headless browser to render the page and get the final content." |
| 19 | Google renders with a recent Chrome | S2 | "During the crawl, Google renders the page and runs any JavaScript it finds using a recent version of Chrome" |
| 20 | The URL frontier decides the next URL | S1 | "The component that decides which URL to crawl next is called the URL frontier." |
| 21 | Mercator-based, two-stage queues for priority and politeness | S1 | "The design shown in Figure 1 is inspired by the Mercator crawler. It uses a two-stage queue system to handle both priority and politeness." |
| 22 | Front queues: priority levels; weighted round-robin | S1 | "The front queue selector picks URLs using a weighted round-robin approach, so higher-priority URLs get chosen more often." |
| 23 | Back queues: one host per back queue | S1 | "A domain-to-back-queue database ensures that all URLs from the same host (for example, example.com) go to the same back queue." |
| 24 | Heap of next allowed fetch times; earliest first | S1 | "The back queue selector removes the host with the earliest allowed time from the heap." |
| 25 | Adaptive politeness on slow sites and errors | S1 | "If a website becomes slow or starts returning errors, the crawler should adjust its crawl rate dynamically." |
| 26 | HTTP 429 and HTTP 500 handling | S1 | "HTTP 429: Reduce crawl rate and retry later." / "HTTP 500: Retry only after a longer cooldown." |
| 27 | Google slows down on HTTP 500 | S2 | "This mechanism is based on the responses of the site (for example, HTTP 500 errors mean "slow down")." |
| 28 | Shared IPs; limits per host and per IP | S1 | "The solution is to enforce limits at both the host and IP levels." |
| 29 | Infinite loops: self-links, generated URLs | S1 | "A page links to itself." / "URLs are generated dynamically in large numbers." |
| 30 | Seen-URL data is sharded across machines | S1 | "The data can be partitioned (sharded) across many machines to scale." |
| 31 | Bloom filter: no is sure, yes is maybe | S1 | "If it says “no,” the URL definitely has not been seen." / "If it says “yes,” the URL might have been seen." |
| 32 | Some new URLs skipped; acceptable tradeoff | S1 | "This can sometimes cause a new URL to be skipped, but for large-scale crawling, this tradeoff is acceptable." |
| 33 | Fingerprint with Simhash; similar pages, similar fingerprints | S1 | "One common technique is Simhash algorithm, which generates a compact representation of the page." |
| 34 | Canonical link for intentional duplicates | S1 | "Website owners can specify the preferred URL for a piece of content." |
| 35 | Google clusters similar pages and picks the most representative | S2 | "we first group together (also known as clustering) the pages that we found on the internet that have similar content" |
| 36 | Crawler respects robots.txt | S1 | "Web servers can define rules in the robots.txt file to control crawler access. The crawler must respect these rules." |
| 37 | robots.txt is for crawl load, not for hiding; use noindex or password | S4 | "it is not a mechanism for keeping a web page out of Google. To keep a web page out of Google, block indexing with noindex" |
| 38 | Store pages as-is in an object store such as S3 | S1 | "So the simplest approach is to store the entire webpage." / "An object store, such as Amazon S3, is a good fit for this." |
| 39 | Object stores scale and are durable | S1 | "Object stores are scalable and highly durable" |
| 40 | Metadata in a key-value store: URL, location, last crawl, status | S1 | "This requires a key-value style database" |
| 41 | Colossus replaced GFS | S1 | "Colossus is Google’s distributed storage system. It replaced Google File System (GFS)" |
| 42 | Orchestration chosen; triggers steps, tracks, retries | S1 | "For the crawler, Approach #3 (Orchestration) makes more sense." |
| 43 | Orchestrator schedules recrawls | S1 | "Orchestrator can schedule recrawls and also handle new URLs discovered during crawling." |
| 44 | Three stages: crawling, indexing, serving | S2 | "Google Search works in three stages, and not all pages make it through each stage" |
| 45 | Indexing reads text and key tags such as title | S2 | "it includes processing and analyzing the textual content and key content tags and attributes" |
| 46 | Index like a book index, entry for every word | S3 | "It’s like the index in the back of a book - with an entry for every word seen on every webpage we index." |
| 47 | Index on thousands of computers; indexing not guaranteed | S2 | "the Google index, a large database hosted on thousands of computers. Indexing isn't guaranteed" |
| 48 | Machines search the index; return best and most relevant | S2 | "our machines search the index for matching pages and return the results we believe are the highest quality and most relevant" |
| 49 | Hundreds of factors: location, language, device; Paris vs Hong Kong | S2 | "Relevancy is determined by hundreds of factors, which could include information such as the user's location, language, and device" |
| 50 | Crawling always runs; learns how often pages change | S3 | "our crawling processes are always running to keep up. They learn how often content they’ve seen before seems to change" |

The analogies (tourist, delivery company, librarian, book index), the key-word definitions, and the tester callout are the tutorial's own text and need no source.
