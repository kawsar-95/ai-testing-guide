# Networking (Linux stage 9) — research notes (2026-10-19)

Part A (topics 1–8: Networking, TCP/IP, Ethernet/ARP/RARP, Subnetting, IP Routing, DHCP, DNS Resolution, ICMP) is written. Part B (topics 9–15) appends its own sources from S42 and its own claims from C87. Do not renumber S1–S41.

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `<scratch dir>/stage-networking/` (`NNN.txt`; the number is the position in the fetch list, given after each official source). The roadmap pages were fetched into `<scratch dir>/roadmap-raw/`. The man7.org pages are HTML renderings of man pages (Linux man-pages 6.19, iproute2 6.19). The RFCs are the plain-text files of rfc-editor.org.

Safety rule of this stage: I sent traffic only to 127.0.0.1, `localhost`, and `127.0.0.53` (the local resolver stub). I ran no packet capture, no scan, no `traceroute`, no `ssh`/`scp`, no `sudo`, and no command that changes an interface, address, route, DNS setting, or firewall rule. `ip route get 192.0.2.1` only asks the kernel for a route and sends no packet (S18). The page uses documentation addresses (RFC 5737) and `example.com` in prose.

## Sources
S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. RFC 1122: Requirements for Internet Hosts - Communication Layers — IETF — https://www.rfc-editor.org/rfc/rfc1122.txt — accessed 2026-10-19 (`003.txt`)
S3. RFC 791: Internet Protocol — IETF — https://www.rfc-editor.org/rfc/rfc791.txt — accessed 2026-10-19 (`001.txt`)
S4. RFC 9293: Transmission Control Protocol (TCP) — IETF — https://www.rfc-editor.org/rfc/rfc9293.txt — accessed 2026-10-19 (`002.txt`)
S5. RFC 826: An Ethernet Address Resolution Protocol — IETF — https://www.rfc-editor.org/rfc/rfc826.txt — accessed 2026-10-19 (`004.txt`)
S6. RFC 903: A Reverse Address Resolution Protocol — IETF — https://www.rfc-editor.org/rfc/rfc903.txt — accessed 2026-10-19 (`005.txt`)
S7. RFC 894: A Standard for the Transmission of IP Datagrams over Ethernet Networks — IETF — https://www.rfc-editor.org/rfc/rfc894.txt — accessed 2026-10-19 (`006.txt`; the full RFC title is used in `page.sources` since fix round 1)
S8. RFC 4861: Neighbor Discovery for IP version 6 — IETF — https://www.rfc-editor.org/rfc/rfc4861.txt — accessed 2026-10-19 (`007.txt`)
S9. RFC 4632: Classless Inter-domain Routing (CIDR) — IETF — https://www.rfc-editor.org/rfc/rfc4632.txt — accessed 2026-10-19 (`008.txt`)
S10. RFC 1918: Address Allocation for Private Internets — IETF — https://www.rfc-editor.org/rfc/rfc1918.txt — accessed 2026-10-19 (`009.txt`)
S11. RFC 5737: IPv4 Address Blocks Reserved for Documentation — IETF — https://www.rfc-editor.org/rfc/rfc5737.txt — accessed 2026-10-19 (`010.txt`)
S12. RFC 2131: Dynamic Host Configuration Protocol — IETF — https://www.rfc-editor.org/rfc/rfc2131.txt — accessed 2026-10-19 (`011.txt`)
S13. RFC 1034: Domain Names - Concepts and Facilities — IETF — https://www.rfc-editor.org/rfc/rfc1034.txt — accessed 2026-10-19 (`012.txt`)
S14. RFC 1035: Domain Names - Implementation and Specification — IETF — https://www.rfc-editor.org/rfc/rfc1035.txt — accessed 2026-10-19 (`013.txt`)
S15. RFC 792: Internet Control Message Protocol — IETF — https://www.rfc-editor.org/rfc/rfc792.txt — accessed 2026-10-19 (`014.txt`)
S16. ip(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip.8.html — accessed 2026-10-19 (`015.txt`)
S17. ip-address(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-address.8.html — accessed 2026-10-19 (`016.txt`)
S18. ip-route(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-route.8.html — accessed 2026-10-19 (`017.txt`)
S19. ip-neighbour(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-neighbour.8.html — accessed 2026-10-19 (`018.txt`)
S20. arp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/arp.7.html — accessed 2026-10-19 (`019.txt`)
S21. icmp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/icmp.7.html — accessed 2026-10-19 (`020.txt`; the same page is roadmap #105)
S22. ip(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/ip.7.html — accessed 2026-10-19 (`021.txt`)
S23. tcp(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/tcp.7.html — accessed 2026-10-19 (`022.txt`)
S24. hosts(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/hosts.5.html — accessed 2026-10-19 (`023.txt`)
S25. nsswitch.conf(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/nsswitch.conf.5.html — accessed 2026-10-19 (`024.txt`)
S26. resolv.conf(5) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man5/resolv.conf.5.html — accessed 2026-10-19 (`025.txt`)
S27. systemd-resolved.service(8) — man7.org (systemd) — https://man7.org/linux/man-pages/man8/systemd-resolved.service.8.html — accessed 2026-10-19 (`026.txt`)
S28. resolvectl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/resolvectl.1.html — accessed 2026-10-19 (`027.txt`)
S29. getent(1) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man1/getent.1.html — accessed 2026-10-19 (`028.txt`)
S30. ss(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ss.8.html — accessed 2026-10-19 (`029.txt`)
S31. nmcli — NetworkManager project — https://networkmanager.dev/docs/api/latest/nmcli.html — accessed 2026-10-19 (`031.txt`)
S32. systemd.network(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/systemd.network.5.html — accessed 2026-10-19 (`030.txt`)
S33. dig and delv manual pages — ISC (BIND 9 documentation) — https://bind9.readthedocs.io/en/latest/manpages.html — accessed 2026-10-19 (`032.txt`)
S34. IP Sysctl — Linux kernel documentation (kernel.org) — https://www.kernel.org/doc/html/latest/networking/ip-sysctl.html — accessed 2026-10-19 (`033.txt`)
S35. ip-netns(8) — man7.org (iproute2) — https://man7.org/linux/man-pages/man8/ip-netns.8.html — accessed 2026-10-19 (`034.txt`)
S36. network_namespaces(7) — man7.org (Linux man-pages 6.19) — https://man7.org/linux/man-pages/man7/network_namespaces.7.html — accessed 2026-10-19 (`035.txt`)
S37. ipaddress — Python documentation — https://docs.python.org/3/library/ipaddress.html — accessed 2026-10-19 (`036.txt`)
S38. A Beginner's Guide to Linux Networking Fundamentals — DEV Community (iaadidev) — https://dev.to/iaadidev/a-beginners-guide-to-linux-networking-fundamentals-dev-ops-prerequisite-7-434o — accessed 2026-10-19 (roadmap #152, `152.txt`; #079 is the same page; `page.sources` gives the page title without the site suffix, as the page itself does; the overlap check gives no hit)
S39. The Basics of IP Subnetting — Linux Journal — https://www.linuxjournal.com/article/6287 — accessed 2026-10-19 (roadmap #228, `228.txt`)
S40. Domain name resolution — ArchWiki — https://wiki.archlinux.org/title/Domain_name_resolution — accessed 2026-10-19 (roadmap #064, `064.txt`)
S41. journalctl(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/journalctl.1.html — accessed 2026-10-19 (`037.txt`)
S42. ping(8) — man7.org (iputils) — https://man7.org/linux/man-pages/man8/ping.8.html — accessed 2026-10-19 (`001.txt` of the part B directory)
S43. traceroute(8) — man7.org (traceroute for Linux) — https://man7.org/linux/man-pages/man8/traceroute.8.html — accessed 2026-10-19 (`003.txt`; title shortened in `page.sources` because the overlap check flags the full title)
S44. netstat(8) — man7.org (net-tools) — https://man7.org/linux/man-pages/man8/netstat.8.html — accessed 2026-10-19 (`006.txt`)
S45. The netfilter.org project — Netfilter project — https://netfilter.org/ — accessed 2026-10-19 (roadmap #148, `148.txt` of the roadmap directory; an official page)
S46. What is nftables? — Netfilter project (nftables wiki) — https://wiki.nftables.org/wiki-nftables/index.php/What_is_nftables%3F — accessed 2026-10-19 (`012.txt`)
S47. nft(8) — Netfilter project (netfilter.org manual page) — https://www.netfilter.org/projects/nftables/manpage.html — accessed 2026-10-19 (`008.txt`; the man7.org copy of nft(8) returned 404)
S48. iptables(8) — man7.org (iptables 1.8.13) — https://man7.org/linux/man-pages/man8/iptables.8.html — accessed 2026-10-19 (`009.txt`; title shortened in `page.sources` because the overlap check flags the full title)
S49. iptables-save(8) — man7.org (iptables 1.8.13) — https://man7.org/linux/man-pages/man8/iptables-save.8.html — accessed 2026-10-19 (`101.txt`)
S50. xtables-nft(8) — man7.org (iptables) — https://man7.org/linux/man-pages/man8/xtables-nft.8.html — accessed 2026-10-19 (`102.txt`)
S51. tcpdump(1) — TCPDUMP & LIBPCAP (tcpdump.org; page for tcpdump 5.0.0-PRE-GIT) — https://www.tcpdump.org/manpages/tcpdump.1.html — accessed 2026-10-19 (`016.txt`)
S52. pcap-filter(7) — TCPDUMP & LIBPCAP (tcpdump.org) — https://www.tcpdump.org/manpages/pcap-filter.7.html — accessed 2026-10-19 (`017.txt`)
S53. tshark(1) — Wireshark Foundation — https://www.wireshark.org/docs/man-pages/tshark.html — accessed 2026-10-19 (`018.txt`)
S54. Wireshark User's Guide, Chapter 1: Introduction — Wireshark Foundation — https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html — accessed 2026-10-19 (`019.txt`)
S55. ssh(1) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/ssh — accessed 2026-10-19 (`022.txt`)
S56. ssh_config(5) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/ssh_config — accessed 2026-10-19 (`023.txt`)
S57. sshd_config(5) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/sshd_config — accessed 2026-10-19 (`024.txt`)
S58. ssh-keygen(1) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/ssh-keygen — accessed 2026-10-19 (`025.txt`)
S59. scp(1) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/scp — accessed 2026-10-19 (`030.txt`)
S60. sftp(1) — OpenSSH (man.openbsd.org) — https://man.openbsd.org/sftp — accessed 2026-10-19 (`031.txt`)
S61. OpenSSH 8.0 release notes — OpenSSH — https://www.openssh.com/txt/release-8.0 — accessed 2026-10-19 (`103.txt`)
S62. rsync(1) — rsync project (Samba) — https://download.samba.org/pub/rsync/rsync.1.html — accessed 2026-10-19 (`034.txt`; the plain-text `rsync.1` file, `033.txt`, is the same text)
S63. curl man page — curl project — https://curl.se/docs/manpage.html — accessed 2026-10-19 (`035.txt`)
S64. GNU Wget Manual — GNU Project — https://www.gnu.org/software/wget/manual/wget.html — accessed 2026-10-19 (`036.txt`)
S65. RFC 4217: Securing FTP with TLS — IETF — https://www.rfc-editor.org/rfc/rfc4217.txt — accessed 2026-10-19 (`104.txt`)
S67. OpenSSH 9.0 release notes — OpenSSH — https://www.openssh.com/txt/release-9.0 — accessed 2026-10-19 (`106.txt` of the part B directory; added in fix round 1)
S66. OpenSSH 9.5 release notes — OpenSSH — https://www.openssh.com/txt/release-9.5 — accessed 2026-10-19 (`105.txt` of the part B directory; added in fix round 1)

Local checks (not a citable page): iproute2 6.19.0 (`ip -V`), `ss` 6.19.0, `dig` 9.20.24, systemd-resolved on Ubuntu, Python 3. Read-only commands that I ran: `ip -br addr`, `ip -4 route`, `ip neigh`, `ip -br neigh` (it omits the state column on iproute2 6.19, so the page uses `ip neigh` for states), `ip route show proto dhcp`, `ip route get 192.0.2.1`, `ip -4 addr show lo`, `ss -tuln`, `ss -tn state established`, `getent hosts localhost`, `getent ahosts localhost`, `resolvectl status`, `resolvectl query localhost`, `dig +short @127.0.0.53 localhost`, `nmcli device show`, `cat /etc/resolv.conf /etc/hosts`, `grep ^hosts /etc/nsswitch.conf`, `cat /proc/sys/net/ipv4/{ip_local_port_range,ip_forward}`, `ping -c 1 -W 1 127.0.0.1`. Results that the page uses:
- `ip -4 addr show lo` → `inet 127.0.0.1/8 scope host lo`. `ip -4 -br addr show lo` → `lo UNKNOWN 127.0.0.1/8`.
- `cat /proc/sys/net/ipv4/ip_local_port_range` → `32768 60999`; `ip_forward` can be `1` on a host that routes traffic (the kernel default is 0, S34).
- `getent hosts localhost` → `127.0.0.1 localhost`. `resolvectl query localhost` → `localhost: 127.0.0.1`, "Data from: synthetic". `/etc/resolv.conf` has `nameserver 127.0.0.53`. The `hosts:` line of `nsswitch.conf` starts with `files`.
- `ping -c 1 127.0.0.1` → one reply, `ttl=64`.
- A closed local port (127.0.0.1 port 9) gives `ConnectionRefusedError` for TCP and, on a connected UDP socket, also `ConnectionRefusedError` (the ICMP port unreachable message reaches the program). I use this only as background for the ICMP section. The page states the RFC rule with "may" (C75).
- Python `ipaddress`: `192.0.2.0/26` → netmask `255.255.255.192`, broadcast `192.0.2.63`, 64 addresses, hosts `192.0.2.1` to `192.0.2.62` (62). `192.0.2.70` is in `192.0.2.64/26`, not in `192.0.2.0/26`. `192.0.2.0/24` splits into four /26 blocks.
- `nmcli device show IFACE` printed `IP4.*` lines but no `DHCP4.*` lines, although `ip route` showed `proto dhcp` (another client or an older lease record). The page therefore uses `nmcli -f DHCP4 connection show NAME` (C54, C162), the command under which the nmcli manual lists DHCP4.
- `ip route show proto dhcp` prints the routes without the `proto dhcp` text (the selector hides it).

Roadmap links that I read and did not cite (no fact of the page rests only on them): #151, #078 (A Comprehensive Guide to Linux Networking, CentLinux); #079 (same page as S38); #227 (useful.codes), #229 (howtouselinux, subnet mask), #110 (Linux Journal, IP addresses and routing), #058 (Wikipedia DHCP), #059 (network-guides, DHCP), #063 (ShellHacks resolv.conf), #065 (linuxconfig nslookup), #066 (Linux Handbook dig), #106 (howtouselinux ICMP), #242, #243 (netstat pages; netstat belongs to part B). Their commands (`ifconfig eth0 ... netmask`, `ip addr add`, `ip route add`, `dhclient`, `nmcli con mod`) change settings. The page does not show them.

Not usable as sources (no text): #153 Practice on Networking Fundamentals (linuxjourney.com, `robots`), #241 TCP/IP Commands for Linux (whatismyipaddress.com, `http-403`), #109 Linux Set Up Routing with ip Command (cyberciti.biz, `http-403`). Further reading, title only (video): #080 ARP Explained - Address Resolution Protocol, #081 What is Ethernet?

Conflicts between sources: none that matter. Blogs show `ifconfig` for setting addresses. The page uses `ip`, as the iproute2 pages document it (S16, S17).

## Topic 1: Networking
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C1 | RFC 1122 lists four layers (application, transport, internet, link). It covers the link, IP, and transport layers. | S2 | "The protocol layers used in the Internet architecture are as follows" / "This RFC covers the communications protocol layers: link layer, IP layer, and transport layer" |
| C2 | The application layer is covered by the companion RFC, so the application layer is the fourth layer (see C1). | S2 | "its companion RFC-1123 covers the application and support protocols." |
| C3 | 127.0.0.1 always means the local host through the loopback device. | S22 | "INADDR_LOOPBACK (127.0.0.1) always refers to the local host via the loopback device;" |
| C4 | `ip` shows and manipulates routing, devices, interfaces (iproute2). | S16 | "ip - show / manipulate routing, network devices, interfaces and" |
| C5 | `ip -br` prints basic information in a table for `addr show`, `link show`, `neigh show`. | S16 | "Print only basic information in a tabular format for better readability." |
| C6 | `ss` dumps socket statistics and shows information like `netstat`. | S30 | "ss is used to dump socket statistics. It allows showing information similar to netstat." |
| C7 | A guide calls `ifconfig` deprecated in favor of `ip`, and `ss` a modern replacement for `netstat`. | S38 | "Although deprecated in favor of the ip command, it is still widely used." / "The ss command is a modern replacement for netstat." |
| C8 | A network namespace isolates the devices, routing tables, and firewall rules of its processes. | S36 | "Network namespaces provide isolation of the system resources associated with networking: network devices, IPv4 and IPv6 protocol stacks, IP routing tables, firewall rules" |
| C9 | `ip netns` manages network namespaces. | S35 | "ip-netns - process network namespace management" |

Statements without a cite (definitions of terms for the reader): a protocol is a set of rules; a packet is a small block of data; an interface is a card or a virtual device; a socket is one end of a connection. "A minimal container may lack the old tools" is a hedged tutorial remark (the tools are not in `iproute2`).

## Topic 2: TCP/IP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C10 | IP moves datagrams from a source to a destination host. | S3 | "The internet protocol provides for transmitting blocks of data called datagrams from sources to destinations" |
| C11 | IP gives no acknowledgments, no retransmissions, no flow control. | S3 | "There are no acknowledgments either end-to-end or hop-by-hop." / "There are no retransmissions. There is no flow control." |
| C12 | TCP gives a reliable, in-order byte stream. | S4 | "TCP provides a reliable, in-order, byte-stream service to applications." |
| C13 | UDP uses datagram sockets, TCP uses stream sockets. | S22 | "tcp_socket = socket(AF_INET, SOCK_STREAM, 0);" / "udp_socket = socket(AF_INET, SOCK_DGRAM, 0);" |
| C14 | A socket is an IP address joined with a port. | S4 | "An address that specifically includes a port identifier, that is, the concatenation of an Internet Address with a TCP port." |
| C15 | A connection is a pair of sockets. | S4 | "A connection is defined by a pair of sockets." |
| C16 | By default, ports below 1024 are privileged. Binding needs `CAP_NET_BIND_SERVICE` (see C156 for the sysctl that changes the limit). | S22 | "port numbers below 1024 are called privileged ports" / "that has the CAP_NET_BIND_SERVICE capability in the user namespace" |
| C17 | Default local port range 32768–60999 for automatic source ports. | S34 | "Defines the local port range that is used by TCP and UDP to choose the local port." / "The default values are 32768 and 60999 respectively." |
| C18 | `ss` options: `-t` TCP, `-u` UDP, `-l` listening, `-n` numeric. | S30 | "-t, --tcp Display TCP sockets." / "-l, --listening Display only listening sockets" / "-n, --numeric" |
| C19 | `ss` filter `state established` selects connections in a TCP state. | S30 | "All standard TCP states: established, syn-sent, syn-recv," / "FILTER := [ state STATE-FILTER ] [ EXPRESSION ]" |

Tip text (advice, no cite): a service that listens only on 127.0.0.1 is unreachable from another host (follows from C3); a load test can run short of local ports (follows from C17).

## Topic 3: Ethernet, ARP, and RARP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C20 | An Ethernet address has 48 bits. | S5 | "To actually transmit the Ethernet packet a 48.bit Ethernet address must be generated." |
| C21 | An IP datagram rides in an Ethernet frame whose type field is hex 0800. | S7 | "The type field of the Ethernet frame must contain the value hexadecimal 0800." |
| C22 | An IP datagram on standard Ethernet frames is at most 1500 octets. (The RFC text has a typo "minimum length" in the sentence before; the maximum sentence is the one used.) | S7 | "IP datagrams are transmitted in standard Ethernet frames." / "the maximum length of an IP datagram sent over an Ethernet is 1500 octets." |
| C23 | ARP converts between layer-2 hardware addresses and IPv4 addresses on directly connected networks. | S20 | "It is used to convert between Layer2 hardware addresses and IPv4 protocol addresses on directly connected networks." |
| C24 | The ARP request is broadcast to all stations. | S5 | "this packet to be broadcast to all stations on the Ethernet cable" |
| C25 | The IPv4 neighbour table is the ARP table. | S19 | "The IPv4 neighbour table is also known by another name - the ARP table." |
| C26 | An ARP cache entry becomes stale without positive feedback. | S20 | "When there is no positive feedback for an existing mapping after some time ... a neighbor cache entry is considered stale." |
| C27 | IPv6 uses Neighbor Solicitation instead of ARP. | S8 | "Nodes accomplish address resolution by multicasting a Neighbor Solicitation that asks the target node to return its link-layer address." |
| C27-b | IPv6 uses Neighbor Solicitation instead of ARP (continued) | S8 | "corresponds to a combination of the IPv4 protocols Address Resolution Protocol" |
| C28 | RARP: a host that knows only its hardware address finds its protocol address. | S6 | "a method for workstations to dynamically find their protocol address ... when they know only their hardware address" |
| C29 | DHCP gives a client all its IP settings. | S12 | "DHCP provides the mechanism for a client to acquire all of the IP configuration parameters that it needs in order to operate." |
| C30 | Neighbour states `incomplete` (not yet resolved) and `failed` (probes ran out). | S19 | "incomplete the neighbour entry has not (yet) been validated/resolved." / "failed max number of probes exceeded without success" |
| C31 | `ip neigh` shows ARP or NDISC cache entries. | S16 | "neighbour - manage ARP or NDISC cache entries." |

Statements without a cite: a frame is the link-layer unit; "DHCP covers the same need" is a summary of C28 and C29; two hosts with one IP can show changing MAC addresses (tutorial advice, hedged with "can").

## Topic 4: Subnetting
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C32 | CIDR writes a prefix as address, slash, and a number from 0 to 32 of significant bits. | S9 | "followed by the "/" (slash) character, followed by a decimal value between 0 and 32 that describes the number of significant bits." |
| C33 | The address ANDed with the subnet mask gives the network address. | S39 | "Your IP address and your subnet mask are bitwise "and"ed together" |
| C34 | The first address of a subnet is the network address. The subnet has a broadcast address too. | S39 | "You are required to have a base network address and a broadcast address for every subnet." |
| C35 | Directed broadcast: the host field is all 1 bits. | S2 | "{ <Network-number>, -1 } Directed broadcast to the specified network." / "the notation "-1" for a field that contains all 1 bits." |
| C36 | RFC 1918 private blocks: 10/8, 172.16/12, 192.168/16. | S10 | "10.0.0.0 - 10.255.255.255 (10/8 prefix)" / "172.16.0.0 - 172.31.255.255 (172.16/12 prefix)" / "192.168.0.0 - 192.168.255.255 (192.168/16 prefix)" |
| C37 | RFC 5737 documentation blocks. | S11 | "The blocks 192.0.2.0/24 (TEST-NET-1), 198.51.100.0/24 (TEST-NET-2), and 203.0.113.0/24 (TEST-NET-3) are provided for use in documentation." |
| C38 | `ip addr` writes an address as a prefix (address/length). | S17 | "IFADDR := PREFIX \| ADDR peer PREFIX [ broadcast ADDR ]" (syntax line) |
| C39 | Python `ipaddress` has `ip_network`, `netmask`, `broadcast_address`, `num_addresses`. | S37 | "ipaddress.ip_network(address, strict=True)" / "broadcast_address" / "The network address for the network." |

Arithmetic (local check with S37, see above): /26 has 6 host bits, 64 addresses, 62 for hosts, mask 255.255.255.192, broadcast 192.0.2.63. The page states these as the worked example. A gateway is "the router that leads out of the subnet" (gloss; see C44 for `via`).

## Topic 5: IP Routing
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C40 | Forwarding uses the longest match. | S9 | "Forwarding in the Internet is done on a longest-match basis." |
| C41 | 0.0.0.0/0 is the default route. | S9 | "the degenerate route to prefix 0.0.0.0/0 is used as a default route" |
| C42 | `ip` writes the default route as `default`. | S18 | "There is also a special PREFIX default - which is equivalent to IP 0/0 or to IPv6 ::/0." |
| C43 | `ip route show` lists the main table. All normal routes go to the main table. | S18 | "By default all normal routes are inserted into the main table (ID 254)" / "show dumps all the IP main routing table" |
| C44 | `via` names the next router (gateway) of a route. | S18 | "NH := [ encap ENCAP ] [ via [ FAMILY ] ADDRESS ] [ dev STRING ]" (syntax line) |
| C45 | `proto kernel`: the kernel installed the route during autoconfiguration. | S18 | "kernel - the route was installed by the kernel during autoconfiguration." |
| C46 | The `proto` field gives the routing protocol identifier of the route. | S18 | "the routing protocol identifier of this route." |
| C47 | `ip route get` shows the route the kernel would use and sends no packet. | S18 | "get is equivalent to sending a packet along this path" / "however, no packets are actually sent." |
| C48 | `blackhole` drops silently. `unreachable` drops and sends ICMP host unreachable. | S18 | "blackhole - these destinations are unreachable. Packets are discarded silently." / "Packets are discarded and the ICMP message host unreachable is generated." |
| C49 | Linux does not forward between interfaces by default (`ip_forward` = 0). | S34 | "Forward Packets between interfaces." / "Default: 0 (disabled)" |
| C50 | `ip route` manipulates the kernel routing tables. `add`, `del`, `replace`, `flush` exist. | S18 | "ip route is used to manipulate entries in the kernel routing tables." |
| C50-b | `ip route` manipulates the kernel routing tables (continued) | S18 | "ip route { add \| del \| change \| append \| replace } ROUTE" / "ip route { show \| flush } SELECTOR" |
| C51 | A namespace has its own routing tables, so route tests can run in one. | S36 | "IP routing tables, firewall rules" (inside the C8 quote) |

Danger callout: it states that these commands change the kernel routing table (C50). That a deleted default route cuts an SSH session follows from C42 and C41; it is the tutorial's own warning. `ip netns add` needs privileges; the page says only "a network namespace that you made for the test".

## Topic 6: DHCP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C52 | DHCP gives a client an address and other IP settings. A lease is a fixed period of time that may be infinite; the page says "a limited time that the client can extend". | S12 | "A client acquires a lease for a network address for a fixed period of time (which may be infinite)." |
| C52-b | DHCP gives a client an address and other IP settings (continued) | S12 | "DHCP provides the mechanism for a client to acquire all of the IP configuration parameters" |
| C53 | The four steps: DISCOVER (broadcast on the local subnet), OFFER, REQUEST, ACK. | S12 | "The client broadcasts a DHCPDISCOVER message on its local physical subnet." / "DHCPOFFER - Server to client in response to DHCPDISCOVER" |
| C53-b | The four steps: DISCOVER (broadcast on the local subnet), OFFER, REQUEST, ACK (continued) | S12 | "DHCPACK - Server to client with configuration parameters, including committed network address." |
| C54 | `nmcli -f DHCP4 connection show NAME` prints the DHCP4 properties of an active connection. (The fact-check found that `nmcli device show` has no DHCP4 lines; the page now uses `connection show`.) | S31 | "nmcli connection show ID" / "For active data use GENERAL, IP4, DHCP4, IP6, DHCP6, VPN." |
| C55 | T1 defaults to half of the lease time. T2 defaults to 0.875 of it. At T2 the client asks any server. | S12 | "T1 defaults to (0.5 * duration_of_lease). T2 defaults to (0.875 * duration_of_lease)." / "REBINDING state and attempts to contact any server." |
| C56 | `systemd-networkd` starts a DHCP client with `DHCP=`. The default is `no`. | S32 | "Enables DHCPv4 and/or DHCPv6 client support. Accepts "yes", "no", "ipv4", or "ipv6". Defaults to "no"." |
| C57 | `journalctl -u UNIT` shows messages of one unit. | S41 | "Show messages for the specified systemd unit UNIT (such as a service unit)" |
| C58 | `ip route show proto dhcp` selects routes with one protocol tag. A tag is not reserved: other clients can use another tag (see C160). | S18 | "protocol RTPROTO only list routes of this protocol." (the `show` selector `proto RTPROTO`) |
| C59 | `nmcli connection up` activates a connection (which can start the DHCP client). | S31 | "Activate a connection." / "nmcli con up default" in the DHCP-profile example |

Inference (marked in the page by "can"): activating a connection can start a DHCP exchange (C59 with C54). A restart of the network service can do the same (tutorial warning). The remark "Read their logs with journalctl -u UNIT" does not name the unit, because the unit name depends on the distribution.

## Topic 7: DNS Resolution
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C60 | Name servers hold the data. A resolver extracts it for clients. | S13 | "NAME SERVERS are server programs which hold information about the domain tree's structure and set information." |
| C60-b | Name servers hold the data (continued) | S13 | "RESOLVERS are programs that extract information from name servers in response to client requests." |
| C61 | The resolver is C-library code. | S26 | "The resolver is a set of routines in the C library that provide access to the Internet Domain Name System (DNS)." |
| C62 | TTL: how long a record may be cached. | S13 | "The meaning of the TTL field is a time limit on how long an RR can be kept in a cache." |
| C63 | TTL in the record format. | S14 | "a 32 bit signed integer that specifies the time interval that the resource record may be cached" |
| C64 | The order of services on the `hosts:` line is the order of use. | S25 | "The order of the services on the line determines the order in which those services will be queried, in turn, until a result is found." |
| C65 | The `hosts` database is `/etc/hosts`; for it, `dns` can be added as a service. | S25 | "hosts /etc/hosts" / "For the hosts database, you can additionally specify "dns"." |
| C66 | `/etc/hosts` has one line per IP: address, canonical name, aliases. | S24 | "IP_address canonical_hostname [aliases...]" |
| C67 | `getent hosts NAME` shows entries from the NSS databases. | S29 | "The getent command displays entries from databases supported by the Name Service Switch libraries" |
| C68 | `resolv.conf`: up to 3 `nameserver` lines, `search`, `options`, `timeout:n` default 5 s. | S26 | "Up to MAXNS (currently 3, see <res_state.h>) name servers may be listed" / "search Search list for host-name lookup." / "the default is RES_TIMEOUT (currently 5" |
| C69 | The glibc resolver does not cache. | S40 | "The glibc resolver does not cache queries." |
| C70 | Network managers tend to overwrite `/etc/resolv.conf`. | S40 | "Network managers tend to overwrite /etc/resolv.conf" |
| C71 | systemd-resolved has a stub listener on 127.0.0.53. | S27 | "systemd-resolved provides a local DNS stub listener on the IP addresses 127.0.0.53 and 127.0.0.54" |
| C72 | `resolv.conf` can be a symlink to the stub file (resolved reads it otherwise). | S27 | "only if it is not a symlink to /run/systemd/resolve/stub-resolv.conf" |
| C73 | `resolvectl status` shows the DNS settings in effect. | S28 | "Shows the global and per-link DNS settings currently in effect." |
| C74 | `dig` asks the servers of `resolv.conf`; no search list by default; `+search` turns it on. | S33 | "Unless it is told to query a specific name server, dig tries each of the servers listed in /etc/resolv.conf." |
| C74-b | `dig` asks the servers of `resolv (continued) | S33 | "The search list is not used by default." |

Inference: `dig` can disagree with `getent` because `dig` is "a flexible tool for interrogating DNS name servers" (S33) and does not read `/etc/hosts`, while `getent hosts` follows `nsswitch.conf` (C64, C67). The `dig` page does not state "dig ignores /etc/hosts" in those words. `resolvectl query` resolves names (S28: "Resolve domain names, as well as IPv4 and IPv6 addresses."). The TTL advice in the tip rests on S13: "If a change can be anticipated, the TTL can be reduced prior to the change to minimize inconsistency".

## Topic 8: ICMP
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C75 | ICMP reports errors and control information for IP. A closed UDP port may bring a port unreachable message. | S15 | "the destination host may send a destination unreachable message to the source host." (when the "process port is not active") / "3 = port unreachable;" |
| C76 | ICMP messages use the IP header. The first octet is the Type. | S15 | "ICMP messages are sent using the basic IP header. The first octet of the data portion of the datagram is a ICMP type field" |
| C77 | ICMP does not make IP reliable. | S15 | "The purpose of these control messages is to provide feedback about problems in the communication environment, not to make IP reliable." |
| C78 | Echo request is type 8, echo reply is type 0. | S15 | "8 for echo message; 0 for echo reply message." |
| C79 | Destination unreachable is type 3. Codes 0 net, 1 host, 3 port, 4 fragmentation needed and DF set. | S15 | "0 = net unreachable;" / "1 = host unreachable;" / "3 = port unreachable;" / "4 = fragmentation needed and DF set;" |
| C80 | Time exceeded is type 11, code 0 = TTL exceeded in transit. | S15 | "11" / "0 = time to live exceeded in transit;" |
| C81 | The kernel answers ICMP requests itself. It limits the rate of ICMP errors. | S21 | "The kernel ICMP module also answers ICMP requests." / "Linux limits the rate of ICMP error packets to each destination." |
| C82 | `icmp_echo_ignore_all` makes the kernel ignore echo requests. `icmp_ratelimit` is the minimum gap in ms. | S34 | "If enabled, then the kernel will ignore all ICMP ECHO requests sent to it." / "otherwise the minimal space between responses in milliseconds." |
| C83 | A closed TCP port gets a reset. | S4 | "An incoming segment not containing a RST causes a RST to be sent in response." (state CLOSED) |
| C84 | If TCP cannot get through, it retries and then reports `ETIMEDOUT`. | S23 | "When a network error occurs, TCP tries to resend the packet. If it doesn't succeed after some time, either ETIMEDOUT or the last received error" |
| C85 | The fragmentation-needed message supports path MTU discovery. | S21 | "The limit does not affect sending of ICMP_FRAG_NEEDED packets needed for path MTU discovery." |
| C86 | TTL: each router lowers it, the packet is dropped at zero. | S15 | "as this field is decremented at each machine in which the datagram is processed" |
| C86-b | TTL: each router lowers it, the packet is dropped at zero (continued) | S15 | "finds the time to live field is zero it must discard the datagram." |

Statements without a cite: TTL gloss "a counter in the IP header" (C86); an echo reply proves only that IP works up to the host (follows from C78 and C77).

## Part B (topics 9–15)

Fetch note (part B): the official pages of S42–S65 are in `<scratch dir>/stage-networking-b/` (`NNN.txt` from `scripts/linux_fetch.py`; `101.txt`–`104.txt` are copies of pages that were fetched in extra runs, so that the overlap check sees them). The numbers are given after each source. S45 is roadmap link #148. The other roadmap links of topics 9–15 were read and are not cited (see below). Fetch results: the man7.org page of nft(8) (`404`), the netfilter.org page of iptables (`404`), the Wireshark guide page on capture privileges (`404`), and the OpenBSD page of ssh-copy-id (`404`) failed, so the page states nothing that only they could support. The Netfilter hooks page of the nftables wiki timed out.

Safety rule (part B): I sent traffic only to 127.0.0.1 and `localhost` (`ping -c 3 127.0.0.1`, a local `python3 -m http.server` on 127.0.0.1:18080 with `curl` and `wget -c`). I ran no capture (tcpdump only read a pcap file that I made with Python; no tshark), no `traceroute`, no `mtr`, no `nmap`, no `ssh`/`scp`/`sftp` to another host, no `sudo`, and no firewall or network change. Local rsync tests used a temporary directory. I made one ed25519 key in a sandbox directory and ran `ssh-keygen -lf` on it, and `ssh -G -F /dev/null localhost` (it prints settings and does not connect).

Local checks (part B; not citable pages): iputils `ping` 20250605, OpenSSH 10.2p1, rsync 3.4.1, curl 8.18.0, GNU Wget 1.25.0, tcpdump 4.99.6 / libpcap 1.10.6, iptables v1.8.11 (nf_tables), nftables v1.1.6, iproute2 6.19.0.
- `ping -c 3 127.0.0.1` → three replies `ttl=64`, summary with `rtt min/avg/max/mdev`, exit 0.
- `iptables -V` → `iptables v1.8.11 (nf_tables)`.
- `ss -tlnp 'sport = :18080'` with a local python server → one `LISTEN` line with `users:(("python3",pid=...,fd=3))`. With no listener it prints only the header line. `ss -tlnp` (no root) fills the Process column only for sockets of my own user.
- `ssh-keygen -t ed25519 -N '' -f <sandbox>/test_key` → file mode 600 (private) and 644 (public); `ssh-keygen -lf` → `256 SHA256:... test-key (ED25519)`.
- `ssh -G -F /dev/null localhost` → `port 22`, `stricthostkeychecking ask`, `batchmode no`, `forwardagent no`, `passwordauthentication yes`; with `-o StrictHostKeyChecking=accept-new -o BatchMode=yes -o ConnectTimeout=5 -p 2222` it shows those values.
- `rsync -avn src/app/ dst/` lists `a.txt` and `b.txt`; without the slash it lists `app/`, `app/a.txt`, `app/b.txt`; `rsync -avn --delete src/app/ dst/` lists `deleting old.txt` and changes nothing; `rsync -ai` printed `>f+++++++++ a.txt`.
- `curl -fsS -o a.txt http://127.0.0.1:18080/a.txt` → exit 0; for a missing file → `curl: (22) The requested URL returned error: 404`, exit 22. `wget -q -c ... -O` → exit 0.
- A synthetic pcap (one TCP SYN, documentation addresses) read with `tcpdump -n -r demo.pcap` → `IP 198.51.100.7.40000 > 192.0.2.10.8080: Flags [S], seq 1000, win 64240, length 0`. The filter `tcp port 8080` matched it, `port 9999` did not. `tcpdump -D` (no root) lists interfaces, including `lo [Up, Running, Loopback]`.
- Not run (not available or not allowed): `traceroute`, `tshark`, `iptables -S`, `nft list ruleset` (root), `netstat`.

Roadmap links that I read and did not cite (no fact of the page rests only on them): #172 (linuxize ping), #173 (It's FOSS ping), #252 (Linux Handbook traceroute), #253 (How-To Geek traceroute), #149 and #243 (Linux Handbook netstat; the same page), #150 (How-To Geek netstat), #242 (phoenixnap netstat), #147 (wyssmann packet filtering blog), #163 (debian.org apt-guide; the page is not about tcpdump, 815 bytes), #164 (ittrip), #165 (linuxlinks), #218 (Wikipedia: Secure Shell), #219 (socketxp SSH), #088 (linuxize ftp), #089 (linuxize rsync), #090 (Linux Handbook scp), #091 (linuxize wget). #220 (Cloudflare, `http-403`) has no text. The blogs show the same commands that the official pages document. Their examples that change systems (`iptables -A`, `ufw`, `sudo tcpdump`, `ssh-copy-id`) are not copied.

Conflicts between sources: the scp(1) manual says that `scp` now uses the SFTP protocol (since OpenSSH 9.0), and the OpenSSH 8.0 notes call the old scp protocol outdated. The page says both, and names the old protocol where it applies. The ping(8) manual calls `ping` in automated scripts unwise because of the load. The page tip says to test the TCP port first and to keep a ping to one request.

## Topic 9: ping
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C87 | `ping` sends ICMP echo requests and waits for echo replies. | S42 | "ping uses the ICMP protocol's mandatory ECHO_REQUEST datagram to elicit an ICMP ECHO_RESPONSE from a host or gateway." |
| C88 | Each reply prints the TTL. The summary has loss and min/avg/max/mdev of the round-trip time. | S42 | "In normal operation ping prints the TTL value from the packet it receives." / "Round-trip times and packet loss statistics are computed." / "minimum/average/maximum/mdev round-trip time numbers" |
| C89 | The page describes the Linux iputils `ping`. | S42 | "The version described here is its descendant specific to Linux." / "ping is part of iputils package." |
| C90 | Options `-c`, `-W`, `-w`, `-i` (below 2 ms: root), `-n`. | S42 | "Stop after sending count ECHO_REQUEST packets." / "Time to wait for a response, in seconds." |
| C90-b | Options `-c`, `-W`, `-w`, `-i` (below 2 ms: root), `-n` (continued) | S42 | "Specify a timeout, in seconds, before ping exits regardless of how many packets have been sent or received." |
| C90-c | Options `-c`, `-W`, `-w`, `-i` (below 2 ms: root), `-n` (continued) | S42 | "Only super-user may set interval to values less than 2 ms." / "Numeric output only." |
| C91 | Exit status 0, 1, 2. | S42 | "If ping does not receive any reply packets at all it will exit with code 1." |
| C91-b | Exit status 0, 1, 2 (continued) | S42 | "On other error it exits with code 2. Otherwise it exits with code 0." |
| C92 | `CAP_NET_RAW` is needed if the user may not create an ICMP echo socket. | S42 | "ping requires CAP_NET_RAW capability to be executed" ... "if the user is not allowed to create an ICMP echo socket." |
| C93 | The manual calls `ping` in automated scripts unwise because of the load. Flood mode is not recommended. | S42 | "Because of the load it can impose on the network, it is unwise to use ping during normal operations or from automated scripts." |
| C93-b | The manual calls `ping` in automated scripts unwise because of the load (continued) | S42 | "Flood pinging is not recommended in general" |

Statements without a cite: "an echo request is a small test message that asks a host to answer" (gloss); "a locked-down container can fail for this reason" (inference from C92; hedged with "can"); the reply-line sequence number is from the local run (`icmp_seq=1`). The sample line in the code block is real output of `ping -c 3 127.0.0.1`. The CI advice is the tutorial's own.

## Topic 10: traceroute
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C94 | `traceroute` uses the TTL field to elicit ICMP time exceeded from each gateway. | S43 | "It utilizes the IP protocol's time to live (TTL) field and attempts to elicit an ICMP TIME_EXCEEDED response from each gateway" |
| C95 | TTL starts at 1 and grows by 1. Max 30 hops by default. 3 probes per hop by default. `*` for no reply. | S43 | "We start our probes with a ttl of one and increase by one" / "which defaults to 30 hops" |
| C95-b | TTL starts at 1 and grows by 1 (continued) | S43 | "Three probes (by default) are sent at each ttl setting" / "an "*" (asterisk) is printed for that probe." |
| C96 | Default probes: UDP to unlikely ports from 33434; unprivileged users may use them. | S43 | "The "unlikely" port of the first probe is 33434" / "This method is allowed for unprivileged users." |
| C97 | Firewalls filter the UDP ports and ICMP echo. `-I` ICMP echo, `-T` TCP SYN, `-p` port. | S43 | "Such firewalls filter the "unlikely" UDP ports, or even ICMP echoes." / "-I, --icmp Use ICMP ECHO for probes" / "-T, --tcp Use TCP SYN for probes" |
| C97-b | Firewalls filter the UDP ports and ICMP echo (continued) | S43 | "For TCP and others specifies just the (constant) destination port to connect." |
| C98 | `-n` skips name lookups. `-m` sets the maximum hops. | S43 | "Do not try to map IP addresses to host names when displaying them." / "Specifies the maximum number of hops (max time-to-live value) traceroute will probe." |
| C99 | Routers can rate-limit ICMP, so a star is not always a fault. | S43 | "Note that some routers and hosts can use ICMP rate throttling." / "Useful when some routers use rate-limit for ICMP messages." |
| C100 | `-T -p PORT` can reach a host when `-I` cannot. | S43 | "If we trace for some, say, mailserver, then more likely -T -p 25 can reach it, even when -I can not." |

Statements without a cite: a hop is one router (gloss; "gateway along the path" in C94); "a minimal image can lack the tool" (hedged). The example output in the code block is an illustration with documentation addresses (RFC 5737, S11) and is not real output; its format follows the manual's description "ttl, address of the gateway and round trip time of each probe". The danger callout (scanning without permission) is the tutorial's own warning and has no source. `traceroute` was not run here.

## Topic 11: netstat
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C101 | `netstat` prints connections, routing tables, interface statistics; it is part of net-tools. | S44 | "netstat - print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships" / footer "net-tools" |
| C102 | The manual calls it mostly obsolete and names the replacements. | S44 | "This program is mostly obsolete. Replacement for netstat is ss." / "Replacement for netstat -r is ip route. Replacement for netstat -i is ip -s link." |
| C102-b | The manual calls it mostly obsolete and names the replacements (continued) | S44 | "Replacement for netstat -g is ip maddr." |
| C103 | `netstat -l` listening only. `-n` numbers. (`-t`, `-u` select TCP and UDP.) | S44 | "--listening, -l Show only listening sockets." / "--numeric, -n Show numerical addresses instead of trying to determine symbolic host, port or user names." |
| C104 | Without `-n`, `netstat` resolves addresses and ports to names. | S44 | "Unless the --numeric (-n) option is specified, the socket address is resolved to its canonical host name (FQDN)" |
| C105 | `-p` shows PID and program. Other users' sockets need superuser. | S44 | "--program Show the PID and name of the program (this is not trustworthy) to which each socket belongs." |
| C105-b | `-p` shows PID and program (continued) | S44 | "You will also need superuser privileges to see this information on sockets you don't own." |
| C106 | State `LISTEN` and `TIME_WAIT`. | S44 | "LISTEN The socket is listening for incoming connections." / "TIME_WAIT The socket is waiting after close to handle packets still in the network." |
| C107 | `ss` has `-t`, `-u`, `-l`, `-n` (see C18) and the filter `sport = :PORT`. | S30 | "-t, --tcp Display TCP sockets." / "{dport\|sport} [OP] [FAMILY:]:PORT" / example "ss -o state established '( dport = :ssh or sport = :ssh )'" |

Statements without a cite: a socket is one end of a connection (gloss, as in topic 1); "a minimal container can have neither tool" (hedged; `ss` is part of iproute2 (S30), which a minimal image may omit, and `netstat` is in the old net-tools package). `ss -p` shows the processes of the own user only: local observation (the Process column was empty for sockets of other users). The code-block example runs a local Python server on 127.0.0.1:18080; I ran it and `ss -tlnp 'sport = :18080'` showed the listener. The tip (check the port before and after a run) is the tutorial's own advice.

## Topic 12: Netfilter
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C108 | Netfilter hooks let kernel modules register callbacks in the network stack. | S45 | "The netfilter hooks are a framework inside the Linux kernel that allows kernel modules to register callback functions" |
| C109 | `iptables` and its successor `nftables`. | S45 | "iptables is a generic firewalling software that allows you to define rulesets." / "nftables is the successor of iptables" |
| C110 | Tables hold chains. A chain is a list of rules. A rule has criteria and a target (`ACCEPT`, `DROP`). | S48 | "Each table contains a number of built-in chains and may also contain user-defined chains." |
| C110-b | Tables hold chains (continued) | S48 | "Each chain is a list of rules which can match a set of packets." / "A firewall rule specifies criteria for a packet and a target." |
| C110-c | Tables hold chains (continued) | S48 | "ACCEPT means to let the packet through. DROP means to drop the packet on the floor." |
| C111 | If no rule decides, the chain policy decides; policy is ACCEPT or DROP. | S48 | "the target specified by the chain policy determines the fate of the packet." / "The policy target must be either ACCEPT or DROP." |
| C112 | `nft` is the new tool with a different syntax. No predefined tables or chains. Family `inet` sees IPv4 and IPv6. | S46 | "It comes with a new command line utility nft whose syntax is different to iptables." / "With nftables there are no pre-defined tables or chains." |
| C112-b | `nft` is the new tool with a different syntax (continued) | S46 | "the new inet family that allows you to register base chains that see both IPv4 and IPv6 traffic" |
| C113 | The `iptables` command can be a front end to nftables; the version string says so. | S50 | "xtables-nft are versions of iptables that use the nftables API." |
| C113-b | The `iptables` command can be a front end to nftables; the version string says so (continued) | S50 | "The iptables version string will indicate whether the legacy API (get/setsockopt) or the new nf_tables api is used" / "iptables v1.7 (nf_tables)" |
| C114 | `iptables -F` flushes (deletes) rules. | S48 | "Flush the selected chain (all the chains in the table if none is given). This is equivalent to deleting all the rules one by one." |
| C115 | `nft flush ruleset` removes all tables. | S47 | "Clear the whole ruleset. Note that, unlike iptables, this will remove all tables and whatever they contain" |
| C116 | `iptables-save` dumps rules to stdout or a file. `nft list ruleset` output can be input to `nft -f`. | S49, S47 | "used to dump the contents of IP or IPv6 Table in easily parseable format either to STDOUT or to a specified file" |
| C116-b | `iptables-save` dumps rules to stdout or a file (continued) | S49, S47 | "By design, list ruleset command output may be used as input to nft -f." |
| C117 | `nft -c` checks a file and applies nothing. | S47 | "Check commands validity without actually applying the changes." |
| C118 | A namespace has its own firewall rules (C8). | S36 | "Network namespaces provide isolation of the system resources associated with networking" ... "firewall rules" |
| C119 | The ruleset is what is "in place in kernel". | S47 | "The ruleset keyword is used to identify the whole set of tables, chains, etc. currently in place in kernel." |
| C120 | A drop policy needs an accept rule, or all packets drop (nft). | S47 | "the same base chain ... must contain at least one matching accept rule or the packet will be dropped." |

Statements without a cite: a firewall is a set of rules that accepts or drops packets (gloss); "a DROP policy without an SSH accept rule cuts your own session" follows from C111 and C120; "rules live in kernel memory, so a reboot can remove unsaved rules" is the tutorial's own warning, based on C119 (the manuals fetched do not describe boot-time loading, which differs by distribution; the page does not describe it). I could not run `iptables -S`, `iptables -L`, or any `nft` command (root); `iptables -V` ran. The man7.org page of nft(8) gave 404, so S47 is the netfilter.org page. On "on some hosts": `iptables -V` can show `(nf_tables)` or `(legacy)`, and S50 describes the mechanism. The `-F` and `flush ruleset` sentence does not say that the two commands do the same: C114 and C115 differ (see the nft manual: "unlike iptables").

## Topic 13: Packet Analysis
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C121 | `tcpdump` prints packets that match an expression (pcap-filter syntax). `-w` saves, `-r` reads. | S51 | "tcpdump prints out a description of the contents of packets on a network interface that match the Boolean expression" |
| C122 | Reading live packets can need special privileges. Reading a file does not. | S51 | "Reading packets from a network interface may require that you have special privileges" / "Reading a saved packet file doesn't require special privileges." |
| C123 | `-i` (`any` = all interfaces), `-c`, `-n`, `-w`, `-r`. | S51 | "an interface argument of ``any'' means a special pseudo-interface, which captures packets from all regular network interfaces" / "Exit after receiving or reading count packets." |
| C123-b | `-i` (`any` = all interfaces), `-c`, `-n`, `-w`, `-r` (continued) | S51 | "Don't convert addresses (i.e., host addresses, port numbers, etc.) to names." / "Write the raw packets to file rather than parsing and printing them out." |
| C123-c | `-i` (`any` = all interfaces), `-c`, `-n`, `-w`, `-r` (continued) | S51 | "Read packets from file" |
| C124 | pcap file: files written with `-w`; extension `.pcap`. | S51 | "The filename extension .pcap appears to be the most commonly used along with .cap and .dmp." |
| C125 | Filters use primitives (`host`, `port`, `tcp`) joined by `and`, `or`, `not`. | S52 | "More complex filter expressions are built up by using the words and, or and not" |
| C125-b | Filters use primitives (`host`, `port`, `tcp`) joined by `and`, `or`, `not` (continued) | S52 | "Possible types are host, net, proto, port, portrange, protochain and gateway." |
| C126 | `tshark -f` capture filter (pcap syntax); `-Y` display filter; capture filters are more efficient. | S53 | "The -f option is used to specify a capture filter." / "a display filter is specified with the -Y option." |
| C126-b | `tshark -f` capture filter (pcap syntax); `-Y` display filter; capture filters are more efficient (continued) | S53 | "capture filters are much more efficient than display filters" |
| C127 | The Wireshark guide lists QA engineers as users. | S54 | "QA engineers use it to verify network applications" |
| C128 | `-A` and `-X` print the payload. | S51 | "Print each packet (minus its link level header) in ASCII." / "print the data of each packet (minus its link level header) in hex and ASCII" |

Statements without a cite: "a packet capture is a copy of the packets that pass a network interface" and "a pcap file is a saved capture" (glosses, with C121 and C124); `tshark` is "the command-line tool of Wireshark" (S53 describes "TShark is a network protocol analyzer"; the tool belongs to the Wireshark project, which S54 and the URL show). The tip and the danger callout are the tutorial's own advice. The line `tcpdump -n -i lo -c 100 -w test.pcap 'tcp port 8080'` was not run (needs root). The read line `tcpdump -n -r test.pcap` was run on a synthetic pcap (see the local checks); the shown output line is from it. The `tshark` line was not run; `ip.addr` is a display-filter field that the tshark manual uses in an example (`ip.addr==1.2.3.4`). `tcpdump -D` ran without root.

## Topic 14: SSH
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C129 | `ssh` logs in and runs commands on a remote machine over an encrypted channel. | S55 | "ssh (SSH client) is a program for logging into a remote machine and for executing commands on a remote machine." |
| C129-b | `ssh` logs in and runs commands on a remote machine over an encrypted channel (continued) | S55 | "secure encrypted communications between two untrusted hosts" |
| C130 | `sshd` is the OpenSSH daemon; default port 22. | S57 | "sshd_config — OpenSSH daemon configuration file" / "Specifies the port number that sshd(8) listens on. The default is 22." |
| C131 | Key pair: the server knows the public key; only the user knows the private key. `authorized_keys` lists the allowed public keys. | S55 | "The server knows the public key, and only the user knows the private key." |
| C131-b | Key pair: the server knows the public key; only the user knows the private key (continued) | S55 | "The file ~/.ssh/authorized_keys lists the public keys that are permitted for logging in." |
| C132 | `ssh-keygen` makes Ed25519 keys by default; the default changed in OpenSSH 9.5 (S66). | S58, S66 | "If invoked without any arguments, ssh-keygen will generate an Ed25519 key." / S66: "ssh-keygen(1): generate Ed25519 keys by default." |
| C133 | `ssh` ignores a private key that others can access (mode 0600 is the usual mode). | S55 | "ssh will simply ignore a private key file if it is accessible by others." |
| C134 | Host keys are stored in `~/.ssh/known_hosts`. A changed key gives a warning and disables password login. | S55 | "Host keys are stored in ~/.ssh/known_hosts in the user's home directory." / "If a host's identification ever changes, ssh warns about this and disables password authentication" |
| C135 | `StrictHostKeyChecking`: `accept-new` adds new keys and refuses changed keys. `no` lets changed keys pass, subject to some restrictions. | S56 | "accept-new then ssh will automatically add new host keys to the user's known_hosts file, but will not permit connections to hosts with changed host keys" |
| C135-b | `StrictHostKeyChecking`: `accept-new` adds new keys and refuses changed keys (continued) | S56 | "allow connections to hosts with changed hostkeys to proceed, subject to some restrictions" |
| C136 | `StrictHostKeyChecking yes` gives maximum protection against MITM. | S56 | "This provides maximum protection against man-in-the-middle (MITM) attacks" |
| C137 | `UserKnownHostsFile` names the user host key database; `none` ignores user files. `/dev/null` is an inference (empty database); the system file is still read. | S56 | "Specifies one or more files to use for the user host key database" |
| C138 | Agent forwarding: users who bypass file permissions on the remote host can use the agent. | S55 | "Agent forwarding should be enabled with caution. Users with the ability to bypass file permissions on the remote host" |
| C139 | `PasswordAuthentication` default is yes. | S57 | "Specifies whether password authentication is allowed. The default is yes." |
| C140 | `BatchMode=yes` turns off prompts. `ConnectTimeout` is the connect timeout in seconds. | S56 | "If set to yes, user interaction such as password prompts and host key confirmation requests will be disabled." |
| C140-b | `BatchMode=yes` turns off prompts (continued) | S56 | "Specifies the timeout (in seconds) used when connecting to the SSH server" |
| C141 | Code block options: `-G` prints the configuration and exits; `-i` file; `-p` port. | S55 | "Causes ssh to print its configuration after evaluating Host and Match blocks and exit." / "-i identity_file" |
| C141-b | Code block options: `-G` prints the configuration and exits; `-i` file; `-p` port (continued) | S55 | "-p port Port to connect to on the remote host." |

Statements without a cite: "a key pair is a private key and a public key", "a host key identifies a server" and "a daemon is a background service" (glosses); `UserKnownHostsFile` set to `/dev/null` "throws the known keys away" is an inference from C137 (an empty database), a common idiom that the manual does not state; "man-in-the-middle, an attacker in the path" is a gloss. The tip (one key pair per pipeline, secret store, host key first) is the tutorial's own advice. I dropped the exit status 255 sentence for length (ssh(1) EXIT STATUS: "ssh exits with the exit status of the remote command or with 255 if an error occurred."). Local runs: see the local checks (`ssh-keygen`, `ssh -G`, mode 600). The login line is a comment and was not run.

## Topic 15: File Transfer
| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C142 | `scp` and `sftp` run over ssh. | S59, S60 | "scp uses the SFTP protocol over an ssh(1) connection for data transfer" |
| C142-b | `scp` and `sftp` run over ssh (continued) | S59, S60 | "sftp is a file transfer program ... which performs all operations over an encrypted ssh(1) transport." |
| C143 | `rsync` uses ssh by default and sends only the differences. | S62 | "For remote transfers, rsync normally uses ssh for its communications." |
| C143-b | `rsync` uses ssh by default and sends only the differences (continued) | S62 | "the rsync remote-update protocol is used to update the file by sending only the differences in the data." |
| C144 | `curl` and `wget` support HTTP, HTTPS, FTP. | S63, S64 | "It supports these protocols: DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS" / "It supports HTTP, HTTPS, and FTP protocols" |
| C145 | Since OpenSSH 9.0 `scp` uses SFTP. `-O` selects the old protocol. `-P` is the port. | S59 | "Since OpenSSH 9.0, scp has used the SFTP protocol for transfers by default." |
| C145-b | Since OpenSSH 9 (continued) | S59 | "Use the legacy SCP protocol for file transfers instead of the SFTP protocol." / "-P port Specifies the port to connect to on the remote host." |
| C145-c | Since OpenSSH 9.0 `scp` uses SFTP (the version) | S67 | "This release switches scp(1) from using the legacy scp/rcp protocol to using the SFTP protocol by default." |
| C146 | The OpenSSH 8.0 notes call the scp protocol outdated and recommend sftp and rsync. | S61 | "The scp protocol is outdated, inflexible and not readily fixed. We recommend the use of more modern protocols like sftp and rsync" |
| C147 | FTPS adds TLS to FTP. | S65 | "describes a mechanism that can be used by FTP clients and servers to implement security and authentication using the TLS protocol" |
| C148 | `rsync -a` keeps symlinks, attributes, permissions, owners. `-n` is a dry run. | S62 | "archive mode, which ensures that symbolic links, devices, attributes, permissions, ownerships, etc. are preserved in the transfer." |
| C148-b | `rsync -a` keeps symlinks, attributes, permissions, owners (continued) | S62 | "This makes rsync perform a trial run that doesn't make any changes" |
| C149 | A trailing slash on the source copies the contents. | S62 | "You can think of a trailing / on a source as meaning "copy the contents of this directory" as opposed to "copy the directory by name"" |
| C150 | `curl -f` fails with exit 22 on HTTP codes of 400 or more. | S63 | "Fail with error code 22 and with no response body output at all for HTTP transfers returning HTTP response codes at 400 or greater." |
| C151 | `wget -c` resumes a partial download. | S64 | "Continue getting a partially-downloaded file." |
| C152 | `rsync --delete` deletes destination files that the source lacks. The manual advises a dry run. | S62 | "This tells rsync to delete extraneous files from the receiving side (those that don't exist on the sending side)" |
| C152-b | `rsync --delete` deletes destination files that the source lacks (continued) | S62 | "It is a very good idea to first try a run using the --dry-run (-n) option" |
| C153 | `curl -k` skips certificate checks. | S63 | "This option makes curl skip the verification step and proceed without checking." |
| C154 | `sftp -a` resume: a differing partial file is likely corrupt. | S60 | "If the partial contents differ from those being transferred, then the resultant file is likely to be corrupt." |
| C155 | `rsync -c` compares checksums, not time and size. | S62 | "--checksum, -c skip based on checksum, not mod-time & size" |

Statements without a cite: "SFTP is a different protocol, which runs over ssh" (C142; S60 describes sftp as an ssh transport program, and RFC 4217 describes FTPS: the page states the difference in its own words). The tip (`curl -fsS` so that a 404 fails a job) is the tutorial's own advice and rests on C150 (local run: exit 22 for a 404). The code-block examples: the `rsync -avn` and `rsync -ai` lines ran in a temporary directory (see the local checks); the remote lines are comments and were not run. The code line `curl -fsS -o out.txt http://127.0.0.1:18080/a.txt` was run against a local server; `-s` and `-S` are explained in the curl manual ("--silent", "--show-error"), and the page does not explain them in the prose.

Part B totals: sources S42–S65 (24 new, 65 in all); claims C87–C155 (69 new, 155 in all; claims with a gloss or an inference are marked above).

## Fix round 1 (whole page, topics 1–15)

Two fact-checkers found 35 FAILs (`linux-networking.factcheck.md`). Changes of the notes: S7 has its real RFC title, S38 its real page title, S66 and S67 are new (OpenSSH 9.5 and 9.0 release notes, fetched with `scripts/linux_fetch.py` into the part B directory as `105.txt` and `106.txt`). Every claim row has at most 25 words of quote: a row with more quote words is split into rows with the suffix `-b`, `-c`; the pipes in the syntax lines of C38, C50, and C107 are escaped. C54 now names `nmcli connection show` (the DHCP4 text of the nmcli manual is under that command). Rows C1, C2, C16, C22, C30, C52, C58, C120, C132, C135, C137, and C145 follow the new wording of the page. New claims:

| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C156 | `net.ipv4.ip_unprivileged_port_start` sets the first unprivileged port (default 1024); a sysctl is a kernel setting. | S34 | "It defines the first unprivileged port in the network namespace." / "Default: 1024" |
| C157 | `ip route` fields: `dev` is the output device, `src` the preferred source address, a lower `metric` is preferred, `scope link` is for direct routes. | S18 | "the output device name." / "the source address to prefer when sending to the destinations covered by the route prefix." / "routes with lower values are preferred." |
| C158 | `scope link` is the default scope of direct unicast routes. | S18 | "scope link for direct unicast and broadcast routes" |
| C159 | A DHCP lease is for a fixed period that may be infinite. | S12 | "A client acquires a lease for a network address for a fixed period of time (which may be infinite)." |
| C160 | The `proto` value is a tag; the administrator may use other tags. | S18 | "the administrator is free to assign (or not to assign) protocol tags." |
| C161 | The `hosts` database is used by `gethostbyname(3)` and related functions, so programs that call them use the Name Service Switch. | S25 | "Host names and numbers, used by gethostbyname(3) and related functions." |
| C162 | `nmcli -f DHCP4 connection show NAME` (see C54). | S31 | "For active data use GENERAL, IP4, DHCP4, IP6, DHCP6, VPN." |
| C163 | `-T` of `traceroute`: S43 names the default method as allowed for unprivileged users and gives no such rule for TCP. | S43 | "This method is allowed for unprivileged users." (the default method) |
| C164 | OpenSSH 9.5 made Ed25519 the default key type of `ssh-keygen` (see C132). | S66 | "ssh-keygen(1): generate Ed25519 keys by default." |
| C165 | `StrictHostKeyChecking=no` lets a changed key pass "subject to some restrictions", and known hosts are still verified. | S56 | "The host keys of known hosts will be verified automatically in all cases." |
| C166 | Chain policy is only for built-in chains. | S48 | "Set the policy for the built-in (non-user-defined) chain to the given target." |
| C167 | `iptables-save` and `nft list ruleset` print rules; a redirect writes them to a file. | S49, S47 | "dump the contents of IP or IPv6 Table in easily parseable format either to STDOUT or to a specified file" |

Statements without a cite (fix round 1): the package advice of topic 1 ("install them with the package manager"; `iproute2` for Debian and Ubuntu, `iproute` for RHEL) is the tutorial's own advice and is marked so in the page; the minimal-image remark is said once in topic 1 for the whole page. "Plan to use root" for `traceroute -T` is the tutorial's own advice (C163: the manual gives no unprivileged mode for TCP). "`/dev/null` makes ssh ignore saved keys" is marked "tutorial's own note" (the manual names `none`; the system known_hosts file is still read). The danger callouts (routing, DHCP, scanning, capture, firewall) say "Tutorial's own advice" or "warning". The legal sentence about scanning was removed.

## Review fix round 1 (task reviewer)

Changes of the page and what they mean for the notes:
- Packet Analysis code block: the capture is on `lo`, so the invented sample line and the `tshark` filter now use 127.0.0.1 (`ip.addr == 127.0.0.1`). The pcap goes to `"$d/test.pcap"` in a `mktemp` directory that the block removes. The comment says to send test traffic first (`-c 100` waits for 100 matching packets; Ctrl-C stops it). The earlier local check of `tcpdump -n -r` used a synthetic pcap with documentation addresses; the sample line is invented and not from that file.
- File Transfer code block: it starts its own local server (`python3 -m http.server 18080 --bind 127.0.0.1 -d "$d/src/app"`), runs `curl`, and stops the server. I ran the block as written in a temporary directory with loopback traffic only: the rsync dry run listed `a.txt`, the copy printed `>f+++++++++ a.txt`, and the server log showed `GET /a.txt ... 200`.
- Lede: "Most examples here read state, write to a temporary directory, or use only your own host. An example that sends traffic to another host, or needs a network or root, says so."
- TTL: "IP TTL (not the DNS TTL)" in the ping and ICMP sections, "IP TTL" in the traceroute section.
- The second definition of "socket" (netstat section) is removed; topic 1 defines it once (C14, C15).
- `rsync -a` sentence now follows the quote of C148: links, attributes, permissions, owners.
- scp overwrite warning: tutorial's own advice (no source; the scp(1) manual does not say it), marked as such in the danger callout. The `rsync -c` sentence of the tip was not changed.

## Fix round 4 (tcpdump example)

The Packet Analysis block now uses `-Z "$USER"` and the comment "send test traffic from a second terminal" (the capture must run while the traffic is sent). New claim:

| # | Claim | Source | Quote (≤25 words) |
|---|---|---|---|
| C168 | As root, `tcpdump` can drop to another user (`-Z user`) before it opens the output file; `-Z "$USER"` keeps the write in the caller's own directory (a `mktemp -d` directory is mode 0700 and owned by the caller). | S51 | "after opening the capture device or input savefile, but before opening any savefiles for output, change the user ID to user" |

The `mktemp -d` mode is local knowledge (it creates a directory that only the owner can use); it is not cited. The command was not run (needs root).


## Round 2 (2026-10-27): Try it commands

The page is rewritten as short lessons (Goal, Core, Try it, tip, Go deeper). Every Try-it ran on Ubuntu 26.04.1 LTS with GNU bash 5.3.9, iproute2 6.19.0 (`ip`, `ss`), iputils 20250605 (`ping`), tcpdump 4.99.6 (libpcap 1.10.6), iptables 1.8.11 (nf_tables), nftables 1.1.6, OpenSSH 10.2p1, rsync 3.4.1, and Python 3.14.4. No Try-it uses `sudo`, sends traffic off the host, or changes an interface, route, firewall, or DNS setting. Machine-specific values are stand-ins (marked in a comment on the page): interface name `eth0`, addresses from 198.51.100.0/24, the uid, the PID, the temporary directory name, and the key fingerprint.

| Topic | Try-it command | Real output (stand-ins marked) |
|---|---|---|
| Networking | `ip -br addr show lo` | `lo  UNKNOWN  127.0.0.1/8 ::1/128` |
| TCP/IP | `cat /proc/sys/net/ipv4/ip_unprivileged_port_start`, `.../ip_local_port_range` | `1024`; `32768	60999` |
| Ethernet, ARP, and RARP | `ip -br link show lo`; `ip neigh show dev lo \| wc -l` | `lo  UNKNOWN  00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>`; `0` |
| Subnetting | `echo $(( 2 ** (32 - 26) ))`; two `python3 -c` lines with `ipaddress` | `64`; `255.255.255.192 192.0.2.63`; `False` |
| IP Routing | `ip route get 127.0.0.1` | `local 127.0.0.1 dev lo src 127.0.0.1 uid 1000` / `cache <local>` (uid is machine-specific) |
| DHCP | `ip route show proto dhcp` | `default via 198.51.100.1 dev eth0 src 198.51.100.20 metric 600` (stand-ins for a private address and a wireless interface name) |
| DNS Resolution | `getent hosts localhost`; `grep '^nameserver' /etc/resolv.conf` | `127.0.0.1       localhost`; `nameserver 127.0.0.53` |
| ICMP | `cat /proc/sys/net/ipv4/icmp_echo_ignore_all`, `.../icmp_ratelimit` | `0`; `1000` |
| ping | `ping -c 2 -n 127.0.0.1; echo "exit status: $?"` | 2 replies, `ttl=64`, `0% packet loss`, `exit status: 0` |
| traceroute | `command -v traceroute` guard, then `traceroute -n -m 3 127.0.0.1` | `traceroute is not installed` (the test machine has no `traceroute`; the loopback trace itself was not run) |
| netstat | local `python3 -m http.server 18080 --bind 127.0.0.1`, `ss -tlnp 'sport = :18080'`, `kill` | header line and `LISTEN 0 5 127.0.0.1:18080 0.0.0.0:* users:(("python3",pid=…,fd=3))` |
| Netfilter | `iptables -V`; `nft --version` | `iptables v1.8.11 (nf_tables)`; `nftables v1.1.6 (Commodore Bullmoose #7)` |
| Packet Analysis | `tcpdump -d 'tcp port 8080'` and `tcpdump -d 'tcp prot 8080'` (no root, no capture) | `filter OK`; `Warning: assuming Ethernet`; `tcpdump: can't parse filter expression: syntax error` |
| SSH | `ssh-keygen -q -t ed25519 -N '' …` in `mktemp -d`; `stat -c '%A %n'`; `ssh-keygen -l`; `ssh -G -F /dev/null localhost` | `-rw-------`, `-rw-r--r--`, `256 SHA256:<random> ci-test (ED25519)`, `port 22`, `stricthostkeychecking ask` |
| File Transfer | `rsync -avn src/app/ dst/`; `rsync -ai src/app/ dst/` in `mktemp -d` | dry run lists `a.txt` and ends `(DRY RUN)`; copy prints `>f+++++++++ a.txt` |

Checks that failed and were not used: `nft -c -f FILE` as a normal user fails with `netlink: Error: cache initialization failed: Operation not permitted`, so the Netfilter Try-it reads only the versions. `busybox traceroute` needs a raw socket (`Operation not permitted`). `ssh -G` printed `Pseudo-terminal will not be allocated because stdin is not a terminal.` on stderr only because the test shell had no terminal; the page does not show it.

Facts moved, none deleted:
- Danger callouts of traceroute (probe only your own hosts) and SSH (`StrictHostKeyChecking=no`) are now the tip of the topic. The other danger callouts (routing, DHCP, Netfilter, File Transfer) are shorter; their details are in "Go deeper". The capture-secrets warning of Packet Analysis is the tip.
- New cite placements (sources already on the page): S18 for "`ip route show proto dhcp` lists only the routes with the tag `dhcp`" (the `proto` selector of `ip route show`) and for "`local` means that the destination is on this host"; S34 for the unit of `icmp_ratelimit` (ms); S43 for `-m`; S47 and S48 for `nft --version` and `iptables -V`; S51 for `tcpdump -d` (dump the compiled filter and stop); S55 for `ssh -G` (print the configuration and exit); S58 for `-N ''`.
- Example outputs that no run produced (the traceroute sample, the invented tcpdump line) are removed. The routing example line in "Go deeper" is a real `ip route show` line with stand-ins.

### Round 2, fix round 1 (2026-10-27)

The Try-it blocks of netstat, SSH, and File Transfer now guard `mktemp`: `d=$(mktemp -d) || exit 1` (or `d=$(mktemp -d) && cd "$d" || exit 1` where the block changes into `$d`), and the cleanup is `rm -rf -- "${d:?}"`. The Go deeper block of Packet Analysis uses the same cleanup. I ran the three Try-it blocks again (same tool versions): the output has the same lines; only the PID, the fingerprint, the temporary directory name, and the rsync byte counts change from run to run. The DHCP Goal and Try-it now say "routes that carry the route tag `dhcp`" (S18, the `proto` selector), not "routes that DHCP gave", because no source says that a DHCP client always sets this tag.
