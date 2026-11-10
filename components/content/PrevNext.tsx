import Link from "next/link";
import type { NavPage } from "@/lib/nav";
import { CONTENTS_HOME } from "@/lib/contents";
import { HOME_UI, partLabel, prevNextNav } from "@/lib/ui";
import { HOME_UI_BN } from "@/lib/bn/home";
import { SHELL_BN } from "@/lib/bn/shell";
import { T } from "@/components/i18n/T";

// leading-6: each link is a 24 px target.
const NAV_LINK = "inline-block leading-6 text-accent underline underline-offset-2";

/**
 * The previous part, all parts, and the next part as one ruled row of links:
 * the same row as the end of a module topic, a Linux stage, and a Fundamentals
 * chapter. It is navigation, not content, so it has no box.
 */
export function PrevNext({ prev, next }: { prev?: NavPage; next?: NavPage }) {
  if (!prev && !next) return null;
  return (
    <nav
      aria-labelledby="prev-next-label"
      className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[15px]"
    >
      <span id="prev-next-label" className="sr-only">
        <T en={prevNextNav} bn={SHELL_BN.prevNextNav} />
      </span>
      {prev ? (
        <Link href={prev.href} rel="prev" className={NAV_LINK}>
          <span aria-hidden="true">← </span>
          <span className="sr-only">
            <T en={partLabel(prev.part)} bn={SHELL_BN.partLabel(prev.part)} />:{" "}
          </span>
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      <Link href={CONTENTS_HOME} className={NAV_LINK}>
        <T en={HOME_UI.seeAll} bn={HOME_UI_BN.seeAll} />
      </Link>
      {next ? (
        <Link href={next.href} rel="next" className={NAV_LINK}>
          <span className="sr-only">
            <T en={partLabel(next.part)} bn={SHELL_BN.partLabel(next.part)} />:{" "}
          </span>
          {next.title}
          <span aria-hidden="true"> →</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
