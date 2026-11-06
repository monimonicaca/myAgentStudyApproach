window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["notification"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { h } = Vue;
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const open1 = () => {
      ElNotification({
        title: "Title",
        message: h("i", { style: "color: teal" }, "This is a reminder")
      });
    };
    const open2 = () => {
      ElNotification({
        title: "Prompt",
        message: "This is a message that does not automatically close",
        duration: 0
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open1
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              " Closes automatically ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open2
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " Won't close automatically ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "不同类型的通知", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const open1 = () => {
      ElNotification({
        title: "Success",
        message: "This is a success message",
        type: "success"
      });
    };
    const open2 = () => {
      ElNotification({
        title: "Warning",
        message: "This is a warning message",
        type: "warning"
      });
    };
    const open3 = () => {
      ElNotification.info({
        title: "Info",
        message: "This is an info message"
      });
    };
    const open4 = () => {
      ElNotification.error({
        title: "Error",
        message: "This is an error message"
      });
    };
    const open5 = () => {
      ElNotification({
        title: "Primary",
        message: "This is a primary message",
        type: "primary"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open5
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Primary",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open1
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              "Success",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open2
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              "Warning",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open3
        }, {
          default: _withCtx(() => [..._cache[3] || (_cache[3] = [
            _createTextVNode(
              "Info",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open4
        }, {
          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
            _createTextVNode(
              "Error",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义消息弹出的位置", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const open1 = () => {
      ElNotification({
        title: "Custom Position",
        message: "I'm at the top right corner"
      });
    };
    const open2 = () => {
      ElNotification({
        title: "Custom Position",
        message: "I'm at the bottom right corner",
        position: "bottom-right"
      });
    };
    const open3 = () => {
      ElNotification({
        title: "Custom Position",
        message: "I'm at the bottom left corner",
        position: "bottom-left"
      });
    };
    const open4 = () => {
      ElNotification({
        title: "Custom Position",
        message: "I'm at the top left corner",
        position: "top-left"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open1
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              " Top Right ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open2
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " Bottom Right ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open3
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              " Bottom Left ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open4
        }, {
          default: _withCtx(() => [..._cache[3] || (_cache[3] = [
            _createTextVNode(
              " Top Left ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "有位置偏移的通知栏", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const open = () => {
      ElNotification.success({
        title: "Success",
        message: "This is a success message",
        offset: 100
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: "",
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Notification with offset ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "使用 HTML 片段作为正文内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const open = () => {
      ElNotification({
        title: "HTML String",
        dangerouslyUseHTMLString: true,
        message: "<strong>This is <i>HTML</i> string</strong>"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: "",
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Use HTML String ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "函数形式的 message 2.9.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { h, ref } = Vue;
const { ElNotification, ElSwitch } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const open = () => {
      ElNotification({
        title: "Use Vnode",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    };
    const open1 = () => {
      const checked = ref(false);
      ElNotification({
        title: "Use Vnode",
        // Should pass a function if VNode contains dynamic props
        message: () => h(ElSwitch, {
          modelValue: checked.value,
          "onUpdate:modelValue": (val) => {
            checked.value = val;
          }
        })
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              "Common VNode",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: "",
          onClick: open1
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              "Dynamic props",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "使用进度条 2.14.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    function open(type) {
      ElNotification({
        title: `${type || "Default"} progress`,
        message: "Hover to pause the timer and progress bar",
        type,
        duration: 6e3,
        progress: true
      });
    }
    function openWithoutPause() {
      ElNotification({
        title: "No pause on hover",
        message: "Timer and progress bar keep running even when hovering",
        duration: 6e3,
        progress: true,
        pauseOnHover: false
      });
    }
    function openCustomColor() {
      ElNotification({
        title: "Custom color",
        message: "Custom progress bar color overrides the default",
        duration: 6e3,
        progress: {
          color: [
            { color: "#f56c6c", percentage: 20 },
            { color: "#e6a23c", percentage: 40 },
            { color: "#5cb87a", percentage: 60 },
            { color: "#1989fa", percentage: 80 },
            { color: "#6f7ad3", percentage: 100 }
          ]
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => open(""))
          }, {
            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createTextVNode(
                " Default ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            type: "success",
            onClick: _cache[1] || (_cache[1] = ($event) => open("success"))
          }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                " Success ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            type: "warning",
            onClick: _cache[2] || (_cache[2] = ($event) => open("warning"))
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                " Warning ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            type: "danger",
            onClick: _cache[3] || (_cache[3] = ($event) => open("error"))
          }, {
            default: _withCtx(() => [..._cache[8] || (_cache[8] = [
              _createTextVNode(
                " Error ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            type: "info",
            onClick: _cache[4] || (_cache[4] = ($event) => open("info"))
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                " Info ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            onClick: openCustomColor
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " Custom color ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            plain: "",
            onClick: openWithoutPause
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " No pause on hover ",
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
  { title: "隐藏关闭按钮", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElNotification } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const open = () => {
      ElNotification.success({
        title: "Info",
        message: "This is a message without close button",
        showClose: false
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: "",
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Hide close button ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
];
