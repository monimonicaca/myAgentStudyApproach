# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

```vue
<template>

  <el-dropdown>

    <span class="el-dropdown-link">

      Dropdown List

      <el-icon class="el-icon--right">

        <arrow-down />

      </el-icon>

    </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item disabled>Action 4</el-dropdown-item>

        <el-dropdown-item divided>Action 5</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script lang="ts" setup>

import { ArrowDown } from '@element-plus/icons-vue'

</script>

<style scoped>

.example-showcase .el-dropdown-link {

  cursor: pointer;

  color: var(--el-color-primary);

  display: flex;

  align-items: center;

}

</style>
```

## 位置

支持 6 个位置。

设置 `placement` 属性，使下拉菜单出现在不同位置。

```vue
<template>

  <div class="flex flex-wrap items-center gap-4">

    <el-dropdown placement="top-start">

      <el-button> topStart </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown placement="top">

      <el-button> top </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown placement="top-end">

      <el-button> topEnd </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown placement="bottom-start">

      <el-button> bottomStart </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown placement="bottom">

      <el-button> bottom </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown placement="bottom-end">

      <el-button> bottomEnd </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>The Action 1st</el-dropdown-item>

          <el-dropdown-item>The Action 2nd</el-dropdown-item>

          <el-dropdown-item>The Action 3rd</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

  </div>

</template>
```

## 触发对象

可使用按钮触发下拉菜单。

设置 `split-button` 属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为 `true` 即可。如果你想要在第三和第四个选项之间添加一个分隔符，你只需要为第四个选项添加一个 `divided` 的属性。

```vue
<template>

  <div class="flex flex-wrap items-center">

    <el-dropdown>

      <el-button type="primary">

        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

      </el-button>

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>Action 1</el-dropdown-item>

          <el-dropdown-item>Action 2</el-dropdown-item>

          <el-dropdown-item>Action 3</el-dropdown-item>

          <el-dropdown-item>Action 4</el-dropdown-item>

          <el-dropdown-item>Action 5</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

    <el-dropdown split-button type="primary" @click="handleClick">

      Dropdown List

      <template #dropdown>

        <el-dropdown-menu>

          <el-dropdown-item>Action 1</el-dropdown-item>

          <el-dropdown-item>Action 2</el-dropdown-item>

          <el-dropdown-item>Action 3</el-dropdown-item>

          <el-dropdown-item divided>Action 4</el-dropdown-item>

          <el-dropdown-item>Action 5</el-dropdown-item>

        </el-dropdown-menu>

      </template>

    </el-dropdown>

  </div>

</template>

<script lang="ts" setup>

import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {

  // eslint-disable-next-line no-alert

  alert('button click')

}

</script>

<style scoped>

.example-showcase .el-dropdown + .el-dropdown {

  margin-left: 15px;

}

.example-showcase .el-dropdown-link {

  cursor: pointer;

  color: var(--el-color-primary);

  display: flex;

  align-items: center;

}

</style>
```

## 触发方式

可以配置点击激活或者悬停激活。

将 `trigger` 属性设置为 click 即可，默认为 `hover`。

```vue
<template>

  <el-row class="block-col-2">

    <el-col :span="8">

      <span class="demonstration">hover to trigger</span>

      <el-dropdown>

        <span class="el-dropdown-link">

          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

        </span>

        <template #dropdown>

          <el-dropdown-menu>

            <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>

            <el-dropdown-item :icon="CirclePlusFilled">

              Action 2

            </el-dropdown-item>

            <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>

            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>

            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>

          </el-dropdown-menu>

        </template>

      </el-dropdown>

    </el-col>

    <el-col :span="8">

      <span class="demonstration">click to trigger</span>

      <el-dropdown trigger="click">

        <span class="el-dropdown-link">

          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

        </span>

        <template #dropdown>

          <el-dropdown-menu>

            <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>

            <el-dropdown-item :icon="CirclePlusFilled">

              Action 2

            </el-dropdown-item>

            <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>

            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>

            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>

          </el-dropdown-menu>

        </template>

      </el-dropdown>

    </el-col>

    <el-col :span="8">

      <span class="demonstration">right click to trigger</span>

      <el-dropdown trigger="contextmenu">

        <span class="el-dropdown-link">

          Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

        </span>

        <template #dropdown>

          <el-dropdown-menu>

            <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>

            <el-dropdown-item :icon="CirclePlusFilled">

              Action 2

            </el-dropdown-item>

            <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>

            <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>

            <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>

          </el-dropdown-menu>

        </template>

      </el-dropdown>

    </el-col>

  </el-row>

</template>

<script lang="ts" setup>

import {

  ArrowDown,

  Check,

  CircleCheck,

  CirclePlus,

  CirclePlusFilled,

  Plus,

} from '@element-plus/icons-vue'

</script>

<style scoped>

.block-col-2 .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

.block-col-2 .el-dropdown-link {

  display: flex;

  align-items: center;

}

</style>
```

