const fs = require('fs').promises;

async function readSimpsonsFile() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    return data;
  } catch(e) {
    return 'Unable to read the file';
  }
}

module.exports = readSimpsonsFile;