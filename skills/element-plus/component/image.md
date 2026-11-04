# Image 图片

图片容器，在保留所有原生 img 的特性下，支持懒加载，自定义占位、加载失败等

## 基础用法

可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

```vue
<template>

  <div class="demo-image">

    <div v-for="fit in fits" :key="fit" class="block">

      <span class="demonstration">{{ fit }}</span>

      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />

    </div>

  </div>

</template>

<script lang="ts" setup>

import type { ImageProps } from 'element-plus'

const fits = [

  'fill',

  'contain',

  'cover',

  'none',

  'scale-down',

] as ImageProps['fit'][]

const url =

  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

</script>

<style scoped>

.demo-image .block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  display: inline-block;

  width: 20%;

  min-width: 100px;

  box-sizing: border-box;

  vertical-align: top;

}

.demo-image .block:last-child {

  border-right: none;

}

.demo-image .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

</style>
```

## 占位内容

可通过`slot = placeholder`可自定义占位内容

```vue
<template>

  <div class="demo-image__placeholder">

    <div class="block">

      <span class="demonstration">Default</span>

      <el-image :src="src" />

    </div>

    <div class="block">

      <span class="demonstration">Custom</span>

      <el-image :src="src">

        <template #placeholder>

          <div class="image-slot">Loading<span class="dot">...</span></div>

        </template>

      </el-image>

    </div>

  </div>

</template>

<script lang="ts" setup>

const src =

  'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'

</script>

<style scoped>

.demo-image__placeholder .block {

  padding: 30px 0;

  text-align: center;

  border-right: solid 1px var(--el-border-color);

  display: inline-block;

  width: 49%;

  box-sizing: border-box;

  vertical-align: top;

}

.demo-image__placeholder .demonstration {

  display: block;

  color: var(--el-text-color-secondary);

  font-size: 14px;

  margin-bottom: 20px;

}

.demo-image__placeholder .el-image {

  padding: 0 5px;

  max-width: 300px;

  max-height: 200px;

}

.demo-image__placeholder.image-slot {

  display: flex;

  justify-content: center;

  align-items: center;

  width: 100%;

  height: 100%;

  background: var(--el-fill-color-light);

  color: var(--el-text-color-secondary);

  font-size: 14px;

}

.demo-image__placeholder .dot {

  animation: dot 2s infinite steps(3, start);

  overflow: hidden;

}

</style>
```

## 加载失败

通过 `slot = error` and `slot = viewer-error`自定义图像加载错误时的内容。

```vue
<template>

  <div class="demo-image__error" flex gap-2>

    <el-image />

    <el-image>

      <template #error>

        <div class="image-viewer-slot image-slot">

          <el-icon><icon-picture /></el-icon>

        </div>

      </template>

    </el-image>

    <el-image :src="url" :preview-src-list="srcList" show-progress>

      <template #viewer-error="{ activeIndex, src }">

        <div class="image-slot viewer-error">

          <el-icon><icon-picture /></el-icon>

          <span>

            this is viewer-error slot. current index: {{ activeIndex }}. src:

            {{ src }}

          </span>

        </div>

      </template>

    </el-image>

    <el-button @click="showPreview = true"> preview controlled </el-button>

    <el-image-viewer

      v-if="showPreview"

      show-progress

      :url-list="srcList"

      @close="showPreview = false"

    >

      <template #viewer-error="{ activeIndex, src }">

        <div class="image-slot viewer-error">

          <el-icon><icon-picture /></el-icon>

          <span>

            this is viewer-error slot. current index: {{ activeIndex }}. src:

            {{ src }}

          </span>

        </div>

      </template>

    </el-image-viewer>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

import { Picture as IconPicture } from '@element-plus/icons-vue'

const showPreview = ref(false)

const srcList = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://errorSrc',

]

const url =

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'

</script>

<style scoped>

.demo-image__error .el-image {

  max-width: 300px;

  max-height: 200px;

  width: 100%;

}

.demo-image__error .image-slot {

  display: flex;

  justify-content: center;

  align-items: center;

  flex-direction: column;

  font-size: 30px;

  height: 200px;

  background: #fff;

}

.demo-image__error .image-slot .el-icon {

  font-size: 30px;

}

.image-viewer-slot {

  background: var(--el-fill-color-light);

}

.viewer-error {

  color: #000;

}

</style>
```

## 懒加载

> **TIP**

> 浏览器原生支持的 `loading`属性在 2.2.3版本加入。 您可以使用 `loading="lazy"` 替换之前的`lazy= true`。

> 如果当前浏览器支持原生图片延迟加载，则先使用原生能力，否则将使用滚动监听实现相同效果。

可通过`lazy`开启懒加载功能，当图片滚动到可视范围内才会加载。可通过 `scroll-container` 来设置滚动容器，若未定义，则为最近一个 overflow 值为 auto 或 scroll 的父元素。

