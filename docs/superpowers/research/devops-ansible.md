# Research notes: Ansible

Page: `content/devops/ansible.mdx`. Module: DevOps & Cloud. Date: 2026-11-19 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on Ansible, the tool that its shelf named: the control node, the managed nodes, the inventory (INI and YAML, the groups `all` and `ungrouped`, `-i`, the `local` connection, the discovery of the Python interpreter), playbooks, plays, tasks, and modules (`file`, `copy`, `template`, `slurp`, `stat`, `assert`, `ping`), idempotence and `changed_when`, variables and facts, handlers (`notify`, `flush_handlers`, `--force-handlers`), check mode and diff mode, error handling and blocks, roles, Ansible Vault, the testing advice of the Ansible docs, ansible-lint (profiles and four rules), and Molecule. The practice run covers the inventory, a playbook with a handler and its second run, check mode with a diff, drift, a test playbook with `assert`, ansible-lint, and Ansible Vault. Roles, blocks, `rescue`, the facts, `changed_when`, and Molecule are not part of the practice run. The page describes them from the docs only, and it says so. The page is built from `docs/superpowers/research/devops-ansible.md` (45 sources, one cite number each) with a generator, and each quote of the claims table was looked up in the text of its source page.

The practice run of `## Try it` (steps 1 to 8) was recorded on 2026-11-19 16:05:11 +0600 on Linux 7.0.0-43-generic with ansible [core 2.22.0], ansible-lint 26.11.0, Python 3.14.4, and bash 5.3.9. The tutorial installed the two packages at 14:55 that day in a virtual environment of its own: `ansible-core 2.22.0 (wheel sha256 8285d4cc81c3e3eb2d954e75531724fe0ae154d228475638123451f034a74657), ansible-lint 26.11.0, installed 2026-11-19 14:55:11 +0600`. The wheel of `ansible-core` was compared with the SHA-256 that the PyPI JSON API lists for that file (same host, no signature). `ansible-lint` and the dependencies came from PyPI over HTTPS through pip, without hash pinning.

The runner `practice/an.sh` (also in the work folder) ran in an empty environment (`env -i HOME=... PATH=... LANG=C.UTF-8`), in a temp folder with copies of `inventory.yml`, `site.yml`, `check.yml`, and `templates`, with a new, empty `HOME`, and with `TMPDIR` and `ANSIBLE_REMOTE_TEMP` inside the temp folder. It refuses to start when `~/.ansible` exists. It ran the eight step files, each in its own shell, and saved the output of each, with the temp folder shown as `/work`, the virtual environment as `/venv`, and the home folder as `~`. After the steps, it ran `ansible-lint --project-dir . site.yml check.yml` once more, in a shell where the line `export ANSIBLE_DEPRECATION_WARNINGS=false` of step 7 was not set, and it saved that output as `lint-without-the-variable.txt`. It then listed the files in the empty home folder (one, `~/.cache/ansible-lint/latest.json`) and compared the real home folder before and after (no new entry).

The runner ran several times that day, and the page uses the last run (2026-11-19 16:05:11 +0600). The first trial ran in the real home folder. Afterwards the real home folder held an empty `.ansible/tmp` and `.cache/ansible-lint/latest.json`, which the author removed, and the runner got the empty `HOME`, `TMPDIR`, and `ANSIBLE_REMOTE_TEMP`. Step 7 got the line `export ANSIBLE_DEPRECATION_WARNINGS=false` after a trial in which ansible-lint printed the two deprecation warnings, and the last version of the runner saves that output.

- Step 1: `ansible --version` printed `[core 2.22.0]`, `config file = None`, and the paths of the empty home folder. `ansible-lint --version` printed `ansible-lint 26.11.0 using ansible-core:2.22.0` and two more versions.
- Step 2: `--graph` and `--list` printed the group `app`, with `localhost` and the variable `ansible_connection: local`, under `@all`, with `@ungrouped`. The key `profile` of `_meta` has the value `inventory_legacy`, and no page that the tutorial read describes it. The `ping` printed `SUCCESS` and `"ping": "pong"`, after the warning of the discovery of the Python interpreter (`/venv/bin/python3.14`).
- Step 3: `--syntax-check` ended with the exit status 0, `--list-tasks` listed two tasks and no handler, the first run ended with `ok=3 changed=3`, and the second with `ok=2 changed=0` and no handler.
- Step 4: with `-e base_url=http://localhost:9090 --check --diff`, the template task showed the diff of the `base_url` line, and the file did not change. The handler printed `ok`, and the exit status was 0.
- Step 5: after the hand edit, `--check --diff` showed the diff and `changed=1`, with the exit status 0, and the `grep` of the recap printed `drift found`. The real run repaired the file (`changed=1`, the handler printed `ok`).
- Step 6: `check.yml` passed (exit status 0), and `bad-check.yml` failed in the `assert` task (`failed=1`, exit status 2). No page that the tutorial read lists the exit statuses of `ansible-playbook`.
- Step 7: the two good files passed with the last profile `production`, and `lint-bad.yml` had five violations (`name[play]`, `name[missing]`, `no-changed-when`, `name[casing]`, and `risky-file-permissions`) and the last profile `min`. Without the line `export ANSIBLE_DEPRECATION_WARNINGS=false`, the output of the first command begins with two deprecation warnings (`oneline` and `tree`, with `Origin: <unknown>`).
- Step 8: `ansible-vault encrypt` printed nothing, the encrypted file starts with `$ANSIBLE_VAULT;1.1;AES256`, `grep -c` counted 0 lines with the plain text, and `ansible-vault view` printed the secret. The password and the secret are made up.

