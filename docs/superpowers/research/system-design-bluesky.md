# Research notes: How Bluesky Works

Page: `content/system-design/bluesky.mdx`

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How Bluesky Works | The System Design Newsletter (Neo Kim) | https://newsletter.systemdesign.one/p/how-does-bluesky-work | 2026-10-20 |
| S2 | Glossary of terms | AT Protocol (atproto.com) | https://atproto.com/guides/glossary | 2026-10-20 |

S1 is page cite 1. S2 is page cite 2.

Notes on S1:

- The title on the web page ends with a butterfly emoji ("How Bluesky Works" plus the emoji). The page source list leaves the emoji out.
- The last section of S1 ("Bluesky Quality Attributes") is for paid subscribers. The page uses only the free part.
- S1 uses its own plain names: "data server", "crawler", "index server". S1 links each name to the AT Protocol glossary entry (PDS, Relay, AppView). The page gives both names and cites S2 for the protocol names.
- S1 says that Bluesky gives the user "a unique text value ... public key" for the DNS TXT record. The page says only "a unique text value", because the "public key" part is not clear and is not needed.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | One authority can make errors, be biased, and become a moderation bottleneck. | S1 | "The risk of error increases if a single authority decides the moderation policies." / "Managing moderation at scale needs a lot of effort; it becomes a bottleneck." |
| 2 | Bluesky started as a research project for a decentralized social network. | S1 | "Bluesky: a research initiative to build a decentralized social network." |
| 3 | Bluesky uses a federated model; different people run servers that talk over HTTP. | S1 | "So each server could be run by different people and servers communicate with each other over HTTP." |
| 4 | Bluesky is built on the open protocol ATProto. | S1 | "called Authenticated Transfer Protocol (ATProto), and built Bluesky on top of it." |
| 5 | Data is shared across ATProto apps; a user keeps followers when switching apps. | S1 | "A user’s data is shared across apps built on ATProto; Bluesky is one of the apps." / "they don’t lose their followers" |
| 6 | One data server runs 6 million repositories for 150 USD a month. | S1 | "They run 6 million user repositories on a single data server at 150 USD per month." |
| 7 | There are more than 50,000 custom feeds. | S1 | "there are 50K+ custom feeds available." |
| 8 | Protocol names: PDS, Relay, AppView. | S2 | "A PDS, or Personal Data Server, is a server that hosts a user." / "A Relay is an aggregator of data repos from across the Atmosphere." |
| 9 | The text and timestamp of a post go in the user repository, the data that one user publishes. | S1 | "The text content and timestamp of the post are stored in a repository." / "a collection of data published by a single user." |
| 10 | Each repository is a separate SQLite database. | S1 | "SQLite is used as its data layer for simplicity; each repository gets a separate SQLite database." |
| 11 | Records are encoded in CBOR, a compact binary format, for low cost. | S1 | "The data records are encoded in CBOR, a compact binary format, before storing it in SQLite for low costs." |
| 12 | The PDS stores user data repos and hosts many users. | S2 | "A PDS will always store the user's data repo and signing keys." / "Many PDSes will host multiple users." |
| 13 | The data server handles client requests, authentication, and authorization. | S1 | "the data server acts as a proxy for all client interactions. Also it manages user authentication and authorization." |
| 14 | A repository can move between data servers, like a Git repo between GitHub and GitLab. | S1 | "It’s easy to move a Git repo from GitHub to GitLab. Similarly, a user repository is movable from one data server to another." |
| 15 | A like is stored only in the repository of the user who liked. | S1 | "Instead, it’s stored only in the repository of the follower who took the action." |
| 16 | Pushing updates to each follower repository is too expensive; a crawler collects from all data servers. | S1 | "Yet it’s expensive to push updates to each follower’s repository. So information is collected from every data server using the crawler." |
| 17 | The data server notifies the crawler in real time over websockets. | S1 | "The data server notifies the crawler about updates in real time over websockets." |
| 18 | The crawler does not index data; it forwards it as a stream. | S1 | "The crawler doesn’t index data but forwards it." / "The crawler collects information from data servers and generates a stream." |
| 19 | The Relay syncs repos from PDSes and produces a firehose; the AppView is an application view. | S2 | "They sync the repos from PDSes and produce a firehose of change events. AppViews use a Relay to fetch user data." |
| 20 | The stream has no like counts; the index server transforms raw data into a consumable form. | S1 | "Yet the stream doesn’t contain this information. So the stream’s data is aggregated using the index server" |
| 21 | The index server is written in Go and uses ScyllaDB for horizontal scale. | S1 | "The index server is built using the Go language for concurrency. A NoSQL database, ScyllaDB, is used as its data layer for horizontal scalability." |
| 22 | Home feed steps. | S1 | "The data server finds the people a user follows by looking at their repository." / "The index server creates a list of post IDs in reverse chronological order." |
| 23 | Repository holds primary data; index server holds derived data. | S1 | "In short, a user repository stores primary data, while the index server stores derived data from repositories." |
| 24 | The index server is the most read-heavy service; Redis caches its results. | S1 | "The index server is the most read-heavy service; so, its results are cached using Redis, an in-memory storage, for performance." |
| 25 | Media is on the data server disk; the index server fetches it and caches it on a CDN. | S1 | "Media files, such as images and videos, are stored on the data server’s disk for simplicity." / "caches them on the content delivery network (CDN)" |
| 26 | Each user has a DID that never changes. | S1 | "A user’s DID is immutable, but the handle is mutable" |
| 27 | A handle is based on a domain name; new accounts get one under bsky.social. | S1 | "A user account includes a handle based on the domain name (DNS)" / "each user automatically gets a handle from the ‘bsky.social’ subdomain upon account creation." |
| 28 | Posts are stored by DID, so a new handle does not affect old posts. | S1 | "Yet posts are stored using DID" / "So changes to a user's handle don’t affect their previous posts." |
| 29 | Custom domain handle: a text value goes in a DNS TXT record; the index server checks it periodically. | S1 | "The user stores this value in the DNS TXT record of the custom domain name." / "The index server then periodically checks the DNS TXT record and validates the user handle." |
| 30 | A follow adds the DID to the follower's own repository only. | S1 | "A user updates only their repository when they follow someone." |
| 31 | Follower counts need indexing every repository, like a web crawler finding inbound links. | S1 | "The number of followers for a user is found by indexing every repository." / "similar to how Google finds inbound links to a web page" |
| 32 | A custom feed is a filter for keywords or users. | S1 | "Consider the custom feed as a filter for a specific list of keywords or users." |
| 33 | A feed generator is a separate service that reads the stream, ranks posts, and returns post IDs; the index server fills in content. | S1 | "The feed generator filters, sorts, and ranks the content based on custom logic." / "The index server then populates the feed’s content on a user request." |
| 34 | Feeds use cursor-based pagination; the cursor can be a post timestamp. | S1 | "Cursor-based pagination is used to fetch the feed" / "for example, the post’s timestamp to fetch feed until a specific post." |
| 35 | Cursor pagination avoids a full table scan. | S1 | "The cursor-based pagination scales well as it prevents a full table scan in the index server." |
| 36 | A moderation service reads the stream and assigns labels; a label categorizes content. | S1 | "The moderation service analyzes the content and assigns a label to it." / "Imagine a label as metadata to categorize content." |
| 37 | Users choose hide or warn per label; the data server stores the choice. | S1 | "A user chooses to hide or show a warning for posts with a specific label." / "This preference is stored on their data server." |
| 38 | The data server sends label IDs in HTTP headers; the index server applies them. | S1 | "The data server includes label IDs in HTTP request headers before forwarding them." / "The index server applies the label setting in the response." |
| 39 | Bluesky shows how many people you follow also follow a user (social proof). | S1 | "Bluesky allows a user to see how many people they follow also follow a specific user: social proof." |
| 40 | Per-user queries do not scale. | S1 | "But this approach won’t scale as the number of parallel queries increases with the number of people a user follows." |
| 41 | Social proof is a set intersection. | S1 | "Set 1 tracks the people I follow." / "Set 2 tracks the people who follow Jay." / "The intersection of these sets gives the expected result." |
| 42 | Redis Sets do not use many CPU cores at once. | S1 | "Yet Redis Sets don’t use different CPU cores at once." |
| 43 | 32-character DIDs became uint64; it still used much memory and started slowly. | S1 | "Each user has a 32-character DID." / "converted into uint64 to reduce memory usage." / "But it still consumes a lot of memory and takes extra time to start." |
| 44 | They moved to Roaring Bitmaps. | S1 | "So they optimized the graph service by implementing it using Roaring Bitmaps." |
| 45 | Bitmap: wasteful for sparse data. RLE: "90 0s and 10 1s"; poor for random data, lookup walks all. | S1 | "it’s inefficient for sparse data." / "it’s stored as 90 0s and 10 1s" / "this approach won’t scale for randomly populated data, and a lookup walks the entire Bitset" |
| 46 | Roaring containers: bitmap for dense, run-length for ranges, sorted array for sparse. | S1 | "Put simply, Roaring Bitmaps use different containers based on data sparsity." |
| 47 | The intersection is parallel; many instances run for high availability. | S1 | "The set intersection is done in parallel" / "Many instances of the graph service are run for high availability and rolling updates." |
| 48 | Videos are up to 90 seconds and use HLS, a standard for adaptive bitrate streaming. | S1 | "Bluesky supports short videos up to 90 seconds long." / "it’s a standard for adaptive bitrate video streaming." |
| 49 | Master playlist lists quality levels; media playlist lists segments of one quality. | S1 | "Master playlist: list of all video quality levels available." / "Media playlist: list of all video segments for a specific video quality." |
| 50 | Encoded at 480p, 720p, 1080p; 5-second segments. | S1 | "A video is encoded into different quality levels: 480p, 720p, 1080p, and so on." / "Each encoded video is split into small segments of 5 seconds long." |
| 51 | The client picks a media playlist by network and downloads segments in order. | S1 | "Second, it selects a Media playlist based on network conditions. Third, it downloads the video segments in the sequence defined on the Media playlist." |
| 52 | A CDN caches videos and playlists. | S1 | "The videos and playlists are cached in CDN to reduce costs and handle bandwidth needs." |
| 53 | Views are counted by Master playlist requests; seconds watched come from the last segment. | S1 | "The video views are tracked by counting requests to its Master playlist file." / "the video seconds watched by a user are found by checking the last fetched video segment." |

## Copy check

`python3 scripts/linux_overlap.py content/system-design/bluesky.mdx <SCRATCH>/sd-raw/bluesky` read 2 files (`article.txt`, `atproto-glossary.txt`) and found 0 runs (exit 0).
