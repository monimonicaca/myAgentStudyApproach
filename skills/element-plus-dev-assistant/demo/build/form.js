window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["form"] = [
  { title: "典型表单", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
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
    const onSubmit = () => {
      console.log("submit!");
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        model: form,
        "label-width": "auto",
        style: { "max-width": "600px" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, { label: "Activity name" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: form.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.name = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity zone" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_select, {
                modelValue: form.region,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.region = $event),
                placeholder: "please select your zone"
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_option, {
                    label: "Zone one",
                    value: "shanghai"
                  }),
                  _createVNode(_component_el_option, {
                    label: "Zone two",
                    value: "beijing"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity time" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_col, { span: 11 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_date_picker, {
                    modelValue: form.date1,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.date1 = $event),
                    type: "date",
                    placeholder: "Pick a date",
                    style: { "width": "100%" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_col, {
                span: 2,
                class: "text-center"
              }, {
                default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                  _createElementVNode(
                    "span",
                    { class: "text-gray-500" },
                    "-",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_col, { span: 11 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_time_picker, {
                    modelValue: form.date2,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.date2 = $event),
                    placeholder: "Pick a time",
                    style: { "width": "100%" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Instant delivery" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_switch, {
                modelValue: form.delivery,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.delivery = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity type" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_checkbox_group, {
                modelValue: form.type,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.type = $event)
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_checkbox, {
                    value: "Online activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                      _createTextVNode(
                        " Online activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Promotion activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                      _createTextVNode(
                        " Promotion activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Offline activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                      _createTextVNode(
                        " Offline activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Simple brand exposure",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                      _createTextVNode(
                        " Simple brand exposure ",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Resources" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_group, {
                modelValue: form.resource,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.resource = $event)
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_radio, { value: "Sponsor" }, {
                    default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                      _createTextVNode(
                        "Sponsor",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio, { value: "Venue" }, {
                    default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                      _createTextVNode(
                        "Venue",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity form" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: form.desc,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.desc = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: onSubmit
              }, {
                default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                  _createTextVNode(
                    "Create",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, null, {
                default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                  _createTextVNode(
                    "Cancel",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "行内表单", css: "\n.demo-form-inline .el-input {\n\n  --el-input-width: 220px;\n}\n.demo-form-inline .el-select {\n\n  --el-select-width: 220px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const formInline = reactive({
      user: "",
      region: "",
      date: ""
    });
    const onSubmit = () => {
      console.log("submit!");
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        inline: true,
        model: formInline,
        class: "demo-form-inline"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, { label: "Approved by" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: formInline.user,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formInline.user = $event),
                placeholder: "Approved by",
                clearable: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity zone" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_select, {
                modelValue: formInline.region,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formInline.region = $event),
                placeholder: "Activity zone",
                clearable: ""
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_option, {
                    label: "Zone one",
                    value: "shanghai"
                  }),
                  _createVNode(_component_el_option, {
                    label: "Zone two",
                    value: "beijing"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, { label: "Activity time" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_date_picker, {
                modelValue: formInline.date,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formInline.date = $event),
                type: "date",
                placeholder: "Pick a date",
                clearable: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: onSubmit
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Query",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "对齐方式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const labelPosition = ref("right");
    const itemLabelPosition = ref("");
    const formLabelAlign = reactive({
      name: "",
      region: "",
      type: ""
    });
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        "label-position": labelPosition.value,
        "label-width": "auto",
        model: formLabelAlign,
        style: { "max-width": "600px" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            label: "Form Align",
            "label-position": "right"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_group, {
                modelValue: labelPosition.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => labelPosition.value = $event),
                "aria-label": "label position"
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_radio_button, { value: "left" }, {
                    default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                      _createTextVNode(
                        "Left",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio_button, { value: "right" }, {
                    default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                      _createTextVNode(
                        "Right",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio_button, { value: "top" }, {
                    default: _withCtx(() => [..._cache[7] || (_cache[7] = [
                      _createTextVNode(
                        "Top",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Form Item Align",
            "label-position": "right"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_group, {
                modelValue: itemLabelPosition.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => itemLabelPosition.value = $event),
                "aria-label": "item label position"
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_radio_button, { value: "" }, {
                    default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                      _createTextVNode(
                        "Empty",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio_button, { value: "left" }, {
                    default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                      _createTextVNode(
                        "Left",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio_button, { value: "right" }, {
                    default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                      _createTextVNode(
                        "Right",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio_button, { value: "top" }, {
                    default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                      _createTextVNode(
                        "Top",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Name",
            "label-position": itemLabelPosition.value
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: formLabelAlign.name,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formLabelAlign.name = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["label-position"]),
          _createVNode(_component_el_form_item, {
            label: "Activity zone",
            "label-position": itemLabelPosition.value
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: formLabelAlign.region,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formLabelAlign.region = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["label-position"]),
          _createVNode(_component_el_form_item, {
            label: "Activity form",
            "label-position": itemLabelPosition.value
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: formLabelAlign.type,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formLabelAlign.type = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["label-position"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["label-position", "model"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "表单校验", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, unref: _unref, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const ruleFormRef = ref();
    const ruleForm = reactive({
      name: "Hello",
      region: "",
      count: "",
      date1: "",
      date2: "",
      delivery: false,
      location: "",
      type: [],
      resource: "",
      desc: ""
    });
    const locationOptions = ["Home", "Company", "School"];
    const rules = reactive({
      name: [
        { required: true, message: "Please input Activity name", trigger: "blur" },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change"
        }
      ],
      count: [
        {
          required: true,
          message: "Please select Activity count",
          trigger: "change"
        }
      ],
      date1: [
        {
          type: "date",
          required: true,
          message: "Please pick a date",
          trigger: "change"
        }
      ],
      date2: [
        {
          type: "date",
          required: true,
          message: "Please pick a time",
          trigger: "change"
        }
      ],
      location: [
        {
          required: true,
          message: "Please select a location",
          trigger: "change"
        }
      ],
      type: [
        {
          type: "array",
          required: true,
          message: "Please select at least one activity type",
          trigger: "change"
        }
      ],
      resource: [
        {
          required: true,
          message: "Please select activity resource",
          trigger: "change"
        }
      ],
      desc: [
        { required: true, message: "Please input activity form", trigger: "blur" }
      ]
    });
    const submitForm = async (formEl) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    const options = Array.from({ length: 1e4 }).map((_, idx) => ({
      value: `${idx + 1}`,
      label: `${idx + 1}`
    }));
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_select_v2 = _resolveComponent("el-select-v2");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_segmented = _resolveComponent("el-segmented");
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        style: { "max-width": "600px" },
        model: ruleForm,
        rules,
        "label-width": "auto"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            label: "Activity name",
            prop: "name"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: ruleForm.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.name = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity zone",
            prop: "region"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_select, {
                modelValue: ruleForm.region,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.region = $event),
                placeholder: "Activity zone"
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_option, {
                    label: "Zone one",
                    value: "shanghai"
                  }),
                  _createVNode(_component_el_option, {
                    label: "Zone two",
                    value: "beijing"
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity count",
            prop: "count"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_select_v2, {
                modelValue: ruleForm.count,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.count = $event),
                placeholder: "Activity count",
                options: _unref(options)
              }, null, 8, ["modelValue", "options"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity time",
            required: ""
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_col, { span: 11 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_form_item, { prop: "date1" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_date_picker, {
                        modelValue: ruleForm.date1,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ruleForm.date1 = $event),
                        type: "date",
                        "aria-label": "Pick a date",
                        placeholder: "Pick a date",
                        style: { "width": "100%" }
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_col, {
                class: "text-center",
                span: 2
              }, {
                default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                  _createElementVNode(
                    "span",
                    { class: "text-gray-500" },
                    "-",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_col, { span: 11 }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_form_item, { prop: "date2" }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_time_picker, {
                        modelValue: ruleForm.date2,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ruleForm.date2 = $event),
                        "aria-label": "Pick a time",
                        placeholder: "Pick a time",
                        style: { "width": "100%" }
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Instant delivery",
            prop: "delivery"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_switch, {
                modelValue: ruleForm.delivery,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ruleForm.delivery = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity location",
            prop: "location"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_segmented, {
                modelValue: ruleForm.location,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ruleForm.location = $event),
                options: locationOptions
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity type",
            prop: "type"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_checkbox_group, {
                modelValue: ruleForm.type,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ruleForm.type = $event)
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_checkbox, {
                    value: "Online activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                      _createTextVNode(
                        " Online activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Promotion activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                      _createTextVNode(
                        " Promotion activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Offline activities",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                      _createTextVNode(
                        " Offline activities ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_checkbox, {
                    value: "Simple brand exposure",
                    name: "type"
                  }, {
                    default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                      _createTextVNode(
                        " Simple brand exposure ",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Resources",
            prop: "resource"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_group, {
                modelValue: ruleForm.resource,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => ruleForm.resource = $event)
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_radio, { value: "Sponsorship" }, {
                    default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                      _createTextVNode(
                        "Sponsorship",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_radio, { value: "Venue" }, {
                    default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                      _createTextVNode(
                        "Venue",
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
              }, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Activity form",
            prop: "desc"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: ruleForm.desc,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => ruleForm.desc = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[10] || (_cache[10] = ($event) => submitForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[19] || (_cache[19] = [
                  _createTextVNode(
                    " Create ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                onClick: _cache[11] || (_cache[11] = ($event) => resetForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[20] || (_cache[20] = [
                  _createTextVNode(
                    "Reset",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model", "rules"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义校验规则", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const ruleFormRef = ref();
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Please input the age"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value < 18) {
            callback(new Error("Age must be greater than 18"));
          } else {
            callback();
          }
        }
      }, 1e3);
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (ruleForm.checkPass !== "") {
          if (!ruleFormRef.value) return;
          ruleFormRef.value.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const ruleForm = reactive({
      pass: "",
      checkPass: "",
      age: ""
    });
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      checkPass: [{ validator: validatePass2, trigger: "blur" }],
      age: [{ validator: checkAge, trigger: "blur" }]
    });
    const submitForm = (formEl) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        style: { "max-width": "600px" },
        model: ruleForm,
        "status-icon": "",
        rules,
        "label-width": "auto",
        class: "demo-ruleForm"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            label: "Password",
            prop: "pass"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: ruleForm.pass,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.pass = $event),
                type: "password",
                autocomplete: "off"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Confirm",
            prop: "checkPass"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: ruleForm.checkPass,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.checkPass = $event),
                type: "password",
                autocomplete: "off"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, {
            label: "Age",
            prop: "age"
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: ruleForm.age,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.age = $event),
                modelModifiers: { number: true }
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[3] || (_cache[3] = ($event) => submitForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    " Submit ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                onClick: _cache[4] || (_cache[4] = ($event) => resetForm(ruleFormRef.value))
              }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "Reset",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model", "rules"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "添加/删除表单项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, createTextVNode: _createTextVNode, withModifiers: _withModifiers, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const formRef = ref();
    const dynamicValidateForm = reactive({
      domains: [
        {
          key: 1,
          value: ""
        }
      ],
      email: ""
    });
    const removeDomain = (item) => {
      const index = dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1);
      }
    };
    const addDomain = () => {
      dynamicValidateForm.domains.push({
        key: Date.now(),
        value: ""
      });
    };
    const submitForm = (formEl) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        style: { "max-width": "600px" },
        model: dynamicValidateForm,
        "label-width": "auto",
        class: "demo-dynamic"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            prop: "email",
            label: "Email",
            rules: [
              {
                required: true,
                message: "Please input email address",
                trigger: "blur"
              },
              {
                type: "email",
                message: "Please input correct email address",
                trigger: ["blur", "change"]
              }
            ]
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: dynamicValidateForm.email,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dynamicValidateForm.email = $event)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList(dynamicValidateForm.domains, (domain, index) => {
              return _openBlock(), _createBlock(_component_el_form_item, {
                key: domain.key,
                label: "Domain" + index,
                prop: "domains." + index + ".value",
                rules: {
                  required: true,
                  message: "domain can not be null",
                  trigger: "blur"
                }
              }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_input, {
                    modelValue: domain.value,
                    "onUpdate:modelValue": ($event) => domain.value = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  _createVNode(_component_el_button, {
                    class: "mt-2",
                    onClick: _withModifiers(($event) => removeDomain(domain), ["prevent"])
                  }, {
                    default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                      _createTextVNode(
                        " Delete ",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label", "prop"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[1] || (_cache[1] = ($event) => submitForm(formRef.value))
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Submit",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, { onClick: addDomain }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    "New domain",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                onClick: _cache[2] || (_cache[2] = ($event) => resetForm(formRef.value))
              }, {
                default: _withCtx(() => [..._cache[6] || (_cache[6] = [
                  _createTextVNode(
                    "Reset",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "数字类型验证", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const formRef = ref();
    const numberValidateForm = reactive({
      age: ""
    });
    const submitForm = (formEl) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
        }
      });
    };
    const resetForm = (formEl) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        style: { "max-width": "600px" },
        model: numberValidateForm,
        "label-width": "auto",
        class: "demo-ruleForm"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_form_item, {
            label: "age",
            prop: "age",
            rules: [
              { required: true, message: "age is required" },
              { type: "number", message: "age must be a number" }
            ]
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_input, {
                modelValue: numberValidateForm.age,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => numberValidateForm.age = $event),
                modelModifiers: { number: true },
                type: "text",
                autocomplete: "off"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[1] || (_cache[1] = ($event) => submitForm(formRef.value))
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    "Submit",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_button, {
                onClick: _cache[2] || (_cache[2] = ($event) => resetForm(formRef.value))
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createTextVNode(
                    "Reset",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "尺寸控制", css: "\n.el-radio-group {\n\n  margin-right: 12px;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { reactive, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const size = ref("default");
    const labelPosition = ref("right");
    const sizeForm = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    function onSubmit() {
      console.log("submit!");
    }
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_option = _resolveComponent("el-option");
      const _component_el_select = _resolveComponent("el-select");
      const _component_el_date_picker = _resolveComponent("el-date-picker");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_time_picker = _resolveComponent("el-time-picker");
      const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");
      const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");
      const _component_el_radio = _resolveComponent("el-radio");
      const _component_el_button = _resolveComponent("el-button");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", null, [
            _createVNode(_component_el_radio_group, {
              modelValue: size.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
              "aria-label": "size control"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, { value: "large" }, {
                  default: _withCtx(() => [..._cache[8] || (_cache[8] = [
                    _createTextVNode(
                      "large",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "default" }, {
                  default: _withCtx(() => [..._cache[9] || (_cache[9] = [
                    _createTextVNode(
                      "default",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "small" }, {
                  default: _withCtx(() => [..._cache[10] || (_cache[10] = [
                    _createTextVNode(
                      "small",
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
            _createVNode(_component_el_radio_group, {
              modelValue: labelPosition.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => labelPosition.value = $event),
              "aria-label": "position control"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_el_radio_button, { value: "left" }, {
                  default: _withCtx(() => [..._cache[11] || (_cache[11] = [
                    _createTextVNode(
                      "Left",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "right" }, {
                  default: _withCtx(() => [..._cache[12] || (_cache[12] = [
                    _createTextVNode(
                      "Right",
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }),
                _createVNode(_component_el_radio_button, { value: "top" }, {
                  default: _withCtx(() => [..._cache[13] || (_cache[13] = [
                    _createTextVNode(
                      "Top",
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
            }, 8, ["modelValue"])
          ]),
          _cache[21] || (_cache[21] = _createElementVNode(
            "br",
            null,
            null,
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_form, {
            style: { "max-width": "600px" },
            model: sizeForm,
            "label-width": "auto",
            "label-position": labelPosition.value,
            size: size.value
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_form_item, { label: "Activity name" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_input, {
                    modelValue: sizeForm.name,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sizeForm.name = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Activity zone" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_select, {
                    modelValue: sizeForm.region,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sizeForm.region = $event),
                    placeholder: "please select your zone"
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_option, {
                        label: "Zone one",
                        value: "shanghai"
                      }),
                      _createVNode(_component_el_option, {
                        label: "Zone two",
                        value: "beijing"
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Activity time" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_col, { span: 11 }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_date_picker, {
                        modelValue: sizeForm.date1,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sizeForm.date1 = $event),
                        type: "date",
                        "aria-label": "Pick a date",
                        placeholder: "Pick a date",
                        style: { "width": "100%" }
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_col, {
                    class: "text-center",
                    span: 1,
                    style: { "margin": "0 0.5rem" }
                  }, {
                    default: _withCtx(() => [..._cache[14] || (_cache[14] = [
                      _createTextVNode(
                        "-",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_col, { span: 11 }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_time_picker, {
                        modelValue: sizeForm.date2,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sizeForm.date2 = $event),
                        "aria-label": "Pick a time",
                        placeholder: "Pick a time",
                        style: { "width": "100%" }
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Activity type" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_checkbox_group, {
                    modelValue: sizeForm.type,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sizeForm.type = $event)
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_checkbox_button, {
                        value: "Online activities",
                        name: "type"
                      }, {
                        default: _withCtx(() => [..._cache[15] || (_cache[15] = [
                          _createTextVNode(
                            " Online activities ",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_checkbox_button, {
                        value: "Promotion activities",
                        name: "type"
                      }, {
                        default: _withCtx(() => [..._cache[16] || (_cache[16] = [
                          _createTextVNode(
                            " Promotion activities ",
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
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Resources" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_radio_group, {
                    modelValue: sizeForm.resource,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sizeForm.resource = $event)
                  }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_radio, {
                        border: "",
                        value: "Sponsor"
                      }, {
                        default: _withCtx(() => [..._cache[17] || (_cache[17] = [
                          _createTextVNode(
                            "Sponsor",
                            -1
                            /* CACHED */
                          )
                        ])]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_radio, {
                        border: "",
                        value: "Venue"
                      }, {
                        default: _withCtx(() => [..._cache[18] || (_cache[18] = [
                          _createTextVNode(
                            "Venue",
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
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, null, {
                default: _withCtx(() => [
                  _createVNode(_component_el_button, {
                    type: "primary",
                    onClick: onSubmit
                  }, {
                    default: _withCtx(() => [..._cache[19] || (_cache[19] = [
                      _createTextVNode(
                        "Create",
                        -1
                        /* CACHED */
                      )
                    ])]),
                    _: 1
                    /* STABLE */
                  }),
                  _createVNode(_component_el_button, null, {
                    default: _withCtx(() => [..._cache[20] || (_cache[20] = [
                      _createTextVNode(
                        "Cancel",
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
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model", "label-position", "size"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "无障碍", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { reactive } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const formAccessibility = reactive({
      fullName: "",
      firstName: "",
      lastName: ""
    });
    return (_ctx, _cache) => {
      const _component_el_alert = _resolveComponent("el-alert");
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_form_item = _resolveComponent("el-form-item");
      const _component_el_space = _resolveComponent("el-space");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_row = _resolveComponent("el-row");
      const _component_el_form = _resolveComponent("el-form");
      return _openBlock(), _createBlock(_component_el_form, {
        "label-position": "left",
        "label-width": "auto",
        style: { "max-width": "600px" }
      }, {
        default: _withCtx(() => [
          _createVNode(_component_el_space, { fill: "" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_alert, {
                type: "info",
                "show-icon": "",
                closable: false
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createElementVNode(
                    "p",
                    null,
                    '"Full Name" label is automatically attached to the input:',
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Full Name" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_input, {
                    modelValue: formAccessibility.fullName,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formAccessibility.fullName = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_space, { fill: "" }, {
            default: _withCtx(() => [
              _createVNode(_component_el_alert, {
                type: "info",
                "show-icon": "",
                closable: false
              }, {
                default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                  _createElementVNode(
                    "p",
                    null,
                    [
                      _createTextVNode(' "Your Information" serves as a label for the group of inputs. '),
                      _createElementVNode("br"),
                      _createTextVNode(' You must specify labels on the individal inputs. Placeholders are not replacements for using the "label" attribute. ')
                    ],
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }),
              _createVNode(_component_el_form_item, { label: "Your Information" }, {
                default: _withCtx(() => [
                  _createVNode(_component_el_row, { gutter: 20 }, {
                    default: _withCtx(() => [
                      _createVNode(_component_el_col, { span: 12 }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_input, {
                            modelValue: formAccessibility.firstName,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formAccessibility.firstName = $event),
                            "aria-label": "First Name",
                            placeholder: "First Name"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _createVNode(_component_el_col, { span: 12 }, {
                        default: _withCtx(() => [
                          _createVNode(_component_el_input, {
                            modelValue: formAccessibility.lastName,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formAccessibility.lastName = $event),
                            "aria-label": "Last Name",
                            placeholder: "Last Name"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
];
