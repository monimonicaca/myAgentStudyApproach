# InputTag 标签输入框

InputTag 组件允许用户添加内容作为标签

## 基础用法

按Enter回车键添加输入内容为标签

```vue
<template>

  <el-input-tag

    v-model="input"

    placeholder="Please input"

    aria-label="Please click the Enter key after input"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>()

</script>
```

## 自定义触发器

您可以自定义用于触发输入标签的键位，默认是Enter 回车键

```vue
<template>

  <div>

    <el-segmented v-model="trigger" :options="options" />

  </div>

  <br />

  <el-input-tag v-model="input" :trigger="trigger" placeholder="Please input" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { EVENT_CODE } from 'element-plus'

const trigger = ref<'Enter' | 'Space'>('Space')

const input = ref<string[]>()

const options = [EVENT_CODE.enter, EVENT_CODE.space]

</script>
```

## 最大标签数

您可以设置可以添加的标签数量限制。

```vue
<template>

  <el-input-tag v-model="input" :max="3" placeholder="enter up to 3 tags" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>()

</script>
```

## 折叠标签2.11.0

使用折叠标签属性将它们合并成一块文本。您可以使用折叠标签工具提示属性来启用悬停在折叠文本上的行为来显示特定的选定值。使用折叠标签工具提示属性会使最大属性无效。

```vue
<template>

  <div class="m-4">

    <p>use collapse-tags</p>

    <el-input-tag

      v-model="input1"

      collapse-tags

      placeholder="Please input"

      aria-label="Please click the Enter key after input"

    />

    <p>use collapse-tags-tooltip</p>

    <el-input-tag

      v-model="input2"

      collapse-tags

      collapse-tags-tooltip

      placeholder="Please input"

      aria-label="Please click the Enter key after input"

    />

    <p>use max-collapse-tags</p>

    <el-input-tag

      v-model="input3"

      collapse-tags

      collapse-tags-tooltip

      :max-collapse-tags="3"

      placeholder="Please input"

      aria-label="Please click the Enter key after input"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input1 = ref<string[]>()

const input2 = ref<string[]>()

const input3 = ref<string[]>()

</script>
```

## 禁用状态

您可以设置 InputTag 被禁用。

```vue
<template>

  <el-input-tag v-model="input" disabled placeholder="Please input" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>(['tag1', 'tag2', 'tag3'])

</script>
```

## 可清空

您可以设置是否显示清除按钮。

```vue
<template>

  <el-input-tag v-model="input" clearable placeholder="Please input" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>(['tag1', 'tag2', 'tag3'])

</script>
```

## 自定义清除图标2.11.0

你可以通过`clear-icon`属性自定义清除图标

```vue
<template>

  <el-input-tag

    v-model="input"

    clearable

    :clear-icon="CloseBold"

    placeholder="Custom clear icon"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { CloseBold } from '@element-plus/icons-vue'

const input = ref<string[]>(['custom', 'clear', 'icon'])

</script>
```

## 可拖放

您可以设置是否可以拖动标签。

```vue
<template>

  <el-input-tag v-model="input" draggable placeholder="Please input" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>(['tag1', 'tag2', 'tag3'])

</script>
```

## 分隔符2.9.9

当一个分隔符匹配时，您可以添加一个标签。

```vue
<template>

  <el-input-tag

    v-model="input"

    draggable

    placeholder="Try to separate words with ,"

    delimiter=","

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>([])

</script>
```

## 尺寸

使用 `size` 属性改变输入框大小。除了默认大小外，还有另外两个选项： `large`, `small`。

```vue
<template>

  <el-input-tag v-model="input" size="large" placeholder="Please input" />

  <br />

  <el-input-tag v-model="input" placeholder="Please input" />

  <br />

  <el-input-tag v-model="input" size="small" placeholder="Please input" />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const input = ref<string[]>()

</script>
```

## 自定义标签

您可以通过`tag`插槽自定义标签内容。

