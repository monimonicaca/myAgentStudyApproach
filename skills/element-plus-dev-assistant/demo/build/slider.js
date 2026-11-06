window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["slider"] = [
  { title: "基础用法", css: "\n.slider-demo-block[data-v-hlmxi2] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hlmxi2] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n.slider-demo-block .demonstration[data-v-hlmxi2] {\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n\n  line-height: 44px;\n\n  flex: 1;\n\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n\n  white-space: nowrap;\n\n  margin-bottom: 0;\n}\n.slider-demo-block .demonstration + .el-slider[data-v-hlmxi2] {\n\n  flex: 0 0 70%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const _hoisted_2 = { class: "slider-demo-block" };
const _hoisted_3 = { class: "slider-demo-block" };
const _hoisted_4 = { class: "slider-demo-block" };
const _hoisted_5 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value1 = ref(0);
    const value2 = ref(0);
    const value3 = ref(0);
    const value4 = ref(0);
    const value5 = ref(0);
    const formatTooltip = (val) => {
      return val / 100;
    };
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[5] || (_cache[5] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Default value",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[6] || (_cache[6] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Customized initial value",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[7] || (_cache[7] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Hide Tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
              "show-tooltip": false
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[8] || (_cache[8] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Format Tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
              "format-tooltip": formatTooltip
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_5, [
            _cache[9] || (_cache[9] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Disabled",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value5.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value5.value = $event),
              disabled: ""
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
  { title: "离散值", css: "\n.slider-demo-block[data-v-hm6q3f] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hm6q3f] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n.slider-demo-block .demonstration[data-v-hm6q3f] {\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n\n  line-height: 44px;\n\n  flex: 1;\n\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n\n  white-space: nowrap;\n\n  margin-bottom: 0;\n}\n.slider-demo-block .demonstration + .el-slider[data-v-hm6q3f] {\n\n  flex: 0 0 70%;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const _hoisted_2 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value1 = ref(0);
    const value2 = ref(0);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Breakpoints not displayed",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              step: 10
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Breakpoints displayed",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_slider, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              step: 10,
              "show-stops": ""
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
  { title: "带有输入框的滑块", css: "\n.slider-demo-block[data-v-hmqios] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hmqios] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref(0);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          "show-input": ""
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "不同尺寸", css: "\n.slider-demo-block[data-v-hnaba5] {\n\n  max-width: 600px;\n}\n.el-slider[data-v-hnaba5] {\n\n  margin-top: 20px;\n}\n.el-slider[data-v-hnaba5]:first-child {\n\n  margin-top: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref(0);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          "show-input": "",
          size: "large"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          "show-input": ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          "show-input": "",
          size: "small"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "位置", css: "\n.slider-demo-block[data-v-hnu3vi] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hnu3vi] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const _hoisted_2 = { class: "slider-demo-block" };
const _hoisted_3 = { class: "slider-demo-block" };
const _hoisted_4 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value1 = ref(0);
    const value2 = ref(0);
    const value3 = ref(0);
    const value4 = ref(0);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_slider, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_slider, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              placement: "bottom"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_slider, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
              placement: "right"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _createVNode(_component_el_slider, {
              modelValue: value4.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
              placement: "left"
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
  { title: "范围选择", css: "\n.slider-demo-block[data-v-hodwgv] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hodwgv] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value = ref([4, 8]);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          range: "",
          "show-stops": "",
          max: 10
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "垂直模式", css: "\n.slider-demo-block[data-v-hoxp28] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hoxp28] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value = ref(0);
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          vertical: "",
          height: "200px"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "显示标记", css: "\n.slider-demo-block[data-v-hphhnl] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hphhnl] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const value = ref([30, 60]);
    const marks = reactive({
      0: "0\xB0C",
      8: "8\xB0C",
      37: "37\xB0C",
      50: {
        style: {
          color: "#1989FA"
        },
        label: "50%"
      }
    });
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_slider, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          range: "",
          marks
        }, null, 8, ["modelValue", "marks"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "限制值 2.13.6", css: "\n.slider-demo-block[data-v-hq1a8y] {\n\n  max-width: 600px;\n\n  display: flex;\n\n  align-items: center;\n}\n.slider-demo-block .el-slider[data-v-hq1a8y] {\n\n  margin-top: 0;\n\n  margin-left: 12px;\n}\n.slider-demo-block + .slider-demo-block[data-v-hq1a8y] {\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "slider-demo-block" };
const _hoisted_2 = { class: "slider-demo-block" };
const _hoisted_3 = { class: "slider-demo-block" };
const { ref, shallowReactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const value1 = ref(37);
    const marks1 = shallowReactive({
      0: "0\xB0C",
      37: "37\xB0C",
      100: "100\xB0C"
    });
    const value2 = ref(50);
    const marks2 = shallowReactive({
      0: "0cm",
      10: "10cm",
      25: "25cm",
      50: "50cm",
      75: "75cm",
      100: "100cm"
    });
    const value3 = ref([13, 42]);
    const marks3 = shallowReactive({
      0: "0",
      13: "13",
      42: "42",
      58: "58",
      89: "89",
      100: "100"
    });
    return (_ctx, _cache) => {
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_slider, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              vertical: "",
              height: "200px",
              marks: _unref(marks1),
              placement: "right",
              "format-tooltip": (v) => `${v}\xB0C`,
              step: "mark"
            }, null, 8, ["modelValue", "marks", "format-tooltip"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_slider, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              marks: _unref(marks2),
              step: "mark"
            }, null, 8, ["modelValue", "marks"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _createVNode(_component_el_slider, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
              range: "",
              marks: _unref(marks3),
              step: "mark"
            }, null, 8, ["modelValue", "marks"])
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
];
