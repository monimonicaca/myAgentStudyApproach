<purpose>
准确理解用户需求。
</purpose>

<principles>
- 用户说"简单做"就别追问边界条件，先做完再问。
- 每次只聚焦一个问题领域，不要发散。
- 用业务语言，别用技术术语解释用户的需求。
- 不确定时直接问，不要猜。
</principles>

<steps>

### 1. 询问需求文档

```json
{
  question: "你是否有需求文档？",
  header: "需求来源",
  options: [
    { label: "有", description: "提供需求文档路径或链接" },
    { label: "没有", description: "通过其他方式提供需求" },
    { label: "跳过：执行脚本", description: "暂未实现" }
  ]
}
```

- 选"有" → 进入 2
- 选"没有" → 进入 3

### 2. 获取文档地址

```json
{
  question: "请提供需求文档的路径或链接：",
  header: "文档路径",
  options: [],
  multiple: false
}
```

读取文档内容后 → 进入 5

### 3. 选择输入方式

```json
{
  question: "如何提供需求？",
  header: "输入方式",
  options: [
    { label: "自己输入", description: "直接描述你的需求" },
    { label: "深度提问", description: "由 AI 通过 interview-me 技能引导挖掘真实需求" }
  ]
}
```

- 选"自己输入" → 进入 4
- 选"深度提问" → 加载 `skills/interview-me/SKILL.md` 技能与用户对话

### 4. 接收用户输入

用户自行描述需求。拿到需求描述后，进入 5。

### 5. 收拢与确认契约

把获取到的需求收敛成明确的后端开发契约。

- 接口路径、方法、请求体/响应体结构
- 状态码和错误码定义
- 业务规则一句话总结

### 6. 让用户确认

> 总结以上，我理解的需求是：[一句话]。涉及 [N] 个接口，核心实体是 [X, Y]。是否有遗漏或需要调整的地方？

确认后再进入下一步（设计/实现）。

</steps>

<output>
（待补充）
</output>