```vue
<template>

  <div>

    <el-segmented v-model="tagType" :options="type" class="mr-5" />

    <el-segmented v-model="tagEffect" :options="effect" />

  </div>

  <br />

  <el-input-tag

    v-model="input"

    :tag-type="tagType"

    :tag-effect="tagEffect"

    placeholder="Please input"

  >

    <template #tag="{ value }">

      <div class="flex items-center">

        <el-icon class="mr-1">

          <ElementPlus />

        </el-icon>

        <span>{{ value }}</span>

      </div>

    </template>

  </el-input-tag>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ElementPlus } from '@element-plus/icons-vue'

import type { TagProps } from 'element-plus'

const type: Array<TagProps['type']> = [

  'primary',

  'success',

  'info',

  'warning',

  'danger',

]

const effect: Array<TagProps['effect']> = ['light', 'dark', 'plain']

const tagType = ref<TagProps['type']>('primary')

const tagEffect = ref<TagProps['effect']>('plain')

const input = ref<string[]>(['tag1', 'tag2', 'tag3'])

</script>
```

## 自定义前缀和后缀

您可以通过`prefix`和 `suffix` 插槽自定义 InputTag 的前缀和后缀。

```vue
<template>

  <el-input-tag v-model="input" clearable placeholder="Please input">

    <template #prefix>

      <el-icon><ElementPlus /></el-icon>

    </template>

    <template #suffix>

      <el-icon><Search /></el-icon>

    </template>

  </el-input-tag>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ElementPlus, Search } from '@element-plus/icons-vue'

const input = ref<string[]>()

</script>
```

## API

### 属性

| 名称 | 详情 | 类型 | 默认 |
|---|---|---|---|
| model-value / v-model | 绑定值 | `array` | — |
| max | 可添加标签的最大数量 | `number` | — |
| tag-type | 标签类型 | `enum` | info |
| tag-effect | 标签效果 | `enum` | light |
| effect 2.13.2 | tooltip 主题，内置了 `dark` / `light` 两种 | `enum``'dark' | 'light'` / `string` | light |
| trigger | 触发输入标签的按键 | `enum` | Enter |
| draggable | 是否可以拖动标签 | `boolean` | false |
| delimiter 2.9.9 | 在匹配分隔符时添加标签 | `string` / `regex` | — |
| size | 输入框尺寸 | `enum` | — |
| collapse-tags 2.11.0 | 多选时是否将选中值按文字的形式展示 | `boolean` | false |
| collapse-tags-tooltip 2.11.0 | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此功能，`collapse-tags`的值必须为true | `boolean` | false |
| save-on-blur 2.9.7 | 当输入失去焦点时是否保存输入值 | `boolean` | true |
| clearable | 是否显示清除按钮 | `boolean` | false |
| clear-icon 2.11.0 | 自定义清除图标 | `string` / `object` | CircleClose |
| disabled | 是否禁用 | `boolean` | false |
| validate-event | 是否触发表单验证 | `boolean` | true |
| readonly | 等价于原生 `readonly` 属性 | `boolean` | false |
| autofocus | 等价于原生 `autofocus` 属性 | `boolean` | false |
| id | 等价于原生 input `id` 属性 | `string` | — |
| tabindex | 等价于原生 `tabindex` 属性 | `string` / `number` | — |
| max-collapse-tags 2.11.0 | 需要显示的 Tag 的最大数量要使用此功能，`collapse-tags`的值必须为true | `number` | 1 |
| maxlength | 等价于原生 `maxlength` 属性 | `string` / `number` | — |
| minlength | 等价于原生 `minlength` 属性 | `string` / `number` | — |
| placeholder | 输入框占位文本 | `string` | — |
| autocomplete | 等价于原生 `autocomplete` 属性 | `string` | off |
| aria-label a11y | 等价于原生 `aria-label` 属性 | `string` | — |

### 事件

| 名称 | 详情 | 类型 |
|---|---|---|
| change | 绑定值变化时触发的事件 | `Function` |
| input | 在 Input 值改变时触发 | `Function` |
| add-tag | tag 被添加时触发 | `Function` |
| remove-tag | tag 被移除时触发 | `Function` |
| drag-tag 2.11.3 | tag 被拖动时触发 | `Function` |
| focus | 在 Input 获得焦点时触发 | `Function` |
| blur | 在 Input 失去焦点时触发 | `Function` |
| clear | 点击清除图标时触发 | `Function` |

### Slots

| 名称 | 详情 | 类型 |
|---|---|---|
| tag | 作为tag的内容 | `object` |
| prefix | InputTag 头部内容 | — |
| suffix | InputTag 尾部内容 | — |

### 对外暴露的方法

| 名称 | 详情 | 类型 |
|---|---|---|
| focus | 使 input 获取焦点 | `Function` |
| blur | 使 input 失去焦点 | `Function` |