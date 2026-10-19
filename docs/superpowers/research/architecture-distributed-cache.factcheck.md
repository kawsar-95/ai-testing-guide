# Fact-check: Distributed Cache (round 1, 2026-10-20)

An independent agent checked the page. It fetched each source with `curl` on 2026-10-20 and searched the plain text. No fetched text is committed. All 8 sources are official vendor docs (Microsoft Learn, Redis docs). Each source has at least 1 cite, and each cite number has a source. The page had 4 FAILs. All 4 are fixed.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | A private (local) cache keeps data on the computer that runs the app | 1 | PASS | "Use a private cache, where you hold data locally on the computer that runs an application or service." |
| 2 | In plain words | A shared cache is one common store for many processes and machines | 1 | PASS | "Use a shared cache, which serves as a common source that multiple processes and machines can access." |
| 3 | In plain words | With many servers, each has its own copy | 1 | PASS | "each application instance has its own independent cache that holds its own copy of the data." |
| 4 | In plain words | Data changes between two reads, so servers can disagree | 1 | PASS | "it's likely that different application instances hold different versions of the data" / "information in the database changes between time X and time Y." |
| 5 | In plain words | With a shared cache, all servers see the same data | 1 | PASS | "By using a shared cache, you can ensure that all application instances see the same view of cached data." |
| 6 | In plain words | A shared cache is slower and is one more service to run | 1 | PASS | "The cache is slower to access because it's no longer held locally" / "Implementing a separate cache service might add complexity to the solution." |
| 7 | In plain words | "Redis is the most common choice." | – | FAIL→fixed | No source says "most common". Now "This page uses Redis as the example. Redis can serve as a shared cache for many app instances [1]." Quote: "Azure Managed Redis is a managed Redis service that you can use as a shared cache across application instances." |
| 8 | In plain words | Redis Cluster splits data across many nodes automatically | 4 | PASS | "Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes." |
| 9 | In plain words | Sentinel watches the main server and promotes a replica on failure | 3 | PASS | "Sentinel constantly checks if your master and replica instances are working as expected." / "Sentinel can start a failover process where a replica is promoted to master" |
| 10 | In plain words | A managed Redis is run for you by the cloud vendor | 2 | PASS | "Microsoft operates the service, hosts it on Azure" |
| 11 | Uses list | Session store: "Login data for each user" | 2 | FAIL→fixed | The source names shopping carts and user history, not login data. Now "Data that the app links to each user's session, such as a shopping cart." Quote: "This pattern is commonly used with shopping carts and other user history data that a web application might associate with user cookies." |
| 12 | Uses list | A key with a timeout is deleted automatically | 5 | PASS | "Set a timeout on key. After the timeout has expired, the key will automatically be deleted." |
| 13 | Uses list | A counter that limits how often an action can happen | 8 | PASS | "The rate limiter pattern is a special counter that is used to limit the rate at which an operation can be performed." |
| 14 | Uses list | Sorted set type for leaderboards | 2 | PASS | "Redis offers simple and powerful support for developing leaderboards of all kinds using the sorted set data structure." |
| 15 | Uses list | A lock lets only one server do a job at a time | 6 | PASS | "Mutual exclusion. At any given moment, only one client can hold a lock." |
| 16 | Uses list | Feature flags and temporary state | – | PASS | The owner's example list. No product claim. |
| 17 | Roles table | Azure calls this a data cache or a content cache | 2 | PASS | "Data cache" / "Content cache" / "Using an in-memory cache provides quick access to static content compared to backend datastores." |
| 18 | Roles table | Session store and job queuing are "standard" Redis patterns | 2 | FAIL→fixed | The source says "common", not "standard". Now "common Redis patterns". Quote: "Some of the most common patterns include the following" / "Session store" / "Job and message queuing". |
| 19 | Callout (Tutorial advice) | "Many teams keep the two roles in separate Redis instances" | – | FAIL→fixed | A claim about practice with no source. Now advice: "Think about separate Redis instances for the two roles, so that a big page cache cannot push out login data." |
| 20 | A real-life example | `SET otp:... 482913 EX 120` sets a 120 s TTL | – | PASS | Tutorial example, no cite needed. Syntax checked against the Redis SET doc: "EX seconds Set the specified expire time, in seconds (a positive integer)." |
| 21 | Common mistakes | The app should keep working when the shared cache is down | 1 | PASS | "An application should be able to continue functioning if the shared cache is unavailable." |
| 22 | Common mistakes | A cache can lose data; keep valuable data in the real store | 1 | PASS | "think of the cache as a transient data store that could disappear at any time. Don't store valuable data in the cache only" |
| 23 | Common mistakes | A Redis lock: set only if not exists (`NX`) with expiry (`PX`) | 6 | PASS | "The command will set the key only if it does not already exist (NX option), with an expire of 30000 milliseconds (PX option)." |
| 24 | Common mistakes | The holder must remove only its own lock | 6 | PASS | "This is important in order to avoid removing a lock that was created by another client." |
| 25 | Common mistakes | Redis advises a key schema such as `user:1000` | 7 | PASS | "Try to stick with a schema. For instance "object-type:id" is a good idea, as in "user:1000"." |
| 26 | What a tester can check | Test tips | – | PASS | Tutorial advice callout. No cite needed. |
| 27 | Key words | Definitions | – | PASS | Each definition agrees with the cited text above. |

## Fixes

1. Replaced "Redis is the most common choice" with a cited, neutral sentence (row 7).
2. Reworded the session store use to match S2 (row 11).
3. Changed "standard" to "common" to match S2 (row 18).
4. Changed an unsourced "many teams" claim in the advice callout into plain advice (row 19).
5. Notes: claim 11 now has the shopping-cart quote, and new claim 23 has the shared-cache quote.

Open FAILs: 0
