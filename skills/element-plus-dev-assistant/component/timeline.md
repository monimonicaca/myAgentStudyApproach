# Timeline 时间线

可视化地呈现时间流信息。

## 基础用法

Timeline 可拆分成多个按照时间戳排列的活动，时间戳是其区分于其他控件的重要特征，使用时注意与 Steps 步骤条等区分。

```vue
<template>

  <el-timeline>

    <el-timeline-item

      v-for="(activity, index) in activities"

      :key="index"

      :timestamp="activity.timestamp"

    >

      {{ activity.content }}

    </el-timeline-item>

  </el-timeline>

</template>

<script lang="ts" setup>

const activities = [

  {

    content: 'Event start',

    timestamp: '2018-04-15',

  },

  {

    content: 'Approved',

    timestamp: '2018-04-13',

  },

  {

    content: 'Success',

    timestamp: '2018-04-11',

  },

]

</script>
```

## Mode 2.13.1

使用 `mode` 来控制时间线与内容的相对位置。

> **TIP**

> 在 2.13.1 之后，`el-timeline` 显式设置了内边距样式。如果您在项目中覆盖了 `ul` 标签的填充样式，请检查以确保布局正确。

```vue
<template>

  <el-radio-group v-model="mode">

    <el-radio-button label="start" value="start" />

    <el-radio-button label="alternate" value="alternate" />

    <el-radio-button label="alternate-reverse" value="alternate-reverse" />

    <el-radio-button label="end" value="end" />

  </el-radio-group>

  <el-timeline class="mt-4" :mode="mode">

    <el-timeline-item

      v-for="(activity, index) in activities"

      :key="index"

      :timestamp="activity.timestamp"

    >

      {{ activity.content }}

    </el-timeline-item>

  </el-timeline>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TimelineProps } from 'element-plus'

const activities = [

  {

    content: 'Event start',

    timestamp: '2018-04-15',

  },

  {

    content: 'Approved',

    timestamp: '2018-04-13',

  },

  {

    content: 'Success',

    timestamp: '2018-04-11',

  },

]

const mode = ref<TimelineProps['mode']>('start')

</script>
```

## ⾃定义节点样式

可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。

```vue
<template>

  <el-timeline>

    <el-timeline-item

      v-for="(activity, index) in activities"

      :key="index"

      :icon="activity.icon"

      :type="activity.type"

      :color="activity.color"

      :size="activity.size"

      :hollow="activity.hollow"

      :timestamp="activity.timestamp"

    >

      {{ activity.content }}

    </el-timeline-item>

  </el-timeline>

</template>

<script lang="ts" setup>

import { MoreFilled } from '@element-plus/icons-vue'

import type { TimelineItemProps } from 'element-plus'

interface ActivityType extends Partial<TimelineItemProps> {

  content: string

}

const activities: ActivityType[] = [

  {

    content: 'Custom icon',

    timestamp: '2018-04-12 20:46',

    size: 'large',

    type: 'primary',

    icon: MoreFilled,

  },

  {

    content: 'Custom color',

    timestamp: '2018-04-03 20:46',

    color: '#0bbd87',

  },

  {

    content: 'Custom size',

    timestamp: '2018-04-03 20:46',

    size: 'large',

  },

  {

    content: 'Custom hollow',

    timestamp: '2018-04-03 20:46',

    type: 'primary',

    hollow: true,

  },

  {

    content: 'Default node',

    timestamp: '2018-04-03 20:46',

  },

]

</script>
```

## ⾃定义时间戳

当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。

```vue
<template>

  <el-timeline>

    <el-timeline-item timestamp="2018/4/12" placement="top">

      <el-card>

        <h4>Update Github template</h4>

        <p>Tom committed 2018/4/12 20:46</p>

      </el-card>

    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/3" placement="top">

      <el-card>

        <h4>Update Github template</h4>

        <p>Tom committed 2018/4/3 20:46</p>

      </el-card>

    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">

      <el-card>

        <h4>Update Github template</h4>

        <p>Tom committed 2018/4/2 20:46</p>

      </el-card>

    </el-timeline-item>

  </el-timeline>

</template>
```

## 垂直居中

垂直居中样式的 Timeline-Item

```vue
<template>

  <el-timeline>

    <el-timeline-item center timestamp="2018/4/12" placement="top">

      <el-card>

        <h4>Update Github template</h4>

        <p>Tom committed 2018/4/12 20:46</p>

      </el-card>

    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/3" placement="top">

      <el-card>

        <h4>Update Github template</h4>

        <p>Tom committed 2018/4/3 20:46</p>

      </el-card>

    </el-timeline-item>

    <el-timeline-item center timestamp="2018/4/2" placement="top">

      Event start

    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">

      Event end

    </el-timeline-item>

  </el-timeline>

</template>
```

## 反向 2.11.9

使用 reverse 属性来控制节点的顺序。

```vue
<template>

  <el-switch v-model="reverse" active-text="reverse" />

  <el-timeline class="mt-2" :reverse="reverse">

    <el-timeline-item

      v-for="(activity, index) in activities"

      :key="index"

      :timestamp="activity.timestamp"

    >

      {{ activity.content }}

    </el-timeline-item>

  </el-timeline>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const reverse = ref(true)

const activities = [

  {

    content: 'Event start',

    timestamp: '2018-04-15',

  },

  {

    content: 'Approved',

    timestamp: '2018-04-13',

  },

  {

    content: 'Success',

    timestamp: '2018-04-11',

  },

]

</script>
```

## Timeline API

### Timeline Attributes

| 插槽名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| reverse 2.11.9 | 是否逆序排序 | `boolean` | false |
| mode 2.13.1 | 时间线与内容的相对位置 | `enum` | start |

### Timeline Slots

| 属性名 | 说明 | 子标签 |
|---|---|---|
| default | timeline 组件的自定义默认内容 | Timeline-Item |

## Timeline-Item API

### Timeline-Item Attributes

| 插槽名 | 说明 | Type | Default |
|---|---|---|---|
| timestamp | 时间戳 | `string` | '' |
| hide-timestamp | 是否隐藏时间戳 | `boolean` | false |
| center | 是否垂直居中 | `boolean` | false |
| placement | 时间戳位置 | `enum` | bottom |
| type | 节点类型 | `enum` | '' |
| color | 节点颜色 | `string` | '' |
| size | 节点尺寸 | `enum` | normal |
| icon | 自定义图标 | `string` / `Component` | — |
| hollow | 是否空心点 | `boolean` | false |

### Timeline-Item Slots

| 方法名 | 详情 |
|---|---|
| default | 自定义 timeline 项的默认内容 |
| dot | 为时间线项目自定义已定义的节点 |