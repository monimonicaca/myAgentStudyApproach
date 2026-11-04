# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`, `plain`, `round`, `dashed` 和 `circle` 来定义按钮的样式。

```vue
<template>

  <div class="button-example">

    <div class="button-row">

      <el-button>Default</el-button>

      <el-button type="primary">Primary</el-button>

      <el-button type="success">Success</el-button>

      <el-button type="info">Info</el-button>

      <el-button type="warning">Warning</el-button>

      <el-button type="danger">Danger</el-button>

    </div>

    <div class="button-row">

      <el-button plain>Plain</el-button>

      <el-button type="primary" plain>Primary</el-button>

      <el-button type="success" plain>Success</el-button>

      <el-button type="info" plain>Info</el-button>

      <el-button type="warning" plain>Warning</el-button>

      <el-button type="danger" plain>Danger</el-button>

    </div>

    <div class="button-row">

      <el-button round>Round</el-button>

      <el-button type="primary" round>Primary</el-button>

      <el-button type="success" round>Success</el-button>

      <el-button type="info" round>Info</el-button>

      <el-button type="warning" round>Warning</el-button>

      <el-button type="danger" round>Danger</el-button>

    </div>

    <div class="button-row">

      <el-button dashed>Dashed</el-button>

      <el-button type="primary" dashed>Primary</el-button>

      <el-button type="success" dashed>Success</el-button>

      <el-button type="info" dashed>Info</el-button>

      <el-button type="warning" dashed>Warning</el-button>

      <el-button type="danger" dashed>Danger</el-button>

    </div>

    <div class="button-row">

      <el-button :icon="Search" circle />

      <el-button type="primary" :icon="Edit" circle />

      <el-button type="success" :icon="Check" circle />

      <el-button type="info" :icon="Message" circle />

      <el-button type="warning" :icon="Star" circle />

      <el-button type="danger" :icon="Delete" circle />

    </div>

  </div>

</template>

<script lang="ts" setup>

import {

  Check,

  Delete,

  Edit,

  Message,

  Search,

  Star,

} from '@element-plus/icons-vue'

</script>

<style scoped>

.button-example {

  display: flex;

  flex-direction: column;

  gap: 1rem;

}

.button-row {

  display: flex;

  flex-wrap: wrap;

  gap: 1rem;

  align-items: center;

}

.button-row > * {

  margin: 0;

}

</style>
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。该属性接受一个 `Boolean` 类型的值。

```vue
<template>

  <div class="button-example">

    <div class="button-row">

      <el-button disabled>Default</el-button>

      <el-button type="primary" disabled>Primary</el-button>

      <el-button type="success" disabled>Success</el-button>

      <el-button type="info" disabled>Info</el-button>

      <el-button type="warning" disabled>Warning</el-button>

      <el-button type="danger" disabled>Danger</el-button>

    </div>

    <div class="button-row">

      <el-button plain disabled>Plain</el-button>

      <el-button type="primary" plain disabled>Primary</el-button>

      <el-button type="success" plain disabled>Success</el-button>

      <el-button type="info" plain disabled>Info</el-button>

      <el-button type="warning" plain disabled>Warning</el-button>

      <el-button type="danger" plain disabled>Danger</el-button>

    </div>

  </div>

</template>

<style scoped>

.button-example {

  display: flex;

  flex-direction: column;

  gap: 1rem;

}

.button-row {

  display: flex;

  flex-wrap: wrap;

  gap: 1rem;

  align-items: center;

}

.button-row > * {

  margin: 0;

}

</style>
```

## 链接按钮

> **WARNING**

> `type="text"` 已被 **废弃**，将于版本 3.0.0 时 **移除**，请考虑切换至新的 API。

> 新的 API `link` 于 2.2.1 版本时添加，你可以使用 `type` API 设置链接按钮的主题样式

```vue
<template>

  <p>Basic link button</p>

  <div class="mb-4">

    <el-button

      v-for="button in buttons"

      :key="button.text"

      :type="button.type"

      link

    >

      {{ button.text }}

    </el-button>

  </div>

  <p>Disabled link button</p>

  <div>

    <el-button

      v-for="button in buttons"

      :key="button.text"

      :type="button.type"

      link

      disabled

    >

      {{ button.text }}

    </el-button>

  </div>

</template>

<script setup lang="ts">

const buttons = [

  { type: '', text: 'plain' },

  { type: 'primary', text: 'primary' },

  { type: 'success', text: 'success' },

  { type: 'info', text: 'info' },

  { type: 'warning', text: 'warning' },

  { type: 'danger', text: 'danger' },

] as const

