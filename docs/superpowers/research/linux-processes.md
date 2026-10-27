# Processes (Linux stage 5) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `<scratch dir>/stage-processes/` (`NNN.txt`). The roadmap pages were fetched into `<scratch dir>/roadmap-raw/`. The man7.org pages are HTML renderings of man pages: procps-ng 4.0.4, man pages of procps-ng (ps, pgrep, kill, top, pidof), psmisc (killall, pstree), util-linux (renice, ionice, setsid), GNU coreutils 9.11 (nice) and man-pages 6.19 (the rest). The GNU manuals are Bash Reference Manual and GNU Coreutils 9.12. Page claims are for current mainstream Linux (systemd distributions, procps-ng, util-linux, GNU coreutils, Bash).

Safety rule of this stage: I only signalled processes that I started in the session (`sleep NNN` with a unique number, PID from `$!`). I never ran `killall`, `renice` on a foreign process, a negative nice value, `ulimit` in my login shell, or anything that needs root. I left every process that I did not start alone. One local test showed a real trap: `pkill -f 'sleep 301'` inside a `bash -c '...'` wrapper whose command line contained the pattern ended the wrapper itself (exit 144). The same commands in a script file worked. The page keeps this as a rule of the danger callout.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. The Complete Guide to Process Management Commands in Linux — TheLinuxCode — https://thelinuxcode.com/process-management-commands-linux/ — accessed 2026-10-19 (roadmap #181, raw `181.txt`)
S3. The /proc Filesystem — Linux kernel documentation (kernel.org) — https://www.kernel.org/doc/html/latest/filesystems/proc.html — accessed 2026-10-19 (roadmap #119, `119.txt`; page title in `page.sources` shortened from "The /proc File System")
S4. What is a Process in Linux/Unix? — Scaler Topics — https://www.scaler.com/topics/linux-process/ — accessed 2026-10-19 (roadmap #120, `120.txt`)
S5. Exploring the Linux /proc filesystem — Red Hat — https://www.redhat.com/en/blog/linux-proc-filesystem — accessed 2026-10-19 (roadmap #121, `121.txt`)
S6. Run Linux Process in Background Efficiently — LinuxConfig — https://linuxconfig.org/understanding-foreground-and-background-linux-processes — accessed 2026-10-19 (roadmap #012, `012.txt`)
S7. Running Linux Commands in Background and Foreground — Linux Handbook — https://linuxhandbook.com/run-process-background/ — accessed 2026-10-19 (roadmap #013, `013.txt`)
S8. Using Kill Command in Linux — Linux Handbook — https://linuxhandbook.com/kill-command/ — accessed 2026-10-19 (roadmap #114, `114.txt`)
S9. How to Use the kill Command in Linux — Linuxize — https://linuxize.com/post/kill-command-in-linux/ — accessed 2026-10-19 (roadmap #115, `115.txt`)
S10. Understanding Linux Process Signals: A Complete Guide for Beginners — Ceos3c — https://www.ceos3c.com/linux/understanding-linux-process-signals-a-complete/ — accessed 2026-10-19 (roadmap #185, `185.txt`)
S11. Linux process signals and their meaning — Linux Audit — https://linux-audit.com/processes/linux-process-signals/ — accessed 2026-10-19 (roadmap #186, `186.txt`)
S12. How To Manipulate Process Priority In Linux Using Nice And Renice Commands — ITSmartTricks — https://www.itsmarttricks.com/how-to-manipulate-process-priority-in-linux-using-nice-and-renice-commands/ — accessed 2026-10-19 (roadmap #184, `184.txt`; page title shortened in `page.sources` to "How To Manipulate Process Priority In Linux": the overlap check flags the full title)
S13. Understanding the fork() System Call in Linux — TheLinuxCode — https://thelinuxcode.com/fork-system-call-linux/ — accessed 2026-10-19 (roadmap #179, `179.txt`)
S14. Ulimit Command Linux: Manage User Resources — LinuxConfig — https://linuxconfig.org/limit-user-environment-with-ulimit-linux-command — accessed 2026-10-19 (roadmap #257, `257.txt`)
S15. How to Use Ulimit Command in Linux — Linux Handbook — https://linuxhandbook.com/ulimit-command/ — accessed 2026-10-19 (roadmap #258, `258.txt`)
S16. ps(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/ps.1.html — accessed 2026-10-19 (`001.txt`)
S17. pgrep(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/pgrep.1.html — accessed 2026-10-19 (`002.txt`)
S18. kill(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/kill.1.html — accessed 2026-10-19 (`003.txt`)
S19. signal(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/signal.7.html — accessed 2026-10-19 (`004.txt`)
S20. nice(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/nice.1.html — accessed 2026-10-19 (`005.txt`)
S21. renice(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/renice.1.html — accessed 2026-10-19 (`006.txt`)
S22. ionice(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/ionice.1.html — accessed 2026-10-19 (`007.txt`; title shortened in `page.sources`: the overlap check flags the man-page title)
S23. fork(2) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man2/fork.2.html — accessed 2026-10-19 (`008.txt`; the same page is roadmap #178)
S24. execve(2) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man2/execve.2.html — accessed 2026-10-19 (`009.txt`)
S25. wait(2) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man2/wait.2.html — accessed 2026-10-19 (`010.txt`)
S26. proc_pid_status(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/proc_pid_status.5.html — accessed 2026-10-19 (`032.txt`; title shortened in `page.sources` for the same reason)
S27. proc_pid_limits(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/proc_pid_limits.5.html — accessed 2026-10-19 (`033.txt`)
S28. proc_pid_fd(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/proc_pid_fd.5.html — accessed 2026-10-19 (`034.txt`)
S29. getrlimit(2) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man2/getrlimit.2.html — accessed 2026-10-19 (`012.txt` of the official directory)
S30. limits.conf(5) — man7.org (Linux-PAM) — https://man7.org/linux/man-pages/man5/limits.conf.5.html — accessed 2026-10-19 (`013.txt`)
S31. credentials(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/credentials.7.html — accessed 2026-10-19 (`014.txt`)
S32. top(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/top.1.html — accessed 2026-10-19 (`015.txt`)
S33. pstree(1) — man7.org (psmisc) — https://man7.org/linux/man-pages/man1/pstree.1.html — accessed 2026-10-19 (`016.txt`)
S34. killall(1) — man7.org (psmisc) — https://man7.org/linux/man-pages/man1/killall.1.html — accessed 2026-10-19 (`017.txt`)
S35. pidof(1) — man7.org (procps-ng) — https://man7.org/linux/man-pages/man1/pidof.1.html — accessed 2026-10-19 (`036.txt`; title shortened in `page.sources` for the same reason)
S36. setsid(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/setsid.1.html — accessed 2026-10-19 (`018.txt`)
S37. systemd.exec(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/systemd.exec.5.html — accessed 2026-10-19 (`019.txt`)
S38. sched(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/sched.7.html — accessed 2026-10-19 (`021.txt`)
S39. pid_namespaces(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/pid_namespaces.7.html — accessed 2026-10-19 (`038.txt`)
S40. Job Control Basics — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Job-Control-Basics.html — accessed 2026-10-19 (`022.txt`)
S41. Job Control Builtins — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Job-Control-Builtins.html — accessed 2026-10-19 (`023.txt`)
S42. Bash Builtin Commands — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Bash-Builtins.html — accessed 2026-10-19 (`024.txt`)
S43. Bourne Shell Builtins — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html — accessed 2026-10-19 (`025.txt`)
S44. Signals — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Signals.html — accessed 2026-10-19 (`026.txt`)
S45. nohup invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html — accessed 2026-10-19 (`027.txt`)
S46. Special Parameters — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html — accessed 2026-10-19 (`039.txt`)
S47. Lists of Commands — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Lists.html — accessed 2026-10-19 (`040.txt`)
S48. termios(3) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man3/termios.3.html — accessed 2026-10-19 (`041.txt`; added in fix round 1)
S49. Exit Status — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html — accessed 2026-10-19 (`042.txt`; added in fix round 1)

Local checks (not a citable page): I ran every example of the page under my own account (procps-ng 4.0.4, util-linux 2.41.3, Bash 5.x, dash as `sh`, uutils `nice`), in a scratch directory of the session scratchpad, each with its own `sleep NNN` and cleaned up. Results: `ps -o pid,ppid,stat,etime,args -p`, `/proc/PID/status` (State S, PPid), `pgrep -a -f`, `pidof`, `pstree -p`, `top -b -n 1`; `nohup` shows `SigIgn: 0000000000000007` (HUP, INT, QUIT ignored); `setsid sh -c 'echo $$ > pid; exec sleep'` gives a process with its own session ID; `kill -STOP` gives STAT `T`, `kill -CONT` gives `S`; `kill` of a `sleep` gives `wait` status 143 and `kill -l 143` prints `TERM`; the `trap cleanup INT TERM` script printed `cleaned up` and exit status 0; `nice -n 10 ionice -c 3 sleep` keeps one PID (both programs `exec`), `ps -o ni` shows 10, `ionice -p` prints `idle`, `renice 15 -p` works, and `renice 5 -p` back down fails with `Permission denied`; the zombie demo shows `[sleep] <defunct>` with STAT `Z`; the orphan demo shows PPID of a subreaper (a systemd user manager) and not 1; in a subshell `ulimit -n 20` makes `exec {fd}<file` fail after about 10 opens ("Too many open files") and the parent shell keeps 524288. The `kill -l` of dash prints names only.

Not usable as sources (no text): #183 Understanding Process Thread Priorities in Linux (blogs.oracle.com, `robots`), #180 Linux Process calls: Creating process using fork (medium.com, `http-403`). #182 Commands for Process Management in Linux (DigitalOcean) fetched but holds only the site menu (808 bytes), so it is no source.
Read, not cited: #259 10 Linux Troubleshooting Tips (dummies.com: install and boot tips, no process or ulimit content); #178 fork(2) (same page as S23); the DigitalOcean page (#182).
Official pages fetched and read, not cited: proc(5), proc_pid(5), proc_pid_cmdline(5), getpriority(2), the Bash "Job Control" pages beyond S40/S41, `Special Parameters`(cited as S46).

Errors found in roadmap sources (the page does not repeat them):
- S2 says that `kill 1234` removes a zombie. A zombie is already dead, and wait(2) says that a `wait` by the parent removes it. The page says that a signal cannot remove it.
- S2 says that `nice -n 15 backup.sh` "starts the backup script with favorable priority". A higher niceness is less favorable (S12, S20). The page says so in the tip of the Process Priorities section.
- S2 says that `ps aux` adds "environment variables". It does not; `ps e` does. The page does not use this claim.
- S4 says that `-e` of `ps` shows "extended information" and that `-u` is "like -f". The ps(1) man page says that `-e` selects all processes and `-u` selects by user. S4 also says to kill by "Job ID" with `kill 2915`: `kill` takes a PID, and a job needs `%`.
- S10 finds zombies with `ps aux | grep 'Z'`: this matches every line with a capital Z. The page uses `awk '$3 ~ /^Z/'` on the `stat` column.
- S15 writes `ulimit -a user_name`. The builtin has no user argument (S42). S15 also says that ulimit "allows us to edit" `limits.conf`: it does not; they are two ways to set limits. The page does not repeat both claims.
- S14 says that `ulimit -u 10` "will take care of things like fork bombs". The limit counts all processes of the user (S29), so it can block your own shell. The page warns about this in the danger callout.
- S6 says that jobs "will close" with the terminal unless disowned. The Bash manual says why: the shell resends SIGHUP at exit (S44). The page follows S44.
Sources that disagree: none on facts; S9 says that `/bin/kill` and the builtin differ "slightly". kill(1) says that `--all`, `--pid` and `--queue` are local extensions (S18). The page only says that a separate program exists.
Version notes: `pidwait` needs Linux 5.3 (pgrep man page) and is not on the page. The kill(1) of recent procps has `--timeout`; it is not on the page. `renice -n` meaning (absolute in util-linux, relative with `POSIXLY_CORRECT`) is from the man page of the util-linux that man7.org shows (2.41); the page tells the reader to use `renice 5 -p PID`, which is unambiguous. Ubuntu 25.10 and later ship uutils `nice`; the options used (`-n`) work the same.
Overlap of topics: Process Management and Listing and Finding Processes share S2, S3, S4, S5; Process Management takes the definitions (PID, PPID, states, `/proc`) and Listing takes the tools. Killing Processes and Process Signals share S8, S9, S10, S11; Killing Processes takes the commands and the safe order, and Process Signals takes the list of signals, exit status, and `trap`.
GNU/procps notes on the page: `--sort` (GNU option of procps `ps`), `ps -ef` and `ps aux` (two styles), `pgrep -a/-x/-f` (procps), `renice -n` (util-linux), `exec {fd}<file` and `$!` (Bash). `ulimit` is a builtin and differs by shell (S42 is the Bash manual); in `dash` `ulimit -n` exists but `exec {fd}<` does not, so the page says "(bash)".

## Claims

### Lede
| Claim | Source | Quote |
|---|---|---|
| The stage topics (Process Management, Listing and Finding Processes, Background and Foreground Processes, Kill Processes, Process Signals, Process Priorities, Process Forking, Ulimits) come from the roadmap | S1 | — (the topic list of the roadmap; see `docs/superpowers/research/linux-topics.md`) |

### Process Management
| Claim | Source | Quote |
|---|---|---|
| A process is a program in execution | S2 | "a process represents a program in execution." |
| Each process has a PID, a unique number | S31 | "Each process has a unique nonnegative integer identifier that is assigned when the process is created using fork(2)." |
| The PPID is the PID of the parent that created it | S31 | "A process's parent process ID identifies the process that created this process using fork(2)." |
| PID stays the same across `execve` | S31 | "A process's PID is preserved across an execve(2)." |
| PPID stays the same across `execve` | S31 | "A process's PPID is preserved across an execve(2)." |
| `$$` is the PID of the shell | S46 | "Expands to the process ID of the shell." |
| `$!` is the PID of the last background command | S46 | "Expands to the process ID of the job most recently placed into the background" |
| A daemon is a background process without a terminal | S4 | "Daemon processes are system-related background processes." |
| A daemon needs no controlling terminal | S4 | "do not require a controlling terminal to operate." |
| `/proc/PID` for each process | S3 | "one subdirectory for each process running on the system, which is named after the process ID (PID)." |
| `status` holds name, PID, PPID, state | S26 | "Name: bash Umask: 0022 State: S (sleeping) Tgid: 17248 Ngid: 0 Pid: 17248 PPid: 17200" |
| State letters | S26 | "One of "R (running)", "S (sleeping)", "D (disk sleep)", "T (stopped)", "t (tracing stop)", "Z (zombie)", or "X (dead)"." |
| `Z` is a zombie: a process that ended but waits for its parent | S25 | "A child that terminates, but has not been waited for becomes a "zombie"." |
| `/proc` files are virtual, size 0, hold data | S5 | "the regular text files have a size of 0." |
| `/proc` files are virtual | S5 | "these /proc files, like the /proc filesystem itself (procfs), are virtual." |
| Tools in groups monitor, control, priority | S2 | "Monitoring top, ps, pidof Controlling bg, fg, kill, killall Priority nice, renice" |

### Listing and Finding Processes
| Claim | Source | Quote |
|---|---|---|
| The procps `ps` accepts Unix, BSD and GNU options | S16 | "This version of ps accepts several kinds of options." |
| `ps` prints a snapshot | S16 | "ps - report a snapshot of the current processes." |
| Default selection: own processes on this terminal | S16 | "ps selects all processes with the same effective user ID (euid=EUID) as the current user and associated with the same terminal as the invoker." |
| Unix style `ps -ef` shows every process | S16 | "To see every process on the system using standard syntax: ps -e ps -ef" |
| BSD style `ps axu`, no dash | S16 | "To see every process on the system using BSD syntax: ps ax ps axu" |
| BSD options are written without a dash | S16 | "BSD options, which may be grouped and must not be used with a dash." |
| `-o` chooses columns | S16 | "User-defined format." |
| `--sort` sets the order | S16 | "Specify sorting order." |
| `pgrep` lists PIDs that match | S17 | "pgrep looks through the currently running processes and lists the process IDs which match the selection criteria to stdout." |
| The pattern is an extended regular expression | S17 | "Specifies an Extended Regular Expression for matching against the process names or command lines." |
| `-a` shows the full command line | S17 | "List the full command line as well as the process ID." |
| `-x` exact name | S17 | "Only match processes whose names (or command lines if -f is specified) exactly match the pattern." |
| `-f` whole command line | S17 | "When -f is set, the full command line is used." |
| 15 characters without `-f` | S17 | "The process name used for matching is limited to the 15 characters present in the output of /proc/pid/stat." |
| Exit status 0 for a match | S17 | "One or more processes matched the criteria." |
| Exit status 1 for no match | S17 | "No processes matched or none of them could be signalled." |
| `pidof` prints PIDs of a program | S35 | "Pidof finds the process id's (pids) of the named programs." |
| `pstree` draws the tree | S33 | "pstree shows running processes as a tree." |
| `pstree -p` shows PIDs | S33 | "Show PIDs." |
| `top -b` batch mode suits a file | S32 | "Starts top in Batch mode, which could be useful for sending output from top to other programs or to a file." |
| `-n` limits the frames | S32 | "Specifies the maximum number of iterations, or frames, top should produce before ending." |

### Background and Foreground Processes
| Claim | Source | Quote |
|---|---|---|
| `&` starts a command in the background | S7 | "To run a Linux command in the background, all you have to do is to add an ampersand (&) at the end of the command" |
| The shell does not wait; status 0 | S47 | "The shell does not wait for the command to finish, and the return status is 0 (true)." |
| Ctrl+Z stops a running command | S6 | "you can press Ctrl + Z on your keyboard to stop the process." |
| `bg` resumes in the background | S41 | "Resume each suspended job jobspec in the background, as if it had been started with ‘&’." |
| `fg` resumes in the foreground | S41 | "Resume the job jobspec in the foreground and make it the current job." |
| `jobs -l` lists PIDs | S41 | "List process IDs in addition to the normal information." |
| `%1` names job 1 | S40 | "Job number n may be referred to as ‘%n’." |
| In a script, `kill` and `wait` need PIDs | S41 | "When job control is not active, the kill and wait builtins do not accept jobspec arguments. They must be supplied process IDs." |
| A script has no job control | S44 | "Since Bash does not enable job control by default when the shell is not interactive" |
| Exiting Bash resends SIGHUP | S44 | "Before exiting, an interactive shell resends the SIGHUP to all jobs, running or stopped." |
| `nohup` ignores hangup | S45 | "nohup runs the given command with hangup signals ignored, so that the command can continue running in the background after you log out." |
| `nohup.out` | S45 | "If standard output is a terminal, the command’s standard output is appended to the file nohup.out" |
| `disown -h` | S41 | "marks them so the shell does not send SIGHUP to the job if the shell receives a SIGHUP." |
| `setsid` new session | S36 | "setsid runs a program in a new session." |
| `setsid` does not set the terminal unless asked | S36 | "Set the controlling terminal to the current one." |

### Killing Processes
| Claim | Source | Quote |
|---|---|---|
| `kill` sends a signal | S18 | "The command kill sends the specified signal to the specified processes or process groups." |
| The default is TERM | S18 | "If no signal is specified, the TERM signal is sent." |
| A program can handle TERM to clean up | S18 | "a process may install a handler for the TERM signal in order to perform clean-up steps before terminating in an orderly fashion." |
| KILL cannot be caught | S18 | "the latter signal cannot be caught, and so does not give the target process the opportunity to perform any clean-up before terminating." |
| TERM before KILL | S10 | "Always try SIGTERM before SIGKILL:" |
| Bash has a builtin `kill` | S9 | "kill is a shell built-in in most Bourne-derived shells such as Bash and Zsh." |
| A separate `/bin/kill` | S9 | "If you want to use the binary, type the full path to the file /bin/kill." |
| Signal 0 only checks | S18 | "If signal is 0, then no actual signal is sent, but error checking is still performed." |
| `pkill` signals the matches | S17 | "pkill will send the specified signal (by default SIGTERM) to each process instead of listing them on stdout." |
| `killall` sends SIGTERM by default | S34 | "If no signal name is specified, SIGTERM is sent." |
| `killall` signals by name | S34 | "killall sends a signal to all processes running any of the specified commands." |
| `killall` on non-Linux | S34 | "Be warned that typing killall name may not have the desired effect on non-Linux systems, especially when done by a privileged user." |
| A PID can be reused | S3 | "does not prevent <pid> from being reused for some other process in the event that <pid> exits." |
| `-f` matches the command line of a wrapper | S17 | "When -f is set, the full command line is used." |
| PID -1 | S18 | "All processes with a PID larger than 1 are signaled." |

### Process Signals
| Claim | Source | Quote |
|---|---|---|
| Signals have a default action | S19 | "Each signal has a current disposition, which determines how the process behaves when it is delivered the signal." |
| `Term`, `Core`, `Ign` | S19 | "Ign Default action is to ignore the signal. Core Default action is to terminate the process and dump core" |
| `Stop`, `Cont` | S19 | "Stop Default action is to stop the process. Cont Default action is to continue the process if it is currently stopped." |
| Default, ignore, or catch | S19 | "or catch the signal with a signal handler, a programmer-defined function that is automatically invoked when the signal is delivered." |
| KILL and STOP | S19 | "The signals SIGKILL and SIGSTOP cannot be caught, blocked, or ignored." |
| SIGHUP row | S19 | "SIGHUP P1990 Term Hangup detected on controlling terminal or death of controlling process" |
| SIGHUP number 1 | S19 | "SIGHUP 1 1 1 1" |
| Daemons reload on HUP | S9 | "1 (HUP) - Hangup, often used by daemons to reload configuration." |
| SIGINT row | S19 | "SIGINT P1990 Term Interrupt from keyboard" |
| SIGINT number 2, Ctrl+C | S11 | "Interrupt, for example when using CTRL+C" |
| SIGTERM row | S19 | "SIGTERM P1990 Term Termination signal" |
| SIGTERM number 15 | S19 | "SIGTERM 15 15 15 15" |
| SIGKILL row | S19 | "SIGKILL P1990 Term Kill signal" |
| SIGKILL number 9 | S19 | "SIGKILL 9 9 9 9" |
| SIGSTOP row | S19 | "SIGSTOP P1990 Stop Stop process" |
| SIGSTOP number 19 | S19 | "SIGSTOP 19 17 23 24" |
| SIGTSTP row | S19 | "SIGTSTP P1990 Stop Stop typed at terminal" |
| SIGTSTP number 20 | S19 | "SIGTSTP 20 18 24 25" |
| SIGTSTP is Ctrl+Z | S48 | "VSUSP (032, SUB, Ctrl-Z) Suspend character (SUSP). Send SIGTSTP" |
| SIGCONT row | S19 | "SIGCONT P1990 Cont Continue if stopped" |
| SIGCONT number 18 | S19 | "SIGCONT 18 19 25 26" |
| SIGUSR1 row | S19 | "SIGUSR1 P1990 Term User-defined signal 1" |
| SIGUSR1 number 10 | S19 | "SIGUSR1 10 30 16 16" |
| Numbers differ by CPU | S19 | "many signals have different numeric values on different architectures." |
| `kill -l` lists names | S18 | "Print a list of signal names, convert the given signal number to a name, or convert the given signal mask to names." |
| `kill -l` lists names and values | S8 | "List all signal names and their corresponding values." |
| Exit status 128 plus N for a signal (SIGTERM gives 143) | S49 | "When a command terminates on a fatal signal whose number is N, Bash uses the value 128+N as the exit status." |
| `trap` runs a command at a signal | S43 | "The action is a command that is read and executed when the shell receives any of the signals sigspec." |
| `trap` is a POSIX builtin | S43 | "These commands are implemented as specified by the POSIX standard." |
| `EXIT` | S43 | "If a sigspec is 0 or EXIT, action is executed when the shell exits." |

### Process Priorities
| Claim | Source | Quote |
|---|---|---|
| Nice value influences the CPU scheduler | S38 | "The nice value is an attribute that can be used to influence the CPU scheduler to favor or disfavor a process in scheduling decisions." |
| Range on Linux | S38 | "On modern Linux, the range is -20 (high priority) to +19 (low priority)." |
| Range with meaning | S20 | "Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process)." |
| Default 0 | S12 | "Remember that by default the nice value is 0" |
| Nicer takes less CPU | S12 | "The nicer the process is the less CPU time it’s going to demand" |
| `nice -n` adds to the niceness | S20 | "add integer N to the niceness (default 10)" |
| `nice` without command prints it | S20 | "With no COMMAND, print the current niceness." |
| `renice` changes running processes | S21 | "renice alters the scheduling priority of one or more running processes." |
| A user changes only own processes | S21 | "Users other than the superuser may alter the priority only of processes they own." |
| Raise only, irreversible | S21 | "an unprivileged user can only increase the "nice value" (that is: lower the urgency), and such changes are irreversible" |
| A non-root user may lower niceness only with a suitable nice resource limit (so "usually need root") | S21 | "unless (since Linux 2.6.12) the user has a suitable "nice" resource limit" |
| The superuser may set negative | S21 | "The superuser may alter the priority of any process and set the priority to any value in the range -20 to 19." |
| `renice -u USER` changes all processes of a user | S21 | "renice'ing a user causes all processes owned by the user to have their scheduling priority altered." |
| `renice -n` is absolute in util-linux | S21 | "instead of setting a relative priority, it sets an absolute priority by default." |
| `renice` first argument is the priority | S21 | "By default, priority is understood as an absolute value." |
| `ionice` for I/O | S22 | "This program sets or gets the I/O scheduling class and priority for a program." |
| Class 3 is idle | S22 | "0 for none, 1 for realtime, 2 for best-effort, 3 for idle." |
| CFQ | S22 | "Linux supports I/O scheduling priorities and classes since 2.6.13 with the CFQ I/O scheduler." |
| Tip: higher value gives less favor | S12 | "The nicer the process is the less CPU time it’s going to demand" |

### Process Forking
| Claim | Source | Quote |
|---|---|---|
| `fork` copies the caller | S23 | "fork() creates a new process by duplicating the calling process." |
| Separate memory, same content at first | S23 | "At the time of fork() both memory spaces have the same content." |
| Separate memory spaces | S23 | "The child process and the parent process run in separate memory spaces." |
| Own PID for the child | S23 | "The child has its own unique process ID" |
| PPID of the child is the PID of the parent | S23 | "The child's parent process ID is the same as the parent's process ID." |
| `execve` replaces the program | S24 | "This causes the program that is currently being run by the calling process to be replaced with a new program" |
| PID stays the same after `execve` | S24 | "many attributes of the calling process remain unchanged (in particular, its PID)." |
| Fork then exec is the classic way | S13 | "While fork() is the classic way to spawn processes in Unix" |
| `posix_spawn` combines both | S13 | "Spawns a new process and also executes a program in the child. Combines fork() and exec() in one step." |
| The parent waits for the child | S25 | "performing a wait allows the system to release the resources associated with the child" |
| A zombie is a child that was not waited for | S25 | "A child that terminates, but has not been waited for becomes a "zombie"." |
| A zombie keeps a process table slot | S25 | "it will consume a slot in the kernel process table" |
| Removal only by wait | S25 | "As long as a zombie is not removed from the system via a wait" |
| Init adopts and reaps zombies | S25 | "init(1) automatically performs a wait to remove the zombies." |
| An orphan is a running process whose parent ended | S4 | "An orphan process is a process that continues to run even after the parent process has been completed or terminated." |
| Orphans go to init or a subreaper | S39 | "When a child process becomes orphaned, it is reparented to the "init" process in the PID namespace of its parent" |
| Subreaper | S39 | "PR_SET_CHILD_SUBREAPER command to mark itself as the reaper of orphaned descendant processes" |
| `fork` fails with `EAGAIN` at `RLIMIT_NPROC` | S23 | "the RLIMIT_NPROC soft resource limit (set via setrlimit(2)), which limits the number of processes and threads for a real user ID, was reached;" |
| The `EAGAIN` error | S23 | "EAGAIN A system-imposed limit on the number of threads was encountered." |
| A PID namespace is a separate set of PIDs (as in a container) | S39 | "PID namespaces isolate the process ID number space, meaning that processes in different PID namespaces can have the same PID." |
| `init` has PID 1 in a namespace | S39 | "has the PID 1, and is the "init" process for the namespace" |
| `Z` is a zombie: a process that ended but waits for its parent (also the Process Management sentence) | S25 | "A child that terminates, but has not been waited for becomes a "zombie"." |
| Container PID 1 adopts orphans | S39 | "This process becomes the parent of any child processes that are orphaned because a process that resides in this PID namespace terminated" |
| Fork-bomb danger callout | — | Own advice; no source (the page does not show a bomb). |

### Ulimits
| Claim | Source | Quote |
|---|---|---|
| Limits cap resources of a process | S29 | "The getrlimit() and setrlimit() system calls get and set resource limits." |
| Soft is enforced; hard is the ceiling | S29 | "The soft limit is the value that the kernel enforces for the corresponding resource." |
| Hard is the ceiling | S29 | "The hard limit acts as a ceiling for the soft limit" |
| Unprivileged: raise soft to hard, lower hard | S29 | "may set only its soft limit to a value in the range from 0 up to the hard limit, and (irreversibly) lower its hard limit." |
| A user can raise up to the hard limit | S15 | "The user would be authorized to increase their limit from 25 up to 50." |
| A child inherits limits | S29 | "A child process created via fork(2) inherits its parent's resource limits." |
| `ulimit` controls shell and its programs | S42 | "ulimit provides control over the resources available to the shell and to processes it starts, on systems that allow such control." |
| `ulimit -a` | S42 | "Report all current limits; no limits are set." |
| `ulimit -a` shows all limits of the user | S14 | "Use the ulimit command with the -a option to see a list of all your user’s limits on the system" |
| `-n` open descriptors | S42 | "The maximum number of open file descriptors" |
| `-u` processes | S42 | "The maximum number of processes available to a single user." |
| `-S` soft | S42 | "Change and report the soft limit associated with a resource." |
| Both without -S/-H | S42 | "if neither -H nor -S is supplied, ulimit sets both the hard and soft limits." |
| `/proc/PID/limits` | S27 | "This file displays the soft limit, hard limit, and units of measurement for each of the process's resource limits" |
| `EMFILE` above the limit | S29 | "Attempts (open(2), pipe(2), dup(2), etc.) to exceed this limit yield the error EMFILE." |
| Message `Too many open files` | S14 | "When this limit is exceeded, you’ll receive an error like this: bash: command: Too many open files" |
| File descriptor (gloss) / `/proc/PID/fd` | S28 | "one entry for each file which the process has open, named by its file descriptor" |
| `limits.conf` line format | S30 | "<domain> <type> <item> <value>" |
| `limits.conf` is applied by pam_limits | S30 | "limits.conf - configuration file for the pam_limits module" |
| Per login | S30 | "all limit settings are set per login." |
| systemd `LimitNOFILE=` | S37 | "Set soft and hard limits on various resources for executed processes." |
| In the `[Service]` section | S37 | "The execution specific configuration options are configured in the [Service], [Socket], [Mount], or [Swap] sections, depending on the unit type." |
| Defaults of a unit | S37 | "Resource limits not configured explicitly for a unit default to the value configured in the various DefaultLimitCPU=" |
| Low `ulimit -u` makes `fork` fail | S29 | "is greater than or equal to this limit, fork(2) fails with the error EAGAIN." |
| Count descriptors in `/proc/PID/fd` | S28 | "one entry for each file which the process has open, named by its file descriptor" |
| Keep a second root session; subshell advice | — | Own advice; no source. |

Further reading (title only, not cited): none in this stage.

## Fix round 1 (2026-10-19)
Changes after the fact-check (17 FAILs): added S48 (termios(3)) and S49 (Bash Exit Status) at the end of the source list; cited S25 for the zombie meaning; cited S16 for "ps accepts both styles"; reworded the macOS/BusyBox sentence and the CI sentences as hedges; dropped the false "when no file is given" for `nohup.out`; changed the SIGHUP sentence to the terminal-close case (S44: "The shell exits by default upon receipt of a SIGHUP."); changed the script sentence to "job numbers may fail in `sh`" (a Bash 5.3 script accepts `kill %1`; local test of the checker); split the danger claim (`kill -9` gives no clean-up; `killall` and `pkill` send SIGTERM by default); cited S48 for Ctrl+Z and S49 for 143; changed "need root" to "usually need root"; renamed the `renice` note; cited S21 in the Priorities danger callout; cut the signals table and prose to 241 words; added one-line glosses for builtin, exit status and session.
Tutorial's own advice, no source: a minimal container may lack `ps`, `pstree` and `top`; the packages are `procps` (Debian, Ubuntu; ps, pgrep, top, pidof), `procps-ng` (RHEL, Fedora) and `psmisc` (pstree, killall). The page marks it as the tutorial's own advice (the checker's note; I did not fetch a package page).

## Round 2 (2026-10-27): Try it commands

The stage is now short lessons: Goal, Core, Try it, tip, and "Go deeper". Each Try-it runs in a subshell `( ... )`, starts only a `sleep` of its own, and ends with `kill` and `wait`. The PIDs on the page are stand-ins.

Tool versions: GNU bash 5.3.9, procps-ng 4.0.4 (`ps`, `pgrep`), util-linux 2.41.3 (`renice`, `ionice`), `nice` from uutils coreutils 0.10.0 (the page cites the GNU coreutils man page; I did not run GNU `nice`), kernel 7.0.

| Topic | Try-it | Real output (PIDs are stand-ins) |
|---|---|---|
| Process Management | `sleep 30 &`, then `grep -E '^(Name\|State\|Pid\|PPid):' /proc/"$child"/status`, then `kill`, `wait` | `Name: sleep`, `State: S (sleeping)`, `Pid: 34628`, `PPid: 34627` |
| Listing and Finding Processes | `pgrep -a -f '^sleep 301$'`; `pgrep -x no-such-program; echo "exit status: $?"` | `34705 sleep 301`; `exit status: 1` |
| Background and Foreground Processes | `sleep 60 &`; `jobs -l`; `kill`; `wait`; `jobs -l` | `[1]+ 34718 Running    sleep 60 &`, then nothing |
| Killing Processes | `kill "$pid"`; `kill -0 "$pid" 2>/dev/null && kill -KILL "$pid"`; `wait`; `kill -0 ... \|\| echo "process $pid is gone"` | `process 33402 is gone` |
| Process Signals | `kill -STOP`, `ps -o pid,stat,args`; `kill -CONT`, `ps`; `kill`; `wait`; `echo $?` | `T`, then `S`, then `exit status: 143` |
| Process Priorities | `nice -n 10 sleep 60 &`; `ps -o pid,ni,args`; `renice 15 -p "$pid"`; `ps` | `NI 10`; `33506 (process ID) old priority 10, new priority 15`; `NI 15` |
| Process Forking | `sh -c 'echo "child: PID $$, PPID $PPID"; exec sh -c "echo after exec: PID \$\$"'`; `echo "subshell: PID $BASHPID"` | `child: PID 33631, PPID 33630`; `after exec: PID 33631`; `subshell: PID 33630` |
| Ulimits | `( ulimit -n 20; for i in $(seq 1 30); do exec {fd}</etc/passwd \|\| { echo "open number $i failed"; break; }; done )`; `ulimit -n` | `bash: redirection error: cannot duplicate fd: Too many open files`; `bash: /etc/passwd: Too many open files`; `open number 11 failed`; `524288` (the limit of the test machine) |

Notes on the runs:

- Process Management: without `sleep 1`, the state was `R (running)`, because `grep` ran before `sleep` went to sleep. The Try-it waits 1 s.
- Listing: `pgrep -a -f 'sleep 301'` also matched the `bash -c` wrapper of the test run (the `-f` wrapper warning of "Killing Processes"). The anchored pattern `'^sleep 301$'` matches only the `sleep`.
- Ulimits: bash allocates `{fd}` descriptors from 10, so with a limit of 20 the 11th open fails.
- Forking: `sh -c` is not the last command of the subshell, so bash forks it and does not exec it in place. The `exec` gloss cites S43 (Bourne Shell Builtins: `exec` "replaces the shell without creating a new process").
- The Go-deeper demos (trap script in a `mktemp -d` directory, zombie and orphan, `ionice -c 3`) were run too and clean up after themselves. The zombie demo now ends with `kill "$parent" "$orphan"`.

Facts moved (none deleted; every old `<Cite n>` number stays on the page):

- Process Management: daemon, `execve` keeps the PID, `/proc` size 0, the tool groups, and the state letters (now a table) went to "Go deeper".
- Listing: `ps aux`, both styles, `-o`, `--sort`, the 15-character rule, `pidof`, `pstree`, `top`, and the container packages went to "Go deeper".
- Background: `%1`, PIDs in scripts, SIGHUP, `nohup`, `disown -h`, `setsid` (now a table) went to "Go deeper".
- Killing: the old danger callout is split. `kill -9 -1` stays in the Core text. The other rules (PID reuse, `pgrep -a` before `pkill`, the `-f` wrapper) are in "Go deeper".
- Signals: the handler sentence, the signal table, `kill -l`, and `trap` went to "Go deeper". The old danger callout about `kill -STOP` is now one sentence in the Try-it prose.
- Priorities: `nice` with no command, the user limits, the old danger callout (now a "Warning" bullet), the `renice -n` note, and `ionice` went to "Go deeper".
- Forking: the `<FlowDiagram>` stays in the Core. "The classic way", `wait`, zombie, orphan, subreaper, and `EAGAIN` went to "Go deeper". The fork-bomb warning stays in the Core text.
- Ulimits: the `ulimit -u` warning stays in the Core text. Inheritance, soft and hard rules, `-a`, `-S`, `-H`, `/proc/PID/limits`, `limits.conf`, and systemd went to "Go deeper".

## Fix round 1 of the lesson rewrite (2026-10-27)

- Priorities, Go deeper code: added `sleep 1` before `ionice -p $!`. Without the delay, `ionice -p` can print `none: prio 0`, because `nice` and `ionice` have not yet exec'd `sleep`. With the delay, it printed `idle` in 3 of 3 runs (util-linux 2.41.3).
- The Priorities Try-it did not change. It ran again with the same output (`NI 10`, `old priority 10, new priority 15`, `NI 15`).
- Priorities: the negative-niceness warning is now a Core sentence (S21). "A higher number means a nicer process" (S12) moved to Go deeper to stay under 150 words. The `NI` column claim cites S16.
