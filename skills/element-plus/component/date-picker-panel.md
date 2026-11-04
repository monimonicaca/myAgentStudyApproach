# DatePickerPane 日期选择器面板 beta

`DatePickerPanel`是`DatePicker`的核心组件。

## 选择某一天

以”日“为基本单位，基础的日期选择控件

```vue
<template>

  <div class="flex justify-center">

    <el-date-picker-panel v-model="value" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref()

</script>
```

## 边框

默认情况下，边框是默认的，如果你不想要边框请参考示例。例如，`DatePicker`不继承`border`。

```vue
<template>

  <div

    ref="containerRef"

    :class="['date-picker--example', { 'is-narrow': isNarrow }]"

  >

    <div class="text-center">No border:</div>

    <el-divider />

    <div class="date-picker--flex-container">

      <div class="p-[20px]">

        <el-date-picker-panel v-model="value" :border="false" />

      </div>

      <el-divider

        class="divider"

        :direction="isNarrow ? 'horizontal' : 'vertical'"

      />

      <el-card>

        <el-date-picker-panel v-model="value" :border="false" />

      </el-card>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

import { useElementSize } from '@vueuse/core'

const value = ref()

const containerRef = ref<HTMLElement>()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)

</script>

<style scoped>

.date-picker--flex-container {

  display: flex;

  flex-wrap: wrap;

  gap: 16px;

  justify-content: center;

}

.divider {

  height: auto;

}

</style>
```

## 禁用

"禁用"属性决定日期选择器是否完全禁用。

```vue
<template>

  <div class="flex flex-col items-center">

    <el-switch

      v-model="disabled"

      active-text="Disabled"

      inactive-text="Enabled"

    />

    <el-date-picker-panel v-model="value" :disabled="disabled" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref()

const disabled = ref(true)

</script>
```

## 展示类型

时间面板的类型由 `type` 属性指定。

```vue
<template>

  <div>

    <div class="flex gap-4">

      <div class="flex flex-col basis-150px gap-1">

        <span>Type:</span>

        <el-select v-model="type">

          <el-option

            v-for="optionType in types"

            :key="optionType"

            :value="optionType"

          />

        </el-select>

      </div>

    </div>

    <el-divider />

    <div class="flex justify-center">

      <el-date-picker-panel v-model="date" :type="type" />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref, watch } from 'vue'

import type { DatePickerType } from 'element-plus'

const date = ref()

const type = ref<DatePickerType>('date')

watch(type, () => {

  date.value = undefined

})

const types: DatePickerType[] = [

  'year',

  'years',

  'month',

  'months',

  'date',

  'dates',

  'week',

  'quarter',

  'quarters',

  'quarterrange',

  'datetime',

  'datetimerange',

  'daterange',

  'monthrange',

  'yearrange',

]

</script>
```

## 本地化

由于 Element Plus 的默认语言为英语，如果你需要设置其它的语言，请参考[国际化](/zh-CN/guide/i18n)文档。

要注意的是：日期相关的文字（月份，每一周的第一天等等）也都进行了本地化配置。

## 应用开发接口（API）

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 绑定值，如果是 `range` 选择器，数组长度应为 2 | `number` / `string` / `Date` / `array` | '' |
| border | 日期选择器是否有边框 | `boolean` | true |
| disabled | 禁用 | `boolean` | false |
| clearable | 是否显示清除按钮 | `boolean` | true |
| editable 2.13.0 | 文本框可输入 | `boolean` | true |
| type | type of the picker. `quarter`, `quarters`, and `quarterrange` are supported since 2.14.5 | `enum` | date |
| default-value | 可选，选择器打开时默认显示的时间 | `object` | — |
| default-time | 范围选择时选中日期所使用的当日内具体时刻 | `object` | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | `string` | — |
| date-format | 可选，输入框内部面板中显示的日期格式 | `string` see [date formats](https://day.js.org/docs/en/display/format) | YYYY-MM-DD |
| time-format | 可选，输入框内部面板中显示的时间格式 | `string` see [date formats](https://day.js.org/docs/en/display/format) | HH:mm:ss |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | `boolean` | false |
| single-panel 2.14.0 | 在范围选择器中只显示一个面板 | `boolean` | false |
| disabled-date | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。应该返回一个 Boolean 值。 | `Function` | — |
| shortcuts | 设置快捷选项，需要传入数组对象 | `array` | [] |
| cell-class-name | 设置自定义类名 | `Function` | — |
| show-footer | whether to show footer where the date picker is one `enum` | `boolean` | false |
| show-confirm | 是否显示确定按钮 | `boolean` | false |
| show-week-number | 显示周数(除周外) | `boolean` | false |

### Events

| 名称 | 详情 | 类型 |
|---|---|---|
| calendar-change | 在日历所选日期更改时触发仅限“range”类型。 | `Function` |
| panel-change | 当日期面板改变时触发。 | `Function` |
| clear 2.13.1 | 当点击清除按钮时触发 | `Function` |

### 插槽

| 名称 | 详情 |
|---|---|
| default | 自定义单元格内容 |
| prev-month | 上个月的图标 |
| next-month | 下个月的图标 |
| prev-year | 上一年图标 |
| next-year | 下一年图标 |