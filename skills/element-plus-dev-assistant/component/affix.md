# Affix 固钉

将页面元素固定在特定可视区域。

## 基础用法

固钉默认固定在页面顶部。

通过设置 `offset` 属性来改变吸顶距离，默认值为 0。

```vue
<template>

  <el-affix :offset="120">

    <el-button type="primary">Offset top 120px</el-button>

  </el-affix>

</template>
```

## 指定容器

通过设置 `target` 属性，让固钉始终保持在容器内，超过范围则隐藏。

请注意容器避免出现滚动条。

```vue
<template>

  <div class="affix-container">

    <el-affix target=".affix-container" :offset="80">

      <el-button type="primary">Target container</el-button>

    </el-affix>

  </div>

</template>

<style scoped>

.affix-container {

  text-align: center;

  height: 400px;

  border-radius: 4px;

  background: var(--el-color-primary-light-9);

}

</style>
```

## 固定位置

Affix 组件提供 2 个固定的位置参数 `top` 和 `bottom`。

通过设置 `position` 属性来改变固定位置，默认值为 `top` 。

```vue
<template>

  <el-affix position="bottom" :offset="20">

    <el-button type="primary">Offset bottom 20px</el-button>

  </el-affix>

</template>
```

## API

### 属性

| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| offset | 偏移距离 | `number` | 0 |
| position | 固钉位置 | `enum` | top |
| target | 指定容器（CSS 选择器） | `string` | — |
| z-index | `z-index` | `number` | 100 |
| teleported 2.13.0 | Affix 元素是否使用 teleport 特性，设置为 `true` 将会使得该元素“传送”至 `append-to` 设置的位置 | `boolean` | false |
| append-to 2.13.0 | Affix 元素将被挂载至哪个元素 | `CSSSelector` / `HTMLElement` | body |

### 事件

| 名称 | 说明 | 类型 |
|---|---|---|
| change | 固钉状态改变时触发的事件 | `Function` |
| scroll | 滚动时触发的事件 | `Function` |

### 插槽

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |

### 暴露

| 名称 | 说明 | 类型 |
|---|---|---|
| update | 手动更新固钉状态 | `Function` |
| updateRoot | 手动更新根元素的盒模型信息 | `Function` |