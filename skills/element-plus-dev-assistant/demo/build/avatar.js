window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["avatar"] = [
  { title: "基础用法", css: "\n.demo-basic[data-v-x78eb2] {\n\n  text-align: center;\n}\n.demo-basic .sub-title[data-v-x78eb2] {\n\n  margin-bottom: 10px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n.demo-basic .demo-basic--circle[data-v-x78eb2],\n\n.demo-basic .demo-basic--square[data-v-x78eb2] {\n\n  display: flex;\n\n  justify-content: space-between;\n\n  align-items: center;\n}\n.demo-basic .block[data-v-x78eb2]:not(:last-child) {\n\n  border-right: 1px solid var(--el-border-color);\n}\n.demo-basic .block[data-v-x78eb2] {\n\n  flex: 1;\n}\n.demo-basic .el-col[data-v-x78eb2]:not(:last-child) {\n\n  border-right: 1px solid var(--el-border-color);\n}\n@media screen and (max-width: 992px) {\n.demo-basic .el-col[data-v-x78eb2]:not(:last-child) {\n\n    border-right: none;\n}\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, withCtx: _withCtx, createBlock: _createBlock } = Vue;
const _hoisted_1 = { class: "demo-basic--circle" };
const _hoisted_2 = { class: "block" };
const _hoisted_3 = { class: "demo-basic--circle" };
const _hoisted_4 = { class: "block" };
const { reactive, toRefs } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const state = reactive({
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["small", "", "large"]
    });
    const { circleUrl, squareUrl, sizeList } = toRefs(state);
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      const _component_el_col = _resolveComponent("el-col");
      const _component_el_row = _resolveComponent("el-row");
      return _openBlock(), _createBlock(_component_el_row, { class: "demo-avatar demo-basic" }, {
        default: _withCtx(() => [
          _createVNode(_component_el_col, {
            lg: 12,
            md: 12
          }, {
            default: _withCtx(() => [
              _cache[0] || (_cache[0] = _createElementVNode(
                "div",
                { class: "sub-title" },
                "circle",
                -1
                /* CACHED */
              )),
              _createElementVNode("div", _hoisted_1, [
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_el_avatar, {
                    size: 50,
                    src: _unref(circleUrl)
                  }, null, 8, ["src"])
                ]),
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(_unref(sizeList), (size) => {
                    return _openBlock(), _createElementBlock("div", {
                      key: size,
                      class: "block"
                    }, [
                      _createVNode(_component_el_avatar, {
                        size,
                        src: _unref(circleUrl)
                      }, null, 8, ["size", "src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          _createVNode(_component_el_col, {
            lg: 12,
            md: 12
          }, {
            default: _withCtx(() => [
              _cache[1] || (_cache[1] = _createElementVNode(
                "div",
                { class: "sub-title" },
                "square",
                -1
                /* CACHED */
              )),
              _createElementVNode("div", _hoisted_3, [
                _createElementVNode("div", _hoisted_4, [
                  _createVNode(_component_el_avatar, {
                    shape: "square",
                    size: 50,
                    src: _unref(squareUrl)
                  }, null, 8, ["src"])
                ]),
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(_unref(sizeList), (size) => {
                    return _openBlock(), _createElementBlock("div", {
                      key: size,
                      class: "block"
                    }, [
                      _createVNode(_component_el_avatar, {
                        shape: "square",
                        size,
                        src: _unref(squareUrl)
                      }, null, 8, ["size", "src"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
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
  { title: "展示类型", css: "\n.demo-type[data-v-x6olpp] {\n\n  display: flex;\n}\n.demo-type > div[data-v-x6olpp] {\n\n  flex: 1;\n\n  text-align: center;\n}\n.demo-type > div[data-v-x6olpp]:not(:last-child) {\n\n  border-right: 1px solid var(--el-border-color);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, withCtx: _withCtx, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-type" };
const { UserFilled } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createElementVNode("div", null, [
          _createVNode(_component_el_avatar, { icon: _unref(UserFilled) }, null, 8, ["icon"])
        ]),
        _createElementVNode("div", null, [
          _createVNode(_component_el_avatar, { src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" })
        ]),
        _createElementVNode("div", null, [
          _createVNode(_component_el_avatar, null, {
            default: _withCtx(() => [..._cache[0] || (_cache[0] = [
              _createTextVNode(
                " user ",
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
  { title: "回退行为", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const _hoisted_1 = { class: "demo-type" };
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const errorHandler = () => true;
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_el_avatar, {
          size: 60,
          src: "https://empty",
          onError: errorHandler
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createElementVNode(
              "img",
              { src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" },
              null,
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
  { title: "适应容器", css: "\n.demo-fit[data-v-x5l0iz] {\n\n  display: flex;\n\n  text-align: center;\n\n  justify-content: space-between;\n}\n.demo-fit .block[data-v-x5l0iz] {\n\n  flex: 1;\n\n  display: flex;\n\n  flex-direction: column;\n\n  flex-grow: 0;\n}\n.demo-fit .title[data-v-x5l0iz] {\n\n  margin-bottom: 10px;\n\n  font-size: 14px;\n\n  color: var(--el-text-color-secondary);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode } = Vue;
const _hoisted_1 = { class: "demo-fit" };
const _hoisted_2 = { class: "title" };
const { reactive, toRefs } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const state = reactive({
      fits: [
        "fill",
        "contain",
        "cover",
        "none",
        "scale-down"
      ],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    });
    const { fits, url } = toRefs(state);
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(_unref(fits), (fit) => {
            return _openBlock(), _createElementBlock("div", {
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
              _createVNode(_component_el_avatar, {
                shape: "square",
                size: 100,
                fit,
                src: _unref(url)
              }, null, 8, ["fit", "src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
return stdin_default;
 })() },
  { title: "头像组 2.13.1", css: "\n.my-collapse-avatar {\n\n  color: #409eff;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withCtx: _withCtx } = Vue;
const _hoisted_1 = { class: "m-4" };
const _hoisted_2 = { class: "m-4" };
const _hoisted_3 = { class: "m-4" };
const _hoisted_4 = { class: "m-4" };
const _hoisted_5 = { class: "m-4" };
const circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_avatar = _resolveComponent("el-avatar");
      const _component_el_avatar_group = _resolveComponent("el-avatar-group");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = _createElementVNode(
              "p",
              null,
              "default",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_avatar_group, null, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(5, (number) => {
                    return _createVNode(_component_el_avatar, {
                      key: number,
                      src: circleUrl
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_2, [
            _cache[1] || (_cache[1] = _createElementVNode(
              "p",
              null,
              "use collapse-avatars",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_avatar_group, { "collapse-avatars": "" }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(5, (number) => {
                    return _createVNode(_component_el_avatar, {
                      key: number,
                      src: circleUrl
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_3, [
            _cache[2] || (_cache[2] = _createElementVNode(
              "p",
              null,
              "use collapse-class and collapse-style",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_avatar_group, {
              "collapse-avatars": "",
              "collapse-style": { "background-color": "#d9ecff" },
              "collapse-class": "my-collapse-avatar"
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(5, (number) => {
                    return _createVNode(_component_el_avatar, {
                      key: number,
                      src: circleUrl
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_4, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "p",
              null,
              "use max-collapse-avatars",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_avatar_group, {
              "collapse-avatars": "",
              "max-collapse-avatars": 3
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(5, (number) => {
                    return _createVNode(_component_el_avatar, {
                      key: number,
                      src: circleUrl
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _createElementVNode("div", _hoisted_5, [
            _cache[4] || (_cache[4] = _createElementVNode(
              "p",
              null,
              "use collapse-avatars-tooltip",
              -1
              /* CACHED */
            )),
            _createVNode(_component_el_avatar_group, {
              "collapse-avatars": "",
              "max-collapse-avatars": 3,
              "collapse-avatars-tooltip": ""
            }, {
              default: _withCtx(() => [
                (_openBlock(), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList(5, (number) => {
                    return _createVNode(_component_el_avatar, {
                      key: number,
                      src: circleUrl
                    });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
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
];