</script>
```

## 文字按钮

> **TIP**

> 文字按钮在现在有了全新的设计样式。 2.2.0 如果您想要使用老版样式的按钮，可以考虑使用 [Link](./link#basic) 组件。

> API也已更新，由于 `type` 属性会同时控制按钮的样式，因此我们通过一个新的 API `text: boolean` 来控制文字按钮。

没有边框和背景色的按钮。

```vue
<template>

  <p>Basic text button</p>

  <div class="mb-4">

    <el-button

      v-for="button in buttons"

      :key="button.text"

      :type="button.type"

      text

    >

      {{ button.text }}

    </el-button>

  </div>

  <p>Background color always on</p>

  <div class="mb-4">

    <el-button

      v-for="button in buttons"

      :key="button.text"

      :type="button.type"

      text

      bg

    >

      {{ button.text }}

    </el-button>

  </div>

  <p>Disabled text button</p>

  <div>

    <el-button

      v-for="button in buttons"

      :key="button.text"

      :type="button.type"

      text

      disabled

    >

      {{ button.text }}

    </el-button>

  </div>

</template>

<script setup lang="ts">

const buttons = [

  { type: '', text: 'plain' },

  { type: 'primary', text: 'primary' },

  { type: 'success', text: 'success' },

  { type: 'info', text: 'info' },

  { type: 'warning', text: 'warning' },

  { type: 'danger', text: 'danger' },

] as const

</script>
```

## 图标按钮

使用图标为按钮添加更多的含义。你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。您可以在我们的 Icon 组件中找到所需图标。通过向右方添加`<i>`标签来添加图标，你也可以使用自定义图标。

```vue
<template>

  <div>

    <el-button type="primary" :icon="Edit" />

    <el-button type="primary" :icon="Share" />

    <el-button type="primary" :icon="Delete" />

    <el-button type="primary" :icon="Search">Search</el-button>

    <el-button type="primary">

      Upload<el-icon class="el-icon--right"><Upload /></el-icon>

    </el-button>

  </div>

</template>

<script setup lang="ts">

import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

</script>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

在 2.11.9 中，您可以使用 `direction` 属性。

使用 `<el-button-group>` 对多个按钮分组。

```vue
<template>

  <el-button-group class="mb-4">

    <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>

    <el-button type="primary">

      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>

    </el-button>

  </el-button-group>

  <br />

  <el-radio-group v-model="direction" class="mb-2">

    <el-radio value="horizontal">Horizontal</el-radio>

    <el-radio value="vertical">Vertical</el-radio>

  </el-radio-group>

  <br />

  <el-button-group :direction="direction">

    <el-button type="primary" :icon="House" />

    <el-button type="primary" :icon="Operation" />

    <el-button type="primary" :icon="Notification" />

  </el-button-group>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import {

  ArrowLeft,

  ArrowRight,

  House,

  Notification,

  Operation,

} from '@element-plus/icons-vue'

const direction = ref<'horizontal' | 'vertical'>('horizontal')

</script>
```

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

> **TIP**

> 您可以使用 `loading` 插槽或 `loadingIcon`属性自定义您的loading图标

> ps: `loading` 插槽优先级高于`loadingIcon`属性

```vue
<template>

  <el-button type="primary" loading>Loading</el-button>

  <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>

  <el-button type="primary" loading>

    <template #loading>

      <div class="custom-loading">

        <svg class="circular" viewBox="-10, -10, 50, 50">

          <path

            class="path"

            d="

            M 30 15

            L 28 17

            M 25.61 25.61

            A 15 15, 0, 0, 1, 15 30

            A 15 15, 0, 1, 1, 27.99 7.5

            L 15 15

          "

            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"

          />

        </svg>

      </div>

    </template>

    Loading

  </el-button>

</template>

<script lang="ts" setup>

import { Eleme } from '@element-plus/icons-vue'

</script>

<style scoped>

.el-button .custom-loading .circular {

  margin-right: 6px;

  width: 18px;

  height: 18px;

  animation: loading-rotate 2s linear infinite;

}

.el-button .custom-loading .circular .path {

  animation: loading-dash 1.5s ease-in-out infinite;

  stroke-dasharray: 90, 150;

  stroke-dashoffset: 0;

  stroke-width: 2;

  stroke: var(--el-button-text-color);

  stroke-linecap: round;

}

</style>
```

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

