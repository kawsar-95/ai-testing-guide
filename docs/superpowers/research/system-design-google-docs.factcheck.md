# Fact-check: How Google Docs Works (round 1, 2026-10-20)

I read the free part of the newsletter article (S1, `article.txt`) and the three Google Drive Blog posts of September 2010 (S2 to S4), all saved in `sd-raw/google-docs/`. The lede already says that the Google posts are from 2010. I fixed 6 FAILs: 3 sentences presented 2010 facts in the present tense ("stores", "lists", "now see"), 1 sentence had no cite, 1 sentence was an unsourced inference, and 1 bullet overstated "complexity" as "work". The overlap check (`linux_overlap.py`, 4 files) finds 0 runs and exits 0. Each of the 4 sources has a cite, all cite numbers are 1 to 4, the `##` headings are unique, the closing tags are at column 0, and the prose has no `{` or `<`.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | The Google posts are from 2010; today's system can be different | – | PASS | S2 to S4 URLs are `/2010/09/`. S1: "may differ from real-world implementation." |
| 2 | The problem in plain words | Three hard parts: converge, avoid conflicts, real time | 1 | PASS | "Concurrent changes to the same document should converge to the same version." |
| 3 | The problem in plain words | Offline editing | 1 | PASS | "a user should be able to make changes while they’re offline." |
| 4 | The problem in plain words | Round trip across the Earth about 200 ms | 1 | PASS | "a network round-trip across the Earth takes 200 milliseconds." |
| 5 | The problem in plain words | Delay is noticeable | – | FAIL→fixed | Was "That is long enough for a fast typist to notice." (no source). Now "The newsletter says this delay can make the app feel poor to use." Quote: "This might cause a poor user experience." |
| 6 | The problem in plain words | Core task: every session reaches the same correct document | 2 | PASS | "all the editing sessions eventually converge on the same, correct, version of the document." |
| 7 | The big picture | The client is browser code that handles edits and talks to the server | 4 | PASS | "the client processes all your edits, sends them to the server, and processes other editors’ changes" |
| 8 | The big picture | 2010 date of the picture | – | FAIL→fixed | Added "This picture follows Google's posts from 2010." before the present-tense walk-through. |
| 9 | The big picture | Edits appear at once; sent one change at a time | 4 | PASS | "we never send more than one pending change at a time." |
| 10 | The big picture | Server orders, transforms, logs each change | 4 | PASS | "The server will use OT to transform John’s change so that it can be stored as Revision 3." |
| 11 | The big picture | Server sends the change to other editors | – | FAIL→fixed | Had no cite. Added cite 4. Quote: "the server will send John a message containing Luiz’s first change" |
| 12 | Why a lock is too slow | Newsletter names pessimistic concurrency control | 1 | PASS | "A simple approach to handle concurrency is using pessimistic concurrency control." |
| 13 | Why a lock is too slow | Only one writer; other copies read-only | 1 | PASS | "only a single document copy is available for write operations at once, while other document copies are read-only." |
| 14 | Why a lock is too slow | No live group editing, no offline | 1 | PASS | "doesn’t support collaborative editing in real-time" / "it doesn’t support offline changes." |
| 15 | Why a lock is too slow | Paragraph locks make the experience worse | 2 | PASS | "you’re sidestepping the technical challenges by hampering the collaborative editing experience." |
| 16 | Why a lock is too slow | Two editors can still start at once; merge or discard | 2 | PASS | "it’s always possible for two editors to begin editing a paragraph at the same time" / "merged ... or discarded." |
| 17 | Hiding the wait | Latency hiding: local copy feels faster | 1 | PASS | "creating the illusion of lower latency than reality." |
| 18 | Hiding the wait | System propagates edits so copies match | 1 | PASS | "the system propagates the changes to all users for consistency." |
| 19 | Hiding the wait (table) | Last write wins loses concurrent edits | 1 | PASS | "there’s a risk of data loss when there are concurrent changes in high-latency networks." |
| 20 | Hiding the wait (table) | Differential sync sends diffs; no reason, hard conflicts | 1 | PASS | "only tracks diffs, and not the reason behind a change. So conflict resolution might be difficult." |
| 21 | Hiding the wait (table) | Comparing versions cannot tell intent | 2 | PASS | "if you just compare versions, you can’t make sure that changes are merged in the way that an editor would expect." |
| 22 | Hiding the wait | Old Google Docs compared versions | 2 | PASS | "One approach taken by the old Google documents ... is to compare document versions." |
| 23 | Hiding the wait | The "quick brown fox" example | 2 | PASS | "John bolds the words brown fox. ... Luiz highlights the word fox and replaces it with the word dog." |
| 24 | Hiding the wait | Correct result and the ambiguous merges | 2 | PASS | "The correct way to merge ... is as The quick brown dog." |
| 25 | Store the edits, not the text | Document stored as changes in time order | 2 | FAIL→fixed | Was "The new Google Docs stores ..." (2010 fact in present tense). Now "In 2010, Google said that the new Google Docs stores ...". Quote: "a document is stored as a series of chronological changes." |
| 26 | Store the edits, not the text | Three kinds of edit | 3 | PASS | "inserting text, deleting text, and applying styles to a range of text." |
| 27 | Store the edits, not the text | Edits append to the log; display replays it | 3 | PASS | "they are appending their change to the end of the revision log. To display a document, we replay the revision log from the beginning." |
| 28 | Store the edits, not the text | Revision of each change lets Google merge | 2 | PASS | "Since we know the revision of each change, we can check what the editor saw" |
| 29 | Store the edits, not the text | The method is OT | 3 | PASS | "The algorithm that we use to handle these shifts is called operational transformation (OT)." |
| 30 | Store the edits, not the text | Newsletter calls OT optimistic; no locks or user action | 1 | PASS | "optimistic concurrency control technique" / "without locks or user interventions." |
| 31 | Store the edits, not the text | "EASY AS 123" example; Luiz types IT first | 3 | PASS | "He first inserts the I and the T at the beginning of the document" |
| 32 | Store the edits, not the text | Delete at 9 to 11 hits the wrong characters | 3 | PASS | "{DeleteText @9-11}" / "He deleted the wrong characters!" |
| 33 | Store the edits, not the text | Shift by 2 is the transformation | 3 | PASS | "shift the changes over by two characters to adjust for the IT" |
| 34 | Store the edits, not the text | Italic and red need no shift | 3 | PASS | "the range of text can be both red and italic simultaneously." |
| 35 | Store the edits, not the text | Correct OT means everyone converges | 3 | PASS | "If OT is implemented correctly, it guarantees that once all editors have received all changes, everyone will be looking at the same version" |
| 36 | Callout (note) | OT is hard to build | 1 | PASS | "it's complex to implement properly." |
| 37 | Callout (note) | Code must handle every pair of edit kinds | 3 | PASS | "must handle all of the different ways that InsertText, DeleteText, and ApplyStyle changes can be paired" |
| 38 | Who sends what, and when | Each side keeps some state (table: 4 client items, 3 server items) | 4 | PASS | "each client keeps track of four pieces of information" / "The server remembers three things" |
| 39 | Who sends what, and when | One change in flight; new typing waits for the ack | 4 | PASS | "Until Luiz recieves an acknowledgement of his first change, his client will keep all new changes in the pending list." |
| 40 | Who sends what, and when | John expects revision 2; server already has 2 | 4 | PASS | "a change that John believes should be Revision 2. But the server has already committed a Revision 2" |
| 41 | Who sends what, and when | Server transforms against changes since last sync; stores as 3 | 4 | PASS | "transform John’s sent change against all the changes that have been committed since the last time John synced" |
| 42 | Who sends what, and when | Google lists the gains | 4 | FAIL→fixed | Was "Google lists the gains". Now "In 2010, Google listed the gains". Quote: "The main advantages of this collaboration protocol are:" |
| 43 | Who sends what, and when (list) | No wait for own edits; network speed does not slow typing | 4 | PASS | "the speed or reliability of your network connection doesn’t influence how fast you can type." |
| 44 | Who sends what, and when (list) | Smallest description on the network | 4 | PASS | "always the bare minimum needed to describe what changed." |
| 45 | Who sends what, and when (list) | Server does not track client state | 4 | FAIL→fixed | Was "so the work does not grow as more editors join" (overstates). Now "so handling a change does not get more complex as more editors join." Quote: "the complexity of processing changes does not increase as you add more editors." |
| 46 | Who sends what, and when | Conflicts stopped; letter-by-letter edits | 4 | FAIL→fixed | Was "... the collaboration conflicts stopped. Editors now see ..." (2010 claim as today). Now "Google wrote that the move to this design ended the collaboration conflicts. Editors could then see ...". Quote: "there are no more collaboration conflicts and editors can see each other’s changes as they happen, character-by-character." |
| 47 | What a tester can learn | Callout says it is tutorial advice | – | PASS | "These test ideas are this tutorial's own advice, not claims from the sources." |

Open FAILs: 0
