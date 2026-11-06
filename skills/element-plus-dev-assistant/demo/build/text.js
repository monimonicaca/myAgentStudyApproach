window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["text"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-text class=\"mx-1\">Default</el-text>\n\n  <el-text class=\"mx-1\" type=\"primary\">Primary</el-text>\n\n  <el-text class=\"mx-1\" type=\"success\">Success</el-text>\n\n  <el-text class=\"mx-1\" type=\"info\">Info</el-text>\n\n  <el-text class=\"mx-1\" type=\"warning\">Warning</el-text>\n\n  <el-text class=\"mx-1\" type=\"danger\">Danger</el-text>\n\n" } },
  { title: "尺寸", css: "", comp: { template: "\n\n  <el-text class=\"mx-1\" size=\"large\">Large</el-text>\n\n  <el-text class=\"mx-1\">Default</el-text>\n\n  <el-text class=\"mx-1\" size=\"small\">Small</el-text>\n\n" } },
  { title: "省略", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const textRef = ref();
    return (_ctx, _cache) => {
      const _component_el_text = _resolveComponent("el-text");
      const _component_el_row = _resolveComponent("el-row");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_text, {
            class: "w-150px mb-2",
            truncated: ""
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " Self element set width 100px ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_row, { class: "w-150px mb-2" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_text, { truncated: "" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Squeezed by parent element",
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
          _createVNode(_component_el_row, { class: "mb-2" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_text, { "line-clamp": "2" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    " The -webkit-line-clamp CSS property",
                    -1
                    /* CACHED */
                  ),
                  _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  ),
                  _createTextVNode(
                    " allows limiting of the contents of",
                    -1
                    /* CACHED */
                  ),
                  _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  ),
                  _createTextVNode(
                    " a block to the specified number of lines. ",
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
          _createVNode(_component_el_row, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_tooltip, {
                content: "Show tooltip only when the text is truncated",
                disabled: !textRef.value?.isTruncated
              }, {
                default: _withCtx(() => [
                  _createVNode(
                    _component_el_text,
                    {
                      ref_key: "textRef",
                      ref: textRef,
                      class: "w-150px",
                      truncated: "",
                      title: ""
                    },
                    {
                      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                        _createTextVNode(
                          " Show tooltip only when the text is truncated ",
                          -1
                          /* CACHED */
                        )
                      ])]),
                      _: 1
                      /* STABLE */
                    },
                    512
                    /* NEED_PATCH */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "覆盖", css: "", comp: { template: "\n\n  <el-space direction=\"vertical\">\n\n    <el-text>span</el-text>\n\n    <el-text tag=\"p\">This is a paragraph.</el-text>\n\n    <el-text tag=\"b\">Bold</el-text>\n\n    <el-text tag=\"i\">Italic</el-text>\n\n    <el-text>\n\n      This is\n\n      <el-text tag=\"sub\" size=\"small\">subscript</el-text>\n\n    </el-text>\n\n    <el-text>\n\n      This is\n\n      <el-text tag=\"sup\" size=\"small\">superscript</el-text>\n\n    </el-text>\n\n    <el-text tag=\"ins\">Inserted</el-text>\n\n    <el-text tag=\"del\">Deleted</el-text>\n\n    <el-text tag=\"mark\">Marked</el-text>\n\n  </el-space>\n\n" } },
  { title: "混合使用", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { Bell, ElementPlus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_text = _resolveComponent("el-text");
      const _component_el_rate = _resolveComponent("el-rate");
      const _component_el_row = _resolveComponent("el-row");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_space = _resolveComponent("el-space");
      return _openBlock(), _createBlock(_component_el_space, { direction: "vertical" }, {
        default: _withCtx(() => [
          _createVNode(_component_el_text, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(ElementPlus))
                ]),
                _: 1
                /* STABLE */
              }),
              _cache[0] || (_cache[0] = _createTextVNode(
                " Element-Plus ",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_row, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_text, null, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Rate",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_rate, { class: "ml-1" })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_text, null, {
            default: _withCtx(() => [
              _cache[3] || (_cache[3] = _createTextVNode(
                " This is text mixed icon ",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(Bell))
                ]),
                _: 1
                /* STABLE */
              }),
              _cache[4] || (_cache[4] = _createTextVNode(
                " and component ",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Button",
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
];
