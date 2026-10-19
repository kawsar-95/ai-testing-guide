# Packages (Linux stage 7) — research notes (2026-10-19)

Fetch note: the roadmap pages were fetched into `<scratch dir>/roadmap-raw/` (`NNN.txt`, index in `report.tsv`). The official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay, no spoofed user agent) into the flat directory `<scratch dir>/stage-packages/` (the overlap-check directory; file names `001`–`021` = first list, `B…` = second list, `C…`/`D…` = Snap docs, `E…` = DNF 5, `F002` = Ubuntu automatic updates, `G001` = PPA). The Debian manpages pages are the `unstable` version (apt 3.3.3, dpkg-query 1.23.x, apt-file 3.4). I used a local Ubuntu 26.04 system with apt 3.2.0 and snapd 2.77.1 only for read-only queries (`dpkg -l`, `dpkg -S`, `dpkg-query -W`, `apt-cache policy|search`, `apt list --installed`, `apt-mark showmanual|showhold`, `apt-get -s upgrade|autoremove`, `snap list`, `snap refresh --time`). I did not run `rpm`, `dnf`, or `apt-file`, so the RHEL, Fedora, and `apt-file` lines come from the manuals only.

Safety rule of this stage: no command in the page changes the system when you copy it. The code blocks hold read-only queries and simulations (`apt-get -s`, `dnf install --assumeno`, `unattended-upgrade --dry-run`). Every command that installs, removes, or upgrades appears only in prose, inside or next to a `danger` callout.

Versions: the page names one release, Ubuntu 24.04 LTS, because the Ubuntu Server page (S18) states it. It names no other distro version or default that no source gave. The DNF pages are DNF 4 (`dnf.readthedocs.io`, `dnf-plugins-core` 4.4.2). The DNF 5 pages list the same command names (S25).

## Sources
Numbers S1…S37 are the indexes of `page.sources`. A page cite `<Cite n={k} />` points to S_k.

