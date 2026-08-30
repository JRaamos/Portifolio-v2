import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { createGzip } from 'node:zlib';

const root = resolve(import.meta.dirname, '..', 'dist');
const base = '/Portifolio-v2';
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function resolveFile(pathname) {
  const relative = pathname.slice(base.length).replace(/^\/+/, '');
  let file = resolve(root, relative || 'index.html');
  if (file !== root && !file.startsWith(`${root}${sep}`)) return null;

  try {
    const info = await stat(file);
    if (info.isDirectory()) file = resolve(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return resolve(root, '404.html');
  }
}

createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://${request.headers.host}`);
  if (url.pathname === '/') {
    response.writeHead(302, { Location: `${base}/` });
    response.end();
    return;
  }
  if (!url.pathname.startsWith(base)) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  const file = await resolveFile(decodeURIComponent(url.pathname));
  if (!file) {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  const extension = extname(file);
  const contentType = contentTypes[extension] ?? 'application/octet-stream';
  const compress =
    /^(text\/|application\/(javascript|json|xml))/.test(contentType) &&
    request.headers['accept-encoding']?.includes('gzip');
  response.writeHead(file.endsWith('404.html') ? 404 : 200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
    ...(compress ? { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' } : {}),
  });
  const stream = createReadStream(file);
  if (compress) stream.pipe(createGzip()).pipe(response);
  else stream.pipe(response);
}).listen(port, '127.0.0.1', () => {
  console.log(`GitHub Pages fixture: http://127.0.0.1:${port}${base}/`);
});
