# Tour 漫游式引导

用于分步引导用户了解产品功能的气泡组件。用来引导用户并介绍产品

## 基础用法

最简单的用法。

```vue
<template>

  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>

    <el-button ref="ref1">Upload</el-button>

    <el-button ref="ref2" type="primary">Save</el-button>

    <el-button ref="ref3" :icon="MoreFilled" />

  </el-space>

  <el-tour v-model="open">

    <el-tour-step :target="ref1?.$el" title="Upload File">

      <img

        style="width: 240px"

        src="https://element-plus.org/images/element-plus-logo.svg"

        alt="tour.png"

      />

      <div>Put you files here.</div>

    </el-tour-step>

    <el-tour-step

      :target="ref2?.$el"

      title="Save"

      description="Save your changes"

    />

    <el-tour-step

      :target="ref3?.$el"

      title="Other Actions"

      description="Click to see other"

    />

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()

const ref2 = ref<ButtonInstance>()

const ref3 = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## 非模态

使用`:mask="false"`可以将引导变为非模态，同时为了强调引导本身，建议与 type="primary" 组合使用。

```vue
<template>

  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>

    <el-button ref="ref1">Upload</el-button>

    <el-button ref="ref2" type="primary">Save</el-button>

    <el-button ref="ref3" :icon="MoreFilled" />

  </el-space>

  <el-tour v-model="open" type="primary" :mask="false">

    <el-tour-step

      :target="ref1?.$el"

      title="Upload File"

      description="Put you files here."

    />

    <el-tour-step

      :target="ref2?.$el"

      title="Save"

      description="Save your changes"

    />

    <el-tour-step

      :target="ref3?.$el"

      title="Other Actions"

      description="Click to see other"

    />

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()

const ref2 = ref<ButtonInstance>()

const ref3 = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## 位置

改变引导相对于目标的位置，共有 12 种位置可供选择。当 `target` 为空时引导将会展示在正中央。

```vue
<template>

  <el-button ref="btnRef" type="primary" @click="open = true">

    Begin Tour

  </el-button>

  <el-tour v-model="open">

    <el-tour-step

      title="Center"

      description="Displayed in the center of screen."

    />

    <el-tour-step

      title="Right"

      description="On the right of target."

      placement="right"

      :target="btnRef?.$el"

    />

    <el-tour-step

      title="Top"

      description="On the top of target."

      placement="top"

      :target="btnRef?.$el"

    />

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import type { ButtonInstance } from 'element-plus'

const btnRef = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## 自定义遮罩样式

自定义遮罩样式。

```vue
<template>

  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>

    <el-button ref="ref1">Upload</el-button>

    <el-button ref="ref2" type="primary">Save</el-button>

    <el-button ref="ref3" :icon="MoreFilled" />

  </el-space>

  <el-tour

    v-model="open"

    :mask="{

      style: {

        boxShadow: 'inset 0 0 15px #333',

      },

      color: 'rgba(80, 255, 255, .4)',

    }"

  >

    <el-tour-step :target="ref1?.$el" title="Upload File">

      <img

        src="https://element-plus.org/images/element-plus-logo.svg"

        alt="tour.png"

      />

      <div>Put you files here.</div>

    </el-tour-step>

    <el-tour-step

      :target="ref2?.$el"

      title="Save"

      description="Save your changes"

      :mask="{

        style: {

          boxShadow: 'inset 0 0 15px #fff',

        },

        color: 'rgba(40, 0, 255, .4)',

      }"

    />

    <el-tour-step

      :target="ref3?.$el"

      title="Other Actions"

      description="Click to see other"

      :mask="false"

    />

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()

const ref2 = ref<ButtonInstance>()

const ref3 = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## 自定义指示器

自定义指示器。

