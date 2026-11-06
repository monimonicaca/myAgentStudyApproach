# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

可以用来展示新消息的数量。

数量值可接受 Number 或 String。

```vue
<template>

  <el-badge :value="12" class="item">

    <el-button>comments</el-button>

  </el-badge>

  <el-badge :value="3" class="item">

    <el-button>replies</el-button>

  </el-badge>

  <el-badge :value="1" class="item" type="primary">

    <el-button>comments</el-button>

  </el-badge>

  <el-badge :value="2" class="item" type="warning">

    <el-button>replies</el-button>

  </el-badge>

  <el-badge :value="1" class="item" color="green">

    <el-button>custom background</el-button>

  </el-badge>

  <el-dropdown trigger="click">

    <span class="el-dropdown-link">

      Click Me

      <el-icon class="el-icon--right"><caret-bottom /></el-icon>

    </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item class="clearfix">

          comments

          <el-badge class="mark" :value="12" />

        </el-dropdown-item>

        <el-dropdown-item class="clearfix">

          replies

          <el-badge class="mark" :value="3" />

        </el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script lang="ts" setup>

import { CaretBottom } from '@element-plus/icons-vue'

</script>

<style scoped>

.item {

  margin-top: 10px;

  margin-right: 30px;

}

.el-dropdown {

  margin-top: 1.1rem;

}

</style>
```

## 最大值

你还可以自定义最大值

由 max 属性定义，接受 Number 值。请注意，仅在值也是 Number 时起作用。

```vue
<template>

  <el-badge :value="200" :max="99" class="item">

    <el-button>comments</el-button>

  </el-badge>

  <el-badge :value="100" :max="10" class="item">

    <el-button>replies</el-button>

  </el-badge>

</template>

<style scoped>

.item {

  margin-top: 10px;

  margin-right: 40px;

}

</style>
```

## 自定义显示内容

你也可以展示除数字以外你想要展示的任何值。或者您可以使用 `content` 栏位自定义内容。

当 value 是 String 时，可以显示自定义文字。或者使用 `content` 插槽。

```vue
<template>

  <el-badge value="new" class="item">

    <el-button>comments</el-button>

  </el-badge>

  <el-badge value="hot" class="item">

    <el-button>replies</el-button>

  </el-badge>

  <el-badge value="99" class="item">

    <el-button>share</el-button>

    <template #content="{ value }">

      <div class="custom-content">

        <el-icon>

          <Message />

        </el-icon>

        <span>{{ value }}</span>

      </div>

    </template>

  </el-badge>

</template>

<script setup lang="ts">

import { Message } from '@element-plus/icons-vue'

</script>

<style scoped>

.item {

  margin-top: 10px;

  margin-right: 40px;

}

.custom-content {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 4px;

}

</style>
```

## 小红点

通过一个小红点标记来告知用户有新内容。

使用 `is-dot` 属性。是个布尔值。

```vue
<template>

  <el-badge is-dot class="item">query</el-badge>

  <el-badge is-dot class="item">

    <el-button class="share-button" :icon="Share" type="primary" />

  </el-badge>

</template>

<script lang="ts" setup>

import { Share } from '@element-plus/icons-vue'

</script>

<style scoped>

.item {

  margin-top: 10px;

  margin-right: 40px;

}

</style>
```

## 偏移量 2.7.0

设置徽章点的偏移，格式是[左，顶部]， 代表状态点从左侧和默认位置顶部的偏移。

```vue
<template>

  <el-badge class="item" :value="1" :offset="[10, 5]">

    <el-button> offset</el-button>

  </el-badge>

</template>

<style scoped>

.item {

  margin-top: 10px;

  margin-right: 30px;

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| value | 显示值 | `string` / `number` | '' |
| max | 最大值，超过最大值会显示 `{max}+`。只有当 value 是数字类型时起作用。 | `number` | 99 |
| is-dot | 是否显示小圆点。 | `boolean` | false |
| hidden | 是否隐藏 Badge。 | `boolean` | false |
| type | badge 类型。 | `enum` | danger |
| show-zero 2.6.0 | 值为零时是否显示 Badge | `boolean` | true |
| color 2.6.3 | 背景色 | `string` |  |
| offset 2.7.0 | badge 的偏移量 | `array` | [0, 0] |
| badge-style 2.7.1 | 自定义 badge 样式 | `object` | — |
| badge-class 2.7.1 | 自定义 badge 类名 | `string` | — |

### Slots

| 插槽名 | 说明 | 类型 |
|---|---|---|
| default | 自定义默认内容 | - |
| content 2.9.1 | 自定义显示内容 | `object` |