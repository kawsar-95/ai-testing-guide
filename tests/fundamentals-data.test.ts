import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ALL_FUNDAMENTALS_TOPIC_IDS,
  CHAPTERS,
  FUNDAMENTALS_HOME,
  FUNDAMENTALS_ROUTES,
  FUNDAMENTALS_STORAGE_KEY,
  getChapter,
} from "../lib/fundamentals/chapters.ts";

const SLUGS = [
  "basics",
  "defects-principles",
  "lifecycles",
  "test-types",
  "levels",
  "black-box",
  "white-box",
  "experience-based",
  "planning",
  "test-cases-bugs",
  "interview",
];

test("there are 11 chapters in the order of the table, with unique slugs", () => {
  assert.deepEqual(
    CHAPTERS.map((c) => c.slug),
    SLUGS,
  );
  assert.equal(new Set(CHAPTERS.map((c) => c.slug)).size, 11);
  assert.deepEqual(
    CHAPTERS.map((c) => c.number),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  );
  assert.equal(FUNDAMENTALS_HOME, "/fundamentals/");
  assert.equal(FUNDAMENTALS_STORAGE_KEY, "fundamentals-progress");
});

test("the chapter topic counts are 7, 8, 6, 9, 7, 6, 7, 5, 5, 7, 50 and the total is 117", () => {
  assert.deepEqual(
    CHAPTERS.map((c) => c.topics.length),
    [7, 8, 6, 9, 7, 6, 7, 5, 5, 7, 50],
  );
  assert.equal(ALL_FUNDAMENTALS_TOPIC_IDS.length, 117);
});

test("topic ids are '<chapter-slug>-NNN' from 001, unique across all chapters", () => {
  for (const chapter of CHAPTERS) {
    chapter.topics.forEach((topic, i) => {
      assert.equal(topic.id, `${chapter.slug}-${String(i + 1).padStart(3, "0")}`);
    });
  }
  assert.equal(new Set(ALL_FUNDAMENTALS_TOPIC_IDS).size, 117);
  assert.deepEqual(
    ALL_FUNDAMENTALS_TOPIC_IDS,
    CHAPTERS.flatMap((c) => c.topics.map((t) => t.id)),
  );
});

test("anchors are unique and not empty inside a chapter", () => {
  for (const chapter of CHAPTERS) {
    const anchors = chapter.topics.map((t) => t.anchor);
    assert.equal(new Set(anchors).size, anchors.length, chapter.slug);
    for (const anchor of anchors) assert.ok(anchor.length > 0);
  }
});

test("only the interview chapter has no versions", () => {
  for (const chapter of CHAPTERS) {
    assert.equal(chapter.hasVersions, chapter.slug !== "interview", chapter.slug);
  }
});

test("FUNDAMENTALS_ROUTES is '/fundamentals/' then the 11 chapter hrefs, each ending with '/'", () => {
  assert.equal(FUNDAMENTALS_ROUTES.length, 12);
  assert.equal(FUNDAMENTALS_ROUTES[0], "/fundamentals/");
  assert.deepEqual(FUNDAMENTALS_ROUTES.slice(1), SLUGS.map((s) => `/fundamentals/${s}/`));
  for (const route of FUNDAMENTALS_ROUTES) assert.ok(route.endsWith("/"));
});

test("getChapter finds a slug and returns undefined for an unknown one", () => {
  assert.equal(getChapter("planning")?.title, "Planning and Estimation");
  assert.equal(getChapter("planning")?.href, "/fundamentals/planning/");
  assert.equal(getChapter("nope"), undefined);
});

test("anchor of 'Error, Defect, Bug and Failure' is 'error-defect-bug-and-failure' and of 'Software Testing Life Cycle (STLC)' is 'software-testing-life-cycle-stlc'", () => {
  const error = getChapter("defects-principles")!.topics.find((t) => t.title === "Error, Defect, Bug and Failure");
  assert.equal(error?.anchor, "error-defect-bug-and-failure");
  const stlc = getChapter("lifecycles")!.topics.find((t) => t.title === "Software Testing Life Cycle (STLC)");
  assert.equal(stlc?.anchor, "software-testing-life-cycle-stlc");
});

