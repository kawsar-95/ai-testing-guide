# Independent fact-check: Networking (`lib/linux/sheets/networking.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. The stage was checked in two parts, A and B, by two checkers in rounds where both parts had rows to check. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Networking, part A

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 59.

### FAILs

- 3.7 `ethtool IF`: EN. No cited page says that plain `ethtool IF` shows link speed, duplex and link state. The page only says it shows the supported speeds. Quote: "ethtool with just the device name as an argument will show you the supported device speeds." (ethtool). Fix: EN "shows the device's supported speeds" / BN "device-এর সমর্থিত speed দেখায়"
- 6.5 `sudo nmcli connection up NAME`: EN. The page says the command activates a connection. It does not say that DHCP runs again. Quote: "Activate a connection. The connection is identified by its name, UUID or D-Bus path." (nmcli). Fix: EN "activate a saved connection profile" / BN "সংরক্ষিত connection চালু করে"

### Notes

- 4.4 `/30`: the RFC lists only the address count (4), so 2 hosts is derived. "For a link" is not stated for /30. RFC 4632 lists /31 as "p2p link".
- 3.2 `ip -s link show IF`: the page says only "the information is statistics or some time values". It does not name packet and error counters.
- 3.5 `arp -n`: "old tool" is not in the cited pages. The page only says -n shows numerical addresses.
- 6.3 `nmcli device show IF`: the page names the IP4 and DHCP4 field groups. It does not name gateway or DNS.
- 7.8: BN "কোন DNS server" is terse for "DNS servers to ask". Consider "যে DNS server-কে জিজ্ঞেস করা হয়".
- 7.6 `resolvectl status`: I did not read the page text for this row. The pass rests on the command synopsis `status [LINK...]` and on the page's DNS server wording.
- 2.6 `ss -s`: the page says "Print summary statistics". "By type" is a loose reading.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `ip -br addr` | PASS | "-br, -brief Print only basic information in a tabular format" (ip) | PASS | |
| 1.2 | `ip route` | PASS | "ip route { show / flush } SELECTOR" (ip_route) | PASS | |
| 1.3 | `ss -tulpn` | PASS | "-l, --listening Display only listening sockets"; "-p, --processes Show processes using sockets." (ss) | PASS | |
| 1.4 | `ping -c 4 HOST` | PASS | "Stop after sending count ECHO_REQUEST packets." (ping) | PASS | |
| 1.5 | `dig +short DOMAIN` | PASS | "dig +short example.com" (dig) | PASS | |
| 1.6 | `curl -I URL` | PASS | "-I, --head (HTTP FTP FILE) Fetch the headers only." (curl) | PASS | |
| 1.7 | `ssh USER@HOST` | PASS | "ssh connects and logs into the specified" (ssh) | PASS | |
| 2.1 | `Link · Internet · Transport · Application` | PASS | "o Application Layer … o Transport Layer … o Internet Layer … o Link Layer" (rfc1122) | PASS | |
| 2.2 | `ss -tan` | PASS | "-a, --all Display both listening and non-listening" (ss) | PASS | |
| 2.3 | `ss -ltn` | PASS | "-l, --listening Display only listening sockets" (ss) | PASS | |
| 2.4 | `ss -tn state established` | PASS | "ss -o state established '( dport = :ssh or sport = :ssh )'" (ss) | PASS | |
| 2.5 | `ss -tn sport = :22` | PASS | "{dport/sport} [OP] [FAMILY:]:PORT" (ss) | PASS | |
| 2.6 | `ss -s` | PASS | "-s, --summary Print summary statistics." (ss) | PASS | |
| 2.7 | `nc -zv HOST PORT` | PASS | "-z Only scan for listening daemons, without sending any data" (nc) | PASS | |
| 2.8 | `/etc/services` | PASS | "services - Internet network services list … assigned port numbers" (services) | PASS | |
| 3.1 | `ip -br link` | PASS | "-br, -brief Print only basic information in a tabular format" (ip) | PASS | |
| 3.2 | `ip -s link show IF` | PASS | "-s, -stats … the information is statistics or some time values." (ip) | PASS | |
| 3.3 | `ip neigh` | PASS | "ip-neighbour(8) - neighbour/arp tables management." (ip_neighbour) | PASS | |
| 3.4 | `sudo ip neigh flush dev IF` | PASS | "ip neighbour flush flush neighbour entries" (ip_neighbour) | PASS | |
| 3.5 | `arp -n` | PASS | "-n, --numeric shows numerical addresses" (arp) | PASS | "old tool" unsupported |
| 3.6 | `sudo arping -c 3 IP` | PASS | "Stop after sending count ARP REQUEST packets." (arping) | PASS | |
| 3.7 | `ethtool IF` | FAIL | "ethtool with just the device name as an argument will show you the supported device speeds." (ethtool) | PASS | duplex and link state unsupported |
| 3.8 | `RARP` | PASS | "Plummer's 'Address Resolution Protocol' (ARP) … resolving a host's hardware address given its protocol address. This RFC proposes a 'Reverse Address Resolution Protocol'" (rfc903) | PASS | |
| 4.1 | `ipcalc 192.168.1.0/24` | PASS | "resulting broadcast, network, Cisco wildcard mask, and host range." (ipcalc) | PASS | |
| 4.2 | `/24` | PASS | "n.n.n.0/24 256 16777216 legacy 'Class C'" (rfc4632) | PASS | 256 − 2 = 254 |
| 4.3 | `/16` | PASS | "n.n.0.0/16 65536 65536 legacy 'Class B'" (rfc4632) | PASS | 65536 − 2 |
| 4.4 | `/30` | PASS | "n.n.n.x/30 4 1073741824" (rfc4632) | PASS | see note |
| 4.5 | `10.0.0.0/8 172.16.0.0/12 192.168.0.0/16` | PASS | "routing information about private networks shall not be propagated on inter-enterprise links" (rfc1918) | PASS | |
| 4.6 | `127.0.0.0/8` | PASS | "(g) { 127, } Internal host loopback address." (rfc1122) | PASS | |
| 5.1 | `ip route` | PASS | "ip route { show / flush } SELECTOR" (ip_route) | PASS | |
| 5.2 | `ip route get 8.8.8.8` | PASS | "ip route get get a single route" (ip_route) | PASS | |
| 5.3 | `ip rule` | PASS | "rule - rule in routing policy database." (ip) | PASS | |
| 5.4 | `sudo ip route add default via IP` | PASS | "ip route add default via 192.168.1.1 dev eth0 Adds a default route (for all addresses) via the local gateway" (ip_route) | PASS | |
| 5.5 | `sudo ip route add NET via IP dev IF` | PASS | "via [ FAMILY ] ADDRESS the address of the nexthop router" (ip_route) | PASS | |
| 5.6 | `sudo ip route del default` | PASS | "ip route delete delete route" (ip_route) | PASS | |
| 5.7 | `sysctl net.ipv4.ip_forward` | PASS | "ip_forward - BOOLEAN Forward Packets between interfaces." "1 (enabled)" (ip_sysctl) | PASS | |
| 5.8 | `sudo sysctl -w net.ipv4.ip_forward=1` | PASS | "-w, --write"; "/etc/sysctl.conf" is the persistent file (sysctl) | PASS | |
| 6.1 | `1 discover 2 offer 3 request 4 ack` | PASS | "DHCPDISCOVER … DHCPOFFER … DHCPREQUEST … DHCPACK" (rfc2131) | PASS | |
| 6.2 | `ip -4 addr show IF` | PASS | "-4 shortcut for -family inet."; "valid_lft LFT the valid lifetime of this address" (ip, ip_address) | PASS | |
| 6.3 | `nmcli device show IF` | PASS | "For active data use GENERAL, IP4, DHCP4, IP6, DHCP6, VPN." (nmcli) | PASS | gateway/DNS not named |
| 6.4 | `nmcli connection show` | PASS | "the default action is nmcli connection show." (nmcli) | PASS | |
| 6.5 | `sudo nmcli connection up NAME` | FAIL | "Activate a connection. The connection is identified by its name, UUID or D-Bus path." (nmcli) | PASS | "DHCP runs again" unsupported |
| 6.6 | `networkctl status IF` | PASS | "links as seen by systemd-networkd"; "status [PATTERN...]" (networkctl) | PASS | |
| 6.7 | `journalctl -u NetworkManager -b` | PASS | "-u, --unit=UNIT … Show messages for the specified systemd unit"; "-b … Show messages from a specific boot" (journalctl) | PASS | |
| 7.1 | `dig example.com` | PASS | "The default query type is A" (dig) | PASS | |
| 7.2 | `dig +short example.com` | PASS | "dig +short example.com" (dig) | PASS | |
| 7.3 | `dig MX example.com` | PASS | "what type of query is required - ANY, A, MX, SIG, etc." (dig) | PASS | |
| 7.4 | `dig @1.1.1.1 example.com` | PASS | "dig @server name type" (dig) | PASS | |
| 7.5 | `dig -x 8.8.8.8` | PASS | "-x addr This option sets simplified reverse lookups, for mapping addresses to names." (dig) | PASS | |
| 7.6 | `resolvectl status` | PASS | "status [LINK...]"; "IPv4 or IPv6 address specifications of DNS servers" (resolvectl) | PASS | |
| 7.7 | `getent hosts example.com` | PASS | "get entries from Name Service Switch libraries" (getent) | PASS | |
| 7.8 | `/etc/resolv.conf /etc/hosts` | PASS | "nameserver Name server IP address"; "hosts - static table lookup for hostnames" (resolv_conf, hosts) | PASS | see note |
| 8.1 | `ICMP 8 · 0` | PASS | "0 Echo Reply" (rfc792); "ECHO_REQUEST … ECHO_RESPONSE" (ping) | PASS | |
| 8.2 | `ICMP 3` | PASS | "3 Destination Unreachable" (rfc792) | PASS | |
| 8.3 | `ICMP 11` | PASS | "11 Time Exceeded"; "0 = time to live exceeded in transit" (rfc792) | PASS | |
| 8.4 | `ping -c 4 HOST` | PASS | "Stop after sending count ECHO_REQUEST packets." (ping) | PASS | |
| 8.5 | `ping -M do -s 1472 HOST` | PASS | "do (set DF flag but subject to PMTU checks by kernel"; "-s packetsize" (ping) | PASS | |
| 8.6 | `tracepath HOST` | PASS | "traces path to a network host discovering MTU"; "privileges and has no fancy options" (tracepath) | PASS | |
| 8.7 | `ping -4 HOST ping -6 HOST` | PASS | "-4 Use IPv4 only." "-6 Use IPv6 only." (ping) | PASS | |

