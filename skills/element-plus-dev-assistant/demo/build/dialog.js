window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["dialog"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
const { ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const dialogVisible = ref(false);
    const handleClose = (done) => {
      ElMessageBox.confirm("Are you sure to close this dialog?").then(() => {
        done();
      }).catch(() => {
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Click to open the Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialogVisible.value = $event),
            title: "Tips",
            width: "500",
            "before-close": handleClose
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                "This is a message",
                -1
                /* CACHED */
              ))
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
  { title: "自定义内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const _hoisted_2 = { class: "dialog-footer" };
const { reactive, ref } = Vue;
const formLabelWidth = "140px";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const dialogTableVisible = ref(false);
    const dialogFormVisible = ref(false);
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    const gridData = [
      {
        date: "2016-05-02",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-04",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-01",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      },
      {
        date: "2016-05-03",
        name: "John Smith",
        address: "No.1518,  Jinshajiang Road, Putuo District"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_dialog = _resolveComponent("el-dialog");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              class: "!ml-0",
              plain: "",
              onClick: _cache[0] || (_cache[0] = ($event) => dialogTableVisible.value = true)
            }, {
              default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                _createTextVNode(
                  " Open a Table nested Dialog ",
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
              onClick: _cache[1] || (_cache[1] = ($event) => dialogFormVisible.value = true)
            }, {
              default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                _createTextVNode(
                  " Open a Form nested Dialog ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogTableVisible.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialogTableVisible.value = $event),
            title: "Shipping address",
            width: "800"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_table, { data: gridData }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_table_column, {
                    property: "date",
                    label: "Date",
                    width: "150"
                  }),
                  _createVNode(_component_el_table_column, {
                    property: "name",
                    label: "Name",
                    width: "200"
                  }),
                  _createVNode(_component_el_table_column, {
                    property: "address",
                    label: "Address"
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogFormVisible.value,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialogFormVisible.value = $event),
            title: "Shipping address",
            width: "500"
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_2, [
                _createVNode(_component_el_button, {
                  onClick: _cache[5] || (_cache[5] = ($event) => dialogFormVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[6] || (_cache[6] = ($event) => dialogFormVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _createVNode(_component_el_form, { model: form }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_form_item, {
                    label: "Promotion name",
                    "label-width": formLabelWidth
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_input, {
                        modelValue: form.name,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.name = $event),
                        autocomplete: "off"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_form_item, {
                    label: "Zones",
                    "label-width": formLabelWidth
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_select, {
                        modelValue: form.region,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.region = $event),
                        placeholder: "Please select a zone"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_option, {
                            label: "Zone No.1",
                            value: "shanghai"
                          }),
                          _createVNode(_component_el_option, {
                            label: "Zone No.2",
                            value: "beijing"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"])
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
  { title: "自定义头部", css: "\n.my-header[data-v-blhygt] {\n\n  display: flex;\n\n  flex-direction: row;\n\n  justify-content: space-between;\n\n  gap: 16px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "my-header" };
const _hoisted_2 = ["id"];
const { ref } = Vue;
const { CircleCloseFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => visible.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Open Dialog with customized header ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: visible.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
            "show-close": false,
            width: "500"
          }, {
            header: _withCtx(({ close, titleId, titleClass }) => [
              _createElementVNode("div", _hoisted_1, [
                _createElementVNode("h4", {
                  id: titleId,
                  class: _normalizeClass(titleClass)
                }, "This is a custom header!", 10, _hoisted_2),
                _createVNode(_component_el_button, {
                  type: "danger",
                  onClick: close
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_icon, { class: "el-icon--left" }, {
                      default: _withCtx(() => [
                        _createVNode(_unref(CircleCloseFilled))
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    _cache[3] || (_cache[3] = _createTextVNode(
                      " Close ",
                      -1
                      /* CACHED */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["onClick"])
              ])
            ]),
            default: _withCtx(() => [
              _cache[4] || (_cache[4] = _createTextVNode(
                " This is dialog content. ",
                -1
                /* CACHED */
              ))
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
  { title: "嵌套的对话框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const outerVisible = ref(false);
    const innerVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => outerVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[5] || (_cache[5] = [
              _createTextVNode(
                " Open the outer Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: outerVisible.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => outerVisible.value = $event),
            title: "Outer Dialog",
            width: "800"
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[2] || (_cache[2] = ($event) => outerVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[3] || (_cache[3] = ($event) => innerVisible.value = true)
                }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      " Open the inner Dialog ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[9] || (_cache[9] = _createElementVNode(
                "span",
                null,
                "This is the outer Dialog",
                -1
                /* CACHED */
              )),
              _createVNode(_component_el_dialog, {
                modelValue: innerVisible.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => innerVisible.value = $event),
                width: "500",
                title: "Inner Dialog",
                "append-to-body": ""
              }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createElementVNode(
                    "span",
                    null,
                    "This is the inner Dialog",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
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
  { title: "内容居中", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const centerDialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => centerDialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Click to open the Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: centerDialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => centerDialogVisible.value = $event),
            title: "Warning",
            width: "500",
            center: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                " It should be noted that the content will not be aligned in center by default ",
                -1
                /* CACHED */
              ))
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
  { title: "居中对话框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const centerDialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => centerDialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Click to open the Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: centerDialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => centerDialogVisible.value = $event),
            title: "Warning",
            width: "500",
            "align-center": ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                "Open the dialog from the center from the screen",
                -1
                /* CACHED */
              ))
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
  { title: "关闭时销毁", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const centerDialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => centerDialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Click to open Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: centerDialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => centerDialogVisible.value = $event),
            title: "Notice",
            width: "500",
            "destroy-on-close": "",
            center: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => centerDialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                " Notice: before the dialog is opened for the first time, this node and the one below will not be rendered. ",
                -1
                /* CACHED */
              )),
              _cache[8] || (_cache[8] = _createElementVNode(
                "div",
                null,
                [
                  _createElementVNode("strong", null, "Extra content (Not rendered)")
                ],
                -1
                /* CACHED */
              ))
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
  { title: "可拖拽对话框", css: "\n.custom-dragging-style.is-dragging {\n\n  border: 2px dashed var(--el-color-primary);\n\n  opacity: 0.65;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-1" };
const _hoisted_2 = { class: "dialog-footer" };
const _hoisted_3 = { class: "dialog-footer" };
const _hoisted_4 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const dialogVisible = ref(false);
    const dialogOverflowVisible = ref(false);
    const customDraggingVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _createVNode(_component_el_button, {
              class: "!ml-0",
              plain: "",
              onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
            }, {
              default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                _createTextVNode(
                  " Open a draggable Dialog ",
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
              onClick: _cache[1] || (_cache[1] = ($event) => dialogOverflowVisible.value = true)
            }, {
              default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                _createTextVNode(
                  " Open a overflow draggable Dialog ",
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
              onClick: _cache[2] || (_cache[2] = ($event) => customDraggingVisible.value = true)
            }, {
              default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                _createTextVNode(
                  " Open a custom dragging style Dialog ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialogVisible.value = $event),
            title: "Tips",
            width: "500",
            draggable: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_2, [
                _createVNode(_component_el_button, {
                  onClick: _cache[3] || (_cache[3] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[4] || (_cache[4] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[17] || (_cache[17] = _createElementVNode(
                "span",
                null,
                "It's a draggable Dialog",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogOverflowVisible.value,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => dialogOverflowVisible.value = $event),
            title: "Tips",
            width: "500",
            draggable: "",
            overflow: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_3, [
                _createVNode(_component_el_button, {
                  onClick: _cache[6] || (_cache[6] = ($event) => dialogOverflowVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[7] || (_cache[7] = ($event) => dialogOverflowVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[19] || (_cache[19] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[20] || (_cache[20] = _createElementVNode(
                "span",
                null,
                "It's a overflow draggable Dialog",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_dialog, {
            modelValue: customDraggingVisible.value,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => customDraggingVisible.value = $event),
            class: "custom-dragging-style",
            title: "Custom Dragging Style",
            width: "500",
            draggable: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_4, [
                _createVNode(_component_el_button, {
                  onClick: _cache[9] || (_cache[9] = ($event) => customDraggingVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[21] || (_cache[21] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[10] || (_cache[10] = ($event) => customDraggingVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[22] || (_cache[22] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[23] || (_cache[23] = _createElementVNode(
                "span",
                null,
                "This dialog has custom dragging styles. Try dragging it to see the effects!",
                -1
                /* CACHED */
              ))
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
  { title: "全屏", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const dialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Open the fullscreen Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialogVisible.value = $event),
            fullscreen: ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                "It's a fullscreen Dialog",
                -1
                /* CACHED */
              ))
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
  { title: "模态框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const dialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Open the modal Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialogVisible.value = $event),
            modal: false,
            "modal-penetrable": ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[7] || (_cache[7] = _createElementVNode(
                "span",
                null,
                "It's a modal Dialog",
                -1
                /* CACHED */
              ))
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
  { title: "自定义动画 2.10.5", css: "\ncode[data-v-4u4dnm] {\n\n  background: var(--el-bg-color-page);\n\n  padding: 4px 8px;\n\n  border-radius: 4px;\n\n  font-size: 12px;\n\n  display: block;\n\n  margin-top: 8px;\n}\n\n\n\n\n/* Scale Animation */\n.dialog-scale-enter-active,\n\n.dialog-scale-leave-active,\n\n.dialog-scale-enter-active .el-dialog,\n\n.dialog-scale-leave-active .el-dialog {\n\n  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.dialog-scale-enter-from,\n\n.dialog-scale-leave-to {\n\n  opacity: 0;\n}\n.dialog-scale-enter-from .el-dialog,\n\n.dialog-scale-leave-to .el-dialog {\n\n  transform: scale(0.5);\n\n  opacity: 0;\n}\n\n/* Slide Animation */\n.dialog-slide-enter-active,\n\n.dialog-slide-leave-active,\n\n.dialog-slide-enter-active .el-dialog,\n\n.dialog-slide-leave-active .el-dialog {\n\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.dialog-slide-enter-from,\n\n.dialog-slide-leave-to {\n\n  opacity: 0;\n}\n.dialog-slide-enter-from .el-dialog,\n\n.dialog-slide-leave-to .el-dialog {\n\n  transform: translateY(-100px);\n\n  opacity: 0;\n}\n\n/* Bounce Animation */\n.dialog-bounce-enter-active,\n\n.dialog-bounce-leave-active,\n\n.dialog-bounce-enter-active .el-dialog,\n\n.dialog-bounce-leave-active .el-dialog {\n\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.dialog-bounce-enter-from,\n\n.dialog-bounce-leave-to {\n\n  opacity: 0;\n}\n.dialog-bounce-enter-from .el-dialog,\n\n.dialog-bounce-leave-to .el-dialog {\n\n  transform: scale(0.3) translateY(-50px);\n\n  opacity: 0;\n}\n\n/* Object Configuration Animation */\n.dialog-custom-object-enter-active,\n\n.dialog-custom-object-leave-active,\n\n.dialog-custom-object-enter-active .el-dialog,\n\n.dialog-custom-object-leave-active .el-dialog {\n\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.dialog-custom-object-enter-from,\n\n.dialog-custom-object-leave-to {\n\n  opacity: 0;\n}\n.dialog-custom-object-enter-from .el-dialog,\n\n.dialog-custom-object-leave-to .el-dialog {\n\n  transform: rotate(180deg) scale(0.5);\n\n  opacity: 0;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, Fragment: _Fragment } = Vue;
const _hoisted_1 = { key: 0 };
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const dialogVisible = ref(false);
    const currentAnimation = ref("fade");
    const isObjectConfig = ref(false);
    const transitionConfig = computed(() => {
      if (isObjectConfig.value) {
        return {
          name: "dialog-custom-object",
          appear: true,
          mode: "out-in",
          duration: 500
        };
      }
      return `dialog-${currentAnimation.value}`;
    });
    const openDialog = (type) => {
      currentAnimation.value = type;
      isObjectConfig.value = false;
      dialogVisible.value = true;
    };
    const openDialogWithObject = () => {
      currentAnimation.value = "object-config";
      isObjectConfig.value = true;
      dialogVisible.value = true;
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_button, {
              plain: "",
              onClick: _cache[0] || (_cache[0] = ($event) => openDialog("fade"))
            }, {
              default: _withCtx(() => [..._cache[7] || (_cache[7] = [
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
              onClick: _cache[1] || (_cache[1] = ($event) => openDialog("scale"))
            }, {
              default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                _createTextVNode(
                  " Scale ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              plain: "",
              onClick: _cache[2] || (_cache[2] = ($event) => openDialog("slide"))
            }, {
              default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                _createTextVNode(
                  " Slide ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              plain: "",
              onClick: _cache[3] || (_cache[3] = ($event) => openDialog("bounce"))
            }, {
              default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                _createTextVNode(
                  " Bounce ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode(_component_el_button, {
              plain: "",
              onClick: openDialogWithObject
            }, {
              default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                _createTextVNode(
                  " Object Config ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ]),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialogVisible.value = $event),
            class: "custom-transition-dialog",
            title: `${currentAnimation.value} Animation Dialog`,
            width: "30%",
            transition: transitionConfig.value
          }, {
            footer: _withCtx(() => [
              _createVNode(_component_el_button, {
                onClick: _cache[4] || (_cache[4] = ($event) => dialogVisible.value = false)
              }, {
                default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                  _createTextVNode(
                    "Cancel",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[5] || (_cache[5] = ($event) => dialogVisible.value = false)
              }, {
                default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                  _createTextVNode(
                    " Confirm ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              })
            ]),
            default: _withCtx(() => [
              _createElementVNode("div", null, [
                _createElementVNode("p", null, [
                  _cache[12] || (_cache[12] = _createTextVNode(
                    " Current animation: ",
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode(
                    "strong",
                    null,
                    _toDisplayString(currentAnimation.value),
                    1
                    /* TEXT */
                  )
                ]),
                _createElementVNode(
                  "p",
                  null,
                  " This dialog demonstrates the " + _toDisplayString(currentAnimation.value) + " animation effect. ",
                  1
                  /* TEXT */
                ),
                isObjectConfig.value ? (_openBlock(), _createElementBlock("p", _hoisted_1, [
                  _cache[13] || (_cache[13] = _createElementVNode(
                    "strong",
                    null,
                    "Using object configuration:",
                    -1
                    /* CACHED */
                  )),
                  _cache[14] || (_cache[14] = _createElementVNode(
                    "br",
                    null,
                    null,
                    -1
                    /* CACHED */
                  )),
                  _createElementVNode(
                    "code",
                    null,
                    _toDisplayString(JSON.stringify(transitionConfig.value, null, 2)),
                    1
                    /* TEXT */
                  )
                ])) : _createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "title", "transition"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "Events", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "dialog-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const dialogVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_dialog = _resolveComponent("el-dialog");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => dialogVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                " Open the event Dialog ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_dialog, {
            modelValue: dialogVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialogVisible.value = $event),
            "modal-class": "overide-animation",
            "before-close": (doneFn) => {
              ;
              console.log("before-close"), doneFn();
            },
            onOpen: _cache[4] || (_cache[4] = ($event) => console.log("open")),
            onOpenAutoFocus: _cache[5] || (_cache[5] = ($event) => console.log("open-auto-focus")),
            onOpened: _cache[6] || (_cache[6] = ($event) => console.log("opened")),
            onClose: _cache[7] || (_cache[7] = ($event) => console.log("close")),
            onCloseAutoFocus: _cache[8] || (_cache[8] = ($event) => console.log("close-auto-focus")),
            onClosed: _cache[9] || (_cache[9] = ($event) => console.log("closed"))
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                    _createTextVNode(
                      "Cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialogVisible.value = false)
                }, {
                  default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                    _createTextVNode(
                      " Confirm ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            default: _withCtx(() => [
              _cache[13] || (_cache[13] = _createElementVNode(
                "span",
                null,
                "It's a event Dialog",
                -1
                /* CACHED */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "before-close"])
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
