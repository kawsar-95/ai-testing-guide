/**
 * The one ordered list of System Design case studies. Each case is served at
 * /system-design/<slug>/ and has its text in content/system-design/<slug>.mdx.
 */
import { defineFlatModule, type FlatEntry, type FlatItem } from "../modules/flat.ts";
import { SYSTEM_DESIGN_UI } from "./ui.ts";

export type SystemDesignSlug =
  | "kafka"
  | "google-search"
  | "youtube"
  | "google-docs"
  | "whatsapp"
  | "airbnb"
  | "spotify"
  | "slack"
  | "reddit"
  | "bluesky"
  | "twitter"
  | "uber-eta"
  | "url-shortener"
  | "stock-exchange"
  | "payment-system";

export type SystemDesignCase = FlatItem<SystemDesignSlug>;

type CaseEntry = { slug: SystemDesignSlug; title: string; description: string };

const SOURCE: readonly CaseEntry[] = [
  {
    slug: "kafka",
    title: "How Apache Kafka Works",
    description: "A shared log that moves huge streams of events between services.",
  },
  {
    slug: "google-search",
    title: "How Google Search Works",
    description: "How a search engine crawls the web and keeps an index of the pages it finds.",
  },
  {
    slug: "youtube",
    title: "How YouTube Works",
    description: "Upload, convert, store, and stream video to millions of viewers.",
  },
  {
    slug: "google-docs",
    title: "How Google Docs Works",
    description: "Many people edit one document at the same time without a conflict.",
  },
  {
    slug: "whatsapp",
    title: "How WhatsApp Works",
    description: "Deliver chat messages fast, in order, and to phones that are offline.",
  },
  {
    slug: "airbnb",
    title: "How Airbnb Works",
    description: "Search for places to stay and book them without a double booking.",
  },
  {
    slug: "spotify",
    title: "How Spotify Works",
    description: "Stream music with no pauses to listeners all over the world.",
  },
  {
    slug: "slack",
    title: "How Slack Works",
    description: "Send a message to every member of a channel in real time.",
  },
  {
    slug: "reddit",
    title: "How Reddit Works",
    description: "Serve posts, votes, and comments for a very large community site.",
  },
  {
    slug: "bluesky",
    title: "How Bluesky Works",
    description: "A social network where no single company owns your data.",
  },
  {
    slug: "twitter",
    title: "How Twitter Works",
    description: "Build the home timeline of each user from the people they follow.",
  },
  {
    slug: "uber-eta",
    title: "How Uber Computes ETA",
    description: "Estimate when a car arrives, from maps, traffic, and live trip data.",
  },
  {
    slug: "url-shortener",
    title: "How a URL Shortener Works",
    description: "Turn a long link into a short one and redirect each click quickly.",
  },
  {
    slug: "stock-exchange",
    title: "How a Stock Exchange Works",
    description: "Match buy and sell orders fairly, in order, and very fast.",
  },
  {
    slug: "payment-system",
    title: "How a Payment System Works",
    description: "Move money safely, and never charge a customer two times.",
  },
];

const entries: readonly FlatEntry<SystemDesignSlug>[] = SOURCE.map((entry) => ({ ...entry, kind: "topic" }));

export const SYSTEM_DESIGN = defineFlatModule({
  id: "system-design",
  label: "System Design",
  searchGroup: "system design",
  entries,
  ui: SYSTEM_DESIGN_UI,
});

export const CASES: readonly SystemDesignCase[] = SYSTEM_DESIGN.pages;
export const SYSTEM_DESIGN_HOME = SYSTEM_DESIGN.home;
export const SYSTEM_DESIGN_ROUTES: readonly string[] = SYSTEM_DESIGN.routes;

export const getCase = SYSTEM_DESIGN.get;
