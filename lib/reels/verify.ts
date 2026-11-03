/**
 * What `scripts/check-reels.ts` concludes from YouTube's answers. These functions do no network
 * call, so `tests/reels.test.ts` can test them offline.
 */
import { normalizeTitle, type Reel } from "./reels.ts";

/** The two fields of the oEmbed answer that we compare. */
export type Oembed = { title?: string; author_name?: string };

/** What the HTTP status of the oEmbed endpoint means for a reel. `null` means the reel is fine. */
export function oembedStatusProblem(status: number): string | null {
  if (status === 200) return null;
  if (status === 401 || status === 403) return "embedding is turned off by the owner";
  if (status === 404) return "the video is gone or private";
  return `YouTube answered HTTP ${status}`;
}

/** The differences between a reel in our data and what YouTube says now. */
export function oembedProblems(reel: Reel, live: Oembed): string[] {
  const problems: string[] = [];
  if (!normalizeTitle(live.title ?? "").includes(normalizeTitle(reel.title))) {
    problems.push(`title changed: YouTube now says "${live.title ?? ""}"`);
  }
  if ((live.author_name ?? "") !== reel.channel) {
    problems.push(`channel changed: YouTube now says "${live.author_name ?? ""}"`);
  }
  return problems;
}

/**
 * A real Short answers `/shorts/<id>` with 200. A normal video redirects to `/watch`. The checker
 * asks twice before it calls this: one fast run reported real Shorts as normal videos and a slower
 * rerun did not (the cause was not found).
 */
export function shortsProblem(status: number, location = ""): string | null {
  if (status === 200) return null;
  if (status >= 300 && status < 400) {
    return `/shorts/ redirected${location ? ` to ${location}` : ""} twice: it is a normal video, not a Short (or YouTube was busy: run the check again)`;
  }
  return `/shorts/ answered HTTP ${status}`;
}

/**
 * A long video that has been on YouTube for many years and is not a Short. `/shorts/<id>` must
 * redirect for it. If it answers 200, YouTube is answering 200 to everything (a consent or bot
 * page, for example), and the Shorts test would let a normal video pass.
 */
export const SHORTS_CONTROL_ID = "dQw4w9WgXcQ";

/** What the answer for the control video means. `null` means that the Shorts test can be trusted. */
export function shortsControlProblem(status: number): string | null {
  if (status >= 300 && status < 400) return null;
  if (status === 200) return "YouTube answered 200 for a video that is not a Short, so this test cannot tell a Short from a normal video right now";
  return `the control request answered HTTP ${status}`;
}

/** YouTube asks us to slow down with HTTP 429. The checker stops at the first one and does not ask again. */
export function isThrottled(status: number): boolean {
  return status === 429;
}
