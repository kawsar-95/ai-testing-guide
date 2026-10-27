import type { Bn } from "../bn.ts";
import type { K6_UI } from "../k6/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of K6_UI. `description` is metadata only, so it stays English. */
export const K6_UI_BN: Bn<typeof K6_UI> = {
  siteTitle: "k6 Performance Testing",
  description: "Performance testing and k6 from the first script to live dashboards and CI.",
  eyebrow: (topics) => `K6 · ${topics}টি টপিক`,
  heading: "k6 Performance Testing",
  lede: "একটা একটা করে টপিক ধরে ক্রমানুসারে পারফরম্যান্স টেস্টিং ও k6 শিখুন। প্রতিটা টপিকে আছে একটা আইডিয়া, একটা স্ক্রিপ্ট যা আপনি চালাতে পারবেন, আর যে রেজাল্ট আপনার দেখার কথা।",
  sourceNote:
    "ভিত্তি হলো মালিকের k6 নোট। প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা, বেশিরভাগই Grafana k6 docs।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · K6`,
  itemNav: "k6-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "k6-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "k6",
  crossTo: "k6",
  projectLink: {
    href: "https://github.com/kawsar-95/k6-performance-testing",
    label: "বাস্তব প্রজেক্টে দেখুন: GitHub-এ মালিকের k6-performance-testing repository",
  },
};
