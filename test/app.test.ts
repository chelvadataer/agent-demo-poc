import assert from 'node:assert/strict';
import type { AddressInfo } from 'node:net';
import { after, before, describe, it } from 'node:test';
import { createApp } from '../src/app.ts';

let server: ReturnType<typeof createApp>;
let base = '';

before(async () => {
  server = createApp();
  await new Promise<void>((r) => server.listen(0, '127.0.0.1', r));
  base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});
after(() => {
  server.close();
});

describe('app', () => {
  it('answers the root route', async () => {
    const res = await fetch(`${base}/`);
    assert.equal(res.status, 200);
    assert.equal(await res.text(), 'health-service');
  });

  it('returns 404 for unknown routes', async () => {
    assert.equal((await fetch(`${base}/nope`)).status, 404);
  });
});
