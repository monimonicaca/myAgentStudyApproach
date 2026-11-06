window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["loading"] = [
  { title: "区域加载", css: "\nbody {\n\n  margin: 0;\n}\n.example-showcase .el-loading-mask {\n\n  z-index: 9;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, resolveDirective: _resolveDirective, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, withDirectives: _withDirectives } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const loading = ref(true);
    const tableData = [
      {
        date: "2016-05-02",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-04",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-01",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _directive_loading = _resolveDirective("loading");
      return _withDirectives((_openBlock(), _createBlock(_component_el_table, {
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
      })), [
        [_directive_loading, loading.value]
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义加载中组件内容", css: "\n.example-showcase .el-loading-mask {\n\n  z-index: 9;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, resolveDirective: _resolveDirective, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, withDirectives: _withDirectives, Fragment: _Fragment, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const svg = `

        <path class="path" d="

          M 30 15

          L 28 17

          M 25.61 25.61

          A 15 15, 0, 0, 1, 15 30

          A 15 15, 0, 1, 1, 27.99 7.5

          L 15 15

        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>

      `;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const loading = ref(true);
    const tableData = [
      {
        date: "2016-05-02",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-04",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-01",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _directive_loading = _resolveDirective("loading");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _withDirectives((_openBlock(), _createBlock(_component_el_table, {
            "element-loading-text": "Loading...",
            "element-loading-spinner": svg,
            "element-loading-svg-view-box": "-10, -10, 50, 50",
            "element-loading-background": "rgba(122, 122, 122, 0.8)",
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
          })), [
            [_directive_loading, loading.value]
          ]),
          _withDirectives((_openBlock(), _createBlock(_component_el_table, {
            "element-loading-svg": svg,
            class: "custom-loading-svg",
            "element-loading-svg-view-box": "-10, -10, 50, 50",
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
          })), [
            [_directive_loading, loading.value]
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
  { title: "让加载组件铺满整个屏幕", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, resolveDirective: _resolveDirective, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, withDirectives: _withDirectives, createVNode: _createVNode, Fragment: _Fragment, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ElLoading } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const fullscreenLoading = ref(false);
    const openFullScreen1 = () => {
      fullscreenLoading.value = true;
      setTimeout(() => {
        fullscreenLoading.value = false;
      }, 2e3);
    };
    const openFullScreen2 = () => {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2e3);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _directive_loading = _resolveDirective("loading");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _withDirectives((_openBlock(), _createBlock(_component_el_button, {
            type: "primary",
            onClick: openFullScreen1
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " As a directive ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })), [
            [
              _directive_loading,
              fullscreenLoading.value,
              void 0,
              {
                fullscreen: true,
                lock: true
              }
            ]
          ]),
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: openFullScreen2
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                " As a service ",
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
];
