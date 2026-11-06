window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["watermark"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, watch } = Vue;
const isDark = false;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const font = reactive({
      color: "rgba(0, 0, 0, .15)"
    });
    watch(
      isDark,
      () => {
        font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      const _component_el_watermark = _resolveComponent("el-watermark");
      return _openBlock(), _createBlock(_component_el_watermark, { font }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "div",
            { style: { "height": "500px" } },
            null,
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["font"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "多行水印", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, watch } = Vue;
const isDark = false;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const font = reactive({
      color: "rgba(0, 0, 0, .15)"
    });
    watch(
      isDark,
      () => {
        font.color = isDark.value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      const _component_el_watermark = _resolveComponent("el-watermark");
      return _openBlock(), _createBlock(_component_el_watermark, {
        font,
        content: ["Element+", "Element Plus"]
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "div",
            { style: { "height": "500px" } },
            null,
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["font"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "图片水印", css: "", comp: { template: "\n\n  <el-watermark\n\n    :width=\"130\"\n\n    :height=\"30\"\n\n    image=\"https://element-plus.org/images/element-plus-logo.svg\"\n\n  >\n\n    <div style=\"height: 500px\" />\n\n  </el-watermark>\n\n" } },
  { title: "自定义配置", css: "\n.wrapper[data-v-onoisg] {\n\n  display: flex;\n}\n.watermark[data-v-onoisg] {\n\n  display: flex;\n\n  flex: auto;\n}\n.watermark-container[data-v-onoisg] {\n\n  flex: auto;\n}\n.form[data-v-onoisg] {\n\n  width: 330px;\n\n  margin-left: 20px;\n\n  border-left: 1px solid #eee;\n\n  padding-left: 20px;\n}\nimg[data-v-onoisg] {\n\n  z-index: 10;\n\n  width: 100%;\n\n  max-width: 300px;\n\n  position: relative;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "wrapper" };
const { reactive, watch } = Vue;
const isDark = false;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const config = reactive({
      content: "Element Plus",
      font: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.15)"
      },
      zIndex: -1,
      rotate: -22,
      gap: [100, 100],
      offset: []
    });
    watch(
      isDark,
      (value) => {
        config.font.color = value ? "rgba(255, 255, 255, .15)" : "rgba(0, 0, 0, .15)";
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_el_watermark = _resolveComponent("el-watermark");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_color_picker = _resolveComponent("el-color-picker");
      const _component_el_slider = _resolveComponent("el-slider");
      const _component_el_input_number = _resolveComponent("el-input-number");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_watermark, {
          class: "watermark",
          content: config.content,
          font: config.font,
          "z-index": config.zIndex,
          rotate: config.rotate,
          gap: config.gap,
          offset: config.offset
        }, {
          default: _withCtx(() => [..._cache[9] || (_cache[9] = [
            _createElementVNode(
              "div",
              { class: "watermark-container" },
              [
                _createElementVNode("h1", null, "Element Plus"),
                _createElementVNode("h2", null, "A Vue 3 based component library for designers and developers"),
                _createElementVNode("img", {
                  src: "/images/hamburger.png",
                  alt: "\u793A\u4F8B\u56FE\u7247"
                })
              ],
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["content", "font", "z-index", "rotate", "gap", "offset"]),
        _createVNode(_component_el_form, {
          class: "form",
          model: config,
          "label-position": "top",
          "label-width": "50px"
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_form_item, { label: "Content" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_input, {
                  modelValue: config.content,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.content = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "Color" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_color_picker, {
                  modelValue: config.font.color,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.font.color = $event),
                  "show-alpha": ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "FontSize" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_slider, {
                  modelValue: config.font.fontSize,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => config.font.fontSize = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "zIndex" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_slider, {
                  modelValue: config.zIndex,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => config.zIndex = $event)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "Rotate" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_slider, {
                  modelValue: config.rotate,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => config.rotate = $event),
                  min: -180,
                  max: 180
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "Gap" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_space, null, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_input_number, {
                      modelValue: config.gap[0],
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => config.gap[0] = $event),
                      "controls-position": "right"
                    }, null, 8, ["modelValue"]),
                    _createVNode(_component_el_input_number, {
                      modelValue: config.gap[1],
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => config.gap[1] = $event),
                      "controls-position": "right"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_form_item, { label: "Offset" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_space, null, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_input_number, {
                      modelValue: config.offset[0],
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => config.offset[0] = $event),
                      placeholder: "offsetLeft",
                      "controls-position": "right"
                    }, null, 8, ["modelValue"]),
                    _createVNode(_component_el_input_number, {
                      modelValue: config.offset[1],
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => config.offset[1] = $event),
                      placeholder: "offsetTop",
                      "controls-position": "right"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["model"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
