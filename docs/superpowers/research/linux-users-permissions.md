# Users and Permissions (Linux stage 4) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `<scratch dir>/stage-users-permissions/` (`NNN.txt`). The roadmap pages were fetched into `<scratch dir>/roadmap-raw/`. The man7.org pages are HTML renderings of man pages. The shadow-utils pages on man7.org came from shadow-utils 4.19.0; the id, groups, chmod and stat pages came from coreutils 9.11; the GNU manual pages say "GNU Coreutils 9.12"; the sudo pages are the sudo.ws manual (sudoers grammar of sudo 1.9.x). Page claims are for current mainstream Linux (systemd distributions, GNU coreutils, shadow-utils, sudo.ws).

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
S40. Linux File Permission (Linux-CLI-Cheatsheet) — GitHub (abrahimcse) — https://github.com/abrahimcse/Linux-CLI-Cheatsheet/blob/main/Linux%20File%20Permission.md — accessed 2026-10-20 (the owner's pasted cheat sheet; the repo has no licence; the owner decided to include it with attribution; topic 7)
S41. inode(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/inode.7.html — accessed 2026-10-20
S42. chown(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/chown.2.html — accessed 2026-10-20
S43. path_resolution(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/path_resolution.7.html — accessed 2026-10-20
S44. execve(2) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man2/execve.2.html — accessed 2026-10-20 (fetched in fix round 1)

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
| F17 | The `ls -l` comment of the first File Permissions block depends on the umask (664 with umask 002, 644 with umask 022); the page states both. The comment is code, with no cite. The umask rule itself is row M8 (S35, Managing Permissions). | none | local check (umask 0002 gave `-rw-rw-r--`) |
| F16 | `/usr/bin/passwd` is setuid root on a standard system (`-rwsr-xr-x`). | local check | not a citable page; shown as an example of the `s` bit |

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

### Permissions Cheat Sheet
Topic 7, added 2026-10-20. The owner pasted the cheat sheet S40 and asked to include it as pasted. The page keeps the pasted wording and structure. Changes to the paste: Markdown conversion, the removed remote image, the attribution line, five factual corrections (rows C1 to C5, each a Callout or an inline sentence with an official cite), a danger Callout and a tip Callout. Fetch note: the pages were fetched on 2026-10-20 with `scripts/linux_fetch.py` into a directory outside the repo. The pasted text matches the live S40 page (checked by reading it). No `chmod`, `chown` or `sudo` ran on real files. The local checks ran in a temporary directory of the cache.

Pasted facts that were checked (the pasted text is quoted only in short pieces; the page cites S40 for the paste, and the rows below show that the official pages agree):

| # | Pasted claim | Source | Quote (max 25 words) |
|---|---|---|---|
| P1 | `r` on a directory lists the files. | S25 | "For directories, this means permission to list the contents of the directory." |
| P2 | `w` on a directory creates or deletes files. | S25 | "For directories, this means permission to create and remove files in the directory." |
| P3 | `x` on a directory gives access to the files in it. | S25 | "For directories, this means permission to access files in the directory." |
| P4 | `ls -l` starts with a file-type character: `-` regular file, `d` directory. (Cross-check, not cited on the page: the page cites S40 for the paste.) | S27 | "The file type is one of the following characters:" |
| P5 | `chmod` takes a symbolic mode or an octal number. | S32 | "which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits." |
| P6 | Octal values: read 4, write 2, execute 1. | S32 | "read (4), write (2), and execute (1)" |
| P7 | Symbolic letters `s` (setuid, setgid) and `t` (sticky). | S32 | "set user or group ID on execution (s), restricted deletion flag or sticky bit (t)" |
| P8 | Setuid on an executable: the program runs with the owner's permissions (effective user ID of the file). | S25 | "On execution, set the process’s effective user ID to that of the file." |
| P9 | Setgid on a directory: new files inherit the group of the directory. (Cross-check, not cited on the page: the page cites S40 for the paste.) | S31 | "newly created subfiles inherit the same group as the directory" |
| P0 | Attribution line: the page cites S40 as the source of the pasted text. The line says that the text is kept with the marked corrections. | S40 | the repo has no licence; the owner decided to include it with attribution (see the S40 entry) |
| P10 | `chown OWNER:GROUP FILE` form. | S33 | "that user is made the owner of each given file" |

Note on the pasted "10-character string": S27 says the `ls -l` mode field is the file-type character and the three sets of permission bits. S27 also says that one more character may follow (a space, `.` or `+`). The page keeps the pasted sentence and does not add this (rule: add nothing else).

Corrections (each is a short sentence on the page after the pasted sentence):

| # | Claim on the page | Source | Quote (max 25 words) |
|---|---|---|---|
| C1 | Sticky bit: the owner of the file, the owner of the directory, or a privileged process can delete or rename the file. The paste says only the owner of the file. | S41 | "can be renamed or deleted only by the owner of the file, by the owner of the directory, and by a privileged process." |
| C1b | Same claim, second source (chmod manual; the owner of the directory is also allowed). | S32 | "it prevents unprivileged users from removing or renaming a file in the directory unless they own the file or the directory" |
| C1c | Same claim: on Linux the privilege is CAP_FOWNER (root has it). | S37 | "the process is not privileged (Linux: does not have the CAP_FOWNER capability)." |
| C2 | Setgid also works on an executable file: the process gets the group of the file. The paste names directories only. | S41 | "For an executable file, the set-group-ID bit causes the effective group ID of a process that executes the file to change" |
| C2b | Same claim. | S25 | "On execution, set the process’s effective group ID to that of the file." |
| C3 | The 4, 2 or 1 is the first digit of a four-digit octal mode (`chmod 4755 file`, `chmod 2755 directory`, `chmod 1777 directory`). | S32 | "The first digit selects the set user ID (4) and set group ID (2) and restricted deletion or sticky (1) attributes." |
| C3b | A numeric mode has one to four digits, so a three-digit mode has no special digit. | S32 | "A numeric mode is from one to four octal digits (0-7)" |
| C3c | Local check: in a temporary directory, `chmod 4755 f`, `chmod 2755 d2` and `chmod 1777 d3` gave `-rwsr-xr-x`, `drwxr-sr-x` and `drwxrwxrwt` (`stat -c '%a %A'`: 4755, 2755, 1777). | local check | not a citable page |
| C4 | Changing the owner needs a privileged process. A user may change the group only, and only to a group that the user belongs to (Linux). | S42 | "Only a privileged process (Linux: one with the CAP_CHOWN capability) may change the owner of a file." |
| C4b | Same claim, the group part. | S42 | "The owner of a file may change the group of the file to any group of which that owner is a member." |
| C4c | The GNU manual says the group rule is system dependent; the portable rule is the group of which the user is a member. | S33 | "or the more portable behavior of being restricted to setting a group of which the user is a member." |
| C5 | A directory `w` works only with `x` on the directory: the process needs search permission on a directory to look up a name in it (`x` on a directory is search permission). | S43 | "execute permission in case of ordinary files, or search permission in case of directories." |
| C5b | Same claim: a lookup in a directory without search permission fails. | S43 | "If the process does not have search permission on the current lookup directory, an EACCES error is returned" |
| C5c | Removing a name needs write access to the directory and search permission on the path. | S37 | "Write access to the directory containing path is not allowed for the process's effective UID" (EACCES; the same line adds "or one of the directories in path did not allow search permission.") |
| C5d | Local check: in a temporary directory, a directory with mode 200 (write, no execute) gave `touch: setting times of 'w_only/x': Permission denied`. | local check | not a citable page |

Fix round 1 additions:

| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| C6 | On Linux, setuid and setgid are ignored on scripts. This limits the "runs as root" effect to compiled programs. | S44 | "Linux (like most other modern UNIX systems) ignores the set-user- ID and set-group-ID bits on scripts." (the fetched text wraps the word "set-user-ID" after the hyphen) |
| C7 | The bits are also ignored on a filesystem that is mounted `nosuid`. | S44 | "the underlying filesystem is mounted nosuid (the MS_NOSUID flag for mount(2))" |
| C8 | The symbolic form is not only `[u/g/o][+/-][r/w/x]`: `a`, `=`, joined letters (`ug+rw`), no user letter (`+x`), and `s` and `t` are valid. | S32 | "A combination of the letters ugoa controls which users' access to the file will be changed" |
| C8b | Same claim: `=` sets exactly these bits. | S32 | "and = causes them to be added and causes unmentioned bits to be removed" |
| C8c | Same claim: without a user letter, the effect is as if `a` were given (bits in the umask are not affected). | S32 | "If none of these are given, the effect is as if (a) were given, but bits that are set in the umask are not affected." |
| T1 | Tip callout: `stat -c %a` prints the octal mode (GNU option). Cite S28; see row F15 for the quote. | S28 | "%a permission bits in octal" |

Danger Callout (the page cites S25 and S32 and S33 for each fact):

| # | Claim | Source | Quote (max 25 words) |
|---|---|---|---|
| D1 | Setuid makes the program run with the user ID of the file owner. If root owns it, it runs as root. | S25 | "On execution, set the process’s effective user ID to that of the file." |
| D2 | Mode 777 gives write permission to the owner, the group and everyone else (the second, third and fourth digit of the mode select the classes). | S32 | "the fourth for other users not in the file's group, with the same values." |
| D3 | `chown` changes the owner of every given file (so a wrong path changes the wrong file). | S33 | "that user is made the owner of each given file" |

Tutorial's own advice (no source needed; each flagged "Tutorial's own advice" on the page): set setuid only on a program that you trust; do not use `chmod 777`; check the path with `ls -ld` before `chown`; after a test writes a key file, check `ls -l` or `stat -c %a` (GNU option, S28, row F15); if a test fails with `Permission denied`, find the missing bit and fix that bit, not the mode of the whole file.

Not corrected, by order of the owner (rule: add nothing else): the paste says that numeric mode is a "three-digit octal number" (true for the common case; C3 covers the fourth digit); `chmod +t directoryname` without `u`, `g` or `o` is valid GNU `chmod` (S32: without `ugoa` the effect is as if `a` were given, but bits in the umask are not affected).

### Permissions Cheat Sheet: the image
Added 2026-10-20. The owner attached the infographic "Linux File Permission Cheatsheet" by abrahimcse (watermark `linkedin.com/in/abrahimcse`; 1280 x 1745 px JPEG, file `public/images/linux/linux-file-permission-cheatsheet.jpg`, copied without change). The paste of S40 had a remote link to the same image (`Images/Linux File Permission.jpg` in the repo of S40). The repo has no licence. The owner decided to include the image with attribution, like the text. The page cites S40 for the image. No new source was added: S25, S27, S31, S32 and S41 already support the corrections.

Fetch note: S25, S27, S31, S32, S41, S44 were fetched again on 2026-10-20 with `scripts/linux_fetch.py` (list and output outside the repo). Each quote below was tested as an exact substring (spaces normalized) of the fetched text and has 25 words or fewer. Local check (temporary directory, no root): `chmod u+s f` on `-rw-r--r--` gave `-rwSr--r--`; after `chmod u+x f` it gave `-rwsr--r--`; `chmod g+s d` on a directory gave `drwxrwsr-x`, and mode 774 with the setgid bit gave `drwxrwsr--` (the string of the middle panel); `chmod +t e` on `drwxrwxrw-` gave `drwxrwxrwT`; after `chmod o+x e` it gave `drwxrwxrwt`.

What the image shows (a transcription for the text description on the page):
- Top panel: `total 20`, five `ls -l` rows (names `shum`, `staff`, files `Public`, `Public_html`, `Mail`, `verse`; invented sample data), arrows for the columns of the last row, and the box `rws` with "Readable", "Writeable", "Executable".
- Left table: Binary, Octal, Permissions, Representation for 000 to 111.
- Right diagrams: Owner, Group, Other with `r`, `w`, `x`; Owner and Group show `S`, `s`; Other shows `T`, `t`. Two notes: "Capital S is an error it occurs if you set SUID bit or SGID bit to a file without execute (x) bit set" and "Capital T is an error it occurs if you set Stick bit to a file without execute (x) bit set".
- Bottom panels: "SUID Permission" `-rwsrw-r--` with `$chmod u+s file`; "SUID Permission" `drwxrwsr--` with `$chmod g+s directory_name`; "Stick Bit Permission" `drwxrwxrwt` with `$chmod +t directory_name`.

| # | Claim on the page | Source | Quote (max 25 words) |
|---|---|---|---|
| I1 | The columns of an `ls -l` line: file type, mode bits, number of hard links, owner name, group name, size, time. (The image and the text description agree; the description cites S27.) | S27 | "print the file type, file mode bits, number of hard links, owner name, group name, size, and timestamp" |
| I2 | Correction: the command `chmod g+s directory_name` sets the setgid bit, not setuid. The letters `u+s` and `g-s` are the symbolic modes for the set-user-ID and set-group-ID bits. | S32 | "You can set or clear the bits with symbolic modes like u+s and g-s." |
| I2b | Same claim: `s` in a symbolic mode means "set user or group ID"; the group class `g` therefore gives set-group-ID. Local check: `chmod g+s d` gave `drwxrwsr-x`. | S32 | "set user or group ID on execution (s), restricted deletion flag or sticky bit (t)" |
| I2c | Same claim: the set-group-ID bit is the setgid bit. | S25 | "The set-group-ID bit (setgid bit)." |
| I2d | On a directory, setgid makes new files inherit the group of the directory (the effect of the panel's command). | S31 | "newly created subfiles inherit the same group as the directory" |
| I3 | Correction: capital `S` means setuid or setgid is set and the matching execute bit is not set. | S27 | "If the set-user-ID or set-group-ID bit is set but the corresponding executable bit is not set." |
| I3b | Correction: capital `T` means the sticky bit is set and the execute bit for others is not set. Local check: `chmod +t` on `drwxrwxrw-` gave `drwxrwxrwT`. | S27 | "If the restricted deletion flag or sticky bit is set but the other-executable bit is not set." |
| I4 | Correction: in the owner part, `s` means setuid and execute are both set. | S27 | "If the set-user-ID or set-group-ID bit and the corresponding executable bit are both set." |
| I5 | Correction: "Stick Bit" is the sticky bit, also called the restricted deletion flag. | S27 | "The restricted deletion flag is another name for the sticky bit." |
| I5b | Same claim: the `t` letter of `chmod` selects this bit. | S32 | "set user or group ID on execution (s), restricted deletion flag or sticky bit (t)" |
| I6 | The octal values of the table are sums of 4, 2 and 1 (the description refers to the numeric mode list of the topic). | S32 | "derived by adding up the bits with values 4, 2, and 1" |
| I7 | The sample `ls -l` lines (names `shum` and `staff`, dates) are an illustration. | none | the tutorial's own note; the lines show invented data |
| I7b | The image prints a gap inside the mode strings (`drwxr-x r-x`, `-rw-r-- r--`). `ls -l` prints the mode as one string with the three sets of permissions side by side: the manual lists a mode with no gap (`-rw-r--r-- 1`). | S27 | "ls combines multiple bits into the third character of each set of permissions" / "-rw-r--r-- 1" |
| I0 | Attribution line: the image is by abrahimcse and comes from the repository of S40. The page cites S40. | S40 | the paste of S40 linked `Images/Linux File Permission.jpg` of that repo (see `cheatsheet-paste.md` of the task folder); not a quote |

Not added (checked, dropped): the brief proposed "S or T: then setuid and setgid have no effect". The text of S41 says that a regular file without the group execute bit and with the set-group-ID bit set means mandatory file locking (an old Linux feature): "For a file that does not have the group execution bit (S_IXGRP) set, the set-group-ID bit indicates mandatory file/record locking." The statement is therefore not true for every case, and the page says only what the `ls` manual (S27) says about the letters. Not corrected: the table of the image and the three-digit mode examples are right; the image calls the owner `s` "Executable" only in the `rws` box, which is covered by I4.

## Round 2 (2026-10-27): Try it commands

Tool versions: GNU bash 5.3.9; uutils coreutils 0.10.0 (`ls`, `id`, `groups`, `stat`, `chmod`, `touch`; Ubuntu 26.04.1 LTS ships uutils as coreutils, and the output format matched GNU for every command below); `getent` from Ubuntu GLIBC 2.43. Each block ran for real in a throw-away directory under the session scratchpad. No command needed root, and none changed an account. Stand-ins on the page: `user` (login name), `staff` (primary group), `User` (comment field); the real names are not recorded.

| Topic | Try it command | Real output (stand-ins applied) |
|---|---|---|
| User Management | `id`; `getent passwd "$(id -un)"`; `ls -l /etc/passwd /etc/shadow` | `uid=1000(user) gid=1000(staff) groups=1000(staff),27(sudo),...`; `user:x:1000:1000:User:/home/user:/bin/bash`; `-rw-r--r-- 1 root root 2978 ... /etc/passwd`, `-rw-r----- 1 root shadow 1405 ... /etc/shadow` |
| Users and Groups | `id -Gn`; `groups`; `getent group "$(id -gn)"` | the same name list twice (page shows `staff adm sudo users`); `staff:x:1000:` |
| Create, Update, and Delete Users | `ls -A /etc/skel`; `grep '^CREATE_HOME' /etc/login.defs` | `.bash_logout .bashrc .profile`; no output (exit 1): Ubuntu 26.04 does not set `CREATE_HOME` |
| Super User | `id -u`; `getent group sudo` | `1000`; `sudo:x:27:user`. A run of `getent group sudo wheel` printed only the sudo line (exit 2): this machine has no `wheel` group. |
| File Permissions | `( cd "$(mktemp -d)"; touch report.txt; chmod 640 report.txt; ls -l report.txt; stat -c '%A %a %U:%G %n' report.txt; rm -r "$PWD" )` | `-rw-r----- 1 user staff 0 Oct 27 15:32 report.txt`; `-rw-r----- 640 user:staff report.txt` |
| Managing Permissions | `( cd "$(mktemp -d)"; touch run.sh; chmod 640 run.sh; chmod u+x,g-w run.sh; umask 077; touch private.txt; stat -c '%A %a %n' run.sh private.txt; rm -r "$PWD" )` | `-rwxr----- 740 run.sh`; `-rw------- 600 private.txt`; the umask of the parent shell stayed `0002` |

Facts moved (no fact deleted; every old `<Cite n>` is still on the page):
- User Management: the `x` marker, `/etc/shadow`, and the locked `!` hash moved to "Go deeper". The container UID mismatch advice is split: the short part is the tip, the rest is in "Go deeper".
- Users and Groups: S18 (admins use groups for access), the session groups, `newgrp`, `gpasswd -d`, `groupdel`, and the `sudo -iu` advice moved to "Go deeper".
- Create, Update, and Delete Users: the flag details moved to a table in "Go deeper". The danger callout (`usermod -G` without `-a`, `userdel -r`) stays before "Go deeper"; `userdel -f` moved into the table. The `-p` warning moved from the tip to "Go deeper".
- Super User: S20 (`wheel`, lock root), the sudo timestamp options, and the sudoers file rules moved to "Go deeper". A shorter danger callout (visudo, syntax error, `NOPASSWD: ALL`) stays visible. New gloss in "Go deeper": `getent` prints no line for a key that it cannot find (S15: exit status 2, "One or more supplied key could not be found").
- File Permissions: the file type letters, the directory bits, and the special bits (now a table) moved to "Go deeper". The FlowDiagram of mode 640 stays in the Core part.
- Managing Permissions: the owner rule (S30), `X`, `chown`, `chgrp`, `-R` with `-L`, and the `2770` advice moved to "Go deeper". The danger callout (`chmod -R 777`, `chown -R` on a wrong path) stays visible; it now cites S32 for the 777 claim (row D2).

### Round 2, fix round 1 (2026-10-27)
- The Try-it blocks of File Permissions and Managing Permissions now start with `cd "$(mktemp -d)" || exit`. Run again (bash 5.3.9, uutils coreutils 0.10.0): the output is unchanged. With `TMPDIR=/nonexistent_zz`, each block printed `mktemp: failed to create directory ...` and `cd: null directory`, exited with status 1, and the current directory and its file stayed.
- Moved back to the visible danger callouts: `userdel -f` (S7) and `useradd -p` (S5) in Create, Update, and Delete Users; `-R` with `-L` (S30) in Managing Permissions. To stay in 150 words, "These programs need root" moved to Go deeper of Create, and "check the path with `ls -ld`" moved to the tutorial advice in Go deeper of Managing Permissions.
- Super User gloss: `getent group wheel` prints no line and exits with status 2 if the group does not exist (S15; local run: exit 2).
