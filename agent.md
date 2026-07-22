# MCP

来源与参考：<https://juejin.cn/post/7568192652287246390>

Model Context Protoco 是一个开放协议，它为应用程序向 LLM 提供上下文的方式进行了标准化。你可以将 MCP 想象成 AI 应用程序的`USB-C`接口。`USB-C` : 为设备连接各种外设和配件提供了标准化的方式一样，MCP 为 AI 模型连接各种数据源和工具提供了标准化的接口安全，可以做到即插即用。

## 一些专业名词：

- MCP Clients: 维护与服务器一对一连接的协议客户端
- MCP Servers: 轻量级程序，通过标准的 Model Context Protocol 提供特定能力
- 本地数据源: MCP 服务器可安全访问的计算机文件、数据库和服务
- 远程服务: MCP 服务器可连接的互联网上的外部系统（如通过 APIs）
- MCP协议：传输都使用 JSON-RPC([www.jsonrpc.org/](https://link.juejin.cn?target=https%3A%2F%2Fwww.jsonrpc.org%2F "https://www.jsonrpc.org/")) 2.0 进行消息交换
- MCP Hosts: 如 Claude Desktop、IDE、Curson 或 AI 工具，希望通过 MCP 访问数据的程序

## 传输机制

MCP 定义的是客户端和服务器之间如何通信，最常用的则是 `stdio`（标准输入输出）。

<br />

## 核心模块

- Resource：提供给 clients 的任何类型的数据，通过\[protocol]://\[host]/\[path]
- Prompts：允许 servers 定义可复用的提示模板和工作流，clients 可以轻松地将它们呈现给用户和 LLMs。它们提供了一种强大的方式来标准化和共享常见的 LLM 交互。
- **Tools**：servers 能够向 clients 暴露可执行功能。通过 tools，LLMs 可以与外部系统交互、执行计算并在现实世界中采取行动。最重要的工具，辅助AI我们可以自定义完成很 `LLM`不能完成的能力
- Sampling（采样）：它允许 servers 通过 client 请求 LLM 补全，从而实现复杂的 agentic 行为，同时保持安全性和隐私性
- Roots：定义了 servers 可以操作的边界。当 client 连接到 server 时，它声明 server 应该使用哪些 roots（URI,HTTP URL）

  <br />

# SKILL

以andrej-karpathy-skills为例，它目前只支持cursor和Claude code，对于不同的AI工具，skill存放的目录不同，工具如何读取skill的规则也不同，所以可以通过将这个工具接入codex的方式来学习一个skill的开发与改造，除此之外，由于这个skill它后续可能会有变化，所以改造接入到codex之后，需要不定时的向上游查看是否有更新，这样才会不错过最新的更新

## Claude code

- 最核心目录是 `~/.claude/skills/` 和项目内 `.claude/skills/`。
- Claude 会根据 skill 的 `description` 自动决定何时加载，也可以手动用 `/skill-name` 调用。

| 范围      | 目录                                       |
| :------ | :--------------------------------------- |
| 所有项目可用  | \~/.claude/skills/\<skill-name>/SKILL.md |
| 某一项目可用  | .claude/skills/\<skill-name>/SKILL.md    |
| 插件启动时可用 | \<plugin>/skills/\<skill-name>/SKILL.md  |

