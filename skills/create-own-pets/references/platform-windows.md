> 触发条件：目标平台 = **Windows** 时（无终端启动/日志目录/开机自启/透明窗口注意）。

# Windows 平台适配（platform-windows）

> 桌宠在 Windows 上的特有做法。适用于 Electron/Tauri/PyQt 各栈的通用部分。

## 1. 无终端启动（开发模式）

`npm start` 会带黑终端。VBS 隐藏：

```vbscript
Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
WshShell.Run "node_modules\electron\dist\electron.exe .", 0, False
```

打包后的 exe 是 GUI 程序，天然无终端。

## 2. 日志目录与编码

- 日志放 `%APPDATA%/<应用名>/logs/YYYY-MM-DD.log`（Electron 用 `app.getPath('userData')`）。
- **UTF-8 BOM**：创建文件时先写 `\uFEFF`，否则 Windows 记事本打开乱码。
- PowerShell 写文件同理，注意 `Out-File -Encoding utf8` 在 Windows PowerShell 5.1 下默认带 BOM、`utf8NoBOM` 只在 PS7。

## 3. 开机自启

- 绿色版：把 exe 快捷方式放入 `shell:startup`（Win+R 输入 `shell:startup`）。
- 安装版：electron-builder NSIS 勾选"开机启动"或写注册表 `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`。

## 4. 透明窗口注意

- 依赖显卡硬件加速；远程桌面/虚拟机里可能透明失效或黑底（退回不透明或加 `disableHardwareAcceleration` 对比）。
- 置顶最高级别：Electron `win.setAlwaysOnTop(true, 'screen-saver')`。

## 5. 杀软与打包

- 企业安全软件常拦截 rcedit 改 exe 元数据 → 手动复制打包（见 `packaging-windows.md`）。
- 二次打包/加壳产物可能触发误报，优先原版运行时复制。

> AI生成
