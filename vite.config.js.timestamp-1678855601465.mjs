// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///Users/jds/projects/kota/src/lib/kime/node_modules/.pnpm/vite@4.1.4/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/jds/projects/kota/src/lib/kime/node_modules/.pnpm/vite-plugin-dts@2.1.0_vite@4.1.4/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/jds/projects/kota/src/lib/kime";
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      {
        find: "~",
        replacement: resolve(__vite_injected_original_dirname, "src")
      }
    ]
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/kime.ts"),
      name: "Kime",
      fileName: "kime"
    },
    sourcemap: true
  },
  plugins: [
    dts({
      outputDir: "/dist/"
      // aliasesExclude: [/^~/],
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamRzL3Byb2plY3RzL2tvdGEvc3JjL2xpYi9raW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamRzL3Byb2plY3RzL2tvdGEvc3JjL2xpYi9raW1lL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qZHMvcHJvamVjdHMva290YS9zcmMvbGliL2tpbWUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiBcIn5cIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2tpbWUudHMnKSxcbiAgICAgIG5hbWU6ICdLaW1lJyxcbiAgICAgIGZpbGVOYW1lOiAna2ltZScsXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgb3V0cHV0RGlyOiAnL2Rpc3QvJyxcbiAgICAgIC8vIGFsaWFzZXNFeGNsdWRlOiBbL15+L10sXG4gICAgfSlcbiAgXSxcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLGVBQWU7QUFDelQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3ZDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQTtBQUFBLElBRWIsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
