# Fact-check: Experience-Based Techniques (`experience-based`)

| Field | Value |
|---|---|
| Chapter | 8, Experience-Based Techniques (`content/fundamentals/experience-based.mdx`, commit db3efec) |
| Date | 2026-10-20 |
| Round | 2 (round 1 kept below; round-2 section at the end) |
| Checker | An agent that did not write the chapter |

## Sources

| n | Source | Checked against |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 (ISTQB) | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`, sections 4.1, 4.3, 4.3.1-4.3.3, 4.4, 4.4.1-4.4.3 |
| 2 | ISTQB Glossary: error guessing | Sources file S46 |
| 3 | ISTQB Glossary: exploratory testing | Sources file S24 |
| 4 | ISTQB Glossary: test charter | Sources file S48 |
| 5 | ISTQB Glossary: checklist-based testing | Sources file S47 |

Line numbers refer to `content/fundamentals/experience-based.mdx` at db3efec.

## Table 1: cited claims

| # | topic | claim (short) | cite | verdict | quote from the source (≤ 30 words) | note |
|---|---|---|---|---|---|---|
| 1 | Error Guessing (L49) | Three groups of techniques: black-box, white-box, experience-based | 1 | PASS | "test techniques are classified as black-box, white-box, and experience-based" (4.1) | |
| 2 | Error Guessing (L49) | Experience-based techniques use tester knowledge and experience to design and build test cases | 1 | PASS | "effectively use the knowledge and experience of testers for the design and implementation of test cases" (4.1) | |
| 3 | Error Guessing (L49) | Results depend heavily on tester skill | 1 | PASS | "The effectiveness of these test techniques depends heavily on the tester's skills." (4.1) | "results" for "effectiveness" is acceptable |
| 4 | Error Guessing (L49) | Can find defects that black-box and white-box techniques miss; they complement them | 1 | PASS | "can detect defects that may be missed using the black-box test techniques and white-box test techniques. Hence ... complementary" (4.1) | |
| 5 | Error Guessing (L49) | Syllabus names three experience-based techniques | 1 | PASS | "Commonly used experience-based test techniques ... Error guessing, Exploratory testing, Checklist-based testing" (4.4) | |
| 6 | Error Guessing (L51) | Error guessing anticipates errors, defects, failures from tester knowledge | 1 | PASS | "used to anticipate the occurrence of errors, defects, and failures, based on the tester's knowledge" (4.4.1) | |
| 7 | Error Guessing (L51) | Glossary: test conditions come from knowledge of past failures or failure modes | 2 | PASS | "tests conditions are based on the tester's knowledge of past failures or failure modes" (S46) | |
| 8 | Error Guessing (L53-57) | Three kinds of knowledge (past behavior, developer errors and their defects, failures in similar applications) | 1 | PASS | "How the application has worked in the past ... types of errors the developers tend to make ... failures that have occurred in other, similar applications" (4.4.1) | |
| 9 | Error Guessing (L59-68) | Six areas with examples (input, output, logic, computation, interfaces, data) | 1 | PASS | "input (e.g., correct input not accepted, parameters wrong or missing), output ... logic ... computation ... interfaces ... data (e.g., incorrect initialization, wrong type)" (4.4.1) | Table rows match each example |
| 10 | Error Guessing (L70) | A fault attack is one way to do error guessing | 1 | PASS | "Fault attacks are a way to implement error guessing." (4.4.1) | |
| 11 | Error Guessing (L70) | Tester creates or collects a list of possible errors, defects, failures | 1 | PASS | "requires the tester to create or acquire a list of possible errors, defects and failures" (4.4.1) | |
| 12 | Error Guessing (L70) | Tests find the defects, expose them, or cause the failures | 1 | PASS | "design tests that will identify defects associated with the errors, expose the defects, or cause the failures" (4.4.1) | |
| 13 | Error Guessing (L70) | List built from experience, defect and failure data, or common knowledge | 1 | PASS | "built based on experience, defect and failure data, or from common knowledge about why software fails" (4.4.1) | Content PASS. The wording copies 12 words in a row. See Copy check. |
| 14 | Exploratory Testing (L94) | Tester designs, runs, evaluates tests at the same time, and learns about the test object | 1 | PASS | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" (4.4.2) | |
| 15 | Exploratory Testing (L94) | Glossary: tests designed and run dynamically from tester knowledge, exploration of the test item, earlier results | 3 | PASS | "tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results" (S24) | The first of the two sentences has no own Cite. See Table 4, row 1. |
| 16 | Exploratory Testing (L96-100) | Three aims: learn more, explore deeper with focused tests, tests for untested areas | 1 | PASS | "used to learn more about the test object, to explore it more deeply with focused tests, and to create tests for untested areas" (4.4.2) | |
| 17 | Exploratory Testing (L102) | Session-based testing gives structure to exploratory testing | 1 | PASS | "sometimes performed using session-based testing to structure the testing" (4.4.2) | |
| 18 | Exploratory Testing (L106) | Time box: fixed length | 1 | PASS | "performed within a defined time box" (4.4.2) | |
| 19 | Exploratory Testing (L107) | Charter holds test objectives and guides the session | 1 | PASS | "uses a test charter containing test objectives to guide the testing" (4.4.2) | |
| 20 | Exploratory Testing (L107) | Glossary: charter is a mission statement for the session | 4 | PASS | "A mission statement that guides an exploratory test session." (S48) | |
| 21 | Exploratory Testing (L108) | Session sheet: tester notes steps and discoveries | 1 | PASS | "The tester may use test session sheets to document the steps followed and the discoveries made." (4.4.2) | Describes what the sheet holds. "may use" is not repeated, but the row does not say the sheet is required. |
| 22 | Exploratory Testing (L109) | Debriefing: tester and interested stakeholders discuss results | 1 | PASS | "usually followed by a debriefing that involves a discussion between the tester and stakeholders interested in the test results" (4.4.2) | |
| 23 | Exploratory Testing (L111) | Test objectives can serve as high-level test conditions | 1 | PASS | "test objectives may be treated as high-level test conditions" (4.4.2) | |
| 24 | Exploratory Testing (L111) | Tester identifies and exercises coverage items during the session | 1 | PASS | "Coverage items are identified and exercised during the test session." (4.4.2) | |
| 25 | Exploratory Testing (L113) | Helps when specification is poor or missing, or time is short | 1 | PASS | "useful when there are few or inadequate specifications or there is significant time pressure" (4.4.2) | |
| 26 | Exploratory Testing (L113) | Complements more formal techniques | 1 | PASS | "also useful to complement other more formal test techniques" (4.4.2) | |
| 27 | Exploratory Testing (L113) | Works better with experience, domain knowledge, analysis, curiosity, creativity | 1 | PASS | "more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness" (4.4.2) | |
| 28 | Exploratory Testing (L113) | Tester can use other techniques inside a session, e.g. EP | 1 | PASS | "Exploratory testing can incorporate the use of other test techniques (e.g., equivalence partitioning)." (4.4.2) | The source says "exploratory testing", not "a session". Narrower but true. Review finding M4. |
| 29 | Checklist-Based Testing (L167) | Tester designs, builds, runs tests that cover the test conditions of a checklist | 1 | PASS | "a tester designs, implements, and executes tests to cover test conditions from a checklist" (4.4.3) | |
| 30 | Checklist-Based Testing (L167) | Glossary: experience-based technique, test cases exercise checklist items | 5 | PASS | "An experience-based test technique in which test cases are designed to exercise the items of a checklist." (S47) | |
| 31 | Checklist-Based Testing (L169-173) | Checklist built from experience, user importance, understanding of failure | 1 | PASS | "built based on experience, knowledge about what is important for the user, or an understanding of why and how software fails" (4.4.3) | |
| 32 | Checklist-Based Testing (L175) | The syllabus gives rules for checklist content | 1 | PASS | "Checklists should not contain items that can be checked automatically ..." (4.4.3) | |
| 33 | Checklist-Based Testing (L179) | Rule "Phrase an item as a question." / "Most items are questions." | 1 | FAIL | "Checklist items are often phrased in the form of a question." (4.4.3) | Says more than the source. "often" is a description, not a rule, and "often" is not "most". Fix: row "Items are often questions." and do not call it a rule, or put it under the table as a separate sentence. |
| 34 | Checklist-Based Testing (L180) | Each item checkable separately and directly | 1 | PASS | "It should be possible to check each item separately and directly." (4.4.3) | |
| 35 | Checklist-Based Testing (L181) | Leave out items a tool can check | 1 | PASS | "should not contain items that can be checked automatically" (4.4.3) | |
| 36 | Checklist-Based Testing (L182) | Leave out items that suit entry or exit criteria better | 1 | PASS | "items better suited as entry criteria, exit criteria" (4.4.3) | |
| 37 | Checklist-Based Testing (L183) | Leave out general items | 1 | PASS | "or items that are too general" (4.4.3) | |
| 38 | Checklist-Based Testing (L185) | Items can refer to requirement, GUI property, quality characteristic, other test condition | 1 | PASS | "may refer to requirements, graphical interface properties, quality characteristics or other forms of test conditions" (4.4.3) | |
| 39 | Checklist-Based Testing (L185) | Checklist can support functional and non-functional testing | 1 | PASS | "created to support various test types, including functional and non-functional testing" (4.4.3) | |
| 40 | Checklist-Based Testing (L187) | Entries become less effective as developers learn to avoid errors | 1 | PASS | "may gradually become less effective over time because the developers will learn to avoid making the same errors" (4.4.3) | |
| 41 | Checklist-Based Testing (L187) | Add entries for new high-severity defects | 1 | PASS | "New entries may also need to be added to reflect newly found high severity defects." (4.4.3) | |
| 42 | Checklist-Based Testing (L187) | Update from defect analysis; do not let it grow too long | 1 | PASS | "should be regularly updated based on defect analysis. However, care should be taken to avoid letting the checklist become too long" (4.4.3) | |
| 43 | Checklist-Based Testing (L189) | Without detailed test cases, checklist gives guidelines and some consistency | 1 | PASS | "In the absence of detailed test cases, checklist-based testing can provide guidelines and some degree of consistency" (4.4.3) | |
| 44 | Checklist-Based Testing (L189) | High-level checklist: more variety, more coverage, less repeatability | 1 | PASS | "If the checklists are high-level, some variability ... is likely to occur, resulting in potentially greater coverage but less repeatability." (4.4.3) | Two Cites, one claim each |
| 45 | Black-Box Checklist (L238) | Black-box technique uses specified behavior, not internal structure | 1 | PASS | "based on an analysis of the specified behavior of the test object without reference to its internal structure" (4.1) | |
| 46 | Black-Box Checklist (L238) | Checklist-based testing designs test cases from checklist items | 5 | PASS | "test cases are designed to exercise the items of a checklist" (S47) | |
| 47 | Black-Box Checklist (L238) | Items can refer to GUI properties and quality characteristics, "which suits black-box questions" | 1 | FAIL | "These items may refer to requirements, graphical interface properties, quality characteristics or other forms of test conditions." (4.4.3) | The first part is supported. "which suits black-box questions" is the tutorial's inference, and the syllabus does not say it. Says more than the source. Fix: end the cited sentence after "quality characteristics", and mark the link to black-box questions as the tutorial's own view. |
| 48 | Black-Box Checklist (L240) | Experience-based techniques can find defects that black-box techniques miss | 1 | PASS | "can detect defects that may be missed using the black-box test techniques" (4.1) | |
| 49 | Black-Box Checklist (L254) | "The syllabus says a checklist item must be checkable on its own, and not too general." | 1 | FAIL | "It should be possible to check each item separately and directly." / "should not contain ... items that are too general" (4.4.3) | The syllabus says "should", not "must". Says more than the source. Fix: "should be checkable on its own, and should not be too general". |
| 50 | White-Box Checklist (L289) | White-box technique uses internal structure and processing | 1 | PASS | "based on an analysis of the test object's internal structure and processing" (4.1) | |
| 51 | White-Box Checklist (L289) | Checklist-based testing designs test cases from checklist items | 5 | PASS | "test cases are designed to exercise the items of a checklist" (S47) | |
| 52 | White-Box Checklist (L291) | The syllabus names only two white-box techniques: statement testing and branch testing | 1 | PASS | "this section focuses on two code-related white-box test techniques: Statement testing, Branch testing" (4.3) | The syllabus mentions other techniques only as a group, by no name. |
| 53 | White-Box Checklist (L295) | Statement coverage = statements exercised / executable statements | 1 | PASS | "number of statements exercised by the test cases divided by the total number of executable statements in the code" (4.3.1) | |
| 54 | White-Box Checklist (L296) | Branch coverage = branches exercised / branches; conditional branch = decision outcome | 1 | PASS | "number of branches exercised by the test cases divided by the total number of branches ... conditional (i.e., a decision outcome)" (4.3.2) | |
| 55 | White-Box Checklist (L296) | Branch coverage subsumes statement coverage | 1 | PASS | "Branch coverage subsumes statement coverage." (4.3.2) | 5 words, below the copy limit |
| 56 | White-Box Checklist (L297) | Condition testing is not one of the two techniques; more rigorous techniques are outside the syllabus | 1 | PASS | "There are more rigorous white-box test techniques ... These techniques are not discussed in this syllabus." (4.3) | The syllabus text has 0 hits for "condition testing" and "condition coverage". The page does not say ISTQB does not define condition testing (the glossary defines it, S44, Automotive syllabus only). Correct. |
| 57 | White-Box Checklist (L299) | A test can run a statement and miss a data-dependent defect, e.g. division by zero | 1 | PASS | "it may not detect defects that are data dependent (e.g., a division by zero that only fails when a denominator is set to zero)" (4.3.1) | |
| 58 | White-Box Checklist (L301) | White-box testing may miss defects of omission | 1 | PASS | "if the software does not implement one or more requirements, white-box testing may not detect the resulting defects of omission" (4.3.3) | |
| 59 | White-Box Checklist (L305) | "The syllabus says a checklist item must not be too general." | 1 | FAIL | "Checklists should not contain ... items that are too general" (4.4.3) | "must" for "should". Says more than the source. Fix: "should not be too general". |

## Table 2: warning callouts in the notes blocks

| # | Location | Owner line | ISTQB | Conflict real? | Named correctly? | Exact ending? | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Checklist-Based Testing, L157-161 | Written-format table, items 8 ("load within acceptable time (<3 sec)"), 10 ("HTTPS"), 1, 4, 9 | 4.4.3: "Checklists should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general" | Yes. Load time below a threshold and the use of HTTPS are checks that a tool can do. Item 1 joins two actions (register, log in), so it cannot be checked separately. Items 4 and 9 cover a full flow or an unnamed load. "Too general" is a judgment, but it is a fair one. | Yes. The callout uses "should not", as the syllabus does. | Yes. The text ends with "Switch to the ISTQB version at the top of the page to see the ISTQB definition." The rendered page has the sentence 2 times (one per Version tab). | PASS |

Owner lines checked that need no callout:

| Owner line | ISTQB | Why no callout |
|---|---|---|
| Error guessing: "Testers need to make a list of possible errors ..." | 4.4.1: this is the fault-attack form of error guessing | It matches the syllabus requirement for fault attacks. The istqb block names fault attacks. |
| Exploratory: "Often, it's done in a time-limited session" | 4.4.2: "sometimes performed using session-based testing" | A difference of emphasis, not a contradiction. |
| Exploratory: "Simple notes and findings are essential", "Lightweight documentation are the crucial part" | 4.4.2: the tester "may use test session sheets" | The owner's opinion about good practice. It does not state an ISTQB definition. |
| Checklist: checklist used inside exploratory testing | 4.4.2: exploratory testing "can incorporate the use of other test techniques" | Compatible with the syllabus. |
| White-box list: "Are individual conditions inside complex logic tested correctly?" | 4.3: two techniques only | A checklist question, not a claim that ISTQB covers condition testing. The istqb block (L297) explains the scope. |

## Table 3: "not defined" statements

| # | Location | Term | Syllabus | Glossary | Verdict |
|---|---|---|---|---|---|
| 1 | Black-Box Checklist, L230 | generic black-box checklist | 0 hits for "black-box checklist" (only "checklist-based testing" and "checklist-based reviewing") | No entry. The full term list (`https://api.glossary.istqb.org/v1/terms`) has only "checklist-based testing" and "checklist-based reviewing" with "checklist". | PASS |
| 2 | White-Box Checklist, L281 | generic white-box checklist | 0 hits | No entry (same search) | PASS |