```vue
<template>

  <div class="demo-image__lazy">

    <el-image v-for="url in urls" :key="url" :src="url" lazy />

  </div>

</template>

<script lang="ts" setup>

const urls = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',

  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',

  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',

  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',

]

</script>

<style scoped>

.demo-image__lazy {

  height: 400px;

  overflow-y: auto;

}

.demo-image__lazy .el-image {

  display: block;

  min-height: 200px;

  margin-bottom: 10px;

}

.demo-image__lazy .el-image:last-child {

  margin-bottom: 0;

}

</style>
```

## 图片预览

可通过 `previewSrcList` 开启预览大图的功能。你可以通过 `initial-index` 初始化第一张预览图片的位置。默认初始位置为 0。

```vue
<template>

  <div class="demo-image__preview">

    <el-image

      style="width: 100px; height: 100px"

      :src="url"

      :zoom-rate="1.2"

      :max-scale="7"

      :min-scale="0.2"

      :preview-src-list="srcList"

      show-progress

      :initial-index="4"

      fit="cover"

    />

  </div>

</template>

<script lang="ts" setup>

const url =

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'

const srcList = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',

  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',

  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',

  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',

]

</script>

<style scoped>

.demo-image__error .image-slot {

  font-size: 30px;

}

.demo-image__error .image-slot .el-icon {

  font-size: 30px;

}

.demo-image__error .el-image {

  width: 100%;

  height: 200px;

}

</style>
```

## 手动打开预览 2.9.4

```vue
<template>

  <div class="flex gap-12">

    <div class="grid gap-3">

      <el-button @click="handleClick">

        openPreview with showPreview method

      </el-button>

      <el-image

        ref="imageRef"

        style="width: 100px; height: 100px"

        :src="url"

        show-progress

        :preview-src-list="srcList"

        fit="cover"

      />

    </div>

    <div>

      <el-button @click="showPreview = true"> preview controlled </el-button>

      <el-image-viewer

        v-if="showPreview"

        :url-list="srcList"

        show-progress

        :initial-index="4"

        @close="showPreview = false"

      />

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { ImageInstance } from 'element-plus'

const url =

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'

const srcList = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',

  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',

  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',

  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',

]

const imageRef = ref<ImageInstance>()

const showPreview = ref(false)

const handleClick = () => {

  imageRef.value!.showPreview()

}

</script>
```

## 自定义工具栏2.9.4

可通过 `toolbar` 插槽自定义工具栏内容，自版本 2.9.7 起，插槽中添加了 `setActiveItem` 方法，用于根据索引切换图片。

```vue
<template>

  <div class="demo-image__custom-toolbar">

    <el-image

      style="width: 100px; height: 100px"

      :src="url"

      :preview-src-list="srcList"

      fit="cover"

      show-progress

    >

      <template

        #toolbar="{ actions, prev, next, reset, activeIndex, setActiveItem }"

      >

        <el-icon @click="prev"><Back /></el-icon>

        <el-icon @click="next"><Right /></el-icon>

        <el-icon @click="setActiveItem(srcList.length - 1)">

          <DArrowRight />

        </el-icon>

        <el-icon @click="actions('zoomOut')"><ZoomOut /></el-icon>

        <el-icon

          @click="actions('zoomIn', { enableTransition: false, zoomRate: 2 })"

        >

          <ZoomIn />

        </el-icon>

        <el-icon

          @click="

            actions('clockwise', { rotateDeg: 180, enableTransition: false })

          "

        >

          <RefreshRight />

        </el-icon>

        <el-icon @click="actions('anticlockwise')"><RefreshLeft /></el-icon>

        <el-icon @click="reset"><Refresh /></el-icon>

        <el-icon @click="download(activeIndex)"><Download /></el-icon>

      </template>

    </el-image>

  </div>

</template>

<script lang="ts" setup>

import { ElIcon } from 'element-plus'

import {

  Back,

  DArrowRight,

  Download,

  Refresh,

  RefreshLeft,

  RefreshRight,

  Right,

  ZoomIn,

  ZoomOut,

} from '@element-plus/icons-vue'

const url =

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'

const srcList = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',

  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',

  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',

  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',

]

const download = (index: number) => {

  const url = srcList[index]

  const suffix = url.slice(url.lastIndexOf('.'))

  const filename = Date.now() + suffix

  fetch(url)

    .then((response) => response.blob())

    .then((blob) => {

      const blobUrl = URL.createObjectURL(new Blob([blob]))

      const link = document.createElement('a')

      link.href = blobUrl

      link.download = filename

      document.body.appendChild(link)

      link.click()

      URL.revokeObjectURL(blobUrl)

      link.remove()

    })

}

</script>
```

## 自定义进度条 2.9.4

可通过 `show-progress` 控制是否在预览图片时显示进度条。自版本 2.9.8 起，进度条会在使用 `progress` 插槽时显示。

```vue
<template>

  <div class="demo-image__custom-toolbar">

    <el-image

      style="width: 100px; height: 100px"

      :src="url"

      :preview-src-list="srcList"

      fit="cover"

    >

      <template #progress="{ activeIndex, total }">

        <span>{{ activeIndex + 1 + '-' + total }}</span>

      </template>

    </el-image>

  </div>

</template>

<script lang="ts" setup>

const url =

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'

const srcList = [

  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',

  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',

  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',

  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',

  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',

  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',

]

</script>
```

