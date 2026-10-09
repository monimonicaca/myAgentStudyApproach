> 触发条件：交付形态 = **打包**且平台 = macOS 时。

# macOS 打包

## 1. Electron

```bash
# electron-packager（darwin 需在 macOS 上打包）
npx electron-packager . DesktopPet --platform=darwin --arch=arm64 --out=dist --overwrite

# 或 electron-builder 出 dmg/zip
npx electron-builder --mac dmg
```

产物：`DesktopPet.app`（绿色）或 `.dmg`（安装包）。

## 2. 桌宠专属注意

- **隐藏 Dock 图标**（可选）：桌宠常驻、不占 Dock，在 `Info.plist` 加 `LSUIElement: true`。注意会影响窗口聚焦行为，需验证交互。
- **置顶层级**：macOS 置顶受系统限制，无法覆盖"全屏 Space"；`setAlwaysOnTop` 的 level 可选 `floating` / `status` / `pop-up-menu`（Electron）或 Tauri 的对应 level。
- **透明窗口**：Electron 在 macOS 透明需要 WebGL 正常；Tauri 需 `macOSPrivateApi`（有 App Store 上架限制）。
- **打包签名/公证**：非 App Store 分发建议 ad-hoc 签名（`codesign --force --deep -s -`）避免 Gatekeeper 拦截；正式分发走 Developer ID + 公证（notarization）。

## 3. 权限

- 一般无需摄像头/麦克风权限；
- 若做"窗口跟随"，需要辅助功能（Accessibility）权限（`active-win` 类库依赖），需引导用户在系统设置授权。

> AI生成
