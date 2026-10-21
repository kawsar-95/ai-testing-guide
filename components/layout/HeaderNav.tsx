"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_NAV, activeNavId, nextOpenState, type DropdownEvent } from "@/lib/header-nav";
import { navMain } from "@/lib/ui";
import { NavDropdown, navItemClass } from "./NavDropdown";
import { withTrailingSlash } from "./SidebarList";

/**
 * The top nav at 1200 px and wider: a dropdown for the tutorial and each
 * module, and a plain link to the contents page. A route change closes the
 * open dropdown. usePathname can suspend, so the header wraps this in Suspense.
 */
export function HeaderNav() {
  const path = withTrailingSlash(usePathname()) ?? "/";
  const [open, setOpen] = useState<string | null>(null);
  const [lastPath, setLastPath] = useState(path);
  if (path !== lastPath) {
    setLastPath(path);
    setOpen(null);
  }
  const onEvent = useCallback((event: DropdownEvent) => setOpen((current) => nextOpenState(current, event)), []);
  const active = activeNavId(path);

  return <NavItems activeId={active} activePath={path} open={open} onEvent={onEvent} />;
}

/** The nav items. With no `onEvent` (the server fallback), every item is a plain link. */
export function NavItems({
  activeId,
  activePath = "",
  open = null,
  onEvent,
}: {
  activeId: string | null;
  activePath?: string;
  open?: string | null;
  onEvent?: (event: DropdownEvent) => void;
}) {
  return (
    <nav aria-label={navMain} className="ml-auto hidden items-center gap-5 nav:flex">
      {HEADER_NAV.map((item) =>
        item.pages && onEvent ? (
          <NavDropdown
            key={item.id}
            item={item}
            active={item.id === activeId}
            activePath={activePath}
            open={open === item.id}
            onEvent={onEvent}
          />
        ) : (
          <Link
            key={item.id}
            href={item.href}
            aria-current={item.id === activeId ? "page" : undefined}
            className={navItemClass(item.id === activeId)}
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}
