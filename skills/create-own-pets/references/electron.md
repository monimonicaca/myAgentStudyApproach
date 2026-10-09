# Electron 技术栈：透明置顶桌宠实现要点

> 适用：用户选 Electron（或未指定时默认）。完整可复制示例见 `example-electron.md`；坑见 `electron-pitfalls.md`。

## 1. 依赖与脚本

```bash
npm install --save-dev electron@28 electron-packager
npm install active-win        # 可选：窗口跟随
```

```json
{ "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-packager . DesktopPet --platform=win32 --arch=x64 --out=dist --overwrite"
  } }
```

## 2. 窗口配置（透明置顶核心）

```js
new BrowserWindow({
  frame: false, transparent: true,       // 无边框 + 透明（不要设置 backgroundColor）
  alwaysOnTop: true, skipTaskbar: true,  // 置顶 + 不进任务栏
  resizable: false, hasShadow: false,
  movable: true, focusable: true,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true, nodeIntegration: false, // 安全
    backgroundThrottling: false                     // 动画流畅
  }
});
win.setAlwaysOnTop(true, 'screen-saver'); // 最高置顶（覆盖屏保/全屏/任务管理器）
```

## 3. 窗口移动（IPC 位移增量）

渲染进程监听 mousedown/mousemove 算 `(dx, dy)` → preload 暴露 `moveWindow(dx,dy)` → 主进程 `win.setPosition(x+dx, y+dy)`。
优势：流畅、可同时切贴图、不受 app-region bug 影响。

preload 示例：

```js
contextBridge.exposeInMainWorld('electronAPI', {
  moveWindow: (dx, dy) => ipcRenderer.send('window-move', dx, dy),
  setDragState: (d) => ipcRenderer.send('drag-state', d),
  showContextMenu: (flags) => ipcRenderer.send('show-context-menu', flags),
  onToggleIdle: (cb) => ipcRenderer.on('toggle-idle', (e, v) => cb(v))
});
```

## 4. 可选模块

- **单实例锁**：`app.requestSingleInstanceLock()`。
- **日志**：`%APPDATA%/<app>/logs/`，先写 BOM 防乱码（Windows）。
- **右键菜单**：`Menu.buildFromTemplate` + `menu.popup({ window })`。
- **窗口跟随**：`active-win` 检测前台窗口（只对新窗口、冷却防抖，见 `follow-window-pitfalls.md`）。

## 5. 相关

- 坑与排查：`references/electron-pitfalls.md`
- 打包：`references/packaging-windows.md` / `packaging-macos.md` / `packaging-linux.md`
- 完整示例：`references/example-electron.md`

> AI生成
