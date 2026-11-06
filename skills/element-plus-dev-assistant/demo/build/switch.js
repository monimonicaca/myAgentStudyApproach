window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["switch"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value1 = ref(true);
    const value2 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            class: "ml-2",
            style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" }
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
  { title: "尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            size: "large",
            "active-text": "Open",
            "inactive-text": "Close"
          }, null, 8, ["modelValue"]),
          _cache[3] || (_cache[3] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            "active-text": "Open",
            "inactive-text": "Close"
          }, null, 8, ["modelValue"]),
          _cache[4] || (_cache[4] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
            size: "small",
            "active-text": "Open",
            "inactive-text": "Close"
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
  { title: "文字描述", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value1 = ref(true);
    const value2 = ref(true);
    const value3 = ref(true);
    const value4 = ref(true);
    const value5 = ref(true);
    const value6 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            class: "mb-2",
            "active-text": "Pay by month",
            "inactive-text": "Pay by year"
          }, null, 8, ["modelValue"]),
          _cache[6] || (_cache[6] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            class: "mb-2",
            style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" },
            "active-text": "Pay by month",
            "inactive-text": "Pay by year"
          }, null, 8, ["modelValue"]),
          _cache[7] || (_cache[7] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            "inline-prompt": "",
            "active-text": "\u662F",
            "inactive-text": "\u5426"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value4.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value4.value = $event),
            class: "ml-2",
            "inline-prompt": "",
            style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" },
            "active-text": "Y",
            "inactive-text": "N"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value6.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value6.value = $event),
            class: "ml-2",
            width: "60",
            "inline-prompt": "",
            "active-text": "\u8D85\u51FA\u7701\u7565",
            "inactive-text": "\u8D85\u51FA\u7701\u7565"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value5.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value5.value = $event),
            class: "ml-2",
            "inline-prompt": "",
            style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" },
            "active-text": "\u5B8C\u6574\u5C55\u793A\u591A\u4E2A\u5185\u5BB9",
            "inactive-text": "\u591A\u4E2A\u5185\u5BB9"
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
  { title: "显示自定义图标", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { Check, Close } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value1 = ref(true);
    const value2 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            "active-icon": _unref(Check),
            "inactive-icon": _unref(Close)
          }, null, 8, ["modelValue", "active-icon", "inactive-icon"]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            class: "mt-2",
            style: { "margin-left": "24px" },
            "inline-prompt": "",
            "active-icon": _unref(Check),
            "inactive-icon": _unref(Close)
          }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "扩展的 value 类型", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref("100");
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createBlock(_component_el_tooltip, {
        content: "Switch value: " + value.value,
        placement: "top"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_switch, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            style: { "--el-switch-on-color": "#13ce66", "--el-switch-off-color": "#ff4949" },
            "active-value": "100",
            "inactive-value": "0"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["content"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const value1 = ref(true);
    const value2 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            disabled: ""
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            class: "ml-2"
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
  { title: "加载状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const value1 = ref(true);
    const value2 = ref(false);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            loading: ""
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            loading: "",
            class: "ml-2"
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
  { title: "阻止切换", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const value1 = ref(false);
    const value2 = ref(false);
    const loading1 = ref(false);
    const loading2 = ref(false);
    const beforeChange1 = () => {
      loading1.value = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          loading1.value = false;
          ElMessage.success("Switch success");
          return resolve(true);
        }, 1e3);
      });
    };
    const beforeChange2 = () => {
      loading2.value = true;
      return new Promise((_, reject) => {
        setTimeout(() => {
          loading2.value = false;
          ElMessage.error("Switch failed");
          return reject(new Error("Error"));
        }, 1e3);
      });
    };
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            loading: loading1.value,
            "before-change": beforeChange1
          }, null, 8, ["modelValue", "loading"]),
          _createVNode(_component_el_switch, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            class: "ml-2",
            loading: loading2.value,
            "before-change": beforeChange2
          }, null, 8, ["modelValue", "loading"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义动作图标 2.3.9", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { Hide, View } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const value1 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createBlock(_component_el_switch, {
        modelValue: value1.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
        "active-action-icon": _unref(View),
        "inactive-action-icon": _unref(Hide)
      }, null, 8, ["modelValue", "active-action-icon", "inactive-action-icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义操作图标 2.4.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const value1 = ref(true);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      return _openBlock(), _createBlock(_component_el_switch, {
        modelValue: value1.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event)
      }, {
        "active-action": _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createElementVNode(
            "span",
            { class: "custom-active-action" },
            "T",
            -1
            /* CACHED */
          )
        ])]),
        "inactive-action": _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "span",
            { class: "custom-inactive-action" },
            "F",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
