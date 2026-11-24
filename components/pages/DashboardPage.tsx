"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DASHBOARD_UI_BN } from "@/lib/bn/dashboard";
import { useFundamentalsProgress } from "@/components/fundamentals/useFundamentalsProgress";
import { useLinuxProgress } from "@/components/linux/useLinuxProgress";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { progressHook } from "@/components/modules/useModuleProgress";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { DASHBOARD_UI } from "@/lib/dashboard";
import { contentPage, continueTarget, exportFileName, readByModule } from "@/lib/dashboard-data";
import { countDone, percent } from "@/lib/prep/progress";
import { ALL_FUNDAMENTALS_TOPIC_IDS, FUNDAMENTALS_HOME } from "@/lib/fundamentals/chapters";
import { ALL_TOPIC_IDS, LINUX_HOME } from "@/lib/linux/stages";
import { PROGRESS_MODULES } from "@/lib/modules/registry";
import { CONTENT_PAGES, exportProgress } from "@/lib/reading-state";
import { reveal } from "@/components/motion/reveal";

const LABEL = "font-mono text-[12px] font-medium tracking-normal";
const NO_STORAGE = { getItem: () => null };

/** The download icon of the Export button. */
function ExportIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M10 3v8m0 0 3.5-3.5M10 11 6.5 7.5M4 14.5v1.2c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3v-1.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The reset arrow of the Reset button. */
function ResetIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6m1.9-.9v3.2h-3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The arrow of the Continue reading card. */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-5 shrink-0" fill="none" aria-hidden="true">
      <path
        d="M4 10h11m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  // Safari can cancel the download if the URL goes at once.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** A section heading with an optional count on the right. */
function SectionTitle({ id, meta, children }: { id: string; meta?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border-strong pb-3">
      <h2 id={id} className={`${LABEL} text-text-dim`}>
        {children}
      </h2>
      {meta ? <p className="font-mono text-[12px] tabular-nums text-text-faint">{meta}</p> : null}
    </div>
  );
}

