# Software Testing Fundamental — the owner's notes

The owner pasted these notes in the session of 2026-10-20. They are the source of the "My notes" version of each chapter. The text is as pasted. Only these changes were made for this file: the `[IMAGE: …]` markers show where an image goes (the file names are in `public/images/fundamentals/`), the embedded base64 images are dropped, and the doubled list under "Testing Objectives" is dropped (it repeated the bullets above it).

---

# What is Testing

**Software Testing** is the process of evaluating a software application to find defects, verify requirements, and ensure it works as expected before release. It involves executing the system (manually or via automation) and checking whether actual behavior matches expected behavior.

You can think of it as: *"checking software quality by validating and breaking it before users do."*

### Why software testing is necessary

- **Finds defects early** → reduces cost of fixing bugs after release
- **Ensures requirements are met** → builds the right product, not just a working one
- **Improves product quality** → stability, performance, usability
- **Prevents business loss** → avoids failures in production (money, reputation, users)
- **Enhances security** → detects vulnerabilities before attackers do
- **Builds user trust** → reliable software increases adoption

> *In short: without testing, software is a "guess"; with testing, it becomes a "reliable product."*

**Quality and Quality Assurance**

- **Quality**: A degree of excellence of a product or a service.
- **Quality assurance (QA)**: is any systematic process of determining whether a product or service meets specified requirements.

### Testing Objectives

**1. Functional Correctness**
Checks whether the software works according to requirements and business rules.
• Valid inputs produce correct outputs
• Logic and calculations are accurate
• Handles edge cases properly

**2. Authorization**
Ensures users can only access permitted features and data.
• Role-based access control works correctly
• Protected APIs cannot be accessed without permission
• Unauthorized actions are blocked

**3. Service Level (Performance & Reliability)**
Measures how well the system performs under real usage.
• Fast response time
• Handles expected load
• Stable under stress
• High availability

**4. Usability**
Evaluates how easy the system is to use for real users.
• Simple and clear UI
• Smooth navigation
• Clear error messages
• User-friendly workflow

### Software Testing Misconceptions

**1. Without knowing programming, anyone can do software testing**
**Fact:** Basic UI manual testing can be done using common sense and domain understanding, but real testing goes far beyond that. Whitebox testing, API testing, client-server validation, data testing, and test automation require strong programming and database knowledge to ensure correct verification of system behavior.

**2. QA is getting replaced by AI**
**Fact:** AI is reducing repetitive manual testing tasks, but testing itself is not disappearing. Manual QA roles are shrinking, while demand for AI-assisted SDET and technical QA engineers is increasing. The focus is shifting toward engineers who can design, automate, and validate quality using AI tools.

**3. Testing is only about finding bugs**
**Fact:** Bug detection is an important objective, but not the only one. The main goal of testing is ensuring overall software quality. This requires technical understanding to validate functional and non-functional aspects such as performance, security, usability, and reliability of production-grade systems.

**4. Automation testing tools are enough, programming is not required**
**Fact:** Automation tools only provide the framework; real value comes from coding ability. Test scripts, framework design, assertions, debugging failures, and maintaining test suites all require solid programming skills.

**5. QA is an easy switch career for fresh graduates**
**Fact:** While entry into QA may seem easier, long-term growth requires continuous technical skill development. Without programming, API knowledge, and system understanding, career progression in QA becomes limited.

# QA Generic Skills

The following skills are particularly relevant for testers:

### 1. Testing Knowledge
Understanding testing concepts, test levels, test types, and test techniques to test software effectively.

### 2. Attention to Detail
Being careful, thorough, curious, and methodical to find defects that others may miss.

### 3. Communication Skills
Explaining issues clearly, listening actively, working with the team, and reporting defects in an understandable way.

### 4. Analytical & Critical Thinking
Analyzing requirements, questioning unclear logic, identifying risks, and thinking creatively to find hidden problems.

### 5. Technical Knowledge
Using tools, APIs, databases, logs, automation, and other technical skills to test more efficiently.

### 6. Domain Knowledge
Understanding the business domain so testers can validate whether the software solves real user needs correctly.

## Simple Summary

A good QA is not just a bug finder. A good QA needs **testing knowledge, sharp observation, communication, analytical thinking, technical skill, and business understanding**.

| **QA** | **QC** |
| --- | --- |
| QA makes sure you are doing the right things. | QC makes sure the results of what you've done are what you expected. |
| QA aims to prevent the defect. So this is a preventive approach. | QC aims to identify and improve the defects. So this is a corrective approach. |
| QA process starts before executing the program. | QC always involves after executing the program. |
| QA is a verification process | QC is a validation process |
| QA means Planning for doing a process. | QC Means Action for executing the planned process. |
| QA is the process to create the deliverables. | QC is the process that validate to deliverables. |
| QA is responsible for full SDLC | QC is responsible for STLC |

# Error, Defect, Bug and Failure

- **Error**: Human beings make errors (mistakes), or misunderstanding requirements, which produce defects (faults). Humans make errors for various reasons, such as time pressure, complexity of work products, processes, infrastructure or interactions, or simply because they are tired or lack adequate training.
- **Defects**: By any types of error, it leads to defect. Defects can be found in documentation, such as a requirements specification or a test script, in source code, or in a supporting artifact such as a build file.
- **Failure**: Failure is the observable outcome of the bug when the software is executed in an operational environment, the system may fail to do what it should do, or do something it shouldn't, causing a failure. If the software can not perform as per business need, then it is considered as failure. In another way, if the end user is not satisfied or found issues in the software, that is the ultimate failure.
- **Bug**: If a defect is caught by executing the test object and accepted by developer, then this is called bug. To prove the developers that it is a bug, needs bug advocacy.

Errors and defects are not the only cause of failures. Failures can also be caused by environmental conditions, such as hardware or low quality elements.

# 7 Testing principal

## 1. Testing shows presence of defects, not their absence
**Meaning:** Testing can find bugs, but it cannot prove the system is 100% bug-free.
**Example:** Even after full QA of a payment system, a rare edge-case transaction failure may still appear in production due to an untested network condition.

## 2. Exhaustive testing is impossible
**Meaning:** You cannot test all inputs, combinations, and scenarios.
**Example:** A login form with multiple browsers, devices, password combinations, and network conditions makes it impossible to test every single possibility.

