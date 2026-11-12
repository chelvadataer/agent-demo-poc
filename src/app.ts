import http from 'node:http';

export interface AppOptions {}

export function createApp(_options: AppOptions = {}): http.Server {
  return http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('health-service');
      return;
    }
    if (req.url === '/version') {
      if (req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('health-service 1.0');
      } else {
        res.writeHead(405, { allow: 'GET', 'content-type': 'text/plain' });
        res.end('method not allowed');
      }
      return;
    }
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('not found');
  });
}
