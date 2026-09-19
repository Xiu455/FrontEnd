// https://vite.dev/config/


// eslint-disable-next-line no-unused-vars
import { join, resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const ROOT = process.cwd();

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
      outDir: resolve('../build'),
      cssCodeSplit: false,
      emptyOutDir: true,  // 建置前清空輸出目錄
    },
  }
});
