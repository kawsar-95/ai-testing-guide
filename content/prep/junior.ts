import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";
const RFC9110_STATUS = "https://www.rfc-editor.org/rfc/rfc9110.html#section-15";
const PG_GROUP = "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "junior-001",
    question: "What are equivalence partitioning and boundary value analysis?",
    template:
      "Equivalence partitioning means ...\nBoundary value analysis means ...\nExample: a field that accepts ...\nMy partitions: ...\nMy boundary tests (2-value and 3-value): ...",
    example:
      "Equivalence partitioning splits the input data into groups, called partitions. I expect the system to treat every value in one partition in the same way, so one test value from each partition is enough. Boundary value analysis adds tests at the edges of ordered partitions. Developers are more likely to make mistakes at the edges. Take an age field that accepts whole numbers from 18 to 60. I make three partitions: 17 or less (the field should reject these), 18 to 60 (the field should accept these), and 61 or more (the field should reject these). The minimum and the maximum of a partition are its boundary values, so the boundary values are 17, 18, 60 and 61. With the 2-value method, I test each boundary value and its closest neighbor in the next partition. That gives the four values 17, 18, 60 and 61. The 3-value method tests each boundary value and both of its neighbors. That gives eight values: 16, 17, 18, 19, 59, 60, 61 and 62.",
    behind:
      "The interviewer checks that you can say why one value per partition is enough and why the edges get extra tests. The worked example shows that you can build the partitions and the boundary tests yourself, with both the 2-value and the 3-value method.",
    source: SYLLABUS + "#page=40",
  },
  {
    kind: "qa",
    id: "junior-002",
    question: "What is the difference between regression testing and retesting?",
    template:
      "Retesting (confirmation testing) checks that ...\nRegression testing checks that ...\nExample with one bug fix: ...\nWhat I automate, and why: ...\nHow I choose the regression tests: ...",
    example:
      "In the ISTQB glossary, retesting is a synonym of confirmation testing. It confirms that an original defect has been fixed. I do it after a developer fixes a bug, by running the tests that failed because of that bug. Regression testing is a different check. It confirms that a change, including a fix that I already confirmed, caused no new problems in the same component or in other components. For example, a developer fixes a wrong total in the shopping cart. First I rerun the failing cart test (retesting). Then I run the checkout and discount tests to see that nothing else broke (regression testing). Regression suites run many times and usually grow with each release, so they are a strong candidate for automation. Where the team has CI, I include the automated regression tests in it. To choose the tests, I first ask which parts of the software the change can affect.",
    behind:
      "The interviewer checks that you do not mix the two words. They look for the ISTQB word 'confirmation testing', a clear example with one fix, and a view on automating regression suites and on choosing the tests.",
    source: SYLLABUS + "#page=30",
  },
  {
    kind: "qa",
    id: "junior-003",
    question: "What is the difference between a test plan and a test strategy?",
    template:
      "A test strategy describes ...\nA test plan describes ...\nHow the two are linked: ...\nWhat a test plan contains: ...\nMy example: ...",
    example:
      "The ISTQB glossary describes a test strategy as the way to carry out testing so that it reaches its objectives in a given situation. A test plan is the document for one test project. It says what the testing must achieve, which resources we use and how we work. The two are linked. The plan should follow the existing strategy, or it should explain why it deviates. A typical plan holds the context of testing, the assumptions and constraints, the stakeholders, how we communicate, the risk register, the test approach, and the budget and schedule. For example, imagine that the strategy of my company says that every API gets automated tests. In the plan for a new billing project, I then write which APIs we test, who writes the tests, when, and which risks I see.",
    behind:
      "The interviewer checks that you can name the difference in one sentence each and that you know how the two connect. The list of plan contents and the billing example show that you have seen real planning, not only definitions.",
    source: SYLLABUS + "#page=48",
  },
  {
    kind: "qa",
    id: "junior-004",
    question: "What is the difference between the SDLC and the STLC?",
    template:
      "An SDLC model is ...\nExamples of SDLC models: ...\nI use the word STLC for ...\nThe test activities are: ...\nHow the two connect: ...\nI ask the team what they mean by STLC.",
    example:
      "An SDLC model is a high-level picture of the software development process. It shows how the development phases and activities relate to each other, logically and in time. Examples are the waterfall model, the V-model and the Unified Process. The CTFL syllabus does not use the term STLC, so I give my own working meaning: the test process. The ISTQB syllabus lists these groups of activities: test planning, test monitoring and test control, test analysis, test design, test implementation, test execution and test completion. They often run iteratively or in parallel, not in one straight line. The two connect, because every development activity has a matching test activity. In my experience people use the word STLC in different ways, so in a new team I ask what they mean.",
    behind:
      "The interviewer checks that you know the SDLC models and the test activities, and that you can link them. A candidate who says that the syllabus does not use the term STLC and who asks for the team meaning shows good judgment.",
    source: SYLLABUS + "#page=25",
  },
  {
    kind: "qa",
    id: "junior-005",
    question: "What is exploratory testing, and when do you use it?",
    template:
      "Exploratory testing means ...\nA session works like this: ...\nI use it when ...\nIt works best when the tester ...\nExample: ...\nI combine it with ...",
    example:
      "In exploratory testing I design, run and judge tests at the same time, while I learn about the product. I use what I learn to look deeper at some areas and to write tests for areas that have none. One way to structure it is session-based testing. I work in a fixed time box with a charter that states the test objectives. After the session I talk with the stakeholders about what I found, and I can note my steps and findings on a session sheet. It is useful when the specifications are few or poor, or when there is little time. It works better if the tester has experience, domain knowledge, and skills such as curiosity and analysis. For example, with a new checkout page and only a rough description, I set a charter to explore payment with wrong card data. I also use it next to formal techniques. Inside a session I can still use equivalence partitioning.",
    behind:
      "The interviewer checks that you see exploratory testing as a planned activity with a charter and a time box, not as random clicking. They also listen for when it fits and for how it works with other techniques.",
    source: SYLLABUS + "#page=44",
  },
  {
    kind: "qa",
    id: "junior-006",
    question: "What is API testing, and what do the common HTTP status codes mean?",
    template:
      "API testing means ...\nWhat I check in a response: ...\nThe status code classes: 2xx ..., 4xx ..., 5xx ...\nThe codes I check most: ...\nExample test: ...",
    example:
      "API testing means that I send requests to the application through its application programming interface and check what comes back. In each response I check the status code, the headers and the body. The first digit of a status code is its class. A 2xx code means that the request was received, understood and accepted. A 4xx code means that the client seems to have made an error. A 5xx code means that the server is aware that it erred or cannot do the request. These are the codes I check most. 200 OK means that the request succeeded. 201 Created means that new resources were created. 400 Bad Request means that the server will not process the request because of a client error, such as bad syntax. 401 Unauthorized means that the request has no valid authentication credentials. 403 Forbidden means that the server understood the request but refuses it. 404 Not Found means that the server found no current representation of the resource. 500 Internal Server Error means that the server met an unexpected condition. For example, I send a POST to create a user with a valid body, and I expect 201 and the new user in the body. Then I send the same call without an email address and I expect a 4xx code. The API contract decides if it is 400 or 422, which means that the server understood the content but could not process it.",
    behind:
      "The interviewer checks that you can say what an API test is and that you know the status code classes and the main codes. The example shows that you test both the good case and the error case, and that you read the API contract.",
    source: RFC9110_STATUS,
  },
  {
    kind: "qa",
    id: "junior-007",
    question: "How do you write a SQL query that finds duplicate rows?",
    template:
      "First I decide which columns make a row a duplicate: ...\nQuery: SELECT ... FROM ... GROUP BY ... HAVING ...\nWhat each part does: ...\nHow I see the full rows: ...\nWhat I do after I find them: ...",
    example:
      "First I decide which columns make a row a duplicate. For a users table, I say that two rows are duplicates when the email is the same. Then I run this query to count them:\nSELECT email, COUNT(*) AS copies\nFROM users\nGROUP BY email\nHAVING COUNT(*) > 1;\nGROUP BY puts the rows that have the same email into one group. HAVING removes the groups that I do not want, so only the groups with more than one row stay. A WHERE clause cannot do this, because it filters the rows before the grouping. The COUNT(*) in HAVING works because HAVING can use an aggregate function. This query shows each repeated email and its count, but not the full rows. To see the full rows, I use a subquery with IN:\nSELECT *\nFROM users\nWHERE email IN (SELECT email FROM users GROUP BY email HAVING COUNT(*) > 1);\nAn IN subquery must return exactly one column, so the inner query selects only the email, without the count. The result is every row that has a repeated email. After that, I ask why the duplicates exist, for example a missing unique constraint on the column, because the real fix belongs there. This syntax follows the PostgreSQL manual, and I check the manual of my own database.",
    behind:
      "The interviewer checks that you know GROUP BY with HAVING and why HAVING is used and not WHERE. They also listen for the first step, to define what a duplicate is, and for the next step, to find the cause.",
    source: PG_GROUP,
  },
  {
    kind: "qa",
    id: "junior-008",
    question: "How do you decide when to stop testing?",
    template:
      "Testing cannot ... so ...\nThe exit criteria I agree on: ...\nExamples of criteria: (measures) and (yes/no items)\nIf time or budget ends first: ...\nWhat I tell the stakeholders: ...",
    example:
      "Testing can show that defects are present, but it cannot prove that there are none. Testing everything is not possible either. So I do not stop when I feel finished. I stop when the exit criteria are met, and I agree on them with the team before testing starts. Exit criteria are the conditions that say that a task is finished. Some are measures, such as the level of coverage, the number of unresolved defects or the number of failed test cases. Others are yes/no items, such as 'the planned tests have been executed' or 'all defects found are reported'. Sometimes time or budget runs out first. Then it can be acceptable to stop, if the stakeholders know the risk of going live with less testing and accept it. In that case I tell them what is not tested and which risks are open.",
    behind:
      "The interviewer checks that you do not answer 'when all tests pass' or 'when I find no more bugs'. They want to hear that testing cannot prove the absence of defects, that exit criteria are agreed in advance, and that stakeholders decide on the remaining risk.",
    source: SYLLABUS + "#page=49",
  },
];
