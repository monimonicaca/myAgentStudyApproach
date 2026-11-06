window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tooltip"] = [
  { title: "基础用法", css: "\n.tooltip-base-box {\n\n  width: 600px;\n}\n.tooltip-base-box .row {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-between;\n}\n.tooltip-base-box .center {\n\n  justify-content: center;\n}\n.tooltip-base-box .box-item {\n\n  width: 110px;\n\n  margin-top: 10px;\n}\n\n\n", comp: { template: "\n\n  <div class=\"tooltip-base-box\">\n\n    <div class=\"row center\">\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Top Left prompts info\"\n\n        placement=\"top-start\"\n\n      >\n\n        <el-button>top-start</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Top Center prompts info\"\n\n        placement=\"top\"\n\n      >\n\n        <el-button>top</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Top Right prompts info\"\n\n        placement=\"top-end\"\n\n      >\n\n        <el-button>top-end</el-button>\n\n      </el-tooltip>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"left-start\">\n\n        <template #content>\n\n          Left Top\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button>left-start</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"right-start\">\n\n        <template #content>\n\n          Right Top\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button>right-start</el-button>\n\n      </el-tooltip>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"left\">\n\n        <template #content>\n\n          Left Center\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button class=\"mt-3 mb-3\">left</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"right\">\n\n        <template #content>\n\n          Right Center\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button>right</el-button>\n\n      </el-tooltip>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"left-end\">\n\n        <template #content>\n\n          Left Bottom\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button>left-end</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip class=\"box-item\" effect=\"dark\" placement=\"right-end\">\n\n        <template #content>\n\n          Right Bottom\n\n          <br />\n\n          prompts info\n\n        </template>\n\n        <el-button>right-end</el-button>\n\n      </el-tooltip>\n\n    </div>\n\n    <div class=\"row center\">\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Bottom Left prompts info\"\n\n        placement=\"bottom-start\"\n\n      >\n\n        <el-button>bottom-start</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Bottom Center prompts info\"\n\n        placement=\"bottom\"\n\n      >\n\n        <el-button>bottom</el-button>\n\n      </el-tooltip>\n\n      <el-tooltip\n\n        class=\"box-item\"\n\n        effect=\"dark\"\n\n        content=\"Bottom Right prompts info\"\n\n        placement=\"bottom-end\"\n\n      >\n\n        <el-button>bottom-end</el-button>\n\n      </el-tooltip>\n\n    </div>\n\n  </div>\n\n" } },
  { title: "主题", css: "\n.el-popper.is-customized {\n\n  /* Set padding to ensure the height is 32px */\n\n  padding: 6px 12px;\n\n  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));\n}\n.el-popper.is-customized .el-popper__arrow::before {\n\n  background: linear-gradient(45deg, #b2e68d, #bce689);\n\n  right: 0;\n}\n\n\n", comp: { template: "\n\n  <el-tooltip content=\"Top center\" placement=\"top\">\n\n    <el-button>Dark</el-button>\n\n  </el-tooltip>\n\n  <el-tooltip content=\"Bottom center\" placement=\"bottom\" effect=\"light\">\n\n    <el-button>Light</el-button>\n\n  </el-tooltip>\n\n  <el-tooltip content=\"Bottom center\" effect=\"customized\">\n\n    <el-button>Customized theme</el-button>\n\n  </el-tooltip>\n\n" } },
  { title: "更多内容的文字提示", css: "", comp: { template: "\n\n  <el-tooltip placement=\"top\">\n\n    <template #content> multiple lines<br />second line </template>\n\n    <el-button>Top center</el-button>\n\n  </el-tooltip>\n\n" } },
  { title: "高级扩展", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const disabled = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createBlock(_component_el_tooltip, {
        disabled: disabled.value,
        content: "click to close tooltip function",
        placement: "bottom",
        effect: "light"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => disabled.value = !disabled.value)
          }, {
            default: _withCtx(() => [
              _createTextVNode(
                " click to " + _toDisplayString(disabled.value ? "active" : "close") + " tooltip function ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "显示 HTML 内容", css: "", comp: { template: "\n\n  <el-tooltip\n\n    content=\"<span>The content can be <strong>HTML</strong></span>\"\n\n    raw-content\n\n  >\n\n    <el-button>hover me</el-button>\n\n  </el-tooltip>\n\n" } },
  { title: "虚拟触发", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { onMounted, onUnmounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const visible = ref(false);
    const position = ref({
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    });
    const triggerRef = ref({
      getBoundingClientRect: () => position.value
    });
    const mousemoveHandler = ({ clientX, clientY }) => {
      position.value = DOMRect.fromRect({
        x: clientX,
        y: clientY
      });
    };
    onMounted(() => {
      document.addEventListener("mousemove", mousemoveHandler);
    });
    onUnmounted(() => {
      document.removeEventListener("mousemove", mousemoveHandler);
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_tooltip, {
            visible: visible.value,
            content: "Bottom center",
            placement: "bottom",
            effect: "light",
            trigger: "click",
            "virtual-triggering": "",
            "virtual-ref": triggerRef.value
          }, null, 8, ["visible", "virtual-ref"]),
          _createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => visible.value = !visible.value)
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "test",
                -1
                /* CACHED */
              )
            ])]),
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
  { title: "单例模式", css: "\n.singleton-tooltip {\n\n  transition: transform 0.3s var(--el-transition-function-fast-bezier);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const buttonRef = ref();
    const tooltipRef = ref();
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            (_openBlock(), _createElementBlock(
              _Fragment,
              null,
              _renderList(3, (i) => {
                return _createVNode(_component_el_button, {
                  key: i,
                  onMouseover: _cache[0] || (_cache[0] = (e) => buttonRef.value = e.currentTarget),
                  onClick: _cache[1] || (_cache[1] = ($event) => visible.value = !visible.value)
                }, {
                  default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                    _createTextVNode(
                      "Click to open tooltip",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _createVNode(_component_el_tooltip, {
            ref_key: "tooltipRef",
            ref: tooltipRef,
            visible: visible.value,
            "popper-options": {
              modifiers: [
                {
                  name: "computeStyles",
                  options: {
                    adaptive: false,
                    enabled: false
                  }
                }
              ]
            },
            "virtual-ref": buttonRef.value,
            "virtual-triggering": "",
            "popper-class": "singleton-tooltip"
          }, {
            content: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createElementVNode(
                "span",
                null,
                " Some content ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["visible", "virtual-ref"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "受控模式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createBlock(_component_el_tooltip, { visible: visible.value }, {
        content: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "span",
            null,
            "Content",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_el_button, {
            onMouseenter: _cache[0] || (_cache[0] = ($event) => visible.value = true),
            onMouseleave: _cache[1] || (_cache[1] = ($event) => visible.value = false)
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                " Hover me ",
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
      }, 8, ["visible"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义动画", css: "\n.slide-fade-enter-active {\n\n  transition: all 0.3s ease-out;\n}\n.slide-fade-leave-active {\n\n  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter-from,\n\n.slide-fade-leave-to {\n\n  transform: translateX(120px);\n\n  opacity: 0;\n}\n\n\n", comp: { template: "\n\n  <el-tooltip content=\"I am an el-tooltip\" transition=\"slide-fade\">\n\n    <el-button>trigger me</el-button>\n\n  </el-tooltip>\n\n" } },
  { title: "使用 `append-to`", css: "\n.target[data-v-kjspxh] {\n\n  position: relative;\n\n  margin-top: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { onMounted, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const targetElement = ref("");
    onMounted(() => {
      targetElement.value = ".target";
    });
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_tooltip = _resolveComponent("el-tooltip");
      return _openBlock(), _createBlock(_component_el_tooltip, {
        "append-to": targetElement.value,
        trigger: "click",
        content: "Append to .target",
        placement: "top"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_button, { class: "target" }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Click to open tooltip",
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
      }, 8, ["append-to"]);
    };
  }
});
return stdin_default;
 })() },
];
