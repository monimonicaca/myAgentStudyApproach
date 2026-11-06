window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["splitter"] = [
  { title: "基础用法", css: "\n.demo-panel {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: { template: "\n\n  <div\n\n    style=\"height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px\"\n\n  >\n\n    <el-splitter>\n\n      <el-splitter-panel size=\"30%\">\n\n        <div class=\"demo-panel\">1</div>\n\n      </el-splitter-panel>\n\n      <el-splitter-panel :min=\"200\">\n\n        <div class=\"demo-panel\">2</div>\n\n      </el-splitter-panel>\n\n    </el-splitter>\n\n  </div>\n\n" } },
  { title: "垂直布局", css: "\n.demo-panel {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: { template: "\n\n  <div\n\n    style=\"height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px\"\n\n  >\n\n    <el-splitter layout=\"vertical\">\n\n      <el-splitter-panel>\n\n        <div class=\"demo-panel\">1</div>\n\n      </el-splitter-panel>\n\n      <el-splitter-panel>\n\n        <div class=\"demo-panel\">2</div>\n\n      </el-splitter-panel>\n\n    </el-splitter>\n\n  </div>\n\n" } },
  { title: "可折叠", css: "\n.demo-panel[data-v-9bo1a6] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "250px", "box-shadow": "var(--el-border-color-light) 0px 0px 10px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const isCollapsible = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_splitter_panel = _resolveComponent("el-splitter-panel");
      const _component_el_splitter = _resolveComponent("el-splitter");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: isCollapsible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isCollapsible.value = $event),
            "active-text": "enable",
            "inactive-text": "disable",
            "inline-prompt": "",
            class: "mb-2"
          }, null, 8, ["modelValue"]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_splitter, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_splitter_panel, {
                  collapsible: isCollapsible.value,
                  min: "50"
                }, {
                  default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                    _createElementVNode(
                      "div",
                      { class: "demo-panel" },
                      "1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["collapsible"]),
                _createVNode(_component_el_splitter_panel, { collapsible: isCollapsible.value }, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createElementVNode(
                      "div",
                      { class: "demo-panel" },
                      "2",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["collapsible"]),
                _createVNode(_component_el_splitter_panel, null, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createElementVNode(
                      "div",
                      { class: "demo-panel" },
                      "3",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_splitter_panel, { collapsible: isCollapsible.value }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_splitter, { layout: "vertical" }, {
                      default: _withCtx(() => [
                        _createVNode(_component_el_splitter_panel, { collapsible: isCollapsible.value }, {
                          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                            _createElementVNode(
                              "div",
                              { class: "demo-panel" },
                              "4",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["collapsible"]),
                        _createVNode(_component_el_splitter_panel, { collapsible: isCollapsible.value }, {
                          default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                            _createElementVNode(
                              "div",
                              { class: "demo-panel" },
                              "5",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["collapsible"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["collapsible"])
              ]),
              _: 1
              /* STABLE */
            })
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
  { title: "禁用拖动", css: "\n.demo-panel[data-v-9b48ot] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, toDisplayString: _toDisplayString, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "250px", "box-shadow": "var(--el-border-color-light) 0px 0px 10px" } };
const _hoisted_2 = { class: "demo-panel" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const resizable = ref(false);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_splitter_panel = _resolveComponent("el-splitter-panel");
      const _component_el_splitter = _resolveComponent("el-splitter");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: resizable.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => resizable.value = $event),
            "active-text": "enable",
            "inactive-text": "disable",
            "inline-prompt": "",
            class: "mb-2"
          }, null, 8, ["modelValue"]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_splitter, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_splitter_panel, null, {
                  default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                    _createElementVNode(
                      "div",
                      { class: "demo-panel" },
                      "1",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_splitter_panel, { resizable: resizable.value }, {
                  default: _withCtx(() => [
                    _createElementVNode(
                      "div",
                      _hoisted_2,
                      " drag " + _toDisplayString(resizable.value ? "enable" : "disable"),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["resizable"]),
                _createVNode(_component_el_splitter_panel, null, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createElementVNode(
                      "div",
                      { class: "demo-panel" },
                      "3",
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
  { title: "面板大小", css: "\n.demo-panel[data-v-9akg3g] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "height": "250px", "box-shadow": "var(--el-border-color-light) 0px 0px 10px" } };
const _hoisted_2 = { class: "demo-panel" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const size = ref(100);
    const handleResizeStart = (index, sizes) => {
      console.log("resizeStart", index, sizes);
    };
    const handleResize = (index, sizes) => {
      console.log("resize", index, sizes);
    };
    const handleResizeEnd = (index, sizes) => {
      console.log("resizeEnd", index, sizes);
    };
    return (_ctx, _cache) => {
      const _component_el_splitter_panel = _resolveComponent("el-splitter-panel");
      const _component_el_splitter = _resolveComponent("el-splitter");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_splitter, {
          onResizeStart: handleResizeStart,
          onResizeEnd: handleResizeEnd,
          onResize: handleResize
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_splitter_panel, null, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "div",
                  { class: "demo-panel" },
                  "1",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_splitter_panel, {
              size: size.value,
              "onUpdate:size": _cache[0] || (_cache[0] = ($event) => size.value = $event),
              max: 200,
              min: 50
            }, {
              default: _withCtx(() => [
                _createElementVNode(
                  "div",
                  _hoisted_2,
                  _toDisplayString(size.value) + "px",
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["size"]),
            _createVNode(_component_el_splitter_panel, null, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createElementVNode(
                  "div",
                  { class: "demo-panel" },
                  "3",
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
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "延迟2.11.0", css: "\n.demo-panel {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n}\n\n\n", comp: { template: "\n\n  <div\n\n    style=\"height: 250px; box-shadow: var(--el-border-color-light) 0px 0px 10px\"\n\n  >\n\n    <el-splitter lazy>\n\n      <el-splitter-panel collapsible min=\"50\">\n\n        <div class=\"demo-panel\">1</div>\n\n      </el-splitter-panel>\n\n      <el-splitter-panel collapsible>\n\n        <div class=\"demo-panel\">2</div>\n\n      </el-splitter-panel>\n\n      <el-splitter-panel collapsible>\n\n        <div class=\"demo-panel\">3</div>\n\n      </el-splitter-panel>\n\n    </el-splitter>\n\n  </div>\n\n" } },
];
