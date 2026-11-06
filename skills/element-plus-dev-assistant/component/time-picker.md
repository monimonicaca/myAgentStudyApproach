# TimePicker 时间选择器

用于选择或输入日期

## 任意时间点

可以选择任意时间

提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。

```vue
<template>

  <div class="example-basic">

    <el-time-picker v-model="value1" placeholder="Arbitrary time" />

    <el-time-picker

      v-model="value2"

      arrow-control

      placeholder="Arbitrary time"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref()

const value2 = ref()

</script>

<style>

.example-basic .el-date-editor {

  margin: 8px;

}

</style>
```

## 限制时间选择范围

您也可以限制时间选择范围。

通过 `disabledHours`，`disabledMinutes` 和 `disabledSeconds` 限制可选时间范围。,

```vue
<template>

  <div class="example-basic">

    <el-time-picker

      v-model="value1"

      :disabled-hours="disabledHours"

      :disabled-minutes="disabledMinutes"

      :disabled-seconds="disabledSeconds"

      placeholder="Arbitrary time"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref(new Date(2016, 9, 10, 18, 30))

const makeRange = (start: number, end: number) => {

  const result: number[] = []

  for (let i = start; i <= end; i++) {

    result.push(i)

  }

  return result

}

const disabledHours = () => {

  return makeRange(0, 16).concat(makeRange(19, 23))

}

const disabledMinutes = (hour: number) => {

  if (hour === 17) {

    return makeRange(0, 29)

  }

  if (hour === 18) {

    return makeRange(31, 59)

  }

  return []

}

const disabledSeconds = (hour: number, minute: number) => {

  if (hour === 18 && minute === 30) {

    return makeRange(1, 59)

  }

  return []

}

</script>

<style>

.example-basic .el-date-editor {

  margin: 8px;

}

</style>
```

## 任意时间范围

可选择任意的时间范围

添加`is-range`属性即可选择时间范围。同样支持 `arrow-control` 属性。

```vue
<template>

  <div class="demo-range">

    <el-time-picker

      v-model="value1"

      is-range

      range-separator="To"

      start-placeholder="Start time"

      end-placeholder="End time"

    />

    <el-time-picker

      v-model="value2"

      is-range

      arrow-control

      range-separator="To"

      start-placeholder="Start time"

      end-placeholder="End time"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref<[Date, Date]>([

  new Date(2016, 9, 10, 8, 40),

  new Date(2016, 9, 10, 9, 40),

])

const value2 = ref<[Date, Date]>([

  new Date(2016, 9, 10, 8, 40),

  new Date(2016, 9, 10, 9, 40),

])

</script>

<style>

.demo-range .el-date-editor {

  margin: 8px;

}

.demo-range .el-range-separator {

  box-sizing: content-box;

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| model-value / v-model | 绑定值，如果它是数组，长度应该是 2 | `number` / `string` / `object` | '' |
| readonly | 完全只读 | `boolean` | false |
| disabled | 禁用 | `boolean` | false |
| editable | 文本框可输入 | `boolean` | true |
| clearable | 是否显示清除按钮 | `boolean` | true |
| size | 输入框尺寸 | `enum` | — |
| placeholder | 非范围选择时的占位内容 | `string` | '' |
| start-placeholder | 范围选择时开始日期的占位内容 | `string` | — |
| end-placeholder | 范围选择时结束日期的占位内容 | `string` | — |
| is-range | 是否为时间范围选择 | `boolean` | false |
| arrow-control | 是否使用箭头进行时间选择 | `boolean` | false |
| popper-class | TimePicker 下拉框的类名 | `string` | '' |
| popper-style | 为 TimePicke 的下拉菜单自定义样式 | `string` / `object` | — |
| popper-options | 自定义 popper 选项，更多请参考 [popper.js](https://popper.js.org/docs/v2/) | `object` | {} |
| fallback-placements 2.8.4 | Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | ['bottom', 'top', 'right', 'left'] |
| placement 2.8.4 | 下拉框出现的位置 | `展示位置` | bottom |
| range-separator | 选择范围时的分隔符 | `string` | '-' |
| format | 显示在输入框中的格式 | `string` 参考 [日期格式](./date-picker#date-formats) | — |
| default-value | 可选，选择器打开时默认显示的时间 | `Date` / `array` | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | `string` 参考 [日期格式](./date-picker#date-formats) | — |
| id | 等价于原生 input `id` 属性 | `string` / `array` | — |
| name | 等价于原生 input `name` 属性 | `string` | '' |
| aria-label a11y 2.7.2 | 等价于原生 input `aria-label` 属性 | `string` | — |
| prefix-icon | 自定义前缀图标 | `string` / `Component` | Clock |
| clear-icon | 自定义清除图标 | `string` / `Component` | CircleClose |
| disabled-hours | 禁止选择部分小时选项 | `Function` | — |
| disabled-minutes | 禁止选择部分分钟选项 | `Function` | — |
| disabled-seconds | 禁止选择部分秒选项 | `Function` | — |
| teleported | 是否将 popover 的下拉列表镜像至 body 元素 | `boolean` | true |
| tabindex | 输入框的 tabindex | `string` / `number` | 0 |
| empty-values 2.7.0 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.7.0 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| save-on-blur 2.13.4 | 当未选择任何值时，是否在获得焦点时自动填充为当前时间。 | `boolean` | true |
| label a11y deprecated | 等价于原生 input `aria-label` 属性 | `string` | — |

### 事件

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 用户确认选定的值时触发 | `Function` |
| blur | 在组件 Input 失去焦点时触发 | `Function` |
| focus | 在组件 Input 获得焦点时触发 | `Function` |
| clear 2.7.7 | 可清空的模式下用户点击清空按钮时触发 | `Function` |
| visible-change | 当 TimePicker 的下拉列表出现/消失时触发 | `Function` |

### 暴露

| 名称 | 说明 | Type |
|---|---|---|
| focus | 使组件获取焦点 | `Function` |
| blur | 使组件失去焦点 | `Function` |
| handleOpen 2.2.16 | 打开时间选择器弹窗 | `Function` |
| handleClose 2.2.16 | 关闭时间选择器弹窗 | `Function` |

## Type Declarations

Show declarationsts`type Placement =

  | 'top'

  | 'top-start'

  | 'top-end'

  | 'bottom'

  | 'bottom-start'

  | 'bottom-end'

  | 'left'

  | 'left-start'

  | 'left-end'

  | 'right'

  | 'right-start'

  | 'right-end'`