# DateTimePicker 日期时间选择器

在同一个选择器里选择日期和时间

> **TIP**

> 日期时间选择器来自日期选择器和时间选择器的组合。关于属性的更详细解释，请参阅日期选择器和时间选择器。

## 日期和时间点

通过设置`type`属性为`datetime`，即可在同一个选择器里同时进行日期和时间的选择。快捷方式的使用方法与 Date Picker 相同。

```vue
<template>

  <div class="demo-datetime-picker">

    <div class="block">

      <span class="demonstration">Default</span>

      <el-date-picker

        v-model="value1"

        type="datetime"

        placeholder="Select date and time"

      />

    </div>

    <div class="block">

      <span class="demonstration">With shortcuts</span>

      <el-date-picker

        v-model="value2"

        type="datetime"

        placeholder="Select date and time"

        :shortcuts="shortcuts"

      />

    </div>

    <div class="block">

      <span class="demonstration">With default time</span>

      <el-date-picker

        v-model="value3"

        type="datetime"

        placeholder="Select date and time"

        :default-time="defaultTime"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref('')

const value2 = ref('')

const value3 = ref('')

const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [

  {

    text: 'Today',

    value: new Date(),

  },

  {

    text: 'Yesterday',

    value: () => {

      const date = new Date()

      date.setDate(date.getDate() - 1)

      return date

    },

  },

  {

    text: 'A week ago',

    value: () => {

      const date = new Date()

      date.setDate(date.getDate() - 7)

      return date

    },

  },

]

</script>

<style scoped>

.demo-datetime-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

}

.demo-datetime-picker .block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  flex: 1;

  min-width: 300px;

}

.demo-datetime-picker .block:last-child {

  border-right: none;

}

.demo-datetime-picker .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

@media (max-width: 768px) {

  .demo-datetime-picker .block {

    flex: 100%;

    border-right: none;

    border-bottom: solid 1px var(--el-border-color);

  }

  .demo-datetime-picker .block:last-child {

    border-bottom: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## 日期时间格式

使用`format`指定输入框的格式。使用`value-format`指定绑定值的格式。

默认情况下，组件接受并返回`Date`对象。

在 [这里](https://day.js.org/docs/en/display/format#list-of-all-available-formats) 查看 Day.js 支持的所有格式。

> **WARNING**

> 请一定要注意传入参数的大小写是否正确

```vue
<template>

  <div class="demo-datetime-picker">

    <div class="block">

      <span class="demonstration">Emits Date object</span>

      <div class="demonstration">Value: {{ value1 }}</div>

      <el-date-picker

        v-model="value1"

        type="datetime"

        placeholder="Pick a Date"

        format="YYYY/MM/DD HH:mm:ss"

      />

    </div>

    <div class="block">

      <span class="demonstration">Use value-format</span>

      <div class="demonstration">Value：{{ value2 }}</div>

      <el-date-picker

        v-model="value2"

        type="datetime"

        placeholder="Pick a Date"

        format="YYYY/MM/DD hh:mm:ss"

        value-format="YYYY-MM-DD h:m:s a"

      />

    </div>

    <div class="block">

      <span class="demonstration">Timestamp</span>

      <div class="demonstration">Value：{{ value3 }}</div>

      <el-date-picker

        v-model="value3"

        type="datetime"

        placeholder="Pick a Date"

        format="YYYY/MM/DD hh:mm:ss"

        value-format="x"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref('')

const value2 = ref('')

const value3 = ref('')

</script>

<style scoped>

.demo-datetime-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

}

.demo-datetime-picker .block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  flex: 1;

  min-width: 300px;

}

.demo-datetime-picker .block:last-child {

  border-right: none;

}

.demo-datetime-picker .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

