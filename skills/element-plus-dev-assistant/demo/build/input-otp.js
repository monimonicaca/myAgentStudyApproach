window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["input-otp"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const otp = ref("123");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_input_otp, {
          modelValue: otp.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp.value = $event)
        }, null, 8, ["modelValue"]),
        _createElementVNode(
          "div",
          _hoisted_1,
          "Value: " + _toDisplayString(otp.value),
          1
          /* TEXT */
        )
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义长度", css: "\n.demo-input-otp[data-v-hmqea] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const otp1 = ref("");
    const otp2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input_otp, {
          modelValue: otp1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp1.value = $event),
          length: 4
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input_otp, {
          modelValue: otp2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => otp2.value = $event),
          length: 8
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "展示类型", css: "\n.demo-input-otp[data-v-i6izn] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\np[data-v-i6izn] {\n\n  margin-bottom: 8px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const otp1 = ref("");
    const otp2 = ref("");
    const otp3 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "Outlined (Default)",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp1.value = $event),
            type: "outlined"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "p",
            null,
            "Filled",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => otp2.value = $event),
            type: "filled"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "Underlined",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => otp3.value = $event),
            type: "underlined"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "调整尺寸", css: "\n.demo-input-otp[data-v-iqbl0] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\np[data-v-iqbl0] {\n\n  margin-bottom: 8px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const otp1 = ref("");
    const otp2 = ref("");
    const otp3 = ref("");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "Large",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp1.value = $event),
            size: "large"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "p",
            null,
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => otp2.value = $event),
            size: "default"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "Small",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => otp3.value = $event),
            size: "small"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用 & 只读", css: "\n.demo-input-otp[data-v-ja46d] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\n.type-wrap[data-v-ja46d] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 12px;\n}\np[data-v-ja46d] {\n\n  margin-bottom: 8px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const _hoisted_2 = { class: "type-wrap" };
const _hoisted_3 = { class: "type-wrap" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const otp1 = ref("123");
    const otp2 = ref("456");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[6] || (_cache[6] = _createElementVNode(
            "p",
            null,
            "Disabled",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp1.value = $event),
            disabled: ""
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => otp1.value = $event),
            disabled: "",
            type: "filled"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => otp1.value = $event),
            disabled: "",
            type: "underlined"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[7] || (_cache[7] = _createElementVNode(
            "p",
            null,
            "Readonly",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => otp2.value = $event),
            readonly: ""
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => otp2.value = $event),
            readonly: "",
            type: "filled"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => otp2.value = $event),
            readonly: "",
            type: "underlined"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "密码模式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "margin-top": "20px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const otp = ref("123");
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_input_otp, {
          modelValue: otp.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp.value = $event),
          mask: ""
        }, null, 8, ["modelValue"]),
        _createElementVNode(
          "div",
          _hoisted_1,
          "Value: " + _toDisplayString(otp.value),
          1
          /* TEXT */
        )
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "分隔符", css: "\n.demo-input-otp[data-v-kdpd3] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const { h } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const castSeparator = (index) => {
      return index & 1 ? h("span", null, "\u2014") : "";
    };
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input_otp, { separator: "/" }),
        _createVNode(_component_el_input_otp, { separator: castSeparator }),
        _createVNode(_component_el_input_otp, null, {
          separator: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "\u2022",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义验证", css: "\n.demo-input-otp[data-v-kxhyg] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 20px;\n}\np[data-v-kxhyg] {\n\n  margin-bottom: 8px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-input-otp" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const otp1 = ref("");
    const otp2 = ref("");
    const onlyAllowNumber = (value) => /^\d$/.test(value);
    const onlyAllowLetter = (value) => /^[a-zA-Z]$/.test(value);
    return (_ctx, _cache) => {
      const _component_el_input_otp = _resolveComponent("el-input-otp");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "p",
            null,
            "Numbers only",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => otp1.value = $event),
            validator: onlyAllowNumber,
            inputmode: "numeric"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "Letters only",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_otp, {
            modelValue: otp2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => otp2.value = $event),
            validator: onlyAllowLetter
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
