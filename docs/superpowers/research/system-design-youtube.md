# How YouTube Works (System Design module) — research notes (2026-10-20)

Fetch note: the article was fetched as JSON from the Substack post API (`/api/v1/posts/youtube-system-design`) and converted to plain text in `<scratch dir>/sd-raw/youtube/article.txt`. The post is for paid subscribers (audience `only_paid`). The free part covers the scale, the questions to the interviewer, the requirements, and the API design (pre-signed upload, stream, watch progress, search). The deep sections (transcoding pipeline, storage, CDN details) and the footnote texts are behind the paywall. The page explains those ideas only at the level of the free part, plus official documents: Amazon S3 (S2, S3), the HLS standard (S4), and YouTube Help (S5). The extra pages were fetched with `curl` and converted to text in the same folder. No fetched text is committed.

The article is an interview-style design. The page says that it is not the exact system that YouTube runs. The page does not claim that YouTube uses HLS. It presents HLS as one public standard for adaptive streaming.

Copy check: `python3 scripts/linux_overlap.py content/system-design/youtube.mdx <scratch dir>/sd-raw/youtube` found no runs (exit 0) after one fix. The first run flagged the full S3 title, "Uploading and copying objects using multipart upload in Amazon S3", in `page.sources`. The title in `page.sources` is shortened to "Uploading and copying objects using multipart upload". The folder also holds the Amazon S3 page "Download and upload objects with presigned URLs" (`aws-s3-presigned-url.txt`); the page does not cite it.

## Sources

