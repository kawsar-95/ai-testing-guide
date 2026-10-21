# Voice fact-check: Install Claude Code (`content/getting-started/setup.mdx`)

- Page: `content/getting-started/setup.mdx`, 8 `<Voices>` blocks.
- Date: 2026-10-20.
- Checker: an agent that did not write the page.
- Method: Each claim in each `<Layman>` and `<Bangla>` panel is compared with the `<Technical>` panel of the same `##` section. A claim that is not in the Technical panel is a FAIL. A claim that changes a number, a version, a flag, a command, a path, or a condition is a FAIL. An omission is not a FAIL. Each `<Cite n>` in a voice panel must be a cite that the Technical panel uses for the same claim. The Technical panel itself was checked against the sources in `getting-started-setup.factcheck.md`.
- Language column: OK, or a note on the Bangla (or English) wording. A language note is a FAIL only if it changes or hides the meaning.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | Before you install | Layman | Needs a Pro, Max, Team, Enterprise, or Console account; free claude.ai plan excludes Claude Code [1] | "Claude Code needs a Pro, Max, Team, Enterprise, or Console account. The free claude.ai plan does not include Claude Code." | PASS | OK |
| 2 | Before you install | Layman | Third-party providers: Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry [1] | "You can also use Claude Code through a third-party API provider: Amazon Bedrock, Google Cloud's Agent Platform, or Microsoft Foundry." | PASS | OK |
| 3 | Before you install | Layman | OS: macOS 13.0+, Windows 10 1809+, Windows Server 2019+, Ubuntu 20.04+, Debian 10+, Alpine Linux 3.19+ [1] | "macOS 13.0+, Windows 10 1809+ or Windows Server 2019+, Ubuntu 20.04+, Debian 10+, Alpine Linux 3.19+" | PASS | OK |
| 4 | Before you install | Layman | 4 GB RAM or more; x64 or ARM64 processor [1] | "4 GB+ RAM, x64 or ARM64 processor" | PASS | OK |
| 5 | Before you install | Layman | Shell: Bash, Zsh, PowerShell, or CMD [1] | "Bash, Zsh, PowerShell, or CMD" | PASS | OK |
| 6 | Before you install | Layman | A connection to the internet [1] | "Internet connection required" | PASS | OK |
| 7 | Before you install | Layman | Install on the computer that runs your tests: laptop, WSL 2 shell, or CI runner (no cite) | "Install Claude Code on the machine that runs your tests. For most teams, that is a developer laptop, a WSL 2 shell, or a CI runner." | PASS | OK |
| 8 | Before you install | Bangla | You need a Pro, Max, Team, Enterprise, or Console account; the claude.ai free plan has no Claude Code [1] | as row 1 | PASS | OK |
| 9 | Before you install | Bangla | You can also use Claude Code through a third-party API provider: Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry [1] | as row 2 | PASS | OK |
| 10 | Before you install | Bangla | OS: macOS 13.0 or newer, Windows 10 1809 or newer, Windows Server 2019 or newer, Ubuntu 20.04, Debian 10, Alpine Linux 3.19 or newer [1] | as row 3 | PASS | OK (fix round 1: "বা তার পরের") |
| 11 | Before you install | Bangla | At least 4 GB RAM and an x64 or ARM64 processor [1] | as row 4 | PASS | OK |
| 12 | Before you install | Bangla | A shell: Bash, Zsh, PowerShell, or CMD [1] | as row 5 | PASS | OK |
| 13 | Before you install | Bangla | Internet connection [1] | as row 6 | PASS | OK |
| 14 | Before you install | Bangla | Install on the machine where your tests run; laptop, WSL 2 shell, or CI runner; for CI runners read Headless & CI after this page | Row 7 quote + "For CI runners, read [Headless & CI](/automate/headless/) after this page." | PASS | OK |
| 15 | Install the CLI | Layman | The docs recommend the native installer [1] | "The docs label the native installer as the recommended install." | PASS | OK |
| 16 | Install the CLI | Layman | One command for macOS/Linux/WSL, one for Windows PowerShell, one for CMD [1] (reworded in fix round 1) | "macOS, Linux, or WSL:" / "Windows PowerShell:" / "Windows CMD:" (three code blocks) | PASS | OK |
| 17 | Install the CLI | Layman | (Fix round 1) "If Windows says that `&&` is not a valid statement separator, you are in PowerShell: use the PowerShell command. If Windows says that `irm` is not recognized, you are in CMD: use the CMD command." [1] | "If you see `The token '&&' is not a valid statement separator`, you are in PowerShell, not CMD. Use the PowerShell command." / "If you see `'irm' is not recognized as an internal or external command`, you are in CMD, not PowerShell. Use the CMD command." | PASS (recheck): each error now maps to the shell and the command that the Technical panel gives. Cite 1 matches the Technical cite. Was FAIL in round 1: the condition "an error about `&&` or `irm`" was wider than the two exact error texts. | OK |
| 18 | Install the CLI | Layman | The installer shows no progress while it downloads [1] (fix round 1) | "The installer shows no progress while it downloads." | PASS | OK |
| 19 | Install the CLI | Layman | When it finishes, open a new terminal and run `claude --version` [1] | "When it finishes, open a new terminal window and run `claude --version`." | PASS | OK |
| 20 | Install the CLI | Layman | A native install updates itself in the background [1] | "Native installs update automatically in the background." | PASS | OK |
| 21 | Install the CLI | Layman | You can also install with Homebrew, WinGet, apt, dnf, or apk [1] | "Homebrew: …", "WinGet: …", "Claude Code also publishes signed apt, dnf, and apk repositories…" | PASS | OK |
| 22 | Install the CLI | Layman | Homebrew and WinGet installs do not update themselves by default [1] | "Homebrew and WinGet installs do not auto-update by default." | PASS | OK |
| 23 | Install the CLI | Layman | apt, dnf, and apk installs always need a manual upgrade [1] | "apt, dnf, and apk installs always need a manual upgrade." | PASS | OK |
| 24 | Install the CLI | Layman | npm package works; needs Node.js 22 or later [1] | "The npm package still works. It needs Node.js 22 or later…" | PASS | OK |
| 25 | Install the CLI | Layman | Do not run `sudo npm install -g`: permission problems and security risks [1] | "Do not run `sudo npm install -g`. The docs say it can cause permission issues and security risks." | PASS | OK |
| 26 | Install the CLI | Layman | To upgrade, install `@anthropic-ai/claude-code@latest` [1] | "To upgrade an npm install, install the `@latest` tag." + `npm install -g @anthropic-ai/claude-code@latest` | PASS | OK |
| 27 | Install the CLI | Layman | (Removed in fix round 1 for the word limit.) Was: On native Windows, the docs recommend Git for Windows [1] | "On native Windows, Git for Windows is recommended." | N/A (removed; an omission is not a FAIL. Technical and Bangla row 43 still state it.) | OK |
| 28 | Install the CLI | Layman | For a Bash sandbox use WSL 2; native Windows and WSL 1 do not support sandboxing [1] | "If your team works on Windows and wants Claude Code to run Bash commands in a sandbox, use WSL 2. Native Windows and WSL 1 do not support sandboxing." | PASS | OK |
| 29 | Install the CLI | Layman | In WSL, use the Linux installer and start `claude` inside WSL [1] | "To install in WSL, open your WSL distribution and run the Linux installer. Start `claude` inside WSL, not from PowerShell or CMD." | PASS | OK |
| 30 | Install the CLI | Bangla | Per the docs, the native installer is the recommended way [1] | as row 15 | PASS | OK |
| 31 | Install the CLI | Bangla | Three install commands: macOS/Linux/WSL, Windows PowerShell, Windows CMD [1] | as row 16 | PASS | OK |
| 32 | Install the CLI | Bangla | (Fix round 1) If you see `The token '&&' is not a valid statement separator`, you are in PowerShell, so run the PowerShell command; if you see `'irm' is not recognized as an internal or external command`, you are in CMD, so run the CMD command [1] | as row 17 | PASS (recheck): both error texts are exact copies of the Technical text, and each maps to the correct shell and command. Was FAIL in round 1 (same reason as row 17). | OK |
| 33 | Install the CLI | Bangla | The installer shows no progress while it downloads [1] | "The installer shows no progress while it downloads." | PASS | OK |
| 34 | Install the CLI | Bangla | When it finishes, open a new terminal window and run `claude --version` [1] | as row 19 | PASS | OK |
| 35 | Install the CLI | Bangla | A native install updates itself in the background [1] | as row 20 | PASS | OK |
| 36 | Install the CLI | Bangla | You can also install with Homebrew, WinGet, apt, dnf, or apk [1] | as row 21 | PASS | OK |
| 37 | Install the CLI | Bangla | Homebrew and WinGet installs do not update themselves by default [1] | as row 22 | PASS | OK (fix round 1: "default হিসেবে") |
| 38 | Install the CLI | Bangla | If you set `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` to `1`, Claude Code runs the upgrade command for you [1] | "To have Claude Code run the upgrade command for you on Homebrew or WinGet, set `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` to `1`." | PASS (the Homebrew/WinGet scope comes from the sentence before it) | OK |
| 39 | Install the CLI | Bangla | apt, dnf, and apk installs always need a manual upgrade [1] | as row 23 | PASS | OK |
| 40 | Install the CLI | Bangla | npm package works; needs Node.js 22 or newer [1] | as row 24 | PASS | OK (fix round 1: "বা তার পরের") |
| 41 | Install the CLI | Bangla | Do not run `sudo npm install -g`: permission problems and security risk [1] | as row 25 | PASS | OK |
| 42 | Install the CLI | Bangla | To upgrade, do not use `npm update -g`; install `@anthropic-ai/claude-code@latest` [1] | "Do not use `npm update -g`: it respects the semver range of the first install…" + row 26 quote | PASS | OK |
| 43 | Install the CLI | Bangla | Git for Windows is recommended on native Windows; with it, Claude Code uses Git Bash for the Bash tool [1] | "On native Windows, Git for Windows is recommended. With it, Claude Code uses Git Bash for the Bash tool." | PASS | OK |
| 44 | Install the CLI | Bangla | For a Bash sandbox use WSL 2, because native Windows and WSL 1 do not support sandboxing [1] | as row 28 | PASS | OK |
| 45 | Install the CLI | Bangla | In WSL, run the Linux installer and start `claude` from inside WSL [1] | as row 29 | PASS | OK |
| 46 | Verify the install | Layman | Open a new terminal, run `claude --version` [1] | "Open a new terminal and print the version:" + `claude --version` | PASS | OK |
| 47 | Verify the install | Layman | A working install prints a version number then `(Claude Code)`, e.g. `2.1.211 (Claude Code)` [1] | "A working install prints a version number followed by `(Claude Code)`, for example `2.1.211 (Claude Code)`." | PASS | OK |
| 48 | Verify the install | Layman | If the shell cannot find `claude`, the install folder is not on your `PATH` [1] | "If the shell cannot find `claude`, the install directory is not on your `PATH`." | PASS | OK |
| 49 | Verify the install | Layman | `claude doctor` does a health check, does not start a session, does not change anything [1] | "`claude doctor` prints read-only install and settings diagnostics without starting a session." | PASS ("read-only" = "does not change anything") | OK |
| 50 | Verify the install | Layman | It shows install health, errors in settings files, warnings with possible fixes [1] | "It shows install health, settings-file validation errors, and warnings with suggested fixes." | PASS | OK |
| 51 | Verify the install | Layman | `/doctor` in a session also proposes fixes; Claude applies them after you confirm [2] | "Inside a session, `/doctor` also proposes fixes, and Claude applies them after you confirm." | PASS | OK |
| 52 | Verify the install | Bangla | After install, check that Claude Code works; open a new terminal and run `claude --version` [1] | as row 46 (the first clause is a lead-in, not a fact) | PASS | OK |
| 53 | Verify the install | Bangla | A good install shows a version number then `(Claude Code)`, e.g. `2.1.211 (Claude Code)` [1] | as row 47 | PASS | OK |
| 54 | Verify the install | Bangla | If the shell cannot find `claude`, the install directory is not in your `PATH` [1] | as row 48 | PASS | OK |
| 55 | Verify the install | Bangla | Run `claude doctor` as a health check; it starts no session and changes nothing [1] | as row 49 | PASS | OK |
| 56 | Verify the install | Bangla | It shows install state, settings-file validation errors, warnings with fix suggestions [1] | as row 50 | PASS | OK |
| 57 | Verify the install | Bangla | `/doctor` in a session also proposes fixes; Claude applies them after you confirm [2] | as row 51 | PASS | OK (fix round 1: "fix-গুলো") |
| 58 | Log in | Layman | Run `claude` and log in through the browser [1] | "Run `claude` and follow the browser prompts to log in." | PASS | OK |
| 59 | Log in | Layman | If the browser does not open, press `c` to copy the login link [3] | "If the browser does not open, press `c` to copy the login URL." | PASS | OK |
| 60 | Log in | Layman | If the browser shows a code, paste it into the terminal; this happens often in WSL 2, SSH sessions, containers [3] | "If the browser shows a code, paste it at the `Paste code here if prompted` prompt. This code step is common in WSL 2, SSH sessions, and containers." | PASS | OK |
| 61 | Log in | Layman | When the login works, you see `Login successful` [3] | "When the login works, Claude Code shows `Login successful`." | PASS | OK |
| 62 | Log in | Layman | You can also log in with an Anthropic Console account [4] | "You can log in with Anthropic Console credentials." [4] | PASS | OK |
| 63 | Log in | Layman | Another way is the `ANTHROPIC_API_KEY` environment variable [3] | "If you set the `ANTHROPIC_API_KEY` environment variable and approve the key when Claude Code asks, Claude Code skips the login prompt." | PASS | OK |
| 64 | Log in | Layman | With a subscription, if you set and approve the key, Claude Code uses the key, not the subscription [3] | "If you have a subscription and also set `ANTHROPIC_API_KEY`, Claude Code uses the key after you approve it." | PASS | OK |
| 65 | Log in | Layman | To go back, unset the key and check the login method with `/status` [3] | "To go back to your subscription, unset the key and check the active method with `/status`" | PASS | OK |
| 66 | Log in | Layman | `claude auth login`, `claude auth status`, `claude auth logout` control the login [5] | Login commands table rows for the three commands | PASS | OK |
| 67 | Log in | Layman | `claude auth status` exits `0` if logged in, `1` if not [5] | "Exits with `0` if logged in, `1` if not." | PASS | OK |
| 68 | Log in | Layman | So a test script can check the login before it starts | "Example: a pre-check in a local test script that stops when nobody is logged in. It uses the exit code of `claude auth status`." | PASS | OK |
| 69 | Log in | Layman | `claude setup-token` makes a token valid for one year [3] | "`claude setup-token` generates a one-year OAuth token for CI and scripts." | PASS | OK |
| 70 | Log in | Layman | The command does not save the token; keep it in CI secrets as `CLAUDE_CODE_OAUTH_TOKEN` [3] | "Set the token as `CLAUDE_CODE_OAUTH_TOKEN`. The command does not save the token anywhere, so store it in your CI secrets." | PASS | OK |
| 71 | Log in | Bangla | Run `claude` in the terminal and follow the browser instructions to log in [1] | as row 58 | PASS | OK |
| 72 | Log in | Bangla | If the browser does not open, press `c` to copy the login URL [3] | as row 59 | PASS | OK |
| 73 | Log in | Bangla | If the browser shows a code, paste it at the `Paste code here if prompted` prompt; often in WSL 2, SSH, containers [3] | as row 60 | PASS | OK |
| 74 | Log in | Bangla | On success, `Login successful` shows [3] | as row 61 | PASS | OK |
| 75 | Log in | Bangla | You can also log in with an Anthropic Console account [4] | as row 62 | PASS | OK |
| 76 | Log in | Bangla | If you set `ANTHROPIC_API_KEY` and approve the key when asked, the login prompt does not come [3] | as row 63 | PASS | OK |
| 77 | Log in | Bangla | With a subscription, a set and approved key wins over the subscription [3] | as row 64 | PASS | OK |
| 78 | Log in | Bangla | To go back, unset the key and check the active method with `/status` [3] | as row 65 | PASS | OK |
| 79 | Log in | Bangla | `claude auth login` / `status` / `logout` control the login from the terminal [5] | as row 66 | PASS | OK |
| 80 | Log in | Bangla | `claude auth status` exits `0` if logged in, else `1`; a test script can check login first [5] | as rows 67, 68 | PASS | OK |
| 81 | Log in | Bangla | Use `/login` and `/logout` inside a session [2] | "`/login` Signs in from inside a session." / "`/logout` Signs out from inside a session." | PASS | OK |
| 82 | Log in | Bangla | `claude setup-token` makes a one-year OAuth token for CI [3] | as row 69 | PASS | OK |
| 83 | Log in | Bangla | The command does not save the token, so keep it in CI secrets as `CLAUDE_CODE_OAUTH_TOKEN` [3] | as row 70 | PASS | OK (fix round 1: "Command-টি", "token-টি") |
| 84 | Connect your IDE | Layman | VS Code needs version 1.94.0 or later [6] | "The VS Code extension needs VS Code 1.94.0 or later." | PASS | OK |
| 85 | Connect your IDE | Layman | Any paid subscription (Pro, Max, Team, Enterprise) or Console account; no API key needed [6] | "Any paid Claude subscription (Pro, Max, Team, or Enterprise) or a Console account works, and no API key is required." | PASS | OK |
| 86 | Connect your IDE | Layman | Open the Extensions view, search "Claude Code", click Install [6] | Steps 1-2 of the VS Code list | PASS | OK |
| 87 | Connect your IDE | Layman | Click the Spark icon to open Claude [6] | "Open Claude with the Spark icon in the Editor Toolbar or the Activity Bar." | PASS | OK |
| 88 | Connect your IDE | Layman | The same extension works in Cursor and other VS Code forks [6] | "The same extension works in Cursor and other VS Code forks." | PASS | OK |
| 89 | Connect your IDE | Layman | JetBrains IDEs such as IntelliJ IDEA, PyCharm, WebStorm: install the plugin from JetBrains Marketplace, then restart [8] | "The JetBrains plugin supports IntelliJ IDEA, PyCharm, Android Studio, WebStorm, PhpStorm, and GoLand." + steps 2-3 | PASS ("such as" marks a subset) | OK |
| 90 | Connect your IDE | Layman | The plugin does not include the CLI; it runs `claude` in the IDE terminal, so install the CLI first [8] | "The plugin runs the `claude` command in the IDE's integrated terminal. It does not bundle its own copy of the CLI." + step 1 | PASS | OK |
| 91 | Connect your IDE | Layman | If `claude` is not on `PATH`, the plugin shows "Cannot launch Claude Code" [8] | "If `claude` is not on your `PATH`, the plugin shows \"Cannot launch Claude Code\"." | PASS | OK |
| 92 | Connect your IDE | Layman | In both IDEs, `Ctrl+Esc` (Windows/Linux) or `Cmd+Esc` (Mac) goes from the editor to Claude [6][8] | VS Code: "`Cmd+Esc` (Mac) or `Ctrl+Esc` (Windows/Linux) moves focus between the editor and Claude." JetBrains: "Press `Cmd+Esc` (Mac) or `Ctrl+Esc` (Windows/Linux) to open Claude Code from the editor." | PASS (true for both IDEs; it omits that in VS Code the key also moves focus back. Cites 6 and 8 each support their IDE.) | OK |
| 93 | Connect your IDE | Bangla | VS Code needs version 1.94.0 or newer [6] | as row 84 | PASS | OK (fix round 1: "1.94.0 বা তার পরের version"; same number) |
| 94 | Connect your IDE | Bangla | Any paid subscription or Console account works; no API key needed [6] | as row 85 | PASS | OK |
| 95 | Connect your IDE | Bangla | Open Extensions view, search "Claude Code", click Install; open Claude with the Spark icon [6] | as rows 86, 87 | PASS | OK |
| 96 | Connect your IDE | Bangla | Same extension works in Cursor and other VS Code forks [6] | as row 88 | PASS | OK |
| 97 | Connect your IDE | Bangla | `claudeCode.initialPermissionMode` sets the permission mode the extension starts in [7] | "To choose the mode the extension starts in, set `claudeCode.initialPermissionMode` in your VS Code user settings." [7] | PASS | OK |
| 98 | Connect your IDE | Bangla | JetBrains plugin supports IntelliJ IDEA, PyCharm, Android Studio, WebStorm, PhpStorm, GoLand [8] | "The JetBrains plugin supports IntelliJ IDEA, PyCharm, Android Studio, WebStorm, PhpStorm, and GoLand." | PASS | OK |
| 99 | Connect your IDE | Bangla | The plugin has no own CLI copy; it runs `claude` in the IDE integrated terminal [8] | as row 90 | PASS | OK |
| 100 | Connect your IDE | Bangla | Install the CLI first, then the plugin from JetBrains Marketplace, then restart the IDE [8] | Steps 1-3 of the JetBrains list | PASS | OK |
| 101 | Connect your IDE | Bangla | If `claude` is not in `PATH`, the plugin shows "Cannot launch Claude Code" [8] | as row 91 | PASS | OK |
| 102 | Connect your IDE | Bangla | In both IDEs, `Ctrl+Esc` / `Cmd+Esc` goes from the editor to Claude [6][8] | as row 92 | PASS (same note as row 92) | OK |
| 103 | Keep up to date | Layman | A native install checks for updates at start and from time to time while it runs [1] | "A native install checks for updates at startup and from time to time while it runs." | PASS | OK |
| 104 | Keep up to date | Layman | It downloads and installs updates in the background; they take effect at the next start [1] | "Updates download and install in the background and take effect the next time you start Claude Code." | PASS | OK |
| 105 | Keep up to date | Layman | Homebrew, WinGet, apt, dnf, apk do not update this way; use your package manager's upgrade command [1] | "Homebrew, WinGet, apt, dnf, and apk installs do not update this way. Use the upgrade command for your package manager…" | PASS | OK |
| 106 | Keep up to date | Layman | To update now, run `claude update` [1] | "To update now, run:" + `claude update` | PASS | OK |
| 107 | Keep up to date | Layman | `autoUpdatesChannel` selects the channel; default `"latest"` [1] | "The `autoUpdatesChannel` setting picks the channel. `\"latest\"` is the default." | PASS | OK |
| 108 | Keep up to date | Layman | `"stable"` uses a version usually about one week old and skips releases with major regressions [1] | "`\"stable\"` uses a version that is typically about one week old and skips releases with major regressions." | PASS | OK |
| 109 | Keep up to date | Layman | Gloss: regressions = "new bugs in features that worked before" | (no Technical sentence; general definition of the term in row 108) | PASS (a correct definition of a general testing term, not a new fact about Claude Code; it does not change which releases `stable` skips) | OK |
| 110 | Keep up to date | Layman | To stop the background check, set `DISABLE_AUTOUPDATER` to `"1"` in the `env` key of `settings.json` [1] | "To stop the background update check, set `DISABLE_AUTOUPDATER` to `\"1\"` in the `env` key of `settings.json`." | PASS | OK |
| 111 | Keep up to date | Layman | To block all updates, set `DISABLE_UPDATES` [1] | "To block all update paths, set `DISABLE_UPDATES` instead." | PASS | OK |
| 112 | Keep up to date | Layman | Tutorial suggestion: on shared CI runners use `stable` or a fixed version (no cite) | "This is the tutorial's suggestion, not a rule from the docs. On shared CI runners, use the `stable` channel or install a fixed version. Then a new Claude Code release does not change your test results in the middle of a run." | PASS (marked as the tutorial's suggestion, no cite, as in Technical) | OK |
| 113 | Keep up to date | Bangla | A native install looks for updates at start and from time to time while it runs [1] | as row 103 | PASS | OK |
| 114 | Keep up to date | Bangla | Updates download and install in the background and take effect at the next start [1] | as row 104 | PASS | OK |
| 115 | Keep up to date | Bangla | `claude doctor` shows the result of the last update [1] | "`claude doctor` shows the result of the last update." | PASS | OK |
| 116 | Keep up to date | Bangla | Package-manager installs do not update this way; use their upgrade command [1] | as row 105 | PASS | OK |
| 117 | Keep up to date | Bangla | To update now, run `claude update` [1] | as row 106 | PASS | OK |
| 118 | Keep up to date | Bangla | `autoUpdatesChannel` picks the channel; default `"latest"`; `"stable"` is usually about one week old and skips releases with major regressions [1] | as rows 107, 108 | PASS | OK |
| 119 | Keep up to date | Bangla | Set it with `/config` or in `settings.json` [1] | "Set it with `/config` or in `settings.json`." | PASS | OK |
| 120 | Keep up to date | Bangla | With the native installer, pass a target to install a specific version or the stable channel [1] | "To install a specific version or the stable channel with the native installer, pass a target:" | PASS | OK |
| 121 | Keep up to date | Bangla | Set `DISABLE_AUTOUPDATER` to `"1"` in the `env` key of `settings.json` to stop the background check [1] | as row 110 | PASS | OK |
| 122 | Keep up to date | Bangla | `claude update` and `claude install` still work [1] | "`claude update` and `claude install` still work." | PASS | OK |
| 123 | Keep up to date | Bangla | Set `DISABLE_UPDATES` to stop all kinds of update [1] | as row 111 | PASS | OK |
| 124 | Keep up to date | Bangla | Tutorial's own suggestion: shared CI runners use `stable` or a fixed version so a new release does not change results mid-run (no cite) | as row 112 | PASS | OK |
| 125 | Uninstall | Layman | The steps to remove Claude Code depend on how you installed it [1] | "Native install on macOS, Linux, or WSL:" / "npm install:" (two separate command sets) | PASS (restates the structure of the Technical panel) | OK |
| 126 | Uninstall | Layman | Native on macOS/Linux/WSL: remove `~/.local/bin/claude` and `~/.local/share/claude` with `rm -f …` and `rm -rf …` [1] | `rm -f ~/.local/bin/claude` / `rm -rf ~/.local/share/claude` | PASS (paths and commands match) | OK |
| 127 | Uninstall | Layman | npm: run `npm uninstall -g @anthropic-ai/claude-code`; it removes the global npm package [1] | `npm uninstall -g @anthropic-ai/claude-code` | PASS ("removes the global npm package" explains what the `-g` command does; no new product fact) | OK |
| 128 | Uninstall | Bangla | How you remove Claude Code depends on how you installed it; two methods shown: native and npm [1] | as row 125 | PASS | OK |
| 129 | Uninstall | Bangla | If you installed with the native installer on macOS/Linux/WSL, delete the `~/.local/bin/claude` file and `~/.local/share/claude` folder with the two `rm` commands [1] (fix round 1 adds "আপনি যদি … তাহলে", same meaning) | as row 126 | PASS | OK |
| 130 | Uninstall | Bangla | If you installed with npm, run `npm uninstall -g @anthropic-ai/claude-code`; it removes the global npm package [1] (fix round 1 adds "আপনি") | as row 127 | PASS | OK (fix round 1: "command-টি", "package-টি") |
| 131 | Next steps | Layman | Claude Code also runs on the web, as a desktop app, in Slack, and in CI/CD with GitHub Actions and GitLab [4] | "Claude Code also runs on the web, as a desktop app, in Slack, and in CI/CD with GitHub Actions and GitLab." | PASS | OK |
| 132 | Next steps | Layman | Link list: Models (model and effort level), Permission Modes, Headless & CI (scripts and pipelines) | The three link items | PASS | OK (fix round 1: "without asking you", same as Technical) |
| 133 | Next steps | Bangla | Claude Code also runs on the web, as a desktop app, in Slack, and in CI/CD with GitHub Actions and GitLab [4] | as row 131 | PASS | OK |
| 134 | Next steps | Bangla | Link list: Models, Permission Modes (what Claude can do without asking you), Headless & CI | The three link items | PASS | OK |

## FAILs

Round 1 (2026-10-20): rows 17 and 32. The wrong-shell sentence made the condition wider than the Technical panel. Fixed in fix round 1 (commit 5889547).

## Recheck 2026-10-20

- Scope: `git diff HEAD~1 -- content/getting-started/setup.mdx` (commit 5889547). The Technical panels did not change.
- Rows 17 and 32: now PASS. Each error text maps to the shell and the command that the Technical warning gives. The Bangla error texts are exact copies.
- Row 18: "while it downloads" was added. PASS.
- Row 27: the Layman Git for Windows sentence was removed for the word limit. This is an omission, not a FAIL.
- Rows 129, 130: the Bangla Uninstall panel adds "আপনি যদি … তাহলে" and "আপনি". The condition, paths, and commands do not change. PASS.
- Language fixes (rows 10, 37, 40, 57, 83, 93, 130, 132): checked. No number, version, or command changed.
- No new claims, so no new rows.

Open FAILs: 0
