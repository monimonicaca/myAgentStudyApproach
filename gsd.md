# 前言

这是作者的技术文档，可以去看看大神的开发思路，而且写的很详细

<https://github.com/open-gsd/gsd-core/blob/next/docs/zh-CN/ARCHITECTURE.md>

**如有错误欢迎指正，特别需要大神带带**

## 大体路径

当我们使用gsd的相关工具时，大体的路径是这样的（以gsd-new-project为例）：

```
当使用命令时首先会去读取这个工作流文件
gsd-core\workflows\new-project.md
然后根据工作流中的定义在适当的时候会读取下面这三个文件
---->
gsd-core\workflows\new-project\steps\auto-mode-config.md
gsd-core\workflows\new-project\steps\auto-mode-detection.md
gsd-core\workflows\new-project\steps\codebase-map-offer.md
```

但是如果是比较简单的命令，可能不会有同名文件夹下的steps目录，也就是gsd-core\workflows\new-project\steps\，就源码来看，只有这几个命令会有steps目录\
![](data:image/png;base64,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)

## 最核心的优势

我认为这个框架相比于BMAD的最大的优势是它会根据当前上下文的窗口大小来决定是否要开启一个新的上下文，同时在执行工作流的时候，并不是将所有的工作都交给当前agent，而是会按需开启新的agent，主agent会等待子agent的工作完成才会继续向下运行。这样子就不用我们手动去开启新的上下文窗口了。比如使用BMAD时，调用mary生成文档后，再次调用john生成prd会在同一个窗口下，除非自己手动开启新窗口；除此之外，如果mary识别到你需要调用skill，它采取的策略是读取相应skill的SKILL.md文档，这又会消耗上下文窗口。所以gsd可以尽可能的避免上下文腐化的问题。

但是每个AI工具开启的子agent的方法都不同（比如codex是spawn，而Claude是Agent()），所以gsd会根据运行时来对其进行转化。通过src\runtime-artifact-conversion.cts文件根据不同运行时来将适配于claude的相关命令等（不仅仅是关于子agent创建的）转换为适配于不同运行时的（太多了看不过来）。

**我们可以通过这个文件来了解不同AI工具下的api区别或者命令区别。**

# 详细解读

当我们使用一个AI工具的时候通常会去看skills目录，可以看到gsd源码中有skills目录，codex中通过\$gsd-skill调用某一个skill，然后读取skill的SKILL.md文档，但是作者写的命令入口是commands/gsd/\*.md，因为在安装的时候会将这个转换为不同AI根据下适配的架构，两个文件好像没有差别，可能是刚开始这个工具是专为claude code设计的，所以保留了skills目录(我认为)所以会有硬编码的.claude。

除此之外，这个SKILL.md文档中有上下文字段execution\_context，这个execution\_context就是workflow文档中规定的必读的上下文文档。这也是我建议从一个具体的例子开始的原因，因为作者说明时直接从workflow开始的，所以我直接去看的workflow，就有这个令我疑惑的execution\_context。

所以我选择先从gsd-new-project这个例子开始，直接看作者的文档会很蒙，因为他是从宏观来写的，而我没那么聪明，之后再将作者的说明跟这个具体的命令结合起来读，会更好理解。

## 安装

研究一个由npm管理的工具时，首先从**package.json**文件开始，这里会有这个工具提供的命令还有使用npm运行某一个命令时执行的脚本命令，但是这个工具的安装命令是**npx @opengsd/gsd-core\@latest**，而**npx需要关注bin字段**，首先会找**lates**t指向的版本，比如最新版本是1.40,那么这个命令就是npx @opengsd/gsd-core\@1.40.然后会去找bin字段找gsd-core命令对应执行的脚本，也就是bin/install.js。问了下gpt（实在没有脑容量看了，燃尽了），它说这个脚本的作用是将gsd源码转换成可以适配不同AI工具的格式，同时也可以根据参数执行部分，而不是整个脚本，比如--codex表示直接转换为codex下的就行，--global表示安装在全局。否则就会询问你。

## 路由

### 层级路由

关于每个agent的路由，作者说是采用了**层级路由**，可以将其跟BMAD method对比着来看。和BMAD设计一样，使用路由来标明每个agent的位置和作用，而不是简单的全都列出来。

作者原话：
为控制急于列举技能的 token 开销，v1.40 引入了六个命名空间元技能（gsd-workflow、gsd-project、gsd-quality、gsd-context、gsd-manage、gsd-ideate——源自 commands/gsd/ns-\*.md，但可调用的 name: 为此处显示的简短形式），位于具体子技能之上。模型看到的是 6 个命名空间路由器（约 120 个 token），而非扁平的 86 个技能列表（约 2,150 个 token），选择命名空间后通过嵌入在命名空间路由器主体中的路由表路由到具体子技能。命名空间技能是可叠加的——每个具体命令仍可直接调用，这里也和BMAD一样，因为本质上都是skill，自然可以直接调用。

什么意思呢？我们将其跟BMAD进行对比着来看。当我们在对话框（codex或者其他的）中输入mary时，模型会知道mary对应的是哪一个skill，然后在这个skill目录下定义了mary可以调用的其他skill，包括description和skill，然后会根据我们的需求去和description对应再调取相应的skill。gsd的层级路由和这个的思路也是一样的。

当我们打开AI工具时，gsd-workflow、gsd-project、gsd-quality、gsd-context、gsd-manage、gsd-ideate这几个skill的description等（就是SKILL.md头部YAML语法定义的部分）和路径会被加载到当前窗口上下文中。当我向大模型输入需求，比如‘帮我创建一个新项目’，那么大模型在解析到之后会跟gsd-project对应上，然后去读取它对应的SKILL.md文件，下面就是这个gsd-project的SKILL.md文件，可以看到这个文件中记录了所有和project相关的skill。当大模型读取这个之后会根据我们的需求和这里的skill对应上，接着去调用对应的skill，这个就是gsd的层级路由的工作模式，是不是跟BMAD很像(\*^\_^\*)。

