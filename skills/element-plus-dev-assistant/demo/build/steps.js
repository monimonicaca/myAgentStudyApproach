window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["steps"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const active = ref(0);
    const next = () => {
      if (active.value++ > 2) active.value = 0;
    };
    return (_ctx, _cache) => {
      const _component_el_step = _resolveComponent("el-step");
      const _component_el_steps = _resolveComponent("el-steps");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_steps, {
            style: { "max-width": "600px" },
            active: active.value,
            "finish-status": "success"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_step, { title: "Step 1" }),
              _createVNode(_component_el_step, { title: "Step 2" }),
              _createVNode(_component_el_step, { title: "Step 3" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["active"]),
          _createVNode(_component_el_button, {
            style: { "margin-top": "12px" },
            onClick: next
          }, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                "Next step",
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
  { title: "含状态的步骤条", css: "", comp: { template: "\n\n  <el-steps\n\n    style=\"max-width: 600px\"\n\n    :space=\"200\"\n\n    :active=\"1\"\n\n    finish-status=\"success\"\n\n  >\n\n    <el-step title=\"Done\" />\n\n    <el-step title=\"Processing\" />\n\n    <el-step title=\"Step 3\" />\n\n  </el-steps>\n\n" } },
  { title: "居中的步骤条", css: "", comp: { template: "\n\n  <el-steps style=\"max-width: 600px\" :active=\"2\" align-center>\n\n    <el-step title=\"Step 1\" description=\"Some description\" />\n\n    <el-step title=\"Step 2\" description=\"Some description\" />\n\n    <el-step title=\"Step 3\" description=\"Some description\" />\n\n  </el-steps>\n\n" } },
  { title: "带描述的步骤栏", css: "", comp: { template: "\n\n  <el-steps style=\"max-width: 600px\" :active=\"1\">\n\n    <el-step title=\"Step 1\" description=\"Some description\" />\n\n    <el-step title=\"Step 2\" description=\"Some description\" />\n\n    <el-step title=\"Step 3\" description=\"Some description\" />\n\n  </el-steps>\n\n" } },
  { title: "带图标的步骤条", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { Edit, Picture, Upload } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_step = _resolveComponent("el-step");
      const _component_el_steps = _resolveComponent("el-steps");
      return _openBlock(), _createBlock(_component_el_steps, {
        style: { "max-width": "600px" },
        active: 1
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_step, {
            title: "Step 1",
            icon: _unref(Edit)
          }, null, 8, ["icon"]),
          _createVNode(_component_el_step, {
            title: "Step 2",
            icon: _unref(Upload)
          }, null, 8, ["icon"]),
          _createVNode(_component_el_step, {
            title: "Step 3",
            icon: _unref(Picture)
          }, null, 8, ["icon"])
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "垂直的步骤条", css: "", comp: { template: "\n\n  <div style=\"height: 300px; max-width: 600px\">\n\n    <el-steps direction=\"vertical\" :active=\"1\">\n\n      <el-step title=\"Step 1\" />\n\n      <el-step title=\"Step 2\" />\n\n      <el-step title=\"Step 3\" />\n\n    </el-steps>\n\n  </div>\n\n" } },
  { title: "简洁风格的步骤条", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { Edit, Picture, UploadFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_step = _resolveComponent("el-step");
      const _component_el_steps = _resolveComponent("el-steps");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_steps, {
            class: "mb-4",
            style: { "max-width": "600px" },
            space: 200,
            active: 1,
            simple: ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_step, {
                title: "Step 1",
                icon: _unref(Edit)
              }, null, 8, ["icon"]),
              _createVNode(_component_el_step, {
                title: "Step 2",
                icon: _unref(UploadFilled)
              }, null, 8, ["icon"]),
              _createVNode(_component_el_step, {
                title: "Step 3",
                icon: _unref(Picture)
              }, null, 8, ["icon"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_steps, {
            style: { "max-width": "600px" },
            active: 1,
            "finish-status": "success",
            simple: ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_step, { title: "Step 1" }),
              _createVNode(_component_el_step, { title: "Step 2" }),
              _createVNode(_component_el_step, { title: "Step 3" })
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
];
