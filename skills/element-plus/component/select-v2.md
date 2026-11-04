# Virtualized Select 虚拟化选择器

> **TIP**

> 这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在 [GitHub](https://github.com/element-plus/element-plus/issues) 中提交 issue 以便我们进行处理。

## 背景

在某些使用情况下，单个选择器可能最终加载数万行数据。将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。为了更好的用户和开发者体验，我们决定添加此组件。

## 基础用法

适用广泛的基础选择器

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    placeholder="Please select"

    style="width: 240px"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 多选

最基础的多选选择器

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    placeholder="Please select"

    style="width: 240px"

    multiple

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const options = ref(

  Array.from({ length: 1000 }).map((_, idx) => ({

    value: `Option ${idx + 1}`,

    label: `${initials[idx % 10]}${idx}`,

  }))

)

</script>
```

## 尺寸

使用 `size` 属性改变选择器大小。除了默认大小外，还有另外两个选项： `large`, `small`。

```vue
<template>

  <div class="flex flex-wrap gap-4 items-center">

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      size="large"

      style="width: 240px"

    />

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

    />

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      size="small"

      style="width: 240px"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>

<style scoped>

.example-showcase .el-select-v2 {

  margin-right: 20px;

}

</style>
```

## 隐藏多余标签的多选

默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

```vue
<template>

  <div class="m-4">

    <p>use collapse-tags</p>

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      multiple

      collapse-tags

    />

  </div>

  <div class="m-4">

    <p>use collapse-tags-tooltip</p>

    <el-select-v2

      v-model="value2"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      multiple

      collapse-tags

      collapse-tags-tooltip

    />

  </div>

  <div class="m-4">

    <p>use max-collapse-tags</p>

    <el-select-v2

      v-model="value3"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      multiple

      collapse-tags

      collapse-tags-tooltip

      :max-collapse-tags="3"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const value2 = ref([])

const value3 = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 可过滤的多选

当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项。

```vue
<template>

  <el-select-v2

    v-model="value"

    filterable

    :options="options"

    placeholder="Please select"

    style="width: 240px"

    multiple

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 禁用选择器本身或选项

您可以选择禁用 Select 或者 Select 中的某个选项。

```vue
<template>

  <el-select-v2

    v-model="value"

    filterable

    :options="options"

    placeholder="Please select"

    style="width: 240px; margin-right: 16px; vertical-align: middle"

    multiple

  />

  <el-select-v2

    v-model="value"

    disabled

    filterable

    :options="options"

    placeholder="Please select"

    style="width: 240px; vertical-align: middle"

    multiple

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

  disabled: idx % 10 === 0,

}))

</script>
```

## 给选项进行分组

只要数据格式满足特定要求，我们就可以按照自己的意愿为选项进行分组。

```vue
<template>

  <el-select-v2

    v-model="value"

    filterable

    :options="options"

    placeholder="Please select"

    style="width: 240px"

    multiple

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const options = Array.from({ length: 10 }).map((_, idx) => {

  const label = idx + 1

  return {

    value: `Group ${label}`,

    label: `Group ${label}`,

    options: Array.from({ length: 10 }).map((_, idx) => ({

      value: `Option ${idx + 1 + 10 * label}`,

      label: `${initials[idx % 10]}${idx + 1 + 10 * label}`,

    })),

  }

})

</script>
```

## 一键清除

我们可以同时清除所有选定的选项。此设定也适用于单选。

```vue
<template>

  <el-select-v2

    v-model="value1"

    :options="options"

    placeholder="Please select"

    style="width: 240px; margin-right: 16px; vertical-align: middle"

    multiple

    clearable

  />

  <el-select-v2

    v-model="value2"

    :options="options"

    placeholder="Please select"

    style="width: 240px; vertical-align: middle"

    clearable

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])

const value2 = ref()

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 自定义选项的渲染模板

我们也可以通过自定义模板来渲染自己想要的选项内容。

