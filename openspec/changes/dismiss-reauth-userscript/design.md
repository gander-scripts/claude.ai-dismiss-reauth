## Context

See proposal.md - Why. claude.ai is a React SPA; the dialog is rendered into `#portal-root` as `[role="alertdialog"]` with a `Not now` and a `Signin` button. Repo is empty (no commits on `main`).

## Goals / Non-Goals

**Goals:**
- Tiny, dependency-free runtime script; one build output `dist/*.user.js`.

**Non-Goals:**
- Localisation (English UI only), release automation, update URLs, tests against live claude.ai.

## Decisions

- **Detection via MutationObserver on `document.body`** over polling: reacts immediately and costs nothing while idle. Alternative `setInterval` is simpler but wakes up needlessly.
- **Match by dialog text + button text**: find `[role="alertdialog"]` containing "Sign in again", then the button whose text is `Not now`. Avoids clicking unrelated dialogs. Fragile to copy changes; accepted, EN only.
- **Throttle** (about 1 s) between clicks to avoid loops if the dialog returns instantly.
- **Tooling**: `npm create monkey` with `template-empty-ts` (Vite + `vite-monkey-plugin`); header `@match https://claude.ai/*`, `@grant none`, version from `package.json`.
- **Delivery**: scaffolding files committed to `main` first, then branch + PR with template, script and workflows (`ci.yml`, `auto-assign.yml` adapted from `monkey-redmine-time-widget`).

## Risks / Trade-offs

- [claude.ai changes dialog copy or markup] -> script silently stops working; fix the selector/text.
- ["Not now" only hides the dialog, session may still be invalid] -> verify manually on a live session.
- [Copied workflows reference other scripts] -> read and adapt before committing.
