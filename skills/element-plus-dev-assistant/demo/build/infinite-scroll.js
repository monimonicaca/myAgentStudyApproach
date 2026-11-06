window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["infinite-scroll"] = [
  { title: "基础用法", css: "\n.infinite-list {\n\n  height: 300px;\n\n  padding: 0;\n\n  margin: 0;\n\n  list-style: none;\n}\n.infinite-list .infinite-list-item {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  background: var(--el-color-primary-light-9);\n\n  margin: 10px;\n\n  color: var(--el-color-primary);\n}\n.infinite-list .infinite-list-item + .list-item {\n\n  margin-top: 10px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, resolveDirective: _resolveDirective, withDirectives: _withDirectives } = Vue;
const _hoisted_1 = {
  class: "infinite-list",
  style: { "overflow": "auto" }
};
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const count = ref(0);
    const load = () => {
      count.value += 2;
    };
    return (_ctx, _cache) => {
      const _directive_infinite_scroll = _resolveDirective("infinite-scroll");
      return _withDirectives((_openBlock(), _createElementBlock("ul", _hoisted_1, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(count.value, (i) => {
            return _openBlock(), _createElementBlock(
              "li",
              {
                key: i,
                class: "infinite-list-item"
              },
              _toDisplayString(i),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])), [
        [_directive_infinite_scroll, load]
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用加载", css: "\n.infinite-list-wrapper {\n\n  height: 300px;\n\n  text-align: center;\n}\n.infinite-list-wrapper .list {\n\n  padding: 0;\n\n  margin: 0;\n\n  list-style: none;\n}\n.infinite-list-wrapper .list-item {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: center;\n\n  height: 50px;\n\n  background: var(--el-color-danger-light-9);\n\n  color: var(--el-color-danger);\n}\n.infinite-list-wrapper .list-item + .list-item {\n\n  margin-top: 10px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, resolveDirective: _resolveDirective, withDirectives: _withDirectives, createCommentVNode: _createCommentVNode } = Vue;
const _hoisted_1 = {
  class: "infinite-list-wrapper",
  style: { "overflow": "auto" }
};
const _hoisted_2 = ["infinite-scroll-disabled"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const count = ref(10);
    const loading = ref(false);
    const noMore = computed(() => count.value >= 20);
    const disabled = computed(() => loading.value || noMore.value);
    const load = () => {
      loading.value = true;
      setTimeout(() => {
        count.value += 2;
        loading.value = false;
      }, 2e3);
    };
    return (_ctx, _cache) => {
      const _directive_infinite_scroll = _resolveDirective("infinite-scroll");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _withDirectives((_openBlock(), _createElementBlock("ul", {
          class: "list",
          "infinite-scroll-disabled": disabled.value
        }, [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(count.value, (i) => {
              return _openBlock(), _createElementBlock(
                "li",
                {
                  key: i,
                  class: "list-item"
                },
                _toDisplayString(i),
                1
                /* TEXT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, _hoisted_2)), [
          [_directive_infinite_scroll, load]
        ]),
        loading.value ? (_openBlock(), _createElementBlock("p", _hoisted_3, "Loading...")) : _createCommentVNode("v-if", true),
        noMore.value ? (_openBlock(), _createElementBlock("p", _hoisted_4, "No more")) : _createCommentVNode("v-if", true)
      ]);
    };
  }
});
return stdin_default;
 })() },
];
