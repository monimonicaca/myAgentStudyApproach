window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["anchor"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const lang = useLang();
    const locale = computed(() => anchorLocale[lang.value]);
    return (_ctx, _cache) => {
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      return _openBlock(), _createBlock(_component_el_anchor, { offset: 70 }, {
        default: _withCtx(() => [
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["basic-usage"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Basic Usage"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["horizontal-mode"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Horizontal Mode"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["scroll-container"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Scroll Container"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["anchor-api"]}`
          }, {
            "sub-link": _withCtx(() => [
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-attributes"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Attributes"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-events"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Events"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"])
            ]),
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Anchor API"]) + " ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "水平模式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const lang = useLang();
    const locale = computed(() => anchorLocale[lang.value]);
    return (_ctx, _cache) => {
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      return _openBlock(), _createBlock(_component_el_anchor, {
        offset: 70,
        direction: "horizontal"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["basic-usage"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Basic Usage"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["horizontal-mode"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Horizontal Mode"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["scroll-container"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Scroll Container"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "滚动容器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "vp-raw" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const containerRef = ref(null);
    const handleClick = (e) => {
      e.preventDefault();
    };
    return (_ctx, _cache) => {
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_row, null, {
          default: _withCtx(() => [
            _createVNode(_component_el_col, { span: 18 }, {
              default: _withCtx(() => [
                _cache[1] || (_cache[1] = _createElementVNode(
                  "div",
                  { style: { "height": "30px", "width": "70%", "background": "#000", "position": "absolute", "top": "0", "left": "0", "color": "#fff" } },
                  " Fixed Top Block ",
                  -1
                  /* CACHED */
                )),
                _createElementVNode(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: containerRef,
                    style: { "height": "300px", "overflow-y": "auto" }
                  },
                  [..._cache[0] || (_cache[0] = [
                    _createElementVNode(
                      "div",
                      {
                        id: "part1",
                        style: { "height": "300px", "background": "rgba(255, 0, 0, 0.02)", "margin-top": "30px" }
                      },
                      " part1 ",
                      -1
                      /* CACHED */
                    ),
                    _createElementVNode(
                      "div",
                      {
                        id: "part2",
                        style: { "height": "300px", "background": "rgba(0, 255, 0, 0.02)", "margin-top": "30px" }
                      },
                      " part2 ",
                      -1
                      /* CACHED */
                    ),
                    _createElementVNode(
                      "div",
                      {
                        id: "part3",
                        style: { "height": "300px", "background": "rgba(0, 0, 255, 0.02)", "margin-top": "30px" }
                      },
                      " part3 ",
                      -1
                      /* CACHED */
                    )
                  ])],
                  512
                  /* NEED_PATCH */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_col, { span: 6 }, {
              default: _withCtx(() => [
                _createElementVNode("div", _hoisted_1, [
                  _createVNode(_component_el_anchor, {
                    container: containerRef.value,
                    direction: "vertical",
                    type: "default",
                    offset: 30,
                    onClick: handleClick
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_anchor_link, {
                        href: "#part1",
                        title: "part1"
                      }),
                      _createVNode(_component_el_anchor_link, {
                        href: "#part2",
                        title: "part2"
                      }),
                      _createVNode(_component_el_anchor_link, {
                        href: "#part3",
                        title: "part3"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["container"])
                ])
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
  { title: "锚点链接变化", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const lang = useLang();
    const locale = computed(() => anchorLocale[lang.value]);
    const handleChange = (href) => {
      console.log(`anchor change: ${href}`);
    };
    return (_ctx, _cache) => {
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      return _openBlock(), _createBlock(_component_el_anchor, {
        offset: 70,
        onChange: handleChange
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["basic-usage"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Basic Usage"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["horizontal-mode"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Horizontal Mode"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["scroll-container"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Scroll Container"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["anchor-api"]}`
          }, {
            "sub-link": _withCtx(() => [
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-attributes"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Attributes"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-events"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Events"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"])
            ]),
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Anchor API"]) + " ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "下划线类型", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const lang = useLang();
    const locale = computed(() => anchorLocale[lang.value]);
    return (_ctx, _cache) => {
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      return _openBlock(), _createBlock(_component_el_anchor, {
        type: "underline",
        offset: 70
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["basic-usage"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Basic Usage"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["horizontal-mode"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Horizontal Mode"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["scroll-container"]}`
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Scroll Container"]),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"]),
          _createVNode(_component_el_anchor_link, {
            href: `#${locale.value["anchor-api"]}`
          }, {
            "sub-link": _withCtx(() => [
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-attributes"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Attributes"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-events"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor Events"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"])
            ]),
            default: _withCtx(() => [
              _createTextVNode(
                _toDisplayString(locale.value["Anchor API"]) + " ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "固定模式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { computed } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const lang = useLang();
    const locale = computed(() => anchorLocale[lang.value]);
    return (_ctx, _cache) => {
      const _component_el_anchor_link = _resolveComponent("el-anchor-link");
      const _component_el_anchor = _resolveComponent("el-anchor");
      const _component_el_affix = _resolveComponent("el-affix");
      return _openBlock(), _createBlock(_component_el_affix, { offset: 60 }, {
        default: _withCtx(() => [
          _createVNode(_component_el_anchor, {
            offset: 70,
            style: { "width": "300px" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["basic-usage"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Basic Usage"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["horizontal-mode"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Horizontal Mode"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["scroll-container"]}`
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Scroll Container"]),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"]),
              _createVNode(_component_el_anchor_link, {
                href: `#${locale.value["anchor-api"]}`
              }, {
                "sub-link": _withCtx(() => [
                  _createVNode(_component_el_anchor_link, {
                    href: `#${locale.value["anchor-attributes"]}`
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(locale.value["Anchor Attributes"]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["href"]),
                  _createVNode(_component_el_anchor_link, {
                    href: `#${locale.value["anchor-events"]}`
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(locale.value["Anchor Events"]),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["href"])
                ]),
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(locale.value["Anchor API"]) + " ",
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["href"])
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
