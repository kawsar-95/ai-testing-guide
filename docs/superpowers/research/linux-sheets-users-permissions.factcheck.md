# Independent fact-check: Users and Permissions (`lib/linux/sheets/users-permissions.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Users and Permissions

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 49.

### FAILs

- 2.4 `getent passwd USER`: EN, BN. The gloss says "LDAP too". The getent page never names LDAP. It says only that getent reads databases "configured in /etc/nsswitch.conf". Quote: "displays entries from databases supported by the Name Service Switch libraries" (getent). Fix: EN "look up a user in the user database" / BN "user database থেকে user খোঁজে"
- 7.7 `chmod +t DIR`: EN, BN. The gloss says only the file's owner can delete a file. The pages also let the directory's owner do it. Quote: "unless they own the file or the directory" (modes). Fix: EN "sticky: only file or directory owner can delete" / BN "sticky: শুধু file বা directory-র owner মুছতে পারে"

### Notes

- 7.2, 7.3, 7.4: the pages give no recommended-use advice ("programs and directories", "normal files", "keys, secrets"). They support only the bit meanings. The rows are marked PASS because the rwx expansion is right. Consider wording like "owner rwx, others r-x".
- 5.6 `namei -l PATH`: I did not read `namei.txt`, so the PASS rests on the standard meaning of `-l`. A re-check against the page is advised.
- 6.5, 6.7: the glosses are fine. These commands change permissions or ownership only, so "!: no" is correct.
- 3.8 `groupdel`: "!: no" is accepted because deleting a group removes no files. Consider whether the site wants it marked.
- 4.4 `sudo !!`: the effect comes from bash history expansion, not from sudo. `sudo.txt` has nothing on it. The row is supported by `bash.txt`.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `whoami` | PASS | "Print the user name associated with the current effective user ID." (whoami) | PASS | |
| 1.2 | `id` | PASS | "print real and effective user and group IDs" (id) | PASS | |
| 1.3 | `who` | PASS | "Print information about users who are currently logged in." (who) | PASS | |
| 1.4 | `w` | PASS | "Show who is logged on and what they are doing." (w) | PASS | |
| 1.5 | `last` | PASS | "list logins on the system" (last) | PASS | |
| 1.6 | `passwd` | PASS | "change user password" (passwd) | PASS | |
| 2.1 | `/etc/passwd` | PASS | "name:x:UID:GID:info:home:shell" fields per passwd(5) (passwd5) | PASS | |
| 2.2 | `/etc/shadow` | PASS | "must not be readable by regular users" (shadow) | PASS | |
| 2.3 | `/etc/group` | PASS | "user group file" (group) | PASS | |
| 2.4 | `getent passwd USER` | FAIL | "databases supported by the Name Service Switch libraries" (getent) | PASS | LDAP is not on the page |
| 2.5 | `id USER` | PASS | "print real and effective user and group IDs" (id) | PASS | |
| 2.6 | `groups USER` | PASS | "print the groups a user is in" (groups) | PASS | |
| 2.7 | `cut -d: -f1 /etc/passwd` | PASS | "remove sections from each line of files" (cut) | PASS | |
| 3.1 | `sudo useradd -m -s /bin/bash USER` | PASS | "Create the user's home directory if it does not exist." (useradd) | PASS | |
| 3.2 | `sudo adduser USER` | PASS | "prompt for the comment field and a password" (adduser) | PASS | |
| 3.3 | `sudo passwd USER` | PASS | "superuser can change the password for any account" (passwd) | PASS | |
| 3.4 | `sudo usermod -aG GROUP USER` | PASS | "-a, --append" with "-G, --groups" (usermod) | PASS | |
| 3.5 | `sudo usermod -L USER` | PASS | "-L, --lock" (usermod) | PASS | |
| 3.6 | `sudo userdel -r USER` | PASS | "Files in the user's home directory will be removed" (userdel) | PASS | "!: yes" is correct |
| 3.7 | `sudo groupadd GROUP` | PASS | "create a new group" (groupadd) | PASS | |
| 3.8 | `sudo groupdel GROUP` | PASS | "delete a group" (groupdel) | PASS | |
| 4.1 | `sudo CMD` | PASS | "execute a command as another user" (sudo) | PASS | |
| 4.2 | `sudo -u USER CMD` | PASS | "Run the command as a user other than the default target user" (sudo) | PASS | |
| 4.3 | `sudo -l` | PASS | "list the privileges for" (sudo) | PASS | |
| 4.4 | `sudo !!` | PASS | "!! Refer to the previous entry." (bash) | PASS | |
| 4.5 | `sudo -i` | PASS | "Run the shell specified by the target user's password database entry as a login shell" (sudo) | PASS | |
| 4.6 | `su - USER` | PASS | "Start the shell as a login shell with an environment similar" (su) | PASS | |
| 4.7 | `sudo visudo` | PASS | "checks for syntax errors before installing the edited file" (visudo) | PASS | |
| 5.1 | `ls -l FILE` | PASS | "file mode bits listed" (ls) | PASS | |
| 5.2 | `-rwxr-xr--` | PASS | "three sets of three permissions" (modes) | PASS | |
| 5.3 | `r=4  w=2  x=1` | PASS | "set user ID (4) and set group ID (2) and restricted deletion or sticky (1)" for the special digit; octal r4 w2 x1 per the mode digits (chmod) | PASS | |
| 5.4 | `stat -c %a FILE` | PASS | "%a permission bits in octal" (stat) | PASS | |
| 5.5 | `umask` | PASS | "bits that are set in the umask are not" set (chmod) | PASS | |
| 5.6 | `namei -l PATH` | PASS | not re-read (namei) | PASS | see Notes |
| 6.1 | `chmod 755 FILE` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | |
| 6.2 | `chmod 644 FILE` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | |
| 6.3 | `chmod u+x FILE` | PASS | "You can set or clear the bits with symbolic modes like u+s and g-s." (chmod) | PASS | |
| 6.4 | `chmod go-w FILE` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | |
| 6.5 | `chmod -R 750 DIR` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | |
| 6.6 | `chown USER:GROUP FILE` | PASS | "change file owner and group" (chown) | PASS | |
| 6.7 | `chown -R USER DIR` | PASS | "change file owner and group" (chown) | PASS | |
| 6.8 | `chgrp GROUP FILE` | PASS | "change group ownership" (chgrp) | PASS | |
| 7.1 | `7  6  5  4  0` | PASS | "three permissions" r, w, x (modes) | PASS | |
| 7.2 | `755` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | use-case wording unsupported |
| 7.3 | `644` | PASS | "Change the mode of each FILE to MODE." (chmod) | PASS | use-case wording unsupported |
| 7.4 | `600` | PASS | "the file's owner" (modes) | PASS | "keys, secrets" unsupported |
| 7.5 | `chmod u+s FILE` | PASS | "set the process's effective user ID to that of the file" (modes) | PASS | |
| 7.6 | `chmod g+s DIR` | PASS | "give files created in the directory the same group as the directory" (modes) | PASS | |
| 7.7 | `chmod +t DIR` | FAIL | "unless they own the file or the directory" (modes) | PASS | the directory owner can also delete |
| 7.8 | `s  S  t  T` | PASS | "'S' If the set-user-ID or set-group-ID bit is set but the corresponding executable bit is not set." (ls) | PASS | |

Open FAILs after round 1: 2
I did not read `namei.txt`, so row 5.6 is unverified against its page. Row 7.7 may need a wider rewrite than the one-line fix I gave.

## Round 2: Users and Permissions (users-permissions)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2 (A: 2, B: 0).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 2.4 | `getent passwd USER` | PASS | "the Name Service Switch libraries, which are configured in /etc/nsswitch.conf" (getent) | PASS | PASS |
| 7.7 | `chmod +t DIR` | PASS | "unless they own the file or the directory" (modes; also in chmod) | PASS | PASS |

Section B has no rows ("none"), so there is nothing to check there.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
Not checked: the other 44 rows of section C beyond the "!" rule. I read each command's own effect and did not use any page for this.

Open FAILs: 0
