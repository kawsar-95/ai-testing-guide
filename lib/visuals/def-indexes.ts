import type { VisualDef } from "./defs.ts";

/** The text of the indexes visual. */
export const DEF: VisualDef = {
  id: "indexes",
  title: { en: "A lookup with and without an index", bn: "ইনডেক্স সহ ও ইনডেক্স ছাড়া একটি লুকআপ" },
  promise: {
    en: "Look up one student in a big table, with and without an index, then see what the index costs on writes.",
    bn: "একটি বড় টেবিলে একজন স্টুডেন্টকে ইনডেক্স সহ ও ছাড়া খুঁজুন, তারপর দেখুন ইনডেক্সের রাইটে কী খরচ।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "One query, a few rows", bn: "একটি কুয়েরি, অল্প কয়েকটি রো" },
      body: {
        en: "The page's example: an enrollments table with 5 million rows. The query asks for student 42. Only a few rows match. The numbers here are the tutorial's own model.",
        bn: "পেজের উদাহরণ: 5 million রো-র একটি enrollments টেবিল। কুয়েরি স্টুডেন্ট 42 চায়। মাত্র অল্প কয়েকটি রো মেলে। এখানকার সংখ্যাগুলো টিউটোরিয়ালের নিজস্ব মডেল।",
      },
    },
    {
      title: { en: "Without an index: read every row", bn: "ইনডেক্স ছাড়া: প্রতিটি রো পড়া" },
      body: {
        en: "With no index, the database reads the table row by row and checks the condition on each one (a Seq Scan with a Filter). Move the slider: a bigger table means more work.",
        bn: "ইনডেক্স না থাকলে ডেটাবেস টেবিল রো ধরে ধরে পড়ে এবং প্রতিটিতে কন্ডিশন যাচাই করে (Filter সহ Seq Scan)। slider সরান: টেবিল বড় হলে কাজ বেশি।",
      },
    },
    {
      title: { en: "Create the index", bn: "ইনডেক্স তৈরি করুন" },
      body: {
        en: "CREATE INDEX adds an extra structure next to the table, like the list at the back of a textbook. The table itself does not change.",
        bn: "CREATE INDEX টেবিলের পাশে একটি বাড়তি কাঠামো যোগ করে, যেমন বইয়ের শেষের তালিকা। টেবিল নিজে বদলায় না।",
      },
    },
    {
      title: { en: "With an index: walk a few levels", bn: "ইনডেক্স সহ: কয়েকটি স্তর পার হওয়া" },
      body: {
        en: "The index is a B-tree. The database walks a few levels, then goes straight to the rows of student 42 (an Index Scan with an Index Cond). It does not look at all the rows.",
        bn: "ইনডেক্স একটি B-tree। ডেটাবেস কয়েকটি স্তর পার হয়ে সোজা স্টুডেন্ট 42-এর রো-তে যায় (Index Cond সহ Index Scan)। সব রো দেখতে হয় না।",
      },
    },
    {
      title: { en: "Compare the two", bn: "দুটির তুলনা করুন" },
      body: {
        en: "Move the table size. The full read grows with the table. The index path barely moves. With only 50 rows the gap is small, so a missing index can stay hidden.",
        bn: "টেবিলের সাইজ সরান। পুরো পড়া টেবিলের সাথে বাড়ে। ইনডেক্সের পথ প্রায় নড়ে না। মাত্র 50টি রো থাকলে ফারাক ছোট, তাই না-থাকা ইনডেক্স লুকিয়ে থাকতে পারে।",
      },
    },
    {
      title: { en: "The cost: every write", bn: "খরচ: প্রতিটি রাইট" },
      body: {
        en: "Every new enrollment also updates the index. Add ten more indexes \"just in case\", and each insert must update the table and all 11 indexes. A bulk import pays for all of them.",
        bn: "প্রতিটি নতুন এনরোলমেন্ট ইনডেক্সকেও আপডেট করে। \"যদি লাগে\" ভেবে আরও দশটি ইনডেক্স যোগ করলে প্রতিটি ইনসার্টে টেবিল ও 11টি ইনডেক্স সবই আপডেট করতে হয়। বাল্ক ইমপোর্ট সবগুলোর খরচ দেয়।",
      },
    },
    {
      title: { en: "See it with EXPLAIN", bn: "EXPLAIN দিয়ে দেখুন" },
      body: {
        en: "Put EXPLAIN before the query. A Seq Scan with a Filter reads each row. An Index Scan shows an Index Cond. Test with data as large as production, or the plan may hide the problem.",
        bn: "কুয়েরির আগে EXPLAIN লিখুন। Filter সহ Seq Scan প্রতিটি রো পড়ে। Index Scan-এ Index Cond দেখা যায়। প্রোডাকশনের সমান বড় ডেটা দিয়ে টেস্ট করুন, নইলে প্ল্যান সমস্যা লুকিয়ে রাখতে পারে।",
      },
    },
  ],
  recap: {
    en: "Without an index the database reads the table row by row. With an index it walks a few levels to the rows it needs. The price: extra work on every write, and extra space.",
    bn: "ইনডেক্স না থাকলে ডেটাবেস টেবিল রো ধরে ধরে পড়ে। ইনডেক্স থাকলে কয়েকটি স্তর পার হয়ে দরকারি রো-তে পৌঁছায়। দাম: প্রতিটি রাইটে বাড়তি কাজ, আর বাড়তি জায়গা।",
  },
};
