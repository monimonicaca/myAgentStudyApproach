# Space 间距

虽然我们拥有 [Divider 组件](./divider)，但很多时候我们需要不是一个被 [Divider 组件](./divider) 分割开的页面结构，因此我们会重复的使用很多的 [Divider 组件](./divider)，这在我们的开发效率上造成了一定的困扰。**间距组件**就是为了解决这种困扰应运而生的。

## 基础用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

通过间距组件来给多个组件之间提供间距

```vue
<template>

  <el-space wrap>

    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">

      <template #header>

        <div class="card-header">

          <span>Card name</span>

          <el-button class="button" text>Operation button</el-button>

        </div>

      </template>

      <div v-for="o in 4" :key="o" class="text item">

        {{ 'List item ' + o }}

      </div>

    </el-card>

  </el-space>

</template>
```

## 垂直布局

使用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

我们也提供垂直布局方式。

```vue
<template>

  <el-space direction="vertical">

    <el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">

      <template #header>

        <div class="card-header">

          <span>Card name</span>

          <el-button class="button" text>Operation button</el-button>

        </div>

      </template>

      <div v-for="o in 4" :key="o" class="text item">

        {{ 'List item ' + o }}

      </div>

    </el-card>

  </el-space>

</template>
```

## 控制间距的大小

通过调整 `size` 的值来控制间距的大小

你可以使用内置的尺寸 `small`、`default`、`large` 来设置大小，这些尺寸分别对应 `8px`、`12px`、`16px`。 默认的间距大小为 `small`，也就是 `8px`。

您也可以通过自定义的 size 来控制大小，参见下一个部分。

```vue
<template>

  <el-space direction="vertical" alignment="start" :size="30">

    <el-radio-group v-model="size">

      <el-radio value="large">Large</el-radio>

      <el-radio value="default">Default</el-radio>

      <el-radio value="small">Small</el-radio>

    </el-radio-group>

    <el-space wrap :size="size">

      <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">

        <template #header>

          <div class="card-header">

            <span>Card name</span>

            <el-button class="button" text>Operation button</el-button>

          </div>

        </template>

        <div v-for="o in 4" :key="o" class="text item">

          {{ 'List item ' + o }}

        </div>

      </el-card>

    </el-space>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')

</script>
```

## 自定义 Size

很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。

```vue
<template>

  <el-slider v-model="size" />

  <el-space wrap :size="size">

    <el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">

      <template #header>

        <div class="card-header">

          <span>Card name</span>

          <el-button class="button" text>Operation button</el-button>

        </div>

      </template>

      <div v-for="o in 4" :key="o" class="text item">

        {{ 'List item ' + o }}

      </div>

    </el-card>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const size = ref(20)

</script>
```

> **TIP**

> 不要让 `ElSpace` 与使用依赖父元素百分比宽度（或高度）的元素一起使用（例如 `ElSlider`），这样会造成光标不同步。

## 自动换行

在 **水平 (horizontal) ** 模式下，通过使用 `wrap`（**布尔类型**）来控制自动换行行为。

利用 `wrap` 属性控制换行

```vue
<template>

  <el-space wrap>

    <div v-for="i in 20" :key="i">

      <el-button text> Text button </el-button>

    </div>

  </el-space>

</template>
```

## 行间分隔符

有时候，仅仅在行间加空白并不能满足我们的日常需求，此时分隔符 (spacer) 就可以发挥非常好的作用了。

## 字母数字类型分隔符

```vue
<template>

  <el-space :size="size" spacer="|">

    <div v-for="i in 2" :key="i">

      <el-button> button {{ i }} </el-button>

    </div>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const size = ref(10)

</script>
```

## 分隔符还可以是 VNode 类型

```vue
<template>

  <el-space :size="size" :spacer="spacer">

    <div v-for="i in 2" :key="i">

      <el-button> button {{ i }} </el-button>

    </div>

  </el-space>

</template>

<script lang="ts" setup>

import { h, ref } from 'vue'

import { ElDivider } from 'element-plus'

const size = ref(10)

const spacer = h(ElDivider, { direction: 'vertical' })

</script>
```

