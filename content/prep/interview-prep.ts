import type { PrepItem } from "../../lib/prep/types.ts";

const SYLLABUS = "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf";

export const items: readonly PrepItem[] = [
  {
    kind: "task",
    id: "interview-prep-001",
    title: "Research the product",
    details:
      "Use the product for 30 minutes before the interview.\nWrite down 3 flows that you tried, 2 things that worked well, and 2 things that confused you.\nRead the public pages of the company: the home page, the help center, and the latest release notes.\nFind out who the users are and what a failure costs them.\nWrite 2 test ideas for a feature that you saw. Say them in the interview.",
  },
  {
    kind: "task",
    id: "interview-prep-002",
    title: "Read the job post and the tech stack",
    details:
      "Copy each requirement of the job post into a list.\nMark each line with one of 3 labels: I have done this, I have learned this, or I have not done this yet.\nFor each tool in the stack, prepare one short example from your own work.\nFor a tool that you do not know, work through its getting-started guide for 1 hour and note what you built.\nBe honest about the gaps. Say what you would do to close each gap.",
  },
  {
    kind: "task",
    id: "interview-prep-003",
    title: "Prepare a 2-minute introduction",
    details:
      "Write the introduction in 3 parts: who you are now, what you did before, and what you want next.\nAs my own rule of thumb, aim for about 250 words. Then time yourself and cut or add words until it fits in 2 minutes.\nPut one proof in each part, for example a number, a tool, or a result.\nEnd with a link to the job: say why this role fits your next step.\nSay it aloud 5 times and record it once. Cut each sentence that you do not need.",
  },
  {
    kind: "task",
    id: "interview-prep-004",
    title: "Prepare 3 STAR stories",
    details:
      "Pick 3 real events: a bug that you found, a disagreement that you solved, and a mistake that you learned from.\nWrite each one in 4 lines: Situation, Task, Action, Result.\nSpend most of the words on the Action. Say what you did, not what the team did.\nEnd each story with a result that has a fact, for example a bug that you stopped, or a time that you saved.\nPractise each story in 2 minutes. Learn the key points and not the exact words.",
  },
  {
    kind: "task",
    id: "interview-prep-005",
    title: "Prepare to explain a bug you found",
    details:
      "Choose one bug that you can explain in 3 minutes. Pick one that had a real effect on a user.\nTell the story in this order: where you found it, the steps that showed it, what you expected, what happened, and how bad it was.\nName the test object and the environment, for example the build and the browser.\nSay how you found the cause, or who helped you, and what happened after the fix.\nSay what you learned, and what test you added so that the bug cannot return.\nA defect report usually holds the steps, the expected and actual results, the severity, and the test object with its environment. Use the same parts in your story.",
    source: SYLLABUS + "#page=57",
  },
  {
    kind: "task",
    id: "interview-prep-006",
    title: "Practise a live test-design exercise",
    details:
      "Take a small feature, for example a login form, a search box, or a date picker.\nBefore you write a test, ask 3 questions: who uses it, what are the rules, and what can go wrong.\nSplit the inputs into groups with equivalence partitioning. Then add the values at the edges of each group with boundary value analysis. Both are black-box techniques.\nAdd a few ideas from your own experience, for example a slow network or a double click.\nThink aloud and say why each test matters. A short, ordered list is better than a long, random one.\nDo this exercise 3 times with a timer set to 15 minutes.",
    source: SYLLABUS + "#page=39",
  },
  {
    kind: "task",
    id: "interview-prep-007",
    title: "Prepare questions for the interviewer",
    details:
      "Write 5 questions and bring them on paper.\nAsk about the work: how the team tests a release, and what the biggest quality problem is now.\nAsk about the team: who a tester works with each day, and how the team shares what it learns.\nAsk about you: what a good first 90 days looks like, and how the team measures success.\nMy advice: keep pay and leave for the offer talk, unless the interviewer starts the topic.\nWrite down the answers after the interview. They help you decide.",
  },
  {
    kind: "task",
    id: "interview-prep-008",
    title: "Follow up after the interview",
    details:
      "Send a short thank-you email on the same day, or on the next morning.\nName each person of the panel and one specific thing that you learned from each.\nAdd one useful thing that you thought of after the interview, for example an answer that you could improve or a link.\nMy advice: keep the email short, under about 120 words, and do not ask for a result in it.\nIf the recruiter gave a date and you hear nothing a few days after it, send one polite reminder.\nWrite notes about what went well and what to improve, for the next interview.",
  },
];
