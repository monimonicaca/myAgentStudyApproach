window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tag"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <div class=\"flex gap-2\">\n\n    <el-tag type=\"primary\">Tag 1</el-tag>\n\n    <el-tag type=\"success\">Tag 2</el-tag>\n\n    <el-tag type=\"info\">Tag 3</el-tag>\n\n    <el-tag type=\"warning\">Tag 4</el-tag>\n\n    <el-tag type=\"danger\">Tag 5</el-tag>\n\n  </div>\n\n" } },
  { title: "可移除标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "flex gap-2" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const tags = ref([
      { name: "Tag 1", type: "primary" },
      { name: "Tag 2", type: "success" },
      { name: "Tag 3", type: "info" },
      { name: "Tag 4", type: "warning" },
      { name: "Tag 5", type: "danger" }
    ]);
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(tags.value, (tag) => {
            return _openBlock(), _createBlock(_component_el_tag, {
              key: tag.name,
              closable: "",
              type: tag.type
            }, {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(tag.name),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["type"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "动态编辑标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock, withKeys: _withKeys } = Vue;
const _hoisted_1 = { class: "flex gap-2" };
const { nextTick, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const inputValue = ref("");
    const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
    const inputVisible = ref(false);
    const InputRef = ref();
    const handleClose = (tag) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };
    const showInput = () => {
      inputVisible.value = true;
      nextTick(() => {
        InputRef.value.input.focus();
      });
    };
    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(dynamicTags.value, (tag) => {
            return _openBlock(), _createBlock(_component_el_tag, {
              key: tag,
              closable: "",
              "disable-transitions": false,
              onClose: ($event) => handleClose(tag)
            }, {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(tag),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["onClose"]);
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        inputVisible.value ? (_openBlock(), _createBlock(_component_el_input, {
          key: 0,
          ref_key: "InputRef",
          ref: InputRef,
          modelValue: inputValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
          class: "w-20",
          size: "small",
          onKeyup: _withKeys(handleInputConfirm, ["enter"]),
          onBlur: handleInputConfirm
        }, null, 8, ["modelValue"])) : (_openBlock(), _createBlock(_component_el_button, {
          key: 1,
          class: "button-new-tag",
          size: "small",
          onClick: showInput
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " + New Tag ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }))
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "不同尺寸", css: "", comp: { template: "\n\n  <div class=\"flex gap-2\">\n\n    <el-tag size=\"large\">Large</el-tag>\n\n    <el-tag>Default</el-tag>\n\n    <el-tag size=\"small\">Small</el-tag>\n\n  </div>\n\n" } },
  { title: "主题", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "flex gap-2" };
const _hoisted_2 = { class: "flex gap-2 mt-4" };
const _hoisted_3 = { class: "flex gap-2 mt-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const items = ref([
      { type: "primary", label: "Tag 1" },
      { type: "success", label: "Tag 2" },
      { type: "info", label: "Tag 3" },
      { type: "warning", label: "Tag 4" },
      { type: "danger", label: "Tag 5" }
    ]);
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode(
              "span",
              null,
              "Dark",
              -1
              /* CACHED */
            )),
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "dark"
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "span",
              null,
              "Light",
              -1
              /* CACHED */
            )),
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "light"
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "span",
              null,
              "Plain",
              -1
              /* CACHED */
            )),
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "plain"
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
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
  { title: "圆角标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock, createElementVNode: _createElementVNode } = Vue;
const _hoisted_1 = { class: "flex gap-2" };
const _hoisted_2 = { class: "flex gap-2 mt-4" };
const _hoisted_3 = { class: "flex gap-2 mt-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const items = ref([
      { type: "primary", label: "Tag 1" },
      { type: "success", label: "Tag 2" },
      { type: "info", label: "Tag 3" },
      { type: "warning", label: "Tag 4" },
      { type: "danger", label: "Tag 5" }
    ]);
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "dark",
                  round: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _createElementVNode("div", _hoisted_2, [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "light",
                  round: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _createElementVNode("div", _hoisted_3, [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(items.value, (item) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item.label,
                  type: item.type,
                  effect: "plain",
                  round: ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item.label),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["type"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
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
  { title: "可选中的标签", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex gap-2" };
const _hoisted_2 = { class: "flex gap-2 mt-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const checked = ref(false);
    const checked1 = ref(true);
    const checked2 = ref(true);
    const checked3 = ref(true);
    const checked4 = ref(true);
    const checked5 = ref(true);
    const checked6 = ref(true);
    const onChange = (status) => {
      checked.value = status;
    };
    const onChange1 = (status) => {
      checked1.value = status;
    };
    const onChange2 = (status) => {
      checked2.value = status;
    };
    const onChange3 = (status) => {
      checked3.value = status;
    };
    const onChange4 = (status) => {
      checked4.value = status;
    };
    const onChange5 = (status) => {
      checked5.value = status;
    };
    const onChange6 = (status) => {
      checked6.value = status;
    };
    return (_ctx, _cache) => {
      const _component_el_check_tag = _resolveComponent("el-check-tag");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_check_tag, { checked: "" }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "Checked",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_check_tag, {
              checked: checked.value,
              onChange
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  "Toggle me",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, { disabled: "" }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createTextVNode(
                  "Disabled",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _createVNode(_component_el_check_tag, {
              checked: checked1.value,
              type: "primary",
              onChange: onChange1
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                _createTextVNode(
                  " Tag 1 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, {
              checked: checked2.value,
              type: "success",
              onChange: onChange2
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  " Tag 2 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, {
              checked: checked3.value,
              type: "info",
              onChange: onChange3
            }, {
              default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                _createTextVNode(
                  " Tag 3 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, {
              checked: checked4.value,
              type: "warning",
              onChange: onChange4
            }, {
              default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                _createTextVNode(
                  " Tag 4 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, {
              checked: checked5.value,
              type: "danger",
              onChange: onChange5
            }, {
              default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                _createTextVNode(
                  " Tag 5 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"]),
            _createVNode(_component_el_check_tag, {
              checked: checked6.value,
              disabled: "",
              type: "success",
              onChange: onChange6
            }, {
              default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                _createTextVNode(
                  " Tag 6 ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }, 8, ["checked"])
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
