window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tree"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const handleNodeClick = (data2) => {
      console.log(data2);
    };
    const data = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    const defaultProps = {
      children: "children",
      label: "label"
    };
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        data,
        props: defaultProps,
        onNodeClick: handleNodeClick
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "可选择", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    let count = 1;
    const props = {
      label: "name",
      children: "zones"
    };
    const handleCheckChange = (data, checked, indeterminate) => {
      console.log(data, checked, indeterminate);
    };
    const loadNode = (node, resolve) => {
      if (node.level === 0) {
        return resolve([{ name: "Root1" }, { name: "Root2" }]);
      }
      if (node.level > 3) return resolve([]);
      let hasChild = false;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }
      setTimeout(() => {
        let data = [];
        if (hasChild) {
          data = [
            {
              name: `zone${count++}`
            },
            {
              name: `zone${count++}`
            }
          ];
        } else {
          data = [];
        }
        resolve(data);
      }, 500);
    };
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        props,
        load: loadNode,
        lazy: "",
        "show-checkbox": "",
        onCheckChange: handleCheckChange
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "懒加载自定义叶子节点", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const props = {
      label: "name",
      children: "zones",
      isLeaf: "leaf"
    };
    const loadNode = (node, resolve) => {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      if (node.level > 1) return resolve([]);
      setTimeout(() => {
        const data = [
          {
            name: "leaf",
            leaf: true
          },
          {
            name: "zone"
          }
        ];
        resolve(data);
      }, 500);
    };
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        props,
        load: loadNode,
        lazy: "",
        "show-checkbox": ""
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "多次懒加载 2.6.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const props = {
      label: "name",
      children: "zones",
      isLeaf: "leaf"
    };
    let time = 0;
    const loadNode = (node, resolve, reject) => {
      if (node.level === 0) {
        return resolve([{ name: "region" }]);
      }
      time++;
      if (node.level >= 1) {
        setTimeout(() => {
          if (time > 3) {
            return resolve([
              { name: "zone1", leaf: true },
              { name: "zone2", leaf: true },
              { name: "zone3", leaf: true }
            ]);
          } else {
            return reject();
          }
        }, 3e3);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        props,
        load: loadNode,
        lazy: ""
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用复选框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const defaultProps = {
      children: "children",
      label: "label",
      disabled: "disabled"
    };
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 3,
            label: "Level two 2-1",
            children: [
              {
                id: 4,
                label: "Level three 3-1-1"
              },
              {
                id: 5,
                label: "Level three 3-1-2",
                disabled: true
              }
            ]
          },
          {
            id: 2,
            label: "Level two 2-2",
            disabled: true,
            children: [
              {
                id: 6,
                label: "Level three 3-2-1"
              },
              {
                id: 7,
                label: "Level three 3-2-2",
                disabled: true
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        data,
        props: defaultProps,
        "show-checkbox": ""
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "默认展开以及默认选中", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const defaultProps = {
      children: "children",
      label: "label"
    };
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        data,
        "show-checkbox": "",
        "node-key": "id",
        "default-expanded-keys": [2, 3],
        "default-checked-keys": [5],
        props: defaultProps
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "树节点的选择", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1 mt-2" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const treeRef = ref();
    const getCheckedNodes = () => {
      console.log(treeRef.value.getCheckedNodes(false, false));
    };
    const getCheckedKeys = () => {
      console.log(treeRef.value.getCheckedKeys(false));
    };
    const setCheckedNodes = () => {
      treeRef.value.setCheckedNodes(
        [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 9,
            label: "Level three 1-1-1"
          }
        ],
        false
      );
    };
    const setCheckedKeys = () => {
      treeRef.value.setCheckedKeys([3], false);
    };
    const resetChecked = () => {
      treeRef.value.setCheckedKeys([], false);
    };
    const defaultProps = {
      children: "children",
      label: "label"
    };
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(
            _component_el_tree,
            {
              ref_key: "treeRef",
              ref: treeRef,
              style: { "max-width": "600px" },
              data,
              "show-checkbox": "",
              "default-expand-all": "",
              "node-key": "id",
              "highlight-current": "",
              props: defaultProps
            },
            null,
            512
            /* NEED_PATCH */
          ),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              class: "!ml-0",
              onClick: getCheckedNodes
            }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "get by node",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              class: "!ml-0",
              onClick: getCheckedKeys
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  "get by key",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              class: "!ml-0",
              onClick: setCheckedNodes
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  "set by node",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              class: "!ml-0",
              onClick: setCheckedKeys
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  "set by key",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              class: "!ml-0",
              onClick: resetChecked
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  "reset",
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
  { title: "自定义节点内容", css: "\n.custom-tree-node {\n\n  flex: 1;\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-between;\n\n  font-size: 14px;\n\n  padding-right: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "custom-tree-container" };
const _hoisted_2 = { class: "custom-tree-node" };
const { ref } = Vue;
const { ElButton } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    let id = 1e3;
    const treeRef1 = ref();
    const treeRef2 = ref();
    const append = (data) => {
      const newChild = { id: id++, label: "testtest", children: [] };
      treeRef1.value?.append(newChild, data);
      treeRef2.value?.append(newChild, data);
    };
    const remove = (node, data) => {
      treeRef1.value?.remove(data);
      treeRef2.value?.remove(data);
    };
    const renderContent = (h, { node, data }) => {
      return h(
        "div",
        {
          class: "custom-tree-node"
        },
        [
          h("span", null, node.label),
          h("div", null, [
            h(
              ElButton,
              {
                type: "primary",
                link: true,
                onClick: () => append(data)
              },
              {
                default: () => "Append"
              }
            ),
            h(
              ElButton,
              {
                type: "danger",
                link: true,
                style: "margin-left: 4px",
                onClick: () => remove(node, data)
              },
              {
                default: () => "Delete"
              }
            )
          ])
        ]
      );
    };
    const dataSource = ref([
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _cache[2] || (_cache[2] = _createElementVNode(
          "p",
          null,
          "Using render-content",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_tree, {
          ref_key: "treeRef1",
          ref: treeRef1,
          style: { "max-width": "600px" },
          data: dataSource.value,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false,
          "render-content": renderContent
        }, null, 8, ["data"]),
        _cache[3] || (_cache[3] = _createElementVNode(
          "p",
          null,
          "Using scoped slot",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_tree, {
          ref_key: "treeRef2",
          ref: treeRef2,
          style: { "max-width": "600px" },
          data: dataSource.value,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false
        }, {
          default: _withCtx(({ node, data }) => [
            _createElementVNode("div", _hoisted_2, [
              _createElementVNode(
                "span",
                null,
                _toDisplayString(node.label),
                1
                /* TEXT */
              ),
              _createElementVNode("div", null, [
                _createVNode(_unref(ElButton), {
                  type: "primary",
                  link: "",
                  onClick: ($event) => append(data)
                }, {
                  default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                    _createTextVNode(
                      " Append ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"]),
                _createVNode(_unref(ElButton), {
                  style: { "margin-left": "4px" },
                  type: "danger",
                  link: "",
                  onClick: ($event) => remove(node, data)
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
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["data"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义节点类名", css: "\n.is-penultimate > .el-tree-node__content .el-tree-node__label {\n\n  color: #626aef;\n}\n.is-penultimate > .el-tree-node__children > div {\n\n  display: inline-block;\n\n  margin-right: 4px;\n&:not(:first-child) .el-tree-node__content {\n\n    padding-left: 0px !important;\n}\n.el-tree-node__content {\n\n    padding-right: 16px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "custom-tree-node-container" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const customNodeClass = ({ isPenultimate }) => isPenultimate ? "is-penultimate" : "";
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            isPenultimate: true,
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        isPenultimate: true,
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        isPenultimate: true,
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_tree, {
          style: { "max-width": "600px" },
          data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expand-all": "",
          "expand-on-click-node": false,
          props: { class: customNodeClass }
        }, null, 8, ["props"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "树节点过滤", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref, watch } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const filterText = ref("");
    const treeRef = ref();
    const defaultProps = {
      children: "children",
      label: "label"
    };
    watch(filterText, (val) => {
      treeRef.value.filter(val);
    });
    const filterNode = (value, data2) => {
      if (!value) return true;
      return data2.label.includes(value);
    };
    const data = [
      {
        id: 1,
        label: "Level one 1",
        children: [
          {
            id: 4,
            label: "Level two 1-1",
            children: [
              {
                id: 9,
                label: "Level three 1-1-1"
              },
              {
                id: 10,
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: "Level one 2",
        children: [
          {
            id: 5,
            label: "Level two 2-1"
          },
          {
            id: 6,
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: 3,
        label: "Level one 3",
        children: [
          {
            id: 7,
            label: "Level two 3-1"
          },
          {
            id: 8,
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input, {
            modelValue: filterText.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterText.value = $event),
            class: "w-60 mb-2",
            placeholder: "Filter keyword"
          }, null, 8, ["modelValue"]),
          _createVNode(
            _component_el_tree,
            {
              ref_key: "treeRef",
              ref: treeRef,
              style: { "max-width": "600px" },
              class: "filter-tree",
              data,
              props: defaultProps,
              "default-expand-all": "",
              "filter-node-method": filterNode
            },
            null,
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
  { title: "手风琴模式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const handleNodeClick = (data2) => {
      console.log(data2);
    };
    const data = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    const defaultProps = {
      children: "children",
      label: "label"
    };
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        data,
        props: defaultProps,
        accordion: "",
        onNodeClick: handleNodeClick
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "可拖拽节点", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const handleDragStart = (node, ev) => {
      console.log("drag start", node);
    };
    const handleDragEnter = (draggingNode, dropNode, ev) => {
      console.log("tree drag enter:", dropNode.label);
    };
    const handleDragLeave = (draggingNode, dropNode, ev) => {
      console.log("tree drag leave:", dropNode.label);
    };
    const handleDragOver = (draggingNode, dropNode, ev) => {
      console.log("tree drag over:", dropNode.label);
    };
    const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
      console.log("tree drag end:", dropNode && dropNode.label, dropType);
    };
    const handleDrop = (draggingNode, dropNode, dropType, ev) => {
      console.log("tree drop:", dropNode.label, dropType);
    };
    const allowDrop = (draggingNode, dropNode, type) => {
      if (dropNode.data.label === "Level two 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    };
    const allowDrag = (draggingNode) => {
      return !draggingNode.data.label.includes("Level three 3-1-1");
    };
    const data = [
      {
        label: "Level one 1",
        children: [
          {
            label: "Level two 1-1",
            children: [
              {
                label: "Level three 1-1-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 2",
        children: [
          {
            label: "Level two 2-1",
            children: [
              {
                label: "Level three 2-1-1"
              }
            ]
          },
          {
            label: "Level two 2-2",
            children: [
              {
                label: "Level three 2-2-1"
              }
            ]
          }
        ]
      },
      {
        label: "Level one 3",
        children: [
          {
            label: "Level two 3-1",
            children: [
              {
                label: "Level three 3-1-1"
              }
            ]
          },
          {
            label: "Level two 3-2",
            children: [
              {
                label: "Level three 3-2-1"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree = _resolveComponent("el-tree");
      return _openBlock(), _createBlock(_component_el_tree, {
        style: { "max-width": "600px" },
        "allow-drop": allowDrop,
        "allow-drag": allowDrag,
        data,
        draggable: "",
        "default-expand-all": "",
        "node-key": "id",
        onNodeDragStart: handleDragStart,
        onNodeDragEnter: handleDragEnter,
        onNodeDragLeave: handleDragLeave,
        onNodeDragOver: handleDragOver,
        onNodeDragEnd: handleDragEnd,
        onNodeDrop: handleDrop
      });
    };
  }
});
return stdin_default;
 })() },
];
