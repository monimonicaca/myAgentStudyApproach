window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["table"] = [
  { title: "基础表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "带斑马纹表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        stripe: "",
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "带边框表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        border: "",
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "带状态表格", css: "\n.el-table .warning-row {\n\n  --el-table-tr-bg-color: var(--el-color-warning-light-9);\n}\n.el-table .success-row {\n\n  --el-table-tr-bg-color: var(--el-color-success-light-9);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const tableRowClassName = ({
      row,
      rowIndex
    }) => {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" },
        "row-class-name": tableRowClassName
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "显示溢出工具提示的表格", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-04",
        name: "Aleyna Kutzner",
        address: "Lohrbergstr. 86c, S\xFCd Lilli, Saarland"
      },
      {
        date: "2016-05-03",
        name: "Helen Jacobi",
        address: "760 A Street, South Frankfield, Illinois"
      },
      {
        date: "2016-05-02",
        name: "Brandon Deckert",
        address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Th\xFCringen"
      },
      {
        date: "2016-05-01",
        name: "Margie Smith",
        address: "23618 Windsor Drive, West Ricardoview, Idaho"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            type: "selection",
            width: "55"
          }),
          _createCommentVNode(" @vue-generic {User} "),
          _createVNode(_component_el_table_column, {
            label: "Date",
            width: "120"
          }, {
            default: _withCtx((scope) => [
              _createTextVNode(
                _toDisplayString(scope.row.date),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_table_column, {
            property: "name",
            label: "Name",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            property: "address",
            label: "use show-overflow-tooltip",
            width: "240",
            "show-overflow-tooltip": ""
          }),
          _createVNode(_component_el_table_column, {
            property: "address",
            label: "address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "固定表头", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        height: "250",
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "固定列", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const handleClick = () => {
      console.log("click");
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            fixed: "",
            prop: "date",
            label: "Date",
            width: "150"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "state",
            label: "State",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "city",
            label: "City",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address",
            width: "600"
          }),
          _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            fixed: "right",
            label: "Operations",
            "min-width": "120"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                link: "",
                type: "primary",
                size: "small",
                onClick: handleClick
              }, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    " Detail ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                link: "",
                type: "primary",
                size: "small"
              }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Edit",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "固定列和表头", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" },
        height: "250"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            fixed: "",
            prop: "date",
            label: "Date",
            width: "150"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "state",
            label: "State",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "city",
            label: "City",
            width: "320"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address",
            width: "600"
          }),
          _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "流体高度", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode, withModifiers: _withModifiers, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;

