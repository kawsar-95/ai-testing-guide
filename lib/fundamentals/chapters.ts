/**
 * The one ordered list of Fundamentals chapters. Each chapter is served at
 * /fundamentals/<slug>/ and has its text in content/fundamentals/<slug>.mdx.
 * The title of a topic is also the text of its `##` heading in that file.
 */
import GithubSlugger from "github-slugger";

export const FUNDAMENTALS_HOME = "/fundamentals/";
export const FUNDAMENTALS_STORAGE_KEY = "fundamentals-progress";

export type FundamentalsChapterSlug =
  | "basics"
  | "defects-principles"
  | "lifecycles"
  | "test-types"
  | "levels"
  | "black-box"
  | "white-box"
  | "experience-based"
  | "planning"
  | "test-cases-bugs"
  | "interview";

export type FundamentalsTopic = { id: string; title: string; anchor: string };

export type FundamentalsChapter = {
  slug: FundamentalsChapterSlug;
  title: string;
  description: string;
  number: number;
  href: string;
  /** False only for the interview chapter, which has one text and no version switch. */
  hasVersions: boolean;
  topics: readonly FundamentalsTopic[];
};

type ChapterEntry = {
  slug: FundamentalsChapterSlug;
  title: string;
  description: string;
  topics: readonly string[];
};

const SOURCE: readonly ChapterEntry[] = [
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

export const CHAPTERS: readonly FundamentalsChapter[] = SOURCE.map((chapter, index) => {
  // One slugger for each chapter, as rehype-slug does for each page. The `#`
  // heading of the page takes its slug first, so a topic with the title of the
  // chapter would get the suffix "-1".
  const slugger = new GithubSlugger();
  slugger.slug(chapter.title);
  return {
    slug: chapter.slug,
    title: chapter.title,
    description: chapter.description,
    number: index + 1,
    href: `/fundamentals/${chapter.slug}/`,
    hasVersions: chapter.slug !== "interview",
    topics: chapter.topics.map((title, i) => ({
      id: `${chapter.slug}-${String(i + 1).padStart(3, "0")}`,
      title,
      anchor: slugger.slug(title),
    })),
  };
});

export const FUNDAMENTALS_ROUTES: readonly string[] = [
  FUNDAMENTALS_HOME,
  ...CHAPTERS.map((chapter) => chapter.href),
];

export const ALL_FUNDAMENTALS_TOPIC_IDS: readonly string[] = CHAPTERS.flatMap((chapter) =>
  chapter.topics.map((topic) => topic.id),
);

export function getChapter(slug: string): FundamentalsChapter | undefined {
  return CHAPTERS.find((chapter) => chapter.slug === slug);
}
