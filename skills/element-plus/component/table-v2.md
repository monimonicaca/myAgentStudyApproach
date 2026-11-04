# Virtualized Table 虚拟化表格 beta

在前端开发领域，表格一直都是一个高频出现的组件，尤其是在中后台和数据分析场景。但是，对于 [Table V1](./table)来说，当一屏里超过 1000 条数据记录时，就会出现卡顿等性能问题，体验不是很好。

通过虚拟化表格组件，超大数据渲染将不再是一个头疼的问题。

> **TIP**

> 该组件**仍在测试中**，生产环境使用可能有风险。若您发现了 bug 或问题，请于 [GitHub](https://github.com/element-plus/element-plus/issues) 报告给我们以便修复。同时，有一些 API 并未在此文档中提及，因为部分还没有开发完全，因此我们不在此提及。

> **即使**虚拟化的表格是高效的，但是当数据负载过大时，**网络**和**内存容量**也会成为您应用程序的瓶颈。因此请牢记，虚拟化表格永远不是最完美的解决方案，请考虑数据分页、过滤器等优化方案。

## 基础用法

让我们演示虚拟化表的性能，用10列和1 000行渲染一个基本示例。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :width="700"

    :height="400"

    fixed

  />

</template>

<script lang="ts" setup>

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 1000)

</script>
```

## 自动调整大小

如果不想手动向表格传递 `width` 和 `height` 属性，可以使用 AutoResizer 对表格组件进行封装。这会自动为你更新宽度和高度。

尝试调整您的浏览器大小来看看它是如何工作的。

> **TIP**

> 由于 `AutoResizer` 组件的默认高度是 100%，所以请确保该组件的父元素**拥有固定的高度值**。或者，您可以通过将 `style` 属性传递到 `AutoResizer` 来定义它。

```vue
<template>

  <div style="height: 400px">

    <el-auto-resizer>

      <template #default="{ height, width }">

        <el-table-v2

          :columns="columns"

          :data="data"

          :width="width"

          :height="height"

          fixed

        />

      </template>

    </el-auto-resizer>

  </div>

</template>

<script lang="ts" setup>

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

</script>
```

## 自定义单元格渲染器

当然，您可以根据您的需要呈现表格单元格。这是如何自定义您的单元格的简单例子。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :width="700"

    :height="400"

    fixed

  />

</template>

<script lang="tsx" setup>

import { ref } from 'vue'

import dayjs from 'dayjs'

import {

  ElButton,

  ElIcon,

  ElTag,

  ElTooltip,

  TableV2FixedDir,

} from 'element-plus'

import { Timer } from '@element-plus/icons-vue'

import type { Column } from 'element-plus'

let id = 0

const dataGenerator = () => ({

  id: `random-id-${++id}`,

  name: 'Tom',

  date: '2020-10-1',

})

const columns: Column<any>[] = [

  {

    key: 'date',

    title: 'Date',

    dataKey: 'date',

    width: 150,

    fixed: TableV2FixedDir.LEFT,

    cellRenderer: ({ cellData: date }) => (

      <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>

        {

          <span class="flex items-center">

            <ElIcon class="mr-3">

              <Timer />

            </ElIcon>

            {dayjs(date).format('YYYY/MM/DD')}

          </span>

        }

      </ElTooltip>

    ),

  },

  {

    key: 'name',

    title: 'Name',

    dataKey: 'name',

    width: 150,

    align: 'center',

    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,

  },

  {

    key: 'operations',

    title: 'Operations',

    cellRenderer: () => (

      <>

        <ElButton size="small">Edit</ElButton>

        <ElButton size="small" type="danger">

          Delete

        </ElButton>

      </>

    ),

    width: 150,

    align: 'center',

  },

]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

</script>
```

## 带有选择的表格

使用自定义的单元格渲染来给表格组件添加选择的能力。

```vue
<template>

  <div style="height: 400px">

    <el-auto-resizer>

      <template #default="{ height, width }">

        <el-table-v2

          :columns="columns"

          :data="data"

          :width="width"

          :height="height"

          fixed

        />

      </template>

    </el-auto-resizer>

  </div>

</template>

<script lang="tsx" setup>

import { ref, unref } from 'vue'

import { ElCheckbox, useLocale } from 'element-plus'

import type { FunctionalComponent } from 'vue'

import type { CheckboxValueType, Column } from 'element-plus'

type SelectionCellProps = {

  value: boolean

  intermediate?: boolean

  ariaLabel?: string

  onChange: (value: CheckboxValueType) => void

}

const { t } = useLocale()

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({

  value,

  intermediate = false,

  ariaLabel,

  onChange,

}) => {

  return (

    <ElCheckbox

      onChange={onChange}

      modelValue={value}

      ariaLabel={ariaLabel}

      indeterminate={intermediate}

    />

  )

}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        checked: false,

        parentId: null,

      }

    )

  })

const columns: Column<any>[] = generateColumns(10)

columns.unshift({

  key: 'selection',

  width: 50,

  cellRenderer: ({ rowData }) => {

    const onChange = (value: CheckboxValueType) => (rowData.checked = value)

    return (

      <SelectionCell

        value={rowData.checked}

        ariaLabel={t('el.table.selectRowLabel')}

        onChange={onChange}

      />

    )

  },

  headerCellRenderer: () => {

    const _data = unref(data)

    const onChange = (value: CheckboxValueType) =>

      (data.value = _data.map((row) => {

        row.checked = value

        return row

      }))

    const allSelected = _data.every((row) => row.checked)

    const containsChecked = _data.some((row) => row.checked)

    return (

      <SelectionCell

        value={allSelected}

        intermediate={containsChecked && !allSelected}

        ariaLabel={t('el.table.selectAllLabel')}

        onChange={onChange}

      />

    )

  },

})

const data = ref(generateData(columns, 200))

</script>
```

## 可编辑单元格

类似上面添加筛选框的方法，我们可以用同样的方法实现可编辑单元格。

