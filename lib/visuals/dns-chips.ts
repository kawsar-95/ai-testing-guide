import type { Chip } from "./chips.ts";
import { hops, totalMs, TTL_SECONDS } from "./dns.ts";

/** The live numbers of each step. `live` is the cache switch (true = cached); the stage starts not cached. */
export function dnsChips(step: number, live: unknown): readonly Chip[] {
  const cached = typeof live === "boolean" ? live : false;
  const chips: Chip[] = [
    { label: { en: "Hops", bn: "হপ" }, value: `${hops(cached)}` },
    { label: { en: "Time", bn: "সময়" }, value: `${totalMs(cached)} ms` },
  ];
  if (step >= 6) chips.push({ label: { en: "TTL", bn: "TTL" }, value: `${TTL_SECONDS} s` });
  return chips;
}
