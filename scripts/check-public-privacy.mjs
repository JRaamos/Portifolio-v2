import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const publicDirectory = resolve(import.meta.dirname, '..', 'dist');
const forbidden = [
  'TWFndmVudHVyZQ==',
  'TWV1IEF1dG8=',
  'U29mdExhdmU=',
  'R2luZ2E=',
  'QW5hanVzdHJh',
].map((value) => Buffer.from(value, 'base64').toString('utf8').toLowerCase());

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = resolve(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    }),
  );
  return nested.flat();
}

const violations = [];
for (const path of await listFiles(publicDirectory)) {
  const content = (await readFile(path)).toString('utf8').toLowerCase();
  if (forbidden.some((name) => content.includes(name))) violations.push(path);
}

if (violations.length) {
  console.error('Public privacy check failed. Restricted client identity found in:');
  violations.forEach((path) => console.error(`- ${path.replace(`${publicDirectory}/`, '')}`));
  process.exitCode = 1;
} else {
  console.log('Public privacy check passed: restricted client identities found 0 times.');
}