```vue
<template>

  <div style="height: 400px">

    <el-auto-resizer>

      <template #default="{ height, width }">

        <el-table-v2

          :columns="columns"

          :data="data"

          :width="width"

          :height="height"

          fixed

        />

      </template>

    </el-auto-resizer>

  </div>

</template>

<script lang="tsx" setup>

import { ref, withKeys } from 'vue'

import { ElInput } from 'element-plus'

import type { FunctionalComponent } from 'vue'

import type { Column, InputInstance } from 'element-plus'

type SelectionCellProps = {

  value: string

  intermediate?: boolean

  onChange: (value: string) => void

  onBlur: () => void

  onKeydownEnter: () => void

  forwardRef: (el: InputInstance) => void

}

const InputCell: FunctionalComponent<SelectionCellProps> = ({

  value,

  onChange,

  onBlur,

  onKeydownEnter,

  forwardRef,

}) => {

  return (

    <ElInput

      ref={forwardRef as any}

      onInput={onChange}

      onBlur={onBlur}

      onKeydown={withKeys(onKeydownEnter, ['enter'])}

      modelValue={value}

    />

  )

}

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        editing: false,

        parentId: null,

      }

    )

  })

const columns: Column<any>[] = generateColumns(10)

columns[0] = {

  ...columns[0],

  title: 'Editable Column',

  cellRenderer: ({ rowData, column }) => {

    const onChange = (value: string) => {

      rowData[column.dataKey!] = value

    }

    const onEnterEditMode = () => {

      rowData.editing = true

    }

    const onExitEditMode = () => (rowData.editing = false)

    const input = ref()

    const setRef = (el) => {

      input.value = el

      if (el) {

        el.focus?.()

      }

    }

    return rowData.editing ? (

      <InputCell

        forwardRef={setRef}

        value={rowData[column.dataKey!]}

        onChange={onChange}

        onBlur={onExitEditMode}

        onKeydownEnter={onExitEditMode}

      />

    ) : (

      <div class="table-v2-inline-editing-trigger" onClick={onEnterEditMode}>

        {rowData[column.dataKey!]}

      </div>

    )

  },

}

const data = ref(generateData(columns, 200))

</script>

<style>

.table-v2-inline-editing-trigger {

  border: 1px transparent dotted;

  padding: 4px;

}

.table-v2-inline-editing-trigger:hover {

  border-color: var(--el-color-primary);

}

</style>
```

## 带状态的表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

要自定义行的外观，请使用 `row-class-name` 属性。举个例子，每10行会自动添加 `bg-blue-200` 类名，每5行会添加 `bg-red-100` 类名。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :row-class="rowClass"

    :width="700"

    :height="400"

  />

</template>

<script lang="tsx" setup>

import { ref } from 'vue'

import dayjs from 'dayjs'

import {

  ElButton,

  ElIcon,

  ElTag,

  ElTooltip,

  TableV2FixedDir,

} from 'element-plus'

import { Timer } from '@element-plus/icons-vue'

import type { Column, RowClassNameGetter } from 'element-plus'

let id = 0

const dataGenerator = () => ({

  id: `random-id-${++id}`,

  name: 'Tom',

  date: '2020-10-1',

})

const columns: Column<any>[] = [

  {

    key: 'date',

    title: 'Date',

    dataKey: 'date',

    width: 150,

    fixed: TableV2FixedDir.LEFT,

    cellRenderer: ({ cellData: date }) => (

      <ElTooltip content={dayjs(date).format('YYYY/MM/DD')}>

        {

          <span class="flex items-center">

            <ElIcon class="mr-3">

              <Timer />

            </ElIcon>

            {dayjs(date).format('YYYY/MM/DD')}

          </span>

        }

      </ElTooltip>

    ),

  },

  {

    key: 'name',

    title: 'Name',

    dataKey: 'name',

    width: 150,

    align: 'center',

    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,

  },

  {

    key: 'operations',

    title: 'Operations',

    cellRenderer: () => (

      <>

        <ElButton size="small">Edit</ElButton>

        <ElButton size="small" type="danger">

          Delete

        </ElButton>

      </>

    ),

    width: 150,

    align: 'center',

    flexGrow: 1,

  },

]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {

  if (rowIndex % 10 === 5) {

    return 'bg-red-100'

  } else if (rowIndex % 10 === 0) {

    return 'bg-blue-200'

  }

  return ''

}

</script>
```

## 表格行的粘性布局

您可以简单地使用 `fixed-data` 属性来实现将某些行固定到表格的头部。

您可以根据滚动事件动态设置粘性行，如这个示例所示。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="tableData"

    :fixed-data="fixedData"

    :width="700"

    :height="400"

    :row-class="rowClass"

    fixed

    @scroll="onScroll"

  />

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

const rowClass = ({ rowIndex }) => {

  if (rowIndex < 0 || (rowIndex + 1) % 5 === 0) return 'sticky-row'

}

const stickyIndex = ref(0)

const fixedData = computed(() =>

  data.slice(stickyIndex.value, stickyIndex.value + 1)

)

const tableData = computed(() => {

  return data.slice(1)

})

const onScroll = ({ scrollTop }) => {

  stickyIndex.value = Math.floor(scrollTop / 250) * 5

}

</script>

<style>

.el-el-table-v2__fixed-header-row {

  background-color: var(--el-color-primary-light-5);

  font-weight: bold;

}

</style>
```

## 固定列表格

如果您想要有列粘贴左侧或右侧的某种原因。 您可以通过向表中添加特殊属性来实现这一点。

您可以设置该行的`fixed` 属性为 `true` （代表`FixedDir.LEFT`）、`FixedDir.LEFT` 或 `FixedDir.RIGHT`

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :sort-by="sortBy"

    :width="700"

    :height="400"

    fixed

    @column-sort="onSort"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { TableV2FixedDir, TableV2SortOrder } from 'element-plus'

import type { SortBy } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

let data = generateData(columns, 200)