@media (max-width: 768px) {

  .demo-datetime-picker .block {

    flex: 100%;

    border-right: none;

    border-bottom: solid 1px var(--el-border-color);

  }

  .demo-datetime-picker .block:last-child {

    border-bottom: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## 下拉列表中的日期和时间格式

使用 `date-format` 和 `time-format` 控制下拉列表面板输入框中显示的文本格式

```vue
<template>

  <div class="demo-datetime-picker">

    <div class="block">

      <el-date-picker

        v-model="value1"

        type="datetime"

        placeholder="Pick a Date"

        format="YYYY-MM-DD HH:mm:ss"

        date-format="MMM DD, YYYY"

        time-format="HH:mm"

      />

    </div>

    <div class="line" />

    <div class="block">

      <el-date-picker

        v-model="value2"

        type="datetimerange"

        start-placeholder="Start date"

        end-placeholder="End date"

        format="YYYY-MM-DD HH:mm:ss"

        date-format="YYYY/MM/DD ddd"

        time-format="A hh:mm:ss"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref('')

const value2 = ref('')

</script>

<style scoped>

.demo-datetime-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

  justify-content: space-around;

  align-items: stretch;

}

.demo-datetime-picker .block {

  padding: 30px 0;

  text-align: center;

  min-width: 300px;

  flex: 1;

}

.line {

  width: 1px;

  background-color: var(--el-border-color);

}

@media (max-width: 768px) {

  .demo-datetime-picker .block {

    flex: 100%;

    border-bottom: solid 1px var(--el-border-color);

  }

  .demo-datetime-picker .block:last-child {

    border-bottom: none;

  }

  .line {

    display: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## 日期和时间范围

设置`type`为`datetimerange`即可选择日期和时间范围

```vue
<template>

  <div class="demo-datetime-picker">

    <div class="block">

      <span class="demonstration">Default</span>

      <el-date-picker

        v-model="value1"

        type="datetimerange"

        range-separator="To"

        start-placeholder="Start date"

        end-placeholder="End date"

      />

    </div>

    <div class="block">

      <span class="demonstration">With shortcuts</span>

      <el-date-picker

        v-model="value2"

        type="datetimerange"

        :shortcuts="shortcuts"

        range-separator="To"

        start-placeholder="Start date"

        end-placeholder="End date"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref<[Date, Date]>([

  new Date(2000, 10, 10, 10, 10),

  new Date(2000, 10, 11, 10, 10),

])

const value2 = ref('')

const shortcuts = [

  {

    text: 'Last week',

    value: () => {

      const end = new Date()

      const start = new Date()

      start.setDate(start.getDate() - 7)

      return [start, end]

    },

  },

  {

    text: 'Last month',

    value: () => {

      const end = new Date()

      const start = new Date()

      start.setMonth(start.getMonth() - 1)

      return [start, end]

    },

  },

  {

    text: 'Last 3 months',

    value: () => {

      const end = new Date()

      const start = new Date()

      start.setMonth(start.getMonth() - 3)

      return [start, end]

    },

  },

]

</script>

<style scoped>

.demo-datetime-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

}

.block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  flex: 1;

  min-width: 300px;

}

.block:last-child {

  border-right: none;

}

.block .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

