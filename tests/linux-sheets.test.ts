import { test } from "node:test";
import assert from "node:assert/strict";
import { STAGES } from "../lib/linux/stages.ts";
import { SHEETS, getSheet } from "../lib/linux/sheets/index.ts";
import {
  MAX_BN_CHARS,
  MAX_CMD_CHARS,
  MAX_EN_CHARS,
  MAX_EN_WORDS,
  MAX_ROWS,
  MIN_ROWS,
  commandIndex,
  commandName,
  commandNames,
  glossWords,
  numberSources,
  sheetEditUrl,
  sheetMinutes,
  sheetSource,
  splitCmd,
  unknownCaps,
} from "../lib/linux/sheet.ts";
import type { StageSheet } from "../lib/linux/sheet.ts";

/** Every row of every sheet with a label that names it in a failure message. */
function allRows() {
  return STAGES.flatMap((stage) =>
    (getSheet(stage.slug)?.cards ?? []).flatMap((card) =>
      card.rows.map((row) => ({ where: `${stage.slug} / ${card.topic} / ${row[0]}`, row, card })),
    ),
  );
}

test("every stage has a sheet, with one card for each topic, in the order of the stage", () => {
  assert.equal(Object.keys(SHEETS).length, STAGES.length);
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug);
    assert.ok(sheet, `no sheet for ${stage.slug}`);
    assert.deepEqual(
      sheet.cards.map((card) => card.topic),
      stage.topics.map((topic) => topic.title),
      stage.slug,
    );
  }
  assert.equal(getSheet("no-such-stage"), undefined);
});

test("a card is a glance: row, command, and gloss limits", () => {
  const problems: string[] = [];
  for (const stage of STAGES) {
    for (const card of getSheet(stage.slug)?.cards ?? []) {
      if (card.rows.length < MIN_ROWS || card.rows.length > MAX_ROWS) {
        problems.push(`${stage.slug} / ${card.topic}: ${card.rows.length} rows (${MIN_ROWS} to ${MAX_ROWS})`);
      }
    }
  }
  for (const { where, row } of allRows()) {
    const [cmd, en, bn] = row;
    const words = glossWords(en);
    if (cmd.length > MAX_CMD_CHARS) problems.push(`${where}: command is ${cmd.length} characters (max ${MAX_CMD_CHARS})`);
    if (words > MAX_EN_WORDS) problems.push(`${where}: English gloss is ${words} words (max ${MAX_EN_WORDS})`);
    if (en.length > MAX_EN_CHARS) problems.push(`${where}: English gloss is ${en.length} characters (max ${MAX_EN_CHARS})`);
    if (bn.length > MAX_BN_CHARS) problems.push(`${where}: Bangla gloss is ${bn.length} characters (max ${MAX_BN_CHARS})`);
    for (const [name, text] of [["command", cmd], ["English gloss", en], ["Bangla gloss", bn]] as const) {
      if (text.length === 0 || text !== text.trim()) problems.push(`${where}: ${name} is empty or has outer spaces`);
    }
  }
  assert.deepEqual(problems, []);
});

test("every row has a Bangla gloss in Bangla script, and the warning mark is only '!'", () => {
  const problems: string[] = [];
  for (const { where, row } of allRows()) {
    if (!/[\u0980-\u09FF]/.test(row[2])) problems.push(`${where}: Bangla gloss has no Bangla script`);
    if (row.length > 3 && row[3] !== "!") problems.push(`${where}: warning mark is ${JSON.stringify(row[3])}`);
  }
  assert.deepEqual(problems, []);
});

test("an ALL-CAPS word in a command is a known placeholder or a known literal", () => {
  const problems = allRows()
    .map(({ where, row }) => ({ where, caps: unknownCaps(row[0]) }))
    .filter(({ caps }) => caps.length > 0)
    .map(({ where, caps }) => `${where}: ${caps.join(", ")}`);
  assert.deepEqual(problems, []);
});

test("splitCmd gives the command back when its parts are joined", () => {
  for (const { where, row } of allRows()) {
    assert.equal(splitCmd(row[0]).map((part) => part.text).join(""), row[0], where);
  }
});

test("no command appears twice in a card", () => {
  const problems: string[] = [];
  for (const stage of STAGES) {
    for (const card of getSheet(stage.slug)?.cards ?? []) {
      const seen = new Set<string>();
      for (const [cmd] of card.rows) {
        if (seen.has(cmd)) problems.push(`${stage.slug} / ${card.topic}: ${cmd}`);
        seen.add(cmd);
      }
    }
  }
  assert.deepEqual(problems, []);
});

