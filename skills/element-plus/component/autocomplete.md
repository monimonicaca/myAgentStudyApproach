# 自动补全输入框

根据输入内容提供对应的输入建议。

## 基础用法

Autocomplete 组件提供输入建议。

`fetch-suggestions` 属性是返回建议输入的方法。在此示例中， `querySearch(queryString, cb)` 方法通过 `cb(data)` 给 Autocomplete 组件返回建议。

```vue
<template>

  <div class="demo-autocomplete">

    <div class="demo-block">

      <div class="demo-title">list suggestions when activated</div>

      <el-autocomplete

        v-model="state1"

        :fetch-suggestions="querySearch"

        clearable

        class="w-50"

        placeholder="Please Input"

        @select="handleSelect"

      />

    </div>

    <div class="demo-block">

      <div class="demo-title">list suggestions on input</div>

      <el-autocomplete

        v-model="state2"

        :fetch-suggestions="querySearch"

        :trigger-on-focus="false"

        clearable

        class="w-50"

        placeholder="Please Input"

        @select="handleSelect"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

interface RestaurantItem {

  value: string

  link: string

}

const state1 = ref('')

const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])

const querySearch = (queryString: string, cb: any) => {

  const results = queryString

    ? restaurants.value.filter(createFilter(queryString))

    : restaurants.value

  // call callback function to return suggestions

  cb(results)

}

const createFilter = (queryString: string) => {

  return (restaurant: RestaurantItem) => {

    return (

      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

    )

  }

}

const loadAll = () => {

  return [

    { value: 'vue', link: 'https://github.com/vuejs/vue' },

    { value: 'element', link: 'https://github.com/ElemeFE/element' },

    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },

    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },

    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },

    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },

    { value: 'babel', link: 'https://github.com/babel/babel' },

  ]

}

const handleSelect = (item: Record<string, any>) => {

  console.log(item)

}

onMounted(() => {

  restaurants.value = loadAll()

})

</script>

<style scoped>

.demo-autocomplete {

  display: flex;

  flex-wrap: wrap;

  gap: 2rem;

}

.demo-block {

  display: flex;

  flex-direction: column;

  gap: 0.5rem;

}

.demo-title {

  font-size: 0.875rem;

  color: var(--el-text-color-secondary);

  min-height: 2.5em;

  display: flex;

  align-items: center;

}

@media screen and (max-width: 768px) {

  .demo-autocomplete {

    gap: 1rem;

  }

  .demo-block {

    width: 100%;

  }

}

</style>
```

## 自定义模板

自定义如何显示输入建议。

使用 `scoped slot` 自定义输入建议。在这个范围中，你可以使用 `item` 键来访问当前输入建议对象。

```vue
<template>

  <el-autocomplete

    v-model="state"

    :fetch-suggestions="querySearch"

    popper-class="my-autocomplete"

    placeholder="Please input"

    @select="handleSelect"

  >

    <template #suffix>

      <el-icon class="el-input__icon" @click="handleIconClick">

        <edit />

      </el-icon>

    </template>

    <template #default="{ item }">

      <div class="value">{{ item.value }}</div>

      <span class="link">{{ item.link }}</span>

    </template>

  </el-autocomplete>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

import { Edit } from '@element-plus/icons-vue'

interface LinkItem {

  value: string

  link: string

}

const state = ref('')

const links = ref<LinkItem[]>([])

const querySearch = (queryString: string, cb) => {

  const results = queryString

    ? links.value.filter(createFilter(queryString))

    : links.value

  // call callback function to return suggestion objects

  cb(results)

}

const createFilter = (queryString: string) => {

  return (restaurant: LinkItem) => {

    return (

      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

    )

  }

}

const loadAll = () => {

  return [

    { value: 'vue', link: 'https://github.com/vuejs/vue' },

    { value: 'element', link: 'https://github.com/ElemeFE/element' },

    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },

    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },

    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },

    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },

    { value: 'babel', link: 'https://github.com/babel/babel' },

  ]

}

const handleSelect = (item: Record<string, any>) => {

  console.log(item)

}

const handleIconClick = (ev: Event) => {

  console.log(ev)

}

onMounted(() => {

  links.value = loadAll()

})

</script>

<style>

.my-autocomplete li {

  line-height: normal;

  padding: 7px;

}

.my-autocomplete li .name {

  text-overflow: ellipsis;

  overflow: hidden;

}

.my-autocomplete li .addr {

  font-size: 12px;

  color: #b4b4b4;

}

.my-autocomplete li .highlighted .addr {

  color: #ddd;

}

</style>
```

## 远程搜索

从服务端搜索数据。

