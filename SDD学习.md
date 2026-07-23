# 前言

**SDD比较适合较为复杂的需求，如果是小的改动直接使用vibe coding就行**

更推荐使用 SDD 的场景包括：

- 新业务模块
- 复杂功能开发
- 多人协作项目
- 长期维护项目
- 大型重构

**如果一个需求预计会持续超过 2 天，通常就值得建立 Spec**

不太推荐使用 SDD 的场景包括：

- 过于简单的改动
- 纯样式调整
- 一次性方案验证
- 非持续性的临时脚本

**核心是：先定义规则，再进行实现，常见指令如下表所示**

| **指令名称**            | <br />   | <br />        | <br />                                 | <br />                             | <br />                               | <br />                        |
| :------------------ | :------- | :------------ | :------------------------------------- | :--------------------------------- | :----------------------------------- | :---------------------------- |
| **所在阶段**            | **核心作用** | **关键产出/目标**   | **绝对铁律 / 避坑要点**                        | <br />                             | <br />                               | <br />                        |
| **`openspec init`** | **准备期**  | 挂载 SDD 工程结构   | 生成 standard markdown 文档与配置             | 必须选择对应的 AI 工具（如 Codex/Claude Code） | <br />                               | <br />                        |
| **`/opsx:propose`** | **第一步**  | 规划需求、设计与任务拆解  | <br />                                 | `spec.md`, `design.md`, `tasks.md` | <br />                               | **绝不过早写代码**，生成完后**必须人工检查并修正** |
| **`/opsx:apply`**   | **第二步**  | 按照任务拆解严格执行编码  | 可运行、可单独提交的最小闭环代码                       | 搭配 `Skills`/`Hooks` 约束，每次只做最小任务闭环  | <br />                               | <br />                        |
| **`/opsx:sync`**    | **第三步**  | 动态同步变更，文档代码对齐 | 保持更新后的规范与实际代码逻辑一致                      | <br />                             | **需求变动先 sync 再 apply**；人工改代码后必须同步回文档 | <br />                        |
| **`/opsx:archive`** | **第四步**  | 总结历史踩坑与设计决策   | 沉淀至项目级规则库（主 Spec / Skills / AGENTS.md） | 必须在功能验证完备、验收通过后执行，让 AI 建立长期记忆      | <br />                               | <br />                        |

\
open spec(轻量)
=============

## 基础使用步骤（切换node版本要重新安装/后续可以学一下如何不重复安装）：

