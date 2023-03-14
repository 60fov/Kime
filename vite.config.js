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
      entry: resolve(__dirname, 'src/kime.ts'),
      name: 'Kime',
      fileName: 'kime',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
      sourcemap: true,
      // Reduce bloat from legacy polyfills.
      target: 'esnext',
      // Leave minification up to applications.
      // minify: false,
    },
    plugins: [
      dts()
    ],
  },
})