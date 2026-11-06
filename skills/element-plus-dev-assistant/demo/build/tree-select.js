window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tree-select"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref();
    const data = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            data,
            "render-after-expand": false,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[2] || (_cache[2] = _createTextVNode(
            " show checkbox: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            data,
            "render-after-expand": false,
            "show-checkbox": "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "选择任意级别", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref();
    const data = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            data,
            "check-strictly": "",
            "render-after-expand": false,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[3] || (_cache[3] = _createTextVNode(
            " show checkbox: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            data,
            "check-strictly": "",
            "render-after-expand": false,
            "show-checkbox": "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[4] || (_cache[4] = _createTextVNode(
            " show checkbox with `check-on-click-node`: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
            data,
            "check-strictly": "",
            "render-after-expand": false,
            "show-checkbox": "",
            "check-on-click-node": "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue"])
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
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref();
    const valueStrictly = ref();
    const data = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            data,
            multiple: "",
            "render-after-expand": false,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[3] || (_cache[3] = _createTextVNode(
            " show checkbox: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            data,
            multiple: "",
            "render-after-expand": false,
            "show-checkbox": "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[4] || (_cache[4] = _createTextVNode(
            " show checkbox with `check-strictly`: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: valueStrictly.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => valueStrictly.value = $event),
            data,
            multiple: "",
            "render-after-expand": false,
            "show-checkbox": "",
            "check-strictly": "",
            "check-on-click-node": "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref();
    const data = [
      {
        value: "1",
        label: "Level one 1",
        disabled: true,
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            disabled: true,
            children: [
              {
                disabled: true,
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      return _openBlock(), _createBlock(_component_el_tree_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        data,
        style: { "width": "240px" }
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可筛选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref();
    const sourceData = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    const data = ref(sourceData);
    const filterMethod = (value2) => {
      data.value = [...sourceData].filter((item) => item.label.includes(value2));
    };
    const filterNodeMethod = (value2, data2) => data2.label.includes(value2);
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            data: data.value,
            filterable: "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue", "data"]),
          _createVNode(_component_el_divider),
          _cache[3] || (_cache[3] = _createTextVNode(
            " filter method: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            data: data.value,
            "filter-method": filterMethod,
            filterable: "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue", "data"]),
          _createVNode(_component_el_divider),
          _cache[4] || (_cache[4] = _createTextVNode(
            " filter node method: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
            data: data.value,
            "filter-node-method": filterNodeMethod,
            filterable: "",
            style: { "width": "240px" }
          }, null, 8, ["modelValue", "data"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value = ref();
    const renderContent = (h, { data: data2 }) => {
      return h(
        "span",
        {
          style: {
            color: "#626AEF"
          }
        },
        data2.label
      );
    };
    const data = [
      {
        value: "1",
        label: "Level one 1",
        children: [
          {
            value: "1-1",
            label: "Level two 1-1",
            children: [
              {
                value: "1-1-1",
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        value: "2",
        label: "Level one 2",
        children: [
          {
            value: "2-1",
            label: "Level two 2-1",
            children: [
              {
                value: "2-1-1",
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            value: "2-2",
            label: "Level two 2-2",
            children: [
              {
                value: "2-2-1",
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        value: "3",
        label: "Level one 3",
        children: [
          {
            value: "3-1",
            label: "Level two 3-1",
            children: [
              {
                value: "3-1-1",
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            value: "3-2",
            label: "Level two 3-2",
            children: [
              {
                value: "3-2-1",
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            data,
            style: { "width": "240px" }
          }, {
            default: _withCtx(({ data: { label } }) => [
              _createTextVNode(
                _toDisplayString(label),
                1
                /* TEXT */
              ),
              _cache[2] || (_cache[2] = _createElementVNode(
                "span",
                { style: { "color": "gray" } },
                "(suffix)",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _cache[3] || (_cache[3] = _createTextVNode(
            " use render content: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            data,
            "render-content": renderContent,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "懒加载", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value = ref();
    const value2 = ref(5);
    const cacheData = [{ value: 5, label: "lazy load node5" }];
    const props = {
      label: "label",
      children: "children",
      isLeaf: "isLeaf"
    };
    let id = 0;
    const load = (node, resolve) => {
      if (node.isLeaf) return resolve([]);
      setTimeout(() => {
        resolve([
          {
            value: ++id,
            label: `lazy load node${id}`
          },
          {
            value: ++id,
            label: `lazy load node${id}`,
            isLeaf: true
          }
        ]);
      }, 400);
    };
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_VersionTag = _resolveComponent("VersionTag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tree_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            lazy: "",
            load,
            props,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_divider),
          _createVNode(_component_VersionTag, { version: "2.2.26" }),
          _cache[2] || (_cache[2] = _createTextVNode(
            " show lazy load label: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_tree_select, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            lazy: "",
            load,
            props,
            "cache-data": cacheData,
            style: { "width": "240px" }
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "使用 node-key 属性", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const value = ref([2]);
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 2,
            label: "Level two 1-1"
          },
          {
            id: 3,
            label: "Level two 1-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_select = _resolveComponent("el-tree-select");
      return _openBlock(), _createBlock(_component_el_tree_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        style: { "width": "240px" },
        data,
        "node-key": "id",
        "show-checkbox": "",
        multiple: "",
        "default-expand-all": ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
