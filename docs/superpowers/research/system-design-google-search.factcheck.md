# Fact-check: How Google Search Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of the 4 cited sources: the interview article on a web crawler (S1, free part only), Google's "In-depth guide to how Google Search works" (S2), "How Google Search organizes information" (S3), and "Introduction to robots.txt" (S4). I also read the saved Colossus blog post, which the page does not cite. I checked that the page keeps the article's interview crawler apart from Google's real system. I fixed 3 FAILs where the page mixed them: "Google's real numbers" (only the index size has a source), "Google works the same way" (S2 does not describe the article's design), and "Colossus does this kind of job" (S1 does not say Colossus stores crawled pages). All 4 sources are cited, `##` headings are unique, the tip closing tag is at column 0, and prose has no `{` or `<`. `linux_overlap.py` exits 0 after the fixes (no runs).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Page follows the article's crawler design | 1 | PASS | "We'll first design the web crawler, and then move on to the search engine" |
| 2 | Lede | Google's guides explain the index | 2 | PASS | "Indexing: Google analyzes the text, images, and video files on the page, and stores the information in the Google index" |
| 3 | The problem in plain words | Crawler stores pages; search engine answers queries | 1 | PASS | "A web crawler crawls webpages and stores them in a datastore. A search engine looks through the data" |
| 4 | The problem in plain words | Result shows URL, title, short text; not outdated | 1 | PASS | "Including the web page URL, title, and subtitle in each result. Avoiding outdated results." |
| 5 | The problem in plain words | Available, reliable, scalable, milliseconds | 1 | PASS | "Low Latency: Search results should be returned in milliseconds." |
| 6 | The problem in plain words | Estimates are interview assumptions | 1 | PASS | "In system design interviews, it's recommended to make some assumptions" |
| 7 | The problem in plain words (table) | 200 million active websites | 1 | PASS | "Active websites: 200 million" |
| 8 | The problem in plain words (table) | 50 pages each, 10 billion pages | 1 | PASS | "Total pages = 200 million × 50 = 10 billion pages" |
| 9 | The problem in plain words (table) | 2 MB per page, 20 PB | 1 | PASS | "Total storage = 10 billion × 2 MB = 20 PB" |
| 10 | The problem in plain words (table) | 8.5 billion searches a day, about 100,000/s | 1 | PASS | "Searches per day: 8.5 billion"; "Searches per second: ~100,000" |
| 11 | The problem in plain words | Google's index: hundreds of billions of pages, over 100,000,000 GB | 3 | FAIL→fixed | Was "Google's real numbers are larger" (no source for real query or page-store numbers). Now "Google's real index is larger. It covers…". Quote: "covers hundreds of billions of webpages and is well over 100,000,000 gigabytes in size" |
| 12 | Callout | Article: Google evolved; one post cannot show all | 1 | PASS | "Google has evolved significantly to support this scale, and it is not possible to capture all details in this post" |
| 13 | Callout | Free part covers only the crawler | 1 | PASS | "this is a teaser of the subscriber-only post"; free text ends before the search engine part |
| 14 | Finding pages | No single list of all websites | 1 | PASS | "There is no single source that contains all websites." |
| 15 | Finding pages | Seed URLs; discover new URLs while crawling | 1 | PASS | "These are called seed URLs"; "discover new URLs as we crawl" |
| 16 | Finding pages | Three discovery ways: submit, link, user query | 1 | PASS | "submit their site details"; "list of website links from the website being crawled"; "New website URL queried by the user" |
| 17 | Finding pages | Google: sitemap | 2 | PASS | "discovered when you submit a list of pages (a sitemap) for Google to crawl" |
| 18 | Finding pages | "URL discovery"; Googlebot | 2 | PASS | "This process is called \"URL discovery\""; "The program that does the fetching is called Googlebot" |
| 19 | Finding pages | Headless browser for JavaScript pages | 1 | PASS | "fetcher may need a headless browser to render the page and get the final content" |
| 20 | Finding pages | Google renders with a recent Chrome | 2 | PASS | "runs any JavaScript it finds using a recent version of Chrome" |
| 21 | The URL frontier | Frontier chooses the next URL | 1 | PASS | "The component that decides which URL to crawl next is called the URL frontier." |
| 22 | The URL frontier | Based on Mercator; two stages for priority and politeness | 1 | PASS | "inspired by the Mercator crawler. It uses a two-stage queue system to handle both priority and politeness" |
| 23 | The URL frontier (table) | Front queues; higher priority picked more often | 1 | PASS | "Front queues represent different priority levels"; "higher-priority URLs get chosen more often" |
| 24 | The URL frontier (table) | One host to one back queue | 1 | PASS | "all URLs from the same host... go to the same back queue" |
| 25 | The URL frontier (table) | Heap of next allowed times; earliest first | 1 | PASS | "The back queue selector removes the host with the earliest allowed time from the heap." |
| 26 | The URL frontier | Adaptive politeness when slow or errors | 1 | PASS | "If a website becomes slow or starts returning errors, the crawler should adjust its crawl rate dynamically." |
| 27 | The URL frontier | 429: slower and retry; 500: longer wait | 1 | PASS | "HTTP 429: Reduce crawl rate and retry later. HTTP 500: Retry only after a longer cooldown." |
| 28 | The URL frontier | Google's crawlers react to site answers; 500 means slow down | 2 | FAIL→fixed | Was "Google works the same way" (says Google uses the article's design). Now "Google's own crawlers also react to the answers of a site. For them, HTTP 500 errors mean \"slow down\"." Quote: "based on the responses of the site (for example, HTTP 500 errors mean \"slow down\")" |
| 29 | The URL frontier | Shared IPs; limits per host and per IP | 1 | PASS | "enforce limits at both the host and IP levels" |
| 30 | Skipping repeats | Loops: self links, dynamic URLs | 1 | PASS | "A page links to itself"; "URLs are generated dynamically in large numbers" |
| 31 | Skipping repeats | Check URL before crawl; seen set sharded | 1 | PASS | "detect duplicate URLs before crawling them"; "partitioned (sharded) across many machines" |
| 32 | Skipping repeats | Bloom filter: no is sure, yes is maybe; some new URLs skipped | 1 | PASS | "If it says \"no,\" the URL definitely has not been seen"; "can sometimes cause a new URL to be skipped" |
| 33 | Skipping repeats | Cost acceptable at this size | 1 | PASS | "for large-scale crawling, this tradeoff is acceptable" |
| 34 | Skipping repeats | Fingerprint, Simhash; similar pages similar prints | 1 | PASS | "One common technique is Simhash algorithm"; "Similar pages will have similar fingerprints" |
| 35 | Skipping repeats | Canonical link element | 1 | PASS | "Website owners can specify the preferred URL for a piece of content." |
| 36 | Skipping repeats | Google clusters pages, picks most representative | 2 | PASS | "group together... the pages... that have similar content, and then we select the one that's most representative" |
| 37 | Rules, storage, and teamwork | Crawler reads robots.txt first | 1 | PASS | "Web servers can define rules in the robots.txt file to control crawler access. The crawler must respect these rules." |
| 38 | Rules, storage, and teamwork | robots.txt: overload, not hiding; use noindex or password | 4 | PASS | "used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google" |
| 39 | Rules, storage, and teamwork | Store pages as-is in S3-like object store | 1 | PASS | "store the entire webpage. An object store, such as Amazon S3, is a good fit" |
| 40 | Rules, storage, and teamwork | Object store scales and is durable | 1 | PASS | "Object stores are scalable and highly durable" |
| 41 | Rules, storage, and teamwork | Key-value metadata: URL, location, last crawl, result | 1 | PASS | "URL; Location of stored content; Last crawled time; Status or crawl result" |
| 42 | Rules, storage, and teamwork | Colossus is Google's storage; replaced GFS | 1 | FAIL→fixed | Was "At Google, a storage system called Colossus does this kind of job" (S1 does not say Colossus stores crawled pages). Now "Google runs its own distributed storage system, called Colossus." Quote: "Colossus is Google's distributed storage system. It replaced Google File System (GFS)" |
| 43 | Rules, storage, and teamwork | Orchestration picked; triggers, tracks, retries | 1 | PASS | "The orchestrator triggers each step, tracks progress, and handles retries." |
| 44 | Rules, storage, and teamwork | Orchestrator schedules recrawls | 1 | PASS | "Orchestrator can schedule recrawls" |
| 45 | Indexing and serving | Three stages: crawl, index, serve | 2 | PASS | "Google Search works in three stages" |
| 46 | Indexing and serving | Indexing reads text and key tags such as title | 2 | PASS | "processing and analyzing the textual content and key content tags and attributes, such as <title> elements" |
| 47 | Indexing and serving | Like a book index, entry per word | 3 | PASS | "like the index in the back of a book - with an entry for every word seen on every webpage we index" |
| 48 | Indexing and serving | Thousands of computers; not every page indexed | 2 | PASS | "a large database hosted on thousands of computers. Indexing isn't guaranteed" |
| 49 | Indexing and serving | Machines search index, return best and most relevant | 2 | PASS | "our machines search the index for matching pages and return the results we believe are the highest quality and most relevant" |
| 50 | Indexing and serving | Hundreds of factors; Paris vs Hong Kong | 2 | PASS | "Relevancy is determined by hundreds of factors... a user in Paris than it would to a user in Hong Kong" |
| 51 | Indexing and serving | Crawlers always run; learn change rate | 3 | PASS | "our crawling processes are always running... They learn how often content they've seen before seems to change" |
| 52 | The big picture | Diagram of the article's crawler plus an indexer | 1 | PASS | Walk-through restates rows 15 to 41; indexer step: "Search engine then takes this content, builds indexes, and serves user queries." |
| 53 | Key words | Plain meanings | — | PASS | Definitions only; they agree with the rows above. |
| 54 | What a tester can learn | Tip says it is tutorial advice | — | PASS | "These ideas are the tutorial's own advice." |

Open FAILs: 0
