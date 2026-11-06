# Config Provider 全局配置

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

## i18n 配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

使用两个属性来提供 i18n 相关配置

```vue
<template>

  <div>

    <el-button mb-2 @click="toggle">Switch Language</el-button>

    <br />

    <el-config-provider :locale="locale">

      <el-table mb-1 :data="[]" />

      <el-pagination :total="100" />

    </el-config-provider>

  </div>

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

import zhCn from 'element-plus/es/locale/lang/zh-cn'

import en from 'element-plus/es/locale/lang/en'

const language = ref('zh-cn')

const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {

  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'

}

</script>
```

## 对按钮进行配置

```vue
<template>

  <div>

    <div>

      <el-checkbox v-model="config.autoInsertSpace">

        autoInsertSpace

      </el-checkbox>

      <el-checkbox v-model="config.plain"> plain </el-checkbox>

      <el-checkbox v-model="config.round"> round </el-checkbox>

      <el-checkbox v-model="config.dashed"> dashed </el-checkbox>

      <el-checkbox v-model="config.text"> text </el-checkbox>

      <el-select v-model="config.type" class="ml-5" style="max-width: 150px">

        <el-option

          v-for="type in buttonTypes.filter(Boolean)"

          :key="type"

          :value="type"

        />

      </el-select>

    </div>

    <el-divider />

    <el-config-provider :button="config">

      <el-button>中文</el-button>

    </el-config-provider>

  </div>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'

import { buttonTypes } from 'element-plus'

import type { ButtonConfigContext } from 'element-plus'

const config = reactive<ButtonConfigContext>({

  autoInsertSpace: true,

  type: 'default',

  plain: true,

  round: true,

  text: false,

  dashed: false,

})

</script>
```

## 对链接进行配置2.9.11

```vue
<template>

  <div>

    <div class="flex gap-4">

      <div class="flex flex-col basis-150px gap-1">

        <span>Type:</span>

        <el-select v-model="config.type">

          <el-option v-for="type in linkTypes" :key="type" :value="type" />

        </el-select>

      </div>

      <div class="flex flex-col basis-150px gap-1">

        <span>Underline:</span>

        <el-select v-model="config.underline">

          <el-option

            v-for="type in underlineOptions"

            :key="type"

            :value="type"

          />

        </el-select>

      </div>

    </div>

    <el-divider />

    <el-config-provider :link="config">

      <el-link>Link desu!</el-link>

    </el-config-provider>

  </div>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'

import type { LinkConfigContext } from 'element-plus'

const linkTypes = ['primary', 'success', 'warning', 'info', 'danger', 'default']

const underlineOptions = ['always', 'never', 'hover']

const config = reactive<LinkConfigContext>({

  type: 'success',

  underline: 'always',

})

</script>
```

## 对 Card 进行配置 2.10.5

```vue
<script lang="ts" setup>

import { reactive } from 'vue'

import type { CardConfigContext } from 'element-plus'

const config = reactive<CardConfigContext>({

  shadow: 'always',

})

</script>

<template>

  Shadow:

  <div class="flex flex-col justify-center">

    <el-radio-group v-model="config.shadow">

      <el-radio value="always">always</el-radio>

      <el-radio value="hover">hover</el-radio>

      <el-radio value="never">never</el-radio>

    </el-radio-group>

    <el-divider />

    <el-config-provider :card="config">

      <el-card>Card desu!</el-card>

    </el-config-provider>

  </div>

</template>
```

## 对 Dialog 进行配置 2.10.7

