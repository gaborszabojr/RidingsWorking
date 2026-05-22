import fs from 'fs';
import path from 'path';
import convert from 'heic-convert';

const dir = './public/before-after/Pics';

async function run() {
  console.log('Starting HEIC conversion...');
  if (!fs.existsSync(dir)) {
    console.error(`Directory ${dir} does not exist`);
    return;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const baseName = path.parse(file).name;
      const outPath = path.join(dir, `${baseName}.jpg`);
      
      if (fs.existsSync(outPath)) {
        console.log(`Skipping ${file} - already converted.`);
        continue;
      }
      
      console.log(`Converting ${file}...`);
      try {
        const inPath = path.join(dir, file);
        const inputBuffer = fs.readFileSync(inPath);
        const outputBuffer = await convert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.85
        });
        fs.writeFileSync(outPath, outputBuffer);
        console.log(`Successfully converted ${file} -> ${baseName}.jpg`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
  console.log('HEIC conversion completed.');
}

run();
