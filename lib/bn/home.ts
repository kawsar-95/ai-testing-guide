import type { Bn } from "../bn.ts";
import type { HOME_UI } from "../ui.ts";

/** The Bangla twin of HOME_UI. `titleMark` is a product name and stays English. */
export const HOME_UI_BN: Bn<typeof HOME_UI> = {
  eyebrow: "AI দিয়ে সফটওয়্যার টেস্টিং · 2026",
  titleLine1: "সফটওয়্যার টেস্টিং",
  titleLine2Before: "শিখুন",
  titleMark: "Claude AI",
  sub: "QA ইঞ্জিনিয়ার ও SDET-দের জন্য হাতে-কলমে টিউটোরিয়াল: Claude Code ইনস্টল করুন, এটা কীভাবে কাজ করে শিখুন, কনফিগার ও এক্সটেন্ড করুন, আর CI ও ব্রাউজারে টেস্টিং অটোমেট করুন। তারপর বাগ খোঁজা থেকে দ্বিতীয় ফিক্স PR পর্যন্ত একটা সত্যিকারের QA প্রজেক্ট অনুসরণ করুন।",
  startReading: "পড়া শুরু করুন",
  seeAll: "সব পর্ব দেখুন",
  startHere: "এখান থেকে শুরু",
  step: (n) => `ধাপ ${n}`,
  whyEyebrow: "কেন এই গাইড",
  whyTitle: "হাতে-কলমে শিখুন, সোর্সসহ",
  whySub: "ছোট ছোট পর্ব, সত্যিকারের কমান্ড, আর প্রতিটা তথ্যের সোর্স।",
  courseEyebrow: "কোর্সের কাঠামো",
  courseTitle: "ছয়টি টিউটোরিয়াল গ্রুপ ও ছয়টি মডিউল",
  courseSub:
    "টিউটোরিয়াল ক্রমানুসারে পড়ুন, তারপর Linux, টেস্টিং ফান্ডামেন্টালস, সিস্টেম ডিজাইন, আর্কিটেকচার, System Design Course, k6 পারফরম্যান্স টেস্টিং বা AI Concepts-এর মডিউল খুলুন।",
  cardCount: (n) => `${n}টি পেজ`,
};

/** The Bangla twin of WHY_ITEMS, in the same order. The icons stay in lib/home.ts. */
export const WHY_ITEMS_BN: readonly { title: string; text: string }[] = [
  { title: "হাতে-কলমে", text: "প্রতিটা পর্বে সত্যিকারের কমান্ড, প্রম্পট ও কনফিগ ফাইল আছে। আপনি কপি করে চালাতে পারবেন।" },
  { title: "প্রতিটা দাবির সোর্স আছে", text: "ভার্সন, কমান্ড, ফ্ল্যাগ ও সীমার লিংক অফিসিয়াল ডকসে যায়। প্রতিটা পেজে তার সোর্স তালিকা আছে।" },
  { title: "তিনটি ভয়েস", text: "প্রতিটা সেকশন টেকনিক্যাল English-এ, সহজ English-এ বা বাংলায় পড়ুন। একটা ক্লিকে সব সেকশন বদলে যায়।" },
  { title: "একটা সত্যিকারের QA প্রজেক্ট", text: "কেস স্টাডিতে বাগ খোঁজা থেকে দ্বিতীয় ফিক্স PR পর্যন্ত একটা প্রজেক্ট অনুসরণ করা হয়েছে।" },
  { title: "অফলাইনে চলে", text: "সাইটটি অ্যাপ হিসেবে ইনস্টল করুন। প্রথমবার দেখার পর নেটওয়ার্ক ছাড়াই প্রতিটা পেজ খোলে।" },
  { title: "ডার্ক ও লাইট", text: "সাইট আপনার ডিভাইসের থিম অনুসরণ করে। হেডারের বাটন দিয়ে থিম বদলানো যায়।" },
];

/** The Bangla twin of `groupLabel`. The group title stays English. Only the word PART/PARTS changes. */
export function groupLabelBn(title: string, count: number): string {
  return `${title.toUpperCase()} · ${count}টি পর্ব`;
}
