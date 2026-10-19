/** The English strings of the System Architecture Foundations module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const ARCHITECTURE_UI = {
  siteTitle: "System Architecture Foundations",
  description:
    "The building blocks of system architecture in plain words: scaling, load balancers, caches, queues, idempotency, and monitoring.",
  eyebrow: (lessons: number) => `ARCHITECTURE · ${lessons} TOPICS + PRACTICE`,
  heading: "System Architecture Foundations",
  lede: "Code builds a feature. Architecture keeps it alive when 10,000 users arrive, a server dies, or a payment callback comes two times. Each topic takes about 5 minutes: one idea, one diagram, one real example, the common mistakes, and what a tester can check.",
  sourceNote:
    "The topics follow the owner's notes and diagrams. Each fact on a page links to an official source, such as AWS, Google Cloud, Redis, MDN, or an IETF RFC.",
  topicsHeading: "TOPICS",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  practiceSummaryText: (done: number, total: number) => `${done} of ${total} questions done`,
  practiceLabel: "Practice questions done",
  percentText: (value: number) => `${value}%`,

  // The topic page.
  topicEyebrow: (number: number) => `TOPIC ${pad(number)} · ARCHITECTURE`,
  practiceEyebrow: "PRACTICE · ARCHITECTURE",
  topicNav: "Architecture topics",
  allTopics: "All topics",
  previousTopic: "Previous topic",
  nextTopic: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The practice questions.
  practiceTopicLink: "Topic",
  showAnswer: "Show the model answer",
  practiceDoneLabel: (n: number) => `Question ${n} done`,
  questionLabel: (n: number) => `Q${pad(n)}`,

  // The sidebar, the drawer, and the header.
  sidebarNav: "Architecture topics",
  sidebarTopicLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarPracticeLabel: "PRACTICE",
  sidebarDone: "done",
  headerLink: "Architecture",
  crossToArchitecture: "Architecture",
} as const;
