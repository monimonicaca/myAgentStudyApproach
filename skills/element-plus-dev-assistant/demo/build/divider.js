window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["divider"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <div>\n\n    <span>\n\n      I sit at my window this morning where the world like a passer-by stops for\n\n      a moment, nods to me and goes.\n\n    </span>\n\n    <el-divider />\n\n    <span>\n\n      There little thoughts are the rustle of leaves; they have their whisper of\n\n      joy in my mind.\n\n    </span>\n\n  </div>\n\n" } },
  { title: "设置文案", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { StarFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", null, [
        _cache[2] || (_cache[2] = _createElementVNode(
          "span",
          null,
          "What you are you do not see, what you see is your shadow. ",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_divider, { "content-position": "left" }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Rabindranath Tagore",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[3] || (_cache[3] = _createElementVNode(
          "span",
          null,
          " My wishes are fools, they shout across thy song, my Master. Let me but listen. ",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_divider, null, {
          default: _withCtx(() => [
            _createVNode(_component_el_icon, null, {
              default: _withCtx(() => [
                _createVNode(_unref(StarFilled))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        _cache[4] || (_cache[4] = _createElementVNode(
          "span",
          null,
          "I cannot choose the best. The best chooses me.",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_divider, { "content-position": "right" }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              "Rabindranath Tagore",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "虚线", css: "", comp: { template: "\n\n  <div>\n\n    <span>What language is thine, O sea?</span>\n\n    <el-divider border-style=\"dashed\" />\n\n    <span>The language of eternal question.</span>\n\n  </div>\n\n  <el-divider border-style=\"dotted\" />\n\n  <span>What language is thy answer, O sky?</span>\n\n  <el-divider border-style=\"double\" />\n\n  <span>The language of eternal silence.</span>\n\n" } },
  { title: "垂直分隔线", css: "", comp: { template: "\n\n  <div>\n\n    <span>Rain</span>\n\n    <el-divider direction=\"vertical\" />\n\n    <span>Home</span>\n\n    <el-divider direction=\"vertical\" border-style=\"dashed\" />\n\n    <span>Grass</span>\n\n  </div>\n\n" } },
];
