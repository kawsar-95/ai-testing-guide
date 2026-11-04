# Independent fact-check: Troubleshooting (`lib/linux/sheets/troubleshooting.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Troubleshooting

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 44.

### FAILs

- 3.4 `df -i`: EN. The gloss says a full inode table blocks new files, and the cited pages do not say this. `df` only says it lists inode information. Quote: "list inode information instead of block usage" (df). Fix: EN "inode usage instead of block usage" / BN "block-এর বদলে inode-এর ব্যবহার"

### Notes

- 1.2 and 3.1: the `free` page defines "available" as an estimate of memory for starting new applications. "Read available, not free" is advice that the pages do not state, but it follows from that definition.
- 5.6: the page supports the unit name `ssh.service` only in its restart and live-log examples ("sudo journalctl -fu ssh.service"). It does not show `-u ssh` without the `.service` suffix, but that works as a unit-name shortcut.
- 4.7: the page states the rule through `Storage=auto` ("behaves like persistent if the /var/log/journal directory exists"). The gloss is true, but note that the default `Storage=` is persistent.
- 6.8: lsof says "list open files". The word "sockets" in the gloss comes from the network files in the lsof page, not from the summary line.
- 2.2: the page says "The first three fields ... are load average". The gloss "raw load numbers" is fine, but the file has more fields.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `uptime` | PASS | "how long the system has been running ... system load averages" (uptime) | PASS | |
| 1.2 | `free -h` | PASS | "Estimation of how much memory is available for starting new" (free) | PASS | |
| 1.3 | `df -h` | PASS | "-h, --human-readable" (df) | PASS | |
| 1.4 | `top` | PASS | "q :Quit" (top) | PASS | |
| 1.5 | `dmesg -T --level=err,warn` | PASS | "dmesg --level=err,warn" (dmesg) | PASS | |
| 1.6 | `journalctl -p err -b` | PASS | "-p, --priority=" (journalctl) | PASS | |
| 1.7 | `systemctl --failed` | PASS | "Use --state=failed or --failed to show only" (systemctl) | PASS | |
| 1.8 | `ss -tulpn` | PASS | "Display only listening sockets" (ss) | PASS | |
| 2.1 | `uptime` | PASS | "system load averages for the past" (uptime) | PASS | |
| 2.2 | `/proc/loadavg` | PASS | "The first three fields in this file are load average" (proc_loadavg) | PASS | |
| 2.3 | `nproc` | PASS | "Load averages are not normalized for the number of CPUs" (uptime) | PASS | |
| 2.4 | `top` | PASS | "1 :Single/Separate-Cpu-States toggle" (top) | PASS | |
| 2.5 | `vmstat 1 5` | PASS | "vmstat [option ...] [delay [count]]" (vmstat) | PASS | |
| 2.6 | `iostat -x 1 3` | PASS | "-x Display extended statistics." (iostat) | PASS | %util and await cover busy time and waits |
| 2.7 | `w` | PASS | "how many users are currently logged on, and the system load averages" (w) | PASS | |
| 3.1 | `free -h` | PASS | "available ... how much memory is available for starting new" (free) | PASS | |
| 3.2 | `/proc/meminfo` | PASS | "available for starting new applications, without swapping" (proc_meminfo) | PASS | |
| 3.3 | `df -h` | PASS | "report file system space usage" (df) | PASS | |
| 3.4 | `df -i` | FAIL | "list inode information instead of block usage" (df) | PASS | The "blocks new files" claim has no support |
| 3.5 | `du -xh --max-depth=1 /var` | PASS | "-x, --one-file-system" (du) | PASS | |
| 3.6 | `du -sh * | sort -h` | PASS | "-h, --human-numeric-sort" (sort) | PASS | |
| 4.1 | `journalctl -b` | PASS | "-b [[ID][±offset]/all], --boot" (journalctl) | PASS | |
| 4.2 | `journalctl -p err -b` | PASS | "-p, --priority=" (journalctl) | PASS | |
| 4.3 | `journalctl --since "1 hour ago"` | PASS | "-S, --since=, -U, --until=" (journalctl) | PASS | |
| 4.4 | `journalctl -k` | PASS | "-k, --dmesg" (journalctl) | PASS | |
| 4.5 | `journalctl --disk-usage` | PASS | "--disk-usage" (journalctl) | PASS | |
| 4.6 | `dmesg -T` | PASS | "-T, --ctime" (dmesg) | PASS | |
| 4.7 | `/var/log/journal` | PASS | "auto behaves like persistent if the /var/log/journal directory exists" (journald_conf) | PASS | |
| 4.8 | `/var/log/messages` | PASS | "/var/log/messages - all syslog messages except the following" (rhel_logs) | PASS | |
| 5.1 | `last` | PASS | "last searches back through the /var/log/wtmp file" (last) | PASS | |
| 5.2 | `last -n 10` | PASS | "-n, --limit number The maximum amount of logins to show." (last) | PASS | |
| 5.3 | `sudo lastb` | PASS | "lastb ... shows a log of the /var/log/btmp file, which contains all the bad login attempts" (last) | PASS | |
| 5.4 | `lastlog` | PASS | "reports the most recent login of all users" (lastlog) | PASS | |
| 5.5 | `sudo faillock --user USER` | PASS | "the recent failed authentication attempts of the username" (faillock) | PASS | |
| 5.6 | `journalctl -u ssh` | PASS | "sudo journalctl -fu ssh.service" (ssh_ubuntu) | PASS | |
| 5.7 | `/var/log/secure` | PASS | "/var/log/secure - security and authentication-related messages and errors" (rhel_logs) | PASS | |
| 6.1 | `systemctl status NAME` | PASS | "systemctl - Control the systemd system and service manager" (systemctl) | PASS | |
| 6.2 | `journalctl -u NAME -n 50` | PASS | "-n, --lines=" (journalctl) | PASS | |
| 6.3 | `ss -ltnp` | PASS | "-l, --listening" (ss) | PASS | |
| 6.4 | `curl -v URL` | PASS | "Make curl output verbose information during the operation." (curl) | PASS | |
| 6.5 | `ping -c 3 HOST` | PASS | "Stop after sending count ECHO_REQUEST packets." (ping) | PASS | |
| 6.6 | `dig +short DOMAIN` | PASS | "This option toggles between verbose and terse answers." (dig) | PASS | |
| 6.7 | `sudo strace -f -p PID` | PASS | "Attaches to the process with the process ID pid and begin tracing." (strace) | PASS | |
| 6.8 | `sudo lsof -p PID` | PASS | "-p s excludes or selects the listing of files for the processes whose optional process IDentification (PID) numbers" (lsof) | PASS | |

Open FAILs after round 1: 1

## Round 2: Troubleshooting

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 1 (A: 1, B: 0).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 3.4 | `df -i` | PASS | "list inode information instead of block usage" (df) | PASS | PASS |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
I skipped Section B because it is "none". I judged the 3.4 BN from the Bangla alone, since the pages are English only.

Open FAILs: 0