var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const now = /* @__PURE__ */ new Date();
    const tableData = ref([
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }
    ]);
    const deleteRow = (index) => {
      tableData.value.splice(index, 1);
    };
    const onAddItem = () => {
      now.setDate(now.getDate() + 1);
      tableData.value.push({
        date: dayjs(now).format("YYYY-MM-DD"),
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_table, {
            data: tableData.value,
            style: { "width": "100%" },
            "max-height": "250"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                fixed: "",
                prop: "date",
                label: "Date",
                width: "150"
              }),
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name",
                width: "120"
              }),
              _createVNode(_component_el_table_column, {
                prop: "state",
                label: "State",
                width: "120"
              }),
              _createVNode(_component_el_table_column, {
                prop: "city",
                label: "City",
                width: "120"
              }),
              _createVNode(_component_el_table_column, {
                prop: "address",
                label: "Address",
                width: "600"
              }),
              _createVNode(_component_el_table_column, {
                prop: "zip",
                label: "Zip",
                width: "120"
              }),
              _createCommentVNode(" @vue-generic {UnwrapRef<typeof tableData>[number]} "),
              _createVNode(_component_el_table_column, {
                fixed: "right",
                label: "Operations",
                "min-width": "120"
              }, {
                default: _withCtx((scope) => [
                  _createVNode(_component_el_button, {
                    link: "",
                    type: "primary",
                    size: "small",
                    onClick: _withModifiers(($event) => deleteRow(scope.$index), ["prevent"])
                  }, {
                    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                      _createTextVNode(
                        " Remove ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["data"]),
          _createVNode(_component_el_button, {
            class: "mt-4",
            style: { "width": "100%" },
            onClick: onAddItem
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                " Add Item ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "多级表头", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "150"
          }),
          _createVNode(_component_el_table_column, { label: "Delivery Info" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name",
                width: "120"
              }),
              _createVNode(_component_el_table_column, { label: "Address Info" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_table_column, {
                    prop: "state",
                    label: "State",
                    width: "120"
                  }),
                  _createVNode(_component_el_table_column, {
                    prop: "city",
                    label: "City",
                    width: "120"
                  }),
                  _createVNode(_component_el_table_column, {
                    prop: "address",
                    label: "Address"
                  }),
                  _createVNode(_component_el_table_column, {
                    prop: "zip",
                    label: "Zip",
                    width: "120"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "固定表头", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      },
      {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" },
        height: "250"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            fixed: "",
            prop: "date",
            label: "Date",
            width: "150"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "state",
            label: "State",
            width: "120"
          }),
          _createVNode(_component_el_table_column, {
            prop: "city",
            label: "City",
            width: "320"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address",
            width: "600"
          }),
          _createVNode(_component_el_table_column, {
            prop: "zip",
            label: "Zip"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "单选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const currentRow = ref();
    const singleTableRef = ref();
    const setCurrent = (row) => {
      singleTableRef.value.setCurrentRow(row);
    };
    const handleCurrentChange = (val) => {
      currentRow.value = val;
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(
            _component_el_table,
            {
              ref_key: "singleTableRef",
              ref: singleTableRef,
              data: tableData,
              "highlight-current-row": "",
              style: { "width": "100%" },
              onCurrentChange: handleCurrentChange
            },
            {
              default: _withCtx(() => [
                _createVNode(_component_el_table_column, {
                  type: "index",
                  width: "50"
                }),
                _createVNode(_component_el_table_column, {
                  property: "date",
                  label: "Date",
                  width: "120"
                }),
                _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "120"
                }),
                _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address"
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              onClick: _cache[0] || (_cache[0] = ($event) => setCurrent(tableData[1]))
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  "Select second row",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => setCurrent())
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  "Clear selection",
                  -1
                  /* CACHED */
                )
              ])]),
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
  { title: "多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const multipleTableRef = ref();
    const multipleSelection = ref([]);
    const selectable = (row) => ![1, 2].includes(row.id);
    const toggleSelection = (rows, ignoreSelectable) => {
      if (rows) {
        rows.forEach((row) => {
          multipleTableRef.value.toggleRowSelection(
            row,
            void 0,
            ignoreSelectable
          );
        });
      } else {
        multipleTableRef.value.clearSelection();
      }
    };
    const handleSelectionChange = (val) => {
      multipleSelection.value = val;
    };
    const tableData = [
      {
        id: 1,
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 2,
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 3,
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 4,
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 5,
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 6,
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 7,
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(
            _component_el_table,
            {
              ref_key: "multipleTableRef",
              ref: multipleTableRef,
              data: tableData,
              "row-key": "id",
              style: { "width": "100%" },
              onSelectionChange: handleSelectionChange
            },
            {
              default: _withCtx(() => [
                _createVNode(_component_el_table_column, {
                  type: "selection",
                  selectable,
                  width: "55"
                }),
                _createCommentVNode(" @vue-generic {User} "),
                _createVNode(_component_el_table_column, {
                  label: "Date",
                  width: "120"
                }, {
                  default: _withCtx((scope) => [
                    _createTextVNode(
                      _toDisplayString(scope.row.date),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "120"
                }),
                _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address"
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              onClick: _cache[0] || (_cache[0] = ($event) => toggleSelection([tableData[1], tableData[2]]))
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  " Toggle selection status of second and third rows ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              onClick: _cache[1] || (_cache[1] = ($event) => toggleSelection([tableData[1], tableData[2]], false))
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  " Toggle selection status based on selectable ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = ($event) => toggleSelection())
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createTextVNode(
                  "Clear selection",
                  -1
                  /* CACHED */
                )
              ])]),
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
  { title: "排序", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "13",
  setup(__props) {
    const formatter = (row, column) => {
      return row.address;
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        "default-sort": { prop: "date", order: "descending" },
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            sortable: "",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address",
            formatter
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "筛选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "14",
  setup(__props) {
    const tableRef = ref();
    const resetDateFilter = () => {
      tableRef.value.clearFilter(["date"]);
    };
    const clearFilter = () => {
      tableRef.value.clearFilter();
    };
    const formatter = (row, column) => {
      return row.address;
    };
    const filterTag = (value, row) => {
      return row.tag === value;
    };
    const filterHandler = (value, row, column) => {
      const property = column["property"];
      return row[property] === value;
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
        tag: "Home"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
        tag: "Office"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
        tag: "Home"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
        tag: "Office"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, { onClick: resetDateFilter }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "reset date filter",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { onClick: clearFilter }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "reset all filters",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(
            _component_el_table,
            {
              ref_key: "tableRef",
              ref: tableRef,
              "row-key": "date",
              data: tableData,
              style: { "width": "100%" }
            },
            {
              default: _withCtx(() => [
                _createVNode(_component_el_table_column, {
                  prop: "date",
                  label: "Date",
                  sortable: "",
                  width: "180",
                  "column-key": "date",
                  filters: [
                    { text: "2016-05-01", value: "2016-05-01" },
                    { text: "2016-05-02", value: "2016-05-02" },
                    { text: "2016-05-03", value: "2016-05-03" },
                    { text: "2016-05-04", value: "2016-05-04" }
                  ],
                  "filter-method": filterHandler
                }),
                _createVNode(_component_el_table_column, {
                  prop: "name",
                  label: "Name",
                  width: "180"
                }),
                _createVNode(_component_el_table_column, {
                  prop: "address",
                  label: "Address",
                  formatter
                }),
                _createCommentVNode(" @vue-generic {User} "),
                _createVNode(_component_el_table_column, {
                  prop: "tag",
                  label: "Tag",
                  width: "100",
                  filters: [
                    { text: "Home", value: "Home" },
                    { text: "Office", value: "Office" }
                  ],
                  "filter-method": filterTag,
                  "filter-placement": "bottom-end"
                }, {
                  default: _withCtx((scope) => [
                    _createVNode(_component_el_tag, {
                      type: scope.row.tag === "Home" ? "primary" : "success",
                      "disable-transitions": ""
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(scope.row.tag),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["type"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          )
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义列模板", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createCommentVNode: _createCommentVNode, unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = { style: { "margin-left": "10px" } };
const { Timer } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "15",
  setup(__props) {
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_popover = _resolveComponent("el-popover");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createCommentVNode(" @vue-generic {User} "),
          _createVNode(_component_el_table_column, {
            label: "Date",
            width: "180"
          }, {
            default: _withCtx((scope) => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_icon, null, {
                  default: _withCtx(() => [
                    _createVNode(_unref(Timer))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode(
                  "span",
                  _hoisted_2,
                  _toDisplayString(scope.row.date),
                  1
                  /* TEXT */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          _createCommentVNode(" @vue-generic {User} "),
          _createVNode(_component_el_table_column, {
            label: "Name",
            width: "180"
          }, {
            default: _withCtx((scope) => [
              _createVNode(
                _component_el_popover,
                {
                  effect: "light",
                  trigger: "hover",
                  placement: "top",
                  width: "auto"
                },
                {
                  default: _withCtx(() => [
                    _createElementVNode(
                      "div",
                      null,
                      "name: " + _toDisplayString(scope.row.name),
                      1
                      /* TEXT */
                    ),
                    _createElementVNode(
                      "div",
                      null,
                      "address: " + _toDisplayString(scope.row.address),
                      1
                      /* TEXT */
                    )
                  ]),
                  reference: _withCtx(() => [
                    _createVNode(
                      _component_el_tag,
                      null,
                      {
                        default: _withCtx(() => [
                          _createTextVNode(
                            _toDisplayString(scope.row.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          _createCommentVNode(" @vue-generic {User} "),
          _createVNode(_component_el_table_column, { label: "Operations" }, {
            default: _withCtx((scope) => [
              _createVNode(_component_el_button, {
                size: "small",
                onClick: ($event) => handleEdit(scope.$index, scope.row)
              }, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    " Edit ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              _createVNode(_component_el_button, {
                size: "small",
                type: "danger",
                onClick: ($event) => handleDelete(scope.$index, scope.row)
              }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    " Delete ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义表头", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "16",
  setup(__props) {
    const search = ref("");
    const filterTableData = computed(
      () => tableData.filter(
        (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "John",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Morgan",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Jessy",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: filterTableData.value,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            label: "Date",
            prop: "date"
          }),
          _createVNode(_component_el_table_column, {
            label: "Name",
            prop: "name"
          }),
          _createCommentVNode(" @vue-generic {User} "),
          _createVNode(_component_el_table_column, { align: "right" }, {
            header: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: search.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                size: "small",
                placeholder: "Type to search"
              }, null, 8, ["modelValue"])
            ]),
            default: _withCtx((scope) => [
              _createVNode(_component_el_button, {
                size: "small",
                onClick: ($event) => handleEdit(scope.$index, scope.row)
              }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    " Edit ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"]),
              _createVNode(_component_el_button, {
                size: "small",
                type: "danger",
                onClick: ($event) => handleDelete(scope.$index, scope.row)
              }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    " Delete ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "展开行", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { m: "4" };
const _hoisted_2 = { m: "t-0 b-2" };
const _hoisted_3 = { m: "t-0 b-2" };
const _hoisted_4 = { m: "t-0 b-2" };
const _hoisted_5 = { m: "t-0 b-2" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "17",
  setup(__props) {
    const parentBorder = ref(false);
    const childBorder = ref(false);
    const preserveExpanded = ref(false);
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-08",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-06",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      },
      {
        date: "2016-05-07",
        name: "Tom",
        state: "California",
        city: "San Francisco",
        address: "3650 21st St, San Francisco",
        zip: "CA 94114",
        family: [
          {
            name: "Jerry",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Spike",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          },
          {
            name: "Tyke",
            state: "California",
            city: "San Francisco",
            address: "3650 21st St, San Francisco",
            zip: "CA 94114"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[4] || (_cache[4] = _createTextVNode(
            " switch parent border: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: parentBorder.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => parentBorder.value = $event)
          }, null, 8, ["modelValue"]),
          _cache[5] || (_cache[5] = _createTextVNode(
            " switch child border: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: childBorder.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => childBorder.value = $event)
          }, null, 8, ["modelValue"]),
          _cache[6] || (_cache[6] = _createTextVNode(
            " preserve expanded: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: preserveExpanded.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => preserveExpanded.value = $event)
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_table, {
            data: tableData,
            border: parentBorder.value,
            "preserve-expanded-content": preserveExpanded.value,
            style: { "width": "100%" }
          }, {
            default: _withCtx(() => [
              _createCommentVNode(" @vue-generic {typeof tableData[number]} "),
              _createVNode(_component_el_table_column, { type: "expand" }, {
                default: _withCtx((props) => [
                  _createElementVNode("div", _hoisted_1, [
                    _createElementVNode(
                      "p",
                      _hoisted_2,
                      "State: " + _toDisplayString(props.row.state),
                      1
                      /* TEXT */
                    ),
                    _createElementVNode(
                      "p",
                      _hoisted_3,
                      "City: " + _toDisplayString(props.row.city),
                      1
                      /* TEXT */
                    ),
                    _createElementVNode(
                      "p",
                      _hoisted_4,
                      "Address: " + _toDisplayString(props.row.address),
                      1
                      /* TEXT */
                    ),
                    _createElementVNode(
                      "p",
                      _hoisted_5,
                      "Zip: " + _toDisplayString(props.row.zip),
                      1
                      /* TEXT */
                    ),
                    _cache[3] || (_cache[3] = _createElementVNode(
                      "h3",
                      null,
                      "Family",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_table, {
                      data: props.row.family,
                      border: childBorder.value
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_el_table_column, {
                          label: "Name",
                          prop: "name"
                        }),
                        _createVNode(_component_el_table_column, {
                          label: "State",
                          prop: "state"
                        }),
                        _createVNode(_component_el_table_column, {
                          label: "City",
                          prop: "city"
                        }),
                        _createVNode(_component_el_table_column, {
                          label: "Address",
                          prop: "address"
                        }),
                        _createVNode(_component_el_table_column, {
                          label: "Zip",
                          prop: "zip"
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["data", "border"])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_table_column, {
                label: "Date",
                prop: "date"
              }),
              _createVNode(_component_el_table_column, {
                label: "Name",
                prop: "name"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["border", "preserve-expanded-content"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "树形数据与懒加载", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "18",
  setup(__props) {
    const load = (row, treeNode, resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          }
        ]);
      }, 1e3);
    };
    const tableData = [
      {
        id: 1,
        date: "2016-05-02",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 2,
        date: "2016-05-04",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 3,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles",
        children: [
          {
            id: 31,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          }
        ]
      },
      {
        id: 4,
        date: "2016-05-03",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    const tableData1 = [
      {
        id: 1,
        date: "2016-05-02",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 2,
        date: "2016-05-04",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 3,
        date: "2016-05-01",
        name: "wangxiaohu",
        hasChildren: true,
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 4,
        date: "2016-05-03",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_table, {
          data: tableData,
          style: { "width": "100%", "margin-bottom": "20px" },
          "row-key": "id",
          border: "",
          "default-expand-all": ""
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table_column, {
              prop: "date",
              label: "Date",
              sortable: ""
            }),
            _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name",
              sortable: ""
            }),
            _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address",
              sortable: ""
            })
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_table, {
          data: tableData1,
          style: { "width": "100%" },
          "row-key": "id",
          border: "",
          lazy: "",
          load,
          "tree-props": { children: "children", hasChildren: "hasChildren" }
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table_column, {
              prop: "date",
              label: "Date"
            }),
            _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name"
            }),
            _createVNode(_component_el_table_column, {
              prop: "address",
              label: "Address"
            })
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
  { title: "可选择的树形数据2.8.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "19",
  setup(__props) {
    const treeProps = reactive({
      checkStrictly: false
    });
    const selectable = (row) => ![1, 31].includes(row.id);
    const tableData = [
      {
        id: 1,
        date: "2016-05-02",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 2,
        date: "2016-05-04",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        id: 3,
        date: "2016-05-01",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles",
        children: [
          {
            id: 31,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            id: 33,
            date: "2016-05-01",
            name: "wangxiaohu",
            address: "No. 189, Grove St, Los Angeles"
          }
        ]
      },
      {
        id: 4,
        date: "2016-05-03",
        name: "wangxiaohu",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: treeProps.checkStrictly,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => treeProps.checkStrictly = $event),
            class: "mb-2"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, {
                value: true,
                label: "true"
              }),
              _createVNode(_component_el_radio_button, {
                value: false,
                label: "false"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_table, {
            data: tableData,
            "tree-props": treeProps,
            "row-key": "id",
            "default-expand-all": ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                type: "selection",
                width: "55",
                selectable
              }),
              _createVNode(_component_el_table_column, {
                prop: "date",
                label: "Date"
              }),
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name"
              }),
              _createVNode(_component_el_table_column, {
                prop: "address",
                label: "Address"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["tree-props"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "表尾合计行", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { h } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "20",
  setup(__props) {
    const getSummaries = (param) => {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = h("div", { style: { textDecoration: "underline" } }, [
            "Total Cost"
          ]);
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => Number.isNaN(value))) {
          sums[index] = `$ ${values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0)}`;
        } else {
          sums[index] = "N/A";
        }
      });
      return sums;
    };
    const tableData = [
      {
        id: "12987122",
        name: "Tom",
        amount1: "234",
        amount2: "3.2",
        amount3: 10
      },
      {
        id: "12987123",
        name: "Tom",
        amount1: "165",
        amount2: "4.43",
        amount3: 12
      },
      {
        id: "12987124",
        name: "Tom",
        amount1: "324",
        amount2: "1.9",
        amount3: 9
      },
      {
        id: "12987125",
        name: "Tom",
        amount1: "621",
        amount2: "2.2",
        amount3: 17
      },
      {
        id: "12987126",
        name: "Tom",
        amount1: "539",
        amount2: "4.1",
        amount3: 15
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_table, {
            data: tableData,
            border: "",
            "show-summary": "",
            style: { "width": "100%" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                prop: "id",
                label: "ID",
                width: "180"
              }),
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount1",
                sortable: "",
                label: "Amount 1"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount2",
                sortable: "",
                label: "Amount 2"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount3",
                sortable: "",
                label: "Amount 3"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_table, {
            data: tableData,
            border: "",
            height: "200",
            "summary-method": getSummaries,
            "show-summary": "",
            style: { "width": "100%", "margin-top": "20px" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                prop: "id",
                label: "ID",
                width: "180"
              }),
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount1",
                label: "Cost 1 ($)"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount2",
                label: "Cost 2 ($)"
              }),
              _createVNode(_component_el_table_column, {
                prop: "amount3",
                label: "Cost 3 ($)"
              })
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "合并行或列", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "21",
  setup(__props) {
    const arraySpanMethod = ({
      row,
      column,
      rowIndex,
      columnIndex
    }) => {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    };
    const objectSpanMethod = ({
      row,
      column,
      rowIndex,
      columnIndex
    }) => {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    };
    const tableData = [
      {
        id: "12987122",
        name: "Tom",
        amount1: "234",
        amount2: "3.2",
        amount3: 10
      },
      {
        id: "12987123",
        name: "Tom",
        amount1: "165",
        amount2: "4.43",
        amount3: 12
      },
      {
        id: "12987124",
        name: "Tom",
        amount1: "324",
        amount2: "1.9",
        amount3: 9
      },
      {
        id: "12987125",
        name: "Tom",
        amount1: "621",
        amount2: "2.2",
        amount3: 17
      },
      {
        id: "12987126",
        name: "Tom",
        amount1: "539",
        amount2: "4.1",
        amount3: 15
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_table, {
          data: tableData,
          "span-method": arraySpanMethod,
          border: "",
          style: { "width": "100%" }
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }),
            _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount1",
              sortable: "",
              label: "Amount 1"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount2",
              sortable: "",
              label: "Amount 2"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount3",
              sortable: "",
              label: "Amount 3"
            })
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_table, {
          data: tableData,
          "span-method": objectSpanMethod,
          border: "",
          style: { "width": "100%", "margin-top": "20px" }
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table_column, {
              prop: "id",
              label: "ID",
              width: "180"
            }),
            _createVNode(_component_el_table_column, {
              prop: "name",
              label: "Name"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount1",
              label: "Amount 1"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount2",
              label: "Amount 2"
            }),
            _createVNode(_component_el_table_column, {
              prop: "amount3",
              label: "Amount 3"
            })
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
  { title: "自定义索引", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "22",
  setup(__props) {
    const indexMethod = (index) => {
      return index * 2;
    };
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            type: "index",
            index: indexMethod
          }),
          _createVNode(_component_el_table_column, {
            prop: "date",
            label: "Date",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "name",
            label: "Name",
            width: "180"
          }),
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "Address"
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "表格布局", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "23",
  setup(__props) {
    const tableLayout = ref("fixed");
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: tableLayout.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tableLayout.value = $event),
            class: "mb-2"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: "fixed" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "fixed",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "auto" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "auto",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_table, {
            data: tableData,
            "table-layout": tableLayout.value
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table_column, {
                prop: "date",
                label: "Date"
              }),
              _createVNode(_component_el_table_column, {
                prop: "name",
                label: "Name"
              }),
              _createVNode(_component_el_table_column, {
                prop: "address",
                label: "Address"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["table-layout"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "Tooltip 自定义 2.9.4", css: "\np[data-v-p4tvf] {\n\n  margin: 10px;\n\n  padding: 0;\n}\n.tag-item + .tag-item[data-v-p4tvf] {\n\n  margin-left: 5px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { h } = Vue;
const { ElLink } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "24",
  setup(__props) {
    const tableData = [
      {
        address: "Lohrbergstr. 86c, S\xFCd Lilli, Saarland",
        tags: ["Office", "Home", "Park", "Garden"],
        url: "https://github.com/element-plus/element-plus/issues"
      },
      {
        address: "760 A Street, South Frankfield, Illinois",
        tags: ["error", "warning", "success", "info"],
        url: "https://github.com/element-plus/element-plus/pulls"
      },
      {
        address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Th\xFCringen",
        tags: ["one", "two", "three", "four", "five"],
        url: "https://github.com/element-plus/element-plus/discussions"
      },
      {
        address: "23618 Windsor Drive, West Ricardoview, Idaho",
        tags: ["blue", "white", "dark", "gray", "red", "bright"],
        url: "https://github.com/element-plus/element-plus/actions"
      }
    ];
    const tableRowFormatter = (data) => {
      return `${data.cellValue}: table formatter`;
    };
    const withVNode = (data) => {
      return h(
        ElLink,
        { type: "primary", href: data.cellValue },
        () => h("span", null, data.cellValue)
      );
    };
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_table = _resolveComponent("el-table");
      return _openBlock(), _createBlock(_component_el_table, {
        data: tableData,
        "show-overflow-tooltip": "",
        "tooltip-formatter": tableRowFormatter,
        style: { "width": "100%" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_table_column, {
            prop: "address",
            label: "extends table formatter",
            width: "240"
          }),
          _createCommentVNode(" @vue-generic {TableData} "),
          _createVNode(_component_el_table_column, {
            prop: "tags",
            label: "formatter object",
            width: "240",
            "tooltip-formatter": ({ row }) => row.tags.join(", ")
          }, {
            default: _withCtx(({ row }) => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(row.tags, (tag) => {
                  return _openBlock(), _createBlock(
                    _component_el_tag,
                    {
                      key: tag,
                      class: "tag-item",
                      type: "primary"
                    },
                    {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(tag),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["tooltip-formatter"]),
          _createVNode(_component_el_table_column, {
            prop: "url",
            label: "with vnode",
            width: "240",
            "tooltip-formatter": withVNode
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
];
