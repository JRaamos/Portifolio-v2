import { readdir } from 'node:fs/promises';
import { extname, join, parse, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..', 'public');
const sources = [
  join(root, 'profile', 'jonathan-febraio.png'),
  join(root, 'og-cover.png'),
  ...(await readdir(join(root, 'projects')))
    .filter((file) => extname(file).toLowerCase() === '.png')
    .map((file) => join(root, 'projects', file)),
];

await Promise.all(
  sources.flatMap((source) => {
    const { dir, name } = parse(source);
    const resize = source.includes('/profile/')
      ? { width: 960, height: 960, fit: 'cover' }
      : undefined;
    const pipeline = () => (resize ? sharp(source).resize(resize) : sharp(source));
    return [
      pipeline()
        .webp({ quality: 80, effort: 5 })
        .toFile(join(dir, `${name}.webp`)),
      pipeline()
        .avif({ quality: 58, effort: 5 })
        .toFile(join(dir, `${name}.avif`)),
    ];
  }),
);
