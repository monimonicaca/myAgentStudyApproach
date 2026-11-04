# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。

```vue
<template>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

    <el-tab-pane label="User" name="first">User</el-tab-pane>

    <el-tab-pane label="Config" name="second">Config</el-tab-pane>

    <el-tab-pane label="Role" name="third">Role</el-tab-pane>

    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {

  console.log(tab, event)

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## 卡片风格的标签

你可以设置具有卡片风格的标签。

只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。

```vue
<template>

  <el-tabs

    v-model="activeName"

    type="card"

    class="demo-tabs"

    @tab-click="handleClick"

  >

    <el-tab-pane label="User" name="first">User</el-tab-pane>

    <el-tab-pane label="Config" name="second">Config</el-tab-pane>

    <el-tab-pane label="Role" name="third">Role</el-tab-pane>

    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {

  console.log(tab, event)

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## 带有边框的卡片风格

你还可以设置标签页为带有边框的卡片

将 `type` 设置为 `border-card`。

```vue
<template>

  <el-tabs type="border-card">

    <el-tab-pane label="User">User</el-tab-pane>

    <el-tab-pane label="Config">Config</el-tab-pane>

    <el-tab-pane label="Role">Role</el-tab-pane>

    <el-tab-pane label="Task">Task</el-tab-pane>

  </el-tabs>

</template>
```

## 标签位置的设置

可以通过 `tab-position` 设置标签的位置

标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`

```vue
<template>

  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">

    <el-radio-button value="top">top</el-radio-button>

    <el-radio-button value="right">right</el-radio-button>

    <el-radio-button value="bottom">bottom</el-radio-button>

    <el-radio-button value="left">left</el-radio-button>

  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">

    <el-tab-pane label="User">User</el-tab-pane>

    <el-tab-pane label="Config">Config</el-tab-pane>

    <el-tab-pane label="Role">Role</el-tab-pane>

    <el-tab-pane label="Task">Task</el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabsInstance } from 'element-plus'

const tabPosition = ref<TabsInstance['tabPosition']>('left')

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

.el-tabs--right .el-tabs__content,

.el-tabs--left .el-tabs__content {

  height: 100%;

}

</style>
```

## 自定义标签页的内容

可以通过具名插槽来实现自定义标签页的内容

```vue
<template>

  <el-tabs type="border-card" class="demo-tabs">

    <el-tab-pane>

      <template #label>

        <span class="custom-tabs-label">

          <el-icon><calendar /></el-icon>

          <span>Route</span>

        </span>

      </template>

      Route

    </el-tab-pane>

    <el-tab-pane label="Config">Config</el-tab-pane>

    <el-tab-pane label="Role">Role</el-tab-pane>

    <el-tab-pane label="Task">Task</el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { Calendar } from '@element-plus/icons-vue'

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

.demo-tabs .custom-tabs-label .el-icon {

  vertical-align: middle;

}

.demo-tabs .custom-tabs-label span {

  vertical-align: middle;

  margin-left: 4px;

}

</style>
```

## 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

```vue
<template>

  <el-tabs

    v-model="editableTabsValue"

    type="card"

    editable

    class="demo-tabs"

    @edit="handleTabsEdit"

  >

    <el-tab-pane

      v-for="item in editableTabs"

      :key="item.name"

      :label="item.title"

      :name="item.name"

    >

      {{ item.content }}

    </el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabPaneName } from 'element-plus'

let tabIndex = 2

const editableTabsValue = ref('2')

const editableTabs = ref([

  {

    title: 'Tab 1',

    name: '1',

    content: 'Tab 1 content',

  },

  {

    title: 'Tab 2',

    name: '2',

    content: 'Tab 2 content',

  },

])

