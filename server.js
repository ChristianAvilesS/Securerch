const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "web_pages" directory
app.use(express.static(path.join(__dirname, 'web_pages')));

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_pages/pages/index.html'));
});

// Serve registro.html at the /registro URL
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_pages/pages/registro.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