## 3. Early testing saves cost and time
**Meaning:** Defects found earlier are cheaper and easier to fix.
**Example:** A requirement mistake found during design review costs minutes to fix, but the same bug found after release may require major code rewrite and deployment rollback.

## 4. Defects cluster together (Pareto principle)
**Meaning:** Most bugs come from a small number of modules.
**Example:** In an e-commerce app, 70% of bugs come from payment and checkout modules, while static pages have very few issues.

## 5. Tests wear out (Pesticide paradox)
**Meaning:** Repeating the same tests will stop finding new bugs over time.
**Example:** Running the same regression suite every release may miss new edge cases in a newly added discount feature.

## 6. Testing is context dependent
**Meaning:** Testing approach changes based on the application type and risk.
**Example:** Banking software requires strict security and accuracy testing, while a gaming app focuses more on performance and user experience.

## 7. Absence-of-errors fallacy
**Meaning:** A bug-free system is still useless if it does not meet user needs.
**Example:** A travel app with zero bugs is still a failure if it does not show correct flight prices or lacks essential booking features users expect.

# Software Testing Life Cycle (STLC)

[IMAGE: stlc-phases.png — six boxes in a staircase: Requirement Analysis → Test Planning → Test Case Development → Test Environment Setup → Test Execution → Test Closure]

**STLC** is a structured process that defines the **step-by-step activities involved in software testing** from requirement analysis to test closure.

It ensures testing is **planned, systematic, and measurable**, rather than random execution.

## Phases of STLC

### 1. Requirement Analysis
**What happens:** Understand what needs to be tested from requirements or user stories.
**Example:** For a login system, QA identifies requirements like valid login, invalid login, password rules, etc.

### 2. Test Planning
**What happens:** Define strategy, scope, resources, and timeline.
**Example:** Decide to use Selenium for automation and Postman for API testing, and set regression scope.

### 3. Test Case Design (Test Development)
**What happens:** Write test cases and prepare test data.
**Example:**
- Valid login test case
- Invalid password test case
- SQL test data for user table

### 4. Test Environment Setup
**What happens:** Prepare the system where testing will be executed.
**Example:** QA environment deployed with database, APIs, and frontend connected.

### 5. Test Execution
**What happens:** Run test cases and record results.
**Example:** Execute login test → compare expected vs actual result.

### 6. Defect Reporting & Tracking
**What happens:** Log bugs and track fixes.
**Example:** Report "Login fails for valid user" in Jira and assign to developer.

### 7. Test Closure
**What happens:** Evaluate testing completion and prepare summary report.
**Example:** Final report shows 95% test cases passed, 5% bugs fixed or deferred.

## Simple Summary

STLC =

> *Requirement → Planning → Test Design → Setup → Execution → Bug Reporting → Closure*

# Testing Activities

### 1. Test Planning
Define **objectives, scope, strategy, resources, schedule, and risks**.
Example: Decide to test an e-commerce app using UI + API automation with Playwright + Postman.

### 2. Test Monitoring & Control
Track progress against the plan and take corrective actions.
Example: If API testing is delayed, redistribute effort or adjust timeline.

### 3. Test Analysis (What to test?)
Analyze requirements/test basis and derive **test conditions / acceptance criteria / testable items**, including risks.
Example: From "Login feature", derive conditions like valid login, invalid credentials, locked account, security checks.

### 4. Test Design (How to test?)
Convert test conditions into **test cases, test data, test coverage approach, and test design techniques**.
Example:
- Decide boundary value tests for password length
- Decide equivalence partitioning for input validation
- Design data sets and coverage strategy

### 5. Test Implementation
Prepare execution-ready assets (**testware**).
- Organize test cases into suites
- Create automation scripts/manual procedures
- Set up test environment
Example: Build Playwright framework and configure staging environment.

### 6. Test Execution
Run tests and compare **actual vs expected results**, log defects, and analyze failures.
Example: API returns 500 instead of 200 → defect logged.

### 7. Test Closure
Complete testing cycle and finalize reporting.
- Close defects and testware
- Archive artifacts
- Prepare test summary report
- Collect lessons learned
Example: Release report with pass/fail metrics and known issues.

# Software Development Lifecycle (SDLC)

The Software Development Life Cycle (SDLC) refers to a methodology with clearly defined processes for creating high-quality software.

SDLC Phases are:

### 1. Requirement Gathering & Analysis
Collect and analyze business/user requirements.
**Output:** SRS (Software Requirement Specification)
Example: Define features like login, payment, user roles.

### 2. System Design (architectural/UI/UX)
Convert requirements into system UI, UX and system architecture and design.
**Output:** HLD (High-Level Design: System architecture (services + components)), LLD (Low-Level Design: Internal design of a component (API, logic, DB schema))
Example: Decide database schema, API structure, system flow.

### 3. Implementation (Coding/Development)
Develop the actual software based on design documents.
**Output:** Source code
Example: Backend APIs in Node.js, frontend in React.

### 4. Testing
Verify the system meets requirements and is defect-free.
**Output:** Test reports, bug reports
Example: API testing, UI testing, regression testing.

### 5. Deployment
Release the software to production or live environment.
**Output:** Live system
Example: Deploy application on AWS, VPS, or cloud platform.

### 6. Maintenance
Fix issues and improve the system after release.
**Output:** Updates, patches, enhancements
Example: Bug fixes, performance improvements, new feature updates.

## Simple Flow

**Requirement → Design → Development → Testing → Deployment → Maintenance**

# Types of SDLC Models

### 1. Sequential Model
In a sequential model, development follows a fixed step-by-step flow, such as:
**Requirement → Design → Development → Testing → Deployment**
Testers usually get involved in requirement review, test analysis, and test design early. However, because executable code is developed in later phases, **dynamic testing** usually starts late.
**Example:** Waterfall, V-Model
**Simple idea:** Testing preparation can start early, but actual execution starts after development.

### 2. Iterative / Incremental Model
In iterative and incremental models, the system is developed in repeated cycles. Each cycle may deliver a working prototype or product increment.
This allows both:
- **Static testing**: reviewing requirements, design, test cases
- **Dynamic testing**: executing the working software
Because increments are delivered frequently, teams need fast feedback and strong regression testing.
**Example:** Spiral model, Prototyping, RAD
**Simple idea:** Build, test, improve, and deliver step by step.

