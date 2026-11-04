# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框

## 展示位置

Popconfirm 提供 9 种展示位置。

使用 `title` 属性来设置点击参考元素时显示的信息。由 `placement` 属性决定 Popconfirm 的位置。该属性值格式为：`[方向]-[对齐位置]`，可供选择的四个方向分别是`top`、`left`、`right`、`bottom`，可供选择的三种对齐方式分别是`start`、`end`、`null`，默认的对齐方式为null。以 `placement="left-end"` 为例，气泡确认框会显示在悬停元素的左侧，且提示信息的底部与悬停元素的底部对齐。

```vue
<template>

  <div class="popconfirm-base-box">

    <div class="row center">

      <el-popconfirm

        class="box-item"

        title="Top Left prompts info"

        placement="top-start"

      >

        <template #reference>

          <el-button>top-start</el-button>

        </template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Top Center prompts info"

        placement="top"

      >

        <template #reference>

          <el-button>top</el-button>

        </template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Top Right prompts info"

        placement="top-end"

      >

        <template #reference>

          <el-button>top-end</el-button>

        </template>

      </el-popconfirm>

    </div>

    <div class="row">

      <el-popconfirm

        class="box-item"

        title="Left Top prompts info"

        placement="left-start"

      >

        <template #reference>

          <el-button>left-start</el-button>

        </template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Right Top prompts info"

        placement="right-start"

      >

        <template #reference>

          <el-button>right-start</el-button>

        </template>

      </el-popconfirm>

    </div>

    <div class="row">

      <el-popconfirm

        class="box-item"

        title="Left Center prompts info"

        placement="left"

      >

        <template #reference>

          <el-button class="mt-3 mb-3">left</el-button>

        </template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Right Center prompts info"

        placement="right"

      >

        <template #reference>

          <el-button>right</el-button>

        </template>

      </el-popconfirm>

    </div>

    <div class="row">

      <el-popconfirm

        class="box-item"

        title="Left Bottom prompts info"

        placement="left-end"

      >

        <template #reference>

          <el-button>left-end</el-button>

        </template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Right Bottom prompts info"

        placement="right-end"

      >

        <template #reference>

          <el-button>right-end</el-button>

        </template>

      </el-popconfirm>

    </div>

    <div class="row center">

      <el-popconfirm

        class="box-item"

        title="Bottom Left prompts info"

        placement="bottom-start"

      >

        <template #reference> <el-button>bottom-start</el-button></template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Bottom Center prompts info"

        placement="bottom"

      >

        <template #reference> <el-button>bottom</el-button></template>

      </el-popconfirm>

      <el-popconfirm

        class="box-item"

        title="Bottom Right prompts info"

        placement="bottom-end"

      >

        <template #reference>

          <el-button>bottom-end</el-button>

        </template>

      </el-popconfirm>

    </div>

  </div>

</template>

<style>

.popconfirm-base-box {

  width: 600px;

}

.popconfirm-base-box .row {

  display: flex;

  align-items: center;

  justify-content: space-between;

}

.popconfirm-base-box .center {

  justify-content: center;

}

.popconfirm-base-box .box-item {

  width: 110px;

  margin-top: 10px;

}

</style>
```

## 基础用法

Popconfirm 的属性与 Popover 很类似，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

在 Popconfirm 中，只有 `title` 属性可用，`content` 属性会被忽略。

```vue
<template>

  <el-popconfirm title="Are you sure to delete this?">

    <template #reference>

      <el-button>Delete</el-button>

    </template>

  </el-popconfirm>

</template>
```

## 自定义弹出框的内容

可以在 Popconfirm 中自定义内容。

```vue
<template>

  <el-popconfirm

    width="220"

    :icon="InfoFilled"

    icon-color="#626AEF"

    title="Are you sure to delete this?"

    @cancel="onCancel"

  >

    <template #reference>

      <el-button>Delete</el-button>

    </template>

    <template #actions="{ confirm, cancel }">

      <el-button size="small" @click="cancel">No!</el-button>

      <el-button

        type="danger"

        size="small"

        :disabled="!clicked"

        @click="confirm"

      >

        Yes?

      </el-button>

    </template>

  </el-popconfirm>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { InfoFilled } from '@element-plus/icons-vue'

const clicked = ref(false)

function onCancel() {

  clicked.value = true

}

</script>
```

## 多种让 Popconfirm 出现的方法

点击按钮触发事件

```vue
<template>

  <el-popconfirm

    confirm-button-text="Yes"

    cancel-button-text="No"

    :icon="InfoFilled"

    icon-color="#626AEF"

    title="Are you sure to delete this?"

    @confirm="confirmEvent"

    @cancel="cancelEvent"

  >

    <template #reference>

      <el-button>Delete</el-button>

    </template>

  </el-popconfirm>

</template>

<script setup lang="ts">

import { InfoFilled } from '@element-plus/icons-vue'

const confirmEvent = () => {

  console.log('confirm!')

}

const cancelEvent = () => {

  console.log('cancel!')

}

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认 |
|---|---|---|---|
| title | 标题 | `string` | — |
| effect 2.11.2 | Tooltip 主题，内置了 `dark` / `light` 两种 | `enum`** / `string` | light |
| confirm-button-text | 确认按钮文字 | `string` | — |
| cancel-button-text | 取消按钮文字 | `string` | — |
| confirm-button-type | 确认按钮类型 | `enum` | primary |
| cancel-button-type | 取消按钮类型 | `enum` | text |
| icon | 自定义图标 | `string` / `Component` | QuestionFilled |
| icon-color | Icon 颜色 | `string` | #f90 |
| hide-icon | 是否隐藏 Icon | `boolean` | false |
| hide-after | 关闭时的延迟 | `number` | 200 |
| teleported | 是否将 popover 的下拉列表插入至 body 元素 | `boolean` | true |
| persistent | 当 popover 组件长时间不触发且 `persistent` 属性设置为 `false` 时, popover 将会被删除 | `boolean` | false |
| width | 弹层宽度，最小宽度 150px | `string` / `number` | 150 |
| [tooltip](./tooltip#attributes) | 继承自 Tooltip 的所有属性，但不包括：`popper-class`、`popper-style`、`fallback-placements` | — | — |

### Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| confirm | 点击确认按钮时触发 | `Function` |
| cancel | 点击取消按钮时触发 | `Function` |

### Slots

| 插槽名 | 说明 | 类型 |
|---|---|---|
| reference | 触发 Popconfirm 显示的 HTML 元素 | — |
| actions 2.8.1 | 页脚的内容 | `object` |

### 暴露

| 方法名 | 详情 | Type |
|---|---|---|
| popperRef 2.10.7 | el-popper 组件实例 | `object` |
| hide 2.10.7 | hide popconfirm | `Function` |