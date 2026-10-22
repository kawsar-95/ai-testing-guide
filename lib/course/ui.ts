/** The English strings of the System Design Course module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const COURSE_UI = {
  siteTitle: "System Design Course",
  description:
    "System design from the ground up, in plain words for testers: networks, DNS, proxies, clustering, availability, databases, and consistency.",
  eyebrow: (topics: number) => `COURSE · ${topics} TOPICS`,
  heading: "System Design Course",
  lede: "Learn system design one topic at a time, in order. Each topic gives one idea in plain words, a real example, the common mistakes, and what a tester can check. Some topics link to a page of the Architecture module.",
  sourceNote:
    "The topic order follows systemdesignbangla.com. The text is the tutorial's own, and each fact on a page links to an official source.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · COURSE`,
  itemNav: "Course topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "Course topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "Course",
  crossTo: "Course",
} as const;
