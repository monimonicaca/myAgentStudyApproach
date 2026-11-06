# Avatar 头像

Avatar 组件可以用来代表人物或对象，支持使用图片、图标或者文字作为 Avatar。

## 基础用法

使用 `shape` 和 `size` 属性来设置 Avatar 的形状和大小。

```vue
<template>

  <el-row class="demo-avatar demo-basic">

    <el-col :lg="12" :md="12">

      <div class="sub-title">circle</div>

      <div class="demo-basic--circle">

        <div class="block">

          <el-avatar :size="50" :src="circleUrl" />

        </div>

        <div v-for="size in sizeList" :key="size" class="block">

          <el-avatar :size="size" :src="circleUrl" />

        </div>

      </div>

    </el-col>

    <el-col :lg="12" :md="12">

      <div class="sub-title">square</div>

      <div class="demo-basic--circle">

        <div class="block">

          <el-avatar shape="square" :size="50" :src="squareUrl" />

        </div>

        <div v-for="size in sizeList" :key="size" class="block">

          <el-avatar shape="square" :size="size" :src="squareUrl" />

        </div>

      </div>

    </el-col>

  </el-row>

</template>

<script lang="ts" setup>

import { reactive, toRefs } from 'vue'

const state = reactive({

  circleUrl:

    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',

  squareUrl:

    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',

  sizeList: ['small', '', 'large'] as const,

})

const { circleUrl, squareUrl, sizeList } = toRefs(state)

</script>

<style scoped>

.demo-basic {

  text-align: center;

}

.demo-basic .sub-title {

  margin-bottom: 10px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

.demo-basic .demo-basic--circle,

.demo-basic .demo-basic--square {

  display: flex;

  justify-content: space-between;

  align-items: center;

}

.demo-basic .block:not(:last-child) {

  border-right: 1px solid var(--el-border-color);

}

.demo-basic .block {

  flex: 1;

}

.demo-basic .el-col:not(:last-child) {

  border-right: 1px solid var(--el-border-color);

}

@media screen and (max-width: 992px) {

  .demo-basic .el-col:not(:last-child) {

    border-right: none;

  }

}

</style>
```

## 展示类型

支持使用图片，图标或者文字作为 Avatar。

```vue
<template>

  <div class="demo-type">

    <div>

      <el-avatar :icon="UserFilled" />

    </div>

    <div>

      <el-avatar

        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"

      />

    </div>

    <div>

      <el-avatar> user </el-avatar>

    </div>

  </div>

</template>

<script setup lang="ts">

import { UserFilled } from '@element-plus/icons-vue'

</script>

<style scoped>

.demo-type {

  display: flex;

}

.demo-type > div {

  flex: 1;

  text-align: center;

}

.demo-type > div:not(:last-child) {

  border-right: 1px solid var(--el-border-color);

}

</style>
```

## 回退行为

图片加载失败时的回退行为。

```vue
<template>

  <div class="demo-type">

    <el-avatar :size="60" src="https://empty" @error="errorHandler">

      <img

        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"

      />

    </el-avatar>

  </div>

</template>

<script lang="ts" setup>

const errorHandler = () => true

</script>
```

## 适应容器

当使用图片作为用户头像时，设置该图片如何在容器中展示。与[ object-fit ](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) 属性一致

```vue
<template>

  <div class="demo-fit">

    <div v-for="fit in fits" :key="fit" class="block">

      <span class="title">{{ fit }}</span>

      <el-avatar shape="square" :size="100" :fit="fit" :src="url" />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { reactive, toRefs } from 'vue'

import type { CSSProperties } from 'vue'

const state = reactive({

  fits: [

    'fill',

    'contain',

    'cover',

    'none',

    'scale-down',

  ] as CSSProperties['object-fit'][],

  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

})

const { fits, url } = toRefs(state)

</script>

<style scoped>

.demo-fit {

  display: flex;

  text-align: center;

  justify-content: space-between;

}

.demo-fit .block {

  flex: 1;

  display: flex;

  flex-direction: column;

  flex-grow: 0;

}

.demo-fit .title {

  margin-bottom: 10px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

</style>
```

