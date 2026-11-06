window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["color-picker-panel"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const color = ref("#409EFF");
    return (_ctx, _cache) => {
      const _component_el_color_picker_panel = _resolveComponent("el-color-picker-panel");
      return _openBlock(), _createBlock(_component_el_color_picker_panel, {
        modelValue: color.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event)
      }, null, 8, ["modelValue"]);
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
      const _component_el_color_picker_panel = _resolveComponent("el-color-picker-panel");
      return _openBlock(), _createBlock(_component_el_color_picker_panel, {
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
    const predefineColors = [
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
    ];
    return (_ctx, _cache) => {
      const _component_el_color_picker_panel = _resolveComponent("el-color-picker-panel");
      return _openBlock(), _createBlock(_component_el_color_picker_panel, {
        modelValue: color.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
        "show-alpha": "",
        predefine: predefineColors
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "Border 边框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap justify-center gap-4" };
const _hoisted_2 = { class: "p-5" };
const { computed, ref } = Vue;

var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref("#ff6900");
    const containerRef = ref();
    const { width } = useElementSize(containerRef);
    const isNarrow = computed(() => width.value < 815);
    return (_ctx, _cache) => {
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_color_picker_panel = _resolveComponent("el-color-picker-panel");
      const _component_el_card = _resolveComponent("el-card");
      return _openBlock(), _createElementBlock(
        "div",
        {
          ref_key: "containerRef",
          ref: containerRef
        },
        [
          _cache[2] || (_cache[2] = _createElementVNode(
            "div",
            { class: "text-center" },
            "No border:",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_divider),
          _createElementVNode("div", _hoisted_1, [
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_color_picker_panel, {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
                border: false
              }, null, 8, ["modelValue"])
            ]),
            _createVNode(_component_el_divider, {
              class: "h-auto",
              direction: isNarrow.value ? "horizontal" : "vertical"
            }, null, 8, ["direction"]),
            _createVNode(_component_el_card, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_color_picker_panel, {
                  modelValue: value.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
                  border: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const color = ref("#ff6900");
    const predefineColors = [
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#1e90ff",
      "#c71585"
    ];
    return (_ctx, _cache) => {
      const _component_el_color_picker_panel = _resolveComponent("el-color-picker-panel");
      return _openBlock(), _createBlock(_component_el_color_picker_panel, {
        modelValue: color.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => color.value = $event),
        disabled: "",
        "show-alpha": "",
        predefine: predefineColors
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
