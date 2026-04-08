import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(__dirname, '..', 'public', 'og-image.svg');
const pngPath = path.join(__dirname, '..', 'public', 'og-image.png');

sharp(svgPath)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('PNG image created successfully:', pngPath);
  })
  .catch(err => {
    console.error('Error creating PNG:', err);
  });