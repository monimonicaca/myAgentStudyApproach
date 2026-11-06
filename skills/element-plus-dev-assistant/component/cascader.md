# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 基础用法

有两种触发子菜单的方式

只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。通过 `props.expandTrigger` 属性控制子节点的展开方式

```vue
<template>

  <div class="m-4">

    <p>Child options expand when clicked (default)</p>

    <el-cascader v-model="value" :options="options" @change="handleChange" />

  </div>

  <div class="m-4">

    <p>Child options expand when hovered</p>

    <el-cascader

      v-model="value"

      :options="options"

      :props="props"

      @change="handleChange"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref([])

const props = {

  expandTrigger: 'hover' as const,

}

const handleChange = (value) => {

  console.log(value)

}

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 有禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

```vue
<template>

  <el-cascader :options="options" />

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    disabled: true,

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 可清空

通过 `clearable` 设置输入框可清空

```vue
<template>

  <el-cascader :options="options" clearable />

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 自定义清除图标2.11.0

你可以通过`clear-icon`属性自定义清除图标

```vue
<template>

  <el-cascader

    :options="options"

    clearable

    :clear-icon="CloseBold"

    placeholder="Custom clear icon"

  />

</template>

<script lang="ts" setup>

import { CloseBold } from '@element-plus/icons-vue'

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

      },

    ],

  },

]

</script>
```

## 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

属性`show-all-levels`定义了是否显示完整的路径，将其赋值为 `false` 则仅显示最后一级。

```vue
<template>

  <el-cascader :options="options" :show-all-levels="false" />

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 多选

在标签中添加 `:props="props"` 并设置 `props = { multiple: true }` 来开启多选模式。

正确用法：

vue

`<template>

  <el-cascader :props="props" />

</template>

<script lang="ts" setup>

const props = { multiple: true }

</script>`

错误用法：

vue

`<template>

  <!--  Object literal binding here is invalid syntax for cascader  -->

  <el-cascader :props="{ multiple: true }" />

</template>`

使用多选时，所有选中的标签将默认显示。您可以设置 `collapse = true` 将选中的标签折叠。您可以设置 `max-collapse-tags` 来显示最大tag数量，默认1。您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

```vue
<template>

  <div class="m-4">

    <p>Display all tags (default)</p>

    <el-cascader :options="options" :props="props" clearable />

  </div>

  <div class="m-4">

    <p>Collapse tags</p>

    <el-cascader :options="options" :props="props" collapse-tags clearable />

  </div>

  <div class="m-4">

    <p>Collapse tags tooltip</p>

    <el-cascader

      :options="options"

      :props="props"

      collapse-tags

      collapse-tags-tooltip

      clearable

    />

  </div>

  <div class="m-4">

    <p>Max Collapse Tags</p>

    <el-cascader

      :options="options"

      :props="props"

      collapse-tags

      collapse-tags-tooltip

      :max-collapse-tags="3"

      clearable

    />

  </div>

</template>

<script lang="ts" setup>

const props = { multiple: true }

const options = [

  {

    value: 1,

    label: 'Asia',

    children: [

      {

        value: 2,

        label: 'China',

        children: [

          { value: 3, label: 'Beijing' },

          { value: 4, label: 'Shanghai' },

          { value: 5, label: 'Hangzhou' },

        ],

      },

      {

        value: 6,

        label: 'Japan',

        children: [

          { value: 7, label: 'Tokyo' },

          { value: 8, label: 'Osaka' },

          { value: 9, label: 'Kyoto' },

        ],

      },

      {

        value: 10,

        label: 'Korea',

        children: [

          { value: 11, label: 'Seoul' },

          { value: 12, label: 'Busan' },

          { value: 13, label: 'Taegu' },

        ],

      },

    ],

  },

  {

    value: 14,

    label: 'Europe',

    children: [

      {

        value: 15,

        label: 'France',

        children: [

          { value: 16, label: 'Paris' },

          { value: 17, label: 'Marseille' },

          { value: 18, label: 'Lyon' },

        ],

      },

      {

        value: 19,

        label: 'UK',

        children: [

          { value: 20, label: 'London' },

          { value: 21, label: 'Birmingham' },

          { value: 22, label: 'Manchester' },

        ],

      },

    ],

  },

  {

    value: 23,

    label: 'North America',

    children: [

      {

        value: 24,

        label: 'US',

        children: [

          { value: 25, label: 'New York' },

          { value: 26, label: 'Los Angeles' },

          { value: 27, label: 'Washington' },

        ],

      },

      {

        value: 28,

        label: 'Canada',

        children: [

          { value: 29, label: 'Toronto' },

          { value: 30, label: 'Montreal' },

          { value: 31, label: 'Ottawa' },

        ],

      },

    ],

  },

]

</script>
```

