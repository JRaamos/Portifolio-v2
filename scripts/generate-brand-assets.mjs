import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..', 'public');
const favicon = await readFile(resolve(root, 'favicon.svg'));
const cover = await readFile(resolve(root, 'og-cover.svg'));

await Promise.all([
  sharp(favicon).resize(16, 16).png().toFile(resolve(root, 'favicon-16x16.png')),
  sharp(favicon).resize(32, 32).png().toFile(resolve(root, 'favicon-32x32.png')),
  sharp(favicon).resize(180, 180).png().toFile(resolve(root, 'apple-touch-icon.png')),
  sharp(cover).png({ compressionLevel: 9 }).toFile(resolve(root, 'og-cover.png')),
  sharp(cover).webp({ quality: 84, effort: 5 }).toFile(resolve(root, 'og-cover.webp')),
  sharp(cover).avif({ quality: 62, effort: 5 }).toFile(resolve(root, 'og-cover.avif')),
]);

console.log('Generated favicon and social brand assets.');