```vue
<template>

  <el-select-v2

    v-model="value"

    filterable

    :options="options"

    placeholder="Please select"

    style="width: 240px"

    multiple

  >

    <template #default="{ item }">

      <span style="margin-right: 8px">{{ item.label }}</span>

      <span style="color: var(--el-text-color-secondary); font-size: 13px">

        {{ item.value }}

      </span>

    </template>

  </el-select-v2>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 自定义下拉菜单的头部 2.5.2

您可以自定义下拉菜单的头部。

使用slot 自定义内容

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    multiple

    clearable

    collapse-tags

    placeholder="Select"

    popper-class="custom-header"

    :max-collapse-tags="1"

    style="width: 240px"

  >

    <template #header>

      <el-checkbox

        v-model="checkAll"

        :indeterminate="indeterminate"

        @change="handleCheckAll"

      >

        All

      </el-checkbox>

    </template>

  </el-select-v2>

</template>

<script lang="ts" setup>

import { ref, watch } from 'vue'

import type { CheckboxValueType } from 'element-plus'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const checkAll = ref(false)

const indeterminate = ref(false)

const value = ref<CheckboxValueType[]>([])

const options = ref(

  Array.from({ length: 1000 }).map((_, idx) => ({

    value: `Option ${idx + 1}`,

    label: `${initials[idx % 10]}${idx}`,

  }))

)

watch(value, (val) => {

  if (val.length === 0) {

    checkAll.value = false

    indeterminate.value = false

  } else if (val.length === options.value.length) {

    checkAll.value = true

    indeterminate.value = false

  } else {

    indeterminate.value = true

  }

})

const handleCheckAll = (val: CheckboxValueType) => {

  indeterminate.value = false

  if (val) {

    value.value = options.value.map((_) => _.value)

  } else {

    value.value = []

  }

}

</script>

<style>

.custom-header {

  .el-checkbox {

    display: flex;

    height: unset;

  }

}

</style>
```

## 自定义下拉菜单的底部 2.5.2

您可以自定义下拉菜单的底部。

使用slot 自定义内容

```vue
<template>

  <el-select-v2

    ref="select"

    v-model="value"

    :options="options"

    placeholder="Select"

    style="width: 240px"

  >

    <template #footer>

      <el-button v-if="!isAdding" text bg size="small" @click="onAddOption">

        Add an option

      </el-button>

      <div v-else class="select-footer">

        <el-input

          v-model="optionName"

          class="option-input"

          placeholder="input option name"

          size="small"

        />

        <div>

          <el-button type="primary" size="small" @click="onConfirm">

            confirm

          </el-button>

          <el-button size="small" @click="clear">cancel</el-button>

        </div>

      </div>

    </template>

  </el-select-v2>

</template>

<script lang="ts" setup>

import { nextTick, ref } from 'vue'

import type { CheckboxValueType, SelectV2Instance } from 'element-plus'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const select = ref<SelectV2Instance>()

const isAdding = ref(false)

const value = ref<CheckboxValueType[]>([])

const optionName = ref('')

const options = ref(

  Array.from({ length: 1000 }).map((_, idx) => ({

    value: `Option ${idx + 1}`,

    label: `${initials[idx % 10]}${idx}`,

  }))

)

const onAddOption = () => {

  isAdding.value = true

}

const onConfirm = () => {

  if (optionName.value) {

    options.value.push({

      label: optionName.value,

      value: optionName.value,

    })

    clear()

    nextTick(() => {

      select.value?.scrollTo(options.value.length - 1)

    })

  }

}

const clear = () => {

  optionName.value = ''

  isAdding.value = false

}

</script>

<style>

.select-footer {

  display: flex;

  flex-direction: column;

  .option-input {

    width: 100%;

    margin-bottom: 8px;

  }

}

</style>
```

## 创建临时选项

