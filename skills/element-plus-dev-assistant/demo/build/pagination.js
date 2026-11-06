window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["pagination"] = [
  { title: "基础用法", css: "\n.example-pagination-block + .example-pagination-block {\n\n  margin-top: 10px;\n}\n.example-pagination-block .example-demonstration {\n\n  margin-bottom: 16px;\n}\n\n\n", comp: { template: "\n\n  <div class=\"example-pagination-block\">\n\n    <div class=\"example-demonstration\">When you have few pages</div>\n\n    <el-pagination layout=\"prev, pager, next\" :total=\"50\" />\n\n  </div>\n\n  <div class=\"example-pagination-block\">\n\n    <div class=\"example-demonstration\">When you have more than 7 pages</div>\n\n    <el-pagination layout=\"prev, pager, next\" :total=\"1000\" />\n\n  </div>\n\n" } },
  { title: "设置最大页码按钮数", css: "", comp: { template: "\n\n  <el-pagination\n\n    :page-size=\"20\"\n\n    :pager-count=\"11\"\n\n    layout=\"prev, pager, next\"\n\n    :total=\"1000\"\n\n  />\n\n" } },
  { title: "带有背景色的分页", css: "", comp: { template: "\n\n  <el-pagination background layout=\"prev, pager, next\" :total=\"1000\" />\n\n" } },
  { title: "小型分页", css: "", comp: { template: "\n\n  <el-pagination size=\"small\" layout=\"prev, pager, next\" :total=\"50\" />\n\n  <el-pagination\n\n    size=\"small\"\n\n    background\n\n    layout=\"prev, pager, next\"\n\n    :total=\"50\"\n\n    class=\"mt-4\"\n\n  />\n\n" } },
  { title: "当只有一页时隐藏分页", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const value = ref(false);
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_pagination = _resolveComponent("el-pagination");
      return _openBlock(), _createElementBlock("div", null, [
        _createVNode(_component_el_switch, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["modelValue"]),
        _cache[1] || (_cache[1] = _createElementVNode(
          "hr",
          { class: "my-4" },
          null,
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_pagination, {
          "hide-on-single-page": value.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "附加功能", css: "\n.demo-pagination-block + .demo-pagination-block[data-v-gwyo2w] {\n\n  margin-top: 10px;\n}\n.demo-pagination-block .demonstration[data-v-gwyo2w] {\n\n  margin-bottom: 16px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex items-center mb-4" };
const _hoisted_2 = { class: "ml-4" };
const _hoisted_3 = { class: "demo-pagination-block" };
const _hoisted_4 = { class: "demo-pagination-block" };
const _hoisted_5 = { class: "demo-pagination-block" };
const _hoisted_6 = { class: "demo-pagination-block" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const currentPage1 = ref(5);
    const currentPage2 = ref(5);
    const currentPage3 = ref(5);
    const currentPage4 = ref(4);
    const pageSize2 = ref(100);
    const pageSize3 = ref(100);
    const pageSize4 = ref(100);
    const size = ref("default");
    const background = ref(false);
    const disabled = ref(false);
    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      console.log(`current page: ${val}`);
    };
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_pagination = _resolveComponent("el-pagination");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_radio_group, {
              modelValue: size.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
              class: "mr-4"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, { value: "default" }, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "default",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "large" }, {
                  default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                    _createTextVNode(
                      "large",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "small" }, {
                  default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                    _createTextVNode(
                      "small",
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
            }, 8, ["modelValue"]),
            _createElementVNode("div", null, [
              _cache[13] || (_cache[13] = _createTextVNode(
                " background: ",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_switch, {
                modelValue: background.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => background.value = $event),
                class: "ml-2"
              }, null, 8, ["modelValue"])
            ]),
            _createElementVNode("div", _hoisted_2, [
              _cache[14] || (_cache[14] = _createTextVNode(
                " disabled: ",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_switch, {
                modelValue: disabled.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => disabled.value = $event),
                class: "ml-2"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _cache[19] || (_cache[19] = _createElementVNode(
            "hr",
            { class: "my-4" },
            null,
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_3, [
            _cache[15] || (_cache[15] = _createElementVNode(
              "div",
              { class: "demonstration" },
              "Total item count",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_pagination, {
              "current-page": currentPage1.value,
              "onUpdate:currentPage": _cache[3] || (_cache[3] = ($event) => currentPage1.value = $event),
              "page-size": 100,
              size: size.value,
              disabled: disabled.value,
              background: background.value,
              layout: "total, prev, pager, next",
              total: 1e3,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "size", "disabled", "background"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[16] || (_cache[16] = _createElementVNode(
              "div",
              { class: "demonstration" },
              "Change page size",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_pagination, {
              "current-page": currentPage2.value,
              "onUpdate:currentPage": _cache[4] || (_cache[4] = ($event) => currentPage2.value = $event),
              "page-size": pageSize2.value,
              "onUpdate:pageSize": _cache[5] || (_cache[5] = ($event) => pageSize2.value = $event),
              "page-sizes": [100, 200, 300, 400],
              size: size.value,
              disabled: disabled.value,
              background: background.value,
              layout: "sizes, prev, pager, next",
              total: 1e3,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "page-size", "size", "disabled", "background"])
          ]),
          _createElementVNode("div", _hoisted_5, [
            _cache[17] || (_cache[17] = _createElementVNode(
              "div",
              { class: "demonstration" },
              "Jump to",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_pagination, {
              "current-page": currentPage3.value,
              "onUpdate:currentPage": _cache[6] || (_cache[6] = ($event) => currentPage3.value = $event),
              "page-size": pageSize3.value,
              "onUpdate:pageSize": _cache[7] || (_cache[7] = ($event) => pageSize3.value = $event),
              size: size.value,
              disabled: disabled.value,
              background: background.value,
              layout: "prev, pager, next, jumper",
              total: 1e3,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "page-size", "size", "disabled", "background"])
          ]),
          _createElementVNode("div", _hoisted_6, [
            _cache[18] || (_cache[18] = _createElementVNode(
              "div",
              { class: "demonstration" },
              "All combined",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_pagination, {
              "current-page": currentPage4.value,
              "onUpdate:currentPage": _cache[8] || (_cache[8] = ($event) => currentPage4.value = $event),
              "page-size": pageSize4.value,
              "onUpdate:pageSize": _cache[9] || (_cache[9] = ($event) => pageSize4.value = $event),
              "page-sizes": [100, 200, 300, 400],
              size: size.value,
              disabled: disabled.value,
              background: background.value,
              layout: "total, sizes, prev, pager, next, jumper",
              total: 400,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "page-size", "size", "disabled", "background"])
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
];
