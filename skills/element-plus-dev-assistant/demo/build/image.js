window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["image"] = [
  { title: "基础用法", css: "\n.demo-image .block[data-v-huxu6s] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  display: inline-block;\n\n  width: 20%;\n\n  min-width: 100px;\n\n  box-sizing: border-box;\n\n  vertical-align: top;\n}\n.demo-image .block[data-v-huxu6s]:last-child {\n\n  border-right: none;\n}\n.demo-image .demonstration[data-v-huxu6s] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "demo-image" };
const _hoisted_2 = { class: "demonstration" };
const url = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const fits = [
      "fill",
      "contain",
      "cover",
      "none",
      "scale-down"
    ];
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        (_openBlock(), _createElementBlock(
          _Fragment,
          null,
          _renderList(fits, (fit) => {
            return _createElementVNode("div", {
              key: fit,
              class: "block"
            }, [
              _createElementVNode(
                "span",
                _hoisted_2,
                _toDisplayString(fit),
                1
                /* TEXT */
              ),
              _createVNode(_component_el_image, {
                style: { "width": "100px", "height": "100px" },
                src: url,
                fit
              }, null, 8, ["fit"])
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "占位内容", css: "\n.demo-image__placeholder .block[data-v-hvhms5] {\n\n  padding: 30px 0;\n\n  text-align: center;\n\n  border-right: solid 1px var(--el-border-color);\n\n  display: inline-block;\n\n  width: 49%;\n\n  box-sizing: border-box;\n\n  vertical-align: top;\n}\n.demo-image__placeholder .demonstration[data-v-hvhms5] {\n\n  display: block;\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n\n  margin-bottom: 20px;\n}\n.demo-image__placeholder .el-image[data-v-hvhms5] {\n\n  padding: 0 5px;\n\n  max-width: 300px;\n\n  max-height: 200px;\n}\n.demo-image__placeholder.image-slot[data-v-hvhms5] {\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  width: 100%;\n\n  height: 100%;\n\n  background: var(--el-fill-color-light);\n\n  color: var(--el-text-color-secondary);\n\n  font-size: 14px;\n}\n.demo-image__placeholder .dot[data-v-hvhms5] {\n\n  animation: dot 2s infinite steps(3, start);\n\n  overflow: hidden;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-image__placeholder" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "block" };
const src = "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _cache[0] || (_cache[0] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Default",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_image, { src })
        ]),
        _createElementVNode("div", _hoisted_3, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            { class: "demonstration" },
            "Custom",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_image, { src }, {
            placeholder: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createElementVNode(
                "div",
                { class: "image-slot" },
                [
                  _createTextVNode("Loading"),
                  _createElementVNode("span", { class: "dot" }, "...")
                ],
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "加载失败", css: "\n.demo-image__error .el-image[data-v-hw1fdi] {\n\n  max-width: 300px;\n\n  max-height: 200px;\n\n  width: 100%;\n}\n.demo-image__error .image-slot[data-v-hw1fdi] {\n\n  display: flex;\n\n  justify-content: center;\n\n  align-items: center;\n\n  flex-direction: column;\n\n  font-size: 30px;\n\n  height: 200px;\n\n  background: #fff;\n}\n.demo-image__error .image-slot .el-icon[data-v-hw1fdi] {\n\n  font-size: 30px;\n}\n.image-viewer-slot[data-v-hw1fdi] {\n\n  background: var(--el-fill-color-light);\n}\n.viewer-error[data-v-hw1fdi] {\n\n  color: #000;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, withCtx: _withCtx, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = {
  class: "demo-image__error",
  flex: "",
  "gap-2": ""
};
const _hoisted_2 = { class: "image-viewer-slot image-slot" };
const _hoisted_3 = { class: "image-slot viewer-error" };
const _hoisted_4 = { class: "image-slot viewer-error" };
const { ref } = Vue;
const { Picture: IconPicture } = ElementPlusIconsVue;
const url = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const showPreview = ref(false);
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://errorSrc"
    ];
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_image_viewer = _resolveComponent("el-image-viewer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_image),
        _createVNode(_component_el_image, null, {
          error: _withCtx(() => [
            _createElementVNode("div", _hoisted_2, [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(IconPicture))
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_image, {
          src: url,
          "preview-src-list": srcList,
          "show-progress": ""
        }, {
          "viewer-error": _withCtx(({ activeIndex, src }) => [
            _createElementVNode("div", _hoisted_3, [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(IconPicture))
                ]),
                _: 1
                /* STABLE */
              }),
              _createElementVNode(
                "span",
                null,
                " this is viewer-error slot. current index: " + _toDisplayString(activeIndex) + ". src: " + _toDisplayString(src),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_el_button, {
          onClick: _cache[0] || (_cache[0] = ($event) => showPreview.value = true)
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              " preview controlled ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        showPreview.value ? (_openBlock(), _createBlock(_component_el_image_viewer, {
          key: 0,
          "show-progress": "",
          "url-list": srcList,
          onClose: _cache[1] || (_cache[1] = ($event) => showPreview.value = false)
        }, {
          "viewer-error": _withCtx(({ activeIndex, src }) => [
            _createElementVNode("div", _hoisted_4, [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(IconPicture))
                ]),
                _: 1
                /* STABLE */
              }),
              _createElementVNode(
                "span",
                null,
                " this is viewer-error slot. current index: " + _toDisplayString(activeIndex) + ". src: " + _toDisplayString(src),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 1
          /* STABLE */
        })) : _createCommentVNode("v-if", true)
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "懒加载", css: "\n.demo-image__lazy[data-v-hwl7yv] {\n\n  height: 400px;\n\n  overflow-y: auto;\n}\n.demo-image__lazy .el-image[data-v-hwl7yv] {\n\n  display: block;\n\n  min-height: 200px;\n\n  margin-bottom: 10px;\n}\n.demo-image__lazy .el-image[data-v-hwl7yv]:last-child {\n\n  margin-bottom: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "demo-image__lazy" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const urls = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ];
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        (_openBlock(), _createElementBlock(
          _Fragment,
          null,
          _renderList(urls, (url) => {
            return _createVNode(_component_el_image, {
              key: url,
              src: url,
              lazy: ""
            }, null, 8, ["src"]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "图片预览", css: "\n.demo-image__error .image-slot[data-v-hx50k8] {\n\n  font-size: 30px;\n}\n.demo-image__error .image-slot .el-icon[data-v-hx50k8] {\n\n  font-size: 30px;\n}\n.demo-image__error .el-image[data-v-hx50k8] {\n\n  width: 100%;\n\n  height: 200px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-image__preview" };
const url = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ];
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_image, {
          style: { "width": "100px", "height": "100px" },
          src: url,
          "zoom-rate": 1.2,
          "max-scale": 7,
          "min-scale": 0.2,
          "preview-src-list": srcList,
          "show-progress": "",
          "initial-index": 4,
          fit: "cover"
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "手动打开预览 2.9.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex gap-12" };
const _hoisted_2 = { class: "grid gap-3" };
const { ref } = Vue;
const url = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ];
    const imageRef = ref();
    const showPreview = ref(false);
    const handleClick = () => {
      imageRef.value.showPreview();
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_image = _resolveComponent("el-image");
      const _component_el_image_viewer = _resolveComponent("el-image-viewer");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _createVNode(_component_el_button, { onClick: handleClick }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " openPreview with showPreview method ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(
            _component_el_image,
            {
              ref_key: "imageRef",
              ref: imageRef,
              style: { "width": "100px", "height": "100px" },
              src: url,
              "show-progress": "",
              "preview-src-list": srcList,
              fit: "cover"
            },
            null,
            512
            /* NEED_PATCH */
          )
        ]),
        _createElementVNode("div", null, [
          _createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => showPreview.value = true)
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                " preview controlled ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          showPreview.value ? (_openBlock(), _createBlock(_component_el_image_viewer, {
            key: 0,
            "url-list": srcList,
            "show-progress": "",
            "initial-index": 4,
            onClose: _cache[1] || (_cache[1] = ($event) => showPreview.value = false)
          })) : _createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义工具栏2.9.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, withCtx: _withCtx, resolveComponent: _resolveComponent, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-image__custom-toolbar" };
const { ElIcon } = ElementPlus;
const { Back, DArrowRight, Download, Refresh, RefreshLeft, RefreshRight, Right, ZoomIn, ZoomOut } = ElementPlusIconsVue;
const url = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ];
    const download = (index) => {
      const url2 = srcList[index];
      const suffix = url2.slice(url2.lastIndexOf("."));
      const filename = Date.now() + suffix;
      fetch(url2).then((response) => response.blob()).then((blob) => {
        const blobUrl = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(blobUrl);
        link.remove();
      });
    };
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_image, {
          style: { "width": "100px", "height": "100px" },
          src: url,
          "preview-src-list": srcList,
          fit: "cover",
          "show-progress": ""
        }, {
          toolbar: _withCtx(({ actions, prev, next, reset, activeIndex, setActiveItem }) => [
            _createVNode(_unref(ElIcon), { onClick: prev }, {
              default: _withCtx(() => [
                _createVNode(_unref(Back))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), { onClick: next }, {
              default: _withCtx(() => [
                _createVNode(_unref(Right))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => setActiveItem(srcList.length - 1)
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(DArrowRight))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => actions("zoomOut")
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(ZoomOut))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => actions("zoomIn", { enableTransition: false, zoomRate: 2 })
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(ZoomIn))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => actions("clockwise", { rotateDeg: 180, enableTransition: false })
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(RefreshRight))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => actions("anticlockwise")
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(RefreshLeft))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), { onClick: reset }, {
              default: _withCtx(() => [
                _createVNode(_unref(Refresh))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            _createVNode(_unref(ElIcon), {
              onClick: ($event) => download(activeIndex)
            }, {
              default: _withCtx(() => [
                _createVNode(_unref(Download))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义进度条 2.9.4", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-image__custom-toolbar" };
const url = "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const srcList = [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
    ];
    return (_ctx, _cache) => {
      const _component_el_image = _resolveComponent("el-image");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_image, {
          style: { "width": "100px", "height": "100px" },
          src: url,
          "preview-src-list": srcList,
          fit: "cover"
        }, {
          progress: _withCtx(({ activeIndex, total }) => [
            _createElementVNode(
              "span",
              null,
              _toDisplayString(activeIndex + 1 + "-" + total),
              1
              /* TEXT */
            )
          ]),
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