## Image API

### Image Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| src | 图片源地址，同原生属性一致 | `string` | '' |
| fit | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | `enum` | '' |
| hide-on-click-modal | 当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview | `boolean` | false |
| loading 2.2.3 | 浏览器加载图像的策略，和 [浏览器原生](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)能力一致 | `enum` | — |
| lazy | 是否使用懒加载 | `boolean` | false |
| scroll-container | 开启懒加载功能后，监听 scroll 事件的容器默认情况下，开启懒加载功能后，监听 scroll 事件的容器 | `string` / `object` | — |
| alt | 原生属性 `alt` | `string` | — |
| referrerpolicy | 原生属性 [referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy)。 | `string` | — |
| crossorigin | 原生属性 [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) | `enum` | — |
| preview-src-list | 开启图片预览功能 | `array` | [] |
| z-index | 设置图片预览的 z-index | `number` | — |
| initial-index | 初始预览图像索引，小于 `url-list` 的长度 | `number` | 0 |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Image Viewer | `boolean` | true |
| preview-teleported | image-viewer 是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 `true` | `boolean` | false |
| infinite | 是否可以无限循环预览 | `boolean` | true |
| zoom-rate | 图像查看器缩放事件的缩放速率。 | `number` | 1.2 |
| scale 2.11.3 | 预览图像缩放。 | `number` | 1 |
| min-scale 2.4.0 | 图像查看器缩放事件的最小缩放比例 | `number` | 0.2 |
| max-scale 2.4.0 | 图像查看器缩放事件的最大缩放比例 | `number` | 7 |
| show-progress 2.9.4 | 是否在预览图片时显示进度条 | `boolean` | false |

### Image Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| load | 图片加载成功触发 | `Function` |
| error | 图片加载失败触发 | `Function` |
| switch | 切换图像时触发。 | `Function` |
| close | 当点击 X 按钮或者在`hide-on-click-modal`为 true 时点击遮罩层时触发 | `Function` |
| show | 当 Viewer 显示时触发 | `Function` |

### Image Slots

| 插槽名 | 说明 | 类型 |
|---|---|---|
| placeholder | 当图像尚未加载时，自定义的占位符内容 | - |
| error | 自定义图像加载失败的内容 | - |
| viewer | 当图像预览时自定义内容 | - |
| [[image viewer slots](#image-viewer-slots)](#image-viewer-slots) | when you allow big image preview, image viewer slots all can be used, except `default`. | - |

### Image Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| showPreview 2.9.4 | 手动打开大图预览 | `Function` |

## Image Viewer API

### Image Viewer Attributes

| 事件名 | 说明 | Type | 默认值 |
|---|---|---|---|
| url-list | 用于预览的图片链接列表 | `array` | [] |
| z-index | 预览时遮罩层的 z-index | `number` / `string` | — |
| initial-index | 初始预览图像索引，小于 `url-list` 的长度 | `number` | 0 |
| infinite | 是否可以无限循环预览 | `boolean` | true |
| hide-on-click-modal | 是否可以通过点击遮罩层关闭预览 | `boolean` | false |
| teleported | image 自身是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 `true` | `boolean` | false |
| zoom-rate 2.2.27 | 图像查看器缩放事件的缩放速率。 | `number` | 1.2 |
| scale 2.11.3 | 预览图像缩放。 | `number` | 1 |
| min-scale 2.4.0 | 图像查看器缩放事件的最小缩放比例 | `number` | 0.2 |
| max-scale 2.4.0 | 图像查看器缩放事件的最大缩放比例 | `number` | 7 |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Image Viewer | `boolean` | true |
| show-progress 2.9.4 | 是否显示预览图片的进度条内容 | `boolean` | false |

### Image Viewer Events

| Name | 说明 | 类型 |
|---|---|---|
| close | 当点击 X 按钮或者在`hide-on-click-modal`为 true 时点击遮罩层时触发 | `Function` |
| error 2.11.3 | 图片加载失败触发 | `Function` |
| switch | 切换图像时触发。 | `Function` |
| rotate 2.3.13 | 旋转图像时触发。 | `Function` |

### Image Viewer Slots

| 名称 | 详情 | 类型 |
|---|---|---|
| default | 自定义内容 | - |
| progress 2.9.4 | 自定义进度内容 (优先级高于 `show-progress` prop) | `object` |
| toolbar 2.9.4 | 自定义工具栏内容 | `object` |
| viewer-error 2.11.3 | 自定义图像加载失败的内容 | `object` |

### Image Viewer Exposes

| Name | Description | Type |
|---|---|---|
| setActiveItem | 手动切换图片 | `Function` |

## 类型声明

Show declarationsts`type ImageViewerAction = 'zoomIn' | 'zoomOut' | 'clockwise' | 'anticlockwise'

type ImageViewerActionOptions = {

  enableTransition?: boolean

  zoomRate?: number

  rotateDeg?: number

}`