test("every card cites a source that exists, and every source is cited", () => {
  const problems: string[] = [];
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug)!;
    const cited = new Set<string>();
    for (const card of sheet.cards) {
      if (card.src.length === 0) problems.push(`${stage.slug} / ${card.topic}: cites no source`);
      for (const key of card.src) {
        cited.add(key);
        if (!(key in sheet.sources)) problems.push(`${stage.slug} / ${card.topic}: unknown source "${key}"`);
      }
    }
    for (const key of Object.keys(sheet.sources)) {
      if (!cited.has(key)) problems.push(`${stage.slug}: source "${key}" is never cited`);
    }
    for (const [key, [title, publisher, url]] of Object.entries(sheet.sources)) {
      if (!title.trim() || !publisher.trim()) problems.push(`${stage.slug}: source "${key}" has no title or publisher`);
      if (!/^https:\/\/[^\s"]+$/.test(url)) problems.push(`${stage.slug}: source "${key}" url is not https: ${url}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(sheet.updated)) problems.push(`${stage.slug}: updated is "${sheet.updated}"`);
  }
  assert.deepEqual(problems, []);
});

test("numberSources numbers the sources in order of first citation, and rejects an unknown key", () => {
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug)!;
    const { list, numberOf } = numberSources(sheet);
    assert.equal(list.length, Object.keys(sheet.sources).length, stage.slug);
    assert.equal(numberOf(sheet.cards[0].src[0]), 1, stage.slug);
  }
  const broken = { updated: "2026-01-01", sources: {}, cards: [{ topic: "x", src: ["nope"], rows: [] }] };
  assert.throws(() => numberSources(broken), /Unknown source "nope"/);
});

test("each sheet teaches commands, has a reading time, and an edit link to its own file", () => {
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug)!;
    assert.ok(commandNames(sheet).length >= 5, `${stage.slug}: ${commandNames(sheet).length} commands`);
    assert.ok(sheetMinutes(sheet) >= 1, stage.slug);
    assert.ok(sheetEditUrl(stage.slug).endsWith(`/lib/linux/sheets/${stage.slug}.ts`), stage.slug);
  }
});

test("commandName is a program or builtin after sudo and assignments, not a path, a key, a symbol, or a name", () => {
  assert.equal(commandName("sudo ls -l"), "ls");
  assert.equal(commandName("LC_ALL=C sort FILE"), "sort");
  assert.equal(commandName('arr=(a b c); echo "${arr[1]}"'), "echo");
  assert.equal(commandName("w"), "w");
  for (const text of ["s  S  t  T", "/etc/fstab", "Restart=on-failure", "Link · Internet · Transport · Application", "* * *", "arr=(a b c)"]) {
    assert.equal(commandName(text), null, text);
  }
});

test("no command of any sheet is one letter, except w", () => {
  const letters = STAGES.flatMap((stage) => commandNames(getSheet(stage.slug)!)).filter((name) => name.length === 1);
  assert.deepEqual([...new Set(letters)], ["w"]);
});

test("commandIndex lists each command once, with the anchor of a topic of its stage", () => {
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug)!;
    const anchors = stage.topics.map((topic) => topic.anchor);
    const index = commandIndex(sheet, anchors);
    assert.deepEqual(index.map((entry) => entry.name), commandNames(sheet), stage.slug);
    assert.equal(new Set(index.map((entry) => entry.name)).size, index.length, stage.slug);
    for (const entry of index) assert.ok(anchors.includes(entry.anchor), `${stage.slug}: ${entry.name} -> ${entry.anchor}`);
  }
});

test("a command links to the card named after it, else to the first card that has it; paths and editor keys are not commands", () => {
  const sheet: StageSheet = {
    updated: "2026-01-01",
    sources: {},
    cards: [
      { topic: "A", src: [], rows: [["ls -l", "x", "y"], ["/etc", "x", "y"], ["nano FILE", "x", "y"]] },
      { topic: "B", src: [], rows: [["sudo ls", "x", "y"], ["grep PATTERN FILE", "x", "y"]] },
      { topic: "Nano", src: [], kind: "keys", rows: [["dd", "x", "y"]] },
      { topic: "grep", src: [], rows: [["grep -i PATTERN FILE", "x", "y"]] },
    ],
  };
  assert.deepEqual(commandIndex(sheet, ["a", "b", "nano", "grep"]), [
    { name: "ls", anchor: "a" },
    { name: "nano", anchor: "nano" },
    { name: "grep", anchor: "grep" },
  ]);
});

test("the search text of a sheet has one section for each topic and every command", () => {
  for (const stage of STAGES) {
    const sheet = getSheet(stage.slug)!;
    const text = sheetSource(stage, sheet);
    assert.ok(text.startsWith(`# ${stage.title}`), stage.slug);
    for (const topic of stage.topics) assert.ok(text.includes(`\n## ${topic.title}\n`), `${stage.slug}: ${topic.title}`);
    for (const card of sheet.cards) for (const [cmd] of card.rows) assert.ok(text.includes(`\`${cmd}\``), `${stage.slug}: ${cmd}`);
  }
});
