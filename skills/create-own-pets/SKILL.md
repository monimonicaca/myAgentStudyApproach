---
name: desktop-pet
description: 生成通用桌面宠物。支持 Electron/Tauri/PyQt/WebView 等技术栈，Windows/macOS/Linux 平台，Q版/像素/写实/3D 等风格，1/4/8 方向，程序化/帧动画/骨骼/Live2D 动画。默认 Electron + Windows + Q版 + 程序化待机 + 帧动画，其他方案见 references。触发词："做/生成/创建 桌宠/桌面宠物"、"桌宠"、"desktop pet"。
---

# 桌面宠物生成 Skill

> 通用原则：**输入参数化、流程分支化、实现参考化、验收可配置化**。
> 具体项目、具体角色、具体帧序列、具体技术栈都只是"默认示例/参考实现"，一律放 `references/`，不写进主流程当规范。
> 主文件及 references 中的具体数值/帧序列/代码片段，**除非明确标注为规范，否则一律视为示例**，使用前按当前角色、平台、技术栈重新确认，禁止原样照抄；"透明 PNG、无阴影"这类硬性要求属于规范，不属示例。

## 0. 默认与覆盖

默认配置：**Electron + Windows + Q 版 + 程序化待机 + 帧动画交互**。
所有默认项都可以被用户需求覆盖；用户未明确时用默认值，并在交付说明中标注假设。

## 1. 需求收集（必做）

开始产出前先确认以下条目（用 question 工具一次性收集，避免逐项追问）：

- **平台**：Windows / macOS / Linux
- **技术栈**：Electron / Tauri / PyQt / WebView / 其他
- **角色风格**：Q版 / 像素 / 写实 / 3D / 用户自带素材
- **方向数**：1 / 4 / 8 / 自定义
- **动画方式**：程序化 / 帧动画 / 骨骼 / Live2D / Spine
- **交互**（可多选）：拖拽 / 双击 / 右键菜单 / 窗口跟随 / 点击穿透 / 多宠
- **交付形态**：开发运行 / 绿色免安装 / 安装包

> **兜底规则**（防止输入不全/中途变更导致流程卡死）：
> - 某条目用户未回答 → 直接用默认值（见 §0），并在交付说明中列出"采用假设"清单；
> - 用户说"你定/随便" → 不再追问，直接使用默认组合；
> - **中途改需求** → 优先只改 `pet.config.json` 与资产；**若涉及技术栈/平台变更，窗口层与打包层同步重构**；已生成资产按变更重新生成并标注，已交付项保持可回滚；
> - 需求无法满足（如平台不支持透明窗口）→ 先告知影响与替代方案，由用户决定，不擅自降级。

## 2. 技术选型

| 需求 | 推荐 | 参考 |
|---|---|---|
| 快速透明置顶、生态成熟 | Electron | `references/electron.md` |
| 小体积、低内存 | Tauri | `references/tauri.md` |
| Python 生态 | PyQt / PySide | `references/pyqt.md` |
| 纯网页 / 已有 WebView | WebView 包装（推荐直接用 Electron 的 WebView 容器，复用 `references/electron.md`） | 参考 `references/electron.md` |
| **3D 角色** | Electron/Tauri + three.js（透明窗口复用 + 模型渲染） | `references/3d.md` |

> 技术栈只影响**窗口层**与**打包层**；资产规格、动画逻辑、交互逻辑、状态机尽量与技术栈解耦，先抽象再落地。

## 3. 通用架构

任何桌宠 = **透明置顶窗口 + 资产包 + 配置文件 + 状态机 + 交互层 + 渲染层**。

> 下面是**产出项目**的目录结构；`references/` 是本 skill 自带的参考文档目录，**不属于产出项目，不要复制进去**。

```
desktop-pet/
├── pet.config.json   # 唯一事实源：资产映射、方向、动画、交互、窗口
├── images/           # 2D 贴图；3D 项目改为 assets/（模型 glb + 动画 clip）
├── src/              # 渲染/动画逻辑（只读配置，不写死任何方向/帧序列）
├── main/             # 窗口层（按技术栈实现）
└── (打包产物由打包层产出)
```

