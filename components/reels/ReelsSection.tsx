import { T } from "@/components/i18n/T";
import { REELS_UI_BN } from "@/lib/bn/reels";
import type { Reel } from "@/lib/reels/reels";
import { REELS_UI } from "@/lib/reels/ui";
import { ReelGrid } from "./ReelGrid";

/**
 * The reels of a topic page: a heading, one line about where the videos come from, and a grid of
 * posters. It sits after the article, so "one section at a time" does not hide it. The heading is
 * rendered here and not in the MDX, so it is not part of the "On this page" list (like Sources).
 * A page with no reels shows nothing.
 */
export function ReelsSection({ reels }: { reels: readonly Reel[] }) {
  if (reels.length === 0) return null;
  return (
    <section aria-labelledby="reels" className="mt-12 border-t border-border pt-6">
      <h2 id="reels" className="scroll-mt-20 font-display text-2xl font-medium tracking-[-0.01em] text-text">
        <T en={REELS_UI.heading} bn={REELS_UI_BN.heading} />
      </h2>
      <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-text-dim">
        <T en={REELS_UI.note} bn={REELS_UI_BN.note} />
      </p>
      <ReelGrid reels={reels} />
    </section>
  );
}