创建并选中未包含在初始选项中的条目。

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。本例还使用了 `default-first-option` 属性，在该属性为 `true` 的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

> **TIP**

> 最好在使用 `allow-create` 属性的同时设置 `:reserve-keyword="false"`。

```vue
<template>

  <div style="flex: auto">

    <div>

      <el-select-v2

        v-model="value1"

        :options="options"

        placeholder="Please select"

        style="width: 240px; margin-right: 16px; vertical-align: middle"

        allow-create

        default-first-option

        filterable

        multiple

        clearable

      />

      <el-select-v2

        v-model="value2"

        :options="options"

        placeholder="Please select"

        style="width: 240px; vertical-align: middle"

        allow-create

        default-first-option

        filterable

        clearable

      />

    </div>

    <div>

      <p style="margin-top: 20px; margin-bottom: 8px">

        set reserve-keyword false

      </p>

      <el-select-v2

        v-model="value3"

        :options="options"

        placeholder="Please select"

        style="width: 240px; margin-right: 16px; vertical-align: middle"

        allow-create

        default-first-option

        filterable

        multiple

        clearable

        :reserve-keyword="false"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref([])

const value2 = ref()

const value3 = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 远程搜索

输入关键字以从远程服务器中查找数据。

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

```vue
<template>

  <div class="flex flex-wrap">

    <div class="m-4">

      <p>default</p>

      <el-select-v2

        v-model="value"

        style="width: 240px"

        multiple

        filterable

        remote

        :remote-method="remoteMethod"

        clearable

        :options="options"

        :loading="loading"

        placeholder="Please enter a keyword"

      />

    </div>

    <div class="m-4">

      <p>use remote-show-suffix</p>

      <el-select-v2

        v-model="value"

        style="width: 240px"

        multiple

        filterable

        remote

        :remote-method="remoteMethod"

        remote-show-suffix

        clearable

        :options="options"

        :loading="loading"

        placeholder="Please enter a keyword"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const states = [

  'Alabama',

  'Alaska',

  'Arizona',

  'Arkansas',

  'California',

  'Colorado',

  'Connecticut',

  'Delaware',

  'Florida',

  'Georgia',

  'Hawaii',

  'Idaho',

  'Illinois',

  'Indiana',

  'Iowa',

  'Kansas',

  'Kentucky',

  'Louisiana',

  'Maine',

  'Maryland',

  'Massachusetts',

  'Michigan',

  'Minnesota',

  'Mississippi',

  'Missouri',

  'Montana',

  'Nebraska',

  'Nevada',

  'New Hampshire',

  'New Jersey',

  'New Mexico',

  'New York',

  'North Carolina',

  'North Dakota',

  'Ohio',

  'Oklahoma',

  'Oregon',

  'Pennsylvania',

  'Rhode Island',

  'South Carolina',

  'South Dakota',

  'Tennessee',

  'Texas',

  'Utah',

  'Vermont',

  'Virginia',

  'Washington',

  'West Virginia',

  'Wisconsin',

  'Wyoming',

]

const list = states.map((item): ListItem => {

  return { value: `value:${item}`, label: `label:${item}` }

})

interface ListItem {

  value: string

  label: string

}

const value = ref([])

const options = ref<ListItem[]>([])

const loading = ref(false)

const remoteMethod = (query: string) => {

  if (query !== '') {

    loading.value = true

    setTimeout(() => {

      loading.value = false

      options.value = list.filter((item) => {

        return item.label.toLowerCase().includes(query.toLowerCase())

      })

    }, 200)

  } else {

    options.value = []

  }

}

