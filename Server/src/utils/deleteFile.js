const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
  fs.unlink(path.join(__dirname, '..', filePath), (err) => {
    if (err) {
      // Log but do not crash app
      console.error('Failed to delete file:', filePath, err.message);
    }
  });
};

module.exports = deleteFile;