window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["select-v2"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref();
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: _unref(options),
        placeholder: "Please select",
        style: { "width": "240px" }
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const options = ref(
      Array.from({ length: 1e3 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        label: `${initials[idx % 10]}${idx}`
      }))
    );
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        placeholder: "Please select",
        style: { "width": "240px" },
        multiple: ""
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "尺寸", css: "\n.example-showcase .el-select-v2[data-v-jsu20] {\n\n  margin-right: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref();
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          size: "large",
          style: { "width": "240px" }
        }, null, 8, ["modelValue", "options"]),
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          style: { "width": "240px" }
        }, null, 8, ["modelValue", "options"]),
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          size: "small",
          style: { "width": "240px" }
        }, null, 8, ["modelValue", "options"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "隐藏多余标签的多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const value2 = ref([]);
    const value3 = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              "use collapse-tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select_v2, {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              options: _unref(options),
              placeholder: "Please select",
              style: { "width": "240px" },
              multiple: "",
              "collapse-tags": ""
            }, null, 8, ["modelValue", "options"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[4] || (_cache[4] = _createElementVNode(
              "p",
              null,
              "use collapse-tags-tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select_v2, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              options: _unref(options),
              placeholder: "Please select",
              style: { "width": "240px" },
              multiple: "",
              "collapse-tags": "",
              "collapse-tags-tooltip": ""
            }, null, 8, ["modelValue", "options"])
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[5] || (_cache[5] = _createElementVNode(
              "p",
              null,
              "use max-collapse-tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_select_v2, {
              modelValue: value3.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
              options: _unref(options),
              placeholder: "Please select",
              style: { "width": "240px" },
              multiple: "",
              "collapse-tags": "",
              "collapse-tags-tooltip": "",
              "max-collapse-tags": 3
            }, null, 8, ["modelValue", "options"])
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
  { title: "可过滤的多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        filterable: "",
        options: _unref(options),
        placeholder: "Please select",
        style: { "width": "240px" },
        multiple: ""
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用选择器本身或选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`,
      disabled: idx % 10 === 0
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            filterable: "",
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "margin-right": "16px", "vertical-align": "middle" },
            multiple: ""
          }, null, 8, ["modelValue", "options"]),
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            disabled: "",
            filterable: "",
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "vertical-align": "middle" },
            multiple: ""
          }, null, 8, ["modelValue", "options"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "给选项进行分组", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const options = Array.from({ length: 10 }).map((_, idx) => {
      const label = idx + 1;
      return {
        value: `Group ${label}`,
        label: `Group ${label}`,
        options: Array.from({ length: 10 }).map((_2, idx2) => ({
          value: `Option ${idx2 + 1 + 10 * label}`,
          label: `${initials[idx2 % 10]}${idx2 + 1 + 10 * label}`
        }))
      };
    });
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        filterable: "",
        options: _unref(options),
        placeholder: "Please select",
        style: { "width": "240px" },
        multiple: ""
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "一键清除", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value1 = ref([]);
    const value2 = ref();
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_select_v2, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "margin-right": "16px", "vertical-align": "middle" },
            multiple: "",
            clearable: ""
          }, null, 8, ["modelValue", "options"]),
          _createVNode(_component_el_select_v2, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "vertical-align": "middle" },
            clearable: ""
          }, null, 8, ["modelValue", "options"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义选项的渲染模板", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "margin-right": "8px" } };
const _hoisted_2 = { style: { "color": "var(--el-text-color-secondary)", "font-size": "13px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        filterable: "",
        options: _unref(options),
        placeholder: "Please select",
        style: { "width": "240px" },
        multiple: ""
      }, {
        default: _withCtx(({ item }) => [
          _createElementVNode(
            "span",
            _hoisted_1,
            _toDisplayString(item.label),
            1
            /* TEXT */
          ),
          _createElementVNode(
            "span",
            _hoisted_2,
            _toDisplayString(item.value),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义下拉菜单的头部 2.5.2", css: "\n.custom-header {\n.el-checkbox {\n\n    display: flex;\n\n    height: unset;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref, watch } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const checkAll = ref(false);
    const indeterminate = ref(false);
    const value = ref([]);
    const options = ref(
      Array.from({ length: 1e3 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        label: `${initials[idx % 10]}${idx}`
      }))
    );
    watch(value, (val) => {
      if (val.length === 0) {
        checkAll.value = false;
        indeterminate.value = false;
      } else if (val.length === options.value.length) {
        checkAll.value = true;
        indeterminate.value = false;
      } else {
        indeterminate.value = true;
      }
    });
    const handleCheckAll = (val) => {
      indeterminate.value = false;
      if (val) {
        value.value = options.value.map((_) => _.value);
      } else {
        value.value = [];
      }
    };
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
        options: options.value,
        multiple: "",
        clearable: "",
        "collapse-tags": "",
        placeholder: "Select",
        "popper-class": "custom-header",
        "max-collapse-tags": 1,
        style: { "width": "240px" }
      }, {
        header: _withCtx(() => [
          _createVNode(_component_el_checkbox, {
            modelValue: checkAll.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
            indeterminate: indeterminate.value,
            onChange: handleCheckAll
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " All ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "indeterminate"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义下拉菜单的底部 2.5.2", css: "\n.select-footer {\n\n  display: flex;\n\n  flex-direction: column;\n.option-input {\n\n    width: 100%;\n\n    margin-bottom: 8px;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock, createVNode: _createVNode, createElementVNode: _createElementVNode, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = {
  key: 1,
  class: "select-footer"
};
const { nextTick, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const select = ref();
    const isAdding = ref(false);
    const value = ref([]);
    const optionName = ref("");
    const options = ref(
      Array.from({ length: 1e3 }).map((_, idx) => ({
        value: `Option ${idx + 1}`,
        label: `${initials[idx % 10]}${idx}`
      }))
    );
    const onAddOption = () => {
      isAdding.value = true;
    };
    const onConfirm = () => {
      if (optionName.value) {
        options.value.push({
          label: optionName.value,
          value: optionName.value
        });
        clear();
        nextTick(() => {
          select.value?.scrollTo(options.value.length - 1);
        });
      }
    };
    const clear = () => {
      optionName.value = "";
      isAdding.value = false;
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        ref_key: "select",
        ref: select,
        modelValue: value.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
        options: options.value,
        placeholder: "Select",
        style: { "width": "240px" }
      }, {
        footer: _withCtx(() => [
          !isAdding.value ? (_openBlock(), _createBlock(_component_el_button, {
            key: 0,
            text: "",
            bg: "",
            size: "small",
            onClick: onAddOption
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Add an option ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })) : (_openBlock(), _createElementBlock("div", _hoisted_1, [
            _createVNode(_component_el_input, {
              modelValue: optionName.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => optionName.value = $event),
              class: "option-input",
              placeholder: "input option name",
              size: "small"
            }, null, 8, ["modelValue"]),
            _createElementVNode("div", null, [
              _createVNode(_component_el_button, {
                type: "primary",
                size: "small",
                onClick: onConfirm
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    " confirm ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                size: "small",
                onClick: clear
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "cancel",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ])
          ]))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "创建临时选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "flex": "auto" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value1 = ref([]);
    const value2 = ref();
    const value3 = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _createVNode(_component_el_select_v2, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "margin-right": "16px", "vertical-align": "middle" },
            "allow-create": "",
            "default-first-option": "",
            filterable: "",
            multiple: "",
            clearable: ""
          }, null, 8, ["modelValue", "options"]),
          _createVNode(_component_el_select_v2, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "vertical-align": "middle" },
            "allow-create": "",
            "default-first-option": "",
            filterable: "",
            clearable: ""
          }, null, 8, ["modelValue", "options"])
        ]),
        _createElementVNode("div", null, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            { style: { "margin-top": "20px", "margin-bottom": "8px" } },
            " set reserve-keyword false ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select_v2, {
            modelValue: value3.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value3.value = $event),
            options: _unref(options),
            placeholder: "Please select",
            style: { "width": "240px", "margin-right": "16px", "vertical-align": "middle" },
            "allow-create": "",
            "default-first-option": "",
            filterable: "",
            multiple: "",
            clearable: "",
            "reserve-keyword": false
          }, null, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "远程搜索", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    const list = states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
    const value = ref([]);
    const options = ref([]);
    const loading = ref(false);
    const remoteMethod = (query) => {
      if (query !== "") {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          options.value = list.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase());
          });
        }, 200);
      } else {
        options.value = [];
      }
    };
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "p",
            null,
            "default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            style: { "width": "240px" },
            multiple: "",
            filterable: "",
            remote: "",
            "remote-method": remoteMethod,
            clearable: "",
            options: options.value,
            loading: loading.value,
            placeholder: "Please enter a keyword"
          }, null, 8, ["modelValue", "options", "loading"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "use remote-show-suffix",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            style: { "width": "240px" },
            multiple: "",
            filterable: "",
            remote: "",
            "remote-method": remoteMethod,
            "remote-show-suffix": "",
            clearable: "",
            options: options.value,
            loading: loading.value,
            placeholder: "Please enter a keyword"
          }, null, 8, ["modelValue", "options", "loading"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "使用 value-key 键属性", css: "\n.example-showcase .el-select-v2[data-v-gm9afw] {\n\n  margin-right: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "13",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref({ name: "Option 1", test: "test 0" });
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: {
        name: `Option ${idx + 1}`,
        test: `test ${idx % 3}`
      },
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: _unref(options),
        placeholder: "Please select",
        "value-key": "name",
        style: { "width": "240px" }
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义选项 2.4.2", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "14",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const props = {
      label: "name",
      value: "id"
    };
    const value = ref([]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      id: `Option ${idx + 1}`,
      name: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: _unref(options),
        props,
        placeholder: "Please select",
        style: { "width": "240px" },
        filterable: "",
        multiple: ""
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签 2.5.0", css: "\n.el-tag[data-v-gncvmm] {\n\n  border: none;\n\n  aspect-ratio: 1;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createBlock: _createBlock, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "flex items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "15",
  setup(__props) {
    const value = ref([]);
    const colors = [
      {
        value: "#E63415",
        label: "red"
      },
      {
        value: "#FF6600",
        label: "orange"
      },
      {
        value: "#FFDE0A",
        label: "yellow"
      },
      {
        value: "#1EC79D",
        label: "green"
      },
      {
        value: "#14CCCC",
        label: "cyan"
      },
      {
        value: "#4167F0",
        label: "blue"
      },
      {
        value: "#6222C9",
        label: "purple"
      }
    ];
    colors.forEach((color) => {
      value.value.push(color.value);
    });
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        multiple: "",
        placeholder: "Select",
        options: colors,
        style: { "width": "240px" }
      }, {
        default: _withCtx(({ item }) => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_tag, {
              color: item.value,
              style: { "margin-right": "8px" },
              size: "small"
            }, null, 8, ["color"]),
            _createElementVNode(
              "span",
              {
                style: _normalizeStyle({ color: item.value })
              },
              _toDisplayString(item.label),
              5
              /* TEXT, STYLE */
            )
          ])
        ]),
        tag: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(value.value, (color) => {
              return _openBlock(), _createBlock(_component_el_tag, {
                key: color,
                color
              }, null, 8, ["color"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义加载 2.5.2", css: "\n.el-select-dropdown__loading {\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  height: 100px;\n\n  font-size: 20px;\n}\n.circular {\n\n  display: inline;\n\n  height: 30px;\n\n  width: 30px;\n\n  animation: loading-rotate 2s linear infinite;\n}\n.path {\n\n  animation: loading-dash 1.5s ease-in-out infinite;\n\n  stroke-dasharray: 90, 150;\n\n  stroke-dashoffset: 0;\n\n  stroke-width: 2;\n\n  stroke: var(--el-color-primary);\n\n  stroke-linecap: round;\n}\n.loading-path .dot1 {\n\n  transform: translate(3.75px, 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n}\n.loading-path .dot2 {\n\n  transform: translate(calc(100% - 3.75px), 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.4s;\n}\n.loading-path .dot3 {\n\n  transform: translate(3.75px, calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 1.2s;\n}\n.loading-path .dot4 {\n\n  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.8s;\n}\n@keyframes loading-rotate {\nto {\n\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-dash {\n0% {\n\n    stroke-dasharray: 1, 200;\n\n    stroke-dashoffset: 0;\n}\n50% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -40px;\n}\n100% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -120px;\n}\n}\n@keyframes custom-spin-move {\nto {\n\n    opacity: 1;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "16",
  setup(__props) {
    const list = ref([]);
    const options = ref([]);
    const value = ref([]);
    const loading = ref(false);
    onMounted(() => {
      list.value = states.map((item) => {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    });
    const remoteMethod = (query) => {
      if (query) {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          options.value = list.value.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase());
          });
        }, 3e3);
      } else {
        options.value = [];
      }
    };
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "loading icon1",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-method": remoteMethod,
            loading: loading.value,
            options: options.value,
            style: { "width": "240px" }
          }, {
            loading: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createElementVNode(
                "svg",
                {
                  class: "circular",
                  viewBox: "0 0 50 50"
                },
                [
                  _createElementVNode("circle", {
                    class: "path",
                    cx: "25",
                    cy: "25",
                    r: "20",
                    fill: "none"
                  })
                ],
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "loading", "options"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "loading icon2",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_select_v2, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            multiple: "",
            filterable: "",
            remote: "",
            "reserve-keyword": "",
            placeholder: "Please enter a keyword",
            "remote-method": remoteMethod,
            loading: loading.value,
            options: options.value,
            style: { "width": "240px" }
          }, {
            loading: _withCtx(() => [
              _createVNode(_component_el_icon, { class: "is-loading" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createElementVNode(
                    "svg",
                    {
                      class: "circular",
                      viewBox: "0 0 20 20"
                    },
                    [
                      _createElementVNode("g", {
                        class: "path2 loading-path",
                        "stroke-width": "0",
                        style: { "animation": "none", "stroke": "none" }
                      }, [
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot1",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot2",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot4",
                          rx: "0",
                          ry: "0"
                        }),
                        _createElementVNode("circle", {
                          r: "3.375",
                          class: "dot3",
                          rx: "0",
                          ry: "0"
                        })
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
          }, 8, ["modelValue", "loading", "options"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "空值配置2.7.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "17",
  setup(__props) {
    const value = ref("");
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    options.unshift({
      value: "",
      label: "All"
    });
    const handleClear = () => {
      ElMessage.info(`The clear value is: ${value.value}`);
    };
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createBlock(_component_el_select_v2, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: _unref(options),
        "empty-values": [null, void 0],
        "value-on-clear": null,
        clearable: "",
        placeholder: "Select",
        style: { "width": "240px" },
        onClear: handleClear
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签 2.7.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const _hoisted_2 = { style: { "font-weight": "bold" } };
const _hoisted_3 = { style: { "font-weight": "bold" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "18",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value1 = ref("Option 1");
    const value2 = ref(["Option 1"]);
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select_v2, {
          modelValue: value1.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
          options: _unref(options),
          placeholder: "Select",
          style: { "width": "240px" },
          clearable: ""
        }, {
          label: _withCtx(({ label, value }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(label) + ": ",
              1
              /* TEXT */
            ),
            _createElementVNode(
              "span",
              _hoisted_2,
              _toDisplayString(value),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "options"]),
        _createVNode(_component_el_select_v2, {
          modelValue: value2.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
          options: _unref(options),
          placeholder: "Select",
          style: { "width": "240px" },
          clearable: "",
          multiple: ""
        }, {
          label: _withCtx(({ label, value }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(label) + ": ",
              1
              /* TEXT */
            ),
            _createElementVNode(
              "span",
              _hoisted_3,
              _toDisplayString(value),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "options"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义宽度 2.9.2", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "19",
  setup(__props) {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const value = ref();
    const options = Array.from({ length: 1e3 }).map((_, idx) => ({
      value: `Option ${idx + 1}`,
      label: `${initials[idx % 10]}${idx}${"-".repeat(Math.ceil(idx / 25))}`
    }));
    return (_ctx, _cache) => {
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          style: { "width": "240px" },
          "fit-input-width": false
        }, null, 8, ["modelValue", "options"]),
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          style: { "width": "240px" },
          "fit-input-width": ""
        }, null, 8, ["modelValue", "options"]),
        _createVNode(_component_el_select_v2, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options: _unref(options),
          placeholder: "Please select",
          style: { "width": "240px" },
          "fit-input-width": 440
        }, {
          default: _withCtx(({ item }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(item.value + item.label),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "options"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
