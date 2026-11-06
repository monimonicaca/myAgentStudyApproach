window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["container"] = [
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-header>Header</el-header>\n\n      <el-main>Main</el-main>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-header>Header</el-header>\n\n      <el-main>Main</el-main>\n\n      <el-footer>Footer</el-footer>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-aside width=\"200px\">Aside</el-aside>\n\n      <el-main>Main</el-main>\n\n      <el-aside width=\"200px\">Aside</el-aside>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-header>Header</el-header>\n\n      <el-container>\n\n        <el-aside width=\"200px\">Aside</el-aside>\n\n        <el-main>Main</el-main>\n\n      </el-container>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-header>Header</el-header>\n\n      <el-container>\n\n        <el-aside width=\"200px\">Aside</el-aside>\n\n        <el-container>\n\n          <el-main>Main</el-main>\n\n          <el-footer>Footer</el-footer>\n\n        </el-container>\n\n      </el-container>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-aside width=\"200px\">Aside</el-aside>\n\n      <el-container>\n\n        <el-header>Header</el-header>\n\n        <el-main>Main</el-main>\n\n      </el-container>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "常见页面布局", css: "", comp: { template: "\n\n  <div class=\"common-layout\">\n\n    <el-container>\n\n      <el-aside width=\"200px\">Aside</el-aside>\n\n      <el-container>\n\n        <el-header>Header</el-header>\n\n        <el-main>Main</el-main>\n\n        <el-footer>Footer</el-footer>\n\n      </el-container>\n\n    </el-container>\n\n  </div>\n\n" } },
  { title: "例子", css: "\n.layout-container-demo .el-header[data-v-b6ref3] {\n\n  position: relative;\n\n  background-color: var(--el-color-primary-light-7);\n\n  color: var(--el-text-color-primary);\n}\n.layout-container-demo .el-aside[data-v-b6ref3] {\n\n  color: var(--el-text-color-primary);\n\n  background: var(--el-color-primary-light-8);\n}\n.layout-container-demo .el-menu[data-v-b6ref3] {\n\n  border-right: none;\n}\n.layout-container-demo .el-main[data-v-b6ref3] {\n\n  padding: 0;\n}\n.layout-container-demo .toolbar[data-v-b6ref3] {\n\n  display: inline-flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 100%;\n\n  right: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "toolbar" };
const { ref } = Vue;
const { Menu: IconMenu, Message, Setting } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    const tableData = ref(Array.from({ length: 20 }).fill(item));
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_menu_item = _resolveComponent("el-menu-item");
      const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");
      const _component_el_sub_menu = _resolveComponent("el-sub-menu");
      const _component_el_menu = _resolveComponent("el-menu");
      const _component_el_scrollbar = _resolveComponent("el-scrollbar");
      const _component_el_aside = _resolveComponent("el-aside");
      const _component_el_dropdown_item = _resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = _resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = _resolveComponent("el-dropdown");
      const _component_el_header = _resolveComponent("el-header");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_main = _resolveComponent("el-main");
      const _component_el_container = _resolveComponent("el-container");
      return _openBlock(), _createBlock(_component_el_container, {
        class: "layout-container-demo",
        style: { "height": "500px" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_aside, { width: "200px" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_scrollbar, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_menu, { "default-openeds": ["1", "3"] }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_sub_menu, { index: "1" }, {
                        title: _withCtx(() => [
                          _createVNode(_component_el_icon, null, {
                            default: _withCtx(() => [
                              _createVNode(_unref(Message))
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          _cache[0] || (_cache[0] = _createTextVNode(
                            "Navigator One ",
                            -1
                            /* CACHED */
                          ))
                        ]),
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item_group, null, {
                            title: _withCtx(() => [..._cache[1] || (_cache[1] = [
                              _createTextVNode(
                                "Group 1",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "1-1" }, {
                                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                                  _createTextVNode(
                                    "Option 1",
                                    -1
                                    /* CACHED */
                                  )
                                ])]),
                                _: 1
                                /* STABLE */
                              }),
                              _createVNode(_component_el_menu_item, { index: "1-2" }, {
                                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                                  _createTextVNode(
                                    "Option 2",
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
                          _createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "1-3" }, {
                                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                                  _createTextVNode(
                                    "Option 3",
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
                          _createVNode(_component_el_sub_menu, { index: "1-4" }, {
                            title: _withCtx(() => [..._cache[5] || (_cache[5] = [
                              _createTextVNode(
                                "Option4",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                                  _createTextVNode(
                                    "Option 4-1",
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
                      }),
                      _createVNode(_component_el_sub_menu, { index: "2" }, {
                        title: _withCtx(() => [
                          _createVNode(_component_el_icon, null, {
                            default: _withCtx(() => [
                              _createVNode(_unref(IconMenu))
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          _cache[7] || (_cache[7] = _createTextVNode(
                            "Navigator Two ",
                            -1
                            /* CACHED */
                          ))
                        ]),
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item_group, null, {
                            title: _withCtx(() => [..._cache[8] || (_cache[8] = [
                              _createTextVNode(
                                "Group 1",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "2-1" }, {
                                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                                  _createTextVNode(
                                    "Option 1",
                                    -1
                                    /* CACHED */
                                  )
                                ])]),
                                _: 1
                                /* STABLE */
                              }),
                              _createVNode(_component_el_menu_item, { index: "2-2" }, {
                                default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                                  _createTextVNode(
                                    "Option 2",
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
                          _createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "2-3" }, {
                                default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                                  _createTextVNode(
                                    "Option 3",
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
                          _createVNode(_component_el_sub_menu, { index: "2-4" }, {
                            title: _withCtx(() => [..._cache[12] || (_cache[12] = [
                              _createTextVNode(
                                "Option 4",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                                default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                                  _createTextVNode(
                                    "Option 4-1",
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
                      }),
                      _createVNode(_component_el_sub_menu, { index: "3" }, {
                        title: _withCtx(() => [
                          _createVNode(_component_el_icon, null, {
                            default: _withCtx(() => [
                              _createVNode(_unref(Setting))
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          _cache[14] || (_cache[14] = _createTextVNode(
                            "Navigator Three ",
                            -1
                            /* CACHED */
                          ))
                        ]),
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item_group, null, {
                            title: _withCtx(() => [..._cache[15] || (_cache[15] = [
                              _createTextVNode(
                                "Group 1",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "3-1" }, {
                                default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                                  _createTextVNode(
                                    "Option 1",
                                    -1
                                    /* CACHED */
                                  )
                                ])]),
                                _: 1
                                /* STABLE */
                              }),
                              _createVNode(_component_el_menu_item, { index: "3-2" }, {
                                default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                                  _createTextVNode(
                                    "Option 2",
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
                          _createVNode(_component_el_menu_item_group, { title: "Group 2" }, {
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "3-3" }, {
                                default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                                  _createTextVNode(
                                    "Option 3",
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
                          _createVNode(_component_el_sub_menu, { index: "3-4" }, {
                            title: _withCtx(() => [..._cache[19] || (_cache[19] = [
                              _createTextVNode(
                                "Option 4",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            default: _withCtx(() => [
                              _createVNode(_component_el_menu_item, { index: "3-4-1" }, {
                                default: _withCtx(() => [..._cache[20] || (_cache[20] = [
                                  _createTextVNode(
                                    "Option 4-1",
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
                      })
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
          }),
          _createVNode(_component_el_container, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_header, { style: { "text-align": "right", "font-size": "12px" } }, {
                default: _withCtx(() => [
                  _createElementVNode("div", _hoisted_1, [
                    _createVNode(_component_el_dropdown, null, {
                      dropdown: _withCtx(() => [
                        _createVNode(_component_el_dropdown_menu, null, {
                          default: _withCtx(() => [
                            _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                                _createTextVNode(
                                  "View",
                                  -1
                                  /* CACHED */
                                )
                              ])]),
                              _: 1
                              /* STABLE */
                            }),
                            _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(() => [..._cache[22] || (_cache[22] = [
                                _createTextVNode(
                                  "Add",
                                  -1
                                  /* CACHED */
                                )
                              ])]),
                              _: 1
                              /* STABLE */
                            }),
                            _createVNode(_component_el_dropdown_item, null, {
                              default: _withCtx(() => [..._cache[23] || (_cache[23] = [
                                _createTextVNode(
                                  "Delete",
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
                      default: _withCtx(() => [
                        _createVNode(_component_el_icon, { style: { "margin-right": "8px", "margin-top": "1px" } }, {
                          default: _withCtx(() => [
                            _createVNode(_unref(Setting))
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    _cache[24] || (_cache[24] = _createElementVNode(
                      "span",
                      null,
                      "Tom",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_main, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_scrollbar, null, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_table, { data: tableData.value }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_table_column, {
                            prop: "date",
                            label: "Date",
                            width: "140"
                          }),
                          _createVNode(_component_el_table_column, {
                            prop: "name",
                            label: "Name",
                            width: "120"
                          }),
                          _createVNode(_component_el_table_column, {
                            prop: "address",
                            label: "Address"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["data"])
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
