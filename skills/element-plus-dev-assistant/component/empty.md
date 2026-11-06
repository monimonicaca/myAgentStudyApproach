# Empty 空状态

空状态时的占位提示。

## 基础用法

```vue
<template>

  <el-empty description="description" />

</template>
```

## 自定义图片

通过设置 `image` 属性传入图片 URL。

```vue
<template>

  <el-empty

    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

  />

</template>
```

## 图片尺寸

通过使用 `image-size` 属性来控制图片大小。

```vue
<template>

  <el-empty :image-size="200" />

</template>
```

## 底部内容

使用默认插槽可在底部插入内容。

```vue
<template>

  <el-empty>

    <el-button type="primary">Button</el-button>

  </el-empty>

</template>
```

## 自定义样式

您可以为empty组件设置自定义样式。使用 `css/scss` 语言来更改全局或局部颜色。我们设置了一些全局颜色变量：`--el-empty-fill-color-0`、`--el-empty-fill-color-1`、`--el-empty-fill-color-2`、……、`--el-empty-fill-color-9`。您可以使用类似 `:root { --el-empty-fill-color-0: red; --el-empty-fill-color-1: blue; }` 等变量。但通常，如果你想要更改样式，你需要更改所有颜色，因为这些颜色是一个组合。

### 默认变量

| 变量 | 颜色 |
|---|---|
| --el-empty-fill-color-0 | var(--el-color-white) |
| --el-empty-fill-color-1 | #fcfcfd |
| --el-empty-fill-color-2 | #f8f9fb |
| --el-empty-fill-color-3 | #f7f8fc |
| --el-empty-fill-color-4 | #eeeff3 |
| --el-empty-fill-color-5 | #edeef2 |
| --el-empty-fill-color-6 | #e9ebef |
| --el-empty-fill-color-7 | #e5e7e9 |
| --el-empty-fill-color-8 | #e0e3e9 |
| --el-empty-fill-color-9 | #d5d7de |

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| image | empty 组件的图像地址 | `string` | '' |
| image-size | empty 组件的图像尺寸（宽度） | `number` | — |
| description | empty 组件的描述信息 | `string` | '' |

### 插槽

| 插槽名 | 描述说明 |
|---|---|
| default | 作为底部内容的内容 |
| image | 作为图像的内容 |
| description | 作为描述的内容 |