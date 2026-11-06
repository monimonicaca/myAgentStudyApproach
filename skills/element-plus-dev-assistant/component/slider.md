# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

## 基础用法

在拖动滑块时，显示当前值

通过设置绑定值自定义滑块的初始值

```vue
<template>

  <div class="slider-demo-block">

    <span class="demonstration">Default value</span>

    <el-slider v-model="value1" />

  </div>

  <div class="slider-demo-block">

    <span class="demonstration">Customized initial value</span>

    <el-slider v-model="value2" />

  </div>

  <div class="slider-demo-block">

    <span class="demonstration">Hide Tooltip</span>

    <el-slider v-model="value3" :show-tooltip="false" />

  </div>

  <div class="slider-demo-block">

    <span class="demonstration">Format Tooltip</span>

    <el-slider v-model="value4" :format-tooltip="formatTooltip" />

  </div>

  <div class="slider-demo-block">

    <span class="demonstration">Disabled</span>

    <el-slider v-model="value5" disabled />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(0)

const value2 = ref(0)

const value3 = ref(0)

const value4 = ref(0)

const value5 = ref(0)

const formatTooltip = (val: number) => {

  return val / 100

}

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

.slider-demo-block .demonstration {

  font-size: 14px;

  color: var(--el-text-color-secondary);

  line-height: 44px;

  flex: 1;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  margin-bottom: 0;

}

.slider-demo-block .demonstration + .el-slider {

  flex: 0 0 70%;

}

</style>
```

## 离散值

选项可以是离散的

改变`step`的值可以改变步长，通过设置 `show-stops` 属性可以显示间断点

```vue
<template>

  <div class="slider-demo-block">

    <span class="demonstration">Breakpoints not displayed</span>

    <el-slider v-model="value1" :step="10" />

  </div>

  <div class="slider-demo-block">

    <span class="demonstration">Breakpoints displayed</span>

    <el-slider v-model="value2" :step="10" show-stops />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(0)

const value2 = ref(0)

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

.slider-demo-block .demonstration {

  font-size: 14px;

  color: var(--el-text-color-secondary);

  line-height: 44px;

  flex: 1;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  margin-bottom: 0;

}

.slider-demo-block .demonstration + .el-slider {

  flex: 0 0 70%;

}

</style>
```

## 带有输入框的滑块

通过输入框输入来改变当前的值。

设置 `show-input` 属性会在右侧显示一个输入框

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value" show-input />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref(0)

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

</style>
```

## 不同尺寸

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value" show-input size="large" />

    <el-slider v-model="value" show-input />

    <el-slider v-model="value" show-input size="small" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref(0)

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

}

.el-slider {

  margin-top: 20px;

}

.el-slider:first-child {

  margin-top: 0;

}

</style>
```

## 位置

您可以自定义 Tooltip 提示的位置。

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value1" />

  </div>

  <div class="slider-demo-block">

    <el-slider v-model="value2" placement="bottom" />

  </div>

  <div class="slider-demo-block">

    <el-slider v-model="value3" placement="right" />

  </div>

  <div class="slider-demo-block">

    <el-slider v-model="value4" placement="left" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(0)

const value2 = ref(0)

const value3 = ref(0)

const value4 = ref(0)

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

</style>
```

## 范围选择

你还可以选择一个范围值

配置 `range` 属性以激活范围选择模式，该属性的绑定值是一个数组，由最小边界值和最大边界值组成。

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value" range show-stops :max="10" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref([4, 8])

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

</style>
```

## 垂直模式

配置 `vertical` 属性为 `true` 启用垂直模式。在垂直模式下，必须设置 `height` 属性。

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value" vertical height="200px" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref(0)

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

</style>
```

## 显示标记

设置 `marks` 属性可以在滑块上显示标记。

```vue
<template>

  <div class="slider-demo-block">

    <el-slider v-model="value" range :marks="marks" />

  </div>

</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'

import type { CSSProperties } from 'vue'

interface Mark {

  style: CSSProperties

  label: string

}

type Marks = Record<number, Mark | string>

const value = ref([30, 60])

const marks = reactive<Marks>({

  0: '0°C',

  8: '8°C',

  37: '37°C',

  50: {

    style: {

      color: '#1989FA',

    },

    label: '50%',

  },

})

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