### 3. Agile Methodology
Agile is a flexible and collaborative SDLC approach where software is developed in short cycles with frequent customer feedback.
It combines both **iterative** and **incremental** development. Cross-functional teams work together to deliver working software quickly and adapt to changing requirements.
**Example:** Scrum, Kanban
**Simple idea:** Build small, test continuously, get feedback, and improve fast.

# Agile Methodology

The Agile methodology is a **project management approach** that involves breaking the project into small parts and emphasizes continuous collaboration and improvement.

## Activities of Agile:

1. **Define the project**: The team, along with the customer, defines the project's goals, objectives, and requirements.
2. **Create a backlog**: A backlog is a prioritized list of tasks that need to be completed. The customer, product owner, and the team work together to create the backlog.
3. **Plan the sprint**: The team plans the sprint by selecting the highest-priority tasks from the backlog and determining how much work can be completed in the upcoming sprint.
4. **Execute the sprint**: The team works on completing the tasks planned for the sprint, with daily meetings to check progress and address any issues.
5. **Review and demo**: At the end of the sprint, the team demonstrates the completed work to the customer and gets feedback.
6. **Retrospect**: The team retrospects on the sprint, discussing what went well, what didn't, and what can be improved for the next sprint.
7. **Repeat**: The process is repeated for each sprint until the project is completed. The product is incrementally developed and delivered to the customer in small chunks.
8. **Continuously improvement**: Agile methodologies focus on continuous improvement. The team reflects on its progress and makes adjustments as necessary to improve processes, tools, and communication for the next sprint.

# Development Approach: ATDD, TDD and BDD Approach

**Acceptance Test-Driven Development (ATDD)**
- Derives tests from acceptance criteria as part of the system design process
- Tests are written before the part of the application is developed to satisfy the tests

**Test-Driven Development (TDD):**
- Directs the coding through test cases (instead of extensive software design)
- Tests are written first, then the code is written to satisfy the tests, and then the tests and code are refactored

**Behavior-Driven Development (BDD):**
- Expresses the desired behavior of an application with test cases written in a simple form of natural language, which is easy to understand by stakeholders usually using the given/When/Then format.
- Test cases are then automatically translated into executable tests

For all these approaches, automated tests can be kept to maintain code quality during future changes or improvements

For real development practice:

> ***ATDD-style thinking is more common before development**, where requirements are broken into acceptance criteria.*

### Software testing classification

[IMAGE: testing-classification.png — Software Testing splits into: Based on action (Manual Testing, Automation Testing), Based on the approach (Static Testing, Dynamic Testing), Based on Techniques (Black box, White box, Experienced based)]

# Static testing and Dynamic testing

**Static testing** is a type of testing where the software is tested **without executing the code or application**.

In static testing, testers, developers, business analysts, or other team members review documents, requirements, designs, test cases, or source code to find defects early.

**Use Cases of Static Testing:**
1. Requirement Review
2. Design Review
3. Test Case Review
4. Code Review
5. API Specification Review
6. User Story / Acceptance Criteria Review

**Dynamic testing** is performed when the developed software or product is executed and tested by the tester. In this testing, the tester runs the application, gives input, checks output, and verifies whether the system behaves as expected.

2 types of dynamic testing:
1. **Functional testing:** Testing functionality of a feature
2. **Non-Functional testing**: Testing performance, security, UI/UX etc.

### Functional Testing

**1. Feature Testing**
**Explanation:** Feature testing verifies whether a specific feature works according to its requirements.
**Example:** For a login feature, test whether users can log in with valid credentials. Also test invalid password, empty fields, and proper error messages.

**2. Sanity Testing**
**Explanation:** Sanity testing is a quick check to verify whether a specific bug fix or small change works properly.
**Example:** If a login bug is fixed, test only the login flow quickly. No need to test the full application unless the fix affects other areas.

**3. Smoke Testing**
**Explanation:** Smoke testing checks whether the basic and critical functionalities of the application are working.
**Example:** After a new build, test login, dashboard loading, user creation, and logout. If any critical flow fails, the build is rejected for detailed testing.

**4. Regression Testing**
**Explanation:** Regression testing ensures that new changes did not break existing working features.
**Example:** After adding a payment feature, test existing login, registration, product search, and checkout flows. This confirms old features still work after the new update.

**5. Exploratory Testing**
**Explanation:** Exploratory testing is an experience-based testing approach where testers learn, design, and execute tests at the same time.
**Example:** A tester explores an e-commerce checkout flow without predefined test cases. During exploration, the tester may find hidden bugs in coupon, payment, address, or order confirmation flows.

**6. Ad-hoc Testing**
**Explanation:** Ad-hoc testing is informal testing done without a planned test case or structured approach.
**Example:** A tester randomly checks a form by entering unusual values. The goal is to quickly find defects using intuition and experience.

**7. Monkey Testing / Random Testing**
**Explanation:** Monkey testing is random testing where the tester gives random inputs or performs random actions to check system stability.
**Example:** A tester randomly clicks buttons, enters random text, and navigates pages quickly. This helps identify crashes, unexpected errors, or broken UI behavior.

**8. Gorilla Testing**
**Explanation:** Gorilla testing deeply tests one specific module or feature again and again with many scenarios.
**Example:** A tester repeatedly tests only the payment module with valid cards, invalid cards, expired cards, failed payments, and network issues. The goal is to make that single module highly stable.

**9. Alpha Testing**
**Explanation:** Alpha testing is internal testing performed before releasing the product to real external users.
**Example:** The company's QA team and internal employees test a new LMS system before public launch. They report bugs, usability issues, and missing requirements.

**10. Beta Testing**
**Explanation:** Beta testing is performed by selected real users before the final public release.
**Example:** A course platform is released to 100 selected students before launching for everyone. Their feedback helps identify real-world issues, usability problems, and performance gaps.

**11. A/B Testing**
**Explanation:** A/B testing compares two different versions of a feature or design to see which performs better.
**Example:** Version A has a blue "Enroll Now" button, and Version B has a green "Join Now" button. The team measures which version gets more clicks or conversions.

# Non functional testing

### 1. Performance Testing
Performance testing checks how fast, stable, and scalable the system is under different user loads.
**Example:** For an e-commerce website, test whether 1,000 users can browse products and place orders at the same time without slow response or server crash.

