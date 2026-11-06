# Watermark 水印

在页面上添加文本或图片等水印信息

## 基础用法

最简单的用法。

```vue
<script setup lang="ts">

import { reactive, watch } from 'vue'

import { isDark } from '~/composables/dark'

const font = reactive({

  color: 'rgba(0, 0, 0, .15)',

})

watch(

  isDark,

  () => {

    font.color = isDark.value

      ? 'rgba(255, 255, 255, .15)'

      : 'rgba(0, 0, 0, .15)'

  },

  {

    immediate: true,

  }

)

</script>

<template>

  <el-watermark :font="font">

    <div style="height: 500px" />

  </el-watermark>

</template>
```

## 多行水印

使用 `content`设置一个字符串数组来指定多行文本水印内容

```vue
<script setup lang="ts">

import { reactive, watch } from 'vue'

import { isDark } from '~/composables/dark'

const font = reactive({

  color: 'rgba(0, 0, 0, .15)',

})

watch(

  isDark,

  () => {

    font.color = isDark.value

      ? 'rgba(255, 255, 255, .15)'

      : 'rgba(0, 0, 0, .15)'

  },

  {

    immediate: true,

  }

)

</script>

<template>

  <el-watermark :font="font" :content="['Element+', 'Element Plus']">

    <div style="height: 500px" />

  </el-watermark>

</template>
```

## 图片水印

通过 `image` 指定图像地址。为了确保图像清晰展示而不是被拉伸，请设置宽度和高度，建议使用至少两倍的宽度和高度的图片来保证显示效果。

```vue
<template>

  <el-watermark

    :width="130"

    :height="30"

    image="https://element-plus.org/images/element-plus-logo.svg"

  >

    <div style="height: 500px" />

  </el-watermark>

</template>
```

## 自定义配置

配置自定义参数预览水印效果。

```vue
<script setup lang="ts">

import { reactive, watch } from 'vue'

import { isDark } from '~/composables/dark'

const config = reactive({

  content: 'Element Plus',

  font: {

    fontSize: 16,

    color: 'rgba(0, 0, 0, 0.15)',

  },

  zIndex: -1,

  rotate: -22,

  gap: [100, 100] as [number, number],

  offset: [] as unknown as [number, number],

})

watch(

  isDark,

  (value) => {

    config.font.color = value

      ? 'rgba(255, 255, 255, .15)'

      : 'rgba(0, 0, 0, .15)'

  },

  { immediate: true }

)

</script>

<template>

  <div class="wrapper">

    <el-watermark

      class="watermark"

      :content="config.content"

      :font="config.font"

      :z-index="config.zIndex"

      :rotate="config.rotate"

      :gap="config.gap"

      :offset="config.offset"

    >

      <div class="watermark-container">

        <h1>Element Plus</h1>

        <h2>A Vue 3 based component library for designers and developers</h2>

        <img src="/images/hamburger.png" alt="示例图片" />

      </div>

    </el-watermark>

    <el-form

      class="form"

      :model="config"

      label-position="top"

      label-width="50px"

    >

      <el-form-item label="Content">

        <el-input v-model="config.content" />

      </el-form-item>

      <el-form-item label="Color">

        <el-color-picker v-model="config.font.color" show-alpha />

      </el-form-item>

      <el-form-item label="FontSize">

        <el-slider v-model="config.font.fontSize" />

      </el-form-item>

      <el-form-item label="zIndex">

        <el-slider v-model="config.zIndex" />

      </el-form-item>

      <el-form-item label="Rotate">

        <el-slider v-model="config.rotate" :min="-180" :max="180" />

      </el-form-item>

      <el-form-item label="Gap">

        <el-space>

          <el-input-number v-model="config.gap[0]" controls-position="right" />

          <el-input-number v-model="config.gap[1]" controls-position="right" />

        </el-space>

      </el-form-item>

      <el-form-item label="Offset">

        <el-space>

          <el-input-number

            v-model="config.offset[0]"

            placeholder="offsetLeft"

            controls-position="right"

          />

          <el-input-number

            v-model="config.offset[1]"

            placeholder="offsetTop"

            controls-position="right"

          />

        </el-space>

      </el-form-item>

    </el-form>

  </div>

</template>

<style scoped>

.wrapper {

  display: flex;

}

.watermark {

  display: flex;

  flex: auto;

}

.watermark-container {

  flex: auto;

}

.form {

  width: 330px;

  margin-left: 20px;

  border-left: 1px solid #eee;

  padding-left: 20px;

}

img {

  z-index: 10;

  width: 100%;

  max-width: 300px;

  position: relative;

}

</style>
```

## API

### 属性

| 属性名 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| width | 水印的宽度， `content` 的默认值是它自己的宽度 | `number` | 120 |
| height | 水印的高度， `content` 的默认值是它自己的高度 | `number` | 64 |
| rotate | 水印的旋转角度, 单位 `°` | `number` | -22 |
| z-index | 水印元素的z-index值 | `number` | 9 |
| image | 水印图片，建议使用 2x 或 3x 图像 | `string` | — |
| content | 水印文本内容 | `string`/`array` | Element Plus |
| font | 文字样式 | [Font](#font) | [字体](#font) |
| gap | 水印之间的间距 | `array` | [100, 100] |
| offset | 水印从容器左上角的偏移默认值为 `gap/2` | `array` | [gap[0]/2, gap[1]/2] |

### Font

| 名称 | 详情 | 类型 | 默认 |
|---|---|---|---|
| color | 字体颜色 | `string` | rgba(0,0,0,.15) |
| fontSize | 字体大小 | `number` / `string` | 16 |
| fontWeight | 字重 | `enum` | normal |
| fontFamily | 字体 | `string` | sans-serif |
| fontGap 2.11.5 | 字体间隙 | `number` | 3 |
| fontStyle | 字体样式 | `enum` | normal |
| textAlign | 文本对齐 | `enum` | center |
| textBaseline | 文本基线 | `enum` | hanging |

### Slots

| 名称 | 详情 |
|---|---|
| 默认 | 添加水印的容器 |