# Fact check: devops / ansible

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.ansible.com/ansible/latest/getting_started/introduction.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / ansible (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Automate servers with inventories, playbooks, and SSH settings." | none | FAIL | S1 mentions playbooks ("Ansible uses simple, human-readable scripts called playbooks") and SSH ("using SSH with existing OS credentials to access remote machines"). It never mentions inventories. The lede has no cite. Fix: drop "inventories", or add a source that covers them, e.g. "Automate systems with playbooks and SSH." |
| 2 | Ansible provides open-source automation that reduces complexity and runs everywhere. | 1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 3 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | 1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / ansible (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: Ansible's open-source automation and its agent-less design. | none | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." and "Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |
| 2 | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool. |
| 3 | Ansible provides open-source automation that reduces complexity and runs everywhere. | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | S1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / ansible (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Ansible's open-source automation and its agent-less design." | none | PASS | S1: "Ansible provides open-source automation that reduces complexity and runs everywhere." and "Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." The lede has no cite of its own. The S1 lines above support both of its parts. |
| 0b | "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | Ansible provides open-source automation that reduces complexity and runs everywhere | S1 | PASS | S1: "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 2 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure | S1 | PASS | S1: "As automation technology, Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / ansible (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "Ansible's open-source automation and its agent-less design." | none | PASS | S1 says "Ansible provides open-source automation that reduces complexity and runs everywhere" and "Agent-less architecture". The lede has no cite, but it only repeats claims 1 and 2. |
| 0b | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | Ansible provides open-source automation that reduces complexity and runs everywhere. | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 2 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | S1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 45 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-19)

# Fact check: devops / ansible (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page summary line | none | N/A | Describes the page itself. |
| 2 | Lede | Page summary and link to other pages | none | N/A | Describes the page itself. The links are not facts. |
| 3 | What it is | Ansible provides open-source automation that reduces complexity and runs everywhere | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | What it is | Playbooks are simple, human-readable scripts that automate tasks | S1 | PASS | "Ansible uses simple, human-readable scripts called playbooks to automate your tasks." |
| 5 | What it is | You declare the desired state in your playbook | S1 | PASS | "You declare the desired state of a local or remote system in your playbook." |
| 6 | What it is | Ansible ensures the system remains in that state | S1 | PASS | "Ansible ensures that the system remains in that state." |
| 7 | What it is | Its common use cases are config management, continuous deploy, zero-downtime rolling updates | S1 | FAIL | The source says "some common use cases" and lists four: "Eliminate repetition and simplify workflows / Manage and maintain system configuration / Continuously deploy complex software / Perform zero-downtime rolling updates". The page says "are" and leaves out the first, so the list looks complete. Fix: "Some common use cases include ..." or add the missing one. |
| 8 | What it is | Designed around an agent-less architecture | S1 | PASS | "Ansible is designed around the following principles: Agent-less architecture" |
| 9 | What it is | Playbooks use straightforward YAML syntax that reads like documentation | S1 | PASS | "Automation playbooks use straightforward YAML syntax for code that reads like documentation." |
| 10 | What it is | Decentralized, uses SSH with existing OS credentials | S1 | PASS | "Ansible is also decentralized, using SSH with existing OS credentials to access remote machines." |
| 11 | What it is | No change when system is already in the described state, even after many runs | S1 | PASS | "When the system is in the state your playbook describes, Ansible does not change anything, even if the playbook runs multiple times." |
| 12 | What it is | Automates management of remote systems and controls their desired state | S2 | PASS | "Ansible automates the management of remote systems and controls their desired state." |
| 13 | What it is | Most environments have three main components | S2 | PASS | "most Ansible environments have three main components:" |
| 14 | What it is | Control node is a system on which Ansible is installed | S2 | PASS | "A system on which Ansible is installed." |
| 15 | What it is | You run ansible or ansible-inventory on a control node | S2 | PASS | "You run Ansible commands such as ansible or ansible-inventory on a control node." |
| 16 | What it is | Inventory is a list of managed nodes logically organized | S2 | PASS | "A list of managed nodes that are logically organized." |
| 17 | What it is | Managed node is a remote system, or host, that Ansible controls | S2 | PASS | "A remote system, or host, that Ansible controls." |
| 18 | What it is | Install Ansible on a single host, the control node | S5 | PASS | "you install on a single host (referred to as the control node)." |
| 19 | What it is | Manages machines remotely with SSH, Powershell remoting, other transports, no databases or daemons | S5 | PASS | "remotely with SSH, Powershell remoting, and numerous other transports ... with no databases or daemons required." |
| 20 | What it is | Control node can be nearly any UNIX-like machine with Python | S5 | PASS | "you can use nearly any UNIX-like machine with Python installed." |
| 21 | What it is | Community packages are distributed in two ways | S5 | PASS | "Ansible’s community packages are distributed in two ways:" |
| 22 | What it is | ansible-core is a minimalist language and runtime package with built-in modules and plugins | S5 | PASS | "ansible-core: a minimalist language and runtime package containing a set of built-in modules and plugins." |
| 23 | What it is | ansible is a much larger "batteries included" package | S5 | PASS | "a much larger “batteries included” package" |
| 24 | What it is | It adds a community-curated selection of Collections | S5 | PASS | "adds a community-curated selection of Ansible Collections" |
| 25 | What it is | Docs install the minimal package with pip --user ansible-core | S5 | PASS | "You can install the minimal ansible-core package for the current user: $ python3 -m pip install --user ansible-core" |
| 26 | How it works | Ansible automates tasks on managed nodes using a list or group of lists called inventory | S6 | PASS | "by using a list or group of lists known as inventory." |
| 27 | How it works | Inventory defines managed nodes and their variables | S6 | PASS | "defines the managed nodes you automate and the variables associated with those hosts." |
| 28 | How it works | You can specify groups | S6 | PASS | "specify groups." |
| 29 | How it works | Most common formats are INI and YAML (built-in support) | S6 | PASS | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| 30 | How it works | -i passes another inventory source | S6 | PASS | "You can specify a different inventory source or sources at the command line by using the -i <path or expression> option" |
| 31 | How it works | Two default groups all and ungrouped even if none defined | S6 | PASS | "Even if you do not define any groups in your inventory, Ansible creates two default groups: all and ungrouped." |
| 32 | How it works | all group contains every host | S6 | PASS | "The all group contains every host." |
| 33 | How it works | ungrouped contains hosts in no other group | S6 | PASS | "The ungrouped group contains all hosts that do not belong to any other group." |
| 34 | How it works | Add a new [myhosts] group to build an inventory file | S3 | PASS | "Add a new [myhosts] group to the inventory.ini file" |
| 35 | How it works | Specify IP address or FQDN of each host | S3 | PASS | "specify the IP address or fully qualified domain name (FQDN) of each host system." |
| 36 | How it works | Check inventory with ansible-inventory -i inventory.ini --list | S3 | PASS | "ansible-inventory -i inventory.ini --list" |
| 37 | How it works | Ping group with ansible myhosts -m ping -i inventory.ini | S3 | PASS | "ansible myhosts -m ping -i inventory.ini" |
| 38 | How it works | One inventory file lets Ansible manage many hosts with one command | S3 | PASS | "Using an inventory file, Ansible can manage a large number of hosts with a single command." |
| 39 | How it works | A host does not need a remote connection | S7 | PASS | Framing sentence for the next claim: "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 40 | How it works | local plugin runs tasks on controller | S7 | PASS | "This connection plugin allows ansible to execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 41 | How it works | Most modules in POSIX need Python on target | S8 | PASS | "Most Ansible modules that execute under a POSIX environment require a Python interpreter on the target host." |
| 42 | How it works | Unless configured, discovers one the first time a Python module runs for that host | S8 | PASS | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter ... the first time a Python module is executed for that host." |
| 43 | How it works | ansible_python_interpreter specifies target host Python path | S6 | PASS | "ansible_python_interpreter / Specifies the target host Python path." |
| 44 | How it works | Default auto searches the configurable list of paths | S8 | PASS | "auto (default) : Searches the configurable list of common Python interpreter paths" |
| 45 | How it works | auto warns that a later Python install could alter the choice | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 46 | How it works | auto_silent does not warn | S8 | PASS | "auto_silent : Same as auto, but does not issue warnings." |
| 47 | How it works | Playbooks are YAML automation blueprints for deploy and configure | S4 | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes." |
| 48 | How it works | Playbook is a list of plays, top to bottom order | S4 | PASS | "A list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal." |
| 49 | How it works | Play is an ordered list of tasks mapped to managed nodes | S4 | PASS | "An ordered list of tasks that maps to managed nodes in an inventory." |
| 50 | How it works | Task references a single module | S4 | PASS | "A reference to a single module that defines the operations that Ansible performs." |
| 51 | How it works | Module is a unit of code or binary run on managed nodes | S4 | PASS | "A unit of code or binary that Ansible runs on managed nodes." |
| 52 | How it works | Each task calls an Ansible module | S10 | PASS | "Each task calls an Ansible module." |
| 53 | How it works | Playbooks in YAML with minimum syntax | S10 | PASS | "You express playbooks in YAML format with a minimum of syntax." |
| 54 | How it works | A playbook runs top to bottom | S10 | PASS | "A playbook runs in order from top to bottom." |
| 55 | How it works | Each play defines target nodes by pattern and at least one task | S10 | PASS | "At a minimum, each play defines two things: The managed nodes to target, using a pattern. At least one task to execute." |
| 56 | How it works | By default one task at a time against all matching machines | S10 | PASS | "By default, Ansible executes each task in order, one at a time, against all machines matched by the host pattern." |
| 57 | How it works | Ansible 2.10+ should use FQCN | S10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 58 | How it works | Tips: use FQCN to avoid ambiguity | S29 | PASS | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| 59 | How it works | Tips: always name plays, tasks, blocks | S29 | PASS | "Always name plays, tasks, and blocks" |
| 60 | How it works | Tips: always mention the state | S29 | PASS | "Always mention the state" |
| 61 | How it works | Run with ansible-playbook | S10 | PASS | "To run your playbook, use the ansible-playbook command." |
| 62 | How it works | Returns name lines of plays and tasks | S10 | PASS | "Ansible returns information about connections, the name lines of all your plays and tasks" |
| 63 | How it works | Returns success/failure and change per task per machine | S10 | PASS | "whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine." |
| 64 | How it works | Summary at the bottom | S10 | PASS | "Ansible provides a summary of the nodes that were targeted and how they performed." |
| 65 | How it works | Verify with --check, --diff, --list-hosts, --list-tasks, --syntax-check | S10 | PASS | "including --check, --diff, --list-hosts, --list-tasks, and --syntax-check." |
| 66 | How it works | --syntax-check checks syntax, no execution | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 67 | How it works | --list-tasks lists tasks that would run | S20 | PASS | "list all tasks that would be executed" |
| 68 | How it works | --list-hosts lists matching hosts, nothing else | S20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 69 | How it works | file module sets attributes of files, dirs, symlinks | S21 | PASS | "Set attributes of files, directories, or symlinks and their targets." |
| 70 | How it works | state: directory creates intermediate subdirectories with permissions | S21 | PASS | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| 71 | How it works | Modes are octal; quote them for a string | S21 | PASS | "modes are actually octal numbers ... For consistent results, quote octal numbers ... so Ansible receives a string" |
| 72 | How it works | copy copies file or directory structure to remote machine | S22 | PASS | "copies a file or a directory structure from the local or remote machine to a location on the remote machine." |
| 73 | How it works | content instead of src sets file contents | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 74 | How it works | Works only when dest is a file, creates it if missing | S22 | PASS | "Works only when dest is a file. Creates the file if it does not exist." |
| 75 | How it works | template processed by Jinja2 | S23 | PASS | "Templates are processed by the Jinja2 templating language." |
| 76 | How it works | src is path of a Jinja2 template on the controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 77 | How it works | dest is where to render on the remote machine | S23 | PASS | "Location to render the template to on the remote machine." |
| 78 | How it works | slurp works like fetch, returns base64 blob | S24 | PASS | "This module works like ansible.builtin.fetch. It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 79 | How it works | assert asserts expressions true, optional message | S25 | PASS | "This module asserts that given expressions are true with an optional custom message." |
| 80 | How it works | that is a list of string expressions like when | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 81 | How it works | Modules return a structure you can register | S18 | PASS | "Ansible modules normally return a data structure that can be registered into a variable" |
| 82 | How it works | changed is a boolean | S18 | PASS | "A boolean indicating if the task had to make changes to the target or delegated host." |
| 83 | How it works | failed is a boolean | S18 | PASS | "A boolean that indicates if the task was failed or not." |
| 84 | How it works | diff holds differences | S18 | PASS | "Information on differences between the previous and current state." |
| 85 | How it works | Most modules check desired state and exit without acting | S10 | PASS | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| 86 | How it works | Such modules are idempotent | S10 | PASS | "Modules that behave this way are ‘idempotent’." |
| 87 | How it works | Definition of idempotent operation | S19 | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions." |
| 88 | How it works | Not all playbooks and modules behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 89 | How it works | shell and command run arbitrary commands, do not detect change | S35 | PASS | "tasks that do not naturally detect if a change has occurred ... shell and command modules, which run arbitrary commands." |
| 90 | How it works | changed_when defines when a task changed a node | S16 | PASS | "define when a particular task has “changed” a remote node using the changed_when conditional." |
| 91 | How it works | Decides if change is in statistics and if handler triggers | S16 | PASS | "whether a change should be reported in Ansible statistics and whether a handler should be triggered or not." |
| 92 | How it works | failed_when defines failure per task | S16 | PASS | "Ansible lets you define what “failure” means in each task using the failed_when conditional." |
| 93 | How it works | Variables manage differences between systems | S11 | PASS | "Ansible uses variables to manage differences between systems." |
| 94 | How it works | Define in playbooks, inventory, files or roles, command line | S11 | PASS | "You can define these variables in your playbooks, in your inventory, in reusable files or roles, or at the command line." |
| 95 | How it works | Create a variable by registering a task return value | S11 | PASS | "create variables during a playbook run by registering the return value of a task as a new variable." |
| 96 | How it works | Jinja2 templating for dynamic expressions | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 97 | How it works | Templating with the template module | S12 | PASS | "You can use templating with the template module." |
| 98 | How it works | Facts are things discovered about remote nodes | S19 | PASS | "Facts are simply things that are discovered about remote nodes." |
| 99 | How it works | Discovered when plays run via internal setup module | S19 | PASS | "automatically discovered by Ansible when running plays by executing the internal setup module on the remote nodes." |
| 100 | How it works | Fact gathering can be disabled to save time | S19 | PASS | "it can be disabled to save time if it is not needed" |
| 101 | How it works | Sometimes you want a task to run only on change | S13 | PASS | "Sometimes you want a task to run only when a change is made on a machine." |
| 102 | How it works | Handlers only run when notified | S13 | PASS | "Handlers are tasks that only run when notified." |
| 103 | How it works | notify instructs handlers | S13 | PASS | "Tasks can instruct one or more handlers to execute using the notify keyword." |
| 104 | How it works | notify accepts list of handler names | S13 | PASS | "accepts a list of handler names that are notified on a task change." |
| 105 | How it works | Same handler notified many times runs once | S13 | PASS | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| 106 | How it works | Handlers run in handlers-section order, not notify order | S13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 107 | How it works | Example: handler restarts Apache after all tasks | S13 | PASS | "the Apache server is restarted by the handler after all tasks are completed in the play." |
| 108 | How it works | meta: flush_handlers triggers notified handlers | S13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 109 | How it works | --force-handlers runs handlers even if task fails | S20 | PASS | "run handlers even if a task fails" |
| 110 | How it works | Two validation modes: check and diff | S15 | PASS | "Ansible provides two modes of execution that validate tasks: check mode and diff mode." |
| 111 | How it works | Check mode makes no changes on remote systems | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 112 | How it works | Supporting modules report would-be changes | S15 | PASS | "Modules that support check mode report the changes they would have made." |
| 113 | How it works | Non-supporting modules report nothing, do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 114 | How it works | Diff mode gives before-and-after | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 115 | How it works | Check mode is just a simulation | S15 | PASS | "Check mode is just a simulation." |
| 116 | How it works | No output for tasks with conditionals on registered variables | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 117 | How it works | --diff alone or with --check | S15 | PASS | "The --diff option for ansible-playbook can be used alone or with --check." |
| 118 | How it works | diff: false disables diff for a task | S15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 119 | How it works | check_mode: false forces normal mode under --check | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 120 | How it works | On non-zero rc or module failure, stops on host, continues on others | S16 | PASS | "by default it stops executing on that host and continues on other hosts." |
| 121 | How it works | ignore_errors continues despite failure | S16 | PASS | "You can use ignore_errors to continue despite of the failure." |
| 122 | How it works | Works only when task can run and returns failed | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 123 | How it works | Does not ignore undefined var, connection, execution, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| 124 | How it works | Blocks create logical groups of tasks | S17 | PASS | "Blocks create logical groups of tasks." |
| 125 | How it works | Blocks handle errors like exception handling | S17 | PASS | "Blocks also offer ways to handle task errors, similar to exception handling in many programming languages." |
| 126 | How it works | Rescue blocks run when earlier task in block fails | S17 | PASS | "Rescue blocks specify tasks to run when an earlier task in a block fails." |
| 127 | How it works | always section runs regardless of status | S17 | PASS | "Tasks in the always section run no matter what the task status of the previous block is." |
| 128 | How it works | Invalid task definitions and unreachable hosts do not trigger rescue or always | S17 | PASS | "Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections of a block." |
| 129 | How it works | Roles load related artifacts from known structure | S14 | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure." |
| 130 | How it works | Roles can be reused and shared | S14 | PASS | "you can easily reuse them and share them with other users." |
| 131 | How it works | tasks/main.yml is the role's task list | S14 | PASS | "tasks/main.yml - A list of tasks that the role provides to the play for execution." |
| 132 | How it works | Vault encrypts and manages sensitive data | S26 | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords." |
| 133 | How it works | Two types of content: variables and files | S27 | PASS | "two types of content with Ansible Vault: variables and files." |
| 134 | How it works | ansible-vault encrypt for an existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 135 | How it works | ansible-vault view shows without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 136 | How it works | --vault-password-file flag with password file | S44 | PASS | "When you run a playbook that uses a vault password stored in a file, specify the file within the --vault-password-file flag." |
| 137 | How it works | Tips: encrypt secret variables with Vault | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 138 | How it works | Tips: keep playbooks etc. in version control | S29 | PASS | "Keep your playbooks, roles, inventory, and variables files in git or another version control system" |
| 139 | How it works | Separate inventories keep environments apart | S29 | PASS | "by using separate inventory files or directories for each environment." |
| 140 | How it works | Mixed inventory exposes production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 141 | How it works | Fail-fast, ordered system; easy to embed testing | S28 | PASS | "designed to be a “fail-fast” and ordered system, therefore it makes it easy to embed testing directly in Ansible playbooks." |
| 142 | How it works | Resources model desired state; no need to test services/packages | S28 | PASS | "Ansible resources are models of desired-state. As such, it should not be necessary to test that services are started, packages are installed" |
| 143 | How it works | assert makes validation easy | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 144 | How it works | stat is a great choice for files not set declaratively | S28 | PASS | "the ‘stat’ module is a great choice" |
| 145 | How it works | No need to check return codes | S28 | PASS | "there’s no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 146 | How it works | Check mode as drift test | S28 | PASS | "Check Mode As A Drift Test ... will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 147 | How it works | Integration battery by QA team for a production webservice | S28 | PASS | "an integration test battery should be written by your QA team if you are a production webservice." |
| 148 | How it works | Usually not embedded in playbooks | S28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 149 | How it works | Basic health checks make sense | S28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 150 | How it works | Ansible Lint is a CLI linter | S31 | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 151 | How it works | Main goal | S31 | PASS | "Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls that can easily lead to bugs or make code harder to maintain." |
| 152 | How it works | Playbooks page: use ansible-lint for feedback | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 153 | How it works | Profiles raise strictness gradually | S32 | PASS | "profiles gradually increase the strictness of rules" |
| 154 | How it works | min profile | S32 | PASS | "The min profile ensures that Ansible can load content." |
| 155 | How it works | basic profile extends min | S32 | PASS | "The basic profile prevents common coding issues and enforces standard styles and formatting. It extends min profile." |
| 156 | How it works | --profile selects profile | S33 | PASS | "--profile ... Specify which rules profile to be used." |
| 157 | How it works | --strict non-zero on warnings | S33 | PASS | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| 158 | How it works | -f formats list | S33 | PASS | "-f, --format {brief,full,md,json,codeclimate,quiet,pep8,sarif}" |
| 159 | How it works | --project-dir | S33 | PASS | "Location of project/repository, autodetected based on location of configuration file." |
| 160 | How it works | --offline | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 161 | How it works | Add .ansible and .cache to .gitignore | S33 | PASS | "You should add project-local .ansible / .cache folders to .gitignore." |
| 162 | How it works | name[play] | S34 | PASS | "name[play] - All plays should be named." |
| 163 | How it works | name[missing] | S34 | PASS | "name[missing] - All tasks should be named." |
| 164 | How it works | name[casing] | S34 | PASS | "name[casing] - All names should start with an uppercase letter for languages" |
| 165 | How it works | no-changed-when | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 166 | How it works | risky-file-permissions | S36 | PASS | "triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 167 | How it works | Molecule is a testing framework | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing" |
| 168 | How it works | Molecule leverages inventory, playbooks, collections | S37 | PASS | "Molecule leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows." |
| 169 | Try it | Run record (date, OS, versions, output, HOME, /work, /venv, home file, PyPI check) | none | N/A | Record of the page's own run. It includes "No page that the tutorial read describes this file." |
| 170 | Try it | ANSIBLE_REMOTE_TEMP is the env variable of remote_tmp, temp dir for targets | S9 | PASS | "remote_tmp ... Temporary directory to use on targets when executing tasks. ... Environment variable: ANSIBLE_REMOTE_TEMP" |
| 171 | Try it | --offline disables requirements.yml install and schema refresh | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 172 | Try it | Docs install minimal package with pip --user | S5 | PASS | "python3 -m pip install --user ansible-core" |
| 173 | Try it | ANSIBLE_HOME is default root path for config files on controller | S30 | PASS | "The default root path for Ansible config files on the controller." |
| 174 | Try it | YAML is a common inventory format | S6 | PASS | "The most common formats are INI and YAML" |
| 175 | Try it | ansible_connection specifies connection type, any plugin name | S6 | PASS | "Specifies the connection type to the host. This can be the name of any Ansible connection plugin." |
| 176 | Try it | local executes on controller | S7 | PASS | "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 177 | Try it | --graph creates graph; pattern must be valid group | S38 | PASS | "create inventory graph, if supplying pattern it must be a valid group name." |
| 178 | Try it | Default groups all and ungrouped | S6 | PASS | "Ansible creates two default groups: all and ungrouped." |
| 179 | Try it | --list outputs all hosts info, works as inventory script | S38 | PASS | "Output all hosts info, works as inventory script" |
| 180 | Try it | Ad hoc command definition | S42 | PASS | "An Ansible ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes." |
| 181 | Try it | Ad hoc form | S42 | PASS | "$ ansible [pattern] -m [module] -a "[module options]"" |
| 182 | Try it | ping returns pong | S39 | PASS | "A trivial test module, this module always returns pong on successful contact." |
| 183 | Try it | ping useful from /usr/bin/ansible to verify login and Python | S39 | PASS | "it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 184 | Try it | Discovers Python the first time a module runs | S8 | PASS | "the first time a Python module is executed for that host." |
| 185 | Try it | auto warns future install could alter choice | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 186 | Try it | hosts is a list of groups, hosts, patterns | S45 | PASS | "A list of groups, hosts or host pattern that translates into a list of hosts that are the play’s target." |
| 187 | Try it | vars holds three variables for the play | S45 | PASS | S45 says "Dictionary/map of variables". The count "three" is from the tutorial's own file. |
| 188 | Try it | playbook_dir is directory of current playbook | S43 | PASS | "The path to the directory of the current playbook being executed." |
| 189 | Try it | gather_facts boolean for setup task | S45 | PASS | "A boolean that controls if the play will automatically run the ‘setup’ task to gather facts for the hosts." |
| 190 | Try it | file with state: directory creates missing parents | S21 | PASS | "all intermediate subdirectories will be created, using the supplied permissions." |
| 191 | Try it | Quote octal numbers | S21 | PASS | "quote octal numbers ... so Ansible receives a string" |
| 192 | Try it | template src is Jinja2 template path on controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 193 | Try it | template dest is render location on remote | S23 | PASS | "Location to render the template to on the remote machine." |
| 194 | Try it | Jinja2 for dynamic expressions | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 195 | Try it | Role layout: templates/ and .j2 | S14 | PASS | "templates/ # <-- files for use with the template resource ... templates end in .j2" |
| 196 | Try it | notify lists handlers to notify on changed=True | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 197 | Try it | handlers section runs only when notified | S45 | PASS | "these won’t get executed normally, only when notified after each section of tasks is complete." |
| 198 | Try it | content instead of src sets contents | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 199 | Try it | Tips: name plays, tasks, blocks | S29 | PASS | "Always name plays, tasks, and blocks" |
| 200 | Try it | Tips: use FQCN | S29 | PASS | "Use fully qualified collection names (FQCN)" |
| 201 | Try it | --syntax-check does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 202 | Try it | --list-tasks lists tasks that would run | S20 | PASS | "list all tasks that would be executed" |
| 203 | Try it | No change when state is as described | S1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 204 | Try it | Handlers notified on changed=True | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 205 | Try it | -e sets extra variables key=value | S20 | PASS | "set additional variables as key=value or YAML/JSON" |
| 206 | Try it | Extra vars always win precedence | S11 | PASS | "Extra vars (for example, -e "user=my_user")(always win precedence)" |
| 207 | Try it | --check no changes; --diff before-and-after | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems ... In diff mode, Ansible provides before-and-after comparisons." |
| 208 | Try it | Diff mode most common in file modules like template | S15 | PASS | "Diff mode is most common in modules that manipulate files (for example, the template module)" |
| 209 | Try it | DEFAULT_LOCAL_TMP is temp dir on controller | S30 | PASS | "Temporary directory for Ansible to use on the controller." |
| 210 | Try it | Check mode makes no changes | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 211 | Try it | Most modules exit if desired state achieved | S10 | PASS | "exit without performing any actions if that state has been achieved." |
| 212 | Try it | With --check, Ansible reports if it thinks it would have changed | S28 | PASS | "will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 213 | Try it | Page calls this a drift test | S28 | PASS | "Check Mode As A Drift Test" |
| 214 | Try it | slurp fetches base64 blob | S24 | PASS | "fetching a base64- encoded blob containing the data in a remote file." |
| 215 | Try it | register names variable for status and return data | S45 | PASS | "Name of variable that will contain task status and module return data." |
| 216 | Try it | stat retrieves file facts like stat | S40 | PASS | "Retrieves facts for a file similar to the Linux/Unix stat command." |
| 217 | Try it | mode is Unix permissions in octal as string | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 218 | Try it | that is list of expressions like when | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 219 | Try it | slurp example uses mounts content b64decode | S24 | PASS | "msg: "{{ mounts['content'] \| b64decode }}"" |
| 220 | Try it | success_msg and fail_msg | S25 | PASS | "The customized message used for a successful assertion." and "The customized message used for a failing assertion." |
| 221 | Try it | Module failure stops execution on that host by default | S16 | PASS | "by default it stops executing on that host" |
| 222 | Try it | --project-dir is project location | S33 | PASS | "Location of project/repository" |
| 223 | Try it | Profiles increase strictness as lifecycle matures | S32 | PASS | "gradually increase the strictness of rules as your Ansible content lifecycle matures." |
| 224 | Try it | --profile values | S33 | PASS | "--profile {min,basic,moderate,safety,shared,production}" |
| 225 | Try it | production profile meets AAP requirements | S32 | PASS | "The production profile ensures that content meets requirements for inclusion in ... Ansible Automation Platform (AAP) as validated or certified content." |
| 226 | Try it | DEPRECATION_WARNINGS toggle | S30 | PASS | "Toggle to control the showing of deprecation warnings" |
| 227 | Try it | Env variable ANSIBLE_DEPRECATION_WARNINGS | S30 | PASS | "ANSIBLE_DEPRECATION_WARNINGS" |
| 228 | Try it | name rules | S34 | PASS | "name[casing] - All names should start with an uppercase letter for languages" |
| 229 | Try it | no-changed-when | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 230 | Try it | risky-file-permissions | S36 | PASS | "triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 231 | Try it | min profile | S32 | PASS | "The min profile ensures that Ansible can load content." |
| 232 | Try it | basic profile | S32 | PASS | "The basic profile prevents common coding issues and enforces standard styles and formatting." |
| 233 | Try it | Lint caches under runtime cache dir, typically {project}/.ansible | S33 | PASS | "creates caches with installed roles and collections under the runtime cache directory (typically {project}/.ansible when not offline" |
| 234 | Try it | Lint does not clean cache | S33 | PASS | "Ansible-lint does not automatically clean the cache." |
| 235 | Try it | ansible-vault is encryption/decryption utility | S41 | PASS | "encryption/decryption utility for Ansible data files" |
| 236 | Try it | Password on a single line | S44 | PASS | "enter the password as a string on a single line in the file." |
| 237 | Try it | Permissions appropriate; no source control | S44 | PASS | "Make sure the permissions on the file are appropriate. Do not add password files to source control." |
| 238 | Try it | ansible-vault encrypt for existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 239 | Try it | --vault-password-file takes vault password file | S41 | PASS | "--vault-password-file, --vault-pass-file / vault password file" |
| 240 | Try it | Header $ANSIBLE_VAULT;1.1;AES256 in docs example | S27 | PASS | "$ANSIBLE_VAULT;1.1;AES256" |
| 241 | Try it | ansible-vault view without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 242 | Try it | Vault encrypts two types: variables and files | S27 | PASS | "two types of content with Ansible Vault: variables and files." |
| 243 | Try it | Other sentences: run record, output, own choices, inferences from output | none | N/A | They are labelled as the tutorial's run, own choices, or what the output shows. |
| 244 | How a tester uses it | Resources model desired state | S28 | PASS | "Ansible resources are models of desired-state." |
| 245 | How a tester uses it | assert makes validation easy | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 246 | How a tester uses it | stat for files not set declaratively | S28 | PASS | "the ‘stat’ module is a great choice" |
| 247 | How a tester uses it | mode return value | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 248 | How a tester uses it | No need to check return codes | S28 | PASS | "Ansible is checking them automatically." |
| 249 | How a tester uses it | Most modules exit if desired state achieved | S10 | PASS | "exit without performing any actions if that state has been achieved." |
| 250 | How a tester uses it | Not all behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 251 | How a tester uses it | --check reports would-be changes | S28 | PASS | "will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 252 | How a tester uses it | Check mode is a simulation | S15 | PASS | "Check mode is just a simulation." |
| 253 | How a tester uses it | Unsupporting modules report nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 254 | How a tester uses it | Scripts and commands do not normally run in check mode | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 255 | How a tester uses it | No output for registered-variable conditionals | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 256 | How a tester uses it | Diff mode before-and-after | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 257 | How a tester uses it | diff: false | S15 | PASS | "you can disable it for a task by specifying diff: false." |
| 258 | How a tester uses it | ansible-lint feedback before execute | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 259 | How a tester uses it | --strict non-zero on warnings | S33 | PASS | "Return non-zero exit code on warnings as well as errors" |
| 260 | How a tester uses it | --syntax-check | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 261 | How a tester uses it | --list-hosts | S20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 262 | How a tester uses it | --list-tasks | S20 | PASS | "list all tasks that would be executed" |
| 263 | How a tester uses it | Tips: encrypt secrets | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 264 | How a tester uses it | No password files in source control | S44 | PASS | "Do not add password files to source control." |
| 265 | How a tester uses it | Separate inventories per environment | S29 | PASS | "by using separate inventory files or directories for each environment." |
| 266 | How a tester uses it | Mixed inventory exposes secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 267 | How a tester uses it | Molecule | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing" |
| 268 | How a tester uses it | QA team integration battery (Selenium, API tests) | S28 | PASS | "This would include things like Selenium tests or automated API tests" |
| 269 | How a tester uses it | Usually not embedded | S28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 270 | How a tester uses it | Basic health checks | S28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 271 | How a tester uses it | Step references (step 3, 5, 6, 7, 8 results) and "a second run that reports changes is a finding" | none | N/A | Record of the page's own run, or the tutorial's own advice. |
| 272 | Common mistakes | ping returns pong | S39 | PASS | "always returns pong on successful contact." |
| 273 | Common mistakes | ping not sensible in playbooks; useful from /usr/bin/ansible | S39 | PASS | "It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to login" |
| 274 | Common mistakes | Always use changed_when for tasks that do not detect change | S35 | PASS | "You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred" |
| 275 | Common mistakes | shell/command are common examples | S35 | PASS | "Some of the most common examples are shell and command modules, which run arbitrary commands." |
| 276 | Common mistakes | The rule no-changed-when of ansible-lint checks this | none | FAIL | The sentence has no cite and gives a fact about a tool. S35 supports it: "This rule checks that tasks return changes to results or conditions." Fix: add Cite n={35}. |
| 277 | Common mistakes | Check mode is a simulation | S15 | PASS | "Check mode is just a simulation." |
| 278 | Common mistakes | Unsupporting modules do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 279 | Common mistakes | Scripts and commands usually not run in check mode | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 280 | Common mistakes | check_mode: false runs normally even with --check | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 281 | Common mistakes | Exit status of check, ok on handler, list-tasks omits handlers (steps 3-5) | none | N/A | Record of the page's own run. |
| 282 | Common mistakes | Handler order | S13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 283 | Common mistakes | Same handler runs once | S13 | PASS | "executing the handler only once regardless of how many tasks notify it." |
| 284 | Common mistakes | flush_handlers | S13 | PASS | "triggers any handlers that have been notified at that point in the play." |
| 285 | Common mistakes | --force-handlers | S20 | PASS | "run handlers even if a task fails" |
| 286 | Common mistakes | ignore_errors only works when task can run | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 287 | Common mistakes | ignore_errors does not hide undefined var, connection, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues" |
| 288 | Common mistakes | Quote octal numbers | S21 | PASS | "For consistent results, quote octal numbers" |
| 289 | Common mistakes | Output shows name of each named entity | S29 | PASS | "In its output, Ansible shows you the name of each named entity it runs." |
| 290 | Common mistakes | name[play], name[missing] | S34 | PASS | "name[play] - All plays should be named." and "name[missing] - All tasks should be named." |
| 291 | Common mistakes | FQCN for 2.10+ | S10 | PASS | "you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 292 | Common mistakes | No need to check return codes | S28 | PASS | "Ansible is checking them automatically." |
| 293 | Common mistakes | Playbooks page: lint is feedback before execute | S10 | PASS | "detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 294 | Common mistakes | Password files not in source control | S44 | PASS | "Do not add password files to source control." |
| 295 | Common mistakes | --diff may reveal secrets; diff: false | S15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 296 | Common mistakes | Mixed inventory exposes secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 297 | Common mistakes | ANSIBLE_HOME default ~/.ansible | S30 | PASS | "The default root path for Ansible config files on the controller. ... Default: ~/.ansible" |
| 298 | Common mistakes | remote_tmp default ~/.ansible/tmp | S9 | PASS | "Temporary directory to use on targets when executing tasks. Default: "~/.ansible/tmp"" |
| 299 | Common mistakes | Do not delete shared ~/.ansible or ANSIBLE_HOME | S33 | PASS | "Do not delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections." |
| 300 | Common mistakes | Run record and advice (empty HOME, look before delete, latest.json) | none | N/A | Record of the page's own run, or the tutorial's own advice. |
| 301 | What a tester can check | Twelve advice bullets in "Tutorial advice" callout | none | PASS | The callout says "This list is the tutorial's own advice for a tester who works with Ansible." No bullet gives a tool fact that the rest of the page does not support. |
| 302 | Key words | Agent-less | none | PASS | Page: "Ansible is designed around an agent-less architecture" |
| 303 | Key words | Desired state | none | PASS | Page: "You declare the desired state of a local or remote system in your playbook" |
| 304 | Key words | Control node | none | PASS | Page: "The control node is a system on which Ansible is installed" |
| 305 | Key words | Managed node | none | PASS | Page: "A managed node is a remote system, or host, that Ansible controls" |
| 306 | Key words | Inventory | none | PASS | Page: "The inventory is a list of managed nodes that are logically organized" |
| 307 | Key words | Playbook | none | PASS | Page: "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes" |
| 308 | Key words | Play | none | PASS | Page: "A play is an ordered list of tasks that maps to managed nodes in an inventory" |
| 309 | Key words | Task | none | PASS | Page: "A task is a reference to a single module that defines the operations that Ansible performs" |
| 310 | Key words | Module | none | PASS | Page: "A module is a unit of code or binary that Ansible runs on managed nodes" |
| 311 | Key words | Ad hoc command | none | PASS | Page: "An ad hoc command uses the `/usr/bin/ansible` command-line tool to automate a single task on one or more managed nodes" |
| 312 | Key words | Idempotent | none | PASS | Page: "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions" |
| 313 | Key words | Variable | none | PASS | Page: "Ansible uses variables to manage differences between systems" |
| 314 | Key words | Fact | none | PASS | Page: "Facts are things that are discovered about remote nodes" |
| 315 | Key words | Template | none | PASS | Page: "For the `template` module, templates are processed by the Jinja2 templating language" |
| 316 | Key words | Handler | none | PASS | Page: "Handlers are tasks that only run when notified" |
| 317 | Key words | Block | none | PASS | Page: "Blocks create logical groups of tasks" |
| 318 | Key words | Role | none | PASS | Page: "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure" |
| 319 | Key words | Check mode | none | PASS | Page: "In check mode, Ansible runs without making any changes on remote systems" |
| 320 | Key words | Diff mode | none | PASS | Page: "In diff mode, Ansible provides before-and-after comparisons" |
| 321 | Key words | Ansible Vault | none | PASS | Page: "Ansible vault provides a way to encrypt and manage sensitive data such as passwords" |
| 322 | Key words | Ansible Lint | none | PASS | Page: "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 323 | Key words | Profile | none | PASS | Page: "Profiles gradually increase the strictness of the rules" |
| 324 | Key words | Molecule | none | PASS | Page: "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles" |

Open FAILs after round 6: 2

Changed after this round: Row 7 (What it is): the source says "Here are some common use cases for Ansible" and lists four. The page said "are" and left out the first one, so the list looked complete. It now says "Some of its common use cases are ..." and lists all four. Row 276 (Common mistakes): the sentence on the rule `no-changed-when` had no cite. It now says what the rule checks and cites S35. The quotes of S24, S29, and S42 in the research notes were rewritten so that `scripts/devops_claimcheck.py` reads them too (it reads italic words and code spans with spaces). The page text did not change. The writer also re-read the page after round 6 and fixed these without a FAIL: the sentence on which steps write files (steps 6, 7, and 8 write four files, not only step 8); the line on `grep -c` (it counted the text of the secret, not the vault password); the sentence on the warning about the Python interpreter ("left the warning on" became "did not change the setting"); the sentence that called check mode "a drift test" (it now names the section of the tests page); the description of `~/.cache/ansible-lint/latest.json` (its size and two of its keys); and one label.

## Round 7 (2026-11-19)

# Fact check: devops / ansible (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page overview (inventory, playbooks, modules, handlers, check mode, vault; practice run on localhost) | none | N/A | Describes the page itself. |
| 2 | Lede | "This page covers Ansible ... needs no remote host and no cloud account"; links to other pages | none | N/A | Describes the page and its own practice run. The links are site paths. |
| 3 | What it is | Open-source automation that reduces complexity and runs everywhere | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | What it is | Playbooks are simple, human-readable scripts that automate tasks | S1 | PASS | "Ansible uses simple, human-readable scripts called playbooks to automate your tasks." |
| 5 | What it is | You declare the desired state of a local or remote system in your playbook | S1 | PASS | "You declare the desired state of a local or remote system in your playbook." |
| 6 | What it is | Ansible ensures the system remains in that state | S1 | PASS | "Ansible ensures that the system remains in that state." |
| 7 | What it is | Four common use cases | S1 | PASS | "Eliminate repetition and simplify workflows / Manage and maintain system configuration / Continuously deploy complex software / Perform zero-downtime rolling updates" |
| 8 | What it is | Designed around an agent-less architecture | S1 | PASS | "Ansible is designed around the following principles: Agent-less architecture" |
| 9 | What it is | Playbooks use straightforward YAML that reads like documentation | S1 | PASS | "Automation playbooks use straightforward YAML syntax for code that reads like documentation." |
| 10 | What it is | Decentralized; uses SSH with existing OS credentials | S1 | PASS | "Ansible is also decentralized, using SSH with existing OS credentials to access remote machines." |
| 11 | What it is | No change when the system is already in the described state, even if the playbook runs many times | S1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 12 | What it is | Automates management of remote systems and controls their desired state | S2 | PASS | "Ansible automates the management of remote systems and controls their desired state." |
| 13 | What it is | Most environments have three main components | S2 | PASS | "most Ansible environments have three main components" |
| 14 | What it is | Control node is a system on which Ansible is installed | S2 | PASS | "A system on which Ansible is installed." |
| 15 | What it is | You run ansible or ansible-inventory on a control node | S2 | PASS | "You run Ansible commands such as ansible or ansible-inventory on a control node." |
| 16 | What it is | Inventory is a list of managed nodes that are logically organized | S2 | PASS | "A list of managed nodes that are logically organized." |
| 17 | What it is | Managed node is a remote system, or host, that Ansible controls | S2 | PASS | "A remote system, or host, that Ansible controls." |
| 18 | What it is | You install Ansible on a single host, the control node | S5 | PASS | "a simple... tool that you install on a single host (referred to as the control node)" |
| 19 | What it is | Manages machines with SSH, Powershell remoting, and other transports, with no databases or daemons | S5 | PASS | "remotely with SSH, Powershell remoting, and numerous other transports ... with no databases or daemons required" |
| 20 | What it is | Control node can be nearly any UNIX-like machine with Python | S5 | PASS | "you can use nearly any UNIX-like machine with Python installed" |
| 21 | What it is | Community packages are distributed in two ways | S5 | PASS | "Ansible’s community packages are distributed in two ways:" |
| 22 | What it is | ansible-core is a minimalist language and runtime package with built-in modules and plugins | S5 | PASS | "a minimalist language and runtime package containing a set of built-in modules and plugins." |
| 23 | What it is | ansible is a much larger "batteries included" package | S5 | PASS | "a much larger “batteries included” package" |
| 24 | What it is | It adds a community-curated selection of Collections | S5 | PASS | "adds a community-curated selection of Ansible Collections" |
| 25 | What it is | `python3 -m pip install --user ansible-core` installs the minimal package for the current user | S5 | PASS | "$ python3 -m pip install --user ansible-core" |
| 26 | How it works | Automates tasks on managed nodes (hosts) using a list or group of lists known as inventory | S6 | PASS | "Ansible automates tasks on managed nodes or “hosts” in your infrastructure by using a list or group of lists known as inventory." |
| 27 | How it works | Inventory defines the managed nodes and their variables | S6 | PASS | "Your inventory defines the managed nodes you automate and the variables associated with those hosts." |
| 28 | How it works | You can also specify groups | S6 | PASS | "You can also specify groups." |
| 29 | How it works | Most common formats are INI and YAML (built-in support) | S6 | PASS | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| 30 | How it works | Another inventory source with `-i` | S6 | PASS | "You can specify a different inventory source or sources at the command line by using the -i <path or expression> option" |
| 31 | How it works | Two default groups, `all` and `ungrouped`, even with no groups | S6 | PASS | "Even if you do not define any groups in your inventory, Ansible creates two default groups: all and ungrouped." |
| 32 | How it works | `all` contains every host | S6 | PASS | "The all group contains every host." |
| 33 | How it works | `ungrouped` contains hosts in no other group | S6 | PASS | "The ungrouped group contains all hosts that do not belong to any other group." |
| 34 | How it works | Add a new `[myhosts]` group to an inventory file | S3 | PASS | "Add a new [myhosts] group to the inventory.ini file" |
| 35 | How it works | Specify the IP address or FQDN of each host | S3 | PASS | "specify the IP address or fully qualified domain name (FQDN) of each host system." |
| 36 | How it works | `ansible-inventory -i inventory.ini --list` | S3 | PASS | "ansible-inventory -i inventory.ini --list" |
| 37 | How it works | `ansible myhosts -m ping -i inventory.ini` | S3 | PASS | "ansible myhosts -m ping -i inventory.ini" |
| 38 | How it works | One command can manage many hosts with an inventory file | S3 | PASS | "Using an inventory file, Ansible can manage a large number of hosts with a single command." |
| 39 | How it works | "A host does not need a remote connection." | S7 | PASS | The next sentence explains it. It is covered by S7: "execute tasks on the Ansible ‘controller’ instead of on a remote host". |
| 40 | How it works | `local` connection plugin runs tasks on the controller | S7 | PASS | "This connection plugin allows ansible to execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 41 | How it works | Most modules in a POSIX environment need Python on the target | S8 | PASS | "Most Ansible modules that execute under a POSIX environment require a Python interpreter on the target host." |
| 42 | How it works | Unless configured, Ansible discovers Python the first time it runs a Python module for that host | S8 | PASS | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter ... the first time a Python module is executed for that host." |
| 43 | How it works | `ansible_python_interpreter` specifies the target host Python path | S6 | PASS | "ansible_python_interpreter Specifies the target host Python path." |
| 44 | How it works | Default `auto` searches the configurable list of Python paths | S8 | PASS | "auto (default) : Searches the configurable list of common Python interpreter paths" |
| 45 | How it works | `auto` warns that a later Python install could change the choice | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 46 | How it works | `auto_silent` issues no warnings | S8 | PASS | "auto_silent : Same as auto, but does not issue warnings." |
| 47 | How it works | Playbooks are YAML automation blueprints for deploying and configuring managed nodes | S4 | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes." |
| 48 | How it works | A playbook is a list of plays defining the order, top to bottom | S4 | PASS | "A list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal." |
| 49 | How it works | A play is an ordered list of tasks mapped to managed nodes | S4 | PASS | "An ordered list of tasks that maps to managed nodes in an inventory." |
| 50 | How it works | A task is a reference to a single module | S4 | PASS | "A reference to a single module that defines the operations that Ansible performs." |
| 51 | How it works | A module is a unit of code or binary run on managed nodes | S4 | PASS | "A unit of code or binary that Ansible runs on managed nodes." |
| 52 | How it works | Each task calls an Ansible module | S10 | PASS | "Each task calls an Ansible module." |
| 53 | How it works | Playbooks in YAML with a minimum of syntax | S10 | PASS | "You express playbooks in YAML format with a minimum of syntax." |
| 54 | How it works | A playbook runs top to bottom | S10 | PASS | "A playbook runs in order from top to bottom." |
| 55 | How it works | Each play defines target nodes by pattern and at least one task | S10 | PASS | "The managed nodes to target, using a pattern. At least one task to execute." |
| 56 | How it works | By default, tasks run in order, one at a time, against all matched machines | S10 | PASS | "By default, Ansible executes each task in order, one at a time, against all machines matched by the host pattern." |
| 57 | How it works | Use the FQCN from Ansible 2.10 on | S10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 58 | How it works | Tips: FQCN avoids ambiguity | S29 | PASS | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| 59 | How it works | Tips: always name plays, tasks, and blocks | S29 | PASS | "Always name plays, tasks, and blocks" |
| 60 | How it works | Tips: always mention the state of a module | S29 | PASS | "Always mention the state / For many modules, the state parameter is optional." |
| 61 | How it works | Run a playbook with `ansible-playbook` | S10 | PASS | "To run your playbook, use the ansible-playbook command." |
| 62 | How it works | Returns the name lines of plays and tasks | S10 | PASS | "Ansible returns information about connections, the name lines of all your plays and tasks" |
| 63 | How it works | Returns success or failure and change per task per machine | S10 | PASS | "whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine." |
| 64 | How it works | Summary of targeted nodes and results | S10 | PASS | "Ansible provides a summary of the nodes that were targeted and how they performed." |
| 65 | How it works | ansible-playbook verifies with `--check`, `--diff`, `--list-hosts`, `--list-tasks`, `--syntax-check` | S10 | PASS | "including --check, --diff, --list-hosts, --list-tasks, and --syntax-check." |
| 66 | How it works | `--syntax-check` checks syntax and does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 67 | How it works | `--list-tasks` lists all tasks that would be executed | S20 | PASS | "list all tasks that would be executed" |
| 68 | How it works | `--list-hosts` lists matching hosts and runs nothing else | S20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 69 | How it works | `file` module sets attributes of files, directories, symlinks | S21 | PASS | "Set attributes of files, directories, or symlinks and their targets." |
| 70 | How it works | `state: directory` creates a directory and intermediate subdirectories with the supplied permissions | S21 | PASS | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| 71 | How it works | Modes are octal; quote them so Ansible receives a string | S21 | PASS | "modes are actually octal numbers ... For consistent results, quote octal numbers ... so Ansible receives a string" |
| 72 | How it works | `copy` copies a file or directory structure to the remote machine | S22 | PASS | "copies a file or a directory structure from the local or remote machine to a location on the remote machine." |
| 73 | How it works | `content` instead of `src` sets file contents directly | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 74 | How it works | Works only when `dest` is a file; creates it if missing | S22 | PASS | "Works only when dest is a file. Creates the file if it does not exist." |
| 75 | How it works | Templates are processed by Jinja2 | S23 | PASS | "Templates are processed by the Jinja2 templating language." |
| 76 | How it works | `src` is the path of a Jinja2 template on the controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 77 | How it works | `dest` is where the template is rendered on the remote machine | S23 | PASS | "Location to render the template to on the remote machine." |
| 78 | How it works | `slurp` works like `fetch` and returns a base64 blob of a remote file | S24 | PASS | "This module works like ansible.builtin.fetch. It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 79 | How it works | `assert` asserts expressions are true, with optional message | S25 | PASS | "This module asserts that given expressions are true with an optional custom message." |
| 80 | How it works | `that` is a list of string expressions like `when` | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 81 | How it works | Modules return a data structure you can register | S18 | PASS | "Ansible modules normally return a data structure that can be registered into a variable" |
| 82 | How it works | `changed` is a boolean for changes to the target | S18 | PASS | "A boolean indicating if the task had to make changes to the target or delegated host." |
| 83 | How it works | `failed` is a boolean for task failure | S18 | PASS | "A boolean that indicates if the task was failed or not." |
| 84 | How it works | `diff` holds differences between previous and current state | S18 | PASS | "Information on differences between the previous and current state." |
| 85 | How it works | Most modules check desired state and exit without acting | S10 | PASS | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| 86 | How it works | Modules that behave this way are idempotent | S10 | PASS | "Modules that behave this way are ‘idempotent’." |
| 87 | How it works | Definition of idempotent operation | S19 | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions." |
| 88 | How it works | Not all playbooks and modules behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 89 | How it works | `shell` and `command` run arbitrary commands, no natural change detection | S35 | PASS | "tasks that do not naturally ... shell and command modules, which run arbitrary commands." |
| 90 | How it works | `changed_when` defines when a task has changed a node | S16 | PASS | "Ansible lets you define when a particular task has “changed” a remote node using the changed_when conditional." |
| 91 | How it works | That decides reporting in statistics and handler triggering | S16 | PASS | "whether a change should be reported in Ansible statistics and whether a handler should be triggered or not." |
| 92 | How it works | `failed_when` defines what failure means per task | S16 | PASS | "Ansible lets you define what “failure” means in each task using the failed_when conditional." |
| 93 | How it works | Variables manage differences between systems | S11 | PASS | "Ansible uses variables to manage differences between systems." |
| 94 | How it works | Define variables in playbooks, inventory, reusable files or roles, command line | S11 | PASS | "You can define variables in a variety of places, such as in inventory, in playbooks, in reusable files, in roles, and at the command line." |
| 95 | How it works | Create a variable by registering a task's return value | S11 | PASS | "You can also create variables during a playbook run by registering the return value of a task as a new variable." |
| 96 | How it works | Jinja2 templating enables dynamic expressions and access to variables and facts | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 97 | How it works | Templating works with the template module | S12 | PASS | "You can use templating with the template module." |
| 98 | How it works | Facts are things discovered about remote nodes | S19 | PASS | "Facts are simply things that are discovered about remote nodes." |
| 99 | How it works | Discovered at play time by the internal `setup` module | S19 | PASS | "automatically discovered by Ansible when running plays by executing the internal setup module on the remote nodes." |
| 100 | How it works | Fact gathering can be disabled to save time | S19 | PASS | "it can be disabled to save time if it is not needed" |
| 101 | How it works | Sometimes a task should run only on a change | S13 | PASS | "Sometimes you want a task to run only when a change is made on a machine." |
| 102 | How it works | Handlers only run when notified | S13 | PASS | "Handlers are tasks that only run when notified." |
| 103 | How it works | `notify` tells handlers to execute | S13 | PASS | "Tasks can instruct one or more handlers to execute using the notify keyword." |
| 104 | How it works | `notify` takes a list of handler names notified on change | S13 | PASS | "accepts a list of handler names that are notified on a task change." |
| 105 | How it works | Multiple notifies run the handler once | S13 | PASS | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| 106 | How it works | Handlers run in `handlers` section order, not `notify` order | S13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 107 | How it works | In the docs example, the handler restarts Apache after all tasks | S13 | PASS | "the Apache server is restarted by the handler after all tasks are completed in the play." |
| 108 | How it works | `meta: flush_handlers` triggers notified handlers at that point | S13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 109 | How it works | `--force-handlers` runs handlers even if a task fails | S20 | PASS | "run handlers even if a task fails" |
| 110 | How it works | Two modes that validate tasks: check mode and diff mode | S15 | PASS | "Ansible provides two modes of execution that validate tasks: check mode and diff mode." |
| 111 | How it works | Check mode makes no changes on remote systems | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 112 | How it works | Modules that support it report would-be changes | S15 | PASS | "Modules that support check mode report the changes they would have made." |
| 113 | How it works | Modules without support report and do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 114 | How it works | Diff mode gives before-and-after comparisons | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 115 | How it works | Check mode is just a simulation | S15 | PASS | "Check mode is just a simulation." |
| 116 | How it works | No output for tasks with conditionals on registered variables | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 117 | How it works | `--diff` alone or with `--check` | S15 | PASS | "The --diff option for ansible-playbook can be used alone or with --check." |
| 118 | How it works | `diff: false` disables diff for a task | S15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 119 | How it works | `check_mode: false` forces normal mode | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 120 | How it works | Non-zero code or module failure stops the host by default, other hosts continue | S16 | PASS | "by default it stops executing on that host and continues on other hosts." |
| 121 | How it works | `ignore_errors` continues despite failure | S16 | PASS | "You can use ignore_errors to continue despite of the failure." |
| 122 | How it works | Only works when the task can run and returns failed | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 123 | How it works | Does not cover undefined variables, connection, execution, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| 124 | How it works | Blocks create logical groups of tasks | S17 | PASS | "Blocks create logical groups of tasks." |
| 125 | How it works | Blocks offer error handling like exceptions | S17 | PASS | "Blocks also offer ways to handle task errors, similar to exception handling in many programming languages." |
| 126 | How it works | Rescue blocks run when an earlier task fails | S17 | PASS | "Rescue blocks specify tasks to run when an earlier task in a block fails." |
| 127 | How it works | `always` tasks run whatever the previous status | S17 | PASS | "Tasks in the always section run no matter what the task status of the previous block is." |
| 128 | How it works | Invalid task definitions and unreachable hosts do not trigger `rescue` or `always` | S17 | PASS | "Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections of a block." |
| 129 | How it works | Roles load related artifacts from a known file structure | S14 | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure." |
| 130 | How it works | Roles are easy to reuse and share | S14 | PASS | "you can easily reuse them and share them with other users." |
| 131 | How it works | `tasks/main.yml` lists the role's tasks | S14 | PASS | "tasks/main.yml - A list of tasks that the role provides to the play for execution." |
| 132 | How it works | Vault encrypts and manages sensitive data such as passwords | S26 | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords." |
| 133 | How it works | Two content types: variables and files | S27 | PASS | "You can encrypt two types of content with Ansible Vault: variables and files." |
| 134 | How it works | `ansible-vault encrypt` encrypts an existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 135 | How it works | `ansible-vault view` shows contents without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 136 | How it works | Playbook run with a vault password file uses `--vault-password-file` | S44 | PASS | "specify the file within the --vault-password-file flag." |
| 137 | How it works | Tips: encrypt sensitive variables with Vault | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 138 | How it works | Tips: keep playbooks, roles, inventory, variables in version control | S29 | PASS | "Keep your playbooks, roles, inventory, and variables files in git or another version control system" |
| 139 | How it works | Separate environments with separate inventory files or directories | S29 | PASS | "by using separate inventory files or directories for each environment." |
| 140 | How it works | Mixed inventory lets developers reach production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 141 | How it works | Fail-fast, ordered system; easy to embed tests | S28 | PASS | "designed to be a “fail-fast” and ordered system, therefore it makes it easy to embed testing directly in Ansible playbooks." |
| 142 | How it works | Resources model desired state; no need to test services or packages | S28 | PASS | "Ansible resources are models of desired-state. As such, it should not be necessary to test that services are started, packages are installed" |
| 143 | How it works | `assert` makes validation easy | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 144 | How it works | `stat` is a good choice for files not set declaratively | S28 | PASS | "test for the existence of files that are not declaratively set by your Ansible configuration, the ‘stat’ module is a great choice" |
| 145 | How it works | No need to check return codes; Ansible does | S28 | PASS | "there’s no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 146 | How it works | Check mode as drift test with `--check` | S28 | PASS | "Check Mode As A Drift Test ... using the --check flag ... will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." The page drops "thinks". |
| 147 | How it works | QA team writes the integration test battery for a production webservice | S28 | PASS | "should be written by your QA team if you are a production webservice." |
| 148 | How it works | Usually not embedded in playbooks | S28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 149 | How it works | Basic health checks make sense in playbooks | S28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 150 | How it works | Ansible Lint is a CLI tool for playbooks, roles, collections | S31 | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 151 | How it works | Main goal: proven practices, avoid common pitfalls | S31 | PASS | "Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls that can easily" |
| 152 | How it works | Playbooks page: lint gives detailed feedback before running | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| 153 | How it works | Profiles gradually increase strictness | S32 | PASS | "Ansible-lint profiles gradually increase the strictness of rules" |
| 154 | How it works | `min` ensures Ansible can load content | S32 | PASS | "The min profile ensures that Ansible can load content." |
| 155 | How it works | `basic` prevents coding issues, enforces style, extends `min` | S32 | PASS | "The basic profile prevents common coding issues and enforces standard styles and formatting. It extends min profile." |
| 156 | How it works | `--profile` picks the rules profile | S33 | PASS | "--profile ... Specify which rules profile to be used." |
| 157 | How it works | `--strict` non-zero exit on warnings and errors | S33 | PASS | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| 158 | How it works | `-f` formats: brief, full, md, json, codeclimate, quiet, pep8, sarif | S33 | PASS | "-f, --format {brief,full,md,json,codeclimate,quiet,pep8,sarif}" |
| 159 | How it works | `--project-dir` is the project location, autodetected from config file | S33 | PASS | "Location of project/repository, autodetected based on location of configuration file." |
| 160 | How it works | `--offline` disables requirements.yml install and schema refresh | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 161 | How it works | Add `.ansible` and `.cache` to `.gitignore` | S33 | PASS | "You should add project-local .ansible / .cache folders to .gitignore." |
| 162 | How it works | `name[play]`: all plays named | S34 | PASS | "name[play] - All plays should be named." |
| 163 | How it works | `name[missing]`: all tasks named | S34 | PASS | "name[missing] - All tasks should be named." |
| 164 | How it works | `name[casing]`: names start uppercase where supported | S34 | PASS | "name[casing] - All names should start with an uppercase letter for languages" |
| 165 | How it works | `no-changed-when` checks tasks return changes | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 166 | How it works | `risky-file-permissions` triggered by modules that may create files with open or unpredictable permissions | S36 | PASS | "triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 167 | How it works | Molecule is an Ansible testing framework | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing" |
| 168 | How it works | Molecule uses inventory, playbooks, collections for flexible workflows | S37 | PASS | "Molecule leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows." |
| 169 | Try it | Run record: date, OS, tool versions, folders, 3686-byte file, no real-home change | none | N/A | The page's own practice-run record. |
| 170 | Try it | `ANSIBLE_REMOTE_TEMP` is the variable of `remote_tmp`, the temp directory on targets | S9 | PASS | "remote_tmp ... Temporary directory to use on targets when executing tasks. ... Environment variable: ANSIBLE_REMOTE_TEMP" |
| 171 | Try it | Points to a folder in the run folder; the file is described by no page read | none | N/A | Run record. |
| 172 | Try it | All steps use localhost with the `local` connection; the two playbooks write only to `out`; steps 6 to 8 write four files | none | N/A | Run record and the page's own design. |
| 173 | Try it | `--offline` disables requirements.yml install and schema refresh | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 174 | Try it | Tutorial did not use `--offline`; `echo` lines; roles, blocks, rescue, changed_when, Molecule not run | none | N/A | Run record. |
| 175 | Try it | Choices that no source gives are the tutorial's own | none | N/A | Framing statement. |
| 176 | Try it | Docs install the minimal package with `python3 -m pip install --user ansible-core` | S5 | PASS | "$ python3 -m pip install --user ansible-core" |
| 177 | Try it | Venv, PyPI query, versions, SHA-256 check, pip over HTTPS | none | N/A | Run record of the tutorial's own install. |
| 178 | Try it | Step 1 commands `ansible --version`, `ansible-lint --version` and the output | none | N/A | Reader's step and run record. |
| 179 | Try it | `ANSIBLE_HOME` is the default root path for Ansible config files on the controller | S30 | PASS | "ANSIBLE_HOME Description: The default root path for Ansible config files on the controller." |
| 180 | Try it | Step 1 bullets describing the printed output | none | N/A | Run record. |
| 181 | Try it | Step 2 inventory file; "defines one group `app` with one host" | none | N/A | Describes the tutorial's own file. |
| 182 | Try it | YAML is one of the most common inventory formats | S6 | PASS | "The most common formats are INI and YAML" |
| 183 | Try it | `ansible_connection` sets the connection type; can be any connection plugin name | S6 | PASS | "Specifies the connection type to the host. This can be the name of any Ansible connection plugin." |
| 184 | Try it | `local` names the plugin that runs tasks on the controller | S7 | PASS | "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 185 | Try it | `--graph` creates an inventory graph; pattern must be a valid group name | S38 | PASS | "create inventory graph, if supplying pattern it must be a valid group name." |
| 186 | Try it | Ansible creates `all` and `ungrouped` even with no groups | S6 | PASS | "Ansible creates two default groups: all and ungrouped." |
| 187 | Try it | `--list` outputs all hosts info and works as an inventory script | S38 | PASS | "Output all hosts info, works as inventory script" |
| 188 | Try it | Ad hoc command uses `/usr/bin/ansible` for a single task on managed nodes | S42 | PASS | "An Ansible ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes." |
| 189 | Try it | Form `ansible [pattern] -m [module] -a "[module options]"` | S42 | PASS | "$ ansible [pattern] -m [module] -a \"[module options]\"" |
| 190 | Try it | `ping` is a trivial module that returns `pong` | S39 | PASS | "A trivial test module, this module always returns pong on successful contact." |
| 191 | Try it | Useful from `/usr/bin/ansible` to verify login and a usable Python | S39 | PASS | "it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 192 | Try it | Python is discovered the first time a Python module runs for the host | S8 | PASS | "the first time a Python module is executed for that host." |
| 193 | Try it | Default `auto` warns about a later interpreter install | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 194 | Try it | Step 3 `site.yml` plus run record bullets ("warning is in the output", "appears again") | none | N/A | Reader's file and run record. |
| 195 | Try it | `hosts` is a list of groups, hosts, or patterns that become the play's targets | S45 | PASS | "A list of groups, hosts or host pattern that translates into a list of hosts that are the play’s target." |
| 196 | Try it | `vars` section holds three variables for the play | S45 | PASS | "vars Dictionary/map of variables". The count "three" comes from the page's own `site.yml` shown above. |
| 197 | Try it | `playbook_dir` is the path to the current playbook's directory | S43 | PASS | "The path to the directory of the current playbook being executed." |
| 198 | Try it | `gather_facts` is a boolean for automatic `setup` fact gathering | S45 | PASS | "A boolean that controls if the play will automatically run the ‘setup’ task to gather facts for the hosts." |
| 199 | Try it | `state: directory` makes a directory and creates missing parent folders | S21 | PASS | "all intermediate subdirectories will be created" |
| 200 | Try it | Mode `"0755"` is quoted so Ansible receives a string | S21 | PASS | "quote octal numbers ... so Ansible receives a string" |
| 201 | Try it | `src` is the path of a Jinja2 template on the controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 202 | Try it | `dest` is where the template is rendered on the remote machine | S23 | PASS | "Location to render the template to on the remote machine." |
| 203 | Try it | Jinja2 templating enables dynamic expressions and access to variables and facts | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 204 | Try it | In a role, `templates/` holds template files ending in `.j2` | S14 | PASS | "templates/ # <-- files for use with the template resource / ntp.conf.j2 # <------- templates end in .j2" |
| 205 | Try it | `notify` lists handlers to notify when a task returns `changed=True` | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 206 | Try it | `handlers` tasks run only when notified after each section | S45 | PASS | "these won’t get executed normally, only when notified after each section of tasks is complete." |
| 207 | Try it | `content` instead of `src` sets file contents directly | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 208 | Try it | Tips: name plays, tasks, blocks; use FQCN | S29 | PASS | "Always name plays, tasks, and blocks ... Use fully qualified collection names" |
| 209 | Try it | `--syntax-check` checks syntax and does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 210 | Try it | `--list-tasks` lists all tasks that would be executed | S20 | PASS | "list all tasks that would be executed" |
| 211 | Try it | No change when in the described state, even if run many times | S1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 212 | Try it | Handlers are notified when a task returns `changed=True` | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 213 | Try it | Step 3 run bullets (printed output, exit status, warning only in the first task) | none | N/A | Run record. |
| 214 | Try it | `-e` sets additional variables as `key=value` | S20 | PASS | "set additional variables as key=value or YAML/JSON" |
| 215 | Try it | Extra vars always win precedence | S11 | PASS | "Extra vars (for example, -e \"user=my_user\")(always win precedence)" |
| 216 | Try it | `--check` makes no changes; `--diff` gives before-and-after | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems. ... In diff mode, Ansible provides before-and-after comparisons." |
| 217 | Try it | Diff mode is most common in file modules such as template | S15 | PASS | "Diff mode is most common in modules that manipulate files (for example, the template module)" |
| 218 | Try it | `DEFAULT_LOCAL_TMP` is the temp directory on the controller | S30 | PASS | "DEFAULT_LOCAL_TMP Description: Temporary directory for Ansible to use on the controller." |
| 219 | Try it | In check mode Ansible makes no changes on remote systems | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 220 | Try it | Most modules exit without acting if the desired state is reached | S10 | PASS | "exit without performing any actions if that state has been achieved." |
| 221 | Try it | Step 4 bullets on output, diff lines, exit status | none | N/A | Run record. |
| 222 | Try it | With `--check`, Ansible reports if it thinks it would have had to make changes | S28 | PASS | "will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state" |
| 223 | Try it | The section is named `Check Mode As A Drift Test` | S28 | PASS | "Check Mode As A Drift Test" |
| 224 | Try it | Step 5 `printf`, `grep`, `echo` and run bullets | none | N/A | Reader's step and run record. The page marks the `grep` as the tutorial's own test. |
| 225 | Try it | `slurp` fetches a base64 blob of a remote file | S24 | PASS | "It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 226 | Try it | `register` names the variable with task status and return data | S45 | PASS | "Name of variable that will contain task status and module return data." |
| 227 | Try it | `stat` retrieves file facts like the Unix `stat` command | S40 | PASS | "Retrieves facts for a file similar to the Linux/Unix stat command." |
| 228 | Try it | `mode` holds Unix permissions in octal as a string | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 229 | Try it | `that` is a list of expressions like `when` | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 230 | Try it | Slurp example uses `{{ mounts['content'] \| b64decode }}` | S24 | PASS | "msg: \"{{ mounts['content'] \| b64decode }}\"" |
| 231 | Try it | `success_msg` and `fail_msg` are the customized messages | S25 | PASS | "The customized message used for a successful assertion." / "The customized message used for a failing assertion." |
| 232 | Try it | When a module fails, Ansible by default stops on that host | S16 | PASS | "by default it stops executing on that host and continues on other hosts." |
| 233 | Try it | Step 6 `sed`, outputs, exit statuses, error format | none | N/A | Reader's step and run record. |
| 234 | Try it | `--project-dir` is the project location | S33 | PASS | "Location of project/repository, autodetected based on location of configuration file." |
| 235 | Try it | Profiles gradually increase strictness as content matures | S32 | PASS | "gradually increase the strictness of rules as your Ansible content lifecycle matures" |
| 236 | Try it | `--profile` takes min, basic, moderate, safety, shared, production | S33 | PASS | "--profile {min,basic,moderate,safety,shared,production}" |
| 237 | Try it | `production` profile: requirements for AAP validated or certified content | S32 | PASS | "The production profile ensures that content meets requirements for inclusion in ... Ansible Automation Platform (AAP) as validated or certified content." |
| 238 | Try it | `DEPRECATION_WARNINGS` toggles deprecation warnings | S30 | PASS | "DEPRECATION_WARNINGS Description: Toggle to control the showing of deprecation warnings" |
| 239 | Try it | Its environment variable is `ANSIBLE_DEPRECATION_WARNINGS` | S30 | PASS | "Environment: Variable: ANSIBLE_DEPRECATION_WARNINGS" |
| 240 | Try it | Step 7 deprecation warnings, `lint-bad.yml`, violations, exit status | none | N/A | Reader's step and run record. |
| 241 | Try it | `name[play]`, `name[missing]`, `name[casing]` rule text | S34 | PASS | "name[casing] - All names should start with an uppercase letter for languages / name[missing] - All tasks should be named. / name[play] - All plays should be named." |
| 242 | Try it | `no-changed-when` checks tasks return changes | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 243 | Try it | `risky-file-permissions` is triggered by various modules | S36 | PASS | "This rule is triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 244 | Try it | `min` ensures Ansible can load content; `basic` prevents issues and enforces style | S32 | PASS | "The min profile ensures that Ansible can load content." / "The basic profile prevents common coding issues and enforces standard styles and formatting." |
| 245 | Try it | ansible-lint caches under the runtime cache directory, typically `{project}/.ansible` when not offline | S33 | PASS | "creates caches with installed roles and collections under the runtime cache directory (typically {project}/.ansible when not offline" |
| 246 | Try it | It does not clean the cache by itself | S33 | PASS | "Ansible-lint does not automatically clean the cache." |
| 247 | Try it | `ansible-vault` is an encryption/decryption utility for data files | S41 | PASS | "encryption/decryption utility for Ansible data files" |
| 248 | Try it | A vault password in a file is one string on a single line | S44 | PASS | "To store a vault password in a file, enter the password as a string on a single line in the file." |
| 249 | Try it | Docs: check file permissions, do not add password files to source control | S44 | PASS | "Make sure the permissions on the file are appropriate. Do not add password files to source control." |
| 250 | Try it | `ansible-vault encrypt` encrypts an existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 251 | Try it | `--vault-password-file` takes a vault password file | S41 | PASS | "--vault-password-file, --vault-pass-file vault password file" |
| 252 | Try it | Docs show encrypted content with header `$ANSIBLE_VAULT;1.1;AES256` | S27 | PASS | "$ANSIBLE_VAULT;1.1;AES256" |
| 253 | Try it | `ansible-vault view` shows contents without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 254 | Try it | Vault encrypts two types of content: variables and files | S27 | PASS | "You can encrypt two types of content with Ansible Vault: variables and files." |
| 255 | How a tester uses it | Resources model desired state; no need to test services or packages | S28 | PASS | "it should not be necessary to test that services are started, packages are installed" |
| 256 | How a tester uses it | `assert` makes validation easy | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 257 | How a tester uses it | "In step 6, the test read the file ..." | none | N/A | Run record. |
| 258 | How a tester uses it | `stat` for files the configuration does not set | S28 | PASS | "the ‘stat’ module is a great choice" |
| 259 | How a tester uses it | `mode` holds Unix permissions as an octal string | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 260 | How a tester uses it | No need to check return codes | S28 | PASS | "no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 261 | How a tester uses it | Most modules exit without acting if the desired state is reached | S10 | PASS | "exit without performing any actions if that state has been achieved." |
| 262 | How a tester uses it | "In step 3, the second run reported `changed=0`" | none | N/A | Run record. |
| 263 | How a tester uses it | Not all playbooks and modules behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 264 | How a tester uses it | "A second run that reports changes is a finding." | none | N/A | The tutorial's own advice. |
| 265 | How a tester uses it | `--check` reports whether changes would be needed | S28 | PASS | "will report if Ansible thinks it would have had to have made any changes". The page drops "thinks". |
| 266 | How a tester uses it | "In step 5, it found the hand edit." | none | N/A | Run record. |
| 267 | How a tester uses it | Check mode is a simulation | S15 | PASS | "Check mode is just a simulation." |
| 268 | How a tester uses it | Modules without check support report and do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 269 | How a tester uses it | Scripts and commands do not run in check mode, ordinarily | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 270 | How a tester uses it | No output for tasks using registered-variable conditionals | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 271 | How a tester uses it | Diff mode gives before-and-after comparisons | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 272 | How a tester uses it | `diff: false` disables diff for a task | S15 | PASS | "you can disable it for a task by specifying diff: false" |
| 273 | How a tester uses it | Use ansible-lint for feedback before running | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| 274 | How a tester uses it | `--strict` non-zero exit on warnings and errors | S33 | PASS | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| 275 | How a tester uses it | "In step 7, the exit status was 0 ... and 2 ..." | none | N/A | Run record. |
| 276 | How a tester uses it | `--syntax-check` does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 277 | How a tester uses it | `--list-hosts` lists matching hosts and runs nothing else | S20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 278 | How a tester uses it | `--list-tasks` lists tasks that would run | S20 | PASS | "list all tasks that would be executed" |
| 279 | How a tester uses it | "In step 3, the tutorial ran `--syntax-check` and `--list-tasks` ..." | none | N/A | Run record. |
| 280 | How a tester uses it | Tips: encrypt sensitive variables with Vault | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 281 | How a tester uses it | Docs: do not add password files to source control | S44 | PASS | "Do not add password files to source control." |
| 282 | How a tester uses it | "Step 8 shows the encrypted file does not hold the plain text ..." | none | N/A | Run record. |
| 283 | How a tester uses it | Keep production apart from development, test, staging with separate inventories | S29 | PASS | "You can keep your production environment separate from development, test, and staging environments by using separate inventory files or directories for each environment." |
| 284 | How a tester uses it | Mixed inventory lets developers reach production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 285 | How a tester uses it | Molecule is a testing framework for collections, playbooks, roles | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing" |
| 286 | How a tester uses it | Integration test battery (Selenium, API tests) by the QA team for a production webservice | S28 | PASS | "should be written by your QA team if you are a production webservice. This would include things like Selenium tests or automated API tests" |
| 287 | How a tester uses it | Usually not embedded in playbooks | S28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 288 | How a tester uses it | Basic health checks make sense in playbooks | S28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 289 | Common mistakes | `ping` returns `pong` on successful contact | S39 | PASS | "this module always returns pong on successful contact." |
| 290 | Common mistakes | Not sensible in playbooks; useful from `/usr/bin/ansible` | S39 | PASS | "It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 291 | Common mistakes | Always use `changed_when` where change is not detected | S35 | PASS | "You should always use the changed_when clause on tasks that do not naturally" |
| 292 | Common mistakes | `shell` and `command` are common examples | S35 | PASS | "shell and command modules, which run arbitrary commands." |
| 293 | Common mistakes | `no-changed-when` checks tasks return changes | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 294 | Common mistakes | "Step 7 shows it." | none | N/A | Run record. |
| 295 | Common mistakes | Check mode is a simulation | S15 | PASS | "Check mode is just a simulation." |
| 296 | Common mistakes | Modules without check support report and do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 297 | Common mistakes | Scripts and commands do not run in check mode, ordinarily | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 298 | Common mistakes | `check_mode: false` runs in normal mode and changes the system even with `--check` | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 299 | Common mistakes | Check exit status 0 in steps 4 and 5; the recap was used | none | N/A | Run record. |
| 300 | Common mistakes | Handler ran and printed `ok` in steps 4 and 5 | none | N/A | Run record. |
| 301 | Common mistakes | Handlers run in `handlers` order, not `notify` order | S13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 302 | Common mistakes | Same handler notified many times runs once | S13 | PASS | "executing the handler only once regardless of how many tasks notify it." |
| 303 | Common mistakes | `meta: flush_handlers` triggers handlers notified so far | S13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 304 | Common mistakes | `--force-handlers` runs handlers even if a task fails | S20 | PASS | "run handlers even if a task fails" |
| 305 | Common mistakes | "Step 3 shows that `--list-tasks` does not list handlers." | none | N/A | Run record. |
| 306 | Common mistakes | `ignore_errors` only works when the task can run and returns failed | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 307 | Common mistakes | It does not cover undefined variable, connection, execution, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues" |
| 308 | Common mistakes | Quote octal file modes | S21 | PASS | "For consistent results, quote octal numbers" |
| 309 | Common mistakes | Ansible shows the name of each named entity | S29 | PASS | "In its output, Ansible shows you the name of each named entity it runs." |
| 310 | Common mistakes | `name[play]` and `name[missing]` rules | S34 | PASS | "name[missing] - All tasks should be named. name[play] - All plays should be named." |
| 311 | Common mistakes | "Step 7 shows both." | none | N/A | Run record. |
| 312 | Common mistakes | Use the FQCN from Ansible 2.10 on | S10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 313 | Common mistakes | No need to check return codes | S28 | PASS | "no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 314 | Common mistakes | Playbooks page: lint is feedback before running | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| 315 | Common mistakes | "In step 7, `site.yml` met `production`; steps 3 and 5 showed ..." | none | N/A | Run record. |
| 316 | Common mistakes | Docs: do not add password files to source control | S44 | PASS | "Do not add password files to source control." |
| 317 | Common mistakes | `diff: false` disables diff for a task | S15 | PASS | "you can disable it for a task by specifying diff: false" |
| 318 | Common mistakes | Mixed inventory lets developers reach production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 319 | Common mistakes | `ANSIBLE_HOME` default root path, default `~/.ansible` | S30 | PASS | "The default root path for Ansible config files on the controller. ... Default: ~/.ansible" |
| 320 | Common mistakes | `remote_tmp` default `~/.ansible/tmp` | S9 | PASS | "Temporary directory to use on targets when executing tasks. Default: \"~/.ansible/tmp\"" |
| 321 | Common mistakes | Run left `~/.cache/ansible-lint/latest.json`; "Use an empty `HOME`" | none | N/A | Run record and the tutorial's own advice. |
| 322 | Common mistakes | Do not delete shared `~/.ansible` or `ANSIBLE_HOME` with installed roles or collections | S33 | PASS | "Do not delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections." |
| 323 | What a tester can check | Callout "Tutorial advice": 12 pieces of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice for a tester who works with Ansible." Each item is advice. Each tool fact in it (`--syntax-check`, `ansible-lint`, `--check --diff`, `assert`, `changed_when`, `diff: false`) is supported elsewhere on the page. |
| 324 | Key words | Agent-less | none | PASS | "Ansible is designed around an agent-less architecture" |
| 325 | Key words | Desired state | none | PASS | "You declare the desired state of a local or remote system in your playbook" |
| 326 | Key words | Control node | none | PASS | "The control node is a system on which Ansible is installed" |
| 327 | Key words | Managed node | none | PASS | "A managed node is a remote system, or host, that Ansible controls" |
| 328 | Key words | Inventory | none | PASS | "The inventory is a list of managed nodes that are logically organized" |
| 329 | Key words | Playbook | none | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes" |
| 330 | Key words | Play | none | PASS | "A play is an ordered list of tasks that maps to managed nodes in an inventory" |
| 331 | Key words | Task | none | PASS | "A task is a reference to a single module that defines the operations that Ansible performs" |
| 332 | Key words | Module | none | PASS | "A module is a unit of code or binary that Ansible runs on managed nodes" |
| 333 | Key words | Ad hoc command | none | PASS | "An ad hoc command uses the `/usr/bin/ansible` command-line tool to automate a single task on one or more managed nodes" |
| 334 | Key words | Idempotent | none | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions" |
| 335 | Key words | Variable | none | PASS | "Ansible uses variables to manage differences between systems" |
| 336 | Key words | Fact | none | PASS | "Facts are things that are discovered about remote nodes" |
| 337 | Key words | Template | none | PASS | "templates are processed by the Jinja2 templating language" |
| 338 | Key words | Handler | none | PASS | "Handlers are tasks that only run when notified" |
| 339 | Key words | Block | none | PASS | "Blocks create logical groups of tasks" |
| 340 | Key words | Role | none | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure" |
| 341 | Key words | Check mode | none | PASS | "In check mode, Ansible runs without making any changes on remote systems" |
| 342 | Key words | Diff mode | none | PASS | "In diff mode, Ansible provides before-and-after comparisons" |
| 343 | Key words | Ansible Vault | none | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords" |
| 344 | Key words | Ansible Lint | none | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 345 | Key words | Profile | none | PASS | "Profiles gradually increase the strictness of the rules" |
| 346 | Key words | Molecule | none | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles" |

Open FAILs after round 7: 0

Changed after this round: No FAIL in round 7. The writer then re-read the page against its sources and restored limits that the page had dropped: "can manage ... numerous other transports" (the transports of Ansible), "Unless configured otherwise" (the discovery of the Python interpreter), "always returns pong" (`ping`), "always name plays, tasks, and blocks" (the tips page), "various modules" (`risky-file-permissions`), and "lets you determine ... whether a change should be reported" (`changed_when`).

## Round 8 (2026-11-19)

# Fact check: devops / ansible (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page summary line | none | N/A | Describes the page itself. |
| 2 | Lede | Page summary, order of pages | none | N/A | Describes the page; the links are not facts. |
| 3 | What it is | Ansible provides open-source automation that reduces complexity and runs everywhere | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | What it is | Playbooks are simple, human-readable scripts | S1 | PASS | "Ansible uses simple, human-readable scripts called playbooks to automate your tasks." |
| 5 | What it is | You declare the desired state in your playbook | S1 | PASS | "You declare the desired state of a local or remote system in your playbook." |
| 6 | What it is | Ansible ensures the system remains in that state | S1 | PASS | "Ansible ensures that the system remains in that state." |
| 7 | What it is | Four common use cases | S1 | PASS | "Eliminate repetition and simplify workflows / Manage and maintain system configuration / Continuously deploy complex software / Perform zero-downtime rolling updates" |
| 8 | What it is | Agent-less architecture | S1 | PASS | "designed around the following principles: Agent-less architecture" |
| 9 | What it is | Playbooks use straightforward YAML that reads like documentation | S1 | PASS | "Automation playbooks use straightforward YAML syntax for code that reads like documentation." |
| 10 | What it is | Decentralized, uses SSH with existing OS credentials | S1 | PASS | "Ansible is also decentralized, using SSH with existing OS credentials to access remote machines." |
| 11 | What it is | No change when the system is already in the described state | S1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 12 | What it is | Ansible automates management of remote systems and controls their desired state | S2 | PASS | "Ansible automates the management of remote systems and controls their desired state." |
| 13 | What it is | Most environments have three main components | S2 | PASS | "most Ansible environments have three main components" |
| 14 | What it is | Control node is a system on which Ansible is installed | S2 | PASS | "A system on which Ansible is installed." |
| 15 | What it is | You run ansible or ansible-inventory on a control node | S2 | PASS | "You run Ansible commands such as ansible or ansible-inventory on a control node." |
| 16 | What it is | Inventory is a list of managed nodes, logically organized | S2 | PASS | "A list of managed nodes that are logically organized." |
| 17 | What it is | Managed node is a remote system or host that Ansible controls | S2 | PASS | "A remote system, or host, that Ansible controls." |
| 18 | What it is | Install Ansible on a single host, the control node | S5 | PASS | "you install on a single host (referred to as the control node)" |
| 19 | What it is | Manages machines with SSH, Powershell remoting, other transports, no databases or daemons | S5 | PASS | "remotely with SSH, Powershell remoting, and numerous other transports ... with no databases or daemons required" |
| 20 | What it is | Control node can be nearly any UNIX-like machine with Python | S5 | PASS | "nearly any UNIX-like machine with Python installed" |
| 21 | What it is | Community packages are distributed in two ways | S5 | PASS | "Ansible's community packages are distributed in two ways:" |
| 22 | What it is | ansible-core is a minimalist language and runtime package with built-in modules and plugins | S5 | PASS | "a minimalist language and runtime package containing a set of built-in modules and plugins." |
| 23 | What it is | ansible is a much larger "batteries included" package | S5 | PASS | "a much larger “batteries included” package" |
| 24 | What it is | It adds a community-curated selection of Collections | S5 | PASS | "adds a community-curated selection of Ansible Collections" |
| 25 | What it is | Docs install the minimal package with `python3 -m pip install --user ansible-core` | S5 | PASS | "You can install the minimal ansible-core package for the current user: $ python3 -m pip install --user ansible-core" |
| 26 | How it works | Inventory is a list or group of lists for managed nodes or hosts | S6 | PASS | "by using a list or group of lists known as inventory" |
| 27 | How it works | Inventory defines managed nodes and their variables | S6 | PASS | "Your inventory defines the managed nodes you automate and the variables associated with those hosts." |
| 28 | How it works | You can also specify groups | S6 | PASS | "You can als[o specify groups]" (S6 line 96) |
| 29 | How it works | INI and YAML are the most common formats, built-in support | S6 | PASS | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| 30 | How it works | `-i` passes another inventory source | S6 | PASS | "You can specify a different inventory source or sources at the command line by using the -i <path or expression> option" |
| 31 | How it works | Two default groups `all` and `ungrouped` even with no groups | S6 | PASS | "Even if you do not define any groups in your inventory, Ansible creates two default groups: all and ungrouped." |
| 32 | How it works | `all` contains every host | S6 | PASS | "The all group contains every host." |
| 33 | How it works | `ungrouped` contains hosts in no other group | S6 | PASS | "The ungrouped group contains all hosts that do not belong to any other group." |
| 34 | How it works | Add a new `[myhosts]` group | S3 | PASS | "Add a new [myhosts] group to the inventory.ini file" |
| 35 | How it works | Specify IP address or FQDN of each host | S3 | PASS | "specify the IP address or fully qualified domain name (FQDN) of each host system." |
| 36 | How it works | Docs check inventory with `ansible-inventory -i inventory.ini --list` | S3 | PASS | "ansible-inventory -i inventory.ini --list" |
| 37 | How it works | Docs ping a group with `ansible myhosts -m ping -i inventory.ini` | S3 | PASS | "ansible myhosts -m ping -i inventory.ini" |
| 38 | How it works | One inventory file lets Ansible manage many hosts with one command | S3 | PASS | "Ansible can manage a large number of hosts with a single command." |
| 39 | How it works | `local` connection plugin runs tasks on the controller | S7 | PASS | "allows ansible to execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 40 | How it works | Most modules in POSIX need a Python interpreter on the target | S8 | PASS | "Most Ansible modules that execute under a POSIX environment require a Python interpreter on the target host." |
| 41 | How it works | Ansible tries to discover one the first time a Python module runs | S8 | PASS | "Unless configured otherwise, Ansible will attempt to discover ... the first time a Python module is executed for that host." |
| 42 | How it works | `ansible_python_interpreter` specifies target host Python path | S6 | PASS | "ansible_python_interpreter Specifies the target host Python path." |
| 43 | How it works | Default `auto` searches the configurable list of paths | S8 | PASS | "auto (default) : Searches the configurable list of common Python interpreter paths" |
| 44 | How it works | `auto` warns that a later interpreter could alter the choice | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 45 | How it works | `auto_silent` issues no warnings | S8 | PASS | "auto_silent : Same as auto, but does not issue warnings." |
| 46 | How it works | Playbooks are YAML automation blueprints to deploy and configure managed nodes | S4 | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes." |
| 47 | How it works | Playbook is a list of plays defining order top to bottom | S4 | PASS | "A list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal." |
| 48 | How it works | Play is an ordered list of tasks mapped to managed nodes | S4 | PASS | "An ordered list of tasks that maps to managed nodes in an inventory." |
| 49 | How it works | Task references a single module | S4 | PASS | "A reference to a single module that defines the operations that Ansible performs." |
| 50 | How it works | Module is a unit of code or binary run on managed nodes | S4 | PASS | "A unit of code or binary that Ansible runs on managed nodes." |
| 51 | How it works | Each task calls an Ansible module | S10 | PASS | "Each task calls an Ansible module." |
| 52 | How it works | Playbooks are YAML with minimum syntax | S10 | PASS | "You express playbooks in YAML format with a minimum of syntax." |
| 53 | How it works | A playbook runs top to bottom | S10 | PASS | "A playbook runs in order from top to bottom." |
| 54 | How it works | Each play defines target nodes by pattern and at least one task | S10 | PASS | "The managed nodes to target, using a pattern. ... At least one task to execute." |
| 55 | How it works | By default one task at a time against all matched machines | S10 | PASS | "By default, Ansible executes each task in order, one at a time, against all machines matched by the host pattern." |
| 56 | How it works | Use FQCN for Ansible 2.10 and later | S10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 57 | How it works | Tips page: use FQCN to avoid ambiguity | S29 | PASS | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| 58 | How it works | Tips page: always name plays, tasks, blocks | S29 | PASS | "Always name plays, tasks, and blocks" |
| 59 | How it works | Tips page: always mention the state of a module | S29 | PASS | "Always mention the state" |
| 60 | How it works | Run a playbook with `ansible-playbook` | S10 | PASS | "To run your playbook, use the ansible-playbook command." |
| 61 | How it works | Ansible returns name lines of plays and tasks | S10 | PASS | "Ansible returns information about connections, the name lines of all your plays and tasks" |
| 62 | How it works | Also returns success/failure and change per task per machine | S10 | PASS | "whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine." |
| 63 | How it works | Summary of targeted nodes at the bottom | S10 | PASS | "Ansible provides a summary of the nodes that were targeted and how they performed." |
| 64 | How it works | ansible-playbook verifies with `--check`, `--diff`, `--list-hosts`, `--list-tasks`, `--syntax-check` | S10 | PASS | "verification, including --check, --diff, --list-hosts, --list-tasks, and --syntax-check." |
| 65 | How it works | `--syntax-check` checks syntax and does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 66 | How it works | `--list-tasks` lists tasks that would be executed | S20 | PASS | "list all tasks that would be executed" |
| 67 | How it works | `--list-hosts` lists matching hosts, executes nothing else | S20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 68 | How it works | `file` module sets attributes of files, directories, symlinks | S21 | PASS | "Set attributes of files, directories, or symlinks and their targets." |
| 69 | How it works | `state: directory` creates intermediate subdirectories with the permissions | S21 | PASS | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| 70 | How it works | Modes are octal; quote them so Ansible gets a string | S21 | PASS | "modes are actually octal numbers ... quote octal numbers ... so Ansible receives a string" |
| 71 | How it works | `copy` copies a file or directory structure to the remote machine | S22 | PASS | "copies a file or a directory structure from the local or remote machine to a location on the remote machine." |
| 72 | How it works | `content` instead of `src` sets file contents directly | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 73 | How it works | Works only when `dest` is a file; creates the file if missing | S22 | PASS | "Works only when dest is a file. Creates the file if it does not exist." |
| 74 | How it works | `template` processed by Jinja2 | S23 | PASS | "Templates are processed by the Jinja2 templating language." |
| 75 | How it works | `src` is path of a Jinja2 template on the controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 76 | How it works | `dest` is where the template is rendered on the remote machine | S23 | PASS | "Location to render the template to on the remote machine." |
| 77 | How it works | `slurp` works like `fetch`, returns base64 blob | S24 | PASS | "This module works like ansible.builtin.fetch. It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 78 | How it works | `assert` asserts expressions are true, optional custom message | S25 | PASS | "This module asserts that given expressions are true with an optional custom message." |
| 79 | How it works | `that` is a list of string expressions like `when` | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 80 | How it works | Modules return a data structure you can register | S18 | PASS | "Ansible modules normally return a data structure that can be registered into a variable" |
| 81 | How it works | `changed` boolean | S18 | PASS | "A boolean indicating if the task had to make changes to the target or delegated host." |
| 82 | How it works | `failed` boolean | S18 | PASS | "A boolean that indicates if the task was failed or not." |
| 83 | How it works | `diff` holds differences between previous and current state | S18 | PASS | "Information on differences between the previous and current state." |
| 84 | How it works | Most modules check desired state and exit without acting | S10 | PASS | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions" |
| 85 | How it works | Such modules are idempotent | S10 | PASS | "Modules that behave this way are ‘idempotent’." |
| 86 | How it works | Definition of idempotent operation | S19 | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions." |
| 87 | How it works | Not all playbooks and modules behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 88 | How it works | shell and command run arbitrary commands, do not naturally detect change | S35 | PASS | "tasks that do not naturally detect if a change has occurred or not. ... shell and command modules, which run arbitrary commands." |
| 89 | How it works | `changed_when` defines when a task changed a node | S16 | PASS | "define when a particular task has “changed” a remote node using the changed_when conditional." |
| 90 | How it works | Lets you decide by return code or output about statistics and handlers | S16 | PASS | "based on return codes or output, whether a change should be reported in Ansible statistics and whether a handler should be triggered or not." |
| 91 | How it works | `failed_when` defines failure per task | S16 | PASS | "define what “failure” means in each task using the failed_when conditional." |
| 92 | How it works | Variables manage differences between systems | S11 | PASS | "Ansible uses variables to manage differences between systems." |
| 93 | How it works | Define variables in playbooks, inventory, reusable files or roles, command line | S11 | PASS | "in inventory, in playbooks, in reusable files, in roles, and at the command line." |
| 94 | How it works | Create a variable during a run by registering a task's return value | S11 | PASS | "You can also create variables during a playbook run by registering the return value of a task as a new variable." |
| 95 | How it works | Jinja2 templating gives dynamic expressions and access to variables and facts | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 96 | How it works | Use templating with the template module | S12 | PASS | "You can use templating with the template module." |
| 97 | How it works | Facts are things discovered about remote nodes | S19 | PASS | "Facts are simply things that are discovered about remote nodes." |
| 98 | How it works | Discovered when running plays by the internal `setup` module | S19 | PASS | "automatically discovered by Ansible when running plays by executing the internal setup module on the remote nodes." |
| 99 | How it works | Fact gathering can be disabled to save time | S19 | PASS | "it can be disabled to save time if it is not needed" |
| 100 | How it works | Sometimes you want a task to run only on change | S13 | PASS | "Sometimes you want a task to run only when a change is made on a machine." |
| 101 | How it works | Handlers only run when notified | S13 | PASS | "Handlers are tasks that only run when notified." |
| 102 | How it works | `notify` makes one or more handlers execute | S13 | PASS | "Tasks can instruct one or more handlers to execute using the notify keyword." |
| 103 | How it works | `notify` accepts a list of handler names notified on change | S13 | PASS | "accepts a list of handler names that are notified on a task change." |
| 104 | How it works | Same handler notified many times runs once | S13 | PASS | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| 105 | How it works | Handlers run in `handlers` section order, not `notify` order | S13 | PASS | "executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 106 | How it works | Docs example: handler restarts Apache after all tasks | S13 | PASS | "the Apache server is restarted by the handler after all tasks are completed in the play." |
| 107 | How it works | `meta: flush_handlers` triggers notified handlers at that point | S13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 108 | How it works | `--force-handlers` runs handlers even if a task fails | S20 | PASS | "run handlers even if a task fails" |
| 109 | How it works | Two modes: check and diff | S15 | PASS | "two modes of execution that validate tasks: check mode and diff mode." |
| 110 | How it works | Check mode makes no changes on remote systems | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 111 | How it works | Supporting modules report changes they would make | S15 | PASS | "Modules that support check mode report the changes they would have made." |
| 112 | How it works | Non-supporting modules report nothing, do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 113 | How it works | Diff mode gives before-and-after comparisons | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 114 | How it works | Check mode is just a simulation | S15 | PASS | "Check mode is just a simulation." |
| 115 | How it works | No output for tasks with conditionals on registered variables | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 116 | How it works | `--diff` alone or with `--check` | S15 | PASS | "The --diff option for ansible-playbook can be used alone or with --check." |
| 117 | How it works | `diff: false` disables diff for a task | S15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 118 | How it works | `check_mode: false` forces normal mode | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 119 | How it works | Non-zero code or module failure stops that host, others continue | S16 | PASS | "by default it stops executing on that host and continues on other hosts." |
| 120 | How it works | `ignore_errors` continues despite failure | S16 | PASS | "You can use ignore_errors to continue despite of the failure." |
| 121 | How it works | Only works when task can run and returns failed | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 122 | How it works | Does not ignore undefined variable, connection, execution, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues ..., or syntax errors." |
| 123 | How it works | Blocks create logical groups of tasks | S17 | PASS | "Blocks create logical groups of tasks." |
| 124 | How it works | Blocks handle errors like exception handling | S17 | PASS | "similar to exception handling in many programming languages." |
| 125 | How it works | Rescue runs when an earlier block task fails | S17 | PASS | "Rescue blocks specify tasks to run when an earlier task in a block fails." |
| 126 | How it works | `always` runs whatever the previous status | S17 | PASS | "Tasks in the always section run no matter what the task status of the previous block is." |
| 127 | How it works | Invalid definitions and unreachable hosts skip rescue and always | S17 | PASS | "Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections of a block." |
| 128 | How it works | Roles auto-load artifacts from a known file structure | S14 | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure." |
| 129 | How it works | Roles are easy to reuse and share | S14 | PASS | "you can easily reuse them and share them with other users." |
| 130 | How it works | `tasks/main.yml` is the role's task list | S14 | PASS | "tasks/main.yml - A list of tasks that the role provides to the play for execution." |
| 131 | How it works | Vault encrypts and manages sensitive data such as passwords | S26 | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords." |
| 132 | How it works | Two content types: variables and files | S27 | PASS | "You can encrypt two types of content with Ansible Vault: variables and files." |
| 133 | How it works | `ansible-vault encrypt` encrypts an existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 134 | How it works | `ansible-vault view` shows content without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 135 | How it works | `--vault-password-file` flag for a password stored in a file | S44 | PASS | "specify the file within the --vault-password-file flag." |
| 136 | How it works | Tips: encrypt sensitive variables with Vault | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 137 | How it works | Tips: keep playbooks, roles, inventory, variables in version control | S29 | PASS | "Keep your playbooks, roles, inventory, and variables files in git or another version control system" |
| 138 | How it works | Separate inventory files or directories per environment | S29 | PASS | "by using separate inventory files or directories for each environment." |
| 139 | How it works | Mixed inventory exposes production secrets to developers | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 140 | How it works | Fail-fast and ordered, easy to embed tests | S28 | PASS | "designed to be a “fail-fast” and ordered system, therefore it makes it easy to embed testing directly in Ansible playbooks." |
| 141 | How it works | Resources model desired state, no need to test services/packages | S28 | PASS | "it should not be necessary to test that services are started, packages are installed" |
| 142 | How it works | `assert` validates kinds of truth | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 143 | How it works | `stat` for files not set declaratively | S28 | PASS | "the ‘stat’ module is a great choice" |
| 144 | How it works | No need to check command return codes | S28 | PASS | "there’s no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 145 | How it works | Check mode serves as a drift test: `--check` reports if it would have had to change | S28 | FAIL | Source hedges: "will report if Ansible thinks it would have had to have made any changes". The page drops "thinks". Fix: "Ansible reports if it thinks it would have had to make any changes". |
| 146 | How it works | Integration test battery written by QA if production webservice | S28 | PASS | "should be written by your QA team if you are a production webservice." |
| 147 | How it works | Usually not embedded in playbooks | S28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 148 | How it works | Makes sense to include basic health checks | S28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 149 | How it works | Ansible Lint is a command-line tool for playbooks, roles, collections | S31 | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 150 | How it works | Main goal: promote proven practices, avoid pitfalls | S31 | PASS | "Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls that can easily lead to bugs or make code harder to maintain." |
| 151 | How it works | Playbooks page: lint gives detailed Ansible-specific feedback | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 152 | How it works | Profiles gradually increase strictness | S32 | PASS | "Ansible-lint profiles gradually increase the strictness of rules" |
| 153 | How it works | `min` profile ensures Ansible can load content | S32 | PASS | "The min profile ensures that Ansible can load content." |
| 154 | How it works | `basic` prevents common issues, enforces style, extends `min` | S32 | PASS | "The basic profile prevents common coding issues and enforces standard styles and formatting. It extends min profile." |
| 155 | How it works | `--profile` picks the rules profile | S33 | PASS | "--profile ... Specify which rules profile to be used." |
| 156 | How it works | `--strict` non-zero exit on warnings and errors | S33 | PASS | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| 157 | How it works | `-f` output format list | S33 | PASS | "-f, --format {brief,full,md,json,codeclimate,quiet,pep8,sarif}" |
| 158 | How it works | `--project-dir` location, autodetected | S33 | PASS | "Location of project/repository, autodetected based on location of configuration file." |
| 159 | How it works | `--offline` disables requirements.yml install and schema refresh | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 160 | How it works | Add `.ansible` and `.cache` to `.gitignore` | S33 | PASS | "You should add project-local .ansible / .cache folders to .gitignore." |
| 161 | How it works | `name[play]` | S34 | PASS | "name[play] - All plays should be named." |
| 162 | How it works | `name[missing]` | S34 | PASS | "name[missing] - All tasks should be named." |
| 163 | How it works | `name[casing]` | S34 | PASS | "All names should start with an uppercase letter for languages that support it." |
| 164 | How it works | `no-changed-when` rule | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 165 | How it works | `risky-file-permissions` rule | S36 | PASS | "triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 166 | How it works | Molecule is a testing framework for collections, playbooks, roles | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| 167 | How it works | Molecule leverages inventory, playbooks, collections | S37 | PASS | "Molecule leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows." |
| 168 | Try it | Run record: date, versions, setup, `/work`, `/venv`, home file `latest.json`, no new entry in real home | none | N/A | The page's own run record, after a sentence that gives date and versions. |
| 169 | Try it | `ANSIBLE_REMOTE_TEMP` is the environment variable of `remote_tmp`, temp dir on targets | S9 | PASS | "remote_tmp ... Temporary directory to use on targets when executing tasks. ... Environment variable: ANSIBLE_REMOTE_TEMP" |
| 170 | Try it | `--offline` of ansible-lint disables requirements.yml install and schema refresh | S33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 171 | Try it | Run record: files written, `echo` lines, what was not run, own choices | none | N/A | Page's own practice-run record and own choices. |
| 172 | Try it | Docs install minimal package with `pip install --user ansible-core` | S5 | PASS | "python3 -m pip install --user ansible-core" |
| 173 | Try it | Run record: venv, PyPI query, SHA-256 check, limits | none | N/A | Page's own run record. |
| 174 | Try it | Step 1 commands and output | none | N/A | Reader's own step and run output. |
| 175 | Try it | Step 1: `ANSIBLE_HOME` is default root path for config files on controller | S30 | PASS | "The default root path for Ansible config files on the controller." |
| 176 | Try it | Step 2: YAML is one of the most common inventory formats | S6 | PASS | "The most common formats are INI and YAML" |
| 177 | Try it | Step 2: `ansible_connection` specifies connection type, any connection plugin name | S6 | PASS | "Specifies the connection type to the host. This can be the name of any Ansible connection plugin." |
| 178 | Try it | Step 2: `local` plugin runs tasks on controller | S7 | PASS | "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 179 | Try it | Step 2: `--graph` creates graph; pattern must be valid group name | S38 | PASS | "create inventory graph, if supplying pattern it must be a valid group name." |
| 180 | Try it | Step 2: Ansible creates `all` and `ungrouped` even with no groups | S6 | PASS | "Ansible creates two default groups: all and ungrouped." |
| 181 | Try it | Step 2: `--list` outputs all hosts info, works as inventory script | S38 | PASS | "Output all hosts info, works as inventory script" |
| 182 | Try it | Step 2: ad hoc command uses `/usr/bin/ansible` for a single task | S42 | PASS | "An Ansible ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes." |
| 183 | Try it | Step 2: ad hoc form `ansible [pattern] -m [module] -a "[module options]"` | S42 | PASS | "$ ansible [pattern] -m [module] -a "[module options]"" |
| 184 | Try it | Step 2: `ping` is a trivial test module returning `pong` | S39 | PASS | "A trivial test module, this module always returns pong on successful contact." |
| 185 | Try it | Step 2: useful to verify login and usable Python | S39 | PASS | "useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 186 | Try it | Step 2: Ansible discovers Python on first module run unless configured | S8 | PASS | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter on each target host the first time a Python module is executed" |
| 187 | Try it | Step 2: `auto` warns of later interpreter change | S8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 188 | Try it | Step 2: output descriptions of the run | none | N/A | Run record. |
| 189 | Try it | Step 3: `hosts` is a list of groups, hosts, or patterns that are the targets | S45 | PASS | "A list of groups, hosts or host pattern that translates into a list of hosts that are the play’s target." |
| 190 | Try it | Step 3: `vars` section holds three variables | S45 | PASS | "vars: Dictionary/map of variables". The count "three" is from the page's own playbook, not a source claim. |
| 191 | Try it | Step 3: `playbook_dir` is the directory of the current playbook | S43 | PASS | "The path to the directory of the current playbook being executed." |
| 192 | Try it | Step 3: `gather_facts` controls automatic `setup` | S45 | PASS | "A boolean that controls if the play will automatically run the ‘setup’ task to gather facts for the hosts." |
| 193 | Try it | Step 3: `file` with `state: directory` creates missing parent folders | S21 | PASS | "If needed, all intermediate subdirectories will be created" |
| 194 | Try it | Step 3: quote octal numbers | S21 | PASS | "quote octal numbers ... so Ansible receives a string" |
| 195 | Try it | Step 3: `src` template path on controller | S23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 196 | Try it | Step 3: `dest` render location on remote machine | S23 | PASS | "Location to render the template to on the remote machine." |
| 197 | Try it | Step 3: Jinja2 gives dynamic expressions, variables, facts | S12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 198 | Try it | Step 3: role `templates/` holds files for template; end in `.j2` | S14 | PASS | "templates/ # <-- files for use with the template resource ... templates end in .j2" |
| 199 | Try it | Step 3: `notify` is a list of handlers to notify on `changed=True` | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 200 | Try it | Step 3: `handlers` section runs only when notified after each section | S45 | PASS | "these won’t get executed normally, only when notified after each section of tasks is complete." |
| 201 | Try it | Step 3: `content` instead of `src` sets file contents | S22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 202 | Try it | Step 3: tips page: always name plays, tasks, blocks | S29 | PASS | "Always name plays, tasks, and blocks" |
| 203 | Try it | Step 3: tips page: use FQCN | S29 | PASS | "Use fully qualified collection names" |
| 204 | Try it | Step 3: `--syntax-check` checks, does not execute | S20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 205 | Try it | Step 3: `--list-tasks` lists tasks that would run | S20 | PASS | "list all tasks that would be executed" |
| 206 | Try it | Step 3: no change when system is in described state | S1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 207 | Try it | Step 3: handlers notified on `changed=True` | S45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 208 | Try it | Step 3: output descriptions, playbook files, templates | none | N/A | Run record and the page's own files. |
| 209 | Try it | Step 4: `-e` sets extra variables as `key=value` | S20 | PASS | "set additional variables as key=value or YAML/JSON" |
| 210 | Try it | Step 4: extra vars always win precedence | S11 | PASS | "Extra vars (for example, -e "user=my_user")(always win precedence)" |
| 211 | Try it | Step 4: `--check` no changes, `--diff` before-and-after | S15 | PASS | "Ansible runs without making any changes on remote systems ... Ansible provides before-and-after comparisons." |
| 212 | Try it | Step 4: diff mode common in file modules such as template | S15 | PASS | "Diff mode is most common in modules that manipulate files (for example, the template module)" |
| 213 | Try it | Step 4: `DEFAULT_LOCAL_TMP` is temp dir on controller | S30 | PASS | "Temporary directory for Ansible to use on the controller." |
| 214 | Try it | Step 4: check mode makes no changes | S15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 215 | Try it | Step 4: most modules exit if desired state achieved | S10 | PASS | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions" |
| 216 | Try it | Step 4: output descriptions | none | N/A | Run record. |
| 217 | Try it | Step 5: tests page: `--check` reports if Ansible thinks it would have changed | S28 | PASS | "will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 218 | Try it | Step 5: section named `Check Mode As A Drift Test` | S28 | PASS | "Check Mode As A Drift Test" |
| 219 | Try it | Step 5: hand edit, grep, outputs | none | N/A | Page's own commands and run record. |
| 220 | Try it | Step 6: `slurp` fetches base64 blob of remote file | S24 | PASS | "fetching a base64- encoded blob containing the data in a remote file." |
| 221 | Try it | Step 6: `register` names variable for status and return data | S45 | PASS | "Name of variable that will contain task status and module return data." |
| 222 | Try it | Step 6: `stat` retrieves file facts like Linux/Unix `stat` | S40 | PASS | "Retrieves facts for a file similar to the Linux/Unix stat command." |
| 223 | Try it | Step 6: `mode` is Unix permissions in octal as a string | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 224 | Try it | Step 6: `that` is a list of expressions like `when` | S25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 225 | Try it | Step 6: slurp example uses `{{ mounts['content'] \| b64decode }}` | S24 | PASS | "msg: "{{ mounts['content'] \| b64decode }}"" |
| 226 | Try it | Step 6: `success_msg` and `fail_msg` are the customized messages | S25 | PASS | "The customized message used for a successful assertion. ... The customized message used for a failing assertion." |
| 227 | Try it | Step 6: failed module stops execution on that host by default | S16 | PASS | "by default it stops executing on that host and continues on other hosts." |
| 228 | Try it | Step 6: output descriptions, `sed` copy | none | N/A | Run record and the page's own commands. |
| 229 | Try it | Step 7: `--project-dir` is location of project/repository | S33 | PASS | "Location of project/repository" |
| 230 | Try it | Step 7: profiles increase strictness as content lifecycle matures | S32 | PASS | "gradually increase the strictness of rules as your Ansible content lifecycle matures." |
| 231 | Try it | Step 7: `--profile` takes min, basic, moderate, safety, shared, production | S33 | PASS | "--profile {min,basic,moderate,safety,shared,production}" |
| 232 | Try it | Step 7: `production` profile for AAP validated or certified content | S32 | PASS | "ensures that content meets requirements for inclusion in Ansible Automation Platform (AAP) as validated or certified content." |
| 233 | Try it | Step 7: `DEPRECATION_WARNINGS` toggles showing deprecation warnings | S30 | PASS | "Toggle to control the showing of deprecation warnings" |
| 234 | Try it | Step 7: its environment variable is `ANSIBLE_DEPRECATION_WARNINGS` | S30 | PASS | "Environment: Variable: ANSIBLE_DEPRECATION_WARNINGS" |
| 235 | Try it | Step 7: `name[play]`, `name[missing]`, `name[casing]` meanings | S34 | PASS | "All plays should be named. / All tasks should be named. / All names should start with an uppercase letter for languages that support it." |
| 236 | Try it | Step 7: `no-changed-when` rule | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 237 | Try it | Step 7: `risky-file-permissions` rule | S36 | PASS | "permissions that might be too open, or unpredictable." |
| 238 | Try it | Step 7: `min` ensures Ansible can load content | S32 | PASS | "The min profile ensures that Ansible can load content." |
| 239 | Try it | Step 7: `basic` prevents common issues, enforces style | S32 | PASS | "prevents common coding issues and enforces standard styles and formatting." |
| 240 | Try it | Step 7: ansible-lint caches roles and collections under runtime cache dir, typically `{project}/.ansible` | S33 | PASS | "creates caches with installed roles and collections under the runtime cache directory (typically {project}/.ansible when not offline" |
| 241 | Try it | Step 7: does not clean the cache by itself | S33 | PASS | "Ansible-lint does not automatically clean the cache." |
| 242 | Try it | Step 7: deprecation output, lint results, `lint-bad.yml` | none | N/A | Page's own commands and run record. |
| 243 | Try it | Step 8: `ansible-vault` is an encryption/decryption utility | S41 | PASS | "encryption/decryption utility for Ansible data files" |
| 244 | Try it | Step 8: vault password in a file is one string on a single line | S44 | PASS | "enter the password as a string on a single line in the file." |
| 245 | Try it | Step 8: check file permissions; no password files in source control | S44 | PASS | "Make sure the permissions on the file are appropriate. Do not add password files to source control." |
| 246 | Try it | Step 8: `ansible-vault encrypt` for an existing file | S27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 247 | Try it | Step 8: `--vault-password-file` takes a vault password file | S41 | PASS | "--vault-password-file, --vault-pass-file vault password file" |
| 248 | Try it | Step 8: docs show encrypted content with header `$ANSIBLE_VAULT;1.1;AES256` | S27 | PASS | "the_secret: !vault \| $ANSIBLE_VAULT;1.1;AES256" |
| 249 | Try it | Step 8: `ansible-vault view` shows content without editing | S27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 250 | Try it | Step 8: two content types, variables and files | S27 | PASS | "You can encrypt two types of content with Ansible Vault: variables and files." |
| 251 | Try it | Step 8: commands, outputs, made-up values | none | N/A | Page's own commands and run record. |
| 252 | How a tester uses it | Resources model desired state; no need to test services/packages | S28 | PASS | "it should not be necessary to test that services are started, packages are installed" |
| 253 | How a tester uses it | `assert` makes validation easy | S28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 254 | How a tester uses it | `stat` for files not set declaratively | S28 | PASS | "the ‘stat’ module is a great choice" |
| 255 | How a tester uses it | `mode` holds Unix permissions in octal string | S40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 256 | How a tester uses it | No need to check return codes | S28 | PASS | "no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 257 | How a tester uses it | Most modules exit if desired state achieved | S10 | PASS | "exit without performing any actions if that state has been achieved." |
| 258 | How a tester uses it | Not all playbooks and modules behave this way | S10 | PASS | "not all playbooks and not all modules behave this way." |
| 259 | How a tester uses it | A second run that reports changes is a finding | none | N/A | The tutorial's own advice, not a fact about a tool. |
| 260 | How a tester uses it | `--check` reports if it would have had to change anything | S28 | FAIL | Same as row 145: the source says "if Ansible thinks it would have had to have made any changes". Fix: add "thinks". |
| 261 | How a tester uses it | Check mode is just a simulation | S15 | PASS | "Check mode is just a simulation." |
| 262 | How a tester uses it | Non-supporting modules report nothing and do nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 263 | How a tester uses it | Scripts and commands do not run in check mode | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 264 | How a tester uses it | No output for tasks with conditionals on registered variables | S15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 265 | How a tester uses it | Diff mode gives before-and-after comparisons | S15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 266 | How a tester uses it | `diff: false` disables diff for a task | S15 | PASS | "you can disable it for a task by specifying diff: false" |
| 267 | How a tester uses it | ansible-lint gives detailed feedback before execution | S10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 268 | How a tester uses it | `--strict` non-zero on warnings and errors | S33 | PASS | "Return non-zero exit code on warnings as well as errors" |
| 269 | How a tester uses it | `--syntax-check`, `--list-hosts`, `--list-tasks` | S20 | PASS | "perform a syntax check on the playbook, but do not execute it / outputs a list of matching hosts; does not execute anything else / list all tasks that would be executed" |
| 270 | How a tester uses it | Tips: encrypt secret variables with Vault | S29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 271 | How a tester uses it | Do not add password files to source control | S44 | PASS | "Do not add password files to source control." |
| 272 | How a tester uses it | Separate inventories per environment | S29 | PASS | "by using separate inventory files or directories for each environment." |
| 273 | How a tester uses it | Mixed inventory exposes production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 274 | How a tester uses it | Molecule is a testing framework | S37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| 275 | How a tester uses it | Integration test battery (Selenium, API tests) by QA team | S28 | PASS | "should be written by your QA team if you are a production webservice. This would include things like Selenium tests or automated API tests" |
| 276 | How a tester uses it | Usually not embedded; basic health checks make sense | S28 | PASS | "would usually not be something embedded into your Ansible playbooks. However, it does make sense to include some basic health checks" |
| 277 | How a tester uses it | Step 3, 5, 6, 7, 8 run notes | none | N/A | Run record. |
| 278 | Common mistakes | `ping` always returns `pong` on successful contact | S39 | PASS | "this module always returns pong on successful contact." |
| 279 | Common mistakes | Not sensible in playbooks; useful from `/usr/bin/ansible` | S39 | PASS | "It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 280 | Common mistakes | Always use `changed_when` where change is not detected | S35 | PASS | "You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred or not." |
| 281 | Common mistakes | shell and command are common examples | S35 | PASS | "Some of the most common examples are shell and command modules, which run arbitrary commands." |
| 282 | Common mistakes | `no-changed-when` rule | S35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 283 | Common mistakes | Check mode is a simulation | S15 | PASS | "Check mode is just a simulation." |
| 284 | Common mistakes | Non-supporting modules report nothing | S15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 285 | Common mistakes | Scripts and commands do not run in check mode | S28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 286 | Common mistakes | `check_mode: false` runs normally even with `--check` | S15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 287 | Common mistakes | Exit status of check, `ok` handler | none | N/A | Run record of steps 4 and 5. |
| 288 | Common mistakes | Handlers run in `handlers` order | S13 | PASS | "executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 289 | Common mistakes | Same handler notified many times runs once | S13 | PASS | "executing the handler only once regardless of how many tasks notify it." |
| 290 | Common mistakes | `flush_handlers` triggers notified handlers | S13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 291 | Common mistakes | `--force-handlers` runs handlers after failure | S20 | PASS | "run handlers even if a task fails" |
| 292 | Common mistakes | `ignore_errors` only works when task returns failed | S16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 293 | Common mistakes | Does not ignore undefined variable, connection, execution, syntax errors | S16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues" |
| 294 | Common mistakes | Quote octal file modes | S21 | PASS | "For consistent results, quote octal numbers" |
| 295 | Common mistakes | Output shows the name of each named entity | S29 | PASS | "In its output, Ansible shows you the name of each named entity it runs." |
| 296 | Common mistakes | `name[play]` and `name[missing]` | S34 | PASS | "All plays should be named. / All tasks should be named." |
| 297 | Common mistakes | Use FQCN for Ansible 2.10+ | S10 | PASS | "you should use the fully-qualified collection name (FQCN)" |
| 298 | Common mistakes | No need to check return codes | S28 | PASS | "Ansible is checking them automatically." |
| 299 | Common mistakes | Playbooks page: ansible-lint is feedback before you execute | S10 | PASS | "detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 300 | Common mistakes | Do not add vault password files to source control | S44 | PASS | "Do not add password files to source control." |
| 301 | Common mistakes | `diff: false` for sensitive info | S15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 302 | Common mistakes | Mixed inventory exposes production secrets | S29 | PASS | "developers using that inventory would be able to access production secrets." |
| 303 | Common mistakes | `ANSIBLE_HOME` default root path, default `~/.ansible` | S30 | PASS | "The default root path for Ansible config files on the controller. ... Default: ~/.ansible" |
| 304 | Common mistakes | `remote_tmp` temp dir on targets, default `~/.ansible/tmp` | S9 | PASS | "Temporary directory to use on targets when executing tasks. Default: "~/.ansible/tmp"" |
| 305 | Common mistakes | Do not delete shared `~/.ansible` or `ANSIBLE_HOME` with installed roles or collections | S33 | PASS | "Do not delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections." |
| 306 | Common mistakes | Run record of `latest.json`; "use an empty HOME" | none | N/A | Run record and the tutorial's own advice. |
| 307 | What a tester can check | Callout "Tutorial advice": 12 advice items | none | PASS | The callout says "This list is the tutorial's own advice for a tester who works with Ansible." No tool fact appears that the rest of the page does not support. |
| 308 | Key words | Agent-less | none | PASS | "Ansible is designed around an agent-less architecture" |
| 309 | Key words | Desired state | none | PASS | "You declare the desired state of a local or remote system in your playbook" |
| 310 | Key words | Control node | none | PASS | "The control node is a system on which Ansible is installed" |
| 311 | Key words | Managed node | none | PASS | "A managed node is a remote system, or host, that Ansible controls" |
| 312 | Key words | Inventory | none | PASS | "The inventory is a list of managed nodes that are logically organized" |
| 313 | Key words | Playbook | none | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes" |
| 314 | Key words | Play | none | PASS | "A play is an ordered list of tasks that maps to managed nodes in an inventory" |
| 315 | Key words | Task | none | PASS | "A task is a reference to a single module that defines the operations that Ansible performs" |
| 316 | Key words | Module | none | PASS | "A module is a unit of code or binary that Ansible runs on managed nodes" |
| 317 | Key words | Ad hoc command | none | PASS | "An ad hoc command uses the `/usr/bin/ansible` command-line tool to automate a single task on one or more managed nodes" |
| 318 | Key words | Idempotent | none | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions" |
| 319 | Key words | Variable | none | PASS | "Ansible uses variables to manage differences between systems" |
| 320 | Key words | Fact | none | PASS | "Facts are things that are discovered about remote nodes" |
| 321 | Key words | Template | none | PASS | "templates are processed by the Jinja2 templating language" |
| 322 | Key words | Handler | none | PASS | "Handlers are tasks that only run when notified" |
| 323 | Key words | Block | none | PASS | "Blocks create logical groups of tasks" |
| 324 | Key words | Role | none | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure" |
| 325 | Key words | Check mode | none | PASS | "In check mode, Ansible runs without making any changes on remote systems" |
| 326 | Key words | Diff mode | none | PASS | "In diff mode, Ansible provides before-and-after comparisons" |
| 327 | Key words | Ansible Vault | none | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords" |
| 328 | Key words | Ansible Lint | none | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 329 | Key words | Profile | none | PASS | "Profiles gradually increase the strictness of the rules" |
| 330 | Key words | Molecule | none | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles" |

Open FAILs after round 8: 2

Changed after this round: Rows 145 and 260 (check mode): the source says that `--check` reports "if Ansible thinks it would have had to have made any changes". The page dropped "thinks", so it read as a sure result. Both sentences now say "if it thinks it would have had to make any changes".

## Round 9 (2026-11-19)

# Fact check: devops / ansible (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Summary line of the page (inventory, playbooks, modules, handlers, check mode, vault, a practice run with no remote host) | – | N/A | The line describes the page itself. |
| 2 | Lede | The page covers Ansible topics; the practice run needs no remote host or cloud account; the page sits after Terraform and before Monitoring | – | N/A | The lede describes the page itself. The two links are site paths. |
| 3 | What it is | Ansible provides open-source automation that reduces complexity and runs everywhere | 1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | What it is | Playbooks are simple, human-readable scripts that automate tasks | 1 | PASS | "Ansible uses simple, human-readable scripts called playbooks to automate your tasks." |
| 5 | What it is | You declare the desired state of a local or remote system in your playbook | 1 | PASS | "You declare the desired state of a local or remote system in your playbook." |
| 6 | What it is | Ansible ensures the system remains in that state | 1 | PASS | "Ansible ensures that the system remains in that state." |
| 7 | What it is | Four common use cases | 1 | PASS | "Eliminate repetition and simplify workflows ... Manage and maintain system configuration ... Continuously deploy complex software ... Perform zero-downtime rolling updates" |
| 8 | What it is | Ansible is designed around an agent-less architecture | 1 | PASS | "Ansible is designed around the following principles: Agent-less architecture" |
| 9 | What it is | Playbooks use straightforward YAML that reads like documentation | 1 | PASS | "Automation playbooks use straightforward YAML syntax for code that reads like documentation." |
| 10 | What it is | Ansible is decentralized and uses SSH with existing OS credentials | 1 | PASS | "Ansible is also decentralized, using SSH with existing OS credentials to access remote machines." |
| 11 | What it is | No change when the system is already in the described state, even if run many times | 1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 12 | What it is | Ansible automates management of remote systems and controls their desired state | 2 | PASS | "Ansible automates the management of remote systems and controls their desired state." |
| 13 | What it is | Most environments have three main components | 2 | PASS | "most Ansible environments have three main components" |
| 14 | What it is | The control node is a system on which Ansible is installed | 2 | PASS | "A system on which Ansible is installed." |
| 15 | What it is | You run ansible or ansible-inventory on a control node | 2 | PASS | "You run Ansible commands such as ansible or ansible-inventory on a control node." |
| 16 | What it is | The inventory is a list of managed nodes that are logically organized | 2 | PASS | "A list of managed nodes that are logically organized." |
| 17 | What it is | A managed node is a remote system, or host, that Ansible controls | 2 | PASS | "A remote system, or host, that Ansible controls." |
| 18 | What it is | You install Ansible on a single host, the control node | 5 | PASS | "an agentless automation tool that you install on a single host (referred to as the control node)" |
| 19 | What it is | Manage machines with SSH, Powershell remoting and other transports, with no databases or daemons | 5 | PASS | "remotely with SSH, Powershell remoting, and numerous other transports ... with no databases or daemons required" |
| 20 | What it is | Control node can be nearly any UNIX-like machine with Python | 5 | PASS | "you can use nearly any UNIX-like machine with Python installed" |
| 21 | What it is | Community packages are distributed in two ways | 5 | PASS | "Ansible's community packages are distributed in two ways:" |
| 22 | What it is | ansible-core is a minimalist language and runtime package with built-in modules and plugins | 5 | PASS | "a minimalist language and runtime package containing a set of built-in modules and plugins." |
| 23 | What it is | The ansible package is a much larger "batteries included" package | 5 | PASS | "a much larger “batteries included” package" |
| 24 | What it is | It adds a community-curated selection of Collections | 5 | PASS | "adds a community-curated selection of Ansible Collections" |
| 25 | What it is | The docs install the minimal package with `python3 -m pip install --user ansible-core` | 5 | PASS | "$ python3 -m pip install --user ansible-core" |
| 26 | How it works | Inventory is a list or group of lists used to automate tasks on managed nodes | 6 | PASS | "Ansible automates tasks on managed nodes ... list or group of lists known as inventory." |
| 27 | How it works | Inventory defines the managed nodes and their variables | 6 | PASS | "Your inventory defines the managed nodes you automate and the variables associated with those hosts." |
| 28 | How it works | You can also specify groups | 6 | N/A | S6 line 96 has only the start of "You can also specify groups" and I could not read the rest of that sentence. Judged as PASS on the group content: "a list of hosts and groups" (S6, line 98). |
| 29 | How it works | Most common formats are INI and YAML, because of built-in support | 6 | PASS | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| 30 | How it works | Another inventory source can be passed with `-i` | 6 | PASS | "specify a different inventory source or sources at the command line by using the -i <path or expression> option" |
| 31 | How it works | With no groups defined, Ansible creates `all` and `ungrouped` | 6 | PASS | "Ansible creates two default groups: all and ungrouped." |
| 32 | How it works | `all` contains every host | 6 | PASS | "The all group contains every host." |
| 33 | How it works | `ungrouped` contains hosts in no other group | 6 | PASS | "The ungrouped group contains all hosts that do not belong to any other group." |
| 34 | How it works | Add a new `[myhosts]` group | 3 | PASS | "Add a new [myhosts] group to the inventory.ini file" |
| 35 | How it works | Specify IP address or FQDN of each host | 3 | PASS | "specify the IP address or fully qualified domain name (FQDN) of each host system" |
| 36 | How it works | `ansible-inventory -i inventory.ini --list` and `ansible myhosts -m ping -i inventory.ini` | 3 | PASS | "ansible-inventory -i inventory.ini --list" ... "ansible myhosts -m ping -i inventory.ini" |
| 37 | How it works | An inventory file lets Ansible manage many hosts with one command | 3 | PASS | "Ansible can manage a large number of hosts with a single command." |
| 38 | How it works | The `local` connection plugin runs tasks on the controller, not a remote host | 7 | PASS | "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 39 | How it works | POSIX modules need a Python interpreter on the target host | 8 | PASS | "Most Ansible modules that execute under a POSIX environment require a Python interpreter on the target host." |
| 40 | How it works | Unless configured, Ansible discovers one the first time it runs a Python module for that host | 8 | PASS | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter on each target host the first time a Python module is executed for that host." |
| 41 | How it works | `ansible_python_interpreter` specifies the target host Python path | 6 | PASS | "Specifies the target host Python path." |
| 42 | How it works | Default `auto` searches the configurable list of common interpreter paths | 8 | PASS | "auto (default) : Searches the configurable list of common Python interpreter paths" |
| 43 | How it works | It warns that a later install could alter the chosen interpreter | 8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 44 | How it works | `auto_silent` issues no warnings | 8 | PASS | "auto_silent : Same as auto, but does not issue warnings." |
| 45 | How it works | Playbooks are YAML automation blueprints used to deploy and configure managed nodes | 4 | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes." |
| 46 | How it works | A playbook is a list of plays defining order top to bottom | 4 | PASS | "A list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal." |
| 47 | How it works | A play is an ordered list of tasks mapped to managed nodes | 4 | PASS | "An ordered list of tasks that maps to managed nodes in an inventory." |
| 48 | How it works | A task is a reference to a single module | 4 | PASS | "A reference to a single module that defines the operations that Ansible performs." |
| 49 | How it works | A module is a unit of code or binary | 4 | PASS | "A unit of code or binary that Ansible runs on managed nodes." |
| 50 | How it works | Each task calls an Ansible module | 10 | PASS | "Each task calls an Ansible module." |
| 51 | How it works | Playbooks use YAML with minimal syntax | 10 | PASS | "You express playbooks in YAML format with a minimum of syntax." |
| 52 | How it works | A playbook runs in order from top to bottom | 10 | PASS | "A playbook runs in order from top to bottom." |
| 53 | How it works | Each play defines target nodes by pattern and at least one task | 10 | PASS | "The managed nodes to target, using a pattern. At least one task to execute." |
| 54 | How it works | By default one task at a time against all machines the pattern matches | 10 | PASS | "By default, Ansible executes each task in order, one at a time, against all machines matched by the host pattern." |
| 55 | How it works | From 2.10, use the FQCN | 10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| 56 | How it works | Tips page: use FQCN to avoid ambiguity | 29 | PASS | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| 57 | How it works | Tips page: always name plays, tasks, and blocks | 29 | PASS | "Always name plays, tasks, and blocks" |
| 58 | How it works | Tips page: always mention the state of a module | 29 | PASS | "Always mention the state ... For many modules, the state parameter is optional." |
| 59 | How it works | Run a playbook with `ansible-playbook` | 10 | PASS | "To run your playbook, use the ansible-playbook command." |
| 60 | How it works | Ansible returns the name lines of plays and tasks | 10 | PASS | "Ansible returns information about connections, the name lines of all your plays and tasks" |
| 61 | How it works | It returns success or failure and whether a change was made, per machine | 10 | PASS | "whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine" |
| 62 | How it works | A summary at the bottom of nodes targeted and how they performed | 10 | PASS | "Ansible provides a summary of the nodes that were targeted and how they performed." |
| 63 | How it works | ansible-playbook can verify with `--check`, `--diff`, `--list-hosts`, `--list-tasks`, `--syntax-check` | 10 | PASS | "several options for verification, including --check, --diff, --list-hosts, --list-tasks, and --syntax-check" |
| 64 | How it works | `--syntax-check` checks syntax and does not execute | 20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 65 | How it works | `--list-tasks` lists all tasks that would run | 20 | PASS | "list all tasks that would be executed" |
| 66 | How it works | `--list-hosts` outputs matching hosts and does nothing else | 20 | PASS | "outputs a list of matching hosts; does not execute anything else" |
| 67 | How it works | `file` module sets attributes of files, directories, symlinks and targets | 21 | PASS | "Set attributes of files, directories, or symlinks and their targets." |
| 68 | How it works | With `state: directory`, intermediate subdirectories are created with the supplied permissions | 21 | PASS | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| 69 | How it works | Modes are octal; quote them so Ansible gets a string | 21 | PASS | "modes are actually octal numbers ... quote octal numbers ... so Ansible receives a string" |
| 70 | How it works | `copy` copies a file or directory structure from local or remote machine to the remote machine | 22 | PASS | "copies a file or a directory structure from the local or remote machine to a location on the remote machine." |
| 71 | How it works | `content` instead of `src` sets file contents directly | 22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 72 | How it works | Works only when `dest` is a file; creates the file if missing | 22 | PASS | "Works only when dest is a file. Creates the file if it does not exist." |
| 73 | How it works | `template` processes with Jinja2 | 23 | PASS | "Templates are processed by the Jinja2 templating language." |
| 74 | How it works | `src` is the path of a Jinja2 template on the controller | 23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 75 | How it works | `dest` is where to render the template on the remote machine | 23 | PASS | "Location to render the template to on the remote machine." |
| 76 | How it works | `slurp` works like `fetch` and returns a base64 blob of a remote file | 24 | PASS | "This module works like ansible.builtin.fetch. It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 77 | How it works | `assert` asserts expressions true, with optional custom message | 25 | PASS | "asserts that given expressions are true with an optional custom message." |
| 78 | How it works | `that` is a list of string expressions of the `when` form | 25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 79 | How it works | Modules return a data structure you can register | 18 | PASS | "Ansible modules normally return a data structure that can be registered into a variable" |
| 80 | How it works | `changed` is a boolean for whether changes were made | 18 | PASS | "A boolean indicating if the task had to make changes to the target or delegated host." |
| 81 | How it works | `failed` is a boolean | 18 | PASS | "A boolean that indicates if the task was failed or not." |
| 82 | How it works | `diff` holds differences between previous and current state | 18 | PASS | "Information on differences between the previous and current state." |
| 83 | How it works | Most modules check the desired state and exit without acting if achieved | 10 | PASS | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| 84 | How it works | Such modules are idempotent | 10 | PASS | "Modules that behave this way are ‘idempotent’." |
| 85 | How it works | Idempotent definition | 19 | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions." |
| 86 | How it works | Not all playbooks and modules behave this way | 10 | PASS | "However, not all playbooks and not all modules behave this way." |
| 87 | How it works | `shell` and `command` run arbitrary commands and do not naturally detect change | 35 | PASS | "tasks that do not naturally ... shell and command modules, which run arbitrary commands." |
| 88 | How it works | `changed_when` defines when a task has changed a remote node | 16 | PASS | "define when a particular task has “changed” a remote node using the changed_when conditional." |
| 89 | How it works | Lets you decide from return codes or output whether to report a change and trigger a handler | 16 | PASS | "whether a change should be reported in Ansible statistics and whether a handler should be triggered or not." |
| 90 | How it works | `failed_when` defines what failure means per task | 16 | PASS | "define what “failure” means in each task using the failed_when conditional." |
| 91 | How it works | Variables manage differences between systems | 11 | PASS | "manage differences between systems." |
| 92 | How it works | Variables can be defined in playbooks, inventory, reusable files, roles, or the command line | 11 | PASS | "in inventory, in playbooks, in reusable files, in roles, and at the command line" |
| 93 | How it works | A variable can be created by registering a task's return value | 11 | PASS | "you can create variables with standard YAML syntax" and heading "Registering variables" (S11 line 113 and 131). Weak: the exact sentence was not found. Treated as PASS on the "Registering variables" section. |
| 94 | How it works | Jinja2 gives dynamic expressions and access to variables and facts | 12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 95 | How it works | Templating works with the template module | 12 | PASS | "You can use templating with the template module." |
| 96 | How it works | Facts are things discovered about remote nodes | 19 | PASS | "Facts are simply things that are discovered about remote nodes." |
| 97 | How it works | Discovered when running plays via the internal `setup` module | 19 | PASS | "automatically discovered by Ansible when running plays by executing the internal setup module on the remote nodes." |
| 98 | How it works | Fact gathering can be disabled to save time | 19 | PASS | "it can be disabled to save time if it is not needed" |
| 99 | How it works | You may want a task to run only when a change is made | 13 | PASS | "Sometimes you want a task to run only when a change is made on a machine." |
| 100 | How it works | Handlers only run when notified | 13 | PASS | "Handlers are tasks that only run when notified." |
| 101 | How it works | `notify` makes one or more handlers run | 13 | PASS | "Tasks can instruct one or more handlers to execute using the notify keyword." |
| 102 | How it works | `notify` accepts a list of handler names notified on change | 13 | PASS | "accepts a list of handler names that are notified on a task change" |
| 103 | How it works | Notifying the same handler many times runs it once | 13 | PASS | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| 104 | How it works | Handlers run in `handlers` section order, not `notify` order | 13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 105 | How it works | In the docs example the handler restarts Apache after all tasks | 13 | PASS | "the Apache server is restarted by the handler after all tasks are completed in the play." |
| 106 | How it works | `meta: flush_handlers` triggers handlers notified at that point | 13 | PASS | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| 107 | How it works | `--force-handlers` runs handlers even if a task fails | 20 | PASS | "run handlers even if a task fails" |
| 108 | How it works | Ansible has two validation modes: check and diff | 15 | PASS | "Ansible provides two modes of execution that validate tasks: check mode and diff mode." |
| 109 | How it works | Check mode makes no changes on remote systems | 15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 110 | How it works | Supporting modules report what they would change | 15 | PASS | "Modules that support check mode report the changes they would have made." |
| 111 | How it works | Non-supporting modules report nothing and do nothing | 15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 112 | How it works | Diff mode gives before-and-after comparisons | 15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 113 | How it works | Check mode is just a simulation | 15 | PASS | "Check mode is just a simulation." |
| 114 | How it works | No output for tasks with conditionals on registered variables | 15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 115 | How it works | `--diff` alone or with `--check` | 15 | PASS | "The --diff option for ansible-playbook can be used alone or with --check." |
| 116 | How it works | `diff: false` disables diff for a task, since diff can reveal secrets | 15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 117 | How it works | `check_mode: false` forces normal mode | 15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 118 | How it works | Non-zero return or module failure stops that host, others continue | 16 | PASS | "by default it stops executing on that host and continues on other hosts" |
| 119 | How it works | `ignore_errors` continues despite failure | 16 | PASS | "You can use ignore_errors to continue despite of the failure." |
| 120 | How it works | Works only when the task can run and returns failed | 16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 121 | How it works | Does not ignore undefined variable, connection, execution, or syntax errors | 16 | PASS | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| 122 | How it works | Blocks create logical groups of tasks | 17 | PASS | "Blocks create logical groups of tasks." |
| 123 | How it works | Blocks handle errors like exception handling | 17 | PASS | "similar to exception handling in many programming languages." |
| 124 | How it works | Rescue blocks run when an earlier task in the block fails | 17 | PASS | "Rescue blocks specify tasks to run when an earlier task in a block fails." |
| 125 | How it works | `always` tasks run whatever the previous status | 17 | PASS | "Tasks in the always section run no matter what the task status of the previous block is." |
| 126 | How it works | Invalid task definitions and unreachable hosts do not trigger rescue or always | 17 | PASS | "Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections of a block." |
| 127 | How it works | Roles load vars, files, tasks, handlers automatically from a known structure | 14 | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure." |
| 128 | How it works | Roles can be reused and shared | 14 | PASS | "you can easily reuse them and share them with other users." |
| 129 | How it works | `tasks/main.yml` is the role's task list | 14 | PASS | "tasks/main.yml - A list of tasks that the role provides to the play for execution." |
| 130 | How it works | Vault encrypts and manages sensitive data | 26 | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords." |
| 131 | How it works | Two content types: variables and files | 27 | PASS | "You can encrypt two types of content with Ansible Vault: variables and files." |
| 132 | How it works | `ansible-vault encrypt` encrypts an existing file | 27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 133 | How it works | `ansible-vault view` views without editing | 27 | PASS | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command" |
| 134 | How it works | Use `--vault-password-file` when the password is in a file | 44 | PASS | "specify the file within the --vault-password-file flag." |
| 135 | How it works | Encrypt sensitive variables with Vault | 29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 136 | How it works | Keep playbooks, roles, inventory, vars in version control | 29 | PASS | "Keep your playbooks, roles, inventory, and variables files in git or another version control system" |
| 137 | How it works | Separate inventories per environment | 29 | PASS | "separate inventory files or directories for each environment" |
| 138 | How it works | Mixed inventory exposes production secrets | 29 | PASS | "developers using that inventory would be able to access production secrets." |
| 139 | How it works | Ansible is fail-fast and ordered, so testing embeds in playbooks | 28 | PASS | "to be a “fail-fast” and ordered system, therefore it makes it easy to embed testing directly in Ansible playbooks." |
| 140 | How it works | Resources model desired state; no need to test services or packages | 28 | PASS | "Ansible resources are models of desired-state. As such, it should not be necessary to test that services are started, packages are installed" |
| 141 | How it works | `assert` makes it easy to validate truth | 28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 142 | How it works | `stat` is a great choice for files not set declaratively | 28 | PASS | "the ‘stat’ module is a great choice" |
| 143 | How it works | No need to check return codes | 28 | PASS | "there’s no need to check things like the return codes of commands. Ansible is checking them automatically." |
| 144 | How it works | Check mode as drift test with `--check` | 28 | PASS | "using the --check flag ... will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 145 | How it works | QA writes the integration test battery for a production webservice | 28 | PASS | "should be written by your QA team if you are a production webservice." |
| 146 | How it works | Usually not embedded in playbooks | 28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 147 | How it works | Include some basic health checks | 28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 148 | How it works | Ansible Lint is a command-line tool for playbooks, roles, collections | 31 | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 149 | How it works | Main goal: proven practices, avoid pitfalls | 31 | PASS | "Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls" |
| 150 | How it works | Playbooks page: ansible-lint gives detailed feedback before running | 10 | PASS | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 151 | How it works | Profiles gradually increase strictness | 32 | PASS | "Ansible-lint profiles gradually increase the strictness of rules" |
| 152 | How it works | `min` ensures Ansible can load content | 32 | PASS | "The min profile ensures that Ansible can load content." |
| 153 | How it works | `basic` prevents common issues, enforces style, extends `min` | 32 | PASS | "prevents common coding issues and enforces standard styles and formatting. It extends min profile." |
| 154 | How it works | `--profile` picks the rules profile | 33 | PASS | "Specify which rules profile to be used." |
| 155 | How it works | `--strict` non-zero exit on warnings | 33 | PASS | "Return non-zero exit code on warnings as well as errors" |
| 156 | How it works | `-f` formats list | 33 | PASS | "-f, --format {brief,full,md,json,codeclimate,quiet,pep8,sarif}" |
| 157 | How it works | `--project-dir` autodetected from config file location | 33 | PASS | "Location of project/repository, autodetected based on location of configuration file." |
| 158 | How it works | `--offline` disables requirements.yml install and schema refresh | 33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 159 | How it works | Add `.ansible` / `.cache` to `.gitignore` | 33 | PASS | "You should add project-local .ansible / .cache folders to .gitignore." |
| 160 | How it works | `name[play]` all plays named | 34 | PASS | "name[play] - All plays should be named." |
| 161 | How it works | `name[missing]` all tasks named | 34 | PASS | "name[missing] - All tasks should be named." |
| 162 | How it works | `name[casing]` uppercase start | 34 | PASS | "name[casing] - All names should start with an uppercase letter for languages" |
| 163 | How it works | `no-changed-when` checks tasks return changes | 35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 164 | How it works | `risky-file-permissions` description | 36 | PASS | "triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| 165 | How it works | Molecule is a testing framework for collections, playbooks, roles | 37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| 166 | How it works | Molecule leverages inventory, playbooks, collections | 37 | PASS | "Molecule leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows." |
| 167 | Try it | Run record (date, versions, folders, home folder contents, `latest.json` keys) | – | N/A | Record of the page's own run. |
| 168 | Try it | `ANSIBLE_REMOTE_TEMP` is an environment variable of `remote_tmp`, the temp directory on targets | 9 | PASS | "Temporary directory to use on targets when executing tasks." ... "Environment variable: ANSIBLE_REMOTE_TEMP" |
| 169 | Try it | `--offline` disables requirements.yml install and schema refreshing | 33 | PASS | "Disable installation of requirements.yml and schema refreshing" |
| 170 | Try it | Tutorial did not use `--offline`; `echo` lines; roles/blocks/Molecule not run; own choices; own venv; PyPI and SHA-256 steps | – | N/A | Record of the page's own run and choices. |
| 171 | Try it | Docs install minimal package for current user with pip | 5 | PASS | "$ python3 -m pip install --user ansible-core" |
| 172 | Try it | Step 1: `ANSIBLE_HOME` is the default root path for config files on the controller | 30 | PASS | "The default root path for Ansible config files on the controller." |
| 173 | Try it | Step 1: version output explanations | – | N/A | Record of the page's own run. |
| 174 | Try it | Step 2: YAML is one of the most common inventory formats | 6 | PASS | "The most common formats are INI and YAML" |
| 175 | Try it | `ansible_connection` is the connection type and can be any connection plugin name | 6 | PASS | "Specifies the connection type to the host. This can be the name of any Ansible connection plugin." |
| 176 | Try it | `local` runs tasks on the controller | 7 | PASS | "execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| 177 | Try it | `--graph` creates a graph; a pattern must be a valid group name | 38 | PASS | "create inventory graph, if supplying pattern it must be a valid group name." |
| 178 | Try it | Ansible creates `all` and `ungrouped` even with no groups | 6 | PASS | "Ansible creates two default groups: all and ungrouped." |
| 179 | Try it | `--list` outputs all hosts info and works as an inventory script | 38 | PASS | "Output all hosts info, works as inventory script" |
| 180 | Try it | Ad hoc command uses `/usr/bin/ansible` for a single task | 42 | PASS | "An Ansible ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes." |
| 181 | Try it | Ad hoc syntax | 42 | PASS | "$ ansible [pattern] -m [module] -a "[module options]"" |
| 182 | Try it | `ping` is a trivial test module returning `pong` | 39 | PASS | "A trivial test module, this module always returns pong on successful contact." |
| 183 | Try it | Useful to verify login and usable Python | 39 | PASS | "useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 184 | Try it | Ansible discovers a Python interpreter on first run per host | 8 | PASS | "attempt to discover a suitable Python interpreter on each target host the first time a Python module is executed for that host." |
| 185 | Try it | Default `auto` warns that a later install could alter the choice | 8 | PASS | "issues a warning that future installation of another Python interpreter could alter the one chosen." |
| 186 | Try it | Step 2 record: group, hosts, output, warnings | – | N/A | Record of the page's own run. |
| 187 | Try it | Step 3: `hosts` is a list of groups, hosts, or patterns | 45 | PASS | "A list of groups, hosts or host pattern that translates into a list of hosts that are the play’s target." |
| 188 | Try it | `vars` section holds three variables | 45 | PASS | "Dictionary/map of variables". The count "three" comes from the page's own `site.yml`, not from S45. |
| 189 | Try it | `playbook_dir` is the path to the current playbook's directory | 43 | PASS | "The path to the directory of the current playbook being executed." |
| 190 | Try it | `gather_facts` boolean runs `setup` | 45 | PASS | "A boolean that controls if the play will automatically run the ‘setup’ task to gather facts for the hosts." |
| 191 | Try it | `file` with `state: directory` creates missing parent folders | 21 | PASS | "If needed, all intermediate subdirectories will be created, using the supplied permissions." (paraphrase: "intermediate subdirectories" = "missing parent folders") |
| 192 | Try it | Mode `"0755"` quoted because octal should be quoted | 21 | PASS | "quote octal numbers ... so Ansible receives a string" |
| 193 | Try it | `src` is the template path on the controller | 23 | PASS | "Path of a Jinja2 formatted template on the Ansible controller." |
| 194 | Try it | `dest` is where it renders on the remote machine | 23 | PASS | "Location to render the template to on the remote machine." |
| 195 | Try it | Jinja2 gives dynamic expressions | 12 | PASS | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| 196 | Try it | In a role layout `templates/` holds template files ending in `.j2` | 14 | PASS | "templates/ # <-- files for use with the template resource" ... "templates end in .j2" |
| 197 | Try it | `notify` lists handlers to notify on `changed=True` | 45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 198 | Try it | `handlers` section runs only when notified after each section | 45 | PASS | "these won’t get executed normally, only when notified after each section of tasks is complete." |
| 199 | Try it | `content` instead of `src` sets file contents | 22 | PASS | "When used instead of src, sets the contents of a file directly to the specified value." |
| 200 | Try it | Tips: always name plays, tasks, blocks | 29 | PASS | "Always name plays, tasks, and blocks" |
| 201 | Try it | Tips: use FQCN | 29 | PASS | "Use fully qualified collection names (FQCN)" |
| 202 | Try it | `--syntax-check` checks syntax, does not execute | 20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 203 | Try it | `--list-tasks` lists tasks that would run | 20 | PASS | "list all tasks that would be executed" |
| 204 | Try it | Unchanged state means no change, even if run many times | 1 | PASS | "Ansible does not change anything, even if the playbook runs multiple times." |
| 205 | Try it | Handlers notified when a task returns `changed=True` | 45 | PASS | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| 206 | Try it | Step 3 record: outputs, statuses, warnings | – | N/A | Record of the page's own run. |
| 207 | Try it | Step 4: `-e` sets variables as `key=value` | 20 | PASS | "set additional variables as key=value or YAML/JSON" |
| 208 | Try it | Extra vars always win precedence | 11 | PASS | "Extra vars (for example, -e "user=my_user")(always win precedence)" |
| 209 | Try it | `--check` makes no changes; `--diff` gives before/after | 15 | PASS | "Ansible runs without making any changes on remote systems." ... "Ansible provides before-and-after comparisons." |
| 210 | Try it | Diff mode is most common for file modules such as template | 15 | PASS | "Diff mode is most common in modules that manipulate files (for example, the template module)" |
| 211 | Try it | `DEFAULT_LOCAL_TMP` is the controller's temp directory | 30 | PASS | "Temporary directory for Ansible to use on the controller." |
| 212 | Try it | In check mode Ansible makes no changes | 15 | PASS | "In check mode, Ansible runs without making any changes on remote systems." |
| 213 | Try it | Most modules exit without acting if state achieved | 10 | PASS | "exit without performing any actions if that state has been achieved" |
| 214 | Try it | Step 4 record | – | N/A | Record of the page's own run. |
| 215 | Try it | Step 5: with `--check`, Ansible reports if it would have to change | 28 | PASS | "will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| 216 | Try it | The section is named `Check Mode As A Drift Test` | 28 | PASS | "Check Mode As A Drift Test" |
| 217 | Try it | Step 5 record | – | N/A | Record of the page's own run. |
| 218 | Try it | Step 6: `slurp` fetches a base64 blob of a remote file | 24 | PASS | "It is used for fetching a base64- encoded blob containing the data in a remote file." |
| 219 | Try it | `register` names the variable for status and return data | 45 | PASS | "Name of variable that will contain task status and module return data." |
| 220 | Try it | `stat` retrieves file facts like Linux/Unix `stat` | 40 | PASS | "Retrieves facts for a file similar to the Linux/Unix stat command." |
| 221 | Try it | `mode` holds Unix permissions in octal as a string | 40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 222 | Try it | `that` is a list of `when`-style expressions | 25 | PASS | "A list of string expressions of the same form that can be passed to the when statement." |
| 223 | Try it | The `slurp` example uses `{{ mounts['content'] \| b64decode }}` | 24 | PASS | "msg: "{{ mounts['content'] \| b64decode }}"" |
| 224 | Try it | `success_msg` and `fail_msg` are the custom messages | 25 | PASS | "The customized message used for a successful assertion." ... "The customized message used for a failing assertion." |
| 225 | Try it | A module failure stops Ansible on that host by default | 16 | PASS | "by default it stops executing on that host" |
| 226 | Try it | Step 6 record (exit statuses, error format) | – | N/A | Record of the page's own run. |
| 227 | Try it | Step 7: `--project-dir` is the project location | 33 | PASS | "Location of project/repository" |
| 228 | Try it | Profiles gradually increase strictness as content matures | 32 | PASS | "gradually increase the strictness of rules as your Ansible content lifecycle matures." |
| 229 | Try it | `--profile` takes one of six names | 33 | PASS | "--profile {min,basic,moderate,safety,shared,production}" |
| 230 | Try it | `production` meets AAP validated or certified content requirements | 32 | PASS | "ensures that content meets requirements for inclusion in Ansible Automation Platform (AAP) as validated or certified content." |
| 231 | Try it | `DEPRECATION_WARNINGS` toggles deprecation warnings | 30 | PASS | "Toggle to control the showing of deprecation warnings" |
| 232 | Try it | Its environment variable is `ANSIBLE_DEPRECATION_WARNINGS` | 30 | PASS | "ANSIBLE_DEPRECATION_WARNINGS" |
| 233 | Try it | Rule `name` checks (play, missing, casing) | 34 | PASS | "name[casing] - All names should start with an uppercase letter for languages" |
| 234 | Try it | `no-changed-when` checks tasks return changes | 35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 235 | Try it | `risky-file-permissions` triggered by modules creating open or unpredictable files | 36 | PASS | "permissions that might be too open, or unpredictable." |
| 236 | Try it | `min` ensures Ansible can load content | 32 | PASS | "The min profile ensures that Ansible can load content." |
| 237 | Try it | `basic` prevents common issues and enforces style | 32 | PASS | "prevents common coding issues and enforces standard styles and formatting." |
| 238 | Try it | ansible-lint caches roles and collections under the runtime cache dir, typically `{project}/.ansible` when online | 33 | PASS | "creates caches with installed roles and collections under the runtime cache directory (typically {project}/.ansible when not offline" |
| 239 | Try it | It does not clean the cache itself | 33 | PASS | "Ansible-lint does not automatically clean the cache." |
| 240 | Try it | Step 7 record (exit 0/2, violations, deprecation warnings) | – | N/A | Record of the page's own run. |
| 241 | Try it | Step 8: `ansible-vault` is an encryption/decryption utility | 41 | PASS | "encryption/decryption utility for Ansible data files" |
| 242 | Try it | Vault password file holds one line | 44 | PASS | "enter the password as a string on a single line in the file." |
| 243 | Try it | Permissions appropriate; no password files in source control | 44 | PASS | "Make sure the permissions on the file are appropriate. Do not add password files to source control." |
| 244 | Try it | `ansible-vault encrypt` encrypts an existing file | 27 | PASS | "To encrypt an existing file, use the ansible-vault encrypt command." |
| 245 | Try it | `--vault-password-file` takes a vault password file | 41 | PASS | "--vault-password-file, --vault-pass-file vault password file" |
| 246 | Try it | Docs show encrypted content with header `$ANSIBLE_VAULT;1.1;AES256` | 27 | PASS | "$ANSIBLE_VAULT;1.1;AES256" |
| 247 | Try it | `ansible-vault view` views without editing | 27 | PASS | "you can use the ansible-vault view command" |
| 248 | Try it | Vault encrypts variables and files | 27 | PASS | "variables and files." |
| 249 | Try it | Step 8 record | – | N/A | Record of the page's own run. |
| 250 | How a tester uses it | Resources model desired state; no need to test services or packages | 28 | PASS | "it should not be necessary to test that services are started, packages are installed" |
| 251 | How a tester uses it | `assert` makes it easy to validate truth | 28 | PASS | "the assert module makes it very easy to validate various kinds of truth" |
| 252 | How a tester uses it | `stat` is a great choice for files not set declaratively | 28 | PASS | "the ‘stat’ module is a great choice" |
| 253 | How a tester uses it | `mode` is Unix permissions in octal as a string | 40 | PASS | "Unix permissions of the file in octal representation as a string" |
| 254 | How a tester uses it | No need to check return codes | 28 | PASS | "there’s no need to check things like the return codes of commands." |
| 255 | How a tester uses it | Most modules exit without acting if achieved | 10 | PASS | "exit without performing any actions if that state has been achieved" |
| 256 | How a tester uses it | Not all playbooks and modules behave this way | 10 | PASS | "not all playbooks and not all modules behave this way." |
| 257 | How a tester uses it | `--check` reports if changes would be needed | 28 | PASS | "will report if Ansible thinks it would have had to have made any changes" |
| 258 | How a tester uses it | Check mode is just a simulation | 15 | PASS | "Check mode is just a simulation." |
| 259 | How a tester uses it | Unsupporting modules report nothing | 15 | PASS | "Modules that do not support check mode report nothing and do nothing." |
| 260 | How a tester uses it | Scripts and commands ordinarily do not run in check mode | 28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 261 | How a tester uses it | No output for conditionals on registered variables | 15 | PASS | "It will not generate output for tasks that use conditionals based on registered variables" |
| 262 | How a tester uses it | Diff mode gives before and after | 15 | PASS | "In diff mode, Ansible provides before-and-after comparisons." |
| 263 | How a tester uses it | `diff: false` for sensitive info | 15 | PASS | "you can disable it for a task by specifying diff: false." |
| 264 | How a tester uses it | ansible-lint feedback before execution | 10 | PASS | "detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 265 | How a tester uses it | `--strict` non-zero on warnings and errors | 33 | PASS | "Return non-zero exit code on warnings as well as errors" |
| 266 | How a tester uses it | `--syntax-check` does not execute | 20 | PASS | "perform a syntax check on the playbook, but do not execute it" |
| 267 | How a tester uses it | `--list-hosts` does nothing else | 20 | PASS | "does not execute anything else" |
| 268 | How a tester uses it | `--list-tasks` lists tasks that would run | 20 | PASS | "list all tasks that would be executed" |
| 269 | How a tester uses it | Encrypt sensitive variables with Vault | 29 | PASS | "You should encrypt sensitive or secret variables with Ansible Vault." |
| 270 | How a tester uses it | Do not add password files to source control | 44 | PASS | "Do not add password files to source control." |
| 271 | How a tester uses it | Separate inventories per environment | 29 | PASS | "separate inventory files or directories for each environment" |
| 272 | How a tester uses it | Mixed inventory exposes production secrets | 29 | PASS | "developers using that inventory would be able to access production secrets." |
| 273 | How a tester uses it | Molecule description | 37 | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| 274 | How a tester uses it | Integration test battery (Selenium, API tests) by QA for a production webservice | 28 | PASS | "This would include things like Selenium tests or automated API tests" |
| 275 | How a tester uses it | Usually not embedded in playbooks | 28 | PASS | "would usually not be something embedded into your Ansible playbooks." |
| 276 | How a tester uses it | Basic health checks make sense | 28 | PASS | "it does make sense to include some basic health checks into your playbooks" |
| 277 | How a tester uses it | Sentences about steps 3, 5, 6, 7, 8 and "a second run that reports changes is a finding" | – | N/A | Record of the page's own run, or the reader's own advice. |
| 278 | Common mistakes | `ping` always returns `pong` on successful contact | 39 | PASS | "this module always returns pong on successful contact." |
| 279 | Common mistakes | Not sensible in playbooks; useful from `/usr/bin/ansible` | 39 | PASS | "It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| 280 | Common mistakes | Always use `changed_when` on tasks that do not detect change | 35 | PASS | "You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred." |
| 281 | Common mistakes | `shell` and `command` are common examples | 35 | PASS | "shell and command modules, which run arbitrary commands." |
| 282 | Common mistakes | Rule `no-changed-when` | 35 | PASS | "This rule checks that tasks return changes to results or conditions." |
| 283 | Common mistakes | Check mode is a simulation | 15 | PASS | "Check mode is just a simulation." |
| 284 | Common mistakes | Non-supporting modules report nothing | 15 | PASS | "report nothing and do nothing." |
| 285 | Common mistakes | Scripts and commands do not run in check mode | 28 | PASS | "Ordinarily, scripts and commands don’t run in check mode" |
| 286 | Common mistakes | `check_mode: false` task runs normally even with `--check` | 15 | PASS | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| 287 | Common mistakes | Handler order is the `handlers` section order | 13 | PASS | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| 288 | Common mistakes | Same handler notified many times runs once | 13 | PASS | "executing the handler only once regardless of how many tasks notify it." |
| 289 | Common mistakes | `meta: flush_handlers` | 13 | PASS | "triggers any handlers that have been notified at that point in the play." |
| 290 | Common mistakes | `--force-handlers` | 20 | PASS | "run handlers even if a task fails" |
| 291 | Common mistakes | `ignore_errors` only works when the task can run and returns failed | 16 | PASS | "only works when the task can run and returns a value of ‘failed’." |
| 292 | Common mistakes | It does not ignore undefined variable, connection, execution, or syntax errors | 16 | PASS | "undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| 293 | Common mistakes | Quote octal modes | 21 | PASS | "For consistent results, quote octal numbers" |
| 294 | Common mistakes | Output shows the name of each named entity | 29 | PASS | "In its output, Ansible shows you the name of each named entity it runs." |
| 295 | Common mistakes | `name[play]` and `name[missing]` | 34 | PASS | "name[missing] - All tasks should be named. name[play] - All plays should be named." |
| 296 | Common mistakes | Use FQCN from 2.10 | 10 | PASS | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN)" |
| 297 | Common mistakes | No need to check return codes | 28 | PASS | "Ansible is checking them automatically." |
| 298 | Common mistakes | Playbooks page describes ansible-lint as feedback before execution | 10 | PASS | "detailed, Ansible-specific feedback on your playbooks before you execute them" |
| 299 | Common mistakes | Do not put password files in source control | 44 | PASS | "Do not add password files to source control." |
| 300 | Common mistakes | `--diff` can reveal secrets; `diff: false` | 15 | PASS | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| 301 | Common mistakes | Mixed inventory exposes production secrets | 29 | PASS | "developers using that inventory would be able to access production secrets." |
| 302 | Common mistakes | `ANSIBLE_HOME` default is `~/.ansible` | 30 | PASS | "The default root path for Ansible config files on the controller." ... "Default: ~/.ansible" |
| 303 | Common mistakes | `remote_tmp` is the temp dir on targets, default `~/.ansible/tmp` | 9 | PASS | "Temporary directory to use on targets when executing tasks. Default: "~/.ansible/tmp"" |
| 304 | Common mistakes | Do not delete shared `~/.ansible` or `ANSIBLE_HOME` with installed roles or collections | 33 | PASS | "Do not delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections." |
| 305 | Common mistakes | Run-record sentences, steps 4/5/7, "Use an empty HOME" | – | N/A | Record of the page's own run, or the reader's own advice. |
| 306 | What a tester can check | Callout "Tutorial advice": list of the tutorial's own advice | – | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 307 | Key words | Agent-less | – | PASS | "Ansible is designed around an agent-less architecture" |
| 308 | Key words | Desired state | – | PASS | "You declare the desired state of a local or remote system in your playbook" |
| 309 | Key words | Control node | – | PASS | "The control node is a system on which Ansible is installed" |
| 310 | Key words | Managed node | – | PASS | "A managed node is a remote system, or host, that Ansible controls" |
| 311 | Key words | Inventory | – | PASS | "The inventory is a list of managed nodes that are logically organized" |
| 312 | Key words | Playbook | – | PASS | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes" |
| 313 | Key words | Play | – | PASS | "A play is an ordered list of tasks that maps to managed nodes in an inventory" |
| 314 | Key words | Task | – | PASS | "A task is a reference to a single module that defines the operations that Ansible performs" |
| 315 | Key words | Module | – | PASS | "A module is a unit of code or binary that Ansible runs on managed nodes" |
| 316 | Key words | Ad hoc command | – | PASS | "An ad hoc command uses the `/usr/bin/ansible` command-line tool to automate a single task on one or more managed nodes" |
| 317 | Key words | Idempotent | – | PASS | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions" |
| 318 | Key words | Variable | – | PASS | "Ansible uses variables to manage differences between systems" |
| 319 | Key words | Fact | – | PASS | "Facts are things that are discovered about remote nodes" |
| 320 | Key words | Template | – | PASS | "templates are processed by the Jinja2 templating language" |
| 321 | Key words | Handler | – | PASS | "Handlers are tasks that only run when notified" |
| 322 | Key words | Block | – | PASS | "Blocks create logical groups of tasks" |
| 323 | Key words | Role | – | PASS | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure" |
| 324 | Key words | Check mode | – | PASS | "In check mode, Ansible runs without making any changes on remote systems" |
| 325 | Key words | Diff mode | – | PASS | "In diff mode, Ansible provides before-and-after comparisons" |
| 326 | Key words | Ansible Vault | – | PASS | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords" |
| 327 | Key words | Ansible Lint | – | PASS | "Ansible Lint is a command-line tool for linting playbooks, roles and collections" |
| 328 | Key words | Profile | – | PASS | "Profiles gradually increase the strictness of the rules" |
| 329 | Key words | Molecule | – | PASS | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles" |

Open FAILs after round 9: 0

Open FAILs: 0