```
---
name: gsd-project
description: "project lifecycle | milestones audits summary"
argument-hint: ""
allowed-tools:
  - Read
  - Skill
requires: [new-project, onboard, new-milestone, complete-milestone, audit-milestone, milestone-summary, import, ingest-docs, profile-user, review-backlog]
---

Route to the appropriate project / milestone skill based on the user's intent.
`gsd-plan-milestone-gaps` was deleted by #2790 — gap planning now happens
inline as part of `gsd-audit-milestone`'s output.

| User wants | Invoke |
|---|---|
| Start a new project | gsd-new-project |
| Onboard an existing codebase | gsd-onboard |
| Create a new milestone | gsd-new-milestone |
| Complete the current milestone | gsd-complete-milestone |
| Audit a milestone for issues | gsd-audit-milestone |
| Summarize milestone status | gsd-milestone-summary |
| Import an external plan | gsd-import |
| Bootstrap planning from existing docs | gsd-ingest-docs |
| Generate a developer profile | gsd-profile-user |
| Review and promote backlog items | gsd-review-backlog |

Invoke the matched skill directly using the Skill tool.

```

### 不同之处

当一个AI工具启动时，它会去扫描skills目录下的所有已安装的skill（这里不同的AI工具定义的目录名不同，但是基本路径是一样的），然后将这些skill的SKILL.md文件的YAML部分加载到当前上下文当中，这也就造成了一个问题，如果安装的skill太多，是否会占很多token？答案是不会，因为一般AI工具都会给skill所占的上下文有一个最大限制。那么又有一个新问题了，当skill过多，可能会有某些skill没有被扫描到或者某些的skill加载到上下文中的YAML被截断（或者其他的问题，主要看AI工具如何设计）。

gsd的层级路由可以一定程度上解决这个问题，虽然AI工具会扫描skills目录来加载skill，但是一般只扫描顶级目录，gsd就是利用这个来节省skill加载的token的。在它安装的时候，只把gsd-workflow、gsd-project、gsd-quality、gsd-context、gsd-manage、gsd-ideate安装在顶级目录中，其他的skill则安装到嵌套路由中，同时路由表被改写（如下表），因为这些skill不会被扫描到所以需要告诉大模型去哪里找到它们。这样就实现了作者说的“模型看到的是 6 个命名空间路由器（约 120 个 token），而非扁平的 86 个技能列表（约 2,150 个 token）”。

| 原文                                       | 改写后                                                     |
| :--------------------------------------- | :------------------------------------------------------ |
| \| Create a PLAN.md \| gsd-plan-phase \| | \| Create a PLAN.md \| Read \skills/plan-phase/SKILL.md |

与之相对的BMAD则没有这种优化，安装了BMAD之后会将这些平铺在skills目录下。

### 注意点

并不是所有的AI工具都支持嵌套路由，是否嵌套安装由AI工具来决定。gsd源码中注释说明大部分的AI工具其实都是采取的平铺模式安装（如下文代码块），但是这种设计模式仍然值得我们学习，不仅在真正的对话中节省token，在skill的说明部分也可以考虑节省token。

当我们安装skill时，最好将自己常用的skill或者是自己的skill安装在全局，而对于向市面上比较重型的工具，比如BMAD或者gsd，最好是安装在项目下。

```typescript
//   NEST (confirmed non-recursive / one-level scan):
//     cline      — cline/cline skills.ts scanSkillsDirectory uses flat fs.readdir
//     qwen       — QwenLM/qwen-code skill-load.ts flat readdir ("depth 2 enough")
//     hermes     — hermes-agent.nousresearch.com/docs/user-guide/features/skills
//                  (single-level subdir probe of the tap path)
//     augment    — https://docs.augmentcode.com/cli/skills (flat single-level)
//     trae       — docs.trae.ai/ide/skills + Trae-AI/TRAE#2253 (flat; nesting errors)
//                  Trae IDE (trae.ai), not trae-agent — see runtime-homes.cts header note
//   FLAT (recursive loader → nesting gives no saving):
//     cursor     — https://cursor.com/docs/skills (walks skills root recursively)
//     opencode   — sst/opencode skill/index.ts glob "skills/**/SKILL.md"
//     kilo       — Kilo-Org/kilocode (opencode fork, same ** glob)
//
//   FLAT (one-level scan, but concrete skills must be directly discoverable):
//     antigravity— https://antigravity.google/docs/skills + /docs/cli-plugins
//                  (skills live at <skills-dir>/<skill-folder>/SKILL.md; AGY does not
//                   register router-nested concrete skills as slash commands)
//
//   FLAT (reverted from nested — nested skills not discoverable by Skill tool, #924):
//     claude     — https://code.claude.com/docs/en/skills + anthropics/claude-code#28266
//                  (one-level scan under ~/.claude/skills — but Skill-tool errors on unknown
//                   names rather than re-routing via the router; concrete skills must be
//                   at the top level so Skill(skill="gsd-plan-phase") succeeds)
//
//   FLAT (nested-scan behaviour unconfirmed → conservative):
//     codex      — developers.openai.com/codex/skills/
//     copilot    — docs.github.com/en/copilot/concepts/agents/about-agent-skills
//     windsurf   — docs.devin.ai/desktop/cascade/skills
//     codebuddy  — codebuddy.ai/docs/cli/skills

```

## new-project细读

就像我上文说的先从一个例子来看。这里选取了gsd-new-project来看，我直接把gsd-core\workflows\new-project.md粘贴进来了，原文两千多行，对于某些不重要的部分我使用...省略...来标识了。

值得注意的是，gsd的md文档中使用了xml语法，md文档大家都很清楚是跟LLM交流时的通用实践，既能让AI看懂也能让人看懂。对于xml语法，我有查到claude对xml标记的提示词做了特殊优化，可以让AI更加好的理解结构，反正就是有好处，以后可以试一下用xml语法向AI下指令。

### SKILL.md

我们先从gsd-new-project的SKILL.md部分开始，这里是入口。

首先是YAML部分，这里是所有的SKILL都必须有的部分，主要是表明这个skill的作用范围等。

```
name: gsd-new-project
description: "Initialize a new project with deep context gathering and PROJECT.md"
argument-hint: "\[--auto]"
allowed-tools:

- Read
- Bash
- Write
- Agent
- AskUserQuestion

```

