# Skeleton 骨架屏

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## 基础用法

基础的骨架效果。

```vue
<template>

  <el-skeleton />

  <br />

  <el-skeleton style="--el-skeleton-circle-size: 100px">

    <template #template>

      <el-skeleton-item variant="circle" />

    </template>

  </el-skeleton>

</template>
```

## 更多参数

可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。

```vue
<template>

  <el-skeleton :rows="5" />

</template>
```

## 动画效果

我们提供了一个开关标志，表明是否显示加载动画， 调用 `animated` 如果真是这样，所有的 `el-skeleton` 的子节点将显示动画。

```vue
<template>

  <el-skeleton :rows="5" animated />

</template>
```

## 自定义样式

Element Plus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot `template` 来自己设定模板。

我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。另外，在构建您自己自定义的骨架时，您应该尽可能更接近于真正的DOM。 避免DOM因高度差而发生抖动。

```vue
<template>

  <el-skeleton style="width: 240px">

    <template #template>

      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />

      <div style="padding: 14px">

        <el-skeleton-item variant="p" style="width: 50%" />

        <div

          style="

            display: flex;

            align-items: center;

            justify-items: space-between;

          "

        >

          <el-skeleton-item variant="text" style="margin-right: 16px" />

          <el-skeleton-item variant="text" style="width: 30%" />

        </div>

      </div>

    </template>

  </el-skeleton>

</template>
```

## 加载状态

当 `Loading` 结束之后，我们往往需要显示真实的 UI，可以通过 `loading` 属性的值来控制是否显示加载后的 DOM。也可以通过具名插槽 `default` 来构建 loading 结束之后需要展示的真实 DOM 元素结构。

```vue
<template>

  <el-space direction="vertical" alignment="flex-start">

    <div>

      <label style="margin-right: 16px">Switch Loading</label>

      <el-switch v-model="loading" />

    </div>

    <el-skeleton style="width: 240px" :loading="loading" animated>

      <template #template>

        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />

        <div style="padding: 14px">

          <el-skeleton-item variant="h3" style="width: 50%" />

          <div

            style="

              display: flex;

              align-items: center;

              justify-items: space-between;

              margin-top: 16px;

              height: 16px;

            "

          >

            <el-skeleton-item variant="text" style="margin-right: 16px" />

            <el-skeleton-item variant="text" style="width: 30%" />

          </div>

        </div>

      </template>

      <template #default>

        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">

          <img

            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

            class="image"

          />

          <div style="padding: 14px">

            <span>Delicious hamburger</span>

            <div class="bottom card-header">

              <div class="time">{{ currentDate }}</div>

              <el-button text class="button">Operation button</el-button>

            </div>

          </div>

        </el-card>

      </template>

    </el-skeleton>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const loading = ref(true)

const currentDate = new Date().toDateString()

</script>
```

## 渲染多条数据

大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。 利用 `count` 这个属性就能控制渲染多少条假的数据在页面上

> **TIP**

> 我们不推荐在浏览器中渲染过多的虚假 UI 元素，这样会消耗更多时间销毁骨架元素，从而引起性能问题。为了用户体验，请尽量将 `count` 值保持在小一点的数值。

```vue
<template>

  <el-space style="width: 100%" fill>

    <div>

      <el-button @click="setLoading">Click me to reload</el-button>

    </div>

    <el-skeleton

      style="display: flex; gap: 8px"

      :loading="loading"

      animated

      :count="3"

    >

      <template #template>

        <div style="flex: 1">

          <el-skeleton-item variant="image" style="height: 240px" />

          <div style="padding: 14px">

            <el-skeleton-item variant="h3" style="width: 50%" />

            <div

              style="

                display: flex;

                align-items: center;

                justify-items: space-between;

                margin-top: 16px;

                height: 16px;

              "

            >

              <el-skeleton-item variant="text" style="margin-right: 16px" />

              <el-skeleton-item variant="text" style="width: 30%" />

            </div>

          </div>

        </div>

      </template>

      <template #default>

        <el-card

          v-for="item in lists"

          :key="item.name"

          :body-style="{ padding: '0px', marginBottom: '1px' }"

        >

          <img

            :src="item.imgUrl"

            class="image multi-content"

            style="max-width: 100%"

          />

          <div style="padding: 14px">

            <span>{{ item.name }}</span>

            <div class="bottom card-header">

              <div class="time">{{ currentDate }}</div>

              <el-button text class="button">Operation button</el-button>

            </div>

          </div>

        </el-card>

      </template>

    </el-skeleton>

  </el-space>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

interface ListItem {

  imgUrl: string

  name: string

}

const loading = ref(true)

const lists = ref<ListItem[]>([])

const currentDate = new Date().toDateString()

const setLoading = () => {

  loading.value = true

  setTimeout(() => {

    loading.value = false

  }, 2000)

}

onMounted(() => {

  loading.value = false

  lists.value = [

    {

      imgUrl:

        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

      name: 'Deer',

    },

    {

      imgUrl:

        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

      name: 'Horse',

    },

    {

      imgUrl:

        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

      name: 'Mountain Lion',

    },

  ]

})

</script>
```

## 防止渲染抖动

有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 `throttle` 属性来避免这个问题。

> **TIP**

> 2.8.8版本里， `throtle` 属性支持两个值： `number` 和 `object`。当通过 `number`时，它相当于 `{leading: xxx}`，控制骨架屏幕显示的节奏。当然，您也可以通过传递 `{trailing: xxx}` 来控制骨架屏消失的节奏。

