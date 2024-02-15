const mammoth = require("mammoth");
const turndown = require("turndown");
const fs = require("fs");
const path = require("path");

const inputFolder = "./docx/";
const outputFolder = "./src/text/";

// Get all Docx files in the input folder
const docxFiles = fs.readdirSync(inputFolder).filter((file) => {
  return path.extname(file).toLowerCase() === ".docx";
});

// Convert each Docx file to Mdx
docxFiles.forEach((file) => {
  const filePath = path.join(inputFolder, file);

  console.log(`Converting Docx file: ${filePath}`);

  mammoth
    .convertToHtml({ path: filePath })
    .then((result) => {
      const html = result.value;
      const converter = new turndown();
      const mdx = converter.turndown(html);
      const filename = file.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      const outputFile = path.join(
        outputFolder,
        path.basename(filename, ".docx") + ".mdx"
      );

      fs.writeFile(outputFile, mdx, (err) => {
        if (err) throw err;
        console.log(`Mdx file saved: ${outputFile}`);
      });
    })
    .done();
});
