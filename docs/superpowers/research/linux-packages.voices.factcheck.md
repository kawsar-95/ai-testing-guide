# Voice fact-check: Linux Packages (round 1, 2026-10-20)

Page: `content/linux/packages.mdx`. I did not write this page.

Method: I read the 6 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a version, a flag, a command, a path, a product name, a scope, or a condition, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n` for the same claim, and that the source list of the page and `linux-packages.factcheck.md` (`Open FAILs: 0`) agree with that pairing. I read the Bangla text for meaning and for natural use. I checked that common technical terms, commands, and paths stay in English, that the polite form (আপনি) is used, and that a hyphen joins an English word and a Bangla suffix.

Notes:

- The code blocks and callout titles of the Technical panels are part of the Technical text. A voice sentence that restates a code line or a callout title (rows with "as above" or "title") counts as a restatement.
- The tester tips ("Why it matters for testing") have no new fact in the voice panels. Each voice that has a tip starts it with "Tutorial's own advice" (Bangla: "Tutorial-এর নিজস্ব পরামর্শ").
- Both voice panels drop many Technical details (for example `apt-cache policy`, `rpm -qi`, `dnf-automatic`, the `-y` warning). These are omissions, not FAILs.
- Flagged item: Layman "On Ubuntu Server, `unattended-upgrades` installs security updates by default" (section "Installing, Removing, and Upgrading Packages") against Technical "the default `unattended-upgrades` package installs security updates". Both say that the stock package applies security updates, and S19 supports both. PASS, with a language note.
- Flagged item: Bangla "আপনি নিজে চাইলে APT একটি package-কে manual হিসেবে mark করে" (section "Listing Installed Packages") for "if you asked for it". The contrast with "dependency হিসেবে এলে" keeps the meaning. PASS, with a language note.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | Package Management | Layman | A package is an archive with programs, configuration files, and metadata such as version and dependencies [2] | "A package is an archive with programs, configuration files, and metadata such as the version and the dependencies [2]" | PASS | - |
| 2 | Package Management | Layman | A dependency is another package that must be installed with it | "A dependency is another package that must be installed with it." | PASS | - |
| 3 | Package Management | Layman | A conflicting dependency must not be installed with it [6] | "A conflicting dependency is a package that must not be installed with it [6]." | PASS | - |
| 4 | Package Management | Layman | A package manager installs, upgrades, removes packages and solves the dependencies [2] | "A package manager installs, upgrades, and removes packages and solves the dependencies [2]." | PASS | - |
| 5 | Package Management | Layman | Each family has a low-level tool (single package files) and a high-level tool | "Each family has a low-level tool and a high-level tool. The low-level tool works on single package files." | PASS | - |
| 6 | Package Management | Layman | The high-level tool also downloads packages and their dependencies from repositories [18] | "The high-level tool also downloads packages from repositories, with their dependencies. [18] [4]" | PASS (cite 18 is one of the two Technical cites) | - |
| 7 | Package Management | Layman | Debian and Ubuntu use `dpkg`, `apt`, `.deb` [7][9][18] | Table row: "`dpkg` [7] / `apt` [9] / `.deb` [18]" | PASS (each cite matches its table cell) | - |
| 8 | Package Management | Layman | RHEL and Fedora use `rpm`, `dnf`, `.rpm` [26][25] | Table row: "`rpm` [26] / `dnf` [25] / `.rpm` [26]" | PASS | - |
| 9 | Package Management | Layman | `dpkg` cannot fetch a package or its dependencies [18] | "`dpkg` cannot fetch a package or its dependencies. [18]" | PASS | - |
| 10 | Package Management | Layman | Use the high-level tool for daily work so you do not list dependencies yourself | "Do daily work with the high-level tool, so that you do not list the dependencies yourself." | PASS | - |
| 11 | Package Management | Layman | `apt-cache depends` shows what a package needs [11] | "`apt-cache depends` shows what a package needs. [11]" | PASS | - |
| 12 | Package Management | Layman | `dpkg-query -W` shows the installed version [8] | "`dpkg-query -W` shows the installed version. [8]" | PASS | - |
| 13 | Package Management | Layman | Tutorial's own advice: put the package manager and package versions in each test report | "Tutorial's own advice: put the package manager and the package versions in each test report." | PASS | - |
| 14 | Package Management | Layman | A failure on one runner often comes from another version of a dependency | "A failure on one runner often comes from another version of a dependency." | PASS | - |
| 15 | Package Management | Bangla | Package is an archive with program, configuration file, metadata such as version and dependency [2] | "A package is an archive with programs, configuration files, and metadata such as the version and the dependencies [2]" | PASS | OK |
| 16 | Package Management | Bangla | A dependency is another package that must be installed with it | "A dependency is another package that must be installed with it." | PASS | OK |
| 17 | Package Management | Bangla | A conflicting dependency is a package that cannot be installed with it [6] | "A conflicting dependency is a package that must not be installed with it [6]." | PASS | OK |
| 18 | Package Management | Bangla | A package manager installs, upgrades, removes packages and "solves" the dependencies [2] | "A package manager installs, upgrades, and removes packages and solves the dependencies [2]." | PASS | Note: "dependency-গুলোর সমাধান করে" is a literal "solves"; the term "resolve" is the usual one (see language notes) |
| 19 | Package Management | Bangla | Each family has a low-level tool and a high-level tool; the low-level tool works on one package file at a time | "Each family has a low-level tool and a high-level tool. The low-level tool works on single package files." | PASS | OK |
| 20 | Package Management | Bangla | The high-level tool also downloads packages and their dependencies from a repository [18] | "The high-level tool also downloads packages from repositories, with their dependencies. [18] [4]" | PASS | OK |
| 21 | Package Management | Bangla | Debian and Ubuntu use `dpkg`, `apt`, `.deb` [7][9][18] | Table row: "`dpkg` [7] / `apt` [9] / `.deb` [18]" | PASS | OK |
| 22 | Package Management | Bangla | RHEL and Fedora use `rpm`, `dnf`, `.rpm` [26][25] | Table row: "`rpm` [26] / `dnf` [25] / `.rpm` [26]" | PASS | OK |
| 23 | Package Management | Bangla | `dpkg` cannot "bring" (fetch) a package or its dependencies [18] | "`dpkg` cannot fetch a package or its dependencies. [18]" | PASS | Note: "আনতে পারে না" is vague; "download করতে পারে না" is clearer (see language notes) |
| 24 | Package Management | Bangla | So use the high-level tool for daily work so you do not list the dependencies yourself | "Do daily work with the high-level tool, so that you do not list the dependencies yourself." | PASS | OK |
| 25 | Package Management | Bangla | `apt-cache depends` shows what a package needs [11] | "`apt-cache depends` shows what a package needs. [11]" | PASS | OK |
| 26 | Package Management | Bangla | `dpkg-query -W` shows the installed version [8] | "`dpkg-query -W` shows the installed version. [8]" | PASS | OK |
| 27 | Package Management | Bangla | Tutorial's own advice: put the package manager and package version in each test report | "Tutorial's own advice: put the package manager and the package versions in each test report." | PASS | OK |
| 28 | Package Management | Bangla | A failure on one runner often comes from another version of a dependency | "A failure on one runner often comes from another version of a dependency." | PASS | OK |
| 29 | Package Repositories | Layman | A repository is a server that holds packages and their metadata [3] | "A repository is a server that holds packages and their metadata. [3]" | PASS | - |
| 30 | Package Repositories | Layman | A mirror is a copy of a repository on another server | "A mirror is a copy of a repository on another server." | PASS | - |
| 31 | Package Repositories | Layman | Debian and Ubuntu read `/etc/apt/sources.list` and the files in `/etc/apt/sources.list.d/` | "Debian and Ubuntu read `/etc/apt/sources.list` and the files in `/etc/apt/sources.list.d/`." | PASS | - |
| 32 | Package Repositories | Layman | In current APT the one-line `.list` format is deprecated | "In current APT, the one-line `.list` format is deprecated." | PASS | - |
| 33 | Package Repositories | Layman | The deb822 `.sources` format uses `Field: value` stanzas [14] | "The deb822 `.sources` format uses `Field: value` stanzas, with fields such as `Types` and `URIs`. [14]" | PASS (fields omitted) | - |
| 34 | Package Repositories | Layman | RHEL and Fedora use `*.repo` files in `/etc/yum.repos.d` | "RHEL and Fedora use `*.repo` files in `/etc/yum.repos.d`." | PASS | - |
| 35 | Package Repositories | Layman | The DNF default of `gpgcheck` is off, so set it [22] | "The DNF default of `gpgcheck` is off, so set it. [22]" | PASS | - |
| 36 | Package Repositories | Layman | A GPG signature proves who published a file | "A GPG signature proves who published a file." | PASS | - |
| 37 | Package Repositories | Layman | APT checks the signature of the `Release` file, which lists the checksums of the repository files [13] | "APT checks the signature of the `Release` file, which lists the checksums of the repository files. [13]" | PASS | - |
| 38 | Package Repositories | Layman | `Signed-By` limits a repository to the keys that you name [14] | "`Signed-By` limits a repository to the keys that you name. [14]" | PASS | - |
| 39 | Package Repositories | Layman | A PPA is an apt repository of one user or team, hosted by Launchpad [20] | "A PPA is an apt repository of one user or team, hosted by Launchpad. [20]" | PASS | - |
| 40 | Package Repositories | Layman | Be careful with a new repository or key | Danger callout title: "A new repository or key can run code as root" | PASS (restates the title as advice; no new fact) | - |
| 41 | Package Repositories | Layman | A third-party package runs its install-time scripts as root [17] | "A third-party package runs maintainer scripts, its install-time scripts, as root. [17]" | PASS | - |
| 42 | Package Repositories | Layman | Check the key fingerprint with the publisher | "Check the key fingerprint with the publisher." | PASS | - |
| 43 | Package Repositories | Layman | Keep the key in `/etc/apt/keyrings`, use `Signed-By`, not the deprecated `apt-key add` [14][15] | "Keep the key in `/etc/apt/keyrings` and use `Signed-By`, not the deprecated `apt-key add`. [14] [15]" | PASS | - |
| 44 | Package Repositories | Layman | Never pipe `curl` into `sudo sh` | "Never pipe `curl` into `sudo sh`." | PASS | - |
| 45 | Package Repositories | Bangla | A repository is a server that holds packages and their metadata [3] | "A repository is a server that holds packages and their metadata. [3]" | PASS | OK |
| 46 | Package Repositories | Bangla | A mirror is a copy of a repository kept on another server | "A mirror is a copy of a repository on another server." | PASS | OK |
| 47 | Package Repositories | Bangla | Debian and Ubuntu read the files `/etc/apt/sources.list` and `/etc/apt/sources.list.d/` | "Debian and Ubuntu read `/etc/apt/sources.list` and the files in `/etc/apt/sources.list.d/`." | PASS | OK |
| 48 | Package Repositories | Bangla | In current APT the one-line `.list` format is deprecated | "In current APT, the one-line `.list` format is deprecated." | PASS | OK |
| 49 | Package Repositories | Bangla | The deb822 `.sources` format uses `Field: value` stanzas [14] | "The deb822 `.sources` format uses `Field: value` stanzas ... [14]" | PASS | OK |
| 50 | Package Repositories | Bangla | RHEL and Fedora use `*.repo` files of `/etc/yum.repos.d` | "RHEL and Fedora use `*.repo` files in `/etc/yum.repos.d`." | PASS | OK |
| 51 | Package Repositories | Bangla | In DNF the default of `gpgcheck` is off, so set it [22] | "The DNF default of `gpgcheck` is off, so set it. [22]" | PASS | OK |
| 52 | Package Repositories | Bangla | A GPG signature proves who published a file | "A GPG signature proves who published a file." | PASS | OK |
| 53 | Package Repositories | Bangla | APT checks the signature of the `Release` file; it lists the checksums of the repository files [13] | "APT checks the signature of the `Release` file, which lists the checksums of the repository files. [13]" | PASS | OK |
| 54 | Package Repositories | Bangla | `Signed-By` limits a repository to only the keys you name [14] | "`Signed-By` limits a repository to the keys that you name. [14]" | PASS | OK |
| 55 | Package Repositories | Bangla | A PPA is an apt repository of one user or one team, hosted by Launchpad [20] | "A PPA is an apt repository of one user or team, hosted by Launchpad. [20]" | PASS | OK |
| 56 | Package Repositories | Bangla | Be careful when you add a new repository or key | Danger callout title: "A new repository or key can run code as root" | PASS | OK |
| 57 | Package Repositories | Bangla | A third-party package runs its install-time script as root [17] | "A third-party package runs maintainer scripts, its install-time scripts, as root. [17]" | PASS | OK |
| 58 | Package Repositories | Bangla | Match the key fingerprint with the publisher | "Check the key fingerprint with the publisher." | PASS | OK |
| 59 | Package Repositories | Bangla | Keep the key in `/etc/apt/keyrings`, use `Signed-By`, not the deprecated `apt-key add` [14][15] | "Keep the key in `/etc/apt/keyrings` and use `Signed-By`, not the deprecated `apt-key add`. [14] [15]" | PASS | OK |
| 60 | Package Repositories | Bangla | Never pipe `curl` into `sudo sh` | "Never pipe `curl` into `sudo sh`." | PASS | OK |
| 61 | Package Repositories | Bangla | Tutorial's own advice: log `sources.list` and `sources.list.d` in each test run | "Tutorial's own advice: log `sources.list` and `sources.list.d` in each test run." | PASS | OK |
| 62 | Package Repositories | Bangla | Extra repositories explain package differences | "Extra repositories explain package differences." | PASS | OK |
| 63 | Finding and Installing Packages | Layman | APT searches a local index; `apt update` refreshes it [10] | "APT searches a local index, which `apt update` refreshes. [10]" | PASS | - |
| 64 | Finding and Installing Packages | Layman | `apt search` looks in package names and descriptions [11] | "`apt search` looks in package names and descriptions. [11]" | PASS | - |
| 65 | Finding and Installing Packages | Layman | `apt show` prints the dependencies, sizes, and sources [9] | "`apt show` prints dependencies, sizes, and sources. [9]" | PASS | - |
| 66 | Finding and Installing Packages | Layman | `apt install` also installs the dependencies [10] | "`apt install` also installs the dependencies. [10]" | PASS | - |
| 67 | Finding and Installing Packages | Layman | `apt-file search` finds the package that contains a file; it is a separate package; run `apt-file update` first [16] | "`apt-file search` finds the package that contains a file. It is a separate package, and `apt-file update` must run first. [16]" | PASS | - |
| 68 | Finding and Installing Packages | Layman | DNF has `dnf search`, `dnf info`, `dnf install` | "DNF has `dnf search`, `dnf info`, and `dnf install`. [21]" | PASS | - |
| 69 | Finding and Installing Packages | Layman | `dnf provides /path/to/file` finds the package that holds a file, installed or not [21] | "`dnf provides /path/to/file` finds the package that holds a file, installed or not. [21]" | PASS | - |
| 70 | Finding and Installing Packages | Layman | To pin a version write `apt install pkg=version` [9] | "To pin a version, write `apt install pkg=version`, or `pkg/release` for a release. [9]" | PASS (`pkg/release` omitted) | - |
| 71 | Finding and Installing Packages | Layman | With DNF add the version to the name, as in `dnf install tito-0.5.6-1.fc22` [21] | "With DNF, add it to the name, as in `dnf install tito-0.5.6-1.fc22`. [21]" | PASS | - |
| 72 | Finding and Installing Packages | Layman | `apt` is made for people and its behavior can change between versions | "`apt` is made for people, and its behavior may change between versions." | PASS | - |
| 73 | Finding and Installing Packages | Layman | Scripts should call `apt-get` [9] | "Scripts should call `apt-get`. [9] [18]" | PASS | - |
| 74 | Finding and Installing Packages | Layman | An install changes the system and a package script runs as root [17] | "`sudo apt install jq` and `sudo dnf install jq` change the system. A package script runs as root. [17]" | PASS | - |
| 75 | Finding and Installing Packages | Layman | Simulate first, for example with `apt-get -s install jq` [10] | "Simulate first, as above. [10]" (above: `apt-get -s install jq`, "-s: simulate only") | PASS | - |
| 76 | Finding and Installing Packages | Layman | Install only from repositories that you trust | "Install only from repositories that you trust." | PASS | - |
| 77 | Finding and Installing Packages | Bangla | APT searches a local index; `apt update` refreshes it [10] | "APT searches a local index, which `apt update` refreshes. [10]" | PASS | OK |
| 78 | Finding and Installing Packages | Bangla | `apt search` looks in package name and description [11] | "`apt search` looks in package names and descriptions. [11]" | PASS | OK |
| 79 | Finding and Installing Packages | Bangla | `apt show` shows dependency, size, source [9] | "`apt show` prints dependencies, sizes, and sources. [9]" | PASS | OK |
| 80 | Finding and Installing Packages | Bangla | `apt install` also installs the dependencies [10] | "`apt install` also installs the dependencies. [10]" | PASS | OK |
| 81 | Finding and Installing Packages | Bangla | To find which package has a file use `apt-file search`; it is a separate package; run `apt-file update` first [16] | "`apt-file search` finds the package that contains a file. It is a separate package, and `apt-file update` must run first. [16]" | PASS | OK |
| 82 | Finding and Installing Packages | Bangla | DNF has `dnf search`, `dnf info`, `dnf install` | "DNF has `dnf search`, `dnf info`, and `dnf install`. [21]" | PASS | OK |
| 83 | Finding and Installing Packages | Bangla | `dnf search` matches names and summaries and ignores upper/lower case | "`dnf search` matches names and summaries, and ignores case. [21]" | PASS (next sentence carries cite 21, the same one as Technical) | OK |
| 84 | Finding and Installing Packages | Bangla | `dnf provides /path/to/file` finds which package has the file, installed or not [21] | "`dnf provides /path/to/file` finds the package that holds a file, installed or not. [21]" | PASS | OK |
| 85 | Finding and Installing Packages | Bangla | To pin a version write `apt install pkg=version` [9] | "To pin a version, write `apt install pkg=version`, or `pkg/release` for a release. [9]" | PASS | OK |
| 86 | Finding and Installing Packages | Bangla | With DNF add the version to the name, as in `dnf install tito-0.5.6-1.fc22` [21] | "With DNF, add it to the name, as in `dnf install tito-0.5.6-1.fc22`. [21]" | PASS | OK |
| 87 | Finding and Installing Packages | Bangla | `apt` is made for people; its behavior may change when the version changes | "`apt` is made for people, and its behavior may change between versions." | PASS | OK |
| 88 | Finding and Installing Packages | Bangla | So scripts should use `apt-get` [9][18] | "Scripts should call `apt-get`. [9] [18]" | PASS | OK |
| 89 | Finding and Installing Packages | Bangla | An install changes the system and the package script runs as root [17] | "`sudo apt install jq` and `sudo dnf install jq` change the system. A package script runs as root. [17]" | PASS | Note: "Install system বদলে দেয়" uses "Install" as a noun; see language notes |
| 90 | Finding and Installing Packages | Bangla | Simulate first, for example with `apt-get -s install jq` [10] | "Simulate first, as above. [10]" | PASS | OK |
| 91 | Finding and Installing Packages | Bangla | Install only from a repository you trust | "Install only from repositories that you trust." | PASS | OK |
| 92 | Installing, Removing, and Upgrading Packages | Layman | Update and upgrade are two steps | "Update and upgrade are two steps." | PASS | - |
| 93 | Installing, Removing, and Upgrading Packages | Layman | `apt update` only refreshes the package index [10] | "`apt update` only refreshes the package index. [10]" | PASS | - |
| 94 | Installing, Removing, and Upgrading Packages | Layman | `apt upgrade` installs newer versions but never removes a package | "`apt upgrade` installs newer versions but never removes a package. [9]" | PASS (cite 9 follows the next sentence; same source) | - |
| 95 | Installing, Removing, and Upgrading Packages | Layman | `apt full-upgrade` can remove packages [9] | "`apt full-upgrade` may remove packages. [9]" | PASS | - |
| 96 | Installing, Removing, and Upgrading Packages | Layman | `dnf upgrade` updates each package to its latest version | "`dnf upgrade` updates each package to its latest version. [21]" | PASS | - |
| 97 | Installing, Removing, and Upgrading Packages | Layman | In DNF 4, `dnf check-update` returns exit status 100 if upgrades exist [21] | "In DNF 4, `dnf check-update` returns exit status 100 if upgrades exist. [21]" | PASS | - |
| 98 | Installing, Removing, and Upgrading Packages | Layman | DNF 5 names this check `dnf check-upgrade` [37] | "DNF 5 names the check `dnf check-upgrade`. [37]" | PASS | - |
| 99 | Installing, Removing, and Upgrading Packages | Layman | `remove` keeps the configuration files | "`remove` keeps the configuration files." | PASS | - |
| 100 | Installing, Removing, and Upgrading Packages | Layman | `purge` deletes them, but not your home data [9] | "`purge` deletes them but not your home data. [9]" | PASS | - |
| 101 | Installing, Removing, and Upgrading Packages | Layman | `autoremove` deletes dependencies that nobody needs now | "`autoremove` deletes dependencies that nobody needs now." | PASS | - |
| 102 | Installing, Removing, and Upgrading Packages | Layman | Run `apt-get -s autoremove` first to see the list [17] | "List them first with `apt-get -s autoremove`. [17]" | PASS | - |
| 103 | Installing, Removing, and Upgrading Packages | Layman | `dnf remove` also removes the packages that depend on the target [21] | "`dnf remove` also removes the packages that depend on the target. [21]" | PASS | - |
| 104 | Installing, Removing, and Upgrading Packages | Layman | `apt-mark hold` stops the automatic install, upgrade, and removal of one package [12] | "`apt-mark hold` stops the automatic install, upgrade, and removal of one package. [12]" | PASS | - |
| 105 | Installing, Removing, and Upgrading Packages | Layman | DNF has the versionlock plugin [23] | "DNF has the versionlock plugin. [23]" | PASS | - |
| 106 | Installing, Removing, and Upgrading Packages | Layman | On Ubuntu Server, `unattended-upgrades` installs security updates by default | "On Ubuntu Server, the default `unattended-upgrades` package installs security updates. [19]" | PASS (the two readings agree in effect; S19 supports both. See language notes) | Note: "by default" can read as a setting; Technical says the package is the default one |
| 107 | Installing, Removing, and Upgrading Packages | Layman | Reboot is off by default [19] | "Reboot is off by default. [19]" | PASS | - |
| 108 | Installing, Removing, and Upgrading Packages | Layman | Tutorial's own advice: on a CI runner run `apt-get update`, then `apt-get install -y` with named packages and fixed versions | "Tutorial's own advice: on a CI runner, run `apt-get update`, then `apt-get install -y` with named packages and fixed versions." | PASS | - |
| 109 | Installing, Removing, and Upgrading Packages | Layman | Turn off automatic upgrades during a test, or log them [19] | "Automatic upgrades can change a package during a test run. Turn them off or log them. [19]" | PASS | - |
| 110 | Installing, Removing, and Upgrading Packages | Bangla | Update and upgrade are two separate steps | "Update and upgrade are two steps." | PASS | OK |
| 111 | Installing, Removing, and Upgrading Packages | Bangla | `apt update` only refreshes the package index [10] | "`apt update` only refreshes the package index. [10]" | PASS | OK |
| 112 | Installing, Removing, and Upgrading Packages | Bangla | `apt upgrade` installs new versions but never removes any package | "`apt upgrade` installs newer versions but never removes a package. [9]" | PASS | OK |
| 113 | Installing, Removing, and Upgrading Packages | Bangla | `apt full-upgrade` can remove packages [9] | "`apt full-upgrade` may remove packages. [9]" | PASS | OK |
| 114 | Installing, Removing, and Upgrading Packages | Bangla | `dnf upgrade` updates each package to its latest version | "`dnf upgrade` updates each package to its latest version. [21]" | PASS | OK |
| 115 | Installing, Removing, and Upgrading Packages | Bangla | In DNF 4, `dnf check-update` returns exit status 100 if upgrades exist [21] | "In DNF 4, `dnf check-update` returns exit status 100 if upgrades exist. [21]" | PASS | OK |
| 116 | Installing, Removing, and Upgrading Packages | Bangla | An exit status is the number that a command returns | "An exit status is the number that a command returns." | PASS | OK |
| 117 | Installing, Removing, and Upgrading Packages | Bangla | In DNF 5 the name of this check is `dnf check-upgrade` [37] | "DNF 5 names the check `dnf check-upgrade`. [37]" | PASS | OK |
| 118 | Installing, Removing, and Upgrading Packages | Bangla | `remove` keeps the configuration files | "`remove` keeps the configuration files." | PASS | OK |
| 119 | Installing, Removing, and Upgrading Packages | Bangla | `purge` deletes them, but not your home data [9] | "`purge` deletes them but not your home data. [9]" | PASS | OK |
| 120 | Installing, Removing, and Upgrading Packages | Bangla | `autoremove` deletes dependencies that nobody needs now | "`autoremove` deletes dependencies that nobody needs now." | PASS | OK |
| 121 | Installing, Removing, and Upgrading Packages | Bangla | First see the list with `apt-get -s autoremove` [17] | "List them first with `apt-get -s autoremove`. [17]" | PASS | OK |
| 122 | Installing, Removing, and Upgrading Packages | Bangla | `dnf remove` also removes the packages that depend on the target [21] | "`dnf remove` also removes the packages that depend on the target. [21]" | PASS | OK |
| 123 | Installing, Removing, and Upgrading Packages | Bangla | `apt-mark hold` stops the automatic install, upgrade, and removal of one package [12] | "`apt-mark hold` stops the automatic install, upgrade, and removal of one package. [12]" | PASS | OK |
| 124 | Installing, Removing, and Upgrading Packages | Bangla | DNF has the versionlock plugin [23] | "DNF has the versionlock plugin. [23]" | PASS | OK |
| 125 | Installing, Removing, and Upgrading Packages | Bangla | On Ubuntu Server the default `unattended-upgrades` package installs security updates, and reboot is off by default [19] | "On Ubuntu Server, the default `unattended-upgrades` package installs security updates. Reboot is off by default. [19]" | PASS | OK |
| 126 | Installing, Removing, and Upgrading Packages | Bangla | `unattended-upgrade --dry-run` only simulates a run [27] | "`unattended-upgrade --dry-run` only simulates a run. [27]" | PASS | OK |
| 127 | Installing, Removing, and Upgrading Packages | Bangla | Tutorial's own advice: on a CI runner run `apt-get update`, then `apt-get install -y` with named package names and fixed versions | "Tutorial's own advice: on a CI runner, run `apt-get update`, then `apt-get install -y` with named packages and fixed versions." | PASS | OK |
| 128 | Installing, Removing, and Upgrading Packages | Bangla | Automatic upgrades can change a package during a test run, so turn them off or log them [19] | "Automatic upgrades can change a package during a test run. Turn them off or log them. [19]" | PASS | OK |
| 129 | Listing Installed Packages | Layman | `dpkg -l` lists the packages | "`dpkg -l` lists packages." | PASS | - |
| 130 | Listing Installed Packages | Layman | The first two letters `ii` mean wanted (install) and installed [8] | "The first two letters, `ii`, mean wanted (install) and installed. ... [8]" | PASS | - |
| 131 | Listing Installed Packages | Layman | `apt list --installed` also lists them [9] | "`apt list --installed` lists them too. [9]" | PASS | - |
| 132 | Listing Installed Packages | Layman | On RHEL and Fedora use `rpm -qa` or `dnf list --installed` [26][21] | "On RHEL and Fedora, use `rpm -qa` or `dnf list --installed`. [26] [21]" | PASS | - |
| 133 | Listing Installed Packages | Layman | To find the package that owns a file use `dpkg -S` or `rpm -qf` [8][26] | "To find the owner of a file, use `dpkg -S` or `rpm -qf`. [8] [26]" | PASS | - |
| 134 | Listing Installed Packages | Layman | `dpkg -S` cannot see files that install-time scripts create [8] | "`dpkg -S` cannot see files that maintainer scripts (install-time scripts) create. [8]" | PASS | - |
| 135 | Listing Installed Packages | Layman | `dpkg -L` lists the files of a package [7] | "`dpkg -L` lists the files of a package. [7]" | PASS | - |
| 136 | Listing Installed Packages | Layman | APT marks a package manual if you asked for it, automatic if it came as a dependency | "APT marks a package as manual if you asked for it and as automatic if it came as a dependency." | PASS | - |
| 137 | Listing Installed Packages | Layman | `apt-mark showmanual` lists the manual packages [12] | "`apt-mark showmanual` lists the manual ones. [12]" | PASS | - |
| 138 | Listing Installed Packages | Layman | In scripts use `dpkg-query -W -f`, which sets the output format; the `dpkg -l` layout is for people [8] | "For scripts, use `dpkg-query -W -f`, which sets the output format. The `dpkg -l` layout is for people. [8]" | PASS | - |
| 139 | Listing Installed Packages | Layman | Tutorial's own advice: save the package list with each test run or image build | "Tutorial's own advice: save the package list as an artifact of every test run or image build." | PASS | - |
| 140 | Listing Installed Packages | Layman | Compare two lists with `diff` to see why a test passes on one machine and fails on another | "Compare two lists with `diff` to explain why a test passes on one machine and fails on another." | PASS | - |
| 141 | Listing Installed Packages | Bangla | `dpkg -l` lists the packages | "`dpkg -l` lists packages." | PASS | OK |
| 142 | Listing Installed Packages | Bangla | The first two letters `ii` mean the package is wanted (install) and installed [8] | "The first two letters, `ii`, mean wanted (install) and installed. ... [8]" | PASS | OK |
| 143 | Listing Installed Packages | Bangla | `apt list --installed` also lists them [9] | "`apt list --installed` lists them too. [9]" | PASS | OK |
| 144 | Listing Installed Packages | Bangla | On RHEL and Fedora use `rpm -qa` or `dnf list --installed` [26][21] | "On RHEL and Fedora, use `rpm -qa` or `dnf list --installed`. [26] [21]" | PASS | OK |
| 145 | Listing Installed Packages | Bangla | To know which package a file belongs to use `dpkg -S` or `rpm -qf` [8][26] | "To find the owner of a file, use `dpkg -S` or `rpm -qf`. [8] [26]" | PASS | OK |
| 146 | Listing Installed Packages | Bangla | `dpkg -S` cannot see files that a maintainer script (install-time script) creates [8] | "`dpkg -S` cannot see files that maintainer scripts (install-time scripts) create. [8]" | PASS | OK |
| 147 | Listing Installed Packages | Bangla | `dpkg -L` lists the files of a package [7] | "`dpkg -L` lists the files of a package. [7]" | PASS | OK |
| 148 | Listing Installed Packages | Bangla | "If you want" (you yourself), APT marks a package manual, and automatic if it came as a dependency | "APT marks a package as manual if you asked for it and as automatic if it came as a dependency." | PASS (meaning kept: contrast manual vs dependency) | Note: "আপনি নিজে চাইলে" reads as a present wish, not "you asked for it"; see language notes |
| 149 | Listing Installed Packages | Bangla | `apt-mark showmanual` lists the manual packages [12] | "`apt-mark showmanual` lists the manual ones. [12]" | PASS | OK |
| 150 | Listing Installed Packages | Bangla | For scripts use `dpkg-query -W -f`, which sets the output format [8] | "For scripts, use `dpkg-query -W -f`, which sets the output format. [8]" | PASS | OK |
| 151 | Listing Installed Packages | Bangla | The `dpkg -l` layout is for people to read [8] | "The `dpkg -l` layout is for people. [8]" | PASS | OK |
| 152 | Listing Installed Packages | Bangla | Tutorial's own advice: save the package list as an artifact of each test run or image build | "Tutorial's own advice: save the package list as an artifact of every test run or image build." | PASS | OK |
| 153 | Listing Installed Packages | Bangla | Compare two lists with `diff` to understand why a test passes on one machine and fails on another | "Compare two lists with `diff` to explain why a test passes on one machine and fails on another." | PASS | OK |
| 154 | Snap | Layman | A snap is a self-contained app package | "A snap is a self-contained app package." | PASS | - |
| 155 | Snap | Layman | It bundles the app with its libraries [5] | "It bundles the app with its libraries. [5]" | PASS | - |
| 156 | Snap | Layman | The `snapd` daemon is a background service that installs, confines, and updates snaps [34] | "The `snapd` daemon, a background service, installs, confines, and updates snaps. [34]" | PASS | - |
| 157 | Snap | Layman | It must run before you can install a snap | "It must run before you can install a snap, ... [36]" | PASS | - |
| 158 | Snap | Layman | On some distributions you must install it first [36] | "... and some distributions need you to install it. [36]" | PASS | - |
| 159 | Snap | Layman | `sudo snap install` adds a snap and `sudo snap remove` deletes one [35] | "`sudo snap install` and `sudo snap remove` add and delete snaps. [35]" | PASS | - |
| 160 | Snap | Layman | A channel is `track/risk/branch` | "A channel is `track/risk/branch`, and the branch is optional." | PASS (drops "branch is optional"; an omission) | - |
| 161 | Snap | Layman | The risk levels are `stable`, `candidate`, `beta`, `edge` | "The risk levels are `stable`, `candidate`, `beta`, and `edge`." | PASS | - |
| 162 | Snap | Layman | The default is `stable` [29] | "The default is `stable`. [29]" | PASS | - |
| 163 | Snap | Layman | Confinement keeps an app apart from the system | "Confinement is the isolation of an app from the system." | PASS | - |
| 164 | Snap | Layman | A `strict` snap cannot reach files, the network, or other resources without an interface [28] | "A `strict` snap cannot reach files, network, or other resources without an interface. [28]" | PASS | - |
| 165 | Snap | Layman | A `classic` snap has full access like a normal package and needs `--classic` [28][31] | "A `classic` snap has full access, like a normal package, and needs `--classic`. [28] [31]" | PASS | - |
| 166 | Snap | Layman | By default snaps refresh four times a day | "By default, snaps refresh four times a day." | PASS | - |
| 167 | Snap | Layman | `snap refresh --hold=24h firefox` pauses one snap [30] | "`snap refresh --hold=24h firefox` pauses one snap. [30]" | PASS | - |
| 168 | Snap | Layman | `snap remove --purge` removes a snap without a snapshot of its data [35] | "`snap remove --purge` removes a snap without a snapshot of its data. [35]" | PASS | - |
| 169 | Snap | Layman | Tutorial's own advice: pin the channel with `--channel=` and hold the refresh during a test run | "Tutorial's own advice: pin the channel with `--channel=` and hold the refresh during a test run." | PASS | - |
| 170 | Snap | Bangla | A snap is a self-contained app package | "A snap is a self-contained app package." | PASS | OK |
| 171 | Snap | Bangla | It bundles the app with its libraries [5] | "It bundles the app with its libraries. [5]" | PASS | OK |
| 172 | Snap | Bangla | The `snapd` daemon is a background service that installs, confines, and updates snaps [34] | "The `snapd` daemon, a background service, installs, confines, and updates snaps. [34]" | PASS | OK |
| 173 | Snap | Bangla | `snapd` must be running before you install a snap, and on some distributions you must install it [36] | "It must run before you can install a snap, and some distributions need you to install it. [36]" | PASS | OK |
| 174 | Snap | Bangla | `sudo snap install` adds a snap and `sudo snap remove` deletes it [35] | "`sudo snap install` and `sudo snap remove` add and delete snaps. [35]" | PASS | OK |
| 175 | Snap | Bangla | A channel has the form `track/risk/branch`, and the branch is optional | "A channel is `track/risk/branch`, and the branch is optional." | PASS | OK |
| 176 | Snap | Bangla | The risk levels are `stable`, `candidate`, `beta`, `edge`; the default is `stable` [29] | "The risk levels are `stable`, `candidate`, `beta`, and `edge`. The default is `stable`. [29]" | PASS | OK |
| 177 | Snap | Bangla | Confinement means keeping an app apart from the system | "Confinement is the isolation of an app from the system." | PASS | OK |
| 178 | Snap | Bangla | A `strict` snap cannot reach files, network, or other resources without an interface [28] | "A `strict` snap cannot reach files, network, or other resources without an interface. [28]" | PASS | OK |
| 179 | Snap | Bangla | A `classic` snap gets full access like a normal package and needs `--classic` [28][31] | "A `classic` snap has full access, like a normal package, and needs `--classic`. [28] [31]" | PASS | OK |
| 180 | Snap | Bangla | By default snaps refresh four times a day ("দিনে চারবার") | "By default, snaps refresh four times a day." | PASS | OK |
| 181 | Snap | Bangla | `snap refresh --hold=24h firefox` holds the refresh of one snap [30] | "`snap refresh --hold=24h firefox` pauses one snap. [30]" | PASS | OK |
| 182 | Snap | Bangla | The commands are links in `/snap/bin` [33] | "The commands are links in `/snap/bin`. [33]" | PASS | OK |
| 183 | Snap | Bangla | Data is under `/var/snap` and `~/snap` [32] | "Data is under `/var/snap` and `~/snap`. [32]" | PASS | OK |
| 184 | Snap | Bangla | `snap remove --purge` removes a snap without a snapshot of its data [35] | "`snap remove --purge` removes a snap without a snapshot of its data. [35]" | PASS | OK |
| 185 | Snap | Bangla | Tutorial's own advice: pin the channel with `--channel=` and hold the refresh while a test run goes on | "Tutorial's own advice: pin the channel with `--channel=` and hold the refresh during a test run." | PASS | OK |

## Language summary

- The Bangla keeps the common technical terms in English (package, dependency, repository, mirror, index, daemon, channel, confinement, exit status, runner, and all commands, flags, and paths). Good.
- The Bangla uses the polite form (করুন, মিলিয়ে নিন, রাখুন, থাকুন). Good.
- The English-word plus Bangla-suffix joins use a hyphen everywhere (package-এর, DNF-এ, dependency-গুলো, `/etc/yum.repos.d`-এর, data-র). I found no missing hyphen.
- Language notes (none changes the meaning, so none is a FAIL):
  1. Package Management, Bangla: "dependency-গুলোর সমাধান করে" is a literal "solves". Better: "dependency-গুলো resolve করে".
  2. Package Management, Bangla: "`dpkg` কোনো package বা তার dependency আনতে পারে না". "আনতে" is vague. Better: "download করতে পারে না".
  3. Finding and Installing, Bangla: "Install system বদলে দেয়" uses "Install" as a noun. Better: "Install করলে system বদলে যায়".
  4. Listing Installed Packages, Bangla: "আপনি নিজে চাইলে APT ... manual হিসেবে mark করে" reads as a present wish. Better: "আপনি নিজে যে package install করতে বলেছেন, APT সেটিকে manual হিসেবে mark করে; dependency হিসেবে এলে automatic হিসেবে।"
  5. Installing, Removing, and Upgrading, Layman: "`unattended-upgrades` installs security updates by default" can read as a setting. Better: "the default package `unattended-upgrades` installs security updates."

Open FAILs: 0
