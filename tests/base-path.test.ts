import { test } from "node:test";
import assert from "node:assert/strict";
import { withBasePath } from "../lib/base-path.ts";

const REPO = "/ai-testing-guide";

test("a root path gets the base path", () => {
  assert.equal(withBasePath("/images/a.jpg", REPO), `${REPO}/images/a.jpg`);
});

test("an empty base leaves the path as it is", () => {
  assert.equal(withBasePath("/images/a.jpg", ""), "/images/a.jpg");
});

test("a path that already has the base path stays the same", () => {
  assert.equal(withBasePath(`${REPO}/images/a.jpg`, REPO), `${REPO}/images/a.jpg`);
  assert.equal(withBasePath(REPO, REPO), REPO);
});

test("a path that only starts with the same letters still gets the prefix", () => {
  assert.equal(withBasePath(`${REPO}-x/a.jpg`, REPO), `${REPO}${REPO}-x/a.jpg`);
});

test("external URLs stay the same", () => {
  assert.equal(withBasePath("https://example.com/a.jpg", REPO), "https://example.com/a.jpg");
  assert.equal(withBasePath("http://example.com/a.jpg", REPO), "http://example.com/a.jpg");
  assert.equal(withBasePath("//cdn.example.com/a.jpg", REPO), "//cdn.example.com/a.jpg");
});

test("anchors and relative paths stay the same", () => {
  assert.equal(withBasePath("#top", REPO), "#top");
  assert.equal(withBasePath("a.jpg", REPO), "a.jpg");
  assert.equal(withBasePath("./a.jpg", REPO), "./a.jpg");
  assert.equal(withBasePath("../a.jpg", REPO), "../a.jpg");
});

test("the result never has a double slash at the join", () => {
  assert.equal(withBasePath("/images/a.jpg", `${REPO}/`), `${REPO}/images/a.jpg`);
  assert.equal(withBasePath("/", REPO), `${REPO}/`);
  assert.ok(!withBasePath("/images/a.jpg", `${REPO}/`).includes("//"));
});

test("the default base is BASE_PATH of lib/site.ts", async () => {
  const { BASE_PATH } = await import("../lib/site.ts");
  assert.equal(withBasePath("/images/a.jpg"), `${BASE_PATH}/images/a.jpg`);
});