```vue
<template>

  <el-autocomplete

    v-model="state"

    :fetch-suggestions="querySearchAsync"

    placeholder="Please input"

    @select="handleSelect"

  />

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

const state = ref('')

interface LinkItem {

  value: string

  link: string

}

const links = ref<LinkItem[]>([])

const loadAll = () => {

  return [

    { value: 'vue', link: 'https://github.com/vuejs/vue' },

    { value: 'element', link: 'https://github.com/ElemeFE/element' },

    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },

    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },

    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },

    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },

    { value: 'babel', link: 'https://github.com/babel/babel' },

  ]

}

let timeout: ReturnType<typeof setTimeout>

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {

  const results = queryString

    ? links.value.filter(createFilter(queryString))

    : links.value

  clearTimeout(timeout)

  timeout = setTimeout(() => {

    cb(results)

  }, 3000 * Math.random())

}

const createFilter = (queryString: string) => {

  return (restaurant: LinkItem) => {

    return (

      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

    )

  }

}

const handleSelect = (item: Record<string, any>) => {

  console.log(item)

}

onMounted(() => {

  links.value = loadAll()

})

</script>
```

## 自定义加载 2.5.0

修改加载区域内容

```vue
<template>

  <div class="demo-autocomplete">

    <div class="demo-block">

      <div class="demo-title">loading icon1</div>

      <el-autocomplete

        v-model="state"

        :fetch-suggestions="querySearchAsync"

        class="w-50"

        placeholder="Please input"

        @select="handleSelect"

      >

        <template #loading>

          <svg class="circular" viewBox="0 0 50 50">

            <circle class="path" cx="25" cy="25" r="20" fill="none" />

          </svg>

        </template>

      </el-autocomplete>

    </div>

    <div class="demo-block">

      <div class="demo-title">loading icon2</div>

      <el-autocomplete

        v-model="state"

        :fetch-suggestions="querySearchAsync"

        class="w-50"

        placeholder="Please input"

        @select="handleSelect"

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

      </el-autocomplete>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

const state = ref('')

interface LinkItem {

  value: string

  link: string

}

const links = ref<LinkItem[]>([])

const loadAll = () => {

  return [

    { value: 'vue', link: 'https://github.com/vuejs/vue' },

    { value: 'element', link: 'https://github.com/ElemeFE/element' },

    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },

    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },

    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },

    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },

    { value: 'babel', link: 'https://github.com/babel/babel' },

  ]

}

let timeout: ReturnType<typeof setTimeout>

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {

  const results = queryString

    ? links.value.filter(createFilter(queryString))

    : links.value

  clearTimeout(timeout)

  timeout = setTimeout(() => {

    cb(results)

  }, 5000 * Math.random())

}

const createFilter = (queryString: string) => {

  return (restaurant: LinkItem) => {

    return (

      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

    )

  }

}

const handleSelect = (item: Record<string, any>) => {

  console.log(item)

}

onMounted(() => {

  links.value = loadAll()

})

</script>

<style scoped>

.demo-autocomplete {

  display: flex;

  flex-wrap: wrap;

  gap: 2rem;

}

.demo-block {

  display: flex;

  flex-direction: column;

  gap: 0.5rem;

}

.demo-title {

  font-size: 0.875rem;

  color: var(--el-text-color-secondary);

  min-height: 2.5em;

  display: flex;

  align-items: center;

}

@media screen and (max-width: 768px) {

  .demo-autocomplete {

    gap: 1rem;

  }

  .demo-block {

    width: 100%;

  }

}

</style>

<style>

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

## 自定义头部与底部 2.10.6

你可以通过插槽来自定义下拉菜单的头部和底部。

使用插槽自定义内容。

```vue
<template>

  <div class="autocomplete-custom-header-footer">

    <div>

      <p>Custom header content</p>

      <el-autocomplete

        v-model="headerSlotState"

        :fetch-suggestions="querySearchAsync"

        placeholder="Please input"

        @select="handleSelect"

      >

        <template #header>header content</template>

      </el-autocomplete>

    </div>

    <div>

      <p>Custom footer content</p>

      <el-autocomplete

        ref="footerAutocompleteRef"

        v-model="footerSlotstate"

        :fetch-suggestions="querySearchAsync"

        placeholder="Please input"

        @select="handleSelect"

      >

        <template #footer>

          <el-button link size="small" @click="handleClear"> Clear </el-button>

        </template>

      </el-autocomplete>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

const headerSlotState = ref('')

const footerSlotstate = ref('')

interface LinkItem {

  value: string

  link: string

}

const links = ref<LinkItem[]>([])

const loadAll = () => {

  return [

    { value: 'vue', link: 'https://github.com/vuejs/vue' },

    { value: 'element', link: 'https://github.com/ElemeFE/element' },

    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },

    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },

    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },

    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },

    { value: 'babel', link: 'https://github.com/babel/babel' },

  ]

}

let timeout: ReturnType<typeof setTimeout>

