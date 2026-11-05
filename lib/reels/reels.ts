/**
 * Reels: short vertical videos (YouTube Shorts) that are linked from a topic
 * page for extra learning. They are made by other creators. The site shows a
 * poster and loads the player from YouTube only when the reader presses Play.
 * The lists are in lib/reels/<module>.ts and are looked up by `reelsFor`.
 */

/** What a reel is. The labels are in lib/reels/ui.ts. */
export const REEL_KINDS = ["explainer", "animation", "real-system", "interview", "mistake", "compare"] as const;
export type ReelKind = (typeof REEL_KINDS)[number];

/** The spoken language of a reel. */
export const REEL_LANGS = ["en", "bn"] as const;
export type ReelLang = (typeof REEL_LANGS)[number];

/** A Short can be up to 3 minutes long. A reel on this site is never longer. */
export const MAX_REEL_SECONDS = 180;

/**
 * How many reels a topic page shows before the rest go behind a "Show more" button. Four is also the
 * most that a page of an ordinary module may have, so only a shelf page is ever cut.
 */
export const REELS_SHOWN = 4;

/**
 * The reels that show at once, and the reels behind the "Show more" button. One reel that is left
 * over is shown with the others: a button for one video is more to read than the video.
 */
export function splitShelf<T>(reels: readonly T[]): { shown: readonly T[]; more: readonly T[] } {
  if (reels.length <= REELS_SHOWN + 1) return { shown: reels, more: [] };
  return { shown: reels.slice(0, REELS_SHOWN), more: reels.slice(REELS_SHOWN) };
}

export type Reel = {
  /** The YouTube video id: 11 characters from A-Z, a-z, 0-9, `_` and `-`. */
  id: string;
  /** The title that the channel published, without hashtags. */
  title: string;
  /** The name of the channel, as YouTube shows it. */
  channel: string;
  kind: ReelKind;
  lang: ReelLang;
  /** The length of the video in seconds. */
  seconds: number;
};

const ID = /^[A-Za-z0-9_-]{11}$/;

export function isReelId(id: string): boolean {
  return ID.test(id);
}

/** The page of the reel on YouTube. Opens the vertical Shorts view. */
export function reelUrl(id: string): string {
  return `https://www.youtube.com/shorts/${id}`;
}

/**
 * The player. `youtube-nocookie.com` is YouTube's privacy-enhanced domain: it sets no
 * cookie until the reader plays the video. `autoplay` is allowed because the reader just pressed Play.
 */
export function embedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
}

/** `75` gives `1:15`; `5` gives `0:05`. */
export function formatDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

/** The ISO 8601 duration for a `<time dateTime>`: `75` gives `PT1M15S`. */
export function isoDuration(seconds: number): string {
  const total = Math.max(0, Math.round(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `PT${m ? `${m}M` : ""}${s || !m ? `${s}S` : ""}`;
}

/**
 * A title with the hashtags, emoji, punctuation, and case taken out. The title that we show is
 * the published title without its hashtags, so the live title must contain it after both go
 * through this function. `scripts/check-reels.ts` uses it.
 */
export function normalizeTitle(title: string): string {
  return title
    .normalize("NFKC")
    // An emoji keeps invisible joiners and variation selectors (U+FE0F, U+200D). They are Unicode
    // marks, so the letter filter below would keep them and a title with an emoji would not match.
    .replace(/[\uFE00-\uFE0F\u200B-\u200D\u2060]/gu, "")
    .replace(/#\S+/gu, " ")
    .replace(/[^\p{L}\p{N}\p{M}]+/gu, " ")
    .trim()
    .toLowerCase();
}