## 选择任意一级选项

在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。

可通过 `props.checkStrictly = true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。

```vue
<template>

  <div class="m-4">

    <p>Select any level of options (Single selection)</p>

    <el-cascader :options="options" :props="props1" clearable />

  </div>

  <div class="m-4">

    <p>Select any level of options (Multiple selection)</p>

    <el-cascader :options="options" :props="props2" clearable />

  </div>

</template>

<script lang="ts" setup>

const props1 = {

  checkStrictly: true,

}

const props2 = {

  multiple: true,

  checkStrictly: true,

}

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 动态加载

当选中某一级时，动态加载该级下的选项。

通过`lazy`开启动态加载，并通过`lazyload`来设置加载数据源的方法。 `lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)。否则，将以有无子节点来判断其是否为叶子节点。

```vue
<template>

  <el-cascader :props="props" />

</template>

<script lang="ts" setup>

import type { CascaderProps } from 'element-plus'

let id = 0

const props: CascaderProps = {

  lazy: true,

  lazyLoad(node, resolve) {

    const { level } = node

    setTimeout(() => {

      const nodes = Array.from({ length: level + 1 }).map((item) => ({

        value: ++id,

        label: `Option - ${id}`,

        leaf: level >= 2,

      }))

      // Invoke `resolve` callback to return the child nodes data and indicate the loading is finished.

      resolve(nodes)

    }, 1000)

  },

}

</script>
```

## 可搜索

可以快捷地搜索选项并选择。

通过添加`filterable`来启用过滤。 Cascader 会匹配所有节点的标签和它们的亲节点的标签，是否包含有输入的关键字。你也可以用`filter-method`自定义搜索逻辑，接受一个函数，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中。

```vue
<template>

  <div class="m-4">

    <p>Filterable (Single selection)</p>

    <el-cascader

      placeholder="Try searchingL Guide"

      :options="options"

      filterable

    />

  </div>

  <div class="m-4">

    <p>Filterable (Multiple selection)</p>

    <el-cascader

      placeholder="Try searchingL Guide"

      :options="options"

      :props="props"

      filterable

    />

  </div>

</template>

<script lang="ts" setup>

const props = {

  multiple: true,

}

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 自定义节点内容

可以自定义备选项的节点内容

你可以通过 `scoped slot` 自定义节点的内容。您可以访问 scope 中的 `node` 和 `data` 属性，分别表示当前节点的 Node 对象和当前节点的数据。

```vue
<template>

  <el-cascader :options="options">

    <template #default="{ node, data }">

      <span>{{ data.label }}</span>

      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>

    </template>

  </el-cascader>

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 自定义建议项2.9.5

你可以通过 `suggestion-item` 插槽自定义建议项。你可以在作用域中访问 `item`，它代表建议项。

```vue
<template>

  <el-cascader :options="options" filterable placeholder="Try searching: Guide">

    <template #suggestion-item="{ item }">

      <span>🔍 {{ item.pathLabels.join(' > ') }}</span>

    </template>

  </el-cascader>

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 级联面板

级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。

和级联选择器一样，通过 `options` 来指定选项，也可通过 `props` 来设置多选、动态加载等功能，具体详情见下方API表格。

