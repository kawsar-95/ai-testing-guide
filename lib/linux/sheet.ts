/**
 * The glance sheet of a Linux stage: one card for each topic of the stage, one
 * row for each command. The text of a stage lives in lib/linux/sheets/<slug>.ts.
 * This file has the types, the limits that `npm test` enforces, and the pure
 * helpers that the pages, the home tiles, and the search index share.
 */
import { REPO_URL } from "../page.ts";
import type { Source } from "../page.ts";

/** The GitHub link to the data file of a stage ("Suggest an edit"). */
export function sheetEditUrl(slug: string): string {
  return `${REPO_URL}/blob/main/lib/linux/sheets/${slug}.ts`;
}

/** [command, English gloss, Bangla gloss, "!" if the command can destroy data]. */
export type SheetRow = readonly [cmd: string, en: string, bn: string, warn?: "!"];

/** [title, publisher, url]. Keyed by a short name in `StageSheet.sources`. */
export type SourceEntry = readonly [title: string, publisher: string, url: string];

export type SheetCard = {
  /** The topic title. It must equal the title of the topic at the same position in lib/linux/stages.ts. */
  topic: string;
  /** Keys of `StageSheet.sources`: the official pages that give the commands and flags of the card. */
  src: readonly string[];
  /** "keys": the rows are keystrokes of an editor (`dd`, `:wq`), not commands, so they are not counted as commands. */
  kind?: "keys";
  rows: readonly SheetRow[];
};

export type StageSheet = {
  /** `YYYY-MM-DD`: the day the commands of this stage were last checked against their sources. */
  updated: string;
  sources: Readonly<Record<string, SourceEntry>>;
  cards: readonly SheetCard[];
};

// Limits: a card is a glance, not a lesson.
export const MIN_ROWS = 2;
export const MAX_ROWS = 8;
export const MAX_CMD_CHARS = 48;
export const MAX_EN_WORDS = 9;
export const MAX_EN_CHARS = 64;
export const MAX_BN_CHARS = 96;

