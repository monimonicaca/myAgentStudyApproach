# Segmented 分段控制器

用于展示多个选项并允许用户选择其中单个选项。

## 基础用法

设置`v-model`为选项值。

```vue
<template>

  <div class="flex flex-col items-start gap-4">

    <el-segmented v-model="value" :options="options" size="large" />

    <el-segmented v-model="value" :options="options" size="default" />

    <el-segmented v-model="value" :options="options" size="small" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('Mon')

const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

</script>
```

## 配置方向2.8.7

设置 `vertical` 来改变方向。

```vue
<template>

  <div>

    <el-segmented

      v-model="size"

      :options="sizeOptions"

      style="margin-bottom: 1rem"

    />

    <br />

    <el-segmented

      v-model="direction"

      :options="directionOptions"

      style="margin-bottom: 1rem"

    />

    <br />

    <el-segmented

      v-model="value"

      :options="options"

      :direction="direction"

      :size="size"

    >

      <template #default="scope">

        <div

          :class="[

            'flex',

            'items-center',

            'gap-2',

            'flex-col',

            direction === 'horizontal' && 'p-2',

          ]"

        >

          <el-icon size="20">

            <component :is="scope.item.icon" />

          </el-icon>

          <div>{{ scope.item.label }}</div>

        </div>

      </template>

    </el-segmented>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import {

  Apple,

  Cherry,

  Grape,

  Orange,

  Pear,

  Watermelon,

} from '@element-plus/icons-vue'

import type { SegmentedProps } from 'element-plus'

const value = ref('Apple')

const direction = ref<SegmentedProps['direction']>('horizontal')

const size = ref<SegmentedProps['size']>('default')

const directionOptions = [

  { label: 'Horizontal', value: 'horizontal' },

  { label: 'Vertical', value: 'vertical' },

]

const sizeOptions = ['large', 'default', 'small']

const options = [

  {

    label: 'Apple',

    value: 'Apple',

    icon: Apple,

  },

  {

    label: 'Cherry',

    value: 'Cherry',

    icon: Cherry,

  },

  {

    label: 'Grape',

    value: 'Grape',

    icon: Grape,

  },

  {

    label: 'Orange',

    value: 'Orange',

    icon: Orange,

  },

  {

    label: 'Pear',

    value: 'Pear',

    icon: Pear,

  },

  {

    label: 'Watermelon',

    value: 'Watermelon',

    icon: Watermelon,

    disabled: true,

  },

]

</script>
```

## 禁用状态

设置 `disabled` 属性来禁用一些选项。

```vue
<template>

  <div class="flex flex-col items-start gap-4">

    <el-segmented v-model="value" :options="options" disabled />

    <el-segmented v-model="value" :options="options" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('Mon')

const options = [

  {

    label: 'Mon',

    value: 'Mon',

    disabled: true,

  },

  {

    label: 'Tue',

    value: 'Tue',

  },

  {

    label: 'Wed',

    value: 'Wed',

    disabled: true,

  },

  {

    label: 'Thu',

    value: 'Thu',

  },

  {

    label: 'Fri',

    value: 'Fri',

    disabled: true,

  },

  {

    label: 'Sat',

    value: 'Sat',

  },

  {

    label: 'Sun',

    value: 'Sun',

  },

]

</script>
```

## 自定义选项 2.9.8

当您的 `options` 格式不同于默认格式时，可通过 `props` 属性自定义 `options`

```vue
<template>

  <div>

    <el-segmented v-model="value" :options="options" :props="props" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('Mon')

const props = {

  label: 'myLabel',

  value: 'myValue',

  disabled: 'myDisabled',

}

const options = [

  {

    myLabel: 'Mon',

    myValue: 'Mon',

    myDisabled: true,

  },

  {

    myLabel: 'Tue',

    myValue: 'Tue',

  },

  {

    myLabel: 'Wed',

    myValue: 'Wed',

    myDisabled: true,

  },

  {

    myLabel: 'Thu',

    myValue: 'Thu',

  },

  {

    myLabel: 'Fri',

    myValue: 'Fri',

    myDisabled: true,

  },

  {

    myLabel: 'Sat',

    myValue: 'Sat',

  },

  {

    myLabel: 'Sun',

    myValue: 'Sun',

  },

]

</script>
```

## Block 分段选择器

设置`block`为`true`以适应父元素的宽度。

```vue
<template>

  <div>

    <el-segmented v-model="value" :options="options" block />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('Mon')

const options = [

  'Mon',

  'Tue',

  'Wed',

  'Thu',

  'Fri',

  'Sat',

  'Sunday long long long long long long long',

]

</script>
```

## 自定义内容

设置 default slot 位来渲染自定义内容。

```vue
<template>

  <div>

    <el-segmented v-model="value" :options="options">

      <template #default="scope">

        <div class="flex flex-col items-center gap-2 p-2">

          <el-icon size="20">

            <component :is="scope.item.icon" />

          </el-icon>

          <div>{{ scope.item.label }}</div>

        </div>

      </template>

    </el-segmented>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import {

  Apple,

  Cherry,

  Grape,

  Orange,

  Pear,

  Watermelon,

} from '@element-plus/icons-vue'

const value = ref('Apple')

const options = [

  {

    label: 'Apple',

    value: 'Apple',

    icon: Apple,

  },

  {

    label: 'Cherry',

    value: 'Cherry',

    icon: Cherry,

  },

  {

    label: 'Grape',

    value: 'Grape',

    icon: Grape,

  },

  {

    label: 'Orange',

    value: 'Orange',

    icon: Orange,

  },

  {

    label: 'Pear',

    value: 'Pear',

    icon: Pear,

  },

  {

    label: 'Watermelon',

    value: 'Watermelon',

    icon: Watermelon,

  },

]

</script>
```

## 自定义样式

使用 CSS 变量设置自定义样式。

```vue
<template>

  <div class="custom-style">

    <el-segmented v-model="value" :options="options" />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref('Delicacy')

const options = ['Delicacy', 'Desserts&Drinks', 'Fresh foods', 'Supermarket']

</script>

<style scoped>

.custom-style .el-segmented {

  --el-segmented-item-selected-color: var(--el-text-color-primary);

  --el-segmented-item-selected-bg-color: #ffd100;

  --el-border-radius-base: 16px;

}

</style>
```

## API

### 属性

| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 绑定值 | `string` / `number` / `boolean` | — |
| options | 选项的数据 | `array` | [] |
| [props](#props) 2.9.8 | 配置选项，详见下表 | `object` | — |
| size | 组件大小 | `enum` | '' |
| block | 撑满父元素宽度 | `boolean` | false |
| disabled | 是否禁用 | `boolean` | false |
| validate-event | 是否触发表单验证 | `boolean` | true |
| name | 原生 name 属性 | `string` | — |
| id | 原生 `id` 属性 | `string` | — |
| aria-label a11y | 原生 `aria-label` 属性 | `string` | — |
| direction 2.8.7 | 展示的方向 | `enum` | horizontal |

### props

| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| value | 指定键为节点对象的某个属性值 | `string` | value |
| label | 指定标签为节点对象的某个属性值 | `string` | label |
| disabled | 指定禁用状态为节点对象的某个属性值 | `string` | disabled |

### 事件

| 名称 | 说明 | 类型 |
|---|---|---|
| change | 当所选值更改时触发，参数是当前选中的值 | `Function` |

### Slots

| 名称 | 说明 | 类型 |
|---|---|---|
| default | 自定义 Option 模板 | `object` |

## 类型声明

显示类型声明ts`type Option = Record<string, any> | string | number | boolean`