```vue
<template>

  <div class="flex flex-wrap items-center mb-4">

    <el-button size="large">Large</el-button>

    <el-button>Default</el-button>

    <el-button size="small">Small</el-button>

    <el-button size="large" :icon="Search">Search</el-button>

    <el-button :icon="Search">Search</el-button>

    <el-button size="small" :icon="Search">Search</el-button>

  </div>

  <div class="flex flex-wrap items-center mb-4">

    <el-button size="large" round>Large</el-button>

    <el-button round>Default</el-button>

    <el-button size="small" round>Small</el-button>

    <el-button size="large" :icon="Search" round>Search</el-button>

    <el-button :icon="Search" round>Search</el-button>

    <el-button size="small" :icon="Search" round>Search</el-button>

  </div>

  <div class="flex flex-wrap items-center">

    <el-button :icon="Search" size="large" circle />

    <el-button :icon="Search" circle />

    <el-button :icon="Search" size="small" circle />

  </div>

</template>

<script setup lang="ts">

import { Search } from '@element-plus/icons-vue'

</script>
```

## Tag 2.3.4

您可以自定义元素标签。例如，按钮，div，路由链接，nuxt链接。

```vue
<template>

  <el-button>button</el-button>

  <el-button tag="div" role="button" tabindex="0">div</el-button>

  <el-button

    type="primary"

    tag="a"

    href="https://github.com/element-plus/element-plus"

    target="_blank"

    rel="noopener noreferrer"

  >

    a

  </el-button>

</template>
```

## 自定义颜色 beta

您可以自定义按钮的颜色。

我们将自动计算按钮处于 hover 和 active 状态时的颜色。

自 2.13.7 起，`color` 属性也适用于 `link` 和 `text` 按钮。

```vue
<script lang="ts" setup>

import { isDark } from '~/composables/dark'

</script>

<template>

  <div>

    <el-button color="#626aef" :dark="isDark">Default</el-button>

    <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

    <el-button color="#626aef" :dark="isDark" link>Link</el-button>

    <el-button color="#626aef" :dark="isDark" text>Text</el-button>

    <el-button color="#626aef" :dark="isDark" text bg>Text BG</el-button>

    <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>

    <el-button color="#626aef" :dark="isDark" disabled plain>

      Disabled Plain

    </el-button>

    <el-button color="#626aef" :dark="isDark" disabled link>

      Disabled Link

    </el-button>

    <el-button color="#626aef" :dark="isDark" disabled text>

      Disabled Text

    </el-button>

    <el-button color="#626aef" :dark="isDark" disabled text bg>

      Disabled Text BG

    </el-button>

  </div>

</template>
```

## Button API

### Button Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| size | 尺寸 | `enum` | — |
| type | 按钮类型，在设置`color`时，后者优先。 | `enum` | — |
| plain | 是否为朴素按钮 | `boolean` | false |
| text 2.2.0 | 是否为文字按钮 | `boolean` | false |
| bg 2.2.0 | 是否显示文字按钮背景颜色 | `boolean` | false |
| link 2.2.1 | 是否为链接按钮 | `boolean` | false |
| round | 是否为圆角按钮 | `boolean` | false |
| circle | 是否为圆形按钮 | `boolean` | false |
| dashed 2.13.3 | 是否是虚线按钮 | `boolean` | false |
| loading | 是否为加载中状态 | `boolean` | false |
| loading-icon | 自定义加载中状态图标组件 | `string` / `Component` | Loading |
| disabled | 按钮是否为禁用状态 | `boolean` | false |
| icon | 图标组件 | `string` / `Component` | — |
| autofocus | 原生 `autofocus` 属性 | `boolean` | false |
| native-type | 原生 type 属性 | `enum` | button |
| auto-insert-space | 两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效) | `boolean` | false |
| color | 自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色自 2.13.7 起，支持 `link`/`text` 按钮。 | `string` | — |
| dark | dark 模式, 意味着自动设置 `color` 为 dark 模式的颜色 | `boolean` | false |
| tag 2.3.4 | 自定义元素标签 | `string` / `Component` | button |

### Button Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |
| loading | 自定义加载中组件 |
| icon | 自定义图标组件 |

### Button Exposes

| 属性名 | 说明 | 类型 |
|---|---|---|
| ref | 按钮 html 元素 | `object` |
| size | 按钮尺寸 | `object` |
| type | 按钮类型 | `object` |
| disabled | 按钮已禁用 | `object` |
| shouldAddSpace | 是否在两个字符之间插入空格 | `object` |

## ButtonGroup API

### ButtonGroup Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| size | 用于控制该按钮组内按钮的大小 | `enum` | — |
| type | 用于控制该按钮组内按钮的类型 | `enum` | — |
| direction 2.11.9 | 展示的方向 | `enum` | horizontal |

### ButtonGroup Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义按钮组内容 | Button |