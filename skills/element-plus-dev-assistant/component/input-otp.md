# InputOtp 一次性密码输入框 beta

用于输入一次性密码

## 基础用法

```vue
<template>

  <div>

    <el-input-otp v-model="otp" />

    <div style="margin-top: 20px">Value: {{ otp }}</div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp = ref('123')

</script>
```

## 自定义长度

输入字段长度可以通过设置`length`属性来自定义。

```vue
<template>

  <div class="demo-input-otp">

    <el-input-otp v-model="otp1" :length="4" />

    <el-input-otp v-model="otp2" :length="8" />

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp1 = ref('')

const otp2 = ref('')

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

</style>
```

## 展示类型

有三种类型可用：`outlined` （默认）、`filled` 和 `underlined`。

```vue
<template>

  <div class="demo-input-otp">

    <div>

      <p>Outlined (Default)</p>

      <el-input-otp v-model="otp1" type="outlined" />

    </div>

    <div>

      <p>Filled</p>

      <el-input-otp v-model="otp2" type="filled" />

    </div>

    <div>

      <p>Underlined</p>

      <el-input-otp v-model="otp3" type="underlined" />

    </div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp1 = ref('')

const otp2 = ref('')

const otp3 = ref('')

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

p {

  margin-bottom: 8px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

</style>
```

## 调整尺寸

有三个尺寸可用：`large`、`default` 和 `small`。

```vue
<template>

  <div class="demo-input-otp">

    <div>

      <p>Large</p>

      <el-input-otp v-model="otp1" size="large" />

    </div>

    <div>

      <p>Default</p>

      <el-input-otp v-model="otp2" size="default" />

    </div>

    <div>

      <p>Small</p>

      <el-input-otp v-model="otp3" size="small" />

    </div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp1 = ref('')

const otp2 = ref('')

const otp3 = ref('')

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

p {

  margin-bottom: 8px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

</style>
```

## 禁用 & 只读

支持禁用和只读状态。

```vue
<template>

  <div class="demo-input-otp">

    <div class="type-wrap">

      <p>Disabled</p>

      <el-input-otp v-model="otp1" disabled />

      <el-input-otp v-model="otp1" disabled type="filled" />

      <el-input-otp v-model="otp1" disabled type="underlined" />

    </div>

    <div class="type-wrap">

      <p>Readonly</p>

      <el-input-otp v-model="otp2" readonly />

      <el-input-otp v-model="otp2" readonly type="filled" />

      <el-input-otp v-model="otp2" readonly type="underlined" />

    </div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp1 = ref('123')

const otp2 = ref('456')

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

.type-wrap {

  display: flex;

  flex-direction: column;

  gap: 12px;

}

p {

  margin-bottom: 8px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

</style>
```

## 密码模式

使用 `mask` 属性来隐藏输入字符。

```vue
<template>

  <div>

    <el-input-otp v-model="otp" mask />

    <div style="margin-top: 20px">Value: {{ otp }}</div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp = ref('123')

</script>
```

## 分隔符

自定义OTP字段之间的分隔符。

```vue
<template>

  <div class="demo-input-otp">

    <el-input-otp separator="/" />

    <el-input-otp :separator="castSeparator" />

    <el-input-otp>

      <template #separator>•</template>

    </el-input-otp>

  </div>

</template>

<script setup lang="ts">

import { h } from 'vue'

const castSeparator = (index: number) => {

  return index & 1 ? h('span', null, '—') : ''

}

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

</style>
```

## 自定义验证

设置 `validator` 属性以验证输入字符，并使用 `inputmode` 指定键盘类型。

```vue
<template>

  <div class="demo-input-otp">

    <div>

      <p>Numbers only</p>

      <el-input-otp

        v-model="otp1"

        :validator="onlyAllowNumber"

        inputmode="numeric"

      />

    </div>

    <div>

      <p>Letters only</p>

      <el-input-otp v-model="otp2" :validator="onlyAllowLetter" />

    </div>

  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const otp1 = ref('')

const otp2 = ref('')

const onlyAllowNumber = (value: string) => /^\d$/.test(value)

const onlyAllowLetter = (value: string) => /^[a-zA-Z]$/.test(value)

</script>

<style scoped>

.demo-input-otp {

  display: flex;

  flex-direction: column;

  gap: 20px;

}

p {

  margin-bottom: 8px;

  font-size: 14px;

  color: var(--el-text-color-secondary);

}

</style>
```

## 应用开发接口（API）

### 属性

| 插槽名 | 详情 | 事件参数 | 默认值 |
|---|---|---|---|
| model-value / v-model | OTP字段的值。由于数字不能有前导零，`modelValue` 仅在初始化期间允许为数字。 | `string` / `number` | undefined |
| length | OTP字段长度 | `number` | 6 |
| validator | 自定义验证函数 | `Function` | () => true |
| inputmode | 原生 `inputmode` 属性 | `string` | — |
| type | OTP字段类型 | `enum` | 'outlined' |
| size | OTP字段的尺寸 | `enum` | ::: |
| mask | 是否启用密码模式 | `boolean` | — |
| disabled | 是否禁用OTP字段 | `boolean` | undefined |
| separator | OTP字段之间的分隔符 | `string` / `VNode` / `Function` | — |
| validate-event | 是否触发表单验证 | `boolean` | true |
| readonly | 与原生输入中的 `readonly` 相同 | `boolean` | false |
| id | 原生 `id` 属性 | `string` | — |
| aria-label a11y | 原生 `aria-label` 属性 | `string` | — |

### Events

| 方法名 | 说明 | 类型 |
|---|---|---|
| update:modelValue | 值更新时触发 | `Function` |
| change | 当输入框失去焦点后且值发生变化时触发 | `Function` |
| finish | 当所有字段都已填写时触发 | `Function` |
| focus | 输入框获得焦点时触发 | `Function` |
| blur | 输入框失去焦点时触发 | `Function` |

### 插槽

| 方法名 | 详情 | 事件参数 |
|---|---|---|
| separator | OTP 字段之间的分隔符 | `object` |

### 对外暴露的方法

| 名称 | 详情 | 类型 |
|---|---|---|
| inputRefs | HTML 输入框元素数组 | `object` |
| focus | 聚焦OTP输入字段 | `Function` |
| blur | 失焦OTP输入字段 | `Function` |