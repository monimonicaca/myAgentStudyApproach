window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["time-picker"] = [
  { title: "任意时间点", css: "\n.example-basic .el-date-editor {\n\n  margin: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "example-basic" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value1 = ref();
    const value2 = ref();
    return (_ctx, _cache) => {
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_time_picker, {
          modelValue: value1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_time_picker, {
          modelValue: value2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
          "arrow-control": "",
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "限制时间选择范围", css: "\n.example-basic .el-date-editor {\n\n  margin: 8px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "example-basic" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value1 = ref(new Date(2016, 9, 10, 18, 30));
    const makeRange = (start, end) => {
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    };
    const disabledHours = () => {
      return makeRange(0, 16).concat(makeRange(19, 23));
    };
    const disabledMinutes = (hour) => {
      if (hour === 17) {
        return makeRange(0, 29);
      }
      if (hour === 18) {
        return makeRange(31, 59);
      }
      return [];
    };
    const disabledSeconds = (hour, minute) => {
      if (hour === 18 && minute === 30) {
        return makeRange(1, 59);
      }
      return [];
    };
    return (_ctx, _cache) => {
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_time_picker, {
          modelValue: value1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
          "disabled-hours": disabledHours,
          "disabled-minutes": disabledMinutes,
          "disabled-seconds": disabledSeconds,
          placeholder: "Arbitrary time"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "任意时间范围", css: "\n.demo-range .el-date-editor {\n\n  margin: 8px;\n}\n.demo-range .el-range-separator {\n\n  box-sizing: content-box;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-range" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value1 = ref([
      new Date(2016, 9, 10, 8, 40),
      new Date(2016, 9, 10, 9, 40)
    ]);
    const value2 = ref([
      new Date(2016, 9, 10, 8, 40),
      new Date(2016, 9, 10, 9, 40)
    ]);
    return (_ctx, _cache) => {
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_time_picker, {
          modelValue: value1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
          "is-range": "",
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_time_picker, {
          modelValue: value2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
          "is-range": "",
          "arrow-control": "",
          "range-separator": "To",
          "start-placeholder": "Start time",
          "end-placeholder": "End time"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
