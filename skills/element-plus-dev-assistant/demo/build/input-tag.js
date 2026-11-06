window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["input-tag"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const input = ref();
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        placeholder: "Please input",
        "aria-label": "Please click the Enter key after input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义触发器", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { EVENT_CODE } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const trigger = ref("Space");
    const input = ref();
    const options = [EVENT_CODE.enter, EVENT_CODE.space];
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_segmented, {
              modelValue: trigger.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => trigger.value = $event),
              options
            }, null, 8, ["modelValue"])
          ]),
          _cache[2] || (_cache[2] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_tag, {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value = $event),
            trigger: trigger.value,
            placeholder: "Please input"
          }, null, 8, ["modelValue", "trigger"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "最大标签数", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const input = ref();
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        max: 3,
        placeholder: "enter up to 3 tags"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "折叠标签2.11.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const input1 = ref();
    const input2 = ref();
    const input3 = ref();
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _cache[3] || (_cache[3] = _createElementVNode(
          "p",
          null,
          "use collapse-tags",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_input_tag, {
          modelValue: input1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input1.value = $event),
          "collapse-tags": "",
          placeholder: "Please input",
          "aria-label": "Please click the Enter key after input"
        }, null, 8, ["modelValue"]),
        _cache[4] || (_cache[4] = _createElementVNode(
          "p",
          null,
          "use collapse-tags-tooltip",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_input_tag, {
          modelValue: input2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input2.value = $event),
          "collapse-tags": "",
          "collapse-tags-tooltip": "",
          placeholder: "Please input",
          "aria-label": "Please click the Enter key after input"
        }, null, 8, ["modelValue"]),
        _cache[5] || (_cache[5] = _createElementVNode(
          "p",
          null,
          "use max-collapse-tags",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_input_tag, {
          modelValue: input3.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input3.value = $event),
          "collapse-tags": "",
          "collapse-tags-tooltip": "",
          "max-collapse-tags": 3,
          placeholder: "Please input",
          "aria-label": "Please click the Enter key after input"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const input = ref(["tag1", "tag2", "tag3"]);
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        disabled: "",
        placeholder: "Please input"
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
  __name: "5",
  setup(__props) {
    const input = ref(["tag1", "tag2", "tag3"]);
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        clearable: "",
        placeholder: "Please input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义清除图标2.11.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { CloseBold } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const input = ref(["custom", "clear", "icon"]);
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        clearable: "",
        "clear-icon": _unref(CloseBold),
        placeholder: "Custom clear icon"
      }, null, 8, ["modelValue", "clear-icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可拖放", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const input = ref(["tag1", "tag2", "tag3"]);
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        draggable: "",
        placeholder: "Please input"
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "分隔符2.9.9", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const input = ref([]);
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        draggable: "",
        placeholder: "Try to separate words with ,",
        delimiter: ","
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "尺寸", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const input = ref();
    return (_ctx, _cache) => {
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input_tag, {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            size: "large",
            placeholder: "Please input"
          }, null, 8, ["modelValue"]),
          _cache[3] || (_cache[3] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_tag, {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => input.value = $event),
            placeholder: "Please input"
          }, null, 8, ["modelValue"]),
          _cache[4] || (_cache[4] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_tag, {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value = $event),
            size: "small",
            placeholder: "Please input"
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
  { title: "自定义标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, unref: _unref, withCtx: _withCtx, toDisplayString: _toDisplayString, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex items-center" };
const { ref } = Vue;
const { ElementPlus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const type = [
      "primary",
      "success",
      "info",
      "warning",
      "danger"
    ];
    const effect = ["light", "dark", "plain"];
    const tagType = ref("primary");
    const tagEffect = ref("plain");
    const input = ref(["tag1", "tag2", "tag3"]);
    return (_ctx, _cache) => {
      const _component_el_segmented = _resolveComponent("el-segmented");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_segmented, {
              modelValue: tagType.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tagType.value = $event),
              options: type,
              class: "mr-5"
            }, null, 8, ["modelValue"]),
            _createVNode(_component_el_segmented, {
              modelValue: tagEffect.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tagEffect.value = $event),
              options: effect
            }, null, 8, ["modelValue"])
          ]),
          _cache[3] || (_cache[3] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_input_tag, {
            modelValue: input.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => input.value = $event),
            "tag-type": tagType.value,
            "tag-effect": tagEffect.value,
            placeholder: "Please input"
          }, {
            tag: _withCtx(({ value }) => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_icon, { class: "mr-1" }, {
                  default: _withCtx(() => [
                    _createVNode(_unref(ElementPlus))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                _createElementVNode(
                  "span",
                  null,
                  _toDisplayString(value),
                  1
                  /* TEXT */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "tag-type", "tag-effect"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义前缀和后缀", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ElementPlus, Search } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const input = ref();
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_input_tag = _resolveComponent("el-input-tag");
      return _openBlock(), _createBlock(_component_el_input_tag, {
        modelValue: input.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
        clearable: "",
        placeholder: "Please input"
      }, {
        prefix: _withCtx(() => [
          _createVNode(_component_el_icon, null, {
            default: _withCtx(() => [
              _createVNode(_unref(ElementPlus))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        suffix: _withCtx(() => [
          _createVNode(_component_el_icon, null, {
            default: _withCtx(() => [
              _createVNode(_unref(Search))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
];
