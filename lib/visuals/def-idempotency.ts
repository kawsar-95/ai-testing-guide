import type { VisualDef } from "./defs.ts";

/** The text of the idempotency visual. */
export const DEF: VisualDef = {
  id: "idempotency",
  title: { en: "A payment retry, with and without a key", bn: "পেমেন্ট রিট্রাই: কী (key) সহ ও ছাড়া" },
  promise: {
    en: "Retry a payment after a timeout, then switch the idempotency key on and off to see one charge or two.",
    bn: "টাইমআউটের পরে পেমেন্ট রিট্রাই করুন, তারপর idempotency key চালু-বন্ধ করে দেখুন চার্জ একবার হয় না দুবার।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "The client pays", bn: "ক্লায়েন্ট পেমেন্ট করে" },
      body: {
        en: "The client sends a request to create a payment. With the key switched on, it also sends a unique idempotency key.",
        bn: "ক্লায়েন্ট একটি পেমেন্ট তৈরির request পাঠায়। key চালু থাকলে সে সঙ্গে একটি unique idempotency key-ও পাঠায়।",
      },
    },
    {
      title: { en: "The reply is lost", bn: "উত্তর হারিয়ে যায়" },
      body: {
        en: "The server takes the payment and saves it. But the network loses the reply, so the client never sees it.",
        bn: "সার্ভার পেমেন্ট নেয় আর সংরক্ষণ করে। কিন্তু নেটওয়ার্কে উত্তরটি হারিয়ে যায়, তাই ক্লায়েন্ট তা দেখতে পায় না।",
      },
    },
    {
      title: { en: "The client retries", bn: "ক্লায়েন্ট রিট্রাই করে" },
      body: {
        en: "After a timeout the client does not know if the payment worked, so it sends the same request again.",
        bn: "টাইমআউটের পরে ক্লায়েন্ট জানে না পেমেন্ট হয়েছে কি না, তাই সে একই request আবার পাঠায়।",
      },
    },
    {
      title: { en: "One charge or two", bn: "চার্জ একবার না দুবার" },
      body: {
        en: "Without a key, the server cannot tell a retry from a new payment, so it charges again. With the key, it returns the saved reply. Press the button to switch.",
        bn: "key ছাড়া সার্ভার রিট্রাই আর নতুন পেমেন্টের পার্থক্য বুঝতে পারে না, তাই আবার চার্জ করে। key থাকলে সে সংরক্ষিত উত্তর ফেরত দেয়। বোতাম চেপে বদলান।",
      },
    },
    {
      title: { en: "Same key, other data", bn: "একই key, ভিন্ন data" },
      body: {
        en: "If the same key comes with a different amount, the server rejects it with an error. The charge count stays at one.",
        bn: "একই key ভিন্ন amount নিয়ে এলে সার্ভার error দিয়ে তা reject করে। চার্জের সংখ্যা একটিই থাকে।",
      },
    },
  ],
  recap: {
    en: "A retry after a timeout is normal. Without an idempotency key the retry charges twice. With the key, the server saves the first request and returns the saved reply, so there is one charge.",
    bn: "টাইমআউটের পরে রিট্রাই করা স্বাভাবিক। idempotency key ছাড়া রিট্রাইয়ে দুবার চার্জ হয়। key থাকলে সার্ভার প্রথম request সংরক্ষণ করে আর সংরক্ষিত উত্তর ফেরত দেয়, তাই চার্জ হয় একবার।",
  },
};
