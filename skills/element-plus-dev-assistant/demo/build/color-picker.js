window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["color-picker"] = [
  { title: "基础用法", css: "\n.demo-color-block {\n\n  display: flex;\n\n  align-items: center;\n\n  margin-bottom: 16px;\n}\n.demo-color-block .demonstration {\n\n  margin-right: 16px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-color-block" };
const _hoisted_2 = { class: "demo-color-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const color1 = ref("#409EFF");
    const color2 = ref();
    return (_ctx, _cache) => {
      const _component_el_color_picker = _resolveComponent("el-color-picker");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "With default value",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_color_picker, {
              modelValue: color1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color1.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "With no default value",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_color_picker, {
              modelValue: color2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => color2.value = $event)
            }, null, 8, ["modelValue"])
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
  { title: "选择透明度", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const color = ref("rgba(19, 206, 102, 0.8)");
    return (_ctx, _cache) => {
      const _component_el_color_picker = _resolveComponent("el-color-picker");
      return _openBlock(), _createBlock(_component_el_color_picker, {
        modelValue: color.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
        "show-alpha": ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "预定义颜色", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const color = ref("rgba(255, 69, 0, 0.68)");
    const predefineColors = ref([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577"
    ]);
    return (_ctx, _cache) => {
      const _component_el_color_picker = _resolveComponent("el-color-picker");
      return _openBlock(), _createBlock(_component_el_color_picker, {
        modelValue: color.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
        "show-alpha": "",
        predefine: predefineColors.value
      }, null, 8, ["modelValue", "predefine"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "不同尺寸", css: "\n.demo-color-sizes .el-color-picker:not(:last-child) {\n\n  margin-right: 16px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-color-sizes" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const color = ref("#409EFF");
    return (_ctx, _cache) => {
      const _component_el_color_picker = _resolveComponent("el-color-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_color_picker, {
          modelValue: color.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
          size: "large"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_color_picker, {
          modelValue: color.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => color.value = $event)
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_color_picker, {
          modelValue: color.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => color.value = $event),
          size: "small"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
