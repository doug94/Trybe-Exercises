const express = require('express');
const { readMoviesFile, readMovieById } = require('./fsutil');

const app = express();

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json(readMovieById(Number(id)));
})