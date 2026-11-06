# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色。

```vue
<template>

  <el-switch v-model="value1" />

  <el-switch

    v-model="value2"

    class="ml-2"

    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(true)

const value2 = ref(true)

</script>
```

## 尺寸

```vue
<template>

  <el-switch

    v-model="value"

    size="large"

    active-text="Open"

    inactive-text="Close"

  />

  <br />

  <el-switch v-model="value" active-text="Open" inactive-text="Close" />

  <br />

  <el-switch

    v-model="value"

    size="small"

    active-text="Open"

    inactive-text="Close"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref(true)

</script>
```

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。使用 `inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。

```vue
<template>

  <el-switch

    v-model="value1"

    class="mb-2"

    active-text="Pay by month"

    inactive-text="Pay by year"

  />

  <br />

  <el-switch

    v-model="value2"

    class="mb-2"

    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

    active-text="Pay by month"

    inactive-text="Pay by year"

  />

  <br />

  <el-switch

    v-model="value3"

    inline-prompt

    active-text="是"

    inactive-text="否"

  />

  <el-switch

    v-model="value4"

    class="ml-2"

    inline-prompt

    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

    active-text="Y"

    inactive-text="N"

  />

  <el-switch

    v-model="value6"

    class="ml-2"

    width="60"

    inline-prompt

    active-text="超出省略"

    inactive-text="超出省略"

  />

  <el-switch

    v-model="value5"

    class="ml-2"

    inline-prompt

    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

    active-text="完整展示多个内容"

    inactive-text="多个内容"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(true)

const value2 = ref(true)

const value3 = ref(true)

const value4 = ref(true)

const value5 = ref(true)

const value6 = ref(true)

</script>
```

## 显示自定义图标

> **TIP**

> 使用 `inactive-icon` 和 `active-icon` 属性来添加图标。您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 Element Plus 提供了一套图标，你可以在 [icon](./icon) 找到它们。

使用 `inactive-icon` 和 `active-icon` 属性来添加图标。使用 `inline-prompt` 属性来控制图标显示在点内。

```vue
<template>

  <el-switch v-model="value1" :active-icon="Check" :inactive-icon="Close" />

  <br />

  <el-switch

    v-model="value2"

    class="mt-2"

    style="margin-left: 24px"

    inline-prompt

    :active-icon="Check"

    :inactive-icon="Close"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { Check, Close } from '@element-plus/icons-vue'

const value1 = ref(true)

const value2 = ref(true)

</script>
```

## 扩展的 value 类型

你可以设置 `active-value` 和 `inactive-value` 属性，它们接受 `Boolean`、`String` 或 `Number` 类型的值。

```vue
<template>

  <el-tooltip :content="'Switch value: ' + value" placement="top">

    <el-switch

      v-model="value"

      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"

      active-value="100"

      inactive-value="0"

    />

  </el-tooltip>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('100')

</script>
```

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```vue
<template>

  <el-switch v-model="value1" disabled />

  <el-switch v-model="value2" class="ml-2" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(true)

const value2 = ref(true)

</script>
```

## 加载状态

设置`loading`属性，接受一个`Boolean`，设置`true`即加载中状态。

```vue
<template>

  <el-switch v-model="value1" loading />

  <el-switch v-model="value2" loading class="ml-2" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(true)

const value2 = ref(false)

</script>
```

## 阻止切换

设置`beforeChange`属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。

```vue
<template>

  <el-switch

    v-model="value1"

    :loading="loading1"

    :before-change="beforeChange1"

  />

  <el-switch

    v-model="value2"

    class="ml-2"

    :loading="loading2"

    :before-change="beforeChange2"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ElMessage } from 'element-plus'

const value1 = ref(false)

const value2 = ref(false)

const loading1 = ref(false)

const loading2 = ref(false)

const beforeChange1 = (): Promise<boolean> => {

  loading1.value = true

  return new Promise((resolve) => {

    setTimeout(() => {

      loading1.value = false

      ElMessage.success('Switch success')

      return resolve(true)

    }, 1000)

  })

}

