const fs = require('fs');
const path = require('path');

const browserDir = path.join(__dirname, 'docs', 'browser');
const docsDir = path.join(__dirname, 'docs');

// Function to copy directory recursively
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Function to delete directory recursively
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
}

console.log('Moving files from docs/browser/ to docs/...');

// Copy all files from browser to root
fs.readdirSync(browserDir).forEach(item => {
  const srcPath = path.join(browserDir, item);
  const destPath = path.join(docsDir, item);
  
  // Skip if destination already exists and is the same
  if (fs.existsSync(destPath) && item !== 'browser') {
    if (fs.lstatSync(destPath).isDirectory()) {
      deleteFolderRecursive(destPath);
    } else {
      fs.unlinkSync(destPath);
    }
  }
  
  if (item !== 'browser') {
    copyRecursive(srcPath, destPath);
    console.log(`Copied: ${item}`);
  }
});

// Delete the browser directory
console.log('Removing browser directory...');
deleteFolderRecursive(browserDir);

// Create .nojekyll file
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
console.log('Created .nojekyll file');

console.log('Done! Files moved successfully.');

