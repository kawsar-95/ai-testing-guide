# Requirement Analysis & Acceptance Criteria — research notes (2026-11-15)

## Sources
S1. Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-11-15 — cache: istqb-ctfl.txt
S2. ISTQB Glossary: test basis — ISTQB — https://glossary.istqb.org/en_US/term/test-basis — accessed 2026-11-15 — cache: istqb-term-test-basis.txt
S3. ISTQB Glossary: requirement — ISTQB — https://glossary.istqb.org/en_US/term/requirement — accessed 2026-11-15 — cache: istqb-term-requirement.txt
S4. ISTQB Glossary: testability — ISTQB — https://glossary.istqb.org/en_US/term/testability — accessed 2026-11-15 — cache: istqb-term-testability.txt
S5. ISTQB Glossary: test condition — ISTQB — https://glossary.istqb.org/en_US/term/test-condition — accessed 2026-11-15 — cache: istqb-term-test-condition.txt
S6. Atlassian MCP Server README — Atlassian (GitHub) — https://github.com/atlassian/atlassian-mcp-server — accessed 2026-11-15 — cache: tool-atlassian-mcp.txt
S7. Get started with the Atlassian MCP server — Atlassian (support.atlassian.com) — https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/ — accessed 2026-11-15 — cache: atlassian-rovo-mcp.txt
S8. gh issue view — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_view — accessed 2026-11-15 — cache: gh-issue-view.txt
S9. Connect Claude Code to tools via MCP — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/mcp — accessed 2026-11-15 — cache: cc-mcp.txt
S10. ISTQB Glossary: product risk — ISTQB — https://glossary.istqb.org/en_US/term/product-risk — accessed 2026-11-15 — cache: istqb-term-product-risk.txt
S11. ISTQB Glossary: risk-based testing — ISTQB — https://glossary.istqb.org/en_US/term/risk-based-testing — accessed 2026-11-15 — cache: istqb-term-risk-based-testing.txt
S12. Extend Claude with skills — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/skills — accessed 2026-11-15 — cache: cc-skills.txt
S13. Choose a permission mode — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permission-modes — accessed 2026-11-15 — cache: cc-permission-modes.txt
S14. ISTQB Glossary: acceptance criteria — ISTQB — https://glossary.istqb.org/en_US/term/acceptance-criteria — accessed 2026-11-15 — cache: istqb-term-acceptance-criteria.txt
S15. ISTQB Glossary: user story — ISTQB — https://glossary.istqb.org/en_US/term/user-story — accessed 2026-11-15 — cache: istqb-term-user-story.txt
S16. ISTQB Glossary: acceptance test-driven development — ISTQB — https://glossary.istqb.org/en_US/term/acceptance-test-driven-development — accessed 2026-11-15 — cache: istqb-term-acceptance-test-driven-development.txt
S17. Gherkin Reference — Cucumber (cucumber.io) — https://cucumber.io/docs/gherkin/reference/ — accessed 2026-11-15 — cache: cucumber-gherkin.txt
S18. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S19. gh issue comment — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_comment — accessed 2026-11-15 — cache: gh-issue-comment.txt
S20. All settings — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/settings-reference — accessed 2026-11-15 — cache: cc-settings-reference.txt (added in round 2)
D. dMoney practice repo (public, https://github.com/kawsar-95/genAI-project, commit 51db34a) — cache: dmoney-repo/. Facts have no cite on the page; a "Where these facts come from" callout covers them.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | The test basis is the body of knowledge used as the basis for test analysis and test design. | "The body of knowledge used as the basis for test analysis and test design." | S2 | |
| C2 | A requirement is a provision that contains criteria to be fulfilled. | "A provision that contains criteria to be fulfilled." | S3 | |
| C3 | Testability: the degree to which test conditions can be established and tests can show whether they are met. | "The degree to which test conditions can be established for a component or system, and tests can be performed to determine whether those test conditions have been met." | S4 | |
| C4 | A test condition is a testable aspect of a component or system that is intended to be tested. | "A testable aspect of a component or system that is intended to be tested." | S5 | |
| C5 | Test analysis analyzes the test basis to identify testable features. | "Test analysis includes analyzing the test basis to identify testable features." | S1 | |
| C6 | Test analysis also evaluates the test basis for defects and assesses its testability. | "The test basis and the test object are also evaluated to identify defects they may contain and to assess their testability." | S1 | |
| C7 | Work products of test analysis include test conditions such as acceptance criteria, and defect reports on defects in the test basis. | "(prioritized) test conditions (e.g., acceptance criteria, see ... defect reports regarding defects in the test basis" | S1 | |
| C8 | In static testing the software is not executed; reviews are one kind. | "in static testing the software under test does not need to be executed" | S1 | |
| C9 | Requirement specification documents and product backlog items can be examined by static testing. | "Examples include requirement specification documents, source code, test plans, test cases, product backlog items" | S1 | |
| C10 | Static testing can find defects in the earliest phases of the SDLC. | "Static testing can detect defects in the earliest phases of the SDLC" | S1 | |
| C11 | Typical requirement defects: inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications. | "Defects in requirements (e.g., inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications)" | S1 | |
| C12 | Reviews can make sure user stories are complete, understandable, and have testable acceptance criteria. | "Review techniques can be applied to ensure user stories are complete and understandable and include testable acceptance criteria." | S1 | |
| C13 | Testers ask the right questions to explore, challenge and improve user stories. | "By asking the right questions, testers explore, challenge and help improve the proposed user stories." | S1 | |
| C14 | Teams work together so user stories meet defined criteria such as the Definition of Ready. | "to ensure that user stories and related work products meet defined criteria, e.g., the Definition of Ready" | S1 | |
| C15 | Claude Code command to add the Atlassian MCP server, then /mcp to authenticate. | "claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp, then run /mcp in a session to authenticate" | S6 | |
| C16 | v2 is the recommended version. | "v2 is now the recommended version." | S6 | |
| C17 | Jira permission groups are read, write, and search. | "read_jira · write_jira · search_jira" | S6 | |
| C18 | Access covers only data the user can already view. | "Access is granted only to data that the user already has permission to view in Atlassian Cloud." | S6 | |
| C19 | The README suggests limiting JQL search results (JQL search is a supported operation). | "use maxResults: 10 or limit: 10 for ALL Jira JQL and Confluence CQL search operations" | S6 | |
| C20 | The server can summarize and search Jira, and create and update work items. | "Summarize and search Jira" ... "Create and update work items or pages using natural language commands." | S7 | |
| C21 | Atlassian advises least privilege for MCP clients, which act with the user's permissions. | "MCP clients can perform actions on all connected products" ... "Use least privilege" | S7 | |
| C22 | gh issue view shows the title, body, and other information about an issue. | "Display the title, body, and other information about an issue." | S8 | |
| C23 | --comments shows issue comments. | "View issue comments" | S8 | |
| C24 | --json fields include labels, milestone, parent, and subIssues. | "labels, milestone, number, parent" ... "subIssues" | S8 | |
| C25 | -R / --repo selects another repository. | "--repo <[HOST/]OWNER/REPO>" | S8 | |
| C26 | Servers that fetch external content can expose you to prompt injection. | "Servers that fetch external content can expose you to" | S9 | link text "prompt injection risk" follows |
| C27 | A product risk is a risk that impacts the quality of a product. | "A risk that impacts the quality of a product." | S10 | |
| C28 | Risk-based testing bases the selection and prioritization of test activities on risk types and levels. | "A test approach in which the management, selection, prioritization, and use of test activities and resources are based on corresponding risk types and risk levels." | S11 | |
| C29 | Risk likelihood and risk impact together give the risk level. | "These two factors express the risk level" | S1 | |
| C30 | Examples of product risks: missing or wrong functionality, incorrect calculations, security vulnerabilities. | "Examples of product risks include: missing or wrong functionality, incorrect calculations" ... "security vulnerabilities" | S1 | |
| C31 | Product risk analysis ideally begins early in the SDLC. | "Ideally, product risk analysis begins early in the SDLC." | S1 | |
| C32 | A skill is a SKILL.md file with instructions; invoke it with /skill-name. | "Create a SKILL.md file with instructions, and Claude adds it to its toolkit." ... "you can invoke one directly with /skill-name" | S12 | |
| C33 | A project skill lives at .claude/skills/<skill-name>/SKILL.md; commit it so the team gets it. | ".claude/skills/<skill-name>/SKILL.md" ... "Commit it so your team gets it too" | S12 | |
| C34 | disable-model-invocation: true stops Claude from loading the skill on its own. | "Set to true to prevent Claude from automatically loading this skill. Use for workflows you want to trigger manually with /name." | S12 | |
| C35 | argument-hint is shown during autocomplete. | "Hint shown during autocomplete to indicate expected arguments." | S12 | |
| C36 | $ARGUMENTS holds the arguments passed to the skill. | "Arguments are available via the $ARGUMENTS placeholder." | S12 | |
| C37 | allowed-tools grants tools without asking during the turn. | "Tools Claude can use without asking permission during the turn that invokes this skill." | S12 | |
| C38 | Plan mode: Claude researches and proposes changes without making them; it reads files and runs shell commands but does not edit source. | "Plan mode tells Claude to research and propose changes without making them." ... "Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." | S13 | |
| C39 | Enter plan mode with Shift+Tab, /plan, or claude --permission-mode plan. | "Enter plan mode by pressing Shift+Tab or prefixing a single prompt with /plan." ... "claude --permission-mode plan" | S13 | |
| C40 | Acceptance criteria: the criteria a work product must satisfy to be accepted by the stakeholders. | "The criteria that a work product must satisfy to be accepted by the stakeholders." | S14 | |
| C41 | A user story is a short narrative of a need from a user's perspective with the expected benefit. | "A short narrative describing a need from a user's perspective together with the expected benefit when this need is satisfied." | S15 | |
| C42 | The 3 Cs: Card, Conversation, Confirmation. | "Card – the medium describing a user story" ... "Conversation – explains how the software will be used" ... "Confirmation – the acceptance criteria" | S1 | |
| C43 | Common user story format. | "As a [role], I want [goal to be accomplished], so that I can" | S1 | |
| C44 | INVEST. | "Independent, Negotiable, Valuable, Estimable, Small and Testable" | S1 | |
| C45 | If a stakeholder does not know how to test a story, the story may not be clear enough. | "If a stakeholder does not know how to test a user story, this may indicate that the user story is not clear enough" | S1 | |
| C46 | Acceptance criteria may be viewed as test conditions for the tests. | "acceptance criteria may be viewed as the test conditions that should be exercised by the tests" | S1 | |
| C47 | Acceptance criteria describe both positive and negative scenarios. | "Describe both positive and negative scenarios" | S1 | |
| C48 | Two common formats: scenario-oriented and rule-oriented. | "Scenario-oriented (e.g., Given/When/Then format used in BDD" ... "Rule-oriented (e.g., bullet point verification list, or tabulated form of input-output mapping)" | S1 | |
| C49 | A custom format is fine if the criteria are well-defined and unambiguous. | "as long as the acceptance criteria are well-defined and unambiguous" | S1 | |
| C50 | ATDD: a collaboration-based test-first approach in the stakeholders' domain language. | "A collaboration-based test-first approach that defines acceptance tests in the stakeholders' domain language." | S16 | |
| C51 | ATDD starts with a specification workshop that resolves incompleteness and ambiguities. | "The first step is a specification workshop" ... "Incompleteness, ambiguities, or defects in the user story are resolved during this process." | S1 | |
| C52 | Positive test cases first, then negative, then non-functional. | "Typically, the first test cases are positive" ... "After the positive test cases are done, the team should perform negative testing." ... "Finally, the team should cover non-functional quality characteristics" | S1 | |
| C53 | Test cases cover the story and do not go beyond it. | "The test cases must cover all the characteristics of the user story and should not go beyond the story." | S1 | |
| C54 | Gherkin primary keywords include Feature, Rule, Scenario Outline, Examples, Background. | "Rule (as of Gherkin 6)" ... "Scenario Outline (or Scenario Template)" ... "Examples (or Scenarios)" | S17 | |
| C55 | Each step starts with Given, When, Then, And, or But. | "Each step starts with Given, When, Then, And, or But." | S17 | |
| C56 | Given: initial context; When: event or action; Then: expected outcome. | "Given steps are used to describe the initial context of the system" ... "When steps are used to describe an event, or an action." ... "Then steps are used to describe an expected outcome, or result." | S17 | |
| C57 | A Rule represents one business rule and groups its scenarios. | "The purpose of the Rule keyword is to represent one business rule that should be implemented." | S17 | |
| C58 | Scenario is a synonym of Example. | "The keyword Scenario is a synonym of the keyword Example." | S17 | |
| C59 | Cucumber recommends 3-5 steps per example. | "we recommend 3-5 steps per example" | S17 | |
| C60 | Scenario Outline runs the same scenario with different values. | "The Scenario Outline keyword can be used to run the same Scenario multiple times, with different combinations of values." | S17 | |
| C61 | An outcome should be on an observable output. | "An outcome should be on an observable output." | S17 | |
| C62 | Examples should not make assumptions about technology or user interface. | "make any assumptions about technology or user interface" | S17 | |
| C63 | Ask rules prompt for confirmation. | "Ask rules prompt for confirmation when Claude tries to use the specified tool." | S18 | |
| C64 | Rules are evaluated deny, then ask, then allow. | "Rules are evaluated in order: deny, then ask, then allow." | S18 | |
| C65 | A matching ask rule prompts even when an allow rule also matches. | "a matching ask rule prompts even when a more specific allow rule also matches the same call" | S18 | |
| C66 | mcp__<server>__* matches every tool of a server. | "To match every tool from an MCP server, write mcp__<server>__*" | S18 | |
| C67 | gh issue comment adds a comment; --body-file reads the body from a file. | "Add a comment to a GitHub issue." ... "Read body text from file" | S19 | |
| C68 | dMoney BRD Send Money endpoint. | "Endpoint: POST /transaction/sendmoney" | dmoney-repo/dmoney-web-react/README.md | |
| C69 | Sender and receiver must be different. | "from_account and to_account must be different." | dmoney-repo/dmoney-web-react/README.md | |
| C70 | Both accounts must be Customers and active. | "Both accounts must have the role Customer" ... "Both accounts must be active" | dmoney-repo/dmoney-web-react/README.md | |
| C71 | Minimum amount 10 BDT, flat fee 5 BDT. | "Minimum amount: 10 BDT" ... "Fixed service fee: 5 BDT" | dmoney-repo/dmoney-web-react/README.md | |
| C72 | Balance must be at least amount + 5. | "Sender must have balance ≥ amount + 5" | dmoney-repo/dmoney-web-react/README.md | |
| C73 | Daily and monthly limits are checked first; daily 5,000 Tk and 10 transactions. | "Daily and monthly outgoing limits are checked first" ... "Daily \| 5,000 Tk \| 10 transactions" | dmoney-repo/dmoney-web-react/README.md | |
| C74 | Monthly limit 50,000 Tk and 50 transactions. | "Monthly \| 50,000 Tk \| 50 transactions" | dmoney-repo/dmoney-web-react/README.md | |
| C75 | The repo's analyze-requirement skill turns a requirement into testable acceptance criteria and labels assumptions. | "Turn a requirement into testable acceptance criteria." ... "If you must assume, label the assumption." | dmoney-repo/dmoney-transaction-api/.claude/skills/analyze-requirement/SKILL.md | |
| C76 | The repo's understand-task skill fetches an issue with gh issue view --comments and never analyzes from the title or ID alone. | "gh issue view <n> --comments" ... "Never analyze from the title or ID alone." | dmoney-repo/.claude/skills/understand-task/SKILL.md | |
| C78 | The example messages in the Gherkin outline match the API: the minimum-amount error and the success message. | "Minimum amount is ${minAmount} tk" ... "Send money successful" | dmoney-repo/dmoney-transaction-api/controllers/transactions/sendMoney.controller.js | Used in the tutorial's own Gherkin example. |
| C77 | The SM-M01 note found that the BRD never says how phone numbers are normalized. | "the BRD never says how phone numbers are normalized" | dmoney-repo/dmoney-transaction-api/.artifacts/SM-M01_requirement.md | |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F4 | Fixed: the sentence now describes this page only ("On this page, the test basis is the story and its issue"). Same in the Layman and Bangla panels. |
| facts | F33 | Fixed: added the Atlassian warning with `<Cite n={6} />` (S6: "LLMs are vulnerable to prompt injection and related attacks (such as indirect prompt injection …). These attacks can instruct the agent to exfiltrate data or make unintended changes"). Treating ticket text as data is now labelled as the tutorial's practice. |
| facts | F44 | Fixed: the docs' reason for a skill (S12: "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat") replaces the "same shape" claim; the tutorial's reason is labelled. Same in all three panels. |
| facts | F89 | Fixed: the callout is now titled "The tutorial's advice", and the LLM claim is softened to "An answer can read well even when the story is silent". Same in all three panels. |
| facts | F96 | Fixed: removed `Bash(gh issue edit *)` from the example. |
| facts | F99 | Fixed: "Organization admins grant or revoke access at the permission-group level" (S6); the read-only grant is labelled as the tutorial's suggestion. Same in all three panels. |
| voices | V1 | Fixed: "without running any code". |
| voices | V2 | Fixed: "a statement that contains criteria to be fulfilled". |
| voices | V3 | Fixed: "It can find defects in the earliest phases." |
| voices | V5 | Fixed: the Layman now restates S9 and S6, as the Technical panel does. |
| voices | V9 | Fixed: "does not edit your source". |
| voices | V11 | Fixed: "If a stakeholder does not know how to test a story". |
| voices | V12 | Fixed: "Criteria describe both good paths and error paths." |
| voices | V14 | Fixed: deleted the added definition of Gherkin; "an observable output". |
| voices | V18 | Fixed: "and" instead of "so". |
| voices | V19 | Fixed: "আর" instead of "তাই". |
| voices | V22 | Fixed: "Plan mode does not edit your source." |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | LLMs are vulnerable to prompt injection and related attacks, such as indirect prompt injection, which can instruct the agent to exfiltrate data or make unintended changes. | "Large language models (LLMs) are vulnerable to prompt injection and related attacks (such as indirect prompt injection and tool poisoning). These attacks can instruct the agent to exfiltrate data or make unintended changes without explicit requests." | S6 | |
| R2 | The docs suggest a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat. | "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat" | S12 | |
| R3 | Organization admins grant or revoke access at the permission-group level. | "Organization admins grant or revoke access at the permission-group level" | S6 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F21 | Fixed: "The Jira permission groups include `read_jira`, `write_jira`, and `search_jira`. `delete_jira` and `manage_jira` are disabled by default, and an admin must enable them." Same in all three panels. |
| facts | F76 | Fixed: the rules now come from "the business requirements document (BRD) in `dmoney-web-react/README.md`" (root README: "read the BRD in `dmoney-web-react/README.md`"). Same in the Bangla panel. |
| facts | F95 | Fixed: added S20, which shows the `ask` array of `permissions`. |
| voices | V1 | Fixed: "the knowledge you use as the base for analyzing and designing tests". |
| voices | V2 | Fixed: "ধরা পড়তে পারে". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | `delete_jira` and `manage_jira` are disabled by default, and an admin must enable them. | "**`delete_jira` and `manage_jira`** are **disabled by default** and must be enabled by an admin before they can be used." | S6 |  |
| R2.2 | The `permissions` object of a settings file takes `allow`, `ask`, and `deny` arrays. | "**Type**: object with `allow`, `ask`, `deny`, …" | S20 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F10 | Fixed: "the software under test does not need to be executed". Same in all three panels. |
| facts | F19 | Fixed: added `<Cite n={6} />`. |
| facts | F114 | Fixed: the Key words row uses the S1 wording. |
| voices | V7 | Fixed: deleted "such as an issue key". |
| voices | V12 | Fixed: "নির্দিষ্ট (flat) 5 BDT". |
| voices | V19 | Fixed: "Checking the database in Then steps"; "an observable output". |
