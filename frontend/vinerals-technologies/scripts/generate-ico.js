/**
 * Generate favicon.ico from existing PNG files
 *
 * This script combines multiple PNG sizes into a single ICO file
 * Run with: node scripts/generate-ico.js
 */

const fs = require('fs');
const path = require('path');

// PNG files to combine (in order of preference)
const pngFiles = [
  '../public/favicon-16x16.png',
  '../public/favicon-32x32.png',
  '../public/favicon-48x48.png'
];

const outputFile = '../public/favicon.ico';

console.log('🔧 Generating favicon.ico from PNG files...\n');

// For a quick solution, we'll just copy the 32x32 PNG as the ICO
// For a proper multi-resolution ICO, you'd need a library like png-to-ico
const source32 = path.join(__dirname, '../public/favicon-32x32.png');
const destination = path.join(__dirname, outputFile);

try {
  // Check if the source file exists
  if (!fs.existsSync(source32)) {
    console.error('❌ Error: favicon-32x32.png not found!');
    console.log('   Please generate the PNG files first by opening generate-favicons.html');
    process.exit(1);
  }

  // Copy the 32x32 PNG as a simple ICO fallback
  fs.copyFileSync(source32, destination);

  console.log('✅ Successfully created favicon.ico');
  console.log('   Location: public/favicon.ico');
  console.log('   Source: public/favicon-32x32.png (32x32)\n');
  console.log('⚠️  Note: For a proper multi-resolution ICO file, consider using:');
  console.log('   - Online tool: https://www.icoconverter.com/');
  console.log('   - npm package: png-to-ico');
  console.log('   Upload: favicon-16x16.png, favicon-32x32.png, favicon-48x48.png\n');
} catch (error) {
  console.error('❌ Error creating favicon.ico:', error.message);
  process.exit(1);
}
