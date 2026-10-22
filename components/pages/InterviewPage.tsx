import Link from "next/link";
import { T } from "@/components/i18n/T";
import { INTERVIEW_UI_BN } from "@/lib/bn/interview";
import { INTERVIEW_UI } from "@/lib/interview";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";

/** The interview page: one card for each place on the site that helps with an interview. */
export function InterviewPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="max-w-2xl">
        <p className={`${LABEL} text-accent`}>
          <T en={INTERVIEW_UI.eyebrow} bn={INTERVIEW_UI_BN.eyebrow} />
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-text">
          <T en={INTERVIEW_UI.heading} bn={INTERVIEW_UI_BN.heading} />
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim">
          <T en={INTERVIEW_UI.lede} bn={INTERVIEW_UI_BN.lede} />
        </p>
      </header>
      <ul className="m-0 mt-10 grid list-none gap-5 p-0 md:grid-cols-3">
        {INTERVIEW_UI.cards.map((card, i) => (
          <li key={card.href}>
            <Link
              href={card.href}
              className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised p-5 text-text no-underline shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <span className="font-display text-2xl font-semibold leading-tight">
                <T en={card.title} bn={INTERVIEW_UI_BN.cards[i].title} />
              </span>
              <span className="mt-3 text-[15px] leading-relaxed text-text-dim">
                <T en={card.text} bn={INTERVIEW_UI_BN.cards[i].text} />
              </span>
              <span aria-hidden="true" className="mt-auto pt-4 text-xl text-accent">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
