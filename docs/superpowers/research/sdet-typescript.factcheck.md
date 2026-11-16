# Fact check: sdet / typescript

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / typescript (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: types for test code, and why tsc must run next to Node.js and Playwright | none | N/A | The lede describes the page. It is not a fact about a tool. |
| 2 | Intro: TypeScript adds types to JavaScript, so a checker can find a wrong field or a missing value before a test runs | none | FAIL | The sentence is about a tool and has no cite. Fix: cite S1 for "an additional layer on top of these: TypeScript's type system", and drop the "wrong field or missing value" part or cite it. |
| 3 | Intro: the tools that run TypeScript do not check it | none | FAIL | The sentence is about tools and has no cite. Fix: cite S7 ("no type checking is performed") and S8 ("Playwright does not check the types"). |
| 4 | What it is: TypeScript has all the features of JavaScript, with a type system on top | S1 | PASS | "TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system." |
| 5 | A static type system predicts what the code is expected to do before it runs | S2 | PASS | "use a static type system to make predictions about what the code is expected to do before it runs." |
| 6 | In many cases TypeScript works out the types by itself, from the values in the code | S1 | FAIL | The words "In many cases, TypeScript can even just infer (or "figure out") the types" are in S2, not S1. S1 only says "some design patterns make it difficult for types to be inferred automatically". Fix: cite S2. |
| 7 | The checker is tsc, the TypeScript compiler | S2 | PASS | "tsc, the TypeScript compiler" |
| 8 | Type annotations never change the runtime behaviour of a program | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 9 | Playwright reads a TypeScript test, transforms it to JavaScript, and runs it | S8 | PASS | "Playwright will read them, transform to JavaScript and run." |
| 10 | Node.js can run a TypeScript file too | S7 | PASS | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 11 | "Read JavaScript for Testers first, because every TypeScript program is JavaScript underneath" | none | N/A | This is advice about reading order. |
| 12 | How it works: a type alias is a name for any type | S3 | PASS | "A type alias is exactly that - a name for any type." |
| 13 | An interface is another way to name an object type | S3 | PASS | "An interface declaration is another way to name an object type" |
| 14 | A union type is made from two or more types, and a value may be any one of them | S3 | PASS | "A union type is a type formed from two or more other types, representing values that may be any one of those types." |
| 15 | A literal type names one exact string or number | S3 | PASS | "Because constantString can only represent 1 possible string, it has a literal type representation"; "Numeric literal types work the same way" |
| 16 | Together they give a closed list, such as 'tester' \| 'developer' | none | FAIL | The sentence is about TypeScript behaviour and has no cite. Fix: add Cite 3, which says "by combining literals into unions, you can express ... functions that only accept a certain set of known values". |
| 17 | A ? after the property name makes the property optional | S3 | PASS | "Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property name" |
| 18 | TypeScript does not let you write to a readonly property during type-checking, but nothing changes at run time | S4 | PASS | "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 19 | TypeScript understands checks such as typeof and uses them to narrow a type inside a branch | S5 | PASS | "TypeScript can understand it to narrow types in different branches." |
| 20 | A generic component works over many types rather than a single one | S9 | PASS | "a component that can work over a variety of types rather than a single one." |
| 21 | A value of type any is not type-checked | S3 | PASS | "any isn't type-checked." |
| 22 | The noImplicitAny flag makes an implicit any an error | S3 | PASS | "Use the compiler flag noImplicitAny to flag any implicit any as an error." |
| 23 | By default, null and undefined are assignable to any other type | S2 | PASS | "By default, values like null and undefined are assignable to any other type." |
| 24 | With strictNullChecks on, you must test for them before you use a method or property of the value | S3 | PASS | "With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value." |
| 25 | The strict flag turns on the whole family of strict checks | S6 | PASS | "Turning this on is equivalent to enabling all of the strict mode family options" |
| 26 | Try it: you need Node.js and TypeScript (npm install -D typescript) | none | N/A | This is a setup instruction. |
| 27 | Step 1: the check finds no errors | none | N/A | It only reports what the example code returns. |
| 28 | Step 2: Node.js runs TypeScript that uses only erasable syntax, such as types and interfaces | S7 | FAIL | S7 says "Node.js will execute TypeScript files that contains only erasable TypeScript syntax". The word "interfaces" is not in S7. Fix: write "only erasable syntax" and drop "such as types and interfaces", or cite a source that says it. |
| 29 | Step 2: it prints [ 'Asha (tester)', 'Rafi (developer)' ] and [ 'none', 'example.com' ] | none | N/A | It reports the example output. |
| 30 | Step 3: tsc reports the 'manager' error, and node still runs and prints Asha (manager) | none | N/A | It reports what the example code prints. |
| 31 | Step 3: Node.js replaces the TypeScript syntax with whitespace and does no type checking | S7 | PASS | "Node.js will replace TypeScript syntax with whitespace, and no type checking is performed." |
| 32 | Step 4: tsc reports possibly 'undefined', and node crashes with a TypeError | none | N/A | It reports what the example code prints. |
| 33 | Step 4: this is the bug that the null check exists to catch | S3 | PASS | "The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on" |
| 34 | How a tester uses it: Playwright does not check types, and runs tests even when there are non-critical compile errors; its docs recommend running the TypeScript compiler alongside it | S8 | PASS | "Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright." |
| 35 | In CI, that is npx tsc -p tsconfig.json --noEmit before npx playwright test | S8 | PASS | "run: npx tsc -p tsconfig.json --noEmit" and, in the next step, "run: npx playwright test" |
| 36 | Locally, npx tsc -p tsconfig.json --noEmit -w keeps checking as you save | S8 | PASS | "npx tsc -p tsconfig.json --noEmit -w". S8 gives the command but does not say what -w does. I treat "keeps checking" as a reading of the watch flag, so this is a weak PASS. |
| 37 | Describe a response body with an interface | S3 | FAIL | S3 does not mention API responses or response bodies. It only explains interfaces with a Point example. Fix: cite S3 only for "An interface declaration is another way to name an object type", or drop the response-body advice. |
| 38 | A typo in a field name then fails the check instead of reading undefined at run time | none | FAIL | The sentence is about tool behaviour and has no cite. Fix: cite a source, or remove it. |
| 39 | A union of literal types rejects any value that is not on the list | S3 | PASS | "functions that only accept a certain set of known values" |
| 40 | Optional properties show which fields can be absent | S3 | PASS | "Object types can also specify that some or all of their properties are optional." |
| 41 | strictNullChecks makes the code check for them | S3 | PASS | "you will need to test for those values before using methods or properties on that value." |
| 42 | A generic helper works over many types | S9 | PASS | "a component that can work over a variety of types rather than a single one." |
| 43 | So one data builder can serve users, orders, and products | none | FAIL | The sentence is an example claim and has no cite. S9 does not mention data builders. Fix: remove it, or mark it as the tutorial's own example. |
| 44 | Common mistakes: Playwright runs tests even when there are non-critical type errors | S8 | PASS | "will run tests even if there are non-critical TypeScript compilation errors." |
| 45 | Node.js does no type checking | S7 | PASS | "no type checking is performed." |
| 46 | Without a tsc step, the type errors go unseen | none | FAIL | The sentence is about tool behaviour and has no cite. Fix: cite S7 and S8 for the facts it rests on, or mark it as the tutorial's own reasoning. |
| 47 | A value of type any is not type-checked | S3 | PASS | "any isn't type-checked." |
| 48 | So the bug that the error pointed at stays in the code | none | N/A | It is a consequence of the previous cited fact and not a fact about a tool. |
| 49 | Without strictNullChecks, null and undefined are assignable to any other type | S2 | PASS | "By default, values like null and undefined are assignable to any other type." S3 also says: "With strictNullChecks off ... null and undefined can be assigned to a property of any type." |
| 50 | A missing value crashes the test at run time instead | none | FAIL | The sentence is about run-time behaviour and has no cite. Fix: cite a source, or mark it as the tutorial's own reasoning. |
| 51 | Type annotations never change the runtime behaviour | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 52 | An API that returns a wrong shape still needs an assertion in the test | none | N/A | This is advice. |
| 53 | A readonly property is checked only during type-checking; nothing changes at run time | S4 | PASS | "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 54 | What a tester can check | none | N/A | This callout says it is the tutorial's own advice. It has no cites. |
| K1 | TypeScript: JavaScript with a type system on top | n/a | PASS | What it is: "TypeScript has all the features of JavaScript, with a type system on top of them" |
| K2 | tsc: the TypeScript compiler; --noEmit makes it only check | n/a | FAIL | The first half is in the What it is panel: "The checker is tsc, the TypeScript compiler". No Technical panel says what --noEmit does. Fix: drop "--noEmit makes it only check", or add a cited sentence. |
| K3 | Type annotation: a type written in the code, such as name: string; it does not change how the code runs | n/a | FAIL | The "does not change" half is in the What it is panel: "type annotations never change the runtime behaviour of a program". No Technical panel defines an annotation as "a type written in the code". Fix: add a cited definition, or shorten the row. |
| K4 | Type alias: a name for any type | n/a | PASS | How it works: "A type alias is a name for any type" |
| K5 | Interface: a name for an object type | n/a | PASS | How it works: "An interface is another way to name an object type" |
| K6 | Union type: a value that may be any one of two or more types | n/a | PASS | How it works: "A union type is made from two or more types, and a value may be any one of them" |
| K7 | Literal type: one exact string or number used as a type | n/a | PASS | How it works: "A literal type names one exact string or number" |
| K8 | Optional property: a property marked with ? that may be missing | n/a | PASS | How it works: "A ? after the property name makes the property optional"; How a tester uses it: "Optional properties show which fields can be absent" |
| K9 | any: a type that is not checked | n/a | PASS | How it works: "A value of type any is not type-checked" |
| K10 | strict: the flag that turns on the strict family of checks, including strictNullChecks | n/a | FAIL | How it works: "The strict flag turns on the whole family of strict checks". No Technical panel says that strictNullChecks is in that family. Fix: drop "including strictNullChecks", or add a cited sentence. |
| K11 | Narrowing: TypeScript working out a more exact type after a check such as typeof | n/a | PASS | How it works: "TypeScript understands checks such as typeof and uses them to narrow a type inside a branch" |
| K12 | Type stripping: Node.js removing the types and running the code, with no type check | n/a | PASS | Try it: "Node.js replaces the TypeScript syntax with whitespace and does no type checking" |

Open FAILs: 13

FAILs in round 1: 13.

## Round 2 (2026-11-16)

### Fact check: sdet / typescript (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: types for test code ... and why tsc must run next to Node.js and Playwright | none | FAIL | S8 says only "We recommend you run TypeScript compiler alongside Playwright." S7 says "no type checking is performed", but it does not say tsc must run. "Must" is stronger than "recommend". Fix: say "why tsc should run next to ...". |
| 2 | Intro: this page shows the types a tester needs, how tsc checks them, and how to run the check | none | N/A | Describes the page itself. |
| 3 | TypeScript has all the features of JavaScript, with a type system on top | 1 | PASS | S1: "TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system." |
| 4 | A static type system predicts what the code is expected to do before it runs | 2 | PASS | S2: "use a static type system to make predictions about what the code is expected to do before it runs." |
| 5 | A static type-checker like TypeScript helps find bugs before the code runs | 2 | PASS | S2: "a tool that helps us find these bugs before our code runs. That's what a static type-checker like TypeScript does." |
| 6 | In many cases TypeScript can infer the types, even when the code leaves them out | 2 | PASS | S2: "In many cases, TypeScript can even just infer (or "figure out") the types for us even if we omit them." |
| 7 | The checker is tsc, the TypeScript compiler | 2 | PASS | S2: "tsc, the TypeScript compiler" and "type-check it by running the command tsc". |
| 8 | Type annotations, such as person: string on a parameter, describe what types of values a function can be called with | 2 | PASS | S2: "add type annotations on person and date to describe what types of values greet can be called with." |
| 9 | Type annotations never change the runtime behaviour of a program | 2 | PASS | S2: "Type annotations never change the runtime behavior of your program." |
| 10 | Playwright reads a TypeScript test, transforms it to JavaScript, and runs it | 8 | PASS | S8: "Playwright will read them, transform to JavaScript and run." |
| 11 | Node.js can run a TypeScript file too | 7 | PASS | S7: "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 12 | Every TypeScript program is JavaScript underneath | none | FAIL | No cite. S1 says the reverse: "your existing working JavaScript code is also TypeScript code." Fix: cite S1 and say "TypeScript offers all of JavaScript's features, and an additional layer on top". |
| 13 | "Read JavaScript for Testers first" | none | N/A | Advice and a link. |
| 14 | A type alias is a name for any type | 3 | PASS | S3: "A type alias is exactly that - a name for any type." |
| 15 | An interface is another way to name an object type | 3 | PASS | S3: "An interface declaration is another way to name an object type" |
| 16 | A union type is made from two or more types, and a value may be any one of them | 3 | PASS | S3: "A union type is a type formed from two or more other types, representing values that may be any one of those types." |
| 17 | A literal type names one exact string or number | 3 | PASS | S3: "we can refer to specific strings and numbers in type positions." |
| 18 | Combined in a union, literals express a set of known values | 3 | PASS | S3: "by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values" |
| 19 | A ? after the property name makes the property optional | 3 | PASS | S3: "Object types can also specify that some or all of their properties are optional." and "add a ? after the property name" |
| 20 | TypeScript does not let you write to a readonly property during type-checking, but nothing changes at run time | 4 | PASS | S4: "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 21 | TypeScript understands checks such as typeof and uses them to narrow a type inside a branch | 5 | PASS | S5: "TypeScript can understand it to narrow types in different branches." and "TypeScript sees typeof padding === "number" and understands that as a special form of code called a type guard." |
| 22 | A generic component works over many types rather than a single one | 9 | PASS | S9: "being able to create a component that can work over a variety of types rather than a single one." |
| 23 | A value of type any is not type-checked | 3 | PASS | S3: "any isn't type-checked." |
| 24 | The noImplicitAny flag makes an implicit any an error | 3 | PASS | S3: "Use the compiler flag noImplicitAny to flag any implicit any as an error." |
| 25 | By default, null and undefined are assignable to any other type | 2 | PASS | S2: "By default, values like null and undefined are assignable to any other type." |
| 26 | With strictNullChecks on, you must test for them before you use a method or property of the value | 3 | PASS | S3: "With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value." |
| 27 | The strict flag turns on the whole family of strict checks | 6 | PASS | S6: "Turning this on is equivalent to enabling all of the strict mode family options" |
| 28 | The two biggest are noImplicitAny and strictNullChecks | 2 | PASS | S2: "The two biggest ones you should know about are noImplicitAny and strictNullChecks." |
| 29 | Try it intro: save as users.ts; you need Node.js and TypeScript (npm install -D typescript) | none | N/A | Instruction. |
| 30 | Step 1: tsc --noEmit --strict finds no errors | none | N/A | Reports what the page's own example code returns. |
| 31 | Step 2: By default, Node.js runs TypeScript files that contain only erasable TypeScript syntax | 7 | PASS | S7: "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 32 | Step 2: it prints the two arrays | none | N/A | Reports the example output. |
| 33 | Step 3: tsc reports the "manager" error, and node still runs and prints Asha (manager) | none | N/A | Reports the example output. |
| 34 | Step 3: Node.js replaces the TypeScript syntax with whitespace and does no type checking | 7 | PASS | S7: "Node.js will replace TypeScript syntax with whitespace, and no type checking is performed." |
| 35 | Step 4: tsc reports 'user.email' is possibly 'undefined', and node crashes with a TypeError | none | N/A | Reports the example output. |
| 36 | Step 4: this is the bug that the null check exists to catch | 3 | PASS | S3: "The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on" |
| 37 | Playwright does not check types, and runs tests even when there are non-critical compile errors | 8 | PASS | S8: "Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors." |
| 38 | Playwright docs recommend running the TypeScript compiler alongside it | 8 | PASS | S8: "We recommend you run TypeScript compiler alongside Playwright." |
| 39 | In CI, that is npx tsc -p tsconfig.json --noEmit before npx playwright test | 8 | PASS | S8: "run: npx tsc -p tsconfig.json --noEmit" in the "Run type checks" step, then "run: npx playwright test" in the next step. |
| 40 | Locally, npx tsc -p tsconfig.json --noEmit -w keeps checking as you save | 8 | PASS | S8: "For local development, you can run tsc in watch mode like this: npx tsc -p tsconfig.json --noEmit -w" |
| 41 | An interface declaration describes the shape of an object | 1 | PASS | S1: "You can explicitly describe this object's shape using an interface declaration" |
| 42 | "Write one for each response body that a test reads" | none | N/A | Advice. |
| 43 | Reading a field that does not exist gives undefined in JavaScript, but an error in TypeScript | 2 | PASS | S2: "JavaScript gives us different behavior and returns the value undefined" and "Property 'location' does not exist on type" |
| 44 | A typo in a field name fails the check | 2 | PASS | Follows from the S2 quote above: "Property 'location' does not exist on type '{ name: string; age: number; }'." |
| 45 | A union of literal types rejects any value that is not on the list | 3 | PASS | S3: "functions that only accept a certain set of known values" |
| 46 | Optional properties show which fields can be absent | 3 | PASS | S3: "Object types can also specify that some or all of their properties are optional." |
| 47 | strictNullChecks makes the code check for them | 3 | PASS | S3: "you will need to test for those values before using methods or properties on that value." |
| 48 | A generic component can work over a variety of types rather than a single one | 9 | PASS | S9: "a component that can work over a variety of types rather than a single one." |
| 49 | "Shared test-data helpers are a good place for generics" | none | N/A | Advice. |
| 50 | Common mistakes: Playwright runs tests despite non-critical type errors, and Node.js does no type checking | 8, 7 | PASS | S8: "will run tests even if there are non-critical TypeScript compilation errors". S7: "no type checking is performed." |
| 51 | Run tsc as well, as the Playwright docs recommend | 8 | PASS | S8: "We recommend you run TypeScript compiler alongside Playwright." |
| 52 | A value of type any is not type-checked | 3 | PASS | S3: "any isn't type-checked." |
| 53 | The bug that the error pointed at stays in the code | none | N/A | Consequence of the claim above. |
| 54 | Without strictNullChecks, null and undefined are assignable to any other type, and forgetting to handle them is the cause of countless bugs | 2 | PASS | S2: "By default, values like null and undefined are assignable to any other type... forgetting to handle null and undefined is the cause of countless bugs in the world" |
| 55 | Step 4 of Try it shows one: a TypeError at run time | none | N/A | Reports the example output. |
| 56 | Type annotations never change the runtime behaviour | 2 | PASS | S2: "Type annotations never change the runtime behavior of your program." |
| 57 | "An API that returns a wrong shape still needs an assertion in the test" | none | N/A | Advice. |
| 58 | A readonly property is checked only during type-checking; nothing changes at run time | 4 | PASS | S4: "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 59 | What a tester can check (callout) | none | N/A | The tutorial's own advice. |
| K1 | TypeScript: JavaScript with a type system on top | n/a | PASS | Technical, What it is: "TypeScript has all the features of JavaScript, with a type system on top of them" |
| K2 | tsc: the TypeScript compiler, the tool that checks the types | n/a | PASS | Technical, What it is: "The checker is `tsc`, the TypeScript compiler" |
| K3 | Type annotation: describes what values the function can be called with; does not change how the code runs | n/a | PASS | Technical, What it is: "describe what types of values a function can be called with ... type annotations never change the runtime behaviour of a program" |
| K4 | Type alias: a name for any type | n/a | PASS | Technical, How it works: "A type alias is a name for any type" |
| K5 | Interface: a name for an object type | n/a | PASS | Technical, How it works: "An interface is another way to name an object type" |
| K6 | Union type: a value that may be any one of two or more types | n/a | PASS | Technical, How it works: "A union type is made from two or more types, and a value may be any one of them" |
| K7 | Literal type: one exact string or number used as a type | n/a | PASS | Technical, How it works: "A literal type names one exact string or number" |
| K8 | Optional property: marked with ? and may be missing | n/a | PASS | Technical, How it works: "A `?` after the property name makes the property optional" and, in How a tester uses it, "Optional properties show which fields can be absent" |
| K9 | any: a type that is not checked | n/a | PASS | Technical, How it works: "A value of type `any` is not type-checked" |
| K10 | strict: turns on the strict family of checks, including strictNullChecks | n/a | PASS | Technical, How it works: "The `strict` flag turns on the whole family of strict checks; the two biggest are `noImplicitAny` and `strictNullChecks`" |
| K11 | Narrowing: TypeScript working out a more exact type after a check such as typeof | n/a | PASS | Technical, How it works: "TypeScript understands checks such as `typeof` and uses them to narrow a type inside a branch" |
| K12 | Type stripping: Node.js removing the types and running the code, with no type check | n/a | PASS | Technical, Try it step 3: "Node.js replaces the TypeScript syntax with whitespace and does no type checking" |

Open FAILs: 2

FAILs in round 2: 2.

## Round 3 (2026-11-16)

### Fact check: sdet / typescript (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: types for test code, and why tsc should run next to Node.js and Playwright | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows the types a tester needs, how tsc checks them, and how to run the check | none | N/A | Describes the page itself. |
| 3 | TypeScript has all the features of JavaScript, with a type system on top | S1 | PASS | "TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system." |
| 4 | A static type system predicts what the code is expected to do before it runs | S2 | PASS | "use a ... static ... type system to make predictions about what the code is expected to do ... before ... it runs." |
| 5 | A static type-checker like TypeScript helps find bugs before the code runs | S2 | PASS | "a tool that helps us find these bugs ... before ... our code runs. That’s what a static type-checker like TypeScript does." |
| 6 | In many cases TypeScript can infer the types, even when the code leaves them out | S2 | PASS | "In many cases, TypeScript can even just ... infer ... (or “figure out”) the types for us even if we omit them." |
| 7 | The checker is `tsc`, the TypeScript compiler | S2 | PASS | "our new friend ... tsc ..., the TypeScript compiler." and "type-check it by running the command ... tsc" |
| 8 | Type annotations such as `person: string` describe what types of values a function can be called with | S2 | PASS | "add ... type annotations ... on ... person ... and ... date ... to describe what types of values ... greet ... can be called with." |
| 9 | The types are only for the check: type annotations never change the runtime behaviour | S2 | FAIL | S2 says "Type annotations never change the runtime behavior of your program." It does not say the types are "only for the check". Fix: drop "The types are only for the check:". |
| 10 | Playwright reads a TypeScript test, transforms it to JavaScript, and runs it (so test tools run TypeScript directly) | S8 | PASS | "Playwright will read them, transform to JavaScript and run." |
| 11 | Node.js can run a TypeScript file too | S7 | PASS | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 12 | Read JavaScript for Testers first | none | N/A | Advice and a link, not a fact about a tool. |
| 13 | A type alias is a name for any type | S3 | PASS | "A ... type alias ... is exactly that - a ... name ... for any ... type ." |
| 14 | An interface is another way to name an object type | S3 | PASS | "An ... interface declaration ... is another way to name an object type" |
| 15 | A union type is made from two or more types, and a value may be any one of them | S3 | PASS | "A union type is a type formed from two or more other types, representing values that may be ... any one ... of those types." |
| 16 | A literal type names one exact string or number | S3 | PASS | "we can refer to ... specific ... strings and numbers in type positions." |
| 17 | Combined in a union, literals express a set of known values, such as `'tester' \| 'developer'` | S3 | PASS | "by ... combining ... literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values" |
| 18 | A `?` after the property name makes the property optional | S3 | PASS | "specify that some or all of their properties are ... optional ... To do this, add a ... ? ... after the property name" |
| 19 | TypeScript does not let you write to a `readonly` property during type-checking, but nothing changes at run time | S4 | PASS | "While it won’t change any behavior at runtime, a property marked as ... readonly ... can’t be written to during type-checking." |
| 20 | TypeScript understands checks such as `typeof` and uses them to narrow a type inside a branch | S5 | PASS | "TypeScript can understand it to narrow types in different branches." and "checking against the value returned by ... typeof ... is a type guard." |
| 21 | A generic component works over many types rather than a single one | S9 | PASS | "a component that can work over a variety of types rather than a single one." |
| 22 | A value of type `any` is not type-checked | S3 | PASS | "any ... isn’t type-checked." |
| 23 | The `noImplicitAny` flag makes an implicit `any` an error | S3 | PASS | "Use the compiler flag ... noImplicitAny ... to flag any implicit ... any ... as an error." |
| 24 | By default, `null` and `undefined` are assignable to any other type | S2 | PASS | "By default, values like ... null ... and ... undefined ... are assignable to any other type." |
| 25 | With `strictNullChecks` on, you must test for them before you use a method or property of the value | S3 | PASS | "With ... strictNullChecks ... on , when a value is ... null ... or ... undefined , you will need to test for those values before using methods or properties on that value." |
| 26 | The `strict` flag turns on the whole family of strict checks | S6 | PASS | "Turning this on is equivalent to enabling all of the ... strict mode family ... options" |
| 27 | The two biggest are `noImplicitAny` and `strictNullChecks` | S2 | PASS | "The two biggest ones you should know about are ... noImplicitAny ... and ... strictNullChecks" |
| 28 | Try it: save as users.ts, install typescript; step 1 says tsc finds no errors | none | N/A | Setup instruction, and a report of what the example code returns. |
| 29 | By default, Node.js runs TypeScript files that contain only erasable TypeScript syntax | S7 | PASS | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 30 | Step 2 and step 3 outputs (printed arrays, the tsc error text, `Asha (manager)`) | none | N/A | Report what the example code prints. |
| 31 | Node.js replaces the TypeScript syntax with whitespace and does no type checking | S7 | PASS | "Node.js will replace TypeScript syntax with whitespace, and no type checking is performed." |
| 32 | Step 4: tsc and node output; "This is the bug that the null check exists to catch" | S3 | PASS | "The lack of checking for these values tends to be a major source of bugs; we always recommend people turn ... strictNullChecks ... on" |
| 33 | Playwright does not check types and runs tests even with non-critical compile errors; its docs recommend running the TypeScript compiler alongside it | S8 | PASS | "Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright." |
| 34 | In CI, that is `npx tsc -p tsconfig.json --noEmit` before `npx playwright test` | S8 | PASS | "name : Run type checks run : npx tsc - p tsconfig.json - - noEmit - name : Run Playwright tests run : npx playwright test" |
| 35 | Locally, `npx tsc -p tsconfig.json --noEmit -w` keeps checking as you save | S8 | PASS | "For local development, you can run ... tsc ... in ... watch ... mode like this: npx tsc -p tsconfig.json --noEmit -w" |
| 36 | An interface declaration describes the shape of an object | S1 | PASS | "You can explicitly describe this object’s shape using an ... interface ... declaration" |
| 37 | Write one interface for each response body that a test reads | none | N/A | Instruction to the reader. |
| 38 | Reading a field that does not exist gives `undefined` in JavaScript, but an error in TypeScript, so a typo in a field name fails the check | S2 | PASS | "accessing a property that doesn’t exist on an object ... JavaScript gives us different behavior and returns the value ... undefined" and "In TypeScript, the following code produces an error about ... location ... not being defined" |
| 39 | A union of literal types rejects any value that is not on the list | S3 | PASS | "functions that only accept a certain set of known values" |
| 40 | Optional properties show which fields can be absent | S3 | PASS | "Object types can also specify that some or all of their properties are ... optional ." |
| 41 | `strictNullChecks` makes the code check for them | S3 | PASS | "you will need to test for those values before using methods or properties on that value." |
| 42 | A generic component can work over a variety of types rather than a single one | S9 | PASS | "a component that can work over a variety of types rather than a single one." |
| 43 | Shared test-data helpers are a good place for generics | none | FAIL | Unlabelled claim with no cite, and S9 does not say it. Fix: delete it, or label it as the tutorial's own advice. |
| 44 | Common mistakes: Playwright runs tests even with non-critical type errors | S8 | PASS | "will run tests even if there are non-critical TypeScript compilation errors." |
| 45 | Node.js does no type checking | S7 | PASS | "no type checking is performed." |
| 46 | Run `tsc` as well, as the Playwright docs recommend | S8 | PASS | "We recommend you run TypeScript compiler alongside Playwright." |
| 47 | A value of type `any` is not type-checked | S3 | PASS | "any ... isn’t type-checked." |
| 48 | "so the bug that the error pointed at stays in the code" | none | FAIL | No source says this. Fix: delete it, or cite S3 and say only that `any` "isn’t type-checked". |
| 49 | Without `strictNullChecks`, `null` and `undefined` are assignable to any other type, and forgetting to handle them causes countless bugs | S2 | PASS | "By default, values like ... null ... and ... undefined ... are assignable to any other type." and "forgetting to handle ... null ... and ... undefined ... is the cause of countless bugs in the world" |
| 50 | Step 4 of Try it shows one: a `TypeError` at run time | none | N/A | Reports what the example code does. |
| 51 | Type annotations never change the runtime behaviour | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 52 | An API that returns a wrong shape still needs an assertion in the test | none | FAIL | Uncited advice that is not labelled as advice. No source says it. Fix: delete it, or label it as the tutorial's own advice. |
| 53 | A `readonly` property is checked only during type-checking; nothing changes at run time | S4 | PASS | "While it won’t change any behavior at runtime, a property marked as ... readonly ... can’t be written to during type-checking." |
| 54 | What a tester can check (callout) | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | TypeScript: JavaScript with a type system on top | none | PASS | What it is: "TypeScript has all the features of JavaScript, with a type system on top of them" |
| K2 | `tsc`: the TypeScript compiler, the tool that checks the types | none | PASS | What it is: "The checker is `tsc`, the TypeScript compiler" |
| K3 | Type annotation: describes what values the function can be called with; does not change how the code runs | none | PASS | What it is: "describe what types of values a function can be called with" and "type annotations never change the runtime behaviour of a program" |
| K4 | Type alias: a name for any type | none | PASS | How it works: "A type alias is a name for any type" |
| K5 | Interface: a name for an object type | none | PASS | How it works: "An interface is another way to name an object type" |
| K6 | Union type: a value that may be any one of two or more types | none | PASS | How it works: "A union type is made from two or more types, and a value may be any one of them" |
| K7 | Literal type: one exact string or number used as a type | none | PASS | How it works: "A literal type names one exact string or number" |
| K8 | Optional property: marked with `?`, may be missing | none | PASS | How it works: "A `?` after the property name makes the property optional". How a tester uses it: "Optional properties show which fields can be absent" |
| K9 | `any`: a type that is not checked | none | PASS | How it works: "A value of type `any` is not type-checked" |
| K10 | `strict`: turns on the strict family of checks, including `strictNullChecks` | none | PASS | How it works: "The `strict` flag turns on the whole family of strict checks; the two biggest are `noImplicitAny` and `strictNullChecks`" |
| K11 | Narrowing: working out a more exact type after a check such as `typeof` | none | PASS | How it works: "uses them to narrow a type inside a branch" |
| K12 | Type stripping: Node.js removes the types and runs the code, with no type check | none | PASS | Try it, step 3: "Node.js replaces the TypeScript syntax with whitespace and does no type checking" |

Open FAILs: 4

FAILs in round 3: 4.

## Round 4 (2026-11-16)

### Fact check: sdet / typescript (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: types for test code, and why tsc should run next to Node.js and Playwright | none | N/A | Describes the page itself. |
| 2 | Intro: the page shows the types a tester needs, how tsc checks them, and how to run the check next to Node.js and Playwright | none | N/A | Describes the page itself. |
| 3 | What it is: TypeScript has all the features of JavaScript, with a type system on top | S1 | PASS | "TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system." |
| 4 | A static type system predicts what the code is expected to do before it runs | S2 | PASS | "The alternative is to use a  static  type system to make predictions about what the code is expected to do  before  it runs." |
| 5 | A static type-checker like TypeScript helps find bugs before the code runs | S2 | PASS | "Ideally, we could have a tool that helps us find these bugs  before  our code runs.\nThat’s what a static type-checker like TypeScript does." |
| 6 | In many cases TypeScript can infer the types, even when the code leaves them out | S2 | PASS | "In many cases, TypeScript can even just  infer  (or “figure out”) the types for us even if we omit them." |
| 7 | The checker is tsc, the TypeScript compiler | S2 | PASS | "tsc , the TypeScript compiler" |
| 8 | Type annotations such as `person: string` describe what types of values a function can be called with | S2 | PASS | "add  type annotations  on  person  and  date  to describe what types of values  greet  can be called with." |
| 9 | Type annotations never change the runtime behaviour of a program | S2 | PASS | "Remember : Type annotations never change the runtime behavior of your program." |
| 10 | Playwright reads a TypeScript test, transforms it to JavaScript, and runs it | S8 | PASS | "Playwright will read them, transform to JavaScript and run." |
| 11 | Node.js can run a TypeScript file too | S7 | PASS | "By default Node.js will execute TypeScript files that contains only\nerasable TypeScript syntax." |
| 12 | "Read JavaScript for Testers first." | none | N/A | Advice and a link. It is not a fact about a tool. |
| 13 | How it works: a type alias is a name for any type | S3 | PASS | "A  type alias  is exactly that - a  name  for any  type ." |
| 14 | An interface is another way to name an object type | S3 | PASS | "An  interface declaration  is another way to name an object type" |
| 15 | A union type is made from two or more types, and a value may be any one of them | S3 | PASS | "A union type is a type formed from two or more other types, representing values that may be  any one  of those types." |
| 16 | A literal type names one exact string or number | S3 | PASS | "we can refer to  specific  strings and numbers in type positions." |
| 17 | Combined in a union, literals express a set of known values | S3 | PASS | "by  combining  literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values" |
| 18 | A `?` after the property name makes the property optional | S3 | PASS | "Object types can also specify that some or all of their properties are  optional .\n...To do this, add a  ?  after the property name" |
| 19 | TypeScript does not let you write to a `readonly` property during type-checking, but nothing changes at run time | S4 | PASS | "While it won’t change any behavior at runtime, a property marked as  readonly  can’t be written to during type-checking." |
| 20 | TypeScript understands checks such as `typeof` and uses them to narrow a type inside a branch | S5 | PASS | "TypeScript can understand it to narrow types in different branches." |
| 21 | A generic component works over many types rather than a single one | S9 | PASS | "being able to create a component that can work over a variety of types rather than a single one." |
| 22 | A value of type `any` is not type-checked | S3 | PASS | "You usually want to avoid this, though, because  any  isn’t type-checked." |
| 23 | The `noImplicitAny` flag makes an implicit `any` an error | S3 | PASS | "Use the compiler flag   noImplicitAny   to flag any implicit  any  as an error." |
| 24 | By default, `null` and `undefined` are assignable to any other type | S2 | PASS | "By default, values like  null  and  undefined  are assignable to any other type." |
| 25 | With `strictNullChecks` on, you must test for them before you use a method or property of the value | S3 | PASS | "With   strictNullChecks    on , when a value is  null  or  undefined , you will need to test for those values before using methods or properties on that value." |
| 26 | The `strict` flag turns on the whole family of strict checks | S6 | PASS | "Turning this on is equivalent to enabling all of the  strict mode family  options" |
| 27 | The two biggest strict checks are `noImplicitAny` and `strictNullChecks` | S2 | PASS | "The two biggest ones you should know about are   noImplicitAny   and   strictNullChecks  ." |
| 28 | Try it: by default, Node.js runs TypeScript files that contain only erasable TypeScript syntax | S7 | PASS | "By default Node.js will execute TypeScript files that contains only\nerasable TypeScript syntax." |
| 29 | Try it steps 1 and 2 and 3: what tsc prints, and what node prints and runs | none | N/A | Reports what the page's own example code prints. |
| 30 | Node.js replaces the TypeScript syntax with whitespace and does no type checking | S7 | PASS | "Node.js will replace TypeScript syntax with whitespace,\nand no type checking is performed." |
| 31 | Step 4: this is the bug that the null check exists to catch | S3 | PASS | "The lack of checking for these values tends to be a major source of bugs; we always recommend people turn   strictNullChecks   on" |
| 32 | How a tester uses it: Playwright does not check types, and runs tests even when there are non-critical compile errors | S8 | PASS | "Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors." |
| 33 | Playwright docs recommend that you run the TypeScript compiler alongside it | S8 | PASS | "We recommend you run TypeScript compiler alongside Playwright." |
| 34 | In CI, run `npx tsc -p tsconfig.json --noEmit` before `npx playwright test` | S8 | PASS | "run:  npx tsc   -  p tsconfig.json   -  -  noEmit ... run:  npx playwright test" (the type-check step comes before the test step) |
| 35 | Locally, `npx tsc -p tsconfig.json --noEmit -w` keeps checking as you save | S8 | PASS | "For local development, you can run  tsc  in  watch  mode like this:\n npx tsc   -p   tsconfig.json   --noEmit     -w" |
| 36 | An interface declaration describes the shape of an object | S1 | PASS | "You can explicitly describe this object’s shape using an  interface  declaration" |
| 37 | Reading a field that does not exist gives `undefined` in JavaScript, but an error in TypeScript | S2 | PASS | "JavaScript gives us different behavior and returns the value  undefined" and "Property 'location' does not exist on type '{ name: string; age: number; }'." |
| 38 | A union of literal types rejects any value that is not on the list | S3 | PASS | "functions that only accept a certain set of known values"; "Argument of type '\"automatic\"' is not assignable to parameter of type 'Options \| \"auto\"'." |
| 39 | Optional properties show which fields can be absent | S3 | PASS | "Object types can also specify that some or all of their properties are  optional ." |
| 40 | `strictNullChecks` makes the code check for them | S3 | PASS | "With   strictNullChecks    on ... you will need to test for those values before using methods or properties on that value." |
| 41 | A generic component can work over a variety of types rather than a single one | S9 | PASS | "create a component that can work over a variety of types rather than a single one." |
| 42 | Common mistakes: Playwright runs tests even with non-critical type errors | S8 | PASS | "will run tests even if there are non-critical TypeScript compilation errors." |
| 43 | Node.js does no type checking | S7 | PASS | "and no type checking is performed." |
| 44 | Run `tsc` as well, as the Playwright docs recommend | S8 | PASS | "We recommend you run TypeScript compiler alongside Playwright." |
| 45 | A value of type `any` is not type-checked | S3 | PASS | "because  any  isn’t type-checked." |
| 46 | Without `strictNullChecks`, `null` and `undefined` are assignable to any other type, and forgetting to handle them causes countless bugs | S2 | PASS | "By default, values like  null  and  undefined  are assignable to any other type.\n...forgetting to handle  null  and  undefined  is the cause of countless bugs in the world" |
| 47 | Step 4 of Try it shows a TypeError at run time | none | N/A | Reports what the page's own example code does. |
| 48 | Type annotations never change the runtime behaviour | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 49 | A `readonly` property is checked only during type-checking; nothing changes at run time | S4 | PASS | "While it won’t change any behavior at runtime, a property marked as  readonly  can’t be written to during type-checking." |
| 50 | What a tester can check: the checklist | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | TypeScript: JavaScript with a type system on top | | PASS | "TypeScript has all the features of JavaScript, with a type system on top of them" |
| K2 | `tsc`: the TypeScript compiler, the tool that checks the types | | PASS | "The checker is `tsc`, the TypeScript compiler" |
| K3 | Type annotation: describes what values the function can be called with; does not change how the code runs | | PASS | "describe what types of values a function can be called with" and "Type annotations never change the runtime behaviour of a program" |
| K4 | Type alias: a name for any type | | PASS | "A type alias is a name for any type" |
| K5 | Interface: a name for an object type | | PASS | "An interface is another way to name an object type" |
| K6 | Union type: a value that may be any one of two or more types | | PASS | "A union type is made from two or more types, and a value may be any one of them" |
| K7 | Literal type: one exact string or number used as a type | | PASS | "A literal type names one exact string or number" |
| K8 | Optional property: marked with `?`, may be missing | | PASS | "A `?` after the property name makes the property optional" (how a tester uses it: "Optional properties show which fields can be absent") |
| K9 | `any`: a type that is not checked | | PASS | "A value of type `any` is not type-checked" |
| K10 | `strict`: turns on the strict family of checks, including `strictNullChecks` | | PASS | "The `strict` flag turns on the whole family of strict checks; the two biggest are `noImplicitAny` and `strictNullChecks`" |
| K11 | Narrowing: working out a more exact type after a check such as `typeof` | | PASS | "TypeScript understands checks such as `typeof` and uses them to narrow a type inside a branch" |
| K12 | Type stripping: Node.js removing the types and running the code, with no type check | | PASS | "Node.js replaces the TypeScript syntax with whitespace and does no type checking" |

Open FAILs: 0

FAILs in round 4: 0.

## Round 5 (2026-11-16)

### Fact check: sdet / typescript (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| L | Lede: types for test code; why tsc should run next to Node.js and Playwright | none | N/A | Describes the page itself. The facts are checked in the sections. |
| I | Intro: the page shows the types a tester needs, how `tsc` checks them, and how to run that check next to Node.js and Playwright | none | N/A | Describes the page itself. |
| 1 | TypeScript has all the features of JavaScript, with a type system on top | S1 | PASS | "TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system." |
| 2 | A static type system predicts what the code is expected to do before it runs | S2 | PASS | "use a static type system to make predictions about what the code is expected to do before it runs." |
| 3 | A static type-checker like TypeScript helps find bugs before the code runs | S2 | PASS | "a tool that helps us find these bugs before our code runs. ... That's what a static type-checker like TypeScript does." |
| 4 | In many cases TypeScript can infer the types, even when the code leaves them out | S2 | PASS | "In many cases, TypeScript can even just infer (or "figure out") the types for us even if we omit them." |
| 5 | The checker is `tsc`, the TypeScript compiler | S2 | PASS | "tsc, the TypeScript compiler" |
| 6 | Annotations such as `person: string` describe what types of values a function can be called with | S2 | PASS | "add type annotations on person and date to describe what types of values greet can be called with." |
| 7 | Type annotations never change the runtime behaviour | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 8 | Playwright reads a TypeScript test, transforms it to JavaScript, and runs it | S8 | PASS | "Playwright will read them, transform to JavaScript and run." |
| 9 | Node.js can run a TypeScript file | S7 | PASS | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 10 | "Read JavaScript for Testers first" | none | N/A | Advice and a link, not a fact about a tool. |
| 11 | A type alias is a name for any type | S3 | PASS | "A type alias is exactly that - a name for any type." |
| 12 | An interface is another way to name an object type | S3 | PASS | "An interface declaration is another way to name an object type" |
| 13 | A union type is made from two or more types, and a value may be any one of them | S3 | PASS | "A union type is a type formed from two or more other types, representing values that may be any one of those types." |
| 14 | A literal type names one exact string or number | S3 | PASS | "we can refer to specific strings and numbers in type positions." |
| 15 | Literals combined in a union express a set of known values | S3 | PASS | "by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values" |
| 16 | A `?` after the property name makes the property optional | S3 | PASS | "add a ? after the property name" |
| 17 | TypeScript does not let you write to a `readonly` property during type-checking, but nothing changes at run time | S4 | PASS | "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 18 | TypeScript understands checks such as `typeof` and uses them to narrow a type inside a branch | S5 | PASS | "TypeScript can understand it to narrow types in different branches." |
| 19 | A generic component works over many types rather than a single one | S9 | PASS | "a component that can work over a variety of types rather than a single one" |
| 20 | A value of type `any` is not type-checked | S3 | PASS | "any isn't type-checked." |
| 21 | The `noImplicitAny` flag makes an implicit `any` an error | S3 | PASS | "Use the compiler flag noImplicitAny to flag any implicit any as an error." |
| 22 | By default, `null` and `undefined` are assignable to any other type | S2 | PASS | "By default, values like null and undefined are assignable to any other type." |
| 23 | With `strictNullChecks` on, you must test for them before using a method or property of the value | S3 | PASS | "With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value." |
| 24 | The `strict` flag turns on the whole family of strict checks | S6 | PASS | "Turning this on is equivalent to enabling all of the strict mode family options" |
| 25 | The two biggest strict checks are `noImplicitAny` and `strictNullChecks` | S2 | PASS | "The two biggest ones you should know about are noImplicitAny and strictNullChecks." |
| 26 | Try it step 2: by default Node.js runs TypeScript files that contain only erasable syntax | S7 | PASS | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax." |
| 27 | Try it step 2: the printed output; step 1 "finds no errors" | none | N/A | Reports what the page's own example code prints. |
| 28 | Try it step 3: Node.js replaces TypeScript syntax with whitespace and does no type checking | S7 | PASS | "Node.js will replace TypeScript syntax with whitespace, and no type checking is performed." |
| 29 | Try it step 3: the `tsc` error text, and `node` printing `Asha (manager)` | none | N/A | Reports what the example code prints or returns. |
| 30 | Try it step 4: this is the bug that the null check exists to catch | S3 | PASS | "The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on" |
| 31 | Try it step 4: the `tsc` message and the `TypeError` | none | N/A | Reports what the example code prints or returns. |
| 32 | Playwright does not check types and runs tests even with non-critical compile errors | S8 | PASS | "Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors." |
| 33 | Playwright docs recommend running the TypeScript compiler alongside it | S8 | PASS | "We recommend you run TypeScript compiler alongside Playwright." |
| 34 | In CI that is `npx tsc -p tsconfig.json --noEmit` before `npx playwright test` | S8 | PASS | "run: npx tsc -p tsconfig.json --noEmit ... run: npx playwright test" (type-check step comes first) |
| 35 | Locally, `npx tsc -p tsconfig.json --noEmit -w` keeps checking as you save | S8 | PASS | "you can run tsc in watch mode like this: npx tsc -p tsconfig.json --noEmit -w" |
| 36 | An interface declaration describes the shape of an object | S1 | PASS | "You can explicitly describe this object's shape using an interface declaration" |
| 37 | Reading a field that does not exist gives `undefined` in JavaScript, but an error in TypeScript | S2 | PASS | "JavaScript gives us different behavior and returns the value undefined" and "Property 'location' does not exist on type" |
| 38 | A union of literal types rejects any value not on the list | S3 | PASS | "functions that only accept a certain set of known values" and "Argument of type '"automatic"' is not assignable to parameter of type 'Options \| "auto"'." |
| 39 | Optional properties show which fields can be absent | S3 | PASS | "Object types can also specify that some or all of their properties are optional." |
| 40 | `strictNullChecks` makes the code check for them | S3 | PASS | "you will need to test for those values before using methods or properties on that value." |
| 41 | A generic component can work over a variety of types rather than a single one | S9 | PASS | "a component that can work over a variety of types rather than a single one" |
| 42 | Common mistakes: Playwright runs tests despite non-critical type errors; Node.js does no type checking; run `tsc` as the docs recommend | S8, S7, S8 | PASS | S8: "will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright." S7: "no type checking is performed." |
| 43 | A value of type `any` is not type-checked | S3 | PASS | "any isn't type-checked." |
| 44 | Without `strictNullChecks`, `null` and `undefined` are assignable to any type, and forgetting to handle them causes countless bugs | S2 | PASS | "By default, values like null and undefined are assignable to any other type. ... forgetting to handle null and undefined is the cause of countless bugs in the world" |
| 45 | Type annotations never change the runtime behaviour | S2 | PASS | "Type annotations never change the runtime behavior of your program." |
| 46 | A `readonly` property is checked only during type-checking; nothing changes at run time | S4 | PASS | "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| 47 | Advice sentences ("Fix the type instead", "Check ... with an assertion", "Step 4 of Try it shows one", "write one for each response body", "Read ... first", `npm install` line) | none | N/A | Advice or reference to the page's own example. |
| 48 | Section "What a tester can check" (callout) | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | TypeScript: JavaScript with a type system on top | none | PASS | What it is: "**TypeScript** has all the features of JavaScript, with a type system on top of them" |
| K2 | `tsc`: the TypeScript compiler, the tool that checks the types | none | PASS | What it is: "The checker is `tsc`, the TypeScript compiler" |
| K3 | Type annotation: describes what values the function can be called with; does not change how the code runs | none | PASS | What it is: "describe what types of values a function can be called with ... never change the runtime behaviour of a program" |
| K4 | Type alias: a name for any type | none | PASS | How it works: "A type alias is a name for any type" |
| K5 | Interface: a name for an object type | none | PASS | How it works: "An interface is another way to name an object type" |
| K6 | Union type: any one of two or more types | none | PASS | How it works: "A union type is made from two or more types, and a value may be any one of them" |
| K7 | Literal type: one exact string or number | none | PASS | How it works: "A literal type names one exact string or number" |
| K8 | Optional property: marked with `?`, may be missing | none | PASS | How it works: "A `?` after the property name makes the property optional"; How a tester uses it: "which fields can be absent" |
| K9 | `any`: a type that is not checked | none | PASS | How it works: "A value of type `any` is not type-checked" |
| K10 | `strict`: turns on the strict family, including `strictNullChecks` | none | PASS | How it works: "The `strict` flag turns on the whole family of strict checks; the two biggest are `noImplicitAny` and `strictNullChecks`" |
| K11 | Narrowing: working out a more exact type after a check such as `typeof` | none | PASS | How it works: "uses them to narrow a type inside a branch" |
| K12 | Type stripping: Node.js removes the types and runs the code, with no type check | none | PASS | Try it step 3: "Node.js replaces the TypeScript syntax with whitespace and does no type checking" (the term "type stripping" is not in a panel, but the fact is) |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
