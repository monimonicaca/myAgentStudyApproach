> 触发条件：交付形态 = **打包**且平台 = Windows 时。

# Windows 打包

## 1. Electron

### 1.1 手动复制打包（推荐，绕过 rcedit 被杀软拦截）

```powershell
# 1. 复制 Electron 运行时
Copy-Item "node_modules\electron\dist\*" "dist\DesktopPet-win32-x64\" -Recurse -Force
# 2. 复制应用代码到 resources/app
Copy-Item "main.js", "preload.js", "package.json" "dist\DesktopPet-win32-x64\resources\app\"
Copy-Item "src"    "dist\DesktopPet-win32-x64\resources\app\src"    -Recurse -Force
Copy-Item "images" "dist\DesktopPet-win32-x64\resources\app\images" -Recurse -Force
# 3. 重命名
Rename-Item "dist\DesktopPet-win32-x64\electron.exe" "DesktopPet.exe"
```

整个目录复制到任意位置即运行，免安装。**优点**：不触发 rcedit；**缺点**：无自定义图标/安装器。

### 1.2 自定义图标

- 准备 `.ico`（建议 256x256）放 `images/icon.ico`；
- electron-packager 加 `--icon=images/icon.ico`；手动复制法需另行替换 exe 图标资源（Resource Hacker 等，同样可能被杀软拦）。

### 1.3 安装包（可选）

electron-builder NSIS：

```json
"build": {
  "appId": "com.desktop.pet",
  "win": { "target": "nsis", "icon": "images/icon.ico" },
  "nsis": { "oneClick": false, "allowToChangeInstallationDirectory": true }
}
```

```bash
npx electron-builder --win
```

## 2. Tauri

`tauri build` 产出 `src-tauri/target/release/bundle/msi/` 与 `nsis/`（默认）。体积远小于 Electron。

## 3. PyQt

PyInstaller 单文件/目录：

```bash
pyinstaller --onefile --noconsole --add-data "images;images" main.py
```

注意：透明窗口 + `--noconsole` 没问题；`--onefile` 首次启动解压慢。

## 4. 通用检查

- [ ] 绿色版/安装版在**无开发环境**的机器可运行
- [ ] 无黑终端、无黑窗口
- [ ] 杀软不误报（或说明如何加白）

> AI生成
