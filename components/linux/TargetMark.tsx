"use client";

import { useEffect } from "react";

/**
 * Marks the card that the address points to with `data-target`, which the card
 * styles like `:target`. `:target` does not match after a client-side
 * navigation (a command chip on the Linux home page), so the card is marked here.
 * It renders nothing.
 */
export function TargetMark() {
  useEffect(() => {
    const mark = () => {
      document.querySelectorAll("[data-target]").forEach((el) => el.removeAttribute("data-target"));
      let id = "";
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch {
        return; // a malformed %-escape in the address: no card to mark
      }
      const el = id ? document.getElementById(id) : null;
      if (el?.closest(".sheet")) el.setAttribute("data-target", "");
    };
    mark();
    window.addEventListener("hashchange", mark);
    return () => window.removeEventListener("hashchange", mark);
  }, []);
  return null;
}
