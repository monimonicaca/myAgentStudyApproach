# Mention 提及

用于在输入中提及某人或某事。

## 基础用法

最简单的用法。

```vue
<template>

  <el-mention

    v-model="value"

    :options="options"

    style="width: 320px"

    placeholder="Please input"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

const value = ref('@')

const options = ref([

  {

    label: 'Fuphoenixes',

    value: 'Fuphoenixes',

  },

  {

    label: 'kooriookami',

    value: 'kooriookami',

  },

  {

    label: 'Jeremy',

    value: 'Jeremy',

  },

  {

    label: 'btea',

    value: 'btea',

  },

])

</script>
```

## Props 2.11.3

你可以通过 `props` 属性自定义 `options` 的别名。

```vue
<template>

  <el-mention

    v-model="value"

    :options="options"

    :props="props"

    style="width: 320px"

    placeholder="Please input"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

const value = ref('@')

const props = { label: 'name', value: 'id', disabled: 'unable' }

const options = ref([

  {

    name: 'Fuphoenixes',

    id: 'Fuphoenixes',

    unable: true,

  },

  {

    name: 'kooriookami',

    id: 'kooriookami',

  },

  {

    name: 'Jeremy',

    id: 'Jeremy',

    unable: true,

  },

  {

    name: 'btea',

    id: 'btea',

  },

])

</script>
```

## Textarea

输入类型可以设置为 `textarea` 。

```vue
<template>

  <el-mention

    v-model="value"

    type="textarea"

    :options="options"

    style="width: 320px"

    placeholder="Please input"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

const value = ref('')

const options = ref([

  {

    label: 'Fuphoenixes',

    value: 'Fuphoenixes',

  },

  {

    label: 'kooriookami',

    value: 'kooriookami',

  },

  {

    label: 'Jeremy',

    value: 'Jeremy',

  },

  {

    label: 'btea',

    value: 'btea',

  },

])

</script>
```

## 自定义标签

使用 "label" 自定义标签。

```vue
<template>

  <el-mention

    v-model="value"

    :options="options"

    style="width: 320px"

    placeholder="Please input"

  >

    <template #label="{ item }">

      <div style="display: flex; align-items: center">

        <el-avatar :size="24" :src="item.avatar" />

        <span style="margin-left: 6px">{{ item.value }}</span>

      </div>

    </template>

  </el-mention>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const value = ref('')

const options = ref([

  {

    value: 'Fuphoenixes',

    avatar: 'https://avatars.githubusercontent.com/u/27912232',

  },

  {

    value: 'kooriookami',

    avatar: 'https://avatars.githubusercontent.com/u/38392315',

  },

  {

    value: 'Jeremy',

    avatar: 'https://avatars.githubusercontent.com/u/15975785',

  },

  {

    value: 'btea',

    avatar: 'https://avatars.githubusercontent.com/u/24516654',

  },

])

</script>
```

## 加载远程选项

异步加载选项。

```vue
<template>

  <el-mention

    v-model="value"

    :options="options"

    :loading="loading"

    style="width: 320px"

    placeholder="Please input"

    @search="handleSearch"

  />

</template>

<script setup lang="ts">

import { onBeforeUnmount, ref } from 'vue'

import type { MentionOption } from 'element-plus'

const value = ref('')

const loading = ref(false)

const options = ref<MentionOption[]>([])

let timer: ReturnType<typeof setTimeout>

const handleSearch = (pattern: string) => {

  if (timer) clearTimeout(timer)

  loading.value = true

  timer = setTimeout(() => {

    options.value = ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'].map(

      (item) => ({

        label: pattern + item,

        value: pattern + item,

      })

    )

    loading.value = false

  }, 1500)

}

onBeforeUnmount(() => {

  if (timer) clearTimeout(timer)

})

</script>
```

## 自定义触发字段

通过 `prefix` 属性 自定义触发字段。默认为 `@`, `Array<string>` 。

```vue
<template>

  <el-mention

    v-model="value"

    :options="options"

    :prefix="['@', '#']"

    style="width: 320px"

    placeholder="input @ to mention people, # to mention tag"

    @search="handleSearch"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

import type { MentionOption } from 'element-plus'

const MOCK_DATA: Record<string, string[]> = {

  '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],

  '#': ['1.0', '2.0', '3.0'],

}

const value = ref('')

const options = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {

  options.value = (MOCK_DATA[prefix] || []).map((value) => ({

    value,

  }))

}

</script>
```

## 整体删除

将`whole`属性设置为 `true`，当您按下退格键时，此处的 mention 区域将作为一个整体被删除。设置 "check-is-whole" 属性来自定义检查逻辑。

