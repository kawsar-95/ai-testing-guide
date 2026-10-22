# Voice fact-check: The OSI Model (round 2, 2026-10-22)

Page: `content/course/osi.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks. For each block and voice, I compared the panel with the `<Technical>` panel of the same `##` section. A fact, number, name, example or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning, a wrong or misleading statement, a wrong or unfinished Bangla sentence, a mistranslated term, a break of the Bangla style (আপনি, concept words in Bangla letters, acronyms and names in English, digits as in Technical), and a long or not plain Layman sentence are also FAILs. An omission is not a FAIL. I did not re-check the sources. The Technical claims are checked in `course-osi.factcheck.md`. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

- No `TODO` placeholder is left.
- No heading in a Layman or Bangla panel.
- Each `<Cite n>` of a Layman and of a Bangla panel is cited by Technical of the same block, and the cites match one to one (6 of 6 blocks).
- Each `<Technical>` body is equal to the `<Technical>` body of the same section in `git show HEAD:content/course/osi.mdx`, and all text outside the `<Voices>` blocks is equal to HEAD. Technical is unchanged.
- Only Bangla panels differ from HEAD. Layman panels are the same as HEAD.
- Layman: no sentence over 25 words.
- Bangla: no `তুমি`. Digits are ASCII, as in Technical (checked again after the fixes). Latin words that remain are acronyms, protocol, product, place, command and identifier names, or the English key term in parentheses at first use.

Notes:

- Block 2 Layman and Bangla replace the text diagram and the table with lists. The rows and the "These rows have no source" note are the same, so there is no new fact.
- Wi-Fi stays English as a product and protocol name.

| # | Section | Voice | Round 1 | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same claims and cites [1]: OSI name, common base for planning standards, map of ideas not a recipe or a test, seven layers numbered 7 to 1, stack, shared boundary, peers. Short sentences. |
| 2 | In plain words | Bangla | FAIL | (a) "সিস্টেম জোড়ার স্ট্যান্ডার্ড" for "connecting systems" can read as a pair of systems. It should be সংযুক্ত করার. (b) "শেয়ার করা সীমানা" is a loose translation of "shared boundary" (যৌথ), and "তার প্রতিবেশীর" is singular where Technical has "its neighbours". (c) The numbers are in Bangla digits (৭, ১). Technical and the Bangla list of the next block use 7 and 1. |
| 3 | How it works | Layman | PASS | Text diagram turned into a list of the 7 layers, the per-layer list with cites [1], the Internet model with 4 layers [2], and the "tutorial's own simplification" list. The "These rows have no source" note is kept. No new fact. |
| 4 | How it works | Bangla | FAIL | (a) "RFC দুটি মডেলের মধ্যে শুধু একটি যোগ বলে": "যোগ" means addition. The Technical word is "link" (a relation between the models). (b) The intro line "উপরে ৭ থেকে নিচে ১" uses Bangla digits, but the list below it uses 7 and 1. The layer descriptions, cites and the table rows PASS. |
| 5 | When you need it | Layman | PASS | Identical to Technical. |
| 6 | When you need it | Bangla | PASS | Same four ideas: talk and search, "which layer?", wrong price high layer, page that never loads maybe low layer, shared language for bug reports. The hedge "may be" is kept (হতে পারে). |
| 7 | A real-life example | Layman | PASS | Same example. The five layer questions are a list, the steps are the same. No new fact. |
| 8 | A real-life example | Bangla | FAIL | "সে সেই লেয়ার টাইটেলে রেখে বাগ রিপোর্ট লেখে" is unfinished: it drops the word "name". Technical says the tester writes the bug report "with that layer in the title". The Bangla must say that the layer name is in the title. The five questions PASS. |
| 9 | Common mistakes | Layman | PASS | Four bullets restate Technical. Cites [2][1][2][2][2] match. The hedge "does not always sit in one neat box" is kept. |
| 10 | Common mistakes | Bangla | PASS | Same four mistakes. Telnet, FTP, SMTP, DNS, IP, TCP and UDP stay English. "ডেটাগ্রাম (datagram)" is a clear first use. The meaning of "copied, reordered, lost" is kept. |
| 11 | What a tester can check | Layman | PASS | Same four ideas and the "tutorial's own" note. Sentences are short. |
| 12 | What a tester can check | Bangla | PASS | Same four ideas and the "tutorial's own" note. "ট্রান্সপোর্টে ব্যর্থ: কানেকশন রিসেট হয়" is the same example as Technical. |

## Re-check

I fixed each FAIL by editing the Bangla panel only, and read the fixed rows again.

| Block | Section | Voice | Result | After the fix |
|---|---|---|---|---|
| 1 | In plain words | Bangla | PASS | "সিস্টেম সংযুক্ত করার স্ট্যান্ডার্ড", "যৌথ সীমানা দিয়ে পাশের লেয়ারগুলোর সঙ্গে", and "7 থেকে নিচে 1". |
| 2 | How it works | Bangla | PASS | "একটি সম্পর্ক বলে" and "উপরে 7 থেকে নিচে 1" (now the same as the list). |
| 4 | A real-life example | Bangla | PASS | "সে টাইটেলে সেই লেয়ারের নাম দিয়ে বাগ রিপোর্ট লেখে". |

After the fixes I ran the mechanical checks again (Technical equals HEAD, cites, headings, digits) and `node --test tests/voice-source.test.ts tests/course.test.ts` (29 tests, 0 fail).

Round 1 FAILs: 3. Fixed: 3.

Open FAILs: 0
