window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["statistic"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, unref: _unref, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "display": "inline-flex", "align-items": "center" } };
const { ref } = Vue;

const { ChatLineRound, Male } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const source = ref(0);
    const outputValue = useTransition(source, {
      duration: 1500
    });
    source.value = 172e3;
    return (_ctx, _cache) => {
      const _component_el_statistic = _resolveComponent("el-statistic");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { gutter: 16 }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 6,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_statistic, {
                title: "Daily active users",
                value: 268500
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 6,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_statistic, { value: 138 }, {
                title: _withCtx(() => [
                  _createElementVNode("div", _hoisted_1, [
                    _cache[0] || (_cache[0] = _createTextVNode(
                      " Ratio of men to women ",
                      -1
                      /* CACHED */
                    )),
                    _createVNode(_component_el_icon, {
                      style: { "margin-left": "4px" },
                      size: 12
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Male))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                suffix: _withCtx(() => [..._cache[1] || (_cache[1] = [
                  _createTextVNode(
                    "/100",
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
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 6,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_statistic, {
                title: "Total Transactions",
                value: _unref(outputValue)
              }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 6,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_statistic, {
                title: "Feedback number",
                value: 562
              }, {
                suffix: _withCtx(() => [
                  _createVNode(_component_el_icon, { style: { "vertical-align": "-0.125em" } }, {
                    default: _withCtx(() => [
                      _createVNode(_unref(ChatLineRound))
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
  { title: "倒计时", css: "\n.countdown-footer[data-v-3hzdbq] {\n\n  margin-top: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, unref: _unref, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_2 = { class: "countdown-footer" };
const { ref } = Vue;

const { Calendar } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref(Date.now() + 1e3 * 60 * 60 * 7);
    const value1 = ref(Date.now() + 1e3 * 60 * 60 * 24 * 2);
    const value2 = ref(dayjs().add(1, "month").startOf("month"));
    function reset() {
      value1.value = Date.now() + 1e3 * 60 * 60 * 24 * 2;
    }
    return (_ctx, _cache) => {
      const _component_el_countdown = _resolveComponent("el-countdown");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { gutter: 16 }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_countdown, {
                title: "Start to grab",
                value: value.value
              }, null, 8, ["value"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_countdown, {
                title: "Remaining VIP time",
                format: "HH:mm:ss",
                value: value1.value
              }, null, 8, ["value"]),
              _createVNode(_component_el_button, {
                class: "countdown-footer",
                type: "primary",
                onClick: reset
              }, {
                default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                  _createTextVNode(
                    " Reset ",
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
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "text-center mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_countdown, {
                format: "DD [days] HH:mm:ss",
                value: value2.value
              }, {
                title: _withCtx(() => [
                  _createElementVNode("div", _hoisted_1, [
                    _createVNode(_component_el_icon, {
                      style: { "margin-right": "4px" },
                      size: 12
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Calendar))
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    _cache[1] || (_cache[1] = _createTextVNode(
                      " Still to go until next month ",
                      -1
                      /* CACHED */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              _createElementVNode(
                "div",
                _hoisted_2,
                _toDisplayString(value2.value.format("YYYY-MM-DD")),
                1
                /* TEXT */
              )
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
  { title: "统计卡片", css: "\nh2#card-usage ~ .example .example-showcase {\n\n  background-color: var(--el-fill-color) !important;\n}\n.el-statistic[data-v-3hfkqd] {\n\n  --el-statistic-content-font-size: 28px;\n}\n.statistic-card[data-v-3hfkqd] {\n\n  height: 100%;\n\n  padding: 20px;\n\n  border-radius: 4px;\n\n  background-color: var(--el-bg-color-overlay);\n}\n.statistic-footer[data-v-3hfkqd] {\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n\n  flex-wrap: wrap;\n\n  font-size: 12px;\n\n  color: var(--el-text-color-regular);\n\n  margin-top: 16px;\n}\n.statistic-footer .footer-item[data-v-3hfkqd] {\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n}\n.statistic-footer .footer-item span[data-v-3hfkqd]:last-child {\n\n  display: inline-flex;\n\n  align-items: center;\n\n  margin-left: 4px;\n}\n.green[data-v-3hfkqd] {\n\n  color: var(--el-color-success);\n}\n.red[data-v-3hfkqd] {\n\n  color: var(--el-color-error);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createTextVNode: _createTextVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "statistic-card" };
const _hoisted_2 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_3 = { class: "statistic-footer" };
const _hoisted_4 = { class: "footer-item" };
const _hoisted_5 = { class: "green" };
const _hoisted_6 = { class: "statistic-card" };
const _hoisted_7 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_8 = { class: "statistic-footer" };
const _hoisted_9 = { class: "footer-item" };
const _hoisted_10 = { class: "red" };
const _hoisted_11 = { class: "statistic-card" };
const _hoisted_12 = { class: "statistic-footer" };
const _hoisted_13 = { class: "footer-item" };
const _hoisted_14 = { class: "green" };
const _hoisted_15 = { class: "footer-item" };
const { ArrowRight, CaretBottom, CaretTop, Warning } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      const _component_el_statistic = _resolveComponent("el-statistic");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { gutter: 16 }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "mb-4"
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_statistic, { value: 98500 }, {
                  title: _withCtx(() => [
                    _createElementVNode("div", _hoisted_2, [
                      _cache[0] || (_cache[0] = _createTextVNode(
                        " Daily active users ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_tooltip, {
                        effect: "dark",
                        content: "Number of users who logged into the product in one day",
                        placement: "top"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_icon, {
                            style: { "margin-left": "4px" },
                            size: 12
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_unref(Warning))
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode("div", _hoisted_3, [
                  _createElementVNode("div", _hoisted_4, [
                    _cache[2] || (_cache[2] = _createElementVNode(
                      "span",
                      null,
                      "than yesterday",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("span", _hoisted_5, [
                      _cache[1] || (_cache[1] = _createTextVNode(
                        " 24% ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(CaretTop))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "mb-4"
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_6, [
                _createVNode(_component_el_statistic, { value: 693700 }, {
                  title: _withCtx(() => [
                    _createElementVNode("div", _hoisted_7, [
                      _cache[3] || (_cache[3] = _createTextVNode(
                        " Monthly Active Users ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_tooltip, {
                        effect: "dark",
                        content: "Number of users who logged into the product in one month",
                        placement: "top"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_icon, {
                            style: { "margin-left": "4px" },
                            size: 12
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_unref(Warning))
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode("div", _hoisted_8, [
                  _createElementVNode("div", _hoisted_9, [
                    _cache[5] || (_cache[5] = _createElementVNode(
                      "span",
                      null,
                      "month on month",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("span", _hoisted_10, [
                      _cache[4] || (_cache[4] = _createTextVNode(
                        " 12% ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(CaretBottom))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            xs: 24,
            sm: 12,
            md: 8,
            class: "mb-4"
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_11, [
                _createVNode(_component_el_statistic, {
                  value: 72e3,
                  title: "New transactions today"
                }, {
                  title: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createElementVNode(
                      "div",
                      { style: { "display": "inline-flex", "align-items": "center" } },
                      " New transactions today ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode("div", _hoisted_12, [
                  _createElementVNode("div", _hoisted_13, [
                    _cache[8] || (_cache[8] = _createElementVNode(
                      "span",
                      null,
                      "than yesterday",
                      -1
                      /* CACHED */
                    )),
                    _createElementVNode("span", _hoisted_14, [
                      _cache[7] || (_cache[7] = _createTextVNode(
                        " 16% ",
                        -1
                        /* CACHED */
                      )),
                      _createVNode(_component_el_icon, null, {
                        default: _withCtx(() => [
                          _createVNode(_unref(CaretTop))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ])
                  ]),
                  _createElementVNode("div", _hoisted_15, [
                    _createVNode(_component_el_icon, { size: 14 }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ArrowRight))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
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
