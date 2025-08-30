const sharp = require('sharp');
const fs = require('fs').promises;

async function generateFavicons() {
  try {
    // Create different sizes
    const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
    
    // Generate PNG favicons
    for (const size of sizes) {
      await sharp('public/favicon.svg')
        .resize(size, size)
        .png()
        .toFile(`public/favicon-${size}x${size}.png`);
      console.log(`Generated favicon-${size}x${size}.png`);
    }
    
    // Generate Apple touch icon
    await sharp('public/favicon.svg')
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');
    console.log('Generated apple-touch-icon.png');
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();