然后我认为最重要的部分是这里，标明了上下文文件，如果不看这个，后续看workflows下对应的工作流文件的时候也会疑惑。因为你会在workflow中也看到execution\_context，而且在最开头，如果不去看SKILL.md，根本不知道execution\_context指代的是什么。

看源码的时候可能会疑惑为什么这里的路径是claude的，因为这个工具最开始是为claude设计的，但是我们在安装这个工具时会根据我们选择的运行时（在安装的时候会问你要为哪一些AI工具安装）改为相适配的路径。

```
<execution_context>
//工作流文件地址
@~/.claude/gsd-core/workflows/new-project.md
//references中存放共享知识库，工作流和 Agent 通过 @-reference 引用的共享知识文档
@~/.claude/gsd-core/references/questioning.md
@~/.claude/gsd-core/references/ui-brand.md
//templates中存放产物模板
@~/.claude/gsd-core/templates/project.md
@~/.claude/gsd-core/templates/requirements.md
</execution_context>
```

### 工作流文件细读

大模型读取完SKILL.md后就会去读取gsd-core\workflows\new-project.md文档，我们来解读一下这个工作流。

<purpose>
目的 </purpose>

\<required\_reading>
这里就要求读取execution\_context中的文件（上文提到的在SKILL.md中定义的部分）
\</required\_reading>

\<available\_agent\_types>
以下时这个当前这个工作流将会用到的子agent
Valid GSD subagent types (use exact names — do not fall back to 'general-purpose'):

- gsd-project-researcher — Researches project-level technical decisions
- gsd-research-synthesizer — Synthesizes findings from parallel research agents
- gsd-roadmapper — Creates phased execution roadmaps
  \</available\_agent\_types>

用户调用时带了--auto参数，直接读auto-mode-detection.md文件

\<auto\_mode>

<!-- gsd:section id="auto-mode-detection" when="flag:--auto" -->注意这里使用了HTML语法的注释，目的是为了跟xml标签区别出来。

section\_manifest在buildSectionManifestField函数中生成，在init.cts中定义的，顾名思义是在初始化时调用的，section\_manifest中有included字段，只要是在当前窗口中执行的脚本，其产生的变量就可以被调用，比如section\_manifest
If `section_manifest` is `null` or `"auto-mode-detection"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/auto-mode-detection.md`. Otherwise skip — do not read the file.

<!-- /gsd:section -->\</auto\_mode>

读这一段时可能会困惑<!-- gsd:section id="auto-mode-detection" when="flag:--auto" -->是用来干啥的？刚开始我也很困惑这里的含义，后来跟AI进行了多轮对话，才搞清楚了一些。这里并不是给模型看的，而是为了在打包之前能够被精准识别到形成section-manifest.json文件，并且删除这行注释。

如果你在安装gsd之后打开当前这个工作流文件，你会发现没有这一行注释。但是你会发现在workflows目录下有一个section-manifest.json。这个section-manifest.json主要是用于标识每个工作流文件中都有哪些step，用于标识不同的阶段需要去读什么文件。
比如当前这个工作流，有3个step那么在section-manifest.json中就会有3个，如下。

```JSON
"new-project": [
      {
        "id": "auto-mode-detection",
        "when": "flag:--auto",
        "read": "gsd-core/workflows/new-project/steps/auto-mode-detection.md"
      },
      {
        "id": "codebase-map-offer",
        "when": "state:needs-codebase-map",
        "read": "gsd-core/workflows/new-project/steps/codebase-map-offer.md"
      },
      {
        "id": "auto-mode-config",
        "when": "flag:--auto",
        "read": "gsd-core/workflows/new-project/steps/auto-mode-config.md"
      }
    ]
```

那么这个section-manifest.json文件有什么作用？它相当于一个全局的说明文件，这里面汇总了所有的工作流文件的step以及step的地址。看到这里你或许会疑惑为什么会需要这个文件？为什么要这样设计？所有的一起都是为了解决上下文腐化的问题，也就是为了省token。请继续往下读。

#### 第一阶段：setup

接着进入到真正的工作流中。

1\. Setup

**MANDATORY FIRST STEP — Execute these checks before ANY user interaction:**
直接执行以下脚本，并且声明给模型要先执行这个脚本。这个脚本的作用就是执行一些初始化操作获取到当前这个窗口中需要用到的变量。

