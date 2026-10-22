import type { Bn } from "../bn.ts";
import type { COURSE_UI } from "../course/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of COURSE_UI. `description` is metadata only, so it stays English. */
export const COURSE_UI_BN: Bn<typeof COURSE_UI> = {
  siteTitle: "System Design Course",
  description:
    "System design from the ground up, in plain words for testers: networks, DNS, proxies, clustering, availability, databases, consistency, system architecture, reliability, security, case studies, and interviews.",
  eyebrow: (topics) => `COURSE · ${topics}টি টপিক`,
  heading: "System Design Course",
  lede: "একটা একটা করে টপিক ধরে ক্রমানুসারে সিস্টেম ডিজাইন শিখুন। প্রতিটা টপিকে আছে একটা আইডিয়া সহজ ভাষায়, একটা বাস্তব উদাহরণ, সাধারণ ভুল, আর একজন টেস্টার কী যাচাই করতে পারেন। কিছু টপিক Architecture বা System Design মডিউলের একটা পেজে লিংক করে।",
  sourceNote:
    "টপিকের ক্রম systemdesignbangla.com অনুসরণ করে। লেখা এই টিউটোরিয়ালের নিজস্ব, আর প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · COURSE`,
  itemNav: "Course-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "Course-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "Course",
  crossTo: "Course",
};
