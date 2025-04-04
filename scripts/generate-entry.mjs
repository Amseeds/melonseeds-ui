//scripts/generate-entry.js
// const fs = require("fs");
// const path = require("path");
// const { pascalCase } = require("change-case");
import fs from "fs";
import path from "path";
import { pascalCase } from "change-case";

const componentsDir = path.join(process.cwd(), "src/components");
console.log("====", componentsDir, "====");

const componentsDirs = fs.readdirSync(componentsDir).filter((dir) => {
  return fs.statSync(path.join(componentsDir, dir)).isDirectory();
});

const exportss = componentsDirs.map((dir) => {
  const componentName = `Me${pascalCase(dir)}`;
  return `export { default as ${componentName} } from './components/${dir}/${dir}.vue';`;
});

try {
  fs.writeFileSync(
    path.join(componentsDir, "../index.ts"),
    exportss.join("\n")
  );
  console.log("✅ 写入完成！");
} catch (err) {
  console.error("❌ 写入失败:", err);
}