The docs base is `https://docs.ansible.com/projects/ansible/latest/` for Ansible, and `https://docs.ansible.com/projects/lint/` for ansible-lint, and Molecule is `https://docs.ansible.com/projects/molecule/`. Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences).

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Introduction to Ansible (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/getting_started/introduction.html |
| S2 | Getting started with Ansible (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/getting_started/index.html |
| S3 | Building an inventory (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_inventory.html |
| S4 | Creating a playbook (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/getting_started/get_started_playbook.html |
| S5 | Installing Ansible (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/installation_guide/intro_installation.html |
| S6 | How to build your inventory (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/inventory_guide/intro_inventory.html |
| S7 | ansible.builtin.local connection (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/local_connection.html |
| S8 | Interpreter Discovery (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/interpreter_discovery.html |
| S9 | ansible.builtin.sh shell (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/sh_shell.html |
| S10 | Ansible playbooks (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_intro.html |
| S11 | Using variables (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_variables.html |
| S12 | Templating (Jinja2) (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_templating.html |
| S13 | Handlers: running operations on change (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_handlers.html |
| S14 | Roles (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_reuse_roles.html |
| S15 | Validating tasks: check mode and diff mode (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_checkmode.html |
| S16 | Error handling in playbooks (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_error_handling.html |
| S17 | Blocks (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/playbook_guide/playbooks_blocks.html |
| S18 | Return Values (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/common_return_values.html |
| S19 | Glossary (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/glossary.html |
| S20 | ansible-playbook (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/cli/ansible-playbook.html |
| S21 | ansible.builtin.file module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/file_module.html |
| S22 | ansible.builtin.copy module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/copy_module.html |
| S23 | ansible.builtin.template module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/template_module.html |
| S24 | ansible.builtin.slurp module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/slurp_module.html |
| S25 | ansible.builtin.assert module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/assert_module.html |
| S26 | Protecting sensitive data with Ansible vault (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/vault_guide/index.html |
| S27 | Encrypting content with Ansible Vault (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/vault_guide/vault_encrypting_content.html |
| S28 | Testing Strategies (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/test_strategies.html |
| S29 | Ansible tips and tricks (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/tips_tricks/ansible_tips_tricks.html |
| S30 | Ansible Configuration Settings (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/config.html |
| S31 | Ansible Lint Documentation (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/ |
| S32 | Profiles (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/profiles/ |
| S33 | Using (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/usage/ |
| S34 | name (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/rules/name/ |
| S35 | no-changed-when (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/rules/no-changed-when/ |
| S36 | risky-file-permissions (Ansible Lint Documentation) | https://docs.ansible.com/projects/lint/rules/risky-file-permissions/ |
| S37 | Ansible Molecule (Ansible Molecule Documentation) | https://docs.ansible.com/projects/molecule/ |
| S38 | ansible-inventory (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/cli/ansible-inventory.html |
| S39 | ansible.builtin.ping module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/ping_module.html |
| S40 | ansible.builtin.stat module (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/stat_module.html |
| S41 | ansible-vault (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/cli/ansible-vault.html |
| S42 | Introduction to ad hoc commands (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/command_guide/intro_adhoc.html |
| S43 | Special Variables (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/special_variables.html |
| S44 | Managing vault passwords (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/vault_guide/vault_managing_passwords.html |
| S45 | Playbook Keywords (Ansible Community Documentation) | https://docs.ansible.com/projects/ansible/latest/reference_appendices/playbooks_keywords.html |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Ansible provides open-source automation that reduces complexity and runs everywhere | S1 | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| Ansible uses simple, human-readable scripts called playbooks to automate your tasks | S1 | "Ansible uses simple, human-readable scripts called playbooks to automate your tasks." |
| You declare the desired state of a local or remote system in your playbook | S1 | "You declare the desired state of a local or remote system in your playbook." |
| Ansible ensures that the system remains in that state | S1 | "Ansible ensures that the system remains in that state." |
| Some of its common use cases are to eliminate repetition and simplify workflows, to manage and maintain system configuration, to continuously deploy complex software, and to perform zero-downtime rolling updates | S1 | "Here are some common use cases for Ansible:" |
| Some of its common use cases are to eliminate repetition and simplify workflows, to manage and maintain system configuration, to continuously deploy complex software, and to perform zero-downtime rolling updates | S1 | "Eliminate repetition and simplify workflows" |
| Some of its common use cases are to eliminate repetition and simplify workflows, to manage and maintain system configuration, to continuously deploy complex software, and to perform zero-downtime rolling updates | S1 | "Manage and maintain system configuration" |
| Some of its common use cases are to eliminate repetition and simplify workflows, to manage and maintain system configuration, to continuously deploy complex software, and to perform zero-downtime rolling updates | S1 | "Continuously deploy complex software" |
| Some of its common use cases are to eliminate repetition and simplify workflows, to manage and maintain system configuration, to continuously deploy complex software, and to perform zero-downtime rolling updates | S1 | "Perform zero-downtime rolling updates" |
| Ansible is designed around an agent-less architecture | S1 | "As automation technology, Ansible is designed around the following principles:" |
| Ansible is designed around an agent-less architecture | S1 | "Agent-less architecture" |
| Ansible is designed around an agent-less architecture | S1 | "Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |
| Its playbooks use straightforward YAML syntax for code that reads like documentation | S1 | "Automation playbooks use straightforward YAML syntax for code that reads like documentation." |
| Ansible is also decentralized, and it uses SSH with existing OS credentials to access remote machines | S1 | "Ansible is also decentralized, using SSH with existing OS credentials to access remote machines." |
| Ansible does not change anything when the system is in the state that the playbook describes, even if the playbook runs many times | S1 | "When the system is in the state your playbook describes, Ansible does not change anything, even if the playbook runs multiple times." |
| Ansible automates the management of remote systems and controls their desired state | S2 | "Ansible automates the management of remote systems and controls their desired state." |
| Most Ansible environments have three main components | S2 | "most Ansible environments have three main components:" |
| The control node is a system on which Ansible is installed | S2 | "A system on which Ansible is installed." |
| You run Ansible commands such as ansible or ansible-inventory on a control node | S2 | "You run Ansible commands such as ansible or ansible-inventory on a control node." |
| The inventory is a list of managed nodes that are logically organized | S2 | "A list of managed nodes that are logically organized." |
| A managed node is a remote system, or host, that Ansible controls | S2 | "A remote system, or host, that Ansible controls." |
| You install Ansible on a single host, which is the control node | S5 | "Ansible is an agentless automation tool that you install on a single host (referred to as the control node)." |
| From the control node, Ansible can manage machines remotely with SSH, Powershell remoting, and numerous other transports, with no databases or daemons required | S5 | "From the control node, Ansible can manage an entire fleet of machines and other devices (referred to as managed nodes) remotely with SSH, Powershell remoting, and numerous other transports, all from a simple command-line interface with no databases or daemons required." |
| The control node can be nearly any UNIX-like machine with Python installed | S5 | "For your control node (the machine that runs Ansible), you can use nearly any UNIX-like machine with Python installed." |
| Ansible's community packages are distributed in two ways | S5 | "Ansible’s community packages are distributed in two ways:" |
| The ansible-core package is a minimalist language and runtime package that contains a set of built-in modules and plugins | S5 | "ansible-core: a minimalist language and runtime package containing a set of built-in modules and plugins." |
| The ansible package is a much larger "batteries included" package | S5 | "ansible: a much larger “batteries included” package, which adds a community-curated selection of Ansible Collections for automating a wide variety of devices." |
| It adds a community-curated selection of Ansible Collections | S5 | "which adds a community-curated selection of Ansible Collections for automating a wide variety of devices." |
| The docs install the minimal package for the current user with python3 -m pip install --user ansible-core | S5 | "python3 -m pip install --user ansible-core" |
| Ansible automates tasks on managed nodes, or hosts, by using a list or group of lists known as inventory | S6 | "Ansible automates tasks on managed nodes or “hosts” in your infrastructure by using a list or group of lists known as inventory." |
| Your inventory defines the managed nodes you automate and the variables associated with those hosts | S6 | "Your inventory defines the managed nodes you automate and the variables associated with those hosts." |
| You can also specify groups | S6 | "Groups allow you to reference multiple associated hosts to target for your automation or to define variables in bulk." |
| The most common formats are INI and YAML, because Ansible includes built-in support for them | S6 | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| You can pass another inventory source at the command line with -i | S6 | "You can specify a different inventory source or sources at the command line by using the -i <path or expression> option or by using the configuration system." |
| Even if you define no groups, Ansible creates two default groups, all and ungrouped | S6 | "Even if you do not define any groups in your inventory, Ansible creates two default groups: all and ungrouped." |
| The all group contains every host | S6 | "The all group contains every host." |
| The ungrouped group contains all hosts that do not belong to any other group | S6 | "The ungrouped group contains all hosts that do not belong to any other group." |
| To build an inventory file, you add a new [myhosts] group | S3 | "Add a new [myhosts] group to the inventory.ini file" |
| You specify the IP address or fully qualified domain name (FQDN) of each host system | S3 | "specify the IP address or fully qualified domain name (FQDN) of each host system" |
| The docs check an inventory with ansible-inventory -i inventory.ini --list | S3 | "ansible-inventory -i inventory.ini --list" |
| The docs check an inventory with ansible-inventory -i inventory.ini --list , and they ping a group with ansible myhosts -m ping -i inventory.ini | S3 | "ansible myhosts -m ping -i inventory.ini" |
| With an inventory file, Ansible can manage a large number of hosts with a single command | S3 | "Using an inventory file, Ansible can manage a large number of hosts with a single command." |
| The local connection plugin allows Ansible to execute tasks on the controller instead of on a remote host | S7 | "This connection plugin allows ansible to execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| Most Ansible modules that run in a POSIX environment need a Python interpreter on the target host | S8 | "Most Ansible modules that execute under a POSIX environment require a Python interpreter on the target host." |
| Unless you configure it, Ansible tries to discover one the first time that it runs a Python module for that host | S8 | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter on each target host the first time a Python module is executed for that host." |
| The ansible_python_interpreter variable specifies the target host Python path | S6 | "Specifies the target host Python path." |
| The default value auto searches the configurable list of common Python interpreter paths | S8 | "auto (default) :" |
| The default value auto searches the configurable list of common Python interpreter paths | S8 | "Searches the configurable list of common Python interpreter paths" |
| It issues a warning that future installation of another Python interpreter could alter the one chosen | S8 | "and issues a warning that" |
| It issues a warning that future installation of another Python interpreter could alter the one chosen | S8 | "future installation of another Python interpreter could alter the one chosen." |
| The value auto_silent does not issue warnings | S8 | "auto_silent :" |
| The value auto_silent does not issue warnings | S8 | "Same as auto, but does not issue warnings." |
| Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes | S4 | "Playbooks are automation blueprints, in YAML format, that Ansible uses to deploy and configure managed nodes." |
| A playbook is a list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal | S4 | "A list of plays that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal." |
| A play is an ordered list of tasks that maps to managed nodes in an inventory | S4 | "An ordered list of tasks that maps to managed nodes in an inventory." |
| A task is a reference to a single module that defines the operations that Ansible performs | S4 | "A reference to a single module that defines the operations that Ansible performs." |
| A module is a unit of code or binary that Ansible runs on managed nodes | S4 | "A unit of code or binary that Ansible runs on managed nodes." |
| Each task calls an Ansible module | S10 | "Each task calls an Ansible module." |
| You express playbooks in YAML with a minimum of syntax | S10 | "You express playbooks in YAML format with a minimum of syntax." |
| A playbook runs in order from top to bottom | S10 | "A playbook runs in order from top to bottom." |
| At a minimum, each play defines the managed nodes to target, using a pattern, and at least one task to execute | S10 | "At a minimum, each play defines two things:" |
| At a minimum, each play defines the managed nodes to target, using a pattern, and at least one task to execute | S10 | "The managed nodes to target, using a pattern." |
| At a minimum, each play defines the managed nodes to target, using a pattern, and at least one task to execute | S10 | "At least one task to execute." |
| By default, Ansible executes each task in order, one at a time, against all machines that the host pattern matches | S10 | "By default, Ansible executes each task in order, one at a time, against all machines matched by the host pattern." |
| For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks | S10 | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| The tips page says to use fully qualified collection names to avoid ambiguity in which collection to search for the correct module or plugin for each task | S29 | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| The tips page also says to always name plays, tasks, and blocks | S29 | "Always name plays, tasks, and blocks" |
| The tips page also says to always name plays, tasks, and blocks | S29 | "are optional, but extremely useful. In its output, Ansible shows you the name of each named entity it runs." |
| The tips page also says to always name plays, tasks, and blocks , and to always mention the state of a module | S29 | "Explicitly setting state: present or state: absent makes playbooks and roles clearer." |
| To run a playbook, use the ansible-playbook command | S10 | "To run your playbook, use the ansible-playbook command." |
| When you run a playbook, Ansible returns the name lines of your plays and tasks | S10 | "When you run a playbook, Ansible returns information about connections, the name lines of all your plays and tasks" |
| It also returns whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine | S10 | "whether each task has succeeded or failed on each machine, and whether each task has made a change on each machine" |
| At the bottom, it gives a summary of the nodes that were targeted and how they performed | S10 | "At the bottom of the playbook execution, Ansible provides a summary of the nodes that were targeted and how they performed." |
| The ansible-playbook command can verify a playbook with --check, --diff, --list-hosts, --list-tasks, and --syntax-check | S10 | "The ansible-playbook command offers several options for verification, including --check, --diff, --list-hosts, --list-tasks, and --syntax-check." |
| --syntax-check performs a syntax check on the playbook, but does not execute it | S20 | "perform a syntax check on the playbook, but do not execute it" |
| --list-tasks lists all tasks that would be executed | S20 | "list all tasks that would be executed" |
| --list-hosts outputs a list of matching hosts, and does not execute anything else | S20 | "outputs a list of matching hosts; does not execute anything else" |
| The file module sets attributes of files, directories, or symlinks and their targets | S21 | "Set attributes of files, directories, or symlinks and their targets." |
| With state: directory, the target is a directory, and if needed all intermediate subdirectories are created, using the supplied permissions | S21 | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| Modes are octal numbers, and for consistent results, you should quote octal numbers so that Ansible receives a string | S21 | "For consistent results, quote octal numbers (for example, '644' or '1777') so Ansible receives a string" |
| The copy module copies a file or a directory structure from the local or remote machine to a location on the remote machine | S22 | "The ansible.builtin.copy module copies a file or a directory structure from the local or remote machine to a location on the remote machine." |
| When you use content instead of src, it sets the contents of a file directly to the given value | S22 | "When used instead of src, sets the contents of a file directly to the specified value." |
| It works only when dest is a file, and it creates the file if it does not exist | S22 | "Works only when dest is a file. Creates the file if it does not exist." |
| For the template module, templates are processed by the Jinja2 templating language | S23 | "Templates are processed by the Jinja2 templating language." |
| Its src is the path of a Jinja2 formatted template on the Ansible controller | S23 | "Path of a Jinja2 formatted template on the Ansible controller." |
| Its dest is the location to render the template to on the remote machine | S23 | "Location to render the template to on the remote machine." |
| The slurp module works like fetch, and it is used for fetching a base64-encoded blob containing the data in a remote file | S24 | "This module works like ansible.builtin.fetch." |
| The slurp module works like fetch, and it is used for fetching a base64-encoded blob containing the data in a remote file | S24 | "It is used for fetching a base64- encoded blob containing the data in a remote file." |
| The assert module asserts that given expressions are true, with an optional custom message | S25 | "This module asserts that given expressions are true with an optional custom message." |
| Its that option is a list of string expressions of the same form that you can pass to the when statement | S25 | "A list of string expressions of the same form that can be passed to the when statement." |
| Ansible modules normally return a data structure that you can register into a variable | S18 | "Ansible modules normally return a data structure that can be registered into a variable, or seen directly when output by the ansible program." |
| The key changed is a boolean indicating if the task had to make changes to the target or delegated host | S18 | "A boolean indicating if the task had to make changes to the target or delegated host." |
| The key failed is a boolean that indicates if the task was failed or not | S18 | "A boolean that indicates if the task was failed or not." |
| The key diff holds information on differences between previous and current state | S18 | "Information on differences between the previous and current state." |
| Most Ansible modules check whether the desired final state has already been achieved, and they exit without performing any actions if it has | S10 | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| Modules that behave this way are idempotent | S10 | "Modules that behave this way are ‘idempotent’." |
| An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions | S19 | "An operation is idempotent if the result of performing it once is exactly the same as the result of performing it repeatedly without any intervening actions." |
| Not all playbooks and not all modules behave this way | S10 | "However, not all playbooks and not all modules behave this way." |
| The shell and command modules run arbitrary commands, and they do not naturally detect if a change has occurred | S35 | "You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred or not. Some of the most common examples are shell and command modules, which run arbitrary commands." |
| With changed_when, you define when a task has changed a remote node | S16 | "Ansible lets you define when a particular task has “changed” a remote node using the changed_when conditional." |
| That lets you determine, based on return codes or output, whether a change should be reported in the statistics and whether a handler should be triggered | S16 | "This lets you determine, based on return codes or output, whether a change should be reported in Ansible statistics and whether a handler should be triggered or not." |
| With failed_when, you define what failure means in each task | S16 | "Ansible lets you define what “failure” means in each task using the failed_when conditional." |
| Ansible uses variables to manage differences between systems | S11 | "Ansible uses variables to manage differences between systems." |
| You can define variables in your playbooks, in your inventory, in reusable files or roles, or at the command line | S11 | "You can define these variables in your playbooks, in your inventory, in reusable files or roles, or at the command line." |
| You can also create a variable during a run by registering the return value of a task | S11 | "You can also create variables during a playbook run by registering the return value of a task as a new variable." |
| Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts | S12 | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| You can use templating with the template module | S12 | "You can use templating with the template module." |
| Facts are things that are discovered about remote nodes | S19 | "Facts are simply things that are discovered about remote nodes." |
| Ansible discovers them when it runs plays, by executing the internal setup module on the remote nodes | S19 | "Facts are automatically discovered by Ansible when running plays by executing the internal setup module on the remote nodes." |
| Fact gathering can be disabled to save time if it is not needed | S19 | "You never have to call the setup module explicitly, it just runs, but it can be disabled to save time if it is not needed" |
| Sometimes you want a task to run only when a change is made on a machine | S13 | "Sometimes you want a task to run only when a change is made on a machine." |
| Handlers are tasks that only run when notified | S13 | "Handlers are tasks that only run when notified." |
| A task uses the notify keyword to instruct one or more handlers to execute | S13 | "Tasks can instruct one or more handlers to execute using the notify keyword." |
| The keyword accepts a list of handler names that are notified on a task change | S13 | "The notify keyword can be applied to a task and accepts a list of handler names that are notified on a task change." |
| Notifying the same handler multiple times results in executing the handler only once, regardless of how many tasks notify it | S13 | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| Handlers run in the order of the handlers section, and not in the order of the notify list | S13 | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| In the example of the docs, the handler restarts Apache after all tasks are completed in the play | S13 | "In this example playbook, the Apache server is restarted by the handler after all tasks are completed in the play." |
| The meta: flush_handlers task triggers any handlers that have been notified at that point in the play | S13 | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| The --force-handlers option runs handlers even if a task fails | S20 | "run handlers even if a task fails" |
| Ansible has two modes that validate tasks: check mode and diff mode | S15 | "Ansible provides two modes of execution that validate tasks: check mode and diff mode." |
| In check mode, Ansible runs without making any changes on remote systems | S15 | "In check mode, Ansible runs without making any changes on remote systems." |
| Modules that support check mode report the changes they would have made | S15 | "Modules that support check mode report the changes they would have made." |
| Modules that do not support check mode report nothing and do nothing | S15 | "Modules that do not support check mode report nothing and do nothing." |
| In diff mode, Ansible provides before-and-after comparisons | S15 | "In diff mode, Ansible provides before-and-after comparisons." |
| Check mode is just a simulation | S15 | "Check mode is just a simulation." |
| It does not generate output for tasks that use conditionals based on registered variables | S15 | "It will not generate output for tasks that use conditionals based on registered variables (results of prior tasks)." |
| The --diff option can be used alone or with --check | S15 | "The --diff option for ansible-playbook can be used alone or with --check." |
| Because --diff can reveal sensitive information, you can disable it for a task with diff: false | S15 | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| To force a task to run in normal mode even when the playbook is called with --check, set check_mode: false | S15 | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| When Ansible receives a non-zero return code from a command or a failure from a module, by default it stops executing on that host and continues on other hosts | S16 | "When Ansible receives a non-zero return code from a command or a failure from a module, by default it stops executing on that host and continues on other hosts." |
| You can use ignore_errors to continue despite the failure | S16 | "You can use ignore_errors to continue despite of the failure." |
| The directive only works when the task can run and returns a value of failed | S16 | "The ignore_errors directive only works when the task can run and returns a value of ‘failed’." |
| It does not make Ansible ignore undefined variable errors, connection failures, execution issues, or syntax errors | S16 | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| Blocks create logical groups of tasks | S17 | "Blocks create logical groups of tasks." |
| They also offer ways to handle task errors, similar to exception handling in many programming languages | S17 | "Blocks also offer ways to handle task errors, similar to exception handling in many programming languages." |
| Rescue blocks specify tasks to run when an earlier task in a block fails | S17 | "Rescue blocks specify tasks to run when an earlier task in a block fails." |
| Tasks in the always section run no matter what the task status of the previous block is | S17 | "Tasks in the always section run no matter what the task status of the previous block is." |
| Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections | S17 | "Errors caused by invalid task definitions and unreachable hosts do not trigger the rescue or always sections of a block." |
| Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure | S14 | "Roles let you automatically load related vars, files, tasks, handlers, and other Ansible artifacts based on a known file structure." |
| After you group your content into roles, you can easily reuse them and share them with other users | S14 | "After you group your content into roles, you can easily reuse them and share them with other users." |
| The file tasks/main.yml of a role is a list of tasks that the role provides to the play for execution | S14 | "tasks/main.yml - A list of tasks that the role provides to the play for execution." |
| Ansible vault provides a way to encrypt and manage sensitive data such as passwords | S26 | "Ansible vault provides a way to encrypt and manage sensitive data such as passwords." |
| You can encrypt two types of content with Ansible Vault: variables and files | S27 | "You can encrypt two types of content with Ansible Vault: variables and files." |
| To encrypt an existing file, use the ansible-vault encrypt command | S27 | "To encrypt an existing file, use the ansible-vault encrypt command." |
| To view the contents of an encrypted file without editing it, use the ansible-vault view command | S27 | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command:" |
| When you run a playbook that uses a vault password stored in a file, you specify the file within the --vault-password-file flag | S44 | "When you run a playbook that uses a vault password stored in a file, specify the file within the --vault-password-file flag." |
| The tips page says that you should encrypt sensitive or secret variables with Ansible Vault | S29 | "You should encrypt sensitive or secret variables with Ansible Vault." |
| The tips page says to keep your playbooks, roles, inventory, and variables files in version control | S29 | "Keep your playbooks, roles, inventory, and variables files in git or another version control system and make commits with meaningful comments to the repository when you make changes." |
| It says that you can keep production separate from development, test, and staging environments by using separate inventory files or directories | S29 | "You can keep your production environment separate from development, test, and staging environments by using separate inventory files or directories for each environment." |
| If one inventory holds both production and development, the developers who use it would be able to access production secrets | S29 | "If an inventory contains both production and development environments, developers using that inventory would be able to access production secrets." |
| Ansible is designed to be a fail-fast and ordered system, so it is easy to embed testing directly in playbooks | S28 | "Ansible is actually designed to be a “fail-fast” and ordered system, therefore it makes it easy to embed testing directly in Ansible playbooks." |
| Ansible resources are models of desired state, so it should not be necessary to test that services are started or packages are installed | S28 | "Ansible resources are models of desired-state. As such, it should not be necessary to test that services are started, packages are installed, or other such things." |
| The assert module makes it very easy to validate various kinds of truth | S28 | "And the assert module makes it very easy to validate various kinds of truth" |
| If you need to test for the existence of files that your Ansible configuration does not set declaratively, the stat module is a great choice | S28 | "Should you feel the need to test for the existence of files that are not declaratively set by your Ansible configuration, the ‘stat’ module is a great choice" |
| There is no need to check the return codes of commands, because Ansible checks them automatically | S28 | "As mentioned above, there's no need to check things like the return codes of commands. Ansible is checking them automatically." |
| Check mode can serve as a drift test: with --check, Ansible reports if it thinks it would have had to make any changes to bring the system into a desired state | S28 | "using the --check flag to the ansible command will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| An integration test battery should be written by your QA team if you are a production webservice | S28 | "Something like an integration test battery should be written by your QA team if you are a production webservice." |
| It would usually not be embedded into your playbooks | S28 | "This would include things like Selenium tests or automated API tests and would usually not be something embedded into your Ansible playbooks." |
| It does make sense to include some basic health checks into your playbooks | S28 | "However, it does make sense to include some basic health checks into your playbooks" |
| Ansible Lint is a command-line tool for linting playbooks, roles and collections | S31 | "Ansible Lint is a command-line tool for linting playbooks, roles and collections aimed toward any Ansible users." |
| Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls that can easily lead to bugs or make code harder to maintain | S31 | "Its main goal is to promote proven practices, patterns and behaviors while avoiding common pitfalls that can easily lead to bugs or make code harder to maintain." |
| The playbooks page says that you can use it for detailed, Ansible-specific feedback before you execute a playbook | S10 | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| Profiles gradually increase the strictness of the rules | S32 | "Ansible-lint profiles gradually increase the strictness of rules as your Ansible content lifecycle matures." |
| The min profile ensures that Ansible can load content | S32 | "The min profile ensures that Ansible can load content." |
| The basic profile prevents common coding issues and enforces standard styles and formatting, and it extends the min profile | S32 | "The basic profile prevents common coding issues and enforces standard styles and formatting. It extends min profile." |
| The --profile option specifies which rules profile to be used | S33 | "Specify which rules profile to be used." |
| The --strict option returns a non-zero exit code on warnings as well as errors | S33 | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| The -f option sets the output format, which is one of brief, full, md, json, codeclimate, quiet, pep8, and sarif | S33 | "-f, --format {brief,full,md,json,codeclimate,quiet,pep8,sarif}" |
| The --project-dir option is the location of project/repository, autodetected based on location of configuration file | S33 | "Location of project/repository, autodetected based on location of configuration file." |
| The --offline option disables the installation of requirements.yml and the refreshing of schemas | S33 | "Disable installation of requirements.yml and schema refreshing" |
| The docs say that you should add the project-local .ansible and .cache folders to .gitignore | S33 | "You should add project-local .ansible / .cache folders to .gitignore." |
| The rule name[play] says that all plays should be named | S34 | "name[play] - All plays should be named." |
| The rule name[missing] says that all tasks should be named | S34 | "name[missing] - All tasks should be named." |
| The rule name[casing] says that all names should start with an uppercase letter for languages that support it | S34 | "name[casing] - All names should start with an uppercase letter for languages that support it." |
| The rule no-changed-when checks that tasks return changes to results or conditions | S35 | "This rule checks that tasks return changes to results or conditions." |
| The rule risky-file-permissions is triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable | S36 | "This rule is triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles | S37 | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| It leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows | S37 | "Molecule leverages standard Ansible features including inventory, playbooks, and collections to provide flexible testing workflows." |
| It is ANSIBLE_REMOTE_TEMP, an environment variable of the setting remote_tmp, which is the temporary directory to use on targets when executing tasks | S9 | "Temporary directory to use on targets when executing tasks." |
| It is ANSIBLE_REMOTE_TEMP, an environment variable of the setting remote_tmp, which is the temporary directory to use on targets when executing tasks | S9 | "Environment variable: ANSIBLE_REMOTE_TEMP" |
| The option --offline of ansible-lint disables the installation of requirements.yml and schema refreshing | S33 | "Disable installation of requirements.yml and schema refreshing" |
| The docs install the minimal package for the current user with python3 -m pip install --user ansible-core | S5 | "python3 -m pip install --user ansible-core" |
| The setting ANSIBLE_HOME is the default root path for Ansible config files on the controller | S30 | "The default root path for Ansible config files on the controller. Type: path Default: ~/.ansible" |
| YAML is one of the most common inventory formats | S6 | "The most common formats are INI and YAML because Ansible includes built-in support for them." |
| The variable ansible_connection specifies the connection type to the host, and it can be the name of any Ansible connection plugin | S6 | "Specifies the connection type to the host. This can be the name of any Ansible connection plugin." |
| The value local names the local connection plugin, which executes tasks on the controller instead of on a remote host | S7 | "This connection plugin allows ansible to execute tasks on the Ansible ‘controller’ instead of on a remote host." |
| The --graph option creates an inventory graph, and a pattern that you supply must be a valid group name | S38 | "create inventory graph, if supplying pattern it must be a valid group name. It will ignore limit" |
| It creates the two default groups all and ungrouped, even if you define no groups | S6 | "Even if you do not define any groups in your inventory, Ansible creates two default groups: all and ungrouped." |
| The --list option outputs all hosts info, and it works as an inventory script | S38 | "Output all hosts info, works as inventory script" |
| An ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes | S42 | "An Ansible ad hoc command uses the /usr/bin/ansible command-line tool to automate a single task on one or more managed nodes." |
| It looks like ansible [pattern] -m [module] -a "[module options]" | S42 | "An ad hoc command looks like this:" |
| It looks like ansible [pattern] -m [module] -a "[module options]" | S42 | "-a "[module options]"" |
| The ping module is a trivial test module that always returns pong on successful contact | S39 | "A trivial test module, this module always returns pong on successful contact." |
| It is useful from /usr/bin/ansible to verify the ability to log in, and that a usable Python is configured | S39 | "it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| Unless configured otherwise, Ansible attempts to discover a suitable Python interpreter on each target host the first time that a Python module is executed for that host | S8 | "Unless configured otherwise, Ansible will attempt to discover a suitable Python interpreter on each target host the first time a Python module is executed for that host." |
| The default setting auto issues a warning that a future installation of another Python interpreter could alter the one chosen | S8 | "auto (default) :" |
| The default setting auto issues a warning that a future installation of another Python interpreter could alter the one chosen | S8 | "Searches the configurable list of common Python interpreter paths" |
| The default setting auto issues a warning that a future installation of another Python interpreter could alter the one chosen | S8 | "and issues a warning that" |
| The default setting auto issues a warning that a future installation of another Python interpreter could alter the one chosen | S8 | "future installation of another Python interpreter could alter the one chosen." |
| The keyword hosts is a list of groups, hosts, or host patterns that translate into the targets of the play | S45 | "A list of groups, hosts or host pattern that translates into a list of hosts that are the play’s target." |
| The section vars holds three variables for the play | S45 | "Dictionary/map of variables" |
| The variable playbook_dir is the path to the directory of the current playbook | S43 | "The path to the directory of the current playbook being executed." |
| The keyword gather_facts is a boolean that controls if the play will automatically run the setup task to gather facts for the hosts | S45 | "A boolean that controls if the play will automatically run the ‘setup’ task to gather facts for the hosts." |
| With state: directory, the target is a directory, and Ansible creates any missing parent folders | S21 | "The target is a directory. If needed, all intermediate subdirectories will be created, using the supplied permissions." |
| The mode is "0755", in quotes, because you should quote octal numbers so that Ansible receives a string | S21 | "For consistent results, quote octal numbers (for example, '644' or '1777') so Ansible receives a string" |
| The src is the path of a Jinja2 formatted template on the controller | S23 | "Path of a Jinja2 formatted template on the Ansible controller." |
| The src is the path of a Jinja2 formatted template on the controller , and dest is the location to render it to on the remote machine | S23 | "Location to render the template to on the remote machine." |
| Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts | S12 | "Ansible uses Jinja2 templating to enable dynamic expressions and access to variables and facts." |
| In the layout of a role, the folder templates/ holds files for use with the template resource, and templates end in .j2 | S14 | "templates/ # <-- files for use with the template resource" |
| In the layout of a role, the folder templates/ holds files for use with the template resource, and templates end in .j2 | S14 | "ntp.conf.j2 # <------- templates end in .j2" |
| The keyword notify is a list of handlers to notify when the task returns a changed=True status | S45 | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| The handlers section holds tasks that do not run normally, only when notified after each section of tasks is complete | S45 | "A section with tasks that are treated as handlers, these won’t get executed normally, only when notified after each section of tasks is complete." |
| When you use content instead of src, it sets the contents of a file directly to the given value | S22 | "When used instead of src, sets the contents of a file directly to the specified value." |
| The tips page says to always name plays, tasks, and blocks | S29 | "Always name plays, tasks, and blocks" |
| The tips page says to always name plays, tasks, and blocks , and to use fully qualified collection names | S29 | "Use fully qualified collection names (FQCN) to avoid ambiguity in which collection to search for the correct module or plugin for each task." |
| The option performs a syntax check on the playbook, but does not execute it | S20 | "perform a syntax check on the playbook, but do not execute it" |
| The option lists all tasks that would be executed | S20 | "list all tasks that would be executed" |
| When the system is in the state that the playbook describes, Ansible does not change anything, even if the playbook runs many times | S1 | "When the system is in the state your playbook describes, Ansible does not change anything, even if the playbook runs multiple times." |
| Handlers are notified when a task returns a changed=True status | S45 | "List of handlers to notify when the task returns a ‘changed=True’ status." |
| The option -e sets additional variables as key=value | S20 | "set additional variables as key=value or YAML/JSON, if filename prepend with @. This argument may be specified multiple times." |
| Extra vars, for example -e "user=my_user", always win precedence | S11 | "Extra vars (for example, -e "user=my_user")(always win precedence)" |
| --check runs the playbook without making any changes on remote systems, and --diff provides before-and-after comparisons | S15 | "In check mode, Ansible runs without making any changes on remote systems." |
| --check runs the playbook without making any changes on remote systems, and --diff provides before-and-after comparisons | S15 | "In diff mode, Ansible provides before-and-after comparisons." |
| Diff mode is most common in modules that manipulate files, such as the template module | S15 | "Diff mode is most common in modules that manipulate files (for example, the template module)" |
| The setting DEFAULT_LOCAL_TMP is the temporary directory for Ansible to use on the controller | S30 | "Temporary directory for Ansible to use on the controller." |
| In check mode, Ansible runs without making any changes on remote systems | S15 | "In check mode, Ansible runs without making any changes on remote systems." |
| The file changed.log already held settings changed, and most modules exit without performing any actions if the desired state has been achieved | S10 | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| The tests page says that, with --check, Ansible reports if it thinks that it would have had to make any changes to bring the system into a desired state | S28 | "using the --check flag to the ansible command will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| The section of that page about this is named Check Mode As A Drift Test | S28 | "Check Mode As A Drift Test" |
| The module is used for fetching a base64-encoded blob containing the data in a remote file | S24 | "It is used for fetching a base64- encoded blob containing the data in a remote file." |
| The keyword register is the name of the variable that will contain the task status and the module return data | S45 | "Name of variable that will contain task status and module return data." |
| The module retrieves facts for a file, similar to the Linux/Unix stat command | S40 | "Retrieves facts for a file similar to the Linux/Unix stat command." |
| Its return value mode holds the Unix permissions of the file in octal representation as a string | S40 | "Unix permissions of the file in octal representation as a string" |
| The option that is a list of string expressions of the same form that can be passed to the when statement | S25 | "A list of string expressions of the same form that can be passed to the when statement." |
| The example of the slurp module uses the expression {{ mounts['content'] \| b64decode }} to decode the content | S24 | "Print returned information" |
| The example of the slurp module uses the expression {{ mounts['content'] \| b64decode }} to decode the content | S24 | "b64decode" |
| The option success_msg is the customized message used for a successful assertion, and fail_msg is the customized message used for a failing assertion | S25 | "The customized message used for a successful assertion." |
| The option success_msg is the customized message used for a successful assertion, and fail_msg is the customized message used for a failing assertion | S25 | "The customized message used for a failing assertion." |
| When a module fails, Ansible by default stops executing on that host | S16 | "When Ansible receives a non-zero return code from a command or a failure from a module, by default it stops executing on that host and continues on other hosts." |
| The option --project-dir is the location of project/repository | S33 | "Location of project/repository, autodetected based on location of configuration file." |
| Profiles gradually increase the strictness of the rules as your Ansible content lifecycle matures | S32 | "Ansible-lint profiles gradually increase the strictness of rules as your Ansible content lifecycle matures." |
| The option --profile takes one of min, basic, moderate, safety, shared, and production | S33 | "--profile {min,basic,moderate,safety,shared,production}" |
| The production profile ensures that content meets requirements for inclusion in Ansible Automation Platform (AAP) as validated or certified content | S32 | "The production profile ensures that content meets requirements for inclusion in Ansible Automation Platform (AAP) as validated or certified content." |
| The setting DEPRECATION_WARNINGS is a toggle to control the showing of deprecation warnings | S30 | "Toggle to control the showing of deprecation warnings" |
| The setting DEPRECATION_WARNINGS is a toggle to control the showing of deprecation warnings , and its environment variable is ANSIBLE_DEPRECATION_WARNINGS | S30 | "Variable: ANSIBLE_DEPRECATION_WARNINGS" |
| The rule name checks the names: name[play] says that all plays should be named, name[missing] that all tasks should be named, and name[casing] that all names should start with an uppercase letter for languages that support it | S34 | "name[casing] - All names should start with an uppercase letter for languages that support it." |
| The rule name checks the names: name[play] says that all plays should be named, name[missing] that all tasks should be named, and name[casing] that all names should start with an uppercase letter for languages that support it | S34 | "name[missing] - All tasks should be named." |
| The rule name checks the names: name[play] says that all plays should be named, name[missing] that all tasks should be named, and name[casing] that all names should start with an uppercase letter for languages that support it | S34 | "name[play] - All plays should be named." |
| The rule no-changed-when checks that tasks return changes to results or conditions | S35 | "This rule checks that tasks return changes to results or conditions." |
| The rule risky-file-permissions is triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable | S36 | "This rule is triggered by various modules that could end up creating new files on disk with permissions that might be too open, or unpredictable." |
| The min profile ensures that Ansible can load content | S32 | "The min profile ensures that Ansible can load content." |
| The basic profile prevents common coding issues and enforces standard styles and formatting | S32 | "The basic profile prevents common coding issues and enforces standard styles and formatting." |
| ansible-lint creates caches with installed roles and collections under the runtime cache directory, which is typically {project}/.ansible when it is not offline | S33 | "For optimal performance, Ansible-lint creates caches with installed roles and collections under the runtime cache directory (typically {project}/.ansible when not offline" |
| It does not clean the cache by itself | S33 | "Ansible-lint does not automatically clean the cache." |
| ansible-vault is an encryption/decryption utility for Ansible data files | S41 | "encryption/decryption utility for Ansible data files" |
| To store a vault password in a file, you enter the password as a string on a single line in the file | S44 | "To store a vault password in a file, enter the password as a string on a single line in the file." |
| The docs also say to make sure that the permissions on the file are appropriate, and not to add password files to source control | S44 | "Make sure the permissions on the file are appropriate. Do not add password files to source control." |
| To encrypt an existing file, you use the ansible-vault encrypt command | S27 | "To encrypt an existing file, use the ansible-vault encrypt command." |
| The option --vault-password-file takes a vault password file | S41 | "--vault-password-file, --vault-pass-file" |
| The option --vault-password-file takes a vault password file | S41 | "vault password file" |
| The docs show an example of encrypted content with the header $ANSIBLE_VAULT;1.1;AES256 | S27 | "$ANSIBLE_VAULT;1.1;AES256" |
| To view the contents of an encrypted file without editing it, you can use the ansible-vault view command | S27 | "To view the contents of an encrypted file without editing it, you can use the ansible-vault view command:" |
| Ansible Vault can encrypt two types of content, variables and files | S27 | "You can encrypt two types of content with Ansible Vault: variables and files." |
| Ansible resources are models of desired state, so it should not be necessary to test that services are started or that packages are installed | S28 | "Ansible resources are models of desired-state. As such, it should not be necessary to test that services are started, packages are installed, or other such things." |
| The assert module makes it very easy to validate various kinds of truth | S28 | "And the assert module makes it very easy to validate various kinds of truth" |
| If you need to test for the existence of files that your Ansible configuration does not set declaratively, the stat module is a great choice | S28 | "Should you feel the need to test for the existence of files that are not declaratively set by your Ansible configuration, the ‘stat’ module is a great choice" |
| Its return value mode holds the Unix permissions of the file in octal representation as a string | S40 | "Unix permissions of the file in octal representation as a string" |
| There is no need to check the return codes of commands, because Ansible checks them automatically | S28 | "As mentioned above, there's no need to check things like the return codes of commands. Ansible is checking them automatically." |
| Most Ansible modules exit without performing any actions if the desired final state has already been achieved | S10 | "Most Ansible modules check whether the desired final state has already been achieved and exit without performing any actions if that state has been achieved." |
| Not all playbooks and not all modules behave this way | S10 | "However, not all playbooks and not all modules behave this way." |
| With --check, Ansible reports if it thinks it would have had to make any changes to bring the system into a desired state | S28 | "using the --check flag to the ansible command will report if Ansible thinks it would have had to have made any changes to bring the system into a desired state." |
| Check mode is just a simulation | S15 | "Check mode is just a simulation." |
| Modules that do not support it report nothing and do nothing | S15 | "Modules that do not support check mode report nothing and do nothing." |
| Ordinarily, scripts and commands do not run in check mode | S28 | "Ordinarily, scripts and commands don’t run in check mode" |
| A check does not generate output for tasks that use conditionals based on registered variables | S15 | "It will not generate output for tasks that use conditionals based on registered variables (results of prior tasks)." |
| In diff mode, Ansible provides before-and-after comparisons | S15 | "In diff mode, Ansible provides before-and-after comparisons." |
| Because --diff can reveal sensitive information, you can disable it for a task with diff: false | S15 | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them | S10 | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| The option --strict returns a non-zero exit code on warnings as well as errors | S33 | "-s, --strict Return non-zero exit code on warnings as well as errors" |
| --syntax-check performs a syntax check on the playbook, but does not execute it | S20 | "perform a syntax check on the playbook, but do not execute it" |
| --list-hosts outputs a list of matching hosts, and it does not execute anything else | S20 | "outputs a list of matching hosts; does not execute anything else" |
| --list-tasks lists all tasks that would be executed | S20 | "list all tasks that would be executed" |
| The tips page says that you should encrypt sensitive or secret variables with Ansible Vault | S29 | "You should encrypt sensitive or secret variables with Ansible Vault." |
| The docs say not to add password files to source control | S44 | "Do not add password files to source control." |
| You can keep your production environment separate from development, test, and staging environments by using separate inventory files or directories for each environment | S29 | "You can keep your production environment separate from development, test, and staging environments by using separate inventory files or directories for each environment." |
| If an inventory contains both production and development environments, developers using that inventory would be able to access production secrets | S29 | "If an inventory contains both production and development environments, developers using that inventory would be able to access production secrets." |
| Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles | S37 | "Molecule is an Ansible testing framework designed for developing and testing Ansible collections, playbooks, and roles." |
| An integration test battery, such as Selenium tests or automated API tests, should be written by your QA team if you are a production webservice | S28 | "Something like an integration test battery should be written by your QA team if you are a production webservice." |
| An integration test battery, such as Selenium tests or automated API tests, should be written by your QA team if you are a production webservice | S28 | "This would include things like Selenium tests or automated API tests" |
| It would usually not be embedded into your playbooks | S28 | "would usually not be something embedded into your Ansible playbooks" |
| It does make sense to include some basic health checks into your playbooks | S28 | "However, it does make sense to include some basic health checks into your playbooks" |
| The ping module always returns pong on successful contact | S39 | "A trivial test module, this module always returns pong on successful contact." |
| It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to log in and that a usable Python is configured | S39 | "It does not make sense in playbooks, but it is useful from /usr/bin/ansible to verify the ability to login and that a usable Python is configured." |
| You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred | S35 | "You should always use the changed_when clause on tasks that do not naturally detect if a change has occurred or not." |
| Some of the most common examples are the shell and command modules, which run arbitrary commands | S35 | "Some of the most common examples are shell and command modules, which run arbitrary commands." |
| The rule no-changed-when of ansible-lint checks that tasks return changes to results or conditions | S35 | "This rule checks that tasks return changes to results or conditions." |
| Check mode is just a simulation | S15 | "Check mode is just a simulation." |
| Modules that do not support check mode report nothing and do nothing | S15 | "Modules that do not support check mode report nothing and do nothing." |
| Ordinarily, scripts and commands do not run in check mode | S28 | "Ordinarily, scripts and commands don’t run in check mode" |
| A task with check_mode: false runs in normal mode and makes changes to the system, even when the playbook is called with --check | S15 | "To force a task to run in normal mode and make changes to the system, even when the playbook is called with --check, set check_mode: false." |
| Handlers run in the order of the handlers section, and not in the order of the notify list | S13 | "Handlers are executed in the order they are defined in the handlers section, not in the order listed in the notify statement." |
| Notifying the same handler multiple times results in executing the handler only once, regardless of how many tasks notify it | S13 | "Notifying the same handler multiple times will result in executing the handler only once regardless of how many tasks notify it." |
| The meta: flush_handlers task triggers the handlers that have been notified at that point in the play | S13 | "The meta: flush_handlers task triggers any handlers that have been notified at that point in the play." |
| The option --force-handlers runs handlers even if a task fails | S20 | "run handlers even if a task fails" |
| The directive only works when the task can run and returns a value of failed | S16 | "The ignore_errors directive only works when the task can run and returns a value of ‘failed’." |
| It does not make Ansible ignore undefined variable errors, connection failures, execution issues, or syntax errors | S16 | "It does not make Ansible ignore undefined variable errors, connection failures, execution issues (for example, missing packages), or syntax errors." |
| For consistent results, quote octal numbers, so that Ansible receives a string | S21 | "For consistent results, quote octal numbers (for example, '644' or '1777') so Ansible receives a string" |
| In its output, Ansible shows you the name of each named entity it runs | S29 | "In its output, Ansible shows you the name of each named entity it runs." |
| The rule name[play] says that all plays should be named, and name[missing] says that all tasks should be named | S34 | "name[missing] - All tasks should be named." |
| The rule name[play] says that all plays should be named, and name[missing] says that all tasks should be named | S34 | "name[play] - All plays should be named." |
| For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks | S10 | "For Ansible 2.10 and later, you should use the fully-qualified collection name (FQCN) in your playbooks." |
| There is no need to check the return codes of commands, because Ansible checks them automatically | S28 | "As mentioned above, there's no need to check things like the return codes of commands. Ansible is checking them automatically." |
| The playbooks page describes ansible-lint as feedback on your playbooks before you execute them | S10 | "You can use ansible-lint for detailed, Ansible-specific feedback on your playbooks before you execute them." |
| The docs say not to add password files to source control | S44 | "Do not add password files to source control." |
| Because --diff can reveal sensitive information, you can disable it for a task with diff: false | S15 | "Because the --diff option can reveal sensitive information, you can disable it for a task by specifying diff: false." |
| If an inventory contains both, developers who use it would be able to access production secrets | S29 | "If an inventory contains both production and development environments, developers using that inventory would be able to access production secrets." |
| The setting ANSIBLE_HOME is the default root path for Ansible config files on the controller, and its default is ~/.ansible | S30 | "The default root path for Ansible config files on the controller. Type: path Default: ~/.ansible" |
| The setting remote_tmp is the temporary directory to use on targets when executing tasks, and its default is ~/.ansible/tmp | S9 | "Temporary directory to use on targets when executing tasks. Default: "~/.ansible/tmp"" |
| Look into a folder before you delete it, because the docs say not to delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections | S33 | "Do not delete shared ~/.ansible or ANSIBLE_HOME directories when they contain installed roles or collections." |
