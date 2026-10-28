import type { Bn } from "../bn.ts";
import type { AI_CONCEPTS_UI } from "../ai-concepts/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of AI_CONCEPTS_UI. `description` is metadata only, so it stays English. */
export const AI_CONCEPTS_UI_BN: Bn<typeof AI_CONCEPTS_UI> = {
  siteTitle: "AI Concepts for 2027",
  description:
    "Nine AI engineering ideas in plain words for testers: agent loops, MCP, subagents, gateways, cost, evals, guardrails, observability, and the harness.",
  eyebrow: (topics) => `AI CONCEPTS · ${topics}টি টপিক`,
  heading: "AI Concepts for 2027",
  lede: "নয়টি আইডিয়া, যা দেখায় বাস্তব প্রোডাক্টে AI agent কীভাবে কাজ করে, আর একজন টেস্টার সেগুলো কীভাবে যাচাই করতে পারেন। প্রতিটা টপিকে আছে আইডিয়া, কীভাবে কাজ করে, একটা উদাহরণ, সাধারণ ভুল, আর কী টেস্ট করবেন।",
  sourceNote:
    "টপিকের তালিকা একটা GenAI.works ইনফোগ্রাফিক (অক্টোবর 2026) অনুসরণ করে। লেখা টিউটোরিয়ালের নিজের, আর প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · AI CONCEPTS`,
  itemNav: "AI Concepts-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  sidebarNav: "AI Concepts-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarDone: "সম্পন্ন",
  headerLink: "AI Concepts",
  crossTo: "AI Concepts",
};
