import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";
const GLOSSARY = "https://glossary.istqb.org/en_US/term/";
const PLAYWRIGHT_RETRIES = "https://playwright.dev/docs/test-retries";
const PACT = "https://docs.pact.io/";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "mid-level-001",
    question: "What is risk-based testing, and how do you use it?",
    template:
      "A risk is ... It has two factors: ... and ...\nThe risk level comes from ...\nHow I find and rate the risks: ...\nHow the risk level changes my testing: ...\nExample: ...",
    example:
      "A risk is a possible event or situation that can cause harm. I describe it with two factors: the likelihood that it happens and the impact if it does. Together they give the risk level. The higher the risk level, the more important it is to treat the risk. Risk-based testing means that I select, prioritize and manage test activities from the risk analysis. I identify the risks with the team, for example in a workshop or by brainstorming. Then I rate each risk, either with a risk matrix or by multiplying likelihood by impact. I use the result to decide the test scope, the test levels and types, how deep to test, and what to run first. For example, in an online shop I rate a wrong price calculation as a high risk, so it gets deep testing early. A rarely used profile page layout gets a lighter check.",
    behind:
      "The interviewer checks that you can define risk with its two factors and that you turn the rating into real test decisions: scope, depth and order. The shop example shows that you can rate a risk and act on it.",
    source: SYLLABUS + "#page=52",
  },
  {
    kind: "qa",
    id: "mid-level-002",
    question: "What is the test pyramid, and how do you use it?",
    template:
      "The test pyramid is a model that ...\nThe bottom layer: ...\nThe top layer: ...\nThe layers I use: ...\nExample: ...\nWhat I do when the shape is wrong: ...",
    example:
      "The test pyramid is a model that shows that tests differ in how much each one covers. In the higher layers, each test covers more, is less isolated and runs more slowly. The bottom layer holds small, isolated, fast tests of small pieces of functionality, so I expect a lot of them. The top layer holds complex end-to-end tests that check large pieces of functionality, so I expect only a few. The number and the names of the layers can differ. The first model used three layers: unit tests, service tests and UI tests. In my work I use component tests, API tests and a small set of end-to-end tests. For an online shop, I cover the price rules with many fast component tests, the order API with fewer API tests, and only the main buying journey with end-to-end tests. If I see more end-to-end tests than component tests, the feedback of the suite is probably slow, so I ask if a lower layer can cover each check.",
    behind:
      "The interviewer checks that you know why the shape is a pyramid: more fast, isolated tests at the bottom and few slow, broad tests at the top. They also want to hear that layer names differ and that you use the model to decide where a check belongs.",
    source: SYLLABUS + "#page=51",
  },
  {
    kind: "qa",
    id: "mid-level-003",
    question: "What causes flaky tests, and how do you fix them?",
    template:
      "A flaky test is ...\nCauses I have seen: ...\nHow I find the cause: ...\nHow I fix each cause: ...\nWhat I think about retries: ...\nHow I keep the suite healthy: ...",
    example:
      "A flaky test fails intermittently: it fails on some runs and passes on others. Playwright uses the same idea, because it marks a test as flaky when it failed on the first run and passed when retried. In my experience the causes fall into a few groups. The first is timing, where the test acts before the page is ready. The others are shared or changing test data, tests that depend on the order of other tests, an unstable environment, and external services that I do not control. To find the cause, I run the test alone and many times, and I read the logs and the failure screenshots. For timing, I wait for a condition and not for a fixed time. Playwright does this for actions: it auto-waits until checks such as visible, stable and enabled pass, and its auto-retrying assertions wait until the condition is met. For data, I make each test create its own data. For the environment and for external services, I use a stable test environment or a test double. In my view, retries can hide a flaky test, so I use them to keep the pipeline running but I still track and fix each flaky test. If I cannot fix one soon, I move it out of the main run and give it an owner and a ticket.",
    behind:
      "The interviewer checks that you look for a root cause and do not just add retries or sleeps. A strong answer lists real causes, names a fix for each cause, and shows how you keep flaky tests from piling up.",
    source: PLAYWRIGHT_RETRIES,
  },
  {
    kind: "qa",
    id: "mid-level-004",
    question: "What is the role of tests in a CI/CD pipeline?",
    template:
      "CI means ...\nWhat tests give the pipeline: ...\nMy test stages: ...\nWhat I keep out of the commit stage: ...\nThe costs and risks: ...\nWhy manual testing still matters: ...",
    example:
      "With continuous integration, a tool merges, integrates and tests each change automatically, as soon as a developer commits it. In a pipeline, tests give fast feedback on the code quality and show if a change harmed existing behavior. The syllabus says that component tests should be automated and included in the CI process, and I follow that. In my pipelines, fast component tests and static analysis run on each commit, then API tests run, and a few end-to-end and smoke tests run before a release. I keep slow or unstable checks out of the commit stage and run them on a schedule. Automation in the pipeline reduces the need for repetitive manual testing, and it lowers the risk of regression. It has costs. Someone must design and build the pipeline. The team must set up and maintain the CI/CD tools. Test automation takes more effort, and it can be hard to build and keep working. Manual testing is still needed, especially from the point of view of the user, so I keep time for exploratory testing.",
    behind:
      "The interviewer checks that you see tests as the safety net of the pipeline and that you know the cost side too. They listen for staged tests, fast feedback, and a place for manual testing.",
    source: SYLLABUS + "#page=27",
  },
  {
    kind: "qa",
    id: "mid-level-005",
    question: "What is shift-left testing, and how do you apply it?",
    template:
      "Shift left means ...\nThe practices I use: ...\nWhat it costs and what it saves: ...\nWhat it does not mean: ...\nHow I get buy-in: ...",
    example:
      "Shift left means that I do testing and quality assurance as early as possible in the software lifecycle. I do not wait for the code or for the integration of components. These are the practices I use. I review the specification as a tester, to find ambiguities, gaps and inconsistencies. I write test cases before the code is written. I use CI, so that component tests run when code is submitted. I run static analysis early. I start non-functional testing at the component level where possible. Shift left can cost extra training, effort or money at the start, and it is expected to save effort and cost later. It does not mean that I neglect testing later in the lifecycle. Stakeholders must agree with the idea, so I show them a real defect that a specification review found early.",
    behind:
      "The interviewer checks that you can give concrete practices and not only the slogan. A good answer also says that shift left has an up-front cost, that later testing still matters, and that people must agree with it.",
    source: SYLLABUS + "#page=27",
  },
  {
    kind: "qa",
    id: "mid-level-006",
    question: "How do you manage test data?",
    template:
      "Test data is ...\nTest data management means ...\nWhen I plan the data: ...\nWhere the data comes from: ...\nHow I keep it safe and legal: ...\nHow I keep tests independent: ...",
    example:
      "Test data is the data needed to run a test. Test data management means that the team supplies the data that the tests need, and that it also follows the laws and standards that apply to that data. I plan the data early. In test design I note the test data that each test needs, and in test implementation I create or acquire it. I also write the test data requirements into the test plan. My own rules are these. I prefer data that each test creates for itself, through the API or with a seed script, so that tests do not depend on each other. I keep a small set of fixed, known data for checks that need stable results, and I reset it before each run. For data with personal information, I do not copy production data into a test environment unless the rules allow it and the data is masked.",
    behind:
      "The interviewer checks that you treat test data as a planned part of testing and not as an afterthought. They listen for independence between tests, a source of data you can repeat, and care for personal data.",
    source: GLOSSARY + "test-data-management",
  },
  {
    kind: "qa",
    id: "mid-level-007",
    question: "What is contract testing, and when do you use it?",
    template:
      "A contract is ...\nConsumer and provider: ...\nHow a consumer-driven contract is made: ...\nWhat it tests, and what it leaves free: ...\nHow it differs from a schema: ...\nWhen I use it: ...",
    example:
      "Contract testing is a way to test the link between two applications. Each application is tested on its own against a written contract that says which messages the two sides expect. The two sides are the consumer, for example a web front end that needs data, and the provider, for example an API that supplies the data. In consumer-driven contract testing, as the Pact tool does it, the contract is created while the automated consumer tests run. Each interaction in the contract holds an expected request and a minimal expected response, which is only the part that the consumer uses. Then the provider is checked against this contract. Because only what the consumer uses is tested, the provider can change other behavior without breaking the tests. A schema describes all possible states of a resource, but a Pact contract is made of concrete request and response examples. I use contract testing for the integrations between services that different teams own, and I keep a few end-to-end tests for the main flows.",
    behind:
      "The interviewer checks that you know the consumer and provider roles, what a contract holds, and how it differs from a schema. They also listen for the limit of the idea: the contract covers only what the consumer uses.",
    source: PACT,
  },
  {
    kind: "qa",
    id: "mid-level-008",
    question: "What is defect leakage, and which other metrics do you track?",
    template:
      "Defect leakage means ...\nHow I calculate it: ...\nA close ISTQB metric: ...\nOther defect metrics: ...\nOther groups of metrics: ...\nHow I read the numbers: ...",
    example:
      "Defect leakage is not an ISTQB term, so I give my own working definition: the share of defects that testing missed and that users or support found after release. I calculate it as the defects found after release, divided by all defects found for the same release. The ISTQB glossary has a close metric, the defect detection percentage. It is the number of defects found by a test level, divided by the number found by that level and by any other means afterwards. Another defect metric is defect density, which is the number of defects per unit size of a work product. The syllabus groups test metrics into project progress, test progress, product quality, defect, risk, coverage and cost metrics. I do not read one number alone. A leakage number helps only if I compare it over several releases and ask why each leaked defect escaped.",
    behind:
      "The interviewer checks that you can define a metric clearly, that you are honest when a term is not standard, and that you know the wider set of test metrics. The last sentence shows that you use the numbers to learn and not only to report.",
    source: SYLLABUS + "#page=54",
  },
];
