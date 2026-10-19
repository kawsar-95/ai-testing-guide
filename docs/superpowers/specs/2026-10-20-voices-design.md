# Voices and Install Button: Design

Date: 2026-10-20. Branch: `feat/voices` (from `1dbcfd2`, the Architecture module).

## 1. Goal

Copy three features of the owner's reference site,
[All-Necessary-Topics-Related-to-AI-Engineering](https://kawsar-95.github.io/All-Necessary-Topics-Related-to-AI-Engineering/):

| Feature | What the reader sees |
|---|---|
| Install button | A download icon in the header. A click shows the browser prompt that installs the site as an app. |
| Voice switch | A segmented control under a `##` heading: `বাংলা` · `Technical` · `সহজ English` · `সবগুলো`. It selects the text of that section. |
| `বাংলা` header button | Sets Bangla as the site-wide default voice. Then the button shows `English`, which sets the default back to Technical. |

Decisions of the owner (2026-10-20):

- Ship in two phases. Phase 1 is the shell and 2 pilot pages. Phase 2 adds the voices to the other pages, one module at a time, with parallel agents.
- One URL per page. The `বাংলা` button changes the default voice. It does not open a `/bn/` copy of the site. The menus stay in English.

Out of scope: a `/bn/` mirror, Bangla menus and UI strings, Bangla search UI, Bangla metadata.

## 2. Voices

| Voice id | Button label | Text |
|---|---|---|
| `technical` | `Technical` | The current page text. It does not change. |
| `layman` | `সহজ English` | Plain English for a reader who is new to the topic. ASD-STE100 sentence rules. |
| `bangla` | `বাংলা` | Bangla. Commands, flags, paths, product names, and common technical terms stay in English (for example "KV cache", "load balancer"). |
| `all` | `সবগুলো` | All three texts, one after the other. |

Button order: `Technical`, `সহজ English`, `বাংলা`, `সবগুলো`. If the site-wide default is `bangla`, `বাংলা` moves to the first position (as in the reference site).

## 3. Authoring

A section with voices wraps its body in `<Voices>`, directly after the `##` heading:

```mdx
## How a load balancer picks a server

<Voices>
<Technical>

The current text, cites, code blocks, callouts, and ### headings.

</Technical>
<Layman>

Plain English text.

</Layman>
<Bangla>

বাংলা ব্যাখ্যা।

</Bangla>
</Voices>
```

Rules (`npm test` checks the rules marked ✓):

| Rule | ✓ |
|---|---|
| `<Voices>` is the first element after a `##` heading and ends before the next `##` heading. | ✓ |
| A `<Voices>` block has exactly one `<Technical>`, one `<Layman>`, and one `<Bangla>`, in that order. | ✓ |
| Each tag is on its own line at column 0, with a blank line inside each panel. This follows the MDX gotcha in CLAUDE.md. | ✓ |
| `<Layman>` and `<Bangla>` have no Markdown headings. Thus the "On this page" outline does not change. | ✓ |
| A `<Cite n>` in `<Layman>` or `<Bangla>` uses only a number that the `<Technical>` panel of the same section cites. | ✓ |
| `<Layman>` and `<Bangla>` give no fact that the `<Technical>` panel does not give. | fact check |
| A section without `<Voices>` renders as it does now. | ✓ |

## 4. Behavior

### 4.1 The site-wide default

- `lib/voice.ts` holds the types, the labels, `VOICE_STORAGE_KEY = "voice"`, and `resolveVoiceDefault(stored)`. The function returns `"bangla"` if the stored value is `"bangla"`, otherwise `"technical"`.
- `VOICE_INIT_SCRIPT` runs in `<head>` before the first paint, next to the theme script. It sets `data-voice-default` on `<html>`. `tests/voice.test.ts` checks that the script and `resolveVoiceDefault` agree (the same method as `tests/theme.test.ts`).
- `components/voice/useVoiceDefault.ts` is a `useSyncExternalStore` hook on the `<html>` attribute. A change in the header button updates every section on the page. A `storage` event from another tab also updates it.

### 4.2 One section

- `Voices` is a client component. Its state is `null` (follow the site-wide default) or the voice that the reader clicked in this section.
- If the site-wide default changes, every section goes back to `null`.
- Each panel renders as `<div data-panel="technical|layman|bangla">`. The `Bangla` panel also has `lang="bn"`.
- Before hydration, CSS selects the visible panel from `html[data-voice-default]`. After hydration, the wrapper gets `data-voice`, and CSS uses that. Thus a Bangla reader sees no flash of the Technical text.
- `সবগুলো` shows the Technical text first. Then it shows the Layman's text and the Bangla text, each in a tinted box with a 3 px left border and a label ("সহজ English", "বাংলা ব্যাখ্যা").
- The switcher is a `role="group"` of buttons with `aria-pressed`. The Left, Right, Home, and End keys move the selection. Only the selected button is in the tab order. This is the same as the reference `VoiceSwitcher`.
- If the URL hash or an "On this page" link targets an element in a hidden panel, that section switches to `technical`, and the page scrolls to the element.

### 4.3 The header

The right side of the header is: Linux, System Design, Architecture links, Search, `বাংলা`, the install button, and the theme button.

- `VoiceToggle` is a button with no `aria-pressed`. Its word names the voice that a click selects, not the current state, so a pressed state would contradict it. The text is `বাংলা` (with `lang="bn"`) when the default is Technical, and `English` when the default is Bangla. A click writes `localStorage.voice` and sets the `<html>` attribute.
- The accessible name (`aria-label` and `title`) starts with the visible word: `বাংলা – Show the Bangla text in every section`, or `English – Show the Technical text in every section`. The strings are `voiceToBangla` and `voiceToTechnical` in `lib/ui.ts`. The reason is WCAG 2.5.3 Label in Name: a speech-input user says the visible word to click the button. `tests/ui.test.ts` checks the two strings.
- `InstallButton` is a port of the reference component. It listens for `beforeinstallprompt` and shows only when the browser fires that event (Chromium browsers). The browser can fire the event before hydration. A head script (`INSTALL_CAPTURE_SCRIPT` in `lib/pwa-install.ts`, after the theme and voice scripts) keeps it on `window.__installPrompt`, and the button reads it on mount. Safari and Firefox users use their own browser menu. The site already has a manifest and a service worker (`lib/pwa.ts`), so no PWA change is necessary.
- On phones the header is narrow. The `বাংলা` button and the install button stay visible. The text links are already hidden below `md`.

### 4.4 Fonts and colors

- `app/layout.tsx` loads Noto Sans Bengali from `next/font/google` (`subsets: ["bengali"]`, variable `--font-noto-bengali`). Each font stack in `app/globals.css` adds it after its Latin font, as the reference site does.
- New tokens `--voice-layman` and `--voice-bangla`, in both themes, with Tailwind names `voice-layman` and `voice-bangla`. The start values come from the reference site: dark `#b9a3f0` and `#6fcf9f`, light `#6a4bc0` and `#1b7a4c`. Each one must have 4.5:1 contrast or more on `--bg` and `--bg-raised` of this site. Measure them before use.

### 4.5 Search, outline, and checks

- `lib/search.ts` removes JSX tags and keeps the text inside them. So the Layman and Bangla texts go into the doc of their `##` section with no code change. A test checks that a Bangla word in a `<Bangla>` panel finds that section.
- `lib/outline.ts` reads `##` and `###` headings from the source. Voice panels have no headings, so the outline does not change.
- `check_outline.py` checks that each outline link has a target id. A `###` heading in a hidden Technical panel is still in the HTML, so the check still passes.
- `check_sources.py` does not change. Every source is still cited in the Technical text.

## 5. Phase 1 scope

| Item | Files |
|---|---|
| Voice data, labels, init script | `lib/voice.ts` |
| The default-voice hook | `components/voice/useVoiceDefault.ts` |
| MDX components | `components/voice/Voices.tsx` (`Voices`, `Technical`, `Layman`, `Bangla`), registered in `mdx-components.tsx` |
| Scroll spy | `components/navigation/SectionNav.tsx`: skip a heading in a hidden panel |
| Header | `components/layout/VoiceToggle.tsx`, `components/layout/InstallButton.tsx`, `components/layout/SiteHeader.tsx` |
| Head script, font | `app/layout.tsx` |
| Tokens and panel CSS | `app/globals.css` |
| Strings | `lib/ui.ts` (aria labels, install text) |
| Tests | `tests/voice.test.ts` |
| Pilot pages | `content/getting-started/setup.mdx`, `content/architecture/load-balancer.mdx`: every `##` section except "Key words" |
| Pilot fact checks | `docs/superpowers/research/getting-started-setup.voices.factcheck.md`, `architecture-load-balancer.voices.factcheck.md` |
| Docs | A "Voices" section in `CLAUDE.md` |

Phase 1 is done when these pass: `npm test`, `npm run build`, `check_routes.py`, `check_links.py`, `check_outline.py`, `check_sources.py` (`OK 70 pages checked, 0 skipped`), the two pilot fact checks (`Open FAILs: 0`), and a browser check of a pilot page in both themes and at phone width.

## 6. Phase 2: content

- One module at a time: Getting Started, Foundations, Configure, Extend, Automate, Case Study, Linux, System Design, Architecture.
- For each page, a writer agent adds `<Voices>` to each `##` section. A different agent then fact-checks the voices against the Technical text of the same section. It writes `docs/superpowers/research/<group>-<slug>.voices.factcheck.md`. A page is done only when that report ends with `Open FAILs: 0`.
- These get no voices: "Key words" sections, the `## Sources` area, `architecture/practice`, and the "Permissions Cheat Sheet" topic of Linux stage 4. The cheat sheet must keep its original wording.
- Case Study pages (parts 18–23): the voices restate the workspace facts of the Technical text. They add no new workspace facts.
- Each module is one commit. Phase 2 starts only after the owner approves Phase 1 in the browser.

## 7. Risks

| Risk | Answer |
|---|---|
| A wrong Bangla or Layman text changes a fact. | The voice fact check, by an agent that did not write the text. |
| Hidden panels break the scroll spy of "On this page". | A hidden heading has `getBoundingClientRect().top = 0`, so `SectionNav` now marks it as current. Phase 1 changes `SectionNav` to skip an element with no box (`getClientRects().length === 0`). A browser check on the pilot page confirms it. |
| A larger font download for Bangla. | Accepted. `next/font` loads the Bengali subset when Bengali text first shows (`unicode-range`). The header button shows `বাংলা` on every page, so every reader downloads the font one time. `preload: false` stays: it prevents a preload warning and a high-priority fetch. The service worker caches the font at its first use, not at install. |
| An indented closing tag breaks a panel. | The column-0 rule and its test. |
