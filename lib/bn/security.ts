import type { Bn } from "../bn.ts";
import type { SECURITY_UI } from "../security/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of SECURITY_UI. `description` is metadata only, so it stays English. */
export const SECURITY_UI_BN: Bn<typeof SECURITY_UI> = {
  siteTitle: "Security Testing and Penetration Testing",
  description:
    "Security testing for QA engineers and SDETs: the basics and a safe lab, network scanning and server hardening, web, API, and database flaws, AI-assisted testing, DevSecOps scans in CI/CD, cyber law, and a practice penetration test.",
  eyebrow: (topics) => `Security · ${topics}টি টপিক`,
  heading: "সিকিউরিটি টেস্টিং ও পেনিট্রেশন টেস্টিং",
  lede: "একজন পেনিট্রেশন টেস্টার একটা সিস্টেমে আসল আক্রমণকারীর মতো করেই আক্রমণ করেন, কিন্তু শুধু লিখিত অনুমতি নিয়ে এবং শুধু ঠিক করা scope-এর ভেতরে। এই টপিকগুলো একটা নিরাপদ প্র্যাকটিস ল্যাব থেকে শুরু করে রিপোর্টসহ একটা পুরো প্র্যাকটিস টেস্ট পর্যন্ত যায়।",
  sourceNote:
    "টপিকগুলো Road to SDET-এর \"Cyber Security and Penetration Testing with AI\" কোর্সের কারিকুলাম অনুযায়ী: কোর্সের ৮টি মডিউল, একই ক্রমে। প্রতিটা পেজের লেখা টিউটোরিয়ালের নিজের। প্রতিটা তথ্য একটা অফিসিয়াল সোর্সে লিংক করা, যেমন NIST, OWASP, টুলের নিজের ডকুমেন্টেশন, বা আইনের মূল পাঠ।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · Security`,
  itemNav: "Security Testing-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "Security Testing-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "Security Testing",
  crossTo: "Security Testing",
};
