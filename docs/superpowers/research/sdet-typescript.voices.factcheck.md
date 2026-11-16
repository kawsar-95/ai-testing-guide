# Voices fact check: sdet / typescript

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / typescript (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Types let a tool find mistakes before the code runs" is not in the Technical panel. The Technical panel says only that a static type system "predicts what the code is expected to do before it runs". "Find mistakes" is a different and stronger claim, and S2 does not say it in that form. Left out: "all the features of JavaScript", the word "static", "the TypeScript compiler", and "transforms". |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. Left out: nothing of note. |
| How it works | Layman | PASS | The facts match the Technical panel. "can go anywhere" for "assignable to any other type" and "knows the type inside that branch" for "narrow a type inside a branch" are looser wording but do not add a fact. Left out: the noun "literal type", "two or more types" (replaced by "one of these"), and "inside a branch" for readonly. |
| How it works | Bangla | PASS | The facts match the Technical panel. Left out: nothing of note. |
| Try it | Layman | PASS | The facts match the Technical panel. "simple TypeScript like this" leaves out "erasable syntax". Left out: "erasable syntax", "replaces TypeScript syntax with whitespace", the exact error text, and the exact TypeError text. |
| Try it | Bangla | FAIL | Step 2 repeats "type আর interface-এর মতো মুছে ফেলা যায় এমন syntax" with Cite 7. S7 does not mention interfaces, so the cite does not support the sentence. The rest matches the Technical panel. Left out: nothing of note. |
| How a tester uses it | Layman | FAIL | "Write an interface for the response body" has Cite 3, but S3 does not support a response-body claim. The Technical panel has the same problem. Left out: "non-critical", the `npx playwright test` command, "typo", the data-builder example (users, orders, products), and "a union of literal types". |
| How a tester uses it | Bangla | FAIL | "Response body একটা interface দিয়ে বর্ণনা করুন" has Cite 3, but S3 does not support a response-body claim. The rest matches the Technical panel. Left out: nothing of note. |
| Common mistakes | Layman | PASS | The facts match the Technical panel. "Turning strict off" is looser than "Without strictNullChecks". Left out: "non-critical", "assignable to any other type", and "the bug that the error pointed at". |
| Common mistakes | Bangla | PASS | The facts match the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | The callout is advice and matches the Technical callout. Left out: "in the tsconfig.json of the tests", "interfaces or types", "literal types", and "not plain strings". |
| What a tester can check | Bangla | PASS | The callout is advice and matches the Technical callout. Left out: nothing of note. |

Open FAILs: 4

FAILs in round 1: 4.

## Round 2 (2026-11-16)

### Voices fact check: sdet / typescript (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: the static type system predicts what the code is expected to do; "even when the code leaves them out" is kept; "tsc, the TypeScript compiler" is shortened to "the tool that checks". |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Nothing is added. Left out: nothing of substance. |
| How it works | Layman | FAIL | "you must check for them before you use the value" drops the limit "a method or property of". The Technical panel says only "before you use a method or property of the value". The Layman sentence says more. Also, "allows only those words" is looser than "express a set of known values" (it applies to numbers too). Left out: literal types name one exact string or number; "implicit" is rendered as "hidden". |
| How it works | Bangla | PASS | Matches the Technical panel. It keeps "method বা property ব্যবহারের আগে". Left out: nothing of substance. |
| Try it | Layman | PASS | "Node.js can run simple TypeScript like this" drops "By default" and "only erasable syntax". It still says no more than the Technical panel. Left out: the erasable-only limit; Node.js replaces syntax with whitespace; the exact tsc messages; the exact TypeError text. |
| Try it | Bangla | PASS | Matches the Technical panel, including the erasable limit and the whitespace replacement. Nothing is added. |
| How a tester uses it | Layman | PASS | "Its docs say to run ..." restates "recommend". The wording is slightly firmer, but I judged it the same meaning. Left out: "non-critical"; the npx playwright test command; "interface declaration"; "reading a field that does not exist"; "a generic component" is shortened to "helper"; the advice about test-data helpers. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel, including the test-data helper advice. "বলে" is the same slight firming of "recommend". Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "non-critical"; "without strictNullChecks" is shortened to "Turning strict off"; "Step 4 ... TypeError"; the advice about the assertion is kept in short form. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Nothing is added. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Advice callout only, with no facts. Left out: "tsconfig.json"; "interfaces or types" and "unions of literal types" become "describe the response bodies" and "lists of exact values". |
| What a tester can check | Bangla | PASS | Advice callout only. It matches the Technical panel. Nothing is added. |

Open FAILs: 1

Not checked: I did not read the full source files. I used targeted searches, and S6 is mostly a single line.

FAILs in round 2: 1.

## Round 3 (2026-11-16)

### Voices fact check: sdet / typescript (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: static type system predicts behaviour; the name "TypeScript compiler"; "can be called with" for annotations; "In many cases" became "Often". |
| What it is | Bangla | PASS | Same facts as Technical, with the same limits ("অনেক ক্ষেত্রে", "আশা করা যায়"). Nothing added. |
| How it works | Layman | PASS | Facts match. Left out: a type alias is "another way" for interfaces; literal types name one string or number; "whole family" became "all the strict checks at once"; `typeof` is only one example. |
| How it works | Bangla | PASS | Meaning matches Technical, including "ডিফল্টভাবে" and the strict family. Nothing added. |
| Try it | Layman | FAIL | Step 2 says "Node.js can run simple TypeScript like this". Technical says "By default" Node.js runs files "that contain only erasable TypeScript syntax". "simple" is a different claim, and "by default" and "erasable" are dropped. Other steps match. Left out: the exact tsc error text and the whitespace replacement. |
| Try it | Bangla | PASS | Step 2 keeps "ডিফল্টভাবে" and the erasable limit. Steps 3 and 4 match Technical. Nothing added. |
| How a tester uses it | Layman | PASS | Facts match. "Its docs say to run" is a little stronger than "recommend". Left out: "Locally" for `-w`; "non-critical" became "some"; "tsconfig.json" in the watch command; the full `npx playwright test` command; the "undefined in JavaScript" detail and the shared test-data helpers advice. |
| How a tester uses it | Bangla | PASS | Matches Technical, including the shared-helper sentence. "বলে" is a little stronger than "recommend". Nothing added. |
| Common mistakes | Layman | PASS | Facts match. Left out: "non-critical"; "Without `strictNullChecks`" became "Turning `strict` off"; the `TypeError` detail of step 4; "during type-checking" for `readonly`. |
| Common mistakes | Bangla | PASS | Matches Technical. Nothing added. |
| What a tester can check | Layman | PASS | A shorter version of the same advice callout, with the same label and no cites. Left out: "in the `tsconfig.json`"; "with interfaces or types"; "union of literal types". |
| What a tester can check | Bangla | PASS | Same questions as Technical, with the same label. Nothing added. |

Open FAILs: 1

I did not run any code. Rows 43, 48 and 52 are FAILs because they have no cite. You could instead treat them as unlabelled advice.

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Voices fact check: sdet / typescript (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "static type system predicts what the code is expected to do"; "the TypeScript compiler" (it only says "the tool that checks is called tsc"); "can be called with"; "in many cases" (became "often"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. Nothing is added. Left out: nothing important. |
| How it works | Layman | FAIL | "With exact values, like 'tester' \| 'developer', it allows only those values" is stronger than the Technical panel. That panel says only that literals in a union "express a set of known values". It does not say that other values are not allowed. Fix: "With exact values, like 'tester' \| 'developer', it gives a set of known values." Left out: "any one of them" and "two or more" for unions; "one exact string or number"; "during type-checking" is shortened; the "noImplicitAny" and "strictNullChecks" detail is kept. "Optional" is restated as "may be missing" and "can go anywhere" is a loose restatement of "assignable to any other type". |
| How it works | Bangla | PASS | The meaning matches the Technical panel. Nothing is added or made stronger. |
| Try it | Layman | PASS | The facts match: the "by default" limit is kept, and Node.js does not check types. Left out: the exact tsc error text; the exact TypeError text; "replaces the TypeScript syntax with whitespace"; "erasable" is kept. |
| Try it | Bangla | PASS | The facts match the Technical panel, with the "by default" limit kept. Left out: nothing important. |
| How a tester uses it | Layman | PASS | The facts match. Left out: "non-critical" (became "some type errors", which is true and says no more); "before `npx playwright test`" (became "before the tests"); the `-w` command is shortened to "Add `-w`"; "for each response body that a test reads"; "such as the allowed roles or statuses". |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Left out: "statuses" is shortened to "role বা status" in the example and is kept. Nothing is added. |
| Common mistakes | Layman | PASS | The facts match. Left out: "non-critical" (became "some"); "Without `strictNullChecks`" (the heading says "Turning `strict` off", which matches the Technical heading "`strict` turned off"); the TypeError text; "runtime behaviour" (became "what runs"). |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Left out: the exact TypeError wording is shortened to "`TypeError`". Nothing is added. |
| What a tester can check | Layman | PASS | This is a callout of the tutorial's own advice, so no source fact is added. Left out: `tsconfig.json`; "interfaces or types"; "unions of literal types, not plain strings"; "not only on the types". |
| What a tester can check | Bangla | PASS | The meaning matches the Technical callout and the same note about the tutorial's own advice. Nothing is added. |

Open FAILs: 1

Not checked: I did not invoke the writing-style skill from CLAUDE.md, so the prose in this report is not STE-checked.

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Voices fact check: sdet / typescript (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: the static type system predicts expected behaviour; the name "compiler" for `tsc`; "on a parameter". "Mistakes" for "bugs" and "JavaScript plus types" are fair restatements. |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Nothing is added and no limit is dropped. |
| How it works | Layman | PASS | Left out: "another way" for interface; "two or more" for union; the literal-type definition; "inside a branch" is kept; "implicit" becomes "hidden". Note: "`null` and `undefined` can go anywhere" is looser than "assignable to any other type", but it keeps "By default". "Narrowing: TypeScript knows the type inside that branch" is a plain way to say it narrows the type. |
| How it works | Bangla | PASS | Faithful to the Technical panel. Limits such as "ডিফল্টভাবে" and "চালু থাকলে" are kept. |
| Try it | Layman | PASS | Left out: the full `tsc` error texts; that Node.js replaces syntax with whitespace; the exact `TypeError` message. "Because Node.js does not check types" matches the Technical panel. |
| Try it | Bangla | PASS | Matches the Technical panel. Error messages, "erasable", and the whitespace replacement are kept. |
| How a tester uses it | Layman | PASS | Left out: "non-critical" (shown as "some type errors"); "Locally"; the full command with `-w`; "typo in a field name" (shown as "wrong field name"); interface "declaration". "Its docs say to run" is a little more direct than "recommend". "Use `?`" is advice in the same style as the Technical bullets. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel, including "ছোটখাটো" for non-critical and "বলে" for the docs. |
| Common mistakes | Layman | PASS | Left out: the `strictNullChecks` detail ("Turning strict off" keeps the heading of the Technical panel); "non-critical"; the "TypeError at run time" detail of step 4. "Can go anywhere" is loose but equal in meaning. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Nothing added. |
| What a tester can check | Layman | PASS | Advice callout, with the "own advice, not a fact" statement kept. Left out: "in the `tsconfig.json`"; "interfaces or types"; "unions of literal types"; "not only on the types". |
| What a tester can check | Bangla | PASS | Advice callout with the same statement. All six items match the Technical panel. |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
