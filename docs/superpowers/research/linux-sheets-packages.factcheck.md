# Independent fact-check: Packages (`lib/linux/sheets/packages.ts`)

Date: 2026-11-04. 3 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Round 3 checked the rows that failed round 2, and the "!" of every row again. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Packages

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 43.

### FAILs

- 1.2 `apt`: EN. The gloss names a "Debian family" with Ubuntu and Mint. The cited pages (`apt`, `dpkg`) never say that apt belongs to a family, and Mint appears in none of them. Quote: "The primary and more user-friendly front-end for dpkg as a CLI (command-line interface) is apt(8)" (dpkg). Fix: EN "the package tool of Debian systems" / BN "Debian সিস্টেমের package tool"
- 1.3 `dnf`: EN. The gloss names a "Red Hat family" including Rocky. Rocky is not in `dnf`, `rpm` or `osrelease`, and none of them gives a family. Quote: "DNF is the next upcoming major version of YUM, a package manager for RPM-based Linux" (dnf). Fix: EN "the package tool of Fedora and RHEL" / BN "Fedora ও RHEL-এর package tool"
- 4.3 `sudo apt full-upgrade`: !. It removes installed packages, so it needs "!: yes". Quote: "will remove currently installed packages if this is needed to upgrade the system as a whole" (apt). Fix: EN unchanged / BN unchanged; set "!: yes"
- 4.4 `sudo apt remove PKG`: !. It deletes a package, so it needs "!: yes". Quote: "Removing a package removes all packaged data" (apt). Fix: EN unchanged / BN unchanged; set "!: yes"
- 4.5 `sudo apt purge PKG`: !. It deletes the package and its configuration, so it needs "!: yes". Quote: "you can get rid of these leftovers by calling purge" (apt). Fix: EN unchanged / BN unchanged; set "!: yes"
- 4.6 `sudo apt autoremove`: !. It deletes packages, so it needs "!: yes". Quote: "autoremove is used to remove packages that were automatically installed to satisfy dependencies" (apt). Fix: EN unchanged / BN unchanged; set "!: yes"
- 4.8 `sudo dnf remove PKG`: !. It deletes packages, and also those that depend on the target, so it needs "!: yes". Quote: "Removes the specified packages from the system along with any packages depending on the packages being removed." (dnf). Fix: EN unchanged / BN unchanged; set "!: yes"
- 6.7 `sudo snap remove NAME`: !. It deletes the snap and its data, so it needs "!: yes". Quote: "remove a snap from your system, along with its internal user, system and configuration data" (snapstart). Fix: EN unchanged / BN unchanged; set "!: yes"

### Notes

