# Anchor 锚点

通过锚点，您可以很快找到当前页面上信息内容的位置。

## 基础用法

最简单的用法。

```vue
<template>

  <el-anchor :offset="70">

    <el-anchor-link :href="`#${locale['basic-usage']}`">

      {{ locale['Basic Usage'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['horizontal-mode']}`">

      {{ locale['Horizontal Mode'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['scroll-container']}`">

      {{ locale['Scroll Container'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['anchor-api']}`">

      {{ locale['Anchor API'] }}

      <template #sub-link>

        <el-anchor-link :href="`#${locale['anchor-attributes']}`">

          {{ locale['Anchor Attributes'] }}

        </el-anchor-link>

        <el-anchor-link :href="`#${locale['anchor-events']}`">

          {{ locale['Anchor Events'] }}

        </el-anchor-link>

      </template>

    </el-anchor-link>

  </el-anchor>

</template>

<script lang="ts" setup>

import { computed } from 'vue'

import anchorLocale from '../../.vitepress/i18n/component/anchor.json'

import { useLang } from '~/composables/lang'

const lang = useLang()

const locale = computed(() => anchorLocale[lang.value])

</script>
```

## 水平模式

水平排列的锚点

> **TIP**

> 水平模式不支持`sub-link`槽位

```vue
<template>

  <el-anchor :offset="70" direction="horizontal">

    <el-anchor-link :href="`#${locale['basic-usage']}`">

      {{ locale['Basic Usage'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['horizontal-mode']}`">

      {{ locale['Horizontal Mode'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['scroll-container']}`">

      {{ locale['Scroll Container'] }}

    </el-anchor-link>

  </el-anchor>

</template>

<script lang="ts" setup>

import { computed } from 'vue'

import anchorLocale from '../../.vitepress/i18n/component/anchor.json'

import { useLang } from '~/composables/lang'

const lang = useLang()

const locale = computed(() => anchorLocale[lang.value])

</script>
```

## 滚动容器

自定义滚动区域，使用 `offset` props 可以设置锚点滚动偏移。 监听`link-click`事件并阻止浏览器的默认行为，从而不会更改历史记录。

```vue
<template>

  <div>

    <el-row>

      <el-col :span="18">

        <div

          style="

            height: 30px;

            width: 70%;

            background: #000;

            position: absolute;

            top: 0;

            left: 0;

            color: #fff;

          "

        >

          Fixed Top Block

        </div>

        <div ref="containerRef" style="height: 300px; overflow-y: auto">

          <div

            id="part1"

            style="

              height: 300px;

              background: rgba(255, 0, 0, 0.02);

              margin-top: 30px;

            "

          >

            part1

          </div>

          <div

            id="part2"

            style="

              height: 300px;

              background: rgba(0, 255, 0, 0.02);

              margin-top: 30px;

            "

          >

            part2

          </div>

          <div

            id="part3"

            style="

              height: 300px;

              background: rgba(0, 0, 255, 0.02);

              margin-top: 30px;

            "

          >

            part3

          </div>

        </div>

      </el-col>

      <el-col :span="6">

        <div class="vp-raw">

          <el-anchor

            :container="containerRef"

            direction="vertical"

            type="default"

            :offset="30"

            @click="handleClick"

          >

            <el-anchor-link href="#part1" title="part1" />

            <el-anchor-link href="#part2" title="part2" />

            <el-anchor-link href="#part3" title="part3" />

          </el-anchor>

        </div>

      </el-col>

    </el-row>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

const handleClick = (e: MouseEvent) => {

  e.preventDefault()

}

</script>
```

## 锚点链接变化

监听锚点链接变化

```vue
<template>

  <el-anchor :offset="70" @change="handleChange">

    <el-anchor-link :href="`#${locale['basic-usage']}`">

      {{ locale['Basic Usage'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['horizontal-mode']}`">

      {{ locale['Horizontal Mode'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['scroll-container']}`">

      {{ locale['Scroll Container'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['anchor-api']}`">

      {{ locale['Anchor API'] }}

      <template #sub-link>

        <el-anchor-link :href="`#${locale['anchor-attributes']}`">

          {{ locale['Anchor Attributes'] }}

        </el-anchor-link>

        <el-anchor-link :href="`#${locale['anchor-events']}`">

          {{ locale['Anchor Events'] }}

        </el-anchor-link>

      </template>

    </el-anchor-link>

  </el-anchor>

</template>

<script setup lang="ts">

import { computed } from 'vue'

import anchorLocale from '../../.vitepress/i18n/component/anchor.json'

import { useLang } from '~/composables/lang'

const lang = useLang()

const locale = computed(() => anchorLocale[lang.value])

const handleChange = (href: string) => {

  console.log(`anchor change: ${href}`)

}

</script>
```

## 下划线类型

设置`type="underline"`以更改为下划线类型

```vue
<template>

  <el-anchor type="underline" :offset="70">

    <el-anchor-link :href="`#${locale['basic-usage']}`">

      {{ locale['Basic Usage'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['horizontal-mode']}`">

      {{ locale['Horizontal Mode'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['scroll-container']}`">

      {{ locale['Scroll Container'] }}

    </el-anchor-link>

    <el-anchor-link :href="`#${locale['anchor-api']}`">

      {{ locale['Anchor API'] }}

      <template #sub-link>

        <el-anchor-link :href="`#${locale['anchor-attributes']}`">

          {{ locale['Anchor Attributes'] }}

        </el-anchor-link>

        <el-anchor-link :href="`#${locale['anchor-events']}`">

          {{ locale['Anchor Events'] }}

        </el-anchor-link>

      </template>

    </el-anchor-link>

  </el-anchor>

</template>

<script lang="ts" setup>

import { computed } from 'vue'

import anchorLocale from '../../.vitepress/i18n/component/anchor.json'

import { useLang } from '~/composables/lang'

const lang = useLang()

const locale = computed(() => anchorLocale[lang.value])

</script>
```

## 固定模式

使用 affix 组件来固定住页面中的锚点。

```vue
<template>

  <el-affix :offset="60">

    <el-anchor :offset="70" style="width: 300px">

      <el-anchor-link :href="`#${locale['basic-usage']}`">

        {{ locale['Basic Usage'] }}

      </el-anchor-link>

      <el-anchor-link :href="`#${locale['horizontal-mode']}`">

        {{ locale['Horizontal Mode'] }}

      </el-anchor-link>

      <el-anchor-link :href="`#${locale['scroll-container']}`">

        {{ locale['Scroll Container'] }}

      </el-anchor-link>

      <el-anchor-link :href="`#${locale['anchor-api']}`">

        {{ locale['Anchor API'] }}

        <template #sub-link>

          <el-anchor-link :href="`#${locale['anchor-attributes']}`">

            {{ locale['Anchor Attributes'] }}

          </el-anchor-link>

          <el-anchor-link :href="`#${locale['anchor-events']}`">

            {{ locale['Anchor Events'] }}

          </el-anchor-link>

        </template>

      </el-anchor-link>

    </el-anchor>

  </el-affix>

</template>

<script lang="ts" setup>

import { computed } from 'vue'

import anchorLocale from '../../.vitepress/i18n/component/anchor.json'

import { useLang } from '~/composables/lang'

const lang = useLang()

const locale = computed(() => anchorLocale[lang.value])

</script>
```

## Anchor API

### 属性

| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| container | 滚动的容器 | `string` | `HTMLElement` | `Window` | — |
| offset | 设置锚点滚动的偏移量 | `number` | 0 |
| bound | 触发锚点的元素的位置偏移量 | `number` | 15 |
| duration | 设置容器滚动持续时间，单位为毫秒 | `number` | 300 |
| marker | 是否显示标记 | `boolean` | true |
| type | 设置锚点类型 | `enum` | `default` |
| direction | 设置锚点方向 | `enum` | `vertical` |
| select-scroll-top 2.9.2 | 滚动时，链接是否选中位于顶部 | `boolean` | false |

### Anchor Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | step 改变时的回调 | `Function` |
| click | 当用户点击链接时触发 | `Function` |

### Anchor Exposes

| 名称 | 说明 | 类型 |
|---|---|---|
| scrollTo | 手动滚动到特定位置。 | `Function` |

### Anchor Slots

| 名称 | 说明 |
|---|---|
| default | AnchorLink 组件列表 |

### AnchorLink Attributes

| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 链接的文本内容 | `string` | — |
| href | 链接的地址。 | `string` | — |

### AnchorLink Slots

| 名称 | 说明 |
|---|---|
| default | 链接的内容 |
| sub-link | 子链接的槽位 |