```vue
<template>

  <el-cascader-panel :options="options" />

</template>

<script lang="ts" setup>

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

          {

            value: 'color',

            label: 'Color',

          },

          {

            value: 'typography',

            label: 'Typography',

          },

          {

            value: 'icon',

            label: 'Icon',

          },

          {

            value: 'button',

            label: 'Button',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

          {

            value: 'checkbox',

            label: 'Checkbox',

          },

          {

            value: 'input',

            label: 'Input',

          },

          {

            value: 'input-number',

            label: 'InputNumber',

          },

          {

            value: 'select',

            label: 'Select',

          },

          {

            value: 'cascader',

            label: 'Cascader',

          },

          {

            value: 'switch',

            label: 'Switch',

          },

          {

            value: 'slider',

            label: 'Slider',

          },

          {

            value: 'time-picker',

            label: 'TimePicker',

          },

          {

            value: 'date-picker',

            label: 'DatePicker',

          },

          {

            value: 'datetime-picker',

            label: 'DateTimePicker',

          },

          {

            value: 'upload',

            label: 'Upload',

          },

          {

            value: 'rate',

            label: 'Rate',

          },

          {

            value: 'form',

            label: 'Form',

          },

        ],

      },

      {

        value: 'data',

        label: 'Data',

        children: [

          {

            value: 'table',

            label: 'Table',

          },

          {

            value: 'tag',

            label: 'Tag',

          },

          {

            value: 'progress',

            label: 'Progress',

          },

          {

            value: 'tree',

            label: 'Tree',

          },

          {

            value: 'pagination',

            label: 'Pagination',

          },

          {

            value: 'badge',

            label: 'Badge',

          },

        ],

      },

      {

        value: 'notice',

        label: 'Notice',

        children: [

          {

            value: 'alert',

            label: 'Alert',

          },

          {

            value: 'loading',

            label: 'Loading',

          },

          {

            value: 'message',

            label: 'Message',

          },

          {

            value: 'message-box',

            label: 'MessageBox',

          },

          {

            value: 'notification',

            label: 'Notification',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'menu',

            label: 'Menu',

          },

          {

            value: 'tabs',

            label: 'Tabs',

          },

          {

            value: 'breadcrumb',

            label: 'Breadcrumb',

          },

          {

            value: 'dropdown',

            label: 'Dropdown',

          },

          {

            value: 'steps',

            label: 'Steps',

          },

        ],

      },

      {

        value: 'others',

        label: 'Others',

        children: [

          {

            value: 'dialog',

            label: 'Dialog',

          },

          {

            value: 'tooltip',

            label: 'Tooltip',

          },

          {

            value: 'popover',

            label: 'Popover',

          },

          {

            value: 'card',

            label: 'Card',

          },

          {

            value: 'carousel',

            label: 'Carousel',

          },

          {

            value: 'collapse',

            label: 'Collapse',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

      {

        value: 'sketch',

        label: 'Sketch Templates',

      },

      {

        value: 'docs',

        label: 'Design Documentation',

      },

    ],

  },

]

</script>
```

## 自定义标签 2.10.3

您可以自定义标签。

将自定义的标签插入 `el-cascader` 的 slot 中即可。 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.

```vue
<template>

  <div class="m-4">

    <p>Using slots allows for more flexible control over the display.</p>

    <el-cascader :options="options" :props="props" clearable>

      <template #tag="{ data }">

        <el-tag

          v-for="(item, index) in getTags(data)"

          :key="item"

          :color="index % 2 === 0 ? '#FFDE0A' : ''"

        >

          {{ item }}

        </el-tag>

      </template>

    </el-cascader>

    <p>Display top-level tags only</p>

    <el-cascader :options="options" :props="props" clearable>

      <template #tag="{ data }">

        <el-tag v-for="item in getTopLevelTags(data)" :key="item">

          {{ item }}

        </el-tag>

      </template>

    </el-cascader>

  </div>

</template>

<script lang="ts" setup>

import type { Tag } from 'element-plus'

const props = { multiple: true }

const options = [

  {

    value: 1,

    label: 'Asia',

    children: [

      {

        value: 2,

        label: 'China',

        children: [

          { value: 3, label: 'Beijing' },

          { value: 4, label: 'Shanghai' },

          { value: 5, label: 'Hangzhou' },

        ],

      },

      {

        value: 6,

        label: 'Japan',

        children: [

          { value: 7, label: 'Tokyo' },

          { value: 8, label: 'Osaka' },

          { value: 9, label: 'Kyoto' },

        ],

      },

      {

        value: 10,

        label: 'Korea',

        children: [

          { value: 11, label: 'Seoul' },

          { value: 12, label: 'Busan' },

          { value: 13, label: 'Taegu' },

        ],

      },

    ],

  },

  {

    value: 14,

    label: 'Europe',

    children: [

      {

        value: 15,

        label: 'France',

        children: [

          { value: 16, label: 'Paris' },

          { value: 17, label: 'Marseille' },

          { value: 18, label: 'Lyon' },

        ],

      },

      {

        value: 19,

        label: 'UK',

        children: [

          { value: 20, label: 'London' },

          { value: 21, label: 'Birmingham' },

          { value: 22, label: 'Manchester' },

        ],

      },

    ],

  },

  {

    value: 23,

    label: 'North America',

    children: [

      {

        value: 24,

        label: 'US',

        children: [

          { value: 25, label: 'New York' },

          { value: 26, label: 'Los Angeles' },

          { value: 27, label: 'Washington' },

        ],

      },

      {

        value: 28,

        label: 'Canada',

        children: [

          { value: 29, label: 'Toronto' },

          { value: 30, label: 'Montreal' },

          { value: 31, label: 'Ottawa' },

        ],

      },

    ],

  },

]

const getTags = (data: Tag[]) => {

  return data.map((item) => item.text)

}

const getTopLevelTags = (data: Tag[]) => {

  const set: Set<string> = new Set()

  for (const datum of data) {

    let parent = datum.node?.parent

    while (parent && parent.level !== 1) {

      parent = parent.parent

    }

    const label = parent?.data?.label

    label && set.add(label)

  }

  return [...set]

}

</script>
```

