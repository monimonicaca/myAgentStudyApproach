# Descriptions 描述列表

列表形式展示多个字段。

## 基础用法

```vue
<template>

  <el-descriptions title="User Info">

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

</template>
```

## 不同尺寸

```vue
<template>

  <el-radio-group v-model="size">

    <el-radio value="large">Large</el-radio>

    <el-radio value="default">Default</el-radio>

    <el-radio value="small">Small</el-radio>

  </el-radio-group>

  <el-descriptions

    class="margin-top"

    title="With border"

    :column="3"

    :size="size"

    border

  >

    <template #extra>

      <el-button type="primary">Operation</el-button>

    </template>

    <el-descriptions-item>

      <template #label>

        <div class="cell-item">

          <el-icon :style="iconStyle">

            <user />

          </el-icon>

          Username

        </div>

      </template>

      kooriookami

    </el-descriptions-item>

    <el-descriptions-item>

      <template #label>

        <div class="cell-item">

          <el-icon :style="iconStyle">

            <iphone />

          </el-icon>

          Telephone

        </div>

      </template>

      18100000000

    </el-descriptions-item>

    <el-descriptions-item>

      <template #label>

        <div class="cell-item">

          <el-icon :style="iconStyle">

            <location />

          </el-icon>

          Place

        </div>

      </template>

      Suzhou

    </el-descriptions-item>

    <el-descriptions-item>

      <template #label>

        <div class="cell-item">

          <el-icon :style="iconStyle">

            <tickets />

          </el-icon>

          Remarks

        </div>

      </template>

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item>

      <template #label>

        <div class="cell-item">

          <el-icon :style="iconStyle">

            <office-building />

          </el-icon>

          Address

        </div>

      </template>

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

  <el-descriptions

    class="margin-top"

    title="Without border"

    :column="3"

    :size="size"

    :style="blockMargin"

  >

    <template #extra>

      <el-button type="primary">Operation</el-button>

    </template>

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

</template>

<script setup lang="ts">

import { computed, ref } from 'vue'

import {

  Iphone,

  Location,

  OfficeBuilding,

  Tickets,

  User,

} from '@element-plus/icons-vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const iconStyle = computed(() => {

  const marginMap = {

    large: '8px',

    default: '6px',

    small: '4px',

  }

  return {

    marginRight: marginMap[size.value] || marginMap.default,

  }

})

const blockMargin = computed(() => {

  const marginMap = {

    large: '32px',

    default: '28px',

    small: '24px',

  }

  return {

    marginTop: marginMap[size.value] || marginMap.default,

  }

})

</script>

<style scoped>

.el-descriptions {

  margin-top: 20px;

}

.cell-item {

  display: flex;

  align-items: center;

}

.margin-top {

  margin-top: 20px;

}

</style>
```

## 垂直列表

```vue
<template>

  <el-radio-group v-model="size">

    <el-radio value="large">Large</el-radio>

    <el-radio value="default">Default</el-radio>

    <el-radio value="small">Small</el-radio>

  </el-radio-group>

  <el-descriptions

    title="Vertical list with border"

    direction="vertical"

    :column="4"

    :size="size"

    border

  >

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

  <el-descriptions

    title="Vertical list without border"

    :column="4"

    :size="size"

    direction="vertical"

    :style="blockMargin"

  >

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

</template>

<script setup lang="ts">

import { computed, ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

const blockMargin = computed(() => {

  const marginMap = {

    large: '32px',

    default: '28px',

    small: '24px',

  }

  return {

    marginTop: marginMap[size.value] || marginMap.default,

  }

})

</script>

<style scoped>

.el-descriptions {

  margin-top: 20px;

}

</style>
```

## 单元格跨行 2.8.1

```vue
<template>

  <el-descriptions title="Width horizontal list" border>

    <el-descriptions-item

      :rowspan="2"

      :width="140"

      label="Photo"

      align="center"

    >

      <el-image

        style="width: 100px; height: 100px"

        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"

      />

    </el-descriptions-item>

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

  <el-descriptions

    title="Width vertical list"

    direction="vertical"

    border

    style="margin-top: 20px"

  >

    <el-descriptions-item

      :rowspan="2"

      :width="140"

      label="Photo"

      align="center"

    >

      <el-image

        style="width: 100px; height: 100px"

        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"

      />

    </el-descriptions-item>

    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>

    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>

    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>

    <el-descriptions-item label="Remarks">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

</template>
```

## 自定义样式

```vue
<template>

  <el-descriptions title="Customized style list" :column="3" border>

    <el-descriptions-item

      label="Username"

      label-align="right"

      align="center"

      label-class-name="my-label"

      class-name="my-content"

      width="150px"

    >

      kooriookami

    </el-descriptions-item>

    <el-descriptions-item label="Telephone" label-align="right" align="center">

      18100000000

    </el-descriptions-item>

    <el-descriptions-item label="Place" label-align="right" align="center">

      Suzhou

    </el-descriptions-item>

    <el-descriptions-item label="Remarks" label-align="right" align="center">

      <el-tag size="small">School</el-tag>

    </el-descriptions-item>

    <el-descriptions-item label="Address" label-align="right" align="center">

      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province

    </el-descriptions-item>

  </el-descriptions>

</template>

<style scoped>

:deep(.my-label) {

  background: var(--el-color-success-light-9) !important;

}

:deep(.my-content) {

  background: var(--el-color-danger-light-9);

}

</style>
```

## Descriptions API

### Descriptions Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| border | 是否带有边框 | `boolean` | false |
| column | 一行 `Descriptions Item` 的数量 | `number` | 3 |
| direction | 排列的方向 | `enum` | horizontal |
| size | 列表的尺寸 | `enum` | — |
| title | 标题文本，显示在左上方 | `string` | '' |
| extra | 操作区文本，显示在右上方 | `string` | '' |
| label-width 2.8.8 | 每一列的标签宽度 | `string` / `number` | — |

### Descriptions Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义默认内容 | Descriptions Item |
| title | 自定义标题，显示在左上方 | — |
| extra | 自定义操作区，显示在右上方 | — |

## DescriptionsItem API

### DescriptionsItem Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| label | 标签文本 | `string` | '' |
| span | 列的数量 | `number` | 1 |
| rowspan 2.8.1 | 单元格应该跨越的行数 | `number` | 1 |
| width | 列的宽度，不同行相同列的宽度按最大值设定（如无 `border` ，宽度包含标签与内容） | `string` / `number` | '' |
| min-width | 列的最小宽度，与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列（如无 `border`，宽度包含标签与内容） | `string` / `number` | '' |
| label-width 2.8.8 | 列标签宽，如果未设置，它将与列宽度相同。比 `Descriptions` 的 `label-width` 优先级高 | `string` / `number` | — |
| align | 列的内容对齐方式（如无 `border`，对标签和内容均生效） | `enum` | left |
| label-align | 列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 `border`，请使用 `align` 参数） | `enum` | — |
| class-name | 列的内容自定义类名 | `string` | '' |
| label-class-name | column label custom class name | `string` | '' |

### DescriptionsItem Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |
| label | 自定义标签 |