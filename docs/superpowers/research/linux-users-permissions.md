# Users and Permissions (Linux stage 4) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `/home/nuruddin-kawsar/.cache/linux-stage-users-permissions/` (`NNN.txt`). The roadmap pages were fetched into `/home/nuruddin-kawsar/.cache/linux-roadmap-raw/`. The man7.org pages are HTML renderings of man pages. The shadow-utils pages on man7.org came from shadow-utils 4.19.0; the id, groups, chmod and stat pages came from coreutils 9.11; the GNU manual pages say "GNU Coreutils 9.12"; the sudo pages are the sudo.ws manual (sudoers grammar of sudo 1.9.x). Page claims are for current mainstream Linux (systemd distributions, GNU coreutils, shadow-utils, sudo.ws).

Security rule of this stage: no command that needs root or changes accounts, groups, passwords, sudoers or system files was run. The account commands (`useradd`, `usermod`, `userdel`, `passwd`, `groupadd`, `visudo`, `sudo`, `newgrp`) were learned from the man pages and manuals only.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. passwd(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/passwd.5.html — accessed 2026-10-19
S3. shadow(5) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man5/shadow.5.html — accessed 2026-10-19
S4. group(5) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man5/group.5.html — accessed 2026-10-19
S5. useradd(8) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man8/useradd.8.html — accessed 2026-10-19
S6. usermod(8) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man8/usermod.8.html — accessed 2026-10-19
S7. userdel(8) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man8/userdel.8.html — accessed 2026-10-19
S8. groupadd(8) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man8/groupadd.8.html — accessed 2026-10-19
S9. passwd(1) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man1/passwd.1.html — accessed 2026-10-19
S10. groupdel(8) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man8/groupdel.8.html — accessed 2026-10-19
S11. gpasswd(1) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man1/gpasswd.1.html — accessed 2026-10-19
S12. newgrp(1) — man7.org (shadow-utils) — https://man7.org/linux/man-pages/man1/newgrp.1.html — accessed 2026-10-19
S13. id invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/id-invocation.html — accessed 2026-10-19
S14. groups invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/groups-invocation.html — accessed 2026-10-19
S15. getent(1) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man1/getent.1.html — accessed 2026-10-19
S16. adduser(8) — Debian manpages (trixie) — https://manpages.debian.org/stable/adduser/adduser.8.en.html — accessed 2026-10-19
S17. Manage Linux User Accounts with Ease — LinuxConfig — https://linuxconfig.org/how-to-create-modify-and-delete-users-account-on-linux — accessed 2026-10-19 (roadmap #046; page title in `page.sources` is the same)
S18. How to create, delete, and modify groups in Linux — Red Hat — https://www.redhat.com/sysadmin/linux-groups — accessed 2026-10-19 (roadmap #275)
S19. User management — Ubuntu Server documentation — https://documentation.ubuntu.com/server/how-to/security/user-management/ — accessed 2026-10-19
S20. Linux superuser access, explained — Red Hat — https://www.redhat.com/en/blog/linux-superuser-access/ — accessed 2026-10-19 (roadmap #230)
S21. sudo manual — sudo.ws — https://www.sudo.ws/docs/man/sudo.man/ — accessed 2026-10-19
S22. sudoers manual — sudo.ws — https://www.sudo.ws/docs/man/sudoers.man/ — accessed 2026-10-19
S23. visudo manual — sudo.ws — https://www.sudo.ws/docs/man/visudo.man/ — accessed 2026-10-19
S24. credentials(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/credentials.7.html — accessed 2026-10-19
S25. Structure of File Mode Bits — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html — accessed 2026-10-19
S26. Numeric Modes — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/Numeric-Modes.html — accessed 2026-10-19
S27. What information is listed (`ls -l`) — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/What-information-is-listed.html — accessed 2026-10-19
S28. stat(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/stat.1.html — accessed 2026-10-19 (fetched in the files stage, copied into the overlap directory of this stage)
S29. Linux File Permissions Explained — Linuxize — https://linuxize.com/post/understanding-linux-file-permissions/ — accessed 2026-10-19 (roadmap #168)
S30. chmod invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html — accessed 2026-10-19
S31. Directory Setuid and Setgid — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/Directory-Setuid-and-Setgid.html — accessed 2026-10-19
S32. chmod(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/chmod.1.html — accessed 2026-10-19
S33. chown invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/chown-invocation.html — accessed 2026-10-19
S34. chgrp invocation — GNU Coreutils manual — https://www.gnu.org/software/coreutils/manual/html_node/chgrp-invocation.html — accessed 2026-10-19
S35. umask(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/umask.2.html — accessed 2026-10-19
S36. Bourne Shell Builtins — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Bourne-Shell-Builtins.html — accessed 2026-10-19
S37. unlink(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/unlink.2.html — accessed 2026-10-19 (page title shortened in `page.sources`: the overlap check flags a copy of the man-page title)
S38. Command Execution Environment — Bash Reference Manual (GNU) — https://www.gnu.org/software/bash/manual/html_node/Command-Execution-Environment.html — accessed 2026-10-19
S39. newgrp — POSIX utilities (Issue 8) — The Open Group — https://pubs.opengroup.org/onlinepubs/9799919799/utilities/newgrp.html — accessed 2026-10-19

Local checks (not a citable page): I ran every read-only and scratch-directory example of the page under my own account (GNU coreutils; the scratch directory was in the session scratchpad): `id`, `getent passwd "$USER"`, `getent group sudo`, `ls -l /etc/passwd /etc/shadow`, `touch`, `ls -l`, `stat -c '%A %a %U:%G %n'`, `ls -ld /tmp`, `ls -l /usr/bin/passwd`, `chmod 640`, `chmod u+x,g-w`, `chgrp "$(id -gn)"`, `chmod 2750` (shows `drwxr-s---`), `chmod -R g+rX,o-rwx`, `(umask 077; touch private.txt)` (mode 600; the umask of the parent shell stayed 0002), and `chmod +t` (shows `T` when `x` for others is missing). All worked as written and are safe to run twice. I did NOT run `sudo`, `su`, `useradd`, `usermod`, `userdel`, `groupadd`, `passwd`, `visudo`, `newgrp`, or `chown` (security rule). Those lines of the page come from the man pages in the table below.

Not usable as sources (no text): #272 User Account Management and #085/#170 Linux Permissions of Files (labex.io, `http-403`).
Read, but not cited: #273 and #045 and #277 (Server Academy lesson text, cut off before the sign-in wall), #274/#047/#278 (DEV Community beginner guide: it lists UID ranges 1–999 and 1000–60000; the page does not repeat them because no official page was read for those ranges), #276 (LinuxConfig groups: UPG and umask 002, covered by S16 and S25 instead), #231 (ComputerNetworkingNotes: it says that `sudo` runs "only one privileged command" in a sentence that is too loose; the page follows sudo(8) instead), #232 (Scaler), #084/#169 (Linux Handbook permissions article), `inode(7)`, `su(1)`, `chage(1)`, `path_resolution(7)` (fetched and read, not cited).
Further reading (title only, not cited): #086 Terminal Advanced: permissions, sudo and users (webterm.app course); #087/#171 Linux File Permissions in 5 Minutes (video).
Error found in a roadmap source: S17 writes `sudo usermod -G -a newgroup user`. This order is wrong: the group list must follow `-G`. The page uses `usermod -aG qa qa-runner` and follows usermod(8).
Sources that disagree: S17 says that `useradd` makes a home directory by default because `CREATE_HOME` is `yes` in the Fedora `login.defs`. The man page says that a home directory is created only with `-m` or when `CREATE_HOME` is true. The page follows the man page and says that the default depends on `login.defs`.
Distribution note: Ubuntu 25.10 and later ship `sudo-rs` as the default `sudo` (S19: "sudo is provided by the sudo-rs package"). The page uses the common subset (`sudo -l`, `-n`, `-k`, `-u`, `-i`, `visudo`) and cites the sudo.ws manual. This stays a note and is not on the page.
Overlap of three topics: the roadmap links of "User Management", "Users and Groups" and "Create, Update, and Delete Users" are largely the same pages (#273 = #277 = #045; #274 = #278 = #047). The sections therefore have different angles: User Management covers the account files (`/etc/passwd`, `/etc/shadow`); Users and Groups covers `/etc/group`, primary and supplementary groups, `id`, `groups`, `newgrp`; Create, Update, and Delete Users covers the lifecycle commands. "File Permissions" and "Managing Permissions" share #084/#169, #085/#170, #087/#171: File Permissions covers reading and understanding the bits, Managing Permissions covers `chmod`, `chown`, `chgrp`, `umask`.

## Claims

### User Management
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| U1 | `/etc/passwd` has one line per account with seven colon-separated fields: name, password, UID, GID, comment, home directory, shell. | S2 | "Each line of the file describes a single user, and contains seven colon-separated fields: name:password:UID:GID:GECOS:directory:shell" |
| U2 | The GID field is the numeric primary group ID. | S2 | "This is the numeric primary group ID for this user." |
| U3 | UID 0 is the superuser, root. | S2 | "The privileged root login account (superuser) has the user ID 0." |
| U4 | With shadow passwords, `/etc/passwd` has an `x` in the password field and the hashes are in `/etc/shadow`. | S2 | "where /etc/passwd has an 'x' character in the password field, and the encrypted passwords are in /etc/shadow" |
| U5 | The shadow file must not be readable by regular users. | S3 | "This file must not be readable by regular users if password security is to be maintained." |
| U6 | A hash that starts with `!` means a locked password. | S3 | "If the password field begins with an exclamation mark !, the password is locked." |
| U7 | `getent` shows entries from databases of the Name Service Switch libraries. | S15 | "The getent command displays entries from databases supported by the Name Service Switch libraries, which are configured in /etc/nsswitch.conf." |
| U8 | Gloss: "hash" = the stored scrambled form of the password (own words; S2 and S3 call it the "encrypted password"). | S3 | "encrypted password" (field name) |

### Users and Groups
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| G1 | Admins use groups to give access to files and other resources. | S18 | "Linux admins use groups to assign access to files and other resources." |
| G2 | `/etc/group` has one entry per line: group_name:password:GID:user_list; the list is comma-separated. | S4 | "group_name:password:GID:user_list" / "a list of the usernames that are members of this group, separated by commas." |
| G3 | The primary GID is in `/etc/passwd`; additional groups come from the group file. | S2 | "Additional groups for the user are defined in the system group file; see group(5)" |
| G4 | `id` prints user and group information, including the supplementary group IDs. | S13 | "By default, it prints the real user ID, real group ID, effective user ID if different ... and supplemental group IDs." |
| G5 | `groups` output equals `id -Gn`. | S14 | "The group lists are equivalent to the output of the command ‘id -Gn’." |
| G6 | Groups are inherited from the parent and stay as at login; `id` and `groups` do not show later database changes in the session. | S13 | "if you change the group database after logging in, id will not reflect your changes within your existing login session." |
| G7 | `id USER` consults the database again. | S13 | "Running id with a user argument causes the user and group database to be consulted afresh" |
| G8 | `newgrp` changes the current group ID during a login session. | S12 | "The newgrp command is used to change the current group ID during a login session." |
| G9 | `newgrp` needs the user to be a member, or a group password. (Page comment: "needs a group qa that lists you".) | S12 | "The user will be denied access if the group password is empty and the user is not listed as a member." |
| G10 | `gpasswd -d USER GROUP` removes a user from a group. | S11 | "-d, --delete user  Remove the user from the named group." |
| G11 | `groupdel` cannot remove the primary group of an existing user. | S10 | "You may not remove the primary group of any existing user." |
| G12 | `sudo -i -u` runs a login shell of the target user (used in the tip for a fresh login). | S21 | "-i, --login Run the shell specified by the target user's password database entry as a login shell." |
| G13 | `newgrp` creates a new shell (so the page says that it starts a new shell and that `exit` leaves it). | S12, S39 | "The newgrp utility shall create a new shell execution environment" / "when the new shell exits" (S39, rationale) |

### Create, Update, and Delete Users
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| C1 | `useradd -m` creates the home directory and copies the skeleton files. | S5 | "Create the user's home directory if it does not exist. The files and directories contained in the skeleton directory ... will be copied" |
| C2 | The skeleton directory is `/etc/skel` by default. | S5 | "or, by default, /etc/skel." |
| C3 | Without `-m`, the home directory depends on `CREATE_HOME` of `login.defs`. | S5 | "it will be created for non-system users if either the -m flag is specifed or CREATE_HOME in login.defs is set to true." |
| C4 | (Removed in fix round 1.) The Fedora `CREATE_HOME` default had only a blog source, so the page no longer states it. The page says only that the result depends on `CREATE_HOME` (row C3, S5). | S5 | see C3 |
| C5 | `-M` never creates the home directory. | S5 | "it will never be created if the -M flag is specified." |
| C6 | A new account without `-p` has a locked password (a single `!` in shadow). | S5 | "Without this option, the new account will be locked and with no password defined, i.e. a single exclamation mark" |
| C7 | `passwd` sets the password; it asks twice. | S9 | "The user is then prompted twice for a replacement password." |
| C8 | `usermod -a -G` appends; `-L` locks the password; `-l` changes only the login name. | S6 | "-a, --append Add the user to the supplementary group(s). Use only with the -G option." / "Nothing else is changed." |
| C9 | `-G` without `-a` removes the user from groups not listed. | S6 | "If the user is currently a member of a group which is not listed, the user will be removed from the group." |
| C10 | A locked password does not disable the account (an SSH key may still work); `usermod --expiredate 1` disables the account. | S9 | "this does not disable the account. The user may still be able to login using another authentication token (e.g. an SSH key)." |
| C11 | `userdel -r` removes the home directory and mail spool. | S7 | "Files in the user's home directory will be removed along with the home directory itself and the user's mail spool." |
| C12 | `userdel -f` skips safety checks and may leave the system inconsistent. | S7 | "This option is dangerous and may leave your system in an inconsistent state." |
| C13 | `adduser` is a Debian front end for `useradd`, `groupadd`, `usermod`; `useradd` etc. are distribution agnostic. | S16 | "They are more Debian specific front ends to the useradd, groupadd and usermod programs, which are more distribution agnostic." |
| C14 | `adduser` copies skeleton files, makes a home directory, and prompts for a password (the page says only "front end"). | S16 | "adduser will copy files from /etc/skel into the home directory and prompt for the comment field and a password" |
| C15 | `-p` on the command line shows the password in the process list. | S5 | "Avoid this option on the command line because the password (or encrypted password) will be visible by users listing the processes." |
| C16 | `groupadd NAME` creates a group (command in the code block). | S8 | "The groupadd command creates a new group account using the values specified on the command line" |
| C17 | These tools need root (the page says "They need root"). | S9 | "A regular user can only change the password for their own account, while the superuser can change the password for any account." |
| C18 | `useradd` and `usermod` options `-s`, `-c` set shell and comment (code block). | S5 | "-s, --shell SHELL sets the path to the user's login shell." / "-c, --comment COMMENT Any text string." |
| C19 | S17 is cited for the `-G` without `-a` claim, with S6 (row C9). | S17 | "said list will be completely redefined" |
| C20 | Gloss text added in fix round 1: login shell, supplementary groups, mail spool, SSH key login, symbolic link, subshell. The glosses are the tutorial's own words. | none | |
| C21 | The three tools (`useradd`, `usermod`, `userdel`) are named without a package name: `shadow-utils` is the RHEL name and Debian/Ubuntu use the package `passwd`. | none | not on the page |

### Super User
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| S1 | The superuser account is UID 0, named root. | S2 | "The privileged root login account (superuser) has the user ID 0." |
| S2 | Ubuntu disables the direct root login by giving root a hash that matches no password. (The page no longer says "most distributions".) | S19 | "it has been given a password hash that matches no possible value, and so may not log in directly by itself." |
| S3 | A Red Hat blog advises to lock root at installation and to put admin users in the `wheel` group, whose members can use sudo. | S20 | "During installation, you have the option to lock the root account." / "Making the user an admin adds that user to the special wheel group." |
| S4 | The first Ubuntu user is in the group `sudo`. | S19 | "the initial user created by the Ubuntu installer is a member of the group sudo" |
| S5 | `sudo` runs a command as the superuser or another user as the policy allows. | S21 | "sudo allows a permitted user to execute a command as the superuser or another user, as specified by the security policy." |
| S6 | `sudo -l` lists the privileges of the invoking user. | S21 | "list the privileges for the invoking user (or the user specified by the -U option) on the current host." |
| S7 | sudo remembers the password per terminal for a limited time (sudo.ws default 5 minutes; sudo-rs of Ubuntu 25.10+ uses 15). The page says "a few minutes" and names `timestamp_timeout`. | S21 | "caches credentials on a per-terminal basis for 5 minutes. See the timestamp_type and timestamp_timeout options in sudoers(5)" |
| S8 | `-k` invalidates cached credentials; `-n` never prompts and fails if a password is needed. | S21 | "invalidates the user's cached credentials for the current session" / "If a password is required ... sudo will display an error message and exit." |
| S9 | Policies and audit plugins may log attempts. | S21 | "Security policies and audit plugins may log successful and failed attempts to run sudo." |
| S10 | Rules in `/etc/sudoers`; `@includedir` reads a `sudoers.d` directory. | S22 | "The @includedir directive can be used to create a sudoers.d directory that the system package manager can drop sudoers file rules into" |
| S11 | The last matching entry wins. | S22 | "Where there are multiple matches, the last match is used (which is not necessarily the most specific match)." |
| S12 | Files in an include directory with a `.` in the name or a `~` at the end are skipped. | S22 | "skipping file names that end in ‘~’ or contain a ‘.’ character" |
| S13 | `visudo` checks syntax before it installs the edited file. | S23 | "checks for syntax errors before installing the edited file." |
| S14 | `visudo -c` checks the file and its includes; `-f` selects a file. | S23 | "Enable check-only mode. The existing sudoers file (and any other files it includes) will be checked for syntax errors." |
| S15 | A syntax error may make sudo refuse to run. | S22 | "If sudoers contains syntax errors, sudo may refuse to run, which is a serious problem if sudo is your only method of obtaining superuser privileges." |
| S16 | `ALL` in a command context allows any command. | S22 | "Using ALL can be dangerous since in a command context, it allows the user to run any command on the system." |
| S17 | Rule format `User Host = (Runas) NOPASSWD: command`. | S22 | "User_Spec ::= User_List Host_List '=' Cmnd_Spec_List" / "ray rushmore = NOPASSWD: /bin/kill, /bin/ls, /usr/bin/lprm" |
| S18 | `NOPASSWD` tag removes the password prompt for the commands that follow. | S22 | "By default, sudo requires that a user authenticate before running a command. This behavior can be modified via the NOPASSWD tag." |

The sentence "Use `sudo -n` in CI, so a missing rule fails at once" is the tutorial's own advice; it rests on S8. The sentence "Never edit the file with a plain editor" rests on S23 and S22 (S15). "Name exact commands with full paths" is the tutorial's own advice (least privilege); S22 shows commands with full paths in its examples.

### File Permissions
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| F1 | Mode bits have three user categories: owner, other users in the file's group, everyone else. | S25 | "the file’s owner; other users who are in the file’s group; everyone else." |
| F2 | The classes are `u`, `g`, `o` in `chmod` (page cites S25 and S32). | S25, S32 | "the user who owns it (u), other users in the file's group (g), other users not in the file's group (o)" (S32) |
| F3 | Three permissions: read, write, execute. | S25 | "There are three kinds of permissions that a user can have for a file" |
| F4 | `ls -l` prints the file type and the mode bits; type characters `-` `d` `l`. | S27 | "regular file" (`-`), "directory" (`d`), "symbolic link" (`l`) |
| F5 | For a directory, read lists the contents, write creates and removes files, execute accesses files in it. | S25 | "list the contents of the directory" / "create and remove files in the directory" / "access files in the directory" |
| F6 | Removing a file needs write and search (`x`) on the directory, so write alone is not enough. | S37 | "Write access to the directory containing path is not allowed" / "one of the directories in path did not allow search permission" |
| F6b | Write alone is not enough on a directory (second source). | S29 | "Write alone is not enough." |
| F7 | Octal: one digit per class; values 4, 2, 1. | S26 | "Read 4, Write 2, Execute/search 1" (table 400/200/100, 40/20/10, 4/2/1) |
| F8 | Special bits: setuid 4000, setgid 2000, sticky 1000. | S26 | "4000 Set user ID / 2000 Set group ID / 1000 Restricted deletion flag or sticky bit" |
| F9 | Setuid: on execution, the effective user ID is that of the file. | S25 | "On execution, set the process’s effective user ID to that of the file." |
| F10 | Gloss: effective IDs are used by the kernel to determine permissions (Linux uses the filesystem IDs, normally equal). | S24 | "These IDs are used by the kernel to determine the permissions that the process will have when accessing shared resources" |
| F11 | Setgid: effective group ID of the file on execution; on a directory (most systems) new files get the directory group. | S25, S31 | "On execution, set the process’s effective group ID to that of the file." / "newly created subfiles inherit the same group as the directory" |
| F12 | Sticky bit on a directory: an unprivileged user may remove or rename only own files, or any file if the user owns the directory. | S25 | "Prevent unprivileged users from removing or renaming a file in a directory unless they own the file or the directory" |
| F13 | `ls` shows `s`/`S` for setuid/setgid and `t`/`T` for sticky. | S27 | "‘s’ If the set-user-ID or set-group-ID bit and the corresponding executable bit are both set." / "‘S’ ... executable bit is not set." |
| F14 | `/tmp` has the sticky bit (`drwxrwxrwt` in the example). | S25 | "commonly found on world-writable directories like /tmp." |
| F15 | `stat -c` prints with a format; `%A` symbolic mode, `%a` octal, `%U` owner, `%G` group, `%n` name. | S28 | "%a permission bits in octal" / "%A permission bits and file type in human readable form" / "%n file name" |
| F17 | The `ls -l` comment of the first File Permissions block depends on the umask (664 with umask 002, 644 with umask 022); the page states both. | S35 | "because 0666 & ~022 = 0644; i.e., rw-r--r--" |
| F16 | `/usr/bin/passwd` is setuid root on the test machine (`-rwsr-xr-x`). | local check | not a citable page; shown as an example of the `s` bit |

### Managing Permissions
| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| M1 | `chmod` accepts a symbolic mode or an octal number. | S32 | "which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits." |
| M2 | Only the owner (matching effective UID) or a privileged process can change the mode. | S30 | "Only a process whose effective user ID matches the user ID of the file, or a process with appropriate privileges, is permitted" |
| M3 | `X` = execute/search only if the file is a directory or already executable. | S32 | "execute/search only if the file is a directory or already has execute permission for some user (X)" |
| M4 | `chown OWNER:GROUP` changes owner and group; `:GROUP` only the group. | S33 | "If the owner is followed by a colon and a group ... the group ownership of the files is changed as well" |
| M5 | `chgrp GROUP FILE` changes the group. | S34 | "chgrp changes the group ownership of each given file to group" |
| M6 | A user may be limited to groups they belong to (system dependent). | S34 | "It is system dependent whether a user can change the group to an arbitrary one" |
| M7 | The umask turns off permission bits from the mode of new files. | S35 | "permissions in the umask are turned off from the mode argument to open(2) and mkdir(2)." |
| M8 | Usual case: mode 0666 and umask 022 gives 0644. | S35 | "because 0666 & ~022 = 0644; i.e., rw-r--r--" |
| M9 | `umask` is a Bash/Bourne shell builtin. | S36 | "Set the shell process’s file creation mask to mode." |
| M10 | A subshell is a copy of the shell, and commands in parentheses run in it. | S38 | "commands grouped with parentheses ... are invoked in a subshell environment that is a duplicate of the shell environment" |
| M10b | A child inherits the umask of its parent, so the change in `( )` does not reach the parent (second half: local check). | S35 | "A child process created via fork(2) inherits its parent's umask." |
| M11 | `-R` and `-L` together can be a security risk (symlink traversal). | S30 | "Combining this dereferencing option with the --recursive option may create a security risk" |
| M12 | A four-digit mode whose first digit selects setuid (4), setgid (2) or sticky (1) sets these bits (`2750`). | S32 | "The first digit selects the set user ID (4) and set group ID (2) and restricted deletion or sticky (1) attributes." |
| M13 | `chmod -R` ignores symlinks met during the walk; GNU option note: `--preserve-root` exists. (Not on the page.) | S30 | "In contrast, chmod ignores symbolic links encountered during recursive directory traversals." (chmod(1)) |

Tutorial's own advice (no source needed; the sentence "A minimal container may lack `sudo`" and "run them as root or add `sudo`" are also the tutorial's own advice; each flagged "Tutorial's own advice" on the page): print `id` in CI; two-account access tests; narrow sudo rule for the setup step; assert modes with `stat -c %a`; `2770` shared directory with `umask 077` for secrets; do not use `-p`; delete only users that the script made.
