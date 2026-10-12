import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// 当前脚本所在包的根目录，供后续默认路径使用。
const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// 复制插件目录到 OpenCode 的配置目录，确保插件可被应用读取。
export function installPlugins({
  // 插件源目录，默认使用当前包内的 plugins 文件夹。
  sourceDirectory = path.join(packageRoot, "plugins"),
  // 目标配置目录，优先读取 OPENCODE_CONFIG_DIR，否则回退到 XDG / ~/.config/opencode。
  configDirectory = process.env.OPENCODE_CONFIG_DIR || path.join(
    process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config"),
    "opencode",
  ),
} = {}) {
  // 校验源目录是否存在并且是目录，否则抛出明确错误。
  if (!fs.existsSync(sourceDirectory) || !fs.statSync(sourceDirectory).isDirectory()) {
    throw new Error(`Plugin source directory does not exist: ${sourceDirectory}`);
  }

  // 最终插件目录位于配置目录下的 plugins 子目录。
  const targetDirectory = path.join(configDirectory, "plugins");
  // 确保配置目录存在，再执行复制。
  fs.mkdirSync(configDirectory, { recursive: true });
  fs.cpSync(sourceDirectory, targetDirectory, { recursive: true, force: true });
  console.log(`Copied OpenCode plugins to ${targetDirectory}.`);
  return targetDirectory;
}

// 当脚本被直接执行时，自动安装默认插件。
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  installPlugins();
}