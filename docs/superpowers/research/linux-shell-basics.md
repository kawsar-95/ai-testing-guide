# Shell Basics (Linux stage 1) — research notes (2026-10-16)

Fetch note: all pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay). The man7.org pages are HTML renderings of man pages. Quotes are at most 25 words. The index of a source in `page.sources` is the same as its S number.

## Sources
S1. bash(1) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man1/bash.1.html — accessed 2026-10-16
S2. ls(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/ls.1.html — accessed 2026-10-16
S3. pwd(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/pwd.1.html — accessed 2026-10-16
S4. man(1) — man7.org (man-db) — https://man7.org/linux/man-pages/man1/man.1.html — accessed 2026-10-16
S5. whereis(1) (page title on the site: "find files of a command") — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/whereis.1.html — accessed 2026-10-16
S6. hier(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/hier.7.html — accessed 2026-10-16
S7. environ(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/environ.7.html — accessed 2026-10-16
S8. env(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/env.1.html — accessed 2026-10-16
S9. printenv(1) — man7.org (GNU coreutils 9.11) — https://man7.org/linux/man-pages/man1/printenv.1.html — accessed 2026-10-16
S10. Filesystem Hierarchy Standard 3.0, Chapter 3: The Root Filesystem — Linux Foundation — https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03.html — accessed 2026-10-16
S11. Learning The Shell (lesson 1) — LinuxCommand.org — https://www.linuxcommand.org/lc3_lts0010.php — accessed 2026-10-16 (roadmap #201)
S12. What is a Shell in Linux — LinuxSimply — https://linuxsimply.com/what-is-a-shell-linux/ — accessed 2026-10-16 (roadmap #202)
S13. Linux Filesystem Navigation Basics — LinuxConfig — https://linuxconfig.org/filesystem-basics — accessed 2026-10-16 (roadmap #116, #141)
S14. Basic Navigation Commands: cd, ls, and pwd — LinuxBash — https://www.linuxbash.sh/post/basic-navigation-commands-cd-ls-and-pwd — accessed 2026-10-16 (roadmap #118, #142)
S15. Using the Help Command in Linux — Linux Handbook — https://linuxhandbook.com/help-command/ — accessed 2026-10-16 (roadmap #027)
S16. Chapter 10: Getting Help in Linux Terminal — It's FOSS — https://itsfoss.com/linux-command-help/ — accessed 2026-10-16 (roadmap #028)
S17. tldr-pages/tldr — GitHub — https://github.com/tldr-pages/tldr — accessed 2026-10-16 (roadmap #030)
S18. Linux path environment variable — LinuxConfig — https://linuxconfig.org/linux-path-environment-variable — accessed 2026-10-16 (roadmap #031)
S19. Linux Directory Structure Explained for Beginners — Linux Handbook — https://linuxhandbook.com/linux-directory-structure/ — accessed 2026-10-16 (roadmap #260)
S20. Linux Environment Variables List, Set, Create & Remove — Computer Networking Notes — https://www.computernetworkingnotes.com/linux-tutorials/linux-environment-variables-list-set-create-remove.html — accessed 2026-10-16 (roadmap #076)
S21. How to Set and List Environment Variables in Linux — Linuxize — https://linuxize.com/post/how-to-set-and-list-environment-variables-in-linux/ — accessed 2026-10-16 (roadmap #077)

Not usable as sources (no text): #203 Learn Linux Easily and #143 Practice on Linux Fundamentals (linuxjourney.com, status `robots`); #029 Get Help on Linux Commands, #075 Environment Variables in Linux (labex.io, `http-403`); #032 How to find a path of a Linux command (cyberciti.biz, `http-403`); #261 Overview of File System Hierarchy Standard (access.redhat.com, `robots`).
Further reading (title only, not cited): #144 Linux for Noobs (labex.io course); #145 Terminal Introduction (webterm.app course); #146 Linux fundamentals (TryHackMe video); #262 The Linux File System Explained in 1,233 Seconds (video). The page of #117 (DigitalOcean) returned only a site footer, so it is not used.

Fetch problems: the FHS 3.0 chapter 3 page returned only the table of contents and section 3.1 (4.8 KB), and the FHS index page and chapter 5 timed out. So only the purpose of the root filesystem is taken from the FHS; the directory list is taken from hier(7). The man pages of whoami, GNU coreutils and GNU bash manual pages were also fetched but are not cited.

## Topic: Shell Basics
| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The shell takes commands and gives them to the operating system. | S11 | "the shell is a program that takes commands from the keyboard and gives them to the operating system to perform" |
| 2 | On most Linux systems the shell is bash. Others: ksh, tcsh, zsh. | S11 | "On most Linux systems a program called bash ... acts as the shell program." Others "include: ksh, tcsh and zsh" |
| 3 | Bash reimplements and extends the Bourne shell. | S1 | "It is a reimplementation and extension of the Bourne shell, the historical Unix command language interpreter." |
| 4 | A terminal and a shell are different things. | S12 | "Shell: It is a program that interprets the commands entered via the terminal" |
| 5 | Login shell reads `/etc/profile`, then the first of `~/.bash_profile`, `~/.bash_login`, `~/.profile`. | S1 | "it first reads and executes commands from the file /etc/profile ... looks for ~/.bash_profile, ~/.bash_login, and ~/.profile, in that order" |
| 6 | An interactive non-login shell reads `~/.bashrc`. | S1 | "When an interactive shell that is not a login shell is started, bash reads and executes commands from ~/.bashrc" |
| 7 | A non-interactive shell uses `BASH_ENV`. | S1 | "When bash is started non-interactively ... it looks for the variable BASH_ENV in the environment" |
| 8 | `$-` includes `i` in an interactive shell. | S1 | "Bash sets PS1 and $- includes i if the shell is interactive" |
| 9 | `SHELL` is the absolute path of the login shell. | S7 | "SHELL  The absolute pathname of the user's login shell." |

## Topic: Basic Commands
| # | Claim | Source | Quote |
|---|---|---|---|
| 10 | `pwd` prints the absolute path of the current working directory. | S1 | "pwd [-LP] Print the absolute pathname of the current working directory." |
| 11 | `cd` changes the current directory. | S1 | "Change the current directory to dir." |
| 12 | `ls` lists the current directory by default. | S2 | "List information about the FILEs (the current directory by default)." |
| 13 | `-a` shows entries that start with a dot. | S2 | "-a, --all do not ignore entries starting with ." |
| 14 | `-l` long format. | S2 | "-l use a long listing format" |
| 15 | `-h` with `-l` human sizes. | S2 | "-h, --human-readable with -l and -s, print sizes like 1K 234M 2G etc." |
| 16 | `-t` sorts by time, newest first. | S2 | "-t sort by time, newest first; see --time" |
| 17 | `-r` reverses the sort. | S2 | "-r, --reverse reverse order while sorting" |
| 18 | `cd` with no argument goes to `HOME`. | S1 | "if dir is not supplied, the value of the HOME shell variable is used as dir." |

Local check: I ran `ls -ld /bin` on my machine (it is a link to `usr/bin`). This is not cited on the page.

## Topic: Navigation Basics
| # | Claim | Source | Quote |
|---|---|---|---|
| 19 | Absolute path begins with `/`. Relative path starts with a directory connected to the current one. | S13 | "An absolute path name is one beginning with the / character, which signifies the root of the file system tree." |
| 20 | `..` is the parent directory. `.` is the current one. | S13 | "The relative pathname of the current working directory is called . (the full stop)." and "parent directory ... cd .." |
| 21 | `~` expands to `HOME`. | S1 | "If this login name is the null string, the tilde is replaced with the value of the shell parameter HOME." |
| 22 | `cd -` goes to `OLDPWD`. | S1 | "An argument of - is converted to $OLDPWD before attempting the directory change." |
| 23 | `OLDPWD` is the previous working directory. | S1 | "OLDPWD The previous working directory as set by the cd command." |
| 24 | `cd` with no argument returns home. | S14 | "If you do not specify a directory after cd, it will by default take you to your home directory." |
| 25 | `cd` acts as `-L` by default. `-P` uses the physical structure. | S1 | "If neither -L nor -P is supplied, cd behaves as if -L had been supplied." / "-P option causes cd to use the physical directory structure" |
| 26 | `pwd -P` prints a path with no symbolic links. | S1 | "The pathname printed contains no symbolic links if the -P option is supplied" |

## Topic: Command Help
| # | Claim | Source | Quote |
|---|---|---|---|
| 27 | `man` shows the manual page of a program. | S4 | "Each page argument given to man is normally the name of a program, utility or function." |
| 28 | `help` shows help for builtins. | S1 | "help [-dms] [pattern] Display helpful information about builtin commands." |
| 29 | `help -d` short description; `-s` usage synopsis only. | S1, S15 (S15 shows `help -d cd` and `help -s cd`) | "-d Display a short description of each pattern" / "-s Display only a short usage synopsis for each pattern" |
| 30 | `ls` and `pwd` accept `--help`. | S2, S3 | "--help display this help and exit" |
| 31 | "Almost all" commands have `--help`, but it is not a fixed rule. | S16 | "Almost all Linux commands provide a --help option ... However, it's not a hard and fast rule." |
| 32 | tldr-pages: community help pages, simpler than man pages. | S17 | "a collection of community-maintained help pages for command-line tools, that aims to be a simpler, more approachable complement to traditional man pages" |
| 33 | `tldr tar` instead of `man tar`. | S17 | "accessible through typing tldr tar instead of the standard man tar" |
| 34 | Man sections: 1 programs, 5 file formats, 7 misc, 8 admin. | S4 | "1 Executable programs or shell commands ... 5 File formats and conventions, e.g. /etc/passwd ... 7 Miscellaneous ... 8 System administration commands" |
| 35 | `man -k` searches short descriptions; `man -f` prints short descriptions of pages. | S4 | "man -k printf Search the short descriptions and manual page names for the keyword printf" / "man -f smail Lookup the manual pages referenced by smail and print out the short descriptions" |
| 36 | `type -t name` prints `builtin` for a builtin. | S1 | "type prints a string which is one of alias, keyword, function, builtin, or file" |

Local check: `type -t cd` printed `builtin`; `help -s cd` printed the usage line; `man -f ls` printed the short description.
Note: S16 says there is no man page for shell builtins. The page does not repeat this. Many systems show the bash page for `man cd`, so the page says "use `help` for a builtin" only.

## Topic: Command Path
| # | Claim | Source | Quote |
|---|---|---|---|
| 37 | Order: function, builtin, then `PATH`. | S1 | "If there exists a shell function by that name ... searches for it in the list of shell builtins ... bash searches each element of the PATH" |
| 38 | `PATH` is a colon-separated list, searched first to last. | S7 | "The prefixes are separated by colons (:). The list of prefixes is searched from beginning to end" |
| 39 | Bash remembers full paths in a hash table. `hash -r` forgets them. | S1 | "Bash uses a hash table to remember the full pathnames of executable files" / "The -r option causes the shell to forget all remembered locations." |
| 40 | Not found: error message, exit status 127. | S1 | "the shell prints an error message and returns an exit status of 127" |
| 41 | `whereis` locates binary, source, and manual files. | S5 | "whereis locates the binary, source and manual files for the specified command names." |
| 42 | An empty entry in `PATH` is the current directory. | S1 | "A zero-length (null) directory name in the value of PATH indicates the current directory." |
| 43 | POSIX: use an explicit `.`. The legacy form is deprecated. | S7 | "use of this feature is deprecated, and POSIX notes that a conforming application shall use an explicit pathname (e.g., .)" |
| 44 | Keep a `PATH` change for each new shell: put `export PATH=...` in `~/.bashrc`. | S18 | "To add a directory to $PATH permanently, we'll need to edit the .bashrc file of the user you want to change." |
| 45 | `type -a` and `command -v`. | S1 | "If the -a option is used, type prints all of the places that contain a command named name." / "The -v option displays a single word indicating the command or filename used to invoke command" |

## Topic: Directory Hierarchy
| # | Claim | Source | Quote |
|---|---|---|---|
| 46 | Everything sits under `/`; absolute paths go through the root. | S19 | "Since all other directories or files are descended from root, the absolute path of any file is traversed through root." |
| 47 | The FHS defines the structure and purpose of the directories. | S19 | "the Linux Foundation maintains a Filesystem Hierarchy Standard (FHS). This FHS defines the directory structure and the content/purpose of the directories" |
| 48 | Root filesystem must allow boot and repair. | S10 | "The contents of the root filesystem must be adequate to boot, restore, recover, and/or repair the system." |
| 49 | `/etc` | S6 | "Contains configuration files which are local to the machine." |
| 50 | `/home` | S6 | "On machines with home directories for users, these are usually beneath this directory" |
| 51 | `/root` | S6 | "This directory is usually the home directory for the root user" |
| 52 | `/usr/bin` | S6 | "This is the primary directory for executable programs." |
| 53 | `/usr/local` | S6 | "This is where programs which are local to the site typically go." |
| 54 | `/var` | S6 | "This directory contains files which may change in size, such as spool and log files." |
| 55 | `/var/log` | S6 | "/var/log Miscellaneous log files." |
| 56 | `/tmp` | S6 | "This directory contains temporary files which may be deleted with no notice, such as by a regular job or at system boot up." |
| 57 | `/dev` | S6 | "Special or device files, which refer to physical devices." |
| 58 | `/proc` | S6 | "This is a mount point for the proc filesystem, which provides information about running processes and the kernel." |
| 59 | `/opt` | S6 | "This directory should contain add-on packages that contain static files." |
| 60 | `man 7 hier` is the full list. | S6 | Page title "hier(7) - description of the filesystem hierarchy" |

## Topic: Environment Variables
| # | Claim | Source | Quote |
|---|---|---|---|
| 61 | The environment is an array of strings; a child gets a copy. | S7 | "When a child process is created via fork(2), it inherits a copy of its parent's environment." |
| 62 | Form `name=value`; case-sensitive. | S7 | "By convention, the strings in environ have the form "name=value". The name is case-sensitive" |
| 63 | `export` marks names for the environment of later commands. | S1 | "The supplied names are marked for automatic export to the environment of subsequently executed commands." |
| 64 | A shell variable is not passed to children unless exported. | S21 | "A shell variable is not passed to child processes unless you export it." |
| 65 | `unset` removes a variable. | S1 | "For each name, remove the corresponding variable or function." |
| 66 | `printenv` prints named variables, or all. | S9 | "Print the values of the specified environment VARIABLE(s). If no VARIABLE is specified, print name and value pairs for them all." |
| 67 | `NAME=value command` sets the variable only for that command. | S7 | "NAME=value command to create an environment variable definition only in the scope of the process that executes command." |
| 68 | `env -i` starts with an empty environment. | S8 | "-i, --ignore-environment start with an empty environment" |
| 69 | Put a variable in `~/.bash_profile` for each login. | S20 | "It holds all custom environmental variables. Shell executes it every time the user logs in." (S1 confirms login shells read `~/.bash_profile`.) |
| 70 | Common names: `HOME`, `PATH`, `PWD`, `SHELL`, `USER`, `LANG`, `TMPDIR`. | S7 | Entries `USER`, `LOGNAME`, `HOME`, `LANG`, `PATH`, `PWD`, `SHELL`; `TMPDIR` "influences the path prefix of names created by tempnam(3)" |

Local check: in bash, `X=1; bash -c 'echo "[$X]"'` printed `[]`; after `export X` it printed `[1]`. `env -i HOME=/tmp printenv` printed `HOME=/tmp`.

Each Callout starts with "Tutorial's own advice:". It gives a suggestion, not a sourced fact. A sourced fact in a Callout has a `<Cite>`.
