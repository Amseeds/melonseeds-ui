// //scripts/generate-entry.js
// // const fs = require("fs");
// // const path = require("path");
// // const { pascalCase } = require("change-case");
// import fs from "fs";
// import path from "path";
// import { pascalCase } from "change-case";

// const componentsDir = path.join(process.cwd(), "src/components");
// console.log("====", componentsDir, "====");

// const componentsDirs = fs.readdirSync(componentsDir).filter((dir) => {
//   return fs.statSync(path.join(componentsDir, dir)).isDirectory();
// });

// const exportss = componentsDirs.map((dir) => {
//   const componentName = `Me${pascalCase(dir)}`;
//   return `export { default as ${componentName} } from './components/${dir}/${dir}.vue';`;
// });

// try {
//   fs.writeFileSync(
//     path.join(componentsDir, "../index.ts"),
//     exportss.join("\n")
//   );
//   console.log("✅ 写入完成！");
// } catch (err) {
//   console.error("❌ 写入失败:", err);
// }

// scripts/generate-entry.mjs
import fs from "node:fs";
import path from "node:path";
import { pascalCase } from "change-case";
import { fileURLToPath } from "node:url";

/**
 * 生成符合全局引入规范的组件库入口文件
 *
 * 生成内容示例：
 * import MeButton from './components/Button/Button.vue';
 * import MeHeader from './components/Header/Header.vue';
 *
 * const components = { MeButton, MeHeader };
 *
 * const install = (app) => {
 *   Object.entries(components).forEach(([name, component]) => {
 *     app.component(name, component);
 *   });
 * };
 *
 * export default { install, ...components };
 * export { MeButton, MeHeader };
 */

// 获取当前模块路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置参数
const COMPONENTS_DIR = path.resolve(__dirname, "../src/components"); // 组件源目录
const ENTRY_FILE = path.resolve(__dirname, "../src/index.ts"); // 入口文件路径
const PREFIX = "Me"; // 组件名前缀

// 1. 获取所有组件目录（同步方式）
const getComponentDirs = () => {
  return fs.readdirSync(COMPONENTS_DIR).filter((file) => {
    const fullPath = path.join(COMPONENTS_DIR, file);
    return fs.statSync(fullPath).isDirectory();
  });
};

// 2. 生成导入语句和组件映射
const generateImportsAndComponents = (dirs) => {
  return dirs.reduce(
    (acc, dir) => {
      const componentName = `${PREFIX}${pascalCase(dir)}`; // 例如: Button → MeButton
      const importPath = `./components/${dir}/${dir}.vue`; // 例如: Button → ./components/Button/Button.vue

      // 收集导入语句
      acc.imports.push(`import ${componentName} from '${importPath}';`);

      // 收集组件名映射
      acc.components[componentName] = componentName;

      return acc;
    },
    { imports: [], components: {} }
  );
};

// 3. 生成入口文件内容
const generateEntryContent = (imports, components) => {
  const componentNames = Object.keys(components);

  return `
import { App } from 'vue';
${imports.join("\n")}

const components = {
  ${componentNames.join(",\n  ")}
};

const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

export default {
  install,
  ...components
};

export {
  ${componentNames.join(",\n  ")}
};

`;
};

// 主流程
const run = () => {
  try {
    const componentDirs = getComponentDirs();
    const { imports, components } = generateImportsAndComponents(componentDirs);
    const content = generateEntryContent(imports, components);

    fs.writeFileSync(ENTRY_FILE, content);
    console.log("✅ 入口文件生成成功:", ENTRY_FILE);
  } catch (error) {
    console.error("❌ 生成入口文件失败:", error.message);
    process.exit(1);
  }
};

// 执行
run();
