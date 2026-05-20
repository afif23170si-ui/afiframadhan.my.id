/**
 * compress-images.mjs
 * Compress project & profile images for better mobile performance.
 * Run: node compress-images.mjs
 * 
 * Backup originals are kept as *.orig.webp before overwriting.
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, 'public/images');

const tasks = [
  // Project images — displayed in 440px wide card (4/3 aspect → 440x330px)
  // Mobile: 340px wide → 340x255. We generate at 2x density max → 880px wide.
  {
    input:   'project-linipos.webp',
    output:  'project-linipos.webp',
    width:   880,
    quality: 78,
  },
  {
    input:   'project-masjid.webp',
    output:  'project-masjid.webp',
    width:   880,
    quality: 78,
  },
  {
    input:   'project-kaspos.webp',
    output:  'project-kaspos.webp',
    width:   880,
    quality: 78,
  },
  {
    input:   'project-bookumkm.webp',
    output:  'project-bookumkm.webp',
    width:   880,
    quality: 78,
  },
  // Profile photo — displayed max 360px wide on desktop, 128px on mobile
  // 2x → 720px is plenty
  {
    input:   'profil1.webp',
    output:  'profil1.webp',
    width:   720,
    quality: 82,
  },
];

async function run() {
  for (const task of tasks) {
    const inputPath  = path.join(imgDir, task.input);
    const outputPath = path.join(imgDir, task.output);
    const backupPath = outputPath.replace('.webp', '.orig.webp');

    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠  Skipping (not found): ${task.input}`);
      continue;
    }

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`📦 Backed up: ${path.basename(backupPath)}`);
    }

    const beforeSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize(task.width, null, { withoutEnlargement: true })
      .webp({ quality: task.quality, effort: 4 })
      .toFile(outputPath + '.tmp');

    // Only replace if new file is actually smaller
    const afterSize = fs.statSync(outputPath + '.tmp').size;
    if (afterSize < beforeSize) {
      fs.renameSync(outputPath + '.tmp', outputPath);
      const saved = ((beforeSize - afterSize) / 1024).toFixed(1);
      const pct   = ((1 - afterSize / beforeSize) * 100).toFixed(0);
      console.log(`✅ ${task.output}: ${(beforeSize/1024).toFixed(0)}KB → ${(afterSize/1024).toFixed(0)}KB (saved ${saved}KB / ${pct}%)`);
    } else {
      fs.unlinkSync(outputPath + '.tmp');
      console.log(`ℹ  ${task.output}: already optimal (${(beforeSize/1024).toFixed(0)}KB), skipped`);
    }
  }

  console.log('\nDone. Run `npm run build` to rebuild the site.');
}

run().catch(console.error);
