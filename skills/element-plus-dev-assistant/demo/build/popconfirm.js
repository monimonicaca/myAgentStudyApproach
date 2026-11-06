window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["popconfirm"] = [
  { title: "展示位置", css: "\n.popconfirm-base-box {\n\n  width: 600px;\n}\n.popconfirm-base-box .row {\n\n  display: flex;\n\n  align-items: center;\n\n  justify-content: space-between;\n}\n.popconfirm-base-box .center {\n\n  justify-content: center;\n}\n.popconfirm-base-box .box-item {\n\n  width: 110px;\n\n  margin-top: 10px;\n}\n\n\n", comp: { template: "\n\n  <div class=\"popconfirm-base-box\">\n\n    <div class=\"row center\">\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Top Left prompts info\"\n\n        placement=\"top-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top-start</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Top Center prompts info\"\n\n        placement=\"top\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Top Right prompts info\"\n\n        placement=\"top-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>top-end</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Left Top prompts info\"\n\n        placement=\"left-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>left-start</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Right Top prompts info\"\n\n        placement=\"right-start\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right-start</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Left Center prompts info\"\n\n        placement=\"left\"\n\n      >\n\n        <template #reference>\n\n          <el-button class=\"mt-3 mb-3\">left</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Right Center prompts info\"\n\n        placement=\"right\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n    </div>\n\n    <div class=\"row\">\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Left Bottom prompts info\"\n\n        placement=\"left-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>left-end</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Right Bottom prompts info\"\n\n        placement=\"right-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>right-end</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n    </div>\n\n    <div class=\"row center\">\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Bottom Left prompts info\"\n\n        placement=\"bottom-start\"\n\n      >\n\n        <template #reference> <el-button>bottom-start</el-button></template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Bottom Center prompts info\"\n\n        placement=\"bottom\"\n\n      >\n\n        <template #reference> <el-button>bottom</el-button></template>\n\n      </el-popconfirm>\n\n      <el-popconfirm\n\n        class=\"box-item\"\n\n        title=\"Bottom Right prompts info\"\n\n        placement=\"bottom-end\"\n\n      >\n\n        <template #reference>\n\n          <el-button>bottom-end</el-button>\n\n        </template>\n\n      </el-popconfirm>\n\n    </div>\n\n  </div>\n\n" } },
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-popconfirm title=\"Are you sure to delete this?\">\n\n    <template #reference>\n\n      <el-button>Delete</el-button>\n\n    </template>\n\n  </el-popconfirm>\n\n" } },
  { title: "自定义弹出框的内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { InfoFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const clicked = ref(false);
    function onCancel() {
      clicked.value = true;
    }
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popconfirm = _resolveComponent("el-popconfirm");
      return _openBlock(), _createBlock(_component_el_popconfirm, {
        width: "220",
        icon: _unref(InfoFilled),
        "icon-color": "#626AEF",
        title: "Are you sure to delete this?",
        onCancel
      }, {
        reference: _withCtx(() => [
          _createVNode(_component_el_button, null, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Delete",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ]),
        actions: _withCtx(({ confirm, cancel }) => [
          _createVNode(_component_el_button, {
            size: "small",
            onClick: cancel
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "No!",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]),
          _createVNode(_component_el_button, {
            type: "danger",
            size: "small",
            disabled: !clicked.value,
            onClick: confirm
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Yes? ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "onClick"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "多种让 Popconfirm 出现的方法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { InfoFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const confirmEvent = () => {
      console.log("confirm!");
    };
    const cancelEvent = () => {
      console.log("cancel!");
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_popconfirm = _resolveComponent("el-popconfirm");
      return _openBlock(), _createBlock(_component_el_popconfirm, {
        "confirm-button-text": "Yes",
        "cancel-button-text": "No",
        icon: _unref(InfoFilled),
        "icon-color": "#626AEF",
        title: "Are you sure to delete this?",
        onConfirm: confirmEvent,
        onCancel: cancelEvent
      }, {
        reference: _withCtx(() => [
          _createVNode(_component_el_button, null, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Delete",
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
      }, 8, ["icon"]);
    };
  }
});
return stdin_default;
 })() },
];
