# Research notes: SDET Roadmap, Programming Problem Solving

Page: `content/sdet/problem-solving.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Array.prototype.sort() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort | 2026-11-15 |
| S2 | Array.prototype.toSorted() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted | 2026-11-15 |
| S3 | Set | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set | 2026-11-15 |
| S4 | Map | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map | 2026-11-15 |
| S5 | String.prototype.split() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split | 2026-11-15 |
| S6 | Intl.Segmenter | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter | 2026-11-15 |
| S7 | Array.prototype.reverse() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse | 2026-11-15 |
| S8 | Test runner | Node.js (OpenJS Foundation) | https://nodejs.org/api/test.html | 2026-11-15 |
| S9 | Assert | Node.js (OpenJS Foundation) | https://nodejs.org/api/assert.html | 2026-11-15 |
| S10 | String.prototype.toLowerCase() | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase | 2026-11-15 |
| S11 | Loops and iteration | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration | 2026-11-15 |
| S12 | String: length | MDN Web Docs (Mozilla) | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | `sort()` sorts in place and returns the same array. | S1 | "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted." |
| C2 | The default sort compares the elements as strings. | S1 | "The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values." |
| C3 | A compare function: negative puts a first; positive puts a after b. | S1 | "compareFn(a, b) return value sort order > 0 sort a after b , e.g., [b, a] < 0 sort a before b , e.g., [a, b] === 0 keep original order of a and b" |
| C21 | For numbers, the compare function can subtract `b` from `a`. | S1 | "To compare numbers instead of strings, the compare function can subtract b from a" |
| C4 | `toSorted()` returns a new sorted array. | S2 | "The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order." |
| C5 | A value in a Set occurs only once. | S3 | "A value in the set may only occur once ; it is unique in the set's collection." |
| C6 | A Map holds key-value pairs in insertion order. | S4 | "The Map object holds key-value pairs and remembers the original insertion order of the keys." |
| C7 | `split("")` splits by UTF-16 code units, not by what a reader sees. | S5 | "is used as a separator, the string is not split by user-perceived characters ( grapheme clusters ) or unicode characters (code points), but by UTF-16 code units." |
| C8 | `Intl.Segmenter` gives graphemes, words, or sentences. | S6 | "The Intl.Segmenter object enables locale-sensitive text segmentation, enabling you to get meaningful items (graphemes, words or sentences) from a string." |
| C9 | `reverse()` reverses in place. | S7 | "The reverse() method of Array instances reverses an array in place and returns the reference to the same array" |
| C10 | `node:test` creates JavaScript tests. | S8 | "The node:test module facilitates the creation of JavaScript tests." |
| C11 | A synchronous test fails if it throws. | S8 | "A synchronous function that is considered failing if it throws an exception, and is considered passing otherwise." |
| C12 | `node --test` runs the tests. | S8 | "The Node.js test runner can be invoked from the command line by passing the --test flag" |
| C13 | It finds files such as `*.test.mjs`. | S8 | "By default, Node.js will run all files matching these patterns: **/*.test.{cjs,mjs,js}" |
| C14 | In strict mode, `assert.equal` is `strictEqual`. | S9 | "Strict assertion mode An alias of assert.strictEqual() ." |
| C15 | In strict mode, `assert.deepEqual` is `deepStrictEqual`. | S9 | "Strict assertion mode An alias of assert.deepStrictEqual() ." |
| C16 | `deepStrictEqual` tests deep equality. | S9 | "Tests for deep equality between the actual and expected parameters." |
| C17 | `toLowerCase()`. | S10 | "The toLowerCase() method of String values returns this string converted to lower case." |
| C18 | `for...of` loops over iterables such as Array, Map, Set. | S11 | "The for...of statement creates a loop Iterating over iterable objects (including Array , Map , Set , arguments object and so on)" |
| C19 | `length` counts code units. | S12 | "This property returns the number of code units in the string." |
| C20 | `length` may not match the number of characters. | S12 | "it's possible for the value returned by length to not match the actual number of Unicode characters in the string" |

## Run check

The "Try it" files `solutions.mjs` and `solutions.test.mjs` ran on 2026-11-15 with Node.js 26.8.1: `node --test` reported 4 tests, 4 passed, exit code 0. The traps file of "Try it" (`traps.mjs`) and the traps of "Common mistakes" were run the same day: `[10, 9, 1, 100].sort()` gave `[ 1, 10, 100, 9 ]`; `'কি'.split('').reverse().join('')` gave `'িক'` (the vowel sign first); `'কি'.length` was 2, and `Intl.Segmenter` with `granularity: 'grapheme'` gave 1 segment; `a.sort()` returned the same array `a`.
