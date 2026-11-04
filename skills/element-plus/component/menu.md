# Menu 菜单

为网站提供导航功能的菜单。

> **TIP**

> 如果您想要覆盖el-menu的默认高度, 您可以使用下列CSS

## 顶栏

顶部栏菜单可以在各种场景中使用。

导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```vue
<template>

  <el-menu

    :default-active="activeIndex"

    class="el-menu-demo"

    mode="horizontal"

    @select="handleSelect"

  >

    <el-menu-item index="1">Processing Center</el-menu-item>

    <el-sub-menu index="2">

      <template #title>Workspace</template>

      <el-menu-item index="2-1">item one</el-menu-item>

      <el-menu-item index="2-2">item two</el-menu-item>

      <el-menu-item index="2-3">item three</el-menu-item>

      <el-sub-menu index="2-4">

        <template #title>item four</template>

        <el-menu-item index="2-4-1">item one</el-menu-item>

        <el-menu-item index="2-4-2">item two</el-menu-item>

        <el-menu-item index="2-4-3">item three</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

    <el-menu-item index="3" disabled>Info</el-menu-item>

    <el-menu-item index="4">Orders</el-menu-item>

  </el-menu>

  <div class="h-6" />

  <el-menu

    :default-active="activeIndex2"

    class="el-menu-demo"

    mode="horizontal"

    background-color="#545c64"

    text-color="#fff"

    active-text-color="#ffd04b"

    @select="handleSelect"

  >

    <el-menu-item index="1">Processing Center</el-menu-item>

    <el-sub-menu index="2">

      <template #title>Workspace</template>

      <el-menu-item index="2-1">item one</el-menu-item>

      <el-menu-item index="2-2">item two</el-menu-item>

      <el-menu-item index="2-3">item three</el-menu-item>

      <el-sub-menu index="2-4">

        <template #title>item four</template>

        <el-menu-item index="2-4-1">item one</el-menu-item>

        <el-menu-item index="2-4-2">item two</el-menu-item>

        <el-menu-item index="2-4-3">item three</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

    <el-menu-item index="3" disabled>Info</el-menu-item>

    <el-menu-item index="4">Orders</el-menu-item>

  </el-menu>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const activeIndex = ref('1')

const activeIndex2 = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

</script>
```

## 左右

您可以将菜单项放置在左边或右边。

```vue
<template>

  <el-menu

    :default-active="activeIndex"

    class="el-menu-demo"

    mode="horizontal"

    :ellipsis="false"

    @select="handleSelect"

  >

    <el-menu-item index="0">

      <img

        style="width: 100px"

        src="/images/element-plus-logo.svg"

        alt="Element logo"

      />

    </el-menu-item>

    <el-menu-item index="1">Processing Center</el-menu-item>

    <el-sub-menu index="2">

      <template #title>Workspace</template>

      <el-menu-item index="2-1">item one</el-menu-item>

      <el-menu-item index="2-2">item two</el-menu-item>

      <el-menu-item index="2-3">item three</el-menu-item>

      <el-sub-menu index="2-4">

        <template #title>item four</template>

        <el-menu-item index="2-4-1">item one</el-menu-item>

        <el-menu-item index="2-4-2">item two</el-menu-item>

        <el-menu-item index="2-4-3">item three</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

  </el-menu>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

</script>

<style scoped>

.el-menu--horizontal > .el-menu-item:nth-child(1) {

  margin-right: auto;

}

</style>
```

## 侧栏

垂直菜单，可内嵌子菜单。

通过 el-menu-item-group 组件可以实现菜单进行分组，分组名可以通过 title 属性直接设定，也可以通过具名 slot 来设定。

