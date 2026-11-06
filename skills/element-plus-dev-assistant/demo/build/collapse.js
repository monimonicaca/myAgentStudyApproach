window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["collapse"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-collapse" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const activeNames = ref(["1"]);
    const handleChange = (val) => {
      console.log(val);
    };
    return (_ctx, _cache) => {
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_collapse, {
          modelValue: activeNames.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeNames.value = $event),
          onChange: handleChange
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Decision making: giving advice about operations is acceptable, but do not make decisions for the users; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",
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
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "手风琴效果", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-collapse" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const activeName = ref("1");
    return (_ctx, _cache) => {
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_collapse, {
          modelValue: activeName.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
          accordion: ""
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",
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
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义面板标题", css: "\n.title-wrapper[data-v-7zpz3c] {\n\n  display: flex;\n\n  align-items: center;\n\n  gap: 4px;\n}\n.title-wrapper.is-active[data-v-7zpz3c] {\n\n  color: var(--el-color-primary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-collapse" };
const { InfoFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_collapse, { accordion: "" }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, { name: "1" }, {
              title: _withCtx(({ isActive }) => [
                _createElementVNode(
                  "div",
                  {
                    class: _normalizeClass(["title-wrapper", { "is-active": isActive }])
                  },
                  [
                    _cache[0] || (_cache[0] = _createTextVNode(
                      " Consistency ",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_icon, { class: "header-icon" }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(InfoFilled))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ],
                  2
                  /* CLASS */
                )
              ]),
              default: _withCtx(() => [
                _cache[1] || (_cache[1] = _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                )),
                _cache[2] || (_cache[2] = _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                ))
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createElementVNode(
                  "div",
                  null,
                  " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",
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
  { title: "自定义图标 2.8.3", css: "\n.icon-ele[data-v-809rop] {\n\n  margin: 0 8px 0 auto;\n\n  color: #409eff;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-collapse" };
const _hoisted_2 = { class: "icon-ele" };
const { ref } = Vue;
const { CaretRight } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const activeNames = ref(["1"]);
    const handleChange = (val) => {
      console.log(val);
    };
    return (_ctx, _cache) => {
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_collapse, {
          modelValue: activeNames.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeNames.value = $event),
          onChange: handleChange
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1",
              icon: _unref(CaretRight)
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["icon"]),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              icon: _withCtx(({ isActive }) => [
                _createElementVNode(
                  "span",
                  _hoisted_2,
                  _toDisplayString(isActive ? "Expanded" : "Collapsed"),
                  1
                  /* TEXT */
                )
              ]),
              default: _withCtx(() => [
                _cache[2] || (_cache[2] = _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                )),
                _cache[3] || (_cache[3] = _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                ))
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createElementVNode(
                  "div",
                  null,
                  " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",
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
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标位置 2.9.10", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-collapse-position" };
const _hoisted_2 = { class: "flex items-center mb-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const position = ref("left");
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = _createElementVNode(
            "span",
            { class: "mr-4" },
            "expand icon position: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: position.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => position.value = $event),
            "inactive-value": "left",
            "active-value": "right",
            "inactive-text": "left",
            "active-text": "right",
            style: { "--el-switch-off-color": "#88b8fe" }
          }, null, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_collapse, { "expand-icon-position": position.value }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
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
        }, 8, ["expand-icon-position"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "阻止折叠 2.9.11", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, resolveDirective: _resolveDirective, openBlock: _openBlock, createElementBlock: _createElementBlock, withDirectives: _withDirectives } = Vue;
const _hoisted_1 = { class: "demo-collapse" };
const _hoisted_2 = { class: "flex items-center mb-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const before = ref(true);
    const activeNames = ref(["1"]);
    const loading = ref(false);
    const beforeCollapse = () => {
      loading.value = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          loading.value = false;
          return resolve(before.value);
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_collapse_item = _resolveComponent("el-collapse-item");
      const _component_el_collapse = _resolveComponent("el-collapse");
      const _directive_loading = _resolveDirective("loading");
      return _withDirectives((_openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "mr-4" },
            "before collapse return: ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: before.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => before.value = $event),
            "inactive-value": false,
            "active-value": true,
            "inactive-text": "false",
            "active-text": "true"
          }, null, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_collapse, {
          modelValue: activeNames.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeNames.value = $event),
          "before-collapse": beforeCollapse
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_collapse_item, {
              title: "Consistency",
              name: "1"
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createElementVNode(
                  "div",
                  null,
                  " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Feedback",
              name: "2"
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createElementVNode(
                  "div",
                  null,
                  " Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Visual feedback: reflect current state by updating or rearranging elements of the page. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Efficiency",
              name: "3"
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createElementVNode(
                  "div",
                  null,
                  " Simplify the process: keep operating process simple and intuitive; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling. ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_collapse_item, {
              title: "Controllability",
              name: "4"
            }, {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createElementVNode(
                  "div",
                  null,
                  " Decision making: giving advices about operations is acceptable, but do not make decisions for the users; ",
                  -1
                  /* CACHED */
                ),
                _createElementVNode(
                  "div",
                  null,
                  " Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation. ",
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
      ])), [
        [_directive_loading, loading.value]
      ]);
    };
  }
});
return stdin_default;
 })() },
];
