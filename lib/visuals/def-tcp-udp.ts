import type { VisualDef } from "./defs.ts";

/** The text of the tcp-udp visual. */
export const DEF: VisualDef = {
  id: "tcp-udp",
  title: { en: "TCP and UDP", bn: "TCP আর UDP" },
  promise: {
    en: "Watch TCP shake hands and send lost data again, while UDP just sends. Then change the packet loss.",
    bn: "দেখুন TCP হ্যান্ডশেক করে আর হারানো ডেটা আবার পাঠায়, আর UDP শুধু পাঠায়। তারপর packet loss বদলান।",
  },
  minutes: 2,
  steps: [
    {
      title: { en: "Letter or postcard", bn: "চিঠি নাকি পোস্টকার্ড" },
      body: {
        en: "TCP is the registered letter: it checks that the data arrives, in order. UDP is the postcard: cheap and quick, but nobody promises anything. Here, 10 packets are sent.",
        bn: "TCP হলো রেজিস্টার্ড চিঠি: সে দেখে ডেটা ক্রমানুসারে পৌঁছাল কিনা। UDP হলো পোস্টকার্ড: সস্তা আর দ্রুত, কিন্তু কোনো প্রতিশ্রুতি নেই। এখানে 10টি packet পাঠানো হয়।",
      },
    },
    {
      title: { en: "TCP shakes hands", bn: "TCP হ্যান্ডশেক করে" },
      body: {
        en: "TCP first builds a connection with the three-way handshake: SYN, SYN+ACK, ACK. Each side picks a starting sequence number, and the other side confirms it.",
        bn: "TCP আগে থ্রি-ওয়ে হ্যান্ডশেক (three-way handshake) দিয়ে কানেকশন তৈরি করে: SYN, SYN+ACK, ACK। প্রতিটি পক্ষ একটি শুরুর সিকোয়েন্স নম্বর বেছে নেয়, আর অন্য পক্ষ সেটি নিশ্চিত করে।",
      },
    },
    {
      title: { en: "TCP sends in order", bn: "TCP ক্রমানুসারে পাঠায়" },
      body: {
        en: "With the connection open, the data flows. TCP gives the program a reliable, in-order byte stream. Every packet has a sequence number.",
        bn: "কানেকশন খোলা হলে ডেটা চলে। TCP প্রোগ্রামকে একটি নির্ভরযোগ্য, ক্রমানুসারে চলা বাইট স্ট্রিম দেয়। প্রতিটি packet-এর একটি সিকোয়েন্স নম্বর থাকে।",
      },
    },
    {
      title: { en: "A packet is lost", bn: "একটি packet হারায়" },
      body: {
        en: "Some packets are lost on the way. Move the slider to change how many. TCP detects the loss with sequence numbers.",
        bn: "পথে কিছু packet হারায়। slider সরিয়ে কয়টা হারায় তা বদলান। TCP সিকোয়েন্স নম্বর দিয়ে হারানো packet ধরে।",
      },
    },
    {
      title: { en: "TCP sends it again", bn: "TCP আবার পাঠায়" },
      body: {
        en: "TCP repairs a loss by sending the data again (retransmission). Every packet arrives, in order, at any loss you choose.",
        bn: "TCP ডেটা আবার পাঠিয়ে (retransmission) হারানো অংশ ঠিক করে। আপনি যে loss-ই বেছে নিন, প্রতিটি packet ক্রমানুসারে পৌঁছায়।",
      },
    },
    {
      title: { en: "UDP just sends", bn: "UDP শুধু পাঠায়" },
      body: {
        en: "UDP has no handshake and no window. A sender just sends a datagram. The same packets are lost on the way, and nothing sends them again.",
        bn: "UDP-তে কোনো হ্যান্ডশেক নেই, কোনো উইন্ডো নেই। সেন্ডার শুধু একটি ডেটাগ্রাম পাঠায়। একই packet পথে হারায়, আর কেউ সেগুলো আবার পাঠায় না।",
      },
    },
    {
      title: { en: "The gap stays", bn: "ফাঁক থেকে যায়" },
      body: {
        en: "UDP does not guarantee delivery, and that is its design. Move the slider: TCP always gets all 10, UDP gets fewer. A tester checks that the app copes with a lost message.",
        bn: "UDP ডেলিভারির নিশ্চয়তা দেয় না, এটাই এর নকশা। slider সরান: TCP সবসময় সব 10টি পায়, UDP কম পায়। টেস্টার দেখে অ্যাপ হারানো মেসেজ সামলাতে পারে কিনা।",
      },
    },
  ],
  recap: {
    en: "TCP builds a connection and sends lost data again, so it is reliable and in order. UDP has no handshake and no repair, so a lost packet stays a gap.",
    bn: "TCP কানেকশন তৈরি করে আর হারানো ডেটা আবার পাঠায়, তাই সে নির্ভরযোগ্য ও ক্রমানুসারে। UDP-তে হ্যান্ডশেক নেই, মেরামত নেই, তাই হারানো packet ফাঁক হয়ে থাকে।",
  },
};
