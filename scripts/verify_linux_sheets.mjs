#!/usr/bin/env node
/**
 * node scripts/verify_linux_sheets.mjs [stage-slug ...]
 *
 * Checks the Linux command sheets (lib/linux/sheets/<stage>.ts): every command,
 * subcommand, and flag of a row must be in the text of a page that the card of
 * the row cites. It fetches each cited url (the network is needed), strips the
 * HTML, and looks each word up. With no argument it checks every stage.
 *
 * It proves that a command or a flag EXISTS in the cited page. It does not
 * prove that the gloss of the row is right: read the gloss against the page too.
 *
 * Exit code: 0 if no problem, 1 if there is one (a url that does not answer is a problem).
 * Env: LINUX_SHEETS_CACHE  folder of the page cache (default node_modules/.cache/linux-sheets)
 *      LINUX_SHEETS_DIR    folder of the sheets (default lib/linux/sheets); the self-test uses it
 */
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SHEETS = process.env.LINUX_SHEETS_DIR ?? join(ROOT, "lib", "linux", "sheets");
const CACHE = process.env.LINUX_SHEETS_CACHE ?? join(ROOT, "node_modules", ".cache", "linux-sheets");
mkdirSync(CACHE, { recursive: true });

// Tools whose second word is a subcommand that must be in the cited text.
const SUBCOMMAND_TOOLS = new Set([
  "docker", "systemctl", "journalctl", "ip", "apt", "apt-get", "apt-cache", "dpkg", "dnf", "rpm", "snap", "git",
  "podman", "nmcli", "resolvectl", "timedatectl", "loginctl", "systemd-analyze", "pvs", "lvm", "ufw",
  "firewall-cmd", "nft", "iptables", "ssh-keygen", "crictl", "ctr", "runc", "pacman", "zypper", "apk", "man",
]);
// Tools whose second word is an argument, not a subcommand.
const SKIP_SUB = new Set(["man"]);

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
/** The word, with no word character or hyphen next to it. */
const has = (text, word) => new RegExp(`(?<![\\w-])${escapeRe(word)}(?![\\w-])`).test(text);

function decode(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/?(?:span|code|b|i|em|strong|a|kbd|var|samp|tt|u|small|mark)(?:\s[^>]*)?>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
    .replace(/[ \t]+/g, " ");
}

async function getPage(url) {
  const file = join(CACHE, `${createHash("sha1").update(url).digest("hex").slice(0, 16)}.json`);
  if (existsSync(file)) {
    const cached = JSON.parse(readFileSync(file, "utf8"));
    return { ...cached, text: decode(cached.html) };
  }
  let last = "";
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (verify-linux-sheets)" }, signal: AbortSignal.timeout(25000) });
      const html = res.ok ? await res.text() : "";
      const page = { url, status: res.status, final: res.url, html };
      if (res.ok) writeFileSync(file, JSON.stringify(page));
      return { ...page, text: decode(html) };
    } catch (e) {
      last = String(e.cause?.code ?? e.name ?? e.message);
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
  return { url, status: 0, final: url, html: "", text: "", error: last };
}

/** The flags of a command: `--long` and `-s` (a run of letters such as `-tulpn` is checked letter by letter). */
function flagsOf(cmd) {
  const flags = [];
  for (let token of cmd.split(/\s+/)) {
    token = token.replace(/^["'(]+|["')]+$/g, "");
    let m;
    if ((m = token.match(/^(--[a-z][a-z0-9-]*)/i))) flags.push({ word: m[1], kind: "long" });
    else if ((m = token.match(/^(-[A-Za-z][A-Za-z0-9]*)/))) {
      const word = m[1];
      if (/^-\d/.test(word)) continue;
      flags.push({ word, kind: "short", letters: [...word.slice(1)].filter((c) => /[A-Za-z]/.test(c)) });
    }
  }
  return flags;
}

const requested = process.argv.slice(2);
const slugs = requested.length
  ? requested
  : readdirSync(SHEETS).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => f.replace(/\.ts$/, ""));

let rows = 0, flagCount = 0, problemCount = 0;
for (const slug of slugs) {
  const mod = await import(pathToFileURL(join(SHEETS, `${slug}.ts`)).href);
  const sheet = Object.values(mod).find((v) => v && v.cards);
  const texts = {};
  await Promise.all(
    Object.entries(sheet.sources).map(async ([key, [, , url]]) => {
      const page = await getPage(url);
      texts[key] = page.text;
      if (page.status !== 200) {
        console.log(`URL ${page.status}${page.error ? " " + page.error : ""}: ${slug}/${key} ${url}`);
        problemCount++;
      }
    }),
  );
  for (const card of sheet.cards) {
    const union = card.src.map((key) => texts[key] ?? "").join("\n");
    for (const [cmd] of card.rows) {
      rows++;
      const words = cmd.trim().split(/\s+/);
      let i = 0;
      while (i < words.length - 1 && (words[i] === "sudo" || /^[A-Za-z_]\w*=/.test(words[i]))) i++;
      const name = words[i];
      const problems = [];
      const review = [];
      if (card.kind !== "keys" && /^[a-z][a-z0-9._+-]*$/.test(name) && !has(union, name)) problems.push(`command "${name}" is not in the cited pages`);
      const sub = words[i + 1];
      if (SUBCOMMAND_TOOLS.has(name) && !SKIP_SUB.has(name) && sub && /^[a-z][a-z-]+$/.test(sub) && !has(union, sub)) problems.push(`subcommand "${sub}" is not in the cited pages`);
      for (const flag of flagsOf(cmd)) {
        flagCount++;
        // `kill -TERM PID` is the documented `-signal` form: signal(7) must name SIGTERM.
        if (name === "kill" && /^-[A-Z]{2,}$/.test(flag.word)) {
          if (!has(union, "SIG" + flag.word.slice(1))) problems.push(`signal ${flag.word}: SIG${flag.word.slice(1)} is not in the cited pages`);
          continue;
        }
        if (flag.kind === "long") {
          if (!has(union, flag.word)) problems.push(`flag ${flag.word}`);
        } else if (!has(union, flag.word)) {
          const missing = flag.letters.filter((c) => !has(union, "-" + c));
          if (missing.length && has(union, "-" + flag.letters[0]) && flag.letters.length > 1) {
            review.push(`${flag.word}: ${missing.map((c) => "-" + c).join(" ")} is not a flag; is it an argument attached to -${flag.letters[0]}?`);
          } else if (missing.length) problems.push(`flag ${flag.word} (letters ${missing.map((c) => "-" + c).join(" ")} not found)`);
        }
      }
      if (review.length) console.log(`? ${slug} / ${card.topic} / ${cmd}\n    ${review.join("; ")}`);
      if (problems.length) {
        problemCount++;
        console.log(`✗ ${slug} / ${card.topic} / ${cmd}\n    ${problems.join("; ")}`);
      }
    }
  }
}
console.log(`\n${slugs.length} stage(s), ${rows} rows, ${flagCount} flags checked, ${problemCount} problem(s)`);
process.exit(problemCount ? 1 : 0);
