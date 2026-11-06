window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["segmented"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col items-start gap-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref("Mon");
    const options = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options,
          size: "large"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options,
          size: "default"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options,
          size: "small"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "配置方向2.8.7", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, resolveDynamicComponent: _resolveDynamicComponent, openBlock: _openBlock, createBlock: _createBlock, withCtx: _withCtx, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { Apple, Cherry, Grape, Orange, Pear, Watermelon } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref("Apple");
    const direction = ref("horizontal");
    const size = ref("default");
    const directionOptions = [
      { label: "Horizontal", value: "horizontal" },
      { label: "Vertical", value: "vertical" }
    ];
    const sizeOptions = ["large", "default", "small"];
    const options = [
      {
        label: "Apple",
        value: "Apple",
        icon: Apple
      },
      {
        label: "Cherry",
        value: "Cherry",
        icon: Cherry
      },
      {
        label: "Grape",
        value: "Grape",
        icon: Grape
      },
      {
        label: "Orange",
        value: "Orange",
        icon: Orange
      },
      {
        label: "Pear",
        value: "Pear",
        icon: Pear
      },
      {
        label: "Watermelon",
        value: "Watermelon",
        icon: Watermelon,
        disabled: true
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_segmented, {
          modelValue: size.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
          options: sizeOptions,
          style: { "margin-bottom": "1rem" }
        }, null, 8, ["modelValue"]),
        _cache[3] || (_cache[3] = _createElementVNode(
          "br",
          null,
          null,
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_segmented, {
          modelValue: direction.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => direction.value = $event),
          options: directionOptions,
          style: { "margin-bottom": "1rem" }
        }, null, 8, ["modelValue"]),
        _cache[4] || (_cache[4] = _createElementVNode(
          "br",
          null,
          null,
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options,
          direction: direction.value,
          size: size.value
        }, {
          default: _withCtx((scope) => [
            _createElementVNode(
              "div",
              {
                class: _normalizeClass([
                  "flex",
                  "items-center",
                  "gap-2",
                  "flex-col",
                  direction.value === "horizontal" && "p-2"
                ])
              },
              [
                _createVNode(
                  _component_el_icon,
                  { size: "20" },
                  {
                    default: _withCtx(() => [
                      (_openBlock(), _createBlock(_resolveDynamicComponent(scope.item.icon)))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                ),
                _createElementVNode(
                  "div",
                  null,
                  _toDisplayString(scope.item.label),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "direction", "size"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col items-start gap-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref("Mon");
    const options = [
      {
        label: "Mon",
        value: "Mon",
        disabled: true
      },
      {
        label: "Tue",
        value: "Tue"
      },
      {
        label: "Wed",
        value: "Wed",
        disabled: true
      },
      {
        label: "Thu",
        value: "Thu"
      },
      {
        label: "Fri",
        value: "Fri",
        disabled: true
      },
      {
        label: "Sat",
        value: "Sat"
      },
      {
        label: "Sun",
        value: "Sun"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options,
          disabled: ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义选项 2.9.8", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref("Mon");
    const props = {
      label: "myLabel",
      value: "myValue",
      disabled: "myDisabled"
    };
    const options = [
      {
        myLabel: "Mon",
        myValue: "Mon",
        myDisabled: true
      },
      {
        myLabel: "Tue",
        myValue: "Tue"
      },
      {
        myLabel: "Wed",
        myValue: "Wed",
        myDisabled: true
      },
      {
        myLabel: "Thu",
        myValue: "Thu"
      },
      {
        myLabel: "Fri",
        myValue: "Fri",
        myDisabled: true
      },
      {
        myLabel: "Sat",
        myValue: "Sat"
      },
      {
        myLabel: "Sun",
        myValue: "Sun"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options,
          props
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "Block 分段选择器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref("Mon");
    const options = [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sunday long long long long long long long"
    ];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options,
          block: ""
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveDynamicComponent: _resolveDynamicComponent, openBlock: _openBlock, createBlock: _createBlock, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col items-center gap-2 p-2" };
const { ref } = Vue;
const { Apple, Cherry, Grape, Orange, Pear, Watermelon } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value = ref("Apple");
    const options = [
      {
        label: "Apple",
        value: "Apple",
        icon: Apple
      },
      {
        label: "Cherry",
        value: "Cherry",
        icon: Cherry
      },
      {
        label: "Grape",
        value: "Grape",
        icon: Grape
      },
      {
        label: "Orange",
        value: "Orange",
        icon: Orange
      },
      {
        label: "Pear",
        value: "Pear",
        icon: Pear
      },
      {
        label: "Watermelon",
        value: "Watermelon",
        icon: Watermelon
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options
        }, {
          default: _withCtx((scope) => [
            _createElementVNode("div", _hoisted_1, [
              _createVNode(
                _component_el_icon,
                { size: "20" },
                {
                  default: _withCtx(() => [
                    (_openBlock(), _createBlock(_resolveDynamicComponent(scope.item.icon)))
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ),
              _createElementVNode(
                "div",
                null,
                _toDisplayString(scope.item.label),
                1
                /* TEXT */
              )
            ])
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
  { title: "自定义样式", css: "\n.custom-style .el-segmented[data-v-tm98j3] {\n\n  --el-segmented-item-selected-color: var(--el-text-color-primary);\n\n  --el-segmented-item-selected-bg-color: #ffd100;\n\n  --el-border-radius-base: 16px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "custom-style" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value = ref("Delicacy");
    const options = ["Delicacy", "Desserts&Drinks", "Fresh foods", "Supermarket"];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_segmented, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
