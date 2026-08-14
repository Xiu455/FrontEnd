// https://vite.dev/config/

import { join } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ROOT = process.cwd();

/** 
 * @type {import('vite').UserConfig} 
 */
// eslint-disable-next-line no-unused-vars
export default defineConfig(async ({ command, mode }) => {
  return{
    base: './',
    plugins: [
      react(),
    ],
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      outDir: join(ROOT, 'dist')
    },
  }
});