### 2. Security Testing
Security testing checks whether the system is protected from unauthorized access, data leaks, and common attacks.
**Example:** For a login API, test whether users can access another user's profile by changing the user ID in the request URL or token.

### 3. Usability Testing
**Clarification:** Usability testing checks whether the application is easy, clear, and comfortable for real users to use.
For a registration form, check whether users can easily understand required fields, validation messages, and the final submit process.

### 4. Cross Browser / Device Testing
**Clarification:** Cross browser and device testing checks whether the application works correctly across different browsers, screen sizes, and devices.
Test the same checkout page on Chrome, Firefox, Safari, Android mobile, iPhone, tablet, and desktop to ensure layout and functionality remain consistent.

### 5. Benchmark Testing
Benchmark testing compares the system's performance against a standard, previous version, competitor product, or expected target.
**Example:** If the current login API response time is 800ms, benchmark testing may check whether the optimized version improves it to the target response time of 300ms.

# Test Level

**Test level** means a specific stage of testing in the software development life cycle where testing is performed with a specific objective. They are connected to other activities in the software development life cycle (SDLC).

There are mainly 4 types of Test level that are:

[IMAGE: test-levels.png — four stacked bars, bottom to top: Unit Testing → Integration Testing → System Testing → Acceptance Testing]

1. Unit/Component testing
2. Integration Testing
3. System Testing
4. Acceptance Testing

Integration testing has been divided into 2 types:

[IMAGE: test-levels-integration.png — five stacked shapes, bottom to top: Component Testing, Component Integration Testing, System Testing, System Integration Testing, Acceptance Testing]

1. Component Integration Testing
2. System Integration Testing

1. **Component Testing: This level of testing focuses on evaluating individual components or units of a software system to ensure they work correctly in isolation.**
2. **Component Integration Testing: It involves testing the interactions and interfaces between different components to ensure they integrate seamlessly.**
3. **System Testing: This level of testing evaluates the entire software system as a whole to verify that it meets its specified requirements and functions correctly.**
4. **System Integration Testing: It's the testing of interactions and interfaces between different systems or modules to ensure that the overall system functions as expected.**
5. **Acceptance Testing: This is the final testing phase where the software is tested by stakeholder to ensure that it meets the business or end-users' requirements and is ready for deployment.**

# Test Pyramid

The test pyramid is a model that helps with test automation and allocation of testing efforts. It shows that there are different types of tests with varying levels of granularity.

[IMAGE: test-pyramid.png — a pyramid, bottom to top: Unit, Integration, End to end]

1. The bottom layer consists of small, isolated, and fast tests that check specific functionality. You need many of these tests for good coverage.
2. The top layer includes high-level, end-to-end tests that are slower and cover larger functionality. The higher the layer, the broader and more complex the tests.
3. There are variations in the number and names of layers in different models. For instance, one model has three layers: **unit tests, service tests, and UI tests.**
4. Another model uses **unit tests, integration tests, and end-to-end tests**. Other testing levels can also be employed.

# Test Quadrant

Testing quadrant **group the test levels** with the appropriate test types, activities, test techniques and work products in the Agile software development.

In this model, tests can be **business facing or technology facing**.

Tests can also **support the team** or **critique the product**

[IMAGE: test-quadrants.png — four boxes: Technology facing, Business facing, Support the team, Critique the product]

**The combination of these two viewpoints determines the four quadrants:**

**Quadrant Q1** - *Technology Facing, Support the Team*:
- Contains: Component and component integration tests
- Characteristics: **Automated**, included in CI process

**Quadrant Q2** - *Business Facing, Support the Team*:
- Contains: Functional tests, user story tests, user experience prototypes, API testing
- Characteristics: Checks acceptance criteria, **manual or automated**

**Quadrant Q3** - *Business Facing, Critique the Product*:
- Contains: Exploratory testing, usability testing, user acceptance testing
- Characteristics: User-oriented, **often manual**

**Quadrant Q4** - *Technology Facing, Critique the Product*:
- Contains: Smoke tests, sanity test, regression test, system testing, non-functional tests (excluding usability tests)
- Characteristics: **Often automated**

# Test Methods

**Test Techniques are called as Test methods.**

There are mainly 3 types of test techniques:

## 1. Blackbox or specification based testing:
Testing the software based on requirements without knowing the internal code structure.
**Example**: For a login page, tester checks whether valid username/password allows login and invalid credentials show an error.

## 2. Whitebox or clearbox or structural or glassbox testing
Testing the software by understanding the internal code, logic, conditions, loops, and structure..
**Example**: Developer/tester checks the login function code to verify all `if-else` conditions for valid user, invalid password, blocked user, and empty fields are tested.

## 3. Experienced based testing:
Testing based on tester's experience, intuition, domain knowledge, and past defect patterns.
**Example**: Tester checks if the password field accepts spaces, copy-paste, emojis, very long input, or SQL injection because similar bugs were found before.

# Blackbox Testing Methods

Black-box test techniques, also called **specification-based** techniques, focus on the specified behavior of the software, not its internal structure. This means test cases don't depend on how the software is built. If the behavior remains the same, the test cases are still useful even if the implementation changes.

Blackbox has 4 types of test techniques:
1. Equivalence Partitioning
2. Boundary Value Analysis (BVA)
3. Decision Table Testing
4. State Transition Testing

### Equivalence Partitioning:

**Scenario:** A software system accepts birthday of members only from 18 to 100 years.

| Invalid | valid | invalid |
| --- | --- | --- |
| <18 | 18-100 | >100 |

### Boundary Value Analysis:

2 types of BVA:
1. **2BVA: 17,18,100,101 (min-1, min, max, max+1)**
2. **3BVA: 17,18,19,99,100,101 (min-1, min, min+1, max-1, max, max+1)**

### Equivalence Partitioning (Complex scenario):

A bank offers Gold and Premium savings accounts for 1 and 3 years for each plan. The Gold savings account offers 5% interest for 1 year and 7% interest for 3 years, while the Premium savings account offers 7% interest for 1 year and 9% interest for 3 years. To avail of the Gold savings account, one must deposit a minimum of 1 lakh taka, and to avail of the Premium savings account, a deposit of 3 lakh taka is required.

