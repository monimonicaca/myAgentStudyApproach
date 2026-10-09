# 窗口跟随"追鼠标"问题（follow-window-pitfalls）

> 可选能力：用户切换到新窗口时，桌宠自动趴到该窗口斜上方。做不好就会像"追着鼠标跑"，被用户嫌弃。

## 1. 为什么会有"追鼠标"感

- 每几百毫秒检测一次前台窗口，**任何切换**都触发移动；
- 没判断"是不是新窗口"，在 A/B 窗口间来回切，宠物左右横跳；
- 无冷却，连续移动。

## 2. 解法：三要素

| 机制 | 实现 | 效果 |
|---|---|---|
| **新窗口判定** | 用 `进程名|窗口标题` 做唯一键，存入 `Set`；**仅对从未见过的键**触发移动 | 只在真正打开新窗口时动一次 |
| **冷却** | 上次自动移动后 12s 内不响应 | 防连击 |
| **位移防抖** | 目标与当前位置差 < 40px 不移动 | 防微动 |

## 3. 其他必要约束

- **拖拽时暂停跟随**（用户在拖宠物时自动移动 = 灾难）；
- 跳过宠物自身窗口（按进程名过滤）；
- 位置限制在屏幕工作区内；
- 缓存 `Set` 限长（如 200 条），防止无限增长。

## 4. 参考实现（Electron + active-win 伪代码）

```js
const seen = new Set();
setInterval(async () => {
  if (isUserDragging) return;
  if (Date.now() - lastMove < 12000) return;
  const win = await activeWin();
  if (!win?.bounds) return;
  const key = `${win.owner?.name}|${win.title}`;
  if (seen.has(key)) return;
  seen.add(key);
  movePetTo(win.bounds);   // 右上角 + 屏幕范围钳制
  lastMove = Date.now();
}, 3000);
```

> 其他技术栈：Tauri 可用系统 API 查询前台窗口（平台相关）；PyQt 无跨平台现成方案，可用平台命令（如 Windows PowerShell `Get-Process | Where MainWindowTitle`）。

> AI生成