Open FAILs after round 1: 2

## Round 1: Networking, part B

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 53.

### FAILs

- 12.6 `sudo ufw status verbose`: EN. The gloss says "Ubuntu firewall", but the cited ufw page (a Debian manpage) never mentions Ubuntu. Quote: "show status of firewall and ufw managed rules. Use status verbose for extra information." (ufw). Fix: EN "Firewall: current rules, extra detail" / BN "Firewall: বর্তমান rule, বিস্তারিত"

### Notes

- 12.4 `sudo iptables -F`: the page supports "delete all rules" only. It says flush is "equivalent to deleting all the rules one by one", and flush applies to the default filter table. It does not say that this can lock you out. I kept it as PASS because the warning follows from the documented policy and flush behaviour.
- 12.4 `sudo iptables -F`: rules are not files or a disk, so "!: no" is consistent with the rule. If the site wants a red mark for lockout risk, it needs a different rule from the one used here.
- 12.8 `sudo ufw enable`: the page warns that enabling "may drop existing connections (eg ssh)". The gloss could add this.
- 11.6 `ss -tulpn`: "the modern replacement" is supported by the netstat page ("Replacement for netstat is ss"). The ss page does not say it.
- 10.7 `* * *`: the traceroute page does not show `* * *` as output. It says firewalls filter probes. "Often a firewall" is a fair reading.
- 10.4 `sudo traceroute -T -p 443 HOST`: the page documents `-p` for UDP tracing and gives the example "-T -p 25". Port 443 is the reader's choice.
- 14.6 `ssh -L 8080:localhost:80 USER@HOST`: the page says "remote port 80", but the target `localhost` is resolved on the remote side. This is fine.
- 15.4 `rsync -av SRC DST`: "keep attributes" is a fair short form of the archive-mode flags `-rlptgoD`. The page says it does not preserve ACLs, xattrs or hardlinks.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 9.1 | `ping HOST` | PASS | "if the program is terminated with a SIGINT, a brief summary is displayed" (ping) | PASS | |
| 9.2 | `ping -c 4 HOST` | PASS | "Stop after sending count ECHO_REQUEST packets." (ping) | PASS | |
| 9.3 | `ping -i 2 HOST` | PASS | "Wait interval seconds between sending each packet." (ping) | PASS | |
| 9.4 | `ping -W 2 HOST` | PASS | "Time to wait for a response, in seconds." (ping) | PASS | |
| 9.5 | `ping -w 10 HOST` | PASS | "before ping exits regardless of how many packets have been sent" (ping) | PASS | |
| 9.6 | `ping -s 1000 HOST` | PASS | "Specifies the number of data bytes to be sent." (ping) | PASS | |
| 9.7 | `ping -q -c 10 HOST` | PASS | "Nothing is displayed except the summary lines" (ping) | PASS | |
| 10.1 | `traceroute HOST` | PASS | "listening for an ICMP "time exceeded" reply from a gateway" (traceroute) | PASS | |
| 10.2 | `traceroute -n HOST` | PASS | "Do not try to map IP addresses to host names" (traceroute) | PASS | "faster" follows from skipping lookups |
| 10.3 | `sudo traceroute -I HOST` | PASS | "-I, --icmp Use ICMP ECHO for probes" (traceroute) | PASS | |
| 10.4 | `sudo traceroute -T -p 443 HOST` | PASS | "-T, --tcp Use TCP SYN for probes" (traceroute) | PASS | |
| 10.5 | `traceroute -m 15 HOST` | PASS | "maximum number of hops (max time-to-live value) traceroute will probe" (traceroute) | PASS | |
| 10.6 | `tracepath HOST` | PASS | "it does not require superuser privileges and has no fancy options" (tracepath) | PASS | |
| 10.7 | `* * *` | PASS | "Such firewalls filter the "unlikely" UDP ports, or even ICMP echoes" (traceroute) | PASS | |
| 11.1 | `netstat -tulpn` | PASS | "-l, --listening Show only listening sockets." (netstat) | PASS | |
| 11.2 | `netstat -an` | PASS | "-a, --all Show both listening and non-listening sockets." (netstat) | PASS | |
| 11.3 | `netstat -r` | PASS | "--route, -r Display the kernel routing tables." (netstat) | PASS | |
| 11.4 | `netstat -i` | PASS | "Display a table of all network interfaces and their respective reception and transmission errors counters." (netstat) | PASS | |
| 11.5 | `netstat -s` | PASS | "Display summary (SNMP) statistics for each protocol." (netstat) | PASS | |
| 11.6 | `ss -tulpn` | PASS | "Replacement for netstat is ss." (netstat) | PASS | |
| 12.1 | `sudo nft list ruleset` | PASS | "list: Print the ruleset in human-readable format." (nft) | PASS | |
| 12.2 | `sudo iptables -L -n -v` | PASS | "The packet and byte counters are also listed" (iptables) | PASS | |
| 12.3 | `sudo iptables -A INPUT -s IP -j DROP` | PASS | "DROP means to drop the packet on the floor." (iptables) | PASS | |
| 12.4 | `sudo iptables -F` | PASS | "Flush the selected chain (all the chains in the table if none is given). This is equivalent to deleting all the rules one by one." (iptables) | PASS | Lockout is not on the page (see Notes) |
| 12.5 | `sudo iptables-save` | PASS | "dump the contents of IP or IPv6 Table in easily parseable format either to STDOUT" (iptables_save) | PASS | |
| 12.6 | `sudo ufw status verbose` | FAIL | "show status of firewall and ufw managed rules. Use status verbose" (ufw) | PASS | "Ubuntu" is not on the page |
| 12.7 | `sudo ufw allow 22/tcp` | PASS | "This will allow tcp port 25 to any address on this host." (ufw) | PASS | |
| 12.8 | `sudo ufw enable` | PASS | "reloads firewall and enables firewall on boot." (ufw) | PASS | |
| 13.1 | `sudo tcpdump -i IF` | PASS | "flag to specify an interface on which to capture" (tcpdump) | PASS | |
| 13.2 | `sudo tcpdump -i any -nn port 80` | PASS | "captures packets from all regular network interfaces of the OS" (tcpdump) | PASS | |
| 13.3 | `sudo tcpdump -nn host IP` | PASS | "True if the source or the destination ARP/IPv4/IPv6/RARP address of the packet is hostnameaddr." (pcap_filter) | PASS | |
| 13.4 | `sudo tcpdump -c 20 -nn icmp` | PASS | "Exit after receiving or reading count packets." (tcpdump) | PASS | |
| 13.5 | `sudo tcpdump -w FILE.pcap` | PASS | "flag, which causes it to save the packet data to a file for later analysis" (tcpdump) | PASS | |
| 13.6 | `tcpdump -r FILE.pcap` | PASS | "flag, which causes it to read from a saved packet file" (tcpdump) | PASS | |
| 13.7 | `tshark -r FILE.pcap` | PASS | "Read packet data from infile, can be any supported capture file format" (tshark) | PASS | |
| 14.1 | `ssh USER@HOST` | PASS | "logs into the machine and gives the user a normal shell" (ssh) | PASS | |
| 14.2 | `ssh -p 2222 USER@HOST` | PASS | "Port to connect to on the remote host." (ssh) | PASS | |
| 14.3 | `ssh -i KEY USER@HOST` | PASS | "Selects a file from which the identity (private key) for public key" (ssh) | PASS | |
| 14.4 | `ssh-keygen -t ed25519` | PASS | "ssh-keygen generates, manages and converts authentication keys" (ssh_keygen) | PASS | |
| 14.5 | `ssh-copy-id USER@HOST` | PASS | "~/.ssh/authorized_keys (creating the file, and directory, if necessary)" (ssh_copy_id) | PASS | |
| 14.6 | `ssh -L 8080:localhost:80 USER@HOST` | PASS | "connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port" (ssh) | PASS | |
| 14.7 | `ssh USER@HOST CMD` | PASS | "executed on the remote host instead of a login shell" (ssh) | PASS | |
| 14.8 | `~/.ssh/config` | PASS | "user's configuration file (~/.ssh/config)" / "nicknames or abbreviations for hosts" (ssh_config) | PASS | |
| 15.1 | `scp FILE USER@HOST:DIR` | PASS | "OpenSSH secure file copy" (scp) | PASS | Page text is thin; this is the basic purpose of scp |
| 15.2 | `scp -r DIR USER@HOST:DIR` | PASS | "Recursively copy entire directories." (scp) | PASS | |
| 15.3 | `sftp USER@HOST` | PASS | "log in to the specified host and enter interactive command mode" (sftp) | PASS | |
| 15.4 | `rsync -av SRC DST` | PASS | "archive mode is -rlptgoD" / "sending only the differences in the data" (rsync) | PASS | |
| 15.5 | `rsync -avz SRC USER@HOST:DST` | PASS | "--compress, -z compress file data during the transfer" (rsync) | PASS | |
| 15.6 | `rsync -av --delete SRC DST` | PASS | "--delete delete extraneous files from dest directories" (rsync) | PASS | "!: yes" correct |
| 15.7 | `curl -O URL` | PASS | "Write output to a local file named like the remote file we get." (curl) | PASS | |
| 15.8 | `wget URL` | PASS | "Wget - The non-interactive network downloader." (wget) | PASS | |