A person deposited 1 lakh taka to purchase a Gold savings account for 3 years, and after 6 months, he deposited an additional 3 lakh taka to purchase a Premium savings account for 1 year.

How many test cases are covered by this scenario, expressed as a percentage?

### Decision Table Testing:

**Scenario**: You have to test a login page.

| Conditions | T1 | T2 | T3 | T4 |
| --- | --- | --- | --- | --- |
| Email | T | T | F | F |
| Password | T | F | T | F |
| Output | x |  | - | N/A |

### State Transition:

**State Transition** is a test design technique where we test how a system moves from one state to another based on specific actions, inputs, or events.

[IMAGE: state-transition-pin.png — Start → 1st Try → 2nd Try → 3rd Try with "Incorrect PIN"; "Correct PIN" from each try goes to Access Granted; "Incorrect Pin" from the 3rd try goes to Account Blocked]

Example: In a login system, a user account may move through different states:

`Active → Locked → Unlocked`

# Whitebox Testing Methods

White Box testing technique is generally a testing technique which can be applied by writing test cases based on coding logic.

We can say it **glassbox testing** or **clearbox** testing technique.

**Why whitebox testing is important?**

- **Understand code logic:** SDET can identify hidden bugs inside conditions, loops, validations, and business rules.
- **Design better test cases:** Code understanding helps cover positive, negative, edge, and branch scenarios more effectively.
- **Improve automation quality:** SDET can write stronger API, integration, and E2E automation by understanding the internal flow.
- **Find root cause faster:** When a test fails, SDET can debug logs, code, database, and API responses instead of only reporting "it failed."
- **Test backend and integration properly:** Many bugs happen between UI, API, database, queue, cache, and third-party services. White-box knowledge helps detect them.
- **Support developers better:** SDET can explain defects with technical evidence, possible root cause, and clear reproduction steps.
- **Reduce production risk:** Internal code-path coverage reduces the chance of hidden logic defects going to production.

**Types of whitebox testing:**

1. **Statement Testing:** Checks whether each important line or statement of code is executed at least once.
2. **Branch / Decision Testing:** Checks whether each decision point, like `if-else`, covers both true and false outcomes.
3. **Condition Testing:** Checks individual conditions inside complex logic, especially when multiple conditions are combined.
4. **Unit Testing:** Tests a single function, method, class, or component in isolation to verify its internal logic.
5. **Integration Testing:** Tests how multiple modules, APIs, services, database, or components work together internally.

# Statement, Condition and Decision coverage

**Example 1:**

```js
function findSqrt(number){
    if(number>0){
        return Math.sqrt(number)
    }
    return -1
}
console.log(findSqrt(-36))
```

**Example 2:**

```js
let age=18;
if(age>=0){
    if(age>=18 && age<=100){
        console.log("Voter");
    }
    else if(age>100){
        console.log("You are not allowed to give vote")
    }
    else{
        console.log("Not voter")
    }
}
else{
    console.log("Age can not be negative")
}
```

**Statement coverage Rules for find out minimum test case**

**For nested conditions**

statement coverage=Number of else+1

**For un-nested conditions**

statement coverage=2 (When else are there)

statement coverage=1 (When no else are there)

Note 1: **100% statement coverage can not guarantee bug free software**

```java
public static double division(int x, int y){
   return x/y;
}
```

Note 2:

**100% statement coverage can not guarantee 100% decision/branch coverage**

**Example 1:**

```java
public static int makePositive(int number){
   if(number<0){
       number=number*(-1);
   }
   return number;
}
```

**Example 2:**

```js
function phoneCall(phoneNumber = "999") {
  return `Calling ${phoneNumber}...`;
}

console.log(phoneCall("01712345678"));
// Output: Calling 01712345678...

console.log(phoneCall());
// Output: Calling 999...
```

**Branch coverage Rules for find out minimum test case**

For nested, Branch coverage (count of if+1)

**For un-nested conditions**

DC=2 always

# Unit Testing

**Unit testing** ensures to pass a function with several datasets.

```js
function calculateDiscount(price, discountPercent) {
  if (price <= 0) {
    return "Invalid price";
  }

  if (discountPercent < 0 || discountPercent > 100) {
    return "Invalid discount";
  }

  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}
```

Example unit test cases:

```js
console.log(calculateDiscount(1000, 10));
// Expected output: 900

console.log(calculateDiscount(500, 20));
// Expected output: 400

console.log(calculateDiscount(0, 10));
// Expected output: Invalid price

console.log(calculateDiscount(1000, 120));
// Expected output: Invalid discount
```

# Integration Testing

**Integration Testing** means testing whether two or more modules, components, APIs, services, or systems work together correctly.

Here is a simple **integration testing example with code**.

Suppose we have two modules:

1. `userService` → finds user from database
2. `authService` → uses `userService` to login user

### 1. User Service

```js
// userService.js

const users = [
  {
    id: 1,
    email: "user@example.com",
    password: "123456",
  },
];

function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

module.exports = { findUserByEmail };
```

### 2. Auth Service

```js
// authService.js

const { findUserByEmail } = require("./userService");

function login(email, password) {
  const user = findUserByEmail(email);

  if (!user) {
    return "User not found";
  }

  if (user.password !== password) {
    return "Invalid password";
  }

  return "Login successful";
}

module.exports = { login };
```

### 3. Integration Test

```js
// auth.integration.test.js

const { login } = require("./authService");

test("should login successfully with valid email and password", () => {
  const result = login("user@example.com", "123456");

  expect(result).toBe("Login successful");
});

test("should return invalid password for wrong password", () => {
  const result = login("user@example.com", "wrongpass");

  expect(result).toBe("Invalid password");
});

test("should return user not found for unknown email", () => {
  const result = login("unknown@test.com", "123456");

  expect(result).toBe("User not found");
});
```

# Checklist/ Code Review for whitebox testing

- Is the business logic implemented correctly?
- Are all conditions (if/else, switch cases, loops) properly covered?
- Has boundary value testing (minimum/maximum limits) been performed?
- Are null, empty, and undefined cases handled properly?
- Is proper exception handling implemented?
- Does the system handle invalid input without crashing?
- Is data validation applied?
- Are error messages meaningful and user-friendly?

# Experienced based testing techniques

3 types of experienced based testing techniques
1. Error guessing
2. Exploratory testing
3. Checklist-based testing

