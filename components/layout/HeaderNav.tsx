"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_NAV, activeNavId } from "@/lib/header-nav";
import { navMain } from "@/lib/ui";
import { withTrailingSlash } from "./SidebarList";

const ITEM =
  "relative flex h-16 items-center whitespace-nowrap text-[15px] font-medium no-underline transition-colors " +
  "after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-accent after:transition-opacity";

/** The look of a top nav item: dim, and the teal underline when it is current or hovered. */
function navItemClass(active: boolean): string {
  return `${ITEM} ${active ? "text-text after:opacity-100" : "text-text-dim hover:text-text after:opacity-0 hover:after:opacity-100"}`;
}

/** The top nav at 1200 px and wider. usePathname can suspend, so the header wraps this in Suspense. */
export function HeaderNav() {
  return <NavItems activeId={activeNavId(withTrailingSlash(usePathname()) ?? "/")} />;
}

/** The nav links. With no active item (the server fallback), no link is current. */
export function NavItems({ activeId }: { activeId: string | null }) {
  return (
    <nav aria-label={navMain} className="ml-auto hidden items-center gap-6 nav:flex">
      {HEADER_NAV.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          aria-current={item.id === activeId ? "page" : undefined}
          className={navItemClass(item.id === activeId)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
