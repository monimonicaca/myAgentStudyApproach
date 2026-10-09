> 触发条件：需要一份**完整可运行的 Electron 桌宠参考实现**时查阅。
> 使用声明：本文所有数值（窗口尺寸、scaleMap、帧序列、交互项）都是**该角色的设计，可改可省，禁止照抄**——换角色/换栈时按新需求重设：窗口尺寸按正面比例、scaleMap 按贴图占比、帧序列按动作设计、交互项按需求整合。

# 参考实现：Electron 桌宠（完整示例）

> 本文是**一个真实跑通的 Electron 桌宠项目**的完整提炼，用作参考规范（"照着这个能复制"），**不是通用规范**。
> 特性：透明置顶窗口、8 方向 + 关键帧姿势贴图、拖拽移动、起床/打坐动画、双击跳跃、右键菜单、窗口跟随、单实例锁、日志。

## 1. 文件结构

```
desktop-pet/
├── package.json          # electron + active-win(可选)
├── main.js               # 主进程
├── preload.js            # contextBridge IPC 桥接
├── src/index.html        # 一个容器 + <img>
├── src/style.css         # html/body 完全透明
├── src/renderer.js       # 贴图管理/拖拽/动画/状态机
├── images/               # 透明 PNG（front/back/left/right/front_left/.../sitting/stretch...）
└── 启动宠物.vbs          # 开发模式无终端启动（Windows）
```

## 2. 主进程要点（main.js）

**窗口参数**（透明置顶的关键组合）：

```js
new BrowserWindow({
  width: 240, height: 380,       // 按正面图比例（Q 版 2:3）+ 动画留白
  frame: false, transparent: true, // 无边框 + 背景透明
  alwaysOnTop: true, skipTaskbar: true,
  resizable: false, hasShadow: false,
  webPreferences: {
    preload, contextIsolation: true, nodeIntegration: false,
    backgroundThrottling: false    // 后台不节流，动画流畅
  }
});
win.setAlwaysOnTop(true, 'screen-saver'); // Windows 最高置顶级别
```

**拖拽 = IPC 位移增量**（比 `-webkit-app-region: drag` 流畅，可同时切贴图）：

```js
ipcMain.on('window-move', (e, dx, dy) => {
  const [x, y] = mainWindow.getPosition();
  mainWindow.setPosition(x + Math.round(dx), y + Math.round(dy));
});
```

**单实例锁**：

```js
if (!app.requestSingleInstanceLock()) app.exit(0);
else app.on('second-instance', () => mainWindow.focus());
```

**日志**：`%APPDATA%/<app>/logs/YYYY-MM-DD.log`，创建时先写 `\uFEFF`（BOM），否则记事本中文乱码；记录启动/退出/位置/拖拽/错误。

**右键菜单**：渲染进程 `contextmenu` 发 IPC → 主进程 `Menu.buildFromTemplate` 弹出 → `event.sender.send()` 回传开关状态。

**可选窗口跟随**（active-win）：每 3s 检测前台窗口，仅对**从未见过的新窗口**移动，12s 冷却 + 40px 防抖 + 拖拽时暂停。详见 `follow-window-pitfalls.md`。

## 3. 渲染进程要点（renderer.js）

**贴图管理与缺失降级**：列出 `DIRECTIONS`，每张 `new Image()` 加载，`onerror` 走降级链（左缺→右翻转、斜向缺→最近轴向、最终 `front`）。

**scaleMap 统一人物大小**：不同姿势在画布占比不同，`transform: scale(flipX*scale, scale)` 逐一微调（如蹲 0.85、打坐 0.82）。

**拖拽方向判断**：左右→left/right；斜向→front_left/front_right（不用背面）；向下→front；向上→保持当前。

**待机动画**（requestAnimationFrame 组合 transform）：

```js
const floatOffset  = Math.sin(t * 2.5) * 6;                    // 上下浮动
const breathScale  = 1 + Math.sin(t * speed) * amount;         // 呼吸缩放
// 跳跃：heightCurve = 4*p*(1-p)，落地挤压 scale
// 数值 toFixed(4) 防亚像素抖动；transform-origin: center bottom 脚底对齐
```

**关键帧动画**（起床序列示例，帧序列按角色单独设计）：

```js
const frames = [
  { dir: 'front',         duration: 250 },
  { dir: 'stretch_start', duration: 300 },
  { dir: 'stretch_mid',   duration: 350 },
  { dir: 'stretch',       duration: 800 },  // 顶点
  // ...每帧 setDirection(dir) + setTimeout(playNextFrame, duration)
];
```

**状态机互斥**：`isDragging/isJumping/isStretching/isSitting/isLooking/isPeeking` + 定时器；起身/拖拽/跳跃时取消待机定时器，松手后延迟回待机。

## 4. 打包（Windows）

`electron-packager` 常因 rcedit 改 exe 元数据被杀软拦截 → **手动复制 Electron 运行时**：

```powershell
Copy-Item "node_modules\electron\dist\*" "dist\DesktopPet-win32-x64\" -Recurse -Force
Copy-Item "main.js","preload.js","package.json" "dist\DesktopPet-win32-x64\resources\app\"
Copy-Item "src"  "dist\DesktopPet-win32-x64\resources\app\src"  -Recurse -Force
Copy-Item "images" "dist\DesktopPet-win32-x64\resources\app\images" -Recurse -Force
Rename-Item "dist\DesktopPet-win32-x64\electron.exe" "DesktopPet.exe"
```

## 5. 无终端启动（开发模式，可选）

```vbscript
Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
WshShell.Run "node_modules\electron\dist\electron.exe .", 0, False
```

## 6. 注意

- 该示例的所有**帧序列、姿势名、交互项**都是这个角色的设计，复制时按新角色重设计；
- 更完整的分支流程见 `SKILL.md` 主文件。

> AI生成
