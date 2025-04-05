import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path, { resolve } from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(),
  dts({
    logLevel: 'info',
    include: ['src/**/*.ts', 'src/**/*.vue'],//生成类型声明文件
    rollupTypes: true,//合并类型声明到单个文件
    insertTypesEntry: true,//生成类型入口声明
    copyDtsFiles: true,//若存在嵌套目录结构,启用 copyDtsFiles 确保类型文件完整
    outDir: 'dist/types',//指定输出目录，避免与源码混淆
  })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 将 @ 映射到 src 目录
    },
    extensions: [".js", ".ts", ".vue"], // 允许省略后缀
  },
  build: {
    lib: {
      entry: {
        melonseedsUI: "src/index.ts",
        resolver: 'src/resolver.ts',
      },
      name: "MelonseedsComponentLib",
      formats: ["es", "cjs"],
      // fileName: (format: any) => `melonseedsUI.${format}.js`,
      // 动态生成文件名：格式为 [入口名称].[格式].js
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],//外部依赖
      output: {
        globals: {
          vue: "Vue",// UMD 全局变量名映射
        },
        // 确保 CSS 文件名和路径与声明一致
        assetFileNames: '[name].[ext]'
      },
    },
    outDir: "dist", // 输出目录
    sourcemap: true, // 如果需要调试，生成 sourcemap
  },
});
