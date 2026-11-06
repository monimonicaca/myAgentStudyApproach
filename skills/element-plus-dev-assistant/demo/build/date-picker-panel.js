window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["date-picker-panel"] = [
  { title: "选择某一天", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex justify-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref();
    return (_ctx, _cache) => {
      const _component_el_date_picker_panel = _resolveComponent("el-date-picker-panel");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_date_picker_panel, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "边框", css: "\n.date-picker--flex-container[data-v-f8hr5u] {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 16px;\n\n  justify-content: center;\n}\n.divider[data-v-f8hr5u] {\n\n  height: auto;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "date-picker--flex-container" };
const _hoisted_2 = { class: "p-[20px]" };
const { computed, ref } = Vue;

var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref();
    const containerRef = ref();
    const { width } = useElementSize(containerRef);
    const isNarrow = computed(() => width.value < 815);
    return (_ctx, _cache) => {
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_date_picker_panel = _resolveComponent("el-date-picker-panel");
      const _component_el_card = _resolveComponent("el-card");
      return _openBlock(), _createElementBlock(
        "div",
        {
          ref_key: "containerRef",
          ref: containerRef,
          class: _normalizeClass(["date-picker--example", { "is-narrow": isNarrow.value }])
        },
        [
          _cache[2] || (_cache[2] = _createElementVNode(
            "div",
            { class: "text-center" },
            "No border:",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_divider),
          _createElementVNode("div", _hoisted_1, [
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_date_picker_panel, {
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
                border: false
              }, null, 8, ["modelValue"])
            ]),
            _createVNode(_component_el_divider, {
              class: "divider",
              direction: isNarrow.value ? "horizontal" : "vertical"
            }, null, 8, ["direction"]),
            _createVNode(_component_el_card, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_date_picker_panel, {
                  modelValue: value.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
                  border: false
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref();
    const disabled = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_date_picker_panel = _resolveComponent("el-date-picker-panel");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_switch, {
          modelValue: disabled.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => disabled.value = $event),
          "active-text": "Disabled",
          "inactive-text": "Enabled"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_date_picker_panel, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          disabled: disabled.value
        }, null, 8, ["modelValue", "disabled"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "展示类型", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "flex gap-4" };
const _hoisted_2 = { class: "flex flex-col basis-150px gap-1" };
const _hoisted_3 = { class: "flex justify-center" };
const { ref, watch } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const date = ref();
    const type = ref("date");
    watch(type, () => {
      date.value = void 0;
    });
    const types = [
      "year",
      "years",
      "month",
      "months",
      "date",
      "dates",
      "week",
      "quarter",
      "quarters",
      "quarterrange",
      "datetime",
      "datetimerange",
      "daterange",
      "monthrange",
      "yearrange"
    ];
    return (_ctx, _cache) => {
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_divider = _resolveComponent("el-divider");
      const _component_el_date_picker_panel = _resolveComponent("el-date-picker-panel");
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
              modelValue: type.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => type.value = $event)
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(types, (optionType) => {
                    return _createVNode(_component_el_option, {
                      key: optionType,
                      value: optionType
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
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_date_picker_panel, {
            modelValue: date.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => date.value = $event),
            type: type.value
          }, null, 8, ["modelValue", "type"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