```vue
<template>

  <el-row class="tac">

    <el-col :span="12">

      <h5 class="mb-2">Default colors</h5>

      <el-menu

        default-active="2"

        class="el-menu-vertical-demo"

        @open="handleOpen"

        @close="handleClose"

      >

        <el-sub-menu index="1">

          <template #title>

            <el-icon><location /></el-icon>

            <span>Navigator One</span>

          </template>

          <el-menu-item-group title="Group One">

            <el-menu-item index="1-1">item one</el-menu-item>

            <el-menu-item index="1-2">item two</el-menu-item>

          </el-menu-item-group>

          <el-menu-item-group title="Group Two">

            <el-menu-item index="1-3">item three</el-menu-item>

          </el-menu-item-group>

          <el-sub-menu index="1-4">

            <template #title>item four</template>

            <el-menu-item index="1-4-1">item one</el-menu-item>

          </el-sub-menu>

        </el-sub-menu>

        <el-menu-item index="2">

          <el-icon><icon-menu /></el-icon>

          <span>Navigator Two</span>

        </el-menu-item>

        <el-menu-item index="3" disabled>

          <el-icon><document /></el-icon>

          <span>Navigator Three</span>

        </el-menu-item>

        <el-menu-item index="4">

          <el-icon><setting /></el-icon>

          <span>Navigator Four</span>

        </el-menu-item>

      </el-menu>

    </el-col>

    <el-col :span="12">

      <h5 class="mb-2">Custom colors</h5>

      <el-menu

        active-text-color="#ffd04b"

        background-color="#545c64"

        class="el-menu-vertical-demo"

        default-active="2"

        text-color="#fff"

        @open="handleOpen"

        @close="handleClose"

      >

        <el-sub-menu index="1">

          <template #title>

            <el-icon><location /></el-icon>

            <span>Navigator One</span>

          </template>

          <el-menu-item-group title="Group One">

            <el-menu-item index="1-1">item one</el-menu-item>

            <el-menu-item index="1-2">item two</el-menu-item>

          </el-menu-item-group>

          <el-menu-item-group title="Group Two">

            <el-menu-item index="1-3">item three</el-menu-item>

          </el-menu-item-group>

          <el-sub-menu index="1-4">

            <template #title>item four</template>

            <el-menu-item index="1-4-1">item one</el-menu-item>

          </el-sub-menu>

        </el-sub-menu>

        <el-menu-item index="2">

          <el-icon><icon-menu /></el-icon>

          <span>Navigator Two</span>

        </el-menu-item>

        <el-menu-item index="3" disabled>

          <el-icon><document /></el-icon>

          <span>Navigator Three</span>

        </el-menu-item>

        <el-menu-item index="4">

          <el-icon><setting /></el-icon>

          <span>Navigator Four</span>

        </el-menu-item>

      </el-menu>

    </el-col>

  </el-row>

</template>

<script lang="ts" setup>

import {

  Document,

  Menu as IconMenu,

  Location,

  Setting,

} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

const handleClose = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

</script>
```

## Collapse 折叠面板

垂直导航菜单可以被折叠

```vue
<template>

  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">

    <el-radio-button :value="false">expand</el-radio-button>

    <el-radio-button :value="true">collapse</el-radio-button>

  </el-radio-group>

  <el-menu

    default-active="2"

    class="el-menu-vertical-demo"

    :collapse="isCollapse"

    @open="handleOpen"

    @close="handleClose"

  >

    <el-sub-menu index="1">

      <template #title>

        <el-icon><location /></el-icon>

        <span>Navigator One</span>

      </template>

      <el-menu-item-group>

        <template #title><span>Group One</span></template>

        <el-menu-item index="1-1">item one</el-menu-item>

        <el-menu-item index="1-2">item two</el-menu-item>

      </el-menu-item-group>

      <el-menu-item-group title="Group Two">

        <el-menu-item index="1-3">item three</el-menu-item>

      </el-menu-item-group>

      <el-sub-menu index="1-4">

        <template #title><span>item four</span></template>

        <el-menu-item index="1-4-1">item one</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

    <el-menu-item index="2">

      <el-icon><icon-menu /></el-icon>

      <template #title>Navigator Two</template>

    </el-menu-item>

    <el-menu-item index="3" disabled>

      <el-icon><document /></el-icon>

      <template #title>Navigator Three</template>

    </el-menu-item>

    <el-menu-item index="4">

      <el-icon><setting /></el-icon>

      <template #title>Navigator Four</template>

    </el-menu-item>

  </el-menu>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import {

  Document,

  Menu as IconMenu,

  Location,

  Setting,

} from '@element-plus/icons-vue'

const isCollapse = ref(true)

const handleOpen = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

const handleClose = (key: string, keyPath: string[]) => {

  console.log(key, keyPath)

}

</script>

<style>

.el-menu-vertical-demo:not(.el-menu--collapse) {

  width: 200px;

  min-height: 400px;

}

</style>
```

