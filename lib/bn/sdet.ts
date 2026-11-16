import type { Bn } from "../bn.ts";
import type { SDET_UI } from "../sdet/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of SDET_UI. `description` is metadata only, so it stays English. */
export const SDET_UI_BN: Bn<typeof SDET_UI> = {
  siteTitle: "SDET Roadmap",
  description:
    "A step-by-step path from tester to full stack SDET: manual and API testing, JavaScript, TypeScript, SQL, the backend and frontend you test, system design, Linux, security, the cloud, Playwright automation, CI/CD, and interviews.",
  eyebrow: (steps) => `SDET ROADMAP · ${steps}টি ধাপ`,
  heading: "SDET Roadmap",
  lede: "টেস্টার থেকে full stack SDET হওয়ার বিশটি ধাপ, ক্রমানুসারে। যে ধাপ এই সাইটের অন্য কোনো মডিউলে আগেই শেখানো হয়েছে, সেটা সেই মডিউলে লিংক করে। বাকি ধাপগুলোর নিজের পেজ আছে: টুল বা স্কিলটা কী, কীভাবে কাজ করে, নিজের ল্যাপটপে প্রথমবার চালিয়ে দেখা, একজন টেস্টার এটা কীভাবে ব্যবহার করেন, সাধারণ ভুল, আর কী চেক করবেন।",
  sourceNote:
    "ধাপগুলোর ক্রম \"Become an SDET Professional\" (Road to SDET, Batch 21) কোর্সের কারিকুলাম অনুযায়ী। শুধু ক্রম আর বিষয়ের নামগুলো সেখান থেকে নেওয়া। লেখাটা টিউটোরিয়ালের নিজের, আর প্রতিটা পেজের প্রতিটা তথ্য একটা অফিসিয়াল সোর্সে লিংক করা, যেমন Playwright, Postman, MDN, MySQL বা OWASP-এর ডকুমেন্টেশন।",
  itemsHeading: "ধাপসমূহ",
  itemsHeadingId: "steps-heading",
  overallLabel: "সম্পন্ন ধাপ",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি ধাপ সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `ধাপ ${pad(number)} · SDET ROADMAP`,
  itemNav: "SDET Roadmap-এর ধাপসমূহ",
  allItems: "সব ধাপ",
  previousItem: "আগের ধাপ",
  nextItem: "পরের ধাপ",
  markDone: "এই ধাপ সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "SDET Roadmap-এর ধাপসমূহ",
  sidebarItemLabel: (number) => `ধাপ ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "SDET Roadmap",
  crossTo: "SDET Roadmap",
};
