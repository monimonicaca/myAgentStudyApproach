# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```vue
<template>

  <div class="tooltip-base-box">

    <div class="row center">

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Top Left prompts info"

        placement="top-start"

      >

        <el-button>top-start</el-button>

      </el-tooltip>

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Top Center prompts info"

        placement="top"

      >

        <el-button>top</el-button>

      </el-tooltip>

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Top Right prompts info"

        placement="top-end"

      >

        <el-button>top-end</el-button>

      </el-tooltip>

    </div>

    <div class="row">

      <el-tooltip class="box-item" effect="dark" placement="left-start">

        <template #content>

          Left Top

          <br />

          prompts info

        </template>

        <el-button>left-start</el-button>

      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" placement="right-start">

        <template #content>

          Right Top

          <br />

          prompts info

        </template>

        <el-button>right-start</el-button>

      </el-tooltip>

    </div>

    <div class="row">

      <el-tooltip class="box-item" effect="dark" placement="left">

        <template #content>

          Left Center

          <br />

          prompts info

        </template>

        <el-button class="mt-3 mb-3">left</el-button>

      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" placement="right">

        <template #content>

          Right Center

          <br />

          prompts info

        </template>

        <el-button>right</el-button>

      </el-tooltip>

    </div>

    <div class="row">

      <el-tooltip class="box-item" effect="dark" placement="left-end">

        <template #content>

          Left Bottom

          <br />

          prompts info

        </template>

        <el-button>left-end</el-button>

      </el-tooltip>

      <el-tooltip class="box-item" effect="dark" placement="right-end">

        <template #content>

          Right Bottom

          <br />

          prompts info

        </template>

        <el-button>right-end</el-button>

      </el-tooltip>

    </div>

    <div class="row center">

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Bottom Left prompts info"

        placement="bottom-start"

      >

        <el-button>bottom-start</el-button>

      </el-tooltip>

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Bottom Center prompts info"

        placement="bottom"

      >

        <el-button>bottom</el-button>

      </el-tooltip>

      <el-tooltip

        class="box-item"

        effect="dark"

        content="Bottom Right prompts info"

        placement="bottom-end"

      >

        <el-button>bottom-end</el-button>

      </el-tooltip>

    </div>

  </div>

</template>

<style>

.tooltip-base-box {

  width: 600px;

}

.tooltip-base-box .row {

  display: flex;

  align-items: center;

  justify-content: space-between;

}

.tooltip-base-box .center {

  justify-content: center;

}

.tooltip-base-box .box-item {

  width: 110px;

  margin-top: 10px;

}

</style>
```

## 主题

Tooltip 组件内置了两个主题：`dark`和`light`。

> **TIP**

> 要使用自定义主题，您必须知道您的工具提示在哪里渲染， 如果您的工具提示被呈现为根元素，您将需要全局设置css规则。

> 建议您使用自定义主题并同时显示箭头时不使用线性渐变背景颜色。 因为弹出箭头和内容是两个不同的元素， 弹出箭头的样式需要单独设置， 当它到渐变背景颜色时，会看起来很奇怪。

通过设置 `effect` 来修改主题，默认值为 `dark`.

```vue
<template>

  <el-tooltip content="Top center" placement="top">

    <el-button>Dark</el-button>

  </el-tooltip>

  <el-tooltip content="Bottom center" placement="bottom" effect="light">

    <el-button>Light</el-button>

  </el-tooltip>

  <el-tooltip content="Bottom center" effect="customized">

    <el-button>Customized theme</el-button>

  </el-tooltip>

</template>

<style>

.el-popper.is-customized {

  /* Set padding to ensure the height is 32px */

  padding: 6px 12px;

  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));

}

