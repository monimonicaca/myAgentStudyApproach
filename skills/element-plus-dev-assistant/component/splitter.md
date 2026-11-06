# Splitter 分隔面板 beta

可将区域水平或垂直分隔，并可自由拖动以调整各个区域的大小。

## 基础用法

最基本的用法，如果未传入默认尺寸，将自动平均分配。

```vue
<template>

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter>

      <el-splitter-panel size="30%">

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel :min="200">

        <div class="demo-panel">2</div>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## 垂直布局

使用垂直方向。

```vue
<template>

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter layout="vertical">

      <el-splitter-panel>

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel>

        <div class="demo-panel">2</div>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## 可折叠

配置 `collapsible` 可提供快速收缩功能。你可以使用 `min` 属性来防止折叠后通过拖拽进行扩展。

```vue
<template>

  <el-switch

    v-model="isCollapsible"

    active-text="enable"

    inactive-text="disable"

    inline-prompt

    class="mb-2"

  />

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter>

      <el-splitter-panel :collapsible="isCollapsible" min="50">

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel :collapsible="isCollapsible">

        <div class="demo-panel">2</div>

      </el-splitter-panel>

      <el-splitter-panel>

        <div class="demo-panel">3</div>

      </el-splitter-panel>

      <el-splitter-panel :collapsible="isCollapsible">

        <el-splitter layout="vertical">

          <el-splitter-panel :collapsible="isCollapsible">

            <div class="demo-panel">4</div>

          </el-splitter-panel>

          <el-splitter-panel :collapsible="isCollapsible">

            <div class="demo-panel">5</div>

          </el-splitter-panel>

        </el-splitter>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const isCollapsible = ref(true)

</script>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## 禁用拖动

当任一面板禁用 `resizable` 时，拖拽功能将被禁用。

```vue
<template>

  <el-switch

    v-model="resizable"

    active-text="enable"

    inactive-text="disable"

    inline-prompt

    class="mb-2"

  />

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter>

      <el-splitter-panel>

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel :resizable="resizable">

        <div class="demo-panel">

          drag {{ resizable ? 'enable' : 'disable' }}

        </div>

      </el-splitter-panel>

      <el-splitter-panel>

        <div class="demo-panel">3</div>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const resizable = ref(false)

</script>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## 面板大小

`v-model:size` 可以获取面板的大小。

```vue
<template>

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter

      @resize-start="handleResizeStart"

      @resize-end="handleResizeEnd"

      @resize="handleResize"

    >

      <el-splitter-panel>

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel v-model:size="size" :max="200" :min="50">

        <div class="demo-panel">{{ size }}px</div>

      </el-splitter-panel>

      <el-splitter-panel>

        <div class="demo-panel">3</div>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const size = ref(100)

const handleResizeStart = (index: number, sizes: number[]) => {

  console.log('resizeStart', index, sizes)

}

const handleResize = (index: number, sizes: number[]) => {

  console.log('resize', index, sizes)

}

const handleResizeEnd = (index: number, sizes: number[]) => {

  console.log('resizeEnd', index, sizes)

}

</script>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## 延迟2.11.0

当启用`lazy`时，面板大小将不会在拖动时实时更新，只能在拖动结束后更新。

```vue
<template>

  <div

    style="height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px"

  >

    <el-splitter lazy>

      <el-splitter-panel collapsible min="50">

        <div class="demo-panel">1</div>

      </el-splitter-panel>

      <el-splitter-panel collapsible>

        <div class="demo-panel">2</div>

      </el-splitter-panel>

      <el-splitter-panel collapsible>

        <div class="demo-panel">3</div>

      </el-splitter-panel>

    </el-splitter>

  </div>

</template>

<style scoped>

.demo-panel {

  display: flex;

  align-items: center;

  justify-content: center;

  height: 100%;

}

</style>
```

## Splitter API

### Splitter Attributes

| 名称 | 详情 | 类型 | 默认值 |
|---|---|---|---|
| layout | 分隔面板的布局方向 | `enum` | horizontal |
| lazy 2.11.0 | 是否使用懒加载 | `boolean` | false |

### Splitter Events

| 名称 | 详情 | 类型 |
|---|---|---|
| resize-start | 开始调整面板大小时触发，`index` 是拖拽条的索引。 | `Function` |
| resize | 调整面板大小时触发，`index` 是拖拽条的索引。 | `Function` |
| resize-end | 面板调整大小结束时触发，`index` 是拖拽条的索引。 | `Function` |
| collapse 2.10.3 | 当面板折叠时触发，`index` 是拖拽条的索引。 | `Function` |

## SplitterPanel API

### SplitterPanel Attributes

| 名称 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| size / v-model:size | 面板大小(像素或百分比) | `string` / `number` | - |
| min | 面板最小尺寸(像素或百分比) | `string` / `number` | - |
| max | 面板的最大尺寸(像素或百分比) | `string` / `number` | - |
| resizable | 是否可以调整面板大小 | `boolean` | true |
| collapsible | 面板是否可折叠。 | `boolean` | false |

### SplitterPanel Events

| 方法名 | 说明 | 类型 |
|---|---|---|
| update:size | 当面板大小改变时触发 | `Function` |

### SplitterPanel Slots

| 插槽名 | 详情 |
|---|---|
| default | 面板的默认内容 |
| start-collapsible | 自定义起始折叠按钮的内容 |
| end-collapsible | 结束可折叠按钮的自定义内容 |

### SplitterPanel Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| splitterPanelRef 2.11.9 | SplitterPanel html 元素 | `object` |