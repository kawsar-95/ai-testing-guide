import type { Bn } from "../bn.ts";
import type { ARCHITECTURE_UI } from "../architecture/ui.ts";

const pad = (number: number) => String(number).padStart(2, "0");

/** The Bangla twin of ARCHITECTURE_UI. `description` is metadata only, so it stays English. */
export const ARCHITECTURE_UI_BN: Bn<typeof ARCHITECTURE_UI> = {
  siteTitle: "System Architecture Foundations",
  description:
    "The building blocks of system architecture in plain words: scaling, load balancers, caches, queues, idempotency, and monitoring.",
  eyebrow: (lessons) => `ARCHITECTURE · ${lessons}টি টপিক + প্র্যাকটিস`,
  heading: "System Architecture Foundations",
  lede: "কোড একটা ফিচার বানায়। আর্কিটেকচার সেই ফিচারকে বাঁচিয়ে রাখে, যখন 10,000 ইউজার আসে, একটা সার্ভার বন্ধ হয়ে যায়, বা একটা পেমেন্ট কলব্যাক দুইবার আসে। প্রতিটা টপিকে সময় লাগে প্রায় 5 মিনিট: একটা আইডিয়া, একটা ডায়াগ্রাম, একটা বাস্তব উদাহরণ, সাধারণ ভুল, আর একজন টেস্টার কী যাচাই করতে পারেন।",
  sourceNote:
    "টপিকগুলো মালিকের নোট আর ডায়াগ্রাম অনুসরণ করে। প্রতিটা পেজের প্রতিটা তথ্য একটা অফিশিয়াল সোর্সে লিংক করা, যেমন AWS, Google Cloud, Redis, MDN বা IETF RFC।",
  itemsHeading: "টপিকসমূহ",
  itemsHeadingId: "topics-heading",
  overallLabel: "সম্পন্ন টপিক",
  summaryText: (done, total) => `${total}টির মধ্যে ${done}টি টপিক সম্পন্ন`,
  practiceSummaryText: (done, total) => `${total}টির মধ্যে ${done}টি প্রশ্ন সম্পন্ন`,
  practiceLabel: "সম্পন্ন প্র্যাকটিস প্রশ্ন",
  percentText: (value) => `${value}%`,

  itemEyebrow: (number) => `টপিক ${pad(number)} · ARCHITECTURE`,
  practiceEyebrow: "প্র্যাকটিস · ARCHITECTURE",
  itemNav: "Architecture-এর টপিকসমূহ",
  allItems: "সব টপিক",
  previousItem: "আগের টপিক",
  nextItem: "পরের টপিক",
  markDone: "এই টপিক সম্পন্ন হিসেবে চিহ্নিত করুন",
  markedDone: "সম্পন্ন। বাতিল করতে ক্লিক করুন",

  practiceTopicLink: "টপিক",
  showAnswer: "মডেল উত্তর দেখুন",
  practiceDoneLabel: (n) => `প্রশ্ন ${n} সম্পন্ন`,
  questionLabel: (n) => `Q${pad(n)}`,

  sidebarNav: "Architecture-এর টপিকসমূহ",
  sidebarItemLabel: (number) => `টপিক ${pad(number)}`,
  sidebarPracticeLabel: "প্র্যাকটিস",
  sidebarDone: "সম্পন্ন",
  headerLink: "Architecture",
  crossTo: "Architecture",
};
