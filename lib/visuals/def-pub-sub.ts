import type { VisualDef } from "./defs.ts";

/** The text of the pub-sub visual. */
export const DEF: VisualDef = {
  id: "pub-sub",
  title: { en: "Publish-subscribe: one event, many copies", bn: "পাবলিশ-সাবস্ক্রাইব: একটি ইভেন্ট, অনেক কপি" },
  promise: {
    en: "Publish one event, count the copies, then lose an ack and see a duplicate.",
    bn: "একটি ইভেন্ট পাবলিশ করুন, কপি গুনুন, তারপর একটি অ্যাক হারিয়ে ডুপ্লিকেট দেখুন।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Publish an event", bn: "একটি ইভেন্ট পাবলিশ করুন" },
      body: {
        en: "An exam platform publishes the event \"answer submitted\" to a topic. The publisher does not know who will receive it.",
        bn: "একটি পরীক্ষার প্ল্যাটফর্ম একটি টপিকে \"answer submitted\" ইভেন্ট পাবলিশ করে। কে এটি পাবে, তা পাবলিশার জানে না।",
      },
    },
    {
      title: { en: "Subscriptions listen", bn: "সাবস্ক্রিপশন শোনে" },
      body: {
        en: "Three subscriptions listen to the topic: grading, a confirmation email, and analytics. Each one shows interest in this topic.",
        bn: "তিনটি সাবস্ক্রিপশন টপিক শোনে: গ্রেডিং, একটি কনফার্মেশন ইমেইল এবং অ্যানালিটিক্স। প্রতিটি এই টপিকে আগ্রহ দেখায়।",
      },
    },
    {
      title: { en: "Fan-out", bn: "ফ্যান-আউট (fan-out)" },
      body: {
        en: "The publisher sent one message. Each subscription gets its own copy, so 3 copies exist. Each subscriber sends an ack after it processes its copy.",
        bn: "পাবলিশার একটি মেসেজ পাঠিয়েছে। প্রতিটি সাবস্ক্রিপশন নিজস্ব কপি পায়, তাই ৩টি কপি আছে। প্রসেস করার পর প্রতিটি সাবস্ক্রাইবার একটি অ্যাক পাঠায়।",
      },
    },
    {
      title: { en: "One service is down", bn: "একটি সার্ভিস বন্ধ" },
      body: {
        en: "The email service is down. Grading still works, and so does analytics. One subscriber does not stop the others.",
        bn: "ইমেইল সার্ভিস বন্ধ। গ্রেডিং এখনও কাজ করে, অ্যানালিটিক্সও করে। একজন সাবস্ক্রাইবার অন্যদের আটকায় না।",
      },
    },
    {
      title: { en: "A lost ack", bn: "একটি অ্যাক হারাল" },
      body: {
        en: "The email subscriber processed its copy, but the ack was lost. The message arrives again. Now the email subscriber got the event twice and must not send two emails.",
        bn: "ইমেইল সাবস্ক্রাইবার তার কপি প্রসেস করেছে, কিন্তু অ্যাক হারিয়ে গেছে। মেসেজ আবার আসে। এখন ইমেইল সাবস্ক্রাইবার ইভেন্টটি দুইবার পেয়েছে, আর তাকে দুটি ইমেইল পাঠালে চলবে না।",
      },
    },
    {
      title: { en: "Without a broker", bn: "ব্রোকার ছাড়া" },
      body: {
        en: "Without a broker, the sender must know every consumer and deliver to each one. A plain queue links a sender to one consumer, so many consumers need many queues.",
        bn: "ব্রোকার ছাড়া সেন্ডারকে প্রতিটি কনজিউমার চিনতে হয় এবং প্রতিটির কাছে পাঠাতে হয়। একটি সাধারণ কিউ একজন সেন্ডারকে একজন কনজিউমারের সাথে যুক্ত করে, তাই অনেক কনজিউমার থাকলে অনেক কিউ লাগে।",
      },
    },
    {
      title: { en: "Add subscriptions", bn: "সাবস্ক্রিপশন যোগ করুন" },
      body: {
        en: "Move the slider. With a topic the publisher sends 1 message, whatever the number of subscriptions. Direct sending grows with each consumer, and each new one changes the sender.",
        bn: "স্লাইডার সরান। টপিক থাকলে সাবস্ক্রিপশন যতই হোক, পাবলিশার ১টি মেসেজ পাঠায়। সরাসরি পাঠালে প্রতিটি কনজিউমারের সাথে সংখ্যা বাড়ে, আর প্রতিটি নতুনের জন্য সেন্ডার বদলাতে হয়।",
      },
    },
  ],
  recap: {
    en: "The example is the tutorial's own: an exam platform with three subscriptions. The numbers come from its rules, not from a real system.",
    bn: "উদাহরণটি টিউটোরিয়ালের নিজের: তিনটি সাবস্ক্রিপশনসহ একটি পরীক্ষার প্ল্যাটফর্ম। সংখ্যাগুলো এর নিয়ম থেকে এসেছে, কোনো আসল সিস্টেম থেকে নয়।",
  },
};