</script>
```

## 使用 value-key 键属性

当 `options.value` 是一个对象时，您应该为它设置一个唯一的标识名称

> **TIP**

> 在 2.4.0 之前，`value-key`既用作所选对象的唯一值，也用作`options`中表示值的对应 key。现在 `value-key` 仅作为所选对象的唯一值使用，选项中值的 key 是 `props.value`.

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    placeholder="Please select"

    value-key="name"

    style="width: 240px"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref({ name: 'Option 1', test: 'test 0' })

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: {

    name: `Option ${idx + 1}`,

    test: `test ${idx % 3}`,

  },

  label: `${initials[idx % 10]}${idx}`,

}))

</script>

<style scoped>

.example-showcase .el-select-v2 {

  margin-right: 20px;

}

</style>
```

## 自定义选项 2.4.2

当您的 `options` 格式不同于默认格式 您可以通过 `props` 属性自定义 `options`

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    :props="props"

    placeholder="Please select"

    style="width: 240px"

    filterable

    multiple

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const props = {

  label: 'name',

  value: 'id',

}

const value = ref([])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  id: `Option ${idx + 1}`,

  name: `${initials[idx % 10]}${idx}`,

}))

</script>
```

## 自定义标签 2.5.0

您可以自定义标签。

将自定义的标签插入 `el-select` 的 slot 中即可。 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.

```vue
<template>

  <el-select-v2

    v-model="value"

    multiple

    placeholder="Select"

    :options="colors"

    style="width: 240px"

  >

    <template #default="{ item }">

      <div class="flex items-center">

        <el-tag :color="item.value" style="margin-right: 8px" size="small" />

        <span :style="{ color: item.value }">{{ item.label }}</span>

      </div>

    </template>

    <template #tag>

      <el-tag v-for="color in value" :key="color" :color="color" />

    </template>

  </el-select-v2>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref<string[]>([])

const colors = [

  {

    value: '#E63415',

    label: 'red',

  },

  {

    value: '#FF6600',

    label: 'orange',

  },

  {

    value: '#FFDE0A',

    label: 'yellow',

  },

  {

    value: '#1EC79D',

    label: 'green',

  },

  {

    value: '#14CCCC',

    label: 'cyan',

  },

  {

    value: '#4167F0',

    label: 'blue',

  },

  {

    value: '#6222C9',

    label: 'purple',

  },

]

colors.forEach((color) => {

  value.value.push(color.value)

})

</script>

<style scoped>

.el-tag {

  border: none;

  aspect-ratio: 1;

}

</style>
```

## 自定义加载 2.5.2

修改加载区域内容

```vue
<template>

  <div class="flex flex-wrap">

    <div class="m-4">

      <p>loading icon1</p>

      <el-select-v2

        v-model="value"

        multiple

        filterable

        remote

        reserve-keyword

        placeholder="Please enter a keyword"

        :remote-method="remoteMethod"

        :loading="loading"

        :options="options"

        style="width: 240px"

      >

        <template #loading>

          <svg class="circular" viewBox="0 0 50 50">

            <circle class="path" cx="25" cy="25" r="20" fill="none" />

          </svg>

        </template>

      </el-select-v2>

    </div>

    <div class="m-4">

      <p>loading icon2</p>

      <el-select-v2

        v-model="value"

        multiple

        filterable

        remote

        reserve-keyword

        placeholder="Please enter a keyword"

        :remote-method="remoteMethod"

        :loading="loading"

        :options="options"

        style="width: 240px"

      >

        <template #loading>

          <el-icon class="is-loading">

            <svg class="circular" viewBox="0 0 20 20">

              <g

                class="path2 loading-path"

                stroke-width="0"

                style="animation: none; stroke: none"

              >

                <circle r="3.375" class="dot1" rx="0" ry="0" />

                <circle r="3.375" class="dot2" rx="0" ry="0" />

                <circle r="3.375" class="dot4" rx="0" ry="0" />

                <circle r="3.375" class="dot3" rx="0" ry="0" />

              </g>

            </svg>

          </el-icon>

        </template>

      </el-select-v2>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

interface ListItem {

  value: string

  label: string

}

const list = ref<ListItem[]>([])

const options = ref<ListItem[]>([])

const value = ref<string[]>([])

