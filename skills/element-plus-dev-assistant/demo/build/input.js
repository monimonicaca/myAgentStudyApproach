window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["input"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createBlock(_component_el_input, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        style: { "width": "240px" },
        placeholder: "Please input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createBlock(_component_el_input, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        style: { "width": "240px" },
        disabled: "",
        placeholder: "Please input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "一键清空", css: "\n.input-group[data-v-n5a4zf] {\n\n  display: flex;\n\n  align-items: center;\n\n  gap: 1em;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "input-group" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const input = ref("");
    const textareaInput = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input, {
          modelValue: input.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
          style: { "width": "240px" },
          placeholder: "Please input",
          clearable: ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input, {
          modelValue: textareaInput.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => textareaInput.value = $event),
          style: { "width": "240px" },
          placeholder: "Please input",
          type: "textarea",
          clearable: ""
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义清除图标2.11.0", css: "\n.input-group[data-v-n4qce2] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 1em;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "input-group" };
const { ref } = Vue;
const { CloseBold } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const input = ref("Custom clear icon");
    const textareaInput = ref("Custom clear icon");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input, {
          modelValue: input.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
          clearable: "",
          "clear-icon": _unref(CloseBold),
          placeholder: "Custom clear icon"
        }, null, 8, ["modelValue", "clear-icon"]),
        _createVNode(_component_el_input, {
          modelValue: textareaInput.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => textareaInput.value = $event),
          clearable: "",
          "clear-icon": _unref(CloseBold),
          placeholder: "Custom clear icon",
          type: "textarea"
        }, null, 8, ["modelValue", "clear-icon"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "格式化", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createBlock(_component_el_input, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        style: { "width": "240px" },
        placeholder: "Please input",
        formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        parser: (value) => value.replace(/\$\s?|(,*)/g, "")
      }, null, 8, ["modelValue", "formatter", "parser"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "密码框", css: "\n.input-group[data-v-n3mr7c] {\n\n  display: flex;\n\n  align-items: center;\n\n  gap: 1em;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, openBlock: _openBlock, createBlock: _createBlock, withCtx: _withCtx, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "input-group" };
const { ref } = Vue;
const { Lock, Unlock } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const input = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input, {
          modelValue: input.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
          style: { "width": "240px" },
          type: "password",
          placeholder: "Please input password",
          "show-password": ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input, {
          modelValue: input.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value = $event),
          style: { "width": "240px" },
          type: "password",
          placeholder: "Please input password",
          "show-password": ""
        }, {
          "password-icon": _withCtx(({ visible }) => [
            _createVNode(
              _component_el_icon,
              { size: 16 },
              {
                default: _withCtx(() => [
                  visible ? (_openBlock(), _createBlock(_unref(Unlock), { key: 0 })) : (_openBlock(), _createBlock(_unref(Lock), { key: 1 }))
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            )
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
  { title: "带图标的输入框", css: "\n.demo-input-with-icon[data-v-n32ylz] {\n\n  width: 100%;\n}\n.input-group[data-v-n32ylz] {\n\n  margin-bottom: 1.5rem;\n}\n.label[data-v-n32ylz] {\n\n  display: block;\n\n  margin-bottom: 1rem;\n\n  color: var(--el-text-color-regular);\n}\n.input-container[data-v-n32ylz] {\n\n  display: flex;\n\n  gap: 1rem;\n\n  flex-wrap: wrap;\n}\n.responsive-input[data-v-n32ylz] {\n\n  width: 240px;\n}\n@media (max-width: 768px) {\n.input-container[data-v-n32ylz] {\n\n    flex-direction: column;\n\n    gap: 1rem;\n}\n.responsive-input[data-v-n32ylz] {\n\n    width: 100%;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-with-icon" };
const _hoisted_2 = { class: "input-group" };
const _hoisted_3 = { class: "input-container" };
const _hoisted_4 = { class: "input-group" };
const _hoisted_5 = { class: "input-container" };
const { ref } = Vue;
const { Calendar, Search } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const input4 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "span",
            { class: "label" },
            "Using attributes",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_input, {
              modelValue: input1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input1.value = $event),
              class: "responsive-input",
              placeholder: "Pick a date",
              "suffix-icon": _unref(Calendar)
            }, null, 8, ["modelValue", "suffix-icon"]),
            _createVNode(_component_el_input, {
              modelValue: input2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input2.value = $event),
              class: "responsive-input",
              placeholder: "Type something",
              "prefix-icon": _unref(Search)
            }, null, 8, ["modelValue", "prefix-icon"])
          ])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "span",
            { class: "label" },
            "Using slots",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_5, [
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input3.value = $event),
              class: "responsive-input",
              placeholder: "Pick a date"
            }, {
              suffix: _withCtx(() => [
                _createVNode(_component_el_icon, { class: "el-input__icon" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(Calendar))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode(_component_el_input, {
              modelValue: input4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => input4.value = $event),
              class: "responsive-input",
              placeholder: "Type something"
            }, {
              prefix: _withCtx(() => [
                _createVNode(_component_el_icon, { class: "el-input__icon" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(Search))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "文本域", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const textarea = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createBlock(_component_el_input, {
        modelValue: textarea.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textarea.value = $event),
        style: { "width": "240px" },
        rows: 2,
        type: "textarea",
        placeholder: "Please input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自适应文本域", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const textarea1 = ref("");
    const textarea2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input, {
            modelValue: textarea1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textarea1.value = $event),
            style: { "width": "240px" },
            autosize: "",
            type: "textarea",
            placeholder: "Please input"
          }, null, 8, ["modelValue"]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "div",
            { style: { "margin": "20px 0" } },
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input, {
            modelValue: textarea2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => textarea2.value = $event),
            style: { "width": "240px" },
            autosize: { minRows: 2, maxRows: 4 },
            type: "textarea",
            placeholder: "Please input"
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "复合型输入框", css: "\n.input-with-select .el-input-group__prepend {\n\n  background-color: var(--el-fill-color-blank);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "mt-4" };
const _hoisted_2 = { class: "mt-4" };
const _hoisted_3 = { class: "mt-4" };
const { ref } = Vue;
const { Search } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    const select = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_input, {
              modelValue: input1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input1.value = $event),
              style: { "max-width": "600px" },
              placeholder: "Please input"
            }, {
              prepend: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode(
                  "Http://",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_input, {
              modelValue: input2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input2.value = $event),
              style: { "max-width": "600px" },
              placeholder: "Please input"
            }, {
              append: _withCtx(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode(
                  ".com",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => input3.value = $event),
              style: { "max-width": "600px" },
              placeholder: "Please input",
              class: "input-with-select"
            }, {
              prepend: _withCtx(() => [
                _createVNode(_component_el_select, {
                  modelValue: select.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => select.value = $event),
                  placeholder: "Select",
                  style: { "width": "115px" }
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_option, {
                      label: "Restaurant",
                      value: "1"
                    }),
                    _createVNode(_component_el_option, {
                      label: "Order No.",
                      value: "2"
                    }),
                    _createVNode(_component_el_option, {
                      label: "Tel",
                      value: "3"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              append: _withCtx(() => [
                _createVNode(_component_el_button, { icon: _unref(Search) }, null, 8, ["icon"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => input3.value = $event),
              style: { "max-width": "600px" },
              placeholder: "Please input",
              class: "input-with-select"
            }, {
              prepend: _withCtx(() => [
                _createVNode(_component_el_button, { icon: _unref(Search) }, null, 8, ["icon"])
              ]),
              append: _withCtx(() => [
                _createVNode(_component_el_select, {
                  modelValue: select.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => select.value = $event),
                  placeholder: "Select",
                  style: { "width": "115px" }
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_option, {
                      label: "Restaurant",
                      value: "1"
                    }),
                    _createVNode(_component_el_option, {
                      label: "Order No.",
                      value: "2"
                    }),
                    _createVNode(_component_el_option, {
                      label: "Tel",
                      value: "3"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
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
  { title: "尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex gap-4 mb-4 items-center" };
const _hoisted_2 = { class: "flex gap-4 mb-4 items-center" };
const _hoisted_3 = { class: "flex gap-4 items-center" };
const { ref } = Vue;
const { Search } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const input1 = ref("");
    const input2 = ref("");
    const input3 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_input, {
              modelValue: input1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input1.value = $event),
              style: { "width": "240px" },
              size: "large",
              placeholder: "Please Input"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_input, {
              modelValue: input2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input2.value = $event),
              style: { "width": "240px" },
              placeholder: "Please Input"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input3.value = $event),
              style: { "width": "240px" },
              size: "small",
              placeholder: "Please Input"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_input, {
              modelValue: input1.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => input1.value = $event),
              style: { "width": "240px" },
              size: "large",
              placeholder: "Please Input",
              "suffix-icon": _unref(Search)
            }, null, 8, ["modelValue", "suffix-icon"]),
            _createVNode(_component_el_input, {
              modelValue: input2.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => input2.value = $event),
              style: { "width": "240px" },
              placeholder: "Please Input",
              "suffix-icon": _unref(Search)
            }, null, 8, ["modelValue", "suffix-icon"]),
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => input3.value = $event),
              style: { "width": "240px" },
              size: "small",
              placeholder: "Please Input",
              "suffix-icon": _unref(Search)
            }, null, 8, ["modelValue", "suffix-icon"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_input, {
              modelValue: input1.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => input1.value = $event),
              style: { "width": "240px" },
              size: "large",
              placeholder: "Please Input",
              "prefix-icon": _unref(Search)
            }, null, 8, ["modelValue", "prefix-icon"]),
            _createVNode(_component_el_input, {
              modelValue: input2.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => input2.value = $event),
              style: { "width": "240px" },
              placeholder: "Please Input",
              "prefix-icon": _unref(Search)
            }, null, 8, ["modelValue", "prefix-icon"]),
            _createVNode(_component_el_input, {
              modelValue: input3.value,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => input3.value = $event),
              style: { "width": "240px" },
              size: "small",
              placeholder: "Please Input",
              "prefix-icon": _unref(Search)
            }, null, 8, ["modelValue", "prefix-icon"])
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
  { title: "输入长度限制", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const text = ref("");
    const textarea = ref("");
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input, {
            modelValue: text.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => text.value = $event),
            style: { "width": "240px" },
            maxlength: "10",
            placeholder: "Please input",
            "show-word-limit": "",
            type: "text"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input, {
            modelValue: text.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => text.value = $event),
            class: "ml-4",
            style: { "width": "240px" },
            maxlength: "10",
            placeholder: "Please input",
            "show-word-limit": "",
            "word-limit-position": "outside",
            type: "text"
          }, null, 8, ["modelValue"]),
          _cache[4] || (_cache[4] = _createElementVNode(
            "div",
            { style: { "margin": "20px 0" } },
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input, {
            modelValue: textarea.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => textarea.value = $event),
            maxlength: "30",
            style: { "width": "240px" },
            placeholder: "Please input",
            "show-word-limit": "",
            type: "textarea"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input, {
            modelValue: textarea.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => textarea.value = $event),
            class: "ml-4",
            maxlength: "30",
            style: { "width": "240px" },
            placeholder: "Please input",
            "show-word-limit": "",
            "word-limit-position": "outside",
            type: "textarea"
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "计数图形2.13.7", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const text = ref("\u{1F600}\u{1F601}");
    const textarea = ref("\u{1F600}\u{1F601}");
    const calc = (value) => {
      return Array.from(value).length;
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input, {
            modelValue: text.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => text.value = $event),
            maxlength: "10",
            placeholder: "Please input",
            "show-word-limit": "",
            "count-graphemes": calc,
            type: "text"
          }, null, 8, ["modelValue"]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "div",
            { style: { "margin": "20px 0" } },
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input, {
            modelValue: textarea.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => textarea.value = $event),
            maxlength: "20",
            placeholder: "Please input",
            "show-word-limit": "",
            "count-graphemes": calc,
            type: "textarea"
          }, null, 8, ["modelValue"])
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