```bash

_GSD_SHIM_NAME="gsd-tools.cjs"; #可执行文件的名字，不是路径
#${变量:-默认值}如果：RUNTIME_DIR存在：使用：RUNTIME_DIR否则：执行：git rev-parse --show-toplevel获取 Git 项目根目录。否则使用当前目录
#RUNTIME_DIR也不是系统原本就有的，有可能是设置的系统环境变量或者是上层程序设置的，比如Node.js中process.env.RUNTIME_DIR
_GSD_RUNTIME_ROOT="${RUNTIME_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"; #找到运行根目录
#将运行根目录和可执行文件拼接获得运行地址
GSD_TOOLS="${_GSD_RUNTIME_ROOT}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
#判断项目中是否自带这个可执行文件，像我将gsd安装在全局就找不到这个
if [ -f "$GSD_TOOLS" ]; then gsd_run() { node "$GSD_TOOLS" "$@"; }; 
#否则就查找项目下的AI工具目录中找
elif [ -f "${_GSD_RUNTIME_ROOT}/.claude/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${_GSD_RUNTIME_ROOT}/.claude/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${_GSD_RUNTIME_ROOT}/.codex/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${_GSD_RUNTIME_ROOT}/.codex/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
#否则就看全局是否装了gsd-tools
elif command -v gsd-tools >/dev/null 2>&1; 
then GSD_TOOLS="$(command -v gsd-tools)"; 
gsd_run() { "$GSD_TOOLS" "$@"; }; 
#否则就看gsd-core是否安装在了AI工具目录下
elif [ -f "${CLAUDE_CONFIG_DIR:-$HOME/.claude}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${CLAUDE_CONFIG_DIR:-$HOME/.claude}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${HERMES_HOME:-$HOME/.hermes}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${HERMES_HOME:-$HOME/.hermes}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${CURSOR_CONFIG_DIR:-$HOME/.cursor}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${CURSOR_CONFIG_DIR:-$HOME/.cursor}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
...省略...
#都没有就报错 
 else echo "ERROR: gsd-tools.cjs not found at $GSD_TOOLS and gsd-tools is not on PATH. Run: npx -y @opengsd/gsd-core@latest --claude --local" >&2; 
 exit 1; 
 fi; 
#如果是claude环境，就将gsd-tools的路径添加到PATH中
 if [ -n "${CLAUDE_ENV_FILE:-}" ] && [ -n "${GSD_TOOLS:-}" ]; 
 then printf "export PATH='%s':\"\$PATH\"\n" "${GSD_TOOLS%/*}" >> "$CLAUDE_ENV_FILE" 2>/dev/null || true; fi
#这里判断用户是否开启了自动模式，如果有就就添加--auto参数
#$ARGUMENTS是外部传入的参数，但是如果是运行脚本时输入的参数，比如说bash a.sh --ARGUMENTS,那么在脚本中是这样定义的ARGUMENTS=$1
#这里的$ARGUMENTS是在调用skills时传递的参数，比如$gsd-new-project --auto --debug,codex会设置环境变量ARGUMENTS="--auto --debug"
#但是这里只取--auto参数，其他参数都忽略
AUTO_PARAM=""; if [[ "$ARGUMENTS" =~ (^|[[:space:]])--auto([[:space:]]|$) ]]; then AUTO_PARAM="--auto"; fi
#下面的是分别执行脚本获取到不同的结果
#以init.new-project为例，调用路径：gsd-tools.cjs中的main()函数解析cli参数->再通过runCommand分发并执行对应的函数，最后运行的是这个cmdInitNewProject函数
#应该是有一个注册表中映射了文档中使用的命令和函数之间的关系，他这个架构我看不懂，脑子要炸了/(ㄒoㄒ)/~~
INIT=$(gsd_run query init.new-project $AUTO_PARAM)
if [[ "$INIT" == @file:* ]]; then INIT=$(cat "${INIT#@file:}"); 
fi
AGENT_SKILLS_RESEARCHER=$(gsd_run query agent-skills gsd-project-researcher)
AGENT_SKILLS_SYNTHESIZER=$(gsd_run query agent-skills gsd-research-synthesizer)
AGENT_SKILLS_ROADMAPPER=$(gsd_run query agent-skills gsd-roadmapper)
#AGENT_SKILLS_RESEARCHER 这些变量默认只存在于当前这个进程内部
```

通过脚本获取到了AGENT\_SKILLS\_RESEARCHER这些变量，也就是这些agent所在的路径，源码中在agents目录下，同时也获取到了json数据，然后下面就从json中获取到想要的字段变量，后续的工作流中可以直接使用这些变量。

可以看到后续的工作流也说明了要使用这些变量。

Parse JSON for: `researcher_model`, `synthesizer_model`, `roadmapper_model`, `commit_docs`, `project_exists`, `has_codebase_map`, `planning_exists`, `has_existing_code`, `has_package_file`, `is_brownfield`, `needs_codebase_m`

...省略...

除此之外还获取到了gsd-tools.cjs文件所在的位置并且定义了gsd_run函数，可以说所有的初始化行为都在这个函数中。
如果看了这个脚本的解释，你会看到这一行命令gsd_run query init.new-project $AUTO_PARAM，通过这一行调用就可以获取到上面需要使用的section_manifest字段（包含included和excluded字段），也就是在HTML注释之间的内容。
在生成这个字段的时候会用到section-manifest.json文件，这就跟上面的问题联系上了。生成这个字段主要用到3个规则：
1、脚本执行时gsd_run query init.new-project $AUTO_PARAM命令：通过init.后面的new-project来选择从section-manifest.json中相对应的steps数组
2、用户输入是否有--auto参数：上文中有说过，如果用户输入了--auto参数，那么会将其存入$ARGUMENTS变量中，脚本在执行的时候会将其存到$AUTO_PARAM变量中然后通过gsd_run query init.new-project $AUTO_PARAM传入给init.cjs中相对应的函数。在这个函数中如果由auto参数输入才会将auto-mode-detection加入到included字段中。
3、之前的产出：init.cjs会扫描磁盘判断都产出了什么文件，对于当前这个工作流会检查是否有代码映射文件，有的话就将codebase-map-offer加入到included字段中
那么section_manifest有什么用呢？我们反向来想一下，如果没有这个字段怎么办？
那么上文中的这句If `section_manifest` is `null` or `"auto-mode-detection"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/auto-mode-detection.md`. Otherwise skip — do not read the file.就会变成：如果是自动模式就去读取auto-mode-detection.md文件，否则跳过。那么LLM如何判断什么是自动模式呢？它可能会去读取当前的输入或者去读取用户的语气来自己判断是否是自动模式，从而多读取一些不需要的部分，但是有这个字段就只用看看included是否有auto-mode-detection就行了，可能这个省token的体感不是很强烈。那再举一个例子，后文中有一句这样的命令：If `section_manifest` is `null` or `"codebase-map-offer"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/codebase-map-offer.md`. Otherwise skip — do not read the file.如果没有section_manifest字段，这句命令就要这样写：如果已经有了代码映射文件就读取和执行gsd-core/workflows/new-project/steps/codebase-map-offer.md。那么LLM为了判断是否有代码映射文件可能回去啊扫描当前项目中是否有类似的代码映射文件，从而消耗大量token。
所以section_manifest的作用就是在初始化的时候让LLM尽可能的少去做判断，而是直接执行。那么我们后续在做属于自己的skill的时候也可以参考这种做法。

除此之外还需要注意的是，在这个工作流文件中，第一次使用section_manifest字段的时候还没有执行获取section_manifest字段的脚本，那么是否意味着这个工作流文件的顺序不对呢？答案是错误的。LLM在读取的时候不像我们平常写的程序那样，变量不能在声明之前使用。他不是程序解释器，它的工作流程是先读取整个文件，然后形成任务计划，再根据任务计划来执行，所以说它的执行顺序并不是读一段执行一段,读一段执行一段。对于LLM来说section_manifest是未来会产生的变量而不是现在必须存在的变量。

