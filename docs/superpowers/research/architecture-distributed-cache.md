# Distributed Cache (Architecture module, topic 13) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl` on 2026-10-20 and converted to plain text in the scratch folder of the session. No fetched text is committed. Each quote below is copied from that text.

Base text: the owner's notes, section "Distributed Cache" and "Frontend-facing Redis and Backend Redis" (`architecture-owner-notes.md`). The owner's ideas, lists, and the OTP example get no cite. The LMS example and the tester tips are the tutorial's own words.

## Sources

S1. Caching guidance — Azure Architecture Center (Microsoft Learn) — https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching — accessed 2026-10-20
S2. What is Azure Managed Redis? — Microsoft Learn — https://learn.microsoft.com/en-us/azure/redis/overview — accessed 2026-10-20
S3. High availability with Redis Sentinel — Redis docs — https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/ — accessed 2026-10-20
S4. Scale with Redis Cluster — Redis docs — https://redis.io/docs/latest/operate/oss_and_stack/management/scaling/ — accessed 2026-10-20
S5. EXPIRE — Redis docs — https://redis.io/docs/latest/commands/expire/ — accessed 2026-10-20
S6. Distributed Locks with Redis — Redis docs — https://redis.io/docs/latest/develop/clients/patterns/distributed-locks/ — accessed 2026-10-20
S7. Keys and values — Redis docs — https://redis.io/docs/latest/develop/using-commands/keyspace/ — accessed 2026-10-20
S8. INCR — Redis docs — https://redis.io/docs/latest/commands/incr/ — accessed 2026-10-20

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A shared cache is one common source that many processes and machines can use | S1 | "Use a shared cache, which serves as a common source that multiple processes and machines can access." |
| 2 | A private (local) cache keeps data on the computer that runs the app | S1 | "Use a private cache, where you hold data locally on the computer that runs an application or service." |
| 3 | With many instances, each instance has its own copy in its local cache | S1 | "each application instance has its own independent cache that holds its own copy of the data." |
| 4 | Local caches can disagree when the data changes between two reads | S1 | "Between these two annotation lines is a note reading information in the database changes between time X and time Y." |
| 5 | With a shared cache, all instances see the same cached data | S1 | "By using a shared cache, you can ensure that all application instances see the same view of cached data." |
| 6 | Shared caches often run on a cluster and scale by adding servers | S1 | "Many shared cache services are implemented by using a cluster of servers" / "You can easily scale the cache by adding more servers." |
| 7 | A shared cache is slower than a local one and adds complexity | S1 | "The cache is slower to access because it's no longer held locally with each application instance." / "Implementing a separate cache service might add complexity to the solution." |
| 8 | Redis Cluster splits the data across many nodes automatically | S4 | "Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes." |
| 9 | Redis Sentinel watches the main server and, on failure, promotes a replica to master | S3 | "Monitoring. Sentinel constantly checks if your master and replica instances are working as expected." / "Sentinel can start a failover process where a replica is promoted to master" |
| 10 | Azure Managed Redis is a managed service that Microsoft operates | S2 | "Microsoft operates the service, hosts it on Azure, and any application within or outside of Azure can use it." |
| 11 | Session store is a common Redis pattern for data linked to a user's session, such as a shopping cart | S2 | "Some of the most common patterns include the following" / "Session store" / "This pattern is commonly used with shopping carts and other user history data that a web application might associate with user cookies." |
| 12 | Leaderboards with the sorted set data structure | S2 | "Redis offers simple and powerful support for developing leaderboards of all kinds using the sorted set data structure." |
| 13 | Job and message queuing (task queuing) | S2 | "Longer running operations are queued to be processed in sequence, often by another server. This method of deferring work is called task queuing." |
| 14 | Data cache and content cache patterns (frontend-facing use) | S2 | "Data cache" / "Content cache" / "Using an in-memory cache provides quick access to static content compared to backend datastores." |
| 15 | A Redis counter can limit the rate of an operation | S8 | "The rate limiter pattern is a special counter that is used to limit the rate at which an operation can be performed." |
| 16 | A key with a timeout is deleted automatically after the timeout | S5 | "After the timeout has expired, the key will automatically be deleted." |
| 17 | A Redis lock: SET with NX and an expiry (PX) | S6 | "SET resource_name my_random_value NX PX 30000" / "The command will set the key only if it does not already exist (NX option), with an expire of 30000 milliseconds (PX option)." |
| 18 | A lock must not block forever if the holder crashes (deadlock free) | S6 | "Deadlock free. Eventually it is always possible to acquire a lock, even if the client that locked a resource crashes or gets partitioned." |
| 19 | Release the lock only if the value is yours | S6 | "This is important in order to avoid removing a lock that was created by another client." |
| 20 | Do not use the cache as the only store; it can disappear | S1 | "think of the cache as a transient data store that could disappear at any time. Don't store valuable data in the cache only" |
| 21 | The app should keep working if the shared cache is down | S1 | "An application should be able to continue functioning if the shared cache is unavailable." |
| 22 | Use a key schema such as object-type:id | S7 | "Try to stick with a schema. For instance "object-type:id" is a good idea, as in "user:1000"." |
| 23 | Redis can serve as a shared cache for many app instances | S1 | "Azure Managed Redis is a managed Redis service that you can use as a shared cache across application instances." |

## Owner claims without an outside source

- "Feature flag" and "temporary state" as use cases: kept as the owner's list item with no cite. They are examples, not facts about a product.
- "Frontend-facing Redis" and "Backend Redis" are the owner's own names for two roles. They are not product terms. The page says so. The examples in each role cite S2, S6, and S8 where a source exists (content cache, session store, task queuing, locks, rate counters). OTP, payment state, and workflow data stay as the owner's examples with no cite.
- Advice to keep the two roles apart (so cache data cannot push out login data) is the tutorial's own advice. The page marks it as advice.
