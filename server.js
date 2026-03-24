/**
 * Shweta Gupta Portfolio – Local Dev Server
 * Run: node server.js
 * Open: http://localhost:3000
 * LAN:  http://<your-ip>:3000
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME = {
  '.html' : 'text/html; charset=utf-8',
  '.css'  : 'text/css; charset=utf-8',
  '.js'   : 'application/javascript; charset=utf-8',
  '.json' : 'application/json',
  '.png'  : 'image/png',
  '.jpg'  : 'image/jpeg',
  '.jpeg' : 'image/jpeg',
  '.gif'  : 'image/gif',
  '.svg'  : 'image/svg+xml',
  '.ico'  : 'image/x-icon',
  '.webp' : 'image/webp',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf'  : 'font/ttf',
  '.txt'  : 'text/plain',
};

function getLocalIP() {
  const ifaces = os.networkInterfaces();
  for (const name of Object.keys(ifaces)) {
    for (const iface of ifaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'your-ip';
}

const server = http.createServer((req, res) => {
  // Sanitize URL – strip query string and prevent path traversal
  let urlPath = req.url.split('?')[0];
  urlPath = decodeURIComponent(urlPath).replace(/\.\./g, '');

  // Default to index.html
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  // Ensure resolved path stays within ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try serving index.html as fallback (SPA-style)
        fs.readFile(path.join(ROOT, 'index.html'), (e, d) => {
          if (e) { res.writeHead(404); res.end('404 Not Found'); return; }
          res.writeHead(200, { 'Content-Type': MIME['.html'] });
          res.end(d);
        });
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
      return;
    }

    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type'  : mime,
      'Cache-Control' : 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('\n========================================');
  console.log('  Shweta Gupta Portfolio – Server Live!');
  console.log('========================================');
  console.log(`  Local   :  http://localhost:${PORT}`);
  console.log(`  Network :  http://${localIP}:${PORT}  (share with others on same Wi-Fi)`);
  console.log('----------------------------------------');
  console.log('  Press Ctrl+C to stop the server.');
  console.log('========================================\n');
});
