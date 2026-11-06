# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型。也可以通过 `color` 属性来自定义背景色。

```vue
<template>

  <div class="flex gap-2">

    <el-tag type="primary">Tag 1</el-tag>

    <el-tag type="success">Tag 2</el-tag>

    <el-tag type="info">Tag 3</el-tag>

    <el-tag type="warning">Tag 4</el-tag>

    <el-tag type="danger">Tag 5</el-tag>

  </div>

</template>
```

## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。它接受一个 `Boolean`。默认的标签移除时会附带渐变动画。如果不想使用，可以设置 `disable-transitions` 属性，它接受一个 `Boolean`，`true` 为关闭。当 Tag 被移除时会触发 `close` 事件。

```vue
<template>

  <div class="flex gap-2">

    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">

      {{ tag.name }}

    </el-tag>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TagProps } from 'element-plus'

interface TagsItem {

  name: string

  type: TagProps['type']

}

const tags = ref<TagsItem[]>([

  { name: 'Tag 1', type: 'primary' },

  { name: 'Tag 2', type: 'success' },

  { name: 'Tag 3', type: 'info' },

  { name: 'Tag 4', type: 'warning' },

  { name: 'Tag 5', type: 'danger' },

])

</script>
```

## 动态编辑标签

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现。

```vue
<template>

  <div class="flex gap-2">

    <el-tag

      v-for="tag in dynamicTags"

      :key="tag"

      closable

      :disable-transitions="false"

      @close="handleClose(tag)"

    >

      {{ tag }}

    </el-tag>

    <el-input

      v-if="inputVisible"

      ref="InputRef"

      v-model="inputValue"

      class="w-20"

      size="small"

      @keyup.enter="handleInputConfirm"

      @blur="handleInputConfirm"

    />

    <el-button v-else class="button-new-tag" size="small" @click="showInput">

      + New Tag

    </el-button>

  </div>

</template>

<script lang="ts" setup>

import { nextTick, ref } from 'vue'

import type { InputInstance } from 'element-plus'

const inputValue = ref('')

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])

const inputVisible = ref(false)

const InputRef = ref<InputInstance>()

const handleClose = (tag: string) => {

  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)

}

const showInput = () => {

  inputVisible.value = true

  nextTick(() => {

    InputRef.value!.input!.focus()

  })

}

const handleInputConfirm = () => {

  if (inputValue.value) {

    dynamicTags.value.push(inputValue.value)

  }

  inputVisible.value = false

  inputValue.value = ''

}

</script>
```

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

使用 `size` 属性来设置额外尺寸, 可选值包括 `large`, `default` 或 `small`.

```vue
<template>

  <div class="flex gap-2">

    <el-tag size="large">Large</el-tag>

    <el-tag>Default</el-tag>

    <el-tag size="small">Small</el-tag>

  </div>

</template>
```

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

通过设置 `effect` 属性来改变主题，默认为 `light`。

```vue
<template>

  <div class="flex gap-2">

    <span>Dark</span>

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="dark"

    >

      {{ item.label }}

    </el-tag>

  </div>

  <div class="flex gap-2 mt-4">

    <span>Light</span>

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="light"

    >

      {{ item.label }}

    </el-tag>

  </div>

  <div class="flex gap-2 mt-4">

    <span>Plain</span>

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="plain"

    >

      {{ item.label }}

    </el-tag>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([

  { type: 'primary', label: 'Tag 1' },

  { type: 'success', label: 'Tag 2' },

  { type: 'info', label: 'Tag 3' },

  { type: 'warning', label: 'Tag 4' },

  { type: 'danger', label: 'Tag 5' },

])

</script>
```

## 圆角标签

Tag 可以像按钮组件一样变为圆角。

