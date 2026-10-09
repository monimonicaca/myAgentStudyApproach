

## 1. ponytail

### 1.1 安装（OpenCode）

官方 INSTALL.md 的 OpenCode 一节原文：

```bash
opencode plugin add @dietrichgebert/ponytail
```

或者把它加到一个项目的 `opencode.json`：

```json
{ "plugins": ["@dietrichgebert/ponytail"] }
```

或者从仓库 checkout 目录运行（插件复用 `hooks/` 和 `skills/`）：

```json
{ "plugins": ["./.opencode/plugins"] }
```

官方随附说明（原文）：

> Injects the ruleset every turn at the active level; adds the `/ponytail` commands (see [Commands](README.md#commands)). OpenCode also auto-loads this repo's `AGENTS.md`, so the rules hold even without the plugin. The plugin adds the `lite/full/ultra/off` levels.

> The `./` path resolves against your project's `opencode.json`; to share one checkout across projects, point it at the absolute path of the checkout's `.opencode/plugins` directory. A `plugins` entry must name a **directory**, not a file: OpenCode 2 rejects a path to `ponytail.mjs` with `configured plugin path must be a directory`. Opening this repo in OpenCode 2 needs no entry at all: it loads `.opencode/plugins/index.js` on its own.

官方 OpenCode 一节中的其他说明：

- Kilo Code 基于 OpenCode，通过 `plugin` 键运行同一个插件：在 `kilo.jsonc`（或全项目 `~/.config/kilo/kilo.jsonc`）中添加 `{ "plugin": ["@dietrichgebert/ponytail"] }`。
- OpenCode 1 没有 `plugin add`，使用旧的 `plugin` 键：`{ "plugin": ["@dietrichgebert/ponytail"] }`，或从 checkout 使用文件路径：`{ "plugin": ["./.opencode/plugins/ponytail.mjs"] }`。

### 1.2 卸载（官方 Uninstall 表格）

| 宿主 | 命令 |
|---|---|
| OpenCode | `opencode plugin remove @dietrichgebert/ponytail` |

---

## 2. caveman

### 2.1 安装

官方 README 的 Install 部分（一键安装，自动检测机器上所有支持的 agent，对每个执行其原生安装方式，跳过未安装的，可安全重跑）：

**macOS / Linux / WSL / Git Bash**

```bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/v3.2.0/install.sh | bash
```

**Windows（PowerShell 5.1+）**

```powershell
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/v3.2.0/install.ps1 | iex
```

官方 README 的代理方式（big rock）：

```bash
npm install -g @caveman-ai/cli && caveman setup --install
caveman opencode   # 或 codex · gemini · aider · kilo · qwen · opencode · hermes · openclaw · pi
```

官方 README 的纯 skill 方式（small rock）：

```bash
npx skills add JuliusBrussee/caveman -g
```

官方 INSTALL.md 的 per-agent 安装表格（opencode 行）：

| Agent | 安装命令 | 自动激活？ |
|---|---|---|
| **opencode** | `node installer/install.js --only opencode` （或 `npx -y github:JuliusBrussee/caveman -- --only opencode`） | 是（插件 + AGENTS.md） |

官方 INSTALL.md 关于 npm 12 及以上（原文）：

> On npm 12 or newer, add `--allow-git=root` to any bare `npx -y github:...` command below. npm 12 turns off git package fetches by default, so a plain `npx -y github:JuliusBrussee/caveman` stops with `npm error code EALLOWGIT`. The flag opts in just the one package you asked for: `npx --allow-git=root -y github:JuliusBrussee/caveman -- --only <id>`. Check with `npx --version`. `install.sh` and `install.ps1` detect the npm major and add the flag themselves starting with `v3.2.0`，也就是上方一键脚本固定的发布版本，因此它们在 npm 12 上正常工作。固定到 `v3.1.0` 或更早版本的一键脚本在 npm 12 上仍会失败：改用上方命令，或直接用带参数的安装：`npx --allow-git=root -y github:JuliusBrussee/caveman#v3.2.0 -- --only <id>`。

### 2.2 子代理（官方 INSTALL.md 原文）

> **Subagents.** Some agents hand parts of a job to helper agents. Whether the helpers talk caveman depends on the host: **opencode**: subagents get the always-on caveman rules from `AGENTS.md` (checked on opencode 2.0.22). Those rules are fixed text, so "stop caveman" does not switch them off for subagents.

### 2.3 更新（官方 INSTALL.md 表格）

| Agent | 更新命令 |
|---|---|
| **Hooks / opencode / OpenClaw / rule files** | 重跑安装器；它对自己管理的一切内容幂等 |

`caveman` CLI 本体：`npm install -g @caveman-ai/cli@latest`

### 2.4 卸载（官方 INSTALL.md 原文）

```bash
npx -y github:JuliusBrussee/caveman -- --uninstall
```

官方说明：在 `npm uninstall -g @caveman-ai/cli` **之前**运行。它会移除：

- opencode 原生插件（`~/.config/opencode/plugins/caveman/`、`opencode.json` 中的 `plugin` 与 `mcp.caveman-shrink` 条目、caveman 的 skill/agent/command 文件、`AGENTS.md` 中的 caveman 块、opencode flag 文件）
- 通过 `npx skills add` 安装的 skill **不会**被移除——`skills` CLI 负责管理这些，需运行 `npx skills remove caveman`（或使用 IDE 的 skill 管理器）
- 由 `--with-init` 写入的仓库内规则文件（`.cursor/rules/`、`.windsurf/rules/`、`.clinerules/`、`.github/copilot-instructions.md`、`.opencode/AGENTS.md`、`AGENTS.md`）也不会被移除，如需删除请手动处理

> AI生成