const loading = ref(false)

onMounted(() => {

  list.value = states.map((item) => {

    return { value: `value:${item}`, label: `label:${item}` }

  })

})

const remoteMethod = (query: string) => {

  if (query) {

    loading.value = true

    setTimeout(() => {

      loading.value = false

      options.value = list.value.filter((item) => {

        return item.label.toLowerCase().includes(query.toLowerCase())

      })

    }, 3000)

  } else {

    options.value = []

  }

}

const states = [

  'Alabama',

  'Alaska',

  'Arizona',

  'Arkansas',

  'California',

  'Colorado',

  'Connecticut',

  'Delaware',

  'Florida',

  'Georgia',

  'Hawaii',

  'Idaho',

  'Illinois',

  'Indiana',

  'Iowa',

  'Kansas',

  'Kentucky',

  'Louisiana',

  'Maine',

  'Maryland',

  'Massachusetts',

  'Michigan',

  'Minnesota',

  'Mississippi',

  'Missouri',

  'Montana',

  'Nebraska',

  'Nevada',

  'New Hampshire',

  'New Jersey',

  'New Mexico',

  'New York',

  'North Carolina',

  'North Dakota',

  'Ohio',

  'Oklahoma',

  'Oregon',

  'Pennsylvania',

  'Rhode Island',

  'South Carolina',

  'South Dakota',

  'Tennessee',

  'Texas',

  'Utah',

  'Vermont',

  'Virginia',

  'Washington',

  'West Virginia',

  'Wisconsin',

  'Wyoming',

]

</script>

<style>

.el-select-dropdown__loading {

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100px;

  font-size: 20px;

}

.circular {

  display: inline;

  height: 30px;

  width: 30px;

  animation: loading-rotate 2s linear infinite;

}

.path {

  animation: loading-dash 1.5s ease-in-out infinite;

  stroke-dasharray: 90, 150;

  stroke-dashoffset: 0;

  stroke-width: 2;

  stroke: var(--el-color-primary);

  stroke-linecap: round;

}

.loading-path .dot1 {

  transform: translate(3.75px, 3.75px);

  fill: var(--el-color-primary);

  animation: custom-spin-move 1s infinite linear alternate;

  opacity: 0.3;

}

.loading-path .dot2 {

  transform: translate(calc(100% - 3.75px), 3.75px);

  fill: var(--el-color-primary);

  animation: custom-spin-move 1s infinite linear alternate;

  opacity: 0.3;

  animation-delay: 0.4s;

}

.loading-path .dot3 {

  transform: translate(3.75px, calc(100% - 3.75px));

  fill: var(--el-color-primary);

  animation: custom-spin-move 1s infinite linear alternate;

  opacity: 0.3;

  animation-delay: 1.2s;

}

.loading-path .dot4 {

  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));

  fill: var(--el-color-primary);

  animation: custom-spin-move 1s infinite linear alternate;

  opacity: 0.3;

  animation-delay: 0.8s;

}

@keyframes loading-rotate {

  to {

    transform: rotate(360deg);

  }

}

@keyframes loading-dash {

  0% {

    stroke-dasharray: 1, 200;

    stroke-dashoffset: 0;

  }

  50% {

    stroke-dasharray: 90, 150;

    stroke-dashoffset: -40px;

  }

  100% {

    stroke-dasharray: 90, 150;

    stroke-dashoffset: -120px;

  }

}

@keyframes custom-spin-move {

  to {

    opacity: 1;

  }

}

</style>
```

## 空值配置2.7.0

若想配置如空字符串为有效值而不是空值，可以配置 `empty-values` 为 `[null, undefined]`.

如果您想要将清空值更改为 `null`, 请设置 `value-on-clear` 为 `null`

```vue
<template>

  <el-select-v2

    v-model="value"

    :options="options"

    :empty-values="[null, undefined]"

    :value-on-clear="null"

    clearable

    placeholder="Select"

    style="width: 240px"

    @clear="handleClear"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ElMessage } from 'element-plus'

