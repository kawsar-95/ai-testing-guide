/** The English strings of the SDET Roadmap module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const SDET_UI = {
  siteTitle: "SDET Roadmap",
  description:
    "A step-by-step path from tester to full stack SDET: manual and API testing, JavaScript, TypeScript, SQL, the backend and frontend you test, system design, Linux, security, the cloud, Playwright automation, CI/CD, and interviews.",
  eyebrow: (steps: number) => `SDET roadmap · ${steps} steps`,
  heading: "SDET Roadmap",
  lede: "Twenty steps from tester to full stack SDET, in order. A step that another module of this site already teaches links to it. The other steps have their own page: what the tool or skill is, how it works, a first try on your laptop, how a tester uses it, the common mistakes, and what to check.",
  sourceNote:
    "The order of the steps follows the curriculum of the course \"Become an SDET Professional\" (Road to SDET, Batch 21). Only the order and the subject names come from it. The text is the tutorial's own, and each fact on a page links to an official source, such as the Playwright, Postman, MDN, MySQL, or OWASP docs.",
  itemsHeading: "STEPS",
  itemsHeadingId: "steps-heading",
  overallLabel: "Steps done",
  summaryText: (done: number, total: number) => `${done} of ${total} steps done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `Step ${pad(number)} · SDET roadmap`,
  itemNav: "SDET Roadmap steps",
  allItems: "All steps",
  previousItem: "Previous step",
  nextItem: "Next step",
  markDone: "Mark this step as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "SDET Roadmap steps",
  sidebarItemLabel: (number: number) => `Step ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "SDET Roadmap",
  crossTo: "SDET Roadmap",
} as const;