Both topics follow the sentence with `<Callout type="note" title="The tutorial's own explanation">` and no Cite. PASS.

## Table 4: uncited factual claims in istqb blocks

| # | Location | Sentence | Verdict | Note |
|---|---|---|---|---|
| 1 | L94 | "The glossary describes it as a test approach where tests are designed and run dynamically." | PASS | No own Cite, but the next sentence completes the same glossary definition and has `<Cite n={3} />`. Review finding M3. |
| 2 | L187 | "A checklist needs care over time." | PASS | A lead-in to the three cited sentences after it. |
| 3 | L240 | "Use the list after your black-box test cases, not in place of them." | FAIL | Advice that reads as ISTQB guidance. The syllabus says experience-based techniques are "complementary"; it says nothing about the order "after". Not in a "tutorial's own" callout and not marked. Fix: move it into a callout that says it is the tutorial's own advice. |
| 4 | L242-250 | "The tutorial's own grouping of the 15 questions" and its table | PASS | Marked as the tutorial's own. Not an ISTQB claim. |
| 5 | L291 | "Two questions of the list match the white-box techniques of the syllabus." | PASS | The tutorial's mapping of the owner's list. The table under it gives the cited facts. |
| 6 | L299 | "Questions about null, empty, and boundary values help to find such defects. This link is the tutorial's own view." | PASS | Marked as the tutorial's own view in the text. Review finding M2 (not in a callout). |
| 7 | L301 | "Use the black-box checklist and the specification together with this list." | FAIL | Advice, not from ISTQB, not marked as the tutorial's own. Fix: move it into a callout that says it is the tutorial's own advice, or add "This advice is the tutorial's own." |

