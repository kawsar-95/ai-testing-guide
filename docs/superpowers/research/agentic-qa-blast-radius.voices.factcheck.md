# Voices fact check: Test Design & Blast Radius

Page: `content/agentic-qa/blast-radius.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-blast-radius.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / blast-radius (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | From acceptance criteria to test cases | Layman | PASS | Left out: test charters and other testware, the test data requirements, the test environment, and the Test Design with Claude / Black-Box Techniques / Requirement Analysis links. |
| 2 | From acceptance criteria to test cases | Bangla | PASS | Left out: the table and the Black-Box and Requirements links. The bullets have no cite of their own, and the cite on the lead sentence covers them. |
| 3 | Blast radius is impact analysis | Layman | FAIL | Sentence: ""Blast radius" is the tutorial's name for everything that one change can affect. ISTQB calls the work impact analysis: … you estimate the effort that the change needs." Two problems. (a) The Technical panel defines blast radius as "the result of an impact analysis on one change", not as "everything that one change can affect". (b) The Technical panel says "an estimate of the resources needed", and "effort" is narrower than "resources". Fix: "The tutorial uses "blast radius" for the result of an impact analysis on one change." Then: "…and you estimate the resources that the change needs." The rest passes. Left out: the maintenance testing triggers, the impact map template, and the Assumptions / Unresolved sections. |
| 4 | Blast radius is impact analysis | Bangla | PASS | Left out: the impact map table (the sentence about "Assumptions বা Unresolved" matches the template), and the links to other pages. |
| 5 | Get the change | Layman | FAIL | Sentence: "if the branch has no pull request yet, ask Claude to compare it with `main`." The Technical panel gives this advice for a branch that is not pushed ("A branch that is not pushed has no pull request yet"). A branch can be pushed and still have no pull request, so the condition is wider. The sentence also says "Without a number", where the Technical panel says "With no argument". Fix: "If the branch is not pushed, it has no pull request yet. Then ask Claude to compare it with `main`." And: "Without an argument, it uses…". Left out: `changedFiles`, the repeatable `--exclude`, the `-R` short form, the glob, the merge base, `stash`, the example commands. |
| 6 | Get the change | Bangla | FAIL | Sentence: "branch-এর এখনও pull request না থাকলে Claude-কে `main`-এর merge base-এর সাথে তুলনা করতে বলুন". It has the same wider condition as row 5: the Technical panel says the branch is not pushed. Fix: "branch push না করা থাকলে এখনও তার pull request নেই। তখন Claude-কে … তুলনা করতে বলুন।" Also, "ওই issue-গুলোতেই acceptance criteria থাকে" uses "ই", which reads as "only there". The Technical panel does not say "only". Fix: drop "ই". |
| 7 | Trace callers and dependents | Layman | FAIL | Sentence: "the report for PR #8 found that `checkCustomerLimits` had the most dependents: 3 callers, 3 endpoints, and 5 pages." The Technical panel limits the claim: "the changed symbol with the highest fan-in". The Layman sentence drops the limit and reads as the most dependents of any symbol. Fix: "…had the most dependents of the changed symbols". Other notes: the cite 8 on "does nothing until you install the plugin…" matches the Technical panel only for the "install the binary first, then the plugin" part. The "Inactive until you install a plugin" part carries cite 9 there. This is not a FAIL. Left out: "not started in cloud sessions", tree-sitter, `graphify hook install`, the more than 40 languages of Serena, and the install command. |
| 8 | Trace callers and dependents | Bangla | FAIL | Sentence: "`checkCustomerLimits`-এর fan-in সবচেয়ে বেশি: 3টি caller → 3টি endpoint → 5টি page।" It drops "the changed symbol with the highest fan-in", the same as row 7. Fix: "পরিবর্তিত symbol-গুলোর মধ্যে `checkCustomerLimits`-এর fan-in সবচেয়ে বেশি". The rest passes. Left out: "Inactive until you install a plugin", tree-sitter, the more than 40 languages, `graphify hook install`. |
| 9 | Data, contracts, UI, and configuration | Layman | FAIL | Sentence: "Many integration scenarios come from the contract and UI checks." The Technical panel says "most integration scenarios". "Many" is weaker. Fix: "Most integration scenarios come from the contract and UI checks." The rest passes. Left out: model, seed, and raw SQL; `swaggerTrnx.yaml`; the roles example; the `package.json` and lockfile example; middleware; "with a read-only query". |
| 10 | Data, contracts, UI, and configuration | Bangla | PASS | Left out: the same details as row 9. "বেশিরভাগ" matches "most". |
| 11 | Scenario categories for a money transfer | Layman | PASS | Left out: the ledger row example, "send text as the amount", the cite for the Positive row, and the "Skip a step / parallel requests" examples for Adversarial. The tutorial advice is kept as advice. |
| 12 | Scenario categories for a money transfer | Bangla | PASS | Left out: the "Cover each… with these six categories" wording and the "Use a function more times than allowed" example. "back end-এ হয় কি না" matches "run on the back end". |
| 13 | Structured test cases | Layman | FAIL | Sentence: "If one test depends on another, the other test runs first." The Technical panel limits this: "If a high-priority case depends on a low-priority case, the low-priority case must run first." The Layman sentence widens it to any dependency. Fix: "If an important test depends on a less important test, run the less important test first." |
| 14 | Structured test cases | Layman | FAIL | Sentence: "In dMoney, each title starts with "Verify" and does not tell the result." The Technical panel gives a rule of the dMoney `test-design` skill ("The dMoney `test-design` skill adds a title rule"). The Layman sentence states a fact about dMoney's titles. Fix: "The dMoney test-design skill has a rule: a title starts with "Verify" and does not tell the result." Left out: the self-check rule, the template code block, the other-page links. |
| 15 | Structured test cases | Bangla | PASS | Left out: the self-check quote ("every requirement highlight is covered…") and the other-page links. The sentence "dMoney-এর `test-design` skill-এ প্রতিটি title…" gives the skill's rule, as the Technical panel does. |
| 16 | Make Claude do it well | Layman | PASS | Left out: `allowed-tools`, `context: fork`, the "every ring has a regression case" check, the `docs/test-case-template.md` step, and the "Open questions" wording. "Same thing with the same result" simplifies "same input class with the same outcome". |
| 17 | Make Claude do it well | Bangla | PASS | Left out: `allowed-tools`, the "every ring has a regression case" check, and the Open questions item. The note "Technical panel-এর prompt" refers to another panel. |
| 18 | Practice | Layman | PASS | Left out: "which changed Send Money", the "Mark a category that does not apply" part of the step 5 prompt, the "highest fan-in" statement, the boundary-value condition in the done check, and the `dmoney-transaction-api/.artifacts/` path. The done check ("You are done when…") lists two of the three conditions. This is a left-out detail, not a new claim. |
| 19 | Practice | Bangla | PASS | Left out: "which changed Send Money", the "Mark a category that does not apply" part, and the "highest fan-in" statement. |
| 20 | Common mistakes | Layman | PASS | Left out: "each entry point" and "dynamic calls under Unresolved". "or ask" is a looser form of "Put an unknown limit under Open questions". |
| 21 | Common mistakes | Bangla | PASS | Left out: the same details as row 20. |

Bangla notes:
- No sentence reads unnaturally in a way that stops the meaning.
- The Bangla panel of "Make Claude do it well" and of "Structured test cases" refers to the "Technical panel-এর prompt/template". A reader may not know what this panel is. Name the template or the prompt instead.
- The Bangla panel of "From acceptance criteria to test cases" and of "Blast radius is impact analysis" has bullets without a cite of their own. The cite on the lead sentence covers them, so this is not a FAIL.
- The panels address the reader as আপনি. Commands, flags, paths, and product names are kept in English. The hyphen between English words and Bangla suffixes is present in the sentences that I checked.

Open FAILs after round 1: 8

Script check of round 1: 21 rows, 8 FAIL rows.

## Voices fact check: agentic-qa / blast-radius (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | From acceptance criteria to test cases | Layman | PASS | Leaves out test data requirements, the test environment, testware and test charters, and the syllabus-example table. "before they write tests" is a small framing that the Technical panel does not state, but it adds no fact. |
| 2 | From acceptance criteria to test cases | Bangla | PASS | Same details left out as in the Technical panel, except that the Bangla keeps the test data and test environment. All facts and cites match. |
| 3 | Blast radius is impact analysis | Layman | PASS | Leaves out the "hot fixes, upgrades, retirement" triggers, the "checks the change" point, and the Assumptions and Unresolved sections of the template. "Most of the system usually stays unchanged" matches "unchanged parts, which are usually most of the system". |
| 4 | Blast radius is impact analysis | Bangla | PASS | Keeps the triggers. The Assumptions and Unresolved sentence matches the template in the Technical panel. |
| 5 | Get the change | Layman | PASS | Leaves out `-R`, `changedFiles`, "repeatable", "merge base" and "stash". "The field `files` lists the files" is a mild gloss of "its fields include `files`". |
| 6 | Get the change | Bangla | PASS | All facts match. Leaves out nothing that matters. |
| 7 | Trace callers and dependents | Layman | FAIL | Sentence: "It does nothing until you install the plugin and the language server for your language. <Cite 8>". The Technical panel cites S9 for "Inactive until you install a plugin for your language" and S8 for "install the binary first, then the plugin". The Layman sentence joins both facts under S8 only. Fix: cite 9 for "does nothing until you install the plugin" and 8 for the language server. |
| 8 | Trace callers and dependents | Bangla | PASS | Leaves out "over 40 languages", the graphify rebuild note, and the hook. The cite group at the end of the plugin bullet matches the Technical cites 8 and 9. |
| 9 | Data, contracts, UI, and configuration | Layman | PASS | Leaves out the file name `swaggerTrnx.yaml`, the 201/208/404 codes, the roles example, the config files, and "confirmed with a read-only query". |
| 10 | Data, contracts, UI, and configuration | Bangla | PASS | Keeps the file name and codes. All facts and cites match. |
| 11 | Scenario categories for a money transfer | Layman | PASS | Leaves out the "all four ideas" detail on the one-card example and the integration example about ledger rows. "Check that the server does all checks" drops "cannot be bypassed", which only narrows the claim. |
| 12 | Scenario categories for a money transfer | Bangla | PASS | "খুব দ্রুত কয়েক জায়গা থেকে" leaves out "one card". Otherwise all facts and cites match. |
| 13 | Structured test cases | Layman | PASS | Leaves out the "manages" part of the risk-based testing definition, the template sample, and the self-check "≥ 1 test case". "a later change" adds "later", which is trivial. |
| 14 | Structured test cases | Bangla | PASS | Leaves out the template sample and the self-check. "পরের change" adds "পরের", which is trivial. |
| 15 | Make Claude do it well | Layman | PASS | Leaves out `allowed-tools`, `context: fork`, the `tools: Read, Grep, Glob` detail, the enforcement point, and "every ring has a regression case". |
| 16 | Make Claude do it well | Bangla | PASS | Leaves out `allowed-tools`. All facts and cites match. |
| 17 | Practice | Layman | FAIL | Sentence: "You are done when each criterion has a test case and you opened the proof for each row." The Technical check has three conditions, including "every boundary value comes from a criterion or the code". The Layman drops one, so the success test is weaker. Fix: add "and each edge value comes from a criterion or the code." |
| 18 | Practice | Bangla | PASS | All three conditions of the check are kept. Leaves out the folder path of the report. |
| 19 | Common mistakes | Layman | PASS | Leaves out "List dynamic calls under Unresolved" and "Open questions". "or ask" is a loose form of "put an unknown limit under Open questions", but it is acceptable. |
| 20 | Common mistakes | Bangla | PASS | All facts and cites match. |

Bangla notes:
- Section "Blast radius is impact analysis": "retirement এর trigger" has no hyphen. It should be "retirement-এর".
- Section "Trace callers and dependents": "Plugin-এ language server থাকে না: আগে binary install করুন..." reads a little stiff, but it is clear.
- Otherwise the Bangla is natural. It addresses the reader as আপনি (or by imperative). Commands, flags, paths, and product names stay in English, and the hyphens are present.

Open FAILs after round 2: 2

Script check of round 2: 20 rows, 2 FAIL rows.

## Voices fact check: agentic-qa / blast-radius (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | From acceptance criteria to test cases | Layman | PASS | Left out: test charters, test data requirements, test environment, the table, and the Black-Box link. |
| 2 | From acceptance criteria to test cases | Bangla | PASS | Left out: the table and the Black-Box and Requirements links. |
| 3 | Blast radius is impact analysis | Layman | PASS | Left out: the maintenance-testing triggers (hot fixes, upgrades, migrations, retirement). Also left out the Assumptions and Unresolved parts of the map and the two links. |
| 4 | Blast radius is impact analysis | Bangla | PASS | Left out: the "include" and "such as" wording on the triggers. The meaning is kept. |
| 5 | Get the change | Layman | FAIL | "For a pull request, the GitHub CLI shows the change. <Cite 6>". The Technical sentence "the GitHub CLI gives you the change" has no cite. S6 is on the Technical bullets, but the Layman bullets have no cite. Fix: remove the cite from this sentence and put it at the end of the three bullets. |
| 6 | Get the change | Layman | FAIL | "The field `files` lists the files." The Technical panel only says the fields "include `files`, `changedFiles`, and `closingIssuesReferences`". It does not say what `files` holds. Fix: "The fields include `files` and `closingIssuesReferences`." |
| 7 | Get the change | Bangla | FAIL | "Pull request-এর জন্য GitHub CLI change-টি দেখায়। <Cite 6>". This has the same cite problem as row 5. The Technical sentence has no cite, and the bullets here have none. Fix: move `<Cite n={6} />` to the end of the bullet group. |
| 8 | Trace callers and dependents | Layman | FAIL | "**graphify** is a Claude Code skill that builds a knowledge graph of your files." The Technical panel says only "builds a knowledge graph; code goes through tree-sitter and a call-graph pass". "Of your files" is an added claim about the input. Fix: "builds a knowledge graph". |
| 9 | Trace callers and dependents | Bangla | FAIL | "যা আপনার file থেকে knowledge graph বানায়"। This is an added claim about the input ("আপনার file থেকে"). The Technical panel does not give it. Fix: "যা knowledge graph বানায়"। |
| 10 | Data, contracts, UI, and configuration | Layman | FAIL | "give Claude only a read-only database user on a test environment. Never let it write to a shared database." The Technical panel limits this: "To check data impact" and "while it explores". Both limits are dropped, so the ban now covers all Claude work. Fix: "To check data impact, give Claude a read-only database user on a test environment. Never let it write to a shared database while it explores." Detail left out: seed and middleware. "Model" is changed to "table", which does not change the meaning. |
| 11 | Data, contracts, UI, and configuration | Bangla | FAIL | "Shared database-এ Claude-কে কখনো লিখতে দেবেন না।" The Technical limit "while it explores" is dropped, so the ban reads as universal. Fix: "Claude explore করার সময় shared database-এ কখনো লিখতে দেবেন না।" |
| 12 | Scenario categories for a money transfer | Layman | PASS | Left out: the "text as the amount" example, the ledger example, "cannot be bypassed", and the card example. |
| 13 | Scenario categories for a money transfer | Bangla | PASS | Left out: "one card" in the limit-exceeding idea. |
| 14 | Structured test cases | Layman | PASS | Left out: "manages" in the risk-based testing definition, the self-check of the dMoney skill, and the two links. |
| 15 | Structured test cases | Bangla | PASS | Left out: the self-check of the dMoney skill and the two links. |
| 16 | Make Claude do it well | Layman | PASS | Left out: `allowed-tools`, `context: fork`, the test-case-writing step of the prompt, the "every ring has a regression case" check, and the `tools: Read, Grep, Glob` detail. |
| 17 | Make Claude do it well | Bangla | PASS | Left out: `allowed-tools`. |
| 18 | Practice | Layman | PASS | Left out: the fan-in detail of the report, the scenario-prompt text, and the duplicate and invented-path checks. |
| 19 | Practice | Bangla | PASS | Left out: the fan-in detail of the report and the scenario-prompt text. |
| 20 | Common mistakes | Layman | FAIL | "take each limit from a criterion or the code, or ask." The Technical advice for an unknown limit is "Put an unknown limit under Open questions", not "ask". Fix: "or list it under Open questions". Detail left out: the Unresolved list for dynamic calls. |
| 21 | Common mistakes | Bangla | PASS | Left out: the Unresolved list for dynamic calls. |

Bangla notes:
- Section "From acceptance criteria to test cases", "Blast radius is impact analysis", and the other panels: the Bangla is natural, uses আপনি, keeps commands, flags, paths, and product names in English, and has the hyphens before suffixes. I could read every sentence well enough to judge it.
- "Structured test cases" and "Make Claude do it well": the sentences "Technical panel-এর template tutorial-এর নিজের…" and "Technical panel-এর prompt tutorial-এর নিজের উদাহরণ…" point to the other panel. This reads oddly for a reader who sees one panel at a time. Not a FAIL. Suggest: "এই template tutorial-এর নিজের" and "এই prompt tutorial-এর নিজের উদাহরণ"।
- "Blast radius is impact analysis": "Hot fix, environment-এর upgrade বা migration এবং retirement এর trigger।" is terse and could read more naturally. Suggest: "…এগুলো maintenance testing-এর trigger।"

Open FAILs after round 3: 8

Script check of round 3: 21 rows, 8 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / blast-radius (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F104 | facts | RESOLVED | The Key words row now reads "Fan-in \| What depends on a symbol". The Technical panel says "counts fan-in: what depends on a symbol". The row no longer adds "callers or importers". |
| V5 | voices | RESOLVED | The Layman sentence "For a pull request, the GitHub CLI shows the change." has no cite. The cite is now at the end of the bullet group: "`--repo` picks another repository. <Cite n={6} />". The Technical panel puts S6 on the same `--repo` fact. Layman bullets 1 and 2 still have no cite, as before. That omission adds no fact. |
| V6 | voices | RESOLVED | Layman: "The fields include `files` and `closingIssuesReferences`. <Cite n={7} />". Technical: "Its fields include `files`, `changedFiles`, and `closingIssuesReferences`. <Cite n={7} />". The claim that `files` "lists the files" is gone. S23 stays on the `closingIssuesReferences` sentence, as in the Technical panel. |
| V7 | voices | RESOLVED | Bangla: "Pull request-এর জন্য GitHub CLI change-টি দেখায়।" has no cite. The cite moved to the end of the bullet group: "`-R` বা `--repo` দিয়ে অন্য repository বেছে নিতে পারেন। <Cite n={6} />". This matches the Technical panel's S6 cite on the `-R` or `--repo` bullet. |
| V8 | voices | RESOLVED | Layman: "**graphify** is a Claude Code skill that builds a knowledge graph." "of your files" is gone. Technical: "builds a knowledge graph; code goes through tree-sitter and a call-graph pass". |
| V9 | voices | RESOLVED | Bangla: "**graphify** একটি Claude Code skill, যা knowledge graph বানায়।" "আপনার file থেকে" is gone. |
| V10 | voices | RESOLVED | Layman: "to check data impact, give Claude a read-only database user on a test environment. Never let it write to a shared database while it explores." Technical: "To check data impact, give Claude a read-only database user on a test environment. Never let Claude write to a shared database while it explores." Both limits are back. |
| V11 | voices | RESOLVED | Bangla: "Claude explore করার সময় shared database-এ তাকে কখনো লিখতে দেবেন না।" The limit "while it explores" is back and matches the Technical panel. |
| V20 | voices | RESOLVED | Layman: "take each limit from a criterion or the code, or list it under Open questions." Technical: "Put an unknown limit under Open questions." "or ask" is gone. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
