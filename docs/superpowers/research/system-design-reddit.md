# Research notes: How Reddit Works

Page: `content/system-design/reddit.mdx`

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How Reddit Works (Neo Kim, 2025-07-03) | The System Design Newsletter (Neo Kim) | https://newsletter.systemdesign.one/p/reddit-architecture | 2026-10-20 |
| S2 | The Evolution of Reddit.com's Architecture (Neil Williams, QCon San Francisco 2017, published 2017-12-20, talk transcript) | InfoQ | https://www.infoq.com/presentations/reddit-architecture-evolution/ | 2026-10-20 |

Page cite `n={1}` = S1, `n={2}` = S2.

## Gaps

- S1 is paywalled from section "3. Comments" on. Its reference list is also behind the paywall. The free part links Cassandra, ZooKeeper, and a Cockroach Labs blog, but no Reddit source.
- S2 is a primary source: a Reddit infrastructure engineer describes the real system. The page uses it for the real system and for the comment trees, and says so in the lede and in the "Comment trees" section.
- S1 says "This post is based on my research and may differ from real-world implementation." The lede says so.
- The ZooKeeper-for-locks claim (row 26) has only S1. S2 names ZooKeeper only for the auto scaler. The page says "The article says" for it.
- "100M Daily Users" is only in the subtitle of S1. The page says "The title of the article speaks of".

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article is based on research and may differ from the real system | S1 | "Note: This post is based on my research and may differ from real-world implementation." |
| 2 | June 2005, two students, food ordering idea rejected, pivoted | S1 | "June 2005. Two university students decide to build a mobile based food ordering service." / "So they pivoted to create a social network and called it Reddit." |
| 3 | One machine, Postgres | S1 | "They ran the entire site on a single machine." / "stored accounts, posts, subreddits, and comments information in Postgres" |
| 4 | Separate machines for app and database | S1 | "they installed separate machines for app server and database" |
| 5 | One database and monolith became a bottleneck | S1 | "a single database and monolithic codebase became a bottleneck" |
| 6 | Delay in showing latest data on popular posts | S1 | "Popular posts received many votes and comments. But there was a massive delay in showing the latest data." |
| 7 | 320 million users a month, a million posts a day, 75 million votes | S2 | "serve 320 million users every month, doing all sorts of stuff, like posting a million times a day, and casting 75 million votes" |
| 8 | Article title: 100M daily users | S1 | "#76: Break Into Reddit Architecture for 100M Daily Users (5 Minutes)" |
| 9 | CDN in front; load balancer in front of app servers | S2 | "we have the CDN in front, that's Fastly" / "The load balancer is in the front" |
| 10 | Ranked lists stored as post IDs in the cache | S1 | "they store the list of post IDs along with their rank on the cache server" |
| 11 | Post read from cache first, database on a miss | S2 | "r2 reads it first and hits it on a miss" |
| 12 | New posts and votes go to a job queue; processors update DB and cache | S1 | "The processor then pulls the job from the queue asynchronously" / "It then invalidates the cache and updates the databases" |
| 13 | More app servers and a load balancer | S1 | "They added more app servers and set up a load balancer in front for scalability." |
| 14 | Vertical scaling, hardware limit, partitioned to scale writes | S1 | "they scaled the database vertically to handle extra I/O operations. Yet there's a hardware limit with vertical scaling. So they partitioned the database to scale writes." |
| 15 | Replica databases for reads | S1 | "Also they installed replica databases for read scalability." |
| 16 | Thing model: accounts, links, subreddits, comments in Postgres with memcache | S2 | "accounts, links, sub-Reddits, comments, all of that is stored in this data model, called Thing, which is based in Postgress with memcache in front of it" |
| 17 | One primary for writes, async read-only replicas | S2 | "each primary in the database cluster handles writes, and then we have a number of read-only replicas which we replicate to asynchronously" |
| 18 | New post updates several tables; rate limits and spam filters | S1 | "it must update different tables, such as posts, subreddits, and accounts. Besides each submission goes through rate limit checks and spam filters" |
| 19 | Message in job queue, processor handles later | S1 | "They add a message to the job queue for each new post" / "It handles the post and updates the databases" |
| 20 | Queue is RabbitMQ | S2 | "we defer that to an asynchronous job queue via Rabbit MQ" |
| 21 | Board and front page are ordered lists | S1 | "They show each subreddit and front page as an ordered list of posts." |
| 22 | "hot" function of up and down votes | S1 | "It then orders the posts by a custom function named 'hot', which takes upvotes and downvotes as inputs" |
| 23 | Querying the database for the list is expensive | S1 | "querying the database often for an ordered list is expensive and adds extra latency" |
| 24 | Lookup by ID is easy | S1 | "This makes it easy to look up the posts by primary key." |
| 25 | One post in many lists; precomputed by jobs into the cache | S1 | "A single Reddit post is part of many lists. So they pre-compute each list using a job queue and store the results on the cache server" |
| 26 | Popular lists in Cassandra for durability | S1 | "they store the popular lists in Cassandra for durability" |
| 27 | Mutate in place: fetch list, modify, write back | S2 | "we fetch down the current cached listing, we modify it" / "And then we will write it back." |
| 28 | Not really a cache; a denormalized index; now in Cassandra | S2 | "It is not really a cache anymore" / "it is a persisted index, really, a de-normalized index" / "nowadays in Cassandra" |
| 29 | Votes go through the job queue | S1 | "voting is an expensive operation" / "So they use a job queue." |
| 30 | Read-mutate-write; race condition risk | S1 | "They update the cache through an atomic 'read-mutate-write' operation. Yet there's a risk of a race condition" |
| 31 | Locks; ZooKeeper | S1 | "So they use locks." / "They use Zookeeper for locking as it offers high availability." |
| 32 | Mid-2012: queues backed up at peak; scores caught up hours later | S2 | "Back in the middle of 2012, we started seeing that the vote queues would start getting really backed up in the middle of the day" / "we will get it many hours later" |
| 33 | More processors made it worse | S2 | "So, why not add more scale, more processors? That made it worse." |
| 34 | Timers showed lock contention on popular boards | S2 | "So we started adding a bunch of timers" / "they are all just waiting on the lock" |
| 35 | Modulo 10 of board ID into 10 queues | S2 | "We took the sub-Reddit ID of the link being voted on and used that and just did, like, modular 10 and put it into one of 10 different queues." |
| 36 | Same number of processors, fewer per lock | S2 | "we had the same total number of processors in the end, they are divided into different partitions and there are fewer vying for any single look" |
| 37 | Late 2012: slow again, found in p99 | S2 | "late-2012, just a few months of respite, we saw the vote queues slowing down" / "we looked at the P99s, the 99th percentile of the timers" |
| 38 | Domain listing was the new hot spot | S2 | "And the domain listing was the point of contention now." |
| 39 | Fix: split each vote job into smaller messages on their own partitions | S2 | "we make a bunch of messages that deal with different parts of the job. And those all work on the right partitions for themselves" |
| 40 | Comments are threaded | S2 | "comments on Reddit is that they are threaded. This means that you nest replies so you can see the structure of a conversation" |
| 41 | 10,000 comments are expensive to look up | S2 | "It is pretty expensive to go and say, okay, there's 10,000 comments on this thread, I need to look up all 10,000 comments" |
| 42 | Parent links stored in one place; only the shown comments loaded | S2 | "we store, hey, another denormalized listing, the parent relationships of that whole tree in one place" / "only look at those comments" |
| 43 | Tree updates are offline jobs in batches | S2 | "we defer it to offline job processing" / "we can batch up messages and mutate the trees in one big batch" |
| 44 | Tree is order-sensitive; missing parent | S2 | "the tree structure is sensitive to ordering. If I insert a comment and its parent doesn't exist, that is weird" |
| 45 | 2016 fast lane incident filled broker memory | S2 | "Early-2016, there was a major news event" / "rapidly filled up all of the memory on the message broker" |
| 46 | Cause: older comments in the other queue; site asked for recompute | S2 | "the earlier comments in the thread that had happened before the fast-laneing were in the other queue and not yet processed" / "please recompute me" |
| 47 | Restart of broker lost messages; queue quotas now | S2 | "re-start the message broker, and lose all those messages" / "now we use queue quotas" |

## Overlap check

`python3 scripts/linux_overlap.py content/system-design/reddit.mdx <SCRATCH>/sd-raw/reddit`: 0 runs, exit 0 (first run).