The callouts at L72, L115, L191, L252, L303 say in their first sentences that they are the tutorial's own. PASS.

## Copy check

Method: every 10-word run of each line of the page, compared with every 10-word run of the syllabus text (case and punctuation ignored).

| # | Location | Block | Copied run | Verdict |
|---|---|---|---|---|
| 1 | L70 | istqb | "defect and failure data, or from common knowledge about why software fails" (12 words; syllabus 4.4.1) | FAIL. Fix: reword, for example "from data about past defects and failures, or from general knowledge of the causes of software failure". |
| 2 | L28, L30, L31 | notes | Runs from 4.4.1 ("technique used to anticipate the occurrence of errors, defects and ...", "the types of errors the developers tend to make and ...", "the types of failures that have occurred in other, similar ...") | Not counted. This is the owner's text, which the rules require to be kept. |

No other run of 10 or more words matches.

## Other checks

| Check | Result |
|---|---|
| `&lt;3 sec` in the notes table (L153) | The built HTML has `acceptable time (&lt;3 sec)`, which a browser shows as `<3 sec`. Accepted as a formatting fix. |
| page.sources order | 1 (L49), 2 (L51), 3 (L94), 4 (L107), 5 (L167): in order of first Cite. All 5 cited. |
| URLs | Syllabus URL and glossary slugs match the sources file. |

