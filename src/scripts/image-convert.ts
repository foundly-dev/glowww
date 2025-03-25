import * as fs from "fs";
import * as path from "path";

import sharp from "sharp";

/**
 * Converts PNG files in a directory to downscaled JPEG files
 * @param inputDir Directory containing PNG files
 * @param outputDir Directory for output JPEG files (defaults to same as input)
 * @param width Target width for downscaling (maintains aspect ratio)
 * @param quality JPEG quality (1-100)
 */
async function convertPngToJpeg(
  inputDir: string,
  outputDir: string = inputDir,
  width: number = 1200,
  quality: number = 80,
): Promise<void> {
  try {
    // Create output directory if it doesn't exist
    if (inputDir !== outputDir && !fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Get all PNG files from input directory
    const files = fs
      .readdirSync(inputDir)
      .filter((file) => file.toLowerCase().endsWith(".png"));

    if (files.length === 0) {
      console.log("No PNG files found in the specified directory.");
      return;
    }

    console.log(`Found ${files.length} PNG files. Starting conversion...`);

    // Process each file
    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const outputFileName = file.replace(/\.png$/i, ".jpeg");
      const outputPath = path.join(outputDir, outputFileName);

      console.log(`Converting: ${file} -> ${outputFileName}`);

      try {
        await sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .jpeg({ quality })
          .toFile(outputPath);

        console.log(`✓ Successfully converted ${file}`);
      } catch (err) {
        console.error(`✗ Error converting ${file}:`, err);
      }
    }

    console.log("Conversion complete!");
  } catch (error) {
    console.error("Error during conversion process:", error);
  }
}

// Example usage (uncomment and modify as needed)
// If you run this file directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const inputDir = args[0] || "./images";
  const outputDir = args[1] || inputDir;
  const width = args[2] ? parseInt(args[2], 10) : 1200;
  const quality = args[3] ? parseInt(args[3], 10) : 80;

  console.log(`Starting conversion with parameters:
  - Input directory: ${inputDir}
  - Output directory: ${outputDir}
  - Target width: ${width}px
  - JPEG quality: ${quality}
  `);

  convertPngToJpeg(inputDir, outputDir, width, quality)
    .then(() => console.log("Script execution completed"))
    .catch((err) => console.error("Script execution failed:", err));
}

// Export the function so it can be used in other files
export { convertPngToJpeg };
