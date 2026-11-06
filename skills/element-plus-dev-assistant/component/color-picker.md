# ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

## 基础用法

使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。

```vue
<template>

  <div class="demo-color-block">

    <span class="demonstration">With default value</span>

    <el-color-picker v-model="color1" />

  </div>

  <div class="demo-color-block">

    <span class="demonstration">With no default value</span>

    <el-color-picker v-model="color2" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color1 = ref('#409EFF')

const color2 = ref()

</script>

<style>

.demo-color-block {

  display: flex;

  align-items: center;

  margin-bottom: 16px;

}

.demo-color-block .demonstration {

  margin-right: 16px;

}

</style>
```

## 选择透明度

ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过`show-alpha`属性即可控制是否支持透明度的选择。要启用 Alpha 选择，只需添加 `show-alpha` 属性。

```vue
<template>

  <el-color-picker v-model="color" show-alpha />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('rgba(19, 206, 102, 0.8)')

</script>
```

## 预定义颜色

ColorPicker 支持预定义颜色

```vue
<template>

  <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('rgba(255, 69, 0, 0.68)')

const predefineColors = ref([

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

])

</script>
```

## 不同尺寸

```vue
<template>

  <div class="demo-color-sizes">

    <el-color-picker v-model="color" size="large" />

    <el-color-picker v-model="color" />

    <el-color-picker v-model="color" size="small" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const color = ref('#409EFF')

</script>

<style>

.demo-color-sizes .el-color-picker:not(:last-child) {

  margin-right: 16px;

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string` | — |
| disabled | 是否禁用 | `boolean` | false |
| clearable 2.13.1 | 文本框可输入 | `boolean` | true |
| size | 尺寸 | `enum` | — |
| show-alpha | 是否支持透明度选择 | `boolean` | false |
| color-format | 写入 v-model 的颜色的格式 | `enum` | `enum` |
| popper-class | ColorPicker 下拉框的类名 | `string` / `object` | '' |
| popper-style 2.11.4 | ColorPicker 下拉面板的自定义样式 | `string` / `object` | — |
| predefine | 预定义颜色 | `array` | — |
| validate-event | 输入时是否触发表单的校验 | `boolean` | true |
| tabindex | ColorPicker 的 tabindex | `string` / `number` | 0 |
| aria-label a11y 2.7.2 | ColorPicker 的 aria-label | `string` | — |
| empty-values 2.10.3 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.10.3 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| id | ColorPicker 的 id | `string` | — |
| teleported 2.7.2 | 是否将 popover 的下拉列表渲染至 body 下 | `boolean` | true |
| label a11y deprecated | ColorPicker 的 aria-label | `string` | — |
| persistent 2.10.5 | 当颜色选择器未激活且 persistent 为 false 时，颜色面板将被销毁。 | `boolean` | true |
| append-to 2.10.5 | 挂载到哪个 DOM 元素 | `CSSSelector` / `HTMLElement` | - |

### Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 当绑定值变化时触发 | `Function` |
| active-change | 面板中当前显示的颜色发生改变时触发 | `Function` |
| focus 2.4.0 | 当获得焦点时触发 | `Function` |
| blur 2.4.0 | 当失去焦点时触发 | `Function` |
| clear 2.13.1 | 当点击清除按钮时触发 | `Function` |

### Exposes

| 名称 | 说明 | 类型 |
|---|---|---|
| color | 当前色彩对象 | `object` |
| show 2.3.3 | 手动显示颜色选择器 | `Function` |
| hide 2.3.3 | 手动隐藏颜色选择器 | `Function` |
| focus 2.3.13 | 使 picker 获得焦点 | `Function` |
| blur 2.3.13 | 使 picker 失去焦点 | `Function` |