columns[0].fixed = true

columns[1].fixed = TableV2FixedDir.LEFT

columns[9].fixed = TableV2FixedDir.RIGHT

for (let i = 0; i < 3; i++) columns[i].sortable = true

const sortBy = ref<SortBy>({

  key: 'column-0',

  order: TableV2SortOrder.ASC,

})

const onSort = (_sortBy: SortBy) => {

  data = data.reverse()

  sortBy.value = _sortBy

}

</script>
```

## 表头分组

正如这个示例，通过自定义表头渲染以将表头分组。

> **TIP**

> 在这种情况下，我们使用了 `JSX` 功能，这个功能在playground上不被支持。您可以在本地环境或在线集成开发环境（如 `codesandbox` ）中试用它们。

> 建议您使用 JSX 使用您的表格组件，因为它包含 VNode 操作。

```vue
<template>

  <el-table-v2

    fixed

    :columns="fixedColumns"

    :data="data"

    :header-height="[50, 40, 50]"

    :header-class="headerClass"

    :width="700"

    :height="400"

  >

    <template #header="props">

      <customized-header v-bind="props" />

    </template>

  </el-table-v2>

</template>

<script lang="tsx" setup>

import { TableV2FixedDir, TableV2Placeholder } from 'element-plus'

import type { FunctionalComponent } from 'vue'

import type {

  HeaderClassNameGetter,

  TableV2CustomizedHeaderSlotParam,

} from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(15)

const data = generateData(columns, 200)

const fixedColumns = columns.map((column, columnIndex) => {

  let fixed: TableV2FixedDir | undefined = undefined

  if (columnIndex < 3) fixed = TableV2FixedDir.LEFT

  if (columnIndex > 12) fixed = TableV2FixedDir.RIGHT

  return { ...column, fixed, width: 100 }

})

const CustomizedHeader: FunctionalComponent<

  TableV2CustomizedHeaderSlotParam

> = ({ cells, columns, headerIndex }) => {

  if (headerIndex === 2) return cells

  const groupCells = [] as typeof cells

  let width = 0

  let idx = 0

  columns.forEach((column, columnIndex) => {

    if (column.placeholderSign === TableV2Placeholder)

      groupCells.push(cells[columnIndex])

    else {

      width += cells[columnIndex].props!.column.width

      idx++

      const nextColumn = columns[columnIndex + 1]

      if (

        columnIndex === columns.length - 1 ||

        nextColumn.placeholderSign === TableV2Placeholder ||

        idx === (headerIndex === 0 ? 4 : 2)

      ) {

        groupCells.push(

          <div

            class="flex items-center justify-center custom-header-cell"

            role="columnheader"

            style={{

              ...cells[columnIndex].props!.style,

              width: `${width}px`,

            }}

          >

            Group width {width}

          </div>

        )

        width = 0

        idx = 0

      }

    }

  })

  return groupCells

}

const headerClass = ({

  headerIndex,

}: Parameters<HeaderClassNameGetter<any>>[0]) => {

  if (headerIndex === 1) return 'el-primary-color'

  return ''

}

</script>

<style>

.el-el-table-v2__header-row .custom-header-cell {

  border-right: 1px solid var(--el-border-color);

}

.el-el-table-v2__header-row .custom-header-cell:last-child {

  border-right: none;

}

.el-primary-color {

  background-color: var(--el-color-primary);

  color: var(--el-color-white);

  font-size: 14px;

  font-weight: bold;

}

.el-primary-color .custom-header-cell {

  padding: 0 4px;

}

</style>
```

## 过滤器

虚拟表格提供自定义页眉渲染器以创建自定义标题。然后我们可以利用这些来渲染过滤器。

```vue
<template>

  <el-table-v2

    fixed

    :columns="fixedColumns"

    :data="data"

    :width="700"

    :height="400"

  />

</template>

<script lang="tsx" setup>

import { computed, ref } from 'vue'

import {

  ElButton,

  ElCheckbox,

  ElIcon,

  ElPopover,

  TableV2FixedDir,

  useLocale,

} from 'element-plus'

import { Filter } from '@element-plus/icons-vue'

import type { HeaderCellSlotProps } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = ref(generateData(columns, 200))

const { t } = useLocale()

const shouldFilter = ref(false)

const popoverRef = ref()

const ariaLabel = computed(() => {

  return t('el.table.filterLabel', { column: columns[0].title })

})

const onFilter = () => {

  popoverRef.value.hide()

  if (shouldFilter.value) {

    data.value = generateData(columns, 100, 'filtered-')

  } else {

    data.value = generateData(columns, 200)

  }

}

const onReset = () => {

  shouldFilter.value = false

  onFilter()

}

const handleShowPopover = () => {

  const button = document.querySelector('.el-table-v2__demo-filter button')

  ;(button as HTMLElement)?.focus()

}

columns[0].headerCellRenderer = (props: HeaderCellSlotProps) => {

  return (

    <div class="flex items-center justify-center">

      <span class="mr-2 text-xs">{props.column.title}</span>

      <ElPopover

        ref={popoverRef}

        trigger="click"

        width={200}

        onAfter-enter={handleShowPopover}

      >

        {{

          default: () => (

            <div class="filter-wrapper">

              <div class="filter-group">

                <ElCheckbox v-model={shouldFilter.value}>

                  Filter Text

                </ElCheckbox>

              </div>

              <div class="el-table-v2__demo-filter">

                <ElButton text onClick={onFilter}>

                  Confirm

                </ElButton>

                <ElButton text onClick={onReset}>

                  Reset

                </ElButton>

              </div>

            </div>

          ),

          reference: () => (

            <button

              type="button"

              aria-label={ariaLabel.value}

              class="el-table-v2__demo-filter-btn"

            >

              <ElIcon size={14}>

                <Filter />

              </ElIcon>

            </button>

          ),

        }}

      </ElPopover>

    </div>

  )

}

