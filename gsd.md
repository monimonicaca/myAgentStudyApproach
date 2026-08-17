<https://github.com/open-gsd/gsd-core/blob/next/docs/zh-CN/ARCHITECTURE.md>

src\runtime-artifact-conversion.cts是根据不同运行时来将适配于claude的相关转换为适配不同运行时的文件（太多了看不过来）
核心是当调用命令时，会按需开启新的agent，不像其他的模式，可能只在一个窗口下进行问答。比如使用BMAD时，调用mary生成文档后，再次调用john生成prd会在同一个窗口下，除非自己手动开启新窗口；除此之外，如果mary识别到你需要调用skill，它采取的策略是读取相应skill的SKILL.md文档，这又会消耗上下文窗口。所以gsd可以尽可能的避免上下文腐化的问题。

两阶段层级路由：和BMAD设计一样（？），使用路由来标明每个agent的位置和作用，而不是简单的全都列出来
为控制急于列举技能的 token 开销，v1.40 引入了六个命名空间元技能（相当于BMAD的mary）（gsd-workflow、gsd-project、gsd-quality、gsd-context、gsd-manage、gsd-ideate——源自 commands/gsd/ns-\*.md，但可调用的 name: 为此处显示的简短形式），位于具体子技能之上。模型看到的是 6 个命名空间路由器（约 120 个 token），而非扁平的 86 个技能列表（约 2,150 个 token），选择命名空间后通过嵌入在命名空间路由器主体中的路由表路由到具体子技能。命名空间技能是可叠加的——每个具体命令仍可直接调用。

先从一个例子开始，直接看作者的文档会很蒙，因为他是从宏观来写的，而我没那么聪明，之后再将作者的说明跟这个具体的命令结合起来读，会更好理解

研究一个由npm管理的工具时，首先从package.json文件开始，这里会有这个工具提供的命令还有使用npm运行某一个命令时执行的脚本命令，但是这个工具的安装命令是npx @opengsd/gsd-core\@latest，npx需要关注bin字段，首先会找latest指向的版本，加入最新版本是1.40,那么这个命令就是npx @opengsd/gsd-core\@1.40.然后会去找bin字段找gsd-core命令对应执行的脚本，也就是bin/install.js。问了下gpt（实在没有脑容量看了，燃尽了），它说这个脚本的作用是将gsd源码转换成可以适配不同AI工具的格式，同时也可以根据参数执行部分，而不是整个脚本，比如--codex表示直接转换为codex下的就行，--global表示安装在全局。否则就会询问你。

路径：
可以看到源码中有skills目录，codex中通过$gsd-skill调用某一个skill，然后读取skill的SKILL.md文档，但是作者写的命令入口是commands/gsd/\*.md，因为在安装的时候会将这个转换为不同AI根据下适配的架构，两个文件好像没有差别，可能是刚开始这个工具是专为claude code设计的，所以保留了skills目录(我认为)所以会有硬编码的.claude。
除此之外，这个文档中有上下文字段execution\_context，这个execution\_context就是workflow文档中规定的必读的上下文文档。这也是我建议从一个具体的例子开始的原因，因为作者说明时直接从workflow开始的，所以我直接去看的workflow，就有这个令我疑惑的execution\_context。
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

name: gsd-new-project
description: "Initialize a new project with deep context gathering and PROJECT.md"
argument-hint: "\[--auto]"
allowed-tools:

- Read
- Bash
- Write
- Agent
- AskUserQuestion

***

...省略...

<objective>
Initialize a new project through unified flow: questioning → research (optional) → requirements → roadmap.

**Creates:**

- `.planning/PROJECT.md` — project context
- `.planning/config.json` — workflow preferences
- `.planning/research/` — domain research (optional)
- `.planning/REQUIREMENTS.md` — scoped requirements
- `.planning/ROADMAP.md` — phase structure
- `.planning/STATE.md` — project memory

**After this command:** Run `/gsd-plan-phase 1` to start execution. </objective>