## 菜单隐藏方式

可以通过 `hide-on-click` 属性来配置。

下拉菜单默认在点击菜单项后会被隐藏，将 hide-on-click 属性设置为 false 可以关闭此功能。

```vue
<template>

  <el-dropdown :hide-on-click="false">

    <span class="el-dropdown-link">

      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

    </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item disabled>Action 4</el-dropdown-item>

        <el-dropdown-item divided>Action 5</el-dropdown-item>

        <el-dropdown-item divided>Action 6</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script lang="ts" setup>

import { ArrowDown } from '@element-plus/icons-vue'

</script>

<style scoped>

.example-showcase .el-dropdown + .el-dropdown {

  margin-left: 15px;

}

.example-showcase .el-dropdown-link {

  cursor: pointer;

  color: var(--el-color-primary);

  display: flex;

  align-items: center;

}

</style>
```

## 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

```vue
<template>

  <el-dropdown @command="handleCommand">

    <span class="el-dropdown-link">

      Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>

    </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item command="a">Action 1</el-dropdown-item>

        <el-dropdown-item command="b">Action 2</el-dropdown-item>

        <el-dropdown-item command="c">Action 3</el-dropdown-item>

        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>

        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script lang="ts" setup>

import { ElMessage } from 'element-plus'

import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {

  ElMessage(`click on item ${command}`)

}

</script>

<style scoped>

.example-showcase .el-dropdown-link {

  cursor: pointer;

  color: var(--el-color-primary);

  display: flex;

  align-items: center;

}

</style>
```

## 下拉方法

您可以手动使用 `手动打开` 或 `手动关闭下拉菜单以打开或关闭`

```vue
<template>

  <div style="font-size: 14px">

    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>

  </div>

  <div style="margin: 15px">

    <el-button @click="showClick">show</el-button>

  </div>

  <el-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">

    <span class="el-dropdown-link"> Dropdown List1 </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item disabled>Action 4</el-dropdown-item>

        <el-dropdown-item divided>Action 5</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

  <el-dropdown trigger="contextmenu" @visible-change="handleVisible2">

    <span class="el-dropdown-link"> Dropdown List2 </span>

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item disabled>Action 4</el-dropdown-item>

        <el-dropdown-item divided>Action 5</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import type { DropdownInstance } from 'element-plus'

const dropdown1 = ref<DropdownInstance>()

function handleVisible2(visible: any) {

  if (!dropdown1.value) return

  if (visible) {

    dropdown1.value.handleClose()

  } else {

    dropdown1.value.handleOpen()

  }

}

function showClick() {

  if (!dropdown1.value) return

  dropdown1.value.handleOpen()

}

</script>

<style scoped>

.example-showcase .el-dropdown-link {

  cursor: pointer;

  color: var(--el-color-primary);

  display: flex;

  align-items: center;

}

</style>
```

## 尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

使用 `size` 属性配置尺寸，可选的尺寸大小有: `large`, `default` 或 `small`

```vue
<template>

  <el-dropdown size="large" split-button type="primary">

    Large

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item>Action 4</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

  <el-dropdown split-button type="primary">

    Default

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item>Action 4</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

  <el-dropdown size="small" split-button type="primary">

    Small

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item>Action 1</el-dropdown-item>

        <el-dropdown-item>Action 2</el-dropdown-item>

        <el-dropdown-item>Action 3</el-dropdown-item>

        <el-dropdown-item>Action 4</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<style scoped>

.example-showcase .el-dropdown + .el-dropdown {

  margin-left: 15px;

}

</style>
```

## 虚拟触发2.11.3

有时候我们想把 dropdown 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。

```vue
<template>

  <el-card

    class="content"

    body-class="card-body"

    @click="handleClick"

    @contextmenu="handleContextmenu"

  >

    Right click

  </el-card>

  <el-dropdown

    ref="dropdownRef"

    :virtual-ref="triggerRef"

    :show-arrow="false"

    :popper-options="{

      modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],

    }"

    virtual-triggering

    trigger="contextmenu"

    placement="bottom-start"

  >

    <template #dropdown>

      <el-dropdown-menu>

        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>

        <el-dropdown-item :icon="CirclePlusFilled"> Action 2 </el-dropdown-item>

        <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>

        <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>

        <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>

      </el-dropdown-menu>

    </template>

  </el-dropdown>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import {

  Check,

  CircleCheck,

  CirclePlus,

  CirclePlusFilled,

  Plus,

} from '@element-plus/icons-vue'

import type { DropdownInstance } from 'element-plus'

const dropdownRef = ref<DropdownInstance>()

const position = ref({

  top: 0,

  left: 0,

  bottom: 0,

  right: 0,

} as DOMRect)

const triggerRef = ref({

  getBoundingClientRect: () => position.value,

})

const handleClick = () => {

  dropdownRef.value?.handleClose()

}

const handleContextmenu = (event: MouseEvent) => {

  const { clientX, clientY } = event

  position.value = DOMRect.fromRect({

    x: clientX,

    y: clientY,

  })

  event.preventDefault()

  dropdownRef.value?.handleOpen()

}

</script>

<style scoped>

.content {

  display: flex;

  justify-content: center;

  align-items: center;

  height: 200px;

}

.content :deep(.card-body) {

  flex-grow: 0;

}

</style>
```

