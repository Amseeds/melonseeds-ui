import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(),
  dts({
    logLevel: 'info',
    include: ['src/**/*'],//生成类型声明文件
    rollupTypes: true,//合并类型声明到单个文件
    // insertTypesEntry: true,//生成类型入口声明
    // copyDtsFiles: true,//若存在嵌套目录结构,启用 copyDtsFiles 确保类型文件完整
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
      entry: "src/index.ts",
      name: "MelonseedsComponentLib",
      formats: ["es", "cjs"],
      fileName: (format: any) => `melonseedsUI.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],//外部依赖
      output: {
        globals: {
          vue: "Vue",// UMD 全局变量名映射
        },
      },
    },
    outDir: "dist", // 输出目录
    sourcemap: true, // 如果需要调试，生成 sourcemap
  },
});
