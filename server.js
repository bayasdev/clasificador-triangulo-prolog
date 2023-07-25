const express = require('express');
const swipl = require('swipl');

const app = express();

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load prolog file
swipl.call('consult("program.pl")');

// serve static files
app.use(express.static('public'));

// routes

// classify triangle by sides
app.post('/clasificar', (req, res) => {
  // get sides from request
  const { A, B, C } = req.body;

  // query prolog
  const ret = swipl.call(`clasificar(${A}, ${B}, ${C}, X)`);

  if (ret) {
    return res.json(ret);
  } else {
    return res.status(400).json({ X: 'No es un triángulo' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
