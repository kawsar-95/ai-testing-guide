/** The English strings of the k6 Performance Testing module. */

const pad = (number: number) => String(number).padStart(2, "0");

export const K6_UI = {
  siteTitle: "k6 Performance Testing",
  description:
    "Performance testing and k6 from the first script to live dashboards and CI.",
  eyebrow: (topics: number) => `K6 · ${topics} TOPICS`,
  heading: "k6 Performance Testing",
  lede: "Learn performance testing and k6 one topic at a time, in order. Each topic gives one idea, a script that you can run, and the result that you should see.",
  sourceNote:
    "The base is the owner's notes on k6. Each fact on a page links to an official source, mostly the Grafana k6 docs.",
  itemsHeading: "TOPICS",
  itemsHeadingId: "topics-heading",
  overallLabel: "Topics done",
  summaryText: (done: number, total: number) => `${done} of ${total} topics done`,
  percentText: (value: number) => `${value}%`,

  // The topic page.
  itemEyebrow: (number: number) => `TOPIC ${pad(number)} · K6`,
  itemNav: "k6 topics",
  allItems: "All topics",
  previousItem: "Previous topic",
  nextItem: "Next topic",
  markDone: "Mark this topic as done",
  markedDone: "Done. Click to undo",

  // The sidebar, the drawer, and the header.
  sidebarNav: "k6 topics",
  sidebarItemLabel: (number: number) => `TOPIC ${pad(number)}`,
  sidebarDone: "done",
  headerLink: "k6",
  crossTo: "k6",
} as const;
