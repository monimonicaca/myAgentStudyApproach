window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["autocomplete"] = [
  { title: "基础用法", css: "\n.demo-autocomplete[data-v-y2m23j] {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 2rem;\n}\n.demo-block[data-v-y2m23j] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 0.5rem;\n}\n.demo-title[data-v-y2m23j] {\n\n  font-size: 0.875rem;\n\n  color: var(--el-text-color-secondary);\n\n  min-height: 2.5em;\n\n  display: flex;\n\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n.demo-autocomplete[data-v-y2m23j] {\n\n    gap: 1rem;\n}\n.demo-block[data-v-y2m23j] {\n\n    width: 100%;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-autocomplete" };
const _hoisted_2 = { class: "demo-block" };
const _hoisted_3 = { class: "demo-block" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const state1 = ref("");
    const state2 = ref("");
    const restaurants = ref([]);
    const querySearch = (queryString, cb) => {
      const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value;
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      restaurants.value = loadAll();
    });
    return (_ctx, _cache) => {
      const _component_el_autocomplete = _resolveComponent("el-autocomplete");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "div",
            { class: "demo-title" },
            "list suggestions when activated",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            modelValue: state1.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state1.value = $event),
            "fetch-suggestions": querySearch,
            clearable: "",
            class: "w-50",
            placeholder: "Please Input",
            onSelect: handleSelect
          }, null, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "div",
            { class: "demo-title" },
            "list suggestions on input",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            modelValue: state2.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state2.value = $event),
            "fetch-suggestions": querySearch,
            "trigger-on-focus": false,
            clearable: "",
            class: "w-50",
            placeholder: "Please Input",
            onSelect: handleSelect
          }, null, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义模板", css: "\n.my-autocomplete li {\n\n  line-height: normal;\n\n  padding: 7px;\n}\n.my-autocomplete li .name {\n\n  text-overflow: ellipsis;\n\n  overflow: hidden;\n}\n.my-autocomplete li .addr {\n\n  font-size: 12px;\n\n  color: #b4b4b4;\n}\n.my-autocomplete li .highlighted .addr {\n\n  color: #ddd;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "value" };
const _hoisted_2 = { class: "link" };
const { onMounted, ref } = Vue;
const { Edit } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const state = ref("");
    const links = ref([]);
    const querySearch = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    const handleIconClick = (ev) => {
      console.log(ev);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_autocomplete = _resolveComponent("el-autocomplete");
      return _openBlock(), _createBlock(_component_el_autocomplete, {
        modelValue: state.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
        "fetch-suggestions": querySearch,
        "popper-class": "my-autocomplete",
        placeholder: "Please input",
        onSelect: handleSelect
      }, {
        suffix: _withCtx(() => [
          _createVNode(_component_el_icon, {
            class: "el-input__icon",
            onClick: handleIconClick
          }, {
            default: _withCtx(() => [
              _createVNode(_unref(Edit))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        default: _withCtx(({ item }) => [
          _createElementVNode(
            "div",
            _hoisted_1,
            _toDisplayString(item.value),
            1
            /* TEXT */
          ),
          _createElementVNode(
            "span",
            _hoisted_2,
            _toDisplayString(item.link),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "远程搜索", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const state = ref("");
    const links = ref([]);
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    };
    let timeout;
    const querySearchAsync = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3e3 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return (_ctx, _cache) => {
      const _component_el_autocomplete = _resolveComponent("el-autocomplete");
      return _openBlock(), _createBlock(_component_el_autocomplete, {
        modelValue: state.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
        "fetch-suggestions": querySearchAsync,
        placeholder: "Please input",
        onSelect: handleSelect
      }, null, 8, ["modelValue"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义加载 2.5.0", css: "\n.demo-autocomplete[data-v-y0yobg] {\n\n  display: flex;\n\n  flex-wrap: wrap;\n\n  gap: 2rem;\n}\n.demo-block[data-v-y0yobg] {\n\n  display: flex;\n\n  flex-direction: column;\n\n  gap: 0.5rem;\n}\n.demo-title[data-v-y0yobg] {\n\n  font-size: 0.875rem;\n\n  color: var(--el-text-color-secondary);\n\n  min-height: 2.5em;\n\n  display: flex;\n\n  align-items: center;\n}\n@media screen and (max-width: 768px) {\n.demo-autocomplete[data-v-y0yobg] {\n\n    gap: 1rem;\n}\n.demo-block[data-v-y0yobg] {\n\n    width: 100%;\n}\n}\n\n\n\n.circular {\n\n  display: inline;\n\n  height: 30px;\n\n  width: 30px;\n\n  animation: loading-rotate 2s linear infinite;\n}\n.path {\n\n  animation: loading-dash 1.5s ease-in-out infinite;\n\n  stroke-dasharray: 90, 150;\n\n  stroke-dashoffset: 0;\n\n  stroke-width: 2;\n\n  stroke: var(--el-color-primary);\n\n  stroke-linecap: round;\n}\n.loading-path .dot1 {\n\n  transform: translate(3.75px, 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n}\n.loading-path .dot2 {\n\n  transform: translate(calc(100% - 3.75px), 3.75px);\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.4s;\n}\n.loading-path .dot3 {\n\n  transform: translate(3.75px, calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 1.2s;\n}\n.loading-path .dot4 {\n\n  transform: translate(calc(100% - 3.75px), calc(100% - 3.75px));\n\n  fill: var(--el-color-primary);\n\n  animation: custom-spin-move 1s infinite linear alternate;\n\n  opacity: 0.3;\n\n  animation-delay: 0.8s;\n}\n@keyframes loading-rotate {\nto {\n\n    transform: rotate(360deg);\n}\n}\n@keyframes loading-dash {\n0% {\n\n    stroke-dasharray: 1, 200;\n\n    stroke-dashoffset: 0;\n}\n50% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -40px;\n}\n100% {\n\n    stroke-dasharray: 90, 150;\n\n    stroke-dashoffset: -120px;\n}\n}\n@keyframes custom-spin-move {\nto {\n\n    opacity: 1;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-autocomplete" };
const _hoisted_2 = { class: "demo-block" };
const _hoisted_3 = { class: "demo-block" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const state = ref("");
    const links = ref([]);
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    };
    let timeout;
    const querySearchAsync = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 5e3 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    return (_ctx, _cache) => {
      const _component_el_autocomplete = _resolveComponent("el-autocomplete");
      const _component_el_icon = _resolveComponent("el-icon");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "div",
            { class: "demo-title" },
            "loading icon1",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            modelValue: state.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
            "fetch-suggestions": querySearchAsync,
            class: "w-50",
            placeholder: "Please input",
            onSelect: handleSelect
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
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "div",
            { class: "demo-title" },
            "loading icon2",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            modelValue: state.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.value = $event),
            "fetch-suggestions": querySearchAsync,
            class: "w-50",
            placeholder: "Please input",
            onSelect: handleSelect
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
          }, 8, ["modelValue"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义头部与底部 2.10.6", css: "\n.autocomplete-custom-header-footer[data-v-y0evq3] {\n\n  display: flex;\n}\n.autocomplete-custom-header-footer > div[data-v-y0evq3] {\n\n  flex: 1;\n\n  text-align: center;\n}\n.autocomplete-custom-header-footer > div[data-v-y0evq3] >  .el-autocomplete {\n\n  width: 50%;\n}\n.autocomplete-custom-header-footer > div[data-v-y0evq3]:not(:last-child) {\n\n  border-right: 1px solid var(--el-border-color);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "autocomplete-custom-header-footer" };
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const headerSlotState = ref("");
    const footerSlotstate = ref("");
    const links = ref([]);
    const loadAll = () => {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    };
    let timeout;
    const querySearchAsync = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(results);
      }, 3e3 * Math.random());
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    onMounted(() => {
      links.value = loadAll();
    });
    const footerAutocompleteRef = ref();
    const handleClear = () => {
      footerSlotstate.value = "";
      footerAutocompleteRef.value.getData();
    };
    return (_ctx, _cache) => {
      const _component_el_autocomplete = _resolveComponent("el-autocomplete");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _cache[3] || (_cache[3] = _createElementVNode(
            "p",
            null,
            "Custom header content",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            modelValue: headerSlotState.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => headerSlotState.value = $event),
            "fetch-suggestions": querySearchAsync,
            placeholder: "Please input",
            onSelect: handleSelect
          }, {
            header: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                "header content",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _createElementVNode("div", null, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "Custom footer content",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_autocomplete, {
            ref_key: "footerAutocompleteRef",
            ref: footerAutocompleteRef,
            modelValue: footerSlotstate.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => footerSlotstate.value = $event),
            "fetch-suggestions": querySearchAsync,
            placeholder: "Please input",
            onSelect: handleSelect
          }, {
            footer: _withCtx(() => [
              _createVNode(_component_el_button, {
                link: "",
                size: "small",
                onClick: handleClear
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    " Clear ",
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