## 1. Error Guessing:

Error guessing is a technique used to **anticipate** the occurrence of errors, defects, and failures, based on the tester's knowledge, including:
1. How the application has worked in the past
2. The types of errors the developers tend to make and the types of defects that result from these errors
3. The types of failures that have occurred in other, similar applications

Testers need to make a list of possible errors, defects, and failures, and then create tests that can find these issues or even make them happen.

### Error factors:

Mistakes, issues, and problems in software can be linked to various things like:
1. **Input problems, like not accepting correct input or having the wrong or missing parameters.**
2. **Output issues, such as producing the wrong format or result.**
3. **Logic errors, which could involve missing cases or using the wrong operators.**
4. **Computation problems, like working with the wrong numbers or making incorrect calculations.**
5. **Interface-related troubles, such as parameter mismatches or incompatible types.**
6. **Data issues, including incorrect starting values or using the wrong data types.**

## 2. Exploratory Testing:

**Exploratory testing** is a way of testing where the tester **learns, designs, and runs** tests at the same time to understand the test subject better. Often, it's done in a **time-limited session** with specific goals called a **test charter**. After testing, **the tester shares** what they found with others.

The tester explores areas that haven't been tested yet and may use a simple sheet to note down what they did and discovered. Simple notes and findings are essential in this type of testing.

**Lightweight documentation are the crucial part of exploratory testing.**

## 3. Checklist based testing techniques:

In **exploratory testing**, testers do not follow detailed step-by-step test cases. They explore the software using their experience, curiosity, and domain knowledge. So a checklist helps them stay focused and avoid missing important areas.

**Example checklist for exploratory testing of a login page. Often this is considered as test title.**

- Verify that valid users can log in successfully.
- Verify that users cannot log in with an invalid password.
- Verify that proper validation appears when email or password is empty.
- Verify that locked or blocked users cannot log in.
- Verify that the password visibility icon works properly.
- Verify that the remember me option works as expected.
- Verify that the forgot password link redirects users to the correct page.
- Verify that proper error messages appear for invalid login scenarios.
- Verify that session or token behavior works correctly after login.
- Verify that login works properly across different browsers and devices.

**Written format of Checklist:**

| SL | Checklist | Yes | No |
| --- | --- | --- | --- |
| 1 | Can a user register and login successfully? | ☐ | ☐ |
| 2 | Does product search and filtering work correctly? | ☐ | ☐ |
| 3 | Can users add items to cart and update quantity properly? | ☐ | ☐ |
| 4 | Does the checkout and payment process complete successfully? | ☐ | ☐ |
| 5 | Is order confirmation shown and email received? | ☐ | ☐ |
| 6 | Is the password securely stored (hashed)? | ☐ | ☐ |
| 7 | Is unauthorized access to user data restricted? | ☐ | ☐ |
| 8 | Does the website load within acceptable time (<3 sec)? | ☐ | ☐ |
| 9 | Can the system handle multiple users without crashing? | ☐ | ☐ |
| 10 | Is payment data securely transmitted using HTTPS? | ☐ | ☐ |

# Generic checklist for blackbox testing

- Is the end-to-end user flow smooth and uninterrupted?
- Is input validation working correctly (invalid, empty, special characters)?
- Are error messages clear, meaningful, and helpful to users?
- Are buttons and user actions functioning correctly?
- Is the application state preserved correctly on back/refresh?
- Are rapid user actions (e.g., double-click, multiple submissions) handled properly?
- Is frontend (UI) validation consistent with backend validation?
- Does the application work correctly across different devices and browsers?
- Is the UI responsive across mobile, tablet, and desktop?
- Is there any UI flickering, layout breaking, or misalignment?
- Are form submissions idempotent (no duplicate requests on retry)?
- Is session behavior correct (timeout, auto logout, token expiry)?
- Are user actions reflected immediately (UI feedback after click/submit)?
- Is navigation consistent (menu, routing, redirects)?
- Are error scenarios (network failure, API timeout) handled gracefully?

UI testing is not just about clicking buttons — it's about validating how real users behave, break, retry, and interact under imperfect conditions

# Generic checklist for whitebox testing

- Is each important code statement executed by at least one test?
- Are all major `if-else` or decision outcomes tested properly?
- Are individual conditions inside complex logic tested correctly?
- Are boundary values handled correctly in the code?
- Are null, undefined, empty, and invalid values handled safely?
- Are default and optional parameter values tested properly?
- Are exceptions and error-handling blocks tested correctly?
- Are important business rules implemented correctly in the code logic?
- Are service, controller, repository, API, and database layers interacting correctly?
- Are security checks like authentication, authorization, token validation, and permission checks implemented correctly?

**White-box testing is not just about code coverage — it is about verifying internal logic, hidden conditions, business rules, error handling, and system behavior from inside the code.**

# Test Planning

A **test plan** is a document that explains **what we will test, why we will test, how we will test, who will test, and when testing will be completed**.

It helps the QA team and stakeholders understand the full testing process before starting the test project.

## Test planning includes:

### 1. Testing Context
This explains the basic background of testing. It includes:
- What will be tested
- What will not be tested
- Test objectives
- Project limitations
- Requirement documents or test basis

### 2. Assumptions and Constraints
This explains what we are assuming and what limitations we have. Example:
- The test environment will be ready on time
- Developers will fix critical bugs quickly
- Testing must be completed within 2 weeks
- Limited testers or limited devices are available

### 3. Stakeholders
This explains who is involved in the testing project and what their responsibilities are. Example: QA team, Developers, Project manager, Product owner, Business team, Client. It may also include whether new testers need to be hired or trained.

### 4. Communication
This explains how the team will communicate during testing. Example: Daily standup meeting, Bug reporting process, Test summary report, Email or Slack updates, Weekly QA status meeting.

### 5. Risk Register
This lists possible risks that can affect the product or the testing process. Example:
- Important feature may fail
- Test environment may not be stable
- Requirement may change frequently
- Testing time may be too short
- Critical bugs may be found near release

### 6. Test Approach
This explains how testing will be performed. It includes:
- Test levels, such as unit, integration, system, and acceptance testing
- Test types, such as functional, regression, performance, security, and usability testing
- Test techniques, such as boundary value analysis, equivalence partitioning, and exploratory testing
- Test deliverables, such as test cases, bug reports, and test summary reports
- Entry criteria and exit criteria
- Test data requirements
- Test environment requirements
- Metrics to be collected
- Level of tester independence