const value = ref('')

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

options.unshift({

  value: '',

  label: 'All',

})

const handleClear = () => {

  ElMessage.info(`The clear value is: ${value.value}`)

}

</script>
```

## 自定义标签 2.7.4

您可以自定义标签

```vue
<template>

  <div class="flex flex-wrap gap-4 items-center">

    <el-select-v2

      v-model="value1"

      :options="options"

      placeholder="Select"

      style="width: 240px"

      clearable

    >

      <template #label="{ label, value }">

        <span>{{ label }}: </span>

        <span style="font-weight: bold">{{ value }}</span>

      </template>

    </el-select-v2>

    <el-select-v2

      v-model="value2"

      :options="options"

      placeholder="Select"

      style="width: 240px"

      clearable

      multiple

    >

      <template #label="{ label, value }">

        <span>{{ label }}: </span>

        <span style="font-weight: bold">{{ value }}</span>

      </template>

    </el-select-v2>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value1 = ref<string>('Option 1')

const value2 = ref<string[]>(['Option 1'])

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}`,

}))

</script>

<style scoped></style>
```

## 自定义宽度 2.9.2

下拉框的宽度默认根据`label`的值计算。如果通过`default slot`自定义下拉框选项，选项中显示的文本可能与`label`的值不相等，从而导致计算错误。在这种情况下，可以通过设置`fit-input-width`属性为一个数字来固定其宽度。

