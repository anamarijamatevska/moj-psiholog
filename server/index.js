const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});