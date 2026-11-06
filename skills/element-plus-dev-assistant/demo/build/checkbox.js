window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["checkbox"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "my-2" };
const _hoisted_2 = { class: "mt-2" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const checked1 = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(false);
    const checked4 = ref(false);
    const checked5 = ref(false);
    const checked6 = ref(false);
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_checkbox, {
              modelValue: checked1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked1.value = $event),
              label: "Option 1",
              size: "large"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_checkbox, {
              modelValue: checked2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checked2.value = $event),
              label: "Option 2",
              size: "large"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_checkbox, {
              modelValue: checked3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => checked3.value = $event),
              label: "Option 1"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_checkbox, {
              modelValue: checked4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => checked4.value = $event),
              label: "Option 2"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_checkbox, {
              modelValue: checked5.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => checked5.value = $event),
              label: "Option 1",
              size: "small"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_checkbox, {
              modelValue: checked6.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => checked6.value = $event),
              label: "Option 2",
              size: "small"
            }, null, 8, ["modelValue"])
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
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const checked1 = ref(false);
    const checked2 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_checkbox, {
            modelValue: checked1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked1.value = $event),
            disabled: ""
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Disabled",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_checkbox, {
            modelValue: checked2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checked2.value = $event)
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Not disabled",
                -1
                /* CACHED */
              )
            ])]),
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
  { title: "多选框组", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const checkList = ref(["Value selected and disabled", "Value A"]);
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createBlock(_component_el_checkbox_group, {
        modelValue: checkList.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkList.value = $event)
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_checkbox, {
            label: "Option A",
            value: "Value A"
          }),
          _createVNode(_component_el_checkbox, {
            label: "Option B",
            value: "Value B"
          }),
          _createVNode(_component_el_checkbox, {
            label: "Option C",
            value: "Value C"
          }),
          _createVNode(_component_el_checkbox, {
            label: "disabled",
            value: "Value disabled",
            disabled: ""
          }),
          _createVNode(_component_el_checkbox, {
            label: "selected and disabled",
            value: "Value selected and disabled",
            disabled: ""
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
  { title: "Options 属性 2.11.2", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const checkList = ref(["Value selected and disabled", "Value A"]);
    const props = { label: "name", value: "id", disabled: "unable" };
    const options = [
      { name: "Option A", id: "Value A" },
      { name: "Option B", id: "Value B" },
      { name: "Option C", id: "Value C" },
      { name: "disabled", id: "Value disabled", unable: true },
      {
        name: "selected and disabled",
        id: "Value selected and disabled",
        unable: true
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createBlock(_component_el_checkbox_group, {
        modelValue: checkList.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkList.value = $event),
        options,
        props
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "中间状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    const checkedCities = ref(["Shanghai", "Beijing"]);
    const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
    const handleCheckAllChange = (val) => {
      checkedCities.value = val ? cities : [];
      isIndeterminate.value = false;
    };
    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
    };
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_checkbox, {
            modelValue: checkAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
            indeterminate: isIndeterminate.value,
            onChange: handleCheckAllChange
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Check all ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "indeterminate"]),
          _createVNode(_component_el_checkbox_group, {
            modelValue: checkedCities.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checkedCities.value = $event),
            onChange: handleCheckedCitiesChange
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createElementBlock(
                _Fragment,
                null,
                _renderList(cities, (city) => {
                  return _createVNode(_component_el_checkbox, {
                    key: city,
                    label: city,
                    value: city
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(city),
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
  { title: "可选项目数量的限制", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const checkedCities = ref(["Shanghai", "Beijing"]);
    const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createBlock(_component_el_checkbox_group, {
        modelValue: checkedCities.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkedCities.value = $event),
        min: 1,
        max: 2
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(cities, (city) => {
              return _createVNode(_component_el_checkbox, {
                key: city,
                label: city,
                value: city
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(city),
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
  { title: "按钮样式", css: "\n.demo-button-style[data-v-899jsu] {\n\n  margin-top: 24px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode } = Vue;
const _hoisted_1 = { class: "demo-button-style" };
const _hoisted_2 = { class: "demo-button-style" };
const _hoisted_3 = { class: "demo-button-style" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const checkboxGroup1 = ref(["Shanghai"]);
    const checkboxGroup2 = ref(["Shanghai"]);
    const checkboxGroup3 = ref(["Shanghai"]);
    const checkboxGroup4 = ref(["Shanghai"]);
    const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
    return (_ctx, _cache) => {
      const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkboxGroup1.value = $event),
              size: "large"
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(cities, (city) => {
                    return _createVNode(_component_el_checkbox_button, {
                      key: city,
                      value: city
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(city),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checkboxGroup2.value = $event)
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(cities, (city) => {
                    return _createVNode(_component_el_checkbox_button, {
                      key: city,
                      value: city
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(city),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value"]);
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
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => checkboxGroup3.value = $event),
              size: "small"
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(cities, (city) => {
                    return _createVNode(_component_el_checkbox_button, {
                      key: city,
                      value: city,
                      disabled: city === "Beijing"
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(city),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value", "disabled"]);
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
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => checkboxGroup4.value = $event),
              size: "small",
              disabled: ""
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(cities, (city) => {
                    return _createVNode(_component_el_checkbox_button, {
                      key: city,
                      value: city
                    }, {
                      default: _withCtx(() => [
                        _createTextVNode(
                          _toDisplayString(city),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value"]);
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
  { title: "带有边框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "mt-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const checked1 = ref(true);
    const checked2 = ref(false);
    const checked3 = ref(false);
    const checked4 = ref(true);
    const checkboxGroup1 = ref(["Value1"]);
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_checkbox, {
              modelValue: checked1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked1.value = $event),
              label: "Option1",
              size: "large",
              border: ""
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_checkbox, {
              modelValue: checked2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => checked2.value = $event),
              label: "Option2",
              size: "large",
              border: ""
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_checkbox, {
              modelValue: checked3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => checked3.value = $event),
              label: "Option1",
              border: ""
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_checkbox, {
              modelValue: checked4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => checked4.value = $event),
              label: "Option2",
              border: ""
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup1.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => checkboxGroup1.value = $event),
              size: "small"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_checkbox, {
                  label: "Option1",
                  value: "Value1",
                  border: ""
                }),
                _createVNode(_component_el_checkbox, {
                  label: "Option2",
                  value: "Value2",
                  border: ""
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_checkbox_group, {
              modelValue: checkboxGroup1.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => checkboxGroup1.value = $event),
              size: "small"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_checkbox, {
                  label: "Option1",
                  value: "Value1",
                  border: "",
                  disabled: ""
                }),
                _createVNode(_component_el_checkbox, {
                  label: "Option2",
                  value: "Value2",
                  border: "",
                  disabled: ""
                })
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
];