const fixedColumns = columns.map((column, columnIndex) => {

  let fixed: TableV2FixedDir | undefined = undefined

  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT

  if (columnIndex > 9) fixed = TableV2FixedDir.RIGHT

  return { ...column, fixed, width: 100 }

})

</script>

<style>

.el-table-v2__demo-filter {

  border-top: var(--el-border);

  margin: 12px -12px -12px;

  padding: 0 12px;

  display: flex;

  justify-content: space-between;

}

.el-table-v2__demo-filter-btn {

  display: flex;

  cursor: pointer;

  padding: 0;

  margin: 0;

  background-color: transparent;

  appearance: none;

  border: none;

}

</style>
```

## 可排序表格

您可以使用排序状态来对表格进行排序。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :sort-by="sortState"

    :width="700"

    :height="400"

    fixed

    @column-sort="onSort"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { TableV2SortOrder } from 'element-plus'

import type { SortBy } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

let data = generateData(columns, 200)

columns[0].sortable = true

const sortState = ref<SortBy>({

  key: 'column-0',

  order: TableV2SortOrder.ASC,

})

const onSort = (sortBy: SortBy) => {

  console.log(sortBy)

  data = data.reverse()

  sortState.value = sortBy

}

</script>
```

## 受控的排序

您可以在需要时定义多个可排序的列。请记住，当您在定义了多个可排序的列时， UI 可能会显得有些奇怪，因为用户不知道哪一列被排序。

```vue
<template>

  <el-table-v2

    v-model:sort-state="sortState"

    :columns="columns"

    :data="data"

    :width="700"

    :height="400"

    fixed

    @column-sort="onSort"

  />

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import { TableV2SortOrder } from 'element-plus'

import type { SortBy, SortState } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = ref(generateData(columns, 200))

columns[0].sortable = true

columns[1].sortable = true

const sortState = ref<SortState>({

  'column-0': TableV2SortOrder.DESC,

  'column-1': TableV2SortOrder.ASC,

})

const onSort = ({ key, order }: SortBy) => {

  sortState.value[key] = order

  data.value = data.value.reverse()

}

</script>
```

## 高亮显示鼠标悬停单元格

当处理一个大的列表时，很容易丢失当前行的轨迹和您正在访问的一列。在这种情况下，使用这个功能可能很有帮助。

```vue
<template>

  <div style="height: 400px">

    <el-auto-resizer>

      <template #default="{ height, width }">

        <el-table-v2

          :columns="columns"

          :cell-props="cellProps"

          :class="kls"

          :data="data"

          :width="width"

          :height="height"

        />

      </template>

    </el-auto-resizer>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

columns.unshift({

  key: 'column-n-1',

  width: 50,

  title: 'Row No.',

  cellRenderer: ({ rowIndex }) => `${rowIndex + 1}`,

  align: 'center',

})

const data = generateData(columns, 200)

const cellProps = ({ columnIndex }) => {

  const key = `hovering-col-${columnIndex}`

  return {

    ['data-key']: key,

    onMouseenter: () => {

      kls.value = key

    },

    onMouseleave: () => {

      kls.value = ''

    },

  }

}

const kls = ref<string>('')

</script>

<style>

.hovering-col-0 [data-key='hovering-col-0'],

.hovering-col-1 [data-key='hovering-col-1'],

.hovering-col-2 [data-key='hovering-col-2'],

.hovering-col-3 [data-key='hovering-col-3'],

.hovering-col-4 [data-key='hovering-col-4'],

.hovering-col-5 [data-key='hovering-col-5'],

.hovering-col-6 [data-key='hovering-col-6'],

.hovering-col-7 [data-key='hovering-col-7'],

.hovering-col-8 [data-key='hovering-col-8'],

.hovering-col-9 [data-key='hovering-col-9'],

.hovering-col-10 [data-key='hovering-col-10'] {

  background: var(--el-table-row-hover-bg-color);

}

[data-key='hovering-col-0'] {

  font-weight: bold;

  user-select: none;

  pointer-events: none;

}

</style>
```

## 横跨列

虚拟化表格没有使用内置的 `table` 元素，故 `colspan` 和 `rowspan` 与 [TableV1](./table) 比较略有不同。然而，通过定制的行渲染器，这些功能仍然可以实现。在本节中，我们将演示如何实现这一点。

```vue
<template>

  <el-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">

    <template #row="props">

      <Row v-bind="props" />

    </template>

  </el-table-v2>

</template>

<script lang="ts" setup>

import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

const colSpanIndex = 1

columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1

columns[colSpanIndex].align = 'center'

const Row = ({ rowData, rowIndex, cells, columns }) => {

  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })

  if (colSpan > 1) {

    let width = Number.parseInt(cells[colSpanIndex].props.style.width)

    for (let i = 1; i < colSpan; i++) {

      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)

      cells[colSpanIndex + i] = null

    }

    const style = {

      ...cells[colSpanIndex].props.style,

      width: `${width}px`,

      backgroundColor: 'var(--el-color-primary-light-3)',

    }

    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })

  }

  return cells

}

</script>
```

## 纵跨行

