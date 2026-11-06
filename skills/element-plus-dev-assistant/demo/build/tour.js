window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tour"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const ref1 = ref();
    const ref2 = ref();
    const ref3 = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Begin Tour",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref1",
                  ref: ref1
                },
                {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Upload",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref2",
                  ref: ref2,
                  type: "primary"
                },
                {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Save",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(_component_el_button, {
                ref_key: "ref3",
                ref: ref3,
                icon: _unref(MoreFilled)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                target: ref1.value?.$el,
                title: "Upload File"
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createElementVNode(
                    "img",
                    {
                      style: { "width": "240px" },
                      src: "https://element-plus.org/images/element-plus-logo.svg",
                      alt: "tour.png"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  _createElementVNode(
                    "div",
                    null,
                    "Put you files here.",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref2.value?.$el,
                title: "Save",
                description: "Save your changes"
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref3.value?.$el,
                title: "Other Actions",
                description: "Click to see other"
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "非模态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const ref1 = ref();
    const ref2 = ref();
    const ref3 = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Begin Tour",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref1",
                  ref: ref1
                },
                {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Upload",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref2",
                  ref: ref2,
                  type: "primary"
                },
                {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Save",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(_component_el_button, {
                ref_key: "ref3",
                ref: ref3,
                icon: _unref(MoreFilled)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event),
            type: "primary",
            mask: false
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                target: ref1.value?.$el,
                title: "Upload File",
                description: "Put you files here."
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref2.value?.$el,
                title: "Save",
                description: "Save your changes"
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref3.value?.$el,
                title: "Other Actions",
                description: "Click to see other"
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "位置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const btnRef = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(
            _component_el_button,
            {
              ref_key: "btnRef",
              ref: btnRef,
              type: "primary",
              onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
            },
            {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  " Begin Tour ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                title: "Center",
                description: "Displayed in the center of screen."
              }),
              _createVNode(_component_el_tour_step, {
                title: "Right",
                description: "On the right of target.",
                placement: "right",
                target: btnRef.value?.$el
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                title: "Top",
                description: "On the top of target.",
                placement: "top",
                target: btnRef.value?.$el
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义遮罩样式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const ref1 = ref();
    const ref2 = ref();
    const ref3 = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Begin Tour",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref1",
                  ref: ref1
                },
                {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Upload",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref2",
                  ref: ref2,
                  type: "primary"
                },
                {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Save",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(_component_el_button, {
                ref_key: "ref3",
                ref: ref3,
                icon: _unref(MoreFilled)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event),
            mask: {
              style: {
                boxShadow: "inset 0 0 15px #333"
              },
              color: "rgba(80, 255, 255, .4)"
            }
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                target: ref1.value?.$el,
                title: "Upload File"
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createElementVNode(
                    "img",
                    {
                      src: "https://element-plus.org/images/element-plus-logo.svg",
                      alt: "tour.png"
                    },
                    null,
                    -1
                    /* CACHED */
                  ),
                  _createElementVNode(
                    "div",
                    null,
                    "Put you files here.",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref2.value?.$el,
                title: "Save",
                description: "Save your changes",
                mask: {
                  style: {
                    boxShadow: "inset 0 0 15px #fff"
                  },
                  color: "rgba(40, 0, 255, .4)"
                }
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref3.value?.$el,
                title: "Other Actions",
                description: "Click to see other",
                mask: false
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义指示器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const ref1 = ref();
    const ref2 = ref();
    const ref3 = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Begin Tour",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref1",
                  ref: ref1
                },
                {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Upload",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(
                _component_el_button,
                {
                  ref_key: "ref2",
                  ref: ref2,
                  type: "primary"
                },
                {
                  default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                    _createTextVNode(
                      "Save",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              _createVNode(_component_el_button, {
                ref_key: "ref3",
                ref: ref3,
                icon: _unref(MoreFilled)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event)
          }, {
            indicators: _withCtx(({ current, total }) => [
              _createElementVNode(
                "span",
                null,
                _toDisplayString(current + 1) + " / " + _toDisplayString(total),
                1
                /* TEXT */
              )
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                target: ref1.value?.$el,
                title: "Upload File",
                description: "Put you files here."
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref2.value?.$el,
                title: "Save",
                description: "Save your changes"
              }, null, 8, ["target"]),
              _createVNode(_component_el_tour_step, {
                target: ref3.value?.$el,
                title: "Other Actions",
                description: "Click to see other"
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "目标", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const el = () => document.querySelector("#btn2");
    const btnRef = ref();
    const open = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_tour_step = _resolveComponent("el-tour-step");
      const _component_el_tour = _resolveComponent("el-tour");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => open.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "Begin Tour",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_space, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, { id: "btn1" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Upload",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                id: "btn2",
                type: "primary"
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Save",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                ref_key: "btnRef",
                ref: btnRef,
                icon: _unref(MoreFilled)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_tour, {
            modelValue: open.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => open.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_tour_step, {
                target: "#btn1",
                title: "Upload File",
                description: "Put you files here."
              }),
              _createVNode(_component_el_tour_step, {
                target: el,
                title: "Save",
                description: "Save your changes"
              }),
              _createVNode(_component_el_tour_step, {
                target: btnRef.value?.$el,
                title: "Other Actions",
                description: "Click to see other"
              }, null, 8, ["target"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
];