```vue
<template>

  <div class="flex gap-2">

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="dark"

      round

    >

      {{ item.label }}

    </el-tag>

  </div>

  <div class="flex gap-2 mt-4">

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="light"

      round

    >

      {{ item.label }}

    </el-tag>

  </div>

  <div class="flex gap-2 mt-4">

    <el-tag

      v-for="item in items"

      :key="item.label"

      :type="item.type"

      effect="plain"

      round

    >

      {{ item.label }}

    </el-tag>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TagProps } from 'element-plus'

type Item = { type: TagProps['type']; label: string }

const items = ref<Array<Item>>([

  { type: 'primary', label: 'Tag 1' },

  { type: 'success', label: 'Tag 2' },

  { type: 'info', label: 'Tag 3' },

  { type: 'warning', label: 'Tag 4' },

  { type: 'danger', label: 'Tag 5' },

])

</script>
```

## 可选中的标签

有时候因为业务需求，我们可能会需要用到类似复选框的标签，但是**按钮式的复选框**的样式又不满足需求，此时我们就可以用到 `check-tag`组件。您可以在2.5.4中使用 `type` 属性。

check-tag 的基础使用方法，check-tag 提供的 API 非常简单。

```vue
<template>

  <div class="flex gap-2">

    <el-check-tag checked>Checked</el-check-tag>

    <el-check-tag :checked="checked" @change="onChange">Toggle me</el-check-tag>

    <el-check-tag disabled>Disabled</el-check-tag>

  </div>

  <div class="flex gap-2 mt-4">

    <el-check-tag :checked="checked1" type="primary" @change="onChange1">

      Tag 1

    </el-check-tag>

    <el-check-tag :checked="checked2" type="success" @change="onChange2">

      Tag 2

    </el-check-tag>

    <el-check-tag :checked="checked3" type="info" @change="onChange3">

      Tag 3

    </el-check-tag>

    <el-check-tag :checked="checked4" type="warning" @change="onChange4">

      Tag 4

    </el-check-tag>

    <el-check-tag :checked="checked5" type="danger" @change="onChange5">

      Tag 5

    </el-check-tag>

    <el-check-tag

      :checked="checked6"

      disabled

      type="success"

      @change="onChange6"

    >

      Tag 6

    </el-check-tag>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const checked = ref(false)

const checked1 = ref(true)

const checked2 = ref(true)

const checked3 = ref(true)

const checked4 = ref(true)

const checked5 = ref(true)

const checked6 = ref(true)

const onChange = (status: boolean) => {

  checked.value = status

}

const onChange1 = (status: boolean) => {

  checked1.value = status

}

const onChange2 = (status: boolean) => {

  checked2.value = status

}

const onChange3 = (status: boolean) => {

  checked3.value = status

}

const onChange4 = (status: boolean) => {

  checked4.value = status

}

const onChange5 = (status: boolean) => {

  checked5.value = status

}

const onChange6 = (status: boolean) => {

  checked6.value = status

}

</script>
```

## Tag API

### Tag Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| type | Tag 的类型 | `enum` | primary |
| closable | 是否可关闭 | `boolean` | false |
| disable-transitions | 是否禁用渐变动画 | `boolean` | false |
| hit | 是否有边框描边 | `boolean` | false |
| color | 背景色 | `string` | — |
| size | Tag 的尺寸 | `enum` | — |
| effect | Tag 的主题 | `enum` | light |
| round | Tag 是否为圆角 | `boolean` | false |

### Tag Events

| 事件名 | 说明 | Type |
|---|---|---|
| click | 点击 Tag 时触发的事件 | `Function` |
| close | 关闭 Tag 时触发的事件 | `Function` |

### Tag Slots

| 名称 | 说明 |
|---|---|
| default | 自定义默认内容 |

## CheckTag API

### CheckTag Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| checked / v-model:checked | 是否选中 | `boolean` | false |
| disabled 2.8.2 | 是否禁用 | `boolean` | false |
| type 2.5.4 | CheckTag 类型 | `enum` | primary |

### CheckTag Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 点击 Check Tag 时触发的事件 | `Function` |

### CheckTag Slots

| 名称 | 说明 |
|---|---|
| default | 自定义默认内容 |