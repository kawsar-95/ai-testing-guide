# Independent fact-check: Processes (`lib/linux/sheets/processes.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Processes

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 54.

### FAILs

- 4.2 `kill -9 PID`: !. The row is marked "!: yes", but it does not delete or overwrite files, disks, packages, containers or filesystems. It only skips the process's clean-up. The identical row 5.3 `kill -KILL PID` is "!: no". Quote: "does not give the target process the opportunity to perform any clean-up before terminating" (kill). Fix: set "!: no" (as in 5.3). EN stays "force it to stop; no clean-up (SIGKILL)" / BN stays.
- 8.7 `/etc/security/limits.conf`: EN and BN. The page says these limits are not permanent. They are applied again at each login and last only for that session. "Permanently" is therefore misleading. Quote: "all limit settings are set per login. They are not global, nor are they permanent; existing only for the duration of the session" (limits). Fix: EN "set limits for users at each login" / BN "প্রতিটি login-এ user-দের limit ঠিক করে"

### Notes

- 4.2 and 5.3 are the same command (signal 9) but have different "!" marks. Make the two rows consistent.
- 1.4 `htop`: "install it first" is not in the htop page. It is only a practical hint. "Friendlier" is supported by "allows you to scroll vertically and horizontally, and interact using a pointing device (mouse)". Consider "scrollable live list, mouse support".
- 2.7 `ps aux | grep NAME`: no cited page states that grep finds itself. It follows from `ps aux` listing all processes, including the grep command line. This is acceptable.
- 8.3 `ulimit -n 4096`: with neither -H nor -S, ulimit sets both the soft and hard limit. A non-root user cannot raise a value above the existing hard limit. "Raise it" is true only up to that limit.
- 8.3: bash says of -n "(most systems do not allow this value to be set)". This is not a problem on Linux.
- 6.1: the `nice` page says the default adjustment is 10. The "10" in the command is therefore the default and is not needed.
- 4.3 `pkill NAME`: the default signal is SIGTERM (a polite stop). "Kill by name" may mislead a beginner. Consider "stop processes by name (SIGTERM)".
- 7.6: "forks" are traced through `clone` (strace: "fork(2), vfork(2) and clone(2)"). The row traces only `clone,execve`, so fork or vfork calls are not shown. This is acceptable for modern Linux.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `ps` | PASS | "selects all processes with the same effective user ID ... and associated with the same terminal as the invoker" (ps) | PASS | |
| 1.2 | `ps aux` | PASS | "ps ax" and "ps axu" are listed under "To see every process on the system"; "u Display user-oriented format. (-o user,pid,pcpu,pmem" (ps) | PASS | |
| 1.3 | `top` | PASS | "q :Quit" (top) | PASS | |
| 1.4 | `htop` | PASS | "allows you to scroll vertically and horizontally, and interact using a pointing device (mouse)" (htop) | PASS | "install it first" is not in the page |
| 1.5 | `pstree` | PASS | "pstree shows running processes as a tree" (pstree) | PASS | |
| 1.6 | `uptime` | PASS | "how long the system has been running ... the system load averages" (uptime) | PASS | |
| 1.7 | `watch -n 2 CMD` | PASS | "-n, --interval seconds Specify update interval" (watch) | PASS | |
| 2.1 | `ps aux` | PASS | "ps ax / ps axu" under "To see every process on the system using BSD syntax" (ps) | PASS | |
| 2.2 | `ps -ef` | PASS | "-f Do full-format listing" with "-o uid,pid,ppid,c,stime,tty,time,cmd" (ps) | PASS | |
| 2.3 | `ps -p PID -o pid,ppid,cmd` | PASS | "-p pidlist" and "-o format" (ps) | PASS | |
| 2.4 | `ps aux --sort=-%mem` | PASS | "--sort spec ... [+\|-]key" and "%mem ... (alias pmem)" (ps) | PASS | "-" means descending |
| 2.5 | `pgrep -a NAME` | PASS | "-a, --list-full List the full command line as well as the process ID." (pgrep) | PASS | |
| 2.6 | `pidof NAME` | PASS | "pidof finds the process id's (PIDs) of the named programs." (pidof) | PASS | |
| 2.7 | `ps aux \| grep NAME` | PASS | "ps ax ... every process" (ps) | PASS | grep self-match is inferred |
| 2.8 | `lsof -i :PORT` | PASS | "-i [i] selects the listing of files any of whose Internet address matches" and "[:service\|port]" (lsof) | PASS | |
| 3.1 | `CMD &` | PASS | "executes the command in the background in a subshell" (bash) | PASS | |
| 3.2 | `jobs` | PASS | "The first form lists the active jobs." (bash) | PASS | |
| 3.3 | `fg %1` | PASS | "Resume jobspec in the foreground" (bash) | PASS | |
| 3.4 | `bg %1` | PASS | "Resume each suspended job jobspec in the background" (bash) | PASS | |
| 3.5 | `Ctrl+Z` | PASS | "Typing the suspend character (typically ^Z, Control-Z) while a process is running stops that process" (bash) | PASS | |
| 3.6 | `nohup CMD &` | PASS | "Run COMMAND, ignoring hangup signals." (nohup) | PASS | |
| 3.7 | `disown %1` | PASS | "remove each id from the table of active jobs" (bash) | PASS | |
| 3.8 | `wait` | PASS | "wait waits for all running background jobs" (bash) | PASS | |
| 4.1 | `kill PID` | PASS | "If no signal is specified, the TERM signal is sent." (kill) | PASS | |
| 4.2 | `kill -9 PID` | FAIL (!) | "the KILL signal (number 9) ... cannot be caught, and so does not give the target process the opportunity to perform any clean-up" (kill) | PASS | Does not delete or overwrite data, so "!: yes" is wrong |
| 4.3 | `pkill NAME` | PASS | "pkill will send the specified signal (by default SIGTERM) to each process" (pgrep) | PASS | |
| 4.4 | `pkill -f PATTERN` | PASS | "When -f is set, the full command line is used." (pgrep) | PASS | |
| 4.5 | `killall NAME` | PASS | "killall sends a signal to all processes running any of the specified commands." (killall) | PASS | |
| 5.1 | `kill -l` | PASS | "Print a list of signal names" (kill) | PASS | |
| 5.2 | `kill -TERM PID` | PASS | "If no signal is specified, the TERM signal is sent" and "SIGTERM 15" (kill, signal) | PASS | |
| 5.3 | `kill -KILL PID` | PASS | "SIGKILL 9" and "The signals SIGKILL and SIGSTOP cannot be caught, blocked, or ignored." (signal) | PASS | See note on 4.2 |
| 5.4 | `kill -HUP PID` | PASS | "SIGHUP 1" and "Make syslog reread its configuration file" (signal, pgrep) | PASS | |
| 5.5 | `kill -STOP PID` | PASS | "SIGSTOP P1990 Stop Stop process" (signal) | PASS | |
| 5.6 | `kill -CONT PID` | PASS | "SIGCONT P1990 Cont Continue if stopped" (signal) | PASS | |
| 5.7 | `Ctrl+C` | PASS | "SIGINT (usually generated by ^C)" (bash) | PASS | |
| 5.8 | `trap 'CMD' INT` | PASS | "The action is a command that is read and executed when the shell receives any of the signals sigspec." (bash) | PASS | |
| 6.1 | `nice -n 10 CMD` | PASS | "Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process)." (nice) | PASS | |
| 6.2 | `sudo nice -n -5 CMD` | PASS | "an unprivileged user can only increase the "nice value" (that is: lower the urgency)" (renice) | PASS | |
| 6.3 | `renice -n 5 -p PID` | PASS | "renice alters the scheduling priority of one or more running processes." (renice) | PASS | |
| 6.4 | `ps -o pid,ni,cmd -p PID` | PASS | "ps -eo pid,tid,class,rtprio,ni,pri,psr" and "-o format" (ps) | PASS | |
| 6.5 | `ionice -c 3 CMD` | PASS | "-c, --class class ... 3 for idle" and "idle I/O priority will only get disk time when no other program has asked for disk I/O" (ionice) | PASS | |
| 7.1 | `pstree -p` | PASS | "-p, --show-pids Show PIDs." (pstree) | PASS | |
| 7.2 | `ps -ef --forest` | PASS | "--forest ASCII art process tree." (ps) | PASS | |
| 7.3 | `ps -o pid,ppid,cmd` | PASS | "ppid PPID parent process ID." (ps) | PASS | |
| 7.4 | `echo $$ $PPID` | PASS | "$ ($$) Expands to the process ID of the shell." and "PPID The process ID of the shell's parent." (bash) | PASS | |
| 7.5 | `bash -c 'echo $$'` | PASS | "$$ Expands to the process ID of the shell." (bash) | PASS | A new bash process has its own PID |
| 7.6 | `strace -f -e trace=clone,execve CMD` | PASS | "--follow-forks Traces child processes as they are created ... fork(2), vfork(2) and clone(2)" and "-e trace=syscall_set" (strace) | PASS | |
| 8.1 | `ulimit -a` | PASS | "-a Report all current limits; no limits are set." (bash) | PASS | |
| 8.2 | `ulimit -n` | PASS | "-n The maximum number of open file descriptors" (bash) | PASS | |
| 8.3 | `ulimit -n 4096` | PASS | "If neither -H nor -S is specified, ulimit sets both the soft and hard limits." (bash) | PASS | Only up to the hard limit for non-root |
| 8.4 | `ulimit -u` | PASS | "-u The maximum number of processes available to a single user." (bash) | PASS | |
| 8.5 | `ulimit -Hn` | PASS | "The -H and -S options specify whether the hard or soft limit is set" (bash) | PASS | |
| 8.6 | `prlimit --pid PID` | PASS | "prlimit --pid 13134 Display limit values for all current resources." (prlimit) | PASS | |
| 8.7 | `/etc/security/limits.conf` | FAIL | "They are not global, nor are they permanent; existing only for the duration of the session" (limits) | FAIL | "Permanently" is misleading, and the BN "স্থায়ীভাবে" says the same |

Open FAILs after round 1: 2

## Round 2: Processes

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 4.2 | `kill -9 PID` | PASS | "the KILL signal (number 9)" and "does not give the target process the opportunity to perform any clean-up before terminating" (kill) | PASS | PASS (kill stops a process and deletes no data; "!: no") |
| 8.7 | `/etc/security/limits.conf` | PASS | "all limit settings are set per login" (limits) | PASS | PASS (a config file entry; "!: no") |

Section B has no rows.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0

Open FAILs: 0
