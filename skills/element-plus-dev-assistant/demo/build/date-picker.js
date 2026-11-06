window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["date-picker"] = [
  { title: "选择某一天", css: "\n.demo-date-picker[data-v-xoo3wm] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xoo3wm] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-date-picker .block[data-v-xoo3wm]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xoo3wm] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xoo3wm] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xoo3wm]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const size = ref("default");
    const value1 = ref("");
    const value2 = ref("");
    const shortcuts = [
      {
        text: "Today",
        value: /* @__PURE__ */ new Date()
      },
      {
        text: "Yesterday",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24);
          return date;
        }
      },
      {
        text: "A week ago",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24 * 7);
          return date;
        }
      }
    ];
    const disabledDate = (time) => {
      return time.getTime() > Date.now();
    };
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
            "aria-label": "size control",
            class: "mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: "large" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "large",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "default" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "small" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "small",
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
          _createElementVNode("div", _hoisted_1, [
            _createElementVNode("div", _hoisted_2, [
              _cache[6] || (_cache[6] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "Default",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_date_picker, {
                modelValue: value1.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value1.value = $event),
                type: "date",
                placeholder: "Pick a day",
                size: size.value
              }, null, 8, ["modelValue", "size"])
            ]),
            _createElementVNode("div", _hoisted_3, [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "Picker with quick options",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_date_picker, {
                modelValue: value2.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value2.value = $event),
                type: "date",
                placeholder: "Pick a day",
                "disabled-date": disabledDate,
                shortcuts,
                size: size.value
              }, null, 8, ["modelValue", "size"])
            ])
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
  { title: "其他日期单位", css: "\n.demo-date-picker[data-v-xp7whz] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .container[data-v-xp7whz] {\n\n  flex: 1;\n\n  min-width: 300px;\n\n  border-right: solid 1px var(--el-border-color);\n}\n.demo-date-picker .container[data-v-xp7whz]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .block[data-v-xp7whz] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n}\n.demo-date-picker .container .block[data-v-xp7whz]:not(:first-child) {\n\n  border-top: solid 1px var(--el-border-color);\n}\n.demo-date-picker .demonstration[data-v-xp7whz] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .container[data-v-xp7whz] {\n\n    flex: 0 0 100%;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .container[data-v-xp7whz]:last-child {\n\n    border-bottom: none;\n}\n.demo-date-picker .block[data-v-xp7whz] {\n\n    padding: 1rem 0;\n}\n.demo-date-picker .container .block[data-v-xp7whz]:not(:first-child) {\n\n    border-top: solid 1px var(--el-border-color);\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "block" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "block" };
const _hoisted_6 = { class: "block" };
const _hoisted_7 = { class: "container" };
const _hoisted_8 = { class: "block" };
const _hoisted_9 = { class: "block" };
const _hoisted_10 = { class: "block" };
const _hoisted_11 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    const value5 = ref("");
    const value6 = ref("");
    const value7 = ref("");
    const value8 = ref([]);
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _cache[8] || (_cache[8] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Week",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              type: "week",
              format: "[Week] ww",
              placeholder: "Pick a week"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[9] || (_cache[9] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Year",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value3.value = $event),
              type: "year",
              placeholder: "Pick a year"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_5, [
            _cache[10] || (_cache[10] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Month",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value5.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value5.value = $event),
              type: "month",
              placeholder: "Pick a month"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_6, [
            _cache[11] || (_cache[11] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Quarter",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value7.value,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value7.value = $event),
              type: "quarter",
              placeholder: "Pick a quarter"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _createElementVNode("div", _hoisted_7, [
          _createElementVNode("div", _hoisted_8, [
            _cache[12] || (_cache[12] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Dates",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value2.value = $event),
              type: "dates",
              placeholder: "Pick one or more dates"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_9, [
            _cache[13] || (_cache[13] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Years",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value4.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value4.value = $event),
              type: "years",
              placeholder: "Pick one or more years"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_10, [
            _cache[14] || (_cache[14] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Months",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value6.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => value6.value = $event),
              type: "months",
              placeholder: "Pick one or more months"
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_11, [
            _cache[15] || (_cache[15] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Quarters",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_date_picker, {
              modelValue: value8.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => value8.value = $event),
              type: "quarters",
              placeholder: "Pick one or more quarters"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "选择一段时间", css: "\n.demo-date-picker[data-v-xprp3c] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xprp3c] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 400px;\n\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: center;\n}\n.demo-date-picker .block[data-v-xprp3c]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xprp3c] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 1200px) {\n.demo-date-picker .block[data-v-xprp3c] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xprp3c]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const size = ref("default");
    const value1 = ref("");
    const value2 = ref("");
    const shortcuts = [
      {
        text: "Last week",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 7);
          return [start, end];
        }
      },
      {
        text: "Last month",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 30);
          return [start, end];
        }
      },
      {
        text: "Last 3 months",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setTime(start.getTime() - 3600 * 1e3 * 24 * 90);
          return [start, end];
        }
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: size.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
            "aria-label": "size control",
            class: "mb-4"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: "large" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "large",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "default" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "default",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "small" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "small",
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
          _createElementVNode("div", _hoisted_1, [
            _createElementVNode("div", _hoisted_2, [
              _cache[6] || (_cache[6] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "Default",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_date_picker, {
                modelValue: value1.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value1.value = $event),
                type: "daterange",
                "range-separator": "To",
                "start-placeholder": "Start date",
                "end-placeholder": "End date",
                size: size.value
              }, null, 8, ["modelValue", "size"])
            ]),
            _createElementVNode("div", _hoisted_3, [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                { class: "demonstration" },
                "With quick options",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_date_picker, {
                modelValue: value2.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value2.value = $event),
                type: "daterange",
                "unlink-panels": "",
                "range-separator": "To",
                "start-placeholder": "Start date",
                "end-placeholder": "End date",
                shortcuts,
                size: size.value
              }, null, 8, ["modelValue", "size"])
            ])
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
  { title: "选择月份范围", css: "\n.demo-date-picker[data-v-xqbhop] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xqbhop] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-date-picker .block[data-v-xqbhop]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xqbhop] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xqbhop] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xqbhop]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const shortcuts = [
      {
        text: "This month",
        value: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]
      },
      {
        text: "This year",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = new Date((/* @__PURE__ */ new Date()).getFullYear(), 0);
          return [start, end];
        }
      },
      {
        text: "Last 6 months",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setMonth(start.getMonth() - 6);
          return [start, end];
        }
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "monthrange",
            "range-separator": "To",
            "start-placeholder": "Start month",
            "end-placeholder": "End month"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With quick options",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "monthrange",
            "unlink-panels": "",
            "range-separator": "To",
            "start-placeholder": "Start month",
            "end-placeholder": "End month",
            shortcuts
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "年份范围2.8.0", css: "\n.demo-date-picker[data-v-xqvaa2] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xqvaa2] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-date-picker .block[data-v-xqvaa2]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xqvaa2] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xqvaa2] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xqvaa2]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value1 = ref();
    const value2 = ref();
    const shortcuts = [
      {
        text: "This Year",
        value: [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()]
      },
      {
        text: "Last 10 years",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = new Date(
            (/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 10)
          );
          return [start, end];
        }
      },
      {
        text: "Next 50 years",
        value: () => {
          const start = /* @__PURE__ */ new Date();
          const end = new Date(
            (/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() + 50)
          );
          return [start, end];
        }
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "yearrange",
            "range-separator": "To",
            "start-placeholder": "Start Year",
            "end-placeholder": "End Year"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With quick options",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "yearrange",
            "unlink-panels": "",
            "range-separator": "To",
            "start-placeholder": "Start Year",
            "end-placeholder": "End Year",
            shortcuts
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "Quarter Range 2.14.5", css: "\n.demo-date-picker[data-v-xrf2vf] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xrf2vf] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-date-picker .block[data-v-xrf2vf]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xrf2vf] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xrf2vf] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xrf2vf]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value1 = ref();
    const value2 = ref();
    const shortcuts = [
      {
        text: "This quarter",
        value: () => {
          const now = /* @__PURE__ */ new Date();
          const quarter = Math.floor(now.getMonth() / 3);
          const start = new Date(now.getFullYear(), quarter * 3, 1);
          return [start, now];
        }
      },
      {
        text: "Last 4 quarters",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setMonth(start.getMonth() - 12);
          return [start, end];
        }
      },
      {
        text: "Next 8 quarters",
        value: () => {
          const start = /* @__PURE__ */ new Date();
          const end = /* @__PURE__ */ new Date();
          end.setMonth(end.getMonth() + 24);
          return [start, end];
        }
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "quarterrange",
            "range-separator": "To",
            "start-placeholder": "Start quarter",
            "end-placeholder": "End quarter"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With quick options",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "quarterrange",
            "unlink-panels": "",
            "range-separator": "To",
            "start-placeholder": "Start quarter",
            "end-placeholder": "End quarter",
            shortcuts
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "单个面板 2.14.0", css: "\n.demo-date-picker[data-v-xryvgs] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xryvgs] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: center;\n}\n.demo-date-picker .block[data-v-xryvgs]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .block[data-v-xryvgs] .el-date-editor {\n\n  width: 300px;\n}\n.demo-date-picker .demonstration[data-v-xryvgs] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n\n  width: 100%;\n}\n@media screen and (max-width: 1200px) {\n.demo-date-picker .block[data-v-xryvgs] {\n\n    flex: 0 0 50%;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xryvgs]:nth-child(2n) {\n\n    border-right: none;\n}\n.demo-date-picker .block[data-v-xryvgs]:nth-last-child(-n + 2):nth-child(2n + 1),\n\n  .demo-date-picker .block[data-v-xryvgs]:last-child {\n\n    border-bottom: none;\n}\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xryvgs] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xryvgs]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value1 = ref();
    const value2 = ref();
    const value3 = ref();
    const value4 = ref();
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "date range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "daterange",
            "single-panel": ""
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "month range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "monthrange",
            "single-panel": ""
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _cache[6] || (_cache[6] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "year range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            type: "yearrange",
            "single-panel": ""
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_5, [
          _cache[7] || (_cache[7] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "quarter range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value4.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
            type: "quarterrange",
            "single-panel": ""
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "默认值", css: "\n.demo-date-picker[data-v-xsio25] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xsio25] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: center;\n}\n.demo-date-picker .block[data-v-xsio25]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xsio25] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xsio25] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xsio25]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "date",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "date",
            placeholder: "Pick a date",
            "default-value": new Date(2010, 9, 1)
          }, null, 8, ["modelValue", "default-value"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "daterange",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "daterange",
            "start-placeholder": "Start Date",
            "end-placeholder": "End Date",
            "default-value": [new Date(2010, 9, 1), new Date(2010, 10, 1)]
          }, null, 8, ["modelValue", "default-value"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "日期格式", css: "\n.demo-date-picker[data-v-xt2gni] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xt2gni] {\n\n  padding: 1.5rem 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: center;\n}\n.demo-date-picker .block[data-v-xt2gni]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-xt2gni] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n\n  width: 100%;\n}\n@media screen and (max-width: 1200px) {\n.demo-date-picker .block[data-v-xt2gni] {\n\n    flex: 0 0 50%;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xt2gni]:nth-child(2n) {\n\n    border-right: none;\n}\n.demo-date-picker .block[data-v-xt2gni]:nth-last-child(-n + 2):nth-child(2n + 1),\n\n  .demo-date-picker .block[data-v-xt2gni]:last-child {\n\n    border-bottom: none;\n}\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker .block[data-v-xt2gni] {\n\n    flex: 0 0 100%;\n\n    padding: 1rem 0;\n\n    min-width: auto;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker .block[data-v-xt2gni]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "demonstration" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "demonstration" };
const _hoisted_6 = { class: "block" };
const _hoisted_7 = { class: "demonstration" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Emits Date object",
            -1
            /* CACHED */
          )),
          _createElementVNode(
            "div",
            _hoisted_3,
            "Value: " + _toDisplayString(value1.value),
            1
            /* TEXT */
          ),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "date",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Use value-format",
            -1
            /* CACHED */
          )),
          _createElementVNode(
            "div",
            _hoisted_5,
            "Value\uFF1A" + _toDisplayString(value2.value),
            1
            /* TEXT */
          ),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "date",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD",
            "value-format": "YYYY-MM-DD"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_6, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Timestamp",
            -1
            /* CACHED */
          )),
          _createElementVNode(
            "div",
            _hoisted_7,
            "Value\uFF1A" + _toDisplayString(value3.value),
            1
            /* TEXT */
          ),
          _createVNode(_component_el_date_picker, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            type: "date",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD",
            "value-format": "x"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "默认显示日期", css: "\n.demo-date-picker[data-v-xtm98v] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-xtm98v] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n}\n.demo-date-picker .block[data-v-xtm98v]:last-child {\n\n  border-right: none;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const value = ref("");
    const defaultTime = ref([
      new Date(2e3, 1, 1, 0, 0, 0),
      new Date(2e3, 2, 1, 23, 59, 59)
    ]);
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode(
            "p",
            null,
            "Component value\uFF1A" + _toDisplayString(value.value),
            1
            /* TEXT */
          ),
          _createVNode(_component_el_date_picker, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            type: "daterange",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            "value-format": "YYYY-MM-DD HH:mm:ss",
            "default-time": defaultTime.value
          }, null, 8, ["modelValue", "default-time"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "设置自定义前缀的内容", css: "\n.demo-date-picker[data-v-kr26tj] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-kr26tj] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n}\n.demo-date-picker .block[data-v-kr26tj]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-kr26tj] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const { h, ref, shallowRef } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const value1 = ref("");
    const customPrefix = shallowRef({
      render() {
        return h("p", "pre");
      }
    });
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "set prefix-icon",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "date",
            placeholder: "Pick a day",
            "prefix-icon": customPrefix.value
          }, null, 8, ["modelValue", "prefix-icon"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义内容", css: "\n.demo-date-picker[data-v-kqie86] {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 1rem;\n}\n.demo-date-picker[data-v-kqie86] > * {\n\n  margin: 0 !important;\n}\n.cell[data-v-kqie86] {\n\n  height: 30px;\n\n  padding: 3px 0;\n\n  box-sizing: border-box;\n}\n.cell .text[data-v-kqie86] {\n\n  width: 24px;\n\n  height: 24px;\n\n  display: block;\n\n  margin: 0 auto;\n\n  line-height: 24px;\n\n  position: absolute;\n\n  left: 50%;\n\n  transform: translateX(-50%);\n\n  border-radius: 50%;\n}\n.cell.current .text[data-v-kqie86] {\n\n  background: #626aef;\n\n  color: #fff;\n}\n.cell .holiday[data-v-kqie86] {\n\n  position: absolute;\n\n  width: 6px;\n\n  height: 6px;\n\n  background: var(--el-color-danger);\n\n  border-radius: 50%;\n\n  bottom: 0px;\n\n  left: 50%;\n\n  transform: translateX(-50%);\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker[data-v-kqie86] {\n\n    gap: 1.5rem;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "text" };
const _hoisted_3 = {
  key: 0,
  class: "holiday"
};
const _hoisted_4 = { class: "el-date-table-cell__text" };
const _hoisted_5 = { class: "el-date-table-cell__text" };
const _hoisted_6 = { class: "el-date-table-cell__text" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const value = ref("2021-10-29");
    const month = ref("");
    const year = ref("");
    const quarter = ref("");
    const holidays = [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07"
    ];
    const isHoliday = ({ dayjs }) => {
      return holidays.includes(dayjs.format("YYYY-MM-DD"));
    };
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_date_picker, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          type: "date",
          placeholder: "Pick a day",
          format: "YYYY/MM/DD",
          "value-format": "YYYY-MM-DD"
        }, {
          default: _withCtx((cell) => [
            _createElementVNode(
              "div",
              {
                class: _normalizeClass(["cell", { current: cell.isCurrent }])
              },
              [
                _createElementVNode(
                  "span",
                  _hoisted_2,
                  _toDisplayString(cell.text),
                  1
                  /* TEXT */
                ),
                isHoliday(cell) ? (_openBlock(), _createElementBlock("span", _hoisted_3)) : _createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_date_picker, {
          modelValue: month.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => month.value = $event),
          type: "month",
          placeholder: "Pick a month"
        }, {
          default: _withCtx((cell) => [
            _createElementVNode(
              "div",
              {
                class: _normalizeClass(["el-date-table-cell", { current: cell.isCurrent }])
              },
              [
                _createElementVNode(
                  "span",
                  _hoisted_4,
                  _toDisplayString(cell.text + 1) + "\u671F",
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_date_picker, {
          modelValue: year.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => year.value = $event),
          type: "year",
          placeholder: "Pick a year"
        }, {
          default: _withCtx((cell) => [
            _createElementVNode(
              "div",
              {
                class: _normalizeClass(["el-date-table-cell", { current: cell.isCurrent }])
              },
              [
                _createElementVNode(
                  "span",
                  _hoisted_5,
                  _toDisplayString(cell.text + 1) + "y",
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _createVNode(_component_el_date_picker, {
          modelValue: quarter.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => quarter.value = $event),
          type: "quarter",
          placeholder: "Pick a quarter"
        }, {
          default: _withCtx((cell) => [
            _createElementVNode(
              "div",
              {
                class: _normalizeClass(["el-date-table-cell", { current: cell.isCurrent }])
              },
              [
                _createElementVNode(
                  "span",
                  _hoisted_6,
                  "Q" + _toDisplayString(+cell.text + 1),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标 2.8.0", css: "\n.demo-date-picker-icon[data-v-kpylmt] {\n\n  display: grid;\n\n  width: 100%;\n}\n.demo-date-picker-icon .block[data-v-kpylmt] {\n\n  padding: 1.5rem 1rem;\n\n  text-align: center;\n\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: center;\n}\n.demo-date-picker-icon .block[data-v-kpylmt] .el-date-editor {\n\n  width: 100%;\n\n  max-width: 360px;\n}\n.demo-date-picker-icon .demonstration[data-v-kpylmt] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 1rem;\n\n  width: 100%;\n}\n@media screen and (min-width: 1201px) {\n.demo-date-picker-icon[data-v-kpylmt] {\n\n    grid-template-columns: repeat(6, 1fr);\n}\n.demo-date-picker-icon .block[data-v-kpylmt] {\n\n    border-right: solid 1px var(--el-border-color);\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(1),\n\n  .demo-date-picker-icon .block[data-v-kpylmt]:nth-child(2) {\n\n    grid-column: span 3;\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(2) {\n\n    border-right: none;\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(3),\n\n  .demo-date-picker-icon .block[data-v-kpylmt]:nth-child(4),\n\n  .demo-date-picker-icon .block[data-v-kpylmt]:nth-child(5) {\n\n    grid-column: span 2;\n\n    border-bottom: none;\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(5) {\n\n    border-right: none;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1200px) {\n.demo-date-picker-icon[data-v-kpylmt] {\n\n    grid-template-columns: repeat(2, 1fr);\n}\n.demo-date-picker-icon .block[data-v-kpylmt] {\n\n    grid-column: span 1;\n\n    border-right: solid 1px var(--el-border-color);\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(2n) {\n\n    border-right: none;\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:nth-child(5) {\n\n    grid-column: span 2;\n\n    border-right: none;\n\n    border-bottom: none;\n}\n}\n@media screen and (max-width: 768px) {\n.demo-date-picker-icon[data-v-kpylmt] {\n\n    grid-template-columns: 1fr;\n}\n.demo-date-picker-icon .block[data-v-kpylmt] {\n\n    grid-column: 1 / -1;\n\n    padding: 1rem 0;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-date-picker-icon .block[data-v-kpylmt]:last-child {\n\n    border-bottom: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker-icon" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "block" };
const _hoisted_6 = { class: "block" };
const { ref } = Vue;
const { CaretLeft, CaretRight } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    const value5 = ref("");
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[7] || (_cache[7] = _createElementVNode(
            "div",
            { class: "demonstration" },
            "date",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "date",
            placeholder: "Pick a day",
            format: "YYYY/MM/DD",
            "value-format": "YYYY-MM-DD"
          }, {
            "prev-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretLeft))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretRight))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "prev-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
                        ])
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
                        ])
                      ])
                    ],
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
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[10] || (_cache[10] = _createElementVNode(
            "div",
            { class: "demonstration" },
            "date range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "daterange",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            format: "YYYY/MM/DD",
            "value-format": "YYYY-MM-DD",
            "unlink-panels": ""
          }, {
            "prev-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretLeft))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretRight))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "prev-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
                        ])
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
                        ])
                      ])
                    ],
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
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _cache[13] || (_cache[13] = _createElementVNode(
            "div",
            { class: "demonstration" },
            "month range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            type: "monthrange",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            format: "YYYY/MM/DD",
            "value-format": "YYYY-MM-DD",
            "unlink-panels": ""
          }, {
            "prev-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretLeft))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-month": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(CaretRight))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            "prev-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
                        ])
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
                        ])
                      ])
                    ],
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
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_5, [
          _cache[16] || (_cache[16] = _createElementVNode(
            "div",
            { class: "demonstration" },
            "year range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value4.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
            type: "yearrange",
            "range-separator": "To",
            "start-placeholder": "Start Year",
            "end-placeholder": "End Year"
          }, {
            "prev-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
                        ])
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
                        ])
                      ])
                    ],
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
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_6, [
          _cache[19] || (_cache[19] = _createElementVNode(
            "div",
            { class: "demonstration" },
            "quarter range",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value5.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value5.value = $event),
            type: "quarterrange",
            "range-separator": "To",
            "start-placeholder": "Start quarter",
            "end-placeholder": "End quarter"
          }, {
            "prev-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
                        ])
                      ])
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            "next-year": _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                  _createElementVNode(
                    "svg",
                    {
                      viewBox: "0 0 20 20",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg"
                    },
                    [
                      _createElementVNode("g", {
                        "stroke-width": "1",
                        "fill-rule": "evenodd"
                      }, [
                        _createElementVNode("g", { fill: "currentColor" }, [
                          _createElementVNode("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
                        ])
                      ])
                    ],
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
          }, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
