const fs = require('fs');
const { createCanvas } = require('canvas');

const width = 800;
const height = 600;
const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

function generateImage(index) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = colors[index % colors.length];
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.font = 'bold 48px Inter';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Project ${index + 1}`, width / 2, height / 2);

  return canvas.toBuffer();
}

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Generate images
for (let i = 0; i < 3; i++) {
  const buffer = generateImage(i);
  fs.writeFileSync(`public/project${i + 1}.jpg`, buffer);
}
