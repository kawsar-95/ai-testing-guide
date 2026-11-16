# Voices fact check: sdet / problem-solving

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / problem-solving (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Node.js has a built-in tool" adds "built-in", but Technical says only "module of Node.js". "A test fails if its code throws an error" drops "synchronous", so it claims more than Technical. "You need only a few tools" drops "Most of these problems", so it is stronger. Left out: "exact", and the cite on the "basics" sentence. |
| What it is | Bangla | PASS | Keeps "synchronous", "বেশিরভাগ" and the cites. Left out: nothing of note. |
| How it works | Layman | FAIL | Adds the example `(a, b) => a - b` to the Sorting bullet. The Technical panel of this section does not give it. Left out: `sort()` returns the same array, the negative/positive rule, UTF-16 (says "code units"), and graphemes, words, sentences (says "pieces a reader sees"). |
| How it works | Bangla | PASS | Matches Technical sentence by sentence. Left out: nothing of note. |
| Try it | Layman | FAIL | "`assert.equal` checks that two values are strictly equal" drops "From `node:assert/strict`", so it says more. "`assert.deepEqual` compares whole arrays" changes "deep equality" to arrays only. Left out: "in the folder", "break each solution", the `node:assert/strict` import. |
| Try it | Bangla | PASS | Keeps "`node:assert/strict` থেকে নেওয়া" and the cites. Left out: nothing of note. |
| How a tester uses it | Layman | FAIL | Repeats the Technical cites that fail in the facts table: `কি` length 2 with S12, limits with S6, and helpers with S8. Left out: "from the page or the API", "dates", "long response", "name", "type", "cuts", "keeps the suite honest". |
| How a tester uses it | Bangla | FAIL | The same unsupported cites (S12 for `কি`, S6, S8) are on the same facts. Left out: the same details as Layman. |
| Common mistakes | Layman | PASS | Every fact is in Technical. The uncited `[1, 10, 100, 9]` and `কি` → `িক` match Technical. Left out: UTF-16, "vowel sign first", "double space" and the tests-above sentence, "the caller still needs". |
| Common mistakes | Bangla | PASS | Matches Technical. Left out: nothing of note. |
| What a tester can check | Layman | FAIL | "Is the input still the same after the call?" drops "unless that is its job", so the advice is stronger. Left out: "in one sentence each", "one-item case", "not only `abc`", "by breaking the solution on purpose". |
| What a tester can check | Bangla | PASS | Keeps "কাজটাই যদি না হয়". Left out: nothing of note. |

Open FAILs: 6

FAILs in round 1: 6.

## Round 2 (2026-11-16)

### Voices fact check: sdet / problem-solving (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites match. Left out: "exact" (it says "clear"), that `node:test` is a module of Node.js, and "can occur" in a `Set`. It adds "one item at a time", which only restates "walks over". |
| What it is | Bangla | PASS | Same facts as the Technical panel. Left out: nothing of substance. |
| How it works | Layman | FAIL | The Counting bullet puts cite 4 on "Keep a `Map` from each word to how many times you saw it", and S4 does not support that (see row 10). Also left out: that `sort()` returns the same array, how the compare function works (subtracts `b` from `a`) and the negative and positive results, that `toSorted()` returns a new array, "UTF-16", and that `Intl.Segmenter` gives graphemes, words or sentences. "The pieces a reader sees" is vaguer than the Technical wording. |
| How it works | Bangla | FAIL | The Counting bullet puts cite 4 on the `Map` item-to-count claim, and S4 does not support that. The other bullets match the Technical panel. Nothing is left out. |
| Try it | Layman | PASS | The code is the same. Left out: "in the folder", "next to it", "each solution" (it says "a solution"), and the reasons for the traps output, which it gives more briefly. No new fact. |
| Try it | Bangla | PASS | Same facts as the Technical panel, and I could read all the sentences. Nothing is left out. |
| How a tester uses it | Layman | FAIL | The Count bullet puts cite 4 on "A `Map` of counts per status turns a long answer into a short summary", and S4 does not support that. Also left out: "from the page or the API", "or per type", "UTF-16", and "cut". |
| How a tester uses it | Bangla | FAIL | The Count bullet puts cite 4 on the `Map`-of-counts claim, and S4 does not support that. The other bullets match the Technical panel. Nothing is left out. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel, and the cites match. Left out: "UTF-16", "vowel sign first", "for a character limit", and the detail that the tests above check an empty list and a double space. |
| Common mistakes | Bangla | PASS | Same facts as the Technical panel. Nothing is left out. |
| What a tester can check | Layman | PASS | It is advice and gives no new fact. Left out: "in one sentence each", the one-item case, "not only `abc`", and "by breaking the solution on purpose". |
| What a tester can check | Bangla | PASS | It is advice and gives no new fact. I could read all the sentences. Nothing is left out. |

Open FAILs: 4

Not checked: I did not check the Bangla sentences word by word against the Technical panel. I judged them by meaning. The `node --test` command line is cut off in S8, so only the file-pattern line and the `--watch` example back it.

FAILs in round 2: 4.

## Round 3 (2026-11-16)

### Voices fact check: sdet / problem-solving (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites match. "One item at a time" is a plain restatement of "walks over". Left out: "exact" (the text says "clear"), that the proof is a test, and that the `for...of` and `Set` facts are about the language. |
| What it is | Bangla | PASS | Same facts, same limits, same cites. Left out: the "most of these problems need only a few tools of the language" detail is only partly kept. |
| How it works | Layman | PASS | Facts and cites match the Technical panel. Left out: that `sort()` returns the same array, UTF-16, what the compare function subtracts, the negative/positive rule, sentences and words for `Intl.Segmenter`, and how `firstDuplicate()` adds items to the `Set`. "Sorts as text" and "pieces a reader sees" are plain-word restatements. "Leaves the original alone" restates "copying version". |
| How it works | Bangla | PASS | Matches the Technical panel sentence by sentence, with the same cites. Nothing of substance left out. |
| Try it | Layman | PASS | Same facts as the Technical panel. Code is the same. "A test that can never fail proves nothing" is a slight rewording of "never fails". Left out: "in the folder", "next to it", "the default sort compared strings" as a reason, and "for example" in the break-it advice. |
| Try it | Bangla | PASS | Matches the Technical panel, including the reasons for the trap output and the same cites. |
| How a tester uses it | Layman | PASS | Facts and cites match. Left out: "from the page or the API", "types" of a response, "long response", "a cut" in the Segmenter advice, and the `toSorted()` cite detail "two compared". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel, including "কাটাছেঁড়া" for "a cut". Cites match. |
| Common mistakes | Layman | PASS | Facts and cites match. Left out: "may not match the number of characters" is shortened to "may not match what you see". Also left out: the vowel sign first, and "an empty input" is narrowed to "an empty list". |
| Common mistakes | Bangla | PASS | Matches the Technical panel, with the same cites and the same limits ("না-ও মিলতে পারে" keeps "may"). |
| What a tester can check | Layman | PASS | Same advice as the Technical callout. Left out: "one sentence each", "the one-item case", "not only `abc`", and "by breaking the solution on purpose". |
| What a tester can check | Bangla | PASS | Same advice as the Technical callout, including the "unless that is its job" limit. Nothing of substance left out. |

Open FAILs: 0

I did not run the writing-style skill for this reply, because the exact output shape you set left no room for it. The Bangla panels were judged from my own reading, and I found no sentence I could not follow.

FAILs in round 3: 0.

Open FAILs: 0
