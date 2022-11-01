const fs = require('fs').promises;
const path = require('path');

async function readMoviesFile() {
  try {
    const data = await fs.readFile('./movies.json', 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (e) {
    console.error(e);
  }
}

async function readMovieById(id) {
  try {
    console.log(path.dirname('./'));
    const data = await fs.readFile('movies.json', 'utf-8');
    const parsedData = JSON.parse(data);
    return parsedData.find((movie) => movie.id === id);
  } catch(e) {
    console.error(e);
  }
}

module.exports = { readMoviesFile, readMovieById };