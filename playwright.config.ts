import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  webServer: {
    command: 'pnpm build && pnpm exec wrangler dev --port 4173',
    port: 4173,
  },
  use: {
    baseURL: 'http://127.0.0.1:4173',
  },
})
