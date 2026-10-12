import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export function installPlugins({
  sourceDirectory = path.join(packageRoot, "plugins"),
  configDirectory = process.env.OPENCODE_CONFIG_DIR || path.join(
    process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config"),
    "opencode",
  ),
} = {}) {
  if (!fs.existsSync(sourceDirectory) || !fs.statSync(sourceDirectory).isDirectory()) {
    throw new Error(`Plugin source directory does not exist: ${sourceDirectory}`);
  }

  const targetDirectory = path.join(configDirectory, "plugins");
  fs.mkdirSync(configDirectory, { recursive: true });
  fs.cpSync(sourceDirectory, targetDirectory, { recursive: true, force: true });
  console.log(`Copied OpenCode plugins to ${targetDirectory}.`);
  return targetDirectory;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  installPlugins();
}