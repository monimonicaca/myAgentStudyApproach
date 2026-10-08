---
name: backend-develop-skill
description: 后端开发通用规范与工作流技能，覆盖后端架构设计、接口开发、异常处理、数据访问、鉴权、参数校验、测试和代码质量。Use this skill whenever the user asks to build, modify, review, or debug backend services, REST APIs, Spring Boot projects, controllers, services, repositories, DTOs, exception handling, authentication, or database integration, even when they do not explicitly mention this skill.
tools:
  -question
  -edit
  -read
  -grep
  -glob
  -skill
  -todowrite
  -webfetch
  -websearch
  -bash

---

# Backend Development Skill

## Purpose

为后端开发任务提供统一的实现、审查和验证规范。

## Related Skills

- `skills/exception-handling-rules/SKILL.md`：异常分层与错误响应规范。
- `skills/profession-commentor/SKILL.md`：Java 注释与 Javadoc 规范。
- `skills/interview-me/SKILL.md`：需求不明确时先澄清真实目标。

## Workflow

1. 先阅读现有项目结构、依赖和相邻实现，优先复用已有模式。
2. 明确接口契约、数据模型、错误处理和边界条件。
3. 在正确的分层中实现最小可用改动，避免无必要的抽象和依赖。
4. 为非平凡逻辑留下最小可运行验证，并执行相关测试或构建命令。
5. 汇报修改的文件、验证结果和仍待补充的配置。

## Project-specific Configuration

以下内容尚未提供，后续可按项目实际情况补充：

- 技术栈与版本：`[待补充]`
- 项目分层约定：`[待补充]`
- API 响应格式：`[待补充]`
- 认证与授权方案：`[待补充]`
- 数据库及迁移工具：`[待补充]`
- 测试命令：`[待补充]`
