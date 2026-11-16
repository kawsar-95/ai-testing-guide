# Fact check: sdet / javascript

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / javascript (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the JavaScript that test scripts use, run with Node.js | none | N/A | Describes the page. |
| 2 | Intro: "Postman checks and Playwright tests are code." | none | FAIL | A fact about two tools with no cite. Fix: add a cite. S15 says "You can write tests for your Postman API requests in JavaScript". |
| 3 | Intro: "This page covers the part of the language that a tester uses every day…" | none | N/A | Describes the page. |
| 4 | Intro: "It ends with a small script that you run with Node.js…" | none | N/A | Describes the page. |
| 5 | JavaScript is a lightweight programming language with first-class functions; an engine interprets it or compiles it just in time | S1 | PASS | "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions." |
| 6 | Best known as the language of web pages, but it also runs outside the browser, e.g. in Node.js | S1 | PASS | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| 7 | Node.js is an open-source, cross-platform JavaScript runtime | S2 | PASS | "Node.js is an open-source and cross-platform JavaScript runtime environment." |
| 8 | It runs V8, the JavaScript engine of Google Chrome, outside the browser | S2 | PASS | "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| 9 | Its standard library has asynchronous I/O, so code does not block while it waits | S2 | PASS | "Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking." |
| 10 | Postman tests are written in JavaScript | S15 | PASS | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| 11 | Playwright tests are written in TypeScript or JavaScript | S16 | PASS | "When prompted, choose / confirm: TypeScript or JavaScript (default: TypeScript)". This is weak support: the source gives an install prompt and does not say "tests are written in". |
| 12 | "The next pages build on this one: …" | none | N/A | Describes the page. |
| 13 | `let` declares a block-scoped variable | S3 | PASS | "Declares a block-scoped variable, optionally initializing it to a value." |
| 14 | `const` declares a block-scoped variable that cannot be re-assigned and must get its value at once | S3 | PASS | "Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| 15 | Eight data types: seven primitives (strings, numbers, booleans, null, undefined) and objects | S3 | PASS | "The latest ECMAScript standard defines eight data types:" … "Seven data types that are primitives :" … "Boolean … null … Number … String" |
| 16 | JavaScript has first-class functions | S1 | PASS | "programming language with first-class functions" |
| 17 | An arrow function is a shorter way to write a function | S5 | PASS | "An arrow function expression … has a shorter syntax compared to function expressions" |
| 18 | `filter()` returns a new array with the items for which the callback returned true | S6 | PASS | "The filter() method returns a new array containing the items for which callback returned true." |
| 19 | `map()` returns a new array of the callback's results | S6 | PASS | "The map() method returns a new array of the return value from executing callback on every array item." |
| 20 | `find()` returns the first item for which the callback returned true | S6 | PASS | "The find() method returns the first item for which callback returned true." |
| 21 | `JSON.stringify()` turns a JavaScript value into a JSON string | S14 | PASS | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| 22 | `JSON.parse()` turns a JSON string back into a value | S7 | PASS | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| 23 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 24 | `await` suspends the function until the promise is fulfilled or rejected | S8 | PASS | "by suspending execution until the returned promise is fulfilled or rejected." |
| 25 | `await` can be used only inside an `async` function or at the top level of a module | S9 | PASS | "It can only be used inside an async function or at the top level of a module." |
| 26 | In `try...catch`, `try` runs first; if it throws, `catch` runs | S10 | PASS | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| 27 | A `finally` block always runs before the statement ends | S10 | PASS | "The code in the finally block will always be executed before control flow exits the entire construct." |
| 28 | Modules share code with `import` and `export` statements | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements." |
| 29 | Node.js treats a file that ends in `.mjs` as an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| 30 | Try it: the `.mjs` extension makes the file an ES module | S12 | PASS | Same quote as row 29. |
| 31 | Try it: so `await` works at its top level | S9 | PASS | "You can use the await keyword on its own (outside of an async function) at the top level of a module." |
| 32 | Node.js has a browser-compatible `fetch()` | S13 | PASS | "A browser-compatible implementation of the fetch() function." |
| 33 | Try it: the script uses `fetch()` to call Postman Echo | none | N/A | Describes the page's own code. |
| 34 | Try it: the output, the change to Mina, and "Predict the output…" | none | N/A | Reports what the page's own code prints, plus advice. |
| 35 | `filter()`, `map()`, `find()` pick and shape the records a test needs from a larger list | S6 | FAIL | S6 only says what each method returns, and says nothing about tests or test data. Fix: state what the methods return ("returns a new array containing the items for which callback returned true"). Put the testing use in advice with no cite. |
| 36 | A test turns a JSON body into a value with `JSON.parse()`, then checks its fields | S7 | FAIL | S7 says "parses a JSON string, constructing the JavaScript value or object". It says nothing about tests or checking fields. Fix: keep only the parse fact. |
| 37 | To send an object as a body, `JSON.stringify()` makes the JSON text | S14 | FAIL | S14 says only "converts a JavaScript value to a JSON string". It does not mention sending a body. Fix: drop the "send as body" claim. |
| 38 | `await` waits for a promise and returns its fulfilled value | S9 | PASS | "it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 39 | "Put it before every async call, such as `fetch()`" | S13 | FAIL | S13 only defines `fetch()`. It does not say to use `await` before every async call. This is advice cited to a source that does not support it. Fix: remove the cite, or mark it as the tutorial's advice. |
| 40 | Catch an error to log what the test was doing, then throw it again | none | N/A | Advice. |
| 41 | The `catch` block runs only when the `try` block throws | S10 | PASS | "If no exception is thrown in the try block, the catch block is skipped." |
| 42 | Put a helper in a module and `import` it in each test | S12 | N/A | Advice. S12 does support the import/export mechanism. |
| 43 | Compare with `===`, which treats values of different types as different | S11 | PASS | "the strict equality operator always considers operands of different types to be" (different) |
| 44 | Strict equality treats values of different types as different, so `"1" === 1` is `false` | S11 | PASS | "If the operands are of different types, return false." The source example is `console.log("1" === 1);`. |
| 45 | "Use `===`." | none | N/A | Advice. |
| 46 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 47 | "Without `await`, the code holds the promise, not its result." | none | FAIL | A fact about language behaviour with no cite. Fix: cite S8 and S9: "await … waits for the Promise to be fulfilled and returns the fulfilled value". |
| 48 | `const` makes the reference fixed, not the value | S4 | PASS | "The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed." |
| 49 | "An object in a `const` can still change." | none | FAIL | A fact about `const` with no cite. Fix: add a cite to S4, which has the same words as row 48. |
| 50 | `JSON.parse()` throws a `SyntaxError` when the text is not valid JSON | S7 | PASS | "Thrown if the string to parse is not valid JSON." |
| 51 | "Check the status of a response before you parse its body." | none | N/A | Advice. |
| 52 | When the `try` block throws, the `catch` block runs instead | S10 | PASS | "if it throws an exception, the code in the catch block will be executed." |
| 53 | "If that block is empty, nothing reports the error." | none | N/A | Advice and logic, not a tool fact. |
| 54 | What a tester can check (callout) | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | `let` / `const`: block-scoped; `const` cannot be re-assigned but its object can change | n/a | PASS | Technical, How it works: "`const` declares a block-scoped variable that cannot be re-assigned"; Common mistakes: "An object in a `const` can still change." |
| K2 | Primitive: one of seven simple data types (string, number, boolean) | n/a | PASS | Technical, How it works: "seven primitives, such as strings, numbers, booleans, `null`, and `undefined`" |
| K3 | Arrow function: a short way to write a function | n/a | PASS | Technical, How it works: "An arrow function, such as `(user) => user.name`, is a shorter way to write a function" |
| K4 | `filter()` / `map()` / `find()` | n/a | PASS | Technical, How it works: "`filter()` returns a new array with the items for which the callback returned true… `map()` returns a new array of the callback's results… `find()` returns the first item…" |
| K5 | JSON: text for data; `stringify()` writes it and `parse()` reads it | n/a | PASS | Technical, How it works: "`JSON.stringify()` turns a JavaScript value into a JSON string. `JSON.parse()` turns a JSON string back into a value" |
| K6 | Promise: the value that an `async` function returns | n/a | PASS | Technical, How it works: "An `async` function always returns a promise" |
| K7 | `await`: waits for a promise and returns its fulfilled value | n/a | PASS | Technical, How a tester uses it: "`await` waits for a promise and returns its fulfilled value" |
| K8 | `try...catch`: runs `catch` when `try` throws | n/a | PASS | Technical, How it works: "If it throws an exception, the `catch` block runs" |
| K9 | Strict equality (`===`): treats values of different types as different | n/a | PASS | Technical, How a tester uses it: "Compare with `===`, which treats values of different types as different" |
| K10 | ES module: a file that shares code with `import` and `export`, such as a `.mjs` file in Node.js | n/a | PASS | Technical, How it works: "Modules share code with `import` and `export` statements. Node.js treats a file that ends in `.mjs` as an ES module" |
| K11 | Node.js: the runtime that runs JavaScript outside the browser | n/a | PASS | Technical, What it is: "It runs V8, the JavaScript engine of Google Chrome, outside the browser" |

Open FAILs: 7

FAILs in round 1: 7.

## Round 2 (2026-11-16)

### Fact check: sdet / javascript (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the JavaScript that test scripts use, run with Node.js | none | N/A | The lede describes the page. |
| 2 | Intro: the page covers values, functions, arrays, JSON, async code and errors, and ends with a small script | none | N/A | The intro describes the page. |
| 3 | What it is: JavaScript is a lightweight language with first-class functions; an engine interprets it or compiles it just in time | S1 | PASS | "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions" |
| 4 | It is best known as the language of web pages, but it also runs outside the browser, for example in Node.js | S1 | PASS | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| 5 | Node.js is an open-source, cross-platform JavaScript runtime; it runs V8, the engine of Google Chrome, outside the browser | S2 | PASS | "Node.js is an open-source and cross-platform JavaScript runtime environment." "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| 6 | Its standard library has asynchronous I/O, so code does not block while it waits | S2 | PASS | "Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking." |
| 7 | Postman tests are written in JavaScript | S15 | PASS | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| 8 | Playwright tests are written in TypeScript or JavaScript | S16 | PASS | "TypeScript or JavaScript (default: TypeScript)" |
| 9 | Links to the next pages | none | N/A | Navigation text, not a fact about a tool. |
| 10 | How it works: `let` declares a block-scoped variable | S3 | PASS | "Declares a block-scoped variable, optionally initializing it to a value." |
| 11 | `const` declares a block-scoped variable that cannot be re-assigned and must get its value at once | S3 | PASS | "Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| 12 | The standard defines eight data types: seven primitives (strings, numbers, booleans, null, undefined) and objects | S3 | PASS | "The latest ECMAScript standard defines eight data types:" "Seven data types that are primitives :" "and Object" |
| 13 | JavaScript has first-class functions | S1 | PASS | "programming language with first-class functions" |
| 14 | An arrow function is a shorter way to write a function | S5 | PASS | "An arrow function expression ... has a shorter syntax compared to function expressions" |
| 15 | `filter()` returns a new array with the items for which the callback returned true | S6 | PASS | "The filter() method returns a new array containing the items for which callback returned true." |
| 16 | `map()` returns a new array of the callback's results | S6 | PASS | "The map() method returns a new array of the return value from executing callback on every array item." |
| 17 | `find()` returns the first item for which the callback returned true | S6 | PASS | "The find() method returns the first item for which callback returned true." |
| 18 | `JSON.stringify()` turns a JavaScript value into a JSON string | S14 | PASS | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| 19 | `JSON.parse()` turns a JSON string back into a value | S7 | PASS | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| 20 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 21 | `await` suspends the function until the promise is fulfilled or rejected | S8 | PASS | "by suspending execution until the returned promise is fulfilled or rejected" |
| 22 | `await` can be used only inside an `async` function or at the top level of a module | S9 | PASS | "It can only be used inside an async function or at the top level of a module ." |
| 23 | In `try...catch`, `try` runs first; if it throws, `catch` runs | S10 | PASS | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| 24 | A `finally` block always runs before the statement ends | S10 | PASS | "The code in the finally block will always be executed before control flow exits the entire construct." |
| 25 | Modules share code with `import` and `export` statements | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements." |
| 26 | Node.js treats a file that ends in `.mjs` as an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| 27 | Try it: the `.mjs` extension makes the file an ES module | S12 | PASS | Same quote as row 26. |
| 28 | So `await` works at its top level | S9 | PASS | "or at the top level of a module" |
| 29 | Node.js has a browser-compatible `fetch()` | S13 | PASS | "A browser-compatible implementation of the fetch() function." |
| 30 | "You need Node.js ...", the output block, "Now change Mina ... Predict the output" | none | N/A | Instructions and a report of what the example code prints. |
| 31 | How a tester uses it: `filter()` keeps items that pass, `map()` turns each item into a new value, `find()` returns the first item that passes | S6 | PASS | "returns a new array containing the items for which callback returned true" / "returns a new array of the return value from executing callback on every array item" / "returns the first item for which callback returned true" |
| 32 | "Use them to pick the records that a test needs ...", "Parse the body ... then check its fields", "use it to build a JSON request body" | none | N/A | Advice. |
| 33 | `JSON.parse()` turns a JSON string into a value | S7 | PASS | "parses a JSON string, constructing the JavaScript value or object described by the string" |
| 34 | `JSON.stringify()` turns a value into a JSON string | S14 | PASS | "converts a JavaScript value to a JSON string" |
| 35 | `await` waits for a promise and returns its fulfilled value | S9 | PASS | "The await operator is used to wait for a Promise and get its fulfillment value." |
| 36 | "Put it before every call that returns a promise." | none | N/A | Advice. |
| 37 | "Catch an error to log what the test was doing, then throw it again." | none | N/A | Advice. |
| 38 | The `catch` block runs only when the `try` block throws | S10 | PASS | "if it throws an exception, the code in the catch block will be executed" and "If no exception is thrown in the try block, the catch block is skipped." |
| 39 | Put a helper in a module and `import` it in each test | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse." The sentence is advice that applies this fact. |
| 40 | Compare with `===`, which treats values of different types as different | S11 | PASS | "If the operands are of different types, return false." |
| 41 | Common mistakes: strict equality treats values of different types as different, so `"1" === 1` is `false` | S11 | PASS | "If the operands are of different types, return false." The S11 example has `console.log("1" === 1);` |
| 42 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 43 | To get its fulfilled value, `await` the promise | S9 | PASS | "wait for a Promise and get its fulfillment value" |
| 44 | `const` makes the reference fixed, not the value; the properties of an object in a `const` can be added, updated or removed | S4 | PASS | "The const declaration creates an immutable reference to a value. It does not mean the value it holds is immutable" and "if a constant is an object, its properties can be added, updated, or removed." |
| 45 | `JSON.parse()` throws a `SyntaxError` when the text is not valid JSON | S7 | PASS | "When JSON.parse receives a string that does not conform to the JSON grammar, it throws a SyntaxError." |
| 46 | "Check the status of a response before you parse its body." | none | N/A | Advice. |
| 47 | When the `try` block throws, the `catch` block runs instead | S10 | PASS | "if it throws an exception, the code in the catch block will be executed" |
| 48 | "If that block is empty, nothing reports the error." | none | N/A | Reasoning from the previous sentence, not a fact about a tool. |
| 49 | What a tester can check: callout of questions | none | N/A | The page marks it as the tutorial's own advice. |
| K1 | `let` / `const`: block-scoped; a `const` cannot be re-assigned, but its object can still change | n/a | PASS | Technical, How it works: "`const` declares a block-scoped variable that cannot be re-assigned". Technical, Common mistakes: "the properties of an object in a `const` can still be added, updated, or removed". |
| K2 | Primitive: one of the seven simple data types, such as a string, a number or a boolean | n/a | PASS | Technical, How it works: "seven primitives, such as strings, numbers, booleans, `null`, and `undefined`". |
| K3 | Arrow function: a short way to write a function | n/a | PASS | Technical, How it works: "An arrow function, such as `(user) => user.name`, is a shorter way to write a function". |
| K4 | `filter()` / `map()` / `find()` | n/a | PASS | Technical, How it works: "`filter()` returns a new array with the items for which the callback returned true ... `find()` returns the first item for which the callback returned true". |
| K5 | JSON: text for data; `stringify()` writes it and `parse()` reads it | n/a | PASS | Technical, How it works: "`JSON.stringify()` turns a JavaScript value into a JSON string. `JSON.parse()` turns a JSON string back into a value". |
| K6 | Promise: the value that an `async` function returns | n/a | PASS | Technical, How it works: "An `async` function always returns a promise". |
| K7 | `await`: waits for a promise and returns its fulfilled value | n/a | PASS | Technical, How a tester uses it: "`await` waits for a promise and returns its fulfilled value". |
| K8 | `try...catch`: runs the `catch` block when the `try` block throws | n/a | PASS | Technical, How it works: "If it throws an exception, the `catch` block runs". |
| K9 | Strict equality (`===`): treats values of different types as different | n/a | PASS | Technical, How a tester uses it: "Compare with `===`, which treats values of different types as different". |
| K10 | ES module: a file that shares code with `import` and `export`, such as a `.mjs` file in Node.js | n/a | PASS | Technical, How it works: "Modules share code with `import` and `export` statements. Node.js treats a file that ends in `.mjs` as an ES module". |
| K11 | Node.js: the runtime that runs JavaScript outside the browser | n/a | PASS | Technical, What it is: "It runs V8, the JavaScript engine of Google Chrome, outside the browser". |

Open FAILs: 0

FAILs in round 2: 0.

## Round 3 (2026-11-16)

### Fact check: sdet / javascript (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the JavaScript that test scripts use, run with Node.js | none | N/A | This sentence describes the page. |
| 2 | Intro: the page covers the daily part of JavaScript, and ends with a script you run with Node.js | none | N/A | This sentence describes the page. |
| 3 | JavaScript is a lightweight language with first-class functions. An engine interprets it or compiles it just in time | S1 | PASS | "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions." |
| 4 | It is best known as the language of web pages, but it also runs outside the browser, for example in Node.js | S1 | PASS | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| 5 | Node.js is an open-source, cross-platform JavaScript runtime. It runs V8, the engine of Google Chrome, outside the browser | S2 | PASS | "Node.js is an open-source and cross-platform JavaScript runtime environment." and "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| 6 | Its standard library has asynchronous input and output, so code does not block while it waits | S2 | PASS | "Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking." |
| 7 | Postman tests are written in JavaScript | S15 | PASS | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| 8 | Playwright tests are written in TypeScript or JavaScript | S16 | PASS | "When prompted, choose / confirm: ... TypeScript or JavaScript (default: TypeScript)". The source gives this as an install choice. |
| 9 | The next pages build on this one (links) | none | N/A | This sentence describes the page. |
| 10 | `let` declares a block-scoped variable | S3 | PASS | "Declares a block-scoped variable, optionally initializing it to a value." |
| 11 | `const` declares a block-scoped variable that cannot be re-assigned and must get its value at once | S3 | PASS | "Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| 12 | The standard defines eight data types: seven primitives (strings, numbers, booleans, `null`, `undefined`) and objects | S3 | PASS | "The latest ECMAScript standard defines eight data types:" ... "Seven data types that are primitives :" ... "and Object" |
| 13 | JavaScript has first-class functions | S1 | PASS | "a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions" |
| 14 | An arrow function is a shorter way to write a function | S5 | PASS | "An arrow function expression ... has a shorter syntax compared to function expressions" |
| 15 | `filter()` returns a new array with the items for which the callback returned true | S6 | PASS | "The filter() method returns a new array containing the items for which callback returned true." |
| 16 | `map()` returns a new array of the callback's results | S6 | PASS | "The map() method returns a new array of the return value from executing callback on every array item." |
| 17 | `find()` returns the first item for which the callback returned true | S6 | PASS | "The find() method returns the first item for which callback returned true." |
| 18 | `JSON.stringify()` turns a JavaScript value into a JSON string | S14 | PASS | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| 19 | `JSON.parse()` turns a JSON string back into a value | S7 | PASS | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| 20 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 21 | `await` suspends the function until the promise is fulfilled or rejected | S8 | PASS | "by suspending execution until the returned promise is fulfilled or rejected." |
| 22 | You can use `await` only inside an `async` function or at the top level of a module | S9 | PASS | "It can only be used inside an async function or at the top level of a module ." |
| 23 | In `try...catch`, the `try` block runs first. If it throws, the `catch` block runs | S10 | PASS | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| 24 | A `finally` block always runs before the statement ends | S10 | PASS | "The code in the finally block will always be executed before control flow exits the entire construct." |
| 25 | Modules share code with `import` and `export` statements | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements." |
| 26 | Node.js treats a file that ends in `.mjs` as an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| 27 | The `.mjs` extension makes the file an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| 28 | `await` works at the top level of an ES module | S9 | PASS | "It can only be used inside an async function or at the top level of a module ." |
| 29 | Node.js has a browser-compatible `fetch()` | S13 | PASS | "A browser-compatible implementation of the fetch() function." |
| 30 | The script uses `fetch()` to call the Postman Echo service. The output block. "The first line becomes [ 'Asha', 'Mina' ]" | none | N/A | These sentences only report what the page's own example code does or prints. |
| 31 | `filter()` keeps the items that pass a check, `map()` turns each item into a new value, `find()` returns the first item that passes | S6 | PASS | "returns a new array containing the items for which callback returned true" and "returns the first item for which callback returned true" |
| 32 | "Use them to pick the records that a test needs from a larger list." | none | N/A | This is advice. |
| 33 | `JSON.parse()` turns a JSON string into a value | S7 | PASS | "parses a JSON string, constructing the JavaScript value or object described by the string" |
| 34 | "Parse the body of a response, then check its fields." | none | N/A | This is advice. |
| 35 | `JSON.stringify()` turns a value into a JSON string | S14 | PASS | "converts a JavaScript value to a JSON string" |
| 36 | "use it to build a JSON request body" | none | N/A | This is advice. |
| 37 | `await` waits for a promise and returns its fulfilled value | S9 | PASS | "it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 38 | "Put it before every call that returns a promise." | none | FAIL | S9 does not say this. The "every" is the page's own rule, and no cite supports it. Fix: "Use `await` before a call that returns a promise when you need its fulfilled value." |
| 39 | "Catch an error to log what the test was doing, then throw it again." | none | N/A | This is advice. |
| 40 | The `catch` block runs only when the `try` block throws | S10 | PASS | "If any statement within the try block ... throws an exception, control is immediately shifted to the catch block. If no exception is thrown in the try block, the catch block is skipped." |
| 41 | Put a helper in a module and `import` it in each test | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse." |
| 42 | Compare with `===`, which treats values of different types as different | S11 | PASS | "the strict equality operator always considers operands of different types to be different." |
| 43 | Strict equality treats values of different types as different, so `"1" === 1` is `false` | S11 | PASS | "If the operands are of different types, return false ." |
| 44 | "Use `===`." | none | N/A | This is advice. |
| 45 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 46 | To get its fulfilled value, `await` the promise | S9 | PASS | "If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 47 | `const` makes the reference fixed, not the value. The properties of an object in a `const` can still be added, updated, or removed | S4 | PASS | "The value of a constant can't be changed through reassignment using the assignment operator , but if a constant is an object , its properties can be added, updated, or removed." |
| 48 | `JSON.parse()` throws a `SyntaxError` when the text is not valid JSON | S7 | PASS | "SyntaxError Thrown if the string to parse is not valid JSON." |
| 49 | "Check the status of a response before you parse its body." | none | N/A | This is advice. |
| 50 | When the `try` block throws, the `catch` block runs instead | S10 | PASS | "if it throws an exception, the code in the catch block will be executed" |
| 51 | "If that block is empty, nothing reports the error." | none | FAIL | S10 does not say this, and it has no cite. Fix: remove it, or write it as advice, for example "Put code in the `catch` block that handles the exception." |
| 52 | "What a tester can check" callout: the tutorial's own advice, no cites | none | N/A | The callout says it is advice. |
| K1 | `let` / `const`: block-scoped; a `const` cannot be re-assigned, but its object can still change | Key words | PASS | Technical, How it works: "`const` declares a block-scoped variable that cannot be re-assigned". Technical, Common mistakes: "the properties of an object in a `const` can still be added, updated, or removed" |
| K2 | Primitive: one of the seven simple data types, such as a string, a number, or a boolean | Key words | PASS | Technical, How it works: "seven primitives, such as strings, numbers, booleans, `null`, and `undefined`" |
| K3 | Arrow function: a short way to write a function: `(user) => user.name` | Key words | PASS | Technical, How it works: "An arrow function, such as `(user) => user.name`, is a shorter way to write a function" |
| K4 | `filter()` / `map()` / `find()`: keep the items that pass, transform each item, return the first item that passes | Key words | PASS | Technical, How a tester uses it: "`filter()` keeps the items that pass a check, `map()` turns each item into a new value, and `find()` returns the first item that passes" |
| K5 | JSON: text for data. `JSON.stringify()` writes it and `JSON.parse()` reads it | Key words | PASS | Technical, How it works: "`JSON.stringify()` turns a JavaScript value into a JSON string. `JSON.parse()` turns a JSON string back into a value" |
| K6 | Promise: the value that an `async` function returns | Key words | PASS | Technical, How it works: "An `async` function always returns a promise" |
| K7 | `await`: waits for a promise and returns its fulfilled value | Key words | PASS | Technical, How a tester uses it: "`await` waits for a promise and returns its fulfilled value" |
| K8 | `try...catch`: runs the `catch` block when the `try` block throws | Key words | PASS | Technical, How a tester uses it: "The `catch` block runs only when the `try` block throws" |
| K9 | Strict equality (`===`): treats values of different types as different | Key words | PASS | Technical, How a tester uses it: "Compare with `===`, which treats values of different types as different" |
| K10 | ES module: a file that shares code with `import` and `export`, such as a `.mjs` file in Node.js | Key words | PASS | Technical, How it works: "Modules share code with `import` and `export` statements. Node.js treats a file that ends in `.mjs` as an ES module" |
| K11 | Node.js: the runtime that runs JavaScript outside the browser | Key words | PASS | Technical, What it is: "It runs V8, the JavaScript engine of Google Chrome, outside the browser" |

Open FAILs: 2

FAILs in round 3: 2.

## Round 4 (2026-11-16)

### Fact check: sdet / javascript (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| L | Lede: the JavaScript that test scripts use: variables, types, functions, arrays, JSON, async, errors, modules, run with Node.js | none | N/A | Describes the page itself. |
| I | Intro: the page covers what a tester uses every day and ends with a script that you run with Node.js | none | N/A | Describes the page itself. |
| 1 | JavaScript is a lightweight programming language with first-class functions. An engine interprets it or compiles it just in time | S1 | FAIL | S1: "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions." S1 does not say that an engine does the interpreting or compiling. Fix: "JavaScript is a lightweight interpreted (or just-in-time compiled) language with first-class functions." |
| 2 | It is best known as the language of web pages, but it also runs outside the browser, for example in Node.js | S1 | PASS | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| 3 | Node.js is an open-source, cross-platform JavaScript runtime. It runs V8, the JavaScript engine of Google Chrome, outside the browser | S2 | PASS | "Node.js is an open-source and cross-platform JavaScript runtime environment." and "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| 4 | Its standard library has asynchronous input and output, so code does not block while it waits | S2 | PASS | "Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking." |
| 5 | Postman tests are written in JavaScript | S15 | PASS | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| 6 | Playwright tests are written in TypeScript or JavaScript | S16 | PASS | "TypeScript or JavaScript (default: TypeScript)" (the choice offered when you set up Playwright) |
| 7 | The next pages build on this one (links to three pages) | none | N/A | Describes the page and its place in the tutorial. |
| 8 | `let` declares a block-scoped variable | S3 | PASS | "Declares a block-scoped variable, optionally initializing it to a value." |
| 9 | `const` declares a block-scoped variable that cannot be re-assigned and must get its value at once | S3 | PASS | "Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| 10 | The standard defines eight data types: seven primitives, such as strings, numbers, booleans, null, undefined, and objects | S3 | PASS | "The latest ECMAScript standard defines eight data types:" and "Seven data types that are primitives :" followed by Boolean, null, undefined, Number, BigInt, String, Symbol |
| 11 | JavaScript has first-class functions | S1 | PASS | "...programming language with first-class functions." |
| 12 | An arrow function is a shorter way to write a function | S5 | PASS | "An arrow function expression ... has a shorter syntax compared to function expressions" |
| 13 | `filter()` returns a new array with the items for which the callback returned true | S6 | PASS | "The filter() method returns a new array containing the items for which callback returned true." |
| 14 | `map()` returns a new array of the callback's results | S6 | PASS | "The map() method returns a new array of the return value from executing callback on every array item." |
| 15 | `find()` returns the first item for which the callback returned true | S6 | PASS | "The find() method returns the first item for which callback returned true." |
| 16 | `JSON.stringify()` turns a JavaScript value into a JSON string | S14 | PASS | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| 17 | `JSON.parse()` turns a JSON string back into a value | S7 | PASS | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| 18 | An `async` function always returns a promise | S8 | PASS | "Async functions always return a promise." |
| 19 | `await` suspends the function until the promise is fulfilled or rejected | S8 | PASS | "...by suspending execution until the returned promise is fulfilled or rejected." |
| 20 | You can use `await` only inside an `async` function or at the top level of a module | S9 | PASS | "It can only be used inside an async function or at the top level of a module." |
| 21 | In try...catch, the try block runs first. If it throws an exception, the catch block runs | S10 | PASS | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| 22 | A `finally` block always runs before the statement ends | S10 | PASS | "The code in the finally block will always be executed before control flow exits the entire construct." |
| 23 | Modules share code with `import` and `export` statements | S12 | PASS | "...code for reuse. Modules are defined using a variety of import and export statements." |
| 24 | Node.js treats a file that ends in `.mjs` as an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs" (the line is cut off in the file) |
| 25 | Try it: "You need Node.js. Save this as users.mjs and run node users.mjs" | none | N/A | Instruction for the page's own example. |
| 26 | The `.mjs` extension makes the file an ES module, so `await` works at its top level | S12, S9 | PASS | S12: "interpret JavaScript as an ES module via the .mjs"; S9: "You can use the await keyword on its own (outside of an async function) at the top level of a module." |
| 27 | Node.js has a browser-compatible `fetch()` | S13 | PASS | "A browser-compatible implementation of the fetch() function." |
| 28 | The script uses `fetch()` to call the Postman Echo service | none | N/A | Reports what the page's own example code does. |
| 29 | Output block, and "the first line becomes [ 'Asha', 'Mina' ]" | none | N/A | Reports what the example code prints. |
| 30 | Predict the output before each run: a quick way to learn the array methods | none | N/A | Advice. |
| 31 | `filter()` keeps the items that pass a check, `map()` turns each item into a new value, `find()` returns the first item that passes | S6 | PASS | "returns a new array containing the items for which callback returned true"; "a new array of the return value from executing callback on every array item"; "returns the first item for which callback returned true" |
| 32 | Use them to pick the records that a test needs from a larger list | none | N/A | Advice. |
| 33 | `JSON.parse()` turns a JSON string into a value | S7 | PASS | "parses a JSON string, constructing the JavaScript value or object described by the string" |
| 34 | Parse the body of a response, then check its fields | none | N/A | Advice. |
| 35 | `JSON.stringify()` turns a value into a JSON string | S14 | PASS | "converts a JavaScript value to a JSON string" |
| 36 | Use it to build a JSON request body | none | N/A | Advice. |
| 37 | `await` waits for a promise and returns its fulfilled value | S9 | PASS | "If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 38 | Use it before a call that returns a promise when the test needs that value | none | N/A | Advice. |
| 39 | Catch an error to log what the test was doing, then throw it again | none | N/A | Advice. |
| 40 | The `catch` block runs only when the `try` block throws | S10 | PASS | "if it throws an exception, the code in the catch block will be executed" and "If no exception is thrown in the try block, the catch block is skipped." |
| 41 | Put a helper in a module, and `import` it in each test | S12 | N/A | Advice. The cite supports only that modules use import and export (see claim 23). |
| 42 | Compare with `===`, which treats values of different types as different | S11 | PASS | "If the operands are of different types, return false." |
| 43 | Strict equality treats values of different types as different, so `"1" === 1` is `false` | S11 | PASS | "the strict equality operator always considers operands of different types to be" different; "If the operands are of different types, return false." |
| 44 | Use `===` | none | N/A | Advice. |
| 45 | An `async` function always returns a promise (Common mistakes) | S8 | PASS | "Async functions always return a promise." |
| 46 | To get its fulfilled value, `await` the promise | S9 | PASS | "it waits for the Promise to be fulfilled and returns the fulfilled value" |
| 47 | `const` makes the reference fixed, not the value, so the properties of an object in a `const` can still be added, updated, or removed | S4 | PASS | "The value of a constant can't be changed through reassignment ..., but if a constant is an object, its properties can be added, updated, or removed." |
| 48 | `JSON.parse()` throws a `SyntaxError` when the text is not valid JSON | S7 | PASS | "When JSON.parse receives a string that does not conform to the JSON grammar, it throws a SyntaxError." |
| 49 | Check the status of a response before you parse its body | none | N/A | Advice. |
| 50 | When the `try` block throws, the `catch` block runs instead | S10 | PASS | "if it throws an exception, the code in the catch block will be executed" |
| 51 | Put code there that reports the error, or throw it again | none | N/A | Advice. |
| 52 | What a tester can check: callout "Tutorial advice" | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | `let` / `const`: block-scoped variables; a `const` cannot be re-assigned, but its object can still change | none | PASS | Technical, How it works: "`const` declares a block-scoped variable that cannot be re-assigned"; Common mistakes: "the properties of an object in a `const` can still be added, updated, or removed" |
| K2 | Primitive: one of the seven simple data types, such as a string, a number, or a boolean | none | PASS | Technical, How it works: "seven primitives, such as strings, numbers, booleans, `null`, and `undefined`" |
| K3 | Arrow function: a short way to write a function | none | PASS | Technical, How it works: "An arrow function, such as `(user) => user.name`, is a shorter way to write a function" |
| K4 | `filter()` / `map()` / `find()`: keep the items that pass, transform each item, return the first item that passes | none | PASS | Technical, How a tester uses it: "`filter()` keeps the items that pass a check, `map()` turns each item into a new value, and `find()` returns the first item that passes" |
| K5 | JSON: text for data. `JSON.stringify()` writes it and `JSON.parse()` reads it | none | PASS | Technical, How it works: "`JSON.stringify()` turns a JavaScript value into a JSON string. `JSON.parse()` turns a JSON string back into a value" |
| K6 | Promise: the value that an `async` function returns | none | PASS | Technical, How it works: "An `async` function always returns a promise" |
| K7 | `await`: waits for a promise and returns its fulfilled value | none | PASS | Technical, How a tester uses it: "`await` waits for a promise and returns its fulfilled value" |
| K8 | `try...catch`: runs the `catch` block when the `try` block throws | none | PASS | Technical, How it works: "If it throws an exception, the `catch` block runs" |
| K9 | Strict equality (`===`): treats values of different types as different | none | PASS | Technical, How a tester uses it: "Compare with `===`, which treats values of different types as different" |
| K10 | ES module: a file that shares code with `import` and `export`, such as a `.mjs` file in Node.js | none | PASS | Technical, How it works: "Modules share code with `import` and `export` statements. Node.js treats a file that ends in `.mjs` as an ES module" |
| K11 | Node.js: the runtime that runs JavaScript outside the browser | none | PASS | Technical, What it is: "**Node.js** is an open-source, cross-platform JavaScript runtime. It runs V8 ... outside the browser" |

Open FAILs: 1

FAILs in round 4: 1.

## Round 5 (2026-11-16)

### Fact check: sdet / javascript (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the JavaScript that test scripts use, run with Node.js | none | N/A | It describes the page. |
| 2 | Intro: the page covers the part of JavaScript a tester uses, and ends with a small script | none | N/A | It describes the page. |
| 3 | JavaScript is a lightweight interpreted (or just-in-time compiled) language with first-class functions | S1 | PASS | "JavaScript ( JS ) is a lightweight interpreted (or just-in-time compiled ) programming language with first-class functions ." |
| 4 | It is best known as the language of web pages, but it also runs outside the browser, for example in Node.js | S1 | PASS | "While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js" |
| 5 | Node.js is an open-source, cross-platform JavaScript runtime | S2 | PASS | "Node.js is an open-source and cross-platform JavaScript runtime environment." |
| 6 | It runs V8, the engine of Google Chrome, outside the browser | S2 | PASS | "Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser." |
| 7 | Its standard library has asynchronous I/O, so code does not block while it waits | S2 | PASS | "Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking." |
| 8 | Postman tests are written in JavaScript | S15 | PASS | "You can write tests for your Postman API requests in JavaScript in the Post-response tab." |
| 9 | Playwright tests are written in TypeScript or JavaScript | S16 | PASS | "TypeScript or JavaScript (default: TypeScript)". The source says only this about the language choice, so the support is thin. |
| 10 | The next pages build on this one (links) | none | N/A | It describes the page itself. |
| 11 | `let` declares a block-scoped variable | S3 | PASS | "Declares a block-scoped variable, optionally initializing it to a value." |
| 12 | `const` declares a block-scoped variable that cannot be re-assigned and must get its value at once | S3 | PASS | "Declares a block-scoped variable that cannot be re-assigned, which must be initialized at declaration." |
| 13 | The standard defines eight data types: seven primitives (strings, numbers, booleans, null, undefined) and objects | S3 | PASS | "The latest ECMAScript standard defines eight data types: ... Seven data types that are primitives : ... Boolean ... null ... undefined ... Number ... BigInt ... String ... Symbol ... and Object" |
| 14 | JavaScript has first-class functions | S1 | PASS | "programming language with first-class functions" |
| 15 | An arrow function is a shorter way to write a function | S5 | PASS | "An arrow function expression ... has a shorter syntax compared to function expressions" |
| 16 | `filter()` returns a new array with the items for which the callback returned true | S6 | PASS | "The filter() method returns a new array containing the items for which callback returned true ." |
| 17 | `map()` returns a new array of the callback's results | S6 | PASS | "The map() method returns a new array of the return value from executing callback on every array item." |
| 18 | `find()` returns the first item for which the callback returned true | S6 | PASS | "The find() method returns the first item for which callback returned true ." |
| 19 | `JSON.stringify()` turns a JavaScript value into a JSON string | S14 | PASS | "The JSON.stringify() static method converts a JavaScript value to a JSON string" |
| 20 | `JSON.parse()` turns a JSON string back into a value | S7 | PASS | "The JSON.parse() static method parses a JSON string, constructing the JavaScript value or object described by the string." |
| 21 | An `async` function always returns a promise | S8 | PASS | "Each time when an async function is called, it returns a new Promise" |
| 22 | `await` suspends the function until the promise is fulfilled or rejected | S8 | PASS | "by suspending execution until the returned promise is fulfilled or rejected." |
| 23 | `await` can be used only inside an `async` function or at the top level of a module | S9 | PASS | "It can only be used inside an async function or at the top level of a module ." |
| 24 | In `try...catch`, `try` runs first; if it throws, `catch` runs | S10 | PASS | "The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed." |
| 25 | A `finally` block always runs before the statement ends | S10 | PASS | "The code in the finally block will always be executed before control flow exits the entire construct." |
| 26 | Modules share code with `import` and `export` statements | S12 | PASS | "ECMAScript modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements." |
| 27 | Node.js treats a file ending in `.mjs` as an ES module | S12 | PASS | "Authors can tell Node.js to interpret JavaScript as an ES module via the .mjs file extension" |
| 28 | Try it: the `.mjs` extension makes the file an ES module | S12 | PASS | "interpret JavaScript as an ES module via the .mjs file extension" |
| 29 | Try it: `await` works at the top level of an ES module | S9 | PASS | "You can use the await keyword on its own (outside of an async function) at the top level of a module ." |
| 30 | Node.js has a browser-compatible `fetch()` | S13 | PASS | "A browser-compatible implementation of the fetch() function." |
| 31 | Try it: the script uses `fetch()` to call Postman Echo; the printed output; the Mina change | none | N/A | It reports what the page's own example code does or prints. |
| 32 | `filter()` keeps items that pass, `map()` turns each item into a new value, `find()` returns the first item that passes | S6 | PASS | "returns a new array containing the items for which callback returned true"; "returns a new array of the return value from executing callback on every array item"; "returns the first item for which callback returned true" |
| 33 | "Use them to pick the records that a test needs" | none | N/A | It is advice. |
| 34 | `JSON.parse()` turns a JSON string into a value | S7 | PASS | "parses a JSON string, constructing the JavaScript value or object described by the string." |
| 35 | `JSON.stringify()` turns a value into a JSON string | S14 | PASS | "converts a JavaScript value to a JSON string" |
| 36 | `await` waits for a promise and returns its fulfilled value | S9 | PASS | "If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 37 | The `catch` block runs only when the `try` block throws | S10 | PASS | "if it throws an exception, the code in the catch block will be executed"; "If no exception is thrown in the try block, the catch block is skipped." |
| 38 | Put a helper in a module and `import` it in each test | S12 | PASS | "package JavaScript code for reuse. Modules are defined using a variety of import and export statements." The sentence is advice that rests on this fact. |
| 39 | Compare with `===`, which treats values of different types as different | S11 | PASS | "the strict equality operator always considers operands of different types to be different." |
| 40 | Strict equality treats different types as different, so `"1" === 1` is `false` | S11 | PASS | "If the operands are of different types, return false ." The source example has `console.log("1" === 1);`. |
| 41 | An `async` function always returns a promise (Common mistakes) | S8 | PASS | "it returns a new Promise" |
| 42 | To get the fulfilled value, `await` the promise | S9 | PASS | "it waits for the Promise to be fulfilled and returns the fulfilled value." |
| 43 | `const` makes the reference fixed, not the value; object properties in a `const` can be added, updated, or removed | S4 | PASS | "The value of a constant can't be changed through reassignment using the assignment operator , but if a constant is an object , its properties can be added, updated, or removed." |
| 44 | `JSON.parse()` throws a `SyntaxError` when the text is not valid JSON | S7 | PASS | "SyntaxError Thrown if the string to parse is not valid JSON." |
| 45 | Check the status of a response before you parse its body | none | N/A | It is advice. |
| 46 | When the `try` block throws, the `catch` block runs instead | S10 | PASS | "if it throws an exception, the code in the catch block will be executed." |
| 47 | "Put code there that reports the error, or throw it again" | none | N/A | It is advice. |
| K1 | `let` / `const`: block-scoped; a `const` cannot be re-assigned, but its object can still change | Key words | PASS | Technical panels: "`const` declares a block-scoped variable that cannot be re-assigned"; "the properties of an object in a `const` can still be added, updated, or removed" |
| K2 | Primitive: one of the seven simple types, such as string, number, boolean | Key words | PASS | "seven primitives, such as strings, numbers, booleans, `null`, and `undefined`" |
| K3 | Arrow function: a short way to write a function | Key words | PASS | "An arrow function, such as `(user) => user.name`, is a shorter way to write a function" |
| K4 | `filter()` / `map()` / `find()` | Key words | PASS | "`filter()` returns a new array with the items for which the callback returned true. `map()` returns a new array of the callback's results. `find()` returns the first item..." |
| K5 | JSON: text for data; `JSON.stringify()` writes it and `JSON.parse()` reads it | Key words | PASS | "`JSON.stringify()` turns a JavaScript value into a JSON string. `JSON.parse()` turns a JSON string back into a value" |
| K6 | Promise: the value that an `async` function returns | Key words | PASS | "An `async` function always returns a promise" |
| K7 | `await`: waits for a promise and returns its fulfilled value | Key words | PASS | "`await` waits for a promise and returns its fulfilled value" |
| K8 | `try...catch`: runs the `catch` block when the `try` block throws | Key words | PASS | "The `catch` block runs only when the `try` block throws" |
| K9 | Strict equality (`===`): treats values of different types as different | Key words | PASS | "Compare with `===`, which treats values of different types as different" |
| K10 | ES module: a file that shares code with `import` and `export`, such as a `.mjs` file in Node.js | Key words | PASS | "Modules share code with `import` and `export` statements. Node.js treats a file that ends in `.mjs` as an ES module" |
| K11 | Node.js: the runtime that runs JavaScript outside the browser | Key words | PASS | "It runs V8, the JavaScript engine of Google Chrome, outside the browser" |

Open FAILs: 0

FAILs in round 5: 0.

Open FAILs: 0
