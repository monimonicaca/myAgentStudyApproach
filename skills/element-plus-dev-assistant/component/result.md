# Result 结果

用于对用户的操作结果或者异常状态做反馈。

## 基础用法

`primary` 已被添加到2.9.11。

```vue
<template>

  <el-row>

    <el-col :sm="12" :lg="6" :xl="4">

      <el-result

        icon="primary"

        title="Primary Tip"

        sub-title="Please follow the instructions"

      >

        <template #extra>

          <el-button type="primary">Back</el-button>

        </template>

      </el-result>

    </el-col>

    <el-col :sm="12" :lg="6" :xl="4">

      <el-result

        icon="success"

        title="Success Tip"

        sub-title="Please follow the instructions"

      >

        <template #extra>

          <el-button type="primary">Back</el-button>

        </template>

      </el-result>

    </el-col>

    <el-col :sm="12" :lg="6" :xl="4">

      <el-result

        icon="warning"

        title="Warning Tip"

        sub-title="Please follow the instructions"

      >

        <template #extra>

          <el-button type="primary">Back</el-button>

        </template>

      </el-result>

    </el-col>

    <el-col :sm="12" :lg="6" :xl="4">

      <el-result

        icon="error"

        title="Error Tip"

        sub-title="Please follow the instructions"

      >

        <template #extra>

          <el-button type="primary">Back</el-button>

        </template>

      </el-result>

    </el-col>

    <el-col :sm="12" :lg="6" :xl="4">

      <el-result icon="info" title="Info Tip">

        <template #sub-title>

          <p>Using slot as subtitle</p>

        </template>

        <template #extra>

          <el-button type="primary">Back</el-button>

        </template>

      </el-result>

    </el-col>

  </el-row>

</template>

<script setup lang="ts"></script>
```

## 自定义内容

```vue
<template>

  <el-result title="404" sub-title="Sorry, request error">

    <template #icon>

      <el-image

        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"

      />

    </template>

    <template #extra>

      <el-button type="primary">Back</el-button>

    </template>

  </el-result>

</template>
```

## API

### Attributes

| 属性名 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | result 组件的标题 | `string` | '' |
| sub-title | result 组件的副标题 | `string` | '' |
| icon | result 组件的图标类型 | `enum` | info |

### 插槽

| 名称 | 说明 |
|---|---|
| icon | icon 内容 |
| title | result title 的内容 |
| sub-title | sub title 的内容 |
| extra | 内容额外区域的内容 |