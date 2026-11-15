# Voices fact check: Requirement Analysis & Acceptance Criteria

Page: `content/agentic-qa/requirements.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-requirements.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / requirements (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why requirements come first | Layman | FAIL | "You can test a requirement before any code exists." The Technical panel says you test a requirement "without running any code". It does not say that no code exists yet. Fix: "You can test a requirement without running any code." |
| 2 | Why requirements come first | Layman | FAIL | "A requirement states criteria that the product must meet." The Technical panel says "a provision that contains criteria to be fulfilled". The words "the product" and "must" are new and narrow the scope. Fix: "A requirement is a statement that contains criteria to be fulfilled." |
| 3 | Why requirements come first | Layman | FAIL | "It finds defects very early." The Technical panel says static testing "can find defects in the earliest phases". The limit "can" was dropped, so the claim is now stronger. Fix: "It can find defects in the earliest phases." |
| 4 | Why requirements come first | Bangla | PASS | Left out: "Test basis" wording about the reader's tester role (explore, challenge), and the Definition of Ready. Two softer points. "code চলার আগেই" means "before code runs", while the Technical panel says "without running code". The limit "can" is dropped in "defect ধরা পড়ে", but the Bangla present tense reads as a general statement. |
| 5 | Get the story into Claude | Layman | FAIL | "Be careful: text from a ticket can try to trick Claude. This risk is called prompt injection. <Cite 9>". In the Technical panel, S9 supports only "Servers that fetch external content can expose you to prompt injection". The sentence about ticket text that looks like an instruction has no cite there. Fix: restate the S9 fact ("Servers that fetch external content can expose you to prompt injection"), and put the ticket-text sentence outside the cite. |
| 6 | Get the story into Claude | Bangla | PASS | Left out: the `--json` fields, the `-R` flag, the table of context, "Read the analysis, not only the summary", and the sentence that a ticket comment can look like an instruction. "Ticket-এর text হলো data, instruction নয়" is in the Technical callout title. |
| 7 | What to look for | Layman | PASS | Left out: the example findings, the note that the syllabus names the defects, "ideally begins early", the ranked short list of risks, the link to the blast-radius page, and the reason for the row-by-row prompt. "The risk level decides what you test first" is a fair short form of "selection and priority follow risk types and levels". |
| 8 | What to look for | Bangla | PASS | Left out: the "Risk-based testing" ranking advice, the link to the blast-radius page, and the reason for row-by-row prompts. |
| 9 | A repeatable analysis | Layman | FAIL | "In plan mode, Claude researches and suggests, but it does not edit your files." The Technical panel says it "does not edit your source". "Your files" is a wider claim. Fix: "does not edit your source". |
| 10 | A repeatable analysis | Bangla | PASS | Left out: `argument-hint` is kept. Left out: the explanation that plan mode lets Claude read files and run shell commands, and the skill-template details (the numbered sections and the "3 lines" summary). |
| 11 | Acceptance criteria | Layman | FAIL | "If nobody knows how to test a story, it may not be clear enough." The Technical panel says "If a stakeholder does not know how to test a story". "Nobody" changes the condition. Fix: "If a stakeholder does not know how to test a story, it may not be clear enough." |
| 12 | Acceptance criteria | Layman | FAIL | "Cover both good paths and error paths. <Cite 1>". The Technical panel only states that acceptance criteria "describe both positive and negative scenarios". It does not give this as advice. Fix: "Criteria describe both good paths and error paths." |
| 13 | Acceptance criteria | Bangla | PASS | Left out: the custom-format note is kept. Left out: "the test cases cover the story and do not go beyond it", the story format "As a… I want…" is kept, and the link to the Lifecycles chapter. |
| 14 | A worked example: send money | Layman | FAIL | "Gherkin is a plain-text way to write scenarios." The Technical panel does not say what Gherkin is or that it is plain text. This is an added claim. Fix: remove it, or start with "Each Gherkin step starts with…". Also note: "something that a user can see" narrows "observable output" to a user. |
| 15 | A worked example: send money | Bangla | PASS | Left out: that `Scenario` is a synonym of `Example`, that examples should not assume a technology or user interface, and the rule-oriented table rows (fee, balance, daily count). "একটানা" for "flat" is a wording problem (see the Bangla notes). |
| 16 | Is the story ready for test? | Layman | PASS | Left out: "Run it after the analysis, before any test design", the numbered order, the quote with each question, and the skill that marks guesses. "Teams often check" adds "often" (a weaker limit), which is acceptable. |
| 17 | Is the story ready for test? | Bangla | PASS | Left out: the reason that a language model writes fluent text, and the skill that marks guesses. |
| 18 | Write back only after approval | Layman | FAIL | "MCP clients act with your own permissions, so Atlassian advises giving only the access that is needed." The Technical panel joins the two facts with "and", and says clients "can act on all connected Atlassian products". The word "so" adds a cause that the Technical panel does not give. Fix: "MCP clients can act with your permissions, and Atlassian advises least privilege." |
| 19 | Write back only after approval | Bangla | FAIL | "MCP client আপনার permission নিয়ে … কাজ করতে পারে, তাই Atlassian least privilege-এর পরামর্শ দেয়।" "তাই" ("so") adds a cause that the Technical panel does not give (it uses "and"). Fix: join the two facts with "আর" instead of "তাই". |
| 20 | Practice | Layman | PASS | Left out: the example prompt text, the "Do not add a rule that the story does not state" line, the positive/negative label check, the `analyze-requirement` skill name, and the `--comments` flag by name. |
| 21 | Practice | Bangla | PASS | Left out: the same details as the Layman panel (the example prompt text, the positive/negative label check). |
| 22 | Common mistakes | Layman | FAIL | "Too much access. Plan mode does not edit files." The Technical panel says "Plan mode does not edit your source". "Files" is a wider claim. Fix: "Plan mode does not edit your source." |
| 23 | Common mistakes | Bangla | PASS | Left out: nothing of weight. All seven rows match the Technical rows. |

Bangla notes:
- "specification এর অংশ" and "security vulnerability এর উদাহরণ" use a space before "এর". Write "specification-এর" and "security vulnerability-এর" with the hyphen.
- "fee একটানা 5 BDT": "একটানা" means "continuous", not "flat". It reads unnaturally. Use "নির্দিষ্ট" or "স্থির".
- "পোস্ট করার আগে" is in Bangla script, but the other panels use "post". Use one form: "post করার আগে".
- Every Bangla panel uses আপনি where it addresses the reader. No commands, flags, paths or product names are translated.

Open FAILs after round 1: 11

Script check of round 1: 23 rows, 11 FAIL rows.

## Voices fact check: agentic-qa / requirements (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why requirements come first | Layman | FAIL | "The **test basis** is everything you use to plan and design tests." The Technical panel says "the body of knowledge used as the basis for test analysis and test design". The Layman sentence changes "analysis" to "plan" and "body of knowledge" to "everything". Fix: "The **test basis** is the knowledge you use as the base for analyzing and designing tests." The other sentences are faithful. Left out: the "degree" wording of testability, the other review defect types, the "Definition of Ready", and the defect reports as an output. |
| 2 | Why requirements come first | Bangla | FAIL | "Review হলো static testing … এতে lifecycle-এর একদম শুরুতেই defect ধরা পড়ে।" The Technical panel says static testing **can** find defects in the earliest phases. The Bangla sentence drops the limit "can" and states it as certain, so it claims more. Fix: "…এতে lifecycle-এর একদম শুরুর ধাপেই defect ধরা পড়তে পারে।" The other sentences are faithful. Left out: the "Definition of Ready" and the "explore, challenge" wording. |
| 3 | Get the story into Claude | Layman | PASS | Left out: the `--json` fields, `-R`, the v2 "recommended" remark, the exact tool names, the table's "why" column, and "Read the analysis, not only the summary". |
| 4 | Get the story into Claude | Bangla | PASS | Left out: `--json`, `-R`, JQL, the table's "why" column, and the "Read the analysis" advice. |
| 5 | What to look for | Layman | PASS | Left out: the example findings, the question column, "risk types" in risk-based testing, and "ideally begins early". "The risk level decides what you test first" is a fair plain form of "selection and priority follow the risk types and levels". |
| 6 | What to look for | Bangla | PASS | Left out: the "risk types" in risk-based testing, the Blast Radius link, and the reason for the row-by-row advice. |
| 7 | A repeatable analysis | Layman | PASS | Left out: `argument-hint`, `allowed-tools` and its warning, `/plan`, the full skill text, and the links. "Such as an issue key" matches the skill's own use. |
| 8 | A repeatable analysis | Bangla | PASS | Left out: the full skill text and the links to the other pages. |
| 9 | Acceptance criteria | Layman | PASS | Left out: the story format "As a… I want… so that…", "custom format is fine", the order of test cases (positive, negative, non-functional), and "cover the story and no more". "Business language" for "stakeholders' domain language" is acceptable. |
| 10 | Acceptance criteria | Bangla | PASS | Left out: the BDD wording and the "cover the story only" rule. |
| 11 | A worked example: send money | Layman | PASS | Left out: `Rule` and `Scenario` as synonyms of `Example`, the 5,000 Tk and 10-a-day limits, the "flat" fee, the "no technology or user interface" remark, and the Gherkin text. |
| 12 | A worked example: send money | Bangla | PASS | Left out: `Scenario` as a synonym of `Example`, the "no technology or user interface" remark, and the table rows. |
| 13 | Is the story ready for test? | Layman | PASS | Left out: "test double or test environment" (shortened to "a way to test it"), the numbered quotes with the questions, and the warning callout's detail. "Often" is a harmless plain word for "Teams check stories". |
| 14 | Is the story ready for test? | Bangla | PASS | Left out: the callout title and the note that the skill marks guesses. |
| 15 | Write back only after approval | Layman | PASS | Left out: the JSON file, the "reads included" remark, the "Before you post" callout, the single-comment suggestion, and the "draft label" advice. |
| 16 | Write back only after approval | Bangla | PASS | Left out: the same details as the Layman panel. |
| 17 | Practice | Layman | PASS | Left out: the example prompt text, the `/plan` and `Shift+Tab` options, and the analyze-requirement skill's purpose. "Cleaned up" is a loose plain word for "normalized", but the same fact is kept. |
| 18 | Practice | Bangla | PASS | Left out: the example prompt text and the exact steps' detail. |
| 19 | Common mistakes | Layman | PASS | Left out: "for the write tools" in the ask-rule row. "Hidden data" for "database" is acceptable. |
| 20 | Common mistakes | Bangla | PASS | Left out: "for the write tools" in the ask-rule row. |

Bangla notes:
- Most sentences read naturally and address the reader as আপনি (or by an imperative in the polite form).
- No command, flag, path or product name is translated, and the hyphens between English words and Bangla suffixes are kept.
- "লিখুন" and "দিন" are used where the Technical panel says "type" or "give". This is fine.
- "Review হলো static testing" is a plain equation. It is acceptable once the "can" in row 2 is fixed.

Open FAILs after round 2: 2

Script check of round 2: 20 rows, 2 FAIL rows.

## Voices fact check: agentic-qa / requirements (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why requirements come first | Layman | PASS | Left out: the syllabus outputs (test conditions and defect reports), the list of reviewable documents, the "Definition of Ready" criteria, and the full defect list (inconsistencies, inaccuracies, duplications). The word "gaps" is a plain form of "omissions". |
| 2 | Why requirements come first | Bangla | PASS | Left out: the "Definition of Ready" criteria. The facts, cites and scope match the Technical panel. |
| 3 | Get the story into Claude | Layman | PASS | Left out: the `delete_jira` and `manage_jira` groups, v2 as the recommended version, JQL, the `--json` and `-R` options, the context table, and the "read the analysis, not only the summary" advice. |
| 4 | Get the story into Claude | Bangla | PASS | Left out: JQL, the `--json` and `-R` options, the context table, and the "read the analysis, not only the summary" advice. |
| 5 | What to look for | Layman | PASS | Left out: the question column, most example findings, the "product risk analysis begins early" fact, and the "ranked risk list" and `blast-radius` link. The line "In risk-based testing, the risk level decides what you test first" narrows "selection and priority follow risk types and risk levels", but it adds no new claim. |
| 6 | What to look for | Bangla | PASS | Left out: the `blast-radius` link and the "ranked risk list" sentence. The risk-based-testing sentence drops "risk types", which is allowed. |
| 7 | A repeatable analysis | Layman | FAIL | Sentence: "`$ARGUMENTS` holds the text that you pass, such as an issue key. <Cite n={12} />". The Technical cited sentence says only "`$ARGUMENTS` holds what you pass". The "issue key" example comes from the tutorial's own template, not from S12, yet it sits under Cite 12. Fix: drop "such as an issue key", or move it to an uncited sentence labelled as the tutorial's example. Left out: `argument-hint`, `allowed-tools`, and the `/plan` way to enter plan mode. |
| 8 | A repeatable analysis | Bangla | PASS | Left out: the `blast-radius` and Skills links. Every fact is in the Technical panel. |
| 9 | Acceptance criteria | Layman | PASS | Left out: the common "As a… I want… so that…" format, the custom-format allowance, the ATDD order (positive, negative, non-functional), the "cover the story only" rule, and the `lifecycles` link. "Business language" stands for "stakeholders' domain language". |
| 10 | Acceptance criteria | Bangla | PASS | Left out: the "cover the story only" rule and the `lifecycles` link. Note: "পূরণ করলে… গ্রহণ করেন" reads a little like a sufficient condition, while the Technical text says "must satisfy to be accepted". This is minor, so I did not mark FAIL. |
| 11 | A worked example: send money | Layman | PASS | Left out: the keyword `And`/`But` detail beyond the first sentence, `Scenario` as a synonym of `Example`, "assume no technology or UI", the "flat" fee, and the 5,000 Tk / 10 per day figures. The "same rules in a table" claim repeats the Technical wording. |
| 12 | A worked example: send money | Bangla | FAIL | Sentence: "fee একটানা 5 BDT". The Technical text says "flat 5 BDT". "একটানা" means "continuous" or "unbroken", so the meaning is wrong. Fix: "fee নির্দিষ্ট (flat) 5 BDT", or drop the modifier. Left out: the callout on why there are no cites. |
| 13 | Is the story ready for test? | Layman | PASS | Left out: the numbering of questions, the quote that goes with each question, and the warning callout's mention of the skill. The added "often" only weakens "Teams check". |
| 14 | Is the story ready for test? | Bangla | PASS | Left out: the callout's mention of the skill. All facts match the Technical panel. |
| 15 | Write back only after approval | Layman | PASS | Left out: the `permissions` arrays (`allow`, `ask`, `deny`), the JSON example, the "reads included, slower but safe" remark, and the "one comment with questions, assumptions, and draft criteria" advice. |
| 16 | Write back only after approval | Bangla | PASS | Left out: the `permissions` arrays, the JSON example, the "reads included" remark, the "one comment" advice, and the PR-review link. |
| 17 | Practice | Layman | PASS | Left out: the example command `PROJ-123`, the `gh issue view` command name, the prompt text for step 6, the "positive or negative label" check, and the Codebase Tour link. |
| 18 | Practice | Bangla | PASS | Left out: the example `PROJ-123` and the prompt text. "Negative scenario-ও চান" matches "Include negative scenarios". |
| 19 | Common mistakes | Layman | FAIL | Sentence: "Checking hidden data in Then steps." The Technical row says "Then steps that check the database". "Hidden data" is a different and broader noun. Fix: "Checking the database in Then steps." Left out: the `gh issue view` and Jira MCP detail, "for the write tools", and the "move extra ideas to a new question" detail (the Layman text keeps a short form of it). |
| 20 | Common mistakes | Bangla | PASS | Left out: nothing of substance. Every row matches the Technical table. |

Bangla notes:
- Row 12: "একটানা" is a wrong word for "flat" (see the FAIL above).
- Row 10: "পূরণ করলে… গ্রহণ করেন" is natural Bangla but reads a little like a sufficient condition. Consider "গ্রহণযোগ্য হতে হলে যা পূরণ করতে হয়".
- All Bangla panels address the reader as আপনি or use imperative forms. The commands, flags, paths and product names are kept in English, and the hyphens between English words and Bangla suffixes are present.

Open FAILs after round 3: 3

Script check of round 3: 20 rows, 3 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / requirements (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F10 | facts | RESOLVED | The page (line 79) now says "In static testing, the software under test does not need to be executed. <Cite n={1} />". S1 line 1403 says "in static testing the software under test does not need to be executed". The Layman panel (line 101) says "the software does not need to run". The Bangla panel (line 121) says "software চালানোর দরকার হয় না". Both keep the "does not need" limit. |
| F19 | facts | RESOLVED | The page (line 135) now says "Atlassian runs an official MCP server. <Cite n={6} />". S6 line 47 says "The **official Atlassian MCP Server** is a cloud-based bridge…". |
| F114 | facts | RESOLVED | The Key words row (line 746) now says "Testing in which the software under test does not need to be executed, for example a review of a story". This matches the S1 wording. The "for example a review of a story" part is the tutorial's own example. |
| V7 | voices | RESOLVED | The Layman panel (line 307) now says "`$ARGUMENTS` holds the text that you pass. <Cite n={12} />". "such as an issue key" is gone. The Technical panel (line 269) says "`$ARGUMENTS` holds what you pass. <Cite n={12} />". The two now match. |
| V12 | voices | RESOLVED | The Bangla panel (line 471) now says "fee নির্দিষ্ট (flat) 5 BDT". The Technical text (line 419) says "a flat 5 BDT". The wrong word "একটানা" is gone. |
| V19 | voices | RESOLVED | The Layman panel (line 720) now says "Checking the database in Then steps. The result should be an observable output. <Cite n={17} />". The Technical row (line 709) says "Then steps that check the database \| An outcome should be on an observable output. <Cite n={17} />". The noun and the cite now match. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
