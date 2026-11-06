window.__EXAMPLES__ = window.__EXAMPLES__ || {};
window.__EXAMPLES__["card"] = [
  { title: "基础用法", css: "", comp: { template: "\n\n  <el-card style=\"max-width: 480px\">\n\n    <template #header>\n\n      <div class=\"card-header\">\n\n        <span>Card name</span>\n\n      </div>\n\n    </template>\n\n    <p v-for=\"o in 4\" :key=\"o\" class=\"text item\">{{ 'List item ' + o }}</p>\n\n    <template #footer>Footer content</template>\n\n  </el-card>\n\n" } },
  { title: "简单卡片", css: "", comp: { template: "\n\n  <el-card style=\"max-width: 480px\">\n\n    <p v-for=\"o in 4\" :key=\"o\" class=\"text item\">{{ 'List item ' + o }}</p>\n\n  </el-card>\n\n" } },
  { title: "有图片内容的卡片", css: "", comp: { template: "\n\n  <el-card style=\"max-width: 480px\">\n\n    <template #header>Yummy hamburger</template>\n\n    <img\n\n      src=\"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png\"\n\n      style=\"width: 100%\"\n\n    />\n\n  </el-card>\n\n" } },
  { title: "带有阴影效果的卡片", css: "", comp: { template: "\n\n  <div class=\"flex flex-wrap gap-4\">\n\n    <el-card style=\"width: 480px\" shadow=\"always\">Always</el-card>\n\n    <el-card style=\"width: 480px\" shadow=\"hover\">Hover</el-card>\n\n    <el-card style=\"width: 480px\" shadow=\"never\">Never</el-card>\n\n  </div>\n\n" } },
];
