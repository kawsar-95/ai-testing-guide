import type { Bn } from "../bn.ts";
import type { AI_ML_TESTING_UI } from "../ai-ml-testing/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AI_ML_TESTING_UI. `description` is metadata only, so it stays English. */
export const AI_ML_TESTING_UI_BN: Bn<typeof AI_ML_TESTING_UI> = {
  siteTitle: "AI/ML Testing",
  description:
    "Testing AI and ML systems for QA engineers, SDETs, and test leads: LLM behavior, prompt testing, automated evals, hallucination detection, RAG and agent testing, red teaming, observability, and CI/CD eval gates.",
  eyebrow: (topics) => `AI/ML TESTING · ${topics}টি টপিক`,
  heading: "AI ও ML টেস্টিং",
  lede:
    "একটা AI সিস্টেমের একটাই সঠিক উত্তর নেই, তাই টেস্টার শুধু আউটপুট দেখে চেক করতে পারেন না। এই মডিউলে পুরো কাজটা আছে: মডেল আসলে কী করছে, কীভাবে ইচ্ছাকৃতভাবে ভাঙবেন, কীভাবে স্বয়ংক্রিয়ভাবে স্কোর দেবেন, আর স্কোর যেন কমে না পড়ে।",
  sourceNote:
    "টপিকগুলো AI & ML Testing Professional Course (QodeBench — Journey to Automation)-এর সিলেবাস অনুযায়ী: ১৭টি কোর্স মডিউল আর ৪৭টি সেশন, আগে Phase 1 Foundations তারপর Phase 2 Mastery। প্রতিটি পেজের লেখা টিউটোরিয়ালের নিজস্ব। প্রতিটি তথ্য একটা অফিসিয়াল সোর্সে লিংক করা, যেমন টুলের ডকুমেন্টেশন, OWASP, NIST, বা মূল পেপার।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · AI/ML TESTING`,
  itemNav: "AI/ML Testing-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "AI/ML Testing-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "AI/ML Testing",
  crossTo: "AI/ML Testing",
};
