# Link 链接

文字超链接

> **安全警告hrefprop 将会直接渲染到<a>标签内部。如果你传递类似javascript:alert(1)这样的值或恶意 URL，可能会导致XSS或开放重定向漏洞。**

> 在使用前始终验证并净化 URL。例如：

## 基础用法

基础的文字链接用法。

```vue
<template>

  <div>

    <el-link href="https://element-plus.org" target="_blank">default</el-link>

    <el-link type="primary">primary</el-link>

    <el-link type="success">success</el-link>

    <el-link type="warning">warning</el-link>

    <el-link type="danger">danger</el-link>

    <el-link type="info">info</el-link>

  </div>

</template>

<style scoped>

.el-link {

  margin-right: 8px;

}

</style>
```

## 禁用状态

文字链接不可用状态。

```vue
<template>

  <div>

    <el-link disabled>default</el-link>

    <el-link type="primary" disabled>primary</el-link>

    <el-link type="success" disabled>success</el-link>

    <el-link type="warning" disabled>warning</el-link>

    <el-link type="danger" disabled>danger</el-link>

    <el-link type="info" disabled>info</el-link>

  </div>

</template>

<style scoped>

.el-link {

  margin-right: 8px;

}

</style>
```

## 下划线

控制下划线是否出现

> **WARNING**

> 属性 `boolean` 值 **将在** 3.0.0 版本中被**移除**，请考虑切换至新的 API。

> **TIP**

> 从 2.9.9 开始，你可以使用 `'always' | 'hover' | 'never'` 来控制是否显示下划线。文档中的示例将都使用这些值。如果您使用的版本 **低于** 2.9.9，请参考：

vue

`<template>

  <!-- works before 2.9.9, use 'hover' after, removed in 3.0.0 -->

  <el-link underline>link</el-link>

  <!-- works before 2.9.9, use 'never' after, removed in 3.0.0 -->

  <el-link :underline="false">link</el-link>

</template>`

```vue
<template>

  <div>

    <el-link>default</el-link>

    <el-link underline="always">always</el-link>

    <el-link underline="hover">hover</el-link>

    <el-link underline="never">never</el-link>

  </div>

</template>

<style scoped>

.el-link {

  margin-right: 8px;

}

</style>
```

## 图标

带图标的链接

> **TIP**

> 使用 `icon` 属性来为按钮添加图标。您可以传递组件名称的字符串（提前注册）或组件本身是一个 SVG Vue 组件。 Element Plus 提供了一套图标，您可以在 [icon](./icon) 找到它们。

```vue
<template>

  <div>

    <el-link :icon="Edit">Edit</el-link>

    <el-link>

      Check<el-icon class="el-icon--right"><icon-view /></el-icon>

    </el-link>

  </div>

</template>

<script setup lang="ts">

import { Edit, View as IconView } from '@element-plus/icons-vue'

</script>

<style scoped>

.el-link {

  margin-right: 8px;

}

</style>
```

## Link API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| type | 类型 | `enum` | default |
| underline | 控制下划线是否出现 | `enum` | hover |
| disabled | 是否禁用状态 | `boolean` | false |
| href | 原生 href 属性 | `string` | — |
| target | 同原生 `target`属性 | `enum` | _self |
| icon | 图标组件 | `string` / `Component` | — |

### Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |
| icon | 自定义图标组件 |