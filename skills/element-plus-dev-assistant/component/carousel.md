# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

结合使用 `el-carousel` 和 `el-carousel-item` 标签就得到了一个走马灯。每一个页面的内容是完全可定制的，把你想要展示的内容放在 `el-carousel-item` 标签内。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。

```vue
<template>

  <div class="block text-center">

    <span class="demonstration">

      Switch when indicator is hovered (default)

    </span>

    <el-carousel height="150px">

      <el-carousel-item v-for="item in 4" :key="item">

        <h3 class="small justify-center" text="2xl">{{ item }}</h3>

      </el-carousel-item>

    </el-carousel>

  </div>

  <div class="block text-center" m="t-4">

    <span class="demonstration">Switch when indicator is clicked</span>

    <el-carousel trigger="click" height="150px">

      <el-carousel-item v-for="item in 4" :key="item">

        <h3 class="small justify-center" text="2xl">{{ item }}</h3>

      </el-carousel-item>

    </el-carousel>

  </div>

</template>

<style scoped>

.demonstration {

  color: var(--el-text-color-secondary);

}

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  line-height: 150px;

  margin: 0;

  text-align: center;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 动态模糊 2.6.0

添加动态模糊以给走马灯注入活力和流畅性。

启用动态模糊增强了走马灯的活力和流畅性。 `motion-blur` 的默认值是 `false`，手动激活此功能即可提供视觉感受上的提升。

```vue
<template>

  <div class="block text-center">

    <span class="demonstration">Motion blur the switch (default)</span>

    <el-carousel height="200px" motion-blur>

      <el-carousel-item v-for="item in 4" :key="item">

        <h3 class="small justify-center" text="2xl">{{ item }}</h3>

      </el-carousel-item>

    </el-carousel>

  </div>

  <p class="text-center demonstration">Vertical effect</p>

  <el-carousel

    height="200px"

    direction="vertical"

    motion-blur

    :autoplay="false"

  >

    <el-carousel-item v-for="item in 4" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

</template>

<style scoped>

.demonstration {

  color: var(--el-text-color-secondary);

}

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  line-height: 200px;

  margin: 0;

  text-align: center;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 指示器

可以将指示器的显示位置设置在容器外部

`indicator-position` 属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为 `outside` 则会显示在外部；设置为 `none` 则不会显示指示器。

```vue
<template>

  <el-carousel indicator-position="outside">

    <el-carousel-item v-for="item in 4" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

</template>

<style scoped>

.el-carousel__item h3 {

  display: flex;

  color: #475669;

  opacity: 0.75;

  line-height: 300px;

  margin: 0;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 切换箭头

可以设置切换箭头的显示时机

`arrow` 属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示。若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。

```vue
<template>

  <el-carousel :interval="5000" arrow="always">

    <el-carousel-item v-for="item in 4" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

</template>

<style scoped>

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  line-height: 300px;

  margin: 0;

  text-align: center;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 自动高度

当 `carousel`的`height` 设置为 `auto`时， `carousel` 的高度将根据子内容的高度自动设置

```vue
<template>

  <div class="block text-center" style="height: 300px">

    <span class="demonstration">each carousel-item has a different height</span>

    <el-carousel height="auto" autoplay>

      <el-carousel-item style="height: 100px">

        <h3 class="small justify-center" text="2xl">height 100px</h3>

      </el-carousel-item>

      <el-carousel-item style="height: 200px">

        <h3 class="small justify-center" text="2xl">height 200px</h3>

      </el-carousel-item>

      <el-carousel-item style="height: 300px">

        <h3 class="small justify-center" text="2xl">height 300px</h3>

      </el-carousel-item>

    </el-carousel>

  </div>

</template>

<style scoped>

.carousel-item {

  color: #475669;

  opacity: 0.75;

  margin: 0;

  text-align: center;

}

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  display: flex;

  align-items: center;

  margin: 0;

  text-align: center;

  height: 100%;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 卡片模式

当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

将 `type` 属性设置为 `card` 即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，卡片模式可以通过直接点击两侧的幻灯片进行切换。

```vue
<template>

  <el-carousel :interval="4000" type="card" height="200px">

    <el-carousel-item v-for="item in 6" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

</template>

<style scoped>

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  line-height: 200px;

  margin: 0;

  text-align: center;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## 垂直排列

默认情况下，方向 `direction` 为 水平 `horizontal`。通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。

```vue
<template>

  <p class="text-center demonstration">normal vertical layout</p>

  <el-carousel height="200px" direction="vertical" :autoplay="false">

    <el-carousel-item v-for="item in 4" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

  <p class="text-center demonstration">card vertical layout</p>

  <el-carousel

    height="400px"

    direction="vertical"

    type="card"

    :autoplay="false"

  >

    <el-carousel-item v-for="item in 4" :key="item">

      <h3 text="2xl" justify="center">{{ item }}</h3>

    </el-carousel-item>

  </el-carousel>

</template>

<style scoped>

.el-carousel__item h3 {

  color: #475669;

  opacity: 0.75;

  line-height: 200px;

  margin: 0;

  text-align: center;

}

.el-carousel__item:nth-child(2n) {

  background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n + 1) {

  background-color: #d3dce6;

}

</style>
```

## Carousel API

### Carousel Attributes

| 属性名 | 说明 | 类型 | Default |
|---|---|---|---|
| height | carousel 的高度 | `string` | '' |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | `number` | 0 |
| trigger | 指示器的触发方式 | `enum` | hover |
| autoplay | 是否自动切换 | `boolean` | true |
| interval | 自动切换的时间间隔，单位为毫秒 | `number` | 3000 |
| indicator-position | 指示器的位置 | `enum` | '' |
| arrow | 切换箭头的显示时机 | `enum` | hover |
| type | carousel 的类型 | `enum` | '' |
| card-scale 2.7.8 | 当 type 为 card时，二级卡的缩放大小 | `number` | 0.83 |
| loop | 是否循环显示 | `boolean` | true |
| direction | 展示的方向 | `enum` | horizontal |
| pause-on-hover | 鼠标悬浮时暂停自动切换 | `boolean` | true |
| motion-blur 2.6.0 | 添加动态模糊以给走马灯注入活力和流畅性。 | `boolean` | false |

### Carousel Events

| 事件名 | 说明 | 类型 |
|---|---|---|
| change | 当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引 | `Function` |

### Carousel Slots

| 插槽名 | 说明 | 子标签 |
|---|---|---|
| default | 自定义默认内容 | Carousel-Item |

### Carousel Exposes

| 方法名 | 说明 | 类型 |
|---|---|---|
| activeIndex 2.7.8 | 当前幻灯片的索引 | `number` |
| setActiveItem | 手动切换幻灯片，传入需要切换的幻灯片的索引，从 0 开始；或相应 `el-carousel-item` 的 `name` 属性值 | `Function` |
| prev | 切换至上一张幻灯片 | `Function` |
| next | 切换至下一张幻灯片 | `Function` |

## Carousel-Item API

### Carousel-Item Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| name | 幻灯片的名字，可用作 `setActiveItem` 的参数 | `string` | '' |
| label | 该幻灯片所对应指示器的文本 | `string` / `number` | '' |

### Carousel-Item Slots

| 插槽名 | 说明 |
|---|---|
| default | 自定义默认内容 |