既然我们已经提到了 [Colspan](#colspan)，那跨行（row span）也是没有问题的。它与colspan略有不同，但是基本原理是一样的。

```vue
<template>

  <el-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">

    <template #row="props">

      <Row v-bind="props" />

    </template>

  </el-table-v2>

</template>

<script lang="ts" setup>

import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

const rowSpanIndex = 0

columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>

  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {

  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })

  if (rowSpan > 1) {

    const cell = cells[rowSpanIndex]

    const style = {

      ...cell.props.style,

      backgroundColor: 'var(--el-color-primary-light-3)',

      height: `${rowSpan * 50 - 1}px`,

      alignSelf: 'flex-start',

      zIndex: 1,

    }

    cells[rowSpanIndex] = cloneVNode(cell, { style })

  }

  return cells

}

</script>
```

## 同时跨行和跨列

我们当然可以同时使用横跨列与纵跨行来满足您的业务需求！

```vue
<template>

  <el-table-v2 fixed :columns="columns" :data="data" :width="700" :height="400">

    <template #row="props">

      <Row v-bind="props" />

    </template>

  </el-table-v2>

</template>

<script lang="tsx" setup>

import { cloneVNode } from 'vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

const colSpanIndex = 1

columns[colSpanIndex].colSpan = ({ rowIndex }) => (rowIndex % 4) + 1

columns[colSpanIndex].align = 'center'

const rowSpanIndex = 0

columns[rowSpanIndex].rowSpan = ({ rowIndex }) =>

  rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1

const Row = ({ rowData, rowIndex, cells, columns }) => {

  const colSpan = columns[colSpanIndex].colSpan({ rowData, rowIndex })

  if (colSpan > 1) {

    let width = Number.parseInt(cells[colSpanIndex].props.style.width)

    for (let i = 1; i < colSpan; i++) {

      width += Number.parseInt(cells[colSpanIndex + i].props.style.width)

      cells[colSpanIndex + i] = null

    }

    const style = {

      ...cells[colSpanIndex].props.style,

      width: `${width}px`,

      backgroundColor: 'var(--el-color-primary-light-3)',

    }

    cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style })

  }

  const rowSpan = columns[rowSpanIndex].rowSpan({ rowData, rowIndex })

  if (rowSpan > 1) {

    const cell = cells[rowSpanIndex]

    const style = {

      ...cell.props.style,

      backgroundColor: 'var(--el-color-danger-light-3)',

      height: `${rowSpan * 50}px`,

      alignSelf: 'flex-start',

      zIndex: 1,

    }

    cells[rowSpanIndex] = cloneVNode(cell, { style })

  } else {

    const style = cells[rowSpanIndex].props.style

    // override the cell here for creating a pure node without pollute the style

    cells[rowSpanIndex] = (

      <div style={{ ...style, width: `${style.width}px` }} />

    )

  }

  return cells

}

</script>
```

## 树形数据

虚拟表也可以在树状结构中呈现数据。点击箭头图标，你可以展开或折叠树节点。

```vue
<template>

  <el-table-v2

    v-model:expanded-row-keys="expandedRowKeys"

    :columns="columns"

    :data="treeData"

    :width="700"

    :expand-column-key="expandColumnKey"

    :height="400"

    fixed

    @row-expand="onRowExpanded"

    @expanded-rows-change="onExpandedRowsChange"

  />

</template>

<script lang="ts" setup>

import { computed, ref } from 'vue'

import { TableV2FixedDir } from 'element-plus'

import type { ExpandedRowsChangeHandler, RowExpandHandler } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10).map((column, columnIndex) => {

  let fixed!: TableV2FixedDir

  if (columnIndex < 2) fixed = TableV2FixedDir.LEFT

  if (columnIndex > 8) fixed = TableV2FixedDir.RIGHT

  return { ...column, fixed }

})

const data = generateData(columns, 200)

const expandColumnKey = 'column-0'

// add some sub items

for (let i = 0; i < 50; i++) {

  data.push(

    {

      ...data[0],

      id: `${data[0].id}-sub-${i}`,

      parentId: data[0].id,

      [expandColumnKey]: `Sub ${i}`,

    },

    {

      ...data[2],

      id: `${data[2].id}-sub-${i}`,

      parentId: data[2].id,

      [expandColumnKey]: `Sub ${i}`,

    },

    {

      ...data[2],

      id: `${data[2].id}-sub-sub-${i}`,

      parentId: `${data[2].id}-sub-${i}`,

      [expandColumnKey]: `Sub-Sub ${i}`,

    }

  )

}

function unflatten(

  data: ReturnType<typeof generateData>,

  rootId = null,

  dataKey = 'id',

  parentKey = 'parentId'

) {

  const tree: any[] = []

  const childrenMap = {}

  for (const datum of data) {

    const item = { ...datum }

    const id = item[dataKey]

    const parentId = item[parentKey]

    if (Array.isArray(item.children)) {

      childrenMap[id] = item.children.concat(childrenMap[id] || [])

    } else if (!childrenMap[id]) {

      childrenMap[id] = []

    }

    item.children = childrenMap[id]

    if (parentId !== undefined && parentId !== rootId) {

      if (!childrenMap[parentId]) childrenMap[parentId] = []

      childrenMap[parentId].push(item)

    } else {

      tree.push(item)

    }

  }

  return tree

}

const treeData = computed(() => unflatten(data))

const expandedRowKeys = ref<string[]>([])

const onRowExpanded = ({ expanded }: Parameters<RowExpandHandler>[0]) => {

  console.log('Expanded:', expanded)

}

const onExpandedRowsChange = (

  expandedKeys: Parameters<ExpandedRowsChangeHandler>[0]

) => {

  console.log(expandedKeys)

}

</script>
```

## 动态高度行

虚拟表能够呈现具有动态高度的行数。如果您正在处理数据并不确定内容大小， 此功能对于调整到内容高度的渲染行是理想的。要启用此功能，请传递 `estimated-row-height` 属性。估计高度越接近实际内容，渲染体验就越顺。

> **TIP**

> 每行高度在渲染过程中动态测量。因此，如果您试图显示大量数据， UI **可能会** 抖动。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :sort-by="sort"

    :estimated-row-height="40"

    :width="700"

    :height="400"

    fixed

    @column-sort="onColumnSort"

  />

</template>

<script lang="tsx" setup>

import { ref } from 'vue'

import {

  ElButton,

  ElTag,

  TableV2FixedDir,

  TableV2SortOrder,

} from 'element-plus'

import type { Column, SortBy } from 'element-plus'

const longText =

  'Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.'

const midText = 'Corrupti doloremque a quos vero delectus consequatur.'

const shortText = 'Eius optio fugiat.'

const textList = [shortText, midText, longText]

// generate random number in range 0 to 2

let id = 0

const dataGenerator = () => ({

  id: `random-${++id}`,

  name: 'Tom',

  date: '2016-05-03',

  description: textList[Math.floor(Math.random() * 3)],

})

const columns: Column<any>[] = [

  {

    key: 'id',

    title: 'Id',

    dataKey: 'id',

    width: 150,

    sortable: true,

    fixed: TableV2FixedDir.LEFT,

  },

  {

    key: 'name',

    title: 'Name',

    dataKey: 'name',

    width: 150,

    align: 'center',

    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,

  },

  {

    key: 'description',

    title: 'Description',

    dataKey: 'description',

    width: 150,

    cellRenderer: ({ cellData: description }) => (

      <div style="padding: 10px 0;">{description}</div>

    ),

  },

  {

    key: 'operations',

    title: 'Operations',

    cellRenderer: () => (

      <>

        <ElButton size="small">Edit</ElButton>

        <ElButton size="small" type="danger">

          Delete

        </ElButton>

      </>

    ),

    width: 150,

    align: 'center',

  },

]

const data = ref(

  Array.from({ length: 200 })

    .map(dataGenerator)

    .sort((a, b) => (a.name > b.name ? 1 : -1))

)

const sort = ref<SortBy>({ key: 'name', order: TableV2SortOrder.ASC })

const onColumnSort = (sortBy: SortBy) => {

  const order = sortBy.order === 'asc' ? 1 : -1

  const dataClone = [...data.value]

  dataClone.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))

  sort.value = sortBy

  data.value = dataClone

}

