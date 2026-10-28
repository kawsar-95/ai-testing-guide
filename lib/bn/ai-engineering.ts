import type { Bn } from "../bn.ts";
import type { AI_ENGINEERING_UI } from "../ai-engineering/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AI_ENGINEERING_UI. `description` is metadata only, so it stays English. */
export const AI_ENGINEERING_UI_BN: Bn<typeof AI_ENGINEERING_UI> = {
  siteTitle: "AI Engineering",
  description:
    "What AI engineering really involves, from prompts and RAG to evals, guardrails, observability, and system design, for testers.",
  eyebrow: (topics) => `AI ENGINEERING · ${topics}টি টপিক`,
  heading: "AI Engineering",
  lede: "মডেল কল করা হলো আইসবার্গের শুধু চূড়া। প্রথমে নতুনরা যে 8টি টপিক দেখে সেগুলো শিখুন, তারপর পানির নিচের 20টি টপিক, যেগুলো প্রোডাকশনে একটা AI সিস্টেম চালায়। প্রতিটা টপিকে আছে একজন টেস্টার কী চেক করতে পারে।",
  sourceNote:
    "টপিকের তালিকা Jean Lee-র \"The AI Engineering Iceberg\" অনুসরণ করে। লেখাগুলো এই টিউটোরিয়ালের নিজের। প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · AI ENGINEERING`,
  itemNav: "AI Engineering-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "AI Engineering-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "AI Engineering",
  crossTo: "AI Engineering",
};
