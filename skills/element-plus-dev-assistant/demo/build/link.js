window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["link"] = [
  { title: "基础用法", css: "\n.el-link {\n\n  margin-right: 8px;\n}\n\n\n", comp: { template: "\n\n  <div>\n\n    <el-link href=\"https://element-plus.org\" target=\"_blank\">default</el-link>\n\n    <el-link type=\"primary\">primary</el-link>\n\n    <el-link type=\"success\">success</el-link>\n\n    <el-link type=\"warning\">warning</el-link>\n\n    <el-link type=\"danger\">danger</el-link>\n\n    <el-link type=\"info\">info</el-link>\n\n  </div>\n\n" } },
  { title: "禁用状态", css: "\n.el-link {\n\n  margin-right: 8px;\n}\n\n\n", comp: { template: "\n\n  <div>\n\n    <el-link disabled>default</el-link>\n\n    <el-link type=\"primary\" disabled>primary</el-link>\n\n    <el-link type=\"success\" disabled>success</el-link>\n\n    <el-link type=\"warning\" disabled>warning</el-link>\n\n    <el-link type=\"danger\" disabled>danger</el-link>\n\n    <el-link type=\"info\" disabled>info</el-link>\n\n  </div>\n\n" } },
  { title: "下划线", css: "\n.el-link {\n\n  margin-right: 8px;\n}\n\n\n", comp: { template: "\n\n  <div>\n\n    <el-link>default</el-link>\n\n    <el-link underline=\"always\">always</el-link>\n\n    <el-link underline=\"hover\">hover</el-link>\n\n    <el-link underline=\"never\">never</el-link>\n\n  </div>\n\n" } },
  { title: "图标", css: "\n.el-link[data-v-44hiq2] {\n\n  margin-right: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { Edit, View: IconView } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_link = _resolveComponent("el-link");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_link, { icon: _unref(Edit) }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Edit",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["icon"]),
        _createVNode(_component_el_link, null, {
          default: _withCtx(() => [
            _cache[1] || (_cache[1] = _createTextVNode(
              " Check",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_icon, { class: "el-icon--right" }, {
              default: _withCtx(() => [
                _createVNode(_unref(IconView))
              ]),
              _: 1
              /* STABLE */
            })
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
