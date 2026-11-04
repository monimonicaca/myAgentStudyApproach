# Input Number 数字输入框

仅允许输入标准的数字值，可定义范围

## 基础用法

要使用它，只需要在 `<el-input-number>` 元素中使用 `v-model` 绑定变量即可，变量的初始值即为默认值。

```vue
<template>

  <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(1)

const handleChange = (value: number | undefined) => {

  console.log(value)

}

</script>
```

> **TIP**

> 当输入无效的字符串到输入框时，由于错误，输入值将把 `NaN` 导入到上层

## 禁用状态

`disabled`属性接受一个 `Boolean`，设置为`true`即可禁用整个组件。，如果你只需要控制数值在某一范围内，可以设置 `min` 属性和 `max` 属性，默认情况下，最小值是 `Number.MIN_SAFE_INTEGER`。

```vue
<template>

  <el-input-number v-model="num" :disabled="true" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(1)

</script>
```

## 步进

允许定义递增递减的步进控制

设置 `step` 属性可以控制步长。

```vue
<template>

  <el-input-number v-model="num" :step="2" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(5)

</script>
```

## 严格步进

`step-strictly`属性接受一个`Boolean`。如果这个属性被设置为 `true`，则只能输入步进的倍数。

```vue
<template>

  <el-input-number v-model="num" :step="2" step-strictly />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(2)

</script>
```

## 精度

设置 `precision` 属性可以控制数值精度，接收一个 `Number`。

```vue
<template>

  <el-input-number v-model="num" :precision="2" :step="0.1" :max="10" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(1)

</script>
```

> **TIP**

> `precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

## 不同的输入框尺寸

使用 `size` 属性额外配置尺寸，可选的尺寸大小为：`large` 或 `small`

```vue
<template>

  <div class="flex flex-wrap items-center gap-4">

    <el-input-number v-model="num1" size="large" />

    <el-input-number v-model="num2" />

    <el-input-number v-model="num3" size="small" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num1 = ref(1)

const num2 = ref(2)

const num3 = ref(3)

</script>
```

## 按钮位置

设置 `controls-position` 属性可以控制按钮位置。

```vue
<template>

  <div class="flex flex-wrap items-center gap-4">

    <el-input-number

      v-model="num"

      :min="1"

      :max="10"

      controls-position="right"

      size="large"

      @change="handleChange"

    />

    <el-input-number

      v-model="num"

      :min="1"

      :max="10"

      controls-position="right"

      @change="handleChange"

    />

    <el-input-number

      v-model="num"

      :min="1"

      :max="10"

      size="small"

      controls-position="right"

      @change="handleChange"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(1)

const handleChange = (value: number | undefined) => {

  console.log(value)

}

</script>
```

## 自定义图标 2.6.3

使用 `decrease-icon` 和 `increase-icon` 设置自定义图标。

```vue
<template>

  <el-space direction="vertical">

    <el-space>

      <el-input-number v-model="num" />

      <el-input-number v-model="num">

        <template #decrease-icon>

          <el-icon>

            <ArrowDown />

          </el-icon>

        </template>

        <template #increase-icon>

          <el-icon>

            <ArrowUp />

          </el-icon>

        </template>

      </el-input-number>

    </el-space>

    <el-space>

      <el-input-number v-model="num" controls-position="right" />

      <el-input-number v-model="num" controls-position="right">

        <template #decrease-icon>

          <el-icon>

            <Minus />

          </el-icon>

        </template>

        <template #increase-icon>

          <el-icon>

            <Plus />

          </el-icon>

        </template>

      </el-input-number>

    </el-space>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

const num = ref(1)

</script>
```

## 带前缀和后缀2.8.4

使用前缀和标名后缀。

```vue
<template>

  <el-space>

    <el-input-number v-model="num" :min="1" :max="10">

      <template #prefix>

        <span>￥</span>

      </template>

    </el-input-number>

    <el-input-number v-model="num" :min="1" :max="10">

      <template #suffix>

        <span>RMB</span>

      </template>

    </el-input-number>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const num = ref(1)

</script>
```

> **TIP**

> 为了确保精度，输入的数值被限制在 [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) 到 [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) 之间。

## Formatter 2.14.0

使用 `formatter` 来显示值，通常会同时配合 `parser` 一起使用。

当设置了 `formatter` 时，内部输入框的 `type` 会变为 `text`，从而允许输入非数字字符。 组件内部使用 `Number.parseFloat` 处理输入：解析成功时，将解析后的数值写入 `model-value`；当解析结果为 `NaN` 时，将 `model-value` 设为 `null`。

```vue
<template>

  <el-input-number

    v-model="input"

    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"

    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref(10000)

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `number` / `null` | — |
| min | 设置计数器允许的最小值 | `number` | Number.MIN_SAFE_INTEGER |
| max | 设置计数器允许的最大值 | `number` | Number.MAX_SAFE_INTEGER |
| step | 计数器步长 | `number` | 1 |
| step-strictly | 是否只能输入 step 的倍数 | `boolean` | false |
| precision | 数值精度 | `number` | — |
| size | 计数器尺寸 | `enum` | default |
| readonly 2.2.16 | 原生 `readonly` 属性，是否只读 | `boolean` | false |
| disabled | 是否禁用状态 | `boolean` | false |
| controls | 是否使用控制按钮 | `boolean` | true |
| controls-position | 控制按钮位置 | `enum` | — |
| name | 等价于原生 input `name` 属性 | `string` | — |
| aria-label a11y 2.7.2 | 等价于原生 input `aria-label` 属性 | `string` | — |
| placeholder | 等价于原生 input `placeholder` 属性 | `string` | — |
| id | 等价于原生 input `id` 属性 | `string` | — |
| value-on-clear 2.2.0 | 当输入框被清空时显示的值 | `number` / `null` / `enum` | — |
| validate-event | 是否触发表单验证 | `boolean` | true |
| label a11y deprecated | 等价于原生 input `aria-label` 属性 | `string` | — |
| inputmode 2.10.3 | 等价于原生 input `inputmode` 属性 | `string` | — |
| align 2.10.5 | 内部输入文本对齐 | `enum` | 'center' |
| disabled-scientific 2.10.5 | 禁用科学计数法的输入（例如输入 'e'） | `boolean` | false |
| tabindex 2.14.0 | 输入框的 tabindex | `string` / `number` | 0 |
| formatter 2.14.0 | 指定输入值的格式 | `Function` | ::: |
| parser 2.14.0 | 指定从格式化输入中提取的值 | `Function` | — |

### Slots

| 插槽名 | 说明 |
|---|---|
| decrease-icon 2.6.3 | 自定义输入框按钮减少图标 |
| increase-icon 2.6.3 | 自定义输入框按钮增加图标 |
| prefix 2.8.4 | 输入框头部内容 |
| suffix 2.8.4 | 输入框尾部内容 |

### Events

| 名称 | 说明 | 类型 |
|---|---|---|
| change | 绑定值被改变时触发 | `Function` |
| blur | 在组件 Input 失去焦点时触发 | `Function` |
| focus | 在组件 Input 获得焦点时触发 | `Function` |

### Exposes

| 名称 | 详情 | 类型 |
|---|---|---|
| focus | 使 input 组件获得焦点 | `Function` |
| blur | 使 input 组件失去焦点 | `Function` |