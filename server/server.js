const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Zeeshan',
      age: 22
    },
    {
      name: 'Shantanu',
      age: 22
    }
  ]);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports.app = app;