\<execution\_context>
@\~/.claude/gsd-core/workflows/new-project.md
@\~/.claude/gsd-core/references/questioning.md #references中存放共享知识库，工作流和 Agent 通过 @-reference 引用的共享知识文档
@\~/.claude/gsd-core/references/ui-brand.md
@\~/.claude/gsd-core/templates/project.md #templates中存放产物模板
@\~/.claude/gsd-core/templates/requirements.md
\</execution\_context>

...省略...

然后就会去读取gsd-core\workflows\new-project.md文档，我们来解读一下这个工作流。
这里可以注意一下，在md文档中使用了xml语法，md文档大家都很清楚是跟LLM交流时的通用实践，既能让AI看懂也能让人看懂。对于xml语法，我有查到claude对xml标记的提示词做了特殊优化，可以让AI更加好的理解结构，反正就是有好处，以后可以试一下用xml语法向AI下指令。

<purpose>
目的
</purpose>

\<required\_reading>
这里就要求读取execution\_context中的文件
\</required\_reading>

\<available\_agent\_types>
Valid GSD subagent types (use exact names — do not fall back to 'general-purpose'):

- gsd-project-researcher — Researches project-level technical decisions
- gsd-research-synthesizer — Synthesizes findings from parallel research agents
- gsd-roadmapper — Creates phased execution roadmaps
  ?:这是这个工作流允许调用的agent，但是不是上下文窗口隔离吗？新开的agent会自动调用吗？我觉得不会。那这个工作流是如何知道调用了什么，后续应该调用什么的？
  \</available\_agent\_types>

\<auto\_mode>

用户调用时带了--auto参数，直接读auto-mode-detection.md文件

<!-- gsd:section id="auto-mode-detection" when="flag:--auto" -->

section\_manifest在buildSectionManifestField函数中生成，在init.cts中定义的，顾名思义是在初始化时调用的，section\_manifest中有included字段，只要是在当前窗口中执行的脚本，其产生的变量就可以被调用，比如section\_manifest

If `section_manifest` is `null` or `"auto-mode-detection"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/auto-mode-detection.md`. Otherwise skip — do not read the file.

<!-- /gsd:section -->

?:啥叫自动模式，为什么有自动模式？section\_manifest从哪里传进来的，gpt说是通过用户直接提供：这是我的产品需求文档xxx，这种形式开启的？那是如何判断这是自动模式的？感觉应该有变量存储section\_manifest的，但是是谁存储的？脚本？还是agent？
\</auto\_mode>

<process>

## 1. Setup

**MANDATORY FIRST STEP — Execute these checks before ANY user interaction:**
直接执行以下脚本

