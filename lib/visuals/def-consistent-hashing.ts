import type { VisualDef } from "./defs.ts";

/** The text of the consistent-hashing visual. */
export const DEF: VisualDef = {
  id: "consistent-hashing",
  title: { en: "Consistent hashing on a ring", bn: "রিংয়ে কনসিসটেন্ট হ্যাশিং" },
  promise: {
    en: "Add and remove a server, and count how many keys have to move.",
    bn: "একটা সার্ভার যোগ করুন বা সরান, আর গুনুন কয়টা কী-কে সরতে হয়।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Put keys on a ring", bn: "কী-গুলো রিংয়ে বসান" },
      body: {
        en: "A hash function turns each key, such as a user id, into a number. Picture the numbers around a circle. Every dot here is one key.",
        bn: "হ্যাশ ফাংশন প্রতিটি কী (যেমন ইউজার আইডি)-কে একটা সংখ্যায় বদলায়। সংখ্যাগুলো একটা বৃত্তের গায়ে বসানো আছে ভাবুন। এখানে প্রতিটি বিন্দু একটি কী।",
      },
    },
    {
      title: { en: "Place the servers", bn: "সার্ভারগুলো বসান" },
      body: {
        en: "Servers get a place on the same circle. Each server sits where its own name hashes to.",
        bn: "সার্ভারগুলোও একই বৃত্তে জায়গা পায়। প্রতিটি সার্ভার বসে ঠিক সেখানে, যেখানে তার নামের হ্যাশ পড়ে।",
      },
    },
    {
      title: { en: "Walk clockwise", bn: "ঘড়ির কাঁটার দিকে হাঁটুন" },
      body: {
        en: "A key belongs to the first server it meets going clockwise. Each color shows which server holds the key.",
        bn: "একটি কী ঘড়ির কাঁটার দিকে এগিয়ে যে সার্ভারকে প্রথম পায়, সেটাই তার মালিক। প্রতিটি রং দেখায় কোন সার্ভার কোন কী রাখে।",
      },
    },
    {
      title: { en: "Add a server", bn: "একটা সার্ভার যোগ করুন" },
      body: {
        en: "Server D joins. It takes only the keys between its left neighbor and itself. Every other key stays where it was.",
        bn: "সার্ভার D যোগ হলো। সে শুধু তার বাঁ পাশের প্রতিবেশী আর নিজের মাঝের কী-গুলো নেয়। বাকি সব কী নিজের জায়গায় থাকে।",
      },
    },
    {
      title: { en: "Compare with modulo", bn: "মডুলোর সাথে তুলনা করুন" },
      body: {
        en: "With the plain rule hash mod N, going from 3 to 4 servers sends most keys to a new server. Switch the rule and watch the numbers.",
        bn: "সাধারণ নিয়ম 'হ্যাশ মডুলো N'-এ সার্ভার ৩ থেকে ৪ হলে বেশিরভাগ কী নতুন সার্ভারে চলে যায়। নিয়ম বদলে সংখ্যাগুলো দেখুন।",
      },
    },
    {
      title: { en: "Remove a server", bn: "একটা সার্ভার সরান" },
      body: {
        en: "If B leaves, only the keys of B move. Each goes to the next server clockwise.",
        bn: "B চলে গেলে শুধু B-র কী-গুলো সরে যায়। প্রতিটি যায় ঘড়ির কাঁটার দিকের পরের সার্ভারে।",
      },
    },
    {
      title: { en: "Add virtual nodes", bn: "ভার্চুয়াল নোড যোগ করুন" },
      body: {
        en: "Each server takes several spots on the ring, called virtual nodes. More spots spread the keys more evenly between servers.",
        bn: "প্রতিটি সার্ভার রিংয়ে কয়েকটি জায়গা নেয়, যাকে ভার্চুয়াল নোড (virtual node) বলে। বেশি জায়গা থাকলে সার্ভারগুলোর মধ্যে কী আরও সমানভাবে ভাগ হয়।",
      },
    },
  ],
  recap: {
    en: "The same 30 sample keys were used in every step. The numbers come from that sample, not from a real system.",
    bn: "প্রতিটি ধাপে একই ৩০টি নমুনা কী ব্যবহার হয়েছে। সংখ্যাগুলো এই নমুনা থেকে এসেছে, কোনো আসল সিস্টেম থেকে নয়।",
  },
};
