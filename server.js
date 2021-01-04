server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

'use strict'; 

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);