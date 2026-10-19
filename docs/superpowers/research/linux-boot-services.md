# Boot and Services (Linux stage 10) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (polite fetcher, no spoofed agent). The systemd man pages come from `freedesktop.org/software/systemd/man/latest/` and show "systemd 262" in their header. The local test machine has systemd 259, so a feature that is newer than 259 is not used on the page. The options on the page (`--failed`, `--now`, `list-timers`, `-p`, `--since`, `-b`) are old features of systemd and need no version note.

Source numbers S1..S30 are the same as the indexes in `page.sources` of `content/linux/boot-services.mdx`.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. Booting process of Linux — Wikipedia — https://en.wikipedia.org/wiki/Booting_process_of_Linux — accessed 2026-10-19 (roadmap link #018)
S3. Arch boot process — ArchWiki — https://wiki.archlinux.org/title/Arch_boot_process — accessed 2026-10-19 (roadmap link #014)
S4. GNU GRUB — GNU Project — https://www.gnu.org/software/grub/ — accessed 2026-10-19 (roadmap links #017 and #020)
S5. How to Manage Services in Linux: systemd and SysVinit Essentials — DEV Community — https://dev.to/iaadidev/how-to-manage-services-in-linux-systemd-and-sysvinit-essentials-devops-prerequisite-8-1jop — accessed 2026-10-19 (roadmap links #194, #200, #223)
S6. How to List Linux Services With systemctl — How-To Geek — https://www.howtogeek.com/839285/how-to-list-linux-services-with-systemctl/ — accessed 2026-10-19 (roadmap link #192)
S7. Checking the Status of a Service Without Having an Exact Name — Baeldung on Linux — https://www.baeldung.com/linux/initialization-managers-service-status — accessed 2026-10-19 (roadmap link #026)
S8. Journalctl Explained: How To View And Analyze Systemd Logs — UptimeRobot — https://uptimerobot.com/knowledge-hub/logging/journalctl-explained-how-to-view-and-analyze-systemd-logs/ — accessed 2026-10-19 (roadmap link #024)
S9. bootup(7) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/bootup.html — accessed 2026-10-19
S10. boot(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/boot.7.html — accessed 2026-10-19
S11. systemd(1) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.html — accessed 2026-10-19
S12. systemctl(1) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemctl.html — accessed 2026-10-19
S13. systemd.unit(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html — accessed 2026-10-19
S14. systemd.service(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html — accessed 2026-10-19
S15. systemd.exec(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.exec.html — accessed 2026-10-19
S16. systemd.target(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.target.html — accessed 2026-10-19
S17. systemd-analyze(1) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd-analyze.html — accessed 2026-10-19
S18. journalctl(1) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/journalctl.html — accessed 2026-10-19
S19. systemd-journald.service(8) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd-journald.service.html — accessed 2026-10-19
S20. kernel-command-line(7) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/kernel-command-line.html — accessed 2026-10-19
S21. systemd.timer(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html — accessed 2026-10-19
S22. systemd.socket(5) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd.socket.html — accessed 2026-10-19
S23. GNU GRUB manual — GNU Project — https://www.gnu.org/software/grub/manual/grub/grub.html — accessed 2026-10-19
S24. UAPI.1 The Boot Loader Specification — UAPI Group — https://uapi-group.org/specifications/specs/boot_loader_specification/ — accessed 2026-10-19
S25. systemd-boot(7) — systemd (freedesktop.org) — https://www.freedesktop.org/software/systemd/man/latest/systemd-boot.html — accessed 2026-10-19
S26. Ramfs, rootfs and initramfs — The Linux Kernel documentation (kernel.org) — https://docs.kernel.org/filesystems/ramfs-rootfs-initramfs.html — accessed 2026-10-19
S27. Using the initial RAM disk (initrd) — The Linux Kernel documentation (kernel.org) — https://docs.kernel.org/admin-guide/initrd.html — accessed 2026-10-19
S28. ss(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ss.8.html — accessed 2026-10-19
S29. Run multiple processes in a container — Docker Docs — https://docs.docker.com/engine/containers/multi-service_container/ — accessed 2026-10-19
S30. update-grub(8) — Debian Manpages (grub2-common, bookworm) — https://manpages.debian.org/bookworm/grub2-common/update-grub.8.en.html — accessed 2026-10-19

Roadmap links that I read but did not cite (blogs; every fact has an official source instead): #019 thelinuxcode.com boot process, #015 thelinuxcode.com boot loaders, #016 phoenixnap.com GRUB, #051 linuxhandbook.com create systemd services, #052 fosslinux.com create services.

Roadmap links with no usable text: #198, #199, #221, #222, #193 (status `http-403`). #025 (digitalocean.com journalctl) has status `ok` but the file holds only the site footer (a login or consent wall), so it gives no text. These links are not cited. The links #198 and #222 (labex.io) and #199, #221, #193 (medium.com) are further reading only.

Official pages that could not be used: Fedora "Working with the GRUB 2 Boot Loader" (blocked by an Anubis proof-of-work page, no text) and help.ubuntu.com/community/Grub2 (`robots`). So the page names only the Debian command `update-grub` and says that other distributions can name the tool differently, without naming their commands.

Not verified: the UEFI specification itself (not fetched). The page states the UEFI facts from S3 (ArchWiki), S9 and S25 only.

Local checks (read-only, my own machine; the host name and other personal data are not in this file): `systemctl get-default`, `systemctl is-active`, `is-failed` and `is-enabled` on `systemd-journald.service`, on a disabled unit and on a unit that does not exist; `systemd-analyze time`; `systemd-analyze verify` on the sample `myapp.service` in a temporary directory outside the repository; `journalctl --since "-1h" -n 1 -p err -u systemd-journald.service`; `journalctl -b -1 -n 1`; `systemctl list-units --type=service --state=running`; `systemctl list-unit-files --state=enabled`; `systemctl list-timers`; `ss -tulpn`; `ps xawf -eo pid,user,cgroup,args`. All ran without error. The observed exit codes match S12: `is-active` printed `active` with 0, `inactive` with 3, and `inactive` with 4 for an unknown unit; `is-failed` on an active unit printed `active` with 1; `is-enabled` printed `static` with 0 and `disabled` with 1. `systemd-analyze verify ./myapp.service` printed `Command /opt/myapp/bin/myapp is not executable: No such file or directory` (the sample program does not exist), and printed `Unknown key 'Restrt' in section [Service], ignoring.` for a mistyped key. The page says only what S17 says (it warns); it makes no claim about the exit status of `verify`.

Sample outputs on the page (`systemctl status myapp.service`, the unit file) are invented illustrations. `myapp`, `example-host`, and the port `8080` are invented.

## Booting Linux
| # | Claim | Source | Quote (at most 25 words) |
|---|---|---|---|
| C0 | (Lede, cite 1) The roadmap lists these topics: booting, boot loaders, service management, creating, starting, status, logs, running services. | S1 | Roadmap topics of the Linux roadmap, stage "Boot and Services". OPINION-OK: the cite only names the topic source. |
| C1 | Boot has four steps: system startup, boot loader, kernel, init process. | S2 | "Those are grouped into 4 steps: system startup, bootloader stage, kernel stage, and init process." |
| C2 | The firmware does basic hardware set-up and usually hands control to a boot loader. On some UEFI systems the firmware loads the kernel itself. | S9 | "the system firmware will do minimal hardware initialization, and hand control over to a boot loader" / "this firmware may also load the kernel directly" |
| C3 | A BIOS machine starts boot code at the start of the first disk (MBR). A UEFI machine starts EFI programs from the ESP. | S3 | "BIOS launches the first 440 bytes (the Master Boot Record bootstrap code area) of the first disk" / "UEFI launches EFI applications, e.g. boot loaders" |
| C4 | The boot loader loads the kernel and the initramfs into memory. | S9 | "It's the boot loader or the firmware that loads both the kernel and initrd/initramfs images into memory" |
| C5 | The initramfs is a compressed archive that the kernel unpacks into memory. | S26 | "the new initramfs archive is a gzipped cpio archive" ; S9: "a compressed CPIO archive that the kernel extracts into a tmpfs" |
| C6 | The initramfs is a small in-memory file system that helps the kernel find the real root file system. | S9, S27 | S9: "The kernel (optionally) mounts an in-memory file system, which looks for the root file system." S27: "system startup to occur in two phases" |
| C7 | The kernel starts the first user-space process, PID 1. | S10 | "the kernel create the initial user-space process, which is given the number 1 as its PID (process ID)" |
| C8 | On systemd systems PID 1 is systemd. It activates `default.target` at boot. | S11 | "When run as first process on boot (as PID 1), it acts as init system" / "On boot systemd activates the target unit default.target" |
| C9 | A target groups units and is a synchronization point. | S16 | "Target units are used to group units and to set synchronization points for ordering dependencies" |
| C10 | `default.target` is usually an alias of `multi-user.target` or `graphical.target`. | S9 | "default.target is simply an alias of graphical.target or multi-user.target" |
| C11 | `systemd-analyze time` splits the time into kernel, initrd, userspace. `blame` lists units by the time each took to start. `critical-chain` prints the time-critical chain. | S17 | "the time spent in the kernel before userspace has been reached, the time spent in the initrd" / "ordered by the time they took to initialize" / "a tree of the time-critical chain of units" |
| C12 | `blame` can mislead. | S17 | "the output might be misleading as the initialization of one service might be slow simply because it waits" |
| C13 | `/proc/cmdline` is where the kernel command line shows. | S20 | Synopsis of kernel-command-line(7): "/proc/cmdline" |

## Boot Loaders
| # | Claim | Source | Quote |
|---|---|---|---|
| C14 | The firmware hands control to a boot loader, which then invokes the kernel. | S9 | "This boot loader will then invoke an OS kernel from disk (or the network)." |
| C15 | GRUB 2 replaced GRUB Legacy (0.9x). GRUB Legacy is no longer developed. | S4 | "GRUB Legacy is no longer being developed." |
| C16 | systemd-boot is a simple boot manager for UEFI firmware only. | S25 | "systemd-boot supports systems with UEFI firmware only." |
| C17 | `grub.cfg` is usually in `/boot/grub`. `grub-mkconfig` generates it. | S23 | "GRUB is configured using grub.cfg, usually located under /boot/grub." / "The program grub-mkconfig generates grub.cfg files" |
| C18 | `/etc/default/grub` controls `grub-mkconfig`. `GRUB_CMDLINE_LINUX` adds kernel command-line words. | S23 | "The file /etc/default/grub controls the operation of grub-mkconfig." / "Command-line arguments to add to menu entries for the Linux kernel." |
| C19 | On Debian, `update-grub` runs `grub-mkconfig -o /boot/grub/grub.cfg`. | S30 | "update-grub is a stub for running grub-mkconfig -o /boot/grub/grub.cfg" |
| C20 | systemd-boot reads Type #1 entry files from `/loader/entries/` on the ESP and the XBOOTLDR partition. The Boot Loader Specification defines the format. | S25, S24 | S25: "description files located in /loader/entries/ on the ESP and the Extended Boot Loader Partition" |
| C21 | In the GRUB menu, `e` edits an entry. Ctrl-x boots the edit. | S23 | "edit any of the boot entries by pressing e" / "To boot the edited entry, press Ctrl-x." |
| C22 | In the systemd-boot menu, `e` edits the kernel command line of the entry. | S25 | "e — Edit the kernel command line for selected entry" |
| C23 | The kernel command-line words `rescue`, `single`, and `1` boot into rescue mode, equal to `systemd.unit=rescue.target`. | S11 | "rescue, rd.rescue, single, 1 ... Boot into rescue mode. Those options are equivalent to either systemd.unit=rescue.target" |
| C24 | `systemd.unit=` is a kernel command-line parameter that systemd understands. | S20 | "systemd.unit=, rd.systemd.unit=, ... Parameters understood by the system and service manager" |
| C25 | GRUB generates a recovery entry for each Linux kernel unless it is disabled. | S23 | "two menu entries will be generated for each Linux kernel: one default entry and one entry for recovery mode" |
| C26 | `grub-install` installs GRUB on a drive and runs as root. | S23 | "invoke the program grub-install ... as the superuser (root)" |
| C27 | (Tutorial's own judgement, not a source claim; the page has no cite on this callout) A wrong boot configuration can leave a machine unbootable and a remote machine unreachable. | none | Marked as a danger callout; the sources describe the tools, not this risk. |

## Service Management
| # | Claim | Source | Quote |
|---|---|---|---|
| C28 | Systemd manages "units" of 11 types. Most come from configuration files. | S11 | "entities called "units" of 11 different types" / "The majority of units are configured in unit configuration files" |
| C29 | A service unit starts and controls daemons. | S11 | "Service units, which start and control daemons and the processes they consist of." |
| C30 | A socket unit can start a service on demand. | S22 | "Socket units may be used to implement on-demand starting of services" |
| C31 | A timer unit does timer-based activation of another unit. | S21 | "a timer controlled and supervised by systemd, for timer-based activation" |
| C32 | Unit directories, in the order of S13 (earlier overrides later): `/etc/systemd/system` (administrator), `/run/systemd/system` (runtime), `/usr/lib/systemd/system` (package manager). | S13 | "Unit files found in directories listed earlier override files with the same name in directories lower in the list" |
| C33 | A drop-in is a `.conf` file in `UNIT.d/` that merges with the unit file. | S13 | "a "drop-in" directory foo.service.d/ may exist. All files with the suffix ".conf" from this directory will be merged" |
| C34 | `systemctl cat` prints the unit file and its drop-ins. | S12 | "Prints the "fragment" and "drop-ins" (source files) of units." |
| C35 | SysV init starts services with scripts, in `/etc/init.d` on most Linux versions. | S10 | "a single startup script located in a specific directory (/etc/init.d in most versions of Linux)" |
| C36 | Systemd has largely replaced SysV init. | S5 | "has largely been replaced by systemd" (8 words); the SysV description is "An older init system that uses simple scripts" (7 words) |
| C37 | The `service` command works with SysV and with systemd. | S7 | "the service command has evolved to also function with the systemd initialization system" |

## Creating Services
| # | Claim | Source | Quote |
|---|---|---|---|
| C38 | A unit file has `[Unit]`, `[Service]`, `[Install]`. `WantedBy=` makes `enable` link the unit into the target. | S13, S14 | S13: "After running systemctl enable, a symlink /etc/systemd/system/multi-user.target.wants/foo.service ... will be created." S14 example: `[Service] ExecStart=/usr/sbin/foo-daemon` |
| C39 | `Restart=on-failure` is the recommended choice for long-running services. | S14 | "Setting this to on-failure is the recommended choice for long-running services" |
| C40 | The first word of `ExecStart=` is an absolute path or a plain file name. | S14 | "the first argument must be either an absolute path to an executable or a simple file name without any slashes" |
| C41 | `User=` defaults to root for system services (not for user services). The user must exist when the service starts. | S15 | "For system services ... the default is "root"" / "must have been created statically in the user database no later than the moment the service is started" |
| C42 | System services get only a few environment variables. `Environment=` sets more. | S15 | "will be started, without additional service-specific configuration, with just a few environment variables" |
| C43 | With `Type=simple`, `systemctl start` reports success when the binary is missing. `Type=exec` reports failure. | S14 | simple: "systemctl start command lines for simple services will report success even if the service's binary cannot be invoked successfully"; exec: "will report failure when the service's binary cannot be invoked successfully" |
| C44 | `systemd-analyze verify` warns about unknown keys and missing or non-executable commands. | S17 | "unknown sections and directives" / "commands listed in ExecStart= and similar which are not found in the system or not executable" |
| C45 | `daemon-reload` makes systemd read all unit files again. | S12 | "This will rerun all generators, reload all unit files, and recreate the entire dependency tree." |
| C46 | `systemctl edit` writes a drop-in file (override.conf) and reloads. | S12 | "to extend or override the definition of the specified unit" / "After the editing is finished, configuration is reloaded" |
| C47 | `systemctl revert` removes drop-ins and also a user-configured unit file that overrides a vendor unit (a copy in `/etc`). | S12 | "removes drop-in configuration files that modify the specified units, as well as any user-configured unit file that overrides a matching vendor supplied unit file" (25 words) |
| C48 | (Tutorial's own advice) Use root only when the program needs it. | none | Marked on the page as the tutorial's own advice. |

## Starting and Stopping Services
| # | Claim | Source | Quote |
|---|---|---|---|
| C49 | Enabling and starting are separate. | S12 | "Enabling and starting units is orthogonal: units may be enabled without being started and started without being enabled." |
| C50 | `enable` creates the symlinks of `[Install]`. It does not start the unit. `start` spawns the process. | S12 | "this does not have the effect of also starting any of the units being enabled" / "Starting actually spawns the daemon process" |
| C51 | `--now` with `enable`, `disable`, `mask` also starts or stops the unit. | S12 | "When used with enable, disable, mask, or reenable, also start/stop/try-restart the units" |
| C52 | `start`, `stop`, `restart`, `reload-or-restart` behaviour (table). | S12 | "Stop and then start one or more units... If the units are not running yet, they will be started." / "Reload one or more units if they support it. If not, stop and then start them instead." |
| C53 | `disable` removes the symlinks and does not stop the unit. | S12 | "this command does not implicitly stop the units that are being disabled" |
| C54 | `mask` links the unit to `/dev/null` and blocks all activation. | S12 | "link these unit files to /dev/null, making it impossible to start them" / "prohibits all kinds of activation of the unit" |
| C55 | `stop` warns when another unit can still trigger the unit. | S12 | "If a unit that gets stopped can still be triggered by other units, a warning containing the names of the triggering units is shown." |
| C56 | `--user` talks to the user's own manager. That manager reads units from `~/.config/systemd/user`, not from `/etc/systemd/system`. | S12, S13 | S12: "Talk to the service manager of the calling user, rather than the service manager of the system." S13 (user unit search path): "~/.config/systemd/user/*". Local test (my machine, read-only): `systemctl --user cat` of a system-only unit printed "No files found". |
| C57 | `systemctl isolate` stops all units outside the target. It is dangerous. | S12 | "This command is dangerous, since it will immediately stop processes that are not enabled in the new target" |
| C58 | For `simple` and `exec` units, systemd treats the unit as started when the process is forked or executed. | S14 | simple: "immediately after the main service process has been forked off"; exec: "immediately after the main service binary has been executed" |
| C59 | (Tutorial's own judgement) Stopping `ssh` or the network service can make a remote machine unreachable. | none | Marked as a danger callout. |

## Checking Service Status
| # | Claim | Source | Quote |
|---|---|---|---|
| C60 | `status` shows runtime state plus the newest journal lines; 10 lines by default. | S12 | "followed by most recent log data from the journal" / "By default, this function only shows 10 lines of output" |
| C61 | `Loaded:` shows the file and enablement. `Active:` shows the state. | S12 | "this line will also show the enablement state" / "The "Active:" line shows active state." |
| C62 | The `failed` state is a crash, an error exit code, or a timeout. | S12 | "A special "failed" state is entered when the service failed in some way, such as a crash, exiting with an error code or timing out." |
| C63 | `is-active` exits 0 (active), 3 (not active), 4 (no such unit). | S12 | LSB table: "0 ... unit is active", "3 ... unit is not active", "4 ... no such unit" |
| C64 | `is-failed` exits 0 when a unit has failed. | S12 | "Returns an exit code 0 if at least one has failed, non-zero otherwise." |
| C65 | `is-enabled` exits 0 for `static`. | S12 | Table 3: `"static"` — "The unit file is not enabled, and has no provisions for enabling in the [Install] unit file section." Exit code 0. |
| C66 | The exit-code mapping is imperfect. | S12 | "The mapping of LSB service states to systemd unit states is imperfect, so it is better to not rely on those return values" |
| C67 | `--failed` lists failed units. `reset-failed` clears the failed state and the restart counter. | S12 | "List units in failed state." / "the restart counter of service units" is reset |
| C68 | `status` shows only the current or most recent run; `journalctl --unit` gives older runs. | S12 | "Information about earlier invocations, invocations from previous system boots ... may be retrieved via journalctl --unit=." |
| C69 | `service --status-all` lists SysV services. | S7 | "it has a handy option called –status-all that outputs a list of all system services and their status" |
| C70 | `--quiet` stops the state output of `is-active`. | S12 | "Unless --quiet is specified, this will also print the current unit state to standard output." |

## Checking Service Logs
| # | Claim | Source | Quote |
|---|---|---|---|
| C71 | journald collects logs, including stdout and stderr of service units. | S19 | "Standard output and standard error of service units." |
| C72 | The default standard output of a service is the journal. | S15 | "DefaultStandardOutput= in systemd-system.conf(5), which defaults to journal" |
| C73 | `journalctl -u UNIT` shows messages of one unit. | S18 | "Show messages for the specified systemd unit UNIT (such as a service unit)" |
| C74 | `-b` selects the current boot. `-b -1` selects the boot before the last. | S18, S8 | S18: "-0 is the last boot, -1 the boot before last" ; S8: "journalctl -b -1 (previous boot)" |
| C75 | `-n` limits the entries. `-f` follows. `--since` takes relative times. `-p err` shows `err` and more important. | S18 | "relative times may be specified, prefixed with "-" or "+"" / "all messages with this log level or a lower (hence more important) log level are shown" |
| C76 | By default the journal is persistent when `/var/log/journal` exists at boot; otherwise it is volatile in `/run/log/journal`, lost at reboot. `Storage=` can change it. | S19 | "By default, log data is stored persistently if /var/log/journal/ exists during boot, with an implicit fallback to volatile storage otherwise." |
| C77 | Root and members of `systemd-journal`, `adm`, `wheel` read all journal files. | S18 | "Members of the groups "systemd-journal", "adm", and "wheel" can read all journal files." |
| C78 | `StandardOutput=` can send output to a file. | S15 | "The file:path option may be used to connect a specific file system object to standard output." |
| C79 | `--no-pager` stops the pager. | S18 | "Do not pipe output into a pager." |
| C80 | (Tutorial's own advice) Journal lines can hold host names, user names, IP addresses, tokens; remove them before sharing. | none | Marked on the page as the tutorial's own advice. |

## Running Services
| # | Claim | Source | Quote |
|---|---|---|---|
| C81 | `systemctl list-units --type=service --state=running` lists running services; `list-unit-files --state=enabled` lists the enabled unit files (not all that starts at boot). | S6 | "you can run "systemctl --type=service --state=running" to see running services" / "To see all enabled unit files on your system" |
| C82 | `list-units` shows by default only active units, units with pending jobs, and failed units. `--all` shows more. | S12 | "By default, only units which are active, have pending jobs, or have failed are shown; this can be changed with --all." |
| C83 | `list-timers` shows NEXT and LAST. | S12 | "NEXT shows the next time the timer will run." / "LAST shows the last time the timer ran." |
| C84 | By default, a timer activates the service with the same name (`Unit=` can name another). | S21 | "By default, a service by the same name as the timer (except for the suffix) is activated" |
| C85 | `list-sockets` shows the socket units and the units they activate. | S12 | Column headers: "LISTEN UNIT ACTIVATES" |
| C86 | Socket activation: systemd holds the socket and starts the service on demand. | S22 | "Socket units may be used to implement on-demand starting of services, as well as parallelized starting of services." |
| C87 | `ss -tulpn`: TCP, UDP, listening, processes, numeric. Without root, the process column is empty for sockets of other users. | S28 | "-t, --tcp Display TCP sockets." / "-l, --listening Display only listening sockets" / "-p, --processes Show processes using sockets." The root note is a local test (my machine), not a quote of S28; the page says "Use `sudo`". |
| C88 | `ps xawf -eo pid,user,cgroup,args` lists processes with their units. | S11 | "ps xawf -eo pid,user,cgroup,args is particularly useful to list all processes and the systemd units they belong to." |
| C89 | `systemctl status PID` shows the unit of a PID. | S12 | "or a PID to show the unit containing that PID" |
| C90 | A container's main process is the `ENTRYPOINT`/`CMD`; Docker advises one service per container. | S29 | "A container's main running process is the ENTRYPOINT and/or CMD at the end of the Dockerfile." / "It's best practice to separate areas of concern by using one service per container." |
| C91 | (Tutorial's own note, marked on the page) Many container images start no systemd, so `systemctl` can fail there. A minimal image may also lack `ps`. | none | Not stated in S29; the page labels it "Tutorial's own note" and puts it after the cited S29 sentence. |
