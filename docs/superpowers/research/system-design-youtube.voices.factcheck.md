# Voice fact-check: How YouTube Works (round 1, recheck 1, 2026-10-20)

Page: `content/system-design/youtube.mdx`. I did not write this page.

Method: I read the 7 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the same `n` is cited by the Technical panel of the same section and that it follows the same claim there. I read the Bangla text for meaning and for natural use (polite আপনি, technical terms in English, a hyphen between an English word and a Bangla suffix). The "Key words" section has no voices.

Flagged items of round 1 (all fixed, see "Recheck 1"):

- Section "The problem in plain words", Layman, "Live streams are out of scope": was FAIL (row 13). Fixed. Now PASS.
- Section "Transcoding", Layman and Bangla, the bitrate sentence: was FAIL (rows 77 and 87). Fixed. Now PASS.
- Section "The CDN", Layman, "people watch much more than they upload": a plain gloss of "read-heavy", with the same 100 views per upload. PASS.
- Section "Small but busy", Layman, "(one address of the API)": a gloss of "endpoint". PASS.
- Section "What a tester can learn": no cites in the voices, as in the Technical panel. PASS.


| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | The problem in plain words | Layman | The article says people upload more than 500 hours of video each minute | "people upload more than 500 hours of video to YouTube each minute" | PASS | – |
| 2 | The problem in plain words | Layman | YouTube serves billions of video streams each day [1] | "YouTube serves billions of video streams each day. [1]" | PASS (the Technical panel attributes it to the article; the Layman sentence follows "The article says" in the same paragraph) | – |
| 3 | The problem in plain words | Layman | A video site cannot send the same file to every viewer; it makes many versions so playback stays smooth on small phones, 4K TVs, and slow networks [1] | "A video site cannot send the same file to every viewer. It changes each upload into many versions, so that playback stays smooth on small phones, 4K TVs, and slow networks. [1]" | PASS | – |
| 4 | The problem in plain words | Layman | The article sets targets for its design, as in an interview [1] | "The article then sets the targets of its design, as in an interview" | PASS | – |
| 5 | The problem in plain words | Layman | 1 million uploads each day, 100 million daily active users | "Uploads: 1 million per day; Daily active users: 100 million" | PASS | – |
| 6 | The problem in plain words | Layman | About 100 views for each upload | "Views for each upload: About 100" | PASS | – |
| 7 | The problem in plain words | Layman | The largest upload is 256 GB | "Largest upload: 256 GB" | PASS | – |
| 8 | The problem in plain words | Layman | Input formats are MP4, AVI, and MOV, from 240p to 4K | "Input formats and quality: MP4, AVI, and MOV, from 240p to 4K" | PASS | – |
| 9 | The problem in plain words | Layman | The first frame shows in less than 500 ms | "Time to the first frame: Less than 500 ms" | PASS | – |
| 10 | The problem in plain words | Layman | Processing an upload takes about 10 to 30 minutes | "Time to process an upload: About 10 to 30 minutes" | PASS | – |
| 11 | The problem in plain words | Layman | Uptime is 99.9 % | "Uptime: 99.9 %" | PASS | – |
| 12 | The problem in plain words | Layman | The site has three main jobs: upload, stream, search videos | "The site has three main jobs: upload videos, stream videos, and search videos." | PASS | – |
| 13 | The problem in plain words | Layman | "Live streams are out of scope in the article" [1] | "Live streams are out of scope in the article. [1]" | PASS (fixed: the scope "in the article" is now kept) | – |
| 14 | The problem in plain words | Layman | The article shows one possible design, not the exact system YouTube runs | "The article describes one way to build a video site, as for a system design interview. It is not the exact system that YouTube runs." | PASS (omits "only the first part is free"; an omission) | – |
| 15 | The problem in plain words | Bangla | The article says people upload more than 500 hours of video to YouTube each minute | "people upload more than 500 hours of video to YouTube each minute" | PASS | OK |
| 16 | The problem in plain words | Bangla | YouTube serves several billion video streams each day [1] | "YouTube serves billions of video streams each day. [1]" | PASS | OK ("কয়েক billion" is close to "billions") |
| 17 | The problem in plain words | Bangla | A video site cannot send the same file to every viewer; it makes many versions for small phones, 4K TVs, and slow networks [1] | "A video site cannot send the same file to every viewer. It changes each upload into many versions ... [1]" | PASS | OK |
| 18 | The problem in plain words | Bangla | The article sets its design targets, as in an interview [1] | "The article then sets the targets of its design, as in an interview" | PASS | OK |
| 19 | The problem in plain words | Bangla | 1 million uploads per day; 100 million daily active users | "Uploads: 1 million per day; Daily active users: 100 million" | PASS | OK |
| 20 | The problem in plain words | Bangla | About 100 views for each upload | "Views for each upload: About 100" | PASS | OK |
| 21 | The problem in plain words | Bangla | Largest upload 256 GB | "Largest upload: 256 GB" | PASS | OK |
| 22 | The problem in plain words | Bangla | Input formats MP4, AVI, MOV; quality 240p to 4K | "MP4, AVI, and MOV, from 240p to 4K" | PASS | OK |
| 23 | The problem in plain words | Bangla | The first frame takes less than 500 ms | "Time to the first frame: Less than 500 ms" | PASS | OK |
| 24 | The problem in plain words | Bangla | Processing an upload takes about 10 to 30 minutes | "Time to process an upload: About 10 to 30 minutes" | PASS | OK |
| 25 | The problem in plain words | Bangla | Uptime will be 99.9 % | "Uptime: 99.9 %" | PASS | OK |
| 26 | The problem in plain words | Bangla | Three main jobs: upload, stream, search; live streams are outside the article's scope [1] | "three main jobs ... Live streams are out of scope in the article. [1]" | PASS (keeps the scope "এই article-এর আওতার বাইরে") | OK |
| 27 | The problem in plain words | Bangla | The article shows one way to build a video site, as for an interview; not the exact YouTube system | "one way to build a video site, as for a system design interview. It is not the exact system that YouTube runs." | PASS | OK |
| 28 | The problem in plain words | Bangla | Only the first part of the article is free; this page uses it plus official documents from Amazon, IETF, and YouTube Help | "Only the first part of the article is free. This page uses that part, plus official documents from Amazon, the IETF, and YouTube Help for the details." | PASS | OK |
| 29 | The big picture | Layman | The diagram shows two flows: upload and watch | "UPLOAD ... WATCH" (text diagram) | PASS | – |
| 30 | The big picture | Layman | To upload, the creator app first asks the API server for a link | "To upload, the app first asks the API server for a link." | PASS | – |
| 31 | The big picture | Layman | The API server connects to a metadata database | Diagram: "[API server] --> [Metadata DB]" | PASS | – |
| 32 | The big picture | Layman | The server sends back a signed upload link | Diagram: "2. signed upload link" | PASS | – |
| 33 | The big picture | Layman | The app sends the file in parts straight to blob storage; blob storage is a store for very large files | "Then it sends the file straight to blob storage, a store for very large files." Diagram: "3. send file in parts" | PASS | – |
| 34 | The big picture | Layman | Transcoding workers change the raw file into many versions; the versions and a manifest go back into blob storage | "Workers then change the raw file into many versions." Diagram: "[Blob storage: many versions + manifest]" | PASS | – |
| 35 | The big picture | Layman | To watch, the viewer app asks the API server for the video; the server returns the manifest URL | Diagram: "--ask for video--> [API server] --> returns manifest URL" | PASS | – |
| 36 | The big picture | Layman | The manifest is a list of the versions | "a manifest, a list of the versions" | PASS | – |
| 37 | The big picture | Layman | The app gets small pieces of video, called segments, from the nearest CDN server; behind the CDN is blob storage | "downloads small pieces of video from the nearest CDN server." Diagram: "get small segments--> [CDN] --> [Blob storage]" | PASS | – |
| 38 | The big picture | Bangla | The diagram shows two flows: upload and watch | "UPLOAD ... WATCH" (text diagram) | PASS | OK |
| 39 | The big picture | Bangla | The creator app first asks the API server for a link | "the app first asks the API server for a link" | PASS | OK |
| 40 | The big picture | Bangla | The API server is connected to a metadata database | Diagram: "[API server] --> [Metadata DB]" | PASS | OK |
| 41 | The big picture | Bangla | The server returns a signed upload link | Diagram: "2. signed upload link" | PASS | OK |
| 42 | The big picture | Bangla | The app sends the file in several parts straight to blob storage; blob storage is a store for very large files | "sends the file straight to blob storage, a store for very large files" Diagram: "send file in parts" | PASS | OK |
| 43 | The big picture | Bangla | Transcoding workers change the raw file into many versions; versions and manifest go back to blob storage | "Workers then change the raw file into many versions." Diagram: "many versions + manifest" | PASS | OK |
| 44 | The big picture | Bangla | The viewer app asks the API server for the video and the server returns the manifest URL | Diagram: "returns manifest URL" | PASS | OK |
| 45 | The big picture | Bangla | The manifest is a list of the versions | "a manifest, a list of the versions" | PASS | OK |
| 46 | The big picture | Bangla | The app downloads small pieces of video (segments) from the nearest CDN server; blob storage is behind the CDN | "downloads small pieces of video from the nearest CDN server" Diagram: "[CDN] --> [Blob storage]" | PASS | OK |
| 47 | Uploading a huge file | Layman | A sofa delivery to an office tower: the front desk does not carry it, gives the driver a pass to the goods lift | "Think of a large furniture delivery to an office tower. The front desk does not carry the sofa. It gives the driver a pass to the goods lift" | PASS | – |
| 48 | Uploading a huge file | Layman | The API servers do not carry the video data | "the API servers do not carry the video bytes" | PASS | – |
| 49 | Uploading a huge file | Layman | The server gives back a video ID and a pre-signed URL [1] | "the server gives back a video ID and a pre-signed URL. [1]" | PASS | – |
| 50 | Uploading a huge file | Layman | The short-lived link lets the app upload to Amazon S3 without the app server in the path [1] | "A pre-signed URL is a short-lived link that allows an upload to Amazon S3 without the app server in the path. [1]" | PASS | – |
| 51 | Uploading a huge file | Layman | The app servers handle only small metadata [1] | "the app servers handle only small metadata ... [1]" | PASS | – |
| 52 | Uploading a huge file | Layman | With a pre-signed URL, a person can upload an object without their own AWS credentials [2] | "with a pre-signed URL, a person can upload an object without their own AWS credentials. [2]" | PASS | – |
| 53 | Uploading a huge file | Layman | A very large file is hard to send in one piece, so the app cuts it into chunks | "A very large file is hard to send in one piece over a home network ... the client cuts the file into chunks" | PASS (omits "over a home network") | – |
| 54 | Uploading a huge file | Layman | If one chunk fails, the app sends only that chunk again [1] | "retries only a failed chunk. [1]" | PASS | – |
| 55 | Uploading a huge file | Layman | A stopped upload can continue and keep its progress [1] | "An interrupted upload can resume without loss of progress. [1]" | PASS | – |
| 56 | Uploading a huge file | Layman | In Amazon S3, parts go in any order and a failed part can be sent again without the others [3] | "You can send the parts in any order, and you can send a failed part again without the other parts. [3]" | PASS | – |
| 57 | Uploading a huge file | Layman | Amazon advises multipart upload for objects of 100 MB or more [3] | "Amazon advises multipart upload for objects of 100 MB or more. [3]" | PASS (same number) | – |
| 58 | Uploading a huge file | Bangla | The sofa delivery picture: front desk gives the driver a goods-lift pass; the driver takes the sofa straight to the right floor | "The front desk does not carry the sofa. It gives the driver a pass to the goods lift, and the driver takes the sofa straight to the right floor." | PASS | OK |
| 59 | Uploading a huge file | Bangla | The API servers do not carry the video bytes | "the API servers do not carry the video bytes" | PASS | OK |
| 60 | Uploading a huge file | Bangla | The server returns a video ID and a pre-signed URL [1] | "the server gives back a video ID and a pre-signed URL. [1]" | PASS | OK |
| 61 | Uploading a huge file | Bangla | A pre-signed URL is a short-lived link; with it one can upload to Amazon S3 without the app server in the path [1] | "A pre-signed URL is a short-lived link that allows an upload to Amazon S3 without the app server in the path. [1]" | PASS | OK |
| 62 | Uploading a huge file | Bangla | So the app servers handle only small metadata, and large video data goes straight to storage [1] | "So the app servers handle only small metadata, and the large video data goes straight to storage. [1]" | PASS | OK |
| 63 | Uploading a huge file | Bangla | Amazon's guide says the same: with a pre-signed URL a person can upload an object without their own AWS credentials [2] | "with a pre-signed URL, a person can upload an object without their own AWS credentials. [2]" | PASS | OK |
| 64 | Uploading a huge file | Bangla | A very large file is hard to send in one piece over a home network | "A very large file is hard to send in one piece over a home network." | PASS | OK |
| 65 | Uploading a huge file | Bangla | The design uses multipart upload: the client splits the file into chunks and resends only the failed chunk [1] | "the client cuts the file into chunks and retries only a failed chunk. [1]" | PASS | OK |
| 66 | Uploading a huge file | Bangla | An interrupted upload can continue without losing progress [1] | "An interrupted upload can resume without loss of progress. [1]" | PASS | OK |
| 67 | Uploading a huge file | Bangla | Amazon S3 works the same way: parts in any order; a failed part can be resent without the others [3] | "Amazon S3 works the same way. You can send the parts in any order ... [3]" | PASS | OK |
| 68 | Uploading a huge file | Bangla | Amazon advises multipart upload for objects of 100 MB or more [3] | "Amazon advises multipart upload for objects of 100 MB or more. [3]" | PASS | OK |
| 69 | Transcoding | Layman | A book publisher makes a hardcover, a paperback, and an e-book from one manuscript | "From one manuscript, it prints a hardcover, a paperback, a large-print edition, and an e-book." | PASS (omits "large-print edition"; an omission) | – |
| 70 | Transcoding | Layman | Transcoding changes a video into other formats, sizes, and quality levels | "Transcoding means to convert a video into other formats, sizes, and quality levels." | PASS | – |
| 71 | Transcoding | Layman | Each upload becomes 6 or more resolutions; each resolution has hundreds of segments [1] | "each upload becomes 6 or more resolutions, and each resolution has hundreds of segments. [1]" | PASS (same numbers) | – |
| 72 | Transcoding | Layman | A resolution is the picture size, such as 720p or 1080p; a segment is a short piece of video, a few seconds long | "A segment is a short piece of video, a few seconds long. A resolution is the picture size, such as 720p or 1080p." | PASS | – |
| 73 | Transcoding | Layman | This slow work runs in the background; the design accepts 10 to 30 minutes for each upload [1] | "This work is slow, so the design does it in the background. The article accepts 10 to 30 minutes of processing for each upload. [1]" | PASS | – |
| 74 | Transcoding | Layman | A new video is not visible to everyone at once; with eventual consistency all parts show the same data after a short delay [1] | "It also accepts that a new video is not visible to everyone at once. This is called eventual consistency: all parts of the system show the same data after a short delay. [1]" | PASS | – |
| 75 | Transcoding | Layman | For uploads, YouTube Help recommends the MP4 container and the H.264 codec [5] | "It recommends the MP4 container and the H.264 video codec for uploads. [5]" | PASS | – |
| 76 | Transcoding | Layman | A codec is a method to compress video | "A codec is a method to compress video." | PASS | – |
| 77 | Transcoding | Layman | YouTube Help lists a suggested bitrate for SDR video at a standard frame rate: 8 Mbps for 1080p and 35 to 45 Mbps for 4K [5] | "YouTube Help also lists a suggested bitrate for each upload resolution. For SDR ... it lists 8 Mbps for 1080p and 35 to 45 Mbps for 4K. [5]" | PASS (fixed: the subject "YouTube Help" is named and "suggested" is back; same numbers) | – |
| 78 | Transcoding | Layman | To see new 4K uploads in 4K, the browser or device must support the VP9 codec [5] | "To watch new 4K uploads in 4K, the browser or device must support the VP9 codec. [5]" | PASS | – |
| 79 | Transcoding | Bangla | The book publisher picture: from one manuscript it prints hardcover, paperback, large-print, e-book; each reader gets a suitable version | "From one manuscript, it prints a hardcover, a paperback, a large-print edition, and an e-book. Each reader gets the version that suits them." | PASS | OK |
| 80 | Transcoding | Bangla | Transcoding means converting a video into other formats, sizes, and quality levels | "Transcoding means to convert a video into other formats, sizes, and quality levels." | PASS | OK |
| 81 | Transcoding | Bangla | Each upload becomes 6 or more resolutions; each resolution has hundreds of segments [1] | "each upload becomes 6 or more resolutions, and each resolution has hundreds of segments. [1]" | PASS | OK ("শত শত" = hundreds) |
| 82 | Transcoding | Bangla | A segment is a short video piece a few seconds long; a resolution is the picture size, such as 720p or 1080p | "A segment is a short piece of video, a few seconds long. A resolution is the picture size, such as 720p or 1080p." | PASS | OK |
| 83 | Transcoding | Bangla | This work is slow, so the design does it in the background; the article accepts 10 to 30 minutes of processing per upload [1] | "This work is slow, so the design does it in the background. The article accepts 10 to 30 minutes ... [1]" | PASS | OK |
| 84 | Transcoding | Bangla | It also accepts that a new video is not visible to everyone at once; this is eventual consistency: after a short delay all parts show the same data [1] | "It also accepts that a new video is not visible to everyone at once. This is called eventual consistency ... [1]" | PASS | OK |
| 85 | Transcoding | Bangla | For uploads, YouTube Help recommends the MP4 container and the H.264 video codec [5] | "It recommends the MP4 container and the H.264 video codec for uploads. [5]" | PASS | OK |
| 86 | Transcoding | Bangla | A codec is a method to compress video | "A codec is a method to compress video." | PASS | OK |
| 87 | Transcoding | Bangla | For SDR video at a standard frame rate, YouTube Help shows a suggested bitrate: 8 Mbps for 1080p and 35 to 45 Mbps for 4K [5] | "YouTube Help also lists a suggested bitrate for each upload resolution. For SDR ... it lists 8 Mbps for 1080p and 35 to 45 Mbps for 4K. [5]" | PASS (fixed: "YouTube Help ... প্রস্তাবিত bitrate দেখায়" names the subject; same numbers) | OK |
| 88 | Transcoding | Bangla | To watch new 4K uploads in 4K, the browser or device must support the VP9 codec [5] | "the browser or device must support the VP9 codec. [5]" | PASS | OK |
| 89 | Transcoding | Bangla | So the video you watch is not the file the creator sent [1] | "So the video that you watch is not the file that the creator sent. [1]" | PASS | OK |
| 90 | Adaptive streaming | Layman | A car with an automatic gearbox: lower gear on a hill, higher gear on a flat road, the driver does nothing | "On a hill, it changes to a lower gear. On a flat road, it changes up again. The driver does not need to act." | PASS | – |
| 91 | Adaptive streaming | Layman | On play, the server sends the video metadata and the manifest URL; the player starts adaptive bitrate streaming from a CDN [1] | "the server returns the video's metadata and the URL of a manifest file. The player uses it to start adaptive bitrate streaming from a CDN. [1]" | PASS | – |
| 92 | Adaptive streaming | Layman | The manifest tells the player which segments and resolutions exist [1] | "The manifest tells the player which segments and resolutions exist. [1]" | PASS | – |
| 93 | Adaptive streaming | Layman | Adaptive bitrate streaming: quality changes by itself to match the network speed [1] | "the quality changes by itself to match the speed of the network. [1]" | PASS | – |
| 94 | Adaptive streaming | Layman | The free part of the article does not say which streaming format YouTube uses | "The free part of the article does not name the streaming format that YouTube uses." | PASS | – |
| 95 | Adaptive streaming | Layman | HLS is one public standard; a playlist is a text file of segment links | "HTTP Live Streaming (HLS) is one public standard for this idea. In HLS, a playlist is a text file of segment links." | PASS | – |
| 96 | Adaptive streaming | Layman | A master playlist lists several variant streams of the same content [4] | "A master playlist lists several variant streams of the same content. [4]" | PASS | – |
| 97 | Adaptive streaming | Layman | Each variant has its own bit rate, format, and resolution | "Each variant has its own bit rate, format, and resolution." | PASS | – |
| 98 | Adaptive streaming | Layman | Players should change to a different variant when the network changes [4] | "Players should switch between the variants when the network changes. [4]" | PASS | – |
| 99 | Adaptive streaming | Layman | The article also uses smaller segments to keep playback stable on weak networks [1] | "The article also uses smaller segments to keep playback stable on weak networks. [1]" | PASS | – |
| 100 | Adaptive streaming | Bangla | Automatic gearbox car picture: lower gear on a hill, upper gear on flat road; the driver does nothing | "On a hill, it changes to a lower gear ... The driver does not need to act." | PASS | OK |
| 101 | Adaptive streaming | Bangla | On play, the server returns the video metadata and a manifest URL; the player starts adaptive bitrate streaming from a CDN [1] | "the server returns the video's metadata and the URL of a manifest file ... [1]" | PASS | OK |
| 102 | Adaptive streaming | Bangla | The manifest tells the player which segments and resolutions exist [1] | "The manifest tells the player which segments and resolutions exist. [1]" | PASS | OK |
| 103 | Adaptive streaming | Bangla | Adaptive bitrate streaming means the quality changes by itself to match the network speed [1] | "Adaptive bitrate streaming means that the quality changes by itself to match the speed of the network. [1]" | PASS | OK |
| 104 | Adaptive streaming | Bangla | The free part of the article does not say which streaming format YouTube uses | "The free part of the article does not name the streaming format that YouTube uses." | PASS | OK |
| 105 | Adaptive streaming | Bangla | HLS is one public standard; a playlist is a text file of segment links | "HTTP Live Streaming (HLS) is one public standard for this idea. In HLS, a playlist is a text file of segment links." | PASS | OK |
| 106 | Adaptive streaming | Bangla | A master playlist lists several variant streams of the same content [4] | "A master playlist lists several variant streams of the same content. [4]" | PASS | OK |
| 107 | Adaptive streaming | Bangla | Each variant has its own bit rate, format, and resolution | "Each variant has its own bit rate, format, and resolution." | PASS | OK |
| 108 | Adaptive streaming | Bangla | When the network changes, the player should switch variants [4] | "Players should switch between the variants when the network changes. [4]" | PASS | OK |
| 109 | Adaptive streaming | Bangla | The article also uses smaller segments to keep playback stable on weak networks [1] | "The article also uses smaller segments to keep playback stable on weak networks. [1]" | PASS | OK |
| 110 | The CDN | Layman | A soft drink company keeps stock in local warehouses near the shops, not one factory | "It does not ship each bottle from one factory. It keeps stock in local warehouses near the shops." | PASS | – |
| 111 | The CDN | Layman | A CDN is a group of servers in many cities that keep copies of popular files near the users | "A CDN (content delivery network) is a group of servers in many cities that keep copies of popular files near the users." | PASS | – |
| 112 | The CDN | Layman | YouTube is read-heavy: people watch much more than they upload; about 100 views per upload [1] | "YouTube is read-heavy: there are about 100 views for each upload in the article's numbers. [1]" | PASS (the added gloss restates "read-heavy" and the 100:1 number) | – |
| 113 | The CDN | Layman | So the design must use a lot of caching [1]; a cache is a store of copies that is fast to reach | "So the design must use a lot of caching. [1] A cache is a store of copies that is fast to reach." | PASS | – |
| 114 | The CDN | Layman | To show the first frame in less than 500 ms, the design needs a CDN and adaptive streaming [1] | "The aim of the first frame in less than 500 ms needs a CDN and adaptive streaming. [1]" | PASS | – |
| 115 | The CDN | Layman | The CDN does the real streaming; the API servers only point the player to it [1] | "The CDN does the real streaming, and the API servers only point the player to it. [1]" | PASS | – |
| 116 | The CDN | Bangla | The soft drink company keeps stock in local warehouses near the shops | "It does not ship each bottle from one factory. It keeps stock in local warehouses near the shops." | PASS | OK |
| 117 | The CDN | Bangla | A CDN is a group of servers spread over many cities that keep copies of popular files near users | "A CDN ... is a group of servers in many cities that keep copies of popular files near the users." | PASS | OK |
| 118 | The CDN | Bangla | YouTube is read-heavy: about 100 views per upload in the article's numbers [1] | "YouTube is read-heavy: there are about 100 views for each upload in the article's numbers. [1]" | PASS | OK |
| 119 | The CDN | Bangla | So the design must use a lot of caching [1]; a cache is a store of copies that is fast to reach | "So the design must use a lot of caching. [1] A cache is a store of copies that is fast to reach." | PASS | OK |
| 120 | The CDN | Bangla | The aim of the first frame in less than 500 ms needs a CDN and adaptive streaming [1] | "The aim of the first frame in less than 500 ms needs a CDN and adaptive streaming. [1]" | PASS | OK |
| 121 | The CDN | Bangla | The CDN does the real streaming; the API servers only point the player to the CDN [1] | "The CDN does the real streaming, and the API servers only point the player to it. [1]" | PASS | OK |
| 122 | Small but busy | Layman | Some data is small but very frequent; the player reports the playback position so you can continue later | "Some data is small but very frequent. The player reports your playback position, so you can continue later." | PASS | – |
| 123 | Small but busy | Layman | This one endpoint (one address of the API) gets millions of writes each second [1] | "this endpoint alone takes millions of writes each second. [1]" | PASS (the bracket gloss defines "endpoint"; no new fact) | – |
| 124 | Small but busy | Layman | The player sends the update and does not wait for an answer | "So the player sends the update and does not wait for an answer." | PASS | – |
| 125 | Small but busy | Layman | The design keeps it in a fast database, such as DynamoDB [1] | "The design stores it in a fast database such as DynamoDB. [1]" | PASS | – |
| 126 | Small but busy | Layman | Search uses a search index and gives the results in pages [1] | "Search uses a search index and returns results in pages. [1]" | PASS | – |
| 127 | Small but busy | Layman | Cursor-based pagination: each page holds a token that points to the next page [1] | "The design uses cursor-based pagination. Each page of results holds a token that points to the next page. [1]" | PASS | – |
| 128 | Small but busy | Layman | This scales better than an offset; with an offset the database must skip millions of rows to reach a deep page [1] | "this scales better than an offset, which would make the database skip millions of rows to reach a deep page. [1]" | PASS | – |
| 129 | Small but busy | Bangla | Some data is small but comes very often; the player reports the playback position so you can continue later | "Some data is small but very frequent. The player reports your playback position, so you can continue later." | PASS | OK |
| 130 | Small but busy | Bangla | This endpoint alone gets millions of writes each second [1] | "this endpoint alone takes millions of writes each second. [1]" | PASS | OK |
| 131 | Small but busy | Bangla | The player sends the update but does not wait for an answer | "So the player sends the update and does not wait for an answer." | PASS | OK |
| 132 | Small but busy | Bangla | The design keeps it in a fast database such as DynamoDB [1] | "stores it in a fast database such as DynamoDB. [1]" | PASS | OK |
| 133 | Small but busy | Bangla | Search uses a search index and returns results in pages [1] | "Search uses a search index and returns results in pages. [1]" | PASS | OK |
| 134 | Small but busy | Bangla | Cursor-based pagination: each page of results holds a token that points to the next page [1] | "Each page of results holds a token that points to the next page. [1]" | PASS | OK |
| 135 | Small but busy | Bangla | The article says this scales better than an offset; an offset makes the database skip millions of rows to reach a deep page [1] | "this scales better than an offset, which would make the database skip millions of rows to reach a deep page. [1]" | PASS | OK |
| 136 | What a tester can learn | Layman | These ideas are the tutorial's own advice (no cites) | "These ideas are the tutorial's own advice." | PASS | – |
| 137 | What a tester can learn | Layman | Stop the network in the middle of a large upload; make sure the upload continues and does not start from zero | "Cut the network in the middle of a large upload. Check that the upload resumes and does not start again from zero." | PASS | – |
| 138 | What a tester can learn | Layman | Use the pre-signed link after it expires; make sure the storage refuses it | "Use the pre-signed link after it expires. Check that the storage refuses it." | PASS | – |
| 139 | What a tester can learn | Layman | Slow down the network in the browser tools while a video plays; quality goes down and the video does not stop | "Throttle the network in the browser tools while a video plays. Check that the quality goes down and the video does not stop." | PASS | – |
| 140 | What a tester can learn | Layman | Watch a video right after its upload; check the message while the video is processing | "Watch a video right after its upload. Check the message that the app shows while the video is still processing." | PASS | – |
| 141 | What a tester can learn | Layman | Upload an unsupported format, a zero-byte file, and a file at the size limit | "Upload a file in an unsupported format, a zero-byte file, and a file at the size limit." | PASS | – |
| 142 | What a tester can learn | Layman | Load deep pages of search results; no result shows twice or goes missing between pages | "Load deep pages of search results. Check that no result repeats or goes missing between pages." | PASS | – |
| 143 | What a tester can learn | Bangla | These ideas are the tutorial's own advice (no cites) | "These ideas are the tutorial's own advice." | PASS | OK |
| 144 | What a tester can learn | Bangla | Cut the network in the middle of a large upload; check the upload resumes from where it stopped and does not restart from zero | "Cut the network in the middle of a large upload. Check that the upload resumes and does not start again from zero." | PASS | Note: "network কেটে দিন" is literal and informal. "network বিচ্ছিন্ন করুন" is more natural. The meaning is clear, so not a FAIL. |
| 145 | What a tester can learn | Bangla | Use the pre-signed link after it expires; check that the storage refuses it | "Use the pre-signed link after it expires. Check that the storage refuses it." | PASS | OK |
| 146 | What a tester can learn | Bangla | Throttle the network in the browser tools while a video plays; check that quality drops without the video stopping | "Throttle the network in the browser tools while a video plays. Check that the quality goes down and the video does not stop." | PASS | OK |
| 147 | What a tester can learn | Bangla | Watch a video right after upload; check the message the app shows while it processes | "Watch a video right after its upload. Check the message that the app shows while the video is still processing." | PASS | OK |
| 148 | What a tester can learn | Bangla | Upload an unsupported-format file, a zero-byte file, and a file equal to the size limit | "Upload a file in an unsupported format, a zero-byte file, and a file at the size limit." | PASS | OK |
| 149 | What a tester can learn | Bangla | Load deep pages of search results; check that no result repeats or goes missing between pages | "Load deep pages of search results. Check that no result repeats or goes missing between pages." | PASS | OK |


## Recheck 1

I read `git diff HEAD -- content/system-design/youtube.mdx` (the 7 `<Voices>` blocks are the only change since the base) and checked every row again against the current page text.

- Row 13 (Layman): the line is now "Live streams are out of scope in the article <Cite n={1} />". It matches the Technical scope. PASS.
- Row 77 (Layman) and row 87 (Bangla): each sentence now says "YouTube Help lists/দেখায় a suggested bitrate" with the same numbers (8 Mbps for 1080p, 35 to 45 Mbps for 4K) and the same cite [5]. The wrong subject is gone. PASS.
- I re-read all other rows for numbers, names, scope, and cites. I found no change in meaning and no new fact. Each cite in a voice panel is a cite that the Technical panel of the same section uses, after the same claim (1 to 5 all checked).
- Language: the Bangla text is polite (আপনি), keeps the technical terms in English, and uses a hyphen between an English word and a Bangla suffix. One note only: row 144, "network কেটে দিন" is informal. Another small note: in the "Transcoding" Bangla panel, "এটি এটাও মেনে নেয়" repeats the pronoun. It still reads as the article. Neither note hides or changes the meaning.

Open FAILs: 0
