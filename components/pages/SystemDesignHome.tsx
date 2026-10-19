import Link from "next/link";
import { CASES } from "@/lib/system-design/cases";
import { SYSTEM_DESIGN_UI } from "@/lib/system-design/ui";
import { Callout } from "@/components/mdx/Callout";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The home page of the System Design module: one entry for each case study. */
export function SystemDesignHome() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-7 pb-6 sm:px-8 sm:pt-11">
      <header className="max-w-3xl">
        <p className={`${LABEL} text-accent`}>{SYSTEM_DESIGN_UI.eyebrow(CASES.length)}</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-balance text-text">
          {SYSTEM_DESIGN_UI.heading}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
          {SYSTEM_DESIGN_UI.lede}
        </p>
      </header>

      <div className="mt-6 max-w-3xl">
        <Callout type="note">
          <p>{SYSTEM_DESIGN_UI.sourceNote}</p>
        </Callout>
      </div>

      <section aria-labelledby="cases-heading" className="mt-9 sm:mt-10">
        <h2 id="cases-heading" className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
          {SYSTEM_DESIGN_UI.casesHeading}
        </h2>
        <ol className="m-0 list-none p-0">
          {CASES.map((item) => (
            <li key={item.slug} className="border-b border-border py-4">
              <p className={`${LABEL} text-accent`}>{SYSTEM_DESIGN_UI.caseEyebrow(item.number)}</p>
              <h3 className="mt-1 font-display text-xl font-medium leading-snug text-text">
                <Link href={item.href} className="text-text no-underline hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 max-w-3xl text-[15px] leading-relaxed text-pretty text-text-dim">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
