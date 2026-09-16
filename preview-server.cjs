const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.webmanifest':'application/manifest+json' };
http.createServer((req, res) => {
  const file = path.join(root, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));
  if (!file.startsWith(root)) return res.writeHead(403).end();
  fs.readFile(file, (err, body) => res.writeHead(err ? 404 : 200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'}).end(err ? 'Not found' : body));
}).listen(4173);
