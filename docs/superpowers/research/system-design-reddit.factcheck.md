# Fact-check: How Reddit Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of S1 (the free part, up to "3. Comments") and S2 (the InfoQ transcript of the 2017 QCon talk by a Reddit engineer). I fixed 2 claims: "one primary server takes all writes" (S2 says each primary in the cluster takes writes), and the lock sentence, which had no cite. The structure checks pass: 2 sources, both cited, cites in range, unique `##` headings, the `</Callout>` at column 0, no `{` or `<` in prose. `linux_overlap.py` exits 0 after the fixes.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Article based on research, can differ | 1 | PASS | "This post is based on my research and may differ from real-world implementation." |
| 2 | Lede | A 2017 talk by a Reddit engineer describes the real system | 2 | PASS | "serve 320 million users every month" (the speaker talks for Reddit: "We are currently the 4th largest in the U.S.") |
| 3 | The problem in plain words | June 2005; food ordering idea rejected; social site | 1 | PASS | "Yet their idea got rejected as smartphones didn't exist back then. So they pivoted to create a social network" |
| 4 | The problem in plain words | One machine, Postgres | 1 | PASS | "They ran the entire site on a single machine." / "comments information in Postgres" |
| 5 | The problem in plain words | App and database on separate machines | 1 | PASS | "they installed separate machines for app server and database" |
| 6 | The problem in plain words | One database and monolith a bottleneck | 1 | PASS | "a single database and monolithic codebase became a bottleneck" |
| 7 | The problem in plain words | Popular posts showed new data late | 1 | PASS | "there was a massive delay in showing the latest data" |
| 8 | The problem in plain words | 320 million users a month, a million posts a day, 75 million votes | 2 | PASS | "posting a million times a day, and casting 75 million votes" |
| 9 | The problem in plain words | Title says 100 million daily users | 1 | PASS | "Break Into Reddit Architecture for 100M Daily Users" |
| 10 | The big picture | CDN, load balancer, app servers | 2 | PASS | "we have the CDN in front, that's Fastly" / "The load balancer is in the front" |
| 11 | The big picture | Ranked lists read from cache | 1 | PASS | "store the list of post IDs along with their rank on the cache server" |
| 12 | The big picture | Post from cache first, database on a miss | 2 | PASS | "r2 reads it first and hits it on a miss" |
| 13 | The big picture | Posts and votes to a job queue; processors update DB and cache | 1 | PASS | "The processor then pulls the job from the queue asynchronously" / "invalidates the cache and updates the databases" |
| 14 | Growing past one machine | More app servers, load balancer | 1 | PASS | "They added more app servers and set up a load balancer in front" |
| 15 | Growing past one machine | Vertical scaling, hardware limit, partitions for writes | 1 | PASS | "there's a hardware limit with vertical scaling. So they partitioned the database to scale writes." |
| 16 | Growing past one machine | Replicas for reads | 1 | PASS | "they installed replica databases for read scalability" |
| 17 | Growing past one machine | Accounts, links, subreddits, comments in Postgres with memcache | 2 | PASS | "accounts, links, sub-Reddits, comments" / "based in Postgress with memcache in front of it" |
| 18 | Growing past one machine | Primary takes writes; async read-only replicas | 2 | FAIL→fixed | Was "One primary server takes all writes." S2 says each primary in the cluster. Now "In the database cluster, the primary servers take the writes." Quote: "each primary in the database cluster handles writes, and then we have a number of read-only replicas" |
| 19 | Slow work goes into a queue | New post updates several tables; rate limits, spam filters | 1 | PASS | "update different tables, such as posts, subreddits, and accounts" / "rate limit checks and spam filters" |
| 20 | Slow work goes into a queue | Message in queue; processor handles it later | 1 | PASS | "They add a message to the job queue for each new post" |
| 21 | Slow work goes into a queue | Queue is RabbitMQ | 2 | PASS | "we defer that to an asynchronous job queue via Rabbit MQ" |
| 22 | Ranked lists of posts | Boards and front page are ordered lists | 1 | PASS | "They show each subreddit and front page as an ordered list of posts." |
| 23 | Ranked lists of posts | "hot" function of up and down votes | 1 | PASS | "a custom function named 'hot', which takes upvotes and downvotes as inputs" |
| 24 | Ranked lists of posts | Sorting in the database each time is slow | 1 | PASS | "querying the database often for an ordered list is expensive and adds extra latency" |
| 25 | Ranked lists of posts | IDs with rank in cache; fetch by ID is fast | 1 | PASS | "This makes it easy to look up the posts by primary key." |
| 26 | Ranked lists of posts | One post in many lists; jobs pre-compute lists | 1 | PASS | "A single Reddit post is part of many lists. So they pre-compute each list using a job queue" |
| 27 | Ranked lists of posts | Popular lists in Cassandra | 1 | PASS | "they store the popular lists in Cassandra for durability" |
| 28 | Ranked lists of posts | Processor has the data; reads, moves, writes back | 2 | PASS | "you have all the information you need to be able to go and update that cache listing" / "And then we will write it back." |
| 29 | Ranked lists of posts | No longer a true cache; now in Cassandra | 2 | PASS | "It is not really a cache anymore" / "nowadays in Cassandra" |
| 30 | Votes, locks, and a traffic jam | Votes through the job queue | 1 | PASS | "voting is an expensive operation" / "So they use a job queue." |
| 31 | Votes, locks, and a traffic jam | Race condition | 1 | PASS | "there's a risk of a race condition when many processors handle votes on the same post at the same time" |
| 32 | Votes, locks, and a traffic jam | Lock on the list, one holder | 2 | FAIL→fixed | Had no cite. Added cite 2. Quote: "read/mutate/write operation, which has the potential for raised conditions, so we lock around that" |
| 33 | Votes, locks, and a traffic jam | The article says ZooKeeper for locks | 1 | PASS | "They use Zookeeper for locking as it offers high availability." |
| 34 | Votes, locks, and a traffic jam | Mid-2012 backlog at peak; scores caught up hours later | 2 | PASS | "Back in the middle of 2012" / "we will get it many hours later when the queue processed" |
| 35 | Votes, locks, and a traffic jam | More processors made it worse | 2 | PASS | "So, why not add more scale, more processors? That made it worse." |
| 36 | Votes, locks, and a traffic jam | Timers showed waits on the same lock | 2 | PASS | "So we started adding a bunch of timers" / "they are all just waiting on the lock" |
| 37 | Votes, locks, and a traffic jam | Board ID modulo 10, 10 queues | 2 | PASS | "modular 10 and put it into one of 10 different queues" |
| 38 | Votes, locks, and a traffic jam | Same processors, fewer per lock | 2 | PASS | "we had the same total number of processors in the end" / "fewer vying" |
| 39 | Votes, locks, and a traffic jam | Late 2012 slow again, seen in p99 | 2 | PASS | "late-2012" / "we looked at the P99s, the 99th percentile of the timers" |
| 40 | Votes, locks, and a traffic jam | Domain listing across partitions | 2 | PASS | "the domain listing was the point of contention now" |
| 41 | Votes, locks, and a traffic jam | Later fix: smaller messages on own partitions | 2 | PASS | "we make a bunch of messages that deal with different parts of the job" |
| 42 | Comment trees | Comments are threaded | 2 | PASS | "comments on Reddit is that they are threaded" |
| 43 | Comment trees | 10,000 comments are costly to look up | 2 | PASS | "there's 10,000 comments on this thread, I need to look up all 10,000 comments" |
| 44 | Comment trees | Parent links in one place; load only shown comments | 2 | PASS | "the parent relationships of that whole tree in one place" / "only look at those comments" |
| 45 | Comment trees | Tree updates as background jobs in batches | 2 | PASS | "we defer it to offline job processing" / "mutate the trees in one big batch" |
| 46 | Comment trees | Missing parent is a problem | 2 | PASS | "If I insert a comment and its parent doesn't exist, that is weird" |
| 47 | Comment trees | Early 2016 fast lane filled broker memory; repair requests | 2 | PASS | "Early-2016" / "rapidly filled up all of the memory on the message broker" / "please recompute me" |
| 48 | Comment trees | Broker restarted, messages lost; queue quotas now | 2 | PASS | "re-start the message broker, and lose all those messages" / "now we use queue quotas" |
| 49 | What a tester can learn | Tip says it is tutorial advice | none | PASS | "These test ideas are the tutorial's own advice." |

Open FAILs: 0
