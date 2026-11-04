# Steps 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

## 基础用法

简单的步骤条。

设置 `active` 属性，接受一个 `Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置 `space` 属性即可，它接受 `Number`，单位为 `px`，如果不设置，则为自适应。设置 `finish-status` 属性可以改变已经完成的步骤的状态。

```vue
<template>

  <el-steps style="max-width: 600px" :active="active" finish-status="success">

    <el-step title="Step 1" />

    <el-step title="Step 2" />

    <el-step title="Step 3" />

  </el-steps>

  <el-button style="margin-top: 12px" @click="next">Next step</el-button>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const active = ref(0)

const next = () => {

  if (active.value++ > 2) active.value = 0

}

</script>
```

## 含状态的步骤条

每一步骤显示出该步骤的状态。

也可以使用 `title` 具名插槽，可以用 `slot` 的方式来取代属性的设置，在本文档最后的列表中有所有的插槽可供参考。

```vue
<template>

  <el-steps

    style="max-width: 600px"

    :space="200"

    :active="1"

    finish-status="success"

  >

    <el-step title="Done" />

    <el-step title="Processing" />

    <el-step title="Step 3" />

  </el-steps>

</template>
```

## 居中的步骤条

标题和描述可以居中。

```vue
<template>

  <el-steps style="max-width: 600px" :active="2" align-center>

    <el-step title="Step 1" description="Some description" />

    <el-step title="Step 2" description="Some description" />

    <el-step title="Step 3" description="Some description" />

  </el-steps>

</template>
```

## 带描述的步骤栏

每一步都有描述。

```vue
<template>

  <el-steps style="max-width: 600px" :active="1">

    <el-step title="Step 1" description="Some description" />

    <el-step title="Step 2" description="Some description" />

    <el-step title="Step 3" description="Some description" />

  </el-steps>

</template>
```

## 带图标的步骤条

可以在步骤栏中使用各种自定义图标。

通过 `icon` 属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名 `slot` 来使用自定义的图标。

```vue
<template>

  <el-steps style="max-width: 600px" :active="1">

    <el-step title="Step 1" :icon="Edit" />

    <el-step title="Step 2" :icon="Upload" />

    <el-step title="Step 3" :icon="Picture" />

  </el-steps>

</template>

<script lang="ts" setup>

import { Edit, Picture, Upload } from '@element-plus/icons-vue'

</script>
```

## 垂直的步骤条

垂直方向的步骤条。

只需要在 `el-steps` 元素中设置 `direction` 属性为 `vertical` 即可。

```vue
<template>

  <div style="height: 300px; max-width: 600px">

    <el-steps direction="vertical" :active="1">

      <el-step title="Step 1" />

      <el-step title="Step 2" />

      <el-step title="Step 3" />

    </el-steps>

  </div>

</template>
```

## 简洁风格的步骤条

设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

```vue
<template>

  <el-steps

    class="mb-4"

    style="max-width: 600px"

    :space="200"

    :active="1"

    simple

  >

    <el-step title="Step 1" :icon="Edit" />

    <el-step title="Step 2" :icon="UploadFilled" />

    <el-step title="Step 3" :icon="Picture" />

  </el-steps>

  <el-steps style="max-width: 600px" :active="1" finish-status="success" simple>

    <el-step title="Step 1" />

    <el-step title="Step 2" />

    <el-step title="Step 3" />

  </el-steps>

</template>

<script lang="ts" setup>

import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'

</script>
```

## Steps API

### Steps Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| space | 每个 step 的间距，不填写将自适应间距。支持百分比。 | `number` / `string` | '' |
| direction | 显示方向 | `enum` | horizontal |
| active | 设置当前激活步骤 | `number` | 0 |
| process-status | 设置当前步骤的状态 | `enum` | process |
| finish-status | 设置结束步骤的状态 | `enum` | finish |
| align-center | 进行居中对齐 | `boolean` | — |
| simple | 是否应用简洁风格 | `boolean` | — |

### Steps Events

| 插槽名 | 说明 | 参数： |
|---|---|---|
| change | 当活动步骤发生变化时触发 | `Function` |

### Steps Slots

| 属性名 | 说明 | 子标签 |
|---|---|---|
| default | 默认插槽 | Step |

## Step API

### Step Attributes

| 插槽名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| title | 标题 | `string` | '' |
| description | 描述文案 | `string` | '' |
| icon | Step 组件的自定义图标。也支持 slot 方式写入 | `string` / `Component` | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | `enum` | '' |

### Step Slots

| 方法名 | 描述 |
|---|---|
| icon | 自定义图标 |
| title | 自定义标题 |
| description | 自定义描述文案 |