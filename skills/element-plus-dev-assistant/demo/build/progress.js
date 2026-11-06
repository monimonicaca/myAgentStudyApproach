window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["progress"] = [
  { title: "直线进度条", css: "\n.demo-progress .el-progress--line[data-v-ljh27a] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const format = (percentage) => percentage === 100 ? "Full" : `${percentage}%`;
    return (_ctx, _cache) => {
      const _component_el_progress = _resolveComponent("el-progress");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, { percentage: 50 }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          format
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          status: "success"
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          status: "warning"
        }),
        _createVNode(_component_el_progress, {
          percentage: 50,
          status: "exception"
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "进度条内显示百分比标识", css: "\n.demo-progress .el-progress--line {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n\n\n", comp: { template: "\n\n  <div class=\"demo-progress\">\n\n    <el-progress :text-inside=\"true\" :stroke-width=\"26\" :percentage=\"70\" />\n\n    <el-progress\n\n      :text-inside=\"true\"\n\n      :stroke-width=\"24\"\n\n      :percentage=\"100\"\n\n      status=\"success\"\n\n    />\n\n    <el-progress\n\n      :text-inside=\"true\"\n\n      :stroke-width=\"22\"\n\n      :percentage=\"80\"\n\n      status=\"warning\"\n\n    />\n\n    <el-progress\n\n      :text-inside=\"true\"\n\n      :stroke-width=\"20\"\n\n      :percentage=\"50\"\n\n      status=\"exception\"\n\n    />\n\n  </div>\n\n" } },
  { title: "自定义进度条的颜色", css: "\n.demo-progress .el-progress--line[data-v-lkkne0] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
const { ref } = Vue;
const { Minus, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const percentage = ref(20);
    const customColor = ref("#409eff");
    const customColors = [
      { color: "#f56c6c", percentage: 20 },
      { color: "#e6a23c", percentage: 40 },
      { color: "#5cb87a", percentage: 60 },
      { color: "#1989fa", percentage: 80 },
      { color: "#6f7ad3", percentage: 100 }
    ];
    const customColorMethod = (percentage2) => {
      if (percentage2 < 30) {
        return "#909399";
      }
      if (percentage2 < 70) {
        return "#e6a23c";
      }
      return "#67c23a";
    };
    const increase = () => {
      percentage.value += 10;
      if (percentage.value > 100) {
        percentage.value = 100;
      }
    };
    const decrease = () => {
      percentage.value -= 10;
      if (percentage.value < 0) {
        percentage.value = 0;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_progress = _resolveComponent("el-progress");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_button_group = _resolveComponent("el-button-group");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, {
          percentage: percentage.value,
          color: customColor.value
        }, null, 8, ["percentage", "color"]),
        _createVNode(_component_el_progress, {
          percentage: percentage.value,
          color: customColorMethod
        }, null, 8, ["percentage"]),
        _createVNode(_component_el_progress, {
          percentage: percentage.value,
          color: customColors
        }, null, 8, ["percentage"]),
        _createVNode(_component_el_progress, {
          percentage: percentage.value,
          color: customColors
        }, null, 8, ["percentage"]),
        _createElementVNode("div", null, [
          _createVNode(_component_el_button_group, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                icon: _unref(Minus),
                onClick: decrease
              }, null, 8, ["icon"]),
              _createVNode(_component_el_button, {
                icon: _unref(Plus),
                onClick: increase
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "环形进度条", css: "\n.demo-progress .el-progress--circle {\n\n  margin-right: 15px;\n}\n\n\n", comp: { template: "\n\n  <div class=\"demo-progress\">\n\n    <el-progress type=\"circle\" :percentage=\"0\" />\n\n    <el-progress type=\"circle\" :percentage=\"25\" />\n\n    <el-progress type=\"circle\" :percentage=\"100\" status=\"success\" />\n\n    <el-progress type=\"circle\" :percentage=\"70\" status=\"warning\" />\n\n    <el-progress type=\"circle\" :percentage=\"50\" status=\"exception\" />\n\n  </div>\n\n" } },
  { title: "仪表盘形进度条", css: "\n.demo-progress .el-progress--line[data-v-llo8kq] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n.demo-progress .el-progress--circle[data-v-llo8kq] {\n\n  margin-right: 15px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
const { onMounted, ref } = Vue;
const { Minus, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const percentage = ref(10);
    const percentage2 = ref(0);
    const colors = [
      { color: "#f56c6c", percentage: 20 },
      { color: "#e6a23c", percentage: 40 },
      { color: "#5cb87a", percentage: 60 },
      { color: "#1989fa", percentage: 80 },
      { color: "#6f7ad3", percentage: 100 }
    ];
    const increase = () => {
      percentage.value += 10;
      if (percentage.value > 100) {
        percentage.value = 100;
      }
    };
    const decrease = () => {
      percentage.value -= 10;
      if (percentage.value < 0) {
        percentage.value = 0;
      }
    };
    onMounted(() => {
      setInterval(() => {
        percentage2.value = percentage2.value % 100 + 10;
      }, 500);
    });
    return (_ctx, _cache) => {
      const _component_el_progress = _resolveComponent("el-progress");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_button_group = _resolveComponent("el-button-group");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: percentage.value,
          color: colors
        }, null, 8, ["percentage"]),
        _createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: percentage2.value,
          color: colors
        }, null, 8, ["percentage"]),
        _createElementVNode("div", null, [
          _createVNode(_component_el_button_group, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                icon: _unref(Minus),
                onClick: decrease
              }, null, 8, ["icon"]),
              _createVNode(_component_el_button, {
                icon: _unref(Plus),
                onClick: increase
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义内容", css: "\n.percentage-value[data-v-lm8163] {\n\n  display: block;\n\n  margin-top: 10px;\n\n  font-size: 28px;\n}\n.percentage-label[data-v-lm8163] {\n\n  display: block;\n\n  margin-top: 10px;\n\n  font-size: 12px;\n}\n.demo-progress .el-progress--line[data-v-lm8163] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n.demo-progress .el-progress--circle[data-v-lm8163] {\n\n  margin-right: 15px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, unref: _unref, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
const _hoisted_2 = { class: "percentage-value" };
const { Check } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_progress = _resolveComponent("el-progress");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, { percentage: 50 }, {
          default: _withCtx(() => [
            _createVNode(_component_el_button, { text: "" }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "Content",
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
        }),
        _createVNode(_component_el_progress, {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createElementVNode(
              "span",
              null,
              "Content",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_progress, {
          type: "circle",
          percentage: 100,
          status: "success"
        }, {
          default: _withCtx(() => [
            _createVNode(_component_el_button, {
              type: "success",
              icon: _unref(Check),
              circle: ""
            }, null, 8, ["icon"])
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_progress, {
          type: "dashboard",
          percentage: 80
        }, {
          default: _withCtx(({ percentage }) => [
            _createElementVNode(
              "span",
              _hoisted_2,
              _toDisplayString(percentage) + "%",
              1
              /* TEXT */
            ),
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              { class: "percentage-label" },
              "Progressing",
              -1
              /* CACHED */
            ))
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
  { title: "动画进度条", css: "\n.demo-progress .el-progress--line[data-v-lmrtrg] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const format = (percentage) => percentage === 100 ? "Full" : `${percentage}%`;
    return (_ctx, _cache) => {
      const _component_el_progress = _resolveComponent("el-progress");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, {
          percentage: 50,
          indeterminate: true
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          format,
          indeterminate: true
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          status: "success",
          indeterminate: true,
          duration: 5
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          status: "warning",
          indeterminate: true,
          duration: 1
        }),
        _createVNode(_component_el_progress, {
          percentage: 50,
          status: "exception",
          indeterminate: true
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "条纹进度条", css: "\n.demo-progress .el-progress--line[data-v-lnbmct] {\n\n  margin-bottom: 15px;\n\n  max-width: 600px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-progress" };
const { computed, ref } = Vue;
const { Minus, Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const percentage = ref(70);
    const duration = computed(() => Math.floor(percentage.value / 10));
    const increase = () => {
      percentage.value += 10;
      if (percentage.value > 100) {
        percentage.value = 100;
      }
    };
    const decrease = () => {
      percentage.value -= 10;
      if (percentage.value < 0) {
        percentage.value = 0;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_progress = _resolveComponent("el-progress");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_button_group = _resolveComponent("el-button-group");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_progress, {
          percentage: 50,
          "stroke-width": 15,
          striped: ""
        }),
        _createVNode(_component_el_progress, {
          percentage: 30,
          "stroke-width": 15,
          status: "warning",
          striped: "",
          "striped-flow": ""
        }),
        _createVNode(_component_el_progress, {
          percentage: 100,
          "stroke-width": 15,
          status: "success",
          striped: "",
          "striped-flow": "",
          duration: 10
        }),
        _createVNode(_component_el_progress, {
          percentage: percentage.value,
          "stroke-width": 15,
          status: "exception",
          striped: "",
          "striped-flow": "",
          duration: duration.value
        }, null, 8, ["percentage", "duration"]),
        _createVNode(_component_el_button_group, null, {
          default: _withCtx(() => [
            _createVNode(_component_el_button, {
              icon: _unref(Minus),
              onClick: decrease
            }, null, 8, ["icon"]),
            _createVNode(_component_el_button, {
              icon: _unref(Plus),
              onClick: increase
            }, null, 8, ["icon"])
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
];
