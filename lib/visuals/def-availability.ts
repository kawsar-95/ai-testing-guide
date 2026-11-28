import type { VisualDef } from "./defs.ts";

/** The text of the availability visual. */
export const DEF: VisualDef = {
  id: "availability",
  title: { en: "From nines to minutes of downtime", bn: "নাইন থেকে ডাউনটাইমের মিনিট" },
  promise: {
    en: "Slide the number of nines and see how many minutes of downtime a target allows.",
    bn: "নাইনের সংখ্যা সরান, আর দেখুন একটি টার্গেট কত মিনিট ডাউনটাইম দেয়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Is the door open?", bn: "দরজা কি খোলা?" },
      body: {
        en: "Availability is how much of the time a service works for its users. Here the bar is one year. Green is time up. The thin red sliver is time down.",
        bn: "অ্যাভেইলেবিলিটি (availability) হলো একটি সার্ভিস তার ইউজারদের জন্য কত সময় কাজ করে। এখানে বারটি এক বছর। সবুজ মানে চালু থাকার সময়। সরু লাল অংশ মানে বন্ধ থাকার সময়।",
      },
    },
    {
      title: { en: "Turn the target into minutes", bn: "টার্গেটকে মিনিটে বদলান" },
      body: {
        en: "A year has 525,600 minutes. The downtime a target allows is 525,600 × (1 − target). Move the slider and read the year, month and day.",
        bn: "এক বছরে 525,600 মিনিট। একটি টার্গেট যত ডাউনটাইম দেয় তা হলো 525,600 × (1 − টার্গেট)। স্লাইডার সরান আর বছর, মাস ও দিনের হিসাব দেখুন।",
      },
    },
    {
      title: { en: "Count the nines", bn: "নাইন গুনুন" },
      body: {
        en: "Each extra nine is a tenfold improvement toward 100%. The allowed downtime drops to one tenth. Bar lengths here use a log scale, so each nine is one equal step.",
        bn: "প্রতিটি বাড়তি নাইন মানে 100%-এর দিকে দশগুণ উন্নতি। অনুমোদিত ডাউনটাইম দশ ভাগের এক ভাগে নামে। এখানে বারের দৈর্ঘ্য লগ স্কেলে, তাই প্রতিটি নাইন সমান এক ধাপ।",
      },
    },
    {
      title: { en: "Error budget", bn: "এরর বাজেট" },
      body: {
        en: "The quiz SLO is 99.9% of submissions succeed. The error budget is the gap between the SLO and 100%: 0.1%. Out of 10,000 submissions, that is 10 that may fail.",
        bn: "কুইজের SLO হলো 99.9% সাবমিশন সফল হবে। এরর বাজেট (error budget) হলো SLO ও 100%-এর মধ্যে ফাঁক: 0.1%। 10,000 সাবমিশনের মধ্যে তা 10টি, যেগুলো ব্যর্থ হতে পারে।",
      },
    },
    {
      title: { en: "A real SLA", bn: "একটি বাস্তব SLA" },
      body: {
        en: "For EC2, Amazon promises at least 99.5% for a single instance. For instances in two or more availability zones of a region, it promises at least 99.99%. See what each allows in a month.",
        bn: "EC2-এর জন্য Amazon একটি একক ইনস্ট্যান্সে অন্তত 99.5% প্রতিশ্রুতি দেয়। একটি রিজিয়নের দুই বা ততোধিক অ্যাভেইলেবিলিটি জোনে থাকা ইনস্ট্যান্সে অন্তত 99.99%। প্রতিটি এক মাসে কত দেয়, দেখুন।",
      },
    },
    {
      title: { en: "Miss it, get a credit", bn: "মিস করলে ক্রেডিট" },
      body: {
        en: "If the region-level promise is missed, you get a service credit, not a refund. Slide the month's uptime. Below 99.99% but at least 99.0% gives 10%.",
        bn: "রিজিয়ন-স্তরের প্রতিশ্রুতি মিস হলে আপনি সার্ভিস ক্রেডিট পান, রিফান্ড নয়। মাসের আপটাইম সরান। 99.99%-এর নিচে কিন্তু অন্তত 99.0% হলে 10% পান।",
      },
    },
  ],
  recap: {
    en: "Turn the nines into minutes before you accept a target: 99.9% allows 525.6 minutes a year, 99.99% allows 52.56, 99.999% allows 5.256. Then ask if the business can live with that downtime.",
    bn: "টার্গেট মেনে নেওয়ার আগে নাইনকে মিনিটে বদলান: 99.9% বছরে 525.6 মিনিট, 99.99% বছরে 52.56 মিনিট, 99.999% বছরে 5.256 মিনিট দেয়। তারপর জিজ্ঞেস করুন, ব্যবসা কি এই ডাউনটাইম সহ্য করতে পারবে।",
  },
};