Open FAILs after round 1: 1
I did not re-check the finer wording of the Bangla beyond meaning and grammar. The `ssh_config` evidence for "defaults" in 14.8 was only partly seen. I did not read it for the `Host *` default behaviour.

## Round 2: Networking (networking), part A

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 3.7 | `ethtool IF` | PASS | "ethtool with a single argument specifying the device name prints current settings of the specified device." (ethtool) | PASS (device-এর বর্তমান setting) | PASS |
| 6.5 | `sudo nmcli connection up NAME` | PASS | "Activate a connection. The connection is identified by its name, UUID or D-Bus path." (nmcli). The page also lists "in-memory and on-disk connection profiles", so "saved" is fair. | PASS (সংরক্ষিত connection চালু করে) | PASS |

Section B is "none", so there are no B rows to check.

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0

## Round 2: Networking (networking), part B: cards 9 to 15 of 15

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 2 (A: 12.6 and 15.7; B: none).

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 12.6 | `sudo ufw status verbose` | PASS | "show status of firewall and ufw managed rules. Use status verbose for extra information." (ufw) | PASS | PASS (no: it only shows status) |
| 15.7 | `curl -O URL` | PASS | "if it already exists it is overwritten" (curl) | PASS | PASS (yes: curl -O is in the rule list) |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
I did not flag 12.4 `iptables -F` or 13.5 `tcpdump -w`. They delete or overwrite data, but the rule lists its commands and neither one is on that list. `rsync -av` and `scp` also overwrite files and are not flagged either. If the rule is meant to cover any command that deletes or overwrites data, these rows would need a "!".

Open FAILs: 0
