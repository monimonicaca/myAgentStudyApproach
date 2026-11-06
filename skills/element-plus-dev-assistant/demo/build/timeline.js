window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["timeline"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const activities = [
      {
        content: "Event start",
        timestamp: "2018-04-15"
      },
      {
        content: "Approved",
        timestamp: "2018-04-13"
      },
      {
        content: "Success",
        timestamp: "2018-04-11"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_timeline_item = _resolveComponent("el-timeline-item");
      const _component_el_timeline = _resolveComponent("el-timeline");
      return _openBlock(), _createBlock(_component_el_timeline, null, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(activities, (activity, index) => {
              return _createVNode(_component_el_timeline_item, {
                key: index,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(activity.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["timestamp"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "Mode 2.13.1", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const activities = [
      {
        content: "Event start",
        timestamp: "2018-04-15"
      },
      {
        content: "Approved",
        timestamp: "2018-04-13"
      },
      {
        content: "Success",
        timestamp: "2018-04-11"
      }
    ];
    const mode = ref("start");
    return (_ctx, _cache) => {
      const _component_el_radio_button = _resolveComponent("el-radio-button");
      const _component_el_radio_group = _resolveComponent("el-radio-group");
      const _component_el_timeline_item = _resolveComponent("el-timeline-item");
      const _component_el_timeline = _resolveComponent("el-timeline");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_radio_group, {
            modelValue: mode.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event)
          }, {
            default: _withCtx(() => [
              _createVNode(_component_el_radio_button, {
                label: "start",
                value: "start"
              }),
              _createVNode(_component_el_radio_button, {
                label: "alternate",
                value: "alternate"
              }),
              _createVNode(_component_el_radio_button, {
                label: "alternate-reverse",
                value: "alternate-reverse"
              }),
              _createVNode(_component_el_radio_button, {
                label: "end",
                value: "end"
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_el_timeline, {
            class: "mt-4",
            mode: mode.value
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createElementBlock(
                _Fragment,
                null,
                _renderList(activities, (activity, index) => {
                  return _createVNode(_component_el_timeline_item, {
                    key: index,
                    timestamp: activity.timestamp
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(activity.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["timestamp"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["mode"])
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
return stdin_default;
 })() },
  { title: "⾃定义节点样式", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = Vue;
const { MoreFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const activities = [
      {
        content: "Custom icon",
        timestamp: "2018-04-12 20:46",
        size: "large",
        type: "primary",
        icon: MoreFilled
      },
      {
        content: "Custom color",
        timestamp: "2018-04-03 20:46",
        color: "#0bbd87"
      },
      {
        content: "Custom size",
        timestamp: "2018-04-03 20:46",
        size: "large"
      },
      {
        content: "Custom hollow",
        timestamp: "2018-04-03 20:46",
        type: "primary",
        hollow: true
      },
      {
        content: "Default node",
        timestamp: "2018-04-03 20:46"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_timeline_item = _resolveComponent("el-timeline-item");
      const _component_el_timeline = _resolveComponent("el-timeline");
      return _openBlock(), _createBlock(_component_el_timeline, null, {
        default: _withCtx(() => [
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList(activities, (activity, index) => {
              return _createVNode(_component_el_timeline_item, {
                key: index,
                icon: activity.icon,
                type: activity.type,
                color: activity.color,
                size: activity.size,
                hollow: activity.hollow,
                timestamp: activity.timestamp
              }, {
                default: _withCtx(() => [
                  _createTextVNode(
                    _toDisplayString(activity.content),
                    1
                    /* TEXT */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["icon", "type", "color", "size", "hollow", "timestamp"]);
            }),
            64
            /* STABLE_FRAGMENT */
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
  { title: "⾃定义时间戳", css: "", comp: { template: "\n\n  <el-timeline>\n\n    <el-timeline-item timestamp=\"2018/4/12\" placement=\"top\">\n\n      <el-card>\n\n        <h4>Update Github template</h4>\n\n        <p>Tom committed 2018/4/12 20:46</p>\n\n      </el-card>\n\n    </el-timeline-item>\n\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n\n      <el-card>\n\n        <h4>Update Github template</h4>\n\n        <p>Tom committed 2018/4/3 20:46</p>\n\n      </el-card>\n\n    </el-timeline-item>\n\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n\n      <el-card>\n\n        <h4>Update Github template</h4>\n\n        <p>Tom committed 2018/4/2 20:46</p>\n\n      </el-card>\n\n    </el-timeline-item>\n\n  </el-timeline>\n\n" } },
  { title: "垂直居中", css: "", comp: { template: "\n\n  <el-timeline>\n\n    <el-timeline-item center timestamp=\"2018/4/12\" placement=\"top\">\n\n      <el-card>\n\n        <h4>Update Github template</h4>\n\n        <p>Tom committed 2018/4/12 20:46</p>\n\n      </el-card>\n\n    </el-timeline-item>\n\n    <el-timeline-item timestamp=\"2018/4/3\" placement=\"top\">\n\n      <el-card>\n\n        <h4>Update Github template</h4>\n\n        <p>Tom committed 2018/4/3 20:46</p>\n\n      </el-card>\n\n    </el-timeline-item>\n\n    <el-timeline-item center timestamp=\"2018/4/2\" placement=\"top\">\n\n      Event start\n\n    </el-timeline-item>\n\n    <el-timeline-item timestamp=\"2018/4/2\" placement=\"top\">\n\n      Event end\n\n    </el-timeline-item>\n\n  </el-timeline>\n\n" } },
  { title: "反向 2.11.9", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createTextVNode: _createTextVNode, withCtx: _withCtx } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const reverse = ref(true);
    const activities = [
      {
        content: "Event start",
        timestamp: "2018-04-15"
      },
      {
        content: "Approved",
        timestamp: "2018-04-13"
      },
      {
        content: "Success",
        timestamp: "2018-04-11"
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_switch = _resolveComponent("el-switch");
      const _component_el_timeline_item = _resolveComponent("el-timeline-item");
      const _component_el_timeline = _resolveComponent("el-timeline");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_switch, {
            modelValue: reverse.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => reverse.value = $event),
            "active-text": "reverse"
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_timeline, {
            class: "mt-2",
            reverse: reverse.value
          }, {
            default: _withCtx(() => [
              (_openBlock(), _createElementBlock(
                _Fragment,
                null,
                _renderList(activities, (activity, index) => {
                  return _createVNode(_component_el_timeline_item, {
                    key: index,
                    timestamp: activity.timestamp
                  }, {
                    default: _withCtx(() => [
                      _createTextVNode(
                        _toDisplayString(activity.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["timestamp"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["reverse"])
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
