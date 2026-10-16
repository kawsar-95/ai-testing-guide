import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "leadership-001",
    question: "How would you build a QA team from scratch?",
    template:
      "First I learn ...\nThe two roles I plan for: ...\nThe levels of independence: ...\nHow I place the team: ...\nWho I hire first: ...\nHow I grow the team: ...",
    example:
      "First I learn the product, the release process, the biggest risks and what the business expects from quality. Then I plan for the two roles that the syllabus names. The testing role takes responsibility for the technical side of testing, mainly test analysis, design, implementation and execution. The test management role takes responsibility for the test process, the team and the leadership, mainly planning, monitoring, control and completion. In a small team, one person can hold both roles. I also plan for more than one level of independence. For most projects, the syllabus suggests that developers test their components, the test team tests the system, and business representatives do acceptance testing. I would place testers inside the product teams for daily work, and keep a small group for shared tools and standards. I hire first the person who can set up the basics: a test process, a defect workflow and a first smoke suite. I grow the team with pairing, training and a clear career path.",
    behind:
      "The interviewer checks that you plan roles, independence and placement before you hire. They listen for a first hire who sets up the basics and for a plan to grow people over time.",
    source: SYLLABUS + "#page=21",
  },
  {
    kind: "qa",
    id: "leadership-002",
    question: "How do you hire testers, and what do you look for?",
    template:
      "I start from ...\nThe skills I look for: ...\nHow I check testing knowledge: ...\nHow I check curiosity and detail: ...\nHow I check communication: ...\nHow I score and decide: ...",
    example:
      "I start from the role and what the team needs now. The syllabus lists generic skills that are relevant for testers: testing knowledge, thoroughness and curiosity, good communication, analytical and critical thinking, technical knowledge, and domain knowledge. I use that list as a base and I give each skill a weight that fits the role. I check testing knowledge with a short test design exercise, for example 'test a login form', and I judge the questions that the candidate asks as well as the list of tests. I check curiosity and attention to detail with a small app that has planted bugs. I check communication when the candidate writes a bug report and explains it to me. For a technical role, I add a small coding or API exercise. I do not ask trivia about tool menus. I score every candidate on the same sheet, and two interviewers score alone before we talk, so we compare evidence and not feelings.",
    behind:
      "The interviewer checks that you hire for skills that you can observe and not for a good talk. They listen for exercises that match the skills, the same scoring for everyone, and independent scores before the group talks.",
    source: SYLLABUS + "#page=21",
  },
  {
    kind: "qa",
    id: "leadership-003",
    question: "How do you build a QA roadmap and set QA goals?",
    template:
      "I start from ...\nTesting and QA are different: ...\nMy goals: ...\nThe roadmap horizons: ...\nHow I measure progress: ...\nHow I review the roadmap: ...",
    example:
      "I start from the business goals and the main product risks, and I ask where quality hurts most today: late releases, escaped defects or slow feedback. I separate two kinds of work. Testing looks at the product and finds problems that the team can then correct. QA looks at the process and tries to prevent problems by improving how the team works. The roadmap needs both. I set three to five goals that I can measure. Examples are 'cut the regression run from two days to two hours' and 'review every user story for testability before the sprint starts'. I split the roadmap into three horizons. Now covers the next quarter and fixes the biggest pain. Next covers the following two quarters and builds the base, such as automation and environments. Later holds ideas that I will confirm with data. Each goal has an owner and a measure, and I check progress every month. Every quarter I review the roadmap with product and development, and I drop goals that no longer matter.",
    behind:
      "The interviewer checks that your goals come from business needs and risks, that they are measurable, and that you plan both testing and process improvement. They also listen for owners, a rhythm of review, and the courage to drop goals.",
    source: SYLLABUS + "#page=17",
  },
  {
    kind: "qa",
    id: "leadership-004",
    question: "How do you handle a conflict between quality and speed?",
    template:
      "I treat it as ...\nThe facts I bring: ...\nThe options I offer: ...\nWho decides: ...\nWhat I record: ...\nHow I prevent the next conflict: ...",
    example:
      "I do not treat it as quality against speed. I treat it as a risk decision. First I find out what is at stake: the date, the customer and the cost of a delay. Then I bring facts: what we tested, what we did not test, and the open defects with their impact. I offer options, such as shipping with the risky feature switched off, shipping to a small group first, reducing the scope or moving the date. The syllabus says that running out of time or budget can be a valid reason to end testing, if the stakeholders know the risk of going live with less testing and accept it. So the decision belongs to the stakeholders. My part is to make the risk visible and clear. I write down the decision and the accepted risks. After the release, I look for the cause of the conflict, such as late changes or a weak test environment, and I raise it in the retrospective.",
    behind:
      "The interviewer checks that you do not just say no and do not just give in. They listen for a risk view, real options, a clear owner of the decision, and a step that prevents the same conflict next time.",
    source: SYLLABUS + "#page=49",
  },
  {
    kind: "qa",
    id: "leadership-005",
    question: "How do you report quality to executives?",
    template:
      "What executives need: ...\nWhat I put in the report: ...\nThe format: ...\nHow often I report: ...\nHow I show risk: ...\nHow I give bad news: ...",
    example:
      "Each reader needs different details, so I write for the decision that an executive must make. In the report I put the status against the plan, the quality of the product, the top risks with what they could cost, and the help that I need. The syllabus lists what a test completion report typically contains. A typical report compares the results with the test plan, and it also names the deviations from the plan, the risks and defects that are still open, and the lessons learned. I keep my report to one page, with a red, amber or green status and three bullets of explanation, and I link to the details. I state each risk in business terms. For example, I do not write 'the refund tests are not finished'. I write 'if the refund flow fails after release, customers cannot get their money back and support will get many calls. I need two more days to test it.' I report on a fixed rhythm that the executives agree to, for example every two weeks, and right away for a serious problem. Testers often bring bad news, and people may blame the one who brings it, so I give bad news in a constructive way, with the facts and a proposed action.",
    behind:
      "The interviewer checks that you can turn test data into a decision for a busy reader. They listen for a short format, a rhythm, risks stated in business terms, and a calm and constructive way to give bad news.",
    source: SYLLABUS + "#page=55",
  },
  {
    kind: "qa",
    id: "leadership-006",
    question: "How do you choose test tools and plan the budget?",
    template:
      "I start from ...\nThe tool types: ...\nThe costs I count: ...\nThe risks I check: ...\nHow I try a tool before I commit: ...\nHow I justify the budget: ...",
    example:
      "I start from the problem and not from a tool: what slows the team, or which risk we cannot cover today. The syllabus names several tool types, for example for test management, test execution and DevOps, so I check which type fits the problem. Buying a tool does not bring success by itself. A tool also needs setup time, upkeep and training, so I count these costs together with the licence price. I also check what can go wrong. I may expect too much from the tool. I may estimate the effort wrongly. The vendor may stop its support. An open-source project may be dropped. The tool may not work with our platform. Before I commit, I run a short trial on a real project with a clear success measure. I justify the budget with the problem that it solves, for example the hours saved for each release, and I set a review date when we decide to keep or drop the tool.",
    behind:
      "The interviewer checks that you buy a tool to solve a stated problem and that you count the full cost. They listen for risk checks, a trial before the purchase, and a budget case with a review date.",
    source: SYLLABUS + "#page=59",
  },
  {
    kind: "qa",
    id: "leadership-007",
    question: "How do you handle an underperforming team member?",
    template:
      "First I check ...\nThen I talk ...\nWe agree ...\nI support by ...\nI follow up ...\nIf nothing changes: ...",
    example:
      "First I check the facts: what the expectations were, if they were clear, and what the work looks like. I also look for causes outside the person, such as unclear tasks, a lack of training or a heavy load. Then I talk to the person soon and in private. I describe what I saw with examples and not with judgments, and I listen to their view. Together we agree on two or three clear goals and a time frame, for example six weeks. We also agree on the support that I give, such as training, a pairing partner or smaller tasks. I follow up every week in a short meeting and I note the progress in writing. If the work improves, I say so openly. If it does not improve after the support and the time frame, I involve HR and follow the company process, and the person knows each step before it happens.",
    behind:
      "The interviewer checks that you are fair and that you start with facts and causes. They listen for private and early talks, clear goals, real support, weekly follow-up, and respect for the company process if things do not improve.",
  },
  {
    kind: "qa",
    id: "leadership-008",
    question: "Which QA metrics can mislead, and what do you use instead?",
    template:
      "A metric that misleads: ...\nWhy it misleads: ...\nAnother example: ...\nA metric that pushes the wrong behavior: ...\nWhat I use instead: ...\nHow I review metrics: ...",
    example:
      "A raw count of defects found can mislead. The syllabus lists the number of defects found as a defect metric. But a low number does not mean good quality, because testing can show that defects are present and cannot prove that none are left. The syllabus also lists the number of tests that passed or failed as a test progress metric. In my experience, a high defect count can come from a very good test effort or from a very large release, and a team can reach a 100% pass rate with weak tests. In my experience, a metric that compares people, such as bugs found for each tester, pushes people to log many small defects. I ask which decision each metric supports, and I use several metrics together: defects by severity and by area, how many defects escape after release, and the time of the regression run. I review each metric every quarter, and I drop the ones that nobody uses.",
    behind:
      "The interviewer checks that you do not trust a single number and that you can explain how a metric changes behavior. They listen for a better set of metrics tied to decisions and for a habit of reviewing and dropping metrics.",
    source: SYLLABUS + "#page=54",
  },
];
