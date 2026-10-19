# Fact-check: How Bluesky Works (round 1, 2026-10-20)

I read the free part of S1 (the newsletter article, `sd-raw/bluesky/article.txt`) and S2 (the AT Protocol glossary, `sd-raw/bluesky/atproto-glossary.txt`). I checked each cited sentence and each uncited factual sentence. One table cell had no support: the "Weak point" of Roaring Bitmaps ("More complex code"). I replaced it with "The article names none". The page did not get longer. The analogies, the general explanations (websocket, TXT record, adaptive), and the "Tutorial advice" callout need no source. The copy check (`linux_overlap.py`) read 2 files and found 0 runs (exit 0).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | The problem in plain words | One authority can err, be biased, and become a moderation bottleneck | 1 | PASS | "There's a risk of bias when a single authority makes moderation decisions." / "it becomes a bottleneck." |
| 2 | The problem in plain words | Bluesky started as a research project for a decentralized network | 1 | PASS | "Bluesky: a research initiative to build a decentralized social network." |
| 3 | The problem in plain words | Federated model; different people run servers; servers talk over HTTP | 1 | PASS | "each server could be run by different people and servers communicate with each other over HTTP." |
| 4 | The problem in plain words | Email analogy (Gmail to Proton Mail) | none | PASS | Analogy. S1: "a person with Gmail can communicate with someone using Protonmail." |
| 5 | The problem in plain words | ATProto is the protocol; Bluesky is one app built on it | 1 | PASS | "called Authenticated Transfer Protocol (ATProto), and built Bluesky on top of it." |
| 6 | The problem in plain words | Data is shared by ATProto apps; you keep followers when you switch | 1 | PASS | "A user's data is shared across apps built on ATProto" / "they don't lose their followers" |
| 7 | The problem in plain words | One data server: 6 million repositories, about 150 USD a month | 1 | PASS | "They run 6 million user repositories on a single data server at 150 USD per month." |
| 8 | The problem in plain words | More than 50,000 custom feeds | 1 | PASS | "there are 50K+ custom feeds available." |
| 9 | The big picture | Protocol names: PDS, Relay, AppView | 2 | PASS | "PDS (Personal Data Server)" / "A Relay is an aggregator of data repos" / "An AppView is an application in the Atmosphere." |
| 10 | The big picture | Diagram labels (SQLite, websockets, ScyllaDB, Redis, CDN, labels) | 1 | PASS | Each label repeats a cited claim below (rows 12, 18, 21, 26, 27, 36). |
| 11 | Your posts live in your own repository | Text and time of a post are in the repository; repository is the data of one user | 1 | PASS | "The text content and timestamp of the post are stored in a repository." |
| 12 | Your posts live in your own repository | Each repository is a separate SQLite database | 1 | PASS | "each repository gets a separate SQLite database." |
| 13 | Your posts live in your own repository | Records are encoded in CBOR for low storage cost | 1 | PASS | "The data records are encoded in CBOR, a compact binary format, before storing it in SQLite for low costs." |
| 14 | Your posts live in your own repository | Many repositories on one data server (PDS) | 2 | PASS | "A PDS, or Personal Data Server, is a server that hosts a user." / "Many PDSes will host multiple users." |
| 15 | Your posts live in your own repository | Data server handles all app requests, authentication, authorization | 1 | PASS | "the data server acts as a proxy for all client interactions. Also it manages user authentication and authorization." |
| 16 | Your posts live in your own repository | Git analogy: a repository moves to another data server | 1 | PASS | "a user repository is movable from one data server to another." |
| 17 | Your posts live in your own repository | A like is saved only in the repository of the person who liked | 1 | PASS | "it's stored only in the repository of the follower who took the action." |
| 18 | From one stream to your screen | Copying posts to each follower costs too much | 1 | PASS | "it's expensive to push updates to each follower's repository." |
| 19 | From one stream to your screen | A crawler (Relay) collects changes from all data servers | 1, 2 | PASS | S1: "information is collected from every data server using the crawler." S2: "They sync the repos from PDSes and produce a firehose of change events." |
| 20 | From one stream to your screen | Data servers push posts, likes, comments in real time over websockets | 1 | PASS | "The data server notifies the crawler about updates in real time over websockets." |
| 21 | From one stream to your screen | The crawler does not index; it forwards one stream | 1 | PASS | "The crawler doesn't index data but forwards it." |
| 22 | From one stream to your screen | The stream has no like counts; the index server (AppView) makes it consumable | 1, 2 | PASS | S1: "the stream doesn't contain this information" / "it transforms raw data into a consumable form". S2: "AppViews ... aggregate data from across the Atmosphere" |
| 23 | From one stream to your screen | Index server in Go, data in ScyllaDB (NoSQL, horizontal scale) | 1 | PASS | "built using the Go language" / "ScyllaDB, is used as its data layer for horizontal scalability." |
| 24 | From one stream to your screen | Feed steps: via data server; follows from repository; post IDs newest first, then full posts | 1 | PASS | "The index server creates a list of post IDs in reverse chronological order." / "expands the list of post IDs to full posts" |
| 25 | From one stream to your screen (callout) | Repository = primary data; index server = derived data | 1 | PASS | "a user repository stores primary data, while the index server stores derived data from repositories." |
| 26 | From one stream to your screen | Index server is most read-heavy; Redis caches it | 1 | PASS | "The index server is the most read-heavy service; so, its results are cached using Redis" |
| 27 | From one stream to your screen | Media on the data server disk; index server fetches and caches on a CDN | 1 | PASS | "stored on the data server's disk" / "fetches the media files from the data server on user request and caches them on the content delivery network" |
| 28 | Names that change and IDs that do not | Each user has a DID that never changes | 1 | PASS | "A user's DID is immutable, but the handle is mutable" |
| 29 | Names that change and IDs that do not | New account gets a handle under bsky.social | 1 | PASS | "each user automatically gets a handle from the 'bsky.social' subdomain upon account creation." |
| 30 | Names that change and IDs that do not | Posts stored under the DID; a new handle does not break old posts | 1 | PASS | "posts are stored using DID ... So changes to a user's handle don't affect their previous posts." |
| 31 | Names that change and IDs that do not | Custom domain: unique value in a DNS TXT record; index server checks it periodically | 1 | PASS | "The user stores this value in the DNS TXT record" / "The index server then periodically checks the DNS TXT record and validates the user handle." |
| 32 | Names that change and IDs that do not | A follow adds the DID to your own repository only | 1 | PASS | "A user updates only their repository when they follow someone." |
| 33 | Names that change and IDs that do not | Follower count needs every repository; like a search engine crawl | 1 | PASS | "The number of followers for a user is found by indexing every repository. This is similar to how Google finds inbound links" |
| 34 | Custom feeds and moderation | Custom feed is a filter for keywords or users | 1 | PASS | "Consider the custom feed as a filter for a specific list of keywords or users." |
| 35 | Custom feeds and moderation | Feed generator reads the stream, ranks, returns post IDs; index server fills content | 1 | PASS | "The feed generator filters, sorts, and ranks the content based on custom logic." / "The index server then populates the feed's content" |
| 36 | Custom feeds and moderation | Cursor paging; cursor such as a timestamp; sent back for next page | 1 | PASS | "The index server responds with the cursor parameter for future requests." / "for example, the post's timestamp" |
| 37 | Custom feeds and moderation | Cursor avoids a full table scan | 1 | PASS | "it prevents a full table scan in the index server." |
| 38 | Custom feeds and moderation | Moderation service reads the stream and assigns a label (category) | 1 | PASS | "The moderation service consumes the stream from the crawler." / "Imagine a label as metadata to categorize content." |
| 39 | Custom feeds and moderation | User chooses hide or warn; data server stores the choice | 1 | PASS | "A user chooses to hide or show a warning for posts with a specific label. This preference is stored on their data server." |
| 40 | Custom feeds and moderation | Data server puts labels in HTTP headers; index server applies them | 1 | PASS | "The data server includes label IDs in HTTP request headers" / "The index server applies the label setting in the response." |
| 41 | Social proof with Roaring Bitmaps | Profile shows how many people you follow also follow that user | 1 | PASS | "Bluesky allows a user to see how many people they follow also follow a specific user" |
| 42 | Social proof with Roaring Bitmaps | One query per followed person does not scale | 1 | PASS | "this approach won't scale as the number of parallel queries increases with the number of people a user follows." |
| 43 | Social proof with Roaring Bitmaps | Set intersection of the two sets | 1 | PASS | "The intersection of these sets gives the expected result." |
| 44 | Social proof with Roaring Bitmaps | Redis Sets do not use many CPU cores at once | 1 | PASS | "Redis Sets don't use different CPU cores at once." |
| 45 | Social proof with Roaring Bitmaps | First version: 32-character DID to 64-bit number; high memory, slow start | 1 | PASS | "The DID values are converted into uint64 to reduce memory usage." / "it still consumes a lot of memory and takes extra time to start." |
| 46 | Social proof with Roaring Bitmaps (table) | Bitmap: one bit per user; long even for one follow | 1 | PASS | "A 100-bit long Bitmap is needed even if I follow only a single user" |
| 47 | Social proof with Roaring Bitmaps (table) | Run-length: "90 zeros, then 10 ones"; poor for random data, lookup walks the list | 1 | PASS | "it's stored as 90 0s and 10 1s" / "won't scale for randomly populated data, and a lookup walks the entire Bitset" |
| 48 | Social proof with Roaring Bitmaps (table) | Roaring: bitmap dense, run-length runs, sorted array sparse | 1 | PASS | "The sparse data is stored in a container as integers in a sorted array" |
| 49 | Social proof with Roaring Bitmaps (table) | Roaring weak point: "More complex code" | 1 | FAIL→fixed | Was "More complex code" (S1 names no weak point). Now "The article names none". |
| 50 | Social proof with Roaring Bitmaps | Intersection in parallel; many instances for high availability | 1 | PASS | "The set intersection is done in parallel" / "Many instances of the graph service are run for high availability" |
| 51 | Short videos with HLS | Videos up to 90 s; HLS is a standard for adaptive bitrate streaming | 1 | PASS | "Bluesky supports short videos up to 90 seconds long." / "it's a standard for adaptive bitrate video streaming." |
| 52 | Short videos with HLS | Master playlist lists levels; media playlist lists segments | 1 | PASS | "Master playlist: list of all video quality levels available. Media playlist: list of all video segments for a specific video quality." |
| 53 | Short videos with HLS | 480p, 720p, 1080p; 5-second segments | 1 | PASS | "A video is encoded into different quality levels: 480p, 720p, 1080p" / "split into small segments of 5 seconds long." |
| 54 | Short videos with HLS | App picks a media playlist and downloads segments in order | 1 | PASS | "it selects a Media playlist based on network conditions. Third, it downloads the video segments in the sequence" |
| 55 | Short videos with HLS | CDN caches videos and playlists | 1 | PASS | "The videos and playlists are cached in CDN" |
| 56 | Short videos with HLS | A view = a master playlist request; last segment = seconds watched | 1 | PASS | "The video views are tracked by counting requests to its Master playlist file." / "checking the last fetched video segment." |
| 57 | What a tester can learn | Tip bullets | none | PASS | The callout says "These ideas are the tutorial's own advice." |

Structure checks: 2 sources, both cited (cite 1: 49 times, cite 2: 4 times). All cite numbers are 1 or 2. The `##` headings are unique. The closing `</Callout>` of the tip is at column 0. No `{` or `<` in prose outside code.

Open FAILs: 0
