# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress 组件设置 `percentage` 属性即可，表示进度条对应的百分比。该属性**必填**，并且必须在 `0-100` 的范围内。你可以通过设置 `format` 来自定义文字显示的格式。

```vue
<template>

  <div class="demo-progress">

    <el-progress :percentage="50" />

    <el-progress :percentage="100" :format="format" />

    <el-progress :percentage="100" status="success" />

    <el-progress :percentage="100" status="warning" />

    <el-progress :percentage="50" status="exception" />

  </div>

</template>

<script lang="ts" setup>

const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

</script>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

</style>
```

## 进度条内显示百分比标识

百分比不占用额外空间，适用于文件上传等场景。

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来改变进度条内部的文字。

```vue
<template>

  <div class="demo-progress">

    <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />

    <el-progress

      :text-inside="true"

      :stroke-width="24"

      :percentage="100"

      status="success"

    />

    <el-progress

      :text-inside="true"

      :stroke-width="22"

      :percentage="80"

      status="warning"

    />

    <el-progress

      :text-inside="true"

      :stroke-width="20"

      :percentage="50"

      status="exception"

    />

  </div>

</template>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

</style>
```

## 自定义进度条的颜色

可以通过 `color` 属性来设置进度条的颜色。该属性可以接受十六进制颜色值，函数和数组。

```vue
<template>

  <div class="demo-progress">

    <el-progress :percentage="percentage" :color="customColor" />

    <el-progress :percentage="percentage" :color="customColorMethod" />

    <el-progress :percentage="percentage" :color="customColors" />

    <el-progress :percentage="percentage" :color="customColors" />

    <div>

      <el-button-group>

        <el-button :icon="Minus" @click="decrease" />

        <el-button :icon="Plus" @click="increase" />

      </el-button-group>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(20)

const customColor = ref('#409eff')

const customColors = [

  { color: '#f56c6c', percentage: 20 },

  { color: '#e6a23c', percentage: 40 },

  { color: '#5cb87a', percentage: 60 },

  { color: '#1989fa', percentage: 80 },

  { color: '#6f7ad3', percentage: 100 },

]

const customColorMethod = (percentage: number) => {

  if (percentage < 30) {

    return '#909399'

  }

  if (percentage < 70) {

    return '#e6a23c'

  }

  return '#67c23a'

}

const increase = () => {

  percentage.value += 10

  if (percentage.value > 100) {

    percentage.value = 100

  }

}

const decrease = () => {

  percentage.value -= 10

  if (percentage.value < 0) {

    percentage.value = 0

  }

}

</script>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

</style>
```

## 环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

```vue
<template>

  <div class="demo-progress">

    <el-progress type="circle" :percentage="0" />

    <el-progress type="circle" :percentage="25" />

    <el-progress type="circle" :percentage="100" status="success" />

    <el-progress type="circle" :percentage="70" status="warning" />

    <el-progress type="circle" :percentage="50" status="exception" />

  </div>

</template>

<style scoped>

.demo-progress .el-progress--circle {

  margin-right: 15px;

}

</style>
```

## 仪表盘形进度条

您也可以指定 `type` 属性到 `dashboard` 使用控制面板进度栏。

```vue
<template>

  <div class="demo-progress">

    <el-progress type="dashboard" :percentage="percentage" :color="colors" />

    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />

    <div>

      <el-button-group>

        <el-button :icon="Minus" @click="decrease" />

        <el-button :icon="Plus" @click="increase" />

      </el-button-group>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref(10)

const percentage2 = ref(0)

const colors = [

  { color: '#f56c6c', percentage: 20 },

  { color: '#e6a23c', percentage: 40 },

  { color: '#5cb87a', percentage: 60 },

  { color: '#1989fa', percentage: 80 },

  { color: '#6f7ad3', percentage: 100 },

]

const increase = () => {

  percentage.value += 10

  if (percentage.value > 100) {

    percentage.value = 100

  }

}

const decrease = () => {

  percentage.value -= 10

  if (percentage.value < 0) {

    percentage.value = 0

  }

}

onMounted(() => {

  setInterval(() => {

    percentage2.value = (percentage2.value % 100) + 10

  }, 500)

})

</script>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

.demo-progress .el-progress--circle {

  margin-right: 15px;

}

</style>
```

## 自定义内容

通过默认插槽添加自定义内容。

