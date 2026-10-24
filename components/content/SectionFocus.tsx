"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { SHELL_BN } from "@/lib/bn/shell";
import {
  oneSectionAtATime,
  sectionNext,
  sectionOf,
  sectionPrevious,
  sectionsGroup,
  showAllSections,
} from "@/lib/ui";

type Section = { title: string; heading: HTMLElement };
type Ready = { article: HTMLElement; kids: HTMLElement[]; sections: Section[]; top: HTMLElement; bottom: HTMLElement };

const STORAGE_KEY = "section-focus";
/** A page with fewer sections than this shows all of them. */
const MIN_SECTIONS = 3;

/** The direct child of `article` that holds `el`, or null. */
function childOf(article: HTMLElement, el: Element): HTMLElement | null {
  let node: Element | null = el;
  while (node && node.parentElement !== article) node = node.parentElement;
  return node as HTMLElement | null;
}

function targetOf(hash: string): HTMLElement | null {
  if (!hash.startsWith("#") || hash.length < 2) return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

/**
 * Shows one `##` section of the page at a time, with a step bar above it and
 * Previous and Next buttons below it. A long chapter is then read in small
 * steps. The text before the first `##` stays visible. The reader can show
 * all sections (the choice is saved). A link or hash that points into a hidden
 * section shows that section. With no JavaScript, all sections show.
 *
 * It reads the flat children of `article[data-content]` (the MDX output) and
 * adds two slot elements to it. The article is static, so React does not
 * re-render it.
 */
export function SectionFocus() {
  const [ready, setReady] = useState<Ready | null>(null);
  const [active, setActive] = useState(0);
  const [on, setOn] = useState(true);
  const groupLabel = useBn(sectionsGroup, SHELL_BN.sectionsGroup);
  // Set by a click on a button or a link: scroll and move focus after the render.
  const pending = useRef<HTMLElement | "top" | null>(null);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("article[data-content]");
    if (!article) return;
    const kids = [...article.children] as HTMLElement[];
    const sections: Section[] = [];
    let index = 0;
    for (const el of kids) {
      if (el.tagName === "H2") {
        index += 1;
        sections.push({ title: el.textContent ?? "", heading: el });
      }
      el.dataset.sec = String(index);
    }
    if (sections.length < MIN_SECTIONS) return;

    const top = document.createElement("div");
    const bottom = document.createElement("div");
    top.className = "scroll-mt-20";
    article.insertBefore(top, sections[0].heading);
    article.appendChild(bottom);

    const reveal = (hash: string) => {
      const el = targetOf(hash);
      const child = el && childOf(article, el);
      const n = child ? Number(child.dataset.sec) : 0;
      if (!child || n === 0 || !child.hasAttribute("data-sec-hidden")) return;
      pending.current = el;
      setActive(n - 1);
    };
    // A click covers a second click on the current hash: no hashchange fires.
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest('a[href^="#"]');
      if (link) reveal(link.getAttribute("href") ?? "");
    };
    const onHashChange = () => reveal(window.location.hash);

    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Blocked storage: use the default.
    }
    setOn(saved !== "off");
    setReady({ article, kids, sections, top, bottom });
    // Hide the other sections before a hash target is looked up.
    for (const el of kids) if (el.dataset.sec !== "0" && el.dataset.sec !== "1") el.setAttribute("data-sec-hidden", "");
    reveal(window.location.hash);

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
      for (const el of kids) {
        el.removeAttribute("data-sec-hidden");
        delete el.dataset.sec;
      }
      top.remove();
      bottom.remove();
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const { article, kids, sections, bottom } = ready;
    for (const el of kids) {
      const n = Number(el.dataset.sec);
      el.toggleAttribute("data-sec-hidden", on && n !== 0 && n !== active + 1);
    }
    article.insertBefore(bottom, sections[active + 1]?.heading ?? null);
    const target = pending.current;
    pending.current = null;
    if (target === "top") {
      ready.top.scrollIntoView({ block: "start" });
      const heading = sections[active].heading;
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    } else if (target) {
      target.scrollIntoView();
    }
  }, [ready, active, on]);

  if (!ready) return null;
  const { sections } = ready;
  const total = sections.length;

  const go = (i: number) => {
    pending.current = "top";
    setActive(i);
  };
  const setFocusMode = (value: boolean) => {
    setOn(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
    } catch {
      // Blocked storage: the choice lasts until the page closes.
    }
  };

  const ghost = "btn btn-ghost btn-sm";
  const step = "btn btn-sm min-w-0 flex-1 justify-between gap-3 text-left";

  return (
    <>
      {createPortal(
        on ? (
          <div role="group" aria-label={groupLabel} className="mb-6 not-prose">
            <div className="flex items-center justify-between gap-3">
              <p className="m-0 font-mono text-[12px] text-text-dim">
                <T en={sectionOf(active + 1, total)} bn={SHELL_BN.sectionOf(active + 1, total)} />
              </p>
              <button type="button" onClick={() => setFocusMode(false)} className={ghost}>
                <T en={showAllSections} bn={SHELL_BN.showAllSections} />
              </button>
            </div>
            <div className="mt-1 flex gap-1">
              {sections.map((s, i) => (
                <button
                  key={s.heading.id || i}
                  type="button"
                  aria-label={s.title}
                  aria-current={i === active ? "step" : undefined}
                  onClick={() => go(i)}
                  className="group flex h-6 min-w-0 flex-1 items-center"
                >
                  <span
                    className={
                      "h-1.5 w-full rounded-full transition-colors " +
                      (i === active ? "bg-accent" : i < active ? "bg-accent/40" : "bg-border-strong group-hover:bg-text-faint")
                    }
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-6 not-prose">
            <button type="button" onClick={() => setFocusMode(true)} className={ghost}>
              <T en={oneSectionAtATime} bn={SHELL_BN.oneSectionAtATime} />
            </button>
          </div>
        ),
        ready.top,
      )}
      {on
        ? createPortal(
            <nav aria-label={groupLabel} className="not-prose mt-10 flex gap-3 border-t border-border pt-6">
              {active > 0 ? (
                <button type="button" onClick={() => go(active - 1)} className={step + " btn-outline"}>
                  <span aria-hidden="true">←</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] text-text-dim">
                      <T en={sectionPrevious} bn={SHELL_BN.sectionPrevious} />
                    </span>
                    <span className="block truncate">{sections[active - 1].title}</span>
                  </span>
                </button>
              ) : null}
              {active < total - 1 ? (
                <button type="button" onClick={() => go(active + 1)} className={step + " btn-primary"}>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] opacity-80">
                      <T en={sectionNext} bn={SHELL_BN.sectionNext} />
                    </span>
                    <span className="block truncate">{sections[active + 1].title}</span>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              ) : null}
            </nav>,
            ready.bottom,
          )
        : null}
    </>
  );
}
