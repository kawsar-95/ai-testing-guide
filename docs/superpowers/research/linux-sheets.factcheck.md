# Fact-check: Linux command sheets (all 12 stages), round 1

Date: 2026-11-04. Checker: the author of the sheets, who is NOT independent. Pages: `lib/linux/sheets/<stage>.ts` on branch `feat/linux-command-sheets` (draft PR #61).

This report is not a pass of the "Done" rule of "Linux Module" in `CLAUDE.md`. That rule needs a checker who did not write the sheets, and a reader of Bangla for the Bangla glosses. Neither has happened. Treat everything below as the author's own checks, not as a review.

## What was checked

1. **Mechanical check.** `node scripts/verify_linux_sheets.mjs` looks up each command, subcommand, and flag of each row in the text of the pages that the card of the row cites. The pages were fetched on 2026-11-03 and 2026-11-04. Result: 12 stages, 701 rows, 345 flags, 0 problems, and 1 review note (`nl -ba`: `-b` takes the argument `a`, so `-ba` is `-b a`). The script has a test (`tests/verify-linux-sheets.test.ts`) on a fixture. It was also run on a copy of Shell Basics with a made-up flag (`--humanreadable`) and a misspelled command (`whoamii`): it reported both and exited 1.
2. **Reading check, stages 8 to 12 (287 rows).** The author read the gloss of each row against what the tool does, and searched the cited pages for the claims that the script cannot see: what `dynamic` means in `ip-address(8)`, `ip -br`, `valid_lft`, `DHCP4` in `nmcli`, the privilege that `traceroute -I` needs, `tracepath`, `+short` in the `dig` page, the output of `ipcalc`, and the log paths and GRUB pages of "Left off the cards". The other glosses were read, not looked up.
3. **Reading check, stages 1 to 7 (414 rows).** The author read the English gloss of each row against what the tool does. The cited pages were not searched again for these rows.
4. **Rule check.** `tests/linux-sheets.test.ts` checks the shape of every card (see "Linux Module" in `CLAUDE.md`).

## Findings

Found by reading the rows, by the tests of the sheets, or by an audit of the home-page chips, not by the verification script. All are fixed.

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

## Left off the cards

- `/var/log/auth.log`: none of the 296 pages fetched for this work names it.
- `/var/log/syslog`: three of them name it and none documents it. `top(1)` and `sudo(8)` use it inside an example command, and the Ubuntu Server firewall page lists it as one place where a firewall log appears. The cards show `journalctl`, `last`, `lastb`, `/var/log/secure` (Red Hat documentation), and `/var/log/journal` (`journald.conf(5)`) instead.
- `/etc/default/grub`: not on a card yet. The GNU GRUB manual could not be fetched, and Debian's `grub-mkconfig(8)` does not name the file. Debian Reference chapter 3 (https://www.debian.org/doc/manuals/debian-reference/ch03.en.html) does: on Debian, customize GRUB in `/etc/grub.d/` and `/etc/default/grub`, not in `/boot/grub/grub.cfg`. No card cites that page yet, so this row is a follow-up: add the page to the sources of the GRUB card, and a row for the file, marked Debian.
- `pacman`, `zypper`, `apk`: no verified official source, so they are not on the packages cards.

The GNU wget manual is replaced by Debian's `wget(1)` page, and the GNU GRUB manual by Debian's `grub-mkconfig(8)`, `grub-install(8)`, and `update-grub(8)`. The 7 gnu.org pages that the cards still cite (bash, coreutils: 2 pages, gawk, gzip, sed, and tar) were fetched and checked like the rest.

## Not checked

- **Independent check.** Nobody but the author has read these sheets.
- **Bangla glosses.** A reader of Bangla has not read them. The author wrote them, and the check proves only that a gloss is in Bangla script.
- **A real machine.** No command was run for this check: the script reads pages, it does not run anything.
- **Versions.** The pages are the current man7.org, Debian bookworm, and project pages. A flag can be missing on an older distribution.

Open FAILs: none known. Independent check: not done. Bangla read: not done.
