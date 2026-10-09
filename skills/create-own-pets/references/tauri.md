> 触发条件：技术选型 = **Tauri**（小体积/低内存诉求）时。
> 示例配置（窗口尺寸、Rust 命令）为示例，可按实际调整。

# Tauri 技术栈：透明置顶桌宠实现要点

> 适用：用户选 Tauri（小体积、低内存）。Tauri 2.x + 前端（HTML/CSS/JS 或任意框架）。

## 1. 透明置顶窗口

`src-tauri/tauri.conf.json`：

```json
{
  "app": { "windows": [{
    "title": "desktop-pet",
    "width": 240, "height": 380,
    "transparent": true,        // 透明
    "decorations": false,       // 无边框
    "alwaysOnTop": true,        // 置顶
    "skipTaskbar": true,        // 不进任务栏
    "resizable": false,
    "shadow": false
  }] }
}
```

> 提示：
> - **Windows**：透明窗口可用；`decorations: false` 即可。
> - **macOS**：透明需要额外配置（`macOSPrivateApi` 相关），且置顶层级用 `set_always_on_top` 的 level 参数。
> - **Linux**：透明窗口依赖合成器（compositor），Wayland 下 always-on-top 支持不稳定（见 `packaging-linux.md`）。

## 2. 窗口移动（拖拽）

前端监听 mousedown/mousemove 算位移增量，通过 `invoke` 调 Rust 侧命令移动窗口：

```rust
// src-tauri/src/lib.rs
use tauri::Manager;

#[tauri::command]
fn move_window(app: tauri::AppHandle, dx: i32, dy: i32) {
    if let Some(win) = app.get_webview_window("main") {
        let pos = win.outer_position().unwrap_or_default();
        let _ = win.set_position(tauri::PhysicalPosition::new(pos.x + dx, pos.y + dy));
    }
}
```

前端：`mousedown` 记录起点 → `mousemove` 里 `invoke('move_window', { dx, dy })` → `mouseup` 结束。

> 轻量替代：仅需整窗拖拽时可用 `data-tauri-drag-region`，但无法在拖拽中切贴图。

## 3. 其他要点

- **单实例**：Tauri 2 插件 `tauri-plugin-single-instance`。
- **右键菜单**：前端自绘菜单，或 Tauri 托盘/菜单 API。
- **动画**：纯前端 `requestAnimationFrame` + `transform`（同 Electron 渲染层逻辑，见 `animation.md`），不涉及 Rust。

## 4. 相关

- 打包：`packaging-windows.md` / `packaging-macos.md` / `packaging-linux.md`
- 资产/动画通用流程：`SKILL.md` 第 4、5 节

> AI生成
