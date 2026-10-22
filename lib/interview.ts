/** The interview page: links to the interview material that is already on the site. */
export const INTERVIEW_HOME = "/interview/";

export const INTERVIEW_ROUTES: readonly string[] = [INTERVIEW_HOME];

/** The English strings and the cards of the interview page. Each `href` is a known route (`tests/interview.test.ts`). */
export const INTERVIEW_UI = {
  navLabel: "Interview",
  siteTitle: "Interview",
  description: "Interview questions for testers: the manual testing questions, the system design practice questions, and how to answer a design interview.",
  eyebrow: "INTERVIEW",
  heading: "Interview preparation",
  lede: "Three places on this site help you to prepare. Start with the testing questions, then practice system design.",
  cards: [
    {
      title: "Testing interview questions",
      text: "Chapter 11 of Fundamentals: 50 questions about manual testing, with answers.",
      href: "/fundamentals/interview/",
    },
    {
      title: "System design practice",
      text: "Practice questions of the Architecture module, each with a model answer.",
      href: "/architecture/practice/",
    },
    {
      title: "How to answer a design interview",
      text: "A page of the System Design Course about the steps of a design interview.",
      href: "/course/interview-intro/",
    },
  ],
} as const;