### 7. Resource, Budget, and Schedule
This explains what resources are needed and when testing activities will happen. It includes: Number of testers needed, Required tools, Required devices, Required budget, Testing timeline, Test execution schedule, Release deadline.

## In simple words:

A test plan answers these questions:
- What will we test?
- Why will we test?
- How will we test?
- Who will test?
- When will testing start and finish?
- What risks may affect testing?
- What resources are needed?
- What conditions must be met before release?

So, a test plan works like a roadmap for the complete testing process.

# Test Strategy

A **test strategy** is a high-level guideline that explains **how testing will be performed across a project, product, or organization**.

It defines the overall testing direction, approach, standards, tools, responsibilities, risk management, and quality expectations.

**Example:** For an eCommerce project, the test strategy may include:
- Performing API testing first, then UI testing
- Using Playwright for automation
- Giving high priority to payment, login, and order flows
- Running performance testing before release

**In simple terms:** **Test Strategy = The big-picture approach for how testing will be done**

# Test Plan vs Test Strategy

| Aspect | Test Plan | Test Strategy |
| --- | --- | --- |
| Definition | A Test Plan is a **detailed document** that outlines the scope, objectives, resources, schedule, and approach for a specific testing project. It provides a roadmap for the testing process. | A Test Strategy is a **high-level document** that defines the overall approach, testing objectives, and methods to be employed for multiple testing projects within an organization. It sets a long-term direction for testing. |
| Scope | It focuses on the specifics of a **single testing project**, including the features, functionalities, and components to be tested. | It has a **broader scope**, covering testing across various projects or products. It provides guidelines for consistent testing practices. |
| Level of Detail | A Test Plan is **highly detailed and project-specific**. It includes specifics about test cases, test data, test environment, and test schedules. | A Test Strategy is **less detailed** and focuses on high-level principles and **guidelines**. It doesn't delve into the specifics of individual projects. |
| Audience | It is **primarily for the testing team, project stakeholders**, and anyone directly involved in the specific testing project. | It is intended for a **wider audience**, including management, stakeholders, and teams involved in **multiple projects.** |
| Change Frequency | Test Plans may **change frequently** as project requirements and scope evolve. | Test Strategies change **less frequently** and are more stable, as they provide a long-term approach to testing practices. |

# Test Effort Estimation

## 1. Estimation Based on Ratios
This technique uses data from previous similar projects to estimate testing effort.
**Example:** In previous projects, your company found that: **Development effort : Testing effort = 3 : 2**. Now, if the current project development effort is **600 person-days**, then testing effort can be estimated as: **Testing effort = 400 person-days**. So, if development takes 3 parts, testing usually takes 2 parts.

## 2. Extrapolation
This technique estimates future testing effort based on the progress of the current project.
**Example:** Suppose in the first sprint, QA tested **5 features in 10 days**. Now, the project has **20 similar features**. So, estimated testing effort: **5 features = 10 days**, **20 features = 40 days**. This is useful when the team starts testing and then predicts the remaining effort based on early progress.

## 3. Wideband Delphi
In this technique, multiple experts estimate individually. Then they discuss differences and agree on a final estimate.
**Example:** For testing a payment feature: Tester 1 estimates: 3 days; Tester 2 estimates: 5 days; Tester 3 estimates: 4 days. They discuss the assumptions, risks, and complexity. Finally, they agree: **Final estimate = 4 days**. This is useful when expert judgment is needed.

## 4. Three-Point Estimation
This technique uses three estimates: **Optimistic:** Best-case estimate; **Most likely:** Normal estimate; **Pessimistic:** Worst-case estimate.
Formula: **E = (Optimistic + 4 × Most likely + Pessimistic) / 6**
**Example:** For testing checkout functionality: Optimistic estimate = 2 days; Most likely estimate = 4 days; Pessimistic estimate = 8 days. So, **E = (2 + 4×4 + 8) / 6 = (2 + 16 + 8) / 6 = 26 / 6 = 4.3 days**. So, the estimated testing effort is around **4 to 5 days**.

## In simple terms
- **Ratio-based estimation:** Estimate using past project ratios.
- **Extrapolation:** Estimate based on current progress.
- **Wideband Delphi:** Experts discuss and agree on an estimate.
- **Three-point estimation:** Estimate using best-case, normal-case, and worst-case values.

# Acceptance Criteria

Acceptance criteria (AC) are the conditions that a software product must meet to be accepted by a user, a customer, or other systems. They are unique for each user story and define the feature behavior from the end-user's perspective.

2 ways can be written:
1. Scenario oriented
2. Rule oriented

Scenario Oriented:
- It is approached through the Given/When/Then (GWT) sequence that looks like this:
    - Given some precondition
    - When I do some action
    - Then I expect some result
- This approach was inherited from behavior-driven development (BDD) and provides a consistent structure that helps testers define when to begin and end testing a particular feature.

**Scenario Oriented: Example**

```gherkin
Feature: User should Login to access the portal
  As a new user
  I want to log in to the website
  So that the user can login successfully

Scenario #1: Successful Log in to the website
  Given A user visit the website
  When the user clicks Sign-in
  And enters a valid email <email> and password <password>
  And clicks Sign-in/submit button
  Then the user should be successfully logged into the site

Scenario #2: Unsuccessful Log in to the website
  Given A user visit the website
  When the user enters an invalid email <email> and password <password>
  And clicks Sign-in/submit button
  Then the user should get a warning message
```

**Rule oriented: Example**

This type of acceptance criteria objectives are same as the scenario oriented. But the writing styles are different. It is written by bullet point verification list or tabulated form of input output mapping.

For example regarding a send money transaction:
1. Sender should have enough balance
2. After successful transaction sender balance should be deducted with corresponding service fee
3. Sender and receiver should get SMS
4. Sender transaction list should be updated.

# Test Case

A test case is a set of actions performed on a system to determine if it satisfies software requirements and functions correctly.

Test case should have following fields:
1. Test case Id
2. Test scenario/module
3. Prerequisites
4. Test case title
5. Test steps
6. Test data
7. Expected Result
8. Actual Result
9. Test Result/Status
10. Remarks

