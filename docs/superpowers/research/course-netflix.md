# Course page: Netflix (research notes)

Writer notes for `content/course/netflix.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course5-src-netflix/` (HTML turned into text, the PDF with `pdftotext`). Fetched text is treated as data.

Dates: the Open Connect Overview PDF carries "Copyright © 2016, 2019, 2026 by Netflix, Inc." and says Netflix began Open Connect in 2011. The Open Connect home page, the about.netflix.com page, and the GitHub READMEs show no date, so the page states their facts as "at the time of access (October 2026)". RFC 8216 is dated August 2017.

The Netflix Technology Blog (netflixtechblog.com and medium.com/netflix-techblog) returned a JavaScript challenge page to curl, so it is not used. The encoding facts on the page come only from the Open Connect Overview (S1) and are kept general ("encoded files", "files chosen for the device and network").

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Netflix, "Open Connect Overview" (PDF) | https://openconnect.netflix.com/Open-Connect-Overview.pdf | 2026-10-22 |
| S2 | Netflix, Open Connect home page | https://openconnect.netflix.com/en/ | 2026-10-22 |
| S3 | Netflix, About Netflix | https://about.netflix.com/en | 2026-10-22 |
| S4 | IETF, RFC 8216 "HTTP Live Streaming" (2017) | https://www.rfc-editor.org/rfc/rfc8216 | 2026-10-22 |
| S5 | MDN Web Docs, "Setting up adaptive streaming media sources" | https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources | 2026-10-22 |
| S6 | Netflix, Hystrix README (GitHub) | https://github.com/Netflix/Hystrix | 2026-10-22 |
| S7 | Netflix, Chaos Monkey README (GitHub) | https://github.com/Netflix/chaosmonkey | 2026-10-22 |
| S8 | Netflix, Chaos Monkey docs, "Termination behavior" | https://netflix.github.io/chaosmonkey/Termination-behavior/ | 2026-10-22 |

