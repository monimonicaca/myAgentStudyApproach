window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["affix"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-affix :offset=\"120\">\n\n    <el-button type=\"primary\">Offset top 120px</el-button>\n\n  </el-affix>\n\n" } },
  { title: "指定容器", css: "\n.affix-container {\n\n  text-align: center;\n\n  height: 400px;\n\n  border-radius: 4px;\n\n  background: var(--el-color-primary-light-9);\n}\n\n\n", comp: { template: "\n\n  <div class=\"affix-container\">\n\n    <el-affix target=\".affix-container\" :offset=\"80\">\n\n      <el-button type=\"primary\">Target container</el-button>\n\n    </el-affix>\n\n  </div>\n\n" } },
  { title: "固定位置", css: "", comp: { template: "\n\n  <el-affix position=\"bottom\" :offset=\"20\">\n\n    <el-button type=\"primary\">Offset bottom 20px</el-button>\n\n  </el-affix>\n\n" } },
];