## 弹出层偏移量 2.4.4

当提供了 popperOffset 配置，会覆盖 Menu 的 `popper-offset`.

```vue
<template>

  <el-menu

    ellipsis

    class="el-menu-popper-demo"

    mode="horizontal"

    :popper-offset="16"

    style="max-width: 600px"

  >

    <el-menu-item index="1">Processing Center</el-menu-item>

    <el-sub-menu index="2">

      <template #title>Workspace</template>

      <el-menu-item index="2-1">item one</el-menu-item>

      <el-menu-item index="2-2">item two</el-menu-item>

      <el-menu-item index="2-3">item three</el-menu-item>

      <el-sub-menu index="2-4">

        <template #title>item four</template>

        <el-menu-item index="2-4-1">item one</el-menu-item>

        <el-menu-item index="2-4-2">item two</el-menu-item>

        <el-menu-item index="2-4-3">item three</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

    <el-sub-menu index="3" :popper-offset="8">

      <template #title>Override Popper Offset</template>

      <el-menu-item index="3-1">item one</el-menu-item>

      <el-menu-item index="3-2">item two</el-menu-item>

      <el-menu-item index="3-3">item three</el-menu-item>

      <el-sub-menu index="3-4" :popper-offset="20">

        <template #title>override child</template>

        <el-menu-item index="3-4-1">item one</el-menu-item>

        <el-menu-item index="3-4-2">item two</el-menu-item>

        <el-menu-item index="3-4-3">item three</el-menu-item>

      </el-sub-menu>

    </el-sub-menu>

    <el-menu-item index="4" disabled>Info</el-menu-item>

    <el-menu-item index="5">Orders</el-menu-item>

  </el-menu>

</template>

<script lang="ts" setup></script>
```

## 菜单 API

### Menu Attributes

| 属性名 | 说明 | 类型 | Default |
|---|---|---|---|
| mode | 菜单展示模式 | `enum` | vertical |
| collapse | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | `boolean` | false |
| ellipsis | 是否省略多余的子项（仅在横向模式生效） | `boolean` | true |
| ellipsis-icon 2.4.4 | 自定义省略图标 (仅在水平模式下可用) | `string` / `Component` | — |
| popper-offset 2.4.4 | 弹出层的偏移量(对所有子菜单有效) | `number` | 6 |
| default-active | 页面加载时默认激活菜单的 index | `string` | '' |
| default-openeds | 默认打开的 sub-menu 的 index 的数组 | `array` | [] |
| unique-opened | 是否只保持一个子菜单的展开 | `boolean` | false |
| menu-trigger | 子菜单打开的触发方式，只在 `mode` 为 horizontal 时有效。 | `enum` | hover |
| router | 是否启用 `vue-router` 模式。启用该模式会在激活导航时以 index 作为 path 进行路由跳转使用 `default-active` 来设置加载时的激活项。 | `boolean` | false |
| collapse-transition | 是否开启折叠动画 | `boolean` | true |
| popper-effect 2.2.26 | Tooltip 主题，内置了 `dark` / `light` 两种主题，当菜单折叠时生效。 | `enum`** / `string` | dark |
| close-on-click-outside 2.4.4 | 可选，单击外部时是否折叠菜单 | `boolean` | false |
| popper-class 2.5.0 | 用于所有弹出菜单和标题提示的自定义类名 | `string` | — |
| popper-style 2.11.5 | 用于所有弹出菜单和标题提示的自定义样式 | `string` / `object` | — |
| show-timeout 2.5.0 | 菜单出现前的延迟 | `number` | 300 |
| hide-timeout 2.5.0 | 菜单消失前的延迟 | `number` | 300 |
| background-color deprecated | 菜单的背景颜色 (十六进制格式) (推荐在样式类中使用 `--el-menu-bg-color`) | `string` | #ffffff |
| text-color deprecated | 菜单的文字颜色 (十六进制格式) (推荐在样式类中使用 `--el-menu-text-color`) | `string` | #303133 |
| active-text-color deprecated | 活动菜单项的文本颜色（十六进制格式）（推荐使用 css var `--el-menu-active-color`） | `string` | #409eff |
| persistent 2.9.5 | 当菜单处于非活动状态且 `persistent` 为 `false` 时，下拉菜单将被销毁 | `boolean` | true |