S1. System Design Interview: Design YouTube — The System Design Newsletter (Neo Kim) — https://newsletter.systemdesign.one/p/youtube-system-design — accessed 2026-10-20 (`article.txt`, free part only)
S2. Uploading objects with presigned URLs — Amazon Web Services (Amazon S3 User Guide) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html — accessed 2026-10-20 (`aws-s3-presigned-upload.txt`)
S3. Uploading and copying objects using multipart upload in Amazon S3 — Amazon Web Services (Amazon S3 User Guide) — https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html — accessed 2026-10-20 (`aws-s3-multipart.txt`; title shortened in `page.sources`, see above)
S4. RFC 8216: HTTP Live Streaming — RFC Editor (IETF), R. Pantos and W. May, August 2017 — https://www.rfc-editor.org/rfc/rfc8216 — accessed 2026-10-20 (`rfc8216-hls.txt`)
S5. YouTube recommended upload encoding settings — YouTube Help (Google) — https://support.google.com/youtube/answer/1722171 — accessed 2026-10-20 (`youtube-encoding-settings.txt`)

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Playback on many devices, also on slow networks (lede) | S1 | "enabling smooth playback across devices from smartphones to 4K TVs, even on slow networks." |
| 2 | More than 500 hours uploaded each minute; billions of streams daily | S1 | "YouTube processes over 500 hours of content that is uploaded every minute and serves billions of video streams daily." |
| 3 | Each upload becomes many optimized formats | S1 | "YouTube transforms every upload into dozens of optimized formats" |
| 4 | 1 million uploads per day; 100 million DAU | S1 | "Interviewer: 1 million uploads per day, 100 million DAU2" |
| 5 | About 100 views per upload | S1 | "Interviewer: About 100 views for every 1 upload" |
| 6 | Largest upload 256 GB | S1 | "Interviewer: 256 GB" / "System accepts files up to 256 GB" |
| 7 | MP4, AVI, MOV; 240p to 4K | S1 | "Interviewer: MP4, AVI, MOV, and from 240p to 4K5" |
| 8 | First frame under 500 ms | S1 | "Interviewer: First frame in under 500ms" |
| 9 | Processing 10 to 30 minutes | S1 | "Interviewer: Around 10 to 30 minutes" |
| 10 | Uptime 99.9 % | S1 | "Interviewer: 99.9%" |
| 11 | Three jobs: upload, stream, search | S1 | "Upload Videos" / "Stream Videos" / "Search Videos" (functional requirements headings) |
| 12 | Live streams out of scope | S1 | "Interviewer: For this interview, focus on uploads" |
| 13 | Server reserves an ID and returns a pre-signed URL | S1 | "The server reserves a video ID and returns a pre-signed URL" |
| 14 | Pre-signed URL: temporary link, direct upload to S3, no app server | S1 | "a temporary link that allows the client to upload directly to S3 without touching the app server." |
| 15 | App servers handle metadata; video goes to storage and CDN | S1 | "application servers handle lightweight metadata, while heavy video data is offloaded directly to cloud storage and CDNs." |
| 16 | Upload without own AWS credentials | S2 | "Using a presigned URL will allow an upload without requiring another party to have AWS security credentials or permissions." |
| 17 | Multipart upload with chunk-level retries | S1 | "Multipart upload with chunk-level retries" |
| 18 | Resume without loss | S1 | "Resume interrupted uploads without data loss" |
| 19 | S3 parts in any order; retransmit a failed part | S3 | "You can upload these object parts independently, and in any order." / "you can retransmit that part without affecting other parts." |
| 20 | Multipart for 100 MB or more | S3 | "It's a best practice to use multipart upload for objects that are 100 MB or larger" |
| 21 | 6+ resolutions × hundreds of segments | S1 | "Processing complexity: Each upload becomes 6+ resolutions × hundreds of segments1" |
| 22 | 10 to 30 minutes; processing can be asynchronous | S1 | "Why this matters: Processing can be asynchronous" |
| 23 | Eventual consistency for new uploads | S1 | "New uploads don’t need instant visibility (eventual consistency is okay)" |
| 24 | YouTube recommends MP4 and H.264 for uploads | S5 | "Container: MP4" / "Video codec: H.264" |
| 25 | Bitrates: 8 Mbps for 1080p; 35 to 45 Mbps for 4K (standard frame rate) | S5 | Table "Recommended video bitrates for SDR uploads": "1080p" "8 Mbps"; "2160p (4K)" "35–45 Mbps" |
| 26 | 4K viewing needs VP9 | S5 | "To view new 4K uploads in 4K, use a browser or device that supports VP9." |
| 27 | Stream endpoint returns metadata and manifest URL; ABR from CDN | S1 | "this endpoint returns the video’s metadata and the manifest file URL16. The client uses this to begin adaptive bitrate streaming (ABR) from the CDN." |
| 28 | Manifest lists segments and resolutions | S1 | "Manifest file tells the client which video segments and resolutions are available." |
| 29 | Adaptive bitrate: quality follows network speed | S1 | "Quality adjusts automatically to network speed (adaptive bitrate)" |
| 30 | HLS playlists are text files of URIs; master playlist has variant streams | S4 | "Both are UTF-8 text files containing URIs and descriptive tags." / "A Master Playlist provides a set of Variant Streams" |
| 31 | Variant: bit rate, format, resolution; clients switch to adapt | S4 | "Clients should switch between different Variant Streams to adapt to network conditions." |
| 32 | Smaller segments for stable playback | S1 | "Smaller segment sizes for stable playback" |
| 33 | Read-heavy; aggressive caching | S1 | "Read-heavy traffic: This demands aggressive caching" |
| 34 | Under 500 ms needs CDN and adaptive streaming | S1 | "Why this matters: Requires CDN7 and adaptive streaming8" |
| 35 | CDN handles the streaming | S1 | "The CDN handles the actual streaming." |
| 36 | Progress endpoint: millions of writes per second | S1 | "This endpoint alone handles millions of writes/second." |
| 37 | Fire and forget; DynamoDB | S1 | "So fire the request; don’t wait for confirmation. Then store in a high-throughput database like DynamoDB17." |
| 38 | Search index; results in pages | S1 | "Queries the search index18 to find videos matching a user’s query." |
| 39 | Cursor pagination; next_cursor token | S1 | "Each page contains a next_cursor token, allowing the client to fetch the next batch without re-querying the entire dataset." |
| 40 | Cursor scales better than offset; "skip 10 million rows" | S1 | "Cursor-based pagination is more scalable than offset-based pagination." |

The analogies (furniture delivery, book publisher, automatic gearbox, local warehouses), the definitions of segment, resolution, codec, CDN, and cache, the key-word definitions, and the tester callout are the tutorial's own text and need no source.
