const path = require("path");
import glob from "glob";

export default {
  root: path.join(__dirname, "src"),
  build: {
    emptyOutDir: true,
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "*.html")),
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
    }
  
    },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),

      server: {
        port: 8080,
        hot: true,
      },
    },
  },
},
};
