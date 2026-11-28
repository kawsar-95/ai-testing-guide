import type { VisualDef } from "./defs.ts";

/** The text of the ACID visual. */
export const DEF: VisualDef = {
  id: "acid-base",
  title: { en: "A transfer that fails halfway", bn: "মাঝপথে ব্যর্থ হওয়া ট্রান্সফার" },
  promise: {
    en: "Ana sends 40 credits to Ben and the server fails. Switch the transaction on and off, and see where the credits go.",
    bn: "Ana, Ben-কে 40 ক্রেডিট পাঠায় আর সার্ভার ব্যর্থ হয়। ট্রানজেকশন চালু-বন্ধ করে দেখুন ক্রেডিট কোথায় যায়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Two accounts", bn: "দুটি অ্যাকাউন্ট" },
      body: {
        en: "A learning platform sells course credits. Ana has 100 credits and Ben has 20. Together they hold 120.",
        bn: "একটি লার্নিং প্ল্যাটফর্ম কোর্স ক্রেডিট বিক্রি করে। Ana-র আছে 100 ক্রেডিট, Ben-এর 20। দুজনের মোট 120।",
      },
    },
    {
      title: { en: "One payment, two updates", bn: "একটি পেমেন্ট, দুটি আপডেট" },
      body: {
        en: "Ana sends 40 to Ben. That needs two separate updates: remove 40 from Ana, then add 40 to Ben. A transaction groups them as one operation.",
        bn: "Ana, Ben-কে 40 পাঠায়। এর জন্য দুটি আলাদা আপডেট লাগে: Ana থেকে 40 কাটা, তারপর Ben-এ 40 যোগ করা। ট্রানজেকশন (transaction) এ দুটিকে একটি কাজ হিসেবে বাঁধে।",
      },
    },
    {
      title: { en: "The first update runs", bn: "প্রথম আপডেট চলে" },
      body: {
        en: "40 leave Ana. Without a transaction, anyone who looks now sees Ana at 60. With one, other sessions do not see this unfinished change.",
        bn: "Ana থেকে 40 কাটা হলো। ট্রানজেকশন ছাড়া এখন যে দেখবে সে Ana-কে 60 দেখবে। ট্রানজেকশন থাকলে অন্য সেশন এই অসমাপ্ত পরিবর্তন দেখে না।",
      },
    },
    {
      title: { en: "The server fails", bn: "সার্ভার ব্যর্থ হয়" },
      body: {
        en: "The server fails after the first step. The second update, adding 40 to Ben, never runs.",
        bn: "প্রথম ধাপের পর সার্ভার ব্যর্থ হয়। দ্বিতীয় আপডেট, অর্থাৎ Ben-এ 40 যোগ করা, আর চলে না।",
      },
    },
    {
      title: { en: "All or nothing", bn: "সব, নয়তো কিছুই না" },
      body: {
        en: "With a transaction, the database cancels it and Ana still has 100. Without one, Ana stays at 60 and Ben at 20: 40 credits are gone from the total.",
        bn: "ট্রানজেকশন থাকলে ডেটাবেস সেটি বাতিল করে, আর Ana-র তখনো 100 থাকে। না থাকলে Ana 60 আর Ben 20 থেকে যায়: মোট থেকে 40 ক্রেডিট হারিয়ে গেছে।",
      },
    },
    {
      title: { en: "When nothing fails", bn: "যখন কিছুই ব্যর্থ হয় না" },
      body: {
        en: "If both updates succeed, the transaction commits. Ana has 60 and Ben has 60. This is the same with or without a transaction. The difference shows only when something fails.",
        bn: "দুটি আপডেটই সফল হলে ট্রানজেকশন কমিট (commit) হয়। Ana-র 60, Ben-এর 60। ট্রানজেকশন থাকুক বা না থাকুক, ফল একই। পার্থক্য দেখা যায় শুধু কিছু ব্যর্থ হলে।",
      },
    },
  ],
  recap: {
    en: "Atomicity means all the steps happen, or none do. The numbers are the tutorial's own example, not a real system.",
    bn: "অ্যাটমিসিটি (Atomicity) মানে সব ধাপ ঘটে, অথবা একটিও ঘটে না। সংখ্যাগুলো টিউটোরিয়ালের নিজস্ব উদাহরণ, কোনো আসল সিস্টেমের নয়।",
  },
};
