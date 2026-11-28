import type { Chip } from "./chips.ts";
import { CODE_MAX_MINUTES, TOKENS_STEP, arrowCount, claimsHeld, narrowMode, scopeFor, tokensHeld } from "./oauth-oidc.ts";

/** The live numbers of each step. `live` is the mode that the toggle sets: "oauth" or "oidc". */
export function oauthOidcChips(step: number, live: unknown): readonly Chip[] {
  const mode = narrowMode(live);
  const total = arrowCount(mode, 99);
  const chips: Chip[] = [{ label: { en: "Messages", bn: "মেসেজ" }, value: `${arrowCount(mode, step)} / ${total}` }];
  if (step >= 1) chips.push({ label: { en: "Scope", bn: "স্কোপ" }, value: scopeFor(mode).join(" ") });
  if (step === 3 || step === 4) chips.push({ label: { en: "Code lives at most", bn: "কোডের মেয়াদ সর্বোচ্চ" }, value: `${CODE_MAX_MINUTES} min` });
  if (step >= TOKENS_STEP) {
    chips.push({ label: { en: "Tokens", bn: "টোকেন" }, value: String(tokensHeld(mode, step)) });
    if (mode === "oidc") chips.push({ label: { en: "Required claims", bn: "আবশ্যক ক্লেইম" }, value: String(claimsHeld(mode, step)) });
  }
  return chips;
}
