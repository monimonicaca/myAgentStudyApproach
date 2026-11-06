window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["badge"] = [
  { title: "基础用法", css: "\n.item[data-v-x5dl5o] {\n\n  margin-top: 10px;\n\n  margin-right: 30px;\n}\n.el-dropdown[data-v-x5dl5o] {\n\n  margin-top: 1.1rem;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "el-dropdown-link" };
const { CaretBottom } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_badge = _resolveComponent("el-badge");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_badge, {
            value: 12,
            class: "item"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    "comments",
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
          }),
          _createVNode(_component_el_badge, {
            value: 3,
            class: "item"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "replies",
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
          }),
          _createVNode(_component_el_badge, {
            value: 1,
            class: "item",
            type: "primary"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "comments",
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
          }),
          _createVNode(_component_el_badge, {
            value: 2,
            class: "item",
            type: "warning"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "replies",
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
          }),
          _createVNode(_component_el_badge, {
            value: 1,
            class: "item",
            color: "green"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "custom background",
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
          }),
          _createVNode(_component_el_dropdown, { trigger: "click" }, {
            dropdown: _withCtx(() => [
              _createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_dropdown_item, { class: "clearfix" }, {
                    default: _withCtx(() => [
                      _cache[6] || (_cache[6] = _createTextVNode(
                        " comments ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_badge, {
                        class: "mark",
                        value: 12
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_dropdown_item, { class: "clearfix" }, {
                    default: _withCtx(() => [
                      _cache[7] || (_cache[7] = _createTextVNode(
                        " replies ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_badge, {
                        class: "mark",
                        value: 3
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            default: _withCtx(() => [
              _createElementVNode("span", _hoisted_1, [
                _cache[5] || (_cache[5] = _createTextVNode(
                  " Click Me ",
                  -1
                  /* CACHED */
                )),
                _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(CaretBottom))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
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
  { title: "最大值", css: "\n.item {\n\n  margin-top: 10px;\n\n  margin-right: 40px;\n}\n\n\n", comp: { template: "\n\n  <el-badge :value=\"200\" :max=\"99\" class=\"item\">\n\n    <el-button>comments</el-button>\n\n  </el-badge>\n\n  <el-badge :value=\"100\" :max=\"10\" class=\"item\">\n\n    <el-button>replies</el-button>\n\n  </el-badge>\n\n" } },
  { title: "自定义显示内容", css: "\n.item[data-v-x6h6ce] {\n\n  margin-top: 10px;\n\n  margin-right: 40px;\n}\n.custom-content[data-v-x6h6ce] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  gap: 4px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "custom-content" };
const { Message } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_badge = _resolveComponent("el-badge");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_badge, {
            value: "new",
            class: "item"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    "comments",
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
          }),
          _createVNode(_component_el_badge, {
            value: "hot",
            class: "item"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "replies",
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
          }),
          _createVNode(_component_el_badge, {
            value: "99",
            class: "item"
          }, {
            content: _withCtx(({ value }) => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_icon, null, {
                  default: _withCtx(() => [
                    _createVNode(_unref(Message))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode(
                  "span",
                  null,
                  _toDisplayString(value),
                  1
                  /* TEXT */
                )
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "share",
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
  { title: "小红点", css: "\n.item[data-v-x70yxr] {\n\n  margin-top: 10px;\n\n  margin-right: 40px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { Share } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = _resolveComponent("el-badge");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_badge, {
            "is-dot": "",
            class: "item"
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "query",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_badge, {
            "is-dot": "",
            class: "item"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                class: "share-button",
                icon: _unref(Share),
                type: "primary"
              }, null, 8, ["icon"])
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
  { title: "偏移量 2.7.0", css: "\n.item {\n\n  margin-top: 10px;\n\n  margin-right: 30px;\n}\n\n\n", comp: { template: "\n\n  <el-badge class=\"item\" :value=\"1\" :offset=\"[10, 5]\">\n\n    <el-button> offset</el-button>\n\n  </el-badge>\n\n" } },
];
