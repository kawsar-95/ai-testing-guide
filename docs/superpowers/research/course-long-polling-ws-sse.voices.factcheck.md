# Voice fact-check: Long Polling, WebSockets, and SSE (round 1, 2026-10-22)

Page: `content/course/long-polling-ws-sse.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 8 `<Voices>` blocks. For each sentence in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, or a term that is translated in a confusing way is a FAIL. An omission is not a FAIL. A script checked that each `<Cite n>` in Layman and Bangla is also cited in Technical of the same block, that no panel has a Markdown heading, and that no `TODO` placeholder is left. The "Key words" section has no voices.

Checks of the file:

- No TODO placeholder is left. PASS.
- No heading in a Layman or Bangla panel. The `###` headings of Technical in "How it works" become bold labels. PASS.
- Cites: every `n` in Layman and Bangla is cited in Technical of the same block. PASS (8 blocks).
- Technical unchanged: `git diff -U0 content/course/long-polling-ws-sse.mdx | grep '^-' | grep -v '^---'` shows no removed line. PASS.
- Values checked in both voices: `101 Switching Protocols`, 0 to 5 seconds, "probably a few seconds", `204 No Content`, `408`, `504`, 30 seconds, about 6 per browser and domain, HTTP/2 default 100, about every 15 seconds, "one network transit" and "over three".
- The hedges ("may", "should", "probably", "generally") and the labels "(tutorial's view)" and "tutorial's own note" are kept in both voices.
- The table of "Trade-offs" becomes 3 lists in Layman and Bangla. Each cell is kept with its cite.

| # | Section | Voice | What I checked against Technical | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Plain HTTP; server cannot open or push [1]; polling wastes bandwidth [1]; 3 techniques differ in direction and recovery | PASS | Same claims. |
| 2 | In plain words | Bangla | Same claims | PASS | Same claims. |
| 3 | How it works | Layman | Long polling [1] [2]; WebSockets [2]; MDN backpressure [4]; WebSocket reconnection [2]; SSE [5] [3]; SSE reconnection and stop rules [3] [5] | PASS | Same claims, same cites, same tutorial's own notes. |
| 4 | How it works | Bangla | Same claims | PASS | Same claims, cites, hedges, and tutorial's own notes. Terms stay in English. |
| 5 | When you need it | Layman | Own advice; chat, live score, progress bar; direction question; SSE or long polling vs WebSocket | PASS | Same claims. |
| 6 | When you need it | Bangla | Same claims | PASS | Same claims. |
| 7 | Issues that RFC 6202 lists | Layman | RFC 6202 neither encourages nor discourages; 2011; 5 long polling points; 2 streaming points; security [1] | PASS | Same claims and numbers. |
| 8 | Issues that RFC 6202 lists | Bangla | Same claims | FAIL, fixed | Three problems: (a) "মাঝের প্রতিষ্ঠান (intermediary)" says "middle institution", which is wrong for a proxy; (b) "দুমুখী" is close to "দুমুখো" (two-faced) and the usual word is "দ্বিমুখী"; (c) "প্রধান পয়েন্টগুলো এই।" is an unfinished sentence. |
| 9 | Trade-offs | Layman | 7 rows for 3 techniques; "(tutorial's view)" cells; cites [1] [2] [3] [5] | PASS | Every cell has the same text and the same cite as Technical. |
| 10 | Trade-offs | Bangla | Same cells | FAIL, fixed | (a) "চুপচাপ connection ফেলে দেয়" reads as "silently drop connections". Technical says "drop quiet connections" (connections with no traffic). (b) "দুমুখী flow" has the same wording problem as in row 8. |
| 11 | A real-life example | Layman | Own example; banner, progress page, chat with a proctor; SSE for server-to-client; WebSocket for both ways | PASS | Same claims. |
| 12 | A real-life example | Bangla | Same claims | PASS | Same claims. |
| 13 | Common mistakes | Layman | 3 bullets with cites [2] [5] [1] | PASS | Same text as Technical. |
| 14 | Common mistakes | Bangla | Same bullets | PASS | Same meaning. |
| 15 | What a tester can check | Layman | 4 ideas, "tutorial's own advice, not a claim of the sources" | PASS | Same ideas. |
| 16 | What a tester can check | Bangla | Same ideas | FAIL, fixed | "server-কে প্লাবিত করে না" is a word-for-word copy of "does not flood the server" and is not natural Bangla for a server. |

FAILs found: 3 rows (8, 10, 16). Counted by problem there are 5 (intermediary, দুমুখী, unfinished sentence, চুপচাপ, প্লাবিত). All are fixed.

## Re-check

| # | Fix | Result |
|---|---|---|
| 8 | "**Intermediary (মাঝখানের অংশ)।**", "HTTP দ্বিমুখী যোগাযোগের", "প্রধান পয়েন্টগুলো নিচে দেওয়া হলো।" | PASS. The term stays in English, the word is standard, the sentence is complete. |
| 10 | "কিছু পুরোনো proxy নীরব (quiet) connection ফেলে দেয়।" and "Chat, game, দ্বিমুখী flow।" | PASS. "নীরব (quiet)" matches Technical. |
| 16 | "server-কে অতিরিক্ত request-এ ভরে দেয় না" | PASS. Natural wording, same meaning. |

Open FAILs: 0