```vue
<template>

  <el-mention

    v-model="value1"

    whole

    :options="options1"

    style="width: 320px"

    placeholder="Please input"

  />

  <el-divider />

  <el-mention

    v-model="value2"

    :options="options2"

    :prefix="['@', '#']"

    whole

    :check-is-whole="checkIsWhole"

    style="width: 320px"

    placeholder="input @ to mention people, # to mention tag"

    @search="handleSearch"

  />

</template>

<script setup lang="ts">

import { ref } from 'vue'

import type { MentionOption } from 'element-plus'

const MOCK_DATA: Record<string, string[]> = {

  '@': ['Fuphoenixes', 'kooriookami', 'Jeremy', 'btea'],

  '#': ['1.0', '2.0', '3.0'],

}

const value1 = ref('')

const value2 = ref('')

const options1 = ref<MentionOption[]>(

  MOCK_DATA['@'].map((value) => ({ value }))

)

const options2 = ref<MentionOption[]>([])

const handleSearch = (_: string, prefix: string) => {

  options2.value = (MOCK_DATA[prefix] || []).map((value) => ({

    value,

  }))

}

const checkIsWhole = (pattern: string, prefix: string) => {

  return (MOCK_DATA[prefix] || []).includes(pattern)

}

</script>
```

## 在表单里使用

与 `el-form` 一起使用

```vue
<template>

  <el-form

    ref="ruleFormRef"

    style="max-width: 600px"

    :model="ruleForm"

    :rules="rules"

  >

    <el-form-item label="name" prop="name">

      <el-mention v-model="ruleForm.name" :options="options" />

    </el-form-item>

    <el-form-item label="desc" prop="desc">

      <el-mention v-model="ruleForm.desc" type="textarea" :options="options" />

    </el-form-item>

    <el-form-item>

      <el-button type="primary" @click="submitForm(ruleFormRef)">

        Submit

      </el-button>

      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>

    </el-form-item>

  </el-form>

</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {

  name: string

  desc: string

}

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive<RuleForm>({

  name: '',

  desc: '',

})

const options = ref([

  {

    label: 'Fuphoenixes',

    value: 'Fuphoenixes',

  },

  {

    label: 'kooriookami',

    value: 'kooriookami',

  },

  {

    label: 'Jeremy',

    value: 'Jeremy',

  },

  {

    label: 'btea',

    value: 'btea',

  },

])

const rules = reactive<FormRules<RuleForm>>({

  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],

  desc: [{ required: true, message: 'Please input desc', trigger: 'blur' }],

})

const submitForm = async (formEl: FormInstance | undefined) => {

  if (!formEl) return

  await formEl.validate((valid, fields) => {

    if (valid) {

      console.log('submit!')

    } else {

      console.log('error submit!', fields)

    }

  })

}

const resetForm = (formEl: FormInstance | undefined) => {

  if (!formEl) return

  formEl.resetFields()

}

</script>
```

> **TIP**

> 由于这个组件是基于[`el-input`](./input#attributes)派生的，他们的原始属性未被更改，故不在此重复。请跳转查看原组件的相应文档。

## API

### 属性

| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| options | 提及选项列表 | `array` | `[]` |
| props 2.11.3 | options 的配置 | `object` | `{value: 'value', label: 'label', disabled: 'disabled'}` |
| prefix | 触发字段的前缀。字符串长度必须且只能为 1 | `string` | `array` | `'@'` |
| split | 用于拆分提及的字符。字符串长度必须且只能为 1 | `string` | `' '` |
| filter-option | 定制筛选器选项逻辑 | `false` | `Function` | — |
| placement | 设置弹出位置 | `string` | `'bottom'` |
| show-arrow | 下拉菜单的内容是否有箭头 | `boolean` | `false` |
| offset | 下拉面板偏移量 | `number` | `0` |
| whole | 当退格键被按下做删除操作时，是否将提及部分作为整体删除 | `boolean` | `false` |
| check-is-whole | 当退格键被按下做删除操作时，检查是否将提及部分作为整体删除 | `Function` | — |
| loading | 提及的下拉面板是否处于加载状态 | `boolean` | `false` |
| model-value / v-model | 输入值 | `string` | — |
| popper-class | 自定义浮层类名 | `string` / `object` | `string` |
| popper-style 2.11.5 | 自定义浮层类名 | `string` / `object` | — |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` refer to [popper.js doc](https://popper.js.org/docs/v2/) | — |
| [input props](./input#attributes) | — | — | — |

### 事件

| 名称 | 说明 | 类型 |
|---|---|---|
| search | 按下触发字段时触发 | `Function` |
| select | 当用户选择选项时触发 | `Function` |
| whole-remove 2.10.4 | 当整个 mention 被移除，且 `whole` 为 `true` 或 `check-is-whole` 为 `true` 时触发。 | `Function` |
| [input events](./input#events) | — | — |

### Slots

| 名称 | 说明 | 类型 |
|---|---|---|
| label | 自定义标签内容 | `object` |
| loading | 自定义 loading内容 | — |
| header | 下拉列表顶部的内容 | — |
| footer | 下拉列表底部的内容 | — |
| [input slots](./input#slots) | — | — |

### Exposes

| 名称 | 说明 | 类型 |
|---|---|---|
| input | el-input 组件实例 | `object` |
| tooltip | el-tooltip 组件实例 | `object` |
| dropdownVisible 2.8.5 | tooltip 显示状态 | `object` |

## 类型声明

显示类型声明ts`type MentionOption = {

  value?: string

  label?: string

  disabled?: boolean

  [key: string]: any

}

type MentionOptionProps = {

  value?: string

  label?: string

  disabled?: string

  [key: string]: string | undefined

}`