## 已勾选项显示策略 2.10.5

控制在多选模式下已选值的显示方式。

在多选模式下，你可以使用 `show-checked-strategy` 来控制已选值的显示方式。默认策略为 `child`，即显示所有已选中的子节点。 `parent` 策略仅在其所有子节点都被选中时显示父节点。

```vue
<template>

  <div class="m-4">

    <p>Strategy: child (default, show all selected child nodes)</p>

    <el-cascader

      v-model="value1"

      :options="options"

      :props="props"

      show-checked-strategy="child"

      clearable

      @change="handleChange1"

    />

  </div>

  <div class="m-4">

    <p>

      Strategy: parent (show only parent nodes when all children are selected)

    </p>

    <el-cascader

      v-model="value2"

      :options="options"

      :props="props"

      show-checked-strategy="parent"

      clearable

      @change="handleChange2"

    />

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value1 = ref([])

const value2 = ref([])

const props = {

  multiple: true,

}

const handleChange1 = (value) => {

  console.log('Child strategy:', value)

}

const handleChange2 = (value) => {

  console.log('Parent strategy:', value)

}

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

    ],

  },

]

</script>
```

## 点击选中节点 2.10.5

只使用 `multiple` 或 `checkStrictly` 属性。

你可以添加 `checkOnClickNode`，使节点本身也能被点击（不仅限于前缀图标）。 通过 `showPrefix` 来切换前缀的显示与隐藏。 :::tip 添加 `checkOnClickLeaf` 属性可以仅勾选叶子节点（最末级子节点），该功能默认启用。 :::

```vue
<template>

  <div class="flex flex-col items-center">

    <el-switch

      v-model="showPrefix"

      active-text="show prefix"

      inactive-text="hide prefix"

    />

    <div class="flex flex-wrap">

      <div class="m-4">

        <p>checkStrictly | Single mode</p>

        <el-cascader

          v-model="value"

          :options="options"

          :props="props1"

          clearable

        />

      </div>

      <div class="m-4">

        <p>Multiple mode</p>

        <el-cascader

          v-model="value2"

          show-checked-strategy="parent"

          :options="options"

          :props="props2"

          clearable

        />

      </div>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

const value = ref()

const value2 = ref()

const showPrefix = ref(true)

const props1 = computed(() => ({

  showPrefix: showPrefix.value,

  checkStrictly: true,

  checkOnClickNode: true,

}))

const props2 = computed(() => ({

  showPrefix: showPrefix.value,

  multiple: true,

  checkOnClickNode: true,

}))

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

        ],

      },

    ],

  },

  {

    value: 'component',

    label: 'Component',

    children: [

      {

        value: 'basic',

        label: 'Basic',

        children: [

          {

            value: 'layout',

            label: 'Layout',

          },

        ],

      },

      {

        value: 'form',

        label: 'Form',

        children: [

          {

            value: 'radio',

            label: 'Radio',

          },

        ],

      },

    ],

  },

  {

    value: 'resource',

    label: 'Resource',

    children: [

      {

        value: 'axure',

        label: 'Axure Components',

      },

    ],

  },

]

</script>
```

