const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Sharp is not installed. Please run: npm install --save-dev sharp');
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');

const images = [
  'og-image',
  'og-industries',
  'og-healthcare',
  'og-food-systems',
  'og-sustainability',
  'og-non-profits',
  'og-partners',
  'og-partners-funders',
  'og-partners-government',
  'og-partners-consortiums',
  'og-about',
  'og-mission',
  'og-cooperative',
  'og-team',
];

async function convertSvgToJpg() {
  console.log('🎨 Converting OG images from SVG to JPG...\n');

  for (const imageName of images) {
    const svgPath = path.join(publicDir, `${imageName}.svg`);
    const jpgPath = path.join(publicDir, `${imageName}.jpg`);

    if (!fs.existsSync(svgPath)) {
      console.log(`⚠️  Skipping ${imageName} - SVG not found`);
      continue;
    }

    try {
      await sharp(svgPath, { density: 300 })
        .resize(1200, 630, {
          fit: 'contain',
          // Brand cream paper substrate — matches public/favicon.svg + the Atelier design system.
          // Forest (#1F3A2E) is reserved for dark hero panels; cream reads correctly on every social platform.
          background: { r: 245, g: 239, b: 230 },
        })
        .jpeg({ quality: 95 })
        .toFile(jpgPath);

      console.log(`✅ Generated: ${imageName}.jpg`);
    } catch (error) {
      console.error(`❌ Error converting ${imageName}:`, error.message);
    }
  }

  console.log('\n✨ OG image generation complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Test images with Facebook Debugger: https://developers.facebook.com/tools/debug/');
  console.log('2. Test images with Twitter Card Validator: https://cards-dev.twitter.com/validator');
  console.log('3. Test images with LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/');
}

convertSvgToJpg().catch((error) => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