```bash
#new-project工作流的setup阶段执行的脚本

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
elif [ -f "${CODEX_HOME:-$HOME/.codex}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${CODEX_HOME:-$HOME/.codex}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${GEMINI_CONFIG_DIR:-$HOME/.gemini}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${GEMINI_CONFIG_DIR:-$HOME/.gemini}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${COPILOT_CONFIG_DIR:-$HOME/.copilot}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${COPILOT_CONFIG_DIR:-$HOME/.copilot}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${WINDSURF_CONFIG_DIR:-$HOME/.codeium/windsurf}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${WINDSURF_CONFIG_DIR:-$HOME/.codeium/windsurf}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${AUGMENT_CONFIG_DIR:-$HOME/.augment}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${AUGMENT_CONFIG_DIR:-$HOME/.augment}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${TRAE_CONFIG_DIR:-$HOME/.trae}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${TRAE_CONFIG_DIR:-$HOME/.trae}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${QWEN_CONFIG_DIR:-$HOME/.qwen}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${QWEN_CONFIG_DIR:-$HOME/.qwen}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${CODEBUDDY_CONFIG_DIR:-$HOME/.codebuddy}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${CODEBUDDY_CONFIG_DIR:-$HOME/.codebuddy}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${CLINE_CONFIG_DIR:-$HOME/.cline}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${CLINE_CONFIG_DIR:-$HOME/.cline}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${GROK_AGENTS_HOME:-$HOME/.agents}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${GROK_AGENTS_HOME:-$HOME/.agents}/gsd-core/bin/${_GSD_SHIM_NAME}";
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${ANTIGRAVITY_CONFIG_DIR:-$HOME/.gemini/antigravity}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${ANTIGRAVITY_CONFIG_DIR:-$HOME/.gemini/antigravity}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
gsd_run() { node "$GSD_TOOLS" "$@"; }; 
elif [ -f "${OPENCODE_CONFIG_DIR:-${XDG_CONFIG_HOME:-$HOME/.config}/opencode}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
then GSD_TOOLS="${OPENCODE_CONFIG_DIR:-${XDG_CONFIG_HOME:-$HOME/.config}/opencode}/gsd-core/bin/${_GSD_SHIM_NAME}";
 gsd_run() { node "$GSD_TOOLS" "$@"; }; 
 elif [ -f "${KILO_CONFIG_DIR:-${XDG_CONFIG_HOME:-$HOME/.config}/kilo}/gsd-core/bin/${_GSD_SHIM_NAME}" ]; 
 then GSD_TOOLS="${KILO_CONFIG_DIR:-${XDG_CONFIG_HOME:-$HOME/.config}/kilo}/gsd-core/bin/${_GSD_SHIM_NAME}"; 
 gsd_run() { node "$GSD_TOOLS" "$@"; };
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

通过脚本获取到了AGENT\_SKILLS\_RESEARCHER这些变量，也就是这些agent所在的路径，源码中在agents目录下，同时也获取到了json数据，然后下面就从json中获取到想要的字段变量，后续的工作流中可以直接使用这些变量

Parse JSON for: `researcher_model`, `synthesizer_model`, `roadmapper_model`, `commit_docs`, `project_exists`, `has_codebase_map`, `planning_exists`, `has_existing_code`, `has_package_file`, `is_brownfield`, `needs_codebase_map`, `has_git`, `git_worktree_root`, `in_nested_subdir`, `project_path`, `agents_installed`, `missing_agents`, `agent_runtime`, `agents_dir`, `required_agents`, `required_agents_installed`, `missing_required_agents`, `agent_skill_payloads_available`, `agent_skill_payload_agents`, `requirements_path`, `roadmap_path`, `config_path`, `research_dir`, `response_language`.

**If** **`response_language`** **is set:** All user-facing questions, prompts, and explanations in this workflow MUST be presented in `{response_language}`. Technical terms, code, file paths, and subagent prompts stay in English — only user-facing output is translated.

**If** **`agents_installed`** **is false:** Display a warning before proceeding:

```text
⚠ GSD agents not installed. The following agents are missing from your agents directory:
  {missing_agents joined with newline}

Runtime checked: {agent_runtime}
Agents directory checked: {agents_dir}
Required new-project agents missing:
  {missing_required_agents joined with newline, or "none"}

Agent skill payloads available: {agent_skill_payloads_available}
Agent skill payload agents:
  {agent_skill_payload_agents joined with newline, or "none"}

Skill payloads only provide prompt context. Named subagent spawns still require agent
definitions to be installed for this runtime.

Subagent spawns (gsd-project-researcher, gsd-research-synthesizer, gsd-roadmapper) will fail
with "agent type not found" if `required_agents_installed` is false. Run the installer with --global to make agents available:

  npx @opengsd/gsd-core@latest --global

