# Research notes: How Spotify Works

Page: `content/system-design/spotify.mdx`

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | System Design Interview Question: Design Spotify (Neo Kim and Hayk Simonyan, 2025-10-06) | The System Design Newsletter (Neo Kim) | https://newsletter.systemdesign.one/p/spotify-system-design | 2026-10-20 |

Page cite `n={1}` = S1.

## Gaps

- S1 is paywalled after the start of "Write Workflow". The page covers only the free part: requirements, capacity planning, the high-level architecture (client, load balancer, API layer, blob storage) and the read workflow. The upload path, search, playlists, and the rest of the article are not on the page.
- S1 is an interview-style design ("Let's figure out how to design it during a system design interview"). It does not describe Spotify's real system. The lede says so. The free part links no primary Spotify source, so the page has one source.
- The footnotes of S1 (1 to 16) are behind the paywall.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The article is an interview design of a Spotify-like service | S1 | "Let's figure out how to design it during a system design interview." |
| 2 | About 500k users and 30 million songs | S1 | "We're looking at roughly 500k users listening to about 30 million songs." |
| 3 | Requirements: artists upload | S1 | "Artists can upload their songs." |
| 4 | Requirements: search and play | S1 | "Users can search and play songs." |
| 5 | Requirements: playlists | S1 | "Users can create and manage playlists." |
| 6 | Requirements: profiles | S1 | "Users can maintain profiles." |
| 7 | Requirements: monitoring | S1 | "Basic monitoring and observability (health checks, error tracking, performance metrics)." |
| 8 | Goals: fast playback start, little rebuffering | S1 | "the main constraints are fast playback start times, minimal rebuffering, and straightforward operations" |
| 9 | About 3 MB per song at standard quality | S1 | "one song file at normal audio quality (standard bitrate) takes about 3MB of storage" |
| 10 | About 90 TB of audio | S1 | "3MB × 30M songs ≈ 90TB of raw audio data." |
| 11 | Replicas and re-uploads give 2 to 3 times | S1 | "That's why we're looking at 2-3x this amount." (after replicas and versioning overhead) |
| 12 | About 100 bytes per song, about 3 GB | S1 | "At roughly 100 bytes per song × 30M songs ≈ 3GB." |
| 13 | About 1 KB per user, about 0.5 GB | S1 | "User profiles, preferences, and playlist data are ~1KB × 500k users ≈ 0.5GB." |
| 14 | 3.5 min average, 3 to 4 MB per stream | S1 | "The average listen time is 3.5 minutes at 128-160kbps; that's roughly 3-4MB per stream." |
| 15 | 10 to 15 songs per user per day | S1 | "Let's assume each user streams 10-15 songs daily." |
| 16 | Audio is most of the storage and bandwidth | S1 | "The key insight is that audio dominates both storage costs and bandwidth." |
| 17 | API servers check the token, read the database, create a signed URL | S1 | "They validate JWT tokens12 and query the database for song metadata. They generate signed URLs for audio access" |
| 18 | App streams straight from blob storage or CDN | S1 | "Client streams audio directly from blob storage6 or CDN7 using signed URLs8." |
| 19 | Ogg and AAC at several bitrates | S1 | "For audio formats, we use Ogg and AAC files1 with different bitrates2 for adaptive streaming3." |
| 20 | 64 / 128 / 320 kbps and their use | S1 | "64kbps for mobile data saving, 128kbps for standard quality, 320kbps for premium users." |
| 21 | Rebuffering handled with quality switching | S1 | "We handle rebuffering using adaptive quality switching." |
| 22 | Object storage like AWS S3 for audio | S1 | "Object storage systems like AWS S313 could hold all the audio files." |
| 23 | Folders by artist, album, song | S1 | "Files are organized in a hierarchical structure like /artist/album/song.ogg" |
| 24 | Scalable, durable, cheap for large files | S1 | "Blob storage offers virtually unlimited scalability. It also comes with built-in durability and cost-effectiveness for large files." |
| 25 | Copies across regions | S1 | "They replicate the storage across many regions for durability." |
| 26 | Higher latency, possibly higher egress cost | S1 | "it has higher latency than local storage and potentially higher egress costs" |
| 27 | HDFS as an option; blob storage preferred | S1 | "We could instead use a distributed file system14 like Hadoop Distributed File System (HDFS). But blob storage is more managed and reliable" |
| 28 | Signed URLs expire after a few hours | S1 | "They're accessed via signed URLs that expire after a few hours for security." |
| 29 | App caches recently played songs | S1 | "cache recently played songs locally for faster playback on the same song replay" |
| 30 | Round-robin or least-connections | S1 | "It could use round-robin or least-connections algorithms." |
| 31 | Health checks every 30 s, unhealthy servers removed | S1 | "it performs health checks every 30 seconds and removes unhealthy instances from rotation" |
| 32 | Important for album releases | S1 | "This is essential for managing traffic spikes during album releases." |
| 33 | Zero-downtime deployments | S1 | "it provides high availability against server failures and enables zero-downtime deployments" |
| 34 | API servers are stateless | S1 | "The application servers are stateless; they handle business logic, authentication, and data access." |
| 35 | Circuit breakers | S1 | "Circuit breakers stop requests to failing services, preventing cascading failures." |
| 36 | Connection pooling | S1 | "This means reusing database connections instead of creating new ones for each request." |
| 37 | Fallback responses | S1 | "They also provide fallback responses for non-critical features when dependencies are down." |
| 38 | Read workflow steps (GET, JWT, SQL, signed URL, range requests, POST play) | S1 | "User hits play → App sends a GET request /songs/{id}" ... "App periodically calls POST /songs/{id}/play to track plays and listening time." |
| 39 | HLS or DASH: smooth playback, automatic bitrate switching, many devices | S1 | "HTTP-based adaptive streaming (HLS or DASH16), which allows smooth playback, automatic bitrate switching, and broad device compatibility" |
| 40 | Retry logic for API calls | S1 | "When things go wrong, it uses retry logic9 for API calls." |
| 41 | Pause on network loss until it returns | S1 | "The client handles network interruptions gracefully by pausing playback until connectivity returns." |

## Overlap check

`python3 scripts/linux_overlap.py content/system-design/spotify.mdx <SCRATCH>/sd-raw/spotify`: 0 runs, exit 0 (first run).