</script>
```

## 可展开的附加信息

使用动态高度渲染，您也可以在表格中显示详细的视图。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :estimated-row-height="50"

    :expand-column-key="columns[0].key"

    :width="700"

    :height="400"

  >

    <template #row="props">

      <Row v-bind="props" />

    </template>

  </el-table-v2>

</template>

<script lang="tsx" setup>

import { ref } from 'vue'

const detailedText = `Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.

Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.

Qui quam nulla et dolore autem itaque est.

Id consequatur ipsum ea fuga et odit eligendi impedit.

Maiores officiis occaecati et magnam et sapiente est velit sunt.

Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.

Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.

Est molestiae omnis non et nulla repudiandae fuga sit.`

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = ref(

  generateData(columns, 200).map((data) => {

    data.children = [

      {

        id: `${data.id}-detail-content`,

        detail: detailedText,

      },

    ]

    return data

  })

)

const Row = ({ cells, rowData }) => {

  if (rowData.detail) return <div class="p-6">{rowData.detail}</div>

  return cells

}

Row.inheritAttrs = false

</script>

<style>

.el-table-v2__row-depth-0 {

  height: 50px;

}

.el-table-v2__cell-text {

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

}

</style>
```

## 自定义页脚

自定义表格 footer， 通常用来展示一些汇总数据和信息。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :row-height="40"

    :width="700"

    :height="400"

    :footer-height="50"

    fixed

  >

    <template #footer

      ><div

        class="flex items-center"

        style="

          justify-content: center;

          height: 100%;

          background-color: var(--el-color-primary-light-7);

        "

      >

        Display a message in the footer

      </div>

    </template>

  </el-table-v2>

</template>

<script lang="ts" setup>

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

</script>
```

## 自定义空元素渲染器

渲染自定义的空元素。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="[]"

    :row-height="40"

    :width="700"

    :height="400"

    :footer-height="50"

  >

    <template #empty>

      <div class="flex items-center justify-center h-100%">

        <el-empty />

      </div>

    </template>

  </el-table-v2>

</template>

<script lang="tsx" setup>

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const columns = generateColumns(10)

</script>
```

## 浮动遮罩层

当您想要显示加载指示器之类的浮动元素，可以通过渲染一个浮动在表格之上的遮罩层来实现。

```vue
<template>

  <el-table-v2

    :columns="columns"

    :data="data"

    :row-height="40"

    :width="700"

    :height="400"

  >

    <template #overlay>

      <div

        class="el-loading-mask"

        style="display: flex; align-items: center; justify-content: center"

      >

        <el-icon class="is-loading" color="var(--el-color-primary)" :size="26">

          <loading-icon />

        </el-icon>

      </div>

    </template>

  </el-table-v2>

</template>

<script lang="ts" setup>

import { Loading as LoadingIcon } from '@element-plus/icons-vue'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

</script>

<style>

.example-showcase .el-table-v2__overlay {

  z-index: 9;

}

</style>
```

## 手动滚动

使用 Table V2 暴露的方法可以进行手动或编程式的滚动到指定的偏移量或者行。

> **TIP**

> `scrollToRow` 的第二个参数代表滚动策略，计算了要滚动的位置，其默认值是 `auto`。如果你想要滚动到某个特定位置，你可以自己定义战略。可用的选项是 `"auto" | "center" | "end" | "start" | "smart"`

> `smart` 和`auto` 之间的区别是， `auto` 是 `smart` 滚动策略的子集。

```vue
<template>

  <div class="mb-4 flex items-center">

    <el-form-item label="Scroll pixels" class="mr-4">

      <el-input v-model="scrollDelta" />

    </el-form-item>

    <el-form-item label="Scroll rows">

      <el-input v-model="scrollRows" />

    </el-form-item>

  </div>

  <div class="mb-4 flex items-center">

    <el-button @click="scrollByPixels"> Scroll by pixels </el-button>

    <el-button @click="scrollByRows"> Scroll by rows </el-button>

  </div>

  <div style="height: 400px">

    <el-auto-resizer>

      <template #default="{ height, width }">

        <el-table-v2

          ref="tableRef"

          :columns="columns"

          :data="data"

          :width="width"

          :height="height"

          fixed

        />

      </template>

    </el-auto-resizer>

  </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'

import type { TableV2Instance } from 'element-plus'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>

  Array.from({ length }).map((_, columnIndex) => ({

    ...props,

    key: `${prefix}${columnIndex}`,

    dataKey: `${prefix}${columnIndex}`,

    title: `Column ${columnIndex}`,

    width: 150,

  }))

const generateData = (

  columns: ReturnType<typeof generateColumns>,

  length = 200,

  prefix = 'row-'

) =>

  Array.from({ length }).map((_, rowIndex) => {

    return columns.reduce(

      (rowData, column, columnIndex) => {

        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`

        return rowData

      },

      {

        id: `${prefix}${rowIndex}`,

        parentId: null,

      }

    )

  })