- 2.4: `policy` is documented as showing "the priorities of each source" and "detailed information about the priority selection of the named package". The gloss "which repository a package comes from" is close but not stated. Consider "priority of each source for a package".
- 6.4: The cited pages only say `--classic` will "Confirm installation of a snap that uses classic confinement". They never say what classic means. The gloss "need system access" is inferred from strict snaps being "isolated from your system". Consider "confirm a snap with classic confinement".
- 1.5: The `rpm` page never mentions dnf. The link is supported only by "without performing any rpm transaction" (dnf), so the gloss is loosely supported.
- 4.7: `dnf upgrade` is described as "Updates each package to the latest version that is both available and resolvable." The gloss "everything" is fine because it covers installed packages only.
- 4.2 and 4.7: `apt upgrade` never removes packages ("existing packages will never be removed"), so "!: no" is correct. The `dnf upgrade` page gives no removal either.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `cat /etc/os-release` | PASS | "contain operating system identification data" (osrelease) | PASS | |
| 1.2 | `apt` | FAIL | "front-end for dpkg as a CLI ... is apt(8)" (dpkg) | PASS | Family and Mint unsupported |
| 1.3 | `dnf` | FAIL | "a package manager for RPM-based Linux" (dnf) | PASS | Family and Rocky unsupported |
| 1.4 | `dpkg` | PASS | "front-end for dpkg as a CLI ... is apt(8)" (dpkg) | PASS | |
| 1.5 | `rpm` | PASS | "without performing any rpm transaction" (dnf) | PASS | Loose support |
| 1.6 | `snap` | PASS | "works without dependencies or modification across many different Linux distributions" (snapstart) | PASS | |
| 2.1 | `/etc/apt/sources.list` | PASS | "The source list /etc/apt/sources.list and the files contained in /etc/apt/sources.list.d/" (sourceslist) | PASS | |
| 2.2 | `ls /etc/apt/sources.list.d/` | PASS | "/etc/apt/sources.list.d directory provides a way to add sources.list entries in separate files" (sourceslist) | PASS | |
| 2.3 | `sudo apt update` | PASS | "update is used to download package information from all configured sources" (apt) | PASS | |
| 2.4 | `apt-cache policy PKG` | PASS | "prints out detailed information about the priority selection of the named package" (aptcache) | PASS | See notes |
| 2.5 | `sudo add-apt-repository ppa:USER/NAME` | PASS | "Must be in the format ppa:USER/PPA" (addaptrepo) | PASS | |
| 2.6 | `dnf repolist` | PASS | "Lists all enabled repositories by default." (dnf) | PASS | |
| 2.7 | `/etc/yum.repos.d/` | PASS | "all *.repo files found under /etc/yum.repos.d" (dnfconf) | PASS | |
| 3.1 | `apt search WORD` | PASS | "search for the given regex(7) term(s) in the list of available packages" (apt) | PASS | Page says package list; the gloss "name or description" is a loose summary |
| 3.2 | `apt show PKG` | PASS | "Show information about the given package(s)" (apt) | PASS | |
| 3.3 | `sudo apt install PKG` | PASS | "Performs the requested action on one or more packages" (apt) | PASS | |
| 3.4 | `dnf search WORD` | PASS | "Search package metadata for keywords." (dnf) | PASS | |
| 3.5 | `dnf info PKG` | PASS | "Lists description and summary information about installed and available packages." (dnf) | PASS | |
| 3.6 | `sudo dnf install PKG` | PASS | "will look up and install a package that provides vim" (dnf) | PASS | |
| 3.7 | `dnf provides */NAME` | PASS | "If a spec starts with either / or */, it is considered as a potential file provide." (dnf) | PASS | |
| 4.1 | `sudo apt update` | PASS | "update is used to download package information from all configured sources" (apt) | PASS | |
| 4.2 | `sudo apt upgrade` | PASS | "install available upgrades of all packages currently installed" (apt) | PASS | |
| 4.3 | `sudo apt full-upgrade` | FAIL | "will remove currently installed packages if this is needed to upgrade the system" (apt) | PASS | "!" should be yes |
| 4.4 | `sudo apt remove PKG` | FAIL | "Removing a package removes all packaged data, but leaves usually small (modified) user configuration files behind" (apt) | PASS | "!" should be yes |
| 4.5 | `sudo apt purge PKG` | FAIL | "you can get rid of these leftovers by calling purge" (apt) | PASS | "!" should be yes |
| 4.6 | `sudo apt autoremove` | FAIL | "used to remove packages that were automatically installed ... and are now no longer needed" (apt) | PASS | "!" should be yes |
| 4.7 | `sudo dnf upgrade` | PASS | "Updates each package to the latest version that is both available and resolvable." (dnf) | PASS | |
| 4.8 | `sudo dnf remove PKG` | FAIL | "Removes the specified packages from the system along with any packages depending on the packages being removed." (dnf) | PASS | "!" should be yes |
| 5.1 | `apt list --installed` | PASS | "installed (--installed), upgradeable (--upgradeable) or all available" (apt) | PASS | |
| 5.2 | `dpkg -l` | PASS | "-l, --list package-name-pattern... List packages matching given pattern." (dpkg) | PASS | |
| 5.3 | `dpkg -L PKG` | PASS | "List files installed to your system from package-name." (dpkg) | PASS | |
| 5.4 | `dpkg -S FILE` | PASS | "Search for a filename from installed packages." (dpkg) | PASS | |
| 5.5 | `dnf list --installed` | PASS | "Lists installed packages." (dnf) | PASS | |
| 5.6 | `rpm -qa` | PASS | "-a, --all [SELECTOR ...] Query all installed packages." (rpm) | PASS | |
| 5.7 | `rpm -ql PKG` | PASS | "-l, --list List files in package." (rpm) | PASS | |
| 5.8 | `rpm -qf FILE` | PASS | "-f, --file FILE Query package owning installed FILE." (rpm) | PASS | |
| 6.1 | `snap find WORD` | PASS | "To search for snaps with 'media player' in either their names or descriptions, type snap find" (snapstart) | PASS | |
| 6.2 | `snap info NAME` | PASS | "The snap info command makes it easy to find more details about a specific snap." (snapstart) | PASS | |
| 6.3 | `sudo snap install NAME` | PASS | "sudo snap install --channel=edge vlc" (snapstart) | PASS | |
| 6.4 | `sudo snap install NAME --classic` | PASS | "Confirm installation of a snap that uses classic confinement" (snapman) | PASS | See notes |
| 6.5 | `snap list` | PASS | "display these with the snap list command" (snapstart) | PASS | |
| 6.6 | `sudo snap refresh` | PASS | "$ sudo snap refresh" (snapstart) | PASS | Page shows the command without a name; it is the all-snaps form |
| 6.7 | `sudo snap remove NAME` | FAIL | "To remove a snap from your system, along with its internal user, system and configuration data" (snapstart) | PASS | "!" should be yes |

