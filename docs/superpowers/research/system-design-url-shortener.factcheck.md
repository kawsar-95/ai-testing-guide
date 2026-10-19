# Fact-check: How a URL Shortener Works (round 1, 2026-10-20)

I read the page, the research notes, and the full saved text of source 1 (the article is free, no paywall). Most claims match the article. I fixed 5 FAILs: a latency number that the article does not give, two big-picture sentences without a cite, "the database" where the article says "the origin server", and "selling click data" where the article says "offering analytics". The copy check (`linux_overlap.py`) exits 0 after the fixes.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | The service answers every click within a few milliseconds | none | FAIL→fixed | The article gives no millisecond figure, only "Low Latency". Was "answer every click in a few milliseconds". Now "answer every click fast". |
| 2 | Lede | The article is one design, not the exact TinyURL or Bitly system | none | PASS | "This article is written based on the research I have done on the topic and might differ from real-world implementations." |
| 3 | The problem in plain words | Two jobs: shorten a link, redirect to the long page | 1 | PASS | "A client (user) enters a long URL into the system and the system returns a shortened URL" / "must be redirected to the original long URL" |
| 4 | The problem in plain words | tinyurl.com and bitly.com are well-known services | 1 | PASS | "Some popular public-facing URL shortening services are tinyurl.com and bitly.com" |
| 5 | The problem in plain words | Reasons: cleaner look, click counts, chat character limits | 1 | PASS | "track clicks for analytics" / "beautify a URL" / "some instant messaging services limit the count of characters on the URL" |
| 6 | The problem in plain words | 100 million daily active users who create links | 1 | PASS | "The Daily Active Users (DAU) for writes is 100 million." |
| 7 | The problem in plain words | 100 reads for each write | 1 | PASS | "What is the anticipated read: write ratio of the system?" / answer "100: 1" |
| 8 | The problem in plain words | Default life of 5 years | 1 | PASS | "The shortened URL persists by default for 5 years in the data store." |
| 9 | The problem in plain words | Short code is 9 characters at most | 1 | PASS | "the length of the short URL must not exceed 9 characters" |
| 10 | The problem in plain words | About 100 thousand read requests per second | 1 | PASS | "The Query Per Second (QPS) of reads is approximately 100 thousand." |
| 11 | The problem in plain words | One record is about 2.5 KB | 1 | PASS | "In total, a URL record is approximately 2.5 KB in size." |
| 12 | The problem in plain words | About 100 clicks for each created link | 1 | PASS | Interviewer answer "100: 1" for the read: write ratio. |
| 13 | The problem in plain words | Most short links are opened only one time | 1 | PASS | "Most of the shortened URLs will be accessed only once after the creation" |
| 14 | The big picture | A separate service gives the short code; the server saves the pair | none | FAIL→fixed | No cite. Added `<Cite n={1} />`. Quote: "The key generation function is moved out of the server to a dedicated Key Generation Service (KGS)" |
| 15 | The big picture | Clicks pass CDN, proxy, and cache layers before the database | none | FAIL→fixed | No cite. Added `<Cite n={1} />`. Quote: "The cache is introduced at the following layers of the system for scalability: client, content delivery network (CDN), reverse proxy, dedicated cache servers" |
| 16 | Making a short code | Base62 uses only letters and digits | 1 | PASS | "the encoded output contains only alphanumeric characters" / "a 7-character base62 encoded output satisfies the system requirement" |
| 17 | Making a short code | Base58 drops look-alike characters such as zero and capital O | 1 | PASS | "base58 avoids non-distinguishable characters such as O (uppercase O), 0 (zero)" |
| 18 | Making a short code | 7 base62 characters give about 3.5 trillion codes | 1 | PASS | "The base62 encoded output of 7-character length generates 3.5 trillion short URLs." |
| 19 | Making a short code | The supply lasts about 100 years at 1,000 codes per second | 1 | PASS | "exhausted in 100 years when 1000 short URLs are used per second" |
| 20 | Making a short code | The article picks 7 characters | 1 | PASS | "In summary, a 7-character base62 encoded output satisfies the system requirement." |
| 21 | Making a short code | Random ID: collisions, needs a database check | 1 | PASS | "The KGS must verify if the generated short URL already exists in the database because of the randomness in the output." |
| 22 | Making a short code | Hash (MD5), keep first 7 characters; prefixes collide; easy to guess | 1 | PASS | "truncated by considering only the first 7 characters" / "might yield the same prefix (first 7 characters), resulting in a collision" / "predictable output due to the hash function" |
| 23 | Making a short code | Token range: codes in order, guessable unless random bits are added | 1 | PASS | "the short URL is predictable due to the monotonically increasing output range" / "append random bits to the suffix of the output" |
| 24 | Making a short code | The article picks token range | 1 | PASS | "In summary, use the token range solution for shortening a URL." |
| 25 | Making a short code | ZooKeeper or DynamoDB coordinate the blocks | 1 | PASS | "A highly reliable distributed service such as Apache Zookeeper or Amazon DynamoDB is used to coordinate the output range" |
| 26 | Making a short code | A server asks for a new block when its block is used up | 1 | PASS | "When the fetched output range is fully exhausted, the token service requests a fresh output range" |
| 27 | Making a short code (callout) | Bloom filter: false "yes" possible, no false "no"; used to skip database lookups | 1 | PASS | "A bloom filter is used to prevent expensive data store lookups" / "might yield false positives" / "If the short URL is absent in the bloom filter, return an HTTP status code of 404" |
| 28 | Sending the click to the right page | Redirect carries the long address in the `location` header | 1 | PASS | "The server sets the location HTTP header to the long URL." |
| 29 | Sending the click to the right page | The browser makes a second request by itself | 1 | PASS | "The browser then automatically makes another HTTP request to the received long URL." |
| 30 | Sending the click to the right page | 301: crawlers update records; browsers keep a copy | 1 | PASS | "The web crawler updates its records when the status code 301 is received" / "The 301 status code stores the cache on the client by default." |
| 31 | Sending the click to the right page | 302: no SEO benefit | 1 | PASS | "The 302 status code does not improve the SEO rankings of the original website." |
| 32 | Sending the click to the right page | 307 keeps the method, so PUT or POST can repeat | 1 | PASS | "The 307 status code lets the client reuse the HTTP method and the body of the original request on redirection." |
| 33 | Sending the click to the right page | 404 for an unknown code | 1 | PASS | "The server responds with the status code 404 Not Found when ... the short URL that does not exist in the database." |
| 34 | Sending the click to the right page | The article chooses 301 and sets cache-control public so CDN and proxy hold the copy | 1 | PASS | "The cache-control header on the HTTP response is set to public" / "The public cache lives on the content delivery network (CDN) or the reverse proxy servers." |
| 35 | Keeping popular links fast | 80/20 rule for caching | 1 | PASS | "Following the 80/20 rule, 80% of egress is served by 20% of URL data stored on cache servers." |
| 36 | Keeping popular links fast | TTL of one day | 1 | PASS | "A Time-to-live (TTL) of 1 day is reasonable." |
| 37 | Keeping popular links fast | Redis or Memcached | 1 | PASS | "Dedicated cache servers such as Redis or Memcached are provisioned" |
| 38 | Keeping popular links fast | Cache-aside: miss reads the database and fills the cache | 1 | PASS | "When a cache miss occurs, the server queries the data store and populates the cache." |
| 39 | Keeping popular links fast | LRU eviction when full | 1 | PASS | "the Least Recently Used (LRU) policy is used to evict the cache when the cache server is full" |
| 40 | Keeping popular links fast | Bloom filter: cache a link only on a repeat visit | 1 | PASS | "The cache servers are updated only when the bloom filter is already set (multiple requests to the same short URL)." |
| 41 | Keeping popular links fast | Bloom filter on codes returns 404 without lookups | 1 | PASS | "If the short URL is absent in the bloom filter, return an HTTP status code of 404." |
| 42 | Keeping popular links fast | Collapsed forwarding sends one request to the database | 1 | FAIL→fixed | The article says "origin server", not the database. Was "sends just one request to the database". Now "sends just one request to the origin server". Quote: "will forward a single request to the origin server on behalf of the clients" |
| 43 | Storing links and cleaning up | Link table in NoSQL (DynamoDB or MongoDB); easy horizontal scaling | 1 | PASS | "A NoSQL data store such as DynamoDB or MongoDB is used to store the URL table." / "Easy horizontal scaling" |
| 44 | Storing links and cleaning up | Users in SQL (Postgres or MySQL): relational, strict rules | 1 | PASS | "A SQL database such as Postgres or MySQL is used to store the Users table." / "Strict schema" / "Relational data" |
| 45 | Storing links and cleaning up | At least three copies | 1 | PASS | "Set the replication factor of the storage to a value of at least three" |
| 46 | Storing links and cleaning up | Shards by short code | 1 | PASS | "the database is partitioned with the short URL as the partition key" |
| 47 | Storing links and cleaning up | Second store keyed by the long link | 1 | PASS | "introduce an additional data store (inverted index) with mapping from the long URLs to the short URLs" |
| 48 | Storing links and cleaning up | Lazy removal returns 404; cleanup job runs in quiet hours and stops on a spike | 1 | PASS | "remove the record from the database. The server responds ... 404" / "If the traffic suddenly spikes ... the cleanup service must be stopped" |
| 49 | Storing links and cleaning up | Unused for about 3 years: compress and move to S3 | 1 | PASS | "assume a time frame of 3 years" / "The cold data is compressed and stored in object storage (AWS S3)" |
| 50 | Same link, many users at once | One-to-one rule | 1 | PASS | "Multiple users entering the same long URL must receive the same short URL (1-to-1 mapping)" |
| 51 | Same link, many users at once | Distributed lock on the long link; Chubby or Redis lock | 1 | PASS | "The optimal solution is using a distributed lock such as the Chubby or the Redis lock. The distributed lock must be acquired on the long URL." |
| 52 | Same link, many users at once | Rate limiting caps one client | 1 | PASS | "Rate limiting the system prevents malicious clients from degrading the service." |
| 53 | Same link, many users at once | Each click goes on a queue such as Kafka; a batch job processes it later | 1 | PASS | "The server puts a message on the message queue" / "a message queue such as Apache Kafka" / "executes a batch operation" |
| 54 | Same link, many users at once | Bitly earns money by selling click data | 1 | FAIL→fixed | The article says "offering analytics", not selling data. Was "by selling this click data". Now "by offering analytics on redirects". Quote: "Bitly make money by offering analytics on URL redirections" |
| 55 | What a tester can learn | Tip says it is tutorial advice | none | PASS | "These test ideas are the tutorial's own advice, not claims from the article." Closing tag at column 0. |

Structure checks: 1 source, cited; all cite numbers are 1; `##` headings are unique; the tip callout ends at column 0; no `{` or `<` in prose. Copy check: `linux_overlap.py` exits 0 with no runs.

Open FAILs: 0