那万一LLM没有先读取section_manifest就直接去执行那条命令了呢？真的，大神就是大神，人家的设计就是天衣无缝。如果先执行那条命令，那么就会读取gsd-core/workflows/new-project/steps/auto-mode-detection.md，我们看一下这个文件，人家开头就写了Check if `--auto` flag is present in $ARGUMENTS.如果没有就不会继续向下执行，进行双重校验。
判断gsd运行在什么工具下，这里的作用主要是确定我们要使用的skill的目录，因为不同的AI工具定义的skill存放目录不同
**Detect runtime and set instruction file name:**

Derive `RUNTIME` from the invoking prompt's `execution_context` path:

- Path contains `/.codex/` → `RUNTIME=codex`
- Path contains `/.gemini/` → `RUNTIME=gemini`
- Path contains `/.config/opencode/` or `/.opencode/` → `RUNTIME=opencode`
- Path contains `/.trae/` → `RUNTIME=trae`
- Otherwise → `RUNTIME=claude`

If `execution_context` path is not available, fall back to env vars:

```bash
if [ -n "$CODEX_HOME" ]; then RUNTIME="codex"
elif [ -n "$GEMINI_CONFIG_DIR" ]; then RUNTIME="gemini"
elif [ -n "$OPENCODE_CONFIG_DIR" ] || [ -n "$OPENCODE_CONFIG" ]; then RUNTIME="opencode"
elif [ -n "$TRAE_CONFIG_DIR" ]; then RUNTIME="trae"
else RUNTIME="claude"; fi
```

Set the instruction file variable via the shared runtime-name policy adapter (`gsd_run query project-instruction-file`, backed by `getProjectInstructionFile` in `runtime-name-policy.cjs` — the single source of truth shared with `profile-output.cjs`):

前面的脚本已经定义了gsd\_run函数，在这个进程中仍然存在，所以直接调用

```bash
INSTRUCTION_FILE=$(gsd_run query project-instruction-file --runtime "$RUNTIME")
```

All subsequent references to the project instruction file use `$INSTRUCTION_FILE`.
根据之前获取到的json变量进行一些判断
**If** **`project_exists`** **is true:** Error — project already initialized. Use `/gsd:progress`.

