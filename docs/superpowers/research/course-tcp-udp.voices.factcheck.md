# Voice fact-check: TCP and UDP (round 2, Bangla term style, 2026-10-22)

Page: `content/course/tcp-udp.mdx`. I did not write this page or its voices.

Method: I read each `<Layman>` and `<Bangla>` panel next to the `<Technical>` panel of the same `##` section. A FAIL is a fact, number, name, example, hedge, or cite that Technical does not give; a wrong or unfinished Bangla sentence; a style break (তুমি, a common concept word left in English, an acronym or product name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. A script checked: (1) each Technical body is identical to the Technical body of the same section in `git show HEAD:content/course/tcp-udp.mdx` (all sections: identical); (2) the cite numbers of each voice panel are a subset of the Technical cites of the same block (all: equal sets); (3) no heading, no TODO, no তুমি in a voice panel; (4) the Latin words in each Bangla panel are only acronyms, protocol, product and OS names, code, or key terms in parentheses at first use. "Key words" has no voices and is unchanged.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | IP, TCP, UDP, port numbers, header fields [1][2] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same claims | FAIL, fixed | (a) "তারা কতটা প্রতিশ্রুতি দেয়, তাতে দুটির পার্থক্য।" had no verb (unfinished sentence). (b) "ক্ষতি মেরামত করে" for "repairs a loss" read as "repairs damage" and clashed with the checksum sentence on damaged data. |
| 3 | How it works | Layman | 3-way handshake (list instead of the diagram), window, congestion, timeout, FIN, TIME-WAIT, RST, UDP header [1][2] | PASS | The list gives the same X, Y, SYN, SYN+ACK, ACK as the diagram. |
| 4 | How it works | Bangla | Same claims | FAIL, fixed | "হলো কঠোর থামানো" for "the hard stop" is not natural Bangla ("কঠোর" means strict). |
| 5 | When you need it | Layman | TCP vs UDP use, name server, trivial file transfer, protocol number 17 [2] | PASS | |
| 6 | When you need it | Bangla | Same claims | PASS | |
| 7 | A real-life example | Layman | Quiz over TCP, video over UDP, "tutorial's own text" | PASS | |
| 8 | A real-life example | Bangla | Same | PASS | |
| 9 | Trade-offs | Layman | Table as 4 points; Overhead of TCP and last row are the tutorial's own [1][2] | PASS | Cites on the same cells as Technical. |
| 10 | Trade-offs | Bangla | Same | FAIL, fixed | "ওভারহেড বিন্দু" and "শেষ বিন্দু" use "বিন্দু" (a dot, or end point) for a list point. |
| 11 | Common mistakes | Layman | 4 mistakes [2], port and firewall bullet marked as the tutorial's own advice | PASS | The script flagged one line as 27 words; it is 3 sentences of at most 16 words. |
| 12 | Common mistakes | Bangla | Same | PASS | |
| 13 | What a tester can check | Layman | 5 test ideas, no cites | PASS | |
| 14 | What a tester can check | Bangla | Same, "আপনি" form | PASS | |

Found FAILs: 4 (row 2 has two, rows 4 and 10 one each). Fixed: 4.

## Re-check

| Row | Fixed text | Verdict |
|---|---|---|
| 2a | "দুটির পার্থক্য হলো তারা কতটা প্রতিশ্রুতি দেয়।" | PASS, full sentence, same meaning as "they differ in how much they promise" |
| 2b | "ডেটা আবার পাঠিয়ে হারানো অংশ ঠিক করে" | PASS, "sending the data again" repairs "a loss" |
| 4 | "হলো জোর করে থামিয়ে দেওয়া" | PASS, "the hard stop" |
| 10 | "TCP-র ওভারহেডের পয়েন্ট এবং শেষ পয়েন্টটি" | PASS |

Open FAILs: 0
