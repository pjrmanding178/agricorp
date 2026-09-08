const express = require('express');
const app = express();
const port = 3000;

// A basic route - homepage
app.get('/', (req, res) => {
  res.send('Welcome to AgriCorp - Farm to Table Marketplace!');
});

// Another route - example
app.get('/products', (req, res) => {
  res.send('Here will be the list of products');
});

// Start the server
app.listen(port, () => {
  console.log(`AgriCorp server running at http://localhost:${port}`);
});