# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

卡片包含标题，内容以及操作区域。

Card 组件由 `header` `body` 和 `footer`组成。 `header` 和 `footer`是可选的，其内容取决于一个具名的 slot。

```vue
<template>

  <el-card style="max-width: 480px">

    <template #header>

      <div class="card-header">

        <span>Card name</span>

      </div>

    </template>

    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

    <template #footer>Footer content</template>

  </el-card>

</template>
```

## 简单卡片

卡片可以只有内容区域。

```vue
<template>

  <el-card style="max-width: 480px">

    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

  </el-card>

</template>
```

## 有图片内容的卡片

可配置定义更丰富的内容展示。

配置 `body-style` 属性来自定义 `body` 部分的样式。

```vue
<template>

  <el-card style="max-width: 480px">

    <template #header>Yummy hamburger</template>

    <img

      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

      style="width: 100%"

    />

  </el-card>

</template>
```

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 `shadow` 属性设置卡片阴影出现的时机。该属性的值可以是：`always`、`hover` 或 `never`。

```vue
<template>

  <div class="flex flex-wrap gap-4">

    <el-card style="width: 480px" shadow="always">Always</el-card>

    <el-card style="width: 480px" shadow="hover">Hover</el-card>

    <el-card style="width: 480px" shadow="never">Never</el-card>

  </div>

</template>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| header | 卡片的标题你既可以通过设置 header 来修改标题，也可以通过 `slot#header` 传入 DOM 节点 | `string` | — |
| footer 2.4.3 | 卡片页脚。你既可以通过设置 footer 来修改卡片底部内容，也可以通过 `slot#footer` 传入 DOM 节点 | `string` | — |
| body-style | body 的 CSS 样式 | `object` | — |
| header-class 2.9.8 | card header 的自定义类名 | `string` | — |
| body-class 2.3.10 | body 的自定义类名 | `string` | — |
| footer-class 2.9.8 | footer 的自定义类名 | `string` | — |
| shadow | 卡片阴影显示时机 | `enum` | always |

### Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |
| header | 卡片标题内容 |
| footer | 卡片页脚内容 |