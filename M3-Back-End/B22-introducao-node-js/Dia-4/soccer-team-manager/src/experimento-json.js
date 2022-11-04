const express = require('express');

const app = express();

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.name}` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}` });
});

app.listen(3002, () => console.log('Ouvindo na porta 3002'));