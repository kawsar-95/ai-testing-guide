# Voice fact-check: Long Polling, WebSockets, and SSE (round 2, 2026-10-22)

Page: `content/course/long-polling-ws-sse.mdx`. I did not write the voices. This report replaces the old one. The Bangla panels were rewritten in the course term style.

Method: I read the 8 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared every claim, number, name, example, and `<Cite n>` with the `<Technical>` panel of the same block. I checked the Bangla for meaning, grammar, address form (আপনি), concept words in Bangla letters, and acronym, protocol, header, and code names in English. I counted the words of each Layman sentence (limit 25). I did not re-check the sources: the Technical claims are in `course-long-polling-ws-sse.factcheck.md`. The "Key words" section has no voices.

Structure checks:

- `<Technical>` unchanged: each non-blank line of the 8 `<Technical>` bodies is also in `git show HEAD:content/course/long-polling-ws-sse.mdx`. No line changed.
- No TODO placeholder. No heading in a Layman or Bangla panel. The `###` headings of the "How it works" Technical panel become bold labels. No `তুমি` form.
- Cites: every `<Cite n>` in a Layman or Bangla panel is also cited by the Technical panel of the same block (n is 1 to 5). In "Trade-offs", the cites of each table cell stay with the same fact.
- Numbers kept: 101, 204, 408, 504, 200, 0 to 5 seconds, 30 seconds, about 6 per browser and domain, default 100 on HTTP/2, about every 15 seconds, 2011, "over three" network transits.
- Hedges kept: "may", "probably a few seconds", "generally safer", "the sources on this page describe no built-in way", and every "tutorial's own" or "(tutorial's view)" label.
- The Technical table of "Trade-offs" becomes 3 lists in Layman and Bangla: 7 rows for each of the 3 techniques, with no row lost.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, cite 1. |
| 2 | In plain words | Bangla | PASS | "পোলিং (polling)" at first use. Same facts. |
| 3 | How it works | Layman | PASS | Long polling, WebSockets (including backpressure and reconnection), and SSE (including the two stop signals): same facts and cites. Longest sentence is 24 words. |
| 4 | How it works | Bangla | PASS | Same facts. Terms such as "ফ্রেম (frame)", "কিপঅ্যালাইভ (keepalive)", "ব্যাকপ্রেশার (backpressure)" have the English term at first use. Headers, status codes, `EventSource`, and `close()` stay in English. "অবশ্যই ... করতে হবে এবং ... উচিত" keeps must and should. |
| 5 | When you need it | Layman | PASS | Same advice. It says the advice is the tutorial's own. |
| 6 | When you need it | Bangla | PASS | Same advice and examples. |
| 7 | Issues that RFC 6202 lists | Layman | PASS | Same 5 long polling issues, 2 streaming issues, and the security point. Same cites. |
| 8 | Issues that RFC 6202 lists | Bangla | PASS | Same facts and numbers. "ইন্টারমিডিয়ারি (মাঝখানের অংশ)" explains the term. |
| 9 | Trade-offs | Layman | PASS | All 21 points are the same as the table cells, and the "(tutorial's view)" marks are kept. |
| 10 | Trade-offs | Bangla | PASS | Same. "(negotiate)" and "(quiet)" are given for unclear words. |
| 11 | A real-life example | Layman | PASS | Same example (banner, progress page, chat with a proctor) and the same choice of SSE and WebSocket. |
| 12 | A real-life example | Bangla | PASS | Same example. |
| 13 | Common mistakes | Layman | PASS | 3 bullets, same cites (2, 5, 1). |
| 14 | Common mistakes | Bangla | PASS | 3 bullets, same. |
| 15 | What a tester can check | Layman | PASS | 4 ideas, same. It says the advice is the tutorial's own. |
| 16 | What a tester can check | Bangla | PASS | 4 ideas, same. "আইডল (idle)" at first use. |

Longest Layman sentence: 24 words. All Bangla sentences are finished and in the "আপনি" form where they address the reader.

Found: 0 FAILs. Fixed: 0. No edit was needed.

Open FAILs: 0
