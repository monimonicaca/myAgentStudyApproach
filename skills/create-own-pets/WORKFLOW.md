# 桌面宠物开发工作流

基于 Electron 的透明置顶桌面宠物完整开发流程，包含 Q 版人物生成、多方向贴图、关键帧动画、交互逻辑和打包发布。

---

## 一、项目初始化

### 1.1 创建项目结构

```
desktop-pet/
├── package.json
├── main.js              # 主进程
├── preload.js           # IPC 桥接
├── src/
│   ├── index.html
│   ├── style.css
│   └── renderer.js      # 核心逻辑
├── images/              # 所有贴图（透明背景 PNG）
└── README.md
```

### 1.2 安装依赖

```bash
npm init -y
npm install --save-dev electron@28 electron-packager
npm install active-win    # 窗口检测（可选，用于窗口跟随）
```

### 1.3 package.json 配置

```json
{
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-packager . DesktopPet --platform=win32 --arch=x64 --out=dist --overwrite"
  }
}
```

---

## 二、Q 版人物生成流程

### 2.1 核心原则

- **以确认为锚点**：先精调正面图，所有其他方向/姿势都基于确认的正面图生成
- **服装一致性**：红色无袖高领露脐毛衣 + 白色镂空绑带阔腿裤 + 黑色凌乱长直发发尾棕色挑染
- **五官特征**：细长上挑眼型、淡黑灰烟熏妆（非红色）、深棕色瞳孔、无刘海中分、嘴唇中等厚度

### 2.2 正面图精调步骤（关键！）

1. **第一版**：基于真人照片生成 Q 版，检查服装和五官大致方向
2. **第二版**：用原图参考，修正衣服和五官
3. **第三版**：缩小眼睛，调整眼尾上挑
4. **第四版（确认版）**：淡烟熏、细长上挑眼、棕瞳、无刘海、棕色挑染

> **经验**：眼睛过大是常见问题，需要反复强调"眼睛不要太大，眼尾上挑"。烟熏妆要淡，太重会显脏。

### 2.3 八方向生成

基于确认的正面图，用 `image_edit` 生成：

| 方向 | 说明 |
|------|------|
| front | 正面（确认版） |
| back | 真正的后脑勺+后背（不是头发遮脸） |
| left / right | 左右侧面，衣服图案要清晰可见 |
| front_left / front_right | 左前/右前 45° |
| back_left / back_right | 左后/右后 45° |

> **坑**：背面图容易生成"头发盖住脸"的假背面，必须明确要求"真正的后脑勺，看不到脸"。

### 2.4 图片命名规范

```
images/
├── front.png / back.png / left.png / right.png
├── front_left.png / front_right.png
├── back_left.png / back_right.png
├── stretch.png / stretch_mid.png / stretch_start.png  # 伸懒腰帧
├── half_squat.png / squat.png                        # 蹲下帧
├── cross_left.png / cross_right.png                  # 盘腿帧
├── sitting.png / sitting_peek.png                    # 打坐帧
```

---

## 三、图片抠图

### 3.1 工具

使用 `mediakit-cli image remove-image-background`，Q 版动漫人物用 `--scene general`。

### 3.2 PowerShell 命令模板

```powershell
$result = mediakit-cli image remove-image-background --image-url "<图片URL>" --scene general 2>&1 | Out-String | ConvertFrom-Json
curl.exe -sL -o "images\<文件名>.png" $result.image_url
```

### 3.3 注意事项

- Windows PowerShell 必须用 `2>&1 | Out-String | ConvertFrom-Json` 解析 JSON
- 返回的 `image_url` 是临时链接，需立即下载
- 抠图后检查边缘是否干净，底部是否有残留阴影

---

## 四、关键帧动画设计

### 4.1 起床动画序列（12帧）

```
站立(front) → 抬手(stretch_start) → 半举(stretch_mid) → 全举打哈欠(stretch)
→ 半放(stretch_mid) → 收手(stretch_start) → 站立(front)
→ 半蹲(half_squat) → 蹲下(squat) → 盘左腿(cross_left) → 盘右腿(cross_right) → 打坐(sitting)
```

每帧持续时间（毫秒）：
```javascript
const frames = [
  { dir: 'front',         duration: 250 },
  { dir: 'stretch_start', duration: 300 },
  { dir: 'stretch_mid',   duration: 350 },
  { dir: 'stretch',       duration: 800 },  // 顶点多停留
  { dir: 'stretch_mid',   duration: 300 },
  { dir: 'stretch_start', duration: 250 },
  { dir: 'front',         duration: 200 },
  { dir: 'half_squat',    duration: 350 },
  { dir: 'squat',         duration: 400 },
  { dir: 'cross_left',    duration: 400 },
  { dir: 'cross_right',   duration: 400 }
];
```

### 4.2 打坐偷看动画

- 待机打坐时每隔 5~10 秒随机触发
- 切换到 `sitting_peek`（睁一只眼），持续 1~2 秒后恢复
- 拖拽/跳跃时取消偷看

### 4.3 关键帧生成经验

- **盘腿姿势是重灾区**：AI 极易生成多脚/多腿，解决方案：
  - 要求"双脚完全藏在腿下被裤腿遮住"
  - 或基于已正常的打坐图只改手部姿势
  - 跪坐虽脚数正常但用户要盘腿，不要擅自换姿势
- **底部阴影**：所有图都要明确要求"纯白背景，无地面阴影，无投影"
- **人物大小统一**：不同姿势在画布中占比不同，需要用 CSS scale 微调

---

## 五、代码实现要点

### 5.1 主进程（main.js）

