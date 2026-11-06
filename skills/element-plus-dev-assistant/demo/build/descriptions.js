window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["descriptions"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-descriptions title=\"User Info\">\n\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n\n    <el-descriptions-item label=\"Remarks\">\n\n      <el-tag size=\"small\">School</el-tag>\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Address\">\n\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n\n    </el-descriptions-item>\n\n  </el-descriptions>\n\n" } },
  { title: "不同尺寸", css: "\n.el-descriptions[data-v-9rl8oh] {\n\n  margin-top: 20px;\n}\n.cell-item[data-v-9rl8oh] {\n\n  display: flex;\n\n  align-items: center;\n}\n.margin-top[data-v-9rl8oh] {\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "cell-item" };
const _hoisted_2 = { class: "cell-item" };
const _hoisted_3 = { class: "cell-item" };
const _hoisted_4 = { class: "cell-item" };
const _hoisted_5 = { class: "cell-item" };
const { computed, ref } = Vue;
const { Iphone, Location, OfficeBuilding, Tickets, User } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const size = ref("default");
    const iconStyle = computed(() => {
      const marginMap = {
        large: "8px",
        default: "6px",
        small: "4px"
      };
      return {
        marginRight: marginMap[size.value] || marginMap.default
      };
    });
    const blockMargin = computed(() => {
      const marginMap = {
        large: "32px",
        default: "28px",
        small: "24px"
      };
      return {
        marginTop: marginMap[size.value] || marginMap.default
      };
    });
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_descriptions = _resolveComponent("el-descriptions");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio, { value: "large" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Large",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "default" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "small" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Small",
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
          _createVNode(_component_el_descriptions, {
            class: "margin-top",
            title: "With border",
            column: 3,
            size: size.value,
            border: ""
          }, {
            extra: _withCtx(() => [
              _createVNode(_component_el_button, { type: "primary" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Operation",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_descriptions_item, null, {
                label: _withCtx(() => [
                  _createElementVNode("div", _hoisted_1, [
                    _createVNode(_component_el_icon, {
                      style: _normalizeStyle(iconStyle.value)
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(User))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    _cache[5] || (_cache[5] = _createTextVNode(
                      " Username ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                default: _withCtx(() => [
                  _cache[6] || (_cache[6] = _createTextVNode(
                    " kooriookami ",
                    -1
                    /* CACHED */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, null, {
                label: _withCtx(() => [
                  _createElementVNode("div", _hoisted_2, [
                    _createVNode(_component_el_icon, {
                      style: _normalizeStyle(iconStyle.value)
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Iphone))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    _cache[7] || (_cache[7] = _createTextVNode(
                      " Telephone ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                default: _withCtx(() => [
                  _cache[8] || (_cache[8] = _createTextVNode(
                    " 18100000000 ",
                    -1
                    /* CACHED */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, null, {
                label: _withCtx(() => [
                  _createElementVNode("div", _hoisted_3, [
                    _createVNode(_component_el_icon, {
                      style: _normalizeStyle(iconStyle.value)
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Location))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    _cache[9] || (_cache[9] = _createTextVNode(
                      " Place ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                default: _withCtx(() => [
                  _cache[10] || (_cache[10] = _createTextVNode(
                    " Suzhou ",
                    -1
                    /* CACHED */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, null, {
                label: _withCtx(() => [
                  _createElementVNode("div", _hoisted_4, [
                    _createVNode(_component_el_icon, {
                      style: _normalizeStyle(iconStyle.value)
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Tickets))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    _cache[11] || (_cache[11] = _createTextVNode(
                      " Remarks ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                default: _withCtx(() => [
                  _createVNode(_component_el_tag, { size: "small" }, {
                    default: _withCtx(() => [..._cache[12] || (_cache[12] = [
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
              _createVNode(_component_el_descriptions_item, null, {
                label: _withCtx(() => [
                  _createElementVNode("div", _hoisted_5, [
                    _createVNode(_component_el_icon, {
                      style: _normalizeStyle(iconStyle.value)
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(OfficeBuilding))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["style"]),
                    _cache[13] || (_cache[13] = _createTextVNode(
                      " Address ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                default: _withCtx(() => [
                  _cache[14] || (_cache[14] = _createTextVNode(
                    " No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province ",
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
          }, 8, ["size"]),
          _createVNode(_component_el_descriptions, {
            class: "margin-top",
            title: "Without border",
            column: 3,
            size: size.value,
            style: _normalizeStyle(blockMargin.value)
          }, {
            extra: _withCtx(() => [
              _createVNode(_component_el_button, { type: "primary" }, {
                default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                  _createTextVNode(
                    "Operation",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                  _createTextVNode(
                    "kooriookami",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                  _createTextVNode(
                    "18100000000",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, { label: "Place" }, {
                default: _withCtx(() => [..._cache[18] || (_cache[18] = [
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
                    default: _withCtx(() => [..._cache[19] || (_cache[19] = [
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
                default: _withCtx(() => [..._cache[20] || (_cache[20] = [
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
          }, 8, ["size", "style"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "垂直列表", css: "\n.el-descriptions[data-v-9s519u] {\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, normalizeStyle: _normalizeStyle, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const size = ref("default");
    const blockMargin = computed(() => {
      const marginMap = {
        large: "32px",
        default: "28px",
        small: "24px"
      };
      return {
        marginTop: marginMap[size.value] || marginMap.default
      };
    });
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_descriptions_item = _resolveComponent("el-descriptions-item");
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_descriptions = _resolveComponent("el-descriptions");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio, { value: "large" }, {
                default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "Large",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "default" }, {
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                  _createTextVNode(
                    "Default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "small" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Small",
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
          _createVNode(_component_el_descriptions, {
            title: "Vertical list with border",
            direction: "vertical",
            column: 4,
            size: size.value,
            border: ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "kooriookami",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "18100000000",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, {
                label: "Place",
                span: 2
              }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
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
                    default: _withCtx(() => [..._cache[7] || (_cache[7] = [
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
                default: _withCtx(() => [..._cache[8] || (_cache[8] = [
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
          }, 8, ["size"]),
          _createVNode(_component_el_descriptions, {
            title: "Vertical list without border",
            column: 4,
            size: size.value,
            direction: "vertical",
            style: _normalizeStyle(blockMargin.value)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_descriptions_item, { label: "Username" }, {
                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                  _createTextVNode(
                    "kooriookami",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, { label: "Telephone" }, {
                default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                  _createTextVNode(
                    "18100000000",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_descriptions_item, {
                label: "Place",
                span: 2
              }, {
                default: _withCtx(() => [..._cache[11] || (_cache[11] = [
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
                    default: _withCtx(() => [..._cache[12] || (_cache[12] = [
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
                default: _withCtx(() => [..._cache[13] || (_cache[13] = [
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
          }, 8, ["size", "style"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "单元格跨行 2.8.1", css: "", comp: { template: "\n\n  <el-descriptions title=\"Width horizontal list\" border>\n\n    <el-descriptions-item\n\n      :rowspan=\"2\"\n\n      :width=\"140\"\n\n      label=\"Photo\"\n\n      align=\"center\"\n\n    >\n\n      <el-image\n\n        style=\"width: 100px; height: 100px\"\n\n        src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"\n\n      />\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n\n    <el-descriptions-item label=\"Remarks\">\n\n      <el-tag size=\"small\">School</el-tag>\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Address\">\n\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n\n    </el-descriptions-item>\n\n  </el-descriptions>\n\n  <el-descriptions\n\n    title=\"Width vertical list\"\n\n    direction=\"vertical\"\n\n    border\n\n    style=\"margin-top: 20px\"\n\n  >\n\n    <el-descriptions-item\n\n      :rowspan=\"2\"\n\n      :width=\"140\"\n\n      label=\"Photo\"\n\n      align=\"center\"\n\n    >\n\n      <el-image\n\n        style=\"width: 100px; height: 100px\"\n\n        src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"\n\n      />\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Username\">kooriookami</el-descriptions-item>\n\n    <el-descriptions-item label=\"Telephone\">18100000000</el-descriptions-item>\n\n    <el-descriptions-item label=\"Place\">Suzhou</el-descriptions-item>\n\n    <el-descriptions-item label=\"Remarks\">\n\n      <el-tag size=\"small\">School</el-tag>\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Address\">\n\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n\n    </el-descriptions-item>\n\n  </el-descriptions>\n\n" } },
  { title: "自定义样式", css: "\n:deep(.my-label) {\n\n  background: var(--el-color-success-light-9) !important;\n}\n:deep(.my-content) {\n\n  background: var(--el-color-danger-light-9);\n}\n\n\n", comp: { template: "\n\n  <el-descriptions title=\"Customized style list\" :column=\"3\" border>\n\n    <el-descriptions-item\n\n      label=\"Username\"\n\n      label-align=\"right\"\n\n      align=\"center\"\n\n      label-class-name=\"my-label\"\n\n      class-name=\"my-content\"\n\n      width=\"150px\"\n\n    >\n\n      kooriookami\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Telephone\" label-align=\"right\" align=\"center\">\n\n      18100000000\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Place\" label-align=\"right\" align=\"center\">\n\n      Suzhou\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Remarks\" label-align=\"right\" align=\"center\">\n\n      <el-tag size=\"small\">School</el-tag>\n\n    </el-descriptions-item>\n\n    <el-descriptions-item label=\"Address\" label-align=\"right\" align=\"center\">\n\n      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province\n\n    </el-descriptions-item>\n\n  </el-descriptions>\n\n" } },
];
