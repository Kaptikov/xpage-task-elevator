import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/xpage-task-elevator/',
  build: {
    modulePreload: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'styles/[name].css'
          }
          return 'assets/[name].[extname]'
        },
      },
    },
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/base/variables.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(process.cwd(), './src'),
        },
      ],
    }),
  ],
})
