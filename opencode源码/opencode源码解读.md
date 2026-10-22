首先核心原因之一：bun 用 Zig 语言写的，而不是 C++

Node.js：基于 V8（C++）+ libuv（C），启动时要加载大量的动态库，另外，JavaScript 引擎，事件循环，文件系统，网络模块等，都是不同团队写的，拼凑在一起，所以启动一个空的 time node -e "console.log('hello')" 也要花 50~100ms
Bun：整个运行时用 Zig 语言从头写（作者 Jarred Sumner 自己写的 JS 引擎），零依赖，单二进制文件（bun 只有约 30MB，而 Node.js 要搭配 npm，core modules 等），说到底，Node.js 绑定的东西太多，太重载了
核心原因二：Bun 的包管理器是数据库式的设计，而不是单纯文件复制

npm / yarn：安装依赖的过程 = 递归下载 tarball → 解压 → 复制文件到 node_modules，每个包都要完整拷贝，即使多个包依赖同一个子包，也会重复存储，此外，这些访问还是 I/O 密集型操作，在机械硬盘上尤其慢
Bun：把所有包缓存为一个 SQLiTE 数据库（~/.bun/install.cache），bun install 只写一个符号链接，并更新 JSON lockfile，所有代码在内存中通过共享内存映射直接读取，几乎不碰硬盘
————————————————
版权声明：本文为CSDN博主「HIT_Weston」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/nobigdeal00/article/details/159238063

核心原因三：Bun 内置工具链，零转译开销

在传统前端开发流程中，遵循着
TypeScript → (tsc) → JavaScript → (Webpack) → bundle.js → (Node.js) → 运行
AI写代码
bash
1
这里每一步都有启动，I/O，序列化的时间开销

Bun 流程则很简洁
TypeScript → (Bun 内置解析器) → 直接执行字节码
AI写代码
bash
1
这里没有中间文件，没有进程切换，AST 直接编译为内部字节码，所以 bun run index.ts 几乎和运行 JS 一样快
————————————————
版权声明：本文为CSDN博主「HIT_Weston」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/nobigdeal00/article/details/159251029


TS 不能直接运行，必须先编译成 JS 才能被引擎执行
Bun / Node.js / 浏览器等都只能运行 JS，不能直接运行 TS（但 Bun 等现代工具可以自动编译并运行，算是间接运行 TS）
上面提到的类型系统（Type System）是 TypeScript 最大的价值所在
在写代码的时候，编辑器就会检查并报错，不用等到运行时才发现 bug，增强代码质量

![alt text](jpgs/image.png)

当然，如果嫌麻烦，毕竟构建所有平台的可执行二进制文件也是要花时间的，打开 build.ts 文件，这里有个 --single 选项

https://weston-wyh.blog.csdn.net/article/details/159316661


假设用户正在使用 AI 分析一个 5w 行的代码库，上下文长达 10w 个 token 

没有缓存（传统方式）：每次提问都要把这 10w tokens 重新发给服务器，比如
Q1: "这个组件怎么工作的？" → 发送 100k tokens
Q2: "这里怎么优化性能的？" → 再次发送 100k tokens
Q3: "这里有没有安全漏洞？" → 又发 100k tokens
AI写代码
bash
1
2
3
这样做既浪费带宽，又增加延迟，还会被计费（按输入 token 算）

有缓存时（启用 cache）：第一次提问时，把上下文写入服务器缓存，比如
POST /v1/chat/completions
{
  "messages": [...],
  "cache_control": { "type": "write" }
}
AI写代码
bash
1
2
3
4
5
此时服务器会返回一个缓存 ID（比如 cache_abc123），这样后续提问只需发送新问题和缓存 ID 即可，比如

POST /v1/chat/completions
{
  "messages": [
    { "role": "user", "content": "怎么优化性能？" }
  ],
  "cache_id": "cache_abc123"
}
————————————————
版权声明：本文为CSDN博主「HIT_Weston」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/nobigdeal00/article/details/159487736

OpenCode 客户端是先将请求发送给本地代理，本地代理可以在转发前，自动重写请求体，比如在代理中修改(本地服务器)

此时无需再 OpenCode 中填写 DashScope 特有的模型名，保持配置通用，也能用上供应商的特定模型

其次是统一认证管理（安全&便捷）：如果直接在 OpenCode 中填写 DashScope Key，有两点不便
1、Key 会明文暴露在 IDE 配置中（不安全），上篇 blog 【Agent】【OpenCode】模型配置（配置 Qwen 模型） 里有提到，敏感信息会存放在 auth.json，需要加权限进行限制
2、换 Key 时，需要修改所有客户端配置
此时代理的第二个作用就出来了，客户端只需要填一个假 Key（比如 sk_proxy），然后代理在转发过程中，可以自动替换成真实的 DASHSCOPE_API_KEY，这样可以集中管理 Key，避免泄露，更换也方便


https://weston-wyh.blog.csdn.net/article/details/159844154

https://weston-wyh.blog.csdn.net/article/details/159852807

