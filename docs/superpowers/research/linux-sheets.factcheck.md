# Fact-check: Linux command sheets (all 12 stages), the author's checks

Date: 2026-11-04. Checker: the author of the sheets, who is NOT independent. Pages: `lib/linux/sheets/<stage>.ts` on branch `feat/linux-command-sheets` (PR #61).

This report is the author's own checks, which came first. The independent check is in `linux-sheets-<stage>.factcheck.md`, one report for each stage, by checkers that did not write the sheets (Claude Code, model claude-sonnet-5-5, each in a new session with read-only tools, no web access, and only the cards and the text of the pages they cite). Round 1 checked the English gloss, the Bangla gloss, and the red `!` of all 702 rows and found 55 FAILs. Round 2 re-checked the 57 rows that the writer changed or answered, and the `!` of every row, and found 3. Round 3 re-checked those 3 and found none. All 12 stage reports end with `Open FAILs: 0`, which is the "Done" rule of "Linux Module" in `CLAUDE.md`.

## What was checked

1. **Mechanical check.** `node scripts/verify_linux_sheets.mjs` looks up each command, subcommand, and flag of each row in the text of the pages that the card of the row cites. The pages were fetched on 2026-11-03 and 2026-11-04. Result: 12 stages, 702 rows, 344 flags, 0 problems, and 1 review note (`nl -ba`: `-b` takes the argument `a`, so `-ba` is `-b a`). The script has a test (`tests/verify-linux-sheets.test.ts`) on a fixture. It was also run on a copy of Shell Basics with a made-up flag (`--humanreadable`) and a misspelled command (`whoamii`): it reported both and exited 1.
2. **Reading check, stages 8 to 12 (288 rows).** The author read the gloss of each row against what the tool does, and searched the cited pages for the claims that the script cannot see: what `dynamic` means in `ip-address(8)`, `ip -br`, `valid_lft`, `DHCP4` in `nmcli`, the privilege that `traceroute -I` needs, `tracepath`, `+short` in the `dig` page, the output of `ipcalc`, the log paths of "Left off the cards", and `/etc/default/grub` in Debian Reference chapter 3. The other glosses were read, not looked up.
3. **Reading check, stages 1 to 7 (414 rows).** The author read the English gloss of each row against what the tool does. The cited pages were not searched again for these rows.
4. **Rule check.** `tests/linux-sheets.test.ts` checks the shape of every card (see "Linux Module" in `CLAUDE.md`).

## Findings

Found by reading the rows, by the tests of the sheets, by an audit of the home-page chips, or by a search of the fetched pages, not by the verification script. All are fixed.

| # | Row | Problem | Fix |
|---|---|---|---|
| 1 | networking / DHCP / `ip -4 addr show IF` | The gloss said "'dynamic' means the address came from DHCP". `ip-address(8)`: `dynamic` is for IPv6 only (stateless autoconfiguration). | "the address and its lifetime (valid_lft)" |
| 2 | networking / Ethernet, ARP, and RARP / `RARP` | The gloss said "obsolete, DHCP replaced it". RFC 903 does not say that. | "the reverse of ARP: MAC to IP lookup" |
| 3 | boot-services / Running Services / `systemd-cgls`, `systemd-cgtop` | The gloss said "service". They list control groups. | "cgroup" |
| 4 | containers / Docker / `docker system prune` | The gloss said "unused containers, networks, images". By default it removes stopped containers, unused networks, and dangling images. | the gloss says that |
| 5 | disks-filesystems / Filesystems / `cat /proc/filesystems` | `cat` is not in a cited page. | the row is the path `/proc/filesystems`, which `filesystems(5)` names |
| 6 | networking / Netfilter / `sudo iptables -F` | It had the red `!` (data loss), but it removes rules, not data. | `!` removed; the gloss says "can lock you out" |
| 7 | networking / traceroute / `traceroute -I` | The page says an unprivileged ICMP probe needs the sysctl `net/ipv4/ping_group_range`. | `sudo traceroute -I HOST` |
| 8 | stages 1 to 7, 19 rows | The new tests flagged them: ALL-CAPS words that were not in the lists (14 rows), 2 English glosses over 9 words, 3 Bangla glosses with no Bangla script. | lists and glosses fixed |
| 9 | home page chips | `s`, `b` (one-letter names), and `link` (a TCP/IP layer name) were counted as commands. | `commandName` fixed |
| 10 | boot-services / Boot Loaders / `/etc/default/grub` | Left off on the claim that no fetched page names it. Debian Reference chapter 3 does: on Debian, customize GRUB in `/etc/grub.d/` and `/etc/default/grub`, not in `/boot/grub/grub.cfg`. | row added, cited to that chapter |

The independent check found 55 more: about 6 wrong glosses (`mount -a` called "a good test", `split -b 10M` called 10 MB), about 20 glosses that no cited page backed, and 28 rows whose `!` broke its rule. They are listed, with what changed, in the stage reports. One answer was a rebuttal, not a change: `gunzip` keeps its data, so it has no `!`; round 2 accepted it.

## Left off the cards

- `/var/log/auth.log`: none of the 296 pages fetched for this work names it.
- `/var/log/syslog`: three of them name it and none documents it. `top(1)` and `sudo(8)` use it inside an example command, and the Ubuntu Server firewall page lists it as one place where a firewall log appears. The cards show `journalctl`, `last`, `lastb`, `/var/log/secure` (Red Hat documentation), and `/var/log/journal` (`journald.conf(5)`) instead.
- `pacman`, `zypper`, `apk`: no verified official source, so they are not on the packages cards.

The GNU wget manual is replaced by Debian's `wget(1)` page, and the GNU GRUB manual (it could not be fetched) by Debian's `grub-mkconfig(8)`, `grub-install(8)`, and `update-grub(8)`, and chapter 3 of the Debian Reference. The 7 gnu.org pages that the cards still cite (bash, coreutils: 2 pages, gawk, gzip, sed, and tar) were fetched and checked like the rest.

## Not checked

- **A person who reads Bangla.** The independent checkers compared each Bangla gloss with its English gloss; no person who reads Bangla has read them.
- **A real machine.** No command was run for this check: the script reads pages, it does not run anything.
- **Versions.** The pages are the current man7.org, Debian bookworm, and project pages. A flag can be missing on an older distribution.

Open FAILs: 0