```vue
<template>

  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>

    <el-button ref="ref1">Upload</el-button>

    <el-button ref="ref2" type="primary">Save</el-button>

    <el-button ref="ref3" :icon="MoreFilled" />

  </el-space>

  <el-tour v-model="open">

    <el-tour-step

      :target="ref1?.$el"

      title="Upload File"

      description="Put you files here."

    />

    <el-tour-step

      :target="ref2?.$el"

      title="Save"

      description="Save your changes"

    />

    <el-tour-step

      :target="ref3?.$el"

      title="Other Actions"

      description="Click to see other"

    />

    <template #indicators="{ current, total }">

      <span>{{ current + 1 }} / {{ total }}</span>

    </template>

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const ref1 = ref<ButtonInstance>()

const ref2 = ref<ButtonInstance>()

const ref3 = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## 目标

可以传入目标的各种类型的参数。自2.5.2以来支持字符串和函数类型。

```vue
<template>

  <el-button type="primary" @click="open = true">Begin Tour</el-button>

  <el-divider />

  <el-space>

    <el-button id="btn1">Upload</el-button>

    <el-button id="btn2" type="primary">Save</el-button>

    <el-button ref="btnRef" :icon="MoreFilled" />

  </el-space>

  <el-tour v-model="open">

    <el-tour-step

      target="#btn1"

      title="Upload File"

      description="Put you files here."

    />

    <el-tour-step :target="el" title="Save" description="Save your changes" />

    <el-tour-step

      :target="btnRef?.$el"

      title="Other Actions"

      description="Click to see other"

    />

  </el-tour>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { MoreFilled } from '@element-plus/icons-vue'

import type { ButtonInstance } from 'element-plus'

const el = () => document.querySelector<HTMLElement>('#btn2')

const btnRef = ref<ButtonInstance>()

const open = ref(false)

</script>
```

## Tour API

> **TIP**

> tour-step 组件上相同名称配置的优先级更高。

### Tour Attributes

| 属性 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| append-to | 挂载到哪个 DOM 元素 | `CSSSelector` / `HTMLElement` | `body` |
| show-arrow | 是否显示箭头 | `boolean` | true |
| placement | 引导卡片相对于目标元素的位置 | `enum` | `bottom` |
| content-style | 为content自定义样式 | `CSSProperties` | — |
| mask | 是否启用遮罩，通过自定义属性改变遮罩样式以及填充的颜色 | `boolean` | `Object` | `true` |
| gap | 遮罩和目标之间的透明的间距 | `TourGap` | `Object` |
| type | 类型，影响底色与文字颜色 | `default` | `primary` | `default` |
| model-value / v-model | 打开引导 | `boolean` | `false` |
| current / v-model:current | 当前值 | `number` | `0` |
| scroll-into-view-options | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数 | `boolean` | `ScrollIntoViewOptions` | `Object` |
| z-index | Tour 的层级 | `number` | `2001` |
| show-close | 是否显示关闭按钮 | `boolean` | `true` |
| close-icon | 自定义关闭图标，默认Close | `string` | `Component` | — |
| close-on-press-escape | 是否可以通过按下 ESC 关闭引导 | `boolean` | `true` |
| target-area-clickable | 启用蒙层时，target 元素区域是否可以点击。 | `boolean` | `true` |

### Tour slots

| 插槽名 | 说明 | 类型 |
|---|---|---|
| default | tourStep 组件列表 | — |
| indicators | 自定义指示器 | `object` |

### Tour events

| 事件名 | 描述 | 类型 |
|---|---|---|
| close | 关闭引导时的回调函数 | `Function` |
| finish | 引导完成时的回调 | `Function` |
| change | 步骤改变时的回调 | `Function` |

## TourStep API

### TourStep Attributes

| 属性 | 描述 | 事件参数 | 默认值 |
|---|---|---|---|
| target | 获取引导卡片指向的元素，为空时居中于屏幕。自2.5.2以来支持字符串和函数类型。字符串类型是文档.querySelector的选择器。 | `HTMLElement` | `string` | `Function` | — |
| show-arrow | 是否显示箭头 | `boolean` | — |
| title | title | `string` | — |
| description | description | `string` | — |
| placement | 引导卡片相对于目标元素的位置 | `enum` | `bottom` |
| content-style | 为content自定义样式 | `CSSProperties` | — |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色 | `boolean` | `Object` | — |
| type | 类型，影响底色与文字颜色 | `default` | `primary` | `default` |
| next-button-props | “下一步”按钮的属性 | `Object` | — |
| prev-button-props | “上一步”按钮的属性 | `Object` | — |
| scroll-into-view-options | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 `scrollIntoViewOptions` 属性 | `boolean` | `ScrollIntoViewOptions` | — |
| show-close | 是否显示关闭按钮 | `boolean` | — |
| close-icon | 自定义关闭图标，默认Close | `string` | `Component` | — |

### TourStep slots

| 插槽名 | 描述 |
|---|---|
| default | 自定义描述 |
| header | 自定义 header 内容 |

### TourStep events

| 事件名 | 描述 | 参数 |
|---|---|---|
| close | 关闭引导时的回调函数 | `Function` |