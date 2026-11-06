window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["table-v2"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 1e3);
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: _unref(data),
        width: 700,
        height: 400,
        fixed: ""
      }, null, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自动调整大小", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "400px" } };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      const _component_el_auto_resizer = _resolveComponent("el-auto-resizer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_auto_resizer, null, {
          default: _withCtx(({ height, width }) => [
            _createVNode(_component_el_table_v2, {
              columns: _unref(columns),
              data: _unref(data),
              width,
              height,
              fixed: ""
            }, null, 8, ["columns", "data", "width", "height"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义单元格渲染器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;

const { ElButton, ElIcon, ElTag, ElTooltip, TableV2FixedDir } = ElementPlus;
const { Timer } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    let id = 0;
    const dataGenerator = () => ({
      id: `random-id-${++id}`,
      name: "Tom",
      date: "2020-10-1"
    });
    const columns = [
      {
        key: "date",
        title: "Date",
        dataKey: "date",
        width: 150,
        fixed: TableV2FixedDir.LEFT,
        cellRenderer: ({ cellData: date }) => /* @__PURE__ */ React.createElement(ElTooltip, { content: dayjs(date).format("YYYY/MM/DD") }, /* @__PURE__ */ React.createElement("span", { class: "flex items-center" }, /* @__PURE__ */ React.createElement(ElIcon, { class: "mr-3" }, /* @__PURE__ */ React.createElement(Timer, null)), dayjs(date).format("YYYY/MM/DD")))
      },
      {
        key: "name",
        title: "Name",
        dataKey: "name",
        width: 150,
        align: "center",
        cellRenderer: ({ cellData: name }) => /* @__PURE__ */ React.createElement(ElTag, null, name)
      },
      {
        key: "operations",
        title: "Operations",
        cellRenderer: () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ElButton, { size: "small" }, "Edit"), /* @__PURE__ */ React.createElement(ElButton, { size: "small", type: "danger" }, "Delete")),
        width: 150,
        align: "center"
      }
    ];
    const data = ref(Array.from({ length: 200 }).map(dataGenerator));
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns,
        data: data.value,
        width: 700,
        height: 400,
        fixed: ""
      }, null, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "带有选择的表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "400px" } };
const { ref, unref } = Vue;
const { ElCheckbox, useLocale } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const { t } = useLocale();
    const SelectionCell = ({
      value,
      intermediate = false,
      ariaLabel,
      onChange
    }) => {
      return /* @__PURE__ */ React.createElement(
        ElCheckbox,
        {
          onChange,
          modelValue: value,
          ariaLabel,
          indeterminate: intermediate
        }
      );
    };
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          checked: false,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    columns.unshift({
      key: "selection",
      width: 50,
      cellRenderer: ({ rowData }) => {
        const onChange = (value) => rowData.checked = value;
        return /* @__PURE__ */ React.createElement(
          SelectionCell,
          {
            value: rowData.checked,
            ariaLabel: t("el.table.selectRowLabel"),
            onChange
          }
        );
      },
      headerCellRenderer: () => {
        const _data = unref(data);
        const onChange = (value) => data.value = _data.map((row) => {
          row.checked = value;
          return row;
        });
        const allSelected = _data.every((row) => row.checked);
        const containsChecked = _data.some((row) => row.checked);
        return /* @__PURE__ */ React.createElement(
          SelectionCell,
          {
            value: allSelected,
            intermediate: containsChecked && !allSelected,
            ariaLabel: t("el.table.selectAllLabel"),
            onChange
          }
        );
      }
    });
    const data = ref(generateData(columns, 200));
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      const _component_el_auto_resizer = _resolveComponent("el-auto-resizer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_auto_resizer, null, {
          default: _withCtx(({ height, width }) => [
            _createVNode(_component_el_table_v2, {
              columns: _unref(columns),
              data: data.value,
              width,
              height,
              fixed: ""
            }, null, 8, ["columns", "data", "width", "height"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可编辑单元格", css: "\n.table-v2-inline-editing-trigger {\n\n  border: 1px transparent dotted;\n\n  padding: 4px;\n}\n.table-v2-inline-editing-trigger:hover {\n\n  border-color: var(--el-color-primary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "400px" } };
const { ref, withKeys } = Vue;
const { ElInput } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const InputCell = ({
      value,
      onChange,
      onBlur,
      onKeydownEnter,
      forwardRef
    }) => {
      return /* @__PURE__ */ React.createElement(
        ElInput,
        {
          ref: forwardRef,
          onInput: onChange,
          onBlur,
          onKeydown: withKeys(onKeydownEnter, ["enter"]),
          modelValue: value
        }
      );
    };
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          editing: false,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    columns[0] = {
      ...columns[0],
      title: "Editable Column",
      cellRenderer: ({ rowData, column }) => {
        const onChange = (value) => {
          rowData[column.dataKey] = value;
        };
        const onEnterEditMode = () => {
          rowData.editing = true;
        };
        const onExitEditMode = () => rowData.editing = false;
        const input = ref();
        const setRef = (el) => {
          input.value = el;
          if (el) {
            el.focus?.();
          }
        };
        return rowData.editing ? /* @__PURE__ */ React.createElement(
          InputCell,
          {
            forwardRef: setRef,
            value: rowData[column.dataKey],
            onChange,
            onBlur: onExitEditMode,
            onKeydownEnter: onExitEditMode
          }
        ) : /* @__PURE__ */ React.createElement("div", { class: "table-v2-inline-editing-trigger", onClick: onEnterEditMode }, rowData[column.dataKey]);
      }
    };
    const data = ref(generateData(columns, 200));
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      const _component_el_auto_resizer = _resolveComponent("el-auto-resizer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_auto_resizer, null, {
          default: _withCtx(({ height, width }) => [
            _createVNode(_component_el_table_v2, {
              columns: _unref(columns),
              data: data.value,
              width,
              height,
              fixed: ""
            }, null, 8, ["columns", "data", "width", "height"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "带状态的表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;

const { ElButton, ElIcon, ElTag, ElTooltip, TableV2FixedDir } = ElementPlus;
const { Timer } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    let id = 0;
    const dataGenerator = () => ({
      id: `random-id-${++id}`,
      name: "Tom",
      date: "2020-10-1"
    });
    const columns = [
      {
        key: "date",
        title: "Date",
        dataKey: "date",
        width: 150,
        fixed: TableV2FixedDir.LEFT,
        cellRenderer: ({ cellData: date }) => /* @__PURE__ */ React.createElement(ElTooltip, { content: dayjs(date).format("YYYY/MM/DD") }, /* @__PURE__ */ React.createElement("span", { class: "flex items-center" }, /* @__PURE__ */ React.createElement(ElIcon, { class: "mr-3" }, /* @__PURE__ */ React.createElement(Timer, null)), dayjs(date).format("YYYY/MM/DD")))
      },
      {
        key: "name",
        title: "Name",
        dataKey: "name",
        width: 150,
        align: "center",
        cellRenderer: ({ cellData: name }) => /* @__PURE__ */ React.createElement(ElTag, null, name)
      },
      {
        key: "operations",
        title: "Operations",
        cellRenderer: () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ElButton, { size: "small" }, "Edit"), /* @__PURE__ */ React.createElement(ElButton, { size: "small", type: "danger" }, "Delete")),
        width: 150,
        align: "center",
        flexGrow: 1
      }
    ];
    const data = ref(Array.from({ length: 200 }).map(dataGenerator));
    const rowClass = ({ rowIndex }) => {
      if (rowIndex % 10 === 5) {
        return "bg-red-100";
      } else if (rowIndex % 10 === 0) {
        return "bg-blue-200";
      }
      return "";
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns,
        data: data.value,
        "row-class": rowClass,
        width: 700,
        height: 400
      }, null, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "表格行的粘性布局", css: "\n.el-el-table-v2__fixed-header-row {\n\n  background-color: var(--el-color-primary-light-5);\n\n  font-weight: bold;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    const rowClass = ({ rowIndex }) => {
      if (rowIndex < 0 || (rowIndex + 1) % 5 === 0) return "sticky-row";
    };
    const stickyIndex = ref(0);
    const fixedData = computed(
      () => data.slice(stickyIndex.value, stickyIndex.value + 1)
    );
    const tableData = computed(() => {
      return data.slice(1);
    });
    const onScroll = ({ scrollTop }) => {
      stickyIndex.value = Math.floor(scrollTop / 250) * 5;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: tableData.value,
        "fixed-data": fixedData.value,
        width: 700,
        height: 400,
        "row-class": rowClass,
        fixed: "",
        onScroll
      }, null, 8, ["columns", "data", "fixed-data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "固定列表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { TableV2FixedDir, TableV2SortOrder } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    let data = generateData(columns, 200);
    columns[0].fixed = true;
    columns[1].fixed = TableV2FixedDir.LEFT;
    columns[9].fixed = TableV2FixedDir.RIGHT;
    for (let i = 0; i < 3; i++) columns[i].sortable = true;
    const sortBy = ref({
      key: "column-0",
      order: TableV2SortOrder.ASC
    });
    const onSort = (_sortBy) => {
      data = data.reverse();
      sortBy.value = _sortBy;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: _unref(data),
        "sort-by": sortBy.value,
        width: 700,
        height: 400,
        fixed: "",
        onColumnSort: onSort
      }, null, 8, ["columns", "data", "sort-by"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "表头分组", css: "\n.el-el-table-v2__header-row .custom-header-cell {\n\n  border-right: 1px solid var(--el-border-color);\n}\n.el-el-table-v2__header-row .custom-header-cell:last-child {\n\n  border-right: none;\n}\n.el-primary-color {\n\n  background-color: var(--el-color-primary);\n\n  color: var(--el-color-white);\n\n  font-size: 14px;\n\n  font-weight: bold;\n}\n.el-primary-color .custom-header-cell {\n\n  padding: 0 4px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { TableV2FixedDir, TableV2Placeholder } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(15);
    const data = generateData(columns, 200);
    const fixedColumns = columns.map((column, columnIndex) => {
      let fixed = void 0;
      if (columnIndex < 3) fixed = TableV2FixedDir.LEFT;
      if (columnIndex > 12) fixed = TableV2FixedDir.RIGHT;
      return { ...column, fixed, width: 100 };
    });
    const CustomizedHeader = ({ cells, columns: columns2, headerIndex }) => {
      if (headerIndex === 2) return cells;
      const groupCells = [];
      let width = 0;
      let idx = 0;
      columns2.forEach((column, columnIndex) => {
        if (column.placeholderSign === TableV2Placeholder)
          groupCells.push(cells[columnIndex]);
        else {
          width += cells[columnIndex].props.column.width;
          idx++;
          const nextColumn = columns2[columnIndex + 1];
          if (columnIndex === columns2.length - 1 || nextColumn.placeholderSign === TableV2Placeholder || idx === (headerIndex === 0 ? 4 : 2)) {
            groupCells.push(
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  class: "flex items-center justify-center custom-header-cell",
                  role: "columnheader",
                  style: {
                    ...cells[columnIndex].props.style,
                    width: `${width}px`
                  }
                },
                "Group width ",
                width
              )
            );
            width = 0;
            idx = 0;
          }
        }
      });
      return groupCells;
    };
    const headerClass = ({
      headerIndex
    }) => {
      if (headerIndex === 1) return "el-primary-color";
      return "";
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        fixed: "",
        columns: _unref(fixedColumns),
        data: _unref(data),
        "header-height": [50, 40, 50],
        "header-class": headerClass,
        width: 700,
        height: 400
      }, {
        header: _withCtx((props) => [
          _createVNode(
            CustomizedHeader,
            _normalizeProps(_guardReactiveProps(props)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "过滤器", css: "\n.el-table-v2__demo-filter {\n\n  border-top: var(--el-border);\n\n  margin: 12px -12px -12px;\n\n  padding: 0 12px;\n\n  display: flex;\n\n  justify-content: space-between;\n}\n.el-table-v2__demo-filter-btn {\n\n  display: flex;\n\n  cursor: pointer;\n\n  padding: 0;\n\n  margin: 0;\n\n  background-color: transparent;\n\n  appearance: none;\n\n  border: none;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed, ref } = Vue;
const { ElButton, ElCheckbox, ElIcon, ElPopover, TableV2FixedDir, useLocale } = ElementPlus;
const { Filter } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = ref(generateData(columns, 200));
    const { t } = useLocale();
    const shouldFilter = ref(false);
    const popoverRef = ref();
    const ariaLabel = computed(() => {
      return t("el.table.filterLabel", { column: columns[0].title });
    });
    const onFilter = () => {
      popoverRef.value.hide();
      if (shouldFilter.value) {
        data.value = generateData(columns, 100, "filtered-");
      } else {
        data.value = generateData(columns, 200);
      }
    };
    const onReset = () => {
      shouldFilter.value = false;
      onFilter();
    };
    const handleShowPopover = () => {
      const button = document.querySelector(".el-table-v2__demo-filter button");
      button?.focus();
    };
    columns[0].headerCellRenderer = (props) => {
      return /* @__PURE__ */ React.createElement("div", { class: "flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { class: "mr-2 text-xs" }, props.column.title), /* @__PURE__ */ React.createElement(
        ElPopover,
        {
          ref: popoverRef,
          trigger: "click",
          width: 200,
          "onAfter-enter": handleShowPopover
        },
        {
          default: () => /* @__PURE__ */ React.createElement("div", { class: "filter-wrapper" }, /* @__PURE__ */ React.createElement("div", { class: "filter-group" }, /* @__PURE__ */ React.createElement(ElCheckbox, { "v-model": shouldFilter.value }, "Filter Text")), /* @__PURE__ */ React.createElement("div", { class: "el-table-v2__demo-filter" }, /* @__PURE__ */ React.createElement(ElButton, { text: true, onClick: onFilter }, "Confirm"), /* @__PURE__ */ React.createElement(ElButton, { text: true, onClick: onReset }, "Reset"))),
          reference: () => /* @__PURE__ */ React.createElement(
            "button",
            {
              type: "button",
              "aria-label": ariaLabel.value,
              class: "el-table-v2__demo-filter-btn"
            },
            /* @__PURE__ */ React.createElement(ElIcon, { size: 14 }, /* @__PURE__ */ React.createElement(Filter, null))
          )
        }
      ));
    };
    const fixedColumns = columns.map((column, columnIndex) => {
      let fixed = void 0;
      if (columnIndex < 2) fixed = TableV2FixedDir.LEFT;
      if (columnIndex > 9) fixed = TableV2FixedDir.RIGHT;
      return { ...column, fixed, width: 100 };
    });
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        fixed: "",
        columns: _unref(fixedColumns),
        data: data.value,
        width: 700,
        height: 400
      }, null, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可排序表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { TableV2SortOrder } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    let data = generateData(columns, 200);
    columns[0].sortable = true;
    const sortState = ref({
      key: "column-0",
      order: TableV2SortOrder.ASC
    });
    const onSort = (sortBy) => {
      console.log(sortBy);
      data = data.reverse();
      sortState.value = sortBy;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: _unref(data),
        "sort-by": sortState.value,
        width: 700,
        height: 400,
        fixed: "",
        onColumnSort: onSort
      }, null, 8, ["columns", "data", "sort-by"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "受控的排序", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { TableV2SortOrder } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = ref(generateData(columns, 200));
    columns[0].sortable = true;
    columns[1].sortable = true;
    const sortState = ref({
      "column-0": TableV2SortOrder.DESC,
      "column-1": TableV2SortOrder.ASC
    });
    const onSort = ({ key, order }) => {
      sortState.value[key] = order;
      data.value = data.value.reverse();
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        "sort-state": sortState.value,
        "onUpdate:sortState": _cache[0] || (_cache[0] = ($event) => sortState.value = $event),
        columns: _unref(columns),
        data: data.value,
        width: 700,
        height: 400,
        fixed: "",
        onColumnSort: onSort
      }, null, 8, ["sort-state", "columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "高亮显示鼠标悬停单元格", css: "\n.hovering-col-0 [data-key='hovering-col-0'],\n\n.hovering-col-1 [data-key='hovering-col-1'],\n\n.hovering-col-2 [data-key='hovering-col-2'],\n\n.hovering-col-3 [data-key='hovering-col-3'],\n\n.hovering-col-4 [data-key='hovering-col-4'],\n\n.hovering-col-5 [data-key='hovering-col-5'],\n\n.hovering-col-6 [data-key='hovering-col-6'],\n\n.hovering-col-7 [data-key='hovering-col-7'],\n\n.hovering-col-8 [data-key='hovering-col-8'],\n\n.hovering-col-9 [data-key='hovering-col-9'],\n\n.hovering-col-10 [data-key='hovering-col-10'] {\n\n  background: var(--el-table-row-hover-bg-color);\n}\n[data-key='hovering-col-0'] {\n\n  font-weight: bold;\n\n  user-select: none;\n\n  pointer-events: none;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, normalizeClass: _normalizeClass, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "400px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    columns.unshift({
      key: "column-n-1",
      width: 50,
      title: "Row No.",
      cellRenderer: ({ rowIndex }) => `${rowIndex + 1}`,
      align: "center"
    });
    const data = generateData(columns, 200);
    const cellProps = ({ columnIndex }) => {
      const key = `hovering-col-${columnIndex}`;
      return {
        ["data-key"]: key,
        onMouseenter: () => {
          kls.value = key;
        },
        onMouseleave: () => {
          kls.value = "";
        }
      };
    };
    const kls = ref("");
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      const _component_el_auto_resizer = _resolveComponent("el-auto-resizer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_auto_resizer, null, {
          default: _withCtx(({ height, width }) => [
            _createVNode(_component_el_table_v2, {
              columns: _unref(columns),
              "cell-props": cellProps,
              class: _normalizeClass(kls.value),
              data: _unref(data),
              width,
              height
            }, null, 8, ["columns", "class", "data", "width", "height"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "横跨列", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { cloneVNode } = Vue;
const colSpanIndex = 1;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "13",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    columns[colSpanIndex].colSpan = ({ rowIndex }) => rowIndex % 4 + 1;
    columns[colSpanIndex].align = "center";
    const Row = ({ rowData, rowIndex, cells, columns: columns2 }) => {
      const colSpan = columns2[colSpanIndex].colSpan({ rowData, rowIndex });
      if (colSpan > 1) {
        let width = Number.parseInt(cells[colSpanIndex].props.style.width);
        for (let i = 1; i < colSpan; i++) {
          width += Number.parseInt(cells[colSpanIndex + i].props.style.width);
          cells[colSpanIndex + i] = null;
        }
        const style = {
          ...cells[colSpanIndex].props.style,
          width: `${width}px`,
          backgroundColor: "var(--el-color-primary-light-3)"
        };
        cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style });
      }
      return cells;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        fixed: "",
        columns: _unref(columns),
        data: _unref(data),
        width: 700,
        height: 400
      }, {
        row: _withCtx((props) => [
          _createVNode(
            Row,
            _normalizeProps(_guardReactiveProps(props)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "纵跨行", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { cloneVNode } = Vue;
const rowSpanIndex = 0;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "14",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    columns[rowSpanIndex].rowSpan = ({ rowIndex }) => rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1;
    const Row = ({ rowData, rowIndex, cells, columns: columns2 }) => {
      const rowSpan = columns2[rowSpanIndex].rowSpan({ rowData, rowIndex });
      if (rowSpan > 1) {
        const cell = cells[rowSpanIndex];
        const style = {
          ...cell.props.style,
          backgroundColor: "var(--el-color-primary-light-3)",
          height: `${rowSpan * 50 - 1}px`,
          alignSelf: "flex-start",
          zIndex: 1
        };
        cells[rowSpanIndex] = cloneVNode(cell, { style });
      }
      return cells;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        fixed: "",
        columns: _unref(columns),
        data: _unref(data),
        width: 700,
        height: 400
      }, {
        row: _withCtx((props) => [
          _createVNode(
            Row,
            _normalizeProps(_guardReactiveProps(props)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "同时跨行和跨列", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { cloneVNode } = Vue;
const colSpanIndex = 1;
const rowSpanIndex = 0;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "15",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    columns[colSpanIndex].colSpan = ({ rowIndex }) => rowIndex % 4 + 1;
    columns[colSpanIndex].align = "center";
    columns[rowSpanIndex].rowSpan = ({ rowIndex }) => rowIndex % 2 === 0 && rowIndex <= data.length - 2 ? 2 : 1;
    const Row = ({ rowData, rowIndex, cells, columns: columns2 }) => {
      const colSpan = columns2[colSpanIndex].colSpan({ rowData, rowIndex });
      if (colSpan > 1) {
        let width = Number.parseInt(cells[colSpanIndex].props.style.width);
        for (let i = 1; i < colSpan; i++) {
          width += Number.parseInt(cells[colSpanIndex + i].props.style.width);
          cells[colSpanIndex + i] = null;
        }
        const style = {
          ...cells[colSpanIndex].props.style,
          width: `${width}px`,
          backgroundColor: "var(--el-color-primary-light-3)"
        };
        cells[colSpanIndex] = cloneVNode(cells[colSpanIndex], { style });
      }
      const rowSpan = columns2[rowSpanIndex].rowSpan({ rowData, rowIndex });
      if (rowSpan > 1) {
        const cell = cells[rowSpanIndex];
        const style = {
          ...cell.props.style,
          backgroundColor: "var(--el-color-danger-light-3)",
          height: `${rowSpan * 50}px`,
          alignSelf: "flex-start",
          zIndex: 1
        };
        cells[rowSpanIndex] = cloneVNode(cell, { style });
      } else {
        const style = cells[rowSpanIndex].props.style;
        cells[rowSpanIndex] = /* @__PURE__ */ React.createElement("div", { style: { ...style, width: `${style.width}px` } });
      }
      return cells;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        fixed: "",
        columns: _unref(columns),
        data: _unref(data),
        width: 700,
        height: 400
      }, {
        row: _withCtx((props) => [
          _createVNode(
            Row,
            _normalizeProps(_guardReactiveProps(props)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "树形数据", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed, ref } = Vue;
const { TableV2FixedDir } = ElementPlus;
const expandColumnKey = "column-0";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "16",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10).map((column, columnIndex) => {
      let fixed;
      if (columnIndex < 2) fixed = TableV2FixedDir.LEFT;
      if (columnIndex > 8) fixed = TableV2FixedDir.RIGHT;
      return { ...column, fixed };
    });
    const data = generateData(columns, 200);
    for (let i = 0; i < 50; i++) {
      data.push(
        {
          ...data[0],
          id: `${data[0].id}-sub-${i}`,
          parentId: data[0].id,
          [expandColumnKey]: `Sub ${i}`
        },
        {
          ...data[2],
          id: `${data[2].id}-sub-${i}`,
          parentId: data[2].id,
          [expandColumnKey]: `Sub ${i}`
        },
        {
          ...data[2],
          id: `${data[2].id}-sub-sub-${i}`,
          parentId: `${data[2].id}-sub-${i}`,
          [expandColumnKey]: `Sub-Sub ${i}`
        }
      );
    }
    function unflatten(data2, rootId = null, dataKey = "id", parentKey = "parentId") {
      const tree = [];
      const childrenMap = {};
      for (const datum of data2) {
        const item = { ...datum };
        const id = item[dataKey];
        const parentId = item[parentKey];
        if (Array.isArray(item.children)) {
          childrenMap[id] = item.children.concat(childrenMap[id] || []);
        } else if (!childrenMap[id]) {
          childrenMap[id] = [];
        }
        item.children = childrenMap[id];
        if (parentId !== void 0 && parentId !== rootId) {
          if (!childrenMap[parentId]) childrenMap[parentId] = [];
          childrenMap[parentId].push(item);
        } else {
          tree.push(item);
        }
      }
      return tree;
    }
    const treeData = computed(() => unflatten(data));
    const expandedRowKeys = ref([]);
    const onRowExpanded = ({ expanded }) => {
      console.log("Expanded:", expanded);
    };
    const onExpandedRowsChange = (expandedKeys) => {
      console.log(expandedKeys);
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        "expanded-row-keys": expandedRowKeys.value,
        "onUpdate:expandedRowKeys": _cache[0] || (_cache[0] = ($event) => expandedRowKeys.value = $event),
        columns: _unref(columns),
        data: treeData.value,
        width: 700,
        "expand-column-key": expandColumnKey,
        height: 400,
        fixed: "",
        onRowExpand: onRowExpanded,
        onExpandedRowsChange
      }, null, 8, ["expanded-row-keys", "columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "动态高度行", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ElButton, ElTag, TableV2FixedDir, TableV2SortOrder } = ElementPlus;
const longText = "Quaerat ipsam necessitatibus eum quibusdam est id voluptatem cumque mollitia.";
const midText = "Corrupti doloremque a quos vero delectus consequatur.";
const shortText = "Eius optio fugiat.";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "17",
  setup(__props) {
    const textList = [shortText, midText, longText];
    let id = 0;
    const dataGenerator = () => ({
      id: `random-${++id}`,
      name: "Tom",
      date: "2016-05-03",
      description: textList[Math.floor(Math.random() * 3)]
    });
    const columns = [
      {
        key: "id",
        title: "Id",
        dataKey: "id",
        width: 150,
        sortable: true,
        fixed: TableV2FixedDir.LEFT
      },
      {
        key: "name",
        title: "Name",
        dataKey: "name",
        width: 150,
        align: "center",
        cellRenderer: ({ cellData: name }) => /* @__PURE__ */ React.createElement(ElTag, null, name)
      },
      {
        key: "description",
        title: "Description",
        dataKey: "description",
        width: 150,
        cellRenderer: ({ cellData: description }) => /* @__PURE__ */ React.createElement("div", { style: "padding: 10px 0;" }, description)
      },
      {
        key: "operations",
        title: "Operations",
        cellRenderer: () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ElButton, { size: "small" }, "Edit"), /* @__PURE__ */ React.createElement(ElButton, { size: "small", type: "danger" }, "Delete")),
        width: 150,
        align: "center"
      }
    ];
    const data = ref(
      Array.from({ length: 200 }).map(dataGenerator).sort((a, b) => a.name > b.name ? 1 : -1)
    );
    const sort = ref({ key: "name", order: TableV2SortOrder.ASC });
    const onColumnSort = (sortBy) => {
      const order = sortBy.order === "asc" ? 1 : -1;
      const dataClone = [...data.value];
      dataClone.sort((a, b) => a[sortBy.key] > b[sortBy.key] ? order : -order);
      sort.value = sortBy;
      data.value = dataClone;
    };
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns,
        data: data.value,
        "sort-by": sort.value,
        "estimated-row-height": 40,
        width: 700,
        height: 400,
        fixed: "",
        onColumnSort
      }, null, 8, ["data", "sort-by"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可展开的附加信息", css: "\n.el-table-v2__row-depth-0 {\n\n  height: 50px;\n}\n.el-table-v2__cell-text {\n\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n\n  white-space: nowrap;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, normalizeProps: _normalizeProps, guardReactiveProps: _guardReactiveProps, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const detailedText = `Velit sed aspernatur tempora. Natus consequatur officiis dicta vel assumenda.

Itaque est temporibus minus quis. Ipsum commodiab porro vel voluptas illum.

Qui quam nulla et dolore autem itaque est.

Id consequatur ipsum ea fuga et odit eligendi impedit.

Maiores officiis occaecati et magnam et sapiente est velit sunt.

Non et tempore temporibus. Excepturi et quos. Minus distinctio aut.

Voluptatem ea excepturi omnis vel. Non aperiam sit sed laboriosam eaque omnis deleniti.

Est molestiae omnis non et nulla repudiandae fuga sit.`;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "18",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = ref(
      generateData(columns, 200).map((data2) => {
        data2.children = [
          {
            id: `${data2.id}-detail-content`,
            detail: detailedText
          }
        ];
        return data2;
      })
    );
    const Row = ({ cells, rowData }) => {
      if (rowData.detail) return /* @__PURE__ */ React.createElement("div", { class: "p-6" }, rowData.detail);
      return cells;
    };
    Row.inheritAttrs = false;
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: data.value,
        "estimated-row-height": 50,
        "expand-column-key": _unref(columns)[0].key,
        width: 700,
        height: 400
      }, {
        row: _withCtx((props) => [
          _createVNode(
            Row,
            _normalizeProps(_guardReactiveProps(props)),
            null,
            16
            /* FULL_PROPS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data", "expand-column-key"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义页脚", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "19",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    return (_ctx, _cache) => {
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: _unref(data),
        "row-height": 40,
        width: 700,
        height: 400,
        "footer-height": 50,
        fixed: ""
      }, {
        footer: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "div",
            {
              class: "flex items-center",
              style: { "justify-content": "center", "height": "100%", "background-color": "var(--el-color-primary-light-7)" }
            },
            " Display a message in the footer ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义空元素渲染器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "flex items-center justify-center h-100%" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "20",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const columns = generateColumns(10);
    return (_ctx, _cache) => {
      const _component_el_empty = _resolveComponent("el-empty");
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: [],
        "row-height": 40,
        width: 700,
        height: 400,
        "footer-height": 50
      }, {
        empty: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_empty)
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "浮动遮罩层", css: "\n.example-showcase .el-table-v2__overlay {\n\n  z-index: 9;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = {
  class: "el-loading-mask",
  style: { "display": "flex", "align-items": "center", "justify-content": "center" }
};
const { Loading: LoadingIcon } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "21",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      return _openBlock(), _createBlock(_component_el_table_v2, {
        columns: _unref(columns),
        data: _unref(data),
        "row-height": 40,
        width: 700,
        height: 400
      }, {
        overlay: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_icon, {
              class: "is-loading",
              color: "var(--el-color-primary)",
              size: 26
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(LoadingIcon))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["columns", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "手动滚动", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "mb-4 flex items-center" };
const _hoisted_2 = { class: "mb-4 flex items-center" };
const _hoisted_3 = { style: { "height": "400px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "22",
  setup(__props) {
    const generateColumns = (length = 10, prefix = "column-", props) => Array.from({ length }).map((_, columnIndex) => ({
      ...props,
      key: `${prefix}${columnIndex}`,
      dataKey: `${prefix}${columnIndex}`,
      title: `Column ${columnIndex}`,
      width: 150
    }));
    const generateData = (columns2, length = 200, prefix = "row-") => Array.from({ length }).map((_, rowIndex) => {
      return columns2.reduce(
        (rowData, column, columnIndex) => {
          rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
          return rowData;
        },
        {
          id: `${prefix}${rowIndex}`,
          parentId: null
        }
      );
    });
    const columns = generateColumns(10);
    const data = generateData(columns, 200);
    const tableRef = ref();
    const scrollDelta = ref(200);
    const scrollRows = ref(10);
    function scrollByPixels() {
      tableRef.value?.scrollToTop(scrollDelta.value);
    }
    function scrollByRows() {
      tableRef.value?.scrollToRow(scrollRows.value);
    }
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table_v2 = _resolveComponent("el-table-v2");
      const _component_el_auto_resizer = _resolveComponent("el-auto-resizer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_form_item, {
              label: "Scroll pixels",
              class: "mr-4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_input, {
                  modelValue: scrollDelta.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => scrollDelta.value = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "Scroll rows" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_input, {
                  modelValue: scrollRows.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => scrollRows.value = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_button, { onClick: scrollByPixels }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  " Scroll by pixels ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, { onClick: scrollByRows }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  " Scroll by rows ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_auto_resizer, null, {
              default: _withCtx(({ height, width }) => [
                _createVNode(_component_el_table_v2, {
                  ref_key: "tableRef",
                  ref: tableRef,
                  columns: _unref(columns),
                  data: _unref(data),
                  width,
                  height,
                  fixed: ""
                }, null, 8, ["columns", "data", "width", "height"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
];
