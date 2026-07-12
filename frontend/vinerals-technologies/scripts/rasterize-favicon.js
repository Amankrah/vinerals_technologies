/**
 * Rasterize public/favicon.svg → favicon PNGs, apple/android icons, logo.png, favicon.ico.
 * Run: node scripts/rasterize-favicon.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'favicon.svg');

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'logo.png', size: 512 },
];

async function main() {
  const svg = fs.readFileSync(svgPath);

  for (const { name, size } of outputs) {
    const out = path.join(publicDir, name);
    await sharp(svg).resize(size, size).png().toFile(out);
    console.log(`✓ ${name} (${size}×${size})`);
  }

  // Simple ICO fallback: copy 32×32 PNG (same approach as generate-ico.js)
  fs.copyFileSync(
    path.join(publicDir, 'favicon-32x32.png'),
    path.join(publicDir, 'favicon.ico')
  );
  console.log('✓ favicon.ico (from 32×32)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