### Menu Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| select | 菜单激活回调 | `Function` |
| open | sub-menu 展开的回调 | `Function` |
| close | sub-menu 收起的回调 | `Function` |

### Menu Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |

### Menu Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| open | 打开一个特定的子菜单，参数是要打开的子菜单的索引 | `Function` |
| close | 关闭一个特定的子菜单，参数是要关闭子菜单的索引 | `Function` |
| handleResize | 手动触发菜单宽度重新计算 | `Function` |
| updateActiveIndex 2.9.8 | 通过索引激活指定菜单 | `Function` |

## SubMenu API

### SubMenu Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| index required | 唯一标志 | `string` | — |
| popper-class | 为 popper 添加类名 | `string` | — |
| popper-style 2.11.5 | 为 popper 添加自定义样式 | `string` / `object` | — |
| show-timeout | 子菜单出现之前的延迟，(继承 menu 的 `show-timeout` 配置) | `number` | — |
| hide-timeout | 子菜单消失之前的延迟，(继承 menu 的 `hide-timeout` 配置) | `number` | — |
| disabled | 是否禁用 | `boolean` | false |
| teleported | 是否将弹出菜单挂载到 body 上，第一级SubMenu默认值为 true，其他SubMenus 的值为 false | `boolean` | undefined |
| popper-offset | 弹出窗口的偏移量 (覆盖 `popper`的菜单) | `number` | — |
| expand-close-icon | 父菜单展开且子菜单关闭时的图标， `expand-close-icon` 和 `expand-open-icon` 需要一起配置才能生效 | `string` / `Component` | — |
| expand-open-icon | 父菜单展开且子菜单打开时的图标， `expand-open-icon` 和 `expand-close-icon` 需要一起配置才能生效 | `string` / `Component` | — |
| collapse-close-icon | 父菜单收起且子菜单关闭时的图标， `collapse-close-icon` 和 `collapse-open-icon` 需要一起配置才能生效 | `string` / `Component` | — |
| collapse-open-icon | 父菜单收起且子菜单打开时的图标， `collapse-open-icon` 和 `collapse-close-icon` 需要一起配置才能生效 | `string` / `Component` | — |

### SubMenu Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义默认内容 | SubMenu / Menu-Item / Menu-Item-Group |
| title | 自定义标题内容 | — |

## Menu-Item API

### Menu-Item Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| index required | 唯一标志 | `string` | — |
| route | Vue Route 路由位置参数 | `string` / `object` | — |
| disabled | 是否禁用 | `boolean` | false |

### Menu-Item Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| click | 点击菜单项时回调函数, 参数为菜单项实例 | `Function` |

### Menu-Item Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |
| title | 自定义标题内容 |

## Menu-Item-Group API

### Menu-Item-Group Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 组标题 | `string` | — |

### Menu-Item-Group Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 默认插槽内容 | Menu-Item |
| title | 自定义组标题内容 | — |

## 类型声明

显示类型声明ts`/**

 * @param index index of activated menu

 * @param indexPath index path of activated menu

 * @param item the selected menu item

 * @param routerResult result returned by `vue-router` if `router` is enabled

 */

type MenuSelectEvent = (

  index: string,

  indexPath: string[],

  item: MenuItemClicked,

  routerResult?: Promise<void | NavigationFailure>

) => void

/**

 * @param index index of expanded sub-menu

 * @param indexPath index path of expanded sub-menu

 */

type MenuOpenEvent = (index: string, indexPath: string[]) => void

/**

 * @param index index of collapsed sub-menu

 * @param indexPath index path of collapsed sub-menu

 */

type MenuCloseEvent = (index: string, indexPath: string[]) => void

interface MenuItemRegistered {

  index: string

  indexPath: string[]

  active: boolean

}

interface MenuItemClicked {

  index: string

  indexPath: string[]

  route?: RouteLocationRaw

}`