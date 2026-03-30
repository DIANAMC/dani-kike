const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folder = path.resolve(__dirname, '../src/assets');
const files = [
  'hero-wedding.jpg',
  'prewedding-1.jpg',
  'prewedding-2.jpg',
  'prewedding-3.jpg',
  'venue.jpg',
];

async function optimize() {
  for (const file of files) {
    const input = path.join(folder, file);
    if (!fs.existsSync(input)) {
      console.warn(`Skipping missing file: ${file}`);
      continue;
    }

    const base = path.parse(file).name;
    const outWebp = path.join(folder, `${base}.webp`);
    const outJpg = path.join(folder, `${base}-optimized.jpg`);

    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(outWebp);

    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(outJpg);

    console.log(`Optimized: ${file} -> ${outWebp}, ${outJpg}`);
  }
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