const beforeChange2 = (): Promise<boolean> => {

  loading2.value = true

  return new Promise((_, reject) => {

    setTimeout(() => {

      loading2.value = false

      ElMessage.error('Switch failed')

      return reject(new Error('Error'))

    }, 1000)

  })

}

</script>
```

## 自定义动作图标 2.3.9

使用 `inactive-action-icon` 和 `active-action-icon` 属性来添加图标。

```vue
<template>

  <el-switch

    v-model="value1"

    :active-action-icon="View"

    :inactive-action-icon="Hide"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { Hide, View } from '@element-plus/icons-vue'

const value1 = ref(true)

</script>
```

## 自定义操作图标 2.4.4

使用 `active-action` 和 `inactive-action` 属性来添加图标。

```vue
<template>

  <el-switch v-model="value1">

    <template #active-action>

      <span class="custom-active-action">T</span>

    </template>

    <template #inactive-action>

      <span class="custom-inactive-action">F</span>

    </template>

  </el-switch>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const value1 = ref(true)

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | Default |
|---|---|---|---|
| model-value / v-model | 绑定值，必须等于 `active-value` 或 `inactive-value`，默认为 `Boolean` 类型 | `boolean` / `string` / `number` | false |
| disabled | 是否禁用 | `boolean` | false |
| loading | 是否显示加载中 | `boolean` | false |
| size | switch 的大小 | `enum` | '' |
| width | switch 的宽度 | `number` / `string` | '' |
| inline-prompt | 无论图标或文本是否显示在点内，只会呈现文本的第一个字符 | `boolean` | false |
| active-icon | switch 状态为 `on` 时所显示图标，设置此项会忽略 `active-text` | `string` / `Component` | — |
| inactive-icon | switch 状态为 `off` 时所显示图标，设置此项会忽略 `inactive-text` | `string` / `Component` | — |
| active-action-icon 2.3.9 | `on`状态下显示的图标组件 | `string` / `Component` | — |
| inactive-action-icon 2.3.9 | `off`状态下显示的图标组件 | `string` / `Component` | — |
| active-text | switch 打开时的文字描述 | `string` | '' |
| inactive-text | switch 的状态为 `off` 时的文字描述 | `string` | '' |
| active-value | switch 状态为 `on` 时的值 | `boolean` / `string` / `number` | true |
| inactive-value | switch的状态为 `off` 时的值 | `boolean` / `string` / `number` | false |
| name | switch 对应的 name 属性 | `string` | '' |
| validate-event | 是否触发表单验证 | `boolean` | true |
| before-change | switch 状态改变前的钩子，返回 `false` 或者返回 `Promise` 且被 reject 则停止切换 | `Function` | — |
| id | input 的 id | `string` | — |
| tabindex | input 的 tabindex | `string` / `number` | — |
| aria-label a11y 2.7.2 | 等价于原生 input `aria-label` 属性 | `string` | — |
| active-color deprecated | 当在 `on` 状态时的背景颜色(推荐使用 CSS var `--el-switch-on-color` ) | `string` | '' |
| inactive-color deprecated | `off` 状态时的背景颜色(推荐使用 CSS var `--el-switch-off-color` ) | `string` | '' |
| border-color deprecated | 开关的边框颜色 ( 推荐使用 CSS var `--el-switch-border-color` ) | `string` | '' |
| label a11y deprecated | 等价于原生 input `aria-label` 属性 | `string` | — |

### 事件

| 事件名 | 说明 | Type |
|---|---|---|
| change | switch 状态发生变化时的回调函数 | `Function` |

### Switch Slots

| 名称 | 说明 |
|---|---|
| active-action 2.4.4 | 自定义 active 行为 |
| inactive-action 2.4.4 | 自定义 inactive 行为 |
| active 2.13.0 | 自定义 on 状态的内容 |
| inactive 2.13.0 | 自定义 off 状态的内容 |

### Exposes

| 方法 | 详情 | Type |
|---|---|---|
| focus | 手动 focus 到 switch 组件 | `Function` |