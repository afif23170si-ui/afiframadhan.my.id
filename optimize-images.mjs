import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
    { input: 'public/images/hero-background.png', output: 'public/images/hero-background.webp', width: 1920 },
    { input: 'public/images/bookumkm.png', output: 'public/images/bookumkm.webp', width: 1200 },
    { input: 'public/images/kaspos.png', output: 'public/images/kaspos.webp', width: 1200 },
    { input: 'public/images/profile1.jpg', output: 'public/images/profile1.webp', width: 800 }
];

async function optimize() {
    for (const image of images) {
        try {
            const inputPath = path.join(process.cwd(), image.input);
            const outputPath = path.join(process.cwd(), image.output);

            if (!fs.existsSync(inputPath)) {
                console.warn(`Warning: ${image.input} not found, skipping.`);
                continue;
            }

            console.log(`Optimizing ${image.input} -> ${image.output}...`);
            await sharp(inputPath)
                .resize(image.width, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(outputPath);
            
            console.log(`Converted: ${image.output}`);
        } catch (error) {
            console.error(`Error optimizing ${image.input}:`, error);
        }
    }
}

optimize();
