const express = require('express');
const app = express();
const port = 3000;

const os = require("os");
const hostname = os.hostname();

app.get('/', (req, res) => {
  return res.send(`Hello World! Express ${hostname}`);
})

app.listen(port);