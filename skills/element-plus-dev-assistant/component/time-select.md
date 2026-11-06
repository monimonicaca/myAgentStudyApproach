# TimeSelect 时间选择

用于选择或输入日期

可用时间范围是 00:00-23:59

## 固定时间点

提供几个固定的时间点供用户选择

使用 `el-time-select` 标签，然后通过`start`、`end`和`step`指定起始时间，结束时间和步长。

```vue
<template>

  <el-time-select

    v-model="value"

    style="width: 240px"

    start="08:30"

    step="00:15"

    end="18:30"

    placeholder="Select time"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('')

</script>
```

## 时间格式

使用 `format` 属性来控制时间格式 (小时以及分钟)。

在 [这里](https://day.js.org/docs/zh-CN/display/format) 查看 Day.js 支持的 format 参数。

> **WARNING**

> 请一定要注意传入参数的大小写是否正确

```vue
<template>

  <el-time-select

    v-model="value"

    style="width: 240px"

    start="00:00"

    step="00:30"

    end="23:59"

    placeholder="Select time"

    format="hh:mm A"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('')

</script>
```

## 固定时间范围

如果先选中了开始（或结束）时间，则结束（或开始）时间的状态也将会随之改变。

```vue
<template>

  <div class="demo-time-range flex flex-wrap gap-4">

    <el-time-select

      v-model="startTime"

      style="width: 240px"

      :max-time="endTime"

      placeholder="Start time"

      start="08:30"

      step="00:15"

      end="18:30"

    />

    <el-time-select

      v-model="endTime"

      style="width: 240px"

      :min-time="startTime"

      placeholder="End time"

      start="08:30"

      step="00:15"

      end="18:30"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const startTime = ref('')

const endTime = ref('')

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string` | — |
| disabled | 禁用状态 | `boolean` | false |
| editable | 文本框可输入 | `boolean` | true |
| clearable | 是否显示清除按钮 | `boolean` | true |
| include-end-time 2.9.3 | 是否在选项中包含`end` | `boolean` | false |
| size | 输入框尺寸 | `enum` | default |
| placeholder | 非范围选择时的占位内容 | `string` | — |
| name 2.13.3 | 原生属性 | `string` | — |
| effect | Tooltip 主题，内置了 `dark` / `light` 两种主题 | `string` / `enum` | light |
| prefix-icon | 自定义前缀图标 | `string` / `Component` | Clock |
| clear-icon | 自定义清除图标 | `string` / `Component` | CircleClose |
| start | 开始时间 | `string` | 09:00 |
| end | 结束时间 | `string` | 18:00 |
| step | 间隔时间 | `string` | 00:30 |
| min-time | 最早时间点，早于该时间的时间段将被禁用 | `string` | — |
| max-time | 最晚时间点，晚于该时间的时间段将被禁用 | `string` | — |
| format | 设置时间格式 | `string` see [formats](https://day.js.org/docs/en/display/format#list-of-all-available-formats) | HH:mm |
| empty-values 2.7.0 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.7.0 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| popper-class 2.11.4 | 为 TimeSelect 下拉面板设置自定义类名 | `string` | '' |
| popper-style 2.11.4 | 为 TimeSelect 下拉面板设置自定义样式 | `string` / `object` | — |

### Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 用户确认选定的值时触发 | `Function` |
| blur | 在组件 Input 失去焦点时触发 | `Function` |
| focus | 在组件 Input 获得焦点时触发 | `Function` |
| clear 2.7.7 | 可清空的单选模式下用户点击清空按钮时触发 | `Function` |

### Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| focus | 使 input 获取焦点 | `Function` |
| blur | 使 input 失去焦点 | `Function` |