const handleTabsEdit = (

  targetName: TabPaneName | undefined,

  action: 'remove' | 'add'

) => {

  if (action === 'add') {

    const newTabName = `${++tabIndex}`

    editableTabs.value.push({

      title: 'New Tab',

      name: newTabName,

      content: 'New Tab content',

    })

    editableTabsValue.value = newTabName

  } else if (action === 'remove') {

    const tabs = editableTabs.value

    let activeName = editableTabsValue.value

    if (activeName === targetName) {

      tabs.forEach((tab, index) => {

        if (tab.name === targetName) {

          const nextTab = tabs[index + 1] || tabs[index - 1]

          if (nextTab) {

            activeName = nextTab.name

          }

        }

      })

    }

    editableTabsValue.value = activeName

    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)

  }

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## 添加按钮自定义图标 2.4.0

```vue
addIcon

<template>

  <el-tabs

    v-model="editableTabsValue"

    type="card"

    class="demo-tabs"

    editable

    @edit="handleTabsEdit"

  >

    <template #add-icon>

      <el-icon><Select /></el-icon>

    </template>

    <el-tab-pane

      v-for="item in editableTabs"

      :key="item.name"

      :label="item.title"

      :name="item.name"

    >

      {{ item.content }}

    </el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { Select } from '@element-plus/icons-vue'

import type { TabPaneName } from 'element-plus'

let tabIndex = 2

const editableTabsValue = ref('2')

const editableTabs = ref([

  {

    title: 'Tab 1',

    name: '1',

    content: 'Tab 1 content',

  },

  {

    title: 'Tab 2',

    name: '2',

    content: 'Tab 2 content',

  },

])

const handleTabsEdit = (

  targetName: TabPaneName | undefined,

  action: 'remove' | 'add'

) => {

  if (action === 'add') {

    const newTabName = `${++tabIndex}`

    editableTabs.value.push({

      title: 'New Tab',

      name: newTabName,

      content: 'New Tab content',

    })

    editableTabsValue.value = newTabName

  } else if (action === 'remove') {

    const tabs = editableTabs.value

    let activeName = editableTabsValue.value

    if (activeName === targetName) {

      tabs.forEach((tab, index) => {

        if (tab.name === targetName) {

          const nextTab = tabs[index + 1] || tabs[index - 1]

          if (nextTab) {

            activeName = nextTab.name

          }

        }

      })

    }

    editableTabsValue.value = activeName

    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)

  }

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## 增加标签页触发器自定义

```vue
<template>

  <div style="margin-bottom: 20px">

    <el-button size="small" @click="addTab(editableTabsValue)">

      add tab

    </el-button>

  </div>

  <el-tabs

    v-model="editableTabsValue"

    type="card"

    class="demo-tabs"

    closable

    @tab-remove="removeTab"

  >

    <el-tab-pane

      v-for="item in editableTabs"

      :key="item.name"

      :label="item.title"

      :name="item.name"

    >

      {{ item.content }}

    </el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabPaneName } from 'element-plus'

let tabIndex = 2

const editableTabsValue = ref('2')

const editableTabs = ref([

  {

    title: 'Tab 1',

    name: '1',

    content: 'Tab 1 content',

  },

  {

    title: 'Tab 2',

    name: '2',

    content: 'Tab 2 content',

  },

])

const addTab = (targetName: string) => {

  const newTabName = `${++tabIndex}`

  editableTabs.value.push({

    title: 'New Tab',

    name: newTabName,

    content: 'New Tab content',

  })

  editableTabsValue.value = newTabName

}

