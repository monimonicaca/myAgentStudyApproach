window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["icon"] = [
  { title: "示例", css: "\n.icon-row[data-v-qc3rke] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "icon-row" };
const { Check, Delete, Edit, Search, Star } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_icon, { size: 28 }, {
          default: _withCtx(() => [
            _createVNode(_unref(Edit))
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_icon, {
          size: 28,
          color: "#409EFF"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Search))
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_icon, {
          size: 28,
          color: "#67C23A"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Check))
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_icon, {
          size: 28,
          color: "#E6A23C"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Star))
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_icon, {
          size: 28,
          color: "#F56C6C"
        }, {
          default: _withCtx(() => [
            _createVNode(_unref(Delete))
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