.el-popper.is-customized .el-popper__arrow::before {

  background: linear-gradient(45deg, #b2e68d, #bce689);

  right: 0;

}

</style>
```

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot `content`，替代`tooltip`中的`content`属性。

```vue
<template>

  <el-tooltip placement="top">

    <template #content> multiple lines<br />second line </template>

    <el-button>Top center</el-button>

  </el-tooltip>

</template>
```

## 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。

如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求，你只需要将其设置为 `true`。

事实上，Tooltip 是一个基于 [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper) 的扩展，您可以使用 ElPopper 中允许的任何属性。

```vue
<template>

  <el-tooltip

    :disabled="disabled"

    content="click to close tooltip function"

    placement="bottom"

    effect="light"

  >

    <el-button @click="disabled = !disabled">

      click to {{ disabled ? 'active' : 'close' }} tooltip function

    </el-button>

  </el-tooltip>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const disabled = ref(false)

</script>
```

> **TIP**

> Tooltip 内不支持 `router-link` 组件，请使用 `vm.$router.push` 代替。

> tooltip 内不支持 disabled form 元素，参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)，请在 disabled form 元素外层添加一层包裹元素。

## 显示 HTML 内容

内容属性可以设置为 HTML 字符串。

> **WARNING**

> `content` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `raw-content` 打开的情况下，请确保 `content` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `content` 属性。

```vue
<template>

  <el-tooltip

    content="<span>The content can be <strong>HTML</strong></span>"

    raw-content

  >

    <el-button>hover me</el-button>

  </el-tooltip>

</template>
```

## 虚拟触发

有时候我们想把 tooltip 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。

> **TIP**

> 需要注意的是，虚拟触发的 tooltip 是受控组件，因此你必须自己去控制 tooltip 是否显示，**你将无法**通过点击空白处来关闭 tooltip。

```vue
<template>

  <el-tooltip

    :visible="visible"

    content="Bottom center"

    placement="bottom"

    effect="light"

    trigger="click"

    virtual-triggering

    :virtual-ref="triggerRef"

  />

  <el-button @click="visible = !visible">test</el-button>

</template>

<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

const position = ref({

  top: 0,

  left: 0,

  bottom: 0,

  right: 0,

} as DOMRect)

const triggerRef = ref({

  getBoundingClientRect: () => position.value,

})

const mousemoveHandler = ({ clientX, clientY }: MouseEvent) => {

  position.value = DOMRect.fromRect({

    x: clientX,

    y: clientY,

  })

}

onMounted(() => {

  document.addEventListener('mousemove', mousemoveHandler)

})

onUnmounted(() => {

  document.removeEventListener('mousemove', mousemoveHandler)

})

</script>
```

## 单例模式

Tooltip 可以作为单例，也就是是说你可以同时有多个触发同一个 tooltip 的触发元素，这个功能是在 `虚拟触发` 的基础上开发的。

> **TIP**

> 已知问题：使用单例模式时，弹出窗口会从意料之外的位置弹出。

```vue
<template>

  <div>

    <el-button

      v-for="i in 3"

      :key="i"

      @mouseover="(e) => (buttonRef = e.currentTarget)"

      @click="visible = !visible"

      >Click to open tooltip</el-button

    >

  </div>

  <el-tooltip

    ref="tooltipRef"

    :visible="visible"

    :popper-options="{

      modifiers: [

        {

          name: 'computeStyles',

          options: {

            adaptive: false,

            enabled: false,

          },

        },

      ],

    }"

    :virtual-ref="buttonRef"

    virtual-triggering

    popper-class="singleton-tooltip"

  >

    <template #content>

      <span> Some content </span>

    </template>

  </el-tooltip>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const buttonRef = ref()

const tooltipRef = ref()

const visible = ref(false)

</script>

<style>

.singleton-tooltip {

  transition: transform 0.3s var(--el-transition-function-fast-bezier);

}

</style>
```

## 受控模式

Tooltip 可以通过父组件使用 `:visible` 来控制它的显示与关闭。

```vue
<template>

  <el-tooltip :visible="visible">

    <template #content>

      <span>Content</span>

    </template>

    <el-button @mouseenter="visible = true" @mouseleave="visible = false">

      Hover me

    </el-button>

  </el-tooltip>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const visible = ref(false)

</script>
```

## 自定义动画

Tooltip 可以自定义动画，您可以使用 `transition` 设置所需的动画效果。

> **TIP**

> 过渡效果的更多信息可以在 [Vue 过渡效果](https://vuejs.org/guide/built-ins/transition.html#css-based-transitions) 中找到。

```vue
<template>

  <el-tooltip content="I am an el-tooltip" transition="slide-fade">

    <el-button>trigger me</el-button>

  </el-tooltip>

</template>

<script lang="ts" setup></script>

<style>

.slide-fade-enter-active {

  transition: all 0.3s ease-out;

}

.slide-fade-leave-active {

  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);

}

.slide-fade-enter-from,

.slide-fade-leave-to {

  transform: translateX(120px);

  opacity: 0;

}

</style>
```

## 使用 `append-to`

您必须等待 DOM 加载后才能使用 `targetElement`。

```vue
<template>

  <el-tooltip

    :append-to="targetElement"

    trigger="click"

    content="Append to .target"

    placement="top"

  >

    <el-button class="target">Click to open tooltip</el-button>

  </el-tooltip>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