const removeTab = (targetName: TabPaneName) => {

  const tabs = editableTabs.value

  let activeName = editableTabsValue.value

  if (activeName === targetName) {

    tabs.forEach((tab, index) => {

      if (tab.name === targetName) {

        const nextTab = tabs[index + 1] || tabs[index - 1]

        if (nextTab) {

          activeName = nextTab.name

        }

      }

    })

  }

  editableTabsValue.value = activeName

  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## 默认值2.11.9

```vue
<template>

  <el-tabs

    v-model="activeName"

    class="demo-tabs"

    default-value="third"

    @tab-click="handleClick"

  >

    <el-tab-pane

      v-for="tab in tabs"

      :key="tab.name"

      :label="tab.label"

      :name="tab.name"

    >

      default-value: third

      <br />

      active: {{ activeName }}

    </el-tab-pane>

  </el-tabs>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'

const tabs = ref([

  { label: 'User', name: 'first' },

  { label: 'Config', name: 'second' },

  { label: 'Role', name: 'third' },

  { label: 'Task', name: 'fourth' },

])

const activeName = ref()

const handleClick = (tab: TabsPaneContext, event: Event) => {

  console.log(tab, event)

}

</script>

<style>

.demo-tabs > .el-tabs__content {

  padding: 32px;

  color: #6b778c;

  font-size: 32px;

  font-weight: 600;

}

</style>
```

## Tabs API

### Tabs Attributes

| 属性名 | 说明 | 类型 | Default |
|---|---|---|---|
| model-value / v-model | 绑定值，选中选项卡的 name，默认值是第一个 tab 的 name | `string` / `number` | — |
| default-value 2.11.9 | 在初始渲染时处于激活状态的标签的值。（避免初始化时变动） | `string` / `number` |  |
| type | 风格类型 | `enum` | '' |
| closable | 标签是否可关闭 | `boolean` | false |
| addable | 标签是否可增加 | `boolean` | false |
| editable | 标签是否同时可增加和关闭 | `boolean` | false |
| tab-position | 选项卡所在位置 | `enum` | top |
| stretch | 标签的宽度是否自撑开 | `boolean` | false |
| before-leave | 切换标签之前的钩子函数，若返回 `false` 或者返回被 reject 的 `Promise`，则阻止切换。 | `Function` | () => true |
| tabindex 2.11.7 | tabs 的 tabindex | `string` / `number` | 0 |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
|---|---|---|
| tab-click | tab 被选中时触发 | `Function` |
| tab-change | `activeName` 改变时触发 | `Function` |
| tab-remove | 点击 tab 移除按钮时触发 | `Function` |
| tab-add | 点击 tab 新增按钮时触发 | `Function` |
| edit | 点击 tab 的新增或移除按钮后触发 | `Function` |

### Tabs Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 默认插槽 | Tab-pane |
| add-icon 2.5.4 | 自定义添加按钮图标 | — |
| addIcon 2.4.0 deprecated | 自定义添加按钮图标 | — |

### Tabs Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| currentName | 当前活动的面板名称 | `object` |
| tabNavRef 2.9.10 | tab-nav 组件实例 | `object` |

## Tab-nav API

### Tab-nav Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| scrollToActiveTab | 滚动到活动标签 | `Function` |
| removeFocus | 移除聚焦状态 | `Function` |
| tabListRef 2.9.10 | el_tabs__nav html 元素 | `object` |
| tabBarRef 2.9.10 | el_tabs__nav bar 实例 | `object` |

## Tab-bar API

### Tab-bar Exposes

| 属性名 | 详情 | 类型 |
|---|---|---|
| ref 2.9.10 | 选项卡根 HTML 元素 | `object` |
| update 2.9.10 | 手动更新标签栏样式的方法，返回更新后的样式 | `Function` |

## Tab-pane API

### Tab-pane Attributes

| 名称 | 详情 | Type | 默认值 |
|---|---|---|---|
| label | 选项卡标题 | `string` | '' |
| disabled | 是否禁用 | `boolean` | false |
| name | 与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0 | `string` / `number` | — |
| closable | 标签是否可关闭 | `boolean` | false |
| lazy | 标签是否延迟渲染 | `boolean` | false |

### Tab-pane Slots

| Name | Description |
|---|---|
| default | Tab-pane 的内容 |
| label | Tab-pane 的标题内容 |

## 常见问题

#### 如何使用可排序/可拖动的 tabs？

我们已对外暴露了实现该功能所需的必要能力。您可以查看 [示例](https://tinyurl.com/2jkyw82j) 来用原生的方式实现。或使用 [SortableJs](https://github.com/SortableJS/Sortable), [示例](https://tinyurl.com/2r8js24y)。