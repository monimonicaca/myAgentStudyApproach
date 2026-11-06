window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["message-box"] = [
  { title: "消息提示", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const open = () => {
      ElMessageBox.alert("This is a message", "Title", {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: "OK",
        callback: (action) => {
          ElMessage({
            type: "info",
            message: `action: ${action}`
          });
        }
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
            "Click to open the Message Box",
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
  { title: "确认消息", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        "proxy will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled"
        });
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
            "Click to open the Message Box",
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
  { title: "提交内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const open = () => {
      ElMessageBox.prompt("Please input your e-mail", "Tip", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "Invalid Email"
      }).then(({ value }) => {
        ElMessage({
          type: "success",
          message: `Your email is:${value}`
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Input canceled"
        });
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
            "Click to open Message Box",
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
  { title: "使用 VNode", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { h, ref } = Vue;
const { ElMessageBox, ElSwitch } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const open = () => {
      ElMessageBox({
        title: "Message",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    };
    const open1 = () => {
      const checked = ref(false);
      ElMessageBox({
        title: "Message",
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
  { title: "使用带有事件处理函数的 VNode 2.14.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, unref: _unref, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { h } = Vue;
const { ElButton, ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        ({ confirm, cancel, close }) => {
          return h("div", [
            h(
              "p",
              { style: "margin-bottom: 8px" },
              "Custom buttons with MessageBox action handlers"
            ),
            h(
              ElButton,
              {
                type: "primary",
                onClick: () => {
                  confirm();
                }
              },
              () => "Resolve"
            ),
            h(
              ElButton,
              {
                type: "danger",
                onClick: () => {
                  cancel();
                }
              },
              () => "Reject"
            ),
            h(
              ElButton,
              {
                onClick: () => {
                  close();
                }
              },
              () => "Close"
            )
          ]);
        },
        {
          title: "Message",
          showConfirmButton: false,
          showCancelButton: false,
          distinguishCancelAndClose: true
        }
      ).then((action) => {
        ElMessage({
          type: "success",
          message: `resolved: ${action}`
        });
      }).catch((reason) => {
        ElMessage({
          type: "error",
          message: `rejected: ${reason}`
        });
      });
    };
    return (_ctx, _cache) => {
      return _openBlock(), _createBlock(_unref(ElButton), {
        plain: "",
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Click to open Message Box",
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
  { title: "个性化", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { h } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const open = () => {
      ElMessageBox({
        title: "Message",
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode")
        ]),
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3e3);
          } else {
            done();
          }
        }
      }).then((action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`
        });
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
            "Click to open Message Box",
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
  { title: "使用 HTML 片段", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const open = () => {
      ElMessageBox.alert(
        "<strong>proxy is <i>HTML</i> string</strong>",
        "HTML String",
        {
          dangerouslyUseHTMLString: true
        }
      );
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createBlock(_component_el_button, {
        plain: "",
        onClick: open
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Click to open Message Box",
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
  { title: "区分取消操作与关闭操作", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        "You have unsaved changes, save and proceed?",
        "Confirm",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "Save",
          cancelButtonText: "Discard Changes"
        }
      ).then(() => {
        ElMessage({
          type: "info",
          message: "Changes saved. Proceeding to a new route."
        });
      }).catch((action) => {
        ElMessage({
          type: "info",
          message: action === "cancel" ? "Changes discarded. Proceeding to a new route." : "Stay in the current route"
        });
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
            "Click to open Message Box",
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
  { title: "内容居中", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        "proxy will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          center: true
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled"
        });
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
            "Click to open Message Box",
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
  { title: "自定义图标", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { markRaw } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
const { Delete } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        "It will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          icon: markRaw(Delete)
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled"
        });
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
            "Click to open Message Box",
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
  { title: "可拖放", css: "\n.custom-dragging-message-box.is-dragging {\n\n  border: 2px dashed var(--el-color-primary);\n\n  opacity: 0.65;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const open = () => {
      ElMessageBox.confirm(
        "proxy will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          draggable: true
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled"
        });
      });
    };
    const open2 = () => {
      ElMessageBox.confirm(
        "proxy will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          draggable: true,
          overflow: true
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Delete completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Delete canceled"
        });
      });
    };
    const open3 = () => {
      ElMessageBox.confirm(
        "This message box has custom dragging styles. Try dragging it to see the effects!",
        "Custom Dragging Style",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "info",
          draggable: true,
          customClass: "custom-dragging-message-box"
        }
      ).then(() => {
        ElMessage({
          type: "success",
          message: "Action completed"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "Action canceled"
        });
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
              " Open a draggable Message Box ",
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
              " Open a overflow draggable Message Box ",
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
              " Open a custom dragging style Message Box ",
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
