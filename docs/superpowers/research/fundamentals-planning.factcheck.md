# Fact-check: Planning and Estimation (`content/fundamentals/planning.mdx`)

| Item | Value |
|---|---|
| Chapter | 9, `planning`, "Planning and Estimation" |
| Date | 2026-10-20 |
| Round | 2 (round 1 tables kept below; round 2 section at the end) |
| Page checked | round 1: commit a7db0ed; round 2: commit 57ebbf4 (branch `fund-ch/planning`) |
| Checker | an independent agent (not the writer) |

## Sources

| n | Source | Where checked |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1, https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`: 1.4.2, 1.5.2, 4.5, 4.5.1, 4.5.2, 5.1.1, 5.1.2, 5.1.4, 5.2, 5.3.3, 5.4, release notes |
| 2 | ISTQB Glossary: test plan | `api.glossary.istqb.org/v1/terms/test-plan`, 2026-10-20 |
| 3 | ISTQB Glossary: test strategy | `.../terms/test-strategy` |
| 4 | ISTQB Glossary: organizational test strategy | `.../terms/organizational-test-strategy` |
| 5 | ISTQB Glossary: test approach | `.../terms/test-approach` |
| 6 | ISTQB Glossary: test estimation | `.../terms/test-estimation` |
| 7 | ISTQB Glossary: Wideband Delphi | `.../terms/wideband-delphi` |
| 8 | ISTQB Glossary: Three-point estimation | `.../terms/three-point-estimation` |
| 9 | ISTQB Glossary: acceptance criteria | `.../terms/acceptance-criteria` |

All nine URLs agree with `fundamentals-sources.md` (S1, S59–S66). The sources are numbered in the order of the first cite (lines 107, 107, 174, 180, 184, 289, 322, 334, 425).

## Table 1: cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Test Plan | A test plan describes the objectives, resources, processes of one test project (L107) | 1 | PASS | "A test plan describes the test objectives, resources and processes for a test project." (5.1.1) | |
| 2 | Test Plan | Glossary: documentation of objectives, means, schedule (L107) | 2 | PASS | "Documentation that describes test objectives, means and schedule for achieving test coordination." | Omits "for achieving test coordination"; acceptable. |
| 3 | Test Plan | A test plan has four jobs (L111) | 1 | PASS | Four bullets after "A test plan:" (5.1.1) | |
| 4 | Test Plan | Records the means and schedule (L113) | 1 | PASS | "Documents the means and schedule for achieving test objectives" | |
| 5 | Test Plan | "It helps to show that the test activities will meet the agreed criteria." (L114) | 1 | FAIL | "Helps to ensure that the performed test activities will meet the established criteria" | "Ensure" (make sure) is not "show" (demonstrate). "Show" also merges this bullet with the 4th one ("Demonstrates"). Fix: "It helps to make sure that the test activities meet the agreed criteria." |
| 6 | Test Plan | Means of communication with team and stakeholders (L115) | 1 | PASS | "Serves as a means of communication with team members and other stakeholders" | |
| 7 | Test Plan | Shows that testing follows policy and strategy, or explains why not (L116) | 1 | PASS | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" | |
| 8 | Test Plan | Making the plan forces thought about risks, schedules, people, tools, costs, effort (L118) | 1 | PASS | "forces the testers to confront the future challenges related to risks, schedules, people, tools, costs, effort, etc." | "before testing starts" is a fair reading of "future challenges". |
| 9 | Test Plan | The syllabus lists seven typical parts (L122) | 1 | PASS | "The typical content of a test plan includes:" followed by seven bullets | |
| 10 | Test Plan | Table column "Examples the syllabus gives" (L124–L132) | 1 | FAIL | "Assumptions and constraints of the test project" … "Budget and schedule" | Five rows match the syllabus "e.g." lists. Rows "Assumptions and constraints" ("Limits and conditions of the test project") and "Budget and schedule" ("Costs and dates of the test project") have no examples in the syllabus; the writer made them. The column header says more than the source. Fix: rename the column (for example "What the part covers"), or write "No examples given" in these two rows. |
| 11 | Test Plan | ISO/IEC/IEEE 29119-3 gives more detail (L134) | 1 | PASS | "More details about the test plan and its content can be found in the ISO/IEC/IEEE 29119-3 standard." | |
| 12 | Test Plan | Two kinds of planning; release planning is the basis of the approach and plan of all iterations (L138) | 1 | PASS | "typically two kinds of planning occur: release planning and iteration planning … serves as the basis for the test approach and test plan across all iterations" | |
| 13 | Test Plan | Tester tasks in release planning (L142) | 1 | PASS | "participate in writing testable user stories and acceptance criteria … participate in project and quality risk analyses … estimate test effort … determine the test approach, and plan the testing" | |
| 14 | Test Plan | Tester tasks in iteration planning (L143) | 1 | PASS | "participate in the detailed risk analysis of user stories, determine the testability … break down user stories into tasks (particularly testing tasks), estimate test effort for all testing tasks" | Omits "identify and refine functional and non-functional aspects"; omission only. |
| 15 | Test Strategy | Glossary definition of test strategy (L174) | 3 | PASS | "A description of how to perform testing to reach test objectives under given circumstances." | |
| 16 | Test Strategy | The plan must show that testing follows the existing strategy, or explain why not (L176) | 1 | PASS | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" | |
| 17 | Test Strategy | The context affects the test strategy (L176) | 1 | PASS | "These factors will have an impact on many test-related issues, including: test strategy, test techniques used…" (1.4.2) | |
| 18 | Test Strategy | Organizational test strategy definition (L180) | 4 | PASS | "A strategy that describes the generic requirements for testing and how to perform testing within an organization." | |
| 19 | Test Strategy | Test approach = manner of implementing test tasks (L184) | 5 | PASS | "The manner of implementing test tasks." | |
| 20 | Test Strategy | The test approach is one part of the test plan (L184) | 1 | PASS | "Test approach (e.g., test levels, test types, …)" in the typical content list (5.1.1) | |
| 21 | Test Strategy | "The syllabus names one example: risk-based testing." (L186) | 1 | FAIL | "The test approach, in which test activities are selected, prioritized, and managed based on risk analysis and risk control, is called risk-based testing." (5.2) | The syllabus also names other approaches, for example the "Collaboration-based Test Approaches" of section 4.5. "One example" says there is only one. Fix: "One example in the syllabus is risk-based testing." The second sentence of L186 is PASS. |
| 22 | Test Strategy | Table: test strategy, organizational test strategy, test approach (L190–L192) | 3, 4, 5, 1 | PASS | See rows 15, 18, 19, 20 | |
| 23 | Plan vs Strategy | Plan meaning: objectives, resources, processes of a test project (L228) | 1 | PASS | Same as row 1 | |
| 24 | Plan vs Strategy | Strategy meaning (L228) | 3 | PASS | Same as row 15 | |
| 25 | Plan vs Strategy | Plan scope: one test project (L229) | 1 | PASS | "for a test project" (5.1.1) | |
| 26 | Plan vs Strategy | General term has no fixed scope; organization-wide form is the organizational test strategy (L229) | 3, 4 | PASS | "…under given circumstances." / "…how to perform testing within an organization." | |
| 27 | Plan vs Strategy | Plan content: seven parts, including the test approach (L230) | 1 | PASS | Same as rows 9 and 20 | |
| 28 | Plan vs Strategy | "The glossary names the generic testing requirements of an organization" (L230) | 4 | PASS | "describes the generic requirements for testing … within an organization" | True for the organizational test strategy. The cell sits in the "Test strategy" column, so the reader may apply it to the general term. See the review file (Minor). |
| 29 | Plan vs Strategy | Relation: plan follows the existing strategy or explains the deviation (L231, both cells) | 1 | PASS | "adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" | |
| 30 | Plan vs Strategy | Test approach = the way a team implements test tasks in a project (L236) | 5 | PASS | "The manner of implementing test tasks." | "a team" and "in a project" are a light gloss. |
| 31 | Plan vs Strategy | The plan holds the test approach; it can list the deviations from policy and strategy (L237) | 1 | PASS | "Test approach (e.g., … deviations from the test policy and test strategy)" | |
| 32 | Plan vs Strategy | Release planning is the basis of the approach and the plan (L238) | 1 | PASS | "It also serves as the basis for the test approach and test plan across all iterations." | |
| 33 | Estimation | Test effort estimation predicts the test work to meet the objectives (L289) | 1 | PASS | "Test effort estimation involves predicting the amount of test-related work needed to meet the test objectives of a test project." | |
| 34 | Estimation | Glossary: an approximation of some aspect of testing (L289) | 6 | PASS | "An approximation related to various aspects of testing." | |
| 35 | Estimation | "Three rules apply to every estimate", with "Split a large task into small tasks and estimate each one" (L291–L295) | 1 | FAIL | "It is important to make it clear to the stakeholders that the estimate is based on a number of assumptions and is always subject to estimation error. … it can be decomposed" | The first two bullets are PASS. The syllabus says a large task "can be decomposed"; it is an option for large tasks, not a rule for every estimate. Fix: for example "Two points apply to every estimate" plus "A large task can be split into small tasks…". |
| 36 | Estimation | The syllabus describes four techniques (L297, table L299–L304) | 1 | PASS | "In this syllabus, the following four estimation techniques are described." | Kinds (metrics-based, expert-based, iterative) match each technique paragraph. |
| 37 | Estimation | Ratios: figures from earlier projects; own organization's ratios usually best (L308) | 1 | PASS | "figures are collected from previous projects within the organization … The ratios of an organization's own projects … are generally the best source" | |
| 38 | Estimation | Ratio example 3:2, 600 → 400 person-days (L310) | 1 | PASS | "development-to-test effort ratio was 3:2 … 600 person-days, the test effort can be estimated to be 400 person-days" | Recomputed: 600 / 3 = 200; 2 × 200 = 400. Correct. |
| 39 | Estimation | Extrapolation: measure early, approximate the rest with a model, suits iterative life cycles (L314) | 1 | PASS | "measurements are made as early as possible … usually by applying a mathematical model … very suitable in iterative SDLCs" | |
| 40 | Estimation | Syllabus example: average of the last three iterations (L316) | 1 | PASS | "extrapolate the test effort in the forthcoming iteration as the averaged effort from the last three iterations" | Own numbers: (8 + 10 + 12) / 3 = 10. Correct. Uncited and labelled as the tutorial's own. |
| 41 | Estimation | Straight-line example 5 features / 10 days → 20 features 40 days (L318) | none | PASS (arithmetic) | n/a | 10 / 5 = 2; 20 × 2 = 40. Correct. Not an ISTQB claim. |
| 42 | Estimation | Wideband Delphi is iterative and expert-based (L322) | 1 | PASS | "In this iterative, expert-based technique, experts make experience-based estimations." | |
| 43 | Estimation | Glossary: collective wisdom of the team members (L322) | 7 | PASS | "…aims at making an accurate estimation using the collective wisdom of the team members." | |
| 44 | Estimation | Wideband Delphi steps 1–5 (L324–L328) | 1 | PASS | "Each expert, in isolation, estimates … if there are deviations … out of range of the agreed upon boundaries, the experts discuss … repeated until a consensus is reached." | |
| 45 | Estimation | Planning Poker variant with number cards (L330) | 1 | PASS | "Planning Poker is a variant of Wideband Delphi, commonly used in Agile … cards with numbers that represent the effort size." | |
| 46 | Estimation | Three values a, m, b; E is the weighted arithmetic mean (L334) | 1, 8 | PASS | "the most optimistic estimation (a), the most likely estimation (m) and the most pessimistic estimation (b). The final estimate (E) is their weighted arithmetic mean." | Same text in the glossary entry. See copy check. |
| 47 | Estimation | Most popular version of the formula (L336) | 1 | PASS | "In the most popular version of this technique, the estimate is calculated as E = (a + 4*m + b) / 6." | |
| 48 | Estimation | "a formula for the measurement error, the standard deviation (SD)" (L336) | 1 | FAIL | "it allows the experts to calculate the measurement error: SD = (b – a) / 6" | The syllabus does not expand "SD", and the glossary entry has no SD. "The standard deviation" is not in the cited source. Fix: delete "the standard deviation", or move the expansion to a tutorial's own note. |
| 49 | Estimation | Formulas E = (a + 4 × m + b) / 6, SD = (b − a) / 6 (L339–L340) | 1 | PASS | "E = (a + 4*m + b) / 6 … SD = (b – a) / 6" | Same as 5.1.4. |
| 50 | Estimation | Syllabus example 6, 9, 18 → 10 ± 2, 8 to 12 person-hours (L343) | 1 | PASS | "a=6, m=9 and b=18, then the final estimation is 10±2 person-hours (i.e., between 8 and 12 person-hours)" | Recomputed: (6 + 36 + 18) / 6 = 60 / 6 = 10; (18 − 6) / 6 = 2. Correct. |
| 51 | Estimation | Notes example 2, 4, 8 → 4.33 ± 1, about 3.3 to 5.3 days (L349–L351) | none | PASS (arithmetic) | n/a | (2 + 16 + 8) / 6 = 26 / 6 = 4.333; (8 − 2) / 6 = 1; 3.33 to 5.33. Correct. The notes' "4.3" is correct. |
| 52 | Acceptance Criteria | AC of a story: conditions the implementation must meet; "The stakeholders accept the story when it meets them." (L425) | 1 | FAIL | "Acceptance criteria for a user story are the conditions that an implementation of the user story must meet to be accepted by stakeholders." | The first sentence is PASS. The syllabus gives a necessary condition (must meet to be accepted). The page turns it into a sufficient one (accepted when it meets them). Fix: "The implementation must meet them before the stakeholders accept it." |
| 53 | Acceptance Criteria | Glossary: criteria a work product must meet to be accepted by the stakeholders (L425) | 9 | PASS | "The criteria that a work product must satisfy to be accepted by the stakeholders." | |
| 54 | Acceptance Criteria | AC as test conditions the tests must exercise; they come from the Conversation (L427) | 1 | PASS | "acceptance criteria may be viewed as the test conditions that should be exercised by the tests. Acceptance criteria are usually a result of the Conversation" | "Treats" and "must" are a little stronger than "may be viewed as" and "should". Acceptable paraphrase; see the review file (Minor). |
| 55 | Acceptance Criteria | Five uses of AC (L431–L437) | 1 | PASS | "Define the scope … Reach consensus … Describe both positive and negative scenarios … Serve as a basis for the user story acceptance testing … Allow accurate planning and estimation" | |
| 56 | Acceptance Criteria | Scenario-oriented: Given/When/Then, used in BDD (L443) | 1 | PASS | "Scenario-oriented (e.g., Given/When/Then format used in BDD…)" | |
| 57 | Acceptance Criteria | Rule-oriented: bullet list or input-output table (L444) | 1 | PASS | "Rule-oriented (e.g., bullet point verification list, or tabulated form of input-output mapping)" | |
| 58 | Acceptance Criteria | Custom format, well defined, no ambiguity (L445) | 1 | PASS | "the team may use another, custom format, as long as the acceptance criteria are well-defined and unambiguous." | |
| 59 | Acceptance Criteria | The first two are the most common formats; most AC fit one of them (L447) | 1 | PASS | "The two most common formats are: … Most acceptance criteria can be documented in one of these two formats." | |

## Table 2: warning callouts in the notes blocks

| # | Location | Callout (short) | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1 | Test Plan vs Test Strategy, L216 | The notes say a strategy always covers many projects; the glossary "test strategy" has no such limit and "organizational test strategy" is the organization-wide term | PASS | Notes table: "for multiple testing projects within an organization", "covering testing across various projects or products". Glossary [3]: "…under given circumstances." Glossary [4]: "…within an organization." | The conflict is real and named correctly. "Always" is the callout's word; the owner's Test Strategy topic (L157) says "across a project, product, or organization". See the review file (Minor). Ending sentence is exact. |
| W2 | Acceptance Criteria, L376 | The notes say 2 ways; the syllabus calls them the two most common formats and allows a custom format | PASS | 4.5.2: "There are several ways to write acceptance criteria … The two most common formats are … the team may use another, custom format" | Conflict real and named correctly. Ending sentence is exact. |

No other notes line needs a warning. Checked: Wideband Delphi in the notes leaves out the repeated rounds (omission, not a conflict; the istqb block has the full process); the notes' "Resource, Budget, and Schedule" adds examples to the syllabus "Budget and schedule"; the "Change Frequency" row has no ISTQB counterpart.

## Table 3: "not defined" statements

| # | Location | Statement | Verdict | Evidence |
|---|---|---|---|---|
| N1 | Test Strategy, L176 | "The syllabus uses the term but does not define it." | PASS | Every syllabus use of "test strategy" is a mention, not a definition: 1.4.2 (L819), 1.5.2 whole team (L946), chapter 5 keywords (L2104), 5.1.1 (L2153, L2166), 5.3.3 "organizational test strategies" (L2518), 5.4 (L2540). The release notes say "Section on test strategies/approaches removed" (chapter 5) and "test strategy" was added as a keyword only. The glossary defines the term [3], and the page says so. |
| N2 | Plan vs Strategy table, L230 | "The syllabus does not list its content." | PASS | No list of test strategy content in the syllabus text (same search as N1). The only content list is for the test plan (5.1.1). |

The page does not use the sentence "The ISTQB syllabus and glossary do not define this term." for any term. That is correct: every term of this chapter has a glossary entry.

## Table 4: uncited ISTQB facts in istqb blocks

| # | Location | Statement | Verdict | Fix |
|---|---|---|---|---|
| U1 | Plan vs Strategy, L224 | "ISTQB v4 talks about the test plan, the test strategy, and the test approach." | FAIL | States an ISTQB fact with no cite. The chapter 5 keywords include all three terms. Add `<Cite n={1} />`. |
| U2 | Plan vs Strategy, L235 | "The strategy is the general description of how to test." | FAIL | Restates the glossary definition with no cite. Add `<Cite n={3} />` (and drop "general", which the glossary does not say). |

Not counted: L318 and L349–L353 (arithmetic on the owner's numbers, not ISTQB claims); L316 own numbers, L449–L473 own examples, and all "tutorial's own" callouts (labelled as not from ISTQB).

## Copy check

Method: a 10-word sliding-window match of the MDX text against the syllabus text (lower case, punctuation removed).

| Location | Matched run | Verdict | Note |
|---|---|---|---|
| L334 | "(b). The final estimate E is their weighted arithmetic mean" | PASS | The run is 10 tokens only because it crosses the sentence end after "(b)". The copied sentence has 9 words, under the limit. It is still a whole syllabus sentence; see the review file (Minor). |
| L434–L435 | "Define the scope of the user story. Reach consensus among the stakeholders. Describe" | PASS | 12 tokens across three list items. Each item has fewer than 10 words. See the review file (Minor). |
| L412 (notes block) | "bullet point verification list or tabulated form of input output mapping" | PASS | Owner text in the notes block, kept by rule. Not new prose. |

No sentence of new prose copies 10 or more syllabus words in a row.

## Summary

- Table 1: 59 rows, 6 FAIL (rows 5, 10, 21, 35, 48, 52).
- Table 2: 2 rows, 0 FAIL.
- Table 3: 2 rows, 0 FAIL.
- Table 4: 2 rows, 2 FAIL (U1, U2).
- Copy check: 0 FAIL.
- All numbers on the page recomputed: correct.

Round 1 result: Open FAILs: 8

## Round 2 (commit 57ebbf4, diff e76bd0e..57ebbf4)

The sources did not change (same 9 entries, same order, same URLs). Line numbers are those of the round-2 file.

### Round-1 FAILs, checked again

| R1 row | Location (round 2) | New text (short) | Verdict | Quote from the source (≤ 30 words) |
|---|---|---|---|---|
| T1 #5 | L114 | "It helps to make sure that the test activities meet the agreed criteria." | PASS | "Helps to ensure that the performed test activities will meet the established criteria" |
| T1 #10 | L127, L132 | Both rows now say "No examples in the syllabus" | PASS | "Assumptions and constraints of the test project" … "Budget and schedule" (no "e.g." lists) |
| T1 #21 | L186 | "One example in the syllabus is risk-based testing." | PASS | "The test approach, in which test activities are selected, prioritized, and managed based on risk analysis and risk control, is called risk-based testing." |
| T1 #35 | L291–L297 | "Two points apply to every estimate" (assumptions, error); then "a large task can be split into small tasks" | PASS | "the estimate is based on a number of assumptions and is always subject to estimation error … it can be decomposed into a set of smaller tasks" |
| T1 #48 | L337 | "a formula for the measurement error, which it calls SD" | PASS | "it allows the experts to calculate the measurement error: SD = (b – a) / 6" |
| T1 #52 | L426 | "The implementation must meet them before the stakeholders accept it." | PASS | "the conditions that an implementation of the user story must meet to be accepted by stakeholders" |
| T4 U1 | L224 | "ISTQB v4 uses the terms test plan, test strategy, and test approach." + Cite 1 | PASS | Chapter 5 keywords: "…test approach … test plan, test planning … test strategy…" |
| T4 U2 | L235 | "The strategy is a description of how to test." + Cite 3 | PASS | "A description of how to perform testing to reach test objectives under given circumstances." |

### Changed or new claims

| # | Location | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| R2-1 | L230 | "For the organizational test strategy, the glossary names the generic testing requirements of an organization" | 4 | PASS | "A strategy that describes the generic requirements for testing and how to perform testing within an organization." | Now names the right term. |
| R2-2 | L296 | Small tasks are usually estimated more accurately than large tasks | 1 | PASS | "Estimation for small tasks is usually more accurate than for the large ones." | Not a word-for-word copy. |
| R2-3 | L309 | "The organization's own ratios are usually the best source." | 1 | PASS | "The ratios of an organization's own projects … are generally the best source" | Grammar fixed. |
| R2-4 | L335 | "E is the weighted average of the three values." | 1, 8 | PASS | "The final estimate (E) is their weighted arithmetic mean." | Reworded; no longer a copy. |
| R2-5 | L428 | Acceptance criteria "can be seen as test conditions that the tests should exercise" | 1 | PASS | "acceptance criteria may be viewed as the test conditions that should be exercised by the tests" | Hedge kept. |
| R2-6 | L434–L436 | "Set the scope…", "Help the stakeholders to agree.", "Show positive and negative scenarios." | 1 | PASS | "Define the scope of the user story … Reach consensus among the stakeholders … Describe both positive and negative scenarios" | Reworded; no longer a copy. |

### Warning callouts (round 2)

| # | Location | Verdict | Note |
|---|---|---|---|
| W1 | L216 | PASS | Now "The notes' table says a test strategy covers many projects…". It matches the notes table (L208–L209). The ending sentence is exact. |
| W2 | L377 | PASS | Unchanged. |

### Other changes (not ISTQB claims)

- L196: the own-example callout is now two sentences (both ≤ 25 words). No ISTQB claim.
- L472: the rule-oriented example row is now "More than 0.00 and less than 50.00 | 5.00". The three rows no longer overlap. Own example, no cite needed.

### Copy check (round 2)

A 10-word window match against the syllabus finds one run only: "bullet point verification list or tabulated form of input output mapping". That run is owner text in the notes block (L413), kept by rule. No new prose copies 10 or more syllabus words in a row. PASS.

### Checks run (round 2)

`npm test`: 145 pass, 0 fail. `npm run build`: OK. `check_sources.py out`: `OK 46 pages checked, 0 skipped`. `check_outline.py out`: `OK 586 TOC links`. `check_links.py out`: no output, exit 0.

### Round 2 summary

All 8 round-1 FAILs are fixed. The 6 changed or new claims pass. Both warning callouts pass. The copy check passes.

Open FAILs: 0
