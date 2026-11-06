window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["time-select"] = [
  { title: "固定时间点", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref("");
    return (_ctx, _cache) => {
      const _component_el_time_select = _resolveComponent("el-time-select");
      return _openBlock(), _createBlock(_component_el_time_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        style: { "width": "240px" },
        start: "08:30",
        step: "00:15",
        end: "18:30",
        placeholder: "Select time"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "时间格式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref("");
    return (_ctx, _cache) => {
      const _component_el_time_select = _resolveComponent("el-time-select");
      return _openBlock(), _createBlock(_component_el_time_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        style: { "width": "240px" },
        start: "00:00",
        step: "00:30",
        end: "23:59",
        placeholder: "Select time",
        format: "hh:mm A"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "固定时间范围", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-time-range flex flex-wrap gap-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const startTime = ref("");
    const endTime = ref("");
    return (_ctx, _cache) => {
      const _component_el_time_select = _resolveComponent("el-time-select");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_time_select, {
          modelValue: startTime.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startTime.value = $event),
          style: { "width": "240px" },
          "max-time": endTime.value,
          placeholder: "Start time",
          start: "08:30",
          step: "00:15",
          end: "18:30"
        }, null, 8, ["modelValue", "max-time"]),
        _createVNode(_component_el_time_select, {
          modelValue: endTime.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endTime.value = $event),
          style: { "width": "240px" },
          "min-time": startTime.value,
          placeholder: "End time",
          start: "08:30",
          step: "00:15",
          end: "18:30"
        }, null, 8, ["modelValue", "min-time"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