## 4. 角色资产生产

> **风格分支**：2D 风格（Q版/像素/写实）走本节贴图流程；**3D 风格走 `references/3d.md`**（模型+动画 clip，不做抠图，方向用模型朝向）。

### 4.1 资产规格说明书（先出配置，再产图）

先用 `pet.config.json` 的 `character` 段写清规格，用户确认后再开始生成图片：

```json
{
  "character": {
    "style": "chibi",
    "description": "红色无袖毛衣 + 黑色长直发，细长上挑眼，深棕瞳",
    "directions": ["front", "back", "left", "right"],
    "scaleMap": { "front": 1.0, "sitting": 0.82 },
    "assets": {
      "idle": { "front": "images/front.png" },
      "jump": { "frames": ["images/jump_1.png", "images/jump_2.png"] }
    }
  }
}
```

每张图的统一要求：**透明背景 PNG、无地面阴影、无投影、指定视角、人物占比一致**。
命名规则：`方向/动作.png`，与 `assets` 映射一一对应；斜向方向名用 `front_left` 这类语义名。

> 上述 JSON 与命名都是**示例**：`directions`/`scaleMap` 数值/`assets` 映射均按角色实际替换，**可改可省**（如 1 方向项目可省去 `back/left/right`）。

### 4.2 生成 / 抠图 / 命名

- **生成**：任意图像生成工具均可；以"先精调确认**锚点资产**"为基准，其余方向/姿势基于它生成，保证形象一致（锚点按风格选：Q版=正面图 / 像素=基准 sprite / 3D=基准模型 / Live2D=基准表情）。
- **抠图**：任意抠图工具，**只要求输出透明 PNG**。示例工具与命令见 `references/asset-generation.md`。
- **校验**：边缘干净、无残留背景、底部无残影、人物在画布中占比统一（用 scaleMap 兜底微调）。

### 4.3 方向与动作按需，不固定八方向

- 只做待机 → **1 方向 + 左右翻转**即可；
- 做拖拽方向切换 → **4 或 8 方向**；
- 动作（跳跃/睡觉/眨眼…）按角色需要**按需扩展**，帧序列、姿势数量不写死。

## 5. 实现层

### 5.1 窗口层

透明、无边框、置顶、隐藏任务栏。具体参数与代码按技术栈查：
`references/electron.md` / `references/tauri.md` / `references/pyqt.md`。

> 需要一份**完整可运行**的参考实现（含主/渲染进程全部关键代码）时，直接看 `references/example-electron.md`。

### 5.2 渲染层（配置驱动）

渲染逻辑**只读 pet.config.json**，自动推导，不手写死表：

- 方向列表 = 配置的 `directions`；
- **降级链自动推导（默认规则）**：缺 `left` → 用 `right` 水平镜像；缺斜向 → 回退到最近的轴向（`front_left` → `left` 或 `front`）；缺 `back` → `front`；最终兜底 `front`。以上可在 `pet.config.json` 的 `fallback` 段显式覆盖；**非对称角色（单边疤痕/发型/眼罩）必须显式指定降级**，不能依赖镜像；
- 缩放表 = 配置的 `scaleMap`（保证不同姿势人物视觉大小一致）。

### 5.3 交互层

按启用的能力挂接，不默认全开：

- **拖拽**：用"鼠标位移增量"移动窗口（比系统拖拽区更流畅，可同时切贴图），技术栈相关实现见 references；
- **双击 / 右键 / 点击特效 / 窗口跟随**：可选能力，按需求启用；
- **窗口跟随**：平台相关，见 `references/follow-window-pitfalls.md`（核心是"只跟随新窗口 + 冷却 + 防抖"）。

### 5.4 状态机与动画

- 用互斥状态位（命名按启用能力自定，如 `isDragging / isJumping / isSitting ...`）+ 定时器管理，避免并发冲突；
- 动画可混合：程序化（呼吸/浮动/跳跃抛物线）与帧动画（关键帧序列）可同用；
- 动画方式选型参考 `references/animation.md`；**3D 动画（骨骼 clip/模型朝向）见 `references/3d.md`**。

