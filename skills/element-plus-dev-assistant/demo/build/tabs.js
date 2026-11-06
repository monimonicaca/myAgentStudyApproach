window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tabs"] = [
  { title: "基础用法", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const activeName = ref("first");
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        modelValue: activeName.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
        class: "demo-tabs",
        onTabClick: handleClick
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_tab_pane, {
            label: "User",
            name: "first"
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "User",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Config",
            name: "second"
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Config",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Role",
            name: "third"
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Role",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Task",
            name: "fourth"
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "Task",
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
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "卡片风格的标签", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const activeName = ref("first");
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        modelValue: activeName.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
        type: "card",
        class: "demo-tabs",
        onTabClick: handleClick
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_tab_pane, {
            label: "User",
            name: "first"
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "User",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Config",
            name: "second"
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Config",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Role",
            name: "third"
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Role",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, {
            label: "Task",
            name: "fourth"
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "Task",
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
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "带有边框的卡片风格", css: "", comp: { template: "\n\n  <el-tabs type=\"border-card\">\n\n    <el-tab-pane label=\"User\">User</el-tab-pane>\n\n    <el-tab-pane label=\"Config\">Config</el-tab-pane>\n\n    <el-tab-pane label=\"Role\">Role</el-tab-pane>\n\n    <el-tab-pane label=\"Task\">Task</el-tab-pane>\n\n  </el-tabs>\n\n" } },
  { title: "标签位置的设置", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n.el-tabs--right .el-tabs__content,\n\n.el-tabs--left .el-tabs__content {\n\n  height: 100%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const tabPosition = ref("left");
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: tabPosition.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tabPosition.value = $event),
            style: { "margin-bottom": "30px" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: "top" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "top",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "right" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "right",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "bottom" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "bottom",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "left" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "left",
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
          _createVNode(_component_el_tabs, {
            "tab-position": tabPosition.value,
            style: { "height": "200px" },
            class: "demo-tabs"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tab_pane, { label: "User" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "User",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_tab_pane, { label: "Config" }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "Config",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_tab_pane, { label: "Role" }, {
                default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                  _createTextVNode(
                    "Role",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_tab_pane, { label: "Task" }, {
                default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                  _createTextVNode(
                    "Task",
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
          }, 8, ["tab-position"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签页的内容", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n.demo-tabs .custom-tabs-label .el-icon {\n\n  vertical-align: middle;\n}\n.demo-tabs .custom-tabs-label span {\n\n  vertical-align: middle;\n\n  margin-left: 4px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "custom-tabs-label" };
const { Calendar } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        type: "border-card",
        class: "demo-tabs"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_tab_pane, null, {
            label: _withCtx(() => [
              _createElementVNode("span", _hoisted_1, [
                _createVNode(_component_el_icon, null, {
                  default: _withCtx(() => [
                    _createVNode(_unref(Calendar))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _cache[0] || (_cache[0] = _createElementVNode(
                  "span",
                  null,
                  "Route",
                  -1
                  /* CACHED */
                ))
              ])
            ]),
            default: _withCtx(() => [
              _cache[1] || (_cache[1] = _createTextVNode(
                " Route ",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, { label: "Config" }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Config",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, { label: "Role" }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Role",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tab_pane, { label: "Task" }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "Task",
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
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "动态增减标签页", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    let tabIndex = 2;
    const editableTabsValue = ref("2");
    const editableTabs = ref([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }
    ]);
    const handleTabsEdit = (targetName, action) => {
      if (action === "add") {
        const newTabName = `${++tabIndex}`;
        editableTabs.value.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        editableTabsValue.value = newTabName;
      } else if (action === "remove") {
        const tabs = editableTabs.value;
        let activeName = editableTabsValue.value;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        modelValue: editableTabsValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editableTabsValue.value = $event),
        type: "card",
        editable: "",
        class: "demo-tabs",
        onEdit: handleTabsEdit
      }, {
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(editableTabs.value, (item) => {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(item.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "name"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "添加按钮自定义图标 2.4.0", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { Select } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    let tabIndex = 2;
    const editableTabsValue = ref("2");
    const editableTabs = ref([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }
    ]);
    const handleTabsEdit = (targetName, action) => {
      if (action === "add") {
        const newTabName = `${++tabIndex}`;
        editableTabs.value.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        editableTabsValue.value = newTabName;
      } else if (action === "remove") {
        const tabs = editableTabs.value;
        let activeName = editableTabsValue.value;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        editableTabsValue.value = activeName;
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        modelValue: editableTabsValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editableTabsValue.value = $event),
        type: "card",
        class: "demo-tabs",
        editable: "",
        onEdit: handleTabsEdit
      }, {
        "add-icon": _withCtx(() => [
          _createVNode(_component_el_icon, null, {
            default: _withCtx(() => [
              _createVNode(_unref(Select))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(editableTabs.value, (item) => {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: item.name,
                label: item.title,
                name: item.name
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(item.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "name"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "增加标签页触发器自定义", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "margin-bottom": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    let tabIndex = 2;
    const editableTabsValue = ref("2");
    const editableTabs = ref([
      {
        title: "Tab 1",
        name: "1",
        content: "Tab 1 content"
      },
      {
        title: "Tab 2",
        name: "2",
        content: "Tab 2 content"
      }
    ]);
    const addTab = (targetName) => {
      const newTabName = `${++tabIndex}`;
      editableTabs.value.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      editableTabsValue.value = newTabName;
    };
    const removeTab = (targetName) => {
      const tabs = editableTabs.value;
      let activeName = editableTabsValue.value;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      editableTabsValue.value = activeName;
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              size: "small",
              onClick: _cache[0] || (_cache[0] = ($event) => addTab(editableTabsValue.value))
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  " add tab ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(_component_el_tabs, {
            modelValue: editableTabsValue.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editableTabsValue.value = $event),
            type: "card",
            class: "demo-tabs",
            closable: "",
            onTabRemove: removeTab
          }, {
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(editableTabs.value, (item) => {
                  return _openBlock(), _createBlock(_component_el_tab_pane, {
                    key: item.name,
                    label: item.title,
                    name: item.name
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(item.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["label", "name"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "默认值2.11.9", css: "\n.demo-tabs > .el-tabs__content {\n\n  padding: 32px;\n\n  color: #6b778c;\n\n  font-size: 32px;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const tabs = ref([
      { label: "User", name: "first" },
      { label: "Config", name: "second" },
      { label: "Role", name: "third" },
      { label: "Task", name: "fourth" }
    ]);
    const activeName = ref();
    const handleClick = (tab, event) => {
      console.log(tab, event);
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = _resolveComponent("el-tab-pane");
      const _component_el_tabs = _resolveComponent("el-tabs");
      return _openBlock(), _createBlock(_component_el_tabs, {
        modelValue: activeName.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
        class: "demo-tabs",
        "default-value": "third",
        onTabClick: handleClick
      }, {
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(tabs.value, (tab) => {
              return _openBlock(), _createBlock(_component_el_tab_pane, {
                key: tab.name,
                label: tab.label,
                name: tab.name
              }, {
                default: _withCtx(() => [
                  _cache[1] || (_cache[1] = _createTextVNode(
                    " default-value: third ",
                    -1
                    /* CACHED */
                  )),
                  _cache[2] || (_cache[2] = _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createTextVNode(
                    " active: " + _toDisplayString(activeName.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["label", "name"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
