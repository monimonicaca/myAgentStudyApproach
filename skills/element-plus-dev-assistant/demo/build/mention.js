window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["mention"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref("@");
    const options = ref([
      {
        label: "Fuphoenixes",
        value: "Fuphoenixes"
      },
      {
        label: "kooriookami",
        value: "kooriookami"
      },
      {
        label: "Jeremy",
        value: "Jeremy"
      },
      {
        label: "btea",
        value: "btea"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        style: { "width": "320px" },
        placeholder: "Please input"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "Props 2.11.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const value = ref("@");
    const props = { label: "name", value: "id", disabled: "unable" };
    const options = ref([
      {
        name: "Fuphoenixes",
        id: "Fuphoenixes",
        unable: true
      },
      {
        name: "kooriookami",
        id: "kooriookami"
      },
      {
        name: "Jeremy",
        id: "Jeremy",
        unable: true
      },
      {
        name: "btea",
        id: "btea"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        props,
        style: { "width": "320px" },
        placeholder: "Please input"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "Textarea", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const value = ref("");
    const options = ref([
      {
        label: "Fuphoenixes",
        value: "Fuphoenixes"
      },
      {
        label: "kooriookami",
        value: "kooriookami"
      },
      {
        label: "Jeremy",
        value: "Jeremy"
      },
      {
        label: "btea",
        value: "btea"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        type: "textarea",
        options: options.value,
        style: { "width": "320px" },
        placeholder: "Please input"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2 = { style: { "margin-left": "6px" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const value = ref("");
    const options = ref([
      {
        value: "Fuphoenixes",
        avatar: "https://avatars.githubusercontent.com/u/27912232"
      },
      {
        value: "kooriookami",
        avatar: "https://avatars.githubusercontent.com/u/38392315"
      },
      {
        value: "Jeremy",
        avatar: "https://avatars.githubusercontent.com/u/15975785"
      },
      {
        value: "btea",
        avatar: "https://avatars.githubusercontent.com/u/24516654"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        style: { "width": "320px" },
        placeholder: "Please input"
      }, {
        label: _withCtx(({ item }) => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_avatar, {
              size: 24,
              src: item.avatar
            }, null, 8, ["src"]),
            _createElementVNode(
              "span",
              _hoisted_2,
              _toDisplayString(item.value),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "加载远程选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { onBeforeUnmount, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref("");
    const loading = ref(false);
    const options = ref([]);
    let timer;
    const handleSearch = (pattern) => {
      if (timer) clearTimeout(timer);
      loading.value = true;
      timer = setTimeout(() => {
        options.value = ["Fuphoenixes", "kooriookami", "Jeremy", "btea"].map(
          (item) => ({
            label: pattern + item,
            value: pattern + item
          })
        );
        loading.value = false;
      }, 1500);
    };
    onBeforeUnmount(() => {
      if (timer) clearTimeout(timer);
    });
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        loading: loading.value,
        style: { "width": "320px" },
        placeholder: "Please input",
        onSearch: handleSearch
      }, null, 8, ["modelValue", "options", "loading"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义触发字段", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const MOCK_DATA = {
      "@": ["Fuphoenixes", "kooriookami", "Jeremy", "btea"],
      "#": ["1.0", "2.0", "3.0"]
    };
    const value = ref("");
    const options = ref([]);
    const handleSearch = (_, prefix) => {
      options.value = (MOCK_DATA[prefix] || []).map((value2) => ({
        value: value2
      }));
    };
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      return _openBlock(), _createBlock(_component_el_mention, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        prefix: ["@", "#"],
        style: { "width": "320px" },
        placeholder: "input @ to mention people, # to mention tag",
        onSearch: handleSearch
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "整体删除", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const MOCK_DATA = {
      "@": ["Fuphoenixes", "kooriookami", "Jeremy", "btea"],
      "#": ["1.0", "2.0", "3.0"]
    };
    const value1 = ref("");
    const value2 = ref("");
    const options1 = ref(
      MOCK_DATA["@"].map((value) => ({ value }))
    );
    const options2 = ref([]);
    const handleSearch = (_, prefix) => {
      options2.value = (MOCK_DATA[prefix] || []).map((value) => ({
        value
      }));
    };
    const checkIsWhole = (pattern, prefix) => {
      return (MOCK_DATA[prefix] || []).includes(pattern);
    };
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      const _component_el_divider = _resolveComponent("el-divider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_mention, {
            modelValue: value1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
            whole: "",
            options: options1.value,
            style: { "width": "320px" },
            placeholder: "Please input"
          }, null, 8, ["modelValue", "options"]),
          _createVNode(_component_el_divider),
          _createVNode(_component_el_mention, {
            modelValue: value2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
            options: options2.value,
            prefix: ["@", "#"],
            whole: "",
            "check-is-whole": checkIsWhole,
            style: { "width": "320px" },
            placeholder: "input @ to mention people, # to mention tag",
            onSearch: handleSearch
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
  { title: "在表单里使用", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const ruleFormRef = ref();
    const ruleForm = reactive({
      name: "",
      desc: ""
    });
    const options = ref([
      {
        label: "Fuphoenixes",
        value: "Fuphoenixes"
      },
      {
        label: "kooriookami",
        value: "kooriookami"
      },
      {
        label: "Jeremy",
        value: "Jeremy"
      },
      {
        label: "btea",
        value: "btea"
      }
    ]);
    const rules = reactive({
      name: [{ required: true, message: "Please input name", trigger: "blur" }],
      desc: [{ required: true, message: "Please input desc", trigger: "blur" }]
    });
    const submitForm = async (formEl) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_mention = _resolveComponent("el-mention");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        style: { "max-width": "600px" },
        model: ruleForm,
        rules
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            label: "name",
            prop: "name"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_mention, {
                modelValue: ruleForm.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.name = $event),
                options: options.value
              }, null, 8, ["modelValue", "options"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "desc",
            prop: "desc"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_mention, {
                modelValue: ruleForm.desc,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.desc = $event),
                type: "textarea",
                options: options.value
              }, null, 8, ["modelValue", "options"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[2] || (_cache[2] = ($event) => submitForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    " Submit ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                onClick: _cache[3] || (_cache[3] = ($event) => resetForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "Reset",
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
      }, 8, ["model", "rules"]);
    };
  }
});
return stdin_default;
 })() },
];
