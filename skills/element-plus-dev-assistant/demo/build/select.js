window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["select"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "Options 属性 2.10.5", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref("");
    const props = {
      value: "id",
      label: "label",
      options: "options",
      disabled: "disabled"
    };
    const options = [
      {
        id: "Option1",
        label: "Option1"
      },
      {
        id: "Option2",
        label: "Option2",
        disabled: true
      },
      {
        id: "Option3",
        label: "Option3"
      },
      {
        id: "Option4",
        label: "Option4",
        disabled: true
      },
      {
        id: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options,
        props,
        placeholder: "Select",
        style: { "width": "240px" }
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "有禁用选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2",
        disabled: true
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value,
                disabled: item.disabled
              }, null, 8, ["label", "value", "disabled"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        disabled: "",
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "可清空", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        clearable: "",
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          placeholder: "Select",
          size: "large",
          style: { "width": "240px" }
        }, {
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(options, (item) => {
                return _createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_select, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          placeholder: "Select",
          style: { "width": "240px" }
        }, {
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(options, (item) => {
                return _createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_select, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          placeholder: "Select",
          size: "small",
          style: { "width": "240px" }
        }, {
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(options, (item) => {
                return _createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "基础多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const _hoisted_4 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value1 = ref([]);
    const value2 = ref([]);
    const value3 = ref([]);
    const value4 = ref([]);
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[4] || (_cache[4] = _createElementVNode(
              "p",
              null,
              "default",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              multiple: "",
              placeholder: "Select",
              style: { "width": "240px" }
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(options, (item) => {
                    return _createVNode(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[5] || (_cache[5] = _createElementVNode(
              "p",
              null,
              "use collapse-tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              multiple: "",
              "collapse-tags": "",
              placeholder: "Select",
              style: { "width": "240px" }
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(options, (item) => {
                    return _createVNode(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[6] || (_cache[6] = _createElementVNode(
              "p",
              null,
              "use collapse-tags-tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
              multiple: "",
              "collapse-tags": "",
              "collapse-tags-tooltip": "",
              placeholder: "Select",
              style: { "width": "240px" }
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(options, (item) => {
                    return _createVNode(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[7] || (_cache[7] = _createElementVNode(
              "p",
              null,
              "use max-collapse-tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: value4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
              multiple: "",
              "collapse-tags": "",
              "collapse-tags-tooltip": "",
              "max-collapse-tags": 3,
              placeholder: "Select",
              style: { "width": "240px" }
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(options, (item) => {
                    return _createVNode(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
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
  { title: "自定义模板", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "float": "left" } };
const _hoisted_2 = { style: { "float": "right", "color": "var(--el-text-color-secondary)", "font-size": "13px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const value = ref("");
    const cities = [
      {
        value: "Beijing",
        label: "Beijing"
      },
      {
        value: "Shanghai",
        label: "Shanghai"
      },
      {
        value: "Nanjing",
        label: "Nanjing"
      },
      {
        value: "Chengdu",
        label: "Chengdu"
      },
      {
        value: "Shenzhen",
        label: "Shenzhen"
      },
      {
        value: "Guangzhou",
        label: "Guangzhou"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(cities, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, {
                default: _withCtx(() => [
                  _createElementVNode(
                    "span",
                    _hoisted_1,
                    _toDisplayString(item.label),
                    1
                    /* TEXT */
                  ),
                  _createElementVNode(
                    "span",
                    _hoisted_2,
                    _toDisplayString(item.value),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "自定义下拉菜单的头部 2.4.3", css: "\n.custom-header {\n.el-checkbox {\n\n    display: flex;\n\n    height: unset;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createBlock: _createBlock } = Vue;
const { ref, watch } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const checkAll = ref(false);
    const indeterminate = ref(false);
    const value = ref([]);
    const cities = ref([
      {
        value: "Beijing",
        label: "Beijing"
      },
      {
        value: "Shanghai",
        label: "Shanghai"
      },
      {
        value: "Nanjing",
        label: "Nanjing"
      },
      {
        value: "Chengdu",
        label: "Chengdu"
      },
      {
        value: "Shenzhen",
        label: "Shenzhen"
      },
      {
        value: "Guangzhou",
        label: "Guangzhou"
      }
    ]);
    watch(value, (val) => {
      if (val.length === 0) {
        checkAll.value = false;
        indeterminate.value = false;
      } else if (val.length === cities.value.length) {
        checkAll.value = true;
        indeterminate.value = false;
      } else {
        indeterminate.value = true;
      }
    });
    const handleCheckAll = (val) => {
      indeterminate.value = false;
      if (val) {
        value.value = cities.value.map((_) => _.value);
      } else {
        value.value = [];
      }
    };
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
        multiple: "",
        clearable: "",
        "collapse-tags": "",
        placeholder: "Select",
        "popper-class": "custom-header",
        "max-collapse-tags": 1,
        style: { "width": "240px" }
      }, {
        header: _withCtx(() => [
          _createVNode(_component_el_checkbox, {
            modelValue: checkAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
            indeterminate: indeterminate.value,
            onChange: handleCheckAll
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " All ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "indeterminate"])
        ]),
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(cities.value, (item) => {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
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
  { title: "自定义下拉菜单的底部 2.4.3", css: "\n.option-input {\n\n  width: 100%;\n\n  margin-bottom: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, createTextVNode: _createTextVNode, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const isAdding = ref(false);
    const value = ref([]);
    const optionName = ref("");
    const cities = ref([
      {
        value: "Beijing",
        label: "Beijing"
      },
      {
        value: "Shanghai",
        label: "Shanghai"
      },
      {
        value: "Nanjing",
        label: "Nanjing"
      },
      {
        value: "Chengdu",
        label: "Chengdu"
      },
      {
        value: "Shenzhen",
        label: "Shenzhen"
      },
      {
        value: "Guangzhou",
        label: "Guangzhou"
      }
    ]);
    const onAddOption = () => {
      isAdding.value = true;
    };
    const onConfirm = () => {
      if (optionName.value) {
        cities.value.push({
          label: optionName.value,
          value: optionName.value
        });
        clear();
      }
    };
    const clear = () => {
      optionName.value = "";
      isAdding.value = false;
    };
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        footer: _withCtx(() => [
          !isAdding.value ? (_openBlock(), _createBlock(_component_el_button, {
            key: 0,
            text: "",
            bg: "",
            size: "small",
            onClick: onAddOption
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Add an option ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })) : (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 1 },
            [
              _createVNode(_component_el_input, {
                modelValue: optionName.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionName.value = $event),
                class: "option-input",
                placeholder: "input option name",
                size: "small"
              }, null, 8, ["modelValue"]),
              _createVNode(_component_el_button, {
                type: "primary",
                size: "small",
                onClick: onConfirm
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    " confirm ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                size: "small",
                onClick: clear
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "cancel",
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
          ))
        ]),
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(cities.value, (item) => {
              return _openBlock(), _createBlock(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
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
  { title: "将选项进行分组", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        label: "Popular cities",
        options: [
          {
            value: "Shanghai",
            label: "Shanghai"
          },
          {
            value: "Beijing",
            label: "Beijing"
          }
        ]
      },
      {
        label: "City name",
        options: [
          {
            value: "Chengdu",
            label: "Chengdu"
          },
          {
            value: "Shenzhen",
            label: "Shenzhen"
          },
          {
            value: "Guangzhou",
            label: "Guangzhou"
          },
          {
            value: "Dalian",
            label: "Dalian"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_option_group = _resolveComponent("el-option-group");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (group) => {
              return _createVNode(_component_el_option_group, {
                key: group.label,
                label: group.label
              }, {
                default: _withCtx(() => [
                  (_openBlock(true), _createElementBlock(
                    _Fragment,
                    null,
                    _renderList(group.options, (item) => {
                      return _openBlock(), _createBlock(_component_el_option, {
                        key: item.value,
                        label: item.label,
                        value: item.value
                      }, null, 8, ["label", "value"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "筛选选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        filterable: "",
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "远程搜索", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "flex flex-wrap" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const list = ref([]);
    const options = ref([]);
    const value = ref([]);
    const loading = ref(false);
    onMounted(() => {
      list.value = states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    });
    const remoteMethod = (query) => {
      if (query) {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          options.value = list.value.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase());
          });
        }, 200);
      } else {
        options.value = [];
      }
    };
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "p",
            null,
            "default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-method": remoteMethod,
            loading: loading.value,
            style: { "width": "240px" }
          }, {
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(options.value, (item) => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "loading"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "use remote-show-suffix",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-show-suffix": "",
            "remote-method": remoteMethod,
            loading: loading.value,
            style: { "width": "240px" }
          }, {
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(options.value, (item) => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "loading"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "创建新的选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "13",
  setup(__props) {
    const value = ref([]);
    const options = [
      {
        value: "HTML",
        label: "HTML"
      },
      {
        value: "CSS",
        label: "CSS"
      },
      {
        value: "JavaScript",
        label: "JavaScript"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        multiple: "",
        filterable: "",
        "allow-create": "",
        "default-first-option": "",
        "reserve-keyword": false,
        placeholder: "Choose tags for your article",
        style: { "width": "240px" }
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "使用值键 value-key 属性", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode } = Vue;
const _hoisted_1 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "14",
  setup(__props) {
    const value = ref();
    const options = ref([
      { id: 1, label: "Option A", desc: "Option A - 230506" },
      { id: 2, label: "Option B", desc: "Option B - 230506" },
      { id: 3, label: "Option C", desc: "Option C - 230506" },
      { id: 4, label: "Option A", desc: "Option A - 230507" }
    ]);
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          "value-key": "id",
          placeholder: "Select",
          style: { "width": "240px" }
        }, {
          default: _withCtx(() => [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(options.value, (item) => {
                return _openBlock(), _createBlock(_component_el_option, {
                  key: item.id,
                  label: item.label,
                  value: item
                }, null, 8, ["label", "value"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createElementVNode(
          "p",
          null,
          " selected option's description: " + _toDisplayString(value.value ? value.value.desc : "no select"),
          1
          /* TEXT */
        )
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签 2.5.0", css: "\n.el-tag[data-v-bzlvbl] {\n\n  border: none;\n\n  aspect-ratio: 1;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "flex items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "15",
  setup(__props) {
    const value = ref([]);
    const colors = [
      {
        value: "#E63415",
        label: "red"
      },
      {
        value: "#FF6600",
        label: "orange"
      },
      {
        value: "#FFDE0A",
        label: "yellow"
      },
      {
        value: "#1EC79D",
        label: "green"
      },
      {
        value: "#14CCCC",
        label: "cyan"
      },
      {
        value: "#4167F0",
        label: "blue"
      },
      {
        value: "#6222C9",
        label: "purple"
      }
    ];
    colors.forEach((color) => {
      value.value.push(color.value);
    });
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        multiple: "",
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        tag: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(value.value, (color) => {
              return _openBlock(), _createBlock(_component_el_tag, {
                key: color,
                color
              }, null, 8, ["color"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(colors, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_1, [
                    _createVNode(_component_el_tag, {
                      color: item.value,
                      style: { "margin-right": "8px" },
                      size: "small"
                    }, null, 8, ["color"]),
                    _createElementVNode(
                      "span",
                      {
                        style: _normalizeStyle({ color: item.value })
                      },
                      _toDisplayString(item.label),
                      5
                      /* TEXT, STYLE */
                    )
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "自定义加载 2.5.2", css: "\n.el-select-dropdown__loading {\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  height: 100px;\n\n  font-size: 20px;\n}\n.circular {\n\n  display: inline;\n\n  height: 30px;\n\n  width: 30px;\n\n  animation: loading-rotate 2s linear infinite;\n}\n.path {\n\n  animation: loading-dash 1.5s ease-in-out infinite;\n\n  stroke-dasharray: 90, 150;\n\n  stroke-dashoffset: 0;\n\n  stroke-width: 2;\n\n  stroke: var(--el-color-primary);\n\n  stroke-linecap: round;\n}\n.loading-path .dot1 {\n\n  transform: translate(3.75px, 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n}\n.loading-path .dot2 {\n\n  transform: translate(calc(100% - 3.75px), 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.4s;\n}\n.loading-path .dot3 {\n\n  transform: translate(3.75px, calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 1.2s;\n}\n.loading-path .dot4 {\n\n  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.8s;\n}\n@keyframes loading-rotate {\nto {\n\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-dash {\n0% {\n\n    stroke-dasharray: 1, 200;\n\n    stroke-dashoffset: 0;\n}\n50% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -40px;\n}\n100% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -120px;\n}\n}\n@keyframes custom-spin-move {\nto {\n\n    opacity: 1;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createBlock: _createBlock, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "flex flex-wrap" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "16",
  setup(__props) {
    const list = ref([]);
    const options = ref([]);
    const value = ref([]);
    const loading = ref(false);
    onMounted(() => {
      list.value = states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    });
    const remoteMethod = (query) => {
      if (query) {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          options.value = list.value.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase());
          });
        }, 3e3);
      } else {
        options.value = [];
      }
    };
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "loading icon1",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-method": remoteMethod,
            loading: loading.value,
            style: { "width": "240px" }
          }, {
            loading: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createElementVNode(
                "svg",
                {
                  class: "circular",
                  viewBox: "0 0 50 50"
                },
                [
                  _createElementVNode("circle", {
                    class: "path",
                    cx: "25",
                    cy: "25",
                    r: "20",
                    fill: "none"
                  })
                ],
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(options.value, (item) => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "loading"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "loading icon2",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-method": remoteMethod,
            loading: loading.value,
            style: { "width": "240px" }
          }, {
            loading: _withCtx(() => [
              _createVNode(_component_el_icon, { class: "is-loading" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createElementVNode(
                    "svg",
                    {
                      class: "circular",
                      viewBox: "0 0 20 20"
                    },
                    [
                      _createElementVNode("g", {
                        class: "path2 loading-path",
                        "stroke-width": "0",
                        style: { "animation": "none", "stroke": "none" }
                      }, [
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot1",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot2",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot4",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot3",
                          rx: "0",
                          ry: "0"
                        })
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(options.value, (item) => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "loading"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "空值配置2.7.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "17",
  setup(__props) {
    const value = ref("");
    const options = [
      {
        value: "",
        label: "All"
      },
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    const handleClear = () => {
      ElMessage.info(`The clear value is: ${value.value}`);
    };
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createBlock(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        "empty-values": [null, void 0],
        "value-on-clear": null,
        clearable: "",
        placeholder: "Select",
        style: { "width": "240px" },
        onClear: handleClear
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(options, (item) => {
              return _createVNode(_component_el_option, {
                key: item.value,
                label: item.label,
                value: item.value
              }, null, 8, ["label", "value"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "自定义标签 2.7.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const _hoisted_2 = { style: { "font-weight": "bold" } };
const _hoisted_3 = { style: { "font-weight": "bold" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "18",
  setup(__props) {
    const value1 = ref("Option1");
    const value2 = ref(["Option1"]);
    const options = [
      {
        value: "Option1",
        label: "Label1"
      },
      {
        value: "Option2",
        label: "Label2"
      },
      {
        value: "Option3",
        label: "Label3"
      },
      {
        value: "Option4",
        label: "Label4"
      },
      {
        value: "Option5",
        label: "Label5"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select, {
          modelValue: value1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
          placeholder: "Select",
          style: { "width": "240px" },
          clearable: ""
        }, {
          label: _withCtx(({ label, value }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(label) + ": ",
              1
              /* TEXT */
            ),
            _createElementVNode(
              "span",
              _hoisted_2,
              _toDisplayString(value),
              1
              /* TEXT */
            )
          ]),
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(options, (item) => {
                return _createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_select, {
          modelValue: value2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
          placeholder: "Select",
          style: { "width": "240px" },
          clearable: "",
          multiple: ""
        }, {
          label: _withCtx(({ label, value }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(label) + ": ",
              1
              /* TEXT */
            ),
            _createElementVNode(
              "span",
              _hoisted_3,
              _toDisplayString(value),
              1
              /* TEXT */
            )
          ]),
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(options, (item) => {
                return _createVNode(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8, ["label", "value"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
