
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const config_name = "config.json"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const getDefaultConfig = function () {
  // 从当前脚本所在目录定位配置文件，避免依赖运行时的工作目录。
  const configPath = path.resolve(__dirname, "..", config_name)
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"))

  return new Map(Object.entries(config))
}


