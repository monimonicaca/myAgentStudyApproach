window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["message"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { h } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const open = () => {
      ElMessage("This is a message.");
    };
    const openVn = () => {
      ElMessage({
        message: h("p", { style: "line-height: 1; font-size: 14px" }, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: open
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              " Show message ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: openVn
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              "VNode",
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
  { title: "不同状态", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const open1 = () => {
      ElMessage("This is a info message.");
    };
    const open2 = () => {
      ElMessage({
        message: "Congrats, this is a success message.",
        type: "success"
      });
    };
    const open3 = () => {
      ElMessage({
        message: "Warning, this is a warning message.",
        type: "warning"
      });
    };
    const open4 = () => {
      ElMessage.error("Oops, this is a error message.");
    };
    const open5 = () => {
      ElMessage.primary("This is a primary message.");
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
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
          plain: true,
          onClick: open2
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
          plain: true,
          onClick: open3
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
          plain: true,
          onClick: open1
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
          plain: true,
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
  { title: "Plain 2.6.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const open1 = () => {
      ElMessage({
        message: "Congrats, this is a success message.",
        type: "success",
        plain: true
      });
    };
    const open2 = () => {
      ElMessage({
        message: "Warning, this is a warning message.",
        type: "warning",
        plain: true
      });
    };
    const open3 = () => {
      ElMessage({
        message: "This is a info message.",
        type: "info",
        plain: true
      });
    };
    const open4 = () => {
      ElMessage({
        message: "Oops, this is a error message.",
        type: "error",
        plain: true
      });
    };
    const open5 = () => {
      ElMessage({
        message: "This is a primary message.",
        type: "primary",
        plain: true
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
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
          plain: true,
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
          plain: true,
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
          plain: true,
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
          plain: true,
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
  { title: "可关闭的消息提示", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const open1 = () => {
      ElMessage({
        showClose: true,
        message: "This is a info message."
      });
    };
    const open2 = () => {
      ElMessage({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success"
      });
    };
    const open3 = () => {
      ElMessage({
        showClose: true,
        message: "Warning, this is a warning message.",
        type: "warning"
      });
    };
    const open4 = () => {
      ElMessage({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error"
      });
    };
    const open5 = () => {
      ElMessage({
        showClose: true,
        message: "Oops, this is a message that does not automatically close.",
        duration: 0
      });
    };
    const open6 = () => {
      ElMessage({
        showClose: true,
        message: "This is a primary message.",
        type: "primary"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: open6
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
          plain: true,
          onClick: open2
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
          plain: true,
          onClick: open3
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
          plain: true,
          onClick: open1
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
          plain: true,
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
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: open5
        }, {
          default: _withCtx(() => [..._cache[5] || (_cache[5] = [
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
  { title: "使用 HTML 片段作为正文内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const openHTML = () => {
      ElMessage({
        dangerouslyUseHTMLString: true,
        message: "<strong>This is <i>HTML</i> string</strong>"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: true,
        onClick: openHTML
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Use HTML string",
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
  { title: "分组消息合并", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const open = () => {
      ElMessage({
        message: "This is a message.",
        grouping: true,
        type: "success"
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: true,
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Show message",
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
  { title: "Placement 2.11.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElMessage } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    let topCount = 0;
    let bottomCount = 0;
    let topLeftCount = 0;
    let topRightCount = 0;
    let bottomLeftCount = 0;
    let bottomRightCount = 0;
    const openMsg = (placement = "top") => {
      let count = 0;
      let type = "success";
      switch (placement) {
        case "top":
          count = ++topCount;
          type = "success";
          break;
        case "bottom":
          count = ++bottomCount;
          type = "warning";
          break;
        case "top-left":
          count = ++topLeftCount;
          type = "info";
          break;
        case "top-right":
          count = ++topRightCount;
          type = "primary";
          break;
        case "bottom-left":
          count = ++bottomLeftCount;
          type = "warning";
          break;
        case "bottom-right":
          count = ++bottomRightCount;
          type = "error";
          break;
      }
      ElMessage({
        message: `This is a message from the ${placement} ${count}`,
        type,
        placement
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: _cache[0] || (_cache[0] = ($event) => openMsg())
        }, {
          default: _withCtx(() => [..._cache[6] || (_cache[6] = [
            _createTextVNode(
              " Top ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: _cache[1] || (_cache[1] = ($event) => openMsg("top-left"))
        }, {
          default: _withCtx(() => [..._cache[7] || (_cache[7] = [
            _createTextVNode(
              " Top Left ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: _cache[2] || (_cache[2] = ($event) => openMsg("top-right"))
        }, {
          default: _withCtx(() => [..._cache[8] || (_cache[8] = [
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
          plain: true,
          onClick: _cache[3] || (_cache[3] = ($event) => openMsg("bottom"))
        }, {
          default: _withCtx(() => [..._cache[9] || (_cache[9] = [
            _createTextVNode(
              " Bottom ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          class: "!ml-0",
          plain: true,
          onClick: _cache[4] || (_cache[4] = ($event) => openMsg("bottom-left"))
        }, {
          default: _withCtx(() => [..._cache[10] || (_cache[10] = [
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
          plain: true,
          onClick: _cache[5] || (_cache[5] = ($event) => openMsg("bottom-right"))
        }, {
          default: _withCtx(() => [..._cache[11] || (_cache[11] = [
            _createTextVNode(
              " Bottom Right ",
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
];
