import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'claude.ai dismiss re-auth',
        description: 'Clicks "Not now" on the "Sign in again to verify your device" dialog',
        author: 'Adam Gąsowski',
        namespace: 'https://github.com/gander-labs/claude.ai-dismiss-reauth',
        match: ['https://claude.ai/*'],
        grant: 'none',
      },
      build: {
        fileName: 'claude.ai-dismiss-reauth.user.js',
      },
    }),
  ],
});
