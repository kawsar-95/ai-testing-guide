# Troubleshooting (Linux stage 11) — research notes (2026-10-19)

Fetch note: the roadmap pages were fetched earlier into `/home/nuruddin-kawsar/.cache/linux-roadmap-raw/` (`NNN.txt`, index in `report.tsv`). The official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into a flat directory outside the repo. The man7.org pages are HTML renderings of man pages. Quotes are at most 25 words. The index of a source in `page.sources` is the same as its S number here.

Safety and privacy rule of this stage: the page shows read-only commands only. Every output on the page is an invented illustration (`web01`, `alice`, `203.0.113.7`). No real host name, user name, address, or log line of the research machine is in the page or in these notes. Commands that need root are marked in the code blocks. Logs, `kill -9`, `drop_caches`, `sysctl -w`, `swapoff`, and service restarts carry a `danger` callout.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. Essential Linux Server Maintenance Checklist — TecAdmin — https://tecadmin.net/linux-server-maintenance-checklist/ — accessed 2026-10-19 (roadmap #196)
S3. How to Check Uptime in Linux Command Line — Linux Handbook — https://linuxhandbook.com/uptime-command/ — accessed 2026-10-19 (roadmap #270)
S4. Monitoring Linux Authentication Logs — Better Stack — https://betterstack.com/community/guides/logging/monitoring-linux-auth-logs/ — accessed 2026-10-19 (roadmap #004)
S5. How to Check Linux Login History — Linux Handbook — https://linuxhandbook.com/linux-login-history/ — accessed 2026-10-19 (roadmap #005)
S6. How to Use journalctl Command to Analyze Logs in Linux — Linux Handbook — https://linuxhandbook.com/journalctl-command/ — accessed 2026-10-19 (roadmap #235)
S7. 10 Linux Troubleshooting Tips — dummies — https://www.dummies.com/article/technology/computers/operating-systems/linux/10-linux-troubleshooting-tips-274301/ — accessed 2026-10-19 (roadmap #256)
S8. uptime(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/uptime.1.html — accessed 2026-10-19
S9. proc_loadavg(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/proc_loadavg.5.html — accessed 2026-10-19
S10. nproc invocation — GNU Coreutils manual 9.12 — https://www.gnu.org/software/coreutils/manual/html_node/nproc-invocation.html — accessed 2026-10-19
S11. top(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/top.1.html — accessed 2026-10-19
S12. vmstat(8) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man8/vmstat.8.html — accessed 2026-10-19
S13. PSI - Pressure Stall Information — The Linux kernel documentation — https://docs.kernel.org/accounting/psi.html — accessed 2026-10-19
S14. free(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/free.1.html — accessed 2026-10-19
S15. proc_meminfo(5) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man5/proc_meminfo.5.html — accessed 2026-10-19
S16. df(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/df.1.html — accessed 2026-10-19
S17. du(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/du.1.html — accessed 2026-10-19
S18. lsof(8) — man7.org — https://man7.org/linux/man-pages/man8/lsof.8.html — accessed 2026-10-19
S19. Documentation for /proc/sys/vm — The Linux kernel documentation — https://docs.kernel.org/admin-guide/sysctl/vm.html — accessed 2026-10-19
S20. Concepts overview (memory management) — The Linux kernel documentation — https://docs.kernel.org/admin-guide/mm/concepts.html — accessed 2026-10-19
S21. journalctl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/journalctl.1.html — accessed 2026-10-19
S22. systemd-journald.service(8) — man7.org (systemd) — https://man7.org/linux/man-pages/man8/systemd-journald.service.8.html — accessed 2026-10-19
S23. journald.conf(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/journald.conf.5.html — accessed 2026-10-19
S24. logrotate(8) — man7.org — https://man7.org/linux/man-pages/man8/logrotate.8.html — accessed 2026-10-19
S25. syslog(3) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man3/syslog.3.html — accessed 2026-10-19
S26. Understanding the Default Configuration — rsyslog documentation — https://www.rsyslog.com/doc/getting_started/understanding_default_config.html — accessed 2026-10-19
S27. dmesg(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/dmesg.1.html — accessed 2026-10-19
S28. Documentation for /proc/sys/kernel — The Linux kernel documentation — https://docs.kernel.org/admin-guide/sysctl/kernel.html — accessed 2026-10-19
S29. rsyslog.conf of the CentOS Stream 9 rsyslog package — CentOS Project (GitLab) — https://gitlab.com/redhat/centos-stream/rpms/rsyslog/-/raw/c9s/rsyslog.conf — accessed 2026-10-19
S30. last(1), lastb(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/last.1@@util-linux.html — accessed 2026-10-19
S31. faillock(8) — man7.org (Linux-PAM) — https://man7.org/linux/man-pages/man8/faillock.8.html — accessed 2026-10-19
S32. pam_faillock(8) — man7.org (Linux-PAM) — https://man7.org/linux/man-pages/man8/pam_faillock.8.html — accessed 2026-10-19
S33. faillog(8) — man7.org (shadow) — https://man7.org/linux/man-pages/man8/faillog.8.html — accessed 2026-10-19
S34. sshd_config(5) — man.openbsd.org (OpenSSH) — https://man.openbsd.org/sshd_config — accessed 2026-10-19
S35. strace(1) — man7.org (strace project) — https://man7.org/linux/man-pages/man1/strace.1.html — accessed 2026-10-19
S36. ltrace(1) — man7.org — https://man7.org/linux/man-pages/man1/ltrace.1.html — accessed 2026-10-19
S37. ss(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ss.8.html — accessed 2026-10-19
S38. systemctl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/systemctl.1.html — accessed 2026-10-19
S39. uname(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/uname.1.html — accessed 2026-10-19
S40. os-release(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/os-release.5.html — accessed 2026-10-19
S41. w(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/w.1.html — accessed 2026-10-19
S42. ptrace(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/ptrace.2.html — accessed 2026-10-19
S43. Debian Reference, chapter 3: system initialization — The Debian Project — https://www.debian.org/doc/manuals/debian-reference/ch03.en.html — accessed 2026-10-19
S44. proc_pid_oom_score(5) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man5/proc_pid_oom_score.5.html — accessed 2026-10-19

Not usable as sources (no text): #254 Red Hat learning post (the fetch returned only the Red Hat Learning Community closing notice), #255 Medium (`http-403`), #271 DigitalOcean load average (only site boilerplate, 798 bytes), and #007 linuxblog.io (`http-500` in `report.tsv`).
Read but not cited: #006 itslinuxfoss (it calls "available" memory "unused" memory, which conflicts with free(1), so it is not used), #195 ictbroadcast, #197 Linux Journal, #236 FOSS Linux, #237 linuxconfig dmesg, #269 TecMint uptime. Their facts that the page uses are also in the official pages above.
Official pages that I could not fetch: Filesystem Hierarchy Standard (`robots`), docs.redhat.com (`robots`), wiki.debian.org/Rsyslog (JavaScript challenge, 94 bytes), sources.debian.org and the Ubuntu `rsyslog.conf` (`robots`), man.openbsd.org/sshd (`robots`), man7 lastb(8) (404), and the Ubuntu security-suggestions page (404). So the page does not cite the FHS for `/var/log`; S7 supports "most logs are in `/var/log`". The Debian and Ubuntu path `/var/log/auth.log` has no official page in my sources; only S4 (a roadmap article) supports it. The Fedora/RHEL path `/var/log/secure` is also in the official CentOS Stream package file (S29).

Local checks (not citable pages), on Ubuntu with kernel 7.x, procps-ng, util-linux, coreutils 9.x, systemd. All outputs were read only and are not copied here:
- `uptime`, `nproc`, `free -h`, `vmstat 1 2`, `df -h`, `df -i`, `ss -tuln`, `cat /proc/loadavg /proc/pressure/cpu` ran without root. `/proc/loadavg` has 5 fields. `/proc/pressure/` has `cpu`, `io`, `memory`. `vmstat` printed 18 columns.
- `journalctl -p err -b`, `-k -b -p warning`, `--since "-30min"`, `-o short-iso` (it shows a zone offset), `--utc`, `--disk-usage`, and `--list-boots` ran as a normal user. `journalctl _COMM=sshd` ran but printed "No entries": the research machine has no `sshd`, so I could not see real `sshd` lines.
- `systemctl --failed --no-pager` ran as a normal user.
- `dmesg` as a normal user failed with "Operation not permitted". This matches S28 (`dmesg_restrict`).
- `lastb` is not in the normal `PATH` of a user. `faillock` printed an error that the tally directory does not exist. I did not read `/var/log/btmp`.
- `strace -f -e trace=%file -o trace.txt ls /no/such/dir` wrote a trace with an `ENOENT` line. `strace -c -e trace=openat ls /` printed a summary table. `lsof +L1` ran as a normal user. `mktemp -d` and the bundle commands work.

## Topic: Server Review
| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The roadmap lists Server Review, Uptime and Load, Available Memory and Disk, System Logs, Authentication Logs, Troubleshooting as topics. | S1 | (topic list of the page `roadmap.sh/linux`; no quote) |
| 2 | A maintenance checklist covers logs (`/var/log`), disk use (`df -h`), load, and open ports. | S2 | "Review system logs for errors or suspicious activity (`/var/log`). Check disk usage (`df -h`)." / "Monitor system load averages." |
| 3 | `uname -a` prints all system information. | S39 | "-a, --all print all information, in the following order, except omit -p and -i if unknown" |
| 4 | `/etc/os-release` holds the OS identification. | S40 | "The /etc/os-release and /usr/lib/os-release files contain operating system identification data." |
| 5 | `w` lists users, terminal, login time, current command. Its header shows uptime and load. | S41 | "login name, the tty name, the remote host, login time, idle time, JCPU, PCPU, and the command line of their current process" |
| 6 | `ss -tuln` shows TCP and UDP, listening only, numeric. `-p` shows processes. | S37 | "-l, --listening Display only listening sockets" / "-n, --numeric Do not try to resolve service names" / "-p, --processes Show processes using sockets." |
| 7 | `systemctl --failed` lists failed units. | S38 | "--failed List units in failed state. This is equivalent to --state=failed." |
| 8 | `journalctl -b` shows the current boot. `-p err` shows `err` and more important levels. | S21 | "logs for the current boot will be shown" / "all messages with this log level or a lower (hence more important) log level are shown" |
| 9 | Compare a failing system with a working one of the same distribution. | S7 | "Compare your problem system with a working system running the same distribution and version." |

## Topic: Uptime and Load
| # | Claim | Source | Quote |
|---|---|---|---|
| 10 | `uptime` prints time, time since boot, user count, and load averages for 1, 5, 15 minutes. | S8 | "The current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes." |
| 11 | Load average counts runnable and uninterruptible processes. Runnable = using or waiting for a CPU. Uninterruptible = waiting for I/O. | S8 | "the average number of processes that are either in a runnable or uninterruptible state" / "A process in uninterruptible state is waiting for some I/O access, eg waiting for disk." |
| 12 | `uptime -s` prints the boot time. | S3 | "If you want to know since when the Linux server is running, you can use the option -s" (S8: "-s, --since system up since") |
| 13 | Load is not divided by CPU count. 1 on one CPU = always busy. 1 on four CPUs = 75 % idle. | S8 | "Load averages are not normalized for the number of CPUs ... a load average of 1 means a single CPU system is loaded all the time" |
| 14 | `nproc` prints units available to the process. A cgroup v2 CPU quota can lower it. `--all` prints installed processors. | S10 | "Linux cgroup version 2 CPU quotas may also limit the maximum returned value." / "--all Print the number of installed processors on the system" |
| 15 | `/proc/loadavg` has the same three numbers as `uptime`. | S9 | "They are the same as the load average numbers given by uptime(1) and other programs." |
| 16 | `vmstat`: `r` runnable, `b` blocked on I/O, `wa` I/O wait, `st` stolen time. The first report is an average since boot. | S12 | "r: The number of runnable processes" / "b: The number of processes blocked waiting for I/O to complete." / "The first report produced gives averages since the last reboot." |
| 17 | `st` is time taken by the hypervisor from a virtual machine. (Tip callout: "the host slowed your test" is the tutorial's own reading.) | S11 | "st : time stolen from this vm by the hypervisor" |
| 18 | `top` shows the load line and the CPU states `us sy ni id wa hi si st`. | S11 | "system load avg over the last 1, 5 and 15 minutes" / "wa : time waiting for I/O completion" |
| 19 | PSI files: `/proc/pressure/cpu`, `memory`, `io`. The `some` line = share of time at least some tasks stall. | S13 | "The “some” line indicates the share of time in which at least some tasks are stalled on a given resource." |
| 20 | Inference (not a source quote): high load with low CPU use points to slow storage, because tasks in uninterruptible sleep count in the load (claim 11). | S8 | see claim 11 |

## Topic: Available Memory and Disk
| # | Claim | Source | Quote |
|---|---|---|---|
| 21 | `free` columns: total, used, free, shared, buff/cache, available. | S14 | "total ... used ... free ... shared ... buff/cache Sum of buffers and cache ... available" |
| 22 | `available` estimates memory for new programs without swapping. It is `MemAvailable`. | S15 | "An estimate of how much memory is available for starting new applications, without swapping." |
| 23 | Page cache holds file data in RAM. The kernel reclaims it when needed. | S20 | "Whenever a file is read, the data is put into the page cache to avoid expensive disk access on the subsequent reads." / "page cache and anonymous memory" are "reclaimable" |
| 24 | `vmstat` `si` and `so`: memory swapped in from and out to disk, per second. | S12 | "si: Amount of memory swapped in from disk (/s)." / "so: Amount of memory swapped to disk (/s)." |
| 25 | `df -h` shows space per filesystem. `df -i` shows inodes instead of blocks. | S16 | "-h, --human-readable print sizes in powers of 1024" / "-i, --inodes list inode information instead of block usage" |
| 26 | `du -s` totals one directory. `-k` prints KiB. `-x` skips other filesystems. | S17 | "-s, --summarize display only a total for each argument" / "-k like --block-size=1K" / "-x, --one-file-system skip directories on different file systems" |
| 27 | `lsof +L1` selects open files that are unlinked (deleted). | S18 | "A specification of the form ``+L1'' will select open files that have been unlinked." |
| 28 | Inference (not stated by S18): when `df` shows full space and `du` finds less, a deleted file that a process holds open is one cause. | S18 | see claim 27 |
| 29 | The OOM killer ends a task when memory is exhausted and cannot be reclaimed. | S20 | "on a loaded machine memory will be exhausted and the kernel will be unable to reclaim enough memory ... it invokes the OOM killer." |
| 30 | A higher `oom_score` means the process is more likely to be chosen. | S44 | "A higher score means that the process is more likely to be selected by the OOM-killer." |
| 31 | `drop_caches` drops clean caches. It can cost I/O and CPU. Use outside testing or debugging is not recommended. | S19 | "use outside of a testing or debugging environment is not recommended." |
| 32 | The page greps the kernel log for `oom` or `out of memory`. The exact kernel message text is not claimed. | S20 | (no quote; a search pattern only) |

## Topic: System Logs
| # | Claim | Source | Quote |
|---|---|---|---|
| 33 | Most plain-text logs are in `/var/log`. | S7 | "You can find most of these in the /var/log" |
| 34 | `systemd-journald` collects kernel messages, `syslog(3)` calls, and service output. | S22 | "Kernel log messages, via kmsg" / "Simple system log messages, via the libc syslog(3) call" / "Standard output and standard error of service units." |
| 35 | Storage: persistent below `/var/log/journal` if it exists, else volatile below `/run/log/journal`, lost at reboot. | S22 | "stores log data either persistently below /var/log/journal or in a volatile way below /run/log/journal/ (in the latter case, it is lost at reboot)" |
| 36 | `Storage=` in `journald.conf` sets where data goes. | S23 | "Controls where to store journal data. One of "volatile", "persistent", "auto" and "none"." |
| 37 | Some distributions do not enable persistent journal logs by default. | S6 | "Some Linux distributions, specially the desktop ones, don't enable the journal logs by default." |
| 38 | Under systemd, `rsyslog` may be absent. If present, it writes text log files. | S43 | "the system logging utility rsyslogd(8) may be uninstalled. If it is installed ... create traditional permanent ASCII system log data." |
| 39 | The rsyslog default file layout comes from distributions. | S26 | "This layout comes from how many Linux distributions package rsyslog." |
| 40 | `journalctl` filters: `-u` unit, `-b` boot, `-p` priority, `--since`/`--until` time, `-k` kernel. | S21 | "-u, --unit=UNIT|PATTERN Show messages for the specified systemd unit" / "-k, --dmesg Show only kernel messages." |
| 41 | Priorities `emerg` (0) to `debug` (7). | S21, S25 | "emerg" (0), "alert" (1), "crit" (2), "err" (3), "warning" (4), "notice" (5), "info" (6), "debug" (7)" (S21); LOG_EMERG ... LOG_DEBUG in order of decreasing importance (S25) |
| 42 | Reading all journal files needs a group: `systemd-journal`, `adm`, or `wheel`. | S21 | "Members of the groups "systemd-journal", "adm", and "wheel" can read all journal files." |
| 43 | `--utc` shows UTC. `-o short-iso` uses ISO 8601 (RFC 3339 profile) timestamps. | S21 | "--utc Express time in Coordinated Universal Time (UTC)." / "short-iso ... shows timestamps in the RFC 3339 profile of ISO 8601." Local test: output has a zone offset. |
| 44 | `dmesg` examines the kernel ring buffer. `-c` and `-C` clear it. | S27 | "dmesg is used to examine or control the kernel ring buffer." / "-C, --clear Clear the ring buffer." |
| 45 | With `dmesg_restrict` = 1, users need `CAP_SYSLOG` to use `dmesg`. | S28 | "When dmesg_restrict is set to 1, users must have CAP_SYSLOG to use dmesg(8)." |
| 46 | `logrotate` rotates, compresses, removes log files per day, week, month, or size. | S24 | "It allows automatic rotation, compression, removal, and mailing of log files." |
| 47 | `journalctl --vacuum-size=` removes the oldest archived journal files. `--disk-usage` shows journal size. | S21 | "--vacuum-size= removes the oldest archived journal files until the disk space they use falls below the specified size." |

## Topic: Authentication Logs
| # | Claim | Source | Quote |
|---|---|---|---|
| 48 | Ubuntu/Debian: `/var/log/auth.log`. Fedora/Red Hat/CentOS: `/var/log/secure`. | S4 | "For Ubuntu/Debian systems: sudo tail -f /var/log/auth.log" / "For Fedora, Red Hat, or CentOS: sudo tail -f /var/log/secure" |
| 49 | The CentOS Stream rsyslog package sends `authpriv` messages to `/var/log/secure`. | S29 | `authpriv.* action(type="omfile" file="/var/log/secure")` and the comment "The authpriv file has restricted access." |
| 50 | `sshd` logs to facility `AUTH` at level `INFO` by default. | S34 | "The default is INFO." (LogLevel) / "The default is AUTH." (SyslogFacility) |
| 51 | `journalctl` takes `FIELD=VALUE` matches, for example `_COMM=`. (Limit: on the research machine `_COMM=sshd` gave "No entries"; no real `sshd` lines were seen.) | S21 | "A match is in the format "FIELD=VALUE"" / "a "_COMM=" match for the script name is added to the query" |
| 52 | `last` reads `/var/log/wtmp`. `lastb` shows `/var/log/btmp`, the bad logins. | S30 | "last searches back through the /var/log/wtmp file" / "lastb is the same as last, except that by default it shows a log of the /var/log/btmp file, which contains all the bad login attempts." |
| 53 | `last --time-format iso` shows the time zone. These are util-linux options. | S30 | "The ISO format contains timezone information, making it preferable when printouts are investigated outside of the system." |
| 54 | `last` has other versions with other options (the GNU accounting `last` page differs: it has `-n num` and `-f`, but no `--time-format`). | S30 | man7 has two `last(1)` pages: acct 6.6.4 (default) and `last(1@@util-linux)` (used here) |
| 55 | `faillock --user NAME` displays failure records. Default directory `/var/run/faillock`. | S31 | "It can display the recent failed authentication attempts of the username" / "then /var/run/faillock is used" |
| 56 | `pam_faillock` locks an account after more than `deny` consecutive failures. | S32 | "locks the account in case there were more than deny consecutive failed authentications" |
| 57 | `faillog` reads `/var/log/faillog`. | S33 | "faillog displays the contents of the failure log database (/var/log/faillog)." |
| 58 | A failed login line gives who, what, when, where, how. The article's sample line has the form `Failed password for <user> from <address> port <n> ssh2`; the page uses an invented line with `203.0.113.7`. | S4 | "The log provides the "who" root), the "what" (Failed password), the "when" ..., the "where" ... and the "how" (ssh2)" |
| 59 | Brute-force signs: many tries from one address for `root`; `Invalid user` lines. Brute force = many password guesses. | S5, S4 | "too many login attempts from a certain IP with user root, probably someone is trying to attack your system by bruteforcing" (S5); S4 parses `Invalid user` lines |
| 60 | Authentication logs hold user names and addresses (privacy callout). | S4 | The sample lines show user names and source IP addresses. The advice to restrict access is the tutorial's own. |

## Topic: Troubleshooting
| # | Claim | Source | Quote |
|---|---|---|---|
| 61 | Method: document symptoms, read logs, compare with a working system, check it is reproducible, document the solution. | S7 | "Document the problem. Write down any and all symptoms" / "Check to see whether the problem is reproducible." / "document the situation" |
| 62 | "Change one thing at a time" and "keep a rollback step" are the tutorial's own advice (stated as such). | — | not a sourced claim |
| 63 | `ss` is a read-only socket tool (network layer). | S37 | "ss is used to dump socket statistics." |
| 64 | `strace` records system calls and signals. `-f` follows children. `-e trace=` limits the calls. `-c` summarizes. `%file` = calls that take a file name. | S35 | "It intercepts and records the system calls made by a process" / "--follow-forks Traces child processes" / "Counts time, calls, and errors for each system call" |
| 65 | A traced process runs slower. | S35 | "A traced process runs more slowly than a non-traced one." |
| 66 | Where Yama is active, attaching needs `CAP_SYS_PTRACE` or a predefined relationship (default `ptrace_scope` 1). | S42 | "the calling process must either have the CAP_SYS_PTRACE capability in the user namespace of the target process or it must have a predefined relationship" |
| 67 | `ltrace` records dynamic library calls. | S36 | "It intercepts and records the dynamic library calls which are called by the executed process" |
| 68 | `lsof -p PID` lists the files of the given process. | S18 | "-p s excludes or selects the listing of files for the processes whose optional process IDentification (PID) numbers are in the comma-separated set s" |
| 69 | A syscall is a request from a program to the kernel (gloss). | S35 | "system calls and signals occur at the user/kernel interface" |
| 70 | The bundle script uses `date -u`, `uname -a`, `/etc/os-release`, `uptime`, `free -h`, `df -h`, `journalctl --since "-30min"`. Relative times with `-` are allowed. | S21 | "relative times may be specified, prefixed with "-" or "+", referring to times before or after the current time" |

Further reading (title only, not cited): none.
