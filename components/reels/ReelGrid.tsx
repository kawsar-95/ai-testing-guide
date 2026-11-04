"use client";

import { useEffect, useRef, useState } from "react";
import { T } from "@/components/i18n/T";
import { REELS_UI_BN } from "@/lib/bn/reels";
import { embedUrl, formatDuration, isoDuration, reelUrl, type Reel } from "@/lib/reels/reels";
import { REELS_UI } from "@/lib/reels/ui";

const BENGALI = /[\u0980-\u09FF]/;

/**
 * The posters of a topic's reels. One reel plays at a time: pressing Play on another reel puts the
 * first one back to its poster, so two videos never talk at once. Until then no request goes to
 * YouTube, so a page costs nothing for a reader who does not press Play.
 */
export function ReelGrid({ reels }: { reels: readonly Reel[] }) {
  const [playing, setPlaying] = useState<string | null>(null);
  return (
    <ul
      role="list"
      aria-labelledby="reels"
      className="mt-5 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,12.5rem),1fr))] gap-x-4 gap-y-8 p-0"
    >
      {reels.map((reel) => (
        <li key={reel.id} className="min-w-0 max-w-[17rem]">
          <ReelCard reel={reel} playing={playing === reel.id} onPlay={() => setPlaying(reel.id)} />
        </li>
      ))}
    </ul>
  );
}

function ReelCard({ reel, playing, onPlay }: { reel: Reel; playing: boolean; onPlay: () => void }) {
  const frame = useRef<HTMLIFrameElement>(null);
  // The poster button disappears when the player replaces it, so move the focus to the player.
  useEffect(() => {
    if (playing) frame.current?.focus();
  }, [playing]);

  const titleLang = BENGALI.test(reel.title) ? "bn" : undefined;
  return (
    <article>
      <div className="relative aspect-[9/16] overflow-hidden rounded-[10px] border border-border bg-bg-raised shadow-sm">
        {playing ? (
          <iframe
            ref={frame}
            src={embedUrl(reel.id)}
            title={reel.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-6 bg-bg-raised p-5 text-center transition-colors hover:bg-bg-raised-2"
          >
            <span lang={titleLang} className="line-clamp-6 font-display text-[1.375rem] font-medium leading-[1.2] tracking-[-0.01em] text-text [overflow-wrap:anywhere]">
              <span className="sr-only">
                <T en={REELS_UI.play} bn={REELS_UI_BN.play} />:{" "}
              </span>
              {reel.title}
            </span>
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-bg shadow-md transition-transform group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-dim">
        <span>
          <T en={REELS_UI.kinds[reel.kind]} bn={REELS_UI_BN.kinds[reel.kind]} />
        </span>
        <span aria-hidden="true">·</span>
        <time dateTime={isoDuration(reel.seconds)}>{formatDuration(reel.seconds)}</time>
        {reel.lang === "bn" ? (
          <>
            <span aria-hidden="true">·</span>
            <span lang="bn">{REELS_UI.langs.bn}</span>
          </>
        ) : null}
      </p>
      <p className="mt-1 text-sm text-text [overflow-wrap:anywhere]">{reel.channel}</p>
      <a
        href={reelUrl(reel.id)}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex min-h-6 items-center gap-1 text-sm text-accent underline-offset-4 hover:underline [@media(pointer:coarse)]:min-h-11"
      >
        <T en={REELS_UI.watchOnYoutube} bn={REELS_UI_BN.watchOnYoutube} />
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
