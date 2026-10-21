"use client";

import Link from "next/link";
import { ArchitectureProgressSummary } from "@/components/architecture/ArchitectureProgressSummary";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { useArchitectureProgress } from "@/components/architecture/useArchitectureProgress";
import { useFundamentalsProgress } from "@/components/fundamentals/useFundamentalsProgress";
import { useLinuxProgress } from "@/components/linux/useLinuxProgress";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { LESSON_IDS } from "@/lib/architecture/topics";
import { DASHBOARD_UI } from "@/lib/dashboard";
import { contentPage, continueTarget, exportFileName, readByModule } from "@/lib/dashboard-data";
import { ALL_FUNDAMENTALS_TOPIC_IDS } from "@/lib/fundamentals/chapters";
import { ALL_TOPIC_IDS } from "@/lib/linux/stages";
import { CONTENT_PAGES, exportProgress } from "@/lib/reading-state";

const LABEL = "font-mono text-[11px] font-medium uppercase tracking-[0.2em]";
const CARD = "rounded-2xl border border-border bg-bg-raised p-5 shadow-sm sm:p-6";
const NO_STORAGE = { getItem: () => null };

/** Download the Export file. Blocked storage gives a file with only null values. */
function downloadExport() {
  const now = new Date();
  let storage: { getItem(key: string): string | null } = NO_STORAGE;
  try {
    storage = window.localStorage;
  } catch {
    // Storage is blocked: export the empty file.
  }
  let file;
  try {
    file = exportProgress(storage, now);
  } catch {
    file = exportProgress(NO_STORAGE, now);
  }
  const url = URL.createObjectURL(new Blob([JSON.stringify(file, null, 2)], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = exportFileName(now);
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function SectionTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className={`${LABEL} border-b border-border-strong pb-3 text-text-dim`}>
      {children}
    </h2>
  );
}

/** The dashboard: stats, Continue reading, bookmarks, and pages read. All data comes from this browser. */
export function DashboardPage() {
  const read = usePageRead();
  const marks = useBookmarks();
  const lastPage = useLastPage();
  const linux = useLinuxProgress();
  const fundamentals = useFundamentalsProgress();
  const architecture = useArchitectureProgress();

  const readPages = read.done.map(contentPage).filter((page) => page !== undefined);
  const bookmarks = [...marks.done].reverse().map(contentPage).filter((page) => page !== undefined);
  const next = continueTarget(lastPage.last);
  const hasLast = contentPage(lastPage.last ?? "") !== undefined;
  const rows = readByModule(read.done);

  function reset() {
    if (!window.confirm(DASHBOARD_UI.resetConfirm)) return;
    for (const store of [read, marks, linux, fundamentals, architecture]) store.clear();
    lastPage.clear();
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className={`${LABEL} text-accent`}>{DASHBOARD_UI.eyebrow}</p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-text">
            {DASHBOARD_UI.heading}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim">{DASHBOARD_UI.lede}</p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={downloadExport} className="btn btn-outline btn-sm">
            <span aria-hidden="true">📥</span>
            {DASHBOARD_UI.export}
          </button>
          <button type="button" onClick={reset} className="btn btn-ghost btn-sm">
            <span aria-hidden="true">🗑️</span>
            {DASHBOARD_UI.reset}
          </button>
        </div>
      </header>

      <section aria-label={DASHBOARD_UI.siteTitle} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,0.6fr))_repeat(3,minmax(0,1fr))]">
        <div className={`${CARD} self-end`}>
          <p data-stat="read" className="font-display text-[34px] font-bold leading-none text-text tabular-nums">
            {readPages.length}
            <span className="text-xl text-text-faint"> / {CONTENT_PAGES.length}</span>
          </p>
          <p className="mt-2 text-[14px] text-text-dim">{DASHBOARD_UI.statRead}</p>
        </div>
        <div className={`${CARD} self-end`}>
          <p data-stat="bookmarks" className="font-display text-[34px] font-bold leading-none text-text tabular-nums">
            {bookmarks.length}
          </p>
          <p className="mt-2 text-[14px] text-text-dim">{DASHBOARD_UI.statBookmarks}</p>
        </div>
        <div>
          <p className={`${LABEL} mb-2 text-text-faint`}>{DASHBOARD_UI.moduleLabels.linux}</p>
          <LinuxProgressSummary ids={ALL_TOPIC_IDS} />
        </div>
        <div>
          <p className={`${LABEL} mb-2 text-text-faint`}>{DASHBOARD_UI.moduleLabels.fundamentals}</p>
          <FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS} />
        </div>
        <div>
          <p className={`${LABEL} mb-2 text-text-faint`}>{DASHBOARD_UI.moduleLabels.architecture}</p>
          <ArchitectureProgressSummary ids={LESSON_IDS} />
        </div>
      </section>

      <section aria-labelledby="continue-heading" className="mt-12">
        <SectionTitle id="continue-heading">{hasLast ? DASHBOARD_UI.continueHeading : DASHBOARD_UI.startHeading}</SectionTitle>
        <Link
          href={next.href}
          data-continue
          className={`${CARD} mt-5 flex items-center justify-between gap-4 no-underline transition-shadow hover:shadow-md`}
        >
          <span>
            <span className={`${LABEL} block text-text-faint`}>{DASHBOARD_UI.moduleLabels[next.module]}</span>
            <span className="mt-1 block font-display text-2xl font-semibold text-text">{next.title}</span>
          </span>
          <span aria-hidden="true" className="text-xl text-accent">
            →
          </span>
        </Link>
      </section>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section aria-labelledby="bookmarks-heading">
          <SectionTitle id="bookmarks-heading">{DASHBOARD_UI.bookmarksHeading}</SectionTitle>
          {bookmarks.length === 0 ? (
            <p className="mt-4 text-[15px] text-text-dim">{DASHBOARD_UI.bookmarksEmpty}</p>
          ) : (
            <ul className="m-0 mt-2 list-none p-0">
              {bookmarks.map((page) => (
                <li key={page.href} className="border-b border-border">
                  <Link href={page.href} className="flex items-baseline justify-between gap-3 py-3 text-text no-underline hover:text-accent">
                    <span>{page.title}</span>
                    <span className="shrink-0 font-mono text-[12px] text-text-faint">{DASHBOARD_UI.moduleLabels[page.module]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="read-heading">
          <SectionTitle id="read-heading">{DASHBOARD_UI.readHeading}</SectionTitle>
          {readPages.length === 0 ? <p className="mt-4 text-[15px] text-text-dim">{DASHBOARD_UI.readEmpty}</p> : null}
          {rows.map((row) => {
            const pages = readPages.filter((page) => page.module === row.module);
            return (
              <div key={row.module} className="mt-5">
                <p className="flex justify-between font-mono text-[12px] text-text-dim">
                  <span>{DASHBOARD_UI.moduleLabels[row.module]}</span>
                  <span data-read-row={row.module} className="tabular-nums">
                    {row.read} / {row.total}
                  </span>
                </p>
                {pages.length > 0 ? (
                  <ul className="m-0 mt-1 list-none p-0">
                    {pages.map((page) => (
                      <li key={page.href}>
                        <Link href={page.href} className="block py-1 text-[15px] text-text no-underline hover:text-accent">
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
