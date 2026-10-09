# 动画方式选型与实现模式（animation）

> 动画方式在需求收集阶段确定，与角色、平台、技术栈解耦。常用四类，可混合。

## 1. 选型对比

| 方式 | 适合 | 成本 | 说明 |
|---|---|---|---|
| **程序化动画** | 呼吸/浮动/跳跃/眨眼 | 低 | 纯代码 `transform/pos`，无贴图，任何栈通用 |
| **帧动画** | 起床/转身/走路 | 中 | 关键帧贴图序列，代码简单但产图多 |
| **骨骼动画** | 全身动作、换装 | 高 | Spine / DragonBones / Live2D，动效好、产图少 |
| **Live2D** | 拟人角色微动 | 高 | 面捕/呼吸/视线跟随，需专用模型 |

桌宠最常见组合：**程序化（待机呼吸浮动）+ 帧动画（动作序列）**，兼顾效果与成本。

## 2. 程序化动画实现模式（通用伪代码）

```js
// 统一动画循环（requestAnimationFrame 或等价定时器）
function frame(t) {
  const dt = (t - last) / 1000; last = t;
  // 1. 上下浮动
  floatOffset = Math.sin(t * 2.5) * 6;
  // 2. 呼吸缩放（待机时幅度更小更缓慢）
  breathScale = 1 + Math.sin(t * speed) * amount;
  // 3. 跳跃抛物线 + 落地挤压
  jumpY = -4 * p * (1 - p) * 60;   // p: 进度 0→1
  // 组合 transform，数值 toFixed 防亚像素抖动
  applyTransform(floatOffset + jumpY, breathScale * squashX, breathScale * squashY);
}
```

要点：
- `transform-origin: center bottom`：脚底对齐，缩放不悬空；
- 数值取有限小数（`toFixed(4)`），避免抖动；
- 后台不节流（Electron `backgroundThrottling: false`），动画才流畅。

## 3. 帧动画实现模式

```js
const frames = [
  { asset: 'stretch_start', duration: 300 },
  { asset: 'stretch',       duration: 800 },   // 顶点多停留
  // ...
];
function play() { setAsset(frames[i].asset); setTimeout(play, frames[i].duration); }
```

要点：
- 关键帧太少会卡顿 → 补过渡帧（抬手起始、半蹲等）；
- 顶点帧停留时间略长，观感自然；
- 帧序列由配置 `assets` 驱动，不写死（见 `SKILL.md` 第 4 节）。

## 4. 状态机与动画互斥

- 状态：`isDragging / isJumping / isSitting / isStretching / isLooking ...`；
- 一个动作开始时，取消其他动作的定时器（起身→取消待机/张望/偷看）；
- 松手后延迟回待机（如 3s），避免"松手立刻躺下"的突兀。

## 5. 常见问题

见 `references/animation-pitfalls.md`。

> AI生成
