/**
 * Checks every reel against YouTube, live. Run it after you add or change a reel, and now and then:
 * a creator can delete a video, make it private, or turn off embedding at any time.
 *
 *   node scripts/check-reels.ts
 *
 * For each reel it asks the oEmbed endpoint of YouTube (no key needed). 200 means that the video is
 * public and can be embedded; 401 or 403 means embedding is off; 404 means it is gone or private.
 * It then compares the title and the channel with the data, and opens /shorts/<id> to see that it is a
 * real Short (a normal video answers with a redirect to /watch).
 *
 * It is gentle with YouTube: 2 requests at a time, a pause between them, and it stops at the
 * first HTTP 429 and does not ask again. If /shorts/<id> redirects, it asks once more after 3 seconds,
 * because one fast run reported real Shorts as normal videos and a slower rerun did not (the cause was
 * not found). Before the reels it checks one long video that is not a Short: if YouTube answers 200 for
 * that, the Shorts test cannot be trusted and the script says so.
 *
 * Exit code 0: every reel is fine. 1: a reel has a problem. 2: the check could not be done (throttled,
 * or the Shorts test cannot be trusted). It is not part of `npm test`, because the tests must work offline.
 */
import { REELS } from "../lib/reels/index.ts";
import type { Reel } from "../lib/reels/reels.ts";
import {
  SHORTS_CONTROL_ID,
  isThrottled,
  oembedProblems,
  oembedStatusProblem,
  shortsControlProblem,
  shortsProblem,
  type Oembed,
} from "../lib/reels/verify.ts";

const CONCURRENCY = 2;
const PAUSE_MS = 600;
const RECHECK_MS = 3000;
const HEADERS = { "User-Agent": "Mozilla/5.0 (compatible; check-reels)" };

type Row = { where: string; reel: Reel };

class Throttled extends Error {}
let throttled = false;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function get(url: string, redirect: RequestRedirect): Promise<Response> {
  let last: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    if (throttled) throw new Throttled("stopped, because YouTube asked us to slow down");
    try {
      const res = await fetch(url, { headers: HEADERS, redirect, signal: AbortSignal.timeout(20_000) });
      if (isThrottled(res.status)) {
        throttled = true;
        throw new Throttled("YouTube answered HTTP 429 (too many requests)");
      }
      return res;
    } catch (error) {
      if (error instanceof Throttled) throw error;
      last = error; // a network error or a timeout: try once more
    }
    await sleep(1500);
  }
  throw last ?? new Error("could not reach YouTube");
}

async function shortsAnswer(id: string): Promise<{ status: number; location: string }> {
  const res = await get(`https://www.youtube.com/shorts/${id}`, "manual");
  return { status: res.status, location: res.headers.get("location") ?? "" };
}

async function check({ reel }: Row): Promise<string[]> {
  const oembed = await get(
    `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${reel.id}`)}`,
    "follow",
  );
  const status = oembedStatusProblem(oembed.status);
  if (status) return [status];
  const problems = oembedProblems(reel, (await oembed.json()) as Oembed);
  let shorts = await shortsAnswer(reel.id);
  if (shorts.status >= 300 && shorts.status < 400) {
    // One fast run reported real Shorts as normal videos and a slower rerun did not: ask once more before we say that it is not one.
    await sleep(RECHECK_MS);
    shorts = await shortsAnswer(reel.id);
  }
  const notShort = shortsProblem(shorts.status, shorts.location);
  if (notShort) problems.push(notShort);
  return problems;
}

async function main(): Promise<number> {
  const rows: Row[] = Object.entries(REELS).flatMap(([moduleId, pages]) =>
    Object.entries(pages ?? {}).flatMap(([slug, reels]) => reels.map((reel) => ({ where: `${moduleId}/${slug}`, reel }))),
  );

  try {
    const control = await get(`https://www.youtube.com/shorts/${SHORTS_CONTROL_ID}`, "manual");
    const controlProblem = shortsControlProblem(control.status);
    if (controlProblem) {
      console.log(`CANNOT CHECK: ${controlProblem}`);
      return 2;
    }
  } catch (error) {
    console.log(`CANNOT CHECK: ${error instanceof Error ? error.message : String(error)}`);
    return 2;
  }

  let failed = 0;
  let checked = 0;
  let next = 0;
  const worker = async () => {
    while (next < rows.length && !throttled) {
      const row = rows[next++];
      let problems: string[];
      try {
        problems = await check(row);
      } catch (error) {
        if (error instanceof Throttled) break; // the reel was not checked: it is not counted
        problems = [`could not check: ${error instanceof Error ? error.message : String(error)}`];
      }
      checked += 1;
      if (problems.length) {
        failed += 1;
        for (const problem of problems) console.log(`FAIL ${row.where} ${row.reel.id} (${row.reel.title}): ${problem}`);
      }
      await sleep(PAUSE_MS);
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  if (throttled) {
    console.log(`STOPPED: YouTube asked us to slow down (HTTP 429) after ${checked} of ${rows.length} reels. Wait a while, then run it again.`);
    return 2;
  }
  console.log(failed ? `${failed} of ${rows.length} reels have a problem` : `OK ${rows.length} reels checked, 0 problems`);
  return failed ? 1 : 0;
}

process.exit(await main());
