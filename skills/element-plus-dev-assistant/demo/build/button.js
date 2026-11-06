window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["button"] = [
  { title: "基础用法", css: "\n.button-example[data-v-2esvv9] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 1rem;\n}\n.button-row[data-v-2esvv9] {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 1rem;\n\n  align-items: center;\n}\n.button-row[data-v-2esvv9] > * {\n\n  margin: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, unref: _unref, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "button-example" };
const _hoisted_2 = { class: "button-row" };
const _hoisted_3 = { class: "button-row" };
const _hoisted_4 = { class: "button-row" };
const _hoisted_5 = { class: "button-row" };
const _hoisted_6 = { class: "button-row" };
const { Check, Delete, Edit, Message, Search, Star } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_button, null, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Default",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { type: "primary" }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Primary",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { type: "success" }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Success",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { type: "info" }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Info",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { type: "warning" }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                "Warning",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { type: "danger" }, {
            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createTextVNode(
                "Danger",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_button, { plain: "" }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                "Plain",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "primary",
            plain: ""
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                "Primary",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "success",
            plain: ""
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                "Success",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "info",
            plain: ""
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                "Info",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "warning",
            plain: ""
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                "Warning",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "danger",
            plain: ""
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                "Danger",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_el_button, { round: "" }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                "Round",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "primary",
            round: ""
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                "Primary",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "success",
            round: ""
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createTextVNode(
                "Success",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "info",
            round: ""
          }, {
            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
              _createTextVNode(
                "Info",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "warning",
            round: ""
          }, {
            default: _withCtx(() => [..._cache[16] || (_cache[16] = [
              _createTextVNode(
                "Warning",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "danger",
            round: ""
          }, {
            default: _withCtx(() => [..._cache[17] || (_cache[17] = [
              _createTextVNode(
                "Danger",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _createElementVNode("div", _hoisted_5, [
          _createVNode(_component_el_button, { dashed: "" }, {
            default: _withCtx(() => [..._cache[18] || (_cache[18] = [
              _createTextVNode(
                "Dashed",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "primary",
            dashed: ""
          }, {
            default: _withCtx(() => [..._cache[19] || (_cache[19] = [
              _createTextVNode(
                "Primary",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "success",
            dashed: ""
          }, {
            default: _withCtx(() => [..._cache[20] || (_cache[20] = [
              _createTextVNode(
                "Success",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "info",
            dashed: ""
          }, {
            default: _withCtx(() => [..._cache[21] || (_cache[21] = [
              _createTextVNode(
                "Info",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "warning",
            dashed: ""
          }, {
            default: _withCtx(() => [..._cache[22] || (_cache[22] = [
              _createTextVNode(
                "Warning",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "danger",
            dashed: ""
          }, {
            default: _withCtx(() => [..._cache[23] || (_cache[23] = [
              _createTextVNode(
                "Danger",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        _createElementVNode("div", _hoisted_6, [
          _createVNode(_component_el_button, {
            icon: _unref(Search),
            circle: ""
          }, null, 8, ["icon"]),
          _createVNode(_component_el_button, {
            type: "primary",
            icon: _unref(Edit),
            circle: ""
          }, null, 8, ["icon"]),
          _createVNode(_component_el_button, {
            type: "success",
            icon: _unref(Check),
            circle: ""
          }, null, 8, ["icon"]),
          _createVNode(_component_el_button, {
            type: "info",
            icon: _unref(Message),
            circle: ""
          }, null, 8, ["icon"]),
          _createVNode(_component_el_button, {
            type: "warning",
            icon: _unref(Star),
            circle: ""
          }, null, 8, ["icon"]),
          _createVNode(_component_el_button, {
            type: "danger",
            icon: _unref(Delete),
            circle: ""
          }, null, 8, ["icon"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用状态", css: "\n.button-example {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 1rem;\n}\n.button-row {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 1rem;\n\n  align-items: center;\n}\n.button-row > * {\n\n  margin: 0;\n}\n\n\n", comp: { template: "\n\n  <div class=\"button-example\">\n\n    <div class=\"button-row\">\n\n      <el-button disabled>Default</el-button>\n\n      <el-button type=\"primary\" disabled>Primary</el-button>\n\n      <el-button type=\"success\" disabled>Success</el-button>\n\n      <el-button type=\"info\" disabled>Info</el-button>\n\n      <el-button type=\"warning\" disabled>Warning</el-button>\n\n      <el-button type=\"danger\" disabled>Danger</el-button>\n\n    </div>\n\n    <div class=\"button-row\">\n\n      <el-button plain disabled>Plain</el-button>\n\n      <el-button type=\"primary\" plain disabled>Primary</el-button>\n\n      <el-button type=\"success\" plain disabled>Success</el-button>\n\n      <el-button type=\"info\" plain disabled>Info</el-button>\n\n      <el-button type=\"warning\" plain disabled>Warning</el-button>\n\n      <el-button type=\"danger\" plain disabled>Danger</el-button>\n\n    </div>\n\n  </div>\n\n" } },
  { title: "链接按钮", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "mb-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const buttons = [
      { type: "", text: "plain" },
      { type: "primary", text: "primary" },
      { type: "success", text: "success" },
      { type: "info", text: "info" },
      { type: "warning", text: "warning" },
      { type: "danger", text: "danger" }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[0] || (_cache[0] = _createElementVNode(
            "p",
            null,
            "Basic link button",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(buttons, (button) => {
                return _createVNode(_component_el_button, {
                  key: button.text,
                  type: button.type,
                  link: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(button.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _cache[1] || (_cache[1] = _createElementVNode(
            "p",
            null,
            "Disabled link button",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", null, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(buttons, (button) => {
                return _createVNode(_component_el_button, {
                  key: button.text,
                  type: button.type,
                  link: "",
                  disabled: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(button.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
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
  { title: "文字按钮", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "mb-4" };
const _hoisted_2 = { class: "mb-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const buttons = [
      { type: "", text: "plain" },
      { type: "primary", text: "primary" },
      { type: "success", text: "success" },
      { type: "info", text: "info" },
      { type: "warning", text: "warning" },
      { type: "danger", text: "danger" }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[0] || (_cache[0] = _createElementVNode(
            "p",
            null,
            "Basic text button",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(buttons, (button) => {
                return _createVNode(_component_el_button, {
                  key: button.text,
                  type: button.type,
                  text: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(button.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _cache[1] || (_cache[1] = _createElementVNode(
            "p",
            null,
            "Background color always on",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(buttons, (button) => {
                return _createVNode(_component_el_button, {
                  key: button.text,
                  type: button.type,
                  text: "",
                  bg: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(button.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "p",
            null,
            "Disabled text button",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", null, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(buttons, (button) => {
                return _createVNode(_component_el_button, {
                  key: button.text,
                  type: button.type,
                  text: "",
                  disabled: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(button.text),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
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
  { title: "图标按钮", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { Delete, Edit, Search, Share, Upload } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_button, {
          type: "primary",
          icon: _unref(Edit)
        }, null, 8, ["icon"]),
        _createVNode(_component_el_button, {
          type: "primary",
          icon: _unref(Share)
        }, null, 8, ["icon"]),
        _createVNode(_component_el_button, {
          type: "primary",
          icon: _unref(Delete)
        }, null, 8, ["icon"]),
        _createVNode(_component_el_button, {
          type: "primary",
          icon: _unref(Search)
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Search",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["icon"]),
        _createVNode(_component_el_button, { type: "primary" }, {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createTextVNode(
              " Upload",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_icon, { class: "el-icon--right" }, {
              default: _withCtx(() => [
                _createVNode(_unref(Upload))
              ]),
              _: 1
              /* STABLE */
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
  { title: "按钮组", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ArrowLeft, ArrowRight, House, Notification, Operation } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const direction = ref("horizontal");
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_button_group = _resolveComponent("el-button-group");
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button_group, { class: "mb-4" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                icon: _unref(ArrowLeft)
              }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Previous Page",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["icon"]),
              _createVNode(_component_el_button, { type: "primary" }, {
                default: _withCtx(() => [
                  _cache[2] || (_cache[2] = _createTextVNode(
                    " Next Page",
                    -1
                    /* CACHED */
                  )),
                  _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ArrowRight))
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
          }),
          _cache[5] || (_cache[5] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_radio_group, {
            modelValue: direction.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => direction.value = $event),
            class: "mb-2"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio, { value: "horizontal" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Horizontal",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "vertical" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Vertical",
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
          _cache[6] || (_cache[6] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_button_group, { direction: direction.value }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                icon: _unref(House)
              }, null, 8, ["icon"]),
              _createVNode(_component_el_button, {
                type: "primary",
                icon: _unref(Operation)
              }, null, 8, ["icon"]),
              _createVNode(_component_el_button, {
                type: "primary",
                icon: _unref(Notification)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["direction"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "加载状态按钮", css: "\n.el-button .custom-loading .circular[data-v-2bi4b3] {\n\n  margin-right: 6px;\n\n  width: 18px;\n\n  height: 18px;\n\n  animation: loading-rotate 2s linear infinite;\n}\n.el-button .custom-loading .circular .path[data-v-2bi4b3] {\n\n  animation: loading-dash 1.5s ease-in-out infinite;\n\n  stroke-dasharray: 90, 150;\n\n  stroke-dashoffset: 0;\n\n  stroke-width: 2;\n\n  stroke: var(--el-button-text-color);\n\n  stroke-linecap: round;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { Eleme } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            loading: ""
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Loading",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "primary",
            "loading-icon": _unref(Eleme),
            loading: ""
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Loading",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["loading-icon"]),
          _createVNode(_component_el_button, {
            type: "primary",
            loading: ""
          }, {
            loading: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createElementVNode(
                "div",
                { class: "custom-loading" },
                [
                  _createElementVNode("svg", {
                    class: "circular",
                    viewBox: "-10, -10, 50, 50"
                  }, [
                    _createElementVNode("path", {
                      class: "path",
                      d: "\n\n            M 30 15\n\n            L 28 17\n\n            M 25.61 25.61\n\n            A 15 15, 0, 0, 1, 15 30\n\n            A 15 15, 0, 1, 1, 27.99 7.5\n\n            L 15 15\n\n          ",
                      style: { "stroke-width": "4px", "fill": "rgba(0, 0, 0, 0)" }
                    })
                  ])
                ],
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _cache[3] || (_cache[3] = _createTextVNode(
                " Loading ",
                -1
                /* CACHED */
              ))
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
  { title: "调整尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap items-center mb-4" };
const _hoisted_2 = { class: "flex flex-wrap items-center mb-4" };
const _hoisted_3 = { class: "flex flex-wrap items-center" };
const { Search } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, { size: "large" }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "Large",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, null, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  "Default",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, { size: "small" }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  "Small",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              size: "large",
              icon: _unref(Search)
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            _createVNode(_component_el_button, { icon: _unref(Search) }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            _createVNode(_component_el_button, {
              size: "small",
              icon: _unref(Search)
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_button, {
              size: "large",
              round: ""
            }, {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode(
                  "Large",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, { round: "" }, {
              default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode(
                  "Default",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              size: "small",
              round: ""
            }, {
              default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                _createTextVNode(
                  "Small",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              size: "large",
              icon: _unref(Search),
              round: ""
            }, {
              default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            _createVNode(_component_el_button, {
              icon: _unref(Search),
              round: ""
            }, {
              default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            _createVNode(_component_el_button, {
              size: "small",
              icon: _unref(Search),
              round: ""
            }, {
              default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                _createTextVNode(
                  "Search",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_button, {
              icon: _unref(Search),
              size: "large",
              circle: ""
            }, null, 8, ["icon"]),
            _createVNode(_component_el_button, {
              icon: _unref(Search),
              circle: ""
            }, null, 8, ["icon"]),
            _createVNode(_component_el_button, {
              icon: _unref(Search),
              size: "small",
              circle: ""
            }, null, 8, ["icon"])
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
  { title: "Tag 2.3.4", css: "", comp: { template: "\n\n  <el-button>button</el-button>\n\n  <el-button tag=\"div\" role=\"button\" tabindex=\"0\">div</el-button>\n\n  <el-button\n\n    type=\"primary\"\n\n    tag=\"a\"\n\n    href=\"https://github.com/element-plus/element-plus\"\n\n    target=\"_blank\"\n\n    rel=\"noopener noreferrer\"\n\n  >\n\n    a\n\n  </el-button>\n\n" } },
  { title: "自定义颜色 beta", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const isDark = false;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark)
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Default",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          plain: ""
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              "Plain",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          link: ""
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              "Link",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          text: ""
        }, {
          default: _withCtx(() => [..._cache[3] || (_cache[3] = [
            _createTextVNode(
              "Text",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          text: "",
          bg: ""
        }, {
          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
            _createTextVNode(
              "Text BG",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          disabled: ""
        }, {
          default: _withCtx(() => [..._cache[5] || (_cache[5] = [
            _createTextVNode(
              "Disabled",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          disabled: "",
          plain: ""
        }, {
          default: _withCtx(() => [..._cache[6] || (_cache[6] = [
            _createTextVNode(
              " Disabled Plain ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          disabled: "",
          link: ""
        }, {
          default: _withCtx(() => [..._cache[7] || (_cache[7] = [
            _createTextVNode(
              " Disabled Link ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          disabled: "",
          text: ""
        }, {
          default: _withCtx(() => [..._cache[8] || (_cache[8] = [
            _createTextVNode(
              " Disabled Text ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"]),
        _createVNode(_component_el_button, {
          color: "#626aef",
          dark: _unref(isDark),
          disabled: "",
          text: "",
          bg: ""
        }, {
          default: _withCtx(() => [..._cache[9] || (_cache[9] = [
            _createTextVNode(
              " Disabled Text BG ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["dark"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
