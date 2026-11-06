window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["popover"] = [
  { title: "展示位置", css: "\n.popover-base-box {\n\n  width: 600px;\n}\n.popover-base-box .row {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-between;\n}\n.popover-base-box .center {\n\n  justify-content: center;\n}\n\n\n", comp: { template: "\n\n  <div class=\"popover-base-box\">\n\n    <div class=\"row center\">\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Top Left prompts info\"\n\n        placement=\"top-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top-start</el-button>\n\n        </template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Top Center prompts info\"\n\n        placement=\"top\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top</el-button>\n\n        </template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Top Right prompts info\"\n\n        placement=\"top-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top-end</el-button>\n\n        </template>\n\n      </el-popover>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Left Top prompts info\"\n\n        placement=\"left-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>left-start</el-button>\n\n        </template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Right Top prompts info\"\n\n        placement=\"right-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right-start</el-button>\n\n        </template>\n\n      </el-popover>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Left Center prompts info\"\n\n        placement=\"left\"\n\n      >\n\n        <template #reference>\n\n          <el-button class=\"mt-3 mb-3\">left</el-button>\n\n        </template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Right Center prompts info\"\n\n        placement=\"right\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right</el-button>\n\n        </template>\n\n      </el-popover>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Left Bottom prompts info\"\n\n        placement=\"left-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>left-end</el-button>\n\n        </template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Right Bottom prompts info\"\n\n        placement=\"right-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right-end</el-button>\n\n        </template>\n\n      </el-popover>\n\n    </div>\n\n    <div class=\"row center\">\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Bottom Left prompts info\"\n\n        placement=\"bottom-start\"\n\n      >\n\n        <template #reference> <el-button>bottom-start</el-button></template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Bottom Center prompts info\"\n\n        placement=\"bottom\"\n\n      >\n\n        <template #reference> <el-button>bottom</el-button></template>\n\n      </el-popover>\n\n      <el-popover\n\n        title=\"Title\"\n\n        content=\"Bottom Right prompts info\"\n\n        placement=\"bottom-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>bottom-end</el-button>\n\n        </template>\n\n      </el-popover>\n\n    </div>\n\n  </div>\n\n" } },
  { title: "基础用法", css: "\n.el-button + .el-button[data-v-3af4bl] {\n\n  margin-left: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popover = _resolveComponent("el-popover");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_popover, {
            placement: "top-start",
            title: "Title",
            width: 200,
            trigger: "hover",
            content: "this is content, this is content, this is content"
          }, {
            reference: _withCtx(() => [
              _createVNode(_component_el_button, { class: "m-2" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Hover to activate",
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
          _createVNode(_component_el_popover, {
            placement: "bottom",
            title: "Title",
            width: 200,
            trigger: "click",
            content: "this is content, this is content, this is content"
          }, {
            reference: _withCtx(() => [
              _createVNode(_component_el_button, { class: "m-2" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Click to activate",
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
          _createVNode(
            _component_el_popover,
            {
              ref: "popover",
              placement: "right",
              title: "Title",
              width: 200,
              trigger: "focus",
              content: "this is content, this is content, this is content"
            },
            {
              reference: _withCtx(() => [
                _createVNode(_component_el_button, { class: "m-2" }, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Focus to activate",
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
            },
            512
            /* NEED_PATCH */
          ),
          _createVNode(
            _component_el_popover,
            {
              ref: "popover",
              title: "Title",
              width: 200,
              trigger: "contextmenu",
              content: "this is content, this is content, this is content"
            },
            {
              reference: _withCtx(() => [
                _createVNode(_component_el_button, { class: "m-2" }, {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "contextmenu to activate",
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
            },
            512
            /* NEED_PATCH */
          ),
          _createVNode(_component_el_popover, {
            visible: visible.value,
            placement: "bottom",
            title: "Title",
            width: 200,
            content: "this is content, this is content, this is content"
          }, {
            reference: _withCtx(() => [
              _createVNode(_component_el_button, {
                class: "m-2",
                onClick: _cache[0] || (_cache[0] = ($event) => visible.value = !visible.value)
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    " Manual to activate ",
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
          }, 8, ["visible"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "虚拟触发", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, withDirectives: _withDirectives, createElementVNode: _createElementVNode, createVNode: _createVNode, Fragment: _Fragment, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ClickOutside: vClickOutside } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const buttonRef = ref();
    const popoverRef = ref();
    const onClickOutside = () => {
      popoverRef.value?.hide();
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popover = _resolveComponent("el-popover");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _withDirectives((_openBlock(), _createBlock(_component_el_button, {
            ref_key: "buttonRef",
            ref: buttonRef
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " Click me ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })), [
            [_unref(vClickOutside), onClickOutside]
          ]),
          _createVNode(_component_el_popover, {
            ref_key: "popoverRef",
            ref: popoverRef,
            "virtual-ref": buttonRef.value,
            trigger: "click",
            title: "With title",
            "virtual-triggering": ""
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createElementVNode(
                "span",
                null,
                " Some content ",
                -1
                /* CACHED */
              )
            ])]),
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
  { title: "内容可扩展", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = {
  class: "demo-rich-conent",
  style: { "display": "flex", "gap": "16px", "flex-direction": "column" }
};
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const gridData = [
      {
        date: "2016-05-02",
        name: "Jack",
        address: "New York City"
      },
      {
        date: "2016-05-04",
        name: "Jack",
        address: "New York City"
      },
      {
        date: "2016-05-01",
        name: "Jack",
        address: "New York City"
      },
      {
        date: "2016-05-03",
        name: "Jack",
        address: "New York City"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_popover = _resolveComponent("el-popover");
      const _component_el_avatar = _resolveComponent("el-avatar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_popover, {
          placement: "right",
          width: 400,
          trigger: "click"
        }, {
          reference: _withCtx(() => [
            _createVNode(_component_el_button, { style: { "margin-right": "16px" } }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "Click to activate",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          default: _withCtx(() => [
            _createVNode(_component_el_table, { data: gridData }, {
              default: _withCtx(() => [
                _createVNode(_component_el_table_column, {
                  width: "150",
                  property: "date",
                  label: "date"
                }),
                _createVNode(_component_el_table_column, {
                  width: "100",
                  property: "name",
                  label: "name"
                }),
                _createVNode(_component_el_table_column, {
                  width: "300",
                  property: "address",
                  label: "address"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_popover, {
          width: 300,
          "popper-style": "box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        }, {
          reference: _withCtx(() => [
            _createVNode(_component_el_avatar, { src: "https://avatars.githubusercontent.com/u/72015883?v=4" })
          ]),
          default: _withCtx(() => [
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_avatar, {
                size: 60,
                src: "https://avatars.githubusercontent.com/u/72015883?v=4",
                style: { "margin-bottom": "8px" }
              }),
              _cache[1] || (_cache[1] = _createElementVNode(
                "div",
                null,
                [
                  _createElementVNode("p", {
                    class: "demo-rich-content__name",
                    style: { "margin": "0", "font-weight": "500" }
                  }, " Element Plus "),
                  _createElementVNode("p", {
                    class: "demo-rich-content__mention",
                    style: { "margin": "0", "font-size": "14px", "color": "var(--el-color-info)" }
                  }, " @element-plus ")
                ],
                -1
                /* CACHED */
              )),
              _cache[2] || (_cache[2] = _createElementVNode(
                "p",
                {
                  class: "demo-rich-content__desc",
                  style: { "margin": "0" }
                },
                " Element Plus, a Vue 3 based component library for developers, designers and product managers ",
                -1
                /* CACHED */
              ))
            ])
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
  { title: "嵌套操作", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "text-align": "right", "margin": "0" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popover = _resolveComponent("el-popover");
      return _openBlock(), _createBlock(_component_el_popover, {
        visible: visible.value,
        placement: "top",
        width: 180
      }, {
        reference: _withCtx(() => [
          _createVNode(_component_el_button, {
            onClick: _cache[2] || (_cache[2] = ($event) => visible.value = true)
          }, {
            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createTextVNode(
                "Delete",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        default: _withCtx(() => [
          _cache[6] || (_cache[6] = _createElementVNode(
            "p",
            null,
            "Are you sure to delete this?",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              size: "small",
              text: "",
              onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  "cancel",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              size: "small",
              type: "primary",
              onClick: _cache[1] || (_cache[1] = ($event) => visible.value = false)
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  " confirm ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["visible"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "指令", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, resolveDirective: _resolveDirective, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, withDirectives: _withDirectives, createElementVNode: _createElementVNode, createVNode: _createVNode, Fragment: _Fragment, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ClickOutside: vClickOutside } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const popoverRef = ref();
    const onClickOutside = () => {
      popoverRef.value?.hide();
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popover = _resolveComponent("el-popover");
      const _directive_popover = _resolveDirective("popover");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _withDirectives((_openBlock(), _createBlock(_component_el_button, null, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " Click me ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })), [
            [_directive_popover, popoverRef.value],
            [_unref(vClickOutside), onClickOutside]
          ]),
          _createVNode(
            _component_el_popover,
            {
              ref_key: "popoverRef",
              ref: popoverRef,
              trigger: "click",
              title: "With title",
              "virtual-triggering": "",
              persistent: ""
            },
            {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "span",
                  null,
                  " Some content ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            },
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
];
