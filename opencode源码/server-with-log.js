// dashscope-proxy.js (日志记录增强版 + 超时保护)

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// 日志目录（可自定义）
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
  //fs.mkdirSync(...)：同步创建目录（会阻塞代码执行直到完成），其中 recursive : true 表示递归创建，意味着如果 logs 的父目录不存在，该命令也会自动一层层创建，避免因父目录缺失而报错
  //exits 和 mkdir 操作都要加上 Sync，因为服务器启动阶段是初始化过程，初始化逻辑必须是确定性的，顺序执行的，必须确保目录创建完成之后才能开始监听请求，用同步方式逻辑更清晰、无竞态风险。
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

// 设置代理请求超时时间（毫秒）—— 建议 30~120 秒
const PROXY_TIMEOUT_MS = 60_000; // 60秒

const server = http.createServer((req, res) => {
  console.log(`📥 Received ${req.method} ${req.url}`);

  if (req.method === 'POST' && req.url === '/v1/chat/completions') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      // 从原始请求中获取 Authorization 头
      const authHeader = req.headers['authorization'] || '';
      // 解析请求体
      let parsedReqBody = null;
      try {
        parsedReqBody = JSON.parse(body);
      } catch (e) {
        console.error('⚠️ Invalid JSON in request body');
        res.writeHead(400);
        res.end('Bad Request');
        return;
      }
      //Unix 时间戳（毫秒级）：表示从 1970 年 1 月 1 日 00:00:00 UTC（被称为 Unix 纪元）开始，到当前时刻所经过的毫秒数
      const timestamp = Date.now();
      const logEntry = {
        timestamp,
        request: parsedReqBody,
        response: null, // 占位
        error: null
      };

      const options = {
        hostname: 'dashscope.aliyuncs.com',
        port: 443,
        path: '/compatible-mode/v1/chat/completions',
        method: 'POST',
        headers: {
          'Authorization': authHeader, // 直接透传！
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      };

      const proxyReq = https.request(options, (proxyRes) => {
        //透传阿里云服务器返回的响应头和状态码给客户端
        //一旦执行了res.writeHead，res.headersSent 就变成了 true
        //但如果在后续接收响应内容的过程中发生网络错误，比如连接中断，TLS 错误，目标服务器一直没响应，
        // 就会触发 proxyReq.on('error') 或者 proxyReq.on('timeout')，
        // 而此时客户端已经收到了响应头（比如 200 OK），那么此时不能再调用 res.writeHead(502) 或者是 res.writeHead(504)，
        // 否则会抛出异常，Node.js 会 crash 崩溃
        res.writeHead(proxyRes.statusCode, proxyRes.headers);

        let responseBody = '';
        proxyRes.on('data', (chunk) => {
          responseBody += chunk.toString();
          res.write(chunk); // 透传给客户端
        });

        proxyRes.on('end', () => {
          // 尝试解析响应（非流式）
          if (!parsedReqBody.stream) {
            try {
              logEntry.response = JSON.parse(responseBody);
            } catch (e) {
              logEntry.response = responseBody; // 原始字符串（如错误信息）
            }
          } else {
            // 流式响应：只记录原始 chunks（每行一个 data: {...}）
            logEntry.response = responseBody;
          }

          // 保存日志到文件
          const logFile = path.join(LOG_DIR, `${timestamp}.json`);
          fs.writeFile(logFile, JSON.stringify(logEntry, null, 2), (err) => {
            if (err) console.error('Failed to write log file:', err.message);
            else console.log(`📝 Saved log to ${logFile}`);
          });

          // 结束客户端 HTTP 响应！
          res.end();
        });
      });

      // 设置超时，这是 Node.js 原生 HTTP 模块中 ClientRequest 对象的一个方法，用于设置 HTTP 客户端请求的超时时间
      //setTimeout(ms[, callback]) 会在底层 socket 连接建立之后，给它设置一个空闲超时：
      // 如果 ms 毫秒内 socket 上没有任何数据收发（收或发都算活动），就触发 timeout 事件并执行回调；
      // 触发后请求不会自动终止，需要手动调用 .destroy()。
      // 注意它不是请求总时长上限——只要连接上还有数据流动，计时器就会一直重置。
      proxyReq.setTimeout(PROXY_TIMEOUT_MS, () => {
        const timeoutMsg = `Proxy request timed out after ${PROXY_TIMEOUT_MS}ms`;
        console.warn(`⏰ ${timeoutMsg}`);

        // 记录超时错误
        logEntry.error = timeoutMsg;

        const logFile = path.join(LOG_DIR, `${timestamp}_timeout.json`);
        fs.writeFile(logFile, JSON.stringify(logEntry, null, 2), (err) => {
          if (err) console.error('Failed to write timeout log:', err.message);
        });

        // 必须 destroy！否则连接会挂起，而不会自动断开连接
        proxyReq.destroy();

        // 如果opencode客户端还没收到响应，返回 504
        if (!res.headersSent) {
          res.writeHead(504, { 'Content-Type': 'text/plain' });
          res.end('Gateway Timeout');
        }
      });

      proxyReq.on('error', (e) => {
        const errorMsg = e.message || 'Unknown proxy error';
        logEntry.error = errorMsg;
        const logFile = path.join(LOG_DIR, `${timestamp}_error.json`);
        fs.writeFile(logFile, JSON.stringify(logEntry, null, 2), (err) => {
          if (err) console.error('Failed to write error log:', err.message);
        });
        if (!res.headersSent) {
          res.writeHead(502);
          res.end('Bad Gateway');
        }
      });

      proxyReq.write(body);
      proxyReq.end();
    });
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(2048, '127.0.0.1', () => {
  console.log('✅ Qwen-Plus proxy with full OpenCode & Ollama compatibility running on http://127.0.0.1:2048');
  console.log(`⏱️  Proxy timeout set to ${PROXY_TIMEOUT_MS / 1000}s`);
});