## 自定义头部与底部 2.10.5

你可以通过插槽来自定义下拉菜单的头部和底部。

使用插槽自定义内容。

```vue
<template>

  <div class="cascader-custom-header-footer">

    <div>

      <p>Custom header content</p>

      <el-cascader

        v-model="value"

        popper-class="cascader-custom-header"

        :options="options"

        :props="props"

        clearable

      >

        <template #header>

          <el-checkbox

            v-model="checkAll"

            :indeterminate="indeterminate"

            @change="handleCheckAll"

          >

            All

          </el-checkbox>

        </template>

      </el-cascader>

    </div>

    <div>

      <p>Custom footer content</p>

      <el-cascader v-model="value" :options="options" :props="props" clearable>

        <template #footer>

          <el-button link size="small" @click="handleClear"> Clear </el-button>

        </template>

      </el-cascader>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref, watch } from 'vue'

import type { CascaderOption, CheckboxValueType } from 'element-plus'

const props = { multiple: true }

const checkAll = ref(false)

const indeterminate = ref(false)

const value = ref<string[][]>([])

const options = ref([

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          { value: 'consistency', label: 'Consistency' },

          { value: 'feedback', label: 'Feedback' },

          { value: 'efficiency', label: 'Efficiency' },

          { value: 'controllability', label: 'Controllability' },

        ],

      },

    ],

  },

])

const getAllValuePaths = computed(() => {

  const result: string[][] = []

  const queue: { node: CascaderOption; path: string[] }[] = options.value.map(

    (node) => ({ node, path: [node.value] })

  )

  while (queue.length > 0) {

    const { node, path } = queue.shift()!

    if (node.children?.length) {

      node.children.forEach((child) => {

        queue.push({ node: child, path: [...path, child.value as string] })

      })

    } else {

      result.push(path)

    }

  }

  return result

})

watch(value, (val) => {

  if (val.length === 0) {

    checkAll.value = false

    indeterminate.value = false

  } else if (val.length === getAllValuePaths.value.length) {

    checkAll.value = true

    indeterminate.value = false

  } else {

    indeterminate.value = true

  }

})

const handleCheckAll = (val: CheckboxValueType) => {

  indeterminate.value = false

  value.value = val ? getAllValuePaths.value : []

}

const handleClear = () => {

  value.value = []

}

</script>

<style scoped>

.cascader-custom-header-footer {

  display: flex;

}

.cascader-custom-header-footer > div {

  flex: 1;

  text-align: center;

}

.cascader-custom-header-footer > div:not(:last-child) {

  border-right: 1px solid var(--el-border-color);

}

.cascader-custom-header .el-checkbox {

  display: flex;

  height: unset;

}

</style>
```

## 虚拟滚动 2.14.0

当处理大量数据时，您可以启用虚拟滚动以提高性能。

将 `virtual-scroll` 设置为 `true` 以启用虚拟滚动。 您还可以使用 `height` 自定义菜单高度，并使用 `item-size` 自定义节点高度。 默认高度为 204px，默认节点大小为 34px。

```vue
<template>

  <el-cascader

    v-model="value"

    :options="options"

    :filter-method="filterMethod"

    filterable

    virtual-scroll

    clearable

    placeholder="Select with large data"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { CascaderNode } from 'element-plus'

interface CascaderExampleOption {

  value: string

  label: string

  children?: CascaderExampleOption[]

}

const value = ref<string[]>([])

const filterMethod = (node: CascaderNode, keyword: string) => {

  return node.text.toLowerCase().includes(keyword.toLowerCase())

}

const generateOptions = (count: number): CascaderExampleOption[] => {

  return Array.from({ length: count }).map((_, index) => ({

    value: `option-${index}`,

    label: `Option ${index + 1}`,

    children: [

      {

        value: `child-${index}-1`,

        label: `Child ${index + 1}-1`,

        children: [

          {

            value: `grandchild-${index}-1-1`,

            label: `Grandchild ${index + 1}-1-1`,

          },

          {

            value: `grandchild-${index}-1-2`,

            label: `Grandchild ${index + 1}-1-2`,

          },

        ],

      },

      {

        value: `child-${index}-2`,

        label: `Child ${index + 1}-2`,

      },

    ],

  }))

}

const options = ref<CascaderExampleOption[]>(generateOptions(20000))

</script>
```

