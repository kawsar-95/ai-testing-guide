import type { VisualDef } from "./defs.ts";

/** The text of the sharding visual. */
export const DEF: VisualDef = {
  id: "sharding",
  title: { en: "Sharding and the shard key", bn: "শার্ডিং আর শার্ড কী (shard key)" },
  promise: {
    en: "Send the same 24 test runs to 4 shards with two different keys, and see which shard gets the load.",
    bn: "একই ২৪টি টেস্ট রান দুটি আলাদা কী দিয়ে ৪টি শার্ডে পাঠান, আর দেখুন কোন শার্ডে লোড পড়ে।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "One full database", bn: "একটাই ভরা ডেটাবেস" },
      body: {
        en: "A learning platform stores the results of test runs on one server. One server has limits, so the team wants to split the data.",
        bn: "একটি লার্নিং প্ল্যাটফর্ম টেস্ট রানের ফলাফল একটি সার্ভারে রাখে। একটি সার্ভারের সীমা আছে, তাই দল ডেটা ভাগ করতে চায়।",
      },
    },
    {
      title: { en: "Choose a shard key", bn: "শার্ড কী বাছুন" },
      body: {
        en: "The shard key is the attribute that decides which shard holds a row. Pick the run date (ranged) or a hash of the run ID, and watch what changes.",
        bn: "শার্ড কী হলো সেই অ্যাট্রিবিউট, যা ঠিক করে কোন শার্ড কোন সারি (row) রাখবে। রান ডেট (ranged) বা রান আইডির হ্যাশ বাছুন, আর দেখুন কী বদলায়।",
      },
    },
    {
      title: { en: "Route the rows", bn: "সারিগুলো পাঠান" },
      body: {
        en: "Each new run goes to the shard its key points to. Switch the key and the same 24 rows land on different shards.",
        bn: "প্রতিটি নতুন রান সেই শার্ডে যায়, যেদিকে তার কী দেখায়। কী বদলালে একই ২৪টি সারি অন্য শার্ডে পড়ে।",
      },
    },
    {
      title: { en: "A hot shard appears", bn: "একটি হট শার্ড দেখা দেয়" },
      body: {
        en: "With the run date, every new run has the newest date, so every write goes to one shard and the others sit idle. A hash of the run ID spreads the writes.",
        bn: "রান ডেট কী হলে প্রতিটি নতুন রানের তারিখ সবচেয়ে নতুন, তাই সব রাইট এক শার্ডে যায়, বাকিগুলো বসে থাকে। রান আইডির হ্যাশ রাইটগুলো ছড়িয়ে দেয়।",
      },
    },
    {
      title: { en: "Ask for runs this week", bn: "এই সপ্তাহের রান চাওয়া" },
      body: {
        en: "A report of all runs this week is a query. With the date key, one shard has them. With the hash key, the router has to ask every shard.",
        bn: "'এই সপ্তাহের সব রান'-এর রিপোর্ট একটি কোয়েরি। ডেট কী হলে একটি শার্ডেই সেগুলো আছে। হ্যাশ কী হলে রাউটারকে প্রতিটি শার্ডকে জিজ্ঞেস করতে হয়।",
      },
    },
    {
      title: { en: "Neither key is free", bn: "কোনো কী-ই বিনা মূল্যে নয়" },
      body: {
        en: "The date key reads a week from one shard but sends all writes to one shard. The hash key spreads writes but asks every shard for a week. The team picks the key that fits its main queries.",
        bn: "ডেট কী এক শার্ড থেকে এক সপ্তাহ পড়ে, কিন্তু সব রাইট এক শার্ডে পাঠায়। হ্যাশ কী রাইট ছড়ায়, কিন্তু এক সপ্তাহের জন্য প্রতিটি শার্ডকে জিজ্ঞেস করে। দল তার প্রধান কোয়েরির সাথে মানানসই কী বাছে।",
      },
    },
  ],
  recap: {
    en: "The same 24 sample runs and 4 shards were used in every step. The numbers come from that sample, not from a real system.",
    bn: "প্রতিটি ধাপে একই ২৪টি নমুনা রান আর ৪টি শার্ড ব্যবহার হয়েছে। সংখ্যাগুলো এই নমুনা থেকে এসেছে, কোনো আসল সিস্টেম থেকে নয়।",
  },
};
