// dashscope-proxy.js (日志记录增强版)

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// 日志目录（可自定义）
const LOG_DIR = path.join(__dirname, 'logs');
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const server = http.createServer((req, res) => {
  console.log(`📥 Received ${req.method} ${req.url}`);

  if (req.method === 'POST' && req.url === '/v1/chat/completions') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      // 从原始请求中获取 Authorization 头
      const authHeader = req.headers['authorization'] || '';
      // 解析请求体
      let parsedBody = null;
      try {
        parsedBody = JSON.parse(body);
      } catch (e) {
        console.error('⚠️ Invalid JSON in request body');
        res.writeHead(400);
        res.end('Bad Request');
        return;
      }

      const timestamp = Date.now();
      const logEntry = {
        timestamp,
        request: parsedBody,
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
        res.writeHead(proxyRes.statusCode, proxyRes.headers);

        let responseBody = '';
        proxyRes.on('data', (chunk) => {
          responseBody += chunk.toString();
          res.write(chunk); // 透传给客户端
        });

        proxyRes.on('end', () => {
          // 尝试解析响应（非流式）
          if (!parsedBody.stream) {
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

      proxyReq.on('error', (e) => {
        logEntry.error = e.message;
        const logFile = path.join(LOG_DIR, `${timestamp}_error.json`);
        fs.writeFile(logFile, JSON.stringify(logEntry, null, 2), (err) => {
          if (err) console.error('Failed to write error log:', err.message);
        });
        res.writeHead(502);
        res.end('Bad Gateway');
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
});
