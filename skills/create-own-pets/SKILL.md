---
name: desktop-pet
description: 生成通用桌面宠物。支持 Electron/Tauri/PyQt/WebView 等技术栈，Windows/macOS/Linux 平台，Q版/像素/写实/3D 等风格，1/4/8 方向，程序化/帧动画/骨骼/Live2D 动画。默认 Electron + Windows + Q版 + 程序化待机 + 帧动画，其他方案见 references。触发词："做/生成/创建 桌宠/桌面宠物"、"桌宠"、"desktop pet"。
---

# 桌面宠物生成 Skill

> 通用原则：**输入参数化、流程分支化、实现参考化、验收可配置化**。
> 具体项目、具体角色、具体帧序列、具体技术栈都只是"默认示例/参考实现"，一律放 `references/`，不写进主流程当规范。

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

## 2. 技术选型

| 需求 | 推荐 | 参考 |
|---|---|---|
| 快速透明置顶、生态成熟 | Electron | `references/electron.md` |
| 小体积、低内存 | Tauri | `references/tauri.md` |
| Python 生态 | PyQt / PySide | `references/pyqt.md` |
| 纯网页 / 已有 WebView | WebView 包装 | 参考 `references/electron.md` 同构部分 |

> 技术栈只影响**窗口层**与**打包层**；资产规格、动画逻辑、交互逻辑、状态机尽量与技术栈解耦，先抽象再落地。

## 3. 通用架构

任何桌宠 = **透明置顶窗口 + 资产包 + 配置文件 + 状态机 + 交互层 + 渲染层**。

```
desktop-pet/
├── pet.config.json   # 唯一事实源：资产映射、方向、动画、交互、窗口
├── images/           # 透明 PNG 贴图
├── src/              # 渲染/动画逻辑（只读配置，不写死任何方向/帧序列）
├── main/             # 窗口层（按技术栈实现）
└── (打包产物由打包层产出)
```

## 4. 角色资产生产

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

### 4.2 生成 / 抠图 / 命名

- **生成**：任意图像生成工具均可；以"先精调确认正面图"为锚点，其余方向/姿势基于它生成，保证形象一致。
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

### 5.2 渲染层（配置驱动）

渲染逻辑**只读 pet.config.json**，自动推导，不手写死表：

- 方向列表 = 配置的 `directions`；
- **降级链自动推导**：缺 `left` → 用 `right` 水平镜像；缺斜向 → 回退到最近的轴向（`front_left` → `left` 或 `front`）；缺 `back` → `front`；最终兜底 `front`；
- 缩放表 = 配置的 `scaleMap`（保证不同姿势人物视觉大小一致）。

### 5.3 交互层

按启用的能力挂接，不默认全开：

- **拖拽**：用"鼠标位移增量"移动窗口（比系统拖拽区更流畅，可同时切贴图），技术栈相关实现见 references；
- **双击 / 右键 / 点击特效 / 窗口跟随**：可选能力，按需求启用；
- **窗口跟随**：平台相关，见 `references/follow-window-pitfalls.md`（核心是"只跟随新窗口 + 冷却 + 防抖"）。

### 5.4 状态机与动画

- 用互斥状态（`isDragging / isJumping / isSitting / isStretching ...`）+ 定时器管理，避免并发冲突；
- 动画可混合：程序化（呼吸/浮动/跳跃抛物线）与帧动画（关键帧序列）可同用；
- 动画方式选型参考 `references/animation.md`。

## 6. 打包发布

按平台分支，见：

| 平台 | 参考 |
|---|---|
| Windows | `references/packaging-windows.md` |
| macOS | `references/packaging-macos.md` |
| Linux | `references/packaging-linux.md` |

用户只要"能跑起来"→ 跳过打包。

## 7. 验收清单（按启用能力勾选，不固定）

- [ ] 窗口：透明、无边框、置顶、不进任务栏
- [ ] 贴图：全部透明 PNG、无阴影、人物大小统一
- [ ] 拖拽（如启用）：顺滑、方向切换正确、松手恢复
- [ ] 双击 / 右键（如启用）：动作正常、可开关
- [ ] 窗口跟随（如启用）：只对新窗口、不追鼠标
- [ ] 单实例（如启用）：重复启动聚焦已有
- [ ] 动画：帧数流畅、无闪烁、状态互斥无冲突
- [ ] 打包产物（如打包）：对应平台可运行
- [ ] 无未捕获异常、日志正常

## 8. 问题排查

按领域查对应 references（主文件不再堆具体坑）：

- 资产：`asset-generation.md` / `asset-pitfalls.md`
- 动画：`animation-pitfalls.md`
- 窗口跟随：`follow-window-pitfalls.md`
- 技术栈：`electron-pitfalls.md`（另见各栈文档）
- 平台：`platform-windows.md`

## references 索引

| 文件 | 内容 |
|---|---|
| `example-electron.md` | 完整可参考的 Electron 桌宠实现（提炼自真实项目，仅作参考规范） |
| `electron.md` / `tauri.md` / `pyqt.md` | 各技术栈实现要点 |
| `asset-generation.md` | 资产规格模板 + 生成/抠图流程 |
| `asset-pitfalls.md` | 贴图生成常见问题（多脚/假背面/灰影…） |
| `animation.md` | 动画方式选型与实现模式 |
| `animation-pitfalls.md` | 动画常见问题（大小跳变/卡帧/状态冲突…） |
| `electron-pitfalls.md` | Electron 常见问题（黑背景/卡顿/乱码…） |
| `follow-window-pitfalls.md` | 窗口跟随"追鼠标"的解法 |
| `platform-windows.md` | Windows 平台适配（VBS/%APPDATA%/开机自启…） |
| `packaging-windows.md` / `packaging-macos.md` / `packaging-linux.md` | 各平台打包 |