window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["alert"] = [
  { title: "基础用法", css: "\n.el-alert {\n\n  margin: 20px 0 0;\n}\n.el-alert:first-child {\n\n  margin: 0;\n}\n\n\n", comp: { template: "\n\n  <div style=\"max-width: 600px\">\n\n    <el-alert title=\"Primary alert\" type=\"primary\" />\n\n    <el-alert title=\"Success alert\" type=\"success\" />\n\n    <el-alert title=\"Info alert\" type=\"info\" />\n\n    <el-alert title=\"Warning alert\" type=\"warning\" />\n\n    <el-alert title=\"Error alert\" type=\"error\" />\n\n  </div>\n\n" } },
  { title: "主题", css: "\n.el-alert {\n\n  margin: 20px 0 0;\n}\n.el-alert:first-child {\n\n  margin: 0;\n}\n\n\n", comp: { template: "\n\n  <div style=\"max-width: 600px\">\n\n    <el-alert title=\"Primary alert\" type=\"primary\" effect=\"dark\" />\n\n    <el-alert title=\"Success alert\" type=\"success\" effect=\"dark\" />\n\n    <el-alert title=\"Info alert\" type=\"info\" effect=\"dark\" />\n\n    <el-alert title=\"Warning alert\" type=\"warning\" effect=\"dark\" />\n\n    <el-alert title=\"Error alert\" type=\"error\" effect=\"dark\" />\n\n  </div>\n\n" } },
  { title: "自定义关闭按钮", css: "\n.el-alert[data-v-xruje1] {\n\n  margin: 20px 0 0;\n}\n.el-alert[data-v-xruje1]:first-child {\n\n  margin: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "max-width": "600px" } };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const hello = () => {
      alert("Hello World!");
    };
    return (_ctx, _cache) => {
      const _component_el_alert = _resolveComponent("el-alert");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_alert, {
          title: "Unclosable alert",
          type: "success",
          closable: false
        }),
        _createVNode(_component_el_alert, {
          title: "Customized close text",
          type: "info",
          "close-text": "Gotcha"
        }),
        _createVNode(_component_el_alert, {
          title: "Alert with callback",
          type: "warning",
          onClose: hello
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "使用图标", css: "\n.el-alert[data-v-xraqso] {\n\n  margin: 20px 0 0;\n}\n.el-alert[data-v-xraqso]:first-child {\n\n  margin: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "max-width": "600px" } };
const { Bell } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_alert = _resolveComponent("el-alert");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_alert, {
          title: "Primary alert",
          type: "primary",
          "show-icon": ""
        }),
        _createVNode(_component_el_alert, {
          title: "Success alert",
          type: "success",
          "show-icon": ""
        }),
        _createVNode(_component_el_alert, {
          title: "Info alert",
          type: "info",
          "show-icon": ""
        }),
        _createVNode(_component_el_alert, {
          title: "Warning alert",
          type: "warning",
          "show-icon": ""
        }),
        _createVNode(_component_el_alert, {
          title: "Error alert",
          type: "error",
          "show-icon": ""
        }),
        _createVNode(_component_el_alert, {
          title: "Error alert with custom icon",
          type: "error",
          "show-icon": ""
        }, {
          icon: _withCtx(() => [
            _createVNode(_unref(Bell))
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
  { title: "文字居中", css: "\n.el-alert {\n\n  margin: 20px 0 0;\n}\n.el-alert:first-child {\n\n  margin: 0;\n}\n\n\n", comp: { template: "\n\n  <div style=\"max-width: 600px\">\n\n    <el-alert title=\"Primary alert\" type=\"primary\" center show-icon />\n\n    <el-alert title=\"Success alert\" type=\"success\" center show-icon />\n\n    <el-alert title=\"Info alert\" type=\"info\" center show-icon />\n\n    <el-alert title=\"Warning alert\" type=\"warning\" center show-icon />\n\n    <el-alert title=\"Error alert\" type=\"error\" center show-icon />\n\n  </div>\n\n" } },
  { title: "文字描述", css: "", comp: { template: "\n\n  <div style=\"max-width: 600px\">\n\n    <el-alert\n\n      title=\"With description\"\n\n      type=\"success\"\n\n      description=\"This is a description.\"\n\n    />\n\n  </div>\n\n" } },
  { title: "带图标和描述", css: "\n.el-alert {\n\n  margin: 20px 0 0;\n}\n.el-alert:first-child {\n\n  margin: 0;\n}\n\n\n", comp: { template: "\n\n  <div style=\"max-width: 600px\">\n\n    <el-alert\n\n      title=\"Primary alert\"\n\n      type=\"primary\"\n\n      description=\"More text description\"\n\n      show-icon\n\n    />\n\n    <el-alert\n\n      title=\"Success alert\"\n\n      type=\"success\"\n\n      description=\"More text description\"\n\n      show-icon\n\n    />\n\n    <el-alert\n\n      title=\"Info alert\"\n\n      type=\"info\"\n\n      description=\"More text description\"\n\n      show-icon\n\n    />\n\n    <el-alert\n\n      title=\"Warning alert\"\n\n      type=\"warning\"\n\n      description=\"More text description\"\n\n      show-icon\n\n    />\n\n    <el-alert\n\n      title=\"Error alert\"\n\n      type=\"error\"\n\n      description=\"More text description\"\n\n      show-icon\n\n    />\n\n  </div>\n\n" } },
];
