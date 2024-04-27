import { resolve } from 'path'

import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

const root = resolve(__dirname)

export default defineConfig({
  plugins: [
    swc.vite({
      module: { type: 'es6' }
    })
  ],
  test: {
    root: '.',
    globals: true,
    include: ['test/**/*.{integration,unit}-test.ts'],
    exclude: ['test/**/_doubles/**'],
    pool: 'vmThreads',
    watch: false,
    silent: true,
    logHeapUsage: false,
    passWithNoTests: true,
    coverage: {
      all: true,
      include: ['src/**/*.ts'],
      exclude: ['src/main.ts'],
      provider: 'istanbul',
      reporter: [
        'html',
        'lcov',
        'text-summary'
      ],
      thresholds: {
        statements: 100
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '~': resolve(root, 'test')
    }
  }
})
