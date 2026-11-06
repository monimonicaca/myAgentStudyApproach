# Text

文本的常见操作

## 基础用法

由 `type` 属性来选择 Text 的类型。

```vue
<template>

  <el-text class="mx-1">Default</el-text>

  <el-text class="mx-1" type="primary">Primary</el-text>

  <el-text class="mx-1" type="success">Success</el-text>

  <el-text class="mx-1" type="info">Info</el-text>

  <el-text class="mx-1" type="warning">Warning</el-text>

  <el-text class="mx-1" type="danger">Danger</el-text>

</template>
```

## 尺寸

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`

```vue
<template>

  <el-text class="mx-1" size="large">Large</el-text>

  <el-text class="mx-1">Default</el-text>

  <el-text class="mx-1" size="small">Small</el-text>

</template>
```

## 省略

通过 `truncated` 属性，在文本超过视图或最大宽度设置时展示省略符。通过 `line-clamp` 属性控制多行的样式 Starting from version 2.14.6, `isTruncated` is exposed to indicate whether the text is truncated. You can use it to show a tooltip only when truncation occurs.

```vue
<template>

  <el-text class="w-150px mb-2" truncated>

    Self element set width 100px

  </el-text>

  <el-row class="w-150px mb-2">

    <el-text truncated>Squeezed by parent element</el-text>

  </el-row>

  <el-row class="mb-2">

    <el-text line-clamp="2">

      The -webkit-line-clamp CSS property<br />

      allows limiting of the contents of<br />

      a block to the specified number of lines.

    </el-text>

  </el-row>

  <el-row>

    <el-tooltip

      content="Show tooltip only when the text is truncated"

      :disabled="!textRef?.isTruncated"

    >

      <el-text ref="textRef" class="w-150px" truncated title="">

        Show tooltip only when the text is truncated

      </el-text>

    </el-tooltip>

  </el-row>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const textRef = ref()

</script>
```

## 覆盖

使用属性 `tag` 覆盖元素

```vue
<template>

  <el-space direction="vertical">

    <el-text>span</el-text>

    <el-text tag="p">This is a paragraph.</el-text>

    <el-text tag="b">Bold</el-text>

    <el-text tag="i">Italic</el-text>

    <el-text>

      This is

      <el-text tag="sub" size="small">subscript</el-text>

    </el-text>

    <el-text>

      This is

      <el-text tag="sup" size="small">superscript</el-text>

    </el-text>

    <el-text tag="ins">Inserted</el-text>

    <el-text tag="del">Deleted</el-text>

    <el-text tag="mark">Marked</el-text>

  </el-space>

</template>
```

## 混合使用

混合使用 Text 组件

```vue
<template>

  <el-space direction="vertical">

    <el-text>

      <el-icon>

        <ElementPlus />

      </el-icon>

      Element-Plus

    </el-text>

    <el-row>

      <el-text>Rate</el-text>

      <el-rate class="ml-1" />

    </el-row>

    <el-text>

      This is text mixed icon

      <el-icon>

        <Bell />

      </el-icon>

      and component

      <el-button>Button</el-button>

    </el-text>

  </el-space>

</template>

<script lang="ts" setup>

import { Bell, ElementPlus } from '@element-plus/icons-vue'

</script>
```

## API

### Attributes

| 属性名 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| type | 类型 | `enum` | — |
| size | 大小 | `enum` | default |
| truncated | 显示省略号 | `boolean` | false |
| line-clamp 2.4.0 | 最大行数 | `string` / `number` | — |
| tag | 自定义元素标签 | `string` | span |

### Slots

| 名称 | 详情 |
|---|---|
| default | 默认内容 |

### 暴露

| 名称 | 详情 | Type |
|---|---|---|
| isTruncated 2.14.6 | whether the text is truncated | `object` |