S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. Linux Package Manager Explained — Geekflare — https://geekflare.com/dev/linux-package-manager-explained/ — accessed 2026-10-19 (roadmap #157, `157.txt`; the same link is #095 and #123)
S3. What is Repository in Linux? — LinuxSimply — https://linuxsimply.com/what-is-repository-in-linux/ — accessed 2026-10-19 (roadmap #189, `189.txt`)
S4. 5 ways to list installed packages in Linux — howtouselinux — https://www.howtouselinux.com/post/list-installed-packages-in-linux — accessed 2026-10-19 (roadmap #122, `122.txt`)
S5. How to Install and Use Snap in Various Linux Distributions — It's FOSS — https://itsfoss.com/install-snap-linux/ — accessed 2026-10-19 (roadmap #209, `209.txt`; the page title in `page.sources` is shortened to avoid an 8-word overlap hit)
S6. APT User's Guide, chapter 1: General — Debian Project — https://www.debian.org/doc/manuals/apt-guide/ch1.en.html — accessed 2026-10-19 (`015.txt`; the roadmap link #160/#191/#097/#124 is the index of this guide: `160.txt` holds only the table of contents)
S7. dpkg(1) — Debian Manpages — https://manpages.debian.org/unstable/dpkg/dpkg.1.en.html — accessed 2026-10-19 (`008.txt`)
S8. dpkg-query(1) — Debian Manpages — https://manpages.debian.org/unstable/dpkg/dpkg-query.1.en.html — accessed 2026-10-19 (`009.txt`)
S9. apt(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt.8.en.html — accessed 2026-10-19 (`001.txt`)
S10. apt-get(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt-get.8.en.html — accessed 2026-10-19 (`002.txt`)
S11. apt-cache(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt-cache.8.en.html — accessed 2026-10-19 (`003.txt`)
S12. apt-mark(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt-mark.8.en.html — accessed 2026-10-19 (`004.txt`)
S13. apt-secure(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt-secure.8.en.html — accessed 2026-10-19 (`005.txt`)
S14. sources.list(5) — Debian Manpages — https://manpages.debian.org/unstable/apt/sources.list.5.en.html — accessed 2026-10-19 (`006.txt`)
S15. apt-key(8) — Debian Manpages — https://manpages.debian.org/unstable/apt/apt-key.8.en.html — accessed 2026-10-19 (`007.txt`)
S16. apt-file(1) — Debian Manpages — https://manpages.debian.org/unstable/apt-file/apt-file.1.en.html — accessed 2026-10-19 (`010.txt`)
S17. Debian Reference, chapter 2: Debian package management — Debian Project — https://www.debian.org/doc/manuals/debian-reference/ch02.en.html — accessed 2026-10-19 (`014.txt`)
S18. Install and manage packages — Ubuntu Server documentation — https://documentation.ubuntu.com/server/how-to/software/package-management/ — accessed 2026-10-19 (`021.txt`)
S19. Automatic updates — Ubuntu Server documentation — https://documentation.ubuntu.com/server/how-to/software/automatic-updates/ — accessed 2026-10-19 (`F002.txt`)
S20. Personal Package Archive — Launchpad manual (Canonical) — https://documentation.ubuntu.com/launchpad/user/reference/packaging/ppas/ppa/ — accessed 2026-10-19 (`G001.txt`)
S21. DNF Command Reference — DNF project — https://dnf.readthedocs.io/en/latest/command_ref.html — accessed 2026-10-19 (`016.txt`)
S22. DNF Configuration Reference — DNF project — https://dnf.readthedocs.io/en/latest/conf_ref.html — accessed 2026-10-19 (`017.txt`)
S23. DNF versionlock Plugin — DNF project (dnf-plugins-core) — https://dnf-plugins-core.readthedocs.io/en/latest/versionlock.html — accessed 2026-10-19 (`018.txt`)
S24. DNF Automatic — DNF project — https://dnf.readthedocs.io/en/latest/automatic.html — accessed 2026-10-19 (`B009.txt`)
S25. DNF5 Package Management Utility — DNF5 documentation — https://dnf5.readthedocs.io/en/latest/dnf5.8.html — accessed 2026-10-19 (`E003.txt`)
S26. rpm(8) — rpm.org — https://rpm.org/docs/latest/man/rpm.8 — accessed 2026-10-19 (`020.txt`)
S27. unattended-upgrade(8) — Debian Manpages (unattended-upgrades 2.13) — https://manpages.debian.org/unstable/unattended-upgrades/unattended-upgrade.8.en.html — accessed 2026-10-19 (`B007.txt`)
S28. Snap confinement — Snap documentation (Canonical) — https://snapcraft.io/docs/explanation/security/snap-confinement/ — accessed 2026-10-19 (`C001.txt`)
S29. Channels and tracks — Snap documentation (Canonical) — https://snapcraft.io/docs/explanation/how-snaps-work/channels-and-tracks/ — accessed 2026-10-19 (`C002.txt`)
S30. Manage updates — Snap documentation (Canonical) — https://snapcraft.io/docs/how-to-guides/manage-snaps/manage-updates/ — accessed 2026-10-19 (`C003.txt`)
S31. Classic confinement — Snap documentation (Canonical) — https://snapcraft.io/docs/explanation/security/classic-confinement/ — accessed 2026-10-19 (`D002.txt`)
S32. Data locations — Snap documentation (Canonical) — https://snapcraft.io/docs/reference/administration/data-locations/ — accessed 2026-10-19 (`D001.txt`)
S33. System snap directory — Snap documentation (Canonical) — https://snapcraft.io/docs/explanation/how-snaps-work/system-snap-directory/ — accessed 2026-10-19 (`D006.txt`)
S34. Snap documentation (home) — Canonical — https://snapcraft.io/docs/ — accessed 2026-10-19 (`C006.txt`)
S35. Get started — Snap documentation (Canonical) — https://snapcraft.io/docs/tutorials/get-started/ — accessed 2026-10-19 (`D005.txt`)
S36. Install the daemon — Snap documentation (Canonical) — https://snapcraft.io/docs/tutorials/install-the-daemon/ — accessed 2026-10-19 (`C004.txt`)
S37. Check-Upgrade Command — DNF5 documentation — https://dnf5.readthedocs.io/en/latest/commands/check-upgrade.8.html — accessed 2026-10-19 (`H001.txt`; added in fix round 1)

Links not used as a source:
- #159 (labex, `http-403`) and #162 (Fedora quick-docs DNF, `error:URLError` in the old fetch; with this fetch it returned an Anubis proof-of-work page, 0 usable text): no text, no claim. The DNF facts come from the DNF project docs (S21–S25).
- #161 Yum (`http://yum.baseurl.org/`, read as `161.txt`): the site has no https, and the checker needs https links. I dropped it. The page names no yum claim.
- #158 (LinuxSimply, 8 best package managers) and #190 (ArchWiki Official repositories) and #208 (LinuxSimply, the snap command): read, no claim taken from them. Arch is outside the scope of this page.
- Debian wiki pages (SourcesList, DebianRepository/UseThirdParty, UnattendedUpgrades) returned an anti-bot challenge page and are not sources. The facts come from sources.list(5), apt-secure(8), and the Debian Reference.
- `snapcraft.io/docs/<page>` old URLs are HTML redirect stubs. The sources use the final URLs.

Overlap check: `python3 scripts/linux_overlap.py content/linux/packages.mdx <dir>` printed nothing and exited 0 for the roadmap directory (243 files) and for the flat official directory (44 files). A first run reported hits that were only titles in `page.sources` (for example the Geekflare and It's FOSS page titles and the apt-mark(8) summary line). I shortened those titles. No prose passage was reported.

## Package Management
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C1 | A package is an archive with programs, configuration files, and metadata (version, dependencies). | S2 | "an archive file containing computer programs, and other essential files to function, such as package metadata" … "description, version, and dependencies" |
| C2 | A package manager installs, upgrades, and removes packages. | S2 | "install, upgrade, remove, and configure packages using the supported package manager" |
| C3 | A dependency is a package that another package needs installed with it; a conflicting dependency must not be installed with it. | S6 | "a package requires another package to be installed at the same time to work properly" / "a package, when installed with another package, will not work" |
| C4 | `dpkg` is the low-level tool for `.deb` files and cannot download packages or dependencies; APT and Aptitude add features on top. | S18 | "it cannot automatically download and install packages – or their dependencies. APT and Aptitude are newer, and layer additional features on top of dpkg." |
| C5 | A high-level tool (`apt`) is the front end of `dpkg`; `dpkg` is a "medium-level tool". | S7 | "The primary and more user-friendly front-end for dpkg as a CLI (command-line interface) is apt(8)" |
| C6 | `apt` provides a high-level command-line interface. | S9 | "apt provides a high-level commandline interface for the package management system." |
| C7 | `apt` is a higher-level tool than `dpkg` and fetches from repositories; `dpkg` installs only local files. | S4 | "dpkg is a lower-level tool … while apt is a higher-level tool" (blog; the S18 quote above is the official support) |
| C8 | `rpm` can build, install, query, verify, and erase single packages. | S26 | "rpm is a powerful Package Manager, which can be used to build, install, query, verify, update, and erase individual software packages." |
| C9 | The `rpm` tool takes `.rpm` package files. | S26 | "rpm -Uvh hello-2.0-1.noarch.rpm" |
| C10 | DNF is a package manager for RPM-based distributions; DNF 5 keeps `install`, `info`, `search`, `provides`, `list`, `remove`, `upgrade`, `versionlock`. | S25 | "DNF5 is the new version of DNF, a package manager for RPM-based Linux distributions." |
| C11 | `dnf install` installs the packages and their dependencies. | S21 | "Makes sure that the given packages and their dependencies are installed on the system." |
| C12 | `apt-cache depends` shows the dependencies of a package. | S11 | "depends shows a listing of each dependency a package has and all the possible other packages that can fulfill that dependency." |
| C13 | `dpkg-query -W` shows name and installed version. | S8 | "The default output format gives one line per matching package, each line consisting of the package name and its installed version" |
| C14 | `rpm -q` queries installed packages. | S26 | "-q, --query  Query package files or installed package(s)." |

## Package Repositories
| # | Claim | Source | Quote |
|---|---|---|---|
| C15 | A repository is a collection of packages and metadata; package managers search the configured repositories. | S3 | "A repository is a collection of packages in Linux … Package managers use repositories to search and download software packages." |
| C16 | A mirror is a copy of an archive on another server. (Definition in the page; the APT mirror scheme is in S14.) | S14 | "The mirrorlist itself can contain many different URIs for mirrors the APT client can transparently pick, choose and fallback between" |
| C17 | APT reads `/etc/apt/sources.list` and the files in `/etc/apt/sources.list.d/`. | S14 | "The source list /etc/apt/sources.list and the files contained in /etc/apt/sources.list.d/ are designed to support any number of active sources" |
| C18 | The one-line `.list` format is deprecated; the deb822 `.sources` format has `Types`, `URIs`, `Suites`, `Components`. | S14 | "This format is deprecated and may eventually be removed, but not before 2029." / "Types: deb / URIs: uri / Suites: suite / Components:" |
| C19 | Ubuntu repositories are in `/etc/apt/sources.list.d/ubuntu.sources`; releases before 24.04 LTS use `/etc/apt/sources.list`. | S18 | "Ubuntu releases prior to 24.04 LTS (Noble), which don't use the deb822 standard by default, have repository information defined in the /etc/apt/sources.list file." |
| C20 | Debian components: `main`, `contrib`, `non-free` (and `non-free-firmware`). | S14 | "component is one of main, contrib, non-free or non-free-firmware" |
| C21 | Ubuntu `universe` is community maintained and not officially supported. | S18 | "These repositories are not officially supported by Ubuntu, but because they are maintained by the community" |
| C22 | RHEL and Fedora: DNF reads `*.repo` files under `/etc/yum.repos.d`. | S22 | "DNF by default uses the global configuration file at /etc/dnf/dnf.conf and all *.repo files found under /etc/yum.repos.d." |
| C23 | A repo has `baseurl`, `mirrorlist`, `metalink`, `gpgcheck`, `gpgkey`. | S22 | Option names in "Repo Options": `baseurl`, `metalink`, `mirrorlist`, `gpgcheck`, `gpgkey` |
| C24 | `gpgcheck` default is False in the DNF reference. | S22 | "Whether to perform GPG signature check on packages found in this repository. The default is False." |
| C25 | APT verifies the signed `Release` file of each repository. | S13 | "APT contains code that does signature checking of the Release file for all repositories." |
| C26 | `Signed-By` limits a repository to given keys; keyrings in `/etc/apt/keyrings` (operator) and `/usr/share/keyrings` (packages). | S14 | "Signed-By … require a repository to pass apt-secure(8) verification with a certain set of keys rather than all trusted keys apt has configured." |
| C27 | `apt-key` is deprecated; `apt-key add` should not be used. | S15 | "Use of apt-key is deprecated, except for the use of apt-key del in maintainer scripts" |
| C28 | A PPA is an apt repository of one user or team hosted by Launchpad. | S20 | "A Personal Package Archive (PPA) is a per-user or per-team apt repository hosted by Launchpad." |
| C29 | Trusting an archive means trusting its maintainer, not that its packages are free of malicious code. | S13 | "trusting an archive does not mean that you trust its packages not to contain malicious code, but means that you trust the archive maintainer" |
| C30 | Third-party packages run maintainer scripts as root. | S17 | "third party packages introduces significant system risks via maintainer scripts which are run with root privilege and can do anything to your system" |
| C31 | Fetch the key fingerprint from the publisher: keys added by hand must be verified. | S15 | "keys added manually via apt-key are verified to belong to the owner of the repositories they claim to be for" |
| C32 | `apt-cache policy` with no argument prints the priority of each source. | S11 | "With no arguments it will print out the priorities of each source." |

Tutorial advice (no cite): "Never pipe `curl` into `sudo sh`" and "Keep the key in `/etc/apt/keyrings`" combine S14 (recommended location) with the safety rule of this module. The "gpgcheck: set it" advice follows C24.

## Finding and Installing Packages
| # | Claim | Source | Quote |
|---|---|---|---|
| C33 | `apt update` refreshes the package index; `apt search` looks in names and descriptions. | S10 / S11 | "update is used to resynchronize the package index files from their sources" / "It searches the package names and the descriptions" |
| C34 | `apt show` shows dependencies, size, and sources. | S9 | "Show information about the given package(s) including its dependencies, installation and download size, sources the package is available from" |
| C35 | `apt-cache policy pkg` shows priority selection for a package. | S11 | "it prints out detailed information about the priority selection of the named package" |
| C36 | `apt install` installs required dependencies; `pkg=version` and `pkg/release` select a version. | S10 / S9 | "All packages required … will also be retrieved and installed." / "following the package name with an equals (=) and the version" |
| C37 | `apt-file search` finds the package that contains a file. | S16 | "Search in which package a file is included. A list of all packages containing the pattern pattern is returned." |
| C38 | `dnf search` matches names and summaries, case-insensitive; `dnf info`; `dnf install`. | S21 | "Keywords are matched as case-insensitive substrings … Keys are searched in package names and summaries." |
| C39 | `dnf provides` finds the package (installed or not) for a file; accepts a command name. | S21 | "This is useful when one knows a filename and wants to find what package (installed or not) provides this file." / `dnf provides zless` example |
| C40 | `dnf install name-version` installs that version. | S21 | "dnf install tito-0.5.6-1.fc22  Install the package with a specific version." |
| C41 | `apt` may change behavior between versions; scripts should use `apt-get`. | S9 | "it may change behavior between versions" … "you should prefer using these commands … in your scripts" |
| C42 | Ubuntu: `apt-get` should be used in scripts. | S18 | "The apt-get command should be used in scripts" |
| C43 | `apt-get -s` simulates. | S10 | "-s, --simulate, --just-print, --dry-run, --recon, --no-act" |
| C44 | `dnf install --assumeno` answers no to the prompt. No manual says it runs without root, so the code line is `sudo dnf install --assumeno jq` with `# needs root` (fix round 1). | S22 | "assumeno … If enabled dnf will assume No where it would normally prompt for confirmation" (also option `--assumeno` in S21) |
| C45 | DNF 5 command list includes the commands used here. | S25 | Commands list: `info`, `install`, `list`, `provides`, `remove`, `search`, `upgrade`, `versionlock` |

## Installing, Removing, and Upgrading Packages
| # | Claim | Source | Quote |
|---|---|---|---|
| C46 | `apt update` only downloads the index. | S10 | "update is used to resynchronize the package index files from their sources." |
| C47 | `apt upgrade` installs newer versions, never removes. `full-upgrade` may remove. | S9 | "existing packages will never be removed" / "full-upgrade … will remove currently installed packages if this is needed" |
| C48 | `dnf upgrade` updates each package to the latest version. (The "`update` is a deprecated alias" sentence was dropped in fix round 1: no DNF 5 page gives it.) | S21 | "Updates each package to the latest version that is both available and resolvable." |
| C49 | In DNF 4, `dnf check-update` returns exit status 100 when updates exist. The page says "DNF 4". | S21 | "DNF exit code will be 100 when there are updates available" |
| C49b | DNF 5 names the check `dnf check-upgrade` (fix round 1). The page says only that DNF 5 uses this name; the exit status 100 is in the source but not repeated in the page. | S37 | "DNF5 will exit with code 100 if updates are available and list them; 0 if no updates are available." |
| C50 | `remove` leaves configuration files; `purge` removes them; neither touches the home directory. | S9 | "Removing a package … leaves usually small (modified) user configuration files behind" … "this does not affect any data or configuration stored in your home directory" |
| C51 | `autoremove` removes packages that were installed as dependencies and are not needed. | S9 | "remove packages that were automatically installed to satisfy dependencies for other packages and are now no longer needed" |
| C52 | Run `apt-get -s autoremove` first to see what would go. | S17 | "Start \"apt-get -s autoremove\|less\" as root to check what are not used." |
| C53 | `dnf remove` removes the packages that depend on the target. | S21 | "Removes the specified packages from the system along with any packages depending on the packages being removed." |
| C54 | `-y` assumes yes; apt-get aborts only in some unsafe cases. | S10 | "Automatic yes to prompts; assume \"yes\" as answer to all prompts and run non-interactively." |
| C55 | `apt-mark hold` prevents automatic install, upgrade, removal. | S12 | "hold is used to mark a package as held back, which will prevent the package from being automatically installed, upgraded or removed." |
| C56 | `apt-mark showhold` lists held packages. | S12 | "showhold is used to print a list of packages on hold" |
| C57 | The `dnf versionlock` plugin keeps only chosen versions available. | S23 | "only versions of packages represented by <package-name-spec> will be available for transaction operations" |
| C58 | On Ubuntu Server the default `unattended-upgrades` package applies security updates automatically and can reboot. The tip about automatic upgrades changing a package during a test run also cites S19 (fix round 1; it cited S27 before). | S19 | "Ubuntu will apply security updates automatically, without user interaction." / "It can reboot the system, if an update warrants it." |
| C59 | `unattended-upgrade --dry-run` only simulates. The prose now cites S27 for it; the code line says it needs root and the `unattended-upgrades` package (S19: "installed by default" on Ubuntu Server). | S27 | "Just simulate installing updates, do not actually do it" |
| C60 | `dnf-automatic` runs from systemd timers; `apply_updates` and `download_updates` default to False. | S24 | "apply_updates  boolean, default: False" / "download_updates  boolean, default: False" |

## Listing Installed Packages
| # | Claim | Source | Quote |
|---|---|---|---|
| C61 | `dpkg -l` / `dpkg-query -l`: three leading columns (action, status, error); the first two letters `ii` = install wanted, installed (fix round 1: not "the first column"). | S8 | "Desired action: … i = Install" / "Package status: … i = Installed" |
| C62 | A pattern needs quoting for the shell. | S8 | "you will probably have to quote package-name-pattern to prevent the shell from performing filename expansion" |
| C63 | `apt list --installed` lists installed packages. | S9 | "list … options to list installed (--installed)" |
| C64 | `rpm -qa` lists all installed packages. | S26 | "rpm -qa  List all installed packages, using the default formatting." |
| C65 | `dnf list --installed` lists installed packages. | S21 | "dnf [options] list --installed [<package-file-spec>...]  Lists installed packages." |
| C66 | `dpkg -S` finds the package that owns a file; it does not list files made by maintainer scripts. | S8 | "This command will not list extra files created by maintainer scripts, nor will it list alternatives." |
| C67 | `rpm -qf FILE` queries the package that owns FILE. | S26 | "-f, --file FILE  Query package owning installed FILE." |
| C68 | `dpkg -L` lists files of a package; `dpkg -s` reports status. | S7 | "-L, --listfiles package-name... List files installed to your system" / "-s, --status package-name... Report status of specified package." |
| C69 | `rpm -qi` shows information; `rpm -ql` lists files. | S26 | "-i, --info  Display package information" / "-l, --list  List files in package." |
| C70 | `apt-mark showmanual` lists manually installed packages; the rules for auto vs manual. | S12 | "the package you installed explicitly is marked as manually installed" / "showmanual … print a list of manually installed packages" |
| C71 | `dpkg -l` output is for humans; use `-W` and `-f` for formats; default `-W` output is name and version, tab separated. | S8 | "not easily machine-readable. See -W (--show) and --showformat" / "name and its installed version" |
| C72 | Debian Reference lists `apt-mark showmanual` and `apt list --manual-installed` as equal. | S17 | "apt list --manual-installed … apt-mark showmanual   list manually installed packages" |
| C73 | Example `dpkg -S /etc/host.conf` → `base-files`. | S18 | "base-files: /etc/host.conf" (also seen in a local run) |

## Snap
| # | Claim | Source | Quote |
|---|---|---|---|
| C74 | A snap bundles an app with its dependencies and libraries. | S5 | "Snaps are basically an application compiled together with their dependencies and libraries" |
| C75 | Snaps are self-contained app packages; snapd handles installation, confinement, and updates. | S34 | "Snaps are self-contained application packages … The snap daemon, snapd, handles installation, confinement, and updates" |
| C76 | snapd must run before a snap is installed; many distributions have it, others need install. | S36 | "It needs to be running before a snap can be installed." / "pre-installed and running on many distributions by default" |
| C77 | `snap list`, `snap find`, `snap info`, `sudo snap install`, `sudo snap remove`. | S35 | "snap list command" / "snap find \"media player\"" / "snap info command" / "sudo snap install vlc" / "sudo snap remove vlc" |
| C78 | Channel form `<track>/<risk>/<branch>`; the branch is optional. | S29 | "<track>/<risk>/<branch>" / "A branch is an optional, fine-grained subdivision of a channel" |
| C79 | Risk levels: stable, candidate, beta, edge; stable is the default. | S29 | "There are four risk-levels: stable, candidate, beta and edge." / "Snaps are installed from the stable risk-level by default." |
| C80 | Confinement decides how much a snap can access. `strict` is the usual level and needs interfaces. | S28 | "Strictly confined snaps can not access files, network, processes or any other system resource without requesting specific access via an interface." |
| C81 | `classic` gives access like a traditional package and needs `--classic`. | S28 | "Allows access to the system's resources in much the same way traditional packages do … installation requires the --classic command line argument." |
| C82 | Classic snaps lack the protection of sandboxing. | S31 | "classic snaps are inherently riskier than standard snaps, as they lack the protections and guardrails offered by sandboxing" |
| C83 | snapd checks for updates 4 times a day; each check is a refresh. | S30 | "by default, the snapd daemon checks for updates 4 times a day. Each update check is called a refresh." |
| C84 | `snap refresh --hold=24h <snap>` pauses a snap; `snap refresh --time` shows the schedule. | S30 | "snap refresh --hold=<duration> <snap1> <snap2>..." / "$ snap refresh --time  timer: 00:00~24:00/4" |
| C85 | `/snap/bin` holds links to snap commands. | S33 | "/snap/bin - Symlinks to snap applications" (S35: "added to the system $PATH") |
| C86 | Data lives under `/var/snap/<name>` and `/home/<user>/snap/<name>`. | S32 | "SNAP_COMMON: /var/snap/<snap name>/common" / "SNAP_USER_DATA: /home/<username>/snap/<snap name>/<revision>" |
| C87 | `snap remove --purge` removes a snap without saving a snapshot of its data. | S35 | "To remove a snap without generating a snapshot, use the additional --purge argument" |
| C88 | The page text "pin the channel with `--channel=`" | S29 | "sudo snap install --channel=beta vlc" (install from a chosen risk level) |
| C89 | Snap needs to be installed (snapd) on RHEL/Fedora. | S36 | "Fedora", "CentOS", "AlmaLinux OS" are listed under "Without snap" |

Further reading (not cited): the roadmap links #158, #190, #208 and the title-only or unreadable links above.

## Notes for the fact-checker
- The page says "Ubuntu releases before 24.04 LTS use `sources.list`" (C19). The page names no other distro version.
- The "three families" tip texts are tutorial advice and carry "Tutorial's own advice:".
- `dnf check-update` exit status 100 (C49) is in the prose, with its cite. The code comment repeats it.
- `apt-cache policy | head -n 12` and the other read-only commands were run locally. Output was as expected.

## Fix round 1 (jargon glosses)
The page now glosses at first use: exit status (Installing section), maintainer scripts (Repositories danger callout; short repeat in Listing), snapd daemon ("a background service", S34), deb822 ("`Field: value` stanzas", S14: "multiline stanzas"), `Release` file ("lists the checksums of the repository files", S13: "checksums of all of the Packages files are then computed and put into the Release file").

## Fix round 2 (review findings)
| # | Claim (page text after the fix) | Source | Quote (≤25 words) |
|---|---|---|---|
| R1 | `-y` runs apt-get without prompts, so a script on a disposable container or CI runner needs it; do not use it on a shared machine (advice). | S10 | "Automatic yes to prompts; assume \"yes\" as answer to all prompts and run non-interactively." |
| R2 | A pinned `pkg=version` does not pin the dependencies; old versions can leave the repository; keep a local copy or snapshot (advice; the list records all installed packages). | S8 / S17 | S8: "list all packages in /var/lib/dpkg/status"; S17: "download it from archive of https://snapshot.debian.org/ or copy it from package cache of a functioning machine" |
| R3 | `dnf-automatic.timer` follows the config file; the install timer unit applies updates. Config defaults download and apply nothing. | S24 | "The systemd timer unit dnf-automatic.timer will behave as the configuration file specifies" / "The third will download and install them." / "apply_updates … default: False" |
| R4 | On Ubuntu Server the reboot after unattended upgrades is off by default. | S19 | "Unattended-Upgrade::Automatic-Reboot \"false\"; … The default value is false." |
| R5 | Log `sources.list` and `sources.list.d`: older Ubuntu releases keep the main repositories in `sources.list`. | S18 | "have repository information defined in the /etc/apt/sources.list file" |
| R6 | "In current APT" the one-line format is deprecated. | S14 | "This format is deprecated and may eventually be removed, but not before 2029." (page is `unstable`, apt 3.3.3) |
| R7 | `apt-cache policy` without an argument lists the priority of each source; with a name it gives the priority choice for that package. | S11 | "With no arguments it will print out the priorities of each source. Otherwise it prints detailed information about the priority selection" |
| R8 | `apt-file` is a separate package and `apt-file update` is its update action. | S16 | "update  This action that just calls apt update or apt-get update" |
