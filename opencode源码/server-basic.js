
//https://weston-wyh.blog.csdn.net/article/details/159852807
/**
 * opencode在启动时会在本地启动一个服务器用于和LLM交互，同时根据app端的请求调取工具，MCP等。
 * 所以根据这个原理，我们可以自己写服务器实现对opencode请求的拦截
 * 有一个前提条件是当在opencode上添加服务器时会发送健康检查请求，如果健康检查不通过就无法添加服务器
 * 所以要对api/health和/global/health请求返回健康检查通过的结果，也就是返回200状态码和一个json对象，里面包含healthy: true。
 * 当我们添加服务器成功之后，opencode后续的所有请求都会发送到当前这个服务器中
 */
//md理解完全错了，这个代理是用来在provider层做一次转发，虽然也能添加到服务器但是源作者的意图根本不是这个。好处和作用在这里https://weston-wyh.blog.csdn.net/article/details/159768869
const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  console.log(`📥 Received ${req.method} ${req.url}`);

  //如果有不知道的接口：1、看官网。2、看源码。3、接收所有的请求并打印，判断都有什么接口，然后去源码找相应的请求格式
  //一般来说这些AI工具都遵守openai的格式，那么请求接口一般都是/v1/chat/completions
  if (req.method === 'POST' && req.url === '/v1/chat/completions') {
    let body = '';
    //这里数据传输是分块传输的，所以需要将收到的块进行拼接
    /**以下是一个HTTP请求的分块传输示例：
     * HTTP/1.1 200 OK
     * Transfer-Encoding: chunked ->表示是分块传输
     * 5\r\n        ← 第一块长度是 5 字节
     * Hello\r\n    ← 实际数据 "Hello"
     * 6\r\n        ← 第二块长度是 6 字节
     * World\r\n   ← 实际数据 " World"
     * 0\r\n        ← 长度为 0，表示结束
     * \r\n
     * node中当读到0\r\n\r\n时触发end事件，标志数据传输完毕
     * 同时读取的时候不会把\r\n\r\n这些传输标志符读取，node会自动跳过，确保我们收到的数据是纯净的
     */
    /**
     * 以下是一个HTTP请求的非分块传输示例：
     * HTTP/1.1 200 OK
     * Content-Type: text/plain
     * Content-Length: 10
     * helloworld
     * 当node读取到10个字节后就会触发end事件
     */
    /**
     * `Content-Length`：提前声明**整个实体主体的总字节数**，接收方读到这个数量的字节就判定 body 结束。
     * `Transfer-Encoding: chunked`：代表 body 采用分块封装，**预先不知道总长度**，靠末尾 `0\r\n\r\n` 标记主体结束。
     * 所以如果消息包含 Transfer-Encoding 头，必须忽略 Content-Length。
     */
    req.on('data', chunk => body += chunk);
    //当监听到end事件时，说明数据传输完毕，可以进行处理
    req.on('end', () => {
      console.log(`req end: ${body}`);
      console.log(`req headers: ${JSON.stringify(req.headers)}`);
      // 从原始请求中获取 Authorization 头
      const authHeader = req.headers['authorization'] || '';
      //这里原作者根据阿里云的支持openai格式的接口来创建的
      const options = {
        hostname: 'dashscope.aliyuncs.com',
        port: 443,
        path: '/compatible-mode/v1/chat/completions',
        method: 'POST',
        headers: {
          'Authorization': authHeader, // 直接透传
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      };
      /**
       * 
       * const requestObject = https.request(config, callback);
       * https.request 是 Node.js 内置模块 https 提供的方法，用于创建一个 HTTP /HTTPS 客户端请求对象，这里的第二个参数是个回调函数，当目标服务器返回响应头时，该回调会被自动调用
       * https.request(...)：来自 Node.js 标准库，负责构造一个 HTTPS 客户端请求对象，注意，构造对象并不会立即发送请求，必须要调用 .write 和 .end 才会真正发出请求，就好像写好了一封信（设置了地址，写了内容），但还没投进邮箱
       */
      const proxyReq = https.request(options, (proxyRes) => {
        //proxyRes是返回的响应
        //这里把proxyReq发出的请求接收的响应头和状态码直接原样写给opencode客户端
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        //这里会将proxyRes直接管道 pipe 到 res
        //pipe会自动触发end事件
        proxyRes.pipe(res); // 自动处理流式/非流式 + 自动 end()
      });

      proxyReq.on('error', (e) => {
        console.error('Proxy error:', e.message);
        res.writeHead(502);
        res.end('Bad Gateway');
      });
      //如果请求体过大，也可以分批次写入
      proxyReq.write(body);
      //这里前面构造的客户端请求才会真正被发出去
      proxyReq.end();
    });
    return;
  }else if(req.url === '/global/health'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ healthy: true, version: '2.0.0' }));
  }else if(req.url === 'api/health'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ healthy: true, version: '2.0.0' }));
  }


});

server.listen(2048, '127.0.0.1', () => {
  console.log('✅ DashScope proxy with full OpenCode & Ollama compatibility running on http://127.0.0.1:2048');
});

