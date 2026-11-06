window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["upload"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { ElMessage, ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const fileList = ref([
      {
        name: "element-plus-logo.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      },
      {
        name: "element-plus-logo2.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      }
    ]);
    const handleRemove = (file, uploadFiles) => {
      console.log(file, uploadFiles);
    };
    const handlePreview = (uploadFile) => {
      console.log(uploadFile);
    };
    const handleExceed = (files, uploadFiles) => {
      ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length} totally`
      );
    };
    const beforeRemove = (uploadFile, uploadFiles) => {
      return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
      ).then(
        () => true,
        () => false
      );
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        "file-list": fileList.value,
        "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
        class: "upload-demo",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        multiple: "",
        "on-preview": handlePreview,
        "on-remove": handleRemove,
        "before-remove": beforeRemove,
        limit: 3,
        "on-exceed": handleExceed
      }, {
        tip: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "div",
            { class: "el-upload__tip" },
            " jpg/png files with a size less than 500KB. ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_el_button, { type: "primary" }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Click to upload",
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
      }, 8, ["file-list"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "覆盖前一个文件", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
const { genFileId } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const upload = ref();
    const handleExceed = (files) => {
      upload.value.clearFiles();
      const file = files[0];
      file.uid = genFileId();
      upload.value.handleStart(file);
    };
    const submitUpload = () => {
      upload.value.submit();
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(
        _component_el_upload,
        {
          ref_key: "upload",
          ref: upload,
          class: "upload-demo",
          action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
          limit: 1,
          "on-exceed": handleExceed,
          "auto-upload": false
        },
        {
          trigger: _withCtx(() => [
            _createVNode(_component_el_button, { type: "primary" }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "select file",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          tip: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createElementVNode(
              "div",
              { class: "el-upload__tip text-red" },
              " limit 1 file, new file will cover the old file ",
              -1
              /* CACHED */
            )
          ])]),
          default: _withCtx(() => [
            _createVNode(_component_el_button, {
              class: "ml-3",
              type: "success",
              onClick: submitUpload
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  " upload to server ",
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
        },
        512
        /* NEED_PATCH */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "用户头像", css: "\n.avatar-uploader .avatar[data-v-p0yvjw] {\n\n  width: 178px;\n\n  height: 178px;\n\n  display: block;\n}\n\n\n\n.avatar-uploader .el-upload {\n\n  border: 1px dashed var(--el-border-color);\n\n  border-radius: 6px;\n\n  cursor: pointer;\n\n  position: relative;\n\n  overflow: hidden;\n\n  transition: var(--el-transition-duration-fast);\n}\n.avatar-uploader .el-upload:hover {\n\n  border-color: var(--el-color-primary);\n}\n.el-icon.avatar-uploader-icon {\n\n  font-size: 28px;\n\n  color: #8c939d;\n\n  width: 178px;\n\n  height: 178px;\n\n  text-align: center;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { openBlock: _openBlock, createElementBlock: _createElementBlock, unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = ["src"];
const { ref } = Vue;
const { ElMessage } = ElementPlus;
const { Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const imageUrl = ref("");
    const handleAvatarSuccess = (response, uploadFile) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw);
    };
    const beforeAvatarUpload = (rawFile) => {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("Avatar picture must be JPG format!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error("Avatar picture size can not exceed 2MB!");
        return false;
      }
      return true;
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        class: "avatar-uploader",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        "show-file-list": false,
        "on-success": handleAvatarSuccess,
        "before-upload": beforeAvatarUpload
      }, {
        default: _withCtx(() => [
          imageUrl.value ? (_openBlock(), _createElementBlock("img", {
            key: 0,
            src: imageUrl.value,
            class: "avatar"
          }, null, 8, _hoisted_1)) : (_openBlock(), _createBlock(_component_el_icon, {
            key: 1,
            class: "avatar-uploader-icon"
          }, {
            default: _withCtx(() => [
              _createVNode(_unref(Plus))
            ]),
            _: 1
            /* STABLE */
          }))
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "照片墙", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = ["src"];
const { ref } = Vue;
const { Plus } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const fileList = ref([
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "plant-1.png",
        url: "/images/plant-1.png"
      },
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "plant-2.png",
        url: "/images/plant-2.png"
      },
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "figure-1.png",
        url: "/images/figure-1.png"
      },
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "figure-2.png",
        url: "/images/figure-2.png"
      }
    ]);
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const handleRemove = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    const handlePictureCardPreview = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url;
      dialogVisible.value = true;
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_upload = _resolveComponent("el-upload");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_upload, {
            "file-list": fileList.value,
            "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
            action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
            "list-type": "picture-card",
            "on-preview": handlePictureCardPreview,
            "on-remove": handleRemove
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(Plus))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["file-list"]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialogVisible.value = $event)
          }, {
            default: _withCtx(() => [
              _createElementVNode("img", {
                "w-full": "",
                src: dialogImageUrl.value,
                alt: "Preview Image"
              }, null, 8, _hoisted_1)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义缩略图", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, Fragment: _Fragment } = Vue;
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "el-upload-list__item-actions" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["src"];
const { ref } = Vue;
const { Delete, Download, Plus, ZoomIn } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(false);
    const handleRemove = (file) => {
      console.log(file);
    };
    const handlePictureCardPreview = (file) => {
      dialogImageUrl.value = file.url;
      dialogVisible.value = true;
    };
    const handleDownload = (file) => {
      console.log(file);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_upload = _resolveComponent("el-upload");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_upload, {
            action: "#",
            "list-type": "picture-card",
            "auto-upload": false
          }, {
            file: _withCtx(({ file }) => [
              _createElementVNode("div", null, [
                _createElementVNode("img", {
                  class: "el-upload-list__item-thumbnail",
                  src: file.url,
                  alt: ""
                }, null, 8, _hoisted_1),
                _createElementVNode("span", _hoisted_2, [
                  _createElementVNode("span", {
                    class: "el-upload-list__item-preview",
                    onClick: ($event) => handlePictureCardPreview(file)
                  }, [
                    _createVNode(_component_el_icon, null, {
                      default: _withCtx(() => [
                        _createVNode(_unref(ZoomIn))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ], 8, _hoisted_3),
                  !disabled.value ? (_openBlock(), _createElementBlock("span", {
                    key: 0,
                    class: "el-upload-list__item-delete",
                    onClick: ($event) => handleDownload(file)
                  }, [
                    _createVNode(_component_el_icon, null, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Download))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ], 8, _hoisted_4)) : _createCommentVNode("v-if", true),
                  !disabled.value ? (_openBlock(), _createElementBlock("span", {
                    key: 1,
                    class: "el-upload-list__item-delete",
                    onClick: ($event) => handleRemove(file)
                  }, [
                    _createVNode(_component_el_icon, null, {
                      default: _withCtx(() => [
                        _createVNode(_unref(Delete))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ], 8, _hoisted_5)) : _createCommentVNode("v-if", true)
                ])
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_icon, null, {
                default: _withCtx(() => [
                  _createVNode(_unref(Plus))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
          }, {
            default: _withCtx(() => [
              _createElementVNode("img", {
                "w-full": "",
                src: dialogImageUrl.value,
                alt: "Preview Image"
              }, null, 8, _hoisted_6)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "图片列表缩略图", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const fileList = ref([
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "food2.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      }
    ]);
    const handleRemove = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    const handlePreview = (file) => {
      console.log(file);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        "file-list": fileList.value,
        "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
        class: "upload-demo",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        "on-preview": handlePreview,
        "on-remove": handleRemove,
        "list-type": "picture"
      }, {
        tip: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "div",
            { class: "el-upload__tip" },
            " jpg/png files with a size less than 500kb ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_el_button, { type: "primary" }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Click to upload",
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
      }, 8, ["file-list"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "上传文件列表控制", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const fileList = ref([
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      },
      {
        name: "food2.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      }
    ]);
    const handleChange = (uploadFile, uploadFiles) => {
      fileList.value = fileList.value.slice(-3);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        "file-list": fileList.value,
        "onUpdate:fileList": _cache[0] || (_cache[0] = ($event) => fileList.value = $event),
        class: "upload-demo",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        "on-change": handleChange
      }, {
        tip: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "div",
            { class: "el-upload__tip" },
            " jpg/png files with a size less than 500kb ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_el_button, { type: "primary" }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Click to upload",
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
      }, 8, ["file-list"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "拖拽上传", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { UploadFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        class: "upload-demo",
        drag: "",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        multiple: ""
      }, {
        tip: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "div",
            { class: "el-upload__tip" },
            " jpg/png files with a size less than 500kb ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_el_icon, { class: "el-icon--upload" }, {
            default: _withCtx(() => [
              _createVNode(_unref(UploadFilled))
            ]),
            _: 1
            /* STABLE */
          }),
          _cache[1] || (_cache[1] = _createElementVNode(
            "div",
            { class: "el-upload__text" },
            [
              _createTextVNode(" Drop file here or "),
              _createElementVNode("em", null, "click to upload")
            ],
            -1
            /* CACHED */
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
  { title: "上传目录 2.13.1", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, createVNode: _createVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { UploadFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const handleChange = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(_component_el_upload, {
        class: "upload-demo",
        drag: "",
        action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
        directory: "",
        multiple: "",
        "on-change": handleChange
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_icon, { class: "el-icon--upload" }, {
            default: _withCtx(() => [
              _createVNode(_unref(UploadFilled))
            ]),
            _: 1
            /* STABLE */
          }),
          _cache[0] || (_cache[0] = _createElementVNode(
            "div",
            { class: "el-upload__text" },
            [
              _createTextVNode(" Drop directory here or "),
              _createElementVNode("em", null, "click to upload")
            ],
            -1
            /* CACHED */
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
  { title: "手动上传", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const uploadRef = ref();
    const submitUpload = () => {
      uploadRef.value.submit();
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_upload = _resolveComponent("el-upload");
      return _openBlock(), _createBlock(
        _component_el_upload,
        {
          ref_key: "uploadRef",
          ref: uploadRef,
          class: "upload-demo",
          action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
          "auto-upload": false
        },
        {
          trigger: _withCtx(() => [
            _createVNode(_component_el_button, { type: "primary" }, {
              default: _withCtx(() => [..._cache[0] || (_cache[0] = [
                _createTextVNode(
                  "select file",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          tip: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createElementVNode(
              "div",
              { class: "el-upload__tip" },
              " jpg/png files with a size less than 500kb ",
              -1
              /* CACHED */
            )
          ])]),
          default: _withCtx(() => [
            _createVNode(_component_el_button, {
              class: "ml-3",
              type: "success",
              onClick: submitUpload
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createTextVNode(
                  " upload to server ",
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
        },
        512
        /* NEED_PATCH */
      );
    };
  }
});
return stdin_default;
 })() },
];
