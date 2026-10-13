# 🙈 claude.ai-dismiss-reauth

A userscript that gets rid of the annoying **"Sign in again to verify your device"** dialog on [claude.ai](https://claude.ai) by clicking **Not now** for you.

## ✨ What it does

- 👀 Watches claude.ai for the re-auth dialog
- 🖱️ Clicks **Not now** automatically
- 🛑 Does nothing else (never touches **Signin**)

## 📦 Install

1. Install a userscript manager, e.g. [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)
2. Build the script (see below)
3. Open `dist/*.user.js` in your browser and confirm the installation

## 🛠️ Development

```sh
git clone https://github.com/gander-labs/claude.ai-dismiss-reauth.git
cd claude.ai-dismiss-reauth
npm install
npm run dev
```

## 🏗️ Build

```sh
npm run build   # -> dist/*.user.js
```

## 📄 License

[MIT](LICENSE) © 2026 Adam Gąsowski
