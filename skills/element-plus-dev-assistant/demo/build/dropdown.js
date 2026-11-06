window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["dropdown"] = [
  { title: "基础用法", css: "\n.example-showcase .el-dropdown-link[data-v-1yci46] {\n\n  cursor: pointer;\n\n  color: var(--el-color-primary);\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "el-dropdown-link" };
const { ArrowDown } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createBlock(_component_el_dropdown, null, {
        dropdown: _withCtx(() => [
          _createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Action 1",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Action 2",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Action 3",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { disabled: "" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Action 4",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { divided: "" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "Action 5",
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
        ]),
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_1, [
            _cache[0] || (_cache[0] = _createTextVNode(
              " Dropdown List ",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_icon, { class: "el-icon--right" }, {
              default: _withCtx(() => [
                _createVNode(_unref(ArrowDown))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "位置", css: "", comp: { template: "\n\n  <div class=\"flex flex-wrap items-center gap-4\">\n\n    <el-dropdown placement=\"top-start\">\n\n      <el-button> topStart </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n    <el-dropdown placement=\"top\">\n\n      <el-button> top </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n    <el-dropdown placement=\"top-end\">\n\n      <el-button> topEnd </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n    <el-dropdown placement=\"bottom-start\">\n\n      <el-button> bottomStart </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n    <el-dropdown placement=\"bottom\">\n\n      <el-button> bottom </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n    <el-dropdown placement=\"bottom-end\">\n\n      <el-button> bottomEnd </el-button>\n\n      <template #dropdown>\n\n        <el-dropdown-menu>\n\n          <el-dropdown-item>The Action 1st</el-dropdown-item>\n\n          <el-dropdown-item>The Action 2nd</el-dropdown-item>\n\n          <el-dropdown-item>The Action 3rd</el-dropdown-item>\n\n        </el-dropdown-menu>\n\n      </template>\n\n    </el-dropdown>\n\n  </div>\n\n" } },
  { title: "触发对象", css: "\n.example-showcase .el-dropdown + .el-dropdown[data-v-1x8wxg] {\n\n  margin-left: 15px;\n}\n.example-showcase .el-dropdown-link[data-v-1x8wxg] {\n\n  cursor: pointer;\n\n  color: var(--el-color-primary);\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap items-center" };
const { ArrowDown } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const handleClick = () => {
      alert("button click");
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_dropdown, null, {
          dropdown: _withCtx(() => [
            _createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                    _createTextVNode(
                      "Action 1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createTextVNode(
                      "Action 2",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Action 3",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Action 4",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Action 5",
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
          ]),
          default: _withCtx(() => [
            _createVNode(_component_el_button, { type: "primary" }, {
              default: _withCtx(() => [
                _cache[0] || (_cache[0] = _createTextVNode(
                  " Dropdown List",
                  -1
                  /* CACHED */
                )),
                _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(ArrowDown))
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
        _createVNode(_component_el_dropdown, {
          "split-button": "",
          type: "primary",
          onClick: handleClick
        }, {
          dropdown: _withCtx(() => [
            _createVNode(_component_el_dropdown_menu, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      "Action 1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                    _createTextVNode(
                      "Action 2",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      "Action 3",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, { divided: "" }, {
                  default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                    _createTextVNode(
                      "Action 4",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_dropdown_item, null, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "Action 5",
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
          ]),
          default: _withCtx(() => [
            _cache[11] || (_cache[11] = _createTextVNode(
              " Dropdown List ",
              -1
              /* CACHED */
            ))
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
  { title: "触发方式", css: "\n.block-col-2 .demonstration[data-v-1wp4c3] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n.block-col-2 .el-dropdown-link[data-v-1wp4c3] {\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "el-dropdown-link" };
const _hoisted_2 = { class: "el-dropdown-link" };
const _hoisted_3 = { class: "el-dropdown-link" };
const { ArrowDown, Check, CircleCheck, CirclePlus, CirclePlusFilled, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { class: "block-col-2" }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, { span: 8 }, {
            default: _withCtx(() => [
              _cache[6] || (_cache[6] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "hover to trigger",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_dropdown, null, {
                dropdown: _withCtx(() => [
                  _createVNode(_component_el_dropdown_menu, null, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Plus) }, {
                        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                          _createTextVNode(
                            "Action 1",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlusFilled) }, {
                        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                          _createTextVNode(
                            " Action 2 ",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlus) }, {
                        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                          _createTextVNode(
                            "Action 3",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Check) }, {
                        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                          _createTextVNode(
                            "Action 4",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CircleCheck) }, {
                        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                          _createTextVNode(
                            "Action 5",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                default: _withCtx(() => [
                  _createElementVNode("span", _hoisted_1, [
                    _cache[0] || (_cache[0] = _createTextVNode(
                      " Dropdown List",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ArrowDown))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, { span: 8 }, {
            default: _withCtx(() => [
              _cache[13] || (_cache[13] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "click to trigger",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_dropdown, { trigger: "click" }, {
                dropdown: _withCtx(() => [
                  _createVNode(_component_el_dropdown_menu, null, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Plus) }, {
                        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                          _createTextVNode(
                            "Action 1",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlusFilled) }, {
                        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                          _createTextVNode(
                            " Action 2 ",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlus) }, {
                        default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                          _createTextVNode(
                            "Action 3",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Check) }, {
                        default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                          _createTextVNode(
                            "Action 4",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CircleCheck) }, {
                        default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                          _createTextVNode(
                            "Action 5",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                default: _withCtx(() => [
                  _createElementVNode("span", _hoisted_2, [
                    _cache[7] || (_cache[7] = _createTextVNode(
                      " Dropdown List",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ArrowDown))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, { span: 8 }, {
            default: _withCtx(() => [
              _cache[20] || (_cache[20] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "right click to trigger",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_dropdown, { trigger: "contextmenu" }, {
                dropdown: _withCtx(() => [
                  _createVNode(_component_el_dropdown_menu, null, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Plus) }, {
                        default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                          _createTextVNode(
                            "Action 1",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlusFilled) }, {
                        default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                          _createTextVNode(
                            " Action 2 ",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlus) }, {
                        default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                          _createTextVNode(
                            "Action 3",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(Check) }, {
                        default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                          _createTextVNode(
                            "Action 4",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"]),
                      _createVNode(_component_el_dropdown_item, { icon: _unref(CircleCheck) }, {
                        default: _withCtx(() => [..._cache[19] || (_cache[19] = [
                          _createTextVNode(
                            "Action 5",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }, 8, ["icon"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                default: _withCtx(() => [
                  _createElementVNode("span", _hoisted_3, [
                    _cache[14] || (_cache[14] = _createTextVNode(
                      " Dropdown List",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_icon, { class: "el-icon--right" }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ArrowDown))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
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
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "菜单隐藏方式", css: "\n.example-showcase .el-dropdown + .el-dropdown[data-v-1w5bqq] {\n\n  margin-left: 15px;\n}\n.example-showcase .el-dropdown-link[data-v-1w5bqq] {\n\n  cursor: pointer;\n\n  color: var(--el-color-primary);\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "el-dropdown-link" };
const { ArrowDown } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createBlock(_component_el_dropdown, { "hide-on-click": false }, {
        dropdown: _withCtx(() => [
          _createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Action 1",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Action 2",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, null, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Action 3",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { disabled: "" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Action 4",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { divided: "" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "Action 5",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { divided: "" }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "Action 6",
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
        ]),
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_1, [
            _cache[0] || (_cache[0] = _createTextVNode(
              " Dropdown List",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_icon, { class: "el-icon--right" }, {
              default: _withCtx(() => [
                _createVNode(_unref(ArrowDown))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "指令事件", css: "\n.example-showcase .el-dropdown-link[data-v-1vlj5d] {\n\n  cursor: pointer;\n\n  color: var(--el-color-primary);\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "el-dropdown-link" };
const { ElMessage } = ElementPlus;
const { ArrowDown } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const handleCommand = (command) => {
      ElMessage(`click on item ${command}`);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createBlock(_component_el_dropdown, { onCommand: handleCommand }, {
        dropdown: _withCtx(() => [
          _createVNode(_component_el_dropdown_menu, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_dropdown_item, { command: "a" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Action 1",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { command: "b" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Action 2",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, { command: "c" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Action 3",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, {
                command: "d",
                disabled: ""
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Action 4",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_dropdown_item, {
                command: "e",
                divided: ""
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "Action 5",
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
        ]),
        default: _withCtx(() => [
          _createElementVNode("span", _hoisted_1, [
            _cache[0] || (_cache[0] = _createTextVNode(
              " Dropdown List",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_icon, { class: "el-icon--right" }, {
              default: _withCtx(() => [
                _createVNode(_unref(ArrowDown))
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "下拉方法", css: "\n.example-showcase .el-dropdown-link[data-v-1v1qk0] {\n\n  cursor: pointer;\n\n  color: var(--el-color-primary);\n\n  display: flex;\n\n  align-items: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin": "15px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const dropdown1 = ref();
    function handleVisible2(visible) {
      if (!dropdown1.value) return;
      if (visible) {
        dropdown1.value.handleClose();
      } else {
        dropdown1.value.handleOpen();
      }
    }
    function showClick() {
      if (!dropdown1.value) return;
      dropdown1.value.handleOpen();
    }
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[13] || (_cache[13] = _createElementVNode(
            "div",
            { style: { "font-size": "14px" } },
            [
              _createElementVNode("p", null, "open(close) the Dropdown list2 will close(open) the Dropdown List1.")
            ],
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, { onClick: showClick }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "show",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(
            _component_el_dropdown,
            {
              ref_key: "dropdown1",
              ref: dropdown1,
              trigger: "contextmenu",
              style: { "margin-right": "30px" }
            },
            {
              dropdown: _withCtx(() => [
                _createVNode(_component_el_dropdown_menu, null, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_dropdown_item, null, {
                      default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                        _createTextVNode(
                          "Action 1",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    }),
                    _createVNode(_component_el_dropdown_item, null, {
                      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                        _createTextVNode(
                          "Action 2",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    }),
                    _createVNode(_component_el_dropdown_item, null, {
                      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                        _createTextVNode(
                          "Action 3",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    }),
                    _createVNode(_component_el_dropdown_item, { disabled: "" }, {
                      default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                        _createTextVNode(
                          "Action 4",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    }),
                    _createVNode(_component_el_dropdown_item, { divided: "" }, {
                      default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                        _createTextVNode(
                          "Action 5",
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
              ]),
              default: _withCtx(() => [
                _cache[6] || (_cache[6] = _createElementVNode(
                  "span",
                  { class: "el-dropdown-link" },
                  " Dropdown List1 ",
                  -1
                  /* CACHED */
                ))
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          _createVNode(_component_el_dropdown, {
            trigger: "contextmenu",
            onVisibleChange: handleVisible2
          }, {
            dropdown: _withCtx(() => [
              _createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                      _createTextVNode(
                        "Action 1",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                      _createTextVNode(
                        "Action 2",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_dropdown_item, null, {
                    default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                      _createTextVNode(
                        "Action 3",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_dropdown_item, { disabled: "" }, {
                    default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                      _createTextVNode(
                        "Action 4",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_dropdown_item, { divided: "" }, {
                    default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                      _createTextVNode(
                        "Action 5",
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
            ]),
            default: _withCtx(() => [
              _cache[12] || (_cache[12] = _createElementVNode(
                "span",
                { class: "el-dropdown-link" },
                " Dropdown List2 ",
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
  { title: "尺寸", css: "\n.example-showcase .el-dropdown + .el-dropdown {\n\n  margin-left: 15px;\n}\n\n\n", comp: { template: "\n\n  <el-dropdown size=\"large\" split-button type=\"primary\">\n\n    Large\n\n    <template #dropdown>\n\n      <el-dropdown-menu>\n\n        <el-dropdown-item>Action 1</el-dropdown-item>\n\n        <el-dropdown-item>Action 2</el-dropdown-item>\n\n        <el-dropdown-item>Action 3</el-dropdown-item>\n\n        <el-dropdown-item>Action 4</el-dropdown-item>\n\n      </el-dropdown-menu>\n\n    </template>\n\n  </el-dropdown>\n\n  <el-dropdown split-button type=\"primary\">\n\n    Default\n\n    <template #dropdown>\n\n      <el-dropdown-menu>\n\n        <el-dropdown-item>Action 1</el-dropdown-item>\n\n        <el-dropdown-item>Action 2</el-dropdown-item>\n\n        <el-dropdown-item>Action 3</el-dropdown-item>\n\n        <el-dropdown-item>Action 4</el-dropdown-item>\n\n      </el-dropdown-menu>\n\n    </template>\n\n  </el-dropdown>\n\n  <el-dropdown size=\"small\" split-button type=\"primary\">\n\n    Small\n\n    <template #dropdown>\n\n      <el-dropdown-menu>\n\n        <el-dropdown-item>Action 1</el-dropdown-item>\n\n        <el-dropdown-item>Action 2</el-dropdown-item>\n\n        <el-dropdown-item>Action 3</el-dropdown-item>\n\n        <el-dropdown-item>Action 4</el-dropdown-item>\n\n      </el-dropdown-menu>\n\n    </template>\n\n  </el-dropdown>\n\n" } },
  { title: "虚拟触发2.11.3", css: "\n.content[data-v-1ty5da] {\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  height: 200px;\n}\n.content[data-v-1ty5da] .card-body {\n\n  flex-grow: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { Check, CircleCheck, CirclePlus, CirclePlusFilled, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const dropdownRef = ref();
    const position = ref({
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    });
    const triggerRef = ref({
      getBoundingClientRect: () => position.value
    });
    const handleClick = () => {
      dropdownRef.value?.handleClose();
    };
    const handleContextmenu = (event) => {
      const { clientX, clientY } = event;
      position.value = DOMRect.fromRect({
        x: clientX,
        y: clientY
      });
      event.preventDefault();
      dropdownRef.value?.handleOpen();
    };
    return (_ctx, _cache) => {
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_card, {
            class: "content",
            "body-class": "card-body",
            onClick: handleClick,
            onContextmenu: handleContextmenu
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " Right click ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dropdown, {
            ref_key: "dropdownRef",
            ref: dropdownRef,
            "virtual-ref": triggerRef.value,
            "show-arrow": false,
            "popper-options": {
              modifiers: [{ name: "offset", options: { offset: [0, 0] } }]
            },
            "virtual-triggering": "",
            trigger: "contextmenu",
            placement: "bottom-start"
          }, {
            dropdown: _withCtx(() => [
              _createVNode(_component_el_dropdown_menu, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_dropdown_item, { icon: _unref(Plus) }, {
                    default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                      _createTextVNode(
                        "Action 1",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["icon"]),
                  _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlusFilled) }, {
                    default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                      _createTextVNode(
                        " Action 2 ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["icon"]),
                  _createVNode(_component_el_dropdown_item, { icon: _unref(CirclePlus) }, {
                    default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode(
                        "Action 3",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["icon"]),
                  _createVNode(_component_el_dropdown_item, { icon: _unref(Check) }, {
                    default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                      _createTextVNode(
                        "Action 4",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["icon"]),
                  _createVNode(_component_el_dropdown_item, { icon: _unref(CircleCheck) }, {
                    default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                      _createTextVNode(
                        "Action 5",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["icon"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["virtual-ref"])
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