/** The words of a gloss, as `MAX_EN_WORDS` counts them: a separator such as `·`, `=`, or `…` is not a word. */
export function glossWords(text: string): number {
  return text.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

/**
 * The words that stand for the reader's own value in a command. A page shows
 * them in a different style, and `npm test` rejects any other ALL-CAPS word,
 * so one value always has one name (`PID` is always a process id).
 */
export const PLACEHOLDERS: ReadonlySet<string> = new Set([
  "ADDR", "ARGS", "BASE", "BRANCH", "CHAIN", "CMD", "COUNT", "DATE", "DB", "DEV", "DIR", "DOMAIN", "DST",
  "EXT", "FIELD", "FILE", "FILES", "FS", "GROUP", "HOST", "ID", "IF", "IMAGE", "IP", "ITEM", "JOB", "KEY",
  "LINK", "LIST", "LV", "MODE", "NAME", "NET", "NEW", "NUM", "OLD", "OPTS", "OWNER", "PART", "PATTERN",
  "PID", "PKG", "PORT", "PRIO", "PROTO", "REGEX", "RULE", "SIG", "SIZE", "SRC", "STR", "SUB", "TARGET",
  "TEXT", "TIME", "UNIT", "URL", "USER", "VALUE", "VAR", "VG", "WORD",
]);

/** ALL-CAPS words that are real names, not placeholders: a signal, a firewall chain, a shell keyword. */
export const LITERALS: ReadonlySet<string> = new Set([
  "ACCEPT", "ALL", "DROP", "EOF", "ERR", "EXIT", "FORWARD", "HEAD", "INPUT", "LOG", "NOPASSWD", "OUTPUT",
  "POST", "PUT", "REJECT", "SIGCONT", "SIGHUP", "SIGINT", "SIGKILL", "SIGSTOP", "SIGTERM", "SIGUSR1",
  "UUID", "LABEL", "LANG", "TERM", "EDITOR", "PATH", "HOME", "SHELL", "PWD", "OLDPWD", "IFS", "PS4",
  "BASH_ENV", "LC_ALL", "DEBUG", "RETURN", "TCP", "UDP", "ICMP", "NEW", "RELATED", "ESTABLISHED",
  "DNAT", "SNAT", "MASQUERADE", "GET", "DELETE", "PRIORITY", "ONBOOT", "DHCP", "DNS", "ARP", "BIOS", "UEFI",
  "GRUB", "MBR", "GPT", "PXE", "FIFO", "TTL", "MTU", "VLAN", "ACL", "CIDR", "RAM", "CPU", "UID", "GID", "PPID",
  "END", "ERROR", "INT", "MX", "NF", "NR", "RARP", "WARN",
]);

/** A word that looks like a placeholder: ALL-CAPS, at least 2 characters, not a flag, key, or `$VAR`. */
const CAPS_WORD = /\$\{?[A-Za-z_]\w*|(?<![\w\-+])[A-Z][A-Z0-9_]+(?![\w])/g;

export type CmdPart = { text: string; variable: boolean };

/** The command split at its placeholders. Joining the `text` of the parts gives the command back. */
export function splitCmd(cmd: string): CmdPart[] {
  const parts: CmdPart[] = [];
  let last = 0;
  for (const match of cmd.matchAll(CAPS_WORD)) {
    const word = match[0];
    if (word.startsWith("$") || !PLACEHOLDERS.has(word)) continue;
    const at = match.index ?? 0;
    if (at > last) parts.push({ text: cmd.slice(last, at), variable: false });
    parts.push({ text: word, variable: true });
    last = at + word.length;
  }
  if (last < cmd.length) parts.push({ text: cmd.slice(last), variable: false });
  return parts;
}

/** Each ALL-CAPS word of a command that is neither a placeholder nor a known literal. Empty if the command is clean. */
export function unknownCaps(cmd: string): string[] {
  return [...cmd.matchAll(CAPS_WORD)]
    .map((match) => match[0])
    .filter((word) => !word.startsWith("$") && !PLACEHOLDERS.has(word) && !LITERALS.has(word));
}

/**
 * The sources of a sheet in the order of first citation: the number of a source
 * is its position in `list`, so no source is listed without a cite. A key that
 * is not in `sheet.sources` throws.
 */
export function numberSources(sheet: StageSheet, accessed: string = sheet.updated): {
  list: Source[];
  numberOf: (key: string) => number;
} {
  const order: string[] = [];
  for (const card of sheet.cards) {
    for (const key of card.src) {
      if (!(key in sheet.sources)) throw new Error(`Unknown source "${key}" (topic "${card.topic}")`);
      if (!order.includes(key)) order.push(key);
    }
  }
  return {
    list: order.map((key) => {
      const [title, publisher, url] = sheet.sources[key];
      return { title, publisher, url, accessed };
    }),
    numberOf: (key) => order.indexOf(key) + 1,
  };
}

/** The one-letter commands. Any other single letter at the start of a row is a symbol (`s S t T`), not a command. */
const SINGLE_LETTER_COMMANDS: ReadonlySet<string> = new Set(["w"]);

/** The first word of a command, when it is a program or builtin name. `null` for a path, a key, or a symbol. */
export function commandName(cmd: string): string | null {
  const words = cmd.trim().split(/\s+/);
  let i = 0;
  // Skip `sudo`, `VAR=value`, and `arr=(a b c)` prefixes.
  while (i < words.length - 1) {
    const word = words[i];
    if (word === "sudo") i++;
    else if (/^[A-Za-z_]\w*=\(/.test(word) && !word.includes(")")) {
      while (i < words.length - 1 && !words[i].includes(")")) i++; // an array assignment: up to the word that closes it
      i++;
    } else if (/^[A-Za-z_]\w*=/.test(word)) i++;
    else break;
  }
  const first = words[i];
  if (!first || (first.length === 1 && !SINGLE_LETTER_COMMANDS.has(first))) return null;
  return /^[a-z][a-z0-9._+-]*$/.test(first) && !first.endsWith(".conf") && !first.endsWith(".cfg") ? first : null;
}

/** A command name with the anchor of the first topic whose card has it. */
export type CommandEntry = { name: string; anchor: string };

/**
 * The distinct command names of a sheet, in the order of the cards. `anchors[i]`
 * is the anchor of the topic of card i. The home page links a command to the card
 * that is named after it (the "grep" card for `grep`), or else to the first card
 * that has it.
 */
export function commandIndex(sheet: StageSheet, anchors: readonly string[]): CommandEntry[] {
  const index: CommandEntry[] = [];
  sheet.cards.forEach((card, i) => {
    if (card.kind === "keys") return;
    for (const [cmd] of card.rows) {
      const name = commandName(cmd);
      if (name && !index.some((entry) => entry.name === name)) index.push({ name, anchor: anchors[i] ?? "" });
    }
  });
  sheet.cards.forEach((card, i) => {
    const entry = index.find((e) => e.name === card.topic.toLowerCase());
    if (entry) entry.anchor = anchors[i] ?? "";
  });
  return index;
}

/** The distinct command names of a sheet, in the order of the cards. */
export function commandNames(sheet: StageSheet): string[] {
  return commandIndex(sheet, []).map((entry) => entry.name);
}

/** The words that the reading-time pill counts: the commands and the English glosses. */
export function sheetWords(sheet: StageSheet): number {
  let count = 0;
  for (const card of sheet.cards) {
    for (const [cmd, en] of card.rows) count += `${cmd} ${en}`.split(/\s+/).filter(Boolean).length;
  }
  return count;
}

/** 200 words a minute, rounded up, 1 at least: the same rule as lib/reading-time.ts. */
export function sheetMinutes(sheet: StageSheet): number {
  return Math.max(1, Math.ceil(sheetWords(sheet) / 200));
}

/**
 * The sheet as Markdown, for the search index (lib/search.ts): the page intro,
 * then one `##` section for each topic with one line for each row. The English
 * and the Bangla gloss are both in the line, so both are searchable.
 */
export function sheetSource(
  stage: { title: string; description: string; topics: readonly { title: string }[] },
  sheet: StageSheet,
): string {
  const lines = [`# ${stage.title}`, "", stage.description, ""];
  stage.topics.forEach((topic, i) => {
    lines.push(`## ${topic.title}`, "");
    for (const [cmd, en, bn] of sheet.cards[i]?.rows ?? []) lines.push(`\`${cmd}\` ${en} ${bn}`);
    lines.push("");
  });
  return lines.join("\n");
}
