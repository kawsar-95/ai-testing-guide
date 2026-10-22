# Voice fact-check: Forward and Reverse Proxies (round 1, 2026-10-22)

Page: `content/course/proxy.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, a confusing translation, and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are for the fact-check of the page.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` in Layman and Bangla is cited by Technical of the same block (6 of 6 blocks).
- `git diff -U0 content/course/proxy.mdx | grep '^-' | grep -v '^---'` prints nothing. Technical is unchanged.
- No Layman sentence is longer than 28 words.

Notes:

- Section 1: Layman and Bangla replace the text diagram with two bullets. These bullets came right after the list of the two kinds, with only a blank line between. Markdown joins them into one list, so the diagram bullets looked like a third and a fourth kind of proxy. See rows 1 and 2.
- Section 2: Layman and Bangla replace the `X-Forwarded-For` code block with one sentence ("For example, ..."). The same example value, the same meaning of left and right. PASS.
- Section 6: no callout in Layman and Bangla. They keep the line "not from a source". PASS.

| # | Section | Voice | Claim | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Proxy is a program between two sides; forward proxy; reverse proxy is a gateway [2][1]; tunnel [1]; diagram as 2 bullets | FAIL (first check) | The facts are right. But the 2 diagram bullets join the list of the two kinds and read as 2 more kinds. This is a misleading structure. |
| 2 | In plain words | Bangla | Same | FAIL (first check) | Same list-merge problem as row 1. The Bangla text is right. |
| 3 | When you need it | Layman | Reverse proxy jobs (load, pass requests, hide services, cache) [5][1]; forward proxy for client-side control | PASS | Same 4 jobs and the same example. |
| 4 | When you need it | Bangla | Same | PASS | Meaning is right. |
| 5 | How it works | Layman | NGINX flow, `proxy_pass`, default header change, buffering [5]; the last proxy address problem, `X-Forwarded-For` as de-facto standard [4]; `Forwarded` parts [3]; leftmost and rightmost address if all parties behave [4]; `Via` [1] | PASS | Same text. The condition "if every party is well behaved" is kept. |
| 6 | How it works | Bangla | Same | PASS | Header and directive names stay in English. "সাম্প্রতিকতম proxy" = most recent proxy. |
| 7 | A real-life example | Layman | Two app servers behind a reverse proxy; 504 means no timely answer; 502 means an invalid response [1] | PASS | Same example and codes. |
| 8 | A real-life example | Bangla | Same | PASS | "অবৈধ response" = invalid response. |
| 9 | Common mistakes | Layman | 4 mistakes about `X-Forwarded-For` [4] | PASS | Same claims. "may be spoofed" is kept. |
| 10 | Common mistakes | Bangla | Same | PASS | "spoof করা হতে পারে" keeps the hedge. |
| 11 | What a tester can check | Layman | 6 test ideas, "tutorial's own, not from a source" | PASS | Same 6 ideas. |
| 12 | What a tester can check | Bangla | Same | FAIL (first check) | Two bullets have a grammar slip in the "should" form. "সে refuse করা উচিত" has an unclear subject ("সে" for the app server). "proxy user-দের অন্যটিতে পাঠানো উচিত" has no "-র" after proxy, so it reads "users should send". The meaning is clear, but the sentences are not correct Bangla. |

## Re-check

I fixed 4 FAILs (rows 1, 2, and the two bullets of row 12). I edited only Layman and Bangla panels.

| # | Fix | Re-check |
|---|---|---|
| 1 | Layman: the line "The path of a request:" is added before the 2 diagram bullets. | PASS. The bullets are a separate list now. The line has no fact. |
| 2 | Bangla: the line "একটি request-এর পথ:" is added before the 2 diagram bullets. | PASS. Same as row 1. |
| 12a | Bangla: "app server-এর refuse করা উচিত, বা একই security ফল দেওয়া উচিত।" | PASS. Matches "It should refuse, or give the same security result." |
| 12b | Bangla: "proxy-র user-দের অন্যটিতে পাঠানো উচিত" | PASS. Matches "The proxy should send users to the other one". |

After the edits: no heading in Layman or Bangla, no `TODO`, and every `<Cite n>` still matches Technical. Technical is unchanged (the `git diff` check prints nothing).

FAILs found: 4. Fixed: 4.

Open FAILs: 0