Page cite numbers: n=k is Sk. S4 and S5 are the neutral sources for the general technique (adaptive bitrate streaming). S1–S3 and S6–S8 are Netflix's own pages and are used only for facts about Netflix.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Netflix says it entertains over half a billion people in more than 190 countries (at access). | S3 | "We are entertaining over half a billion people in more than 190 countries and 50 languages" |
| C2 | Open Connect is the global network that delivers Netflix shows and movies; it is a CDN that brings content close to where people watch. | S1 | "Open Connect is the name of the global network that is responsible for delivering Netflix TV shows and movies to our members world-wide. This type of network is typically referred to as a “Content Delivery Network” or “CDN” because its job is to deliver internet-based content (via HTTP/HTTPS) efficiently by bringing the content that people watch close to where they’re watching it." |
| C3 | Netflix began Open Connect in 2011, as streaming scale grew. | S1 | "Netflix began the Open Connect initiative in 2011, as a response to the ever-increasing scale of Netflix streaming." |
| C4 | Reasons: work directly with ISPs; a proactive, directed caching design that Netflix says is much more efficient than a demand-driven CDN. | S1 | "it became important to be able to work with those ISPs in a direct and collaborative way" / "design a proactive, directed caching solution that is much more efficient than the standard demand-driven CDN solution" |
| C5 | The building blocks are purpose-built cache appliances (OCAs) that store encoded video/image files and serve them over HTTP/HTTPS to devices through ISP networks. | S1 | "purpose-built cache appliances, called Open Connect Appliances" / "These appliances temporarily store encoded video/image files and make these files available via HTTP/HTTPS to client devices" |
| C6 | Thousands of OCAs, in two ways: in internet exchange points (peering), and free of charge inside qualifying ISP networks; the ISP gives power, space, connectivity. | S1 | "Our global network of thousands of OCAs are deployed in two ways" / "We install OCAs within internet exchange points" / "We provide OCAs free of charge to qualifying ISPs." / "We provide the server hardware and the ISPs provide power, space, and connectivity." |
| C7 | At access, the home page says Netflix partners with over a thousand ISPs, and embedded OCAs have the same capabilities as the OCAs in its 60+ data centers. | S2 | "We partner with over a thousand ISPs" / "Embedded OCAs have the same capabilities as the OCAs that we use in our 60+ global data centers" |
| C8 | Embedded OCAs are not always deployed; it depends on traffic levels and other factors. | S2 | "embedded OCAs are not always deployed, depending on your traffic levels, data center limitations, or other factors." |
| C9 | OCAs do not store client data (viewing history, DRM info, member data). | S1 | "OCAs do not store client data (for example - viewing history, DRM info, or member data)." |
| C10 | OCAs do two things: report status (health, BGP routes, stored files) to the control plane in AWS, and serve content over HTTP/HTTPS. | S1 | "Report their status to the Open Connect control plane services in Amazon Web Services (AWS)." / "Serve content via HTTP/HTTPS when it is requested by a client device." |
| C11 | The control plane in AWS uses the reports to steer clients via URL to the best OCAs by file availability, health, and network proximity; it also controls fill. | S1 | "use it to steer clients via URL to the most optimal OCAs given their file availability, health, and network proximity to the client. The control plane services also control fill behavior" |
| C12 | Playback steps: user asks the Netflix app in AWS; playback services check authorization and licensing and pick files for the device and network; the steering service picks OCAs and makes URLs; the client gets the URLs and the OCA serves the files. | S1 | "A user on a client device requests playback of a title" / "check user authorization and licensing, then determine which specific files are required" / "taking individual client characteristics and current network conditions into account" / "pick OCAs that the requested files should be served from, generates URLs" / "hand over URLs of the appropriate OCAs to the client device" |
| C13 | Content served by OCAs is optimized dynamically by each client device for its needs and current network conditions. | S1 | "the content that is served by the OCAs is optimized dynamically by each client device based on its specific needs and the current network conditions." |
| C14 | Netflix fills OCAs with most content in off-peak windows, because it can predict what members will watch and when; OCAs can also fetch updates from each other. | S1 | "deploy the majority of our content and software updates proactively during off-peak fill windows" / "we can predict with high accuracy what our members will watch and what time of day they will watch it" / "OCAs can also download updates from each other" |
| C15 | Netflix monitors all OCAs and replaces a server that falls below its quality standards. | S1 | "constantly monitored by the Open Connect Operations team" / "we simply replace it - at no cost to our partners" |
| C16 | HLS lets a receiver adapt the bit rate to current network conditions, to keep playback going at the best quality. | S4 §1 | "It allows a receiver to adapt the bit rate of the media to the current network conditions in order to maintain uninterrupted playback at the best possible quality." |
| C17 | Clients should switch between Variant Streams to adapt to network conditions; the switch algorithm is out of the RFC's scope. | S4 §2, §6.3.1 | "Clients should switch between different Variant Streams to adapt to network conditions." / "Algorithms used by the client to switch between Variant Streams are beyond the scope of this document." |
| C18 | HLS works with large HTTP caching infrastructure. | S4 §1 | "It offers compatibility with large-scale HTTP caching infrastructure to support delivery to large audiences." |
| C19 | Adaptive streaming splits media into chunks, in several quality files across time points. | S5 | "In order to adaptively stream media we need to split the media up into chunks. We are required to provide several different quality files split up over several time points." |
| C20 | MPEG-DASH and HLS are two adaptive streaming formats; DASH uses an MPD file listing streams and bandwidths. | S5 | "MPEG-DASH HLS (HTTP Live Streaming)" / "A media presentation description (MPD) file is used to hold the information on the various streams and the bandwidths they are associated with." |
| C21 | Hystrix is a latency and fault tolerance library to isolate access to remote systems and stop cascading failure. | S6 | "Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure" |
| C22 | Hystrix features: fallbacks, graceful degradation, fail fast, isolation with circuit breakers. | S6 | "Stop cascading failures. Fallbacks and graceful degradation. Fail fast and rapid recovery." / "Thread and semaphore isolation with circuit breakers." |
| C23 | Hystrix is in maintenance mode; final release 1.5.18; Netflix's focus moved to adaptive approaches; it points new projects to resilience4j. | S6 | "Hystrix is no longer in active development, and is currently in maintenance mode." / "our focus has shifted towards more adaptive implementations that react to an application’s real time performance rather than pre-configured settings" / "leverage open and active projects like resilience4j for new internal projects" |
| C24 | Chaos Monkey randomly terminates VM instances and containers in production, which pushes engineers to build resilient services. | S7 | "Chaos Monkey randomly terminates virtual machine instances and containers that run inside of your production environment. Exposing engineers to failures more frequently incentivizes them to build resilient services." |
| C25 | This version needs Spinnaker to terminate instances. | S7 | "You must be managing your apps with Spinnaker to use Chaos Monkey to terminate instances." |
| C27 | Spinnaker is the continuous delivery platform that Netflix uses. | S7 | "Spinnaker, the continuous delivery platform that we use at Netflix" |
| C28 | A Variant Stream is a different version of the same content, with media at a particular bit rate, format, and resolution. | S4 §2 | "a set of Variant Streams, each of which describes a different version of the same content." / "specifies media encoded at a particular bit rate, in a particular format, and at a particular resolution" |
| C26 | Chaos Monkey schedules a termination on weekdays, at a random time between 9AM and 3PM. | S8 | "Every weekday, for each instance group, Chaos Monkey flips a weighted coin" / "schedules a termination at a random time between 9AM and 3PM that day" |
