"use client";

import { useBn } from "@/components/i18n/useBn";
import { DASHBOARD_UI_BN } from "@/lib/bn/dashboard";
import { withBasePath } from "@/lib/base-path";
import { DASHBOARD_UI } from "@/lib/dashboard";
import { AUTHOR } from "@/lib/site";

/** The photo, the name, the role, the bio, and the links of the author. The dashboard and the home page use it. */
export function AuthorCard() {
  const photoAlt = useBn(DASHBOARD_UI.authorPhotoAlt, DASHBOARD_UI_BN.authorPhotoAlt);
  return (
    <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export: a plain img with the base path added */}
      <img
        src={withBasePath(AUTHOR.photo)}
        alt={photoAlt}
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
  );
}
