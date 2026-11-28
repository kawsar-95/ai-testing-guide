import type { VisualDef } from "./defs.ts";

/** The text of the caching visual. */
export const DEF: VisualDef = {
  id: "caching",
  title: { en: "Cache-aside: hit or miss", bn: "Cache-aside: hit নাকি miss" },
  promise: {
    en: "Follow one read through Redis, then move the hit rate and watch the average read time.",
    bn: "একটি read-এর পথ Redis দিয়ে অনুসরণ করুন, তারপর hit rate বদলে গড় read time দেখুন।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Ask the cache first", bn: "আগে cache-কে জিজ্ঞেস করুন" },
      body: {
        en: "In the cache-aside pattern, the app first looks for the data in Redis, before it goes to the database.",
        bn: "Cache-aside pattern-এ app database-এ যাওয়ার আগে প্রথমে Redis-এ data খোঁজে।",
      },
    },
    {
      title: { en: "Cache hit", bn: "ক্যাশ হিট (cache hit)" },
      body: {
        en: "The data is in the cache. This is a cache hit. The app returns it at once, with no trip to the database. The times in this picture are example numbers.",
        bn: "Data cache-এ আছে। একে বলে cache hit। App সঙ্গে সঙ্গে সেটি ফেরত দেয়, database পর্যন্ত যেতে হয় না। এই ছবির সময়গুলো উদাহরণের সংখ্যা।",
      },
    },
    {
      title: { en: "Cache miss", bn: "ক্যাশ মিস (cache miss)" },
      body: {
        en: "The data is not in the cache. This is a cache miss. The app must read it from the database, so the read takes longer.",
        bn: "Data cache-এ নেই। একে বলে cache miss। App-কে database থেকে পড়তে হয়, তাই read-এ বেশি সময় লাগে।",
      },
    },
    {
      title: { en: "Save a copy", bn: "একটি copy রাখুন" },
      body: {
        en: "After a miss, the app saves a copy in Redis with a TTL, then returns the data. The next read of the same data is a hit.",
        bn: "Miss-এর পরে app Redis-এ TTL সহ একটি copy রাখে, তারপর data ফেরত দেয়। একই data-র পরের read হয় hit।",
      },
    },
    {
      title: { en: "Move the hit rate", bn: "Hit rate বদলান" },
      body: {
        en: "The hit rate is the share of reads that are hits. Move the slider. More hits mean fewer trips to the database and a lower average read time.",
        bn: "Hit rate হলো কতগুলো read hit, তার অনুপাত। Slider সরান। hit বেশি হলে database-এ যাওয়া কমে এবং গড় read time কমে।",
      },
    },
    {
      title: { en: "Update the data", bn: "Data বদলান" },
      body: {
        en: "When the app changes data, it writes to the database first. Then it invalidates the cache item, so the old copy cannot be shown. The next read loads the new data.",
        bn: "App data বদলালে আগে database-এ লেখে। তারপর cache item invalidate করে, যাতে পুরোনো copy আর দেখানো না হয়। পরের read নতুন data লোড করে।",
      },
    },
    {
      title: { en: "Cold cache", bn: "ঠান্ডা ক্যাশ (cold cache)" },
      body: {
        en: "If the cache is cleared, every read is a miss until it fills again. The database gets all the load. A tester can send a burst of traffic and watch this.",
        bn: "Cache খালি করা হলে, আবার না ভরা পর্যন্ত প্রতিটি read হয় miss। Database-এর ওপর সব load পড়ে। Tester একসাথে অনেক traffic পাঠিয়ে এটি দেখতে পারেন।",
      },
    },
  ],
  recap: {
    en: "A hit comes from the cache and a miss goes to the database. A higher hit rate gives a lower average read time. After a change, the app must invalidate the old copy.",
    bn: "Hit আসে cache থেকে, আর miss যায় database-এ। Hit rate বেশি হলে গড় read time কমে। Data বদলের পরে app-কে পুরোনো copy invalidate করতে হয়।",
  },
};