```vue
<script lang="ts" setup>

import { computed, nextTick, ref, shallowReactive } from 'vue'

import type { ButtonInstance, DialogTransition } from 'element-plus'

type GlobalConfig = {

  alignCenter: boolean

  draggable: boolean

  overflow: boolean

  transition?: DialogTransition

}

const config = shallowReactive<GlobalConfig>({

  alignCenter: false,

  draggable: false,

  overflow: false,

})

const visible = ref(false)

const enableTransition = ref(false)

const isObjectTransition = ref(false)

const buttonRef = ref<ButtonInstance>()

const ANIMATION_DURATION = 300

const globalConfig = computed<GlobalConfig>(() => {

  let transition: DialogTransition | undefined

  if (enableTransition.value) {

    if (isObjectTransition.value) {

      transition = {

        css: false,

        onBeforeEnter(el) {

          nextTick(() => {

            if (buttonRef.value) {

              const buttonRect = buttonRef.value.ref!.getBoundingClientRect()

              const dialogEl = el.querySelector('.el-dialog') as HTMLElement

              if (dialogEl) {

                const dialogRect = dialogEl.getBoundingClientRect()

                const offsetX =

                  buttonRect.left +

                  buttonRect.width / 2 -

                  (dialogRect.left + dialogRect.width / 2)

                const offsetY =

                  buttonRect.top +

                  buttonRect.height / 2 -

                  (dialogRect.top + dialogRect.height / 2)

                dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`

                dialogEl.style.opacity = '0'

              }

            }

          })

        },

        onEnter(el, done) {

          nextTick(() => {

            const dialogEl = el.querySelector('.el-dialog') as HTMLElement

            if (dialogEl) {

              // force reflow

              dialogEl.offsetHeight

              dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`

              dialogEl.style.transform = 'translate(0, 0) scale(1)'

              dialogEl.style.opacity = '1'

              // wait for animation to complete, then cleanup inline styles to avoid affecting drag

              setTimeout(() => {

                dialogEl.style.transition = ''

                dialogEl.style.transform = ''

                dialogEl.style.opacity = ''

                done()

              }, ANIMATION_DURATION)

            } else {

              done()

            }

          })

        },

        onLeave(el, done) {

          const dialogEl = el.querySelector('.el-dialog') as HTMLElement

          if (dialogEl) {

            if (buttonRef.value) {

              const buttonRect = buttonRef.value.ref!.getBoundingClientRect()

              const dialogRect = dialogEl.getBoundingClientRect()

              const currentTransform = dialogEl.style.transform

              let dragOffsetX = 0

              let dragOffsetY = 0

              // avoid draggable effect

              if (currentTransform) {

                const translateMatch = currentTransform.match(

                  /translate\(([^,]+),\s*([^)]+)\)/

                )

                if (translateMatch) {

                  dragOffsetX = Number.parseFloat(translateMatch[1])

                  dragOffsetY = Number.parseFloat(translateMatch[2])

                }

              }

              const offsetX =

                buttonRect.left +

                buttonRect.width / 2 -

                (dialogRect.left + dialogRect.width / 2) +

                dragOffsetX

              const offsetY =

                buttonRect.top +

                buttonRect.height / 2 -

                (dialogRect.top + dialogRect.height / 2) +

                dragOffsetY

              dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`

              dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`

              dialogEl.style.opacity = '0'

              // wait for animation to complete, then cleanup inline styles

              setTimeout(() => {

                dialogEl.style.transition = ''

                dialogEl.style.transform = ''

                dialogEl.style.opacity = ''

                done()

              }, ANIMATION_DURATION)

            } else {

              done()

            }

          } else {

            done()

          }

        },

      }

    } else {

      transition = 'dialog-bounce'

    }

  }

  return {

    alignCenter: config.alignCenter,

    draggable: config.draggable,

    overflow: config.overflow,

    transition,

  }

})

</script>

<template>

  <div class="flex flex-col gap-4 justify-center">

    <div class="flex items-center gap-2">

      <el-switch v-model="config.alignCenter" active-text="alignCenter" />

    </div>

    <div class="flex items-center gap-4">

      <el-switch v-model="config.draggable" active-text="draggable" />

      <el-switch

        v-model="config.overflow"

        :disabled="!config.draggable"

        active-text="overflow"

      />

    </div>

    <div class="flex items-center gap-2">

      <el-switch v-model="enableTransition" active-text="enable transition" />

      <el-switch

        v-model="isObjectTransition"

        :disabled="!enableTransition"

        active-text="transition: object"

        inactive-text="transition: string"

      />

    </div>

    <div class="flex items-center gap-2">

      <el-button

        ref="buttonRef"

        type="primary"

        size="small"

        @click="visible = true"

      >

        Open Dialog

      </el-button>

    </div>

    <el-config-provider :dialog="globalConfig">

      <el-dialog v-model="visible" title="Dialog Title" destroy-on-close>

        Dialog Content

      </el-dialog>

    </el-config-provider>

    <div v-if="enableTransition" class="text-xs opacity-70">

      <div v-if="isObjectTransition">

        Using JavaScript controlled animation:

        <code>{{ JSON.stringify(globalConfig.transition) }}</code>

      </div>

      <div v-else>

        Using string transition name:

        <code>{{ globalConfig.transition }}</code>

      </div>

    </div>

  </div>

</template>

<style>

/* Bounce Animation */

.dialog-bounce-enter-active,

.dialog-bounce-leave-active,

.dialog-bounce-enter-active .el-dialog,

.dialog-bounce-leave-active .el-dialog {

  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

}

.dialog-bounce-enter-from,

.dialog-bounce-leave-to {

  opacity: 0;

}

.dialog-bounce-enter-from .el-dialog,

.dialog-bounce-leave-to .el-dialog {

  transform: scale(0.3) translateY(-50px);

  opacity: 0;

}

</style>
```

## 对消息进行配置

```vue
<template>

  <div>

    <el-config-provider :message="config">

      <el-button @click="open">OPEN</el-button>

    </el-config-provider>

  </div>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'

import { ElMessage } from 'element-plus'

const config = reactive({

  max: 3,

  plain: true,

  placement: 'bottom',

})

const open = () => {

  ElMessage('This is a message from bottom.')

}

</script>
```

## 空值配置2.7.0

支持的组件Cascader 级联选择器ColorPicker 2.10.3DatePicker 日期选择器Select 选择器SelectV2 选择器TimePicker 时间选择器TimeSelect 时间选择TreeSelect 树形选择

设置 `empty-values` 来配置组件的默认空值。默认值是 `['', null, undefined]`。如果认为空字符串不是一个空值，可以设置成 `[undefined, null]`。

设置 `value-on-clear` 以设置清空选项的值。组件默认值是 `undefined`。在日期组件中是 `null`。如果想设置成 `undefined`，请使用 `() => undefined`。

```vue
<template>

  <el-config-provider :value-on-clear="null" :empty-values="[undefined, null]">

    <div class="flex flex-wrap gap-4 items-center">

      <el-select

        v-model="value1"

        clearable

        placeholder="Select"

        style="width: 240px"

        @change="handleChange"

      >

        <el-option

          v-for="item in options"

          :key="item.value"

          :label="item.label"

          :value="item.value"

        />

      </el-select>

      <el-select-v2

        v-model="value2"

        clearable

        placeholder="Select"

        style="width: 240px"

        :options="options"

        :value-on-clear="() => undefined"

        @change="handleChange"

      />

    </div>

  </el-config-provider>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { ElMessage } from 'element-plus'

const value1 = ref('')

const value2 = ref('')

const options = [

  {

    value: '',

    label: 'All',

  },

  {

    value: 'Option1',

    label: 'Option1',

  },

  {

    value: 'Option2',

    label: 'Option2',

  },

  {

    value: 'Option3',

    label: 'Option3',

  },

  {

    value: 'Option4',

    label: 'Option4',

  },

  {

    value: 'Option5',

    label: 'Option5',

  },

]

const handleChange = (value) => {

  if ([undefined, null].includes(value)) {

    ElMessage.info(`The clear value is: ${value}`)

  }

}

</script>
```

## 表格配置 2.13.3

```vue
<template>

  <div>

    <div>

      <el-checkbox v-model="config.showOverflowTooltip">

        showOverflowTooltip

      </el-checkbox>

      <el-select

        v-model="config.tooltipEffect"

        class="ml-5"

        style="max-width: 150px"

      >

        <el-option value="dark" label="dark" />

        <el-option value="light" label="light" />

      </el-select>

    </div>

    <el-divider />

    <el-config-provider :table="config">

      <el-table :data="tableData" style="width: 100%">

        <el-table-column type="selection" width="55" />

        <el-table-column label="Date" width="120">

          <template #default="scope">{{ scope.row.date }}</template>

        </el-table-column>

        <el-table-column property="name" label="Name" width="120" />

        <el-table-column

          property="address"

          label="Address (inherited from config-provider)"

          width="300"

        />

        <el-table-column

          property="address"

          label="Address (explicit false)"

          :show-overflow-tooltip="false"

        />

      </el-table>

    </el-config-provider>

  </div>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'

import type { TableConfigContext } from 'element-plus'

const config = reactive<TableConfigContext>({

  showOverflowTooltip: true,

  tooltipEffect: 'dark',

})

interface User {

  date: string

  name: string

  address: string

}

const tableData: User[] = [

  {

    date: '2016-05-04',

    name: 'Aleyna Kutzner',

    address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',

  },

  {

    date: '2016-05-03',

    name: 'Helen Jacobi',

    address: '760 A Street, South Frankfield, Illinois',

  },

  {

    date: '2016-05-02',

    name: 'Brandon Deckert',

    address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',

  },

  {

    date: '2016-05-01',

    name: 'Margie Smith',

    address: '23618 Windsor Drive, West Ricardoview, Idaho',

  },

]

</script>
```

## 实验性功能

在本节中，您可以学习如何使用 Config Provider 来提供实验性功能。现在，我们还没有添加任何实验性功能，但在未来的规划中，我们将添加一些实验性功能。您可以使用此配置来管理这些功能。

## API

### Config Provider Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| locale | 翻译文本对象 | `object`**[](https://github.com/element-plus/element-plus/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5) [languages](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) | [en](https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts) |
| size | 全局组件大小 | `enum` | default |
| zIndex | 全局初始化 zIndex 的值 | `number` | — |
| namespace | 全局组件类名称前缀 (需要配合 [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1) 使用) | `string` | el |
| button | 按钮相关配置，[详见下表](#button-attribute) | `object` | 详见下表 |
| link | 链接相关的配置， [见下表](#link-attribute) | `object` | 详见下表 |
| dialog 2.10.7 | dialog 相关的配置， [见下表](#dialog-attribute) | `object` | 详见下表 |
| message | 消息相关配置， [详见下表](#message-attribute) | `object` | 详见下表 |
| experimental-features | 将要添加的实验阶段的功能，所有功能都是默认设置为 false | `object` | — |
| empty-values 2.7.0 | 输入类组件空值 | `array` | — |
| value-on-clear 2.7.0 | 输入类组件清空值 | `string` / `number` / `boolean` / `Function` | — |
| table 2.13.3 | 表格相关配置， [详见下表](#table-attribute) | `object` | 详见下表 |

### Button Attribute

| 参数 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| type 2.9.11 | 按钮类型，在设置`color`时，后者优先。 | `enum` | — |
| autoInsertSpace | 两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效) | `boolean` | false |
| plain 2.9.11 | 是否为朴素按钮 | `boolean` | false |
| text 2.11.0 | 是否为文字按钮 | `boolean` | false |
| round 2.9.11 | 是否为圆角按钮 | `boolean` | false |
| dashed 2.13.3 | 是否是虚线按钮 | `boolean` | false |

### 链接属性

| 参数 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| type 2.9.11 | 类型 | `enum` | default |
| underline 2.9.11 | 控制下划线是否出现 | `enum` | hover |

### Card Attribute

| 属性 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| shadow 2.10.5 | 设置阴影显示时机 | `enum` | — |

### Dialog 属性

| 属性 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| align-center 2.10.7 | 是否水平垂直对齐对话框 | `boolean` | false |
| draggable 2.10.7 | 为 Dialog 启用可拖拽功能 | `boolean` | false |
| overflow 2.10.7 | 拖动范围可以超出可视区 | `boolean` | false |
| transition 2.10.7 | 对话框动画的自定义过渡配置。可以是一个字符串（过渡名称），也可以是一个包含 Vue 过渡属性的对象。 | `string` / `object` | — |

### Message Attribute

| 属性 | 详情 | 类型 | 默认值 |
|---|---|---|---|
| max | 可同时显示的消息最大数量 | `number` | — |
| grouping 2.8.2 | 合并内容相同的消息，不支持 VNode 类型的消息 | `boolean` | — |
| duration 2.8.2 | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number` | — |
| showClose 2.8.2 | 是否显示关闭按钮 | `boolean` | — |
| offset 2.8.2 | Message 距离窗口顶部的偏移量 | `number` | — |
| plain 2.9.11 | 是否纯色 | `boolean` | — |
| placement 2.11.0 | 消息放置位置 | `enum` | — |

### Table Attribute 2.13.3

| 属性 | 详情 | Type | Default |
|---|---|---|---|
| show-overflow-tooltip | 是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们。这将影响全部列的展示，详请参考[tooltip-options](#table-attributes) | `boolean` / [`object`] | — |
| tooltip-effect | 溢出的 tooltip 的 `effect` | `enum` | dark |
| tooltip-options | 溢出 tooltip 的选项，[参见下述 tooltip 组件](./tooltip.html#attributes) | `object` | `object` |
| tooltip-formatter | 使用 `show-overflow-tooltip` 时自定义 tooltip 内容 | `Function` | — |

### Config Provider Slots

| 名称 | Description | Type |
|---|---|---|
| default | 自定义默认内容 | config: 提供全局配置（从顶部继承） |