**窗口配置：**
```javascript
new BrowserWindow({
  width: 240,
  height: 380,
  frame: false,           // 无边框
  transparent: true,      // 背景透明
  alwaysOnTop: true,      // 始终置顶
  skipTaskbar: true,      // 不显示任务栏
  resizable: false,       // 不可缩放
  hasShadow: false,       // 无阴影
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true,
    nodeIntegration: false
  }
});
win.setAlwaysOnTop(true, 'screen-saver');  // 最高置顶级别
```

**窗口移动（IPC）：**
- 渲染进程监听 mousedown/mousemove，计算位移增量
- 通过 IPC 发送 `(dx, dy)` 给主进程
- 主进程调用 `win.setPosition(x+dx, y+dy)`
- 比 `-webkit-app-region: drag` 更流畅，可同时切换贴图

**单实例锁：**
```javascript
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) app.exit(0);
else {
  app.on('second-instance', () => { /* 聚焦已有窗口 */ });
}
```

**日志系统：**
- 日志文件：`%APPDATA%/<app-name>/logs/YYYY-MM-DD.log`
- 写入 UTF-8 BOM（`\uFEFF`），避免 Windows 记事本乱码
- 记录：启动/退出、窗口位置、拖拽、自动跟随、错误异常

### 5.2 渲染进程（renderer.js）

**图片降级机制：**
```javascript
const FALLBACK_CHAIN = {
  left:  [{ dir: 'right', flip: true }, { dir: 'front' }],
  // ... 每个方向都有降级链
};
```

**方向切换逻辑：**
- 左右移动 → left / right
- 斜向移动 → front_left / front_right（不使用背面方向）
- 向下 → front，向上 → 保持当前方向

**人物大小统一：**
```javascript
const scaleMap = {
  front: 1.0, stretch: 0.92,    // 举手更高需缩小
  half_squat: 0.90, squat: 0.85,
  cross_left: 0.82, sitting: 0.82  // 盘腿更矮需缩小
};
```

**待机动画：**
- 打坐时：缓慢呼吸缩放（`requestAnimationFrame` + `transform: scale`）
- 不上下浮动（打坐时稳定）
- 拖拽时起身站立，松开 3 秒后自动打坐

### 5.3 窗口跟随功能

- 使用 `active-win` 检测前台窗口
- 仅响应从未见过的新窗口（`seenWindows` Set）
- 12 秒冷却 + 40px 防抖阈值，避免频繁移动
- 拖拽时暂停跟随
- 活动范围：屏幕下半部分 + 窗口斜上方

---

## 六、打包发布

### 6.1 手动打包（推荐，绕过 rcedit 问题）

electron-packager 常因 rcedit 修改 exe 元数据失败（杀毒软件拦截），改用手动复制：

```powershell
# 1. 复制 Electron 运行时
Copy-Item "node_modules\electron\dist\*" "dist\DesktopPet-win32-x64\" -Recurse -Force

# 2. 复制应用代码到 resources/app
Copy-Item "main.js", "preload.js", "package.json" "dist\DesktopPet-win32-x64\resources\app\"
Copy-Item "src" "dist\DesktopPet-win32-x64\resources\app\src" -Recurse -Force
Copy-Item "images" "dist\DesktopPet-win32-x64\resources\app\images" -Recurse -Force

# 3. 重命名
Rename-Item "dist\DesktopPet-win32-x64\electron.exe" "DesktopPet.exe"
```

### 6.2 无终端启动

开发模式下 `npm start` 会带终端，创建 VBS 脚本隐藏：

```vbscript
' 启动宠物.vbs
Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
WshShell.Run "node_modules\electron\dist\electron.exe .", 0, False
```

打包后的 exe 本身就是 GUI 程序，无终端。

### 6.3 .gitignore

```
node_modules/
dist/
*.log
```

---

## 七、常见问题与解决方案

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 盘腿图多脚/多腿 | AI 生成盘腿时脚部混乱 | 要求"双脚藏在裤腿下看不见"，或基于正常图只改手 |
| 背面是头发遮脸 | AI 误解"背面" | 明确要求"真正的后脑勺，看不到脸" |
| 衣服图案侧面消失 | 侧面角度遮挡 | 要求"脸部微转镜头，确保胸前图案清晰可见" |
| 底部灰色阴影 | AI 默认加地面投影 | 每张图都要求"纯白背景，无阴影无投影" |
| 人物大小跳变 | 不同姿势画布占比不同 | 用 scaleMap 为每个方向设置精确缩放 |
| 动画不流畅 | 关键帧太少 | 增加过渡帧（抬手起始、半蹲等） |
| 日志中文乱码 | 无 BOM 的 UTF-8 | 文件创建时先写入 `\uFEFF` |
| electron-packager 失败 | rcedit 被杀毒拦截 | 手动复制 Electron 运行时打包 |
| 可启动多个实例 | 无单实例锁 | `app.requestSingleInstanceLock()` |
| 窗口跟随像追鼠标 | 频繁检测移动 | 新窗口判定 + 12秒冷却 + 40px防抖 |

---

## 八、快速启动清单

- [ ] 项目结构创建完成
- [ ] 正面 Q 版图精调确认
- [ ] 8 方向图生成并抠图
- [ ] 起床动画关键帧生成（12帧）
- [ ] 打坐/偷看图生成
- [ ] 所有图底部无阴影
- [ ] 人物缩放比例统一
- [ ] 主进程：透明置顶窗口 + IPC 移动 + 单实例锁 + 日志
- [ ] 渲染进程：图片降级 + 拖拽方向切换 + 待机动画 + 偷看
- [ ] 右键菜单（待机动画开关 / 张望开关 / 退出）
- [ ] 双击跳跃
- [ ] 窗口跟随（可选）
- [ ] 手动打包 exe
- [ ] 测试：启动动画、拖拽、打坐、偷看、单实例
- [ ] Git 提交推送
