# Research notes: How Twitter Works

Page: `content/system-design/twitter.mdx`

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | System Design Interview: Design Twitter/X Timeline - A Frontend Deep Dive | The System Design Newsletter (Neo Kim) | https://newsletter.systemdesign.one/p/system-design-interview-twitter | 2026-10-20 |

S1 is page cite 1.

Notes on S1:

- S1 is a guest post by Yangshun Tay. It is an interview-style design of the front end of the Twitter/X timeline. It does not describe the Twitter backend. The page title stays "How Twitter Works", and the lede says that the page covers the front end of the timeline. A note callout says that the design is one possible design.
- The end of S1 (after the pagination section) is for paid subscribers. The page uses only the free part.
- S1 gives few scale numbers. The page uses the two that it has: "millions of users" and a timeline fetch of "less than 1s".
- The hybrid row of the rendering table: the "Bad" cell ("Still needs server resources for the first page") is an inference from S1, which says that SSR needs more infrastructure and that hybrid uses SSR for the first load.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Front-end system design deals with rendering, network use, and client-server consistency. | S1 | "the focus shifts to rendering efficiency, client structure, network utilization, and managing data consistency between the client and server." |
| 2 | For sites like Twitter, the front end is a distributed system that manages state, fetches, caches, and syncs. | S1 | "It is a distributed system in its own right, managing state, orchestrating data fetching, caching results" / "maintaining real-time synchronization with the backend." |
| 3 | The article is a guest post by Yangshun Tay. | S1 | "I want to introduce Yangshun Tay as a guest author." |
| 4 | The question is "Design Twitter/X Timeline" in an interview. | S1 | "Let’s apply the RADIO framework to a common front-end system design question:" / "“Design Twitter/X Timeline.”" |
| 5 | RADIO = Requirements, Architecture, Data model, Interface, Optimizations; the author made it. | S1 | "Therefore, I came up with an easy-to-remember mnemonic, RADIO" |
| 6 | Core requirements: timeline of text and image tweets, like and retweet, view replies, load more at bottom, create tweets. | S1 | "Users can perform actions on tweets, such as liking and retweeting" / "When users scroll to the bottom of the timeline, more tweets load" |
| 7 | Front ends must scale to millions of users. | S1 | "the architectural thinking required to scale those interfaces to millions of users." |
| 8 | A timeline fetch on Twitter takes less than 1 s. | S1 | "fetching a timeline on Twitter is already pretty quick (takes less than 1s)" |
| 9 | Four layers: view, store, data access, server. | S1 | "four main layers: View, Store, Data access, and the Server." |
| 10 | The store updates first (often optimistically), then syncs with the server, and triggers re-renders. | S1 | "the store immediately updates the local state (often optimistically) before synchronizing with the server." / "triggers re-renders in the view layer whenever data changes." |
| 11 | SSR: full HTML on the server, faster first paint, better SEO. | S1 | "SSR generates the full HTML for a page on the server before sending it to the client." / "This leads to faster first-paint times and better SEO" |
| 12 | Hydration attaches event listeners. | S1 | "the client “hydrates” the page to attach event listeners and to enable interactivity." |
| 13 | CSR: HTML shell plus JS bundle; good interactivity; slower first load and weaker SEO. | S1 | "the server first delivers a minimal HTML shell and a JavaScript bundle." / "it has slower first load performance and weaker SEO" |
| 14 | Hybrid: server renders the first load, client handles updates. | S1 | "The server renders the initial page load for speed and SEO, and the client handles dynamic updates." |
| 15 | Twitter likely uses CSR; SSR needs more infrastructure; personal timelines get speed, not SEO, from SSR. | S1 | "Since timelines are highly personalized, rendering timelines on the server primarily benefits performance instead of SEO." / "Twitter likely uses CSR because SSR requires more infrastructure resources" |
| 16 | SPA vs MPA definitions. | S1 | "A single-page application (SPA) is a web app that loads a single HTML page and dynamically updates its content" / "In multi-page applications (MPA), each route corresponds to a separate HTML page." |
| 17 | SPAs are preferred for Twitter. | S1 | "For a social media app like Twitter, SPAs are preferred, and SPAs rely on CSR." |
| 18 | Clicking a tweet is instant in an SPA; replies load after. | S1 | "navigation to the tweet details page is instant and requires no server-side interaction. Additional data, such as replies, is fetched after navigation occurs." |
| 19 | The store holds the timeline, tweets, users, and composer message in memory. | S1 | "It holds all application state in memory: the timeline, tweets, users, composer message, etc." |
| 20 | Normalization: each entity stored once, referenced by ID. | S1 | "each unique entity is stored exactly once, with relationships between entities represented by references rather than nested copies." |
| 21 | A profile change updates one user entry, and all tweets reflect it. | S1 | "If a user’s profile changes, only the corresponding user entry needs to be updated" |
| 22 | Tweet, User, and Timeline entities and their fields. | S1 | "It can be thought of as a list of tweet IDs, annotated with pagination information for fetching older or newer tweets." / "and relationship flags (for example, whether the current user follows them)." |
| 23 | Normalization can be on the server or client; Twitter does it on the server as of 2025. | S1 | "Normalization can be done on the server or the client" / "As of 2025, Twitter normalizes timeline data on the server and sends a compact payload to clients." |
| 24 | The API endpoints. | S1 | "GET /timeline?count=10&cursor=abc" / "POST /media/upload" / "POST /tweets/{id}/like" |
| 25 | Do not use the user ID in the request as identity; derive it from session cookies. | S1 | "it can be spoofed and create a security vulnerability. The user’s identity should be derived from session cookies sent with the request." |
| 26 | Media is uploaded to blob storage first; its ID goes in the tweet POST. | S1 | "the media is first uploaded to blob storage, and an ID is returned to include in the POST request payload." |
| 27 | Code splitting loads only the JS for the current view. | S1 | "load only the JavaScript necessary for the current view, rather than delivering the entire bundle upfront." |
| 28 | Twitter splits code by tweet format, by interaction (emoji picker), and by page (tweet detail). | S1 | "Only the code needed for the tweet formats in the timeline is downloaded." / "e.g., Emojipicker when clicking on the emoji button in the composer" |
| 29 | Virtualized lists draw only visible items; invisible divs keep the scrollbar; off-screen items are recycled. | S1 | "Twitter relies on virtualized lists that render only the visible items in the viewport" / "off-screen elements are recycled or unmounted to minimize memory usage." |
| 30 | Lazy media, sizes per device, blurred placeholders. | S1 | "Media should never be fetched or decoded until it’s near the user’s viewport." / "serves the appropriate variant based on device type, screen density, and layout size." |
| 31 | Blurred low-resolution placeholders. | S1 | "blurred low-resolution placeholders (often called LQIP6 or “blurhash”)" |
| 32 | Twitter uses one spinner; skeletons are better. | S1 | "Twitter uses a single loading spinner, but a better approach would be to use skeleton placeholders" |
| 33 | Twitter shows a Retry button with a short message. | S1 | "Twitter shows a “Retry” button alongside a short message instead of a blank page" |
| 34 | Optimistic updates change the UI before the server confirms. | S1 | "Optimistic updates work by immediately reflecting a user’s action in the interface before the server confirms the change" |
| 35 | On failure, the client rolls back. | S1 | "But if the request fails, the client rolls back to the previous state." |
| 36 | The store updates likedCount by 1 and likedByUser to true. | S1 | "has to update a Tweet’s likedCount value by 1 and likedByUser to true" |
| 37 | Offset paging example and its problems. | S1 | "a request might specify ?offset=20&limit=10" / "offsets can shift, leading to duplicate or missing items. It also performs poorly for large offsets7" |
| 38 | Cursor is a unique ID or timestamp at the page edge. | S1 | "uses a unique identifier (often a tweet ID or timestamp) as a cursor to mark the boundary between pages." |
| 39 | Cursor paging fits Twitter: tweets arrive constantly, old ones are deleted or re-ranked; it is bidirectional. | S1 | "new tweets appear constantly and older tweets can be deleted or re-ranked." / "For Twitter, cursor-based pagination is the rational choice." |

## Copy check

`python3 scripts/linux_overlap.py content/system-design/twitter.mdx <SCRATCH>/sd-raw/twitter` read 1 file (`article.txt`). The first run found 1 run ("on the server and sends a compact payload"). I reworded the sentence. The second run found 0 runs (exit 0).