## Open FAILs

| # | Table | Location | Short fix |
|---|---|---|---|
| 1 | 1 (row 33) | L179 | "often" is not "most" and not a rule |
| 2 | 1 (row 47) | L238 | Remove or mark "which suits black-box questions" |
| 3 | 1 (row 49) | L254 | "must" to "should" |
| 4 | 1 (row 59) | L305 | "must" to "should" |
| 5 | 4 (row 3) | L240 | Move the advice into a tutorial's-own callout |
| 6 | 4 (row 7) | L301 | Move the advice into a tutorial's-own callout |
| 7 | Copy check (row 1) | L70 | Reword the 12-word run |

Round 1 result: 7 open FAILs.

## Round 2

| Field | Value |
|---|---|
| Date | 2026-10-20 |
| Fix commit checked | d506387 (diff 9773acb..d506387) |
| Sources | Same 5 sources as round 1 |

Line numbers in this section refer to `content/fundamentals/experience-based.mdx` at d506387.

### Re-check of the round-1 FAILs

| # | Round-1 item | New text (short) | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|
| 1 | Table 1 row 33 (L179 "Most items are questions") | Row removed from the table. L184: "Checklist items are often questions." Table renamed "Guidance". | PASS | "Checklist items are often phrased in the form of a question." (4.4.3) | |
| 2 | Table 1 row 47 (L238 "which suits black-box questions") | L237 ends after "quality characteristics. <Cite n={1} />". The link to black-box questions moved into the callout at L240-244. | PASS | "These items may refer to requirements, graphical interface properties, quality characteristics or other forms of test conditions." (4.4.3) | |
| 3 | Table 1 row 49 (L254 "must") | L258: "should be checkable on its own, and a checklist should not contain items that are too general" | PASS | "It should be possible to check each item separately and directly." / "should not contain ... items that are too general" (4.4.3) | |
| 4 | Table 1 row 59 (L305 "must") | L314: "a checklist should not contain items that are too general" | PASS | "Checklists should not contain ... items that are too general" (4.4.3) | |
| 5 | Table 4 row 3 (L240 own advice) | Moved into `<Callout type="tip" title="How to use the list (the tutorial's own advice)">`, L240-244 | PASS | n/a (marked as the tutorial's own) | |
| 6 | Table 4 row 7 (L301 own advice) | Moved into the same kind of callout, L306-310 | PASS | n/a (marked as the tutorial's own) | |
| 7 | Copy check row 1 (L70) | "from data about past defects and failures, or from general knowledge of the causes of software failure" | PASS | "built based on experience, defect and failure data, or from common knowledge about why software fails" (4.4.1) | 10-word run check: no istqb line matches. Only the owner lines L28, L30, L31 match (not counted, as in round 1). |

### Changed or new claims

| # | Location | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | L94 | Glossary: tests are designed and run dynamically | 3 | PASS | "A test approach in which tests are dynamically designed and executed" (S24) | Own Cite added (round-1 note M3) |
| 2 | L113 | The tester can use other techniques during exploratory testing, e.g. EP | 1 | PASS | "Exploratory testing can incorporate the use of other test techniques (e.g., equivalence partitioning)." (4.4.2) | Round-1 note M4 closed |
| 3 | L175 | The syllabus gives guidance for the content of a checklist | 1 | PASS | "Checklists should not contain ..." / "It should be possible to check each item separately and directly." (4.4.3) | |
| 4 | L179 | You should be able to check each item separately and directly | 1 | PASS | "It should be possible to check each item separately and directly." (4.4.3) | |
| 5 | L180-182 | A checklist should not contain tool-checkable items, entry/exit-criteria items, or too-general items | 1 | PASS | "Checklists should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general" (4.4.3) | One Cite per row |
| 6 | L159 (warning callout) | ISTQB says a checklist should not contain tool-checkable items (8, 10) or too-general items (1, 4, 9) | none (notes block) | PASS | Same 4.4.3 quote as row 5 | Conflict real and named correctly. Ends with the exact required sentence. |
| 7 | L242 (own callout) | Questions about interface properties and quality characteristics fit a black-box checklist well; use the list after the black-box test cases | none | PASS | n/a | Marked as the tutorial's own. Not an ISTQB claim. |
| 8 | L308 (own callout) | Null, empty, and boundary questions can help to find data-dependent defects; use the black-box checklist and the specification too | none | PASS | n/a | Marked as the tutorial's own. Round-1 note M2 closed. |

No new uncited ISTQB fact in an istqb block. No new "not defined" statement. Table 2 and Table 3 are unchanged and still PASS.

### Other checks (round 2)

| Check | Result |
|---|---|
| `npm test` | 145 pass, 0 fail |
| `npm run build` | OK |
| `check_sources.py out` | `OK 46 pages checked, 0 skipped` |
| `check_outline.py out` / `check_links.py out` | `OK 586 TOC links` / no output, exit 0 |
| New callouts at L240 and L306 | They start on the line right after a paragraph, with no blank line. The built HTML shows both as separate callout blocks after the paragraph, so they render correctly. Formatting note only (see review r2). |

Round 2 result: all 7 round-1 FAILs are closed. No new FAIL.

Open FAILs: 0