@media (max-width: 768px) {

  .block {

    flex: 100%;

    border-right: none;

    border-bottom: solid 1px var(--el-border-color);

  }

  .block:last-child {

    border-bottom: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## 单个面板 2.14.0

默认日期选择器范围有两个面板。如果你想要一个面板设置 `single-panel` 属性。

```vue
<template>

  <div class="demo-date-picker">

    <div class="block">

      <span class="demonstration">single-panel</span>

      <el-date-picker v-model="value1" type="datetimerange" single-panel />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref()

</script>

<style scoped>

.demo-date-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

}

.demo-date-picker .block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  flex: 1;

}

.demo-date-picker .block:last-child {

  border-right: none;

}

.demo-date-picker .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

</style>
```

## 默认的起始与结束时刻

使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`default-time`可以控制选中起始与结束日期时所使用的具体时刻。我们可以使用 `default-time` 属性来控制它。 `default-time`接受一个数组，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。第一项控制开始日期的时间值，第二项控制结束日期的时间值。

```vue
<template>

  <div class="demo-datetime-picker">

    <div class="block">

      <span class="demonstration">Start and end date time 12:00:00</span>

      <el-date-picker

        v-model="value1"

        type="datetimerange"

        start-placeholder="Start Date"

        end-placeholder="End Date"

        :default-time="defaultTime1"

      />

    </div>

    <div class="block">

      <span class="demonstration">

        Start date time 12:00:00, end date time 08:00:00

      </span>

      <el-date-picker

        v-model="value2"

        type="datetimerange"

        start-placeholder="Start Date"

        end-placeholder="End Date"

        :default-time="defaultTime2"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref('')

const value2 = ref('')

const defaultTime1 = new Date(2000, 1, 1, 12, 0, 0) // '12:00:00'

const defaultTime2: [Date, Date] = [

  new Date(2000, 1, 1, 12, 0, 0),

  new Date(2000, 2, 1, 8, 0, 0),

] // '12:00:00', '08:00:00'

</script>

<style scoped>

.demo-datetime-picker {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

}

.block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  flex: 1;

  min-width: 300px;

}

.block:last-child {

  border-right: none;

}

.block .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

@media (max-width: 768px) {

  .block {

    flex: 100%;

    border-right: none;

    border-bottom: solid 1px var(--el-border-color);

  }

  .block:last-child {

    border-bottom: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## 自定义图标 2.8.0

使用插槽自定义图标。

```vue
<template>

  <div class="demo-datetime-picker-icon">

    <div class="block">

      <el-date-picker

        v-model="value1"

        type="datetime"

        placeholder="Pick a Date"

        format="YYYY-MM-DD HH:mm:ss"

        date-format="MMM DD, YYYY"

        time-format="HH:mm"

      >

        <template #prev-month>

          <el-icon><CaretLeft /></el-icon>

        </template>

        <template #next-month>

          <el-icon><CaretRight /></el-icon>

        </template>

        <template #prev-year>

          <el-icon>

            <svg

              viewBox="0 0 20 20"

              version="1.1"

              xmlns="http://www.w3.org/2000/svg"

            >

              <g stroke-width="1" fill-rule="evenodd">

                <g fill="currentColor">

                  <path

                    d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"

                  />

                </g>

              </g>

            </svg>

          </el-icon>

        </template>

        <template #next-year>

          <el-icon>

            <svg

              viewBox="0 0 20 20"

              version="1.1"

              xmlns="http://www.w3.org/2000/svg"

            >

              <g stroke-width="1" fill-rule="evenodd">

                <g fill="currentColor">

                  <path

                    d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"

                  />

                </g>

              </g>

            </svg>

          </el-icon>

        </template>

      </el-date-picker>

    </div>

    <div class="line" />

    <div class="block">

      <el-date-picker

        v-model="value2"

        type="datetimerange"

        start-placeholder="Start date"

        end-placeholder="End date"

        format="YYYY-MM-DD HH:mm:ss"

        date-format="YYYY/MM/DD ddd"

        time-format="A hh:mm:ss"

        unlink-panels

      >

        <template #prev-month>

          <el-icon><CaretLeft /></el-icon>

        </template>

        <template #next-month>

          <el-icon><CaretRight /></el-icon>

        </template>

        <template #prev-year>

          <el-icon>

            <svg

              viewBox="0 0 20 20"

              version="1.1"

              xmlns="http://www.w3.org/2000/svg"

            >

              <g stroke-width="1" fill-rule="evenodd">

                <g fill="currentColor">

                  <path

                    d="M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"

                  />

                </g>

              </g>

            </svg>

          </el-icon>

        </template>

        <template #next-year>

          <el-icon>

            <svg

              viewBox="0 0 20 20"

              version="1.1"

              xmlns="http://www.w3.org/2000/svg"

            >

              <g stroke-width="1" fill-rule="evenodd">

                <g fill="currentColor">

                  <path

                    d="M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"

                  />

                </g>

              </g>

            </svg>

          </el-icon>

        </template>

      </el-date-picker>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { CaretLeft, CaretRight } from '@element-plus/icons-vue'

const value1 = ref('')

const value2 = ref('')

</script>

<style scoped>

.demo-datetime-picker-icon {

  display: flex;

  width: 100%;

  padding: 0;

  flex-wrap: wrap;

  justify-content: space-around;

  align-items: stretch;

}

.demo-datetime-picker-icon .block {

  padding: 30px 0;

  text-align: center;

  min-width: 300px;

  flex: 1;

}

.line {

  width: 1px;

  background-color: var(--el-border-color);

}

@media (max-width: 768px) {

  .demo-datetime-picker-icon .block {

    flex: 100%;

    border-bottom: solid 1px var(--el-border-color);

  }

  .demo-datetime-picker-icon .block:last-child {

    border-bottom: none;

  }

  .line {

    display: none;

  }

  :deep(.el-date-editor.el-input) {

    width: 100%;

  }

  :deep(.el-date-editor.el-input__wrapper) {

    width: 100%;

    max-width: 300px;

  }

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 绑定值，如果是 `range` 选择器，数组长度应为 2 | `number` / `string` / `Date` / `array` | '' |
| readonly | 只读 | `boolean` | false |
| disabled | 禁用 | `boolean` | false |
| editable | 文本框可输入 | `boolean` | true |
| clearable | 是否显示清除按钮 | `boolean` | true |
| size | 输入框尺寸 | `enum` | default |
| placeholder | 非范围选择时的占位内容 | `string` | — |
| start-placeholder | 范围选择时开始日期的占位内容 | `string` | — |
| end-placeholder | 范围选择时结束日期的占位内容 | `string` | — |
| arrow-control | 是否使用箭头进行时间选择 | `boolean` | false |
| type | 显示类型 | `enum` | date |
| format | 显示在输入框中的格式 | `string` 参考 [日期格式](./date-picker#date-formats) | YYYY-MM-DD HH:mm:ss |
| popper-class | DateTimePicker 下拉框的类名 | `string` | — |
| popper-style | 弹出内容的自定义样式 | `string` / `object` | — |
| popper-options | 自定义 popper 选项，更多请参考 [popper.js](https://popper.js.org/docs/v2/) | `object` | {} |
| fallback-placements 2.8.4 | Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | ['bottom', 'top', 'right', 'left'] |
| placement 2.8.4 | 下拉框出现的位置 | `展示位置` | bottom |
| range-separator | 选择范围时的分隔符 | `string` | '-' |
| default-value | 可选，选择器打开时默认显示的时间 | `object` | — |
| default-time | 选择日期后的默认时间值。如未指定则默认时间值为 `00:00:00` | `object` | — |
| value-format | 可选，绑定值的格式。不指定则绑定值为 Date 对象 | `string` see [date formats](https://day.js.org/docs/en/display/format) | — |
| date-format 2.4.0 | 可选，输入框内部面板中显示的日期格式 | `string` see [date formats](https://day.js.org/docs/en/display/format) | YYYY-MM-DD |
| time-format 2.4.0 | 可选，输入框内部面板中显示的时间格式 | `string` see [date formats](https://day.js.org/docs/en/display/format) | HH:mm:ss |
| id | 等价于原生 input `id` 属性 | `string` / `array` | — |
| name | 等价于原生 input `name` 属性 | `string` | — |
| unlink-panels | 在范围选择器里取消两个日期面板之间的联动 | `boolean` | false |
| single-panel 2.14.0 | 在范围选择器中只显示一个面板 | `boolean` | false |
| prefix-icon | 自定义前缀图标组件 | `string` / `Component` | Date |
| clear-icon | 自定义清除图标 | `string` / `Component` | CircleClose |
| shortcuts | 设置快捷选项，需要传入数组对象 | `array` | — |
| disabled-date | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。应该返回一个 Boolean 值。 | `Function` | — |
| disabled-hours | 禁止选择部分小时选项 | `Function` | — |
| disabled-minutes | 禁止选择部分分钟选项 | `Function` | — |
| disabled-seconds | 禁止选择部分秒选项 | `Function` | — |
| cell-class-name | 设置自定义类名 | `Function` | — |
| teleported | 是否将 datetime-picker 的下拉列表插入至 body 元素 | `boolean` | true |
| empty-values 2.7.0 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.7.0 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| show-now 2.8.7 | 是否显示 now 按钮 | `boolean` | true |
| show-footer 2.10.5 | 是否在日期选择器中显示页脚 ^[enum]`'datetime' | 'datetimerange'` | `boolean` |
| show-confirm 2.11.0 | 是否显示确定按钮 | `boolean` | true |
| show-week-number 2.10.3 | 显示周数(除周外) | `boolean` | false |

### 事件

| 事件名 | 说明 | 回调参数 |
|---|---|---|
| change | 当用户确认值或点击外部时触发 | `Function` |
| blur | 在组件 Input 失去焦点时触发 | `Function` |
| focus | 在组件 Input 获得焦点时触发 | `Function` |
| clear 2.7.7 | 当点击清除按钮时触发 | `Function` |
| calendar-change | 如果用户没有选择日期，那默认展示当前日的月份。仅用于 `range` | `Function` |
| panel-change | 当日期面板改变时触发。 | `Function` |
| visible-change | 当 DateTimePicker 的下拉列表出现/消失时触发 | `Function` |

### Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义单元格内容 |
| range-separator | 自定义范围分割符内容 |
| prev-month 2.8.0 | 上个月的图标 |
| next-month 2.8.0 | 下个月的图标 |
| prev-year 2.8.0 | 上一年图标 |
| next-year 2.8.0 | 下一年图标 |

### Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| focus | 使组件获取焦点 | `Function` |
| blur 2.8.7 | 使组件失去焦点 | `Function` |

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