window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["datetime-picker"] = [
  { title: "日期和时间点", css: "\n.demo-datetime-picker[data-v-wmkovb] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-datetime-picker .block[data-v-wmkovb] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-datetime-picker .block[data-v-wmkovb]:last-child {\n\n  border-right: none;\n}\n.demo-datetime-picker .demonstration[data-v-wmkovb] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n.demo-datetime-picker .block[data-v-wmkovb] {\n\n    flex: 100%;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-datetime-picker .block[data-v-wmkovb]:last-child {\n\n    border-bottom: none;\n}\n[data-v-wmkovb] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wmkovb] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const _hoisted_4 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref("");
    const defaultTime = new Date(2e3, 1, 1, 12, 0, 0);
    const shortcuts = [
      {
        text: "Today",
        value: /* @__PURE__ */ new Date()
      },
      {
        text: "Yesterday",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setDate(date.getDate() - 1);
          return date;
        }
      },
      {
        text: "A week ago",
        value: () => {
          const date = /* @__PURE__ */ new Date();
          date.setDate(date.getDate() - 7);
          return date;
        }
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "datetime",
            placeholder: "Select date and time"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With shortcuts",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "datetime",
            placeholder: "Select date and time",
            shortcuts
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_4, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With default time",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            type: "datetime",
            placeholder: "Select date and time",
            "default-time": _unref(defaultTime)
          }, null, 8, ["modelValue", "default-time"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "日期时间格式", css: "\n.demo-datetime-picker[data-v-wm0w9y] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-datetime-picker .block[data-v-wm0w9y] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.demo-datetime-picker .block[data-v-wm0w9y]:last-child {\n\n  border-right: none;\n}\n.demo-datetime-picker .demonstration[data-v-wm0w9y] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n.demo-datetime-picker .block[data-v-wm0w9y] {\n\n    flex: 100%;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-datetime-picker .block[data-v-wm0w9y]:last-child {\n\n    border-bottom: none;\n}\n[data-v-wm0w9y] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wm0w9y] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "demonstration" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "demonstration" };
const _hoisted_6 = { class: "block" };
const _hoisted_7 = { class: "demonstration" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
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
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD HH:mm:ss"
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
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD hh:mm:ss",
            "value-format": "YYYY-MM-DD h:m:s a"
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
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY/MM/DD hh:mm:ss",
            "value-format": "x"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "下拉列表中的日期和时间格式", css: "\n.demo-datetime-picker[data-v-wlh3ol] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n\n  align-items: stretch;\n}\n.demo-datetime-picker .block[data-v-wlh3ol] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  min-width: 300px;\n\n  flex: 1;\n}\n.line[data-v-wlh3ol] {\n\n  width: 1px;\n\n  background-color: var(--el-border-color);\n}\n@media (max-width: 768px) {\n.demo-datetime-picker .block[data-v-wlh3ol] {\n\n    flex: 100%;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-datetime-picker .block[data-v-wlh3ol]:last-child {\n\n    border-bottom: none;\n}\n.line[data-v-wlh3ol] {\n\n    display: none;\n}\n[data-v-wlh3ol] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wlh3ol] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY-MM-DD HH:mm:ss",
            "date-format": "MMM DD, YYYY",
            "time-format": "HH:mm"
          }, null, 8, ["modelValue"])
        ]),
        _cache[2] || (_cache[2] = _createElementVNode(
          "div",
          { class: "line" },
          null,
          -1
          /* CACHED */
        )),
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "datetimerange",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            format: "YYYY-MM-DD HH:mm:ss",
            "date-format": "YYYY/MM/DD ddd",
            "time-format": "A hh:mm:ss"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "日期和时间范围", css: "\n.demo-datetime-picker[data-v-wkxb38] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.block[data-v-wkxb38] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.block[data-v-wkxb38]:last-child {\n\n  border-right: none;\n}\n.block .demonstration[data-v-wkxb38] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n.block[data-v-wkxb38] {\n\n    flex: 100%;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.block[data-v-wkxb38]:last-child {\n\n    border-bottom: none;\n}\n[data-v-wkxb38] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wkxb38] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value1 = ref([
      new Date(2e3, 10, 10, 10, 10),
      new Date(2e3, 10, 11, 10, 10)
    ]);
    const value2 = ref("");
    const shortcuts = [
      {
        text: "Last week",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setDate(start.getDate() - 7);
          return [start, end];
        }
      },
      {
        text: "Last month",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setMonth(start.getMonth() - 1);
          return [start, end];
        }
      },
      {
        text: "Last 3 months",
        value: () => {
          const end = /* @__PURE__ */ new Date();
          const start = /* @__PURE__ */ new Date();
          start.setMonth(start.getMonth() - 3);
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
            type: "datetimerange",
            "range-separator": "To",
            "start-placeholder": "Start date",
            "end-placeholder": "End date"
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "With shortcuts",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "datetimerange",
            shortcuts,
            "range-separator": "To",
            "start-placeholder": "Start date",
            "end-placeholder": "End date"
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "单个面板 2.14.0", css: "\n.demo-date-picker[data-v-wkdihv] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.demo-date-picker .block[data-v-wkdihv] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n}\n.demo-date-picker .block[data-v-wkdihv]:last-child {\n\n  border-right: none;\n}\n.demo-date-picker .demonstration[data-v-wkdihv] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-date-picker" };
const _hoisted_2 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value1 = ref();
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "single-panel",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "datetimerange",
            "single-panel": ""
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "默认的起始与结束时刻", css: "\n.demo-datetime-picker[data-v-wjtpwi] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n}\n.block[data-v-wjtpwi] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  flex: 1;\n\n  min-width: 300px;\n}\n.block[data-v-wjtpwi]:last-child {\n\n  border-right: none;\n}\n.block .demonstration[data-v-wjtpwi] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n@media (max-width: 768px) {\n.block[data-v-wjtpwi] {\n\n    flex: 100%;\n\n    border-right: none;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.block[data-v-wjtpwi]:last-child {\n\n    border-bottom: none;\n}\n[data-v-wjtpwi] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wjtpwi] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    const defaultTime1 = new Date(2e3, 1, 1, 12, 0, 0);
    const defaultTime2 = [
      new Date(2e3, 1, 1, 12, 0, 0),
      new Date(2e3, 2, 1, 8, 0, 0)
    ];
    return (_ctx, _cache) => {
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Start and end date time 12:00:00",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "datetimerange",
            "start-placeholder": "Start Date",
            "end-placeholder": "End Date",
            "default-time": _unref(defaultTime1)
          }, null, 8, ["modelValue", "default-time"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            { class: "demonstration" },
            " Start date time 12:00:00, end date time 08:00:00 ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "datetimerange",
            "start-placeholder": "Start Date",
            "end-placeholder": "End Date",
            "default-time": defaultTime2
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标 2.8.0", css: "\n.demo-datetime-picker-icon[data-v-wj9xb5] {\n\n  display: flex;\n\n  width: 100%;\n\n  padding: 0;\n\n  flex-wrap: wrap;\n\n  justify-content: space-around;\n\n  align-items: stretch;\n}\n.demo-datetime-picker-icon .block[data-v-wj9xb5] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  min-width: 300px;\n\n  flex: 1;\n}\n.line[data-v-wj9xb5] {\n\n  width: 1px;\n\n  background-color: var(--el-border-color);\n}\n@media (max-width: 768px) {\n.demo-datetime-picker-icon .block[data-v-wj9xb5] {\n\n    flex: 100%;\n\n    border-bottom: solid 1px var(--el-border-color);\n}\n.demo-datetime-picker-icon .block[data-v-wj9xb5]:last-child {\n\n    border-bottom: none;\n}\n.line[data-v-wj9xb5] {\n\n    display: none;\n}\n[data-v-wj9xb5] .el-date-editor.el-input {\n\n    width: 100%;\n}\n[data-v-wj9xb5] .el-date-editor.el-input__wrapper {\n\n    width: 100%;\n\n    max-width: 300px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-datetime-picker-icon" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const { ref } = Vue;
const { CaretLeft, CaretRight } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value1 = ref("");
    const value2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_date_picker, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            type: "datetime",
            placeholder: "Pick a Date",
            format: "YYYY-MM-DD HH:mm:ss",
            "date-format": "MMM DD, YYYY",
            "time-format": "HH:mm"
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
                default: _withCtx(() => [..._cache[2] || (_cache[2] = [
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
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
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
        _cache[6] || (_cache[6] = _createElementVNode(
          "div",
          { class: "line" },
          null,
          -1
          /* CACHED */
        )),
        _createElementVNode("div", _hoisted_3, [
          _createVNode(_component_el_date_picker, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            type: "datetimerange",
            "start-placeholder": "Start date",
            "end-placeholder": "End date",
            format: "YYYY-MM-DD HH:mm:ss",
            "date-format": "YYYY/MM/DD ddd",
            "time-format": "A hh:mm:ss",
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
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
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