## Dropdown API

### Dropdown Attributes

| 属性名 | 说明 | 类型 | Default |
|---|---|---|---|
| type | 菜单按钮类型，同 `Button` 组件一样，仅在 `split-button` 为 true 的情况下有效。 | `enum` | '' |
| size | 菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。 | `enum` | '' |
| button-props | 按钮组件的 props，参考 [按钮属性](./button.html#button-attributes) | `object` | — |
| max-height | 菜单最大高度 | `string` / `number` | '' |
| split-button | 下拉触发元素呈现为按钮组 | `boolean` | false |
| disabled | 是否禁用 | `boolean` | false |
| placement | 菜单弹出位置 | `enum` | bottom |
| effect | Tooltip 主题，内置了 `dark` / `light` 两种主题 | `enum`** / `string` | light |
| trigger | 触发下拉的行为 | `enum`** / `array` | hover |
| trigger-keys 2.9.1 | 指定键盘上哪些按键可以触发操作 | `array` | `['Enter', 'Space', 'ArrowDown', 'NumpadEnter']` |
| virtual-triggering 2.11.3 | 是否启用虚拟触发器 | `boolean` | — |
| virtual-ref 2.11.3 | 指示下拉框所依附的参考元素 | `HTMLElement` | — |
| hide-on-click | 是否在点击菜单项后隐藏菜单 | `boolean` | true |
| show-arrow 2.11.3 | tooltip 的内容是否有箭头 | `boolean` | true |
| show-timeout | 展开下拉菜单的延时，仅在 trigger 为 hover 时有效 | `number` | 150 |
| hide-timeout | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效） | `number` | 150 |
| role | 下拉菜单的 ARIA 属性。根据具体场景，您可能想要将此更改为“navigation” | `enum` | menu |
| tabindex | Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | `number` / `string` | 0 |
| popper-class | 自定义浮层类名 | `string` / `object` | '' |
| popper-style 2.11.5 | 自定义浮层类名 | `string` / `object` | — |
| popper-options | [popper.js](https://popper.js.org/docs/v2/) 参数 | `object` | `{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}` |
| teleported 2.2.20 | 是否将下拉列表插入至 body 元素 | `boolean` | true |
| append-to 2.13.0 | dropdown 的内容将挂载到哪一个元素上 | `CSSSelector` / `HTMLElement` | — |
| persistent 2.9.5 | 当下拉菜单处于非活动状态且 `persistent` 为 `false` 时，下拉菜单将被销毁 | `boolean` | true |

### Dropdown Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 下拉菜单的内容。注意：必须是有效的 html DOM 元素（例如 `<span>、<button>` 等）或 `el-component`，以附加监听触发器 | ::: |
| dropdown | 下拉列表，通常是 `<el-dropdown-menu>` 组件 | Dropdown-Menu |

### Dropdown Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| click | `split-button` 为 true 时，点击左侧按钮的回调 | `Function` |
| command | 当下拉项被点击时触发，参数是从下拉菜单中发送的命令 | `Function` |
| visible-change | 当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 `true`, 否则将是 `false` | `Function` |

### Dropdown Exposes

| 方法名 | 说明 | Type |
|---|---|---|
| handleOpen | 打开下拉菜单 | `Function` |
| handleClose | 关闭下拉菜单 | `Function` |

## Dropdown-Menu API

### Dropdown-Menu Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 下拉菜单的内容 | Dropdown-Item |

## Dropdown-Item API

### Dropdown-Item Attributes

| 属性名 | 说明 | Type | 默认值 |
|---|---|---|---|
| command | 派发到`command`回调函数的指令参数 | `string` / `number` / `object` | — |
| disabled | 是否禁用 | `boolean` | false |
| divided | 是否显示分隔符 | `boolean` | false |
| icon | 自定义图标 | `string` / `Component` | — |

### Dropdown-Item Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义Dropdown-Item内容 |
| icon 2.13.1 | 自定义图标，它将覆盖图标prop |