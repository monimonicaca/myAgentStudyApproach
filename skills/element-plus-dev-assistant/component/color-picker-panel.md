# ColorPickerPanel 颜色选择器面板 beta

`ColorPickerPanel`是`ColorPicker`的核心组件。

## 基础用法

ColorPickerPanel 需要一个字符串类型的变量才能绑定到 v-model。

```vue
<template>

  <el-color-picker-panel v-model="color" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('#409EFF')

</script>
```

## 选择透明度

ColorPickerPanel 支持Alpha 通道选择。要激活 Alpha 选择，只需添加 "show-alpha" 属性。

```vue
<template>

  <el-color-picker-panel v-model="color" show-alpha />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')

</script>
```

## 预定义颜色

颜色选择板支持预定义的颜色选项

```vue
<template>

  <el-color-picker-panel

    v-model="color"

    show-alpha

    :predefine="predefineColors"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')

const predefineColors = [

  '#ff4500',

  '#ff8c00',

  '#ffd700',

  '#90ee90',

  '#00ced1',

  '#1e90ff',

  '#c71585',

  'rgba(255, 69, 0, 0.68)',

  'rgb(255, 120, 0)',

  'hsv(51, 100, 98)',

  'hsva(120, 40, 94, 0.5)',

  'hsl(181, 100%, 37%)',

  'hsla(209, 100%, 56%, 0.73)',

  '#c7158577',

]

</script>
```

## Border 边框

默认情况下，边框是默认的，如果你不想要边框请参考示例。

```vue
<template>

  <div ref="containerRef">

    <div class="text-center">No border:</div>

    <el-divider />

    <div class="flex flex-wrap justify-center gap-4">

      <div class="p-5">

        <el-color-picker-panel v-model="value" :border="false" />

      </div>

      <el-divider

        class="h-auto"

        :direction="isNarrow ? 'horizontal' : 'vertical'"

      />

      <el-card>

        <el-color-picker-panel v-model="value" :border="false" />

      </el-card>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

import { useElementSize } from '@vueuse/core'

const value = ref('#ff6900')

const containerRef = ref<HTMLElement>()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)

</script>
```

## 禁用

"禁用"属性决定颜色选择器是否完全禁用。

```vue
<template>

  <el-color-picker-panel

    v-model="color"

    disabled

    show-alpha

    :predefine="predefineColors"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('#ff6900')

const predefineColors = [

  '#ff4500',

  '#ff8c00',

  '#ffd700',

  '#90ee90',

  '#00ced1',

  '#1e90ff',

  '#c71585',

]

</script>
```

## API

### 属性

| 方法名 | 详情 | 事件参数 | 默认值 |
|---|---|---|---|
| model-value / v-model | 绑定值 | `string` | — |
| border | 颜色选择器面板是否有边框 | `boolean` | true |
| disabled | 是否禁用 | `boolean` | false |
| show-alpha | 是否显示 alpha 滑块 | `boolean` | false |
| color-format | 写入 v-model 的颜色的格式 | `enum` | `enum` |
| predefine | 预定义颜色 | `array` | — |
| validate-event 2.11.7 | 是否触发表单验证 | `boolean` | true |
| hue-slider-class 2.13.6 | 类名将会传递给 hue-slider | `object` | ::: |
| hue-slider-style 2.13.6 | 样式将会传递给 hue-slider | `string` / `object` | ::: |

### 插槽

| 方法名 | 详情 |
|---|---|
| footer | 输入框之后要附加的内容 |

### 对外暴露的方法

| 方法名 | 详情 | 事件参数 |
|---|---|---|
| color | 当前色彩对象 | `object` |
| inputRef | 自定义 input ref | `object` |
| update 2.11.4 | 更新子组件 | `Function` |