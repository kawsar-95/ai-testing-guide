import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";
const GLOSSARY = "https://glossary.istqb.org/en_US/term/";

export const items: readonly PrepItem[] = [
  {
    kind: "mcq",
    id: "mcq-test-001",
    question:
      "A team runs the same regression suite for a year and it finds no new defects. Which testing principle explains this?",
    options: [
      "Defects cluster together",
      "Tests wear out",
      "Early testing saves time and money",
      "Exhaustive testing is impossible",
    ],
    answer: 1,
    explanation:
      "Tests wear out. If the same tests repeat many times, they become increasingly ineffective in detecting new defects, so the team may need to change the tests and the test data.",
    source: SYLLABUS + "#page=18",
  },
  {
    kind: "mcq",
    id: "mcq-test-002",
    question: "Which test level focuses on the interfaces and interactions between components?",
    options: [
      "Component testing",
      "System testing",
      "Component integration testing",
      "Acceptance testing",
    ],
    answer: 2,
    explanation:
      "Component integration testing focuses on the interfaces and interactions between components. Component testing checks one component in isolation, so it does not look at the interactions.",
    source: SYLLABUS + "#page=29",
  },
  {
    kind: "mcq",
    id: "mcq-test-003",
    question:
      "A field accepts whole numbers from 18 to 60. With equivalence partitioning, how many test cases do you need at least to cover every partition, valid and invalid?",
    options: ["1", "2", "4", "3"],
    answer: 3,
    explanation:
      "There are 3 partitions: below 18 (invalid), 18 to 60 (valid), and above 60 (invalid). Full coverage means each partition, including the invalid ones, is exercised at least once, and one test for each partition is enough.",
    source: SYLLABUS + "#page=40",
  },
  {
    kind: "mcq",
    id: "mcq-test-004",
    question:
      "A field accepts whole numbers from 18 to 60. Which values give full coverage with 2-value boundary value analysis?",
    options: [
      "17, 18, 60, 61",
      "18 and 60",
      "17, 18, 19, 59, 60, 61",
      "0, 18, 60, 100",
    ],
    answer: 0,
    explanation:
      "In 2-value BVA each boundary value has 2 coverage items: the boundary value and its closest neighbor in the adjacent partition. The boundaries 18 and 60 give 17 and 18, and 60 and 61. The set with 19 and 59 is for 3-value BVA.",
    source: SYLLABUS + "#page=40",
  },
  {
    kind: "mcq",
    id: "mcq-test-005",
    question:
      "A crash happens in an admin screen that almost nobody uses. Which term describes how much impact the defect has?",
    options: ["Priority", "Severity", "Coverage", "Risk appetite"],
    answer: 1,
    explanation:
      "Severity is the degree of impact that a defect has on the development, testing or operation of a component or system. Priority is the level of importance assigned to a task, so it sets the order of the work and is a different thing.",
    source: GLOSSARY + "severity",
  },
  {
    kind: "mcq",
    id: "mcq-test-006",
    question: "What is the purpose of regression testing?",
    options: [
      "To confirm that the original defect is fixed",
      "To measure the speed of the system under load",
      "To detect defects that a change introduced or uncovered in unchanged areas",
      "To check that the code follows the coding standard",
    ],
    answer: 2,
    explanation:
      "Regression testing detects whether defects have been introduced or uncovered in unchanged areas of the software. Checking that the original defect is fixed is confirmation testing, which is a different thing.",
    source: GLOSSARY + "regression-testing",
  },
  {
    kind: "mcq",
    id: "mcq-test-007",
    question: "Which one is a typical exit criterion for a test level?",
    options: [
      "All planned tests have been executed",
      "The test data is available",
      "The test environment is ready",
      "The requirements are written",
    ],
    answer: 0,
    explanation:
      "Exit criteria define what must be achieved to declare an activity completed, and 'planned tests have been executed' is a typical example. The other options are things that must exist before the work starts, so they are entry criteria.",
    source: SYLLABUS + "#page=49",
  },
  {
    kind: "mcq",
    id: "mcq-test-008",
    question:
      "A signed-in user opens an admin page and gets a response that means the server understood the request but refuses it. Signing in again changes nothing. Which status code is it?",
    options: ["401", "403", "404", "500"],
    answer: 1,
    explanation:
      "403 Forbidden means that the server understood the request but refused to process it, and authenticating or re-authenticating makes no difference. The 401 code is similar, but it is the 403 code that matches a refusal where a new sign-in does not help.",
    source: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403",
  },
  {
    kind: "mcq",
    id: "mcq-test-009",
    question: "In the test pyramid, which tests are usually the most numerous?",
    options: [
      "Small, fast, isolated tests such as unit tests",
      "End-to-end tests through the user interface",
      "Exploratory testing sessions",
    ],
    answer: 0,
    explanation:
      "The bottom layer of the pyramid holds small, isolated, fast tests that check a small piece of functionality, so usually a lot of them are needed. The top layer holds complex end-to-end tests, and usually just a few of them are needed.",
    source: SYLLABUS + "#page=51",
  },
  {
    kind: "mcq",
    id: "mcq-test-010",
    question: "What is the goal of a smoke test?",
    options: [
      "To prove that the product has no defects",
      "To measure the behavior of the system under a heavy load",
      "To replace the regression test suite",
      "To gain enough confidence that a build is ready for the planned testing",
    ],
    answer: 3,
    explanation:
      "Smoke testing is a test type to gain sufficient confidence that a test object is ready for planned testing. It is a short check of the build, and it is not a proof that no defects remain.",
    source: GLOSSARY + "smoke-testing",
  },
  {
    kind: "mcq",
    id: "mcq-test-011",
    question:
      "A developer fixes a bug. Which defect status tells the tester that the next step is to retest the fix?",
    options: ["Deferred", "Duplicate", "Awaiting confirmation testing", "Rejected"],
    answer: 2,
    explanation:
      "'Awaiting confirmation testing' is one of the example statuses of a defect report. Its name shows the next step: confirmation testing, which confirms that the original defect has been successfully fixed.",
    source: SYLLABUS + "#page=57",
  },
  {
    kind: "mcq",
    id: "mcq-test-012",
    question: "Which statement describes validation?",
    options: [
      "Confirming that a work product fulfills its specification",
      "Running the same tests again after a change",
      "Checking that the source code follows the style guide",
      "Confirming that a work product matches the needs of the stakeholders",
    ],
    answer: 3,
    explanation:
      "Validation is confirmation by examination that a work product matches a stakeholder's needs. The first option describes verification, which checks the work product against its specification.",
    source: GLOSSARY + "validation",
  },
];
