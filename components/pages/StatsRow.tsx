import { CONTENTS_UI } from "@/lib/contents";
import { T } from "@/components/i18n/T";
import { CONTENTS_UI_BN } from "@/lib/bn/contents";
import { siteStats } from "@/lib/stats";
import { reveal } from "@/components/motion/reveal";

/** Four numbers of the site, each with a teal left rule. All counts come from the data files. */
export function StatsRow({
  className = "",
  ...rest
}: { className?: string } & Record<string, unknown>) {
  const stats = siteStats();
  const items = [
    [stats.parts, "parts"],
    [stats.modules, "modules"],
    [stats.pages, "pages"],
    [stats.voices, "voices"],
  ] as const;
  return (
    <>
      <span id="stats-label" className="sr-only">
        <T en={CONTENTS_UI.statsLabel} bn={CONTENTS_UI_BN.statsLabel} />
      </span>
      <dl
        aria-labelledby="stats-label"
        className={`grid max-w-[520px] grid-cols-2 gap-6 sm:grid-cols-4 ${className}`}
        {...(rest as Record<string, never>)}
      >
        {items.map(([value, key], i) => (
          <div key={key} className="flex flex-col-reverse border-l-2 border-accent pl-3.5" {...reveal("up", i)}>
            <dt className="mt-1 text-[13px] leading-snug text-text-faint">
              <T en={CONTENTS_UI.stats[key]} bn={CONTENTS_UI_BN.stats[key]} />
            </dt>
            <dd className="m-0 font-display text-[28px] font-medium leading-none text-text tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
