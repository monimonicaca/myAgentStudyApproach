// dashscope-proxy.js

const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  console.log(`📥 Received ${req.method} ${req.url}`);


  if (req.method === 'POST' && req.url === '/v1/chat/completions') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      // 从原始请求中获取 Authorization 头
      console.log(`req end: ${body}`);
      console.log(`req headers: ${JSON.stringify(req.headers)}`);
      const authHeader = req.headers['authorization'] || '';

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

      const proxyReq = https.request(options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res); // 自动处理流式/非流式 + 自动 end()
      });

      proxyReq.on('error', (e) => {
        console.error('Proxy error:', e.message);
        res.writeHead(502);
        res.end('Bad Gateway');
      });

      proxyReq.write(body);
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

