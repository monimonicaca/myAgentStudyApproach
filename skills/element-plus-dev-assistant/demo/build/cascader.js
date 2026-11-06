window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["cascader"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const value = ref([]);
    const props = {
      expandTrigger: "hover"
    };
    const handleChange = (value2) => {
      console.log(value2);
    };
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "p",
              null,
              "Child options expand when clicked (default)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              options,
              onChange: handleChange
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              "Child options expand when hovered",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
              options,
              props,
              onChange: handleChange
            }, null, 8, ["modelValue"])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "有禁用选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        disabled: true,
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, { options });
    };
  }
});
return stdin_default;
 })() },
  { title: "可清空", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, {
        options,
        clearable: ""
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义清除图标2.11.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { CloseBold } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, {
        options,
        clearable: "",
        "clear-icon": _unref(CloseBold),
        placeholder: "Custom clear icon"
      }, null, 8, ["clear-icon"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "仅显示最后一级", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, {
        options,
        "show-all-levels": false
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "多选", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const _hoisted_4 = { class: "m-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const props = { multiple: true };
    const options = [
      {
        value: 1,
        label: "Asia",
        children: [
          {
            value: 2,
            label: "China",
            children: [
              { value: 3, label: "Beijing" },
              { value: 4, label: "Shanghai" },
              { value: 5, label: "Hangzhou" }
            ]
          },
          {
            value: 6,
            label: "Japan",
            children: [
              { value: 7, label: "Tokyo" },
              { value: 8, label: "Osaka" },
              { value: 9, label: "Kyoto" }
            ]
          },
          {
            value: 10,
            label: "Korea",
            children: [
              { value: 11, label: "Seoul" },
              { value: 12, label: "Busan" },
              { value: 13, label: "Taegu" }
            ]
          }
        ]
      },
      {
        value: 14,
        label: "Europe",
        children: [
          {
            value: 15,
            label: "France",
            children: [
              { value: 16, label: "Paris" },
              { value: 17, label: "Marseille" },
              { value: 18, label: "Lyon" }
            ]
          },
          {
            value: 19,
            label: "UK",
            children: [
              { value: 20, label: "London" },
              { value: 21, label: "Birmingham" },
              { value: 22, label: "Manchester" }
            ]
          }
        ]
      },
      {
        value: 23,
        label: "North America",
        children: [
          {
            value: 24,
            label: "US",
            children: [
              { value: 25, label: "New York" },
              { value: 26, label: "Los Angeles" },
              { value: 27, label: "Washington" }
            ]
          },
          {
            value: 28,
            label: "Canada",
            children: [
              { value: 29, label: "Toronto" },
              { value: 30, label: "Montreal" },
              { value: 31, label: "Ottawa" }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode(
              "p",
              null,
              "Display all tags (default)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props,
              clearable: ""
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "p",
              null,
              "Collapse tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props,
              "collapse-tags": "",
              clearable: ""
            })
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "p",
              null,
              "Collapse tags tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props,
              "collapse-tags": "",
              "collapse-tags-tooltip": "",
              clearable: ""
            })
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              "Max Collapse Tags",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props,
              "collapse-tags": "",
              "collapse-tags-tooltip": "",
              "max-collapse-tags": 3,
              clearable: ""
            })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "选择任意一级选项", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const props1 = {
      checkStrictly: true
    };
    const props2 = {
      multiple: true,
      checkStrictly: true
    };
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode(
              "p",
              null,
              "Select any level of options (Single selection)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props: props1,
              clearable: ""
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "p",
              null,
              "Select any level of options (Multiple selection)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              options,
              props: props2,
              clearable: ""
            })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "动态加载", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    let id = 0;
    const props = {
      lazy: true,
      lazyLoad(node, resolve) {
        const { level } = node;
        setTimeout(() => {
          const nodes = Array.from({ length: level + 1 }).map((item) => ({
            value: ++id,
            label: `Option - ${id}`,
            leaf: level >= 2
          }));
          resolve(nodes);
        }, 1e3);
      }
    };
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, { props });
    };
  }
});
return stdin_default;
 })() },
  { title: "可搜索", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "8",
  setup(__props) {
    const props = {
      multiple: true
    };
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode(
              "p",
              null,
              "Filterable (Single selection)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              placeholder: "Try searchingL Guide",
              options,
              filterable: ""
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "p",
              null,
              "Filterable (Multiple selection)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              placeholder: "Try searchingL Guide",
              options,
              props,
              filterable: ""
            })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义节点内容", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = { key: 0 };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "9",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, { options }, {
        default: _withCtx(({ node, data }) => [
          _createElementVNode(
            "span",
            null,
            _toDisplayString(data.label),
            1
            /* TEXT */
          ),
          !node.isLeaf ? (_openBlock(), _createElementBlock(
            "span",
            _hoisted_1,
            " (" + _toDisplayString(data.children.length) + ") ",
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义建议项2.9.5", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "10",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, {
        options,
        filterable: "",
        placeholder: "Try searching: Guide"
      }, {
        "suggestion-item": _withCtx(({ item }) => [
          _createElementVNode(
            "span",
            null,
            "\u{1F50D} " + _toDisplayString(item.pathLabels.join(" > ")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      });
    };
  }
});
return stdin_default;
 })() },
  { title: "级联面板", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "11",
  setup(__props) {
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              },
              {
                value: "color",
                label: "Color"
              },
              {
                value: "typography",
                label: "Typography"
              },
              {
                value: "icon",
                label: "Icon"
              },
              {
                value: "button",
                label: "Button"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              },
              {
                value: "checkbox",
                label: "Checkbox"
              },
              {
                value: "input",
                label: "Input"
              },
              {
                value: "input-number",
                label: "InputNumber"
              },
              {
                value: "select",
                label: "Select"
              },
              {
                value: "cascader",
                label: "Cascader"
              },
              {
                value: "switch",
                label: "Switch"
              },
              {
                value: "slider",
                label: "Slider"
              },
              {
                value: "time-picker",
                label: "TimePicker"
              },
              {
                value: "date-picker",
                label: "DatePicker"
              },
              {
                value: "datetime-picker",
                label: "DateTimePicker"
              },
              {
                value: "upload",
                label: "Upload"
              },
              {
                value: "rate",
                label: "Rate"
              },
              {
                value: "form",
                label: "Form"
              }
            ]
          },
          {
            value: "data",
            label: "Data",
            children: [
              {
                value: "table",
                label: "Table"
              },
              {
                value: "tag",
                label: "Tag"
              },
              {
                value: "progress",
                label: "Progress"
              },
              {
                value: "tree",
                label: "Tree"
              },
              {
                value: "pagination",
                label: "Pagination"
              },
              {
                value: "badge",
                label: "Badge"
              }
            ]
          },
          {
            value: "notice",
            label: "Notice",
            children: [
              {
                value: "alert",
                label: "Alert"
              },
              {
                value: "loading",
                label: "Loading"
              },
              {
                value: "message",
                label: "Message"
              },
              {
                value: "message-box",
                label: "MessageBox"
              },
              {
                value: "notification",
                label: "Notification"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "menu",
                label: "Menu"
              },
              {
                value: "tabs",
                label: "Tabs"
              },
              {
                value: "breadcrumb",
                label: "Breadcrumb"
              },
              {
                value: "dropdown",
                label: "Dropdown"
              },
              {
                value: "steps",
                label: "Steps"
              }
            ]
          },
          {
            value: "others",
            label: "Others",
            children: [
              {
                value: "dialog",
                label: "Dialog"
              },
              {
                value: "tooltip",
                label: "Tooltip"
              },
              {
                value: "popover",
                label: "Popover"
              },
              {
                value: "card",
                label: "Card"
              },
              {
                value: "carousel",
                label: "Carousel"
              },
              {
                value: "collapse",
                label: "Collapse"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          },
          {
            value: "sketch",
            label: "Sketch Templates"
          },
          {
            value: "docs",
            label: "Design Documentation"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader_panel = _resolveComponent("el-cascader-panel");
      return _openBlock(), _createBlock(_component_el_cascader_panel, { options });
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义标签 2.10.3", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createBlock: _createBlock, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "m-4" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "12",
  setup(__props) {
    const props = { multiple: true };
    const options = [
      {
        value: 1,
        label: "Asia",
        children: [
          {
            value: 2,
            label: "China",
            children: [
              { value: 3, label: "Beijing" },
              { value: 4, label: "Shanghai" },
              { value: 5, label: "Hangzhou" }
            ]
          },
          {
            value: 6,
            label: "Japan",
            children: [
              { value: 7, label: "Tokyo" },
              { value: 8, label: "Osaka" },
              { value: 9, label: "Kyoto" }
            ]
          },
          {
            value: 10,
            label: "Korea",
            children: [
              { value: 11, label: "Seoul" },
              { value: 12, label: "Busan" },
              { value: 13, label: "Taegu" }
            ]
          }
        ]
      },
      {
        value: 14,
        label: "Europe",
        children: [
          {
            value: 15,
            label: "France",
            children: [
              { value: 16, label: "Paris" },
              { value: 17, label: "Marseille" },
              { value: 18, label: "Lyon" }
            ]
          },
          {
            value: 19,
            label: "UK",
            children: [
              { value: 20, label: "London" },
              { value: 21, label: "Birmingham" },
              { value: 22, label: "Manchester" }
            ]
          }
        ]
      },
      {
        value: 23,
        label: "North America",
        children: [
          {
            value: 24,
            label: "US",
            children: [
              { value: 25, label: "New York" },
              { value: 26, label: "Los Angeles" },
              { value: 27, label: "Washington" }
            ]
          },
          {
            value: 28,
            label: "Canada",
            children: [
              { value: 29, label: "Toronto" },
              { value: 30, label: "Montreal" },
              { value: 31, label: "Ottawa" }
            ]
          }
        ]
      }
    ];
    const getTags = (data) => {
      return data.map((item) => item.text);
    };
    const getTopLevelTags = (data) => {
      const set = /* @__PURE__ */ new Set();
      for (const datum of data) {
        let parent = datum.node?.parent;
        while (parent && parent.level !== 1) {
          parent = parent.parent;
        }
        const label = parent?.data?.label;
        label && set.add(label);
      }
      return [...set];
    };
    return (_ctx, _cache) => {
      const _component_el_tag = _resolveComponent("el-tag");
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = _createElementVNode(
          "p",
          null,
          "Using slots allows for more flexible control over the display.",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_cascader, {
          options,
          props,
          clearable: ""
        }, {
          tag: _withCtx(({ data }) => [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(getTags(data), (item, index) => {
                return _openBlock(), _createBlock(_component_el_tag, {
                  key: item,
                  color: index % 2 === 0 ? "#FFDE0A" : ""
                }, {
                  default: _withCtx(() => [
                    _createTextVNode(
                      _toDisplayString(item),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["color"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        _cache[1] || (_cache[1] = _createElementVNode(
          "p",
          null,
          "Display top-level tags only",
          -1
          /* CACHED */
        )),
        _createVNode(_component_el_cascader, {
          options,
          props,
          clearable: ""
        }, {
          tag: _withCtx(({ data }) => [
            (_openBlock(true), _createElementBlock(
              _Fragment,
              null,
              _renderList(getTopLevelTags(data), (item) => {
                return _openBlock(), _createBlock(
                  _component_el_tag,
                  { key: item },
                  {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(item),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
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
  { title: "已勾选项显示策略 2.10.5", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "13",
  setup(__props) {
    const value1 = ref([]);
    const value2 = ref([]);
    const props = {
      multiple: true
    };
    const handleChange1 = (value) => {
      console.log("Child strategy:", value);
    };
    const handleChange2 = (value) => {
      console.log("Parent strategy:", value);
    };
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "p",
              null,
              "Strategy: child (default, show all selected child nodes)",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value1.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value1.value = $event),
              options,
              props,
              "show-checked-strategy": "child",
              clearable: "",
              onChange: handleChange1
            }, null, 8, ["modelValue"])
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              " Strategy: parent (show only parent nodes when all children are selected) ",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value2.value = $event),
              options,
              props,
              "show-checked-strategy": "parent",
              clearable: "",
              onChange: handleChange2
            }, null, 8, ["modelValue"])
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "点击选中节点 2.10.5", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-col items-center" };
const _hoisted_2 = { class: "flex flex-wrap" };
const _hoisted_3 = { class: "m-4" };
const _hoisted_4 = { class: "m-4" };
const { computed, ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "14",
  setup(__props) {
    const value = ref();
    const value2 = ref();
    const showPrefix = ref(true);
    const props1 = computed(() => ({
      showPrefix: showPrefix.value,
      checkStrictly: true,
      checkOnClickNode: true
    }));
    const props2 = computed(() => ({
      showPrefix: showPrefix.value,
      multiple: true,
      checkOnClickNode: true
    }));
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              }
            ]
          }
        ]
      },
      {
        value: "component",
        label: "Component",
        children: [
          {
            value: "basic",
            label: "Basic",
            children: [
              {
                value: "layout",
                label: "Layout"
              }
            ]
          },
          {
            value: "form",
            label: "Form",
            children: [
              {
                value: "radio",
                label: "Radio"
              }
            ]
          }
        ]
      },
      {
        value: "resource",
        label: "Resource",
        children: [
          {
            value: "axure",
            label: "Axure Components"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_switch, {
          modelValue: showPrefix.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showPrefix.value = $event),
          "active-text": "show prefix",
          "inactive-text": "hide prefix"
        }, null, 8, ["modelValue"]),
        _createElementVNode("div", _hoisted_2, [
          _createElementVNode("div", _hoisted_3, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              "checkStrictly | Single mode",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
              options,
              props: props1.value,
              clearable: ""
            }, null, 8, ["modelValue", "props"])
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[4] || (_cache[4] = _createElementVNode(
              "p",
              null,
              "Multiple mode",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_cascader, {
              modelValue: value2.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value2.value = $event),
              "show-checked-strategy": "parent",
              options,
              props: props2.value,
              clearable: ""
            }, null, 8, ["modelValue", "props"])
          ])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义头部与底部 2.10.5", css: "\n.cascader-custom-header-footer[data-v-6x8xpp] {\n\n  display: flex;\n}\n.cascader-custom-header-footer > div[data-v-6x8xpp] {\n\n  flex: 1;\n\n  text-align: center;\n}\n.cascader-custom-header-footer > div[data-v-6x8xpp]:not(:last-child) {\n\n  border-right: 1px solid var(--el-border-color);\n}\n.cascader-custom-header .el-checkbox[data-v-6x8xpp] {\n\n  display: flex;\n\n  height: unset;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "cascader-custom-header-footer" };
const { computed, ref, watch } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "15",
  setup(__props) {
    const props = { multiple: true };
    const checkAll = ref(false);
    const indeterminate = ref(false);
    const value = ref([]);
    const options = ref([
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              { value: "consistency", label: "Consistency" },
              { value: "feedback", label: "Feedback" },
              { value: "efficiency", label: "Efficiency" },
              { value: "controllability", label: "Controllability" }
            ]
          }
        ]
      }
    ]);
    const getAllValuePaths = computed(() => {
      const result = [];
      const queue = options.value.map(
        (node) => ({ node, path: [node.value] })
      );
      while (queue.length > 0) {
        const { node, path } = queue.shift();
        if (node.children?.length) {
          node.children.forEach((child) => {
            queue.push({ node: child, path: [...path, child.value] });
          });
        } else {
          result.push(path);
        }
      }
      return result;
    });
    watch(value, (val) => {
      if (val.length === 0) {
        checkAll.value = false;
        indeterminate.value = false;
      } else if (val.length === getAllValuePaths.value.length) {
        checkAll.value = true;
        indeterminate.value = false;
      } else {
        indeterminate.value = true;
      }
    });
    const handleCheckAll = (val) => {
      indeterminate.value = false;
      value.value = val ? getAllValuePaths.value : [];
    };
    const handleClear = () => {
      value.value = [];
    };
    return (_ctx, _cache) => {
      const _component_el_checkbox = _resolveComponent("el-checkbox");
      const _component_el_cascader = _resolveComponent("el-cascader");
      const _component_el_button = _resolveComponent("el-button");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _cache[4] || (_cache[4] = _createElementVNode(
            "p",
            null,
            "Custom header content",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_cascader, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
            "popper-class": "cascader-custom-header",
            options: options.value,
            props,
            clearable: ""
          }, {
            header: _withCtx(() => [
              _createVNode(_component_el_checkbox, {
                modelValue: checkAll.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
                indeterminate: indeterminate.value,
                onChange: handleCheckAll
              }, {
                default: _withCtx(() => [..._cache[3] || (_cache[3] = [
                  _createTextVNode(
                    " All ",
                    -1
                    /* CACHED */
                  )
                ])]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "indeterminate"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue", "options"])
        ]),
        _createElementVNode("div", null, [
          _cache[6] || (_cache[6] = _createElementVNode(
            "p",
            null,
            "Custom footer content",
            -1
            /* CACHED */
          )),
          _createVNode(_component_el_cascader, {
            modelValue: value.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
            options: options.value,
            props,
            clearable: ""
          }, {
            footer: _withCtx(() => [
              _createVNode(_component_el_button, {
                link: "",
                size: "small",
                onClick: handleClear
              }, {
                default: _withCtx(() => [..._cache[5] || (_cache[5] = [
                  _createTextVNode(
                    " Clear ",
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
          }, 8, ["modelValue", "options"])
        ])
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "虚拟滚动 2.14.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "16",
  setup(__props) {
    const value = ref([]);
    const filterMethod = (node, keyword) => {
      return node.text.toLowerCase().includes(keyword.toLowerCase());
    };
    const generateOptions = (count) => {
      return Array.from({ length: count }).map((_, index) => ({
        value: `option-${index}`,
        label: `Option ${index + 1}`,
        children: [
          {
            value: `child-${index}-1`,
            label: `Child ${index + 1}-1`,
            children: [
              {
                value: `grandchild-${index}-1-1`,
                label: `Grandchild ${index + 1}-1-1`
              },
              {
                value: `grandchild-${index}-1-2`,
                label: `Grandchild ${index + 1}-1-2`
              }
            ]
          },
          {
            value: `child-${index}-2`,
            label: `Child ${index + 1}-2`
          }
        ]
      }));
    };
    const options = ref(generateOptions(2e4));
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createBlock(_component_el_cascader, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        options: options.value,
        "filter-method": filterMethod,
        filterable: "",
        "virtual-scroll": "",
        clearable: "",
        placeholder: "Select with large data"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义建议面板宽度 2.14.0", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "flex flex-wrap gap-4 items-center" };
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "17",
  setup(__props) {
    const value = ref();
    const options = [
      {
        value: "guide",
        label: "Guide",
        children: [
          {
            value: "disciplines",
            label: "Disciplines",
            children: [
              {
                value: "consistency",
                label: "Consistency"
              },
              {
                value: "feedback",
                label: "Feedback"
              },
              {
                value: "efficiency",
                label: "Efficiency"
              },
              {
                value: "controllability",
                label: "Controllability"
              }
            ]
          },
          {
            value: "navigation",
            label: "Navigation",
            children: [
              {
                value: "side nav",
                label: "Side Navigation"
              },
              {
                value: "top nav",
                label: "Top Navigation"
              }
            ]
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_cascader = _resolveComponent("el-cascader");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_cascader, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          options,
          placeholder: "Default expanding panel",
          filterable: ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_cascader, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          options,
          placeholder: "Fit input width",
          filterable: "",
          "fit-input-width": ""
        }, null, 8, ["modelValue"]),
        _createVNode(_component_el_cascader, {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          options,
          placeholder: "Fixed width (400px)",
          filterable: "",
          "fit-input-width": 400
        }, {
          "suggestion-item": _withCtx(({ item }) => [
            _createElementVNode(
              "div",
              null,
              _toDisplayString(item.text) + " (Custom content that is very long)",
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])
      ]);
    };
  }
});
return stdin_default;
 })() },
];
