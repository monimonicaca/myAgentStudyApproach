window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["tree-v2"] = [
  { title: "基础用法", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "0",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const data = createData(4, 30, 40);
    return (_ctx, _cache) => {
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        props,
        height: 200
      }, null, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "可选择的虚拟树", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "1",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const data = createData(4, 30, 40);
    return (_ctx, _cache) => {
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        props,
        "show-checkbox": "",
        height: 200
      }, null, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "禁用复选框", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "2",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0,
          disabled: nodeKey.includes("2")
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children",
      disabled: "disabled"
    };
    const data = createData(4, 30, 40);
    return (_ctx, _cache) => {
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        props,
        "show-checkbox": "",
        height: 200
      }, null, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "默认扩展和默认检查", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "3",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const data = createData(4, 30, 40);
    const checkedKeys = [];
    const expanedKeys = [];
    for (const datum of data) {
      const children = datum.children;
      if (children) {
        expanedKeys.push(datum.id);
        checkedKeys.push(children[0].id);
        break;
      }
    }
    const defaultCheckedKeys = ref(checkedKeys);
    const defaultExpandedKeys = ref(expanedKeys);
    return (_ctx, _cache) => {
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        height: 200,
        props,
        "show-checkbox": "",
        "default-checked-keys": defaultCheckedKeys.value,
        "default-expanded-keys": defaultExpandedKeys.value
      }, null, 8, ["data", "default-checked-keys", "default-expanded-keys"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义节点内容", css: "\n.prefix[data-v-fzl96w] {\n\n  color: var(--el-color-primary);\n\n  margin-right: 10px;\n}\n.prefix.is-leaf[data-v-fzl96w] {\n\n  color: var(--el-color-success);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, openBlock: _openBlock, createBlock: _createBlock, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString } = Vue;
const { Document, Folder, FolderOpened } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "4",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const data = createData(4, 30, 40);
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        props,
        height: 200
      }, {
        default: _withCtx(({ node }) => [
          _createVNode(
            _component_el_icon,
            { class: "el-icon--left" },
            {
              default: _withCtx(() => [
                node.isLeaf ? (_openBlock(), _createBlock(_unref(Document), { key: 0 })) : !node.expanded ? (_openBlock(), _createBlock(_unref(Folder), { key: 1 })) : (_openBlock(), _createBlock(_unref(FolderOpened), { key: 2 }))
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          ),
          _createElementVNode(
            "span",
            {
              class: _normalizeClass(["prefix", { "is-leaf": node.isLeaf }])
            },
            "[ElementPlus]",
            2
            /* CLASS */
          ),
          _createElementVNode(
            "span",
            null,
            _toDisplayString(node.label),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义节点类 2.9.0", css: "\n[data-v-g051s9] .is-penultimate .el-tree-node__label {\n\n  color: #626aef;\n\n  font-weight: 600;\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "5",
  setup(__props) {
    const customNodeClass = ({ isPenultimate }, node) => isPenultimate ? "is-penultimate" : "";
    const data = [
      {
        id: "1",
        label: "Level one 1",
        children: [
          {
            id: "4",
            label: "Level two 1-1",
            isPenultimate: true,
            children: [
              {
                id: "9",
                label: "Level three 1-1-1"
              },
              {
                id: "10",
                label: "Level three 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: "2",
        label: "Level one 2",
        isPenultimate: true,
        children: [
          {
            id: "5",
            label: "Level two 2-1"
          },
          {
            id: "6",
            label: "Level two 2-2"
          }
        ]
      },
      {
        id: "3",
        label: "Level one 3",
        isPenultimate: true,
        children: [
          {
            id: "7",
            label: "Level two 3-1"
          },
          {
            id: "8",
            label: "Level two 3-2"
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data,
        "show-checkbox": "",
        "expand-on-click-node": false,
        props: { class: customNodeClass }
      }, null, 8, ["props"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "自定义图标 2.10.3", css: "\n.node-icon[data-v-g0oudm] {\n\n  margin-right: 5px;\n\n  color: var(--el-color-warning);\n}\n\n\n", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { unref: _unref, openBlock: _openBlock, createBlock: _createBlock, resolveComponent: _resolveComponent, normalizeClass: _normalizeClass, withCtx: _withCtx, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode } = Vue;
const { Document, Folder, FolderOpened } = ElementPlusIconsVue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "6",
  setup(__props) {
    const getKey = (prefix, id) => {
      return `${prefix}-${id}`;
    };
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const data = createData(4, 30, 40);
    return (_ctx, _cache) => {
      const _component_el_icon = _resolveComponent("el-icon");
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createBlock(_component_el_tree_v2, {
        style: { "max-width": "600px" },
        data: _unref(data),
        props,
        height: 200
      }, {
        default: _withCtx(({ node }) => [
          _createVNode(_component_el_icon, {
            class: _normalizeClass(["node-icon", { "is-leaf": node.isLeaf }])
          }, {
            default: _withCtx(() => [
              node.isLeaf ? (_openBlock(), _createBlock(_unref(Document), { key: 0 })) : !node.expanded ? (_openBlock(), _createBlock(_unref(Folder), { key: 1 })) : (_openBlock(), _createBlock(_unref(FolderOpened), { key: 2 }))
            ]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class"]),
          _createElementVNode(
            "span",
            null,
            _toDisplayString(node.label),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"]);
    };
  }
});
return stdin_default;
 })() },
  { title: "树节点过滤 2.9.1", css: "", comp: (function(){ const { defineComponent: _defineComponent } = Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, unref: _unref, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue;
const { ref } = Vue;
var stdin_default = /* @__PURE__ */ _defineComponent({
  __name: "7",
  setup(__props) {
    const getKey = (prefix, id) => `${prefix}-${id}`;
    const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = "node") => {
      let id = 0;
      return Array.from({ length: minNodesNumber }).fill(deep).map(() => {
        const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
        const nodeKey = getKey(key, ++id);
        return {
          id: nodeKey,
          label: nodeKey,
          children: childrenNumber ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey) : void 0
        };
      });
    };
    const query = ref("");
    const treeRef = ref();
    const data = createData(4, 30, 5);
    const props = {
      value: "id",
      label: "label",
      children: "children"
    };
    const onQueryChanged = (query2) => {
      treeRef.value.filter(query2);
    };
    const filterMethod = (query2, node) => node.label.includes(query2);
    return (_ctx, _cache) => {
      const _component_el_input = _resolveComponent("el-input");
      const _component_el_tree_v2 = _resolveComponent("el-tree-v2");
      return _openBlock(), _createElementBlock(
        _Fragment,
        null,
        [
          _createVNode(_component_el_input, {
            modelValue: query.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event),
            style: { "width": "240px" },
            placeholder: "Please enter keyword",
            onInput: onQueryChanged
          }, null, 8, ["modelValue"]),
          _createVNode(_component_el_tree_v2, {
            ref_key: "treeRef",
            ref: treeRef,
            style: { "max-width": "600px" },
            data: _unref(data),
            props,
            "filter-method": filterMethod,
            height: 200
          }, null, 8, ["data"])
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
