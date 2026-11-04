# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<el-container>`：外层容器。当子元素中包含 `<el-header>` 或 `<el-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主要区域容器。

`<el-footer>`：底栏容器。

> **TIP**

> 以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外， `<el-container>`的直接子元素必须是后四个组件中的一个或多个。后四个组件的父元素必须是一个 `<el-container>`

## 常见页面布局

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-header>Header</el-header>

      <el-main>Main</el-main>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-header>Header</el-header>

      <el-main>Main</el-main>

      <el-footer>Footer</el-footer>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-aside width="200px">Aside</el-aside>

      <el-main>Main</el-main>

      <el-aside width="200px">Aside</el-aside>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-header>Header</el-header>

      <el-container>

        <el-aside width="200px">Aside</el-aside>

        <el-main>Main</el-main>

      </el-container>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-header>Header</el-header>

      <el-container>

        <el-aside width="200px">Aside</el-aside>

        <el-container>

          <el-main>Main</el-main>

          <el-footer>Footer</el-footer>

        </el-container>

      </el-container>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-aside width="200px">Aside</el-aside>

      <el-container>

        <el-header>Header</el-header>

        <el-main>Main</el-main>

      </el-container>

    </el-container>

  </div>

</template>
```

```vue
<template>

  <div class="common-layout">

    <el-container>

      <el-aside width="200px">Aside</el-aside>

      <el-container>

        <el-header>Header</el-header>

        <el-main>Main</el-main>

        <el-footer>Footer</el-footer>

      </el-container>

    </el-container>

  </div>

</template>
```

## 例子

```vue
<template>

  <el-container class="layout-container-demo" style="height: 500px">

    <el-aside width="200px">

      <el-scrollbar>

        <el-menu :default-openeds="['1', '3']">

          <el-sub-menu index="1">

            <template #title>

              <el-icon><message /></el-icon>Navigator One

            </template>

            <el-menu-item-group>

              <template #title>Group 1</template>

              <el-menu-item index="1-1">Option 1</el-menu-item>

              <el-menu-item index="1-2">Option 2</el-menu-item>

            </el-menu-item-group>

            <el-menu-item-group title="Group 2">

              <el-menu-item index="1-3">Option 3</el-menu-item>

            </el-menu-item-group>

            <el-sub-menu index="1-4">

              <template #title>Option4</template>

              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>

            </el-sub-menu>

          </el-sub-menu>

          <el-sub-menu index="2">

            <template #title>

              <el-icon><icon-menu /></el-icon>Navigator Two

            </template>

            <el-menu-item-group>

              <template #title>Group 1</template>

              <el-menu-item index="2-1">Option 1</el-menu-item>

              <el-menu-item index="2-2">Option 2</el-menu-item>

            </el-menu-item-group>

            <el-menu-item-group title="Group 2">

              <el-menu-item index="2-3">Option 3</el-menu-item>

            </el-menu-item-group>

            <el-sub-menu index="2-4">

              <template #title>Option 4</template>

              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>

            </el-sub-menu>

          </el-sub-menu>

          <el-sub-menu index="3">

            <template #title>

              <el-icon><setting /></el-icon>Navigator Three

            </template>

            <el-menu-item-group>

              <template #title>Group 1</template>

              <el-menu-item index="3-1">Option 1</el-menu-item>

              <el-menu-item index="3-2">Option 2</el-menu-item>

            </el-menu-item-group>

            <el-menu-item-group title="Group 2">

              <el-menu-item index="3-3">Option 3</el-menu-item>

            </el-menu-item-group>

            <el-sub-menu index="3-4">

              <template #title>Option 4</template>

              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>

            </el-sub-menu>

          </el-sub-menu>

        </el-menu>

      </el-scrollbar>

    </el-aside>

    <el-container>

      <el-header style="text-align: right; font-size: 12px">

        <div class="toolbar">

          <el-dropdown>

            <el-icon style="margin-right: 8px; margin-top: 1px">

              <setting />

            </el-icon>

            <template #dropdown>

              <el-dropdown-menu>

                <el-dropdown-item>View</el-dropdown-item>

                <el-dropdown-item>Add</el-dropdown-item>

                <el-dropdown-item>Delete</el-dropdown-item>

              </el-dropdown-menu>

            </template>

          </el-dropdown>

          <span>Tom</span>

        </div>

      </el-header>

      <el-main>

        <el-scrollbar>

          <el-table :data="tableData">

            <el-table-column prop="date" label="Date" width="140" />

            <el-table-column prop="name" label="Name" width="120" />

            <el-table-column prop="address" label="Address" />

          </el-table>

        </el-scrollbar>

      </el-main>

    </el-container>

  </el-container>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {

  date: '2016-05-02',

  name: 'Tom',

  address: 'No. 189, Grove St, Los Angeles',

}

const tableData = ref(Array.from({ length: 20 }).fill(item))

</script>

<style scoped>

.layout-container-demo .el-header {

  position: relative;

  background-color: var(--el-color-primary-light-7);

  color: var(--el-text-color-primary);

}

.layout-container-demo .el-aside {

  color: var(--el-text-color-primary);

  background: var(--el-color-primary-light-8);

}

.layout-container-demo .el-menu {

  border-right: none;

}

.layout-container-demo .el-main {

  padding: 0;

}

.layout-container-demo .toolbar {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  height: 100%;

  right: 20px;

}

</style>
```

## Container API

### Container Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| direction | 子元素的排列方向 | `enum` | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Container Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| height | 顶栏高度 | `string` | 60px |

### Header Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |

## Aside API

### Aside Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| width | 侧边栏宽度 | `string` | 300px |

### Aside Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |

## Main API

### Main Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |

## Footer API

### Footer Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| height | 底栏高度 | `string` | 60px |

### Footer Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |