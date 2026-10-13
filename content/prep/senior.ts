import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";
const GLOSSARY = "https://glossary.istqb.org/en_US/term/";
const PACT = "https://docs.pact.io/";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "senior-001",
    question: "How would you design a test strategy for a new product?",
    template:
      "A test strategy is ...\nFirst I learn the circumstances: ...\nThe product risks: ...\nTest levels and types: ...\nThe automation split: ...\nEnvironments, data, exit criteria and reporting: ...\nHow I keep it current: ...",
    example:
      "A test strategy describes how to perform testing to reach the test objectives under given circumstances. So I start with the circumstances: the stakeholders, the skills of the team, the business domain, the technology, the project constraints and the tools. For a new food-delivery app, I would list the product risks with the team and rate each one by likelihood and impact. Payment errors and wrong orders rank high. Then I choose the test levels and test types for each risk. Following the test pyramid, I plan many fast component tests, fewer API tests and a few end-to-end tests. I add performance and security checks for the risks that need them. I plan the test environments and the test data early. I agree on the exit criteria with the stakeholders before testing starts, and I decide how I report progress. I keep the strategy short, and I review it after each release, because the context changes.",
    behind:
      "The interviewer checks that you start from context and risk and not from a tool list. They listen for levels and types that follow the risks, a sensible automation split, and a strategy that you update.",
    source: GLOSSARY + "test-strategy",
  },
  {
    kind: "qa",
    id: "senior-002",
    question: "How do you judge the return on investment of test automation?",
    template:
      "The benefits: ...\nThe costs and risks: ...\nHow I estimate the return: ...\nWhat I automate first: ...\nWhat I keep manual: ...\nHow I check the result later: ...",
    example:
      "Buying a tool does not make a project succeed. The team must also spend time on setup, upkeep and training. The syllabus names these benefits: testers spend less time on repetitive manual work, the tests run in a more consistent and repeatable way, feedback comes sooner so defects appear earlier, and testers get time to design deeper tests. It names risks too. The team may expect too much from a tool. It may underestimate the time and cost to introduce the tool and to maintain the scripts. It may use a tool where manual testing fits better, or it may lean on the tool too much. For the return, I use a simple comparison of my own: the cost to build and maintain a test, against the manual time that it saves over the runs I expect. I automate first the stable, high-risk checks that run on every build, such as smoke and regression tests. I keep manual or exploratory testing for areas that change often or need human judgment. After three months I review the real numbers: maintenance time, flaky failures and the defects that the tests caught.",
    behind:
      "The interviewer checks that you give both the benefits and the costs and that you have a simple way to compare them. They also listen for what you automate first and for a plan to check the result with real numbers.",
    source: SYLLABUS + "#page=59",
  },
  {
    kind: "qa",
    id: "senior-003",
    question: "How do you choose a test automation framework or tool?",
    template:
      "I start from ...\nMy criteria: ...\nThe risks I check: ...\nHow I compare the options: ...\nHow I decide, and who agrees: ...\nHow I plan an exit: ...",
    example:
      "I start from the needs and not from the tool: what I must test (web, API or mobile), the skills of the team, the language of the product and the CI system. Then I list criteria and give each one a weight. My usual criteria are fit with the technology of the product, how easy it is to write and debug tests, speed and stability of the runs, reports, cost, and the support and community around the tool. I also check the risks that the syllabus names. The tool may not be compatible with the development platform. An open-source tool may be abandoned, with no further updates. A vendor may go out of business, retire the tool or give poor support. To compare options, I build the same two or three important tests in each shortlisted tool during a time-boxed proof of concept, and I score the results. I decide together with the people who will use the tool, and I write down why we chose it. I also plan how we could replace the tool, so that the tests do not lock us in.",
    behind:
      "The interviewer checks that you choose with criteria and evidence and not by fashion. They listen for the known risks of a tool, a fair trial of the options, a decision shared with the team, and a way out.",
    source: SYLLABUS + "#page=60",
  },
  {
    kind: "qa",
    id: "senior-004",
    question: "How do you mentor a junior tester?",
    template:
      "First I ask ...\nWe set goals: ...\nHow I teach: ...\nHow I give feedback: ...\nHow I give room to grow: ...\nHow I know it works: ...",
    example:
      "First I ask what they want to learn and where they feel weak, so that the plan fits the person. Together we set two or three goals for the next few months, for example to write clear bug reports and to design tests with boundary values. I teach by doing. I pair with them on a real task and explain my thinking aloud, then we swap and I watch them work. I review their first bug reports and test cases with them. My feedback is specific and kind, and it is about the work and not about the person. I give them small tasks with real ownership, such as one feature area, and I stay available without taking over. Every two weeks we meet for 30 minutes to look at what went well and what to change. I know it works when they can do tasks alone, when I write fewer review comments, and when they bring ideas of their own.",
    behind:
      "The interviewer checks that you have a method and not only good will. They listen for goals that fit the person, learning by doing, feedback on the work, a regular rhythm, and a clear sign of success.",
  },
  {
    kind: "qa",
    id: "senior-005",
    question: "How do you plan non-functional testing?",
    template:
      "Non-functional testing checks ...\nThe quality characteristics: ...\nHow I choose which ones to test: ...\nWhen I start: ...\nWhat I need to prepare: ...\nHow I set the pass criteria: ...",
    example:
      "Non-functional testing asks how well the system works, and not which functions it has. The syllabus shows the ISO 25010 classification of the quality characteristics: performance efficiency, compatibility, usability, reliability, security, maintainability, portability and safety. I do not test all of them with the same effort. I choose by product risk and by what the stakeholders need. For an online bank, security and reliability come first, then performance. I start early, for example in reviews and in component testing. Many non-functional tests are built from functional tests and check a constraint, such as a time limit. A late find of a non-functional defect can put a project in danger. Some tests need a special setup, for example a usability lab, so I book the environment and the tools early. For each characteristic I agree a measurable pass criterion with the stakeholders, for example a response time for the most used pages.",
    behind:
      "The interviewer checks that you know the quality characteristics and that you plan by risk, not by habit. A strong answer says when to start, what to prepare, and how to turn a wish like 'fast' into a number.",
    source: SYLLABUS + "#page=30",
  },
  {
    kind: "qa",
    id: "senior-006",
    question: "What release gate criteria would you set, and how do you agree on them?",
    template:
      "A release gate is ...\nThe types of criteria: ...\nMy criteria: ...\nWho agrees on them, and when: ...\nWhat happens if a criterion fails: ...\nHow I report the result: ...",
    example:
      "I use a release gate as a set of exit criteria: the conditions that must be true before we call the work finished. The syllabus gives two types. Some are measures of thoroughness, for example the level of coverage, the number of unresolved defects, defect density or the number of failed test cases. Others are yes/no items, for example that the planned tests have been executed and that all defects found are reported. In Agile teams, exit criteria are often called the Definition of Done. My own gate for a web release has four items. There are no open defects of the highest severity. All planned regression tests have run and passed. The smoke test passes on the release build. Every open medium defect has an owner. I agree on the gate with product, development and operations before the work starts. I report the result in one short message to these people and to the release manager. The message lists each criterion as met or not met, and it lists the open risks. If a criterion fails, I do not decide alone. I give the stakeholders the facts and the risk, and they decide. When time or budget runs out before the criteria are met, the syllabus allows going live with less testing, but only when the stakeholders know the risk and accept it.",
    behind:
      "The interviewer checks that your criteria are measurable and agreed in advance, and that you know who owns the release decision. They also listen for how you report the result and handle a failed gate.",
    source: SYLLABUS + "#page=49",
  },
  {
    kind: "qa",
    id: "senior-007",
    question: "How do you keep quality high in a microservices system?",
    template:
      "The challenge: ...\nTests inside one service: ...\nTests between services: ...\nEnd-to-end tests: ...\nEnvironments and monitoring: ...\nWho owns what: ...",
    example:
      "The challenge is that many services must work together, and each team changes its own service. I test in layers. Inside each service, the team writes many fast component tests and tests of its own API. Between services, I use contract tests. A contract is made between a consumer, which uses the data, and a provider, which supplies it. Each side is checked on its own against the shared contract, so I can confirm that the services work together without deploying every service first. The Pact documentation says that contract testing applies anywhere that two services need to communicate. I keep a small number of end-to-end tests for the main user journeys, because tests in the top layer of the pyramid are generally slower than tests in the lower layers. I also keep one shared test environment that is stable, and I watch the real system after release. Each team owns the tests of its service and the contracts that it uses. I own the strategy and the gaps between the teams.",
    behind:
      "The interviewer checks that you do not rely on end-to-end tests alone. They listen for contract tests between services, tests inside each service, a few journey tests, and a clear split of ownership between teams.",
    source: PACT,
  },
  {
    kind: "qa",
    id: "senior-008",
    question: "How do you influence a team when you have no authority over it?",
    template:
      "I start by understanding ...\nI build trust by ...\nI use facts such as ...\nI make the first step small: ...\nHow I handle a no: ...\nExample: ...",
    example:
      "I start by learning what the other team cares about, such as deadlines, stability or cost, and I link my request to that. I build trust with small, useful help first. For example, I fix a flaky test that blocks their build. When I want a change, I bring facts and not opinions: the defects that escaped from their module, with two or three examples, and the time that the change would save. I make the first step small and easy, for example a short trial of one new check in their pipeline. If the answer is no, I ask what would change it, and I write down the risk so that the decision is visible. Then I come back later with new data. For example, a lead did not want unit tests for an old module. I offered to write the first tests myself and showed that they caught regressions. Then the team agreed to add tests to new changes.",
    behind:
      "The interviewer checks that you can lead without a title. They listen for respect for the other team's goals, facts, a small first step, patience after a no, and a concrete story.",
  },
];
