import { test } from "node:test";
import assert from "node:assert/strict";
import { STAGES } from "../lib/linux/stages.ts";
import { getSheet } from "../lib/linux/sheets/index.ts";

/**
 * The rule of the red "!" of a sheet row (see "Command sheets" in CLAUDE.md): the command can delete
 * or overwrite data, unless it asks before each one (`rm -i`, `cp -i`, `mv -n`). Stopping a process is
 * not deleting data. Quoted text is skipped, so `awk '$3 > 100'` is not a redirect.
 */
function destroysData(cmd: string): boolean {
  const c = cmd.replace(/'[^']*'|"[^"]*"/g, "''");
  const has = (re: RegExp) => re.test(c);
  if (has(/(^|[\s|;(])rm\s/) && !has(/(^|[\s|;(])rm\s+-i\b/)) return true; // rm, docker rm
  if (has(/(^|[\s|;(])(cp|mv)\s/) && !has(/\s-[a-zA-Z]*[in][a-zA-Z]*(\s|$)/)) return true; // cp, mv without -i or -n
  if (has(/(^|[^>&\d])>(?![>&])\s*(?!\/dev\/null)\S/)) return true; // > FILE (not >>, >&, /dev/null)
  if (has(/\d>(?![>&])\s*(?!\/dev\/null)\S/) || has(/&>\s*(?!\/dev\/null)\S/)) return true; // 2> FILE, &> FILE
  if (has(/\btee\s+(?!-a\b)/)) return true; // tee without -a
  if (has(/\btar\s+-?[a-zA-Z]*[cx]/)) return true; // tar -c, tar -x
  if (has(/\bcurl\s(.*\s)?(-[a-zA-Z]*[oO]\b|--output\b|--remote-name)/)) return true; // curl -o, curl -O
  return /\b(mkfs(\.\w+)?|mkswap|pvcreate|pvremove|vgremove|lvremove|shred|wipefs|truncate|grub-install|purge|autoremove|full-upgrade|remove|prune)\b|\buserdel\s+-r\b|--delete\b|\s-delete\b|\bdd\s.*\bof=|\bfdisk\s+(?!-l\b)|\bsed\s+(.*\s)?(-i|--in-place)(?![.\w=])|\bcrontab\s+-r\b/.test(c); // sed -i.bak keeps the original
}

test("the rule of the red ! on its own", () => {
  const yes = ["rm FILE", "rm -r DIR", "docker rm NAME", "cp FILE DST", "cp -a SRC DST", "mv *.txt DIR/", "echo TEXT > FILE", "cat > FILE",
    "CMD > FILE 2>&1", "CMD 2> FILE", "CMD &> FILE", "CMD | tee FILE | CMD", "tar -xzf NAME.tar.gz", "tar -czf NAME.tar.gz DIR",
    "sudo mkfs.ext4 DEV", "sudo fdisk DEV", "sudo apt purge PKG", "sudo snap remove NAME", "docker system prune", "rsync -av --delete SRC DST",
    "curl -O URL", "sudo userdel -r USER", "sed -i 's/OLD/NEW/' FILE"];
  const no = ["rm -i FILE", "rmdir DIR", "cp -i FILE DST", "mv -n OLD NEW", "echo TEXT >> FILE", "CMD 2>/dev/null", "CMD 2>&1",
    "CMD | tee -a FILE", "tar -tzf NAME.tar.gz", "sudo fdisk -l", "kill -9 PID", "awk '$3 > 100' FILE", "gunzip FILE.gz", "unzip NAME.zip",
    "curl -I URL", "wget URL", "sudo groupdel GROUP", "sudo iptables -F", "BIOS/UEFI → GRUB → kernel → systemd", "sed -i.bak 's/OLD/NEW/g' FILE"];
  for (const cmd of yes) assert.equal(destroysData(cmd), true, cmd);
  for (const cmd of no) assert.equal(destroysData(cmd), false, cmd);
});

test("the red ! is on every row that can delete or overwrite data, and on no other row", () => {
  const wrong: string[] = [];
  for (const stage of STAGES) {
    for (const card of getSheet(stage.slug)?.cards ?? []) {
      if (card.kind === "keys") {
        // editor keys, not shell commands: they never get the red !
        for (const row of card.rows) if (row[3] === "!") wrong.push(`${stage.slug} / ${card.topic} / ${row[0]}: an editor key has no !`);
        continue;
      }
      for (const row of card.rows) {
        const marked = row[3] === "!";
        if (destroysData(row[0]) !== marked) wrong.push(`${stage.slug} / ${card.topic} / ${row[0]}: ${marked ? "has a ! but does not destroy data" : "needs a !"}`);
      }
    }
  }
  assert.deepEqual(wrong, []);
});
