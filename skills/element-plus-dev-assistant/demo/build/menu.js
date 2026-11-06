window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["menu"] = [
  { title: "顶栏", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const activeIndex = ref("1");
    const activeIndex2 = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return (_ctx, _cache) => {
      const _component_el_menu_item = _resolveComponent("el-menu-item");
      const _component_el_sub_menu = _resolveComponent("el-sub-menu");
      const _component_el_menu = _resolveComponent("el-menu");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_menu, {
            "default-active": activeIndex.value,
            class: "el-menu-demo",
            mode: "horizontal",
            onSelect: handleSelect
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_menu_item, { index: "1" }, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    "Processing Center",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_sub_menu, { index: "2" }, {
                title: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Workspace",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_menu_item, { index: "2-1" }, {
                    default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                      _createTextVNode(
                        "item one",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-2" }, {
                    default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode(
                        "item two",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-3" }, {
                    default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                      _createTextVNode(
                        "item three",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_sub_menu, { index: "2-4" }, {
                    title: _withCtx(() => [..._cache[5] || (_cache[5] = [
                      _createTextVNode(
                        "item four",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                          _createTextVNode(
                            "item one",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                          _createTextVNode(
                            "item two",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                          _createTextVNode(
                            "item three",
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
              _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                  _createTextVNode(
                    "Info",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, { index: "4" }, {
                default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                  _createTextVNode(
                    "Orders",
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
          }, 8, ["default-active"]),
          _cache[22] || (_cache[22] = _createElementVNode(
            "div",
            { class: "h-6" },
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_menu, {
            "default-active": activeIndex2.value,
            class: "el-menu-demo",
            mode: "horizontal",
            "background-color": "#545c64",
            "text-color": "#fff",
            "active-text-color": "#ffd04b",
            onSelect: handleSelect
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_menu_item, { index: "1" }, {
                default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                  _createTextVNode(
                    "Processing Center",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_sub_menu, { index: "2" }, {
                title: _withCtx(() => [..._cache[12] || (_cache[12] = [
                  _createTextVNode(
                    "Workspace",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_menu_item, { index: "2-1" }, {
                    default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                      _createTextVNode(
                        "item one",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-2" }, {
                    default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                      _createTextVNode(
                        "item two",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-3" }, {
                    default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                      _createTextVNode(
                        "item three",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_sub_menu, { index: "2-4" }, {
                    title: _withCtx(() => [..._cache[16] || (_cache[16] = [
                      _createTextVNode(
                        "item four",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                        default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                          _createTextVNode(
                            "item one",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                        default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                          _createTextVNode(
                            "item two",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                        default: _withCtx(() => [..._cache[19] || (_cache[19] = [
                          _createTextVNode(
                            "item three",
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
              _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                default: _withCtx(() => [..._cache[20] || (_cache[20] = [
                  _createTextVNode(
                    "Info",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, { index: "4" }, {
                default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                  _createTextVNode(
                    "Orders",
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
          }, 8, ["default-active"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "左右", css: "\n.el-menu--horizontal > .el-menu-item[data-v-p6md7r]:nth-child(1) {\n\n  margin-right: auto;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const activeIndex = ref("1");
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return (_ctx, _cache) => {
      const _component_el_menu_item = _resolveComponent("el-menu-item");
      const _component_el_sub_menu = _resolveComponent("el-sub-menu");
      const _component_el_menu = _resolveComponent("el-menu");
      return _openBlock(), _createBlock(_component_el_menu, {
        "default-active": activeIndex.value,
        class: "el-menu-demo",
        mode: "horizontal",
        ellipsis: false,
        onSelect: handleSelect
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_menu_item, { index: "0" }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createElementVNode(
                "img",
                {
                  style: { "width": "100px" },
                  src: "/images/element-plus-logo.svg",
                  alt: "Element logo"
                },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_menu_item, { index: "1" }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Processing Center",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_sub_menu, { index: "2" }, {
            title: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Workspace",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createVNode(_component_el_menu_item, { index: "2-1" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "item one",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, { index: "2-2" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "item two",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, { index: "2-3" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "item three",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_sub_menu, { index: "2-4" }, {
                title: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "item four",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_menu_item, { index: "2-4-1" }, {
                    default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                      _createTextVNode(
                        "item one",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-4-2" }, {
                    default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                      _createTextVNode(
                        "item two",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "2-4-3" }, {
                    default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                      _createTextVNode(
                        "item three",
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
      }, 8, ["default-active"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "侧栏", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { Document, Menu: IconMenu, Location, Setting } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_menu_item = _resolveComponent("el-menu-item");
      const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");
      const _component_el_sub_menu = _resolveComponent("el-sub-menu");
      const _component_el_menu = _resolveComponent("el-menu");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { class: "tac" }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, { span: 12 }, {
            default: _withCtx(() => [
              _cache[9] || (_cache[9] = _createElementVNode(
                "h5",
                { class: "mb-2" },
                "Default colors",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_menu, {
                "default-active": "2",
                class: "el-menu-vertical-demo",
                onOpen: handleOpen,
                onClose: handleClose
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_sub_menu, { index: "1" }, {
                    title: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Location))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[0] || (_cache[0] = _createElementVNode(
                        "span",
                        null,
                        "Navigator One",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-1" }, {
                            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                              _createTextVNode(
                                "item one",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            _: 1
                            /* STABLE */
                          }),
                          _createVNode(_component_el_menu_item, { index: "1-2" }, {
                            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                              _createTextVNode(
                                "item two",
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
                      _createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-3" }, {
                            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                              _createTextVNode(
                                "item three",
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
                        title: _withCtx(() => [..._cache[4] || (_cache[4] = [
                          _createTextVNode(
                            "item four",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                              _createTextVNode(
                                "item one",
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
                  _createVNode(_component_el_menu_item, { index: "2" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(IconMenu))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[6] || (_cache[6] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Two",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, {
                    index: "3",
                    disabled: ""
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Document))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[7] || (_cache[7] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Three",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "4" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Setting))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[8] || (_cache[8] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Four",
                        -1
                        /* CACHED */
                      ))
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
          _createVNode(_component_el_col, { span: 12 }, {
            default: _withCtx(() => [
              _cache[19] || (_cache[19] = _createElementVNode(
                "h5",
                { class: "mb-2" },
                "Custom colors",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_menu, {
                "active-text-color": "#ffd04b",
                "background-color": "#545c64",
                class: "el-menu-vertical-demo",
                "default-active": "2",
                "text-color": "#fff",
                onOpen: handleOpen,
                onClose: handleClose
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_sub_menu, { index: "1" }, {
                    title: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Location))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[10] || (_cache[10] = _createElementVNode(
                        "span",
                        null,
                        "Navigator One",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item_group, { title: "Group One" }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-1" }, {
                            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                              _createTextVNode(
                                "item one",
                                -1
                                /* CACHED */
                              )
                            ])]),
                            _: 1
                            /* STABLE */
                          }),
                          _createVNode(_component_el_menu_item, { index: "1-2" }, {
                            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                              _createTextVNode(
                                "item two",
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
                      _createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-3" }, {
                            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                              _createTextVNode(
                                "item three",
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
                        title: _withCtx(() => [..._cache[14] || (_cache[14] = [
                          _createTextVNode(
                            "item four",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        default: _withCtx(() => [
                          _createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                              _createTextVNode(
                                "item one",
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
                  _createVNode(_component_el_menu_item, { index: "2" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(IconMenu))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[16] || (_cache[16] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Two",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, {
                    index: "3",
                    disabled: ""
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Document))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[17] || (_cache[17] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Three",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_menu_item, { index: "4" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(Setting))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[18] || (_cache[18] = _createElementVNode(
                        "span",
                        null,
                        "Navigator Four",
                        -1
                        /* CACHED */
                      ))
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
  { title: "Collapse 折叠面板", css: "\n.el-menu-vertical-demo:not(.el-menu--collapse) {\n\n  width: 200px;\n\n  min-height: 400px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { Document, Menu: IconMenu, Location, Setting } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const isCollapse = ref(true);
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_menu_item = _resolveComponent("el-menu-item");
      const _component_el_menu_item_group = _resolveComponent("el-menu-item-group");
      const _component_el_sub_menu = _resolveComponent("el-sub-menu");
      const _component_el_menu = _resolveComponent("el-menu");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: isCollapse.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isCollapse.value = $event),
            style: { "margin-bottom": "20px" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: false }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "expand",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: true }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "collapse",
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
          }, 8, ["modelValue"]),
          _createVNode(_component_el_menu, {
            "default-active": "2",
            class: "el-menu-vertical-demo",
            collapse: isCollapse.value,
            onOpen: handleOpen,
            onClose: handleClose
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_sub_menu, { index: "1" }, {
                title: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(Location))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _cache[3] || (_cache[3] = _createElementVNode(
                    "span",
                    null,
                    "Navigator One",
                    -1
                    /* CACHED */
                  ))
                ]),
                default: _withCtx(() => [
                  _createVNode(_component_el_menu_item_group, null, {
                    title: _withCtx(() => [..._cache[4] || (_cache[4] = [
                      _createElementVNode(
                        "span",
                        null,
                        "Group One",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item, { index: "1-1" }, {
                        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                          _createTextVNode(
                            "item one",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_menu_item, { index: "1-2" }, {
                        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                          _createTextVNode(
                            "item two",
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
                  _createVNode(_component_el_menu_item_group, { title: "Group Two" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item, { index: "1-3" }, {
                        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                          _createTextVNode(
                            "item three",
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
                    title: _withCtx(() => [..._cache[8] || (_cache[8] = [
                      _createElementVNode(
                        "span",
                        null,
                        "item four",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    default: _withCtx(() => [
                      _createVNode(_component_el_menu_item, { index: "1-4-1" }, {
                        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                          _createTextVNode(
                            "item one",
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
              _createVNode(_component_el_menu_item, { index: "2" }, {
                title: _withCtx(() => [..._cache[10] || (_cache[10] = [
                  _createTextVNode(
                    "Navigator Two",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(IconMenu))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, {
                index: "3",
                disabled: ""
              }, {
                title: _withCtx(() => [..._cache[11] || (_cache[11] = [
                  _createTextVNode(
                    "Navigator Three",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(Document))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_menu_item, { index: "4" }, {
                title: _withCtx(() => [..._cache[12] || (_cache[12] = [
                  _createTextVNode(
                    "Navigator Four",
                    -1
                    /* CACHED */
                  )
                ])]),
                default: _withCtx(() => [
                  _createVNode(_component_el_icon, null, {
                    default: _withCtx(() => [
                      _createVNode(_unref(Setting))
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
          }, 8, ["collapse"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "弹出层偏移量 2.4.4", css: "", comp: { template: "\n\n  <el-menu\n\n    ellipsis\n\n    class=\"el-menu-popper-demo\"\n\n    mode=\"horizontal\"\n\n    :popper-offset=\"16\"\n\n    style=\"max-width: 600px\"\n\n  >\n\n    <el-menu-item index=\"1\">Processing Center</el-menu-item>\n\n    <el-sub-menu index=\"2\">\n\n      <template #title>Workspace</template>\n\n      <el-menu-item index=\"2-1\">item one</el-menu-item>\n\n      <el-menu-item index=\"2-2\">item two</el-menu-item>\n\n      <el-menu-item index=\"2-3\">item three</el-menu-item>\n\n      <el-sub-menu index=\"2-4\">\n\n        <template #title>item four</template>\n\n        <el-menu-item index=\"2-4-1\">item one</el-menu-item>\n\n        <el-menu-item index=\"2-4-2\">item two</el-menu-item>\n\n        <el-menu-item index=\"2-4-3\">item three</el-menu-item>\n\n      </el-sub-menu>\n\n    </el-sub-menu>\n\n    <el-sub-menu index=\"3\" :popper-offset=\"8\">\n\n      <template #title>Override Popper Offset</template>\n\n      <el-menu-item index=\"3-1\">item one</el-menu-item>\n\n      <el-menu-item index=\"3-2\">item two</el-menu-item>\n\n      <el-menu-item index=\"3-3\">item three</el-menu-item>\n\n      <el-sub-menu index=\"3-4\" :popper-offset=\"20\">\n\n        <template #title>override child</template>\n\n        <el-menu-item index=\"3-4-1\">item one</el-menu-item>\n\n        <el-menu-item index=\"3-4-2\">item two</el-menu-item>\n\n        <el-menu-item index=\"3-4-3\">item three</el-menu-item>\n\n      </el-sub-menu>\n\n    </el-sub-menu>\n\n    <el-menu-item index=\"4\" disabled>Info</el-menu-item>\n\n    <el-menu-item index=\"5\">Orders</el-menu-item>\n\n  </el-menu>\n\n" } },
];
