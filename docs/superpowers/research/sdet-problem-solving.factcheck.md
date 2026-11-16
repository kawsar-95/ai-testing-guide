# Fact check: sdet / problem-solving

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / problem-solving (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: small problems solved in JavaScript and proved with node:test | none | N/A | Describes the page. |
| 2 | Intro: test code is full of small problems; the page solves four, with two traps | none | N/A | Describes the page. |
| 3 | What it is: problem solving means turning a small task into code and proving it with a test | none | N/A | Definition of the page's own term. |
| 4 | The `node:test` module of Node.js creates JavaScript tests | S8 | PASS | "The node:test module facilitates the creation of JavaScript tests." |
| 5 | A synchronous test fails if it throws an exception, and passes otherwise | S8 | PASS | "A synchronous function that is considered failing if it throws an exception," and "This test passes because it does not throw an exception." |
| 6 | A `for...of` loop walks over an array, a `Map`, or a `Set` | S11 | PASS | "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, ..." |
| 7 | A `Map` holds key-value pairs | S4 | PASS | "The Map object holds key-value pairs and remembers the original insertion order of the keys." |
| 8 | A value can occur in a `Set` only once | S3 | PASS | "A value in the set may only occur once; it is unique in the set's collection." |
| 9 | The language basics are on JavaScript for Testers | none | N/A | Describes the page. |
| 10 | Counting: keep a `Map` from each item to its count | S4 | PASS | "The Map object holds key-value pairs". The source gives only key-value pairs. The count is the page's own technique. |
| 11 | Lower-case the text first with `toLowerCase()`, so `Test` and `test` count as one word | S10 | PASS | "returns this string converted to lower case." |
| 12 | Duplicates: a value occurs in a `Set` only once | S3 | PASS | "A value in the set may only occur once" |
| 13 | Walk the list; the first item already in the set is the first duplicate | none | N/A | Describes the page's own algorithm and example code. |
| 14 | `sort()` sorts the array in place and returns the same array | S1 | PASS | "sorts the elements of an array in place and returns the reference to the same array, now sorted." |
| 15 | By default `sort()` converts the elements to strings and compares those | S1 | PASS | "built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values." |
| 16 | Compare function: a negative result puts `a` before `b`, a positive one puts `a` after `b` | S1 | PASS | "A negative value indicates that a should come before b. A positive value indicates that a should come after b." |
| 17 | `toSorted()` is the copying version: it returns a new, sorted array | S2 | PASS | "is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order." |
| 18 | `reverse()` reverses an array in place | S7 | PASS | "reverses an array in place and returns the reference to the same array" |
| 19 | `length` returns the number of UTF-16 code units, not the number of characters | S12 | PASS | "contains the length of the string in UTF-16 code units." and "Since length counts code units instead of characters" |
| 20 | `split("")` splits by UTF-16 code units, not by the characters a reader sees | S5 | PASS | "not split by user-perceived characters (grapheme clusters) or unicode characters (code points), but by UTF-16 code units." |
| 21 | `Intl.Segmenter` splits text into graphemes, words, or sentences | S6 | PASS | "get meaningful items (graphemes, words or sentences) from a string." |
| 22 | Try it: run `node --test` in the folder | S8 | PASS | "The Node.js test runner can be invoked from the command line by passing the --test flag: node --test" |
| 23 | It runs files whose names end in `.test.mjs` | S8 | PASS | "By default, Node.js will run all files matching these patterns: **/*.test.{cjs,mjs,js}" |
| 24 | All four tests pass | none | N/A | Reports what the page's own example code prints. |
| 25 | From `node:assert/strict`, `assert.equal` is strict equality | S9 | PASS | "Strict assertion mode An alias of assert.strictEqual()." and "In strict assertion mode, non-strict methods behave like their corresponding strict methods" |
| 26 | `assert.deepEqual` tests deep equality | S9 | PASS | "Tests for deep equality between the actual and expected parameters." |
| 27 | Break each solution on purpose; a test that never fails proves nothing | none | N/A | Advice. |
| 28 | Tester: sort a copy with `toSorted()` and compare | S2 | PASS | "is the copying version of the sort() method." The comparison step is the page's advice. |
| 29 | Use a compare function for numbers and dates | S1 | FAIL | S1 has no word "date". It says only "To compare numbers instead of strings, the compare function can subtract b". Fix: say numbers only. |
| 30 | Put the ids in a `Set` | S3 | PASS | "Use a set to ensure the uniqueness of a list of values" |
| 31 | If the set is smaller than the list, an id came back twice | none | N/A | Reasoning from the page's own advice. |
| 32 | A `Map` of counts per status or type turns a long response into a short summary | S4 | PASS | "The Map object holds key-value pairs". The source supports only key-value pairs. The summary use is the page's own advice. |
| 33 | `কি` has a `length` of 2, but a reader sees one letter, because `length` counts code units | S12 | FAIL | S12 has no Bangla text and no `কি` example. It says only "length counts code units instead of characters". Fix: drop the "length of 2" example, or state only that `length` counts code units. |
| 34 | Check that limits, counters, and cuts work on what the user sees | S6 | FAIL | S6 says only that Segmenter gets "meaningful items (graphemes, words or sentences)". It does not say to check limits or counters. Fix: remove the cite, or write "Intl.Segmenter splits text into graphemes". |
| 35 | A small `node:test` file for each helper keeps the test suite honest | S8 | FAIL | S8 says only "The node:test module facilitates the creation of JavaScript tests." Fix: mark this as the tutorial's advice and remove the cite. |
| 36 | The default sort compares strings | S1 | PASS | "built upon converting the elements into strings, then comparing" |
| 37 | `[10, 9, 1, 100].sort()` gives `[1, 10, 100, 9]` | none | FAIL | This is a tool result with no cite. The page's own code does not run it. S1 supports the idea: "because numbers are converted to strings, "80" comes before "9"". Fix: cite S1 and use S1's example. |
| 38 | `sort()` and `reverse()` change the array in place | S1, S7 | PASS | S1: "the array is sorted in place, and no copy is made." S7: "the array is reversed in place, and no copy is made." |
| 39 | Use `toSorted()` when the caller still needs the original | S2 | PASS | "is the copying version of the sort() method. It returns a new array" |
| 40 | `split("")` splits by UTF-16 code units, not by what a reader sees | S5 | PASS | "not split by user-perceived characters (grapheme clusters) ... but by UTF-16 code units." |
| 41 | Reversed with `split("")`, `কি` becomes `িক`, vowel sign first | none | FAIL | No source has this, and the page's code does not run it. S5 says only that splitting "destroys surrogate pairs". Fix: cite S5 and say only that it splits by code units, or remove the example. |
| 42 | The value of `length` may not match the number of characters | S12 | PASS | "Since length counts code units instead of characters" |
| 43 | Give each problem an empty input, a single item, and a repeated item | none | N/A | Advice. |
| 44 | The tests above check an empty list for `firstDuplicate` and a double space for `countWords` | none | N/A | Describes the page's own example code. |
| 45 | What a tester can check: the list is the tutorial's own advice | none | N/A | Callout with no cites. |
| K1 | `Map`: key-value pairs; good for counting | Key words | PASS | Technical, How it works: "Keep a `Map` from each item to its count"; What it is: "A `Map` holds key-value pairs". |
| K2 | `Set`: each value occurs once; good for duplicates | Key words | PASS | Technical, How it works: "Duplicates. A value occurs in a `Set` only once". |
| K3 | `sort()`: sorts in place; by default compares elements as strings | Key words | PASS | Technical: "`sort()` sorts the array in place" and "By default it converts the elements to strings and compares those". |
| K4 | Compare function: negative puts `a` first, positive puts `b` first | Key words | PASS | Technical: "a negative result puts `a` before `b`, and a positive one puts `a` after `b`". |
| K5 | `toSorted()`: returns a sorted copy and leaves the original unchanged | Key words | PASS | Technical: "`toSorted()` is the copying version: it returns a new, sorted array" and "Use `toSorted()` when the caller still needs the original". |
| K6 | `for...of`: a loop over the items of an array, a `Map`, or a `Set` | Key words | PASS | Technical: "A `for...of` loop walks over an array, a `Map`, or a `Set`". |
| K7 | Code unit: a 16-bit piece of a JavaScript string; `length` counts these | Key words | FAIL | No Technical panel says "16-bit". They say only "UTF-16 code units". Fix: write "A UTF-16 code unit; `length` counts these." |
| K8 | Grapheme: one character as a reader sees it, such as `কি` | Key words | PASS | Technical: "`Intl.Segmenter` splits text into graphemes", "not by the characters that a reader sees", and "a reader sees one letter". |
| K9 | `Intl.Segmenter`: splits text into graphemes, words, or sentences | Key words | PASS | Technical: "`Intl.Segmenter` splits text into graphemes, words, or sentences". |
| K10 | `node:test`: the test runner of Node.js; run with `node --test` | Key words | PASS | Technical: "The `node:test` module of Node.js creates JavaScript tests" and "Run `node --test` in the folder". |
| K11 | Edge case: an input at the limits, such as an empty list or one item | Key words | FAIL | No Technical panel defines or names "edge case". The nearest text is "an empty input, a single item, and a repeated item". Fix: add a Technical sentence, or remove the row. |

Open FAILs: 7

FAILs in round 1: 8.

## Round 2 (2026-11-16)

### Fact check: sdet / problem-solving (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: small problems that build logic for test code, solved in JavaScript and proved with node:test | none | N/A | Describes the page itself. |
| 2 | Intro: test code is full of small problems; the page solves four, each with a test; it shows two traps | none | N/A | Describes the page itself. |
| 3 | What it is: problem solving means turning a small, exact task into code and proving it with a test | none | N/A | Definition of the page's own term, not a tool fact. |
| 4 | The `node:test` module of Node.js creates JavaScript tests | S8 | PASS | "The node:test module facilitates the creation of JavaScript tests." |
| 5 | A synchronous test fails if it throws an exception, and passes otherwise | S8 | PASS | "A synchronous function that is considered failing if it throws an exception, and is considered passing otherwise." |
| 6 | A `for...of` loop walks over an array, a `Map`, or a `Set` | S11 | PASS | "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)" |
| 7 | A `Map` holds key-value pairs | S4 | PASS | "The Map object holds key-value pairs and remembers the original insertion order of the keys." |
| 8 | A value can occur in a `Set` only once | S3 | PASS | "A value in the set may only occur once; it is unique in the set's collection." |
| 9 | The language basics are on JavaScript for Testers; this page uses them | none | N/A | Describes the page itself. |
| 10 | Counting: keep a `Map` from each item to its count | S4 | FAIL | S4 says only "The Map object holds key-value pairs". It does not mention counting. Fix: "A `Map` holds key-value pairs, so it can store an item as the key and a number as the value." Do not claim it is for counting. |
| 11 | Lower-case the text first with `toLowerCase()` so `Test` and `test` count as one word | S10 | PASS | "The toLowerCase() method of String values returns this string converted to lower case." |
| 12 | Duplicates: a value occurs in a `Set` only once | S3 | PASS | "A value in the set may only occur once" |
| 13 | Duplicates: walk the list, and the first item already in the set is the first duplicate | none | FAIL | A claim about how to use `Set`, with no cite. Fix: add a cite that supports it, or cut the sentence down to what S3 says ("A value in the set may only occur once"). |
| 14 | `sort()` sorts the array in place and returns the same array | S1 | PASS | "sorts the elements of an array in place and returns the reference to the same array, now sorted." |
| 15 | By default `sort()` converts the elements to strings and compares those | S1 | PASS | "The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values." |
| 16 | For numbers, pass a compare function such as `(a, b) => a - b`, which subtracts `b` from `a` | S1 | PASS | "To compare numbers instead of strings, the compare function can subtract b from a." |
| 17 | A negative result puts `a` before `b`, a positive one puts `a` after `b` | S1 | PASS | "A negative value indicates that a should come before b. A positive value indicates that a should come after b." |
| 18 | `toSorted()` is the copying version and returns a new sorted array | S2 | PASS | "The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order." |
| 19 | `reverse()` reverses an array in place | S7 | PASS | "The reverse() method of Array instances reverses an array in place" |
| 20 | `length` returns the number of UTF-16 code units, not the number of characters | S12 | PASS | "The length data property of a String value contains the length of the string in UTF-16 code units." and "Since length counts code units instead of characters" |
| 21 | `split("")` splits by UTF-16 code units, not by the characters a reader sees | S5 | PASS | "the string is not split by user-perceived characters (grapheme clusters) or unicode characters (code points), but by UTF-16 code units." |
| 22 | `Intl.Segmenter` splits text into graphemes, words, or sentences | S6 | PASS | "enabling you to get meaningful items (graphemes, words or sentences) from a string." |
| 23 | Try it: run `node --test` in the folder | S8 | PASS | "The Node.js test runner can be invoked from the command line by passing the ..." and "node --test --watch" (the full command line is cut off in the file). |
| 24 | It runs files whose names end in `.test.mjs` | S8 | PASS | "By default, Node.js will run all files matching these patterns: **/*.test.{cjs,mjs,js}" |
| 25 | All four tests pass | none | N/A | Reports what the page's own example code does. |
| 26 | From `node:assert/strict`, `assert.equal` is strict equality | S9 | PASS | "Strict assertion mode An alias of assert.strictEqual()." and "Tests strict equality between the actual and expected parameters" |
| 27 | `assert.deepEqual` tests deep equality | S9 | PASS | "Tests for deep equality between the actual and expected parameters." |
| 28 | Traps file prints `[ 1, 10, 100, 9 ]`, `2`, `িক`, with the reasons given | none | N/A | Reports what the page's own example code prints. |
| 29 | Break each solution on purpose; a test that never fails proves nothing | none | N/A | Advice. |
| 30 | Tester: sort a copy with `toSorted()` and compare the two | S2 | PASS | "is the copying version of the sort() method. It returns a new array" |
| 31 | Tester: use a compare function for numbers | S1 | PASS | "To compare numbers instead of strings, the compare function can subtract b from a." |
| 32 | Tester: put the ids in a `Set` | S3 | PASS | "Set objects are collections of values. A value in the set may only occur once" |
| 33 | Tester: if the set is smaller than the list, an id came back twice | none | FAIL | A claim about how to use `Set`, with no cite. Fix: add a cite that supports it, or cut the sentence. |
| 34 | Tester: a `Map` of counts per status or type turns a long response into a short summary | S4 | FAIL | S4 says only "The Map object holds key-value pairs". It says nothing about counts or summaries. Fix: cut the claim down to "A `Map` holds key-value pairs", or cite a source about counting. |
| 35 | Tester: `length` counts code units, not the characters a reader sees | S12 | PASS | "Since length counts code units instead of characters" |
| 36 | Tester: the traps file printed `2` for `কি` | none | N/A | Reports what the page's own example code prints. |
| 37 | Tester: `Intl.Segmenter` splits text into graphemes | S6 | PASS | "meaningful items (graphemes, words or sentences)" |
| 38 | Tester: use it when a limit, counter, or cut must follow what the user sees | none | N/A | Advice. |
| 39 | Tester: test helpers are code too; give each a small test file | none | N/A | Advice. |
| 40 | Tester: the `node:test` module creates JavaScript tests | S8 | PASS | "The node:test module facilitates the creation of JavaScript tests." |
| 41 | Mistakes: the default sort compares strings | S1 | PASS | "converting the elements into strings, then comparing their sequences of UTF-16 code unit values." |
| 42 | Mistakes: the traps file printed `[ 1, 10, 100, 9 ]` | none | N/A | Reports what the page's own example code prints. |
| 43 | Mistakes: pass a compare function such as `(a, b) => a - b` | S1 | PASS | "(a, b) => a - b sorts numbers in ascending order." |
| 44 | Mistakes: `sort()` and `reverse()` change the array in place | S1, S7 | PASS | S1: "the array is sorted in place, and no copy is made." S7: "the array is reversed in place, and no copy is made." |
| 45 | Mistakes: use `toSorted()` when the caller still needs the original | S2 | PASS | "is the copying version of the sort() method. It returns a new array" |
| 46 | Mistakes: `split("")` splits by UTF-16 code units, not by what a reader sees | S5 | PASS | "not split by user-perceived characters (grapheme clusters) ... but by UTF-16 code units." |
| 47 | Mistakes: the traps file turned `কি` into `িক` | none | N/A | Reports what the page's own example code prints. |
| 48 | Mistakes: the value of `length` may not match the number of characters | S12 | PASS | "Since length counts code units instead of characters" |
| 49 | Mistakes: give each problem edge cases (empty, single, repeated); the tests above check an empty list and a double space | none | N/A | Advice, plus a description of the page's own tests. |
| 50 | "What a tester can check" callout | none | N/A | Callout marked as the tutorial's own advice. |
| K1 | `Map`: key-value pairs; good for counting | Key words | PASS | Technical, How it works: "Keep a `Map` from each item to its count". The cited source for that line does not back it (see row 10). |
| K2 | `Set`: each value occurs once; good for duplicates | Key words | PASS | Technical, How it works: "A value occurs in a `Set` only once. Walk the list, and the first item that is already in the set is the first duplicate." |
| K3 | `sort()`: sorts in place; by default compares elements as strings | Key words | PASS | Technical: "`sort()` sorts the array in place ... By default it converts the elements to strings and compares those" |
| K4 | Compare function `(a, b) => a - b`: negative puts `a` first, positive puts `b` first | Key words | PASS | Technical: "A negative result puts `a` before `b`, and a positive one puts `a` after `b`" |
| K5 | `toSorted()`: sorted copy, original unchanged | Key words | PASS | Technical: "`toSorted()` is the copying version: it returns a new, sorted array" and "Use `toSorted()` when the caller still needs the original" |
| K6 | `for...of`: loop over the items of an array, a `Map`, or a `Set` | Key words | PASS | Technical, What it is: "A `for...of` loop walks over an array, a `Map`, or a `Set`" |
| K7 | Code unit: a UTF-16 code unit of a JS string; `length` counts these | Key words | PASS | Technical: "`length` returns the number of UTF-16 code units, not the number of characters" |
| K8 | Grapheme: one character as a reader sees it, such as `কি` | Key words | FAIL | No Technical panel defines a grapheme. They say only that `Intl.Segmenter` "splits text into graphemes". Fix: add a Technical sentence that defines it, or cut the definition. |
| K9 | `Intl.Segmenter`: splits text into graphemes, words, or sentences | Key words | PASS | Technical: "`Intl.Segmenter` splits text into graphemes, words, or sentences" |
| K10 | `node:test`: the test runner of Node.js; run it with `node --test` | Key words | PASS | Technical: "The `node:test` module of Node.js creates JavaScript tests" and "Run `node --test` in the folder" |
| K11 | Edge case: an unusual input a solution must also handle (empty, single, repeated) | Key words | PASS | Technical, Common mistakes: "Give each problem its edge cases too: an empty input, a single item, and a repeated item." |

Open FAILs: 5

FAILs in round 2: 5.

## Round 3 (2026-11-16)

### Fact check: sdet / problem-solving (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: small problems solved in JavaScript and proved with node:test | none | N/A | Describes the page itself. |
| 2 | Intro: test code is full of small problems; this page solves four, with a test each, and shows two traps | none | N/A | Describes the page itself. |
| 3 | What it is: The `node:test` module of Node.js creates JavaScript tests | S8 | PASS | "The node:test module facilitates the creation of JavaScript tests." |
| 4 | What it is: A synchronous test fails if it throws an exception, and passes otherwise | S8 | PASS | "A synchronous function that is considered failing if it throws an exception," and "This test passes because it does not throw an exception." |
| 5 | What it is: A `for...of` loop walks over an array, a `Map`, or a `Set` | S11 | PASS | "The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on)" |
| 6 | What it is: A `Map` holds key-value pairs | S4 | PASS | "The Map object holds key-value pairs and remembers the original insertion order of the keys." |
| 7 | What it is: A value can occur in a `Set` only once | S3 | PASS | "A value in the set may only occur once; it is unique in the set's collection." |
| 8 | What it is: "Problem solving here means…" and the link sentence | none | N/A | Defines the page's topic and points to another page. It states no tool fact. |
| 9 | How it works, Counting: A `Map` holds key-value pairs, so it can keep each item as a key and its count as the value | S4 | PASS | "The Map object holds key-value pairs" |
| 10 | How it works, Counting: Lower-case the text first with `toLowerCase()` so `Test` and `test` count as one word | S10 | PASS | "The toLowerCase() method of String values returns this string converted to lower case." |
| 11 | How it works, Duplicates: A value occurs in a `Set` only once | S3 | PASS | "A value in the set may only occur once" |
| 12 | How it works, Duplicates: `firstDuplicate()` adds each item to a `Set` and returns the first item already in it | none | N/A | Reports what the page's own code does. |
| 13 | How it works, Sorting: `sort()` sorts the array in place and returns the same array | S1 | PASS | "sorts the elements of an array in place and returns the reference to the same array, now sorted." |
| 14 | How it works, Sorting: By default it converts the elements to strings and compares those | S1 | PASS | "The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values." |
| 15 | How it works, Sorting: For numbers pass a compare function such as `(a, b) => a - b`, which subtracts `b` from `a` | S1 | PASS | "remember that (a, b) => a - b sorts numbers in ascending order." |
| 16 | How it works, Sorting: A negative result puts `a` before `b`, and a positive one puts `a` after `b` | S1 | PASS | "A negative value indicates that a should come before b. A positive value indicates that a should come after b." |
| 17 | How it works, Sorting: `toSorted()` is the copying version and returns a new, sorted array | S2 | PASS | "is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order." |
| 18 | How it works, Reversing: `reverse()` reverses an array in place | S7 | PASS | "The reverse() method of Array instances reverses an array in place" |
| 19 | How it works, Text: `length` returns the number of UTF-16 code units, not the number of characters | S12 | PASS | "contains the length of the string in UTF-16 code units." and "Since length counts code units instead of characters" |
| 20 | How it works, Text: `split("")` splits by UTF-16 code units, not by the characters a reader sees | S5 | PASS | "the string is not split by user-perceived characters (grapheme clusters) or unicode characters (code points), but by UTF-16 code units." |
| 21 | How it works, Text: `Intl.Segmenter` splits text into graphemes, words, or sentences | S6 | PASS | "enabling you to get meaningful items (graphemes, words or sentences) from a string." |
| 22 | Try it: Run `node --test` in the folder | S8 | PASS | "The Node.js test runner can be invoked from the command line by passing the --test flag: node --test" |
| 23 | Try it: It runs files whose names end in `.test.mjs` | S8 | PASS | "By default, Node.js will run all files matching these patterns: **/*.test.{cjs,mjs,js}" |
| 24 | Try it: "all four tests pass" | none | N/A | Reports what the page's own code returns. |
| 25 | Try it: From `node:assert/strict`, `assert.equal` is strict equality | S9 | PASS | "Strict assertion mode An alias of assert.strictEqual()" and "Tests strict equality between the actual and expected parameters" |
| 26 | Try it: `assert.deepEqual` tests deep equality | S9 | PASS | "Tests for deep equality between the actual and expected parameters." |
| 27 | Try it: the traps file prints `[ 1, 10, 100, 9 ]`, `2`, `িক`, with the reasons for each | none | N/A | Reports what the page's own code prints. |
| 28 | Try it: break each solution on purpose; a test that never fails proves nothing | none | N/A | Advice. |
| 29 | How a tester uses it: sort a copy with `toSorted()` and compare | S2 | PASS | "is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order." |
| 30 | How a tester uses it: Use a compare function for numbers | S1 | PASS | "(a, b) => a - b sorts numbers in ascending order." |
| 31 | How a tester uses it: A value occurs in a `Set` only once (so a smaller `Set` of ids means a repeated id) | S3 | PASS | "A value in the set may only occur once; it is unique in the set's collection." The "smaller than the list" step is plain logic on this fact. |
| 32 | How a tester uses it: a `Map` holds key-value pairs | S4 | PASS | "The Map object holds key-value pairs" |
| 33 | How a tester uses it: `length` counts code units, not the characters a reader sees | S12 | PASS | "Since length counts code units instead of characters" |
| 34 | How a tester uses it: the traps file printed `2` for `কি` | none | N/A | Reports what the page's own code prints. |
| 35 | How a tester uses it: `Intl.Segmenter` splits text into graphemes | S6 | PASS | "get meaningful items (graphemes, words or sentences) from a string." |
| 36 | How a tester uses it: The `node:test` module creates JavaScript tests | S8 | PASS | "The node:test module facilitates the creation of JavaScript tests." |
| 37 | How a tester uses it: the advice to use `Map`, `Set`, `Intl.Segmenter` and a test file per helper | none | N/A | Advice. |
| 38 | Common mistakes: The default sort compares strings | S1 | PASS | "sorted by converting them to strings and comparing strings in UTF-16 code units order." |
| 39 | Common mistakes: Pass a compare function such as `(a, b) => a - b` | S1 | PASS | "(a, b) => a - b sorts numbers in ascending order." |
| 40 | Common mistakes: `sort()` and `reverse()` change the array in place | S1, S7 | PASS | S1: "the array is sorted in place, and no copy is made." S7: "the array is reversed in place, and no copy is made." |
| 41 | Common mistakes: Use `toSorted()` when the caller still needs the original | S2 | PASS | "is the copying version of the sort() method. It returns a new array" |
| 42 | Common mistakes: `split("")` splits by UTF-16 code units, not by what a reader sees | S5 | PASS | "not split by user-perceived characters (grapheme clusters) ... but by UTF-16 code units." |
| 43 | Common mistakes: The traps file turned `কি` into `িক` | none | N/A | Reports what the page's own code prints. |
| 44 | Common mistakes: The value of `length` may not match the number of characters | S12 | PASS | Section heading in S12: "Strings with length not equal to the number of characters" |
| 45 | Common mistakes: Testing only the happy path; give each problem its edge cases | none | N/A | Advice. The remark on the page's own tests reports the page's own code. |
| 46 | What a tester can check: the callout | none | N/A | The tutorial's own advice, as the callout says. |
| K1 | `Map`: an object that holds key-value pairs | none | PASS | What it is: "A `Map` holds key-value pairs" |
| K2 | `Set`: each value occurs once; good for duplicates | none | PASS | How it works: "A value occurs in a `Set` only once"; Duplicates bullet: "adds each item to a `Set`..." |
| K3 | `sort()`: sorts in place; by default compares elements as strings | none | PASS | "`sort()` sorts the array in place and returns the same array... By default it converts the elements to strings and compares those" |
| K4 | Compare function: negative puts `a` first, positive puts `b` first | none | PASS | "A negative result puts `a` before `b`, and a positive one puts `a` after `b`" |
| K5 | `toSorted()`: returns a sorted copy, original unchanged | none | PASS | "`toSorted()` is the copying version: it returns a new, sorted array" and "Use `toSorted()` when the caller still needs the original" |
| K6 | `for...of`: a loop over the items of an array, a `Map`, or a `Set` | none | PASS | "A `for...of` loop walks over an array, a `Map`, or a `Set`" |
| K7 | Code unit: a UTF-16 code unit of a JavaScript string; `length` counts these | none | PASS | "`length` returns the number of UTF-16 code units, not the number of characters" |
| K8 | Grapheme: a unit that `Intl.Segmenter` can split text into, next to words and sentences | none | PASS | "`Intl.Segmenter` splits text into graphemes, words, or sentences" |
| K9 | `Intl.Segmenter`: splits text into graphemes, words, or sentences | none | PASS | "`Intl.Segmenter` splits text into graphemes, words, or sentences" |
| K10 | `node:test`: the test runner of Node.js; run it with `node --test` | none | PASS | "The `node:test` module of Node.js creates JavaScript tests"; "Run `node --test` in the folder" |
| K11 | Edge case: an unusual input that a solution must also handle, such as an empty input, a single item, or a repeated item | none | PASS | "Give each problem its edge cases too: an empty input, a single item, and a repeated item." |

Open FAILs: 0

FAILs in round 3: 0.

Open FAILs: 0
