/** Data and rules of the OAuth / OpenID Connect visual: the authorization code flow with PKCE. */

export type Mode = "oauth" | "oidc";
export type Lane = "user" | "app" | "auth" | "api";
export type Text = { en: string; bn: string };

export const MODES: readonly Mode[] = ["oauth", "oidc"];
export const DEFAULT_MODE: Mode = "oauth";
export const LANES: readonly Lane[] = ["user", "app", "auth", "api"];
export const STEP_COUNT = 7;
/** The page: the code must expire shortly, 10 minutes at most is recommended. */
export const CODE_MAX_MINUTES = 10;
/** The page: the required claims of an ID token. */
export const ID_TOKEN_CLAIMS: readonly string[] = ["iss", "sub", "aud", "exp", "iat"];
export const TOKENS_STEP = 5;

export type Message = {
  step: number;
  kind: "arrow" | "note";
  from: Lane;
  to: Lane;
  label: Text;
  token?: "access" | "id";
};

const arrow = (step: number, from: Lane, to: Lane, label: Text, token?: "access" | "id"): Message => ({ step, kind: "arrow", from, to, label, token });
const note = (step: number, lane: Lane, label: Text): Message => ({ step, kind: "note", from: lane, to: lane, label });

/** Every message of the flow, in order. OpenID Connect adds the ID token and its reading. */
export function flow(mode: Mode): readonly Message[] {
  const out: Message[] = [
    arrow(0, "user", "app", { en: "sign in", bn: "সাইন ইন" }),
    note(0, "app", { en: "new secret", bn: "নতুন সিক্রেট" }),
    arrow(1, "app", "user", { en: "redirect", bn: "রিডাইরেক্ট" }),
    arrow(1, "user", "auth", { en: "request", bn: "রিকুয়েস্ট" }),
    arrow(2, "user", "auth", { en: "sign in + approve", bn: "সাইন ইন + অনুমোদন" }),
    arrow(3, "auth", "user", { en: "code, state", bn: "code, state" }),
    arrow(3, "user", "app", { en: "code, state", bn: "code, state" }),
    arrow(4, "app", "auth", { en: "code, verifier", bn: "code, verifier" }),
    note(4, "auth", { en: "compare", bn: "মেলানো" }),
    arrow(5, "auth", "app", { en: "access token", bn: "অ্যাক্সেস টোকেন" }, "access"),
  ];
  if (mode === "oidc") out.push(arrow(5, "auth", "app", { en: "ID token", bn: "ID টোকেন" }, "id"));
  out.push(arrow(6, "app", "api", { en: "access token", bn: "অ্যাক্সেস টোকেন" }, "access"));
  if (mode === "oidc") out.push(note(6, "app", { en: "read ID token", bn: "ID টোকেন পড়া" }));
  return out;
}

/** The messages drawn up to and including this step. */
export function visibleMessages(mode: Mode, step: number): readonly Message[] {
  return flow(mode).filter((m) => m.step <= step);
}

export function arrowCount(mode: Mode, step: number): number {
  return visibleMessages(mode, step).filter((m) => m.kind === "arrow").length;
}

/** Tokens that the app holds after this step: the access token, and with OIDC the ID token too. */
export function tokensHeld(mode: Mode, step: number): number {
  return visibleMessages(mode, step).filter((m) => m.token !== undefined && m.from === "auth").length;
}

/** The scope that the request asks for. OpenID Connect adds `openid`. */
export function scopeFor(mode: Mode): readonly string[] {
  return mode === "oidc" ? ["openid", "reports:read"] : ["reports:read"];
}

/** The required claims that the app reads from the ID token (none without OIDC). */
export function claimsHeld(mode: Mode, step: number): number {
  return tokensHeld(mode, step) > 0 && mode === "oidc" ? ID_TOKEN_CLAIMS.length : 0;
}

/** PKCE: the server transforms the verifier and compares it with the challenge. Hash is a stand-in for S256. */
export function challengeOf(verifier: string): string {
  let h = 5381;
  for (const ch of verifier) h = (h * 33 + ch.charCodeAt(0)) >>> 0;
  return h.toString(16);
}
export function pkceAccepts(challenge: string, verifier: string): boolean {
  return challengeOf(verifier) === challenge;
}

export function narrowMode(live: unknown): Mode {
  return live === "oidc" || live === "oauth" ? live : DEFAULT_MODE;
}
