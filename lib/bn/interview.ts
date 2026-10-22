import type { Bn } from "../bn.ts";
import type { INTERVIEW_UI } from "../interview.ts";

/** The Bangla twin of INTERVIEW_UI. `description` is metadata only, so it stays English. Each card `href` copies the English value. */
export const INTERVIEW_UI_BN: Bn<typeof INTERVIEW_UI> = {
  navLabel: "ইন্টারভিউ",
  siteTitle: "ইন্টারভিউ",
  description:
    "Interview questions for testers: the manual testing questions, the system design practice questions, and how to answer a design interview.",
  eyebrow: "ইন্টারভিউ",
  heading: "ইন্টারভিউ প্রস্তুতি",
  lede: "প্রস্তুতির জন্য এই সাইটে তিনটি জায়গা আছে। প্রথমে টেস্টিংয়ের প্রশ্নগুলো দিয়ে শুরু করুন, তারপর সিস্টেম ডিজাইন প্র্যাকটিস করুন।",
  cards: [
    {
      title: "টেস্টিং ইন্টারভিউ প্রশ্ন",
      text: "Fundamentals-এর 11 নম্বর চ্যাপ্টার: ম্যানুয়াল টেস্টিং নিয়ে 50টি প্রশ্ন, উত্তরসহ।",
      href: "/fundamentals/interview/",
    },
    {
      title: "সিস্টেম ডিজাইন প্র্যাকটিস",
      text: "Architecture মডিউলের প্র্যাকটিস প্রশ্ন, প্রতিটার সঙ্গে একটা মডেল উত্তর।",
      href: "/architecture/practice/",
    },
    {
      title: "ডিজাইন ইন্টারভিউয়ে কীভাবে উত্তর দেবেন",
      text: "System Design Course-এর একটা পেজ, যেখানে ডিজাইন ইন্টারভিউয়ের ধাপগুলো বলা আছে।",
      href: "/course/interview-intro/",
    },
  ],
};
