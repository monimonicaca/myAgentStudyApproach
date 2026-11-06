window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["config-provider"] = [
  { title: "i18n 配置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { computed, ref } = Vue;


var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const language = ref("zh-cn");
    const locale = computed(() => language.value === "zh-cn" ? zhCn : en);
    const toggle = () => {
      language.value = language.value === "zh-cn" ? "en" : "zh-cn";
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_pagination = _resolveComponent("el-pagination");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_button, {
          "mb-2": "",
          onClick: toggle
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Switch Language",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _cache[1] || (_cache[1] = _createElementVNode(
          "br",
          null,
          null,
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_config_provider, { locale: locale.value }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table, {
              "mb-1": "",
              data: []
            }),
            _createVNode(_component_el_pagination, { total: 100 })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["locale"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对按钮进行配置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createBlock: _createBlock, createElementVNode: _createElementVNode } = Vue;
const { reactive } = Vue;
const { buttonTypes } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const config = reactive({
      autoInsertSpace: true,
      type: "default",
      plain: true,
      round: true,
      text: false,
      dashed: false
    });
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", null, [
        _createElementVNode("div", null, [
          _createVNode(_component_el_checkbox, {
            modelValue: config.autoInsertSpace,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.autoInsertSpace = $event)
          }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                " autoInsertSpace ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_checkbox, {
            modelValue: config.plain,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.plain = $event)
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                " plain ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_checkbox, {
            modelValue: config.round,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => config.round = $event)
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " round ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_checkbox, {
            modelValue: config.dashed,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => config.dashed = $event)
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " dashed ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_checkbox, {
            modelValue: config.text,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => config.text = $event)
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " text ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_select, {
            modelValue: config.type,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => config.type = $event),
            class: "ml-5",
            style: { "max-width": "150px" }
          }, {
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(_unref(buttonTypes).filter(Boolean), (type) => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: type,
                    value: type
                  }, null, 8, ["value"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_divider),
        _createVNode(_component_el_config_provider, { button: config }, {
          default: _withCtx(() => [
            _createVNode(_component_el_button, null, {
              default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                _createTextVNode(
                  "\u4E2D\u6587",
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
        }, 8, ["button"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对链接进行配置2.9.11", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode } = Vue;
const _hoisted_1 = { class: "flex gap-4" };
const _hoisted_2 = { class: "flex flex-col basis-150px gap-1" };
const _hoisted_3 = { class: "flex flex-col basis-150px gap-1" };
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const linkTypes = ["primary", "success", "warning", "info", "danger", "default"];
    const underlineOptions = ["always", "never", "hover"];
    const config = reactive({
      type: "success",
      underline: "always"
    });
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_link = _resolveComponent("el-link");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", null, [
        _createElementVNode("div", _hoisted_1, [
          _createElementVNode("div", _hoisted_2, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              null,
              "Type:",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: config.type,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.type = $event)
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(linkTypes, (type) => {
                    return _createVNode(_component_el_option, {
                      key: type,
                      value: type
                    }, null, 8, ["value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "span",
              null,
              "Underline:",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select, {
              modelValue: config.underline,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.underline = $event)
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(underlineOptions, (type) => {
                    return _createVNode(_component_el_option, {
                      key: type,
                      value: type
                    }, null, 8, ["value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ])
        ]),
        _createVNode(_component_el_divider),
        _createVNode(_component_el_config_provider, { link: config }, {
          default: _withCtx(() => [
            _createVNode(_component_el_link, null, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  "Link desu!",
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
        }, 8, ["link"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对 Card 进行配置 2.10.5", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col justify-center" };
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const config = reactive({
      shadow: "always"
    });
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_card = _resolveComponent("el-card");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[5] || (_cache[5] = _createTextVNode(
            " Shadow: ",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_radio_group, {
              modelValue: config.shadow,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.shadow = $event)
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio, { value: "always" }, {
                  default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                    _createTextVNode(
                      "always",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, { value: "hover" }, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createTextVNode(
                      "hover",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio, { value: "never" }, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "never",
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
            _createVNode(_component_el_divider),
            _createVNode(_component_el_config_provider, { card: config }, {
              default: _withCtx(() => [
                _createVNode(_component_el_card, null, {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Card desu!",
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
            }, 8, ["card"])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "对 Dialog 进行配置 2.10.7", css: "\n\n/* Bounce Animation */\n.dialog-bounce-enter-active,\n\n.dialog-bounce-leave-active,\n\n.dialog-bounce-enter-active .el-dialog,\n\n.dialog-bounce-leave-active .el-dialog {\n\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.dialog-bounce-enter-from,\n\n.dialog-bounce-leave-to {\n\n  opacity: 0;\n}\n.dialog-bounce-enter-from .el-dialog,\n\n.dialog-bounce-leave-to .el-dialog {\n\n  transform: scale(0.3) translateY(-50px);\n\n  opacity: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode } = Vue;
const _hoisted_1 = { class: "flex flex-col gap-4 justify-center" };
const _hoisted_2 = { class: "flex items-center gap-2" };
const _hoisted_3 = { class: "flex items-center gap-4" };
const _hoisted_4 = { class: "flex items-center gap-2" };
const _hoisted_5 = { class: "flex items-center gap-2" };
const _hoisted_6 = {
  key: 0,
  class: "text-xs opacity-70"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { key: 1 };
const { computed, nextTick, ref, shallowReactive } = Vue;
const ANIMATION_DURATION = 300;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const config = shallowReactive({
      alignCenter: false,
      draggable: false,
      overflow: false
    });
    const visible = ref(false);
    const enableTransition = ref(false);
    const isObjectTransition = ref(false);
    const buttonRef = ref();
    const globalConfig = computed(() => {
      let transition;
      if (enableTransition.value) {
        if (isObjectTransition.value) {
          transition = {
            css: false,
            onBeforeEnter(el) {
              nextTick(() => {
                if (buttonRef.value) {
                  const buttonRect = buttonRef.value.ref.getBoundingClientRect();
                  const dialogEl = el.querySelector(".el-dialog");
                  if (dialogEl) {
                    const dialogRect = dialogEl.getBoundingClientRect();
                    const offsetX = buttonRect.left + buttonRect.width / 2 - (dialogRect.left + dialogRect.width / 2);
                    const offsetY = buttonRect.top + buttonRect.height / 2 - (dialogRect.top + dialogRect.height / 2);
                    dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`;
                    dialogEl.style.opacity = "0";
                  }
                }
              });
            },
            onEnter(el, done) {
              nextTick(() => {
                const dialogEl = el.querySelector(".el-dialog");
                if (dialogEl) {
                  dialogEl.offsetHeight;
                  dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`;
                  dialogEl.style.transform = "translate(0, 0) scale(1)";
                  dialogEl.style.opacity = "1";
                  setTimeout(() => {
                    dialogEl.style.transition = "";
                    dialogEl.style.transform = "";
                    dialogEl.style.opacity = "";
                    done();
                  }, ANIMATION_DURATION);
                } else {
                  done();
                }
              });
            },
            onLeave(el, done) {
              const dialogEl = el.querySelector(".el-dialog");
              if (dialogEl) {
                if (buttonRef.value) {
                  const buttonRect = buttonRef.value.ref.getBoundingClientRect();
                  const dialogRect = dialogEl.getBoundingClientRect();
                  const currentTransform = dialogEl.style.transform;
                  let dragOffsetX = 0;
                  let dragOffsetY = 0;
                  if (currentTransform) {
                    const translateMatch = currentTransform.match(
                      /translate\(([^,]+),\s*([^)]+)\)/
                    );
                    if (translateMatch) {
                      dragOffsetX = Number.parseFloat(translateMatch[1]);
                      dragOffsetY = Number.parseFloat(translateMatch[2]);
                    }
                  }
                  const offsetX = buttonRect.left + buttonRect.width / 2 - (dialogRect.left + dialogRect.width / 2) + dragOffsetX;
                  const offsetY = buttonRect.top + buttonRect.height / 2 - (dialogRect.top + dialogRect.height / 2) + dragOffsetY;
                  dialogEl.style.transition = `all ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 1, 1)`;
                  dialogEl.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.3)`;
                  dialogEl.style.opacity = "0";
                  setTimeout(() => {
                    dialogEl.style.transition = "";
                    dialogEl.style.transform = "";
                    dialogEl.style.opacity = "";
                    done();
                  }, ANIMATION_DURATION);
                } else {
                  done();
                }
              } else {
                done();
              }
            }
          };
        } else {
          transition = "dialog-bounce";
        }
      }
      return {
        alignCenter: config.alignCenter,
        draggable: config.draggable,
        overflow: config.overflow,
        transition
      };
    });
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_switch, {
            modelValue: _unref(config).alignCenter,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _unref(config).alignCenter = $event),
            "active-text": "alignCenter"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_switch, {
            modelValue: _unref(config).draggable,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _unref(config).draggable = $event),
            "active-text": "draggable"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: _unref(config).overflow,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _unref(config).overflow = $event),
            disabled: !_unref(config).draggable,
            "active-text": "overflow"
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_el_switch, {
            modelValue: enableTransition.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => enableTransition.value = $event),
            "active-text": "enable transition"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: isObjectTransition.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isObjectTransition.value = $event),
            disabled: !enableTransition.value,
            "active-text": "transition: object",
            "inactive-text": "transition: string"
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _createElementVNode("div", _hoisted_5, [
          _createVNode(
            _component_el_button,
            {
              ref_key: "buttonRef",
              ref: buttonRef,
              type: "primary",
              size: "small",
              onClick: _cache[5] || (_cache[5] = ($event) => visible.value = true)
            },
            {
              default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode(
                  " Open Dialog ",
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
        _createVNode(_component_el_config_provider, { dialog: globalConfig.value }, {
          default: _withCtx(() => [
            _createVNode(_component_el_dialog, {
              modelValue: visible.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => visible.value = $event),
              title: "Dialog Title",
              "destroy-on-close": ""
            }, {
              default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                _createTextVNode(
                  " Dialog Content ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["dialog"]),
        enableTransition.value ? (_openBlock(), _createElementBlock("div", _hoisted_6, [
          isObjectTransition.value ? (_openBlock(), _createElementBlock("div", _hoisted_7, [
            _cache[9] || (_cache[9] = _createTextVNode(
              " Using JavaScript controlled animation: ",
              -1
              /* CACHED */
            )),
            _createElementVNode(
              "code",
              null,
              _toDisplayString(JSON.stringify(globalConfig.value.transition)),
              1
              /* TEXT */
            )
          ])) : (_openBlock(), _createElementBlock("div", _hoisted_8, [
            _cache[10] || (_cache[10] = _createTextVNode(
              " Using string transition name: ",
              -1
              /* CACHED */
            )),
            _createElementVNode(
              "code",
              null,
              _toDisplayString(globalConfig.value.transition),
              1
              /* TEXT */
            )
          ]))
        ])) : _createCommentVNode("v-if", true)
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对消息进行配置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { reactive } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const config = reactive({
      max: 3,
      plain: true,
      placement: "bottom"
    });
    const open = () => {
      ElMessage("This is a message from bottom.");
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_config_provider, { message: config }, {
          default: _withCtx(() => [
            _createVNode(_component_el_button, { onClick: open }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "OPEN",
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
        }, 8, ["message"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "空值配置2.7.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const { ref } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const options = [
      {
        value: "",
        label: "All"
      },
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ];
    const handleChange = (value) => {
      if ([void 0, null].includes(value)) {
        ElMessage.info(`The clear value is: ${value}`);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createBlock(_component_el_config_provider, {
        "value-on-clear": null,
        "empty-values": [void 0, null]
      }, {
        default: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_select, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              clearable: "",
              placeholder: "Select",
              style: { "width": "240px" },
              onChange: handleChange
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(options, (item) => {
                    return _createVNode(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            _createVNode(_component_el_select_v2, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              clearable: "",
              placeholder: "Select",
              style: { "width": "240px" },
              options,
              "value-on-clear": () => void 0,
              onChange: handleChange
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "表格配置 2.13.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const config = reactive({
      showOverflowTooltip: true,
      tooltipEffect: "dark"
    });
    const tableData = [
      {
        date: "2016-05-04",
        name: "Aleyna Kutzner",
        address: "Lohrbergstr. 86c, S\xFCd Lilli, Saarland"
      },
      {
        date: "2016-05-03",
        name: "Helen Jacobi",
        address: "760 A Street, South Frankfield, Illinois"
      },
      {
        date: "2016-05-02",
        name: "Brandon Deckert",
        address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Th\xFCringen"
      },
      {
        date: "2016-05-01",
        name: "Margie Smith",
        address: "23618 Windsor Drive, West Ricardoview, Idaho"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_config_provider = _resolveComponent("el-config-provider");
      return _openBlock(), _createElementBlock("div", null, [
        _createElementVNode("div", null, [
          _createVNode(_component_el_checkbox, {
            modelValue: config.showOverflowTooltip,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => config.showOverflowTooltip = $event)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " showOverflowTooltip ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_select, {
            modelValue: config.tooltipEffect,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => config.tooltipEffect = $event),
            class: "ml-5",
            style: { "max-width": "150px" }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_option, {
                value: "dark",
                label: "dark"
              }),
              _createVNode(_component_el_option, {
                value: "light",
                label: "light"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _createVNode(_component_el_divider),
        _createVNode(_component_el_config_provider, { table: config }, {
          default: _withCtx(() => [
            _createVNode(_component_el_table, {
              data: tableData,
              style: { "width": "100%" }
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_table_column, {
                  type: "selection",
                  width: "55"
                }),
                _createVNode(_component_el_table_column, {
                  label: "Date",
                  width: "120"
                }, {
                  default: _withCtx((scope) => [
                    _createTextVNode(
                      _toDisplayString(scope.row.date),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "120"
                }),
                _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address (inherited from config-provider)",
                  width: "300"
                }),
                _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address (explicit false)",
                  "show-overflow-tooltip": false
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["table"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