// The literals below are copied from the "Chapter and topic table" of the plan.
// The topics of the interview chapter are the 50 questions of the owner notes.
// They fail if a title, a description, or the order of the topics changes.
const TABLE: readonly { slug: string; title: string; description: string; topics: readonly string[] }[] = [
  {
    slug: "basics",
    title: "Testing Basics",
    description: "What testing is, why it matters, and the skills a tester needs.",
    topics: [
      "What Is Software Testing",
      "Why Testing Is Necessary",
      "Quality and Quality Assurance",
      "Testing Objectives",
      "Software Testing Misconceptions",
      "QA Generic Skills",
      "QA vs QC",
    ],
  },
  {
    slug: "defects-principles",
    title: "Defects and the 7 Principles",
    description: "Errors, defects, bugs, and failures, and the seven principles of testing.",
    topics: [
      "Error, Defect, Bug and Failure",
      "Testing Shows the Presence of Defects",
      "Exhaustive Testing Is Impossible",
      "Early Testing Saves Time and Money",
      "Defects Cluster Together",
      "Tests Wear Out",
      "Testing Is Context Dependent",
      "Absence-of-Defects Fallacy",
    ],
  },
  {
    slug: "lifecycles",
    title: "SDLC, STLC and Agile",
    description: "How testing fits into the software life cycle and into Agile teams.",
    topics: [
      "Software Testing Life Cycle (STLC)",
      "Testing Activities",
      "Software Development Life Cycle (SDLC)",
      "SDLC Models",
      "Agile Methodology",
      "ATDD, TDD and BDD",
    ],
  },
  {
    slug: "test-types",
    title: "Test Types",
    description: "Static and dynamic testing, and the common functional and non-functional test types.",
    topics: [
      "Testing Classification",
      "Static Testing",
      "Dynamic Testing",
      "Smoke, Sanity and Feature Testing",
      "Regression Testing",
      "Exploratory and Ad-hoc Testing",
      "Monkey and Gorilla Testing",
      "Alpha, Beta and A/B Testing",
      "Non-Functional Testing",
    ],
  },
  {
    slug: "levels",
    title: "Test Levels, Pyramid and Quadrants",
    description: "The test levels, and two models that help you balance them.",
    topics: [
      "Test Levels",
      "Component Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
      "The Test Pyramid",
      "The Test Quadrants",
    ],
  },
  {
    slug: "black-box",
    title: "Black-Box Techniques",
    description: "Design tests from the specification: partitions, boundaries, decision tables, and states.",
    topics: [
      "Test Techniques Overview",
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Equivalence Partitioning in a Complex Case",
      "Decision Table Testing",
      "State Transition Testing",
    ],
  },
  {
    slug: "white-box",
    title: "White-Box Techniques",
    description: "Design tests from the code: statement, branch, and condition coverage.",
    topics: [
      "Why White-Box Testing Matters",
      "Statement Coverage",
      "Branch Coverage",
      "Condition Testing",
      "Unit Testing",
      "Integration Testing in Code",
      "White-Box Review Checklist",
    ],
  },
  {
    slug: "experience-based",
    title: "Experience-Based Techniques",
    description: "Use your experience: error guessing, exploratory testing, and checklists.",
    topics: [
      "Error Guessing",
      "Exploratory Testing",
      "Checklist-Based Testing",
      "Black-Box Checklist",
      "White-Box Checklist",
    ],
  },
  {
    slug: "planning",
    title: "Planning and Estimation",
    description: "Plan the testing, set the strategy, estimate the effort, and write acceptance criteria.",
    topics: [
      "Test Plan",
      "Test Strategy",
      "Test Plan vs Test Strategy",
      "Test Effort Estimation",
      "Acceptance Criteria",
    ],
  },
  {
    slug: "test-cases-bugs",
    title: "Test Cases, Bugs and Completion",
    description: "Write test cases and bug reports, triage bugs, and close the testing.",
    topics: [
      "Test Case",
      "Bug Report",
      "Bug Life Cycle",
      "Bug Triage",
      "Entry and Exit Criteria",
      "Test Completion",
      "Requirement Traceability Matrix (RTM)",
    ],
  },
  {
    slug: "interview",
    title: "Interview Questions",
    description: "50 common manual testing interview questions with short answers.",
    topics: [
      "What is software testing, and why is it important?",
      "What is the main objective of software testing?",
      "What is the difference between verification and validation?",
      "What is the difference between QA and QC?",
      "What is the difference between static testing and dynamic testing?",
      "What is the difference between functional and non-functional testing?",
      "What is the difference between smoke testing and sanity testing?",
      "What is regression testing, and when should we perform it?",
      "What is retesting, and how is it different from regression testing?",
      "What is exploratory testing? Give an example.",
      "What is ad-hoc testing? How is it different from exploratory testing?",
      "What is acceptance testing? Who performs it?",
      "What is UAT? Why is it important?",
      "What is alpha testing and beta testing?",
      "What is compatibility testing? Give examples.",
      "What is usability testing? Give examples.",
      "What is a test plan? What does it usually contain?",
      "What is a test strategy? How is it different from a test plan?",
      "What is test estimation? How do you estimate testing effort?",
      "What are entry criteria and exit criteria in testing?",
      "What is a test scenario? Give an example.",
      "What is a test case? What are the key fields of a test case?",
      "What is the difference between test scenario and test case?",
      "What is test data? Why is it important?",
      "What is Requirement Traceability Matrix, RTM?",
      "How do you write test cases from requirements?",
      "Write test cases for a login page.",
      "Write test cases for a registration page.",
      "Write test cases for a password reset feature.",
      "Write test cases for a search feature.",
      "Write test cases for an eCommerce cart page.",
      "Write test cases for a checkout/payment flow, excluding payment gateway technical details.",
      "Write test cases for a file upload feature.",
      "Write test cases for a filter and sorting feature.",
      "Write test cases for pagination.",
      "Write test cases for a profile update page.",
      "What is a bug or defect?",
      "What are the important fields in a bug report?",
      "How do you write a good bug title?",
      "What is bug severity? Give examples.",
      "What is bug priority? Give examples.",
      "What is the difference between severity and priority?",
      "Give examples of high severity and low priority bugs.",
      "Give examples of low severity and high priority bugs.",
      "Explain the bug life cycle.",
      "What will you do if a developer says, \"This is not a bug\"?",
      "What will you do if requirements are unclear or incomplete?",
      "How do you decide what to test first when time is limited?",
      "If a feature works on your machine but fails on the client's machine, how will you investigate?",
      "A user reports that they cannot log in, but you cannot reproduce the issue. What will you do?",
    ],
  },
];

test("the chapter titles, descriptions, and topic titles match the table in the plan", () => {
  assert.deepEqual(CHAPTERS.map((c) => c.slug), TABLE.map((t) => t.slug));
  assert.deepEqual(CHAPTERS.map((c) => c.title), TABLE.map((t) => t.title));
  assert.deepEqual(CHAPTERS.map((c) => c.description), TABLE.map((t) => t.description));
  assert.deepEqual(CHAPTERS.map((c) => c.topics.map((t) => t.title)), TABLE.map((t) => t.topics));
  assert.equal(TABLE.flatMap((t) => t.topics).length, 117);
});
