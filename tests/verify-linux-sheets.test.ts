import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * scripts/verify_linux_sheets.mjs on a fixture: a sheet of a few rows and a page that is in the
 * cache, so there is no network. The page says what a `ls` page would say.
 */
const SCRIPT = join(import.meta.dirname, "..", "scripts", "verify_linux_sheets.mjs");
const URL_OK = "https://example.test/page";
const PAGE = `<html><body><p>ls - list directory contents. -l use a long listing format. -a do not ignore entries.
 whoami - print the user name. systemctl status NAME. kill: kill -s SIGTERM is the default signal.</p></body></html>`;

type Row = [string, string, string];
type Card = { topic: string; src: string[]; kind?: "keys"; rows: Row[] };

function run(cards: Card[], page = PAGE) {
  const dir = mkdtempSync(join(tmpdir(), "verify-linux-sheets-"));
  try {
    const sheets = join(dir, "sheets");
    const cache = join(dir, "cache");
    mkdirSync(sheets);
    mkdirSync(cache);
    const sheet = { updated: "2026-01-01", sources: { s: ["Title", "Publisher", URL_OK] }, cards };
    writeFileSync(join(sheets, "fixture.ts"), `export const FIXTURE = ${JSON.stringify(sheet)};\n`);
    const key = createHash("sha1").update(URL_OK).digest("hex").slice(0, 16);
    writeFileSync(join(cache, `${key}.json`), JSON.stringify({ url: URL_OK, status: 200, final: URL_OK, html: page }));
    const result = spawnSync(process.execPath, [SCRIPT, "fixture"], {
      env: { ...process.env, LINUX_SHEETS_DIR: sheets, LINUX_SHEETS_CACHE: cache },
      encoding: "utf8",
    });
    return { code: result.status, out: result.stdout + result.stderr };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const card = (...cmds: string[]): Card => ({ topic: "T", src: ["s"], rows: cmds.map((c): Row => [c, "x", "y"]) });

test("a command, a flag, and a run of flags that are in the page pass", () => {
  const { code, out } = run([card("ls -l", "ls -la", "whoami", "sudo ls")]);
  assert.equal(code, 0);
  assert.match(out, /1 stage\(s\), 4 rows, 2 flags checked, 0 problem\(s\)/);
});

test("a flag that is not in the page fails, and so does a command", () => {
  const flag = run([card("ls --nope")]);
  assert.equal(flag.code, 1);
  assert.match(flag.out, /✗ fixture \/ T \/ ls --nope\n\s+flag --nope/);
  const command = run([card("whoamii")]);
  assert.equal(command.code, 1);
  assert.match(command.out, /command "whoamii" is not in the cited pages/);
});

test("a subcommand of a tool such as systemctl must be in the page", () => {
  assert.equal(run([card("systemctl status NAME")]).code, 0);
  const bad = run([card("systemctl frobnicate NAME")]);
  assert.equal(bad.code, 1);
  assert.match(bad.out, /subcommand "frobnicate" is not in the cited pages/);
});

test("kill -TERM is the signal form: the page must name SIGTERM", () => {
  assert.equal(run([card("kill -TERM PID")]).code, 0);
  const bad = run([card("kill -TERM PID")], PAGE.replace("SIGTERM", "SIGOTHER"));
  assert.equal(bad.code, 1);
  assert.match(bad.out, /signal -TERM: SIGTERM is not in the cited pages/);
});

test("the rows of an editor card are keystrokes, so their first word is not looked up", () => {
  assert.equal(run([{ topic: "Keys", src: ["s"], kind: "keys", rows: [["dd", "x", "y"]] }]).code, 0);
});

test("a path, a symbol, and a name in capitals are not looked up as commands", () => {
  assert.equal(run([card("/etc/fstab", "* * *", "RARP", "Link · Internet")]).code, 0);
});
