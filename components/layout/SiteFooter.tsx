import Link from "next/link";
import { T } from "@/components/i18n/T";
import { SHELL_BN } from "@/lib/bn/shell";
import { CONTENTS_HOME } from "@/lib/contents";
import { GROUPS } from "@/lib/nav";
import { REPO_URL } from "@/lib/page";
import { OWNER, SITE_NAME } from "@/lib/site";
import { MODULES } from "@/lib/stats";
import { footerColumns, footerContents, footerSource, footerSummary } from "@/lib/ui";
import { BrandMark } from "./BrandMark";

const LINK = "text-[14px] text-text-dim no-underline transition-colors hover:text-accent";
const HEADING = "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-faint";

/** The site footer: the brand, three link columns, and the copyright line. */
export function SiteFooter() {
  const columns = [
    { key: "tutorial", title: footerColumns.tutorial, bn: SHELL_BN.footerColumns.tutorial, links: GROUPS.map((group) => ({ href: group.pages[0].href, label: group.title })) },
    { key: "modules", title: footerColumns.modules, bn: SHELL_BN.footerColumns.modules, links: MODULES.map((module) => ({ href: module.href, label: module.title })) },
    { key: "project", title: footerColumns.project, bn: SHELL_BN.footerColumns.project, links: [{ href: CONTENTS_HOME, label: footerContents, bn: SHELL_BN.footerContents }] },
  ];
  return (
    <footer className="mt-16 border-t border-border bg-bg-raised-2">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-text no-underline">
            <span aria-hidden="true" className="grid size-[34px] place-items-center rounded-lg bg-accent text-bg">
              <BrandMark className="size-5" mono />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">{SITE_NAME}</span>
          </Link>
          <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-text-dim"><T en={footerSummary} bn={SHELL_BN.footerSummary} />
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.key} aria-labelledby={`footer-${column.key}`}>
            <h2 id={`footer-${column.key}`} className={HEADING}>
              <T en={column.title} bn={column.bn} />
            </h2>
            <ul className="m-0 mt-4 grid list-none gap-2.5 p-0">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {"bn" in link ? <T en={link.label} bn={link.bn} /> : link.label}
                  </Link>
                </li>
              ))}
              {column.key === "project" ? (
                <li>
                  <a href={REPO_URL} className={LINK}>
                    <T en={footerSource} bn={SHELL_BN.footerSource} />
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-[1200px] px-4 py-5 font-mono text-xs text-text-faint sm:px-6">
          © 2026{" "}
          <a href={OWNER.url} className="underline underline-offset-2 hover:text-accent">
            {OWNER.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