const targetElement = ref('')

onMounted(() => {

  targetElement.value = '.target'

})

</script>

<style scoped>

.target {

  position: relative;

  margin-top: 20px;

}

</style>
```

## API

### Attributes

| 名称 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| append-to | 指示 Tooltip 的内容将附加在哪一个网页元素上 | `CSSSelector` / `HTMLElement` | — |
| effect | Tooltip 主题，内置了 `dark` / `light` 两种 | `enum` | dark |
| content | 显示的内容，也可被 `slot#content` 覆盖 | `string` | '' |
| raw-content | `content` 中的内容是否作为 HTML 字符串处理 | `boolean` | false |
| placement | Tooltip 组件出现的位置 | `enum` | bottom |
| fallback-placements | Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | — |
| visible / v-model:visible | Tooltip 组件可见性 | `boolean` | — |
| disabled | Tooltip 组件是否禁用 | `boolean` | — |
| offset | Tooltip 出现位置的偏移量 | `number` | 12 |
| transition | 动画名称 | `string` | — |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` 请参考 [popper.js](https://popper.js.org/docs/v2/) 文档 | {} |
| arrow-offset 2.9.10 | 控制Tooltip的箭头相对于弹出窗口的偏移(添加)。 | `number` | 5 |
| show-after | 延迟显示时间（以毫秒为单位），在受控模式下无效。 | `number` | 0 |
| show-arrow | tooltip 的内容是否有箭头 | `boolean` | true |
| hide-after | 消失延迟时间（以毫秒为单位），在受控模式下无效。 | `number` | 200 |
| auto-close | 隐藏提示框的超时时间（以毫秒为单位），在受控模式下无效。 | `number` | 0 |
| popper-class | 为 Tooltip 的 popper 添加自定义类名 | `string` | — |
| popper-style | 为 Tooltip 的 popper 添加自定义样式 | `string` / `object` | — |
| enterable | 鼠标是否可进入到 tooltip 中 | `boolean` | true |
| teleported | 是否使用 teleport。设置成 `true`则会被追加到 `append-to` 的位置 | `boolean` | true |
| trigger | 提示框的触发方式（用于显示），在受控模式下无效。 | `enum`** / `array` | hover |
| virtual-triggering | 用来标识虚拟触发是否被启用 | `boolean` | — |
| virtual-ref | 标识虚拟触发时的触发元素 | `HTMLElement` | — |
| trigger-keys | 当通过鼠标点击使触发元素获得焦点时，可以定义一组键盘按键代码，通过键盘控制提示框的显示，在受控模式下无效。 | `Array` | ['Enter','Space'] |
| persistent | 当tooltip未激活且 `persistent` 为 `false` 时，tooltip将被销毁。 | `boolean` | — |
| aria-label a11y | 和 `aria-label` 属性保持一致 | `string` | — |
| focus-on-target 2.11.2 | 当通过悬停触发提示时，是否聚焦触发元素，以提升可访问性 | false | false |

### 事件

| 插槽名 | 说明 | 类型 |
|---|---|---|
| before-show | 在显示提示框之前触发。 将触发原因作为参数传入。 | `Function` |
| show | 在提示框显示时触发。 将触发原因作为参数传入。 | `Function` |
| before-hide | 在提示框隐藏之前触发。 将触发原因作为参数传入。 | `Function` |
| hide | 在提示框隐藏时触发。 将触发原因作为参数传入。 | `Function` |

### Slots

| 名称 | 详情 |
|---|---|
| default | 提示框触发及参考元素，只接受单个根元素。 |
| content | 自定义内容 |

### Exposes

| 方法名 | 详情 | Type |
|---|---|---|
| popperRef | el-popper 组件实例 | `object` |
| contentRef | el-tooltip-content 组件实例 | `object` |
| isFocusInsideContent | 验证当前焦点事件是否在 el-tooltip-content 中触发 | `Function` |
| updatePopper | 更新 el-popper组件实例 | `Function` |
| onOpen | onClose 方法控制 el-tooltip 显示状态 | `Function` |
| onClose | onClose 方法控制 el-tooltip 显示状态 | `Function` |
| hide | 提供 hide 方法 | `Function` |

## FAQ

#### 如何在嵌套了 tooltip 的情况下允许输入框输入空格？

典型问题： [#20907](https://github.com/element-plus/element-plus/issues/20907)

vue

`<template>

  <el-tooltip content="tooltip content" placement="top" :trigger-keys="[]">

    <el-input v-model="value" placeholder="" />

  </el-tooltip>

</template>`