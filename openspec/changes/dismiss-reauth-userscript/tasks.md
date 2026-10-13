## 1. Repo bootstrap on main

- [x] 1.1 Add `LICENSE` (MIT, "Copyright (c) 2026 Adam Gąsowski") and verify the file header and year are correct
- [x] 1.2 Add `.gitignore` (including `.idea`, `node_modules`, `dist`) and verify `git status` ignores them
- [x] 1.3 Add `renovate.json` with the two `gander-settings/renovate` presets and verify it is valid JSON
- [x] 1.4 Add short English `README.md` with emoji (what it does, install, `git clone` + dev, build, license) and verify it matches the real npm script names after 2.1
- [x] 1.5 Commit these files to `main` via `gh:commit` and verify `git log` shows the initial commit

## 2. Userscript on a feature branch

- [x] 2.1 Create a work branch with `gh:branch`, scaffold with `npm create monkey` (`template-empty-ts`) and verify `npm install && npm run build` succeeds
- [x] 2.2 Set header (`@match https://claude.ai/*`, `@grant none`, name, author, version from `package.json`) and verify it appears in `dist/*.user.js`
- [x] 2.3 Implement MutationObserver that clicks `Not now` in the "Sign in again" alertdialog with ~1 s throttle, and verify against the spec scenarios (manually or on a mock DOM)
- [ ] 2.4 Verify `npm run build` outputs a single `.user.js` and it installs in a userscript manager

## 3. CI and PR

- [x] 3.1 Add `ci.yml` and `auto-assign.yml` from `monkey-redmine-time-widget`, adapt to this project's scripts, and verify YAML is valid and referenced scripts exist
- [ ] 3.2 Open a pull request with `gh:pr` and verify CI passes
