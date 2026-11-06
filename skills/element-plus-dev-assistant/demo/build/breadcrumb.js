window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["breadcrumb"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-breadcrumb separator=\"/\">\n\n    <el-breadcrumb-item :to=\"{ path: '/' }\">homepage</el-breadcrumb-item>\n\n    <el-breadcrumb-item>\n\n      <a href=\"/\">promotion management</a>\n\n    </el-breadcrumb-item>\n\n    <el-breadcrumb-item>promotion list</el-breadcrumb-item>\n\n    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>\n\n  </el-breadcrumb>\n\n" } },
  { title: "图标分隔符", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ArrowRight } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");
      const _component_el_breadcrumb = _resolveComponent("el-breadcrumb");
      return _openBlock(), _createBlock(_component_el_breadcrumb, { "separator-icon": _unref(ArrowRight) }, {
        default: _withCtx(() => [
          _createVNode(_component_el_breadcrumb_item, { to: { path: "/" } }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "homepage",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_breadcrumb_item, null, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "promotion management",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_breadcrumb_item, null, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "promotion list",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_breadcrumb_item, null, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "promotion detail",
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
      }, 8, ["separator-icon"]);
    };
  }
});
return stdin_default;
 })() },
];
