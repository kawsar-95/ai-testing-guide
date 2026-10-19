# Fact-check: How Spotify Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of S1 (the free part, up to "Write Workflow"). S1 is an interview design, and the lede says so. I fixed 2 claims that added detail that S1 does not give: the reason for the choice of blob storage, and "one by one" updates. The structure checks pass: 1 source, cited 38 times, cites in range, unique `##` headings, the `</Callout>` at column 0, no `{` or `<` in prose. `linux_overlap.py` exits 0 after the fixes.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | The article designs a Spotify-like service for an interview | 1 | PASS | "Let's figure out how to design it during a system design interview." |
| 2 | Lede | Not the exact Spotify system; second half paid | none | PASS | Statement about the source. S1 shows "Keep reading with a 7-day free trial" at "Write Workflow". |
| 3 | The problem in plain words | About 500,000 users and 30 million songs | 1 | PASS | "roughly 500k users listening to about 30 million songs" |
| 4 | The problem in plain words | Five requirements (upload, search and play, playlists, profiles, monitoring) | 1 | PASS | "Artists can upload their songs. Users can search and play songs. Users can create and manage playlists." |
| 5 | The problem in plain words | Goals: fast playback start, few rebuffers | 1 | PASS | "the main constraints are fast playback start times, minimal rebuffering" |
| 6 | The problem in plain words | About 3 MB per song, about 90 TB | 1 | PASS | "3MB × 30M songs ≈ 90TB of raw audio data." |
| 7 | The problem in plain words | Region copies and re-uploads give 2 to 3 times | 1 | PASS | "It also doesn't include versioning overhead when artists re-upload songs. That's why we're looking at 2-3x" |
| 8 | The problem in plain words | About 100 bytes per song, about 3 GB | 1 | PASS | "At roughly 100 bytes per song × 30M songs ≈ 3GB." |
| 9 | The problem in plain words | About 1 KB per user, about 0.5 GB | 1 | PASS | "~1KB × 500k users ≈ 0.5GB" |
| 10 | The problem in plain words | 3.5 min song, 3 to 4 MB; 10 to 15 plays a day | 1 | PASS | "roughly 3-4MB per stream. Let's assume each user streams 10-15 songs daily." |
| 11 | The problem in plain words | Audio is most of the storage and traffic | 1 | PASS | "audio dominates both storage costs and bandwidth" |
| 12 | The big picture | API servers check the user, read song details, return a signed URL | 1 | PASS | "They validate JWT tokens and query the database for song metadata. They generate signed URLs" |
| 13 | The big picture | App downloads audio from blob storage or CDN, not through the API | 1 | PASS | "Client streams audio directly from blob storage or CDN using signed URLs." |
| 14 | One song, several qualities | Ogg and AAC at several bitrates | 1 | PASS | "we use Ogg and AAC files with different bitrates for adaptive streaming" |
| 15 | One song, several qualities | 64, 128, 320 kbps and their uses | 1 | PASS | "64kbps for mobile data saving, 128kbps for standard quality, 320kbps for premium users." |
| 16 | One song, several qualities | Rebuffering handled by quality switch | 1 | PASS | "We handle rebuffering using adaptive quality switching." |
| 17 | Where the songs live | A service like AWS S3 for audio | 1 | PASS | "Object storage systems like AWS S3 could hold all the audio files." |
| 18 | Where the songs live | Folders by artist, album, song | 1 | PASS | "organized in a hierarchical structure like /artist/album/song.ogg" |
| 19 | Where the songs live | Scales, durable, cheap for large files | 1 | PASS | "virtually unlimited scalability. It also comes with built-in durability and cost-effectiveness for large files." |
| 20 | Where the songs live | Copies to several regions | 1 | PASS | "They replicate the storage across many regions for durability." |
| 21 | Where the songs live | Slower than local disk, egress can cost more | 1 | PASS | "higher latency than local storage and potentially higher egress costs" |
| 22 | Where the songs live | HDFS is an option; blob storage preferred and why | 1 | FAIL→fixed | Was "because a cloud company manages it". S1 does not say who manages it. Now "because it is a more managed service and is reliable for most cases". Quote: "blob storage is more managed and reliable for most use cases" |
| 23 | Signed URLs and the CDN | API servers create a signed URL | 1 | PASS | "API server creates a signed URL for blob storage access." |
| 24 | Signed URLs and the CDN | Link expires after a few hours | 1 | PASS | "accessed via signed URLs that expire after a few hours for security" |
| 25 | Signed URLs and the CDN | App gets audio from blob storage or CDN | 1 | PASS | "streams audio directly from blob storage or CDN using signed URLs" |
| 26 | Signed URLs and the CDN | App caches recently played songs | 1 | PASS | "cache recently played songs locally for faster playback on the same song replay" |
| 27 | Load balancer and API servers | Round-robin or least connections | 1 | PASS | "It could use round-robin or least-connections algorithms." |
| 28 | Load balancer and API servers | Health check every 30 s, removes failed servers | 1 | PASS | "performs health checks every 30 seconds and removes unhealthy instances from rotation" |
| 29 | Load balancer and API servers | Matters most at album releases | 1 | PASS | "essential for managing traffic spikes during album releases" |
| 30 | Load balancer and API servers | Updates without downtime | 1 | FAIL→fixed | Was "update servers one by one without downtime". S1 does not say "one by one". Now "deploy new code without downtime". Quote: "enables zero-downtime deployments" |
| 31 | Load balancer and API servers | API servers are stateless | 1 | PASS | "The application servers are stateless" |
| 32 | Load balancer and API servers | Check a JWT, read song details | 1 | PASS | "They validate JWT tokens and query the database for song metadata." |
| 33 | Load balancer and API servers | Circuit breaker stops calls to a failing service | 1 | PASS | "Circuit breakers stop requests to failing services, preventing cascading failures." |
| 34 | Load balancer and API servers | Connection pool reuses connections | 1 | PASS | "reusing database connections instead of creating new ones for each request" |
| 35 | Load balancer and API servers | Fallback for non-critical features | 1 | PASS | "fallback responses for non-critical features when dependencies are down" |
| 36 | What happens when you press play | Read path steps 1 to 6 (GET, JWT, SQL, signed URL, range requests, POST play) | 1 | PASS | "App fetches chunks of audio (range requests) directly from blob storage" / "periodically calls POST /songs/{id}/play" |
| 37 | What happens when you press play | HLS or DASH: smooth, auto bitrate, many devices | 1 | PASS | "smooth playback, automatic bitrate switching, and broad device compatibility" |
| 38 | What happens when you press play | Retries failed API calls | 1 | PASS | "it uses retry logic for API calls" |
| 39 | What happens when you press play | Pauses until the network comes back | 1 | PASS | "pausing playback until connectivity returns" |
| 40 | What a tester can learn | Tip says it is tutorial advice | none | PASS | "These test ideas are the tutorial's own advice." |

Open FAILs: 0
