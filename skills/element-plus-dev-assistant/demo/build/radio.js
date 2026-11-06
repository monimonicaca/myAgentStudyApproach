window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["radio"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "mb-2 ml-4" };
const _hoisted_2 = { class: "my-2 ml-4" };
const _hoisted_3 = { class: "my-4 ml-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const radio1 = ref("1");
    const radio2 = ref("1");
    const radio3 = ref("1");
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio1.value = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  size: "large"
                }, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Option 1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  size: "large"
                }, {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Option 2",
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
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => radio2.value = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, { value: "1" }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Option 1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, { value: "2" }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      "Option 2",
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
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => radio3.value = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  size: "small"
                }, {
                  default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                    _createTextVNode(
                      "Option 1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  size: "small"
                }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      "Option 2",
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
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const radio = ref("selected and disabled");
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio, {
            modelValue: radio.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio.value = $event),
            disabled: "",
            value: "disabled"
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Option A",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_radio, {
            modelValue: radio.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => radio.value = $event),
            disabled: "",
            value: "selected and disabled"
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                " Option B ",
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
  { title: "单选框组", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const radio = ref(3);
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createBlock(_component_el_radio_group, {
        modelValue: radio.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio.value = $event)
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_radio, { value: 3 }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Option A",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_radio, { value: 6 }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Option B",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_radio, { value: 9 }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Option C",
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
  { title: "带有边框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const _hoisted_2 = { style: { "margin-top": "20px" } };
const _hoisted_3 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const radio1 = ref("1");
    const radio2 = ref("1");
    const radio3 = ref("1");
    const radio4 = ref("1");
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio1.value = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  size: "large",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Option A",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  size: "large",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Option B",
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
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => radio2.value = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      "Option A",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                    _createTextVNode(
                      "Option B",
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
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => radio3.value = $event),
              size: "small"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      "Option A",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  border: "",
                  disabled: ""
                }, {
                  default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                    _createTextVNode(
                      "Option B",
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
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => radio4.value = $event),
              size: "small",
              disabled: ""
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, {
                  value: "1",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "Option A",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, {
                  value: "2",
                  border: ""
                }, {
                  default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                    _createTextVNode(
                      "Option B",
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
  { title: "Options 属性 2.11.2", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const radio = ref(3);
    const props = { value: "id", label: "name", disabled: "unable" };
    const options = [
      {
        id: 3,
        name: "Option A"
      },
      {
        id: 6,
        name: "Option B"
      },
      {
        id: 9,
        name: "Option C",
        unable: true
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createBlock(_component_el_radio_group, {
        modelValue: radio.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio.value = $event),
        options,
        props
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "单选按钮", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const _hoisted_2 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const radio = ref("New York");
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => radio.value = $event),
              size: "large",
              fill: "#409eff"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, {
                  label: "New York",
                  value: "New York"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Washington",
                  value: "Washington"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Los Angeles",
                  value: "Los Angeles"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Chicago",
                  value: "Chicago"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => radio.value = $event),
              "text-color": "#fff",
              fill: "#6c6cff"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, {
                  label: "New York",
                  value: "New York"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Washington",
                  value: "Washington"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Los Angeles",
                  value: "Los Angeles"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Chicago",
                  value: "Chicago"
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_radio_group, {
              modelValue: radio.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => radio.value = $event),
              size: "small"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, {
                  label: "New York",
                  value: "New York"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Washington",
                  value: "Washington",
                  disabled: ""
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Los Angeles",
                  value: "Los Angeles"
                }),
                _createVNode(_component_el_radio_button, {
                  label: "Chicago",
                  value: "Chicago"
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
