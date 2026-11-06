window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["transfer"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      for (let i = 1; i <= 15; i++) {
        data2.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    return (_ctx, _cache) => {
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createBlock(_component_el_transfer, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        data: data.value
      }, null, 8, ["modelValue", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可搜索过滤", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      const states = [
        "California",
        "Illinois",
        "Maryland",
        "Texas",
        "Florida",
        "Colorado",
        "Connecticut "
      ];
      const initials = ["CA", "IL", "MD", "TX", "FL", "CO", "CT"];
      states.forEach((city, index) => {
        data2.push({
          label: city,
          key: index,
          initial: initials[index]
        });
      });
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    const filterMethod = (query, item) => {
      return item.initial.toLowerCase().includes(query.toLowerCase());
    };
    return (_ctx, _cache) => {
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createBlock(_component_el_transfer, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        filterable: "",
        "filter-method": filterMethod,
        "filter-placeholder": "State Abbreviations",
        data: data.value
      }, null, 8, ["modelValue", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义", css: "\n.transfer-footer {\n\n  margin-left: 15px;\n\n  padding: 6px 5px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "text-align": "center" } };
const _hoisted_2 = { style: { "text-align": "center" } };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      for (let i = 1; i <= 15; i++) {
        data2.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data2;
    };
    const data = ref(generateData());
    const rightValue = ref([1]);
    const leftValue = ref([1]);
    const renderFunc = (h, option) => h("span", null, option.label);
    const handleChange = (value, direction, movedKeys) => {
      console.log(value, direction, movedKeys);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _cache[7] || (_cache[7] = _createElementVNode(
            "p",
            { style: { "text-align": "center", "margin": "0 0 20px" } },
            " Customize data items using render-content ",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_transfer, {
              modelValue: leftValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => leftValue.value = $event),
              style: { "text-align": "left", "display": "inline-block" },
              filterable: "",
              "left-default-checked": [2, 3],
              "right-default-checked": [1],
              "render-content": renderFunc,
              titles: ["Source", "Target"],
              "button-texts": ["To left", "To right"],
              format: {
                noChecked: "${total}",
                hasChecked: "${checked}/${total}"
              },
              data: data.value,
              onChange: handleChange
            }, {
              "left-footer": _withCtx(() => [
                _createVNode(_component_el_button, {
                  class: "transfer-footer",
                  size: "small"
                }, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createTextVNode(
                      "Operation",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ]),
              "right-footer": _withCtx(() => [
                _createVNode(_component_el_button, {
                  class: "transfer-footer",
                  size: "small"
                }, {
                  default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                    _createTextVNode(
                      "Operation",
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
            }, 8, ["modelValue", "data"]),
            _cache[6] || (_cache[6] = _createElementVNode(
              "p",
              { style: { "text-align": "center", "margin": "50px 0 20px" } },
              " Customize data items using scoped slot ",
              -1
              /* CACHED */
            )),
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_transfer, {
                modelValue: rightValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => rightValue.value = $event),
                style: { "text-align": "left", "display": "inline-block" },
                filterable: "",
                "left-default-checked": [2, 3],
                "right-default-checked": [1],
                titles: ["Source", "Target"],
                "button-texts": ["To left", "To right"],
                format: {
                  noChecked: "${total}",
                  hasChecked: "${checked}/${total}"
                },
                data: data.value,
                onChange: handleChange
              }, {
                default: _withCtx(({ option }) => [
                  _createElementVNode(
                    "span",
                    null,
                    _toDisplayString(option.key) + " - " + _toDisplayString(option.label),
                    1
                    /* TEXT */
                  )
                ]),
                "left-footer": _withCtx(() => [
                  _createVNode(_component_el_button, {
                    class: "transfer-footer",
                    size: "small"
                  }, {
                    default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                      _createTextVNode(
                        "Operation",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                "right-footer": _withCtx(() => [
                  _createVNode(_component_el_button, {
                    class: "transfer-footer",
                    size: "small"
                  }, {
                    default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                      _createTextVNode(
                        "Operation",
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
              }, 8, ["modelValue", "data"])
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
  { title: "自定义空内容 2.9.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      for (let i = 1; i <= 15; i++) {
        data2.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    return (_ctx, _cache) => {
      const _component_el_empty = _resolveComponent("el-empty");
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createBlock(_component_el_transfer, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        data: data.value
      }, {
        "left-empty": _withCtx(() => [
          _createVNode(_component_el_empty, {
            "image-size": 60,
            description: "No data"
          })
        ]),
        "right-empty": _withCtx(() => [
          _createVNode(_component_el_empty, {
            "image-size": 60,
            description: "No data"
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "数据项属性别名", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      for (let i = 1; i <= 15; i++) {
        data2.push({
          value: i,
          desc: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    return (_ctx, _cache) => {
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createBlock(_component_el_transfer, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        props: {
          key: "value",
          label: "desc"
        },
        data: data.value
      }, null, 8, ["modelValue", "data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "虚拟滚动 2.14.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const generateData = () => {
      const data2 = [];
      for (let i = 1; i <= 2e3; i++) {
        data2.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data2;
    };
    const data = ref(generateData());
    const value = ref([]);
    return (_ctx, _cache) => {
      const _component_el_transfer = _resolveComponent("el-transfer");
      return _openBlock(), _createBlock(_component_el_transfer, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        data: data.value,
        "virtual-scroll": "",
        "item-size": 30
      }, null, 8, ["modelValue", "data"]);
    };
  }
});
return stdin_default;
 })() },
];
