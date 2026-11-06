window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["rate"] = [
  { title: "基础用法", css: "\n.demo-rate-block[data-v-g7oe6x] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  display: inline-block;\n\n  width: 49%;\n\n  box-sizing: border-box;\n}\n.demo-rate-block[data-v-g7oe6x]:last-child {\n\n  border-right: none;\n}\n.demo-rate-block .demonstration[data-v-g7oe6x] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-rate-block" };
const _hoisted_2 = { class: "demo-rate-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value1 = ref(0);
    const value2 = ref(0);
    const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]);
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Default",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_rate, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "span",
              { class: "demonstration" },
              "Color for different levels",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_rate, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              colors: colors.value
            }, null, 8, ["modelValue", "colors"])
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
  { title: "尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref(0);
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_rate, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            size: "large"
          }, null, 8, ["modelValue"]),
          _cache[3] || (_cache[3] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_rate, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event)
          }, null, 8, ["modelValue"]),
          _cache[4] || (_cache[4] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_rate, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
            size: "small"
          }, null, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "允许半选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref();
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createBlock(_component_el_rate, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        "allow-half": ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "辅助文字", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref();
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createBlock(_component_el_rate, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        texts: ["oops", "disappointed", "normal", "good", "great"],
        "show-text": ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可清空", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref(3);
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createBlock(_component_el_rate, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        clearable: ""
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "更多种类的图标", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ChatDotRound, ChatLineRound, ChatRound } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value = ref();
    const icons = [ChatRound, ChatLineRound, ChatDotRound];
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createBlock(_component_el_rate, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        icons,
        "void-icon": _unref(ChatRound),
        colors: ["#409eff", "#67c23a", "#FF9900"]
      }, null, 8, ["modelValue", "void-icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "只读", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value = ref(3.7);
    return (_ctx, _cache) => {
      const _component_el_rate = _resolveComponent("el-rate");
      return _openBlock(), _createBlock(_component_el_rate, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        disabled: "",
        "show-score": "",
        "text-color": "#ff9900",
        "score-template": "{value} points"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
