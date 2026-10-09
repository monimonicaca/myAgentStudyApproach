# Linux 打包

## 1. 产物

| 工具 | 命令 | 产物 |
|---|---|---|
| Electron | `npx electron-builder --linux` | AppImage / deb / rpm（默认 AppImage） |
| Tauri | `npm run tauri build` | deb / rpm / AppImage（配置决定） |
| PyQt | PyInstaller | 单目录 + 自备 .desktop |

AppImage 免安装最省事；deb/rpm 走发行版管理。

## 2. 透明置顶的坑（重点）

- **透明窗口依赖合成器（compositor）**：无合成器的轻量 WM（如部分 i3/twm 配置）下透明窗口会黑底或失效。
- **Wayland**：`always-on-top` 支持不稳定，多数发行版需 xdg 协议或仅全局置顶有限支持；X11 下较稳。
- **置顶层级**：X11 用 `_NET_WM_STATE_ABOVE`（多数 GUI 框架默认支持）；Electron 的 `screen-saver` level 在 Linux 上不等价于 Windows。

## 3. 高分屏 / 多屏

- 检查 `devicePixelRatio`，避免贴图模糊；
- Wayland 多屏缩放差异大，动画用 CSS/框架层 transform 不受影响。

## 4. 验证清单

- [ ] 无合成器环境不黑底（或降级为不透明模式）
- [ ] 置顶行为符合预期
- [ ] 分发格式可运行（AppImage 加执行权限）

> AI生成