Proceeding without research subagents — roadmap will be generated inline.
```

Skip Steps 6–7 (parallel research and synthesis) and proceed directly to roadmap creation in Step 8.

判断gsd运行在什么工具下
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

**Git init (#3491 — never nest** **`.git`** **inside an existing worktree):**

- If `has_git` true and `in_nested_subdir` true: skip `git init`; warn `⚠ Initializing inside existing worktree (${git_worktree_root}); planning files will track to outer repo.`
- If `has_git` true and `in_nested_subdir` false: skip `git init` (already at worktree root).
- If `has_git` false: `git init`.

## 2. Brownfield Offer

**If auto mode:** Skip to Step 4 (assume greenfield, synthesize PROJECT.md from provided document).

<!-- gsd:section id="codebase-map-offer" when="state:needs-codebase-map" -->

如果已经有了代码映射，表示这不是一个新项目，直接执行codebase-map-offer.md文件，继续往下看会发现它执行的是$gsd-map-codebase，最终的工作流由gsd-core\workflows\map-codebase.md决定
If `section_manifest` is `null` or `"codebase-map-offer"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/codebase-map-offer.md`. Otherwise skip — do not read the file.

<!-- /gsd:section -->

**If "Skip mapping" OR** **`needs_codebase_map`** **is false:** Continue to Step 3.

<!-- gsd:section id="auto-mode-config" when="flag:--auto" -->

如果是自动模式，直接去执行auto-mode-config.md文件

If `section_manifest` is `null` or `"auto-mode-config"` is in its `included` list: read and execute `gsd-core/workflows/new-project/steps/auto-mode-config.md`. Otherwise skip — do not read the file.

<!-- /gsd:section -->

## 2b. Prior Spike/Sketch Detection

检测已有的探索成果（spike/sketch），目的是避免 AI 重新分析已经做过的探索。有可能会将已有的实践和实验结果包装为一个skill
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

If spike/sketch findings skills exist, read their SKILL.md files to inform the questioning phase — they contain validated patterns, constraints, and design decisions that should shape the project definition.

## 3. Deep Questioning

如果用户没有提供一些文档，就需要AI和用户交互获得最终的需求
...省略...

## 4. Write PROJECT.md

生成文档，作为下次对话的上下文，并且以templates/project.md为模板，会对已经有了代码和新项目进行不同的处理

**For greenfield projects:**

...省略...

**For brownfield projects (codebase map exists):**

...省略...

**Key Decisions:**

...省略...

## Key Decisions

...省略...

## Evolution

...省略...

## 5. Workflow Preferences

主要是根据`~/.gsd/defaults.json`中的配置信息跟用户对话，并将用户的选择保存于本地写入磁盘中持久化。

...省略...


## 5.1. Sub-Repo Detection

因为gsd后续可能会自执行git命令，所以要判断那些是属于这个项目的，哪些是gsd可以管理的

**Detect multi-repo workspace:**

Check for directories with their own `.git` folders (separate repos within the workspace):

```bash
find . -maxdepth 1 -type d -not -name ".*" -not -name "node_modules" -exec test -d "{}/.git" \; -print
```

**If sub-repos found:**

Strip the `./` prefix to get directory names (e.g., `./backend` → `backend`).

Use AskUserQuestion:

- header: "Multi-Repo Workspace"
- question: "I detected separate git repos in this workspace. Which directories contain code that GSD should commit to?"
- multiSelect: true
- options: one option per detected directory
  - "\[directory name]" — Separate git repo

**If user selects one or more directories:**

- Set `planning.sub_repos` in config.json to the selected directory names array (e.g., `["backend", "frontend"]`)
- Auto-set `planning.commit_docs` to `false` (planning docs stay local in multi-repo workspaces)
- Add `.planning/` to `.gitignore` if not already present

Config changes are saved locally — no commit needed since `commit_docs` is `false` in multi-repo mode.

**If no sub-repos found or user selects none:** Continue with no changes to config.

## 5.5. Resolve Model Profile

上面setup阶段获得的一些json字段

Use models from init: `researcher_model`, `synthesizer_model`, `roadmapper_model`.

从这里开始要开启新的上下文窗口了

## 6. Research Decision

如果是自动模式问用户需不需要先research

**If auto mode:** Default to "Research first" without asking.

Use AskUserQuestion:

- header: "Research"
- question: "Research the domain ecosystem before defining requirements?"
- options:
  - "Research first (Recommended)" — Discover standard stacks, expected features, architecture patterns
  - "Skip research" — I know this domain well, go straight to requirements

**If "Research first":**

展示
Display stage banner:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► RESEARCHING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Researching [domain] ecosystem...
```
新建文件夹
Create research directory:

```bash
mkdir -p .planning/research
```

**Determine milestone context:**

判断是从0开始还是从当前已知开始
Check if this is greenfield or subsequent milestone:

- If no "Validated" requirements in PROJECT.md → Greenfield (building from scratch)
- If "Validated" requirements exist → Subsequent milestone (adding to existing app)

Display spawning indicator:

展示在终端，告诉用户将要并行开4个agent(gsd-project-researcher)
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

当researcher_model，synthesizer_model，roadmapper_model为inherit时，打开子agent时不用将其传递给子agent，而是直接由你的AI根据决定。这里不懂的可以继续往下看