/** The dashboard: the reading stats, Continue reading, the module progress, and the lists. All data comes from this browser. */
export function DashboardPage() {
  const read = usePageRead();
  const marks = useBookmarks();
  const lastPage = useLastPage();
  const linux = useLinuxProgress();
  const fundamentals = useFundamentalsProgress();
  // PROGRESS_MODULES is a fixed list, so this calls the same hooks in the same order on every render.
  const flatStores = PROGRESS_MODULES.map((m) => progressHook(m)());

  const readPages = read.done.map(contentPage).filter((page) => page !== undefined);
  const bookmarks = [...marks.done].reverse().map(contentPage).filter((page) => page !== undefined);
  const next = continueTarget(lastPage.last);
  const hasLast = contentPage(lastPage.last ?? "") !== undefined;
  const rows = readByModule(read.done);
  const readRows = rows.filter((row) => row.read > 0);
  const siteTitle = useBn(DASHBOARD_UI.siteTitle, DASHBOARD_UI_BN.siteTitle);
  const resetConfirm = useBn(DASHBOARD_UI.resetConfirm, DASHBOARD_UI_BN.resetConfirm);
  const progressWord = useBn(DASHBOARD_UI.progressWord, DASHBOARD_UI_BN.progressWord);
  const statReadLabel = useBn(DASHBOARD_UI.statRead, DASHBOARD_UI_BN.statRead);

  // The same counts as the module home pages: the same ids and the same stores.
  const moduleRows = [
    {
      id: "linux",
      label: DASHBOARD_UI.moduleLabels.linux,
      href: LINUX_HOME,
      done: countDone(ALL_TOPIC_IDS, linux.done),
      total: new Set(ALL_TOPIC_IDS).size,
    },
    {
      id: "fundamentals",
      label: DASHBOARD_UI.moduleLabels.fundamentals,
      href: FUNDAMENTALS_HOME,
      done: countDone(ALL_FUNDAMENTALS_TOPIC_IDS, fundamentals.done),
      total: new Set(ALL_FUNDAMENTALS_TOPIC_IDS).size,
    },
    ...PROGRESS_MODULES.map((m, i) => ({
      id: m.id,
      label: m.label,
      href: m.home,
      done: countDone(m.lessonIds, flatStores[i].done),
      total: new Set(m.lessonIds).size,
    })),
  ];

  const readPercent = percent(readPages.length, CONTENT_PAGES.length);

  function reset() {
    if (!window.confirm(resetConfirm)) return;
    for (const store of [read, marks, linux, fundamentals, ...flatStores]) store.clear();
    lastPage.clear();
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="flex flex-wrap items-start justify-between gap-x-8 gap-y-5" {...reveal("up", 0)}>
        <div className="max-w-2xl">
          <p className={`${LABEL} text-accent`}>
            <T en={DASHBOARD_UI.eyebrow} bn={DASHBOARD_UI_BN.eyebrow} />
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-balance text-text">
            <T en={DASHBOARD_UI.heading} bn={DASHBOARD_UI_BN.heading} />
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-pretty text-text-dim sm:text-lg sm:leading-relaxed">
            <T en={DASHBOARD_UI.lede} bn={DASHBOARD_UI_BN.lede} />
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={downloadExport} className="btn btn-outline btn-sm">
            <ExportIcon />
            <T en={DASHBOARD_UI.export} bn={DASHBOARD_UI_BN.export} />
          </button>
          <button type="button" onClick={reset} className="btn btn-ghost btn-sm">
            <ResetIcon />
            <T en={DASHBOARD_UI.reset} bn={DASHBOARD_UI_BN.reset} />
          </button>
        </div>
      </header>

      <section aria-label={siteTitle} className="mt-10 grid gap-x-12 gap-y-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col border-t border-border-strong pt-5" {...reveal("up", 1)}>
          <p className={`${LABEL} text-text-faint`}>
            <T en={DASHBOARD_UI.statRead} bn={DASHBOARD_UI_BN.statRead} />
          </p>
          <p
            data-stat="read"
            className="mt-3 font-display text-[44px] font-medium leading-none tracking-[-0.02em] text-text tabular-nums"
          >
            {readPages.length}
            <span className="text-[20px] text-text-faint"> / {CONTENT_PAGES.length}</span>
          </p>
          <ProgressBar
            value={readPercent}
            label={statReadLabel}
            valueText={`${readPages.length} / ${CONTENT_PAGES.length}`}
            className="mt-5"
          />
        </div>

        <Link
          href={next.href}
          data-continue
          className="group flex flex-col justify-between gap-6 border-t border-border-strong pt-5 no-underline"
          {...reveal("up", 2)}
        >
          <span className="min-w-0">
            <span className={`${LABEL} block text-accent`}>
              {hasLast ? (
                <T en={DASHBOARD_UI.continueHeading} bn={DASHBOARD_UI_BN.continueHeading} />
              ) : (
                <T en={DASHBOARD_UI.startHeading} bn={DASHBOARD_UI_BN.startHeading} />
              )}
            </span>
            <span className="mt-2 block font-display text-[clamp(1.375rem,2.4vw,1.75rem)] font-medium leading-tight text-text transition-colors group-hover:text-accent">
              {next.title}
            </span>
            <span className="mt-2 block text-[14px] text-text-dim">
              {DASHBOARD_UI.moduleLabels[next.module]}
            </span>
          </span>
          <span className="flex items-center justify-between gap-4">
            <span className="text-[14px] text-text-dim">
              <T en={DASHBOARD_UI.resumeHint} bn={DASHBOARD_UI_BN.resumeHint} />
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            >
              <ArrowIcon />
            </span>
          </span>
        </Link>
      </section>

      <section aria-labelledby="modules-heading" className="mt-12">
        <SectionTitle id="modules-heading">
          <T en={DASHBOARD_UI.modulesHeading} bn={DASHBOARD_UI_BN.modulesHeading} />
        </SectionTitle>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-dim">
          <T en={DASHBOARD_UI.modulesLede} bn={DASHBOARD_UI_BN.modulesLede} />
        </p>
        <ul className="m-0 mt-3 list-none p-0">
          {moduleRows.map((row, index) => (
            <li
              key={row.id}
              className="row-hover grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-b border-border py-3 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_5.5rem]"
              {...reveal("up", index)}
            >
              <Link
                href={row.href}
                className="col-start-1 row-start-1 min-w-0 truncate text-[15px] text-text no-underline hover:text-accent"
              >
                {row.label}
              </Link>
              <span className="col-start-2 row-start-1 text-right font-mono text-[12px] tabular-nums text-text-dim sm:col-start-3">
                {row.done} / {row.total}
              </span>
              <span className="col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                <ProgressBar
                  value={percent(row.done, row.total)}
                  label={`${row.label} ${progressWord}`}
                  valueText={`${row.done} / ${row.total}`}
                />
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
        <section aria-labelledby="bookmarks-heading">
          <SectionTitle id="bookmarks-heading" meta={<span data-stat="bookmarks">{bookmarks.length}</span>}>
            <T en={DASHBOARD_UI.bookmarksHeading} bn={DASHBOARD_UI_BN.bookmarksHeading} />
          </SectionTitle>
          {bookmarks.length === 0 ? (
            <p className="mt-4 text-[15px] text-text-dim">
              <T en={DASHBOARD_UI.bookmarksEmpty} bn={DASHBOARD_UI_BN.bookmarksEmpty} />
            </p>
          ) : (
            <ul className="m-0 mt-3 list-none p-0" data-stagger>
              {bookmarks.map((page) => (
                <li key={page.href} className="row-hover border-b border-border last:border-b-0">
                  <Link
                    href={page.href}
                    className="flex items-baseline justify-between gap-3 py-2.5 text-[15px] text-text no-underline hover:text-accent"
                  >
                    <span className="min-w-0">{page.title}</span>
                    <span className="shrink-0 font-mono text-[12px] text-text-faint">
                      {DASHBOARD_UI.moduleLabels[page.module]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-labelledby="read-heading">
          <SectionTitle id="read-heading" meta={readPages.length}>
            <T en={DASHBOARD_UI.readHeading} bn={DASHBOARD_UI_BN.readHeading} />
          </SectionTitle>
          {readRows.length === 0 ? (
            <p className="mt-4 text-[15px] text-text-dim">
              <T en={DASHBOARD_UI.readEmpty} bn={DASHBOARD_UI_BN.readEmpty} />
            </p>
          ) : (
            readRows.map((row) => {
              const pages = readPages.filter((page) => page.module === row.module);
              return (
                <div key={row.module} className="mt-5 first:mt-3">
                  <p className="flex items-baseline justify-between gap-3">
                    <span className="text-[15px] font-medium text-text">
                      {DASHBOARD_UI.moduleLabels[row.module]}
                    </span>
                    <span
                      data-read-row={row.module}
                      className="shrink-0 font-mono text-[12px] tabular-nums text-text-dim"
                    >
                      {row.read} / {row.total}
                    </span>
                  </p>
                  <ul className="m-0 mt-1 list-none border-t border-border p-0" data-stagger>
                    {pages.map((page) => (
                      <li key={page.href} className="row-hover border-b border-border last:border-b-0">
                        <Link
                          href={page.href}
                          className="block py-2 text-[15px] text-text-dim no-underline hover:text-accent"
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          )}
        </section>
      </div>
    </div>
  );
}
