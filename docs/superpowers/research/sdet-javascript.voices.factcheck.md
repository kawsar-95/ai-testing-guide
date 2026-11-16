# Voices fact check: sdet / javascript

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / javascript (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Node.js runs JavaScript on your computer" adds a fact. The Technical panel says "outside the browser", not "on your computer". Left out: first-class functions, engine interprets or compiles just in time, open-source, cross-platform, "runtime", standard library, "asynchronous". |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. Nothing is left out. |
| How it works | Layman | PASS | Left out: block-scoped term, "seven primitives" count, first-class functions, "callback" wording, "fulfilled or rejected" (replaced by "done"), the `finally`-before-statement-ends wording. |
| How it works | Bangla | PASS | Meaning matches. Nothing material is left out. |
| Try it | Layman | FAIL | "Node.js has `fetch()` built in" changes "browser-compatible `fetch()`" to a different claim, "built in". Also "quick way to learn" drops "the array methods". Left out: "browser-compatible", "Node.js" as the needed tool for `await`, the table of output lines. |
| Try it | Bangla | PASS | "browser-এর মতো একটা fetch()" matches "browser-compatible". "array method শেখার" is kept. Nothing is left out. |
| How a tester uses it | Layman | PASS | Meaning matches. Left out: the "larger list", the login and data-builder examples, "fulfilled" wording. The Technical rows 35, 36, 37 and 39 fail on their cites, and the Layman sentences copy those claims. |
| How a tester uses it | Bangla | PASS | Meaning matches. Nothing material is left out. The same four Technical cite problems apply. |
| Common mistakes | Layman | PASS | "`const` fixes the name, not the value" is a plain version of "makes the reference fixed". Left out: the word "Strict equality", the "`SyntaxError` for invalid JSON" detail is kept, and "status of a response" is shortened to "status". |
| Common mistakes | Bangla | PASS | Meaning matches. Nothing material is left out. |
| What a tester can check | Layman | PASS | Advice callout. Left out: "assertions of the test tool" detail ("tool's own assertions" is kept), the "no `await` in front" hint, "log the context", "or fail the test", "`filter()` and `map()`", "environment". |
| What a tester can check | Bangla | PASS | Meaning matches the Technical callout. Nothing is left out. |

Open FAILs: 2

I did not check the code blocks. The Playwright claim (row 11) passes only on a weak install-prompt quote. I read the Bangla by meaning and could judge every sentence.

FAILs in round 1: 2.

## Round 2 (2026-11-16)

### Voices fact check: sdet / javascript (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "So your code does not get stuck while it waits for input or output" follows "Node.js runs JavaScript outside the browser, with the same engine". That makes the engine the reason. The Technical panel gives a different reason: Node.js's standard library has asynchronous I/O. Left out: first-class functions, just-in-time compiling, open-source, cross-platform, the name V8, and the "standard library" and "asynchronous I/O" details. |
| What it is | Bangla | PASS | It matches the Technical panel. Left out: nothing of note; it keeps all the details of the Technical panel. |
| How it works | Layman | PASS | Left out: that `const` is also block-scoped; "seven primitives"; first-class functions; "from a callback" for the array methods; "fulfilled or rejected" (the panel says "done"); "exception" (the panel says "error"); that `finally` runs "before the statement ends" (the panel says "at the end"). |
| How it works | Bangla | PASS | It matches the Technical panel. Nothing is added. |
| Try it | Layman | PASS | The panel reports the code output and gives the same facts as the Technical panel. Left out: "browser-compatible" (the panel says "works like the browser's"); "ES module" is kept. |
| Try it | Bangla | PASS | It matches the Technical panel. |
| How a tester uses it | Layman | PASS | Left out: the examples "a login or a data builder"; "returns" and "fulfilled" (the panel says "gives you its value"); that the check is about a response body. |
| How a tester uses it | Bangla | PASS | It matches the Technical panel. |
| Common mistakes | Layman | PASS | "fixes the name, not the value" is a plain version of "makes the reference fixed". Left out: that properties can be added, updated or removed; "valid" JSON; "read the body" is used where the panel says "parse its body". |
| Common mistakes | Bangla | PASS | It matches the Technical panel. |
| What a tester can check | Layman | FAIL | The Catch blocks question reads "Does every `catch` say what happened and throw again?". The Technical panel allows "log the context and throw again, or fail the test". The Layman panel drops the "or fail the test" option, so the check is stricter. Left out: "Look for a call to an async helper with no `await` in front"; "from the environment" for secrets; "with `filter()` and `map()`". |
| What a tester can check | Bangla | PASS | It keeps all the points of the Technical panel, including "বা টেস্টকে fail করায়". |

Open FAILs: 2

FAILs in round 2: 2.

## Round 3 (2026-11-16)

### Voices fact check: sdet / javascript (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Left out: first-class functions, interpreted or just-in-time compiled, open-source, cross-platform, the name V8, and that the engine is V8. |
| What it is | Bangla | PASS | Nothing is left out. All facts and cites match the Technical panel. |
| How it works | Layman | PASS | Left out: first-class functions; "seven primitives" (it says "simple ones"); "block-scoped" (it says "lives inside its block"); "fulfilled or rejected" (it says "done"); "suspends the function"; "before the statement ends". "Changes each item into something new" for `map()` still says it gives a new array. |
| How it works | Bangla | PASS | Nothing material is left out. All facts, limits, and cites match the Technical panel. |
| Try it | Layman | PASS | Left out: "browser-compatible" (it says "works like the browser's"); "call the Postman Echo service" (it says "Postman Echo"). The sentence with the printed output only reports what the example code prints. |
| Try it | Bangla | PASS | Nothing is left out. The printed output is a report of the example code. |
| How a tester uses it | Layman | PASS | Left out: "from a larger list"; "fulfilled" value; "log"; the examples "a login or a data builder"; "in a JSON string" for `JSON.stringify()`. |
| How a tester uses it | Bangla | PASS | Nothing material is left out. All facts and cites match the Technical panel. |
| Common mistakes | Layman | PASS | Left out: the "strict equality" name; "fulfilled" value; "reference" and "properties can be added, updated, or removed". It says "fixes the name" for "makes the reference fixed", and "can still change" for the property changes. The meaning stays close to the Technical panel. |
| Common mistakes | Bangla | PASS | Nothing material is left out. All facts and cites match the Technical panel. |
| What a tester can check | Layman | PASS | This is advice with no cites. Left out: "Look for a call to an async helper with no `await`"; "log the context"; "with `filter()` and `map()`"; "from the environment". |
| What a tester can check | Bangla | PASS | This is advice with no cites. It gives the same checks as the Technical panel. Nothing material is left out. |

Open FAILs: 0

FAILs in round 3: 0.

## Round 4 (2026-11-16)

### Voices fact check: sdet / javascript (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: first-class functions, "interpreted or compiled just in time", "open-source, cross-platform", "runtime", and that the engine is named V8. |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Nothing important is left out. |
| How it works | Layman | PASS | Facts match. Left out: the count "seven primitives", "first-class functions", "fulfilled or rejected" (it says "done"), and "before the statement ends" (it says "at the end"). |
| How it works | Bangla | PASS | Matches the Technical panel. Nothing important is left out. |
| Try it | Layman | PASS | Matches. Left out: that `fetch()` is "browser-compatible" (it says "works like the browser's"). |
| Try it | Bangla | PASS | Matches the Technical panel. Nothing important is left out. |
| How a tester uses it | Layman | PASS | Matches. Left out: the examples "a login or a data builder", and "returns" for `find()` (it says "gives"). |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Nothing important is left out. |
| Common mistakes | Layman | FAIL | "`const` fixes the name, not the value" changes the noun: the Technical panel and S4 say "reference". "Name" is not in the Technical panel. Fix: "`const` fixes the reference, not the value." Also left out: "can be added, updated, or removed" (it says "can still change"), "valid" in "not valid JSON", and "of a response" in the status check. |
| Common mistakes | Bangla | PASS | Matches the Technical panel, including "reference" and the three property changes. Nothing important is left out. |
| What a tester can check | Layman | PASS | Advice callout with no cites. It says the same as the Technical callout. Left out: "look for a call to an async helper with no `await`", "log the context", "with `filter()` and `map()`", and "from the environment". |
| What a tester can check | Bangla | PASS | Matches the Technical callout. Nothing important is left out. |

Open FAILs: 1

I skipped the writing-style skill, because the reply shape was fixed. I read only the matching lines of the source files, not each file whole. For claims 6 and 24, the source lines are short or cut off.

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Voices fact check: sdet / javascript (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Left out: "interpreted / just-in-time compiled", first-class functions, "best known as", open-source, cross-platform, the word "runtime", and the name V8. |
| What it is | Bangla | PASS | Nothing material is left out. The meaning matches the Technical panel. |
| How it works | Layman | PASS | Left out: first-class functions, that seven of the eight types are primitives, "fulfilled or rejected" (the text says "done"), "before the statement ends" for `finally` (the text says "at the end"), and "block-scoped" (the text says "inside its block"). |
| How it works | Bangla | PASS | Every fact is in the Technical panel. Nothing material is left out. |
| Try it | Layman | PASS | Left out: "browser-compatible" (the text says "works like the browser's") and "top level of the file". The sentence with the printed output only reports the example code. |
| Try it | Bangla | PASS | Every fact is in the Technical panel. The output sentence only reports the example code. |
| How a tester uses it | Layman | PASS | Left out: "returns the fulfilled value" (the text says "its value"), "log" (the text says "write down"), and the login and data-builder examples. |
| How a tester uses it | Bangla | PASS | Nothing added. The login and data-builder examples are kept. |
| Common mistakes | Layman | PASS | Left out: "valid" in "not valid JSON" and "fulfilled" before "value". |
| Common mistakes | Bangla | PASS | Every fact is in the Technical panel. Nothing material is left out. |
| What a tester can check | Layman | PASS | The callout says it is advice and has no cites. Left out: the hint to look for a missing `await`, the use of `filter()` and `map()`, and "from the environment" for secrets. |
| What a tester can check | Bangla | PASS | The callout says it is advice and has no cites. It keeps all the points of the Technical panel. |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