```vue
<template>

  <div class="demo-progress">

    <el-progress :percentage="50">

      <el-button text>Content</el-button>

    </el-progress>

    <el-progress

      :text-inside="true"

      :stroke-width="20"

      :percentage="50"

      status="exception"

    >

      <span>Content</span>

    </el-progress>

    <el-progress type="circle" :percentage="100" status="success">

      <el-button type="success" :icon="Check" circle />

    </el-progress>

    <el-progress type="dashboard" :percentage="80">

      <template #default="{ percentage }">

        <span class="percentage-value">{{ percentage }}%</span>

        <span class="percentage-label">Progressing</span>

      </template>

    </el-progress>

  </div>

</template>

<script lang="ts" setup>

import { Check } from '@element-plus/icons-vue'

</script>

<style scoped>

.percentage-value {

  display: block;

  margin-top: 10px;

  font-size: 28px;

}

.percentage-label {

  display: block;

  margin-top: 10px;

  font-size: 12px;

}

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

.demo-progress .el-progress--circle {

  margin-right: 15px;

}

</style>
```

## 动画进度条

使用 `indeterminate` 属性来设置不确定的进度， `duration` 来控制动画持续时间。

```vue
<template>

  <div class="demo-progress">

    <el-progress :percentage="50" :indeterminate="true" />

    <el-progress :percentage="100" :format="format" :indeterminate="true" />

    <el-progress

      :percentage="100"

      status="success"

      :indeterminate="true"

      :duration="5"

    />

    <el-progress

      :percentage="100"

      status="warning"

      :indeterminate="true"

      :duration="1"

    />

    <el-progress :percentage="50" status="exception" :indeterminate="true" />

  </div>

</template>

<script lang="ts" setup>

const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)

</script>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

</style>
```

## 条纹进度条

通过设置 `striped` 属性获取条纹进度条。也可以使用 `striped-flow` 属性来使条纹流动起来。 使用`duration` 属性来控制条纹流动的速度。

```vue
<template>

  <div class="demo-progress">

    <el-progress :percentage="50" :stroke-width="15" striped />

    <el-progress

      :percentage="30"

      :stroke-width="15"

      status="warning"

      striped

      striped-flow

    />

    <el-progress

      :percentage="100"

      :stroke-width="15"

      status="success"

      striped

      striped-flow

      :duration="10"

    />

    <el-progress

      :percentage="percentage"

      :stroke-width="15"

      status="exception"

      striped

      striped-flow

      :duration="duration"

    />

    <el-button-group>

      <el-button :icon="Minus" @click="decrease" />

      <el-button :icon="Plus" @click="increase" />

    </el-button-group>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

import { Minus, Plus } from '@element-plus/icons-vue'

const percentage = ref<number>(70)

const duration = computed(() => Math.floor(percentage.value / 10))

const increase = () => {

  percentage.value += 10

  if (percentage.value > 100) {

    percentage.value = 100

  }

}

const decrease = () => {

  percentage.value -= 10

  if (percentage.value < 0) {

    percentage.value = 0

  }

}

</script>

<style scoped>

.demo-progress .el-progress--line {

  margin-bottom: 15px;

  max-width: 600px;

}

</style>
```

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| percentage required | percentage | `number` | 0 |
| type | 进度条类型 | `enum` | line |
| stroke-width | 进度条的宽度 | `number` | 6 |
| text-inside | 进度条显示文字内置在进度条内（仅 `type` 为 'line' 时可用） | `boolean` | false |
| status | 进度条当前状态 | `enum` | — |
| indeterminate | 是否为动画进度条 | `boolean` | false |
| duration | 控制动画进度条速度和条纹进度条流动速度 | `number` | 3 |
| color | 进度条背景色（会覆盖 `status` 状态颜色） | `string` / `function`** / `Array` | '' |
| width | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | `number` | 126 |
| show-text | 是否显示进度条文字内容 | `boolean` | true |
| stroke-linecap | circle/dashboard 类型路径两端的形状 | `enum` | round |
| format | 指定进度条文字内容 | `Function` | — |
| striped 2.3.4 | 在进度条上增加条纹 | `boolean` | false |
| striped-flow 2.3.4 | 让进度条上的条纹流动起来 | `boolean` | false |

### Slots

| 名称 | 说明 | 类型 |
|---|---|---|
| default | 自定义内容 | `object` |