```vue
<template>

  <div class="flex flex-wrap gap-4 items-center">

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      :fit-input-width="false"

    />

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      fit-input-width

    />

    <el-select-v2

      v-model="value"

      :options="options"

      placeholder="Please select"

      style="width: 240px"

      :fit-input-width="440"

    >

      <template #default="{ item }">

        <span>{{ item.value + item.label }}</span>

      </template>

    </el-select-v2>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

const value = ref()

const options = Array.from({ length: 1000 }).map((_, idx) => ({

  value: `Option ${idx + 1}`,

  label: `${initials[idx % 10]}${idx}${'-'.repeat(Math.ceil(idx / 25))}`,

}))

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string` / `number` / `boolean` / `object` / `array` | — |
| options | 选项的数据源， `value` 的 key 和 `label` 可以通过 `props`自定义. | `array` | — |
| [props](#props) 2.4.2 | 配置选项，具体看下表 | `object` | — |
| multiple | 是否多选 | `boolean` | false |
| disabled | 是否禁用 | `boolean` | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | `string` | value |
| size | 组件大小 | `enum` | '' |
| clearable | 是否可以清空选项 | `boolean` | false |
| clear-icon | 自定义清除图标 | `string` / `object` | CircleClose |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | `boolean` | false |
| multiple-limit | 多选时可被选择的最大数目。当被设置为0时，可被选择的数目不设限。 | `number` | 0 |
| id | 原生 input 的 id | `string` | — |
| name | 选择器的原生name属性 | `string` | — |
| effect | tooltip 主题，内置了 `dark` / `light` 两种 | `enum`** / `string` | light |
| autocomplete | 自动完成选择输入 | `string` | off |
| placeholder | 占位文字 | `string` | Please select |
| filterable | Select 组件是否可筛选 | `boolean` | false |
| allow-create | 是否允许创建新条目，当使用该属性时，`filterable`必须设置为`true` | `boolean` | false |
| filter-method | 自定义筛选方法的第一个参数是当前输入的值。当`filterable`设置为 true 时才会生效 | `Function` | — |
| loading | 是否从远程加载数据 | `boolean` | false |
| loading-text | 从服务器加载数据时显示的文本，默认为“Loading” | `string` | — |
| reserve-keyword | 筛选时，是否在选择选项后保留关键字 | `boolean` | true |
| default-first-option | 是否在输入框按下回车时，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | `boolean` | false |
| no-match-text | 搜索条件无匹配时显示的文字，也可以使用 `empty` 插槽设置，默认是 “No matching data'” | `string` | — |
| no-data-text | 当在没有数据时显示的文字，你同时可以使用empty插槽进行设置。 | `string` | No Data |
| popper-class | Select 下拉菜单和标签提示的自定义类名 | `string` / `object` | '' |
| popper-style 2.11.0 | Select 下拉菜单和标签提示的自定义样式 | `string` / `object` | — |
| teleported | 是否使用 teleport。设置成 `true`则会被追加到 `append-to` 的位置 | `boolean` | true |
| append-to 2.8.8 | 下拉框挂载到哪个 DOM 元素 | `CSSSelector` / `HTMLElement` | — |
| persistent | 当下拉选择器未被激活并且`persistent`设置为`false`，选择器会被删除。 | `boolean` | true |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters | `object`refer to [popper.js](https://popper.js.org/docs/v2/) doc | {} |
| automatic-dropdown | 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单 | `boolean` | false |
| fit-input-width 2.9.2 | 无论下拉框的宽度是否与输入框相同，如果值为`number`，则宽度是固定的。 | `boolean` / `number` | true |
| suffix-icon 2.9.8 | 自定义后缀图标组件 | `string` / `object` | ArrowDown |
| height | 下拉菜单的高度，每一个选项为34px | `number` | 274 |
| item-height | 下拉项的高度 | `number` | 34 |
| estimated-option-height | 控制虚拟列表大小模式：如果未定义，则列表使用来自 `item-height` 的固定项目高度；如果提供，则列表使用动态项目大小，并将此值作为估计的项目高度。 | `number` | — |
| scrollbar-always-on | 是否总是展示滚动条 | `boolean` | false |
| remote | 是否从服务器获取数据 | `boolean` | false |
| debounce 2.11.7 | 远程搜索时的防抖延迟（以毫秒为单位） | `number` | 300 |
| remote-method | 当输入值发生变化时触发的函数。它的参数就是当前的输入值。当`filterable`设置为 true 时才会生效 | `Function` | — |
|  | 远程搜索方法显示后缀图标 | `boolean` | false |
| validate-event | 是否触发表单验证 | `boolean` | true |
| offset 2.8.8 | 下拉面板偏移量 | `number` | 12 |
| show-arrow 2.8.8 | 下拉菜单的内容是否有箭头 | `boolean` | true |
| placement | 下拉框出现的位置 | `enum` | bottom-start |
| fallback-placements 2.5.6 | dropdown 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | ['bottom-start', 'top-start', 'right', 'left'] |
| collapse-tags-tooltip 2.3.0 | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此功能，`collapse-tags`的值必须为true | `boolean` | false |
| [tag-tooltip](#tag-tooltip) 2.13.3 | 折叠标签工具提示的配置对象。要使用此项， `collapse-tags` 和 `collapse-tags-tooltip` 必须为 true | `object` | {} |
| max-collapse-tags 2.3.0 | 需要显示的 Tag 的最大数量。只有当 `collapse-tags` 设置为 true 时才会生效。 | `number` | 1 |
| tag-type 2.5.0 | 标签类型 | `enum` | info |
| tag-effect 2.7.7 | 标签效果 | `enum` | light |
| aria-label a11y 2.5.0 | 等价于原生 input `aria-label` 属性 | `string` | — |
| empty-values 2.7.0 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.7.0 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| popper-append-to-body deprecated | 是否将弹出框插入至 body 元素当弹出框的位置出现问题时，你可以尝试将该属性设置为false。 |  |  |
| tabindex 2.9.0 | input 的 tabindex | `string` / `number` | — |

### props

| Attribute | 说明 | Type | Default |
|---|---|---|---|
| value | 指定选项的值为选项对象的某个属性值 | `string` | value |
| label | 指定节点标签为节点对象的某个属性值 | `string` | label |
| options | 指定选项的子选项为选项对象的某个属性值 | `string` | options |
| disabled | 指定选项的禁用为选项对象的某个属性值 | `string` | disabled |

### tag-tooltip 2.13.3

> **备用机制**

> 标签工具提示中的属性遵循此优先级顺序：

> 1. 在标签工具提示对象中明确定义的字段。

> 2. 从 el-select 继承的共享属性（例如 effect、popper-class、popper-style、teleported、append-to、popper-options）。

> 3. 底层 el-tooltip 组件的默认值。这样，您就可以覆盖标签的特定工具提示行为，同时保持与默认的“选择”下拉菜单的一致性。

> **自定义容器位置**

> 当将 Tooltip 添加到自定义容器时（通过 `append-to` 属性），应将容器配置为 `position: relative` 或 `position: absolute`，以确保准确定位。此外，如果需要防止工具提示超出其边界，可以对容器应用 `overflow: hidden`。

| 属性 | 说明 | 类型 | Default |
|---|---|---|---|
| append-to | 指示 Tooltip 的内容将附加在哪一个网页元素上 | `CSSSelector` / `HTMLElement` | — |
| placement | Tooltip 组件出现的位置 | `enum` | bottom |
| fallback-placements | Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | ['bottom', 'top', 'right', 'left'] |
| effect | 文字提示（Tooltip）的主题，内置`dark`和`light`两种。 | `enum`** / `string` | ::: |
| popper-class | 为 Tooltip 的 popper 添加自定义类名 | `string` | — |
| popper-style | 为 Tooltip 的 popper 添加自定义样式 | `string` / `object` | — |
| transition | Tooltip 所应用过渡动画的名称 | `string` | — |
| teleported | 是否使用 teleport。设置成 `true`则会被追加到 `append-to` 的位置 | `boolean` | — |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) parameters | `object`refer to [popper.js](https://popper.js.org/docs/v2/) doc | — |
| show-after | 在触发后多久显示内容，单位毫秒 | `number` | — |
| hide-after | 关闭时的延迟 | `number` | — |
| auto-close | tooltip 出现后自动隐藏延时，单位毫秒 | `number` | — |
| offset | Tooltip 出现位置的偏移量 | `number` | — |

### 事件

| 名称 | 详情 | Type |
|---|---|---|
| change | 当所选值更改时触发，参数是当前选中的值 | `Function` |
| visible-change | 当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 `true`, 否则将是 `false` | `Function` |
| remove-tag | 当一个标签在多个模式下被移除时触发，参数将被移除标签值 | `Function` |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | `Function` |
| blur | 当选择器的输入框失去焦点时触发 | `Function` |
| focus | 当选择器的输入框获得焦点时触发 | `Function` |
| end-reached 2.14.0 | 下拉滚动到结束时触发器 | `Function` |

### Slots

| 名称 | 描述 | 类型 |
|---|---|---|
| default | 自定义 Option 模板 | — |
| header 2.5.2 | 下拉列表顶部的内容 | — |
| footer 2.5.2 | 下拉列表底部的内容 | — |
| empty | 自定义当选项为空时的内容 | — |
| prefix | 输入框的前缀 | ::: |
| tag 2.5.0 | 作为 Select 组件的内容时，子标签 `data`、`selectDisabled` 和 `deleteTag` 是在版本 2.10.3 中新增的。 | `object` |
| loading 2.5.2 | select 组件自定义 loading内容 | ::: |
| label 2.7.4 | select 组件自定义标签内容 `index` 引入于2.11.2 | `object` |

### Exposes

| 名称 | Description | Type |
|---|---|---|
| focus | 使选择器的输入框获取焦点 | `Function` |
| blur | 使选择器的输入框失去焦点，并隐藏下拉框 | `Function` |
| selectedLabel 2.8.5 | 获取当前选中的标签 | `object` |