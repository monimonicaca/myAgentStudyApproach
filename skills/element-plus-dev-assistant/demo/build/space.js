window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["space"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-space wrap>\n\n    <el-card v-for=\"i in 3\" :key=\"i\" class=\"box-card\" style=\"width: 250px\">\n\n      <template #header>\n\n        <div class=\"card-header\">\n\n          <span>Card name</span>\n\n          <el-button class=\"button\" text>Operation button</el-button>\n\n        </div>\n\n      </template>\n\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n\n        {{ 'List item ' + o }}\n\n      </div>\n\n    </el-card>\n\n  </el-space>\n\n" } },
  { title: "垂直布局", css: "", comp: { template: "\n\n  <el-space direction=\"vertical\">\n\n    <el-card v-for=\"i in 2\" :key=\"i\" class=\"box-card\" style=\"width: 250px\">\n\n      <template #header>\n\n        <div class=\"card-header\">\n\n          <span>Card name</span>\n\n          <el-button class=\"button\" text>Operation button</el-button>\n\n        </div>\n\n      </template>\n\n      <div v-for=\"o in 4\" :key=\"o\" class=\"text item\">\n\n        {{ 'List item ' + o }}\n\n      </div>\n\n    </el-card>\n\n  </el-space>\n\n" } },
  { title: "控制间距的大小", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "card-header" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const size = ref("default");
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        direction: "vertical",
        alignment: "start",
        size: 30
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_radio_group, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio, { value: "large" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Large",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "default" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "small" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Small",
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
          _createVNode(_component_el_space, {
            wrap: "",
            size: size.value
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createElementBlock(
                _Fragment,
                null,
                _renderList(3, (i) => {
                  return _createVNode(_component_el_card, {
                    key: i,
                    class: "box-card",
                    style: { "width": "250px" }
                  }, {
                    header: _withCtx(() => [
                      _createElementVNode("div", _hoisted_1, [
                        _cache[5] || (_cache[5] = _createElementVNode(
                          "span",
                          null,
                          "Card name",
                          -1
                          /* CACHED */
                        )),
                        _createVNode(_component_el_button, {
                          class: "button",
                          text: ""
                        }, {
                          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                            _createTextVNode(
                              "Operation button",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    default: _withCtx(() => [
                      (_openBlock(), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(4, (o) => {
                          return _createElementVNode(
                            "div",
                            {
                              key: o,
                              class: "text item"
                            },
                            _toDisplayString("List item " + o),
                            1
                            /* TEXT */
                          );
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  });
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义 Size", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, toDisplayString: _toDisplayString } = Vue;
const _hoisted_1 = { class: "card-header" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const size = ref(20);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_slider, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event)
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_space, {
            wrap: "",
            size: size.value
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createElementBlock(
                _Fragment,
                null,
                _renderList(2, (i) => {
                  return _createVNode(_component_el_card, {
                    key: i,
                    class: "box-card",
                    style: { "width": "250px" }
                  }, {
                    header: _withCtx(() => [
                      _createElementVNode("div", _hoisted_1, [
                        _cache[2] || (_cache[2] = _createElementVNode(
                          "span",
                          null,
                          "Card name",
                          -1
                          /* CACHED */
                        )),
                        _createVNode(_component_el_button, {
                          class: "button",
                          text: ""
                        }, {
                          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                            _createTextVNode(
                              "Operation button",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    default: _withCtx(() => [
                      (_openBlock(), _createElementBlock(
                        _Fragment,
                        null,
                        _renderList(4, (o) => {
                          return _createElementVNode(
                            "div",
                            {
                              key: o,
                              class: "text item"
                            },
                            _toDisplayString("List item " + o),
                            1
                            /* TEXT */
                          );
                        }),
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  });
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["size"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自动换行", css: "", comp: { template: "\n\n  <el-space wrap>\n\n    <div v-for=\"i in 20\" :key=\"i\">\n\n      <el-button text> Text button </el-button>\n\n    </div>\n\n  </el-space>\n\n" } },
  { title: "字母数字类型分隔符", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const size = ref(10);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        size: size.value,
        spacer: "|"
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(2, (i) => {
              return _createElementVNode("div", { key: i }, [
                _createVNode(
                  _component_el_button,
                  null,
                  {
                    default: _withCtx(() => [
                      _createTextVNode(
                        " button " + _toDisplayString(i),
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
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["size"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "分隔符还可以是 VNode 类型", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, createBlock: _createBlock } = Vue;
const { h, ref } = Vue;
const { ElDivider } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const size = ref(10);
    const spacer = h(ElDivider, { direction: "vertical" });
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        size: size.value,
        spacer: _unref(spacer)
      }, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(2, (i) => {
              return _createElementVNode("div", { key: i }, [
                _createVNode(
                  _component_el_button,
                  null,
                  {
                    default: _withCtx(() => [
                      _createTextVNode(
                        " button " + _toDisplayString(i),
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
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["size", "spacer"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对齐方式", css: "\n.alignment-container {\n\n  width: 240px;\n\n  margin-bottom: 20px;\n\n  padding: 8px;\n\n  border: 1px solid var(--el-border-color);\n}\n\n\n", comp: { template: "\n\n  <div class=\"alignment-container\">\n\n    <el-space>\n\n      string\n\n      <el-button> button </el-button>\n\n      <el-card>\n\n        <template #header> header </template>\n\n        body\n\n      </el-card>\n\n    </el-space>\n\n  </div>\n\n  <div class=\"alignment-container\">\n\n    <el-space alignment=\"flex-start\">\n\n      string\n\n      <el-button> button </el-button>\n\n      <el-card>\n\n        <template #header> header </template>\n\n        body\n\n      </el-card>\n\n    </el-space>\n\n  </div>\n\n  <div class=\"alignment-container\">\n\n    <el-space alignment=\"flex-end\">\n\n      string\n\n      <el-button> button </el-button>\n\n      <el-card>\n\n        <template #header> header </template>\n\n        body\n\n      </el-card>\n\n    </el-space>\n\n  </div>\n\n" } },
  { title: "填充容器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, withCtx: _withCtx, toDisplayString: _toDisplayString } = Vue;
const _hoisted_1 = { style: { "margin-bottom": "15px" } };
const _hoisted_2 = { class: "card-header" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const fill = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createElementBlock("div", null, [
        _createElementVNode("div", _hoisted_1, [
          _cache[1] || (_cache[1] = _createTextVNode(
            "fill: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: fill.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => fill.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_space, {
          fill: fill.value,
          wrap: ""
        }, {
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(3, (i) => {
                return _createVNode(_component_el_card, {
                  key: i,
                  class: "box-card"
                }, {
                  header: _withCtx(() => [
                    _createElementVNode("div", _hoisted_2, [
                      _cache[3] || (_cache[3] = _createElementVNode(
                        "span",
                        null,
                        "Card name",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_button, {
                        class: "button",
                        text: ""
                      }, {
                        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                          _createTextVNode(
                            "Operation button",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  default: _withCtx(() => [
                    (_openBlock(), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(4, (o) => {
                        return _createElementVNode(
                          "div",
                          {
                            key: o,
                            class: "text item"
                          },
                          _toDisplayString("List item " + o),
                          1
                          /* TEXT */
                        );
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["fill"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "填充容器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString } = Vue;
const _hoisted_1 = { style: { "margin-bottom": "15px" } };
const _hoisted_2 = { style: { "margin-bottom": "15px" } };
const _hoisted_3 = { class: "card-header" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const direction = ref("horizontal");
    const fillRatio = ref(30);
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_slider = _resolveComponent("el-slider");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createElementBlock("div", null, [
        _createElementVNode("div", _hoisted_1, [
          _cache[5] || (_cache[5] = _createTextVNode(
            " direction: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_radio, {
            modelValue: direction.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => direction.value = $event),
            value: "horizontal"
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "horizontal",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_radio, {
            modelValue: direction.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => direction.value = $event),
            value: "vertical"
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "vertical",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_2, [
          _cache[6] || (_cache[6] = _createTextVNode(
            " fillRatio:",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_slider, {
            modelValue: fillRatio.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => fillRatio.value = $event)
          }, null, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_space, {
          fill: "",
          wrap: "",
          "fill-ratio": fillRatio.value,
          direction: direction.value,
          style: { "width": "100%" }
        }, {
          default: _withCtx(() => [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(5, (i) => {
                return _createVNode(_component_el_card, {
                  key: i,
                  class: "box-card"
                }, {
                  header: _withCtx(() => [
                    _createElementVNode("div", _hoisted_3, [
                      _cache[8] || (_cache[8] = _createElementVNode(
                        "span",
                        null,
                        "Card name",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_button, {
                        class: "button",
                        text: ""
                      }, {
                        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                          _createTextVNode(
                            "Operation button",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  default: _withCtx(() => [
                    (_openBlock(), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(4, (o) => {
                        return _createElementVNode(
                          "div",
                          {
                            key: o,
                            class: "text item"
                          },
                          _toDisplayString("List item " + o),
                          1
                          /* TEXT */
                        );
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["fill-ratio", "direction"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
