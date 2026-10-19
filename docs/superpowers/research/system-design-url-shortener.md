# How a URL Shortener Works (System Design) — research notes (2026-10-20)

Fetch note: the article was fetched with `curl -sL` and stripped to plain text into `<scratch dir>/sd-raw/url-shortener/article.txt`. The article is free to read (no paywall). The text in figures (images) is not in the text file, so the page uses no number that appears only in a figure. The article text was not committed.

Scope note: the article is an interview-style design ("This article is written based on the research I have done on the topic and might differ from real-world implementations"). The page says so in the lede. The owner's list calls the page "How Bitly Shortener Works". The article names Bitly two times (as a public service and as a company that sells analytics), so the page names Bitly only in those two roles.

Copy check: `python3 scripts/linux_overlap.py content/system-design/url-shortener.mdx <scratch dir>/sd-raw/url-shortener` exits 0. Round 1 found one run ("a sql database such as postgres or mysql"); the sentence was reworded.

## Sources
S1. URL Shortening System Design — The System Design Newsletter (Neo Kim) — https://systemdesign.one/url-shortening-system-design/ — accessed 2026-10-20 (raw `article.txt`). Page cite `[1]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article's design may differ from real systems | S1 | "might differ from real-world implementations" |
| 2 | The service makes a short link for a long link and redirects to the long link | S1 | "the server generates a unique short URL for each long URL" / "the server redirects the client to the original long URL against the short URL" |
| 3 | tinyurl.com and bitly.com are well-known public services | S1 | "Some popular public-facing URL shortening services are tinyurl.com and bitly.com" |
| 4 | Reasons: click tracking, cleaner links, character limits in chat tools | S1 | "track clicks for analytics" / "beautify a URL" / "some instant messaging services limit the count of characters on the URL" |
| 5 | 100 million DAU for writes | S1 | "The Daily Active Users (DAU) for writes is 100 million." |
| 6 | Read:write ratio 100:1 | S1 | "What is the anticipated read: write ratio of the system?" ... "100: 1" |
| 7 | Short links persist 5 years by default | S1 | "The shortened URL persists by default for 5 years in the data store." |
| 8 | Short code at most 9 characters | S1 | "At most 9 characters" |
| 9 | About 100 thousand read QPS | S1 | "The Query Per Second (QPS) of reads is approximately 100 thousand." |
| 10 | One record is about 2.5 KB | S1 | "In total, a URL record is approximately 2.5 KB in size." |
| 11 | Most short links are opened only once | S1 | "Most of the shortened URLs will be accessed only once after the creation" |
| 12 | Base62 output uses only letters and digits | S1 | "the encoded output contains only alphanumeric characters" |
| 13 | Base58 drops look-alike characters | S1 | "base58 avoids non-distinguishable characters such as O (uppercase O), 0 (zero), and I (capital I), l (lowercase L)" |
| 14 | 7 base62 characters give about 3.5 trillion codes | S1 | "The base62 encoded output of 7-character length generates 3.5 trillion short URLs." |
| 15 | That supply lasts 100 years at 1,000 per second | S1 | "A total count of 3.5 trillion short URLs is exhausted in 100 years when 1000 short URLs are used per second." |
| 16 | The article picks 7 characters of base62 | S1 | "In summary, a 7-character base62 encoded output satisfies the system requirement." |
| 17 | Random ID: collisions, needs database checks | S1 | "the probability of collisions is high due to randomness" / "frequent verification of the existence of a short URL in the database is a bottleneck" |
| 18 | Hash (MD5), keep first 7 characters, prefixes can collide | S1 | "The encoded output must be truncated by considering only the first 7 characters (42 bits)" / "resulting in a collision" |
| 19 | Hash output is predictable | S1 | "predictable output due to the hash function" |
| 20 | Token range: counter, predictable output | S1 | "the short URL is predictable due to the monotonically increasing output range" |
| 21 | Random bits reduce predictability | S1 | "append random bits to the suffix of the output" |
| 22 | The article picks token range | S1 | "In summary, use the token range solution for shortening a URL." |
| 23 | ZooKeeper or DynamoDB coordinates the ranges | S1 | "A highly reliable distributed service such as Apache Zookeeper or Amazon DynamoDB is used to coordinate the output range" |
| 24 | A server asks for a new range when its range is used up | S1 | "When the fetched output range is fully exhausted, the token service requests a fresh output range" |
| 25 | A Bloom filter avoids expensive lookups | S1 | "A bloom filter is used to prevent expensive data store lookups on URL shortening." |
| 26 | Bloom filter can give false positives | S1 | "the bloom filter query might yield false positives, resulting in a database lookup" |
| 27 | Redirect carries the long URL in the location header | S1 | "The server sets the location HTTP header to the long URL." |
| 28 | The browser makes a second request by itself | S1 | "The browser then automatically makes another HTTP request to the received long URL." |
| 29 | 301 permanent; crawlers update records | S1 | "The web crawler updates its records when the status code 301 is received" |
| 30 | 301 is cached on the client by default | S1 | "The 301 status code stores the cache on the client by default." |
| 31 | 302 temporary; no SEO benefit | S1 | "The 302 status code does not improve the SEO rankings of the original website." |
| 32 | 307 keeps the method and body | S1 | "The 307 status code lets the client reuse the HTTP method and the body of the original request on redirection." |
| 33 | 404 for unknown short code | S1 | "The server responds with the status code 404 Not Found when the client executes a redirection request on the short URL that does not exist" |
| 34 | The article chooses 301 | S1 | "In summary, use the 301 status code in the HTTP response to meet the system requirements." |
| 35 | Client cache blocks analytics; cache-control public moves the cache to CDN/proxy | S1 | "If the redirection requests do not reach the server, analytics data cannot be collected." / "The public cache lives on the content delivery network (CDN) or the reverse proxy servers." |
| 36 | 80/20 rule for caching | S1 | "Following the 80/20 rule, 80% of egress is served by 20% of URL data stored on cache servers." |
| 37 | TTL of 1 day | S1 | "A Time-to-live (TTL) of 1 day is reasonable." |
| 38 | Redis or Memcached as cache servers | S1 | "Dedicated cache servers such as Redis or Memcached are provisioned" |
| 39 | Cache-aside: on a miss, read the store and fill the cache | S1 | "When a cache miss occurs, the server queries the data store and populates the cache." |
| 40 | LRU eviction | S1 | "the Least Recently Used (LRU) policy is used to evict the cache when the cache server is full" |
| 41 | Bloom filter so the cache stores only repeat-visit links | S1 | "The cache servers are updated only when the bloom filter is already set (multiple requests to the same short URL)." |
| 42 | Bloom filter on short codes returns 404 without lookups | S1 | "If the short URL is absent in the bloom filter, return an HTTP status code of 404." |
| 43 | Collapsed forwarding for identical requests | S1 | "the cache server will collapse the requests and will forward a single request to the origin server" |
| 44 | NoSQL (DynamoDB, MongoDB) for the URL table | S1 | "A NoSQL data store such as DynamoDB or MongoDB is used to store the URL table." |
| 45 | SQL (Postgres, MySQL) for Users; relational, strict | S1 | "A SQL database such as Postgres or MySQL is used to store the Users table." / "Strict schema" / "Relational data" |
| 46 | Replication factor at least three | S1 | "Set the replication factor of the storage to a value of at least three" |
| 47 | Partitioned by short URL | S1 | "the database is partitioned with the short URL as the partition key" |
| 48 | Extra key-value store long URL to short URL | S1 | "introduce an additional data store (inverted index) with mapping from the long URLs to the short URLs (key-value schema)" |
| 49 | Lazy removal returns 404 | S1 | "When the client tries to access an expired short URL, remove the record from the database." / "status code of 404" |
| 50 | Cleanup job at quiet hours, stops on spikes | S1 | "A dedicated cleanup service must be executed during non-peak (low traffic) hours" / "the cleanup service must be stopped" |
| 51 | Cold data (e.g. 3 years) compressed to S3 | S1 | "assume a time frame of 3 years" / "The cold data is compressed and stored in object storage (AWS S3)" |
| 52 | One-to-one mapping requirement | S1 | "Multiple users entering the same long URL must receive the same short URL (1-to-1 mapping)" |
| 53 | Distributed lock on the long URL; Chubby or Redis lock | S1 | "using a distributed lock such as the Chubby or the Redis lock" / "The distributed lock must be acquired on the long URL." |
| 54 | Rate limiting | S1 | "Rate limiting the system prevents malicious clients from degrading the service." |
| 55 | Clicks go on a queue (Kafka) and a batch job processes them | S1 | "The server puts a message on the message queue" / "a message queue such as Apache Kafka" / "executes a batch operation" |
| 56 | Bitly makes money from analytics | S1 | "Some of the popular URL-shortening services like Bitly make money by offering analytics on URL redirections" |
