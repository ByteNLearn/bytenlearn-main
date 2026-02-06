const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public', 'images', 'logo.png');
const outputPath = path.join(process.cwd(), 'public', 'images', 'logo-circle.png');

async function createCircularLogo() {
    try {
        console.log(`Processing: ${inputPath}`);
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        const size = Math.min(metadata.width, metadata.height);

        // Create a circular SVG mask
        const roundedCorners = Buffer.from(
            `<svg><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}"/></svg>`
        );

        await image
            .resize(size, size, { fit: 'cover' })
            .composite([{
                input: roundedCorners,
                blend: 'dest-in'
            }])
            .png()
            .toFile(outputPath);

        console.log(`Success! Created: ${outputPath}`);
    } catch (error) {
        console.error('Error processing image:', error);
        process.exit(1);
    }
}

createCircularLogo();
