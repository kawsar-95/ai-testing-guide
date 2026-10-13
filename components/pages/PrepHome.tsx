import { AREAS } from "@/lib/prep/areas";
import { ALL_ITEMS, itemsOf } from "@/lib/prep/items";
import { PREP_UI } from "@/lib/prep/ui";
import { Callout } from "@/components/mdx/Callout";
import { AreaCard } from "@/components/prep/AreaCard";
import { ProgressSummary } from "@/components/prep/ProgressSummary";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

const ALL_IDS = ALL_ITEMS.map((item) => item.id);

/** The home page of the Interview Prep module: the overall progress and one card for each area. */
export function PrepHome() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-14 pb-8 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>{PREP_UI.eyebrow(AREAS.length, ALL_IDS.length)}</p>
        <h1 className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance text-text">
          {PREP_UI.heading}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-pretty text-text-dim sm:text-xl sm:leading-relaxed">
          {PREP_UI.lede}
        </p>
      </header>

      <div className="mt-8 max-w-3xl">
        <Callout type="note">
          <p>{PREP_UI.privacyNote}</p>
        </Callout>
      </div>

      <div className="mt-6">
        <ProgressSummary ids={ALL_IDS} />
      </div>

      <section aria-labelledby="areas-heading" className="mt-14 sm:mt-16">
        <h2 id="areas-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {PREP_UI.areasHeading}
        </h2>
        <ul className="m-0 mt-5 grid list-none gap-4 p-0 sm:grid-cols-2">
          {AREAS.map((area) => (
            <AreaCard key={area.slug} area={area} ids={itemsOf(area.slug).map((item) => item.id)} />
          ))}
        </ul>
      </section>
    </div>
  );
}