> **Model omission (#2517).** Omit the `model` parameter entirely when the value it would carry (`researcher_model`, `synthesizer_model`, `roadmapper_model`) is `"inherit"` or empty. An empty value 404s on runtimes without native tier aliases — the default on non-Claude runtimes. Omitting it inherits the orchestrator's model. See @gsd-core/references/model-profile-resolution.md.

```text
这里使用Agent()来开启子agent，这里需要注意的是由于这个工具一开始是为claude设计的，所以不同的运行时开启子Agent的方式是不同的。对于codex来说，这个工具的做法是在skill的文档头部加入一个说明，告诉codex，如何将claude平台下的API转换为codex中支持的API，相当于一个说明书，具体的可以去看这个文件src\runtime-artifact-conversion.cts。
还记得xml吗，这里的prompt使用了xml的格式，用research_type标签包裹起来，这样大模型在回答的时候也是一个结构化的回答，大模型也知道这段内容属于什么领域
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

> **Runtime-aware dispatch (#2508 Phase 4).** GSD workflows dispatch specialized subagents by role. Before dispatching on a built-in-only runtime (kimi-code — three built-ins only), resolve the role to a built-in via `gsd_run query resolve-dispatch-type --requested <role> --raw`. On named-dispatch runtimes (Claude/OpenCode/…) the role is returned unchanged; on kimi-code it maps to `coder`/`explore`/`plan` by role-suffix. The persona rides `${AGENT_SKILLS_<ROLE>}` (Phase 3) regardless. See @gsd-core/references/runtime-aware-dispatch.md.

<output>
Write to: {research_dir}/STACK.md
Use template: ~/.claude/gsd-core/templates/research-project/STACK.md
</output>
",
一直到这里prompt字段才结束
 subagent_type="gsd-project-researcher", 
 model="{researcher_model}", 
 到这里可以看到将researcher_model传入Agent函数了，这里就可以解释为什么上面会强调当researcher_model为inherit或空时，打开子agent不用将其传递给子agent，而是直接由你的AI根据决定，如果将model="inherit"或者""传入的话，AI工具会在支持的模型中查找是否有名字为inherit或者""的模型,那肯定没有的，会直接失败。除此之外不同的AI工具对于inherit的处理方式也不同，比如Claude支持inherit，而其他工具不支持inherit。
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

下面几个开启子agent的代码就省略了
```

这里也比较重要，是让当前agent去等待所有子agent返回结果，同时向AI强调在等待子agent返回结果时，不能自己去读取子agent的文件，也不能自己去综合子agent的输出，只能等待子agent返回结果后再继续执行

这一条是专门针对codex运行时的，前面说过GSD将Agent()转化为codex下的spawn_agent()来开启子agent,spawn_agent()开启子agent后会立马返回一个agentId，而不会让当前的agent等待子agent结束，所以这里需要特别强调
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

这里有点像一个bug的修复方案，同步的时候本应该把研究结果写入 .planning/research/SUMMARY.md 文件，然后只返回一个简短确认；但是有时 LLM 会误以为自己不能写文件，于是把整个 SUMMARY.md 内容直接输出在聊天响应里，导致磁盘没有文件。下面这段就是保证orchestrator 必须检测并自动修复，而不能直接进入 roadmap 阶段。

**Synthesizer output self-heal (#222) — verify SUMMARY.md materialized:** The synthesizer's canonical output is `.planning/research/SUMMARY.md` on disk; its brief structured return (`## SYNTHESIS COMPLETE` plus a few `###` confirmation lines) is NOT the file content. A known LLM false-refusal (issue #222) sometimes makes the agent return the full SUMMARY.md document inline — fabricating a write restriction (e.g. "the runtime is blocking file writes") — instead of writing the file. Prompt hardening alone does not fully eliminate it, so the orchestrator MUST absorb the failure deterministically before spawning `gsd-roadmapper`:

1. Verify `.planning/research/SUMMARY.md` exists AND is substantive — non-empty, and free of any leftover `<!-- gsd:write-continue -->` continuation sentinel (which marks a truncated/incomplete write). You may validate with `gsd_run verify-summary .planning/research/SUMMARY.md` — it exits 0 regardless, so check its JSON `passed` field (`"passed": false` means missing or invalid), not the process exit code. If it passes, continue normally.
2. If it is MISSING or invalid AND the synthesizer's return message contains the FULL SUMMARY.md document — recognizable by the template's top-level markers `# Project Research Summary`, `## Key Findings`, `## Implications for Roadmap`, and `## Sources`, not merely the brief `## SYNTHESIS COMPLETE` confirmation — the false-refusal fired: write that returned document to `.planning/research/SUMMARY.md` with the Write tool, then commit ALL research artifacts the synthesizer owns (it commits on behalf of the four researchers) with `gsd_run query commit "docs: complete project research" --files .planning/research/` unless they are already committed. Log `⚠ #222 self-heal: synthesizer returned SUMMARY.md inline without writing it; orchestrator persisted the file.`
3. If it is MISSING or invalid AND the return is only a brief confirmation (no full SUMMARY document to recover), the synthesizer genuinely failed — surface the error and stop; do NOT spawn `gsd-roadmapper` against a missing or incomplete SUMMARY.md.

This guarantees `gsd-roadmapper` (which lists SUMMARY.md as required reading) never runs against a missing or truncated SUMMARY.md.

Display research complete banner and key findings:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► RESEARCH COMPLETE ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Key Findings

**Stack:** [from SUMMARY.md]
**Table Stakes:** [from SUMMARY.md]
**Watch Out For:** [from SUMMARY.md]

Files: `.planning/research/`
```

**If "Skip research":** Continue to Step 7.

## 7. Define Requirements

这里就是一些step的定义，没啥好讲的，先省略

.....

**Commit requirements:**

执行git命令

```bash
gsd_run query commit "docs: define v1 requirements" --files .planning/REQUIREMENTS.md
```

## 7.5. Project Structure Mode

**If auto mode:** Set `PROJECT_MODE=mvp` and skip this prompt.

**Mode prompt: Vertical MVP vs Horizontal Layers.**

Ask the user how they want to structure the project. Use `AskUserQuestion` with two options:

- **Vertical MVP** — get a working app fast, add features slice by slice. Each phase delivers an end-to-end user capability. *(Recommended for new products and rapid-iteration MVPs.)*
- **Horizontal Layers** — build complete technical layers (DB → API → UI → wiring) and assemble at the end. *(Better for infrastructure-heavy projects with multiple developers.)*

Set `PROJECT_MODE=mvp` if the user picks Vertical MVP, otherwise `PROJECT_MODE=standard`.

When `TEXT_MODE=true` (per the workflow's existing TEXT\_MODE handling for non-Claude runtimes), present the same two options as a plain-text numbered list and ask the user to type their choice number.

## 8. Create Roadmap

Display stage banner:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► CREATING ROADMAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

◆ Spawning roadmapper... (runs in a subagent — no output until it returns, ~1–5 min; expected, not a freeze)
```

**ROADMAP.md template — mode-aware emit.** When generating the initial ROADMAP.md:

- If `PROJECT_MODE=mvp`: under each `### Phase N:` header, emit `**Mode:** mvp` on the line immediately following `**Goal:**`. This sets every initial phase to MVP mode (per Phase-4-Persistence decision: per-phase mode, not project-wide config).
- If `PROJECT_MODE=standard`: emit the standard ROADMAP.md template with no `**Mode:**` lines (Horizontal Layers standard template — no behavioral change for users who pick Horizontal Layers).

Example MVP-mode emit for Phase 1:

```markdown
### Phase 1: [Name]
**Goal:** [Goal]
**Mode:** mvp
**Success Criteria**:
1. [Criterion]
```

Pass `PROJECT_MODE` to the roadmapper so it applies the correct template.

Spawn gsd-roadmapper agent with path references:

```text
Agent(prompt="
<planning_context>

<files_to_read>
- {project_path} (Project context)
- {requirements_path} (v1 Requirements)
- {research_dir}/SUMMARY.md (Research findings - if exists)
- {config_path} (Granularity and mode settings)
</files_to_read>

${AGENT_SKILLS_ROADMAPPER}

</planning_context>

<instructions>
Create roadmap:
1. Derive phases from requirements (don't impose structure)
2. Map every v1 requirement to exactly one phase
3. Derive 2-5 success criteria per phase (observable user behaviors)
4. Validate 100% coverage
5. Write files immediately (ROADMAP.md, STATE.md, update REQUIREMENTS.md traceability)
6. Return ROADMAP CREATED with summary

Write files first, then return. This ensures artifacts persist even if context is lost.
</instructions>
", subagent_type="gsd-roadmapper", model="{roadmapper_model}", description="Create roadmap")
```

> **ORCHESTRATOR RULE — CODEX RUNTIME**: After calling Agent() above, stop working on this task immediately. Do not read more files, edit code, or run tests related to this task while the subagent is active. Wait for the subagent to return its result. This prevents duplicate work, conflicting edits, and wasted context. Only resume when the subagent result is available.

**Handle roadmapper return:**

**If** **`## ROADMAP BLOCKED`:**

- Present blocker information
- Work with user to resolve
- Re-spawn when resolved

**If** **`## ROADMAP CREATED`:**

Read the created ROADMAP.md and present it nicely inline:

```
---

## Proposed Roadmap

**[N] phases** | **[X] requirements mapped** | All v1 requirements covered ✓

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | [Name] | [Goal] | [REQ-IDs] | [count] |
| 2 | [Name] | [Goal] | [REQ-IDs] | [count] |
| 3 | [Name] | [Goal] | [REQ-IDs] | [count] |
...

### Phase Details

**Phase 1: [Name]**
Goal: [goal]
Requirements: [REQ-IDs]
Success criteria:
1. [criterion]
2. [criterion]
3. [criterion]

**Phase 2: [Name]**
Goal: [goal]
Requirements: [REQ-IDs]
Success criteria:
1. [criterion]
2. [criterion]

[... continue for all phases ...]

---
```

**If auto mode:** Skip approval gate — auto-approve and commit directly.

**CRITICAL: Ask for approval before committing (interactive mode only):**

Use AskUserQuestion:

- header: "Roadmap"
- question: "Does this roadmap structure work for you?"
- options:
  - "Approve" — Commit and continue
  - "Adjust phases" — Tell me what to change
  - "Review full file" — Show raw ROADMAP.md

**If "Approve":** Continue to commit.

**If "Adjust phases":**

- Get user's adjustment notes
- Re-spawn roadmapper with revision context:
  ```text
  Agent(prompt="
  <revision>
  User feedback on roadmap:
  [user's notes]

  <files_to_read>
  - {roadmap_path} (Current roadmap to revise)
  </files_to_read>

  ${AGENT_SKILLS_ROADMAPPER}

  Update the roadmap based on feedback. Edit files in place.
  Return ROADMAP REVISED with changes made.
  </revision>
  ", subagent_type="gsd-roadmapper", model="{roadmapper_model}", description="Revise roadmap")
  ```
  > **ORCHESTRATOR RULE — CODEX RUNTIME**: After calling Agent() above, stop working on this task immediately. Do not read more files, edit code, or run tests related to this task while the subagent is active. Wait for the subagent to return its result. This prevents duplicate work, conflicting edits, and wasted context. Only resume when the subagent result is available.
- Present revised roadmap
- Loop until user approves

**If "Review full file":** Display raw `cat .planning/ROADMAP.md`, then re-ask.

**Generate or refresh project instruction file before final commit:**

```bash
gsd_run query generate-claude-md --output "$INSTRUCTION_FILE"
```

This ensures new projects get the default GSD workflow-enforcement guidance and current project context in `$INSTRUCTION_FILE`.

**Commit roadmap (after approval or auto mode):**

```bash
gsd_run query commit "docs: create roadmap ([N] phases)" --files .planning/ROADMAP.md .planning/STATE.md .planning/REQUIREMENTS.md "$INSTRUCTION_FILE"
```

## 9. Done

Present completion summary:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 GSD ► PROJECT INITIALIZED ✓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**[Project Name]**

| Artifact       | Location                    |
|----------------|-----------------------------|
| Project        | `.planning/PROJECT.md`      |
| Config         | `.planning/config.json`     |
| Research       | `.planning/research/`       |
| Requirements   | `.planning/REQUIREMENTS.md` |
| Roadmap        | `.planning/ROADMAP.md`      |
| Project guide  | `$INSTRUCTION_FILE`         |

**[N] phases** | **[X] requirements** | Ready to build ✓
```

**If auto mode:**

```
╔══════════════════════════════════════════╗
║  AUTO-ADVANCING → DISCUSS PHASE 1        ║
╚══════════════════════════════════════════╝
```

Exit skill and invoke SlashCommand("/gsd:discuss-phase 1 --auto")

**If interactive mode:**

Check if Phase 1 has UI indicators (look for `**UI hint**: yes` in Phase 1 detail section of ROADMAP.md):

```bash
PHASE1_SECTION=$(gsd_run query roadmap.get-phase 1 2>/dev/null)
PHASE1_HAS_UI=$(echo "$PHASE1_SECTION" | grep -qi "UI hint.*yes" && echo "true" || echo "false")
```

**If Phase 1 has UI (`PHASE1_HAS_UI`** **is** **`true`):**

```
───────────────────────────────────────────────────────────────

## ▶ Next Up — [${PROJECT_CODE}] ${PROJECT_TITLE}

**Phase 1: [Phase Name]** — [Goal from ROADMAP.md]

/clear then:

/gsd:discuss-phase 1 — gather context and clarify approach

---

**Also available:**
- /gsd:ui-phase 1 — generate UI design contract (recommended for frontend phases)
- /gsd:plan-phase 1 — skip discussion, plan directly

───────────────────────────────────────────────────────────────
```

**If Phase 1 has no UI:**

```
───────────────────────────────────────────────────────────────

## ▶ Next Up — [${PROJECT_CODE}] ${PROJECT_TITLE}

**Phase 1: [Phase Name]** — [Goal from ROADMAP.md]

/clear then:

/gsd:discuss-phase 1 — gather context and clarify approach

---

**Also available:**
- /gsd:plan-phase 1 — skip discussion, plan directly

───────────────────────────────────────────────────────────────
```

</process>

<output>

- `.planning/PROJECT.md`
- `.planning/config.json`
- `.planning/research/` (if research selected)
  - `STACK.md`
  - `FEATURES.md`
  - `ARCHITECTURE.md`
  - `PITFALLS.md`
  - `SUMMARY.md`
- `.planning/REQUIREMENTS.md`
- `.planning/ROADMAP.md`
- `.planning/STATE.md`
- `$INSTRUCTION_FILE` (runtime-derived via the shared `getProjectInstructionFile` policy: `AGENTS.md` for codex/opencode/kilo/kimi, `.github/copilot-instructions.md` for copilot, `GEMINI.md` for gemini/antigravity, `.claude/CLAUDE.md` for claude)

</output>

\<success\_criteria>

- [ ] .planning/ directory created
- [ ] Git repo initialized
- [ ] Brownfield detection completed
- [ ] Deep questioning completed (threads followed, not rushed)
- [ ] PROJECT.md captures full context → **committed**
- [ ] config.json has workflow mode, granularity, parallelization → **committed**
- [ ] Research completed (if selected) — 4 parallel agents spawned → **committed**
- [ ] Requirements gathered (from research or conversation)
- [ ] User scoped each category (v1/v2/out of scope)
- [ ] REQUIREMENTS.md created with REQ-IDs → **committed**
- [ ] gsd-roadmapper spawned with context
- [ ] Roadmap files written immediately (not draft)
- [ ] User feedback incorporated (if any)
- [ ] ROADMAP.md created with phases, requirement mappings, success criteria
- [ ] STATE.md initialized
- [ ] REQUIREMENTS.md traceability updated
- [ ] `$INSTRUCTION_FILE` generated with GSD workflow guidance (runtime-derived via the shared `getProjectInstructionFile` policy — `AGENTS.md` for codex/opencode/kilo/kimi, `.github/copilot-instructions.md` for copilot, `GEMINI.md` for gemini/antigravity, `.claude/CLAUDE.md` for claude; an existing hand-crafted file without GSD markers is left untouched unless `--force`)
- [ ] User knows next step is `/gsd:discuss-phase 1`

**Atomic commits:** Each phase commits its artifacts immediately. If context is lost, artifacts persist.

\</success\_criteria>
