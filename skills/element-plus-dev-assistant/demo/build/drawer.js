window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["drawer"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { style: { "flex": "auto" } };
const { ref } = Vue;
const { ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const drawer = ref(false);
    const drawer2 = ref(false);
    const direction = ref("rtl");
    const radio1 = ref("Option 1");
    const handleClose = (done) => {
      ElMessageBox.confirm("Are you sure you want to close this?").then(() => {
        done();
      }).catch(() => {
      });
    };
    function cancelClick() {
      drawer2.value = false;
    }
    function confirmClick() {
      ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`).then(() => {
        drawer2.value = false;
      }).catch(() => {
      });
    }
    return (_ctx, _cache) => {
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: direction.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => direction.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio, { value: "ltr" }, {
                default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                  _createTextVNode(
                    "left to right",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "rtl" }, {
                default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                  _createTextVNode(
                    "right to left",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "ttb" }, {
                default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                  _createTextVNode(
                    "top to bottom",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio, { value: "btt" }, {
                default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                  _createTextVNode(
                    "bottom to top",
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
          }, 8, ["modelValue"]),
          _createVNode(_component_el_button, {
            type: "primary",
            style: { "margin-left": "16px" },
            onClick: _cache[1] || (_cache[1] = ($event) => drawer.value = true)
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " open ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            type: "primary",
            style: { "margin-left": "16px" },
            onClick: _cache[2] || (_cache[2] = ($event) => drawer2.value = true)
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " with footer ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => drawer.value = $event),
            title: "I am the title",
            direction: direction.value,
            "before-close": handleClose
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createElementVNode(
                "span",
                null,
                "Hi, there!",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "direction"]),
          _createVNode(_component_el_drawer, {
            modelValue: drawer2.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => drawer2.value = $event),
            direction: direction.value
          }, {
            header: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createElementVNode(
                "h4",
                null,
                "set title by slot",
                -1
                /* CACHED */
              )
            ])]),
            default: _withCtx(() => [
              _createElementVNode("div", null, [
                _createVNode(_component_el_radio, {
                  modelValue: radio1.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => radio1.value = $event),
                  value: "Option 1",
                  size: "large"
                }, {
                  default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                    _createTextVNode(
                      " Option 1 ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"]),
                _createVNode(_component_el_radio, {
                  modelValue: radio1.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => radio1.value = $event),
                  value: "Option 2",
                  size: "large"
                }, {
                  default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                    _createTextVNode(
                      " Option 2 ",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ])
            ]),
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, { onClick: cancelClick }, {
                  default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                    _createTextVNode(
                      "cancel",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_button, {
                  type: "primary",
                  onClick: confirmClick
                }, {
                  default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                    _createTextVNode(
                      "confirm",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "direction"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "不添加 Title", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const drawer = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => drawer.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " open ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => drawer.value = $event),
            title: "I am the title",
            "with-header": false
          }, {
            default: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createElementVNode(
                "span",
                null,
                "Hi there!",
                -1
                /* CACHED */
              )
            ])]),
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
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-drawer__content" };
const _hoisted_2 = { class: "demo-drawer__footer" };
const { reactive, ref } = Vue;
const { ElMessageBox } = ElementPlus;
const formLabelWidth = "80px";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    let timer;
    const table = ref(false);
    const dialog = ref(false);
    const loading = ref(false);
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
        name: "Peter Parker",
        address: "Queens, New York City"
      },
      {
        date: "2016-05-04",
        name: "Peter Parker",
        address: "Queens, New York City"
      },
      {
        date: "2016-05-01",
        name: "Peter Parker",
        address: "Queens, New York City"
      },
      {
        date: "2016-05-03",
        name: "Peter Parker",
        address: "Queens, New York City"
      }
    ];
    const onClick = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        dialog.value = false;
      }, 400);
    };
    const handleClose = (done) => {
      if (loading.value) {
        return;
      }
      ElMessageBox.confirm("Do you want to submit?").then(() => {
        loading.value = true;
        timer = setTimeout(() => {
          done();
          setTimeout(() => {
            loading.value = false;
          }, 400);
        }, 2e3);
      }).catch(() => {
      });
    };
    const cancelForm = () => {
      loading.value = false;
      dialog.value = false;
      clearTimeout(timer);
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_table_column = _resolveComponent("el-table-column");
      const _component_el_table = _resolveComponent("el-table");
      const _component_el_drawer = _resolveComponent("el-drawer");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            text: "",
            onClick: _cache[0] || (_cache[0] = ($event) => table.value = true)
          }, {
            default: _withCtx(() => [..._cache[6] || (_cache[6] = [
              _createTextVNode(
                " Open Drawer with nested table ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_button, {
            text: "",
            onClick: _cache[1] || (_cache[1] = ($event) => dialog.value = true)
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                " Open Drawer with nested form ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: table.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => table.value = $event),
            title: "I have a nested table inside!",
            direction: "rtl",
            size: "50%"
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
          _createVNode(_component_el_drawer, {
            modelValue: dialog.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialog.value = $event),
            title: "I have a nested form inside!",
            "before-close": handleClose,
            direction: "ltr",
            class: "demo-drawer"
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_form, { model: form }, {
                  default: _withCtx(() => [
                    _createVNode(_component_el_form_item, {
                      label: "Name",
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
                      label: "Area",
                      "label-width": formLabelWidth
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_el_select, {
                          modelValue: form.region,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.region = $event),
                          placeholder: "Please select activity area"
                        }, {
                          default: _withCtx(() => [
                            _createVNode(_component_el_option, {
                              label: "Area1",
                              value: "shanghai"
                            }),
                            _createVNode(_component_el_option, {
                              label: "Area2",
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
                }, 8, ["model"]),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_button, { onClick: cancelForm }, {
                    default: _withCtx(() => [..._cache[8] || (_cache[8] = [
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
                    loading: loading.value,
                    onClick
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(loading.value ? "Submitting ..." : "Submit"),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ])
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
  { title: "自定义头部", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = ["id"];
const { ref } = Vue;
const { CircleCloseFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => visible.value = true)
          }, {
            default: _withCtx(() => [..._cache[2] || (_cache[2] = [
              _createTextVNode(
                " Open Drawer with customized header ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: visible.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
            "show-close": false
          }, {
            header: _withCtx(({ close, titleId, titleClass }) => [
              _createElementVNode("h4", {
                id: titleId,
                class: _normalizeClass(titleClass)
              }, "This is a custom header!", 10, _hoisted_1),
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
            ]),
            default: _withCtx(() => [
              _cache[4] || (_cache[4] = _createTextVNode(
                " This is drawer content. ",
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
  { title: "可调整抽屉2.11.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const direction = ref();
    const drawer = ref(false);
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: direction.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => direction.value = $event),
            onChange: _cache[1] || (_cache[1] = ($event) => drawer.value = true)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, { value: "ttb" }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "top",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "rtl" }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "right",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "btt" }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "bottom",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_radio_button, { value: "ltr" }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "left",
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
          }, 8, ["modelValue"]),
          _createVNode(_component_el_drawer, {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => drawer.value = $event),
            direction: direction.value,
            resizable: ""
          }, {
            default: _withCtx(() => [..._cache[7] || (_cache[7] = [
              _createTextVNode(
                " This is drawer content. ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "direction"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "嵌套抽屉", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
const { ElMessageBox } = ElementPlus;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const drawer = ref(false);
    const innerDrawer = ref(false);
    const handleClose = (done) => {
      ElMessageBox.confirm("You still have unsaved data, proceed?").then(() => {
        done();
      }).catch(() => {
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => drawer.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " open ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: drawer.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => drawer.value = $event),
            title: "I'm outer Drawer",
            size: "50%"
          }, {
            default: _withCtx(() => [
              _createElementVNode("div", null, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => innerDrawer.value = true)
                }, {
                  default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                    _createTextVNode(
                      "Click me!",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_drawer, {
                  modelValue: innerDrawer.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => innerDrawer.value = $event),
                  title: "I'm inner Drawer",
                  "append-to-body": true,
                  "before-close": handleClose
                }, {
                  default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                    _createElementVNode(
                      "p",
                      null,
                      "_(:\u0437\u309D\u2220)_",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ])
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
const _hoisted_1 = { class: "drawer-footer" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const drawerVisible = ref(false);
    return (_ctx, _cache) => {
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_drawer = _resolveComponent("el-drawer");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_button, {
            plain: "",
            onClick: _cache[0] || (_cache[0] = ($event) => drawerVisible.value = true)
          }, {
            default: _withCtx(() => [..._cache[4] || (_cache[4] = [
              _createTextVNode(
                " Open the modal Drawer ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_drawer, {
            modelValue: drawerVisible.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => drawerVisible.value = $event),
            modal: false,
            "modal-penetrable": ""
          }, {
            footer: _withCtx(() => [
              _createElementVNode("div", _hoisted_1, [
                _createVNode(_component_el_button, {
                  onClick: _cache[1] || (_cache[1] = ($event) => drawerVisible.value = false)
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
                  onClick: _cache[2] || (_cache[2] = ($event) => drawerVisible.value = false)
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
                "It's a modal Drawer",
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
];