</style>
```

## 限制值 2.13.6

设置 `step="mark"` 以将滑块值限制为刻度。

```vue
<template>

  <div class="slider-demo-block">

    <el-slider

      v-model="value1"

      vertical

      height="200px"

      :marks="marks1"

      placement="right"

      :format-tooltip="(v) => `${v}°C`"

      step="mark"

    />

  </div>

  <div class="slider-demo-block">

    <el-slider v-model="value2" :marks="marks2" step="mark" />

  </div>

  <div class="slider-demo-block">

    <el-slider v-model="value3" range :marks="marks3" step="mark" />

  </div>

</template>

<script lang="ts" setup>

import { ref, shallowReactive } from 'vue'

import type { CSSProperties } from 'vue'

interface Mark {

  style: CSSProperties

  label: string

}

type Marks = Record<number, Mark | string>

const value1 = ref(37)

const marks1 = shallowReactive<Marks>({

  0: '0°C',

  37: '37°C',

  100: '100°C',

})

const value2 = ref(50)

const marks2 = shallowReactive<Marks>({

  0: '0cm',

  10: '10cm',

  25: '25cm',

  50: '50cm',

  75: '75cm',

  100: '100cm',

})

const value3 = ref([13, 42])

const marks3 = shallowReactive<Marks>({

  0: '0',

  13: '13',

  42: '42',

  58: '58',

  89: '89',

  100: '100',

})

</script>

<style scoped>

.slider-demo-block {

  max-width: 600px;

  display: flex;

  align-items: center;

}

.slider-demo-block .el-slider {

  margin-top: 0;

  margin-left: 12px;

}

.slider-demo-block + .slider-demo-block {

  margin-top: 20px;

}

</style>
```

## API

### 属性

| 属性名 | 描述 | 类型 | 默认 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `number` / `array` | 0 |
| min | 最小值 | `number` | 0 |
| max | 最大值 | `number` | 100 |
| disabled | 是否禁用 | `boolean` | false |
| step | 步长，可以是数字或 `'mark'` 2.13.6，用于将值限制为刻度。 当设置为 `'mark'` 时，必须设置 `marks` 属性。 | `number` / `string` | 1 |
| show-input | 是否显示输入框，仅在 `range` 为 false 且 `step` 不为 `'mark'` 时生效。 | `boolean` | false |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮 | `boolean` | true |
| size | slider 包装器的大小，垂直模式下该属性不可用 | `enum` | default |
| input-size | 输入框的大小，如果设置了 `size` 属性，默认值自动取 `size` | `enum` | default |
| show-stops | 是否显示间断点 | `boolean` | false |
| show-tooltip | 是否显示提示信息 | `boolean` | true |
| format-tooltip | 格式化提示信息 | `Function` | — |
| range | 是否开启选择范围 | `boolean` | false |
| vertical | 垂直模式 | `boolean` | false |
| height | 滑块高度，垂直模式必填 | `string` | — |
| aria-label a11y 2.7.2 | 原生 `aria-label`属性 | `string` | — |
| range-start-label | 当 `range` 为true时，屏幕阅读器标签开始的标记 | `string` | — |
| range-end-label | 当 `range` 为true时，屏幕阅读器标签结尾的标记 | `string` | — |
| format-value-text | 显示屏幕阅读器的 `aria-valuenow` 属性的格式 | `Function` | — |
| tooltip-class | tooltip 的自定义类名 | `string` | — |
| placement | Tooltip 出现的位置 | `enum` | top |
| marks | 标记， key 的类型必须为 `number` 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式 | `object` | — |
| validate-event | 输入时是否触发表单的校验 | `boolean` | true |
| persistent 2.9.5 | 当 slider 的 tooltip 处于非活动状态且 `persistent` 为 `false` 时，tooltip 将被销毁。当 `show-tooltip` 为 `false` 时，`persistent` 将始终为 `false`。 | `boolean` | true |
| label a11y deprecated | 原生 `aria-label`属性 | `string` | — |

### 事件

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发） | `Function` |
| input | 数据改变时触发（使用鼠标拖曳时，活动过程实时触发） | `Function` |

## 类型声明

显示类型声明ts`type SliderMarks = Record<number, string | { style: CSSProperties; label: any }>

type Arrayable<T> = T | T[]`