## 6. 打包发布

按平台分支，见：

| 平台 | 参考 |
|---|---|
| Windows | `references/packaging-windows.md` |
| macOS | `references/packaging-macos.md` |
| Linux | `references/packaging-linux.md` |

用户只要"能跑起来"→ 跳过打包。

## 7. 验收清单（必做 / 按需）

> **未启用能力不产代码**：下列「按需」项在 §1 需求收集未启用时，一律不实现、不参与验收；验收只覆盖实际启用的能力。

### 必做（所有桌宠）

- [ ] 窗口：透明、无边框、置顶、不进任务栏（按平台能力）
- [ ] 贴图：透明 PNG、无阴影、人物大小统一（3D 项目改为：模型可加载、动画循环、透明渲染，见 `references/3d.md`）
- [ ] 配置驱动：方向列表/降级链/缩放表来自 `pet.config.json`，代码无硬编码
- [ ] 基础运行：启动不报错、无未捕获异常、日志可排查

### 按需启用（仅在需求收集启用时验收）

- [ ] 拖拽：顺滑、方向切换正确、松手恢复
- [ ] 双击 / 右键：动作正确、开关生效
- [ ] 窗口跟随：只对新窗口移动、不追鼠标
- [ ] 单实例：重复启动聚焦已有
- [ ] 动画：帧数流畅、无闪烁、状态互斥无冲突
- [ ] 打包产物：对应平台可运行

## 8. 问题排查（按症状查）

遇到问题先看**症状**对应哪个文件，不确定时按顺序从上往下试：

| 症状 | 查 |
|---|---|
| 多脚/多腿/多指、假背面、侧面图案消失、底部灰影、角色不一致、边缘不净 | `asset-pitfalls.md` |
| 人物大小跳变、卡帧、动画抖动、状态冲突、松手变化突兀 | `animation-pitfalls.md` |
| 黑窗口、拖拽卡顿、多实例、日志乱码、打包失败、置顶失效 | `electron-pitfalls.md` |
| 窗口跟随像追鼠标、来回切换时乱动 | `follow-window-pitfalls.md` |
| Windows 适配（VBS、开机自启、%APPDATA%、透明窗口） | `platform-windows.md` |
| 不确定该查哪个 | 从上往下逐个排除，或按技术栈查 `references/electron.md` / `tauri.md` / `pyqt.md` |

## references 索引

每个文件正文开头都有**触发条件**：满足时优先查阅，不满足跳过。

| 文件 | 内容 | 触发条件 |
|---|---|---|
| `3d.md` | 3D 桌宠实现（模型+动画+渲染） | 风格=3D 时（覆盖 §4 / §5.4） |
| `example-electron.md` | 完整 Electron 桌宠实现（参考规范） | 需要一份完整可运行的参考实现时 |
| `electron.md` | Electron 实现要点 | 技术栈=Electron（默认） |
| `tauri.md` | Tauri 实现要点 | 技术栈=Tauri |
| `pyqt.md` | PyQt/PySide 实现要点 | 技术栈=PyQt/PySide |
| `asset-generation.md` | 资产规格 + 生成/抠图 | 需要生产角色贴图时（任意栈） |
| `asset-pitfalls.md` | 贴图生成常见问题 | 出现多脚/假背面/灰影/角色不一致时 |
| `animation.md` | 动画方式选型与实现 | 确定/实现动画方式时 |
| `animation-pitfalls.md` | 动画常见问题 | 动画卡顿/抖动/状态冲突时 |
| `electron-pitfalls.md` | Electron 常见问题 | 黑窗口/卡顿/乱码/打包失败时 |
| `follow-window-pitfalls.md` | 窗口跟随防"追鼠标" | 启用窗口跟随时 |
| `platform-windows.md` | Windows 平台适配 | 平台=Windows 时 |
| `packaging-windows.md` | Windows 打包 | 打包且平台=Windows 时 |
| `packaging-macos.md` | macOS 打包 | 打包且平台=macOS 时 |
| `packaging-linux.md` | Linux 打包 | 打包且平台=Linux 时 |