这里是判断当前项目的仓库，因为后续gsd可能会直接推送代码。
**Git init (#3491 — never nest** **`.git`** **inside an existing worktree):**

- If `has_git` true and `in_nested_subdir` true: skip `git init`; warn `⚠ Initializing inside existing worktree (${git_worktree_root}); planning files will track to outer repo.`
- If `has_git` true and `in_nested_subdir` false: skip `git init` (already at worktree root).
- If `has_git` false: `git init`.

## 2. Brownfield Offer

**If auto mode:** Skip to Step 4 (assume greenfield, synthesize PROJECT.md from provided document).

同样就像上文所述，这里的HTML注释在安装gsd时是没有的，只有源码中有
<!-- gsd:section id="codebase-map-offer" when="state:needs-codebase-map" -->
如果已经有了代码映射，表示这不是一个新项目，直接执行codebase-map-offer.md文件，继续往下看会发现它执行的是\gsd-map-codebase，最终的工作流由gsd-core\workflows\map-codebase.md决定，这里需要注意的是并没有开子agent。
If `section_manifest` is `null` or `"codebase-map-offer"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/codebase-map-offer.md`. Otherwise skip — do not read the file.
<!-- /gsd:section -->

**If "Skip mapping" OR** **`needs_codebase_map`** **is false:** Continue to Step 3.

<!-- gsd:section id="auto-mode-config" when="flag:--auto" -->

如果是自动模式，直接去执行auto-mode-config.md文件

If `section_manifest` is `null` or `"auto-mode-config"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/auto-mode-config.md`. Otherwise skip — do not read the file.

<!-- /gsd:section -->

## 2b. Prior Spike/Sketch Detection

检测已有的探索成果，会通过脚本查找是否有已经包装好的skill，避免 AI 重新分析已经做过的探索，这也是省token的一个方式。
Check for existing spike and sketch work that should inform project setup:

```bash
# Check for spike findings skill (project-local)
SPIKE_SKILL=$(ls ./.claude/skills/spike-findings-*/SKILL.md 2>/dev/null | head -1 || true)

# Check for sketch findings skill (project-local)
SKETCH_SKILL=$(ls ./.claude/skills/sketch-findings-*/SKILL.md 2>/dev/null | head -1 || true)

# Check for raw spikes/sketches in .planning/
HAS_SPIKES=$(ls .planning/spikes/MANIFEST.md 2>/dev/null)
HAS_SKETCHES=$(ls .planning/sketches/MANIFEST.md 2>/dev/null)
```

If any of these exist, surface them before questioning:

```
⚡ Prior exploration detected:
{if SPIKE_SKILL}  ✓ Spike findings skill: {path} — validated patterns from experiments
{if SKETCH_SKILL}  ✓ Sketch findings skill: {path} — validated design decisions
{if HAS_SPIKES && !SPIKE_SKILL}  ◆ Raw spikes in .planning/spikes/ — consider `/gsd:spike --wrap-up` to package findings
{if HAS_SKETCHES && !SKETCH_SKILL}  ◆ Raw sketches in .planning/sketches/ — consider `/gsd:sketch --wrap-up` to package findings

These findings will be incorporated into project context and available to planning agents.
```
如果有已经包装好的探索成果，就需要检查是否是包含了question阶段的所有信息。
If spike/sketch findings skills exist, read their SKILL.md files to inform the questioning phase — they contain validated patterns, constraints, and design decisions that should shape the project definition.

## 3. Deep Questioning
**这一段和用户对话采取的策略和逻辑也可以借鉴来开发我们自己的创造力skill，因为它会不断的向下挖掘，直到挖掘不出东西。**
接着就进入到深入交流阶段,这个阶段来判断用户需要构建什么样的项目。
...省略...
**Open the conversation:**
这里注明了不要使用AskUserQuestion，使用freeform的提问。因为AskUserQuestion是AI工具自带的api，他有固定的输入格式，会限制用户只能选择选项，而freeform的提问可以更灵活地获取用户的信息。这里注意freeform的提问规则实在questioning.md中定义的，而这个文件是一个必读的上下文文件。
Ask inline (freeform, NOT AskUserQuestion):

"What do you want to build?"

Wait for their response. This gives you the context needed to ask intelligent follow-up questions.

如果用户允许research_before_questions的话，那么就会在网上去搜索一下用户需求相关。
**Research-before-questions mode:** Check if `workflow.research_before_questions` is enabled in `.planning/config.json` (or the config from init context). When enabled, before asking follow-up questions about a topic area:

1. Do a brief web search for best practices related to what the user described
这里比较关键，是让模型将搜索的结果揉进问题里文用户，这样得到的结果更加具体。
2. Mention key findings naturally as you ask questions (e.g., "Most projects like this use X — is that what you're thinking, or something different?")
3. This makes questions more informed without changing the conversational flow

When disabled (default), ask questions directly as before.

**Follow the thread:**
然后使用AskUserQuestion来从三个维度向用户提供选项卡来选择。
Based on what they said, ask follow-up questions that dig into their response. Use AskUserQuestion with options that probe what they mentioned — interpretations, clarifications, concrete examples.
同时，会根据用户的每一次选择来从以下几个方面来继续提问和挖掘，这样使得需求更加明确，也可以和用户一起头脑风暴。
Keep following threads. Each answer opens new threads to explore. Ask about:

- What excited them
- What problem sparked this
- What they mean by vague terms
- What it would actually look like
- What's already decided

Consult `questioning.md` for techniques:

- Challenge vagueness
- Make abstract concrete
- Surface assumptions
- Find edges
- Reveal motivation

**Check context (background, not out loud):**

As you go, mentally check the context checklist from `questioning.md`. If gaps remain, weave questions naturally. Don't suddenly switch to checklist mode.

**Decision gate:**
当跟用户沟通的一定多时，能够产出一个清晰的PROJECT.md文件时，让用户确认是否继续。
When you could write a clear PROJECT.md, use AskUserQuestion:

- header: "Ready?"
- question: "I think I understand what you're after. Ready to create PROJECT.md?"
- options:
  - "Create PROJECT.md" — Let's move forward
  - "Keep exploring" — I want to share more / ask me more

If "Keep exploring" — ask what they want to add, or identify gaps and probe naturally.

Loop until "Create PROJECT.md" selected.


## 4. Write PROJECT.md

生成文档，作为下次对话的上下文，并且以templates/project.md为模板，会对已经有了代码和新项目进行不同的处理

**For greenfield projects:**

...省略...
以下这个思考模板也很值得学习，在我们开发的时候让AI遵循这个模板来开发，这样我们就知道当前的开发进度了。
```markdown
## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] [Requirement 1]
- [ ] [Requirement 2]
- [ ] [Requirement 3]

### Out of Scope

- [Exclusion 1] — [why]
- [Exclusion 2] — [why]
```
**All Active requirements are hypotheses until shipped and validated.**这句话的意思是所有"进行中"需求在发布并验证之前都是假设。也就是Active中的需求都是不确定的，我老感觉这里也挺重要的，但是不知道为什么。
**For brownfield projects (codebase map exists):**
Infer Validated requirements from existing code:
这是两个上下文文件，
1. Read `.planning/codebase/ARCHITECTURE.md` and `STACK.md`
2. Identify what the codebase already does
3. These become the initial Validated set

...省略...

**Key Decisions:**
这里也挺重要的，就是记录下之前深度提问环节的所有决策，并且标记上这个决策的状态，有利于项目的进度管理，以后写比较大型的skill也可以考虑使用。我的写小说的skill完全就可以妇科gsd的思想来进行进度管理和记忆管理，而不是多个skill的堆砌。
Initialize with any decisions made during questioning:

```markdown
## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| [Choice from questioning] | [Why] | — Pending |
```
**Last updated footer:**

```markdown
---
*Last updated: [date] after initialization*
```

**Evolution section** (include at the end of PROJECT.md, before the footer):
其实这个环节也挺重要的，可以之后去看一下，我把它复制过来就仅仅是翻译一下。好像都挺重要的，提问：文章中有几个挺重要的🤣？
**Commit PROJECT.md:**
最后写入时使用脚本而不是自然语言也在一定程度上减少token的消耗。
```bash
mkdir -p .planning
gsd_run query commit "docs: initialize project" --files .planning/PROJECT.md
```
## 5. Workflow Preferences
...省略...
主要是根据`~/.gsd/defaults.json`中的配置信息展示给用户让用户修改或者确认这些配置。
如果存在这个配置文件，走一个路径：
...省略...
这里对于不同的运行时，跟用户交互的方式也不同。因为如果使用AskUserQuestion，claude会对选项有上限（4个），而默认的配置项有9个，所以对于claude，作者采取先路由（yes/no）然后再根据不同的路由来展示不同的选项。除此之外不同的AI工具的提问api也不同，但是在安装的时候会根据你选择的要安装到什么工具对这个进行适配改造，估计这个是作者后增的，所以这里直接如果是其他运行时，直接把所有的选项展示出来，让用户直接输入要改什么。
如果不是claude：
**If TEXT\_MODE is active** (non-Claude runtimes): display a numbered list and ask the user to type the numbers of settings they want to change (comma-separated). Parse the response and proceed.
如果是claude：
...省略...
如果没有这个配置文件将会走几轮对话来确定配置，这里可以去看一下源码学习一下如何设置跟用户的对话。还有需要注意的是第一轮对话questions中只有4个问题，是因为claude的AskUserQuestion最多一次只能问4个问题。
## 5.1. Sub-Repo Detection

因为gsd后续可能会自执行git命令，所以要判断那些是属于这个项目的，哪些是gsd可以管理的
...省略...



## 6. Research Decision
从这里开始要开启新的上下文窗口了，这也是gsd解决上下文腐败的大杀招。
如果是自动模式问用户需不需要先research，同时创建planning/research问津夹
...省略...

**Determine milestone context:**

判断是从0开始还是从当前已知开始，通过前文中的PROJECT.md中是否有已验证的需求来判断是否是greenfield项目还是brownfield项目。
...省略...
展示在终端，告诉用户将要并行开4个agent。
```
◆ Spawning 4 researchers in parallel... (each runs in a subagent — no output until they return, ~1–5 min; expected, not a freeze)
  → Stack research
  → Features research
  → Architecture research
  → Pitfalls research
```

并行开启四个agent，通过setup阶段解析到的gsd-project-researcher的路径

Spawn 4 parallel gsd-project-researcher agents with path references:

<!-- #2517 model-omit-on-inherit -->

当researcher\_model，synthesizer\_model，roadmapper\_model（这三个参数也是上文配置config阶段询问得到的结果）为inherit时，打开子agent时不用将其传递给子agent，而是直接由你的AI工具决定。这里不懂的可以继续往下看

> **Model omission (#2517).** Omit the `model` parameter entirely when the value it would carry (`researcher_model`, `synthesizer_model`, `roadmapper_model`) is `"inherit"` or empty. An empty value 404s on runtimes without native tier aliases — the default on non-Claude runtimes. Omitting it inherits the orchestrator's model. See @gsd-core/references/model-profile-resolution.md.

```text
这里使用Agent()来开启子agent，这里需要注意的是由于这个工具一开始是为claude设计的，所以不同的运行时开启子Agent的方式是不同的。对于codex来说，这个工具的做法是在skill的文档头部加入一个说明，告诉codex，如何将claude平台下的API转换为codex中支持的API，相当于一个说明书，具体的可以去看这个文件src\runtime-artifact-conversion.cts。
还记得xml吗，这里的prompt使用了xml的格式，用research_type标签包裹起来，这样大模型在回答的时候也是一个结构化的回答，大模型也知道这段内容属于什么领域。
Agent(prompt="<research_type>
Project Research — Stack dimension for [domain].
</research_type>

<milestone_context>
[greenfield OR subsequent]

Greenfield: Research the standard stack for building [domain] from scratch.
Subsequent: Research what's needed to add [target features] to an existing [domain] app. Don't re-research the existing system.
</milestone_context>

<question>
What's the standard 2025 stack for [domain]?
</question>

project_path变量是setup阶段解析到的项目路径
<files_to_read>
- {project_path} (Project context and goals)
</files_to_read>

AGENT_SKILLS_RESEARCHER也是setup阶段执行脚本获取到的这个agent的路径

${AGENT_SKILLS_RESEARCHER}

<downstream_consumer>
Your STACK.md feeds into roadmap creation. Be prescriptive:
- Specific libraries with versions
- Clear rationale for each choice
- What NOT to use and why
</downstream_consumer>

<quality_gate>
- [ ] Versions are current (verify with Context7/official docs, not training data)
- [ ] Rationale explains WHY, not just WHAT
- [ ] Confidence levels assigned to each recommendation
</quality_gate>

<!-- #2508 runtime-aware-dispatch -->
 GSD 的子代理派发如何适配不同运行时，因为有些运行时是不支持自定义的agent的，比如kimi-code，它只支持3种（`coder`/`explore`/`plan`）,所以就需要将三个角色映射到这上面。
 | Agent role suffix | Built-in | Rationale |
|---|---|---|
| `-planner`, `-roadmapper`, `-selector`, `-spec` | `plan` | Plans/designs; no file writes |
| `-researcher`, `-mapper`, `-checker`, `-verifier`, `-auditor`, `-analyzer`, `-synthesizer`, `-profiler`, `-curator`, `-classifier`, `-reviewer` | `explore` | Read-only investigation |
| everything else (`-executor`, `-fixer`, `-writer`, `-debugger`, …) | `coder` | General-purpose with full tool set |
| `general-purpose`, `general`, `default`, `sonnet`, `opus`, `haiku` | `coder` | Already-generic names |
> **Runtime-aware dispatch (#2508 Phase 4).** GSD workflows dispatch specialized subagents by role. Before dispatching on a built-in-only runtime (kimi-code — three built-ins only), resolve the role to a built-in via `gsd_run query resolve-dispatch-type --requested <role> --raw`. On named-dispatch runtimes (Claude/OpenCode/…) the role is returned unchanged; on kimi-code it maps to `coder`/`explore`/`plan` by role-suffix. The persona rides `${AGENT_SKILLS_<ROLE>}` (Phase 3) regardless. See @gsd-core/references/runtime-aware-dispatch.md.

<output>
Write to: {research_dir}/STACK.md
Use template: ~/.claude/gsd-core/templates/research-project/STACK.md
</output>
",一直到这里prompt字段才结束，整个promp中都用xml标签包裹。
 subagent_type="gsd-project-researcher", 
 model="{researcher_model}", 
 到这里可以看到将researcher_model传入Agent函数了，这里就可以解释为什么上面会强调当researcher_model为inherit或空时，打开子agent不用将其传递给子agent，而是直接由你的AI工具决定，如果将model="inherit"或者""传入的话，AI工具会在支持的模型中查找是否有名字为inherit或者""的模型,那肯定没有的，会直接失败。除此之外不同的AI工具对于inherit的处理方式也不同，比如Claude支持inherit，而其他工具不支持inherit，而如果不传的话默认采取主agent的模型，所以这里如果是inherit或者""还是不穿这个字段为好。
 description="Stack research")

到)表示已经调用了一个子agent，以上这段可以理解为
主 Agent
   │
   │ Agent(...)
   ▼
┌──────────────────────────────┐
│ 子 Agent                     │
│                              │
│ type = gsd-project-researcher│
│ model = researcher_model     │
│ prompt = 研究 Stack           │
│ skill = AGENT_SKILLS_RESEARCHER│
└──────────────────────────────┘
我觉得开启子agent提示词模板也很好（又很好了😀），这里以后可以借鉴一下，贴在下方。
<research_type>      ← 任务类型标识
<milestone_context>  ← greenfield/subsequent 分支
<question>           ← 核心问题
<files_to_read>      ← 输入文件
${AGENT_SKILLS_RESEARCHER}  ← Persona 注入
<downstream_consumer>      ← 下游谁会读
<quality_gate>       ← 自检清单
<output>             ← 输出路径与模板
下面几个开启子agent的代码就省略了
...省略...
```
这里也比较重要，是让当前agent去等待所有子agent返回结果，同时向AI强调在等待子agent返回结果时，不能自己去读取子agent的文件，也不能自己去综合子agent的输出，只能等待子agent返回结果后再继续执行。
这一条是专门针对codex运行时的，前面说过GSD将Agent()转化为codex下的spawn\_agent()来开启子agent,spawn\_agent()开启子agent后会立马返回一个agentId，而不会让当前的agent等待子agent结束，所以这里需要特别强调。

> **ORCHESTRATOR RULE — CODEX RUNTIME**: After calling all 4 researcher Agent() calls above, do NOT read research files or synthesize content independently while the subagents are active. Wait for all 4 researchers to complete before spawning the synthesizer. This prevents duplicate work and wasted context.

After all 4 agents complete, spawn synthesizer to create SUMMARY.md:

上面四个子agent完成后，再开一个agent来综合所有研究输出

```text
Agent(prompt="
<task>
Synthesize research outputs into SUMMARY.md.
</task>

<files_to_read>
- {research_dir}/STACK.md
- {research_dir}/FEATURES.md
- {research_dir}/ARCHITECTURE.md
- {research_dir}/PITFALLS.md
</files_to_read>

${AGENT_SKILLS_SYNTHESIZER}

<output>
Write to: {research_dir}/SUMMARY.md
Use template: ~/.claude/gsd-core/templates/research-project/SUMMARY.md
Commit after writing.
</output>
", subagent_type="gsd-research-synthesizer", model="{synthesizer_model}", description="Synthesize research")
```

> **ORCHESTRATOR RULE — CODEX RUNTIME**: After calling Agent() above, stop working on this task immediately. Do not read more files, edit code, or run tests related to this task while the subagent is active. Wait for the subagent to return its result. This prevents duplicate work, conflicting edits, and wasted context. Only resume when the subagent result is available.

这里有点像一个bug的修复方案，同步的时候本应该把研究结果写入 .planning/research/SUMMARY.md 文件，然后只返回一个简短确认；但是有时 LLM 会误以为自己不能写文件，于是把整个 SUMMARY.md 内容直接输出在聊天响应里，导致磁盘没有文件。下面这段就是保证orchestrator必须检测并自动修复，而不能直接进入 roadmap 阶段。

**Synthesizer output self-heal (#222) — verify SUMMARY.md materialized:** The synthesizer's canonical output is `.planning/research/SUMMARY.md` on disk; its brief structured return (`## SYNTHESIS COMPLETE` plus a few `###` confirmation lines) is NOT the file content. A known LLM false-refusal (issue #222) sometimes makes the agent return the full SUMMARY.md document inline — fabricating a write restriction (e.g. "the runtime is blocking file writes") — instead of writing the file. Prompt hardening alone does not fully eliminate it, so the orchestrator MUST absorb the failure deterministically before spawning `gsd-roadmapper`:
第一步：判断这个文件是否在当前项目中，同时检测它是否合法。
1. Verify `.planning/research/SUMMARY.md` exists AND is substantive — non-empty, and free of any leftover `<!-- gsd:write-continue -->` continuation sentinel (which marks a truncated/incomplete write). You may validate with `gsd_run verify-summary .planning/research/SUMMARY.md` — it exits 0 regardless, so check its JSON `passed` field (`"passed": false` means missing or invalid), not the process exit code. If it passes, continue normally.
第二步：如果说第一步没有通过但是对话框中输出了完整的 SUMMARY.md 内容（主要靠着这几个字段来判断`# Project Research Summary`, `## Key Findings`, `## Implications for Roadmap`, and `## Sources`），那么就需要修复。那么就用工具自带的工具写入。
2. If it is MISSING or invalid AND the synthesizer's return message contains the FULL SUMMARY.md document — recognizable by the template's top-level markers `# Project Research Summary`, `## Key Findings`, `## Implications for Roadmap`, and `## Sources`, not merely the brief `## SYNTHESIS COMPLETE` confirmation — the false-refusal fired: write that returned document to `.planning/research/SUMMARY.md` with the Write tool, then commit ALL research artifacts the synthesizer owns (it commits on behalf of the four researchers) with `gsd_run query commit "docs: complete project research" --files .planning/research/` unless they are already committed. Log `⚠ #222 self-heal: synthesizer returned SUMMARY.md inline without writing it; orchestrator persisted the file.`
第三步：如果第一步第二步都没有命中，那么保存就真正的失败了，不要启动gsd-roadmapper子代理。
3. If it is MISSING or invalid AND the return is only a brief confirmation (no full SUMMARY document to recover), the synthesizer genuinely failed — surface the error and stop; do NOT spawn `gsd-roadmapper` against a missing or incomplete SUMMARY.md.

This guarantees `gsd-roadmapper` (which lists SUMMARY.md as required reading) never runs against a missing or truncated SUMMARY.md.

Display research complete banner and key findings:

...省略...

**If "Skip research":** Continue to Step 7.

## 7. Define Requirements

这里会跟用户沟通需求，如果是自动模式就跳过，否则通过询问确定哪些是v1的需求，哪些是v2需求，优先完成基础功能，最后询问用户是否有遗漏的需求，最后再将划分好的需求展示给用户进行最后确认。
...省略...

**Commit requirements:**

执行git命令

```bash
gsd_run query commit "docs: define v1 requirements" --files .planning/REQUIREMENTS.md
```

## 7.5. Project Structure Mode

询问用户使用什么项目结构：
1、垂直最小可行产品（Vertical MVP）— 快速产出可运行应用，按业务切片逐步叠加功能。每个阶段交付一套完整端到端用户可用能力。（推荐用于新产品、快速迭代 MVP 项目）设置PROJECT_MODE=mvp
2、水平分层架构（Horizontal Layers）— 构建完整的技术层（数据库 → API → UI → 电路），并在最后组装。适用于基础设施密集型项目，多个开发人员合作。设置PROJECT_MODE=standard

...省略...

## 8. Create Roadmap

开新agent按照MVP和standard模式生成项目路线图（提供模板），跟用户确认路线图结果，将路线图保存于磁盘中。

...省略...

## 9. Done

...省略...

和BMAD对比：

可以看到的是每一个开子agent的步骤都会再次强调对codex的特殊处理-->反复强调告诉，防止遗忘。
