window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["skeleton"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-skeleton />\n\n  <br />\n\n  <el-skeleton style=\"--el-skeleton-circle-size: 100px\">\n\n    <template #template>\n\n      <el-skeleton-item variant=\"circle\" />\n\n    </template>\n\n  </el-skeleton>\n\n" } },
  { title: "更多参数", css: "", comp: { template: "\n\n  <el-skeleton :rows=\"5\" />\n\n" } },
  { title: "动画效果", css: "", comp: { template: "\n\n  <el-skeleton :rows=\"5\" animated />\n\n" } },
  { title: "自定义样式", css: "", comp: { template: "\n\n  <el-skeleton style=\"width: 240px\">\n\n    <template #template>\n\n      <el-skeleton-item variant=\"image\" style=\"width: 240px; height: 240px\" />\n\n      <div style=\"padding: 14px\">\n\n        <el-skeleton-item variant=\"p\" style=\"width: 50%\" />\n\n        <div\n\n          style=\"\n\n            display: flex;\n\n            align-items: center;\n\n            justify-items: space-between;\n\n          \"\n\n        >\n\n          <el-skeleton-item variant=\"text\" style=\"margin-right: 16px\" />\n\n          <el-skeleton-item variant=\"text\" style=\"width: 30%\" />\n\n        </div>\n\n      </div>\n\n    </template>\n\n  </el-skeleton>\n\n" } },
  { title: "加载状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "padding": "14px" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } };
const _hoisted_3 = { style: { "padding": "14px" } };
const _hoisted_4 = { class: "bottom card-header" };
const _hoisted_5 = { class: "time" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const loading = ref(true);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_skeleton = _resolveComponent("el-skeleton");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        direction: "vertical",
        alignment: "flex-start"
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", null, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "label",
              { style: { "margin-right": "16px" } },
              "Switch Loading",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_switch, {
              modelValue: loading.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loading.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createVNode(_component_el_skeleton, {
            style: { "width": "240px" },
            loading: loading.value,
            animated: ""
          }, {
            template: _withCtx(() => [
              _createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "240px" }
              }),
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                default: _withCtx(() => [
                  _cache[4] || (_cache[4] = _createElementVNode(
                    "img",
                    {
                      src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                      class: "image"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode("div", _hoisted_3, [
                    _cache[3] || (_cache[3] = _createElementVNode(
                      "span",
                      null,
                      "Delicious hamburger",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("div", _hoisted_4, [
                      _createElementVNode(
                        "div",
                        _hoisted_5,
                        _toDisplayString(_unref(currentDate)),
                        1
                        /* TEXT */
                      ),
                      _createVNode(_component_el_button, {
                        text: "",
                        class: "button"
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
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "渲染多条数据", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, unref: _unref, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "flex": "1" } };
const _hoisted_2 = { style: { "padding": "14px" } };
const _hoisted_3 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } };
const _hoisted_4 = ["src"];
const _hoisted_5 = { style: { "padding": "14px" } };
const _hoisted_6 = { class: "bottom card-header" };
const _hoisted_7 = { class: "time" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const loading = ref(true);
    const lists = ref([]);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    const setLoading = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2e3);
    };
    onMounted(() => {
      loading.value = false;
      lists.value = [
        {
          imgUrl: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          name: "Deer"
        },
        {
          imgUrl: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          name: "Horse"
        },
        {
          imgUrl: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          name: "Mountain Lion"
        }
      ];
    });
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_skeleton = _resolveComponent("el-skeleton");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        style: { "width": "100%" },
        fill: ""
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", null, [
            _createVNode(_component_el_button, { onClick: setLoading }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "Click me to reload",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(_component_el_skeleton, {
            style: { "display": "flex", "gap": "8px" },
            loading: loading.value,
            animated: "",
            count: 3
          }, {
            template: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_skeleton_item, {
                  variant: "image",
                  style: { "height": "240px" }
                }),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_skeleton_item, {
                    variant: "h3",
                    style: { "width": "50%" }
                  }),
                  _createElementVNode("div", _hoisted_3, [
                    _createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "margin-right": "16px" }
                    }),
                    _createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "width": "30%" }
                    })
                  ])
                ])
              ])
            ]),
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(lists.value, (item) => {
                  return _openBlock(), _createBlock(
                    _component_el_card,
                    {
                      key: item.name,
                      "body-style": { padding: "0px", marginBottom: "1px" }
                    },
                    {
                      default: _withCtx(() => [
                        _createElementVNode("img", {
                          src: item.imgUrl,
                          class: "image multi-content",
                          style: { "max-width": "100%" }
                        }, null, 8, _hoisted_4),
                        _createElementVNode("div", _hoisted_5, [
                          _createElementVNode(
                            "span",
                            null,
                            _toDisplayString(item.name),
                            1
                            /* TEXT */
                          ),
                          _createElementVNode("div", _hoisted_6, [
                            _createElementVNode(
                              "div",
                              _hoisted_7,
                              _toDisplayString(_unref(currentDate)),
                              1
                              /* TEXT */
                            ),
                            _createVNode(_component_el_button, {
                              text: "",
                              class: "button"
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
                        ])
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
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "防止渲染抖动", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "padding": "14px" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } };
const _hoisted_3 = { style: { "padding": "14px" } };
const _hoisted_4 = { class: "bottom card-header" };
const _hoisted_5 = { class: "time" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const loading = ref(false);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_skeleton = _resolveComponent("el-skeleton");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        direction: "vertical",
        alignment: "flex-start"
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", null, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "label",
              { style: { "margin-right": "16px" } },
              "Switch Loading",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_switch, {
              modelValue: loading.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loading.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createVNode(_component_el_skeleton, {
            style: { "width": "240px" },
            loading: loading.value,
            animated: "",
            throttle: 500
          }, {
            template: _withCtx(() => [
              _createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "265px" }
              }),
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                default: _withCtx(() => [
                  _cache[4] || (_cache[4] = _createElementVNode(
                    "img",
                    {
                      src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                      class: "image"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode("div", _hoisted_3, [
                    _cache[3] || (_cache[3] = _createElementVNode(
                      "span",
                      null,
                      "Delicious hamburger",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("div", _hoisted_4, [
                      _createElementVNode(
                        "div",
                        _hoisted_5,
                        _toDisplayString(_unref(currentDate)),
                        1
                        /* TEXT */
                      ),
                      _createVNode(_component_el_button, {
                        text: "",
                        class: "button"
                      }, {
                        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                          _createTextVNode(
                            "operation button",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "初始渲染加载 2.8.8", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "padding": "14px" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } };
const _hoisted_3 = { style: { "padding": "14px" } };
const _hoisted_4 = { class: "bottom card-header" };
const _hoisted_5 = { class: "time" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const loading = ref(true);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_skeleton = _resolveComponent("el-skeleton");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        direction: "vertical",
        alignment: "flex-start"
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", null, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "label",
              { style: { "margin-right": "16px" } },
              "Switch Loading",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_switch, {
              modelValue: loading.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loading.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createVNode(_component_el_skeleton, {
            style: { "width": "240px" },
            loading: loading.value,
            animated: "",
            throttle: { leading: 500, initVal: true }
          }, {
            template: _withCtx(() => [
              _createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "265px" }
              }),
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                default: _withCtx(() => [
                  _cache[4] || (_cache[4] = _createElementVNode(
                    "img",
                    {
                      src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                      class: "image"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode("div", _hoisted_3, [
                    _cache[3] || (_cache[3] = _createElementVNode(
                      "span",
                      null,
                      "Delicious hamburger",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("div", _hoisted_4, [
                      _createElementVNode(
                        "div",
                        _hoisted_5,
                        _toDisplayString(_unref(currentDate)),
                        1
                        /* TEXT */
                      ),
                      _createVNode(_component_el_button, {
                        text: "",
                        class: "button"
                      }, {
                        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                          _createTextVNode(
                            "operation button",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "切换显示/隐藏时避免渲染抖动 2.8.8", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "padding": "14px" } };
const _hoisted_2 = { style: { "display": "flex", "align-items": "center", "justify-items": "space-between", "margin-top": "16px", "height": "16px" } };
const _hoisted_3 = { style: { "padding": "14px" } };
const _hoisted_4 = { class: "bottom card-header" };
const _hoisted_5 = { class: "time" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const loading = ref(false);
    const currentDate = (/* @__PURE__ */ new Date()).toDateString();
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_skeleton_item = _resolveComponent("el-skeleton-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_skeleton = _resolveComponent("el-skeleton");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, {
        direction: "vertical",
        alignment: "flex-start"
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", null, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "label",
              { style: { "margin-right": "16px" } },
              "Switch Loading",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_switch, {
              modelValue: loading.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loading.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createVNode(_component_el_skeleton, {
            style: { "width": "240px" },
            loading: loading.value,
            animated: "",
            throttle: { leading: 500, trailing: 500, initVal: true }
          }, {
            template: _withCtx(() => [
              _createVNode(_component_el_skeleton_item, {
                variant: "image",
                style: { "width": "240px", "height": "265px" }
              }),
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_skeleton_item, {
                  variant: "h3",
                  style: { "width": "50%" }
                }),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "margin-right": "16px" }
                  }),
                  _createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_card, { "body-style": { padding: "0px", marginBottom: "1px" } }, {
                default: _withCtx(() => [
                  _cache[4] || (_cache[4] = _createElementVNode(
                    "img",
                    {
                      src: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                      class: "image"
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode("div", _hoisted_3, [
                    _cache[3] || (_cache[3] = _createElementVNode(
                      "span",
                      null,
                      "Delicious hamburger",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("div", _hoisted_4, [
                      _createElementVNode(
                        "div",
                        _hoisted_5,
                        _toDisplayString(_unref(currentDate)),
                        1
                        /* TEXT */
                      ),
                      _createVNode(_component_el_button, {
                        text: "",
                        class: "button"
                      }, {
                        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                          _createTextVNode(
                            "operation button",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
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
