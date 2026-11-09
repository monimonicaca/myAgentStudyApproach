# Element Plus 组件预览 Demo

一套**完全离线**的 Element Plus 组件演示站点，无需构建、无需联网，双击 `index.html` 即可使用。适合文档演示、离线培训与快速查阅组件用法。

## 快速开始

直接用浏览器打开 `index.html`（或用任意静态服务器托管本目录均可）。

## 目录结构

```
demo/
├─ index.html          # 入口页：组件总览 + 搜索
├─ <组件>.html         # 每个组件一个页面（如 button.html、table.html）
├─ build/              # 每个组件的运行时脚本与样式（<组件>.js / <组件>.css）
├─ lib/                # 离线依赖（Vue 运行时、Element Plus、图标、代码高亮）
└─ README.md
```

## 页面说明

- **入口页（index.html）**：按「基础组件 / 表单组件 / 数据展示 / 导航组件 / 反馈组件 / 其他」分组展示全部 79 个组件卡片，顶部搜索框支持中文名或英文名实时过滤（如「表格」「table」）。
- **组件页（如 button.html）**：每个组件包含
  - **在线演示**：通过本地 Vue + Element Plus 运行时真实渲染组件，所见即所得；
  - **文档参考**：组件说明、使用注意（含版本提示）与完整 API 表（Attributes / Slots / Exposes）；
  - **查看源代码**：每个示例可折叠展开对应的 Vue 源码，并支持代码高亮；
  - 左侧为示例目录锚点，顶部可一键返回全部组件。
- 另有 `../组件索引.md` 提供 Markdown 形式的组件清单。

## 依赖说明（lib/）

页面基于 Element Plus 的 CDN 版本离线化打包，未引入任何构建流程：

- `vue.global.prod.js` — Vue 3 生产版运行时
- `element-plus.full.min.js` / `element-plus.css` — Element Plus 完整包与样式
- `icons.iife.min.js` — Element Plus 图标库
- `highlight.min.js` / `highlight.css` — 源码代码高亮

页面在脚本加载后从全局 `window.__EXAMPLES__` 中读取每个组件的示例定义并挂载渲染；示例渲染失败时会在对应区块显示错误提示，便于定位问题。

## 使用场景

- 离线环境下的组件速查与演示
- 演示 Element Plus 常用组件的标准用法与 API



