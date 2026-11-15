# Voices fact check: Exploring Features with Test Charters

Page: `content/agentic-qa/test-charters.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-test-charters.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / test-charters (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The oracle problem | Layman | PASS | Left out "for given inputs and state", the source table (only its weak spots are kept), and the callout's cause-and-effect detail. "The hard part" is a loose way to say "challenge". It is acceptable. |
| 2 | The oracle problem | Bangla | PASS | Left out the "nobody reported" detail and the table's "watch out" column details. Meaning matches. |
| 3 | Exploratory testing and test charters | Layman | FAIL | "**Debriefing**: a talk after the session." The Technical panel says the debriefing "usually follows" the session. The Layman sentence drops "usually", so it claims more. Fix: "Debriefing: usually a talk after the session." |
| 4 | Exploratory testing and test charters | Bangla | FAIL | "Glossary বলে, tester-এর জ্ঞান, exploration আর আগের ফলাফল থেকে test তৈরি হয়।" The Technical panel names only "the tester's knowledge and previous results". It does not name "exploration". Fix: remove "exploration আর". Also check that the Technical panel matches S4. |
| 5 | Explore the code read-only with Claude | Layman | FAIL | "It does not read your CLAUDE.md files." The Technical panel says it "starts without your CLAUDE.md files". "Does not read" is stronger because it suggests the agent never reads them. Fix: "It starts without your CLAUDE.md files." |
| 6 | Explore the code read-only with Claude | Bangla | PASS | Left out the git status snapshot, the note that built-in read-only commands run without approval, and the example prompt text. The Bangla asks for file and line numbers, which matches the Technical example prompt. |
| 7 | Probe the API, the database, and the UI | Layman | FAIL | "A shared server goes in `.mcp.json` at the project root. Claude Code asks you to approve it first." The Technical panel says "project-scoped", not "shared". It also limits the approval to "interactive sessions", and the Layman drops that limit. Fix: "A project-scoped server goes in `.mcp.json` at the project root. In interactive sessions, Claude Code asks for approval before it uses it." |
| 8 | Probe the API, the database, and the UI | Layman | FAIL | "You can write a password as `${VAR}`, so it is not in the file." The Technical panel says only that `.mcp.json` can reference environment variables as `${VAR}`. It gives no reason ("so it is not in the file"). Fix: remove the reason clause. |
| 9 | Probe the API, the database, and the UI | Layman | FAIL | "With no list at all, it only looks." The Technical panel says that with no permissions and no categories, it enables `list`, `read`, and `utility` (since v1.44.0). It does not say that `utility` only looks. The Layman also drops the "no categories" and version conditions. Fix: "With no permissions and no categories, since v1.44.0, it enables only `list`, `read`, and `utility`." |
| 10 | Probe the API, the database, and the UI | Bangla | FAIL | "কোনো permission না দিলে v1.44.0 থেকে এটি শুধু `list`, `read` আর `utility` চালু করে।" The Technical panel's condition is "no permissions and no categories". The Bangla drops "no categories", so the claim is broader. Fix: "কোনো permission বা category না দিলে…". |
| 11 | Write the charters | Layman | PASS | Left out "through the API", the oracles of CH-2 and CH-3, the rule ID in the template's Trace field, and the template's full text. "Which error" is a short form of "which status and message". |
| 12 | Write the charters | Bangla | PASS | Left out the CH-2 and CH-3 oracles and the full template text. Meaning matches. |
| 13 | Derive expected behavior and hidden rules | Layman | FAIL | "No balance gives HTTP 208. That looks wrong. Treat it as a suspected bug." The Technical panel says it "looks odd". It also says to treat it as a suspected defect "until someone confirms it". The Layman makes "odd" stronger ("wrong") and drops the limit. Fix: "That looks odd. Treat it as a suspected bug until someone confirms it." |
| 14 | Derive expected behavior and hidden rules | Layman | FAIL | "The docs example sends no `to_account`, but the code needs it." The Technical panel says the controller "reads `to_account`". It does not say the code needs it. Fix: "…but the controller reads `to_account`." |
| 15 | Derive expected behavior and hidden rules | Bangla | FAIL | "Test basis-এর defect report test analysis-এর একটি work product।" The Technical panel says "A defect in the test basis is a test analysis work product". The Bangla changes "defect" to "defect report". Fix: "Test basis-এর একটি defect test analysis-এর work product।" |
| 16 | From a session to work products | Layman | FAIL | "**Test cases.** Scripted cases for the confirmed rules. `<Cite n={3} />`" In the Technical panel, Cite 3 supports "Test cases are test design work products". The Layman drops that fact and puts Cite 3 on the uncited "scripted cases" sentence. Fix: add "A test case is a test design product." before Cite 3, or remove the cite. |
| 17 | From a session to work products | Layman | FAIL | "**Suspected defects.** Each one has its steps and evidence. `<Cite n={3} />`" In the Technical panel, Cite 3 supports "Defect reports are test execution work products". The Layman drops that fact and puts Cite 3 on the uncited "steps and evidence" sentence. Fix: add "Defect reports are outputs of test execution." before Cite 3, or remove the cite. |
| 18 | From a session to work products | Bangla | PASS | Left out the "then the ticket" destination and the template's header fields. Cites match the Technical panel. |
| 19 | Practice | Layman | PASS | Left out the status and message in step 2, the SELECT-only wording, "for the High rules", and the full prompt text. |
| 20 | Practice | Bangla | PASS | Left out the same details as the Layman. Meaning matches. |
| 21 | Common mistakes | Layman | PASS | Left out `MCP_REQUIRE_READONLY_DB_USER=true`, "utility", and "area, resources". |
| 22 | Common mistakes | Bangla | PASS | Left out "resources" in the charter item. The heading "অন্ধ বিশ্বাস" is a little stronger than "Trusting". I accepted it because the fix text matches. |

Bangla notes:
- Practice, step 4: "Script-এর মতো যা লাগে, তা বাদ দিন" reads unnaturally. Use "Script-এর মতো পড়ায় এমন অংশ বাদ দিন" instead.
- Common mistakes: "অন্ধ বিশ্বাস" is stronger than the English heading "Trusting". Consider "ভরসা করা".
- All Bangla panels address the reader as আপনি or with imperative forms that fit it. No command, flag, path, or product name is translated. No missing hyphens between an English word and a Bangla suffix.
- The Bangla in rows 4, 10, and 15 is clear enough to judge, so none of these FAILs comes from an unreadable sentence.

Open FAILs after round 1: 12

Script check of round 1: 22 rows, 12 FAIL rows.

## Voices fact check: agentic-qa / test-charters (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The oracle problem | Layman | FAIL | "Similar features, user help text, and people who own the feature help too." Technical lists "Stakeholders: The intent". It never says they own the feature. This changes the noun and narrows the scope. Fix: "…and stakeholders help too." |
| 2 | The oracle problem | Bangla | PASS | Leaves out the "Marketing text is not a rule" and "Memory is not always correct" warnings, and the "for given inputs and state" detail. |
| 3 | Exploratory testing and test charters | Layman | FAIL | "**Test session sheet**: notes on the steps you took and what you found." Technical says "The tester **may use it to record**" the steps and discoveries. The Layman sentence drops "may" and defines the sheet as notes, which is stronger. Fix: "you may use it to note the steps you took and what you found." Other differences are acceptable: "product" for "test object", and "choose the next test…" for the dynamic design in S4. |
| 4 | Exploratory testing and test charters | Bangla | PASS | Leaves out the "Related pages" callout and the point that exploratory testing complements formal techniques. |
| 5 | Explore the code read-only with Claude | Layman | PASS | Leaves out the auto-mode classifier detail, the git status snapshot, and the example prompt. "Ask Claude for the file and line of each check" comes from the Technical example prompt. |
| 6 | Explore the code read-only with Claude | Bangla | PASS | Leaves out the git status snapshot and the example prompt. "File and line number of each check" comes from the Technical example prompt. |
| 7 | Probe the API, the database, and the UI | Layman | PASS | Leaves out the list of fields where `${VAR}` works, the `MCP_REQUIRE_READONLY_DB_USER` name, the example JSON, and "an agent drives one command at a time". "A GET only reads" matches "A read request (GET)". |
| 8 | Probe the API, the database, and the UI | Bangla | FAIL | "`.mcp.json`-এ password `${VAR}` আকারে লেখা যায়।" Technical says `.mcp.json` can reference environment variables as `${VAR}` in command, args, env, url, and headers. It never mentions passwords. Adding "password" is a new claim. Fix: "`.mcp.json`-এ environment variable `${VAR}` আকারে লেখা যায়।" |
| 9 | Write the charters | Layman | PASS | Leaves out the template's ID and title, the "Risk: who is hurt" detail, and the "through the API" detail in CH-1. |
| 10 | Write the charters | Bangla | PASS | Leaves out the "through the API" wording for CH-2 and CH-3, and part of the oracles for CH-2 and CH-3. |
| 11 | Derive expected behavior and hidden rules | Layman | PASS | Leaves out the rule IDs, the per-rule confidence levels, the file and line evidence, "charged to the platform", and the `endpoints.md` file name. "The business" in "Only an answer from the business…" is read as the stakeholder. |
| 12 | Derive expected behavior and hidden rules | Bangla | PASS | Leaves out the same details as the Layman panel: rule IDs, per-rule confidence, file and line evidence, and `endpoints.md` is kept. |
| 13 | From a session to work products | Layman | PASS | Leaves out "then the ticket" as the next step, and the template's header fields. "The page goes deeper" is only a pointer to the linked pages. The Technical panel gives those links as destinations, so this is borderline. |
| 14 | From a session to work products | Bangla | PASS | Leaves out "then the ticket" and the template's header fields. "বিস্তারিত … পেজে" is borderline in the same way. |
| 15 | Practice | Layman | FAIL | "Run one 45-minute charter on the cash out feature of the dMoney practice app, or on your own project." Technical says "or on **a similar feature** of your own project". The Layman sentence drops "a similar feature", so the scope is wider (any part of the project). Fix: "…or on a similar feature of your own project." |
| 16 | Practice | Bangla | PASS | Leaves out the link to "A Tour of the Codebase" and the "for the High rules" detail is kept. Nothing else was added. |
| 17 | Common mistakes | Layman | PASS | Leaves out the `list,read,utility` value, the `MCP_REQUIRE_READONLY_DB_USER` variable, and "Bring the questions list". "Read permissions only" is a close match to "list,read,utility only". |
| 18 | Common mistakes | Bangla | FAIL | "**Claude-এর summary-তে অন্ধ বিশ্বাস**" ("blind trust"). Technical says only "Trusting Claude's summary of a session". "অন্ধ" makes it stronger. Fix: "Claude-এর summary-তে ভরসা করা". |

Bangla notes:
- The panels are in natural Bangla. They address the reader as আপনি, either directly or by the imperative.
- Commands, flags, paths, and product names stay in English. Hyphens between English words and Bangla suffixes are present (`APIRequestContext`-এর, `.mcp.json`-এ, `@e1`-এর, Test case-এর).
- The "Common mistakes" heading "অন্ধ বিশ্বাস" is a FAIL for meaning, not for style (row 18).
- I could read every sentence well enough to judge it.

Open FAILs after round 2: 5

Script check of round 2: 18 rows, 5 FAIL rows.

## Voices fact check: agentic-qa / test-charters (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The oracle problem | Layman | PASS | Left out "for given inputs and state", the table rows for the sources, and the word "unreported". "Any source" and "specs missing or weak" are fair plain wording. |
| 2 | The oracle problem | Bangla | PASS | Same details left out. Every cite is on the same fact as in the Technical panel. |
| 3 | Exploratory testing and test charters | Layman | FAIL | "It reads code and data fast and drafts notes." The Technical panel says only that the tutorial asks Claude to read code and data and draft notes. It gives no claim about speed in this section. Fix: "It reads code and data and drafts notes." |
| 4 | Exploratory testing and test charters | Bangla | PASS | Left out "dynamic", the point that exploratory testing complements formal techniques, and the two Related-pages links. |
| 5 | Explore the code read-only with Claude | Layman | PASS | Left out the auto mode classifier detail, the example prompt, and the git status snapshot. "Business words" stands for "domain words", which is acceptable. |
| 6 | Explore the code read-only with Claude | Bangla | PASS | Left out the example prompt. The single cite 9 at the end of the Explore group covers the group of short sentences. |
| 7 | Probe the API, the database, and the UI | Layman | PASS | Left out Node.js, `APIRequestContext`, the `${VAR}` field list, and the example JSON. "A GET only reads" is acceptable as a restatement of "read request". |
| 8 | Probe the API, the database, and the UI | Bangla | PASS | Same details left out. |
| 9 | Write the charters | Layman | PASS | Left out the "rule ID" part of Trace, the ledger rows, the role-check oracles, and the limit-table oracles. |
| 10 | Write the charters | Bangla | PASS | Left out the "rule ID" part of Trace and the oracles for CH-2 and CH-3. |
| 11 | Derive expected behavior and hidden rules | Layman | PASS | Left out R1–R6 evidence references, the confidence level of each rule, and "charged to the platform". Dropping "only" in "Customers have a daily limit" makes the claim weaker, not stronger. |
| 12 | Derive expected behavior and hidden rules | Bangla | PASS | Same details left out. |
| 13 | From a session to work products | Layman | FAIL | "A test log is a record, in time order, of the details of a test run." The word "relevant" was dropped, so the claim now covers all details. Fix: "the important details". |
| 14 | From a session to work products | Layman | FAIL | "The [Test Design & Blast Radius] page goes deeper." The Technical panel gives the page only as the place where test cases go next. It makes no claim that the page goes deeper. Fix: "Test cases go next to the [Test Design & Blast Radius] page." |
| 15 | From a session to work products | Layman | FAIL | "The [Test Execution & Bug Investigation] page goes deeper." This is the same problem as row 14. Fix: "Suspected defects go next to the [Test Execution & Bug Investigation] page." |
| 16 | From a session to work products | Bangla | FAIL | "বিস্তারিত [Test Design & Blast Radius] পেজে।" The Technical panel says only where the output goes next. It does not say the page gives more detail. Fix: "এরপর [Test Design & Blast Radius] পেজে যায়।" |
| 17 | From a session to work products | Bangla | FAIL | "বিস্তারিত [Test Execution & Bug Investigation] পেজে।" This is the same problem as row 16. Fix: "এরপর [Test Execution & Bug Investigation] পেজে যায়।" |
| 18 | Practice | Layman | PASS | Left out the step 2 detail that the checks list status and message, the enum values, and "for the High rules". |
| 19 | Practice | Bangla | PASS | Left out the enum values. |
| 20 | Common mistakes | Layman | PASS | Left out `MCP_REQUIRE_READONLY_DB_USER`, the `utility` permission, and "session sheets". "Notes" is a fair plain word for the session sheet. |
| 21 | Common mistakes | Bangla | PASS | Nothing material left out. |

Bangla notes:
- None. The Bangla reads naturally and addresses the reader as আপনি or with polite imperatives. Commands, flags, paths, and product names stay in English, and the English-word + hyphen + Bangla-suffix forms are correct. The only Bangla FAILs are the "বিস্তারিত … পেজে" sentences in rows 16 and 17. I could read every sentence well enough to judge it.

Open FAILs after round 3: 6

Script check of round 3: 21 rows, 6 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / test-charters (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F24 | facts | RESOLVED | The Technical panel says "The tutorial sends requests with `curl`, or with Playwright: it can send requests … through `APIRequestContext`. <Cite n={10} />". This labels `curl` as the tutorial's own practice, and the cite sits on the Playwright claim. The write example is now "A `POST` request is still a write to the system under test". It has no flag, and no tool fact is left in it. The Layman and Bangla panels match. |
| V3 | voices | RESOLVED | The Layman panel says "The tutorial asks it to read code and data and to draft notes." The Technical panel says "The tutorial asks Claude to read code and data and to draft notes." The speed claim is gone. The Bangla panel also has no speed claim. |
| V13 | voices | RESOLVED | The Layman panel says "A test log is a record, in time order, of the relevant details of a test run. <Cite n={16} />". The Technical panel says "a chronological record of relevant details about test execution". S16 says "A chronological record of relevant details about test execution." "Relevant" is back, and the cite is the same. |
| V14 | voices | RESOLVED | The Layman panel says "Test cases go next to the [Test Design & Blast Radius] page." The Technical table puts the same page in the "Where it goes next" column for Test cases. The cite on the work-product claim is the same as in the Technical panel (S3). |
| V15 | voices | RESOLVED | The Layman panel says "Suspected defects go next to the [Test Execution & Bug Investigation] page." The Technical table gives the same "Where it goes next" for Suspected defects. The cite is the same (S3). |
| V16 | voices | RESOLVED | The Bangla panel says "এরপর এটি [Test Design & Blast Radius] পেজে যায়।" This gives only the next destination, as the Technical panel does. The "বিস্তারিত" claim is gone. |
| V17 | voices | RESOLVED | The Bangla panel says "এরপর এটি [Test Execution & Bug Investigation] পেজে যায়।" This gives only the next destination, as the Technical panel does. The "বিস্তারিত" claim is gone. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
