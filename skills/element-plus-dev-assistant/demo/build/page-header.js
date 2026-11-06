window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["page-header"] = [
  { title: "完整示例", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { "aria-label": "A complete example of page header" };
const _hoisted_2 = { class: "flex items-center" };
const _hoisted_3 = { class: "flex items-center" };
const { ElNotification: notify } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const onBack = () => {
      notify("Back");
    };
    return (_ctx, _cache) => {
      const _component_el_breadcrumb_item = _resolveComponent("el-breadcrumb-item");
      const _component_el_breadcrumb = _resolveComponent("el-breadcrumb");
      const _component_el_avatar = _resolveComponent("el-avatar");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");
      const _component_el_descriptions = _resolveComponent("el-descriptions");
      const _component_el_page_header = _resolveComponent("el-page-header");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_page_header, { onBack }, {
          breadcrumb: _withCtx(() => [
            _createVNode(_component_el_breadcrumb, { separator: "/" }, {
              default: _withCtx(() => [
                _createVNode(_component_el_breadcrumb_item, { to: { path: "./page-header.html" } }, {
                  default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                    _createTextVNode(
                      " homepage ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_breadcrumb_item, null, {
                  default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                    _createElementVNode(
                      "a",
                      { href: "./page-header.html" },
                      "route 1",
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
                      "route 2",
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
          content: _withCtx(() => [
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_avatar, {
                class: "mr-3",
                size: 32,
                src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              }),
              _cache[4] || (_cache[4] = _createElementVNode(
                "span",
                { class: "text-large font-600 mr-3" },
                " Title ",
                -1
                /* CACHED */
              )),
              _cache[5] || (_cache[5] = _createElementVNode(
                "span",
                {
                  class: "text-sm mr-2",
                  style: { "color": "var(--el-text-color-regular)" }
                },
                " Sub title ",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_tag, null, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          extra: _withCtx(() => [
            _createElementVNode("div", _hoisted_3, [
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "Print",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                type: "primary",
                class: "ml-2"
              }, {
                default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                  _createTextVNode(
                    "Edit",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          default: _withCtx(() => [
            _createVNode(_component_el_descriptions, {
              column: 3,
              size: "small",
              class: "mt-4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_descriptions_item, { label: "Username" }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      " kooriookami ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                  default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                    _createTextVNode(
                      " 18100000000 ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_descriptions_item, { label: "Place" }, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "Suzhou",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_descriptions_item, { label: "Remarks" }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_tag, { size: "small" }, {
                      default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                        _createTextVNode(
                          "School",
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
                _createVNode(_component_el_descriptions_item, { label: "Address" }, {
                  default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                    _createTextVNode(
                      " No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ",
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
            _cache[13] || (_cache[13] = _createElementVNode(
              "p",
              { class: "mt-4 text-sm" },
              [
                _createTextVNode(" Element Plus team uses "),
                _createElementVNode("b", null, "weekly"),
                _createTextVNode(" release strategy under normal circumstance, but critical bug fixes would require hotfix so the actual release number "),
                _createElementVNode("b", null, "could be"),
                _createTextVNode(" more than 1 per week. ")
              ],
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
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const goBack = () => {
      console.log("go back");
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = _resolveComponent("el-page-header");
      return _openBlock(), _createBlock(_component_el_page_header, { onBack: goBack }, {
        content: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "text-large font-600 mr-3" },
            " Title ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ArrowLeft } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_page_header = _resolveComponent("el-page-header");
      return _openBlock(), _createBlock(_component_el_page_header, { icon: _unref(ArrowLeft) }, {
        content: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "text-large font-600 mr-3" },
            " Title ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "无图标", css: "", comp: { template: "\n\n  <el-page-header icon=\"\">\n\n    <template #content>\n\n      <span class=\"text-large font-600 mr-3\"> Title </span>\n\n    </template>\n\n  </el-page-header>\n\n" } },
  { title: "面包屑导航", css: "", comp: { template: "\n\n  <el-page-header>\n\n    <template #breadcrumb>\n\n      <el-breadcrumb separator=\"/\">\n\n        <el-breadcrumb-item :to=\"{ path: './page-header.html' }\">\n\n          homepage\n\n        </el-breadcrumb-item>\n\n        <el-breadcrumb-item\n\n          ><a href=\"./page-header.html\">route 1</a></el-breadcrumb-item\n\n        >\n\n        <el-breadcrumb-item>route 2</el-breadcrumb-item>\n\n      </el-breadcrumb>\n\n    </template>\n\n    <template #content>\n\n      <span class=\"text-large font-600 mr-3\"> Title </span>\n\n    </template>\n\n  </el-page-header>\n\n" } },
  { title: "额外操作部分", css: "", comp: { template: "\n\n  <el-page-header icon=\"\">\n\n    <template #content>\n\n      <div class=\"flex items-center\">\n\n        <el-avatar\n\n          :size=\"32\"\n\n          class=\"mr-3\"\n\n          src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"\n\n        />\n\n        <span class=\"text-large font-600 mr-3\"> Title </span>\n\n        <span class=\"text-sm mr-2\" style=\"color: var(--el-text-color-regular)\">\n\n          Sub title\n\n        </span>\n\n        <el-tag>Default</el-tag>\n\n      </div>\n\n    </template>\n\n    <template #extra>\n\n      <div class=\"flex items-center\">\n\n        <el-button>Print</el-button>\n\n        <el-button type=\"primary\" class=\"ml-2\">Edit</el-button>\n\n      </div>\n\n    </template>\n\n  </el-page-header>\n\n" } },
  { title: "主要内容", css: "", comp: { template: "\n\n  <el-page-header>\n\n    <template #content>\n\n      <span class=\"text-large font-600 mr-3\"> Title </span>\n\n    </template>\n\n    <div class=\"mt-4 text-sm font-bold\">\n\n      Your additional content can be added with default slot, You may put as\n\n      many content as you want here.\n\n    </div>\n\n  </el-page-header>\n\n" } },
];