## 自定义建议面板宽度 2.14.0

建议面板（筛选时）的宽度默认会根据匹配到的选项中的最大宽度自动计算。 如果您通过 `suggestion-item` 插槽自定义建议选项，选项中显示的文本很可能不等于 `label` 的值，从而导致计算错误。 在这种情况下，您可以使用 `fit-input-width` 属性来固定其宽度。 当值为 `number` 时，宽度为固定的具体像素值。

> **TIP**

> `fit-input-width` 属性仅控制搜索时建议面板的宽度，不影响默认的级联面板。

```vue
<template>

  <div class="flex flex-wrap gap-4 items-center">

    <el-cascader

      v-model="value"

      :options="options"

      placeholder="Default expanding panel"

      filterable

    />

    <el-cascader

      v-model="value"

      :options="options"

      placeholder="Fit input width"

      filterable

      fit-input-width

    />

    <el-cascader

      v-model="value"

      :options="options"

      placeholder="Fixed width (400px)"

      filterable

      :fit-input-width="400"

    >

      <template #suggestion-item="{ item }">

        <div>{{ item.text }} (Custom content that is very long)</div>

      </template>

    </el-cascader>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const value = ref()

const options = [

  {

    value: 'guide',

    label: 'Guide',

    children: [

      {

        value: 'disciplines',

        label: 'Disciplines',

        children: [

          {

            value: 'consistency',

            label: 'Consistency',

          },

          {

            value: 'feedback',

            label: 'Feedback',

          },

          {

            value: 'efficiency',

            label: 'Efficiency',

          },

          {

            value: 'controllability',

            label: 'Controllability',

          },

        ],

      },

      {

        value: 'navigation',

        label: 'Navigation',

        children: [

          {

            value: 'side nav',

            label: 'Side Navigation',

          },

          {

            value: 'top nav',

            label: 'Top Navigation',

          },

        ],

      },

    ],

  },

]

</script>
```

## Cascader API

