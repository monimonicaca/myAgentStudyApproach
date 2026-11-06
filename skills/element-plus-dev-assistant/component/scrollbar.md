# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

```vue
<template>

  <el-scrollbar height="400px">

    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>

  </el-scrollbar>

</template>

<style scoped>

.scrollbar-demo-item {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 50px;

  margin: 10px;

  text-align: center;

  border-radius: 4px;

  background: var(--el-color-primary-light-9);

  color: var(--el-color-primary);

}

</style>
```

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

```vue
<template>

  <el-scrollbar>

    <div class="scrollbar-flex-content">

      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">

        {{ item }}

      </p>

    </div>

  </el-scrollbar>

</template>

<style scoped>

.scrollbar-flex-content {

  display: flex;

  width: fit-content;

}

.scrollbar-demo-item {

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 100px;

  height: 50px;

  margin: 10px;

  text-align: center;

  border-radius: 4px;

  background: var(--el-color-danger-light-9);

  color: var(--el-color-danger);

}

</style>
```

## 最大高度

当元素高度超过最大高度，才会显示滚动条。

```vue
<template>

  <el-button @click="add">Add Item</el-button>

  <el-button @click="onDelete">Delete Item</el-button>

  <el-scrollbar max-height="400px">

    <p v-for="item in count" :key="item" class="scrollbar-demo-item">

      {{ item }}

    </p>

  </el-scrollbar>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const count = ref(3)

const add = () => {

  count.value++

}

const onDelete = () => {

  if (count.value > 0) {

    count.value--

  }

}

</script>

<style scoped>

.scrollbar-demo-item {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 50px;

  margin: 10px;

  text-align: center;

  border-radius: 4px;

  background: var(--el-color-primary-light-9);

  color: var(--el-color-primary);

}

</style>
```

## 手动滚动

通过使用 `setScrollTop` 与 `setScrollLeft` 方法，可以手动控制滚动条滚动。

```vue
<template>

  <el-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">

    <div ref="innerRef">

      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">

        {{ item }}

      </p>

    </div>

  </el-scrollbar>

  <el-slider

    v-model="value"

    :max="max"

    :format-tooltip="formatTooltip"

    @input="inputSlider"

  />

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

import type { ScrollbarInstance } from 'element-plus'

type Arrayable<T> = T | T[]

const max = ref(0)

const value = ref(0)

const innerRef = ref<HTMLDivElement>()

const scrollbarRef = ref<ScrollbarInstance>()

onMounted(() => {

  max.value = innerRef.value!.clientHeight - 380

})

const inputSlider = (value: Arrayable<number>) => {

  scrollbarRef.value!.setScrollTop(value as number)

}

const scroll = ({ scrollTop }: { scrollTop: number }) => {

  value.value = scrollTop

}

const formatTooltip = (value: number) => `${value} px`

</script>

<style scoped>

.scrollbar-demo-item {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 50px;

  margin: 10px;

  text-align: center;

  border-radius: 4px;

  background: var(--el-color-primary-light-9);

  color: var(--el-color-primary);

}

.el-slider {

  margin-top: 20px;

}

</style>
```

## 无限滚动2.10.0

`end-reached` 是在滚动条到达底部时触发的。它可以用作无限滚动。

```vue
<template>

  <el-scrollbar height="400px" @end-reached="loadMore">

    <p v-for="item in num" :key="item" class="scrollbar-demo-item">

      {{ item }}

    </p>

  </el-scrollbar>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { ScrollbarDirection } from 'element-plus'

const num = ref(30)

const loadMore = (direction: ScrollbarDirection) => {

  if (direction === 'bottom') {

    num.value += 5

  }

}

</script>

<style scoped>

.scrollbar-demo-item {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 50px;

  margin: 10px;

  text-align: center;

  border-radius: 4px;

  background: var(--el-color-primary-light-9);

  color: var(--el-color-primary);

}

.el-slider {

  margin-top: 20px;

}

</style>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| height | 滚动条高度 | `string` / `number` | — |
| max-height | 滚动条最大高度 | `string` / `number` | — |
| native | 是否使用原生滚动条样式 | `boolean` | false |
| wrap-style | 包裹容器的自定义样式 | `string` / `object` | — |
| wrap-class | 包裹容器的自定义类名 | `string` | — |
| view-style | 视图的自定义样式 | `string` / `object` | — |
| view-class | 视图的自定义类名 | `string` | — |
| noresize | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 | `boolean` | false |
| tag | 视图的元素标签 | `string` | div |
| always | 滚动条总是显示 | `boolean` | false |
| min-size | 滚动条最小尺寸 | `number` | 20 |
| id 2.4.0 | 视图ID | `string` | — |
| role 2.4.0 a11y | 视图的角色 | `string` | — |
| aria-label 2.4.0 a11y | 视图的 aria-label | `string` | — |
| aria-orientation 2.4.0 a11y | 视图的 aria-orientation | `enum` | — |
| tabindex 2.8.3 | 容器的tabindex | `number` / `string` | — |
| distance 2.10.5 | 触发到达底部事件的距离（像素） | `number` | 0 |

### Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| scroll | 当触发滚动事件时，返回滚动的距离 | `Function` |
| end-reached 2.10.0 | 触发滚动结束时的触发器 | `Function` |

### Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |

### Exposes

| 名称 | 说明 | 类型 |
|---|---|---|
| handleScroll | 触发滚动事件 | `Function` |
| scrollTo | 滚动到一组特定坐标 | `Function` |
| setScrollTop | 设置滚动条到顶部的距离 | `Function` |
| setScrollLeft | 设置滚动条到左边的距离 | `Function` |
| update | 手动更新滚动条状态 | `Function` |
| wrapRef | 滚动条包裹的 ref 对象 | `object` |