```vue
<template>

  <el-space direction="vertical" alignment="flex-start">

    <div>

      <label style="margin-right: 16px">Switch Loading</label>

      <el-switch v-model="loading" />

    </div>

    <el-skeleton

      style="width: 240px"

      :loading="loading"

      animated

      :throttle="500"

    >

      <template #template>

        <el-skeleton-item variant="image" style="width: 240px; height: 265px" />

        <div style="padding: 14px">

          <el-skeleton-item variant="h3" style="width: 50%" />

          <div

            style="

              display: flex;

              align-items: center;

              justify-items: space-between;

              margin-top: 16px;

              height: 16px;

            "

          >

            <el-skeleton-item variant="text" style="margin-right: 16px" />

            <el-skeleton-item variant="text" style="width: 30%" />

          </div>

        </div>

      </template>

      <template #default>

        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">

          <img

            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

            class="image"

          />

          <div style="padding: 14px">

            <span>Delicious hamburger</span>

            <div class="bottom card-header">

              <div class="time">{{ currentDate }}</div>

              <el-button text class="button">operation button</el-button>

            </div>

          </div>

        </el-card>

      </template>

    </el-skeleton>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const loading = ref(false)

const currentDate = new Date().toDateString()

</script>
```

## 初始渲染加载 2.8.8

当初始值为 loading: true 时，您可以设置 `throttle: {initVal: true, leading: xxx}` 来控制初始骨架屏的即时显示，而无需进行节流。

```vue
<template>

  <el-space direction="vertical" alignment="flex-start">

    <div>

      <label style="margin-right: 16px">Switch Loading</label>

      <el-switch v-model="loading" />

    </div>

    <el-skeleton

      style="width: 240px"

      :loading="loading"

      animated

      :throttle="{ leading: 500, initVal: true }"

    >

      <template #template>

        <el-skeleton-item variant="image" style="width: 240px; height: 265px" />

        <div style="padding: 14px">

          <el-skeleton-item variant="h3" style="width: 50%" />

          <div

            style="

              display: flex;

              align-items: center;

              justify-items: space-between;

              margin-top: 16px;

              height: 16px;

            "

          >

            <el-skeleton-item variant="text" style="margin-right: 16px" />

            <el-skeleton-item variant="text" style="width: 30%" />

          </div>

        </div>

      </template>

      <template #default>

        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">

          <img

            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

            class="image"

          />

          <div style="padding: 14px">

            <span>Delicious hamburger</span>

            <div class="bottom card-header">

              <div class="time">{{ currentDate }}</div>

              <el-button text class="button">operation button</el-button>

            </div>

          </div>

        </el-card>

      </template>

    </el-skeleton>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const loading = ref(true)

const currentDate = new Date().toDateString()

</script>
```

## 切换显示/隐藏时避免渲染抖动 2.8.8

> **TIP**

> 您可以设置 `throttle: {initVal: true, leading: xxx, trailing: xxx}`，以控制骨架效果的初始显示，并使切换加载状态时骨架效果的过渡更加平滑。

有时，当加载状态切换显示或隐藏时，您可能希望业务组件的渲染更加平滑。您可以设置 `throttle: {leading: xxx, trailing: xxx}` 来控制渲染抖动。

```vue
<template>

  <el-space direction="vertical" alignment="flex-start">

    <div>

      <label style="margin-right: 16px">Switch Loading</label>

      <el-switch v-model="loading" />

    </div>

    <el-skeleton

      style="width: 240px"

      :loading="loading"

      animated

      :throttle="{ leading: 500, trailing: 500, initVal: true }"

    >

      <template #template>

        <el-skeleton-item variant="image" style="width: 240px; height: 265px" />

        <div style="padding: 14px">

          <el-skeleton-item variant="h3" style="width: 50%" />

          <div

            style="

              display: flex;

              align-items: center;

              justify-items: space-between;

              margin-top: 16px;

              height: 16px;

            "

          >

            <el-skeleton-item variant="text" style="margin-right: 16px" />

            <el-skeleton-item variant="text" style="width: 30%" />

          </div>

        </div>

      </template>

      <template #default>

        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">

          <img

            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

            class="image"

          />

          <div style="padding: 14px">

            <span>Delicious hamburger</span>

            <div class="bottom card-header">

              <div class="time">{{ currentDate }}</div>

              <el-button text class="button">operation button</el-button>

            </div>

          </div>

        </el-card>

      </template>

    </el-skeleton>

  </el-space>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const loading = ref(false)

const currentDate = new Date().toDateString()

</script>
```

## 

## Skeleton API

### Skeleton Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| animated | 是否使用动画 | `boolean` | false |
| count | 渲染多少个 template, 建议使用尽可能小的数字 | `number` | 1 |
| loading | 是否显示加载结束后的 DOM 结构 | `boolean` | false |
| rows | 骨架屏段落数量 | `number` | 3 |
| throttle | 渲染延迟（以毫秒为单位）数字代表延迟显示, 也可以设置为延迟隐藏, 例如 `{ leading: 500, trailing: 500 }` 当需要控制初始加载值时，您可以设置 `{ initVal: true }` | `number` / `object` | 0 |

### Skeleton Slots

| 插槽名 | 说明 | 事件参数 |
|---|---|---|
| default | 真正渲染的DOM | `object` |
| template | 渲染 skeleton 模板的内容 | `object` |

## SkeletonItem API

### SkeletonItem Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| variant | 当前渲染 skeleton 类型 | `enum` | text |