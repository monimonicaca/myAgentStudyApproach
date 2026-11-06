window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["calendar"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref(/* @__PURE__ */ new Date());
    return (_ctx, _cache) => {
      const _component_el_calendar = _resolveComponent("el-calendar");
      return _openBlock(), _createBlock(_component_el_calendar, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "控制器类型 2.13.1", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const controllerType = ref("select");
    const value = ref(/* @__PURE__ */ new Date());
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_calendar = _resolveComponent("el-calendar");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: controllerType.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => controllerType.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, {
                label: "select",
                value: "select"
              }),
              _createVNode(_component_el_radio_button, {
                label: "button",
                value: "button"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_calendar, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            "controller-type": controllerType.value
          }, null, 8, ["modelValue", "controller-type"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义内容", css: "\n.is-selected {\n\n  color: #1989fa;\n}\n\n\n", comp: { template: "\n\n  <el-calendar>\n\n    <template #date-cell=\"{ data }\">\n\n      <p :class=\"data.isSelected ? 'is-selected' : ''\">\n\n        {{ data.day.split('-').slice(1).join('-') }}\n\n        {{ data.isSelected ? '✔️' : '' }}\n\n      </p>\n\n    </template>\n\n  </el-calendar>\n\n" } },
  { title: "范围", css: "", comp: { template: "\n\n  <el-calendar :range=\"[new Date(2019, 2, 4), new Date(2019, 2, 24)]\" />\n\n" } },
  { title: "自定义日历头部", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const calendar = ref();
    const selectDate = (val) => {
      if (!calendar.value) return;
      calendar.value.selectDate(val);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_button_group = _resolveComponent("el-button-group");
      const _component_el_calendar = _resolveComponent("el-calendar");
      return _openBlock(), _createBlock(
        _component_el_calendar,
        {
          ref_key: "calendar",
          ref: calendar
        },
        {
          header: _withCtx(({ date }) => [
            _cache[10] || (_cache[10] = _createElementVNode(
              "span",
              null,
              "Custom header content",
              -1
              /* CACHED */
            )),
            _createElementVNode(
              "span",
              null,
              _toDisplayString(date),
              1
              /* TEXT */
            ),
            _createVNode(_component_el_button_group, null, {
              default: _withCtx(() => [
                _createVNode(_component_el_button, {
                  size: "small",
                  onClick: _cache[0] || (_cache[0] = ($event) => selectDate("prev-year"))
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      " Previous Year ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  size: "small",
                  onClick: _cache[1] || (_cache[1] = ($event) => selectDate("prev-month"))
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Previous Month ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  size: "small",
                  onClick: _cache[2] || (_cache[2] = ($event) => selectDate("today"))
                }, {
                  default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                    _createTextVNode(
                      "Today",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  size: "small",
                  onClick: _cache[3] || (_cache[3] = ($event) => selectDate("next-month"))
                }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      " Next Month ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  size: "small",
                  onClick: _cache[4] || (_cache[4] = ($event) => selectDate("next-year"))
                }, {
                  default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                    _createTextVNode(
                      " Next Year ",
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
        },
        512
        /* NEED_PATCH */
      );
    };
  }
});
return stdin_default;
 })() },
];
