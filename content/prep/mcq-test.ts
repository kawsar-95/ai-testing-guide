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
      "Tests wear out. If the same tests repeat many times, they become increasingly ineffective in detecting new defects, so the team may need to change the existing tests and test data, and write new tests.",
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
      "A field accepts whole numbers from 18 to 60. Assume the input is always a whole number. With equivalence partitioning, how many test cases do you need at least to cover every partition, valid and invalid?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation:
      "There are 3 partitions: below 18 (invalid), 18 to 60 (valid), and above 60 (invalid). Full coverage means each partition, including the invalid ones, is exercised at least once, and one test for each partition is enough.",
    source: SYLLABUS + "#page=40",
  },
  {
    kind: "mcq",
    id: "mcq-test-004",
    question:
      "A field accepts whole numbers from 18 to 60. Which set holds exactly the coverage items of 2-value boundary value analysis, and no other values?",
    options: [
      "17, 18, 60, 61",
      "18 and 60",
      "17, 18, 19, 59, 60, 61",
      "0, 18, 60, 100",
    ],
    answer: 0,
    explanation:
      "In 2-value BVA each boundary value has 2 coverage items: the boundary value and its closest neighbor in the adjacent partition. The boundaries 18 and 60 give the pairs 17 and 18, and 60 and 61. The set with 19 and 59 adds inner neighbors that 3-value BVA uses and 2-value BVA does not need. The set with only 18 and 60 misses the neighbors, and 0 and 100 are not next to the boundaries.",
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
      "Severity says how much impact a defect has on the development, the testing or the operation of a component or system. Priority is the importance that the team gives to a task, so it is a different thing.",
    source: GLOSSARY + "severity",
  },
  {
    kind: "mcq",
    id: "mcq-test-006",
    question: "What is the purpose of regression testing?",
    options: [
      "To confirm that the defect found earlier has now been fixed",
      "To measure how fast the system answers under a heavy load",
      "To find defects that a change caused in unchanged areas",
      "To check that the source code follows the coding standard",
    ],
    answer: 2,
    explanation:
      "Regression testing looks for defects that a change has introduced or uncovered in parts of the software that were not changed. Checking that the original defect is fixed is confirmation testing, which is a different thing.",
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
      "Exit criteria define what must be achieved to declare an activity completed, and 'planned tests have been executed' is a typical example. The other options are typical conditions to have before the work starts, so they are entry criteria.",
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
      "403 Forbidden means that the server understood the request but refused to process it, and authenticating or re-authenticating makes no difference. The failure is tied to application logic, such as insufficient permissions to a resource or action.",
    source: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403",
  },
  {
    kind: "mcq",
    id: "mcq-test-009",
    question: "In the test pyramid, which tests are usually the most numerous?",
    options: [
      "Small, isolated unit tests",
      "End-to-end tests that drive the user interface",
      "Exploratory sessions with the whole team",
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
      "To prove that the product has no defects left in it",
      "To measure how the system behaves under a heavy load",
      "To replace the whole regression test suite for a release",
      "To check that a build is ready for planned testing",
    ],
    answer: 3,
    explanation:
      "A smoke test is a test type that builds enough confidence that the test object is ready for the testing that was planned. The other options describe different goals.",
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
      "Running the same tests again after every change to the code",
      "Checking that the source code follows the style guide",
      "Confirming that the product matches stakeholder needs",
    ],
    answer: 3,
    explanation:
      "Validation checks, by examination, that a work product matches what a stakeholder needs. The first option is the definition of verification, which compares a work product with its specification.",
    source: GLOSSARY + "validation",
  },
];
