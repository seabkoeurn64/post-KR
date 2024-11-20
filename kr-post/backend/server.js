// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware ដើម្បីផ្តល់ឯកសារចល័ត (frontend)
app.use(express.static('frontend'));

// ផ្លូវ API
app.get('/api/status', (req, res) => {
  res.json({ status: 'success', message: 'Backend is working!' });
});

// ចាប់ផ្តើម Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
