/** The English strings of the Security Testing module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const SECURITY_UI = {
  siteTitle: "Security Testing and Penetration Testing",
  description:
    "Security testing for QA engineers and SDETs: the basics and a safe lab, network scanning and server hardening, web, API, and database flaws, AI-assisted testing, DevSecOps scans in CI/CD, cyber law, and a practice penetration test.",
  eyebrow: (topics: number) => `SECURITY · ${topics} TOPICS`,
  heading: "Security Testing and Penetration Testing",
  lede: "A penetration tester attacks a system the way a real attacker would, but only with written permission and only inside the agreed scope. These topics go from a safe practice lab to a full practice test with a report.",
  sourceNote:
    "The topics follow the curriculum of the course \"Cyber Security and Penetration Testing with AI\" (Road to SDET): 8 course modules, in their order. The text of each page is the tutorial's own. Every fact links to an official source, such as NIST, OWASP, the tool's own documentation, or the text of the law.",
  itemsHeading: "Topics",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · SECURITY`,
  itemNav: "Security Testing topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "Security Testing topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "Security Testing",
  crossTo: "Security Testing",
} as const;
