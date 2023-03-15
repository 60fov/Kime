import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__dirname, "src")
      }
    ]
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/kime.ts'), resolve(__dirname, 'src/hooks/useKime.ts')],
      name: 'Kime',
      fileName: 'kime',
    },
    sourcemap: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'React',
        },
      },
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      outputDir: 'dist',
    })
  ],
})