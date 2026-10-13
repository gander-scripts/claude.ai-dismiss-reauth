## Why

claude.ai periodically shows a "Sign in again to verify your device" dialog with `Not now` / `Signin` buttons that interrupts work. A userscript can dismiss it automatically. The repo is empty, so it also needs bootstrapping.

## What Changes

- Add a userscript (Vite + `vite-monkey-plugin`, `template-empty-ts`, scaffolded with `npm create monkey`) that watches claude.ai with a `MutationObserver` and clicks `Not now` on the re-auth dialog. English UI only, throttled so a re-appearing dialog cannot cause a click loop.
- `vite build` produces a single `.user.js` in `dist/` (no release workflow for now; version in the header comes from `package.json`).
- Repo scaffolding: `LICENSE` (MIT, 2026 Adam Gąsowski), `README.md` (short, English, emoji; what it does, install, dev, build), `.gitignore` (incl. `.idea`), `renovate.json`.
- CI: `ci.yml` and `auto-assign.yml` copied from `gander-tools/monkey-redmine-time-widget` and adapted to this project's scripts.
- Delivery: commit scaffolding files to `main` first, then the template, script and workflows on a feature branch with a PR.

## Capabilities

### New Capabilities
- `reauth-dialog-dismissal`: automatically dismisses claude.ai's "Sign in again to verify your device" dialog by clicking `Not now`.

### Modified Capabilities

## Impact

- New files only: userscript source, Vite/TS config, `package.json`, workflows, `LICENSE`, `README.md`, `.gitignore`, `renovate.json`.
- Runs only on `https://claude.ai/*`; no other permissions (`@grant none`).
- Dependencies: `vite`, `vite-monkey-plugin`, `typescript`, managed by Renovate.
- Out of scope: release workflow, `@updateURL`/`@downloadURL`, non-English UI.