const columns = generateColumns(10)

const data = generateData(columns, 200)

const tableRef = ref<TableV2Instance>()

const scrollDelta = ref(200)

const scrollRows = ref(10)

function scrollByPixels() {

  tableRef.value?.scrollToTop(scrollDelta.value)

}

function scrollByRows() {

  tableRef.value?.scrollToRow(scrollRows.value)

}

</script>
```

## TableV2 API

### TableV2 Attributes

| 属性名 | 描述说明 | 类型 | 默认值 |
|---|---|---|---|
| cache | 为了更好的渲染效果预先多加载的行数 | `number` | 2 |
| estimated-row-height | 渲染动态的单元格的预估高度 | `number` | — |
| header-class | header 部分的自定义 class 名 | `string` / Function<[HeaderClassGetter](#typings)> | — |
| header-props | header 部分的自定义 props 名 | `object` / Function<[HeaderPropsGetter](#typings)> | — |
| header-cell-props | header cell 部分的自定义 props 名 | `object` / Function<[HeaderCellPropsGetter](#typings)> | — |
| header-height | Header 的高度由`height`设置。如果传入数组，它会使 header row 等于数组长度 | `number`/ `number[]` | 50 |
| footer-height | Footer 部分的高度，当传入值时，这部分将被计算入 table 的高度里 | `number` | 0 |
| row-class | row wrapper 部分的自定义 class 名 | `string` / Function<[RowClassGetter](#typings)> | — |
| row-key | 每行的 key 值，如果不提供，将使用索引 index 代替 | `string` / `Symbol` / `number` | id |
| row-props | row component 部分的自定义 class 名 | `object` / Function<[RowPropsGetter](#typings)> | — |
| row-height | 每行的高度, 用于计算表的总高度 | `number` | 50 |
| row-event-handlers | 当每行添加了一系列事件处理器时触发 | `object`<[RowEventHandlers](#typings)> | — |
| cell-props | 每个单元格 cell 的自定义 props (除了 header cell 以外) | `object` / Function<[CellPropsGetter](#typings)> | — |
| columns | 列 column 的配置数组 | [Column[]](#column-attribute) | — |
| data | 要在表中渲染的数据数组 | [Data[]](#typings) | [] |
| data-getter | 一个自定义方法从数据源获取数据 | Function<[DataGetter<T>](#typings)> | — |
| fixed-data | 渲染行在表格主内容上方和 header 下方区域的数据 | `object`<[Data](#typings)> | — |
| expand-column-key | 列的 key 来标记哪个行可以被展开 | `string` | — |
| expanded-row-keys | 存放行展开状态的 key 的数组，可以和 `v-model` 搭配使用 | [KeyType[]](#typings) | — |
| default-expanded-row-keys | 默认展开的行的 key 的数组, **这个数据不是响应式的 | [KeyType[]](#typings) | — |
| class | 表格的类名称，将应用于表格的全部的三个部分 (左、右、主) | `string` / `array` / `object` | — |
| fixed | 单元格宽度是自适应还是固定 | `boolean` | false |
| width required | 表格的宽度 | `number` | — |
| height required | 表格的高度 | `number` | — |
| max-height | 表格的最大高度 | `number` | — |
| indent-size | 树形表的水平缩进 | `number` | 12 |
| h-scrollbar-size | 配置表格的水平滚动条大小，防止水平和垂直滚动条重叠。 | `number` | 6 |
| v-scrollbar-size | 配置表格的垂直滚动条大小，防止水平和垂直滚动条重叠。 | `number` | 6 |
| scrollbar-always-on | 如果开启，滚动条将一直显示，反之只会在鼠标经过时显示。 | `boolean` | false |
| sort-by | 排序方式 | `object`<[SortBy](#typings)> | {} |
| sort-state | 多个排序 | `object`<[SortState](#typings)> | undefined |

### TableV2 Slots

| 插槽名 | 事件参数 |
|---|---|
| cell | `object`<[CellSlotProps](#typings)> |
| header | `object`<[HeaderSlotProps](#typings)> |
| header-cell | `object`<[HeaderCellSlotProps](#typings)> |
| row | `object`<[RowSlotProps](#typings)> |
| footer | — |
| empty | — |
| overlay | — |

### TableV2 Events

| 事件名 | 描述 | 参数 |
|---|---|---|
| column-sort | 列排序时调用 | `object`<[ColumnSortParam](#typings)> |
| expanded-rows-change | 行展开状态改变时触发 | [KeyType[]](#typings) |
| end-reached | 到达表格末尾时触发。回调包含剩余距离，它通常是滚动条高度。 | `Function` |
| scroll | 表格被用户滚动后触发 | `object`<[ScrollParams](#typings)> |
| rows-rendered | 当行被渲染后触发 | `object`<[RowsRenderedParams](#typings)> |
| row-expand | 点击箭头图标展开/折叠树节点时触发 | `object`<[RowExpandParams](#typings)> |

### TableV2 Exposes

| Method | 描述 | 参数 |
|---|---|---|
| scrollTo | 滚动到给定位置 | `Function` |
| scrollToLeft | 滚动到给定的水平位置 | `Function` |
| scrollToTop | 滚动到给定的垂直位置 | `Function` |
| scrollToRow | 使用给定的滚动策略滚动至指定行 | `Function` |

> **TIP**

> 请注意：这些是 `JavaScript` 对象，所以您 **不能使用** 短横线命名法（kebab-case）来处理这些属性

### Column Attribute

| 属性名 | 描述 | 类型 | 默认值 |
|---|---|---|---|
| align | 表格单元格内容对齐方式 | [Alignment](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L6) | left |
| class | 列的类名 | `string` | — |
| key | 唯一标志 | [KeyType](#typings) | — |
| dataKey | data 的唯一标志符 | [KeyType](#typings) | — |
| fixed | 固定列位置 | `boolean` / [FixedDir](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L11) | false |
| flexGrow | CSS 属性 flex grow, 仅当不是固定表时才生效 | `number` | 0 |
| flexShrink | CSS 属性 flex shrink, 仅当不是固定表时才生效 | `number` | 1 |
| headerClass | 自定义 header 头部类名 | `string` | — |
| hidden | 此列是否不可见 | `boolean` | — |
| style | 自定义列单元格的类名，将会与 gird 单元格合并 | `object` | — |
| sortable | 设置列是否可排序 | `boolean` | — |
| title | Header 头部单元格中的默认文本 | `string` | — |
| maxWidth | 列的最大宽度 | `number` | — |
| minWidth | 列的最小宽度 | `number` | — |
| width required | 列宽度 | `number` | — |
| cellRenderer | 自定义单元格渲染器 | `VueComponent` / (props: [CellRenderProps](#typings)) => VNode | — |
| headerCellRenderer | 自定义头部渲染器 | `VueComponent` / (props: [HeaderRenderProps](#typings)) => VNode | — |

## Typings

显示类型声明ts`type HeaderClassGetter = (param: {

  columns: Column<any>[]

  headerIndex: number

}) => string

