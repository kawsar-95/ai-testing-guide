import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DEF } from "../lib/visuals/def-oauth-oidc.ts";
import { oauthOidcChips } from "../lib/visuals/oauth-oidc-chips.ts";
import { ID_TOKEN_CLAIMS, STEP_COUNT, arrowCount, challengeOf, claimsHeld, flow, narrowMode, pkceAccepts, scopeFor, tokensHeld, visibleMessages } from "../lib/visuals/oauth-oidc.ts";

test("the aha: OAuth ends with 1 token, OpenID Connect with 2", () => {
  assert.equal(tokensHeld("oauth", 6), 1);
  assert.equal(tokensHeld("oidc", 6), 2);
  assert.equal(tokensHeld("oidc", 4), 0);
  assert.deepEqual(scopeFor("oauth"), ["reports:read"]);
  assert.deepEqual(scopeFor("oidc"), ["openid", "reports:read"]);
});

test("OIDC only adds the ID token and its reading", () => {
  const oauth = flow("oauth");
  const oidc = flow("oidc");
  assert.equal(oidc.length - oauth.length, 2);
  assert.equal(oidc.filter((m) => m.token === "id").length, 1);
  assert.equal(oauth.filter((m) => m.token === "id").length, 0);
  assert.equal(claimsHeld("oidc", 5), ID_TOKEN_CLAIMS.length);
  assert.equal(claimsHeld("oauth", 5), 0);
  assert.equal(ID_TOKEN_CLAIMS.length, 5);
});

test("the flow has the steps in order and every step shows something new", () => {
  for (let s = 1; s < STEP_COUNT; s += 1) assert.ok(visibleMessages("oauth", s).length > visibleMessages("oauth", s - 1).length);
  assert.equal(arrowCount("oauth", 6), 9);
  assert.equal(arrowCount("oidc", 6), 10);
  const last = flow("oauth").at(-1)!;
  assert.deepEqual([last.from, last.to, last.token], ["app", "api", "access"]);
});

test("PKCE: the right verifier matches the challenge, a wrong one does not", () => {
  const challenge = challengeOf("verifier-1");
  assert.equal(pkceAccepts(challenge, "verifier-1"), true);
  assert.equal(pkceAccepts(challenge, "verifier-2"), false);
});

test("narrowMode defaults safely", () => {
  assert.equal(narrowMode(undefined), "oauth");
  assert.equal(narrowMode(5), "oauth");
  assert.equal(narrowMode("oidc"), "oidc");
});

test("the definition has 5 to 8 steps that match the flow", () => {
  assert.equal(DEF.id, "oauth-oidc");
  assert.ok(DEF.steps.length >= 5 && DEF.steps.length <= 8);
  assert.equal(DEF.steps.length, STEP_COUNT);
  for (const s of DEF.steps) assert.ok(s.body.en.split(/\s+/).length <= 40);
});

test("the chips function returns chips for every step", () => {
  for (let step = 0; step < STEP_COUNT; step += 1) {
    for (const live of [undefined, "oauth", "oidc"]) {
      const chips = oauthOidcChips(step, live);
      assert.ok(chips.length >= 1);
      for (const c of chips) assert.ok(c.label.en.length > 0 && c.label.bn.length > 0 && c.value.length > 0);
    }
  }
});

test("the chips follow the toggle", () => {
  const value = (live: unknown, label: string, step = 5) => oauthOidcChips(step, live).find((c) => c.label.en === label)?.value;
  assert.equal(value("oauth", "Tokens"), "1");
  assert.equal(value("oidc", "Tokens"), "2");
  assert.equal(value("oauth", "Required claims"), undefined);
  assert.equal(value("oidc", "Required claims"), "5");
  assert.equal(value(undefined, "Scope", 1), "reports:read");
  assert.equal(value("oidc", "Scope", 1), "openid reports:read");
  assert.equal(value("oidc", "Code lives at most", 3), "10 min");
  assert.equal(value("oauth", "Messages", 6), "9 / 9");
  assert.equal(value("oidc", "Messages", 6), "10 / 10");
});

test("the page shows the visual after PageMeta and before the first section", () => {
  const source = readFileSync(new URL("../content/course/oauth-oidc.mdx", import.meta.url), "utf8");
  const meta = source.indexOf("<PageMeta />");
  const visual = source.indexOf('<Visual name="oauth-oidc" />');
  assert.ok(meta > 0 && visual > meta && visual < source.indexOf("\n## "));
});