### Cascader Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string` / `number` /`array` | — |
| options | 选项的数据源， `value` 和 `label` 可以通过 `CascaderProps` 自定义. | `array` | — |
| [props](#cascaderprops) | 配置选项, 请参阅下面 `CascaderProps` 表。 | `object` | — |
| size | 尺寸 | `enum` | — |
| placeholder | 输入框占位文本 | `string` | — |
| disabled | 是否禁用 | `boolean` | — |
| clearable | 是否支持清空选项 | `boolean` | — |
| clear-icon 2.11.0 | 自定义清除图标 | `string` / `object` | CircleClose |
| show-all-levels | 输入框中是否显示选中值的完整路径 | `boolean` | true |
| collapse-tags | 多选模式下是否折叠Tag | `boolean` | — |
| collapse-tags-tooltip | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此属性，`collapse-tags`属性必须设定为 true | `boolean` | false |
| max-collapse-tags-tooltip-height 2.10.2 | collapse tags 的最大高度 | `string` / `number` | — |
| separator | 用于分隔选项的字符 | `string` | ' / ' |
| filterable | 该选项是否可以被搜索 | `boolean` | — |
| filter-method | 自定义搜索逻辑，第一个参数是`node`，第二个参数是`keyword`，返回的布尔值表示是否保留该选项 | `Function` | — |
| debounce | 搜索关键词正在输入时的去抖延迟，单位为毫秒 | `number` | 300 |
| before-filter | 过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是 `false` 或者是一个被拒绝的 `Promise`，那么接下来的过滤逻辑便不会执行。 | `Function` | — |
| popper-class | Cascader 下拉菜单和标签提示的自定义类名 | `string` | '' |
| popper-style | Cascader 下拉菜单和标签提示的自定义样式 | `string` / `object` | — |
| teleported | 弹层是否使用 teleport | `boolean` | true |
| effect 2.10.5 | tooltip 主题，内置了 `dark` / `light` 两种 | `enum`** / `string` | light |
| tag-type | 标签类型 | `enum` | info |
| tag-effect 2.7.8 | tag effect | `enum` | light |
| validate-event | 输入时是否触发表单的校验 | `boolean` | true |
| max-collapse-tags 2.3.10 | 需要显示的 Tag 的最大数量要使用此功能，`collapse-tags`的值必须为true | `number` | 1 |
| empty-values 2.7.0 | 组件的空值配置， [参考config-provider](./config-provider#empty-values-configurations) | `array` | — |
| value-on-clear 2.7.0 | 清空选项的值， [参考config-provider](./config-provider#empty-values-configurations) | `string` / `number` / `boolean` / `Function` | — |
| persistent 2.7.8 | 当下拉框未被激活并且`persistent`设置为`false`，下拉框容器会被删除。 | `boolean` | true |
| fallback-placements 2.8.1 | Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | `array` | — |
| placement 2.8.1 | 下拉框出现的位置 | `enum` | bottom-start |
| popper-append-to-body deprecated | 是否将弹出的内容直接插入到 body 元素。在弹出内容的边框定位出现问题时，可将该属性设置为 false | `boolean` | true |
| show-checked-strategy 2.10.5 | 多选模式下已选节点的展示策略。当你想让显示更简洁时，使用 `parent`。当你想显示每个子项时，使用 `child`。 | `enum` | child |
| virtual-scroll 2.14.0 | 是否为大数据启用虚拟滚动 | `boolean` | false |
| fit-input-width 2.14.0 | 建议面板的宽度是否与输入框一致；如果值为 `number`，则宽度为固定值。 | `boolean` / `number` | false |
| item-size 2.14.0 | 虚拟滚动的节点高度 (px) | `number` | 34 |
| height 2.14.0 | 虚拟滚动的菜单高度 (px) | `number` | 204 |

### Cascader Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 当绑定值变化时触发的事件 | `Function` |
| expand-change | 当展开节点发生变化时触发 | `Function` |
| blur | 当失去焦点时触发 | `Function` |
| focus | 当获得焦点时触发 | `Function` |
| clear 2.7.7 | 可清空的单选模式下用户点击清空按钮时触发 | `Function` |
| visible-change | 下拉框出现/隐藏时触发 | `Function` |
| remove-tag | 在多选模式下，移除Tag时触发 | `Function` |

### Cascader Slots

| 插槽名 | 说明 | Type |
|---|---|---|
| default | 自定义备选项的节点内容，分别为当前节点的 Node 对象和数据 | `object` |
| empty | 无匹配选项时的内容 | — |
| prefix 2.9.4 | 输入框头部内容 | — |
| suggestion-item 2.9.5 | 搜索时自定义建议项内容 | `object` |
| tag 2.10.3 | 自定义tag样式 | `object` |
| header 2.10.5 | 下拉列表顶部的内容 | — |
| footer 2.10.5 | 下拉列表底部的内容 | — |

### Cascader Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| getCheckedNodes | 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 `false` | `Function` |
| cascaderPanelRef | cascader 面板的 ref | `object` |
| togglePopperVisible 2.2.31 | 切换 popper 可见状态 | `Function` |
| contentRef | cascader 内容的 ref | `object` |
| presentText 2.8.4 | 选中的内容文本 | `object` |
| focus 2.11.8 | 使 input 获取焦点 | `Function` |
| blur 2.11.8 | 使 input 失去焦点 | `Function` |

## CascaderPanel API

### CascaderPanel Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| model-value / v-model | 选中项绑定值 | `string`/`number`/`array` | — |
| options | 选项的数据源， `value` 和 `label` 可以通过 `CascaderProps` 自定义. | `array` | — |
| [props](#cascaderprops) | 配置选项, 请参阅下面 `CascaderProps` 表。 | `object` | — |
| virtual-scroll 2.14.0 | 是否为大数据启用虚拟滚动 | `boolean` | false |
| item-size 2.14.0 | 虚拟滚动的节点高度 (px) | `number` | 34 |
| height 2.14.0 | 虚拟滚动的菜单高度 (px) | `number` | 204 |

### CascaderPanel Events

| 方法名 | Description | Type |
|---|---|---|
| change | 当选中节点变化时触发 | `Function` |
| update:modelValue | 当绑定值变化时触发的事件 | `Function` |
| expand-change | 当展开节点发生变化时触发 | `Function` |
| close | 面板的关闭事件，提供给 Cascader 以便做更好的判断。 | `Function` |

### CascaderPanel Slots

| 事件名 | 说明 | Type |
|---|---|---|
| default | 下级节点的自定义内容，它们分别是当前节点对象和节点数据。 | `object` |
| empty 2.8.3 | 没有数据时面板的内容。 | — |

### CascaderPanel Exposes

| 属性名 | 说明 | Type |
|---|---|---|
| getCheckedNodes | 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 `false` | `Function` |
| clearCheckedNodes | 清空选中的节点 | `Function` |

## CascaderProps

| 属性 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| expandTrigger | 次级菜单的展开方式 | `enum` | click |
| multiple | 是否多选 | `boolean` | false |
| checkStrictly | 是否严格的遵守父子节点不互相关联 | `boolean` | false |
| emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | `boolean` | true |
| lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | `boolean` | false |
| lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 reject 参数在 2.11.5 版本及以上支持。 | `Function` | — |
| value | 指定选项的值为选项对象的某个属性值 | `string` | value |
| label | 指定选项标签为选项对象的某个属性值 | `string` | label |
| children | 指定选项的子选项为选项对象的某个属性值 | `string` | children |
| disabled | 指定选项的禁用为选项对象的某个属性值 | `string` | disabled |
| leaf | 指定选项的叶子节点的标志位为选项对象的某个属性值 | `string` | leaf |
| hoverThreshold | hover 时展开菜单的灵敏度阈值 | `number` | 500 |
| checkOnClickNode 2.10.5 | 点击节点时是否选中或取消选中该节点 | `boolean` | false |
| checkOnClickLeaf 2.10.5 | 点击叶子节点（最后一级子节点）时，是否选中或取消选中该节点 | `boolean` | true |
| showPrefix 2.10.5 | 是否显示单选框或复选框的前缀（图标） | `boolean` | true |

## 类型声明

显示类型声明ts`type CascaderNodeValue = string | number

type CascaderNodePathValue = CascaderNodeValue[]

type CascaderValue =

  | CascaderNodeValue

  | CascaderNodePathValue

  | (CascaderNodeValue | CascaderNodePathValue)[]

type Resolve = (data: any) => void

type ExpandTrigger = 'click' | 'hover'

type LazyLoad = (node: Node, resolve: Resolve, reject: () => void) => void

type isDisabled = (data: CascaderOption, node: Node) => boolean

type isLeaf = (data: CascaderOption, node: Node) => boolean

interface CascaderOption extends Record<string, unknown> {

  label?: string

  value?: CascaderNodeValue

  children?: CascaderOption[]

  disabled?: boolean

  leaf?: boolean

}

interface CascaderProps {

  expandTrigger?: ExpandTrigger

  multiple?: boolean

  checkStrictly?: boolean

  emitPath?: boolean

  lazy?: boolean

  lazyLoad?: LazyLoad

  value?: string

  label?: string

  children?: string

  disabled?: string | isDisabled

  leaf?: string | isLeaf

  hoverThreshold?: number

}

class Node {

  readonly uid: number

  readonly level: number

  readonly value: CascaderNodeValue

  readonly label: string

  readonly pathNodes: Node[]

  readonly pathValues: CascaderNodePathValue

  readonly pathLabels: string[]

  childrenData: ChildrenData

  children: Node[]

  text: string

  loaded: boolean

  /**

   * Is it checked

   *

   * @default false

   */

  checked: boolean

  /**

   * Used to indicate the intermediate state of unchecked and fully checked child nodes

   *

   * @default false

   */

  indeterminate: boolean

  /**

   * Loading Status

   *

   * @default false

   */

  loading: boolean

  // getter

  isDisabled: boolean

  isLeaf: boolean

  valueByOption: CascaderNodeValue | CascaderNodePathValue

  // method

  appendChild(childData: CascaderOption): Node

  calcText(allLevels: boolean, separator: string): string

  broadcast(): void

  emit(): void

  onParentCheck(checked: boolean): void

  onChildCheck(): void

  setCheckState(checked: boolean): void

  doCheck(checked: boolean): void

}

Node as CascaderNode`