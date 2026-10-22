# Voice fact-check: Forward and Reverse Proxies (round 2, 2026-10-22)

Page: `content/course/proxy.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning, a wrong or misleading statement, a wrong or unfinished Bangla sentence, a mistranslated term, a break of the Bangla style (আপনি, concept words in Bangla letters, acronyms and names in English, digits as in Technical), and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are checked in `course-proxy.factcheck.md`. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` of a Layman and of a Bangla panel is cited by Technical of the same block, and the cites match one to one (6 of 6 blocks).
- Each `<Technical>` body is equal to the `<Technical>` body of the same section in `git show HEAD:content/course/proxy.mdx`, and all text outside the `<Voices>` blocks is equal to HEAD. Technical is unchanged.
- Only Bangla panels differ from HEAD. Layman panels are the same as HEAD.
- Layman: no sentence over 25 words.
- Bangla: no `তুমি`. Digits are ASCII, as in Technical (checked again after the fixes). Latin words that remain are acronyms, protocol, product, place, command and identifier names, or the English key term in parentheses at first use.

Notes:

- Block 1 Layman and Bangla replace the text diagram with a two-line list. The path is the same, so there is no new fact.

| # | Section | Voice | Round 1 | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same definition, the two kinds, the gateway name, the tunnel, and the path of a request as a list in place of the text diagram. Cites [2][1] match. |
| 2 | In plain words | Bangla | PASS | Same claims and cites. The English term is in parentheses at first use (proxy, forward proxy, reverse proxy, gateway, tunnel). Bangla letters for client, server, request, response, cache. HTTP and TLS stay English. |
| 3 | When you need it | Layman | PASS | Same four jobs of a reverse proxy and the forward proxy use. Cites [5][1] match. |
| 4 | When you need it | Bangla | PASS | Same jobs and cites. "সদর দরজা" is "front door". Natural Bangla. |
| 5 | How it works | Layman | PASS | Same NGINX facts (proxy_pass, Host and Connection, proxy_set_header, buffering), X-Forwarded-For (de-facto, not formal), Forwarded and its parts, Via. The code block becomes one sentence with the same example. "If every party is well behaved" is kept. |
| 6 | How it works | Bangla | PASS | Same facts. Commands, headers and directives stay in code style. "সবচেয়ে বাঁয়ের" is leftmost and "সাম্প্রতিকতম" is most recent. The hedge "if every party is well behaved" is kept (যদি প্রতিটি পক্ষ নিয়ম মেনে চলে). |
| 7 | A real-life example | Layman | PASS | Same example: two app servers, 504 Gateway Timeout and 502 Bad Gateway, with the meanings [1]. |
| 8 | A real-life example | Bangla | PASS | Same example, same status codes and meanings. Cite [1]. |
| 9 | Common mistakes | Layman | PASS | Four bullets restate Technical. The cite is [4] and the hedge "may be spoofed" is kept. |
| 10 | Common mistakes | Bangla | PASS | Same four mistakes. "স্পুফ করা হতে পারে" keeps "may be spoofed". Cite [4]. |
| 11 | What a tester can check | Layman | PASS | Same six ideas and the "not from a source" note. "usually means" is kept. |
| 12 | What a tester can check | Bangla | FAIL | "প্রক্সির ইউজারদের অন্যটিতে পাঠানো উচিত" reads as "the proxy's users should send to the other". The subject is wrong: Technical says the proxy should send users to the other app server. Also "অ্যাপ সার্ভারের প্রত্যাখ্যান করা উচিত" is the same unclear pattern for "It should refuse". The other five bullets PASS. |

## Re-check

I fixed each FAIL by editing the Bangla panel only, and read the fixed rows again.

| Block | Section | Voice | Result | After the fix |
|---|---|---|---|---|
| 6 | What a tester can check | Bangla | PASS | "প্রক্সির উচিত ইউজারদের অন্যটিতে পাঠানো" and "অ্যাপ সার্ভারের উচিত প্রত্যাখ্যান করা". |

After the fixes I ran the mechanical checks again (Technical equals HEAD, cites, headings, digits) and `node --test tests/voice-source.test.ts tests/course.test.ts` (29 tests, 0 fail).

Round 1 FAILs: 1. Fixed: 1.

Open FAILs: 0
