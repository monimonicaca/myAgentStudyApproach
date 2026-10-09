> 触发条件：Electron 下出现**黑窗口/拖拽卡顿/多实例/日志乱码/打包失败/置顶失效**等时。

# Electron 常见问题（electron-pitfalls）

| 问题 | 原因 | 解法 |
|------|------|------|
| 窗口黑色不透明 | 显卡未硬件加速 / 设置了 `backgroundColor` | `transparent: true` 且**不设置** `backgroundColor`；检查显卡驱动硬件加速 |
| 拖拽卡顿 | GPU 占用 / 后台节流 | 开 DevTools 排查；`backgroundThrottling: false` |
| 可启动多个实例 | 无单实例锁 | `app.requestSingleInstanceLock()`，二次启动 `focus()` 已有窗口 |
| 日志中文乱码 | 无 BOM 的 UTF-8 | 文件创建时先写入 `\uFEFF` |
| electron-packager 失败 | rcedit 改 exe 元数据被杀软拦截 | 手动复制 Electron 运行时打包（见 `example-electron.md` 第 4 节） |
| 拖拽卡顿 / app-region bug | 用了 `-webkit-app-region: drag` | 改用"IPC 位移增量"移动窗口，可同时切贴图 |
| 窗口跟随像追鼠标 | 频繁检测移动 | 只对新窗口移动 + 冷却 + 防抖（见 `follow-window-pitfalls.md`） |
| 置顶被全屏/屏保盖住 | 默认置顶级别不够 | `win.setAlwaysOnTop(true, 'screen-saver')`（Windows 最高级别） |

> 排查顺序：先看 `%APPDATA%/<app>/logs/` 当日日志（含启动/位置/拖拽/未捕获异常），再开 DevTools 验证渲染。另外可用 `app.disableHardwareAcceleration()` 对比排查 GPU 问题。右键菜单、IPC、安全设置见 `electron.md`。

> AI生成