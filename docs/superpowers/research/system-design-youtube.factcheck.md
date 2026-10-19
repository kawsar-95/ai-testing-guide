# Fact-check: How YouTube Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of the 5 cited sources: the interview article "System Design Interview: Design YouTube" (S1, free part only), the Amazon S3 guides on pre-signed upload (S2) and multipart upload (S3), RFC 8216 HLS (S4), and YouTube Help encoding settings (S5). I checked that the page never says YouTube uses HLS. It did not, but the free article text names no streaming format, so I added one sentence that says so. I fixed 5 FAILs: the lede said viewers watch "a moment later" (the design accepts 10 to 30 min) and named "fast fiber" (not in S1); the bitrates did not say they are for SDR uploads; one claim had no cite; and the Key words row said a pre-signed URL allows "one" upload. All 5 sources are cited, `##` headings are unique, the tip closing tag is at column 0, and prose has no `{` or `<`. `linux_overlap.py` exits 0 after the fixes (no runs).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | Watch "a moment later"; huge files each minute; "fast fiber and weak mobile networks" | 1 | FAIL→fixed | Was "watch it a moment later" and "viewers use fast fiber and weak mobile networks". Now "watch it", "People upload hundreds of hours of video every minute, and viewers use fast and slow networks." Quote: "over 500 hours of content that is uploaded every minute"; "Automatic quality adjustment for varying network conditions" |
| 2 | The problem in plain words | Over 500 hours per minute; billions of streams a day | 1 | PASS | "YouTube processes over 500 hours of content that is uploaded every minute and serves billions of video streams daily." |
| 3 | The problem in plain words | Each upload becomes many versions for phones, 4K TVs, slow networks | 1 | PASS | "transforms every upload into dozens of optimized formats, enabling smooth playback across devices from smartphones to 4K TVs" |
| 4 | The problem in plain words (table) | 1 million uploads a day; 100 million DAU | 1 | PASS | "Interviewer: 1 million uploads per day, 100 million DAU" |
| 5 | The problem in plain words (table) | About 100 views per upload | 1 | PASS | "About 100 views for every 1 upload" |
| 6 | The problem in plain words (table) | Largest upload 256 GB | 1 | PASS | "System accepts files up to 256 GB" |
| 7 | The problem in plain words (table) | MP4, AVI, MOV; 240p to 4K | 1 | PASS | "MP4, AVI, MOV, and from 240p to 4K" |
| 8 | The problem in plain words (table) | First frame under 500 ms | 1 | PASS | "First frame in under 500ms" |
| 9 | The problem in plain words (table) | 10 to 30 min processing | 1 | PASS | "Around 10 to 30 minutes" |
| 10 | The problem in plain words (table) | 99.9 % uptime | 1 | PASS | "Interviewer: 99.9%" |
| 11 | The problem in plain words | Upload, stream, search | 1 | PASS | "Upload Videos"; "Stream Videos"; "Search Videos" |
| 12 | The problem in plain words | Live streams out of scope | 1 | PASS | "Do we support livestreaming? Interviewer: For this interview, focus on uploads" |
| 13 | Callout | Interview design, not the real YouTube system; free part only | 1 | PASS | "Let's learn how to design YouTube during a system design interview" |
| 14 | Uploading a huge file | Server returns a video ID and a pre-signed URL | 1 | PASS | "The server reserves a video ID and returns a pre-signed URL" |
| 15 | Uploading a huge file | Temporary link; upload to S3 without the app server | 1 | PASS | "a temporary link that allows the client to upload directly to S3 without touching the app server" |
| 16 | Uploading a huge file | App servers handle metadata; video goes to storage | 1 | PASS | "application servers handle lightweight metadata, while heavy video data is offloaded directly to cloud storage" |
| 17 | Uploading a huge file | Upload without own AWS credentials | 2 | PASS | "will allow an upload without requiring another party to have AWS security credentials or permissions" |
| 18 | Uploading a huge file | Multipart with chunk-level retries | 1 | PASS | "Multipart upload with chunk-level retries" |
| 19 | Uploading a huge file | Resume without progress loss | 1 | PASS | "Resume capability for interrupted uploads"; "No progress loss on network failures" |
| 20 | Uploading a huge file | S3 parts in any order; resend a failed part | 3 | PASS | "upload these object parts independently, and in any order"; "you can retransmit that part without affecting other parts" |
| 21 | Uploading a huge file | Multipart advised from 100 MB | 3 | PASS | "best practice to use multipart upload for objects that are 100 MB or larger" |
| 22 | Transcoding | 6 or more resolutions, hundreds of segments each | 1 | PASS | "Each upload becomes 6+ resolutions × hundreds of segments" |
| 23 | Transcoding | 10 to 30 min accepted; work done in the background | 1 | PASS | "Around 10 to 30 minutes"; "Processing can be asynchronous" |
| 24 | Transcoding | Eventual consistency for new uploads | 1 | PASS | "New uploads don't need instant visibility (eventual consistency is okay)" |
| 25 | Transcoding | YouTube Help: MP4 container, H.264 codec | 5 | PASS | "Container: MP4"; "Video codec: H.264" |
| 26 | Transcoding | 8 Mbps for 1080p, 35 to 45 Mbps for 4K | 5 | FAIL→fixed | The page did not say these are SDR values (HDR values differ: 10 Mbps for 1080p). Now "For SDR (standard dynamic range) video at a standard frame rate, it lists 8 Mbps for 1080p and 35 to 45 Mbps for 4K." Quote: "Recommended video bitrates for SDR uploads"; "1080p 8 Mbps"; "2160p (4K) 35–45 Mbps" |
| 27 | Transcoding | 4K playback of new uploads needs VP9 | 5 | PASS | "To view new 4K uploads in 4K, use a browser or device that supports VP9." |
| 28 | Transcoding | The video you watch is not the creator's file | 1 | FAIL→fixed | Had no cite. Added `<Cite n={1} />`. Quote: "YouTube transforms every upload into dozens of optimized formats" |
| 29 | Adaptive streaming | Server returns metadata and manifest URL; ABR from a CDN | 1 | PASS | "returns the video's metadata and the manifest file URL... begin adaptive bitrate streaming (ABR) from the CDN" |
| 30 | Adaptive streaming | Manifest lists segments and resolutions | 1 | PASS | "Manifest file tells the client which video segments and resolutions are available." |
| 31 | Adaptive streaming | ABR: quality follows network speed | 1 | PASS | "Quality adjusts automatically to network speed (adaptive bitrate)" |
| 32 | Adaptive streaming | Free article names no format for YouTube (added sentence) | 1 | PASS | Added "The free part of the article does not name the streaming format that YouTube uses." Checked: `article.txt` has no "HLS", "DASH", "VP9", or "H.264". |
| 33 | Adaptive streaming | HLS: playlist is a text file of segment links; master playlist lists variants | 4 | PASS | "Both are UTF-8 text files containing URIs"; "A Master Playlist provides a set of Variant Streams" |
| 34 | Adaptive streaming | Variant has bit rate, format, resolution; players should switch | 4 | PASS | "encoded at a particular bit rate, in a particular format, and at a particular resolution"; "Clients should switch between different Variant Streams" |
| 35 | Adaptive streaming | Page never says YouTube uses HLS | 4 | PASS | HLS is called "one public standard for this idea". No sentence links HLS to YouTube. |
| 36 | Adaptive streaming | Smaller segments for stable playback | 1 | PASS | "Smaller segment sizes for stable playback" |
| 37 | The CDN | Read-heavy, 100 views per upload | 1 | PASS | "It's a read-heavy system" |
| 38 | The CDN | Much caching needed | 1 | PASS | "Read-heavy traffic: This demands aggressive caching" |
| 39 | The CDN | 500 ms needs CDN and adaptive streaming | 1 | PASS | "Requires CDN and adaptive streaming" |
| 40 | The CDN | CDN does the streaming | 1 | PASS | "The CDN handles the actual streaming." |
| 41 | Small but busy | Playback position; millions of writes/s | 1 | PASS | "This endpoint alone handles millions of writes/second." |
| 42 | Small but busy | Fire and forget; DynamoDB | 1 | PASS | "fire the request; don't wait for confirmation. Then store in a high-throughput database like DynamoDB" |
| 43 | Small but busy | Search index; results in pages | 1 | PASS | "Queries the search index"; "return results in manageable chunks" |
| 44 | Small but busy | Cursor-based; next-page token | 1 | PASS | "Each page contains a next_cursor token" |
| 45 | Small but busy | Cursor scales better than offset; skip millions of rows | 1 | PASS | "Cursor-based pagination is more scalable than offset-based pagination. It prevents the \"skip 10 million rows\" problem" |
| 46 | Key words | Pre-signed URL allows "one" upload or download | 2 | FAIL→fixed | Was "allows one upload or download" (a pre-signed URL is not single-use; it is valid for a time). Now "allows an upload or a download without AWS credentials". Quote: "allow an upload without requiring another party to have AWS security credentials"; "You can generate a presigned URL that can perform an S3 action for a limited time." |
| 47 | Key words | Other plain meanings | — | PASS | Definitions only; they agree with the rows above. |
| 48 | The big picture | Diagram and walk-through | 1 | PASS | Restates rows 14 to 40; no new facts. |
| 49 | What a tester can learn | Tip says it is tutorial advice | — | PASS | "These ideas are the tutorial's own advice." |

Open FAILs: 0