## 对齐方式

设置该值可以调整所有子节点在容器内的对齐方式，可设置的值与 [align-items ](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)一致。

使用 `alignment` 属性来对齐

```vue
<template>

  <div class="alignment-container">

    <el-space>

      string

      <el-button> button </el-button>

      <el-card>

        <template #header> header </template>

        body

      </el-card>

    </el-space>

  </div>

  <div class="alignment-container">

    <el-space alignment="flex-start">

      string

      <el-button> button </el-button>

      <el-card>

        <template #header> header </template>

        body

      </el-card>

    </el-space>

  </div>

  <div class="alignment-container">

    <el-space alignment="flex-end">

      string

      <el-button> button </el-button>

      <el-card>

        <template #header> header </template>

        body

      </el-card>

    </el-space>

  </div>

</template>

<style>

.alignment-container {

  width: 240px;

  margin-bottom: 20px;

  padding: 8px;

  border: 1px solid var(--el-border-color);

}

</style>
```

## 填充容器

通过 `fill`**（布尔类型）**参数，您可以控制子节点是否自动填充容器。

下面的例子中，当设置为 `fill` 时，子节点的宽度会自动适配容器的宽度。

用 fill 属性让子节点自动填充容器

```vue
<template>

  <div>

    <div style="margin-bottom: 15px">fill: <el-switch v-model="fill" /></div>

    <el-space :fill="fill" wrap>

      <el-card v-for="i in 3" :key="i" class="box-card">

        <template #header>

          <div class="card-header">

            <span>Card name</span>

            <el-button class="button" text>Operation button</el-button>

          </div>

        </template>

        <div v-for="o in 4" :key="o" class="text item">

          {{ 'List item ' + o }}

        </div>

      </el-card>

    </el-space>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const fill = ref(true)

</script>
```

也可以使用 `fillRatio` 参数，自定义填充的比例，默认值为 `100`，代表基于父容器宽度的 `100%` 进行填充

需要注意的是，水平布局和垂直布局的表现形式稍有不同，具体的效果可以查看下面的例子

用 fillRatio 自定义填充比例

```vue
<template>

  <div>

    <div style="margin-bottom: 15px">

      direction:

      <el-radio v-model="direction" value="horizontal">horizontal</el-radio>

      <el-radio v-model="direction" value="vertical">vertical</el-radio>

    </div>

    <div style="margin-bottom: 15px">

      fillRatio:<el-slider v-model="fillRatio" />

    </div>

    <el-space

      fill

      wrap

      :fill-ratio="fillRatio"

      :direction="direction"

      style="width: 100%"

    >

      <el-card v-for="i in 5" :key="i" class="box-card">

        <template #header>

          <div class="card-header">

            <span>Card name</span>

            <el-button class="button" text>Operation button</el-button>

          </div>

        </template>

        <div v-for="o in 4" :key="o" class="text item">

          {{ 'List item ' + o }}

        </div>

      </el-card>

    </el-space>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { SpaceInstance } from 'element-plus'

const direction = ref<SpaceInstance['direction']>('horizontal')

const fillRatio = ref(30)

</script>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| alignment | 对齐的方式 | `enum`** [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | center |
| class | className | `string` / `object` / `array` | — |
| direction | 排列的方向 | `enum` | horizontal |
| prefix-cls | 给 space-items 的类名前缀 | `string` | — |
| style | 额外样式 | `string` / `object` | — |
| spacer | 间隔符 | `string` / `number` / `VNode` | — |
| size | 间隔大小 | `enum`** / `number` / `array` | small |
| wrap | 设置是否自动折行 | `boolean` | false |
| fill | 子元素是否填充父容器 | `boolean` | false |
| fill-ratio | 填充父容器的比例 | `number` | 100 |

### Slots

| 名称 | 说明 |
|---|---|
| default | 需要添加间隔的元素 |