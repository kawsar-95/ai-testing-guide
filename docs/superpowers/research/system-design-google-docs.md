# How Google Docs Works (System Design) — research notes (2026-10-20)

Fetch note: the newsletter article was fetched with `curl` and stripped to text in `<scratch dir>/sd-raw/google-docs/article.txt`. The article is for paid subscribers after its introduction (the page shows a paywall after "Here’s how it works:"). The free part covers the problem, locks, latency hiding, last write wins, differential synchronization, and the idea of operational transformation (OT). The client-server design of the article is behind the paywall. To cover the real mechanism, the page also uses Google's own three-part series on the Google Drive Blog (September 2010, by John Day-Richter, Software Engineer). The raw text of each post is in the same folder (`google-blog-part1-working-together.txt`, `google-blog-part2-conflict-resolution.txt`, `google-blog-part3-making-collaboration-fast.txt`). The article links only to Wikipedia (Operational transformation); the page does not use it.

The article title on the site is "How Does Google Docs Work 🔥". `page.sources` drops the emoji (the content rules forbid icons).

The article gives no scale numbers (users, documents, requests). The only number in its free part is the 200 ms round trip. The Google posts are from 2010. The page says that the system today can be different.

Overlap check: `python3 scripts/linux_overlap.py content/system-design/google-docs.mdx <scratch dir>/sd-raw/google-docs` reads 4 files and finds 0 runs (exit 0). The first run found 2 runs ("to the end of the revision log to", "be revision 2 but the server has already"); both sentences were reworded.

## Sources

S1. How Does Google Docs Work — The System Design Newsletter (Neo Kim) — https://newsletter.systemdesign.one/p/how-does-google-docs-work — accessed 2026-10-20 (published 2025-08-22; free part only; `article.txt`)
S2. What’s different about the new Google Docs: Working together, even apart — Google Drive Blog — https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs_21.html — accessed 2026-10-20 (part 1 of 3; `google-blog-part1-working-together.txt`)
S3. What’s different about the new Google Docs: Conflict resolution — Google Drive Blog — https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs_22.html — accessed 2026-10-20 (part 2 of 3; `google-blog-part2-conflict-resolution.txt`)
S4. What’s different about the new Google Docs: Making collaboration fast — Google Drive Blog — https://drive.googleblog.com/2010/09/whats-different-about-new-google-docs.html — accessed 2026-10-20 (part 3 of 3; `google-blog-part3-making-collaboration-fast.txt`)

