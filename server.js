const { STATUS_CODES } = require('http');
const express = require('express');
const app = express();
const port = 8000;
app
  .all('/api/:code', async (req, res) => {
    const { code } = req.params;
    Object.keys(STATUS_CODES).includes(code)
      ? res.sendStatus(code)
      : res.status(400).send(`'${code}' is not a valid HTTP status code.`);
  })
  .listen(port, () =>
    console.log(`Dummy API listening at http://localhost:${port}/api`)
  );
