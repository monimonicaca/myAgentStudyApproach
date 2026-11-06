# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

```vue
<template>

  <div class="demo-collapse">

    <el-collapse v-model="activeNames" @change="handleChange">

      <el-collapse-item title="Consistency" name="1">

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Controllability" name="4">

        <div>

          Decision making: giving advice about operations is acceptable, but do

          not make decisions for the users;

        </div>

        <div>

          Controlled consequences: users should be granted the freedom to

          operate, including canceling, aborting or terminating current

          operation.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { CollapseModelValue } from 'element-plus'

const activeNames = ref(['1'])

const handleChange = (val: CollapseModelValue) => {

  console.log(val)

}

</script>
```

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

```vue
<template>

  <div class="demo-collapse">

    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="Consistency" name="1">

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Controllability" name="4">

        <div>

          Decision making: giving advices about operations is acceptable, but do

          not make decisions for the users;

        </div>

        <div>

          Controlled consequences: users should be granted the freedom to

          operate, including canceling, aborting or terminating current

          operation.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const activeName = ref('1')

</script>
```

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

> **TIP**

> 从版本 2.9.10开始， `title` 插槽提供一个 `isActive` 属性，显示当前折叠项是否活跃。

```vue
<template>

  <div class="demo-collapse">

    <el-collapse accordion>

      <el-collapse-item name="1">

        <template #title="{ isActive }">

          <div :class="['title-wrapper', { 'is-active': isActive }]">

            Consistency

            <el-icon class="header-icon">

              <info-filled />

            </el-icon>

          </div>

        </template>

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Controllability" name="4">

        <div>

          Decision making: giving advices about operations is acceptable, but do

          not make decisions for the users;

        </div>

        <div>

          Controlled consequences: users should be granted the freedom to

          operate, including canceling, aborting or terminating current

          operation.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script setup lang="ts">

import { InfoFilled } from '@element-plus/icons-vue'

</script>

<style scoped>

.title-wrapper {

  display: flex;

  align-items: center;

  gap: 4px;

}

.title-wrapper.is-active {

  color: var(--el-color-primary);

}

</style>
```

## 自定义图标 2.8.3

除了使用 `icon` 属性外，您还可以自定义面板项目图标，从而添加自定义内容。

```vue
<template>

  <div class="demo-collapse">

    <el-collapse v-model="activeNames" @change="handleChange">

      <el-collapse-item title="Consistency" name="1" :icon="CaretRight">

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <template #icon="{ isActive }">

          <span class="icon-ele">

            {{ isActive ? 'Expanded' : 'Collapsed' }}

          </span>

        </template>

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Controllability" name="4">

        <div>

          Decision making: giving advices about operations is acceptable, but do

          not make decisions for the users;

        </div>

        <div>

          Controlled consequences: users should be granted the freedom to

          operate, including canceling, aborting or terminating current

          operation.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { CaretRight } from '@element-plus/icons-vue'

import type { CollapseModelValue } from 'element-plus'

const activeNames = ref(['1'])

const handleChange = (val: CollapseModelValue) => {

  console.log(val)

}

</script>

<style scoped>

.icon-ele {

  margin: 0 8px 0 auto;

  color: #409eff;

}

</style>
```

## 自定义图标位置 2.9.10

使用 `expand-icon-position` 属性，您可以自定义图标位置。

```vue
<template>

  <div class="demo-collapse-position">

    <div class="flex items-center mb-4">

      <span class="mr-4">expand icon position: </span>

      <el-switch

        v-model="position"

        inactive-value="left"

        active-value="right"

        inactive-text="left"

        active-text="right"

        style="--el-switch-off-color: #88b8fe"

      />

    </div>

    <el-collapse :expand-icon-position="position">

      <el-collapse-item title="Consistency" name="1">

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { CollapseIconPositionType } from 'element-plus'

const position = ref<CollapseIconPositionType>('left')

</script>
```

## 阻止折叠 2.9.11

设置 `beforeChange` 属性，若返回 false 或者返回 `Promise` 且被 `reject` ，则停止切换。

```vue
<template>

  <div v-loading="loading" class="demo-collapse">

    <div class="flex items-center mb-4">

      <span class="mr-4">before collapse return: </span>

      <el-switch

        v-model="before"

        :inactive-value="false"

        :active-value="true"

        inactive-text="false"

        active-text="true"

      />

    </div>

    <el-collapse v-model="activeNames" :before-collapse="beforeCollapse">

      <el-collapse-item title="Consistency" name="1">

        <div>

          Consistent with real life: in line with the process and logic of real

          life, and comply with languages and habits that the users are used to;

        </div>

        <div>

          Consistent within interface: all elements should be consistent, such

          as: design style, icons and texts, position of elements, etc.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Feedback" name="2">

        <div>

          Operation feedback: enable the users to clearly perceive their

          operations by style updates and interactive effects;

        </div>

        <div>

          Visual feedback: reflect current state by updating or rearranging

          elements of the page.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Efficiency" name="3">

        <div>

          Simplify the process: keep operating process simple and intuitive;

        </div>

        <div>

          Definite and clear: enunciate your intentions clearly so that the

          users can quickly understand and make decisions;

        </div>

        <div>

          Easy to identify: the interface should be straightforward, which helps

          the users to identify and frees them from memorizing and recalling.

        </div>

      </el-collapse-item>

      <el-collapse-item title="Controllability" name="4">

        <div>

          Decision making: giving advices about operations is acceptable, but do

          not make decisions for the users;

        </div>

        <div>

          Controlled consequences: users should be granted the freedom to

          operate, including canceling, aborting or terminating current

          operation.

        </div>

      </el-collapse-item>

    </el-collapse>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const before = ref(true)

const activeNames = ref(['1'])

const loading = ref(false)

const beforeCollapse = (): Promise<boolean> => {

  loading.value = true

  return new Promise((resolve) => {

    setTimeout(() => {

      loading.value = false

      return resolve(before.value)

    }, 1000)

  })

}

</script>
```

## Collapse API

### Collapse Attributes

| 属性名 | 详情 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array` | `string` / `array` | [] |
| accordion | 是否手风琴模式 | `boolean` | false |
| expand-icon-position 2.9.10 | 设置展开图标位置 | `enum` | right |
| before-collapse 2.9.11 | 折叠状态更改之前的折叠钩子。返回 `false` 或者返回 `Promise` 且被 reject 则停止切换 | `Function` | — |

### Collapse Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 切换当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array` | `Function` |

### Collapse Slots

| 插槽名 | Description | 子标签 |
|---|---|---|
| default | 自定义默认内容 | Collapse Item |

### Collapse Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| activeNames | 当前活动的面板名称 | `object` |
| setActiveNames | 设置活动面板名称 | `Function` |

## Collapse Item API

### Collapse Item Attributes

| 属性名 | 说明 | Type | 默认值 |
|---|---|---|---|
| name | 唯一标志符 | `string` / `number` | — |
| title | 面板标题 | `string` | '' |
| icon 2.8.3 | 折叠项目的图标 | `string` / `Component` | ArrowRight |
| disabled | 是否禁用 | `boolean` | false |

### Collapse Item Slot

| Name | Description | Type |
|---|---|---|
| default | Collapse Item 的内容 | — |
| title | Collapse Item 的标题 | `object` |
| icon 2.8.3 | 折叠项目图标的内容 | `object` |

### Collapse Item Exposes

| Name | Description | Type |
|---|---|---|
| isActive | 当前折叠项是否激活 | `object` |