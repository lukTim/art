const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "images");
const outputDir = path.join(inputDir, "thumbs");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith(".webp")) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    sharp(inputPath)
      .resize({ width: 400 })
      .toFile(outputPath)
      .then(() => console.log(`✔️ ${file} → thumbs/`))
      .catch(err => console.error(err));
  }
});
