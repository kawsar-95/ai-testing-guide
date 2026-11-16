# Research notes: SDET Roadmap, TypeScript for Testers

Page: `content/sdet/typescript.mdx`. Accessed 2026-11-15.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | TypeScript for JavaScript Programmers | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html | 2026-11-15 |
| S2 | The Basics | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/2/basic-types.html | 2026-11-15 |
| S3 | Everyday Types | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/2/everyday-types.html | 2026-11-15 |
| S4 | Object Types | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/2/objects.html | 2026-11-15 |
| S5 | Narrowing | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/2/narrowing.html | 2026-11-15 |
| S6 | TSConfig Option: strict | TypeScript (Microsoft) | https://www.typescriptlang.org/tsconfig/strict.html | 2026-11-15 |
| S7 | Modules: TypeScript | Node.js (OpenJS Foundation) | https://nodejs.org/api/typescript.html | 2026-11-15 |
| S8 | TypeScript | Playwright (Microsoft) | https://playwright.dev/docs/test-typescript | 2026-11-15 |
| S9 | Generics | TypeScript (Microsoft) | https://www.typescriptlang.org/docs/handbook/2/generics.html | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | TypeScript has all of JavaScript plus a type system. | S1 | "TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system." |
| C2 | TypeScript infers types in many cases. | S1 | "TypeScript knows the JavaScript language and will generate types for you in many cases." |
| C3 | A static type system predicts what code does before it runs. | S2 | "The alternative is to use a static type system to make predictions about what the code is expected to do before it runs." |
| C4 | `tsc` is the TypeScript compiler. | S2 | "tsc , the TypeScript compiler" |
| C5 | Type annotations never change runtime behaviour. | S2 | "Type annotations never change the runtime behavior of your program." |
| C6 | `noImplicitAny` makes an implicit `any` an error. | S3 | "Use the compiler flag noImplicitAny to flag any implicit any as an error." |
| C7 | `any` is not type-checked. | S3 | "You usually want to avoid this, though, because any isn't type-checked." |
| C8 | Without strictNullChecks, null and undefined are assignable to any type. | S2 | "By default, values like null and undefined are assignable to any other type." |
| C9 | With strictNullChecks on, test for null or undefined before use. | S3 | "With strictNullChecks on , when a value is null or undefined , you will need to test for those values before using methods or properties on that value." |
| C10 | `strict` turns on the strict family of checks. | S6 | "Turning this on is equivalent to enabling all of the strict mode family options" |
| C11 | A union type: values that may be any one of the member types. | S3 | "A union type is a type formed from two or more other types, representing values that may be any one of those types." |
| C12 | A type alias is a name for any type. | S3 | "A type alias is exactly that - a name for any type ." |
| C13 | An interface names an object type. | S3 | "An interface declaration is another way to name an object type" |
| C14 | Optional properties use `?`. | S3 | "To do this, add a ? after the property name" |
| C15 | Literal types: specific strings and numbers in type positions. | S3 | "we can refer to specific strings and numbers in type positions" |
| C16 | `readonly` cannot be written during type-checking; no runtime change. | S4 | "While it won't change any behavior at runtime, a property marked as readonly can't be written to during type-checking." |
| C17 | TypeScript understands `typeof` checks for narrowing. | S5 | "There are a couple of different constructs TypeScript understands for narrowing. typeof type guards" |
| C18 | Generics: a component that works over many types. | S9 | "being able to create a component that can work over a variety of types rather than a single one" |
| C19 | Node.js runs files with erasable TypeScript syntax and does no type checking. | S7 | "By default Node.js will execute TypeScript files that contains only erasable TypeScript syntax. Node.js will replace TypeScript syntax with whitespace, and no type checking is performed." |
| C20 | Type stripping is stable. | S7 | "Type stripping is now stable." |
| C21 | Playwright runs TypeScript tests out of the box. | S8 | "Playwright supports TypeScript out of the box. You just write tests in TypeScript, and Playwright will read them, transform to JavaScript and run." |
| C22 | Playwright does not check types; run `tsc` alongside. | S8 | "Note that Playwright does not check the types and will run tests even if there are non-critical TypeScript compilation errors. We recommend you run TypeScript compiler alongside Playwright." |
| C23 | The CI type-check command. | S8 | "npx tsc - p tsconfig.json - - noEmit" |
| C24 | Watch mode for local work. | S8 | "npx tsc -p tsconfig.json --noEmit -w" |
| C25 | TypeScript infers types in many cases, even when they are left out. | S2 | "In many cases, TypeScript can even just infer" |
| C26 | A static type-checker like TypeScript helps find bugs before the code runs. | S2 | "we could have a tool that helps us find these bugs before our code runs" |
| C27 | Type annotations describe what types of values a function can be called with. | S2 | "What we did was add type annotations on person and date to describe what types of values greet can be called with." |
| C28 | Literals combined in a union express a set of known values. | S3 | "by combining literals into unions, you can express a much more useful concept" |
| C29 | `strict` toggles all the strictness flags on; the two biggest are noImplicitAny and strictNullChecks. | S2 | "toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are noImplicitAny and strictNullChecks" |
| C30 | An interface declaration describes the shape of an object. | S1 | "shape using an interface declaration" |
| C31 | JavaScript returns undefined for a missing property; TypeScript reports an error. | S2 | "JavaScript gives us different behavior and returns the value undefined" |
| C32 | (same) | S2 | "In TypeScript, the following code produces an error about location not being defined" |
| C33 | Forgetting to handle null and undefined causes countless bugs. | S2 | "forgetting to handle null and undefined is the cause of countless bugs in the world" |

## Run check

The "Try it" file `users.ts` ran on 2026-11-15 with Node.js 26.8.1 and TypeScript 5.9.3.

- `tsc --noEmit --strict users.ts`: exit 0. `node users.ts` printed `[ 'Asha (tester)', 'Rafi (developer)' ]` and `[ 'none', 'example.com' ]`.
- With `role: 'manager'`: `tsc` reported `error TS2322: Type '"manager"' is not assignable to type 'Role'.` and exited 2, but `node` still ran the file and printed `'Asha (manager)'`.
- Without the `undefined` check: `tsc` reported `error TS18048: 'user.email' is possibly 'undefined'.` and exited 2; `node` threw `TypeError: Cannot read properties of undefined (reading 'split')` at run time.
