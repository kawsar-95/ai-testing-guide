import type { VisualDef } from "./defs.ts";

/** The text of the rate-limiting visual. */
export const DEF: VisualDef = {
  id: "rate-limiting",
  title: { en: "A token bucket and the 429", bn: "টোকেন বাকেট আর 429" },
  promise: {
    en: "Send a burst, watch the tokens run out, get 429, and see the tokens come back.",
    bn: "একঝাঁক request পাঠান, টোকেন ফুরানো দেখুন, 429 পান, আর টোকেন ফিরে আসা দেখুন।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "A bucket of tokens", bn: "টোকেনের একটি বাকেট" },
      body: {
        en: "The page's example: 3 requests in 5 minutes. Think of a bucket that holds 3 tokens. A token bucket allows short bursts, then refills at a steady rate.",
        bn: "পেজের উদাহরণ: 5 মিনিটে 3টি request। ভাবুন, একটি বাকেটে 3টি টোকেন ধরে। টোকেন বাকেট অল্প সময়ের একঝাঁক request মেনে নেয়, তারপর স্থির হারে আবার ভরে।",
      },
    },
    {
      title: { en: "A burst arrives", bn: "একঝাঁক request আসে" },
      body: {
        en: "A client sends 5 requests at once. The bucket has only 3 tokens.",
        bn: "একজন client একসাথে 5টি request পাঠায়। বাকেটে মাত্র 3টি টোকেন আছে।",
      },
    },
    {
      title: { en: "Each request takes a token", bn: "প্রতিটি request একটি টোকেন নেয়" },
      body: {
        en: "The first 3 requests each take one token and pass. The bucket is now empty.",
        bn: "প্রথম 3টি request প্রত্যেকে একটি করে টোকেন নেয় এবং pass করে। বাকেট এখন খালি।",
      },
    },
    {
      title: { en: "No token, so 429", bn: "টোকেন নেই, তাই 429" },
      body: {
        en: "The 4th and 5th requests find no token. The server answers HTTP 429 Too Many Requests. Retry-After says how long to wait for the next token.",
        bn: "4র্থ ও 5ম request কোনো টোকেন পায় না। server উত্তর দেয় HTTP 429 Too Many Requests। Retry-After বলে পরের টোকেনের জন্য কতক্ষণ অপেক্ষা করতে হবে।",
      },
    },
    {
      title: { en: "A token comes back", bn: "একটি টোকেন ফিরে আসে" },
      body: {
        en: "Tokens refill at a steady rate: 3 for each 5 minutes. After the Retry-After wait, one token is back, so the next request can pass.",
        bn: "টোকেন স্থির হারে ফিরে আসে: প্রতি 5 মিনিটে 3টি। Retry-After-এর অপেক্ষার পর একটি টোকেন ফিরে আসে, তাই পরের request pass করতে পারে।",
      },
    },
    {
      title: { en: "The bucket fills again", bn: "বাকেট আবার ভরে যায়" },
      body: {
        en: "After a full window with no requests, the bucket is full again. The refill never goes above the limit of 3 tokens.",
        bn: "পুরো একটি window কোনো request না এলে বাকেট আবার ভরে যায়। ভরা কখনও 3 টোকেনের limit পেরোয় না।",
      },
    },
    {
      title: { en: "Change the limit", bn: "limit বদলান" },
      body: {
        en: "Move the slider. A bigger limit holds more tokens, so more of the burst passes and refill is faster. A tester sends exactly the limit, then one more.",
        bn: "slider সরান। বড় limit মানে বাকেটে বেশি টোকেন, তাই burst-এর বেশি request pass করে আর টোকেন দ্রুত ফেরে। tester ঠিক limit পরিমাণ request পাঠায়, তারপর আরও একটি।",
      },
    },
  ],
  recap: {
    en: "A rate limit is a window and a count. A token bucket allows a burst up to the limit, answers 429 when the tokens are gone, and refills at a steady rate.",
    bn: "rate limit হলো একটি window আর একটি সংখ্যা। টোকেন বাকেট limit পর্যন্ত burst মেনে নেয়, টোকেন ফুরালে 429 দেয়, আর স্থির হারে আবার ভরে।",
  },
};
