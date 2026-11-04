# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

```vue
<template>

  <div>

    <span>

      I sit at my window this morning where the world like a passer-by stops for

      a moment, nods to me and goes.

    </span>

    <el-divider />

    <span>

      There little thoughts are the rustle of leaves; they have their whisper of

      joy in my mind.

    </span>

  </div>

</template>
```

## 设置文案

可以在分割线上自定义文本内容。

```vue
<template>

  <div>

    <span>What you are you do not see, what you see is your shadow. </span>

    <el-divider content-position="left">Rabindranath Tagore</el-divider>

    <span>

      My wishes are fools, they shout across thy song, my Master. Let me but

      listen.

    </span>

    <el-divider>

      <el-icon><star-filled /></el-icon>

    </el-divider>

    <span>I cannot choose the best. The best chooses me.</span>

    <el-divider content-position="right">Rabindranath Tagore</el-divider>

  </div>

</template>

<script lang="ts" setup>

import { StarFilled } from '@element-plus/icons-vue'

</script>
```

## 虚线

您可以设置分隔符的样式。

```vue
<template>

  <div>

    <span>What language is thine, O sea?</span>

    <el-divider border-style="dashed" />

    <span>The language of eternal question.</span>

  </div>

  <el-divider border-style="dotted" />

  <span>What language is thy answer, O sky?</span>

  <el-divider border-style="double" />

  <span>The language of eternal silence.</span>

</template>
```

## 垂直分隔线

```vue
<template>

  <div>

    <span>Rain</span>

    <el-divider direction="vertical" />

    <span>Home</span>

    <el-divider direction="vertical" border-style="dashed" />

    <span>Grass</span>

  </div>

</template>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| direction | 设置分割线方向 | `enum` | horizontal |
| border-style | 设置分隔符样式 | `enum`** [css/border-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | solid |
| content-position | 自定义分隔线内容的位置 | `enum` | center |

### Slots

| 插槽名 | 说明 |
|---|---|
| default | 设置分割线文案的位置 |