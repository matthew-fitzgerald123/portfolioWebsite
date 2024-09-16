const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the EJS files you want to render (only existing ones)
const files = ['index.ejs']; // Adjust this if you add more EJS files

files.forEach(file => {
  const filePath = path.join(__dirname, 'pages', file);
  const outputPath = path.join(__dirname, path.basename(file, '.ejs') + '.html');

  // Read the EJS file
  ejs.renderFile(filePath, {}, (err, str) => {
    if (err) {
      console.error(`Error rendering ${file}: `, err);
    } else {
      // Write the rendered HTML to a file
      fs.writeFileSync(outputPath, str);
      console.log(`Rendered ${file} to ${outputPath}`);
    }
  });
});