（使用pnpm安装了）安装[GitHub - Fission-AI/OpenSpec: Spec-driven development (SDD) for AI coding assistants. · GitHu](https://github.com/Fission-AI/OpenSpec)

在项目中执行 `openspec init`

之后重启codex才可以使用：原理是在初始化时为不同的工具创建了不同的配置文件，当重启codex时会去读取这个文件夹，然后才能识别出相关基础命令

生成的目录结构如下

```
openspec/
├── specs/              # Source of truth (your system's behavior)
│   └── <domain>/
│       └── spec.md
├── changes/            # Proposed updates (one folder per change)
│   └── <change-name>/
│       ├── proposal.md
│       ├── design.md
│       ├── tasks.md
│       └── specs/      # Delta specs (what's changing)
│           └── <domain>/
│               └── spec.md
└── config.yaml         # Project configuration (optional)

```

<br />

| <br />        | <br />                          |
| :------------ | :------------------------------ |
| spec.md       | 定义需求、边界、行为、约束、验收标准，作为 AI 的长期上下文 |
| `design.md`   | 记录具体的技术方案与实现设计                  |
| `proposal.md` | 描述背景、目标、影响面与推进理由                |
| `tasks.md`    | 任务拆解与执行进度参考                     |

## 基础命令

基本开发流程如下图

![](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9ba960eb897540bbaa6ce94bf14ec72b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5Y-k6IyX5YmN56uv5Zui6Zif:q75.awebp?rk3s=f64ab15b\&x-expires=1784505271\&x-signature=e3It%2BWnrnvPjTMWvMc1Jn6WlNDk%3D)

### 生成spec文档

先使用 `/opsx:propose + 需求内容、技术方案等` 生成一版 Spec 文档，MCP 的能力，让 AI 能够直接获取散落在 `Figma`、语雀、`Yapi` 等工具里的上下文。把研发流程中常用的数据源统一封装到 MCP Server 中。之后就不用需要输入大量文字在终端，直接用下面这种模式

```
/opsx:propose 
产品文档： 链接1
技术方案： 链接2
...

```

AI 输出完成之后，仍然需要我们介入检查。因为当前项目可能还没有足够多的历史 Spec，AI 对业务知识的理解并不完整，生成内容里可能会出现错误的业务词汇、不合理的架构设计等问题。这时直接修改生成的 Spec 文档即可。随着 Spec 持续丰富，后续生成时这类问题也会越来越少。

**注意：这里可能需要特别说明只是生成文档，否则AI可能越级帮你修改代码**

### 生成代码

`/opsx:apply` 让 AI 根据 Spec 文档快速生成代码，但是`/opsx:apply` 虽然理解了业务名词和逻辑，但仍然会扩大改动范围，或者产出一些不符合团队规范的命名和实现。这一步我们就需要借助一些额外的手段来约束这些不规范行为：通过skills，AGENTS.md文档，hooks。

#### skills

将Skills 分为两层 底层 Skill（约束模型） + 上层 Skill（指导模型理解业务）

用这个skill（官方支持Claude code，也有支持codex的仓库），自己的经验也可以放进这个skill中<https://github.com/multica-ai/andrej-karpathy-skills>

底层skill是“给模型的长期工作习惯”，放一些编码通用规则，比如：

- 编码前先思考
- 优先做小改动，不随意扩大范围
- 修改后要自查并说明影响面
- 遇到不确定的地方先确认，不要硬猜
- ...

这类的通用规则放在工具全局，所有项目共享使用。

- 我们的项目架构哪一层负责请求，哪一层负责数据处理
- 组件命名习惯
- 业务里的专有名词
- 哪些历史坑不能再踩

这部分更适合做成项目级 Skill，持续迭代，放在我们的项目中。

#### AGENTS.md

很多 AI Coding 工具都会优先读取项目中的规则说明文件。它适合放那些“进入项目后默认就该知道”的内容，可以把它理解成：**项目给 AI 的入场说明书。AGENTS.md 的读取时机会通常（看什么工具）比 Skills 更早，因此它特别适合放最底层、最稳定的项目规则**

例如，比较适合放进去的内容包括：

- 项目结构怎么读
- 哪些规范优先级最高
- 哪些目录或文件不要随便改
- ...

#### Hooks（强验证和规范代码）

很多 AI Coding 工具都提供了 Hook 能力，允许我们在特定生命周期节点执行脚本。以 Codex Hooks 为例，常见的节点包括：

- `UserPromptSubmit`：用户提示词提交后、AI 接收前
- `PreToolUse`：调用工具前，可以拦截高风险操作
- `PostToolUse`：工具执行后、结果返回给 AI 前
- `Stop`：会话停止前，可执行检查、测试或 CR 流程

步骤是：首先要先写一个脚本文件，例如

```Shell
#!/bin/bash

FILE="$1"

# 检测中文
if grep -nE '[\u4e00-\u9fa5]' "$FILE"; then
  echo ""
  echo "检测到中文硬编码"
  echo "请改成："
  echo "t('xxx')"
  exit 2
fi

exit 0
```

然后配置这个脚本文件在什么生命周期下调用\
在你的项目根目录或个人配置目录（如 `./.claude/settings.json` 或项目级 `.openspec/` 配置文件下）中添加 `hooks` 声明：

```JSON
{
  "Hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "Hooks": [
          {
            "type": "command",
            "command": "./scripts/check-i18n.sh $CLAUDE_FILE"
          }
        ]
      }
    ]
  }
}
$CLAUDE_FILE是AI更改的文件地址，将其传给脚本，脚本中的$1接收这个地址
```

### 规格同步

发生一些计划外的变化：代码写到一半，产品临时调整了交互；后端接口字段发生变化；开发过程中发现原来的技术方案走不通；或者 review 时发现某个边界场景之前没有考虑到等。

如果只改代码、不更新 Spec，就会埋下一个问题：**代码已经变了，但 AI 后续读取到的规则还是旧的。**

短期看，这可能没什么影响，因为当前会话里大家都还记得发生了什么。但一旦换一个会话，或者过几天继续迭代，AI 仍然会按照旧 Spec 理解需求。结果就是：它可能把你刚修过的逻辑又改回去，或者在旧规则基础上继续生成代码，导致代码和规格越来越不一致。

这个时候有两种做法：

1. 先通过 `/opsx:sync + 变动描述`，去修改 Spec 文档，然后基于最新的 Spec 文档去 `/opsx:apply`
2. 特殊情况我们手动修改了代码，然后一定要使用 `/opsx:sync + 描述`，去更新 Spec

这样就可以保证我们的代码和 Spec 保持一致。

### 归档沉淀

通过/opsx:archive**把一次临时协作中产生的有效经验，沉淀成后续可以复用的项目上下文。后续类似需求就能直接复用这条经验。**