## 头像组 2.13.1

显示为头像组

使用标签 `<el-avatar-group>` 来分组您的头像。

```vue
<template>

  <div class="m-4">

    <p>default</p>

    <el-avatar-group>

      <el-avatar v-for="number in 5" :key="number" :src="circleUrl" />

    </el-avatar-group>

  </div>

  <div class="m-4">

    <p>use collapse-avatars</p>

    <el-avatar-group collapse-avatars>

      <el-avatar v-for="number in 5" :key="number" :src="circleUrl" />

    </el-avatar-group>

  </div>

  <div class="m-4">

    <p>use collapse-class and collapse-style</p>

    <el-avatar-group

      collapse-avatars

      :collapse-style="{ 'background-color': '#d9ecff' }"

      collapse-class="my-collapse-avatar"

    >

      <el-avatar v-for="number in 5" :key="number" :src="circleUrl" />

    </el-avatar-group>

  </div>

  <div class="m-4">

    <p>use max-collapse-avatars</p>

    <el-avatar-group collapse-avatars :max-collapse-avatars="3">

      <el-avatar v-for="number in 5" :key="number" :src="circleUrl" />

    </el-avatar-group>

  </div>

  <div class="m-4">

    <p>use collapse-avatars-tooltip</p>

    <el-avatar-group

      collapse-avatars

      :max-collapse-avatars="3"

      collapse-avatars-tooltip

    >

      <el-avatar v-for="number in 5" :key="number" :src="circleUrl" />

    </el-avatar-group>

  </div>

</template>

<script lang="ts" setup>

const circleUrl =

  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

</script>

<style>

.my-collapse-avatar {

  color: #409eff;

}

</style>
```

## Avatar API

### Avatar 属性

| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| icon | 设置 Avatar 的图标类型，具体参考 Icon 组件 | `string` / `Component` | — |
| size | Avatar 大小 | `number` / `enum` | — |
| shape | Avatar 形状 | `enum` | — |
| src | Avatar 图片的源地址 | `string` | — |
| src-set | 图片 Avatar 的原生 `srcset` 属性 | `string` | string |
| alt | 图片 Avatar 的原生 `alt` 属性 | `string` | — |
| fit | 当展示类型为图片的时候，设置图片如何适应容器 | `enum` | cover |

### Avatar 事件

| 名称 | 说明 | 类型 |
|---|---|---|
| error | 图片加载失败时触发 | `Function` |

### Avatar 插槽

| 插槽名 | 说明 |
|---|---|
| default | 自定义头像展示内容 |

## AvatarGroup API 2.13.1

### AvatarGroup Attributes

| 方法名 | 详情 | Type | 默认 |
|---|---|---|---|
| size | 控制头像组中的头像大小 | `number` / `enum` | — |
| shape | 控制头像组中的头像形状 | `enum` | — |
| collapse-avatars | 是否折叠头像 | `boolean` | false |
| collapse-avatars-tooltip | 是否在鼠标悬停折叠头像的文字时显示所有折叠头像。若要使用此功能， `collapse-avatars` 必须为 true | `boolean` | false |
| max-collapse-avatars | 需要显示的头像的最大数量若要使用此功能， `collapse-avatars` 必须为 true | `number` | 1 |
| effect | tooltip 主题，内置了 `dark` / `light` 两种 | `enum`** / `string` | light |
| placement | tooltip 的位置 | `enum` | top |
| popper-class | tooltip 的自定义类名 | `string` | '' |
| popper-style | tooltip 的自定义样式 | `string` / `object` | — |
| collapse-class | collapse-avatar 的自定义类名 | `string` | '' |
| collapse-style | collapse-avatar 的自定义样式 | `string` / `object` | — |