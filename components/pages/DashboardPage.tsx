"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DASHBOARD_UI_BN } from "@/lib/bn/dashboard";
import { FundamentalsProgressSummary } from "@/components/fundamentals/FundamentalsProgressSummary";
import { LinuxProgressSummary } from "@/components/linux/LinuxProgressSummary";
import { useFundamentalsProgress } from "@/components/fundamentals/useFundamentalsProgress";
import { useLinuxProgress } from "@/components/linux/useLinuxProgress";
import { ProgressSummary } from "@/components/modules/ProgressSummary";
import { progressHook } from "@/components/modules/useModuleProgress";
import { useBookmarks, useLastPage, usePageRead } from "@/components/reading/useReadingState";
import { DASHBOARD_UI } from "@/lib/dashboard";
import { contentPage, continueTarget, exportFileName, readByModule } from "@/lib/dashboard-data";
import { ALL_FUNDAMENTALS_TOPIC_IDS } from "@/lib/fundamentals/chapters";
import { ALL_TOPIC_IDS } from "@/lib/linux/stages";
import { withBasePath } from "@/lib/base-path";
import { PROGRESS_MODULES } from "@/lib/modules/registry";
import { CONTENT_PAGES, exportProgress } from "@/lib/reading-state";
import { AUTHOR } from "@/lib/site";

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
  // Safari can cancel the download if the URL goes at once.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function SectionTitle({ id, children }: { id: string; children: ReactNode }) {
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
  // PROGRESS_MODULES is a fixed list, so this calls the same hooks in the same order on every render.
  const flatStores = PROGRESS_MODULES.map((m) => progressHook(m)());

  const readPages = read.done.map(contentPage).filter((page) => page !== undefined);
  const bookmarks = [...marks.done].reverse().map(contentPage).filter((page) => page !== undefined);
  const next = continueTarget(lastPage.last);
  const hasLast = contentPage(lastPage.last ?? "") !== undefined;
  const rows = readByModule(read.done);
  const siteTitle = useBn(DASHBOARD_UI.siteTitle, DASHBOARD_UI_BN.siteTitle);
  const authorPhotoAlt = useBn(DASHBOARD_UI.authorPhotoAlt, DASHBOARD_UI_BN.authorPhotoAlt);
  const resetConfirm = useBn(DASHBOARD_UI.resetConfirm, DASHBOARD_UI_BN.resetConfirm);

  function reset() {
    if (!window.confirm(resetConfirm)) return;
    for (const store of [read, marks, linux, fundamentals, ...flatStores]) store.clear();
    lastPage.clear();
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className={`${LABEL} text-accent`}><T en={DASHBOARD_UI.eyebrow} bn={DASHBOARD_UI_BN.eyebrow} /></p>
          <h1 className="mt-3 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em] text-text">
            <T en={DASHBOARD_UI.heading} bn={DASHBOARD_UI_BN.heading} />
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-pretty text-text-dim"><T en={DASHBOARD_UI.lede} bn={DASHBOARD_UI_BN.lede} /></p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={downloadExport} className="btn btn-outline btn-sm">
            <span aria-hidden="true">📥</span>
            <T en={DASHBOARD_UI.export} bn={DASHBOARD_UI_BN.export} />
          </button>
          <button type="button" onClick={reset} className="btn btn-ghost btn-sm">
            <span aria-hidden="true">🗑️</span>
            <T en={DASHBOARD_UI.reset} bn={DASHBOARD_UI_BN.reset} />
          </button>
        </div>
      </header>

      <section aria-label={siteTitle} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,0.6fr))_repeat(4,minmax(0,1fr))]">
        <div className={`${CARD} self-end`}>
          <p data-stat="read" className="font-display text-[34px] font-bold leading-none text-text tabular-nums">
            {readPages.length}
            <span className="text-xl text-text-faint"> / {CONTENT_PAGES.length}</span>
          </p>
          <p className="mt-2 text-[14px] text-text-dim"><T en={DASHBOARD_UI.statRead} bn={DASHBOARD_UI_BN.statRead} /></p>
        </div>
        <div className={`${CARD} self-end`}>
          <p data-stat="bookmarks" className="font-display text-[34px] font-bold leading-none text-text tabular-nums">
            {bookmarks.length}
          </p>
          <p className="mt-2 text-[14px] text-text-dim"><T en={DASHBOARD_UI.statBookmarks} bn={DASHBOARD_UI_BN.statBookmarks} /></p>
        </div>
        <div>
          <p className={`${LABEL} mb-2 text-text-faint`}>{DASHBOARD_UI.moduleLabels.linux}</p>
          <LinuxProgressSummary ids={ALL_TOPIC_IDS} />
        </div>
        <div>
          <p className={`${LABEL} mb-2 text-text-faint`}>{DASHBOARD_UI.moduleLabels.fundamentals}</p>
          <FundamentalsProgressSummary ids={ALL_FUNDAMENTALS_TOPIC_IDS} />
        </div>
        {PROGRESS_MODULES.map((m) => (
          <div key={m.id}>
            <p className={`${LABEL} mb-2 text-text-faint`}>{m.label}</p>
            <ProgressSummary moduleId={m.id} ids={m.lessonIds} />
          </div>
        ))}
      </section>

      <section aria-labelledby="continue-heading" className="mt-12">
        <SectionTitle id="continue-heading">{hasLast ? <T en={DASHBOARD_UI.continueHeading} bn={DASHBOARD_UI_BN.continueHeading} /> : <T en={DASHBOARD_UI.startHeading} bn={DASHBOARD_UI_BN.startHeading} />}</SectionTitle>
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
          <SectionTitle id="bookmarks-heading"><T en={DASHBOARD_UI.bookmarksHeading} bn={DASHBOARD_UI_BN.bookmarksHeading} /></SectionTitle>
          {bookmarks.length === 0 ? (
            <p className="mt-4 text-[15px] text-text-dim"><T en={DASHBOARD_UI.bookmarksEmpty} bn={DASHBOARD_UI_BN.bookmarksEmpty} /></p>
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
          <SectionTitle id="read-heading"><T en={DASHBOARD_UI.readHeading} bn={DASHBOARD_UI_BN.readHeading} /></SectionTitle>
          {readPages.length === 0 ? <p className="mt-4 text-[15px] text-text-dim"><T en={DASHBOARD_UI.readEmpty} bn={DASHBOARD_UI_BN.readEmpty} /></p> : null}
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

      <section aria-labelledby="author-heading" className="mt-16">
        <SectionTitle id="author-heading"><T en={DASHBOARD_UI.authorHeading} bn={DASHBOARD_UI_BN.authorHeading} /></SectionTitle>
        <div className={`${CARD} mt-5 flex flex-col gap-6 sm:flex-row sm:items-start`}>
          {/* eslint-disable-next-line @next/next/no-img-element -- static export: a plain img with the base path added */}
          <img
            src={withBasePath(AUTHOR.photo)}
            alt={authorPhotoAlt}
            width={112}
            height={112}
            className="size-28 shrink-0 rounded-full border border-border object-cover"
          />
          <div className="min-w-0">
            <p className="font-display text-2xl font-semibold text-text">{AUTHOR.name}</p>
            <p className="mt-1 text-[15px] text-text-dim">{AUTHOR.role}</p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-dim">{AUTHOR.bio}</p>
            <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0">
              {AUTHOR.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
