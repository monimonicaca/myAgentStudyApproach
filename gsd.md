https://github.com/open-gsd/gsd-core/blob/next/docs/zh-CN/ARCHITECTURE.md
核心是当调用命令时，会按需开启新的agent，不像其他的模式，可能只在一个窗口下进行问答。比如使用BMAD时，调用mary生成文档后，再次调用john生成prd会在同一个窗口下，除非自己手动开启新窗口；除此之外，如果mary识别到你需要调用skill，它采取的策略是读取相应skill的SKILL.md文档，这又会消耗上下文窗口。所以gsd可以尽可能的避免上下文腐化的问题。

两阶段层级路由：和BMAD设计一样（？），使用路由来标明每个agent的位置和作用，而不是简单的全都列出来
为控制急于列举技能的 token 开销，v1.40 引入了六个命名空间元技能（相当于BMAD的mary）（gsd-workflow、gsd-project、gsd-quality、gsd-context、gsd-manage、gsd-ideate——源自 commands/gsd/ns-*.md，但可调用的 name: 为此处显示的简短形式），位于具体子技能之上。模型看到的是 6 个命名空间路由器（约 120 个 token），而非扁平的 86 个技能列表（约 2,150 个 token），选择命名空间后通过嵌入在命名空间路由器主体中的路由表路由到具体子技能。命名空间技能是可叠加的——每个具体命令仍可直接调用。

