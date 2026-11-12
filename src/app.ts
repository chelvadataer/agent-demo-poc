import http from 'node:http';

export interface AppOptions {}

export function createApp(_options: AppOptions = {}): http.Server {
  return http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end('health-service');
      return;
    }
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('not found');
  });
}
