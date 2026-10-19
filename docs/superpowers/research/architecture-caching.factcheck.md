# Fact-check: Caching with Redis (round 1, 2026-10-20)

I did not write this page. I read `content/architecture/caching.mdx` and `architecture-caching.md`, fetched each of the 7 sources again with `curl` on 2026-10-20, and checked each cited sentence against the source text. Every quote below is in the fresh fetch. The sources are AWS, Redis docs, and the Azure Architecture Center. Each source has 1 or more cites, and each cite number has a source. I found 2 FAILs and fixed them in the MDX. The notes have 2 new claim rows (24, 25).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Cache = fast layer with part of the data; faster than the main store | 1 | PASS | "a cache is a high-speed data storage layer which stores a subset of data... served up faster than is possible by accessing the data's primary storage location" |
| 2 | In plain words | Usually kept in RAM | 1 | PASS | "The data in a cache is generally stored in fast access hardware such as RAM" |
| 3 | In plain words | Main store is often a database; a cache can also keep API results | 1 | FAIL, fixed | "it can also be a slow external API" had no cite. Fix: reworded with cite 1: "Cached information can include the results of database queries, computationally intensive calculations, API requests/responses" |
| 4 | In plain words | Redis is an in-memory data store, used as a cache | 2 | PASS | "Redis is an in-memory data store used by millions of developers as a cache" |
| 5 | In plain words | Cache hit: the data is in the cache | 1 | PASS | "a high hit rate which means the data was present when fetched" |
| 6 | In plain words | Cache miss: the data is not in the cache | 1 | PASS | "A cache miss occurs when the data fetched was not present in the cache." |
| 7 | In plain words | Cache-aside loads data on demand | 6 | PASS | "Load data on demand into a cache from a data store." |
| 8 | In plain words | Write the database, then invalidate; next read reloads | 6 | PASS | "it writes the change to the data store and then invalidates the corresponding item in the cache. When the item is needed again, the Cache-Aside pattern retrieves the updated data" |
| 9 | In plain words | TTL = expiry time of a cached item | 1 | PASS | "Controls such as TTLs (Time to live) can be applied to expire the data accordingly." |
| 10 | In plain words | `EXPIRE` sets a timeout; key deleted automatically | 3 | PASS | "Set a timeout on key. After the timeout has expired, the key will automatically be deleted." |
| 11 | In plain words | `TTL` shows the time left | 4 | PASS | "Returns the remaining time to live of a key that has a timeout." |
| 12 | In plain words | `-1` = no expiry, `-2` = no key | 4 | PASS | "The command returns -2 if the key does not exist. The command returns -1 if the key exists but has no associated expire." |
| 13 | In plain words | Eviction when the cache passes a memory limit, if a policy is set | 5 | FAIL, fixed | The page said "Redis can remove keys by itself", with no condition. The source makes it a choice, and the `noeviction` policy returns errors: "Redis lets you specify an eviction policy to evict keys automatically when the size of the cache exceeds a set memory limit." Fix: "If you set an eviction policy, Redis removes keys by itself..." |
| 14 | In plain words | `allkeys-lru` removes least recently used keys | 5 | PASS | "allkeys-lru: Evict the least recently used (LRU) keys." |
| 15 | In plain words | Eviction is usually safe; entries are copies | 5 | PASS | "Since cache entries are copies of persistently-stored data, it is usually safe to evict them" |
| 16 | When you need it | Best for read-heavy, rarely changing, staleness-tolerant data | 6 | PASS | "Caching improves performance for read-heavy data that changes infrequently and tolerates some staleness." |
| 17 | Common mistakes | Structured keys such as `customer:100` | 7 | PASS | "use structured keys like customer:100 (instead of just 100)" |
| 18 | Common mistakes | Protect the cache from unauthorized access | 7 | PASS | "consider how to protect the data in the cache from unauthorized access" |
| 19 | Common mistakes | TTL too long = stale; too short = back to the database | 6 | PASS | "Don't make the expiration period too short because premature expiration can cause applications to continually retrieve data from the data store... don't make the expiration period so long that the cached data becomes stale." |
| 20 | Common mistakes | Cache-aside does not guarantee agreement | 6 | PASS | "The Cache-Aside pattern doesn't guarantee consistency between the data store and the cache." |
| 21 | Common mistakes | App keeps working if the cache is down | 7 | PASS | "An application should be able to continue functioning if the shared cache is unavailable." |
| 22 | Common mistakes | Fall back to the database | 7 | PASS | "fall back to the original data store if the cache is inaccessible" |
| 23 | Common mistakes | During recovery the database can get too many requests and time out | 7 | PASS | "the original data store could be swamped with requests for data, resulting in timeouts and failed connections" |
| 24 | Common mistakes | Right after a write, a reader can briefly see stale data | 6 | PASS | "Between the write and the next read, a reader can experience a cache miss or briefly see stale data." |
| 25 | Common mistakes | Cache is not the only store; save changes to a persistent store | 7 | PASS | "don't use the cache as the authoritative store of critical information. Instead, save all important changes to a persistent data store." |
| 26 | When you need it, A real-life example, What a tester can check, Key words | Lists, LMS 10-minute example, tips, meanings | — | PASS | Tutorial's own words. The tip callout title is "Tutorial advice". Key words agree with rows 1 to 25. |

## Fixes

1. "it can also be a slow external API" replaced by "a cache can also keep the results of API requests" with cite 1 (row 3).
2. Eviction sentence now says it happens when you set an eviction policy (row 13).

Open FAILs: 0
