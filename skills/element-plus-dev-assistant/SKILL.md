---
name: element-plus-dev-assistant
description: Element Plus 组件开发助手，覆盖组件代码的查找、编写与修改。当用户需要根据自然语言描述定位 Element Plus 组件并读取其使用手册，或在 Vue 项目中编写、修改 el-* 组件代码时使用。触发词包括 el-button、el-table、el-form 等 el-* 组件名、Element Plus、Element UI、Vue 组件、组件用法、组件属性、组件 API、修改组件、写组件。Use this skill whenever the user asks to build, modify, review, or debug Element Plus components, or to locate an Element Plus component's usage documentation from a natural-language description.

---

# Element Plus 组件开发助手

<skill>
  <purpose>
    帮助用户在 Vue 项目中使用 Element Plus：根据自然语言描述定位组件、读取使用手册，并编写或修改 el-* 组件代码。
  </purpose>

  <roles>
    <role>组件定位</role>
    <role>组件代码编写</role>
    <role>组件代码修改</role>
    <role>组件用法查阅</role>
  </roles>

  <triggers>
    <trigger>用户提到 el-* 组件名（el-button、el-table、el-form 等）</trigger>
    <trigger>用户提到 Element Plus / Element UI</trigger>
    <trigger>用户需要用 Element Plus 编写或修改组件</trigger>
    <trigger>用户需要查询组件用法、属性、API、插槽、事件、示例</trigger>
  </triggers>
</skill>

<workflow>
  <step name="identify-component">
    <description>
      读取 references/component-name-map.md，将用户的自然语言描述匹配到对应的组件名（elXxx）。
      该文件仅用于「用户输入 -> 组件名」的推断，不含路径。
    </description>
  </step>

  <step name="locate-doc">
    <description>
      执行 node getPath.js <组件名> 定位使用手册路径。
    </description>
    <branches>
      <branch on="exit=0 精确命中">
        <action>得到 component/&lt;name&gt;.md 路径</action>
        <next>进入 step confirm</next>
      </branch>
      <branch on="exit=2 存在候选">
        <action>脚本输出候选列表（组件名/中文名/路径）</action>
        <action>从中挑选最贴切的一个，或交由用户选择</action>
        <next>进入 step confirm</next>
      </branch>
      <branch on="exit=1 未找到">
        <action>向用户澄清真实意图</action>
        <action>列出几个最可能的组件让用户确认</action>
        <action>提示该能力可能不属于 Element Plus 组件</action>
        <action>不允许静默失败或猜测不存在的路径</action>
      </branch>
    </branches>
  </step>

  <step name="confirm">
    <description>
      定位到组件后，必须先向用户确认，再继续后续操作。
    </description>
    <prompt-template>
      「该组件主要用于 {组件功能描述}，是 {组件名}（{中文名}）吗？」
    </prompt-template>
    <rule>用户确认前，不进行读取或代码修改</rule>
  </step>

  <step name="read-doc">
    <description>读取对应 component/&lt;name&gt;.md，提取所需属性、API、插槽、事件与示例。</description>
    <rule>仅提取当前任务所需内容，不整篇粘贴手册</rule>
  </step>

  <step name="write-or-modify">
    <description>按手册内容在项目中实现或修改组件代码。</description>
    <rules>
      <rule>沿用项目现有的代码约定与模式</rule>
      <rule>不擅自引入新依赖</rule>
    </rules>
  </step>

  <step name="verify">
    <description>运行项目的 lint 与测试，确认改动正确无误。</description>
  </step>
</workflow>

<data-files>
  <file path="references/component-name-map.md">
    <role>用户输入 -> 组件名 的映射，供模型推断组件</role>
    <note>不含路径信息</note>
  </file>
  <file path="index.json">
    <role>组件 -> 手册路径 的索引，doc 字段指向 component/&lt;name&gt;.md，preview 字段指向 demo/&lt;name&gt;.html</role>
  </file>
  <file path="getPath.js">
    <role>命令行工具：组件名 -> 手册路径，支持精确匹配与模糊匹配（名称相似度 + 中文名包含）</role>
    <usage>优先使用本脚本获取路径，比手工拼接路径更可靠</usage>
  </file>
</data-files>

<rules>
  <rule>手册 md 仅作参考，只提取任务所需部分</rule>
  <rule>修改代码沿用项目已有模式，不擅自引入依赖</rule>
  <rule>遵循项目既有 lint / 测试约定</rule>
  <rule>定位组件后必须先向用户确认再操作</rule>
</rules>