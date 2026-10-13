import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";
const GLOSSARY = "https://glossary.istqb.org/en_US/term/";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "intern-001",
    question: "What is software testing, and why does it matter?",
    template:
      "Testing is ...\nIt helps because ...\nA simple example: ...\nTesting is not the same as debugging, because ...",
    example:
      "I see testing as a set of activities that find defects and judge the quality of a product. It matters because it is a cost-effective way to find defects before a user meets them. For example, in my course project I found that a form accepted an empty email address. A user would have lost an account because of it. I also know that testing and debugging are separate activities.",
    behind:
      "The interviewer checks that you know testing is more than clicking through an app. They want to hear 'find defects' and 'judge quality', a real example, and the difference between testing and debugging.",
    source: SYLLABUS + "#page=16",
  },
  {
    kind: "qa",
    id: "intern-002",
    question: "What is the difference between verification and validation?",
    template:
      "Verification checks that ... matches ...\nValidation checks that ... matches ...\nExample of verification: ...\nExample of validation: ...",
    example:
      "Verification checks whether the system meets the specified requirements. Validation checks whether the system meets the needs of the users and other stakeholders in its operational environment. To remember it, I ask 'did we build it right?' for verification and 'did we build the right thing?' for validation. For a login page, verification is a check that the password rules match the requirement document. Validation is a session with a real user, to see if the login does what they need.",
    behind:
      "The interviewer checks that you do not mix the two words. A good answer links each word to a reference (the specification or the needs of the user) and gives one clear example for each.",
    source: SYLLABUS + "#page=15",
  },
  {
    kind: "qa",
    id: "intern-003",
    question: "What is the difference between severity and priority?",
    template:
      "Severity is the ... of a defect. It shows ...\nPriority is the ... of a task. It shows ...\nExample of high severity and low priority: ...\nExample of low severity and high priority: ...",
    example:
      "Severity is the degree of impact that a defect has on the system. Priority is the level of importance of the task to fix it, so it sets the order of the work. They can differ. A crash in a rarely used admin screen has high severity, but the team can give it a low priority. A spelling mistake in the company name on the home page has low severity, but it can have a high priority, because every visitor sees it.",
    behind:
      "This is a very common question. The interviewer checks that you know severity is about impact and priority is about order of work, and that you can give an example for each mix.",
    source: GLOSSARY + "severity",
  },
  {
    kind: "qa",
    id: "intern-004",
    question: "What is the difference between a test case and a test scenario?",
    template:
      "A test case has ... (list the parts)\nI use the word scenario for ...\nExample scenario: ...\nExample test case for it: ...\nI check with the team what words they use.",
    example:
      "A test case is a set of preconditions, inputs, actions, expected results and postconditions. It is precise, so another tester can run it and get the same result. I use the word scenario for a short description of one situation to test, for example 'a user resets a forgotten password'. One scenario gives me several test cases, such as a valid email address, an unknown email address and an expired link. In my experience teams use these words in slightly different ways, so I ask what the team means.",
    behind:
      "The interviewer checks that you can say what a test case contains and that you can work from a broad idea to precise tests. Honesty about different team habits shows maturity.",
    source: GLOSSARY + "test-case",
  },
  {
    kind: "qa",
    id: "intern-005",
    question: "What is the bug life cycle?",
    template:
      "A bug starts when ... logs it.\nThen the team ... and ... it.\nPossible states: ...\nAfter the fix, the tester ...\nThe bug ends as ...",
    example:
      "The tester logs the bug as a defect report. The team then analyses and classifies it, and decides to fix it or to keep it as it is. Typical statuses are open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed and rejected. After a developer fixes the bug, I do confirmation testing to check that the original defect is gone. If it is not, I re-open the report. If it is fixed, I close it. The exact steps and names differ between teams, so I learn the flow of the team that I join.",
    behind:
      "The interviewer checks that you know a bug has a path from discovery to closure and that you know the tester's part in it: logging, retesting after the fix, and closing or re-opening.",
    source: SYLLABUS + "#page=56",
  },
  {
    kind: "qa",
    id: "intern-006",
    question: "What is the difference between black-box and white-box testing?",
    template:
      "Black-box testing is based on ...\nWhite-box testing is based on ...\nExample of black-box: ...\nExample of white-box: ...\nI would use each when ...",
    example:
      "Black-box techniques work from the specified behavior of the system, without looking at the internal structure. I give an input and I check the output against the requirement. White-box techniques work from the internal structure and the processing, so I need to see the code. As an illustration, for a discount rule I can take the amounts from the requirement document to design black-box tests. To design white-box tests, I read the discount code and choose tests from what I see in it.",
    behind:
      "The interviewer checks the basic split and the ability to give one example of each. They also like to hear that the two ways work together and are not rivals.",
    source: SYLLABUS + "#page=39",
  },
  {
    kind: "qa",
    id: "intern-007",
    question: "What is the difference between smoke testing and sanity testing?",
    template:
      "Smoke testing gives confidence that ...\nI run it when ...\nI use the term sanity testing for ...\nI would check with the team what they mean by it.",
    example:
      "The ISTQB glossary says that smoke testing is a test type to gain sufficient confidence that a test object is ready for planned testing. So after each new build I run a set of the most important checks, for example start the app, log in, and open the main page. If one fails, I send the build back and I do not start the full test run. For sanity testing, my own working meaning is a narrow check of one area after a small change. In my experience people use this term in different ways, so in a new team I ask for their definition before I answer.",
    behind:
      "The interviewer checks that you can explain smoke testing clearly and that you do not pretend the other term has one fixed meaning. Many candidates give memorized definitions. A candidate who asks for the team definition shows good judgment.",
    source: GLOSSARY + "smoke-testing",
  },
  {
    kind: "qa",
    id: "intern-008",
    question: "What does a good bug report contain?",
    template:
      "Title: ...\nWhere and when: (build, environment)\nSteps to reproduce: ...\nExpected result: ...\nActual result: ...\nEvidence: ...\nSeverity and priority: ...",
    example:
      "A good report lets a developer fix the bug without asking me questions. It has a short title that summarizes the problem. It names the test object and the environment, for example the build number and the browser. It has the steps that show the failure, the expected result, and the actual result. I add proof, such as a screenshot, a recording or a log. I also give the severity, which is the impact, and I suggest the priority to fix. I check that I can repeat the bug before I send the report.",
    behind:
      "The interviewer reads this as a test of your daily work. They check that your report is complete, short, and repeatable. They listen for steps, expected versus actual, evidence and the environment.",
    source: SYLLABUS + "#page=57",
  },
];