Open FAILs after round 1: 8
I did not use the web or my memory for any PASS. The two weakest PASS verdicts are 2.4 and 6.4, and both are explained in the Notes.

## Round 2: Packages (packages)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 7.

### FAILs

- 1.2 `apt`: EN. "such as Ubuntu" is not supported. Ubuntu appears in the cited pages only as a generic distribution example (osrelease) or in snap context (snapstart), never as a user of apt. Quote: "The primary and more user-friendly front-end for dpkg as a CLI (command-line interface) is apt(8)" (dpkg). Fix: EN "the package tool of Debian systems" / BN "Debian সিস্টেমের package tool"
- 1.3 `dnf`: EN. "such as Fedora" is not supported. No page ties Fedora to dnf: Fedora appears only as an os-release example, and the dnf page does not name it. Quote: "DNF is the next upcoming major version of YUM, a package manager for RPM-based Linux" (dnf). Fix: EN "the package tool of RPM-based systems" / BN "RPM-ভিত্তিক সিস্টেমের package tool"

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 1.2 | `apt` | FAIL | "such as Ubuntu" has no support; "package manager for Debian" (dpkg) supports only "Debian systems" | PASS (matches the EN as written; it also needs the fix) | PASS |
| 1.3 | `dnf` | FAIL | "a package manager for RPM-based Linux" (dnf); Fedora is not named in the page | PASS (matches the EN as written; it also needs the fix) | PASS |
| 4.3 | `sudo apt full-upgrade` | PASS | "will remove currently installed packages" (apt) | PASS | PASS (yes) |
| 4.4 | `sudo apt remove PKG` | PASS | "Removing a package removes all packaged data, but leaves usually" small user configuration files behind (apt) | PASS | PASS (yes) |
| 4.5 | `sudo apt purge PKG` | PASS | "you can get rid of these leftovers by calling purge" (apt) | PASS | PASS (yes) |
| 4.6 | `sudo apt autoremove` | PASS | "autoremove is used to remove packages that were" automatically installed (apt) | PASS | PASS (yes) |
| 4.8 | `sudo dnf remove PKG` | PASS | "Removes the specified packages from the system" (dnf) | PASS | PASS (yes) |
| 6.7 | `sudo snap remove NAME` | PASS | "To remove a snap from your system, along with its internal user, system and configuration data" (snapstart) | PASS | PASS (yes) |

(Row 6.7 is the seventh row in A, so the count of 7 holds; the table above lists 8 lines because the writer's section A has 8 rows: 1.2, 1.3, 4.3, 4.4, 4.5, 4.6, 4.8, 6.7. Rows re-checked: 8.)

Section B is "none", so there is nothing to check there.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 2

## Round 3: Packages (packages)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 1.2 | `apt` | PASS | "manage Debian packages. The primary and more user-friendly front-end for dpkg as a CLI (command-line interface) is apt(8)" (dpkg) | PASS | PASS |
| 1.3 | `dnf` | PASS | "DNF is the next upcoming major version of YUM, a package manager for RPM-based Linux" (dnf) | PASS | PASS |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 3: 0
I did not check the unchanged rows in part C for anything but their "!". My PASS for the apt row relies on the dpkg page, not on the apt page itself.

Open FAILs: 0