Cite numbers on the page: S1 = 1, S2 = 2, S3 = 3, S4 = 4.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | All copies must end up the same when people edit at the same time. | S1 | "Concurrent changes to the same document should converge to the same version." |
| 2 | Edits made at the same time must not clash. | S1 | "Concurrent changes to the same document must avoid conflicts." |
| 3 | Each person must see the edits of others in real time. | S1 | "Any changes should be visible in real-time to each user." |
| 4 | A person should be able to edit while offline. | S1 | "Also a user should be able to make changes while they’re offline." |
| 5 | A round trip across the Earth takes about 200 ms. | S1 | "a network round-trip across the Earth takes 200 milliseconds." |
| 6 | The core task: every editing session must reach the same correct document. | S2 | "make sure that all the editing sessions eventually converge on the same, correct, version of the document." |
| 7 | The client is the code in the browser; it handles edits and talks to the server. | S4 | "We call the code that’s running in your browser a client. In the document editor, the client processes all your edits, sends them to the server" |
| 8 | Your edits appear in your copy at once, without waiting for the server. | S4 | "every editor can optimistically apply their own changes locally without waiting for the server to acknowledge those changes." |
| 9 | The client sends one change at a time. | S4 | "we never send more than one pending change at a time." |
| 10 | The server keeps the revision log of processed changes. | S4 | "The complete history of all processed changes (called the revision log)." |
| 11 | The server transforms changes (fixes positions) before it stores them. | S4 | "The server will use OT to transform John’s change so that it can be stored as Revision 3." |
| 12 | The server sends each change on to the other editors. | S4 | "the server will send John a message containing Luiz’s first change" |
| 13 | The newsletter calls the lock approach pessimistic concurrency control. | S1 | "A simple approach to handle concurrency is using pessimistic concurrency control." |
| 14 | With a lock, one copy is writable and the others are read-only. | S1 | "only a single document copy is available for write operations at once, while other document copies are read-only." |
| 15 | A lock keeps data correct but gives no live group editing. | S1 | "It offers strong consistency, but doesn’t support collaborative editing in real-time." |
| 16 | A lock does not allow offline editing. | S1 | "Besides it doesn’t support offline changes." |
| 17 | A lock for each paragraph makes the editing experience worse. | S2 | "locking paragraphs isn’t a great solution: you’re sidestepping the technical challenges by hampering the collaborative editing experience." |
| 18 | Two people can still start in the same paragraph at the same moment. | S2 | "it’s always possible for two editors to begin editing a paragraph at the same time." |
| 19 | Then the edits must be merged or thrown away. | S2 | "will need to be merged (which has all of the above problems) or discarded." |
| 20 | Latency hiding: each user edits a local copy so the app feels fast. | S1 | "The idea is to keep a document copy for each user locally and then run operations locally for high responsiveness." |
| 21 | The system sends the edits to everyone so the copies match. | S1 | "And the system propagates the changes to all users for consistency." |
| 22 | Last write wins can lose edits made at the same time. | S1 | "So there’s a risk of data loss when there are concurrent changes in high-latency networks." |
| 23 | Differential sync sends only the diff. | S1 | "The system doesn’t send the entire document when something changes, but only the difference (diff)." |
| 24 | A diff says what changed, not why; conflicts are hard to settle. | S1 | "differential synchronization only tracks diffs, and not the reason behind a change. So conflict resolution might be difficult." |
| 25 | Comparing versions cannot tell what the editor meant. | S2 | "if you just compare versions, you can’t make sure that changes are merged in the way that an editor would expect." |
| 26 | The old Google Docs compared versions. | S2 | "One approach taken by the old Google documents and by many other collaborative word processors is to compare document versions." |
| 27 | Example: John bolds "brown fox"; Luiz replaces "fox" with "dog". | S2 | "John bolds the words brown fox. As he’s doing this, Luiz highlights the word fox and replaces it with the word dog." |
| 28 | The right result is "The quick brown dog". | S2 | "The correct way to merge John’s style change and Luiz’s text substitution is as The quick brown dog." |
| 29 | "fox dog" and "dog fox" look just as valid. | S2 | "The quick brown fox dog, The quick brown dog, The quick brown dog fox are all perfectly valid ways of merging" |
| 30 | The new Google Docs stores a document as a list of changes in time order. | S2 | "In the new editor, a document is stored as a series of chronological changes." |
| 31 | Each edit is insert text, delete text, or apply a style to a range. | S3 | "all edits boil down to three basic types of changes: inserting text, deleting text, and applying styles to a range of text." |
| 32 | An edit does not change the stored characters; it is added to the end of the revision log. | S3 | "they’re not modifying the underlying characters that represents the document. Instead they are appending their change to the end of the revision log." |
| 33 | To show the document, Google replays the log from the start. | S3 | "To display a document, we replay the revision log from the beginning." |
| 34 | Because Google knows the revision of each change, it can merge it with later changes. | S2 | "Since we know the revision of each change, we can check what the editor saw when he made that change" |
| 35 | The merge method is operational transformation (OT). | S3 | "The algorithm that we use to handle these shifts is called operational transformation (OT)." |
| 36 | The newsletter calls OT optimistic. | S1 | "Google Docs uses an optimistic concurrency control technique called operational transformation (OT)." (two spaces before "operational" in the raw text) |
| 37 | OT lets many copies accept edits at once and settles conflicts with no locks or user action. | S1 | "It allows different document copies to accept write operations at once. Also it handles conflict resolution automatically without locks or user interventions." |
| 38 | Example text "EASY AS 123"; John changes it to "ABC". | S3 | "a document edited by John and Luiz initially reads; EASY AS 123. If John (represented by green) changes the document to EASY AS ABC" |
| 39 | Luiz changes it to "IT'S EASY AS 123" and types "IT" first. | S3 | "Luiz (represented by yellow) begins to change his document to IT'S EASY AS 123. He first inserts the I and the T" |
| 40 | John's delete covers positions 9 to 11; applied as is, it removes the wrong characters. | S3 | "Suppose Luiz naively applies John’s first change {DeleteText @9-11}:" ... "He deleted the wrong characters!" |
| 41 | Luiz's client shifts John's change by 2 places. | S3 | "he needs to know to shift the changes over by two characters to adjust for the IT that Luiz added." |
| 42 | Italic and red on the same text do not clash. | S3 | "the range of text can be both red and italic simultaneously." |
| 43 | Correct OT means every editor sees the same document once all changes arrive. | S3 | "it guarantees that once all editors have received all changes, everyone will be looking at the same version of the document." |
| 44 | OT is hard to build correctly. | S1 | "it's complex to implement properly." |
| 45 | The OT code must handle every way two kinds of edit meet. | S3 | "must handle all of the different ways that InsertText, DeleteText, and ApplyStyle changes can be paired and transformed against each other." |
| 46 | Each client and the server keep a small amount of state (4 items and 3 items). | S4 | "each client keeps track of four pieces of information" ... "The server remembers three things" |
| 47 | Client state: last revision number, unsent edits, sent but unconfirmed edits, its view of the document. | S4 | "The number of the most recent revision sent from the server to the client." ... "The current state of the document as seen by that particular editor." |
| 48 | Server state: unprocessed edits, revision log, current document. | S4 | "The list of all changes that it has received but not yet processed." ... "The current state of the document as of the last processed change." |
| 49 | New typing waits in a pending list until the acknowledgement arrives. | S4 | "Until Luiz recieves an acknowledgement of his first change, his client will keep all new changes in the pending list." (typo in source) |
| 50 | John expects revision 2, but the server already has a revision 2. | S4 | "a change that John believes should be Revision 2. But the server has already committed a Revision 2 to the revision log." |
| 51 | The server transforms John's change against all changes since his last sync, and saves it as revision 3. | S4 | "transform John’s sent change against all the changes that have been committed since the last time John synced with the server." |
| 52 | A slow network does not slow your typing. | S4 | "the speed or reliability of your network connection doesn’t influence how fast you can type." |
| 53 | The network carries only the smallest description of each change. | S4 | "The information that is sent over the network is always the bare minimum needed to describe what changed." |
| 54 | The server does not track client state, so work does not grow with more editors. | S4 | "the complexity of processing changes does not increase as you add more editors." |
| 55 | After the move, collaboration conflicts stopped; edits appear letter by letter. | S4 | "there are no more collaboration conflicts and editors can see each other’s changes as they happen, character-by-character." |

Not cited (general explanation, not a claim): the analogies (marker pen, shopping list, bank account, ticket rail), the definitions of concurrency, latency, diff and acknowledgement, the Key words table, and the tester callout (tutorial advice).