Test Case example:

[IMAGE: test-case-template.png — a Google Sheets test case template "Standard-TestCase-Format" with the columns Test Case Id, Test Scenario, Test Case Title, Prerequisites, Steps/Actions, Test Data, Expected Result, Actual Result, Status, Remarks]

# Bug Report

During test execution, if a tester identifies a discrepancy between the expected result and the actual result, it is considered an anomaly or issue. The tester then communicates this finding with the developer or project manager and documents it in a report, typically referred to as a 'bug report' or 'defect report.

Bug report has following fields:
1. Status (Open/Fixed/Closed)
2. Issue Id (automatically)
3. Issue title
4. Issue Type (bug/improvement)
5. Issue description (detail about the issue)
6. Steps to reproduce
7. Priority
8. Severity
9. Environment
10. Sprint
11. Version
12. Date
13. Assign to
14. Attachment

## Bug Life Cycle

[IMAGE: bug-life-cycle.png — New → Open → Fixed → Retest → Closed; New → Rejected; Open → Deferred; Retest → Reopen → Fixed]

# Bug Triage

Bug triage is a process in software development and testing where identified bugs or issues are evaluated, categorized, and prioritized to determine their importance and order in which they should be addressed.

In bug triage we categorized the issue by applying priority and severity
1. Priority (High/Medium/Low): It means how fast the issue should resolve
2. Severity (Critical/Major/Minor): It means how much it's impact on the system

Often Critical/Major severity are pointed as High severity and Minor severity are pointed as low severity.

## Bug Triage States

Based on the High and Low factors, bug has 4 states:

## 1. High Priority, High Severity
**Meaning:** The bug seriously breaks the system and must be fixed immediately.
**Example:** In an eCommerce website, users cannot complete payment after placing an order.

## 2. High Priority, Low Severity
**Meaning:** The bug is not technically serious, but it is important for business or user impression.
**Example:** The company logo is missing from the homepage during a big marketing campaign.

## 3. Low Priority, High Severity
**Meaning:** The bug is serious, but it happens rarely or in a less important area.
**Example:** The application crashes only when an admin uploads a 500MB file, but the allowed file size is 10MB.

## 4. Low Priority, Low Severity
**Meaning:** The bug has very small impact and does not need urgent fixing.
**Example:** A minor spelling mistake appears in the footer text.

# Test Completion

**Entry criteria** are conditions that must be met before starting an activity. If they aren't met, the activity can become more difficult, time-consuming, expensive, and risky.

**Examples:**
- Requirements are reviewed and approved
- Test environment is set up and accessible

**Exit criteria** define what needs to be achieved to consider an activity finished. These criteria are specific to the goals of the testing.

**Examples:**
- All critical test cases are executed and passed
- No high or critical defects remain open

Test completion gathers data from finished test activities to compile experience, test materials, and any other relevant information. Test completion activities occur at project milestones such as:
1. When a test level is completed
2. An agile iteration is finished
3. A test project is completed or cancelled
4. A software system is released
5. A maintenance release is completed

# Requirement Traceability Matrix (RTM)

**Requirement Traceability Matrix (RTM)** is a document/table that maps each **requirement** with its related **test cases**.

It helps the QA team confirm that **every requirement is covered by testing**.

## In simple terms

**RTM = Requirement coverage tracking document**

It answers:
- Which requirement is tested?
- Which test case covers that requirement?
- Has the test case passed or failed?
- Is any requirement missing test coverage?

Example:

[IMAGE: rtm-example.png — "Requirements Traceability Matrix, Project Name: Online Flight Booking Application". BR_1 Reservation Module: FR_1 One Way Ticket booking (High, TC#001, TC#002), FR_2 Round Way Ticket (High, TC#003, TC#004), FR_3 Multicity Ticket booking (High, TC#005, TC#006). BR_2 Payment Module: FR_4 By Credit Card (High, TC#007, TC#008), FR_5 By Debit Card (High, TC#009), FR_6 By Reward Points (Medium, TC#010, TC#011)]

# Most popular top 50 manual testing interview questions

1. What is software testing, and why is it important?
2. What is the main objective of software testing?
3. What is the difference between verification and validation?
4. What is the difference between QA and QC?
5. What is the difference between static testing and dynamic testing?
6. What is the difference between functional and non-functional testing?
7. What is the difference between smoke testing and sanity testing?
8. What is regression testing, and when should we perform it?
9. What is retesting, and how is it different from regression testing?
10. What is exploratory testing? Give an example.
11. What is ad-hoc testing? How is it different from exploratory testing?
12. What is acceptance testing? Who performs it?
13. What is UAT? Why is it important?
14. What is alpha testing and beta testing?
15. What is compatibility testing? Give examples.
16. What is usability testing? Give examples.
17. What is a test plan? What does it usually contain?
18. What is a test strategy? How is it different from a test plan?
19. What is test estimation? How do you estimate testing effort?
20. What are entry criteria and exit criteria in testing?
21. What is a test scenario? Give an example.
22. What is a test case? What are the key fields of a test case?
23. What is the difference between test scenario and test case?
24. What is test data? Why is it important?
25. What is Requirement Traceability Matrix, RTM?
26. How do you write test cases from requirements?
27. Write test cases for a login page.
28. Write test cases for a registration page.
29. Write test cases for a password reset feature.
30. Write test cases for a search feature.
31. Write test cases for an eCommerce cart page.
32. Write test cases for a checkout/payment flow, excluding payment gateway technical details.
33. Write test cases for a file upload feature.
34. Write test cases for a filter and sorting feature.
35. Write test cases for pagination.
36. Write test cases for a profile update page.
37. What is a bug or defect?
38. What are the important fields in a bug report?
39. How do you write a good bug title?
40. What is bug severity? Give examples.
41. What is bug priority? Give examples.
42. What is the difference between severity and priority?
43. Give examples of high severity and low priority bugs.
44. Give examples of low severity and high priority bugs.
45. Explain the bug life cycle.
46. What will you do if a developer says, "This is not a bug"?
47. What will you do if requirements are unclear or incomplete?
48. How do you decide what to test first when time is limited?
49. If a feature works on your machine but fails on the client's machine, how will you investigate?
50. A user reports that they cannot log in, but you cannot reproduce the issue. What will you do?