const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {

  const results = queryString

    ? links.value.filter(createFilter(queryString))

    : links.value

  clearTimeout(timeout)

  timeout = setTimeout(() => {

    cb(results)

  }, 3000 * Math.random())

}

const createFilter = (queryString: string) => {

  return (restaurant: LinkItem) => {

    return (

      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0

    )

  }

}

const handleSelect = (item: Record<string, any>) => {

  console.log(item)

}

onMounted(() => {

  links.value = loadAll()

})

const footerAutocompleteRef = ref()

const handleClear = () => {

  footerSlotstate.value = ''

  footerAutocompleteRef.value.getData()

}

</script>

<style scoped>

.autocomplete-custom-header-footer {

  display: flex;

}

.autocomplete-custom-header-footer > div {

  flex: 1;

  text-align: center;

}

.autocomplete-custom-header-footer > div > :deep(.el-autocomplete) {

  width: 50%;

}

.autocomplete-custom-header-footer > div:not(:last-child) {

  border-right: 1px solid var(--el-border-color);

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string` | — |
| placeholder | 占位文本 | `string` | — |
| clearable | 是否可清空 | `boolean` | false |
| disabled | 自动补全组件是否被禁用 | `boolean` | false |
| value-key | 输入建议对象中用于显示的键名 | `string` | value |
| debounce | 获取输入建议的防抖延时，单位为毫秒 | `number` | 300 |
| placement | 菜单弹出位置 | `enum` | bottom-start |
| fetch-suggestions | 获取输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 `callback(data:[])` 来返回它 | `array` / `Function` | — |
| trigger-on-focus | whether show suggestions when input focus | `boolean` | true |
| select-when-unmatched | 在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件 | `boolean` | false |
| name | 等价于原生 input `name` 属性 | `string` | — |
| aria-label a11y 2.7.2 | 原生 `aria-label`属性 | `string` | — |
| hide-loading | 是否隐藏远程加载时的加载图标 | `boolean` | false |
| popper-class | 下拉列表的类名 | `string` / `object` | '' |
| popper-style 2.11.4 | autocomplete 下拉列表的类名 | `string` / `object` | — |
| popper-options 2.14.0 | [popper.js](https://popper.js.org/docs/v2/) parameters | `object`refer to [popper.js](https://popper.js.org/docs/v2/) doc | {} |
| show-after 2.14.0 | 下拉菜单的内容是否有箭头 | `boolean` | true |
| teleported | 是否将下拉列表元素插入 append-to 指向的元素下 | `boolean` | true |
| append-to 2.9.9 | 下拉框挂载到哪个 DOM 元素 | `CSSSelector` / `HTMLElement` | — |
| highlight-first-item | 是否默认高亮远程搜索结果的第一项 | `boolean` | false |
| fit-input-width | 下拉框的宽度是否与输入框相同 | `boolean` | false |
| popper-append-to-body deprecated | 是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false | `boolean` | false |
| loop-navigation 2.11.4 | 键盘导航是否从末尾循环到开头 | `boolean` | true |
| [input props](./input#attributes) | — | — | — |

### Events

| 事件名 | 详情 | 类型 |
|---|---|---|
| blur | 当选择器的输入框失去焦点时触发 | `Function` |
| focus | 当选择器的输入框获得焦点时触发 | `Function` |
| input | 在 Input 值改变时触发 | `Function` |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | `Function` |
| select | 点击选中建议项时触发 | `Function` |
| change | 在 Input 值改变时触发 | `Function` |

### Slots

| 插槽名 | 描述说明 | 类型 |
|---|---|---|
| default | 自定义输入建议的内容。 | `object` |
| header 2.10.6 | 下拉列表顶部的内容 | - |
| footer 2.10.6 | 下拉列表底部的内容 | - |
| prefix | 输入框头部内容 | - |
| suffix | 输入框尾部内容 | - |
| prepend | 输入框前置内容，在 prefix 之前 | - |
| append | 输入框后置内容，在 suffix 之后 | - |
| loading 2.5.0 | 修改加载区域内容 | - |

### Exposes

| 名称 | 详情 | 类型 |
|---|---|---|
| activated | 自动补全输入框是否被激活 | `object` |
| blur | 使 input 失去焦点 | `Function` |
| close | 折叠建议列表 | `Function` |
| focus | 使 input 获取焦点 | `Function` |
| handleSelect | 手动触发选中建议事件 | `Function` |
| handleKeyEnter | 手动触发键盘回车事件 | `Function` |
| highlightedIndex | 当前高亮显示选项的索引 | `object` |
| highlight | 在建议中高亮显示一个项目 | `Function` |
| inputRef | el-input 组件实例 | `object` |
| loading | 远程获取提示内容的加载状态指示器 | `object` |
| popperRef | el-tooltip 组件实例 | `object` |
| suggestions | 获取自动补全结果 | `object` |
| getData 2.8.4 | 加载建议列表 | `Function` |