# Caching with Redis (Architecture 12) — research notes (2026-10-20)

Base text: the owner's notes, section "Caching with Redis" (`architecture-owner-notes.md`). The owner's ideas, lists, and LMS course-list example are kept. They get no cite.

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratch directory. The quotes below are copied from that text. The raw text was not committed. The AWS whitepaper "Database Caching Strategies Using Redis" was also fetched, but it now says "This whitepaper is for historical reference only", so the page uses the Azure Architecture Center for the cache-aside pattern instead.

## Sources

S1. What is Caching and How it Works — Amazon Web Services — https://aws.amazon.com/caching/ — accessed 2026-10-20. Page cite `[1]`.
S2. Get started with Redis — Redis Docs — https://redis.io/docs/latest/get-started/ — accessed 2026-10-20. Page cite `[2]`.
S3. EXPIRE — Redis Docs (commands) — https://redis.io/docs/latest/commands/expire/ — accessed 2026-10-20. Page cite `[3]`.
S4. TTL — Redis Docs (commands) — https://redis.io/docs/latest/commands/ttl/ — accessed 2026-10-20. Page cite `[4]`.
S5. Key eviction — Redis Docs — https://redis.io/docs/latest/develop/reference/eviction/ — accessed 2026-10-20. Page cite `[5]`.
S6. Cache-Aside pattern — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside — accessed 2026-10-20. Page cite `[6]`.
S7. Caching guidance — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching — accessed 2026-10-20. Page cite `[7]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A cache is a high-speed storage layer that keeps a subset of data so later requests are faster | S1 | "a cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data’s primary storage location." |
| 2 | Cache data is usually in fast hardware such as RAM | S1 | "The data in a cache is generally stored in fast access hardware such as RAM (Random-access memory)" |
| 3 | A cache miss occurs when the data is not in the cache; a high hit rate means the data was present | S1 | "A successful cache results in a high hit rate which means the data was present when fetched. A cache miss occurs when the data fetched was not present in the cache." |
| 4 | TTLs expire cached data | S1 | "Controls such as TTLs (Time to live) can be applied to expire the data accordingly." |
| 5 | Redis is an in-memory data store used as a cache (and more) | S2 | "Redis is an in-memory data store used by millions of developers as a cache, vector database, document database, streaming engine, and message broker." |
| 6 | Redis EXPIRE sets a timeout; after it, the key is deleted automatically | S3 | "Set a timeout on key. After the timeout has expired, the key will automatically be deleted." |
| 7 | Redis TTL returns the remaining time to live of a key | S4 | "Returns the remaining time to live of a key that has a timeout." |
| 8 | TTL returns -1 if the key has no expire, -2 if the key does not exist | S4 | "The command returns -2 if the key does not exist." / "The command returns -1 if the key exists but has no associated expire." |
| 9 | Redis can evict keys when the cache exceeds a memory limit | S5 | "Redis lets you specify an eviction policy to evict keys automatically when the size of the cache exceeds a set memory limit." |
| 10 | Cache entries are copies of stored data, so evicting them is usually safe | S5 | "Since cache entries are copies of persistently-stored data, it is usually safe to evict them when the cache runs out of memory" |
| 11 | `allkeys-lru` evicts the least recently used keys | S5 | "allkeys-lru: Evict the least recently used (LRU) keys." |
| 12 | Cache-aside loads data into the cache on demand | S6 | "Load data on demand into a cache from a data store." |
| 13 | Cache-aside: on update, write the data store and then invalidate the cache item; the next read reloads it | S6 | "When an application updates information, it writes the change to the data store and then invalidates the corresponding item in the cache. When the item is needed again, the Cache-Aside pattern retrieves the updated data from the data store and adds it to the cache." |
| 14 | The expiration period should not be too short or too long | S6 | "Don't make the expiration period too short because premature expiration can cause applications to continually retrieve data from the data store and add it to the cache. Similarly, don't make the expiration period so long that the cached data becomes stale." |
| 15 | Cache-aside does not guarantee consistency with the data store | S6 | "The Cache-Aside pattern doesn't guarantee consistency between the data store and the cache." |
| 16 | Between a write and the next read, a reader can briefly see stale data | S6 | "Between the write and the next read, a reader can experience a cache miss or briefly see stale data." |
| 17 | Caching suits read-heavy data that changes infrequently and tolerates some staleness | S6 | "Caching improves performance for read-heavy data that changes infrequently and tolerates some staleness." |
| 18 | Do not use the cache as the authoritative store of critical data | S7 | "don't use the cache as the authoritative store of critical information. Instead, save all important changes to a persistent data store." |
| 19 | The app should keep working if the shared cache is unavailable | S7 | "An application should be able to continue functioning if the shared cache is unavailable." |
| 20 | The app should fall back to the original data store if the cache is inaccessible | S7 | "the application must be prepared to detect the availability of the cache service and fall back to the original data store if the cache is inaccessible." |
| 21 | During cache recovery, the data store can be swamped, with timeouts | S7 | "While the cache is being recovered, the original data store could be swamped with requests for data, resulting in timeouts and failed connections." |
| 22 | Use structured keys such as `customer:100` | S7 | "use structured keys like customer:100 (instead of just 100) to represent the key for the customer that has ID 100." |
| 23 | Protect cached data from unauthorized access | S7 | "consider how to protect the data in the cache from unauthorized access." |
| 24 | (fact-check) A cache can keep the results of database queries and API requests | S1 | "Cached information can include the results of database queries, computationally intensive calculations, API requests/responses" |
| 25 | (fact-check) Eviction happens when you specify an eviction policy (qualifies claim 9) | S5 | "Redis lets you specify an eviction policy to evict keys automatically" |

## Owner claims kept without a cite

- The LMS example: course list cached in Redis for 10 min, invalidated when an admin changes the price. Tutorial example.
- "Confusing cache performance with data correctness." The page cites claims 14 and 15 and keeps the lesson as the tutorial's own words.
- "When you need it" list and the tester checks. Tutorial advice. The item "External API calls are expensive or slow" has no specific official quote and stays as tutorial advice.
