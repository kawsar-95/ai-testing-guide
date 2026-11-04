# Independent fact-check: Boot and Services (`lib/linux/sheets/boot-services.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Boot and Services

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 61.

### FAILs

- 2.5 `sudo grub-install DEV`: !. The row writes GRUB to a device, including its boot sector, and can overwrite data there. The sheet's own EN says a wrong DEV can break boot, yet it has "!: no". Quote: "On some platforms, it may also install GRUB into the boot sector." (grub_install). Fix: EN "install GRUB; a wrong DEV can break boot" / BN "GRUB বসায়; ভুল DEV হলে boot নাও হতে পারে" / set "!: yes"

### Notes

- 2.3: The cited pages are Debian pages. They do not mention Ubuntu. Consider "(Debian)" only.
- 2.4: "other distros" is not stated in the pages. The page only says "Generate a grub config file".
- 2.3 and 2.4 write `/boot/grub/grub.cfg`. They overwrite a generated file, so I did not mark them "!". Add a "!" mark if the site treats this as overwriting.
- 3.1: By default `list-units` shows only units that are active, have pending jobs, or have failed. "loaded services" is acceptable but loose.
- 4.2: The page also allows a simple file name for standard directories. "Use a full path" is safe advice, not a rule.
- 4.4: `WantedBy=` takes effect only after `enable`. Consider "start it in a normal boot, once enabled".
- 5.5: `enable` does not start the unit now. The EN is correct, so keep the "at every boot" wording.
- 5.4 BN: "যদি সে পারে" is informal. Consider "যদি service সমর্থন করে".
- 8.4: Memory and I/O figures appear only when accounting is on for the unit. "live CPU and memory" is acceptable.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `BIOS/UEFI → GRUB → kernel → systemd` | PASS | "system firmware will do minimal hardware initialization, and hand control over to a boot loader (e.g. systemd-boot(7) or GRUB[1])" (bootup) | PASS | |
| 1.2 | `systemd-analyze` | PASS | "If no command is passed, systemd-analyze time is implied." (systemd_analyze) | PASS | |
| 1.3 | `systemd-analyze blame` | PASS | "prints a list of all running units, ordered by the time they took to initialize" (systemd_analyze) | PASS | |
| 1.4 | `systemd-analyze critical-chain` | PASS | "prints a tree of the time-critical chain of units" (systemd_analyze) | PASS | |
| 1.5 | `journalctl -b` | PASS | "The argument may be empty, in which case logs for the current boot will be shown." (journalctl) | PASS | |
| 1.6 | `journalctl --list-boots` | PASS | "Show a tabular list of boot numbers" (journalctl) | PASS | |
| 1.7 | `dmesg -T` | PASS | "-T, --ctime / Print human-readable timestamps." (dmesg) | PASS | |
| 1.8 | `/proc/cmdline` | PASS | "Arguments passed to the Linux kernel at boot time." (proc_cmdline) | PASS | |
| 2.1 | `ls /boot` | PASS | "The operating system kernel (initrd for example) must be located in either / or /boot." (hier) | PASS | |
| 2.2 | `/etc/default/grub` | PASS | "direct user modification to this file is deprecated. You should customize configuration files in "/etc/grub.d/" and "/etc/default/grub", instead." (debian_ref_init) | PASS | |
| 2.3 | `sudo update-grub` | PASS | "update-grub is a stub for running grub-mkconfig -o /boot/grub/grub.cfg" (update_grub) | PASS | Ubuntu not in pages |
| 2.4 | `sudo grub-mkconfig -o /boot/grub/grub.cfg` | PASS | "Generate a grub config file" / "output generated config to FILE" (grub_mkconfig) | PASS | "other distros" not stated |
| 2.5 | `sudo grub-install DEV` | FAIL (!) | "On some platforms, it may also install GRUB into the boot sector." (grub_install) | PASS | Should be "!: yes" |
| 2.6 | `efibootmgr -v` | PASS | "manipulate the UEFI Boot Manager" / "-v \| --verbose / Verbose mode - prints additional information" (efibootmgr) | PASS | |
| 3.1 | `systemctl list-units --type=service` | PASS | "List units that systemd currently has in memory." (systemctl) | PASS | |
| 3.2 | `systemctl list-unit-files --type=service` | PASS | "List unit files installed on the system, in combination with their enablement state" (systemctl) | PASS | |
| 3.3 | `systemctl status NAME` | PASS | "Show runtime status information ... followed by most recent log data from the journal" / "Main PID: 930 (bluetoothd)" (systemctl) | PASS | |
| 3.4 | `systemctl --failed` | PASS | "Use --state=failed or --failed to show only failed units." (systemctl) | PASS | |
| 3.5 | `systemctl get-default` | PASS | "Return the default target to boot into." (systemctl) | PASS | |
| 3.6 | `systemctl cat NAME` | PASS | "Show backing files of one or more units." (systemctl) | PASS | |
| 3.7 | `systemctl list-dependencies NAME` | PASS | "Shows units required and wanted by the specified units." (systemctl) | PASS | |
| 4.1 | `/etc/systemd/system/NAME.service` | PASS | "/etc/systemd/system / System units created by the administrator" (systemd_unit) | PASS | |
| 4.2 | `[Service]  ExecStart=/usr/bin/CMD` | PASS | "the first argument must be either an absolute path to an executable or a simple file name" (systemd_service) | PASS | Full path not mandatory |
| 4.3 | `Restart=on-failure` | PASS | "the service will be restarted when the process exits with a non-zero exit code, is terminated by a signal" (systemd_service) | PASS | |
| 4.4 | `[Install]  WantedBy=multi-user.target` | PASS | "It tells systemd to pull in the unit when starting multi-user.target." (systemd_unit) | PASS | Needs `enable` |
| 4.5 | `systemd-analyze verify FILE.service` | PASS | "will load unit files and print warnings if any errors are detected" (systemd_analyze) | PASS | |
| 4.6 | `sudo systemctl daemon-reload` | PASS | "Reload the systemd manager configuration. ... reload all unit files" (systemctl) | PASS | |
| 4.7 | `sudo systemctl enable --now NAME` | PASS | "--now / When used with enable ... also start/stop/try-restart the units" (systemctl) | PASS | |
| 5.1 | `sudo systemctl start NAME` | PASS | "start PATTERN..." (systemctl) | PASS | |
| 5.2 | `sudo systemctl stop NAME` | PASS | "stop PATTERN..." (systemctl) | PASS | |
| 5.3 | `sudo systemctl restart NAME` | PASS | "Stop and then start one or more units" (systemctl) | PASS | |
| 5.4 | `sudo systemctl reload NAME` | PASS | "Asks all units listed on the command line to reload their configuration." (systemctl) | PASS | |
| 5.5 | `sudo systemctl enable NAME` | PASS | "Note that this does not have the effect of also starting any of the units being enabled." / symlinks from [Install] (systemctl) | PASS | |
| 5.6 | `sudo systemctl disable NAME` | PASS | "The inverse systemctl disable will remove that symlink again." (systemd_unit) | PASS | |
| 5.7 | `sudo systemctl enable --now NAME` | PASS | "also start/stop/try-restart the units after the specified unit file operations succeed" (systemctl) | PASS | |
| 5.8 | `sudo systemctl mask NAME` | PASS | "link these unit files to /dev/null, making it impossible to start them" (systemctl) | PASS | |
| 6.1 | `systemctl status NAME` | PASS | "Main PID: 930 (bluetoothd)" / "followed by most recent log data from the journal" (systemctl) | PASS | |
| 6.2 | `systemctl is-active NAME` | PASS | "Check whether any of the specified units are active (i.e. running). Returns an exit code 0" (systemctl) | PASS | |
| 6.3 | `systemctl is-enabled NAME` | PASS | "Checks whether any of the specified unit files are enabled" (systemctl) | PASS | |
| 6.4 | `systemctl is-failed NAME` | PASS | "Check whether any of the specified units is in the "failed" state." (systemctl) | PASS | |
| 6.5 | `systemctl --failed` | PASS | "Use --state=failed or --failed to show only failed units." (systemctl) | PASS | |
| 6.6 | `systemctl show NAME -p MainPID` | PASS | "-p, --property= ... limit display to properties specified" / "current main process identifier as "MainPID"" (systemctl) | PASS | |
| 7.1 | `journalctl -u NAME` | PASS | "Show messages for the specified systemd unit UNIT" (journalctl) | PASS | |
| 7.2 | `journalctl -u NAME -f` | PASS | "continuously print new entries as they are appended to the journal" (journalctl) | PASS | |
| 7.3 | `journalctl -u NAME -n 50` | PASS | "Show the most recent journal events and limit the number of events shown." (journalctl) | PASS | |
| 7.4 | `journalctl -u NAME --since "1 hour ago"` | PASS | "-S, --since=, -U, --until=" / "relative notation (e.g. '1 hour ago')" (journalctl, dmesg) | PASS | |
| 7.5 | `journalctl -u NAME -p err` | PASS | "all messages with this log level or a lower (hence more important) log level are shown" (journalctl) | PASS | |
| 7.6 | `journalctl -u NAME -b` | PASS | "logs for the current boot will be shown" (journalctl) | PASS | |
| 7.7 | `journalctl -xeu NAME` | PASS | "-e ... Immediately jump to the end of the journal" / "-x ... Augment log lines with explanation texts" (journalctl) | PASS | |
| 8.1 | `systemctl --type=service --state=running` | PASS | "show only those in the specified states" / "loaded active running Journal Service" (systemctl) | PASS | |
| 8.2 | `systemctl status` | PASS | "If no positional arguments are specified ... shows the status of the whole system." (systemctl) | PASS | |
| 8.3 | `systemd-cgls` | PASS | "Recursively show control group contents" / "control group hierarchy in a tree" (systemd_cgls) | PASS | |
| 8.4 | `systemd-cgtop` | PASS | "shows the top control groups ... ordered by their CPU, memory, or disk I/O load" (systemd_cgtop) | PASS | |
| 8.5 | `sudo ss -ltnp` | PASS | "-l, --listening / Display only listening sockets" / "-p, --processes" (ss) | PASS | |
| 8.6 | `journalctl -f` | PASS | "continuously print new entries as they are appended to the journal" (journalctl) | PASS | |

Open FAILs after round 1: 1

## Round 2: Boot and Services (boot-services)

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 1 (A: 1, B: 0).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 2.5 | `sudo grub-install DEV` | PASS | "may also install GRUB into the boot sector." (grub_install). The page also says "INSTALL_DEVICE must be system device filename". Writing to the boot sector of a wrong device can break boot, which follows from this. | PASS | PASS (grub-install is on the rule list, so "!: yes" is correct) |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
Not checked: the claim "a wrong DEV can break boot" is not stated word for word on the page. I passed it because it follows from the boot-sector quote.

Open FAILs: 0