type HeaderPropsGetter = (param: {

  columns: Column<any>[]

  headerIndex: number

}) => Record<string, any>

type HeaderCellPropsGetter = (param: {

  columns: Column<any>[]

  column: Column<any>

  columnIndex: number

  headerIndex: number

  style: CSSProperties

}) => Record<string, any>

type RowClassGetter = (param: {

  columns: Column<any>[]

  rowData: any

  rowIndex: number

}) => string

type RowPropsGetter = (param: {

  columns: Column<any>[]

  rowData: any

  rowIndex: number

}) => Record<string, any>

type CellPropsGetter = (param: {

  column: Column<any>

  columns: Column<any>[]

  columnIndex: number

  cellData: any

  rowData: any

  rowIndex: number

}) => void

type DataGetterParams<T> = {

  columns: Column<T>[]

  column: Column<T>

  columnIndex: number

} & RowCommonParams

type DataGetter<T> = (params: DataGetterParams<T>) => T

type CellRenderProps<T> = {

  cellData: T

  column: Column<T>

  columns: Column<T>[]

  columnIndex: number

  rowData: any

  rowIndex: number

}

type HeaderRenderProps<T> = {

  column: Column<T>

  columns: Column<T>[]

  columnIndex: number

  headerIndex: number

}

type ScrollParams = {

  xAxisScrollDir: 'forward' | 'backward'

  scrollLeft: number

  yAxisScrollDir: 'forward' | 'backward'

  scrollTop: number

}

type CellSlotProps<T> = {

  column: Column<T>

  columns: Column<T>[]

  columnIndex: number

  depth: number

  style: CSSProperties

  rowData: any

  rowIndex: number

  isScrolling: boolean

  expandIconProps?:

    | {

        rowData: any

        rowIndex: number

        onExpand: (expand: boolean) => void

      }

    | undefined

}

type HeaderSlotProps = {

  cells: VNode[]

  columns: Column<any>[]

  headerIndex: number

}

type HeaderCellSlotProps = {

  class: string

  columns: Column<any>[]

  column: Column<any>

  columnIndex: number

  headerIndex: number

  style: CSSProperties

  headerCellProps?: any

  sortBy: SortBy

  sortState?: SortState | undefined

  onColumnSorted: (e: MouseEvent) => void

}

type RowCommonParams = {

  rowData: any

  rowIndex: number

}

type RowEventHandlerParams = {

  rowKey: KeyType

  event: Event

} & RowCommonParams

type RowEventHandler = (params: RowEventHandlerParams) => void

type RowEventHandlers = {

  onClick?: RowEventHandler

  onContextmenu?: RowEventHandler

  onDblclick?: RowEventHandler

  onMouseenter?: RowEventHandler

  onMouseleave?: RowEventHandler

}

type RowsRenderedParams = {

  rowCacheStart: number

  rowCacheEnd: number

  rowVisibleStart: number

  rowVisibleEnd: number

}

type RowSlotProps = {

  columns: Column<any>[]

  rowData: any

  columnIndex: number

  rowIndex: number

  data: any

  key: number | string

  isScrolling?: boolean

  style: CSSProperties

}

type RowExpandParams = {

  expanded: boolean

  rowKey: KeyType

} & RowCommonParams

type Data = {

  [key: KeyType]: any

  children?: Array<any>

}

type FixedData = Data

type KeyType = string | number | symbol

type ColumnSortParam<T> = { column: Column<T>; key: KeyType; order: SortOrder }

enum SortOrder {

  ASC = 'asc',

  DESC = 'desc',

}

enum Alignment {

  LEFT = 'left',

  CENTER = 'center',

  RIGHT = 'right',

}

type SortBy = { key: KeyType; Order: SortOrder }

type SortState = Record<KeyType, SortOrder>`

## 常见问题

#### 如何在第一列中渲染带复选框的列表？

由于可以自己定义单元格渲染器，您可以根据示例 [自定义单元格渲染器](#customize-cell-renderer) 代码来渲染 `checkbox`，并自行管理其状态。

#### 为什么虚拟化表提供的功能较 [TableV1](./table) 少？

对于虚拟化表格，我们打算减少一些功能，让用户根据需求自行实现。整合过多的功能会让组件的代码变得难以维护，且对于大多数用户来说，基础功能就已足够。一些主要的功能尚未开发。我们很希望听从您的意见。进入 [Discord](https://discord.com/invite/gXK9XNzW3X) 持续关注.