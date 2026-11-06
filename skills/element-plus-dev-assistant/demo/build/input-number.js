window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["input-number"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const num = ref(1);
    const handleChange = (value) => {
      console.log(value);
    };
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: num.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
        min: 1,
        max: 10,
        onChange: handleChange
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
    const num = ref(1);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: num.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
        disabled: true
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "步进", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const num = ref(5);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: num.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
        step: 2
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "严格步进", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const num = ref(2);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: num.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
        step: 2,
        "step-strictly": ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "精度", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const num = ref(1);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: num.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
        precision: 2,
        step: 0.1,
        max: 10
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "不同的输入框尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap items-center gap-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const num1 = ref(1);
    const num2 = ref(2);
    const num3 = ref(3);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input_number, {
          modelValue: num1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num1.value = $event),
          size: "large"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input_number, {
          modelValue: num2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => num2.value = $event)
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input_number, {
          modelValue: num3.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => num3.value = $event),
          size: "small"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "按钮位置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap items-center gap-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const num = ref(1);
    const handleChange = (value) => {
      console.log(value);
    };
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_input_number, {
          modelValue: num.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
          min: 1,
          max: 10,
          "controls-position": "right",
          size: "large",
          onChange: handleChange
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input_number, {
          modelValue: num.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => num.value = $event),
          min: 1,
          max: 10,
          "controls-position": "right",
          onChange: handleChange
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_input_number, {
          modelValue: num.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => num.value = $event),
          min: 1,
          max: 10,
          size: "small",
          "controls-position": "right",
          onChange: handleChange
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标 2.6.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ArrowDown, ArrowUp, Minus, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const num = ref(1);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, { direction: "vertical" }, {
        default: _withCtx(() => [
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_input_number, {
                modelValue: num.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event)
              }, null, 8, ["modelValue"]),
              _createVNode(_component_el_input_number, {
                modelValue: num.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => num.value = $event)
              }, {
                "decrease-icon": _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ArrowDown))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                "increase-icon": _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ArrowUp))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_input_number, {
                modelValue: num.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => num.value = $event),
                "controls-position": "right"
              }, null, 8, ["modelValue"]),
              _createVNode(_component_el_input_number, {
                modelValue: num.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => num.value = $event),
                "controls-position": "right"
              }, {
                "decrease-icon": _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(Minus))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                "increase-icon": _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(Plus))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
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
  { title: "带前缀和后缀2.8.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const num = ref(1);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, null, {
        default: _withCtx(() => [
          _createVNode(_component_el_input_number, {
            modelValue: num.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => num.value = $event),
            min: 1,
            max: 10
          }, {
            prefix: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createElementVNode(
                "span",
                null,
                "\uFFE5",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_input_number, {
            modelValue: num.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => num.value = $event),
            min: 1,
            max: 10
          }, {
            suffix: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createElementVNode(
                "span",
                null,
                "RMB",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "Formatter 2.14.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const input = ref(1e4);
    return (_ctx, _cache) => {
      const _component_el_input_number = _resolveComponent("el-input-number");
      return _openBlock(), _createBlock(_component_el_input_number, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        parser: (value) => value.replace(/\$\s?|(,*)/g, "")
      }, null, 8, ["modelValue", "formatter", "parser"]);
    };
  }
});
return stdin_default;
 })() },
];
