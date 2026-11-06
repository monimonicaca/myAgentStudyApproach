window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["scrollbar"] = [
  { title: "基础用法", css: "\n.scrollbar-demo-item {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  margin: 10px;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background: var(--el-color-primary-light-9);\n\n  color: var(--el-color-primary);\n}\n\n\n", comp: { template: "\n\n  <el-scrollbar height=\"400px\">\n\n    <p v-for=\"item in 20\" :key=\"item\" class=\"scrollbar-demo-item\">{{ item }}</p>\n\n  </el-scrollbar>\n\n" } },
  { title: "横向滚动", css: "\n.scrollbar-flex-content {\n\n  display: flex;\n\n  width: fit-content;\n}\n.scrollbar-demo-item {\n\n  flex-shrink: 0;\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  width: 100px;\n\n  height: 50px;\n\n  margin: 10px;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background: var(--el-color-danger-light-9);\n\n  color: var(--el-color-danger);\n}\n\n\n", comp: { template: "\n\n  <el-scrollbar>\n\n    <div class=\"scrollbar-flex-content\">\n\n      <p v-for=\"item in 50\" :key=\"item\" class=\"scrollbar-demo-item\">\n\n        {{ item }}\n\n      </p>\n\n    </div>\n\n  </el-scrollbar>\n\n" } },
  { title: "最大高度", css: "\n.scrollbar-demo-item[data-v-9i7fkx] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  margin: 10px;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background: var(--el-color-primary-light-9);\n\n  color: var(--el-color-primary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const count = ref(3);
    const add = () => {
      count.value++;
    };
    const onDelete = () => {
      if (count.value > 0) {
        count.value--;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_scrollbar = _resolveComponent("el-scrollbar");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, { onClick: add }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Add Item",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, { onClick: onDelete }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Delete Item",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_scrollbar, { "max-height": "400px" }, {
            default: _withCtx(() => [
              (_openBlock(true), _createElementBlock(
                _Fragment,
                null,
                _renderList(count.value, (item) => {
                  return _openBlock(), _createElementBlock(
                    "p",
                    {
                      key: item,
                      class: "scrollbar-demo-item"
                    },
                    _toDisplayString(item),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "手动滚动", css: "\n.scrollbar-demo-item[data-v-9ir86a] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  margin: 10px;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background: var(--el-color-primary-light-9);\n\n  color: var(--el-color-primary);\n}\n.el-slider[data-v-9ir86a] {\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode } = Vue;
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const max = ref(0);
    const value = ref(0);
    const innerRef = ref();
    const scrollbarRef = ref();
    onMounted(() => {
      max.value = innerRef.value.clientHeight - 380;
    });
    const inputSlider = (value2) => {
      scrollbarRef.value.setScrollTop(value2);
    };
    const scroll = ({ scrollTop }) => {
      value.value = scrollTop;
    };
    const formatTooltip = (value2) => `${value2} px`;
    return (_ctx, _cache) => {
      const _component_el_scrollbar = _resolveComponent("el-scrollbar");
      const _component_el_slider = _resolveComponent("el-slider");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(
            _component_el_scrollbar,
            {
              ref_key: "scrollbarRef",
              ref: scrollbarRef,
              height: "400px",
              always: "",
              onScroll: scroll
            },
            {
              default: _withCtx(() => [
                _createElementVNode(
                  "div",
                  {
                    ref_key: "innerRef",
                    ref: innerRef
                  },
                  [
                    (_openBlock(), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(20, (item) => {
                        return _createElementVNode(
                          "p",
                          {
                            key: item,
                            class: "scrollbar-demo-item"
                          },
                          _toDisplayString(item),
                          1
                          /* TEXT */
                        );
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ],
                  512
                  /* NEED_PATCH */
                )
              ]),
              _: 1
              /* STABLE */
            },
            512
            /* NEED_PATCH */
          ),
          _createVNode(_component_el_slider, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            max: max.value,
            "format-tooltip": formatTooltip,
            onInput: inputSlider
          }, null, 8, ["modelValue", "max"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "无限滚动2.10.0", css: "\n.scrollbar-demo-item[data-v-9jb0rn] {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  margin: 10px;\n\n  text-align: center;\n\n  border-radius: 4px;\n\n  background: var(--el-color-primary-light-9);\n\n  color: var(--el-color-primary);\n}\n.el-slider[data-v-9jb0rn] {\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const num = ref(30);
    const loadMore = (direction) => {
      if (direction === "bottom") {
        num.value += 5;
      }
    };
    return (_ctx, _cache) => {
      const _component_el_scrollbar = _resolveComponent("el-scrollbar");
      return _openBlock(), _createBlock(_component_el_scrollbar, {
        height: "400px",
        onEndReached: loadMore
      }, {
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(num.value, (item) => {
              return _openBlock(), _createElementBlock(
                "p",
                {
                  key: item,
                  class: "scrollbar-demo-item"
                },
                _toDisplayString(item),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
];
